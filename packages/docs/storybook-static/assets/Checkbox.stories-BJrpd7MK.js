import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{C as r,a as _}from"./Checkbox-K5VEZ6ix.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DI21ItfZ.js";import"./index-Do-2Zmnb.js";import"./index-BaBTCQBq.js";import"./index-B6ujFmsw.js";import"./index-P7LH_bd0.js";import"./index-BVA583PK.js";import"./index-BXwOflGV.js";import"./index-CRGxjvZy.js";import"./createLucideIcon-Kw1ofbhU.js";import"./check-CmyZu3lR.js";import"./FormField-BAWCm5Wv.js";import"./Typography-mOB0XM4B.js";import"./index-AfRRboR2.js";const oe={title:"Components/Checkbox",component:r,tags:["autodocs"],parameters:{docs:{source:{state:"open"},description:{component:`Checkbox lets users select one or more independent options, including indeterminate parent states. Use CheckboxGroup when options share a name and validation message.

Accessibility: Radix supplies checkbox roles, keyboard toggling with Space, checked and indeterminate state, and disabled behavior.

Design token dependencies: primary color, primary foreground, neutral borders, danger border, radius, shadow, focus, text, and motion tokens.

Known limitations: CheckboxGroup supports controlled or uncontrolled values but does not integrate with a form library automatically.`}}},argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},size:{control:"select",options:["sm","md"]},label:{control:"text"},description:{control:"text"}},args:{label:"Accept terms",size:"md"}},a={},o={render:()=>e.jsxs("div",{className:"grid gap-3",children:[e.jsx(r,{size:"sm",label:"Small checkbox"}),e.jsx(r,{size:"md",label:"Medium checkbox"})]})},s={args:{checked:"indeterminate",label:"Partially selected"}},t={args:{disabled:!0,label:"Disabled option"}},i={render:()=>e.jsx(_,{name:"notifications",label:"Notifications",hint:"Choose which updates to receive.",options:[{label:"Release notes",value:"release-notes"},{label:"Security alerts",value:"security-alerts"},{label:"Weekly digest",value:"weekly-digest"}]})},n={render:()=>e.jsx(_,{name:"permissions",label:"Permissions",error:"Select at least one permission.",options:[{label:"Can edit components",value:"edit"},{label:"Can publish releases",value:"publish"}]})},c={render:()=>e.jsx("div",{className:"max-w-md rounded-[var(--radius-lg)] border border-[var(--color-neutral-300)] bg-[var(--color-surface-raised)] p-6",children:e.jsx(r,{label:"Create pull request after generation",description:"Recommended for open-source review workflows."})})},l={render:()=>e.jsx("div",{"data-theme":"dark",className:"bg-[var(--color-surface)] p-6",children:e.jsx(r,{label:"Dark mode checkbox",defaultChecked:!0})}),parameters:{backgrounds:{default:"dark"}}},d={render:()=>e.jsx(r,{checked:"indeterminate",label:"Select all components",description:"Some components are already selected."})};var m,p,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var b,h,k;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="grid gap-3">
      <Checkbox size="sm" label="Small checkbox" />
      <Checkbox size="md" label="Medium checkbox" />
    </div>
}`,...(k=(h=o.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var g,x,v;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    checked: 'indeterminate',
    label: 'Partially selected'
  }
}`,...(v=(x=s.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var C,f,S;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: 'Disabled option'
  }
}`,...(S=(f=t.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var y,w,j;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <CheckboxGroup name="notifications" label="Notifications" hint="Choose which updates to receive." options={[{
    label: 'Release notes',
    value: 'release-notes'
  }, {
    label: 'Security alerts',
    value: 'security-alerts'
  }, {
    label: 'Weekly digest',
    value: 'weekly-digest'
  }]} />
}`,...(j=(w=i.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var D,z,N;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <CheckboxGroup name="permissions" label="Permissions" error="Select at least one permission." options={[{
    label: 'Can edit components',
    value: 'edit'
  }, {
    label: 'Can publish releases',
    value: 'publish'
  }]} />
}`,...(N=(z=n.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var G,R,A;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div className="max-w-md rounded-[var(--radius-lg)] border border-[var(--color-neutral-300)] bg-[var(--color-surface-raised)] p-6">
      <Checkbox label="Create pull request after generation" description="Recommended for open-source review workflows." />
    </div>
}`,...(A=(R=c.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var E,M,P;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div data-theme="dark" className="bg-[var(--color-surface)] p-6">
      <Checkbox label="Dark mode checkbox" defaultChecked />
    </div>,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...(P=(M=l.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var q,I,W;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <Checkbox checked="indeterminate" label="Select all components" description="Some components are already selected." />
}`,...(W=(I=d.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};const se=["Default","Sizes","Indeterminate","Disabled","Group","Error","Composition","DarkMode","Accessibility"];export{d as Accessibility,c as Composition,l as DarkMode,a as Default,t as Disabled,n as Error,i as Group,s as Indeterminate,o as Sizes,se as __namedExportsOrder,oe as default};
