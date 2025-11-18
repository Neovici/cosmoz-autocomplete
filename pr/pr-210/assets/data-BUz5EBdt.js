import{T as B,f as Ie,B as Cn,E as pt,m as Fe,x as E,i as En,p as Sn,v as J,r as ht,M as jt,_ as zn}from"./iframe-Chy53fpV.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},rt=e=>(...t)=>({_$litDirective$:e,values:t});let gt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,i){this._$Ct=t,this._$AM=n,this._$Ci=i}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const De="important",$n=" !"+De,kn=rt(class extends gt{constructor(e){if(super(e),e.type!==H.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,n)=>{const i=e[n];return i==null?t:t+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`}),"")}update(e,[t]){const{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const i of this.ft)t[i]==null&&(this.ft.delete(i),i.includes("-")?n.removeProperty(i):n[i]=null);for(const i in t){const s=t[i];if(s!=null){this.ft.add(i);const o=typeof s=="string"&&s.endsWith($n);i.includes("-")||o?n.setProperty(i,o?s.slice(0,-11):s,o?De:""):n[i]=s}}return B}});let St,Be=0;function he(e){St=e}function de(){St=null,Be=0}function An(){return Be++}const Wt=Symbol("haunted.phase"),Et=Symbol("haunted.hook"),fe=Symbol("haunted.update"),pe=Symbol("haunted.commit"),tt=Symbol("haunted.effects"),dt=Symbol("haunted.layoutEffects"),Kt="haunted.context";class Rn{update;host;virtual;[Et];[tt];[dt];constructor(t,n){this.update=t,this.host=n,this[Et]=new Map,this[tt]=[],this[dt]=[]}run(t){he(this);let n=t();return de(),n}_runEffects(t){let n=this[t];he(this);for(let i of n)i.call(this);de()}runEffects(){this._runEffects(tt)}runLayoutEffects(){this._runEffects(dt)}teardown(){this[Et].forEach(n=>{typeof n.teardown=="function"&&n.teardown()})}}const Tn=Promise.resolve().then.bind(Promise.resolve());function Ve(){let e=[],t;function n(){t=null;let i=e;e=[];for(var s=0,o=i.length;s<o;s++)i[s]()}return function(i){e.push(i),t==null&&(t=Tn(n))}}const Ln=Ve(),me=Ve();class On{renderer;host;state;[Wt];_updateQueued;constructor(t,n){this.renderer=t,this.host=n,this.state=new Rn(this.update.bind(this),n),this[Wt]=null,this._updateQueued=!1}update(){this._updateQueued||(Ln(()=>{let t=this.handlePhase(fe);me(()=>{this.handlePhase(pe,t),me(()=>{this.handlePhase(tt)})}),this._updateQueued=!1}),this._updateQueued=!0)}handlePhase(t,n){switch(this[Wt]=t,t){case pe:this.commit(n),this.runEffects(dt);return;case fe:return this.render();case tt:return this.runEffects(tt)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(t){this.state._runEffects(t)}teardown(){this.state.teardown()}}const Gt=(...e)=>{const t=new CSSStyleSheet;return t.replaceSync(e.join("")),t},Mn=e=>e?.map(t=>typeof t=="string"?Gt(t):t),Pn=(e,...t)=>e.flatMap((n,i)=>[n,t[i]||""]).join(""),zt=Pn,In=(e="")=>e.replace(/-+([a-z])?/g,(t,n)=>n?n.toUpperCase():"");function Fn(e){class t extends On{frag;renderResult;constructor(s,o,r){super(s,r||o),this.frag=o}commit(s){this.renderResult=e(s,this.frag)}}function n(i,s,o){const r=(o||s||{}).baseElement||HTMLElement,{observedAttributes:l=[],useShadowDOM:a=!0,shadowRootInit:c={},styleSheets:h}=o||s||{},u=Mn(i.styleSheets||h);class f extends r{_scheduler;static get observedAttributes(){return i.observedAttributes||l||[]}constructor(){if(super(),a===!1)this._scheduler=new t(i,this);else{const g=this.attachShadow({mode:"open",...c});u&&(g.adoptedStyleSheets=u),this._scheduler=new t(i,g,this)}}connectedCallback(){this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(g,m,v){if(m===v)return;let _=v===""?!0:v;Reflect.set(this,In(g),_)}}function d(p){let g=p,m=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return g},set(v){m&&g===v||(m=!0,g=v,this._scheduler&&this._scheduler.update())}})}const b=new Proxy(r.prototype,{getPrototypeOf(p){return p},set(p,g,m,v){let _;return g in p?(_=Object.getOwnPropertyDescriptor(p,g),_&&_.set?(_.set.call(v,m),!0):(Reflect.set(p,g,m,v),!0)):(typeof g=="symbol"||g[0]==="_"?_={enumerable:!0,configurable:!0,writable:!0,value:m}:_=d(m),Object.defineProperty(v,g,_),_.set&&_.set.call(v,m),!0)}});return Object.setPrototypeOf(f.prototype,b),f}return n}class Z{id;state;constructor(t,n){this.id=t,this.state=n}}function Dn(e,...t){let n=An(),i=St[Et],s=i.get(n);return s||(s=new e(n,St,...t),i.set(n,s)),s.update(...t)}function G(e){return Dn.bind(null,e)}function Ne(e){return G(class extends Z{callback;lastValues;values;_teardown;constructor(t,n,i,s){super(t,n),e(n,this)}update(t,n){this.callback=t,this.values=n}call(){const t=!this.values||this.hasChanged();this.lastValues=this.values,t&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(){typeof this._teardown=="function"&&this._teardown()}hasChanged(){return!this.lastValues||this.values.some((t,n)=>this.lastValues[n]!==t)}})}function He(e,t){e[tt].push(t)}const S=Ne(He),Bn=e=>e instanceof Element?e:e.startNode||e.endNode||e.parentNode,Vn=G(class extends Z{Context;value;_ranEffect;_unsubscribe;constructor(e,t,n){super(e,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,He(t,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){const t={Context:e,callback:this._updater};Bn(this.state.host).dispatchEvent(new CustomEvent(Kt,{detail:t,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:i=null,value:s}=t;this.value=i?s:e.defaultValue,this._unsubscribe=i}teardown(){this._unsubscribe&&this._unsubscribe()}});function Nn(e){return t=>{const n={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(Kt,this)}disconnectedCallback(){this.removeEventListener(Kt,this)}handleEvent(i){const{detail:s}=i;s.Context===n&&(s.value=this.value,s.unsubscribe=this.unsubscribe.bind(this,s.callback),this.listeners.add(s.callback),i.stopPropagation())}unsubscribe(i){this.listeners.delete(i)}set value(i){this._value=i;for(let s of this.listeners)s(i)}get value(){return this._value}},Consumer:e(function({render:i}){const s=Vn(n);return i(s)},{useShadowDOM:!1}),defaultValue:t};return n}}const R=G(class extends Z{value;values;constructor(e,t,n,i){super(e,t),this.value=n(),this.values=i}update(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}hasChanged(e=[]){return e.some((t,n)=>this.values[n]!==t)}}),x=(e,t)=>R(()=>e,t);function Hn(e,t){e[dt].push(t)}const ge=Ne(Hn),Q=G(class extends Z{args;constructor(e,t,n){super(e,t),this.updater=this.updater.bind(this),typeof n=="function"&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(e){const[t]=this.args;typeof e=="function"&&(e=e(t)),!Object.is(t,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}}),jn=G(class extends Z{reducer;currentState;constructor(e,t,n,i,s){super(e,t),this.dispatch=this.dispatch.bind(this),this.currentState=s!==void 0?s(i):i}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}}),Wn=/([A-Z])/gu,Yn=G(class extends Z{property;eventName;constructor(e,t,n,i){if(super(e,t),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(Wn,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof i=="function"&&(i=i()),i!=null&&this.updateProp(i))}update(e,t){return[this.state.host[this.property],this.updater]}updater(e){const t=this.state.host[this.property];typeof e=="function"&&(e=e(t)),!Object.is(t,e)&&this.updateProp(e)}updateProp(e){this.notify(e).defaultPrevented||(this.state.host[this.property]=e)}notify(e){const t=new CustomEvent(this.eventName,{detail:{value:e,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(t),t}});function je(e){return R(()=>({current:e}),[])}function Un({render:e}){const t=Fn(e),n=Nn(t);return{component:t,createContext:n}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ft=(e,t)=>{const n=e._$AN;if(n===void 0)return!1;for(const i of n)i._$AO?.(t,!1),ft(i,t);return!0},$t=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},We=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Qn(t)}};function qn(e){this._$AN!==void 0?($t(this),this._$AM=e,We(this)):this._$AM=e}function Kn(e,t=!1,n=0){const i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(t)if(Array.isArray(i))for(let o=n;o<i.length;o++)ft(i[o],!1),$t(i[o]);else i!=null&&(ft(i,!1),$t(i));else ft(this,e)}const Qn=e=>{e.type==H.CHILD&&(e._$AP??=Kn,e._$AQ??=qn)};class Jt extends gt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,n,i){super._$AT(t,n,i),We(this),this.isConnected=t._$AU}_$AO(t,n=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),n&&(ft(this,t),$t(this))}setValue(t){if(Ie(this._$Ct))this._$Ct._$AI(t,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=t,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}}const{component:lt}=Un({render:Cn});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I=e=>e??pt,K=Math.min,M=Math.max,kt=Math.round,wt=Math.floor,j=e=>({x:e,y:e}),Xn={left:"right",right:"left",bottom:"top",top:"bottom"},Zn={start:"end",end:"start"};function be(e,t,n){return M(e,K(t,n))}function Lt(e,t){return typeof e=="function"?e(t):e}function it(e){return e.split("-")[0]}function Ot(e){return e.split("-")[1]}function Ye(e){return e==="x"?"y":"x"}function Ue(e){return e==="y"?"height":"width"}function Mt(e){return["top","bottom"].includes(it(e))?"y":"x"}function qe(e){return Ye(Mt(e))}function Gn(e,t,n){n===void 0&&(n=!1);const i=Ot(e),s=qe(e),o=Ue(s);let r=s==="x"?i===(n?"end":"start")?"right":"left":i==="start"?"bottom":"top";return t.reference[o]>t.floating[o]&&(r=At(r)),[r,At(r)]}function Jn(e){const t=At(e);return[Qt(e),t,Qt(t)]}function Qt(e){return e.replace(/start|end/g,t=>Zn[t])}function ti(e,t,n){const i=["left","right"],s=["right","left"],o=["top","bottom"],r=["bottom","top"];switch(e){case"top":case"bottom":return n?t?s:i:t?i:s;case"left":case"right":return t?o:r;default:return[]}}function ei(e,t,n,i){const s=Ot(e);let o=ti(it(e),n==="start",i);return s&&(o=o.map(r=>r+"-"+s),t&&(o=o.concat(o.map(Qt)))),o}function At(e){return e.replace(/left|right|bottom|top/g,t=>Xn[t])}function ni(e){return{top:0,right:0,bottom:0,left:0,...e}}function ii(e){return typeof e!="number"?ni(e):{top:e,right:e,bottom:e,left:e}}function Rt(e){const{x:t,y:n,width:i,height:s}=e;return{width:i,height:s,top:n,left:t,right:t+i,bottom:n+s,x:t,y:n}}function ve(e,t,n){let{reference:i,floating:s}=e;const o=Mt(t),r=qe(t),l=Ue(r),a=it(t),c=o==="y",h=i.x+i.width/2-s.width/2,u=i.y+i.height/2-s.height/2,f=i[l]/2-s[l]/2;let d;switch(a){case"top":d={x:h,y:i.y-s.height};break;case"bottom":d={x:h,y:i.y+i.height};break;case"right":d={x:i.x+i.width,y:u};break;case"left":d={x:i.x-s.width,y:u};break;default:d={x:i.x,y:i.y}}switch(Ot(t)){case"start":d[r]-=f*(n&&c?-1:1);break;case"end":d[r]+=f*(n&&c?-1:1);break}return d}const si=async(e,t,n)=>{const{placement:i="bottom",strategy:s="absolute",middleware:o=[],platform:r}=n,l=o.filter(Boolean),a=await(r.isRTL==null?void 0:r.isRTL(t));let c=await r.getElementRects({reference:e,floating:t,strategy:s}),{x:h,y:u}=ve(c,i,a),f=i,d={},b=0;for(let p=0;p<l.length;p++){const{name:g,fn:m}=l[p],{x:v,y:_,data:w,reset:y}=await m({x:h,y:u,initialPlacement:i,placement:f,strategy:s,middlewareData:d,rects:c,platform:r,elements:{reference:e,floating:t}});h=v??h,u=_??u,d={...d,[g]:{...d[g],...w}},y&&b<=50&&(b++,typeof y=="object"&&(y.placement&&(f=y.placement),y.rects&&(c=y.rects===!0?await r.getElementRects({reference:e,floating:t,strategy:s}):y.rects),{x:h,y:u}=ve(c,f,a)),p=-1)}return{x:h,y:u,placement:f,strategy:s,middlewareData:d}};async function te(e,t){var n;t===void 0&&(t={});const{x:i,y:s,platform:o,rects:r,elements:l,strategy:a}=e,{boundary:c="clippingAncestors",rootBoundary:h="viewport",elementContext:u="floating",altBoundary:f=!1,padding:d=0}=Lt(t,e),b=ii(d),g=l[f?u==="floating"?"reference":"floating":u],m=Rt(await o.getClippingRect({element:(n=await(o.isElement==null?void 0:o.isElement(g)))==null||n?g:g.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(l.floating)),boundary:c,rootBoundary:h,strategy:a})),v=u==="floating"?{x:i,y:s,width:r.floating.width,height:r.floating.height}:r.reference,_=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l.floating)),w=await(o.isElement==null?void 0:o.isElement(_))?await(o.getScale==null?void 0:o.getScale(_))||{x:1,y:1}:{x:1,y:1},y=Rt(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:v,offsetParent:_,strategy:a}):v);return{top:(m.top-y.top+b.top)/w.y,bottom:(y.bottom-m.bottom+b.bottom)/w.y,left:(m.left-y.left+b.left)/w.x,right:(y.right-m.right+b.right)/w.x}}const oi=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,i;const{placement:s,middlewareData:o,rects:r,initialPlacement:l,platform:a,elements:c}=t,{mainAxis:h=!0,crossAxis:u=!0,fallbackPlacements:f,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:b="none",flipAlignment:p=!0,...g}=Lt(e,t);if((n=o.arrow)!=null&&n.alignmentOffset)return{};const m=it(s),v=it(l)===l,_=await(a.isRTL==null?void 0:a.isRTL(c.floating)),w=f||(v||!p?[At(l)]:Jn(l));!f&&b!=="none"&&w.push(...ei(l,p,b,_));const y=[l,...w],z=await te(t,g),$=[];let k=((i=o.flip)==null?void 0:i.overflows)||[];if(h&&$.push(z[m]),u){const D=Gn(s,r,_);$.push(z[D[0]],z[D[1]])}if(k=[...k,{placement:s,overflows:$}],!$.every(D=>D<=0)){var T,O;const D=(((T=o.flip)==null?void 0:T.index)||0)+1,U=y[D];if(U)return{data:{index:D,overflows:k},reset:{placement:U}};let L=(O=k.filter(A=>A.overflows[0]<=0).sort((A,q)=>A.overflows[1]-q.overflows[1])[0])==null?void 0:O.placement;if(!L)switch(d){case"bestFit":{var F;const A=(F=k.map(q=>[q.placement,q.overflows.filter(C=>C>0).reduce((C,Ht)=>C+Ht,0)]).sort((q,C)=>q[1]-C[1])[0])==null?void 0:F[0];A&&(L=A);break}case"initialPlacement":L=l;break}if(s!==L)return{reset:{placement:L}}}return{}}}},ri=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:i,placement:s}=t,{mainAxis:o=!0,crossAxis:r=!1,limiter:l={fn:g=>{let{x:m,y:v}=g;return{x:m,y:v}}},...a}=Lt(e,t),c={x:n,y:i},h=await te(t,a),u=Mt(it(s)),f=Ye(u);let d=c[f],b=c[u];if(o){const g=f==="y"?"top":"left",m=f==="y"?"bottom":"right",v=d+h[g],_=d-h[m];d=be(v,d,_)}if(r){const g=u==="y"?"top":"left",m=u==="y"?"bottom":"right",v=b+h[g],_=b-h[m];b=be(v,b,_)}const p=l.fn({...t,[f]:d,[u]:b});return{...p,data:{x:p.x-n,y:p.y-i}}}}},li=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:n,rects:i,platform:s,elements:o}=t,{apply:r=()=>{},...l}=Lt(e,t),a=await te(t,l),c=it(n),h=Ot(n),u=Mt(n)==="y",{width:f,height:d}=i.floating;let b,p;c==="top"||c==="bottom"?(b=c,p=h===(await(s.isRTL==null?void 0:s.isRTL(o.floating))?"start":"end")?"left":"right"):(p=c,b=h==="end"?"top":"bottom");const g=d-a.top-a.bottom,m=f-a.left-a.right,v=K(d-a[b],g),_=K(f-a[p],m),w=!t.middlewareData.shift;let y=v,z=_;if(u?z=h||w?K(_,m):m:y=h||w?K(v,g):g,w&&!h){const k=M(a.left,0),T=M(a.right,0),O=M(a.top,0),F=M(a.bottom,0);u?z=f-2*(k!==0||T!==0?k+T:M(a.left,a.right)):y=d-2*(O!==0||F!==0?O+F:M(a.top,a.bottom))}await r({...t,availableWidth:z,availableHeight:y});const $=await s.getDimensions(o.floating);return f!==$.width||d!==$.height?{reset:{rects:!0}}:{}}}};function Pt(){return typeof window<"u"}function ut(e){return Ke(e)?(e.nodeName||"").toLowerCase():"#document"}function P(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Y(e){var t;return(t=(Ke(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Ke(e){return Pt()?e instanceof Node||e instanceof P(e).Node:!1}function V(e){return Pt()?e instanceof Element||e instanceof P(e).Element:!1}function W(e){return Pt()?e instanceof HTMLElement||e instanceof P(e).HTMLElement:!1}function _e(e){return!Pt()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof P(e).ShadowRoot}function bt(e){const{overflow:t,overflowX:n,overflowY:i,display:s}=N(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+n)&&!["inline","contents"].includes(s)}function ai(e){return["table","td","th"].includes(ut(e))}function It(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function ee(e){const t=ne(),n=V(e)?N(e):e;return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(n.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(n.contain||"").includes(i))}function ci(e){let t=X(e);for(;W(t)&&!ct(t);){if(ee(t))return t;if(It(t))return null;t=X(t)}return null}function ne(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ct(e){return["html","body","#document"].includes(ut(e))}function N(e){return P(e).getComputedStyle(e)}function Ft(e){return V(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function X(e){if(ut(e)==="html")return e;const t=e.assignedSlot||e.parentNode||_e(e)&&e.host||Y(e);return _e(t)?t.host:t}function Qe(e){const t=X(e);return ct(t)?e.ownerDocument?e.ownerDocument.body:e.body:W(t)&&bt(t)?t:Qe(t)}function mt(e,t,n){var i;t===void 0&&(t=[]),n===void 0&&(n=!0);const s=Qe(e),o=s===((i=e.ownerDocument)==null?void 0:i.body),r=P(s);if(o){const l=Xt(r);return t.concat(r,r.visualViewport||[],bt(s)?s:[],l&&n?mt(l):[])}return t.concat(s,mt(s,[],n))}function Xt(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Xe(e){const t=N(e);let n=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const s=W(e),o=s?e.offsetWidth:n,r=s?e.offsetHeight:i,l=kt(n)!==o||kt(i)!==r;return l&&(n=o,i=r),{width:n,height:i,$:l}}function ie(e){return V(e)?e:e.contextElement}function at(e){const t=ie(e);if(!W(t))return j(1);const n=t.getBoundingClientRect(),{width:i,height:s,$:o}=Xe(t);let r=(o?kt(n.width):n.width)/i,l=(o?kt(n.height):n.height)/s;return(!r||!Number.isFinite(r))&&(r=1),(!l||!Number.isFinite(l))&&(l=1),{x:r,y:l}}const ui=j(0);function Ze(e){const t=P(e);return!ne()||!t.visualViewport?ui:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function hi(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==P(e)?!1:t}function st(e,t,n,i){t===void 0&&(t=!1),n===void 0&&(n=!1);const s=e.getBoundingClientRect(),o=ie(e);let r=j(1);t&&(i?V(i)&&(r=at(i)):r=at(e));const l=hi(o,n,i)?Ze(o):j(0);let a=(s.left+l.x)/r.x,c=(s.top+l.y)/r.y,h=s.width/r.x,u=s.height/r.y;if(o){const f=P(o),d=i&&V(i)?P(i):i;let b=f,p=Xt(b);for(;p&&i&&d!==b;){const g=at(p),m=p.getBoundingClientRect(),v=N(p),_=m.left+(p.clientLeft+parseFloat(v.paddingLeft))*g.x,w=m.top+(p.clientTop+parseFloat(v.paddingTop))*g.y;a*=g.x,c*=g.y,h*=g.x,u*=g.y,a+=_,c+=w,b=P(p),p=Xt(b)}}return Rt({width:h,height:u,x:a,y:c})}function se(e,t){const n=Ft(e).scrollLeft;return t?t.left+n:st(Y(e)).left+n}function Ge(e,t,n){n===void 0&&(n=!1);const i=e.getBoundingClientRect(),s=i.left+t.scrollLeft-(n?0:se(e,i)),o=i.top+t.scrollTop;return{x:s,y:o}}function di(e){let{elements:t,rect:n,offsetParent:i,strategy:s}=e;const o=s==="fixed",r=Y(i),l=t?It(t.floating):!1;if(i===r||l&&o)return n;let a={scrollLeft:0,scrollTop:0},c=j(1);const h=j(0),u=W(i);if((u||!u&&!o)&&((ut(i)!=="body"||bt(r))&&(a=Ft(i)),W(i))){const d=st(i);c=at(i),h.x=d.x+i.clientLeft,h.y=d.y+i.clientTop}const f=r&&!u&&!o?Ge(r,a,!0):j(0);return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-a.scrollLeft*c.x+h.x+f.x,y:n.y*c.y-a.scrollTop*c.y+h.y+f.y}}function fi(e){return Array.from(e.getClientRects())}function pi(e){const t=Y(e),n=Ft(e),i=e.ownerDocument.body,s=M(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),o=M(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight);let r=-n.scrollLeft+se(e);const l=-n.scrollTop;return N(i).direction==="rtl"&&(r+=M(t.clientWidth,i.clientWidth)-s),{width:s,height:o,x:r,y:l}}function mi(e,t){const n=P(e),i=Y(e),s=n.visualViewport;let o=i.clientWidth,r=i.clientHeight,l=0,a=0;if(s){o=s.width,r=s.height;const c=ne();(!c||c&&t==="fixed")&&(l=s.offsetLeft,a=s.offsetTop)}return{width:o,height:r,x:l,y:a}}function gi(e,t){const n=st(e,!0,t==="fixed"),i=n.top+e.clientTop,s=n.left+e.clientLeft,o=W(e)?at(e):j(1),r=e.clientWidth*o.x,l=e.clientHeight*o.y,a=s*o.x,c=i*o.y;return{width:r,height:l,x:a,y:c}}function ye(e,t,n){let i;if(t==="viewport")i=mi(e,n);else if(t==="document")i=pi(Y(e));else if(V(t))i=gi(t,n);else{const s=Ze(e);i={x:t.x-s.x,y:t.y-s.y,width:t.width,height:t.height}}return Rt(i)}function Je(e,t){const n=X(e);return n===t||!V(n)||ct(n)?!1:N(n).position==="fixed"||Je(n,t)}function bi(e,t){const n=t.get(e);if(n)return n;let i=mt(e,[],!1).filter(l=>V(l)&&ut(l)!=="body"),s=null;const o=N(e).position==="fixed";let r=o?X(e):e;for(;V(r)&&!ct(r);){const l=N(r),a=ee(r);!a&&l.position==="fixed"&&(s=null),(o?!a&&!s:!a&&l.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||bt(r)&&!a&&Je(e,r))?i=i.filter(h=>h!==r):s=l,r=X(r)}return t.set(e,i),i}function vi(e){let{element:t,boundary:n,rootBoundary:i,strategy:s}=e;const r=[...n==="clippingAncestors"?It(t)?[]:bi(t,this._c):[].concat(n),i],l=r[0],a=r.reduce((c,h)=>{const u=ye(t,h,s);return c.top=M(u.top,c.top),c.right=K(u.right,c.right),c.bottom=K(u.bottom,c.bottom),c.left=M(u.left,c.left),c},ye(t,l,s));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function _i(e){const{width:t,height:n}=Xe(e);return{width:t,height:n}}function yi(e,t,n){const i=W(t),s=Y(t),o=n==="fixed",r=st(e,!0,o,t);let l={scrollLeft:0,scrollTop:0};const a=j(0);if(i||!i&&!o)if((ut(t)!=="body"||bt(s))&&(l=Ft(t)),i){const f=st(t,!0,o,t);a.x=f.x+t.clientLeft,a.y=f.y+t.clientTop}else s&&(a.x=se(s));const c=s&&!i&&!o?Ge(s,l):j(0),h=r.left+l.scrollLeft-a.x-c.x,u=r.top+l.scrollTop-a.y-c.y;return{x:h,y:u,width:r.width,height:r.height}}function Yt(e){return N(e).position==="static"}function we(e,t){if(!W(e)||N(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return Y(e)===n&&(n=n.ownerDocument.body),n}function tn(e,t){const n=P(e);if(It(e))return n;if(!W(e)){let s=X(e);for(;s&&!ct(s);){if(V(s)&&!Yt(s))return s;s=X(s)}return n}let i=we(e,t);for(;i&&ai(i)&&Yt(i);)i=we(i,t);return i&&ct(i)&&Yt(i)&&!ee(i)?n:i||ci(e)||n}const wi=async function(e){const t=this.getOffsetParent||tn,n=this.getDimensions,i=await n(e.floating);return{reference:yi(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function xi(e){return N(e).direction==="rtl"}const Ci={convertOffsetParentRelativeRectToViewportRelativeRect:di,getDocumentElement:Y,getClippingRect:vi,getOffsetParent:tn,getElementRects:wi,getClientRects:fi,getDimensions:_i,getScale:at,isElement:V,isRTL:xi};function Ei(e,t){let n=null,i;const s=Y(e);function o(){var l;clearTimeout(i),(l=n)==null||l.disconnect(),n=null}function r(l,a){l===void 0&&(l=!1),a===void 0&&(a=1),o();const{left:c,top:h,width:u,height:f}=e.getBoundingClientRect();if(l||t(),!u||!f)return;const d=wt(h),b=wt(s.clientWidth-(c+u)),p=wt(s.clientHeight-(h+f)),g=wt(c),v={rootMargin:-d+"px "+-b+"px "+-p+"px "+-g+"px",threshold:M(0,K(1,a))||1};let _=!0;function w(y){const z=y[0].intersectionRatio;if(z!==a){if(!_)return r();z?r(!1,z):i=setTimeout(()=>{r(!1,1e-7)},1e3)}_=!1}try{n=new IntersectionObserver(w,{...v,root:s.ownerDocument})}catch{n=new IntersectionObserver(w,v)}n.observe(e)}return r(!0),o}function Si(e,t,n,i){i===void 0&&(i={});const{ancestorScroll:s=!0,ancestorResize:o=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:a=!1}=i,c=ie(e),h=s||o?[...c?mt(c):[],...mt(t)]:[];h.forEach(m=>{s&&m.addEventListener("scroll",n,{passive:!0}),o&&m.addEventListener("resize",n)});const u=c&&l?Ei(c,n):null;let f=-1,d=null;r&&(d=new ResizeObserver(m=>{let[v]=m;v&&v.target===c&&d&&(d.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var _;(_=d)==null||_.observe(t)})),n()}),c&&!a&&d.observe(c),d.observe(t));let b,p=a?st(e):null;a&&g();function g(){const m=st(e);p&&(m.x!==p.x||m.y!==p.y||m.width!==p.width||m.height!==p.height)&&n(),p=m,b=requestAnimationFrame(g)}return n(),()=>{var m;h.forEach(v=>{s&&v.removeEventListener("scroll",n),o&&v.removeEventListener("resize",n)}),u?.(),(m=d)==null||m.disconnect(),d=null,a&&cancelAnimationFrame(b)}}const zi=ri,$i=oi,ki=li,Ai=(e,t,n)=>{const i=new Map,s={platform:Ci,...n},o={...s.platform,_c:i};return si(e,t,{...s,platform:o})},en=[$i({fallbackAxisSideDirection:"start",crossAxis:!1}),zi()],Ri=({placement:e="bottom-start",strategy:t,middleware:n=en}={})=>{const[i,s]=Q(),[o,r]=Q(),[l,a]=Q();return S(()=>{if(!i||!(o instanceof HTMLElement)){a(void 0);return}return Si(i,o,()=>Ai(i,o,{placement:e,strategy:t,middleware:n}).then(a))},[i,o,e,t,n]),{setReference:s,setFloating:r,styles:R(()=>l?{left:`${l.x}px`,top:`${l.y}px`}:{},[l?.x,l?.y])}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oe=rt(class extends gt{constructor(e){if(super(e),e.type!==H.PROPERTY&&e.type!==H.ATTRIBUTE&&e.type!==H.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Ie(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===B||t===pt)return t;const n=e.element,i=e.name;if(e.type===H.PROPERTY){if(t===n[i])return B}else if(e.type===H.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(i))return B}else if(e.type===H.ATTRIBUTE&&n.getAttribute(i)===t+"")return B;return Fe(e),t}}),Ut=new WeakMap,vt=rt(class extends Jt{render(e){return pt}update(e,[t]){const n=t!==this.Y;return n&&this.Y!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.Y=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),pt}rt(e){if(this.isConnected||(e=void 0),typeof this.Y=="function"){const t=this.ht??globalThis;let n=Ut.get(t);n===void 0&&(n=new WeakMap,Ut.set(t,n)),n.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),n.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){return typeof this.Y=="function"?Ut.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),re=G(class extends Z{values;constructor(e,t,n,i){super(e,t),Object.assign(t.host,n),this.values=i}update(e,t){this.hasChanged(t)&&(this.values=t,Object.assign(this.state.host,e))}hasChanged(e=[]){return e.some((t,n)=>this.values[n]!==t)}}),Dt=G(class extends Z{update(){return this.state.host}}),Ti=/([A-Z])/gu,xe=(e,t,n)=>{e[t]=n,e.dispatchEvent(new CustomEvent(t.replace(Ti,"-$1").toLowerCase()+"-changed",{detail:{value:n}}))},nn=e=>{const t=je(void 0),n=x(c=>t.current=c,[]),i=e.shadowRoot,s=x(c=>e.dispatchEvent(new Event(c.type,{bubbles:c.bubbles})),[]),o=x(c=>xe(e,"value",c.target.value),[]),r=x(c=>xe(e,"focused",c.type==="focus"),[]),l=x(()=>t.current?.focus(),[]),a=x(()=>{const c=t.current?.checkValidity();return e.toggleAttribute("invalid",!c),c},[]);return re({focus:l,validate:a},[l,a]),S(()=>{const c=h=>{h.defaultPrevented||e.disabled||h.target.matches("input, textarea, label")||(h.preventDefault(),e.matches(":focus-within")||l())};return i.addEventListener("mousedown",c),()=>i.removeEventListener("mousedown",c)},[l]),{onChange:s,onFocus:r,onInput:o,onRef:n}},Li=e=>R(()=>{if(e==null)return;const t=new RegExp(e,"u");return n=>{!n.defaultPrevented&&n.data&&!t.test(n.data)&&n.preventDefault()}},[e]);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function et(e,t,n){return e?t(e):n?.(e)}const sn=(e,{label:t,invalid:n,errorMessage:i})=>E`
		<div class="float" part="float">&nbsp;</div>
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${e}
				${et(t,()=>E`<label for="input" part="label">${t}</label>`)}
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line" part="line"></div>
		${et(n&&i,()=>E`<div class="error" part="error">${i}</div>`)}
	`,on=["autocomplete","readonly","disabled","maxlength","invalid","no-label-float","always-float-label"],Oi=({placeholder:e,noLabelFloat:t,label:n})=>(t?n:void 0)||e||" ",le=(e,...t)=>e.flatMap((n,i)=>[n,t[i]??""]).join(""),ae=(...e)=>{const t=new CSSStyleSheet;return t.replaceSync(e.join("")),t},rn=le`
	:host {
		--font-family: var(
			--cosmoz-input-font-family,
			var(--paper-font-subhead_-_font-family, inherit)
		);
		--font-size: var(
			--cosmoz-input-font-size,
			var(--paper-font-subhead_-_font-size, 16px)
		);
		--line-height: var(
			--cosmoz-input-line-height,
			var(--paper-font-subhead_-_line-height, 24px)
		);
		--label-scale: var(--cosmoz-input-label-scale, 0.75);
		--disabled-opacity: var(
			--cosmoz-input-disabled-opacity,
			var(--paper-input-container-disabled_-_opacity, 0.33)
		);
		--disabled-line-opacity: var(
			--cosmoz-input-disabled-line-opacity,
			var(--paper-input-container-underline-disabled_-_opacity, 1)
		);
		--invalid-color: var(
			--cosmoz-input-invalid-color,
			var(--paper-input-container-invalid-color, var(--error-color, #fc5c5b))
		);
		--bg: var(--cosmoz-input-background);
		--focused-bg: var(--cosmoz-input-focused-background, var(--bg));
		--color: var(--cosmoz-input-color, var(--secondary-text-color, #737373));
		--line-color: var(--cosmoz-input-line-color, var(--color));
		--focused-color: var(
			--cosmoz-input-focused-color,
			var(--primary-color, #3f51b5)
		);
		--float-display: var(--cosmoz-input-float-display, block);
		--contour-color: var(--line-color);
		--contour-size: var(--cosmoz-input-contour-size);
		--label-translate-y: var(--cosmoz-input-label-translate-y, 0%);

		display: block;
		padding: var(--cosmoz-input-padding, 8px 0);
		position: relative;
		max-height: var(--cosmoz-input-max-height);
		font-size: var(--font-size);
		line-height: var(--line-height);
		font-family: var(--font-family);
	}

	:host([disabled]) {
		opacity: var(--disabled-opacity);
	}

	.float {
		line-height: calc(var(--line-height) * var(--label-scale));
		background-color: var(--cosmoz-input-float-bg-color, none);
		display: var(--float-display);
	}

	.wrap {
		padding: var(--cosmoz-input-wrap-padding, 0px);
		display: flex;
		align-items: center;
		position: relative;
		background: var(--bg);
		opacity: var(--cosmoz-input-opacity);
		border-radius: var(--cosmoz-input-border-radius);
		box-shadow: 0 0 0 var(--contour-size) var(--contour-color);
	}

	.control {
		flex: 1;
		position: relative;
	}

	#input {
		padding: 0;
		margin: 0;
		outline: none;
		border: none;
		width: 100%;
		max-width: 100%;
		display: block;
		background: transparent;
		line-height: inherit;
		font-size: inherit;
		font-family: inherit;
		resize: none;
	}

	:host(:focus-within) .wrap {
		background: var(--focused-bg);
	}

	label {
		position: absolute;
		top: 0;
		left: 0;
		width: var(--cosmoz-input-label-width, 100%);
		transition:
			transform 0.25s,
			width 0.25s;
		transform-origin: left top;
		color: var(--color);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		text-transform: var(--cosmoz-input-label-text-transform);
		font-weight: var(--cosmoz-input-label-font-weight);
	}
	.wrap:has(#input:not(:placeholder-shown)) slot[name='suffix']::slotted(*),
	.wrap:has(#input:not(:placeholder-shown)) slot[name='prefix']::slotted(*) {
		transform: translateY(var(--label-translate-y));
	}
	:host([always-float-label]) label,
	#input:not(:placeholder-shown) + label {
		transform: translateY(
				calc(var(--label-scale) * -100% + var(--label-translate-y))
			)
			scale(var(--label-scale));
		background-color: var(--cosmoz-input-floating-label-bg, var(--bg));
	}

	:host([always-float-label]) input,
	#input:not(:placeholder-shown) {
		transform: translateY(var(--label-translate-y));
	}

	:host([always-float-label]) slot[name='suffix']::slotted(*),
	:host([always-float-label]) slot[name='prefix']::slotted(*) {
		transform: translateY(var(--label-translate-y));
	}

	:host(:not(always-float-label):focus-within) #input::placeholder,
	:host(:focus-within) label {
		color: var(--focused-color);
		opacity: 1;
	}

	.line {
		padding-top: 1px;
		border-bottom: 1px solid var(--line-color);
		position: relative;
		display: var(--cosmoz-input-line-display, block);
	}
	.line::before {
		content: '';
		position: absolute;
		border-bottom: 2px solid transparent;
		border-bottom-color: inherit;
		left: 0;
		right: 0;
		top: 0;
		transform: scaleX(0);
		transform-origin: center center;
		z-index: 1;
	}
	:host(:focus-within) .line::before {
		transform: none;
		transition: 0.25s transform ease;
	}
	:host(:focus-within) .line {
		border-bottom-color: var(--focused-color);
	}

	:host(:focus-within) {
		--contour-color: var(--focused-color);
		caret-color: var(--focused-color);
	}

	:host([disabled]) .line {
		border-bottom-style: dashed;
		opacity: var(--disabled-line-opacity);
	}

	:host([no-label-float]) .float,
	:host([no-label-float]) label {
		display: none;
	}

	.error {
		font-size: 12px;
		line-height: 20px;
		overflow: hidden;
		text-overflow: clip;
		position: absolute;
		max-width: 100%;
	}

	:host([invalid]) {
		--contour-color: var(--invalid-color);
		caret-color: var(--invalid-color);
	}

	:host([invalid]) label,
	.error {
		color: var(--invalid-color);
	}
	:host([invalid]) .line {
		border-bottom-color: var(--invalid-color);
	}

	#input::-webkit-inner-spin-button {
		z-index: 1;
	}

	:host([no-spinner]) #input::-webkit-inner-spin-button {
		display: none;
	}
	:host([no-spinner]) #input {
		-moz-appearence: textfield;
	}

	:host([autosize]) {
		width: min-content;
	}
	:host([autosize]) #input {
		min-width: 2ch;
		width: var(--chars);
	}
	:host([autosize]) .control {
		max-width: 100%;
	}

	:host([autosize][type='number']) #input {
		--width: calc(var(--chars) + 0.25em);
	}
	:host([autosize][type='number']:not([no-spinner])) #input {
		width: calc(var(--width) + 15px);
		min-width: calc(2ch + 0.25em + 15px);
	}
	:host([autosize][type='number'][no-spinner]) #input {
		width: var(--width);
		min-width: calc(2ch + 0.25em);
	}
	:host([type='color']) .line {
		display: none;
	}
