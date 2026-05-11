import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as H}from"./index-G8LIXM5I.js";import{c as u}from"./index-CRGxjvZy.js";import{X as J}from"./x-rtOGoY1s.js";import{C as L}from"./check-CmyZu3lR.js";import{T as P}from"./triangle-alert-Cj4nEbSD.js";import{C as Q}from"./circle-alert-BrBpXnRH.js";import{I as Y}from"./info-FdjzFHBt.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createLucideIcon-Kw1ofbhU.js";const Z=u("grid grid-cols-[auto_1fr_auto] gap-3 rounded-[var(--radius-lg)] border p-4",{variants:{variant:{info:"border-info-border bg-info-bg text-info-fg",success:"border-success-border bg-success-bg text-success-fg",warning:"border-warning-border bg-warning-border bg-warning-bg text-warning-fg",danger:"border-danger-border bg-danger-bg text-danger-fg"}},defaultVariants:{variant:"info"}}),ee=u("text-base font-semibold leading-tight"),re=u("mt-1 text-sm leading-normal opacity-90"),se=u("rounded-sm p-1 opacity-70 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary");function ae(r){return r==="success"?e.jsx(L,{"aria-hidden":"true",className:"size-5"}):r==="warning"?e.jsx(P,{"aria-hidden":"true",className:"size-5"}):r==="danger"?e.jsx(Q,{"aria-hidden":"true",className:"size-5"}):e.jsx(Y,{"aria-hidden":"true",className:"size-5"})}function te(...r){return r.filter(Boolean).join(" ")}const s=H.forwardRef(({className:r,description:p,icon:X,onDismiss:g,title:$,variant:f="info",...F},G)=>e.jsxs("div",{ref:G,className:te(Z({variant:f}),r),role:"status",...F,children:[e.jsx("div",{className:"pt-0.5",children:X??ae(f??"info")}),e.jsxs("div",{children:[e.jsx("div",{className:ee(),children:$}),p?e.jsx("div",{className:re(),children:p}):null]}),g?e.jsx("button",{"aria-label":"Dismiss alert",className:se(),type:"button",onClick:g,children:e.jsx(J,{"aria-hidden":"true",className:"size-4"})}):e.jsx("span",{})]}));s.displayName="Alert";const be={title:"Components/Alert",component:s,tags:["autodocs"],parameters:{docs:{source:{state:"open"},description:{component:`Alert displays inline contextual feedback. Use it for persistent information, warnings, success messages, and errors; avoid it for transient messages that should use Toast.

Accessibility: Alert renders as \`role="status"\`; dismissible alerts include a named close button.

Design token dependencies: semantic bg, border, and fg colors; radius; text; and focus tokens.

Known limitations: Alert does not animate entrance or removal in v1.`}}},argTypes:{variant:{control:"select",options:["info","success","warning","danger"]},title:{control:"text"},description:{control:"text"},onDismiss:{action:"dismissed"}},args:{variant:"info",title:"Documentation updated",description:"The component page now includes accessibility notes."}},a={},t={args:{variant:"info"}},i={args:{variant:"success",title:"Release published"}},n={args:{variant:"warning",title:"Review needed"}},o={args:{variant:"danger",title:"Build failed"}},c={args:{onDismiss:()=>{}}},d={render:()=>e.jsx("div",{className:"max-w-xl",children:e.jsx(s,{variant:"warning",title:"Token drift detected",description:"Regenerate CSS variables before publishing the package."})})},l={render:()=>e.jsx("div",{"data-theme":"dark",className:"bg-[var(--color-surface)] p-6",children:e.jsx(s,{variant:"success",title:"Dark alert",description:"Semantic aliases resolve correctly in dark mode."})}),parameters:{backgrounds:{default:"dark"}}},m={render:()=>e.jsx(s,{variant:"danger",title:"Validation error",description:"Resolve all required fields before continuing.",onDismiss:()=>{}})};var b,v,x;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(x=(v=a.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var h,k,j;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'info'
  }
}`,...(j=(k=t.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var w,D,S;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    title: 'Release published'
  }
}`,...(S=(D=i.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var N,y,A;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    title: 'Review needed'
  }
}`,...(A=(y=n.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var C,R,T;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    title: 'Build failed'
  }
}`,...(T=(R=o.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var V,z,I;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    onDismiss: () => undefined
  }
}`,...(I=(z=c.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var _,B,E;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div className="max-w-xl">
      <Alert variant="warning" title="Token drift detected" description="Regenerate CSS variables before publishing the package." />
    </div>
}`,...(E=(B=d.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var q,M,W;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div data-theme="dark" className="bg-[var(--color-surface)] p-6">
      <Alert variant="success" title="Dark alert" description="Semantic aliases resolve correctly in dark mode." />
    </div>,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...(W=(M=l.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var K,O,U;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <Alert variant="danger" title="Validation error" description="Resolve all required fields before continuing." onDismiss={() => undefined} />
}`,...(U=(O=m.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};const ve=["Default","Info","Success","Warning","Danger","Dismissible","Composition","DarkMode","Accessibility"];export{m as Accessibility,d as Composition,o as Danger,l as DarkMode,a as Default,c as Dismissible,t as Info,i as Success,n as Warning,ve as __namedExportsOrder,be as default};
