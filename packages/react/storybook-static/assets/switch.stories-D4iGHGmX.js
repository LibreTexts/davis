import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as a,R as m}from"./index-ZH-6pyQh.js";import{c as L}from"./clsx-B-dksMZM.js";import{Y as Fe,K as ue,p as Ve,o as y,$ as Ge,c as Oe,n as Re,V as Ie}from"./render-D3e-BGhm.js";import{w as _e}from"./use-active-press-Bj0hdp5d.js";import{l as Ke,b as He,j as Me,g as We}from"./form-fields-BasE4tNS.js";import{e as Ae}from"./use-resolve-button-type-BttAuRU2.js";import{m as Ue,y as Be,o as G}from"./keyboard-D6fFT7n5.js";import{a as Je}from"./disabled-DXzavEEa.js";import{Z as Xe,V as Ye,u as Ze,N as Qe}from"./label-CWNhmM9e.js";import{s as er}from"./bugs-dzwh2ro-.js";import{M as rr,H as sr,w as ar}from"./description-CYuhol84.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BP-xEy0R.js";import"./index-DVyBTwwr.js";import"./hidden-BV378ZHv.js";let P=a.createContext(null);P.displayName="GroupContext";let tr=a.Fragment;function nr(e){var s;let[r,c]=a.useState(null),[p,f]=Ye(),[h,t]=sr(),l=a.useMemo(()=>({switch:r,setSwitch:c}),[r,c]),i={},u=e,d=ue();return m.createElement(t,{name:"Switch.Description",value:h},m.createElement(f,{name:"Switch.Label",value:p,props:{htmlFor:(s=l.switch)==null?void 0:s.id,onClick(v){r&&(Ue(v.currentTarget)&&v.preventDefault(),r.click(),r.focus({preventScroll:!0}))}}},m.createElement(P.Provider,{value:l},d({ourProps:i,theirProps:u,slot:{},defaultTag:tr,name:"Switch.Group"}))))}let or="button";function cr(e,s){var r;let c=a.useId(),p=Ze(),f=Je(),{id:h=p||`headlessui-switch-${c}`,disabled:t=f||!1,checked:l,defaultChecked:i,onChange:u,name:d,value:v,form:me,autoFocus:z=!1,...pe}=e,q=a.useContext(P),[fe,he]=a.useState(null),ge=a.useRef(null),be=Be(ge,s,q===null?null:q.setSwitch,he),g=Ke(i),[x,b]=He(l,u,g??!1),ke=Ve(),[ve,F]=a.useState(!1),V=y(()=>{F(!0),b==null||b(!x),ke.nextFrame(()=>{F(!1)})}),xe=y(n=>{if(er(n.currentTarget))return n.preventDefault();n.preventDefault(),V()}),ye=y(n=>{n.key===G.Space?(n.preventDefault(),V()):n.key===G.Enter&&We(n.currentTarget)}),Se=y(n=>n.preventDefault()),we=Qe(),Ce=ar(),{isFocusVisible:Te,focusProps:$e}=Ge({autoFocus:z}),{isHovered:De,hoverProps:je}=Oe({isDisabled:t}),{pressed:Ee,pressProps:Ne}=_e({disabled:t}),ze=Re({checked:x,disabled:t,hover:De,focus:Te,active:Ee,autofocus:z,changing:ve}),Le=Ie({id:h,ref:be,role:"switch",type:Ae(e,fe),tabIndex:e.tabIndex===-1?0:(r=e.tabIndex)!=null?r:0,"aria-checked":x,"aria-labelledby":we,"aria-describedby":Ce,disabled:t||void 0,autoFocus:z,onClick:xe,onKeyUp:ye,onKeyPress:Se},$e,je,Ne),Pe=a.useCallback(()=>{if(g!==void 0)return b==null?void 0:b(g)},[b,g]),qe=ue();return m.createElement(m.Fragment,null,d!=null&&m.createElement(Me,{disabled:t,data:{[d]:v||"on"},overrides:{type:"checkbox",checked:x},form:me,onReset:Pe}),qe({ourProps:Le,theirProps:pe,slot:ze,defaultTag:or,name:"Switch"}))}let lr=Fe(cr),ir=nr,dr=Xe,ur=rr,mr=Object.assign(lr,{Group:ir,Label:dr,Description:ur});const pr={sm:{track:"h-5 w-9",thumb:"h-4 w-4",thumbTranslate:"translate-x-4"},md:{track:"h-6 w-11",thumb:"h-5 w-5",thumbTranslate:"translate-x-5"},lg:{track:"h-7 w-14",thumb:"h-6 w-6",thumbTranslate:"translate-x-7"}};function k({name:e,label:s,description:r,checked:c,onChange:p,disabled:f=!1,size:h="md",labelPosition:t="right",className:l}){const i=pr[h],u=o.jsxs(mr,{...e!==void 0?{name:e}:{},checked:c,onChange:p,disabled:f,className:L("relative inline-flex shrink-0 cursor-pointer rounded-full border-2 border-transparent","transition-colors duration-200 ease-in-out","focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2","disabled:cursor-not-allowed disabled:opacity-50",i.track,c?"bg-primary":"bg-gray-200"),children:[o.jsx("span",{className:"sr-only",children:s}),o.jsx("span",{"aria-hidden":"true",className:L("pointer-events-none inline-block rounded-full bg-white shadow-lg ring-0","transform transition duration-200 ease-in-out",i.thumb,c?i.thumbTranslate:"translate-x-0")})]});if(!s)return o.jsx("div",{className:l,children:u});const d=o.jsxs("div",{className:t==="left"?"mr-3":"ml-3",children:[o.jsx("span",{className:"text-sm font-medium text-gray-900",children:s}),r&&o.jsx("p",{className:"text-sm text-gray-500",children:r})]});return o.jsxs("div",{className:L("flex items-center",l),children:[t==="left"&&d,u,t==="right"&&d]})}k.displayName="Switch";k.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{name:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},checked:{required:!0,tsType:{name:"boolean"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},labelPosition:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"right"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const Nr={title:"Components/Switch",component:k,args:{label:"Enable notifications"},argTypes:{size:{control:"select",options:["sm","md","lg"]},labelPosition:{control:"select",options:["left","right"]}},render:e=>{const[s,r]=a.useState(e.checked??!1);return o.jsx(k,{...e,checked:s,onChange:r})}},S={args:{checked:!1}},w={args:{checked:!0}},C={args:{checked:!1,label:"Enable notifications",description:"Get notified when someone mentions you."}},T={args:{checked:!1,labelPosition:"left"}},$={args:{checked:!1,size:"sm"}},D={args:{checked:!1,size:"lg"}},j={args:{checked:!1,disabled:!0}},E={args:{checked:!0,disabled:!0}},N={render:()=>{const[e,s]=a.useState(!1);return o.jsx(k,{checked:e,onChange:s})},args:{}};var O,R,I;S.parameters={...S.parameters,docs:{...(O=S.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    checked: false
  }
}`,...(I=(R=S.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var _,K,H;w.parameters={...w.parameters,docs:{...(_=w.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...(H=(K=w.parameters)==null?void 0:K.docs)==null?void 0:H.source}}};var M,W,A;C.parameters={...C.parameters,docs:{...(M=C.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    checked: false,
    label: "Enable notifications",
    description: "Get notified when someone mentions you."
  }
}`,...(A=(W=C.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var U,B,J;T.parameters={...T.parameters,docs:{...(U=T.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    checked: false,
    labelPosition: "left"
  }
}`,...(J=(B=T.parameters)==null?void 0:B.docs)==null?void 0:J.source}}};var X,Y,Z;$.parameters={...$.parameters,docs:{...(X=$.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    checked: false,
    size: "sm"
  }
}`,...(Z=(Y=$.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var Q,ee,re;D.parameters={...D.parameters,docs:{...(Q=D.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    checked: false,
    size: "lg"
  }
}`,...(re=(ee=D.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var se,ae,te;j.parameters={...j.parameters,docs:{...(se=j.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: true
  }
}`,...(te=(ae=j.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var ne,oe,ce;E.parameters={...E.parameters,docs:{...(ne=E.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: true
  }
}`,...(ce=(oe=E.parameters)==null?void 0:oe.docs)==null?void 0:ce.source}}};var le,ie,de;N.parameters={...N.parameters,docs:{...(le=N.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Switch checked={checked} onChange={setChecked} />;
  },
  args: {}
}`,...(de=(ie=N.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};const zr=["Default","Checked","WithDescription","LabelLeft","SmallSize","LargeSize","DisabledOff","DisabledOn","NoLabel"];export{w as Checked,S as Default,j as DisabledOff,E as DisabledOn,T as LabelLeft,D as LargeSize,N as NoLabel,$ as SmallSize,C as WithDescription,zr as __namedExportsOrder,Nr as default};
