(self.webpackChunkv2x_frontend=self.webpackChunkv2x_frontend||[]).push([[9238],{3397:function(t,e,i){"use strict";i.d(e,{a:function(){return a},b:function(){return o},p:function(){return r}});const r=(t,...e)=>console.warn(`[Ionic Warning]: ${t}`,...e),o=(t,...e)=>console.error(`[Ionic Error]: ${t}`,...e),a=(t,...e)=>console.error(`<${t.tagName.toLowerCase()}> must be used inside ${e.join(" or ")}.`)},9238:function(t,e,i){"use strict";i.r(e),i.d(e,{ion_modal:function(){return Y}});var r,o=i(1429),a=i(8931),n=i(5667),s=i(3409),d=i(1444),l=i(104),p=i(3397),h=i(1494),c=i(4221),m=i(4881),u=i(3645),f=i(5296),b=i(7572),g=i(1200);i(8665),function(t){t.Dark="DARK",t.Light="LIGHT",t.Default="DEFAULT"}(r||(r={}));const w={getEngine(){var t;return(null===(t=null==h.w?void 0:h.w.Capacitor)||void 0===t?void 0:t.isPluginAvailable("StatusBar"))&&(null==h.w?void 0:h.w.Capacitor.Plugins.StatusBar)},supportsDefaultStatusBarStyle(){var t;return!!(null===(t=null==h.w?void 0:h.w.Capacitor)||void 0===t?void 0:t.PluginHeaders)},setStyle(t){const e=this.getEngine();e&&e.setStyle(t)},getStyle:async function(){const t=this.getEngine();if(!t)return r.Default;const{style:e}=await t.getInfo();return e}},k=(t,e)=>{if(1===e)return 0;const i=1/(1-e);return t*i+-e*i},y=()=>{!h.w||h.w.innerWidth>=768||!w.supportsDefaultStatusBarStyle()||w.setStyle({style:r.Dark})},v=(t=r.Default)=>{!h.w||h.w.innerWidth>=768||!w.supportsDefaultStatusBarStyle()||w.setStyle({style:t})},x=async(t,e)=>{"function"==typeof t.canDismiss&&await t.canDismiss(void 0,c.G)&&(e.isRunning()?e.onFinish(()=>{t.dismiss(void 0,"handler")},{oneTimeCallback:!0}):t.dismiss(void 0,"handler"))},D=t=>.00255275*2.71828**(-14.9619*t)-1.00255*2.71828**(-.0380968*t)+1,S=t=>{const{currentBreakpoint:e,backdropBreakpoint:i}=t,r=void 0===i||i<e,o=r?`calc(var(--backdrop-opacity) * ${e})`:"0",a=(0,f.c)("backdropAnimation").fromTo("opacity",0,o);return r&&a.beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),{wrapperAnimation:(0,f.c)("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:"translateY(100%)"},{offset:1,opacity:1,transform:`translateY(${100-100*e}%)`}]),backdropAnimation:a}},A=t=>{const{currentBreakpoint:e,backdropBreakpoint:i}=t,r=`calc(var(--backdrop-opacity) * ${k(e,i)})`,o=[{offset:0,opacity:r},{offset:1,opacity:0}],a=[{offset:0,opacity:r},{offset:i,opacity:0},{offset:1,opacity:0}],n=(0,f.c)("backdropAnimation").keyframes(0!==i?a:o);return{wrapperAnimation:(0,f.c)("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:`translateY(${100-100*e}%)`},{offset:1,opacity:1,transform:"translateY(100%)"}]),backdropAnimation:n}},E=(t,e)=>{const{presentingEl:i,currentBreakpoint:r}=e,o=(0,d.g)(t),{wrapperAnimation:a,backdropAnimation:n}=void 0!==r?S(e):{backdropAnimation:(0,f.c)().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation:(0,f.c)().fromTo("transform","translateY(100vh)","translateY(0vh)")};n.addElement(o.querySelector("ion-backdrop")),a.addElement(o.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});const s=(0,f.c)("entering-base").addElement(t).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(a);if(i){const t=window.innerWidth<768,e="ION-MODAL"===i.tagName&&void 0!==i.presentingElement,r=(0,d.g)(i),o=(0,f.c)().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}),l=document.body;if(t){const t=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",r=`translateY(${e?"-10px":t}) scale(0.93)`;o.afterStyles({transform:r}).beforeAddWrite(()=>l.style.setProperty("background-color","black")).addElement(i).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:r,borderRadius:"10px 10px 0 0"}]),s.addAnimation(o)}else if(s.addAnimation(n),e){const t=`translateY(-10px) scale(${e?.93:1})`;o.afterStyles({transform:t}).addElement(r.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:t}]);const i=(0,f.c)().afterStyles({transform:t}).addElement(r.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:t}]);s.addAnimation([o,i])}else a.fromTo("opacity","0","1")}else s.addAnimation(n);return s},B=(t,e,i=500)=>{const{presentingEl:r,currentBreakpoint:o}=e,a=(0,d.g)(t),{wrapperAnimation:n,backdropAnimation:s}=void 0!==o?A(e):{backdropAnimation:(0,f.c)().fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation:(0,f.c)().fromTo("transform","translateY(0vh)","translateY(100vh)")};s.addElement(a.querySelector("ion-backdrop")),n.addElement(a.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});const l=(0,f.c)("leaving-base").addElement(t).easing("cubic-bezier(0.32,0.72,0,1)").duration(i).addAnimation(n);if(r){const t=window.innerWidth<768,e="ION-MODAL"===r.tagName&&void 0!==r.presentingElement,i=(0,d.g)(r),o=(0,f.c)().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish(t=>{1===t&&(r.style.setProperty("overflow",""),Array.from(a.querySelectorAll("ion-modal")).filter(t=>void 0!==t.presentingElement).length<=1&&a.style.setProperty("background-color",""))}),a=document.body;if(t){const t=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",i=`translateY(${e?"-10px":t}) scale(0.93)`;o.addElement(r).keyframes([{offset:0,filter:"contrast(0.85)",transform:i,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]),l.addAnimation(o)}else if(l.addAnimation(s),e){const t=`translateY(-10px) scale(${e?.93:1})`;o.addElement(i.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:t},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);const r=(0,f.c)().addElement(i.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:t},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);l.addAnimation([o,r])}else n.fromTo("opacity","1","0")}else l.addAnimation(s);return l},C=(t,e)=>{const{currentBreakpoint:i}=e,r=(0,d.g)(t),{wrapperAnimation:o,backdropAnimation:a}=void 0!==i?S(e):{backdropAnimation:(0,f.c)().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation:(0,f.c)().keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}])};return a.addElement(r.querySelector("ion-backdrop")),o.addElement(r.querySelector(".modal-wrapper")),(0,f.c)().addElement(t).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([a,o])},T=(t,e)=>{const{currentBreakpoint:i}=e,r=(0,d.g)(t),{wrapperAnimation:o,backdropAnimation:a}=void 0!==i?A(e):{backdropAnimation:(0,f.c)().fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation:(0,f.c)().keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}])};return a.addElement(r.querySelector("ion-backdrop")),o.addElement(r.querySelector(".modal-wrapper")),(0,f.c)().easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([a,o])},Y=class{constructor(t){(0,o.r)(this,t),this.didPresent=(0,o.e)(this,"ionModalDidPresent",7),this.willPresent=(0,o.e)(this,"ionModalWillPresent",7),this.willDismiss=(0,o.e)(this,"ionModalWillDismiss",7),this.didDismiss=(0,o.e)(this,"ionModalDidDismiss",7),this.ionBreakpointDidChange=(0,o.e)(this,"ionBreakpointDidChange",7),this.didPresentShorthand=(0,o.e)(this,"didPresent",7),this.willPresentShorthand=(0,o.e)(this,"willPresent",7),this.willDismissShorthand=(0,o.e)(this,"willDismiss",7),this.didDismissShorthand=(0,o.e)(this,"didDismiss",7),this.modalIndex=M++,this.coreDelegate=(0,s.C)(),this.isSheetModal=!1,this.inheritedAttributes={},this.inline=!1,this.gestureAnimationDismissing=!1,this.presented=!1,this.hasController=!1,this.keyboardClose=!0,this.backdropBreakpoint=0,this.handleBehavior="none",this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.swipeToClose=!1,this.isOpen=!1,this.keepContentsMounted=!1,this.configureTriggerInteraction=()=>{const{trigger:t,el:e,destroyTriggerInteraction:i}=this;if(i&&i(),void 0===t)return;const r=void 0!==t?document.getElementById(t):null;r?this.destroyTriggerInteraction=((t,e)=>{const i=()=>{e.present()};return t.addEventListener("click",i),()=>{t.removeEventListener("click",i)}})(r,e):(0,p.p)(`A trigger element with the ID "${t}" was not found in the DOM. The trigger element must be in the DOM when the "trigger" property is set on ion-modal.`,this.el)},this.onHandleClick=()=>{const{sheetTransition:t,handleBehavior:e}=this;"cycle"===e&&void 0===t&&this.moveToNextBreakpoint()},this.onBackdropTap=()=>{const{sheetTransition:t}=this;void 0===t&&this.dismiss(void 0,c.B)},this.onLifecycle=t=>{const e=this.usersElement,i=P[t.type];if(e&&i){const r=new CustomEvent(i,{bubbles:!1,cancelable:!1,detail:t.detail});e.dispatchEvent(r)}}}onIsOpenChange(t,e){!0===t&&!1===e?this.present():!1===t&&!0===e&&this.dismiss()}onTriggerChange(){this.configureTriggerInteraction()}async swipeToCloseChanged(t){this.gesture?this.gesture.enable(t):t&&this.initSwipeToClose()}breakpointsChanged(t){void 0!==t&&(this.sortedBreakpoints=t.sort((t,e)=>t-e))}connectedCallback(){const{configureTriggerInteraction:t,el:e}=this;(0,c.e)(e),t()}disconnectedCallback(){const{destroyTriggerInteraction:t}=this;t&&t()}componentWillLoad(){const{breakpoints:t,initialBreakpoint:e,swipeToClose:i,el:r}=this;this.inheritedAttributes=(0,d.j)(r,["aria-label","role"]),this.modalId=this.el.hasAttribute("id")?this.el.getAttribute("id"):`ion-modal-${this.modalIndex}`,(this.isSheetModal=void 0!==t&&void 0!==e)&&(this.currentBreakpoint=this.initialBreakpoint),void 0===t||void 0===e||t.includes(e)||(0,p.p)("Your breakpoints array must include the initialBreakpoint value."),i&&(0,p.p)("swipeToClose has been deprecated in favor of canDismiss.\n\nIf you want a card modal to be swipeable, set canDismiss to `true`. In the next major release of Ionic, swipeToClose will be removed, and all card modals will be swipeable by default.")}componentDidLoad(){!0===this.isOpen&&(0,d.r)(()=>this.present()),this.breakpointsChanged(this.breakpoints)}getDelegate(t=!1){if(this.workingDelegate&&!t)return{delegate:this.workingDelegate,inline:this.inline};const e=this.inline=null!==this.el.parentNode&&!this.hasController;return{inline:e,delegate:this.workingDelegate=e?this.delegate||this.coreDelegate:this.delegate}}async checkCanDismiss(t,e){const{canDismiss:i}=this;return void 0===i||("function"==typeof i?i(t,e):i)}async present(){if(this.presented)return;void 0!==this.currentTransition&&await this.currentTransition,this.currentBreakpoint=this.initialBreakpoint;const{inline:t,delegate:e}=this.getDelegate(!0);this.usersElement=await(0,s.a)(e,this.el,this.component,["ion-page"],this.componentProps,t),await(0,u.e)(this.usersElement),(0,o.c)(()=>this.el.classList.add("show-modal")),this.currentTransition=(0,c.d)(this,"modalEnter",E,C,{presentingEl:this.presentingElement,currentBreakpoint:this.initialBreakpoint,backdropBreakpoint:this.backdropBreakpoint}),"undefined"!=typeof window&&(this.keyboardOpenCallback=()=>{this.gesture&&(this.gesture.enable(!1),(0,d.r)(()=>{this.gesture&&this.gesture.enable(!0)}))},window.addEventListener(l.KEYBOARD_DID_OPEN,this.keyboardOpenCallback));const i=void 0!==this.presentingElement&&(this.swipeToClose||void 0!==this.canDismiss);i&&"ios"===(0,a.b)(this)&&(this.statusBarStyle=await w.getStyle(),y()),await this.currentTransition,this.isSheetModal?this.initSheetGesture():i&&this.initSwipeToClose(),this.currentTransition=void 0}initSwipeToClose(){var t;if("ios"!==(0,a.b)(this))return;const{el:e}=this,i=this.leaveAnimation||a.c.get("modalLeave",B),o=this.animation=i(e,{presentingEl:this.presentingElement});if(!(0,n.a)(e))return void(0,n.p)(e);const s=null!==(t=this.statusBarStyle)&&void 0!==t?t:r.Default;this.gesture=((t,e,i,r)=>{const o=t.offsetHeight;let a=!1,s=!1,l=null,p=null,h=!0,c=0;const m=(0,g.createGesture)({el:t,gestureName:"modalSwipeToClose",gesturePriority:39,direction:"y",threshold:10,canStart:t=>{const e=t.event.target;if(null===e||!e.closest)return!0;if(l=(0,n.f)(e),l){if((0,n.i)(l)){const t=(0,d.g)(l);p=t.querySelector(".inner-scroll")}else p=l;return!l.querySelector("ion-refresher")&&0===p.scrollTop}return null===e.closest("ion-footer")},onStart:i=>{const{deltaY:r}=i;h=!l||!(0,n.i)(l)||l.scrollY,s=void 0!==t.canDismiss&&!0!==t.canDismiss,r>0&&l&&(0,n.d)(l),e.progressStart(!0,a?1:0)},onMove:t=>{const{deltaY:r}=t;r>0&&l&&(0,n.d)(l);const a=t.deltaY/o,p=a>=0&&s,h=p?.2:.9999,m=p?D(a/h):a,u=(0,d.l)(1e-4,m,h);e.progressStep(u),u>=.5&&c<.5?v(i):u<.5&&c>=.5&&y(),c=u},onEnd:i=>{const p=i.velocityY,c=i.deltaY/o,u=c>=0&&s,f=u?.2:.9999,g=u?D(c/f):c,w=(0,d.l)(1e-4,g,f),k=!u&&(i.deltaY+1e3*p)/o>=.5;let y=k?-.001:.001;k?(e.easing("cubic-bezier(0.32, 0.72, 0, 1)"),y+=(0,b.g)([0,0],[.32,.72],[0,1],[1,1],w)[0]):(e.easing("cubic-bezier(1, 0, 0.68, 0.28)"),y+=(0,b.g)([0,0],[1,0],[.68,.28],[1,1],w)[0]);const v=((t,e)=>(0,d.l)(400,t/Math.abs(1.1*e),500))(k?c*o:(1-w)*o,p);a=k,m.enable(!1),l&&(0,n.r)(l,h),e.onFinish(()=>{k||m.enable(!0)}).progressEnd(k?1:0,y,v),u&&w>f/4?x(t,e):k&&r()}});return m})(e,o,s,()=>{this.gestureAnimationDismissing=!0,this.animation.onFinish(async()=>{await this.dismiss(void 0,c.G),this.gestureAnimationDismissing=!1})}),this.gesture.enable(!0)}initSheetGesture(){const{wrapperEl:t,initialBreakpoint:e,backdropBreakpoint:i}=this;if(!t||void 0===e)return;const r=this.enterAnimation||a.c.get("modalEnter",E),o=this.animation=r(this.el,{presentingEl:this.presentingElement,currentBreakpoint:e,backdropBreakpoint:i});o.progressStart(!0,1);const{gesture:n,moveSheetToBreakpoint:s}=((t,e,i,r,o,a,n=[],s,l,p)=>{const h={WRAPPER_KEYFRAMES:[{offset:0,transform:"translateY(0%)"},{offset:1,transform:"translateY(100%)"}],BACKDROP_KEYFRAMES:0!==o?[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1-o,opacity:0},{offset:1,opacity:0}]:[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1,opacity:.01}]},c=t.querySelector("ion-content"),m=i.clientHeight;let u=r,f=0,b=!1;const w=a.childAnimations.find(t=>"wrapperAnimation"===t.id),y=a.childAnimations.find(t=>"backdropAnimation"===t.id),v=n[n.length-1],S=n[0],A=()=>{t.style.setProperty("pointer-events","auto"),e.style.setProperty("pointer-events","auto"),t.classList.remove("ion-disable-focus-trap")},E=()=>{t.style.setProperty("pointer-events","none"),e.style.setProperty("pointer-events","none"),t.classList.add("ion-disable-focus-trap")};w&&y&&(w.keyframes([...h.WRAPPER_KEYFRAMES]),y.keyframes([...h.BACKDROP_KEYFRAMES]),a.progressStart(!0,1-u),u>o?A():E()),c&&u!==v&&(c.scrollY=!1);const B=e=>{const{breakpoint:i,canDismiss:r,breakpointOffset:s}=e,m=r&&0===i,f=m?u:i,b=0!==f;return u=0,w&&y&&(w.keyframes([{offset:0,transform:`translateY(${100*s}%)`},{offset:1,transform:`translateY(${100*(1-f)}%)`}]),y.keyframes([{offset:0,opacity:`calc(var(--backdrop-opacity) * ${k(1-s,o)})`},{offset:1,opacity:`calc(var(--backdrop-opacity) * ${k(f,o)})`}]),a.progressStep(0)),C.enable(!1),m?x(t,a):b||l(),new Promise(t=>{a.onFinish(()=>{b?w&&y?(0,d.r)(()=>{w.keyframes([...h.WRAPPER_KEYFRAMES]),y.keyframes([...h.BACKDROP_KEYFRAMES]),a.progressStart(!0,1-f),u=f,p(u),c&&u===n[n.length-1]&&(c.scrollY=!0),u>o?A():E(),C.enable(!0),t()}):(C.enable(!0),t()):t()},{oneTimeCallback:!0}).progressEnd(1,0,500)})},C=(0,g.createGesture)({el:i,gestureName:"modalSheet",gesturePriority:40,direction:"y",threshold:10,canStart:t=>{const e=t.event.target.closest("ion-content");return u=s(),1!==u||!e},onStart:()=>{b=void 0!==t.canDismiss&&!0!==t.canDismiss&&0===S,c&&(c.scrollY=!1),(0,d.r)(()=>{t.focus()}),a.progressStart(!0,1-u)},onMove:t=>{const e=n.length>1?1-n[1]:void 0,i=1-u+t.deltaY/m,r=void 0!==e&&i>=e&&b,o=r?.95:.9999,s=r&&void 0!==e?e+D((i-e)/(o-e)):i;f=(0,d.l)(1e-4,s,o),a.progressStep(f)},onEnd:t=>{const e=u-(t.deltaY+350*t.velocityY)/m,i=n.reduce((t,i)=>Math.abs(i-e)<Math.abs(t-e)?i:t);B({breakpoint:i,breakpointOffset:f,canDismiss:b})}});return{gesture:C,moveSheetToBreakpoint:B}})(this.el,this.backdropEl,t,e,i,o,this.sortedBreakpoints,()=>{var t;return null!==(t=this.currentBreakpoint)&&void 0!==t?t:0},()=>this.sheetOnDismiss(),t=>{this.currentBreakpoint!==t&&(this.currentBreakpoint=t,this.ionBreakpointDidChange.emit({breakpoint:t}))});this.gesture=n,this.moveSheetToBreakpoint=s,this.gesture.enable(!0)}sheetOnDismiss(){this.gestureAnimationDismissing=!0,this.animation.onFinish(async()=>{this.currentBreakpoint=0,this.ionBreakpointDidChange.emit({breakpoint:this.currentBreakpoint}),await this.dismiss(void 0,c.G),this.gestureAnimationDismissing=!1})}async dismiss(t,e){var i;if(this.gestureAnimationDismissing&&e!==c.G)return!1;if("handler"!==e&&!(await this.checkCanDismiss(t,e)))return!1;void 0!==this.presentingElement&&(this.swipeToClose||void 0!==this.canDismiss)&&"ios"===(0,a.b)(this)&&v(this.statusBarStyle),"undefined"!=typeof window&&this.keyboardOpenCallback&&(window.removeEventListener(l.KEYBOARD_DID_OPEN,this.keyboardOpenCallback),this.keyboardOpenCallback=void 0),void 0!==this.currentTransition&&await this.currentTransition;const r=c.h.get(this)||[];this.currentTransition=(0,c.f)(this,t,e,"modalLeave",B,T,{presentingEl:this.presentingElement,currentBreakpoint:null!==(i=this.currentBreakpoint)&&void 0!==i?i:this.initialBreakpoint,backdropBreakpoint:this.backdropBreakpoint});const n=await this.currentTransition;if(n){const{delegate:t}=this.getDelegate();await(0,s.d)(t,this.usersElement),(0,o.c)(()=>this.el.classList.remove("show-modal")),this.animation&&this.animation.destroy(),this.gesture&&this.gesture.destroy(),r.forEach(t=>t.destroy())}return this.currentBreakpoint=void 0,this.currentTransition=void 0,this.animation=void 0,n}onDidDismiss(){return(0,c.g)(this.el,"ionModalDidDismiss")}onWillDismiss(){return(0,c.g)(this.el,"ionModalWillDismiss")}async setCurrentBreakpoint(t){if(!this.isSheetModal)return void(0,p.p)("setCurrentBreakpoint is only supported on sheet modals.");if(!this.breakpoints.includes(t))return void(0,p.p)(`Attempted to set invalid breakpoint value ${t}. Please double check that the breakpoint value is part of your defined breakpoints.`);const{currentBreakpoint:e,moveSheetToBreakpoint:i,canDismiss:r,breakpoints:o}=this;e!==t&&i&&(this.sheetTransition=i({breakpoint:t,breakpointOffset:1-e,canDismiss:void 0!==r&&!0!==r&&0===o[0]}),await this.sheetTransition,this.sheetTransition=void 0)}async getCurrentBreakpoint(){return this.currentBreakpoint}async moveToNextBreakpoint(){const{breakpoints:t,currentBreakpoint:e}=this;if(!t||null==e)return!1;const i=t.filter(t=>0!==t),r=i.indexOf(e),o=i[(r+1)%i.length];return await this.setCurrentBreakpoint(o),!0}render(){const{handle:t,isSheetModal:e,presentingElement:i,htmlAttributes:r,handleBehavior:n,inheritedAttributes:s}=this,d=!1!==t&&e,l=(0,a.b)(this),{modalId:p}=this,h=void 0!==i&&"ios"===l,c="cycle"===n;return(0,o.h)(o.H,Object.assign({"no-router":!0,tabindex:"-1"},r,{style:{zIndex:`${2e4+this.overlayIndex}`},class:Object.assign({[l]:!0,"modal-default":!h&&!e,"modal-card":h,"modal-sheet":e,"overlay-hidden":!0},(0,m.g)(this.cssClass)),id:p,onIonBackdropTap:this.onBackdropTap,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle}),(0,o.h)("ion-backdrop",{ref:t=>this.backdropEl=t,visible:this.showBackdrop,tappable:this.backdropDismiss,part:"backdrop"}),"ios"===l&&(0,o.h)("div",{class:"modal-shadow"}),(0,o.h)("div",Object.assign({role:"dialog"},s,{"aria-modal":"true",class:"modal-wrapper ion-overlay-wrapper",part:"content",ref:t=>this.wrapperEl=t}),d&&(0,o.h)("button",{class:"modal-handle",tabIndex:c?0:-1,"aria-label":"Activate to adjust the size of the dialog overlaying the screen",onClick:c?this.onHandleClick:void 0,part:"handle"}),(0,o.h)("slot",null)))}get el(){return(0,o.i)(this)}static get watchers(){return{isOpen:["onIsOpenChange"],trigger:["onTriggerChange"],swipeToClose:["swipeToCloseChanged"]}}},P={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};let M=0;Y.style={ios:':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;margin-left:auto;margin-right:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, #c0c0be);cursor:pointer;z-index:11}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.modal-handle{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.modal-handle::before{padding-left:4px;padding-right:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.modal-handle::before{padding-left:unset;padding-right:unset;-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px}}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}:host(.modal-card),:host(.modal-sheet){--border-radius:10px}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:10px}}.modal-wrapper{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: 1px){:host(.modal-card){--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: 1px){:host(.modal-card){--height:calc(100% - 40px)}}:host(.modal-card) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-card) .modal-wrapper,:host-context([dir=rtl]).modal-card .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host(.modal-card){--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}:host(.modal-card) .modal-shadow{display:none}:host(.modal-card) ion-backdrop{pointer-events:none}}@media screen and (min-width: 768px){:host(.modal-card){--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px;--backdrop-opacity:0;--box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}:host(.modal-card) .modal-wrapper{-webkit-box-shadow:none;box-shadow:none}:host(.modal-card) .modal-shadow{-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}}:host(.modal-sheet) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-sheet) .modal-wrapper,:host-context([dir=rtl]).modal-sheet .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}',md:':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;margin-left:auto;margin-right:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, #c0c0be);cursor:pointer;z-index:11}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.modal-handle{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.modal-handle::before{padding-left:4px;padding-right:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.modal-handle::before{padding-left:unset;padding-right:unset;-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px}}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:2px;--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}'}},4881:function(t,e,i){"use strict";i.d(e,{c:function(){return o},g:function(){return a},h:function(){return r},o:function(){return s}});const r=(t,e)=>null!==e.closest(t),o=(t,e)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,[`ion-color-${t}`]:!0},e):e,a=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},n=/^[a-z][a-z0-9+\-.]*:/,s=async(t,e,i,r)=>{if(null!=t&&"#"!==t[0]&&!n.test(t)){const o=document.querySelector("ion-router");if(o)return null!=e&&e.preventDefault(),o.push(t,i,r)}return!1}}}]);