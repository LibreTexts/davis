import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as Co}from"./index-ZH-6pyQh.js";import{I as r}from"./icon-button-SJycghFZ.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";import"./variants-CIz8xjKx.js";const e=()=>o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-full h-full",children:[o.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),o.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),T=()=>o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-full h-full",children:[o.jsx("polyline",{points:"3 6 5 6 21 6"}),o.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),I=()=>o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-full h-full",children:[o.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),o.jsx("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]}),Bo=()=>o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-full h-full",children:[o.jsx("circle",{cx:"12",cy:"12",r:"3"}),o.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),Go={title:"Components/IconButton",component:r,args:{icon:o.jsx(e,{}),"aria-label":"Add item"},argTypes:{variant:{control:"select",options:["primary","secondary","tertiary","destructive","ghost","outline"]},size:{control:"select",options:["sm","md","lg"]},tooltipPosition:{control:"select",options:["top","bottom","left","right"]}}},t={},a={args:{tooltip:"Click to add a new item"}},s={args:{variant:"primary"}},i={args:{variant:"secondary"}},n={args:{icon:o.jsx(T,{}),"aria-label":"Delete item",variant:"destructive",tooltip:"Delete this item"}},l={args:{variant:"ghost"}},c={args:{variant:"outline"}},p={args:{size:"sm"}},d={args:{size:"md"}},m={args:{size:"lg"}},u={args:{tooltip:"Tooltip on top",tooltipPosition:"top"}},g={args:{tooltip:"Tooltip on bottom",tooltipPosition:"bottom"}},x={args:{tooltip:"Tooltip on left",tooltipPosition:"left"},decorators:[f=>o.jsx("div",{className:"ml-32",children:o.jsx(f,{})})]},v={args:{tooltip:"Tooltip on right",tooltipPosition:"right"}},h={render:()=>{const[f,w]=Co.useState(!1),Do=()=>{w(!0),setTimeout(()=>w(!1),2e3)};return o.jsx(r,{icon:o.jsx(e,{}),"aria-label":"Add item",loading:f,onClick:Do,tooltip:"Click to load"})}},j={args:{disabled:!0}},S={render:()=>o.jsxs("div",{className:"flex items-center gap-4",children:[o.jsx(r,{icon:o.jsx(e,{}),"aria-label":"Primary",variant:"primary",tooltip:"Primary"}),o.jsx(r,{icon:o.jsx(I,{}),"aria-label":"Secondary",variant:"secondary",tooltip:"Secondary"}),o.jsx(r,{icon:o.jsx(Bo,{}),"aria-label":"Tertiary",variant:"tertiary",tooltip:"Tertiary"}),o.jsx(r,{icon:o.jsx(T,{}),"aria-label":"Destructive",variant:"destructive",tooltip:"Destructive"}),o.jsx(r,{icon:o.jsx(e,{}),"aria-label":"Ghost",variant:"ghost",tooltip:"Ghost"}),o.jsx(r,{icon:o.jsx(I,{}),"aria-label":"Outline",variant:"outline",tooltip:"Outline"})]})},y={render:()=>o.jsxs("div",{className:"flex items-center gap-4",children:[o.jsx(r,{icon:o.jsx(e,{}),"aria-label":"Small",size:"sm",variant:"primary",tooltip:"Small"}),o.jsx(r,{icon:o.jsx(e,{}),"aria-label":"Medium",size:"md",variant:"primary",tooltip:"Medium"}),o.jsx(r,{icon:o.jsx(e,{}),"aria-label":"Large",size:"lg",variant:"primary",tooltip:"Large"})]})},b={render:()=>o.jsxs("div",{className:"flex items-center gap-1 p-2 border rounded-lg bg-gray-50",children:[o.jsx(r,{icon:o.jsx(I,{}),"aria-label":"Edit",tooltip:"Edit"}),o.jsx(r,{icon:o.jsx(Bo,{}),"aria-label":"Settings",tooltip:"Settings"}),o.jsx("div",{className:"w-px h-6 bg-gray-300 mx-1"}),o.jsx(r,{icon:o.jsx(T,{}),"aria-label":"Delete",variant:"ghost",tooltip:"Delete"})]})};var k,z,L;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:"{}",...(L=(z=t.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var P,B,D;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    tooltip: "Click to add a new item"
  }
}`,...(D=(B=a.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var C,N,E;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: "primary"
  }
}`,...(E=(N=s.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var M,A,O;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    variant: "secondary"
  }
}`,...(O=(A=i.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var V,G,W;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    icon: <TrashIcon />,
    "aria-label": "Delete item",
    variant: "destructive",
    tooltip: "Delete this item"
  }
}`,...(W=(G=n.parameters)==null?void 0:G.docs)==null?void 0:W.source}}};var H,R,_;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    variant: "ghost"
  }
}`,...(_=(R=l.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var q,F,J;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    variant: "outline"
  }
}`,...(J=(F=c.parameters)==null?void 0:F.docs)==null?void 0:J.source}}};var K,Q,U;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    size: "sm"
  }
}`,...(U=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;d.parameters={...d.parameters,docs:{...(X=d.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    size: "md"
  }
}`,...(Z=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,oo,ro;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    size: "lg"
  }
}`,...(ro=(oo=m.parameters)==null?void 0:oo.docs)==null?void 0:ro.source}}};var eo,to,ao;u.parameters={...u.parameters,docs:{...(eo=u.parameters)==null?void 0:eo.docs,source:{originalSource:`{
  args: {
    tooltip: "Tooltip on top",
    tooltipPosition: "top"
  }
}`,...(ao=(to=u.parameters)==null?void 0:to.docs)==null?void 0:ao.source}}};var so,io,no;g.parameters={...g.parameters,docs:{...(so=g.parameters)==null?void 0:so.docs,source:{originalSource:`{
  args: {
    tooltip: "Tooltip on bottom",
    tooltipPosition: "bottom"
  }
}`,...(no=(io=g.parameters)==null?void 0:io.docs)==null?void 0:no.source}}};var lo,co,po;x.parameters={...x.parameters,docs:{...(lo=x.parameters)==null?void 0:lo.docs,source:{originalSource:`{
  args: {
    tooltip: "Tooltip on left",
    tooltipPosition: "left"
  },
  decorators: [Story => <div className="ml-32">\r
        <Story />\r
      </div>]
}`,...(po=(co=x.parameters)==null?void 0:co.docs)==null?void 0:po.source}}};var mo,uo,go;v.parameters={...v.parameters,docs:{...(mo=v.parameters)==null?void 0:mo.docs,source:{originalSource:`{
  args: {
    tooltip: "Tooltip on right",
    tooltipPosition: "right"
  }
}`,...(go=(uo=v.parameters)==null?void 0:uo.docs)==null?void 0:go.source}}};var xo,vo,ho;h.parameters={...h.parameters,docs:{...(xo=h.parameters)==null?void 0:xo.docs,source:{originalSource:`{
  render: () => {
    const [loading, setLoading] = useState(false);
    const handleClick = () => {
      setLoading(true);
      setTimeout(() => setLoading(false), 2000);
    };
    return <IconButton icon={<PlusIcon />} aria-label="Add item" loading={loading} onClick={handleClick} tooltip="Click to load" />;
  }
}`,...(ho=(vo=h.parameters)==null?void 0:vo.docs)==null?void 0:ho.source}}};var jo,So,yo;j.parameters={...j.parameters,docs:{...(jo=j.parameters)==null?void 0:jo.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(yo=(So=j.parameters)==null?void 0:So.docs)==null?void 0:yo.source}}};var bo,fo,Io;S.parameters={...S.parameters,docs:{...(bo=S.parameters)==null?void 0:bo.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">\r
      <IconButton icon={<PlusIcon />} aria-label="Primary" variant="primary" tooltip="Primary" />\r
      <IconButton icon={<EditIcon />} aria-label="Secondary" variant="secondary" tooltip="Secondary" />\r
      <IconButton icon={<SettingsIcon />} aria-label="Tertiary" variant="tertiary" tooltip="Tertiary" />\r
      <IconButton icon={<TrashIcon />} aria-label="Destructive" variant="destructive" tooltip="Destructive" />\r
      <IconButton icon={<PlusIcon />} aria-label="Ghost" variant="ghost" tooltip="Ghost" />\r
      <IconButton icon={<EditIcon />} aria-label="Outline" variant="outline" tooltip="Outline" />\r
    </div>
}`,...(Io=(fo=S.parameters)==null?void 0:fo.docs)==null?void 0:Io.source}}};var To,wo,ko;y.parameters={...y.parameters,docs:{...(To=y.parameters)==null?void 0:To.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">\r
      <IconButton icon={<PlusIcon />} aria-label="Small" size="sm" variant="primary" tooltip="Small" />\r
      <IconButton icon={<PlusIcon />} aria-label="Medium" size="md" variant="primary" tooltip="Medium" />\r
      <IconButton icon={<PlusIcon />} aria-label="Large" size="lg" variant="primary" tooltip="Large" />\r
    </div>
}`,...(ko=(wo=y.parameters)==null?void 0:wo.docs)==null?void 0:ko.source}}};var zo,Lo,Po;b.parameters={...b.parameters,docs:{...(zo=b.parameters)==null?void 0:zo.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-1 p-2 border rounded-lg bg-gray-50">\r
      <IconButton icon={<EditIcon />} aria-label="Edit" tooltip="Edit" />\r
      <IconButton icon={<SettingsIcon />} aria-label="Settings" tooltip="Settings" />\r
      <div className="w-px h-6 bg-gray-300 mx-1" />\r
      <IconButton icon={<TrashIcon />} aria-label="Delete" variant="ghost" tooltip="Delete" />\r
    </div>
}`,...(Po=(Lo=b.parameters)==null?void 0:Lo.docs)==null?void 0:Po.source}}};const Wo=["Default","WithTooltip","Primary","Secondary","Destructive","Ghost","Outline","SmallSize","MediumSize","LargeSize","TooltipTop","TooltipBottom","TooltipLeft","TooltipRight","Loading","Disabled","AllVariants","AllSizes","ToolbarExample"];export{y as AllSizes,S as AllVariants,t as Default,n as Destructive,j as Disabled,l as Ghost,m as LargeSize,h as Loading,d as MediumSize,c as Outline,s as Primary,i as Secondary,p as SmallSize,b as ToolbarExample,g as TooltipBottom,x as TooltipLeft,v as TooltipRight,u as TooltipTop,a as WithTooltip,Wo as __namedExportsOrder,Go as default};
