import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as v}from"./clsx-B-dksMZM.js";import{r as i}from"./index-ZH-6pyQh.js";import{H as qe}from"./variants-CIz8xjKx.js";import"./_commonjsHelpers-CqkleIqs.js";const S=i.forwardRef(({className:de,label:j,name:r,labelClassName:ue,textareaClassName:me,error:T,required:pe,variant:ge,size:he,helperText:C,errorMessage:N,autoResize:s=!1,showCharacterCount:fe=!1,rows:xe=4,maxLength:y,defaultValue:t,onChange:w,...z},Te)=>{var R;const b=T&&N,W=!b&&C,ye=i.useRef(null),o=Te||ye,q=i.useCallback(()=>{const a=o.current;a&&s&&(a.style.height="auto",a.style.height=`${a.scrollHeight}px`)},[s,o]);i.useEffect(()=>{s&&q()},[s,q,t]);const we=a=>{s&&q(),w==null||w(a)},be=((R=o.current)==null?void 0:R.value.length)??(typeof t=="string"?t.length:0);return e.jsxs("div",{className:v(de),children:[e.jsxs("label",{htmlFor:r,className:v("block text-base/6 font-medium text-gray-700",ue),children:[j,pe&&e.jsx("span",{className:"text-danger ml-0.5",children:"*"})]}),e.jsx("div",{className:"mt-1.5",children:e.jsx("textarea",{ref:o,id:r,name:r,rows:xe,maxLength:y,defaultValue:t,"aria-invalid":T?"true":void 0,"aria-describedby":b?`${r}-error`:W?`${r}-helper`:void 0,placeholder:z.placeholder||j,onChange:we,className:v(qe({variant:T?"error":ge,size:he,autoResize:s}),me),...z})}),e.jsxs("div",{className:"flex justify-between mt-1.5",children:[e.jsxs("div",{children:[b&&e.jsx("p",{id:`${r}-error`,className:"text-sm text-danger",children:N}),W&&e.jsx("p",{id:`${r}-helper`,className:"text-sm text-gray-500",children:C})]}),fe&&y&&e.jsxs("p",{className:"text-sm text-gray-500",children:[be,"/",y]})]})]})});S.displayName="Textarea";S.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{variant:{required:!1,tsType:{name:"union",raw:'"default" | "error"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"error"'}]},description:""},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:""},name:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},labelClassName:{required:!1,tsType:{name:"string"},description:""},textareaClassName:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},errorMessage:{required:!1,tsType:{name:"string"},description:""},autoResize:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showCharacterCount:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},rows:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4",computed:!1}}}};const ze={title:"Components/Textarea",component:S,args:{name:"message",label:"Message",placeholder:"Enter your message..."},argTypes:{variant:{control:"select",options:["default","error"]},size:{control:"select",options:["sm","md","lg"]}}},n={},l={args:{defaultValue:"This is some default text content."}},c={args:{helperText:"Write a brief description of your issue."}},d={args:{error:!0,errorMessage:"Message is required."}},u={args:{required:!0}},m={args:{maxLength:200,showCharacterCount:!0,helperText:"Maximum 200 characters allowed."}},p={args:{autoResize:!0,rows:2,placeholder:"Start typing and the textarea will grow..."}},g={args:{size:"sm"}},h={args:{size:"lg"}},f={args:{disabled:!0,defaultValue:"This textarea is disabled."}},x={args:{rows:8,helperText:"This textarea has 8 rows."}};var E,M,D;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:"{}",...(D=(M=n.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var H,V,$;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    defaultValue: "This is some default text content."
  }
}`,...($=(V=l.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};var _,L,k;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    helperText: "Write a brief description of your issue."
  }
}`,...(k=(L=c.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var A,F,I;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    error: true,
    errorMessage: "Message is required."
  }
}`,...(I=(F=d.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var O,B,G;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    required: true
  }
}`,...(G=(B=u.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var J,K,P;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    maxLength: 200,
    showCharacterCount: true,
    helperText: "Maximum 200 characters allowed."
  }
}`,...(P=(K=m.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};var Q,U,X;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    autoResize: true,
    rows: 2,
    placeholder: "Start typing and the textarea will grow..."
  }
}`,...(X=(U=p.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    size: "sm"
  }
}`,...(ee=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,se,ae;h.parameters={...h.parameters,docs:{...(re=h.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    size: "lg"
  }
}`,...(ae=(se=h.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var te,oe,ie;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: "This textarea is disabled."
  }
}`,...(ie=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var ne,le,ce;x.parameters={...x.parameters,docs:{...(ne=x.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    rows: 8,
    helperText: "This textarea has 8 rows."
  }
}`,...(ce=(le=x.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};const We=["Default","WithDefaultValue","WithHelperText","WithError","Required","WithCharacterCount","AutoResize","SmallSize","LargeSize","Disabled","CustomRows"];export{p as AutoResize,x as CustomRows,n as Default,f as Disabled,h as LargeSize,u as Required,g as SmallSize,m as WithCharacterCount,l as WithDefaultValue,d as WithError,c as WithHelperText,We as __namedExportsOrder,ze as default};
