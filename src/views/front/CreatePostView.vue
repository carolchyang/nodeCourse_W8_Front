<template>
  <h1 class="header">張貼動態</h1>

  <VForm
    v-slot="{ errors, meta }"
    class="card p-md-8"
    id="form"
    @submit="createPost"
    ref="postForm"
  >
    <div class="mb-4">
      <label for="content" class="form-label">貼文內容</label>
      <VField
        type="text"
        id="content"
        placeholder="輸入您的貼文內容"
        name="貼文內容"
        class="form-control"
        :class="{ 'is-invalid': errors['貼文內容'] }"
        rows="5"
        rules="required|max:200"
        v-model="tempPost.content"
        as="textarea"
      ></VField>
      <error-message
        name="貼文內容"
        class="invalid-feedback text-danger"
      ></error-message>
    </div>

    <div class="fileBtn mb-4" :class="{ 'mb-8': tempPost.image == '' }">
      <label for="image" class="rounded-1">上傳圖片</label>
      <input
        type="file"
        accept="image/*"
        id="image"
        name="image"
        @change="uploadImage"
      />
      <small class="ms-4 text-danger">{{ imageMsg }}</small>
    </div>
    <div
      class="bgCover position-relative mb-8"
      :style="{ backgroundImage: 'url(' + tempPost.image + ')' }"
      v-if="tempPost.image"
    >
      <a href="#" class="cardCloseBtn" @click.prevent="resetImage">
        <i class="bi bi-x-lg"></i>
      </a>
    </div>

    <div class="text-center">
      <button
        type="submit"
        class="effectBtn btn btn-primary w-100"
        :disabled="!meta.valid"
      >
        送出貼文
      </button>
    </div>
  </VForm>
</template>

<script>
import { mapState, mapActions } from "pinia";
import statusStore from "@/stores/statusStore";
import postStore from "@/stores/postStore";
import { apiCreatePost } from "@/scripts/api";

export default {
  name: "CreatePostView",
  data() {
    return {
      // 圖片錯誤訊息
      imageMsg: "",
      // 暫存資料
      tempPost: {
        content: "",
        image: "",
      },
    };
  },
  methods: {
    // 建立貼文
    createPost() {
      this.toggleLoading(true);
      apiCreatePost(this.tempPost)
        .then(() => {
          this.toggleLoading(false);
          this.pushMessage({
            style: "dark",
            content: "已建立貼文",
          });
          this.$router.push("/");
        })
        .catch((err) => {
          this.toggleLoading(false);
          this.pushMessage({
            style: "danger",
            content: err.response?.data?.message || "建立貼文失敗",
          });
        });
    },
    async uploadImage() {
      const formData = new FormData(document.getElementById("form"));
      await this.upload(formData);
      this.tempPost.image = this.tempImage.url;
      this.imageMsg = this.tempImage.msg;
    },
    // 清空圖片
    resetImage() {
      // 清空圖片 input 必免傳同樣圖片時出錯
      document.getElementById("image").value = "";
      this.tempPost.image = "";
      this.imageMsg = "";
    },
    ...mapActions(statusStore, ["toggleLoading", "pushMessage"]),
    ...mapActions(postStore, ["upload"]),
  },
  computed: {
    ...mapState(postStore, ["tempImage"]),
  },
};
</script>

<style lang="scss" scoped>
.cardCloseBtn {
  color: red;
  font-size: 1.5rem;
  &:hover {
    transform: scale(1.25);
  }
}
</style>
