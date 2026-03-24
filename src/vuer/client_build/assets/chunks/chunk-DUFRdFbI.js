import{r as e,j as P}from"./chunk-BsAOyGYT.js";import{f as se,h as ue,i as o,j as ce,k as pe,m as Q,l as fe,n as Z,M as I,o as de,p as H,q as J,r as b,s as D,t as me,v as ve,Q as xe}from"./chunk-B_1l0x81.js";import"./chunk-tuBEHo31.js";/* empty css              */import"./chunk-BXl3LOEh.js";const Me=3;function ye({matrices:a,count:d,color:n,ringSize:u=.05,innerAlpha:l=.02,outerAlpha:f=.3,clip:i}){const t=e.useRef(null),m=e.useMemo(()=>new me(1,32),[]),r=e.useMemo(()=>new J({uniforms:{uColor:{value:new D(n)},ringSize:{value:u},innerAlpha:{value:l},outerAlpha:{value:f},clipEnabled:{value:!1},clipMin:{value:new b(-5,-5,-5)},clipMax:{value:new b(5,5,5)}},vertexShader:`
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
      `,transparent:!0,side:ve,depthWrite:!1,depthTest:!1}),[]);return e.useEffect(()=>{r.uniforms.uColor.value=new D(n)},[n,r]),e.useEffect(()=>{r.uniforms.ringSize.value=u},[u,r]),e.useEffect(()=>{r.uniforms.innerAlpha.value=l},[l,r]),e.useEffect(()=>{r.uniforms.outerAlpha.value=f},[f,r]),e.useEffect(()=>{i?(r.uniforms.clipEnabled.value=i.enabled,r.uniforms.clipMin.value.set(i.minX,i.minY,i.minZ),r.uniforms.clipMax.value.set(i.maxX,i.maxY,i.maxZ)):r.uniforms.clipEnabled.value=!1},[i,r]),e.useEffect(()=>()=>{m.dispose(),r.dispose()},[m,r]),e.useEffect(()=>{if(!t.current)return;const C=t.current,h=new I,X=new b,j=new xe,y=new b;for(let M=0;M<d;M++)h.fromArray(a,M*16),h.decompose(X,j,y),y.multiplyScalar(Me),h.compose(X,j,y),C.setMatrixAt(M,h);C.instanceMatrix.needsUpdate=!0},[a,d]),P.jsx("instancedMesh",{ref:t,args:[m,r,d],renderOrder:1e3,raycast:()=>null})}function he({positions:a,count:d,color:n,size:u,clip:l}){const f=e.useRef(null),i=e.useMemo(()=>{const m=new de;return m.setAttribute("position",new H(a,3)),m},[a]),t=e.useMemo(()=>new J({uniforms:{uColor:{value:new D(n)},uSize:{value:u},clipEnabled:{value:!1},clipMin:{value:new b(-5,-5,-5)},clipMax:{value:new b(5,5,5)}},vertexShader:`
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
      `,transparent:!0,depthTest:!1,depthWrite:!1}),[]);return e.useEffect(()=>{t.uniforms.uColor.value=new D(n)},[n,t]),e.useEffect(()=>{t.uniforms.uSize.value=u},[u,t]),e.useEffect(()=>{l?(t.uniforms.clipEnabled.value=l.enabled,t.uniforms.clipMin.value.set(l.minX,l.minY,l.minZ),t.uniforms.clipMax.value.set(l.maxX,l.maxY,l.maxZ)):t.uniforms.clipEnabled.value=!1},[l,t]),e.useEffect(()=>{i.setAttribute("position",new H(a,3)),i.attributes.position.needsUpdate=!0},[a,i]),e.useEffect(()=>()=>{i.dispose(),t.dispose()},[i,t]),P.jsx("points",{ref:f,geometry:i,material:t,renderOrder:2e3,raycast:()=>null})}function ge(a){switch(a?.toLowerCase()){case"ply":return Z.PLY;case"spz":return Z.SPZ;case"splat":return Z.SPLAT;case"ksplat":return Z.KSPLAT;case"sog":return Z.PCSOGSZIP;default:return}}function we(a){const{mapLocalFileToRemote:d}=fe.getState();for(const[n,u]of Object.entries(d))if(u===a)return n;return a.split(/[?#]/)[0].split("/").pop()}function Ee(a){const d=a.numSplats,n=new Float32Array(d*3),u=new Float32Array(d*16),l=new I;return a.forEachSplat((f,i,t,m,r,C)=>{n[f*3]=i.x,n[f*3+1]=i.y,n[f*3+2]=i.z,l.compose(i,m,t),l.toArray(u,f*16)}),{positions:n,matrices:u,count:d}}function Ae({_ref:a,_key:d,src:n,render:u="inherit",minDepth:l=1,maxDepth:f=10,showCenterPoints:i=!1,centerPointsColor:t="#2563eb",centerPointsSize:m=.01,showEllipsoids:r=!1,ellipsoidColor:C="#ffffff",ringSize:h=.05,innerAlpha:X=.02,outerAlpha:j=.3,clipEnabled:y=!1,clipMinX:M=-5,clipMaxX:k=5,clipMinY:F=-5,clipMaxY:W=5,clipMinZ:Y=-5,clipMaxZ:G=5,position:V,rotation:_,scale:$,...ee}){const[c,B]=e.useState(null),[g,oe]=e.useState(null),O=se(p=>p.invalidate),ie=ue(p=>p.mode),N=u==="inherit"?ie||"rgb":u,s=e.useMemo(()=>({enabled:o.dynoBool(!1),minX:o.dynoFloat(-5),maxX:o.dynoFloat(5),minY:o.dynoFloat(-5),maxY:o.dynoFloat(5),minZ:o.dynoFloat(-5),maxZ:o.dynoFloat(5)}),[]),w=e.useCallback(()=>{O();const p=[16,50,100,500,2e3].map(v=>setTimeout(O,v));return()=>p.forEach(clearTimeout)},[O]);e.useEffect(()=>(s.enabled.value=y,s.minX.value=M,s.maxX.value=k,s.minY.value=F,s.maxY.value=W,s.minZ.value=Y,s.maxZ.value=G,c&&(c.needsUpdate=!0),w()),[c,s,y,M,k,F,W,Y,G,w]),e.useEffect(()=>{if(!n)return;let p=!1,v=null;return(async()=>{try{const x=we(n),S=x?.split(".").pop(),z=ge(S),A=new ce;z&&(A.fileType=z);const T=await A.loadAsync(n);if(p)return;const q=new pe({packedSplats:T});v=q,B(q),oe(Ee(T))}catch(x){console.error("Failed to load splat:",x)}})(),()=>{p=!0,v?.dispose(),B(null)}},[n]);const E=e.useMemo(()=>({type:"Gsplat"}),[]),L=e.useMemo(()=>{if(!c)return null;switch(N){case"depth":return Q.makeDepthColorModifier(c.context.worldToView,o.dynoConst("float",l),o.dynoConst("float",f),o.dynoConst("bool",!0));case"normal":return Q.makeNormalColorModifier(c.context.worldToView);default:return null}},[c,N,l,f]),U=e.useMemo(()=>o.dynoBlock({gsplat:E},{gsplat:E},p=>{const v=p.gsplat,{center:x,opacity:S}=o.splitGsplat(v).outputs,{x:z,y:A,z:T}=o.split(x).outputs,q=o.and(o.greaterThanEqual(z,s.minX),o.lessThanEqual(z,s.maxX)),te=o.and(o.greaterThanEqual(A,s.minY),o.lessThanEqual(A,s.maxY)),ne=o.and(o.greaterThanEqual(T,s.minZ),o.lessThanEqual(T,s.maxZ)),le=o.and(o.and(q,te),ne),re=o.or(o.not(s.enabled),le),ae=o.select(re,S,o.dynoConst("float",0));return{gsplat:o.combineGsplat({gsplat:v,opacity:ae})}}),[E,s]),R=e.useMemo(()=>{const p=[];return L&&p.push(L),U&&p.push(U),o.dynoBlock({gsplat:E},{gsplat:E},v=>{let x=v.gsplat;for(const S of p)x=S.apply({gsplat:x}).gsplat;return{gsplat:x}})},[L,U,E]);e.useEffect(()=>{if(c)return c.worldModifier=R,c.updateGenerator(),w()},[c,R,w]),e.useEffect(()=>{if(c)return w()},[c,V,_,w]);const K=e.useMemo(()=>({enabled:y,minX:M,maxX:k,minY:F,maxY:W,minZ:Y,maxZ:G}),[y,M,k,F,W,Y,G]);return c?P.jsxs("group",{position:V,rotation:_,scale:$,userData:{pivotAtOrigin:!0,hideBoundingBox:!0},...ee,children:[P.jsx("primitive",{ref:a,object:c},d),i&&g&&P.jsx(he,{positions:g.positions,count:g.count,color:t,size:m,clip:K}),r&&g&&P.jsx(ye,{matrices:g.matrices,count:g.count,color:C,ringSize:h,innerAlpha:X,outerAlpha:j,clip:K})]}):null}export{Ae as default};
