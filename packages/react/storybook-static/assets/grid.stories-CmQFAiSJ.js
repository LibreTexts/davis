import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as Z}from"./clsx-B-dksMZM.js";import{r as $}from"./index-ZH-6pyQh.js";import{n as rr}from"./variants-CIz8xjKx.js";import"./_commonjsHelpers-CqkleIqs.js";const g=$.forwardRef(function({as:r,cols:M,gap:P,className:Q,children:U,...W},X){const Y=r||"div";return e.jsx(Y,{ref:X,className:Z(rr({cols:M,gap:P}),Q),...W,children:U})});g.displayName="Grid";g.__docgenInfo={description:"",methods:[],displayName:"Grid"};const u=({children:s})=>e.jsx("div",{className:"bg-primary/20 rounded p-4 text-sm text-center",children:s}),sr=Array.from({length:6}).map((s,r)=>e.jsxs(u,{children:["Item ",r+1]},r)),mr={title:"Layout/Grid",component:g,args:{children:sr},argTypes:{cols:{control:"select",options:[1,2,3,4,6,12]},gap:{control:"select",options:["none","xs","sm","md","lg","xl","2xl"]}}},o={args:{cols:1}},a={args:{cols:2}},n={args:{cols:3}},c={args:{cols:4}},m={args:{cols:6,children:Array.from({length:12}).map((s,r)=>e.jsxs(u,{children:["Item ",r+1]},r))}},t={args:{cols:12,children:Array.from({length:12}).map((s,r)=>e.jsx(u,{children:r+1},r))}},l={args:{cols:3,gap:"none"}},p={args:{cols:3,gap:"sm"}},i={args:{cols:3,gap:"lg"}},d={args:{cols:1,className:"md:grid-cols-3"}};var x,h,G;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    cols: 1
  }
}`,...(G=(h=o.parameters)==null?void 0:h.docs)==null?void 0:G.source}}};var C,f,S;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    cols: 2
  }
}`,...(S=(f=a.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var y,N,I;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    cols: 3
  }
}`,...(I=(N=n.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var _,j,T;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    cols: 4
  }
}`,...(T=(j=c.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var v,w,A;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    cols: 6,
    children: Array.from({
      length: 12
    }).map((_, i) => <GridItem key={i}>Item {i + 1}</GridItem>)
  }
}`,...(A=(w=m.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var R,E,L;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    cols: 12,
    children: Array.from({
      length: 12
    }).map((_, i) => <GridItem key={i}>{i + 1}</GridItem>)
  }
}`,...(L=(E=t.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var O,k,F;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    cols: 3,
    gap: "none"
  }
}`,...(F=(k=l.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var V,b,q;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    cols: 3,
    gap: "sm"
  }
}`,...(q=(b=p.parameters)==null?void 0:b.docs)==null?void 0:q.source}}};var z,B,D;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    cols: 3,
    gap: "lg"
  }
}`,...(D=(B=i.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var H,J,K;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    cols: 1,
    className: "md:grid-cols-3"
  }
}`,...(K=(J=d.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const tr=["OneColumn","TwoColumns","ThreeColumns","FourColumns","SixColumns","TwelveColumns","GapNone","GapSm","GapLg","ResponsiveViaClassName"];export{c as FourColumns,i as GapLg,l as GapNone,p as GapSm,o as OneColumn,d as ResponsiveViaClassName,m as SixColumns,n as ThreeColumns,t as TwelveColumns,a as TwoColumns,tr as __namedExportsOrder,mr as default};
