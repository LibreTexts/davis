import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as N}from"./clsx-B-dksMZM.js";import"./index-ZH-6pyQh.js";import{I as b}from"./variants-CIz8xjKx.js";import"./_commonjsHelpers-CqkleIqs.js";function R({className:i}){return e.jsx("svg",{viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true",className:i,children:e.jsx("path",{fillRule:"evenodd",d:"M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z",clipRule:"evenodd"})})}function k({className:i}){return e.jsx("svg",{viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true",className:i,children:e.jsx("circle",{cx:"8",cy:"8",r:"3"})})}function C({title:i,description:n,timestamp:o,icon:c,status:d="pending",className:M}){const s=b({status:d}),P=d==="complete"?e.jsx(R,{className:"size-4"}):e.jsx(k,{className:"size-4"});return e.jsxs("li",{className:N(s.item(),M),children:[e.jsx("div",{className:s.connector(),"aria-hidden":"true"}),e.jsx("div",{className:s.indicator(),"aria-hidden":"true",children:c!==void 0?c:P}),e.jsxs("div",{className:s.content(),children:[e.jsx("p",{className:s.title(),children:i}),n!==void 0&&e.jsx("p",{className:s.description(),children:n}),o!==void 0&&e.jsx("time",{className:s.timestamp(),children:o})]})]})}C.displayName="Timeline.Item";function t({children:i,className:n}){return e.jsx("ol",{role:"list",className:N(b().root(),n),children:i})}t.displayName="Timeline";t.Item=C;t.__docgenInfo={description:"",methods:[{name:"Item",docblock:null,modifiers:["static"],params:[{name:`{\r
  title,\r
  description,\r
  timestamp,\r
  icon,\r
  status = "pending",\r
  className,\r
}: TimelineItemProps`,optional:!1,type:{name:"signature",type:"object",raw:`{\r
  title: ReactNode;\r
  description?: ReactNode;\r
  timestamp?: string;\r
  icon?: ReactNode;\r
  status?: TimelineStatus;\r
  className?: string;\r
}`,signature:{properties:[{key:"title",value:{name:"ReactNode",required:!0}},{key:"description",value:{name:"ReactNode",required:!1}},{key:"timestamp",value:{name:"string",required:!1}},{key:"icon",value:{name:"ReactNode",required:!1}},{key:"status",value:{name:"union",raw:'"complete" | "current" | "pending"',elements:[{name:"literal",value:'"complete"'},{name:"literal",value:'"current"'},{name:"literal",value:'"pending"'}],required:!1}},{key:"className",value:{name:"string",required:!1}}]},alias:"TimelineItemProps"}}],returns:null}],displayName:"Timeline",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const E={title:"Components/Timeline",parameters:{layout:"padded"}},r={render:()=>e.jsxs(t,{children:[e.jsx(t.Item,{title:"Application submitted",description:"Your application has been received and is under review.",timestamp:"March 20, 2026",status:"complete"}),e.jsx(t.Item,{title:"Initial review",description:"Our team is reviewing your submission.",timestamp:"March 22, 2026",status:"current"}),e.jsx(t.Item,{title:"Background check",status:"pending"}),e.jsx(t.Item,{title:"Final decision",status:"pending"})]})},a={render:()=>e.jsxs(t,{children:[e.jsx(t.Item,{title:"Pull request merged",description:"feat: add StatCard and Timeline components",timestamp:"2 hours ago",status:"complete"}),e.jsx(t.Item,{title:"Code review requested",description:"Requested review from 2 team members.",timestamp:"5 hours ago",status:"complete"}),e.jsx(t.Item,{title:"Branch created",description:"Created branch feat/p3-components from main.",timestamp:"Yesterday",status:"complete"}),e.jsx(t.Item,{title:"Issue opened",description:"P3: Implement StatCard, Timeline, and Popover components",timestamp:"March 21, 2026",status:"complete"})]})},l={render:()=>e.jsxs("div",{className:"flex gap-12",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold text-gray-500 mb-4",children:"In Progress"}),e.jsxs(t,{children:[e.jsx(t.Item,{title:"Step 1: Account setup",status:"complete"}),e.jsx(t.Item,{title:"Step 2: Profile info",status:"complete"}),e.jsx(t.Item,{title:"Step 3: Preferences",status:"current",description:"Fill in your notification preferences."}),e.jsx(t.Item,{title:"Step 4: Confirmation",status:"pending"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold text-gray-500 mb-4",children:"Not Started"}),e.jsxs(t,{children:[e.jsx(t.Item,{title:"Step 1: Account setup",status:"pending"}),e.jsx(t.Item,{title:"Step 2: Profile info",status:"pending"}),e.jsx(t.Item,{title:"Step 3: Preferences",status:"pending"}),e.jsx(t.Item,{title:"Step 4: Confirmation",status:"pending"})]})]})]})};function w(){return e.jsx("svg",{viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true",className:"size-4",children:e.jsx("path",{fillRule:"evenodd",d:"M8 1a.75.75 0 0 1 .535.222l4.5 4.25A.75.75 0 0 1 13.25 6v3.75a4.25 4.25 0 0 1-8.5 0V6a.75.75 0 0 1 .215-.528l4.5-4.25A.75.75 0 0 1 8 1Z",clipRule:"evenodd"})})}function A(){return e.jsxs("svg",{viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true",className:"size-4",children:[e.jsx("path",{d:"M5.25 14.5a2.75 2.75 0 0 0 5.5 0h-5.5Z"}),e.jsx("path",{fillRule:"evenodd",d:"M2.5 8.625a5.5 5.5 0 0 1 11 0v.884c0 .408.22.786.572 1.003l.864.518A1.25 1.25 0 0 1 14.3 13H1.7a1.25 1.25 0 0 1-.636-2.33l.864-.52A1.25 1.25 0 0 0 2.5 9.51V8.625Z",clipRule:"evenodd"})]})}const m={render:()=>e.jsxs(t,{children:[e.jsx(t.Item,{title:"Security audit completed",description:"All 42 checks passed successfully.",timestamp:"March 20, 2026",status:"complete",icon:e.jsx(w,{})}),e.jsx(t.Item,{title:"Alerts configured",description:"Email and Slack notifications are active.",timestamp:"March 21, 2026",status:"complete",icon:e.jsx(A,{})}),e.jsx(t.Item,{title:"Deployment scheduled",description:"Production deployment set for March 25.",timestamp:"March 22, 2026",status:"current"})]})};var p,u,x;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Timeline>\r
      <Timeline.Item title="Application submitted" description="Your application has been received and is under review." timestamp="March 20, 2026" status="complete" />\r
      <Timeline.Item title="Initial review" description="Our team is reviewing your submission." timestamp="March 22, 2026" status="current" />\r
      <Timeline.Item title="Background check" status="pending" />\r
      <Timeline.Item title="Final decision" status="pending" />\r
    </Timeline>
}`,...(x=(u=r.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var f,h,I;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Timeline>\r
      <Timeline.Item title="Pull request merged" description="feat: add StatCard and Timeline components" timestamp="2 hours ago" status="complete" />\r
      <Timeline.Item title="Code review requested" description="Requested review from 2 team members." timestamp="5 hours ago" status="complete" />\r
      <Timeline.Item title="Branch created" description="Created branch feat/p3-components from main." timestamp="Yesterday" status="complete" />\r
      <Timeline.Item title="Issue opened" description="P3: Implement StatCard, Timeline, and Popover components" timestamp="March 21, 2026" status="complete" />\r
    </Timeline>
}`,...(I=(h=a.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};var v,g,j;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div className="flex gap-12">\r
      <div>\r
        <p className="text-sm font-semibold text-gray-500 mb-4">In Progress</p>\r
        <Timeline>\r
          <Timeline.Item title="Step 1: Account setup" status="complete" />\r
          <Timeline.Item title="Step 2: Profile info" status="complete" />\r
          <Timeline.Item title="Step 3: Preferences" status="current" description="Fill in your notification preferences." />\r
          <Timeline.Item title="Step 4: Confirmation" status="pending" />\r
        </Timeline>\r
      </div>\r
      <div>\r
        <p className="text-sm font-semibold text-gray-500 mb-4">Not Started</p>\r
        <Timeline>\r
          <Timeline.Item title="Step 1: Account setup" status="pending" />\r
          <Timeline.Item title="Step 2: Profile info" status="pending" />\r
          <Timeline.Item title="Step 3: Preferences" status="pending" />\r
          <Timeline.Item title="Step 4: Confirmation" status="pending" />\r
        </Timeline>\r
      </div>\r
    </div>
}`,...(j=(g=l.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};var T,y,S;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Timeline>\r
      <Timeline.Item title="Security audit completed" description="All 42 checks passed successfully." timestamp="March 20, 2026" status="complete" icon={<ShieldIcon />} />\r
      <Timeline.Item title="Alerts configured" description="Email and Slack notifications are active." timestamp="March 21, 2026" status="complete" icon={<BellIcon />} />\r
      <Timeline.Item title="Deployment scheduled" description="Production deployment set for March 25." timestamp="March 22, 2026" status="current" />\r
    </Timeline>
}`,...(S=(y=m.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};const Y=["Default","ActivityFeed","MixedStatuses","WithCustomIcons"];export{a as ActivityFeed,r as Default,l as MixedStatuses,m as WithCustomIcons,Y as __namedExportsOrder,E as default};
