import{b as l}from"./iframe-zCxUUSHg.js";import"./index-BcxQUuI3.js";import{c as e}from"./data-HVObiSIc.js";import"./preload-helper-PPVm8Dsz.js";import"./use-autocomplete-BnArfQ27.js";import"./index-s1pP-A5o.js";import"./search-md-Cfe-1-JP.js";const $={title:"Autocomplete Pills",parameters:{docs:{description:{component:'Chips followed by an "add" button, e.g. labels in a view header. The button opens a popover with its own search field; selected options get a check. Chips that do not fit collapse into a "+N" badge that lists them on hover and opens the popover on click.'}}}},a=Array.from({length:12},(r,c)=>({text:`Label number ${c+1}`})),o={render:()=>l`
        <div class="story-stack">
            <cosmoz-autocomplete-pills
                .label=${"Labels"}
                .placeholder=${"Label"}
                .searchPlaceholder=${"Filter colors"}
                .source=${e}
                text-property="text"
                keep-opened
                .value=${[e[0],e[3]]}
            >
            </cosmoz-autocomplete-pills>
        </div>
    `},t={render:()=>l`
        <div style="width: 320px">
            <cosmoz-autocomplete-pills
                .source=${a}
                .value=${a.slice(0,8)}
                text-property="text"
                keep-opened
                .placeholder=${"Label"}
                .searchPlaceholder=${"Filter labels"}
            >
            </cosmoz-autocomplete-pills>
        </div>
    `},s={render:()=>l`
        <div class="story-stack">
            ${["sm","md","lg","xl"].map(r=>l`
                    <div>
                        <h1 class="story-section-title">${r}</h1>
                        <cosmoz-autocomplete-pills
                            size=${r}
                            .value=${[e[0],e[2]]}
                            .source=${e}
                            .textProperty=${"text"}
                            .placeholder=${"Label"}
                        >
                        </cosmoz-autocomplete-pills>
                    </div>
                `)}
        </div>
    `,parameters:{docs:{description:{story:"Chips take the given size; xl uses the largest tag."}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div class="story-stack">
            \${(['sm', 'md', 'lg', 'xl'] as const).map(size => html\`
                    <div>
                        <h1 class="story-section-title">\${size}</h1>
                        <cosmoz-autocomplete-pills
                            size=\${size}
                            .value=\${[colors[0], colors[2]]}
                            .source=\${colors}
                            .textProperty=\${'text'}
                            .placeholder=\${'Label'}
                        >
                        </cosmoz-autocomplete-pills>
                    </div>
                \`)}
        </div>
    \`,
  parameters: {
    docs: {
      description: {
        story: 'Chips take the given size; xl uses the largest tag.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};const v=["Default","Overflown","Sizes"];export{o as Default,t as Overflown,s as Sizes,v as __namedExportsOrder,$ as default};
