import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as _}from"./index-G8LIXM5I.js";import{c as A}from"./index-CRGxjvZy.js";import{U as H}from"./user-CNBNC0a8.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createLucideIcon-Kw1ofbhU.js";const Q=A("relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-[var(--radius-full)] border border-[var(--color-neutral-300)] bg-[var(--color-neutral-100)] font-[var(--font-medium)] text-[var(--color-neutral-700)]",{variants:{size:{xs:"size-6 text-[var(--text-xs)]",sm:"size-8 text-[var(--text-sm)]",md:"size-10 text-[var(--text-base)]",lg:"size-12 text-[var(--text-md)]",xl:"size-16 text-[var(--text-lg)]"}},defaultVariants:{size:"md"}}),W=A("size-full object-cover"),Y=A("flex items-center"),Z=A("inline-flex shrink-0 items-center justify-center rounded-[var(--radius-full)] border-2 border-[var(--color-surface)] bg-[var(--color-neutral-200)] font-[var(--font-medium)] text-[var(--color-neutral-700)]",{variants:{size:{xs:"size-6 text-[var(--text-xs)]",sm:"size-8 text-[var(--text-xs)]",md:"size-10 text-[var(--text-sm)]",lg:"size-12 text-[var(--text-base)]",xl:"size-16 text-[var(--text-md)]"}},defaultVariants:{size:"md"}});function S(...r){return r.filter(Boolean).join(" ")}function ee(r){if(r)return r.trim().split(/\s+/).slice(0,2).map(o=>{var t;return(t=o[0])==null?void 0:t.toUpperCase()}).join("")}const a=_.forwardRef(({alt:r,className:o,fallbackIcon:t,initials:c,name:l,size:h="md",src:i,...m},s)=>{const n=c??ee(l),q=r??l??n??"Avatar";return e.jsx("span",{ref:s,"aria-label":q,className:S(Q({size:h}),o),role:"img",...m,children:i?e.jsx("img",{alt:"",className:W(),src:i}):n||(t??e.jsx(H,{"aria-hidden":"true",className:"size-1/2"}))})});a.displayName="Avatar";const y=_.forwardRef(({avatars:r,className:o,max:t=4,size:c="md",...l},h)=>{const i=r.slice(0,t),m=Math.max(r.length-i.length,0);return e.jsxs("div",{ref:h,className:S(Y(),o),...l,children:[i.map((s,n)=>e.jsx(a,{...s,className:S(n>0&&"-ml-2 border-2 border-[var(--color-surface)]",s.className),size:c},`${s.name??s.initials??s.src??"avatar"}-${n}`)),m>0?e.jsxs("span",{"aria-label":`${m} more avatars`,className:S(Z({size:c}),"-ml-2"),children:["+",m]}):null]})});y.displayName="AvatarGroup";const me={title:"Components/Avatar",component:a,tags:["autodocs"],parameters:{docs:{source:{state:"open"},description:{component:'Avatar represents a user, team, or entity with an image, initials, or icon fallback. Use AvatarGroup for compact participant lists; avoid relying on avatar imagery alone to identify a critical person.\n\nAccessibility: avatar images are decorative inside a labeled `role="img"` wrapper so the accessible name is controlled by `alt`, `name`, or initials.\n\nDesign token dependencies: neutral colors, surface, radius, border, font weight, and text scale.\n\nKnown limitations: Avatar does not detect broken image loading in v1; provide initials or name as a reliable fallback context.'}}},argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl"]},name:{control:"text"},initials:{control:"text"},src:{control:"text"}},args:{name:"Saransh Sharma",size:"md"}},d={},v={render:()=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(a,{name:"Avery Stone",size:"xs"}),e.jsx(a,{name:"Avery Stone",size:"sm"}),e.jsx(a,{name:"Avery Stone",size:"md"}),e.jsx(a,{name:"Avery Stone",size:"lg"}),e.jsx(a,{name:"Avery Stone",size:"xl"})]})},p={args:{initials:"BX",name:void 0}},u={args:{name:void 0,initials:void 0}},x={render:()=>e.jsx(y,{avatars:[{name:"Saransh Sharma"},{name:"Avery Stone"},{name:"Mina Patel"},{name:"Jordan Lee"},{name:"Nora Kim"}],max:4})},f={render:()=>e.jsxs("div",{className:"flex items-center gap-3 rounded-[var(--radius-lg)] border border-[var(--color-neutral-300)] bg-[var(--color-surface-raised)] p-4",children:[e.jsx(a,{name:"Saransh Sharma"}),e.jsxs("div",{children:[e.jsx("p",{className:"m-0 text-[var(--text-base)] font-[var(--font-medium)] text-[var(--color-neutral-800)]",children:"Saransh Sharma"}),e.jsx("p",{className:"m-0 text-[var(--text-sm)] text-[var(--color-neutral-600)]",children:"Design systems engineer"})]})]})},g={render:()=>e.jsx("div",{"data-theme":"dark",className:"bg-[var(--color-surface)] p-6",children:e.jsx(y,{avatars:[{name:"Avery Stone"},{name:"Mina Patel"},{name:"Jordan Lee"}]})}),parameters:{backgrounds:{default:"dark"}}},b={render:()=>e.jsx(a,{name:"Release owner",alt:"Release owner avatar"})};var z,j,N;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:"{}",...(N=(j=d.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var k,w,G;v.parameters={...v.parameters,docs:{...(k=v.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">
      <Avatar name="Avery Stone" size="xs" />
      <Avatar name="Avery Stone" size="sm" />
      <Avatar name="Avery Stone" size="md" />
      <Avatar name="Avery Stone" size="lg" />
      <Avatar name="Avery Stone" size="xl" />
    </div>
}`,...(G=(w=v.parameters)==null?void 0:w.docs)==null?void 0:G.source}}};var D,M,R;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    initials: 'BX',
    name: undefined
  }
}`,...(R=(M=p.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var I,V,C;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    name: undefined,
    initials: undefined
  }
}`,...(C=(V=u.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};var J,L,P;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <AvatarGroup avatars={[{
    name: 'Saransh Sharma'
  }, {
    name: 'Avery Stone'
  }, {
    name: 'Mina Patel'
  }, {
    name: 'Jordan Lee'
  }, {
    name: 'Nora Kim'
  }]} max={4} />
}`,...(P=(L=x.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var U,B,E;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3 rounded-[var(--radius-lg)] border border-[var(--color-neutral-300)] bg-[var(--color-surface-raised)] p-4">
      <Avatar name="Saransh Sharma" />
      <div>
        <p className="m-0 text-[var(--text-base)] font-[var(--font-medium)] text-[var(--color-neutral-800)]">Saransh Sharma</p>
        <p className="m-0 text-[var(--text-sm)] text-[var(--color-neutral-600)]">Design systems engineer</p>
      </div>
    </div>
}`,...(E=(B=f.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var K,$,F;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div data-theme="dark" className="bg-[var(--color-surface)] p-6">
      <AvatarGroup avatars={[{
      name: 'Avery Stone'
    }, {
      name: 'Mina Patel'
    }, {
      name: 'Jordan Lee'
    }]} />
    </div>,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...(F=($=g.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};var O,T,X;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <Avatar name="Release owner" alt="Release owner avatar" />
}`,...(X=(T=b.parameters)==null?void 0:T.docs)==null?void 0:X.source}}};const ce=["Default","Sizes","Initials","IconFallback","Group","Composition","DarkMode","Accessibility"];export{b as Accessibility,f as Composition,g as DarkMode,d as Default,x as Group,u as IconFallback,p as Initials,v as Sizes,ce as __namedExportsOrder,me as default};
