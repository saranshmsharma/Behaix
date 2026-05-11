import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as K}from"./index-G8LIXM5I.js";import{c as X}from"./index-CRGxjvZy.js";import{X as F}from"./x-rtOGoY1s.js";import{U as G}from"./user-CNBNC0a8.js";import{c as J}from"./createLucideIcon-Kw1ofbhU.js";import{S as Q}from"./settings-CWiO4TgI.js";import{S as W}from"./search-C-Tm1LWf.js";import{P as Y,D as Z,A as $}from"./plus-DaG_aIjS.js";import{E as ee}from"./ellipsis-ClWkcx0Z.js";import{M as re}from"./menu-BJhpnQ18.js";import{L as ae}from"./loader-circle-DocVIg0L.js";import{I as oe}from"./info-FdjzFHBt.js";import{C as se}from"./chevron-up-DpnLmf6M.js";import{C as ne}from"./chevron-right-CVmhYOTQ.js";import{C as te}from"./chevron-left-DvJYcubp.js";import{C as ce}from"./chevron-down-DhKlydND.js";import{C as ie}from"./check-CmyZu3lR.js";import{C as me}from"./circle-alert-BrBpXnRH.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=J("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]),p={alertCircle:me,arrowRight:$,check:ie,chevronDown:ce,chevronLeft:te,chevronRight:ne,chevronUp:se,download:Z,info:oe,loader:ae,menu:re,moreHorizontal:ee,plus:Y,search:W,settings:Q,trash:le,user:G,x:F},de=X("inline-block shrink-0",{variants:{size:{sm:"size-4",md:"size-5",lg:"size-6"},color:{inherit:"text-current",primary:"text-[var(--color-primary)]",muted:"text-[var(--color-neutral-600)]",success:"text-[var(--color-success-fg)]",warning:"text-[var(--color-warning-fg)]",danger:"text-[var(--color-danger-fg)]",info:"text-[var(--color-info-fg)]"}},defaultVariants:{size:"md",color:"inherit"}});function pe(...a){return a.filter(Boolean).join(" ")}const r=K.forwardRef(({className:a,color:V="inherit",label:d,name:P,size:T="md",strokeWidth:H=1.75,..._},q)=>{const B=p[P];return e.jsx(B,{ref:q,"aria-hidden":d?void 0:!0,"aria-label":d,className:pe(de({color:V,size:T}),a),focusable:"false",role:d?"img":void 0,strokeWidth:H,..._})});r.displayName="Icon";const Ee={title:"Components/Icon",component:r,tags:["autodocs"],parameters:{docs:{source:{state:"open"},description:{component:'Icon is a thin typed wrapper around selected Lucide icons. Use it to keep icon names, sizes, colors, and accessibility behavior consistent; avoid using icons as the only indicator of meaning unless a text label or accessible name is present.\n\nAccessibility: decorative icons are `aria-hidden`; meaningful standalone icons require `label`, which sets `role="img"` and `aria-label`.\n\nDesign token dependencies: semantic foreground colors, neutral colors, and current text color inheritance.\n\nKnown limitations: only curated Lucide icons in `IconName` are available in v1; add names intentionally to preserve bundle and API control.'}}},argTypes:{name:{control:"select",options:Object.keys(p)},size:{control:"select",options:["sm","md","lg"]},color:{control:"select",options:["inherit","primary","muted","success","warning","danger","info"]},label:{control:"text"}},args:{name:"plus",size:"md",color:"inherit"}},o={},s={render:()=>e.jsx("div",{className:"grid grid-cols-3 gap-4 text-[var(--color-neutral-800)]",children:Object.keys(p).map(a=>e.jsxs("div",{className:"flex items-center gap-2 text-[var(--text-sm)]",children:[e.jsx(r,{name:a}),e.jsx("span",{children:a})]},a))})},n={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(r,{name:"settings",size:"sm"}),e.jsx(r,{name:"settings",size:"md"}),e.jsx(r,{name:"settings",size:"lg"})]})},t={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(r,{name:"info",color:"primary"}),e.jsx(r,{name:"check",color:"success"}),e.jsx(r,{name:"alertCircle",color:"warning"}),e.jsx(r,{name:"trash",color:"danger"}),e.jsx(r,{name:"search",color:"muted"})]})},c={args:{name:"info",label:"Information"}},i={render:()=>e.jsxs("button",{className:"inline-flex items-center gap-2 rounded-[var(--radius-md)] border border-[var(--color-neutral-300)] bg-[var(--color-surface-raised)] px-3 py-2 text-[var(--text-base)] text-[var(--color-neutral-800)]",children:[e.jsx(r,{name:"download","aria-hidden":"true"}),"Download report"]})},m={render:()=>e.jsxs("div",{"data-theme":"dark",className:"flex gap-4 bg-[var(--color-surface)] p-6",children:[e.jsx(r,{name:"info",color:"primary"}),e.jsx(r,{name:"check",color:"success"}),e.jsx(r,{name:"trash",color:"danger"})]}),parameters:{backgrounds:{default:"dark"}}},l={render:()=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx(r,{name:"search"}),e.jsx(r,{name:"info",label:"Information"})]})};var u,f,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(f=o.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var x,h,v;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-3 gap-4 text-[var(--color-neutral-800)]">
      {Object.keys(iconMap).map(name => <div key={name} className="flex items-center gap-2 text-[var(--text-sm)]">
          <Icon name={name as keyof typeof iconMap} />
          <span>{name}</span>
        </div>)}
    </div>
}`,...(v=(h=s.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var b,y,I;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Icon name="settings" size="sm" />
      <Icon name="settings" size="md" />
      <Icon name="settings" size="lg" />
    </div>
}`,...(I=(y=n.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var j,k,C;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Icon name="info" color="primary" />
      <Icon name="check" color="success" />
      <Icon name="alertCircle" color="warning" />
      <Icon name="trash" color="danger" />
      <Icon name="search" color="muted" />
    </div>
}`,...(C=(k=t.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var w,z,N;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    name: 'info',
    label: 'Information'
  }
}`,...(N=(z=c.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var S,M,D;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <button className="inline-flex items-center gap-2 rounded-[var(--radius-md)] border border-[var(--color-neutral-300)] bg-[var(--color-surface-raised)] px-3 py-2 text-[var(--text-base)] text-[var(--color-neutral-800)]">
      <Icon name="download" aria-hidden="true" />
      Download report
    </button>
}`,...(D=(M=i.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var A,L,R;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div data-theme="dark" className="flex gap-4 bg-[var(--color-surface)] p-6">
      <Icon name="info" color="primary" />
      <Icon name="check" color="success" />
      <Icon name="trash" color="danger" />
    </div>,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...(R=(L=m.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var E,U,O;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
      <Icon name="search" />
      <Icon name="info" label="Information" />
    </div>
}`,...(O=(U=l.parameters)==null?void 0:U.docs)==null?void 0:O.source}}};const Ue=["Default","AllIcons","Sizes","Colors","MeaningfulIcon","Composition","DarkMode","Accessibility"];export{l as Accessibility,s as AllIcons,t as Colors,i as Composition,m as DarkMode,o as Default,c as MeaningfulIcon,n as Sizes,Ue as __namedExportsOrder,Ee as default};
