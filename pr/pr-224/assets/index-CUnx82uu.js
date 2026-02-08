import{e as ie,b as _e,t as et,d as Me,u as R,n as U,a as tt,s as se,f as St,c as Ot,g as Be,h as re,j as Tt,k as At,l as Ne,m as Lt,w as Ct,p as We,q as Ie}from"./index-FoZG5IOF.js";import{c as nt,d as M,a as q,r as He,E as ot,A as Pt,p as Ye,h as je,H as Ve,b as O,n as qe,e as Xe,f as Nt,t as Ue,u as Ke}from"./iframe-CGsgARI7.js";const mt=(t,...e)=>t.flatMap((o,n)=>[o,e[n]??""]).join(""),st=Math.min,P=Math.max,ft=Math.round,dt=Math.floor,H=t=>({x:t,y:t}),Ze={left:"right",right:"left",bottom:"top",top:"bottom"},Ge={start:"end",end:"start"};function Wt(t,e,o){return P(t,st(e,o))}function gt(t,e){return typeof t=="function"?t(e):t}function Q(t){return t.split("-")[0]}function vt(t){return t.split("-")[1]}function le(t){return t==="x"?"y":"x"}function ae(t){return t==="y"?"height":"width"}const Qe=new Set(["top","bottom"]);function X(t){return Qe.has(Q(t))?"y":"x"}function ce(t){return le(X(t))}function Je(t,e,o){o===void 0&&(o=!1);const n=vt(t),i=ce(t),s=ae(i);let r=i==="x"?n===(o?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(r=pt(r)),[r,pt(r)]}function to(t){const e=pt(t);return[kt(t),e,kt(e)]}function kt(t){return t.replace(/start|end/g,e=>Ge[e])}const It=["left","right"],Ht=["right","left"],eo=["top","bottom"],oo=["bottom","top"];function no(t,e,o){switch(t){case"top":case"bottom":return o?e?Ht:It:e?It:Ht;case"left":case"right":return e?eo:oo;default:return[]}}function io(t,e,o,n){const i=vt(t);let s=no(Q(t),o==="start",n);return i&&(s=s.map(r=>r+"-"+i),e&&(s=s.concat(s.map(kt)))),s}function pt(t){return t.replace(/left|right|bottom|top/g,e=>Ze[e])}function so(t){return{top:0,right:0,bottom:0,left:0,...t}}function ro(t){return typeof t!="number"?so(t):{top:t,right:t,bottom:t,left:t}}function ht(t){const{x:e,y:o,width:n,height:i}=t;return{width:n,height:i,top:o,left:e,right:e+n,bottom:o+i,x:e,y:o}}function Yt(t,e,o){let{reference:n,floating:i}=t;const s=X(e),r=ce(e),l=ae(r),u=Q(e),c=s==="y",a=n.x+n.width/2-i.width/2,d=n.y+n.height/2-i.height/2,f=n[l]/2-i[l]/2;let p;switch(u){case"top":p={x:a,y:n.y-i.height};break;case"bottom":p={x:a,y:n.y+n.height};break;case"right":p={x:n.x+n.width,y:d};break;case"left":p={x:n.x-i.width,y:d};break;default:p={x:n.x,y:n.y}}switch(vt(e)){case"start":p[r]-=f*(o&&c?-1:1);break;case"end":p[r]+=f*(o&&c?-1:1);break}return p}async function lo(t,e){var o;e===void 0&&(e={});const{x:n,y:i,platform:s,rects:r,elements:l,strategy:u}=t,{boundary:c="clippingAncestors",rootBoundary:a="viewport",elementContext:d="floating",altBoundary:f=!1,padding:p=0}=gt(e,t),g=ro(p),v=l[f?d==="floating"?"reference":"floating":d],m=ht(await s.getClippingRect({element:(o=await(s.isElement==null?void 0:s.isElement(v)))==null||o?v:v.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(l.floating)),boundary:c,rootBoundary:a,strategy:u})),b=d==="floating"?{x:n,y:i,width:r.floating.width,height:r.floating.height}:r.reference,w=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l.floating)),x=await(s.isElement==null?void 0:s.isElement(w))?await(s.getScale==null?void 0:s.getScale(w))||{x:1,y:1}:{x:1,y:1},y=ht(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:b,offsetParent:w,strategy:u}):b);return{top:(m.top-y.top+g.top)/x.y,bottom:(y.bottom-m.bottom+g.bottom)/x.y,left:(m.left-y.left+g.left)/x.x,right:(y.right-m.right+g.right)/x.x}}const ao=async(t,e,o)=>{const{placement:n="bottom",strategy:i="absolute",middleware:s=[],platform:r}=o,l=s.filter(Boolean),u=await(r.isRTL==null?void 0:r.isRTL(e));let c=await r.getElementRects({reference:t,floating:e,strategy:i}),{x:a,y:d}=Yt(c,n,u),f=n,p={},g=0;for(let v=0;v<l.length;v++){var h;const{name:m,fn:b}=l[v],{x:w,y:x,data:y,reset:z}=await b({x:a,y:d,initialPlacement:n,placement:f,strategy:i,middlewareData:p,rects:c,platform:{...r,detectOverflow:(h=r.detectOverflow)!=null?h:lo},elements:{reference:t,floating:e}});a=w??a,d=x??d,p={...p,[m]:{...p[m],...y}},z&&g<=50&&(g++,typeof z=="object"&&(z.placement&&(f=z.placement),z.rects&&(c=z.rects===!0?await r.getElementRects({reference:t,floating:e,strategy:i}):z.rects),{x:a,y:d}=Yt(c,f,u)),v=-1)}return{x:a,y:d,placement:f,strategy:i,middlewareData:p}},co=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,n;const{placement:i,middlewareData:s,rects:r,initialPlacement:l,platform:u,elements:c}=e,{mainAxis:a=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:h=!0,...v}=gt(t,e);if((o=s.arrow)!=null&&o.alignmentOffset)return{};const m=Q(i),b=X(l),w=Q(l)===l,x=await(u.isRTL==null?void 0:u.isRTL(c.floating)),y=f||(w||!h?[pt(l)]:to(l)),z=g!=="none";!f&&z&&y.push(...io(l,h,g,x));const C=[l,...y],E=await u.detectOverflow(e,v),A=[];let k=((n=s.flip)==null?void 0:n.overflows)||[];if(a&&A.push(E[m]),d){const S=Je(i,r,x);A.push(E[S[0]],E[S[1]])}if(k=[...k,{placement:i,overflows:A}],!A.every(S=>S<=0)){var B,V;const S=(((B=s.flip)==null?void 0:B.index)||0)+1,T=C[S];if(T&&(!(d==="alignment"?b!==X(T):!1)||k.every(L=>X(L.placement)===b?L.overflows[0]>0:!0)))return{data:{index:S,overflows:k},reset:{placement:T}};let Z=(V=k.filter($=>$.overflows[0]<=0).sort(($,L)=>$.overflows[1]-L.overflows[1])[0])==null?void 0:V.placement;if(!Z)switch(p){case"bestFit":{var D;const $=(D=k.filter(L=>{if(z){const I=X(L.placement);return I===b||I==="y"}return!0}).map(L=>[L.placement,L.overflows.filter(I=>I>0).reduce((I,zt)=>I+zt,0)]).sort((L,I)=>L[1]-I[1])[0])==null?void 0:D[0];$&&(Z=$);break}case"initialPlacement":Z=l;break}if(i!==Z)return{reset:{placement:Z}}}return{}}}},uo=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:n,placement:i,platform:s}=e,{mainAxis:r=!0,crossAxis:l=!1,limiter:u={fn:m=>{let{x:b,y:w}=m;return{x:b,y:w}}},...c}=gt(t,e),a={x:o,y:n},d=await s.detectOverflow(e,c),f=X(Q(i)),p=le(f);let g=a[p],h=a[f];if(r){const m=p==="y"?"top":"left",b=p==="y"?"bottom":"right",w=g+d[m],x=g-d[b];g=Wt(w,g,x)}if(l){const m=f==="y"?"top":"left",b=f==="y"?"bottom":"right",w=h+d[m],x=h-d[b];h=Wt(w,h,x)}const v=u.fn({...e,[p]:g,[f]:h});return{...v,data:{x:v.x-o,y:v.y-n,enabled:{[p]:r,[f]:l}}}}}},fo=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var o,n;const{placement:i,rects:s,platform:r,elements:l}=e,{apply:u=()=>{},...c}=gt(t,e),a=await r.detectOverflow(e,c),d=Q(i),f=vt(i),p=X(i)==="y",{width:g,height:h}=s.floating;let v,m;d==="top"||d==="bottom"?(v=d,m=f===(await(r.isRTL==null?void 0:r.isRTL(l.floating))?"start":"end")?"left":"right"):(m=d,v=f==="end"?"top":"bottom");const b=h-a.top-a.bottom,w=g-a.left-a.right,x=st(h-a[v],b),y=st(g-a[m],w),z=!e.middlewareData.shift;let C=x,E=y;if((o=e.middlewareData.shift)!=null&&o.enabled.x&&(E=w),(n=e.middlewareData.shift)!=null&&n.enabled.y&&(C=b),z&&!f){const k=P(a.left,0),B=P(a.right,0),V=P(a.top,0),D=P(a.bottom,0);p?E=g-2*(k!==0||B!==0?k+B:P(a.left,a.right)):C=h-2*(V!==0||D!==0?V+D:P(a.top,a.bottom))}await u({...e,availableWidth:E,availableHeight:C});const A=await r.getDimensions(l.floating);return g!==A.width||h!==A.height?{reset:{rects:!0}}:{}}}};function bt(){return typeof window<"u"}function lt(t){return ue(t)?(t.nodeName||"").toLowerCase():"#document"}function F(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function j(t){var e;return(e=(ue(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function ue(t){return bt()?t instanceof Node||t instanceof F(t).Node:!1}function N(t){return bt()?t instanceof Element||t instanceof F(t).Element:!1}function Y(t){return bt()?t instanceof HTMLElement||t instanceof F(t).HTMLElement:!1}function jt(t){return!bt()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof F(t).ShadowRoot}const po=new Set(["inline","contents"]);function ct(t){const{overflow:e,overflowX:o,overflowY:n,display:i}=W(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+o)&&!po.has(i)}const ho=new Set(["table","td","th"]);function mo(t){return ho.has(lt(t))}const go=[":popover-open",":modal"];function wt(t){return go.some(e=>{try{return t.matches(e)}catch{return!1}})}const vo=["transform","translate","scale","rotate","perspective"],bo=["transform","translate","scale","rotate","perspective","filter"],wo=["paint","layout","strict","content"];function Ft(t){const e=Dt(),o=N(t)?W(t):t;return vo.some(n=>o[n]?o[n]!=="none":!1)||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||bo.some(n=>(o.willChange||"").includes(n))||wo.some(n=>(o.contain||"").includes(n))}function xo(t){let e=K(t);for(;Y(e)&&!rt(e);){if(Ft(e))return e;if(wt(e))return null;e=K(e)}return null}function Dt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const yo=new Set(["html","body","#document"]);function rt(t){return yo.has(lt(t))}function W(t){return F(t).getComputedStyle(t)}function xt(t){return N(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function K(t){if(lt(t)==="html")return t;const e=t.assignedSlot||t.parentNode||jt(t)&&t.host||j(t);return jt(e)?e.host:e}function de(t){const e=K(t);return rt(e)?t.ownerDocument?t.ownerDocument.body:t.body:Y(e)&&ct(e)?e:de(e)}function at(t,e,o){var n;e===void 0&&(e=[]),o===void 0&&(o=!0);const i=de(t),s=i===((n=t.ownerDocument)==null?void 0:n.body),r=F(i);if(s){const l=Et(r);return e.concat(r,r.visualViewport||[],ct(i)?i:[],l&&o?at(l):[])}return e.concat(i,at(i,[],o))}function Et(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function fe(t){const e=W(t);let o=parseFloat(e.width)||0,n=parseFloat(e.height)||0;const i=Y(t),s=i?t.offsetWidth:o,r=i?t.offsetHeight:n,l=ft(o)!==s||ft(n)!==r;return l&&(o=s,n=r),{width:o,height:n,$:l}}function _t(t){return N(t)?t:t.contextElement}function it(t){const e=_t(t);if(!Y(e))return H(1);const o=e.getBoundingClientRect(),{width:n,height:i,$:s}=fe(e);let r=(s?ft(o.width):o.width)/n,l=(s?ft(o.height):o.height)/i;return(!r||!Number.isFinite(r))&&(r=1),(!l||!Number.isFinite(l))&&(l=1),{x:r,y:l}}const $o=H(0);function pe(t){const e=F(t);return!Dt()||!e.visualViewport?$o:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function zo(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==F(t)?!1:e}function J(t,e,o,n){e===void 0&&(e=!1),o===void 0&&(o=!1);const i=t.getBoundingClientRect(),s=_t(t);let r=H(1);e&&(n?N(n)&&(r=it(n)):r=it(t));const l=zo(s,o,n)?pe(s):H(0);let u=(i.left+l.x)/r.x,c=(i.top+l.y)/r.y,a=i.width/r.x,d=i.height/r.y;if(s){const f=F(s),p=n&&N(n)?F(n):n;let g=f,h=Et(g);for(;h&&n&&p!==g;){const v=it(h),m=h.getBoundingClientRect(),b=W(h),w=m.left+(h.clientLeft+parseFloat(b.paddingLeft))*v.x,x=m.top+(h.clientTop+parseFloat(b.paddingTop))*v.y;u*=v.x,c*=v.y,a*=v.x,d*=v.y,u+=w,c+=x,g=F(h),h=Et(g)}}return ht({width:a,height:d,x:u,y:c})}function yt(t,e){const o=xt(t).scrollLeft;return e?e.left+o:J(j(t)).left+o}function he(t,e){const o=t.getBoundingClientRect(),n=o.left+e.scrollLeft-yt(t,o),i=o.top+e.scrollTop;return{x:n,y:i}}function Co(t){let{elements:e,rect:o,offsetParent:n,strategy:i}=t;const s=i==="fixed",r=j(n),l=e?wt(e.floating):!1;if(n===r||l&&s)return o;let u={scrollLeft:0,scrollTop:0},c=H(1);const a=H(0),d=Y(n);if((d||!d&&!s)&&((lt(n)!=="body"||ct(r))&&(u=xt(n)),Y(n))){const p=J(n);c=it(n),a.x=p.x+n.clientLeft,a.y=p.y+n.clientTop}const f=r&&!d&&!s?he(r,u):H(0);return{width:o.width*c.x,height:o.height*c.y,x:o.x*c.x-u.scrollLeft*c.x+a.x+f.x,y:o.y*c.y-u.scrollTop*c.y+a.y+f.y}}function Ro(t){return Array.from(t.getClientRects())}function Ao(t){const e=j(t),o=xt(t),n=t.ownerDocument.body,i=P(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),s=P(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let r=-o.scrollLeft+yt(t);const l=-o.scrollTop;return W(n).direction==="rtl"&&(r+=P(e.clientWidth,n.clientWidth)-i),{width:i,height:s,x:r,y:l}}const Vt=25;function ko(t,e){const o=F(t),n=j(t),i=o.visualViewport;let s=n.clientWidth,r=n.clientHeight,l=0,u=0;if(i){s=i.width,r=i.height;const a=Dt();(!a||a&&e==="fixed")&&(l=i.offsetLeft,u=i.offsetTop)}const c=yt(n);if(c<=0){const a=n.ownerDocument,d=a.body,f=getComputedStyle(d),p=a.compatMode==="CSS1Compat"&&parseFloat(f.marginLeft)+parseFloat(f.marginRight)||0,g=Math.abs(n.clientWidth-d.clientWidth-p);g<=Vt&&(s-=g)}else c<=Vt&&(s+=c);return{width:s,height:r,x:l,y:u}}const Eo=new Set(["absolute","fixed"]);function So(t,e){const o=J(t,!0,e==="fixed"),n=o.top+t.clientTop,i=o.left+t.clientLeft,s=Y(t)?it(t):H(1),r=t.clientWidth*s.x,l=t.clientHeight*s.y,u=i*s.x,c=n*s.y;return{width:r,height:l,x:u,y:c}}function qt(t,e,o){let n;if(e==="viewport")n=ko(t,o);else if(e==="document")n=Ao(j(t));else if(N(e))n=So(e,o);else{const i=pe(t);n={x:e.x-i.x,y:e.y-i.y,width:e.width,height:e.height}}return ht(n)}function me(t,e){const o=K(t);return o===e||!N(o)||rt(o)?!1:W(o).position==="fixed"||me(o,e)}function Oo(t,e){const o=e.get(t);if(o)return o;let n=at(t,[],!1).filter(l=>N(l)&&lt(l)!=="body"),i=null;const s=W(t).position==="fixed";let r=s?K(t):t;for(;N(r)&&!rt(r);){const l=W(r),u=Ft(r);!u&&l.position==="fixed"&&(i=null),(s?!u&&!i:!u&&l.position==="static"&&!!i&&Eo.has(i.position)||ct(r)&&!u&&me(t,r))?n=n.filter(a=>a!==r):i=l,r=K(r)}return e.set(t,n),n}function To(t){let{element:e,boundary:o,rootBoundary:n,strategy:i}=t;const r=[...o==="clippingAncestors"?wt(e)?[]:Oo(e,this._c):[].concat(o),n],l=r[0],u=r.reduce((c,a)=>{const d=qt(e,a,i);return c.top=P(d.top,c.top),c.right=st(d.right,c.right),c.bottom=st(d.bottom,c.bottom),c.left=P(d.left,c.left),c},qt(e,l,i));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function Lo(t){const{width:e,height:o}=fe(t);return{width:e,height:o}}function Po(t,e,o){const n=Y(e),i=j(e),s=o==="fixed",r=J(t,!0,s,e);let l={scrollLeft:0,scrollTop:0};const u=H(0);function c(){u.x=yt(i)}if(n||!n&&!s)if((lt(e)!=="body"||ct(i))&&(l=xt(e)),n){const p=J(e,!0,s,e);u.x=p.x+e.clientLeft,u.y=p.y+e.clientTop}else i&&c();s&&!n&&i&&c();const a=i&&!n&&!s?he(i,l):H(0),d=r.left+l.scrollLeft-u.x-a.x,f=r.top+l.scrollTop-u.y-a.y;return{x:d,y:f,width:r.width,height:r.height}}function Rt(t){return W(t).position==="static"}function Xt(t,e){if(!Y(t)||W(t).position==="fixed")return null;if(e)return e(t);let o=t.offsetParent;return j(t)===o&&(o=o.ownerDocument.body),o}function ge(t,e){const o=F(t);if(wt(t))return o;if(!Y(t)){let i=K(t);for(;i&&!rt(i);){if(N(i)&&!Rt(i))return i;i=K(i)}return o}let n=Xt(t,e);for(;n&&mo(n)&&Rt(n);)n=Xt(n,e);return n&&rt(n)&&Rt(n)&&!Ft(n)?o:n||xo(t)||o}const Fo=async function(t){const e=this.getOffsetParent||ge,o=this.getDimensions,n=await o(t.floating);return{reference:Po(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function Do(t){return W(t).direction==="rtl"}const _o={convertOffsetParentRelativeRectToViewportRelativeRect:Co,getDocumentElement:j,getClippingRect:To,getOffsetParent:ge,getElementRects:Fo,getClientRects:Ro,getDimensions:Lo,getScale:it,isElement:N,isRTL:Do};function ve(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function Mo(t,e){let o=null,n;const i=j(t);function s(){var l;clearTimeout(n),(l=o)==null||l.disconnect(),o=null}function r(l,u){l===void 0&&(l=!1),u===void 0&&(u=1),s();const c=t.getBoundingClientRect(),{left:a,top:d,width:f,height:p}=c;if(l||e(),!f||!p)return;const g=dt(d),h=dt(i.clientWidth-(a+f)),v=dt(i.clientHeight-(d+p)),m=dt(a),w={rootMargin:-g+"px "+-h+"px "+-v+"px "+-m+"px",threshold:P(0,st(1,u))||1};let x=!0;function y(z){const C=z[0].intersectionRatio;if(C!==u){if(!x)return r();C?r(!1,C):n=setTimeout(()=>{r(!1,1e-7)},1e3)}C===1&&!ve(c,t.getBoundingClientRect())&&r(),x=!1}try{o=new IntersectionObserver(y,{...w,root:i.ownerDocument})}catch{o=new IntersectionObserver(y,w)}o.observe(t)}return r(!0),s}function Bo(t,e,o,n){n===void 0&&(n={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:u=!1}=n,c=_t(t),a=i||s?[...c?at(c):[],...at(e)]:[];a.forEach(m=>{i&&m.addEventListener("scroll",o,{passive:!0}),s&&m.addEventListener("resize",o)});const d=c&&l?Mo(c,o):null;let f=-1,p=null;r&&(p=new ResizeObserver(m=>{let[b]=m;b&&b.target===c&&p&&(p.unobserve(e),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var w;(w=p)==null||w.observe(e)})),o()}),c&&!u&&p.observe(c),p.observe(e));let g,h=u?J(t):null;u&&v();function v(){const m=J(t);h&&!ve(h,m)&&o(),h=m,g=requestAnimationFrame(v)}return o(),()=>{var m;a.forEach(b=>{i&&b.removeEventListener("scroll",o),s&&b.removeEventListener("resize",o)}),d?.(),(m=p)==null||m.disconnect(),p=null,u&&cancelAnimationFrame(g)}}const No=uo,Wo=co,Io=fo,Ho=(t,e,o)=>{const n=new Map,i={platform:_o,...o},s={...i.platform,_c:n};return ao(t,e,{...i,platform:s})},be=[Wo({fallbackAxisSideDirection:"start",crossAxis:!1}),No()],Yo=({placement:t="bottom-start",strategy:e,middleware:o=be}={})=>{const[n,i]=nt(),[s,r]=nt(),[l,u]=nt();return M(()=>{if(!n||!(s instanceof HTMLElement)){u(void 0);return}return Bo(n,s,()=>Ho(n,s,{placement:t,strategy:e,middleware:o}).then(u))},[n,s,t,e,o]),{setReference:i,setFloating:r,styles:q(()=>l?{left:`${l.x}px`,top:`${l.y}px`}:{},[l?.x,l?.y])}};const $t=ie(class extends _e{constructor(t){if(super(t),t.type!==et.PROPERTY&&t.type!==et.ATTRIBUTE&&t.type!==et.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!He(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===ot||e===Pt)return e;const o=t.element,n=t.name;if(t.type===et.PROPERTY){if(e===o[n])return ot}else if(t.type===et.BOOLEAN_ATTRIBUTE){if(!!e===o.hasAttribute(n))return ot}else if(t.type===et.ATTRIBUTE&&o.getAttribute(n)===e+"")return ot;return Ye(t),e}});const _=t=>t??Pt,we=je(class extends Ve{values;constructor(t,e,o,n){super(t,e),Object.assign(e.host,o),this.values=n}update(t,e){this.hasChanged(e)&&(this.values=e,Object.assign(this.state.host,t))}hasChanged(t=[]){return t.some((e,o)=>this.values[o]!==e)}}),jo=/([A-Z])/gu,Ut=(t,e,o)=>{t[e]=o,t.dispatchEvent(new CustomEvent(e.replace(jo,"-$1").toLowerCase()+"-changed",{detail:{value:o}}))},xe=t=>{const e=Me(void 0),o=R(c=>e.current=c,[]),n=t.shadowRoot,i=R(c=>t.dispatchEvent(new Event(c.type,{bubbles:c.bubbles})),[]),s=R(c=>Ut(t,"value",c.target.value),[]),r=R(c=>Ut(t,"focused",c.type==="focus"),[]),l=R(()=>e.current?.focus(),[]),u=R(()=>{const c=e.current?.checkValidity();return t.toggleAttribute("invalid",!c),c},[]);return we({focus:l,validate:u},[l,u]),M(()=>{const c=a=>{a.defaultPrevented||t.disabled||a.target.matches("input, textarea, label")||(a.preventDefault(),t.matches(":focus-within")||l())};return n.addEventListener("mousedown",c),()=>n.removeEventListener("mousedown",c)},[l]),{onChange:i,onFocus:r,onInput:s,onRef:o}},Vo=t=>q(()=>{if(t==null)return;const e=new RegExp(t,"u");return o=>{!o.defaultPrevented&&o.data&&!e.test(o.data)&&o.preventDefault()}},[t]),ye=(t,{label:e,invalid:o,errorMessage:n})=>O`
		<div class="float" part="float">&nbsp;</div>
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${t}
				${U(e,()=>O`<label for="input" part="label">${e}</label>`)}
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line" part="line"></div>
		${U(o&&n,()=>O`<div class="error" part="error">${n}</div>`)}
	`,$e=["autocomplete","readonly","disabled","maxlength","invalid","no-label-float","always-float-label"],qo=({placeholder:t,noLabelFloat:e,label:o})=>(e?o:void 0)||t||" ",Kt=mt`
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
`,ze=mt`
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
		${Kt}
	}
	@container style(--focused: focused) {
		${Kt}
	}
`,Xo=["type","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...$e],Uo=t=>{const{type:e="text",pattern:o,allowedPattern:n,autocomplete:i,value:s,readonly:r,disabled:l,min:u,max:c,step:a,maxlength:d}=t,{onChange:f,onFocus:p,onInput:g,onRef:h}=xe(t),v=Vo(n);return ye(O`
			<input
				${St(h)}
				style="--chars: ${s?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${e}
				pattern=${_(o)}
				autocomplete=${_(i)}
				placeholder=${qo(t)}
				?readonly=${r}
				?aria-disabled=${l}
				?disabled=${l}
				.value=${$t(s??"")}
				maxlength=${_(d)}
				@beforeinput=${v}
				@input=${g}
				@change=${f}
				@focus=${p}
				@blur=${p}
				min=${_(u)}
				max=${_(c)}
				step=${_(a)}
			/>
		`,t)};customElements.define("cosmoz-input",tt(Uo,{observedAttributes:Xo,styleSheets:[se(ze)]}));const Zt=t=>{t.style.height="",t.style.height=`${t.scrollHeight}px`},Ko=(t,e=0)=>{if(e>0){const o=t.getAttribute("rows")??"",n=t.style.height;t.style.height="",t.setAttribute("rows",e),t.style.maxHeight=t.getBoundingClientRect().height+"px",t.style.height=n,t.setAttribute("rows",o)}},Zo=t=>{const{value:e,maxRows:o}=t,n=q(()=>()=>t.shadowRoot.querySelector("#input"),[]);M(()=>Ko(n(),o),[o,n]),M(()=>Zt(n()),[n,e]),M(()=>{const i=n(),s=new ResizeObserver(()=>requestAnimationFrame(()=>Zt(i)));return s.observe(i),()=>s.unobserve(i)},[n])},Go=["rows","placeholder",...$e],Qo=t=>{const{autocomplete:e,value:o,placeholder:n,readonly:i,disabled:s,rows:r,cols:l,maxlength:u}=t,{onChange:c,onFocus:a,onInput:d,onRef:f}=xe(t);return Zo(t),ye(O`
			<textarea id="input" part="input"
				${St(f)}
				autocomplete=${_(e)}
				placeholder=${n||" "}
				rows=${r??1} cols=${_(l)}
				?readonly=${i} ?aria-disabled=${s} ?disabled=${s}
				.value=${$t(o??"")} maxlength=${_(u)} @input=${d}
				@change=${c} @focus=${a} @blur=${a}>`,t)};customElements.define("cosmoz-textarea",tt(Qo,{observedAttributes:Go,styleSheets:[se(ze)]}));const Jo=t=>{const{label:e,value:o,disabled:n,error:i}=t,s=R(r=>t.dispatchEvent(new CustomEvent("change",{detail:r.target.checked})),[]);return O`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${$t(!!o)}
			?disabled=${n}
			@change=${s}
		/>
		${U(e,()=>O`<label for="toggle">${e}</label>`)}
		<slot name="suffix"></slot>
		${U(i,r=>O`<div class="failure">${r}</div>`)} `},tn=Ot`
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
`,en=Ot`
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
`;customElements.define("cosmoz-toggle",tt(Jo,{styleSheets:[en,tn],observedAttributes:["disabled"]}));class on{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}class nn{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}}const Gt=t=>!qe(t)&&typeof t.then=="function",Qt=1073741823;class sn extends Be{constructor(){super(...arguments),this._$Cwt=Qt,this._$Cbt=[],this._$CK=new on(this),this._$CX=new nn}render(...e){return e.find(o=>!Gt(o))??ot}update(e,o){const n=this._$Cbt;let i=n.length;this._$Cbt=o;const s=this._$CK,r=this._$CX;this.isConnected||this.disconnected();for(let l=0;l<o.length&&!(l>this._$Cwt);l++){const u=o[l];if(!Gt(u))return this._$Cwt=l,u;l<i&&u===n[l]||(this._$Cwt=Qt,i=0,Promise.resolve(u).then(async c=>{for(;r.get();)await r.get();const a=s.deref();if(a!==void 0){const d=a._$Cbt.indexOf(u);d>-1&&d<a._$Cwt&&(a._$Cwt=d,a.setValue(c))}}))}return ot}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const Jt=ie(sn),rn=mt`
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
`,ln=O`
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
`,an=({onClear:t,disabled:e})=>O`
	<div class="content" part="content chip-text"><slot></slot></div>
	${U(t&&!e,()=>O`<span
				class="clear"
				part="clear chip-clear"
				@mousedown=${o=>o.preventDefault()}
				@click=${t}
			>
				${ln}
			</span>`)}
`;customElements.define("cosmoz-autocomplete-chip",tt(an,{observedAttributes:["disabled"],styleSheets:[re(rn)]}));const cn=({content:t,onClear:e,disabled:o,hidden:n,className:i="chip",slot:s})=>O`<cosmoz-autocomplete-chip
		class=${_(i)}
		slot=${_(s)}
		part="chip"
		exportparts="chip-text, chip-clear"
		?disabled=${o}
		?hidden=${n}
		.onClear=${e}
		title=${_(typeof t=="string"?t:void 0)}
		>${t}</cosmoz-autocomplete-chip
	>`,un=({value:t,min:e=0,onDeselect:o,textual:n,disabled:i,chipRenderer:s=cn})=>[...t.filter(Boolean).map(r=>s({item:r,content:n(r),onClear:t.length>e&&(()=>o(r)),disabled:i,slot:"control"})),s({item:null,content:O`<span></span>`,className:"badge",disabled:!0,slot:"control",hidden:!0})],dn=Ot`
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
`;customElements.define("cosmoz-autocomplete-skeleton-span",tt(()=>Pt,{styleSheets:[dn]}));const fn=mt`
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
`,te=t=>t.matches(":focus-within"),pn=({disabled:t,onFocus:e})=>{const[o,n]=nt(),{focused:i,closed:s}=o||{},r=i&&!t,l=Tt({closed:s,onFocus:e}),u=R(a=>n(d=>({...d,closed:a})),[]),c=R(a=>{const d=a.currentTarget;return te(d)?n(f=>({focused:!0,closed:!f?.closed})):d.focus()},[]);return M(()=>{if(!r)return;const a=d=>{if(d.defaultPrevented)return;const{closed:f}=l;d.key==="Escape"&&!f?(d.preventDefault(),u(!0)):["ArrowUp","Up"].includes(d.key)&&f&&(d.preventDefault(),u(!1))};return document.addEventListener("keydown",a,!0),()=>document.removeEventListener("keydown",a,!0)},[r]),{focused:r,active:r&&!s,setClosed:u,onToggle:c,onFocus:R(a=>{const d=te(a.currentTarget);n({focused:d}),l.onFocus?.(d)},[l])}},Mt=(t,e=()=>({}))=>{const o={type:t,toString(){return t}};return Object.assign((...i)=>Object.assign(e(...i),o),o)},ee=t=>t.type||t.toString(),oe=t=>Array.isArray(t)?t:[t],hn=(t,e)=>{const o=oe(e),n=(o.every(Array.isArray)?o:[o]).map(([i,s])=>({actions:oe(i).map(ee),handle:s}));return(i=t,s)=>{const r=n.find(l=>l.actions.includes(ee(s)));return r?r.handle(i,s):i}},G={pending:"pending",rejected:"rejected",resolved:"resolved"},Ce={error:void 0,result:void 0,state:G.pending},Re=Mt(G.pending),Ae=Mt(G.resolved,t=>({result:t})),ke=Mt(G.rejected,t=>({error:t})),mn=hn(Ce,[[Re,()=>({error:void 0,result:void 0,state:G.pending})],[Ae,(t,{result:e})=>({error:void 0,result:e,state:G.resolved})],[ke,(t,{error:e})=>({error:e,result:void 0,state:G.rejected})]]),gn=t=>{const[{error:e,result:o,state:n},i]=Xe(mn,Ce);return M(()=>{if(!t)return;let s=!1;return i(Re()),t.then(r=>!s&&i(Ae(r)),r=>!s&&i(ke(r))),()=>{s=!0}},[t]),[o,e,n]},vn=({focused:t,empty:e,...o})=>{const n=t&&e&&o.limit!==1,i=Tt(o);M(()=>{if(!n)return;const s=r=>{if(r.defaultPrevented)return;const{key:l}=r,u=At(i.value),c=i.limit==1;if(u.length>0&&(l==="Backspace"||c&&l.length===1))return i.onChange(u.slice(0,-1))};return document.addEventListener("keydown",s,!0),()=>document.removeEventListener("keydown",s,!0)},[n,i])},ne=t=>t.normalize("NFD").replace(/[\u0300-\u036f]/gu,""),bn=(t,e,o)=>{if(!e)return t;const n=ne(e.toLowerCase()),i=[];for(const s of t){const l=ne(o(s).toLowerCase()).indexOf(n);l<0||i.push({item:s,index:l})}return i.sort((s,r)=>s.index-r.index).map(({item:s})=>s)},wn=t=>t===!1||t==null?[]:t,xn=(t,e,o)=>t.dispatchEvent(new CustomEvent(e,{detail:o})),yn=[],$n=t=>(...e)=>{let o;const n=()=>{o&&cancelAnimationFrame(o)};return n(),o=requestAnimationFrame(()=>{o=void 0,t(...e)}),n},zn=(t,e,o)=>R(n=>{e?.(n),t.dispatchEvent(new CustomEvent(o,{detail:n}))},[e]),Cn=({value:t,text:e,onChange:o,onText:n,onSelect:i,limit:s,min:r,source:l,textProperty:u,textual:c,valueProperty:a,keepOpened:d,keepQuery:f,preserveOrder:p,defaultIndex:g,externalSearch:h,...v})=>{const m=q(()=>(c??Ne)(u),[c,u]),{active:b,focused:w,onFocus:x,setClosed:y}=pn(v),z=!e,C=q(()=>e?.trim(),[e]),E=Lt(),A=zn(E,n,"text"),k=R($=>{o?.($,()=>y(!0)),xn(E,"value",$)},[o]),[B,V]=nt([]),D=q(()=>Promise.resolve(typeof l=="function"?l({query:C,active:b}):l).then(wn),[l,b,C]),S=q(()=>At(t),[t]);M(()=>D.then(V),[D]),vn({focused:w,empty:z,limit:s,value:S,onChange:k,onText:A}),M(()=>{!w&&!f&&A("")},[w,f]);const T=Tt({onText:A,onChange:k,value:S,limit:s,min:r,keepQuery:f,keepOpened:d,setClosed:y,onSelect:i}),[,,Z]=gn(D);return{active:b,query:C,textual:m,value:S,source$:D,loading:Z==="pending",items:q(()=>{if(!b)return yn;const $=p?B:[...S,...Ct(S,We(a))(B)];return h?$:bn($,C,m)},[B,b,C,m,z,S,p,a,h]),onClick:R(()=>y(!1),[]),onFocus:x,onText:R($=>{A($.target.value),y(!1)},[A,e,y]),onSelect:R($=>{T.onSelect?.($,T);const{onChange:L,onText:I,limit:zt,min:Te,value:Le,keepQuery:Pe,keepOpened:Fe,setClosed:De}=T;Pe||I(""),Fe||De(!0);const ut=At(Le),Bt=ut.includes($);Bt&&ut.length===Te||L((Bt?Ct($)(ut):[...ut,$]).slice(-zt))},[T]),onDeselect:R($=>T.onChange(Ct($)(T.value)),[T]),defaultIndex:C!==void 0&&C?.length>0?0:g}},Rn=t=>{const e=t.shadowRoot.querySelectorAll(".chip"),o=t.shadowRoot.querySelector(".badge");o.hidden=!0;for(const l of e)l.hidden=!1;const i=t.shadowRoot.querySelector("cosmoz-input").shadowRoot?.querySelector(".control")?.getBoundingClientRect();let s;for(s=0;s<e.length;s++){const u=e[s].getBoundingClientRect();if(!(u.x+u.width<=i.x+i.width-24))break}const r=e.length-s;for(o.querySelector("span").textContent="+"+r.toString(),o.hidden=r<1;s<e.length;s++)e[s].hidden=!0},An=({value:t,active:e,wrap:o,limit:n})=>{const i=Lt(),s=!(o||n==1),r=q(()=>$n(()=>Rn(i)),[]),[l,u]=nt(0);Nt(()=>{if(!s)return;const c=i.shadowRoot.querySelector("cosmoz-input"),a=new ResizeObserver(d=>{u(d[0].contentRect.width)});return a.observe(c),()=>a.disconnect()},[s]),Nt(()=>s?r():void 0,[s,l,e,t])},kn=["input","control","label","line","error","wrap"].map(t=>`${t}: input-${t}`).join(),En=[Io({apply({rects:t,elements:e}){Object.assign(e.floating.style,{minWidth:`${Math.max(t.reference.width,t.floating.width)}px`})}}),...be],Sn=({active:t,isSingle:e,showSingle:o})=>t?!(e&&!o):!1,On=t=>{const{active:e,invalid:o,errorMessage:n,label:i,placeholder:s,disabled:r,noLabelFloat:l,alwaysFloatLabel:u,textual:c,text:a,onText:d,onFocus:f,onClick:p,onDeselect:g,value:h,limit:v,min:m,showSingle:b,items:w,source$:x,placement:y,loading:z,chipRenderer:C}=t,E=Lt(),A=v==1,k=A&&h?.[0]!=null,{styles:B,setReference:V,setFloating:D}=Yo({placement:y,middleware:En});M(()=>(E.addEventListener("focusin",f),E.addEventListener("focusout",f),()=>{E.removeEventListener("focusin",f),E.removeEventListener("focusout",f)}),[f]),we({focus:()=>E.shadowRoot?.querySelector("#input")?.focus()},[]);const S=z||w.length>0||a!=null&&a.length>0;return O`<cosmoz-input
				id="input"
				part="input"
				${St(V)}
				.label=${i}
				.placeholder=${k?void 0:s}
				?no-label-float=${l}
				?always-float-label=${h?.length>0||u}
				?readonly=${k}
				?disabled=${r}
				?invalid=${Jt(x.then(()=>o,()=>!0),o)}
				.errorMessage=${Jt(x.then(()=>n,T=>T.message),n)}
				.value=${$t(a)}
				@value-changed=${d}
				@click=${p}
				autocomplete="off"
				exportparts=${kn}
				?data-one=${A}
				?data-single=${k}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix"></slot>
				${un({value:h,min:m,onDeselect:g,textual:c,disabled:r,chipRenderer:C})}
			</cosmoz-input>

			${U(Sn({active:e,isSingle:k,showSingle:b}),()=>Ie({...t,items:w,multi:!A,setFloating:D,styles:{...B,display:S?void 0:"none"}},U(z,()=>O`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>U(a!=null&&a.length>0&&w.length===0,()=>O`<slot name="no-result">
											<p class="no-result">${Ue("No results found")}</p>
										</slot>`))))}`},Ee=t=>{const e={...t,...Cn(t)};return An(e),On(e)},Se=["disabled","invalid","no-label-float","always-float-label","text-property","value-property","limit","min","show-single","preserve-order","keep-opened","keep-query","default-index","external-search","item-height","item-limit","wrap"],Tn=t=>{const{onChange:e,onText:o,...n}=t,[i,s]=Ke("value");return M(()=>{t.onChange!=null&&console.warn("onChange is deprecated; use value-changed and lift instead")},[]),Ee({...n,value:i,onChange:R((r,...l)=>{s(r),e?.(r,...l)},[e]),onText:R(r=>{t.text=r,o?.(r)},[o])})},Oe=[re(fn)];customElements.define("cosmoz-autocomplete-ui",tt(Ee,{observedAttributes:Se,styleSheets:Oe}));customElements.define("cosmoz-autocomplete",tt(Tn,{observedAttributes:Se,styleSheets:Oe}));export{Ee as A,_ as a,Se as o,fn as s};
