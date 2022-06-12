"use strict";(self["webpackChunknodecourse"]=self["webpackChunknodecourse"]||[]).push([[593],{1885:function(e,t,s){s.d(t,{Ac:function(){return f},HS:function(){return l},K$:function(){return b},MH:function(){return d},OJ:function(){return L},T8:function(){return A},TV:function(){return i},TY:function(){return c},f1:function(){return Z},fN:function(){return g},fj:function(){return k},ht:function(){return x},lC:function(){return p},mh:function(){return h},pY:function(){return r},tO:function(){return m},td:function(){return w},zB:function(){return u},zk:function(){return v}});var o=s(6265),n=s.n(o);const a="https://warm-ridge-65785.herokuapp.com",r=e=>n().post(`${a}/user/sign_up`,e),i=e=>n().post(`${a}/user/sign_in`,e),l=e=>n().post(`${a}/user/updatePassword`,e),c=()=>n().get(`${a}/user/profile`),d=e=>n().patch(`${a}/user/profile`,e),u=()=>n().get(`${a}/user/getLikeList`),p=e=>n().post(`${a}/user/${e}/follow`),f=e=>n()["delete"](`${a}/user/${e}/follow`),m=()=>n().get(`${a}/user/getFollowingList`),g=e=>n().get(`${a}/posts`,{params:e}),h=(e,t)=>n().get(`${a}/posts/user/${t}`,{params:e}),b=e=>n().get(`${a}/post/${e}`),w=e=>n().post(`${a}/post`,e),k=e=>n()["delete"](`${a}/post/${e}`),v=e=>n().post(`${a}/post/${e}/like`),L=e=>n()["delete"](`${a}/post/${e}/like`),Z=(e,t)=>n().post(`${a}/post/${t}/comment`,e),A=e=>n()["delete"](`${a}/post/${e}/comment`),x=(e,t)=>n().post(`${a}/upload?type=${t}`,e)},4331:function(e,t,s){var o=s(1120),n=s(3766),a=s(1885),r=s(6294),i=s(7965);const l=(0,r.Z)();t["Z"]=(0,n.Q_)("userStore",{state:()=>({profile:{name:"",photo:"",gender:"",_id:"",follows:[],following:[]}}),actions:{async getProfile(){l.isLoading=!0,await(0,a.TY)().then((e=>{this.profile=e.data.data,l.isLoading=!1})).catch((e=>{l.pushMessage({style:"danger",content:e.response?.data?.message||"取得個人資料失敗，請重新登入"}),l.isLoading=!1,(0,i.qz)(),o.Z.push("/signin")}))},updateProfileData(e){this.profile=e},async createFollow(e){await(0,a.lC)(e).then((()=>{l.pushMessage({style:"dark",content:"已追蹤"})})).catch((e=>{l.pushMessage({style:"danger",content:e.response?.data?.message||"追蹤失敗"})}))},async delFollow(e){await(0,a.Ac)(e).then((()=>{l.pushMessage({style:"dark",content:"取消追蹤成功"})})).catch((e=>{l.pushMessage({style:"danger",content:e.response?.data?.message||"取消追蹤失敗"})}))}}})},9593:function(e,t,s){s.r(t),s.d(t,{default:function(){return le}});var o=s(3396);const n={key:0},a={class:"container pt-11 pb-14 pb-lg-11"},r={class:"row"},i={class:"col-12 col-lg-8"},l={class:"col-lg-4 position-relative"};function c(e,t,s,c,d,u){const p=(0,o.up)("NavbarComponent"),f=(0,o.up)("router-view"),m=(0,o.up)("AsideComponent");return d.checkSuccess?((0,o.wg)(),(0,o.iD)("div",n,[(0,o.Wm)(p,{onSignOut:u.signOut},null,8,["onSignOut"]),(0,o._)("main",a,[(0,o._)("div",r,[(0,o._)("div",i,[((0,o.wg)(),(0,o.j4)(f,{key:e.$route.fullPath}))]),(0,o._)("div",l,[(0,o.Wm)(m)])])])])):(0,o.kq)("",!0)}var d=s(7139),u=s(9242),p=s(2893);const f={class:"navbar"},m={class:"container d-flex justify-content-between align-items-center"},g=(0,o.Uk)("MetaWall"),h={class:"d-flex align-items-center"},b=["src"],w={key:1,src:p,class:"thumbnail thumbnail-sm"},k={class:"dropdown"},v={class:"dropdown-toggle ms-3 px-2 border-bottom border-2 text-dark fw-bolder",href:"#",role:"button",id:"dropdownMenuLink","data-bs-toggle":"dropdown","aria-expanded":"false"},L={class:"dropdown-menu dropdown-menu-end customShadow text-center","aria-labelledby":"dropdownMenuLink"},Z={class:"bg-white border border-2 border-bottom-0"},A=(0,o.Uk)(" 我的貼文牆 "),x={class:"bg-white border border-2 border-bottom-0"},y=(0,o.Uk)("全體動態牆"),_={class:"bg-white border border-2 border-bottom-0"},W=(0,o.Uk)(" 修改個人資料 "),q={class:"bg-white border border-2"};function C(e,t,s,n,a,r){const i=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",f,[(0,o._)("div",m,[(0,o.Wm)(i,{to:"/",class:"navbarBrand"},{default:(0,o.w5)((()=>[g])),_:1}),(0,o._)("div",h,[e.profile?.photo?((0,o.wg)(),(0,o.iD)("img",{key:0,src:e.profile?.photo,class:"thumbnail thumbnail-sm"},null,8,b)):((0,o.wg)(),(0,o.iD)("img",w)),(0,o._)("div",k,[(0,o._)("a",v,(0,d.zw)(e.profile?.name),1),(0,o._)("ul",L,[(0,o._)("li",Z,[(0,o.Wm)(i,{to:{path:`/personalwall/${e.profile?._id}`,query:{name:e.profile?.name,photo:e.profile?.photo}},class:"dropdown-item"},{default:(0,o.w5)((()=>[A])),_:1},8,["to"])]),(0,o._)("li",x,[(0,o.Wm)(i,{to:"/",class:"dropdown-item"},{default:(0,o.w5)((()=>[y])),_:1})]),(0,o._)("li",_,[(0,o.Wm)(i,{to:"/profile",class:"dropdown-item"},{default:(0,o.w5)((()=>[W])),_:1})]),(0,o._)("li",q,[(0,o._)("a",{href:"#",class:"dropdown-item",onClick:t[0]||(t[0]=(0,u.iM)((t=>e.$emit("sign-out")),["prevent"]))}," 登出 ")])])])])])])}var S=s(3766),K=s(4331),$={name:"NavbarComponent",computed:{...(0,S.rn)(K.Z,["profile"])}},P=s(89);const V=(0,P.Z)($,[["render",C]]);var z=V;const M={class:"aside"},H={class:"asideContent"},N=(0,o.Uk)(" 張貼動態 "),U={class:"asideList"},Y={class:"mb-lg-8"},D=["src"],B={key:1,src:p,class:"thumbnail thumbnail-xl"},G={class:"d-none d-lg-block ms-4 fw-bolder"},O={class:"mb-lg-8"},X=(0,o._)("div",{class:"asideLinkIcon"},[(0,o._)("i",{class:"bi bi-house-door"})],-1),E=(0,o._)("h5",{class:"d-none d-lg-block ms-4 fw-bolder"},"全體動態牆",-1),F={class:"mb-lg-8"},R=(0,o._)("div",{class:"asideLinkIcon"},[(0,o._)("i",{class:"bi bi-bell"})],-1),I=(0,o._)("h5",{class:"d-none d-lg-block ms-4 fw-bolder"},"追蹤名單",-1),j=(0,o._)("div",{class:"asideLinkIcon"},[(0,o._)("i",{class:"bi bi-hand-thumbs-up"})],-1),J=(0,o._)("h5",{class:"d-none d-lg-block ms-4 fw-bolder"},"我按讚的文章",-1),T={class:"d-lg-none"},Q=(0,o._)("div",{class:"asideLinkIcon"},[(0,o._)("i",{class:"bi bi-plus-lg"})],-1);function ee(e,t,s,n,a,r){const i=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("aside",M,[(0,o._)("div",H,[(0,o.Wm)(i,{to:"/createpost",class:"effectBtn d-none d-lg-block btn btn-primary w-100 mb-6 fw-bold"},{default:(0,o.w5)((()=>[N])),_:1}),(0,o._)("ul",U,[(0,o._)("li",Y,[(0,o.Wm)(i,{to:{path:`/personalwall/${e.profile?._id}`,query:{name:e.profile?.name,photo:e.profile?.photo}},class:"asideLink"},{default:(0,o.w5)((()=>[e.profile?.photo?((0,o.wg)(),(0,o.iD)("img",{key:0,src:e.profile?.photo,class:"thumbnail thumbnail-xl"},null,8,D)):((0,o.wg)(),(0,o.iD)("img",B)),(0,o._)("h5",G,(0,d.zw)(e.profile?.name)+" 的貼文牆 ",1)])),_:1},8,["to"])]),(0,o._)("li",O,[(0,o.Wm)(i,{to:"/",class:"asideLink"},{default:(0,o.w5)((()=>[X,E])),_:1})]),(0,o._)("li",F,[(0,o.Wm)(i,{to:"/followlist",class:"asideLink"},{default:(0,o.w5)((()=>[R,I])),_:1})]),(0,o._)("li",null,[(0,o.Wm)(i,{to:"/likelist",class:"asideLink"},{default:(0,o.w5)((()=>[j,J])),_:1})]),(0,o._)("li",T,[(0,o.Wm)(i,{to:"/createpost",class:"asideLink"},{default:(0,o.w5)((()=>[Q])),_:1})])])])])}var te={name:"AsideComponent",computed:{...(0,S.rn)(K.Z,["profile"])}};const se=(0,P.Z)(te,[["render",ee]]);var oe=se,ne=s(6294),ae=s(7965),re={name:"LayoutView",data(){return{checkSuccess:!1}},methods:{checkSignIn(){const e=(0,ae.LP)();e?(this.checkSuccess=!0,this.$http.defaults.headers.common.Authorization=`Bearer ${e}`,this.getProfile()):(this.checkSuccess=!1,this.pushMessage({style:"danger",content:"請先登入"}),this.$router.push("/signin"))},signOut(){(0,ae.qz)(),this.checkSuccess=!1,this.$router.push("/signin")},...(0,S.nv)(ne.Z,["pushMessage"]),...(0,S.nv)(K.Z,["getProfile"])},created(){this.checkSignIn()},components:{NavbarComponent:z,AsideComponent:oe}};const ie=(0,P.Z)(re,[["render",c]]);var le=ie},2893:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGsAAABrCAMAAABHYYw+AAABKVBMVEXd7fpcZnDGxsjf7fve7/tcZXLGxcrEx8fFxcddZnHGxslaZW/HyMnc7vrIyMre6fZcZXDd7/nExsqfoqjIxcjHxsZkbnjd7v3g7/zh7/rU2eVcZm7R4OvGxszFx8mnt8FbZHG+vsKqrLDf7/meqrbX4+p8iJTf7fh7iZTc6/fb6fXU2uPU3eXa5vC9vsJeZ3Ha5fKirrmUm6NjbXfY5O3X4e3C0N6tvMewusaFjZZud39oc37d7PrS2eDG0t7Gxcl1e4VdY29aZWzHyMywvsm2u764ub2Vm6B0fYVhanbg7f3V2t+7xdDCwcWmtL6ytLqBho1faXPi7/zb5/LK1+PIxsy/wsKqqa6PmKCHjZdveINocXrCytK5xs+sq7CXoK2ipqyIi5Z+ipM8r/IdAAAEIUlEQVRo3u3aaVPaUBSA4XtPbm5WkKREoBhqSSkFRVCxC+5rtYvV7vv2/39ED0kKQdNPPcxYm2eGneGdAyEkGVgmk8lkMpnMVVISrCwSnjwpsWkRGw9uTZhT2LSI9rqaZD0rTyVWRtgyeMLel4oiECOiKBsbiqK0H6CHt1ZVnjD/7eHQawWRtCJz57xQUBFPMHiB4zt5StgKKkEwdzLspLJOg6DSpGkFQfvg4LRr8EuqCC/eHxy8xhYJMadiKGqlU+8wKnPzydT0W/y6tZRS6VKrauzxCXeaNK3Lc60PBsZ0WkJMtozuC7DPOS8Y5K3AcS638idTabW3tp5ZfET9tL5+5O1/XP90Pq7zla2tNYLV1H3LKvCx3UPT9nWwa7Vjg49Z88sULV7lI0Zh/hA8CeD57jHn3cS8JC3V4COrsydLvoYt19TPZmfHLYOmxUMq4t0Xz9/Cb8+fv/2oVkexZUbQMsZzdY+KJozld/iopZK0rD0rttc9cmGitTtvxXaXFYf9rb5vukhDNfAgSXM9rRZzFwlaHd98AzK2vQ0pigDe/ib7e519WwMJEdOEFBI8L79A0FJarZ4Psbxt2xCz7XweQmZts9XKEWwDPxFOS4IWwRHRaMa4pelPFUcQtHKKmNFHs0AStiLFBSYEo2qlM8ctNLVW9Ln9wy3U7L3q2+Zo6YtBTN981Wk1GRFRdtrYiumhxDdtUQkEo1IqsbatAzJ1SIruWywp+Awyky0zucxjK+cwSq28DS6AjZn4PG65mrnIaLVwufPSWhqQtzY6nYYbrQ/zWNDzIRvgaaczw4gJpY0t09R1QDpeg/C0qOCqkNEqsRndl74vTakBKnqaNFG0WUgea6yt9fsNKEat4uZaA82UGTmlhD9QQgjH97CFZANvo6nM5eQYapog4xYbyjHC2IXjCY4J0Vxaw2FjOcqWEyvVILamjJDNVQ4qqBx7aWtFE9VqjaASe1kJHJpWUOnfG7v748OHR6Gfd8ceNBkJIa7lcYBr28LPay/aA0vNDHeZqnccqlbv8eOVxyvveZozfGRl5Zmgas24UgN52+ApbsiilP5NRtbaHraW1NSWNlxfLeRot0WX0ucCJBdY1rpiLe32n1roZtbKWlkra/0/LVi6pq3bq7MXrKLvU2ntW5wXLuBWXSdsCeG0dPAA8tyoGlWeUKha1XcSQMJTR2kS7INt9HqN8PCxvXN8fGLxBGOwsxO25Gav3yKYq+f6LoT7kq6Ug4m5dg+xE84F4C8SzNWRbzwoakWcrSgHPMk6Ksqw5boAFEdvtnzP9KSHk22DOyjwhOqhpm/72BpO/ZmRaONc0vN3LYurPEG1LOsrzuVBfZlRqYevZw0Xh4m58FSHoTojbKF6gV/8/4HKq2cwxAjV63XGU0WPkUtvha5c6xe/H4JCWEurNwAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=593.f68bf0ac.js.map