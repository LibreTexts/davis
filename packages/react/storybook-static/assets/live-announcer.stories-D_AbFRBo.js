import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./index-ZH-6pyQh.js";import"./_commonjsHelpers-CqkleIqs.js";const y=o.createContext(null);function c({children:n}){const[s,r]=o.useState(""),[a,t]=o.useState(""),i=o.useRef(),b=o.useCallback((l,m="polite")=>{m==="assertive"?t(""):r(""),i.current&&clearTimeout(i.current),requestAnimationFrame(()=>{m==="assertive"?t(l):r(l)}),i.current=setTimeout(()=>{r(""),t("")},7e3)},[]);return e.jsxs(y.Provider,{value:b,children:[n,e.jsxs("div",{style:{position:"absolute",width:"1px",height:"1px",padding:0,margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},children:[e.jsx("div",{role:"status","aria-live":"polite","aria-atomic":"true",children:s}),e.jsx("div",{role:"alert","aria-live":"assertive","aria-atomic":"true",children:a})]})]})}c.displayName="LiveAnnouncerProvider";function A(){const n=o.useContext(y);if(!n)throw new Error("useAnnounce must be used within a <LiveAnnouncerProvider>");return n}c.__docgenInfo={description:"Provides an `announce()` function via `useAnnounce()` that triggers\nscreen reader announcements through a shared aria-live region.\n\nRender once near the root of your app:\n```tsx\n<LiveAnnouncerProvider>\n  <App />\n</LiveAnnouncerProvider>\n```",methods:[],displayName:"LiveAnnouncerProvider",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const N={title:"Utilities/LiveAnnouncer",component:c,parameters:{docs:{description:{component:"Manages a shared aria-live region for dynamic screen reader announcements. Wrap your app with `<LiveAnnouncerProvider>` and use the `useAnnounce()` hook to trigger announcements from any component."}}}};function j(){const n=A(),[s,r]=o.useState(0),a=()=>{const t=Math.floor(Math.random()*20)+1;r(t),n(`${t} results found`)};return e.jsxs("div",{className:"space-y-3",children:[e.jsx("button",{type:"button",onClick:a,className:"px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",children:"Simulate Search"}),s>0&&e.jsxs("p",{className:"text-sm text-gray-600",children:["Showing ",s," results (announced to screen reader)"]})]})}const u={args:{},render:()=>e.jsx(c,{children:e.jsx(j,{})}),parameters:{docs:{description:{story:"A polite announcement waits for the screen reader to finish speaking. Click the button and listen with a screen reader to hear the announcement."}}}};function P(){const n=A(),[s,r]=o.useState(""),a=()=>{const i="Error: email address is required";r(i),n(i,"assertive")},t=()=>{r(""),n("Error cleared","polite")};return e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{type:"button",onClick:a,className:"px-4 py-2 bg-danger text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-danger focus:ring-offset-2",children:"Trigger Error"}),e.jsx("button",{type:"button",onClick:t,className:"px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2",children:"Clear Error"})]}),s&&e.jsx("p",{className:"text-sm text-danger font-medium",children:s})]})}const d={args:{},render:()=>e.jsx(c,{children:e.jsx(P,{})}),parameters:{docs:{description:{story:"An assertive announcement interrupts the screen reader immediately. Use sparingly — only for critical errors or time-sensitive information."}}}};var p,h,v;u.parameters={...u.parameters,docs:{...(p=u.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {},
  render: () => <LiveAnnouncerProvider>\r
      <PoliteDemo />\r
    </LiveAnnouncerProvider>,
  parameters: {
    docs: {
      description: {
        story: 'A polite announcement waits for the screen reader to finish speaking. ' + 'Click the button and listen with a screen reader to hear the announcement.'
      }
    }
  }
}`,...(v=(h=u.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var g,f,x;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {},
  render: () => <LiveAnnouncerProvider>\r
      <AssertiveDemo />\r
    </LiveAnnouncerProvider>,
  parameters: {
    docs: {
      description: {
        story: "An assertive announcement interrupts the screen reader immediately. " + "Use sparingly — only for critical errors or time-sensitive information."
      }
    }
  }
}`,...(x=(f=d.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const S=["PoliteAnnouncement","AssertiveAnnouncement"];export{d as AssertiveAnnouncement,u as PoliteAnnouncement,S as __namedExportsOrder,N as default};
