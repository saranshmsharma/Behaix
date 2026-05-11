import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{T as t,a as m,b as i,c as e}from"./Tooltip-BYpgv90t.js";import{B as r}from"./Button-CHx1A1SZ.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Do-2Zmnb.js";import"./index-BaBTCQBq.js";import"./index-B6ujFmsw.js";import"./index-DI21ItfZ.js";import"./index-DhS0MURp.js";import"./index-DcF49JER.js";import"./index-ANqx80c1.js";import"./index-BVA583PK.js";import"./index-BXwOflGV.js";import"./index-BPF7bTwO.js";import"./index-AfRRboR2.js";import"./index-CRGxjvZy.js";const E={title:"Components/Tooltip",component:t,tags:["autodocs"],parameters:{docs:{source:{state:"open"},description:{component:"Tooltip reveals brief contextual help on hover or focus. Use it for supplemental explanations; avoid it for critical information, interactive content, or long instructions."}}}},n={render:()=>o.jsx(m,{delayDuration:300,children:o.jsxs(t,{children:[o.jsx(i,{asChild:!0,children:o.jsx(r,{children:"Hover or focus"})}),o.jsx(e,{side:"top",children:"Create a new component package"})]})})},s={render:()=>o.jsx(m,{delayDuration:300,children:o.jsxs("div",{className:"flex gap-3",children:[o.jsxs(t,{children:[o.jsx(i,{asChild:!0,children:o.jsx(r,{variant:"secondary",children:"Top"})}),o.jsx(e,{side:"top",children:"Top tooltip"})]}),o.jsxs(t,{children:[o.jsx(i,{asChild:!0,children:o.jsx(r,{variant:"secondary",children:"Right"})}),o.jsx(e,{side:"right",children:"Right tooltip"})]}),o.jsxs(t,{children:[o.jsx(i,{asChild:!0,children:o.jsx(r,{variant:"secondary",children:"Bottom"})}),o.jsx(e,{side:"bottom",children:"Bottom tooltip"})]}),o.jsxs(t,{children:[o.jsx(i,{asChild:!0,children:o.jsx(r,{variant:"secondary",children:"Left"})}),o.jsx(e,{side:"left",children:"Left tooltip"})]})]})})};var l,a,p;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button>Hover or focus</Button>
        </TooltipTrigger>
        <TooltipContent side="top">
          Create a new component package
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
}`,...(p=(a=n.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};var d,c,T;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <TooltipProvider delayDuration={300}>
      <div className="flex gap-3">
        <Tooltip>
          <TooltipTrigger asChild><Button variant="secondary">Top</Button></TooltipTrigger>
          <TooltipContent side="top">Top tooltip</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild><Button variant="secondary">Right</Button></TooltipTrigger>
          <TooltipContent side="right">Right tooltip</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild><Button variant="secondary">Bottom</Button></TooltipTrigger>
          <TooltipContent side="bottom">Bottom tooltip</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild><Button variant="secondary">Left</Button></TooltipTrigger>
          <TooltipContent side="left">Left tooltip</TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
}`,...(T=(c=s.parameters)==null?void 0:c.docs)==null?void 0:T.source}}};const H=["Default","Sides"];export{n as Default,s as Sides,H as __namedExportsOrder,E as default};
