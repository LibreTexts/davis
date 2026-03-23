import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as W}from"./index-ZH-6pyQh.js";import{B as a}from"./badge-BVNFVXMp.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";import"./variants-CIz8xjKx.js";const F={title:"Components/Badge",component:a,parameters:{layout:"padded"},args:{label:"Badge"},argTypes:{variant:{control:"select",options:["default","primary","success","warning","danger"]},size:{control:"select",options:["sm","md","lg"]},dot:{control:"boolean"},onRemove:{action:!1}}},l={render:({label:r,variant:n,size:s,dot:t})=>e.jsx(a,{label:r??"Badge",...n!==void 0?{variant:n}:{},...s!==void 0?{size:s}:{},...t!==void 0?{dot:t}:{}}),args:{variant:"default",label:"Badge",size:"md",dot:!1}},i={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-3 items-center",children:[e.jsx(a,{variant:"default",label:"Default"}),e.jsx(a,{variant:"primary",label:"Primary"}),e.jsx(a,{variant:"success",label:"Success"}),e.jsx(a,{variant:"warning",label:"Warning"}),e.jsx(a,{variant:"danger",label:"Danger"})]}),args:{}},d={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-3 items-center",children:[e.jsx(a,{variant:"primary",size:"sm",label:"Small"}),e.jsx(a,{variant:"primary",size:"md",label:"Medium"}),e.jsx(a,{variant:"primary",size:"lg",label:"Large"})]}),args:{}},o={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-3 items-center",children:[e.jsx(a,{variant:"success",label:"Active",dot:!0}),e.jsx(a,{variant:"warning",label:"Pending",dot:!0}),e.jsx(a,{variant:"default",label:"Inactive",dot:!0}),e.jsx(a,{variant:"danger",label:"Error",dot:!0})]}),args:{}},C=["React","TypeScript","Tailwind","Storybook","Vite"],c={render:()=>{const[r,n]=W.useState(C);return e.jsxs("div",{className:"flex flex-wrap gap-2",children:[r.map(s=>e.jsx(a,{variant:"primary",label:s,onRemove:()=>n(t=>t.filter(D=>D!==s))},s)),r.length===0&&e.jsx("span",{className:"text-sm text-gray-500",children:"All tags removed"})]})},args:{}};function g({className:r}){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:r,"aria-hidden":"true",children:e.jsx("path",{fillRule:"evenodd",d:"M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z",clipRule:"evenodd"})})}function E({className:r}){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:r,"aria-hidden":"true",children:e.jsx("path",{fillRule:"evenodd",d:"M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z",clipRule:"evenodd"})})}const m={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-3 items-center",children:[e.jsx(a,{variant:"warning",label:"Featured",icon:e.jsx(g,{className:"size-3"})}),e.jsx(a,{variant:"success",label:"Verified",icon:e.jsx(E,{className:"size-3"})}),e.jsx(a,{variant:"primary",label:"New",icon:e.jsx(g,{className:"size-3"})})]}),args:{}};var p,v,u;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: ({
    label,
    variant,
    size,
    dot
  }) => <Badge label={label ?? "Badge"} {...variant !== undefined ? {
    variant
  } : {}} {...size !== undefined ? {
    size
  } : {}} {...dot !== undefined ? {
    dot
  } : {}} />,
  args: {
    variant: "default",
    label: "Badge",
    size: "md",
    dot: false
  }
}`,...(u=(v=l.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};var x,f,b;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-3 items-center">\r
      <Badge variant="default" label="Default" />\r
      <Badge variant="primary" label="Primary" />\r
      <Badge variant="success" label="Success" />\r
      <Badge variant="warning" label="Warning" />\r
      <Badge variant="danger" label="Danger" />\r
    </div>,
  args: {}
}`,...(b=(f=i.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var j,w,B;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-3 items-center">\r
      <Badge variant="primary" size="sm" label="Small" />\r
      <Badge variant="primary" size="md" label="Medium" />\r
      <Badge variant="primary" size="lg" label="Large" />\r
    </div>,
  args: {}
}`,...(B=(w=d.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var h,y,N;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-3 items-center">\r
      <Badge variant="success" label="Active" dot />\r
      <Badge variant="warning" label="Pending" dot />\r
      <Badge variant="default" label="Inactive" dot />\r
      <Badge variant="danger" label="Error" dot />\r
    </div>,
  args: {}
}`,...(N=(y=o.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var S,z,I;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [tags, setTags] = useState(INITIAL_TAGS);
    return <div className="flex flex-wrap gap-2">\r
        {tags.map(tag => <Badge key={tag} variant="primary" label={tag} onRemove={() => setTags(prev => prev.filter(t => t !== tag))} />)}\r
        {tags.length === 0 && <span className="text-sm text-gray-500">All tags removed</span>}\r
      </div>;
  },
  args: {}
}`,...(I=(z=c.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var R,A,T;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-3 items-center">\r
      <Badge variant="warning" label="Featured" icon={<StarIcon className="size-3" />} />\r
      <Badge variant="success" label="Verified" icon={<CheckIcon className="size-3" />} />\r
      <Badge variant="primary" label="New" icon={<StarIcon className="size-3" />} />\r
    </div>,
  args: {}
}`,...(T=(A=m.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};const G=["Default","AllVariants","Sizes","WithDot","Removable","WithIcon"];export{i as AllVariants,l as Default,c as Removable,d as Sizes,o as WithDot,m as WithIcon,G as __namedExportsOrder,F as default};