`,Mi=["type","pattern","allowed-pattern","min","max","step","autosize","label",...on],Pi=e=>{const{type:t="text",pattern:n,allowedPattern:i,autocomplete:s,value:o,readonly:r,disabled:l,min:a,max:c,step:h,maxlength:u}=e,{onChange:f,onFocus:d,onInput:b,onRef:p}=nn(e),g=Li(i);return re({focus:()=>e.shadowRoot?.querySelector("#input")?.focus()},[]),sn(E`
			<input
				${vt(p)}
				style="--chars: ${o?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${I(n)}
				autocomplete=${I(s)}
				placeholder=${Oi(e)}
				?readonly=${r}
				?aria-disabled=${l}
				?disabled=${l}
				.value=${oe(o??"")}
				maxlength=${I(u)}
				@beforeinput=${g}
				@input=${b}
				@change=${f}
				@focus=${d}
				@blur=${d}
				min=${I(a)}
				max=${I(c)}
				step=${I(h)}
			/>
		`,e)};customElements.define("cosmoz-input",lt(Pi,{observedAttributes:Mi,styleSheets:[Gt(rn)]}));const Ce=e=>{e.style.height="",e.style.height=`${e.scrollHeight}px`},Ii=(e,t=0)=>{if(t>0){const n=e.getAttribute("rows")??"",i=e.style.height;e.style.height="",e.setAttribute("rows",t),e.style.maxHeight=e.getBoundingClientRect().height+"px",e.style.height=i,e.setAttribute("rows",n)}},Fi=e=>{const{value:t,maxRows:n}=e,i=R(()=>()=>e.shadowRoot.querySelector("#input"),[]);S(()=>Ii(i(),n),[n,i]),S(()=>Ce(i()),[i,t]),S(()=>{const s=i(),o=new ResizeObserver(()=>requestAnimationFrame(()=>Ce(s)));return o.observe(s),()=>o.unobserve(s)},[i])},Di=["rows",...on],Bi=e=>{const{autocomplete:t,value:n,placeholder:i,readonly:s,disabled:o,rows:r,cols:l,maxlength:a}=e,{onChange:c,onFocus:h,onInput:u,onRef:f}=nn(e);return Fi(e),sn(E`
			<textarea id="input" part="input"
				${vt(f)}
				autocomplete=${I(t)}
				placeholder=${i||" "}
				rows=${r??1} cols=${I(l)}
				?readonly=${s} ?aria-disabled=${o} ?disabled=${o}
				.value=${oe(n??"")} maxlength=${I(a)} @input=${u}
				@change=${c} @focus=${h} @blur=${h}>`,e)};customElements.define("cosmoz-textarea",lt(Bi,{observedAttributes:Di,styleSheets:[Gt(rn)]}));/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Vi{constructor(t){this.Y=t}disconnect(){this.Y=void 0}reconnect(t){this.Y=t}deref(){return this.Y}}class Ni{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??=new Promise((t=>this.q=t))}resume(){this.q?.(),this.Z=this.q=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ee=e=>!En(e)&&typeof e.then=="function",Se=1073741823;let Hi=class extends Jt{constructor(){super(...arguments),this._$Cwt=Se,this._$Cbt=[],this._$CK=new Vi(this),this._$CX=new Ni}render(...t){return t.find((n=>!Ee(n)))??B}update(t,n){const i=this._$Cbt;let s=i.length;this._$Cbt=n;const o=this._$CK,r=this._$CX;this.isConnected||this.disconnected();for(let l=0;l<n.length&&!(l>this._$Cwt);l++){const a=n[l];if(!Ee(a))return this._$Cwt=l,a;l<s&&a===i[l]||(this._$Cwt=Se,s=0,Promise.resolve(a).then((async c=>{for(;r.get();)await r.get();const h=o.deref();if(h!==void 0){const u=h._$Cbt.indexOf(a);u>-1&&u<h._$Cwt&&(h._$Cwt=u,h.setValue(c))}})))}return B}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};const ze=rt(Hi);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $e=(e,t,n)=>{const i=new Map;for(let s=t;s<=n;s++)i.set(e[s],s);return i},ji=rt(class extends gt{constructor(e){if(super(e),e.type!==H.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,n){let i;n===void 0?n=t:t!==void 0&&(i=t);const s=[],o=[];let r=0;for(const l of e)s[r]=i?i(l,r):r,o[r]=n(l,r),r++;return{values:o,keys:s}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,i]){const s=Sn(e),{values:o,keys:r}=this.dt(t,n,i);if(!Array.isArray(s))return this.ut=r,o;const l=this.ut??=[],a=[];let c,h,u=0,f=s.length-1,d=0,b=o.length-1;for(;u<=f&&d<=b;)if(s[u]===null)u++;else if(s[f]===null)f--;else if(l[u]===r[d])a[d]=J(s[u],o[d]),u++,d++;else if(l[f]===r[b])a[b]=J(s[f],o[b]),f--,b--;else if(l[u]===r[b])a[b]=J(s[u],o[b]),ht(e,a[b+1],s[u]),u++,b--;else if(l[f]===r[d])a[d]=J(s[f],o[d]),ht(e,s[u],s[f]),f--,d++;else if(c===void 0&&(c=$e(r,d,b),h=$e(l,u,f)),c.has(l[u]))if(c.has(l[f])){const p=h.get(r[d]),g=p!==void 0?s[p]:null;if(g===null){const m=ht(e,s[u]);J(m,o[d]),a[d]=m}else a[d]=J(g,o[d]),ht(e,s[u],g),s[p]=null;d++}else jt(s[f]),f--;else jt(s[u]),u++;for(;d<=b;){const p=ht(e,a[b+1]);J(p,o[d]),a[d++]=p}for(;u<=f;){const p=s[u++];p!==null&&jt(p)}return this.ut=r,Fe(e,a),B}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Bt extends Event{constructor(t){super(Bt.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}}Bt.eventName="rangeChanged";class Vt extends Event{constructor(t){super(Vt.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}}Vt.eventName="visibilityChanged";class Nt extends Event{constructor(){super(Nt.eventName,{bubbles:!1})}}Nt.eventName="unpinned";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Wi{constructor(t){this._element=null;const n=t??window;this._node=n,t&&(this._element=t)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}}class Yi extends Wi{constructor(t,n){super(n),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);const i=this._node;this._originalScrollTo=i.scrollTo,this._originalScrollBy=i.scrollBy,this._originalScroll=i.scroll,this._attach(t)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(t,n){const i=typeof t=="number"&&typeof n=="number"?{left:t,top:n}:t;this._scrollTo(i)}scrollBy(t,n){const i=typeof t=="number"&&typeof n=="number"?{left:t,top:n}:t;i.top!==void 0&&(i.top+=this.scrollTop),i.left!==void 0&&(i.left+=this.scrollLeft),this._scrollTo(i)}_nativeScrollTo(t){this._originalScrollTo.bind(this._element||window)(t)}_scrollTo(t,n=null,i=null){this._end!==null&&this._end(),t.behavior==="smooth"?(this._setDestination(t),this._retarget=n,this._end=i):this._resetScrollState(),this._nativeScrollTo(t)}_setDestination(t){let{top:n,left:i}=t;return n=n===void 0?void 0:Math.max(0,Math.min(n,this.maxScrollTop)),i=i===void 0?void 0:Math.max(0,Math.min(i,this.maxScrollLeft)),this._destination!==null&&i===this._destination.left&&n===this._destination.top?!1:(this.__destination={top:n,left:i,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(t){this._destination&&this._setDestination(t)&&this._nativeScrollTo(this._destination)}managedScrollTo(t,n,i){return this._scrollTo(t,n,i),this._updateManagedScrollTo}correctScrollError(t){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(t),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){const{scrollTop:t,scrollLeft:n}=this;let{top:i,left:s}=this._destination;i=Math.min(i||0,this.maxScrollTop),s=Math.min(s||0,this.maxScrollLeft);const o=Math.abs(i-t),r=Math.abs(s-n);o<1&&r<1&&(this._end&&this._end(),this._resetScrollState())}}detach(t){return this._clients.delete(t),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(t){this._clients.add(t),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}}let ke=typeof window<"u"?window.ResizeObserver:void 0;const Zt=Symbol("virtualizerRef"),xt="virtualizer-sizer";let Ae;class Ui{constructor(t){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!t)throw new Error("Virtualizer constructor requires a configuration object");if(t.hostElement)this._init(t);else throw new Error('Virtualizer configuration requires the "hostElement" property')}set items(t){Array.isArray(t)&&t!==this._items&&(this._itemsChanged=!0,this._items=t,this._schedule(this._updateLayout))}_init(t){this._isScroller=!!t.scroller,this._initHostElement(t);const n=t.layout||{};this._layoutInitialized=this._initLayout(n)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new ke(()=>this._hostElementSizeChanged()),this._childrenRO=new ke(this._childrenSizeChanged.bind(this))}_initHostElement(t){const n=this._hostElement=t.hostElement;this._applyVirtualizerStyles(),n[Zt]=this}connected(){this._initObservers();const t=this._isScroller;this._clippingAncestors=Qi(this._hostElement,t),this._scrollerController=new Yi(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(t=>{t.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(t),this._hostElementRO.observe(t)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(t=>this._childrenRO.observe(t)),this._scrollEventListeners.forEach(t=>t.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){this._scrollEventListeners.forEach(t=>t.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],this._scrollerController?.detach(this),this._scrollerController=null,this._mutationObserver?.disconnect(),this._mutationObserver=null,this._hostElementRO?.disconnect(),this._hostElementRO=null,this._childrenRO?.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected"),this._connected=!1}_applyVirtualizerStyles(){const n=this._hostElement.style;n.display=n.display||"block",n.position=n.position||"relative",n.contain=n.contain||"size layout",this._isScroller&&(n.overflow=n.overflow||"auto",n.minHeight=n.minHeight||"150px")}_getSizer(){const t=this._hostElement;if(!this._sizer){let n=t.querySelector(`[${xt}]`);n||(n=document.createElement("div"),n.setAttribute(xt,""),t.appendChild(n)),Object.assign(n.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),n.textContent="&nbsp;",n.setAttribute(xt,""),this._sizer=n}return this._sizer}async updateLayoutConfig(t){await this._layoutInitialized;const n=t.type||Ae;if(typeof n=="function"&&this._layout instanceof n){const i={...t};return delete i.type,this._layout.config=i,!0}return!1}async _initLayout(t){let n,i;if(typeof t.type=="function"){i=t.type;const s={...t};delete s.type,n=s}else n=t;i===void 0&&(Ae=i=(await zn(()=>import("./flow-Cd2WZlRY.js"),[],import.meta.url)).FlowLayout),this._layout=new i(s=>this._handleLayoutMessage(s),n),this._layout.measureChildren&&typeof this._layout.updateItemSizes=="function"&&(typeof this._layout.measureChildren=="function"&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){const t=window.performance.now(),n=t-this._benchmarkStart,s=performance.getEntriesByName("uv-virtualizing","measure").filter(o=>o.startTime>=this._benchmarkStart&&o.startTime<t).reduce((o,r)=>o+r.duration,0);return this._benchmarkStart=null,{timeElapsed:n,virtualizationTime:s}}return null}_measureChildren(){const t={},n=this._children,i=this._measureChildOverride||this._measureChild;for(let s=0;s<n.length;s++){const o=n[s],r=this._first+s;(this._itemsChanged||this._toBeMeasured.has(o))&&(t[r]=i.call(this,o,this._items[r]))}this._childMeasurements=t,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(t){const{width:n,height:i}=t.getBoundingClientRect();return Object.assign({width:n,height:i},qi(t))}async _schedule(t){this._scheduled.has(t)||(this._scheduled.add(t),await Promise.resolve(),this._scheduled.delete(t),t.call(this))}async _updateDOM(t){this._scrollSize=t.scrollSize,this._adjustRange(t.range),this._childrenPos=t.childPositions,this._scrollError=t.scrollError||null;const{_rangeChanged:n,_itemsChanged:i}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(n||i)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(t=>this._childrenRO.observe(t)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(t){console.warn("Error measuring performance data: ",t)}window.performance.mark("uv-start")}this._scrollerController.correctingScrollError===!1&&this._layout?.unpin(),this._schedule(this._updateLayout)}handleEvent(t){switch(t.type){case"scroll":(t.currentTarget===window||this._clippingAncestors.includes(t.currentTarget))&&this._handleScrollEvent();break;default:console.warn("event not handled",t)}}_handleLayoutMessage(t){t.type==="stateChanged"?this._updateDOM(t):t.type==="visibilityChanged"?(this._firstVisible=t.firstVisible,this._lastVisible=t.lastVisible,this._notifyVisibility()):t.type==="unpinned"&&this._hostElement.dispatchEvent(new Nt)}get _children(){const t=[];let n=this._hostElement.firstElementChild;for(;n;)n.hasAttribute(xt)||t.push(n),n=n.nextElementSibling;return t}_updateView(){const t=this._hostElement,n=this._scrollerController?.element,i=this._layout;if(t&&n&&i){let s,o,r,l;const a=t.getBoundingClientRect();s=0,o=0,r=window.innerHeight,l=window.innerWidth;const c=this._clippingAncestors.map(m=>m.getBoundingClientRect());c.unshift(a);for(const m of c)s=Math.max(s,m.top),o=Math.max(o,m.left),r=Math.min(r,m.bottom),l=Math.min(l,m.right);const h=n.getBoundingClientRect(),u={left:a.left-h.left,top:a.top-h.top},f={width:n.scrollWidth,height:n.scrollHeight},d=s-a.top+t.scrollTop,b=o-a.left+t.scrollLeft,p=r-s,g=l-o;i.viewportSize={width:g,height:p},i.viewportScroll={top:d,left:b},i.totalScrollSize=f,i.offsetWithinScroller=u}}_sizeHostElement(t){const i=t&&t.width!==null?Math.min(82e5,t.width):0,s=t&&t.height!==null?Math.min(82e5,t.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${i}px, ${s}px)`;else{const o=this._hostElement.style;o.minWidth=i?`${i}px`:"100%",o.minHeight=s?`${s}px`:"100%"}}_positionChildren(t){t&&t.forEach(({top:n,left:i,width:s,height:o,xOffset:r,yOffset:l},a)=>{const c=this._children[a-this._first];c&&(c.style.position="absolute",c.style.boxSizing="border-box",c.style.transform=`translate(${i}px, ${n}px)`,s!==void 0&&(c.style.width=s+"px"),o!==void 0&&(c.style.height=o+"px"),c.style.left=r===void 0?null:r+"px",c.style.top=l===void 0?null:l+"px")})}async _adjustRange(t){const{_first:n,_last:i,_firstVisible:s,_lastVisible:o}=this;this._first=t.first,this._last=t.last,this._firstVisible=t.firstVisible,this._lastVisible=t.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==n||this._last!==i,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==s||this._lastVisible!==o}_correctScrollError(){if(this._scrollError){const{scrollTop:t,scrollLeft:n}=this._scrollerController,{top:i,left:s}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:t-i,left:n-s})}}element(t){return t===1/0&&(t=this._items.length-1),this._items?.[t]===void 0?void 0:{scrollIntoView:(n={})=>this._scrollElementIntoView({...n,index:t})}}_scrollElementIntoView(t){if(t.index>=this._first&&t.index<=this._last)this._children[t.index-this._first].scrollIntoView(t);else if(t.index=Math.min(t.index,this._items.length-1),t.behavior==="smooth"){const n=this._layout.getScrollIntoViewCoordinates(t),{behavior:i}=t;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(n,{behavior:i}),()=>this._layout.getScrollIntoViewCoordinates(t),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=t}else this._layout.pin=t}_checkScrollIntoViewTarget(t){const{index:n}=this._scrollIntoViewTarget||{};n&&t?.has(n)&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new Bt({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new Vt({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((t,n)=>{this._layoutCompleteResolver=t,this._layoutCompleteRejecter=n})),this._layoutCompletePromise}_rejectLayoutCompletePromise(t){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(t),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(t){if(this._layout?.measureChildren){for(const n of t)this._toBeMeasured.set(n.target,n.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}}function qi(e){const t=window.getComputedStyle(e);return{marginTop:Ct(t.marginTop),marginRight:Ct(t.marginRight),marginBottom:Ct(t.marginBottom),marginLeft:Ct(t.marginLeft)}}function Ct(e){const t=e?parseFloat(e):NaN;return Number.isNaN(t)?0:t}function Re(e){if(e.assignedSlot!==null)return e.assignedSlot;if(e.parentElement!==null)return e.parentElement;const t=e.parentNode;return t&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host||null}function Ki(e,t=!1){const n=[];let i=t?e:Re(e);for(;i!==null;)n.push(i),i=Re(i);return n}function Qi(e,t=!1){let n=!1;return Ki(e,t).filter(i=>{if(n)return!1;const s=getComputedStyle(i);return n=s.position==="fixed",s.overflow!=="visible"})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xi=e=>e,Zi=(e,t)=>E`${t}: ${JSON.stringify(e,null,2)}`;class Gi extends Jt{constructor(t){if(super(t),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(n,i)=>Zi(n,i+this._first),this._keyFunction=(n,i)=>Xi(n,i+this._first),this._items=[],t.type!==H.CHILD)throw new Error("The virtualize directive can only be used in child expressions")}render(t){t&&this._setFunctions(t);const n=[];if(this._first>=0&&this._last>=this._first)for(let i=this._first;i<=this._last;i++)n.push(this._items[i]);return ji(n,this._keyFunction,this._renderItem)}update(t,[n]){this._setFunctions(n);const i=this._items!==n.items;return this._items=n.items||[],this._virtualizer?this._updateVirtualizerConfig(t,n):this._initialize(t,n),i?B:this.render()}async _updateVirtualizerConfig(t,n){if(!await this._virtualizer.updateLayoutConfig(n.layout||{})){const s=t.parentNode;this._makeVirtualizer(s,n)}this._virtualizer.items=this._items}_setFunctions(t){const{renderItem:n,keyFunction:i}=t;n&&(this._renderItem=(s,o)=>n(s,o+this._first)),i&&(this._keyFunction=(s,o)=>i(s,o+this._first))}_makeVirtualizer(t,n){this._virtualizer&&this._virtualizer.disconnected();const{layout:i,scroller:s,items:o}=n;this._virtualizer=new Ui({hostElement:t,layout:i,scroller:s}),this._virtualizer.items=o,this._virtualizer.connected()}_initialize(t,n){const i=t.parentNode;i&&i.nodeType===1&&(i.addEventListener("rangeChanged",s=>{this._first=s.first,this._last=s.last,this.setValue(this.render())}),this._makeVirtualizer(i,n))}disconnected(){this._virtualizer?.disconnected()}reconnected(){this._virtualizer?.connected()}}const Ji=rt(Gi),ts=(e=HTMLElement)=>class extends e{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent("connected"))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent("disconnected"))}},es=(e,t)=>{if(!e||!t)return;const n=Object.keys(t);return Object.fromEntries(Object.keys(e).flatMap(i=>n.includes(i)?[]:[[i,void 0]]))};class ns extends gt{_props;render(t){return B}update(t,[n]){return this._props!==n&&Object.assign(t.element,es(this._props,n),this._props=n),B}}const is=rt(ns),ss=e=>{const t=Dt(),n=R(()=>new CSSStyleSheet,[]);S(()=>{t.shadowRoot.adoptedStyleSheets=[...t.shadowRoot.adoptedStyleSheets,n]},[]),S(()=>{n.replaceSync(e)},[e])};function os(e){return()=>e}const rs=os(),ls=rs,Tt=e=>e;function Js(e,...t){return typeof e=="function"?e(...t):e}function ln(e){return e?t=>t?.[e]:Tt}const as=e=>{const t=ln(e);return n=>typeof n=="string"?n:t(n)?.toString()||""},cs=e=>t=>{const n={};for(const i in t)e.includes(i)&&(n[i]=t[i]);return n},us="data:image/svg+xml,%3Csvg width='11' height='8' viewBox='0 0 11 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.5 1L5.20039 7.04766L1.66348 3.46152' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",hs=zt`
	:host {
		position: fixed;
		z-index: 1000;
		font-family: var(--paper-font-subhead_-_font-family, inherit);
		background: var(
			--cosmoz-autocomplete-listbox-bg,
			rgba(255, 255, 255, 0.75)
		);
		min-width: 50px;
		backdrop-filter: blur(16px) saturate(180%);
		-webkit-backdrop-filter: blur(16px) saturate(180%);
		border-radius: 6px;
		box-shadow:
			0 4px 24px 0 rgba(0, 0, 0, 0.18),
			0 1.5px 6px 0 rgba(0, 0, 0, 0.1);
		text-transform: var(--cosmoz-autocomplete-listbox-text-transform, initial);
		overflow: hidden;
		transition:
			opacity 150ms ease-in-out,
			transform 100ms ease-in-out;
	}
	:host(:popover-open) {
		box-sizing: border-box;
		display: block;
		margin: 0;
		border: 1px solid rgba(200, 200, 200, 0.25);

		opacity: 1;
		transform: translateY(0);

		@starting-style {
			opacity: 0;
			transform: translateY(-50px);
		}
	}
	:host([popover]) {
		padding: 0;
	}
	.items {
		position: relative;
		overflow-y: auto;
		contain: layout paint !important;
	}
	.item {
		font-size: var(--cosmoz-autocomplete-listbox-font-size, 13px);
		font-weight: var(--cosmoz-autocomplete-listbox-font-weight, 400);
		padding: 0 22px;
		box-sizing: border-box;
		width: 100%;
		cursor: pointer;
		text-overflow: ellipsis;
		white-space: nowrap;
		transition: background 0.2s;
		color: var(--cosmoz-listbox-color, #101010);
		overflow: hidden;
	}

	.sizer {
		position: relative;
		visibility: hidden;
		opacity: 0;
		pointer-events: none;
		z-index: -1;
		height: 0;
		width: auto;
		padding: 0 20px;
		overflow: hidden;
		max-width: inherit;
		font-size: 14px;
	}

	:host(:not([multi])) .item[aria-selected] {
		background: var(--cosmoz-listbox-single-selection-color, #dadada);
	}

	:host([multi]) .item {
		padding-left: 0;
	}

	:host([multi]) .item::before {
		content: '';
		font-size: 0;
		padding: 7.5px;
		margin: 0 8px;
		background: #fff;
		border: 1px solid #d6d6d5;
		border-radius: 4px;
		vertical-align: top;
	}

	:host([multi]) .item[aria-selected]::before {
		border-color: #5881f6;
		/* prettier-ignore */
		background: url("${us}") #5881f6 no-repeat 50%;
	}

	:host([multi]) .sizer {
		padding-left: 33px;
	}

	.swatch {
		width: 18px;
		height: 18px;
		display: inline-block;
		box-sizing: border-box;
		vertical-align: middle;
		border-radius: 50%;
	}

	[virtualizer-sizer]:not(.sizer) {
		line-height: 1;
	}
`,ds=({index:e,itemHeight:t,auto:n})=>zt`
	${et(!n,()=>zt`
			.item {
				line-height: ${t}px;
				height: ${t}px;
			}
		`)}

	.item[data-index='${e||"0"}'] {
		background: var(
			--cosmoz-listbox-active-color,
			var(--cosmoz-selection-color, rgba(58, 145, 226, 0.1))
		);
	}
`,fs=e=>typeof e=="object"&&e!==null&&Symbol.iterator in e;function ot(e){return e==null?[]:Array.isArray(e)?e:typeof e=="string"?[e]:fs(e)?Array.from(e):[e]}const qt=(e,t=Tt)=>n=>{const i=ot(e).map(t);return ot(n).filter(s=>!i.includes(t(s)))},ps=(e,t)=>t?n=>ot(e).find(i=>i[t]===n[t]):n=>ot(e).includes(n),ms=(e,t)=>{if(!t||!e)return e;const n=e.toLowerCase().indexOf(t.toLowerCase());if(n<0)return e;const i=n+t.length;return[e.slice(0,n),E`<mark>${e.slice(n,i)}</mark>`,e.slice(i)]},_t=e=>{const t=R(()=>({}),[]);return R(()=>Object.assign(t,e),[t,...Object.values(e)])},gs=e=>{const t=_t(e);S(()=>{const n=i=>{if(!(i.ctrlKey&&i.altKey||i.defaultPrevented))switch(i.key){case"Up":case"ArrowUp":i.preventDefault(),t.onUp();break;case"Down":case"ArrowDown":i.preventDefault(),t.onDown();break;case"Enter":i.preventDefault(),t.onEnter();break}};return document.addEventListener("keydown",n,!0),()=>document.removeEventListener("keydown",n,!0)},[t])},bs=({items:e,onSelect:t,defaultIndex:n=0})=>{const[i,s]=Q({index:n}),{index:o}=i,{length:r}=e;return S(()=>{s({index:i.index<0?n:Math.min(i.index,e.length-1),scroll:!0})},[e,n]),gs({onUp:x(()=>s(l=>({index:l.index>0?l.index-1:r-1,scroll:!0})),[r]),onDown:x(()=>s(l=>({index:l.index<r-1?l.index+1:0,scroll:!0})),[r]),onEnter:x(()=>o>-1&&o<r&&t?.(e[o],o),[o,e,t])}),{position:i,highlight:x(l=>s({index:l}),[]),select:x(l=>t?.(l),[t])}},vs=(e=Tt)=>(t,n,{highlight:i,select:s,textual:o=Tt,query:r,isSelected:l})=>{const a=o(t),c=ms(a,r),h=e(c,t,n);return E`<div
				class="item"
				role="option"
				part="option"
				?aria-selected=${l(t)}
				data-index=${n}
				@mouseenter=${()=>i(n)}
				@click=${()=>s(t)}
				@mousedown=${u=>u.preventDefault()}
				title=${a}
			>
				${h}
			</div>
			<div class="sizer" virtualizer-sizer>${h}</div>`},_s=({itemRenderer:e=vs(),...t})=>{const n=_t(t);return x((i,s)=>e(i,s,n),[n,e])},ys=e=>{const t=e==="auto",[n,i]=Q(t?40:e);return[n,s=>t?i(s):void 0]},ws=["query","items","onSelect","textual","anchor","itemHeight","itemLimit","itemRenderer","defaultIndex","value","valueProperty","loading"],xs=({value:e,valueProperty:t,items:n,onSelect:i,defaultIndex:s,query:o,textual:r,itemRenderer:l,itemHeight:a=40,itemLimit:c=5})=>{const h=R(()=>ps(e,t),[e,t]),u=R(()=>n.slice(),[n,h]),{position:f,highlight:d,select:b}=bs({items:u,onSelect:i,defaultIndex:isNaN(s)?void 0:Number(s)}),[p,g]=ys(a);return{position:f,items:u,height:Math.min(c,u.length)*p,highlight:d,select:b,itemHeight:p,setItemHeight:g,renderItem:_s({itemRenderer:l,items:u,position:f,highlight:d,select:b,textual:r,query:o,isSelected:h})}},Te=ls,Cs=e=>{const t=je(void 0),{position:n,items:i,renderItem:s,height:o,itemHeight:r,setItemHeight:l}=xs(e);return S(()=>{const a=t.current?.[Zt];a&&a.layoutComplete.then(()=>{e.dispatchEvent(new CustomEvent("layout-complete"));const{averageChildSize:c,averageMarginSize:h}=a._layout._metricsCache;return l(c+h*2)},Te)},[i]),S(()=>{if(!n.scroll)return;const a=t.current?.[Zt];if(a){if(!a?._layout){a.layoutComplete.then(()=>a.element(n.index)?.scrollIntoView({block:"nearest"}),Te);return}a.element(n.index)?.scrollIntoView({block:"nearest"})}},[n]),ss(ds({...n,itemHeight:r,auto:e.itemHeight==="auto"})),E`<div
			class="items"
			style="min-height: ${o}px"
			${vt(a=>t.current=a)}
		>
			<div virtualizer-sizer></div>
			${Ji({items:i,renderItem:s,scroller:!0})}
		</div>
		<slot></slot>`};customElements.define("cosmoz-listbox",ts(lt(Cs,{styleSheets:[ae(hs)]})));const Es=({multi:e,setFloating:t,styles:n,...i},s)=>E`<cosmoz-listbox
		style="${kn(n)}"
		@connected="${o=>o.target.showPopover?.()}"
		popover="manual"
		part="listbox"
		?multi=${e}
		${vt(t)}
		...=${is(cs(ws)(i))}
		>${s}</cosmoz-listbox
	>`,Ss=le`
	:host {
		border-radius: var(--cosmoz-autocomplete-chip-border-radius, 500px);
		background: var(--cosmoz-autocomplete-chip-bg-color, #cbcfdb);
		margin-bottom: 2px;
		display: flex;
		align-items: center;
		flex: 0.0001 1 fit-content;
		max-width: 18ch;
		min-width: 40px;
		padding-inline: 8px;
		gap: 4px;
		cursor: pointer;
		transform: translateY(var(--cosmoz-autocomplete-chip-translate-y, 0));
	}

	.content {
		color: var(--cosmoz-autocomplete-chip-color, #424242);
		font-family: var(
			--cosmoz-autocomplete-chip-text-font-family,
			'Inter',
			sans-serif
		);
		font-size: var(--cosmoz-autocomplete-chip-text-font-size, 12px);
		font-weight: var(--cosmoz-autocomplete-chip-text-font-weight, 400);
		line-height: var(--cosmoz-autocomplete-chip-text-line-height, 22px);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		flex: auto;
		min-width: 16px;
		text-align: center;
	}

	.clear {
		background-color: var(--cosmoz-autocomplete-chip-clear-bg-color, #81899b);
		border-radius: 50%;
		cursor: pointer;
		width: 16px;
		height: 16px;
		margin-right: -4px;
		stroke: var(
			--cosmoz-autocomplete-chip-clear-stroke,
			var(--cosmoz-autocomplete-chip-bg-color, #cbcfdb)
		);
		display: var(--cosmoz-autocomplete-chip-clear-display, block);
		flex: none;
	}

	.clear:hover {
		filter: brightness(90%);
	}
	.clear svg {
		display: block;
		transform: translate(3.5px, 3.5px);
	}
`,zs=E`
	<svg
		width="9"
		height="8"
		viewBox="0 0 9 8"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<line
			x1="7.53033"
			y1="0.994808"
			x2="1.16637"
			y2="7.35877"
			stroke-width="1.5"
		/>
		<line
			x1="7.46967"
			y1="7.35882"
			x2="1.10571"
			y2="0.99486"
			stroke-width="1.5"
		/>
	</svg>
`,$s=({onClear:e,disabled:t})=>E`
	<div class="content" part="content chip-text"><slot></slot></div>
	${et(e&&!t,()=>E`<span
				class="clear"
				part="clear chip-clear"
				@mousedown=${n=>n.preventDefault()}
				@click=${e}
			>
				${zs}
			</span>`)}
`;customElements.define("cosmoz-autocomplete-chip",lt($s,{observedAttributes:["disabled"],styleSheets:[ae(Ss)]}));const ks=({content:e,onClear:t,disabled:n,hidden:i,className:s="chip",slot:o})=>E`<cosmoz-autocomplete-chip
		class=${I(s)}
		slot=${I(o)}
		part="chip"
		exportparts="chip-text, chip-clear"
		?disabled=${n}
		?hidden=${i}
		.onClear=${t}
		title=${I(typeof e=="string"?e:void 0)}
		>${e}</cosmoz-autocomplete-chip
	>`,As=({value:e,min:t=0,onDeselect:n,textual:i,disabled:s,chipRenderer:o=ks})=>[...e.filter(Boolean).map(r=>o({item:r,content:i(r),onClear:e.length>t&&(()=>n(r)),disabled:s,slot:"control"})),o({item:null,content:E`<span></span>`,className:"badge",disabled:!0,slot:"control",hidden:!0})],Rs=zt`
	:host {
		display: inline-block;
		vertical-align: middle;
		background-image: linear-gradient(90deg, #e0e0e0, #f5f5f5, #e0e0e0);
		background-size: 1000%;
		background-position: right;
		animation: sweep 1.5s cubic-bezier(0.3, 1, 0.3, 1) infinite;
		border-radius: 3px;
		width: calc(100% - 20px);
		max-width: 150px;
		height: 20px;
		margin: 10px;
	}

	:host-context([show-single]) {
		margin-left: 20px;
	}

	@keyframes sweep {
		0% {
			background-position: right;
		}
		100% {
			background-position: left;
		}
	}
`;customElements.define("cosmoz-autocomplete-skeleton-span",lt(()=>pt,{styleSheets:[Rs]}));const Ts=le`
	:host {
		display: block;
		position: relative;
		min-width: 35px;
	}

	cosmoz-input::part(control) {
		display: flex;
		gap: 4px;
		min-width: 35px;
	}
	cosmoz-input::part(input) {
		flex: 1 24px;
		min-width: 0;
	}
	cosmoz-input:not([data-one])::part(input):focus {
		flex: 4 0.00001 50px;
		min-width: 20px;
	}
	.badge {
		min-width: initial;
		flex: none;
		text-align: center;
		padding: 0 4px;
	}

	[data-single]::part(input) {
		flex: 0;
	}
	[data-one] .chip {
		max-width: initial;
		flex: 1;
	}

	[data-one] .badge {
		display: none;
	}

	[hidden] {
		display: none;
	}

	:host([wrap]) cosmoz-input::part(control) {
		flex-wrap: wrap;
	}
	:host([wrap]) .chip {
		max-width: 100%;
	}

	slot {
		display: contents !important;
	}
`,Le=e=>e.matches(":focus-within"),Ls=({disabled:e,onFocus:t})=>{const[n,i]=Q(),{focused:s,closed:o}=n||{},r=s&&!e,l=_t({closed:o,onFocus:t}),a=x(h=>i(u=>({...u,closed:h})),[]),c=x(h=>{const u=h.currentTarget;return Le(u)?i(f=>({focused:!0,closed:!f?.closed})):u.focus()},[]);return S(()=>{if(!r)return;const h=u=>{if(u.defaultPrevented)return;const{closed:f}=l;u.key==="Escape"&&!f?(u.preventDefault(),a(!0)):["ArrowUp","Up"].includes(u.key)&&f&&(u.preventDefault(),a(!1))};return document.addEventListener("keydown",h,!0),()=>document.removeEventListener("keydown",h,!0)},[r]),{focused:r,active:r&&!o,setClosed:a,onToggle:c,onFocus:x(h=>{const u=Le(h.currentTarget);i({focused:u}),l.onFocus?.(u)},[l])}},Os=({focused:e,empty:t,...n})=>{const i=e&&t&&n.limit!==1,s=_t(n);S(()=>{if(!i)return;const o=r=>{if(r.defaultPrevented)return;const{key:l}=r,a=ot(s.value),c=s.limit==1;if(a.length>0&&(l==="Backspace"||c&&l.length===1))return s.onChange(a.slice(0,-1))};return document.addEventListener("keydown",o,!0),()=>document.removeEventListener("keydown",o,!0)},[i,s])},Oe=e=>e.normalize("NFD").replace(/[\u0300-\u036f]/gu,""),Ms=(e,t,n)=>{if(!t)return e;const i=Oe(t.toLowerCase()),s=[];for(const o of e){const l=Oe(n(o).toLowerCase()).indexOf(i);l<0||s.push({item:o,index:l})}return s.sort((o,r)=>o.index-r.index).map(({item:o})=>o)},Ps=e=>e===!1||e==null?[]:e,an=(e,t,n)=>e.dispatchEvent(new CustomEvent(t,{detail:n})),Is=(e,t,n)=>x(i=>{t?.(i),an(e,n,i)},[t]),Fs=[],Ds=e=>(...t)=>{let n;const i=()=>{n&&cancelAnimationFrame(n)};return i(),n=requestAnimationFrame(()=>{n=void 0,e(...t)}),i},ce=(e,t=()=>({}))=>{const n={type:e,toString(){return e}};return Object.assign((...s)=>Object.assign(t(...s),n),n)},Me=e=>e.type||e.toString(),Pe=e=>Array.isArray(e)?e:[e],Bs=(e,t)=>{const n=Pe(t),i=(n.every(Array.isArray)?n:[n]).map(([s,o])=>({actions:Pe(s).map(Me),handle:o}));return(s=e,o)=>{const r=i.find(l=>l.actions.includes(Me(o)));return r?r.handle(s,o):s}},nt={pending:"pending",rejected:"rejected",resolved:"resolved"},cn={error:void 0,result:void 0,state:nt.pending},un=ce(nt.pending),hn=ce(nt.resolved,e=>({result:e})),dn=ce(nt.rejected,e=>({error:e})),Vs=Bs(cn,[[un,()=>({error:void 0,result:void 0,state:nt.pending})],[hn,(e,{result:t})=>({error:void 0,result:t,state:nt.resolved})],[dn,(e,{error:t})=>({error:t,result:void 0,state:nt.rejected})]]),Ns=e=>{const[{error:t,result:n,state:i},s]=jn(Vs,cn);return S(()=>{if(!e)return;let o=!1;return s(un()),e.then(r=>!o&&s(hn(r)),r=>!o&&s(dn(r))),()=>{o=!0}},[e]),[n,t,i]},Hs=({value:e,text:t,onChange:n,onText:i,onSelect:s,limit:o,min:r,source:l,textProperty:a,textual:c,valueProperty:h,keepOpened:u,keepQuery:f,preserveOrder:d,defaultIndex:b,externalSearch:p,...g})=>{const m=R(()=>(c??as)(a),[c,a]),{active:v,focused:_,onFocus:w,setClosed:y}=Ls(g),z=!t,$=R(()=>t?.trim(),[t]),k=Dt(),T=Is(k,i,"text"),O=x(C=>{n?.(C,()=>y(!0)),an(k,"value",C)},[n]),[F,D]=Q([]),U=R(()=>Promise.resolve(typeof l=="function"?l({query:$,active:v}):l).then(Ps),[l,v,$]),L=R(()=>ot(e),[e]);S(()=>U.then(D),[U]),Os({focused:_,empty:z,limit:o,value:L,onChange:O,onText:T}),S(()=>{_||T("")},[_]);const A=_t({onText:T,onChange:O,value:L,limit:o,min:r,keepQuery:f,keepOpened:u,setClosed:y,onSelect:s}),[,,q]=Ns(U);return{active:v,query:$,textual:m,value:L,source$:U,loading:q==="pending",items:R(()=>{if(!v)return Fs;const C=d?F:[...L,...qt(L,ln(h))(F)];return p?C:Ms(C,$,m)},[F,v,$,m,z,L,d,h,p]),onClick:x(()=>y(!1),[]),onFocus:w,onText:x(C=>{T(C.target.value),y(!1)},[T,t,y]),onSelect:x(C=>{A.onSelect?.(C,A);const{onChange:Ht,onText:gn,limit:bn,min:vn,value:_n,keepQuery:yn,keepOpened:wn,setClosed:xn}=A;yn||gn(""),wn||xn(!0);const yt=ot(_n),ue=yt.includes(C);ue&&yt.length===vn||Ht((ue?qt(C)(yt):[...yt,C]).slice(-bn))},[A]),onDeselect:x(C=>A.onChange(qt(C)(A.value)),[A]),defaultIndex:$!==void 0&&$?.length>0?0:b}},js=e=>{const t=e.shadowRoot.querySelectorAll(".chip"),n=e.shadowRoot.querySelector(".badge");n.hidden=!0;for(const l of t)l.hidden=!1;const s=e.shadowRoot.querySelector("cosmoz-input").shadowRoot?.querySelector(".control")?.getBoundingClientRect();let o;for(o=0;o<t.length;o++){const a=t[o].getBoundingClientRect();if(!(a.x+a.width<=s.x+s.width-24))break}const r=t.length-o;for(n.querySelector("span").textContent="+"+r.toString(),n.hidden=r<1;o<t.length;o++)t[o].hidden=!0},Ws=({value:e,active:t,wrap:n,limit:i})=>{const s=Dt(),o=!(n||i==1),r=R(()=>Ds(()=>js(s)),[]),[l,a]=Q(0);ge(()=>{if(!o)return;const c=s.shadowRoot.querySelector("cosmoz-input"),h=new ResizeObserver(u=>{a(u[0].contentRect.width)});return h.observe(c),()=>h.disconnect()},[o]),ge(()=>o?r():void 0,[o,l,t,e])},Ys=["input","control","label","line","error","wrap"].map(e=>`${e}: input-${e}`).join(),Us=[ki({apply({rects:e,elements:t}){Object.assign(t.floating.style,{minWidth:`${Math.max(e.reference.width,e.floating.width)}px`})}}),...en],qs=({active:e,isSingle:t,showSingle:n})=>e?!(t&&!n):!1,Ks=e=>{const{active:t,invalid:n,errorMessage:i,label:s,placeholder:o,disabled:r,noLabelFloat:l,alwaysFloatLabel:a,textual:c,text:h,onText:u,onFocus:f,onClick:d,onDeselect:b,value:p,limit:g,min:m,showSingle:v,items:_,source$:w,placement:y,loading:z,chipRenderer:$}=e,k=Dt(),T=g==1,O=T&&p?.[0]!=null,{styles:F,setReference:D,setFloating:U}=Ri({placement:y,middleware:Us});S(()=>(k.addEventListener("focusin",f),k.addEventListener("focusout",f),()=>{k.removeEventListener("focusin",f),k.removeEventListener("focusout",f)}),[f]),re({focus:()=>k.shadowRoot?.querySelector("#input")?.focus()},[]);const L=z||_.length>0||h!=null&&h.length>0;return E`<cosmoz-input
				id="input"
				part="input"
				${vt(D)}
				.label=${s}
				.placeholder=${O?void 0:o}
				?no-label-float=${l}
				?always-float-label=${p?.length>0||a}
				?readonly=${O}
				?disabled=${r}
				?invalid=${ze(w.then(()=>n,()=>!0),n)}
				.errorMessage=${ze(w.then(()=>i,A=>A.message),i)}
				.value=${oe(h)}
				@value-changed=${u}
				@click=${d}
				autocomplete="off"
				exportparts=${Ys}
				?data-one=${T}
				?data-single=${O}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix"></slot>
				${As({value:p,min:m,onDeselect:b,textual:c,disabled:r,chipRenderer:$})}
			</cosmoz-input>

			${et(qs({active:t,isSingle:O,showSingle:v}),()=>Es({...e,items:_,multi:!T,setFloating:U,styles:{...F,display:L?void 0:"none"}},et(z,()=>E`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>et(h!=null&&h.length>0&&_.length===0,()=>E`<slot name="no-result"></slot>`))))}`},fn=e=>{const t={...e,...Hs(e)};return Ws(t),Ks(t)},pn=["disabled","invalid","no-label-float","always-float-label","text-property","value-property","limit","min","show-single","preserve-order","keep-opened","keep-query","default-index","external-search","item-height","item-limit","wrap"],Qs=e=>{const{onChange:t,onText:n,...i}=e,[s,o]=Yn("value");return S(()=>{e.onChange!=null&&console.warn("onChange is deprecated; use value-changed and lift instead")},[]),fn({...i,value:s,onChange:x((r,...l)=>{o(r),t?.(r,...l)},[t]),onText:x(r=>{e.text=r,n?.(r)},[n])})},mn=[ae(Ts)];customElements.define("cosmoz-autocomplete-ui",lt(fn,{observedAttributes:pn,styleSheets:mn}));customElements.define("cosmoz-autocomplete",lt(Qs,{observedAttributes:pn,styleSheets:mn}));const to=["Red","Green","Purple","Blue","White","Brown","Aqua","Nothing"].map(e=>({text:e}));export{fn as A,x as a,lt as b,zt as c,I as d,to as e,kn as f,Js as i,et as n,pn as o,Ts as s,Yn as u};
