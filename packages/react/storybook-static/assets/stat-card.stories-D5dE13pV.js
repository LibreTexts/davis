import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as A}from"./clsx-B-dksMZM.js";import"./index-ZH-6pyQh.js";import{z as q}from"./variants-CIz8xjKx.js";import"./_commonjsHelpers-CqkleIqs.js";function W({className:a}){return e.jsx("svg",{viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true",className:a,children:e.jsx("path",{fillRule:"evenodd",d:"M8 14a.75.75 0 0 1-.75-.75V4.56L3.03 7.78a.75.75 0 0 1-1.06-1.06l4.5-4.5a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06L8.75 4.56v8.69A.75.75 0 0 1 8 14Z",clipRule:"evenodd"})})}function D({className:a}){return e.jsx("svg",{viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true",className:a,children:e.jsx("path",{fillRule:"evenodd",d:"M8 2a.75.75 0 0 1 .75.75v8.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 0 1 1.06-1.06L7.25 11.44V2.75A.75.75 0 0 1 8 2Z",clipRule:"evenodd"})})}function E({className:a}){return e.jsx("svg",{viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true",className:a,children:e.jsx("path",{fillRule:"evenodd",d:"M2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8Z",clipRule:"evenodd"})})}function s({label:a,value:I,trend:r,icon:u,variant:z="default",className:L}){const n=q({variant:z,trendDirection:r==null?void 0:r.direction});return e.jsx("div",{className:A(n.root(),L),children:e.jsxs("div",{className:n.header(),children:[e.jsxs("div",{className:n.body(),children:[e.jsx("p",{className:n.label(),children:a}),e.jsx("p",{className:n.value(),children:I}),r!==void 0&&e.jsxs("div",{className:n.trend(),children:[r.direction==="up"&&e.jsx(W,{className:"size-4 shrink-0"}),r.direction==="down"&&e.jsx(D,{className:"size-4 shrink-0"}),r.direction==="neutral"&&e.jsx(E,{className:"size-4 shrink-0"}),e.jsx("span",{children:r.value}),r.label!==void 0&&e.jsx("span",{className:n.trendLabel(),children:r.label})]})]}),u!==void 0&&e.jsx("div",{className:n.icon(),"aria-hidden":"true",children:u})]})})}s.displayName="StatCard";s.__docgenInfo={description:"",methods:[],displayName:"StatCard",props:{label:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},trend:{required:!1,tsType:{name:"signature",type:"object",raw:`{\r
  direction: "up" | "down" | "neutral";\r
  value: string;\r
  label?: string;\r
}`,signature:{properties:[{key:"direction",value:{name:"union",raw:'"up" | "down" | "neutral"',elements:[{name:"literal",value:'"up"'},{name:"literal",value:'"down"'},{name:"literal",value:'"neutral"'}],required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}}]}},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"default" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const O={title:"Components/StatCard",component:s,parameters:{layout:"padded"}};function U({className:a}){return e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,className:a,"aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"})})}function Z({className:a}){return e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,className:a,"aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"})})}function B({className:a}){return e.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,className:a,"aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"})})}const l={args:{label:"Total Users",value:"12,485"}},t={args:{label:"Monthly Revenue",value:"$48,295",trend:{direction:"up",value:"12.5%",label:"vs last month"}}},i={args:{label:"Error Rate",value:"2.4%",trend:{direction:"down",value:"0.8%",label:"vs last week"},variant:"danger"}},o={args:{label:"Active Users",value:"3,842",trend:{direction:"up",value:"4.1%",label:"vs yesterday"},icon:e.jsx(U,{className:"size-8"})}},d={render:()=>e.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4",children:[e.jsx(s,{label:"Total Users",value:"12,485",trend:{direction:"up",value:"8.2%",label:"vs last month"},icon:e.jsx(U,{className:"size-8"})}),e.jsx(s,{label:"Revenue",value:"$48,295",trend:{direction:"up",value:"12.5%",label:"vs last month"},icon:e.jsx(Z,{className:"size-8"}),variant:"success"}),e.jsx(s,{label:"Churn Rate",value:"3.2%",trend:{direction:"down",value:"0.4%",label:"vs last month"},variant:"warning"}),e.jsx(s,{label:"Error Rate",value:"0.8%",trend:{direction:"neutral",value:"No change"},icon:e.jsx(B,{className:"size-8"}),variant:"danger"})]})},c={render:()=>e.jsx("div",{className:"grid grid-cols-2 gap-4",children:["default","success","warning","danger"].map(a=>e.jsx(s,{label:`${a.charAt(0).toUpperCase()+a.slice(1)} variant`,value:"1,234",trend:{direction:"up",value:"5%"},variant:a},a))})};var v,m,p;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: "Total Users",
    value: "12,485"
  }
}`,...(p=(m=l.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,h,x;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: "Monthly Revenue",
    value: "$48,295",
    trend: {
      direction: "up",
      value: "12.5%",
      label: "vs last month"
    }
  }
}`,...(x=(h=t.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var b,j,f;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: "Error Rate",
    value: "2.4%",
    trend: {
      direction: "down",
      value: "0.8%",
      label: "vs last week"
    },
    variant: "danger"
  }
}`,...(f=(j=i.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var w,N,y;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: "Active Users",
    value: "3,842",
    trend: {
      direction: "up",
      value: "4.1%",
      label: "vs yesterday"
    },
    icon: <UsersIcon className="size-8" />
  }
}`,...(y=(N=o.parameters)==null?void 0:N.docs)==null?void 0:y.source}}};var C,k,R;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">\r
      <StatCard label="Total Users" value="12,485" trend={{
      direction: "up",
      value: "8.2%",
      label: "vs last month"
    }} icon={<UsersIcon className="size-8" />} />\r
      <StatCard label="Revenue" value="$48,295" trend={{
      direction: "up",
      value: "12.5%",
      label: "vs last month"
    }} icon={<RevenueIcon className="size-8" />} variant="success" />\r
      <StatCard label="Churn Rate" value="3.2%" trend={{
      direction: "down",
      value: "0.4%",
      label: "vs last month"
    }} variant="warning" />\r
      <StatCard label="Error Rate" value="0.8%" trend={{
      direction: "neutral",
      value: "No change"
    }} icon={<ErrorIcon className="size-8" />} variant="danger" />\r
    </div>
}`,...(R=(k=d.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var S,M,T;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-4">\r
      {(["default", "success", "warning", "danger"] as const).map(variant => <StatCard key={variant} label={\`\${variant.charAt(0).toUpperCase() + variant.slice(1)} variant\`} value="1,234" trend={{
      direction: "up",
      value: "5%"
    }} variant={variant} />)}\r
    </div>
}`,...(T=(M=c.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};const F=["Default","WithTrendUp","WithTrendDown","WithIcon","DashboardGrid","Variants"];export{d as DashboardGrid,l as Default,c as Variants,o as WithIcon,i as WithTrendDown,t as WithTrendUp,F as __namedExportsOrder,O as default};
