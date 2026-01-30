import{E as U,r as gs,D as sn,A as $t,p as ms,b as R,n as nn,M as on,u as at,v as wt,h as ce,_ as rn}from"./iframe-w-dCdsUq.js";const J={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},ft=s=>(...t)=>({_$litDirective$:s,values:t});let kt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};const bs="important",an=" !"+bs,ln=ft(class extends kt{constructor(s){if(super(s),s.type!==J.ATTRIBUTE||s.name!=="style"||s.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(s){return Object.keys(s).reduce((t,e)=>{const n=s[e];return n==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(s,[t]){const{style:e}=s.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const n of this.ft)t[n]==null&&(this.ft.delete(n),n.includes("-")?e.removeProperty(n):e[n]=null);for(const n in t){const i=t[n];if(i!=null){this.ft.add(n);const o=typeof i=="string"&&i.endsWith(an);n.includes("-")||o?e.setProperty(n,o?i.slice(0,-11):i,o?bs:""):e[n]=i}}return U}});function tt(s,t,e){return s?t(s):e?.(s)}let Vt,ys=0;function ke(s){Vt=s}function Re(){Vt=null,ys=0}function cn(){return ys++}const ue=Symbol("haunted.phase"),Dt=Symbol("haunted.hook"),ze=Symbol("haunted.update"),Ae=Symbol("haunted.commit"),lt=Symbol("haunted.effects"),St=Symbol("haunted.layoutEffects"),me="haunted.context";class un{update;host;virtual;[Dt];[lt];[St];constructor(t,e){this.update=t,this.host=e,this[Dt]=new Map,this[lt]=[],this[St]=[]}run(t){ke(this);let e=t();return Re(),e}_runEffects(t){let e=this[t];ke(this);for(let n of e)n.call(this);Re()}runEffects(){this._runEffects(lt)}runLayoutEffects(){this._runEffects(St)}teardown(){this[Dt].forEach(e=>{typeof e.teardown=="function"&&e.teardown(!0)})}}const hn=Promise.resolve().then.bind(Promise.resolve());function vs(){let s=[],t;function e(){t=null;let n=s;s=[];for(var i=0,o=n.length;i<o;i++)n[i]()}return function(n){s.push(n),t==null&&(t=hn(e))}}const dn=vs(),Pe=vs();class fn{renderer;host;state;[ue];_updateQueued;_active;constructor(t,e){this.renderer=t,this.host=e,this.state=new un(this.update.bind(this),e),this[ue]=null,this._updateQueued=!1,this._active=!0}update(){this._active&&(this._updateQueued||(dn(()=>{let t=this.handlePhase(ze);Pe(()=>{this.handlePhase(Ae,t),Pe(()=>{this.handlePhase(lt)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(t,e){switch(this[ue]=t,t){case Ae:this.commit(e),this.runEffects(St);return;case ze:return this.render();case lt:return this.runEffects(lt)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(t){this.state._runEffects(t)}teardown(){this.state.teardown()}pause(){this._active=!1}resume(){this._active=!0}}const we=(...s)=>{const t=new CSSStyleSheet;return t.replaceSync(s.join("")),t},pn=s=>s?.map(t=>typeof t=="string"?we(t):t),gn=(s,...t)=>s.flatMap((e,n)=>[e,t[n]||""]).join(""),bt=gn,mn=(s="")=>s.replace(/-+([a-z])?/g,(t,e)=>e?e.toUpperCase():"");function bn(s){class t extends fn{frag;renderResult;constructor(i,o,r){super(i,r||o),this.frag=o}commit(i){this.renderResult=s(i,this.frag)}}function e(n,i,o){const r=(o||i||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:l=!0,shadowRootInit:c={},styleSheets:u}=o||i||{},d=pn(n.styleSheets||u);class h extends r{_scheduler;static get observedAttributes(){return n.observedAttributes||a||[]}constructor(){if(super(),l===!1)this._scheduler=new t(n,this);else{const m=this.attachShadow({mode:"open",...c});d&&(m.adoptedStyleSheets=d),this._scheduler=new t(n,m,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(m,b,y){if(b===y)return;let v=y===""?!0:y;Reflect.set(this,mn(m),v)}}function f(g){let m=g,b=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return m},set(y){b&&m===y||(b=!0,m=y,this._scheduler&&this._scheduler.update())}})}const p=new Proxy(r.prototype,{getPrototypeOf(g){return g},set(g,m,b,y){let v;return m in g?(v=Object.getOwnPropertyDescriptor(g,m),v&&v.set?(v.set.call(y,b),!0):(Reflect.set(g,m,b,y),!0)):(typeof m=="symbol"||m[0]==="_"?v={enumerable:!0,configurable:!0,writable:!0,value:b}:v=f(b),Object.defineProperty(y,m,v),v.set&&v.set.call(y,b),!0)}});return Object.setPrototypeOf(h.prototype,p),h}return e}class et{id;state;constructor(t,e){this.id=t,this.state=e}}function yn(s,...t){let e=cn(),n=Vt[Dt],i=n.get(e);return i||(i=new s(e,Vt,...t),n.set(e,i)),i.update(...t)}function st(s){return yn.bind(null,s)}function xs(s){return st(class extends et{callback;lastValues;values;_teardown;constructor(t,e,n,i){super(t,e),s(e,this)}update(t,e){this.callback=t,this.values=e}call(){const t=!this.values||this.hasChanged();this.lastValues=this.values,t&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(t){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),t&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((t,e)=>this.lastValues[e]!==t)}})}function ws(s,t){s[lt].push(t)}const N=xs(ws),vn=s=>s instanceof Element?s:s.startNode||s.endNode||s.parentNode,xn=st(class extends et{Context;value;_ranEffect;_unsubscribe;constructor(s,t,e){super(s,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,ws(t,this)}update(s){return this.Context!==s&&(this._subscribe(s),this.Context=s),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(s){this.value=s,this.state.update()}_subscribe(s){const t={Context:s,callback:this._updater};vn(this.state.host).dispatchEvent(new CustomEvent(me,{detail:t,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:n=null,value:i}=t;this.value=n?i:s.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}});function wn(s){return t=>{const e={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(me,this)}disconnectedCallback(){this.removeEventListener(me,this)}handleEvent(n){const{detail:i}=n;i.Context===e&&(i.value=this.value,i.unsubscribe=this.unsubscribe.bind(this,i.callback),this.listeners.add(i.callback),n.stopPropagation())}unsubscribe(n){this.listeners.delete(n)}set value(n){this._value=n;for(let i of this.listeners)i(n)}get value(){return this._value}},Consumer:s(function({render:n}){const i=xn(e);return n(i)},{useShadowDOM:!1}),defaultValue:t};return e}}const I=st(class extends et{value;values;constructor(s,t,e,n){super(s,t),this.value=e(),this.values=n}update(s,t){return this.hasChanged(t)&&(this.values=t,this.value=s()),this.value}hasChanged(s=[]){return s.some((t,e)=>this.values[e]!==t)}}),L=(s,t)=>I(()=>s,t);function _n(s,t){s[St].push(t)}const Te=xs(_n),it=st(class extends et{args;constructor(s,t,e){super(s,t),this.updater=this.updater.bind(this),typeof e=="function"&&(e=e()),this.makeArgs(e)}update(){return this.args}updater(s){const[t]=this.args;typeof s=="function"&&(s=s(t)),!Object.is(t,s)&&(this.makeArgs(s),this.state.update())}makeArgs(s){this.args=Object.freeze([s,this.updater])}}),Sn=st(class extends et{reducer;currentState;constructor(s,t,e,n,i){super(s,t),this.dispatch=this.dispatch.bind(this),this.currentState=i!==void 0?i(n):n}update(s){return this.reducer=s,[this.currentState,this.dispatch]}dispatch(s){this.currentState=this.reducer(this.currentState,s),this.state.update()}}),Cn=/([A-Z])/gu,En=st(class extends et{property;eventName;constructor(s,t,e,n){if(super(s,t),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=e,this.eventName=e.replace(Cn,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof n=="function"&&(n=n()),n!=null&&this.updateProp(n))}update(s,t){return[this.state.host[this.property],this.updater]}updater(s){const t=this.state.host[this.property];typeof s=="function"&&(s=s(t)),!Object.is(t,s)&&this.updateProp(s)}updateProp(s){this.notify(s).defaultPrevented||(this.state.host[this.property]=s)}notify(s){const t=new CustomEvent(this.eventName,{detail:{value:s,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(t),t}});function _s(s){return I(()=>({current:s}),[])}st(class extends et{update(){return this.state.host}});function $n({render:s}){const t=bn(s),e=wn(t);return{component:t,createContext:e}}const Ct=(s,t)=>{const e=s._$AN;if(e===void 0)return!1;for(const n of e)n._$AO?.(t,!1),Ct(n,t);return!0},jt=s=>{let t,e;do{if((t=s._$AM)===void 0)break;e=t._$AN,e.delete(s),s=t}while(e?.size===0)},Ss=s=>{for(let t;t=s._$AM;s=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(s))break;e.add(s),kn(t)}};function Ln(s){this._$AN!==void 0?(jt(this),this._$AM=s,Ss(this)):this._$AM=s}function On(s,t=!1,e=0){const n=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(n))for(let o=e;o<n.length;o++)Ct(n[o],!1),jt(n[o]);else n!=null&&(Ct(n,!1),jt(n));else Ct(this,s)}const kn=s=>{s.type==J.CHILD&&(s._$AP??=On,s._$AQ??=Ln)};class _e extends kt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,n){super._$AT(t,e,n),Ss(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(Ct(this,t),jt(this))}setValue(t){if(gs(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}const{component:rt}=$n({render:sn});const H=s=>s??$t,qt=(s,...t)=>s.flatMap((e,n)=>[e,t[n]??""]).join(""),Se=(...s)=>{const t=new CSSStyleSheet;return t.replaceSync(s.join("")),t},yt=Math.min,V=Math.max,Bt=Math.round,Nt=Math.floor,q=s=>({x:s,y:s}),Rn={left:"right",right:"left",bottom:"top",top:"bottom"},zn={start:"end",end:"start"};function Ne(s,t,e){return V(s,yt(t,e))}function Qt(s,t){return typeof s=="function"?s(t):s}function ut(s){return s.split("-")[0]}function Xt(s){return s.split("-")[1]}function Cs(s){return s==="x"?"y":"x"}function Es(s){return s==="y"?"height":"width"}const An=new Set(["top","bottom"]);function nt(s){return An.has(ut(s))?"y":"x"}function $s(s){return Cs(nt(s))}function Pn(s,t,e){e===void 0&&(e=!1);const n=Xt(s),i=$s(s),o=Es(i);let r=i==="x"?n===(e?"end":"start")?"right":"left":n==="start"?"bottom":"top";return t.reference[o]>t.floating[o]&&(r=Ht(r)),[r,Ht(r)]}function Tn(s){const t=Ht(s);return[be(s),t,be(t)]}function be(s){return s.replace(/start|end/g,t=>zn[t])}const Fe=["left","right"],Ie=["right","left"],Nn=["top","bottom"],Fn=["bottom","top"];function In(s,t,e){switch(s){case"top":case"bottom":return e?t?Ie:Fe:t?Fe:Ie;case"left":case"right":return t?Nn:Fn;default:return[]}}function Mn(s,t,e,n){const i=Xt(s);let o=In(ut(s),e==="start",n);return i&&(o=o.map(r=>r+"-"+i),t&&(o=o.concat(o.map(be)))),o}function Ht(s){return s.replace(/left|right|bottom|top/g,t=>Rn[t])}function Dn(s){return{top:0,right:0,bottom:0,left:0,...s}}function Vn(s){return typeof s!="number"?Dn(s):{top:s,right:s,bottom:s,left:s}}function Ut(s){const{x:t,y:e,width:n,height:i}=s;return{width:n,height:i,top:e,left:t,right:t+n,bottom:e+i,x:t,y:e}}function Me(s,t,e){let{reference:n,floating:i}=s;const o=nt(t),r=$s(t),a=Es(r),l=ut(t),c=o==="y",u=n.x+n.width/2-i.width/2,d=n.y+n.height/2-i.height/2,h=n[a]/2-i[a]/2;let f;switch(l){case"top":f={x:u,y:n.y-i.height};break;case"bottom":f={x:u,y:n.y+n.height};break;case"right":f={x:n.x+n.width,y:d};break;case"left":f={x:n.x-i.width,y:d};break;default:f={x:n.x,y:n.y}}switch(Xt(t)){case"start":f[r]-=h*(e&&c?-1:1);break;case"end":f[r]+=h*(e&&c?-1:1);break}return f}async function jn(s,t){var e;t===void 0&&(t={});const{x:n,y:i,platform:o,rects:r,elements:a,strategy:l}=s,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:h=!1,padding:f=0}=Qt(t,s),p=Vn(f),m=a[h?d==="floating"?"reference":"floating":d],b=Ut(await o.getClippingRect({element:(e=await(o.isElement==null?void 0:o.isElement(m)))==null||e?m:m.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(a.floating)),boundary:c,rootBoundary:u,strategy:l})),y=d==="floating"?{x:n,y:i,width:r.floating.width,height:r.floating.height}:r.reference,v=await(o.getOffsetParent==null?void 0:o.getOffsetParent(a.floating)),x=await(o.isElement==null?void 0:o.isElement(v))?await(o.getScale==null?void 0:o.getScale(v))||{x:1,y:1}:{x:1,y:1},_=Ut(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:y,offsetParent:v,strategy:l}):y);return{top:(b.top-_.top+p.top)/x.y,bottom:(_.bottom-b.bottom+p.bottom)/x.y,left:(b.left-_.left+p.left)/x.x,right:(_.right-b.right+p.right)/x.x}}const Bn=async(s,t,e)=>{const{placement:n="bottom",strategy:i="absolute",middleware:o=[],platform:r}=e,a=o.filter(Boolean),l=await(r.isRTL==null?void 0:r.isRTL(t));let c=await r.getElementRects({reference:s,floating:t,strategy:i}),{x:u,y:d}=Me(c,n,l),h=n,f={},p=0;for(let m=0;m<a.length;m++){var g;const{name:b,fn:y}=a[m],{x:v,y:x,data:_,reset:C}=await y({x:u,y:d,initialPlacement:n,placement:h,strategy:i,middlewareData:f,rects:c,platform:{...r,detectOverflow:(g=r.detectOverflow)!=null?g:jn},elements:{reference:s,floating:t}});u=v??u,d=x??d,f={...f,[b]:{...f[b],..._}},C&&p<=50&&(p++,typeof C=="object"&&(C.placement&&(h=C.placement),C.rects&&(c=C.rects===!0?await r.getElementRects({reference:s,floating:t,strategy:i}):C.rects),{x:u,y:d}=Me(c,h,l)),m=-1)}return{x:u,y:d,placement:h,strategy:i,middlewareData:f}},Hn=function(s){return s===void 0&&(s={}),{name:"flip",options:s,async fn(t){var e,n;const{placement:i,middlewareData:o,rects:r,initialPlacement:a,platform:l,elements:c}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:h,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:g=!0,...m}=Qt(s,t);if((e=o.arrow)!=null&&e.alignmentOffset)return{};const b=ut(i),y=nt(a),v=ut(a)===a,x=await(l.isRTL==null?void 0:l.isRTL(c.floating)),_=h||(v||!g?[Ht(a)]:Tn(a)),C=p!=="none";!h&&C&&_.push(...Mn(a,g,p,x));const S=[a,..._],k=await l.detectOverflow(t,m),A=[];let z=((n=o.flip)==null?void 0:n.overflows)||[];if(u&&A.push(k[b]),d){const O=Pn(i,r,x);A.push(k[O[0]],k[O[1]])}if(z=[...z,{placement:i,overflows:A}],!A.every(O=>O<=0)){var F,Y;const O=(((F=o.flip)==null?void 0:F.index)||0)+1,P=S[O];if(P&&(!(d==="alignment"?y!==nt(P):!1)||z.every(E=>nt(E.placement)===y?E.overflows[0]>0:!0)))return{data:{index:O,overflows:z},reset:{placement:P}};let B=(Y=z.filter($=>$.overflows[0]<=0).sort(($,E)=>$.overflows[1]-E.overflows[1])[0])==null?void 0:Y.placement;if(!B)switch(f){case"bestFit":{var D;const $=(D=z.filter(E=>{if(C){const T=nt(E.placement);return T===y||T==="y"}return!0}).map(E=>[E.placement,E.overflows.filter(T=>T>0).reduce((T,Z)=>T+Z,0)]).sort((E,T)=>E[1]-T[1])[0])==null?void 0:D[0];$&&(B=$);break}case"initialPlacement":B=a;break}if(i!==B)return{reset:{placement:B}}}return{}}}},Un=function(s){return s===void 0&&(s={}),{name:"shift",options:s,async fn(t){const{x:e,y:n,placement:i,platform:o}=t,{mainAxis:r=!0,crossAxis:a=!1,limiter:l={fn:b=>{let{x:y,y:v}=b;return{x:y,y:v}}},...c}=Qt(s,t),u={x:e,y:n},d=await o.detectOverflow(t,c),h=nt(ut(i)),f=Cs(h);let p=u[f],g=u[h];if(r){const b=f==="y"?"top":"left",y=f==="y"?"bottom":"right",v=p+d[b],x=p-d[y];p=Ne(v,p,x)}if(a){const b=h==="y"?"top":"left",y=h==="y"?"bottom":"right",v=g+d[b],x=g-d[y];g=Ne(v,g,x)}const m=l.fn({...t,[f]:p,[h]:g});return{...m,data:{x:m.x-e,y:m.y-n,enabled:{[f]:r,[h]:a}}}}}},Kn=function(s){return s===void 0&&(s={}),{name:"size",options:s,async fn(t){var e,n;const{placement:i,rects:o,platform:r,elements:a}=t,{apply:l=()=>{},...c}=Qt(s,t),u=await r.detectOverflow(t,c),d=ut(i),h=Xt(i),f=nt(i)==="y",{width:p,height:g}=o.floating;let m,b;d==="top"||d==="bottom"?(m=d,b=h===(await(r.isRTL==null?void 0:r.isRTL(a.floating))?"start":"end")?"left":"right"):(b=d,m=h==="end"?"top":"bottom");const y=g-u.top-u.bottom,v=p-u.left-u.right,x=yt(g-u[m],y),_=yt(p-u[b],v),C=!t.middlewareData.shift;let S=x,k=_;if((e=t.middlewareData.shift)!=null&&e.enabled.x&&(k=v),(n=t.middlewareData.shift)!=null&&n.enabled.y&&(S=y),C&&!h){const z=V(u.left,0),F=V(u.right,0),Y=V(u.top,0),D=V(u.bottom,0);f?k=p-2*(z!==0||F!==0?z+F:V(u.left,u.right)):S=g-2*(Y!==0||D!==0?Y+D:V(u.top,u.bottom))}await l({...t,availableWidth:k,availableHeight:S});const A=await r.getDimensions(a.floating);return p!==A.width||g!==A.height?{reset:{rects:!0}}:{}}}};function Zt(){return typeof window<"u"}function xt(s){return Ls(s)?(s.nodeName||"").toLowerCase():"#document"}function j(s){var t;return(s==null||(t=s.ownerDocument)==null?void 0:t.defaultView)||window}function X(s){var t;return(t=(Ls(s)?s.ownerDocument:s.document)||window.document)==null?void 0:t.documentElement}function Ls(s){return Zt()?s instanceof Node||s instanceof j(s).Node:!1}function K(s){return Zt()?s instanceof Element||s instanceof j(s).Element:!1}function Q(s){return Zt()?s instanceof HTMLElement||s instanceof j(s).HTMLElement:!1}function De(s){return!Zt()||typeof ShadowRoot>"u"?!1:s instanceof ShadowRoot||s instanceof j(s).ShadowRoot}const Wn=new Set(["inline","contents"]);function Rt(s){const{overflow:t,overflowX:e,overflowY:n,display:i}=W(s);return/auto|scroll|overlay|hidden|clip/.test(t+n+e)&&!Wn.has(i)}const Yn=new Set(["table","td","th"]);function Jn(s){return Yn.has(xt(s))}const Gn=[":popover-open",":modal"];function te(s){return Gn.some(t=>{try{return s.matches(t)}catch{return!1}})}const qn=["transform","translate","scale","rotate","perspective"],Qn=["transform","translate","scale","rotate","perspective","filter"],Xn=["paint","layout","strict","content"];function Ce(s){const t=Ee(),e=K(s)?W(s):s;return qn.some(n=>e[n]?e[n]!=="none":!1)||(e.containerType?e.containerType!=="normal":!1)||!t&&(e.backdropFilter?e.backdropFilter!=="none":!1)||!t&&(e.filter?e.filter!=="none":!1)||Qn.some(n=>(e.willChange||"").includes(n))||Xn.some(n=>(e.contain||"").includes(n))}function Zn(s){let t=ot(s);for(;Q(t)&&!vt(t);){if(Ce(t))return t;if(te(t))return null;t=ot(t)}return null}function Ee(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const ti=new Set(["html","body","#document"]);function vt(s){return ti.has(xt(s))}function W(s){return j(s).getComputedStyle(s)}function ee(s){return K(s)?{scrollLeft:s.scrollLeft,scrollTop:s.scrollTop}:{scrollLeft:s.scrollX,scrollTop:s.scrollY}}function ot(s){if(xt(s)==="html")return s;const t=s.assignedSlot||s.parentNode||De(s)&&s.host||X(s);return De(t)?t.host:t}function Os(s){const t=ot(s);return vt(t)?s.ownerDocument?s.ownerDocument.body:s.body:Q(t)&&Rt(t)?t:Os(t)}function Lt(s,t,e){var n;t===void 0&&(t=[]),e===void 0&&(e=!0);const i=Os(s),o=i===((n=s.ownerDocument)==null?void 0:n.body),r=j(i);if(o){const a=ye(r);return t.concat(r,r.visualViewport||[],Rt(i)?i:[],a&&e?Lt(a):[])}return t.concat(i,Lt(i,[],e))}function ye(s){return s.parent&&Object.getPrototypeOf(s.parent)?s.frameElement:null}function ks(s){const t=W(s);let e=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const i=Q(s),o=i?s.offsetWidth:e,r=i?s.offsetHeight:n,a=Bt(e)!==o||Bt(n)!==r;return a&&(e=o,n=r),{width:e,height:n,$:a}}function $e(s){return K(s)?s:s.contextElement}function mt(s){const t=$e(s);if(!Q(t))return q(1);const e=t.getBoundingClientRect(),{width:n,height:i,$:o}=ks(t);let r=(o?Bt(e.width):e.width)/n,a=(o?Bt(e.height):e.height)/i;return(!r||!Number.isFinite(r))&&(r=1),(!a||!Number.isFinite(a))&&(a=1),{x:r,y:a}}const ei=q(0);function Rs(s){const t=j(s);return!Ee()||!t.visualViewport?ei:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function si(s,t,e){return t===void 0&&(t=!1),!e||t&&e!==j(s)?!1:t}function ht(s,t,e,n){t===void 0&&(t=!1),e===void 0&&(e=!1);const i=s.getBoundingClientRect(),o=$e(s);let r=q(1);t&&(n?K(n)&&(r=mt(n)):r=mt(s));const a=si(o,e,n)?Rs(o):q(0);let l=(i.left+a.x)/r.x,c=(i.top+a.y)/r.y,u=i.width/r.x,d=i.height/r.y;if(o){const h=j(o),f=n&&K(n)?j(n):n;let p=h,g=ye(p);for(;g&&n&&f!==p;){const m=mt(g),b=g.getBoundingClientRect(),y=W(g),v=b.left+(g.clientLeft+parseFloat(y.paddingLeft))*m.x,x=b.top+(g.clientTop+parseFloat(y.paddingTop))*m.y;l*=m.x,c*=m.y,u*=m.x,d*=m.y,l+=v,c+=x,p=j(g),g=ye(p)}}return Ut({width:u,height:d,x:l,y:c})}function se(s,t){const e=ee(s).scrollLeft;return t?t.left+e:ht(X(s)).left+e}function zs(s,t){const e=s.getBoundingClientRect(),n=e.left+t.scrollLeft-se(s,e),i=e.top+t.scrollTop;return{x:n,y:i}}function ni(s){let{elements:t,rect:e,offsetParent:n,strategy:i}=s;const o=i==="fixed",r=X(n),a=t?te(t.floating):!1;if(n===r||a&&o)return e;let l={scrollLeft:0,scrollTop:0},c=q(1);const u=q(0),d=Q(n);if((d||!d&&!o)&&((xt(n)!=="body"||Rt(r))&&(l=ee(n)),Q(n))){const f=ht(n);c=mt(n),u.x=f.x+n.clientLeft,u.y=f.y+n.clientTop}const h=r&&!d&&!o?zs(r,l):q(0);return{width:e.width*c.x,height:e.height*c.y,x:e.x*c.x-l.scrollLeft*c.x+u.x+h.x,y:e.y*c.y-l.scrollTop*c.y+u.y+h.y}}function ii(s){return Array.from(s.getClientRects())}function oi(s){const t=X(s),e=ee(s),n=s.ownerDocument.body,i=V(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),o=V(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let r=-e.scrollLeft+se(s);const a=-e.scrollTop;return W(n).direction==="rtl"&&(r+=V(t.clientWidth,n.clientWidth)-i),{width:i,height:o,x:r,y:a}}const Ve=25;function ri(s,t){const e=j(s),n=X(s),i=e.visualViewport;let o=n.clientWidth,r=n.clientHeight,a=0,l=0;if(i){o=i.width,r=i.height;const u=Ee();(!u||u&&t==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}const c=se(n);if(c<=0){const u=n.ownerDocument,d=u.body,h=getComputedStyle(d),f=u.compatMode==="CSS1Compat"&&parseFloat(h.marginLeft)+parseFloat(h.marginRight)||0,p=Math.abs(n.clientWidth-d.clientWidth-f);p<=Ve&&(o-=p)}else c<=Ve&&(o+=c);return{width:o,height:r,x:a,y:l}}const ai=new Set(["absolute","fixed"]);function li(s,t){const e=ht(s,!0,t==="fixed"),n=e.top+s.clientTop,i=e.left+s.clientLeft,o=Q(s)?mt(s):q(1),r=s.clientWidth*o.x,a=s.clientHeight*o.y,l=i*o.x,c=n*o.y;return{width:r,height:a,x:l,y:c}}function je(s,t,e){let n;if(t==="viewport")n=ri(s,e);else if(t==="document")n=oi(X(s));else if(K(t))n=li(t,e);else{const i=Rs(s);n={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return Ut(n)}function As(s,t){const e=ot(s);return e===t||!K(e)||vt(e)?!1:W(e).position==="fixed"||As(e,t)}function ci(s,t){const e=t.get(s);if(e)return e;let n=Lt(s,[],!1).filter(a=>K(a)&&xt(a)!=="body"),i=null;const o=W(s).position==="fixed";let r=o?ot(s):s;for(;K(r)&&!vt(r);){const a=W(r),l=Ce(r);!l&&a.position==="fixed"&&(i=null),(o?!l&&!i:!l&&a.position==="static"&&!!i&&ai.has(i.position)||Rt(r)&&!l&&As(s,r))?n=n.filter(u=>u!==r):i=a,r=ot(r)}return t.set(s,n),n}function ui(s){let{element:t,boundary:e,rootBoundary:n,strategy:i}=s;const r=[...e==="clippingAncestors"?te(t)?[]:ci(t,this._c):[].concat(e),n],a=r[0],l=r.reduce((c,u)=>{const d=je(t,u,i);return c.top=V(d.top,c.top),c.right=yt(d.right,c.right),c.bottom=yt(d.bottom,c.bottom),c.left=V(d.left,c.left),c},je(t,a,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function hi(s){const{width:t,height:e}=ks(s);return{width:t,height:e}}function di(s,t,e){const n=Q(t),i=X(t),o=e==="fixed",r=ht(s,!0,o,t);let a={scrollLeft:0,scrollTop:0};const l=q(0);function c(){l.x=se(i)}if(n||!n&&!o)if((xt(t)!=="body"||Rt(i))&&(a=ee(t)),n){const f=ht(t,!0,o,t);l.x=f.x+t.clientLeft,l.y=f.y+t.clientTop}else i&&c();o&&!n&&i&&c();const u=i&&!n&&!o?zs(i,a):q(0),d=r.left+a.scrollLeft-l.x-u.x,h=r.top+a.scrollTop-l.y-u.y;return{x:d,y:h,width:r.width,height:r.height}}function he(s){return W(s).position==="static"}function Be(s,t){if(!Q(s)||W(s).position==="fixed")return null;if(t)return t(s);let e=s.offsetParent;return X(s)===e&&(e=e.ownerDocument.body),e}function Ps(s,t){const e=j(s);if(te(s))return e;if(!Q(s)){let i=ot(s);for(;i&&!vt(i);){if(K(i)&&!he(i))return i;i=ot(i)}return e}let n=Be(s,t);for(;n&&Jn(n)&&he(n);)n=Be(n,t);return n&&vt(n)&&he(n)&&!Ce(n)?e:n||Zn(s)||e}const fi=async function(s){const t=this.getOffsetParent||Ps,e=this.getDimensions,n=await e(s.floating);return{reference:di(s.reference,await t(s.floating),s.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function pi(s){return W(s).direction==="rtl"}const gi={convertOffsetParentRelativeRectToViewportRelativeRect:ni,getDocumentElement:X,getClippingRect:ui,getOffsetParent:Ps,getElementRects:fi,getClientRects:ii,getDimensions:hi,getScale:mt,isElement:K,isRTL:pi};function Ts(s,t){return s.x===t.x&&s.y===t.y&&s.width===t.width&&s.height===t.height}function mi(s,t){let e=null,n;const i=X(s);function o(){var a;clearTimeout(n),(a=e)==null||a.disconnect(),e=null}function r(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),o();const c=s.getBoundingClientRect(),{left:u,top:d,width:h,height:f}=c;if(a||t(),!h||!f)return;const p=Nt(d),g=Nt(i.clientWidth-(u+h)),m=Nt(i.clientHeight-(d+f)),b=Nt(u),v={rootMargin:-p+"px "+-g+"px "+-m+"px "+-b+"px",threshold:V(0,yt(1,l))||1};let x=!0;function _(C){const S=C[0].intersectionRatio;if(S!==l){if(!x)return r();S?r(!1,S):n=setTimeout(()=>{r(!1,1e-7)},1e3)}S===1&&!Ts(c,s.getBoundingClientRect())&&r(),x=!1}try{e=new IntersectionObserver(_,{...v,root:i.ownerDocument})}catch{e=new IntersectionObserver(_,v)}e.observe(s)}return r(!0),o}function bi(s,t,e,n){n===void 0&&(n={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=n,c=$e(s),u=i||o?[...c?Lt(c):[],...Lt(t)]:[];u.forEach(b=>{i&&b.addEventListener("scroll",e,{passive:!0}),o&&b.addEventListener("resize",e)});const d=c&&a?mi(c,e):null;let h=-1,f=null;r&&(f=new ResizeObserver(b=>{let[y]=b;y&&y.target===c&&f&&(f.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var v;(v=f)==null||v.observe(t)})),e()}),c&&!l&&f.observe(c),f.observe(t));let p,g=l?ht(s):null;l&&m();function m(){const b=ht(s);g&&!Ts(g,b)&&e(),g=b,p=requestAnimationFrame(m)}return e(),()=>{var b;u.forEach(y=>{i&&y.removeEventListener("scroll",e),o&&y.removeEventListener("resize",e)}),d?.(),(b=f)==null||b.disconnect(),f=null,l&&cancelAnimationFrame(p)}}const yi=Un,vi=Hn,xi=Kn,wi=(s,t,e)=>{const n=new Map,i={platform:gi,...e},o={...i.platform,_c:n};return Bn(s,t,{...i,platform:o})},Ns=[vi({fallbackAxisSideDirection:"start",crossAxis:!1}),yi()],_i=({placement:s="bottom-start",strategy:t,middleware:e=Ns}={})=>{const[n,i]=it(),[o,r]=it(),[a,l]=it();return N(()=>{if(!n||!(o instanceof HTMLElement)){l(void 0);return}return bi(n,o,()=>wi(n,o,{placement:s,strategy:t,middleware:e}).then(l))},[n,o,s,t,e]),{setReference:i,setFloating:r,styles:I(()=>a?{left:`${a.x}px`,top:`${a.y}px`}:{},[a?.x,a?.y])}};const ne=ft(class extends kt{constructor(s){if(super(s),s.type!==J.PROPERTY&&s.type!==J.ATTRIBUTE&&s.type!==J.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!gs(s))throw Error("`live` bindings can only contain a single expression")}render(s){return s}update(s,[t]){if(t===U||t===$t)return t;const e=s.element,n=s.name;if(s.type===J.PROPERTY){if(t===e[n])return U}else if(s.type===J.BOOLEAN_ATTRIBUTE){if(!!t===e.hasAttribute(n))return U}else if(s.type===J.ATTRIBUTE&&e.getAttribute(n)===t+"")return U;return ms(s),t}}),de=new WeakMap,zt=ft(class extends _e{render(s){return $t}update(s,[t]){const e=t!==this.G;return e&&this.G!==void 0&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.G=t,this.ht=s.options?.host,this.rt(this.ct=s.element)),$t}rt(s){if(this.isConnected||(s=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let e=de.get(t);e===void 0&&(e=new WeakMap,de.set(t,e)),e.get(this.G)!==void 0&&this.G.call(this.ht,void 0),e.set(this.G,s),s!==void 0&&this.G.call(this.ht,s)}else this.G.value=s}get lt(){return typeof this.G=="function"?de.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Fs=st(class extends et{values;constructor(s,t,e,n){super(s,t),Object.assign(t.host,e),this.values=n}update(s,t){this.hasChanged(t)&&(this.values=t,Object.assign(this.state.host,s))}hasChanged(s=[]){return s.some((t,e)=>this.values[e]!==t)}}),ie=st(class extends et{update(){return this.state.host}}),Si=/([A-Z])/gu,He=(s,t,e)=>{s[t]=e,s.dispatchEvent(new CustomEvent(t.replace(Si,"-$1").toLowerCase()+"-changed",{detail:{value:e}}))},Is=s=>{const t=_s(void 0),e=L(c=>t.current=c,[]),n=s.shadowRoot,i=L(c=>s.dispatchEvent(new Event(c.type,{bubbles:c.bubbles})),[]),o=L(c=>He(s,"value",c.target.value),[]),r=L(c=>He(s,"focused",c.type==="focus"),[]),a=L(()=>t.current?.focus(),[]),l=L(()=>{const c=t.current?.checkValidity();return s.toggleAttribute("invalid",!c),c},[]);return Fs({focus:a,validate:l},[a,l]),N(()=>{const c=u=>{u.defaultPrevented||s.disabled||u.target.matches("input, textarea, label")||(u.preventDefault(),s.matches(":focus-within")||a())};return n.addEventListener("mousedown",c),()=>n.removeEventListener("mousedown",c)},[a]),{onChange:i,onFocus:r,onInput:o,onRef:e}},Ci=s=>I(()=>{if(s==null)return;const t=new RegExp(s,"u");return e=>{!e.defaultPrevented&&e.data&&!t.test(e.data)&&e.preventDefault()}},[s]),Ms=(s,{label:t,invalid:e,errorMessage:n})=>R`
		<div class="float" part="float">&nbsp;</div>
		<div class="wrap" part="wrap">
			<slot name="prefix"></slot>
			<div class="control" part="control">
				<slot name="control"></slot>
				${s}
				${tt(t,()=>R`<label for="input" part="label">${t}</label>`)}
			</div>
			<slot name="suffix"></slot>
		</div>
		<div class="line" part="line"></div>
		${tt(e&&n,()=>R`<div class="error" part="error">${n}</div>`)}
	`,Ds=["autocomplete","readonly","disabled","maxlength","invalid","no-label-float","always-float-label"],Ei=({placeholder:s,noLabelFloat:t,label:e})=>(t?e:void 0)||s||" ",Ue=qt`
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
`,Vs=qt`
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
		${Ue}
	}
	@container style(--focused: focused) {
		${Ue}
	}
`,$i=["type","pattern","allowed-pattern","min","max","step","autosize","label","placeholder",...Ds],Li=s=>{const{type:t="text",pattern:e,allowedPattern:n,autocomplete:i,value:o,readonly:r,disabled:a,min:l,max:c,step:u,maxlength:d}=s,{onChange:h,onFocus:f,onInput:p,onRef:g}=Is(s),m=Ci(n);return Ms(R`
			<input
				${zt(g)}
				style="--chars: ${o?.toString()?.length??0}ch"
				id="input"
				part="input"
				type=${t}
				pattern=${H(e)}
				autocomplete=${H(i)}
				placeholder=${Ei(s)}
				?readonly=${r}
				?aria-disabled=${a}
				?disabled=${a}
				.value=${ne(o??"")}
				maxlength=${H(d)}
				@beforeinput=${m}
				@input=${p}
				@change=${h}
				@focus=${f}
				@blur=${f}
				min=${H(l)}
				max=${H(c)}
				step=${H(u)}
			/>
		`,s)};customElements.define("cosmoz-input",rt(Li,{observedAttributes:$i,styleSheets:[we(Vs)]}));const Ke=s=>{s.style.height="",s.style.height=`${s.scrollHeight}px`},Oi=(s,t=0)=>{if(t>0){const e=s.getAttribute("rows")??"",n=s.style.height;s.style.height="",s.setAttribute("rows",t),s.style.maxHeight=s.getBoundingClientRect().height+"px",s.style.height=n,s.setAttribute("rows",e)}},ki=s=>{const{value:t,maxRows:e}=s,n=I(()=>()=>s.shadowRoot.querySelector("#input"),[]);N(()=>Oi(n(),e),[e,n]),N(()=>Ke(n()),[n,t]),N(()=>{const i=n(),o=new ResizeObserver(()=>requestAnimationFrame(()=>Ke(i)));return o.observe(i),()=>o.unobserve(i)},[n])},Ri=["rows","placeholder",...Ds],zi=s=>{const{autocomplete:t,value:e,placeholder:n,readonly:i,disabled:o,rows:r,cols:a,maxlength:l}=s,{onChange:c,onFocus:u,onInput:d,onRef:h}=Is(s);return ki(s),Ms(R`
			<textarea id="input" part="input"
				${zt(h)}
				autocomplete=${H(t)}
				placeholder=${n||" "}
				rows=${r??1} cols=${H(a)}
				?readonly=${i} ?aria-disabled=${o} ?disabled=${o}
				.value=${ne(e??"")} maxlength=${H(l)} @input=${d}
				@change=${c} @focus=${u} @blur=${u}>`,s)};customElements.define("cosmoz-textarea",rt(zi,{observedAttributes:Ri,styleSheets:[we(Vs)]}));const Ai=s=>{const{label:t,value:e,disabled:n,error:i}=s,o=L(r=>s.dispatchEvent(new CustomEvent("change",{detail:r.target.checked})),[]);return R`<input
			id="toggle"
			class="toggle"
			part="toggle"
			type="checkbox"
			.checked=${ne(!!e)}
			?disabled=${n}
			@change=${o}
		/>
		${tt(t,()=>R`<label for="toggle">${t}</label>`)}
		<slot name="suffix"></slot>
		${tt(i,r=>R`<div class="failure">${r}</div>`)} `},Pi=bt`
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
`,Ti=bt`
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
`;customElements.define("cosmoz-toggle",rt(Ai,{styleSheets:[Ti,Pi],observedAttributes:["disabled"]}));const w=s=>typeof s=="string",_t=()=>{let s,t;const e=new Promise((n,i)=>{s=n,t=i});return e.resolve=s,e.reject=t,e},We=s=>s==null?"":""+s,Ni=(s,t,e)=>{s.forEach(n=>{t[n]&&(e[n]=t[n])})},Fi=/###/g,Ye=s=>s&&s.indexOf("###")>-1?s.replace(Fi,"."):s,Je=s=>!s||w(s),Et=(s,t,e)=>{const n=w(t)?t.split("."):t;let i=0;for(;i<n.length-1;){if(Je(s))return{};const o=Ye(n[i]);!s[o]&&e&&(s[o]=new e),Object.prototype.hasOwnProperty.call(s,o)?s=s[o]:s={},++i}return Je(s)?{}:{obj:s,k:Ye(n[i])}},Ge=(s,t,e)=>{const{obj:n,k:i}=Et(s,t,Object);if(n!==void 0||t.length===1){n[i]=e;return}let o=t[t.length-1],r=t.slice(0,t.length-1),a=Et(s,r,Object);for(;a.obj===void 0&&r.length;)o=`${r[r.length-1]}.${o}`,r=r.slice(0,r.length-1),a=Et(s,r,Object),a&&a.obj&&typeof a.obj[`${a.k}.${o}`]<"u"&&(a.obj=void 0);a.obj[`${a.k}.${o}`]=e},Ii=(s,t,e,n)=>{const{obj:i,k:o}=Et(s,t,Object);i[o]=i[o]||[],i[o].push(e)},Kt=(s,t)=>{const{obj:e,k:n}=Et(s,t);if(e)return e[n]},Mi=(s,t,e)=>{const n=Kt(s,e);return n!==void 0?n:Kt(t,e)},js=(s,t,e)=>{for(const n in t)n!=="__proto__"&&n!=="constructor"&&(n in s?w(s[n])||s[n]instanceof String||w(t[n])||t[n]instanceof String?e&&(s[n]=t[n]):js(s[n],t[n],e):s[n]=t[n]);return s},pt=s=>s.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var Di={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const Vi=s=>w(s)?s.replace(/[&<>"'\/]/g,t=>Di[t]):s;class ji{constructor(t){this.capacity=t,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(t){const e=this.regExpMap.get(t);if(e!==void 0)return e;const n=new RegExp(t);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(t,n),this.regExpQueue.push(t),n}}const Bi=[" ",",","?","!",";"],Hi=new ji(20),Ui=(s,t,e)=>{t=t||"",e=e||"";const n=Bi.filter(r=>t.indexOf(r)<0&&e.indexOf(r)<0);if(n.length===0)return!0;const i=Hi.getRegExp(`(${n.map(r=>r==="?"?"\\?":r).join("|")})`);let o=!i.test(s);if(!o){const r=s.indexOf(e);r>0&&!i.test(s.substring(0,r))&&(o=!0)}return o},ve=function(s,t){let e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!s)return;if(s[t])return s[t];const n=t.split(e);let i=s;for(let o=0;o<n.length;){if(!i||typeof i!="object")return;let r,a="";for(let l=o;l<n.length;++l)if(l!==o&&(a+=e),a+=n[l],r=i[a],r!==void 0){if(["string","number","boolean"].indexOf(typeof r)>-1&&l<n.length-1)continue;o+=l-o+1;break}i=r}return i},Wt=s=>s&&s.replace("_","-"),Ki={type:"logger",log(s){this.output("log",s)},warn(s){this.output("warn",s)},error(s){this.output("error",s)},output(s,t){console&&console[s]&&console[s].apply(console,t)}};class Yt{constructor(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(t,e)}init(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=e.prefix||"i18next:",this.logger=t||Ki,this.options=e,this.debug=e.debug}log(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.forward(e,"log","",!0)}warn(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.forward(e,"warn","",!0)}error(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.forward(e,"error","")}deprecate(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.forward(e,"warn","WARNING DEPRECATED: ",!0)}forward(t,e,n,i){return i&&!this.debug?null:(w(t[0])&&(t[0]=`${n}${this.prefix} ${t[0]}`),this.logger[e](t))}create(t){return new Yt(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t=t||this.options,t.prefix=t.prefix||this.prefix,new Yt(this.logger,t)}}var G=new Yt;class oe{constructor(){this.observers={}}on(t,e){return t.split(" ").forEach(n=>{this.observers[n]||(this.observers[n]=new Map);const i=this.observers[n].get(e)||0;this.observers[n].set(e,i+1)}),this}off(t,e){if(this.observers[t]){if(!e){delete this.observers[t];return}this.observers[t].delete(e)}}emit(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];this.observers[t]&&Array.from(this.observers[t].entries()).forEach(r=>{let[a,l]=r;for(let c=0;c<l;c++)a(...n)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(r=>{let[a,l]=r;for(let c=0;c<l;c++)a.apply(a,[t,...n])})}}class qe extends oe{constructor(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=t||{},this.options=e,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(t){this.options.ns.indexOf(t)<0&&this.options.ns.push(t)}removeNamespaces(t){const e=this.options.ns.indexOf(t);e>-1&&this.options.ns.splice(e,1)}getResource(t,e,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const o=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator,r=i.ignoreJSONStructure!==void 0?i.ignoreJSONStructure:this.options.ignoreJSONStructure;let a;t.indexOf(".")>-1?a=t.split("."):(a=[t,e],n&&(Array.isArray(n)?a.push(...n):w(n)&&o?a.push(...n.split(o)):a.push(n)));const l=Kt(this.data,a);return!l&&!e&&!n&&t.indexOf(".")>-1&&(t=a[0],e=a[1],n=a.slice(2).join(".")),l||!r||!w(n)?l:ve(this.data&&this.data[t]&&this.data[t][e],n,o)}addResource(t,e,n,i){let o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const r=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator;let a=[t,e];n&&(a=a.concat(r?n.split(r):n)),t.indexOf(".")>-1&&(a=t.split("."),i=e,e=a[1]),this.addNamespaces(e),Ge(this.data,a,i),o.silent||this.emit("added",t,e,n,i)}addResources(t,e,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const o in n)(w(n[o])||Array.isArray(n[o]))&&this.addResource(t,e,o,n[o],{silent:!0});i.silent||this.emit("added",t,e,n)}addResourceBundle(t,e,n,i,o){let r=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},a=[t,e];t.indexOf(".")>-1&&(a=t.split("."),i=n,n=e,e=a[1]),this.addNamespaces(e);let l=Kt(this.data,a)||{};r.skipCopy||(n=JSON.parse(JSON.stringify(n))),i?js(l,n,o):l={...l,...n},Ge(this.data,a,l),r.silent||this.emit("added",t,e,n)}removeResourceBundle(t,e){this.hasResourceBundle(t,e)&&delete this.data[t][e],this.removeNamespaces(e),this.emit("removed",t,e)}hasResourceBundle(t,e){return this.getResource(t,e)!==void 0}getResourceBundle(t,e){return e||(e=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(t,e)}:this.getResource(t,e)}getDataByLanguage(t){return this.data[t]}hasLanguageSomeTranslations(t){const e=this.getDataByLanguage(t);return!!(e&&Object.keys(e)||[]).find(i=>e[i]&&Object.keys(e[i]).length>0)}toJSON(){return this.data}}var Bs={processors:{},addPostProcessor(s){this.processors[s.name]=s},handle(s,t,e,n,i){return s.forEach(o=>{this.processors[o]&&(t=this.processors[o].process(t,e,n,i))}),t}};const Qe={};class Jt extends oe{constructor(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),Ni(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],t,this),this.options=e,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=G.create("translator")}changeLanguage(t){t&&(this.language=t)}exists(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(t==null)return!1;const n=this.resolve(t,e);return n&&n.res!==void 0}extractFromKey(t,e){let n=e.nsSeparator!==void 0?e.nsSeparator:this.options.nsSeparator;n===void 0&&(n=":");const i=e.keySeparator!==void 0?e.keySeparator:this.options.keySeparator;let o=e.ns||this.options.defaultNS||[];const r=n&&t.indexOf(n)>-1,a=!this.options.userDefinedKeySeparator&&!e.keySeparator&&!this.options.userDefinedNsSeparator&&!e.nsSeparator&&!Ui(t,n,i);if(r&&!a){const l=t.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:t,namespaces:w(o)?[o]:o};const c=t.split(n);(n!==i||n===i&&this.options.ns.indexOf(c[0])>-1)&&(o=c.shift()),t=c.join(i)}return{key:t,namespaces:w(o)?[o]:o}}translate(t,e,n){if(typeof e!="object"&&this.options.overloadTranslationOptionHandler&&(e=this.options.overloadTranslationOptionHandler(arguments)),typeof e=="object"&&(e={...e}),e||(e={}),t==null)return"";Array.isArray(t)||(t=[String(t)]);const i=e.returnDetails!==void 0?e.returnDetails:this.options.returnDetails,o=e.keySeparator!==void 0?e.keySeparator:this.options.keySeparator,{key:r,namespaces:a}=this.extractFromKey(t[t.length-1],e),l=a[a.length-1],c=e.lng||this.language,u=e.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(c&&c.toLowerCase()==="cimode"){if(u){const x=e.nsSeparator||this.options.nsSeparator;return i?{res:`${l}${x}${r}`,usedKey:r,exactUsedKey:r,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(e)}:`${l}${x}${r}`}return i?{res:r,usedKey:r,exactUsedKey:r,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(e)}:r}const d=this.resolve(t,e);let h=d&&d.res;const f=d&&d.usedKey||r,p=d&&d.exactUsedKey||r,g=Object.prototype.toString.apply(h),m=["[object Number]","[object Function]","[object RegExp]"],b=e.joinArrays!==void 0?e.joinArrays:this.options.joinArrays,y=!this.i18nFormat||this.i18nFormat.handleAsObject,v=!w(h)&&typeof h!="boolean"&&typeof h!="number";if(y&&h&&v&&m.indexOf(g)<0&&!(w(b)&&Array.isArray(h))){if(!e.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const x=this.options.returnedObjectHandler?this.options.returnedObjectHandler(f,h,{...e,ns:a}):`key '${r} (${this.language})' returned an object instead of string.`;return i?(d.res=x,d.usedParams=this.getUsedParamsDetails(e),d):x}if(o){const x=Array.isArray(h),_=x?[]:{},C=x?p:f;for(const S in h)if(Object.prototype.hasOwnProperty.call(h,S)){const k=`${C}${o}${S}`;_[S]=this.translate(k,{...e,joinArrays:!1,ns:a}),_[S]===k&&(_[S]=h[S])}h=_}}else if(y&&w(b)&&Array.isArray(h))h=h.join(b),h&&(h=this.extendTranslation(h,t,e,n));else{let x=!1,_=!1;const C=e.count!==void 0&&!w(e.count),S=Jt.hasDefaultValue(e),k=C?this.pluralResolver.getSuffix(c,e.count,e):"",A=e.ordinal&&C?this.pluralResolver.getSuffix(c,e.count,{ordinal:!1}):"",z=C&&!e.ordinal&&e.count===0&&this.pluralResolver.shouldUseIntlApi(),F=z&&e[`defaultValue${this.options.pluralSeparator}zero`]||e[`defaultValue${k}`]||e[`defaultValue${A}`]||e.defaultValue;!this.isValidLookup(h)&&S&&(x=!0,h=F),this.isValidLookup(h)||(_=!0,h=r);const D=(e.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&_?void 0:h,O=S&&F!==h&&this.options.updateMissing;if(_||x||O){if(this.logger.log(O?"updateKey":"missingKey",c,l,r,O?F:h),o){const E=this.resolve(r,{...e,keySeparator:!1});E&&E.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let P=[];const B=this.languageUtils.getFallbackCodes(this.options.fallbackLng,e.lng||this.language);if(this.options.saveMissingTo==="fallback"&&B&&B[0])for(let E=0;E<B.length;E++)P.push(B[E]);else this.options.saveMissingTo==="all"?P=this.languageUtils.toResolveHierarchy(e.lng||this.language):P.push(e.lng||this.language);const $=(E,T,Z)=>{const Pt=S&&Z!==h?Z:D;this.options.missingKeyHandler?this.options.missingKeyHandler(E,l,T,Pt,O,e):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(E,l,T,Pt,O,e),this.emit("missingKey",E,l,T,h)};this.options.saveMissing&&(this.options.saveMissingPlurals&&C?P.forEach(E=>{const T=this.pluralResolver.getSuffixes(E,e);z&&e[`defaultValue${this.options.pluralSeparator}zero`]&&T.indexOf(`${this.options.pluralSeparator}zero`)<0&&T.push(`${this.options.pluralSeparator}zero`),T.forEach(Z=>{$([E],r+Z,e[`defaultValue${Z}`]||F)})}):$(P,r,F))}h=this.extendTranslation(h,t,e,d,n),_&&h===r&&this.options.appendNamespaceToMissingKey&&(h=`${l}:${r}`),(_||x)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?h=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${r}`:r,x?h:void 0):h=this.options.parseMissingKeyHandler(h))}return i?(d.res=h,d.usedParams=this.getUsedParamsDetails(e),d):h}extendTranslation(t,e,n,i,o){var r=this;if(this.i18nFormat&&this.i18nFormat.parse)t=this.i18nFormat.parse(t,{...this.options.interpolation.defaultVariables,...n},n.lng||this.language||i.usedLng,i.usedNS,i.usedKey,{resolved:i});else if(!n.skipInterpolation){n.interpolation&&this.interpolator.init({...n,interpolation:{...this.options.interpolation,...n.interpolation}});const c=w(t)&&(n&&n.interpolation&&n.interpolation.skipOnVariables!==void 0?n.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let u;if(c){const h=t.match(this.interpolator.nestingRegexp);u=h&&h.length}let d=n.replace&&!w(n.replace)?n.replace:n;if(this.options.interpolation.defaultVariables&&(d={...this.options.interpolation.defaultVariables,...d}),t=this.interpolator.interpolate(t,d,n.lng||this.language||i.usedLng,n),c){const h=t.match(this.interpolator.nestingRegexp),f=h&&h.length;u<f&&(n.nest=!1)}!n.lng&&this.options.compatibilityAPI!=="v1"&&i&&i.res&&(n.lng=this.language||i.usedLng),n.nest!==!1&&(t=this.interpolator.nest(t,function(){for(var h=arguments.length,f=new Array(h),p=0;p<h;p++)f[p]=arguments[p];return o&&o[0]===f[0]&&!n.context?(r.logger.warn(`It seems you are nesting recursively key: ${f[0]} in key: ${e[0]}`),null):r.translate(...f,e)},n)),n.interpolation&&this.interpolator.reset()}const a=n.postProcess||this.options.postProcess,l=w(a)?[a]:a;return t!=null&&l&&l.length&&n.applyPostProcessor!==!1&&(t=Bs.handle(l,t,e,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...i,usedParams:this.getUsedParamsDetails(n)},...n}:n,this)),t}resolve(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n,i,o,r,a;return w(t)&&(t=[t]),t.forEach(l=>{if(this.isValidLookup(n))return;const c=this.extractFromKey(l,e),u=c.key;i=u;let d=c.namespaces;this.options.fallbackNS&&(d=d.concat(this.options.fallbackNS));const h=e.count!==void 0&&!w(e.count),f=h&&!e.ordinal&&e.count===0&&this.pluralResolver.shouldUseIntlApi(),p=e.context!==void 0&&(w(e.context)||typeof e.context=="number")&&e.context!=="",g=e.lngs?e.lngs:this.languageUtils.toResolveHierarchy(e.lng||this.language,e.fallbackLng);d.forEach(m=>{this.isValidLookup(n)||(a=m,!Qe[`${g[0]}-${m}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(a)&&(Qe[`${g[0]}-${m}`]=!0,this.logger.warn(`key "${i}" for languages "${g.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),g.forEach(b=>{if(this.isValidLookup(n))return;r=b;const y=[u];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(y,u,b,m,e);else{let x;h&&(x=this.pluralResolver.getSuffix(b,e.count,e));const _=`${this.options.pluralSeparator}zero`,C=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(h&&(y.push(u+x),e.ordinal&&x.indexOf(C)===0&&y.push(u+x.replace(C,this.options.pluralSeparator)),f&&y.push(u+_)),p){const S=`${u}${this.options.contextSeparator}${e.context}`;y.push(S),h&&(y.push(S+x),e.ordinal&&x.indexOf(C)===0&&y.push(S+x.replace(C,this.options.pluralSeparator)),f&&y.push(S+_))}}let v;for(;v=y.pop();)this.isValidLookup(n)||(o=v,n=this.getResource(b,m,v,e))}))})}),{res:n,usedKey:i,exactUsedKey:o,usedLng:r,usedNS:a}}isValidLookup(t){return t!==void 0&&!(!this.options.returnNull&&t===null)&&!(!this.options.returnEmptyString&&t==="")}getResource(t,e,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(t,e,n,i):this.resourceStore.getResource(t,e,n,i)}getUsedParamsDetails(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const e=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],n=t.replace&&!w(t.replace);let i=n?t.replace:t;if(n&&typeof t.count<"u"&&(i.count=t.count),this.options.interpolation.defaultVariables&&(i={...this.options.interpolation.defaultVariables,...i}),!n){i={...i};for(const o of e)delete i[o]}return i}static hasDefaultValue(t){const e="defaultValue";for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e===n.substring(0,e.length)&&t[n]!==void 0)return!0;return!1}}const fe=s=>s.charAt(0).toUpperCase()+s.slice(1);class Xe{constructor(t){this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=G.create("languageUtils")}getScriptPartFromCode(t){if(t=Wt(t),!t||t.indexOf("-")<0)return null;const e=t.split("-");return e.length===2||(e.pop(),e[e.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(e.join("-"))}getLanguagePartFromCode(t){if(t=Wt(t),!t||t.indexOf("-")<0)return t;const e=t.split("-");return this.formatLanguageCode(e[0])}formatLanguageCode(t){if(w(t)&&t.indexOf("-")>-1){if(typeof Intl<"u"&&typeof Intl.getCanonicalLocales<"u")try{let i=Intl.getCanonicalLocales(t)[0];if(i&&this.options.lowerCaseLng&&(i=i.toLowerCase()),i)return i}catch{}const e=["hans","hant","latn","cyrl","cans","mong","arab"];let n=t.split("-");return this.options.lowerCaseLng?n=n.map(i=>i.toLowerCase()):n.length===2?(n[0]=n[0].toLowerCase(),n[1]=n[1].toUpperCase(),e.indexOf(n[1].toLowerCase())>-1&&(n[1]=fe(n[1].toLowerCase()))):n.length===3&&(n[0]=n[0].toLowerCase(),n[1].length===2&&(n[1]=n[1].toUpperCase()),n[0]!=="sgn"&&n[2].length===2&&(n[2]=n[2].toUpperCase()),e.indexOf(n[1].toLowerCase())>-1&&(n[1]=fe(n[1].toLowerCase())),e.indexOf(n[2].toLowerCase())>-1&&(n[2]=fe(n[2].toLowerCase()))),n.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t}isSupportedCode(t){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(t=this.getLanguagePartFromCode(t)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(t)>-1}getBestMatchFromCodes(t){if(!t)return null;let e;return t.forEach(n=>{if(e)return;const i=this.formatLanguageCode(n);(!this.options.supportedLngs||this.isSupportedCode(i))&&(e=i)}),!e&&this.options.supportedLngs&&t.forEach(n=>{if(e)return;const i=this.getLanguagePartFromCode(n);if(this.isSupportedCode(i))return e=i;e=this.options.supportedLngs.find(o=>{if(o===i)return o;if(!(o.indexOf("-")<0&&i.indexOf("-")<0)&&(o.indexOf("-")>0&&i.indexOf("-")<0&&o.substring(0,o.indexOf("-"))===i||o.indexOf(i)===0&&i.length>1))return o})}),e||(e=this.getFallbackCodes(this.options.fallbackLng)[0]),e}getFallbackCodes(t,e){if(!t)return[];if(typeof t=="function"&&(t=t(e)),w(t)&&(t=[t]),Array.isArray(t))return t;if(!e)return t.default||[];let n=t[e];return n||(n=t[this.getScriptPartFromCode(e)]),n||(n=t[this.formatLanguageCode(e)]),n||(n=t[this.getLanguagePartFromCode(e)]),n||(n=t.default),n||[]}toResolveHierarchy(t,e){const n=this.getFallbackCodes(e||this.options.fallbackLng||[],t),i=[],o=r=>{r&&(this.isSupportedCode(r)?i.push(r):this.logger.warn(`rejecting language code not found in supportedLngs: ${r}`))};return w(t)&&(t.indexOf("-")>-1||t.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&o(this.formatLanguageCode(t)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&o(this.getScriptPartFromCode(t)),this.options.load!=="currentOnly"&&o(this.getLanguagePartFromCode(t))):w(t)&&o(this.formatLanguageCode(t)),n.forEach(r=>{i.indexOf(r)<0&&o(this.formatLanguageCode(r))}),i}}let Wi=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],Yi={1:s=>+(s>1),2:s=>+(s!=1),3:s=>0,4:s=>s%10==1&&s%100!=11?0:s%10>=2&&s%10<=4&&(s%100<10||s%100>=20)?1:2,5:s=>s==0?0:s==1?1:s==2?2:s%100>=3&&s%100<=10?3:s%100>=11?4:5,6:s=>s==1?0:s>=2&&s<=4?1:2,7:s=>s==1?0:s%10>=2&&s%10<=4&&(s%100<10||s%100>=20)?1:2,8:s=>s==1?0:s==2?1:s!=8&&s!=11?2:3,9:s=>+(s>=2),10:s=>s==1?0:s==2?1:s<7?2:s<11?3:4,11:s=>s==1||s==11?0:s==2||s==12?1:s>2&&s<20?2:3,12:s=>+(s%10!=1||s%100==11),13:s=>+(s!==0),14:s=>s==1?0:s==2?1:s==3?2:3,15:s=>s%10==1&&s%100!=11?0:s%10>=2&&(s%100<10||s%100>=20)?1:2,16:s=>s%10==1&&s%100!=11?0:s!==0?1:2,17:s=>s==1||s%10==1&&s%100!=11?0:1,18:s=>s==0?0:s==1?1:2,19:s=>s==1?0:s==0||s%100>1&&s%100<11?1:s%100>10&&s%100<20?2:3,20:s=>s==1?0:s==0||s%100>0&&s%100<20?1:2,21:s=>s%100==1?1:s%100==2?2:s%100==3||s%100==4?3:0,22:s=>s==1?0:s==2?1:(s<0||s>10)&&s%10==0?2:3};const Ji=["v1","v2","v3"],Gi=["v4"],Ze={zero:0,one:1,two:2,few:3,many:4,other:5},qi=()=>{const s={};return Wi.forEach(t=>{t.lngs.forEach(e=>{s[e]={numbers:t.nr,plurals:Yi[t.fc]}})}),s};class Qi{constructor(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=t,this.options=e,this.logger=G.create("pluralResolver"),(!this.options.compatibilityJSON||Gi.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=qi(),this.pluralRulesCache={}}addRule(t,e){this.rules[t]=e}clearCache(){this.pluralRulesCache={}}getRule(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi()){const n=Wt(t==="dev"?"en":t),i=e.ordinal?"ordinal":"cardinal",o=JSON.stringify({cleanedCode:n,type:i});if(o in this.pluralRulesCache)return this.pluralRulesCache[o];let r;try{r=new Intl.PluralRules(n,{type:i})}catch{if(!t.match(/-|_/))return;const l=this.languageUtils.getLanguagePartFromCode(t);r=this.getRule(l,e)}return this.pluralRulesCache[o]=r,r}return this.rules[t]||this.rules[this.languageUtils.getLanguagePartFromCode(t)]}needsPlural(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const n=this.getRule(t,e);return this.shouldUseIntlApi()?n&&n.resolvedOptions().pluralCategories.length>1:n&&n.numbers.length>1}getPluralFormsOfKey(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(t,n).map(i=>`${e}${i}`)}getSuffixes(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const n=this.getRule(t,e);return n?this.shouldUseIntlApi()?n.resolvedOptions().pluralCategories.sort((i,o)=>Ze[i]-Ze[o]).map(i=>`${this.options.prepend}${e.ordinal?`ordinal${this.options.prepend}`:""}${i}`):n.numbers.map(i=>this.getSuffix(t,i,e)):[]}getSuffix(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const i=this.getRule(t,n);return i?this.shouldUseIntlApi()?`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${i.select(e)}`:this.getSuffixRetroCompatible(i,e):(this.logger.warn(`no plural rule found for: ${t}`),"")}getSuffixRetroCompatible(t,e){const n=t.noAbs?t.plurals(e):t.plurals(Math.abs(e));let i=t.numbers[n];this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1&&(i===2?i="plural":i===1&&(i=""));const o=()=>this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString();return this.options.compatibilityJSON==="v1"?i===1?"":typeof i=="number"?`_plural_${i.toString()}`:o():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1?o():this.options.prepend&&n.toString()?this.options.prepend+n.toString():n.toString()}shouldUseIntlApi(){return!Ji.includes(this.options.compatibilityJSON)}}const ts=function(s,t,e){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,o=Mi(s,t,e);return!o&&i&&w(e)&&(o=ve(s,e,n),o===void 0&&(o=ve(t,e,n))),o},pe=s=>s.replace(/\$/g,"$$$$");class Xi{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=G.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||(e=>e),this.init(t)}init(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};t.interpolation||(t.interpolation={escapeValue:!0});const{escape:e,escapeValue:n,useRawValueToEscape:i,prefix:o,prefixEscaped:r,suffix:a,suffixEscaped:l,formatSeparator:c,unescapeSuffix:u,unescapePrefix:d,nestingPrefix:h,nestingPrefixEscaped:f,nestingSuffix:p,nestingSuffixEscaped:g,nestingOptionsSeparator:m,maxReplaces:b,alwaysFormat:y}=t.interpolation;this.escape=e!==void 0?e:Vi,this.escapeValue=n!==void 0?n:!0,this.useRawValueToEscape=i!==void 0?i:!1,this.prefix=o?pt(o):r||"{{",this.suffix=a?pt(a):l||"}}",this.formatSeparator=c||",",this.unescapePrefix=u?"":d||"-",this.unescapeSuffix=this.unescapePrefix?"":u||"",this.nestingPrefix=h?pt(h):f||pt("$t("),this.nestingSuffix=p?pt(p):g||pt(")"),this.nestingOptionsSeparator=m||",",this.maxReplaces=b||1e3,this.alwaysFormat=y!==void 0?y:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const t=(e,n)=>e&&e.source===n?(e.lastIndex=0,e):new RegExp(n,"g");this.regexp=t(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=t(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=t(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(t,e,n,i){let o,r,a;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=f=>{if(f.indexOf(this.formatSeparator)<0){const b=ts(e,l,f,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(b,void 0,n,{...i,...e,interpolationkey:f}):b}const p=f.split(this.formatSeparator),g=p.shift().trim(),m=p.join(this.formatSeparator).trim();return this.format(ts(e,l,g,this.options.keySeparator,this.options.ignoreJSONStructure),m,n,{...i,...e,interpolationkey:g})};this.resetRegExp();const u=i&&i.missingInterpolationHandler||this.options.missingInterpolationHandler,d=i&&i.interpolation&&i.interpolation.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:f=>pe(f)},{regex:this.regexp,safeValue:f=>this.escapeValue?pe(this.escape(f)):pe(f)}].forEach(f=>{for(a=0;o=f.regex.exec(t);){const p=o[1].trim();if(r=c(p),r===void 0)if(typeof u=="function"){const m=u(t,o,i);r=w(m)?m:""}else if(i&&Object.prototype.hasOwnProperty.call(i,p))r="";else if(d){r=o[0];continue}else this.logger.warn(`missed to pass in variable ${p} for interpolating ${t}`),r="";else!w(r)&&!this.useRawValueToEscape&&(r=We(r));const g=f.safeValue(r);if(t=t.replace(o[0],g),d?(f.regex.lastIndex+=r.length,f.regex.lastIndex-=o[0].length):f.regex.lastIndex=0,a++,a>=this.maxReplaces)break}}),t}nest(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i,o,r;const a=(l,c)=>{const u=this.nestingOptionsSeparator;if(l.indexOf(u)<0)return l;const d=l.split(new RegExp(`${u}[ ]*{`));let h=`{${d[1]}`;l=d[0],h=this.interpolate(h,r);const f=h.match(/'/g),p=h.match(/"/g);(f&&f.length%2===0&&!p||p.length%2!==0)&&(h=h.replace(/'/g,'"'));try{r=JSON.parse(h),c&&(r={...c,...r})}catch(g){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,g),`${l}${u}${h}`}return r.defaultValue&&r.defaultValue.indexOf(this.prefix)>-1&&delete r.defaultValue,l};for(;i=this.nestingRegexp.exec(t);){let l=[];r={...n},r=r.replace&&!w(r.replace)?r.replace:r,r.applyPostProcessor=!1,delete r.defaultValue;let c=!1;if(i[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(i[1])){const u=i[1].split(this.formatSeparator).map(d=>d.trim());i[1]=u.shift(),l=u,c=!0}if(o=e(a.call(this,i[1].trim(),r),r),o&&i[0]===t&&!w(o))return o;w(o)||(o=We(o)),o||(this.logger.warn(`missed to resolve ${i[1]} for nesting ${t}`),o=""),c&&(o=l.reduce((u,d)=>this.format(u,d,n.lng,{...n,interpolationkey:i[1].trim()}),o.trim())),t=t.replace(i[0],o),this.regexp.lastIndex=0}return t}}const Zi=s=>{let t=s.toLowerCase().trim();const e={};if(s.indexOf("(")>-1){const n=s.split("(");t=n[0].toLowerCase().trim();const i=n[1].substring(0,n[1].length-1);t==="currency"&&i.indexOf(":")<0?e.currency||(e.currency=i.trim()):t==="relativetime"&&i.indexOf(":")<0?e.range||(e.range=i.trim()):i.split(";").forEach(r=>{if(r){const[a,...l]=r.split(":"),c=l.join(":").trim().replace(/^'+|'+$/g,""),u=a.trim();e[u]||(e[u]=c),c==="false"&&(e[u]=!1),c==="true"&&(e[u]=!0),isNaN(c)||(e[u]=parseInt(c,10))}})}return{formatName:t,formatOptions:e}},gt=s=>{const t={};return(e,n,i)=>{let o=i;i&&i.interpolationkey&&i.formatParams&&i.formatParams[i.interpolationkey]&&i[i.interpolationkey]&&(o={...o,[i.interpolationkey]:void 0});const r=n+JSON.stringify(o);let a=t[r];return a||(a=s(Wt(n),i),t[r]=a),a(e)}};class to{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=G.create("formatter"),this.options=t,this.formats={number:gt((e,n)=>{const i=new Intl.NumberFormat(e,{...n});return o=>i.format(o)}),currency:gt((e,n)=>{const i=new Intl.NumberFormat(e,{...n,style:"currency"});return o=>i.format(o)}),datetime:gt((e,n)=>{const i=new Intl.DateTimeFormat(e,{...n});return o=>i.format(o)}),relativetime:gt((e,n)=>{const i=new Intl.RelativeTimeFormat(e,{...n});return o=>i.format(o,n.range||"day")}),list:gt((e,n)=>{const i=new Intl.ListFormat(e,{...n});return o=>i.format(o)})},this.init(t)}init(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=e.interpolation.formatSeparator||","}add(t,e){this.formats[t.toLowerCase().trim()]=e}addCached(t,e){this.formats[t.toLowerCase().trim()]=gt(e)}format(t,e,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const o=e.split(this.formatSeparator);if(o.length>1&&o[0].indexOf("(")>1&&o[0].indexOf(")")<0&&o.find(a=>a.indexOf(")")>-1)){const a=o.findIndex(l=>l.indexOf(")")>-1);o[0]=[o[0],...o.splice(1,a)].join(this.formatSeparator)}return o.reduce((a,l)=>{const{formatName:c,formatOptions:u}=Zi(l);if(this.formats[c]){let d=a;try{const h=i&&i.formatParams&&i.formatParams[i.interpolationkey]||{},f=h.locale||h.lng||i.locale||i.lng||n;d=this.formats[c](a,f,{...u,...i,...h})}catch(h){this.logger.warn(h)}return d}else this.logger.warn(`there was no format function for ${c}`);return a},t)}}const eo=(s,t)=>{s.pending[t]!==void 0&&(delete s.pending[t],s.pendingCount--)};class so extends oe{constructor(t,e,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=t,this.store=e,this.services=n,this.languageUtils=n.languageUtils,this.options=i,this.logger=G.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=i.maxParallelReads||10,this.readingCalls=0,this.maxRetries=i.maxRetries>=0?i.maxRetries:5,this.retryTimeout=i.retryTimeout>=1?i.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(n,i.backend,i)}queueLoad(t,e,n,i){const o={},r={},a={},l={};return t.forEach(c=>{let u=!0;e.forEach(d=>{const h=`${c}|${d}`;!n.reload&&this.store.hasResourceBundle(c,d)?this.state[h]=2:this.state[h]<0||(this.state[h]===1?r[h]===void 0&&(r[h]=!0):(this.state[h]=1,u=!1,r[h]===void 0&&(r[h]=!0),o[h]===void 0&&(o[h]=!0),l[d]===void 0&&(l[d]=!0)))}),u||(a[c]=!0)}),(Object.keys(o).length||Object.keys(r).length)&&this.queue.push({pending:r,pendingCount:Object.keys(r).length,loaded:{},errors:[],callback:i}),{toLoad:Object.keys(o),pending:Object.keys(r),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(l)}}loaded(t,e,n){const i=t.split("|"),o=i[0],r=i[1];e&&this.emit("failedLoading",o,r,e),!e&&n&&this.store.addResourceBundle(o,r,n,void 0,void 0,{skipCopy:!0}),this.state[t]=e?-1:2,e&&n&&(this.state[t]=0);const a={};this.queue.forEach(l=>{Ii(l.loaded,[o],r),eo(l,t),e&&l.errors.push(e),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(c=>{a[c]||(a[c]={});const u=l.loaded[c];u.length&&u.forEach(d=>{a[c][d]===void 0&&(a[c][d]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",a),this.queue=this.queue.filter(l=>!l.done)}read(t,e,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,r=arguments.length>5?arguments[5]:void 0;if(!t.length)return r(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:t,ns:e,fcName:n,tried:i,wait:o,callback:r});return}this.readingCalls++;const a=(c,u)=>{if(this.readingCalls--,this.waitingReads.length>0){const d=this.waitingReads.shift();this.read(d.lng,d.ns,d.fcName,d.tried,d.wait,d.callback)}if(c&&u&&i<this.maxRetries){setTimeout(()=>{this.read.call(this,t,e,n,i+1,o*2,r)},o);return}r(c,u)},l=this.backend[n].bind(this.backend);if(l.length===2){try{const c=l(t,e);c&&typeof c.then=="function"?c.then(u=>a(null,u)).catch(a):a(null,c)}catch(c){a(c)}return}return l(t,e,a)}prepareLoading(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),i&&i();w(t)&&(t=this.languageUtils.toResolveHierarchy(t)),w(e)&&(e=[e]);const o=this.queueLoad(t,e,n,i);if(!o.toLoad.length)return o.pending.length||i(),null;o.toLoad.forEach(r=>{this.loadOne(r)})}load(t,e,n){this.prepareLoading(t,e,{},n)}reload(t,e,n){this.prepareLoading(t,e,{reload:!0},n)}loadOne(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const n=t.split("|"),i=n[0],o=n[1];this.read(i,o,"read",void 0,void 0,(r,a)=>{r&&this.logger.warn(`${e}loading namespace ${o} for language ${i} failed`,r),!r&&a&&this.logger.log(`${e}loaded namespace ${o} for language ${i}`,a),this.loaded(t,r,a)})}saveMissing(t,e,n,i,o){let r=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},a=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(e)){this.logger.warn(`did not save key "${n}" as the namespace "${e}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(n==null||n==="")){if(this.backend&&this.backend.create){const l={...r,isUpdate:o},c=this.backend.create.bind(this.backend);if(c.length<6)try{let u;c.length===5?u=c(t,e,n,i,l):u=c(t,e,n,i),u&&typeof u.then=="function"?u.then(d=>a(null,d)).catch(a):a(null,u)}catch(u){a(u)}else c(t,e,n,i,a,l)}!t||!t[0]||this.store.addResource(t[0],e,n,i)}}}const es=()=>({debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:s=>{let t={};if(typeof s[1]=="object"&&(t=s[1]),w(s[1])&&(t.defaultValue=s[1]),w(s[2])&&(t.tDescription=s[2]),typeof s[2]=="object"||typeof s[3]=="object"){const e=s[3]||s[2];Object.keys(e).forEach(n=>{t[n]=e[n]})}return t},interpolation:{escapeValue:!0,format:s=>s,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),ss=s=>(w(s.ns)&&(s.ns=[s.ns]),w(s.fallbackLng)&&(s.fallbackLng=[s.fallbackLng]),w(s.fallbackNS)&&(s.fallbackNS=[s.fallbackNS]),s.supportedLngs&&s.supportedLngs.indexOf("cimode")<0&&(s.supportedLngs=s.supportedLngs.concat(["cimode"])),s),Ft=()=>{},no=s=>{Object.getOwnPropertyNames(Object.getPrototypeOf(s)).forEach(e=>{typeof s[e]=="function"&&(s[e]=s[e].bind(s))})};class Ot extends oe{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;if(super(),this.options=ss(t),this.services={},this.logger=G,this.modules={external:[]},no(this),e&&!this.isInitialized&&!t.isClone){if(!this.options.initImmediate)return this.init(t,e),this;setTimeout(()=>{this.init(t,e)},0)}}init(){var t=this;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof e=="function"&&(n=e,e={}),!e.defaultNS&&e.defaultNS!==!1&&e.ns&&(w(e.ns)?e.defaultNS=e.ns:e.ns.indexOf("translation")<0&&(e.defaultNS=e.ns[0]));const i=es();this.options={...i,...this.options,...ss(e)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...i.interpolation,...this.options.interpolation}),e.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=e.keySeparator),e.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=e.nsSeparator);const o=u=>u?typeof u=="function"?new u:u:null;if(!this.options.isClone){this.modules.logger?G.init(o(this.modules.logger),this.options):G.init(null,this.options);let u;this.modules.formatter?u=this.modules.formatter:typeof Intl<"u"&&(u=to);const d=new Xe(this.options);this.store=new qe(this.options.resources,this.options);const h=this.services;h.logger=G,h.resourceStore=this.store,h.languageUtils=d,h.pluralResolver=new Qi(d,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),u&&(!this.options.interpolation.format||this.options.interpolation.format===i.interpolation.format)&&(h.formatter=o(u),h.formatter.init(h,this.options),this.options.interpolation.format=h.formatter.format.bind(h.formatter)),h.interpolator=new Xi(this.options),h.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},h.backendConnector=new so(o(this.modules.backend),h.resourceStore,h,this.options),h.backendConnector.on("*",function(f){for(var p=arguments.length,g=new Array(p>1?p-1:0),m=1;m<p;m++)g[m-1]=arguments[m];t.emit(f,...g)}),this.modules.languageDetector&&(h.languageDetector=o(this.modules.languageDetector),h.languageDetector.init&&h.languageDetector.init(h,this.options.detection,this.options)),this.modules.i18nFormat&&(h.i18nFormat=o(this.modules.i18nFormat),h.i18nFormat.init&&h.i18nFormat.init(this)),this.translator=new Jt(this.services,this.options),this.translator.on("*",function(f){for(var p=arguments.length,g=new Array(p>1?p-1:0),m=1;m<p;m++)g[m-1]=arguments[m];t.emit(f,...g)}),this.modules.external.forEach(f=>{f.init&&f.init(this)})}if(this.format=this.options.interpolation.format,n||(n=Ft),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const u=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);u.length>0&&u[0]!=="dev"&&(this.options.lng=u[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(u=>{this[u]=function(){return t.store[u](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(u=>{this[u]=function(){return t.store[u](...arguments),t}});const l=_t(),c=()=>{const u=(d,h)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(h),n(d,h)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return u(null,this.t.bind(this));this.changeLanguage(this.options.lng,u)};return this.options.resources||!this.options.initImmediate?c():setTimeout(c,0),l}loadResources(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ft;const i=w(t)?t:this.language;if(typeof t=="function"&&(n=t),!this.options.resources||this.options.partialBundledLanguages){if(i&&i.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return n();const o=[],r=a=>{if(!a||a==="cimode")return;this.services.languageUtils.toResolveHierarchy(a).forEach(c=>{c!=="cimode"&&o.indexOf(c)<0&&o.push(c)})};i?r(i):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l=>r(l)),this.options.preload&&this.options.preload.forEach(a=>r(a)),this.services.backendConnector.load(o,this.options.ns,a=>{!a&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),n(a)})}else n(null)}reloadResources(t,e,n){const i=_t();return typeof t=="function"&&(n=t,t=void 0),typeof e=="function"&&(n=e,e=void 0),t||(t=this.languages),e||(e=this.options.ns),n||(n=Ft),this.services.backendConnector.reload(t,e,o=>{i.resolve(),n(o)}),i}use(t){if(!t)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!t.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return t.type==="backend"&&(this.modules.backend=t),(t.type==="logger"||t.log&&t.warn&&t.error)&&(this.modules.logger=t),t.type==="languageDetector"&&(this.modules.languageDetector=t),t.type==="i18nFormat"&&(this.modules.i18nFormat=t),t.type==="postProcessor"&&Bs.addPostProcessor(t),t.type==="formatter"&&(this.modules.formatter=t),t.type==="3rdParty"&&this.modules.external.push(t),this}setResolvedLanguage(t){if(!(!t||!this.languages)&&!(["cimode","dev"].indexOf(t)>-1))for(let e=0;e<this.languages.length;e++){const n=this.languages[e];if(!(["cimode","dev"].indexOf(n)>-1)&&this.store.hasLanguageSomeTranslations(n)){this.resolvedLanguage=n;break}}}changeLanguage(t,e){var n=this;this.isLanguageChangingTo=t;const i=_t();this.emit("languageChanging",t);const o=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},r=(l,c)=>{c?(o(c),this.translator.changeLanguage(c),this.isLanguageChangingTo=void 0,this.emit("languageChanged",c),this.logger.log("languageChanged",c)):this.isLanguageChangingTo=void 0,i.resolve(function(){return n.t(...arguments)}),e&&e(l,function(){return n.t(...arguments)})},a=l=>{!t&&!l&&this.services.languageDetector&&(l=[]);const c=w(l)?l:this.services.languageUtils.getBestMatchFromCodes(l);c&&(this.language||o(c),this.translator.language||this.translator.changeLanguage(c),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(c)),this.loadResources(c,u=>{r(u,c)})};return!t&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!t&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(t),i}getFixedT(t,e,n){var i=this;const o=function(r,a){let l;if(typeof a!="object"){for(var c=arguments.length,u=new Array(c>2?c-2:0),d=2;d<c;d++)u[d-2]=arguments[d];l=i.options.overloadTranslationOptionHandler([r,a].concat(u))}else l={...a};l.lng=l.lng||o.lng,l.lngs=l.lngs||o.lngs,l.ns=l.ns||o.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||n||o.keyPrefix);const h=i.options.keySeparator||".";let f;return l.keyPrefix&&Array.isArray(r)?f=r.map(p=>`${l.keyPrefix}${h}${p}`):f=l.keyPrefix?`${l.keyPrefix}${h}${r}`:r,i.t(f,l)};return w(t)?o.lng=t:o.lngs=t,o.ns=e,o.keyPrefix=n,o}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(t){this.options.defaultNS=t}hasLoadedNamespace(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const n=e.lng||this.resolvedLanguage||this.languages[0],i=this.options?this.options.fallbackLng:!1,o=this.languages[this.languages.length-1];if(n.toLowerCase()==="cimode")return!0;const r=(a,l)=>{const c=this.services.backendConnector.state[`${a}|${l}`];return c===-1||c===0||c===2};if(e.precheck){const a=e.precheck(this,r);if(a!==void 0)return a}return!!(this.hasResourceBundle(n,t)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||r(n,t)&&(!i||r(o,t)))}loadNamespaces(t,e){const n=_t();return this.options.ns?(w(t)&&(t=[t]),t.forEach(i=>{this.options.ns.indexOf(i)<0&&this.options.ns.push(i)}),this.loadResources(i=>{n.resolve(),e&&e(i)}),n):(e&&e(),Promise.resolve())}loadLanguages(t,e){const n=_t();w(t)&&(t=[t]);const i=this.options.preload||[],o=t.filter(r=>i.indexOf(r)<0&&this.services.languageUtils.isSupportedCode(r));return o.length?(this.options.preload=i.concat(o),this.loadResources(r=>{n.resolve(),e&&e(r)}),n):(e&&e(),Promise.resolve())}dir(t){if(t||(t=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!t)return"rtl";const e=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],n=this.services&&this.services.languageUtils||new Xe(es());return e.indexOf(n.getLanguagePartFromCode(t))>-1||t.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;return new Ot(t,e)}cloneInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ft;const n=t.forkResourceStore;n&&delete t.forkResourceStore;const i={...this.options,...t,isClone:!0},o=new Ot(i);return(t.debug!==void 0||t.prefix!==void 0)&&(o.logger=o.logger.clone(t)),["store","services","language"].forEach(a=>{o[a]=this[a]}),o.services={...this.services},o.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},n&&(o.store=new qe(this.store.data,i),o.services.resourceStore=o.store),o.translator=new Jt(o.services,i),o.translator.on("*",function(a){for(var l=arguments.length,c=new Array(l>1?l-1:0),u=1;u<l;u++)c[u-1]=arguments[u];o.emit(a,...c)}),o.init(i,e),o.translator.options=i,o.translator.backendConnector.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},o}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const M=Ot.createInstance();M.createInstance=Ot.createInstance;M.createInstance;M.dir;M.init;M.loadResources;M.reloadResources;M.use;M.changeLanguage;M.getFixedT;const io=M.t;M.exists;M.setDefaultNamespace;M.hasLoadedNamespace;M.loadNamespaces;M.loadLanguages;class oo{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class ro{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(t=>this.Z=t)}resume(){this.Z?.(),this.Y=this.Z=void 0}}const ns=s=>!nn(s)&&typeof s.then=="function",is=1073741823;let ao=class extends _e{constructor(){super(...arguments),this._$Cwt=is,this._$Cbt=[],this._$CK=new oo(this),this._$CX=new ro}render(...t){return t.find(e=>!ns(e))??U}update(t,e){const n=this._$Cbt;let i=n.length;this._$Cbt=e;const o=this._$CK,r=this._$CX;this.isConnected||this.disconnected();for(let a=0;a<e.length&&!(a>this._$Cwt);a++){const l=e[a];if(!ns(l))return this._$Cwt=a,l;a<i&&l===n[a]||(this._$Cwt=is,i=0,Promise.resolve(l).then(async c=>{for(;r.get();)await r.get();const u=o.deref();if(u!==void 0){const d=u._$Cbt.indexOf(l);d>-1&&d<u._$Cwt&&(u._$Cwt=d,u.setValue(c))}}))}return U}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}};const os=ft(ao);const rs=(s,t,e)=>{const n=new Map;for(let i=t;i<=e;i++)n.set(s[i],i);return n},lo=ft(class extends kt{constructor(s){if(super(s),s.type!==J.CHILD)throw Error("repeat() can only be used in text expressions")}dt(s,t,e){let n;e===void 0?e=t:t!==void 0&&(n=t);const i=[],o=[];let r=0;for(const a of s)i[r]=n?n(a,r):r,o[r]=e(a,r),r++;return{values:o,keys:i}}render(s,t,e){return this.dt(s,t,e).values}update(s,[t,e,n]){const i=on(s),{values:o,keys:r}=this.dt(t,e,n);if(!Array.isArray(i))return this.ut=r,o;const a=this.ut??=[],l=[];let c,u,d=0,h=i.length-1,f=0,p=o.length-1;for(;d<=h&&f<=p;)if(i[d]===null)d++;else if(i[h]===null)h--;else if(a[d]===r[f])l[f]=at(i[d],o[f]),d++,f++;else if(a[h]===r[p])l[p]=at(i[h],o[p]),h--,p--;else if(a[d]===r[p])l[p]=at(i[d],o[p]),wt(s,l[p+1],i[d]),d++,p--;else if(a[h]===r[f])l[f]=at(i[h],o[f]),wt(s,i[d],i[h]),h--,f++;else if(c===void 0&&(c=rs(r,f,p),u=rs(a,d,h)),c.has(a[d]))if(c.has(a[h])){const g=u.get(r[f]),m=g!==void 0?i[g]:null;if(m===null){const b=wt(s,i[d]);at(b,o[f]),l[f]=b}else l[f]=at(m,o[f]),wt(s,i[d],m),i[g]=null;f++}else ce(i[h]),h--;else ce(i[d]),d++;for(;f<=p;){const g=wt(s,l[p+1]);at(g,o[f]),l[f++]=g}for(;d<=h;){const g=i[d++];g!==null&&ce(g)}return this.ut=r,ms(s,l),U}});class re extends Event{constructor(t){super(re.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}}re.eventName="rangeChanged";class ae extends Event{constructor(t){super(ae.eventName,{bubbles:!1}),this.first=t.first,this.last=t.last}}ae.eventName="visibilityChanged";class le extends Event{constructor(){super(le.eventName,{bubbles:!1})}}le.eventName="unpinned";class co{constructor(t){this._element=null;const e=t??window;this._node=e,t&&(this._element=t)}get element(){return this._element||document.scrollingElement||document.documentElement}get scrollTop(){return this.element.scrollTop||window.scrollY}get scrollLeft(){return this.element.scrollLeft||window.scrollX}get scrollHeight(){return this.element.scrollHeight}get scrollWidth(){return this.element.scrollWidth}get viewportHeight(){return this._element?this._element.getBoundingClientRect().height:window.innerHeight}get viewportWidth(){return this._element?this._element.getBoundingClientRect().width:window.innerWidth}get maxScrollTop(){return this.scrollHeight-this.viewportHeight}get maxScrollLeft(){return this.scrollWidth-this.viewportWidth}}class uo extends co{constructor(t,e){super(e),this._clients=new Set,this._retarget=null,this._end=null,this.__destination=null,this.correctingScrollError=!1,this._checkForArrival=this._checkForArrival.bind(this),this._updateManagedScrollTo=this._updateManagedScrollTo.bind(this),this.scrollTo=this.scrollTo.bind(this),this.scrollBy=this.scrollBy.bind(this);const n=this._node;this._originalScrollTo=n.scrollTo,this._originalScrollBy=n.scrollBy,this._originalScroll=n.scroll,this._attach(t)}get _destination(){return this.__destination}get scrolling(){return this._destination!==null}scrollTo(t,e){const n=typeof t=="number"&&typeof e=="number"?{left:t,top:e}:t;this._scrollTo(n)}scrollBy(t,e){const n=typeof t=="number"&&typeof e=="number"?{left:t,top:e}:t;n.top!==void 0&&(n.top+=this.scrollTop),n.left!==void 0&&(n.left+=this.scrollLeft),this._scrollTo(n)}_nativeScrollTo(t){this._originalScrollTo.bind(this._element||window)(t)}_scrollTo(t,e=null,n=null){this._end!==null&&this._end(),t.behavior==="smooth"?(this._setDestination(t),this._retarget=e,this._end=n):this._resetScrollState(),this._nativeScrollTo(t)}_setDestination(t){let{top:e,left:n}=t;return e=e===void 0?void 0:Math.max(0,Math.min(e,this.maxScrollTop)),n=n===void 0?void 0:Math.max(0,Math.min(n,this.maxScrollLeft)),this._destination!==null&&n===this._destination.left&&e===this._destination.top?!1:(this.__destination={top:e,left:n,behavior:"smooth"},!0)}_resetScrollState(){this.__destination=null,this._retarget=null,this._end=null}_updateManagedScrollTo(t){this._destination&&this._setDestination(t)&&this._nativeScrollTo(this._destination)}managedScrollTo(t,e,n){return this._scrollTo(t,e,n),this._updateManagedScrollTo}correctScrollError(t){this.correctingScrollError=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>this.correctingScrollError=!1)),this._nativeScrollTo(t),this._retarget&&this._setDestination(this._retarget()),this._destination&&this._nativeScrollTo(this._destination)}_checkForArrival(){if(this._destination!==null){const{scrollTop:t,scrollLeft:e}=this;let{top:n,left:i}=this._destination;n=Math.min(n||0,this.maxScrollTop),i=Math.min(i||0,this.maxScrollLeft);const o=Math.abs(n-t),r=Math.abs(i-e);o<1&&r<1&&(this._end&&this._end(),this._resetScrollState())}}detach(t){return this._clients.delete(t),this._clients.size===0&&(this._node.scrollTo=this._originalScrollTo,this._node.scrollBy=this._originalScrollBy,this._node.scroll=this._originalScroll,this._node.removeEventListener("scroll",this._checkForArrival)),null}_attach(t){this._clients.add(t),this._clients.size===1&&(this._node.scrollTo=this.scrollTo,this._node.scrollBy=this.scrollBy,this._node.scroll=this.scrollTo,this._node.addEventListener("scroll",this._checkForArrival))}}let as=typeof window<"u"?window.ResizeObserver:void 0;const xe=Symbol("virtualizerRef"),It="virtualizer-sizer";let ls;class ho{constructor(t){if(this._benchmarkStart=null,this._layout=null,this._clippingAncestors=[],this._scrollSize=null,this._scrollError=null,this._childrenPos=null,this._childMeasurements=null,this._toBeMeasured=new Map,this._rangeChanged=!0,this._itemsChanged=!0,this._visibilityChanged=!0,this._scrollerController=null,this._isScroller=!1,this._sizer=null,this._hostElementRO=null,this._childrenRO=null,this._mutationObserver=null,this._scrollEventListeners=[],this._scrollEventListenerOptions={passive:!0},this._loadListener=this._childLoaded.bind(this),this._scrollIntoViewTarget=null,this._updateScrollIntoViewCoordinates=null,this._items=[],this._first=-1,this._last=-1,this._firstVisible=-1,this._lastVisible=-1,this._scheduled=new WeakSet,this._measureCallback=null,this._measureChildOverride=null,this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null,this._layoutInitialized=null,this._connected=!1,!t)throw new Error("Virtualizer constructor requires a configuration object");if(t.hostElement)this._init(t);else throw new Error('Virtualizer configuration requires the "hostElement" property')}set items(t){Array.isArray(t)&&t!==this._items&&(this._itemsChanged=!0,this._items=t,this._schedule(this._updateLayout))}_init(t){this._isScroller=!!t.scroller,this._initHostElement(t);const e=t.layout||{};this._layoutInitialized=this._initLayout(e)}_initObservers(){this._mutationObserver=new MutationObserver(this._finishDOMUpdate.bind(this)),this._hostElementRO=new as(()=>this._hostElementSizeChanged()),this._childrenRO=new as(this._childrenSizeChanged.bind(this))}_initHostElement(t){const e=this._hostElement=t.hostElement;this._applyVirtualizerStyles(),e[xe]=this}connected(){this._initObservers();const t=this._isScroller;this._clippingAncestors=go(this._hostElement,t),this._scrollerController=new uo(this,this._clippingAncestors[0]),this._schedule(this._updateLayout),this._observeAndListen(),this._connected=!0}_observeAndListen(){this._mutationObserver.observe(this._hostElement,{childList:!0}),this._hostElementRO.observe(this._hostElement),this._scrollEventListeners.push(window),window.addEventListener("scroll",this,this._scrollEventListenerOptions),this._clippingAncestors.forEach(t=>{t.addEventListener("scroll",this,this._scrollEventListenerOptions),this._scrollEventListeners.push(t),this._hostElementRO.observe(t)}),this._hostElementRO.observe(this._scrollerController.element),this._children.forEach(t=>this._childrenRO.observe(t)),this._scrollEventListeners.forEach(t=>t.addEventListener("scroll",this,this._scrollEventListenerOptions))}disconnected(){this._scrollEventListeners.forEach(t=>t.removeEventListener("scroll",this,this._scrollEventListenerOptions)),this._scrollEventListeners=[],this._clippingAncestors=[],this._scrollerController?.detach(this),this._scrollerController=null,this._mutationObserver?.disconnect(),this._mutationObserver=null,this._hostElementRO?.disconnect(),this._hostElementRO=null,this._childrenRO?.disconnect(),this._childrenRO=null,this._rejectLayoutCompletePromise("disconnected"),this._connected=!1}_applyVirtualizerStyles(){const e=this._hostElement.style;e.display=e.display||"block",e.position=e.position||"relative",e.contain=e.contain||"size layout",this._isScroller&&(e.overflow=e.overflow||"auto",e.minHeight=e.minHeight||"150px")}_getSizer(){const t=this._hostElement;if(!this._sizer){let e=t.querySelector(`[${It}]`);e||(e=document.createElement("div"),e.setAttribute(It,""),t.appendChild(e)),Object.assign(e.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),e.textContent="&nbsp;",e.setAttribute(It,""),this._sizer=e}return this._sizer}async updateLayoutConfig(t){await this._layoutInitialized;const e=t.type||ls;if(typeof e=="function"&&this._layout instanceof e){const n={...t};return delete n.type,this._layout.config=n,!0}return!1}async _initLayout(t){let e,n;if(typeof t.type=="function"){n=t.type;const i={...t};delete i.type,e=i}else e=t;n===void 0&&(ls=n=(await rn(()=>import("./flow-BqIEBwW6.js"),[],import.meta.url)).FlowLayout),this._layout=new n(i=>this._handleLayoutMessage(i),e),this._layout.measureChildren&&typeof this._layout.updateItemSizes=="function"&&(typeof this._layout.measureChildren=="function"&&(this._measureChildOverride=this._layout.measureChildren),this._measureCallback=this._layout.updateItemSizes.bind(this._layout)),this._layout.listenForChildLoadEvents&&this._hostElement.addEventListener("load",this._loadListener,!0),this._schedule(this._updateLayout)}startBenchmarking(){this._benchmarkStart===null&&(this._benchmarkStart=window.performance.now())}stopBenchmarking(){if(this._benchmarkStart!==null){const t=window.performance.now(),e=t-this._benchmarkStart,i=performance.getEntriesByName("uv-virtualizing","measure").filter(o=>o.startTime>=this._benchmarkStart&&o.startTime<t).reduce((o,r)=>o+r.duration,0);return this._benchmarkStart=null,{timeElapsed:e,virtualizationTime:i}}return null}_measureChildren(){const t={},e=this._children,n=this._measureChildOverride||this._measureChild;for(let i=0;i<e.length;i++){const o=e[i],r=this._first+i;(this._itemsChanged||this._toBeMeasured.has(o))&&(t[r]=n.call(this,o,this._items[r]))}this._childMeasurements=t,this._schedule(this._updateLayout),this._toBeMeasured.clear()}_measureChild(t){const{width:e,height:n}=t.getBoundingClientRect();return Object.assign({width:e,height:n},fo(t))}async _schedule(t){this._scheduled.has(t)||(this._scheduled.add(t),await Promise.resolve(),this._scheduled.delete(t),t.call(this))}async _updateDOM(t){this._scrollSize=t.scrollSize,this._adjustRange(t.range),this._childrenPos=t.childPositions,this._scrollError=t.scrollError||null;const{_rangeChanged:e,_itemsChanged:n}=this;this._visibilityChanged&&(this._notifyVisibility(),this._visibilityChanged=!1),(e||n)&&(this._notifyRange(),this._rangeChanged=!1),this._finishDOMUpdate()}_finishDOMUpdate(){this._connected&&(this._children.forEach(t=>this._childrenRO.observe(t)),this._checkScrollIntoViewTarget(this._childrenPos),this._positionChildren(this._childrenPos),this._sizeHostElement(this._scrollSize),this._correctScrollError(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_updateLayout(){this._layout&&this._connected&&(this._layout.items=this._items,this._updateView(),this._childMeasurements!==null&&(this._measureCallback&&this._measureCallback(this._childMeasurements),this._childMeasurements=null),this._layout.reflowIfNeeded(),this._benchmarkStart&&"mark"in window.performance&&window.performance.mark("uv-end"))}_handleScrollEvent(){if(this._benchmarkStart&&"mark"in window.performance){try{window.performance.measure("uv-virtualizing","uv-start","uv-end")}catch(t){console.warn("Error measuring performance data: ",t)}window.performance.mark("uv-start")}this._scrollerController.correctingScrollError===!1&&this._layout?.unpin(),this._schedule(this._updateLayout)}handleEvent(t){t.type==="scroll"?(t.currentTarget===window||this._clippingAncestors.includes(t.currentTarget))&&this._handleScrollEvent():console.warn("event not handled",t)}_handleLayoutMessage(t){t.type==="stateChanged"?this._updateDOM(t):t.type==="visibilityChanged"?(this._firstVisible=t.firstVisible,this._lastVisible=t.lastVisible,this._notifyVisibility()):t.type==="unpinned"&&this._hostElement.dispatchEvent(new le)}get _children(){const t=[];let e=this._hostElement.firstElementChild;for(;e;)e.hasAttribute(It)||t.push(e),e=e.nextElementSibling;return t}_updateView(){const t=this._hostElement,e=this._scrollerController?.element,n=this._layout;if(t&&e&&n){let i,o,r,a;const l=t.getBoundingClientRect();i=0,o=0,r=window.innerHeight,a=window.innerWidth;const c=this._clippingAncestors.map(b=>b.getBoundingClientRect());c.unshift(l);for(const b of c)i=Math.max(i,b.top),o=Math.max(o,b.left),r=Math.min(r,b.bottom),a=Math.min(a,b.right);const u=e.getBoundingClientRect(),d={left:l.left-u.left,top:l.top-u.top},h={width:e.scrollWidth,height:e.scrollHeight},f=i-l.top+t.scrollTop,p=o-l.left+t.scrollLeft,g=Math.max(0,r-i),m=Math.max(0,a-o);n.viewportSize={width:m,height:g},n.viewportScroll={top:f,left:p},n.totalScrollSize=h,n.offsetWithinScroller=d}}_sizeHostElement(t){const n=t&&t.width!==null?Math.min(82e5,t.width):0,i=t&&t.height!==null?Math.min(82e5,t.height):0;if(this._isScroller)this._getSizer().style.transform=`translate(${n}px, ${i}px)`;else{const o=this._hostElement.style;o.minWidth=n?`${n}px`:"100%",o.minHeight=i?`${i}px`:"100%"}}_positionChildren(t){t&&t.forEach(({top:e,left:n,width:i,height:o,xOffset:r,yOffset:a},l)=>{const c=this._children[l-this._first];c&&(c.style.position="absolute",c.style.boxSizing="border-box",c.style.transform=`translate(${n}px, ${e}px)`,i!==void 0&&(c.style.width=i+"px"),o!==void 0&&(c.style.height=o+"px"),c.style.left=r===void 0?null:r+"px",c.style.top=a===void 0?null:a+"px")})}async _adjustRange(t){const{_first:e,_last:n,_firstVisible:i,_lastVisible:o}=this;this._first=t.first,this._last=t.last,this._firstVisible=t.firstVisible,this._lastVisible=t.lastVisible,this._rangeChanged=this._rangeChanged||this._first!==e||this._last!==n,this._visibilityChanged=this._visibilityChanged||this._firstVisible!==i||this._lastVisible!==o}_correctScrollError(){if(this._scrollError){const{scrollTop:t,scrollLeft:e}=this._scrollerController,{top:n,left:i}=this._scrollError;this._scrollError=null,this._scrollerController.correctScrollError({top:t-n,left:e-i})}}element(t){return t===1/0&&(t=this._items.length-1),this._items?.[t]===void 0?void 0:{scrollIntoView:(e={})=>this._scrollElementIntoView({...e,index:t})}}_scrollElementIntoView(t){if(t.index>=this._first&&t.index<=this._last)this._children[t.index-this._first].scrollIntoView(t);else if(t.index=Math.min(t.index,this._items.length-1),t.behavior==="smooth"){const e=this._layout.getScrollIntoViewCoordinates(t),{behavior:n}=t;this._updateScrollIntoViewCoordinates=this._scrollerController.managedScrollTo(Object.assign(e,{behavior:n}),()=>this._layout.getScrollIntoViewCoordinates(t),()=>this._scrollIntoViewTarget=null),this._scrollIntoViewTarget=t}else this._layout.pin=t}_checkScrollIntoViewTarget(t){const{index:e}=this._scrollIntoViewTarget||{};e&&t?.has(e)&&this._updateScrollIntoViewCoordinates(this._layout.getScrollIntoViewCoordinates(this._scrollIntoViewTarget))}_notifyRange(){this._hostElement.dispatchEvent(new re({first:this._first,last:this._last}))}_notifyVisibility(){this._hostElement.dispatchEvent(new ae({first:this._firstVisible,last:this._lastVisible}))}get layoutComplete(){return this._layoutCompletePromise||(this._layoutCompletePromise=new Promise((t,e)=>{this._layoutCompleteResolver=t,this._layoutCompleteRejecter=e})),this._layoutCompletePromise}_rejectLayoutCompletePromise(t){this._layoutCompleteRejecter!==null&&this._layoutCompleteRejecter(t),this._resetLayoutCompleteState()}_scheduleLayoutComplete(){this._layoutCompletePromise&&this._pendingLayoutComplete===null&&(this._pendingLayoutComplete=requestAnimationFrame(()=>requestAnimationFrame(()=>this._resolveLayoutCompletePromise())))}_resolveLayoutCompletePromise(){this._layoutCompleteResolver!==null&&this._layoutCompleteResolver(),this._resetLayoutCompleteState()}_resetLayoutCompleteState(){this._layoutCompletePromise=null,this._layoutCompleteResolver=null,this._layoutCompleteRejecter=null,this._pendingLayoutComplete=null}_hostElementSizeChanged(){this._schedule(this._updateLayout)}_childLoaded(){}_childrenSizeChanged(t){if(this._layout?.measureChildren){for(const e of t)this._toBeMeasured.set(e.target,e.contentRect);this._measureChildren()}this._scheduleLayoutComplete(),this._itemsChanged=!1,this._rangeChanged=!1}}function fo(s){const t=window.getComputedStyle(s);return{marginTop:Mt(t.marginTop),marginRight:Mt(t.marginRight),marginBottom:Mt(t.marginBottom),marginLeft:Mt(t.marginLeft)}}function Mt(s){const t=s?parseFloat(s):NaN;return Number.isNaN(t)?0:t}function cs(s){if(s.assignedSlot!==null)return s.assignedSlot;if(s.parentElement!==null)return s.parentElement;const t=s.parentNode;return t&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&t.host||null}function po(s,t=!1){const e=[];let n=t?s:cs(s);for(;n!==null;)e.push(n),n=cs(n);return e}function go(s,t=!1){let e=!1;return po(s,t).filter(n=>{if(e)return!1;const i=getComputedStyle(n);return e=i.position==="fixed",i.overflow!=="visible"})}const mo=s=>s,bo=(s,t)=>R`${t}: ${JSON.stringify(s,null,2)}`;class yo extends _e{constructor(t){if(super(t),this._virtualizer=null,this._first=0,this._last=-1,this._renderItem=(e,n)=>bo(e,n+this._first),this._keyFunction=(e,n)=>mo(e,n+this._first),this._items=[],t.type!==J.CHILD)throw new Error("The virtualize directive can only be used in child expressions")}render(t){t&&this._setFunctions(t);const e=[];if(this._first>=0&&this._last>=this._first)for(let n=this._first;n<=this._last;n++)e.push(this._items[n]);return lo(e,this._keyFunction,this._renderItem)}update(t,[e]){this._setFunctions(e);const n=this._items!==e.items;return this._items=e.items||[],this._virtualizer?this._updateVirtualizerConfig(t,e):this._initialize(t,e),n?U:this.render()}async _updateVirtualizerConfig(t,e){if(!await this._virtualizer.updateLayoutConfig(e.layout||{})){const i=t.parentNode;this._makeVirtualizer(i,e)}this._virtualizer.items=this._items}_setFunctions(t){const{renderItem:e,keyFunction:n}=t;e&&(this._renderItem=(i,o)=>e(i,o+this._first)),n&&(this._keyFunction=(i,o)=>n(i,o+this._first))}_makeVirtualizer(t,e){this._virtualizer&&this._virtualizer.disconnected();const{layout:n,scroller:i,items:o}=e;this._virtualizer=new ho({hostElement:t,layout:n,scroller:i}),this._virtualizer.items=o,this._virtualizer.connected()}_initialize(t,e){const n=t.parentNode;n&&n.nodeType===1&&(n.addEventListener("rangeChanged",i=>{this._first=i.first,this._last=i.last,this.setValue(this.render())}),this._makeVirtualizer(n,e))}disconnected(){this._virtualizer?.disconnected()}reconnected(){this._virtualizer?.connected()}}const vo=ft(yo),xo=(s=HTMLElement)=>class extends s{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent("connected"))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent("disconnected"))}},wo=(s,t)=>{if(!s||!t)return;const e=Object.keys(t);return Object.fromEntries(Object.keys(s).flatMap(n=>e.includes(n)?[]:[[n,void 0]]))};class _o extends kt{_props;render(t){return U}update(t,[e]){return this._props!==e&&Object.assign(t.element,wo(this._props,e),this._props=e),U}}const So=ft(_o);function Co(s){return()=>s}const Eo=Co(),$o=Eo,Gt=s=>s,vr=(s,...t)=>typeof s=="function"?s(...t):s,Lo=s=>{const t=ie(),e=I(()=>new CSSStyleSheet,[]);N(()=>{t.shadowRoot.adoptedStyleSheets=[...t.shadowRoot.adoptedStyleSheets,e]},[]),N(()=>{e.replaceSync(s)},[s])};function Hs(s){return s?t=>t?.[s]:Gt}const Oo=s=>{const t=Hs(s);return e=>typeof e=="string"?e:t(e)?.toString()||""},ko=s=>t=>{const e={};for(const n in t)s.includes(n)&&(e[n]=t[n]);return e},Ro="data:image/svg+xml,%3Csvg width='11' height='8' viewBox='0 0 11 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.5 1L5.20039 7.04766L1.66348 3.46152' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E",zo=bt`
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
		background: url("${Ro}") #5881f6 no-repeat 50%;
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
`,Ao=({index:s,itemHeight:t,auto:e})=>bt`
	${tt(!e,()=>bt`
			.item {
				line-height: ${t}px;
				height: ${t}px;
			}
		`)}

	.item[data-index='${s||"0"}'] {
		background: var(
			--cosmoz-listbox-active-color,
			var(--cosmoz-selection-color, rgba(58, 145, 226, 0.1))
		);
	}
`,Po=s=>{const t=s==="auto",[e,n]=it(t?40:s);return[e,i=>t?n(i):void 0]},At=s=>{const t=I(()=>({}),[]);return I(()=>Object.assign(t,s),[t,...Object.values(s)])},To=s=>{const t=At(s);N(()=>{const e=n=>{if(!(n.ctrlKey&&n.altKey||n.defaultPrevented))switch(n.key){case"Up":case"ArrowUp":n.preventDefault(),t.onUp();break;case"Down":case"ArrowDown":n.preventDefault(),t.onDown();break;case"Enter":n.preventDefault(),t.onEnter();break}};return document.addEventListener("keydown",e,!0),()=>document.removeEventListener("keydown",e,!0)},[t])},No=({items:s,onSelect:t,defaultIndex:e=0})=>{const[n,i]=it({index:e}),{index:o}=n,{length:r}=s;return N(()=>{i({index:n.index<0?e:Math.min(n.index,s.length-1),scroll:!0})},[s,e]),To({onUp:L(()=>i(a=>({index:a.index>0?a.index-1:r-1,scroll:!0})),[r]),onDown:L(()=>i(a=>({index:a.index<r-1?a.index+1:0,scroll:!0})),[r]),onEnter:L(()=>o>-1&&o<r&&t?.(s[o],o),[o,s,t])}),{position:n,highlight:L(a=>i({index:a}),[]),select:L(a=>t?.(a),[t])}},Fo=s=>typeof s=="object"&&s!==null&&Symbol.iterator in s;function dt(s){return s==null?[]:Array.isArray(s)?s:typeof s=="string"?[s]:Fo(s)?Array.from(s):[s]}const ge=(s,t=Gt)=>e=>{const n=dt(s).map(t);return dt(e).filter(i=>!n.includes(t(i)))},Io=(s,t)=>t?e=>dt(s).find(n=>n[t]===e[t]):e=>dt(s).includes(e),Mo=(s,t)=>{if(!t||!s)return s;const e=s.toLowerCase().indexOf(t.toLowerCase());if(e<0)return s;const n=e+t.length;return[s.slice(0,e),R`<mark>${s.slice(e,n)}</mark>`,s.slice(n)]},Do=(s=Gt)=>(t,e,{highlight:n,select:i,textual:o=Gt,query:r,isSelected:a})=>{const l=o(t),c=Mo(l,r),u=s(c,t,e);return R`<div
				class="item"
				role="option"
				part="option"
				?aria-selected=${a(t)}
				data-index=${e}
				@mouseenter=${()=>n(e)}
				@click=${()=>i(t)}
				@mousedown=${d=>d.preventDefault()}
				title=${l}
			>
				${u}
			</div>
			<div class="sizer" virtualizer-sizer>${u}</div>`},Vo=({itemRenderer:s=Do(),...t})=>{const e=At(t);return L((n,i)=>s(n,i,e),[e,s])},jo=["query","items","onSelect","textual","anchor","itemHeight","itemLimit","itemRenderer","defaultIndex","value","valueProperty","loading"],Bo=({value:s,valueProperty:t,items:e,onSelect:n,defaultIndex:i,query:o,textual:r,itemRenderer:a,itemHeight:l=40,itemLimit:c=5})=>{const u=I(()=>Io(s,t),[s,t]),d=I(()=>e.slice(),[e,u]),{position:h,highlight:f,select:p}=No({items:d,onSelect:n,defaultIndex:isNaN(i)?void 0:Number(i)}),[g,m]=Po(l);return{position:h,items:d,height:Math.min(c,d.length)*g,highlight:f,select:p,itemHeight:g,setItemHeight:m,renderItem:Vo({itemRenderer:a,items:d,position:h,highlight:f,select:p,textual:r,query:o,isSelected:u})}},us=$o,Ho=s=>{const t=_s(void 0),{position:e,items:n,renderItem:i,height:o,itemHeight:r,setItemHeight:a}=Bo(s);return N(()=>{const l=t.current?.[xe];l&&l.layoutComplete.then(()=>{s.dispatchEvent(new CustomEvent("layout-complete"));const{averageChildSize:c,averageMarginSize:u}=l._layout._metricsCache;return a(c+u*2)},us)},[n]),N(()=>{if(!e.scroll)return;const l=t.current?.[xe];if(l){if(!l?._layout){l.layoutComplete.then(()=>l.element(e.index)?.scrollIntoView({block:"nearest"}),us);return}l.element(e.index)?.scrollIntoView({block:"nearest"})}},[e]),Lo(Ao({...e,itemHeight:r,auto:s.itemHeight==="auto"})),R`<div
			class="items"
			style="min-height: ${o}px"
			${zt(l=>t.current=l)}
		>
			<div virtualizer-sizer></div>
			${vo({items:n,renderItem:i,scroller:!0})}
		</div>
		<slot></slot>`};customElements.define("cosmoz-listbox",xo(rt(Ho,{styleSheets:[Se(zo)]})));const Uo=({multi:s,setFloating:t,styles:e,...n},i)=>R`<cosmoz-listbox
		style="${ln(e)}"
		@connected="${o=>o.target.showPopover?.()}"
		popover="manual"
		part="listbox"
		?multi=${s}
		${zt(t)}
		...=${So(ko(jo)(n))}
		>${i}</cosmoz-listbox
	>`,Ko=qt`
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
`,Wo=R`
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
`,Yo=({onClear:s,disabled:t})=>R`
	<div class="content" part="content chip-text"><slot></slot></div>
	${tt(s&&!t,()=>R`<span
				class="clear"
				part="clear chip-clear"
				@mousedown=${e=>e.preventDefault()}
				@click=${s}
			>
				${Wo}
			</span>`)}
`;customElements.define("cosmoz-autocomplete-chip",rt(Yo,{observedAttributes:["disabled"],styleSheets:[Se(Ko)]}));const Jo=({content:s,onClear:t,disabled:e,hidden:n,className:i="chip",slot:o})=>R`<cosmoz-autocomplete-chip
		class=${H(i)}
		slot=${H(o)}
		part="chip"
		exportparts="chip-text, chip-clear"
		?disabled=${e}
		?hidden=${n}
		.onClear=${t}
		title=${H(typeof s=="string"?s:void 0)}
		>${s}</cosmoz-autocomplete-chip
	>`,Go=({value:s,min:t=0,onDeselect:e,textual:n,disabled:i,chipRenderer:o=Jo})=>[...s.filter(Boolean).map(r=>o({item:r,content:n(r),onClear:s.length>t&&(()=>e(r)),disabled:i,slot:"control"})),o({item:null,content:R`<span></span>`,className:"badge",disabled:!0,slot:"control",hidden:!0})],qo=bt`
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
`;customElements.define("cosmoz-autocomplete-skeleton-span",rt(()=>$t,{styleSheets:[qo]}));const Qo=qt`
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
`,hs=s=>s.matches(":focus-within"),Xo=({disabled:s,onFocus:t})=>{const[e,n]=it(),{focused:i,closed:o}=e||{},r=i&&!s,a=At({closed:o,onFocus:t}),l=L(u=>n(d=>({...d,closed:u})),[]),c=L(u=>{const d=u.currentTarget;return hs(d)?n(h=>({focused:!0,closed:!h?.closed})):d.focus()},[]);return N(()=>{if(!r)return;const u=d=>{if(d.defaultPrevented)return;const{closed:h}=a;d.key==="Escape"&&!h?(d.preventDefault(),l(!0)):["ArrowUp","Up"].includes(d.key)&&h&&(d.preventDefault(),l(!1))};return document.addEventListener("keydown",u,!0),()=>document.removeEventListener("keydown",u,!0)},[r]),{focused:r,active:r&&!o,setClosed:l,onToggle:c,onFocus:L(u=>{const d=hs(u.currentTarget);n({focused:d}),a.onFocus?.(d)},[a])}},Le=(s,t=()=>({}))=>{const e={type:s,toString(){return s}};return Object.assign((...i)=>Object.assign(t(...i),e),e)},ds=s=>s.type||s.toString(),fs=s=>Array.isArray(s)?s:[s],Zo=(s,t)=>{const e=fs(t),n=(e.every(Array.isArray)?e:[e]).map(([i,o])=>({actions:fs(i).map(ds),handle:o}));return(i=s,o)=>{const r=n.find(a=>a.actions.includes(ds(o)));return r?r.handle(i,o):i}},ct={pending:"pending",rejected:"rejected",resolved:"resolved"},Us={error:void 0,result:void 0,state:ct.pending},Ks=Le(ct.pending),Ws=Le(ct.resolved,s=>({result:s})),Ys=Le(ct.rejected,s=>({error:s})),tr=Zo(Us,[[Ks,()=>({error:void 0,result:void 0,state:ct.pending})],[Ws,(s,{result:t})=>({error:void 0,result:t,state:ct.resolved})],[Ys,(s,{error:t})=>({error:t,result:void 0,state:ct.rejected})]]),er=s=>{const[{error:t,result:e,state:n},i]=Sn(tr,Us);return N(()=>{if(!s)return;let o=!1;return i(Ks()),s.then(r=>!o&&i(Ws(r)),r=>!o&&i(Ys(r))),()=>{o=!0}},[s]),[e,t,n]},sr=({focused:s,empty:t,...e})=>{const n=s&&t&&e.limit!==1,i=At(e);N(()=>{if(!n)return;const o=r=>{if(r.defaultPrevented)return;const{key:a}=r,l=dt(i.value),c=i.limit==1;if(l.length>0&&(a==="Backspace"||c&&a.length===1))return i.onChange(l.slice(0,-1))};return document.addEventListener("keydown",o,!0),()=>document.removeEventListener("keydown",o,!0)},[n,i])},ps=s=>s.normalize("NFD").replace(/[\u0300-\u036f]/gu,""),nr=(s,t,e)=>{if(!t)return s;const n=ps(t.toLowerCase()),i=[];for(const o of s){const a=ps(e(o).toLowerCase()).indexOf(n);a<0||i.push({item:o,index:a})}return i.sort((o,r)=>o.index-r.index).map(({item:o})=>o)},ir=s=>s===!1||s==null?[]:s,Js=(s,t,e)=>s.dispatchEvent(new CustomEvent(t,{detail:e})),or=(s,t,e)=>L(n=>{t?.(n),Js(s,e,n)},[t]),rr=[],ar=s=>(...t)=>{let e;const n=()=>{e&&cancelAnimationFrame(e)};return n(),e=requestAnimationFrame(()=>{e=void 0,s(...t)}),n},lr=({value:s,text:t,onChange:e,onText:n,onSelect:i,limit:o,min:r,source:a,textProperty:l,textual:c,valueProperty:u,keepOpened:d,keepQuery:h,preserveOrder:f,defaultIndex:p,externalSearch:g,...m})=>{const b=I(()=>(c??Oo)(l),[c,l]),{active:y,focused:v,onFocus:x,setClosed:_}=Xo(m),C=!t,S=I(()=>t?.trim(),[t]),k=ie(),A=or(k,n,"text"),z=L($=>{e?.($,()=>_(!0)),Js(k,"value",$)},[e]),[F,Y]=it([]),D=I(()=>Promise.resolve(typeof a=="function"?a({query:S,active:y}):a).then(ir),[a,y,S]),O=I(()=>dt(s),[s]);N(()=>D.then(Y),[D]),sr({focused:v,empty:C,limit:o,value:O,onChange:z,onText:A}),N(()=>{!v&&!h&&A("")},[v,h]);const P=At({onText:A,onChange:z,value:O,limit:o,min:r,keepQuery:h,keepOpened:d,setClosed:_,onSelect:i}),[,,B]=er(D);return{active:y,query:S,textual:b,value:O,source$:D,loading:B==="pending",items:I(()=>{if(!y)return rr;const $=f?F:[...O,...ge(O,Hs(u))(F)];return g?$:nr($,S,b)},[F,y,S,b,C,O,f,u,g]),onClick:L(()=>_(!1),[]),onFocus:x,onText:L($=>{A($.target.value),_(!1)},[A,t,_]),onSelect:L($=>{P.onSelect?.($,P);const{onChange:E,onText:T,limit:Z,min:Pt,value:Xs,keepQuery:Zs,keepOpened:tn,setClosed:en}=P;Zs||T(""),tn||en(!0);const Tt=dt(Xs),Oe=Tt.includes($);Oe&&Tt.length===Pt||E((Oe?ge($)(Tt):[...Tt,$]).slice(-Z))},[P]),onDeselect:L($=>P.onChange(ge($)(P.value)),[P]),defaultIndex:S!==void 0&&S?.length>0?0:p}},cr=s=>{const t=s.shadowRoot.querySelectorAll(".chip"),e=s.shadowRoot.querySelector(".badge");e.hidden=!0;for(const a of t)a.hidden=!1;const i=s.shadowRoot.querySelector("cosmoz-input").shadowRoot?.querySelector(".control")?.getBoundingClientRect();let o;for(o=0;o<t.length;o++){const l=t[o].getBoundingClientRect();if(!(l.x+l.width<=i.x+i.width-24))break}const r=t.length-o;for(e.querySelector("span").textContent="+"+r.toString(),e.hidden=r<1;o<t.length;o++)t[o].hidden=!0},ur=({value:s,active:t,wrap:e,limit:n})=>{const i=ie(),o=!(e||n==1),r=I(()=>ar(()=>cr(i)),[]),[a,l]=it(0);Te(()=>{if(!o)return;const c=i.shadowRoot.querySelector("cosmoz-input"),u=new ResizeObserver(d=>{l(d[0].contentRect.width)});return u.observe(c),()=>u.disconnect()},[o]),Te(()=>o?r():void 0,[o,a,t,s])},hr=["input","control","label","line","error","wrap"].map(s=>`${s}: input-${s}`).join(),dr=[xi({apply({rects:s,elements:t}){Object.assign(t.floating.style,{minWidth:`${Math.max(s.reference.width,s.floating.width)}px`})}}),...Ns],fr=({active:s,isSingle:t,showSingle:e})=>s?!(t&&!e):!1,pr=s=>{const{active:t,invalid:e,errorMessage:n,label:i,placeholder:o,disabled:r,noLabelFloat:a,alwaysFloatLabel:l,textual:c,text:u,onText:d,onFocus:h,onClick:f,onDeselect:p,value:g,limit:m,min:b,showSingle:y,items:v,source$:x,placement:_,loading:C,chipRenderer:S}=s,k=ie(),A=m==1,z=A&&g?.[0]!=null,{styles:F,setReference:Y,setFloating:D}=_i({placement:_,middleware:dr});N(()=>(k.addEventListener("focusin",h),k.addEventListener("focusout",h),()=>{k.removeEventListener("focusin",h),k.removeEventListener("focusout",h)}),[h]),Fs({focus:()=>k.shadowRoot?.querySelector("#input")?.focus()},[]);const O=C||v.length>0||u!=null&&u.length>0;return R`<cosmoz-input
				id="input"
				part="input"
				${zt(Y)}
				.label=${i}
				.placeholder=${z?void 0:o}
				?no-label-float=${a}
				?always-float-label=${g?.length>0||l}
				?readonly=${z}
				?disabled=${r}
				?invalid=${os(x.then(()=>e,()=>!0),e)}
				.errorMessage=${os(x.then(()=>n,P=>P.message),n)}
				.value=${ne(u)}
				@value-changed=${d}
				@click=${f}
				autocomplete="off"
				exportparts=${hr}
				?data-one=${A}
				?data-single=${z}
			>
				<slot name="prefix" slot="prefix"></slot>
				<slot name="suffix" slot="suffix"></slot>
				${Go({value:g,min:b,onDeselect:p,textual:c,disabled:r,chipRenderer:S})}
			</cosmoz-input>

			${tt(fr({active:t,isSingle:z,showSingle:y}),()=>Uo({...s,items:v,multi:!A,setFloating:D,styles:{...F,display:O?void 0:"none"}},tt(C,()=>R`<cosmoz-autocomplete-skeleton-span></cosmoz-autocomplete-skeleton-span>`,()=>tt(u!=null&&u.length>0&&v.length===0,()=>R`<slot name="no-result">
											<p class="no-result">${io("No results found")}</p>
										</slot>`))))}`},Gs=s=>{const t={...s,...lr(s)};return ur(t),pr(t)},qs=["disabled","invalid","no-label-float","always-float-label","text-property","value-property","limit","min","show-single","preserve-order","keep-opened","keep-query","default-index","external-search","item-height","item-limit","wrap"],gr=s=>{const{onChange:t,onText:e,...n}=s,[i,o]=En("value");return N(()=>{s.onChange!=null&&console.warn("onChange is deprecated; use value-changed and lift instead")},[]),Gs({...n,value:i,onChange:L((r,...a)=>{o(r),t?.(r,...a)},[t]),onText:L(r=>{s.text=r,e?.(r)},[e])})},Qs=[Se(Qo)];customElements.define("cosmoz-autocomplete-ui",rt(Gs,{observedAttributes:qs,styleSheets:Qs}));customElements.define("cosmoz-autocomplete",rt(gr,{observedAttributes:qs,styleSheets:Qs}));const xr=["Red","Green","Purple","Blue","White","Brown","Aqua","Nothing"].map(s=>({text:s}));export{Gs as A,L as a,rt as b,bt as c,I as d,H as e,xr as f,ln as g,M as h,vr as i,tt as n,qs as o,Qo as s,En as u};
