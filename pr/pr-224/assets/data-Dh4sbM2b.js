import{e as P,r as ze,E as F,f as Z,g as $,A as pt,p as $e,h as ke,H as Ae,a as w,b as S,d as J,s as Re,c as at,n as ui,M as di,j as et,v as dt,k as Ht,l as Et,m as gt,o as fi,q as pi,t as ie,w as mi,u as gi}from"./iframe-e23MYjD5.js";import{_ as vi}from"./preload-helper-PPVm8Dsz.js";function Te(e){return P(()=>({current:e}),[])}const j={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},rt=e=>(...t)=>({_$litDirective$:e,values:t});let vt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,n){this._$Ct=t,this._$AM=i,this._$Ci=n}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}};const ft=(e,t)=>{const i=e._$AN;if(i===void 0)return!1;for(const n of i)n._$AO?.(t,!1),ft(n,t);return!0},St=e=>{let t,i;do{if((t=e._$AM)===void 0)break;i=t._$AN,i.delete(e),e=t}while(i?.size===0)},Le=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(i===void 0)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),yi(t)}};function bi(e){this._$AN!==void 0?(St(this),this._$AM=e,Le(this)):this._$AM=e}function _i(e,t=!1,i=0){const n=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(t)if(Array.isArray(n))for(let s=i;s<n.length;s++)ft(n[s],!1),St(n[s]);else n!=null&&(ft(n,!1),St(n));else ft(this,e)}const yi=e=>{e.type==j.CHILD&&(e._$AP??=_i,e._$AQ??=bi)};class Xt extends vt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,i,n){super._$AT(t,i,n),Le(this),this.isConnected=t._$AU}_$AO(t,i=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),i&&(ft(this,t),St(this))}setValue(t){if(ze(this._$Ct))this._$Ct._$AI(t,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}const Oe="important",wi=" !"+Oe,xi=rt(class extends vt{constructor(e){if(super(e),e.type!==j.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,i)=>{const n=e[i];return n==null?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(e,[t]){const{style:i}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const n of this.ft)t[n]==null&&(this.ft.delete(n),n.includes("-")?i.removeProperty(n):i[n]=null);for(const n in t){const o=t[n];if(o!=null){this.ft.add(n);const s=typeof o=="string"&&o.endsWith(wi);n.includes("-")||s?i.setProperty(n,s?o.slice(0,-11):o,s?Oe:""):i[n]=o}}return F}});function X(e,t,i){return e?t(e):i?.(e)}const At=(e,...t)=>e.flatMap((i,n)=>[i,t[n]??""]).join(""),Kt=(...e)=>{const t=new CSSStyleSheet;return t.replaceSync(e.join("")),t},ct=Math.min,M=Math.max,zt=Math.round,wt=Math.floor,U=e=>({x:e,y:e}),Ci={left:"right",right:"left",bottom:"top",top:"bottom"},Ei={start:"end",end:"start"};function ne(e,t,i){return M(e,ct(t,i))}function Rt(e,t){return typeof e=="function"?e(t):e}function nt(e){return e.split("-")[0]}function Tt(e){return e.split("-")[1]}function Me(e){return e==="x"?"y":"x"}function Pe(e){return e==="y"?"height":"width"}const Si=new Set(["top","bottom"]);function K(e){return Si.has(nt(e))?"y":"x"}function De(e){return Me(K(e))}function zi(e,t,i){i===void 0&&(i=!1);const n=Tt(e),o=De(e),s=Pe(o);let r=o==="x"?n===(i?"end":"start")?"right":"left":n==="start"?"bottom":"top";return t.reference[s]>t.floating[s]&&(r=$t(r)),[r,$t(r)]}function $i(e){const t=$t(e);return[Yt(e),t,Yt(t)]}function Yt(e){return e.replace(/start|end/g,t=>Ei[t])}const oe=["left","right"],se=["right","left"],ki=["top","bottom"],Ai=["bottom","top"];function Ri(e,t,i){switch(e){case"top":case"bottom":return i?t?se:oe:t?oe:se;case"left":case"right":return t?ki:Ai;default:return[]}}function Ti(e,t,i,n){const o=Tt(e);let s=Ri(nt(e),i==="start",n);return o&&(s=s.map(r=>r+"-"+o),t&&(s=s.concat(s.map(Yt)))),s}function $t(e){return e.replace(/left|right|bottom|top/g,t=>Ci[t])}function Li(e){return{top:0,right:0,bottom:0,left:0,...e}}function Oi(e){return typeof e!="number"?Li(e):{top:e,right:e,bottom:e,left:e}}function kt(e){const{x:t,y:i,width:n,height:o}=e;return{width:n,height:o,top:i,left:t,right:t+n,bottom:i+o,x:t,y:i}}function re(e,t,i){let{reference:n,floating:o}=e;const s=K(t),r=De(t),l=Pe(r),a=nt(t),c=s==="y",h=n.x+n.width/2-o.width/2,u=n.y+n.height/2-o.height/2,f=n[l]/2-o[l]/2;let d;switch(a){case"top":d={x:h,y:n.y-o.height};break;case"bottom":d={x:h,y:n.y+n.height};break;case"right":d={x:n.x+n.width,y:u};break;case"left":d={x:n.x-o.width,y:u};break;default:d={x:n.x,y:n.y}}switch(Tt(t)){case"start":d[r]-=f*(i&&c?-1:1);break;case"end":d[r]+=f*(i&&c?-1:1);break}return d}async function Mi(e,t){var i;t===void 0&&(t={});const{x:n,y:o,platform:s,rects:r,elements:l,strategy:a}=e,{boundary:c="clippingAncestors",rootBoundary:h="viewport",elementContext:u="floating",altBoundary:f=!1,padding:d=0}=Rt(t,e),p=Oi(d),v=l[f?u==="floating"?"reference":"floating":u],g=kt(await s.getClippingRect({element:(i=await(s.isElement==null?void 0:s.isElement(v)))==null||i?v:v.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(l.floating)),boundary:c,rootBoundary:h,strategy:a})),b=u==="floating"?{x:n,y:o,width:r.floating.width,height:r.floating.height}:r.reference,_=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l.floating)),y=await(s.isElement==null?void 0:s.isElement(_))?await(s.getScale==null?void 0:s.getScale(_))||{x:1,y:1}:{x:1,y:1},x=kt(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:b,offsetParent:_,strategy:a}):b);return{top:(g.top-x.top+p.top)/y.y,bottom:(x.bottom-g.bottom+p.bottom)/y.y,left:(g.left-x.left+p.left)/y.x,right:(x.right-g.right+p.right)/y.x}}const Pi=async(e,t,i)=>{const{placement:n="bottom",strategy:o="absolute",middleware:s=[],platform:r}=i,l=s.filter(Boolean),a=await(r.isRTL==null?void 0:r.isRTL(t));let c=await r.getElementRects({reference:e,floating:t,strategy:o}),{x:h,y:u}=re(c,n,a),f=n,d={},p=0;for(let v=0;v<l.length;v++){var m;const{name:g,fn:b}=l[v],{x:_,y,data:x,reset:E}=await b({x:h,y:u,initialPlacement:n,placement:f,strategy:o,middlewareData:d,rects:c,platform:{...r,detectOverflow:(m=r.detectOverflow)!=null?m:Mi},elements:{reference:e,floating:t}});h=_??h,u=y??u,d={...d,[g]:{...d[g],...x}},E&&p<=50&&(p++,typeof E=="object"&&(E.placement&&(f=E.placement),E.rects&&(c=E.rects===!0?await r.getElementRects({reference:e,floating:t,strategy:o}):E.rects),{x:h,y:u}=re(c,f,a)),v=-1)}return{x:h,y:u,placement:f,strategy:o,middlewareData:d}},Di=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var i,n;const{placement:o,middlewareData:s,rects:r,initialPlacement:l,platform:a,elements:c}=t,{mainAxis:h=!0,crossAxis:u=!0,fallbackPlacements:f,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:m=!0,...v}=Rt(e,t);if((i=s.arrow)!=null&&i.alignmentOffset)return{};const g=nt(o),b=K(l),_=nt(l)===l,y=await(a.isRTL==null?void 0:a.isRTL(c.floating)),x=f||(_||!m?[$t(l)]:$i(l)),E=p!=="none";!f&&E&&x.push(...Ti(l,m,p,y));const z=[l,...x],R=await a.detectOverflow(t,v),k=[];let A=((n=s.flip)==null?void 0:n.overflows)||[];if(h&&k.push(R[g]),u){const T=zi(o,r,y);k.push(R[T[0]],R[T[1]])}if(A=[...A,{placement:o,overflows:k}],!k.every(T=>T<=0)){var B,G;const T=(((B=s.flip)==null?void 0:B.index)||0)+1,L=z[T];if(L&&(!(u==="alignment"?b!==K(L):!1)||A.every(O=>K(O.placement)===b?O.overflows[0]>0:!0)))return{data:{index:T,overflows:A},reset:{placement:L}};let tt=(G=A.filter(C=>C.overflows[0]<=0).sort((C,O)=>C.overflows[1]-O.overflows[1])[0])==null?void 0:G.placement;if(!tt)switch(d){case"bestFit":{var V;const C=(V=A.filter(O=>{if(E){const W=K(O.placement);return W===b||W==="y"}return!0}).map(O=>[O.placement,O.overflows.filter(W=>W>0).reduce((W,Nt)=>W+Nt,0)]).sort((O,W)=>O[1]-W[1])[0])==null?void 0:V[0];C&&(tt=C);break}case"initialPlacement":tt=l;break}if(o!==tt)return{reset:{placement:tt}}}return{}}}},Vi=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:i,y:n,placement:o,platform:s}=t,{mainAxis:r=!0,crossAxis:l=!1,limiter:a={fn:g=>{let{x:b,y:_}=g;return{x:b,y:_}}},...c}=Rt(e,t),h={x:i,y:n},u=await s.detectOverflow(t,c),f=K(nt(o)),d=Me(f);let p=h[d],m=h[f];if(r){const g=d==="y"?"top":"left",b=d==="y"?"bottom":"right",_=p+u[g],y=p-u[b];p=ne(_,p,y)}if(l){const g=f==="y"?"top":"left",b=f==="y"?"bottom":"right",_=m+u[g],y=m-u[b];m=ne(_,m,y)}const v=a.fn({...t,[d]:p,[f]:m});return{...v,data:{x:v.x-i,y:v.y-n,enabled:{[d]:r,[f]:l}}}}}},Ii=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var i,n;const{placement:o,rects:s,platform:r,elements:l}=t,{apply:a=()=>{},...c}=Rt(e,t),h=await r.detectOverflow(t,c),u=nt(o),f=Tt(o),d=K(o)==="y",{width:p,height:m}=s.floating;let v,g;u==="top"||u==="bottom"?(v=u,g=f===(await(r.isRTL==null?void 0:r.isRTL(l.floating))?"start":"end")?"left":"right"):(g=u,v=f==="end"?"top":"bottom");const b=m-h.top-h.bottom,_=p-h.left-h.right,y=ct(m-h[v],b),x=ct(p-h[g],_),E=!t.middlewareData.shift;let z=y,R=x;if((i=t.middlewareData.shift)!=null&&i.enabled.x&&(R=_),(n=t.middlewareData.shift)!=null&&n.enabled.y&&(z=b),E&&!f){const A=M(h.left,0),B=M(h.right,0),G=M(h.top,0),V=M(h.bottom,0);d?R=p-2*(A!==0||B!==0?A+B:M(h.left,h.right)):z=m-2*(G!==0||V!==0?G+V:M(h.top,h.bottom))}await a({...t,availableWidth:R,availableHeight:z});const k=await r.getDimensions(l.floating);return p!==k.width||m!==k.height?{reset:{rects:!0}}:{}}}};function Lt(){return typeof window<"u"}function ut(e){return Ve(e)?(e.nodeName||"").toLowerCase():"#document"}function D(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function q(e){var t;return(t=(Ve(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Ve(e){return Lt()?e instanceof Node||e instanceof D(e).Node:!1}function N(e){return Lt()?e instanceof Element||e instanceof D(e).Element:!1}function Y(e){return Lt()?e instanceof HTMLElement||e instanceof D(e).HTMLElement:!1}function le(e){return!Lt()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof D(e).ShadowRoot}const Bi=new Set(["inline","contents"]);function bt(e){const{overflow:t,overflowX:i,overflowY:n,display:o}=H(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+i)&&!Bi.has(o)}const Fi=new Set(["table","td","th"]);function Ni(e){return Fi.has(ut(e))}const Hi=[":popover-open",":modal"];function Ot(e){return Hi.some(t=>{try{return e.matches(t)}catch{return!1}})}const Wi=["transform","translate","scale","rotate","perspective"],ji=["transform","translate","scale","rotate","perspective","filter"],Ui=["paint","layout","strict","content"];function Zt(e){const t=Qt(),i=N(e)?H(e):e;return Wi.some(n=>i[n]?i[n]!=="none":!1)||(i.containerType?i.containerType!=="normal":!1)||!t&&(i.backdropFilter?i.backdropFilter!=="none":!1)||!t&&(i.filter?i.filter!=="none":!1)||ji.some(n=>(i.willChange||"").includes(n))||Ui.some(n=>(i.contain||"").includes(n))}function Yi(e){let t=Q(e);for(;Y(t)&&!ht(t);){if(Zt(t))return t;if(Ot(t))return null;t=Q(t)}return null}function Qt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const qi=new Set(["html","body","#document"]);function ht(e){return qi.has(ut(e))}function H(e){return D(e).getComputedStyle(e)}function Mt(e){return N(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Q(e){if(ut(e)==="html")return e;const t=e.assignedSlot||e.parentNode||le(e)&&e.host||q(e);return le(t)?t.host:t}function Ie(e){const t=Q(e);return ht(t)?e.ownerDocument?e.ownerDocument.body:e.body:Y(t)&&bt(t)?t:Ie(t)}function mt(e,t,i){var n;t===void 0&&(t=[]),i===void 0&&(i=!0);const o=Ie(e),s=o===((n=e.ownerDocument)==null?void 0:n.body),r=D(o);if(s){const l=qt(r);return t.concat(r,r.visualViewport||[],bt(o)?o:[],l&&i?mt(l):[])}return t.concat(o,mt(o,[],i))}function qt(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Be(e){const t=H(e);let i=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const o=Y(e),s=o?e.offsetWidth:i,r=o?e.offsetHeight:n,l=zt(i)!==s||zt(n)!==r;return l&&(i=s,n=r),{width:i,height:n,$:l}}function Jt(e){return N(e)?e:e.contextElement}function lt(e){const t=Jt(e);if(!Y(t))return U(1);const i=t.getBoundingClientRect(),{width:n,height:o,$:s}=Be(t);let r=(s?zt(i.width):i.width)/n,l=(s?zt(i.height):i.height)/o;return(!r||!Number.isFinite(r))&&(r=1),(!l||!Number.isFinite(l))&&(l=1),{x:r,y:l}}const Gi=U(0);function Fe(e){const t=D(e);return!Qt()||!t.visualViewport?Gi:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Xi(e,t,i){return t===void 0&&(t=!1),!i||t&&i!==D(e)?!1:t}function ot(e,t,i,n){t===void 0&&(t=!1),i===void 0&&(i=!1);const o=e.getBoundingClientRect(),s=Jt(e);let r=U(1);t&&(n?N(n)&&(r=lt(n)):r=lt(e));const l=Xi(s,i,n)?Fe(s):U(0);let a=(o.left+l.x)/r.x,c=(o.top+l.y)/r.y,h=o.width/r.x,u=o.height/r.y;if(s){const f=D(s),d=n&&N(n)?D(n):n;let p=f,m=qt(p);for(;m&&n&&d!==p;){const v=lt(m),g=m.getBoundingClientRect(),b=H(m),_=g.left+(m.clientLeft+parseFloat(b.paddingLeft))*v.x,y=g.top+(m.clientTop+parseFloat(b.paddingTop))*v.y;a*=v.x,c*=v.y,h*=v.x,u*=v.y,a+=_,c+=y,p=D(m),m=qt(p)}}return kt({width:h,height:u,x:a,y:c})}function Pt(e,t){const i=Mt(e).scrollLeft;return t?t.left+i:ot(q(e)).left+i}function Ne(e,t){const i=e.getBoundingClientRect(),n=i.left+t.scrollLeft-Pt(e,i),o=i.top+t.scrollTop;return{x:n,y:o}}function Ki(e){let{elements:t,rect:i,offsetParent:n,strategy:o}=e;const s=o==="fixed",r=q(n),l=t?Ot(t.floating):!1;if(n===r||l&&s)return i;let a={scrollLeft:0,scrollTop:0},c=U(1);const h=U(0),u=Y(n);if((u||!u&&!s)&&((ut(n)!=="body"||bt(r))&&(a=Mt(n)),Y(n))){const d=ot(n);c=lt(n),h.x=d.x+n.clientLeft,h.y=d.y+n.clientTop}const f=r&&!u&&!s?Ne(r,a):U(0);return{width:i.width*c.x,height:i.height*c.y,x:i.x*c.x-a.scrollLeft*c.x+h.x+f.x,y:i.y*c.y-a.scrollTop*c.y+h.y+f.y}}function Zi(e){return Array.from(e.getClientRects())}function Qi(e){const t=q(e),i=Mt(e),n=e.ownerDocument.body,o=M(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),s=M(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let r=-i.scrollLeft+Pt(e);const l=-i.scrollTop;return H(n).direction==="rtl"&&(r+=M(t.clientWidth,n.clientWidth)-o),{width:o,height:s,x:r,y:l}}const ae=25;function Ji(e,t){const i=D(e),n=q(e),o=i.visualViewport;let s=n.clientWidth,r=n.clientHeight,l=0,a=0;if(o){s=o.width,r=o.height;const h=Qt();(!h||h&&t==="fixed")&&(l=o.offsetLeft,a=o.offsetTop)}const c=Pt(n);if(c<=0){const h=n.ownerDocument,u=h.body,f=getComputedStyle(u),d=h.compatMode==="CSS1Compat"&&parseFloat(f.marginLeft)+parseFloat(f.marginRight)||0,p=Math.abs(n.clientWidth-u.clientWidth-d);p<=ae&&(s-=p)}else c<=ae&&(s+=c);return{width:s,height:r,x:l,y:a}}const tn=new Set(["absolute","fixed"]);function en(e,t){const i=ot(e,!0,t==="fixed"),n=i.top+e.clientTop,o=i.left+e.clientLeft,s=Y(e)?lt(e):U(1),r=e.clientWidth*s.x,l=e.clientHeight*s.y,a=o*s.x,c=n*s.y;return{width:r,height:l,x:a,y:c}}function ce(e,t,i){let n;if(t==="viewport")n=Ji(e,i);else if(t==="document")n=Qi(q(e));else if(N(t))n=en(t,i);else{const o=Fe(e);n={x:t.x-o.x,y:t.y-o.y,width:t.width,height:t.height}}return kt(n)}function He(e,t){const i=Q(e);return i===t||!N(i)||ht(i)?!1:H(i).position==="fixed"||He(i,t)}function nn(e,t){const i=t.get(e);if(i)return i;let n=mt(e,[],!1).filter(l=>N(l)&&ut(l)!=="body"),o=null;const s=H(e).position==="fixed";let r=s?Q(e):e;for(;N(r)&&!ht(r);){const l=H(r),a=Zt(r);!a&&l.position==="fixed"&&(o=null),(s?!a&&!o:!a&&l.position==="static"&&!!o&&tn.has(o.position)||bt(r)&&!a&&He(e,r))?n=n.filter(h=>h!==r):o=l,r=Q(r)}return t.set(e,n),n}function on(e){let{element:t,boundary:i,rootBoundary:n,strategy:o}=e;const r=[...i==="clippingAncestors"?Ot(t)?[]:nn(t,this._c):[].concat(i),n],l=r[0],a=r.reduce((c,h)=>{const u=ce(t,h,o);return c.top=M(u.top,c.top),c.right=ct(u.right,c.right),c.bottom=ct(u.bottom,c.bottom),c.left=M(u.left,c.left),c},ce(t,l,o));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function sn(e){const{width:t,height:i}=Be(e);return{width:t,height:i}}function rn(e,t,i){const n=Y(t),o=q(t),s=i==="fixed",r=ot(e,!0,s,t);let l={scrollLeft:0,scrollTop:0};const a=U(0);function c(){a.x=Pt(o)}if(n||!n&&!s)if((ut(t)!=="body"||bt(o))&&(l=Mt(t)),n){const d=ot(t,!0,s,t);a.x=d.x+t.clientLeft,a.y=d.y+t.clientTop}else o&&c();s&&!n&&o&&c();const h=o&&!n&&!s?Ne(o,l):U(0),u=r.left+l.scrollLeft-a.x-h.x,f=r.top+l.scrollTop-a.y-h.y;return{x:u,y:f,width:r.width,height:r.height}}function Wt(e){return H(e).position==="static"}function he(e,t){if(!Y(e)||H(e).position==="fixed")return null;if(t)return t(e);let i=e.offsetParent;return q(e)===i&&(i=i.ownerDocument.body),i}function We(e,t){const i=D(e);if(Ot(e))return i;if(!Y(e)){let o=Q(e);for(;o&&!ht(o);){if(N(o)&&!Wt(o))return o;o=Q(o)}return i}let n=he(e,t);for(;n&&Ni(n)&&Wt(n);)n=he(n,t);return n&&ht(n)&&Wt(n)&&!Zt(n)?i:n||Yi(e)||i}const ln=async function(e){const t=this.getOffsetParent||We,i=this.getDimensions,n=await i(e.floating);return{reference:rn(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function an(e){return H(e).direction==="rtl"}const cn={convertOffsetParentRelativeRectToViewportRelativeRect:Ki,getDocumentElement:q,getClippingRect:on,getOffsetParent:We,getElementRects:ln,getClientRects:Zi,getDimensions:sn,getScale:lt,isElement:N,isRTL:an};function je(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function hn(e,t){let i=null,n;const o=q(e);function s(){var l;clearTimeout(n),(l=i)==null||l.disconnect(),i=null}function r(l,a){l===void 0&&(l=!1),a===void 0&&(a=1),s();const c=e.getBoundingClientRect(),{left:h,top:u,width:f,height:d}=c;if(l||t(),!f||!d)return;const p=wt(u),m=wt(o.clientWidth-(h+f)),v=wt(o.clientHeight-(u+d)),g=wt(h),_={rootMargin:-p+"px "+-m+"px "+-v+"px "+-g+"px",threshold:M(0,ct(1,a))||1};let y=!0;function x(E){const z=E[0].intersectionRatio;if(z!==a){if(!y)return r();z?r(!1,z):n=setTimeout(()=>{r(!1,1e-7)},1e3)}z===1&&!je(c,e.getBoundingClientRect())&&r(),y=!1}try{i=new IntersectionObserver(x,{..._,root:o.ownerDocument})}catch{i=new IntersectionObserver(x,_)}i.observe(e)}return r(!0),s}function un(e,t,i,n){n===void 0&&(n={});const{ancestorScroll:o=!0,ancestorResize:s=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:a=!1}=n,c=Jt(e),h=o||s?[...c?mt(c):[],...mt(t)]:[];h.forEach(g=>{o&&g.addEventListener("scroll",i,{passive:!0}),s&&g.addEventListener("resize",i)});const u=c&&l?hn(c,i):null;let f=-1,d=null;r&&(d=new ResizeObserver(g=>{let[b]=g;b&&b.target===c&&d&&(d.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var _;(_=d)==null||_.observe(t)})),i()}),c&&!a&&d.observe(c),d.observe(t));let p,m=a?ot(e):null;a&&v();function v(){const g=ot(e);m&&!je(m,g)&&i(),m=g,p=requestAnimationFrame(v)}return i(),()=>{var g;h.forEach(b=>{o&&b.removeEventListener("scroll",i),s&&b.removeEventListener("resize",i)}),u?.(),(g=d)==null||g.disconnect(),d=null,a&&cancelAnimationFrame(p)}}const dn=Vi,fn=Di,pn=Ii,mn=(e,t,i)=>{const n=new Map,o={platform:cn,...i},s={...o.platform,_c:n};return Pi(e,t,{...o,platform:s})},Ue=[fn({fallbackAxisSideDirection:"start",crossAxis:!1}),dn()],gn=({placement:e="bottom-start",strategy:t,middleware:i=Ue}={})=>{const[n,o]=Z(),[s,r]=Z(),[l,a]=Z();return $(()=>{if(!n||!(s instanceof HTMLElement)){a(void 0);return}return un(n,s,()=>mn(n,s,{placement:e,strategy:t,middleware:i}).then(a))},[n,s,e,t,i]),{setReference:o,setFloating:r,styles:P(()=>l?{left:`${l.x}px`,top:`${l.y}px`}:{},[l?.x,l?.y])}};const Dt=rt(class extends vt{constructor(e){if(super(e),e.type!==j.PROPERTY&&e.type!==j.ATTRIBUTE&&e.type!==j.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!ze(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===F||t===pt)return t;const i=e.element,n=e.name;if(e.type===j.PROPERTY){if(t===i[n])return F}else if(e.type===j.BOOLEAN_ATTRIBUTE){if(!!t===i.hasAttribute(n))return F}else if(e.type===j.ATTRIBUTE&&i.getAttribute(n)===t+"")return F;return $e(e),t}}),jt=new WeakMap,_t=rt(class extends Xt{render(e){return pt}update(e,[t]){const i=t!==this.G;return i&&this.G!==void 0&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),pt}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let i=jt.get(t);i===void 0&&(i=new WeakMap,jt.set(t,i)),i.get(this.G)!==void 0&&this.G.call(this.ht,void 0),i.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?jt.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});const I=e=>e??pt,Ye=ke(class extends Ae{values;constructor(e,t,i,n){super(e,t),Object.assign(t.host,i),this.values=n}update(e,t){this.hasChanged(t)&&(this.values=t,Object.assign(this.state.host,e))}hasChanged(e=[]){return e.some((t,i)=>this.values[i]!==t)}}),Vt=ke(class extends Ae{update(){return this.state.host}}),vn=/([A-Z])/gu,ue=(e,t,i)=>{e[t]=i,e.dispatchEvent(new CustomEvent(t.replace(vn,"-$1").toLowerCase()+"-changed",{detail:{value:i}}))},qe=e=>{const t=Te(void 0),i=w(c=>t.current=c,[]),n=e.shadowRoot,o=w(c=>e.dispatchEvent(new Event(c.type,{bubbles:c.bubbles})),[]),s=w(c=>ue(e,"value",c.target.value),[]),r=w(c=>ue(e,"focused",c.type==="focus"),[]),l=w(()=>t.current?.focus(),[]),a=w(()=>{const c=t.current?.checkValidity();return e.toggleAttribute("invalid",!c),c},[]);return Ye({focus:l,validate:a},[l,a]),$(()=>{const c=h=>{h.defaultPrevented||e.disabled||h.target.matches("input, textarea, label")||(h.preventDefault(),e.matches(":focus-within")||l())};return n.addEventListener("mousedown",c),()=>n.removeEventListener("mousedown",c)},[l]),{onChange:o,onFocus:r,onInput:s,onRef:i}},bn=e=>P(()=>{if(e==null)return;const t=new RegExp(e,"u");return i=>{!i.defaultPrevented&&i.data&&!t.test(i.data)&&i.preventDefault()}},[e]),Ge=(e,{label:t,invalid:i,errorMessage:n})=>S`
		<div class="float" part="float">&nbsp;</div>
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${e}
				${X(t,()=>S`<label for="input" part="label">${t}</label>`)}
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line" part="line"></div>
		${X(i&&n,()=>S`<div class="error" part="error">${n}</div>`)}
	`,Xe=["autocomplete","readonly","disabled","maxlength","invalid","no-label-float","always-float-label"],_n=({placeholder:e,noLabelFloat:t,label:i})=>(t?i:void 0)||e||" ",de=At`
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
`,Ke=At`
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
		${de}
	}
	@container style(--focused: focused) {
		${de}
	}
`,yn=["type","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...Xe],wn=e=>{const{type:t="text",pattern:i,allowedPattern:n,autocomplete:o,value:s,readonly:r,disabled:l,min:a,max:c,step:h,maxlength:u}=e,{onChange:f,onFocus:d,onInput:p,onRef:m}=qe(e),v=bn(n);return Ge(S`
			<input
				${_t(m)}
				style="--chars: ${s?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${I(i)}
				autocomplete=${I(o)}
				placeholder=${_n(e)}
				?readonly=${r}
				?aria-disabled=${l}
				?disabled=${l}
				.value=${Dt(s??"")}
				maxlength=${I(u)}
				@beforeinput=${v}
				@input=${p}
				@change=${f}
				@focus=${d}
				@blur=${d}
				min=${I(a)}
				max=${I(c)}
				step=${I(h)}
			/>
		`,e)};customElements.define("cosmoz-input",J(wn,{observedAttributes:yn,styleSheets:[Re(Ke)]}));const fe=e=>{e.style.height="",e.style.height=`${e.scrollHeight}px`},xn=(e,t=0)=>{if(t>0){const i=e.getAttribute("rows")??"",n=e.style.height;e.style.height="",e.setAttribute("rows",t),e.style.maxHeight=e.getBoundingClientRect().height+"px",e.style.height=n,e.setAttribute("rows",i)}},Cn=e=>{const{value:t,maxRows:i}=e,n=P(()=>()=>e.shadowRoot.querySelector("#input"),[]);$(()=>xn(n(),i),[i,n]),$(()=>fe(n()),[n,t]),$(()=>{const o=n(),s=new ResizeObserver(()=>requestAnimationFrame(()=>fe(o)));return s.observe(o),()=>s.unobserve(o)},[n])},En=["rows","placeholder",...Xe],Sn=e=>{const{autocomplete:t,value:i,placeholder:n,readonly:o,disabled:s,rows:r,cols:l,maxlength:a}=e,{onChange:c,onFocus:h,onInput:u,onRef:f}=qe(e);return Cn(e),Ge(S`
			<textarea id="input" part="input"
				${_t(f)}
				autocomplete=${I(t)}
				placeholder=${n||" "}
				rows=${r??1} cols=${I(l)}
				?readonly=${o} ?aria-disabled=${s} ?disabled=${s}
				.value=${Dt(i??"")} maxlength=${I(a)} @input=${u}
				@change=${c} @focus=${h} @blur=${h}>`,e)};customElements.define("cosmoz-textarea",J(Sn,{observedAttributes:En,styleSheets:[Re(Ke)]}));const zn=e=>{const{label:t,value:i,disabled:n,error:o}=e,s=w(r=>e.dispatchEvent(new CustomEvent("change",{detail:r.target.checked})),[]);return S`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${Dt(!!i)}
			?disabled=${n}
			@change=${s}
		/>
		${X(t,()=>S`<label for="toggle">${t}</label>`)}
		<slot name="suffix"></slot>
		${X(o,r=>S`<div class="failure">${r}</div>`)} `},$n=at`
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
`,kn=at`
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
`;customElements.define("cosmoz-toggle",J(zn,{styleSheets:[kn,$n],observedAttributes:["disabled"]}));class An{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class Rn{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(t=>this.Z=t)}resume(){this.Z?.(),this.Y=this.Z=void 0}}const pe=e=>!ui(e)&&typeof e.then=="function",me=1073741823;let Tn=class extends Xt{constructor(){super(...arguments),this._$Cwt=me,this._$Cbt=[],this._$CK=new An(this),this._$CX=new Rn}render(...t){return t.find(i=>!pe(i))??F}update(t,i){const n=this._$Cbt;let o=n.length;this._$Cbt=i;const s=this._$CK,r=this._$CX;this.isConnected||this.disconnected();for(let l=0;l<i.length&&!(l>this._$Cwt);l++){const a=i[l];if(!pe(a))return this._$Cwt=l,a;l<o&&a===n[l]||(this._$Cwt=me,o=0,Promise.resolve(a).then(async c=>{for(;r.get();)await r.get();const h=s.deref();if(h!==void 0){const u=h._$Cbt.indexOf(a);u>-1&&u<h._$Cwt&&(h._$Cwt=u,h.setValue(c))}}))}return F}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};const ge=rt(Tn);const ve=(e,t,i)=>{const n=new Map;for(let o=t;o<=i;o++)n.set(e[o],o);return n},Ln=rt(class extends vt{constructor(e){if(super(e),e.type!==j.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,i){let n;i===void 0?i=t:t!==void 0&&(n=t);const o=[],s=[];let r=0;for(const l of e)o[r]=n?n(l,r):r,s[r]=i(l,r),r++;return{values:s,keys:o}}render(e,t,i){return this.dt(e,t,i).values}update(e,[t,i,n]){const o=di(e),{values:s,keys:r}=this.dt(t,i,n);if(!Array.isArray(o))return this.ut=r,s;const l=this.ut??=[],a=[];let c,h,u=0,f=o.length-1,d=0,p=s.length-1;for(;u<=f&&d<=p;)if(o[u]===null)u++;else if(o[f]===null)f--;else if(l[u]===r[d])a[d]=et(o[u],s[d]),u++,d++;else if(l[f]===r[p])a[p]=et(o[f],s[p]),f--,p--;else if(l[u]===r[p])a[p]=et(o[u],s[p]),dt(e,a[p+1],o[u]),u++,p--;else if(l[f]===r[d])a[d]=et(o[f],s[d]),dt(e,o[u],o[f]),f--,d++;else if(c===void 0&&(c=ve(r,d,p),h=ve(l,u,f)),c.has(l[u]))if(c.has(l[f])){const m=h.get(r[d]),v=m!==void 0?o[m]:null;if(v===null){const g=dt(e,o[u]);et(g,s[d]),a[d]=g}else a[d]=et(v,s[d]),dt(e,o[u],v),o[m]=null;d++}else Ht(o[f]),f--;else Ht(o[u]),u++;for(;d<=p;){const m=dt(e,a[p+1]);et(m,s[d]),a[d++]=m}for(;u<=f;){const m=o[u++];m!==null&&Ht(m)}return this.ut=r,$e(e,a),F}});class It extends Event{constructor(t){super(It.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}}It.eventName="rangeChanged";class Bt extends Event{constructor(t){super(Bt.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}}Bt.eventName="visibilityChanged";class Ft extends Event{constructor(){super(Ft.eventName,{bubbles:!1})}}Ft.eventName="unpinned";class On{constructor(t){this._element=null;const i=t??window;this._node=i,t&&(this._element=t)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}}class Mn extends On{constructor(t,i){super(i),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);const n=this._node;this._originalScrollTo=n.scrollTo,this._originalScrollBy=n.scrollBy,this._originalScroll=n.scroll,this._attach(t)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(t,i){const n=typeof t=="number"&&typeof i=="number"?{left:t,top:i}:t;this._scrollTo(n)}scrollBy(t,i){const n=typeof t=="number"&&typeof i=="number"?{left:t,top:i}:t;n.top!==void 0&&(n.top+=this.scrollTop),n.left!==void 0&&(n.left+=this.scrollLeft),this._scrollTo(n)}_nativeScrollTo(t){this._originalScrollTo.bind(this._element||window)(t)}_scrollTo(t,i=null,n=null){this._end!==null&&this._end(),t.behavior==="smooth"?(this._setDestination(t),this._retarget=i,this._end=n):this._resetScrollState(),this._nativeScrollTo(t)}_setDestination(t){let{top:i,left:n}=t;return i=i===void 0?void 0:Math.max(0,Math.min(i,this.maxScrollTop)),n=n===void 0?void 0:Math.max(0,Math.min(n,this.maxScrollLeft)),this._destination!==null&&n===this._destination.left&&i===this._destination.top?!1:(this.__destination={top:i,left:n,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(t){this._destination&&this._setDestination(t)&&this._nativeScrollTo(this._destination)}managedScrollTo(t,i,n){return this._scrollTo(t,i,n),this._updateManagedScrollTo}correctScrollError(t){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(t),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){const{scrollTop:t,scrollLeft:i}=this;let{top:n,left:o}=this._destination;n=Math.min(n||0,this.maxScrollTop),o=Math.min(o||0,this.maxScrollLeft);const s=Math.abs(n-t),r=Math.abs(o-i);s<1&&r<1&&(this._end&&this._end(),this._resetScrollState())}}detach(t){return this._clients.delete(t),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(t){this._clients.add(t),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}}let be=typeof window<"u"?window.ResizeObserver:void 0;const Gt=Symbol("virtualizerRef"),xt="virtualizer-sizer";let _e;class Pn{constructor(t){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!t)throw new Error("Virtualizer constructor requires a configuration object");if(t.hostElement)this._init(t);else throw new Error('Virtualizer configuration requires the "hostElement" property')}set items(t){Array.isArray(t)&&t!==this._items&&(this._itemsChanged=!0,this._items=t,this._schedule(this._updateLayout))}_init(t){this._isScroller=!!t.scroller,this._initHostElement(t);const i=t.layout||{};this._layoutInitialized=this._initLayout(i)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new be(()=>this._hostElementSizeChanged()),this._childrenRO=new be(this._childrenSizeChanged.bind(this))}_initHostElement(t){const i=this._hostElement=t.hostElement;this._applyVirtualizerStyles(),i[Gt]=this}connected(){this._initObservers();const t=this._isScroller;this._clippingAncestors=In(this._hostElement,t),this._scrollerController=new Mn(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(t=>{t.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(t),this._hostElementRO.observe(t)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(t=>this._childrenRO.observe(t)),this._scrollEventListeners.forEach(t=>t.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){this._scrollEventListeners.forEach(t=>t.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],this._scrollerController?.detach(this),this._scrollerController=null,this._mutationObserver?.disconnect(),this._mutationObserver=null,this._hostElementRO?.disconnect(),this._hostElementRO=null,this._childrenRO?.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected"),this._connected=!1}_applyVirtualizerStyles(){const i=this._hostElement.style;i.display=i.display||"block",i.position=i.position||"relative",i.contain=i.contain||"size layout",this._isScroller&&(i.overflow=i.overflow||"auto",i.minHeight=i.minHeight||"150px")}_getSizer(){const t=this._hostElement;if(!this._sizer){let i=t.querySelector(`[${xt}]`);i||(i=document.createElement("div"),i.setAttribute(xt,""),t.appendChild(i)),Object.assign(i.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),i.textContent="&nbsp;",i.setAttribute(xt,""),this._sizer=i}return this._sizer}async updateLayoutConfig(t){await this._layoutInitialized;const i=t.type||_e;if(typeof i=="function"&&this._layout instanceof i){const n={...t};return delete n.type,this._layout.config=n,!0}return!1}async _initLayout(t){let i,n;if(typeof t.type=="function"){n=t.type;const o={...t};delete o.type,i=o}else i=t;n===void 0&&(_e=n=(await vi(()=>import("./flow-BqIEBwW6.js"),[],import.meta.url)).FlowLayout),this._layout=new n(o=>this._handleLayoutMessage(o),i),this._layout.measureChildren&&typeof this._layout.updateItemSizes=="function"&&(typeof this._layout.measureChildren=="function"&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){const t=window.performance.now(),i=t-this._benchmarkStart,o=performance.getEntriesByName("uv-virtualizing","measure").filter(s=>s.startTime>=this._benchmarkStart&&s.startTime<t).reduce((s,r)=>s+r.duration,0);return this._benchmarkStart=null,{timeElapsed:i,virtualizationTime:o}}return null}_measureChildren(){const t={},i=this._children,n=this._measureChildOverride||this._measureChild;for(let o=0;o<i.length;o++){const s=i[o],r=this._first+o;(this._itemsChanged||this._toBeMeasured.has(s))&&(t[r]=n.call(this,s,this._items[r]))}this._childMeasurements=t,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(t){const{width:i,height:n}=t.getBoundingClientRect();return Object.assign({width:i,height:n},Dn(t))}async _schedule(t){this._scheduled.has(t)||(this._scheduled.add(t),await Promise.resolve(),this._scheduled.delete(t),t.call(this))}async _updateDOM(t){this._scrollSize=t.scrollSize,this._adjustRange(t.range),this._childrenPos=t.childPositions,this._scrollError=t.scrollError||null;const{_rangeChanged:i,_itemsChanged:n}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(i||n)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(t=>this._childrenRO.observe(t)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(t){console.warn("Error measuring performance data: ",t)}window.performance.mark("uv-start")}this._scrollerController.correctingScrollError===!1&&this._layout?.unpin(),this._schedule(this._updateLayout)}handleEvent(t){t.type==="scroll"?(t.currentTarget===window||this._clippingAncestors.includes(t.currentTarget))&&this._handleScrollEvent():console.warn("event not handled",t)}_handleLayoutMessage(t){t.type==="stateChanged"?this._updateDOM(t):t.type==="visibilityChanged"?(this._firstVisible=t.firstVisible,this._lastVisible=t.lastVisible,this._notifyVisibility()):t.type==="unpinned"&&this._hostElement.dispatchEvent(new Ft)}get _children(){const t=[];let i=this._hostElement.firstElementChild;for(;i;)i.hasAttribute(xt)||t.push(i),i=i.nextElementSibling;return t}_updateView(){const t=this._hostElement,i=this._scrollerController?.element,n=this._layout;if(t&&i&&n){let o,s,r,l;const a=t.getBoundingClientRect();o=0,s=0,r=window.innerHeight,l=window.innerWidth;const c=this._clippingAncestors.map(g=>g.getBoundingClientRect());c.unshift(a);for(const g of c)o=Math.max(o,g.top),s=Math.max(s,g.left),r=Math.min(r,g.bottom),l=Math.min(l,g.right);const h=i.getBoundingClientRect(),u={left:a.left-h.left,top:a.top-h.top},f={width:i.scrollWidth,height:i.scrollHeight},d=o-a.top+t.scrollTop,p=s-a.left+t.scrollLeft,m=Math.max(0,r-o),v=Math.max(0,l-s);n.viewportSize={width:v,height:m},n.viewportScroll={top:d,left:p},n.totalScrollSize=f,n.offsetWithinScroller=u}}_sizeHostElement(t){const n=t&&t.width!==null?Math.min(82e5,t.width):0,o=t&&t.height!==null?Math.min(82e5,t.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${n}px, ${o}px)`;else{const s=this._hostElement.style;s.minWidth=n?`${n}px`:"100%",s.minHeight=o?`${o}px`:"100%"}}_positionChildren(t){t&&t.forEach(({top:i,left:n,width:o,height:s,xOffset:r,yOffset:l},a)=>{const c=this._children[a-this._first];c&&(c.style.position="absolute",c.style.boxSizing="border-box",c.style.transform=`translate(${n}px, ${i}px)`,o!==void 0&&(c.style.width=o+"px"),s!==void 0&&(c.style.height=s+"px"),c.style.left=r===void 0?null:r+"px",c.style.top=l===void 0?null:l+"px")})}async _adjustRange(t){const{_first:i,_last:n,_firstVisible:o,_lastVisible:s}=this;this._first=t.first,this._last=t.last,this._firstVisible=t.firstVisible,this._lastVisible=t.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==i||this._last!==n,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==o||this._lastVisible!==s}_correctScrollError(){if(this._scrollError){const{scrollTop:t,scrollLeft:i}=this._scrollerController,{top:n,left:o}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:t-n,left:i-o})}}element(t){return t===1/0&&(t=this._items.length-1),this._items?.[t]===void 0?void 0:{scrollIntoView:(i={})=>this._scrollElementIntoView({...i,index:t})}}_scrollElementIntoView(t){if(t.index>=this._first&&t.index<=this._last)this._children[t.index-this._first].scrollIntoView(t);else if(t.index=Math.min(t.index,this._items.length-1),t.behavior==="smooth"){const i=this._layout.getScrollIntoViewCoordinates(t),{behavior:n}=t;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(i,{behavior:n}),()=>this._layout.getScrollIntoViewCoordinates(t),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=t}else this._layout.pin=t}_checkScrollIntoViewTarget(t){const{index:i}=this._scrollIntoViewTarget||{};i&&t?.has(i)&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new It({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new Bt({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((t,i)=>{this._layoutCompleteResolver=t,this._layoutCompleteRejecter=i})),this._layoutCompletePromise}_rejectLayoutCompletePromise(t){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(t),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(t){if(this._layout?.measureChildren){for(const i of t)this._toBeMeasured.set(i.target,i.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}}function Dn(e){const t=window.getComputedStyle(e);return{marginTop:Ct(t.marginTop),marginRight:Ct(t.marginRight),marginBottom:Ct(t.marginBottom),marginLeft:Ct(t.marginLeft)}}function Ct(e){const t=e?parseFloat(e):NaN;return Number.isNaN(t)?0:t}function ye(e){if(e.assignedSlot!==null)return e.assignedSlot;if(e.parentElement!==null)return e.parentElement;const t=e.parentNode;return t&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host||null}function Vn(e,t=!1){const i=[];let n=t?e:ye(e);for(;n!==null;)i.push(n),n=ye(n);return i}function In(e,t=!1){let i=!1;return Vn(e,t).filter(n=>{if(i)return!1;const o=getComputedStyle(n);return i=o.position==="fixed",o.overflow!=="visible"})}const Bn=e=>e,Fn=(e,t)=>S`${t}: ${JSON.stringify(e,null,2)}`;class Nn extends Xt{constructor(t){if(super(t),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(i,n)=>Fn(i,n+this._first),this._keyFunction=(i,n)=>Bn(i,n+this._first),this._items=[],t.type!==j.CHILD)throw new Error("The virtualize directive can only be used in child expressions")}render(t){t&&this._setFunctions(t);const i=[];if(this._first>=0&&this._last>=this._first)for(let n=this._first;n<=this._last;n++)i.push(this._items[n]);return Ln(i,this._keyFunction,this._renderItem)}update(t,[i]){this._setFunctions(i);const n=this._items!==i.items;return this._items=i.items||[],this._virtualizer?this._updateVirtualizerConfig(t,i):this._initialize(t,i),n?F:this.render()}async _updateVirtualizerConfig(t,i){if(!await this._virtualizer.updateLayoutConfig(i.layout||{})){const o=t.parentNode;this._makeVirtualizer(o,i)}this._virtualizer.items=this._items}_setFunctions(t){const{renderItem:i,keyFunction:n}=t;i&&(this._renderItem=(o,s)=>i(o,s+this._first)),n&&(this._keyFunction=(o,s)=>n(o,s+this._first))}_makeVirtualizer(t,i){this._virtualizer&&this._virtualizer.disconnected();const{layout:n,scroller:o,items:s}=i;this._virtualizer=new Pn({hostElement:t,layout:n,scroller:o}),this._virtualizer.items=s,this._virtualizer.connected()}_initialize(t,i){const n=t.parentNode;n&&n.nodeType===1&&(n.addEventListener("rangeChanged",o=>{this._first=o.first,this._last=o.last,this.setValue(this.render())}),this._makeVirtualizer(n,i))}disconnected(){this._virtualizer?.disconnected()}reconnected(){this._virtualizer?.connected()}}const Hn=rt(Nn),Wn=(e=HTMLElement)=>class extends e{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent("connected"))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent("disconnected"))}},jn=(e,t)=>{if(!e||!t)return;const i=Object.keys(t);return Object.fromEntries(Object.keys(e).flatMap(n=>i.includes(n)?[]:[[n,void 0]]))};class Un extends vt{_props;render(t){return F}update(t,[i]){return this._props!==i&&Object.assign(t.element,jn(this._props,i),this._props=i),F}}const Yn=rt(Un),qn=e=>{const t=Vt(),i=P(()=>new CSSStyleSheet,[]);$(()=>{t.shadowRoot.adoptedStyleSheets=[...t.shadowRoot.adoptedStyleSheets,i]},[]),$(()=>{i.replaceSync(e)},[e])};function Ze(e){return e?t=>t?.[e]:Et}const Gn=e=>{const t=Ze(e);return i=>typeof i=="string"?i:t(i)?.toString()||""},Xn=e=>t=>{const i={};for(const n in t)e.includes(n)&&(i[n]=t[n]);return i},Kn="data:image/svg+xml,%3Csvg width='11' height='8' viewBox='0 0 11 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.5 1L5.20039 7.04766L1.66348 3.46152' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",Zn=at`
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
		background: url("${Kn}") #5881f6 no-repeat 50%;
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
`,Qn=({index:e,itemHeight:t,auto:i})=>at`
	${X(!i,()=>at`
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
`,Jn=e=>{const t=e==="auto",[i,n]=Z(t?40:e);return[i,o=>t?n(o):void 0]},to=e=>{const t=gt(e);$(()=>{const i=n=>{if(!(n.ctrlKey&&n.altKey||n.defaultPrevented))switch(n.key){case"Up":case"ArrowUp":n.preventDefault(),t.onUp();break;case"Down":case"ArrowDown":n.preventDefault(),t.onDown();break;case"Enter":n.preventDefault(),t.onEnter();break}};return document.addEventListener("keydown",i,!0),()=>document.removeEventListener("keydown",i,!0)},[t])},eo=({items:e,onSelect:t,defaultIndex:i=0})=>{const[n,o]=Z({index:i}),{index:s}=n,{length:r}=e;return $(()=>{o({index:n.index<0?i:Math.min(n.index,e.length-1),scroll:!0})},[e,i]),to({onUp:w(()=>o(l=>({index:l.index>0?l.index-1:r-1,scroll:!0})),[r]),onDown:w(()=>o(l=>({index:l.index<r-1?l.index+1:0,scroll:!0})),[r]),onEnter:w(()=>s>-1&&s<r&&t?.(e[s],s),[s,e,t])}),{position:n,highlight:w(l=>o({index:l}),[]),select:w(l=>t?.(l),[t])}},io=e=>typeof e=="object"&&e!==null&&Symbol.iterator in e;function st(e){return e==null?[]:Array.isArray(e)?e:typeof e=="string"?[e]:io(e)?Array.from(e):[e]}const Ut=(e,t=Et)=>i=>{const n=st(e).map(t);return st(i).filter(o=>!n.includes(t(o)))},no=(e,t)=>t?i=>st(e).find(n=>n[t]===i[t]):i=>st(e).includes(i),oo=(e,t)=>{if(!t||!e)return e;const i=e.toLowerCase().indexOf(t.toLowerCase());if(i<0)return e;const n=i+t.length;return[e.slice(0,i),S`<mark>${e.slice(i,n)}</mark>`,e.slice(n)]},so=(e=Et)=>(t,i,{highlight:n,select:o,textual:s=Et,query:r,isSelected:l})=>{const a=s(t),c=oo(a,r),h=e(c,t,i);return S`<div
				class="item"
				role="option"
				part="option"
				?aria-selected=${l(t)}
				data-index=${i}
				@mouseenter=${()=>n(i)}
				@click=${()=>o(t)}
				@mousedown=${u=>u.preventDefault()}
				title=${a}
			>
				${h}
			</div>
			<div class="sizer" virtualizer-sizer>${h}</div>`},ro=({itemRenderer:e=so(),...t})=>{const i=gt(t);return w((n,o)=>e(n,o,i),[i,e])},lo=["query","items","onSelect","textual","anchor","itemHeight","itemLimit","itemRenderer","defaultIndex","value","valueProperty","loading"],ao=({value:e,valueProperty:t,items:i,onSelect:n,defaultIndex:o,query:s,textual:r,itemRenderer:l,itemHeight:a=40,itemLimit:c=5})=>{const h=P(()=>no(e,t),[e,t]),u=P(()=>i.slice(),[i,h]),{position:f,highlight:d,select:p}=eo({items:u,onSelect:n,defaultIndex:isNaN(o)?void 0:Number(o)}),[m,v]=Jn(a);return{position:f,items:u,height:Math.min(c,u.length)*m,highlight:d,select:p,itemHeight:m,setItemHeight:v,renderItem:ro({itemRenderer:l,items:u,position:f,highlight:d,select:p,textual:r,query:s,isSelected:h})}},we=fi,co=e=>{const t=Te(void 0),{position:i,items:n,renderItem:o,height:s,itemHeight:r,setItemHeight:l}=ao(e);return $(()=>{const a=t.current?.[Gt];a&&a.layoutComplete.then(()=>{e.dispatchEvent(new CustomEvent("layout-complete"));const{averageChildSize:c,averageMarginSize:h}=a._layout._metricsCache;return l(c+h*2)},we)},[n]),$(()=>{if(!i.scroll)return;const a=t.current?.[Gt];if(a){if(!a?._layout){a.layoutComplete.then(()=>a.element(i.index)?.scrollIntoView({block:"nearest"}),we);return}a.element(i.index)?.scrollIntoView({block:"nearest"})}},[i]),qn(Qn({...i,itemHeight:r,auto:e.itemHeight==="auto"})),S`<div
			class="items"
			style="min-height: ${s}px"
			${_t(a=>t.current=a)}
		>
			<div virtualizer-sizer></div>
			${Hn({items:n,renderItem:o,scroller:!0})}
		</div>
		<slot></slot>`};customElements.define("cosmoz-listbox",Wn(J(co,{styleSheets:[Kt(Zn)]})));const ho=({multi:e,setFloating:t,styles:i,...n},o)=>S`<cosmoz-listbox
		style="${xi(i)}"
		@connected="${s=>s.target.showPopover?.()}"
		popover="manual"
		part="listbox"
		?multi=${e}
		${_t(t)}
		...=${Yn(Xn(lo)(n))}
		>${o}</cosmoz-listbox
	>`,uo=At`
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
`,fo=S`
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
`,po=({onClear:e,disabled:t})=>S`
	<div class="content" part="content chip-text"><slot></slot></div>
	${X(e&&!t,()=>S`<span
				class="clear"
				part="clear chip-clear"
				@mousedown=${i=>i.preventDefault()}
				@click=${e}
			>
				${fo}
			</span>`)}
`;customElements.define("cosmoz-autocomplete-chip",J(po,{observedAttributes:["disabled"],styleSheets:[Kt(uo)]}));const mo=({content:e,onClear:t,disabled:i,hidden:n,className:o="chip",slot:s})=>S`<cosmoz-autocomplete-chip
		class=${I(o)}
		slot=${I(s)}
		part="chip"
		exportparts="chip-text, chip-clear"
		?disabled=${i}
		?hidden=${n}
		.onClear=${t}
		title=${I(typeof e=="string"?e:void 0)}
		>${e}</cosmoz-autocomplete-chip
	>`,go=({value:e,min:t=0,onDeselect:i,textual:n,disabled:o,chipRenderer:s=mo})=>[...e.filter(Boolean).map(r=>s({item:r,content:n(r),onClear:e.length>t&&(()=>i(r)),disabled:o,slot:"control"})),s({item:null,content:S`<span></span>`,className:"badge",disabled:!0,slot:"control",hidden:!0})],vo=at`
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
`;customElements.define("cosmoz-autocomplete-skeleton-span",J(()=>pt,{styleSheets:[vo]}));const bo=At`
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
`,xe=e=>e.matches(":focus-within"),_o=({disabled:e,onFocus:t})=>{const[i,n]=Z(),{focused:o,closed:s}=i||{},r=o&&!e,l=gt({closed:s,onFocus:t}),a=w(h=>n(u=>({...u,closed:h})),[]),c=w(h=>{const u=h.currentTarget;return xe(u)?n(f=>({focused:!0,closed:!f?.closed})):u.focus()},[]);return $(()=>{if(!r)return;const h=u=>{if(u.defaultPrevented)return;const{closed:f}=l;u.key==="Escape"&&!f?(u.preventDefault(),a(!0)):["ArrowUp","Up"].includes(u.key)&&f&&(u.preventDefault(),a(!1))};return document.addEventListener("keydown",h,!0),()=>document.removeEventListener("keydown",h,!0)},[r]),{focused:r,active:r&&!s,setClosed:a,onToggle:c,onFocus:w(h=>{const u=xe(h.currentTarget);n({focused:u}),l.onFocus?.(u)},[l])}},te=(e,t=()=>({}))=>{const i={type:e,toString(){return e}};return Object.assign((...o)=>Object.assign(t(...o),i),i)},Ce=e=>e.type||e.toString(),Ee=e=>Array.isArray(e)?e:[e],yo=(e,t)=>{const i=Ee(t),n=(i.every(Array.isArray)?i:[i]).map(([o,s])=>({actions:Ee(o).map(Ce),handle:s}));return(o=e,s)=>{const r=n.find(l=>l.actions.includes(Ce(s)));return r?r.handle(o,s):o}},it={pending:"pending",rejected:"rejected",resolved:"resolved"},Qe={error:void 0,result:void 0,state:it.pending},Je=te(it.pending),ti=te(it.resolved,e=>({result:e})),ei=te(it.rejected,e=>({error:e})),wo=yo(Qe,[[Je,()=>({error:void 0,result:void 0,state:it.pending})],[ti,(e,{result:t})=>({error:void 0,result:t,state:it.resolved})],[ei,(e,{error:t})=>({error:t,result:void 0,state:it.rejected})]]),xo=e=>{const[{error:t,result:i,state:n},o]=pi(wo,Qe);return $(()=>{if(!e)return;let s=!1;return o(Je()),e.then(r=>!s&&o(ti(r)),r=>!s&&o(ei(r))),()=>{s=!0}},[e]),[i,t,n]},Co=({focused:e,empty:t,...i})=>{const n=e&&t&&i.limit!==1,o=gt(i);$(()=>{if(!n)return;const s=r=>{if(r.defaultPrevented)return;const{key:l}=r,a=st(o.value),c=o.limit==1;if(a.length>0&&(l==="Backspace"||c&&l.length===1))return o.onChange(a.slice(0,-1))};return document.addEventListener("keydown",s,!0),()=>document.removeEventListener("keydown",s,!0)},[n,o])},Se=e=>e.normalize("NFD").replace(/[\u0300-\u036f]/gu,""),Eo=(e,t,i)=>{if(!t)return e;const n=Se(t.toLowerCase()),o=[];for(const s of e){const l=Se(i(s).toLowerCase()).indexOf(n);l<0||o.push({item:s,index:l})}return o.sort((s,r)=>s.index-r.index).map(({item:s})=>s)},So=e=>e===!1||e==null?[]:e,ii=(e,t,i)=>e.dispatchEvent(new CustomEvent(t,{detail:i})),zo=(e,t,i)=>w(n=>{t?.(n),ii(e,i,n)},[t]),$o=[],ko=e=>(...t)=>{let i;const n=()=>{i&&cancelAnimationFrame(i)};return n(),i=requestAnimationFrame(()=>{i=void 0,e(...t)}),n},Ao=({value:e,text:t,onChange:i,onText:n,onSelect:o,limit:s,min:r,source:l,textProperty:a,textual:c,valueProperty:h,keepOpened:u,keepQuery:f,preserveOrder:d,defaultIndex:p,externalSearch:m,...v})=>{const g=P(()=>(c??Gn)(a),[c,a]),{active:b,focused:_,onFocus:y,setClosed:x}=_o(v),E=!t,z=P(()=>t?.trim(),[t]),R=Vt(),k=zo(R,n,"text"),A=w(C=>{i?.(C,()=>x(!0)),ii(R,"value",C)},[i]),[B,G]=Z([]),V=P(()=>Promise.resolve(typeof l=="function"?l({query:z,active:b}):l).then(So),[l,b,z]),T=P(()=>st(e),[e]);$(()=>V.then(G),[V]),Co({focused:_,empty:E,limit:s,value:T,onChange:A,onText:k}),$(()=>{!_&&!f&&k("")},[_,f]);const L=gt({onText:k,onChange:A,value:T,limit:s,min:r,keepQuery:f,keepOpened:u,setClosed:x,onSelect:o}),[,,tt]=xo(V);return{active:b,query:z,textual:g,value:T,source$:V,loading:tt==="pending",items:P(()=>{if(!b)return $o;const C=d?B:[...T,...Ut(T,Ze(h))(B)];return m?C:Eo(C,z,g)},[B,b,z,g,E,T,d,h,m]),onClick:w(()=>x(!1),[]),onFocus:y,onText:w(C=>{k(C.target.value),x(!1)},[k,t,x]),onSelect:w(C=>{L.onSelect?.(C,L);const{onChange:O,onText:W,limit:Nt,min:ri,value:li,keepQuery:ai,keepOpened:ci,setClosed:hi}=L;ai||W(""),ci||hi(!0);const yt=st(li),ee=yt.includes(C);ee&&yt.length===ri||O((ee?Ut(C)(yt):[...yt,C]).slice(-Nt))},[L]),onDeselect:w(C=>L.onChange(Ut(C)(L.value)),[L]),defaultIndex:z!==void 0&&z?.length>0?0:p}},Ro=e=>{const t=e.shadowRoot.querySelectorAll(".chip"),i=e.shadowRoot.querySelector(".badge");i.hidden=!0;for(const l of t)l.hidden=!1;const o=e.shadowRoot.querySelector("cosmoz-input").shadowRoot?.querySelector(".control")?.getBoundingClientRect();let s;for(s=0;s<t.length;s++){const a=t[s].getBoundingClientRect();if(!(a.x+a.width<=o.x+o.width-24))break}const r=t.length-s;for(i.querySelector("span").textContent="+"+r.toString(),i.hidden=r<1;s<t.length;s++)t[s].hidden=!0},To=({value:e,active:t,wrap:i,limit:n})=>{const o=Vt(),s=!(i||n==1),r=P(()=>ko(()=>Ro(o)),[]),[l,a]=Z(0);ie(()=>{if(!s)return;const c=o.shadowRoot.querySelector("cosmoz-input"),h=new ResizeObserver(u=>{a(u[0].contentRect.width)});return h.observe(c),()=>h.disconnect()},[s]),ie(()=>s?r():void 0,[s,l,t,e])},Lo=["input","control","label","line","error","wrap"].map(e=>`${e}: input-${e}`).join(),Oo=[pn({apply({rects:e,elements:t}){Object.assign(t.floating.style,{minWidth:`${Math.max(e.reference.width,e.floating.width)}px`})}}),...Ue],Mo=({active:e,isSingle:t,showSingle:i})=>e?!(t&&!i):!1,Po=e=>{const{active:t,invalid:i,errorMessage:n,label:o,placeholder:s,disabled:r,noLabelFloat:l,alwaysFloatLabel:a,textual:c,text:h,onText:u,onFocus:f,onClick:d,onDeselect:p,value:m,limit:v,min:g,showSingle:b,items:_,source$:y,placement:x,loading:E,chipRenderer:z}=e,R=Vt(),k=v==1,A=k&&m?.[0]!=null,{styles:B,setReference:G,setFloating:V}=gn({placement:x,middleware:Oo});$(()=>(R.addEventListener("focusin",f),R.addEventListener("focusout",f),()=>{R.removeEventListener("focusin",f),R.removeEventListener("focusout",f)}),[f]),Ye({focus:()=>R.shadowRoot?.querySelector("#input")?.focus()},[]);const T=E||_.length>0||h!=null&&h.length>0;return S`<cosmoz-input
				id="input"
				part="input"
				${_t(G)}
				.label=${o}
				.placeholder=${A?void 0:s}
				?no-label-float=${l}
				?always-float-label=${m?.length>0||a}
				?readonly=${A}
				?disabled=${r}
				?invalid=${ge(y.then(()=>i,()=>!0),i)}
				.errorMessage=${ge(y.then(()=>n,L=>L.message),n)}
				.value=${Dt(h)}
				@value-changed=${u}
				@click=${d}
				autocomplete="off"
				exportparts=${Lo}
				?data-one=${k}
				?data-single=${A}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix"></slot>
				${go({value:m,min:g,onDeselect:p,textual:c,disabled:r,chipRenderer:z})}
			</cosmoz-input>

			${X(Mo({active:t,isSingle:A,showSingle:b}),()=>ho({...e,items:_,multi:!k,setFloating:V,styles:{...B,display:T?void 0:"none"}},X(E,()=>S`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>X(h!=null&&h.length>0&&_.length===0,()=>S`<slot name="no-result">
											<p class="no-result">${mi("No results found")}</p>
										</slot>`))))}`},ni=e=>{const t={...e,...Ao(e)};return To(t),Po(t)},oi=["disabled","invalid","no-label-float","always-float-label","text-property","value-property","limit","min","show-single","preserve-order","keep-opened","keep-query","default-index","external-search","item-height","item-limit","wrap"],Do=e=>{const{onChange:t,onText:i,...n}=e,[o,s]=gi("value");return $(()=>{e.onChange!=null&&console.warn("onChange is deprecated; use value-changed and lift instead")},[]),ni({...n,value:o,onChange:w((r,...l)=>{s(r),t?.(r,...l)},[t]),onText:w(r=>{e.text=r,i?.(r)},[i])})},si=[Kt(bo)];customElements.define("cosmoz-autocomplete-ui",J(ni,{observedAttributes:oi,styleSheets:si}));customElements.define("cosmoz-autocomplete",J(Do,{observedAttributes:oi,styleSheets:si}));const No=["Red","Green","Purple","Blue","White","Brown","Aqua","Nothing"].map(e=>({text:e}));export{ni as A,oi as a,I as b,No as c,X as n,xi as o,bo as s};
