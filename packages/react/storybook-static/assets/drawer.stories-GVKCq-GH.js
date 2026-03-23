import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-ZH-6pyQh.js";import{B as s}from"./button-BUCKCgZW.js";import{c as l}from"./clsx-B-dksMZM.js";import{u as L}from"./davis-context-CArXUcbY.js";import{l as P}from"./variants-CIz8xjKx.js";import{h as I,L as E,z as A,Q as Z}from"./dialog-BJBhSULu.js";import{I as _}from"./input-CZwUJk3H.js";import{S as M}from"./select-DHrghviD.js";import"./_commonjsHelpers-CqkleIqs.js";import"./render-D3e-BGhm.js";import"./use-active-press-Bj0hdp5d.js";import"./disabled-DXzavEEa.js";import"./keyboard-D6fFT7n5.js";import"./use-event-listener-DR6wmqP5.js";import"./portal-DbAe3Y2t.js";import"./focus-management-CShi9XEB.js";import"./index-BP-xEy0R.js";import"./index-DVyBTwwr.js";import"./use-inert-others-Dx8rCfB6.js";import"./use-tab-direction-CQPT_Yl1.js";import"./hidden-BV378ZHv.js";import"./close-provider-B-utbKzN.js";import"./open-closed-kU2EydzO.js";import"./description-CYuhol84.js";import"./use-is-mounted-Ctfw9wRL.js";import"./active-element-history-D38dlw4t.js";const k=o.createContext(null);function Q(){const n=o.useContext(k);if(!n)throw new Error("Drawer subcomponents must be used within a Drawer");return n}function r({open:n,onClose:a,children:t,side:p="right",size:H="md",className:q}){const{standalone:R}=L(),m=e.jsxs(I,{open:n,onClose:a,className:"relative z-50",children:[e.jsx(E,{transition:!0,className:l("fixed inset-0 bg-black/50","transition duration-300 ease-out","data-[closed]:opacity-0","data-[enter]:opacity-100")}),e.jsx("div",{className:"fixed inset-0 overflow-hidden",children:e.jsx("div",{className:l("absolute inset-y-0 flex max-w-full",p==="right"?"right-0":"left-0"),children:e.jsx(A,{transition:!0,className:l("transition duration-300 ease-out",p==="right"?"data-[closed]:translate-x-full data-[enter]:translate-x-0":"data-[closed]:-translate-x-full data-[enter]:translate-x-0",P({side:p,size:H}),q),children:t})})})]});return e.jsx(k.Provider,{value:{onClose:()=>a(!1)},children:R?e.jsx("div",{className:"davis",children:m}):m})}r.displayName="Drawer";function B({children:n,className:a}){return e.jsx("div",{className:l("flex items-center justify-between px-6 py-4 border-b border-gray-200 shrink-0",a),children:n})}B.displayName="Drawer.Header";function T({children:n,className:a}){return e.jsx(Z,{className:l("text-lg font-semibold text-gray-900",a),children:n})}T.displayName="Drawer.Title";function F({children:n,className:a}){return e.jsx("div",{className:l("flex-1 overflow-y-auto px-6 py-4",a),children:n})}F.displayName="Drawer.Body";function O({children:n,className:a}){return e.jsx("div",{className:l("flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-200 shrink-0",a),children:n})}O.displayName="Drawer.Footer";function z({className:n,"aria-label":a="Close drawer"}){const{onClose:t}=Q();return e.jsx("button",{type:"button",onClick:t,"aria-label":a,className:l("rounded-md p-1 text-gray-400 hover:text-gray-500 hover:bg-gray-100","focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2","transition-colors duration-150",n),children:e.jsx(U,{className:"size-5","aria-hidden":"true"})})}z.displayName="Drawer.Close";function U({className:n}){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:n,"aria-hidden":"true",children:e.jsx("path",{d:"M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"})})}r.Header=B;r.Title=T;r.Body=F;r.Footer=O;r.Close=z;r.__docgenInfo={description:"",methods:[{name:"Header",docblock:null,modifiers:["static"],params:[{name:"{ children, className }: DrawerHeaderProps",optional:!1,type:{name:"signature",type:"object",raw:`{\r
  children: ReactNode;\r
  className?: string;\r
}`,signature:{properties:[{key:"children",value:{name:"ReactNode",required:!0}},{key:"className",value:{name:"string",required:!1}}]},alias:"DrawerHeaderProps"}}],returns:null},{name:"Title",docblock:null,modifiers:["static"],params:[{name:"{ children, className }: DrawerTitleProps",optional:!1,type:{name:"signature",type:"object",raw:`{\r
  children: ReactNode;\r
  className?: string;\r
}`,signature:{properties:[{key:"children",value:{name:"ReactNode",required:!0}},{key:"className",value:{name:"string",required:!1}}]},alias:"DrawerTitleProps"}}],returns:null},{name:"Body",docblock:null,modifiers:["static"],params:[{name:"{ children, className }: DrawerBodyProps",optional:!1,type:{name:"signature",type:"object",raw:`{\r
  children: ReactNode;\r
  className?: string;\r
}`,signature:{properties:[{key:"children",value:{name:"ReactNode",required:!0}},{key:"className",value:{name:"string",required:!1}}]},alias:"DrawerBodyProps"}}],returns:null},{name:"Footer",docblock:null,modifiers:["static"],params:[{name:"{ children, className }: DrawerFooterProps",optional:!1,type:{name:"signature",type:"object",raw:`{\r
  children: ReactNode;\r
  className?: string;\r
}`,signature:{properties:[{key:"children",value:{name:"ReactNode",required:!0}},{key:"className",value:{name:"string",required:!1}}]},alias:"DrawerFooterProps"}}],returns:null},{name:"Close",docblock:null,modifiers:["static"],params:[{name:`{\r
  className,\r
  "aria-label": ariaLabel = "Close drawer",\r
}: DrawerCloseProps`,optional:!1,type:{name:"signature",type:"object",raw:`{\r
  className?: string;\r
  "aria-label"?: string;\r
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"aria-label",value:{name:"string",required:!1}}]},alias:"DrawerCloseProps"}}],returns:null}],displayName:"Drawer",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},side:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"right"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg" | "full"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"full"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const De={title:"Components/Drawer",component:r,parameters:{layout:"centered"}},i={render:()=>{const[n,a]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>a(!0),children:"Open Drawer"}),e.jsxs(r,{open:n,onClose:a,children:[e.jsxs(r.Header,{children:[e.jsx(r.Title,{children:"Drawer Title"}),e.jsx(r.Close,{})]}),e.jsx(r.Body,{children:e.jsx("p",{className:"text-sm text-gray-600",children:"Drawer content goes here. This slides in from the right side of the screen."})}),e.jsxs(r.Footer,{children:[e.jsx(s,{variant:"outline",onClick:()=>a(!1),children:"Cancel"}),e.jsx(s,{onClick:()=>a(!1),children:"Save"})]})]})]})},args:{}},c={render:()=>{const[n,a]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>a(!0),children:"Open Left Drawer"}),e.jsxs(r,{open:n,onClose:a,side:"left",children:[e.jsxs(r.Header,{children:[e.jsx(r.Title,{children:"Left Drawer"}),e.jsx(r.Close,{})]}),e.jsx(r.Body,{children:e.jsx("p",{className:"text-sm text-gray-600",children:"This drawer slides in from the left side."})}),e.jsx(r.Footer,{children:e.jsx(s,{onClick:()=>a(!1),children:"Close"})})]})]})},args:{}},f=["sm","md","lg","full"],d={render:()=>{const[n,a]=o.useState(null);return e.jsxs("div",{className:"flex flex-wrap gap-3",children:[f.map(t=>e.jsx(s,{variant:"outline",onClick:()=>a(t),children:t.toUpperCase()},t)),f.map(t=>e.jsxs(r,{open:n===t,onClose:()=>a(null),size:t,children:[e.jsxs(r.Header,{children:[e.jsxs(r.Title,{children:["Size: ",t]}),e.jsx(r.Close,{})]}),e.jsx(r.Body,{children:e.jsxs("p",{className:"text-sm text-gray-600",children:["This drawer uses the ",e.jsx("strong",{children:t})," size variant."]})}),e.jsx(r.Footer,{children:e.jsx(s,{onClick:()=>a(null),children:"Close"})})]},t))]})},args:{}},u={render:()=>{const[n,a]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"outline",onClick:()=>a(!0),children:"Filters"}),e.jsxs(r,{open:n,onClose:a,size:"sm",children:[e.jsxs(r.Header,{children:[e.jsx(r.Title,{children:"Filter Results"}),e.jsx(r.Close,{})]}),e.jsx(r.Body,{children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(_,{name:"search",label:"Search",placeholder:"Search..."}),e.jsx(M,{name:"status",label:"Status",placeholder:"Select Status",options:[{value:"all",label:"All"},{value:"active",label:"Active"},{value:"inactive",label:"Inactive"}]})]})}),e.jsxs(r.Footer,{children:[e.jsx(s,{variant:"outline",onClick:()=>a(!1),children:"Reset"}),e.jsx(s,{onClick:()=>a(!1),children:"Apply Filters"})]})]})]})},args:{}};var w,x,h;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>\r
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>\r
        <Drawer open={open} onClose={setOpen}>\r
          <Drawer.Header>\r
            <Drawer.Title>Drawer Title</Drawer.Title>\r
            <Drawer.Close />\r
          </Drawer.Header>\r
          <Drawer.Body>\r
            <p className="text-sm text-gray-600">\r
              Drawer content goes here. This slides in from the right side of the screen.\r
            </p>\r
          </Drawer.Body>\r
          <Drawer.Footer>\r
            <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>\r
            <Button onClick={() => setOpen(false)}>Save</Button>\r
          </Drawer.Footer>\r
        </Drawer>\r
      </>;
  },
  args: {}
}`,...(h=(x=i.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var g,D,y;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>\r
        <Button onClick={() => setOpen(true)}>Open Left Drawer</Button>\r
        <Drawer open={open} onClose={setOpen} side="left">\r
          <Drawer.Header>\r
            <Drawer.Title>Left Drawer</Drawer.Title>\r
            <Drawer.Close />\r
          </Drawer.Header>\r
          <Drawer.Body>\r
            <p className="text-sm text-gray-600">\r
              This drawer slides in from the left side.\r
            </p>\r
          </Drawer.Body>\r
          <Drawer.Footer>\r
            <Button onClick={() => setOpen(false)}>Close</Button>\r
          </Drawer.Footer>\r
        </Drawer>\r
      </>;
  },
  args: {}
}`,...(y=(D=c.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var v,j,C;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const [openSize, setOpenSize] = useState<string | null>(null);
    return <div className="flex flex-wrap gap-3">\r
        {SIZES.map(size => <Button key={size} variant="outline" onClick={() => setOpenSize(size)}>\r
            {size.toUpperCase()}\r
          </Button>)}\r
        {SIZES.map(size => <Drawer key={size} open={openSize === size} onClose={() => setOpenSize(null)} size={size}>\r
            <Drawer.Header>\r
              <Drawer.Title>Size: {size}</Drawer.Title>\r
              <Drawer.Close />\r
            </Drawer.Header>\r
            <Drawer.Body>\r
              <p className="text-sm text-gray-600">\r
                This drawer uses the <strong>{size}</strong> size variant.\r
              </p>\r
            </Drawer.Body>\r
            <Drawer.Footer>\r
              <Button onClick={() => setOpenSize(null)}>Close</Button>\r
            </Drawer.Footer>\r
          </Drawer>)}\r
      </div>;
  },
  args: {}
}`,...(C=(j=d.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var N,S,b;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>\r
        <Button variant="outline" onClick={() => setOpen(true)}>Filters</Button>\r
        <Drawer open={open} onClose={setOpen} size="sm">\r
          <Drawer.Header>\r
            <Drawer.Title>Filter Results</Drawer.Title>\r
            <Drawer.Close />\r
          </Drawer.Header>\r
          <Drawer.Body>\r
            <div className="flex flex-col gap-4">\r
              <Input name="search" label="Search" placeholder="Search..." />\r
              <Select name="status" label="Status" placeholder="Select Status" options={[{
              value: "all",
              label: "All"
            }, {
              value: "active",
              label: "Active"
            }, {
              value: "inactive",
              label: "Inactive"
            }]} />\r
            </div>\r
          </Drawer.Body>\r
          <Drawer.Footer>\r
            <Button variant="outline" onClick={() => setOpen(false)}>Reset</Button>\r
            <Button onClick={() => setOpen(false)}>Apply Filters</Button>\r
          </Drawer.Footer>\r
        </Drawer>\r
      </>;
  },
  args: {}
}`,...(b=(S=u.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};const ye=["Default","LeftSide","Sizes","WithForm"];export{i as Default,c as LeftSide,d as Sizes,u as WithForm,ye as __namedExportsOrder,De as default};
