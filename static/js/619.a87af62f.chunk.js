"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[619],{619:function(t,n,r){r.r(n);var e=r(861),c=r(439),a=r(687),o=r.n(a),u=r(933),s=r(791),i=r(689),f=r(184);n.default=function(){var t=(0,i.UO)().movieId,n=(0,s.useState)([]),r=(0,c.Z)(n,2),a=r[0],h=r[1];return(0,s.useEffect)((function(){var n=function(){var n=(0,e.Z)(o().mark((function n(){var r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,u.Xh)(t);case 3:r=n.sent,h(r),n.next=9;break;case 7:n.prev=7,n.t0=n.catch(0);case 9:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[t]),(0,f.jsx)("ul",{children:a.length>0?a.map((function(t){var n=t.author,r=t.content,e=t.id;return(0,f.jsxs)("li",{children:[(0,f.jsx)("h3",{children:n}),(0,f.jsx)("p",{children:r})]},e)})):(0,f.jsx)("h3",{children:"There are no reviews yet"})})}},933:function(t,n,r){r.d(n,{LE:function(){return u},QV:function(){return i},Xh:function(){return f},pG:function(){return s}});var e=r(861),c=r(687),a=r.n(c),o=function(){var t=(0,e.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.themoviedb.org/3","731f4a410992078035fa504a629d03c1",t.next=4,fetch("".concat("https://api.themoviedb.org/3","/trending/all/day?api_key=").concat("731f4a410992078035fa504a629d03c1","&page=1")).then((function(t){return t.ok?t.json():console.log(" Error ".concat(t.status))})).then((function(t){return t.results})).catch((function(t){return console.log("Error ".concat(t.status))}));case 4:return n=t.sent,t.abrupt("return",n);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=(0,e.Z)(a().mark((function t(n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"731f4a410992078035fa504a629d03c1","https://api.themoviedb.org/3",t.next=4,fetch("".concat("https://api.themoviedb.org/3","/search/movie?api_key=").concat("731f4a410992078035fa504a629d03c1","&language=en-US&query=").concat(n,"&page=1")).then((function(t){return t.ok?t.json():console.log(" Error ".concat(t.status))})).then((function(t){return t.results})).catch((function(t){return console.log("Error ".concat(t.status))}));case 4:return r=t.sent,t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),s=function(){var t=(0,e.Z)(a().mark((function t(n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"731f4a410992078035fa504a629d03c1","https://api.themoviedb.org/3",t.next=4,fetch("".concat("https://api.themoviedb.org/3","/movie/").concat(n,"?api_key=").concat("731f4a410992078035fa504a629d03c1","&language=en-US")).then((function(t){return t.ok?t.json():console.log(" Error ".concat(t.status))})).then((function(t){return t})).catch((function(t){return console.log("Error ".concat(t.status))}));case 4:return r=t.sent,t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),i=function(){var t=(0,e.Z)(a().mark((function t(n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"731f4a410992078035fa504a629d03c1","https://api.themoviedb.org/3",t.next=4,fetch("".concat("https://api.themoviedb.org/3","/movie/").concat(n,"/credits?api_key=").concat("731f4a410992078035fa504a629d03c1","&language=en-US")).then((function(t){return t.ok?t.json():console.log(" Error ".concat(t.status))})).then((function(t){return t.cast})).catch((function(t){return console.log("Error ".concat(t.status))}));case 4:return r=t.sent,t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(a().mark((function t(n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"731f4a410992078035fa504a629d03c1","https://api.themoviedb.org/3",t.next=4,fetch("".concat("https://api.themoviedb.org/3","/movie/").concat(n,"/reviews?api_key=").concat("731f4a410992078035fa504a629d03c1","&language=en-US")).then((function(t){return t.ok?t.json():console.log(" Error ".concat(t.status))})).then((function(t){return t.results})).catch((function(t){return console.log("Error ".concat(t.status))}));case 4:return r=t.sent,t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();n.ZP=o},861:function(t,n,r){function e(t,n,r,e,c,a,o){try{var u=t[a](o),s=u.value}catch(i){return void r(i)}u.done?n(s):Promise.resolve(s).then(e,c)}function c(t){return function(){var n=this,r=arguments;return new Promise((function(c,a){var o=t.apply(n,r);function u(t){e(o,c,a,u,s,"next",t)}function s(t){e(o,c,a,u,s,"throw",t)}u(void 0)}))}}r.d(n,{Z:function(){return c}})}}]);
//# sourceMappingURL=619.a87af62f.chunk.js.map