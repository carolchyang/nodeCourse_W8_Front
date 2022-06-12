import router from "@/router";
import { defineStore } from "pinia";
import { apiGetProfile, apiCreateFollow, apiDelFollow } from "@/scripts/api";
import statusStore from "./statusStore";
import { clearToken } from "@/scripts/methods";

const status = statusStore();

export default defineStore("userStore", {
  state: () => {
    return {
      // 個人資料
      profile: {
        name: "",
        photo: "",
        gender: "",
        _id: "",
        follows: [],
        following: [],
      },
    };
  },
  actions: {
    // 取得用戶資料
    async getProfile() {
      status.isLoading = true;
      await apiGetProfile()
        .then((res) => {
          this.profile = res.data.data;
          status.isLoading = false;
        })
        .catch((err) => {
          status.pushMessage({
            style: "danger",
            content:
              err.response?.data?.message || "取得個人資料失敗，請重新登入",
          });
          status.isLoading = false;

          // 若驗證個人資料失敗則強制登出
          clearToken();
          router.push("/signin");
        });
    },
    // 更新 profile 資料
    updateProfileData(data) {
      this.profile = data;
    },
    // 新增追蹤
    async createFollow(id) {
      await apiCreateFollow(id)
        .then(() => {
          status.pushMessage({
            style: "dark",
            content: "已追蹤",
          });
        })
        .catch((err) => {
          status.pushMessage({
            style: "danger",
            content: err.response?.data?.message || "追蹤失敗",
          });
        });
    },
    // 取消追蹤
    async delFollow(id) {
      await apiDelFollow(id)
        .then(() => {
          status.pushMessage({
            style: "dark",
            content: "取消追蹤成功",
          });
        })
        .catch((err) => {
          status.pushMessage({
            style: "danger",
            content: err.response?.data?.message || "取消追蹤失敗",
          });
        });
    },
  },
});
