"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[936],{955:function(e,t,n){n.d(t,{Z:function(){return f}});n(791);var r="MovieList_movieList__uFrOZ",a=n(87),u="MovieCard_movieItem__UzN21",s="MovieCard_movieLink__+HjyM",c="MovieCard_movieImage__540ko",i="MovieCard_movieTitle__61Rqx",o=n(184);var p=function(e){var t=e.movie,n=e.prevLocation;return(0,o.jsx)("li",{className:u,children:(0,o.jsxs)(a.rU,{to:"/movies/".concat(t.id),state:{from:n},className:s,children:[(0,o.jsx)("img",{src:t.poster_path?"https://image.tmdb.org/t/p/w200/".concat(t.poster_path):{},alt:t.title||t.name,className:c}),(0,o.jsx)("p",{className:i,children:t.title||t.name})]})})},f=function(e){var t=e.movies,n=e.prevLocation;return(0,o.jsx)("ul",{className:r,children:null===t||void 0===t?void 0:t.map((function(e){return(0,o.jsx)(p,{movie:e,prevLocation:n},e.id)}))})}},936:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(861),a=n(439),u=n(757),s=n.n(u),c=n(791),i=n(409),o=n(854),p="Home_movieTitle__M6anm",f=n(689),l=n(955),v=n(184);var d=function(){var e=(0,f.TH)(),t=(0,c.useState)([]),n=(0,a.Z)(t,2),u=n[0],d=n[1],m=(0,c.useState)(!1),h=(0,a.Z)(m,2),x=h[0],_=h[1],g=(0,c.useState)(null),Z=(0,a.Z)(g,2),w=Z[0],k=Z[1];return(0,c.useEffect)((function(){var e=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,_(!0),e.next=4,(0,i.Tg)();case 4:t=e.sent,d(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),k(e.t0.message);case 11:return e.prev=11,_(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,v.jsxs)(v.Fragment,{children:[x&&(0,v.jsx)(o.Z,{}),w&&(0,v.jsx)("div",{children:w}),(0,v.jsxs)("div",{children:[(0,v.jsx)("h2",{className:p,children:"Trending today"}),(0,v.jsx)(l.Z,{movies:u,prevLocation:e})]})]})}},409:function(e,t,n){n.d(t,{Hx:function(){return m},Tg:function(){return c},Y5:function(){return f},pl:function(){return o},uV:function(){return v}});var r=n(861),a=n(757),u=n.n(a),s=n(759);function c(){return i.apply(this,arguments)}function i(){return(i=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("trending/movie/day");case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("search/movie?query=".concat(t,"&include_adult=false&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("movie/".concat(t,"?language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("movie/".concat(t,"/credits?language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("movie/".concat(t,"/reviews?language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}s.Z.defaults.baseURL="https://api.themoviedb.org/3",s.Z.defaults.params={api_key:"4b14d9ad7ca21f45278ad0b78c44423b"}}}]);
//# sourceMappingURL=936.8dc3ec5a.chunk.js.map