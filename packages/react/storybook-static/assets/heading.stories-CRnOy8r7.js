import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as R}from"./clsx-B-dksMZM.js";import{r as T}from"./index-ZH-6pyQh.js";import{o as _}from"./variants-CIz8xjKx.js";import"./_commonjsHelpers-CqkleIqs.js";const M={1:"h1",2:"h2",3:"h3",4:"h4",5:"h5",6:"h6"},l=T.forwardRef(function({as:S,level:d=1,color:y,align:V,truncate:C,className:z,children:A,...D},E){const P=S||M[d];return e.jsx(P,{ref:E,className:R(_({level:d,color:y,align:V,truncate:C}),z),...D,children:A})});l.displayName="Heading";l.__docgenInfo={description:"",methods:[],displayName:"Heading",props:{level:{defaultValue:{value:"1",computed:!1},required:!1}}};const B={title:"Typography/Heading",component:l,tags:["autodocs"]},a={args:{children:"Page Title",level:1}},r={render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(l,{level:1,children:"Heading Level 1"}),e.jsx(l,{level:2,children:"Heading Level 2"}),e.jsx(l,{level:3,children:"Heading Level 3"}),e.jsx(l,{level:4,children:"Heading Level 4"}),e.jsx(l,{level:5,children:"Heading Level 5"}),e.jsx(l,{level:6,children:"Heading Level 6"})]})},n={render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(l,{level:2,color:"default",children:"Default color"}),e.jsx(l,{level:2,color:"muted",children:"Muted color"}),e.jsx(l,{level:2,color:"primary",children:"Primary color"})]})},i={name:"Semantic vs Visual Level",render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(l,{as:"h2",level:1,children:"h2 tag, level-1 size"}),e.jsx(l,{as:"h3",level:2,children:"h3 tag, level-2 size"})]})},s={render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(l,{level:3,align:"left",children:"Left aligned"}),e.jsx(l,{level:3,align:"center",children:"Center aligned"}),e.jsx(l,{level:3,align:"right",children:"Right aligned"})]})};var o,c,g;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: "Page Title",
    level: 1
  }
}`,...(g=(c=a.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var t,v,m;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">\r
      <Heading level={1}>Heading Level 1</Heading>\r
      <Heading level={2}>Heading Level 2</Heading>\r
      <Heading level={3}>Heading Level 3</Heading>\r
      <Heading level={4}>Heading Level 4</Heading>\r
      <Heading level={5}>Heading Level 5</Heading>\r
      <Heading level={6}>Heading Level 6</Heading>\r
    </div>
}`,...(m=(v=r.parameters)==null?void 0:v.docs)==null?void 0:m.source}}};var p,H,h;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">\r
      <Heading level={2} color="default">Default color</Heading>\r
      <Heading level={2} color="muted">Muted color</Heading>\r
      <Heading level={2} color="primary">Primary color</Heading>\r
    </div>
}`,...(h=(H=n.parameters)==null?void 0:H.docs)==null?void 0:h.source}}};var x,u,f;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Semantic vs Visual Level",
  render: () => <div className="flex flex-col gap-3">\r
      <Heading as="h2" level={1}>h2 tag, level-1 size</Heading>\r
      <Heading as="h3" level={2}>h3 tag, level-2 size</Heading>\r
    </div>
}`,...(f=(u=i.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var j,L,N;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">\r
      <Heading level={3} align="left">Left aligned</Heading>\r
      <Heading level={3} align="center">Center aligned</Heading>\r
      <Heading level={3} align="right">Right aligned</Heading>\r
    </div>
}`,...(N=(L=s.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};const F=["Default","AllLevels","Colors","SemanticVsVisual","Aligned"];export{s as Aligned,r as AllLevels,n as Colors,a as Default,i as SemanticVsVisual,F as __namedExportsOrder,B as default};
