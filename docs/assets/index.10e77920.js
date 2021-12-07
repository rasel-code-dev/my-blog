var K=Object.defineProperty,z=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var A=(s,a,t)=>a in s?K(s,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[a]=t,m=(s,a)=>{for(var t in a||(a={}))C.call(a,t)&&A(s,t,a[t]);if(S)for(var t of S(a))O.call(a,t)&&A(s,t,a[t]);return s},w=(s,a)=>z(s,Q(a));var L=(s,a)=>{var t={};for(var r in s)C.call(s,r)&&a.indexOf(r)<0&&(t[r]=s[r]);if(s!=null&&S)for(var r of S(s))a.indexOf(r)<0&&O.call(s,r)&&(t[r]=s[r]);return t};import{c as W,a as J,b as X,t as Y,s as P,d as Z,r as k,w as ee,R as e,L as c,m as te,u as ae,e as I,N as D,F as d,f as se,g as re,h as oe,i as ne,j as le,k as ie,l as ce,n as H,o as me,p as de,q as ue,v as pe,S as he,x as fe,y as Ee,B as ge,P as ye}from"./vendor.5bc579f6.js";const ve=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}};ve();const _e={posts:[],postDetails:{},searchResultPosts:[],searchValue:"",likes:[]};function xe(s=_e,a){let t=m({},s),r,o;switch(a.type){case"FETCH_POSTS":return t.posts=a.payload,t.searchResultPosts=a.payload,t;case"FETCH_POST":return t.postDetails=a.payload,t;case"DELETE_POST":let n=t.posts.filter(l=>l.id!==a.payload);return t.posts=n,t.searchResultPosts=n,t;case"FETCH_POST_MD_CONTENT":return t.postDetails.mdContent=a.payload,t;case"SEARCH_POSTS":return t.searchResultPosts=a.payload,t;case"SET_POST_SEARCH_VALUE":return t.searchValue=a.payload,t;case"FETCH_LIKES":return t.likes=a.payload,t;case"ADD_LIKE":return r=a.payload.post_id,o=t.posts.findIndex(l=>l.id===r),o!==-1&&(t.posts[o]=w(m({},t.posts[o]),{you_liked:1,total_likes:t.posts[o].total_likes+1})),t;case"REMOVE_LIKE":return r=a.payload.post_id,o=t.posts.findIndex(l=>l.id===r),o!==-1&&(t.posts[o]=w(m({},t.posts[o]),{you_liked:0,total_likes:t.posts[o].total_likes-1})),t;default:return s}}const Ne={visitors:{day_visitors:[],total_visitors:[]}};function Se(s=Ne,a){let t=m({},s);switch(a.type){case"SET_VISITORS":return t.visitors=m(m({},t),a.payload),t;default:return s}}const Le={username:"",email:"",first_name:"",id:""};function be(s=Le,a){switch(m({},s),a.type){case"LOGIN":let t=a.payload,{token:r}=t,o=L(t,["token"]);return r&&window.localStorage.setItem("token",r),o||{};default:return s}}const we=W({postState:xe,appState:Se,authState:be});var Pe=J(we,{},X(Y));P.config({barColors:{"0":"#ff3d00","0.5":"#ff3d00","1.0":"#27ff00"},barThickness:2,shadowBlur:10,shadowColor:"#ff3d00"});const j="https://rsl-blog-server.herokuapp.com",h=Z.create({baseURL:j,withCredentials:!0,headers:{token:window.localStorage.getItem("token")||""}});function ke(s){return j+"/"+s}const Re="modulepreload",V={},Te="/my-blog/",f=function(a,t){return!t||t.length===0?a():Promise.all(t.map(r=>{if(r=`${Te}${r}`,r in V)return;V[r]=!0;const o=r.endsWith(".css"),n=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${n}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":Re,o||(l.as="script",l.crossOrigin=""),l.href=r,document.head.appendChild(l),o)return new Promise((p,y)=>{l.addEventListener("load",p),l.addEventListener("error",y)})})).then(()=>a())},E=s=>{const a=k.exports.lazy(s);return a.preload=s,a},Ce=E(()=>f(()=>import("./Homepage.574d42cb.js"),["assets/Homepage.574d42cb.js","assets/Homepage.dcb251ef.css","assets/vendor.5bc579f6.js","assets/index.1b296300.js"])),Oe=E(()=>f(()=>import("./Login.f8118dd6.js"),["assets/Login.f8118dd6.js","assets/vendor.5bc579f6.js"])),Ae=E(()=>f(()=>import("./Registration.60d42ea3.js"),["assets/Registration.60d42ea3.js","assets/vendor.5bc579f6.js"])),Ie=E(()=>f(()=>import("./PostDetails.297a849e.js"),["assets/PostDetails.297a849e.js","assets/PostDetails.8f9db8fa.css","assets/vendor.5bc579f6.js","assets/index.6ad6dc4a.js"])),De=E(()=>f(()=>import("./AddPost.907ee739.js"),["assets/AddPost.907ee739.js","assets/AddPost.f98a40bf.css","assets/vendor.5bc579f6.js","assets/index.6ad6dc4a.js"])),He=E(()=>f(()=>import("./Dashboard.1847c73f.js"),["assets/Dashboard.1847c73f.js","assets/vendor.5bc579f6.js","assets/AddPost.907ee739.js","assets/AddPost.f98a40bf.css","assets/index.6ad6dc4a.js"])),je=E(()=>f(()=>import("./ProfilePage.9bbec339.js"),["assets/ProfilePage.9bbec339.js","assets/ProfilePage.e50e34e0.css","assets/vendor.5bc579f6.js","assets/index.1b296300.js"])),$=[{path:"/",exact:!0,component:Ce},{path:"/author/profile/:username",exact:!0,component:je},{path:"/posts/:slug",exact:!0,component:Ie}];var F=s=>s?[...$,{path:"/admin/dashboard",component:He},{path:"/admin/add-post",component:De}]:[...$,{path:"/auth/login",exact:!0,component:Oe},{path:"/auth/registration",exact:!0,component:Ae}];const Ve=(s,a)=>{const t=a.find(r=>te(s,{path:r.path,exact:r.exact}));return t?t.component:null};let g=[];const $e=p=>{var y=p,{staticContext:s,to:a,delay:t,history:r,isActive:o,match:n}=y,l=L(y,["staticContext","to","delay","history","isActive","match"]);let _,v;const[i,u]=e.useState(!1),[M,x]=e.useState(!1);function B(N){console.info(`*********** ${N} *************`)}function R(){B("component.preload function not return any promise, we assume you are not using react lazy loading routing, so you can simple use NavLink or Link"),g=[],u(!0),_=setTimeout(()=>{x(!1)},t||100),t?v=setTimeout(()=>{r.push(a)},t):r.push(a)}function q(N){clearTimeout(_),clearTimeout(v),x(!0),u(!1),g.push(N);const b=Ve(N,F(!0));if(b&&b.preload){const T=b.preload();T?T.then(()=>{t?setTimeout(()=>{u(!0),x(!1),g=[]},t):(u(!0),x(!1),g=[])}).catch(U=>console.log("Something were wrong when preload component load",U)):R()}else R()}i&&(r.push(g[g.length-1]),g=[],u(!1));function G(){return i?a:""}return e.createElement("div",{className:"preload_route_link"},M&&e.createElement(P,null),e.createElement(c,m({className:o?"active":"",to:G,onMouseDown:()=>q(a)},l)))};var Fe=ee(t=>{var r=t,{location:s}=r,a=L(r,["location"]);const o=(s==null?void 0:s.pathname)===a.to;return e.createElement($e,m({isActive:o},a))});function Me(s,a){let t=a.trim().toLowerCase();if(t){let r=[];s.map(n=>{n.tags.findIndex(l=>l.toLowerCase().indexOf(t)!==-1)!==-1&&r.push(n),n.title.toLowerCase().indexOf(t)!==-1&&r.push(n)});let o=[];for(let n=0;n<r.length;n++)o.findIndex(p=>p.id===r[n].id)===-1&&o.push(r[n]);return o}else return s}function Qe(s,a){h.get("/api/posts").then(t=>{t.status===200&&(s({type:"FETCH_POSTS",payload:t.data.posts}),a())})}function We(s,a,t){h.get(`/api/posts/${s}`).then(r=>{r.status===200&&(a({type:"FETCH_POST",payload:r.data.post}),t(r.data.post))})}function Je(s,a,t){h.get(`/api/raw-md-content/${s}`).then(r=>{r.status===200&&(a({type:"FETCH_RAW_MD_CONTENT",payload:r.data.mdContent}),t(r.data.mdContent))})}const Xe=(s,a)=>async t=>{(await h.delete(`/api/post/${s}`)).status===200&&(t({type:"DELETE_POST",payload:s}),a&&a(!0))},Be=s=>{const{authState:a,postState:t}=s,r=ae(),o=I(),[n,l]=k.exports.useState("");function p(i){r.push(i),l("")}function y(){l(""),window.localStorage.setItem("token",""),o({type:"LOGIN",payload:{}})}function _(i){return i&&e.createElement("div",{className:"dropdown_nav"},e.createElement("div",{className:"min-w-200px card bg-white text-sm font-medium"},a.id?e.createElement(e.Fragment,null,a.role==="admin"&&e.createElement("li",{className:"hover:bg-primary hover:bg-opacity-40 hover:text-white cursor-pointer px-2 py-1"},e.createElement(d,{icon:ne,className:"mr-2 text-gray-800"}),e.createElement(D,{to:"/admin/dashboard"},"Dashboard")),e.createElement("li",{onClick:()=>p(`/author/profile/${a.username}`),className:"hover:bg-opacity-40 hover:bg-primary hover:text-white cursor-pointer px-2 py-1"},e.createElement(d,{icon:le,className:"mr-2 text-gray-800"}),"Profile"),e.createElement("li",{onClick:()=>y(),className:"hover:bg-primary hover:bg-opacity-40 hover:text-white cursor-pointer px-2 py-1"},e.createElement(d,{icon:ie,className:"mr-2 text-gray-800"}),"Logout")):e.createElement("li",{className:"hover:bg-primary hover:bg-opacity-40 hover:text-white  cursor-pointer  px-2 py-1",onClick:()=>p("/auth/login")},e.createElement(d,{className:"mr-2 text-gray-800",icon:ce}),"Login")))}function v(){let i=t.searchValue.trim().toLowerCase();if(i){let u=Me(t.posts,i);u.length>0?(o({type:"SEARCH_POSTS",payload:u}),r.replace(`/?search=${i}`)):(o({type:"SEARCH_POSTS",payload:[]}),r.replace(`/?search=${i}`))}else o({type:"SEARCH_POSTS",payload:t.posts}),r.replace("/")}return e.createElement(e.Fragment,null,e.createElement("div",{className:"navigation"},e.createElement("div",{className:"navigation__container px-2 md:px-5 "},e.createElement("ul",{className:"main-nav"},e.createElement("div",{className:"nav-logo flex-2"},e.createElement("div",{className:"flex flex align-center"},e.createElement("div",{className:"brand"},e.createElement("h4",null,e.createElement(D,{to:"/"},"My Blog"))),e.createElement("div",{className:"nav-search-input_wrapper flex-2"},e.createElement("input",{onKeyPress:i=>i.key==="Enter"&&v(),value:t.searchValue,onChange:i=>o({type:"SET_POST_SEARCH_VALUE",payload:i.target.value}),className:"nav-search-input",type:"text",placeholder:"Search Blog Posts"}),e.createElement(d,{icon:se,className:"pointer ",onClick:v})))),e.createElement("div",{className:"nav-center flex-5 md:flex-1"},e.createElement("ul",{className:"nav_items flex  justify-end align-center"},e.createElement("li",{className:"nav_item hidden md:block  "},e.createElement(Fe,{to:"/"},e.createElement(d,{icon:re,className:"text-white"}))))),e.createElement("div",{className:"nav-auth lg:flex-2"},e.createElement("ul",{className:"nav_items flex justify-end"},e.createElement("div",{className:"py-2 px-0 flex relative items-center",onMouseLeave:()=>l(""),onMouseEnter:()=>l("user_menu")},a.id&&e.createElement("h4",{className:"hidden lg:block text-white font-medium mr-0"},a.first_name),e.createElement("span",{className:"avatar_logo"},a.id?e.createElement("img",{className:"",src:ke(a.avatar?a.avatar:"static/avatar/Alec-Thompson-card_20200415_1603252.10e65779.jpg"),alt:""}):e.createElement(d,{icon:oe,className:"text-white"})),_(n==="user_menu"))))))),e.createElement("div",{className:"h-60"}))};const qe=s=>{h.get("/api/auth/current-auth").then(a=>{a.status===201&&s({type:"LOGIN",payload:a.data})})},Ye=(s,a,t)=>{h.post("/api/auth/login",{email:s.email,password:s.password}).then(r=>{r.status===200&&a({type:"LOGIN",payload:r.data}),t()})};const Ge=()=>{const s=H(a=>a.appState);return e.createElement("div",{className:"bg-primary py-5"},e.createElement("div",{className:"container-1200 px-4"},e.createElement("div",{className:"footer text-center grid grid-cols-1 gap-y-4 sm:grid-cols-2 md:grid-cols-4 md:text-left "},e.createElement("div",null,e.createElement("h3",{className:"text-xl text-gray-200 mb-2"},"My Blog"),e.createElement(c,{className:"text-gray-300 text-sm mb-2"},"Hire Me"),e.createElement("div",{className:"social flex py-2 justify-center md:justify-start"},e.createElement("li",{className:"mr-2"},e.createElement("a",{href:"https://www.facebook.com/raselmraju",target:"_blank"},e.createElement(d,{icon:me}))),e.createElement("li",{className:"mr-2"},e.createElement("a",{href:"https://github.com/rasel-code-dev",target:"_blank"},e.createElement(d,{icon:de}))),e.createElement("li",{className:"mr-4"},e.createElement("a",{href:"https://www.linkedin.com/in/rasel-code-dev",target:"_blank"},e.createElement(d,{icon:ue}))),e.createElement("li",{className:"mr-2"},e.createElement("a",{href:"https://rasel-code-dev.vercel.app",target:"_blank"},e.createElement(d,{icon:pe})))),e.createElement("h4",{className:"text-md text-gray-300 mb-2"},"\xA9 2021, All Rights Reserved.")),e.createElement("div",null,e.createElement("h3",{className:"text-md text-gray-200 mb-2"},"Quick Link"),e.createElement("ul",null,e.createElement("li",{className:"text-sm"},e.createElement(c,{className:"text-gray-300",to:"/admin/dashboard/add-post/null"},"Create a Post")," "),e.createElement("li",{className:"text-sm"},e.createElement(c,{className:"text-gray-300",to:"/auth/login"},"Login")," "),e.createElement("li",{className:"text-sm"},e.createElement(c,{className:"text-gray-300",to:"/auth/registration"},"Registration")," "))),e.createElement("div",null,e.createElement("h3",{className:"text-md text-gray-200 mb-2"},"Authors"),e.createElement("ul",null,e.createElement("li",{className:"text-sm"},"  ",e.createElement(c,{className:"text-gray-300",to:"/author/profile/rasel_mahmud"},"#Rasel")," "),e.createElement("li",{className:"text-sm"},"  ",e.createElement(c,{className:"text-gray-300",to:"/author/profile/Raju%20Sarker"},"#Raju")," "))),e.createElement("div",null,e.createElement("h3",{className:"text-md text-gray-200 mb-2"},"Hottest Stories"),e.createElement("ul",null,e.createElement("li",{className:"text-sm"},"  ",e.createElement(c,{className:"text-gray-300",to:"/?search=javascript"},"#Javascript")," "),e.createElement("li",{className:"text-sm"},"  ",e.createElement(c,{className:"text-gray-300",to:"/?search=react"},"#React")," "),e.createElement("li",{className:"text-sm"},"  ",e.createElement(c,{className:"text-gray-300",to:"/?search=mongodb"},"#Databse")," "),e.createElement("li",{className:"text-sm"},"  ",e.createElement(c,{className:"text-gray-300",to:"/?search=mysql"},"#MySQL")," "),e.createElement("li",{className:"text-sm"},"  ",e.createElement(c,{className:"text-gray-300",to:"/?search=loop"},"#Loop")," ")))),e.createElement("div",{className:"flex justify-center text-gray-200  mt-4 md:mt-0"},e.createElement("h4",{className:"mx-4 font-normal"},"Total Hits ",s.visitors.total_visitors&&s.visitors.total_visitors.length>0?s.visitors.total_visitors.length:0,"  "),e.createElement("h4",{className:"font-normal"},"Today Hits ",s.visitors.day_visitors&&s.visitors.day_visitors.length>0?s.visitors.day_visitors.length:0,"  "))))};function Ue(s){let a=I(),{authState:t,postState:r}=H(o=>({authState:o.authState,postState:o.postState}));return e.useEffect(()=>{qe(a),h.post("/api/add-cookie").then(o=>{a({type:"SET_VISITORS",payload:{day_visitors:o.data.day_visitor.ids,total_visitors:o.data.total_visitor.ids}})})},[]),e.createElement("div",{className:"App"},e.createElement(Be,{postState:r,authState:t}),e.createElement("div",{className:"viewport"},e.createElement(he,null,e.createElement(k.exports.Suspense,{fallback:e.createElement(P,null)},F(!!t.id).map((o,n)=>e.createElement(fe,m({key:n},o)))))),e.createElement(Ge,null))}Ee.render(e.createElement(ge,{basename:"/my-blog"},e.createElement(ye,{store:Pe},e.createElement(Ue,null))),document.getElementById("app"));export{Qe as a,Me as b,h as c,Xe as d,We as e,ke as f,Je as g,Ye as l};
