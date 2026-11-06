import{b as r,c as v,d as u,A as p}from"./iframe-DdPua5x4.js";import{c as m}from"./index-CjkS3Qds.js";import{a as z}from"./index-Di6gNg6O.js";const c=e=>e==null||e===!1||e===""||e===p||Array.isArray(e)&&e.every(c),n=(e,i)=>c(i)?p:r`<span class=${e}>${i}</span>`,$=v`
	:host {
		display: flex;
		align-items: center;
		gap: calc(var(--cz-spacing) * 3);
		min-width: 0;
		height: 100%;
	}
	.text {
		flex: 1;
		min-width: 0;
	}
	.media {
		display: grid;
		flex: none;
		place-items: center;
		width: var(--cosmoz-option-media-size, calc(var(--cz-spacing) * 10));
		height: var(--cosmoz-option-media-size, calc(var(--cz-spacing) * 10));
		border-radius: var(--cz-radius-md);
		overflow: hidden;
		background: var(--cz-color-bg-secondary);
		color: var(--cz-color-fg-quaternary);
	}
	.media > img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		background: var(--cz-color-bg-primary);
	}
	.trailing {
		display: flex;
		flex: none;
		align-items: center;
		gap: calc(var(--cz-spacing) * 2);
		font-weight: var(--cz-font-weight-medium);
		font-variant-numeric: tabular-nums;
		line-height: var(--cz-text-sm-line-height);
	}
	.line,
	.hint {
		display: block;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		line-height: var(--cz-text-sm-line-height);
	}
	.label {
		font-weight: var(--cz-font-weight-medium);
		font-variant-numeric: tabular-nums;
		color: var(--cz-color-text-primary);
	}
	.description {
		margin-inline-start: calc(var(--cz-spacing) * 1.5);
		color: var(--cz-color-text-tertiary);
		font-weight: var(--cz-font-weight-regular);
	}
	.hint {
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		color: var(--cz-color-text-tertiary);
	}
`,f=({description:e,hint:i,media:s,trailing:l})=>r`${n("media",s)}<span class="text"
			><span class="line"
				><span class="label"><slot></slot></span>${n("description",e)}</span
			>${n("hint",i)}</span
		>${n("trailing",l)}`;customElements.define("cosmoz-option",u(f,{styleSheets:[$]}));const g=({label:e,description:i,hint:s,media:l,trailing:h}={})=>({itemRenderer:z((t,a)=>{if(a==null)return t;const o={description:i?.(a),hint:s?.(a),media:l?.(a),trailing:h?.(a)};return r`<cosmoz-option
			?data-media=${!c(o.media)}
			?data-hint=${!c(o.hint)}
			.description=${o.description}
			.hint=${o.hint}
			.media=${o.media}
			.trailing=${o.trailing}
			>${e?e(a,t):t}</cosmoz-option
		>`}),chipRenderer:t=>t.item==null?m(t):m({...t,title:typeof t.content=="string"?t.content:void 0,content:r`<cosmoz-option .description=${i?.(t.item)}
						>${e?e(t.item,t.content):t.content}</cosmoz-option
					>`})}),x=[{code:"102989",name:"PLC Recovery",approver:"Patrik Petersson"},{code:"102997",name:"Expense fall back",approver:"Patrik Petersson"},{code:"104989",name:"Material overhead",approver:"Mattias Berggren"},{code:"111200",name:"Quality assurance"}],d=g({description:e=>e.name,hint:e=>e.approver?`Approver: ${e.approver}`:void 0}),y=[{title:"Safety vest",number:"A-1001",price:"€12.00",image:`data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"><rect width="1" height="1" fill="orange"/></svg>')}`},{title:"Work gloves",number:"A-2002",price:"€4.50"}],w=g({media:e=>e.image&&r`<img src=${e.image} alt="" />`,hint:e=>e.number,trailing:e=>e.price}),C=({value:e,suffix:i})=>r`<cosmoz-autocomplete
		.label=${"Cost center"}
		mode="select"
		preserve-order
		item-height="auto"
		.source=${x}
		.value=${e}
		.textProperty=${"code"}
		.itemRenderer=${d.itemRenderer}
		.chipRenderer=${d.chipRenderer}
		>${i?r`<span slot="suffix">${i}</span>`:""}</cosmoz-autocomplete
	>`,P=()=>r`<cosmoz-autocomplete
		.label=${"Catalog"}
		limit="1"
		.source=${y}
		.textProperty=${"title"}
		item-height="64"
		.itemRenderer=${w.itemRenderer}
	></cosmoz-autocomplete>`;export{C as a,x as b,P as c};
