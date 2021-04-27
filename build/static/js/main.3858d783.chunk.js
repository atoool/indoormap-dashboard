/*!

=========================================================
* Black Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*! For license information please see main.3858d783.chunk.js.LICENSE.txt */
(this["webpackJsonpblack-dashboard-react"]=this["webpackJsonpblack-dashboard-react"]||[]).push([[0],{106:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/anime3.4438e506.png"},120:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/emilyz.105ff23d.jpg"},121:function(e,t,a){"use strict";a.r(t);var c=a(3),n=a.n(c),s=a(30),r=a.n(s),l=(a(81),a(82),a(83),a(84),a(16)),i="",o="white-content",j=Object(c.createContext)({theme:i,changeTheme:function(){}}),d=a(5);function b(e){var t=Object(c.useState)(i),a=Object(l.a)(t,2),n=a[0],s=a[1];return Object(c.useEffect)((function(){switch(n){case o:document.body.classList.add("white-content");break;case i:default:document.body.classList.remove("white-content")}}),[n]),Object(d.jsx)(j.Provider,{value:{theme:n,changeTheme:function(e){s(e)}},children:e.children})}var u="primary",m="blue",O="green",h=Object(c.createContext)({color:m,changeColor:function(e){}});function x(e){var t=Object(c.useState)(m),a=Object(l.a)(t,2),n=a[0],s=a[1];return Object(d.jsx)(h.Provider,{value:{color:n,changeColor:function(e){s(e)}},children:e.children})}var f=n.a.createContext({token:null,onSetToken:function(){}}),p=function(e){var t=e.children,a=n.a.useState(null),c=Object(l.a)(a,2),s=c[0],r=c[1],i={token:s,onSetToken:function(e){r(e)}};return Object(d.jsx)(f.Provider,{value:i,children:t})},g=a(38);g.a.initializeApp({apiKey:"AIzaSyDfNILStiLK73DvT-HiYGeSwNmZtGHn0PQ",authDomain:"my-new-react-app.firebaseapp.com",databaseURL:"https://my-new-react-app.firebaseio.com",projectId:"my-new-react-app",storageBucket:"my-new-react-app.appspot.com",messagingSenderId:"279915728451",appId:"1:279915728451:web:a68fceb806695401838ef6"});var v=g.a.firestore(),N=function(e){var t=e.onSetToken,a=Object(c.useState)(!0),n=Object(l.a)(a,2),s=n[0],r=n[1];function i(e){t(e),s&&r(!1)}Object(c.useEffect)((function(){return g.a.auth().onAuthStateChanged(i)}),[])},k=a(27),C=a(18),S=a(75),w=a(70),y=a.n(w),E=a(135),L=a(136),T=a(137),A=a(142),I=a(143),D=a(138),B="indoor",P="2wOFxWRTfIj45rdSg5E5",R=function(e){var t=e.update;Object(c.useEffect)((function(){var e=v.collection(B).doc(P).onSnapshot((function(e){t(e.data().data)}));return function(){return e()}}),[])},z=a(32),W=a(44),F=a.n(W),G=a(122),H=a(123),K=a(124),M=a(125),q=a(126),J=a(127),U=a(128),X=a(71),Y=a(129),_=a(145),Q=a(146),Z=a(130),V=a(131),$=a(144),ee=a(132),te=a(133);var ae,ce=function(e){var t=n.a.useState(!1),c=Object(l.a)(t,2),s=c[0],r=c[1],i=n.a.useState(!1),o=Object(l.a)(i,2),j=o[0],b=o[1],u=n.a.useState("navbar-transparent"),m=Object(l.a)(u,2),O=m[0],h=m[1];n.a.useEffect((function(){return window.addEventListener("resize",x),function(){window.removeEventListener("resize",x)}}));var x=function(){window.innerWidth<993&&s?h("bg-white"):h("navbar-transparent")},f=function(){b(!j)};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(G.a,{className:F()("navbar-absolute",O),expand:"lg",children:Object(d.jsxs)(H.a,{fluid:!0,children:[Object(d.jsxs)("div",{className:"navbar-wrapper",children:[Object(d.jsx)("div",{className:F()("navbar-toggle d-inline",{toggled:e.sidebarOpened}),children:Object(d.jsxs)(K.a,{onClick:e.toggleSidebar,children:[Object(d.jsx)("span",{className:"navbar-toggler-bar bar1"}),Object(d.jsx)("span",{className:"navbar-toggler-bar bar2"}),Object(d.jsx)("span",{className:"navbar-toggler-bar bar3"})]})}),Object(d.jsx)(M.a,{href:"#pablo",onClick:function(e){return e.preventDefault()},children:e.brandText})]}),Object(d.jsxs)(K.a,{onClick:function(){h(s?"navbar-transparent":"bg-white"),r(!s)},children:[Object(d.jsx)("span",{className:"navbar-toggler-bar navbar-kebab"}),Object(d.jsx)("span",{className:"navbar-toggler-bar navbar-kebab"}),Object(d.jsx)("span",{className:"navbar-toggler-bar navbar-kebab"})]}),Object(d.jsx)(q.a,{navbar:!0,isOpen:s,children:Object(d.jsxs)(J.a,{className:"ml-auto",navbar:!0,children:[Object(d.jsx)(U.a,{className:"search-bar",children:Object(d.jsxs)(X.a,{color:"link",onClick:f,children:[Object(d.jsx)("i",{className:"tim-icons icon-zoom-split"}),Object(d.jsx)("span",{className:"d-lg-none d-md-block",children:"Search"})]})}),Object(d.jsxs)(Y.a,{nav:!0,children:[Object(d.jsxs)(_.a,{caret:!0,color:"default",nav:!0,onClick:function(e){return e.preventDefault()},children:[Object(d.jsx)("div",{className:"photo",children:Object(d.jsx)("img",{alt:"...",src:a(106).default})}),Object(d.jsx)("b",{className:"caret d-none d-lg-block d-xl-block"}),Object(d.jsx)("p",{className:"d-lg-none",children:"Log out"})]}),Object(d.jsxs)(Q.a,{className:"dropdown-navbar",right:!0,tag:"ul",children:[Object(d.jsx)(Z.a,{tag:"li",children:Object(d.jsx)(V.a,{className:"nav-item",children:"Profile"})}),Object(d.jsx)(V.a,{divider:!0,tag:"li"}),Object(d.jsx)(Z.a,{tag:"li",onClick:function(){g.a.auth().signOut()},children:Object(d.jsx)(V.a,{className:"nav-item",children:"Log out"})})]})]}),Object(d.jsx)("li",{className:"separator d-lg-none"})]})})]})}),Object(d.jsx)($.a,{modalClassName:"modal-search",isOpen:j,toggle:f,children:Object(d.jsxs)(ee.a,{children:[Object(d.jsx)(te.a,{placeholder:"SEARCH",type:"text"}),Object(d.jsx)("button",{"aria-label":"Close",className:"close",onClick:f,children:Object(d.jsx)("i",{className:"tim-icons icon-simple-remove"})})]})})]})};function ne(e){var t=Object(C.f)(),a=n.a.useRef(null);n.a.useEffect((function(){return navigator.platform.indexOf("Win")>-1&&(ae=new z.a(a.current,{suppressScrollX:!0,suppressScrollY:!1})),function(){navigator.platform.indexOf("Win")>-1&&ae.destroy()}}));var c=e.routes,s=e.rtlActive,r=e.logo,l=null,i=null;return void 0!==r&&(void 0!==r.outterLink?(l=Object(d.jsx)("a",{href:r.outterLink,className:"simple-text logo-mini",target:"_blank",onClick:e.toggleSidebar,children:Object(d.jsx)("div",{className:"logo-img",children:Object(d.jsx)("img",{src:r.imgSrc,alt:"react-logo"})})}),i=Object(d.jsx)("a",{href:r.outterLink,className:"simple-text logo-normal",target:"_blank",onClick:e.toggleSidebar,children:r.text})):(l=Object(d.jsx)(k.b,{to:r.innerLink,className:"simple-text logo-mini",onClick:e.toggleSidebar,children:Object(d.jsx)("div",{className:"logo-img",children:Object(d.jsx)("img",{src:r.imgSrc,alt:"react-logo"})})}),i=Object(d.jsx)(k.b,{to:r.innerLink,className:"simple-text logo-normal",onClick:e.toggleSidebar,children:r.text}))),Object(d.jsx)(h.Consumer,{children:function(n){var r=n.color;return Object(d.jsx)("div",{className:"sidebar",data:r,children:Object(d.jsxs)("div",{className:"sidebar-wrapper",ref:a,children:[null!==l||null!==i?Object(d.jsxs)("div",{className:"logo",children:[l,i]}):null,Object(d.jsx)(J.a,{children:c.map((function(a,c){return a.redirect?null:Object(d.jsx)("li",{className:(n=a.path,(t.pathname===n?"active":"")+(a.pro?" active-pro":"")),children:Object(d.jsxs)(k.c,{to:"/",className:"nav-link",activeClassName:"active",onClick:e.toggleSidebar,children:[Object(d.jsx)("i",{className:a.icon}),Object(d.jsx)("p",{children:s?a.rtlName:a.name})]})},c);var n}))})]})})}})}ne.defaultProps={rtlActive:!1,routes:[{}]};var se=ne,re=a(45),le=a(134);var ie=function(e){var t=n.a.useState(!1),a=Object(l.a)(t,2),c=a[0],s=a[1];return Object(d.jsx)("div",{className:"fixed-plugin",children:Object(d.jsxs)(re.a,{isOpen:c,toggle:function(){s(!c)},children:[Object(d.jsx)(_.a,{tag:"div",children:Object(d.jsx)("i",{className:"fa fa-cog fa-2x"})}),Object(d.jsxs)("ul",{className:"dropdown-menu show",children:[Object(d.jsx)("li",{className:"header-title",children:"SIDEBAR BACKGROUND"}),Object(d.jsx)("li",{className:"adjustments-line",children:Object(d.jsxs)("div",{className:"badge-colors text-center",children:[Object(d.jsx)(le.a,{color:"primary",className:e.bgColor===u?"active":"",onClick:function(){e.handleBgClick(u)}})," ",Object(d.jsx)(le.a,{color:"info",className:e.bgColor===m?"active":"",onClick:function(){e.handleBgClick(m)}})," ",Object(d.jsx)(le.a,{color:"success",className:e.bgColor===O?"active":"",onClick:function(){e.handleBgClick(O)}})," "]})}),Object(d.jsx)("li",{className:"adjustments-line text-center color-change",children:Object(d.jsx)(j.Consumer,{children:function(e){var t=e.changeTheme;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("span",{className:"color-label",children:"LIGHT MODE"})," ",Object(d.jsx)(le.a,{className:"light-badge mr-2",onClick:function(){return t(o)}})," ",Object(d.jsx)(le.a,{className:"dark-badge ml-2",onClick:function(){return t(i)}})," ",Object(d.jsx)("span",{className:"color-label",children:"DARK MODE"})," "]})}})}),Object(d.jsx)("li",{className:"button-container"})]})]})})},oe=a(76),je=function(e){var t=e.email,a=e.pass;g.a.auth().signInWithEmailAndPassword(t,a).then((function(e){})).catch((function(e){alert(e)}))},de=a(139),be=a(140),ue=a(141);var me,Oe=function(){var e=n.a.useState({email:"",pass:""}),t=Object(l.a)(e,2),c=t[0],s=t[1],r=function(e,t){var a=c;a[t]=e.target.value,s(Object(oe.a)({},a))};return Object(d.jsx)(fe,{login:!0,children:Object(d.jsx)("div",{className:"content",children:Object(d.jsx)(E.a,{children:Object(d.jsx)(L.a,{md:"10",children:Object(d.jsxs)(T.a,{className:"card-user",children:[Object(d.jsxs)(D.a,{children:[Object(d.jsx)(de.a,{}),Object(d.jsxs)("div",{className:"author",children:[Object(d.jsx)("div",{className:"block block-one"}),Object(d.jsx)("div",{className:"block block-two"}),Object(d.jsx)("div",{className:"block block-three"}),Object(d.jsx)("div",{className:"block block-four"}),Object(d.jsx)("a",{href:"#pablo",onClick:function(e){return e.preventDefault()},children:Object(d.jsx)("img",{alt:"...",className:"avatar",src:a(120).default})})]}),Object(d.jsx)("div",{style:{width:"100%",marginBottom:20,marginTop:20},children:Object(d.jsx)("h6",{className:"title",style:{fontSize:20,textAlign:"center"},children:"LOGIN"})}),Object(d.jsx)(L.a,{className:"pl-md-1",md:"12",children:Object(d.jsxs)(be.a,{children:[Object(d.jsx)("label",{htmlFor:"exampleInputEmail1",children:"Email address"}),Object(d.jsx)(te.a,{placeholder:"mike@email.com",type:"email",onChange:function(e){return r(e,"email")}})]})}),Object(d.jsx)(L.a,{className:"pl-md-1",md:"12",children:Object(d.jsxs)(be.a,{children:[Object(d.jsx)("label",{children:"Password"}),Object(d.jsx)(te.a,{type:"password",placeholder:"Enter password",onChange:function(e){return r(e,"pass")}})]})})]}),Object(d.jsx)(ue.a,{children:Object(d.jsx)("div",{style:{width:"100%",justifyContent:"center",flex:1,display:"flex"},children:Object(d.jsx)(X.a,{className:"btn-fill",color:"primary",type:"submit",onClick:function(){je({email:c.email,pass:c.pass})},children:"Sign In"})})})]})})})})})},he=[{path:"/dashboard",name:"Dashboard",rtlName:"\u0644\u0648\u062d\u0629 \u0627\u0644\u0642\u064a\u0627\u062f\u0629",icon:"tim-icons icon-chart-pie-36",component:pe,layout:"/admin"}],xe=a.p+"static/media/react-logo.561f1671.png";var fe=function(e){var t=e.children,a=e.login,c=Object(C.f)(),s=n.a.useRef(null),r=n.a.useState(-1!==document.documentElement.className.indexOf("nav-open")),i=Object(l.a)(r,2),o=i[0],j=i[1];n.a.useEffect((function(){if(navigator.platform.indexOf("Win")>-1){document.documentElement.className+=" perfect-scrollbar-on",document.documentElement.classList.remove("perfect-scrollbar-off"),me=new z.a(s.current,{suppressScrollX:!0});for(var e=document.querySelectorAll(".table-responsive"),t=0;t<e.length;t++)me=new z.a(e[t])}return function(){navigator.platform.indexOf("Win")>-1&&(me.destroy(),document.documentElement.classList.add("perfect-scrollbar-off"),document.documentElement.classList.remove("perfect-scrollbar-on"))}})),n.a.useEffect((function(){if(navigator.platform.indexOf("Win")>-1)for(var e=document.querySelectorAll(".table-responsive"),t=0;t<e.length;t++)me=new z.a(e[t]);document.documentElement.scrollTop=0,document.scrollingElement.scrollTop=0,s.current&&(s.current.scrollTop=0)}),[c]);var b=function(){document.documentElement.classList.toggle("nav-open"),j(!o)},u=function(e){for(var t=0;t<he.length;t++)if(-1!==c.pathname.indexOf(he[t].layout+he[t].path))return he[t].name;return"Brand"};return Object(d.jsx)(h.Consumer,{children:function(e){var r=e.color,l=e.changeColor;return Object(d.jsxs)(n.a.Fragment,{children:[Object(d.jsxs)("div",{className:"wrapper",children:[!a&&Object(d.jsx)(se,{routes:he,logo:{outterLink:"/",text:"INDOOR MAP",imgSrc:xe},toggleSidebar:b}),Object(d.jsxs)("div",{className:"main-panel",ref:s,data:r,children:[!a&&Object(d.jsx)(ce,{brandText:u(c.pathname),toggleSidebar:b,sidebarOpened:o}),t]})]}),!a&&Object(d.jsx)(ie,{bgColor:r,handleBgClick:l})]})}})};var pe=function(e){var t=n.a.useState([]),a=Object(l.a)(t,2),c=a[0],s=a[1];return R({update:function(e){s(Object(S.a)(e))}}),Object(d.jsx)(fe,{children:Object(d.jsx)("div",{className:"content",children:Object(d.jsx)(E.a,{children:c.map((function(e){return Object(d.jsx)(L.a,{lg:"4",children:Object(d.jsxs)(T.a,{className:"card-chart",children:[Object(d.jsx)(A.a,{children:Object(d.jsx)(I.a,{tag:"h3",children:null===e||void 0===e?void 0:e.pathName})}),Object(d.jsx)(D.a,{children:Object(d.jsx)("div",{className:"chart-area",style:{justifyContent:"center",display:"flex"},children:(null===e||void 0===e?void 0:e.pathName)&&Object(d.jsx)(y.a,{size:200,value:null===e||void 0===e?void 0:e.pathName})})})]})})}))})})})},ge=function(){var e=Object(c.useState)(!0),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(c.useContext)(f).token,r=Object(c.useContext)(f).onSetToken;return N({onSetToken:r}),Object(c.useEffect)((function(){setTimeout((function(){n(!1)}),1e3)}),[]),a?Object(d.jsx)("div",{}):Object(d.jsx)(k.a,{children:Object(d.jsx)(C.c,{children:s?Object(d.jsx)(C.a,{path:"/",component:pe}):Object(d.jsx)(C.a,{path:"/",component:Oe})})})};r.a.render(Object(d.jsx)(b,{children:Object(d.jsx)(x,{children:Object(d.jsx)(p,{children:Object(d.jsx)(ge,{})})})}),document.getElementById("root"))},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){}},[[121,1,2]]]);
//# sourceMappingURL=main.3858d783.chunk.js.map