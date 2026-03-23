import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as V}from"./index-ZH-6pyQh.js";import{c as ye}from"./clsx-B-dksMZM.js";import{u as Pe}from"./variants-CIz8xjKx.js";import"./_commonjsHelpers-CqkleIqs.js";const a=V.forwardRef(({value:n,variant:h,size:t,label:r,showValue:y=!1,className:we,...ze},he)=>{const s=n===void 0,j=s?0:Math.min(100,Math.max(0,n)),{root:je,bar:Ve}=Pe({variant:h,size:t,indeterminate:s});return e.jsxs("div",{ref:he,className:ye("w-full",we),...ze,children:[(r||y)&&e.jsxs("div",{className:"flex justify-between items-center mb-1",children:[r&&e.jsx("span",{className:"text-sm text-gray-700",children:r}),y&&!s&&e.jsxs("span",{className:"text-sm text-gray-500",children:[j,"%"]})]}),e.jsx("div",{role:"progressbar","aria-valuenow":s?void 0:j,"aria-valuemin":0,"aria-valuemax":100,"aria-label":r,className:je(),children:e.jsx("div",{className:Ve(),style:s?void 0:{width:`${j}%`}})})]})});a.displayName="Progress";a.__docgenInfo={description:"",methods:[],displayName:"Progress",props:{value:{required:!1,tsType:{name:"number"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"default" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:""},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},showValue:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const Ee={title:"Loading/Progress",component:a,args:{value:50,label:"Loading..."},argTypes:{value:{control:"range",min:0,max:100,step:1},variant:{control:"select",options:["default","success","warning","danger"]},size:{control:"select",options:["sm","md","lg"]},showValue:{control:"boolean"}}},l={args:{value:50}},o={args:{value:0}},c={args:{value:25}},i={args:{value:75}},u={args:{value:100,variant:"success"}},m={render:()=>e.jsx(a,{label:"Loading content..."})},d={args:{value:80,variant:"success"}},p={args:{value:60,variant:"warning"}},g={args:{value:40,variant:"danger"}},v={args:{value:50,size:"sm"}},f={args:{value:50,size:"md"}},x={args:{value:50,size:"lg"}},S={args:{value:66,showValue:!0,label:"Uploading file"}},b={render:()=>{const[n,h]=V.useState(0);return V.useEffect(()=>{const t=setInterval(()=>{h(r=>r>=100?(clearInterval(t),100):r+2)},100);return()=>clearInterval(t)},[]),e.jsx(a,{value:n,label:"Processing...",showValue:!0})}},w={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(a,{value:75,variant:"default",label:"Default"}),e.jsx(a,{value:75,variant:"success",label:"Success"}),e.jsx(a,{value:75,variant:"warning",label:"Warning"}),e.jsx(a,{value:75,variant:"danger",label:"Danger"})]})},z={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(a,{value:60,size:"sm",label:"Small"}),e.jsx(a,{value:60,size:"md",label:"Medium"}),e.jsx(a,{value:60,size:"lg",label:"Large"})]})};var P,N,I;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    value: 50
  }
}`,...(I=(N=l.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var T,D,L;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    value: 0
  }
}`,...(L=(D=o.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var E,q,A;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    value: 25
  }
}`,...(A=(q=c.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var M,W,Q;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    value: 75
  }
}`,...(Q=(W=i.parameters)==null?void 0:W.docs)==null?void 0:Q.source}}};var _,C,R;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    value: 100,
    variant: "success"
  }
}`,...(R=(C=u.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var U,O,$;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <Progress label="Loading content..." />
}`,...($=(O=m.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var k,B,F;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    value: 80,
    variant: "success"
  }
}`,...(F=(B=d.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var G,H,J;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    value: 60,
    variant: "warning"
  }
}`,...(J=(H=p.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,X,Y;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    value: 40,
    variant: "danger"
  }
}`,...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    value: 50,
    size: "sm"
  }
}`,...(ae=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var re,se,ne;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    value: 50,
    size: "md"
  }
}`,...(ne=(se=f.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var te,le,oe;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    value: 50,
    size: "lg"
  }
}`,...(oe=(le=x.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var ce,ie,ue;S.parameters={...S.parameters,docs:{...(ce=S.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    value: 66,
    showValue: true,
    label: "Uploading file"
  }
}`,...(ue=(ie=S.parameters)==null?void 0:ie.docs)==null?void 0:ue.source}}};var me,de,pe;b.parameters={...b.parameters,docs:{...(me=b.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0);
    useEffect(() => {
      const id = setInterval(() => {
        setValue(v => {
          if (v >= 100) {
            clearInterval(id);
            return 100;
          }
          return v + 2;
        });
      }, 100);
      return () => clearInterval(id);
    }, []);
    return <Progress value={value} label="Processing..." showValue />;
  }
}`,...(pe=(de=b.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var ge,ve,fe;w.parameters={...w.parameters,docs:{...(ge=w.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-80">\r
      <Progress value={75} variant="default" label="Default" />\r
      <Progress value={75} variant="success" label="Success" />\r
      <Progress value={75} variant="warning" label="Warning" />\r
      <Progress value={75} variant="danger" label="Danger" />\r
    </div>
}`,...(fe=(ve=w.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};var xe,Se,be;z.parameters={...z.parameters,docs:{...(xe=z.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-80">\r
      <Progress value={60} size="sm" label="Small" />\r
      <Progress value={60} size="md" label="Medium" />\r
      <Progress value={60} size="lg" label="Large" />\r
    </div>
}`,...(be=(Se=z.parameters)==null?void 0:Se.docs)==null?void 0:be.source}}};const qe=["Default","Empty","Quarter","ThreeQuarters","Complete","Indeterminate","VariantSuccess","VariantWarning","VariantDanger","SizeSmall","SizeMedium","SizeLarge","WithValue","Animated","AllVariants","AllSizes"];export{z as AllSizes,w as AllVariants,b as Animated,u as Complete,l as Default,o as Empty,m as Indeterminate,c as Quarter,x as SizeLarge,f as SizeMedium,v as SizeSmall,i as ThreeQuarters,g as VariantDanger,d as VariantSuccess,p as VariantWarning,S as WithValue,qe as __namedExportsOrder,Ee as default};
