import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./index-ZH-6pyQh.js";import{c as u}from"./clsx-B-dksMZM.js";import{w as h}from"./variants-CIz8xjKx.js";import"./_commonjsHelpers-CqkleIqs.js";function r({targetId:s="main-content",children:m="Skip to main content",className:p}){return e.jsx("a",{href:`#${s}`,className:u(h(),p),children:m})}r.displayName="SkipLink";r.__docgenInfo={description:"",methods:[],displayName:"SkipLink",props:{targetId:{required:!1,tsType:{name:"string"},description:'ID of the target element to skip to (default: "main-content")',defaultValue:{value:'"main-content"',computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:'Link text (default: "Skip to main content")',defaultValue:{value:'"Skip to main content"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional class names"}}};const y={title:"Utilities/SkipLink",component:r,parameters:{docs:{description:{component:'A "Skip to main content" link that is visually hidden until focused via keyboard. Essential for keyboard users to bypass repeated navigation. Press Tab on any story to reveal the skip link.'}}}},a={decorators:[s=>e.jsxs("div",{children:[e.jsx(s,{}),e.jsxs("nav",{className:"border-b border-gray-200 p-4 mb-4",children:[e.jsx("span",{className:"font-semibold text-gray-700",children:"Site Navigation"}),e.jsx("span",{className:"ml-4 text-sm text-gray-500",children:"(Press Tab to reveal the skip link)"})]}),e.jsxs("main",{id:"main-content",className:"p-4",children:[e.jsx("h1",{className:"text-xl font-bold mb-2",children:"Main Content"}),e.jsx("p",{className:"text-gray-600",children:"The skip link jumps focus here."})]})]})]},t={args:{targetId:"search-results",children:"Skip to search results"},decorators:[s=>e.jsxs("div",{children:[e.jsx(s,{}),e.jsxs("nav",{className:"border-b border-gray-200 p-4 mb-4",children:[e.jsx("span",{className:"font-semibold text-gray-700",children:"Filter Panel"}),e.jsx("span",{className:"ml-4 text-sm text-gray-500",children:"(Press Tab to reveal the skip link)"})]}),e.jsxs("div",{id:"search-results",tabIndex:-1,className:"p-4 border rounded-md",children:[e.jsx("h2",{className:"text-lg font-semibold mb-2",children:"Search Results"}),e.jsx("p",{className:"text-gray-600",children:"Results would appear here."})]})]})]};var n,i,o;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  decorators: [Story => <div>\r
        <Story />\r
        <nav className="border-b border-gray-200 p-4 mb-4">\r
          <span className="font-semibold text-gray-700">Site Navigation</span>\r
          <span className="ml-4 text-sm text-gray-500">(Press Tab to reveal the skip link)</span>\r
        </nav>\r
        <main id="main-content" className="p-4">\r
          <h1 className="text-xl font-bold mb-2">Main Content</h1>\r
          <p className="text-gray-600">The skip link jumps focus here.</p>\r
        </main>\r
      </div>]
}`,...(o=(i=a.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var l,d,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    targetId: "search-results",
    children: "Skip to search results"
  },
  decorators: [Story => <div>\r
        <Story />\r
        <nav className="border-b border-gray-200 p-4 mb-4">\r
          <span className="font-semibold text-gray-700">Filter Panel</span>\r
          <span className="ml-4 text-sm text-gray-500">(Press Tab to reveal the skip link)</span>\r
        </nav>\r
        <div id="search-results" tabIndex={-1} className="p-4 border rounded-md">\r
          <h2 className="text-lg font-semibold mb-2">Search Results</h2>\r
          <p className="text-gray-600">Results would appear here.</p>\r
        </div>\r
      </div>]
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const N=["Default","CustomTarget"];export{t as CustomTarget,a as Default,N as __namedExportsOrder,y as default};
