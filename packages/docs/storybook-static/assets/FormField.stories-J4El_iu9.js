import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{F as i}from"./FormField-BAWCm5Wv.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CRGxjvZy.js";import"./Typography-mOB0XM4B.js";import"./index-AfRRboR2.js";import"./index-DI21ItfZ.js";const M={title:"Components/FormField",component:i,tags:["autodocs"],parameters:{docs:{source:{state:"open"},description:{component:`FormField composes a label, control slot, hint text, and error text with automatic id wiring. Use it as the foundation for all form controls; avoid manually pairing labels and descriptions when a component can use this wrapper.

Accessibility: labels use \`htmlFor\`, descriptions are exposed through generated ids, and errors render inside a live \`role="alert"\` region.

Design token dependencies: text scale, neutral text, danger foreground, spacing, and label typography.

Known limitations: FormField does not validate input values; validation remains owned by the consuming form layer.`}}},argTypes:{label:{control:"text"},hint:{control:"text"},error:{control:"text"},required:{control:"boolean"}},args:{label:"Email",hint:"Use your work email address.",required:!1}},d={render:e=>r.jsx(i,{...e,children:({id:a,describedBy:o,invalid:l})=>r.jsx("input",{id:a,"aria-describedby":o,"aria-invalid":l,className:"h-10 rounded-[var(--radius-md)] border border-[var(--color-neutral-300)] bg-[var(--color-surface-overlay)] px-3 text-[var(--text-base)] text-[var(--color-neutral-800)]"})})},s={args:{label:"Password",error:["Use at least 12 characters.","Include one number."]},render:e=>r.jsx(i,{...e,children:({id:a,describedBy:o,invalid:l})=>r.jsx("input",{id:a,"aria-describedby":o,"aria-invalid":l,className:"h-10 rounded-[var(--radius-md)] border border-[var(--color-danger-border)] bg-[var(--color-surface-overlay)] px-3"})})},t={render:()=>r.jsx("div",{"data-theme":"dark",className:"bg-[var(--color-surface)] p-6",children:r.jsx(i,{label:"Workspace",hint:"Dark mode uses the same semantic ids.",children:({id:e,describedBy:a})=>r.jsx("input",{id:e,"aria-describedby":a,className:"h-10 rounded-[var(--radius-md)] border border-[var(--color-neutral-600)] bg-[var(--color-surface-overlay)] px-3 text-[var(--color-neutral-100)]"})})}),parameters:{backgrounds:{default:"dark"}}},n={render:()=>r.jsx(i,{label:"Project name",hint:"This appears in navigation.",error:"Project name is required.",required:!0,children:({id:e,describedBy:a,invalid:o})=>r.jsx("input",{id:e,"aria-describedby":a,"aria-invalid":o,required:!0})})};var c,m,u;d.parameters={...d.parameters,docs:{...(c=d.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <FormField {...args}>
      {({
      id,
      describedBy,
      invalid
    }) => <input id={id} aria-describedby={describedBy} aria-invalid={invalid} className="h-10 rounded-[var(--radius-md)] border border-[var(--color-neutral-300)] bg-[var(--color-surface-overlay)] px-3 text-[var(--text-base)] text-[var(--color-neutral-800)]" />}
    </FormField>
}`,...(u=(m=d.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,b,v;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    error: ['Use at least 12 characters.', 'Include one number.']
  },
  render: args => <FormField {...args}>
      {({
      id,
      describedBy,
      invalid
    }) => <input id={id} aria-describedby={describedBy} aria-invalid={invalid} className="h-10 rounded-[var(--radius-md)] border border-[var(--color-danger-border)] bg-[var(--color-surface-overlay)] px-3" />}
    </FormField>
}`,...(v=(b=s.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var g,h,x;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div data-theme="dark" className="bg-[var(--color-surface)] p-6">
      <FormField label="Workspace" hint="Dark mode uses the same semantic ids.">
        {({
        id,
        describedBy
      }) => <input id={id} aria-describedby={describedBy} className="h-10 rounded-[var(--radius-md)] border border-[var(--color-neutral-600)] bg-[var(--color-surface-overlay)] px-3 text-[var(--color-neutral-100)]" />}
      </FormField>
    </div>,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...(x=(h=t.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var y,F,f;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <FormField label="Project name" hint="This appears in navigation." error="Project name is required." required>
      {({
      id,
      describedBy,
      invalid
    }) => <input id={id} aria-describedby={describedBy} aria-invalid={invalid} required />}
    </FormField>
}`,...(f=(F=n.parameters)==null?void 0:F.docs)==null?void 0:f.source}}};const S=["Default","MultiError","DarkMode","Accessibility"];export{n as Accessibility,t as DarkMode,d as Default,s as MultiError,S as __namedExportsOrder,M as default};
