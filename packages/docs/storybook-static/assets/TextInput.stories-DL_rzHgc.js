import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{T as r}from"./TextInput-fJLz3LLW.js";import{S as B}from"./search-C-Tm1LWf.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CRGxjvZy.js";import"./FormField-BAWCm5Wv.js";import"./Typography-mOB0XM4B.js";import"./index-AfRRboR2.js";import"./index-DI21ItfZ.js";import"./createLucideIcon-Kw1ofbhU.js";const Y={title:"Components/TextInput",component:r,tags:["autodocs"],parameters:{docs:{source:{state:"open"},description:{component:"TextInput captures single-line text and always renders through FormField. Use it for names, search terms, URLs, and short values; avoid using it for multi-line input or highly formatted values.\n\nAccessibility: labels, hints, and errors are automatically wired through `htmlFor`, `aria-describedby`, and `aria-invalid`.\n\nDesign token dependencies: surface, neutral colors, semantic danger colors, radius, shadow, text scale, duration, and focus color.\n\nKnown limitations: TextInput does not format or mask values; consumers should provide formatting behavior at the form layer."}}},argTypes:{label:{control:"text"},hint:{control:"text"},error:{control:"text"},size:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"},readOnly:{control:"boolean"},placeholder:{control:"text"}},args:{label:"Project name",placeholder:"Enter project name",size:"md"}},a={},s={render:()=>e.jsxs("div",{className:"grid gap-4",children:[e.jsx(r,{label:"Small",size:"sm",placeholder:"Small input"}),e.jsx(r,{label:"Medium",size:"md",placeholder:"Medium input"}),e.jsx(r,{label:"Large",size:"lg",placeholder:"Large input"})]})},o={args:{label:"Search",prefix:e.jsx(B,{"aria-hidden":"true",size:16}),suffix:"⌘K",placeholder:"Search components"}},t={args:{label:"Email",defaultValue:"saransh",error:"Enter a valid email address."}},l={args:{label:"Disabled field",disabled:!0,value:"Unavailable"}},n={args:{label:"Read-only field",readOnly:!0,value:"BEH-1248"}},i={render:()=>e.jsx("div",{className:"max-w-md rounded-[var(--radius-lg)] border border-[var(--color-neutral-300)] bg-[var(--color-surface-raised)] p-6",children:e.jsx(r,{label:"Workspace slug",prefix:"behaix.com/",placeholder:"acme-design",hint:"Lowercase letters and hyphens only."})})},d={render:()=>e.jsx("div",{"data-theme":"dark",className:"bg-[var(--color-surface)] p-6",children:e.jsx(r,{label:"Component",placeholder:"Button",hint:"Dark mode inherits token aliases."})}),parameters:{backgrounds:{default:"dark"}}},c={render:()=>e.jsx(r,{label:"Required field",required:!0,error:"This field is required."})};var m,p,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,b,g;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="grid gap-4">
      <TextInput label="Small" size="sm" placeholder="Small input" />
      <TextInput label="Medium" size="md" placeholder="Medium input" />
      <TextInput label="Large" size="lg" placeholder="Large input" />
    </div>
}`,...(g=(b=s.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var f,x,v;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Search',
    prefix: <Search aria-hidden="true" size={16} />,
    suffix: '⌘K',
    placeholder: 'Search components'
  }
}`,...(v=(x=o.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var S,y,k;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    defaultValue: 'saransh',
    error: 'Enter a valid email address.'
  }
}`,...(k=(y=t.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var j,T,z;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'Disabled field',
    disabled: true,
    value: 'Unavailable'
  }
}`,...(z=(T=l.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var D,E,I;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Read-only field',
    readOnly: true,
    value: 'BEH-1248'
  }
}`,...(I=(E=n.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var w,R,L;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="max-w-md rounded-[var(--radius-lg)] border border-[var(--color-neutral-300)] bg-[var(--color-surface-raised)] p-6">
      <TextInput label="Workspace slug" prefix="behaix.com/" placeholder="acme-design" hint="Lowercase letters and hyphens only." />
    </div>
}`,...(L=(R=i.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var q,M,N;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div data-theme="dark" className="bg-[var(--color-surface)] p-6">
      <TextInput label="Component" placeholder="Button" hint="Dark mode inherits token aliases." />
    </div>,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...(N=(M=d.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var O,A,C;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <TextInput label="Required field" required error="This field is required." />
}`,...(C=(A=c.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};const Z=["Default","Sizes","WithAffixes","Error","Disabled","ReadOnly","Composition","DarkMode","Accessibility"];export{c as Accessibility,i as Composition,d as DarkMode,a as Default,l as Disabled,t as Error,n as ReadOnly,s as Sizes,o as WithAffixes,Z as __namedExportsOrder,Y as default};
