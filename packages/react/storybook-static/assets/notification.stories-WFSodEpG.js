import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{c as N}from"./clsx-B-dksMZM.js";import{r as s}from"./index-ZH-6pyQh.js";import{M as H}from"./variants-CIz8xjKx.js";import{u as X}from"./davis-context-CArXUcbY.js";import{B as j}from"./button-BUCKCgZW.js";import"./_commonjsHelpers-CqkleIqs.js";import"./render-D3e-BGhm.js";import"./use-active-press-Bj0hdp5d.js";import"./disabled-DXzavEEa.js";const G={"top-right":"top-4 right-4 flex-col items-end","top-center":"top-4 left-1/2 -translate-x-1/2 flex-col items-center","top-left":"top-4 left-4 flex-col items-start","bottom-right":"bottom-4 right-4 flex-col-reverse items-end","bottom-center":"bottom-4 left-1/2 -translate-x-1/2 flex-col-reverse items-center","bottom-left":"bottom-4 left-4 flex-col-reverse items-start"};function J({className:e}){return t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:e,"aria-hidden":"true",children:t.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z",clipRule:"evenodd"})})}function K({className:e}){return t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:e,"aria-hidden":"true",children:t.jsx("path",{fillRule:"evenodd",d:"M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z",clipRule:"evenodd"})})}function Q({className:e}){return t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:e,"aria-hidden":"true",children:t.jsx("path",{fillRule:"evenodd",d:"M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495ZM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5Zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",clipRule:"evenodd"})})}function $({className:e}){return t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:e,"aria-hidden":"true",children:t.jsx("path",{fillRule:"evenodd",d:"M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z",clipRule:"evenodd"})})}function ee({className:e}){return t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:e,"aria-hidden":"true",children:t.jsx("path",{d:"M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"})})}const te={success:J,error:K,warning:Q,info:$};function T({notification:e,onRemove:r}){const[l,a]=s.useState(!1),[i,m]=s.useState(!1),n=H({variant:e.variant});s.useEffect(()=>{const c=requestAnimationFrame(()=>a(!0));return()=>cancelAnimationFrame(c)},[]),s.useEffect(()=>{if(e.duration<=0)return;const c=setTimeout(()=>m(!0),e.duration);return()=>clearTimeout(c)},[e.duration]),s.useEffect(()=>{if(!i)return;const c=setTimeout(()=>r(e.id),300);return()=>clearTimeout(c)},[i,e.id,r]);const g=s.useCallback(()=>m(!0),[]),p=l&&!i,o=te[e.variant],d=e.action;return t.jsx("div",{role:"status",className:N(n.container(),"transition-all duration-300 ease-in-out",p?"opacity-100 translate-y-0":"opacity-0 translate-y-2 pointer-events-none"),children:t.jsxs("div",{className:n.body(),children:[t.jsx(o,{className:n.icon()}),t.jsxs("div",{className:n.content(),children:[e.title&&t.jsx("p",{className:n.title(),children:e.title}),t.jsx("p",{className:N(n.message(),e.title&&"mt-0.5"),children:e.message}),d&&t.jsx("div",{className:n.action(),children:t.jsx("button",{type:"button",onClick:()=>{d.onClick(),g()},className:"text-sm font-medium text-primary hover:underline focus:outline-none focus:underline",children:d.label})})]}),t.jsx("button",{type:"button",onClick:g,"aria-label":"Dismiss notification",className:n.closeBtn(),children:t.jsx(ee,{className:"size-4"})})]})})}T.displayName="Toast";function y({notifications:e,onRemove:r,position:l}){return t.jsx("div",{"aria-live":"polite","aria-atomic":"false",className:N("fixed z-[9999] flex gap-3 pointer-events-none",G[l]),children:e.map(a=>t.jsx(T,{notification:a,onRemove:r},a.id))})}y.displayName="ToastContainer";T.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{notification:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  id: string;
  message: string;
  title?: string;
  variant: NotificationVariant;
  /** Duration in ms. 0 = persistent (no auto-dismiss). */
  duration: number;
  action?: NotificationAction;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"message",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!1}},{key:"variant",value:{name:"union",raw:'"success" | "error" | "warning" | "info"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"info"'}],required:!0}},{key:"duration",value:{name:"number",required:!0},description:"Duration in ms. 0 = persistent (no auto-dismiss)."},{key:"action",value:{name:"signature",type:"object",raw:`{
  label: string;
  onClick: () => void;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]},required:!1}}]}},description:""},onRemove:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}}};y.__docgenInfo={description:"",methods:[],displayName:"ToastContainer",props:{notifications:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  message: string;
  title?: string;
  variant: NotificationVariant;
  /** Duration in ms. 0 = persistent (no auto-dismiss). */
  duration: number;
  action?: NotificationAction;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"message",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!1}},{key:"variant",value:{name:"union",raw:'"success" | "error" | "warning" | "info"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"info"'}],required:!0}},{key:"duration",value:{name:"number",required:!0},description:"Duration in ms. 0 = persistent (no auto-dismiss)."},{key:"action",value:{name:"signature",type:"object",raw:`{
  label: string;
  onClick: () => void;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}}]},required:!1}}]}}],raw:"Notification[]"},description:""},onRemove:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},position:{required:!0,tsType:{name:"union",raw:`| "top-right"
| "top-center"
| "top-left"
| "bottom-right"
| "bottom-center"
| "bottom-left"`,elements:[{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-center"'},{name:"literal",value:'"top-left"'},{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-center"'},{name:"literal",value:'"bottom-left"'}]},description:""}}};const Y=s.createContext(void 0);function C(){const e=s.useContext(Y);if(!e)throw new Error("useNotifications must be used within a NotificationsProvider");return e}const re=5e3;function k({children:e,position:r="top-right"}){const{standalone:l}=X(),[a,i]=s.useState([]),m=s.useCallback(o=>{const d=crypto.randomUUID(),c={id:d,message:o.message,variant:o.variant,duration:o.duration??re,...o.title!==void 0?{title:o.title}:{},...o.action!==void 0?{action:o.action}:{}};return i(z=>[...z,c]),d},[]),n=s.useCallback(o=>{i(d=>d.filter(c=>c.id!==o))},[]),g=s.useCallback(()=>{i([])},[]),p=t.jsx(y,{notifications:a,onRemove:n,position:r});return t.jsxs(Y.Provider,{value:{notifications:a,addNotification:m,removeNotification:n,removeAllNotifications:g},children:[e,l?t.jsx("div",{className:"davis",children:p}):p]})}k.__docgenInfo={description:"",methods:[],displayName:"NotificationsProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},position:{required:!1,tsType:{name:"union",raw:`| "top-right"
| "top-center"
| "top-left"
| "bottom-right"
| "bottom-center"
| "bottom-left"`,elements:[{name:"literal",value:'"top-right"'},{name:"literal",value:'"top-center"'},{name:"literal",value:'"top-left"'},{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"bottom-center"'},{name:"literal",value:'"bottom-left"'}]},description:'Position of the toast stack. Default: "top-right"',defaultValue:{value:'"top-right"',computed:!1}}}};const xe={title:"Components/Notification",component:y,parameters:{layout:"fullscreen"},decorators:[e=>t.jsx(k,{children:t.jsx("div",{className:"p-8",children:t.jsx(e,{})})})]};function ne({buttonLabel:e,variant:r,message:l,title:a}){const{addNotification:i}=C(),m=r==="error"?"destructive":r==="success"?"primary":r==="warning"?"warning":"outline";return t.jsx(j,{variant:m,onClick:()=>i({variant:r,message:l,...a?{title:a}:{}}),children:e})}const f={render:e=>t.jsx(ne,{...e}),args:{buttonLabel:"Show notification",variant:"success",message:"Changes saved successfully.",title:""},argTypes:{buttonLabel:{control:"text",description:"Label shown on the trigger button"},variant:{control:"select",options:["success","error","warning","info"]},message:{control:"text",description:"Notification message body"},title:{control:"text",description:"Optional notification title (leave empty to omit)"}}};function u({variant:e,label:r,title:l,message:a,duration:i,hasAction:m}){const{addNotification:n}=C();return t.jsx(j,{variant:e==="error"?"destructive":e==="success"?"primary":e==="warning"?"warning":"outline",onClick:()=>n({variant:e,message:a,...l!==void 0?{title:l}:{},...i!==void 0?{duration:i}:{},...m?{action:{label:"Undo",onClick:()=>console.log("Undo clicked")}}:{}}),children:r??e.charAt(0).toUpperCase()+e.slice(1)})}const v={render:()=>t.jsxs("div",{className:"flex flex-wrap gap-3",children:[t.jsx(u,{variant:"success",label:"Success",message:"Changes saved successfully."}),t.jsx(u,{variant:"error",label:"Error",message:"Something went wrong. Please try again."}),t.jsx(u,{variant:"warning",label:"Support",message:"Your session will expire in 5 minutes."}),t.jsx(u,{variant:"info",label:"Info",message:"A new version is available."})]}),args:{}},x={render:()=>t.jsxs("div",{className:"flex flex-wrap gap-3",children:[t.jsx(u,{variant:"success",title:"File uploaded",message:"report-2026.pdf has been uploaded."}),t.jsx(u,{variant:"error",title:"Upload failed",message:"The file exceeds the 10 MB limit."})]}),args:{}},h={render:()=>t.jsxs("div",{className:"flex flex-wrap gap-3",children:[t.jsx(u,{variant:"success",title:"Message sent",message:"Your message was sent.",hasAction:!0}),t.jsx(u,{variant:"error",title:"Item deleted",message:"The item has been removed.",hasAction:!0})]}),args:{}},w={render:()=>t.jsx("div",{className:"flex flex-wrap gap-3",children:t.jsx(u,{variant:"info",title:"Maintenance window",message:"The system will be down for maintenance from 2–4 AM UTC.",duration:0})}),args:{}},ae=["top-right","top-center","top-left","bottom-right","bottom-center","bottom-left"];function ie({position:e}){return t.jsx(k,{position:e,children:t.jsx(se,{position:e})})}function se({position:e}){const{addNotification:r}=C();return t.jsx(j,{variant:"outline",size:"sm",onClick:()=>r({variant:"info",message:`Position: ${e}`}),children:e})}const b={render:()=>t.jsx("div",{className:"flex flex-wrap gap-3",children:ae.map(e=>t.jsx(ie,{position:e},e))}),args:{}};var A,S,q;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => <DefaultDemo {...args} />,
  args: {
    buttonLabel: "Show notification",
    variant: "success",
    message: "Changes saved successfully.",
    title: ""
  },
  argTypes: {
    buttonLabel: {
      control: "text",
      description: "Label shown on the trigger button"
    },
    variant: {
      control: "select",
      options: ["success", "error", "warning", "info"]
    },
    message: {
      control: "text",
      description: "Notification message body"
    },
    title: {
      control: "text",
      description: "Optional notification title (leave empty to omit)"
    }
  }
}`,...(q=(S=f.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};var I,B,M;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-3">\r
      <TriggerButton variant="success" label="Success" message="Changes saved successfully." />\r
      <TriggerButton variant="error" label="Error" message="Something went wrong. Please try again." />\r
      <TriggerButton variant="warning" label="Support" message="Your session will expire in 5 minutes." />\r
      <TriggerButton variant="info" label="Info" message="A new version is available." />\r
    </div>,
  args: {}
}`,...(M=(B=v.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var P,D,L;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-3">\r
      <TriggerButton variant="success" title="File uploaded" message="report-2026.pdf has been uploaded." />\r
      <TriggerButton variant="error" title="Upload failed" message="The file exceeds the 10 MB limit." />\r
    </div>,
  args: {}
}`,...(L=(D=x.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var R,E,O;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-3">\r
      <TriggerButton variant="success" title="Message sent" message="Your message was sent." hasAction />\r
      <TriggerButton variant="error" title="Item deleted" message="The item has been removed." hasAction />\r
    </div>,
  args: {}
}`,...(O=(E=h.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var U,Z,_;w.parameters={...w.parameters,docs:{...(U=w.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-3">\r
      <TriggerButton variant="info" title="Maintenance window" message="The system will be down for maintenance from 2–4 AM UTC." duration={0} />\r
    </div>,
  args: {}
}`,...(_=(Z=w.parameters)==null?void 0:Z.docs)==null?void 0:_.source}}};var V,F,W;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-3">\r
      {POSITIONS.map(pos => <PositionTrigger key={pos} position={pos} />)}\r
    </div>,
  args: {}
}`,...(W=(F=b.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};const he=["Default","AllVariants","WithTitle","WithAction","Persistent","AllPositions"];export{b as AllPositions,v as AllVariants,f as Default,w as Persistent,h as WithAction,x as WithTitle,he as __namedExportsOrder,xe as default};
