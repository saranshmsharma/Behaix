import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{c as S}from"./index-CRGxjvZy.js";import{c as t}from"./createLucideIcon-Kw1ofbhU.js";import{U as w}from"./users-DAEcyMWi.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=t("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=t("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=t("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=t("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=t("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]),D=S("relative flex flex-col gap-1 rounded-2xl border border-border-subtle bg-surface p-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5",{variants:{variant:{default:"bg-surface",glass:"bg-surface/80 backdrop-blur-md",primary:"bg-primary text-primary-fg border-primary shadow-lg shadow-primary/20"}},defaultVariants:{variant:"default"}}),s=({label:a,value:j,trend:i,icon:c,variant:r="default",className:N,...U})=>e.jsxs("div",{className:D({variant:r,className:N}),...U,children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:["text-sm font-medium",r==="primary"?"text-primary-fg/80":"text-foreground-muted"].join(" "),children:a}),c&&e.jsx("div",{className:["flex h-10 w-10 items-center justify-center rounded-xl",r==="primary"?"bg-primary-fg/10":"bg-surface-raised border border-border-subtle"].join(" "),children:c})]}),e.jsxs("div",{className:"mt-2 flex items-baseline gap-2",children:[e.jsx("h3",{className:"text-2xl font-bold tracking-tight",children:j}),i&&e.jsxs("div",{className:["flex items-center gap-0.5 text-xs font-bold",i.isUp?"text-success":"text-danger",r==="primary"&&"text-primary-fg"].filter(Boolean).join(" "),children:[i.isUp?e.jsx(T,{size:12}):e.jsx(k,{size:12}),e.jsxs("span",{children:[i.value,"%"]})]})]}),e.jsx("div",{className:["mt-4 h-1 w-full rounded-full overflow-hidden",r==="primary"?"bg-primary-fg/20":"bg-surface-raised"].join(" "),children:e.jsx("div",{className:["h-full transition-all duration-1000",r==="primary"?"bg-primary-fg":"bg-primary"].join(" "),style:{width:"65%"}})})]}),B={title:"Components/Widget",component:s,tags:["autodocs"],args:{label:"Stat Label",value:"1,234"}},l={render:a=>e.jsxs("div",{className:"grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-8 bg-surface-raised",children:[e.jsx(s,{...a,label:"Total Users",value:"12,482",trend:{value:12.5,isUp:!0},icon:e.jsx(w,{size:20,className:"text-primary"})}),e.jsx(s,{...a,label:"Monthly Revenue",value:"$48,290",trend:{value:4.2,isUp:!0},icon:e.jsx(h,{size:20,className:"text-success"})}),e.jsx(s,{...a,label:"Bounce Rate",value:"24.8%",trend:{value:2.1,isUp:!1},icon:e.jsx(f,{size:20,className:"text-warning"})}),e.jsx(s,{...a,label:"Total Orders",value:"842",trend:{value:8.4,isUp:!0},icon:e.jsx(z,{size:20,className:"text-danger"})})]})},n={args:{label:"Total Sales",value:"$124,000",variant:"primary",trend:{value:15.4,isUp:!0},icon:e.jsx(h,{size:20})}},o={render:a=>e.jsx("div",{className:"p-20 bg-gradient-to-br from-primary/20 to-secondary/20",children:e.jsx(s,{...a,variant:"glass",label:"System Uptime",value:"99.99%",trend:{value:.01,isUp:!0},icon:e.jsx(f,{size:20,className:"text-primary"})})})};var d,m,p;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-8 bg-surface-raised">
      <StatWidget {...args} label="Total Users" value="12,482" trend={{
      value: 12.5,
      isUp: true
    }} icon={<Users size={20} className="text-primary" />} />
      <StatWidget {...args} label="Monthly Revenue" value="$48,290" trend={{
      value: 4.2,
      isUp: true
    }} icon={<DollarSign size={20} className="text-success" />} />
      <StatWidget {...args} label="Bounce Rate" value="24.8%" trend={{
      value: 2.1,
      isUp: false
    }} icon={<Activity size={20} className="text-warning" />} />
      <StatWidget {...args} label="Total Orders" value="842" trend={{
      value: 8.4,
      isUp: true
    }} icon={<ShoppingCart size={20} className="text-danger" />} />
    </div>
}`,...(p=(m=l.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,g,x;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Total Sales',
    value: '$124,000',
    variant: 'primary',
    trend: {
      value: 15.4,
      isUp: true
    },
    icon: <DollarSign size={20} />
  }
}`,...(x=(g=n.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var y,v,b;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <div className="p-20 bg-gradient-to-br from-primary/20 to-secondary/20">
      <StatWidget {...args} variant="glass" label="System Uptime" value="99.99%" trend={{
      value: 0.01,
      isUp: true
    }} icon={<Activity size={20} className="text-primary" />} />
    </div>
}`,...(b=(v=o.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const L=["Default","Primary","Glass"];export{l as Default,o as Glass,n as Primary,L as __namedExportsOrder,B as default};
