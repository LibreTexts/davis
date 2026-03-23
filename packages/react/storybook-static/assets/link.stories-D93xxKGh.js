import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as N}from"./clsx-B-dksMZM.js";import{r as He}from"./index-ZH-6pyQh.js";import"./_commonjsHelpers-CqkleIqs.js";const Ue={default:"text-primary hover:text-primary-600",muted:"text-gray-500 hover:text-gray-700",danger:"text-danger hover:text-red-700"},We={always:"underline underline-offset-2",hover:"hover:underline underline-offset-2",none:"no-underline"},D={sm:"text-sm",md:"text-base",lg:"text-lg"};function _e({className:a}){return e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:a,"aria-hidden":"true",children:[e.jsx("path",{fillRule:"evenodd",d:"M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z",clipRule:"evenodd"}),e.jsx("path",{fillRule:"evenodd",d:"M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z",clipRule:"evenodd"})]})}const r=He.forwardRef(({children:a,href:n,variant:Te="default",underline:Ce="hover",size:S="md",external:Ie=!1,showExternalIcon:Pe=!0,icon:s,className:w,disabled:Ee=!1,...Re},qe)=>{const z=Ie||n.startsWith("http://")||n.startsWith("https://")||n.startsWith("//"),Be=z?{target:"_blank",rel:"noopener noreferrer"}:{};return Ee?e.jsxs("span",{className:N("inline-flex items-center gap-1",D[S],"text-gray-400 cursor-not-allowed",w),"aria-disabled":"true",children:[s&&e.jsx("span",{className:"flex-shrink-0 w-4 h-4",children:s}),a]}):e.jsxs("a",{ref:qe,href:n,className:N("inline-flex items-center gap-1","transition-colors duration-150","focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm",Ue[Te],We[Ce],D[S],w),...Be,...Re,children:[s&&e.jsx("span",{className:"flex-shrink-0 w-4 h-4",children:s}),a,z&&Pe&&e.jsx(_e,{className:"flex-shrink-0 w-3.5 h-3.5 ml-0.5"})]})});r.displayName="Link";r.__docgenInfo={description:"",methods:[],displayName:"Link",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Link content"},href:{required:!0,tsType:{name:"string"},description:"URL to navigate to"},variant:{required:!1,tsType:{name:"union",raw:'"default" | "muted" | "danger"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"muted"'},{name:"literal",value:'"danger"'}]},description:"Visual variant",defaultValue:{value:'"default"',computed:!1}},underline:{required:!1,tsType:{name:"union",raw:'"always" | "hover" | "none"',elements:[{name:"literal",value:'"always"'},{name:"literal",value:'"hover"'},{name:"literal",value:'"none"'}]},description:"Underline behavior",defaultValue:{value:'"hover"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"Size of the link text",defaultValue:{value:'"md"',computed:!1}},external:{required:!1,tsType:{name:"boolean"},description:"Mark as external link (opens in new tab, shows icon)",defaultValue:{value:"false",computed:!1}},showExternalIcon:{required:!1,tsType:{name:"boolean"},description:"Show external link icon (only when external is true)",defaultValue:{value:"true",computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:"Icon to display before the text"},className:{required:!1,tsType:{name:"string"},description:"Additional class names"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disable the link",defaultValue:{value:"false",computed:!1}}}};const Fe=()=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"w-full h-full",children:[e.jsx("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),e.jsx("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"})]}),Qe={title:"Components/Link",component:r,args:{children:"Click here",href:"/example"},argTypes:{variant:{control:"select",options:["default","muted","danger"]},underline:{control:"select",options:["always","hover","none"]},size:{control:"select",options:["sm","md","lg"]}}},t={args:{children:"Go to Dashboard",href:"/dashboard"}},i={args:{children:"Visit LibreTexts",href:"https://libretexts.org"}},l={args:{children:"Visit LibreTexts",href:"https://libretexts.org",showExternalIcon:!1}},o={args:{children:"Primary Link",href:"/example",variant:"default"}},d={args:{children:"Muted Link",href:"/example",variant:"muted"}},c={args:{children:"Delete Account",href:"/delete",variant:"danger"}},m={args:{children:"Always underlined",href:"/example",underline:"always"}},u={args:{children:"Hover to see underline",href:"/example",underline:"hover"}},p={args:{children:"No underline",href:"/example",underline:"none"}},h={args:{children:"Small link",href:"/example",size:"sm"}},f={args:{children:"Medium link",href:"/example",size:"md"}},x={args:{children:"Large link",href:"/example",size:"lg"}},g={args:{children:"Read Documentation",href:"/docs",icon:e.jsx(Fe,{})}},v={args:{children:"Disabled link",href:"/example",disabled:!0}},k={render:()=>e.jsxs("div",{className:"flex gap-6",children:[e.jsx(r,{href:"/example",variant:"default",children:"Default"}),e.jsx(r,{href:"/example",variant:"muted",children:"Muted"}),e.jsx(r,{href:"/example",variant:"danger",children:"Danger"})]})},L={render:()=>e.jsxs("div",{className:"flex items-baseline gap-6",children:[e.jsx(r,{href:"/example",size:"sm",children:"Small"}),e.jsx(r,{href:"/example",size:"md",children:"Medium"}),e.jsx(r,{href:"/example",size:"lg",children:"Large"})]})},y={render:()=>e.jsxs("p",{className:"text-gray-700 max-w-prose",children:["By using this service, you agree to our"," ",e.jsx(r,{href:"/terms",children:"Terms of Service"})," and"," ",e.jsx(r,{href:"/privacy",children:"Privacy Policy"}),". For more information, please visit our"," ",e.jsx(r,{href:"https://support.libretexts.org",external:!0,children:"Support Center"}),"."]})},b={render:()=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx(r,{href:"/about",variant:"muted",size:"sm",underline:"none",children:"About"}),e.jsx(r,{href:"/blog",variant:"muted",size:"sm",underline:"none",children:"Blog"}),e.jsx(r,{href:"/careers",variant:"muted",size:"sm",underline:"none",children:"Careers"}),e.jsx(r,{href:"/contact",variant:"muted",size:"sm",underline:"none",children:"Contact"})]})},j={render:()=>e.jsxs("nav",{className:"flex items-center gap-2 text-sm",children:[e.jsx(r,{href:"/",variant:"muted",underline:"hover",children:"Home"}),e.jsx("span",{className:"text-gray-400",children:"/"}),e.jsx(r,{href:"/projects",variant:"muted",underline:"hover",children:"Projects"}),e.jsx("span",{className:"text-gray-400",children:"/"}),e.jsx("span",{className:"text-gray-900",children:"Current Project"})]})};var A,V,M;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: "Go to Dashboard",
    href: "/dashboard"
  }
}`,...(M=(V=t.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var T,C,I;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: "Visit LibreTexts",
    href: "https://libretexts.org"
  }
}`,...(I=(C=i.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var P,E,R;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    children: "Visit LibreTexts",
    href: "https://libretexts.org",
    showExternalIcon: false
  }
}`,...(R=(E=l.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var q,B,H;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    children: "Primary Link",
    href: "/example",
    variant: "default"
  }
}`,...(H=(B=o.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var U,W,_;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    children: "Muted Link",
    href: "/example",
    variant: "muted"
  }
}`,...(_=(W=d.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var F,G,O;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    children: "Delete Account",
    href: "/delete",
    variant: "danger"
  }
}`,...(O=(G=c.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};var J,K,Q;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    children: "Always underlined",
    href: "/example",
    underline: "always"
  }
}`,...(Q=(K=m.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    children: "Hover to see underline",
    href: "/example",
    underline: "hover"
  }
}`,...(Z=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,re;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    children: "No underline",
    href: "/example",
    underline: "none"
  }
}`,...(re=(ee=p.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,ne,se;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    children: "Small link",
    href: "/example",
    size: "sm"
  }
}`,...(se=(ne=h.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var te,ie,le;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    children: "Medium link",
    href: "/example",
    size: "md"
  }
}`,...(le=(ie=f.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var oe,de,ce;x.parameters={...x.parameters,docs:{...(oe=x.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    children: "Large link",
    href: "/example",
    size: "lg"
  }
}`,...(ce=(de=x.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var me,ue,pe;g.parameters={...g.parameters,docs:{...(me=g.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    children: "Read Documentation",
    href: "/docs",
    icon: <BookIcon />
  }
}`,...(pe=(ue=g.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var he,fe,xe;v.parameters={...v.parameters,docs:{...(he=v.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    children: "Disabled link",
    href: "/example",
    disabled: true
  }
}`,...(xe=(fe=v.parameters)==null?void 0:fe.docs)==null?void 0:xe.source}}};var ge,ve,ke;k.parameters={...k.parameters,docs:{...(ge=k.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => <div className="flex gap-6">\r
      <Link href="/example" variant="default">Default</Link>\r
      <Link href="/example" variant="muted">Muted</Link>\r
      <Link href="/example" variant="danger">Danger</Link>\r
    </div>
}`,...(ke=(ve=k.parameters)==null?void 0:ve.docs)==null?void 0:ke.source}}};var Le,ye,be;L.parameters={...L.parameters,docs:{...(Le=L.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  render: () => <div className="flex items-baseline gap-6">\r
      <Link href="/example" size="sm">Small</Link>\r
      <Link href="/example" size="md">Medium</Link>\r
      <Link href="/example" size="lg">Large</Link>\r
    </div>
}`,...(be=(ye=L.parameters)==null?void 0:ye.docs)==null?void 0:be.source}}};var je,Se,we;y.parameters={...y.parameters,docs:{...(je=y.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: () => <p className="text-gray-700 max-w-prose">\r
      By using this service, you agree to our{" "}\r
      <Link href="/terms">Terms of Service</Link> and{" "}\r
      <Link href="/privacy">Privacy Policy</Link>. For more information,\r
      please visit our{" "}\r
      <Link href="https://support.libretexts.org" external>\r
        Support Center\r
      </Link>.\r
    </p>
}`,...(we=(Se=y.parameters)==null?void 0:Se.docs)==null?void 0:we.source}}};var ze,Ne,De;b.parameters={...b.parameters,docs:{...(ze=b.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">\r
      <Link href="/about" variant="muted" size="sm" underline="none">About</Link>\r
      <Link href="/blog" variant="muted" size="sm" underline="none">Blog</Link>\r
      <Link href="/careers" variant="muted" size="sm" underline="none">Careers</Link>\r
      <Link href="/contact" variant="muted" size="sm" underline="none">Contact</Link>\r
    </div>
}`,...(De=(Ne=b.parameters)==null?void 0:Ne.docs)==null?void 0:De.source}}};var Ae,Ve,Me;j.parameters={...j.parameters,docs:{...(Ae=j.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  render: () => <nav className="flex items-center gap-2 text-sm">\r
      <Link href="/" variant="muted" underline="hover">Home</Link>\r
      <span className="text-gray-400">/</span>\r
      <Link href="/projects" variant="muted" underline="hover">Projects</Link>\r
      <span className="text-gray-400">/</span>\r
      <span className="text-gray-900">Current Project</span>\r
    </nav>
}`,...(Me=(Ve=j.parameters)==null?void 0:Ve.docs)==null?void 0:Me.source}}};const Xe=["Default","External","ExternalNoIcon","VariantDefault","VariantMuted","VariantDanger","UnderlineAlways","UnderlineHover","UnderlineNone","SizeSmall","SizeMedium","SizeLarge","WithIcon","Disabled","AllVariants","AllSizes","InParagraph","FooterLinks","Breadcrumbs"];export{L as AllSizes,k as AllVariants,j as Breadcrumbs,t as Default,v as Disabled,i as External,l as ExternalNoIcon,b as FooterLinks,y as InParagraph,x as SizeLarge,f as SizeMedium,h as SizeSmall,m as UnderlineAlways,u as UnderlineHover,p as UnderlineNone,c as VariantDanger,o as VariantDefault,d as VariantMuted,g as WithIcon,Xe as __namedExportsOrder,Qe as default};
