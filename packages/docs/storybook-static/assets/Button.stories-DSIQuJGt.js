import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{B as r}from"./Button-CHx1A1SZ.js";import{P as y,D as he,A as ve}from"./plus-DaG_aIjS.js";import{B as f}from"./ButtonGroup-Bf1DYWZA.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-AfRRboR2.js";import"./index-DI21ItfZ.js";import"./index-CRGxjvZy.js";import"./createLucideIcon-Kw1ofbhU.js";const ze={title:"Components/Button",component:r,tags:["autodocs"],parameters:{docs:{source:{state:"open"},description:{component:"Button triggers an action or navigates to a new destination. Use it for primary, secondary, destructive, ghost, and inline link actions; avoid using it for static labels or non-interactive decoration.\n\nAccessibility: buttons are keyboard focusable by default, expose disabled and loading states with `disabled`, `aria-disabled`, and `aria-busy`, and require `aria-label` when rendered without visible text.\n\nDesign token dependencies: `--color-primary`, `--color-primary-hover`, `--color-primary-fg`, `--color-danger`, `--color-danger-fg`, neutral colors, radius, shadow, text, leading, duration, easing, and focus tokens.\n\nKnown limitations: icon-only buttons require an accessible `aria-label`; `asChild` disabled behavior is represented with ARIA and pointer-event prevention because non-button elements do not support the native `disabled` attribute."}}},argTypes:{variant:{control:"select",options:["primary","secondary","ghost","danger","link"]},size:{control:"select",options:["sm","md","lg"]},asChild:{control:"boolean"},disabled:{control:"boolean"},isLoading:{control:"boolean"},leftIcon:{control:!1},rightIcon:{control:!1},children:{control:"text"}},args:{children:"Create project",size:"md",variant:"primary"}},a={},n={args:{variant:"primary",children:"Save changes"}},s={args:{variant:"secondary",children:"Cancel"}},o={args:{variant:"ghost",children:"Dismiss"}},t={args:{variant:"danger",children:"Delete workspace"}},i={args:{variant:"link",children:"View documentation"}},d={render:()=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(r,{size:"sm",children:"Small"}),e.jsx(r,{size:"md",children:"Medium"}),e.jsx(r,{size:"lg",children:"Large"})]}),parameters:{docs:{description:{story:"Use small buttons in dense toolbars, medium buttons for standard forms, and large buttons for prominent empty-state or onboarding actions."}}}},c={args:{leftIcon:e.jsx(y,{"aria-hidden":"true",size:16}),rightIcon:e.jsx(ve,{"aria-hidden":"true",size:16}),children:"New workflow"}},l={args:{"aria-label":"Download report",leftIcon:e.jsx(he,{"aria-hidden":"true",size:16}),children:void 0},parameters:{docs:{description:{story:"Icon-only buttons must include an `aria-label` so screen readers can announce their purpose."}}}},u={args:{disabled:!0,children:"Unavailable"}},m={args:{isLoading:!0,children:"Saving"}},p={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs(f,{children:[e.jsx(r,{variant:"secondary",children:"Years"}),e.jsx(r,{variant:"secondary",children:"Months"}),e.jsx(r,{variant:"secondary",children:"Days"})]}),e.jsxs(f,{orientation:"vertical",children:[e.jsx(r,{variant:"secondary",children:"Top"}),e.jsx(r,{variant:"secondary",children:"Middle"}),e.jsx(r,{variant:"secondary",children:"Bottom"})]})]}),parameters:{docs:{description:{story:"`ButtonGroup` creates a unified visual set of related actions by sharing borders and removing internal radii."}}}},g={render:()=>e.jsx(r,{asChild:!0,children:e.jsx("a",{href:"https://behaix.design",children:"Open Behaix"})}),parameters:{docs:{description:{story:"`asChild` applies button styling to another semantic element, such as an anchor for navigation."}}}},h={render:()=>e.jsxs("div",{className:"max-w-sm rounded-[var(--radius-lg)] border border-[var(--color-neutral-300)] bg-[var(--color-surface-raised)] p-6 shadow-[var(--shadow-sm)]",children:[e.jsx("h3",{className:"m-0 text-[var(--text-lg)] font-[var(--font-semibold)] leading-[var(--leading-tight)] text-[var(--color-neutral-800)]",children:"Invite your team"}),e.jsx("p",{className:"mb-5 mt-2 text-[var(--text-base)] leading-[var(--leading-normal)] text-[var(--color-neutral-600)]",children:"Add collaborators to review design-system changes before release."}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx(r,{leftIcon:e.jsx(y,{"aria-hidden":"true",size:16}),children:"Invite member"}),e.jsx(r,{variant:"secondary",children:"Copy link"})]})]})},v={args:{children:"Create project"},decorators:[ge=>e.jsx("div",{"data-theme":"dark",className:"bg-[var(--color-surface)] p-6",children:e.jsx(ge,{})})],parameters:{backgrounds:{default:"dark"},docs:{description:{story:'Dark mode is driven by `[data-theme="dark"]` token overrides, not alternate component styles.'}}}},b={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(r,{children:"Keyboard focusable button"}),e.jsx(r,{isLoading:!0,children:"Announces busy state"}),e.jsx(r,{"aria-label":"Add item",leftIcon:e.jsx(y,{"aria-hidden":"true",size:16})})]}),parameters:{docs:{description:{story:"Keyboard: Tab moves focus to enabled buttons, Enter and Space activate native buttons. Screen readers: loading state uses `aria-busy`; icon-only buttons require `aria-label`."}}}};var x,B,j;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(j=(B=a.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};var S,w,k;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Save changes'
  }
}`,...(k=(w=n.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var I,D,z;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Cancel'
  }
}`,...(z=(D=s.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};var C,N,A;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    children: 'Dismiss'
  }
}`,...(A=(N=o.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var G,L,M;t.parameters={...t.parameters,docs:{...(G=t.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    children: 'Delete workspace'
  }
}`,...(M=(L=t.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var P,K,O;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    variant: 'link',
    children: 'View documentation'
  }
}`,...(O=(K=i.parameters)==null?void 0:K.docs)==null?void 0:O.source}}};var T,U,q;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Use small buttons in dense toolbars, medium buttons for standard forms, and large buttons for prominent empty-state or onboarding actions.'
      }
    }
  }
}`,...(q=(U=d.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var E,R,V;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    leftIcon: <Plus aria-hidden="true" size={16} />,
    rightIcon: <ArrowRight aria-hidden="true" size={16} />,
    children: 'New workflow'
  }
}`,...(V=(R=c.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var W,Y,_;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Download report',
    leftIcon: <Download aria-hidden="true" size={16} />,
    children: undefined
  },
  parameters: {
    docs: {
      description: {
        story: 'Icon-only buttons must include an \`aria-label\` so screen readers can announce their purpose.'
      }
    }
  }
}`,...(_=(Y=l.parameters)==null?void 0:Y.docs)==null?void 0:_.source}}};var F,H,J;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: 'Unavailable'
  }
}`,...(J=(H=u.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var Q,X,Z;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    children: 'Saving'
  }
}`,...(Z=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var $,ee,re;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <ButtonGroup>
        <Button variant="secondary">Years</Button>
        <Button variant="secondary">Months</Button>
        <Button variant="secondary">Days</Button>
      </ButtonGroup>
      <ButtonGroup orientation="vertical">
        <Button variant="secondary">Top</Button>
        <Button variant="secondary">Middle</Button>
        <Button variant="secondary">Bottom</Button>
      </ButtonGroup>
    </div>,
  parameters: {
    docs: {
      description: {
        story: '\`ButtonGroup\` creates a unified visual set of related actions by sharing borders and removing internal radii.'
      }
    }
  }
}`,...(re=(ee=p.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,ne,se;g.parameters={...g.parameters,docs:{...(ae=g.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <Button asChild>
      <a href="https://behaix.design">Open Behaix</a>
    </Button>,
  parameters: {
    docs: {
      description: {
        story: '\`asChild\` applies button styling to another semantic element, such as an anchor for navigation.'
      }
    }
  }
}`,...(se=(ne=g.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var oe,te,ie;h.parameters={...h.parameters,docs:{...(oe=h.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <div className="max-w-sm rounded-[var(--radius-lg)] border border-[var(--color-neutral-300)] bg-[var(--color-surface-raised)] p-6 shadow-[var(--shadow-sm)]">
      <h3 className="m-0 text-[var(--text-lg)] font-[var(--font-semibold)] leading-[var(--leading-tight)] text-[var(--color-neutral-800)]">
        Invite your team
      </h3>
      <p className="mb-5 mt-2 text-[var(--text-base)] leading-[var(--leading-normal)] text-[var(--color-neutral-600)]">
        Add collaborators to review design-system changes before release.
      </p>
      <div className="flex gap-3">
        <Button leftIcon={<Plus aria-hidden="true" size={16} />}>Invite member</Button>
        <Button variant="secondary">Copy link</Button>
      </div>
    </div>
}`,...(ie=(te=h.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var de,ce,le;v.parameters={...v.parameters,docs:{...(de=v.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    children: 'Create project'
  },
  decorators: [Story => <div data-theme="dark" className="bg-[var(--color-surface)] p-6">
        <Story />
      </div>],
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    docs: {
      description: {
        story: 'Dark mode is driven by \`[data-theme="dark"]\` token overrides, not alternate component styles.'
      }
    }
  }
}`,...(le=(ce=v.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var ue,me,pe;b.parameters={...b.parameters,docs:{...(ue=b.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Button>Keyboard focusable button</Button>
      <Button isLoading>Announces busy state</Button>
      <Button aria-label="Add item" leftIcon={<Plus aria-hidden="true" size={16} />} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Keyboard: Tab moves focus to enabled buttons, Enter and Space activate native buttons. Screen readers: loading state uses \`aria-busy\`; icon-only buttons require \`aria-label\`.'
      }
    }
  }
}`,...(pe=(me=b.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};const Ce=["Default","Primary","Secondary","Ghost","Danger","Link","Sizes","WithIcons","IconOnly","Disabled","Loading","Grouped","AsChild","Composition","DarkMode","Accessibility"];export{b as Accessibility,g as AsChild,h as Composition,t as Danger,v as DarkMode,a as Default,u as Disabled,o as Ghost,p as Grouped,l as IconOnly,i as Link,m as Loading,n as Primary,s as Secondary,d as Sizes,c as WithIcons,Ce as __namedExportsOrder,ze as default};
