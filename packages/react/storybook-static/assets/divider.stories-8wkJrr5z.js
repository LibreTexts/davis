import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as d}from"./clsx-B-dksMZM.js";import{r as H}from"./index-ZH-6pyQh.js";import{k as D}from"./variants-CIz8xjKx.js";import"./_commonjsHelpers-CqkleIqs.js";const m=H.forwardRef(({orientation:r="horizontal",label:p,className:i,...n},l)=>{const{root:h,line:c,label:L}=D({orientation:r});return p?e.jsxs("div",{ref:l,role:"separator","aria-orientation":r,className:d(h(),i),...n,children:[e.jsx("span",{"aria-hidden":"true",className:c()}),e.jsx("span",{className:L(),children:p}),e.jsx("span",{"aria-hidden":"true",className:c()})]}):r==="vertical"?e.jsx("div",{ref:l,role:"separator","aria-orientation":"vertical",className:d(h(),i),...n,children:e.jsx("span",{className:c()})}):e.jsx("hr",{ref:l,role:"separator",className:d("border-gray-200 w-full",i),...n})});m.displayName="Divider";m.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const E={title:"Layout/Divider",component:m,argTypes:{orientation:{control:"select",options:["horizontal","vertical"]},label:{control:"text"}}},a={args:{orientation:"horizontal"},decorators:[r=>e.jsxs("div",{className:"p-8",children:[e.jsx("p",{className:"text-sm mb-4",children:"Above the divider"}),e.jsx(r,{}),e.jsx("p",{className:"text-sm mt-4",children:"Below the divider"})]})]},s={args:{orientation:"horizontal",label:"Or continue with"},decorators:[r=>e.jsx("div",{className:"p-8",children:e.jsx(r,{})})]},t={args:{orientation:"horizontal",label:"Section divider"}},o={args:{orientation:"vertical"},decorators:[r=>e.jsxs("div",{className:"flex items-center gap-4 p-8 h-16",children:[e.jsx("span",{className:"text-sm",children:"Left"}),e.jsx(r,{}),e.jsx("span",{className:"text-sm",children:"Right"})]})]};var v,x,u;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    orientation: "horizontal"
  },
  decorators: [Story => <div className="p-8">\r
        <p className="text-sm mb-4">Above the divider</p>\r
        <Story />\r
        <p className="text-sm mt-4">Below the divider</p>\r
      </div>]
}`,...(u=(x=a.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var N,g,j;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    orientation: "horizontal",
    label: "Or continue with"
  },
  decorators: [Story => <div className="p-8">\r
        <Story />\r
      </div>]
}`,...(j=(g=s.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};var f,z,b;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    orientation: "horizontal",
    label: "Section divider"
  }
}`,...(b=(z=t.parameters)==null?void 0:z.docs)==null?void 0:b.source}}};var y,S,w;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    orientation: "vertical"
  },
  decorators: [Story => <div className="flex items-center gap-4 p-8 h-16">\r
        <span className="text-sm">Left</span>\r
        <Story />\r
        <span className="text-sm">Right</span>\r
      </div>]
}`,...(w=(S=o.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};const O=["Horizontal","HorizontalWithLabel","HorizontalWithSectionLabel","Vertical"];export{a as Horizontal,s as HorizontalWithLabel,t as HorizontalWithSectionLabel,o as Vertical,O as __namedExportsOrder,E as default};
