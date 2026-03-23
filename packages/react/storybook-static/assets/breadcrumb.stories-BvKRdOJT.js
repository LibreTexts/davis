import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as j}from"./clsx-B-dksMZM.js";import{r as y}from"./index-ZH-6pyQh.js";import{f as g}from"./variants-CIz8xjKx.js";import"./_commonjsHelpers-CqkleIqs.js";const P=y.createContext({});function r({children:a,className:s,"aria-label":t="Breadcrumb"}){const{root:o,list:d}=g();return e.jsx(P.Provider,{value:{},children:e.jsx("nav",{"aria-label":t,className:j(o(),s),children:e.jsx("ol",{className:d(),children:a})})})}r.displayName="Breadcrumb";function N({children:a,href:s,isCurrent:t=!1,className:o}){const{item:d,link:i,current:v,separator:C}=g();return e.jsxs("li",{className:j(d(),o),children:[t?e.jsx("span",{"aria-current":"page",className:v(),children:a}):s?e.jsx("a",{href:s,className:i(),children:a}):e.jsx("span",{className:i(),children:a}),!t&&e.jsx("span",{className:C(),"aria-hidden":"true",children:e.jsx(q,{})})]})}N.displayName="Breadcrumb.Item";r.Item=N;function q(){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"size-4","aria-hidden":"true",children:e.jsx("path",{fillRule:"evenodd",d:"M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"})})}r.__docgenInfo={description:"",methods:[{name:"Item",docblock:null,modifiers:["static"],params:[{name:"{ children, href, isCurrent = false, className }: BreadcrumbItemProps",optional:!1,type:{name:"signature",type:"object",raw:`{\r
  children: ReactNode;\r
  href?: string;\r
  isCurrent?: boolean;\r
  className?: string;\r
}`,signature:{properties:[{key:"children",value:{name:"ReactNode",required:!0}},{key:"href",value:{name:"string",required:!1}},{key:"isCurrent",value:{name:"boolean",required:!1}},{key:"className",value:{name:"string",required:!1}}]},alias:"BreadcrumbItemProps"}}],returns:null}],displayName:"Breadcrumb",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Breadcrumb"',computed:!1}}}};const H={title:"Navigation/Breadcrumb",component:r,tags:["autodocs"]},n={render:()=>e.jsxs(r,{children:[e.jsx(r.Item,{href:"/",children:"Home"}),e.jsx(r.Item,{href:"/docs",children:"Documentation"}),e.jsx(r.Item,{isCurrent:!0,children:"Components"})]})},c={render:()=>e.jsxs(r,{children:[e.jsx(r.Item,{href:"/",children:"Home"}),e.jsx(r.Item,{isCurrent:!0,children:"Settings"})]})},m={render:()=>e.jsxs(r,{children:[e.jsx(r.Item,{href:"/",children:"Home"}),e.jsx(r.Item,{href:"/products",children:"Products"}),e.jsx(r.Item,{href:"/products/electronics",children:"Electronics"}),e.jsx(r.Item,{href:"/products/electronics/phones",children:"Phones"}),e.jsx(r.Item,{isCurrent:!0,children:"iPhone 15"})]})};var u,l,p;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Breadcrumb>\r
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>\r
      <Breadcrumb.Item href="/docs">Documentation</Breadcrumb.Item>\r
      <Breadcrumb.Item isCurrent>Components</Breadcrumb.Item>\r
    </Breadcrumb>
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var h,b,f;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Breadcrumb>\r
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>\r
      <Breadcrumb.Item isCurrent>Settings</Breadcrumb.Item>\r
    </Breadcrumb>
}`,...(f=(b=c.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var B,I,x;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Breadcrumb>\r
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>\r
      <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>\r
      <Breadcrumb.Item href="/products/electronics">Electronics</Breadcrumb.Item>\r
      <Breadcrumb.Item href="/products/electronics/phones">Phones</Breadcrumb.Item>\r
      <Breadcrumb.Item isCurrent>iPhone 15</Breadcrumb.Item>\r
    </Breadcrumb>
}`,...(x=(I=m.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};const E=["Default","Short","Deep"];export{m as Deep,n as Default,c as Short,E as __namedExportsOrder,H as default};
