import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as u}from"./index-G8LIXM5I.js";import{c as v}from"./index-CRGxjvZy.js";import{B as b}from"./Button-CHx1A1SZ.js";import{B as P}from"./Badge-CO8ZWTA2.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-AfRRboR2.js";import"./index-DI21ItfZ.js";import"./x-rtOGoY1s.js";import"./createLucideIcon-Kw1ofbhU.js";const Q=v(["rounded-lg bg-[var(--color-surface-raised)] text-foreground","transition-[border-color,box-shadow,transform,background-color] duration-[var(--duration-base)] ease-[var(--ease-default)] motion-reduce:transition-none"],{variants:{variant:{flat:"border border-transparent shadow-none",outlined:"border border-border-subtle shadow-none",elevated:"border border-transparent shadow-md"},isInteractive:{true:"cursor-pointer hover:-translate-y-0.5 hover:border-[var(--color-neutral-400)] hover:shadow-lg focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 focus-within:ring-offset-[var(--color-surface)]",false:""}},defaultVariants:{variant:"outlined",isInteractive:!1}}),W=v("grid gap-1.5 p-6 pb-0"),X=v("p-6"),Y=v("flex items-center gap-3 border-t border-border-subtle p-6");function x(...a){return a.filter(Boolean).join(" ")}const f=u.forwardRef(({className:a,isInteractive:s=!1,variant:t="outlined",...J},L)=>e.jsx("div",{ref:L,className:x(Q({isInteractive:s,variant:t}),a),...J}));f.displayName="Card";const q=u.forwardRef(({className:a,...s},t)=>e.jsx("div",{ref:t,className:x(W(),a),...s}));q.displayName="CardHeader";const g=u.forwardRef(({className:a,...s},t)=>e.jsx("div",{ref:t,className:x(X(),a),...s}));g.displayName="CardBody";const G=u.forwardRef(({className:a,...s},t)=>e.jsx("div",{ref:t,className:x(Y(),a),...s}));G.displayName="CardFooter";const ce={title:"Components/Card",component:f,tags:["autodocs"],parameters:{docs:{source:{state:"open"},description:{component:`Card groups related content and actions on a raised or bordered surface. Use it for dashboard modules, settings groups, and compact summaries; avoid using it when spacing alone is enough to group content.

Accessibility: interactive cards must contain a keyboard-focusable child or be paired with an appropriate semantic wrapper; the Card itself is a neutral \`div\` by default.

Design token dependencies: surface, neutral border and text colors, radius, shadow, focus, duration, and easing tokens.

Known limitations: Card does not implement a clickable role automatically because card semantics vary by use case.`}}},argTypes:{variant:{control:"select",options:["flat","outlined","elevated"]},isInteractive:{control:"boolean"}},args:{variant:"outlined",isInteractive:!1}},r=a=>e.jsxs(f,{className:"max-w-md",...a,children:[e.jsx(q,{children:e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsx("h3",{className:"m-0 text-[var(--text-lg)] font-[var(--font-semibold)] leading-[var(--leading-tight)]",children:"Release readiness"}),e.jsx(P,{variant:"success",dot:!0,children:"Ready"})]})}),e.jsx(g,{children:e.jsx("p",{className:"m-0 text-[var(--text-base)] leading-[var(--leading-normal)] text-[var(--color-neutral-600)]",children:"All Tier 1 atoms meet the baseline Storybook and accessibility requirements."})}),e.jsxs(G,{children:[e.jsx(b,{size:"sm",children:"View checklist"}),e.jsx(b,{size:"sm",variant:"secondary",children:"Export"})]})]}),o={render:a=>e.jsx(r,{...a})},n={render:()=>e.jsx(r,{variant:"flat"})},d={render:()=>e.jsx(r,{variant:"outlined"})},i={render:()=>e.jsx(r,{variant:"elevated"})},c={render:()=>e.jsx(r,{variant:"outlined",isInteractive:!0,tabIndex:0,role:"button","aria-label":"Open release readiness"})},l={render:()=>e.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[e.jsx(r,{variant:"outlined"}),e.jsx(r,{variant:"elevated"})]})},m={render:()=>e.jsx("div",{"data-theme":"dark",className:"bg-[var(--color-surface)] p-6",children:e.jsx(r,{variant:"outlined"})}),parameters:{backgrounds:{default:"dark"}}},p={render:()=>e.jsx(f,{className:"max-w-md",children:e.jsxs(g,{children:[e.jsx("h3",{className:"m-0 text-[var(--text-lg)] font-[var(--font-semibold)]",children:"Accessible card"}),e.jsx("p",{className:"text-[var(--color-neutral-600)]",children:"Use semantic headings and real buttons or links inside cards."}),e.jsx(b,{children:"Keyboard action"})]})})};var h,j,C;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <ExampleCard {...args} />
}`,...(C=(j=o.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var y,w,N;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <ExampleCard variant="flat" />
}`,...(N=(w=n.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var k,E,B;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <ExampleCard variant="outlined" />
}`,...(B=(E=d.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var I,S,R;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <ExampleCard variant="elevated" />
}`,...(R=(S=i.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var A,V,D;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <ExampleCard variant="outlined" isInteractive tabIndex={0} role="button" aria-label="Open release readiness" />
}`,...(D=(V=c.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var F,O,H;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="grid gap-4 md:grid-cols-2">
      <ExampleCard variant="outlined" />
      <ExampleCard variant="elevated" />
    </div>
}`,...(H=(O=l.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var K,U,z;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div data-theme="dark" className="bg-[var(--color-surface)] p-6">
      <ExampleCard variant="outlined" />
    </div>,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...(z=(U=m.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var M,T,_;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <Card className="max-w-md">
      <CardBody>
        <h3 className="m-0 text-[var(--text-lg)] font-[var(--font-semibold)]">Accessible card</h3>
        <p className="text-[var(--color-neutral-600)]">Use semantic headings and real buttons or links inside cards.</p>
        <Button>Keyboard action</Button>
      </CardBody>
    </Card>
}`,...(_=(T=p.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};const le=["Default","Flat","Outlined","Elevated","Interactive","Composition","DarkMode","Accessibility"];export{p as Accessibility,l as Composition,m as DarkMode,o as Default,i as Elevated,n as Flat,c as Interactive,d as Outlined,le as __namedExportsOrder,ce as default};
