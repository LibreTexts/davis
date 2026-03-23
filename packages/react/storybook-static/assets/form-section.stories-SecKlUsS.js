import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as N}from"./clsx-B-dksMZM.js";import"./index-ZH-6pyQh.js";import{m as C}from"./variants-CIz8xjKx.js";import{I as r}from"./input-CZwUJk3H.js";import{C as o}from"./checkbox-olB5DsDL.js";import"./_commonjsHelpers-CqkleIqs.js";import"./render-D3e-BGhm.js";import"./use-active-press-Bj0hdp5d.js";import"./form-fields-BasE4tNS.js";import"./index-BP-xEy0R.js";import"./index-DVyBTwwr.js";import"./hidden-BV378ZHv.js";import"./disabled-DXzavEEa.js";import"./label-CWNhmM9e.js";import"./keyboard-D6fFT7n5.js";import"./bugs-dzwh2ro-.js";import"./description-CYuhol84.js";import"./field-g0JpwZqn.js";function t({title:h,description:a,children:S,className:j}){const{root:F,legend:g,description:y,content:I}=C();return e.jsxs("fieldset",{className:N(F(),j),children:[e.jsx("legend",{className:g(),children:h}),a&&e.jsx("p",{className:y(),children:a}),e.jsx("div",{className:I(),children:S})]})}t.displayName="FormSection";t.__docgenInfo={description:"",methods:[],displayName:"FormSection",props:{title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const H={title:"Forms/FormSection",component:t,tags:["autodocs"]},i={render:()=>e.jsxs(t,{title:"Personal Information",children:[e.jsx(r,{name:"first-name",label:"First name"}),e.jsx(r,{name:"last-name",label:"Last name"}),e.jsx(r,{name:"email",label:"Email address",type:"email"})]})},n={render:()=>e.jsxs(t,{title:"Notification Preferences",description:"Choose how and when you'd like to be notified.",children:[e.jsx(o,{name:"email-notif",label:"Email notifications"}),e.jsx(o,{name:"sms-notif",label:"SMS notifications"})]})},s={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs(t,{title:"Personal Information",children:[e.jsx(r,{name:"name",label:"Full name"}),e.jsx(r,{name:"email",label:"Email",type:"email"})]}),e.jsxs(t,{title:"Address",description:"Your billing or shipping address.",children:[e.jsx(r,{name:"street",label:"Street address"}),e.jsx(r,{name:"city",label:"City"})]})]})};var m,l,c;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <FormSection title="Personal Information">\r
      <Input name="first-name" label="First name" />\r
      <Input name="last-name" label="Last name" />\r
      <Input name="email" label="Email address" type="email" />\r
    </FormSection>
}`,...(c=(l=i.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var p,d,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <FormSection title="Notification Preferences" description="Choose how and when you'd like to be notified.">\r
      <Checkbox name="email-notif" label="Email notifications" />\r
      <Checkbox name="sms-notif" label="SMS notifications" />\r
    </FormSection>
}`,...(u=(d=n.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var f,x,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">\r
      <FormSection title="Personal Information">\r
        <Input name="name" label="Full name" />\r
        <Input name="email" label="Email" type="email" />\r
      </FormSection>\r
      <FormSection title="Address" description="Your billing or shipping address.">\r
        <Input name="street" label="Street address" />\r
        <Input name="city" label="City" />\r
      </FormSection>\r
    </div>
}`,...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const J=["Default","WithDescription","MultipleGroups"];export{i as Default,s as MultipleGroups,n as WithDescription,J as __namedExportsOrder,H as default};
