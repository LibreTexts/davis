import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as kr}from"./index-ZH-6pyQh.js";import{B as e}from"./button-BUCKCgZW.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";import"./render-D3e-BGhm.js";import"./use-active-press-Bj0hdp5d.js";import"./disabled-DXzavEEa.js";import"./variants-CIz8xjKx.js";const jr=()=>r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-full h-full",children:[r.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),r.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),Lr=()=>r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-full h-full",children:[r.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),r.jsx("polyline",{points:"12 5 19 12 12 19"})]}),zr=()=>r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"w-full h-full",children:[r.jsx("polyline",{points:"3 6 5 6 21 6"}),r.jsx("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),Mr={title:"Components/Button",component:e,args:{children:"Button"},argTypes:{variant:{control:"select",options:["primary","secondary","tertiary","destructive","ghost","outline"]},size:{control:"select",options:["sm","md","lg"]},iconPosition:{control:"select",options:["left","right"]}}},n={args:{variant:"primary",children:"Primary Button"}},t={args:{variant:"secondary",children:"Secondary Button"}},s={args:{variant:"tertiary",children:"Tertiary Button"}},a={args:{variant:"destructive",children:"Delete",icon:r.jsx(zr,{})}},o={args:{variant:"ghost",children:"Ghost Button"}},i={args:{variant:"outline",children:"Outline Button"}},c={args:{size:"sm",children:"Small Button"}},l={args:{size:"md",children:"Medium Button"}},d={args:{size:"lg",children:"Large Button"}},u={args:{icon:r.jsx(jr,{}),children:"Add Item"}},m={args:{icon:r.jsx(Lr,{}),iconPosition:"right",children:"Continue"}},p={args:{icon:r.jsx(jr,{}),children:void 0,"aria-label":"Add item"}},g={render:()=>{const[S,f]=kr.useState(!1),wr=()=>{f(!0),setTimeout(()=>f(!1),2e3)};return r.jsx(e,{loading:S,onClick:wr,children:S?"Saving...":"Save Changes"})}},h={args:{disabled:!0,children:"Disabled"}},v={args:{fullWidth:!0,children:"Full Width Button"}},x={args:{as:"a",href:"https://libretexts.org",target:"_blank",children:"Visit LibreTexts",icon:r.jsx(Lr,{}),iconPosition:"right"}},B={render:()=>r.jsxs("div",{className:"flex flex-wrap gap-4",children:[r.jsx(e,{variant:"primary",children:"Primary"}),r.jsx(e,{variant:"secondary",children:"Secondary"}),r.jsx(e,{variant:"tertiary",children:"Tertiary"}),r.jsx(e,{variant:"destructive",children:"Destructive"}),r.jsx(e,{variant:"ghost",children:"Ghost"}),r.jsx(e,{variant:"outline",children:"Outline"})]})},y={render:()=>r.jsxs("div",{className:"flex items-center gap-4",children:[r.jsx(e,{size:"sm",children:"Small"}),r.jsx(e,{size:"md",children:"Medium"}),r.jsx(e,{size:"lg",children:"Large"})]})};var j,L,w;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    children: "Primary Button"
  }
}`,...(w=(L=n.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var k,z,I;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    children: "Secondary Button"
  }
}`,...(I=(z=t.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var b,P,A;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: "tertiary",
    children: "Tertiary Button"
  }
}`,...(A=(P=s.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var C,T,W;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: "destructive",
    children: "Delete",
    icon: <TrashIcon />
  }
}`,...(W=(T=a.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var D,O,M;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: "ghost",
    children: "Ghost Button"
  }
}`,...(M=(O=o.parameters)==null?void 0:O.docs)==null?void 0:M.source}}};var N,G,R;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    children: "Outline Button"
  }
}`,...(R=(G=i.parameters)==null?void 0:G.docs)==null?void 0:R.source}}};var V,F,_;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    size: "sm",
    children: "Small Button"
  }
}`,...(_=(F=c.parameters)==null?void 0:F.docs)==null?void 0:_.source}}};var E,H,q;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    size: "md",
    children: "Medium Button"
  }
}`,...(q=(H=l.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};var J,K,Q;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    size: "lg",
    children: "Large Button"
  }
}`,...(Q=(K=d.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    icon: <PlusIcon />,
    children: "Add Item"
  }
}`,...(Y=(X=u.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,rr;m.parameters={...m.parameters,docs:{...(Z=m.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    icon: <ArrowRightIcon />,
    iconPosition: "right",
    children: "Continue"
  }
}`,...(rr=($=m.parameters)==null?void 0:$.docs)==null?void 0:rr.source}}};var er,nr,tr;p.parameters={...p.parameters,docs:{...(er=p.parameters)==null?void 0:er.docs,source:{originalSource:`{
  args: {
    icon: <PlusIcon />,
    children: undefined,
    "aria-label": "Add item"
  }
}`,...(tr=(nr=p.parameters)==null?void 0:nr.docs)==null?void 0:tr.source}}};var sr,ar,or;g.parameters={...g.parameters,docs:{...(sr=g.parameters)==null?void 0:sr.docs,source:{originalSource:`{
  render: () => {
    const [loading, setLoading] = useState(false);
    const handleClick = () => {
      setLoading(true);
      setTimeout(() => setLoading(false), 2000);
    };
    return <Button loading={loading} onClick={handleClick}>\r
        {loading ? "Saving..." : "Save Changes"}\r
      </Button>;
  }
}`,...(or=(ar=g.parameters)==null?void 0:ar.docs)==null?void 0:or.source}}};var ir,cr,lr;h.parameters={...h.parameters,docs:{...(ir=h.parameters)==null?void 0:ir.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: "Disabled"
  }
}`,...(lr=(cr=h.parameters)==null?void 0:cr.docs)==null?void 0:lr.source}}};var dr,ur,mr;v.parameters={...v.parameters,docs:{...(dr=v.parameters)==null?void 0:dr.docs,source:{originalSource:`{
  args: {
    fullWidth: true,
    children: "Full Width Button"
  }
}`,...(mr=(ur=v.parameters)==null?void 0:ur.docs)==null?void 0:mr.source}}};var pr,gr,hr;x.parameters={...x.parameters,docs:{...(pr=x.parameters)==null?void 0:pr.docs,source:{originalSource:`{
  args: {
    as: "a",
    href: "https://libretexts.org",
    target: "_blank",
    children: "Visit LibreTexts",
    icon: <ArrowRightIcon />,
    iconPosition: "right"
  }
}`,...(hr=(gr=x.parameters)==null?void 0:gr.docs)==null?void 0:hr.source}}};var vr,xr,Br;B.parameters={...B.parameters,docs:{...(vr=B.parameters)==null?void 0:vr.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">\r
      <Button variant="primary">Primary</Button>\r
      <Button variant="secondary">Secondary</Button>\r
      <Button variant="tertiary">Tertiary</Button>\r
      <Button variant="destructive">Destructive</Button>\r
      <Button variant="ghost">Ghost</Button>\r
      <Button variant="outline">Outline</Button>\r
    </div>
}`,...(Br=(xr=B.parameters)==null?void 0:xr.docs)==null?void 0:Br.source}}};var yr,Sr,fr;y.parameters={...y.parameters,docs:{...(yr=y.parameters)==null?void 0:yr.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">\r
      <Button size="sm">Small</Button>\r
      <Button size="md">Medium</Button>\r
      <Button size="lg">Large</Button>\r
    </div>
}`,...(fr=(Sr=y.parameters)==null?void 0:Sr.docs)==null?void 0:fr.source}}};const Nr=["Primary","Secondary","Tertiary","Destructive","Ghost","Outline","SmallSize","MediumSize","LargeSize","WithIconLeft","WithIconRight","IconOnly","Loading","Disabled","FullWidth","AsLink","AllVariants","AllSizes"];export{y as AllSizes,B as AllVariants,x as AsLink,a as Destructive,h as Disabled,v as FullWidth,o as Ghost,p as IconOnly,d as LargeSize,g as Loading,l as MediumSize,i as Outline,n as Primary,t as Secondary,c as SmallSize,s as Tertiary,u as WithIconLeft,m as WithIconRight,Nr as __namedExportsOrder,Mr as default};
