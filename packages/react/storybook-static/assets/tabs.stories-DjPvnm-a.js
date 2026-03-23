import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{c as M}from"./clsx-B-dksMZM.js";import{r as o,R as D}from"./index-ZH-6pyQh.js";import{Y as _,A as oe,a as ee,o as k,e as Je,u as V,t as Xe,$ as ke,c as Qe,n as G,V as Ae,K as U,s as B}from"./render-D3e-BGhm.js";import{w as Ze}from"./use-active-press-Bj0hdp5d.js";import{e as ea}from"./use-resolve-button-type-BttAuRU2.js";import{y as W,o as P}from"./keyboard-D6fFT7n5.js";import{f as aa}from"./use-is-mounted-Ctfw9wRL.js";import{f as Le,s as sa}from"./hidden-BV378ZHv.js";import{A as H,v as C,T as y,G as F}from"./focus-management-CShi9XEB.js";import{O as ae}from"./variants-CIz8xjKx.js";import"./_commonjsHelpers-CqkleIqs.js";function na({onFocus:e}){let[n,r]=o.useState(!0),t=aa();return n?D.createElement(Le,{as:"button",type:"button",features:sa.Focusable,onFocus:i=>{i.preventDefault();let l,c=50;function u(){if(c--<=0){l&&cancelAnimationFrame(l);return}if(e()){if(cancelAnimationFrame(l),!t.current)return;r(!1);return}l=requestAnimationFrame(u)}l=requestAnimationFrame(u)}}):null}const Ce=o.createContext(null);function ra(){return{groups:new Map,get(e,n){var r;let t=this.groups.get(e);t||(t=new Map,this.groups.set(e,t));let i=(r=t.get(n))!=null?r:0;t.set(n,i+1);let l=Array.from(t.keys()).indexOf(n);function c(){let u=t.get(n);u>1?t.set(n,u-1):t.delete(n)}return[l,c]}}}function ta({children:e}){let n=o.useRef(ra());return o.createElement(Ce.Provider,{value:n},e)}function De(e){let n=o.useContext(Ce);if(!n)throw new Error("You must wrap your component in a <StableCollection>");let r=o.useId(),[t,i]=n.current.get(e,r);return o.useEffect(()=>i,[]),t}var la=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(la||{}),ia=(e=>(e[e.Less=-1]="Less",e[e.Equal=0]="Equal",e[e.Greater=1]="Greater",e))(ia||{}),ca=(e=>(e[e.SetSelectedIndex=0]="SetSelectedIndex",e[e.RegisterTab=1]="RegisterTab",e[e.UnregisterTab=2]="UnregisterTab",e[e.RegisterPanel=3]="RegisterPanel",e[e.UnregisterPanel=4]="UnregisterPanel",e))(ca||{});let oa={0(e,n){var r;let t=F(e.tabs,p=>p.current),i=F(e.panels,p=>p.current),l=t.filter(p=>{var g;return!((g=p.current)!=null&&g.hasAttribute("disabled"))}),c={...e,tabs:t,panels:i};if(n.index<0||n.index>t.length-1){let p=V(Math.sign(n.index-e.selectedIndex),{[-1]:()=>1,0:()=>V(Math.sign(n.index),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0});if(l.length===0)return c;let g=V(p,{0:()=>t.indexOf(l[0]),1:()=>t.indexOf(l[l.length-1])});return{...c,selectedIndex:g===-1?e.selectedIndex:g}}let u=t.slice(0,n.index),N=[...t.slice(n.index),...u].find(p=>l.includes(p));if(!N)return c;let f=(r=t.indexOf(N))!=null?r:e.selectedIndex;return f===-1&&(f=e.selectedIndex),{...c,selectedIndex:f}},1(e,n){if(e.tabs.includes(n.tab))return e;let r=e.tabs[e.selectedIndex],t=F([...e.tabs,n.tab],l=>l.current),i=e.selectedIndex;return e.info.current.isControlled||(i=t.indexOf(r),i===-1&&(i=e.selectedIndex)),{...e,tabs:t,selectedIndex:i}},2(e,n){return{...e,tabs:e.tabs.filter(r=>r!==n.tab)}},3(e,n){return e.panels.includes(n.panel)?e:{...e,panels:F([...e.panels,n.panel],r=>r.current)}},4(e,n){return{...e,panels:e.panels.filter(r=>r!==n.panel)}}},te=o.createContext(null);te.displayName="TabsDataContext";function $(e){let n=o.useContext(te);if(n===null){let r=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,$),r}return n}let le=o.createContext(null);le.displayName="TabsActionsContext";function ie(e){let n=o.useContext(le);if(n===null){let r=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,ie),r}return n}function da(e,n){return V(n.type,oa,e,n)}let ua="div";function pa(e,n){let{defaultIndex:r=0,vertical:t=!1,manual:i=!1,onChange:l,selectedIndex:c=null,...u}=e;const N=t?"vertical":"horizontal",f=i?"manual":"auto";let p=c!==null,g=B({isControlled:p}),A=W(n),[x,m]=o.useReducer(da,{info:g,selectedIndex:c??r,tabs:[],panels:[]}),O=G({selectedIndex:x.selectedIndex}),E=B(l||(()=>{})),w=B(x.tabs),T=o.useMemo(()=>({orientation:N,activation:f,...x}),[N,f,x]),R=k(b=>(m({type:1,tab:b}),()=>m({type:2,tab:b}))),q=k(b=>(m({type:3,panel:b}),()=>m({type:4,panel:b}))),h=k(b=>{v.current!==b&&E.current(b),p||m({type:0,index:b})}),v=B(p?e.selectedIndex:x.selectedIndex),I=o.useMemo(()=>({registerTab:R,registerPanel:q,change:h}),[]);ee(()=>{m({type:0,index:c??r})},[c]),ee(()=>{if(v.current===void 0||x.tabs.length<=0)return;let b=F(x.tabs,S=>S.current);b.some((S,L)=>x.tabs[L]!==S)&&h(b.indexOf(x.tabs[v.current]))});let ne={ref:A},z=U();return D.createElement(ta,null,D.createElement(le.Provider,{value:I},D.createElement(te.Provider,{value:T},T.tabs.length<=0&&D.createElement(na,{onFocus:()=>{var b,S;for(let L of w.current)if(((b=L.current)==null?void 0:b.tabIndex)===0)return(S=L.current)==null||S.focus(),!0;return!1}}),z({ourProps:ne,theirProps:u,slot:O,defaultTag:ua,name:"Tabs"}))))}let ma="div";function ba(e,n){let{orientation:r,selectedIndex:t}=$("Tab.List"),i=W(n),l=G({selectedIndex:t}),c=e,u={ref:i,role:"tablist","aria-orientation":r};return U()({ourProps:u,theirProps:c,slot:l,defaultTag:ma,name:"Tabs.List"})}let xa="button";function Ta(e,n){var r,t;let i=o.useId(),{id:l=`headlessui-tabs-tab-${i}`,disabled:c=!1,autoFocus:u=!1,...N}=e,{orientation:f,activation:p,selectedIndex:g,tabs:A,panels:x}=$("Tab"),m=ie("Tab"),O=$("Tab"),[E,w]=o.useState(null),T=o.useRef(null),R=W(T,n,w);ee(()=>m.registerTab(T),[m,T]);let q=De("tabs"),h=A.indexOf(T);h===-1&&(h=q);let v=h===g,I=k(d=>{let j=d();if(j===H.Success&&p==="auto"){let re=Je(T.current),ce=O.tabs.findIndex(Ye=>Ye.current===re);ce!==-1&&m.change(ce)}return j}),ne=k(d=>{let j=A.map(re=>re.current).filter(Boolean);if(d.key===P.Space||d.key===P.Enter){d.preventDefault(),d.stopPropagation(),m.change(h);return}switch(d.key){case P.Home:case P.PageUp:return d.preventDefault(),d.stopPropagation(),I(()=>C(j,y.First));case P.End:case P.PageDown:return d.preventDefault(),d.stopPropagation(),I(()=>C(j,y.Last))}if(I(()=>V(f,{vertical(){return d.key===P.ArrowUp?C(j,y.Previous|y.WrapAround):d.key===P.ArrowDown?C(j,y.Next|y.WrapAround):H.Error},horizontal(){return d.key===P.ArrowLeft?C(j,y.Previous|y.WrapAround):d.key===P.ArrowRight?C(j,y.Next|y.WrapAround):H.Error}}))===H.Success)return d.preventDefault()}),z=o.useRef(!1),b=k(()=>{var d;z.current||(z.current=!0,(d=T.current)==null||d.focus({preventScroll:!0}),m.change(h),Xe(()=>{z.current=!1}))}),S=k(d=>{d.preventDefault()}),{isFocusVisible:L,focusProps:_e}=ke({autoFocus:u}),{isHovered:Ge,hoverProps:Ue}=Qe({isDisabled:c}),{pressed:We,pressProps:Be}=Ze({disabled:c}),He=G({selected:v,hover:Ge,active:We,focus:L,autofocus:u,disabled:c}),Ke=Ae({ref:R,onKeyDown:ne,onMouseDown:S,onClick:b,id:l,role:"tab",type:ea(e,E),"aria-controls":(t=(r=x[h])==null?void 0:r.current)==null?void 0:t.id,"aria-selected":v,tabIndex:v?0:-1,disabled:c||void 0,autoFocus:u},_e,Ue,Be);return U()({ourProps:Ke,theirProps:N,slot:He,defaultTag:xa,name:"Tabs.Tab"})}let fa="div";function ga(e,n){let{selectedIndex:r}=$("Tab.Panels"),t=W(n),i=G({selectedIndex:r}),l=e,c={ref:t};return U()({ourProps:c,theirProps:l,slot:i,defaultTag:fa,name:"Tabs.Panels"})}let ha="div",va=oe.RenderStrategy|oe.Static;function Pa(e,n){var r,t,i,l;let c=o.useId(),{id:u=`headlessui-tabs-panel-${c}`,tabIndex:N=0,...f}=e,{selectedIndex:p,tabs:g,panels:A}=$("Tab.Panel"),x=ie("Tab.Panel"),m=o.useRef(null),O=W(m,n);ee(()=>x.registerPanel(m),[x,m]);let E=De("panels"),w=A.indexOf(m);w===-1&&(w=E);let T=w===p,{isFocusVisible:R,focusProps:q}=ke(),h=G({selected:T,focus:R}),v=Ae({ref:O,id:u,role:"tabpanel","aria-labelledby":(t=(r=g[w])==null?void 0:r.current)==null?void 0:t.id,tabIndex:T?N:-1},q),I=U();return!T&&((i=f.unmount)==null||i)&&!((l=f.static)!=null&&l)?D.createElement(Le,{"aria-hidden":"true",...v}):I({ourProps:v,theirProps:f,slot:h,defaultTag:ha,features:va,visible:T,name:"Tabs.Panel"})}let ya=_(Ta),$e=_(pa),Oe=_(ba),Ee=_(ga),Re=_(Pa),Na=Object.assign(ya,{Group:$e,List:Oe,Panels:Ee,Panel:Re});const qe=o.createContext({variant:"line",size:"md",color:"white"});function se(){return o.useContext(qe)}function s({children:e,className:n,variant:r="line",size:t="md",color:i="white",defaultIndex:l,selectedIndex:c,onChange:u}){return a.jsx(qe.Provider,{value:{variant:r,size:t,color:i},children:a.jsx($e,{as:"div",...l!==void 0?{defaultIndex:l}:{},...c!==void 0?{selectedIndex:c}:{},...u!==void 0?{onChange:u}:{},className:M("w-full",n),children:e})})}s.displayName="Tabs";function ze({children:e,className:n}){const{variant:r,size:t,color:i}=se(),{list:l}=ae({variant:r,size:t,color:i});return a.jsx(Oe,{className:M(l(),n),children:e})}ze.displayName="Tabs.List";function Fe({children:e,className:n,disabled:r}){const{variant:t,size:i,color:l}=se(),{tab:c}=ae({variant:t,size:i,color:l});return a.jsx(Na,{...r!==void 0?{disabled:r}:{},className:M(c(),n),children:e})}Fe.displayName="Tabs.Tab";function Ve({children:e,className:n}){const{variant:r,size:t,color:i}=se(),{panels:l}=ae({variant:r,size:t,color:i});return a.jsx(Ee,{className:M(l(),n),children:e})}Ve.displayName="Tabs.Panels";function Me({children:e,className:n}){const{variant:r,size:t,color:i}=se(),{panel:l}=ae({variant:r,size:t,color:i});return a.jsx(Re,{className:M(l(),n),children:e})}Me.displayName="Tabs.Panel";s.List=ze;s.Tab=Fe;s.Panels=Ve;s.Panel=Me;s.__docgenInfo={description:"",methods:[{name:"List",docblock:null,modifiers:["static"],params:[{name:"{ children, className }: TabsListProps",optional:!1,type:{name:"signature",type:"object",raw:`{\r
  children: ReactNode;\r
  className?: string;\r
}`,signature:{properties:[{key:"children",value:{name:"ReactNode",required:!0}},{key:"className",value:{name:"string",required:!1}}]},alias:"TabsListProps"}}],returns:null},{name:"Tab",docblock:null,modifiers:["static"],params:[{name:"{ children, className, disabled }: TabProps",optional:!1,type:{name:"signature",type:"object",raw:`{\r
  children: ReactNode;\r
  className?: string;\r
  disabled?: boolean;\r
}`,signature:{properties:[{key:"children",value:{name:"ReactNode",required:!0}},{key:"className",value:{name:"string",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]},alias:"TabProps"}}],returns:null},{name:"Panels",docblock:null,modifiers:["static"],params:[{name:"{ children, className }: TabsPanelsProps",optional:!1,type:{name:"signature",type:"object",raw:`{\r
  children: ReactNode;\r
  className?: string;\r
}`,signature:{properties:[{key:"children",value:{name:"ReactNode",required:!0}},{key:"className",value:{name:"string",required:!1}}]},alias:"TabsPanelsProps"}}],returns:null},{name:"Panel",docblock:null,modifiers:["static"],params:[{name:"{ children, className }: TabPanelProps",optional:!1,type:{name:"signature",type:"object",raw:`{\r
  children: ReactNode;\r
  className?: string;\r
}`,signature:{properties:[{key:"children",value:{name:"ReactNode",required:!0}},{key:"className",value:{name:"string",required:!1}}]},alias:"TabPanelProps"}}],returns:null}],displayName:"Tabs",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"line" | "pills"',elements:[{name:"literal",value:'"line"'},{name:"literal",value:'"pills"'}]},description:"",defaultValue:{value:'"line"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"white" | "primary"',elements:[{name:"literal",value:'"white"'},{name:"literal",value:'"primary"'}]},description:"Selected tab color for the pills variant. Ignored on line variant.",defaultValue:{value:'"white"',computed:!1}},defaultIndex:{required:!1,tsType:{name:"number"},description:""},selectedIndex:{required:!1,tsType:{name:"number"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""}}};const Ra={title:"Components/Tabs",component:s,parameters:{layout:"padded"},argTypes:{variant:{control:"select",options:["line","pills"]},size:{control:"select",options:["sm","md","lg"]},color:{control:"select",options:["white","primary"]}}},K={render:e=>a.jsxs(s,{...e,className:"max-w-lg",children:[a.jsxs(s.List,{children:[a.jsx(s.Tab,{children:"Overview"}),a.jsx(s.Tab,{children:"Details"}),a.jsx(s.Tab,{children:"Settings"})]}),a.jsxs(s.Panels,{children:[a.jsx(s.Panel,{children:a.jsx("p",{className:"text-sm text-gray-700",children:"This is the Overview panel. It contains summary information about the selected item."})}),a.jsx(s.Panel,{children:a.jsx("p",{className:"text-sm text-gray-700",children:"This is the Details panel. It contains in-depth information and specifications."})}),a.jsx(s.Panel,{children:a.jsx("p",{className:"text-sm text-gray-700",children:"This is the Settings panel. Configure preferences and options here."})})]})]}),args:{variant:"line",size:"md",color:"primary",defaultIndex:2}},Y={render:()=>a.jsxs(s,{variant:"pills",className:"max-w-lg",children:[a.jsxs(s.List,{children:[a.jsx(s.Tab,{children:"Overview"}),a.jsx(s.Tab,{children:"Details"}),a.jsx(s.Tab,{children:"Settings"})]}),a.jsxs(s.Panels,{children:[a.jsx(s.Panel,{children:a.jsx("p",{className:"text-sm text-gray-700",children:"Overview panel content."})}),a.jsx(s.Panel,{children:a.jsx("p",{className:"text-sm text-gray-700",children:"Details panel content."})}),a.jsx(s.Panel,{children:a.jsx("p",{className:"text-sm text-gray-700",children:"Settings panel content."})})]})]}),args:{}},J={render:()=>a.jsx("div",{className:"flex flex-col gap-8",children:["white","primary"].map(e=>a.jsxs("div",{children:[a.jsxs("p",{className:"mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400",children:["color: ",e]}),a.jsxs(s,{variant:"pills",color:e,children:[a.jsxs(s.List,{children:[a.jsx(s.Tab,{children:"Overview"}),a.jsx(s.Tab,{children:"Details"}),a.jsx(s.Tab,{children:"Settings"})]}),a.jsxs(s.Panels,{children:[a.jsx(s.Panel,{children:a.jsx("p",{className:"text-sm text-gray-700",children:"Overview panel content."})}),a.jsx(s.Panel,{children:a.jsx("p",{className:"text-sm text-gray-700",children:"Details panel content."})}),a.jsx(s.Panel,{children:a.jsx("p",{className:"text-sm text-gray-700",children:"Settings panel content."})})]})]})]},e))}),args:{}},X={render:()=>a.jsx("div",{className:"flex flex-col gap-8",children:["sm","md","lg"].map(e=>a.jsxs("div",{children:[a.jsxs("p",{className:"mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400",children:["Size: ",e]}),a.jsxs(s,{size:e,className:"max-w-lg",children:[a.jsxs(s.List,{children:[a.jsx(s.Tab,{children:"Tab One"}),a.jsx(s.Tab,{children:"Tab Two"}),a.jsx(s.Tab,{children:"Tab Three"})]}),a.jsxs(s.Panels,{children:[a.jsx(s.Panel,{children:a.jsx("p",{className:"text-sm text-gray-700",children:"Content for Tab One."})}),a.jsx(s.Panel,{children:a.jsx("p",{className:"text-sm text-gray-700",children:"Content for Tab Two."})}),a.jsx(s.Panel,{children:a.jsx("p",{className:"text-sm text-gray-700",children:"Content for Tab Three."})})]})]})]},e))}),args:{variant:"pills"}},Q={render:()=>a.jsx("div",{className:"flex flex-col gap-8",children:["line","pills"].map(e=>a.jsxs("div",{children:[a.jsxs("p",{className:"mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400",children:["Variant: ",e]}),a.jsxs(s,{variant:e,className:"max-w-lg",children:[a.jsxs(s.List,{children:[a.jsx(s.Tab,{children:"Active"}),a.jsx(s.Tab,{disabled:!0,children:"Disabled"}),a.jsx(s.Tab,{children:"Another"})]}),a.jsxs(s.Panels,{children:[a.jsx(s.Panel,{children:a.jsx("p",{className:"text-sm text-gray-700",children:"This tab is active and selectable."})}),a.jsx(s.Panel,{children:a.jsx("p",{className:"text-sm text-gray-700",children:"This tab is disabled."})}),a.jsx(s.Panel,{children:a.jsx("p",{className:"text-sm text-gray-700",children:"Another selectable tab."})})]})]})]},e))}),args:{}},Z={render:()=>a.jsx("div",{className:"flex flex-col gap-10",children:["line","pills"].map(e=>a.jsxs("div",{children:[a.jsxs("p",{className:"mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400",children:["Variant: ",e]}),a.jsxs(s,{variant:e,className:"max-w-lg",children:[a.jsxs(s.List,{children:[a.jsx(s.Tab,{children:"Account"}),a.jsx(s.Tab,{children:"Security"}),a.jsx(s.Tab,{children:"Notifications"})]}),a.jsxs(s.Panels,{children:[a.jsx(s.Panel,{children:a.jsx("p",{className:"text-sm text-gray-700",children:"Account settings panel."})}),a.jsx(s.Panel,{children:a.jsx("p",{className:"text-sm text-gray-700",children:"Security settings panel."})}),a.jsx(s.Panel,{children:a.jsx("p",{className:"text-sm text-gray-700",children:"Notification preferences panel."})})]})]})]},e))}),args:{}};var de,ue,pe;K.parameters={...K.parameters,docs:{...(de=K.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: args => <Tabs {...args} className="max-w-lg">\r
      <Tabs.List>\r
        <Tabs.Tab>Overview</Tabs.Tab>\r
        <Tabs.Tab>Details</Tabs.Tab>\r
        <Tabs.Tab>Settings</Tabs.Tab>\r
      </Tabs.List>\r
      <Tabs.Panels>\r
        <Tabs.Panel>\r
          <p className="text-sm text-gray-700">\r
            This is the Overview panel. It contains summary information about the\r
            selected item.\r
          </p>\r
        </Tabs.Panel>\r
        <Tabs.Panel>\r
          <p className="text-sm text-gray-700">\r
            This is the Details panel. It contains in-depth information and\r
            specifications.\r
          </p>\r
        </Tabs.Panel>\r
        <Tabs.Panel>\r
          <p className="text-sm text-gray-700">\r
            This is the Settings panel. Configure preferences and options here.\r
          </p>\r
        </Tabs.Panel>\r
      </Tabs.Panels>\r
    </Tabs>,
  args: {
    variant: "line",
    size: "md",
    color: "primary",
    defaultIndex: 2
  }
}`,...(pe=(ue=K.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var me,be,xe;Y.parameters={...Y.parameters,docs:{...(me=Y.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => <Tabs variant="pills" className="max-w-lg">\r
      <Tabs.List>\r
        <Tabs.Tab>Overview</Tabs.Tab>\r
        <Tabs.Tab>Details</Tabs.Tab>\r
        <Tabs.Tab>Settings</Tabs.Tab>\r
      </Tabs.List>\r
      <Tabs.Panels>\r
        <Tabs.Panel>\r
          <p className="text-sm text-gray-700">Overview panel content.</p>\r
        </Tabs.Panel>\r
        <Tabs.Panel>\r
          <p className="text-sm text-gray-700">Details panel content.</p>\r
        </Tabs.Panel>\r
        <Tabs.Panel>\r
          <p className="text-sm text-gray-700">Settings panel content.</p>\r
        </Tabs.Panel>\r
      </Tabs.Panels>\r
    </Tabs>,
  args: {}
}`,...(xe=(be=Y.parameters)==null?void 0:be.docs)==null?void 0:xe.source}}};var Te,fe,ge;J.parameters={...J.parameters,docs:{...(Te=J.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">\r
      {(["white", "primary"] as const).map(color => <div key={color}>\r
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">\r
            color: {color}\r
          </p>\r
          <Tabs variant="pills" color={color}>\r
            <Tabs.List>\r
              <Tabs.Tab>Overview</Tabs.Tab>\r
              <Tabs.Tab>Details</Tabs.Tab>\r
              <Tabs.Tab>Settings</Tabs.Tab>\r
            </Tabs.List>\r
            <Tabs.Panels>\r
              <Tabs.Panel><p className="text-sm text-gray-700">Overview panel content.</p></Tabs.Panel>\r
              <Tabs.Panel><p className="text-sm text-gray-700">Details panel content.</p></Tabs.Panel>\r
              <Tabs.Panel><p className="text-sm text-gray-700">Settings panel content.</p></Tabs.Panel>\r
            </Tabs.Panels>\r
          </Tabs>\r
        </div>)}\r
    </div>,
  args: {}
}`,...(ge=(fe=J.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var he,ve,Pe;X.parameters={...X.parameters,docs:{...(he=X.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">\r
      {(["sm", "md", "lg"] as const).map(size => <div key={size}>\r
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">\r
            Size: {size}\r
          </p>\r
          <Tabs size={size} className="max-w-lg">\r
            <Tabs.List>\r
              <Tabs.Tab>Tab One</Tabs.Tab>\r
              <Tabs.Tab>Tab Two</Tabs.Tab>\r
              <Tabs.Tab>Tab Three</Tabs.Tab>\r
            </Tabs.List>\r
            <Tabs.Panels>\r
              <Tabs.Panel>\r
                <p className="text-sm text-gray-700">Content for Tab One.</p>\r
              </Tabs.Panel>\r
              <Tabs.Panel>\r
                <p className="text-sm text-gray-700">Content for Tab Two.</p>\r
              </Tabs.Panel>\r
              <Tabs.Panel>\r
                <p className="text-sm text-gray-700">Content for Tab Three.</p>\r
              </Tabs.Panel>\r
            </Tabs.Panels>\r
          </Tabs>\r
        </div>)}\r
    </div>,
  args: {
    variant: "pills"
  }
}`,...(Pe=(ve=X.parameters)==null?void 0:ve.docs)==null?void 0:Pe.source}}};var ye,Ne,je;Q.parameters={...Q.parameters,docs:{...(ye=Q.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">\r
      {(["line", "pills"] as const).map(variant => <div key={variant}>\r
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">\r
            Variant: {variant}\r
          </p>\r
          <Tabs variant={variant} className="max-w-lg">\r
            <Tabs.List>\r
              <Tabs.Tab>Active</Tabs.Tab>\r
              <Tabs.Tab disabled>Disabled</Tabs.Tab>\r
              <Tabs.Tab>Another</Tabs.Tab>\r
            </Tabs.List>\r
            <Tabs.Panels>\r
              <Tabs.Panel>\r
                <p className="text-sm text-gray-700">This tab is active and selectable.</p>\r
              </Tabs.Panel>\r
              <Tabs.Panel>\r
                <p className="text-sm text-gray-700">This tab is disabled.</p>\r
              </Tabs.Panel>\r
              <Tabs.Panel>\r
                <p className="text-sm text-gray-700">Another selectable tab.</p>\r
              </Tabs.Panel>\r
            </Tabs.Panels>\r
          </Tabs>\r
        </div>)}\r
    </div>,
  args: {}
}`,...(je=(Ne=Q.parameters)==null?void 0:Ne.docs)==null?void 0:je.source}}};var we,Se,Ie;Z.parameters={...Z.parameters,docs:{...(we=Z.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-10">\r
      {(["line", "pills"] as const).map(variant => <div key={variant}>\r
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">\r
            Variant: {variant}\r
          </p>\r
          <Tabs variant={variant} className="max-w-lg">\r
            <Tabs.List>\r
              <Tabs.Tab>Account</Tabs.Tab>\r
              <Tabs.Tab>Security</Tabs.Tab>\r
              <Tabs.Tab>Notifications</Tabs.Tab>\r
            </Tabs.List>\r
            <Tabs.Panels>\r
              <Tabs.Panel>\r
                <p className="text-sm text-gray-700">Account settings panel.</p>\r
              </Tabs.Panel>\r
              <Tabs.Panel>\r
                <p className="text-sm text-gray-700">Security settings panel.</p>\r
              </Tabs.Panel>\r
              <Tabs.Panel>\r
                <p className="text-sm text-gray-700">Notification preferences panel.</p>\r
              </Tabs.Panel>\r
            </Tabs.Panels>\r
          </Tabs>\r
        </div>)}\r
    </div>,
  args: {}
}`,...(Ie=(Se=Z.parameters)==null?void 0:Se.docs)==null?void 0:Ie.source}}};const qa=["Default","Pills","PillColors","AllSizes","WithDisabledTab","AllVariants"];export{X as AllSizes,Z as AllVariants,K as Default,J as PillColors,Y as Pills,Q as WithDisabledTab,qa as __namedExportsOrder,Ra as default};
