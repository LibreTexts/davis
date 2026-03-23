import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./index-ZH-6pyQh.js";import{c as x}from"./clsx-B-dksMZM.js";import{t as B}from"./variants-CIz8xjKx.js";import"./_commonjsHelpers-CqkleIqs.js";function D(e,s,g){const o=g,i=[];for(let n=Math.max(2,e-o);n<=Math.min(s-1,e+o);n++)i.push(n);e-o>2&&i.unshift(-1),e+o<s-1&&i.push(-2);const l=[1];for(const n of i)n<0?l.push("ellipsis"):l.push(n);return s>1&&l.push(s),l}function t({page:e,totalPages:s,onChange:g,siblings:o=1,size:i="md",className:l}){const{root:n,list:_,button:h,current:k,ellipsis:E}=B({size:i});if(s<=1)return null;const G=D(e,s,o);return a.jsx("nav",{"aria-label":"Pagination",className:x(n(),l),children:a.jsxs("ul",{className:_(),children:[a.jsx("li",{children:a.jsx("button",{type:"button",onClick:()=>g(e-1),disabled:e<=1,"aria-label":"Go to previous page",className:h(),children:a.jsx(F,{})})}),G.map((r,I)=>r==="ellipsis"?a.jsx("li",{children:a.jsx("span",{className:E(),"aria-hidden":"true",children:"…"})},`ellipsis-${I}`):a.jsx("li",{children:a.jsx("button",{type:"button",onClick:()=>g(r),"aria-label":`Go to page ${r}`,"aria-current":r===e?"page":void 0,className:x(h(),r===e&&k()),children:r})},r)),a.jsx("li",{children:a.jsx("button",{type:"button",onClick:()=>g(e+1),disabled:e>=s,"aria-label":"Go to next page",className:h(),children:a.jsx(V,{})})})]})})}t.displayName="Pagination";function F(){return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"size-4","aria-hidden":"true",children:a.jsx("path",{fillRule:"evenodd",d:"M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z",clipRule:"evenodd"})})}function V(){return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"size-4","aria-hidden":"true",children:a.jsx("path",{fillRule:"evenodd",d:"M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"})})}t.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{page:{required:!0,tsType:{name:"number"},description:""},totalPages:{required:!0,tsType:{name:"number"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},siblings:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const J={title:"Navigation/Pagination",component:t,tags:["autodocs"]},u={render:()=>{const[e,s]=c.useState(1);return a.jsx(t,{page:e,totalPages:10,onChange:s})}},d={render:()=>{const[e,s]=c.useState(5);return a.jsx(t,{page:e,totalPages:10,onChange:s})}},p={render:()=>{const[e,s]=c.useState(10);return a.jsx(t,{page:e,totalPages:10,onChange:s})}},m={render:()=>{const[e,s]=c.useState(1);return a.jsx(t,{page:e,totalPages:3,onChange:s})}},P={render:()=>{const[e,s]=c.useState(5);return a.jsxs("div",{className:"flex flex-col gap-4",children:[a.jsx(t,{page:e,totalPages:10,onChange:s,size:"sm"}),a.jsx(t,{page:e,totalPages:10,onChange:s,size:"md"}),a.jsx(t,{page:e,totalPages:10,onChange:s,size:"lg"})]})}};var f,j,v;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    return <Pagination page={page} totalPages={10} onChange={setPage} />;
  }
}`,...(v=(j=u.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var b,C,S;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(5);
    return <Pagination page={page} totalPages={10} onChange={setPage} />;
  }
}`,...(S=(C=d.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var N,w,y;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(10);
    return <Pagination page={page} totalPages={10} onChange={setPage} />;
  }
}`,...(y=(w=p.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var z,q,M;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    return <Pagination page={page} totalPages={3} onChange={setPage} />;
  }
}`,...(M=(q=m.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var R,T,L;P.parameters={...P.parameters,docs:{...(R=P.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(5);
    return <div className="flex flex-col gap-4">\r
        <Pagination page={page} totalPages={10} onChange={setPage} size="sm" />\r
        <Pagination page={page} totalPages={10} onChange={setPage} size="md" />\r
        <Pagination page={page} totalPages={10} onChange={setPage} size="lg" />\r
      </div>;
  }
}`,...(L=(T=P.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};const K=["Default","MiddlePage","LastPage","FewPages","Sizes"];export{u as Default,m as FewPages,p as LastPage,d as MiddlePage,P as Sizes,K as __namedExportsOrder,J as default};
