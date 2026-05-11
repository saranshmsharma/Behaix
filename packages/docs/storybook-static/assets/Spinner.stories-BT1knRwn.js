import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{S as r}from"./Spinner-DsURbboD.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CRGxjvZy.js";const M={title:"Components/Spinner",component:r,tags:["autodocs"],parameters:{docs:{source:{state:"open"},description:{component:`Spinner indicates an indeterminate loading state. Use it when progress duration is unknown; avoid it when a skeleton can preserve layout better.

Accessibility: Spinner uses \`role="status"\` and a screen-reader label, defaulting to “Loading...”. Animation respects \`prefers-reduced-motion\`.

Design token dependencies: radius and semantic/current text color.

Known limitations: Spinner is indeterminate only and does not show percentage progress.`}}},argTypes:{size:{control:"select",options:["sm","md","lg"]},color:{control:"select",options:["inherit","primary","muted"]},label:{control:"text"}},args:{size:"md",color:"primary"}},s={},a={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(r,{size:"sm"}),e.jsx(r,{size:"md"}),e.jsx(r,{size:"lg"})]})},o={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(r,{color:"inherit"}),e.jsx(r,{color:"primary"}),e.jsx(r,{color:"muted"})]})},n={render:()=>e.jsxs("button",{className:"inline-flex items-center gap-2",children:[e.jsx(r,{size:"sm"})," Loading"]})},t={render:()=>e.jsx("div",{"data-theme":"dark",className:"bg-[var(--color-surface)] p-6",children:e.jsx(r,{color:"primary"})}),parameters:{backgrounds:{default:"dark"}}},i={args:{label:"Loading releases"}};var c,d,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(m=(d=s.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,l,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4"><Spinner size="sm" /><Spinner size="md" /><Spinner size="lg" /></div>
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,x,S;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4"><Spinner color="inherit" /><Spinner color="primary" /><Spinner color="muted" /></div>
}`,...(S=(x=o.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var f,b,j;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <button className="inline-flex items-center gap-2"><Spinner size="sm" /> Loading</button>
}`,...(j=(b=n.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var v,h,y;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div data-theme="dark" className="bg-[var(--color-surface)] p-6"><Spinner color="primary" /></div>,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...(y=(h=t.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var z,k,N;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: 'Loading releases'
  }
}`,...(N=(k=i.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};const _=["Default","Sizes","Colors","Composition","DarkMode","Accessibility"];export{i as Accessibility,o as Colors,n as Composition,t as DarkMode,s as Default,a as Sizes,_ as __namedExportsOrder,M as default};
