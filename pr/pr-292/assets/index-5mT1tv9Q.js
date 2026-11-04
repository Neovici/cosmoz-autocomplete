import{e as x,r as Z,o as tt,K as et,l as K,f as b,A as F,h as it,H as st,M as nt,q as v,v as w,x as O,E as k,p as rt,b as E,y as L,c as N,g as X,L as ot,z as lt,B as at,a as y,d as ht,C as ct}from"./iframe-gHJpBhM8.js";import{_ as dt}from"./preload-helper-PPVm8Dsz.js";function ut(i){let t=i;return{get current(){return t},set current(e){t=e},get value(){return t},set value(e){t=e}}}function _t(i){return x(()=>ut(i),[])}const P={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},A=i=>(...t)=>({_$litDirective$:i,values:t});class D{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const C=(i,t)=>{const e=i._$AN;if(e===void 0)return!1;for(const s of e)s._$AO?.(t,!1),C(s,t);return!0},T=i=>{let t,e;do{if((t=i._$AM)===void 0)break;e=t._$AN,e.delete(i),i=t}while(e?.size===0)},Y=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),pt(t)}};function mt(i){this._$AN!==void 0?(T(this),this._$AM=i,Y(this)):this._$AM=i}function ft(i,t=!1,e=0){const s=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(s))for(let r=e;r<s.length;r++)C(s[r],!1),T(s[r]);else s!=null&&(C(s,!1),T(s));else C(this,i)}const pt=i=>{i.type==P.CHILD&&(i._$AP??=ft,i._$AQ??=mt)};class J extends D{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,s){super._$AT(t,e,s),Y(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(C(this,t),T(this))}setValue(t){if(Z(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}const I=(i,t)=>{const e=tt(et),s=K(i);b(()=>e(s),t)};function gt(i,t,e){return i?t(i):e?.(i)}const vt=(...i)=>{const t=new CSSStyleSheet;return t.replaceSync(i.join("")),t},B=new WeakMap,yt=A(class extends J{render(i){return F}update(i,[t]){const e=t!==this.G;return e&&this.G!==void 0&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.G=t,this.ht=i.options?.host,this.rt(this.ct=i.element)),F}rt(i){if(this.isConnected||(i=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let e=B.get(t);e===void 0&&(e=new WeakMap,B.set(t,e)),e.get(this.G)!==void 0&&this.G.call(this.ht,void 0),e.set(this.G,i),i!==void 0&&this.G.call(this.ht,i)}else this.G.value=i}get lt(){return typeof this.G=="function"?B.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Q=it(class extends st{update(){return this.state.host}});const j=(i,t,e)=>{const s=new Map;for(let n=t;n<=e;n++)s.set(i[n],n);return s},bt=A(class extends D{constructor(i){if(super(i),i.type!==P.CHILD)throw Error("repeat() can only be used in text expressions")}dt(i,t,e){let s;e===void 0?e=t:t!==void 0&&(s=t);const n=[],r=[];let o=0;for(const a of i)n[o]=s?s(a,o):o,r[o]=e(a,o),o++;return{values:r,keys:n}}render(i,t,e){return this.dt(i,t,e).values}update(i,[t,e,s]){const n=nt(i),{values:r,keys:o}=this.dt(t,e,s);if(!Array.isArray(n))return this.ut=o,r;const a=this.ut??=[],l=[];let d,f,h=0,u=n.length-1,c=0,_=r.length-1;for(;h<=u&&c<=_;)if(n[h]===null)h++;else if(n[u]===null)u--;else if(a[h]===o[c])l[c]=v(n[h],r[c]),h++,c++;else if(a[u]===o[_])l[_]=v(n[u],r[_]),u--,_--;else if(a[h]===o[_])l[_]=v(n[h],r[_]),w(i,l[_+1],n[h]),h++,_--;else if(a[u]===o[c])l[c]=v(n[u],r[c]),w(i,n[h],n[u]),u--,c++;else if(d===void 0&&(d=j(o,c,_),f=j(a,h,u)),d.has(a[h]))if(d.has(a[u])){const m=f.get(o[c]),g=m!==void 0?n[m]:null;if(g===null){const p=w(i,n[h]);v(p,r[c]),l[c]=p}else l[c]=v(g,r[c]),w(i,n[h],g),n[m]=null;c++}else O(n[u]),u--;else O(n[h]),h++;for(;c<=_;){const m=w(i,l[_+1]);v(m,r[c]),l[c++]=m}for(;h<=u;){const m=n[h++];m!==null&&O(m)}return this.ut=o,rt(i,l),k}});class M extends Event{constructor(t){super(M.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}}M.eventName="rangeChanged";class R extends Event{constructor(t){super(R.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}}R.eventName="visibilityChanged";class V extends Event{constructor(){super(V.eventName,{bubbles:!1})}}V.eventName="unpinned";class wt{constructor(t){this._element=null;const e=t??window;this._node=e,t&&(this._element=t)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}}class Ct extends wt{constructor(t,e){super(e),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);const s=this._node;this._originalScrollTo=s.scrollTo,this._originalScrollBy=s.scrollBy,this._originalScroll=s.scroll,this._attach(t)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(t,e){const s=typeof t=="number"&&typeof e=="number"?{left:t,top:e}:t;this._scrollTo(s)}scrollBy(t,e){const s=typeof t=="number"&&typeof e=="number"?{left:t,top:e}:t;s.top!==void 0&&(s.top+=this.scrollTop),s.left!==void 0&&(s.left+=this.scrollLeft),this._scrollTo(s)}_nativeScrollTo(t){this._originalScrollTo.bind(this._element||window)(t)}_scrollTo(t,e=null,s=null){this._end!==null&&this._end(),t.behavior==="smooth"?(this._setDestination(t),this._retarget=e,this._end=s):this._resetScrollState(),this._nativeScrollTo(t)}_setDestination(t){let{top:e,left:s}=t;return e=e===void 0?void 0:Math.max(0,Math.min(e,this.maxScrollTop)),s=s===void 0?void 0:Math.max(0,Math.min(s,this.maxScrollLeft)),this._destination!==null&&s===this._destination.left&&e===this._destination.top?!1:(this.__destination={top:e,left:s,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(t){this._destination&&this._setDestination(t)&&this._nativeScrollTo(this._destination)}managedScrollTo(t,e,s){return this._scrollTo(t,e,s),this._updateManagedScrollTo}correctScrollError(t){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(t),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){const{scrollTop:t,scrollLeft:e}=this;let{top:s,left:n}=this._destination;s=Math.min(s||0,this.maxScrollTop),n=Math.min(n||0,this.maxScrollLeft);const r=Math.abs(s-t),o=Math.abs(n-e);r<1&&o<1&&(this._end&&this._end(),this._resetScrollState())}}detach(t){return this._clients.delete(t),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(t){this._clients.add(t),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}}let G=typeof window<"u"?window.ResizeObserver:void 0;const H=Symbol("virtualizerRef"),S="virtualizer-sizer";let W;class Et{constructor(t){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!t)throw new Error("Virtualizer constructor requires a configuration object");if(t.hostElement)this._init(t);else throw new Error('Virtualizer configuration requires the "hostElement" property')}set items(t){Array.isArray(t)&&t!==this._items&&(this._itemsChanged=!0,this._items=t,this._schedule(this._updateLayout))}_init(t){this._isScroller=!!t.scroller,this._initHostElement(t);const e=t.layout||{};this._layoutInitialized=this._initLayout(e)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new G(()=>this._hostElementSizeChanged()),this._childrenRO=new G(this._childrenSizeChanged.bind(this))}_initHostElement(t){const e=this._hostElement=t.hostElement;this._applyVirtualizerStyles(),e[H]=this}connected(){this._initObservers();const t=this._isScroller;this._clippingAncestors=xt(this._hostElement,t),this._scrollerController=new Ct(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(t=>{t.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(t),this._hostElementRO.observe(t)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(t=>this._childrenRO.observe(t)),this._scrollEventListeners.forEach(t=>t.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){this._scrollEventListeners.forEach(t=>t.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],this._scrollerController?.detach(this),this._scrollerController=null,this._mutationObserver?.disconnect(),this._mutationObserver=null,this._hostElementRO?.disconnect(),this._hostElementRO=null,this._childrenRO?.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected"),this._connected=!1}_applyVirtualizerStyles(){const e=this._hostElement.style;e.display=e.display||"block",e.position=e.position||"relative",e.contain=e.contain||"size layout",this._isScroller&&(e.overflow=e.overflow||"auto",e.minHeight=e.minHeight||"150px")}_getSizer(){const t=this._hostElement;if(!this._sizer){let e=t.querySelector(`[${S}]`);e||(e=document.createElement("div"),e.setAttribute(S,""),t.appendChild(e)),Object.assign(e.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),e.textContent="&nbsp;",e.setAttribute(S,""),this._sizer=e}return this._sizer}async updateLayoutConfig(t){await this._layoutInitialized;const e=t.type||W;if(typeof e=="function"&&this._layout instanceof e){const s={...t};return delete s.type,this._layout.config=s,!0}return!1}async _initLayout(t){let e,s;if(typeof t.type=="function"){s=t.type;const n={...t};delete n.type,e=n}else e=t;s===void 0&&(W=s=(await dt(()=>import("./flow-BqIEBwW6.js"),[],import.meta.url)).FlowLayout),this._layout=new s(n=>this._handleLayoutMessage(n),e),this._layout.measureChildren&&typeof this._layout.updateItemSizes=="function"&&(typeof this._layout.measureChildren=="function"&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){const t=window.performance.now(),e=t-this._benchmarkStart,n=performance.getEntriesByName("uv-virtualizing","measure").filter(r=>r.startTime>=this._benchmarkStart&&r.startTime<t).reduce((r,o)=>r+o.duration,0);return this._benchmarkStart=null,{timeElapsed:e,virtualizationTime:n}}return null}_measureChildren(){const t={},e=this._children,s=this._measureChildOverride||this._measureChild;for(let n=0;n<e.length;n++){const r=e[n],o=this._first+n;(this._itemsChanged||this._toBeMeasured.has(r))&&(t[o]=s.call(this,r,this._items[o]))}this._childMeasurements=t,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(t){const{width:e,height:s}=t.getBoundingClientRect();return Object.assign({width:e,height:s},St(t))}async _schedule(t){this._scheduled.has(t)||(this._scheduled.add(t),await Promise.resolve(),this._scheduled.delete(t),t.call(this))}async _updateDOM(t){this._scrollSize=t.scrollSize,this._adjustRange(t.range),this._childrenPos=t.childPositions,this._scrollError=t.scrollError||null;const{_rangeChanged:e,_itemsChanged:s}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(e||s)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(t=>this._childrenRO.observe(t)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(t){console.warn("Error measuring performance data: ",t)}window.performance.mark("uv-start")}this._scrollerController.correctingScrollError===!1&&this._layout?.unpin(),this._schedule(this._updateLayout)}handleEvent(t){t.type==="scroll"?(t.currentTarget===window||this._clippingAncestors.includes(t.currentTarget))&&this._handleScrollEvent():console.warn("event not handled",t)}_handleLayoutMessage(t){t.type==="stateChanged"?this._updateDOM(t):t.type==="visibilityChanged"?(this._firstVisible=t.firstVisible,this._lastVisible=t.lastVisible,this._notifyVisibility()):t.type==="unpinned"&&this._hostElement.dispatchEvent(new V)}get _children(){const t=[];let e=this._hostElement.firstElementChild;for(;e;)e.hasAttribute(S)||t.push(e),e=e.nextElementSibling;return t}_updateView(){const t=this._hostElement,e=this._scrollerController?.element,s=this._layout;if(t&&e&&s){let n,r,o,a;const l=t.getBoundingClientRect();n=0,r=0,o=window.innerHeight,a=window.innerWidth;const d=this._clippingAncestors.map(p=>p.getBoundingClientRect());d.unshift(l);for(const p of d)n=Math.max(n,p.top),r=Math.max(r,p.left),o=Math.min(o,p.bottom),a=Math.min(a,p.right);const f=e.getBoundingClientRect(),h={left:l.left-f.left,top:l.top-f.top},u={width:e.scrollWidth,height:e.scrollHeight},c=n-l.top+t.scrollTop,_=r-l.left+t.scrollLeft,m=Math.max(0,o-n),g=Math.max(0,a-r);s.viewportSize={width:g,height:m},s.viewportScroll={top:c,left:_},s.totalScrollSize=u,s.offsetWithinScroller=h}}_sizeHostElement(t){const s=t&&t.width!==null?Math.min(82e5,t.width):0,n=t&&t.height!==null?Math.min(82e5,t.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${s}px, ${n}px)`;else{const r=this._hostElement.style;r.minWidth=s?`${s}px`:"100%",r.minHeight=n?`${n}px`:"100%"}}_positionChildren(t){t&&t.forEach(({top:e,left:s,width:n,height:r,xOffset:o,yOffset:a},l)=>{const d=this._children[l-this._first];d&&(d.style.position="absolute",d.style.boxSizing="border-box",d.style.transform=`translate(${s}px, ${e}px)`,n!==void 0&&(d.style.width=n+"px"),r!==void 0&&(d.style.height=r+"px"),d.style.left=o===void 0?null:o+"px",d.style.top=a===void 0?null:a+"px")})}async _adjustRange(t){const{_first:e,_last:s,_firstVisible:n,_lastVisible:r}=this;this._first=t.first,this._last=t.last,this._firstVisible=t.firstVisible,this._lastVisible=t.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==e||this._last!==s,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==n||this._lastVisible!==r}_correctScrollError(){if(this._scrollError){const{scrollTop:t,scrollLeft:e}=this._scrollerController,{top:s,left:n}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:t-s,left:e-n})}}element(t){return t===1/0&&(t=this._items.length-1),this._items?.[t]===void 0?void 0:{scrollIntoView:(e={})=>this._scrollElementIntoView({...e,index:t})}}_scrollElementIntoView(t){if(t.index>=this._first&&t.index<=this._last)this._children[t.index-this._first].scrollIntoView(t);else if(t.index=Math.min(t.index,this._items.length-1),t.behavior==="smooth"){const e=this._layout.getScrollIntoViewCoordinates(t),{behavior:s}=t;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(e,{behavior:s}),()=>this._layout.getScrollIntoViewCoordinates(t),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=t}else this._layout.pin=t}_checkScrollIntoViewTarget(t){const{index:e}=this._scrollIntoViewTarget||{};e&&t?.has(e)&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new M({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new R({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((t,e)=>{this._layoutCompleteResolver=t,this._layoutCompleteRejecter=e})),this._layoutCompletePromise}_rejectLayoutCompletePromise(t){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(t),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(t){if(this._layout?.measureChildren){for(const e of t)this._toBeMeasured.set(e.target,e.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}}function St(i){const t=window.getComputedStyle(i);return{marginTop:z(t.marginTop),marginRight:z(t.marginRight),marginBottom:z(t.marginBottom),marginLeft:z(t.marginLeft)}}function z(i){const t=i?parseFloat(i):NaN;return Number.isNaN(t)?0:t}function U(i){if(i.assignedSlot!==null)return i.assignedSlot;if(i.parentElement!==null)return i.parentElement;const t=i.parentNode;return t&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host||null}function zt(i,t=!1){const e=[];let s=t?i:U(i);for(;s!==null;)e.push(s),s=U(s);return e}function xt(i,t=!1){let e=!1;return zt(i,t).filter(s=>{if(e)return!1;const n=getComputedStyle(s);return e=n.position==="fixed",n.overflow!=="visible"})}const kt=i=>i,Lt=(i,t)=>E`${t}: ${JSON.stringify(i,null,2)}`;class Tt extends J{constructor(t){if(super(t),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(e,s)=>Lt(e,s+this._first),this._keyFunction=(e,s)=>kt(e,s+this._first),this._items=[],t.type!==P.CHILD)throw new Error("The virtualize directive can only be used in child expressions")}render(t){t&&this._setFunctions(t);const e=[];if(this._first>=0&&this._last>=this._first)for(let s=this._first;s<=this._last;s++)e.push(this._items[s]);return bt(e,this._keyFunction,this._renderItem)}update(t,[e]){this._setFunctions(e);const s=this._items!==e.items;return this._items=e.items||[],this._virtualizer?this._updateVirtualizerConfig(t,e):this._initialize(t,e),s?k:this.render()}async _updateVirtualizerConfig(t,e){if(!await this._virtualizer.updateLayoutConfig(e.layout||{})){const n=t.parentNode;this._makeVirtualizer(n,e)}this._virtualizer.items=this._items}_setFunctions(t){const{renderItem:e,keyFunction:s}=t;e&&(this._renderItem=(n,r)=>e(n,r+this._first)),s&&(this._keyFunction=(n,r)=>s(n,r+this._first))}_makeVirtualizer(t,e){this._virtualizer&&this._virtualizer.disconnected();const{layout:s,scroller:n,items:r}=e;this._virtualizer=new Et({hostElement:t,layout:s,scroller:n}),this._virtualizer.items=r,this._virtualizer.connected()}_initialize(t,e){const s=t.parentNode;s&&s.nodeType===1&&(s.addEventListener("rangeChanged",n=>{this._first=n.first,this._last=n.last,this.setValue(this.render())}),this._makeVirtualizer(s,e))}disconnected(){this._virtualizer?.disconnected()}reconnected(){this._virtualizer?.connected()}}const $t=A(Tt),At=(i,t)=>{if(!i||!t)return;const e=Object.keys(t);return Object.fromEntries(Object.keys(i).flatMap(s=>e.includes(s)?[]:[[s,void 0]]))};class Mt extends D{_props;render(t){return k}update(t,[e]){return this._props!==e&&Object.assign(t.element,At(this._props,e),this._props=e),k}}const Rt=A(Mt),Vt=i=>{const t=Q(),e=x(()=>new CSSStyleSheet,[]);b(()=>{t.shadowRoot.adoptedStyleSheets=[...t.shadowRoot.adoptedStyleSheets,e]},[]),b(()=>{e.replaceSync(i)},[i])};function Ot(i){return i?t=>t?.[i]:L}const te=i=>{const t=Ot(i);return e=>typeof e=="string"?e:t(e)?.toString()||""},It=i=>t=>{const e={};for(const s in t)i.includes(s)&&(e[s]=t[s]);return e},Bt="data:image/svg+xml,%3Csvg width='11' height='8' viewBox='0 0 11 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.5 1L5.20039 7.04766L1.66348 3.46152' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",Nt="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E",Ht=N`
	:host {
		display: block;
		font-family: var(--cz-font-body);
		background: var(--cz-color-bg-primary);
		backdrop-filter: blur(16px) saturate(180%);
		-webkit-backdrop-filter: blur(16px) saturate(180%);
		border-radius: var(--cz-radius-md);
		box-shadow: 0 0 0 1px var(--cz-color-border-primary);
		text-transform: var(--cosmoz-autocomplete-listbox-text-transform, initial);
		overflow: hidden;
		padding-block: var(--cz-spacing);
	}
	.items {
		position: relative;
		overflow-y: auto;
		scrollbar-width: thin;
		contain: layout paint !important;
		padding-inline: calc(var(--cz-spacing) * 1.5);
		min-width: calc(var(--cz-spacing) * 20);
	}
	:host(:focus-within) {
		outline: none;
		box-shadow: var(--cz-focus-ring);
	}
	.items:focus-visible {
		outline: none;
	}
	.item {
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		font-weight: var(--cz-font-weight-regular);
		box-sizing: border-box;
		border-radius: var(--cz-radius-sm);
		width: calc(100% - var(--cz-spacing) * 3);
		cursor: pointer;
		text-overflow: ellipsis;
		white-space: nowrap;
		transition: background 0.25s;
		color: var(--cz-color-text-primary);
		overflow: hidden;
		padding-inline: calc(var(--cz-spacing) * 2);
		margin-block: 1px;
	}

	.sizer {
		position: relative;
		visibility: hidden;
		opacity: 0;
		pointer-events: none;
		z-index: -1;
		height: 0;
		width: auto;
		padding: 0 calc(var(--cz-spacing) * 5);
		overflow: hidden;
		max-width: inherit;
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
	}

	:host(:not([multi])) .item[aria-selected] {
		background: rgb(from var(--cz-color-alpha-black) r g b / 0.22);
	}

	:host([multi]) .item::before {
		content: '';
		font-size: 0;
		padding: calc(var(--cz-spacing) * 2);
		margin-right: calc(var(--cz-spacing) * 2);
		background: var(--cz-color-bg-tertiary);
		border: 1px solid var(--cz-color-bg-quaternary);
		border-radius: var(--cz-radius-xs);
		vertical-align: top;
	}

	:host([multi]) .item[aria-selected]::before {
		border-color: var(--cz-color-bg-brand-solid);
		/* prettier-ignore */
		background: url("${Bt}") var(--cz-color-bg-brand-solid) no-repeat 50%;
	}

	[virtualizer-sizer]:not(.sizer) {
		line-height: 1;
	}

	/* =========================================
	 * OPTION PARTS (see ../option.ts): a label,
	 * a muted description and a hint line below.
	 * ========================================= */
	.option-line,
	.option-hint {
		display: block;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		line-height: var(--cz-text-sm-line-height);
	}
	.item:has(.option-hint) {
		padding-block: calc(var(--cz-spacing) * 1.5);
	}
	.option-label {
		font-weight: var(--cz-font-weight-medium);
		font-variant-numeric: tabular-nums;
	}
	.option-description {
		margin-inline-start: calc(var(--cz-spacing) * 1.5);
		color: var(--cz-color-text-tertiary);
	}
	.option-hint {
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		color: var(--cz-color-text-tertiary);
	}

	/* =========================================
	 * SELECT MODE: a combobox popover. The
	 * selected option carries a check mark
	 * instead of a fill; hover is a soft accent.
	 * ========================================= */
	:host([select]) {
		--cosmoz-listbox-highlight: var(--cz-color-bg-primary-hover);
		padding: var(--cz-spacing);
		box-shadow:
			0 0 0 1px var(--cz-color-border-secondary),
			var(--cz-shadow-lg);
	}
	:host([select]) .items {
		padding-inline: 0;
	}
	:host([select]:not([multi])) .item {
		position: relative;
		width: 100%;
		margin-block: 0;
		padding-inline: calc(var(--cz-spacing) * 8) calc(var(--cz-spacing) * 2);
	}
	:host([select]:not([multi])) .item[aria-selected] {
		background: none;
	}
	:host([select]:not([multi])) .item::before {
		content: '';
		position: absolute;
		inset-inline-start: calc(var(--cz-spacing) * 2);
		top: 50%;
		width: calc(var(--cz-spacing) * 4);
		height: calc(var(--cz-spacing) * 4);
		translate: 0 -50%;
		background: currentColor;
		/* prettier-ignore */
		mask: url("${Nt}") center / contain no-repeat;
		opacity: 0;
	}
	:host([select]:not([multi])) .item[aria-selected]::before {
		opacity: 1;
	}
`,Pt=({index:i,itemHeight:t,auto:e})=>N`
	${gt(!e,()=>N`
			.item {
				line-height: ${t}px;
				height: ${t}px;
			}
		`)}
	.item[data-index='${i||"0"}'] {
		background: var(
			--cosmoz-listbox-highlight,
			rgb(from var(--cz-color-alpha-black) r g b / 0.14)
		);
	}
	.item[data-index='${i||"0"}'][part~='error'] {
		background: var(--cz-color-bg-error);
	}
`,Dt=i=>{const t=i==="auto",[e,s]=X(t?40:i);return[e,n=>t?s(n):void 0]},Ft=({onUp:i,onDown:t,onEnter:e})=>{const s=Q();I({activity:ot,callback:i,element:()=>s},[]),I({activity:lt,callback:t,element:()=>s},[]),I({activity:at,callback:e,element:()=>s},[])},jt=({items:i,onSelect:t,defaultIndex:e=0})=>{const[s,n]=X({index:e}),{index:r}=s,{length:o}=i;return b(()=>{n({index:s.index<0?e:Math.min(s.index,i.length-1),scroll:!0})},[i,e]),Ft({onUp:y(()=>n(a=>({index:a.index>0?a.index-1:o-1,scroll:!0})),[o]),onDown:y(()=>n(a=>({index:a.index<o-1?a.index+1:0,scroll:!0})),[o]),onEnter:y(()=>r>-1&&r<o&&t?.(i[r],r),[r,i,t])}),{position:s,highlight:y(a=>n({index:a}),[]),select:y(a=>t?.(a),[t])}},Gt=i=>typeof i=="object"&&i!==null&&Symbol.iterator in i;function $(i){return i==null?[]:Array.isArray(i)?i:typeof i=="string"?[i]:Gt(i)?Array.from(i):[i]}const ee=(i,t=L)=>e=>{const s=$(i).map(t);return $(e).filter(n=>!s.includes(t(n)))},Wt=(i,t)=>t?e=>e!=null&&$(i).find(s=>s[t]===e[t]):e=>e!=null&&$(i).includes(e),Ut=(i,t)=>{if(!t||!i)return i;const e=i.toLowerCase().indexOf(t.toLowerCase());if(e<0)return i;const s=e+t.length;return[i.slice(0,e),E`<mark>${i.slice(e,s)}</mark>`,i.slice(s)]},qt=(i=L)=>(t,e,{highlight:s,select:n,textual:r=L,query:o,isSelected:a})=>{const l=r(t),d=Ut(l,o),f=i(d,t,e);return E`<div
				class="item"
				role="option"
				part="option"
				?aria-selected=${a(t)}
				data-index=${e}
				@mouseenter=${()=>s(e)}
				@click=${()=>n(t)}
				@mousedown=${h=>h.preventDefault()}
				title=${l}
			>
				${f}
			</div>
			<div class="sizer" virtualizer-sizer>${f}</div>`},Kt=({itemRenderer:i=qt(),...t})=>{const e=K(t);return y((s,n)=>i(s,n,e),[e,i])},Xt=["query","items","onSelect","textual","anchor","itemHeight","itemLimit","itemRenderer","defaultIndex","value","valueProperty","loading"],Yt=({value:i,valueProperty:t,items:e,onSelect:s,defaultIndex:n,query:r,textual:o,itemRenderer:a,itemHeight:l=40,itemLimit:d=5})=>{const f=x(()=>Wt(i,t),[i,t]),h=x(()=>e.slice(),[e,f]),{position:u,highlight:c,select:_}=jt({items:h,onSelect:s,defaultIndex:isNaN(n)?void 0:Number(n)}),[m,g]=Dt(l);return{position:u,items:h,height:Math.min(d,h.length)*m,highlight:c,select:_,itemHeight:m,setItemHeight:g,renderItem:Kt({itemRenderer:a,items:h,position:u,highlight:c,select:_,textual:o,query:r,isSelected:f})}},q=ct,Jt=i=>{const t=_t(void 0),{position:e,items:s,renderItem:n,height:r,itemHeight:o,setItemHeight:a}=Yt(i);return b(()=>{const l=t.current?.[H];l&&l.layoutComplete.then(()=>{i.dispatchEvent(new CustomEvent("layout-complete"));const{averageChildSize:d,averageMarginSize:f}=l._layout._metricsCache;return a(d+f*2)},q)},[s]),b(()=>{if(!e.scroll)return;const l=t.current?.[H];if(l){if(!l?._layout){l.layoutComplete.then(()=>l.element(e.index)?.scrollIntoView({block:"nearest"}),q);return}l.element(e.index)?.scrollIntoView({block:"nearest"})}},[e]),Vt(Pt({...e,itemHeight:o,auto:i.itemHeight==="auto"})),E`<div
			class="items"
			style="min-height: ${r}px"
			${yt(l=>t.current=l)}
		>
			<div virtualizer-sizer></div>
			${$t({items:s,renderItem:n,scroller:!0})}
		</div>
		<slot></slot>`};customElements.define("cosmoz-listbox",ht(Jt,{styleSheets:[vt(Ht)]}));const ie=({multi:i,mode:t,...e},s)=>E`<cosmoz-listbox
		part="listbox"
		?multi=${i}
		?select=${t==="select"}
		...=${Rt(It(Xt)(e))}
		>${s}</cosmoz-listbox
	>`;export{qt as a,yt as b,Q as c,$ as d,A as e,J as f,I as g,vt as h,D as i,ie as l,gt as n,Ot as p,te as s,P as t,_t as u,ee as w};
