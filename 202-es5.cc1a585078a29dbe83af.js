!function(){function t(t,r){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,r){if(!t)return;if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(t,r)}(t))||r&&t&&"number"==typeof t.length){n&&(t=n);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return s=t.done,t},e:function(t){c=!0,a=t},f:function(){try{s||null==n.return||n.return()}finally{if(c)throw a}}}}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function r(t,e,r){return(e=l(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */n=function(){return e};var t,e={},r=Object.prototype,i=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},s=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var i=e&&e.prototype instanceof m?e:m,a=Object.create(i.prototype),s=new O(n||[]);return o(a,"_invoke",{value:z(t,r,s)}),a}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var f="suspendedStart",p="executing",b="completed",g={};function m(){}function v(){}function y(){}var w={};u(w,s,function(){return this});var x=Object.getPrototypeOf,k=x&&x(x(_([])));k&&k!==r&&i.call(k,s)&&(w=k);var S=y.prototype=m.prototype=Object.create(w);function L(t){["next","throw","return"].forEach(function(e){u(t,e,function(t){return this._invoke(e,t)})})}function E(t,e){function r(n,o,a,s){var c=d(t[n],t,o);if("throw"!==c.type){var l=c.arg,u=l.value;return u&&"object"==typeof u&&i.call(u,"__await")?e.resolve(u.__await).then(function(t){r("next",t,a,s)},function(t){r("throw",t,a,s)}):e.resolve(u).then(function(t){l.value=t,a(l)},function(t){return r("throw",t,a,s)})}s(c.arg)}var n;o(this,"_invoke",{value:function(t,i){function o(){return new e(function(e,n){r(t,i,e,n)})}return n=n?n.then(o,o):o()}})}function z(e,r,n){var i=f;return function(o,a){if(i===p)throw new Error("Generator is already running");if(i===b){if("throw"===o)throw a;return{value:t,done:!0}}for(n.method=o,n.arg=a;;){var s=n.delegate;if(s){var c=j(s,n);if(c){if(c===g)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===f)throw i=b,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=p;var l=d(e,r,n);if("normal"===l.type){if(i=n.done?b:"suspendedYield",l.arg===g)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(i=b,n.method="throw",n.arg=l.arg)}}}function j(e,r){var n=r.method,i=e.iterator[n];if(i===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,j(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var o=d(i,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,g;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function _(e){if(e||""===e){var r=e[s];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function r(){for(;++n<e.length;)if(i.call(e,n))return r.value=e[n],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw new TypeError(typeof e+" is not iterable")}return v.prototype=y,o(S,"constructor",{value:y,configurable:!0}),o(y,"constructor",{value:v,configurable:!0}),v.displayName=u(y,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,l,"GeneratorFunction")),t.prototype=Object.create(S),t},e.awrap=function(t){return{__await:t}},L(E.prototype),u(E.prototype,c,function(){return this}),e.AsyncIterator=E,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new E(h(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then(function(t){return t.done?t.value:a.next()})},L(S),u(S,l,"Generator"),u(S,s,function(){return this}),u(S,"toString",function(){return"[object Generator]"}),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=_,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(I),!e)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),l=i.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;I(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:_(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function i(t,e,r,n,i,o,a){try{var s=t[o](a),c=s.value}catch(l){return void r(l)}s.done?e(c):Promise.resolve(c).then(n,i)}function o(t){return function(){var e=this,r=arguments;return new Promise(function(n,o){var a=t.apply(e,r);function s(t){i(a,n,o,s,c,"next",t)}function c(t){i(a,n,o,s,c,"throw",t)}s(void 0)})}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,l(n.key),n)}}function c(t,e,r){return e&&s(t.prototype,e),r&&s(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function l(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(self.webpackChunkv2x_frontend=self.webpackChunkv2x_frontend||[]).push([[202],{202:function(e,i,s){"use strict";s.r(i),s.d(i,{ion_radio:function(){return f},ion_radio_group:function(){return b}});var l=s(1429),u=s(8931),h=s(1444),d=s(4881),f=function(){function t(e){var r=this;a(this,t),(0,l.r)(this,e),this.ionStyle=(0,l.e)(this,"ionStyle",7),this.ionFocus=(0,l.e)(this,"ionFocus",7),this.ionBlur=(0,l.e)(this,"ionBlur",7),this.inputId="ion-rb-"+p++,this.radioGroup=null,this.checked=!1,this.buttonTabindex=-1,this.name=this.inputId,this.disabled=!1,this.updateState=function(){r.radioGroup&&(r.checked=r.radioGroup.value===r.value)},this.onClick=function(){r.checked=r.nativeInput.checked},this.onFocus=function(){r.ionFocus.emit()},this.onBlur=function(){r.ionBlur.emit()}}var e,i;return c(t,[{key:"valueChanged",value:function(){this.updateState()}},{key:"setFocus",value:(i=o(n().mark(function t(e){return n().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.stopPropagation(),e.preventDefault(),this.el.focus();case 1:case"end":return t.stop()}},t,this)})),function(t){return i.apply(this,arguments)})},{key:"setButtonTabindex",value:(e=o(n().mark(function t(e){return n().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.buttonTabindex=e;case 1:case"end":return t.stop()}},t,this)})),function(t){return e.apply(this,arguments)})},{key:"connectedCallback",value:function(){void 0===this.value&&(this.value=this.inputId);var t=this.radioGroup=this.el.closest("ion-radio-group");t&&(this.updateState(),(0,h.a)(t,"ionChange",this.updateState))}},{key:"disconnectedCallback",value:function(){var t=this.radioGroup;t&&((0,h.b)(t,"ionChange",this.updateState),this.radioGroup=null)}},{key:"componentWillLoad",value:function(){this.emitStyle()}},{key:"emitStyle",value:function(){this.ionStyle.emit({"radio-checked":this.checked,"interactive-disabled":this.disabled})}},{key:"render",value:function(){var t=this,e=this.inputId,n=this.disabled,i=this.checked,o=this.color,a=this.el,s=this.buttonTabindex,c=(0,u.b)(this),f=(0,h.d)(a,e),p=f.label,b=f.labelId,g=f.labelText;return(0,l.h)(l.H,{"aria-checked":"".concat(i),"aria-hidden":n?"true":null,"aria-labelledby":p?b:null,role:"radio",tabindex:s,onFocus:this.onFocus,onBlur:this.onBlur,onClick:this.onClick,class:(0,d.c)(o,r(r(r(r(r({},c,!0),"in-item",(0,d.h)("ion-item",a)),"interactive",!0),"radio-checked",i),"radio-disabled",n))},(0,l.h)("div",{class:"radio-icon",part:"container"},(0,l.h)("div",{class:"radio-inner",part:"mark"}),(0,l.h)("div",{class:"radio-ripple"})),(0,l.h)("label",{htmlFor:e},g),(0,l.h)("input",{type:"radio",checked:i,disabled:n,tabindex:"-1",id:e,ref:function(e){return t.nativeInput=e}}))}},{key:"el",get:function(){return(0,l.i)(this)}}],[{key:"watchers",get:function(){return{value:["valueChanged"],color:["emitStyle"],checked:["emitStyle"],disabled:["emitStyle"]}}}]),t}(),p=0;f.style={ios:':host{--inner-border-radius:50%;display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.radio-disabled){pointer-events:none}.radio-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;contain:layout size style}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host(:focus){outline:none}:host{--color-checked:var(--ion-color-primary, #3880ff);width:15px;height:24px}:host(.ion-color.radio-checked) .radio-inner{border-color:var(--ion-color-base)}.item-radio.item-ios ion-label{margin-left:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-radio.item-ios ion-label{margin-left:unset;-webkit-margin-start:0;margin-inline-start:0}}.radio-inner{width:33%;height:50%}:host(.radio-checked) .radio-inner{-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--color-checked)}:host(.radio-disabled){opacity:0.3}:host(.ion-focused) .radio-icon::after{border-radius:var(--inner-border-radius);left:-9px;top:-8px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint, #4c8dff);content:"";opacity:0.2}:host-context([dir=rtl]):host(.ion-focused) .radio-icon::after,:host-context([dir=rtl]).ion-focused .radio-icon::after{left:unset;right:unset;right:-9px}:host(.in-item){margin-left:10px;margin-right:11px;margin-top:8px;margin-bottom:8px;display:block;position:static}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item){margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:11px;margin-inline-end:11px}}:host(.in-item[slot=start]){margin-left:3px;margin-right:21px;margin-top:8px;margin-bottom:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:3px;margin-inline-start:3px;-webkit-margin-end:21px;margin-inline-end:21px}}',md:':host{--inner-border-radius:50%;display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.radio-disabled){pointer-events:none}.radio-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;contain:layout size style}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host(:focus){outline:none}:host{--color:var(--ion-color-step-400, #999999);--color-checked:var(--ion-color-primary, #3880ff);--border-width:2px;--border-style:solid;--border-radius:50%;width:20px;height:20px}:host(.ion-color) .radio-inner{background:var(--ion-color-base)}:host(.ion-color.radio-checked) .radio-icon{border-color:var(--ion-color-base)}.radio-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:var(--border-radius);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--color)}.radio-inner{border-radius:var(--inner-border-radius);width:calc(50% + var(--border-width));height:calc(50% + var(--border-width));-webkit-transform:scale3d(0, 0, 0);transform:scale3d(0, 0, 0);-webkit-transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);background:var(--color-checked)}:host(.radio-checked) .radio-icon{border-color:var(--color-checked)}:host(.radio-checked) .radio-inner{-webkit-transform:scale3d(1, 1, 1);transform:scale3d(1, 1, 1)}:host(.radio-disabled){opacity:0.3}:host(.ion-focused) .radio-icon::after{border-radius:var(--inner-border-radius);left:-12px;top:-12px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint, #4c8dff);content:"";opacity:0.2}:host-context([dir=rtl]):host(.ion-focused) .radio-icon::after,:host-context([dir=rtl]).ion-focused .radio-icon::after{left:unset;right:unset;right:-12px}:host(.in-item){margin-left:0;margin-right:0;margin-top:9px;margin-bottom:9px;display:block;position:static}:host(.in-item[slot=start]){margin-left:4px;margin-right:36px;margin-top:11px;margin-bottom:10px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:36px;margin-inline-end:36px}}'};var b=function(){function e(r){var n=this;a(this,e),(0,l.r)(this,r),this.ionChange=(0,l.e)(this,"ionChange",7),this.inputId="ion-rg-"+g++,this.labelId="".concat(this.inputId,"-lbl"),this.allowEmptySelection=!1,this.name=this.inputId,this.setRadioTabindex=function(e){var r=n.getRadios(),i=r.find(function(t){return!t.disabled}),o=r.find(function(t){return t.value===e&&!t.disabled});if(i||o){var a,s=o||i,c=t(r);try{for(c.s();!(a=c.n()).done;){var l=a.value;l.setButtonTabindex(l===s?0:-1)}}catch(u){c.e(u)}finally{c.f()}}},this.onClick=function(t){t.preventDefault();var e=t.target&&t.target.closest("ion-radio");if(e){var r=e.value;r!==n.value?n.value=r:n.allowEmptySelection&&(n.value=void 0)}}}var r;return c(e,[{key:"valueChanged",value:function(t){this.setRadioTabindex(t),this.ionChange.emit({value:t})}},{key:"componentDidLoad",value:function(){this.setRadioTabindex(this.value)}},{key:"connectedCallback",value:(r=o(n().mark(function t(){var e,r;return n().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:(e=this.el.querySelector("ion-list-header")||this.el.querySelector("ion-item-divider"))&&(r=this.label=e.querySelector("ion-label"))&&(this.labelId=r.id=this.name+"-lbl");case 2:case"end":return t.stop()}},t,this)})),function(){return r.apply(this,arguments)})},{key:"getRadios",value:function(){return Array.from(this.el.querySelectorAll("ion-radio"))}},{key:"onKeydown",value:function(t){var e=!!this.el.closest("ion-select-popover");if(!t.target||this.el.contains(t.target)){var r=this.getRadios().filter(function(t){return!t.disabled});if(t.target&&r.includes(t.target)){var n,i=r.findIndex(function(e){return e===t.target}),o=r[i];["ArrowDown","ArrowRight"].includes(t.key)&&(n=i===r.length-1?r[0]:r[i+1]),["ArrowUp","ArrowLeft"].includes(t.key)&&(n=0===i?r[r.length-1]:r[i-1]),n&&r.includes(n)&&(n.setFocus(t),e||(this.value=n.value)),[" "].includes(t.key)&&(this.value=this.allowEmptySelection&&void 0!==this.value?void 0:o.value,t.preventDefault())}}}},{key:"render",value:function(){var t=this.label,e=this.labelId,r=this.el,n=this.name,i=this.value,o=(0,u.b)(this);return(0,h.e)(!0,r,n,i,!1),(0,l.h)(l.H,{role:"radiogroup","aria-labelledby":t?e:null,onClick:this.onClick,class:o})}},{key:"el",get:function(){return(0,l.i)(this)}}],[{key:"watchers",get:function(){return{value:["valueChanged"]}}}]),e}(),g=0},4881:function(t,e,i){"use strict";i.d(e,{c:function(){return s},g:function(){return c},h:function(){return a},o:function(){return u}});var a=function(t,e){return null!==e.closest(t)},s=function(t,e){return"string"==typeof t&&t.length>0?Object.assign(r({"ion-color":!0},"ion-color-".concat(t),!0),e):e},c=function(t){var e={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t}):[]}(t).forEach(function(t){return e[t]=!0}),e},l=/^[a-z][a-z0-9+\-.]*:/,u=function(){var t=o(n().mark(function t(e,r,i,o){var a;return n().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(null==e||"#"===e[0]||l.test(e)){t.next=4;break}if(!(a=document.querySelector("ion-router"))){t.next=4;break}return t.abrupt("return",(null!=r&&r.preventDefault(),a.push(e,i,o)));case 4:return t.abrupt("return",!1);case 5:case"end":return t.stop()}},t)}));return function(e,r,n,i){return t.apply(this,arguments)}}()}}])}();