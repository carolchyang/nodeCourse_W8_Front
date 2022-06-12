<template>
  <div class="header header-rounded d-flex mb-5">
    <img
      :src="personalInfo.photo"
      class="headerThumbnail"
      v-if="personalInfo.photo"
    />
    <img
      src="../../assets/images/user_default.png"
      class="headerThumbnail"
      v-else
    />
    <div class="headerContent">
      <h2 class="text-start h5 fw-bold me-auto">
        <span>{{ personalInfo.name }}</span>
        <span class="d-block d-sm-block">的貼文牆</span>
      </h2>
      <div v-if="personalId !== profile._id">
        <button
          type="button"
          class="btn btn-warning py-2 px-6 px-sm-8 border-dark fw-bold shadow"
          @click.prevent="toggleFollow(personalId, 'createFollow')"
          v-if="!isFollow"
        >
          追蹤
        </button>
        <button
          type="button"
          class="btn btn-secondary py-2 px-4 px-sm-8 border-dark fw-bold shadow"
          @click.prevent="toggleFollow(personalId, 'delFollow')"
          v-else
        >
          取消追蹤
        </button>
      </div>
    </div>
  </div>

  <div class="row g-3 mb-4">
    <div class="col-12 col-md-4">
      <select
        class="form-select form-select-sm"
        v-model="sort"
        @change="getUserPosts()"
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
          @click.prevent="getUserPosts()"
        >
          <i class="bi bi-search h3"></i>
        </button>
      </div>
    </div>
  </div>

  <ArticleComponent
    :data="posts"
    @get-data="getUserPosts"
    v-if="posts?.length"
  ></ArticleComponent>

  <EmptyCardComponent v-else>
    <template #default>目前尚無動態，趕快叫他新增貼文吧！</template>
  </EmptyCardComponent>
</template>

<script>
import ArticleComponent from "@/components/ArticleComponent.vue";
import EmptyCardComponent from "@/components/EmptyCardComponent.vue";
import { mapState, mapActions } from "pinia";
import statusStore from "@/stores/statusStore";
import userStore from "@/stores/userStore";
import { apiGetUserPosts } from "@/scripts/api";

export default {
  name: "DynamicWallView",
  data() {
    return {
      personalId: "",
      personalInfo: {},
      keyword: "",
      sort: "desc",
      posts: [],
    };
  },
  methods: {
    // 取得貼文資料
    async getUserPosts() {
      let tempData = {
        // 排序順序 1 新到舊 asc 舊到新
        sort: this.sort,
        // 關鍵字篩選 若沒有則返回所有貼文
        keyword: this.keyword,
      };

      this.toggleLoading(true);

      apiGetUserPosts(tempData, this.personalId)
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
    // 切換追蹤狀態
    async toggleFollow(id, toggleType) {
      this.toggleLoading(true);
      await this[toggleType](id);
      this.getProfile();
    },
    ...mapActions(statusStore, ["toggleLoading"]),
    ...mapActions(userStore, ["getProfile", "createFollow", "delFollow"]),
  },
  computed: {
    // 判斷是否追蹤
    isFollow() {
      let val = false;
      const data = this.profile?.following || [];
      data.forEach((item) => {
        if (item.user == this.personalId) {
          val = true;
        }
      });
      return val;
    },
    ...mapState(userStore, ["profile"]),
  },
  components: {
    ArticleComponent,
    EmptyCardComponent,
  },
  async created() {
    // 取得 personalWall 用戶資料
    this.personalId = this.$route.params.id;
    this.personalInfo = {
      name: this.$route.query.name,
      photo: this.$route.query.photo,
    };
    this.getUserPosts();
  },
};
</script>
