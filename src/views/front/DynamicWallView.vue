<template>
  <div class="row g-3 mb-4">
    <div class="col-12 col-md-4">
      <select
        class="form-select form-select-sm"
        v-model="sort"
        @change="getPosts()"
      >
        <option value="desc">由新到舊</option>
        <option value="asc">由舊到新</option>
      </select>
    </div>
    <div class="col-12 col-md-8">
      <div class="input-group input-group-sm">
        <input
          type="text"
          class="form-control"
          placeholder="搜尋貼文"
          aria-label="search"
          aria-describedby="search"
          v-model.trim="keyword"
        />
        <button
          class="effectBtn btn btn-primary py-0 px-3"
          type="button"
          id="search"
          @click.prevent="getPosts()"
        >
          <i class="bi bi-search h3"></i>
        </button>
      </div>
    </div>
  </div>

  <ArticleComponent
    :data="posts"
    @get-data="getPosts"
    v-if="posts?.length"
  ></ArticleComponent>

  <EmptyCardComponent v-else>
    <template #default>目前尚無動態，新增一則貼文吧！</template>
  </EmptyCardComponent>
</template>

<script>
import ArticleComponent from "@/components/ArticleComponent.vue";
import EmptyCardComponent from "@/components/EmptyCardComponent.vue";
import { mapActions } from "pinia";
import statusStore from "@/stores/statusStore";
import { apiGetPosts } from "@/scripts/api";

export default {
  name: "DynamicWallView",
  data() {
    return {
      keyword: "",
      sort: "desc",
      posts: [],
    };
  },
  methods: {
    // 取得貼文
    getPosts() {
      let tempData = {
        // 排序順序 1 新到舊 asc 舊到新
        sort: this.sort,
        // 關鍵字篩選 若沒有則返回所有貼文
        keyword: this.keyword,
      };

      this.toggleLoading(true);

      apiGetPosts(tempData)
        .then((res) => {
          this.posts = res.data.data;
          this.toggleLoading(false);
        })
        .catch((err) => {
          this.toggleLoading(false);
          this.pushMessage({
            style: "danger",
            content: err.response?.data?.message || "取得貼文失敗",
          });
        });
    },
    ...mapActions(statusStore, ["toggleLoading", "pushMessage"]),
  },
  components: {
    ArticleComponent,
    EmptyCardComponent,
  },
  created() {
    this.getPosts();
  },
};
</script>
