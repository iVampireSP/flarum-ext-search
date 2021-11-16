module.exports=function(t){var r={};function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)e.d(n,o,function(r){return t[r]}.bind(null,o));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=10)}([function(t,r){t.exports=flarum.core.compat["forum/app"]},,function(t,r,e){t.exports=e(9)},function(t,r){t.exports=flarum.core.compat["common/extend"]},function(t,r){t.exports=flarum.core.compat["common/helpers/highlight"]},function(t,r){t.exports=flarum.core.compat["forum/components/Search"]},function(t,r){t.exports=flarum.core.compat["common/components/LinkButton"]},function(t,r){t.exports=flarum.core.compat["common/components/Link"]},function(t,r){t.exports=flarum.core.compat["forum/states/DiscussionListState"]},function(t,r,e){var n=function(t){"use strict";var r=Object.prototype,e=r.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(t){u=function(t,r,e){return t[r]=e}}function c(t,r,e,n){var o=r&&r.prototype instanceof f?r:f,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=function(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return O()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var u=x(a,e);if(u){if(u===l)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var c=s(t,r,e);if("normal"===c.type){if(n=e.done?"completed":"suspendedYield",c.arg===l)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(n="completed",e.method="throw",e.arg=c.arg)}}}(t,e,a),i}function s(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var l={};function f(){}function h(){}function p(){}var d={};u(d,o,(function(){return this}));var m=Object.getPrototypeOf,v=m&&m(m(E([])));v&&v!==r&&e.call(v,o)&&(d=v);var y=p.prototype=f.prototype=Object.create(d);function g(t){["next","throw","return"].forEach((function(r){u(t,r,(function(t){return this._invoke(r,t)}))}))}function w(t,r){var n;this._invoke=function(o,i){function a(){return new r((function(n,a){!function n(o,i,a,u){var c=s(t[o],t,i);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==typeof f&&e.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,a,u)}),(function(t){n("throw",t,a,u)})):r.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,u)}))}u(c.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function x(t,r){var e=t.iterator[r.method];if(void 0===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=void 0,x(t,r),"throw"===r.method))return l;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=s(e,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,l;var o=n.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,l):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,l)}function b(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function L(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function E(t){if(t){var r=t[o];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return i.next=i}}return{next:O}}function O(){return{value:void 0,done:!0}}return h.prototype=p,u(y,"constructor",p),u(p,"constructor",h),h.displayName=u(p,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===h||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,u(t,a,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(w.prototype),u(w.prototype,i,(function(){return this})),t.AsyncIterator=w,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new w(c(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(y),u(y,a,"Generator"),u(y,o,(function(){return this})),u(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=E,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=e.call(i,"catchLoc"),c=e.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),l},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),L(e),l}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;L(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:E(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),l}},t}(t.exports);try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},function(t,r,e){"use strict";e.r(r);var n=e(0),o=e.n(n),i=e(5),a=e.n(i),u=e(3);function c(t,r,e,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void e(t)}u.done?r(c):Promise.resolve(c).then(n,o)}function s(t){return function(){var r=this,e=arguments;return new Promise((function(n,o){var i=t.apply(r,e);function a(t){c(i,n,o,a,u,"next",t)}function u(t){c(i,n,o,a,u,"throw",t)}a(void 0)}))}}var l=e(2),f=e.n(l),h=e(4),p=e.n(h),d=e(6),v=e.n(d),y=e(7),g=e.n(y),w=function(){function t(){this.results=new Map,this.type="discussions"}var r=t.prototype;return r.search=function(){var t=s(f.a.mark((function t(r){var e,n,i,a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=r.toLowerCase(),this.results.set(r,[]),e={filter:{q:r},page:{limit:3},include:"mostRelevantPost"},n=o.a.forum.attribute("apiUrl")+"/blomstra/search/"+this.type,t.next=6,o.a.request({params:e,url:n,method:"GET"});case 6:i=t.sent,a=o.a.store.pushPayload(i),this.results.set(r,a);case 9:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}(),r.view=function(t){var r=this;t=t.toLowerCase();var e=(this.results.get(t)||[]).map((function(e){var n=e.mostRelevantPost();return m("li",{className:"DiscussionSearchResult","data-index":""+r.type+e.id(),key:""+r.type+e.id()},m(g.a,{href:o.a.route.discussion(e,n&&n.number())},m("div",{className:"DiscussionSearchResult-title"},p()(e.title(),t)),!!n&&m("div",{className:"DiscussionSearchResult-excerpt"},p()(n.contentPlain(),t,100))))}));return m("[",null,m("li",{className:"Dropdown-header"},o.a.translator.trans("core.forum.search.discussions_heading")),m("li",null,m(v.a,{icon:"fas fa-search",href:o.a.route("index",{q:t})},o.a.translator.trans("core.forum.search.all_discussions_button",{query:t}))),e)},t}();function x(){return(x=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t}).apply(this,arguments)}var b=e(8),L=e.n(b);o.a.initializers.add("blomstra-search",(function(){Object(u.extend)(a.a.prototype,"sourceItems",(function(t){t.remove("discussions"),t.add("discussions",new w)})),Object(u.override)(L.a.prototype,"loadPage",function(){var t=s(f.a.mark((function t(r,e){var n,i,a,u,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0===e&&(e=1),!o.a.data.apiDocument&&null!=(n=this.requestParams())&&null!=(i=n.filter)&&i.q){t.next=4;break}return t.abrupt("return",r.call(this,e));case 4:return(a=this.requestParams()).page=x({offset:this.pageSize*(e-1)},a.page),Array.isArray(a.include)&&(a.include=a.include.join(",")),u=o.a.forum.attribute("apiUrl")+"/blomstra/search/"+this.type,t.next=10,o.a.request({params:a,url:u,method:"GET"});case 10:return c=t.sent,t.abrupt("return",o.a.store.pushPayload(c));case 12:case"end":return t.stop()}}),t,this)})));return function(r,e,n){return t.apply(this,arguments)}}())}))}]);
//# sourceMappingURL=forum.js.map