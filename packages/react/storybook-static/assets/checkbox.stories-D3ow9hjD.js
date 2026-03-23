import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as ee}from"./index-ZH-6pyQh.js";import{C as h}from"./checkbox-olB5DsDL.js";import"./_commonjsHelpers-CqkleIqs.js";import"./render-D3e-BGhm.js";import"./use-active-press-Bj0hdp5d.js";import"./form-fields-BasE4tNS.js";import"./index-BP-xEy0R.js";import"./index-DVyBTwwr.js";import"./hidden-BV378ZHv.js";import"./disabled-DXzavEEa.js";import"./label-CWNhmM9e.js";import"./keyboard-D6fFT7n5.js";import"./bugs-dzwh2ro-.js";import"./description-CYuhol84.js";import"./field-g0JpwZqn.js";import"./clsx-B-dksMZM.js";const be={title:"Components/Checkbox",component:h,args:{name:"terms",label:"I agree to the terms and conditions"},argTypes:{variant:{control:"select",options:["default","error"]},size:{control:"select",options:["sm","md","lg"]}}},s={},t={args:{defaultChecked:!0}},o={args:{label:"Marketing emails",description:"Receive emails about new products, features, and more."}},re=["Option A","Option B","Option C"],c={render:()=>{const[e,k]=ee.useState([!1,!1,!1]),C=e.every(Boolean),Y=e.some(Boolean)&&!C;return r.jsxs("div",{className:"flex flex-col gap-2",children:[r.jsx(h,{name:"select-all",label:"Select all",checked:C,indeterminate:Y,onChange:a=>k(e.map(()=>a))}),r.jsx("div",{className:"ml-7 flex flex-col gap-2",children:re.map((a,g)=>r.jsx(h,{name:`item-${g}`,label:a,checked:e[g]??!1,onChange:Z=>{const f=[...e];f[g]=Z,k(f)}},a))})]})},args:{}},n={args:{error:!0,label:"I agree to the terms and conditions"}},d={args:{required:!0}},i={args:{disabled:!0}},l={args:{disabled:!0,defaultChecked:!0}},m={args:{size:"sm"}},p={args:{size:"lg"}},u={render:()=>r.jsx(h,{name:"terms"}),args:{}};var x,b,S;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(S=(b=s.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var v,D,I;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...(I=(D=t.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var z,j,E;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: "Marketing emails",
    description: "Receive emails about new products, features, and more."
  }
}`,...(E=(j=o.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var W,B,R;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState([false, false, false]);
    const allChecked = checked.every(Boolean);
    const someChecked = checked.some(Boolean);
    const isIndeterminate = someChecked && !allChecked;
    return <div className="flex flex-col gap-2">\r
        <Checkbox name="select-all" label="Select all" checked={allChecked} indeterminate={isIndeterminate} onChange={val => setChecked(checked.map(() => val))} />\r
        <div className="ml-7 flex flex-col gap-2">\r
          {ITEMS.map((item, i) => <Checkbox key={item} name={\`item-\${i}\`} label={item} checked={checked[i] ?? false} onChange={val => {
          const next = [...checked];
          next[i] = val;
          setChecked(next);
        }} />)}\r
        </div>\r
      </div>;
  },
  args: {}
}`,...(R=(B=c.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var q,y,L;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    error: true,
    label: "I agree to the terms and conditions"
  }
}`,...(L=(y=n.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};var M,N,O;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    required: true
  }
}`,...(O=(N=d.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var T,w,U;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(U=(w=i.parameters)==null?void 0:w.docs)==null?void 0:U.source}}};var _,$,A;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultChecked: true
  }
}`,...(A=($=l.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};var F,G,H;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    size: "sm"
  }
}`,...(H=(G=m.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,P;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    size: "lg"
  }
}`,...(P=(K=p.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};var Q,V,X;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <Checkbox name="terms" />,
  args: {}
}`,...(X=(V=u.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};const Se=["Default","DefaultChecked","WithDescription","Indeterminate","WithError","Required","DisabledUnchecked","DisabledChecked","SmallSize","LargeSize","WithoutLabel"];export{s as Default,t as DefaultChecked,l as DisabledChecked,i as DisabledUnchecked,c as Indeterminate,p as LargeSize,d as Required,m as SmallSize,o as WithDescription,n as WithError,u as WithoutLabel,Se as __namedExportsOrder,be as default};
