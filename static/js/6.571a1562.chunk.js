(this["webpackJsonpit-kamasutra-js"]=this["webpackJsonpit-kamasutra-js"]||[]).push([[6],{209:function(e,t,a){"use strict";var s=a(1),r=a.n(s),n=a(15),c=a(23),l=a(216),i=a.n(l);const m=e=>({globalError:Object(c.c)(e).globalError});t.a=e=>Object(n.b)(m,{setGlobalError:c.d})(t=>{let{globalError:a,setGlobalError:s,...n}=t;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{isOpen:!!a,onRequestClose:()=>s(null)},r.a.createElement("h1",{style:{color:"red"}},a)),r.a.createElement(e,n))})},210:function(e,t,a){"use strict";a.d(t,"d",(function(){return s})),a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return c}));const s=e=>(null===e||void 0===e?void 0:e.length)?null:"Field is required",r=e=>e&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)?"Email Field is invalid":null,n=e=>t=>t.length<=e?null:"Field has exceeded ".concat(e," characters"),c=e=>t=>t.length>=e?null:"Field should have at least ".concat(e," characters")},212:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return o}));var s=a(1),r=a.n(s),n=a(213),c=a.n(n),l=a(8);var i=e=>{const t=t=>{let{input:a,meta:{touched:s,error:n},...l}=t,i=c.a.field;return s&&n&&(i+=" ".concat(c.a.error)),r.a.createElement("div",null,r.a.createElement(e,Object.assign({className:i},a,l)),s&&n&&r.a.createElement("div",{className:c.a.errorMsg},n))};return t.displayName="WithFormFieldWrapper(".concat(Object(l.c)(e),")"),t};const m=i(e=>r.a.createElement("input",e)),o=i(e=>r.a.createElement("textarea",e))},213:function(e,t,a){e.exports={field:"withFormField_field__s2rEd",error:"withFormField_error__1k8i1",errorMsg:"withFormField_errorMsg__3Jv8t"}},215:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var s=a(1),r=a.n(s),n=a(15),c=a(204),l=a(8),i=a(24),m=a(11);const o=e=>({authorizedUserId:Object(m.f)(e),isFetchingLogout:Object(m.e)(e).isFetchingLogout}),u=e=>{const t=t=>t.authorizedUserId?t.isFetchingLogout?r.a.createElement(i.a,null):r.a.createElement(e,t):r.a.createElement(c.a,{to:"/login"});return t.displayName="WithAuthWrapper(".concat(Object(l.c)(e),")"),Object(n.b)(o)(t)}},226:function(e,t,a){e.exports={messageContainer:"ChatMessages_messageContainer__VSmYW",messageItem:"ChatMessages_messageItem__2QIAe",myMessages:"ChatMessages_myMessages__3nxWD",chatMessagesForm:"ChatMessages_chatMessagesForm__3M5Or",strangerMessages:"ChatMessages_strangerMessages__2CnA9"}},245:function(e,t,a){e.exports={messagesContainer:"Messages_messagesContainer__3T7yW"}},290:function(e,t,a){e.exports={userChatList:"UserChatList_userChatList__3mOCT",chatItem:"UserChatList_chatItem__1itTd",active:"UserChatList_active__j923B"}},311:function(e,t,a){"use strict";a.r(t);var s=a(1),r=a.n(s),n=a(245),c=a.n(n),l=a(226),i=a.n(l),m=a(15),o=a(55),u=a(100),d=a(99),g=a(212),h=a(210),b=a(28);const E=Object(h.b)(30);let _=e=>{let{handleSubmit:t,pristine:a,invalid:s}=e;return r.a.createElement("form",{onSubmit:t,className:i.a.chatMessagesForm},r.a.createElement("div",null,r.a.createElement(u.a,{name:"message",type:"text",validate:[h.d,E],component:g.b})),r.a.createElement("div",null,r.a.createElement("button",{disabled:a||s},"Add Message")))};_=Object(d.a)({form:b.a})(_);var v=_;const p=e=>{let{from:t,message:a}=e;return r.a.createElement("div",{className:i.a.messageItem},r.a.createElement("img",{src:"https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_640.jpg"}),a,r.a.createElement("div",null,t))},f=Object(s.memo)(e=>{let{myMessages:t,strangerMessages:a,addMessage:n}=e;const c=Object(s.useCallback)(e=>e.map(e=>{let{message:t,id:a,from:s}=e;return r.a.createElement(p,{key:a,from:s,message:t})}),[]);return r.a.createElement("div",{className:i.a.messages},r.a.createElement("div",{className:i.a.messageContainer},r.a.createElement("div",{className:i.a.strangerMessages},c(a)),r.a.createElement("div",{className:i.a.myMessages},c(t))),r.a.createElement(v,{onSubmit:e=>{n(e.message)}}))}),M={addMessage:o.a};var j=Object(m.b)(e=>({myMessages:Object(o.d)(e),strangerMessages:Object(o.e)(e)}),M)(f),C=a(290),O=a.n(C),F=a(206);const N=e=>{let{text:t,id:a}=e;const s="/chats/".concat(a);return r.a.createElement("div",{className:O.a.chatItem},r.a.createElement(F.a,{to:s,activeClassName:O.a.active},t))},y=Object(s.memo)(e=>{let{chats:t}=e;return r.a.createElement("div",{className:O.a.userChatList},t.map(e=>{let{text:t,id:a}=e;return r.a.createElement(N,{id:a,text:t,key:a})}))});var x=Object(m.b)(e=>({chats:Object(o.c)(e).chats}))(y),I=a(215),L=a(10),k=a(209);t.default=Object(L.d)(I.a,k.a)(e=>{let{}=e;return r.a.createElement("div",null,r.a.createElement("div",{className:c.a.messagesContainer},r.a.createElement(x,null),r.a.createElement(j,null)))})}}]);
//# sourceMappingURL=6.571a1562.chunk.js.map