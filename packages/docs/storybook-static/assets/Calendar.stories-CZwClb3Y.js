import{j as p}from"./jsx-runtime-Cf8x2fCZ.js";import{r as i}from"./index-G8LIXM5I.js";import{C as n}from"./Calendar-CyH5t0hf.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./chevron-left-DvJYcubp.js";import"./createLucideIcon-Kw1ofbhU.js";import"./chevron-right-CVmhYOTQ.js";import"./Button-CHx1A1SZ.js";import"./index-AfRRboR2.js";import"./index-DI21ItfZ.js";import"./index-CRGxjvZy.js";const w={title:"Components/Calendar",component:n,tags:["autodocs"],argTypes:{mode:{control:"select",options:["single","multiple","range"]}}},e={render:()=>{const[t,a]=i.useState(new Date);return p.jsx(n,{mode:"single",selected:t,onSelect:a,className:"rounded-md border"})}},r={render:()=>{const[t,a]=i.useState(void 0);return p.jsx(n,{mode:"range",selected:t,onSelect:a,className:"rounded-md border"})}};var o,s,d;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />;
  }
}`,...(d=(s=e.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var m,c,l;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const [range, setRange] = React.useState<any>(undefined);
    return <Calendar mode="range" selected={range} onSelect={setRange} className="rounded-md border" />;
  }
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const y=["Default","Range"];export{e as Default,r as Range,y as __namedExportsOrder,w as default};
