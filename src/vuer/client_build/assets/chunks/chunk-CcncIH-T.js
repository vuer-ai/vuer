import{r as o,l as F,p as W,h as k}from"./chunk-CF7PZJR8.js";import{n as v,i as b,o as u}from"./chunk-DH9VFE1A.js";import{c as y}from"./chunk-BjlBHbb1.js";const D=v?o.useLayoutEffect:o.useEffect;function O(s,p){const d=b(p?.client),[f,a]=o.useState(()=>w(d)),t=o.useRef({result:f,mutationId:0,isMounted:!0,client:d,mutation:s,options:p});D(()=>{Object.assign(t.current,{client:d,options:p,mutation:s})});const I=o.useCallback((e={})=>{const{options:h,mutation:C}=t.current,$={...h,mutation:C},c=e.client||t.current.client;!t.current.result.loading&&t.current.isMounted&&a(t.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:c});const U=++t.current.mutationId,l=F($,e);return W(c.mutate(l).then(n=>{const{data:i,error:r}=n,m=e.onError||t.current.options?.onError;if(r&&m&&m(r,l),U===t.current.mutationId){const M={called:!0,loading:!1,data:i,error:r,client:c};t.current.isMounted&&!k(t.current.result,M)&&a(t.current.result=M)}const g=e.onCompleted||t.current.options?.onCompleted;return r||g?.(n.data,l),n},n=>{if(U===t.current.mutationId&&t.current.isMounted){const r={loading:!1,error:n,data:void 0,called:!0,client:c};k(t.current.result,r)||a(t.current.result=r)}const i=e.onError||t.current.options?.onError;throw i&&i(n,l),n}))},[]),E=o.useCallback(()=>{if(t.current.isMounted){const e=w(t.current.client);Object.assign(t.current,{mutationId:0,result:e}),a(e)}},[]);return o.useEffect(()=>{const e=t.current;return e.isMounted=!0,()=>{e.isMounted=!1}},[]),[I,{reset:E,...f}]}function w(s){return{data:void 0,error:void 0,called:!1,loading:!1,client:s}}/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],P=y("plus",R),_=u(`
  mutation MWorkspaceDelete($input: WorkspaceDeleteInput!) {
    workspaceDelete(input: $input) {
      ...FWorkspace
    }
  }
`),A=u(`
  mutation MWorkspaceUpdate($input: WorkspaceUpdateInput!) {
    workspaceUpdate(input: $input) {
      ...FWorkspace
    }
  }
`),N=u(`
  mutation MFollowUser($input: FollowUserInput!) {
    followUser(input: $input) {
      ...FFollowUser
    }
  }
`),S=u(`
  mutation MUnfollowUser($input: UnfollowUserInput!) {
    unfollowUser(input: $input) {
      ...FFollowUser
    }
  }
`),z=u(`
  mutation MWorkspaceCoverUrl($input: WorkspaceCoverUrlInput!) {
    workspaceCoverUrl(input: $input) {
      fileUrl
      uploadUrl
    }
  }
`);export{P,S as a,A as b,D as c,z as d,N as f,O as u,_ as w};
