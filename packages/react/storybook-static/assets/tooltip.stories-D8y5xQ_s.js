import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as x}from"./clsx-B-dksMZM.js";import{r as a}from"./index-ZH-6pyQh.js";import{J as Z}from"./variants-CIz8xjKx.js";import{B as o}from"./button-BUCKCgZW.js";import{I as b}from"./icon-button-SJycghFZ.js";import"./_commonjsHelpers-CqkleIqs.js";import"./render-D3e-BGhm.js";import"./use-active-press-Bj0hdp5d.js";import"./disabled-DXzavEEa.js";const Y={top:"bottom-full left-1/2 -translate-x-1/2 mb-1.5",bottom:"top-full left-1/2 -translate-x-1/2 mt-1.5",left:"right-full top-1/2 -translate-y-1/2 mr-1.5",right:"left-full top-1/2 -translate-y-1/2 ml-1.5"};function t({content:r,children:_,placement:z="top",delay:u=0,disabled:K=!1,className:V}){const h=a.useId(),[W,m]=a.useState(!1),n=a.useRef(null),f=()=>{K||(n.current&&clearTimeout(n.current),u>0?n.current=setTimeout(()=>m(!0),u):m(!0))},g=()=>{n.current&&(clearTimeout(n.current),n.current=null),m(!1)},O=Z(),P=a.cloneElement(_,{"aria-describedby":h});return e.jsxs("span",{className:x("relative inline-flex",V),onMouseEnter:f,onMouseLeave:g,onFocus:f,onBlur:g,children:[P,e.jsx("div",{id:h,role:"tooltip",hidden:!W,className:x(O.content(),Y[z]),children:r})]})}t.displayName="Tooltip";t.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{content:{required:!0,tsType:{name:"ReactNode"},description:"Tooltip content — plain text or any React node."},children:{required:!0,tsType:{name:"ReactElement"},description:"The trigger element. Must be a single React element that accepts HTML attributes."},placement:{required:!1,tsType:{name:"union",raw:'"top" | "bottom" | "left" | "right"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:'Where the tooltip appears relative to the trigger. Default: "top".',defaultValue:{value:'"top"',computed:!1}},delay:{required:!1,tsType:{name:"number"},description:"Delay in milliseconds before the tooltip appears. Default: 0.",defaultValue:{value:"0",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"When true, the tooltip never shows.",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Extra class names applied to the positioning wrapper."}}};const ne={title:"Components/Tooltip",component:t,parameters:{layout:"centered"},args:{content:"This is a tooltip",placement:"top",delay:0,disabled:!1},argTypes:{content:{control:"text"},placement:{control:"select",options:["top","bottom","left","right"]},delay:{control:"number",description:"Show delay in ms"},disabled:{control:"boolean"}}},l={render:r=>e.jsx(t,{...r,children:e.jsx(o,{children:"Hover or focus me"})})},s={render:()=>e.jsxs("div",{className:"flex gap-8 p-16",children:[e.jsx(t,{content:"Top tooltip",placement:"top",children:e.jsx(o,{children:"Top"})}),e.jsx(t,{content:"Bottom tooltip",placement:"bottom",children:e.jsx(o,{children:"Bottom"})}),e.jsx(t,{content:"Left tooltip",placement:"left",children:e.jsx(o,{children:"Left"})}),e.jsx(t,{content:"Right tooltip",placement:"right",children:e.jsx(o,{children:"Right"})})]}),args:{}},i={render:()=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx(t,{content:"No delay (default)",placement:"bottom",children:e.jsx(o,{variant:"outline",children:"No delay"})}),e.jsx(t,{content:"Appears after 300 ms",placement:"bottom",delay:300,children:e.jsx(o,{variant:"outline",children:"300 ms delay"})}),e.jsx(t,{content:"Appears after 800 ms",placement:"bottom",delay:800,children:e.jsx(o,{variant:"outline",children:"800 ms delay"})})]}),args:{}},c={render:()=>e.jsx(t,{content:"You won't see this",disabled:!0,children:e.jsx(o,{variant:"ghost",disabled:!0,children:"Disabled (no tooltip)"})}),args:{}};function T({className:r}){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:r,"aria-hidden":"true",children:e.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z",clipRule:"evenodd"})})}const p={render:()=>e.jsxs("div",{className:"flex gap-6",children:[e.jsx(t,{content:"Edit this item",placement:"top",children:e.jsx(b,{"aria-label":"Info",variant:"ghost",icon:e.jsx(T,{className:"size-5"})})}),e.jsx(t,{content:"More information about this field",placement:"right",children:e.jsx(b,{"aria-label":"Info",variant:"outline",icon:e.jsx(T,{className:"size-5"})})})]}),args:{}},d={render:()=>e.jsx(t,{content:e.jsxs("span",{children:[e.jsx("span",{className:"font-semibold block mb-0.5",children:"Keyboard shortcut"}),e.jsx("kbd",{className:"font-mono",children:"⌘ K"})]}),placement:"bottom",children:e.jsx(o,{variant:"outline",children:"Rich tooltip"})}),args:{}};var v,j,y;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <Tooltip {...args}>\r
      <Button>Hover or focus me</Button>\r
    </Tooltip>
}`,...(y=(j=l.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var B,N,I;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div className="flex gap-8 p-16">\r
      <Tooltip content="Top tooltip" placement="top">\r
        <Button>Top</Button>\r
      </Tooltip>\r
      <Tooltip content="Bottom tooltip" placement="bottom">\r
        <Button>Bottom</Button>\r
      </Tooltip>\r
      <Tooltip content="Left tooltip" placement="left">\r
        <Button>Left</Button>\r
      </Tooltip>\r
      <Tooltip content="Right tooltip" placement="right">\r
        <Button>Right</Button>\r
      </Tooltip>\r
    </div>,
  args: {}
}`,...(I=(N=s.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var R,w,E;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">\r
      <Tooltip content="No delay (default)" placement="bottom">\r
        <Button variant="outline">No delay</Button>\r
      </Tooltip>\r
      <Tooltip content="Appears after 300 ms" placement="bottom" delay={300}>\r
        <Button variant="outline">300 ms delay</Button>\r
      </Tooltip>\r
      <Tooltip content="Appears after 800 ms" placement="bottom" delay={800}>\r
        <Button variant="outline">800 ms delay</Button>\r
      </Tooltip>\r
    </div>,
  args: {}
}`,...(E=(w=i.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var D,S,A;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Tooltip content="You won't see this" disabled>\r
      <Button variant="ghost" disabled>Disabled (no tooltip)</Button>\r
    </Tooltip>,
  args: {}
}`,...(A=(S=c.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var M,L,q;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div className="flex gap-6">\r
      <Tooltip content="Edit this item" placement="top">\r
        <IconButton aria-label="Info" variant="ghost" icon={<InfoIcon className="size-5" />} />\r
      </Tooltip>\r
      <Tooltip content="More information about this field" placement="right">\r
        <IconButton aria-label="Info" variant="outline" icon={<InfoIcon className="size-5" />} />\r
      </Tooltip>\r
    </div>,
  args: {}
}`,...(q=(L=p.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var C,k,H;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Tooltip content={<span>\r
          <span className="font-semibold block mb-0.5">Keyboard shortcut</span>\r
          <kbd className="font-mono">⌘ K</kbd>\r
        </span>} placement="bottom">\r
      <Button variant="outline">Rich tooltip</Button>\r
    </Tooltip>,
  args: {}
}`,...(H=(k=d.parameters)==null?void 0:k.docs)==null?void 0:H.source}}};const re=["Default","AllPlacements","WithDelay","Disabled","OnIconButton","RichContent"];export{s as AllPlacements,l as Default,c as Disabled,p as OnIconButton,d as RichContent,i as WithDelay,re as __namedExportsOrder,ne as default};
