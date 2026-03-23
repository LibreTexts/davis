import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{c as gr}from"./clsx-B-dksMZM.js";import{r as lr}from"./index-ZH-6pyQh.js";import{y as ur}from"./variants-CIz8xjKx.js";import"./_commonjsHelpers-CqkleIqs.js";const x=lr.forwardRef(function({as:e,direction:ar,gap:sr,align:or,justify:nr,wrap:tr,className:cr,children:pr,...ir},mr){const dr=e||"div";return r.jsx(dr,{ref:mr,className:gr(ur({direction:ar,gap:sr,align:or,justify:nr,wrap:tr}),cr),...ir,children:pr})});x.displayName="Stack";x.__docgenInfo={description:"",methods:[],displayName:"Stack"};const vr={title:"Layout/Stack",component:x,args:{children:r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"bg-primary/20 rounded p-3 text-sm",children:"Item 1"}),r.jsx("div",{className:"bg-primary/20 rounded p-3 text-sm",children:"Item 2"}),r.jsx("div",{className:"bg-primary/20 rounded p-3 text-sm",children:"Item 3"})]})},argTypes:{direction:{control:"select",options:["vertical","horizontal"]},gap:{control:"select",options:["none","xs","sm","md","lg","xl","2xl"]},align:{control:"select",options:["start","center","end","stretch","baseline"]},justify:{control:"select",options:["start","center","end","between","around","evenly"]},wrap:{control:"boolean"}}},a={args:{direction:"vertical",gap:"md"}},s={args:{direction:"horizontal",gap:"md"}},o={args:{gap:"none"}},n={args:{gap:"xs"}},t={args:{gap:"sm"}},c={args:{gap:"md"}},p={args:{gap:"lg"}},i={args:{gap:"xl"}},m={args:{gap:"2xl"}},d={args:{direction:"horizontal",align:"center"}},g={args:{direction:"horizontal",justify:"between"}},l={args:{direction:"horizontal",wrap:!0,gap:"sm",children:Array.from({length:8}).map((er,e)=>r.jsxs("div",{className:"bg-primary/20 rounded p-3 text-sm",children:["Item ",e+1]},e))}},u={args:{as:"nav",direction:"horizontal",gap:"sm"}};var h,S,y;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    direction: "vertical",
    gap: "md"
  }
}`,...(y=(S=a.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var f,v,G;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    direction: "horizontal",
    gap: "md"
  }
}`,...(G=(v=s.parameters)==null?void 0:v.docs)==null?void 0:G.source}}};var z,N,j;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    gap: "none"
  }
}`,...(j=(N=o.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var b,w,k;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    gap: "xs"
  }
}`,...(k=(w=n.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var A,I,_;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    gap: "sm"
  }
}`,...(_=(I=t.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var X,C,E;c.parameters={...c.parameters,docs:{...(X=c.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    gap: "md"
  }
}`,...(E=(C=c.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var L,B,H;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    gap: "lg"
  }
}`,...(H=(B=p.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var J,M,R;i.parameters={...i.parameters,docs:{...(J=i.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    gap: "xl"
  }
}`,...(R=(M=i.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var V,W,F;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    gap: "2xl"
  }
}`,...(F=(W=m.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var O,T,q;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    direction: "horizontal",
    align: "center"
  }
}`,...(q=(T=d.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var D,K,P;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    direction: "horizontal",
    justify: "between"
  }
}`,...(P=(K=g.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};var Q,U,Y;l.parameters={...l.parameters,docs:{...(Q=l.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    direction: "horizontal",
    wrap: true,
    gap: "sm",
    children: Array.from({
      length: 8
    }).map((_, i) => <div key={i} className="bg-primary/20 rounded p-3 text-sm">Item {i + 1}</div>)
  }
}`,...(Y=(U=l.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var Z,$,rr;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    as: "nav",
    direction: "horizontal",
    gap: "sm"
  }
}`,...(rr=($=u.parameters)==null?void 0:$.docs)==null?void 0:rr.source}}};const Gr=["Vertical","Horizontal","GapNone","GapXs","GapSm","GapMd","GapLg","GapXl","Gap2xl","AlignCenter","JustifyBetween","Wrapped","AsNav"];export{d as AlignCenter,u as AsNav,m as Gap2xl,p as GapLg,c as GapMd,o as GapNone,t as GapSm,i as GapXl,n as GapXs,s as Horizontal,g as JustifyBetween,a as Vertical,l as Wrapped,Gr as __namedExportsOrder,vr as default};
