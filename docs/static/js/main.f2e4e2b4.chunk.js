(this["webpackJsonpcalendar-app"]=this["webpackJsonpcalendar-app"]||[]).push([[0],{114:function(e,t,a){},116:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),l=a(8),s=a(21),i=a(64),u=a(4),m="[ui] Open modal",d="[ui] Close modal",p="[event] Set Active",f="[event] Add new",v="[event] Clear active event",b="[event] Event updated",g="[event] Event deleted",E="[event] Events loading",h="[event] Events clear logout",O="[auth] Checking Login finish",j="[auth] Start Login",y="[auth] Start Register",w="[auth] Logout",N={modalOpen:!1},x=a(54),k={events:[],activeEvent:null},S={checking:!0},C=Object(s.c)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(u.a)(Object(u.a)({},e),{},{modalOpen:!0});case d:return Object(u.a)(Object(u.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(u.a)(Object(u.a)({},e),{},{activeEvent:t.payload});case f:return Object(u.a)(Object(u.a)({},e),{},{events:[].concat(Object(x.a)(e.events),[t.payload])});case v:return Object(u.a)(Object(u.a)({},e),{},{activeEvent:null});case b:return Object(u.a)(Object(u.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case g:return Object(u.a)(Object(u.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case E:return Object(u.a)(Object(u.a)({},e),{},{events:Object(x.a)(t.payload)});case h:return Object(u.a)(Object(u.a)({},e),{},{events:[],activeEvent:null});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:case y:return Object(u.a)(Object(u.a)({},e),{},{checking:!1},t.payload);case O:return Object(u.a)(Object(u.a)({},e),{},{checking:!1});case w:return Object(u.a)(Object(u.a)({},S),{},{checking:!1});default:return e}}}),R="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,T=Object(s.e)(C,R(Object(s.a)(i.a))),D=a(35),A=a(9),P=a(11),I=a.n(P),_=a(20),L=a(12),G=a.n(L),q="https://ocumochino-app.herokuapp.com/api/",H=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n="".concat(q,"/").concat(e);return"GET"===a?fetch(n):fetch(n,{method:a,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},V=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n="".concat(q,"/").concat(e),r=localStorage.getItem("token")||"";return"GET"===a?fetch(n,{method:a,headers:{"x-token":r}}):fetch(n,{method:a,headers:{"Content-type":"application/json","x-token":r},body:JSON.stringify(t)})},B=a(16),J=a.n(B),M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{end:J()(e.end).toDate(),start:J()(e.start).toDate()})}))},F=function(e){return{type:f,payload:e}},U=function(){return{type:v}},X=function(e){return{type:b,payload:e}},z=function(){return{type:g}},K=function(e){return{type:E,payload:e}},Q=function(e){return{type:j,payload:e}},W=function(){return function(e){localStorage.clear(),e(Y()),e({type:h})}},Y=function(){return{type:w}},Z=function(e){return{type:j,payload:e}},$=function(){return{type:O}},ee=a(14),te=a(24),ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),a=Object(ee.a)(t,2),r=a[0],c=a[1],o=function(e){var t=e.target;c(Object(u.a)(Object(u.a)({},r),{},Object(te.a)({},t.name,t.value)))};return[r,o]},ne=(a(77),function(){var e=Object(l.b)(),t=ae({loginEmail:"",loginPassword:""}),a=Object(ee.a)(t,2),n=a[0],c=a[1],o=ae({Registername:"",RegisterEmail:"",RegisterPassword1:"",RegisterPassword2:""}),s=Object(ee.a)(o,2),i=s[0],u=s[1],m=i.Registername,d=i.RegisterEmail,p=i.RegisterPassword1,f=i.RegisterPassword2,v=n.loginEmail,b=n.loginPassword;return r.a.createElement("div",{className:"container login-container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 login-form-1"},r.a.createElement("h3",null,"Ingreso"),r.a.createElement("form",{onSubmit:function(t){var a,n;t.preventDefault(),e((a=v,n=b,function(){var e=Object(_.a)(I.a.mark((function e(t){var r,c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H("auth",{email:a,password:n},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(c=e.sent).ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(Q({uid:c.uid,name:c.name}))):G.a.fire("Error",c.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Correo",name:"loginEmail",value:v,onChange:c})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"loginPassword",value:b,onChange:c})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",className:"btnSubmit",value:"Login"})))),r.a.createElement("div",{className:"col-md-6 login-form-2"},r.a.createElement("h3",null,"Registro"),r.a.createElement("form",{onSubmit:function(t){if(t.preventDefault(),p!==f)return G.a.fire({icon:"error",title:"Oops",text:"Las contrase\xf1as no coinciden"});var a,n,r;e((a=m,n=d,r=p,function(){var e=Object(_.a)(I.a.mark((function e(t){var c,o;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H("auth/new",{name:a,email:n,password:r},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(o=e.sent).ok?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-time",(new Date).getTime()),t(Z({name:o.name,uid:o.uid})),G.a.fire({position:"top-end",icon:"success",title:"Registro exitoso",showConfirmButton:!1,timer:1500})):G.a.fire({icon:"error",title:"Algo anda mal",text:o.msg});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Nombre",name:"Registername",value:m,onChange:u})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Correo",name:"RegisterEmail",value:d,onChange:u})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"RegisterPassword1",value:p,onChange:u})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a",name:"RegisterPassword2",value:f,onChange:u})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"}))))))}),re=a(53),ce=function(){var e=Object(l.c)((function(e){return e.auth})).name,t=Object(l.b)();return r.a.createElement("div",{className:"navbar navbar-dark bg-dark mb-4"},r.a.createElement("span",{className:"navbar-brand"},"Hola ",e),r.a.createElement("button",{className:"btn btn-outline-danger",onClick:function(e){e.preventDefault(),t(W())}},r.a.createElement("i",{className:"fas fa-sign-out-alt"}),r.a.createElement("span",null," Salir")))},oe={allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}},le=function(e){var t=e.event,a=t.title,n=t.user;return r.a.createElement("div",null,r.a.createElement("strong",null," ",a," "),r.a.createElement("span",null,"- ",n.name," "))},se=a(48),ie=a.n(se),ue=a(49),me=a.n(ue),de=function(){return{type:m}},pe={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};ie.a.setAppElement("#root");var fe=J()().minutes(0).seconds(0).add(1,"hours"),ve=fe.clone().add(1,"hours"),be={title:"",notes:"",start:fe.toDate(),end:ve.toDate()},ge=function(){var e=Object(l.c)((function(e){return e.ui})).modalOpen,t=Object(l.c)((function(e){return e.calendar})).activeEvent,a=Object(l.b)(),c=Object(n.useState)(fe.toDate()),o=Object(ee.a)(c,2),s=o[0],i=o[1],m=Object(n.useState)(ve.toDate()),p=Object(ee.a)(m,2),f=p[0],v=p[1],b=Object(n.useState)(!0),g=Object(ee.a)(b,2),E=g[0],h=g[1],O=Object(n.useState)(be),j=Object(ee.a)(O,2),y=j[0],w=j[1],N=y.notes,x=y.title,k=y.start,S=y.end;Object(n.useEffect)((function(){w(t||be)}),[t,w]);var C=function(e){var t=e.target;w(Object(u.a)(Object(u.a)({},y),{},Object(te.a)({},t.name,t.value)))},R=function(){a({type:d}),a(U()),w(be)};return r.a.createElement(ie.a,{isOpen:e,onRequestClose:R,style:pe,closeTimeoutMS:200,className:"modal",overlayClassName:"modal-fondo"},r.a.createElement("h1",null," ",t?"Editar evento":"Nuevo evento"," "),r.a.createElement("hr",null),r.a.createElement("form",{className:"container",onSubmit:function(e){e.preventDefault();var n,r=J()(k),c=J()(S);return r.isSameOrAfter(c)?G.a.fire("Error","La fecha fin debe de ser mayor a la fecha de inicio","error"):x.trim().length<2?h(!1):(a(t?(n=y,function(){var e=Object(_.a)(I.a.mark((function e(t){var a,r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V("events/".concat(n.id),n,"PUT");case 3:return a=e.sent,e.next=6,a.json();case 6:r=e.sent,console.log(r),r.ok?(t(X(r.evento)),G.a.fire({icon:"succes",position:"top-end",title:"Tu nota a sido guardad"})):G.a.fire({icon:"error",title:"Algo anda mal",text:r.msg}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()):function(e){return function(){var t=Object(_.a)(I.a.mark((function t(a,n){var r,c,o,l,s;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().auth,c=r.uid,o=r.name,t.prev=1,t.next=4,V("events",e,"POST");case 4:return l=t.sent,t.next=7,l.json();case 7:(s=t.sent).ok&&(e.id=s.evento.id,e.user={_id:c,name:o},console.log(e),a(F(e)),G.a.fire({position:"top-end",icon:"success",title:"Tarea guardada",showConfirmButton:!1,timer:1500})),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),G.a.fire({icon:"error",title:"Algo ha fallado",text:t.t0});case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,a){return t.apply(this,arguments)}}()}(y)),h(!0),void R())}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Fecha y hora inicio"),r.a.createElement(me.a,{onChange:function(e){i(e),w(Object(u.a)(Object(u.a)({},y),{},{start:e}))},value:s,className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Fecha y hora fin"),r.a.createElement(me.a,{onChange:function(e){v(e),w(Object(u.a)(Object(u.a)({},y),{},{end:e}))},value:f,minDate:s,className:"form-control"})),r.a.createElement("hr",null),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Titulo y notas"),r.a.createElement("input",{type:"text",className:"form-control ".concat(!E&&"is-invalid"," "),placeholder:"T\xedtulo del evento",name:"title",autoComplete:"off",value:x,onChange:C}),r.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"Una descripci\xf3n corta")),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",name:"notes",value:N,onChange:C}),r.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"Informaci\xf3n adicional")),r.a.createElement("button",{type:"submit",className:"btn btn-outline-primary btn-block"},r.a.createElement("i",{className:"far fa-save"}),r.a.createElement("span",null," Guardar"))))},Ee=(a(111),a(112),function(){var e=Object(l.b)();return r.a.createElement("button",{className:"btn btn-primary fab",onClick:function(){e(de())}},r.a.createElement("i",{className:"fas fa-plus"}))}),he=function(){var e=Object(l.b)();return r.a.createElement("button",{className:"btn btn-danger fab-danger",onClick:function(){var t;e(function(){var e=Object(_.a)(I.a.mark((function e(a,n){var r,c,o;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n().calendar.activeEvent.id,e.prev=1,e.next=4,V("events/".concat(r),t,"DELETE");case 4:return c=e.sent,e.next=7,c.json();case 7:(o=e.sent).ok?(a(z(t)),G.a.fire({icon:"success",title:"Tarea borrada con exito"})):G.a.fire({icon:"error",text:o.msg}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,a){return e.apply(this,arguments)}}())}},r.a.createElement("i",{className:"fas fa-trash"}),r.a.createElement("span",null," Borrar evento "))};J.a.locale("es");var Oe=Object(re.b)(J.a),je=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.calendar})),a=t.events,c=t.activeEvent,o=Object(l.c)((function(e){return e.auth})).uid,s=Object(n.useState)(localStorage.getItem("lastView")||"month"),i=Object(ee.a)(s,2),u=i[0],m=i[1];Object(n.useEffect)((function(){e(function(){var e=Object(_.a)(I.a.mark((function e(t){var a,n,r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V("events");case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,r=M(n.eventos),t(K(r)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);return r.a.createElement("div",{className:"calendar-screen"},r.a.createElement(ce,null),r.a.createElement(re.a,{localizer:Oe,events:a,startAccessor:"start",endAccessor:"end",messages:oe,eventPropGetter:function(e,t,a,n){return{style:{backgroundColor:o===e.user._id?"blue":"red",borderRadius:"0px",opacity:.8,display:"block",color:"white"}}},onDoubleClickEvent:function(t){e(de())},onSelectEvent:function(t){e({type:p,payload:t})},onView:function(e){m(e),localStorage.setItem("lastView",e)},onSelectSlot:function(t){e(U())},selectable:!0,view:u,components:{event:le}}),r.a.createElement(Ee,null),c&&r.a.createElement(he,null),r.a.createElement(ge,null))},ye=a(39),we=a(1),Ne=a.n(we),xe=function(e){var t=e.isAuthenticated,a=e.component,n=Object(ye.a)(e,["isAuthenticated","component"]);return r.a.createElement(A.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(a,e):r.a.createElement(A.a,{to:"/login"})}}))};xe.protoTypes={isAuthenticated:Ne.a.bool.isRequired,Component:Ne.a.func.isRequired};var ke=function(e){var t=e.isAuthenticated,a=e.component,n=Object(ye.a)(e,["isAuthenticated","component"]);return r.a.createElement(A.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(A.a,{to:"/"}):r.a.createElement(a,e)}}))};ke.protoTypes={isAuthenticathed:Ne.a.bool.isRequired,Componet:Ne.a.func.isRequired};var Se=function(){var e=Object(l.c)((function(e){return e.auth})).uid,t=Object(l.b)();return Object(n.useEffect)((function(){t(function(){var e=Object(_.a)(I.a.mark((function e(t){var a,n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V("auth/renew");case 2:return a=e.sent,e.next=5,a.json();case 5:(n=e.sent).ok?(localStorage.setItem("token",n.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(Q({uid:n.uid,name:n.name}))):t($());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[t]),r.a.createElement(D.a,null,r.a.createElement("div",null,r.a.createElement(A.d,null,r.a.createElement(xe,{exact:!0,path:"/",component:je,isAuthenticated:!!e}),r.a.createElement(ke,{exact:!0,path:"/login",component:ne,isAuthenticated:!!e}),r.a.createElement(A.a,{to:"/"}))))},Ce=function(){return r.a.createElement(l.a,{store:T},r.a.createElement(Se,null))};a(114);o.a.render(r.a.createElement(Ce,null),document.getElementById("root"))},67:function(e,t,a){e.exports=a(116)},77:function(e,t,a){}},[[67,1,2]]]);
//# sourceMappingURL=main.f2e4e2b4.chunk.js.map