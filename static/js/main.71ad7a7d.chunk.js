/*! For license information please see main.71ad7a7d.chunk.js.LICENSE.txt */
(this["webpackJsonpgloriousdawn.github.io"]=this["webpackJsonpgloriousdawn.github.io"]||[]).push([[0],{128:function(e,t,a){e.exports=a(141)},133:function(e,t,a){},141:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(11),o=a.n(i),l=(a(133),a(28)),c=a(35),s=a(51),u=a(18),m=a(49),f=a(33),h=a(30),d=a(214),v=a(204),p=a(215),g=a(208),E=a(210),w=a(206),y=a(207),b=a(209),O=a(205),x=a(103),S=a(40),j=a(212),I=a(211),M=a(198),k=a(203),C=a(200),A=a(201),R=a(199),_=a(4),F=a(184),P=a(187),N=a(216),D=a(189),B=a(190),W=a(194),L=a(193),T=a(191),V=a(192),J=a(197),z=a(88),H=a.n(z),G=a(90),q=a.n(G),U=a(89),$=a.n(U),X=a(143),Y=a(195),K=a(196),Q=a(91),Z=a.n(Q),ee=a(63),te=a.n(ee),ae=a(64),ne=a.n(ae),re=Object(F.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(h.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(f.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}}));function ie(e){var t=e.title,a=e.children,n=re(),i=r.a.useState(!1),o=Object(u.a)(i,2),c=o[0],s=o[1];return r.a.createElement(l.a,null,r.a.createElement("div",{className:n.root},r.a.createElement(P.a,null),r.a.createElement(D.a,{position:"absolute",className:Object(_.a)(n.appBar,c&&n.appBarShift)},r.a.createElement(B.a,{className:n.toolbar},r.a.createElement(T.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){s(!0)},className:Object(_.a)(n.menuButton,c&&n.menuButtonHidden)},r.a.createElement(H.a,null)),r.a.createElement(S.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:n.title},t),r.a.createElement(T.a,{color:"inherit"},r.a.createElement(V.a,{badgeContent:346,max:999,color:"secondary"},r.a.createElement($.a,null))))),r.a.createElement(N.a,{variant:"permanent",classes:{paper:Object(_.a)(n.drawerPaper,!c&&n.drawerPaperClose)},open:c},r.a.createElement("div",{className:n.toolbarIcon},r.a.createElement(T.a,{onClick:function(){s(!1)}},r.a.createElement(q.a,null))),r.a.createElement(L.a,null),r.a.createElement(W.a,null,r.a.createElement(X.a,{component:l.b,to:"/"},r.a.createElement(Y.a,null,r.a.createElement(Z.a,null)),r.a.createElement(K.a,{primary:"Home"})),r.a.createElement(X.a,{component:l.b,to:"/gacha"},r.a.createElement(Y.a,null,r.a.createElement(te.a,null)),r.a.createElement(K.a,{primary:"Gacha"})),r.a.createElement(X.a,{component:l.b,to:"/collection"},r.a.createElement(Y.a,null,r.a.createElement(ne.a,null)),r.a.createElement(K.a,{primary:"Collection"})))),r.a.createElement("main",{className:n.content},r.a.createElement("div",{className:n.appBarSpacer}),r.a.createElement(J.a,{maxWidth:"xl",className:n.container},a))))}var oe=function(e){var t=Object(n.useState)(e),a=Object(u.a)(t,2),r=a[0],i=a[1];return{value:r,setValue:i,reset:function(){return i("")},bind:{value:r,onChange:function(e){i(e.target.value)}}}};function le(e,t,a){function n(e){var t=1+76.18009173/e-86.50532033/(e+1)+24.01409822/(e+2)-1.231739516/(e+3)+.00120858003/(e+4)-536382e-11/(e+5);return(e-.5)*Math.log(e+4.5)-(e+4.5)+Math.log(2.50662827465*t)}function r(e,t,a){for(var n,r=0,i=1,o=1,l=1,c=0,s=0;Math.abs((o-s)/o)>1e-5;)s=o,i=l+(n=-(t+c)*(t+a+c)*e/(t+2*c)/(t+2*c+1))*i,o=(r=o+n*r)+(n=(c+=1)*(a-c)*e/(t+2*c-1)/(t+2*c))*o,r/=l=i+n*l,i/=l,o/=l,l=1;return o/t}var i,o,l,c,s,u;return t<=0||a<0||a>1?0:(e<0?i=0:e>=t?i=1:(o=a,s=(l=(e=Math.floor(e))+1)+(c=t-e),u=Math.exp(n(s)-n(c)-n(l)+l*Math.log(o)+c*Math.log(1-o)),i=1-(o<(l+1)/(s+2)?u*r(o,l,c):1-u*r(1-o,c,l))),i)}function ce(e,t){var a=0;for(var n in t)if(t.hasOwnProperty(n)){var r=t[n];if(!1!==r[2])a+=(1-le(0,e,r[0]))*r[1]}return a}function se(e,t){var a=[];for(var n in t)if(t.hasOwnProperty(n)){var r=t[n];a.push([r[2]?r[1]:0,r[0]])}a.sort((function(e,t){return t[0]-e[0]}));var i=0,o=1;return a.forEach((function(t){var a=le(0,e,t[1]);i+=o*a*t[0],o*=1-a})),i}function ue(e,t,a,n,i,o){return r.a.createElement(M.a,{open:a,onClose:n,"aria-labelledby":"form-dialog-title"},r.a.createElement(R.a,{id:"form-dialog-title"},"Save Profile"),r.a.createElement(C.a,null,r.a.createElement(A.a,null,e),r.a.createElement(d.a,Object.assign({autoFocus:!0,margin:"dense",id:"profileName",label:"Profile Name",fullWidth:!0},o))),r.a.createElement(k.a,null,r.a.createElement(v.a,{onClick:i,color:"primary"},"Confirm")))}function me(e,t,a){var n=oe(""),i=n.value,o=n.bind,l=n.reset,c=oe(""),s=c.value,u=c.bind,S=c.reset,j=oe(""),I=j.value,M=j.bind,k=j.reset,C=function(a){var n=a.target.name,r=Object(m.a)(e[n]);r[2]=a.target.checked,t(Object(h.a)({},e,Object(f.a)({},n,r)))},A=[],R=function(a){if(!e.hasOwnProperty(a))return"continue";A.push(r.a.createElement(O.a,{key:a},r.a.createElement(w.a,{padding:"none"},r.a.createElement(p.a,{color:"primary",checked:e[a][2],name:a,onChange:C})),r.a.createElement(w.a,{padding:"none"},a),r.a.createElement(w.a,{padding:"none"},e[a][0]),r.a.createElement(w.a,{padding:"none"},e[a][1]),r.a.createElement(w.a,null,r.a.createElement(v.a,{variant:"outlined",color:"secondary",onClick:function(n){return function(a){var n=Object(h.a)({},e);delete n[a],t(n)}(a)}},"Del"))))};for(var _ in e)R(_);return r.a.createElement(y.a,{component:x.a},r.a.createElement(g.a,{"aria-label":"simple table"},r.a.createElement(b.a,null,r.a.createElement(O.a,null,r.a.createElement(w.a,{padding:"none"},r.a.createElement(p.a,{disabled:!0})),a.map((function(e){return r.a.createElement(w.a,{padding:"none",key:e},e)})))),r.a.createElement(E.a,null,A,r.a.createElement(O.a,null,r.a.createElement(w.a,{padding:"none"}),r.a.createElement(w.a,{padding:"none",size:"small"},r.a.createElement(d.a,Object.assign({fullWidth:!0,label:"Name",variant:"outlined",size:"small",required:!0},o))),r.a.createElement(w.a,{padding:"none",size:"small"},r.a.createElement(d.a,Object.assign({fullWidth:!0,label:"Prob",variant:"outlined",size:"small",required:!0},u))),r.a.createElement(w.a,{padding:"none",size:"small"},r.a.createElement(d.a,Object.assign({fullWidth:!0,label:"Value",variant:"outlined",size:"small",required:!0},M))),r.a.createElement(w.a,{size:"small"},r.a.createElement(v.a,{variant:"contained",color:"primary",onClick:function(a){a.preventDefault(),t(Object(h.a)({},e,Object(f.a)({},i,[Number(s),Number(I),!0]))),l(),S(),k()}},"Add"))))))}function fe(e,t){var a=localStorage.getItem("refValues");null===a?(a=[],localStorage.setItem("refValues",JSON.stringify([]))):a=JSON.parse(a);var i,o=Object(n.useState)(a),l=Object(u.a)(o,2),c=l[0],f=l[1],h=r.a.useState(!1),d=Object(u.a)(h,2),p=d[0],S=d[1],j=oe(""),I=j.value,M=j.bind,k=Object(n.useState)([]),C=Object(u.a)(k,2),A=C[0],R=C[1],_=300-e,F=(ce(_,t)+se(_,t))/_,P=ce(10,t)/10,N=[],D=Object(s.a)([].concat(Object(m.a)(c),[["10 Pulls",P,!0],[_+" Pulls",F,!0]]).sort((function(e,t){return t[1]-e[1]})));try{var B=function(){var e=i.value;N.push(r.a.createElement(O.a,{key:e[0]},r.a.createElement(w.a,{style:e[2]?{background:"LightGreen"}:{background:"white"}},e[0]),r.a.createElement(w.a,null,Math.round(1e5*e[1])/1e5),r.a.createElement(w.a,null,e[2]?r.a.createElement(v.a,{variant:"outlined",color:"primary",onClick:function(t){return R(e),void S(!0)}},"Pin"):r.a.createElement(v.a,{variant:"outlined",color:"secondary",onClick:function(t){return function(e){var t=c.filter((function(t){return t[0]!==e}));localStorage.setItem("refValues",JSON.stringify(t)),f(t)}(e[0])}},"Del"))))};for(D.s();!(i=D.n()).done;)B()}catch(W){D.e(W)}finally{D.f()}return r.a.createElement(y.a,{component:x.a},r.a.createElement(g.a,{"aria-label":"simple table"},r.a.createElement(b.a,null,r.a.createElement(O.a,null,r.a.createElement(w.a,null,"Ref Name"),r.a.createElement(w.a,null,"Value per pull"),r.a.createElement(w.a,null,"Action"))),r.a.createElement(E.a,null,N)),ue("Save current ref value as:",0,p,(function(){S(!1)}),(function(){var e=c.filter((function(e){return e[0]!==I}));e.push([I,A[1]]),localStorage.setItem("refValues",JSON.stringify(e)),f(e),S(!1)}),M))}function he(){var e=Object(n.useState)({}),t=Object(u.a)(e,2),a=t[0],i=t[1],o=oe(0),l=o.value,c=o.bind,s=se(300-l,a);return r.a.createElement(ie,{title:"Gacha Tool"},r.a.createElement(j.a,{container:!0,spacing:3},r.a.createElement(j.a,{container:!0,item:!0,xs:12,md:4,lg:3},r.a.createElement(x.a,null,r.a.createElement(d.a,Object.assign({autoFocus:!0,margin:"normal",label:"Pulls Done",variant:"outlined",required:!0},c)),function(e,t){var a=localStorage.getItem("profiles");null===a?(a={"Limited-3":{"Focus-1":[.004,30,!0],"Focus-2":[.004,20,!0],"Focus-3":[.004,10,!0],Perm:[.018,2,!0]},"Limited-2":{"Focus-1":[.004,30,!0],"Focus-2":[.004,10,!0],Perm:[.022,2,!0]},"Limited-1":{"Focus-1":[.0075,30,!0],Perm:[.0225,2,!0]},"Cinfes-2":{"Focus-1":[.005,20,!0],"Focus-2":[.005,15,!0],"Fes-Type":[.00375,15,!0],"Fes-Other":[.00375,15,!0],Perm:[.0425,2,!0],"Fes-Spark":[0,30,!0]},"Cinfes-1":{"Focus-1":[.0075,20,!0],"Fes-Type":[.00375,15,!0],"Fes-Other":[.00375,15,!0],Perm:[.045,2,!0],"Fes-Spark":[0,30,!0]},Empty:{}},localStorage.setItem("profiles",JSON.stringify(a))):a=JSON.parse(a);var i=Object(n.useState)(a),o=Object(u.a)(i,2),l=o[0],c=o[1],s="";for(var m in l)if(l.hasOwnProperty(m)){s=m;break}var p=r.a.useState(!1),g=Object(u.a)(p,2),E=g[0],w=g[1],y=oe(""),b=y.value,O=y.bind,x=y.reset,S=oe(s),M=S.value,k=S.bind,C=[];for(var A in l)l.hasOwnProperty(A)&&C.push(r.a.createElement(I.a,{key:A,value:A},A));return r.a.createElement("div",null,r.a.createElement(j.a,{container:!0,spacing:1},r.a.createElement(j.a,{item:!0,xs:12},r.a.createElement(d.a,Object.assign({select:!0,fullWidth:!0,label:"Select Profile"},k,{xs:6}),C)),r.a.createElement(j.a,{item:!0,xs:4},r.a.createElement(v.a,{variant:"contained",fullWidth:!0,onClick:function(e){e.preventDefault(),""!==M&&l.hasOwnProperty(M)&&t(l[M])}},"Load")),r.a.createElement(j.a,{item:!0,xs:4},r.a.createElement(v.a,{margin:"normal",variant:"contained",fullWidth:!0,color:"secondary",onClick:function(e){if(e.preventDefault(),""!==M&&l.hasOwnProperty(M)){var t=Object(h.a)({},l);delete t[M],x(),localStorage.setItem("profiles",JSON.stringify(t)),c(t)}}},"Delete")),r.a.createElement(j.a,{item:!0,xs:4},r.a.createElement(v.a,{margin:"normal",variant:"contained",fullWidth:!0,color:"primary",onClick:function(e){e.preventDefault(),w(!0)}},"Save"))),ue("Enter the name for current gacha profile to save(override if exists):",0,E,(function(){w(!1)}),(function(t){t.preventDefault();var a=Object(h.a)({},l,Object(f.a)({},b,Object(h.a)({},e)));localStorage.setItem("profiles",JSON.stringify(a)),w(!1),c(a)}),O))}(a,i),r.a.createElement(S.a,{variant:"subtitle1"},"Estimated spark value: ",s))),r.a.createElement(j.a,{item:!0,xs:12,md:8,lg:9},r.a.createElement(x.a,null,fe(l,a))),r.a.createElement(j.a,{item:!0,xs:12},r.a.createElement(x.a,null,me(a,i,["Reward","Prob","Value","Action"])))))}function de(){return r.a.createElement(ie,{title:"Glorious Dawn's Home"},r.a.createElement(j.a,{container:!0,spacing:3},r.a.createElement(j.a,{item:!0,xs:12,md:8,lg:9},r.a.createElement(x.a,null,r.a.createElement(W.a,null,r.a.createElement(X.a,{component:"h2",variant:"h6",color:"inherit",noWrap:!0},"Available tools:"),r.a.createElement(L.a,null),r.a.createElement(X.a,{component:l.b,to:"/gacha"},r.a.createElement(Y.a,null,r.a.createElement(te.a,null)),r.a.createElement(K.a,{primary:"Gacha"})),r.a.createElement(X.a,{component:l.b,to:"/collection"},r.a.createElement(Y.a,null,r.a.createElement(ne.a,null)),r.a.createElement(K.a,{primary:"Collection"}))))),r.a.createElement(j.a,{item:!0,xs:12,md:4,lg:3},r.a.createElement(x.a,null)),r.a.createElement(j.a,{item:!0,xs:12},r.a.createElement(x.a,null))))}var ve=a(213);function pe(e){var t=e.headers,a=e.items;return r.a.createElement(y.a,{component:x.a},r.a.createElement(g.a,{"aria-label":"simple table"},r.a.createElement(b.a,null,r.a.createElement(O.a,{key:"headers"},t.map((function(e){return r.a.createElement(w.a,{key:"headers-".concat(e)},e)})))),r.a.createElement(E.a,null,a.map((function(e){return r.a.createElement(O.a,{key:e[0]},e.map((function(a,n){return r.a.createElement(w.a,{key:"".concat(e[0],"-").concat(t[n])},a)})))})))))}var ge=a(92),Ee=a.n(ge),we=a(68),ye=a.n(we),be="$setMainImageFeatures",Oe="$matchSubImageData",xe="$matchSubImageFeatures",Se=a(73);function je(e,t){if(e.type.match(/image.*/)){var a=new FileReader;a.onload=function(a){var n=new Image;n.onload=function(){t(n)},n.id=e.name.split(".")[0],n.src=a.target.result},a.readAsDataURL(e)}else if(e.type.match("application/json")){var n=new FileReader;n.onload=function(e){var a=JSON.parse(e.target.result);t(a)},n.readAsText(e)}}function Ie(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,r=t.getContext("2d"),i=e.width,o=e.height;return t.width=i,t.height=o,r.drawImage(e,a,n,i,o),r.getImageData(a,n,i,o)}function Me(e,t){for(var a=0;a<t.length;a++){var n=e;n.fillStyle="#FF0000",n.strokeStyle="#FF0000",n.fillRect(t[a][0],t[a][1],20,20)}}function ke(){var e=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e,t){return e[0]-t[0]},a=Object(n.useRef)(e),r=Object(n.useState)(e),i=Object(u.a)(r,2),o=i[0],l=i[1],c=function(e){var n=a.current,r=n.findIndex((function(t){return t[0]===e[0]}));for(-1!==r&&n.splice(r,1),r=0;r<n.length&&!(t(e,n[r])<=0);++r);n.splice(r,0,e),l(Object(m.a)(n))},s=function(e){var t=a.current,n=t.findIndex((function(t){return t[0]===e[0]}));-1!==n&&t.splice(n,1),l(Object(m.a)(t))};return{rows:o,upsert:c,remove:s}}([],(function(e,t){return t[1]-e[1]})),t=e.rows,a=e.upsert,i=e.remove,o=Object(n.useRef)(null),l=Object(n.useRef)(null),c=Object(n.useRef)([]),f=Object(n.useRef)(0),h=Object(n.useRef)([]),p=(Object(n.useRef)({}),Object(n.useState)("")),g=Object(u.a)(p,2),E=g[0],w=g[1];Object(n.useEffect)((function(){for(var e=0;e<8;e++){var t=new Ee.a;t.onmessage=function(e){if(e.data[0]===Oe||e.data[0]===xe){var t=e.data[1],n=e.data[2],l=(e.data[3],[t,n.length]);l.push(r.a.createElement("div",null,r.a.createElement(v.a,{variant:"contained",color:"primary",onClick:function(e){return Me(o.current.getContext("2d"),n)}},"Draw"),r.a.createElement(v.a,{variant:"contained",color:"secondary",onClick:function(e){h.current.push(t),i(l)}},"Add"))),a(l)}else console.log(e.data[0])},c.current.push(t)}return function(){var e,t=Object(s.a)(c.current);try{for(t.s();!(e=t.n()).done;){e.value.terminate()}}catch(a){t.e(a)}finally{t.f()}}}),[]);var y=function(e){if(e instanceof Image){var t=Ie(e,l.current);c.current[f.current].postMessage([Oe,e.id,t]),f.current=(f.current+1)%8}else for(var a in e)e.hasOwnProperty(a)&&(c.current[f.current].postMessage([xe,a,e[a]]),f.current=(f.current+1)%8)},b=function(e){if(e instanceof Image){var t,a=Ie(e,o.current),n=ye.a.Image.grayscale(a.data,a.width,a.height),r=ye.a.Fast.findCorners(n,a.width,a.height),i=ye.a.Brief.getDescriptors(n,a.width,r),l=Object(s.a)(c.current);try{for(l.s();!(t=l.n()).done;){t.value.postMessage([be,r,i])}}catch(u){l.e(u)}finally{l.f()}}};return r.a.createElement(ie,{title:"Collection Tool"},r.a.createElement(j.a,{container:!0,spacing:3},r.a.createElement(j.a,{item:!0,xs:6},r.a.createElement(Se.a,{dropzoneText:"Drop or Click: Main image",filesLimit:2,maxFileSize:1/0,showPreviewsInDropzone:!1,showAlerts:!1,onDrop:function(e){return je(e,b)}})),r.a.createElement(j.a,{item:!0,xs:6},r.a.createElement(Se.a,{dropzoneText:"Drop or Click: Sub images or Features JSON",filesLimit:1024,maxFileSize:1/0,showPreviewsInDropzone:!1,showAlerts:!1,onDrop:function(e){return je(e,y)}}),r.a.createElement(ve.a,{href:"/data/ssr+040320.json",download:!0},"Download SSR+040320.json")),r.a.createElement(j.a,{item:!0,xs:12},r.a.createElement("canvas",{ref:o,width:0,height:0}),r.a.createElement("canvas",{ref:l,hidden:!0})),r.a.createElement(j.a,{item:!0,xs:12},r.a.createElement(v.a,{size:"large",variant:"contained",color:"primary",onClick:function(e){w(h.current.join(" "))}},"Export"),r.a.createElement(d.a,{variant:"filled",value:E,disabled:!0}),r.a.createElement(pe,{headers:["Name","Matches","Actions"],items:t}))))}function Ce(){return r.a.createElement(l.a,null,r.a.createElement(c.c,null,r.a.createElement(c.a,{path:"/collection"},r.a.createElement(ke,null)),r.a.createElement(c.a,{path:"/gacha"},r.a.createElement(he,null)),r.a.createElement(c.a,{path:"/",exact:!0},r.a.createElement(de,null))))}var Ae=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Re(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ce,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");Ae?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Re(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Re(t,e)}))}}()},68:function(e,t){var a={EventEmitter:function(){}};a.EventEmitter.prototype.events_=null,a.EventEmitter.prototype.addListener=function(e,t){if("function"!==typeof t)throw new TypeError("Listener must be a function");return this.events_||(this.events_={}),this.emit("newListener",e,t),this.events_[e]||(this.events_[e]=[]),this.events_[e].push(t),this},a.EventEmitter.prototype.listeners=function(e){return this.events_&&this.events_[e]},a.EventEmitter.prototype.emit=function(e){var t=this.listeners(e);if(t){for(var a=Array.prototype.slice.call(arguments,1),n=0;n<t.length;n++)t[n]&&t[n].apply(this,a);return!0}return!1},a.EventEmitter.prototype.on=a.EventEmitter.prototype.addListener,a.EventEmitter.prototype.once=function(e,t){var a=this;a.on(e,(function n(){a.removeListener(e,n),t.apply(this,arguments)}))},a.EventEmitter.prototype.removeAllListeners=function(e){return this.events_?(e?delete this.events_[e]:delete this.events_,this):this},a.EventEmitter.prototype.removeListener=function(e,t){if("function"!==typeof t)throw new TypeError("Listener must be a function");if(!this.events_)return this;var a=this.listeners(e);if(Array.isArray(a)){var n=a.indexOf(t);if(n<0)return this;a.splice(n,1)}return this},a.EventEmitter.prototype.setMaxListeners=function(){throw new Error("Not implemented")},a.Canvas={},a.Canvas.loadImage=function(e,t,a,n,r,i,o){var l=this,c=new window.Image;c.crossOrigin="*",c.onload=function(){var t=e.getContext("2d");e.width=r,e.height=i,t.drawImage(c,a,n,r,i),o&&o.call(l),c=null},c.src=t},a.DisjointSet=function(e){if(void 0===e)throw new Error("DisjointSet length not specified.");this.length=e,this.parent=new Uint32Array(e);for(var t=0;t<e;t++)this.parent[t]=t},a.DisjointSet.prototype.length=null,a.DisjointSet.prototype.parent=null,a.DisjointSet.prototype.find=function(e){return this.parent[e]===e?e:this.parent[e]=this.find(this.parent[e])},a.DisjointSet.prototype.union=function(e,t){var a=this.find(e),n=this.find(t);this.parent[a]=n},a.Image={},a.Image.blur=function(e,t,a,n){if((n=Math.abs(n))<=1)throw new Error("Diameter should be greater than 1.");for(var r=n/2,i=Math.ceil(n)+(1-Math.ceil(n)%2),o=new Float32Array(i),l=(r+.5)/3,c=l*l,s=1/Math.sqrt(2*Math.PI*c),u=-1/(2*l*l),m=0,f=Math.floor(i/2),h=0;h<i;h++){var d=h-f,v=s*Math.exp(d*d*u);o[h]=v,m+=v}for(var p=0;p<o.length;p++)o[p]/=m;return this.separableConvolve(e,t,a,o,o,!1)},a.Image.computeIntegralImage=function(e,t,n,r,i,o,l){if(arguments.length<4)throw new Error("You should specify at least one output array in the order: sum, square, tilted, sobel.");var c;l&&(c=a.Image.sobel(e,t,n));for(var s=0;s<n;s++)for(var u=0;u<t;u++){var m=s*t*4+4*u,f=~~(.299*e[m]+.587*e[m+1]+.114*e[m+2]);if(r&&this.computePixelValueSAT_(r,t,s,u,f),i&&this.computePixelValueSAT_(i,t,s,u,f*f),o){var h=m-4*t,d=~~(.299*e[h]+.587*e[h+1]+.114*e[h+2]);this.computePixelValueRSAT_(o,t,s,u,f,d||0)}l&&this.computePixelValueSAT_(l,t,s,u,c[m])}},a.Image.computePixelValueRSAT_=function(e,t,a,n,r,i){var o=a*t+n;e[o]=(e[o-t-1]||0)+(e[o-t+1]||0)-(e[o-t-t]||0)+r+i},a.Image.computePixelValueSAT_=function(e,t,a,n,r){var i=a*t+n;e[i]=(e[i-t]||0)+(e[i-1]||0)+r-(e[i-t-1]||0)},a.Image.grayscale=function(e,t,a,n){for(var r=new Uint8ClampedArray(n?e.length:e.length>>2),i=0,o=0,l=0;l<a;l++)for(var c=0;c<t;c++){var s=.299*e[o]+.587*e[o+1]+.114*e[o+2];r[i++]=s,n&&(r[i++]=s,r[i++]=s,r[i++]=e[o+3]),o+=4}return r},a.Image.horizontalConvolve=function(e,t,a,n,r){for(var i=n.length,o=Math.floor(i/2),l=new Float32Array(t*a*4),c=r?1:0,s=0;s<a;s++)for(var u=0;u<t;u++){for(var m=s,f=u,h=4*(s*t+u),d=0,v=0,p=0,g=0,E=0;E<i;E++){var w=4*(m*t+Math.min(t-1,Math.max(0,f+E-o))),y=n[E];d+=e[w]*y,v+=e[w+1]*y,p+=e[w+2]*y,g+=e[w+3]*y}l[h]=d,l[h+1]=v,l[h+2]=p,l[h+3]=g+c*(255-g)}return l},a.Image.verticalConvolve=function(e,t,a,n,r){for(var i=n.length,o=Math.floor(i/2),l=new Float32Array(t*a*4),c=r?1:0,s=0;s<a;s++)for(var u=0;u<t;u++){for(var m=s,f=u,h=4*(s*t+u),d=0,v=0,p=0,g=0,E=0;E<i;E++){var w=4*(Math.min(a-1,Math.max(0,m+E-o))*t+f),y=n[E];d+=e[w]*y,v+=e[w+1]*y,p+=e[w+2]*y,g+=e[w+3]*y}l[h]=d,l[h+1]=v,l[h+2]=p,l[h+3]=g+c*(255-g)}return l},a.Image.separableConvolve=function(e,t,a,n,r,i){var o=this.verticalConvolve(e,t,a,r,i);return this.horizontalConvolve(o,t,a,n,i)},a.Image.sobel=function(e,t,a){e=this.grayscale(e,t,a,!0);for(var n=new Float32Array(t*a*4),r=new Float32Array([-1,0,1]),i=new Float32Array([1,2,1]),o=this.separableConvolve(e,t,a,r,i),l=this.separableConvolve(e,t,a,i,r),c=0;c<n.length;c+=4){var s=o[c],u=l[c],m=Math.sqrt(u*u+s*s);n[c]=m,n[c+1]=m,n[c+2]=m,n[c+3]=255}return n},a.ViolaJones={},a.ViolaJones.REGIONS_OVERLAP=.5,a.ViolaJones.classifiers={},a.ViolaJones.detect=function(e,t,n,r,i,o,l,c){var s,u=0,m=[],f=new Int32Array(t*n),h=new Int32Array(t*n),d=new Int32Array(t*n);l>0&&(s=new Int32Array(t*n)),a.Image.computeIntegralImage(e,t,n,f,h,d,s);for(var v=c[0],p=c[1],g=r*i,E=g*v|0,w=g*p|0;E<t&&w<n;){for(var y=g*o+.5|0,b=0;b<n-w;b+=y)for(var O=0;O<t-E;O+=y)l>0&&this.isTriviallyExcluded(l,s,b,O,t,E,w)||this.evalStages_(c,f,h,d,b,O,t,E,w,g)&&(m[u++]={width:E,height:w,x:O,y:b});E=(g*=i)*v|0,w=g*p|0}return this.mergeRectangles_(m)},a.ViolaJones.isTriviallyExcluded=function(e,t,a,n,r,i,o){var l=a*r+n,c=l+i,s=l+o*r,u=s+i;return(t[l]-t[c]-t[s]+t[u])/(i*o*255)<e},a.ViolaJones.evalStages_=function(e,t,a,n,r,i,o,l,c,s){var u=1/(l*c),m=r*o+i,f=m+l,h=m+c*o,d=h+l,v=(t[m]-t[f]-t[h]+t[d])*u,p=(a[m]-a[f]-a[h]+a[d])*u-v*v,g=1;p>0&&(g=Math.sqrt(p));for(var E=e.length,w=2;w<E;){for(var y=0,b=e[w++],O=e[w++];O--;){for(var x=0,S=e[w++],j=e[w++],I=0;I<j;I++){var M,k,C,A,R=i+e[w++]*s+.5|0,_=r+e[w++]*s+.5|0,F=e[w++]*s+.5|0,P=e[w++]*s+.5|0,N=e[w++];S?(k=R+(_-1)*o,C=R-P+(_+P-1)*o,A=R+F+(_+F-1)*o,x+=(n[M=R-P+F+(_+F+P-1)*o]+n[k]-n[C]-n[A])*N):(k=(M=_*o+R)+F,A=(C=M+P*o)+F,x+=(t[M]-t[k]-t[C]+t[A])*N)}var D=e[w++],B=e[w++],W=e[w++];y+=x*u<D*g?B:W}if(y<b)return!1}return!0},a.ViolaJones.mergeRectangles_=function(e){for(var t=new a.DisjointSet(e.length),n=0;n<e.length;n++)for(var r=e[n],i=0;i<e.length;i++){var o=e[i];if(a.Math.intersectRect(r.x,r.y,r.x+r.width,r.y+r.height,o.x,o.y,o.x+o.width,o.y+o.height)){var l=Math.max(r.x,o.x),c=Math.max(r.y,o.y),s=(l-Math.min(r.x+r.width,o.x+o.width))*(c-Math.min(r.y+r.height,o.y+o.height)),u=r.width*r.height,m=o.width*o.height;s/(u*(u/m))>=this.REGIONS_OVERLAP&&s/(m*(u/m))>=this.REGIONS_OVERLAP&&t.union(n,i)}}for(var f={},h=0;h<t.length;h++){var d=t.find(h);f[d]?(f[d].total++,f[d].width+=e[h].width,f[d].height+=e[h].height,f[d].x+=e[h].x,f[d].y+=e[h].y):f[d]={total:1,width:e[h].width,height:e[h].height,x:e[h].x,y:e[h].y}}var v=[];return Object.keys(f).forEach((function(e){var t=f[e];v.push({total:t.total,width:t.width/t.total+.5|0,height:t.height/t.total+.5|0,x:t.x/t.total+.5|0,y:t.y/t.total+.5|0})})),v},a.Brief={},a.Brief.N=512,a.Brief.randomImageOffsets_={},a.Brief.randomWindowOffsets_=null,a.Brief.getDescriptors=function(e,t,a){for(var n=new Int32Array((a.length>>1)*(this.N>>5)),r=0,i=this.getRandomOffsets_(t),o=0,l=0;l<a.length;l+=2)for(var c=t*a[l+1]+a[l],s=0,u=0,m=this.N;u<m;u++)e[i[s++]+c]<e[i[s++]+c]&&(r|=1<<(31&u)),u+1&31||(n[o++]=r,r=0);return n},a.Brief.match=function(e,t,n,r){for(var i=e.length>>1,o=n.length>>1,l=new Array(i),c=0;c<i;c++){for(var s=1/0,u=0,m=0;m<o;m++){for(var f=0,h=0,d=this.N>>5;h<d;h++)f+=a.Math.hammingWeight(t[c*d+h]^r[m*d+h]);f<s&&(s=f,u=m)}l[c]={index1:c,index2:u,keypoint1:[e[2*c],e[2*c+1]],keypoint2:[n[2*u],n[2*u+1]],confidence:1-s/this.N}}return l},a.Brief.reciprocalMatch=function(e,t,n,r){var i=[];if(0===e.length||0===n.length)return i;for(var o=a.Brief.match(e,t,n,r),l=a.Brief.match(n,r,e,t),c=0;c<o.length;c++)l[o[c].index2].index2===c&&i.push(o[c]);return i},a.Brief.getRandomOffsets_=function(e){if(!this.randomWindowOffsets_){for(var t=0,n=new Int32Array(4*this.N),r=0;r<this.N;r++)n[t++]=Math.round(a.Math.uniformRandom(-15,16)),n[t++]=Math.round(a.Math.uniformRandom(-15,16)),n[t++]=Math.round(a.Math.uniformRandom(-15,16)),n[t++]=Math.round(a.Math.uniformRandom(-15,16));this.randomWindowOffsets_=n}if(!this.randomImageOffsets_[e]){for(var i=0,o=new Int32Array(2*this.N),l=0;l<this.N;l++)o[i++]=this.randomWindowOffsets_[4*l]*e+this.randomWindowOffsets_[4*l+1],o[i++]=this.randomWindowOffsets_[4*l+2]*e+this.randomWindowOffsets_[4*l+3];this.randomImageOffsets_[e]=o}return this.randomImageOffsets_[e]},a.Fast={},a.Fast.THRESHOLD=40,a.Fast.circles_={},a.Fast.findCorners=function(e,t,a,n){var r=this.getCircleOffsets_(t),i=new Int32Array(16),o=[];void 0===n&&(n=this.THRESHOLD);for(var l=3;l<a-3;l++)for(var c=3;c<t-3;c++){for(var s=l*t+c,u=e[s],m=0;m<16;m++)i[m]=e[s+r[m]];this.isCorner(u,i,n)&&(o.push(c,l),c+=3)}return o},a.Fast.isBrighter=function(e,t,a){return e-t>a},a.Fast.isCorner=function(e,t,a){if(this.isTriviallyExcluded(t,e,a))return!1;for(var n=0;n<16;n++){for(var r=!0,i=!0,o=0;o<9;o++){var l=t[n+o&15];if(!this.isBrighter(e,l,a)&&(i=!1,!1===r))break;if(!this.isDarker(e,l,a)&&(r=!1,!1===i))break}if(i||r)return!0}return!1},a.Fast.isDarker=function(e,t,a){return t-e>a},a.Fast.isTriviallyExcluded=function(e,t,a){var n=0,r=e[8],i=e[12],o=e[4],l=e[0];return this.isBrighter(l,t,a)&&n++,this.isBrighter(o,t,a)&&n++,this.isBrighter(r,t,a)&&n++,this.isBrighter(i,t,a)&&n++,n<3&&(n=0,this.isDarker(l,t,a)&&n++,this.isDarker(o,t,a)&&n++,this.isDarker(r,t,a)&&n++,this.isDarker(i,t,a)&&n++,n<3)},a.Fast.getCircleOffsets_=function(e){if(this.circles_[e])return this.circles_[e];var t=new Int32Array(16);return t[0]=-e-e-e,t[1]=t[0]+1,t[2]=t[1]+e+1,t[3]=t[2]+e+1,t[4]=t[3]+e,t[5]=t[4]+e,t[6]=t[5]+e-1,t[7]=t[6]+e-1,t[8]=t[7]-1,t[9]=t[8]-1,t[10]=t[9]-e-1,t[11]=t[10]-e-1,t[12]=t[11]-e,t[13]=t[12]-e,t[14]=t[13]-e+1,t[15]=t[14]-e+1,this.circles_[e]=t,t},a.Math={},a.Math.distance=function(e,t,a,n){var r=a-e,i=n-t;return Math.sqrt(r*r+i*i)},a.Math.hammingWeight=function(e){return 16843009*((e=(858993459&(e-=e>>1&1431655765))+(e>>2&858993459))+(e>>4)&252645135)>>24},a.Math.uniformRandom=function(e,t){return e+Math.random()*(t-e)},a.Math.intersectRect=function(e,t,a,n,r,i,o,l){return!(r>a||o<e||i>n||l<t)},a.Matrix={},a.Matrix.forEach=function(e,t,a,n,r){r=r||1;for(var i=0;i<a;i+=r)for(var o=0;o<t;o+=r){var l=i*t*4+4*o;n.call(this,e[l],e[l+1],e[l+2],e[l+3],l,i,o)}},a.EPnP={},a.EPnP.solve=function(e,t,a){},a.Fast.THRESHOLD=20,a.Brief.randomWindowOffsets_=Int32Array.from([4,0,-7,-4,-2,5,4,7,2,-10,15,-11,6,-6,0,7,11,-9,-6,6,-5,14,9,-14,-9,-5,-6,-2,1,-1,13,-1,-2,-6,11,-10,-1,-11,-3,4,12,1,11,13,3,-13,7,8,3,14,-15,3,9,-2,10,-5,-1,3,10,7,13,-10,-8,1,-7,10,-11,8,-6,15,4,15,-4,6,14,-10,9,-5,0,11,-13,-7,-15,11,14,6,3,6,-3,-13,10,-3,-4,3,-8,12,-14,11,-14,1,-6,-2,3,14,10,14,4,13,10,15,2,5,1,1,9,-8,-10,13,-15,-9,-14,-7,9,7,-9,7,12,2,10,-14,7,0,-10,6,-15,-13,1,11,6,-8,8,-12,9,14,1,15,5,-10,2,3,9,8,-2,-4,13,-5,-8,0,-7,-3,13,-11,-7,10,13,-3,8,2,4,13,12,7,-6,4,15,1,-11,6,15,11,-5,-5,-1,-15,11,9,9,11,-5,-3,-7,-5,0,-8,1,-6,-4,-10,-5,1,0,15,15,-12,-11,-10,-6,12,10,-6,-8,0,6,-4,-7,-9,3,-9,-15,8,-7,-11,-2,7,-4,8,7,8,-3,5,4,-4,-9,4,5,-1,-7,-1,11,-5,-5,14,5,13,-14,13,6,-9,11,4,16,-7,-9,13,-15,-15,-2,10,-4,13,-11,15,11,6,10,-14,0,5,-12,1,-3,-10,0,3,10,-5,9,-9,10,1,-7,-13,-10,9,-5,-3,-4,-12,-13,-8,13,11,2,15,7,-9,-3,-5,0,13,12,2,-11,-8,-2,-9,14,-3,-11,8,-4,14,-4,12,4,-4,-13,5,3,2,4,-2,-6,-2,-5,14,3,-11,-1,2,-7,-6,-11,-7,11,3,-10,2,-11,14,8,-11,4,-2,4,3,1,-15,6,4,2,-4,0,0,4,-9,-8,11,3,-3,-11,-13,9,2,-8,3,15,15,0,7,-12,13,-4,5,10,-9,2,-2,-11,-5,-4,-5,-9,14,7,-2,-7,-2,10,-3,-1,2,-15,-13,14,8,-14,-10,-14,-14,5,13,-2,1,6,7,12,5,-2,-11,-7,-1,13,-9,10,16,-6,-12,4,-10,-8,-1,-13,16,6,8,-13,-4,13,1,-10,-6,13,-12,15,-5,-9,10,-3,4,7,2,-7,9,-1,7,-2,9,-5,2,11,1,12,-9,-5,-9,-5,9,-2,11,10,-11,-5,2,15,-9,-14,2,-15,-15,-6,14,-11,-3,-6,-6,-9,-9,-9,-13,12,-3,-14,-14,0,16,-12,6,0,-12,-12,15,-2,5,4,-1,-8,9,-5,-8,-6,-1,-12,15,-11,11,-9,9,-2,-15,-8,-5,-1,-12,4,-2,14,-10,8,-3,-13,3,-13,-5,15,2,14,9,-13,5,0,4,-8,4,7,5,3,-11,-3,2,6,0,-2,-11,1,13,-4,9,-2,-11,13,6,-2,-9,-2,1,14,4,15,12,12,3,8,15,-14,-6,16,-13,-10,-13,0,-13,-5,-2,-4,4,-2,14,-3,-4,5,14,9,0,14,12,9,14,7,-2,-12,12,-11,4,1,2,0,-9,-10,8,15,7,-10,10,13,-12,-6,10,2,15,3,15,5,0,-3,10,1,16,-2,-4,-3,13,13,2,8,-1,-5,15,5,1,3,11,-6,0,14,11,-2,-9,6,-5,11,10,-6,15,7,10,-9,-8,-10,-8,-15,-12,-9,6,-2,-14,8,5,4,-4,-4,14,-7,10,5,-14,-6,7,12,3,12,4,-3,-14,7,-8,-7,-1,3,4,-11,-12,10,12,-4,2,-15,-14,7,12,5,10,9,-14,-9,-12,-10,12,5,13,8,-13,2,-8,7,-8,5,-11,-1,5,4,-9,5,-12,-5,7,-2,8,0,10,16,-11,-4,-2,12,13,6,2,12,6,10,10,-6,-14,-4,-6,-7,-11,1,-12,-4,11,9,7,-1,6,-4,-11,3,-4,-5,-2,14,-14,-11,5,2,8,13,-11,13,6,-12,2,7,11,11,5,-4,7,-13,-9,10,0,-3,11,-8,-9,16,4,9,9,-14,9,-14,-1,-10,-7,-12,-6,12,3,-5,9,16,8,0,4,-6,12,13,15,14,9,9,-8,-13,1,12,-11,-2,10,9,-11,-9,4,13,15,-5,8,11,10,-10,-12,1,14,-9,2,-6,2,-9,12,-9,-4,-3,-6,-14,4,-11,-13,11,12,6,14,-12,15,-2,7,-15,1,4,-8,2,13,0,6,3,12,-4,-6,-8,7,14,0,-1,-3,-6,12,-2,-15,-4,-13,-11,8,-8,6,7,-2,-13,8,0,-5,-4,0,10,-13,10,5,16,-6,14,3,12,3,9,10,8,-1,0,-9,10,-6,9,11,6,13,3,9,15,9,-11,-2,6,7,-3,-13,16,4,-14,-7,-11,-11,6,9,-8,-15,-2,8,-7,3,15,3,5,-3,11,2,-15,8,10,-12,5,15,5,15,-1,3,-10,11,-5,7,-6,-5,-5,-7,-6,7,-6,14,13,-7,-2,-15,3,-13,-2,-8,-8,6,0,14,-15,12,-11,-1,1,-1,2,15,1,-11,4,-9,13,-6,12,5,8,-1,-8,-11,5,8,14,-4,5,3,-14,-1,-12,-11,-7,1,5,14,-8,3,-2,8,14,0,-7,-4,-4,12,0,10,1,-15,-14,10,-1,4,11,-12,-11,11,-4,8,-3,4,4,-10,10,-14,0,-12,15,-10,-8,4,-10,16,14,13,0,-4,-2,-9,-9,-1,2,16,11,8,-14,7,-7,8,-5,-5,5,5,-10,7,11,-5,8,-5,-11,0,-1,-11,10,6,8,-9,8,14,11,0,6,8,15,-3,-15,5,5,12,7,-13,-12,-1,0,16,5,-3,-7,0,10,8,-6,-2,8,-13,13,1,14,-5,1,2,-9,-13,3,-10,15,2,16,6,-8,15,-8,4,8,-5,-2,5,14,10,7,3,-6,-3,3,-13,-3,-14,1,-12,13,15,3,7,-9,4,-8,10,-13,-3,-3,-1,-6,-14,-11,-6,4,-11,12,-8,1,2,10,1,-2,-8,2,-13,14,1,4,0,8,15,-1,4,0,-7,-3,16,8,0,9,0,-4,-2,-2,7,4,-9,15,-7,14,2,-8,7,-13,-6,1,12,-8,-7,3,-2,13,-14,10,-14,2,-13,-1,-4,9,-3,15,-11,-6,10,-4,-14,-4,6,-3,-11,-9,-1,-7,3,-3,3,0,12,6,5,-10,10,-14,-12,-4,8,-7,11,5,15,14,-4,4,-5,-11,-7,1,-6,-13,-7,-12,10,13,-13,14,7,-13,-8,11,5,12,-6,-11,-13,-12,-5,12,13,-5,-5,-11,-2,6,8,-1,-10,6,6,14,3,5,3,-14,-12,1,-12,14,13,-4,10,7,13,-15,-8,-7,-14,8,12,-2,-15,10,12,-9,1,0,2,12,8,4,-10,-13,-12,-4,-9,16,-6,-4,-8,6,-6,-9,-10,2,1,6,3,-8,-6,1,6,13,16,-15,15,14,0,10,-5,16,11,-2,15,2,1,7,-6,-8,12,9,12,9,-9,-4,-11,-13,-14,3,1,-3,-11,13,-8,0,3,12,-4,6,15,1,-12,-4,14,-2,11,3,4,1,7,1,2,14,-5,-8,0,-3,-8,-4,-14,11,-12,-14,2,5,15,1,11,2,9,-15,9,4,6,-3,-5,-10,-9,-8,11,13,8,16,3,9,15,9,-1,-12,-2,-7,-10,-6,-7,15,-13,-13,6,6,11,14,-15,14,15,6,0,-7,-9,6,-5,-11,-12,-4,-11,-9,-1,-9,-14,16,16,3,-4,11,10,-3,13,-13,0,8,0,-6,13,-5,14,3,-10,-3,11,-9,8,-12,-8,12,5,-12,-13,5,-14,-8,-5,-12,-6,-12,0,1,-9,-5,7,2,11,-3,-6,7,0,9,-7,12,3,-7,15,4,1,-10,9,-12,-10,2,16,0,15,-14,-6,14,-3,-7,-8,4,-7,-6,-10,-1,-2,-10,13,14,0,-3,11,-6,-14,-11,6,7,-3,14,-15,7,-6,6,-8,-8,11,-1,10,-5,-14,16,-11,-6,-15,15,-14,-12,4,11,-9,-3,-3,-3,14,16,-15,13,13,10,5,14,6,-4,5,11,1,-15,8,4,0,-12,-3,4,12,14,3,-7,-4,1,14,13,-9,2,16,12,1,5,-4,3,13,-2,12,-11,-2,5,13,-3,2,14,-3,-3,0,0,-1,-9,2,-13,-3,-5,6,-6,15,12,2,-13,1,-6,-10,5,3,9,-14,-13,-5,-3,6,1,-8,12,-2,13,12,-13,-13,6,-11,5,-3,4,2,5,-13,-12,-8,-8,-7,-10,-3,-12,15,-8,2,14,-13,7,-4,10,-1,8,-10,1,4,16,11,8,13,7,-12,8,-11,7,-15,-3,-5,3,-6,-6,4,6,6,13,3,-8,3,2,-6,2,-3,5,-12,3,-2,4,8,-10,-8,-3,-1,-4,-8,6,-6,2,4,3,-9,5,12,-9,-1,2,13,-11,9,7,-8,5,12,-2,7,-2,3,-14,-2,-14,5,-12,-10,7,-8,-10,-6,13,12,-10,5,10,-9,-12,3,10,-6,-6,5,-5,-6,-9,1,-8,-15,1,-13,-3,6,10,3,1,15,-9,3,-4,16,13,-2,-12,13,-6,11,2,-4,10,-5,-2,-15,3,-11,-13,5,-5,16,-3,10,15,9,5,9,8,0,-3,3,5,14,0,8,15,10,9,11,6,-14,-10,3,-3,10,-2,-14,-14,-5,12,0,3,4,-3,2,-12,-7,12,-12,-2,-1,-11,6,3,9,9,-8,-11,14,-6,15,3,-7,2,-7,-10,11,-5,13,8,5,2,15,-5,-11,7,-8,-7,0,-1,-4,5,-7,1,14,1,11,12,7,4,0,-13,-10,-8,3,10,10,-13,-7,-15,-6,13,-1,-6,1,-2,12,-3,14,15,-10,5,9,-3,12,10,-1,0,14,6,-6,11,7,9,-11,-3,-13,11,-5,0,-7,-6,-9,-8,-1,-4,-14,-9,-2,16,14,-15,14,4,0,11,-13,12,2,6,14,0,3,12,13,12,-6,-10,-12,-3,0,10,-12,-12,-13,-10,-12,-10,-2,5,-6,-4,-11,-15,-14,-6,2,-10,12,1,15,16,-6,6,2,11,5,0,9,-4,16,-15,8,13,11,10,-1,14,11,-7,13,0,11,8,-4,-9,-14,14,-14,5,16,-15,11,-3,8,10,-14,9,-14,10,-14,10,6,-9,10,8,7,-9,-9,15,-14,0,14,8,-9,5,13,0,0,-7,0,-11,2,9,-8,7,-9,-7,13,-12,10,4,14,7,7,12,-15,16,-4,-14,-12,8,5,8,-4,12,1,2,-13,3,-4,-2,-5]),a.Brief.setRandomWindowOffsets=function(e){this.randomImageOffsets_={},this.randomWindowOffsets_=Int32Array.from(e)},a.Brief.generateRandomWindowOffsets=function(){for(var e=0,t=new Int32Array(4*this.N),n=0;n<this.N;n++)t[e++]=Math.round(a.Math.uniformRandom(-15,16)),t[e++]=Math.round(a.Math.uniformRandom(-15,16)),t[e++]=Math.round(a.Math.uniformRandom(-15,16)),t[e++]=Math.round(a.Math.uniformRandom(-15,16));return t},e.exports=a},92:function(e,t,a){e.exports=function(){return new Worker(a.p+"6b51f71c40d54e09dcb6.worker.js")}}},[[128,1,2]]]);
//# sourceMappingURL=main.71ad7a7d.chunk.js.map