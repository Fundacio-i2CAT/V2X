(self.webpackChunkv2x_frontend=self.webpackChunkv2x_frontend||[]).push([[4054],{4054:function(i,t,e){"use strict";e.r(t),e.d(t,{ion_img:function(){return s}});var o=e(1429),r=e(8931),n=e(1444);const s=class{constructor(i){(0,o.r)(this,i),this.ionImgWillLoad=(0,o.e)(this,"ionImgWillLoad",7),this.ionImgDidLoad=(0,o.e)(this,"ionImgDidLoad",7),this.ionError=(0,o.e)(this,"ionError",7),this.inheritedAttributes={},this.onLoad=()=>{this.ionImgDidLoad.emit()},this.onError=()=>{this.ionError.emit()}}srcChanged(){this.addIO()}componentWillLoad(){this.inheritedAttributes=(0,n.j)(this.el,["draggable"])}componentDidLoad(){this.addIO()}addIO(){void 0!==this.src&&("undefined"!=typeof window&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype?(this.removeIO(),this.io=new IntersectionObserver(i=>{i[i.length-1].isIntersecting&&(this.load(),this.removeIO())}),this.io.observe(this.el)):setTimeout(()=>this.load(),200))}load(){this.loadError=this.onError,this.loadSrc=this.src,this.ionImgWillLoad.emit()}removeIO(){this.io&&(this.io.disconnect(),this.io=void 0)}render(){const{loadSrc:i,alt:t,onLoad:e,loadError:n,inheritedAttributes:s}=this,{draggable:d}=s;return(0,o.h)(o.H,{class:(0,r.b)(this)},(0,o.h)("img",{decoding:"async",src:i,alt:t,onLoad:e,onError:n,part:"image",draggable:h(d)}))}get el(){return(0,o.i)(this)}static get watchers(){return{src:["srcChanged"]}}},h=i=>{switch(i){case"true":return!0;case"false":return!1;default:return}};s.style=":host{display:block;-o-object-fit:contain;object-fit:contain}img{display:block;width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}"}}]);