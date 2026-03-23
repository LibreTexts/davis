import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-ZH-6pyQh.js";import{B as t}from"./button-BUCKCgZW.js";import{c as i}from"./clsx-B-dksMZM.js";import{u as L}from"./davis-context-CArXUcbY.js";import{h as I,L as P,z as R,Q as E,x as A}from"./dialog-BJBhSULu.js";import{j as M}from"./variants-CIz8xjKx.js";import"./_commonjsHelpers-CqkleIqs.js";import"./render-D3e-BGhm.js";import"./use-active-press-Bj0hdp5d.js";import"./disabled-DXzavEEa.js";import"./keyboard-D6fFT7n5.js";import"./use-event-listener-DR6wmqP5.js";import"./portal-DbAe3Y2t.js";import"./focus-management-CShi9XEB.js";import"./index-BP-xEy0R.js";import"./index-DVyBTwwr.js";import"./use-inert-others-Dx8rCfB6.js";import"./use-tab-direction-CQPT_Yl1.js";import"./hidden-BV378ZHv.js";import"./close-provider-B-utbKzN.js";import"./open-closed-kU2EydzO.js";import"./description-CYuhol84.js";import"./use-is-mounted-Ctfw9wRL.js";import"./active-element-history-D38dlw4t.js";const z=o.createContext(null);function Z(){const a=o.useContext(z);if(!a)throw new Error("Dialog subcomponents must be used within a Dialog");return a}function r({open:a,onClose:n,children:s,size:F="md",className:q}){const{standalone:H}=L(),p=e.jsxs(I,{open:a,onClose:n,className:"relative z-50",children:[e.jsx(P,{transition:!0,className:i("fixed inset-0 bg-black/50","transition duration-200 ease-out","data-[closed]:opacity-0","data-[enter]:opacity-100")}),e.jsx("div",{className:"fixed inset-0 flex items-center justify-center overflow-y-auto p-4",children:e.jsx(R,{transition:!0,className:i("transition duration-200 ease-out","data-[closed]:opacity-0 data-[closed]:scale-95","data-[enter]:opacity-100 data-[enter]:scale-100",M({size:F}),q),children:s})})]});return e.jsx(z.Provider,{value:{onClose:()=>n(!1)},children:H?e.jsx("div",{className:"davis",children:p}):p})}r.displayName="Dialog";function S({children:a,className:n}){return e.jsx("div",{className:i("flex items-center justify-between px-6 py-4 border-b border-gray-200",n),children:a})}S.displayName="Dialog.Header";function T({children:a,className:n}){return e.jsx(E,{className:i("text-lg font-semibold text-gray-900",n),children:a})}T.displayName="Dialog.Title";function O({children:a,className:n}){return e.jsx(A,{className:i("text-sm text-gray-500",n),children:a})}O.displayName="Dialog.Description";function B({children:a,className:n}){return e.jsx("div",{className:i("flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-200",n),children:a})}B.displayName="Dialog.Footer";function w({className:a,"aria-label":n="Close dialog"}){const{onClose:s}=Z();return e.jsx("button",{type:"button",onClick:s,"aria-label":n,className:i("rounded-md p-1 text-gray-400 hover:text-gray-500 hover:bg-gray-100","focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2","transition-colors duration-150",a),children:e.jsx(_,{className:"size-5","aria-hidden":"true"})})}w.displayName="Dialog.Close";function _({className:a}){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:a,"aria-hidden":"true",children:e.jsx("path",{d:"M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"})})}r.Header=S;r.Title=T;r.Description=O;r.Footer=B;r.Close=w;r.__docgenInfo={description:"",methods:[{name:"Header",docblock:null,modifiers:["static"],params:[{name:"{ children, className }: DialogHeaderProps",optional:!1,type:{name:"signature",type:"object",raw:`{
  children: ReactNode;
  className?: string;
}`,signature:{properties:[{key:"children",value:{name:"ReactNode",required:!0}},{key:"className",value:{name:"string",required:!1}}]},alias:"DialogHeaderProps"}}],returns:null},{name:"Title",docblock:null,modifiers:["static"],params:[{name:"{ children, className }: DialogTitleProps",optional:!1,type:{name:"signature",type:"object",raw:`{
  children: ReactNode;
  className?: string;
}`,signature:{properties:[{key:"children",value:{name:"ReactNode",required:!0}},{key:"className",value:{name:"string",required:!1}}]},alias:"DialogTitleProps"}}],returns:null},{name:"Description",docblock:null,modifiers:["static"],params:[{name:"{ children, className }: DialogDescriptionProps",optional:!1,type:{name:"signature",type:"object",raw:`{
  children: ReactNode;
  className?: string;
}`,signature:{properties:[{key:"children",value:{name:"ReactNode",required:!0}},{key:"className",value:{name:"string",required:!1}}]},alias:"DialogDescriptionProps"}}],returns:null},{name:"Footer",docblock:null,modifiers:["static"],params:[{name:"{ children, className }: DialogFooterProps",optional:!1,type:{name:"signature",type:"object",raw:`{
  children: ReactNode;
  className?: string;
}`,signature:{properties:[{key:"children",value:{name:"ReactNode",required:!0}},{key:"className",value:{name:"string",required:!1}}]},alias:"DialogFooterProps"}}],returns:null},{name:"Close",docblock:null,modifiers:["static"],params:[{name:`{
  className,
  "aria-label": ariaLabel = "Close dialog",
}: DialogCloseProps`,optional:!1,type:{name:"signature",type:"object",raw:`{
  className?: string;
  "aria-label"?: string;
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}},{key:"aria-label",value:{name:"string",required:!1}}]},alias:"DialogCloseProps"}}],returns:null}],displayName:"Dialog",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg" | "xl" | "full"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"full"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const xe={title:"Components/Dialog",component:r,parameters:{layout:"centered"}},l={render:()=>{const[a,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{onClick:()=>n(!0),children:"Open Dialog"}),e.jsxs(r,{open:a,onClose:n,children:[e.jsxs(r.Header,{children:[e.jsx(r.Title,{children:"Dialog Title"}),e.jsx(r.Close,{})]}),e.jsx("div",{className:"px-6 py-4",children:e.jsx(r.Description,{children:"This is the dialog description. It provides context about the dialog's purpose."})}),e.jsxs(r.Footer,{children:[e.jsx(t,{variant:"outline",onClick:()=>n(!1),children:"Cancel"}),e.jsx(t,{onClick:()=>n(!1),children:"Confirm"})]})]})]})},args:{}},m=["sm","md","lg","xl","full"],c={render:()=>{const[a,n]=o.useState(null);return e.jsxs("div",{className:"flex flex-wrap gap-3",children:[m.map(s=>e.jsx(t,{variant:"outline",onClick:()=>n(s),children:s.toUpperCase()},s)),m.map(s=>e.jsxs(r,{open:a===s,onClose:()=>n(null),size:s,children:[e.jsxs(r.Header,{children:[e.jsxs(r.Title,{children:["Size: ",s]}),e.jsx(r.Close,{})]}),e.jsx("div",{className:"px-6 py-4",children:e.jsxs(r.Description,{children:["This dialog uses the ",e.jsx("strong",{children:s})," size variant."]})}),e.jsx(r.Footer,{children:e.jsx(t,{onClick:()=>n(null),children:"Close"})})]},s))]})},args:{}},d={render:()=>{const[a,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"destructive",onClick:()=>n(!0),children:"Delete Item"}),e.jsxs(r,{open:a,onClose:n,size:"sm",children:[e.jsxs(r.Header,{children:[e.jsx(r.Title,{children:"Delete Item"}),e.jsx(r.Close,{})]}),e.jsx("div",{className:"px-6 py-4",children:e.jsx(r.Description,{children:"Are you sure you want to delete this item? This action cannot be undone."})}),e.jsxs(r.Footer,{children:[e.jsx(t,{variant:"outline",onClick:()=>n(!1),children:"Cancel"}),e.jsx(t,{variant:"destructive",onClick:()=>n(!1),children:"Delete"})]})]})]})},args:{}},u={render:()=>{const[a,n]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"secondary",onClick:()=>n(!0),children:"Open Custom"}),e.jsx(r,{open:a,onClose:n,size:"md",children:e.jsxs("div",{className:"p-8 text-center",children:[e.jsx("div",{className:"mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-green-100",children:e.jsx("svg",{className:"size-6 text-green-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}),e.jsx(r.Title,{className:"mb-2",children:"Success!"}),e.jsx(r.Description,{className:"mb-6",children:"Your changes have been saved successfully."}),e.jsx(t,{onClick:()=>n(!1),children:"Done"})]})})]})},args:{}};var g,x,D;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>\r
        <Button onClick={() => setOpen(true)}>Open Dialog</Button>\r
        <Dialog open={open} onClose={setOpen}>\r
          <Dialog.Header>\r
            <Dialog.Title>Dialog Title</Dialog.Title>\r
            <Dialog.Close />\r
          </Dialog.Header>\r
          <div className="px-6 py-4">\r
            <Dialog.Description>\r
              This is the dialog description. It provides context about the\r
              dialog&apos;s purpose.\r
            </Dialog.Description>\r
          </div>\r
          <Dialog.Footer>\r
            <Button variant="outline" onClick={() => setOpen(false)}>\r
              Cancel\r
            </Button>\r
            <Button onClick={() => setOpen(false)}>Confirm</Button>\r
          </Dialog.Footer>\r
        </Dialog>\r
      </>;
  },
  args: {}
}`,...(D=(x=l.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var f,h,v;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [openSize, setOpenSize] = useState<string | null>(null);
    return <div className="flex flex-wrap gap-3">\r
        {SIZES.map(size => <Button key={size} variant="outline" onClick={() => setOpenSize(size)}>\r
            {size.toUpperCase()}\r
          </Button>)}\r
        {SIZES.map(size => <Dialog key={size} open={openSize === size} onClose={() => setOpenSize(null)} size={size}>\r
            <Dialog.Header>\r
              <Dialog.Title>Size: {size}</Dialog.Title>\r
              <Dialog.Close />\r
            </Dialog.Header>\r
            <div className="px-6 py-4">\r
              <Dialog.Description>\r
                This dialog uses the <strong>{size}</strong> size variant.\r
              </Dialog.Description>\r
            </div>\r
            <Dialog.Footer>\r
              <Button onClick={() => setOpenSize(null)}>Close</Button>\r
            </Dialog.Footer>\r
          </Dialog>)}\r
      </div>;
  },
  args: {}
}`,...(v=(h=c.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var j,y,C;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>\r
        <Button variant="destructive" onClick={() => setOpen(true)}>\r
          Delete Item\r
        </Button>\r
        <Dialog open={open} onClose={setOpen} size="sm">\r
          <Dialog.Header>\r
            <Dialog.Title>Delete Item</Dialog.Title>\r
            <Dialog.Close />\r
          </Dialog.Header>\r
          <div className="px-6 py-4">\r
            <Dialog.Description>\r
              Are you sure you want to delete this item? This action cannot be\r
              undone.\r
            </Dialog.Description>\r
          </div>\r
          <Dialog.Footer>\r
            <Button variant="outline" onClick={() => setOpen(false)}>\r
              Cancel\r
            </Button>\r
            <Button variant="destructive" onClick={() => setOpen(false)}>\r
              Delete\r
            </Button>\r
          </Dialog.Footer>\r
        </Dialog>\r
      </>;
  },
  args: {}
}`,...(C=(y=d.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var N,k,b;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>\r
        <Button variant="secondary" onClick={() => setOpen(true)}>\r
          Open Custom\r
        </Button>\r
        <Dialog open={open} onClose={setOpen} size="md">\r
          <div className="p-8 text-center">\r
            <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-green-100">\r
              <svg className="size-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">\r
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />\r
              </svg>\r
            </div>\r
            <Dialog.Title className="mb-2">Success!</Dialog.Title>\r
            <Dialog.Description className="mb-6">\r
              Your changes have been saved successfully.\r
            </Dialog.Description>\r
            <Button onClick={() => setOpen(false)}>Done</Button>\r
          </div>\r
        </Dialog>\r
      </>;
  },
  args: {}
}`,...(b=(k=u.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};const De=["Default","AllSizes","Destructive","CustomContent"];export{c as AllSizes,u as CustomContent,l as Default,d as Destructive,De as __namedExportsOrder,xe as default};
