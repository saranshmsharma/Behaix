import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as q}from"./index-G8LIXM5I.js";import{c as B}from"./index-CRGxjvZy.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const K=B("block bg-[var(--color-neutral-200)]",{variants:{variant:{text:"h-[1em] w-full rounded-[var(--radius-sm)]",circle:"rounded-[var(--radius-full)]",rect:"rounded-[var(--radius-md)]"},animate:{true:"animate-pulse motion-reduce:animate-none",false:""}},defaultVariants:{variant:"text",animate:!0}});function O(...d){return d.filter(Boolean).join(" ")}const r=q.forwardRef(({animate:d=!0,className:D,height:V,style:C,variant:E="text",width:M,...R},_)=>e.jsx("span",{ref:_,"aria-hidden":"true",className:O(K({animate:d,variant:E}),D),style:{width:M,height:V,...C},...R}));r.displayName="Skeleton";const H={title:"Components/Skeleton",component:r,tags:["autodocs"],parameters:{docs:{source:{state:"open"},description:{component:`Skeleton reserves layout while content loads. Use it for cards, rows, and text placeholders; avoid using it for actions that need explicit progress feedback.

Accessibility: Skeleton is hidden from assistive technology with \`aria-hidden\` and animation respects \`prefers-reduced-motion\`.

Design token dependencies: neutral color, radius, and animation behavior.

Known limitations: Skeleton does not announce loading; pair with status text or Spinner when screen-reader feedback is required.`}}},argTypes:{variant:{control:"select",options:["text","circle","rect"]},animate:{control:"boolean"},width:{control:"text"},height:{control:"text"}},args:{variant:"text",width:"240px",animate:!0}},a={},t={render:()=>e.jsxs("div",{className:"grid gap-3",children:[e.jsx(r,{variant:"text",width:"240px"}),e.jsx(r,{variant:"circle",width:"40px",height:"40px"}),e.jsx(r,{variant:"rect",width:"240px",height:"120px"})]})},s={args:{animate:!1}},o={render:()=>e.jsx("div",{className:"max-w-sm rounded-[var(--radius-lg)] border border-[var(--color-neutral-300)] p-4",children:e.jsxs("div",{className:"flex gap-3",children:[e.jsx(r,{variant:"circle",width:"40px",height:"40px"}),e.jsxs("div",{className:"flex-1 space-y-2",children:[e.jsx(r,{width:"70%"}),e.jsx(r,{width:"100%"})]})]})})},i={render:()=>e.jsx("div",{"data-theme":"dark",className:"bg-[var(--color-surface)] p-6",children:e.jsx(r,{variant:"rect",width:"240px",height:"120px"})}),parameters:{backgrounds:{default:"dark"}}},n={render:()=>e.jsx("div",{"aria-busy":"true",children:e.jsx(r,{width:"240px"})})};var c,l,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,u,x;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="grid gap-3"><Skeleton variant="text" width="240px" /><Skeleton variant="circle" width="40px" height="40px" /><Skeleton variant="rect" width="240px" height="120px" /></div>
}`,...(x=(u=t.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var h,v,g;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    animate: false
  }
}`,...(g=(v=s.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var f,w,k;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="max-w-sm rounded-[var(--radius-lg)] border border-[var(--color-neutral-300)] p-4"><div className="flex gap-3"><Skeleton variant="circle" width="40px" height="40px" /><div className="flex-1 space-y-2"><Skeleton width="70%" /><Skeleton width="100%" /></div></div></div>
}`,...(k=(w=o.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var S,b,j;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div data-theme="dark" className="bg-[var(--color-surface)] p-6"><Skeleton variant="rect" width="240px" height="120px" /></div>,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...(j=(b=i.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var N,y,A;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div aria-busy="true"><Skeleton width="240px" /></div>
}`,...(A=(y=n.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};const I=["Default","Variants","NoAnimation","Composition","DarkMode","Accessibility"];export{n as Accessibility,o as Composition,i as DarkMode,a as Default,s as NoAnimation,t as Variants,I as __namedExportsOrder,H as default};
