import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as m}from"./index-G8LIXM5I.js";import{c as Y}from"./index-CRGxjvZy.js";import{L as _}from"./loader-circle-DocVIg0L.js";import{X}from"./x-rtOGoY1s.js";import{T as q}from"./triangle-alert-Cj4nEbSD.js";import{C as G}from"./check-CmyZu3lR.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createLucideIcon-Kw1ofbhU.js";const H=Y("flex w-full items-start transition-all duration-300",{variants:{orientation:{horizontal:"flex-row items-start justify-between",vertical:"flex-col"}},defaultVariants:{orientation:"horizontal"}}),M=m.createContext(void 0);function J(){const t=m.useContext(M);if(!t)throw new Error("Stepper components must be used within a Stepper");return t}const i=({activeStep:t,orientation:d="horizontal",isInteractive:u=!1,onStepClick:a,className:b,children:j,...w})=>{const c=m.Children.toArray(j).filter(m.isValidElement),n=c.length;return e.jsx(M.Provider,{value:{activeStep:t,orientation:d||"horizontal",totalSteps:n,isInteractive:u,onStepClick:a},children:e.jsx("nav",{className:H({orientation:d,className:b}),"aria-label":"Progress Stepper",...w,children:c.map((o,l)=>m.cloneElement(o,{index:l,isLast:l===n-1}))})})},r=({index:t=0,label:d,description:u,status:a="default",isLast:b,className:j,...w})=>{const{activeStep:c,orientation:n,isInteractive:o,onStepClick:l}=J(),p=typeof t=="number"?t:0,x=c>p,s=c===p,B=c<p,O=()=>a==="loading"&&s?e.jsx(_,{size:16,className:"animate-spin"}):a==="error"&&s?e.jsx(X,{size:16}):a==="warning"&&s?e.jsx(q,{size:16}):x?e.jsx(G,{size:16}):p+1,U=()=>a==="error"&&s?"bg-danger border-danger text-danger-fg":a==="warning"&&s?"bg-warning border-warning text-warning-fg":a==="loading"&&s?"border-primary text-primary bg-surface animate-pulse":x?"bg-primary border-primary text-primary-fg shadow-lg shadow-primary/20":s?"border-primary text-primary bg-surface shadow-md shadow-primary/20 scale-110":"border-border-subtle text-foreground-muted bg-surface group-hover:border-primary/50",K=N=>{o&&l&&(N.key==="Enter"||N.key===" ")&&(N.preventDefault(),l(p))};return e.jsxs("div",{className:["group relative flex flex-1 flex-col items-center",n==="vertical"&&"flex-row items-start pb-10 last:pb-0",o?"cursor-pointer pointer-events-auto":"cursor-default",j].filter(Boolean).join(" "),onClick:()=>o&&(l==null?void 0:l(p)),onKeyDown:K,role:o?"button":"listitem",tabIndex:o?0:-1,"aria-current":s?"step":void 0,...w,children:[n==="horizontal"&&!b&&e.jsx("div",{className:"absolute top-5 left-[calc(50%+20px)] right-[calc(-50%+20px)] h-0.5 bg-border-subtle z-0",children:e.jsx("div",{className:"h-full bg-primary transition-all duration-500 ease-in-out",style:{width:x?"100%":"0%"}})}),e.jsxs("div",{className:"flex flex-col items-center relative z-10 shrink-0",children:[e.jsx("div",{className:["flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-bold transition-all duration-300 ring-offset-2 group-focus-visible:ring-2 group-focus-visible:ring-primary",U()].filter(Boolean).join(" "),children:O()}),n==="vertical"&&!b&&e.jsx("div",{className:"absolute top-10 left-1/2 -translate-x-1/2 w-0.5 h-[calc(100%-10px)] bg-border-subtle overflow-hidden",children:e.jsx("div",{className:"w-full bg-primary transition-all duration-500 ease-in-out",style:{height:x?"100%":"0%"}})})]}),e.jsxs("div",{className:["flex flex-col transition-all duration-300",n==="horizontal"?"items-center mt-3":"items-start ml-4 mt-1"].join(" "),children:[e.jsx("span",{className:["text-sm font-bold transition-colors",s?"text-foreground":"text-foreground-muted",a==="error"&&s&&"text-danger",a==="warning"&&s&&"text-warning",n==="horizontal"&&"text-center hidden sm:inline-block"].filter(Boolean).join(" "),children:d}),u&&(n==="vertical"||!B)&&e.jsx("span",{className:["text-xs text-foreground-muted mt-1 transition-all duration-300",n==="horizontal"?"text-center max-w-[120px] hidden lg:inline-block":"text-left"].join(" "),children:u})]})]})},le={title:"Components/Stepper",component:i,tags:["autodocs"]},f={render:t=>e.jsx("div",{className:"w-full max-w-6xl p-10 bg-surface border border-border-subtle rounded-2xl shadow-sm",children:e.jsxs(i,{...t,children:[e.jsx(r,{label:"Configuration",description:"Select your environment"}),e.jsx(r,{label:"Deployment",description:"Uploading assets..."}),e.jsx(r,{label:"Finalizing",description:"Wait for build"}),e.jsx(r,{label:"Success",description:"Project is live"})]})}),args:{activeStep:1}},g={render:()=>e.jsxs("div",{className:"flex flex-col gap-12 w-full max-w-4xl p-10 bg-surface border border-border-subtle rounded-2xl",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"text-sm font-bold text-foreground-muted uppercase tracking-wider",children:"Loading State"}),e.jsxs(i,{activeStep:1,children:[e.jsx(r,{label:"Preparation"}),e.jsx(r,{label:"Processing",status:"loading"}),e.jsx(r,{label:"Completion"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"text-sm font-bold text-foreground-muted uppercase tracking-wider",children:"Error State"}),e.jsxs(i,{activeStep:1,children:[e.jsx(r,{label:"Data Upload"}),e.jsx(r,{label:"Validation",status:"error",description:"File format invalid"}),e.jsx(r,{label:"Analysis"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"text-sm font-bold text-foreground-muted uppercase tracking-wider",children:"Warning State"}),e.jsxs(i,{activeStep:2,children:[e.jsx(r,{label:"Setup"}),e.jsx(r,{label:"Security"}),e.jsx(r,{label:"Permissions",status:"warning",description:"Limited access"}),e.jsx(r,{label:"Review"})]})]})]})},v={render:()=>{const[t,d]=m.useState(1);return e.jsxs("div",{className:"w-full max-w-6xl p-10 bg-surface border border-border-subtle rounded-2xl shadow-sm",children:[e.jsxs("div",{className:"mb-6",children:[e.jsx("h3",{className:"text-lg font-bold",children:"Interactive Wizard"}),e.jsx("p",{className:"text-sm text-foreground-muted",children:"Click the steps below or use Tab + Enter to navigate."})]}),e.jsxs(i,{activeStep:t,isInteractive:!0,onStepClick:d,children:[e.jsx(r,{label:"Project Basics",description:"Name and type"}),e.jsx(r,{label:"Team Access",description:"Add collaborators"}),e.jsx(r,{label:"Infrastructure",description:"Choose a region"}),e.jsx(r,{label:"Review",description:"Confirm details"})]}),e.jsx("div",{className:"mt-10 p-20 bg-surface-raised border border-dashed border-border-subtle rounded-xl flex items-center justify-center",children:e.jsxs("span",{className:"text-foreground-muted font-medium",children:["Step ",t+1," Content"]})})]})}},S={render:()=>e.jsxs("div",{className:"flex flex-col gap-10",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-sm font-medium text-foreground-muted underline",children:"Desktop View (Wide)"}),e.jsx("div",{className:"w-full p-10 bg-surface border border-border-subtle rounded-2xl",children:e.jsxs(i,{activeStep:1,children:[e.jsx(r,{label:"Step 1",description:"Long description text"}),e.jsx(r,{label:"Step 2",description:"Another long description"}),e.jsx(r,{label:"Step 3",description:"Final step info"})]})})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-sm font-medium text-foreground-muted underline",children:"Simulated Mobile/Small View (Try resizing browser)"}),e.jsx("div",{className:"w-[400px] p-6 bg-surface border border-border-subtle rounded-2xl",children:e.jsxs(i,{activeStep:1,children:[e.jsx(r,{label:"Step 1"}),e.jsx(r,{label:"Step 2"}),e.jsx(r,{label:"Step 3"})]})})]})]})},h={render:t=>e.jsx("div",{className:"w-fit p-10 bg-surface border border-border-subtle rounded-2xl",children:e.jsxs(i,{...t,orientation:"vertical",children:[e.jsx(r,{label:"Order Placed",description:"Yesterday at 2:30 PM"}),e.jsx(r,{label:"In Transit",description:"Courier is on the way"}),e.jsx(r,{label:"Out for Delivery",status:"loading",description:"Arriving today"}),e.jsx(r,{label:"Delivered"})]})}),args:{activeStep:2}};var y,C,z;f.parameters={...f.parameters,docs:{...(y=f.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <div className="w-full max-w-6xl p-10 bg-surface border border-border-subtle rounded-2xl shadow-sm">
      <Stepper {...args}>
        <Step label="Configuration" description="Select your environment" />
        <Step label="Deployment" description="Uploading assets..." />
        <Step label="Finalizing" description="Wait for build" />
        <Step label="Success" description="Project is live" />
      </Stepper>
    </div>,
  args: {
    activeStep: 1
  }
}`,...(z=(C=f.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};var k,P,A;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-12 w-full max-w-4xl p-10 bg-surface border border-border-subtle rounded-2xl">
      <div className="space-y-4">
        <h4 className="text-sm font-bold text-foreground-muted uppercase tracking-wider">Loading State</h4>
        <Stepper activeStep={1}>
          <Step label="Preparation" />
          <Step label="Processing" status="loading" />
          <Step label="Completion" />
        </Stepper>
      </div>

      <div className="space-y-4">
        <h4 className="text-sm font-bold text-foreground-muted uppercase tracking-wider">Error State</h4>
        <Stepper activeStep={1}>
          <Step label="Data Upload" />
          <Step label="Validation" status="error" description="File format invalid" />
          <Step label="Analysis" />
        </Stepper>
      </div>

      <div className="space-y-4">
        <h4 className="text-sm font-bold text-foreground-muted uppercase tracking-wider">Warning State</h4>
        <Stepper activeStep={2}>
          <Step label="Setup" />
          <Step label="Security" />
          <Step label="Permissions" status="warning" description="Limited access" />
          <Step label="Review" />
        </Stepper>
      </div>
    </div>
}`,...(A=(P=g.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var D,I,E;v.parameters={...v.parameters,docs:{...(D=v.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const [active, setActive] = React.useState(1);
    return <div className="w-full max-w-6xl p-10 bg-surface border border-border-subtle rounded-2xl shadow-sm">
        <div className="mb-6">
          <h3 className="text-lg font-bold">Interactive Wizard</h3>
          <p className="text-sm text-foreground-muted">Click the steps below or use Tab + Enter to navigate.</p>
        </div>
        <Stepper activeStep={active} isInteractive onStepClick={setActive}>
          <Step label="Project Basics" description="Name and type" />
          <Step label="Team Access" description="Add collaborators" />
          <Step label="Infrastructure" description="Choose a region" />
          <Step label="Review" description="Confirm details" />
        </Stepper>
        <div className="mt-10 p-20 bg-surface-raised border border-dashed border-border-subtle rounded-xl flex items-center justify-center">
          <span className="text-foreground-muted font-medium">Step {active + 1} Content</span>
        </div>
      </div>;
  }
}`,...(E=(I=v.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var V,T,L;S.parameters={...S.parameters,docs:{...(V=S.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-10">
      <div className="space-y-4">
        <p className="text-sm font-medium text-foreground-muted underline">Desktop View (Wide)</p>
        <div className="w-full p-10 bg-surface border border-border-subtle rounded-2xl">
          <Stepper activeStep={1}>
            <Step label="Step 1" description="Long description text" />
            <Step label="Step 2" description="Another long description" />
            <Step label="Step 3" description="Final step info" />
          </Stepper>
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-sm font-medium text-foreground-muted underline">Simulated Mobile/Small View (Try resizing browser)</p>
        <div className="w-[400px] p-6 bg-surface border border-border-subtle rounded-2xl">
          <Stepper activeStep={1}>
            <Step label="Step 1" />
            <Step label="Step 2" />
            <Step label="Step 3" />
          </Stepper>
        </div>
      </div>
    </div>
}`,...(L=(T=S.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var R,W,F;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => <div className="w-fit p-10 bg-surface border border-border-subtle rounded-2xl">
      <Stepper {...args} orientation="vertical">
        <Step label="Order Placed" description="Yesterday at 2:30 PM" />
        <Step label="In Transit" description="Courier is on the way" />
        <Step label="Out for Delivery" status="loading" description="Arriving today" />
        <Step label="Delivered" />
      </Stepper>
    </div>,
  args: {
    activeStep: 2
  }
}`,...(F=(W=h.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};const oe=["Default","States","Interactive","MobileResponsive","Vertical"];export{f as Default,v as Interactive,S as MobileResponsive,g as States,h as Vertical,oe as __namedExportsOrder,le as default};
