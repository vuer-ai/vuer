import{r as e,j as P}from"./chunk-RMI_NY4Q.js";import{u as se,q as ue,H as i,x as ce,h as pe,i as R,U as fe,w as Z,j as $,B as de,k as Q,l as I,m as b,C as D,n as me,o as ve,p as xe}from"./chunk-BiEwrIFG.js";import"./chunk-tuBEHo31.js";/* empty css              */import"./chunk-BXl3LOEh.js";const Me=3;function he({matrices:a,count:d,color:n,ringSize:u=.05,innerAlpha:l=.02,outerAlpha:f=.3,clip:o}){const t=e.useRef(null),m=e.useMemo(()=>new me(1,32),[]),r=e.useMemo(()=>new I({uniforms:{uColor:{value:new D(n)},ringSize:{value:u},innerAlpha:{value:l},outerAlpha:{value:f},clipEnabled:{value:!1},clipMin:{value:new b(-5,-5,-5)},clipMax:{value:new b(5,5,5)}},vertexShader:`
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
      `,transparent:!0,side:ve,depthWrite:!1,depthTest:!1}),[]);return e.useEffect(()=>{r.uniforms.uColor.value=new D(n)},[n,r]),e.useEffect(()=>{r.uniforms.ringSize.value=u},[u,r]),e.useEffect(()=>{r.uniforms.innerAlpha.value=l},[l,r]),e.useEffect(()=>{r.uniforms.outerAlpha.value=f},[f,r]),e.useEffect(()=>{o?(r.uniforms.clipEnabled.value=o.enabled,r.uniforms.clipMin.value.set(o.minX,o.minY,o.minZ),r.uniforms.clipMax.value.set(o.maxX,o.maxY,o.maxZ)):r.uniforms.clipEnabled.value=!1},[o,r]),e.useEffect(()=>()=>{m.dispose(),r.dispose()},[m,r]),e.useEffect(()=>{if(!t.current)return;const C=t.current,y=new $,X=new b,j=new xe,h=new b;for(let M=0;M<d;M++)y.fromArray(a,M*16),y.decompose(X,j,h),h.multiplyScalar(Me),y.compose(X,j,h),C.setMatrixAt(M,y);C.instanceMatrix.needsUpdate=!0},[a,d]),P.jsx("instancedMesh",{ref:t,args:[m,r,d],renderOrder:1e3,raycast:()=>null})}function ye({positions:a,count:d,color:n,size:u,clip:l}){const f=e.useRef(null),o=e.useMemo(()=>{const m=new de;return m.setAttribute("position",new Q(a,3)),m},[a]),t=e.useMemo(()=>new I({uniforms:{uColor:{value:new D(n)},uSize:{value:u},clipEnabled:{value:!1},clipMin:{value:new b(-5,-5,-5)},clipMax:{value:new b(5,5,5)}},vertexShader:`
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
      `,transparent:!0,depthTest:!1,depthWrite:!1}),[]);return e.useEffect(()=>{t.uniforms.uColor.value=new D(n)},[n,t]),e.useEffect(()=>{t.uniforms.uSize.value=u},[u,t]),e.useEffect(()=>{l?(t.uniforms.clipEnabled.value=l.enabled,t.uniforms.clipMin.value.set(l.minX,l.minY,l.minZ),t.uniforms.clipMax.value.set(l.maxX,l.maxY,l.maxZ)):t.uniforms.clipEnabled.value=!1},[l,t]),e.useEffect(()=>{o.setAttribute("position",new Q(a,3)),o.attributes.position.needsUpdate=!0},[a,o]),e.useEffect(()=>()=>{o.dispose(),t.dispose()},[o,t]),P.jsx("points",{ref:f,geometry:o,material:t,renderOrder:2e3,raycast:()=>null})}function ge(a){switch(a?.toLowerCase()){case"ply":return Z.PLY;case"spz":return Z.SPZ;case"splat":return Z.SPLAT;case"ksplat":return Z.KSPLAT;case"sog":return Z.PCSOGSZIP;default:return}}function we(a){const{mapLocalFileToRemote:d}=fe.getState();for(const[n,u]of Object.entries(d))if(u===a)return n;return a.split(/[?#]/)[0].split("/").pop()}function Ee(a){const d=a.numSplats,n=new Float32Array(d*3),u=new Float32Array(d*16),l=new $;return a.forEachSplat((f,o,t,m,r,C)=>{n[f*3]=o.x,n[f*3+1]=o.y,n[f*3+2]=o.z,l.compose(o,m,t),l.toArray(u,f*16)}),{positions:n,matrices:u,count:d}}function Ae({_ref:a,_key:d,src:n,render:u="inherit",minDepth:l=1,maxDepth:f=10,showCenterPoints:o=!1,centerPointsColor:t="#2563eb",centerPointsSize:m=.01,showEllipsoids:r=!1,ellipsoidColor:C="#ffffff",ringSize:y=.05,innerAlpha:X=.02,outerAlpha:j=.3,clipEnabled:h=!1,clipMinX:M=-5,clipMaxX:k=5,clipMinY:F=-5,clipMaxY:Y=5,clipMinZ:W=-5,clipMaxZ:G=5,position:V,rotation:_,scale:J,...ee}){const[c,L]=e.useState(null),[g,ie]=e.useState(null),U=se(p=>p.invalidate),oe=ue(p=>p.mode),N=u==="inherit"?oe||"rgb":u,s=e.useMemo(()=>({enabled:i.dynoBool(!1),minX:i.dynoFloat(-5),maxX:i.dynoFloat(5),minY:i.dynoFloat(-5),maxY:i.dynoFloat(5),minZ:i.dynoFloat(-5),maxZ:i.dynoFloat(5)}),[]),w=e.useCallback(()=>{U();const p=[16,50,100,500,2e3].map(v=>setTimeout(U,v));return()=>p.forEach(clearTimeout)},[U]);e.useEffect(()=>(s.enabled.value=h,s.minX.value=M,s.maxX.value=k,s.minY.value=F,s.maxY.value=Y,s.minZ.value=W,s.maxZ.value=G,c&&(c.needsUpdate=!0),w()),[c,s,h,M,k,F,Y,W,G,w]),e.useEffect(()=>{if(!n)return;let p=!1,v=null;return(async()=>{try{const x=we(n),z=x?.split(".").pop(),S=ge(z),A=new ce;S&&(A.fileType=S);const T=await A.loadAsync(n);if(p)return;const q=new pe({packedSplats:T});v=q,L(q),ie(Ee(T))}catch(x){console.error("Failed to load splat:",x)}})(),()=>{p=!0,v?.dispose(),L(null)}},[n]);const E=e.useMemo(()=>({type:"Gsplat"}),[]),O=e.useMemo(()=>{if(!c)return null;switch(N){case"depth":return R.makeDepthColorModifier(c.context.worldToView,i.dynoConst("float",l),i.dynoConst("float",f),i.dynoConst("bool",!0));case"normal":return R.makeNormalColorModifier(c.context.worldToView);default:return null}},[c,N,l,f]),B=e.useMemo(()=>i.dynoBlock({gsplat:E},{gsplat:E},p=>{const v=p.gsplat,{center:x,opacity:z}=i.splitGsplat(v).outputs,{x:S,y:A,z:T}=i.split(x).outputs,q=i.and(i.greaterThanEqual(S,s.minX),i.lessThanEqual(S,s.maxX)),te=i.and(i.greaterThanEqual(A,s.minY),i.lessThanEqual(A,s.maxY)),ne=i.and(i.greaterThanEqual(T,s.minZ),i.lessThanEqual(T,s.maxZ)),le=i.and(i.and(q,te),ne),re=i.or(i.not(s.enabled),le),ae=i.select(re,z,i.dynoConst("float",0));return{gsplat:i.combineGsplat({gsplat:v,opacity:ae})}}),[E,s]),H=e.useMemo(()=>{const p=[];return O&&p.push(O),B&&p.push(B),i.dynoBlock({gsplat:E},{gsplat:E},v=>{let x=v.gsplat;for(const z of p)x=z.apply({gsplat:x}).gsplat;return{gsplat:x}})},[O,B,E]);e.useEffect(()=>{if(c)return c.worldModifier=H,c.updateGenerator(),w()},[c,H,w]),e.useEffect(()=>{if(c)return w()},[c,V,_,w]);const K=e.useMemo(()=>({enabled:h,minX:M,maxX:k,minY:F,maxY:Y,minZ:W,maxZ:G}),[h,M,k,F,Y,W,G]);return c?P.jsxs("group",{position:V,rotation:_,scale:J,userData:{pivotAtOrigin:!0,hideBoundingBox:!0},...ee,children:[P.jsx("primitive",{ref:a,object:c},d),o&&g&&P.jsx(ye,{positions:g.positions,count:g.count,color:t,size:m,clip:K}),r&&g&&P.jsx(he,{matrices:g.matrices,count:g.count,color:C,ringSize:y,innerAlpha:X,outerAlpha:j,clip:K})]}):null}export{Ae as default};
