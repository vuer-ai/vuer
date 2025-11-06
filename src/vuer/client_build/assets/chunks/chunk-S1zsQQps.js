import{r as o,m as v,w as F,k as I}from"./chunk-Bxh3mmdk.js";import{p as h,k as W,q as i}from"./chunk-CdabVADL.js";const R=h?o.useLayoutEffect:o.useEffect;function S(u,d){const f=W(d?.client),[p,s]=o.useState(()=>w(f)),t=o.useRef({result:p,mutationId:0,isMounted:!0,client:f,mutation:u,options:d});R(()=>{Object.assign(t.current,{client:f,options:d,mutation:u})});const k=o.useCallback((e={})=>{const{options:E,mutation:C}=t.current,$={...E,mutation:C},a=e.client||t.current.client;!t.current.result.loading&&t.current.isMounted&&s(t.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:a});const m=++t.current.mutationId,c=v($,e);return F(a.mutate(c).then(r=>{const{data:l,error:n}=r,U=e.onError||t.current.options?.onError;if(n&&U&&U(n,c),m===t.current.mutationId){const M={called:!0,loading:!1,data:l,error:n,client:a};t.current.isMounted&&!I(t.current.result,M)&&s(t.current.result=M)}const b=e.onCompleted||t.current.options?.onCompleted;return n||b?.(r.data,c),r},r=>{if(m===t.current.mutationId&&t.current.isMounted){const n={loading:!1,error:r,data:void 0,called:!0,client:a};I(t.current.result,n)||s(t.current.result=n)}const l=e.onError||t.current.options?.onError;throw l&&l(r,c),r}))},[]),g=o.useCallback(()=>{if(t.current.isMounted){const e=w(t.current.client);Object.assign(t.current,{mutationId:0,result:e}),s(e)}},[]);return o.useEffect(()=>{const e=t.current;return e.isMounted=!0,()=>{e.isMounted=!1}},[]),[k,{reset:g,...p}]}function w(u){return{data:void 0,error:void 0,called:!1,loading:!1,client:u}}const y=i(`
  mutation MWorkspaceUpdate($input: WorkspaceUpdateInput!) {
    workspaceUpdate(input: $input) {
      ...FWorkspace
    }
  }
`),L=i(`
  mutation MFollowUser($userId: String!) {
    followUser(userId: $userId) {
      ...FFollowUser
    }
  }
`),O=i(`
  mutation MUnfollowUser($userId: String!) {
    unfollowUser(userId: $userId) {
      ...FFollowUser
    }
  }
`),A=i(`
  mutation MWorkspaceCoverUrl($input: WorkspaceCoverUrlInput!) {
    workspaceCoverUrl(input: $input) {
      fileUrl
      uploadUrl
    }
  }
`);export{O as a,R as b,A as c,L as f,S as u,y as w};
