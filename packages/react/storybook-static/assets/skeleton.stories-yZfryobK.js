import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as g}from"./clsx-B-dksMZM.js";import{r as U}from"./index-ZH-6pyQh.js";import{v as b}from"./variants-CIz8xjKx.js";import"./_commonjsHelpers-CqkleIqs.js";const r=U.forwardRef(({variant:h="rounded",width:m,height:p,lines:a,className:x,"aria-label":v="Loading...",...f},w)=>{const Q={width:typeof m=="number"?`${m}px`:m,height:typeof p=="number"?`${p}px`:p};return h==="text"&&a&&a>1?e.jsx("div",{ref:w,role:"status","aria-label":v,className:g("flex flex-col gap-2",x),...f,children:Array.from({length:a}).map((X,S)=>e.jsx("div",{className:g(b({variant:"text"}),S===a-1&&"w-3/4")},S))}):e.jsx("div",{ref:w,role:"status","aria-label":v,style:Q,className:g(b({variant:h}),x),...f})});r.displayName="Skeleton";r.__docgenInfo={description:"",methods:[],displayName:"Skeleton",props:{variant:{required:!1,tsType:{name:"union",raw:'"text" | "circular" | "rectangular" | "rounded"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"circular"'},{name:"literal",value:'"rectangular"'},{name:"literal",value:'"rounded"'}]},description:"",defaultValue:{value:'"rounded"',computed:!1}},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},lines:{required:!1,tsType:{name:"number"},description:""},className:{required:!1,tsType:{name:"string"},description:""},"aria-label":{defaultValue:{value:'"Loading..."',computed:!1},required:!1}}};const te={title:"Loading/Skeleton",component:r,argTypes:{variant:{control:"select",options:["text","circular","rectangular","rounded"]},width:{control:"text"},height:{control:"text"},lines:{control:"number"}}},t={args:{variant:"rounded",width:"100%",height:48}},n={args:{variant:"text",width:"100%"}},s={args:{variant:"text",lines:3,width:"100%"}},i={args:{variant:"text",lines:5,width:"100%"}},o={args:{variant:"circular",width:48,height:48}},d={args:{variant:"rectangular",width:"100%",height:200}},l={args:{variant:"rounded",width:200,height:120}},c={render:()=>e.jsxs("div",{className:"flex flex-col gap-3 p-4 border border-gray-200 rounded-lg w-64",children:[e.jsx(r,{variant:"rectangular",height:160}),e.jsx(r,{variant:"text",lines:2}),e.jsx(r,{variant:"rounded",height:36})]})},u={render:()=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(r,{variant:"circular",width:40,height:40}),e.jsxs("div",{className:"flex-1",children:[e.jsx(r,{variant:"text",width:"60%"}),e.jsx("div",{className:"mt-1",children:e.jsx(r,{variant:"text",width:"40%"})})]})]})};var j,y,T;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: "rounded",
    width: "100%",
    height: 48
  }
}`,...(T=(y=t.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var k,N,q;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: "text",
    width: "100%"
  }
}`,...(q=(N=n.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var C,R,_;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: "text",
    lines: 3,
    width: "100%"
  }
}`,...(_=(R=s.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var L,M,A;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: "text",
    lines: 5,
    width: "100%"
  }
}`,...(A=(M=i.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var E,D,F;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: "circular",
    width: 48,
    height: 48
  }
}`,...(F=(D=o.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var V,W,$;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    variant: "rectangular",
    width: "100%",
    height: 200
  }
}`,...($=(W=d.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var I,O,z;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: "rounded",
    width: 200,
    height: 120
  }
}`,...(z=(O=l.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var B,G,H;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3 p-4 border border-gray-200 rounded-lg w-64">\r
      <Skeleton variant="rectangular" height={160} />\r
      <Skeleton variant="text" lines={2} />\r
      <Skeleton variant="rounded" height={36} />\r
    </div>
}`,...(H=(G=c.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,P;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">\r
      <Skeleton variant="circular" width={40} height={40} />\r
      <div className="flex-1">\r
        <Skeleton variant="text" width="60%" />\r
        <div className="mt-1">\r
          <Skeleton variant="text" width="40%" />\r
        </div>\r
      </div>\r
    </div>
}`,...(P=(K=u.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};const ne=["Rounded","Text","MultilineText","MultilineTextFiveLines","Circular","Rectangular","CustomDimensions","CardSkeleton","AvatarWithText"];export{u as AvatarWithText,c as CardSkeleton,o as Circular,l as CustomDimensions,s as MultilineText,i as MultilineTextFiveLines,d as Rectangular,t as Rounded,n as Text,ne as __namedExportsOrder,te as default};
