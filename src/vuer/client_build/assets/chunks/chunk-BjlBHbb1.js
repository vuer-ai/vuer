import{r as s,j as i}from"./chunk-CF7PZJR8.js";import{u as U,h as Z,i as h,j as x,P as v,f as m,k as K,l as R,m as q,D as Y,n as z}from"./chunk-ChHTQ4Sk.js";import{l as J,R as Q,u as X,F as ee}from"./chunk-SmZMj1n8.js";var C="Dialog",[P]=Z(C),[te,u]=P(C),O=e=>{const{__scopeDialog:t,children:r,open:n,defaultOpen:a,onOpenChange:o,modal:l=!0}=e,c=s.useRef(null),d=s.useRef(null),[g,p]=U({prop:n,defaultProp:a??!1,onChange:o,caller:C});return i.jsx(te,{scope:t,triggerRef:c,contentRef:d,contentId:h(),titleId:h(),descriptionId:h(),open:g,onOpenChange:p,onOpenToggle:s.useCallback(()=>p(V=>!V),[p]),modal:l,children:r})};O.displayName=C;var A="DialogTrigger",I=s.forwardRef((e,t)=>{const{__scopeDialog:r,...n}=e,a=u(A,r),o=R(t,a.triggerRef);return i.jsx(v.button,{type:"button","aria-haspopup":"dialog","aria-expanded":a.open,"aria-controls":a.contentId,"data-state":E(a.open),...n,ref:o,onClick:m(e.onClick,a.onOpenToggle)})});I.displayName=A;var y="DialogPortal",[oe,b]=P(y,{forceMount:void 0}),j=e=>{const{__scopeDialog:t,forceMount:r,children:n,container:a}=e,o=u(y,t);return i.jsx(oe,{scope:t,forceMount:r,children:s.Children.map(n,l=>i.jsx(x,{present:r||o.open,children:i.jsx(K,{asChild:!0,container:a,children:l})}))})};j.displayName=y;var D="DialogOverlay",w=s.forwardRef((e,t)=>{const r=b(D,e.__scopeDialog),{forceMount:n=r.forceMount,...a}=e,o=u(D,e.__scopeDialog);return o.modal?i.jsx(x,{present:n||o.open,children:i.jsx(ne,{...a,ref:t})}):null});w.displayName=D;var re=q("DialogOverlay.RemoveScroll"),ne=s.forwardRef((e,t)=>{const{__scopeDialog:r,...n}=e,a=u(D,r);return i.jsx(Q,{as:re,allowPinchZoom:!0,shards:[a.contentRef],children:i.jsx(v.div,{"data-state":E(a.open),...n,ref:t,style:{pointerEvents:"auto",...n.style}})})}),f="DialogContent",M=s.forwardRef((e,t)=>{const r=b(f,e.__scopeDialog),{forceMount:n=r.forceMount,...a}=e,o=u(f,e.__scopeDialog);return i.jsx(x,{present:n||o.open,children:o.modal?i.jsx(ae,{...a,ref:t}):i.jsx(se,{...a,ref:t})})});M.displayName=f;var ae=s.forwardRef((e,t)=>{const r=u(f,e.__scopeDialog),n=s.useRef(null),a=R(t,r.contentRef,n);return s.useEffect(()=>{const o=n.current;if(o)return J(o)},[]),i.jsx(T,{...e,ref:a,trapFocus:r.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:m(e.onCloseAutoFocus,o=>{o.preventDefault(),r.triggerRef.current?.focus()}),onPointerDownOutside:m(e.onPointerDownOutside,o=>{const l=o.detail.originalEvent,c=l.button===0&&l.ctrlKey===!0;(l.button===2||c)&&o.preventDefault()}),onFocusOutside:m(e.onFocusOutside,o=>o.preventDefault())})}),se=s.forwardRef((e,t)=>{const r=u(f,e.__scopeDialog),n=s.useRef(!1),a=s.useRef(!1);return i.jsx(T,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:o=>{e.onCloseAutoFocus?.(o),o.defaultPrevented||(n.current||r.triggerRef.current?.focus(),o.preventDefault()),n.current=!1,a.current=!1},onInteractOutside:o=>{e.onInteractOutside?.(o),o.defaultPrevented||(n.current=!0,o.detail.originalEvent.type==="pointerdown"&&(a.current=!0));const l=o.target;r.triggerRef.current?.contains(l)&&o.preventDefault(),o.detail.originalEvent.type==="focusin"&&a.current&&o.preventDefault()}})}),T=s.forwardRef((e,t)=>{const{__scopeDialog:r,trapFocus:n,onOpenAutoFocus:a,onCloseAutoFocus:o,...l}=e,c=u(f,r),d=s.useRef(null),g=R(t,d);return X(),i.jsxs(i.Fragment,{children:[i.jsx(ee,{asChild:!0,loop:!0,trapped:n,onMountAutoFocus:a,onUnmountAutoFocus:o,children:i.jsx(Y,{role:"dialog",id:c.contentId,"aria-describedby":c.descriptionId,"aria-labelledby":c.titleId,"data-state":E(c.open),...l,ref:g,onDismiss:()=>c.onOpenChange(!1)})}),i.jsxs(i.Fragment,{children:[i.jsx(ie,{titleId:c.titleId}),i.jsx(le,{contentRef:d,descriptionId:c.descriptionId})]})]})}),_="DialogTitle",k=s.forwardRef((e,t)=>{const{__scopeDialog:r,...n}=e,a=u(_,r);return i.jsx(v.h2,{id:a.titleId,...n,ref:t})});k.displayName=_;var F="DialogDescription",S=s.forwardRef((e,t)=>{const{__scopeDialog:r,...n}=e,a=u(F,r);return i.jsx(v.p,{id:a.descriptionId,...n,ref:t})});S.displayName=F;var L="DialogClose",W=s.forwardRef((e,t)=>{const{__scopeDialog:r,...n}=e,a=u(L,r);return i.jsx(v.button,{type:"button",...n,ref:t,onClick:m(e.onClick,()=>a.onOpenChange(!1))})});W.displayName=L;function E(e){return e?"open":"closed"}var $="DialogTitleWarning",[xe,G]=z($,{contentName:f,titleName:_,docsSlug:"dialog"}),ie=({titleId:e})=>{const t=G($),r=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return s.useEffect(()=>{e&&(document.getElementById(e)||console.error(r))},[r,e]),null},ce="DialogDescriptionWarning",le=({contentRef:e,descriptionId:t})=>{const n=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${G(ce).contentName}}.`;return s.useEffect(()=>{const a=e.current?.getAttribute("aria-describedby");t&&a&&(document.getElementById(t)||console.warn(n))},[n,e,t]),null},Re=O,ye=I,_e=j,Ee=w,Ne=M,Pe=k,Oe=S,Ae=W;/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,r,n)=>n?n.toUpperCase():r.toLowerCase());/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=e=>{const t=de(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var fe={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=s.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:n,className:a="",children:o,iconNode:l,...c},d)=>s.createElement("svg",{ref:d,...fe,width:t,height:t,stroke:e,strokeWidth:n?Number(r)*24/Number(t):r,className:H("lucide",a),...!o&&!ge(c)&&{"aria-hidden":"true"},...c},[...l.map(([g,p])=>s.createElement(g,p)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=(e,t)=>{const r=s.forwardRef(({className:n,...a},o)=>s.createElement(pe,{ref:o,iconNode:t,className:H(`lucide-${ue(N(e))}`,`lucide-${e}`,n),...a}));return r.displayName=N(e),r};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Ie=B("earth",me);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],be=B("log-out",ve);export{Ne as C,Oe as D,Ie as E,be as L,Ee as O,_e as P,Re as R,Pe as T,Ae as a,ye as b,B as c};
