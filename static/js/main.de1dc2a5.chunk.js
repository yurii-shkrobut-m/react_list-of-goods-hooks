(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s,c=n(7),o=n.n(c),i=n(6),r=n(8),a=n(1),l=n(4),u=n.n(l),b=(n(13),n(14),n(0)),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t.alphabet="alphabet",t.length="length"}(s||(s={}));var j=function(){var t=Object(a.useState)(""),e=Object(i.a)(t,2),n=e[0],c=e[1],o=Object(a.useState)(!1),l=Object(i.a)(o,2),j=l[0],d=l[1],g=function(t,e){var n=e.sortField,c=e.isReverse,o=Object(r.a)(t);return n&&o.sort((function(t,e){switch(n){case s.alphabet:return t.localeCompare(e);case s.length:return t.length-e.length;default:return 0}})),c&&o.reverse(),o}(h,{sortField:n,isReverse:j});return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",onClick:function(){return c(s.alphabet)},className:u()("button is-info",{"is-light":n!==s.alphabet}),children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",onClick:function(){return c(s.length)},className:u()("button is-success",{"is-light":n!==s.length}),children:"Sort by length"}),Object(b.jsx)("button",{type:"button",onClick:function(){return d(!j)},className:u()("button is-warning",{"is-light":!j}),children:"Reverse"}),(j||n)&&Object(b.jsx)("button",{type:"button",onClick:function(){c(""),d(!1)},className:"button is-danger is-light",children:"Reset"})]}),Object(b.jsx)("ul",{children:g.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};o.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.de1dc2a5.chunk.js.map