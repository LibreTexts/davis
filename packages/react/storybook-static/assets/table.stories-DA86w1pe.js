import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as n}from"./clsx-B-dksMZM.js";import"./index-ZH-6pyQh.js";import{B as E,C as P,D,E as z,F as L}from"./variants-CIz8xjKx.js";import{B as m}from"./badge-BVNFVXMp.js";import{B as p}from"./button-BUCKCgZW.js";import{E as _}from"./empty-state-CUmHOf2x.js";import"./_commonjsHelpers-CqkleIqs.js";import"./render-D3e-BGhm.js";import"./use-active-press-Bj0hdp5d.js";import"./disabled-DXzavEEa.js";const w={left:"text-left",center:"text-center",right:"text-right"};function a({children:l,caption:r,className:s}){return e.jsx("div",{className:"overflow-x-auto rounded-lg border border-gray-200",children:e.jsxs("table",{className:n(E(),s),children:[r&&e.jsx(u,{children:r}),l]})})}a.displayName="Table";function u({children:l,className:r}){return e.jsx("caption",{className:n("px-4 py-2 text-sm text-gray-500 text-left",r),children:l})}u.displayName="Table.Caption";function S({children:l,className:r}){return e.jsx("thead",{className:n(P(),r),children:l})}S.displayName="Table.Head";function B({children:l,className:r}){return e.jsx("tbody",{className:n(r),children:l})}B.displayName="Table.Body";function k({children:l,className:r}){return e.jsx("tr",{className:n(D(),r),children:l})}k.displayName="Table.Row";function A({children:l,align:r="left",colSpan:s,className:c}){return e.jsx("td",{colSpan:s,className:n(z(),w[r],c),children:l})}A.displayName="Table.Cell";function q({children:l,align:r="left",scope:s="col",className:c}){return e.jsx("th",{scope:s,className:n(L(),w[r],c),children:l})}q.displayName="Table.HeaderCell";a.Caption=u;a.Head=S;a.Body=B;a.Row=k;a.Cell=A;a.HeaderCell=q;a.__docgenInfo={description:"",methods:[{name:"Caption",docblock:null,modifiers:["static"],params:[{name:"{ children, className }: TableCaptionProps",optional:!1,type:{name:"signature",type:"object",raw:`{\r
  children: ReactNode;\r
  className?: string;\r
}`,signature:{properties:[{key:"children",value:{name:"ReactNode",required:!0}},{key:"className",value:{name:"string",required:!1}}]},alias:"TableCaptionProps"}}],returns:null},{name:"Head",docblock:null,modifiers:["static"],params:[{name:"{ children, className }: TableHeadProps",optional:!1,type:{name:"signature",type:"object",raw:`{\r
  children: ReactNode;\r
  className?: string;\r
}`,signature:{properties:[{key:"children",value:{name:"ReactNode",required:!0}},{key:"className",value:{name:"string",required:!1}}]},alias:"TableHeadProps"}}],returns:null},{name:"Body",docblock:null,modifiers:["static"],params:[{name:"{ children, className }: TableBodyProps",optional:!1,type:{name:"signature",type:"object",raw:`{\r
  children: ReactNode;\r
  className?: string;\r
}`,signature:{properties:[{key:"children",value:{name:"ReactNode",required:!0}},{key:"className",value:{name:"string",required:!1}}]},alias:"TableBodyProps"}}],returns:null},{name:"Row",docblock:null,modifiers:["static"],params:[{name:"{ children, className }: TableRowProps",optional:!1,type:{name:"signature",type:"object",raw:`{\r
  children: ReactNode;\r
  className?: string;\r
}`,signature:{properties:[{key:"children",value:{name:"ReactNode",required:!0}},{key:"className",value:{name:"string",required:!1}}]},alias:"TableRowProps"}}],returns:null},{name:"Cell",docblock:null,modifiers:["static"],params:[{name:'{ children, align = "left", colSpan, className }: TableCellProps',optional:!1,type:{name:"signature",type:"object",raw:`{\r
  children: ReactNode;\r
  align?: TableAlign;\r
  colSpan?: number;\r
  className?: string;\r
}`,signature:{properties:[{key:"children",value:{name:"ReactNode",required:!0}},{key:"align",value:{name:"union",raw:'"left" | "center" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"right"'}],required:!1}},{key:"colSpan",value:{name:"number",required:!1}},{key:"className",value:{name:"string",required:!1}}]},alias:"TableCellProps"}}],returns:null},{name:"HeaderCell",docblock:null,modifiers:["static"],params:[{name:`{\r
  children,\r
  align = "left",\r
  scope = "col",\r
  className,\r
}: TableHeaderCellProps`,optional:!1,type:{name:"signature",type:"object",raw:`{\r
  children: ReactNode;\r
  align?: TableAlign;\r
  scope?: string;\r
  className?: string;\r
}`,signature:{properties:[{key:"children",value:{name:"ReactNode",required:!0}},{key:"align",value:{name:"union",raw:'"left" | "center" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"right"'}],required:!1}},{key:"scope",value:{name:"string",required:!1}},{key:"className",value:{name:"string",required:!1}}]},alias:"TableHeaderCellProps"}}],returns:null}],displayName:"Table",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},caption:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const X={title:"Components/Table",parameters:{layout:"padded"}},b=[{id:1,name:"Alice Johnson",role:"Engineer",status:"active",joined:"2023-01-15"},{id:2,name:"Bob Smith",role:"Designer",status:"active",joined:"2022-08-20"},{id:3,name:"Carol White",role:"Manager",status:"inactive",joined:"2021-03-10"},{id:4,name:"David Brown",role:"Engineer",status:"active",joined:"2023-06-01"}],t={render:()=>e.jsxs(a,{children:[e.jsx(a.Head,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{children:"Name"}),e.jsx(a.HeaderCell,{children:"Role"}),e.jsx(a.HeaderCell,{children:"Status"}),e.jsx(a.HeaderCell,{children:"Joined"})]})}),e.jsx(a.Body,{children:b.map(l=>e.jsxs(a.Row,{children:[e.jsx(a.Cell,{children:l.name}),e.jsx(a.Cell,{children:l.role}),e.jsx(a.Cell,{children:e.jsx(m,{variant:l.status==="active"?"success":"default",label:l.status})}),e.jsx(a.Cell,{children:l.joined})]},l.id))})]})},i={render:()=>e.jsxs(a,{caption:"Team members sorted by name",children:[e.jsx(a.Head,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{children:e.jsxs("button",{className:"flex items-center gap-1 hover:text-primary transition-colors",children:["Name",e.jsx("svg",{className:"size-4",viewBox:"0 0 16 16",fill:"currentColor","aria-hidden":"true",children:e.jsx("path",{d:"M8 3L4 9h8L8 3zm0 10l4-6H4l4 6z"})})]})}),e.jsx(a.HeaderCell,{children:"Role"}),e.jsx(a.HeaderCell,{children:"Status"}),e.jsx(a.HeaderCell,{align:"right",children:"Joined"})]})}),e.jsx(a.Body,{children:b.map(l=>e.jsxs(a.Row,{children:[e.jsx(a.Cell,{children:l.name}),e.jsx(a.Cell,{children:l.role}),e.jsx(a.Cell,{children:e.jsx(m,{variant:l.status==="active"?"success":"default",label:l.status})}),e.jsx(a.Cell,{align:"right",children:l.joined})]},l.id))})]})},d={render:()=>e.jsxs(a,{children:[e.jsx(a.Head,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{children:"Name"}),e.jsx(a.HeaderCell,{children:"Role"}),e.jsx(a.HeaderCell,{children:"Status"}),e.jsx(a.HeaderCell,{align:"right",children:"Actions"})]})}),e.jsx(a.Body,{children:b.map(l=>e.jsxs(a.Row,{children:[e.jsx(a.Cell,{children:l.name}),e.jsx(a.Cell,{children:l.role}),e.jsx(a.Cell,{children:e.jsx(m,{variant:l.status==="active"?"success":"default",label:l.status})}),e.jsx(a.Cell,{align:"right",children:e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx(p,{size:"sm",variant:"outline",children:"Edit"}),e.jsx(p,{size:"sm",variant:"destructive",children:"Delete"})]})})]},l.id))})]})},o={name:"Empty State",render:()=>e.jsxs(a,{children:[e.jsx(a.Head,{children:e.jsxs(a.Row,{children:[e.jsx(a.HeaderCell,{children:"Name"}),e.jsx(a.HeaderCell,{children:"Role"}),e.jsx(a.HeaderCell,{children:"Status"})]})}),e.jsx(a.Body,{children:e.jsx(a.Row,{children:e.jsx(a.Cell,{colSpan:3,className:"py-12",children:e.jsx(_,{title:"No team members",description:"Get started by adding your first team member."})})})})]})};var T,C,h;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Table>\r
      <Table.Head>\r
        <Table.Row>\r
          <Table.HeaderCell>Name</Table.HeaderCell>\r
          <Table.HeaderCell>Role</Table.HeaderCell>\r
          <Table.HeaderCell>Status</Table.HeaderCell>\r
          <Table.HeaderCell>Joined</Table.HeaderCell>\r
        </Table.Row>\r
      </Table.Head>\r
      <Table.Body>\r
        {SAMPLE_DATA.map(row => <Table.Row key={row.id}>\r
            <Table.Cell>{row.name}</Table.Cell>\r
            <Table.Cell>{row.role}</Table.Cell>\r
            <Table.Cell>\r
              <Badge variant={row.status === "active" ? "success" : "default"} label={row.status} />\r
            </Table.Cell>\r
            <Table.Cell>{row.joined}</Table.Cell>\r
          </Table.Row>)}\r
      </Table.Body>\r
    </Table>
}`,...(h=(C=t.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var x,g,j;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Table caption="Team members sorted by name">\r
      <Table.Head>\r
        <Table.Row>\r
          <Table.HeaderCell>\r
            <button className="flex items-center gap-1 hover:text-primary transition-colors">\r
              Name\r
              <svg className="size-4" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">\r
                <path d="M8 3L4 9h8L8 3zm0 10l4-6H4l4 6z" />\r
              </svg>\r
            </button>\r
          </Table.HeaderCell>\r
          <Table.HeaderCell>Role</Table.HeaderCell>\r
          <Table.HeaderCell>Status</Table.HeaderCell>\r
          <Table.HeaderCell align="right">Joined</Table.HeaderCell>\r
        </Table.Row>\r
      </Table.Head>\r
      <Table.Body>\r
        {SAMPLE_DATA.map(row => <Table.Row key={row.id}>\r
            <Table.Cell>{row.name}</Table.Cell>\r
            <Table.Cell>{row.role}</Table.Cell>\r
            <Table.Cell>\r
              <Badge variant={row.status === "active" ? "success" : "default"} label={row.status} />\r
            </Table.Cell>\r
            <Table.Cell align="right">{row.joined}</Table.Cell>\r
          </Table.Row>)}\r
      </Table.Body>\r
    </Table>
}`,...(j=(g=i.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};var y,H,f;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Table>\r
      <Table.Head>\r
        <Table.Row>\r
          <Table.HeaderCell>Name</Table.HeaderCell>\r
          <Table.HeaderCell>Role</Table.HeaderCell>\r
          <Table.HeaderCell>Status</Table.HeaderCell>\r
          <Table.HeaderCell align="right">Actions</Table.HeaderCell>\r
        </Table.Row>\r
      </Table.Head>\r
      <Table.Body>\r
        {SAMPLE_DATA.map(row => <Table.Row key={row.id}>\r
            <Table.Cell>{row.name}</Table.Cell>\r
            <Table.Cell>{row.role}</Table.Cell>\r
            <Table.Cell>\r
              <Badge variant={row.status === "active" ? "success" : "default"} label={row.status} />\r
            </Table.Cell>\r
            <Table.Cell align="right">\r
              <div className="flex justify-end gap-2">\r
                <Button size="sm" variant="outline">Edit</Button>\r
                <Button size="sm" variant="destructive">Delete</Button>\r
              </div>\r
            </Table.Cell>\r
          </Table.Row>)}\r
      </Table.Body>\r
    </Table>
}`,...(f=(H=d.parameters)==null?void 0:H.docs)==null?void 0:f.source}}};var N,v,R;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: "Empty State",
  render: () => <Table>\r
      <Table.Head>\r
        <Table.Row>\r
          <Table.HeaderCell>Name</Table.HeaderCell>\r
          <Table.HeaderCell>Role</Table.HeaderCell>\r
          <Table.HeaderCell>Status</Table.HeaderCell>\r
        </Table.Row>\r
      </Table.Head>\r
      <Table.Body>\r
        <Table.Row>\r
          <Table.Cell colSpan={3} className="py-12">\r
            <EmptyState title="No team members" description="Get started by adding your first team member." />\r
          </Table.Cell>\r
        </Table.Row>\r
      </Table.Body>\r
    </Table>
}`,...(R=(v=o.parameters)==null?void 0:v.docs)==null?void 0:R.source}}};const Y=["Default","WithSorting","WithActions","EmptyStateStory"];export{t as Default,o as EmptyStateStory,d as WithActions,i as WithSorting,Y as __namedExportsOrder,X as default};
