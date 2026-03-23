import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as j}from"./clsx-B-dksMZM.js";import{x as Le}from"./variants-CIz8xjKx.js";function r({size:be="md",color:Ne="primary",text:s,className:z}){const w=e.jsxs("svg",{className:j(Le({size:be,color:Ne}),!s&&z),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",role:"status","aria-hidden":s?"true":void 0,"aria-label":s?void 0:"Loading",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]});return s?e.jsxs("span",{className:j("inline-flex items-center gap-2",z),children:[w,e.jsx("span",{children:s})]}):w}r.displayName="Spinner";r.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{size:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg" | "xl"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "white" | "current" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"white"'},{name:"literal",value:'"current"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},text:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const ke={title:"Components/Spinner",component:r,argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl"]},color:{control:"select",options:["primary","secondary","white","current","success","warning","danger"]}}},a={args:{}},n={args:{color:"primary"}},o={args:{color:"secondary"}},c={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(r,{size:"xs"}),e.jsx(r,{size:"sm"}),e.jsx(r,{size:"md"}),e.jsx(r,{size:"lg"}),e.jsx(r,{size:"xl"})]})},t={args:{size:"xs"}},i={args:{size:"sm"}},l={args:{size:"md"}},d={args:{size:"lg"}},m={args:{size:"xl"}},p={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(r,{color:"primary"}),e.jsx(r,{color:"secondary"}),e.jsx(r,{color:"success"}),e.jsx(r,{color:"warning"}),e.jsx(r,{color:"danger"})]})},u={render:()=>e.jsx("div",{className:"bg-gray-800 p-6 rounded-lg inline-block",children:e.jsx(r,{color:"white",size:"lg"})})},g={args:{color:"success"}},x={args:{color:"warning"}},y={args:{color:"danger"}},S={args:{text:"Loading..."}},f={render:()=>e.jsx("button",{type:"button",disabled:!0,className:"inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md opacity-75 cursor-wait",children:e.jsx(r,{size:"sm",color:"white",text:"Saving..."})})},v={render:()=>e.jsx("div",{className:"flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-sm border border-gray-200 w-64",children:e.jsx(r,{size:"lg",text:"Loading data..."})})},h={render:()=>e.jsx("div",{className:"flex flex-col items-center justify-center h-64 bg-gray-50 rounded-lg",children:e.jsx(r,{size:"xl",text:"Please wait..."})})};var b,N,L;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {}
}`,...(L=(N=a.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};var C,T,W;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    color: "primary"
  }
}`,...(W=(T=n.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var k,D,E;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    color: "secondary"
  }
}`,...(E=(D=o.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var P,A,q;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">\r
      <Spinner size="xs" />\r
      <Spinner size="sm" />\r
      <Spinner size="md" />\r
      <Spinner size="lg" />\r
      <Spinner size="xl" />\r
    </div>
}`,...(q=(A=c.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};var _,B,M;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    size: "xs"
  }
}`,...(M=(B=t.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var O,V,F;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    size: "sm"
  }
}`,...(F=(V=i.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};var H,I,R;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    size: "md"
  }
}`,...(R=(I=l.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var $,G,J;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    size: "lg"
  }
}`,...(J=(G=d.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,U;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    size: "xl"
  }
}`,...(U=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">\r
      <Spinner color="primary" />\r
      <Spinner color="secondary" />\r
      <Spinner color="success" />\r
      <Spinner color="warning" />\r
      <Spinner color="danger" />\r
    </div>
}`,...(Z=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,se;u.parameters={...u.parameters,docs:{...(ee=u.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <div className="bg-gray-800 p-6 rounded-lg inline-block">\r
      <Spinner color="white" size="lg" />\r
    </div>
}`,...(se=(re=u.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ae,ne,oe;g.parameters={...g.parameters,docs:{...(ae=g.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    color: "success"
  }
}`,...(oe=(ne=g.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var ce,te,ie;x.parameters={...x.parameters,docs:{...(ce=x.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    color: "warning"
  }
}`,...(ie=(te=x.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var le,de,me;y.parameters={...y.parameters,docs:{...(le=y.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    color: "danger"
  }
}`,...(me=(de=y.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var pe,ue,ge;S.parameters={...S.parameters,docs:{...(pe=S.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    text: "Loading..."
  }
}`,...(ge=(ue=S.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};var xe,ye,Se;f.parameters={...f.parameters,docs:{...(xe=f.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => <button type="button" disabled className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md opacity-75 cursor-wait">\r
      <Spinner size="sm" color="white" text="Saving..." />\r
    </button>
}`,...(Se=(ye=f.parameters)==null?void 0:ye.docs)==null?void 0:Se.source}}};var fe,ve,he;v.parameters={...v.parameters,docs:{...(fe=v.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-sm border border-gray-200 w-64">\r
      <Spinner size="lg" text="Loading data..." />\r
    </div>
}`,...(he=(ve=v.parameters)==null?void 0:ve.docs)==null?void 0:he.source}}};var ze,we,je;h.parameters={...h.parameters,docs:{...(ze=h.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col items-center justify-center h-64 bg-gray-50 rounded-lg">\r
      <Spinner size="xl" text="Please wait..." />\r
    </div>
}`,...(je=(we=h.parameters)==null?void 0:we.docs)==null?void 0:je.source}}};const De=["Default","Primary","Secondary","AllSizes","ExtraSmall","Small","Medium","Large","ExtraLarge","AllColors","WhiteOnDark","Success","Warning","Danger","WithText","LoadingButton","LoadingCard","FullPageLoader"];export{p as AllColors,c as AllSizes,y as Danger,a as Default,m as ExtraLarge,t as ExtraSmall,h as FullPageLoader,d as Large,f as LoadingButton,v as LoadingCard,l as Medium,n as Primary,o as Secondary,i as Small,g as Success,x as Warning,u as WhiteOnDark,S as WithText,De as __namedExportsOrder,ke as default};
