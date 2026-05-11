import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as o}from"./index-G8LIXM5I.js";import{c as k}from"./index-CRGxjvZy.js";import{C as w}from"./check-CmyZu3lR.js";import{c as n}from"./createLucideIcon-Kw1ofbhU.js";import{H as T}from"./house-BqG1A-GE.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=n("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=n("Package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",key:"yx3hmr"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=n("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=n("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]]),M=k("flex flex-col w-full max-w-2xl",{variants:{size:{sm:"gap-4",md:"gap-6",lg:"gap-8"}},defaultVariants:{size:"md"}}),u=({size:l,className:a,children:s,...m})=>{const r=o.Children.count(s);return e.jsx("div",{className:M({size:l,className:a}),...m,children:o.Children.map(s,(i,p)=>o.isValidElement(i)?o.cloneElement(i,{isLast:p===r-1}):i)})},I=k("relative flex gap-4 transition-all duration-500",{variants:{status:{completed:"text-foreground",current:"text-primary",pending:"text-foreground-muted opacity-60"}},defaultVariants:{status:"pending"}}),t=({title:l,description:a,time:s,icon:m,status:r="pending",isLast:i,className:p,...b})=>e.jsxs("div",{className:I({status:r,className:p}),...b,children:[!i&&e.jsx("div",{className:"absolute left-6 top-10 bottom-[-24px] w-0.5 bg-border-subtle overflow-hidden",children:e.jsx("div",{className:["w-full h-full bg-primary transition-all duration-1000 origin-top",r==="completed"?"scale-y-100":"scale-y-0"].join(" ")})}),e.jsx("div",{className:"relative shrink-0",children:e.jsx("div",{className:["flex h-12 w-12 items-center justify-center rounded-2xl border-2 transition-all duration-500 z-10 relative bg-surface",r==="completed"&&"border-primary bg-primary text-primary-fg shadow-lg shadow-primary/20 scale-100",r==="current"&&"border-primary text-primary animate-pulse scale-110 shadow-xl shadow-primary/10",r==="pending"&&"border-border-subtle text-foreground-muted"].filter(Boolean).join(" "),children:r==="completed"?e.jsx(w,{size:20}):m||e.jsx(j,{size:20})})}),e.jsxs("div",{className:"flex flex-col py-1",children:[e.jsxs("div",{className:"flex items-center justify-between gap-4",children:[e.jsx("h4",{className:["font-bold tracking-tight transition-colors",r==="current"?"text-primary":"text-foreground"].join(" "),children:l}),s&&e.jsx("span",{className:"text-xs font-medium text-foreground-muted whitespace-nowrap",children:s})]}),a&&e.jsx("p",{className:"mt-1 text-sm text-foreground-muted leading-relaxed",children:a})]})]}),q={title:"Components/Tracker",component:u,tags:["autodocs"]},c={render:()=>e.jsxs("div",{className:"w-full max-w-xl p-10 bg-surface border border-border-subtle rounded-3xl shadow-xl",children:[e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"text-xl font-black tracking-tight",children:"Order #BK-9482"}),e.jsx("p",{className:"text-sm text-foreground-muted",children:"Estimated delivery: 12:45 PM"})]}),e.jsxs(u,{children:[e.jsx(t,{title:"Order Received",description:"We've received your order and it's being processed.",time:"11:30 AM",status:"completed",icon:e.jsx(j,{size:20})}),e.jsx(t,{title:"Preparing Food",description:"The chef is preparing your meal with fresh ingredients.",time:"11:45 AM",status:"completed",icon:e.jsx(O,{size:20})}),e.jsx(t,{title:"In the Oven",description:"Your pizza is baking to perfection.",time:"12:05 PM",status:"current",icon:e.jsx(z,{size:20})}),e.jsx(t,{title:"Out for Delivery",description:"Our courier is on the way to your location.",status:"pending",icon:e.jsx(N,{size:20})}),e.jsx(t,{title:"Delivered",description:"Enjoy your meal!",status:"pending",icon:e.jsx(T,{size:20})})]})]})},d={render:()=>e.jsx("div",{className:"w-full max-w-md p-8 bg-surface-raised border border-border-subtle rounded-2xl",children:e.jsxs(u,{size:"sm",children:[e.jsx(t,{title:"Shipped",time:"Oct 12",status:"completed"}),e.jsx(t,{title:"Arrived at Facility",time:"Oct 13",status:"completed"}),e.jsx(t,{title:"Out for Delivery",time:"Today",status:"current"}),e.jsx(t,{title:"Delivered",status:"pending"})]})})};var x,h,g;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-xl p-10 bg-surface border border-border-subtle rounded-3xl shadow-xl">
      <div className="mb-8">
        <h3 className="text-xl font-black tracking-tight">Order #BK-9482</h3>
        <p className="text-sm text-foreground-muted">Estimated delivery: 12:45 PM</p>
      </div>
      <Tracker>
        <TrackerItem title="Order Received" description="We've received your order and it's being processed." time="11:30 AM" status="completed" icon={<Clock size={20} />} />
        <TrackerItem title="Preparing Food" description="The chef is preparing your meal with fresh ingredients." time="11:45 AM" status="completed" icon={<Utensils size={20} />} />
        <TrackerItem title="In the Oven" description="Your pizza is baking to perfection." time="12:05 PM" status="current" icon={<Package size={20} />} />
        <TrackerItem title="Out for Delivery" description="Our courier is on the way to your location." status="pending" icon={<Truck size={20} />} />
        <TrackerItem title="Delivered" description="Enjoy your meal!" status="pending" icon={<Home size={20} />} />
      </Tracker>
    </div>
}`,...(g=(h=c.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var y,f,v;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-md p-8 bg-surface-raised border border-border-subtle rounded-2xl">
      <Tracker size="sm">
        <TrackerItem title="Shipped" time="Oct 12" status="completed" />
        <TrackerItem title="Arrived at Facility" time="Oct 13" status="completed" />
        <TrackerItem title="Out for Delivery" time="Today" status="current" />
        <TrackerItem title="Delivered" status="pending" />
      </Tracker>
    </div>
}`,...(v=(f=d.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const F=["OrderTracking","DeliveryStatus"];export{d as DeliveryStatus,c as OrderTracking,F as __namedExportsOrder,q as default};
