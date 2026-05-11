import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as R}from"./index-G8LIXM5I.js";import{c as L}from"./index-CRGxjvZy.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const _=L("shrink-0 border-[var(--color-neutral-300)]",{variants:{orientation:{horizontal:"w-full border-t",vertical:"h-full min-h-4 border-l"}},defaultVariants:{orientation:"horizontal"}}),K=L("px-3 text-[var(--text-xs)] font-[var(--font-medium)] leading-[var(--leading-tight)] text-[var(--color-neutral-500)]");function x(...a){return a.filter(Boolean).join(" ")}const r=R.forwardRef(({className:a,label:m,orientation:d="horizontal",role:p,...u},v)=>m&&d==="horizontal"?e.jsxs("div",{ref:v,className:x("flex w-full items-center",a),role:p??"separator","aria-orientation":"horizontal",...u,children:[e.jsx("span",{className:"h-px flex-1 bg-[var(--color-neutral-300)]"}),e.jsx("span",{className:K(),children:m}),e.jsx("span",{className:"h-px flex-1 bg-[var(--color-neutral-300)]"})]}):e.jsx("div",{ref:v,className:x(_({orientation:d}),a),role:p??"separator","aria-orientation":d??"horizontal",...u}));r.displayName="Divider";const I={title:"Components/Divider",component:r,tags:["autodocs"],parameters:{docs:{source:{state:"open"},description:{component:`Divider separates related content groups with a low-emphasis rule. Use it to clarify layout hierarchy; avoid using dividers as decoration when spacing alone is sufficient.

Accessibility: dividers render \`role="separator"\` and set \`aria-orientation\`; labeled horizontal dividers include visible text between two separator lines.

Design token dependencies: neutral border color, text size, font weight, line height, and muted foreground color.

Known limitations: labels are supported for horizontal dividers only; vertical labels are intentionally excluded for readability.`}}},argTypes:{orientation:{control:"select",options:["horizontal","vertical"]},label:{control:"text"}},args:{orientation:"horizontal"}},t={},s={args:{orientation:"horizontal"}},o={render:()=>e.jsxs("div",{className:"flex h-10 items-center gap-4 text-[var(--text-base)] text-[var(--color-neutral-800)]",children:[e.jsx("span",{children:"Overview"}),e.jsx(r,{orientation:"vertical"}),e.jsx("span",{children:"Analytics"}),e.jsx(r,{orientation:"vertical"}),e.jsx("span",{children:"Settings"})]})},n={args:{label:"or continue with"}},i={render:()=>e.jsxs("div",{className:"max-w-md rounded-[var(--radius-lg)] border border-[var(--color-neutral-300)] bg-[var(--color-surface-raised)] p-6",children:[e.jsx("h3",{className:"m-0 text-[var(--text-lg)] font-[var(--font-semibold)] text-[var(--color-neutral-800)]",children:"Workspace settings"}),e.jsx(r,{className:"my-4"}),e.jsx("p",{className:"m-0 text-[var(--text-base)] text-[var(--color-neutral-600)]",children:"Manage members, billing, and release permissions from one place."})]})},l={render:()=>e.jsx("div",{"data-theme":"dark",className:"bg-[var(--color-surface)] p-6",children:e.jsx(r,{label:"Dark token separator"})}),parameters:{backgrounds:{default:"dark"}}},c={render:()=>e.jsxs("div",{children:[e.jsx("span",{children:"Section A"}),e.jsx(r,{className:"my-3"}),e.jsx("span",{children:"Section B"})]})};var h,g,b;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(b=(g=t.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var f,j,N;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal'
  }
}`,...(N=(j=s.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var y,k,w;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="flex h-10 items-center gap-4 text-[var(--text-base)] text-[var(--color-neutral-800)]">
      <span>Overview</span>
      <Divider orientation="vertical" />
      <span>Analytics</span>
      <Divider orientation="vertical" />
      <span>Settings</span>
    </div>
}`,...(w=(k=o.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var D,z,S;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'or continue with'
  }
}`,...(S=(z=n.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var A,V,M;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div className="max-w-md rounded-[var(--radius-lg)] border border-[var(--color-neutral-300)] bg-[var(--color-surface-raised)] p-6">
      <h3 className="m-0 text-[var(--text-lg)] font-[var(--font-semibold)] text-[var(--color-neutral-800)]">
        Workspace settings
      </h3>
      <Divider className="my-4" />
      <p className="m-0 text-[var(--text-base)] text-[var(--color-neutral-600)]">
        Manage members, billing, and release permissions from one place.
      </p>
    </div>
}`,...(M=(V=i.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var W,B,C;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div data-theme="dark" className="bg-[var(--color-surface)] p-6">
      <Divider label="Dark token separator" />
    </div>,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...(C=(B=l.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var E,O,H;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div>
      <span>Section A</span>
      <Divider className="my-3" />
      <span>Section B</span>
    </div>
}`,...(H=(O=c.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};const J=["Default","Horizontal","Vertical","WithLabel","Composition","DarkMode","Accessibility"];export{c as Accessibility,i as Composition,l as DarkMode,t as Default,s as Horizontal,o as Vertical,n as WithLabel,J as __namedExportsOrder,I as default};
