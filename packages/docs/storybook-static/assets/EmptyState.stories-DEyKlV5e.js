import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as S}from"./index-G8LIXM5I.js";import{B as o}from"./Button-CHx1A1SZ.js";import{c as N}from"./createLucideIcon-Kw1ofbhU.js";import{C as w}from"./circle-alert-BrBpXnRH.js";import{S as B}from"./search-C-Tm1LWf.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-AfRRboR2.js";import"./index-DI21ItfZ.js";import"./index-CRGxjvZy.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=N("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]),y=S.forwardRef(({illustration:s,title:x,description:n,action:i,className:j,...v},b)=>e.jsxs("div",{ref:b,className:["flex flex-col items-center justify-center p-8 text-center",j].filter(Boolean).join(" "),...v,children:[s&&e.jsx("div",{className:"mb-4 flex items-center justify-center text-foreground-muted/40",children:s}),e.jsx("h3",{className:"mb-2 text-lg font-semibold leading-tight text-foreground",children:x}),n&&e.jsx("p",{className:"mb-6 max-w-sm text-sm leading-normal text-foreground-muted",children:n}),i&&e.jsx("div",{children:i})]}));y.displayName="EmptyState";const G={title:"Components/EmptyState",component:y,tags:["autodocs"],parameters:{docs:{description:{component:`EmptyState provides feedback when a view contains no data, either because it has not been created yet or due to a filter/error.

Accessibility: The component structure uses appropriate heading levels.`}}},argTypes:{title:{control:"text"},description:{control:"text"}}},t={args:{illustration:e.jsx(E,{size:48}),title:"No projects found",description:"Get started by creating a new project. Once you have projects, they will show up here.",action:e.jsx(o,{children:"Create Project"})}},r={args:{illustration:e.jsx(B,{size:48}),title:"No results found",description:`We couldn't find anything matching "behaix". Try adjusting your search or filters.`,action:e.jsx(o,{variant:"secondary",children:"Clear filters"})}},a={args:{illustration:e.jsx(w,{size:48,className:"text-[var(--color-danger)]"}),title:"Failed to load data",description:"There was a problem loading the data. Please check your connection and try again.",action:e.jsx(o,{variant:"secondary",children:"Try again"})}};var c,l,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    illustration: <FolderOpen size={48} />,
    title: 'No projects found',
    description: 'Get started by creating a new project. Once you have projects, they will show up here.',
    action: <Button>Create Project</Button>
  }
}`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var m,p,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    illustration: <Search size={48} />,
    title: 'No results found',
    description: 'We couldn\\'t find anything matching "behaix". Try adjusting your search or filters.',
    action: <Button variant="secondary">Clear filters</Button>
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,g,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    illustration: <AlertCircle size={48} className="text-[var(--color-danger)]" />,
    title: 'Failed to load data',
    description: 'There was a problem loading the data. Please check your connection and try again.',
    action: <Button variant="secondary">Try again</Button>
  }
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const W=["Default","SearchNoResults","ErrorState"];export{t as Default,a as ErrorState,r as SearchNoResults,W as __namedExportsOrder,G as default};
