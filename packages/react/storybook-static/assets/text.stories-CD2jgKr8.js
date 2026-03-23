import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as q}from"./clsx-B-dksMZM.js";import{r as P}from"./index-ZH-6pyQh.js";import{G as R}from"./variants-CIz8xjKx.js";import"./_commonjsHelpers-CqkleIqs.js";const r=P.forwardRef(function({as:y,size:E,weight:k,color:A,align:B,truncate:D,italic:L,className:M,children:W,..._},C){const I=y||"span";return e.jsx(I,{ref:C,className:q(R({size:E,weight:k,color:A,align:B,truncate:D,italic:L}),M),..._,children:W})});r.displayName="Text";r.__docgenInfo={description:"",methods:[],displayName:"Text"};const K={title:"Typography/Text",component:r,tags:["autodocs"]},s={args:{children:"The quick brown fox jumps over the lazy dog."}},a={render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(r,{size:"xs",children:"Extra Small (xs)"}),e.jsx(r,{size:"sm",children:"Small (sm)"}),e.jsx(r,{size:"base",children:"Base (base)"}),e.jsx(r,{size:"lg",children:"Large (lg)"}),e.jsx(r,{size:"xl",children:"Extra Large (xl)"}),e.jsx(r,{size:"2xl",children:"2XL (2xl)"})]})},t={render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(r,{weight:"normal",children:"Normal weight"}),e.jsx(r,{weight:"medium",children:"Medium weight"}),e.jsx(r,{weight:"semibold",children:"Semibold weight"}),e.jsx(r,{weight:"bold",children:"Bold weight"})]})},o={render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(r,{color:"default",children:"Default"}),e.jsx(r,{color:"muted",children:"Muted"}),e.jsx(r,{color:"primary",children:"Primary"}),e.jsx(r,{color:"success",children:"Success"}),e.jsx(r,{color:"warning",children:"Warning"}),e.jsx(r,{color:"danger",children:"Danger"})]})},l={render:()=>e.jsx(r,{as:"p",size:"base",children:"This is a paragraph of text rendered as a block element. It supports all the same size, weight, and color variants as inline text."})},n={render:()=>e.jsx("div",{className:"w-48",children:e.jsx(r,{truncate:!0,children:"This is a very long text that will be truncated"})})};var i,c,x;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: "The quick brown fox jumps over the lazy dog."
  }
}`,...(x=(c=s.parameters)==null?void 0:c.docs)==null?void 0:x.source}}};var d,m,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">\r
      <Text size="xs">Extra Small (xs)</Text>\r
      <Text size="sm">Small (sm)</Text>\r
      <Text size="base">Base (base)</Text>\r
      <Text size="lg">Large (lg)</Text>\r
      <Text size="xl">Extra Large (xl)</Text>\r
      <Text size="2xl">2XL (2xl)</Text>\r
    </div>
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var h,g,u;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">\r
      <Text weight="normal">Normal weight</Text>\r
      <Text weight="medium">Medium weight</Text>\r
      <Text weight="semibold">Semibold weight</Text>\r
      <Text weight="bold">Bold weight</Text>\r
    </div>
}`,...(u=(g=t.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var T,f,j;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">\r
      <Text color="default">Default</Text>\r
      <Text color="muted">Muted</Text>\r
      <Text color="primary">Primary</Text>\r
      <Text color="success">Success</Text>\r
      <Text color="warning">Warning</Text>\r
      <Text color="danger">Danger</Text>\r
    </div>
}`,...(j=(f=o.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var w,z,b;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Text as="p" size="base">\r
      This is a paragraph of text rendered as a block element. It supports all\r
      the same size, weight, and color variants as inline text.\r
    </Text>
}`,...(b=(z=l.parameters)==null?void 0:z.docs)==null?void 0:b.source}}};var v,S,N;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="w-48">\r
      <Text truncate>This is a very long text that will be truncated</Text>\r
    </div>
}`,...(N=(S=n.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};const Q=["Default","AllSizes","AllWeights","Colors","AsBlock","Truncated"];export{a as AllSizes,t as AllWeights,l as AsBlock,o as Colors,s as Default,n as Truncated,Q as __namedExportsOrder,K as default};
