(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{135:function(e,t,a){},136:function(e,t,a){},145:function(e,t,a){},148:function(e,t,a){},149:function(e,t,a){},150:function(e,t,a){},237:function(e,t,a){},238:function(e,t,a){"use strict";a.r(t);var n,c=a(0),s=a.n(c),r=a(34),i=a.n(r),l=(a(135),a(117)),o=a(288),j=a(46),u=a(11),b=a(284);!function(e){e.home="\u0433\u043e\u043b\u043e\u0432\u043d\u0430",e.courses="\u043a\u0443\u0440\u0441\u0438"}(n||(n={}));a(136);var d=a(6),h=a(1),m=s.a.createContext({user:null,setUser:function(){}}),x=function(e){var t=e.children,a=Object(c.useState)(null),n=Object(d.a)(a,2),s=n[0],r=n[1];return Object(c.useEffect)((function(){var e=localStorage.getItem("user");if(null!==e){var t=JSON.parse(e);r(t)}}),[]),Object(h.jsx)(m.Provider,{value:{user:s,setUser:r},children:t})},O=function(){var e=Object.keys(n),t=Object.values(n),a=Object(c.useContext)(m),s=a.user,r=a.setUser;return Object(h.jsxs)("section",{className:"header",children:[Object(h.jsx)(j.b,{to:"/",children:Object(h.jsx)("img",{src:"icons/logo.svg",alt:"logo",className:"logo"})}),Object(h.jsx)("div",{className:"header__links",children:e.map((function(e,a){return Object(h.jsx)(j.b,{to:e,className:"header__link",children:t[a]},e)}))}),s?Object(h.jsx)(b.a,{variant:"contained",color:"primary",className:"button",sx:{height:"75%",display:"flex",alignSelf:"center",backgroundColor:"#F48C06"},onClick:function(){localStorage.removeItem("user"),r(null)},children:"\u0412\u0438\u0439\u0442\u0438"}):Object(h.jsx)(b.a,{variant:"contained",color:"primary",className:"button",sx:{height:"75%",display:"flex",alignSelf:"center",backgroundColor:"#F48C06",padding:"0"},children:Object(h.jsx)(j.b,{to:"auth",className:"header__link-join",children:"\u0423\u0432\u0456\u0439\u0442\u0438"})})]})},p=(a(145),function(){return Object(h.jsxs)("div",{className:"app",children:[Object(h.jsx)(O,{}),Object(h.jsx)(u.b,{})]})}),f=a(289),v=a(89),g=a(47),N=(a(146),a(147),a(148),function(){return Object(h.jsx)("section",{className:"about-us",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"about-us__content",children:[Object(h.jsxs)("div",{className:"about-us__block",children:[Object(h.jsx)(f.a,{variant:"h4",children:"\u041d\u0430\u0448\u0456 \u0434\u043e\u0441\u044f\u0433\u043d\u0435\u043d\u043d\u044f"}),Object(h.jsx)("div",{className:"about-us__analitics",children:[["\u0421\u0442\u0443\u0434\u0435\u043d\u0442\u0456\u0432","15\u041a+"],["\u041f\u043e\u0437\u0438\u0442\u0438\u0432\u043d\u0438\u0445 \u0432\u0456\u0434\u0433\u0443\u043a\u0456\u0432","87%"],["\u041a\u0443\u0440\u0441\u0456\u0432","35"],["\u041c\u0435\u043d\u0442\u043e\u0440\u0456\u0432","25"],["\u0420\u043e\u043a\u0456\u0432 \u0434\u043e\u0441\u0432\u0456\u0434\u0443","16"]].map((function(e){return Object(h.jsxs)("div",{className:"about-us__analitic-item",children:[Object(h.jsx)("div",{className:"about-us__analitic-value",children:e[1]}),Object(h.jsx)(f.a,{variant:"h6",children:e[0]})]},e[0])}))})]}),Object(h.jsxs)("div",{className:"about-us__block",children:[Object(h.jsxs)("div",{className:"about-us__title",children:[Object(h.jsx)(f.a,{variant:"h4",sx:{color:"#2F327D",fontWeight:"500",display:"inline-block",marginRight:"10px"},children:"\u0429\u043e \u0442\u0430\u043a\u0435"}),Object(h.jsx)(f.a,{variant:"h4",sx:{color:"#49BBBD",fontWeight:"500",display:"inline-block"},children:"\u0415\u0412\u0420\u0418\u041a\u0410?"})]}),Object(h.jsxs)("div",{className:"about-us__what-is",children:[Object(h.jsxs)("p",{className:"about-us__text",children:["\u0415\u0412\u0420\u0418\u041a\u0410 \u2014 \u0446\u0435 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430, \u044f\u043a\u0430 \u0434\u043e\u0437\u0432\u043e\u043b\u044f\u0454 \u0432\u0438\u043a\u043b\u0430\u0434\u0430\u0447\u0430\u043c \u043f\u0440\u043e\u0432\u043e\u0434\u0438\u0442\u0438 \u0437\u0430\u043d\u044f\u0442\u0442\u044f \u043e\u043d\u043b\u0430\u0439\u043d, \u0437\u0430 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u043e\u044e \u044f\u043a\u0438\u0445 \u0432\u043e\u043d\u0438 \u043c\u043e\u0436\u0443\u0442\u044c \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u0442\u0438 \u043c\u0430\u0442\u0435\u0440\u0456\u0430\u043b\u0438 \u043a\u0443\u0440\u0441\u0443 \u043e\u043d\u043b\u0430\u0439\u043d; \u043a\u0435\u0440\u0443\u0432\u0430\u0442\u0438 \u0437\u0430\u0432\u0434\u0430\u043d\u043d\u044f\u043c\u0438, \u0442\u0435\u0441\u0442\u0430\u043c\u0438 \u0442\u0430 \u0456\u0441\u043f\u0438\u0442\u0430\u043c\u0438; \u0441\u0442\u0435\u0436\u0438\u0442\u0438 \u0437\u0430 \u0442\u0435\u0440\u043c\u0456\u043d\u0430\u043c\u0438; \u043e\u0446\u0456\u043d\u044e\u0432\u0430\u0442\u0438 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0438 \u0442\u0430 \u043d\u0430\u0434\u0430\u0432\u0430\u0442\u0438 \u0443\u0447\u043d\u044f\u043c \u0432\u0456\u0434\u0433\u0443\u043a\u0438 \u0432 \u043e\u0434\u043d\u043e\u043c\u0443 \u043c\u0456\u0441\u0446\u0456.",Object(h.jsx)("br",{}),"\u041a\u043b\u0430\u0441\u0438 \u043c\u0430\u044e\u0442\u044c \u0434\u0438\u043d\u0430\u043c\u0456\u0447\u043d\u0438\u0439 \u043d\u0430\u0431\u0456\u0440 \u043d\u0430\u0432\u0447\u0430\u043b\u044c\u043d\u0438\u0445 \u0456\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0456\u0432, \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u0438\u0445 \u0434\u043b\u044f \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f \u043f\u0456\u0434 \u0447\u0430\u0441 \u0443\u0440\u043e\u043a\u0443. \u041c\u0435\u043d\u0442\u043e\u0440\u0438 \u043c\u043e\u0436\u0443\u0442\u044c \u0440\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u0438 \u0437\u0430\u0432\u0434\u0430\u043d\u043d\u044f \u0432 \u0440\u0435\u0436\u0438\u043c\u0456 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0447\u0430\u0441\u0443, \u0449\u043e\u0431 \u0443\u0447\u043d\u0456 \u0457\u0445 \u0432\u0438\u043a\u043e\u043d\u0443\u0432\u0430\u043b\u0438 \u0442\u0430 \u043d\u0430\u0434\u0441\u0438\u043b\u0430\u043b\u0438."]}),Object(h.jsx)("div",{children:Object(h.jsx)(v.a,{slidesPerView:1,spaceBetween:30,loop:!0,navigation:!0,modules:[g.a],className:"mySwiper",children:["img/about-us-1.png","img/about-us-2.png","img/about-us-3.jpg"].map((function(e){return Object(h.jsx)(v.b,{children:Object(h.jsx)("img",{src:e,alt:"swiper img"})},e)}))})})]})]})]})})})}),_=(a(149),function(){return Object(h.jsx)("section",{className:"banner",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"banner__content",children:[Object(h.jsxs)("div",{className:"banner__info",children:[Object(h.jsx)(f.a,{variant:"h3",sx:{color:"#F48C06"},children:"\u041d\u0430\u0432\u0447\u0430\u0442\u0438\u0441\u044c \u041e\u041d\u041b\u0410\u0419\u041d \u043d\u0430\u0431\u0430\u0433\u0430\u0442\u043e \u043b\u0435\u0433\u0448\u0435!"}),Object(h.jsx)(f.a,{variant:"h6",sx:{marginLeft:"100px"},children:"\u0415\u0412\u0420\u0418\u041a\u0410 - \u0446\u0435 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430, \u044f\u043a\u0430 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454 \u0446\u0456\u043a\u0430\u0432\u0456 \u0456\u043d\u0442\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u0456 \u043c\u0435\u0442\u043e\u0434\u0438 \u0434\u043b\u044f \u043d\u0430\u0432\u0447\u0430\u043d\u043d\u044f \u0434\u0456\u0442\u0435\u0439"})]}),Object(h.jsx)("div",{className:"banner__img",children:Object(h.jsx)("img",{src:"img/banner-girl.png",alt:"banner img"})})]})})})}),y=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(_,{}),Object(h.jsx)(N,{})]})},k=a(16),S=a.n(k),C=a(23),w=a(283),B=a(282),U=a(285),D=a(60),F=a.n(D),I=(a(150),function(e){var t=e.setUser,a=Object(c.useState)(""),n=Object(d.a)(a,2),s=n[0],r=n[1],i=Object(c.useState)(""),l=Object(d.a)(i,2),o=l[0],j=l[1],u=F.a.isEmail(s),m=function(){var e=Object(C.a)(S.a.mark((function e(){var a,n,c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get("https://mate.academy/students-api/users?email=".concat(s));case 3:a=e.sent,n=a.data,(c=n[0])?(localStorage.setItem("user",JSON.stringify(c)),t(c),window.history.back()):j("\u041f\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435 \u0434\u0430\u043d\u0456 \u0430\u0431\u043e \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0439\u0442\u0435\u0441\u044c!"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),j("Something went wrong. Please try again later.");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"form",children:[Object(h.jsx)(B.a,{error:!u&&""!==s,label:"\u0415\u043b. \u043f\u043e\u0448\u0442\u0430",variant:"outlined",className:"text-field",value:s,required:!0,onChange:function(e){r(e.target.value.trim())}}),Object(h.jsx)(b.a,{variant:"contained",className:"button",color:"primary",disabled:!u,onClick:m,children:"\u0423\u0432\u0456\u0439\u0442\u0438"}),Object(h.jsx)(U.a,{open:""!==o,autoHideDuration:5e3,message:o,onClose:function(){return j("")},sx:{position:"relative",top:"20px"}})]})}),J=function(e){var t=e.setUser,a=Object(c.useState)(""),n=Object(d.a)(a,2),s=n[0],r=n[1],i=Object(c.useState)(""),l=Object(d.a)(i,2),o=l[0],j=l[1],u=Object(c.useState)(""),m=Object(d.a)(u,2),x=m[0],O=m[1],p=F.a.isEmail(o),f=F.a.isByteLength(s,{min:4}),v=function(){var e=Object(C.a)(S.a.mark((function e(){var a,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.post("https://mate.academy/students-api/users",{name:s,email:o});case 3:a=e.sent,n=a.data,localStorage.setItem("user",JSON.stringify(n)),t(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),O("Something went wrong. Please try again later.");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"form",children:[Object(h.jsx)(B.a,{label:"\u0406\u043c'\u044f",variant:"outlined",className:"text-field",value:s,required:!0,error:!f&&""!==s,onChange:function(e){r(e.target.value.trim())}}),Object(h.jsx)(B.a,{label:"\u0415\u043b. \u043f\u043e\u0448\u0442\u0430",variant:"outlined",className:"text-field",value:o,required:!0,error:!p&&""!==o,onChange:function(e){j(e.target.value.trim())}}),Object(h.jsx)(b.a,{variant:"contained",color:"primary",className:"button",disabled:!p||!f,onClick:v,children:"\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044c"}),Object(h.jsx)(U.a,{open:""!==x,autoHideDuration:5e3,message:x,onClose:function(){return O("")},sx:{position:"relative",top:"20px"}})]})},W=(a(237),function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),a=t[0],n=t[1],s=Object(c.useContext)(m).setUser;return Object(h.jsx)("section",{className:"auth-form",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"auth-form__content",children:[Object(h.jsx)("div",{className:"auth-form__img",children:Object(h.jsx)("img",{src:"img/auth_img.jpg",alt:"auth img"})}),Object(h.jsxs)("div",{className:"auth-form__main",children:[Object(h.jsx)(f.a,{variant:"h5",children:'\u0412\u0430\u0441 \u0432\u0456\u0442\u0430\u0454 \u0441\u0435\u0440\u0432\u0456\u0441 \u043f\u043e\u0437\u0430\u0448\u043a\u0456\u043b\u044c\u043d\u043e\u0457 \u043e\u0441\u0432\u0456\u0442\u0438 \u0434\u043b\u044f \u0434\u0456\u0442\u0435\u0439 "\u0415\u0432\u0440\u0438\u043a\u0430"!'}),Object(h.jsxs)("div",{className:"auth-form__control",children:[Object(h.jsx)(b.a,{variant:a?"outlined":"contained",sx:{height:"75%",display:"flex",alignSelf:"center"},color:"primary",className:"button",onClick:function(){return n(!1)},children:"\u0412\u0445\u0456\u0434"}),Object(h.jsx)(b.a,{variant:a?"contained":"outlined",sx:{height:"75%",display:"flex",alignSelf:"center"},color:"primary",className:"button",onClick:function(){return n(!0)},children:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044f"})]}),a?Object(h.jsx)(J,{setUser:s}):Object(h.jsx)(I,{setUser:s})]})]})})})}),E=Object(l.a)({palette:{primary:{main:"#49BBBD"},secondary:{main:"#49BBBD"}},typography:{fontFamily:'"Montserrat", "Helvetica", "Arial", sans-serif',fontSize:14,fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500}});i.a.render(Object(h.jsx)(o.a,{theme:E,children:Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(x,{children:Object(h.jsx)(j.a,{children:Object(h.jsx)(u.e,{children:Object(h.jsxs)(u.c,{path:"/",element:Object(h.jsx)(p,{}),children:[Object(h.jsx)(u.c,{path:"home",element:Object(h.jsx)(u.a,{to:"/",replace:!0})}),Object(h.jsx)(u.c,{index:!0,element:Object(h.jsx)(y,{})}),Object(h.jsx)(u.c,{path:"auth",element:Object(h.jsx)(W,{})})]})})})})})}),document.getElementById("root"))}},[[238,1,2]]]);
//# sourceMappingURL=main.cf22ab58.chunk.js.map