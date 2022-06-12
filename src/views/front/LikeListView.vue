<template>
  <h1 class="header">我按讚的貼文</h1>
  <ul class="mb-6">
    <li class="card customList py-4" v-for="(item, key) in likes" :key="key">
      <div class="d-flex align-items-center">
        <router-link
          :to="{
            path: `/personalwall/${item.user?._id}`,
            query: {
              name: item.user?.name,
              photo: item.user?.photo,
            },
          }"
          class="me-6 me-md-4 link-dark text-center fw-bold"
        >
          <img
            :src="item.user?.photo"
            class="thumbnail thumbnail-xl d-none d-md-block mx-auto mb-1 border-0"
            v-if="item.user?.photo"
          />
          <img
            src="../../assets/images/user_default.png"
            class="thumbnail thumbnail-xl d-none d-md-block mx-auto mb-1 border-0"
            v-else
          />
          {{ item.user?.name }}
        </router-link>

        <div class="me-auto textTruncate">
          <p class="mb-md-3">
            {{ item.content }}
          </p>
          <p class="text-light fs-6">
            <span class="d-none d-mb-inline-block"> 發文時間： </span>
            <span>
              {{ $getTime(item.createdAt) }}
            </span>
          </p>
        </div>
        <a
          href="#"
          class="d-none d-md-block link-dark me-3 me-sm-9 text-center fw-bold text-decoration-none"
          @click.prevent="toggleLike(item._id, 'delLike')"
        >
          <i class="bi bi-hand-thumbs-up text-primary fs-4 lh-sm"></i>
          <span class="d-block">取消</span>
        </a>
        <router-link
          :to="{ path: `/singlepost/${item._id}` }"
          class="link-dark me-md-9 text-center fw-bold text-decoration-none"
        >
          <i class="bi bi-arrow-right-circle fs-4 lh-sm"></i>
          <span class="d-block">查看</span>
        </router-link>
      </div>
    </li>
  </ul>

  <EmptyCardComponent v-if="!likes.length">
    <template #default>目前還未有按讚貼文</template>
  </EmptyCardComponent>
</template>

<script>
import EmptyCardComponent from "@/components/EmptyCardComponent.vue";
import { mapActions } from "pinia";
import { apiGetLikeList } from "@/scripts/api";
import statusStore from "@/stores/statusStore";
import postStore from "@/stores/postStore";

export default {
  name: "LikeListView",
  data() {
    return {
      likes: [],
    };
  },
  methods: {
    // 取得按讚
    getLikes() {
      this.toggleLoading(true);
      apiGetLikeList()
        .then((res) => {
          this.toggleLoading(false);
          this.likes = res.data.data;
        })
        .catch((err) => {
          this.toggleLoading(false);
          this.pushMessage({
            style: "danger",
            content: err.response?.data?.message || "取得按讚失敗",
          });
        });
    },
    // 切換按讚狀態
    async toggleLike(id, toggleType) {
      this.toggleLoading(true);
      await this[toggleType](id);
      await this.getLikes();
      this.toggleLoading(false);
    },
    ...mapActions(statusStore, ["toggleLoading", "pushMessage"]),
    ...mapActions(postStore, ["delLike"]),
  },
  components: {
    EmptyCardComponent,
  },
  created() {
    this.getLikes();
  },
};
</script>
