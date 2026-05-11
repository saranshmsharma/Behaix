import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{B as a}from"./Badge-CO8ZWTA2.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CRGxjvZy.js";import"./x-rtOGoY1s.js";import"./createLucideIcon-Kw1ofbhU.js";const K={title:"Components/Badge",component:a,tags:["autodocs"],parameters:{docs:{source:{state:"open"},description:{component:`Badge communicates compact status, category, or metadata. Use it for labels and low-emphasis states; avoid using badges as primary actions or long-form content containers.

Accessibility: dismissible badges expose a named button for removal, and dot badges still include visible text so color is not the only indicator.

Design token dependencies: semantic colors with bg, border, and fg aliases; neutral colors; radius; text; duration; and focus tokens.

Known limitations: Badge does not manage a collection state internally; consumers should remove dismissed badges from their own data model.`}}},argTypes:{variant:{control:"select",options:["default","success","warning","danger","info","outline"]},size:{control:"select",options:["sm","md"]},dot:{control:"boolean"},onRemove:{action:"removed"},children:{control:"text"}},args:{children:"Active",variant:"default",size:"md",dot:!1}},r={},s={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(a,{children:"Default"}),e.jsx(a,{variant:"success",children:"Success"}),e.jsx(a,{variant:"warning",children:"Warning"}),e.jsx(a,{variant:"danger",children:"Danger"}),e.jsx(a,{variant:"info",children:"Info"}),e.jsx(a,{variant:"outline",children:"Outline"})]})},n={render:()=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{size:"sm",children:"Small"}),e.jsx(a,{size:"md",children:"Medium"})]})},o={args:{dot:!0,variant:"success",children:"Synced"}},i={args:{children:"Filter: Enterprise",onRemove:()=>{},removeLabel:"Remove Enterprise filter"}},t={render:()=>e.jsx("div",{className:"rounded-[var(--radius-lg)] border border-[var(--color-neutral-300)] bg-[var(--color-surface-raised)] p-4",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-[var(--text-base)] font-[var(--font-medium)] text-[var(--color-neutral-800)]",children:"Release health"}),e.jsx(a,{dot:!0,variant:"success",children:"Ready"})]})})},d={render:()=>e.jsxs("div",{"data-theme":"dark",className:"flex gap-2 bg-[var(--color-surface)] p-6",children:[e.jsx(a,{variant:"success",children:"Success"}),e.jsx(a,{variant:"warning",children:"Warning"}),e.jsx(a,{variant:"danger",children:"Danger"}),e.jsx(a,{variant:"info",children:"Info"})]}),parameters:{backgrounds:{default:"dark"}}},c={render:()=>e.jsxs("div",{className:"flex gap-2",children:[e.jsx(a,{dot:!0,variant:"warning",children:"Pending review"}),e.jsx(a,{onRemove:()=>{},removeLabel:"Remove Pending review badge",children:"Pending review"})]})};var l,m,g;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var u,v,p;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
}`,...(p=(v=s.parameters)==null?void 0:v.docs)==null?void 0:p.source}}};var f,x,h;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
    </div>
}`,...(h=(x=n.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var B,b,j;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    dot: true,
    variant: 'success',
    children: 'Synced'
  }
}`,...(j=(b=o.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var w,S,D;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: 'Filter: Enterprise',
    onRemove: () => undefined,
    removeLabel: 'Remove Enterprise filter'
  }
}`,...(D=(S=i.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var N,R,y;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="rounded-[var(--radius-lg)] border border-[var(--color-neutral-300)] bg-[var(--color-surface-raised)] p-4">
      <div className="flex items-center gap-2">
        <span className="text-[var(--text-base)] font-[var(--font-medium)] text-[var(--color-neutral-800)]">
          Release health
        </span>
        <Badge dot variant="success">
          Ready
        </Badge>
      </div>
    </div>
}`,...(y=(R=t.parameters)==null?void 0:R.docs)==null?void 0:y.source}}};var k,z,E;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div data-theme="dark" className="flex gap-2 bg-[var(--color-surface)] p-6">
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="info">Info</Badge>
    </div>,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...(E=(z=d.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var P,W,A;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2">
      <Badge dot variant="warning">
        Pending review
      </Badge>
      <Badge onRemove={() => undefined} removeLabel="Remove Pending review badge">
        Pending review
      </Badge>
    </div>
}`,...(A=(W=c.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};const T=["Default","Variants","Sizes","WithDot","Dismissible","Composition","DarkMode","Accessibility"];export{c as Accessibility,t as Composition,d as DarkMode,r as Default,i as Dismissible,n as Sizes,s as Variants,o as WithDot,T as __namedExportsOrder,K as default};
