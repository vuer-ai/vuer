import{j as e,r as m,t as f}from"./chunk-CF7PZJR8.js";import{u as h,W as l,g as x,e as k,w as v}from"./chunk-DH9VFE1A.js";import{u as d,w,b as y}from"./chunk-CcncIH-T.js";import{D as g,a as j,b as M,c as p}from"./chunk-SmZMj1n8.js";import{B as b}from"./chunk-ChHTQ4Sk.js";import{c as u}from"./chunk-BjlBHbb1.js";/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]],W=u("ellipsis-vertical",D);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["path",{d:"M12 2v13",key:"1km8f5"}],["path",{d:"m16 6-4-4-4 4",key:"13yo43"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}]],N=u("share",_);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=[["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],U=u("trash",I);function C(r){const t=new Intl.RelativeTimeFormat("en",{numeric:"auto"}),n=new Date().getTime(),a=(r-n)/1e3,o=Math.abs(a),s=[{max:60,value:1,name:"second"},{max:3600,value:60,name:"minute"},{max:86400,value:3600,name:"hour"},{max:2592e3,value:86400,name:"day"},{max:31536e3,value:2592e3,name:"month"},{max:1/0,value:31536e3,name:"year"}];for(const i of s)if(o<i.max){const c=Math.round(a/i.value);return t.format(c,i.name)}}function A({id:r}){const{data:t}=h({fragment:x,fragmentName:"FWorkspace",from:{__typename:"Workspace",id:r}}),[n]=d(y),[a]=d(w,{update(s,{data:i}){const c=i?.workspaceDelete;c.id&&(s.evict({id:s.identify({__typename:"Workspace",id:c.id})}),s.gc())}}),o=t.visibility===l.Public;return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex w-full items-center gap-md",children:[e.jsx("p",{className:"flex-1 overflow-hidden text-uk-md/uk-md font-medium overflow-ellipsis whitespace-nowrap",children:t.name}),e.jsxs(g,{children:[e.jsx(j,{asChild:!0,children:e.jsx(b,{icon:!0,variant:"ghost",children:e.jsx(W,{})})}),e.jsxs(M,{onClick:s=>s.stopPropagation(),children:[e.jsxs(p,{onClick:()=>a({variables:{input:{workspaceId:r}}}),children:[e.jsx(U,{})," Delete"]}),e.jsxs(p,{onSelect:()=>n({variables:{input:{visibility:o?l.Private:l.Public,workspaceId:r}}}),children:[e.jsx(N,{})," ",o?"Unshare":"Share"]})]})]})]}),e.jsxs("div",{className:"flex-1 overflow-hidden text-uk-sm/uk-sm overflow-ellipsis whitespace-nowrap text-text-secondary",children:["Edited: ",C(new Date(t.updatedAt).getTime())]})]})}const B=r=>{const{data:t,loading:n,error:a}=k(v,{variables:{input:{username:r}}}),o=m.useMemo(()=>t?.userWorkspaces.map(s=>s.id)||[],[t?.userWorkspaces]);return m.useEffect(()=>{a&&f.error(a.message)},[a]),m.useMemo(()=>({ids:o,loading:n,error:a}),[a,o,n])};export{A as W,B as u};
