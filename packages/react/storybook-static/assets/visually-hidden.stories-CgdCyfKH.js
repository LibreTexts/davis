import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./index-ZH-6pyQh.js";import{c as g}from"./clsx-B-dksMZM.js";import{K as x}from"./variants-CIz8xjKx.js";import"./_commonjsHelpers-CqkleIqs.js";function a({children:t,as:f="span",focusable:b=!1,className:v,...y}){return e.jsx(f,{className:g(x({focusable:b}),v),...y,children:t})}a.displayName="VisuallyHidden";a.__docgenInfo={description:"",methods:[],displayName:"VisuallyHidden",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Content hidden visually but available to screen readers"},as:{required:!1,tsType:{name:"ElementType"},description:'HTML element to render (default: "span")',defaultValue:{value:'"span"',computed:!1}},focusable:{required:!1,tsType:{name:"boolean"},description:"When true, element becomes visible on focus (for skip links)",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class names"}}};const T={title:"Utilities/VisuallyHidden",component:a,parameters:{docs:{description:{component:"Hides content visually while keeping it accessible to screen readers. Use for labels, descriptions, and context that sighted users don't need but assistive technology does."}}}},s={args:{children:"This text is only visible to screen readers"},decorators:[t=>e.jsxs("div",{children:[e.jsx("p",{children:"There is hidden text in this container (inspect the DOM or use a screen reader):"}),e.jsx(t,{})]})]},r={args:{children:"Adjust settings"},render:()=>e.jsxs("button",{type:"button",className:"inline-flex items-center justify-center size-10 rounded-md bg-primary text-white hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"size-5","aria-hidden":"true",children:e.jsx("path",{d:"M10 3.75a2 2 0 10-4 0 2 2 0 004 0zM17.25 4.5a.75.75 0 000-1.5h-5.5a.75.75 0 000 1.5h5.5zM5 3.75a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 01.75.75zM4.25 17a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM17.25 17a.75.75 0 000-1.5h-5.5a.75.75 0 000 1.5h5.5zM9 10a.75.75 0 01-.75.75h-5.5a.75.75 0 010-1.5h5.5A.75.75 0 019 10zM17.25 10.75a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM14 10a2 2 0 10-4 0 2 2 0 004 0zM10 16.25a2 2 0 10-4 0 2 2 0 004 0z"})}),e.jsx(a,{children:"Adjust settings"})]}),parameters:{docs:{description:{story:"Provides an accessible name for an icon-only button."}}}},n={args:{children:"Skip to main content",focusable:!0},render:()=>e.jsxs("div",{children:[e.jsx("a",{href:"#main",className:"absolute w-px h-px overflow-hidden whitespace-nowrap border-0 p-0 m-[-1px] [clip:rect(0,0,0,0)] focus:static focus:w-auto focus:h-auto focus:overflow-visible focus:whitespace-normal focus:[clip:auto] focus:m-0",children:"Skip to main content"}),e.jsx("p",{children:"Tab to reveal the hidden skip link above."})]}),parameters:{docs:{description:{story:"With `focusable={true}`, the element becomes visible when focused. Useful for skip links. (Press Tab to see it appear.)"}}}};var i,o,c;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: "This text is only visible to screen readers"
  },
  decorators: [Story => <div>\r
        <p>There is hidden text in this container (inspect the DOM or use a screen reader):</p>\r
        <Story />\r
      </div>]
}`,...(c=(o=s.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var l,d,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: "Adjust settings"
  },
  render: () => <button type="button" className="inline-flex items-center justify-center size-10 rounded-md bg-primary text-white hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">\r
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5" aria-hidden="true">\r
        <path d="M10 3.75a2 2 0 10-4 0 2 2 0 004 0zM17.25 4.5a.75.75 0 000-1.5h-5.5a.75.75 0 000 1.5h5.5zM5 3.75a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 01.75.75zM4.25 17a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM17.25 17a.75.75 0 000-1.5h-5.5a.75.75 0 000 1.5h5.5zM9 10a.75.75 0 01-.75.75h-5.5a.75.75 0 010-1.5h5.5A.75.75 0 019 10zM17.25 10.75a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM14 10a2 2 0 10-4 0 2 2 0 004 0zM10 16.25a2 2 0 10-4 0 2 2 0 004 0z" />\r
      </svg>\r
      <VisuallyHidden>Adjust settings</VisuallyHidden>\r
    </button>,
  parameters: {
    docs: {
      description: {
        story: "Provides an accessible name for an icon-only button."
      }
    }
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var p,h,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: "Skip to main content",
    focusable: true
  },
  render: () => <div>\r
      <a href="#main" className="absolute w-px h-px overflow-hidden whitespace-nowrap border-0 p-0 m-[-1px] [clip:rect(0,0,0,0)] focus:static focus:w-auto focus:h-auto focus:overflow-visible focus:whitespace-normal focus:[clip:auto] focus:m-0">\r
        Skip to main content\r
      </a>\r
      <p>Tab to reveal the hidden skip link above.</p>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "With \`focusable={true}\`, the element becomes visible when focused. " + "Useful for skip links. (Press Tab to see it appear.)"
      }
    }
  }
}`,...(m=(h=n.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};const N=["Default","WithIconButton","FocusableSkipLink"];export{s as Default,n as FocusableSkipLink,r as WithIconButton,N as __namedExportsOrder,T as default};
