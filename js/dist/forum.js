(()=>{var t={195:(t,r,e)=>{t.exports=e(236)},236:t=>{var r=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(t){s=function(t,r,e){return t[r]=e}}function u(t,r,e,n){var o=r&&r.prototype instanceof y?r:y,a=Object.create(o.prototype),i=new S(n||[]);return a._invoke=function(t,r,e){var n=h;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===m){if("throw"===o)throw a;return N()}for(e.method=o,e.arg=a;;){var i=e.delegate;if(i){var c=P(i,e);if(c){if(c===v)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===h)throw n=m,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var s=l(t,r,e);if("normal"===s.type){if(n=e.done?m:f,s.arg===v)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(n=m,e.method="throw",e.arg=s.arg)}}}(t,e,i),a}function l(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var h="suspendedStart",f="suspendedYield",p="executing",m="completed",v={};function y(){}function d(){}function g(){}var w={};s(w,a,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(k([])));x&&x!==e&&n.call(x,a)&&(w=x);var L=g.prototype=y.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function _(t,r){function e(o,a,i,c){var s=l(t[o],t,a);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"==typeof h&&n.call(h,"__await")?r.resolve(h.__await).then((function(t){e("next",t,i,c)}),(function(t){e("throw",t,i,c)})):r.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return e("throw",t,i,c)}))}c(s.arg)}var o;this._invoke=function(t,n){function a(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(a,a):a()}}function P(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,P(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function j(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function k(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:N}}function N(){return{value:r,done:!0}}return d.prototype=g,s(L,"constructor",g),s(g,"constructor",d),d.displayName=s(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===d||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},E(_.prototype),s(_.prototype,i,(function(){return this})),t.AsyncIterator=_,t.async=function(r,e,n,o,a){void 0===a&&(a=Promise);var i=new _(u(r,e,n,o),a);return t.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(L),s(L,c,"Generator"),s(L,a,(function(){return this})),s(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=k,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=r,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),j(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;j(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:k(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}},t}(t.exports);try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}}},r={};function e(n){var o=r[n];if(void 0!==o)return o.exports;var a=r[n]={exports:{}};return t[n](a,a.exports,e),a.exports}e.n=t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},e.d=(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},e.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r),e.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};(()=>{"use strict";e.r(n);const t=flarum.core.compat["forum/app"];var r=e.n(t);const o=flarum.core.compat["forum/components/Search"];var a=e.n(o);const i=flarum.core.compat["common/extend"];function c(t,r,e,n,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void e(t)}c.done?r(s):Promise.resolve(s).then(n,o)}function s(t){return function(){var r=this,e=arguments;return new Promise((function(n,o){var a=t.apply(r,e);function i(t){c(a,n,o,i,s,"next",t)}function s(t){c(a,n,o,i,s,"throw",t)}i(void 0)}))}}var u=e(195),l=e.n(u);const h=flarum.core.compat["common/helpers/highlight"];var f=e.n(h);const p=flarum.core.compat["common/components/LinkButton"];var v=e.n(p);const y=flarum.core.compat["common/components/Link"];var d=e.n(y),g=function(){function t(){this.results=new Map,this.type="discussions"}var e=t.prototype;return e.search=function(){var t=s(l().mark((function t(e){var n,o,a,i;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=e.toLowerCase(),this.results.set(e,[]),n={filter:{q:e},page:{limit:3},include:"mostRelevantPost"},o=r().forum.attribute("apiUrl")+"/blomstra/search/"+this.type,t.next=6,r().request({params:n,url:o,method:"GET"});case 6:a=t.sent,i=r().store.pushPayload(a),this.results.set(e,i);case 9:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}(),e.view=function(t){var e=this;t=t.toLowerCase();var n=(this.results.get(t)||[]).map((function(n){var o=n.mostRelevantPost();return m("li",{className:"DiscussionSearchResult","data-index":""+e.type+n.id()},m(d(),{href:r().route.discussion(n,o&&o.number())},m("div",{className:"DiscussionSearchResult-title"},f()(n.title(),t)),!!o&&m("div",{className:"DiscussionSearchResult-excerpt"},f()(o.contentPlain(),t,100))))}));return[m("li",{className:"Dropdown-header"},r().translator.trans("core.forum.search.discussions_heading")),m("li",null,m(v(),{icon:"fas fa-search",href:r().route("index",{q:t})},r().translator.trans("core.forum.search.all_discussions_button",{query:t})))].concat(n)},t}();function w(){return w=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t},w.apply(this,arguments)}const b=flarum.core.compat["forum/states/DiscussionListState"];var x=e.n(b);r().initializers.add("blomstra-search",(function(){(0,i.extend)(a().prototype,"sourceItems",(function(t){t.replace("discussions",new g)}))})),r().initializers.add("blomstra-search-early",(function(){(0,i.override)(x().prototype,"loadPage",function(){var t=s(l().mark((function t(e,n){var o,a,i,c,s;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0===n&&(n=1),!r().data.apiDocument&&null!=(o=this.requestParams())&&null!=(a=o.filter)&&a.q){t.next=4;break}return t.abrupt("return",e.call(this,n));case 4:return(i=this.requestParams()).page=w({offset:this.pageSize*(n-1)},i.page),Array.isArray(i.include)&&(i.include=i.include.join(",")),c=r().forum.attribute("apiUrl")+"/blomstra/search/"+this.type,t.next=10,r().request({params:i,url:c,method:"GET"});case 10:return s=t.sent,t.abrupt("return",r().store.pushPayload(s));case 12:case"end":return t.stop()}}),t,this)})));return function(r,e,n){return t.apply(this,arguments)}}())}),999999)})(),module.exports=n})();
//# sourceMappingURL=forum.js.map