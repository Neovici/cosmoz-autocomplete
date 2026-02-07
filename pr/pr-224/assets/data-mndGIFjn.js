import{B as fn,c as pn,d as ie,a as T,r as ke,D as mn,E as F,e as Z,f as $,A as pt,p as Ae,h as Re,H as Le,b as E,n as gn,M as vn,g as et,v as dt,i as Ht,j as bn,k as oe,t as _n,u as yn}from"./iframe-Bqd4JqMi.js";import{_ as wn}from"./preload-helper-PPVm8Dsz.js";const Xt=(...e)=>{const t=new CSSStyleSheet;return t.replaceSync(e.join("")),t},xn=e=>e?.map(t=>typeof t=="string"?Xt(t):t),Cn=(e,...t)=>e.flatMap((n,i)=>[n,t[i]||""]).join(""),at=Cn,Sn=(e="")=>e.replace(/-+([a-z])?/g,(t,n)=>n?n.toUpperCase():"");function En(e){class t extends fn{frag;renderResult;constructor(o,s,r){super(o,r||s),this.frag=s}commit(o){this.renderResult=e(o,this.frag)}}function n(i,o,s){const r=(s||o||{}).baseElement||HTMLElement,{observedAttributes:l=[],useShadowDOM:a=!0,shadowRootInit:c={},styleSheets:h}=s||o||{},u=xn(i.styleSheets||h);class f extends r{_scheduler;static get observedAttributes(){return i.observedAttributes||l||[]}constructor(){if(super(),a===!1)this._scheduler=new t(i,this);else{const v=this.attachShadow({mode:"open",...c});u&&(v.adoptedStyleSheets=u),this._scheduler=new t(i,v,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(v,m,b){if(m===b)return;let _=b===""?!0:b;Reflect.set(this,Sn(v),_)}}function d(p){let v=p,m=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return v},set(b){m&&v===b||(m=!0,v=b,this._scheduler&&this._scheduler.update())}})}const g=new Proxy(r.prototype,{getPrototypeOf(p){return p},set(p,v,m,b){let _;return v in p?(_=Object.getOwnPropertyDescriptor(p,v),_&&_.set?(_.set.call(b,m),!0):(Reflect.set(p,v,m,b),!0)):(typeof v=="symbol"||v[0]==="_"?_={enumerable:!0,configurable:!0,writable:!0,value:m}:_=d(m),Object.defineProperty(b,v,_),_.set&&_.set.call(b,m),!0)}});return Object.setPrototypeOf(f.prototype,g),f}return n}function zn(e){return t=>{const n={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(ie,this)}disconnectedCallback(){this.removeEventListener(ie,this)}handleEvent(i){const{detail:o}=i;o.Context===n&&(o.value=this.value,o.unsubscribe=this.unsubscribe.bind(this,o.callback),this.listeners.add(o.callback),i.stopPropagation())}unsubscribe(i){this.listeners.delete(i)}set value(i){this._value=i;for(let o of this.listeners)o(i)}get value(){return this._value}},Consumer:e(function({render:i}){const o=pn(n);return i(o)},{useShadowDOM:!1}),defaultValue:t};return n}}const w=(e,t)=>T(()=>e,t);function Te(e){return T(()=>({current:e}),[])}function $n({render:e}){const t=En(e),n=zn(t);return{component:t,createContext:n}}const W={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},rt=e=>(...t)=>({_$litDirective$:e,values:t});let gt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,i){this._$Ct=t,this._$AM=n,this._$Ci=i}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}};const ft=(e,t)=>{const n=e._$AN;if(n===void 0)return!1;for(const i of n)i._$AO?.(t,!1),ft(i,t);return!0},St=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},Oe=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Rn(t)}};function kn(e){this._$AN!==void 0?(St(this),this._$AM=e,Oe(this)):this._$AM=e}function An(e,t=!1,n=0){const i=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(t)if(Array.isArray(i))for(let s=n;s<i.length;s++)ft(i[s],!1),St(i[s]);else i!=null&&(ft(i,!1),St(i));else ft(this,e)}const Rn=e=>{e.type==W.CHILD&&(e._$AP??=An,e._$AQ??=kn)};class Kt extends gt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,n,i){super._$AT(t,n,i),Oe(this),this.isConnected=t._$AU}_$AO(t,n=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),n&&(ft(this,t),St(this))}setValue(t){if(ke(this._$Ct))this._$Ct._$AI(t,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=t,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}}const{component:J}=$n({render:mn});const Me="important",Ln=" !"+Me,Tn=rt(class extends gt{constructor(e){if(super(e),e.type!==W.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{const i=e[n];return i==null?t:t+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(e,[t]){const{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const i of this.ft)t[i]==null&&(this.ft.delete(i),i.includes("-")?n.removeProperty(i):n[i]=null);for(const i in t){const o=t[i];if(o!=null){this.ft.add(i);const s=typeof o=="string"&&o.endsWith(Ln);i.includes("-")||s?n.setProperty(i,s?o.slice(0,-11):o,s?Me:""):n[i]=o}}return F}});function X(e,t,n){return e?t(e):n?.(e)}const At=(e,...t)=>e.flatMap((n,i)=>[n,t[i]??""]).join(""),Zt=(...e)=>{const t=new CSSStyleSheet;return t.replaceSync(e.join("")),t},ct=Math.min,P=Math.max,Et=Math.round,wt=Math.floor,U=e=>({x:e,y:e}),On={left:"right",right:"left",bottom:"top",top:"bottom"},Mn={start:"end",end:"start"};function se(e,t,n){return P(e,ct(t,n))}function Rt(e,t){return typeof e=="function"?e(t):e}function it(e){return e.split("-")[0]}function Lt(e){return e.split("-")[1]}function Pe(e){return e==="x"?"y":"x"}function De(e){return e==="y"?"height":"width"}const Pn=new Set(["top","bottom"]);function K(e){return Pn.has(it(e))?"y":"x"}function Ie(e){return Pe(K(e))}function Dn(e,t,n){n===void 0&&(n=!1);const i=Lt(e),o=Ie(e),s=De(o);let r=o==="x"?i===(n?"end":"start")?"right":"left":i==="start"?"bottom":"top";return t.reference[s]>t.floating[s]&&(r=zt(r)),[r,zt(r)]}function In(e){const t=zt(e);return[Yt(e),t,Yt(t)]}function Yt(e){return e.replace(/start|end/g,t=>Mn[t])}const re=["left","right"],le=["right","left"],Bn=["top","bottom"],Vn=["bottom","top"];function Fn(e,t,n){switch(e){case"top":case"bottom":return n?t?le:re:t?re:le;case"left":case"right":return t?Bn:Vn;default:return[]}}function Nn(e,t,n,i){const o=Lt(e);let s=Fn(it(e),n==="start",i);return o&&(s=s.map(r=>r+"-"+o),t&&(s=s.concat(s.map(Yt)))),s}function zt(e){return e.replace(/left|right|bottom|top/g,t=>On[t])}function Hn(e){return{top:0,right:0,bottom:0,left:0,...e}}function jn(e){return typeof e!="number"?Hn(e):{top:e,right:e,bottom:e,left:e}}function $t(e){const{x:t,y:n,width:i,height:o}=e;return{width:i,height:o,top:n,left:t,right:t+i,bottom:n+o,x:t,y:n}}function ae(e,t,n){let{reference:i,floating:o}=e;const s=K(t),r=Ie(t),l=De(r),a=it(t),c=s==="y",h=i.x+i.width/2-o.width/2,u=i.y+i.height/2-o.height/2,f=i[l]/2-o[l]/2;let d;switch(a){case"top":d={x:h,y:i.y-o.height};break;case"bottom":d={x:h,y:i.y+i.height};break;case"right":d={x:i.x+i.width,y:u};break;case"left":d={x:i.x-o.width,y:u};break;default:d={x:i.x,y:i.y}}switch(Lt(t)){case"start":d[r]-=f*(n&&c?-1:1);break;case"end":d[r]+=f*(n&&c?-1:1);break}return d}async function Wn(e,t){var n;t===void 0&&(t={});const{x:i,y:o,platform:s,rects:r,elements:l,strategy:a}=e,{boundary:c="clippingAncestors",rootBoundary:h="viewport",elementContext:u="floating",altBoundary:f=!1,padding:d=0}=Rt(t,e),g=jn(d),v=l[f?u==="floating"?"reference":"floating":u],m=$t(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(v)))==null||n?v:v.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(l.floating)),boundary:c,rootBoundary:h,strategy:a})),b=u==="floating"?{x:i,y:o,width:r.floating.width,height:r.floating.height}:r.reference,_=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l.floating)),y=await(s.isElement==null?void 0:s.isElement(_))?await(s.getScale==null?void 0:s.getScale(_))||{x:1,y:1}:{x:1,y:1},x=$t(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:b,offsetParent:_,strategy:a}):b);return{top:(m.top-x.top+g.top)/y.y,bottom:(x.bottom-m.bottom+g.bottom)/y.y,left:(m.left-x.left+g.left)/y.x,right:(x.right-m.right+g.right)/y.x}}const Un=async(e,t,n)=>{const{placement:i="bottom",strategy:o="absolute",middleware:s=[],platform:r}=n,l=s.filter(Boolean),a=await(r.isRTL==null?void 0:r.isRTL(t));let c=await r.getElementRects({reference:e,floating:t,strategy:o}),{x:h,y:u}=ae(c,i,a),f=i,d={},g=0;for(let v=0;v<l.length;v++){var p;const{name:m,fn:b}=l[v],{x:_,y,data:x,reset:S}=await b({x:h,y:u,initialPlacement:i,placement:f,strategy:o,middlewareData:d,rects:c,platform:{...r,detectOverflow:(p=r.detectOverflow)!=null?p:Wn},elements:{reference:e,floating:t}});h=_??h,u=y??u,d={...d,[m]:{...d[m],...x}},S&&g<=50&&(g++,typeof S=="object"&&(S.placement&&(f=S.placement),S.rects&&(c=S.rects===!0?await r.getElementRects({reference:e,floating:t,strategy:o}):S.rects),{x:h,y:u}=ae(c,f,a)),v=-1)}return{x:h,y:u,placement:f,strategy:o,middlewareData:d}},Yn=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,i;const{placement:o,middlewareData:s,rects:r,initialPlacement:l,platform:a,elements:c}=t,{mainAxis:h=!0,crossAxis:u=!0,fallbackPlacements:f,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:p=!0,...v}=Rt(e,t);if((n=s.arrow)!=null&&n.alignmentOffset)return{};const m=it(o),b=K(l),_=it(l)===l,y=await(a.isRTL==null?void 0:a.isRTL(c.floating)),x=f||(_||!p?[zt(l)]:In(l)),S=g!=="none";!f&&S&&x.push(...Nn(l,p,g,y));const z=[l,...x],R=await a.detectOverflow(t,v),k=[];let A=((i=s.flip)==null?void 0:i.overflows)||[];if(h&&k.push(R[m]),u){const L=Dn(o,r,y);k.push(R[L[0]],R[L[1]])}if(A=[...A,{placement:o,overflows:k}],!k.every(L=>L<=0)){var V,G;const L=(((V=s.flip)==null?void 0:V.index)||0)+1,O=z[L];if(O&&(!(u==="alignment"?b!==K(O):!1)||A.every(M=>K(M.placement)===b?M.overflows[0]>0:!0)))return{data:{index:L,overflows:A},reset:{placement:O}};let tt=(G=A.filter(C=>C.overflows[0]<=0).sort((C,M)=>C.overflows[1]-M.overflows[1])[0])==null?void 0:G.placement;if(!tt)switch(d){case"bestFit":{var I;const C=(I=A.filter(M=>{if(S){const j=K(M.placement);return j===b||j==="y"}return!0}).map(M=>[M.placement,M.overflows.filter(j=>j>0).reduce((j,Nt)=>j+Nt,0)]).sort((M,j)=>M[1]-j[1])[0])==null?void 0:I[0];C&&(tt=C);break}case"initialPlacement":tt=l;break}if(o!==tt)return{reset:{placement:tt}}}return{}}}},qn=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:i,placement:o,platform:s}=t,{mainAxis:r=!0,crossAxis:l=!1,limiter:a={fn:m=>{let{x:b,y:_}=m;return{x:b,y:_}}},...c}=Rt(e,t),h={x:n,y:i},u=await s.detectOverflow(t,c),f=K(it(o)),d=Pe(f);let g=h[d],p=h[f];if(r){const m=d==="y"?"top":"left",b=d==="y"?"bottom":"right",_=g+u[m],y=g-u[b];g=se(_,g,y)}if(l){const m=f==="y"?"top":"left",b=f==="y"?"bottom":"right",_=p+u[m],y=p-u[b];p=se(_,p,y)}const v=a.fn({...t,[d]:g,[f]:p});return{...v,data:{x:v.x-n,y:v.y-i,enabled:{[d]:r,[f]:l}}}}}},Gn=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var n,i;const{placement:o,rects:s,platform:r,elements:l}=t,{apply:a=()=>{},...c}=Rt(e,t),h=await r.detectOverflow(t,c),u=it(o),f=Lt(o),d=K(o)==="y",{width:g,height:p}=s.floating;let v,m;u==="top"||u==="bottom"?(v=u,m=f===(await(r.isRTL==null?void 0:r.isRTL(l.floating))?"start":"end")?"left":"right"):(m=u,v=f==="end"?"top":"bottom");const b=p-h.top-h.bottom,_=g-h.left-h.right,y=ct(p-h[v],b),x=ct(g-h[m],_),S=!t.middlewareData.shift;let z=y,R=x;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(R=_),(i=t.middlewareData.shift)!=null&&i.enabled.y&&(z=b),S&&!f){const A=P(h.left,0),V=P(h.right,0),G=P(h.top,0),I=P(h.bottom,0);d?R=g-2*(A!==0||V!==0?A+V:P(h.left,h.right)):z=p-2*(G!==0||I!==0?G+I:P(h.top,h.bottom))}await a({...t,availableWidth:R,availableHeight:z});const k=await r.getDimensions(l.floating);return g!==k.width||p!==k.height?{reset:{rects:!0}}:{}}}};function Tt(){return typeof window<"u"}function ut(e){return Be(e)?(e.nodeName||"").toLowerCase():"#document"}function D(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function q(e){var t;return(t=(Be(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Be(e){return Tt()?e instanceof Node||e instanceof D(e).Node:!1}function N(e){return Tt()?e instanceof Element||e instanceof D(e).Element:!1}function Y(e){return Tt()?e instanceof HTMLElement||e instanceof D(e).HTMLElement:!1}function ce(e){return!Tt()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof D(e).ShadowRoot}const Xn=new Set(["inline","contents"]);function vt(e){const{overflow:t,overflowX:n,overflowY:i,display:o}=H(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+n)&&!Xn.has(o)}const Kn=new Set(["table","td","th"]);function Zn(e){return Kn.has(ut(e))}const Qn=[":popover-open",":modal"];function Ot(e){return Qn.some(t=>{try{return e.matches(t)}catch{return!1}})}const Jn=["transform","translate","scale","rotate","perspective"],ti=["transform","translate","scale","rotate","perspective","filter"],ei=["paint","layout","strict","content"];function Qt(e){const t=Jt(),n=N(e)?H(e):e;return Jn.some(i=>n[i]?n[i]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||ti.some(i=>(n.willChange||"").includes(i))||ei.some(i=>(n.contain||"").includes(i))}function ni(e){let t=Q(e);for(;Y(t)&&!ht(t);){if(Qt(t))return t;if(Ot(t))return null;t=Q(t)}return null}function Jt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const ii=new Set(["html","body","#document"]);function ht(e){return ii.has(ut(e))}function H(e){return D(e).getComputedStyle(e)}function Mt(e){return N(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Q(e){if(ut(e)==="html")return e;const t=e.assignedSlot||e.parentNode||ce(e)&&e.host||q(e);return ce(t)?t.host:t}function Ve(e){const t=Q(e);return ht(t)?e.ownerDocument?e.ownerDocument.body:e.body:Y(t)&&vt(t)?t:Ve(t)}function mt(e,t,n){var i;t===void 0&&(t=[]),n===void 0&&(n=!0);const o=Ve(e),s=o===((i=e.ownerDocument)==null?void 0:i.body),r=D(o);if(s){const l=qt(r);return t.concat(r,r.visualViewport||[],vt(o)?o:[],l&&n?mt(l):[])}return t.concat(o,mt(o,[],n))}function qt(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Fe(e){const t=H(e);let n=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const o=Y(e),s=o?e.offsetWidth:n,r=o?e.offsetHeight:i,l=Et(n)!==s||Et(i)!==r;return l&&(n=s,i=r),{width:n,height:i,$:l}}function te(e){return N(e)?e:e.contextElement}function lt(e){const t=te(e);if(!Y(t))return U(1);const n=t.getBoundingClientRect(),{width:i,height:o,$:s}=Fe(t);let r=(s?Et(n.width):n.width)/i,l=(s?Et(n.height):n.height)/o;return(!r||!Number.isFinite(r))&&(r=1),(!l||!Number.isFinite(l))&&(l=1),{x:r,y:l}}const oi=U(0);function Ne(e){const t=D(e);return!Jt()||!t.visualViewport?oi:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function si(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==D(e)?!1:t}function ot(e,t,n,i){t===void 0&&(t=!1),n===void 0&&(n=!1);const o=e.getBoundingClientRect(),s=te(e);let r=U(1);t&&(i?N(i)&&(r=lt(i)):r=lt(e));const l=si(s,n,i)?Ne(s):U(0);let a=(o.left+l.x)/r.x,c=(o.top+l.y)/r.y,h=o.width/r.x,u=o.height/r.y;if(s){const f=D(s),d=i&&N(i)?D(i):i;let g=f,p=qt(g);for(;p&&i&&d!==g;){const v=lt(p),m=p.getBoundingClientRect(),b=H(p),_=m.left+(p.clientLeft+parseFloat(b.paddingLeft))*v.x,y=m.top+(p.clientTop+parseFloat(b.paddingTop))*v.y;a*=v.x,c*=v.y,h*=v.x,u*=v.y,a+=_,c+=y,g=D(p),p=qt(g)}}return $t({width:h,height:u,x:a,y:c})}function Pt(e,t){const n=Mt(e).scrollLeft;return t?t.left+n:ot(q(e)).left+n}function He(e,t){const n=e.getBoundingClientRect(),i=n.left+t.scrollLeft-Pt(e,n),o=n.top+t.scrollTop;return{x:i,y:o}}function ri(e){let{elements:t,rect:n,offsetParent:i,strategy:o}=e;const s=o==="fixed",r=q(i),l=t?Ot(t.floating):!1;if(i===r||l&&s)return n;let a={scrollLeft:0,scrollTop:0},c=U(1);const h=U(0),u=Y(i);if((u||!u&&!s)&&((ut(i)!=="body"||vt(r))&&(a=Mt(i)),Y(i))){const d=ot(i);c=lt(i),h.x=d.x+i.clientLeft,h.y=d.y+i.clientTop}const f=r&&!u&&!s?He(r,a):U(0);return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-a.scrollLeft*c.x+h.x+f.x,y:n.y*c.y-a.scrollTop*c.y+h.y+f.y}}function li(e){return Array.from(e.getClientRects())}function ai(e){const t=q(e),n=Mt(e),i=e.ownerDocument.body,o=P(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),s=P(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight);let r=-n.scrollLeft+Pt(e);const l=-n.scrollTop;return H(i).direction==="rtl"&&(r+=P(t.clientWidth,i.clientWidth)-o),{width:o,height:s,x:r,y:l}}const he=25;function ci(e,t){const n=D(e),i=q(e),o=n.visualViewport;let s=i.clientWidth,r=i.clientHeight,l=0,a=0;if(o){s=o.width,r=o.height;const h=Jt();(!h||h&&t==="fixed")&&(l=o.offsetLeft,a=o.offsetTop)}const c=Pt(i);if(c<=0){const h=i.ownerDocument,u=h.body,f=getComputedStyle(u),d=h.compatMode==="CSS1Compat"&&parseFloat(f.marginLeft)+parseFloat(f.marginRight)||0,g=Math.abs(i.clientWidth-u.clientWidth-d);g<=he&&(s-=g)}else c<=he&&(s+=c);return{width:s,height:r,x:l,y:a}}const hi=new Set(["absolute","fixed"]);function ui(e,t){const n=ot(e,!0,t==="fixed"),i=n.top+e.clientTop,o=n.left+e.clientLeft,s=Y(e)?lt(e):U(1),r=e.clientWidth*s.x,l=e.clientHeight*s.y,a=o*s.x,c=i*s.y;return{width:r,height:l,x:a,y:c}}function ue(e,t,n){let i;if(t==="viewport")i=ci(e,n);else if(t==="document")i=ai(q(e));else if(N(t))i=ui(t,n);else{const o=Ne(e);i={x:t.x-o.x,y:t.y-o.y,width:t.width,height:t.height}}return $t(i)}function je(e,t){const n=Q(e);return n===t||!N(n)||ht(n)?!1:H(n).position==="fixed"||je(n,t)}function di(e,t){const n=t.get(e);if(n)return n;let i=mt(e,[],!1).filter(l=>N(l)&&ut(l)!=="body"),o=null;const s=H(e).position==="fixed";let r=s?Q(e):e;for(;N(r)&&!ht(r);){const l=H(r),a=Qt(r);!a&&l.position==="fixed"&&(o=null),(s?!a&&!o:!a&&l.position==="static"&&!!o&&hi.has(o.position)||vt(r)&&!a&&je(e,r))?i=i.filter(h=>h!==r):o=l,r=Q(r)}return t.set(e,i),i}function fi(e){let{element:t,boundary:n,rootBoundary:i,strategy:o}=e;const r=[...n==="clippingAncestors"?Ot(t)?[]:di(t,this._c):[].concat(n),i],l=r[0],a=r.reduce((c,h)=>{const u=ue(t,h,o);return c.top=P(u.top,c.top),c.right=ct(u.right,c.right),c.bottom=ct(u.bottom,c.bottom),c.left=P(u.left,c.left),c},ue(t,l,o));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function pi(e){const{width:t,height:n}=Fe(e);return{width:t,height:n}}function mi(e,t,n){const i=Y(t),o=q(t),s=n==="fixed",r=ot(e,!0,s,t);let l={scrollLeft:0,scrollTop:0};const a=U(0);function c(){a.x=Pt(o)}if(i||!i&&!s)if((ut(t)!=="body"||vt(o))&&(l=Mt(t)),i){const d=ot(t,!0,s,t);a.x=d.x+t.clientLeft,a.y=d.y+t.clientTop}else o&&c();s&&!i&&o&&c();const h=o&&!i&&!s?He(o,l):U(0),u=r.left+l.scrollLeft-a.x-h.x,f=r.top+l.scrollTop-a.y-h.y;return{x:u,y:f,width:r.width,height:r.height}}function jt(e){return H(e).position==="static"}function de(e,t){if(!Y(e)||H(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return q(e)===n&&(n=n.ownerDocument.body),n}function We(e,t){const n=D(e);if(Ot(e))return n;if(!Y(e)){let o=Q(e);for(;o&&!ht(o);){if(N(o)&&!jt(o))return o;o=Q(o)}return n}let i=de(e,t);for(;i&&Zn(i)&&jt(i);)i=de(i,t);return i&&ht(i)&&jt(i)&&!Qt(i)?n:i||ni(e)||n}const gi=async function(e){const t=this.getOffsetParent||We,n=this.getDimensions,i=await n(e.floating);return{reference:mi(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function vi(e){return H(e).direction==="rtl"}const bi={convertOffsetParentRelativeRectToViewportRelativeRect:ri,getDocumentElement:q,getClippingRect:fi,getOffsetParent:We,getElementRects:gi,getClientRects:li,getDimensions:pi,getScale:lt,isElement:N,isRTL:vi};function Ue(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function _i(e,t){let n=null,i;const o=q(e);function s(){var l;clearTimeout(i),(l=n)==null||l.disconnect(),n=null}function r(l,a){l===void 0&&(l=!1),a===void 0&&(a=1),s();const c=e.getBoundingClientRect(),{left:h,top:u,width:f,height:d}=c;if(l||t(),!f||!d)return;const g=wt(u),p=wt(o.clientWidth-(h+f)),v=wt(o.clientHeight-(u+d)),m=wt(h),_={rootMargin:-g+"px "+-p+"px "+-v+"px "+-m+"px",threshold:P(0,ct(1,a))||1};let y=!0;function x(S){const z=S[0].intersectionRatio;if(z!==a){if(!y)return r();z?r(!1,z):i=setTimeout(()=>{r(!1,1e-7)},1e3)}z===1&&!Ue(c,e.getBoundingClientRect())&&r(),y=!1}try{n=new IntersectionObserver(x,{..._,root:o.ownerDocument})}catch{n=new IntersectionObserver(x,_)}n.observe(e)}return r(!0),s}function yi(e,t,n,i){i===void 0&&(i={});const{ancestorScroll:o=!0,ancestorResize:s=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:a=!1}=i,c=te(e),h=o||s?[...c?mt(c):[],...mt(t)]:[];h.forEach(m=>{o&&m.addEventListener("scroll",n,{passive:!0}),s&&m.addEventListener("resize",n)});const u=c&&l?_i(c,n):null;let f=-1,d=null;r&&(d=new ResizeObserver(m=>{let[b]=m;b&&b.target===c&&d&&(d.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var _;(_=d)==null||_.observe(t)})),n()}),c&&!a&&d.observe(c),d.observe(t));let g,p=a?ot(e):null;a&&v();function v(){const m=ot(e);p&&!Ue(p,m)&&n(),p=m,g=requestAnimationFrame(v)}return n(),()=>{var m;h.forEach(b=>{o&&b.removeEventListener("scroll",n),s&&b.removeEventListener("resize",n)}),u?.(),(m=d)==null||m.disconnect(),d=null,a&&cancelAnimationFrame(g)}}const wi=qn,xi=Yn,Ci=Gn,Si=(e,t,n)=>{const i=new Map,o={platform:bi,...n},s={...o.platform,_c:i};return Un(e,t,{...o,platform:s})},Ye=[xi({fallbackAxisSideDirection:"start",crossAxis:!1}),wi()],Ei=({placement:e="bottom-start",strategy:t,middleware:n=Ye}={})=>{const[i,o]=Z(),[s,r]=Z(),[l,a]=Z();return $(()=>{if(!i||!(s instanceof HTMLElement)){a(void 0);return}return yi(i,s,()=>Si(i,s,{placement:e,strategy:t,middleware:n}).then(a))},[i,s,e,t,n]),{setReference:o,setFloating:r,styles:T(()=>l?{left:`${l.x}px`,top:`${l.y}px`}:{},[l?.x,l?.y])}};const Dt=rt(class extends gt{constructor(e){if(super(e),e.type!==W.PROPERTY&&e.type!==W.ATTRIBUTE&&e.type!==W.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!ke(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===F||t===pt)return t;const n=e.element,i=e.name;if(e.type===W.PROPERTY){if(t===n[i])return F}else if(e.type===W.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(i))return F}else if(e.type===W.ATTRIBUTE&&n.getAttribute(i)===t+"")return F;return Ae(e),t}}),Wt=new WeakMap,bt=rt(class extends Kt{render(e){return pt}update(e,[t]){const n=t!==this.G;return n&&this.G!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),pt}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let n=Wt.get(t);n===void 0&&(n=new WeakMap,Wt.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?Wt.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});const B=e=>e??pt,qe=Re(class extends Le{values;constructor(e,t,n,i){super(e,t),Object.assign(t.host,n),this.values=i}update(e,t){this.hasChanged(t)&&(this.values=t,Object.assign(this.state.host,e))}hasChanged(e=[]){return e.some((t,n)=>this.values[n]!==t)}}),It=Re(class extends Le{update(){return this.state.host}}),zi=/([A-Z])/gu,fe=(e,t,n)=>{e[t]=n,e.dispatchEvent(new CustomEvent(t.replace(zi,"-$1").toLowerCase()+"-changed",{detail:{value:n}}))},Ge=e=>{const t=Te(void 0),n=w(c=>t.current=c,[]),i=e.shadowRoot,o=w(c=>e.dispatchEvent(new Event(c.type,{bubbles:c.bubbles})),[]),s=w(c=>fe(e,"value",c.target.value),[]),r=w(c=>fe(e,"focused",c.type==="focus"),[]),l=w(()=>t.current?.focus(),[]),a=w(()=>{const c=t.current?.checkValidity();return e.toggleAttribute("invalid",!c),c},[]);return qe({focus:l,validate:a},[l,a]),$(()=>{const c=h=>{h.defaultPrevented||e.disabled||h.target.matches("input, textarea, label")||(h.preventDefault(),e.matches(":focus-within")||l())};return i.addEventListener("mousedown",c),()=>i.removeEventListener("mousedown",c)},[l]),{onChange:o,onFocus:r,onInput:s,onRef:n}},$i=e=>T(()=>{if(e==null)return;const t=new RegExp(e,"u");return n=>{!n.defaultPrevented&&n.data&&!t.test(n.data)&&n.preventDefault()}},[e]),Xe=(e,{label:t,invalid:n,errorMessage:i})=>E`
		<div class="float" part="float">&nbsp;</div>
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${e}
				${X(t,()=>E`<label for="input" part="label">${t}</label>`)}
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line" part="line"></div>
		${X(n&&i,()=>E`<div class="error" part="error">${i}</div>`)}
	`,Ke=["autocomplete","readonly","disabled","maxlength","invalid","no-label-float","always-float-label"],ki=({placeholder:e,noLabelFloat:t,label:n})=>(t?n:void 0)||e||" ",pe=At`
	.wrap {
		--contour-color: var(--focused-color);
		background: var(--focused-bg);
	}

	#input::placeholder,
	label {
		color: var(--focused-color);
		opacity: 1;
	}

	.line {
		border-bottom-color: var(--focused-color);
	}

	.line::before {
		transform: none;
		transition: 0.25s transform ease;
	}
`,Ze=At`
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
		--focused: var(--cosmoz-input-focused, none);

		display: block;
		padding: var(--cosmoz-input-padding, 8px 0);
		position: relative;
		max-height: var(--cosmoz-input-max-height);
		font-size: var(--font-size);
		line-height: var(--line-height);
		font-family: var(--font-family);
		caret-color: var(--focused-color);
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
		user-select: none;
	}

	.wrap:has(#input:not(:placeholder-shown)) {
		slot[name='suffix']::slotted(*),
		slot[name='prefix']::slotted(*) {
			transform: translateY(var(--label-translate-y));
		}
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

	:host([always-float-label]) {
		slot[name='suffix']::slotted(*),
		slot[name='prefix']::slotted(*) {
			transform: translateY(var(--label-translate-y));
		}
	}

	:host([no-label-float]) {
		.float,
		label {
			display: none;
		}

		#input:not(:placeholder-shown) {
			transform: translateY(0%);
		}

		.wrap:has(#input:not(:placeholder-shown)) slot[name='suffix']::slotted(*),
		.wrap:has(#input:not(:placeholder-shown)) slot[name='prefix']::slotted(*) {
			transform: translateY(0%);
		}
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

	:host([disabled]) .line {
		border-bottom-style: dashed;
		opacity: var(--disabled-line-opacity);
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

	:host(:focus-within) {
		${pe}
	}
	@container style(--focused: focused) {
		${pe}
	}
`,Ai=["type","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...Ke],Ri=e=>{const{type:t="text",pattern:n,allowedPattern:i,autocomplete:o,value:s,readonly:r,disabled:l,min:a,max:c,step:h,maxlength:u}=e,{onChange:f,onFocus:d,onInput:g,onRef:p}=Ge(e),v=$i(i);return Xe(E`
			<input
				${bt(p)}
				style="--chars: ${s?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${B(n)}
				autocomplete=${B(o)}
				placeholder=${ki(e)}
				?readonly=${r}
				?aria-disabled=${l}
				?disabled=${l}
				.value=${Dt(s??"")}
				maxlength=${B(u)}
				@beforeinput=${v}
				@input=${g}
				@change=${f}
				@focus=${d}
				@blur=${d}
				min=${B(a)}
				max=${B(c)}
				step=${B(h)}
			/>
		`,e)};customElements.define("cosmoz-input",J(Ri,{observedAttributes:Ai,styleSheets:[Xt(Ze)]}));const me=e=>{e.style.height="",e.style.height=`${e.scrollHeight}px`},Li=(e,t=0)=>{if(t>0){const n=e.getAttribute("rows")??"",i=e.style.height;e.style.height="",e.setAttribute("rows",t),e.style.maxHeight=e.getBoundingClientRect().height+"px",e.style.height=i,e.setAttribute("rows",n)}},Ti=e=>{const{value:t,maxRows:n}=e,i=T(()=>()=>e.shadowRoot.querySelector("#input"),[]);$(()=>Li(i(),n),[n,i]),$(()=>me(i()),[i,t]),$(()=>{const o=i(),s=new ResizeObserver(()=>requestAnimationFrame(()=>me(o)));return s.observe(o),()=>s.unobserve(o)},[i])},Oi=["rows","placeholder",...Ke],Mi=e=>{const{autocomplete:t,value:n,placeholder:i,readonly:o,disabled:s,rows:r,cols:l,maxlength:a}=e,{onChange:c,onFocus:h,onInput:u,onRef:f}=Ge(e);return Ti(e),Xe(E`
			<textarea id="input" part="input"
				${bt(f)}
				autocomplete=${B(t)}
				placeholder=${i||" "}
				rows=${r??1} cols=${B(l)}
				?readonly=${o} ?aria-disabled=${s} ?disabled=${s}
				.value=${Dt(n??"")} maxlength=${B(a)} @input=${u}
				@change=${c} @focus=${h} @blur=${h}>`,e)};customElements.define("cosmoz-textarea",J(Mi,{observedAttributes:Oi,styleSheets:[Xt(Ze)]}));const Pi=e=>{const{label:t,value:n,disabled:i,error:o}=e,s=w(r=>e.dispatchEvent(new CustomEvent("change",{detail:r.target.checked})),[]);return E`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${Dt(!!n)}
			?disabled=${i}
			@change=${s}
		/>
		${X(t,()=>E`<label for="toggle">${t}</label>`)}
		<slot name="suffix"></slot>
		${X(o,r=>E`<div class="failure">${r}</div>`)} `},Di=at`
	.toggle {
		appearance: none;
		width: 35px;
		height: 18px;
		display: inline-block;
		position: relative;
		border-radius: 18px;
		overflow: hidden;
		outline: none;
		border: none;
		cursor: pointer;
		background: var(--cz-toggle-color, #101010);
		transition: background-color ease 0.25s;
		margin: 0;
	}
	.toggle::before {
		content: '';
		display: block;
		position: absolute;
		z-index: 2;
		width: 14px;
		height: 14px;
		background: var(--cz-toggle-thumb-color, #15b0d3);
		left: 2px;
		top: 2px;
		border-radius: 50%;
		transition: all cubic-bezier(0.3, 1.5, 0.7, 1) 0.25s;
	}
	.toggle:checked {
		background: var(--cz-toggle-checked-color, #66d7f0);
	}
	.toggle:checked::before {
		left: 19px;
	}
	.toggle + label {
		padding-left: 16px;
		font-size: 14px;
		line-height: 18px;
		cursor: pointer;
		user-select: none;
	}
	.toggle[disabled] {
		opacity: 0.6;
	}
`,Ii=at`
	:host {
		display: block;
	}

	:host > * {
		vertical-align: middle;
		line-height: 0px;
	}

	::slotted(*) {
		margin-left: 5px;
	}
`;customElements.define("cosmoz-toggle",J(Pi,{styleSheets:[Ii,Di],observedAttributes:["disabled"]}));class Bi{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class Vi{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(t=>this.Z=t)}resume(){this.Z?.(),this.Y=this.Z=void 0}}const ge=e=>!gn(e)&&typeof e.then=="function",ve=1073741823;let Fi=class extends Kt{constructor(){super(...arguments),this._$Cwt=ve,this._$Cbt=[],this._$CK=new Bi(this),this._$CX=new Vi}render(...t){return t.find(n=>!ge(n))??F}update(t,n){const i=this._$Cbt;let o=i.length;this._$Cbt=n;const s=this._$CK,r=this._$CX;this.isConnected||this.disconnected();for(let l=0;l<n.length&&!(l>this._$Cwt);l++){const a=n[l];if(!ge(a))return this._$Cwt=l,a;l<o&&a===i[l]||(this._$Cwt=ve,o=0,Promise.resolve(a).then(async c=>{for(;r.get();)await r.get();const h=s.deref();if(h!==void 0){const u=h._$Cbt.indexOf(a);u>-1&&u<h._$Cwt&&(h._$Cwt=u,h.setValue(c))}}))}return F}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};const be=rt(Fi);const _e=(e,t,n)=>{const i=new Map;for(let o=t;o<=n;o++)i.set(e[o],o);return i},Ni=rt(class extends gt{constructor(e){if(super(e),e.type!==W.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,n){let i;n===void 0?n=t:t!==void 0&&(i=t);const o=[],s=[];let r=0;for(const l of e)o[r]=i?i(l,r):r,s[r]=n(l,r),r++;return{values:s,keys:o}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,i]){const o=vn(e),{values:s,keys:r}=this.dt(t,n,i);if(!Array.isArray(o))return this.ut=r,s;const l=this.ut??=[],a=[];let c,h,u=0,f=o.length-1,d=0,g=s.length-1;for(;u<=f&&d<=g;)if(o[u]===null)u++;else if(o[f]===null)f--;else if(l[u]===r[d])a[d]=et(o[u],s[d]),u++,d++;else if(l[f]===r[g])a[g]=et(o[f],s[g]),f--,g--;else if(l[u]===r[g])a[g]=et(o[u],s[g]),dt(e,a[g+1],o[u]),u++,g--;else if(l[f]===r[d])a[d]=et(o[f],s[d]),dt(e,o[u],o[f]),f--,d++;else if(c===void 0&&(c=_e(r,d,g),h=_e(l,u,f)),c.has(l[u]))if(c.has(l[f])){const p=h.get(r[d]),v=p!==void 0?o[p]:null;if(v===null){const m=dt(e,o[u]);et(m,s[d]),a[d]=m}else a[d]=et(v,s[d]),dt(e,o[u],v),o[p]=null;d++}else Ht(o[f]),f--;else Ht(o[u]),u++;for(;d<=g;){const p=dt(e,a[g+1]);et(p,s[d]),a[d++]=p}for(;u<=f;){const p=o[u++];p!==null&&Ht(p)}return this.ut=r,Ae(e,a),F}});class Bt extends Event{constructor(t){super(Bt.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}}Bt.eventName="rangeChanged";class Vt extends Event{constructor(t){super(Vt.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}}Vt.eventName="visibilityChanged";class Ft extends Event{constructor(){super(Ft.eventName,{bubbles:!1})}}Ft.eventName="unpinned";class Hi{constructor(t){this._element=null;const n=t??window;this._node=n,t&&(this._element=t)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}}class ji extends Hi{constructor(t,n){super(n),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);const i=this._node;this._originalScrollTo=i.scrollTo,this._originalScrollBy=i.scrollBy,this._originalScroll=i.scroll,this._attach(t)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(t,n){const i=typeof t=="number"&&typeof n=="number"?{left:t,top:n}:t;this._scrollTo(i)}scrollBy(t,n){const i=typeof t=="number"&&typeof n=="number"?{left:t,top:n}:t;i.top!==void 0&&(i.top+=this.scrollTop),i.left!==void 0&&(i.left+=this.scrollLeft),this._scrollTo(i)}_nativeScrollTo(t){this._originalScrollTo.bind(this._element||window)(t)}_scrollTo(t,n=null,i=null){this._end!==null&&this._end(),t.behavior==="smooth"?(this._setDestination(t),this._retarget=n,this._end=i):this._resetScrollState(),this._nativeScrollTo(t)}_setDestination(t){let{top:n,left:i}=t;return n=n===void 0?void 0:Math.max(0,Math.min(n,this.maxScrollTop)),i=i===void 0?void 0:Math.max(0,Math.min(i,this.maxScrollLeft)),this._destination!==null&&i===this._destination.left&&n===this._destination.top?!1:(this.__destination={top:n,left:i,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(t){this._destination&&this._setDestination(t)&&this._nativeScrollTo(this._destination)}managedScrollTo(t,n,i){return this._scrollTo(t,n,i),this._updateManagedScrollTo}correctScrollError(t){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(t),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){const{scrollTop:t,scrollLeft:n}=this;let{top:i,left:o}=this._destination;i=Math.min(i||0,this.maxScrollTop),o=Math.min(o||0,this.maxScrollLeft);const s=Math.abs(i-t),r=Math.abs(o-n);s<1&&r<1&&(this._end&&this._end(),this._resetScrollState())}}detach(t){return this._clients.delete(t),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(t){this._clients.add(t),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}}let ye=typeof window<"u"?window.ResizeObserver:void 0;const Gt=Symbol("virtualizerRef"),xt="virtualizer-sizer";let we;class Wi{constructor(t){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!t)throw new Error("Virtualizer constructor requires a configuration object");if(t.hostElement)this._init(t);else throw new Error('Virtualizer configuration requires the "hostElement" property')}set items(t){Array.isArray(t)&&t!==this._items&&(this._itemsChanged=!0,this._items=t,this._schedule(this._updateLayout))}_init(t){this._isScroller=!!t.scroller,this._initHostElement(t);const n=t.layout||{};this._layoutInitialized=this._initLayout(n)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new ye(()=>this._hostElementSizeChanged()),this._childrenRO=new ye(this._childrenSizeChanged.bind(this))}_initHostElement(t){const n=this._hostElement=t.hostElement;this._applyVirtualizerStyles(),n[Gt]=this}connected(){this._initObservers();const t=this._isScroller;this._clippingAncestors=qi(this._hostElement,t),this._scrollerController=new ji(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(t=>{t.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(t),this._hostElementRO.observe(t)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(t=>this._childrenRO.observe(t)),this._scrollEventListeners.forEach(t=>t.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){this._scrollEventListeners.forEach(t=>t.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],this._scrollerController?.detach(this),this._scrollerController=null,this._mutationObserver?.disconnect(),this._mutationObserver=null,this._hostElementRO?.disconnect(),this._hostElementRO=null,this._childrenRO?.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected"),this._connected=!1}_applyVirtualizerStyles(){const n=this._hostElement.style;n.display=n.display||"block",n.position=n.position||"relative",n.contain=n.contain||"size layout",this._isScroller&&(n.overflow=n.overflow||"auto",n.minHeight=n.minHeight||"150px")}_getSizer(){const t=this._hostElement;if(!this._sizer){let n=t.querySelector(`[${xt}]`);n||(n=document.createElement("div"),n.setAttribute(xt,""),t.appendChild(n)),Object.assign(n.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),n.textContent="&nbsp;",n.setAttribute(xt,""),this._sizer=n}return this._sizer}async updateLayoutConfig(t){await this._layoutInitialized;const n=t.type||we;if(typeof n=="function"&&this._layout instanceof n){const i={...t};return delete i.type,this._layout.config=i,!0}return!1}async _initLayout(t){let n,i;if(typeof t.type=="function"){i=t.type;const o={...t};delete o.type,n=o}else n=t;i===void 0&&(we=i=(await wn(()=>import("./flow-BqIEBwW6.js"),[],import.meta.url)).FlowLayout),this._layout=new i(o=>this._handleLayoutMessage(o),n),this._layout.measureChildren&&typeof this._layout.updateItemSizes=="function"&&(typeof this._layout.measureChildren=="function"&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){const t=window.performance.now(),n=t-this._benchmarkStart,o=performance.getEntriesByName("uv-virtualizing","measure").filter(s=>s.startTime>=this._benchmarkStart&&s.startTime<t).reduce((s,r)=>s+r.duration,0);return this._benchmarkStart=null,{timeElapsed:n,virtualizationTime:o}}return null}_measureChildren(){const t={},n=this._children,i=this._measureChildOverride||this._measureChild;for(let o=0;o<n.length;o++){const s=n[o],r=this._first+o;(this._itemsChanged||this._toBeMeasured.has(s))&&(t[r]=i.call(this,s,this._items[r]))}this._childMeasurements=t,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(t){const{width:n,height:i}=t.getBoundingClientRect();return Object.assign({width:n,height:i},Ui(t))}async _schedule(t){this._scheduled.has(t)||(this._scheduled.add(t),await Promise.resolve(),this._scheduled.delete(t),t.call(this))}async _updateDOM(t){this._scrollSize=t.scrollSize,this._adjustRange(t.range),this._childrenPos=t.childPositions,this._scrollError=t.scrollError||null;const{_rangeChanged:n,_itemsChanged:i}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(n||i)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(t=>this._childrenRO.observe(t)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(t){console.warn("Error measuring performance data: ",t)}window.performance.mark("uv-start")}this._scrollerController.correctingScrollError===!1&&this._layout?.unpin(),this._schedule(this._updateLayout)}handleEvent(t){t.type==="scroll"?(t.currentTarget===window||this._clippingAncestors.includes(t.currentTarget))&&this._handleScrollEvent():console.warn("event not handled",t)}_handleLayoutMessage(t){t.type==="stateChanged"?this._updateDOM(t):t.type==="visibilityChanged"?(this._firstVisible=t.firstVisible,this._lastVisible=t.lastVisible,this._notifyVisibility()):t.type==="unpinned"&&this._hostElement.dispatchEvent(new Ft)}get _children(){const t=[];let n=this._hostElement.firstElementChild;for(;n;)n.hasAttribute(xt)||t.push(n),n=n.nextElementSibling;return t}_updateView(){const t=this._hostElement,n=this._scrollerController?.element,i=this._layout;if(t&&n&&i){let o,s,r,l;const a=t.getBoundingClientRect();o=0,s=0,r=window.innerHeight,l=window.innerWidth;const c=this._clippingAncestors.map(m=>m.getBoundingClientRect());c.unshift(a);for(const m of c)o=Math.max(o,m.top),s=Math.max(s,m.left),r=Math.min(r,m.bottom),l=Math.min(l,m.right);const h=n.getBoundingClientRect(),u={left:a.left-h.left,top:a.top-h.top},f={width:n.scrollWidth,height:n.scrollHeight},d=o-a.top+t.scrollTop,g=s-a.left+t.scrollLeft,p=Math.max(0,r-o),v=Math.max(0,l-s);i.viewportSize={width:v,height:p},i.viewportScroll={top:d,left:g},i.totalScrollSize=f,i.offsetWithinScroller=u}}_sizeHostElement(t){const i=t&&t.width!==null?Math.min(82e5,t.width):0,o=t&&t.height!==null?Math.min(82e5,t.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${i}px, ${o}px)`;else{const s=this._hostElement.style;s.minWidth=i?`${i}px`:"100%",s.minHeight=o?`${o}px`:"100%"}}_positionChildren(t){t&&t.forEach(({top:n,left:i,width:o,height:s,xOffset:r,yOffset:l},a)=>{const c=this._children[a-this._first];c&&(c.style.position="absolute",c.style.boxSizing="border-box",c.style.transform=`translate(${i}px, ${n}px)`,o!==void 0&&(c.style.width=o+"px"),s!==void 0&&(c.style.height=s+"px"),c.style.left=r===void 0?null:r+"px",c.style.top=l===void 0?null:l+"px")})}async _adjustRange(t){const{_first:n,_last:i,_firstVisible:o,_lastVisible:s}=this;this._first=t.first,this._last=t.last,this._firstVisible=t.firstVisible,this._lastVisible=t.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==n||this._last!==i,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==o||this._lastVisible!==s}_correctScrollError(){if(this._scrollError){const{scrollTop:t,scrollLeft:n}=this._scrollerController,{top:i,left:o}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:t-i,left:n-o})}}element(t){return t===1/0&&(t=this._items.length-1),this._items?.[t]===void 0?void 0:{scrollIntoView:(n={})=>this._scrollElementIntoView({...n,index:t})}}_scrollElementIntoView(t){if(t.index>=this._first&&t.index<=this._last)this._children[t.index-this._first].scrollIntoView(t);else if(t.index=Math.min(t.index,this._items.length-1),t.behavior==="smooth"){const n=this._layout.getScrollIntoViewCoordinates(t),{behavior:i}=t;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(n,{behavior:i}),()=>this._layout.getScrollIntoViewCoordinates(t),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=t}else this._layout.pin=t}_checkScrollIntoViewTarget(t){const{index:n}=this._scrollIntoViewTarget||{};n&&t?.has(n)&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new Bt({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new Vt({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((t,n)=>{this._layoutCompleteResolver=t,this._layoutCompleteRejecter=n})),this._layoutCompletePromise}_rejectLayoutCompletePromise(t){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(t),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(t){if(this._layout?.measureChildren){for(const n of t)this._toBeMeasured.set(n.target,n.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}}function Ui(e){const t=window.getComputedStyle(e);return{marginTop:Ct(t.marginTop),marginRight:Ct(t.marginRight),marginBottom:Ct(t.marginBottom),marginLeft:Ct(t.marginLeft)}}function Ct(e){const t=e?parseFloat(e):NaN;return Number.isNaN(t)?0:t}function xe(e){if(e.assignedSlot!==null)return e.assignedSlot;if(e.parentElement!==null)return e.parentElement;const t=e.parentNode;return t&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host||null}function Yi(e,t=!1){const n=[];let i=t?e:xe(e);for(;i!==null;)n.push(i),i=xe(i);return n}function qi(e,t=!1){let n=!1;return Yi(e,t).filter(i=>{if(n)return!1;const o=getComputedStyle(i);return n=o.position==="fixed",o.overflow!=="visible"})}const Gi=e=>e,Xi=(e,t)=>E`${t}: ${JSON.stringify(e,null,2)}`;class Ki extends Kt{constructor(t){if(super(t),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(n,i)=>Xi(n,i+this._first),this._keyFunction=(n,i)=>Gi(n,i+this._first),this._items=[],t.type!==W.CHILD)throw new Error("The virtualize directive can only be used in child expressions")}render(t){t&&this._setFunctions(t);const n=[];if(this._first>=0&&this._last>=this._first)for(let i=this._first;i<=this._last;i++)n.push(this._items[i]);return Ni(n,this._keyFunction,this._renderItem)}update(t,[n]){this._setFunctions(n);const i=this._items!==n.items;return this._items=n.items||[],this._virtualizer?this._updateVirtualizerConfig(t,n):this._initialize(t,n),i?F:this.render()}async _updateVirtualizerConfig(t,n){if(!await this._virtualizer.updateLayoutConfig(n.layout||{})){const o=t.parentNode;this._makeVirtualizer(o,n)}this._virtualizer.items=this._items}_setFunctions(t){const{renderItem:n,keyFunction:i}=t;n&&(this._renderItem=(o,s)=>n(o,s+this._first)),i&&(this._keyFunction=(o,s)=>i(o,s+this._first))}_makeVirtualizer(t,n){this._virtualizer&&this._virtualizer.disconnected();const{layout:i,scroller:o,items:s}=n;this._virtualizer=new Wi({hostElement:t,layout:i,scroller:o}),this._virtualizer.items=s,this._virtualizer.connected()}_initialize(t,n){const i=t.parentNode;i&&i.nodeType===1&&(i.addEventListener("rangeChanged",o=>{this._first=o.first,this._last=o.last,this.setValue(this.render())}),this._makeVirtualizer(i,n))}disconnected(){this._virtualizer?.disconnected()}reconnected(){this._virtualizer?.connected()}}const Zi=rt(Ki),Qi=(e=HTMLElement)=>class extends e{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent("connected"))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent("disconnected"))}},Ji=(e,t)=>{if(!e||!t)return;const n=Object.keys(t);return Object.fromEntries(Object.keys(e).flatMap(i=>n.includes(i)?[]:[[i,void 0]]))};class to extends gt{_props;render(t){return F}update(t,[n]){return this._props!==n&&Object.assign(t.element,Ji(this._props,n),this._props=n),F}}const eo=rt(to);function no(e){return()=>e}const io=no(),oo=io,kt=e=>e,Jo=(e,...t)=>typeof e=="function"?e(...t):e,so=e=>{const t=It(),n=T(()=>new CSSStyleSheet,[]);$(()=>{t.shadowRoot.adoptedStyleSheets=[...t.shadowRoot.adoptedStyleSheets,n]},[]),$(()=>{n.replaceSync(e)},[e])};function Qe(e){return e?t=>t?.[e]:kt}const ro=e=>{const t=Qe(e);return n=>typeof n=="string"?n:t(n)?.toString()||""},lo=e=>t=>{const n={};for(const i in t)e.includes(i)&&(n[i]=t[i]);return n},ao="data:image/svg+xml,%3Csvg width='11' height='8' viewBox='0 0 11 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.5 1L5.20039 7.04766L1.66348 3.46152' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",co=at`
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
		background: url("${ao}") #5881f6 no-repeat 50%;
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
`,ho=({index:e,itemHeight:t,auto:n})=>at`
	${X(!n,()=>at`
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
`,uo=e=>{const t=e==="auto",[n,i]=Z(t?40:e);return[n,o=>t?i(o):void 0]},_t=e=>{const t=T(()=>({}),[]);return T(()=>Object.assign(t,e),[t,...Object.values(e)])},fo=e=>{const t=_t(e);$(()=>{const n=i=>{if(!(i.ctrlKey&&i.altKey||i.defaultPrevented))switch(i.key){case"Up":case"ArrowUp":i.preventDefault(),t.onUp();break;case"Down":case"ArrowDown":i.preventDefault(),t.onDown();break;case"Enter":i.preventDefault(),t.onEnter();break}};return document.addEventListener("keydown",n,!0),()=>document.removeEventListener("keydown",n,!0)},[t])},po=({items:e,onSelect:t,defaultIndex:n=0})=>{const[i,o]=Z({index:n}),{index:s}=i,{length:r}=e;return $(()=>{o({index:i.index<0?n:Math.min(i.index,e.length-1),scroll:!0})},[e,n]),fo({onUp:w(()=>o(l=>({index:l.index>0?l.index-1:r-1,scroll:!0})),[r]),onDown:w(()=>o(l=>({index:l.index<r-1?l.index+1:0,scroll:!0})),[r]),onEnter:w(()=>s>-1&&s<r&&t?.(e[s],s),[s,e,t])}),{position:i,highlight:w(l=>o({index:l}),[]),select:w(l=>t?.(l),[t])}},mo=e=>typeof e=="object"&&e!==null&&Symbol.iterator in e;function st(e){return e==null?[]:Array.isArray(e)?e:typeof e=="string"?[e]:mo(e)?Array.from(e):[e]}const Ut=(e,t=kt)=>n=>{const i=st(e).map(t);return st(n).filter(o=>!i.includes(t(o)))},go=(e,t)=>t?n=>st(e).find(i=>i[t]===n[t]):n=>st(e).includes(n),vo=(e,t)=>{if(!t||!e)return e;const n=e.toLowerCase().indexOf(t.toLowerCase());if(n<0)return e;const i=n+t.length;return[e.slice(0,n),E`<mark>${e.slice(n,i)}</mark>`,e.slice(i)]},bo=(e=kt)=>(t,n,{highlight:i,select:o,textual:s=kt,query:r,isSelected:l})=>{const a=s(t),c=vo(a,r),h=e(c,t,n);return E`<div
				class="item"
				role="option"
				part="option"
				?aria-selected=${l(t)}
				data-index=${n}
				@mouseenter=${()=>i(n)}
				@click=${()=>o(t)}
				@mousedown=${u=>u.preventDefault()}
				title=${a}
			>
				${h}
			</div>
			<div class="sizer" virtualizer-sizer>${h}</div>`},_o=({itemRenderer:e=bo(),...t})=>{const n=_t(t);return w((i,o)=>e(i,o,n),[n,e])},yo=["query","items","onSelect","textual","anchor","itemHeight","itemLimit","itemRenderer","defaultIndex","value","valueProperty","loading"],wo=({value:e,valueProperty:t,items:n,onSelect:i,defaultIndex:o,query:s,textual:r,itemRenderer:l,itemHeight:a=40,itemLimit:c=5})=>{const h=T(()=>go(e,t),[e,t]),u=T(()=>n.slice(),[n,h]),{position:f,highlight:d,select:g}=po({items:u,onSelect:i,defaultIndex:isNaN(o)?void 0:Number(o)}),[p,v]=uo(a);return{position:f,items:u,height:Math.min(c,u.length)*p,highlight:d,select:g,itemHeight:p,setItemHeight:v,renderItem:_o({itemRenderer:l,items:u,position:f,highlight:d,select:g,textual:r,query:s,isSelected:h})}},Ce=oo,xo=e=>{const t=Te(void 0),{position:n,items:i,renderItem:o,height:s,itemHeight:r,setItemHeight:l}=wo(e);return $(()=>{const a=t.current?.[Gt];a&&a.layoutComplete.then(()=>{e.dispatchEvent(new CustomEvent("layout-complete"));const{averageChildSize:c,averageMarginSize:h}=a._layout._metricsCache;return l(c+h*2)},Ce)},[i]),$(()=>{if(!n.scroll)return;const a=t.current?.[Gt];if(a){if(!a?._layout){a.layoutComplete.then(()=>a.element(n.index)?.scrollIntoView({block:"nearest"}),Ce);return}a.element(n.index)?.scrollIntoView({block:"nearest"})}},[n]),so(ho({...n,itemHeight:r,auto:e.itemHeight==="auto"})),E`<div
			class="items"
			style="min-height: ${s}px"
			${bt(a=>t.current=a)}
		>
			<div virtualizer-sizer></div>
			${Zi({items:i,renderItem:o,scroller:!0})}
		</div>
		<slot></slot>`};customElements.define("cosmoz-listbox",Qi(J(xo,{styleSheets:[Zt(co)]})));const Co=({multi:e,setFloating:t,styles:n,...i},o)=>E`<cosmoz-listbox
		style="${Tn(n)}"
		@connected="${s=>s.target.showPopover?.()}"
		popover="manual"
		part="listbox"
		?multi=${e}
		${bt(t)}
		...=${eo(lo(yo)(i))}
		>${o}</cosmoz-listbox
	>`,So=At`
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
`,Eo=E`
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
`,zo=({onClear:e,disabled:t})=>E`
	<div class="content" part="content chip-text"><slot></slot></div>
	${X(e&&!t,()=>E`<span
				class="clear"
				part="clear chip-clear"
				@mousedown=${n=>n.preventDefault()}
				@click=${e}
			>
				${Eo}
			</span>`)}
`;customElements.define("cosmoz-autocomplete-chip",J(zo,{observedAttributes:["disabled"],styleSheets:[Zt(So)]}));const $o=({content:e,onClear:t,disabled:n,hidden:i,className:o="chip",slot:s})=>E`<cosmoz-autocomplete-chip
		class=${B(o)}
		slot=${B(s)}
		part="chip"
		exportparts="chip-text, chip-clear"
		?disabled=${n}
		?hidden=${i}
		.onClear=${t}
		title=${B(typeof e=="string"?e:void 0)}
		>${e}</cosmoz-autocomplete-chip
	>`,ko=({value:e,min:t=0,onDeselect:n,textual:i,disabled:o,chipRenderer:s=$o})=>[...e.filter(Boolean).map(r=>s({item:r,content:i(r),onClear:e.length>t&&(()=>n(r)),disabled:o,slot:"control"})),s({item:null,content:E`<span></span>`,className:"badge",disabled:!0,slot:"control",hidden:!0})],Ao=at`
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
`;customElements.define("cosmoz-autocomplete-skeleton-span",J(()=>pt,{styleSheets:[Ao]}));const Ro=At`
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

	.no-result {
		font-size: var(--cosmoz-autocomplete-listbox-font-size, 13px);
		font-weight: var(--cosmoz-autocomplete-listbox-font-weight, 400);
		padding: 0 22px;
		color: var(--cosmoz-listbox-color, #101010);
	}
`,Se=e=>e.matches(":focus-within"),Lo=({disabled:e,onFocus:t})=>{const[n,i]=Z(),{focused:o,closed:s}=n||{},r=o&&!e,l=_t({closed:s,onFocus:t}),a=w(h=>i(u=>({...u,closed:h})),[]),c=w(h=>{const u=h.currentTarget;return Se(u)?i(f=>({focused:!0,closed:!f?.closed})):u.focus()},[]);return $(()=>{if(!r)return;const h=u=>{if(u.defaultPrevented)return;const{closed:f}=l;u.key==="Escape"&&!f?(u.preventDefault(),a(!0)):["ArrowUp","Up"].includes(u.key)&&f&&(u.preventDefault(),a(!1))};return document.addEventListener("keydown",h,!0),()=>document.removeEventListener("keydown",h,!0)},[r]),{focused:r,active:r&&!s,setClosed:a,onToggle:c,onFocus:w(h=>{const u=Se(h.currentTarget);i({focused:u}),l.onFocus?.(u)},[l])}},ee=(e,t=()=>({}))=>{const n={type:e,toString(){return e}};return Object.assign((...o)=>Object.assign(t(...o),n),n)},Ee=e=>e.type||e.toString(),ze=e=>Array.isArray(e)?e:[e],To=(e,t)=>{const n=ze(t),i=(n.every(Array.isArray)?n:[n]).map(([o,s])=>({actions:ze(o).map(Ee),handle:s}));return(o=e,s)=>{const r=i.find(l=>l.actions.includes(Ee(s)));return r?r.handle(o,s):o}},nt={pending:"pending",rejected:"rejected",resolved:"resolved"},Je={error:void 0,result:void 0,state:nt.pending},tn=ee(nt.pending),en=ee(nt.resolved,e=>({result:e})),nn=ee(nt.rejected,e=>({error:e})),Oo=To(Je,[[tn,()=>({error:void 0,result:void 0,state:nt.pending})],[en,(e,{result:t})=>({error:void 0,result:t,state:nt.resolved})],[nn,(e,{error:t})=>({error:t,result:void 0,state:nt.rejected})]]),Mo=e=>{const[{error:t,result:n,state:i},o]=bn(Oo,Je);return $(()=>{if(!e)return;let s=!1;return o(tn()),e.then(r=>!s&&o(en(r)),r=>!s&&o(nn(r))),()=>{s=!0}},[e]),[n,t,i]},Po=({focused:e,empty:t,...n})=>{const i=e&&t&&n.limit!==1,o=_t(n);$(()=>{if(!i)return;const s=r=>{if(r.defaultPrevented)return;const{key:l}=r,a=st(o.value),c=o.limit==1;if(a.length>0&&(l==="Backspace"||c&&l.length===1))return o.onChange(a.slice(0,-1))};return document.addEventListener("keydown",s,!0),()=>document.removeEventListener("keydown",s,!0)},[i,o])},$e=e=>e.normalize("NFD").replace(/[\u0300-\u036f]/gu,""),Do=(e,t,n)=>{if(!t)return e;const i=$e(t.toLowerCase()),o=[];for(const s of e){const l=$e(n(s).toLowerCase()).indexOf(i);l<0||o.push({item:s,index:l})}return o.sort((s,r)=>s.index-r.index).map(({item:s})=>s)},Io=e=>e===!1||e==null?[]:e,on=(e,t,n)=>e.dispatchEvent(new CustomEvent(t,{detail:n})),Bo=(e,t,n)=>w(i=>{t?.(i),on(e,n,i)},[t]),Vo=[],Fo=e=>(...t)=>{let n;const i=()=>{n&&cancelAnimationFrame(n)};return i(),n=requestAnimationFrame(()=>{n=void 0,e(...t)}),i},No=({value:e,text:t,onChange:n,onText:i,onSelect:o,limit:s,min:r,source:l,textProperty:a,textual:c,valueProperty:h,keepOpened:u,keepQuery:f,preserveOrder:d,defaultIndex:g,externalSearch:p,...v})=>{const m=T(()=>(c??ro)(a),[c,a]),{active:b,focused:_,onFocus:y,setClosed:x}=Lo(v),S=!t,z=T(()=>t?.trim(),[t]),R=It(),k=Bo(R,i,"text"),A=w(C=>{n?.(C,()=>x(!0)),on(R,"value",C)},[n]),[V,G]=Z([]),I=T(()=>Promise.resolve(typeof l=="function"?l({query:z,active:b}):l).then(Io),[l,b,z]),L=T(()=>st(e),[e]);$(()=>I.then(G),[I]),Po({focused:_,empty:S,limit:s,value:L,onChange:A,onText:k}),$(()=>{!_&&!f&&k("")},[_,f]);const O=_t({onText:k,onChange:A,value:L,limit:s,min:r,keepQuery:f,keepOpened:u,setClosed:x,onSelect:o}),[,,tt]=Mo(I);return{active:b,query:z,textual:m,value:L,source$:I,loading:tt==="pending",items:T(()=>{if(!b)return Vo;const C=d?V:[...L,...Ut(L,Qe(h))(V)];return p?C:Do(C,z,m)},[V,b,z,m,S,L,d,h,p]),onClick:w(()=>x(!1),[]),onFocus:y,onText:w(C=>{k(C.target.value),x(!1)},[k,t,x]),onSelect:w(C=>{O.onSelect?.(C,O);const{onChange:M,onText:j,limit:Nt,min:an,value:cn,keepQuery:hn,keepOpened:un,setClosed:dn}=O;hn||j(""),un||dn(!0);const yt=st(cn),ne=yt.includes(C);ne&&yt.length===an||M((ne?Ut(C)(yt):[...yt,C]).slice(-Nt))},[O]),onDeselect:w(C=>O.onChange(Ut(C)(O.value)),[O]),defaultIndex:z!==void 0&&z?.length>0?0:g}},Ho=e=>{const t=e.shadowRoot.querySelectorAll(".chip"),n=e.shadowRoot.querySelector(".badge");n.hidden=!0;for(const l of t)l.hidden=!1;const o=e.shadowRoot.querySelector("cosmoz-input").shadowRoot?.querySelector(".control")?.getBoundingClientRect();let s;for(s=0;s<t.length;s++){const a=t[s].getBoundingClientRect();if(!(a.x+a.width<=o.x+o.width-24))break}const r=t.length-s;for(n.querySelector("span").textContent="+"+r.toString(),n.hidden=r<1;s<t.length;s++)t[s].hidden=!0},jo=({value:e,active:t,wrap:n,limit:i})=>{const o=It(),s=!(n||i==1),r=T(()=>Fo(()=>Ho(o)),[]),[l,a]=Z(0);oe(()=>{if(!s)return;const c=o.shadowRoot.querySelector("cosmoz-input"),h=new ResizeObserver(u=>{a(u[0].contentRect.width)});return h.observe(c),()=>h.disconnect()},[s]),oe(()=>s?r():void 0,[s,l,t,e])},Wo=["input","control","label","line","error","wrap"].map(e=>`${e}: input-${e}`).join(),Uo=[Ci({apply({rects:e,elements:t}){Object.assign(t.floating.style,{minWidth:`${Math.max(e.reference.width,e.floating.width)}px`})}}),...Ye],Yo=({active:e,isSingle:t,showSingle:n})=>e?!(t&&!n):!1,qo=e=>{const{active:t,invalid:n,errorMessage:i,label:o,placeholder:s,disabled:r,noLabelFloat:l,alwaysFloatLabel:a,textual:c,text:h,onText:u,onFocus:f,onClick:d,onDeselect:g,value:p,limit:v,min:m,showSingle:b,items:_,source$:y,placement:x,loading:S,chipRenderer:z}=e,R=It(),k=v==1,A=k&&p?.[0]!=null,{styles:V,setReference:G,setFloating:I}=Ei({placement:x,middleware:Uo});$(()=>(R.addEventListener("focusin",f),R.addEventListener("focusout",f),()=>{R.removeEventListener("focusin",f),R.removeEventListener("focusout",f)}),[f]),qe({focus:()=>R.shadowRoot?.querySelector("#input")?.focus()},[]);const L=S||_.length>0||h!=null&&h.length>0;return E`<cosmoz-input
				id="input"
				part="input"
				${bt(G)}
				.label=${o}
				.placeholder=${A?void 0:s}
				?no-label-float=${l}
				?always-float-label=${p?.length>0||a}
				?readonly=${A}
				?disabled=${r}
				?invalid=${be(y.then(()=>n,()=>!0),n)}
				.errorMessage=${be(y.then(()=>i,O=>O.message),i)}
				.value=${Dt(h)}
				@value-changed=${u}
				@click=${d}
				autocomplete="off"
				exportparts=${Wo}
				?data-one=${k}
				?data-single=${A}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix"></slot>
				${ko({value:p,min:m,onDeselect:g,textual:c,disabled:r,chipRenderer:z})}
			</cosmoz-input>

			${X(Yo({active:t,isSingle:A,showSingle:b}),()=>Co({...e,items:_,multi:!k,setFloating:I,styles:{...V,display:L?void 0:"none"}},X(S,()=>E`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>X(h!=null&&h.length>0&&_.length===0,()=>E`<slot name="no-result">
											<p class="no-result">${_n("No results found")}</p>
										</slot>`))))}`},sn=e=>{const t={...e,...No(e)};return jo(t),qo(t)},rn=["disabled","invalid","no-label-float","always-float-label","text-property","value-property","limit","min","show-single","preserve-order","keep-opened","keep-query","default-index","external-search","item-height","item-limit","wrap"],Go=e=>{const{onChange:t,onText:n,...i}=e,[o,s]=yn("value");return $(()=>{e.onChange!=null&&console.warn("onChange is deprecated; use value-changed and lift instead")},[]),sn({...i,value:o,onChange:w((r,...l)=>{s(r),t?.(r,...l)},[t]),onText:w(r=>{e.text=r,n?.(r)},[n])})},ln=[Zt(Ro)];customElements.define("cosmoz-autocomplete-ui",J(sn,{observedAttributes:rn,styleSheets:ln}));customElements.define("cosmoz-autocomplete",J(Go,{observedAttributes:rn,styleSheets:ln}));const ts=["Red","Green","Purple","Blue","White","Brown","Aqua","Nothing"].map(e=>({text:e}));export{sn as A,at as a,J as b,ts as c,rn as d,B as e,Jo as i,X as n,Tn as o,Ro as s,w as u};
