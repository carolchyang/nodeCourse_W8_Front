<template>
  <h1 class="header">追蹤名單</h1>

  <ul class="mb-6">
    <li
      class="card customList"
      v-for="(item, key) in follows"
      :key="key"
      :class="{ disabled: !item.user }"
    >
      <div class="d-flex flex-column flex-md-row align-items-center">
        <img
          :src="item.user?.photo"
          class="thumbnail thumbnail-xl d-none d-md-block border-0 me-4"
          v-if="item.user?.photo"
        />
        <img
          src="../../assets/images/user_default.png"
          class="thumbnail thumbnail-xl d-none d-md-block border-0 me-4"
          v-else
        />
        <div class="me-md-auto mb-3 mb-md-0">
          <div class="mb-1 fw-bold">
            {{ item.user?.name }}
          </div>
          <p class="d-none d-md-block text-light fs-6">
            <span class="me-3"> 追蹤時間：{{ $getTime(item.createdAt) }} </span>
            <span> 已追蹤 {{ $getDiffTime(item.createdAt) }}！ </span>
          </p>
        </div>
        <a
          href="#"
          class="d-none d-md-block link-dark me-3 me-sm-9 text-center fw-bold text-decoration-none"
          @click.prevent="toggleFollow(item.user?._id, 'delFollow')"
        >
          <i class="bi bi-trash3 text-primary fs-4 lh-sm"></i>

          <span class="d-block">取消</span>
        </a>
        <!-- 若找不到用戶資訊 -->
        <p class="text-center fs-6" v-if="!item.user">
          此用戶
          <span class="d-block">已被刪除</span>
        </p>
        <router-link
          :to="{
            path: `/personalwall/${item.user?._id}`,
            query: {
              name: item.user?.name,
              photo: item.user?.photo,
            },
          }"
          class="link-dark me-md-9 text-center fw-bold text-decoration-none"
          v-else
        >
          <i class="bi bi-arrow-right-circle fs-4 lh-sm"></i>
          <span class="d-block">查看</span>
        </router-link>
      </div>
    </li>
  </ul>

  <EmptyCardComponent v-if="!follows.length">
    <template #default>目前還未追蹤任何人</template>
  </EmptyCardComponent>
</template>

<script>
import EmptyCardComponent from "@/components/EmptyCardComponent.vue";
import { mapActions } from "pinia";
import { apiGetFollowingList } from "@/scripts/api";
import statusStore from "@/stores/statusStore";
import userStore from "@/stores/userStore";

export default {
  name: "FollowListView",
  data() {
    return {
      follows: [],
    };
  },
  methods: {
    // 取得追蹤
    getFollows() {
      this.toggleLoading(true);
      apiGetFollowingList()
        .then((res) => {
          this.toggleLoading(false);
          this.follows = res.data.data;
        })
        .catch((err) => {
          this.toggleLoading(false);
          this.pushMessage({
            style: "danger",
            content: err.response?.data?.message || "取得追蹤失敗",
          });
        });
    },
    // 切換追蹤狀態
    async toggleFollow(id, toggleType) {
      this.toggleLoading(true);
      await this[toggleType](id);
      await this.getFollows();
      this.toggleLoading(false);
    },
    ...mapActions(statusStore, ["toggleLoading", "pushMessage"]),
    ...mapActions(userStore, ["delFollow"]),
  },
  components: {
    EmptyCardComponent,
  },
  created() {
    this.getFollows();
  },
};
</script>
