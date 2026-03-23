import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as p}from"./clsx-B-dksMZM.js";import{r as D}from"./index-ZH-6pyQh.js";import{g as L}from"./variants-CIz8xjKx.js";import{B as y}from"./button-BUCKCgZW.js";import{B as K}from"./badge-BVNFVXMp.js";import"./_commonjsHelpers-CqkleIqs.js";import"./render-D3e-BGhm.js";import"./use-active-press-Bj0hdp5d.js";import"./disabled-DXzavEEa.js";const M=D.createContext(null);function f(){const r=D.useContext(M);if(!r)throw new Error("Card subcomponents must be used within a <Card>");return r}function a({children:r,variant:s="default",padding:n="md",onClick:t,href:u,target:N,className:O}){const v=L({variant:s,padding:n,clickable:t!==void 0||u!==void 0}),x=p(v.root(),O),h=e.jsx(M.Provider,{value:v,children:r});return u!==void 0?e.jsx("a",{href:u,...N!==void 0?{target:N}:{},className:x,children:h}):t!==void 0?e.jsx("div",{role:"button",tabIndex:0,onClick:t,onKeyDown:g=>{(g.key==="Enter"||g.key===" ")&&(g.preventDefault(),t())},className:x,children:h}):e.jsx("div",{className:x,children:h})}a.displayName="Card";function U({children:r,image:s,className:n}){const t=f();return e.jsxs("div",{className:p(t.header(),n),children:[s!==void 0&&e.jsx("img",{src:s.src,alt:s.alt,className:t.image(),...s.height!==void 0?{style:{height:s.height}}:{}}),r!=null&&e.jsx("div",{className:t.headerContent(),children:r})]})}U.displayName="Card.Header";function W({children:r,className:s}){const n=f();return e.jsx("div",{className:p(n.body(),s),children:r})}W.displayName="Card.Body";function _({children:r,className:s}){const n=f();return e.jsx("div",{className:p(n.footer(),s),children:r})}_.displayName="Card.Footer";a.Header=U;a.Body=W;a.Footer=_;a.__docgenInfo={description:"",methods:[{name:"Header",docblock:null,modifiers:["static"],params:[{name:"{ children, image, className }: CardHeaderProps",optional:!1,type:{name:"signature",type:"object",raw:`{
  children?: ReactNode;
  image?: CardImageProps;
  className?: string;
}`,signature:{properties:[{key:"children",value:{name:"ReactNode",required:!1}},{key:"image",value:{name:"signature",type:"object",raw:`{
  src: string;
  alt: string;
  height?: string | number;
}`,signature:{properties:[{key:"src",value:{name:"string",required:!0}},{key:"alt",value:{name:"string",required:!0}},{key:"height",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!1}}]},required:!1}},{key:"className",value:{name:"string",required:!1}}]},alias:"CardHeaderProps"}}],returns:null},{name:"Body",docblock:null,modifiers:["static"],params:[{name:"{ children, className }: CardBodyProps",optional:!1,type:{name:"signature",type:"object",raw:`{
  children: ReactNode;
  className?: string;
}`,signature:{properties:[{key:"children",value:{name:"ReactNode",required:!0}},{key:"className",value:{name:"string",required:!1}}]},alias:"CardBodyProps"}}],returns:null},{name:"Footer",docblock:null,modifiers:["static"],params:[{name:"{ children, className }: CardFooterProps",optional:!1,type:{name:"signature",type:"object",raw:`{
  children: ReactNode;
  className?: string;
}`,signature:{properties:[{key:"children",value:{name:"ReactNode",required:!0}},{key:"className",value:{name:"string",required:!1}}]},alias:"CardFooterProps"}}],returns:null}],displayName:"Card",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"default" | "elevated" | "outline"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"elevated"'},{name:"literal",value:'"outline"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},padding:{required:!1,tsType:{name:"union",raw:'"none" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},href:{required:!1,tsType:{name:"string"},description:""},target:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const te={title:"Components/Card",component:a,parameters:{layout:"padded"},argTypes:{variant:{control:"select",options:["default","elevated","outline"]},padding:{control:"select",options:["none","sm","md","lg"]}}},d={render:r=>e.jsx(a,{...r,className:"max-w-sm",children:e.jsx(a.Body,{children:e.jsx("p",{className:"text-sm text-gray-700",children:"This is a simple card with just a body section. It can hold any content."})})}),args:{variant:"default",padding:"md"}},i={render:()=>e.jsxs(a,{className:"max-w-sm",children:[e.jsxs(a.Header,{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-base font-semibold text-gray-900",children:"Card Title"}),e.jsx(K,{variant:"success",label:"Active",dot:!0,size:"sm"})]}),e.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"Optional subtitle or description"})]}),e.jsx(a.Body,{children:e.jsx("p",{className:"text-sm text-gray-700",children:"This card has a header, body, and footer. Use these subcomponents to structure your card content logically."})}),e.jsx(a.Footer,{children:e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx(y,{variant:"tertiary",size:"sm",children:"Cancel"}),e.jsx(y,{variant:"primary",size:"sm",children:"Save"})]})})]}),args:{}},o={render:()=>e.jsxs(a,{className:"max-w-sm",children:[e.jsxs(a.Header,{image:{src:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop",alt:"Mountain landscape",height:200},children:[e.jsx("h3",{className:"text-base font-semibold text-gray-900",children:"Mountain View"}),e.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"A breathtaking view of the mountains."})]}),e.jsx(a.Body,{children:e.jsx("p",{className:"text-sm text-gray-700",children:"Full-width image in the header, followed by padded content below."})}),e.jsx(a.Footer,{children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-xs text-gray-400",children:"Posted 2 days ago"}),e.jsx(y,{variant:"primary",size:"sm",children:"Read more"})]})})]}),args:{}},l={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(a,{onClick:()=>alert("Card clicked!"),className:"max-w-xs",children:e.jsxs(a.Body,{children:[e.jsx("h3",{className:"text-base font-semibold text-gray-900",children:"Clickable Card"}),e.jsxs("p",{className:"text-sm text-gray-500 mt-1",children:["Click anywhere on this card. Uses ",e.jsx("code",{children:'role="button"'})," with keyboard support."]})]})}),e.jsx(a,{href:"#",className:"max-w-xs",children:e.jsxs(a.Body,{children:[e.jsx("h3",{className:"text-base font-semibold text-gray-900",children:"Link Card"}),e.jsxs("p",{className:"text-sm text-gray-500 mt-1",children:["This card renders as an ",e.jsx("code",{children:"<a>"})," element for navigation."]})]})})]}),args:{}},c={render:()=>e.jsx("div",{className:"flex flex-wrap gap-4",children:["default","elevated","outline"].map(r=>e.jsx(a,{variant:r,className:"w-56",children:e.jsxs(a.Body,{children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-900 capitalize",children:r}),e.jsxs("p",{className:"text-sm text-gray-500 mt-1",children:["Card variant: ",r]})]})},r))}),args:{}},m={render:()=>e.jsx("div",{className:"flex flex-col gap-4 max-w-sm",children:["sm","md","lg"].map(r=>e.jsxs(a,{padding:r,variant:"outline",children:[e.jsx(a.Header,{children:e.jsxs("h3",{className:"text-sm font-semibold text-gray-900",children:["Padding: ",r]})}),e.jsx(a.Body,{children:e.jsxs("p",{className:"text-sm text-gray-700",children:["Body content with ",r," padding."]})}),e.jsx(a.Footer,{children:e.jsxs("p",{className:"text-xs text-gray-400",children:["Footer with ",r," padding"]})})]},r))}),args:{}};var C,j,b;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <Card {...args} className="max-w-sm">\r
      <Card.Body>\r
        <p className="text-sm text-gray-700">\r
          This is a simple card with just a body section. It can hold any content.\r
        </p>\r
      </Card.Body>\r
    </Card>,
  args: {
    variant: "default",
    padding: "md"
  }
}`,...(b=(j=d.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var w,B,k;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Card className="max-w-sm">\r
      <Card.Header>\r
        <div className="flex items-center justify-between">\r
          <h3 className="text-base font-semibold text-gray-900">Card Title</h3>\r
          <Badge variant="success" label="Active" dot size="sm" />\r
        </div>\r
        <p className="text-sm text-gray-500 mt-1">Optional subtitle or description</p>\r
      </Card.Header>\r
      <Card.Body>\r
        <p className="text-sm text-gray-700">\r
          This card has a header, body, and footer. Use these subcomponents to structure\r
          your card content logically.\r
        </p>\r
      </Card.Body>\r
      <Card.Footer>\r
        <div className="flex justify-end gap-2">\r
          <Button variant="tertiary" size="sm">Cancel</Button>\r
          <Button variant="primary" size="sm">Save</Button>\r
        </div>\r
      </Card.Footer>\r
    </Card>,
  args: {}
}`,...(k=(B=i.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var F,q,H;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Card className="max-w-sm">\r
      <Card.Header image={{
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop",
      alt: "Mountain landscape",
      height: 200
    }}>\r
        <h3 className="text-base font-semibold text-gray-900">Mountain View</h3>\r
        <p className="text-sm text-gray-500 mt-1">A breathtaking view of the mountains.</p>\r
      </Card.Header>\r
      <Card.Body>\r
        <p className="text-sm text-gray-700">\r
          Full-width image in the header, followed by padded content below.\r
        </p>\r
      </Card.Body>\r
      <Card.Footer>\r
        <div className="flex justify-between items-center">\r
          <span className="text-xs text-gray-400">Posted 2 days ago</span>\r
          <Button variant="primary" size="sm">Read more</Button>\r
        </div>\r
      </Card.Footer>\r
    </Card>,
  args: {}
}`,...(H=(q=o.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var T,P,S;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">\r
      <Card onClick={() => alert("Card clicked!")} className="max-w-xs">\r
        <Card.Body>\r
          <h3 className="text-base font-semibold text-gray-900">Clickable Card</h3>\r
          <p className="text-sm text-gray-500 mt-1">\r
            Click anywhere on this card. Uses <code>role="button"</code> with keyboard support.\r
          </p>\r
        </Card.Body>\r
      </Card>\r
\r
      <Card href="#" className="max-w-xs">\r
        <Card.Body>\r
          <h3 className="text-base font-semibold text-gray-900">Link Card</h3>\r
          <p className="text-sm text-gray-500 mt-1">\r
            This card renders as an <code>&lt;a&gt;</code> element for navigation.\r
          </p>\r
        </Card.Body>\r
      </Card>\r
    </div>,
  args: {}
}`,...(S=(P=l.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var z,R,I;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">\r
      {(["default", "elevated", "outline"] as const).map(variant => <Card key={variant} variant={variant} className="w-56">\r
          <Card.Body>\r
            <h3 className="text-sm font-semibold text-gray-900 capitalize">{variant}</h3>\r
            <p className="text-sm text-gray-500 mt-1">Card variant: {variant}</p>\r
          </Card.Body>\r
        </Card>)}\r
    </div>,
  args: {}
}`,...(I=(R=c.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var A,V,E;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 max-w-sm">\r
      {(["sm", "md", "lg"] as const).map(padding => <Card key={padding} padding={padding} variant="outline">\r
          <Card.Header>\r
            <h3 className="text-sm font-semibold text-gray-900">Padding: {padding}</h3>\r
          </Card.Header>\r
          <Card.Body>\r
            <p className="text-sm text-gray-700">Body content with {padding} padding.</p>\r
          </Card.Body>\r
          <Card.Footer>\r
            <p className="text-xs text-gray-400">Footer with {padding} padding</p>\r
          </Card.Footer>\r
        </Card>)}\r
    </div>,
  args: {}
}`,...(E=(V=m.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};const ne=["Default","WithSubcomponents","WithImageHeader","Clickable","AllVariants","PaddingSizes"];export{c as AllVariants,l as Clickable,d as Default,m as PaddingSizes,o as WithImageHeader,i as WithSubcomponents,ne as __namedExportsOrder,te as default};
