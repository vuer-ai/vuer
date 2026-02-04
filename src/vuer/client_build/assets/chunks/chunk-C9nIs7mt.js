import{r as e,j as P}from"./chunk-CF7PZJR8.js";import{Z as o,_ as se,P as ue,n as Q,F as T}from"./chunk-BgWqmYCh.js";import{j as I,B as ce,ac as H,S as J,h as b,b as _,cw as pe,D as fe,Q as de}from"./chunk-DvrnVFXc.js";import{b3 as me,a as ve}from"./chunk-DH1DswfA.js";import{a as xe}from"./chunk-2B0sFjzh.js";import"./chunk-BdvozYt0.js";/* empty css              */import"./chunk-BXl3LOEh.js";import"./chunk-ChHTQ4Sk.js";import"./chunk-BHDKgRpG.js";import"./chunk-Q1j31JH2.js";import"./chunk-SmZMj1n8.js";const Me=3;function he({matrices:a,count:d,color:n,ringSize:u=.05,innerAlpha:r=.02,outerAlpha:f=.3,clip:i}){const t=e.useRef(null),m=e.useMemo(()=>new pe(1,32),[]),l=e.useMemo(()=>new J({uniforms:{uColor:{value:new _(n)},ringSize:{value:u},innerAlpha:{value:r},outerAlpha:{value:f},clipEnabled:{value:!1},clipMin:{value:new b(-5,-5,-5)},clipMax:{value:new b(5,5,5)}},vertexShader:`
        varying vec2 vUv;
        varying vec3 vWorldPosition;
        void main() {
          vUv = uv;
          // Calculate world position for clipping
          vec4 worldPos = modelMatrix * instanceMatrix * vec4(position, 1.0);
          vWorldPosition = worldPos.xyz;
          gl_Position = projectionMatrix * viewMatrix * worldPos;
        }
      `,fragmentShader:`
        uniform vec3 uColor;
        uniform float ringSize;
        uniform float innerAlpha;
        uniform float outerAlpha;
        uniform bool clipEnabled;
        uniform vec3 clipMin;
        uniform vec3 clipMax;
        varying vec2 vUv;
        varying vec3 vWorldPosition;

        void main() {
          // Apply clip bounds check
          if (clipEnabled) {
            if (vWorldPosition.x < clipMin.x || vWorldPosition.x > clipMax.x ||
                vWorldPosition.y < clipMin.y || vWorldPosition.y > clipMax.y ||
                vWorldPosition.z < clipMin.z || vWorldPosition.z > clipMax.z) {
              discard;
            }
          }

          // Calculate distance from center (UV center is 0.5, 0.5)
          vec2 center = vUv - 0.5;
          float r = length(center) * 2.0;  // Normalize to 0-1

          // Clip to circle
          if (r > 1.0) discard;

          // Ring effect: inner area almost transparent, edge visible
          float alpha = r < (1.0 - ringSize) ? innerAlpha : outerAlpha;

          gl_FragColor = vec4(uColor, alpha);
        }
      `,transparent:!0,side:fe,depthWrite:!1,depthTest:!1}),[]);return e.useEffect(()=>{l.uniforms.uColor.value=new _(n)},[n,l]),e.useEffect(()=>{l.uniforms.ringSize.value=u},[u,l]),e.useEffect(()=>{l.uniforms.innerAlpha.value=r},[r,l]),e.useEffect(()=>{l.uniforms.outerAlpha.value=f},[f,l]),e.useEffect(()=>{i?(l.uniforms.clipEnabled.value=i.enabled,l.uniforms.clipMin.value.set(i.minX,i.minY,i.minZ),l.uniforms.clipMax.value.set(i.maxX,i.maxY,i.maxZ)):l.uniforms.clipEnabled.value=!1},[i,l]),e.useEffect(()=>()=>{m.dispose(),l.dispose()},[m,l]),e.useEffect(()=>{if(!t.current)return;const C=t.current,y=new I,X=new b,j=new de,h=new b;for(let M=0;M<d;M++)y.fromArray(a,M*16),y.decompose(X,j,h),h.multiplyScalar(Me),y.compose(X,j,h),C.setMatrixAt(M,y);C.instanceMatrix.needsUpdate=!0},[a,d]),P.jsx("instancedMesh",{ref:t,args:[m,l,d],renderOrder:1e3,raycast:()=>null})}function ye({positions:a,count:d,color:n,size:u,clip:r}){const f=e.useRef(null),i=e.useMemo(()=>{const m=new ce;return m.setAttribute("position",new H(a,3)),m},[a]),t=e.useMemo(()=>new J({uniforms:{uColor:{value:new _(n)},uSize:{value:u},clipEnabled:{value:!1},clipMin:{value:new b(-5,-5,-5)},clipMax:{value:new b(5,5,5)}},vertexShader:`
        uniform float uSize;
        uniform bool clipEnabled;
        uniform vec3 clipMin;
        uniform vec3 clipMax;
        varying float vClipped;

        void main() {
          // Calculate world position
          vec4 worldPos = modelMatrix * vec4(position, 1.0);

          // Check clip bounds
          vClipped = 0.0;
          if (clipEnabled) {
            if (worldPos.x < clipMin.x || worldPos.x > clipMax.x ||
                worldPos.y < clipMin.y || worldPos.y > clipMax.y ||
                worldPos.z < clipMin.z || worldPos.z > clipMax.z) {
              vClipped = 1.0;
            }
          }

          vec4 mvPosition = viewMatrix * worldPos;
          gl_PointSize = uSize * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        uniform vec3 uColor;
        varying float vClipped;

        void main() {
          // Discard clipped points
          if (vClipped > 0.5) discard;

          // Make points circular
          vec2 center = gl_PointCoord - vec2(0.5);
          if (length(center) > 0.5) discard;

          gl_FragColor = vec4(uColor, 1.0);
        }
      `,transparent:!0,depthTest:!1,depthWrite:!1}),[]);return e.useEffect(()=>{t.uniforms.uColor.value=new _(n)},[n,t]),e.useEffect(()=>{t.uniforms.uSize.value=u},[u,t]),e.useEffect(()=>{r?(t.uniforms.clipEnabled.value=r.enabled,t.uniforms.clipMin.value.set(r.minX,r.minY,r.minZ),t.uniforms.clipMax.value.set(r.maxX,r.maxY,r.maxZ)):t.uniforms.clipEnabled.value=!1},[r,t]),e.useEffect(()=>{i.setAttribute("position",new H(a,3)),i.attributes.position.needsUpdate=!0},[a,i]),e.useEffect(()=>()=>{i.dispose(),t.dispose()},[i,t]),P.jsx("points",{ref:f,geometry:i,material:t,renderOrder:2e3,raycast:()=>null})}function ge(a){switch(a?.toLowerCase()){case"ply":return T.PLY;case"spz":return T.SPZ;case"splat":return T.SPLAT;case"ksplat":return T.KSPLAT;case"sog":return T.PCSOGSZIP;default:return}}function we(a){const{mapLocalFileToRemote:d}=ve.getState();for(const[n,u]of Object.entries(d))if(u===a)return n;return a.split(/[?#]/)[0].split("/").pop()}function Ee(a){const d=a.numSplats,n=new Float32Array(d*3),u=new Float32Array(d*16),r=new I;return a.forEachSplat((f,i,t,m,l,C)=>{n[f*3]=i.x,n[f*3+1]=i.y,n[f*3+2]=i.z,r.compose(i,m,t),r.toArray(u,f*16)}),{positions:n,matrices:u,count:d}}function We({_ref:a,_key:d,src:n,render:u="inherit",minDepth:r=1,maxDepth:f=10,showCenterPoints:i=!1,centerPointsColor:t="#2563eb",centerPointsSize:m=.01,showEllipsoids:l=!1,ellipsoidColor:C="#ffffff",ringSize:y=.05,innerAlpha:X=.02,outerAlpha:j=.3,clipEnabled:h=!1,clipMinX:M=-5,clipMaxX:F=5,clipMinY:k=-5,clipMaxY:W=5,clipMinZ:Y=-5,clipMaxZ:D=5,position:B,rotation:V,scale:$,...ee}){const[c,L]=e.useState(null),[g,oe]=e.useState(null),q=xe(p=>p.invalidate),ie=me(p=>p.mode),N=u==="inherit"?ie||"rgb":u,s=e.useMemo(()=>({enabled:o.dynoBool(!1),minX:o.dynoFloat(-5),maxX:o.dynoFloat(5),minY:o.dynoFloat(-5),maxY:o.dynoFloat(5),minZ:o.dynoFloat(-5),maxZ:o.dynoFloat(5)}),[]),w=e.useCallback(()=>{q();const p=[16,50,100,500,2e3].map(v=>setTimeout(q,v));return()=>p.forEach(clearTimeout)},[q]);e.useEffect(()=>(s.enabled.value=h,s.minX.value=M,s.maxX.value=F,s.minY.value=k,s.maxY.value=W,s.minZ.value=Y,s.maxZ.value=D,c&&(c.needsUpdate=!0),w()),[c,s,h,M,F,k,W,Y,D,w]),e.useEffect(()=>{if(!n)return;let p=!1,v=null;return(async()=>{try{const x=we(n),S=x?.split(".").pop(),z=ge(S),A=new se;z&&(A.fileType=z);const Z=await A.loadAsync(n);if(p)return;const G=new ue({packedSplats:Z});v=G,L(G),oe(Ee(Z))}catch(x){console.error("Failed to load splat:",x)}})(),()=>{p=!0,v?.dispose(),L(null)}},[n]);const E=e.useMemo(()=>({type:"Gsplat"}),[]),O=e.useMemo(()=>{if(!c)return null;switch(N){case"depth":return Q.makeDepthColorModifier(c.context.worldToView,o.dynoConst("float",r),o.dynoConst("float",f),o.dynoConst("bool",!0));case"normal":return Q.makeNormalColorModifier(c.context.worldToView);default:return null}},[c,N,r,f]),U=e.useMemo(()=>o.dynoBlock({gsplat:E},{gsplat:E},p=>{const v=p.gsplat,{center:x,opacity:S}=o.splitGsplat(v).outputs,{x:z,y:A,z:Z}=o.split(x).outputs,G=o.and(o.greaterThanEqual(z,s.minX),o.lessThanEqual(z,s.maxX)),te=o.and(o.greaterThanEqual(A,s.minY),o.lessThanEqual(A,s.maxY)),ne=o.and(o.greaterThanEqual(Z,s.minZ),o.lessThanEqual(Z,s.maxZ)),re=o.and(o.and(G,te),ne),le=o.or(o.not(s.enabled),re),ae=o.select(le,S,o.dynoConst("float",0));return{gsplat:o.combineGsplat({gsplat:v,opacity:ae})}}),[E,s]),R=e.useMemo(()=>{const p=[];return O&&p.push(O),U&&p.push(U),o.dynoBlock({gsplat:E},{gsplat:E},v=>{let x=v.gsplat;for(const S of p)x=S.apply({gsplat:x}).gsplat;return{gsplat:x}})},[O,U,E]);e.useEffect(()=>{if(c)return c.worldModifier=R,c.updateGenerator(),w()},[c,R,w]),e.useEffect(()=>{if(c)return w()},[c,B,V,w]);const K=e.useMemo(()=>({enabled:h,minX:M,maxX:F,minY:k,maxY:W,minZ:Y,maxZ:D}),[h,M,F,k,W,Y,D]);return c?P.jsxs("group",{position:B,rotation:V,scale:$,userData:{pivotAtOrigin:!0,hideBoundingBox:!0},...ee,children:[P.jsx("primitive",{ref:a,object:c},d),i&&g&&P.jsx(ye,{positions:g.positions,count:g.count,color:t,size:m,clip:K}),l&&g&&P.jsx(he,{matrices:g.matrices,count:g.count,color:C,ringSize:y,innerAlpha:X,outerAlpha:j,clip:K})]}):null}export{We as default};
