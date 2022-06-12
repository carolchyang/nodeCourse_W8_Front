"use strict";(self["webpackChunknodecourse"]=self["webpackChunknodecourse"]||[]).push([[198],{1885:function(e,t,a){a.d(t,{Ac:function(){return u},HS:function(){return i},K$:function(){return b},MH:function(){return m},OJ:function(){return _},T8:function(){return k},TV:function(){return r},TY:function(){return d},f1:function(){return M},fN:function(){return f},fj:function(){return w},ht:function(){return P},lC:function(){return p},mh:function(){return h},pY:function(){return n},tO:function(){return g},td:function(){return v},zB:function(){return c},zk:function(){return y}});var s=a(6265),o=a.n(s);const l="https://warm-ridge-65785.herokuapp.com",n=e=>o().post(`${l}/user/sign_up`,e),r=e=>o().post(`${l}/user/sign_in`,e),i=e=>o().post(`${l}/user/updatePassword`,e),d=()=>o().get(`${l}/user/profile`),m=e=>o().patch(`${l}/user/profile`,e),c=()=>o().get(`${l}/user/getLikeList`),p=e=>o().post(`${l}/user/${e}/follow`),u=e=>o()["delete"](`${l}/user/${e}/follow`),g=()=>o().get(`${l}/user/getFollowingList`),f=e=>o().get(`${l}/posts`,{params:e}),h=(e,t)=>o().get(`${l}/posts/user/${t}`,{params:e}),b=e=>o().get(`${l}/post/${e}`),v=e=>o().post(`${l}/post`,e),w=e=>o()["delete"](`${l}/post/${e}`),y=e=>o().post(`${l}/post/${e}/like`),_=e=>o()["delete"](`${l}/post/${e}/like`),M=(e,t)=>o().post(`${l}/post/${t}/comment`,e),k=e=>o()["delete"](`${l}/post/${e}/comment`),P=(e,t)=>o().post(`${l}/upload?type=${t}`,e)},2323:function(e,t,a){var s=a(3766),o=a(7965);t["Z"]=(0,s.Q_)("modalStore",{state:()=>({modal:{type:"",id:"",title:"",content:""}}),actions:{toggleDelModal(e){this.modal=e,this.bsModal=(0,o.$7)("delModal"),this.bsModal.show()},toggleMsgModal(e){this.modal=e,this.bsModal=(0,o.$7)("msgModal"),this.bsModal.show()},closeDelModal(){this.modal={type:"",id:"",title:"",content:""},this.bsModal.hide()}}})},7484:function(e,t,a){var s=a(3766),o=a(1885),l=a(6294);const n=(0,l.Z)();t["Z"]=(0,s.Q_)("postStore",{state:()=>({tempImage:{msg:"",url:""}}),actions:{async upload(e,t=""){n.isLoading=!0,await(0,o.ht)(e,t).then((e=>{this.tempImage={msg:"",url:e.data.data},n.isLoading=!1})).catch((e=>{this.tempImage={msg:e.response?.data?.message||"上傳圖片失敗",url:""},n.isLoading=!1}))},async createLike(e){await(0,o.zk)(e).then((()=>{n.pushMessage({style:"dark",content:"已按讚"})})).catch((e=>{n.pushMessage({style:"danger",content:e.response?.data?.message||"按讚失敗"})}))},async delLike(e){await(0,o.OJ)(e).then((()=>{n.pushMessage({style:"dark",content:"取消按讚成功"})})).catch((e=>{n.pushMessage({style:"danger",content:e.response?.data?.message||"取消按讚失敗"})}))}}})},4331:function(e,t,a){var s=a(1120),o=a(3766),l=a(1885),n=a(6294),r=a(7965);const i=(0,n.Z)();t["Z"]=(0,o.Q_)("userStore",{state:()=>({profile:{name:"",photo:"",gender:"",_id:"",follows:[],following:[]}}),actions:{async getProfile(){i.isLoading=!0,await(0,l.TY)().then((e=>{this.profile=e.data.data,i.isLoading=!1})).catch((e=>{i.pushMessage({style:"danger",content:e.response?.data?.message||"取得個人資料失敗，請重新登入"}),i.isLoading=!1,(0,r.qz)(),s.Z.push("/signin")}))},updateProfileData(e){this.profile=e},async createFollow(e){await(0,l.lC)(e).then((()=>{i.pushMessage({style:"dark",content:"已追蹤"})})).catch((e=>{i.pushMessage({style:"danger",content:e.response?.data?.message||"追蹤失敗"})}))},async delFollow(e){await(0,l.Ac)(e).then((()=>{i.pushMessage({style:"dark",content:"取消追蹤成功"})})).catch((e=>{i.pushMessage({style:"danger",content:e.response?.data?.message||"取消追蹤失敗"})}))}}})},7198:function(e,t,a){a.r(t),a.d(t,{default:function(){return G}});var s=a(3396),o=a(7139),l=a(9242);const n=(0,s._)("h1",{class:"header"},"修改個人資料",-1),r={class:"navTab"},i={class:"nav nav-tabs",id:"nav-tab",role:"tablist"},d={class:"tab-content navTabContent",id:"nav-tabContent"},m={class:"tab-pane fade show active px-4 py-8 px-md-8",id:"nav-profile",role:"tabpanel","aria-labelledby":"nav-profile-tab"},c={class:"d-flex justify-content-center mb-6"},p={class:"fileBtn me-5 text-center"},u=(0,s._)("label",{for:"image"},"上傳大頭照",-1),g={class:"mb-4 text-center text-danger"},f={class:"mb-4"},h=(0,s._)("label",{for:"nickname",class:"form-label"},"暱稱",-1),b={class:"mb-8"},v=(0,s._)("h3",{class:"mb-2 h5 fw-normal"},"性別",-1),w={class:"form-check form-check-inline me-6"},y=(0,s._)("label",{class:"form-check-label",for:"male"},"男生",-1),_={class:"form-check form-check-inline"},M=(0,s._)("label",{class:"form-check-label",for:"female"},"女生",-1),k=(0,s._)("small",{class:"d-block mb-4 text-center text-danger"},null,-1),P=["disabled"],$={class:"tab-pane fade px-4 py-8 px-md-8",id:"nav-password",role:"tabpanel","aria-labelledby":"nav-password-tab"},x={class:"mb-4"},C=(0,s._)("label",{for:"password",class:"form-label"},"密碼",-1),L={class:"mb-8"},V=(0,s._)("label",{for:"confirmed",class:"form-label"},"確認密碼",-1),I=["disabled"],F={class:"mb-5"},Z={class:"text-gray-700"};function D(e,t,a,D,W,S){const j=(0,s.up)("VField"),q=(0,s.up)("error-message"),z=(0,s.up)("VForm"),B=(0,s.up)("MsgModalComponent");return(0,s.wg)(),(0,s.iD)(s.HY,null,[n,(0,s._)("nav",r,[(0,s._)("div",i,[(0,s._)("button",{class:"nav-link active",id:"nav-profile-tab","data-bs-toggle":"tab","data-bs-target":"#nav-profile",type:"button",role:"tab","aria-controls":"nav-profile","aria-selected":"true",onClick:t[0]||(t[0]=e=>S.toggleForm("profile"))}," 修改資料 "),(0,s._)("button",{class:"nav-link",id:"nav-password-tab","data-bs-toggle":"tab","data-bs-target":"#nav-password",type:"button",role:"tab","aria-controls":"nav-password","aria-selected":"false",onClick:t[1]||(t[1]=e=>S.toggleForm("password"))}," 重設密碼 ")])]),(0,s._)("div",d,[(0,s._)("div",m,[(0,s.Wm)(z,{id:"profileForm",onSubmit:S.updateProfile,ref:"profileForm"},{default:(0,s.w5)((({errors:a,meta:n})=>[W.tempProfile.photo?((0,s.wg)(),(0,s.iD)("div",{key:0,class:"bgCoverRounded mx-auto mb-8",style:(0,o.j5)({backgroundImage:"url("+W.tempProfile.photo+")"})},null,4)):e.profile.photo?((0,s.wg)(),(0,s.iD)("div",{key:1,class:"bgCoverRounded mx-auto mb-8",style:(0,o.j5)({backgroundImage:"url("+e.profile.photo+")"})},null,4)):((0,s.wg)(),(0,s.iD)("div",{key:2,class:(0,o.C_)(["bgCoverRounded mx-auto mb-8",{profileUserPhoto:!W.tempProfile.photo}])},null,2)),(0,s._)("div",c,[(0,s._)("div",p,[u,(0,s._)("input",{type:"file",accept:"image/*",id:"image",name:"image",onChange:t[2]||(t[2]=(...e)=>S.uploadImage&&S.uploadImage(...e))},null,32)]),W.tempProfile.photo!==e.profile.photo&&W.tempProfile.photo?((0,s.wg)(),(0,s.iD)("button",{key:0,class:"btn btn-outline-danger px-10 py-0 rounded-0",onClick:t[3]||(t[3]=(0,l.iM)(((...e)=>S.resetImage&&S.resetImage(...e)),["prevent"]))}," 清除 ")):(0,s.kq)("",!0)]),(0,s._)("p",g,(0,o.zw)(W.imageMsg),1),(0,s._)("div",f,[h,(0,s.Wm)(j,{type:"text",id:"name",placeholder:"請輸入暱稱",name:"暱稱",class:(0,o.C_)(["form-control",{"is-invalid":a["暱稱"]}]),rules:"min:2",modelValue:W.tempProfile.name,"onUpdate:modelValue":t[4]||(t[4]=e=>W.tempProfile.name=e),required:""},null,8,["class","modelValue"]),(0,s.Wm)(q,{name:"暱稱",class:"invalid-feedback text-danger"})]),(0,s._)("div",b,[v,(0,s._)("div",w,[(0,s.Wm)(j,{type:"radio",id:"male",name:"性別",class:"form-check-input",value:"male",modelValue:W.tempProfile.gender,"onUpdate:modelValue":t[5]||(t[5]=e=>W.tempProfile.gender=e)},null,8,["modelValue"]),y]),(0,s._)("div",_,[(0,s.Wm)(j,{type:"radio",id:"female",name:"性別",class:"form-check-input",value:"female",modelValue:W.tempProfile.gender,"onUpdate:modelValue":t[6]||(t[6]=e=>W.tempProfile.gender=e)},null,8,["modelValue"]),M])]),k,(0,s._)("button",{type:"submit",class:"effectBtn btn btn-primary w-100",disabled:!n.valid}," 送出更新 ",8,P)])),_:1},8,["onSubmit"])]),(0,s._)("div",$,[(0,s.Wm)(z,{onSubmit:S.updatePassword,ref:"passwordForm"},{default:(0,s.w5)((({errors:e,meta:a})=>[(0,s._)("div",x,[C,(0,s.Wm)(j,{type:"password",id:"password",placeholder:"請輸入密碼",name:"密碼",class:(0,o.C_)(["form-control",{"is-invalid":e["密碼"]}]),rules:"required|password:8",modelValue:W.tempPassword.password,"onUpdate:modelValue":t[7]||(t[7]=e=>W.tempPassword.password=e),required:""},null,8,["class","modelValue"]),(0,s.Wm)(q,{name:"密碼",class:"invalid-feedback text-danger"})]),(0,s._)("div",L,[V,(0,s.Wm)(j,{type:"password",id:"confirmed",placeholder:"請再次輸入密碼",name:"確認密碼",class:(0,o.C_)(["form-control",{"is-invalid":e["確認密碼"]}]),rules:"required|confirmed:@密碼",modelValue:W.tempPassword.confirmPassword,"onUpdate:modelValue":t[8]||(t[8]=e=>W.tempPassword.confirmPassword=e),required:""},null,8,["class","modelValue"]),(0,s.Wm)(q,{name:"確認密碼",class:"invalid-feedback text-danger"})]),(0,s._)("button",{type:"submit",class:"effectBtn btn btn-primary w-100",disabled:!a.valid}," 重設密碼 ",8,I)])),_:1},8,["onSubmit"])])]),(0,s.Wm)(B,null,{default:(0,s.w5)((()=>[(0,s._)("h3",F,(0,o.zw)(e.modal.title),1),(0,s._)("p",Z,(0,o.zw)(e.modal.content),1)])),_:1})],64)}var W=a(1885);const S={class:"modal fade",id:"msgModal",tabindex:"-1","aria-labelledby":"msgModalLabel","data-bs-backdrop":"static","data-bs-keyboard":"false","aria-hidden":"false"},j={class:"modal-dialog modal-dialog-centered"},q={class:"modal-content"},z={class:"modal-body pb-0 text-center"},B=(0,s._)("div",{class:"modal-footer justify-content-center"},[(0,s._)("button",{type:"button",class:"btn btn-primary py-2 px-8","data-bs-dismiss":"modal"}," 確定 ")],-1);function O(e,t,a,o,l,n){return(0,s.wg)(),(0,s.iD)("div",S,[(0,s._)("div",j,[(0,s._)("div",q,[(0,s._)("div",z,[(0,s.WI)(e.$slots,"default")]),B])])])}var T={name:"MsgModalComponent"},U=a(89);const H=(0,U.Z)(T,[["render",O]]);var Y=H,Q=a(3766),R=a(6294),A=a(2323),E=a(4331),J=a(7484),K={name:"ProfileView",data(){return{imageMsg:"",tempProfile:{name:"",photo:"",gender:"",_id:""},tempPassword:{password:"",confirmPassword:""}}},methods:{async updateProfile(){this.toggleLoading(!0),await(0,W.MH)(this.tempProfile).then((e=>{this.tempProfile=Object.assign({},e.data.data.user),this.updateProfileData(e.data.data.user),this.toggleMsgModal({title:"更新個人資料",content:"已成功更新您的個人資料~"}),this.toggleLoading(!1)})).catch((e=>{this.pushMessage({style:"danger",content:e.response?.data?.message||"更新失敗"}),this.toggleLoading(!1)}))},updatePassword(){this.toggleLoading(!0),(0,W.HS)(this.tempPassword).then((()=>{this.$refs.passwordForm.resetForm(),this.toggleMsgModal({title:"更新密碼成功",content:"下次登入記得使用新密碼喔~"}),this.toggleLoading(!1)})).catch((e=>{this.pushMessage({style:"danger",content:e.response?.data?.message||"更新密碼失敗"}),this.toggleLoading(!1)}))},async uploadImage(){const e=new FormData(document.getElementById("profileForm"));await this.upload(e,"photo"),this.tempProfile.photo=this.tempImage.url,this.imageMsg=this.tempImage.msg},async toggleForm(e){if("profile"==e)return this.$refs.passwordForm.resetForm();await this.getProfile(),this.resetImage(),this.tempProfile=Object.assign({},this.profile)},resetImage(){document.getElementById("image").value="",this.tempProfile.photo=this.profile.photo||"",this.imageMsg=""},...(0,Q.nv)(A.Z,["toggleMsgModal"]),...(0,Q.nv)(R.Z,["pushMessage","toggleLoading"]),...(0,Q.nv)(E.Z,["getProfile","updateProfileData"]),...(0,Q.nv)(J.Z,["upload"])},computed:{...(0,Q.rn)(A.Z,["modal"]),...(0,Q.rn)(E.Z,["profile"]),...(0,Q.rn)(J.Z,["tempImage"])},components:{MsgModalComponent:Y},async created(){await this.getProfile(),this.tempProfile=Object.assign({},this.profile)}};const N=(0,U.Z)(K,[["render",D]]);var G=N}}]);
//# sourceMappingURL=198.bf0e0c41.js.map