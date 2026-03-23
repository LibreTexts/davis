import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as F}from"./clsx-B-dksMZM.js";import{A as M}from"./variants-CIz8xjKx.js";function r({steps:a,currentStep:p,orientation:n="horizontal",size:l="md",className:i}){const{root:c}=M({orientation:n,size:l});return e.jsx("nav",{"aria-label":"Progress",className:F(c(),i),children:e.jsx("ol",{className:c(),children:a.map((g,s)=>{const o=s<p?"complete":s===p?"current":"upcoming",h=s===a.length-1;return e.jsx(D,{step:g,index:s,status:o,isLast:h,orientation:n,size:l},s)})})})}r.displayName="Stepper";function D({step:a,index:p,status:n,isLast:l,orientation:i,size:c}){const{step:g,stepContent:s,connector:o,circle:h,label:L,description:B}=M({orientation:i,size:c,status:n});return e.jsxs(e.Fragment,{children:[e.jsxs("li",{className:F(g()),"aria-current":n==="current"?"step":void 0,children:[!l&&i==="horizontal"&&e.jsx("div",{"aria-hidden":"true",className:o()}),e.jsx("div",{className:h(),children:n==="complete"?e.jsx(O,{}):e.jsx("span",{children:p+1})}),e.jsxs("div",{className:s(),children:[e.jsx("span",{className:L(),children:a.label}),a.description&&e.jsx("span",{className:B(),children:a.description})]})]}),!l&&i==="vertical"&&e.jsx("li",{"aria-hidden":"true",className:o()})]})}function O(){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"size-4","aria-hidden":"true",children:e.jsx("path",{fillRule:"evenodd",d:"M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z",clipRule:"evenodd"})})}r.__docgenInfo={description:"",methods:[],displayName:"Stepper",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
  label: string;\r
  description?: string;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!1}}]}}],raw:"StepItem[]"},description:""},currentStep:{required:!0,tsType:{name:"number"},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const J={title:"Navigation/Stepper",component:r,tags:["autodocs"]},t=[{label:"Account Details",description:"Name and email"},{label:"Personal Info",description:"Address and phone"},{label:"Review",description:"Confirm your details"},{label:"Complete",description:"All done!"}],d={render:()=>e.jsx(r,{steps:t,currentStep:0})},m={render:()=>e.jsx(r,{steps:t,currentStep:2})},u={render:()=>e.jsx(r,{steps:t,currentStep:3})},S={render:()=>e.jsx("div",{className:"w-64",children:e.jsx(r,{steps:t,currentStep:1,orientation:"vertical"})})},v={render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsx(r,{steps:t.slice(0,3),currentStep:1,size:"sm"}),e.jsx(r,{steps:t.slice(0,3),currentStep:1,size:"md"}),e.jsx(r,{steps:t.slice(0,3),currentStep:1,size:"lg"})]})},x={render:()=>e.jsx(r,{steps:[{label:"Cart"},{label:"Shipping"},{label:"Payment"},{label:"Confirm"}],currentStep:1})};var j,f,b;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Stepper steps={STEPS} currentStep={0} />
}`,...(b=(f=d.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var N,y,z;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <Stepper steps={STEPS} currentStep={2} />
}`,...(z=(y=m.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var C,T,w;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Stepper steps={STEPS} currentStep={3} />
}`,...(w=(T=u.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var P,E,q;S.parameters={...S.parameters,docs:{...(P=S.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div className="w-64">\r
      <Stepper steps={STEPS} currentStep={1} orientation="vertical" />\r
    </div>
}`,...(q=(E=S.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var A,I,R;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">\r
      <Stepper steps={STEPS.slice(0, 3)} currentStep={1} size="sm" />\r
      <Stepper steps={STEPS.slice(0, 3)} currentStep={1} size="md" />\r
      <Stepper steps={STEPS.slice(0, 3)} currentStep={1} size="lg" />\r
    </div>
}`,...(R=(I=v.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var V,_,k;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <Stepper steps={[{
    label: "Cart"
  }, {
    label: "Shipping"
  }, {
    label: "Payment"
  }, {
    label: "Confirm"
  }]} currentStep={1} />
}`,...(k=(_=x.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};const K=["FirstStep","MiddleStep","LastStep","Vertical","Sizes","SimpleSteps"];export{d as FirstStep,u as LastStep,m as MiddleStep,x as SimpleSteps,v as Sizes,S as Vertical,K as __namedExportsOrder,J as default};
