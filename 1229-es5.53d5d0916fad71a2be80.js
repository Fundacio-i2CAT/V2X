!function(){function t(t,n,r){return(n=i(n))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function n(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */n=function(){return r};var t,r={},e=Object.prototype,o=e.hasOwnProperty,i=Object.defineProperty||function(t,n,r){t[n]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function d(t,n,r){return Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{d({},"")}catch(t){d=function(t,n,r){return t[n]=r}}function l(t,n,r,e){var o=n&&n.prototype instanceof b?n:b,a=Object.create(o.prototype),c=new B(e||[]);return i(a,"_invoke",{value:j(t,r,c)}),a}function p(t,n,r){try{return{type:"normal",arg:t.call(n,r)}}catch(t){return{type:"throw",arg:t}}}r.wrap=l;var g="suspendedStart",h="executing",f="completed",v={};function b(){}function m(){}function y(){}var w={};d(w,c,function(){return this});var k=Object.getPrototypeOf,x=k&&k(k(P([])));x&&x!==e&&o.call(x,c)&&(w=x);var L=y.prototype=b.prototype=Object.create(w);function z(t){["next","throw","return"].forEach(function(n){d(t,n,function(t){return this._invoke(n,t)})})}function E(t,n){function r(e,i,a,c){var s=p(t[e],t,i);if("throw"!==s.type){var u=s.arg,d=u.value;return d&&"object"==typeof d&&o.call(d,"__await")?n.resolve(d.__await).then(function(t){r("next",t,a,c)},function(t){r("throw",t,a,c)}):n.resolve(d).then(function(t){u.value=t,a(u)},function(t){return r("throw",t,a,c)})}c(s.arg)}var e;i(this,"_invoke",{value:function(t,o){function i(){return new n(function(n,e){r(t,o,n,e)})}return e=e?e.then(i,i):i()}})}function j(n,r,e){var o=g;return function(i,a){if(o===h)throw new Error("Generator is already running");if(o===f){if("throw"===i)throw a;return{value:t,done:!0}}for(e.method=i,e.arg=a;;){var c=e.delegate;if(c){var s=O(c,e);if(s){if(s===v)continue;return s}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(o===g)throw o=f,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);o=h;var u=p(n,r,e);if("normal"===u.type){if(o=e.done?f:"suspendedYield",u.arg===v)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(o=f,e.method="throw",e.arg=u.arg)}}}function O(n,r){var e=r.method,o=n.iterator[e];if(o===t)return r.delegate=null,"throw"===e&&n.iterator.return&&(r.method="return",r.arg=t,O(n,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),v;var i=p(o,n.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[n.resultName]=a.value,r.next=n.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function _(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function C(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function B(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function P(n){if(n||""===n){var r=n[c];if(r)return r.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var e=-1,i=function r(){for(;++e<n.length;)if(o.call(n,e))return r.value=n[e],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(typeof n+" is not iterable")}return m.prototype=y,i(L,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:m,configurable:!0}),m.displayName=d(y,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===m||"GeneratorFunction"===(n.displayName||n.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,d(t,u,"GeneratorFunction")),t.prototype=Object.create(L),t},r.awrap=function(t){return{__await:t}},z(E.prototype),d(E.prototype,s,function(){return this}),r.AsyncIterator=E,r.async=function(t,n,e,o,i){void 0===i&&(i=Promise);var a=new E(l(t,n,e,o),i);return r.isGeneratorFunction(n)?a:a.next().then(function(t){return t.done?t.value:a.next()})},z(L),d(L,u,"Generator"),d(L,c,function(){return this}),d(L,"toString",function(){return"[object Generator]"}),r.keys=function(t){var n=Object(t),r=[];for(var e in n)r.push(e);return r.reverse(),function t(){for(;r.length;){var e=r.pop();if(e in n)return t.value=e,t.done=!1,t}return t.done=!0,t}},r.values=P,B.prototype={constructor:B,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!n)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var r=this;function e(e,o){return c.type="throw",c.arg=n,r.next=e,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return e("end");if(a.tryLoc<=this.prev){var s=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return e(a.catchLoc,!0);if(this.prev<a.finallyLoc)return e(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return e(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return e(a.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc<=this.prev&&o.call(e,"finallyLoc")&&this.prev<e.finallyLoc){var i=e;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),v},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),v}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc===t){var e=r.completion;if("throw"===e.type){var o=e.arg;C(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,r,e){return this.delegate={iterator:P(n),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=t),v}},r}function r(t,n,r,e,o,i,a){try{var c=t[i](a),s=c.value}catch(u){return void r(u)}c.done?n(s):Promise.resolve(s).then(e,o)}function e(t){return function(){var n=this,e=arguments;return new Promise(function(o,i){var a=t.apply(n,e);function c(t){r(a,o,i,c,s,"next",t)}function s(t){r(a,o,i,c,s,"throw",t)}c(void 0)})}}function o(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,i(e.key),e)}}function i(t){var n=function(t,n){if("object"!=typeof t||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var e=r.call(t,n||"default");if("object"!=typeof e)return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"==typeof n?n:String(n)}(self.webpackChunkv2x_frontend=self.webpackChunkv2x_frontend||[]).push([[1229],{1229:function(r,i,a){"use strict";a.r(i),a.d(i,{ion_back_button:function(){return p}});var c=a(1429),s=a(2343),u=a(8931),d=a(1444),l=a(4881),p=function(){function r(t){var o=this;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,r),(0,c.r)(this,t),this.inheritedAttributes={},this.disabled=!1,this.type="button",this.onClick=function(){var t=e(n().mark(function t(r){var e;return n().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=o.el.closest("ion-nav"),r.preventDefault(),t.t0=e,!t.t0){t.next=7;break}return t.next=6,e.canGoBack();case 6:t.t0=t.sent;case 7:if(!t.t0){t.next=11;break}t.t1=e.pop({animationBuilder:o.routerAnimation,skipIfBusy:!0}),t.next=12;break;case 11:t.t1=(0,l.o)(o.defaultHref,r,"back",o.routerAnimation);case 12:return t.abrupt("return",t.t1);case 13:case"end":return t.stop()}},t)}));return function(n){return t.apply(this,arguments)}}()}var i,a,p;return i=r,(a=[{key:"componentWillLoad",value:function(){this.inheritedAttributes=(0,d.i)(this.el),void 0===this.defaultHref&&(this.defaultHref=u.c.get("backButtonDefaultHref"))}},{key:"backButtonIcon",get:function(){var t=this.icon;return null!=t?t:"ios"===(0,u.b)(this)?u.c.get("backButtonIcon",s.c):u.c.get("backButtonIcon",s.a)}},{key:"backButtonText",get:function(){var t="ios"===(0,u.b)(this)?"Back":null;return null!=this.text?this.text:u.c.get("backButtonText",t)}},{key:"hasIconOnly",get:function(){return this.backButtonIcon&&!this.backButtonText}},{key:"rippleType",get:function(){return this.hasIconOnly?"unbounded":"bounded"}},{key:"render",value:function(){var n=this.color,r=this.defaultHref,e=this.disabled,o=this.type,i=this.hasIconOnly,a=this.backButtonIcon,s=this.backButtonText,d=this.icon,p=this.inheritedAttributes,g=void 0!==r,h=(0,u.b)(this),f=p["aria-label"]||s||"back";return(0,c.h)(c.H,{onClick:this.onClick,class:(0,l.c)(n,t(t(t(t(t(t(t(t(t({},h,!0),"button",!0),"back-button-disabled",e),"back-button-has-icon-only",i),"in-toolbar",(0,l.h)("ion-toolbar",this.el)),"in-toolbar-color",(0,l.h)("ion-toolbar[color]",this.el)),"ion-activatable",!0),"ion-focusable",!0),"show-back-button",g))},(0,c.h)("button",{type:o,disabled:e,class:"button-native",part:"native","aria-label":f},(0,c.h)("span",{class:"button-inner"},a&&(0,c.h)("ion-icon",{part:"icon",icon:a,"aria-hidden":"true",lazy:!1,"flip-rtl":void 0===d}),s&&(0,c.h)("span",{part:"text","aria-hidden":"true",class:"button-text"},s)),"md"===h&&(0,c.h)("ion-ripple-effect",{type:this.rippleType})))}},{key:"el",get:function(){return(0,c.i)(this)}}])&&o(i.prototype,a),p&&o(i,p),Object.defineProperty(i,"prototype",{writable:!1}),r}();p.style={ios:':host{--background:transparent;--color-focused:currentColor;--color-hover:currentColor;--icon-margin-top:0;--icon-margin-bottom:0;--icon-padding-top:0;--icon-padding-end:0;--icon-padding-bottom:0;--icon-padding-start:0;--margin-top:0;--margin-end:0;--margin-bottom:0;--margin-start:0;--min-width:auto;--min-height:auto;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--opacity:1;--ripple-color:currentColor;--transition:background-color, opacity 100ms linear;display:none;min-width:var(--min-width);min-height:var(--min-height);color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-kerning:none;font-kerning:none}ion-ripple-effect{color:var(--ripple-color)}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.show-back-button){display:block}:host(.back-button-disabled){cursor:default;opacity:0.5;pointer-events:none}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:var(--margin-start);margin-right:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;min-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;opacity:var(--opacity);overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end)}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{padding-left:var(--icon-padding-start);padding-right:var(--icon-padding-end);padding-top:var(--icon-padding-top);padding-bottom:var(--icon-padding-bottom);margin-left:var(--icon-margin-start);margin-right:var(--icon-margin-end);margin-top:var(--icon-margin-top);margin-bottom:var(--icon-margin-bottom);display:inherit;font-size:var(--icon-font-size);font-weight:var(--icon-font-weight);pointer-events:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-icon{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--icon-padding-start);padding-inline-start:var(--icon-padding-start);-webkit-padding-end:var(--icon-padding-end);padding-inline-end:var(--icon-padding-end)}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--icon-margin-start);margin-inline-start:var(--icon-margin-start);-webkit-margin-end:var(--icon-margin-end);margin-inline-end:var(--icon-margin-end)}}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-color.ion-focused) .button-native{color:var(--ion-color-base)}@media (any-hover: hover){:host(.ion-color:hover) .button-native{color:var(--ion-color-base)}}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-hover:transparent;--background-hover-opacity:1;--background-focused:currentColor;--background-focused-opacity:.1;--border-radius:4px;--color:var(--ion-color-primary, #3880ff);--icon-margin-end:-5px;--icon-margin-start:-4px;--icon-font-size:1.85em;--min-height:32px;font-size:17px}.button-native{-webkit-transform:translateZ(0);transform:translateZ(0);overflow:visible;z-index:99}:host(.ion-activated) .button-native{opacity:0.4}@media (any-hover: hover){:host(:hover){opacity:0.6}}:host(.ion-color.ion-focused) .button-native::after{background:var(--ion-color-base)}',md:':host{--background:transparent;--color-focused:currentColor;--color-hover:currentColor;--icon-margin-top:0;--icon-margin-bottom:0;--icon-padding-top:0;--icon-padding-end:0;--icon-padding-bottom:0;--icon-padding-start:0;--margin-top:0;--margin-end:0;--margin-bottom:0;--margin-start:0;--min-width:auto;--min-height:auto;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--opacity:1;--ripple-color:currentColor;--transition:background-color, opacity 100ms linear;display:none;min-width:var(--min-width);min-height:var(--min-height);color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-kerning:none;font-kerning:none}ion-ripple-effect{color:var(--ripple-color)}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.show-back-button){display:block}:host(.back-button-disabled){cursor:default;opacity:0.5;pointer-events:none}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:var(--margin-start);margin-right:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;min-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;opacity:var(--opacity);overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end)}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{padding-left:var(--icon-padding-start);padding-right:var(--icon-padding-end);padding-top:var(--icon-padding-top);padding-bottom:var(--icon-padding-bottom);margin-left:var(--icon-margin-start);margin-right:var(--icon-margin-end);margin-top:var(--icon-margin-top);margin-bottom:var(--icon-margin-bottom);display:inherit;font-size:var(--icon-font-size);font-weight:var(--icon-font-weight);pointer-events:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-icon{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--icon-padding-start);padding-inline-start:var(--icon-padding-start);-webkit-padding-end:var(--icon-padding-end);padding-inline-end:var(--icon-padding-end)}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--icon-margin-start);margin-inline-start:var(--icon-margin-start);-webkit-margin-end:var(--icon-margin-end);margin-inline-end:var(--icon-margin-end)}}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-color.ion-focused) .button-native{color:var(--ion-color-base)}@media (any-hover: hover){:host(.ion-color:hover) .button-native{color:var(--ion-color-base)}}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--border-radius:4px;--background-focused:currentColor;--background-focused-opacity:.12;--background-hover:currentColor;--background-hover-opacity:0.04;--color:currentColor;--icon-margin-end:0;--icon-margin-start:0;--icon-font-size:24px;--icon-font-weight:normal;--min-height:32px;--min-width:44px;--padding-start:12px;--padding-end:12px;font-size:14px;font-weight:500;text-transform:uppercase}:host(.back-button-has-icon-only){--border-radius:50%;min-width:48px;height:48px}.button-native{-webkit-box-shadow:none;box-shadow:none}.button-text{padding-left:4px;padding-right:4px;padding-top:0;padding-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-text{padding-left:unset;padding-right:unset;-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px}}ion-icon{line-height:0.67;text-align:start}@media (any-hover: hover){:host(.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}:host(.ion-color.ion-focused) .button-native::after{background:var(--ion-color-base)}'}},4881:function(r,o,i){"use strict";i.d(o,{c:function(){return c},g:function(){return s},h:function(){return a},o:function(){return d}});var a=function(t,n){return null!==n.closest(t)},c=function(n,r){return"string"==typeof n&&n.length>0?Object.assign(t({"ion-color":!0},"ion-color-".concat(n),!0),r):r},s=function(t){var n={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t}):[]}(t).forEach(function(t){return n[t]=!0}),n},u=/^[a-z][a-z0-9+\-.]*:/,d=function(){var t=e(n().mark(function t(r,e,o,i){var a;return n().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(null==r||"#"===r[0]||u.test(r)){t.next=4;break}if(!(a=document.querySelector("ion-router"))){t.next=4;break}return t.abrupt("return",(null!=e&&e.preventDefault(),a.push(r,o,i)));case 4:return t.abrupt("return",!1);case 5:case"end":return t.stop()}},t)}));return function(n,r,e,o){return t.apply(this,arguments)}}()}}])}();