import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{c as k}from"./clsx-B-dksMZM.js";import{R as b,r as i}from"./index-ZH-6pyQh.js";import{L as D}from"./variants-CIz8xjKx.js";import{Y as L,o as y,$ as Ae,c as ve,n as O,V as K,K as R,d as ye,l as Te,u as q,A as U}from"./render-D3e-BGhm.js";import{w as Ie}from"./use-active-press-Bj0hdp5d.js";import{e as Pe}from"./use-resolve-button-type-BttAuRU2.js";import{y as z,o as j,T as je,i as X}from"./keyboard-D6fFT7n5.js";import{u as we,N as Ne,i as C,x as Se,s as Ee,c as Ce}from"./open-closed-kU2EydzO.js";import{C as ke}from"./close-provider-B-utbKzN.js";import{s as De}from"./bugs-dzwh2ro-.js";import"./_commonjsHelpers-CqkleIqs.js";var G;let $e=(G=b.startTransition)!=null?G:function(e){e()};var Le=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Le||{}),Oe=(e=>(e[e.ToggleDisclosure=0]="ToggleDisclosure",e[e.CloseDisclosure=1]="CloseDisclosure",e[e.SetButtonId=2]="SetButtonId",e[e.SetPanelId=3]="SetPanelId",e[e.SetButtonElement=4]="SetButtonElement",e[e.SetPanelElement=5]="SetPanelElement",e))(Oe||{});let Re={0:e=>({...e,disclosureState:q(e.disclosureState,{0:1,1:0})}),1:e=>e.disclosureState===1?e:{...e,disclosureState:1},2(e,n){return e.buttonId===n.buttonId?e:{...e,buttonId:n.buttonId}},3(e,n){return e.panelId===n.panelId?e:{...e,panelId:n.panelId}},4(e,n){return e.buttonElement===n.element?e:{...e,buttonElement:n.element}},5(e,n){return e.panelElement===n.element?e:{...e,panelElement:n.element}}},B=i.createContext(null);B.displayName="DisclosureContext";function V(e){let n=i.useContext(B);if(n===null){let a=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,V),a}return n}let F=i.createContext(null);F.displayName="DisclosureAPIContext";function ce(e){let n=i.useContext(F);if(n===null){let a=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,ce),a}return n}let Y=i.createContext(null);Y.displayName="DisclosurePanelContext";function qe(){return i.useContext(Y)}function ze(e,n){return q(n.type,Re,e,n)}let Be=i.Fragment;function Ve(e,n){let{defaultOpen:a=!1,...o}=e,s=i.useRef(null),p=z(n,je(u=>{s.current=u},e.as===void 0||ye(e.as))),g=i.useReducer(ze,{disclosureState:a?0:1,buttonElement:null,panelElement:null,buttonId:null,panelId:null}),[{disclosureState:l,buttonId:c},A]=g,d=y(u=>{A({type:1});let h=Te(s.current);if(!h||!c)return;let x=u?X(u)?u:"current"in u&&X(u.current)?u.current:h.getElementById(c):h.getElementById(c);x==null||x.focus()}),T=i.useMemo(()=>({close:d}),[d]),f=O({open:l===0,close:d}),v={ref:p},I=R();return b.createElement(B.Provider,{value:g},b.createElement(F.Provider,{value:T},b.createElement(ke,{value:d},b.createElement(Ce,{value:q(l,{0:C.Open,1:C.Closed})},I({ourProps:v,theirProps:o,slot:f,defaultTag:Be,name:"Disclosure"})))))}let Fe="button";function Ye(e,n){let a=i.useId(),{id:o=`headlessui-disclosure-button-${a}`,disabled:s=!1,autoFocus:p=!1,...g}=e,[l,c]=V("Disclosure.Button"),A=qe(),d=A===null?!1:A===l.panelId,T=i.useRef(null),f=z(T,n,y(m=>{if(!d)return c({type:4,element:m})}));i.useEffect(()=>{if(!d)return c({type:2,buttonId:o}),()=>{c({type:2,buttonId:null})}},[o,c,d]);let v=y(m=>{var P;if(d){if(l.disclosureState===1)return;switch(m.key){case j.Space:case j.Enter:m.preventDefault(),m.stopPropagation(),c({type:0}),(P=l.buttonElement)==null||P.focus();break}}else switch(m.key){case j.Space:case j.Enter:m.preventDefault(),m.stopPropagation(),c({type:0});break}}),I=y(m=>{switch(m.key){case j.Space:m.preventDefault();break}}),u=y(m=>{var P;De(m.currentTarget)||s||(d?(c({type:0}),(P=l.buttonElement)==null||P.focus()):c({type:0}))}),{isFocusVisible:h,focusProps:x}=Ae({autoFocus:p}),{isHovered:$,hoverProps:M}=ve({isDisabled:s}),{pressed:he,pressProps:W}=Ie({disabled:s}),xe=O({open:l.disclosureState===0,hover:$,active:he,disabled:s,focus:h,autofocus:p}),_=Pe(e,l.buttonElement),be=d?K({ref:f,type:_,disabled:s||void 0,autoFocus:p,onKeyDown:v,onClick:u},x,M,W):K({ref:f,id:o,type:_,"aria-expanded":l.disclosureState===0,"aria-controls":l.panelElement?l.panelId:void 0,disabled:s||void 0,autoFocus:p,onKeyDown:v,onKeyUp:I,onClick:u},x,M,W);return R()({ourProps:be,theirProps:g,slot:xe,defaultTag:Fe,name:"Disclosure.Button"})}let He="div",Me=U.RenderStrategy|U.Static;function We(e,n){let a=i.useId(),{id:o=`headlessui-disclosure-panel-${a}`,transition:s=!1,...p}=e,[g,l]=V("Disclosure.Panel"),{close:c}=ce("Disclosure.Panel"),[A,d]=i.useState(null),T=z(n,y($=>{$e(()=>l({type:5,element:$}))}),d);i.useEffect(()=>(l({type:3,panelId:o}),()=>{l({type:3,panelId:null})}),[o,l]);let f=we(),[v,I]=Ne(s,A,f!==null?(f&C.Open)===C.Open:g.disclosureState===0),u=O({open:g.disclosureState===0,close:c}),h={ref:T,id:o,...Se(I)},x=R();return b.createElement(Ee,null,b.createElement(Y.Provider,{value:g.panelId},x({ourProps:h,theirProps:p,slot:u,defaultTag:He,features:Me,visible:v,name:"Disclosure.Panel"})))}let _e=L(Ve),de=L(Ye),ue=L(We),Ke=Object.assign(_e,{Button:de,Panel:ue});const me=i.createContext({variant:"default",size:"md"});function H(){return i.useContext(me)}function t({children:e,className:n,variant:a="default",size:o="md"}){const{root:s}=D({variant:a,size:o});return r.jsx(me.Provider,{value:{variant:a,size:o},children:r.jsx("div",{className:k(s(),n),children:e})})}t.displayName="Accordion";function pe({children:e,className:n,defaultOpen:a=!1}){const{variant:o,size:s}=H(),{item:p}=D({variant:o,size:s});return r.jsx(Ke,{as:"div",defaultOpen:a,className:k(p(),n),children:e})}pe.displayName="Accordion.Item";function ge({children:e,className:n}){const{variant:a,size:o}=H(),{trigger:s,icon:p}=D({variant:a,size:o});return r.jsxs(de,{className:k(s(),n),children:[r.jsx("span",{children:e}),r.jsx(Ue,{className:p(),"aria-hidden":"true"})]})}ge.displayName="Accordion.Trigger";function fe({children:e,className:n}){const{variant:a,size:o}=H(),{panel:s}=D({variant:a,size:o});return r.jsx(ue,{className:k(s(),n),children:e})}fe.displayName="Accordion.Panel";function Ue({className:e}){return r.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:e,children:r.jsx("path",{fillRule:"evenodd",d:"M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"})})}t.Item=pe;t.Trigger=ge;t.Panel=fe;t.__docgenInfo={description:"",methods:[{name:"Item",docblock:null,modifiers:["static"],params:[{name:`{\r
  children,\r
  className,\r
  defaultOpen = false,\r
}: AccordionItemProps`,optional:!1,type:{name:"signature",type:"object",raw:`{\r
  children: ReactNode;\r
  className?: string;\r
  defaultOpen?: boolean;\r
}`,signature:{properties:[{key:"children",value:{name:"ReactNode",required:!0}},{key:"className",value:{name:"string",required:!1}},{key:"defaultOpen",value:{name:"boolean",required:!1}}]},alias:"AccordionItemProps"}}],returns:null},{name:"Trigger",docblock:null,modifiers:["static"],params:[{name:"{ children, className }: AccordionTriggerProps",optional:!1,type:{name:"signature",type:"object",raw:`{\r
  children: ReactNode;\r
  className?: string;\r
}`,signature:{properties:[{key:"children",value:{name:"ReactNode",required:!0}},{key:"className",value:{name:"string",required:!1}}]},alias:"AccordionTriggerProps"}}],returns:null},{name:"Panel",docblock:null,modifiers:["static"],params:[{name:"{ children, className }: AccordionPanelProps",optional:!1,type:{name:"signature",type:"object",raw:`{\r
  children: ReactNode;\r
  className?: string;\r
}`,signature:{properties:[{key:"children",value:{name:"ReactNode",required:!0}},{key:"className",value:{name:"string",required:!1}}]},alias:"AccordionPanelProps"}}],returns:null}],displayName:"Accordion",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"default" | "flush" | "bordered"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"flush"'},{name:"literal",value:'"bordered"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}}}};const lr={title:"Components/Accordion",component:t,parameters:{layout:"padded"},argTypes:{variant:{control:"select",options:["default","flush","bordered"]},size:{control:"select",options:["sm","md","lg"]}}},w={render:e=>r.jsxs(t,{...e,className:"max-w-lg",children:[r.jsxs(t.Item,{children:[r.jsx(t.Trigger,{children:"What is LibreTexts?"}),r.jsx(t.Panel,{children:"LibreTexts is a free and open educational platform that provides high-quality learning materials for students and educators worldwide."})]}),r.jsxs(t.Item,{children:[r.jsx(t.Trigger,{children:"How do I get started?"}),r.jsx(t.Panel,{children:"You can get started by creating a free account on the LibreTexts platform. Browse the library, find your subject, and begin learning at your own pace."})]}),r.jsxs(t.Item,{children:[r.jsx(t.Trigger,{children:"Is LibreTexts free to use?"}),r.jsx(t.Panel,{children:"Yes, LibreTexts is completely free for students and educators. All content is open-licensed and available without any cost or registration requirements."})]})]}),args:{variant:"default",size:"md"}},N={render:()=>r.jsxs(t,{className:"max-w-lg",children:[r.jsxs(t.Item,{defaultOpen:!0,children:[r.jsx(t.Trigger,{children:"This item is open by default"}),r.jsxs(t.Panel,{children:["This panel is visible on initial render because ",r.jsx("code",{children:"defaultOpen"})," is set on the item. The user can still collapse it."]})]}),r.jsxs(t.Item,{children:[r.jsx(t.Trigger,{children:"This item is collapsed by default"}),r.jsx(t.Panel,{children:"This panel is hidden until the user clicks the trigger."})]})]}),args:{}},Xe=[{trigger:"Can I contribute content?",panel:"Absolutely. LibreTexts welcomes contributions from educators and subject matter experts. You can remix existing content or create new materials using the platform's authoring tools."},{trigger:"What subjects are available?",panel:"LibreTexts covers a wide range of subjects including mathematics, sciences, humanities, social sciences, engineering, and more."},{trigger:"How is the content licensed?",panel:"All LibreTexts content is published under Creative Commons licenses, allowing free use, remixing, and redistribution with attribution."}],S={render:()=>r.jsx("div",{className:"flex flex-col gap-10",children:["default","flush","bordered"].map(e=>r.jsxs("div",{children:[r.jsxs("p",{className:"mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400",children:["Variant: ",e]}),r.jsx(t,{variant:e,className:"max-w-lg",children:Xe.map(({trigger:n,panel:a})=>r.jsxs(t.Item,{children:[r.jsx(t.Trigger,{children:n}),r.jsx(t.Panel,{children:a})]},n))})]},e))}),args:{}},E={render:()=>r.jsx("div",{className:"flex flex-col gap-10",children:["sm","md","lg"].map(e=>r.jsxs("div",{children:[r.jsxs("p",{className:"mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400",children:["Size: ",e]}),r.jsxs(t,{size:e,className:"max-w-lg",children:[r.jsxs(t.Item,{children:[r.jsx(t.Trigger,{children:"First item"}),r.jsx(t.Panel,{children:"Content for the first accordion item."})]}),r.jsxs(t.Item,{children:[r.jsx(t.Trigger,{children:"Second item"}),r.jsx(t.Panel,{children:"Content for the second accordion item."})]})]})]},e))}),args:{}};var J,Z,Q;w.parameters={...w.parameters,docs:{...(J=w.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => <Accordion {...args} className="max-w-lg">\r
      <Accordion.Item>\r
        <Accordion.Trigger>What is LibreTexts?</Accordion.Trigger>\r
        <Accordion.Panel>\r
          LibreTexts is a free and open educational platform that provides high-quality\r
          learning materials for students and educators worldwide.\r
        </Accordion.Panel>\r
      </Accordion.Item>\r
      <Accordion.Item>\r
        <Accordion.Trigger>How do I get started?</Accordion.Trigger>\r
        <Accordion.Panel>\r
          You can get started by creating a free account on the LibreTexts platform.\r
          Browse the library, find your subject, and begin learning at your own pace.\r
        </Accordion.Panel>\r
      </Accordion.Item>\r
      <Accordion.Item>\r
        <Accordion.Trigger>Is LibreTexts free to use?</Accordion.Trigger>\r
        <Accordion.Panel>\r
          Yes, LibreTexts is completely free for students and educators. All content\r
          is open-licensed and available without any cost or registration requirements.\r
        </Accordion.Panel>\r
      </Accordion.Item>\r
    </Accordion>,
  args: {
    variant: "default",
    size: "md"
  }
}`,...(Q=(Z=w.parameters)==null?void 0:Z.docs)==null?void 0:Q.source}}};var ee,re,ne;N.parameters={...N.parameters,docs:{...(ee=N.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <Accordion className="max-w-lg">\r
      <Accordion.Item defaultOpen>\r
        <Accordion.Trigger>This item is open by default</Accordion.Trigger>\r
        <Accordion.Panel>\r
          This panel is visible on initial render because <code>defaultOpen</code> is\r
          set on the item. The user can still collapse it.\r
        </Accordion.Panel>\r
      </Accordion.Item>\r
      <Accordion.Item>\r
        <Accordion.Trigger>This item is collapsed by default</Accordion.Trigger>\r
        <Accordion.Panel>\r
          This panel is hidden until the user clicks the trigger.\r
        </Accordion.Panel>\r
      </Accordion.Item>\r
    </Accordion>,
  args: {}
}`,...(ne=(re=N.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var te,ae,se;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-10">\r
      {(["default", "flush", "bordered"] as const).map(variant => <div key={variant}>\r
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">\r
            Variant: {variant}\r
          </p>\r
          <Accordion variant={variant} className="max-w-lg">\r
            {ITEMS.map(({
          trigger,
          panel
        }) => <Accordion.Item key={trigger}>\r
                <Accordion.Trigger>{trigger}</Accordion.Trigger>\r
                <Accordion.Panel>{panel}</Accordion.Panel>\r
              </Accordion.Item>)}\r
          </Accordion>\r
        </div>)}\r
    </div>,
  args: {}
}`,...(se=(ae=S.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var oe,ie,le;E.parameters={...E.parameters,docs:{...(oe=E.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-10">\r
      {(["sm", "md", "lg"] as const).map(size => <div key={size}>\r
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">\r
            Size: {size}\r
          </p>\r
          <Accordion size={size} className="max-w-lg">\r
            <Accordion.Item>\r
              <Accordion.Trigger>First item</Accordion.Trigger>\r
              <Accordion.Panel>Content for the first accordion item.</Accordion.Panel>\r
            </Accordion.Item>\r
            <Accordion.Item>\r
              <Accordion.Trigger>Second item</Accordion.Trigger>\r
              <Accordion.Panel>Content for the second accordion item.</Accordion.Panel>\r
            </Accordion.Item>\r
          </Accordion>\r
        </div>)}\r
    </div>,
  args: {}
}`,...(le=(ie=E.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};const cr=["Default","WithDefaultOpen","AllVariants","AllSizes"];export{E as AllSizes,S as AllVariants,w as Default,N as WithDefaultOpen,cr as __namedExportsOrder,lr as default};
