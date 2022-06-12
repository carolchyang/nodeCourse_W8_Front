<template>
  <ul class="mb-10">
    <li class="card customList" v-for="item in data" :key="item._id">
      <div class="d-flex align-items-center mb-4">
        <router-link
          :to="{
            path: `/personalwall/${item.user?._id}`,
            query: { name: item.user?.name, photo: item.user?.photo },
          }"
          class="cardImgLink"
        >
          <img
            :src="item.user?.photo"
            class="thumbnail thumbnail-xl"
            v-if="item.user?.photo"
          />
          <img
            src="../assets/images/user_default.png"
            class="thumbnail thumbnail-xl"
            v-else
          />
        </router-link>
        <div class="fw-bold ms-4">
          {{ item.user?.name }}
          <span class="d-block mt-1 text-light fs-7 fw-normal">
            {{ $getTime(item.createdAt) }}
          </span>
        </div>

        <!-- 若有 postId 則為單一貼文頁面不給刪除貼文 -->
        <a
          href="#"
          class="cardCloseBtn"
          @click.prevent="openDelModal(item._id, 'del-post')"
          v-if="profile._id === item.user?._id && !postId"
        >
          <i class="bi bi-x-lg"></i>
        </a>
      </div>
      <div class="mb-5">
        <p class="mb-4 text-break">
          {{ item.content }}
        </p>
        <div
          class="bgCover mb-4"
          :style="{ backgroundImage: 'url(' + item.image + ')' }"
          v-if="item.image"
        ></div>
        <div class="mb-4">
          <a
            href="#"
            class="link-primary thumbsIcon"
            @click.prevent="toggleLike(item._id, 'delLike')"
            v-if="item.likes.includes(profile._id)"
          >
            <i class="bi bi-hand-thumbs-up fs-4 me-2"></i>
            <span class="me-2">
              {{ item.likes?.length }}
            </span>
            <span> 已按讚</span>
          </a>
          <a
            href="#"
            class="link-light thumbsIcon"
            @click.prevent="toggleLike(item._id, 'createLike')"
            v-else
          >
            <i class="bi bi-hand-thumbs-up fs-4 me-2"></i>
            <span v-if="item.likes?.length">
              {{ item.likes?.length }}
            </span>
            <span v-else> 成為第一個按讚的人 </span>
          </a>
        </div>
        <div class="d-flex align-items-center">
          <img
            :src="profile?.photo"
            class="thumbnail thumbnail-lg me-2"
            v-if="profile?.photo"
          />
          <img
            src="../assets/images/user_default.png"
            class="thumbnail thumbnail-lg me-2"
            v-else
          />
          <div class="input-group flex-row-reverse">
            <button
              class="effectBtn btn btn-primary py-2 px-5 px-sm-10"
              type="button"
              id="sendmessage"
              @click.prevent="createComment($event, item._id)"
            >
              留言
            </button>
            <input
              type="text"
              class="form-control py-2 border-end-0"
              placeholder="留言..."
              aria-label="sendmessage"
              aria-describedby="sendmessage"
            />
          </div>
        </div>
      </div>
      <ul v-if="item.comments?.length">
        <li
          class="customList position-relative mb-4 p-4 bg-secondary rounded-2"
          v-for="commentItem in item.comments"
          :key="commentItem._id"
        >
          <div class="d-flex align-items-center mb-3">
            <router-link
              :to="{
                path: `/personalwall/${commentItem.user?._id}`,
                query: {
                  name: commentItem.user?.name,
                  photo: commentItem.user?.photo,
                },
              }"
              class="cardImgLink"
            >
              <img
                :src="commentItem.user?.photo"
                class="thumbnail thumbnail-lg"
                v-if="commentItem.user?.photo"
              />
              <img
                src="../assets/images/user_default.png"
                class="thumbnail thumbnail-lg"
                v-else
              />
            </router-link>
            <div class="fw-bold ms-3">
              {{ commentItem.user?.name }}
              <span class="d-block mt-1 text-light fs-7 fw-normal">
                {{ $getTime(commentItem.createdAt) }}
              </span>
            </div>
            <a
              href="#"
              class="cardCloseBtn"
              @click.prevent="openDelModal(commentItem._id, 'del-comment')"
              v-if="profile._id === commentItem.user?._id"
            >
              <i class="bi bi-x-lg"></i>
            </a>
          </div>

          <p class="ms-12 text-break">{{ commentItem.content }}</p>
        </li>
      </ul>
    </li>
  </ul>

  <DelModalComponent @del-data="delData">
    <template #default>
      <p class="d-md-inline-block mb-3 mb-md-0">
        確定要刪除此則
        <b class="text-danger">{{ modal.title }}</b>
        ？
      </p>
      <span>（刪除後無法回復）</span>
    </template>
  </DelModalComponent>
</template>

<script>
import DelModalComponent from "@/components/DelModalComponent.vue";
import { mapState, mapActions } from "pinia";
import statusStore from "@/stores/statusStore";
import modalStore from "@/stores/modalStore";
import userStore from "@/stores/userStore";
import postStore from "@/stores/postStore";
import { apiDelPost, apiDelComment, apiCreateComment } from "@/scripts/api";

export default {
  name: "ArticleComponent",
  props: ["data", "postId"],
  emits: ["get-data"],
  methods: {
    // 開啟 DelModal
    openDelModal(id, delItem) {
      const modal = {
        type: delItem,
        id,
        title: delItem == "del-post" ? "貼文" : "留言",
        content: "",
      };
      this.toggleDelModal(modal);
    },
    // 刪除貼文/回覆
    delData() {
      const apiName =
        this.modal.type == "del-post" ? apiDelPost : apiDelComment;
      this.toggleLoading(true);
      apiName(this.modal.id)
        .then(() => {
          this.$emit("get-data");
          this.closeDelModal();
          this.pushMessage({
            style: "dark",
            content: `刪除${this.modal.title}成功`,
          });
        })
        .catch((err) => {
          this.toggleLoading(false);
          this.closeDelModal();
          this.pushMessage({
            style: "danger",
            content:
              err.response?.data?.message || `刪除${this.modal.title}失敗`,
          });
        });
    },
    // 切換按讚狀態
    async toggleLike(id, toggleType) {
      this.toggleLoading(true);
      await this[toggleType](id);
      this.$emit("get-data");
    },
    // 建立回覆
    async createComment(e, id) {
      // 取得回覆內容
      const target = e.target.nextElementSibling;
      let content = target.value.trim();
      if (!content) {
        return;
      }

      this.toggleLoading(true);
      apiCreateComment({ content }, id)
        .then(() => {
          target.value = "";
          this.$emit("get-data");
          this.pushMessage({
            style: "dark",
            content: "建立回覆成功",
          });
        })
        .catch((err) => {
          this.toggleLoading(false);
          this.pushMessage({
            style: "danger",
            content: err.response?.data?.message || "建立回覆失敗",
          });
        });
    },
    ...mapActions(modalStore, ["toggleDelModal", "closeDelModal"]),
    ...mapActions(statusStore, ["toggleLoading", "pushMessage"]),
    ...mapActions(postStore, ["delLike", "createLike"]),
  },
  computed: {
    ...mapState(userStore, ["profile"]),
    ...mapState(modalStore, ["modal"]),
  },
  components: {
    DelModalComponent,
  },
};
</script>

<style lang="scss" scoped>
.pre-line {
  white-space: pre-line;
}
</style>
