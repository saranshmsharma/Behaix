import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as s}from"./index-G8LIXM5I.js";import{c as ae}from"./index-CRGxjvZy.js";import{F as fe}from"./FormField-BAWCm5Wv.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Typography-mOB0XM4B.js";import"./index-AfRRboR2.js";import"./index-DI21ItfZ.js";const ve=ae(["w-full rounded-[var(--radius-md)] border bg-[var(--color-surface-overlay)] px-3 py-2 text-[var(--color-neutral-800)] shadow-[var(--shadow-sm)] outline-none","placeholder:text-[var(--color-neutral-500)]","transition-[border-color,box-shadow,background-color] duration-[var(--duration-base)] ease-[var(--ease-default)]","focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20","disabled:cursor-not-allowed disabled:border-[var(--color-neutral-200)] disabled:bg-[var(--color-neutral-100)] disabled:opacity-60","read-only:cursor-default read-only:bg-[var(--color-neutral-100)] motion-reduce:transition-none"],{variants:{size:{sm:"text-[var(--text-sm)] leading-[var(--leading-normal)]",md:"text-[var(--text-base)] leading-[var(--leading-normal)]",lg:"text-[var(--text-md)] leading-[var(--leading-normal)]"},state:{default:"border-[var(--color-neutral-300)]",error:"border-[var(--color-danger-border)] focus:border-[var(--color-danger)] focus:ring-[var(--color-danger)]/20"},autoResize:{true:"resize-none overflow-hidden",false:"resize-y"}},defaultVariants:{size:"md",state:"default",autoResize:!1}}),xe=ae("text-right text-[var(--text-xs)] leading-[var(--leading-tight)]",{variants:{state:{default:"text-[var(--color-neutral-500)]",error:"text-[var(--color-danger-fg)]"}},defaultVariants:{state:"default"}});function he(...o){return o.filter(Boolean).join(" ")}const a=s.forwardRef(({autoResize:o=!1,className:se,error:z,hint:oe,id:te,label:ne,maxLength:t,onChange:x,required:k=!1,rows:le=4,size:ie="md",value:h,defaultValue:R,...de},n)=>{const l=s.useRef(null),[S,ce]=s.useState(String(h??R??"").length),ue=s.useCallback(r=>{l.current=r,typeof n=="function"?n(r):n&&(n.current=r)},[n]),y=s.useCallback(()=>{!o||!l.current||(l.current.style.height="auto",l.current.style.height=`${l.current.scrollHeight}px`)},[o]);s.useEffect(()=>{y()},[y,h]);const me=r=>{ce(r.currentTarget.value.length),y(),x==null||x(r)},w=t&&S>t?"error":"default",pe=z||w==="error"?"error":"default";return e.jsx(fe,{error:z,hint:oe,id:te,label:ne,required:k,children:({describedBy:r,id:ge,invalid:be})=>e.jsxs(e.Fragment,{children:[e.jsx("textarea",{ref:ue,id:ge,"aria-describedby":r,"aria-invalid":be||w==="error",className:he(ve({autoResize:o,size:ie,state:pe}),se),defaultValue:R,maxLength:t,onChange:me,required:k,rows:le,value:h,...de}),t?e.jsxs("div",{className:xe({state:w}),children:[S,"/",t]}):null]})})});a.displayName="Textarea";const Ne={title:"Components/Textarea",component:a,tags:["autodocs"],parameters:{docs:{source:{state:"open"},description:{component:`Textarea captures multi-line text and uses FormField for labels, hints, and errors. Use it for comments, descriptions, and notes; avoid it for short values that should remain single-line.

Accessibility: labels, descriptions, and invalid states are automatically wired; character count is visible when \`maxLength\` is provided.

Design token dependencies: surface, neutral colors, danger colors, radius, shadow, text scale, leading, duration, and focus color.

Known limitations: auto-resize uses content height and does not enforce a maximum visual height by default.`}}},argTypes:{label:{control:"text"},hint:{control:"text"},error:{control:"text"},size:{control:"select",options:["sm","md","lg"]},autoResize:{control:"boolean"},disabled:{control:"boolean"},readOnly:{control:"boolean"},maxLength:{control:"number"}},args:{label:"Description",placeholder:"Describe this component",rows:4,size:"md"}},i={},d={render:()=>e.jsxs("div",{className:"grid gap-4",children:[e.jsx(a,{label:"Small",size:"sm"}),e.jsx(a,{label:"Medium",size:"md"}),e.jsx(a,{label:"Large",size:"lg"})]})},c={args:{label:"Release note",maxLength:120,defaultValue:"Improves keyboard support for all Tier 1 atoms."}},u={args:{label:"Auto-resizing note",autoResize:!0,rows:2,defaultValue:"This textarea grows as content wraps onto new lines."}},m={args:{label:"Description",error:"Description is required."}},p={args:{label:"Disabled description",disabled:!0,value:"Unavailable"}},g={args:{label:"Read-only description",readOnly:!0,value:"Generated from release metadata."}},b={render:()=>e.jsx("div",{className:"max-w-lg rounded-[var(--radius-lg)] border border-[var(--color-neutral-300)] bg-[var(--color-surface-raised)] p-6",children:e.jsx(a,{label:"Feedback",hint:"Tell the component owner what should change.",maxLength:240})})},f={render:()=>e.jsx("div",{"data-theme":"dark",className:"bg-[var(--color-surface)] p-6",children:e.jsx(a,{label:"Dark textarea",hint:"Uses dark mode token aliases."})}),parameters:{backgrounds:{default:"dark"}}},v={render:()=>e.jsx(a,{label:"Required notes",required:!0,error:"Notes are required."})};var T,D,j;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:"{}",...(j=(D=i.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};var N,C,F;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="grid gap-4">
      <Textarea label="Small" size="sm" />
      <Textarea label="Medium" size="md" />
      <Textarea label="Large" size="lg" />
    </div>
}`,...(F=(C=d.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var q,A,V;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Release note',
    maxLength: 120,
    defaultValue: 'Improves keyboard support for all Tier 1 atoms.'
  }
}`,...(V=(A=c.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var E,O,U;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'Auto-resizing note',
    autoResize: true,
    rows: 2,
    defaultValue: 'This textarea grows as content wraps onto new lines.'
  }
}`,...(U=(O=u.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var L,M,G;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    error: 'Description is required.'
  }
}`,...(G=(M=m.parameters)==null?void 0:M.docs)==null?void 0:G.source}}};var I,_,B;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Disabled description',
    disabled: true,
    value: 'Unavailable'
  }
}`,...(B=(_=p.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var H,K,$;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    label: 'Read-only description',
    readOnly: true,
    value: 'Generated from release metadata.'
  }
}`,...($=(K=g.parameters)==null?void 0:K.docs)==null?void 0:$.source}}};var J,P,Q;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div className="max-w-lg rounded-[var(--radius-lg)] border border-[var(--color-neutral-300)] bg-[var(--color-surface-raised)] p-6">
      <Textarea label="Feedback" hint="Tell the component owner what should change." maxLength={240} />
    </div>
}`,...(Q=(P=b.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var W,X,Y;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div data-theme="dark" className="bg-[var(--color-surface)] p-6">
      <Textarea label="Dark textarea" hint="Uses dark mode token aliases." />
    </div>,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...(Y=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,re;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <Textarea label="Required notes" required error="Notes are required." />
}`,...(re=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};const Ce=["Default","Sizes","CharacterCount","AutoResize","Error","Disabled","ReadOnly","Composition","DarkMode","Accessibility"];export{v as Accessibility,u as AutoResize,c as CharacterCount,b as Composition,f as DarkMode,i as Default,p as Disabled,m as Error,g as ReadOnly,d as Sizes,Ce as __namedExportsOrder,Ne as default};
