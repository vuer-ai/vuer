import{z as s,f as l,J as d,r as i,j as e,H as p,i as u,a as m,b as f,c,o as y}from"../chunks/chunk-CF7PZJR8.js";import{V as h,A as S,W as w,b as g,f as T}from"../chunks/chunk-DH1DswfA.js";import{j as v}from"../chunks/chunk-BUK5U-1n.js";import{T as x}from"../chunks/chunk-DvrnVFXc.js";import{F as E}from"../chunks/chunk-BGUxsRwc.js";import{X as P,D as j,Z as z}from"../chunks/chunk-BD-Bs-uJ.js";import{L as A}from"../chunks/chunk-3_gWb2bj.js";import"../chunks/chunk-BdvozYt0.js";/* empty css                      */import"../chunks/chunk-BXl3LOEh.js";import"../chunks/chunk-2B0sFjzh.js";import"../chunks/chunk-ChHTQ4Sk.js";import"../chunks/chunk-SmZMj1n8.js";import"../chunks/chunk-BHDKgRpG.js";import"../chunks/chunk-Q1j31JH2.js";import"../chunks/chunk-4_gci6_w.js";const U="_main_ct6c1_1",D={main:U},C=v.load(`children:
  - tag: ContribLoader
    key: contrib-loader-mujoco
    library: "@vuer-ai/mujoco-ts"
    version: "0.0.79"
    main: dist/index.umd.js
    dependencies:
      - VUER
      - LEVA
      - FIBER
bgChildren:
  - tag: Grid
    key: grid
  - tag: HemisphereLightStage
    key: light-stage
  - tag: Gamepad
    key: gamepad-0
    index: 0
  - tag: Hands
    key: hands
    fps: 30
    stream: true
  - tag: MotionControllers
    key: motion-controllers
    fps: 30
    stream: true
  - tag: SceneCamera
    key: SceneCamera
    position:
      - 0
      - 5
      - 10
  - tag: SceneCameraControl
    key: SceneCameraControl
    makeDefault: true
  - tag: CameraPreviewThumbs
    key: CameraPreviewThumbs
  - tag: CameraPreviewOverlay
    key: CameraPreviewOverlay

`);typeof window<"u"&&(window.React=s,window.ReactDOM=l,window.VUER=h,window.THREE=x,window.JSX=d,window.FIBER=E,window.XR=P,window.Drei=j,window.LEVA=A,window.ZUSTAND=z);function R({children:o}){const[n,a]=i.useState(!1);return i.useEffect(()=>{a(!0)},[]),n?e.jsx(e.Fragment,{children:o}):null}function k(){const{set:o}=g(n=>n.ops);return i.useLayoutEffect(()=>{o({etype:"SET",ts:Date.now()/1e3,data:{tag:"Scene",...C}})},[o]),e.jsx(T,{editMode:!1})}function V(){const[{message:o,mtype:n},a]=i.useState({message:null,mtype:null}),r=i.useMemo(()=>({showError:t=>setTimeout(()=>a({message:t,mtype:"error"}),1),showSuccess:t=>setTimeout(()=>a({message:t,mtype:"success"}),1),showWarning:t=>setTimeout(()=>a({message:t,mtype:"warning"}),1),showInfo:t=>setTimeout(()=>a({message:t,mtype:"info"}),1),showModal:t=>{console.log(t)}}),[]);return e.jsxs(e.Fragment,{children:[e.jsx(p,{children:e.jsx("title",{children:"Vuer (Technical Preview)"})}),e.jsx("main",{className:D.main,children:e.jsx(S,{value:r,children:e.jsx(R,{children:e.jsx(w,{children:e.jsx(k,{})})})})})]})}const b=Object.freeze(Object.defineProperty({__proto__:null,default:V},Symbol.toStringTag,{value:"Module"})),q={hasServerOnlyHook:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},guardEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/__internal/integration/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:y}},onPageTransitionStart:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+onPageTransitionStart.ts",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:c}},onPageTransitionEnd:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+onPageTransitionEnd.ts",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:f}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/index/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:b}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},Layout:{type:"cumulative",definedAtData:[{filePathToShowToUser:"/pages/+Layout.tsx",fileExportPathToShowToUser:[]}],valueSerialized:[{type:"plus-file",exportValues:m}]},title:{type:"standard",definedAtData:{filePathToShowToUser:"/+config.ts",fileExportPathToShowToUser:["default","title"]},valueSerialized:{type:"js-serialized",value:"Vuer UIKit | FortyFive Labs"}},Loading:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/__internal/integration/Loading",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:u}}};export{q as configValuesSerialized};
