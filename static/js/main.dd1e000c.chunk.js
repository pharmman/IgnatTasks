(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],{17:function(e,n,t){e.exports={dark:"HW12_dark__23jhm","dark-text":"HW12_dark-text__F5Kjl",red:"HW12_red__Z0HGZ","red-text":"HW12_red-text__1C_05",some:"HW12_some__1lbMP","some-text":"HW12_some-text__YJnvk",pink:"HW12_pink__1XpMd",yellow:"HW12_yellow__2xHvK","pink-text":"HW12_pink-text__1r7wp","yellow-text":"HW12_yellow-text__IXRvg"}},20:function(e,n,t){e.exports={App:"App_App__1djBs"}},21:function(e,n,t){e.exports={range:"SuperRange_range__3S-Ek"}},26:function(e,n,t){e.exports={box:"SuperSelect_box__3HL0N"}},29:function(e,n,t){e.exports=t(40)},34:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(4),o=t.n(l),c=(t(34),t(20)),u=t.n(c),i=t(12),m=t(5),s=t(21),p=t.n(s),h=function(e){e.type;var n=e.onChange,t=e.onChangeRange,a=e.className,l=Object(m.a)(e,["type","onChange","onChangeRange","className"]),o="".concat(p.a.range," ").concat(a||"");return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"range",onChange:function(e){n&&n(e),t&&t(+e.currentTarget.value)},className:o},l)))},g=t(51),v=function(e){var n=e.onChangeRange,t=e.value;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{value:t,"aria-labelledby":"range-slider",style:{width:"200px"},onChange:function(e,t){n&&n(t)},valueLabelDisplay:"auto"}))};var E=function(){var e=Object(a.useState)(10),n=Object(i.a)(e,2),t=n[0],l=n[1],o=Object(a.useState)(100),c=Object(i.a)(o,2),u=c[0],m=c[1],s=function(e){Array.isArray(e)?(l(e[0]),m(e[1])):l(e)};return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 11",r.a.createElement("div",null,r.a.createElement("span",null,t),r.a.createElement(h,{value:t,onChangeRange:s})),r.a.createElement("div",null,r.a.createElement("span",null,t),r.a.createElement(v,{value:[t,u],onChangeRange:s}),r.a.createElement("span",null,u)),r.a.createElement("hr",null),r.a.createElement("hr",null))},d=t(17),_=t.n(d),f=t(11),b=t(14),w={theme:"some"},y=function(e){e.type,e.name;var n=e.options,t=(e.value,e.onChange,e.onChangeOption,Object(m.a)(e,["type","name","options","value","onChange","onChangeOption"]),n?n.map((function(e,n){})):[]);return r.a.createElement(r.a.Fragment,null,t)},C=["dark","red","some","pink","yellow"];var O=function(){var e=Object(f.c)((function(e){return e.theme.theme})),n=Object(f.b)();return r.a.createElement("div",{className:_.a[e]},r.a.createElement("hr",null),r.a.createElement("span",{className:_.a[e+"-text"]},"homeworks 12"),r.a.createElement(y,{value:e,options:C,onChangeOption:function(e){return n(function(e){return{type:"CHANGE_THEME",payload:{theme:e}}}(e))}}),r.a.createElement("hr",null))},k=t(26),x=t.n(k),j=function(e){var n=e.options,t=e.onChange,a=e.onChangeOption,l=Object(m.a)(e,["options","onChange","onChangeOption"]),o=n?n.map((function(e,n){return r.a.createElement("option",{key:n},e)})):[];return r.a.createElement("div",{className:x.a.box},r.a.createElement("select",Object.assign({onChange:function(e){a&&a(e.currentTarget.value),t&&t(e)}},l),o))},H=["x","y","z"];var W=function(){var e=Object(a.useState)(H[1]),n=Object(i.a)(e,2),t=n[0],l=n[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(j,{options:H,value:t,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(y,{name:"radio",options:H,value:t,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var N=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(W,null),r.a.createElement(E,null),r.a.createElement(O,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A={loading:!1},S=t(10),R=Object(S.b)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"loading":return Object(b.a)({},e,{},n.payload);default:return e}},theme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CHANGE_THEME":return Object(b.a)({},e,{},n.payload);default:return e}}}),M=Object(S.c)(R),F=M;window.store=M,o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f.a,{store:F},r.a.createElement(N,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.dd1e000c.chunk.js.map