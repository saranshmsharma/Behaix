import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{T as s,H as r,L as P,C as p}from"./Typography-mOB0XM4B.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-AfRRboR2.js";import"./index-DI21ItfZ.js";import"./index-CRGxjvZy.js";const V={title:"Components/Typography",component:s,tags:["autodocs"],parameters:{docs:{source:{state:"open"},description:{component:`Typography primitives provide consistent text hierarchy for Behaix interfaces. Use them for headings, paragraphs, labels, and inline code; avoid overriding token pairings unless a product surface has a documented exception.

Accessibility: preserve semantic heading order, associate labels with inputs through \`htmlFor\`, and do not use heading components only for visual weight.

Design token dependencies: text scale, font families, font weights, line heights, neutral colors, semantic foreground colors, radius, and borders.

Known limitations: Typography does not perform automatic heading-level correction; page authors must keep document outline order accessible.`}}},argTypes:{size:{control:"select",options:["2xs","xs","sm","base","md","lg"]},weight:{control:"select",options:["regular","medium","semibold","bold"]},leading:{control:"select",options:["tight","normal","relaxed"]},tone:{control:"select",options:["default","muted","subtle","danger","success"]},children:{control:"text"}},args:{children:"Behaix helps teams ship consistent enterprise interfaces.",size:"base",weight:"regular",leading:"normal",tone:"default"}},t={},a={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{level:"h1",children:"Enterprise design system (48px)"}),e.jsx(r,{level:"h2",children:"Component architecture (32px)"}),e.jsx(r,{level:"h3",children:"Usage guidance (24px)"}),e.jsx(r,{level:"h4",children:"Token dependency (20px)"})]})},n={render:()=>e.jsxs("div",{className:"space-y-3",children:[e.jsx(s,{size:"2xs",children:"Double extra small for secondary metadata (10px)"}),e.jsx(s,{size:"xs",children:"Extra small supporting metadata (12px)"}),e.jsx(s,{size:"sm",children:"Small helper copy for dense enterprise screens (14px)"}),e.jsx(s,{size:"base",children:"Base body copy for default interface text (16px)"}),e.jsx(s,{size:"md",children:"Medium text for prominent descriptions (18px)"}),e.jsx(s,{size:"lg",children:"Large text for summaries and empty states (20px)"})]})},o={render:()=>e.jsxs("div",{className:"space-y-3",children:[e.jsx(s,{weight:"regular",children:"Regular text weight"}),e.jsx(s,{weight:"medium",children:"Medium text weight"}),e.jsx(s,{weight:"semibold",children:"Semibold text weight"})]})},i={render:()=>e.jsxs("div",{className:"space-y-3",children:[e.jsx(s,{tone:"default",children:"Default tone"}),e.jsx(s,{tone:"muted",children:"Muted tone"}),e.jsx(s,{tone:"subtle",children:"Subtle tone"}),e.jsx(s,{tone:"success",children:"Success tone"}),e.jsx(s,{tone:"danger",children:"Danger tone"})]})},c={render:()=>e.jsxs("div",{className:"space-y-3",children:[e.jsx(P,{htmlFor:"project-name",children:"Project name"}),e.jsxs(s,{children:["Import tokens from ",e.jsx(p,{children:"@behaix/tokens"})," for runtime-safe values."]})]})},d={render:()=>e.jsxs("section",{className:"max-w-xl rounded-[var(--radius-lg)] border border-[var(--color-neutral-300)] bg-[var(--color-surface-raised)] p-6",children:[e.jsx(r,{level:"h2",children:"Release checklist"}),e.jsx(s,{className:"mt-2",tone:"muted",children:"Confirm visual states, keyboard support, and token usage before publishing a component."}),e.jsxs(s,{className:"mt-4",size:"sm",children:["Current package: ",e.jsx(p,{children:"@behaix/components"})]})]})},l={render:()=>e.jsxs("div",{"data-theme":"dark",className:"space-y-3 bg-[var(--color-surface)] p-6",children:[e.jsx(r,{level:"h2",children:"Dark mode typography"}),e.jsx(s,{tone:"muted",children:"All contrast is resolved through dark token aliases."}),e.jsx(p,{children:'data-theme="dark"'})]}),parameters:{backgrounds:{default:"dark"}}},m={render:()=>e.jsxs("article",{className:"space-y-3",children:[e.jsx(r,{level:"h2",children:"Accessible text structure"}),e.jsx(s,{children:"Use headings to describe page structure, not just to create larger text."}),e.jsx(P,{htmlFor:"accessible-field",children:"Accessible label"})]})};var x,u,h;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(h=(u=t.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,b,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Heading level="h1">Enterprise design system (48px)</Heading>
      <Heading level="h2">Component architecture (32px)</Heading>
      <Heading level="h3">Usage guidance (24px)</Heading>
      <Heading level="h4">Token dependency (20px)</Heading>
    </div>
}`,...(f=(b=a.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var v,T,j;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="space-y-3">
      <Text size="2xs">Double extra small for secondary metadata (10px)</Text>
      <Text size="xs">Extra small supporting metadata (12px)</Text>
      <Text size="sm">Small helper copy for dense enterprise screens (14px)</Text>
      <Text size="base">Base body copy for default interface text (16px)</Text>
      <Text size="md">Medium text for prominent descriptions (18px)</Text>
      <Text size="lg">Large text for summaries and empty states (20px)</Text>
    </div>
}`,...(j=(T=n.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var y,k,w;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="space-y-3">
      <Text weight="regular">Regular text weight</Text>
      <Text weight="medium">Medium text weight</Text>
      <Text weight="semibold">Semibold text weight</Text>
    </div>
}`,...(w=(k=o.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var N,C,S;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="space-y-3">
      <Text tone="default">Default tone</Text>
      <Text tone="muted">Muted tone</Text>
      <Text tone="subtle">Subtle tone</Text>
      <Text tone="success">Success tone</Text>
      <Text tone="danger">Danger tone</Text>
    </div>
}`,...(S=(C=i.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var z,H,D;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="space-y-3">
      <Label htmlFor="project-name">Project name</Label>
      <Text>
        Import tokens from <Code>@behaix/tokens</Code> for runtime-safe values.
      </Text>
    </div>
}`,...(D=(H=c.parameters)==null?void 0:H.docs)==null?void 0:D.source}}};var A,L,M;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <section className="max-w-xl rounded-[var(--radius-lg)] border border-[var(--color-neutral-300)] bg-[var(--color-surface-raised)] p-6">
      <Heading level="h2">Release checklist</Heading>
      <Text className="mt-2" tone="muted">
        Confirm visual states, keyboard support, and token usage before publishing a component.
      </Text>
      <Text className="mt-4" size="sm">
        Current package: <Code>@behaix/components</Code>
      </Text>
    </section>
}`,...(M=(L=d.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var E,F,R;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div data-theme="dark" className="space-y-3 bg-[var(--color-surface)] p-6">
      <Heading level="h2">Dark mode typography</Heading>
      <Text tone="muted">All contrast is resolved through dark token aliases.</Text>
      <Code>data-theme="dark"</Code>
    </div>,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...(R=(F=l.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var U,B,I;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <article className="space-y-3">
      <Heading level="h2">Accessible text structure</Heading>
      <Text>Use headings to describe page structure, not just to create larger text.</Text>
      <Label htmlFor="accessible-field">Accessible label</Label>
    </article>
}`,...(I=(B=m.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};const X=["Default","Headings","TextSizes","Weights","Tones","LabelAndCode","Composition","DarkMode","Accessibility"];export{m as Accessibility,d as Composition,l as DarkMode,t as Default,a as Headings,c as LabelAndCode,n as TextSizes,i as Tones,o as Weights,X as __namedExportsOrder,V as default};
