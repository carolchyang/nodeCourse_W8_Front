import { defineStore } from "pinia";
import { apiUpLoad, apiCreateLike, apiDelLike } from "@/scripts/api";
import statusStore from "./statusStore";

const status = statusStore();

export default defineStore("postStore", {
  state: () => {
    return {
      tempImage: {
        msg: "",
        url: "",
      },
    };
  },
  actions: {
    // 上傳圖片
    async upload(data, type = "") {
      status.isLoading = true;
      await apiUpLoad(data, type)
        .then((res) => {
          this.tempImage = {
            msg: "",
            url: res.data.data,
          };
          status.isLoading = false;
        })
        .catch((err) => {
          this.tempImage = {
            msg: err.response?.data?.message || "上傳圖片失敗",
            url: "",
          };
          status.isLoading = false;
        });
    },
    // 按讚
    async createLike(id) {
      await apiCreateLike(id)
        .then(() => {
          status.pushMessage({
            style: "dark",
            content: "已按讚",
          });
        })
        .catch((err) => {
          status.pushMessage({
            style: "danger",
            content: err.response?.data?.message || "按讚失敗",
          });
        });
    },
    // 取消按讚
    async delLike(id) {
      await apiDelLike(id)
        .then(() => {
          status.pushMessage({
            style: "dark",
            content: "取消按讚成功",
          });
        })
        .catch((err) => {
          status.pushMessage({
            style: "danger",
            content: err.response?.data?.message || "取消按讚失敗",
          });
        });
    },
  },
});
