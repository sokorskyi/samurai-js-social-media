(this["webpackJsonpit-kamasutra-js"]=this["webpackJsonpit-kamasutra-js"]||[]).push([[2],{11:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return E})),a.d(t,"c",(function(){return m})),a.d(t,"d",(function(){return y})),a.d(t,"e",(function(){return b})),a.d(t,"f",(function(){return S}));var n=a(16),r=a(6),s=a(8),o=a(28);const i={authorizedUserId:null,userInfo:null,isFetchingUserInfo:!1,isFetchingLogout:!1,isFetchingCaptchaUrl:!1,isLogging:!1,captchaUrl:null},l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_AUTHORIZED_USER_ID":return{...e,authorizedUserId:t.payload};case"auth/SET_USER_INFO":return{...e,userInfo:t.payload};case"auth/SET_FETCHING_USER_INFO":return{...e,isFetchingUserInfo:t.payload};case"auth/SET_IS_LOGGING":return{...e,isLogging:t.payload};case"auth/SET_CAPTCHA_URL":return{...e,captchaUrl:t.payload};case"auth/SET_FETCHING_CAPTCHA_URL":return{...e,isFetchingCaptchaUrl:t.payload};case"auth/SET_FETCHING_LOGOUT":return{...e,isFetchingLogout:t.payload};default:return e}},c=e=>({type:"auth/SET_AUTHORIZED_USER_ID",payload:e}),d=e=>({type:"auth/SET_USER_INFO",payload:e}),u=e=>({type:"auth/SET_FETCHING_USER_INFO",payload:e}),p=e=>({type:"auth/SET_FETCHING_LOGOUT",payload:e}),A=e=>({type:"auth/SET_IS_LOGGING",payload:e}),f=e=>({type:"auth/SET_CAPTCHA_URL",payload:e}),g=e=>({type:"auth/SET_FETCHING_CAPTCHA_URL",payload:e}),E=()=>async e=>{const t=await r.a.getAuthMe();if(0===t.data.resultCode){await Object(s.b)(1e3);const{id:a}=t.data.data;return e(c(a)),e(h())}},h=()=>async(e,t)=>{const a=S(t());e(u(!0));const n=await r.a.getProfileInfo(a);await Object(s.b)(2e3),e(u(!1)),200===n.status&&e(d(n.data))},m=e=>async t=>{t(A(!0));const a=await r.a.login(e);if(await Object(s.b)(2e3),t(A(!1)),a.data.resultCode){10===a.data.resultCode&&(t(I()),t(Object(n.a)(o.b,!1,!1,"captcha")));t(Object(n.b)(o.b,{_error:a.data.messages.join(" ")}))}else t(c(a.data.data.userId)),t(h()),t(f(null))},I=()=>async e=>{e(g(!0));const t=await r.a.getCaptchaUrl();e(f(t.data.url)),e(g(!1))},y=()=>async e=>{e(p(!0));const t=await r.a.logout();Object(s.b)(2e3).then(()=>{e(p(!1)),t.data.resultCode||(e(c(null)),e(d(null)))})},b=e=>e.auth,S=e=>b(e).authorizedUserId},125:function(e,t,a){e.exports=a(200)},130:function(e,t,a){},135:function(e,t,a){},200:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(64),o=a.n(s),i=(a(130),a(30)),l=a.n(i),c=a(43),d=a.n(c);const u=e=>{let{friendName:t}=e;return r.a.createElement("div",{className:d.a.friendsItem},r.a.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGtMYZWJnXOIBpTozatv_mpsCoHs9CqVRORQ&usqp=CAU"}),r.a.createElement("div",null,t))};var p=e=>{let{friends:t}=e;return r.a.createElement("div",{className:d.a.friendsSection},r.a.createElement("h3",null,"Friends"),r.a.createElement("div",{className:d.a.friendItemsContainer},t.map(e=>{let{friendName:t,id:a}=e;return r.a.createElement(u,{key:a,friendName:t})})))},A=a(15),f=a(206),g=a(207);const E={friends:[{friendName:"Sveta",id:1},{friendName:"Igor",id:2},{friendName:"Vlad",id:3}]},h=e=>e.navbar;var m=a(10);const I=[{linkTo:"/profile",id:1,text:"Profile",isDetached:!1},{linkTo:"/chats",id:2,text:"Messages",isDetached:!1},{linkTo:"/news",id:3,text:"News",isDetached:!1},{linkTo:"/music",id:4,text:"Music",isDetached:!1},{linkTo:"/",id:7,text:"Home",isDetached:!1},{linkTo:"/settings",id:5,text:"Settings",isDetached:!0},{linkTo:"/users",id:6,text:"Users",isDetached:!0}],y=e=>{let{text:t,linkTo:a,isDetached:n}=e;return r.a.createElement("div",{className:n?"".concat(l.a.item," ").concat(l.a.settings):l.a.item},r.a.createElement(f.a,{exact:!0,activeClassName:l.a.active,to:a},t))};var b=Object(m.d)(Object(A.b)(e=>({friends:h(e).friends})),g.a)(e=>{let{friends:t}=e;return r.a.createElement("nav",null,I.map(e=>{let{linkTo:t,id:a,text:n,isDetached:s}=e;return r.a.createElement(y,{linkTo:t,text:n,isDetached:s,key:a})}),r.a.createElement(p,{friends:t}))}),S=a(208),T=a(204),v=a(72);const P=r.a.lazy(()=>Promise.all([a.e(0),a.e(1),a.e(6)]).then(a.bind(null,311))),O=r.a.lazy(()=>Promise.all([a.e(0),a.e(1),a.e(5)]).then(a.bind(null,309))),G=r.a.lazy(()=>a.e(10).then(a.bind(null,306))),C=r.a.lazy(()=>a.e(9).then(a.bind(null,307))),N=r.a.lazy(()=>a.e(11).then(a.bind(null,308))),R=r.a.lazy(()=>Promise.all([a.e(0),a.e(8)]).then(a.bind(null,310))),w=r.a.lazy(()=>Promise.all([a.e(0),a.e(1),a.e(7)]).then(a.bind(null,312)));var F=()=>r.a.createElement("main",null,r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(S.a,null,r.a.createElement(T.a,{exact:!0,from:"/",to:"/profile"}),r.a.createElement(v.a,{path:"/chats",component:P}),r.a.createElement(v.a,{path:"/profile/:id?",render:()=>r.a.createElement(O,null)}),r.a.createElement(v.a,{path:"/news",component:G}),r.a.createElement(v.a,{path:"/music",component:C}),r.a.createElement(v.a,{path:"/settings",component:N}),r.a.createElement(v.a,{path:"/users",component:R}),r.a.createElement(v.a,{path:"/login",component:w})))),L=(a(135),a(24)),U=a(54),D=a.n(U),j=a(11),M=a(26);const W={logout:j.d};var B=Object(A.b)(e=>({authorizedUserId:Object(j.f)(e),userInfo:Object(j.e)(e).userInfo,profileAvatar:Object(M.e)(e).profileAvatar,isUpdatingAvatar:Object(M.e)(e).isUpdatingAvatar,isFetchingUserInfo:Object(j.e)(e).isFetchingUserInfo,isFetchingLogout:Object(j.e)(e).isFetchingLogout}),W)(e=>{let{authorizedUserId:t,isFetchingLogout:a,isFetchingUserInfo:n,isUpdatingAvatar:s,profileAvatar:o,userInfo:i,logout:l,...c}=e;const d=n||a?r.a.createElement(L.a,{width:"40px"}):r.a.createElement("div",{className:"userInfo"},r.a.createElement("div",null,s?r.a.createElement(L.a,null):r.a.createElement("img",{src:o||D.a,alt:"avatar"})),r.a.createElement("div",null,r.a.createElement("div",null,null===i||void 0===i?void 0:i.fullName),r.a.createElement("button",{onClick:l},"Log out")));return r.a.createElement("header",null,r.a.createElement("div",{className:"rightBlock"},t?d:r.a.createElement("div",{className:"links"},r.a.createElement(f.a,{to:"/login"},"Login"))))}),H=a(23);class k extends r.a.Component{constructor(){super(...arguments),this.handleGlobalRejection=e=>{this.props.setGlobalError(e.reason.message)}}componentDidMount(){this.props.initApp(),window.addEventListener("unhandledrejection",this.handleGlobalRejection)}componentWillUnmount(){window.removeEventListener("unhandledrejection",this.handleGlobalRejection)}render(){return r.a.createElement("div",{className:"app-wrapper"},this.props.isAppInitialized?r.a.createElement(r.a.Fragment,null,r.a.createElement(B,null),r.a.createElement(b,null),r.a.createElement(F,null)):r.a.createElement(L.a,null))}}const x={initApp:H.b,setGlobalError:H.d};var Q=Object(m.d)(g.a,Object(A.b)(e=>({isAppInitialized:Object(H.c)(e).isAppInitialized}),x))(k),X=a(205),z=a(55),V=a(65),J=a(71),K=a(76),Z=a(78);const q=Object(m.c)({chat:z.b,profile:M.d,navbar:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;return t.type,e},users:V.e,auth:j.a,form:J.a,app:H.a});var Y=Object(m.e)(q,Object(Z.a)(Object(m.a)(K.a)));window.store=Y,o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(X.a,null,r.a.createElement(A.a,{store:Y},r.a.createElement(Q,null)))),document.getElementById("root"))},23:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"d",(function(){return o})),a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return l}));a(6),a(8);var n=a(11);const r={isAppInitialized:!1,globalError:null},s=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_IS_APP_INITIALIZED":return{...e,isAppInitialized:t.payload};case"auth/SET_GLOBAL_ERROR":return{...e,globalError:t.payload};default:return e}},o=e=>({type:"auth/SET_GLOBAL_ERROR",payload:e}),i=()=>async e=>{await e(Object(n.b)()),e({type:"auth/SET_IS_APP_INITIALIZED",payload:!0})},l=e=>e.app},24:function(e,t,a){"use strict";var n=a(1),r=a.n(n),s=a(74),o=a.n(s),i=a(75),l=a.n(i);t.a=e=>{let{width:t="80px"}=e;return r.a.createElement("div",{className:o.a.preloader,style:{width:t}},r.a.createElement("img",{src:l.a,alt:"loading"}))}},26:function(e,t,a){"use strict";a.d(t,"d",(function(){return d})),a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return I})),a.d(t,"c",(function(){return y})),a.d(t,"h",(function(){return b})),a.d(t,"f",(function(){return S})),a.d(t,"g",(function(){return T})),a.d(t,"e",(function(){return v}));var n=a(6),r=a(28),s=a(8),o=a(16),i=a(11);const l="profile/ADD_POST",c={posts:[{content:"Hello world!",likesCount:7,id:1},{content:"Lately",likesCount:17,id:2},{content:"I know",likesCount:37,id:3},{content:"Adyous",likesCount:127,id:4}],profileInfo:null,isFetchingProfile:!1,isUpdatingProfile:!1,status:"",updatingStatusError:"",profileAvatar:null,isUpdatingAvatar:!1,isFetchingStatus:!1},d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:{const a={...e},n={id:a.posts.length+1,likesCount:0,content:t.payload};return a.posts=[...a.posts,n],a}case"profile/SET_PROFILE_INFO":return{...e,profileInfo:t.payload};case"profile/SET_UPDATING_STATUS_ERROR":return{...e,updatingStatusError:t.payload};case"profile/SET_IS_UPDATING_AVATAR":return{...e,isUpdatingAvatar:t.payload};case"profile/SET_PROFILE_AVATAR":return{...e,profileAvatar:t.payload};case"profile/SET_IS_FETCHING_PROFILE":return{...e,isFetchingProfile:t.payload};case"profile/SET_IS_UPDATING_PROFILE":return{...e,isUpdatingProfile:t.payload};case"profile/SET_STATUS":return{...e,status:t.payload};case"profile/SET_IS_FETCHING_STATUS":return{...e,isFetchingStatus:t.payload};default:return e}},u=e=>({type:l,payload:e}),p=e=>({type:"profile/SET_IS_FETCHING_PROFILE",payload:e}),A=e=>({type:"profile/SET_IS_UPDATING_PROFILE",payload:e}),f=e=>({type:"profile/SET_IS_UPDATING_AVATAR",payload:e}),g=e=>({type:"profile/SET_IS_FETCHING_STATUS",payload:e}),E=e=>({type:"profile/SET_STATUS",payload:e}),h=e=>({type:"profile/SET_PROFILE_AVATAR",payload:e}),m=e=>({type:"profile/SET_UPDATING_STATUS_ERROR",payload:e}),I=e=>async t=>{t(p(!0));const a=await n.a.getProfileInfo(e);Object(s.b)(1e3).then(()=>{t(p(!1)),200===a.status&&(t({type:"profile/SET_PROFILE_INFO",payload:a.data}),t(h(a.data.photos.small)))})},y=e=>async t=>{t(g(!0));const a=await n.a.getProfileStatus(e);Object(s.b)(4e3).then(()=>{200===a.status&&t(E(a.data)),t(g(!1))})},b=e=>async t=>{t(m(null)),t(g(!0));const a=await n.a.updateProfileStatus(e);Object(s.b)(4e3).then(()=>{t(g(!1)),0===a.data.resultCode?t(E(e)):t(m(a.data.messages.join(" ")))})},S=e=>async(t,a)=>{const l=Object(i.f)(a());t(A(!0));const c=await n.a.updateProfile(e);return Object(s.b)(2e3).then(()=>{if(t(A(!1)),0!==c.data.resultCode)return Promise.reject(t(Object(o.b)(r.d,{_error:c.data.messages.join(" ")})));t(I(l))})},T=e=>async t=>{t(f(!0));const a=await n.a.uploadAvatar(e);Object(s.b)(2e3).then(()=>{t(f(!1)),0===a.data.resultCode&&t(h(a.data.data.photos.small))})},v=e=>e.profile},28:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return s})),a.d(t,"d",(function(){return o}));const n="post",r="chatMessages",s="login",o="profileInfo"},30:function(e,t,a){e.exports={item:"Navbar_item__zmMk4",active:"Navbar_active__3mbhk",settings:"Navbar_settings__1sCcD"}},43:function(e,t,a){e.exports={friendsSection:"Friends_friendsSection__pg1w0",friendItemsContainer:"Friends_friendItemsContainer__2rius",friendsItem:"Friends_friendsItem__gpc45"}},54:function(e,t){e.exports="data:image/png;base64,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"},55:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return o})),a.d(t,"c",(function(){return i})),a.d(t,"d",(function(){return c})),a.d(t,"e",(function(){return d}));var n=a(51);const r={messages:[{from:"Andrii",message:"I don't know that",id:1},{from:"Me",message:"Really?",id:2},{from:"Andrii",message:"Surely, you find it better",id:3},{from:"Me",message:"As usual, bro",id:4}],chats:[{text:"John",isActive:!1,id:1},{text:"Mark",isActive:!1,id:2},{text:"George",isActive:!0,id:3}]},s=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"chat/ADD_MESSAGE":{const a={...e},n={id:a.messages.length+1,from:"Me",message:t.payload};return a.messages=[...a.messages,n],a}default:return e}},o=e=>({type:"chat/ADD_MESSAGE",payload:e}),i=e=>e.chat,l=e=>i(e).messages,c=Object(n.a)(l,e=>e.filter(e=>"Me"===e.from)),d=Object(n.a)(l,e=>e.filter(e=>"Me"!==e.from))},6:function(e,t,a){"use strict";var n=a(203).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0",headers:{"API-KEY":"fbd6a7c7-cf96-48ab-8089-263e020e2e23"}});t.a=class{static async getUsers(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return n.get("/users",{params:{count:t,page:e}})}static async getProfileInfo(e){return n.get("/profile/"+e)}static async getAuthMe(){return n.get("/auth/me")}static async followUser(e){return n.post("/follow/"+e)}static async unfollowUser(e){return n.delete("/follow/"+e)}static async getProfileStatus(e){return n.get("/profile/status/"+e)}static async updateProfileStatus(e){return n.put("/profile/status",{status:e})}static async login(e){return n.post("/auth/login",e)}static async logout(){return n.delete("/auth/login")}static async updateProfile(e){return n.put("/profile",e)}static async getCaptchaUrl(){return n.get("/security/get-captcha-url")}static async uploadAvatar(e){const t=new FormData;return t.append("image",e),n.put("/profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})}}},65:function(e,t,a){"use strict";a.d(t,"e",(function(){return o})),a.d(t,"c",(function(){return i})),a.d(t,"d",(function(){return c})),a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a(6),r=a(8);const s={userList:[],currentPage:1,isFetching:!1,limit:10,totalUsers:null,followingInProgressIds:[]},o=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"users/SET_USERS":return{...e,userList:t.payload};case"users/TOGGLE_FOLLOW":return{...e,userList:e.userList.map(e=>e.id===t.payload.id?{...e,followed:t.payload.followed}:e)};case"users/SET_CURRENT_PAGE":return{...e,currentPage:t.payload};case"users/SET_IS_FETCHING":return{...e,isFetching:t.payload};case"users/SET_LIMIT":return{...e,limit:t.payload};case"users/SET_TOTAL_USERS":return{...e,totalUsers:t.payload};case"users/ADD_TO_FOLLOWING_IN_PROGRESS_IDS":return{...e,followingInProgressIds:[...e.followingInProgressIds,t.payload]};case"users/REMOVE_FROM_FOLLOWING_IN_PROGRESS_IDS":return{...e,followingInProgressIds:e.followingInProgressIds.filter(e=>e!==t.payload)};default:return e}},i=e=>({type:"users/SET_CURRENT_PAGE",payload:e}),l=e=>({type:"users/SET_IS_FETCHING",payload:e}),c=(e,t)=>async a=>{a({type:"users/ADD_TO_FOLLOWING_IN_PROGRESS_IDS",payload:e});const s=t?n.a.followUser.bind(n.a):n.a.unfollowUser.bind(n.a),o=await s(e);Object(r.b)(1200).then(()=>{a((e=>({type:"users/REMOVE_FROM_FOLLOWING_IN_PROGRESS_IDS",payload:e}))(e)),0===o.data.resultCode&&a((e=>({type:"users/TOGGLE_FOLLOW",payload:e}))({id:e,followed:t}))})},d=(e,t)=>async a=>{a(l(!0));const s=await n.a.getUsers(e,t);Object(r.b)(100).then(()=>{a(l(!1)),s.data.error||(a({type:"users/SET_USERS",payload:s.data.items}),a((e=>({type:"users/SET_TOTAL_USERS",payload:e}))(s.data.totalCount)))})},u=e=>e.users},74:function(e,t,a){e.exports={preloader:"Preloader_preloader__2Z6qT"}},75:function(e,t,a){e.exports=a.p+"static/media/giphy.4ba61248.gif"},8:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return s}));const n=e=>new Promise(t=>{setTimeout(t,e)});function r(e){return e.displayName||e.name||"Component"}const s=e=>/^[A-Z]/.test(e)?e:"".concat(e[0]).concat(e.slice(1))}},[[125,3,4]]]);
//# sourceMappingURL=main.c925912e.chunk.js.map