import{b as r}from"./iframe-C4ySl2j_.js";import"./index-83Wu6Lxu.js";import{c as t}from"./data-HVObiSIc.js";import"./preload-helper-PPVm8Dsz.js";import"./use-autocomplete-C4VLhZI7.js";import"./index-CnHIaa_i.js";import"./search-md-BZvwMs9f.js";const u={title:"Autocomplete Pills",parameters:{docs:{description:{component:'Chips followed by an "add" button, e.g. labels in a view header. The button opens a popover with its own search field; selected options get a check. Chips that do not fit collapse into a "+N" badge that lists them on hover and opens the popover on click.'}}}},l=Array.from({length:12},(a,s)=>({text:`Label number ${s+1}`})),e={render:()=>r`
        <div class="story-stack">
            <cosmoz-autocomplete-pills
                .label=${"Labels"}
                .placeholder=${"Label"}
                .searchPlaceholder=${"Filter colors"}
                .source=${t}
                text-property="text"
                keep-opened
                .value=${[t[0],t[3]]}
            >
            </cosmoz-autocomplete-pills>
        </div>
    `},o={render:()=>r`
        <div style="width: 320px">
            <cosmoz-autocomplete-pills
                .source=${l}
                .value=${l.slice(0,8)}
                text-property="text"
                keep-opened
                .placeholder=${"Label"}
                .searchPlaceholder=${"Filter labels"}
            >
            </cosmoz-autocomplete-pills>
        </div>
    `};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div class="story-stack">
            <cosmoz-autocomplete-pills
                .label=\${'Labels'}
                .placeholder=\${'Label'}
                .searchPlaceholder=\${'Filter colors'}
                .source=\${colors}
                text-property="text"
                keep-opened
                .value=\${[colors[0], colors[3]]}
            >
            </cosmoz-autocomplete-pills>
        </div>
    \`
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div style="width: 320px">
            <cosmoz-autocomplete-pills
                .source=\${manyLabels}
                .value=\${manyLabels.slice(0, 8)}
                text-property="text"
                keep-opened
                .placeholder=\${'Label'}
                .searchPlaceholder=\${'Filter labels'}
            >
            </cosmoz-autocomplete-pills>
        </div>
    \`
}`,...o.parameters?.docs?.source}}};const b=["Default","Overflown"];export{e as Default,o as Overflown,b as __namedExportsOrder,u as default};
