import{E as B,r as Be,D as $n,A as vt,p as Ne,b as S,n as kn,M as An,u as it,v as mt,h as Gt,_ as Rn}from"./iframe-BJJxQbY1.js";const W={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},ct=e=>(...t)=>({_$litDirective$:e,values:t});let yt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,i){this._$Ct=t,this._$AM=n,this._$Ci=i}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}};const He="important",Ln=" !"+He,Tn=ct(class extends yt{constructor(e){if(super(e),e.type!==W.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{const i=e[n];return i==null?t:t+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(e,[t]){const{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const i of this.ft)t[i]==null&&(this.ft.delete(i),i.includes("-")?n.removeProperty(i):n[i]=null);for(const i in t){const s=t[i];if(s!=null){this.ft.add(i);const o=typeof s=="string"&&s.endsWith(Ln);i.includes("-")||o?n.setProperty(i,o?s.slice(0,-11):s,o?He:""):n[i]=s}}return B}});function X(e,t,n){return e?t(e):n?.(e)}let At,je=0;function he(e){At=e}function de(){At=null,je=0}function On(){return je++}const Xt=Symbol("haunted.phase"),kt=Symbol("haunted.hook"),fe=Symbol("haunted.update"),pe=Symbol("haunted.commit"),st=Symbol("haunted.effects"),gt=Symbol("haunted.layoutEffects"),Jt="haunted.context";class Mn{update;host;virtual;[kt];[st];[gt];constructor(t,n){this.update=t,this.host=n,this[kt]=new Map,this[st]=[],this[gt]=[]}run(t){he(this);let n=t();return de(),n}_runEffects(t){let n=this[t];he(this);for(let i of n)i.call(this);de()}runEffects(){this._runEffects(st)}runLayoutEffects(){this._runEffects(gt)}teardown(){this[kt].forEach(n=>{typeof n.teardown=="function"&&n.teardown(!0)})}}const Pn=Promise.resolve().then.bind(Promise.resolve());function We(){let e=[],t;function n(){t=null;let i=e;e=[];for(var s=0,o=i.length;s<o;s++)i[s]()}return function(i){e.push(i),t==null&&(t=Pn(n))}}const Dn=We(),me=We();class Fn{renderer;host;state;[Xt];_updateQueued;_active;constructor(t,n){this.renderer=t,this.host=n,this.state=new Mn(this.update.bind(this),n),this[Xt]=null,this._updateQueued=!1,this._active=!0}update(){this._active&&(this._updateQueued||(Dn(()=>{let t=this.handlePhase(fe);me(()=>{this.handlePhase(pe,t),me(()=>{this.handlePhase(st)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(t,n){switch(this[Xt]=t,t){case pe:this.commit(n),this.runEffects(gt);return;case fe:return this.render();case st:return this.runEffects(st)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(t){this.state._runEffects(t)}teardown(){this.state.teardown()}pause(){this._active=!1}resume(){this._active=!0}}const ie=(...e)=>{const t=new CSSStyleSheet;return t.replaceSync(e.join("")),t},In=e=>e?.map(t=>typeof t=="string"?ie(t):t),Vn=(e,...t)=>e.flatMap((n,i)=>[n,t[i]||""]).join(""),ht=Vn,Bn=(e="")=>e.replace(/-+([a-z])?/g,(t,n)=>n?n.toUpperCase():"");function Nn(e){class t extends Fn{frag;renderResult;constructor(s,o,r){super(s,r||o),this.frag=o}commit(s){this.renderResult=e(s,this.frag)}}function n(i,s,o){const r=(o||s||{}).baseElement||HTMLElement,{observedAttributes:l=[],useShadowDOM:a=!0,shadowRootInit:c={},styleSheets:u}=o||s||{},h=In(i.styleSheets||u);class f extends r{_scheduler;static get observedAttributes(){return i.observedAttributes||l||[]}constructor(){if(super(),a===!1)this._scheduler=new t(i,this);else{const b=this.attachShadow({mode:"open",...c});h&&(b.adoptedStyleSheets=h),this._scheduler=new t(i,b,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(b,m,v){if(m===v)return;let _=v===""?!0:v;Reflect.set(this,Bn(b),_)}}function d(p){let b=p,m=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return b},set(v){m&&b===v||(m=!0,b=v,this._scheduler&&this._scheduler.update())}})}const g=new Proxy(r.prototype,{getPrototypeOf(p){return p},set(p,b,m,v){let _;return b in p?(_=Object.getOwnPropertyDescriptor(p,b),_&&_.set?(_.set.call(v,m),!0):(Reflect.set(p,b,m,v),!0)):(typeof b=="symbol"||b[0]==="_"?_={enumerable:!0,configurable:!0,writable:!0,value:m}:_=d(m),Object.defineProperty(v,b,_),_.set&&_.set.call(v,m),!0)}});return Object.setPrototypeOf(f.prototype,g),f}return n}class K{id;state;constructor(t,n){this.id=t,this.state=n}}function Hn(e,...t){let n=On(),i=At[kt],s=i.get(n);return s||(s=new e(n,At,...t),i.set(n,s)),s.update(...t)}function Z(e){return Hn.bind(null,e)}function Ue(e){return Z(class extends K{callback;lastValues;values;_teardown;constructor(t,n,i,s){super(t,n),e(n,this)}update(t,n){this.callback=t,this.values=n}call(){const t=!this.values||this.hasChanged();this.lastValues=this.values,t&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(t){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),t&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((t,n)=>this.lastValues[n]!==t)}})}function Ye(e,t){e[st].push(t)}const $=Ue(Ye),jn=e=>e instanceof Element?e:e.startNode||e.endNode||e.parentNode,Wn=Z(class extends K{Context;value;_ranEffect;_unsubscribe;constructor(e,t,n){super(e,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,Ye(t,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){const t={Context:e,callback:this._updater};jn(this.state.host).dispatchEvent(new CustomEvent(Jt,{detail:t,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:i=null,value:s}=t;this.value=i?s:e.defaultValue,this._unsubscribe=i}teardown(){this._unsubscribe&&this._unsubscribe()}});function Un(e){return t=>{const n={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(Jt,this)}disconnectedCallback(){this.removeEventListener(Jt,this)}handleEvent(i){const{detail:s}=i;s.Context===n&&(s.value=this.value,s.unsubscribe=this.unsubscribe.bind(this,s.callback),this.listeners.add(s.callback),i.stopPropagation())}unsubscribe(i){this.listeners.delete(i)}set value(i){this._value=i;for(let s of this.listeners)s(i)}get value(){return this._value}},Consumer:e(function({render:i}){const s=Wn(n);return i(s)},{useShadowDOM:!1}),defaultValue:t};return n}}const T=Z(class extends K{value;values;constructor(e,t,n,i){super(e,t),this.value=n(),this.values=i}update(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}hasChanged(e=[]){return e.some((t,n)=>this.values[n]!==t)}}),w=(e,t)=>T(()=>e,t);function Yn(e,t){e[gt].push(t)}const ge=Ue(Yn),J=Z(class extends K{args;constructor(e,t,n){super(e,t),this.updater=this.updater.bind(this),typeof n=="function"&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(e){const[t]=this.args;typeof e=="function"&&(e=e(t)),!Object.is(t,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}}),qn=Z(class extends K{reducer;currentState;constructor(e,t,n,i,s){super(e,t),this.dispatch=this.dispatch.bind(this),this.currentState=s!==void 0?s(i):i}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}}),Gn=/([A-Z])/gu,Xn=Z(class extends K{property;eventName;constructor(e,t,n,i){if(super(e,t),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(Gn,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof i=="function"&&(i=i()),i!=null&&this.updateProp(i))}update(e,t){return[this.state.host[this.property],this.updater]}updater(e){const t=this.state.host[this.property];typeof e=="function"&&(e=e(t)),!Object.is(t,e)&&this.updateProp(e)}updateProp(e){this.notify(e).defaultPrevented||(this.state.host[this.property]=e)}notify(e){const t=new CustomEvent(this.eventName,{detail:{value:e,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(t),t}});function qe(e){return T(()=>({current:e}),[])}Z(class extends K{update(){return this.state.host}});function Kn({render:e}){const t=Nn(e),n=Un(t);return{component:t,createContext:n}}const bt=(e,t)=>{const n=e._$AN;if(n===void 0)return!1;for(const i of n)i._$AO?.(t,!1),bt(i,t);return!0},Rt=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},Ge=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Jn(t)}};function Zn(e){this._$AN!==void 0?(Rt(this),this._$AM=e,Ge(this)):this._$AM=e}function Qn(e,t=!1,n=0){const i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(t)if(Array.isArray(i))for(let o=n;o<i.length;o++)bt(i[o],!1),Rt(i[o]);else i!=null&&(bt(i,!1),Rt(i));else bt(this,e)}const Jn=e=>{e.type==W.CHILD&&(e._$AP??=Qn,e._$AQ??=Zn)};class se extends yt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,n,i){super._$AT(t,n,i),Ge(this),this.isConnected=t._$AU}_$AO(t,n=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),n&&(bt(this,t),Rt(this))}setValue(t){if(Be(this._$Ct))this._$Ct._$AI(t,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=t,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}}const{component:et}=Kn({render:$n});const I=e=>e??vt,Pt=(e,...t)=>e.flatMap((n,i)=>[n,t[i]??""]).join(""),oe=(...e)=>{const t=new CSSStyleSheet;return t.replaceSync(e.join("")),t},dt=Math.min,P=Math.max,Lt=Math.round,St=Math.floor,U=e=>({x:e,y:e}),ti={left:"right",right:"left",bottom:"top",top:"bottom"},ei={start:"end",end:"start"};function be(e,t,n){return P(e,dt(t,n))}function Dt(e,t){return typeof e=="function"?e(t):e}function rt(e){return e.split("-")[0]}function Ft(e){return e.split("-")[1]}function Xe(e){return e==="x"?"y":"x"}function Ke(e){return e==="y"?"height":"width"}const ni=new Set(["top","bottom"]);function Q(e){return ni.has(rt(e))?"y":"x"}function Ze(e){return Xe(Q(e))}function ii(e,t,n){n===void 0&&(n=!1);const i=Ft(e),s=Ze(e),o=Ke(s);let r=s==="x"?i===(n?"end":"start")?"right":"left":i==="start"?"bottom":"top";return t.reference[o]>t.floating[o]&&(r=Tt(r)),[r,Tt(r)]}function si(e){const t=Tt(e);return[te(e),t,te(t)]}function te(e){return e.replace(/start|end/g,t=>ei[t])}const ve=["left","right"],_e=["right","left"],oi=["top","bottom"],ri=["bottom","top"];function li(e,t,n){switch(e){case"top":case"bottom":return n?t?_e:ve:t?ve:_e;case"left":case"right":return t?oi:ri;default:return[]}}function ai(e,t,n,i){const s=Ft(e);let o=li(rt(e),n==="start",i);return s&&(o=o.map(r=>r+"-"+s),t&&(o=o.concat(o.map(te)))),o}function Tt(e){return e.replace(/left|right|bottom|top/g,t=>ti[t])}function ci(e){return{top:0,right:0,bottom:0,left:0,...e}}function ui(e){return typeof e!="number"?ci(e):{top:e,right:e,bottom:e,left:e}}function Ot(e){const{x:t,y:n,width:i,height:s}=e;return{width:i,height:s,top:n,left:t,right:t+i,bottom:n+s,x:t,y:n}}function ye(e,t,n){let{reference:i,floating:s}=e;const o=Q(t),r=Ze(t),l=Ke(r),a=rt(t),c=o==="y",u=i.x+i.width/2-s.width/2,h=i.y+i.height/2-s.height/2,f=i[l]/2-s[l]/2;let d;switch(a){case"top":d={x:u,y:i.y-s.height};break;case"bottom":d={x:u,y:i.y+i.height};break;case"right":d={x:i.x+i.width,y:h};break;case"left":d={x:i.x-s.width,y:h};break;default:d={x:i.x,y:i.y}}switch(Ft(t)){case"start":d[r]-=f*(n&&c?-1:1);break;case"end":d[r]+=f*(n&&c?-1:1);break}return d}async function hi(e,t){var n;t===void 0&&(t={});const{x:i,y:s,platform:o,rects:r,elements:l,strategy:a}=e,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:h="floating",altBoundary:f=!1,padding:d=0}=Dt(t,e),g=ui(d),b=l[f?h==="floating"?"reference":"floating":h],m=Ot(await o.getClippingRect({element:(n=await(o.isElement==null?void 0:o.isElement(b)))==null||n?b:b.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(l.floating)),boundary:c,rootBoundary:u,strategy:a})),v=h==="floating"?{x:i,y:s,width:r.floating.width,height:r.floating.height}:r.reference,_=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l.floating)),y=await(o.isElement==null?void 0:o.isElement(_))?await(o.getScale==null?void 0:o.getScale(_))||{x:1,y:1}:{x:1,y:1},x=Ot(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:v,offsetParent:_,strategy:a}):v);return{top:(m.top-x.top+g.top)/y.y,bottom:(x.bottom-m.bottom+g.bottom)/y.y,left:(m.left-x.left+g.left)/y.x,right:(x.right-m.right+g.right)/y.x}}const di=async(e,t,n)=>{const{placement:i="bottom",strategy:s="absolute",middleware:o=[],platform:r}=n,l=o.filter(Boolean),a=await(r.isRTL==null?void 0:r.isRTL(t));let c=await r.getElementRects({reference:e,floating:t,strategy:s}),{x:u,y:h}=ye(c,i,a),f=i,d={},g=0;for(let b=0;b<l.length;b++){var p;const{name:m,fn:v}=l[b],{x:_,y,data:x,reset:E}=await v({x:u,y:h,initialPlacement:i,placement:f,strategy:s,middlewareData:d,rects:c,platform:{...r,detectOverflow:(p=r.detectOverflow)!=null?p:hi},elements:{reference:e,floating:t}});u=_??u,h=y??h,d={...d,[m]:{...d[m],...x}},E&&g<=50&&(g++,typeof E=="object"&&(E.placement&&(f=E.placement),E.rects&&(c=E.rects===!0?await r.getElementRects({reference:e,floating:t,strategy:s}):E.rects),{x:u,y:h}=ye(c,f,a)),b=-1)}return{x:u,y:h,placement:f,strategy:s,middlewareData:d}},fi=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,i;const{placement:s,middlewareData:o,rects:r,initialPlacement:l,platform:a,elements:c}=t,{mainAxis:u=!0,crossAxis:h=!0,fallbackPlacements:f,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:p=!0,...b}=Dt(e,t);if((n=o.arrow)!=null&&n.alignmentOffset)return{};const m=rt(s),v=Q(l),_=rt(l)===l,y=await(a.isRTL==null?void 0:a.isRTL(c.floating)),x=f||(_||!p?[Tt(l)]:si(l)),E=g!=="none";!f&&E&&x.push(...ai(l,p,g,y));const z=[l,...x],R=await a.detectOverflow(t,b),k=[];let A=((i=o.flip)==null?void 0:i.overflows)||[];if(u&&k.push(R[m]),h){const L=ii(s,r,y);k.push(R[L[0]],R[L[1]])}if(A=[...A,{placement:s,overflows:k}],!k.every(L=>L<=0)){var V,G;const L=(((V=o.flip)==null?void 0:V.index)||0)+1,O=z[L];if(O&&(!(h==="alignment"?v!==Q(O):!1)||A.every(M=>Q(M.placement)===v?M.overflows[0]>0:!0)))return{data:{index:L,overflows:A},reset:{placement:O}};let nt=(G=A.filter(C=>C.overflows[0]<=0).sort((C,M)=>C.overflows[1]-M.overflows[1])[0])==null?void 0:G.placement;if(!nt)switch(d){case"bestFit":{var F;const C=(F=A.filter(M=>{if(E){const j=Q(M.placement);return j===v||j==="y"}return!0}).map(M=>[M.placement,M.overflows.filter(j=>j>0).reduce((j,qt)=>j+qt,0)]).sort((M,j)=>M[1]-j[1])[0])==null?void 0:F[0];C&&(nt=C);break}case"initialPlacement":nt=l;break}if(s!==nt)return{reset:{placement:nt}}}return{}}}},pi=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:i,placement:s,platform:o}=t,{mainAxis:r=!0,crossAxis:l=!1,limiter:a={fn:m=>{let{x:v,y:_}=m;return{x:v,y:_}}},...c}=Dt(e,t),u={x:n,y:i},h=await o.detectOverflow(t,c),f=Q(rt(s)),d=Xe(f);let g=u[d],p=u[f];if(r){const m=d==="y"?"top":"left",v=d==="y"?"bottom":"right",_=g+h[m],y=g-h[v];g=be(_,g,y)}if(l){const m=f==="y"?"top":"left",v=f==="y"?"bottom":"right",_=p+h[m],y=p-h[v];p=be(_,p,y)}const b=a.fn({...t,[d]:g,[f]:p});return{...b,data:{x:b.x-n,y:b.y-i,enabled:{[d]:r,[f]:l}}}}}},mi=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var n,i;const{placement:s,rects:o,platform:r,elements:l}=t,{apply:a=()=>{},...c}=Dt(e,t),u=await r.detectOverflow(t,c),h=rt(s),f=Ft(s),d=Q(s)==="y",{width:g,height:p}=o.floating;let b,m;h==="top"||h==="bottom"?(b=h,m=f===(await(r.isRTL==null?void 0:r.isRTL(l.floating))?"start":"end")?"left":"right"):(m=h,b=f==="end"?"top":"bottom");const v=p-u.top-u.bottom,_=g-u.left-u.right,y=dt(p-u[b],v),x=dt(g-u[m],_),E=!t.middlewareData.shift;let z=y,R=x;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(R=_),(i=t.middlewareData.shift)!=null&&i.enabled.y&&(z=v),E&&!f){const A=P(u.left,0),V=P(u.right,0),G=P(u.top,0),F=P(u.bottom,0);d?R=g-2*(A!==0||V!==0?A+V:P(u.left,u.right)):z=p-2*(G!==0||F!==0?G+F:P(u.top,u.bottom))}await a({...t,availableWidth:R,availableHeight:z});const k=await r.getDimensions(l.floating);return g!==k.width||p!==k.height?{reset:{rects:!0}}:{}}}};function It(){return typeof window<"u"}function pt(e){return Qe(e)?(e.nodeName||"").toLowerCase():"#document"}function D(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function q(e){var t;return(t=(Qe(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Qe(e){return It()?e instanceof Node||e instanceof D(e).Node:!1}function N(e){return It()?e instanceof Element||e instanceof D(e).Element:!1}function Y(e){return It()?e instanceof HTMLElement||e instanceof D(e).HTMLElement:!1}function we(e){return!It()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof D(e).ShadowRoot}const gi=new Set(["inline","contents"]);function wt(e){const{overflow:t,overflowX:n,overflowY:i,display:s}=H(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+n)&&!gi.has(s)}const bi=new Set(["table","td","th"]);function vi(e){return bi.has(pt(e))}const _i=[":popover-open",":modal"];function Vt(e){return _i.some(t=>{try{return e.matches(t)}catch{return!1}})}const yi=["transform","translate","scale","rotate","perspective"],wi=["transform","translate","scale","rotate","perspective","filter"],xi=["paint","layout","strict","content"];function re(e){const t=le(),n=N(e)?H(e):e;return yi.some(i=>n[i]?n[i]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||wi.some(i=>(n.willChange||"").includes(i))||xi.some(i=>(n.contain||"").includes(i))}function Ci(e){let t=tt(e);for(;Y(t)&&!ft(t);){if(re(t))return t;if(Vt(t))return null;t=tt(t)}return null}function le(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const Ei=new Set(["html","body","#document"]);function ft(e){return Ei.has(pt(e))}function H(e){return D(e).getComputedStyle(e)}function Bt(e){return N(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function tt(e){if(pt(e)==="html")return e;const t=e.assignedSlot||e.parentNode||we(e)&&e.host||q(e);return we(t)?t.host:t}function Je(e){const t=tt(e);return ft(t)?e.ownerDocument?e.ownerDocument.body:e.body:Y(t)&&wt(t)?t:Je(t)}function _t(e,t,n){var i;t===void 0&&(t=[]),n===void 0&&(n=!0);const s=Je(e),o=s===((i=e.ownerDocument)==null?void 0:i.body),r=D(s);if(o){const l=ee(r);return t.concat(r,r.visualViewport||[],wt(s)?s:[],l&&n?_t(l):[])}return t.concat(s,_t(s,[],n))}function ee(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function tn(e){const t=H(e);let n=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const s=Y(e),o=s?e.offsetWidth:n,r=s?e.offsetHeight:i,l=Lt(n)!==o||Lt(i)!==r;return l&&(n=o,i=r),{width:n,height:i,$:l}}function ae(e){return N(e)?e:e.contextElement}function ut(e){const t=ae(e);if(!Y(t))return U(1);const n=t.getBoundingClientRect(),{width:i,height:s,$:o}=tn(t);let r=(o?Lt(n.width):n.width)/i,l=(o?Lt(n.height):n.height)/s;return(!r||!Number.isFinite(r))&&(r=1),(!l||!Number.isFinite(l))&&(l=1),{x:r,y:l}}const Si=U(0);function en(e){const t=D(e);return!le()||!t.visualViewport?Si:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function zi(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==D(e)?!1:t}function lt(e,t,n,i){t===void 0&&(t=!1),n===void 0&&(n=!1);const s=e.getBoundingClientRect(),o=ae(e);let r=U(1);t&&(i?N(i)&&(r=ut(i)):r=ut(e));const l=zi(o,n,i)?en(o):U(0);let a=(s.left+l.x)/r.x,c=(s.top+l.y)/r.y,u=s.width/r.x,h=s.height/r.y;if(o){const f=D(o),d=i&&N(i)?D(i):i;let g=f,p=ee(g);for(;p&&i&&d!==g;){const b=ut(p),m=p.getBoundingClientRect(),v=H(p),_=m.left+(p.clientLeft+parseFloat(v.paddingLeft))*b.x,y=m.top+(p.clientTop+parseFloat(v.paddingTop))*b.y;a*=b.x,c*=b.y,u*=b.x,h*=b.y,a+=_,c+=y,g=D(p),p=ee(g)}}return Ot({width:u,height:h,x:a,y:c})}function Nt(e,t){const n=Bt(e).scrollLeft;return t?t.left+n:lt(q(e)).left+n}function nn(e,t){const n=e.getBoundingClientRect(),i=n.left+t.scrollLeft-Nt(e,n),s=n.top+t.scrollTop;return{x:i,y:s}}function $i(e){let{elements:t,rect:n,offsetParent:i,strategy:s}=e;const o=s==="fixed",r=q(i),l=t?Vt(t.floating):!1;if(i===r||l&&o)return n;let a={scrollLeft:0,scrollTop:0},c=U(1);const u=U(0),h=Y(i);if((h||!h&&!o)&&((pt(i)!=="body"||wt(r))&&(a=Bt(i)),Y(i))){const d=lt(i);c=ut(i),u.x=d.x+i.clientLeft,u.y=d.y+i.clientTop}const f=r&&!h&&!o?nn(r,a):U(0);return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-a.scrollLeft*c.x+u.x+f.x,y:n.y*c.y-a.scrollTop*c.y+u.y+f.y}}function ki(e){return Array.from(e.getClientRects())}function Ai(e){const t=q(e),n=Bt(e),i=e.ownerDocument.body,s=P(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),o=P(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight);let r=-n.scrollLeft+Nt(e);const l=-n.scrollTop;return H(i).direction==="rtl"&&(r+=P(t.clientWidth,i.clientWidth)-s),{width:s,height:o,x:r,y:l}}const xe=25;function Ri(e,t){const n=D(e),i=q(e),s=n.visualViewport;let o=i.clientWidth,r=i.clientHeight,l=0,a=0;if(s){o=s.width,r=s.height;const u=le();(!u||u&&t==="fixed")&&(l=s.offsetLeft,a=s.offsetTop)}const c=Nt(i);if(c<=0){const u=i.ownerDocument,h=u.body,f=getComputedStyle(h),d=u.compatMode==="CSS1Compat"&&parseFloat(f.marginLeft)+parseFloat(f.marginRight)||0,g=Math.abs(i.clientWidth-h.clientWidth-d);g<=xe&&(o-=g)}else c<=xe&&(o+=c);return{width:o,height:r,x:l,y:a}}const Li=new Set(["absolute","fixed"]);function Ti(e,t){const n=lt(e,!0,t==="fixed"),i=n.top+e.clientTop,s=n.left+e.clientLeft,o=Y(e)?ut(e):U(1),r=e.clientWidth*o.x,l=e.clientHeight*o.y,a=s*o.x,c=i*o.y;return{width:r,height:l,x:a,y:c}}function Ce(e,t,n){let i;if(t==="viewport")i=Ri(e,n);else if(t==="document")i=Ai(q(e));else if(N(t))i=Ti(t,n);else{const s=en(e);i={x:t.x-s.x,y:t.y-s.y,width:t.width,height:t.height}}return Ot(i)}function sn(e,t){const n=tt(e);return n===t||!N(n)||ft(n)?!1:H(n).position==="fixed"||sn(n,t)}function Oi(e,t){const n=t.get(e);if(n)return n;let i=_t(e,[],!1).filter(l=>N(l)&&pt(l)!=="body"),s=null;const o=H(e).position==="fixed";let r=o?tt(e):e;for(;N(r)&&!ft(r);){const l=H(r),a=re(r);!a&&l.position==="fixed"&&(s=null),(o?!a&&!s:!a&&l.position==="static"&&!!s&&Li.has(s.position)||wt(r)&&!a&&sn(e,r))?i=i.filter(u=>u!==r):s=l,r=tt(r)}return t.set(e,i),i}function Mi(e){let{element:t,boundary:n,rootBoundary:i,strategy:s}=e;const r=[...n==="clippingAncestors"?Vt(t)?[]:Oi(t,this._c):[].concat(n),i],l=r[0],a=r.reduce((c,u)=>{const h=Ce(t,u,s);return c.top=P(h.top,c.top),c.right=dt(h.right,c.right),c.bottom=dt(h.bottom,c.bottom),c.left=P(h.left,c.left),c},Ce(t,l,s));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function Pi(e){const{width:t,height:n}=tn(e);return{width:t,height:n}}function Di(e,t,n){const i=Y(t),s=q(t),o=n==="fixed",r=lt(e,!0,o,t);let l={scrollLeft:0,scrollTop:0};const a=U(0);function c(){a.x=Nt(s)}if(i||!i&&!o)if((pt(t)!=="body"||wt(s))&&(l=Bt(t)),i){const d=lt(t,!0,o,t);a.x=d.x+t.clientLeft,a.y=d.y+t.clientTop}else s&&c();o&&!i&&s&&c();const u=s&&!i&&!o?nn(s,l):U(0),h=r.left+l.scrollLeft-a.x-u.x,f=r.top+l.scrollTop-a.y-u.y;return{x:h,y:f,width:r.width,height:r.height}}function Kt(e){return H(e).position==="static"}function Ee(e,t){if(!Y(e)||H(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return q(e)===n&&(n=n.ownerDocument.body),n}function on(e,t){const n=D(e);if(Vt(e))return n;if(!Y(e)){let s=tt(e);for(;s&&!ft(s);){if(N(s)&&!Kt(s))return s;s=tt(s)}return n}let i=Ee(e,t);for(;i&&vi(i)&&Kt(i);)i=Ee(i,t);return i&&ft(i)&&Kt(i)&&!re(i)?n:i||Ci(e)||n}const Fi=async function(e){const t=this.getOffsetParent||on,n=this.getDimensions,i=await n(e.floating);return{reference:Di(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function Ii(e){return H(e).direction==="rtl"}const Vi={convertOffsetParentRelativeRectToViewportRelativeRect:$i,getDocumentElement:q,getClippingRect:Mi,getOffsetParent:on,getElementRects:Fi,getClientRects:ki,getDimensions:Pi,getScale:ut,isElement:N,isRTL:Ii};function rn(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Bi(e,t){let n=null,i;const s=q(e);function o(){var l;clearTimeout(i),(l=n)==null||l.disconnect(),n=null}function r(l,a){l===void 0&&(l=!1),a===void 0&&(a=1),o();const c=e.getBoundingClientRect(),{left:u,top:h,width:f,height:d}=c;if(l||t(),!f||!d)return;const g=St(h),p=St(s.clientWidth-(u+f)),b=St(s.clientHeight-(h+d)),m=St(u),_={rootMargin:-g+"px "+-p+"px "+-b+"px "+-m+"px",threshold:P(0,dt(1,a))||1};let y=!0;function x(E){const z=E[0].intersectionRatio;if(z!==a){if(!y)return r();z?r(!1,z):i=setTimeout(()=>{r(!1,1e-7)},1e3)}z===1&&!rn(c,e.getBoundingClientRect())&&r(),y=!1}try{n=new IntersectionObserver(x,{..._,root:s.ownerDocument})}catch{n=new IntersectionObserver(x,_)}n.observe(e)}return r(!0),o}function Ni(e,t,n,i){i===void 0&&(i={});const{ancestorScroll:s=!0,ancestorResize:o=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:a=!1}=i,c=ae(e),u=s||o?[...c?_t(c):[],..._t(t)]:[];u.forEach(m=>{s&&m.addEventListener("scroll",n,{passive:!0}),o&&m.addEventListener("resize",n)});const h=c&&l?Bi(c,n):null;let f=-1,d=null;r&&(d=new ResizeObserver(m=>{let[v]=m;v&&v.target===c&&d&&(d.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var _;(_=d)==null||_.observe(t)})),n()}),c&&!a&&d.observe(c),d.observe(t));let g,p=a?lt(e):null;a&&b();function b(){const m=lt(e);p&&!rn(p,m)&&n(),p=m,g=requestAnimationFrame(b)}return n(),()=>{var m;u.forEach(v=>{s&&v.removeEventListener("scroll",n),o&&v.removeEventListener("resize",n)}),h?.(),(m=d)==null||m.disconnect(),d=null,a&&cancelAnimationFrame(g)}}const Hi=pi,ji=fi,Wi=mi,Ui=(e,t,n)=>{const i=new Map,s={platform:Vi,...n},o={...s.platform,_c:i};return di(e,t,{...s,platform:o})},ln=[ji({fallbackAxisSideDirection:"start",crossAxis:!1}),Hi()],Yi=({placement:e="bottom-start",strategy:t,middleware:n=ln}={})=>{const[i,s]=J(),[o,r]=J(),[l,a]=J();return $(()=>{if(!i||!(o instanceof HTMLElement)){a(void 0);return}return Ni(i,o,()=>Ui(i,o,{placement:e,strategy:t,middleware:n}).then(a))},[i,o,e,t,n]),{setReference:s,setFloating:r,styles:T(()=>l?{left:`${l.x}px`,top:`${l.y}px`}:{},[l?.x,l?.y])}};const Ht=ct(class extends yt{constructor(e){if(super(e),e.type!==W.PROPERTY&&e.type!==W.ATTRIBUTE&&e.type!==W.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Be(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===B||t===vt)return t;const n=e.element,i=e.name;if(e.type===W.PROPERTY){if(t===n[i])return B}else if(e.type===W.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(i))return B}else if(e.type===W.ATTRIBUTE&&n.getAttribute(i)===t+"")return B;return Ne(e),t}}),Zt=new WeakMap,xt=ct(class extends se{render(e){return vt}update(e,[t]){const n=t!==this.G;return n&&this.G!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),vt}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let n=Zt.get(t);n===void 0&&(n=new WeakMap,Zt.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?Zt.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),an=Z(class extends K{values;constructor(e,t,n,i){super(e,t),Object.assign(t.host,n),this.values=i}update(e,t){this.hasChanged(t)&&(this.values=t,Object.assign(this.state.host,e))}hasChanged(e=[]){return e.some((t,n)=>this.values[n]!==t)}}),jt=Z(class extends K{update(){return this.state.host}}),qi=/([A-Z])/gu,Se=(e,t,n)=>{e[t]=n,e.dispatchEvent(new CustomEvent(t.replace(qi,"-$1").toLowerCase()+"-changed",{detail:{value:n}}))},cn=e=>{const t=qe(void 0),n=w(c=>t.current=c,[]),i=e.shadowRoot,s=w(c=>e.dispatchEvent(new Event(c.type,{bubbles:c.bubbles})),[]),o=w(c=>Se(e,"value",c.target.value),[]),r=w(c=>Se(e,"focused",c.type==="focus"),[]),l=w(()=>t.current?.focus(),[]),a=w(()=>{const c=t.current?.checkValidity();return e.toggleAttribute("invalid",!c),c},[]);return an({focus:l,validate:a},[l,a]),$(()=>{const c=u=>{u.defaultPrevented||e.disabled||u.target.matches("input, textarea, label")||(u.preventDefault(),e.matches(":focus-within")||l())};return i.addEventListener("mousedown",c),()=>i.removeEventListener("mousedown",c)},[l]),{onChange:s,onFocus:r,onInput:o,onRef:n}},Gi=e=>T(()=>{if(e==null)return;const t=new RegExp(e,"u");return n=>{!n.defaultPrevented&&n.data&&!t.test(n.data)&&n.preventDefault()}},[e]),un=(e,{label:t,invalid:n,errorMessage:i})=>S`
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
		${X(n&&i,()=>S`<div class="error" part="error">${i}</div>`)}
	`,hn=["autocomplete","readonly","disabled","maxlength","invalid","no-label-float","always-float-label"],Xi=({placeholder:e,noLabelFloat:t,label:n})=>(t?n:void 0)||e||" ",ze=Pt`
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
`,dn=Pt`
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
		${ze}
	}
	@container style(--focused: focused) {
		${ze}
	}
`,Ki=["type","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...hn],Zi=e=>{const{type:t="text",pattern:n,allowedPattern:i,autocomplete:s,value:o,readonly:r,disabled:l,min:a,max:c,step:u,maxlength:h}=e,{onChange:f,onFocus:d,onInput:g,onRef:p}=cn(e),b=Gi(i);return un(S`
			<input
				${xt(p)}
				style="--chars: ${o?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${I(n)}
				autocomplete=${I(s)}
				placeholder=${Xi(e)}
				?readonly=${r}
				?aria-disabled=${l}
				?disabled=${l}
				.value=${Ht(o??"")}
				maxlength=${I(h)}
				@beforeinput=${b}
				@input=${g}
				@change=${f}
				@focus=${d}
				@blur=${d}
				min=${I(a)}
				max=${I(c)}
				step=${I(u)}
			/>
		`,e)};customElements.define("cosmoz-input",et(Zi,{observedAttributes:Ki,styleSheets:[ie(dn)]}));const $e=e=>{e.style.height="",e.style.height=`${e.scrollHeight}px`},Qi=(e,t=0)=>{if(t>0){const n=e.getAttribute("rows")??"",i=e.style.height;e.style.height="",e.setAttribute("rows",t),e.style.maxHeight=e.getBoundingClientRect().height+"px",e.style.height=i,e.setAttribute("rows",n)}},Ji=e=>{const{value:t,maxRows:n}=e,i=T(()=>()=>e.shadowRoot.querySelector("#input"),[]);$(()=>Qi(i(),n),[n,i]),$(()=>$e(i()),[i,t]),$(()=>{const s=i(),o=new ResizeObserver(()=>requestAnimationFrame(()=>$e(s)));return o.observe(s),()=>o.unobserve(s)},[i])},ts=["rows","placeholder",...hn],es=e=>{const{autocomplete:t,value:n,placeholder:i,readonly:s,disabled:o,rows:r,cols:l,maxlength:a}=e,{onChange:c,onFocus:u,onInput:h,onRef:f}=cn(e);return Ji(e),un(S`
			<textarea id="input" part="input"
				${xt(f)}
				autocomplete=${I(t)}
				placeholder=${i||" "}
				rows=${r??1} cols=${I(l)}
				?readonly=${s} ?aria-disabled=${o} ?disabled=${o}
				.value=${Ht(n??"")} maxlength=${I(a)} @input=${h}
				@change=${c} @focus=${u} @blur=${u}>`,e)};customElements.define("cosmoz-textarea",et(es,{observedAttributes:ts,styleSheets:[ie(dn)]}));const ns=e=>{const{label:t,value:n,disabled:i,error:s}=e,o=w(r=>e.dispatchEvent(new CustomEvent("change",{detail:r.target.checked})),[]);return S`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${Ht(!!n)}
			?disabled=${i}
			@change=${o}
		/>
		${X(t,()=>S`<label for="toggle">${t}</label>`)}
		<slot name="suffix"></slot>
		${X(s,r=>S`<div class="failure">${r}</div>`)} `},is=ht`
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
`,ss=ht`
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
`;customElements.define("cosmoz-toggle",et(ns,{styleSheets:[ss,is],observedAttributes:["disabled"]}));class os{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class rs{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(t=>this.Z=t)}resume(){this.Z?.(),this.Y=this.Z=void 0}}const ke=e=>!kn(e)&&typeof e.then=="function",Ae=1073741823;let ls=class extends se{constructor(){super(...arguments),this._$Cwt=Ae,this._$Cbt=[],this._$CK=new os(this),this._$CX=new rs}render(...t){return t.find(n=>!ke(n))??B}update(t,n){const i=this._$Cbt;let s=i.length;this._$Cbt=n;const o=this._$CK,r=this._$CX;this.isConnected||this.disconnected();for(let l=0;l<n.length&&!(l>this._$Cwt);l++){const a=n[l];if(!ke(a))return this._$Cwt=l,a;l<s&&a===i[l]||(this._$Cwt=Ae,s=0,Promise.resolve(a).then(async c=>{for(;r.get();)await r.get();const u=o.deref();if(u!==void 0){const h=u._$Cbt.indexOf(a);h>-1&&h<u._$Cwt&&(u._$Cwt=h,u.setValue(c))}}))}return B}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};const Re=ct(ls);const Le=(e,t,n)=>{const i=new Map;for(let s=t;s<=n;s++)i.set(e[s],s);return i},as=ct(class extends yt{constructor(e){if(super(e),e.type!==W.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,n){let i;n===void 0?n=t:t!==void 0&&(i=t);const s=[],o=[];let r=0;for(const l of e)s[r]=i?i(l,r):r,o[r]=n(l,r),r++;return{values:o,keys:s}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,i]){const s=An(e),{values:o,keys:r}=this.dt(t,n,i);if(!Array.isArray(s))return this.ut=r,o;const l=this.ut??=[],a=[];let c,u,h=0,f=s.length-1,d=0,g=o.length-1;for(;h<=f&&d<=g;)if(s[h]===null)h++;else if(s[f]===null)f--;else if(l[h]===r[d])a[d]=it(s[h],o[d]),h++,d++;else if(l[f]===r[g])a[g]=it(s[f],o[g]),f--,g--;else if(l[h]===r[g])a[g]=it(s[h],o[g]),mt(e,a[g+1],s[h]),h++,g--;else if(l[f]===r[d])a[d]=it(s[f],o[d]),mt(e,s[h],s[f]),f--,d++;else if(c===void 0&&(c=Le(r,d,g),u=Le(l,h,f)),c.has(l[h]))if(c.has(l[f])){const p=u.get(r[d]),b=p!==void 0?s[p]:null;if(b===null){const m=mt(e,s[h]);it(m,o[d]),a[d]=m}else a[d]=it(b,o[d]),mt(e,s[h],b),s[p]=null;d++}else Gt(s[f]),f--;else Gt(s[h]),h++;for(;d<=g;){const p=mt(e,a[g+1]);it(p,o[d]),a[d++]=p}for(;h<=f;){const p=s[h++];p!==null&&Gt(p)}return this.ut=r,Ne(e,a),B}});class Wt extends Event{constructor(t){super(Wt.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}}Wt.eventName="rangeChanged";class Ut extends Event{constructor(t){super(Ut.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}}Ut.eventName="visibilityChanged";class Yt extends Event{constructor(){super(Yt.eventName,{bubbles:!1})}}Yt.eventName="unpinned";class cs{constructor(t){this._element=null;const n=t??window;this._node=n,t&&(this._element=t)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}}class us extends cs{constructor(t,n){super(n),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);const i=this._node;this._originalScrollTo=i.scrollTo,this._originalScrollBy=i.scrollBy,this._originalScroll=i.scroll,this._attach(t)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(t,n){const i=typeof t=="number"&&typeof n=="number"?{left:t,top:n}:t;this._scrollTo(i)}scrollBy(t,n){const i=typeof t=="number"&&typeof n=="number"?{left:t,top:n}:t;i.top!==void 0&&(i.top+=this.scrollTop),i.left!==void 0&&(i.left+=this.scrollLeft),this._scrollTo(i)}_nativeScrollTo(t){this._originalScrollTo.bind(this._element||window)(t)}_scrollTo(t,n=null,i=null){this._end!==null&&this._end(),t.behavior==="smooth"?(this._setDestination(t),this._retarget=n,this._end=i):this._resetScrollState(),this._nativeScrollTo(t)}_setDestination(t){let{top:n,left:i}=t;return n=n===void 0?void 0:Math.max(0,Math.min(n,this.maxScrollTop)),i=i===void 0?void 0:Math.max(0,Math.min(i,this.maxScrollLeft)),this._destination!==null&&i===this._destination.left&&n===this._destination.top?!1:(this.__destination={top:n,left:i,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(t){this._destination&&this._setDestination(t)&&this._nativeScrollTo(this._destination)}managedScrollTo(t,n,i){return this._scrollTo(t,n,i),this._updateManagedScrollTo}correctScrollError(t){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(t),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){const{scrollTop:t,scrollLeft:n}=this;let{top:i,left:s}=this._destination;i=Math.min(i||0,this.maxScrollTop),s=Math.min(s||0,this.maxScrollLeft);const o=Math.abs(i-t),r=Math.abs(s-n);o<1&&r<1&&(this._end&&this._end(),this._resetScrollState())}}detach(t){return this._clients.delete(t),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(t){this._clients.add(t),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}}let Te=typeof window<"u"?window.ResizeObserver:void 0;const ne=Symbol("virtualizerRef"),zt="virtualizer-sizer";let Oe;class hs{constructor(t){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!t)throw new Error("Virtualizer constructor requires a configuration object");if(t.hostElement)this._init(t);else throw new Error('Virtualizer configuration requires the "hostElement" property')}set items(t){Array.isArray(t)&&t!==this._items&&(this._itemsChanged=!0,this._items=t,this._schedule(this._updateLayout))}_init(t){this._isScroller=!!t.scroller,this._initHostElement(t);const n=t.layout||{};this._layoutInitialized=this._initLayout(n)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new Te(()=>this._hostElementSizeChanged()),this._childrenRO=new Te(this._childrenSizeChanged.bind(this))}_initHostElement(t){const n=this._hostElement=t.hostElement;this._applyVirtualizerStyles(),n[ne]=this}connected(){this._initObservers();const t=this._isScroller;this._clippingAncestors=ps(this._hostElement,t),this._scrollerController=new us(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(t=>{t.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(t),this._hostElementRO.observe(t)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(t=>this._childrenRO.observe(t)),this._scrollEventListeners.forEach(t=>t.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){this._scrollEventListeners.forEach(t=>t.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],this._scrollerController?.detach(this),this._scrollerController=null,this._mutationObserver?.disconnect(),this._mutationObserver=null,this._hostElementRO?.disconnect(),this._hostElementRO=null,this._childrenRO?.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected"),this._connected=!1}_applyVirtualizerStyles(){const n=this._hostElement.style;n.display=n.display||"block",n.position=n.position||"relative",n.contain=n.contain||"size layout",this._isScroller&&(n.overflow=n.overflow||"auto",n.minHeight=n.minHeight||"150px")}_getSizer(){const t=this._hostElement;if(!this._sizer){let n=t.querySelector(`[${zt}]`);n||(n=document.createElement("div"),n.setAttribute(zt,""),t.appendChild(n)),Object.assign(n.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),n.textContent="&nbsp;",n.setAttribute(zt,""),this._sizer=n}return this._sizer}async updateLayoutConfig(t){await this._layoutInitialized;const n=t.type||Oe;if(typeof n=="function"&&this._layout instanceof n){const i={...t};return delete i.type,this._layout.config=i,!0}return!1}async _initLayout(t){let n,i;if(typeof t.type=="function"){i=t.type;const s={...t};delete s.type,n=s}else n=t;i===void 0&&(Oe=i=(await Rn(()=>import("./flow-BqIEBwW6.js"),[],import.meta.url)).FlowLayout),this._layout=new i(s=>this._handleLayoutMessage(s),n),this._layout.measureChildren&&typeof this._layout.updateItemSizes=="function"&&(typeof this._layout.measureChildren=="function"&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){const t=window.performance.now(),n=t-this._benchmarkStart,s=performance.getEntriesByName("uv-virtualizing","measure").filter(o=>o.startTime>=this._benchmarkStart&&o.startTime<t).reduce((o,r)=>o+r.duration,0);return this._benchmarkStart=null,{timeElapsed:n,virtualizationTime:s}}return null}_measureChildren(){const t={},n=this._children,i=this._measureChildOverride||this._measureChild;for(let s=0;s<n.length;s++){const o=n[s],r=this._first+s;(this._itemsChanged||this._toBeMeasured.has(o))&&(t[r]=i.call(this,o,this._items[r]))}this._childMeasurements=t,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(t){const{width:n,height:i}=t.getBoundingClientRect();return Object.assign({width:n,height:i},ds(t))}async _schedule(t){this._scheduled.has(t)||(this._scheduled.add(t),await Promise.resolve(),this._scheduled.delete(t),t.call(this))}async _updateDOM(t){this._scrollSize=t.scrollSize,this._adjustRange(t.range),this._childrenPos=t.childPositions,this._scrollError=t.scrollError||null;const{_rangeChanged:n,_itemsChanged:i}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(n||i)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(t=>this._childrenRO.observe(t)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(t){console.warn("Error measuring performance data: ",t)}window.performance.mark("uv-start")}this._scrollerController.correctingScrollError===!1&&this._layout?.unpin(),this._schedule(this._updateLayout)}handleEvent(t){t.type==="scroll"?(t.currentTarget===window||this._clippingAncestors.includes(t.currentTarget))&&this._handleScrollEvent():console.warn("event not handled",t)}_handleLayoutMessage(t){t.type==="stateChanged"?this._updateDOM(t):t.type==="visibilityChanged"?(this._firstVisible=t.firstVisible,this._lastVisible=t.lastVisible,this._notifyVisibility()):t.type==="unpinned"&&this._hostElement.dispatchEvent(new Yt)}get _children(){const t=[];let n=this._hostElement.firstElementChild;for(;n;)n.hasAttribute(zt)||t.push(n),n=n.nextElementSibling;return t}_updateView(){const t=this._hostElement,n=this._scrollerController?.element,i=this._layout;if(t&&n&&i){let s,o,r,l;const a=t.getBoundingClientRect();s=0,o=0,r=window.innerHeight,l=window.innerWidth;const c=this._clippingAncestors.map(m=>m.getBoundingClientRect());c.unshift(a);for(const m of c)s=Math.max(s,m.top),o=Math.max(o,m.left),r=Math.min(r,m.bottom),l=Math.min(l,m.right);const u=n.getBoundingClientRect(),h={left:a.left-u.left,top:a.top-u.top},f={width:n.scrollWidth,height:n.scrollHeight},d=s-a.top+t.scrollTop,g=o-a.left+t.scrollLeft,p=Math.max(0,r-s),b=Math.max(0,l-o);i.viewportSize={width:b,height:p},i.viewportScroll={top:d,left:g},i.totalScrollSize=f,i.offsetWithinScroller=h}}_sizeHostElement(t){const i=t&&t.width!==null?Math.min(82e5,t.width):0,s=t&&t.height!==null?Math.min(82e5,t.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${i}px, ${s}px)`;else{const o=this._hostElement.style;o.minWidth=i?`${i}px`:"100%",o.minHeight=s?`${s}px`:"100%"}}_positionChildren(t){t&&t.forEach(({top:n,left:i,width:s,height:o,xOffset:r,yOffset:l},a)=>{const c=this._children[a-this._first];c&&(c.style.position="absolute",c.style.boxSizing="border-box",c.style.transform=`translate(${i}px, ${n}px)`,s!==void 0&&(c.style.width=s+"px"),o!==void 0&&(c.style.height=o+"px"),c.style.left=r===void 0?null:r+"px",c.style.top=l===void 0?null:l+"px")})}async _adjustRange(t){const{_first:n,_last:i,_firstVisible:s,_lastVisible:o}=this;this._first=t.first,this._last=t.last,this._firstVisible=t.firstVisible,this._lastVisible=t.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==n||this._last!==i,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==s||this._lastVisible!==o}_correctScrollError(){if(this._scrollError){const{scrollTop:t,scrollLeft:n}=this._scrollerController,{top:i,left:s}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:t-i,left:n-s})}}element(t){return t===1/0&&(t=this._items.length-1),this._items?.[t]===void 0?void 0:{scrollIntoView:(n={})=>this._scrollElementIntoView({...n,index:t})}}_scrollElementIntoView(t){if(t.index>=this._first&&t.index<=this._last)this._children[t.index-this._first].scrollIntoView(t);else if(t.index=Math.min(t.index,this._items.length-1),t.behavior==="smooth"){const n=this._layout.getScrollIntoViewCoordinates(t),{behavior:i}=t;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(n,{behavior:i}),()=>this._layout.getScrollIntoViewCoordinates(t),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=t}else this._layout.pin=t}_checkScrollIntoViewTarget(t){const{index:n}=this._scrollIntoViewTarget||{};n&&t?.has(n)&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new Wt({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new Ut({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((t,n)=>{this._layoutCompleteResolver=t,this._layoutCompleteRejecter=n})),this._layoutCompletePromise}_rejectLayoutCompletePromise(t){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(t),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(t){if(this._layout?.measureChildren){for(const n of t)this._toBeMeasured.set(n.target,n.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}}function ds(e){const t=window.getComputedStyle(e);return{marginTop:$t(t.marginTop),marginRight:$t(t.marginRight),marginBottom:$t(t.marginBottom),marginLeft:$t(t.marginLeft)}}function $t(e){const t=e?parseFloat(e):NaN;return Number.isNaN(t)?0:t}function Me(e){if(e.assignedSlot!==null)return e.assignedSlot;if(e.parentElement!==null)return e.parentElement;const t=e.parentNode;return t&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host||null}function fs(e,t=!1){const n=[];let i=t?e:Me(e);for(;i!==null;)n.push(i),i=Me(i);return n}function ps(e,t=!1){let n=!1;return fs(e,t).filter(i=>{if(n)return!1;const s=getComputedStyle(i);return n=s.position==="fixed",s.overflow!=="visible"})}const ms=e=>e,gs=(e,t)=>S`${t}: ${JSON.stringify(e,null,2)}`;class bs extends se{constructor(t){if(super(t),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(n,i)=>gs(n,i+this._first),this._keyFunction=(n,i)=>ms(n,i+this._first),this._items=[],t.type!==W.CHILD)throw new Error("The virtualize directive can only be used in child expressions")}render(t){t&&this._setFunctions(t);const n=[];if(this._first>=0&&this._last>=this._first)for(let i=this._first;i<=this._last;i++)n.push(this._items[i]);return as(n,this._keyFunction,this._renderItem)}update(t,[n]){this._setFunctions(n);const i=this._items!==n.items;return this._items=n.items||[],this._virtualizer?this._updateVirtualizerConfig(t,n):this._initialize(t,n),i?B:this.render()}async _updateVirtualizerConfig(t,n){if(!await this._virtualizer.updateLayoutConfig(n.layout||{})){const s=t.parentNode;this._makeVirtualizer(s,n)}this._virtualizer.items=this._items}_setFunctions(t){const{renderItem:n,keyFunction:i}=t;n&&(this._renderItem=(s,o)=>n(s,o+this._first)),i&&(this._keyFunction=(s,o)=>i(s,o+this._first))}_makeVirtualizer(t,n){this._virtualizer&&this._virtualizer.disconnected();const{layout:i,scroller:s,items:o}=n;this._virtualizer=new hs({hostElement:t,layout:i,scroller:s}),this._virtualizer.items=o,this._virtualizer.connected()}_initialize(t,n){const i=t.parentNode;i&&i.nodeType===1&&(i.addEventListener("rangeChanged",s=>{this._first=s.first,this._last=s.last,this.setValue(this.render())}),this._makeVirtualizer(i,n))}disconnected(){this._virtualizer?.disconnected()}reconnected(){this._virtualizer?.connected()}}const vs=ct(bs),_s=(e=HTMLElement)=>class extends e{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent("connected"))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent("disconnected"))}},ys=(e,t)=>{if(!e||!t)return;const n=Object.keys(t);return Object.fromEntries(Object.keys(e).flatMap(i=>n.includes(i)?[]:[[i,void 0]]))};class ws extends yt{_props;render(t){return B}update(t,[n]){return this._props!==n&&Object.assign(t.element,ys(this._props,n),this._props=n),B}}const xs=ct(ws);function Cs(e){return()=>e}const Es=Cs(),Ss=Es,Mt=e=>e,_o=(e,...t)=>typeof e=="function"?e(...t):e,zs=e=>{const t=jt(),n=T(()=>new CSSStyleSheet,[]);$(()=>{t.shadowRoot.adoptedStyleSheets=[...t.shadowRoot.adoptedStyleSheets,n]},[]),$(()=>{n.replaceSync(e)},[e])};function fn(e){return e?t=>t?.[e]:Mt}const $s=e=>{const t=fn(e);return n=>typeof n=="string"?n:t(n)?.toString()||""},ks=e=>t=>{const n={};for(const i in t)e.includes(i)&&(n[i]=t[i]);return n},As="data:image/svg+xml,%3Csvg width='11' height='8' viewBox='0 0 11 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.5 1L5.20039 7.04766L1.66348 3.46152' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",Rs=ht`
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
		background: url("${As}") #5881f6 no-repeat 50%;
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
`,Ls=({index:e,itemHeight:t,auto:n})=>ht`
	${X(!n,()=>ht`
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
`,Ts=e=>{const t=e==="auto",[n,i]=J(t?40:e);return[n,s=>t?i(s):void 0]},Ct=e=>{const t=T(()=>({}),[]);return T(()=>Object.assign(t,e),[t,...Object.values(e)])},Os=e=>{const t=Ct(e);$(()=>{const n=i=>{if(!(i.ctrlKey&&i.altKey||i.defaultPrevented))switch(i.key){case"Up":case"ArrowUp":i.preventDefault(),t.onUp();break;case"Down":case"ArrowDown":i.preventDefault(),t.onDown();break;case"Enter":i.preventDefault(),t.onEnter();break}};return document.addEventListener("keydown",n,!0),()=>document.removeEventListener("keydown",n,!0)},[t])},Ms=({items:e,onSelect:t,defaultIndex:n=0})=>{const[i,s]=J({index:n}),{index:o}=i,{length:r}=e;return $(()=>{s({index:i.index<0?n:Math.min(i.index,e.length-1),scroll:!0})},[e,n]),Os({onUp:w(()=>s(l=>({index:l.index>0?l.index-1:r-1,scroll:!0})),[r]),onDown:w(()=>s(l=>({index:l.index<r-1?l.index+1:0,scroll:!0})),[r]),onEnter:w(()=>o>-1&&o<r&&t?.(e[o],o),[o,e,t])}),{position:i,highlight:w(l=>s({index:l}),[]),select:w(l=>t?.(l),[t])}},Ps=e=>typeof e=="object"&&e!==null&&Symbol.iterator in e;function at(e){return e==null?[]:Array.isArray(e)?e:typeof e=="string"?[e]:Ps(e)?Array.from(e):[e]}const Qt=(e,t=Mt)=>n=>{const i=at(e).map(t);return at(n).filter(s=>!i.includes(t(s)))},Ds=(e,t)=>t?n=>at(e).find(i=>i[t]===n[t]):n=>at(e).includes(n),Fs=(e,t)=>{if(!t||!e)return e;const n=e.toLowerCase().indexOf(t.toLowerCase());if(n<0)return e;const i=n+t.length;return[e.slice(0,n),S`<mark>${e.slice(n,i)}</mark>`,e.slice(i)]},Is=(e=Mt)=>(t,n,{highlight:i,select:s,textual:o=Mt,query:r,isSelected:l})=>{const a=o(t),c=Fs(a,r),u=e(c,t,n);return S`<div
				class="item"
				role="option"
				part="option"
				?aria-selected=${l(t)}
				data-index=${n}
				@mouseenter=${()=>i(n)}
				@click=${()=>s(t)}
				@mousedown=${h=>h.preventDefault()}
				title=${a}
			>
				${u}
			</div>
			<div class="sizer" virtualizer-sizer>${u}</div>`},Vs=({itemRenderer:e=Is(),...t})=>{const n=Ct(t);return w((i,s)=>e(i,s,n),[n,e])},Bs=["query","items","onSelect","textual","anchor","itemHeight","itemLimit","itemRenderer","defaultIndex","value","valueProperty","loading"],Ns=({value:e,valueProperty:t,items:n,onSelect:i,defaultIndex:s,query:o,textual:r,itemRenderer:l,itemHeight:a=40,itemLimit:c=5})=>{const u=T(()=>Ds(e,t),[e,t]),h=T(()=>n.slice(),[n,u]),{position:f,highlight:d,select:g}=Ms({items:h,onSelect:i,defaultIndex:isNaN(s)?void 0:Number(s)}),[p,b]=Ts(a);return{position:f,items:h,height:Math.min(c,h.length)*p,highlight:d,select:g,itemHeight:p,setItemHeight:b,renderItem:Vs({itemRenderer:l,items:h,position:f,highlight:d,select:g,textual:r,query:o,isSelected:u})}},Pe=Ss,Hs=e=>{const t=qe(void 0),{position:n,items:i,renderItem:s,height:o,itemHeight:r,setItemHeight:l}=Ns(e);return $(()=>{const a=t.current?.[ne];a&&a.layoutComplete.then(()=>{e.dispatchEvent(new CustomEvent("layout-complete"));const{averageChildSize:c,averageMarginSize:u}=a._layout._metricsCache;return l(c+u*2)},Pe)},[i]),$(()=>{if(!n.scroll)return;const a=t.current?.[ne];if(a){if(!a?._layout){a.layoutComplete.then(()=>a.element(n.index)?.scrollIntoView({block:"nearest"}),Pe);return}a.element(n.index)?.scrollIntoView({block:"nearest"})}},[n]),zs(Ls({...n,itemHeight:r,auto:e.itemHeight==="auto"})),S`<div
			class="items"
			style="min-height: ${o}px"
			${xt(a=>t.current=a)}
		>
			<div virtualizer-sizer></div>
			${vs({items:i,renderItem:s,scroller:!0})}
		</div>
		<slot></slot>`};customElements.define("cosmoz-listbox",_s(et(Hs,{styleSheets:[oe(Rs)]})));const js=({multi:e,setFloating:t,styles:n,...i},s)=>S`<cosmoz-listbox
		style="${Tn(n)}"
		@connected="${o=>o.target.showPopover?.()}"
		popover="manual"
		part="listbox"
		?multi=${e}
		${xt(t)}
		...=${xs(ks(Bs)(i))}
		>${s}</cosmoz-listbox
	>`,Ws=Pt`
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
`,Us=S`
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
`,Ys=({onClear:e,disabled:t})=>S`
	<div class="content" part="content chip-text"><slot></slot></div>
	${X(e&&!t,()=>S`<span
				class="clear"
				part="clear chip-clear"
				@mousedown=${n=>n.preventDefault()}
				@click=${e}
			>
				${Us}
			</span>`)}
`;customElements.define("cosmoz-autocomplete-chip",et(Ys,{observedAttributes:["disabled"],styleSheets:[oe(Ws)]}));const qs=({content:e,onClear:t,disabled:n,hidden:i,className:s="chip",slot:o})=>S`<cosmoz-autocomplete-chip
		class=${I(s)}
		slot=${I(o)}
		part="chip"
		exportparts="chip-text, chip-clear"
		?disabled=${n}
		?hidden=${i}
		.onClear=${t}
		title=${I(typeof e=="string"?e:void 0)}
		>${e}</cosmoz-autocomplete-chip
	>`,Gs=({value:e,min:t=0,onDeselect:n,textual:i,disabled:s,chipRenderer:o=qs})=>[...e.filter(Boolean).map(r=>o({item:r,content:i(r),onClear:e.length>t&&(()=>n(r)),disabled:s,slot:"control"})),o({item:null,content:S`<span></span>`,className:"badge",disabled:!0,slot:"control",hidden:!0})],Xs=ht`
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
`;customElements.define("cosmoz-autocomplete-skeleton-span",et(()=>vt,{styleSheets:[Xs]}));const Ks=Pt`
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
`,De=e=>e.matches(":focus-within"),Zs=({disabled:e,onFocus:t})=>{const[n,i]=J(),{focused:s,closed:o}=n||{},r=s&&!e,l=Ct({closed:o,onFocus:t}),a=w(u=>i(h=>({...h,closed:u})),[]),c=w(u=>{const h=u.currentTarget;return De(h)?i(f=>({focused:!0,closed:!f?.closed})):h.focus()},[]);return $(()=>{if(!r)return;const u=h=>{if(h.defaultPrevented)return;const{closed:f}=l;h.key==="Escape"&&!f?(h.preventDefault(),a(!0)):["ArrowUp","Up"].includes(h.key)&&f&&(h.preventDefault(),a(!1))};return document.addEventListener("keydown",u,!0),()=>document.removeEventListener("keydown",u,!0)},[r]),{focused:r,active:r&&!o,setClosed:a,onToggle:c,onFocus:w(u=>{const h=De(u.currentTarget);i({focused:h}),l.onFocus?.(h)},[l])}},ce=(e,t=()=>({}))=>{const n={type:e,toString(){return e}};return Object.assign((...s)=>Object.assign(t(...s),n),n)},Fe=e=>e.type||e.toString(),Ie=e=>Array.isArray(e)?e:[e],Qs=(e,t)=>{const n=Ie(t),i=(n.every(Array.isArray)?n:[n]).map(([s,o])=>({actions:Ie(s).map(Fe),handle:o}));return(s=e,o)=>{const r=i.find(l=>l.actions.includes(Fe(o)));return r?r.handle(s,o):s}},ot={pending:"pending",rejected:"rejected",resolved:"resolved"},pn={error:void 0,result:void 0,state:ot.pending},mn=ce(ot.pending),gn=ce(ot.resolved,e=>({result:e})),bn=ce(ot.rejected,e=>({error:e})),Js=Qs(pn,[[mn,()=>({error:void 0,result:void 0,state:ot.pending})],[gn,(e,{result:t})=>({error:void 0,result:t,state:ot.resolved})],[bn,(e,{error:t})=>({error:t,result:void 0,state:ot.rejected})]]),to=e=>{const[{error:t,result:n,state:i},s]=qn(Js,pn);return $(()=>{if(!e)return;let o=!1;return s(mn()),e.then(r=>!o&&s(gn(r)),r=>!o&&s(bn(r))),()=>{o=!0}},[e]),[n,t,i]},eo=({focused:e,empty:t,...n})=>{const i=e&&t&&n.limit!==1,s=Ct(n);$(()=>{if(!i)return;const o=r=>{if(r.defaultPrevented)return;const{key:l}=r,a=at(s.value),c=s.limit==1;if(a.length>0&&(l==="Backspace"||c&&l.length===1))return s.onChange(a.slice(0,-1))};return document.addEventListener("keydown",o,!0),()=>document.removeEventListener("keydown",o,!0)},[i,s])},Ve=e=>e.normalize("NFD").replace(/[\u0300-\u036f]/gu,""),no=(e,t,n)=>{if(!t)return e;const i=Ve(t.toLowerCase()),s=[];for(const o of e){const l=Ve(n(o).toLowerCase()).indexOf(i);l<0||s.push({item:o,index:l})}return s.sort((o,r)=>o.index-r.index).map(({item:o})=>o)},io=e=>e===!1||e==null?[]:e,vn=(e,t,n)=>e.dispatchEvent(new CustomEvent(t,{detail:n})),so=(e,t,n)=>w(i=>{t?.(i),vn(e,n,i)},[t]),oo=[],ro=e=>(...t)=>{let n;const i=()=>{n&&cancelAnimationFrame(n)};return i(),n=requestAnimationFrame(()=>{n=void 0,e(...t)}),i},lo=({value:e,text:t,onChange:n,onText:i,onSelect:s,limit:o,min:r,source:l,textProperty:a,textual:c,valueProperty:u,keepOpened:h,keepQuery:f,preserveOrder:d,defaultIndex:g,externalSearch:p,...b})=>{const m=T(()=>(c??$s)(a),[c,a]),{active:v,focused:_,onFocus:y,setClosed:x}=Zs(b),E=!t,z=T(()=>t?.trim(),[t]),R=jt(),k=so(R,i,"text"),A=w(C=>{n?.(C,()=>x(!0)),vn(R,"value",C)},[n]),[V,G]=J([]),F=T(()=>Promise.resolve(typeof l=="function"?l({query:z,active:v}):l).then(io),[l,v,z]),L=T(()=>at(e),[e]);$(()=>F.then(G),[F]),eo({focused:_,empty:E,limit:o,value:L,onChange:A,onText:k}),$(()=>{!_&&!f&&k("")},[_,f]);const O=Ct({onText:k,onChange:A,value:L,limit:o,min:r,keepQuery:f,keepOpened:h,setClosed:x,onSelect:s}),[,,nt]=to(F);return{active:v,query:z,textual:m,value:L,source$:F,loading:nt==="pending",items:T(()=>{if(!v)return oo;const C=d?V:[...L,...Qt(L,fn(u))(V)];return p?C:no(C,z,m)},[V,v,z,m,E,L,d,u,p]),onClick:w(()=>x(!1),[]),onFocus:y,onText:w(C=>{k(C.target.value),x(!1)},[k,t,x]),onSelect:w(C=>{O.onSelect?.(C,O);const{onChange:M,onText:j,limit:qt,min:xn,value:Cn,keepQuery:En,keepOpened:Sn,setClosed:zn}=O;En||j(""),Sn||zn(!0);const Et=at(Cn),ue=Et.includes(C);ue&&Et.length===xn||M((ue?Qt(C)(Et):[...Et,C]).slice(-qt))},[O]),onDeselect:w(C=>O.onChange(Qt(C)(O.value)),[O]),defaultIndex:z!==void 0&&z?.length>0?0:g}},ao=e=>{const t=e.shadowRoot.querySelectorAll(".chip"),n=e.shadowRoot.querySelector(".badge");n.hidden=!0;for(const l of t)l.hidden=!1;const s=e.shadowRoot.querySelector("cosmoz-input").shadowRoot?.querySelector(".control")?.getBoundingClientRect();let o;for(o=0;o<t.length;o++){const a=t[o].getBoundingClientRect();if(!(a.x+a.width<=s.x+s.width-24))break}const r=t.length-o;for(n.querySelector("span").textContent="+"+r.toString(),n.hidden=r<1;o<t.length;o++)t[o].hidden=!0},co=({value:e,active:t,wrap:n,limit:i})=>{const s=jt(),o=!(n||i==1),r=T(()=>ro(()=>ao(s)),[]),[l,a]=J(0);ge(()=>{if(!o)return;const c=s.shadowRoot.querySelector("cosmoz-input"),u=new ResizeObserver(h=>{a(h[0].contentRect.width)});return u.observe(c),()=>u.disconnect()},[o]),ge(()=>o?r():void 0,[o,l,t,e])},uo=["input","control","label","line","error","wrap"].map(e=>`${e}: input-${e}`).join(),ho=[Wi({apply({rects:e,elements:t}){Object.assign(t.floating.style,{minWidth:`${Math.max(e.reference.width,e.floating.width)}px`})}}),...ln],fo=({active:e,isSingle:t,showSingle:n})=>e?!(t&&!n):!1,po=e=>{const{active:t,invalid:n,errorMessage:i,label:s,placeholder:o,disabled:r,noLabelFloat:l,alwaysFloatLabel:a,textual:c,text:u,onText:h,onFocus:f,onClick:d,onDeselect:g,value:p,limit:b,min:m,showSingle:v,items:_,source$:y,placement:x,loading:E,chipRenderer:z}=e,R=jt(),k=b==1,A=k&&p?.[0]!=null,{styles:V,setReference:G,setFloating:F}=Yi({placement:x,middleware:ho});$(()=>(R.addEventListener("focusin",f),R.addEventListener("focusout",f),()=>{R.removeEventListener("focusin",f),R.removeEventListener("focusout",f)}),[f]),an({focus:()=>R.shadowRoot?.querySelector("#input")?.focus()},[]);const L=E||_.length>0||u!=null&&u.length>0;return S`<cosmoz-input
				id="input"
				part="input"
				${xt(G)}
				.label=${s}
				.placeholder=${A?void 0:o}
				?no-label-float=${l}
				?always-float-label=${p?.length>0||a}
				?readonly=${A}
				?disabled=${r}
				?invalid=${Re(y.then(()=>n,()=>!0),n)}
				.errorMessage=${Re(y.then(()=>i,O=>O.message),i)}
				.value=${Ht(u)}
				@value-changed=${h}
				@click=${d}
				autocomplete="off"
				exportparts=${uo}
				?data-one=${k}
				?data-single=${A}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix"></slot>
				${Gs({value:p,min:m,onDeselect:g,textual:c,disabled:r,chipRenderer:z})}
			</cosmoz-input>

			${X(fo({active:t,isSingle:A,showSingle:v}),()=>js({...e,items:_,multi:!k,setFloating:F,styles:{...V,display:L?void 0:"none"}},X(E,()=>S`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>X(u!=null&&u.length>0&&_.length===0,()=>S`<slot name="no-result"></slot>`))))}`},_n=e=>{const t={...e,...lo(e)};return co(t),po(t)},yn=["disabled","invalid","no-label-float","always-float-label","text-property","value-property","limit","min","show-single","preserve-order","keep-opened","keep-query","default-index","external-search","item-height","item-limit","wrap"],mo=e=>{const{onChange:t,onText:n,...i}=e,[s,o]=Xn("value");return $(()=>{e.onChange!=null&&console.warn("onChange is deprecated; use value-changed and lift instead")},[]),_n({...i,value:s,onChange:w((r,...l)=>{o(r),t?.(r,...l)},[t]),onText:w(r=>{e.text=r,n?.(r)},[n])})},wn=[oe(Ks)];customElements.define("cosmoz-autocomplete-ui",et(_n,{observedAttributes:yn,styleSheets:wn}));customElements.define("cosmoz-autocomplete",et(mo,{observedAttributes:yn,styleSheets:wn}));const yo=["Red","Green","Purple","Blue","White","Brown","Aqua","Nothing"].map(e=>({text:e}));export{_n as A,w as a,et as b,ht as c,T as d,I as e,yo as f,Tn as g,_o as i,X as n,yn as o,Ks as s,Xn as u};
