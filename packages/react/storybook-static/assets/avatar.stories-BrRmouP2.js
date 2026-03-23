import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as T}from"./clsx-B-dksMZM.js";import{r as ze}from"./index-ZH-6pyQh.js";import{d as _e,e as Ce}from"./variants-CIz8xjKx.js";import"./_commonjsHelpers-CqkleIqs.js";function De(t){const s=t.trim().split(/\s+/).filter(Boolean);if(s.length===0)return"";const m=s[0]??"",d=s[s.length-1]??"";return s.length===1?m.slice(0,2).toUpperCase():((m[0]??"")+(d[0]??"")).toUpperCase()}function Se({className:t}){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:t,"aria-hidden":"true",children:e.jsx("path",{fillRule:"evenodd",d:"M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z",clipRule:"evenodd"})})}function a({src:t,alt:s,name:m,initials:d,icon:u,size:D="md",className:p,imgProps:S}){const[x,E]=ze.useState(!1),v=_e({size:D}),we=t&&!x,B=d??(m?De(m):void 0);return e.jsx("span",{className:T(v.root(),p),role:"img","aria-label":s??m,children:we?e.jsx("img",{src:t,alt:s??m??"Avatar",className:v.image(),onError:()=>E(!0),...S}):e.jsx("span",{className:v.fallback(),children:u?e.jsx("span",{className:"flex items-center justify-center w-1/2 h-1/2",children:u}):B||e.jsx(Se,{className:"w-1/2 h-1/2"})})})}a.displayName="Avatar";function n({children:t,max:s,size:m="md",className:d}){const u=Ce({size:m}),D=_e({size:m}),p=Array.isArray(t)?t:[t],S=s!==void 0?p.slice(0,s):p,x=s!==void 0?p.length-s:0;return e.jsxs("div",{className:T(u,d),role:"group","aria-label":"Avatar group",children:[S.map((E,v)=>e.jsx("div",{className:"ring-2 ring-white rounded-full",children:E},v)),x>0&&e.jsxs("span",{className:T(D.root(),"ring-2 ring-white bg-gray-300 text-gray-700"),"aria-label":`${x} more users`,children:["+",x]})]})}n.displayName="AvatarGroup";a.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{src:{required:!1,tsType:{name:"string"},description:""},alt:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},initials:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactNode"},description:""},size:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg" | "xl"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},imgProps:{required:!1,tsType:{name:"Omit",elements:[{name:"ImgHTMLAttributes",elements:[{name:"HTMLImageElement"}],raw:"ImgHTMLAttributes<HTMLImageElement>"},{name:"union",raw:'"src" | "alt"',elements:[{name:"literal",value:'"src"'},{name:"literal",value:'"alt"'}]}],raw:'Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt">'},description:""}}};n.__docgenInfo={description:"",methods:[],displayName:"AvatarGroup",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},max:{required:!1,tsType:{name:"number"},description:""},size:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg" | "xl"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const ke={title:"Components/Avatar",component:a,argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl"]}}},r="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",c="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",i="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",o="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",l="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",g={args:{src:r,name:"John Doe",alt:"John Doe's avatar"}},h={args:{name:"Jane Smith"}},A={args:{initials:"AB"}},j={args:{icon:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-full h-full",children:e.jsx("path",{fillRule:"evenodd",d:"M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z",clipRule:"evenodd"})})}},f={args:{}},G={render:()=>e.jsxs("div",{className:"flex items-end gap-4",children:[e.jsx(a,{src:r,name:"User",size:"xs"}),e.jsx(a,{src:r,name:"User",size:"sm"}),e.jsx(a,{src:r,name:"User",size:"md"}),e.jsx(a,{src:r,name:"User",size:"lg"}),e.jsx(a,{src:r,name:"User",size:"xl"})]})},I={render:()=>e.jsxs("div",{className:"flex items-end gap-4",children:[e.jsx(a,{name:"John Doe",size:"xs"}),e.jsx(a,{name:"John Doe",size:"sm"}),e.jsx(a,{name:"John Doe",size:"md"}),e.jsx(a,{name:"John Doe",size:"lg"}),e.jsx(a,{name:"John Doe",size:"xl"})]})},M={args:{src:"https://invalid-image-url.com/broken.jpg",name:"Fallback User"}},N={render:()=>e.jsxs(n,{children:[e.jsx(a,{src:r,name:"Alice"}),e.jsx(a,{src:c,name:"Bob"}),e.jsx(a,{src:i,name:"Charlie"})]})},b={render:()=>e.jsxs(n,{max:3,children:[e.jsx(a,{src:r,name:"Alice"}),e.jsx(a,{src:c,name:"Bob"}),e.jsx(a,{src:i,name:"Charlie"}),e.jsx(a,{src:o,name:"Diana"}),e.jsx(a,{src:l,name:"Eve"})]})},y={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-500 mb-2",children:"Extra Small"}),e.jsxs(n,{size:"xs",max:4,children:[e.jsx(a,{src:r,name:"A"}),e.jsx(a,{src:c,name:"B"}),e.jsx(a,{src:i,name:"C"}),e.jsx(a,{src:o,name:"D"}),e.jsx(a,{src:l,name:"E"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-500 mb-2",children:"Small"}),e.jsxs(n,{size:"sm",max:4,children:[e.jsx(a,{src:r,name:"A"}),e.jsx(a,{src:c,name:"B"}),e.jsx(a,{src:i,name:"C"}),e.jsx(a,{src:o,name:"D"}),e.jsx(a,{src:l,name:"E"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-500 mb-2",children:"Medium"}),e.jsxs(n,{size:"md",max:4,children:[e.jsx(a,{src:r,name:"A"}),e.jsx(a,{src:c,name:"B"}),e.jsx(a,{src:i,name:"C"}),e.jsx(a,{src:o,name:"D"}),e.jsx(a,{src:l,name:"E"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-500 mb-2",children:"Large"}),e.jsxs(n,{size:"lg",max:4,children:[e.jsx(a,{src:r,name:"A"}),e.jsx(a,{src:c,name:"B"}),e.jsx(a,{src:i,name:"C"}),e.jsx(a,{src:o,name:"D"}),e.jsx(a,{src:l,name:"E"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-500 mb-2",children:"Extra Large"}),e.jsxs(n,{size:"xl",max:4,children:[e.jsx(a,{src:r,name:"A"}),e.jsx(a,{src:c,name:"B"}),e.jsx(a,{src:i,name:"C"}),e.jsx(a,{src:o,name:"D"}),e.jsx(a,{src:l,name:"E"})]})]})]})},_={render:()=>e.jsxs(n,{max:4,children:[e.jsx(a,{name:"Alice Anderson"}),e.jsx(a,{name:"Bob Brown"}),e.jsx(a,{name:"Charlie Chen"}),e.jsx(a,{name:"Diana Davis"}),e.jsx(a,{name:"Eve Edwards"}),e.jsx(a,{name:"Frank Foster"})]})},w={render:()=>e.jsxs("div",{className:"flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm border border-gray-200 max-w-xs",children:[e.jsx(a,{src:c,name:"Sarah Connor",size:"lg"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-gray-900",children:"Sarah Connor"}),e.jsx("p",{className:"text-sm text-gray-500",children:"Product Designer"})]})]})},z={render:()=>e.jsxs("div",{className:"space-y-4 max-w-md",children:[e.jsxs("div",{className:"flex gap-3",children:[e.jsx(a,{src:r,name:"John",size:"sm"}),e.jsxs("div",{className:"flex-1 bg-gray-100 rounded-lg p-3",children:[e.jsx("p",{className:"font-medium text-sm",children:"John Doe"}),e.jsx("p",{className:"text-sm text-gray-600",children:"This looks great! Love the new design."})]})]}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx(a,{name:"Jane Smith",size:"sm"}),e.jsxs("div",{className:"flex-1 bg-gray-100 rounded-lg p-3",children:[e.jsx("p",{className:"font-medium text-sm",children:"Jane Smith"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Thanks! We worked hard on it."})]})]})]})},C={render:()=>e.jsxs("div",{className:"p-4 bg-white rounded-lg shadow-sm border border-gray-200 max-w-xs",children:[e.jsx("p",{className:"text-sm font-medium text-gray-700 mb-3",children:"Team Members"}),e.jsxs(n,{max:5,size:"sm",children:[e.jsx(a,{src:r,name:"A"}),e.jsx(a,{src:c,name:"B"}),e.jsx(a,{src:i,name:"C"}),e.jsx(a,{src:o,name:"D"}),e.jsx(a,{src:l,name:"E"}),e.jsx(a,{name:"F"}),e.jsx(a,{name:"G"}),e.jsx(a,{name:"H"})]})]})};var J,U,k;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    src: IMG_1,
    name: "John Doe",
    alt: "John Doe's avatar"
  }
}`,...(k=(U=g.parameters)==null?void 0:U.docs)==null?void 0:k.source}}};var L,W,q;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    name: "Jane Smith"
  }
}`,...(q=(W=h.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var F,H,R;A.parameters={...A.parameters,docs:{...(F=A.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    initials: "AB"
  }
}`,...(R=(H=A.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var Z,O,P;j.parameters={...j.parameters,docs:{...(Z=j.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">\r
        <path fillRule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" clipRule="evenodd" />\r
      </svg>
  }
}`,...(P=(O=j.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var V,$,K;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {}
}`,...(K=($=f.parameters)==null?void 0:$.docs)==null?void 0:K.source}}};var Q,X,Y;G.parameters={...G.parameters,docs:{...(Q=G.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div className="flex items-end gap-4">\r
      <Avatar src={IMG_1} name="User" size="xs" />\r
      <Avatar src={IMG_1} name="User" size="sm" />\r
      <Avatar src={IMG_1} name="User" size="md" />\r
      <Avatar src={IMG_1} name="User" size="lg" />\r
      <Avatar src={IMG_1} name="User" size="xl" />\r
    </div>
}`,...(Y=(X=G.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var ee,ae,re;I.parameters={...I.parameters,docs:{...(ee=I.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <div className="flex items-end gap-4">\r
      <Avatar name="John Doe" size="xs" />\r
      <Avatar name="John Doe" size="sm" />\r
      <Avatar name="John Doe" size="md" />\r
      <Avatar name="John Doe" size="lg" />\r
      <Avatar name="John Doe" size="xl" />\r
    </div>
}`,...(re=(ae=I.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var se,ne,te;M.parameters={...M.parameters,docs:{...(se=M.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    src: "https://invalid-image-url.com/broken.jpg",
    name: "Fallback User"
  }
}`,...(te=(ne=M.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var me,ce,ie;N.parameters={...N.parameters,docs:{...(me=N.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => <AvatarGroup>\r
      <Avatar src={IMG_1} name="Alice" />\r
      <Avatar src={IMG_2} name="Bob" />\r
      <Avatar src={IMG_3} name="Charlie" />\r
    </AvatarGroup>
}`,...(ie=(ce=N.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var oe,le,de;b.parameters={...b.parameters,docs:{...(oe=b.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <AvatarGroup max={3}>\r
      <Avatar src={IMG_1} name="Alice" />\r
      <Avatar src={IMG_2} name="Bob" />\r
      <Avatar src={IMG_3} name="Charlie" />\r
      <Avatar src={IMG_4} name="Diana" />\r
      <Avatar src={IMG_5} name="Eve" />\r
    </AvatarGroup>
}`,...(de=(le=b.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var pe,xe,ve;y.parameters={...y.parameters,docs:{...(pe=y.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">\r
      <div>\r
        <p className="text-sm text-gray-500 mb-2">Extra Small</p>\r
        <AvatarGroup size="xs" max={4}>\r
          <Avatar src={IMG_1} name="A" />\r
          <Avatar src={IMG_2} name="B" />\r
          <Avatar src={IMG_3} name="C" />\r
          <Avatar src={IMG_4} name="D" />\r
          <Avatar src={IMG_5} name="E" />\r
        </AvatarGroup>\r
      </div>\r
      <div>\r
        <p className="text-sm text-gray-500 mb-2">Small</p>\r
        <AvatarGroup size="sm" max={4}>\r
          <Avatar src={IMG_1} name="A" />\r
          <Avatar src={IMG_2} name="B" />\r
          <Avatar src={IMG_3} name="C" />\r
          <Avatar src={IMG_4} name="D" />\r
          <Avatar src={IMG_5} name="E" />\r
        </AvatarGroup>\r
      </div>\r
      <div>\r
        <p className="text-sm text-gray-500 mb-2">Medium</p>\r
        <AvatarGroup size="md" max={4}>\r
          <Avatar src={IMG_1} name="A" />\r
          <Avatar src={IMG_2} name="B" />\r
          <Avatar src={IMG_3} name="C" />\r
          <Avatar src={IMG_4} name="D" />\r
          <Avatar src={IMG_5} name="E" />\r
        </AvatarGroup>\r
      </div>\r
      <div>\r
        <p className="text-sm text-gray-500 mb-2">Large</p>\r
        <AvatarGroup size="lg" max={4}>\r
          <Avatar src={IMG_1} name="A" />\r
          <Avatar src={IMG_2} name="B" />\r
          <Avatar src={IMG_3} name="C" />\r
          <Avatar src={IMG_4} name="D" />\r
          <Avatar src={IMG_5} name="E" />\r
        </AvatarGroup>\r
      </div>\r
      <div>\r
        <p className="text-sm text-gray-500 mb-2">Extra Large</p>\r
        <AvatarGroup size="xl" max={4}>\r
          <Avatar src={IMG_1} name="A" />\r
          <Avatar src={IMG_2} name="B" />\r
          <Avatar src={IMG_3} name="C" />\r
          <Avatar src={IMG_4} name="D" />\r
          <Avatar src={IMG_5} name="E" />\r
        </AvatarGroup>\r
      </div>\r
    </div>
}`,...(ve=(xe=y.parameters)==null?void 0:xe.docs)==null?void 0:ve.source}}};var ue,ge,he;_.parameters={..._.parameters,docs:{...(ue=_.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => <AvatarGroup max={4}>\r
      <Avatar name="Alice Anderson" />\r
      <Avatar name="Bob Brown" />\r
      <Avatar name="Charlie Chen" />\r
      <Avatar name="Diana Davis" />\r
      <Avatar name="Eve Edwards" />\r
      <Avatar name="Frank Foster" />\r
    </AvatarGroup>
}`,...(he=(ge=_.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var Ae,je,fe;w.parameters={...w.parameters,docs:{...(Ae=w.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm border border-gray-200 max-w-xs">\r
      <Avatar src={IMG_2} name="Sarah Connor" size="lg" />\r
      <div>\r
        <p className="font-medium text-gray-900">Sarah Connor</p>\r
        <p className="text-sm text-gray-500">Product Designer</p>\r
      </div>\r
    </div>
}`,...(fe=(je=w.parameters)==null?void 0:je.docs)==null?void 0:fe.source}}};var Ge,Ie,Me;z.parameters={...z.parameters,docs:{...(Ge=z.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 max-w-md">\r
      <div className="flex gap-3">\r
        <Avatar src={IMG_1} name="John" size="sm" />\r
        <div className="flex-1 bg-gray-100 rounded-lg p-3">\r
          <p className="font-medium text-sm">John Doe</p>\r
          <p className="text-sm text-gray-600">This looks great! Love the new design.</p>\r
        </div>\r
      </div>\r
      <div className="flex gap-3">\r
        <Avatar name="Jane Smith" size="sm" />\r
        <div className="flex-1 bg-gray-100 rounded-lg p-3">\r
          <p className="font-medium text-sm">Jane Smith</p>\r
          <p className="text-sm text-gray-600">Thanks! We worked hard on it.</p>\r
        </div>\r
      </div>\r
    </div>
}`,...(Me=(Ie=z.parameters)==null?void 0:Ie.docs)==null?void 0:Me.source}}};var Ne,be,ye;C.parameters={...C.parameters,docs:{...(Ne=C.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: () => <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200 max-w-xs">\r
      <p className="text-sm font-medium text-gray-700 mb-3">Team Members</p>\r
      <AvatarGroup max={5} size="sm">\r
        <Avatar src={IMG_1} name="A" />\r
        <Avatar src={IMG_2} name="B" />\r
        <Avatar src={IMG_3} name="C" />\r
        <Avatar src={IMG_4} name="D" />\r
        <Avatar src={IMG_5} name="E" />\r
        <Avatar name="F" />\r
        <Avatar name="G" />\r
        <Avatar name="H" />\r
      </AvatarGroup>\r
    </div>
}`,...(ye=(be=C.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};const Le=["WithImage","WithInitials","WithCustomInitials","WithIcon","DefaultFallback","AllSizes","InitialsSizes","ImageLoadError","Group","GroupWithMax","GroupSizes","GroupWithInitials","UserCard","CommentThread","TeamMembers"];export{G as AllSizes,z as CommentThread,f as DefaultFallback,N as Group,y as GroupSizes,_ as GroupWithInitials,b as GroupWithMax,M as ImageLoadError,I as InitialsSizes,C as TeamMembers,w as UserCard,A as WithCustomInitials,j as WithIcon,g as WithImage,h as WithInitials,Le as __namedExportsOrder,ke as default};
