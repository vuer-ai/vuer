import{r as i,j as e,H as s,$ as l,Y as d,J as p,i as u,a as m,b as f,c,o as h}from"../chunks/chunk-Bxh3mmdk.js";import{A as S,W as y,u as T,S as g,V as w,L as v,Z as x}from"../chunks/chunk-BcIzroif.js";import{j as E}from"../chunks/chunk-Bi65IN6L.js";import{T as P,F as j}from"../chunks/chunk-CfPHAf7B.js";import{X as U,D as A}from"../chunks/chunk-D9NTQ-8-.js";import"../chunks/chunk-liTnN7pR.js";/* empty css                      */import"../chunks/chunk-BXl3LOEh.js";import"../chunks/chunk-BryG31u9.js";import"../chunks/chunk-BY7XLEYA.js";import"../chunks/chunk-DK86WuFI.js";import"../chunks/chunk-CvLG4DX1.js";import"../chunks/chunk-DwlDFfQQ.js";import"../chunks/chunk-XNusesNe.js";import"../chunks/chunk-Dc0d9LZe.js";import"../chunks/chunk-CkhHjPPW.js";import"../chunks/chunk-B-rFznE-.js";const D="_main_ct6c1_1",z={main:D},R=E.load(`children:
  - tag: ContribLoader
    key: contrib-loader-mujoco
    library: "@vuer-ai/mujoco-ts"
    version: "0.0.75"
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
  - tag: OrbitControls
    key: orb-control
    makeDefault: true
  - tag: PerspectiveCamera
    key: perspective-camera
    makeDefault: true
    position: [ 0, 2, 2 ]
`);typeof window<"u"&&(window.React=l,window.ReactDOM=d,window.VUER=w,window.THREE=P,window.JSX=p,window.FIBER=j,window.XR=U,window.Drei=A,window.LEVA=v,window.ZUSTAND=x);function V({children:o}){const[n,a]=i.useState(!1);return i.useEffect(()=>{a(!0)},[]),n?e.jsx(e.Fragment,{children:o}):null}function b(){const{set:o}=T(n=>n.ops);return i.useLayoutEffect(()=>{o({etype:"SET",ts:Date.now(),data:{tag:"Scene",...R}})},[o]),e.jsx(g,{editMode:!1})}function k(){const[{message:o,mtype:n},a]=i.useState({message:null,mtype:null}),r=i.useMemo(()=>({showError:t=>setTimeout(()=>a({message:t,mtype:"error"}),1),showSuccess:t=>setTimeout(()=>a({message:t,mtype:"success"}),1),showWarning:t=>setTimeout(()=>a({message:t,mtype:"warning"}),1),showInfo:t=>setTimeout(()=>a({message:t,mtype:"info"}),1),showModal:t=>{console.log(t)}}),[]);return e.jsxs(e.Fragment,{children:[e.jsx(s,{children:e.jsx("title",{children:"Vuer (Technical Preview)"})}),e.jsx("main",{className:z.main,children:e.jsx(S,{value:r,children:e.jsx(V,{children:e.jsx(y,{children:e.jsx(b,{})})})})})]})}const L=Object.freeze(Object.defineProperty({__proto__:null,default:k},Symbol.toStringTag,{value:"Module"})),q={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/__internal/integration/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:h}},onPageTransitionStart:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+onPageTransitionStart.ts",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:c}},onPageTransitionEnd:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+onPageTransitionEnd.ts",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:f}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/index/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:L}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},Layout:{type:"cumulative",definedAtData:[{filePathToShowToUser:"/pages/+Layout.tsx",fileExportPathToShowToUser:[]}],valueSerialized:[{type:"plus-file",exportValues:m}]},title:{type:"standard",definedAtData:{filePathToShowToUser:"/+config.ts",fileExportPathToShowToUser:["default","title"]},valueSerialized:{type:"js-serialized",value:"Vuer UIKit | FortyFive Labs"}},Loading:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/__internal/integration/Loading",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:u}}};export{q as configValuesSerialized};
