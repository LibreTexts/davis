import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as s}from"./clsx-B-dksMZM.js";import"./index-ZH-6pyQh.js";import{p as T}from"./variants-CIz8xjKx.js";import{I as a}from"./input-CZwUJk3H.js";import"./_commonjsHelpers-CqkleIqs.js";function r({prefix:l,suffix:i,children:S,size:v="md",className:y}){const{root:z,addon:m,prefix:$,suffix:R,inputSlot:W,inputFirst:q,inputLast:L}=T({size:v});return e.jsxs("div",{className:s(z(),y),children:[l&&e.jsx("span",{className:s(m(),$()),children:l}),e.jsx("div",{className:s(W(),l&&q(),i&&L()),children:S}),i&&e.jsx("span",{className:s(m(),R()),children:i})]})}r.displayName="InputGroup";r.__docgenInfo={description:"",methods:[],displayName:"InputGroup",props:{prefix:{required:!1,tsType:{name:"ReactNode"},description:""},suffix:{required:!1,tsType:{name:"ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const F={title:"Forms/InputGroup",component:r,tags:["autodocs"]},n={render:()=>e.jsx(r,{prefix:"$",children:e.jsx(a,{name:"amount",label:"Amount",placeholder:"0.00"})})},o={render:()=>e.jsx(r,{suffix:".com",children:e.jsx(a,{name:"domain",label:"Domain",placeholder:"yoursite"})})},t={render:()=>e.jsx(r,{prefix:"https://",suffix:"/path",children:e.jsx(a,{name:"url",label:"URL",placeholder:"example"})})},p={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(r,{prefix:"$",size:"sm",children:e.jsx(a,{name:"sm-amount",label:"Small",placeholder:"0.00"})}),e.jsx(r,{prefix:"$",size:"md",children:e.jsx(a,{name:"md-amount",label:"Medium",placeholder:"0.00"})}),e.jsx(r,{prefix:"$",size:"lg",children:e.jsx(a,{name:"lg-amount",label:"Large",placeholder:"0.00"})})]})};var u,d,c;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <InputGroup prefix="$">\r
      <Input name="amount" label="Amount" placeholder="0.00" />\r
    </InputGroup>
}`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var x,f,h;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <InputGroup suffix=".com">\r
      <Input name="domain" label="Domain" placeholder="yoursite" />\r
    </InputGroup>
}`,...(h=(f=o.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var I,j,g;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <InputGroup prefix="https://" suffix="/path">\r
      <Input name="url" label="URL" placeholder="example" />\r
    </InputGroup>
}`,...(g=(j=t.parameters)==null?void 0:j.docs)==null?void 0:g.source}}};var G,b,N;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">\r
      <InputGroup prefix="$" size="sm">\r
        <Input name="sm-amount" label="Small" placeholder="0.00" />\r
      </InputGroup>\r
      <InputGroup prefix="$" size="md">\r
        <Input name="md-amount" label="Medium" placeholder="0.00" />\r
      </InputGroup>\r
      <InputGroup prefix="$" size="lg">\r
        <Input name="lg-amount" label="Large" placeholder="0.00" />\r
      </InputGroup>\r
    </div>
}`,...(N=(b=p.parameters)==null?void 0:b.docs)==null?void 0:N.source}}};const M=["WithPrefix","WithSuffix","WithBoth","Sizes"];export{p as Sizes,t as WithBoth,n as WithPrefix,o as WithSuffix,M as __namedExportsOrder,F as default};
