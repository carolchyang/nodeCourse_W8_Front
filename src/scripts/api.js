import axios from "axios";

const api = process.env.VUE_APP_API;

// Users
export const apiUserSignUp = (data) => axios.post(`${api}/user/sign_up`, data);
export const apiUserSignIn = (data) => axios.post(`${api}/user/sign_in`, data);
export const apiUpdatePassword = (data) =>
  axios.post(`${api}/user/updatePassword`, data);
export const apiGetProfile = () => axios.get(`${api}/user/profile`);
export const apiUpdateProfile = (data) =>
  axios.patch(`${api}/user/profile`, data);
export const apiGetLikeList = () => axios.get(`${api}/user/getLikeList`);
export const apiCreateFollow = (id) => axios.post(`${api}/user/${id}/follow`);
export const apiDelFollow = (id) => axios.delete(`${api}/user/${id}/follow`);
export const apiGetFollowingList = () =>
  axios.get(`${api}/user/getFollowingList`);

// Post
export const apiGetPosts = (data) =>
  axios.get(`${api}/posts`, { params: data });
export const apiGetUserPosts = (data, id) =>
  axios.get(`${api}/posts/user/${id}`, { params: data });
export const apiGetPost = (id) => axios.get(`${api}/post/${id}`);
export const apiCreatePost = (data) => axios.post(`${api}/post`, data);
export const apiDelPost = (id) => axios.delete(`${api}/post/${id}`);
export const apiCreateLike = (id) => axios.post(`${api}/post/${id}/like`);
export const apiDelLike = (id) => axios.delete(`${api}/post/${id}/like`);
export const apiCreateComment = (data, postId) =>
  axios.post(`${api}/post/${postId}/comment`, data);
export const apiDelComment = (commentId) =>
  axios.delete(`${api}/post/${commentId}/comment`);

// UpLoad
export const apiUpLoad = (data, type) =>
  axios.post(`${api}/upload?type=${type}`, data);
