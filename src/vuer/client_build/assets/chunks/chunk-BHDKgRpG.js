import{e as sr,j as Be,r as rn}from"./chunk-CF7PZJR8.js";import{F as ut,b as nn,d as an,B as or,e as sn}from"./chunk-ChHTQ4Sk.js";import{aE as on,h as ce,ac as Dt,c4 as ln,bE as qt,bD as cn,a as ht,cr as un,S as xt,D as hn,O as lr,P as Nt,cs as dn,ag as cr,bh as ot,bX as fn,d as ur,H as Te,e as ke,f as Ye,L as Le,R as ct,aN as pn,al as vn,F as jt,ct as Rt,bA as Qe,cu as mn,g as zt,l as hr,U as Yt,bZ as Qt,V as gn,i as dt,k as wn,j as yn,v as _n,br as Ze,q as Sn,W as dr,cv as St,aU as xn,ah as En,a_ as Bt,a7 as Ke,x as bn,b$ as Mn,c1 as In,c0 as An,aj as Tn,a5 as Ft,cg as Un,cd as Kt,ar as Cn,ay as Dn}from"./chunk-DvrnVFXc.js";/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1",key:"f1a2em"}],["rect",{width:"9",height:"7",x:"3",y:"14",rx:"1",key:"jqznyg"}],["rect",{width:"5",height:"7",x:"16",y:"14",rx:"1",key:"q5h2i8"}]],Bn=ut("layout-template",Rn);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fn=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],Ln=ut("moon",Fn);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const On=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],Nn=ut("panels-top-left",On);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zn=[["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M14.837 16.385a6 6 0 1 1-7.223-7.222c.624-.147.97.66.715 1.248a4 4 0 0 0 5.26 5.259c.589-.255 1.396.09 1.248.715",key:"xlf6rm"}],["path",{d:"M16 12a4 4 0 0 0-4-4",key:"6vsxu"}],["path",{d:"m19 5-1.256 1.256",key:"1yg6a6"}],["path",{d:"M20 12h2",key:"1q8mjw"}]],kn=ut("sun-moon",zn);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pn=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],Hn=ut("sun",Pn);var Ma=({className:l,...t})=>{const{isLiquid:n,toggleLiquid:s}=sr();return Be.jsxs(nn,{children:[Be.jsx(an,{asChild:!0,children:Be.jsx(or,{icon:!0,variant:"ghost","aria-label":`Toggle liquid theme: ${n?"on":"off"}`,...t,onClick:s,className:l,children:n?Be.jsx(Nn,{size:20}):Be.jsx(Bn,{size:20})})}),Be.jsx(sn,{children:n?"Dock Layout":"Liquid Layout"})]})},Gn=1500,Ia=l=>{const{baseTheme:t,setBaseTheme:n,resolvedTheme:s}=sr(),i=rn.useRef(0),o=s?.includes("dark"),u=t==="system",f=()=>{const p=Date.now(),m=p-i.current;i.current=p;const A=m<Gn;n(A?t==="light"?"dark":t==="dark"?"system":"light":t==="system"?o?"light":"dark":t==="light"?"dark":"light")};return Be.jsx(or,{icon:!0,variant:"ghost","aria-label":`Current theme: ${u?"system":o?"dark":"light"}`,...l,onClick:f,children:u?Be.jsx(kn,{size:24}):o?Be.jsx(Ln,{size:24}):Be.jsx(Hn,{size:24})})};function Jt(){return Jt=Object.assign?Object.assign.bind():function(l){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)({}).hasOwnProperty.call(n,s)&&(l[s]=n[s])}return l},Jt.apply(null,arguments)}const Et=parseInt(on.replace(/\D+/g,"")),fr=Et>=125?"uv1":"uv2";function Aa(l,t=1e-4){t=Math.max(t,Number.EPSILON);const n={},s=l.getIndex(),i=l.getAttribute("position"),o=s?s.count:i.count;let u=0;const f=Object.keys(l.attributes),p={},m={},A=[],b=["getX","getY","getZ","getW"];for(let T=0,U=f.length;T<U;T++){const R=f[T];p[R]=[];const Z=l.morphAttributes[R];Z&&(m[R]=new Array(Z.length).fill(0).map(()=>[]))}const M=Math.log10(1/t),Y=Math.pow(10,M);for(let T=0;T<o;T++){const U=s?s.getX(T):T;let R="";for(let Z=0,$=f.length;Z<$;Z++){const G=f[Z],L=l.getAttribute(G),B=L.itemSize;for(let X=0;X<B;X++)R+=`${~~(L[b[X]](U)*Y)},`}if(R in n)A.push(n[R]);else{for(let Z=0,$=f.length;Z<$;Z++){const G=f[Z],L=l.getAttribute(G),B=l.morphAttributes[G],X=L.itemSize,x=p[G],E=m[G];for(let k=0;k<X;k++){const V=b[k];if(x.push(L[V](U)),B)for(let P=0,q=B.length;P<q;P++)E[P].push(B[P][V](U))}}n[R]=u,A.push(u),u++}}const z=l.clone();for(let T=0,U=f.length;T<U;T++){const R=f[T],Z=l.getAttribute(R),$=new Z.array.constructor(p[R]),G=new Dt($,Z.itemSize,Z.normalized);if(z.setAttribute(R,G),R in m)for(let L=0;L<m[R].length;L++){const B=l.morphAttributes[R][L],X=new B.array.constructor(m[R][L]),x=new Dt(X,B.itemSize,B.normalized);z.morphAttributes[R][L]=x}}return z.setIndex(A),z}function Ta(l,t){if(t===ln)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),l;if(t===qt||t===cn){let n=l.getIndex();if(n===null){const u=[],f=l.getAttribute("position");if(f!==void 0){for(let p=0;p<f.count;p++)u.push(p);l.setIndex(u),n=l.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),l}const s=n.count-2,i=[];if(n)if(t===qt)for(let u=1;u<=s;u++)i.push(n.getX(0)),i.push(n.getX(u)),i.push(n.getX(u+1));else for(let u=0;u<s;u++)u%2===0?(i.push(n.getX(u)),i.push(n.getX(u+1)),i.push(n.getX(u+2))):(i.push(n.getX(u+2)),i.push(n.getX(u+1)),i.push(n.getX(u)));i.length/3!==s&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const o=l.clone();return o.setIndex(i),o.clearGroups(),o}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),l}function Ua(l,t=Math.PI/3){const n=Math.cos(t),s=(1+1e-10)*100,i=[new ce,new ce,new ce],o=new ce,u=new ce,f=new ce,p=new ce;function m(T){const U=~~(T.x*s),R=~~(T.y*s),Z=~~(T.z*s);return`${U},${R},${Z}`}const A=l.index?l.toNonIndexed():l,b=A.attributes.position,M={};for(let T=0,U=b.count/3;T<U;T++){const R=3*T,Z=i[0].fromBufferAttribute(b,R+0),$=i[1].fromBufferAttribute(b,R+1),G=i[2].fromBufferAttribute(b,R+2);o.subVectors(G,$),u.subVectors(Z,$);const L=new ce().crossVectors(o,u).normalize();for(let B=0;B<3;B++){const X=i[B],x=m(X);x in M||(M[x]=[]),M[x].push(L)}}const Y=new Float32Array(b.count*3),z=new Dt(Y,3,!1);for(let T=0,U=b.count/3;T<U;T++){const R=3*T,Z=i[0].fromBufferAttribute(b,R+0),$=i[1].fromBufferAttribute(b,R+1),G=i[2].fromBufferAttribute(b,R+2);o.subVectors(G,$),u.subVectors(Z,$),f.crossVectors(o,u).normalize();for(let L=0;L<3;L++){const B=i[L],X=m(B),x=M[X];p.set(0,0,0);for(let E=0,k=x.length;E<k;E++){const V=x[E];f.dot(V)>n&&p.add(V)}p.normalize(),z.setXYZ(R+L,p.x,p.y,p.z)}}return A.setAttribute("normal",z),A}var be=Uint8Array,We=Uint16Array,Lt=Uint32Array,pr=new be([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),vr=new be([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Zn=new be([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),mr=function(l,t){for(var n=new We(31),s=0;s<31;++s)n[s]=t+=1<<l[s-1];for(var i=new Lt(n[30]),s=1;s<30;++s)for(var o=n[s];o<n[s+1];++o)i[o]=o-n[s]<<5|s;return[n,i]},gr=mr(pr,2),wr=gr[0],Wn=gr[1];wr[28]=258,Wn[258]=28;var Vn=mr(vr,0),Xn=Vn[0],Ot=new We(32768);for(var ae=0;ae<32768;++ae){var Ge=(ae&43690)>>>1|(ae&21845)<<1;Ge=(Ge&52428)>>>2|(Ge&13107)<<2,Ge=(Ge&61680)>>>4|(Ge&3855)<<4,Ot[ae]=((Ge&65280)>>>8|(Ge&255)<<8)>>>1}var lt=(function(l,t,n){for(var s=l.length,i=0,o=new We(t);i<s;++i)++o[l[i]-1];var u=new We(t);for(i=0;i<t;++i)u[i]=u[i-1]+o[i-1]<<1;var f;if(n){f=new We(1<<t);var p=15-t;for(i=0;i<s;++i)if(l[i])for(var m=i<<4|l[i],A=t-l[i],b=u[l[i]-1]++<<A,M=b|(1<<A)-1;b<=M;++b)f[Ot[b]>>>p]=m}else for(f=new We(s),i=0;i<s;++i)l[i]&&(f[i]=Ot[u[l[i]-1]++]>>>15-l[i]);return f}),ft=new be(288);for(var ae=0;ae<144;++ae)ft[ae]=8;for(var ae=144;ae<256;++ae)ft[ae]=9;for(var ae=256;ae<280;++ae)ft[ae]=7;for(var ae=280;ae<288;++ae)ft[ae]=8;var yr=new be(32);for(var ae=0;ae<32;++ae)yr[ae]=5;var $n=lt(ft,9,1),qn=lt(yr,5,1),Mt=function(l){for(var t=l[0],n=1;n<l.length;++n)l[n]>t&&(t=l[n]);return t},Ae=function(l,t,n){var s=t/8|0;return(l[s]|l[s+1]<<8)>>(t&7)&n},It=function(l,t){var n=t/8|0;return(l[n]|l[n+1]<<8|l[n+2]<<16)>>(t&7)},jn=function(l){return(l/8|0)+(l&7&&1)},Yn=function(l,t,n){(n==null||n>l.length)&&(n=l.length);var s=new(l instanceof We?We:l instanceof Lt?Lt:be)(n-t);return s.set(l.subarray(t,n)),s},Qn=function(l,t,n){var s=l.length;if(!s||n&&!n.l&&s<5)return t||new be(0);var i=!t||n,o=!n||n.i;n||(n={}),t||(t=new be(s*3));var u=function(Q){var Oe=t.length;if(Q>Oe){var Ne=new be(Math.max(Oe*2,Q));Ne.set(t),t=Ne}},f=n.f||0,p=n.p||0,m=n.b||0,A=n.l,b=n.d,M=n.m,Y=n.n,z=s*8;do{if(!A){n.f=f=Ae(l,p,1);var T=Ae(l,p+1,3);if(p+=3,T)if(T==1)A=$n,b=qn,M=9,Y=5;else if(T==2){var $=Ae(l,p,31)+257,G=Ae(l,p+10,15)+4,L=$+Ae(l,p+5,31)+1;p+=14;for(var B=new be(L),X=new be(19),x=0;x<G;++x)X[Zn[x]]=Ae(l,p+x*3,7);p+=G*3;for(var E=Mt(X),k=(1<<E)-1,V=lt(X,E,1),x=0;x<L;){var P=V[Ae(l,p,k)];p+=P&15;var U=P>>>4;if(U<16)B[x++]=U;else{var q=0,F=0;for(U==16?(F=3+Ae(l,p,3),p+=2,q=B[x-1]):U==17?(F=3+Ae(l,p,7),p+=3):U==18&&(F=11+Ae(l,p,127),p+=7);F--;)B[x++]=q}}var ie=B.subarray(0,$),H=B.subarray($);M=Mt(ie),Y=Mt(H),A=lt(ie,M,1),b=lt(H,Y,1)}else throw"invalid block type";else{var U=jn(p)+4,R=l[U-4]|l[U-3]<<8,Z=U+R;if(Z>s){if(o)throw"unexpected EOF";break}i&&u(m+R),t.set(l.subarray(U,Z),m),n.b=m+=R,n.p=p=Z*8;continue}if(p>z){if(o)throw"unexpected EOF";break}}i&&u(m+131072);for(var Me=(1<<M)-1,Ve=(1<<Y)-1,Ie=p;;Ie=p){var q=A[It(l,p)&Me],re=q>>>4;if(p+=q&15,p>z){if(o)throw"unexpected EOF";break}if(!q)throw"invalid length/literal";if(re<256)t[m++]=re;else if(re==256){Ie=p,A=null;break}else{var Pe=re-254;if(re>264){var x=re-257,se=pr[x];Pe=Ae(l,p,(1<<se)-1)+wr[x],p+=se}var de=b[It(l,p)&Ve],Ue=de>>>4;if(!de)throw"invalid distance";p+=de&15;var H=Xn[Ue];if(Ue>3){var se=vr[Ue];H+=It(l,p)&(1<<se)-1,p+=se}if(p>z){if(o)throw"unexpected EOF";break}i&&u(m+131072);for(var Je=m+Pe;m<Je;m+=4)t[m]=t[m-H],t[m+1]=t[m+1-H],t[m+2]=t[m+2-H],t[m+3]=t[m+3-H];m=Je}}n.l=A,n.p=Ie,n.b=m,A&&(f=1,n.m=M,n.d=b,n.n=Y)}while(!f);return m==t.length?t:Yn(t,0,m)},Kn=new be(0),Jn=function(l){if((l[0]&15)!=8||l[0]>>>4>7||(l[0]<<8|l[1])%31)throw"invalid zlib data";if(l[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function mt(l,t){return Qn((Jn(l),l.subarray(2,-4)),t)}var ea=typeof TextDecoder<"u"&&new TextDecoder,ta=0;try{ea.decode(Kn,{stream:!0}),ta=1}catch{}const ra=l=>l&&l.isCubeTexture;class Ca extends ht{constructor(t,n){var s,i;const o=ra(t),f=((i=o?(s=t.image[0])==null?void 0:s.width:t.image.width)!=null?i:1024)/4,p=Math.floor(Math.log2(f)),m=Math.pow(2,p),A=3*Math.max(m,112),b=4*m,M=[o?"#define ENVMAP_TYPE_CUBE":"",`#define CUBEUV_TEXEL_WIDTH ${1/A}`,`#define CUBEUV_TEXEL_HEIGHT ${1/b}`,`#define CUBEUV_MAX_MIP ${p}.0`],Y=`
        varying vec3 vWorldPosition;
        void main() 
        {
            vec4 worldPosition = ( modelMatrix * vec4( position, 1.0 ) );
            vWorldPosition = worldPosition.xyz;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
        `,z=M.join(`
`)+`
        #define ENVMAP_TYPE_CUBE_UV
        varying vec3 vWorldPosition;
        uniform float radius;
        uniform float height;
        uniform float angle;
        #ifdef ENVMAP_TYPE_CUBE
            uniform samplerCube map;
        #else
            uniform sampler2D map;
        #endif
        // From: https://www.shadertoy.com/view/4tsBD7
        float diskIntersectWithBackFaceCulling( vec3 ro, vec3 rd, vec3 c, vec3 n, float r ) 
        {
            float d = dot ( rd, n );
            
            if( d > 0.0 ) { return 1e6; }
            
            vec3  o = ro - c;
            float t = - dot( n, o ) / d;
            vec3  q = o + rd * t;
            
            return ( dot( q, q ) < r * r ) ? t : 1e6;
        }
        // From: https://www.iquilezles.org/www/articles/intersectors/intersectors.htm
        float sphereIntersect( vec3 ro, vec3 rd, vec3 ce, float ra ) 
        {
            vec3 oc = ro - ce;
            float b = dot( oc, rd );
            float c = dot( oc, oc ) - ra * ra;
            float h = b * b - c;
            
            if( h < 0.0 ) { return -1.0; }
            
            h = sqrt( h );
            
            return - b + h;
        }
        vec3 project() 
        {
            vec3 p = normalize( vWorldPosition );
            vec3 camPos = cameraPosition;
            camPos.y -= height;
            float intersection = sphereIntersect( camPos, p, vec3( 0.0 ), radius );
            if( intersection > 0.0 ) {
                
                vec3 h = vec3( 0.0, - height, 0.0 );
                float intersection2 = diskIntersectWithBackFaceCulling( camPos, p, h, vec3( 0.0, 1.0, 0.0 ), radius );
                p = ( camPos + min( intersection, intersection2 ) * p ) / radius;
            } else {
                p = vec3( 0.0, 1.0, 0.0 );
            }
            return p;
        }
        #include <common>
        #include <cube_uv_reflection_fragment>
        void main() 
        {
            vec3 projectedWorldPosition = project();
            
            #ifdef ENVMAP_TYPE_CUBE
                vec3 outcolor = textureCube( map, projectedWorldPosition ).rgb;
            #else
                vec3 direction = normalize( projectedWorldPosition );
                vec2 uv = equirectUv( direction );
                vec3 outcolor = texture2D( map, uv ).rgb;
            #endif
            gl_FragColor = vec4( outcolor, 1.0 );
            #include <tonemapping_fragment>
            #include <${Et>=154?"colorspace_fragment":"encodings_fragment"}>
        }
        `,T={map:{value:t},height:{value:n?.height||15},radius:{value:n?.radius||100}},U=new un(1,16),R=new xt({uniforms:T,fragmentShader:z,vertexShader:Y,side:hn});super(U,R)}set radius(t){this.material.uniforms.radius.value=t}get radius(){return this.material.uniforms.radius.value}set height(t){this.material.uniforms.height.value=t}get height(){return this.material.uniforms.height.value}}var na=Object.defineProperty,aa=(l,t,n)=>t in l?na(l,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):l[t]=n,$e=(l,t,n)=>(aa(l,typeof t!="symbol"?t+"":t,n),n);class Da{constructor(){$e(this,"enabled",!0),$e(this,"needsSwap",!0),$e(this,"clear",!1),$e(this,"renderToScreen",!1)}setSize(t,n){}render(t,n,s,i,o){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}class Ra{constructor(t){$e(this,"camera",new lr(-1,1,1,-1,0,1)),$e(this,"geometry",new Nt(2,2)),$e(this,"mesh"),this.mesh=new ht(this.geometry,t)}get material(){return this.mesh.material}set material(t){this.mesh.material=t}dispose(){this.mesh.geometry.dispose()}render(t){t.render(this.mesh,this.camera)}}class Ba extends dn{constructor(t,n={}){const{bevelEnabled:s=!1,bevelSize:i=8,bevelThickness:o=10,font:u,height:f=50,size:p=100,lineHeight:m=1,letterSpacing:A=0,...b}=n;if(u===void 0)super();else{const M=u.generateShapes(t,p,{lineHeight:m,letterSpacing:A});super(M,{...b,bevelEnabled:s,bevelSize:i,bevelThickness:o,depth:f})}this.type="TextGeometry"}}const Fa={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`
      varying vec2 vUv;

      void main() {

        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

      }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float h;

    varying vec2 vUv;

    void main() {

    	vec4 sum = vec4( 0.0 );

    	sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

    	gl_FragColor = sum;

    }
  `},La={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`
    varying vec2 vUv;

    void main() {

      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }
  `,fragmentShader:`

  uniform sampler2D tDiffuse;
  uniform float v;

  varying vec2 vUv;

  void main() {

    vec4 sum = vec4( 0.0 );

    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

    gl_FragColor = sum;

  }
  `};var ia=Object.defineProperty,sa=(l,t,n)=>t in l?ia(l,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):l[t]=n,At=(l,t,n)=>(sa(l,typeof t!="symbol"?t+"":t,n),n);class Oa extends cr{constructor(t){super(t)}load(t,n,s,i){const o=new ot(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,u=>{if(typeof u!="string")throw new Error("unsupported data type");const f=JSON.parse(u),p=this.parse(f);n&&n(p)},s,i)}loadAsync(t,n){return super.loadAsync(t,n)}parse(t){return new oa(t)}}class oa{constructor(t){At(this,"data"),At(this,"isFont",!0),At(this,"type","Font"),this.data=t}generateShapes(t,n=100,s){const i=[],o={letterSpacing:0,lineHeight:1,...s},u=la(t,n,this.data,o);for(let f=0,p=u.length;f<p;f++)Array.prototype.push.apply(i,u[f].toShapes(!1));return i}}function la(l,t,n,s){const i=Array.from(l),o=t/n.resolution,u=(n.boundingBox.yMax-n.boundingBox.yMin+n.underlineThickness)*o,f=[];let p=0,m=0;for(let A=0;A<i.length;A++){const b=i[A];if(b===`
`)p=0,m-=u*s.lineHeight;else{const M=ca(b,o,p,m,n);M&&(p+=M.offsetX+s.letterSpacing,f.push(M.path))}}return f}function ca(l,t,n,s,i){const o=i.glyphs[l]||i.glyphs["?"];if(!o){console.error('THREE.Font: character "'+l+'" does not exists in font family '+i.familyName+".");return}const u=new fn;let f,p,m,A,b,M,Y,z;if(o.o){const T=o._cachedOutline||(o._cachedOutline=o.o.split(" "));for(let U=0,R=T.length;U<R;)switch(T[U++]){case"m":f=parseInt(T[U++])*t+n,p=parseInt(T[U++])*t+s,u.moveTo(f,p);break;case"l":f=parseInt(T[U++])*t+n,p=parseInt(T[U++])*t+s,u.lineTo(f,p);break;case"q":m=parseInt(T[U++])*t+n,A=parseInt(T[U++])*t+s,b=parseInt(T[U++])*t+n,M=parseInt(T[U++])*t+s,u.quadraticCurveTo(b,M,m,A);break;case"b":m=parseInt(T[U++])*t+n,A=parseInt(T[U++])*t+s,b=parseInt(T[U++])*t+n,M=parseInt(T[U++])*t+s,Y=parseInt(T[U++])*t+n,z=parseInt(T[U++])*t+s,u.bezierCurveTo(b,M,Y,z,m,A);break}}return{offsetX:o.ha*t,path:u}}class Na extends ur{constructor(t){super(t),this.type=Te}parse(t){const u=function(x,E){switch(x){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(E||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(E||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(E||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(E||""))}},b=function(x,E,k){E=E||1024;let P=x.pos,q=-1,F=0,ie="",H=String.fromCharCode.apply(null,new Uint16Array(x.subarray(P,P+128)));for(;0>(q=H.indexOf(`
`))&&F<E&&P<x.byteLength;)ie+=H,F+=H.length,P+=128,H+=String.fromCharCode.apply(null,new Uint16Array(x.subarray(P,P+128)));return-1<q?(x.pos+=F+q+1,ie+H.slice(0,q)):!1},M=function(x){const E=/^#\?(\S+)/,k=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,V=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,P=/^\s*FORMAT=(\S+)\s*$/,q=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,F={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let ie,H;for((x.pos>=x.byteLength||!(ie=b(x)))&&u(1,"no header found"),(H=ie.match(E))||u(3,"bad initial token"),F.valid|=1,F.programtype=H[1],F.string+=ie+`
`;ie=b(x),ie!==!1;){if(F.string+=ie+`
`,ie.charAt(0)==="#"){F.comments+=ie+`
`;continue}if((H=ie.match(k))&&(F.gamma=parseFloat(H[1])),(H=ie.match(V))&&(F.exposure=parseFloat(H[1])),(H=ie.match(P))&&(F.valid|=2,F.format=H[1]),(H=ie.match(q))&&(F.valid|=4,F.height=parseInt(H[1],10),F.width=parseInt(H[2],10)),F.valid&2&&F.valid&4)break}return F.valid&2||u(3,"missing format specifier"),F.valid&4||u(3,"missing image size specifier"),F},Y=function(x,E,k){const V=E;if(V<8||V>32767||x[0]!==2||x[1]!==2||x[2]&128)return new Uint8Array(x);V!==(x[2]<<8|x[3])&&u(3,"wrong scanline width");const P=new Uint8Array(4*E*k);P.length||u(4,"unable to allocate buffer space");let q=0,F=0;const ie=4*V,H=new Uint8Array(4),Me=new Uint8Array(ie);let Ve=k;for(;Ve>0&&F<x.byteLength;){F+4>x.byteLength&&u(1),H[0]=x[F++],H[1]=x[F++],H[2]=x[F++],H[3]=x[F++],(H[0]!=2||H[1]!=2||(H[2]<<8|H[3])!=V)&&u(3,"bad rgbe scanline format");let Ie=0,re;for(;Ie<ie&&F<x.byteLength;){re=x[F++];const se=re>128;if(se&&(re-=128),(re===0||Ie+re>ie)&&u(3,"bad scanline data"),se){const de=x[F++];for(let Ue=0;Ue<re;Ue++)Me[Ie++]=de}else Me.set(x.subarray(F,F+re),Ie),Ie+=re,F+=re}const Pe=V;for(let se=0;se<Pe;se++){let de=0;P[q]=Me[se+de],de+=V,P[q+1]=Me[se+de],de+=V,P[q+2]=Me[se+de],de+=V,P[q+3]=Me[se+de],q+=4}Ve--}return P},z=function(x,E,k,V){const P=x[E+3],q=Math.pow(2,P-128)/255;k[V+0]=x[E+0]*q,k[V+1]=x[E+1]*q,k[V+2]=x[E+2]*q,k[V+3]=1},T=function(x,E,k,V){const P=x[E+3],q=Math.pow(2,P-128)/255;k[V+0]=Ye.toHalfFloat(Math.min(x[E+0]*q,65504)),k[V+1]=Ye.toHalfFloat(Math.min(x[E+1]*q,65504)),k[V+2]=Ye.toHalfFloat(Math.min(x[E+2]*q,65504)),k[V+3]=Ye.toHalfFloat(1)},U=new Uint8Array(t);U.pos=0;const R=M(U),Z=R.width,$=R.height,G=Y(U.subarray(U.pos),Z,$);let L,B,X;switch(this.type){case ke:X=G.length/4;const x=new Float32Array(X*4);for(let k=0;k<X;k++)z(G,k*4,x,k*4);L=x,B=ke;break;case Te:X=G.length/4;const E=new Uint16Array(X*4);for(let k=0;k<X;k++)T(G,k*4,E,k*4);L=E,B=Te;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:Z,height:$,data:L,header:R.string,gamma:R.gamma,exposure:R.exposure,type:B}}setDataType(t){return this.type=t,this}load(t,n,s,i){function o(u,f){switch(u.type){case ke:case Te:"colorSpace"in u?u.colorSpace="srgb-linear":u.encoding=3e3,u.minFilter=Le,u.magFilter=Le,u.generateMipmaps=!1,u.flipY=!0;break}n&&n(u,f)}return super.load(t,o,s,i)}}const it=Et>=152;class za extends ur{constructor(t){super(t),this.type=Te}parse(t){const E=Math.pow(2.7182818,2.2);function k(e,r){for(var a=0,c=0;c<65536;++c)(c==0||e[c>>3]&1<<(c&7))&&(r[a++]=c);for(var h=a-1;a<65536;)r[a++]=0;return h}function V(e){for(var r=0;r<16384;r++)e[r]={},e[r].len=0,e[r].lit=0,e[r].p=null}const P={l:0,c:0,lc:0};function q(e,r,a,c,h){for(;a<e;)r=r<<8|Xt(c,h),a+=8;a-=e,P.l=r>>a&(1<<e)-1,P.c=r,P.lc=a}const F=new Array(59);function ie(e){for(var r=0;r<=58;++r)F[r]=0;for(var r=0;r<65537;++r)F[e[r]]+=1;for(var a=0,r=58;r>0;--r){var c=a+F[r]>>1;F[r]=a,a=c}for(var r=0;r<65537;++r){var h=e[r];h>0&&(e[r]=h|F[h]++<<6)}}function H(e,r,a,c,h,d,g){for(var v=a,_=0,y=0;h<=d;h++){if(v.value-a.value>c)return!1;q(6,_,y,e,v);var S=P.l;if(_=P.c,y=P.lc,g[h]=S,S==63){if(v.value-a.value>c)throw"Something wrong with hufUnpackEncTable";q(8,_,y,e,v);var w=P.l+6;if(_=P.c,y=P.lc,h+w>d+1)throw"Something wrong with hufUnpackEncTable";for(;w--;)g[h++]=0;h--}else if(S>=59){var w=S-59+2;if(h+w>d+1)throw"Something wrong with hufUnpackEncTable";for(;w--;)g[h++]=0;h--}}ie(g)}function Me(e){return e&63}function Ve(e){return e>>6}function Ie(e,r,a,c){for(;r<=a;r++){var h=Ve(e[r]),d=Me(e[r]);if(h>>d)throw"Invalid table entry";if(d>14){var g=c[h>>d-14];if(g.len)throw"Invalid table entry";if(g.lit++,g.p){var v=g.p;g.p=new Array(g.lit);for(var _=0;_<g.lit-1;++_)g.p[_]=v[_]}else g.p=new Array(1);g.p[g.lit-1]=r}else if(d)for(var y=0,_=1<<14-d;_>0;_--){var g=c[(h<<14-d)+y];if(g.len||g.p)throw"Invalid table entry";g.len=d,g.lit=r,y++}}return!0}const re={c:0,lc:0};function Pe(e,r,a,c){e=e<<8|Xt(a,c),r+=8,re.c=e,re.lc=r}const se={c:0,lc:0};function de(e,r,a,c,h,d,g,v,_,y){if(e==r){c<8&&(Pe(a,c,h,g),a=re.c,c=re.lc),c-=8;var S=a>>c,S=new Uint8Array([S])[0];if(_.value+S>y)return!1;for(var w=v[_.value-1];S-- >0;)v[_.value++]=w}else if(_.value<y)v[_.value++]=e;else return!1;se.c=a,se.lc=c}function Ue(e){return e&65535}function Je(e){var r=Ue(e);return r>32767?r-65536:r}const Q={a:0,b:0};function Oe(e,r){var a=Je(e),c=Je(r),h=c,d=a+(h&1)+(h>>1),g=d,v=d-h;Q.a=g,Q.b=v}function Ne(e,r){var a=Ue(e),c=Ue(r),h=a-(c>>1)&65535,d=c+h-32768&65535;Q.a=d,Q.b=h}function Ir(e,r,a,c,h,d,g){for(var v=g<16384,_=a>h?h:a,y=1,S;y<=_;)y<<=1;for(y>>=1,S=y,y>>=1;y>=1;){for(var w=0,le=w+d*(h-S),C=d*y,D=d*S,O=c*y,N=c*S,K,ee,ue,we;w<=le;w+=D){for(var te=w,Ce=w+c*(a-S);te<=Ce;te+=N){var ne=te+O,he=te+C,ze=he+O;v?(Oe(e[te+r],e[he+r]),K=Q.a,ue=Q.b,Oe(e[ne+r],e[ze+r]),ee=Q.a,we=Q.b,Oe(K,ee),e[te+r]=Q.a,e[ne+r]=Q.b,Oe(ue,we),e[he+r]=Q.a,e[ze+r]=Q.b):(Ne(e[te+r],e[he+r]),K=Q.a,ue=Q.b,Ne(e[ne+r],e[ze+r]),ee=Q.a,we=Q.b,Ne(K,ee),e[te+r]=Q.a,e[ne+r]=Q.b,Ne(ue,we),e[he+r]=Q.a,e[ze+r]=Q.b)}if(a&y){var he=te+C;v?Oe(e[te+r],e[he+r]):Ne(e[te+r],e[he+r]),K=Q.a,e[he+r]=Q.b,e[te+r]=K}}if(h&y)for(var te=w,Ce=w+c*(a-S);te<=Ce;te+=N){var ne=te+O;v?Oe(e[te+r],e[ne+r]):Ne(e[te+r],e[ne+r]),K=Q.a,e[ne+r]=Q.b,e[te+r]=K}S=y,y>>=1}return w}function Ar(e,r,a,c,h,d,g,v,_,y){for(var S=0,w=0,le=v,C=Math.trunc(h.value+(d+7)/8);h.value<C;)for(Pe(S,w,a,h),S=re.c,w=re.lc;w>=14;){var D=S>>w-14&16383,O=r[D];if(O.len)w-=O.len,de(O.lit,g,S,w,a,c,h,_,y,le),S=se.c,w=se.lc;else{if(!O.p)throw"hufDecode issues";var N;for(N=0;N<O.lit;N++){for(var K=Me(e[O.p[N]]);w<K&&h.value<C;)Pe(S,w,a,h),S=re.c,w=re.lc;if(w>=K&&Ve(e[O.p[N]])==(S>>w-K&(1<<K)-1)){w-=K,de(O.p[N],g,S,w,a,c,h,_,y,le),S=se.c,w=se.lc;break}}if(N==O.lit)throw"hufDecode issues"}}var ee=8-d&7;for(S>>=ee,w-=ee;w>0;){var O=r[S<<14-w&16383];if(O.len)w-=O.len,de(O.lit,g,S,w,a,c,h,_,y,le),S=se.c,w=se.lc;else throw"hufDecode issues"}return!0}function Pt(e,r,a,c,h,d){var g={value:0},v=a.value,_=ye(r,a),y=ye(r,a);a.value+=4;var S=ye(r,a);if(a.value+=4,_<0||_>=65537||y<0||y>=65537)throw"Something wrong with HUF_ENCSIZE";var w=new Array(65537),le=new Array(16384);V(le);var C=c-(a.value-v);if(H(e,r,a,C,_,y,w),S>8*(c-(a.value-v)))throw"Something wrong with hufUncompress";Ie(w,_,y,le),Ar(w,le,e,r,a,S,y,d,h,g)}function Tr(e,r,a){for(var c=0;c<a;++c)r[c]=e[r[c]]}function Ht(e){for(var r=1;r<e.length;r++){var a=e[r-1]+e[r]-128;e[r]=a}}function Gt(e,r){for(var a=0,c=Math.floor((e.length+1)/2),h=0,d=e.length-1;!(h>d||(r[h++]=e[a++],h>d));)r[h++]=e[c++]}function Zt(e){for(var r=e.byteLength,a=new Array,c=0,h=new DataView(e);r>0;){var d=h.getInt8(c++);if(d<0){var g=-d;r-=g+1;for(var v=0;v<g;v++)a.push(h.getUint8(c++))}else{var g=d;r-=2;for(var _=h.getUint8(c++),v=0;v<g+1;v++)a.push(_)}}return a}function Ur(e,r,a,c,h,d){var ne=new DataView(d.buffer),g=a[e.idx[0]].width,v=a[e.idx[0]].height,_=3,y=Math.floor(g/8),S=Math.ceil(g/8),w=Math.ceil(v/8),le=g-(S-1)*8,C=v-(w-1)*8,D={value:0},O=new Array(_),N=new Array(_),K=new Array(_),ee=new Array(_),ue=new Array(_);for(let J=0;J<_;++J)ue[J]=r[e.idx[J]],O[J]=J<1?0:O[J-1]+S*w,N[J]=new Float32Array(64),K[J]=new Uint16Array(64),ee[J]=new Uint16Array(S*64);for(let J=0;J<w;++J){var we=8;J==w-1&&(we=C);var te=8;for(let oe=0;oe<S;++oe){oe==S-1&&(te=le);for(let j=0;j<_;++j)K[j].fill(0),K[j][0]=h[O[j]++],Cr(D,c,K[j]),Dr(K[j],N[j]),Rr(N[j]);Br(N);for(let j=0;j<_;++j)Fr(N[j],ee[j],oe*64)}let ge=0;for(let oe=0;oe<_;++oe){const j=a[e.idx[oe]].type;for(let Ee=8*J;Ee<8*J+we;++Ee){ge=ue[oe][Ee];for(let Xe=0;Xe<y;++Xe){const _e=Xe*64+(Ee&7)*8;ne.setUint16(ge+0*j,ee[oe][_e+0],!0),ne.setUint16(ge+2*j,ee[oe][_e+1],!0),ne.setUint16(ge+4*j,ee[oe][_e+2],!0),ne.setUint16(ge+6*j,ee[oe][_e+3],!0),ne.setUint16(ge+8*j,ee[oe][_e+4],!0),ne.setUint16(ge+10*j,ee[oe][_e+5],!0),ne.setUint16(ge+12*j,ee[oe][_e+6],!0),ne.setUint16(ge+14*j,ee[oe][_e+7],!0),ge+=16*j}}if(y!=S)for(let Ee=8*J;Ee<8*J+we;++Ee){const Xe=ue[oe][Ee]+8*y*2*j,_e=y*64+(Ee&7)*8;for(let He=0;He<te;++He)ne.setUint16(Xe+He*2*j,ee[oe][_e+He],!0)}}}for(var Ce=new Uint16Array(g),ne=new DataView(d.buffer),he=0;he<_;++he){a[e.idx[he]].decoded=!0;var ze=a[e.idx[he]].type;if(a[he].type==2)for(var at=0;at<v;++at){const J=ue[he][at];for(var xe=0;xe<g;++xe)Ce[xe]=ne.getUint16(J+xe*2*ze,!0);for(var xe=0;xe<g;++xe)ne.setFloat32(J+xe*2*ze,I(Ce[xe]),!0)}}}function Cr(e,r,a){for(var c,h=1;h<64;)c=r[e.value],c==65280?h=64:c>>8==255?h+=c&255:(a[h]=c,h++),e.value++}function Dr(e,r){r[0]=I(e[0]),r[1]=I(e[1]),r[2]=I(e[5]),r[3]=I(e[6]),r[4]=I(e[14]),r[5]=I(e[15]),r[6]=I(e[27]),r[7]=I(e[28]),r[8]=I(e[2]),r[9]=I(e[4]),r[10]=I(e[7]),r[11]=I(e[13]),r[12]=I(e[16]),r[13]=I(e[26]),r[14]=I(e[29]),r[15]=I(e[42]),r[16]=I(e[3]),r[17]=I(e[8]),r[18]=I(e[12]),r[19]=I(e[17]),r[20]=I(e[25]),r[21]=I(e[30]),r[22]=I(e[41]),r[23]=I(e[43]),r[24]=I(e[9]),r[25]=I(e[11]),r[26]=I(e[18]),r[27]=I(e[24]),r[28]=I(e[31]),r[29]=I(e[40]),r[30]=I(e[44]),r[31]=I(e[53]),r[32]=I(e[10]),r[33]=I(e[19]),r[34]=I(e[23]),r[35]=I(e[32]),r[36]=I(e[39]),r[37]=I(e[45]),r[38]=I(e[52]),r[39]=I(e[54]),r[40]=I(e[20]),r[41]=I(e[22]),r[42]=I(e[33]),r[43]=I(e[38]),r[44]=I(e[46]),r[45]=I(e[51]),r[46]=I(e[55]),r[47]=I(e[60]),r[48]=I(e[21]),r[49]=I(e[34]),r[50]=I(e[37]),r[51]=I(e[47]),r[52]=I(e[50]),r[53]=I(e[56]),r[54]=I(e[59]),r[55]=I(e[61]),r[56]=I(e[35]),r[57]=I(e[36]),r[58]=I(e[48]),r[59]=I(e[49]),r[60]=I(e[57]),r[61]=I(e[58]),r[62]=I(e[62]),r[63]=I(e[63])}function Rr(e){const r=.5*Math.cos(.7853975),a=.5*Math.cos(3.14159/16),c=.5*Math.cos(3.14159/8),h=.5*Math.cos(3*3.14159/16),d=.5*Math.cos(5*3.14159/16),g=.5*Math.cos(3*3.14159/8),v=.5*Math.cos(7*3.14159/16);for(var _=new Array(4),y=new Array(4),S=new Array(4),w=new Array(4),le=0;le<8;++le){var C=le*8;_[0]=c*e[C+2],_[1]=g*e[C+2],_[2]=c*e[C+6],_[3]=g*e[C+6],y[0]=a*e[C+1]+h*e[C+3]+d*e[C+5]+v*e[C+7],y[1]=h*e[C+1]-v*e[C+3]-a*e[C+5]-d*e[C+7],y[2]=d*e[C+1]-a*e[C+3]+v*e[C+5]+h*e[C+7],y[3]=v*e[C+1]-d*e[C+3]+h*e[C+5]-a*e[C+7],S[0]=r*(e[C+0]+e[C+4]),S[3]=r*(e[C+0]-e[C+4]),S[1]=_[0]+_[3],S[2]=_[1]-_[2],w[0]=S[0]+S[1],w[1]=S[3]+S[2],w[2]=S[3]-S[2],w[3]=S[0]-S[1],e[C+0]=w[0]+y[0],e[C+1]=w[1]+y[1],e[C+2]=w[2]+y[2],e[C+3]=w[3]+y[3],e[C+4]=w[3]-y[3],e[C+5]=w[2]-y[2],e[C+6]=w[1]-y[1],e[C+7]=w[0]-y[0]}for(var D=0;D<8;++D)_[0]=c*e[16+D],_[1]=g*e[16+D],_[2]=c*e[48+D],_[3]=g*e[48+D],y[0]=a*e[8+D]+h*e[24+D]+d*e[40+D]+v*e[56+D],y[1]=h*e[8+D]-v*e[24+D]-a*e[40+D]-d*e[56+D],y[2]=d*e[8+D]-a*e[24+D]+v*e[40+D]+h*e[56+D],y[3]=v*e[8+D]-d*e[24+D]+h*e[40+D]-a*e[56+D],S[0]=r*(e[D]+e[32+D]),S[3]=r*(e[D]-e[32+D]),S[1]=_[0]+_[3],S[2]=_[1]-_[2],w[0]=S[0]+S[1],w[1]=S[3]+S[2],w[2]=S[3]-S[2],w[3]=S[0]-S[1],e[0+D]=w[0]+y[0],e[8+D]=w[1]+y[1],e[16+D]=w[2]+y[2],e[24+D]=w[3]+y[3],e[32+D]=w[3]-y[3],e[40+D]=w[2]-y[2],e[48+D]=w[1]-y[1],e[56+D]=w[0]-y[0]}function Br(e){for(var r=0;r<64;++r){var a=e[0][r],c=e[1][r],h=e[2][r];e[0][r]=a+1.5747*h,e[1][r]=a-.1873*c-.4682*h,e[2][r]=a+1.8556*c}}function Fr(e,r,a){for(var c=0;c<64;++c)r[a+c]=Ye.toHalfFloat(Lr(e[c]))}function Lr(e){return e<=1?Math.sign(e)*Math.pow(Math.abs(e),2.2):Math.sign(e)*Math.pow(E,Math.abs(e)-1)}function Wt(e){return new DataView(e.array.buffer,e.offset.value,e.size)}function Or(e){var r=e.viewer.buffer.slice(e.offset.value,e.offset.value+e.size),a=new Uint8Array(Zt(r)),c=new Uint8Array(a.length);return Ht(a),Gt(a,c),new DataView(c.buffer)}function bt(e){var r=e.array.slice(e.offset.value,e.offset.value+e.size),a=mt(r),c=new Uint8Array(a.length);return Ht(a),Gt(a,c),new DataView(c.buffer)}function Nr(e){for(var r=e.viewer,a={value:e.offset.value},c=new Uint16Array(e.width*e.scanlineBlockSize*(e.channels*e.type)),h=new Uint8Array(8192),d=0,g=new Array(e.channels),v=0;v<e.channels;v++)g[v]={},g[v].start=d,g[v].end=g[v].start,g[v].nx=e.width,g[v].ny=e.lines,g[v].size=e.type,d+=g[v].nx*g[v].ny*g[v].size;var _=tt(r,a),y=tt(r,a);if(y>=8192)throw"Something is wrong with PIZ_COMPRESSION BITMAP_SIZE";if(_<=y)for(var v=0;v<y-_+1;v++)h[v+_]=je(r,a);var S=new Uint16Array(65536),w=k(h,S),le=ye(r,a);Pt(e.array,r,a,le,c,d);for(var v=0;v<e.channels;++v)for(var C=g[v],D=0;D<g[v].size;++D)Ir(c,C.start+D,C.nx,C.size,C.ny,C.nx*C.size,w);Tr(S,c,d);for(var O=0,N=new Uint8Array(c.buffer.byteLength),K=0;K<e.lines;K++)for(var ee=0;ee<e.channels;ee++){var C=g[ee],ue=C.nx*C.size,we=new Uint8Array(c.buffer,C.end*2,ue*2);N.set(we,O),O+=ue*2,C.end+=ue}return new DataView(N.buffer)}function zr(e){var r=e.array.slice(e.offset.value,e.offset.value+e.size),a=mt(r);const c=e.lines*e.channels*e.width,h=e.type==1?new Uint16Array(c):new Uint32Array(c);let d=0,g=0;const v=new Array(4);for(let _=0;_<e.lines;_++)for(let y=0;y<e.channels;y++){let S=0;switch(e.type){case 1:v[0]=d,v[1]=v[0]+e.width,d=v[1]+e.width;for(let w=0;w<e.width;++w){const le=a[v[0]++]<<8|a[v[1]++];S+=le,h[g]=S,g++}break;case 2:v[0]=d,v[1]=v[0]+e.width,v[2]=v[1]+e.width,d=v[2]+e.width;for(let w=0;w<e.width;++w){const le=a[v[0]++]<<24|a[v[1]++]<<16|a[v[2]++]<<8;S+=le,h[g]=S,g++}break}}return new DataView(h.buffer)}function Vt(e){var r=e.viewer,a={value:e.offset.value},c=new Uint8Array(e.width*e.lines*(e.channels*e.type*2)),h={version:Se(r,a),unknownUncompressedSize:Se(r,a),unknownCompressedSize:Se(r,a),acCompressedSize:Se(r,a),dcCompressedSize:Se(r,a),rleCompressedSize:Se(r,a),rleUncompressedSize:Se(r,a),rleRawSize:Se(r,a),totalAcUncompressedCount:Se(r,a),totalDcUncompressedCount:Se(r,a),acCompression:Se(r,a)};if(h.version<2)throw"EXRLoader.parse: "+nt.compression+" version "+h.version+" is unsupported";for(var d=new Array,g=tt(r,a)-2;g>0;){var v=pt(r.buffer,a),_=je(r,a),y=_>>2&3,S=(_>>4)-1,w=new Int8Array([S])[0],le=je(r,a);d.push({name:v,index:w,type:le,compression:y}),g-=v.length+3}for(var C=nt.channels,D=new Array(e.channels),O=0;O<e.channels;++O){var N=D[O]={},K=C[O];N.name=K.name,N.compression=0,N.decoded=!1,N.type=K.pixelType,N.pLinear=K.pLinear,N.width=e.width,N.height=e.lines}for(var ee={idx:new Array(3)},ue=0;ue<e.channels;++ue)for(var N=D[ue],O=0;O<d.length;++O){var we=d[O];N.name==we.name&&(N.compression=we.compression,we.index>=0&&(ee.idx[we.index]=ue),N.offset=ue)}if(h.acCompressedSize>0)switch(h.acCompression){case 0:var ne=new Uint16Array(h.totalAcUncompressedCount);Pt(e.array,r,a,h.acCompressedSize,ne,h.totalAcUncompressedCount);break;case 1:var te=e.array.slice(a.value,a.value+h.totalAcUncompressedCount),Ce=mt(te),ne=new Uint16Array(Ce.buffer);a.value+=h.totalAcUncompressedCount;break}if(h.dcCompressedSize>0){var he={array:e.array,offset:a,size:h.dcCompressedSize},ze=new Uint16Array(bt(he).buffer);a.value+=h.dcCompressedSize}if(h.rleRawSize>0){var te=e.array.slice(a.value,a.value+h.rleCompressedSize),Ce=mt(te),at=Zt(Ce.buffer);a.value+=h.rleCompressedSize}for(var xe=0,J=new Array(D.length),O=0;O<J.length;++O)J[O]=new Array;for(var ge=0;ge<e.lines;++ge)for(var oe=0;oe<D.length;++oe)J[oe].push(xe),xe+=D[oe].width*e.type*2;Ur(ee,J,D,ne,ze,c);for(var O=0;O<D.length;++O){var N=D[O];if(!N.decoded)switch(N.compression){case 2:for(var j=0,Ee=0,ge=0;ge<e.lines;++ge){for(var Xe=J[O][j],_e=0;_e<N.width;++_e){for(var He=0;He<2*N.type;++He)c[Xe++]=at[Ee+He*N.width*N.height];Ee++}j++}break;case 1:default:throw"EXRLoader.parse: unsupported channel compression"}}return new DataView(c.buffer)}function pt(e,r){for(var a=new Uint8Array(e),c=0;a[r.value+c]!=0;)c+=1;var h=new TextDecoder().decode(a.slice(r.value,r.value+c));return r.value=r.value+c+1,h}function kr(e,r,a){var c=new TextDecoder().decode(new Uint8Array(e).slice(r.value,r.value+a));return r.value=r.value+a,c}function Pr(e,r){var a=et(e,r),c=ye(e,r);return[a,c]}function Hr(e,r){var a=ye(e,r),c=ye(e,r);return[a,c]}function et(e,r){var a=e.getInt32(r.value,!0);return r.value=r.value+4,a}function ye(e,r){var a=e.getUint32(r.value,!0);return r.value=r.value+4,a}function Xt(e,r){var a=e[r.value];return r.value=r.value+1,a}function je(e,r){var a=e.getUint8(r.value);return r.value=r.value+1,a}const Se=function(e,r){let a;return"getBigInt64"in DataView.prototype?a=Number(e.getBigInt64(r.value,!0)):a=e.getUint32(r.value+4,!0)+Number(e.getUint32(r.value,!0)<<32),r.value+=8,a};function me(e,r){var a=e.getFloat32(r.value,!0);return r.value+=4,a}function Gr(e,r){return Ye.toHalfFloat(me(e,r))}function I(e){var r=(e&31744)>>10,a=e&1023;return(e>>15?-1:1)*(r?r===31?a?NaN:1/0:Math.pow(2,r-15)*(1+a/1024):6103515625e-14*(a/1024))}function tt(e,r){var a=e.getUint16(r.value,!0);return r.value+=2,a}function Zr(e,r){return I(tt(e,r))}function Wr(e,r,a,c){for(var h=a.value,d=[];a.value<h+c-1;){var g=pt(r,a),v=et(e,a),_=je(e,a);a.value+=3;var y=et(e,a),S=et(e,a);d.push({name:g,pixelType:v,pLinear:_,xSampling:y,ySampling:S})}return a.value+=1,d}function Vr(e,r){var a=me(e,r),c=me(e,r),h=me(e,r),d=me(e,r),g=me(e,r),v=me(e,r),_=me(e,r),y=me(e,r);return{redX:a,redY:c,greenX:h,greenY:d,blueX:g,blueY:v,whiteX:_,whiteY:y}}function Xr(e,r){var a=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],c=je(e,r);return a[c]}function $r(e,r){var a=ye(e,r),c=ye(e,r),h=ye(e,r),d=ye(e,r);return{xMin:a,yMin:c,xMax:h,yMax:d}}function qr(e,r){var a=["INCREASING_Y"],c=je(e,r);return a[c]}function jr(e,r){var a=me(e,r),c=me(e,r);return[a,c]}function Yr(e,r){var a=me(e,r),c=me(e,r),h=me(e,r);return[a,c,h]}function Qr(e,r,a,c,h){if(c==="string"||c==="stringvector"||c==="iccProfile")return kr(r,a,h);if(c==="chlist")return Wr(e,r,a,h);if(c==="chromaticities")return Vr(e,a);if(c==="compression")return Xr(e,a);if(c==="box2i")return $r(e,a);if(c==="lineOrder")return qr(e,a);if(c==="float")return me(e,a);if(c==="v2f")return jr(e,a);if(c==="v3f")return Yr(e,a);if(c==="int")return et(e,a);if(c==="rational")return Pr(e,a);if(c==="timecode")return Hr(e,a);if(c==="preview")return a.value+=h,"skipped";a.value+=h}function Kr(e,r,a){const c={};if(e.getUint32(0,!0)!=20000630)throw"THREE.EXRLoader: provided file doesn't appear to be in OpenEXR format.";c.version=e.getUint8(4);const h=e.getUint8(5);c.spec={singleTile:!!(h&2),longName:!!(h&4),deepFormat:!!(h&8),multiPart:!!(h&16)},a.value=8;for(var d=!0;d;){var g=pt(r,a);if(g==0)d=!1;else{var v=pt(r,a),_=ye(e,a),y=Qr(e,r,a,v,_);y===void 0?console.warn(`EXRLoader.parse: skipped unknown header attribute type '${v}'.`):c[g]=y}}if((h&-5)!=0)throw console.error("EXRHeader:",c),"THREE.EXRLoader: provided file is currently unsupported.";return c}function Jr(e,r,a,c,h){const d={size:0,viewer:r,array:a,offset:c,width:e.dataWindow.xMax-e.dataWindow.xMin+1,height:e.dataWindow.yMax-e.dataWindow.yMin+1,channels:e.channels.length,bytesPerLine:null,lines:null,inputSize:null,type:e.channels[0].pixelType,uncompress:null,getter:null,format:null,[it?"colorSpace":"encoding"]:null};switch(e.compression){case"NO_COMPRESSION":d.lines=1,d.uncompress=Wt;break;case"RLE_COMPRESSION":d.lines=1,d.uncompress=Or;break;case"ZIPS_COMPRESSION":d.lines=1,d.uncompress=bt;break;case"ZIP_COMPRESSION":d.lines=16,d.uncompress=bt;break;case"PIZ_COMPRESSION":d.lines=32,d.uncompress=Nr;break;case"PXR24_COMPRESSION":d.lines=16,d.uncompress=zr;break;case"DWAA_COMPRESSION":d.lines=32,d.uncompress=Vt;break;case"DWAB_COMPRESSION":d.lines=256,d.uncompress=Vt;break;default:throw"EXRLoader.parse: "+e.compression+" is unsupported"}if(d.scanlineBlockSize=d.lines,d.type==1)switch(h){case ke:d.getter=Zr,d.inputSize=2;break;case Te:d.getter=tt,d.inputSize=2;break}else if(d.type==2)switch(h){case ke:d.getter=me,d.inputSize=4;break;case Te:d.getter=Gr,d.inputSize=4}else throw"EXRLoader.parse: unsupported pixelType "+d.type+" for "+e.compression+".";d.blockCount=(e.dataWindow.yMax+1)/d.scanlineBlockSize;for(var g=0;g<d.blockCount;g++)Se(r,c);d.outputChannels=d.channels==3?4:d.channels;const v=d.width*d.height*d.outputChannels;switch(h){case ke:d.byteArray=new Float32Array(v),d.channels<d.outputChannels&&d.byteArray.fill(1,0,v);break;case Te:d.byteArray=new Uint16Array(v),d.channels<d.outputChannels&&d.byteArray.fill(15360,0,v);break;default:console.error("THREE.EXRLoader: unsupported type: ",h);break}return d.bytesPerLine=d.width*d.inputSize*d.channels,d.outputChannels==4?d.format=ct:d.format=pn,it?d.colorSpace="srgb-linear":d.encoding=3e3,d}const vt=new DataView(t),en=new Uint8Array(t),rt={value:0},nt=Kr(vt,t,rt),W=Jr(nt,vt,en,rt,this.type),$t={value:0},tn={R:0,G:1,B:2,A:3,Y:0};for(let e=0;e<W.height/W.scanlineBlockSize;e++){const r=ye(vt,rt);W.size=ye(vt,rt),W.lines=r+W.scanlineBlockSize>W.height?W.height-r:W.scanlineBlockSize;const c=W.size<W.lines*W.bytesPerLine?W.uncompress(W):Wt(W);rt.value+=W.size;for(let h=0;h<W.scanlineBlockSize;h++){const d=h+e*W.scanlineBlockSize;if(d>=W.height)break;for(let g=0;g<W.channels;g++){const v=tn[nt.channels[g].name];for(let _=0;_<W.width;_++){$t.value=(h*(W.channels*W.width)+g*W.width+_)*W.inputSize;const y=(W.height-1-d)*(W.width*W.outputChannels)+_*W.outputChannels+v;W.byteArray[y]=W.getter(c,$t)}}}}return{header:nt,width:W.width,height:W.height,data:W.byteArray,format:W.format,[it?"colorSpace":"encoding"]:W[it?"colorSpace":"encoding"],type:this.type}}setDataType(t){return this.type=t,this}load(t,n,s,i){function o(u,f){it?u.colorSpace=f.colorSpace:u.encoding=f.encoding,u.minFilter=Le,u.magFilter=Le,u.generateMipmaps=!1,u.flipY=!1,n&&n(u,f)}return super.load(t,o,s,i)}}const er=new zt,gt=new ce;class _r extends vn{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],n=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],s=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(s),this.setAttribute("position",new jt(t,3)),this.setAttribute("uv",new jt(n,2))}applyMatrix4(t){const n=this.attributes.instanceStart,s=this.attributes.instanceEnd;return n!==void 0&&(n.applyMatrix4(t),s.applyMatrix4(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let n;t instanceof Float32Array?n=t:Array.isArray(t)&&(n=new Float32Array(t));const s=new Rt(n,6,1);return this.setAttribute("instanceStart",new Qe(s,3,0)),this.setAttribute("instanceEnd",new Qe(s,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t,n=3){let s;t instanceof Float32Array?s=t:Array.isArray(t)&&(s=new Float32Array(t));const i=new Rt(s,n*2,1);return this.setAttribute("instanceColorStart",new Qe(i,n,0)),this.setAttribute("instanceColorEnd",new Qe(i,n,n)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new mn(t.geometry)),this}fromLineSegments(t){const n=t.geometry;return this.setPositions(n.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zt);const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;t!==void 0&&n!==void 0&&(this.boundingBox.setFromBufferAttribute(t),er.setFromBufferAttribute(n),this.boundingBox.union(er))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hr),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;if(t!==void 0&&n!==void 0){const s=this.boundingSphere.center;this.boundingBox.getCenter(s);let i=0;for(let o=0,u=t.count;o<u;o++)gt.fromBufferAttribute(t,o),i=Math.max(i,s.distanceToSquared(gt)),gt.fromBufferAttribute(n,o),i=Math.max(i,s.distanceToSquared(gt));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}}class ua extends _r{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){const n=t.length-3,s=new Float32Array(2*n);for(let i=0;i<n;i+=3)s[2*i]=t[i],s[2*i+1]=t[i+1],s[2*i+2]=t[i+2],s[2*i+3]=t[i+3],s[2*i+4]=t[i+4],s[2*i+5]=t[i+5];return super.setPositions(s),this}setColors(t,n=3){const s=t.length-n,i=new Float32Array(2*s);if(n===3)for(let o=0;o<s;o+=n)i[2*o]=t[o],i[2*o+1]=t[o+1],i[2*o+2]=t[o+2],i[2*o+3]=t[o+3],i[2*o+4]=t[o+4],i[2*o+5]=t[o+5];else for(let o=0;o<s;o+=n)i[2*o]=t[o],i[2*o+1]=t[o+1],i[2*o+2]=t[o+2],i[2*o+3]=t[o+3],i[2*o+4]=t[o+4],i[2*o+5]=t[o+5],i[2*o+6]=t[o+6],i[2*o+7]=t[o+7];return super.setColors(i,n),this}fromLine(t){const n=t.geometry;return this.setPositions(n.attributes.position.array),this}}class Sr extends xt{constructor(t){super({type:"LineMaterial",uniforms:Yt.clone(Yt.merge([Qt.common,Qt.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new gn(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${Et>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(n){this.uniforms.diffuse.value=n}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(n){n===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(n){this.uniforms.linewidth.value=n}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(n){!!n!="USE_DASH"in this.defines&&(this.needsUpdate=!0),n===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(n){this.uniforms.dashScale.value=n}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(n){this.uniforms.dashSize.value=n}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(n){this.uniforms.dashOffset.value=n}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(n){this.uniforms.gapSize.value=n}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(n){this.uniforms.opacity.value=n}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(n){this.uniforms.resolution.value.copy(n)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(n){!!n!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),n===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(t)}}const Tt=new dt,tr=new ce,rr=new ce,fe=new dt,pe=new dt,De=new dt,Ut=new ce,Ct=new yn,ve=new wn,nr=new ce,wt=new zt,yt=new hr,Re=new dt;let Fe,qe;function ar(l,t,n){return Re.set(0,0,-t,1).applyMatrix4(l.projectionMatrix),Re.multiplyScalar(1/Re.w),Re.x=qe/n.width,Re.y=qe/n.height,Re.applyMatrix4(l.projectionMatrixInverse),Re.multiplyScalar(1/Re.w),Math.abs(Math.max(Re.x,Re.y))}function ha(l,t){const n=l.matrixWorld,s=l.geometry,i=s.attributes.instanceStart,o=s.attributes.instanceEnd,u=Math.min(s.instanceCount,i.count);for(let f=0,p=u;f<p;f++){ve.start.fromBufferAttribute(i,f),ve.end.fromBufferAttribute(o,f),ve.applyMatrix4(n);const m=new ce,A=new ce;Fe.distanceSqToSegment(ve.start,ve.end,A,m),A.distanceTo(m)<qe*.5&&t.push({point:A,pointOnLine:m,distance:Fe.origin.distanceTo(A),object:l,face:null,faceIndex:f,uv:null,[fr]:null})}}function da(l,t,n){const s=t.projectionMatrix,o=l.material.resolution,u=l.matrixWorld,f=l.geometry,p=f.attributes.instanceStart,m=f.attributes.instanceEnd,A=Math.min(f.instanceCount,p.count),b=-t.near;Fe.at(1,De),De.w=1,De.applyMatrix4(t.matrixWorldInverse),De.applyMatrix4(s),De.multiplyScalar(1/De.w),De.x*=o.x/2,De.y*=o.y/2,De.z=0,Ut.copy(De),Ct.multiplyMatrices(t.matrixWorldInverse,u);for(let M=0,Y=A;M<Y;M++){if(fe.fromBufferAttribute(p,M),pe.fromBufferAttribute(m,M),fe.w=1,pe.w=1,fe.applyMatrix4(Ct),pe.applyMatrix4(Ct),fe.z>b&&pe.z>b)continue;if(fe.z>b){const $=fe.z-pe.z,G=(fe.z-b)/$;fe.lerp(pe,G)}else if(pe.z>b){const $=pe.z-fe.z,G=(pe.z-b)/$;pe.lerp(fe,G)}fe.applyMatrix4(s),pe.applyMatrix4(s),fe.multiplyScalar(1/fe.w),pe.multiplyScalar(1/pe.w),fe.x*=o.x/2,fe.y*=o.y/2,pe.x*=o.x/2,pe.y*=o.y/2,ve.start.copy(fe),ve.start.z=0,ve.end.copy(pe),ve.end.z=0;const T=ve.closestPointToPointParameter(Ut,!0);ve.at(T,nr);const U=_n.lerp(fe.z,pe.z,T),R=U>=-1&&U<=1,Z=Ut.distanceTo(nr)<qe*.5;if(R&&Z){ve.start.fromBufferAttribute(p,M),ve.end.fromBufferAttribute(m,M),ve.start.applyMatrix4(u),ve.end.applyMatrix4(u);const $=new ce,G=new ce;Fe.distanceSqToSegment(ve.start,ve.end,G,$),n.push({point:G,pointOnLine:$,distance:Fe.origin.distanceTo(G),object:l,face:null,faceIndex:M,uv:null,[fr]:null})}}}class fa extends ht{constructor(t=new _r,n=new Sr({color:Math.random()*16777215})){super(t,n),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,n=t.attributes.instanceStart,s=t.attributes.instanceEnd,i=new Float32Array(2*n.count);for(let u=0,f=0,p=n.count;u<p;u++,f+=2)tr.fromBufferAttribute(n,u),rr.fromBufferAttribute(s,u),i[f]=f===0?0:i[f-1],i[f+1]=i[f]+tr.distanceTo(rr);const o=new Rt(i,2,1);return t.setAttribute("instanceDistanceStart",new Qe(o,1,0)),t.setAttribute("instanceDistanceEnd",new Qe(o,1,1)),this}raycast(t,n){const s=this.material.worldUnits,i=t.camera;i===null&&!s&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const o=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Fe=t.ray;const u=this.matrixWorld,f=this.geometry,p=this.material;qe=p.linewidth+o,f.boundingSphere===null&&f.computeBoundingSphere(),yt.copy(f.boundingSphere).applyMatrix4(u);let m;if(s)m=qe*.5;else{const b=Math.max(i.near,yt.distanceToPoint(Fe.origin));m=ar(i,b,p.resolution)}if(yt.radius+=m,Fe.intersectsSphere(yt)===!1)return;f.boundingBox===null&&f.computeBoundingBox(),wt.copy(f.boundingBox).applyMatrix4(u);let A;if(s)A=qe*.5;else{const b=Math.max(i.near,wt.distanceToPoint(Fe.origin));A=ar(i,b,p.resolution)}wt.expandByScalar(A),Fe.intersectsBox(wt)!==!1&&(s?ha(this,n):da(this,i,n))}onBeforeRender(t){const n=this.material.uniforms;n&&n.resolution&&(t.getViewport(Tt),this.material.uniforms.resolution.value.set(Tt.z,Tt.w))}}class ka extends fa{constructor(t=new ua,n=new Sr({color:Math.random()*16777215})){super(t,n),this.isLine2=!0,this.type="Line2"}}const xr=(l,t,n)=>{let s;switch(l){case Ft:s=new Uint8ClampedArray(t*n*4);break;case Te:s=new Uint16Array(t*n*4);break;case Tn:s=new Uint32Array(t*n*4);break;case An:s=new Int8Array(t*n*4);break;case In:s=new Int16Array(t*n*4);break;case Mn:s=new Int32Array(t*n*4);break;case ke:s=new Float32Array(t*n*4);break;default:throw new Error("Unsupported data type")}return s};let _t;const pa=(l,t,n,s)=>{if(_t!==void 0)return _t;const i=new dr(1,1,s);t.setRenderTarget(i);const o=new ht(new Nt,new bn({color:16777215}));t.render(o,n),t.setRenderTarget(null);const u=xr(l,i.width,i.height);return t.readRenderTargetPixels(i,0,0,i.width,i.height,u),i.dispose(),o.geometry.dispose(),o.material.dispose(),_t=u[0]!==0,_t};class kt{_renderer;_rendererIsDisposable=!1;_material;_scene;_camera;_quad;_renderTarget;_width;_height;_type;_colorSpace;_supportsReadPixels=!0;constructor(t){this._width=t.width,this._height=t.height,this._type=t.type,this._colorSpace=t.colorSpace;const n={format:ct,depthBuffer:!1,stencilBuffer:!1,type:this._type,colorSpace:this._colorSpace,anisotropy:t.renderTargetOptions?.anisotropy!==void 0?t.renderTargetOptions?.anisotropy:1,generateMipmaps:t.renderTargetOptions?.generateMipmaps!==void 0?t.renderTargetOptions?.generateMipmaps:!1,magFilter:t.renderTargetOptions?.magFilter!==void 0?t.renderTargetOptions?.magFilter:Le,minFilter:t.renderTargetOptions?.minFilter!==void 0?t.renderTargetOptions?.minFilter:Le,samples:t.renderTargetOptions?.samples!==void 0?t.renderTargetOptions?.samples:void 0,wrapS:t.renderTargetOptions?.wrapS!==void 0?t.renderTargetOptions?.wrapS:Ze,wrapT:t.renderTargetOptions?.wrapT!==void 0?t.renderTargetOptions?.wrapT:Ze};if(this._material=t.material,t.renderer?this._renderer=t.renderer:(this._renderer=kt.instantiateRenderer(),this._rendererIsDisposable=!0),this._scene=new Sn,this._camera=new lr,this._camera.position.set(0,0,10),this._camera.left=-.5,this._camera.right=.5,this._camera.top=.5,this._camera.bottom=-.5,this._camera.updateProjectionMatrix(),!pa(this._type,this._renderer,this._camera,n)){let s;switch(this._type){case Te:s=this._renderer.extensions.has("EXT_color_buffer_float")?ke:void 0;break}s!==void 0?(console.warn(`This browser does not support reading pixels from ${this._type} RenderTargets, switching to ${ke}`),this._type=s):(this._supportsReadPixels=!1,console.warn("This browser dos not support toArray or toDataTexture, calls to those methods will result in an error thrown"))}this._quad=new ht(new Nt,this._material),this._quad.geometry.computeBoundingBox(),this._scene.add(this._quad),this._renderTarget=new dr(this.width,this.height,n),this._renderTarget.texture.mapping=t.renderTargetOptions?.mapping!==void 0?t.renderTargetOptions?.mapping:St}static instantiateRenderer(){const t=new xn;return t.setSize(128,128),t}render=()=>{this._renderer.setRenderTarget(this._renderTarget);try{this._renderer.render(this._scene,this._camera)}catch(t){throw this._renderer.setRenderTarget(null),t}this._renderer.setRenderTarget(null)};toArray(){if(!this._supportsReadPixels)throw new Error("Can't read pixels in this browser");const t=xr(this._type,this._width,this._height);return this._renderer.readRenderTargetPixels(this._renderTarget,0,0,this._width,this._height,t),t}toDataTexture(t){const n=new En(this.toArray(),this.width,this.height,ct,this._type,t?.mapping||St,t?.wrapS||Ze,t?.wrapT||Ze,t?.magFilter||Le,t?.minFilter||Le,t?.anisotropy||1,Bt);return n.generateMipmaps=t?.generateMipmaps!==void 0?t?.generateMipmaps:!1,n}disposeOnDemandRenderer(){this._renderer.setRenderTarget(null),this._rendererIsDisposable&&(this._renderer.dispose(),this._renderer.forceContextLoss())}dispose(t){this.disposeOnDemandRenderer(),t&&this.renderTarget.dispose(),this.material instanceof xt&&Object.values(this.material.uniforms).forEach(n=>{n.value instanceof Ke&&n.value.dispose()}),Object.values(this.material).forEach(n=>{n instanceof Ke&&n.dispose()}),this.material.dispose(),this._quad.geometry.dispose()}get width(){return this._width}set width(t){this._width=t,this._renderTarget.setSize(this._width,this._height)}get height(){return this._height}set height(t){this._height=t,this._renderTarget.setSize(this._width,this._height)}get renderer(){return this._renderer}get renderTarget(){return this._renderTarget}set renderTarget(t){this._renderTarget=t,this._width=t.width,this._height=t.height}get material(){return this._material}get type(){return this._type}get colorSpace(){return this._colorSpace}}class Er extends Error{}class br extends Error{}const st=(l,t,n)=>{const s=new RegExp(`${t}="([^"]*)"`,"i").exec(l);if(s)return s[1];const i=new RegExp(`<${t}[^>]*>([\\s\\S]*?)</${t}>`,"i").exec(l);if(i){const o=i[1].match(/<rdf:li>([^<]*)<\/rdf:li>/g);return o&&o.length===3?o.map(u=>u.replace(/<\/?rdf:li>/g,"")):i[1].trim()}if(n!==void 0)return n;throw new Error(`Can't find ${t} in gainmap metadata`)},va=l=>{let t;typeof TextDecoder<"u"?t=new TextDecoder().decode(l):t=l.toString();let n=t.indexOf("<x:xmpmeta");for(;n!==-1;){const s=t.indexOf("x:xmpmeta>",n),i=t.slice(n,s+10);try{const o=st(i,"hdrgm:GainMapMin","0"),u=st(i,"hdrgm:GainMapMax"),f=st(i,"hdrgm:Gamma","1"),p=st(i,"hdrgm:OffsetSDR","0.015625"),m=st(i,"hdrgm:OffsetHDR","0.015625"),A=/hdrgm:HDRCapacityMin="([^"]*)"/.exec(i),b=A?A[1]:"0",M=/hdrgm:HDRCapacityMax="([^"]*)"/.exec(i);if(!M)throw new Error("Incomplete gainmap metadata");const Y=M[1];return{gainMapMin:Array.isArray(o)?o.map(z=>parseFloat(z)):[parseFloat(o),parseFloat(o),parseFloat(o)],gainMapMax:Array.isArray(u)?u.map(z=>parseFloat(z)):[parseFloat(u),parseFloat(u),parseFloat(u)],gamma:Array.isArray(f)?f.map(z=>parseFloat(z)):[parseFloat(f),parseFloat(f),parseFloat(f)],offsetSdr:Array.isArray(p)?p.map(z=>parseFloat(z)):[parseFloat(p),parseFloat(p),parseFloat(p)],offsetHdr:Array.isArray(m)?m.map(z=>parseFloat(z)):[parseFloat(m),parseFloat(m),parseFloat(m)],hdrCapacityMin:parseFloat(b),hdrCapacityMax:parseFloat(Y)}}catch{}n=t.indexOf("<x:xmpmeta",s)}};class ma{options;constructor(t){this.options={debug:t&&t.debug!==void 0?t.debug:!1,extractFII:t&&t.extractFII!==void 0?t.extractFII:!0,extractNonFII:t&&t.extractNonFII!==void 0?t.extractNonFII:!0}}extract(t){return new Promise((n,s)=>{const i=this.options.debug,o=new DataView(t.buffer);if(o.getUint16(0)!==65496){s(new Error("Not a valid jpeg"));return}const u=o.byteLength;let f=2,p=0,m;for(;f<u;){if(++p>250){s(new Error(`Found no marker after ${p} loops 😵`));return}if(o.getUint8(f)!==255){s(new Error(`Not a valid marker at offset 0x${f.toString(16)}, found: 0x${o.getUint8(f).toString(16)}`));return}if(m=o.getUint8(f+1),i&&console.log(`Marker: ${m.toString(16)}`),m===226){i&&console.log("Found APP2 marker (0xffe2)");const A=f+4;if(o.getUint32(A)===1297106432){const b=A+4;let M;if(o.getUint16(b)===18761)M=!1;else if(o.getUint16(b)===19789)M=!0;else{s(new Error("No valid endianness marker found in TIFF header"));return}if(o.getUint16(b+2,!M)!==42){s(new Error("Not valid TIFF data! (no 0x002A marker)"));return}const Y=o.getUint32(b+4,!M);if(Y<8){s(new Error("Not valid TIFF data! (First offset less than 8)"));return}const z=b+Y,T=o.getUint16(z,!M),U=z+2;let R=0;for(let L=U;L<U+12*T;L+=12)o.getUint16(L,!M)===45057&&(R=o.getUint32(L+8,!M));const $=z+2+T*12+4,G=[];for(let L=$;L<$+R*16;L+=16){const B={MPType:o.getUint32(L,!M),size:o.getUint32(L+4,!M),dataOffset:o.getUint32(L+8,!M),dependantImages:o.getUint32(L+12,!M),start:-1,end:-1,isFII:!1};B.dataOffset?(B.start=b+B.dataOffset,B.isFII=!1):(B.start=0,B.isFII=!0),B.end=B.start+B.size,G.push(B)}if(this.options.extractNonFII&&G.length){const L=new Blob([o]),B=[];for(const X of G){if(X.isFII&&!this.options.extractFII)continue;const x=L.slice(X.start,X.end+1,"image/jpeg");B.push(x)}n(B)}}}f+=2+o.getUint16(f+2)}})}}const ga=async l=>{const t=va(l);if(!t)throw new br("Gain map XMP metadata not found");const s=await new ma({extractFII:!0,extractNonFII:!0}).extract(l);if(s.length!==2)throw new Er("Gain map recovery image not found");return{sdr:new Uint8Array(await s[0].arrayBuffer()),gainMap:new Uint8Array(await s[1].arrayBuffer()),metadata:t}},ir=l=>new Promise((t,n)=>{const s=document.createElement("img");s.onload=()=>{t(s)},s.onerror=i=>{n(i)},s.src=URL.createObjectURL(l)});class wa extends cr{_renderer;_renderTargetOptions;_internalLoadingManager;_config;constructor(t,n){super(n),this._config=t,t.renderer&&(this._renderer=t.renderer),this._internalLoadingManager=new Un}setRenderer(t){return this._renderer=t,this}setRenderTargetOptions(t){return this._renderTargetOptions=t,this}prepareQuadRenderer(){this._renderer||console.warn("WARNING: A Renderer was not passed to this Loader constructor or in setRenderer, the result of this Loader will need to be converted to a Data Texture with toDataTexture() before you can use it in your renderer.");const t=this._config.createMaterial({gainMapMax:[1,1,1],gainMapMin:[0,0,0],gamma:[1,1,1],offsetHdr:[1,1,1],offsetSdr:[1,1,1],hdrCapacityMax:1,hdrCapacityMin:0,maxDisplayBoost:1,gainMap:new Ke,sdr:new Ke});return this._config.createQuadRenderer({width:16,height:16,type:Te,colorSpace:Bt,material:t,renderer:this._renderer,renderTargetOptions:this._renderTargetOptions})}async processImages(t,n,s){const i=n?new Blob([n],{type:"image/jpeg"}):void 0,o=new Blob([t],{type:"image/jpeg"});let u,f,p=!1;if(typeof createImageBitmap>"u"){const m=await Promise.all([i?ir(i):Promise.resolve(void 0),ir(o)]);f=m[0],u=m[1],p=s==="flipY"}else{const m=await Promise.all([i?createImageBitmap(i,{imageOrientation:s||"flipY"}):Promise.resolve(void 0),createImageBitmap(o,{imageOrientation:s||"flipY"})]);f=m[0],u=m[1]}return{sdrImage:u,gainMapImage:f,needsFlip:p}}createTextures(t,n,s){const i=new Ke(n||new ImageData(2,2),St,Ze,Ze,Le,Kt,ct,Ft,1,Bt);i.flipY=s,i.needsUpdate=!0;const o=new Ke(t,St,Ze,Ze,Le,Kt,ct,Ft,1,Cn);return o.flipY=s,o.needsUpdate=!0,{gainMap:i,sdr:o}}updateQuadRenderer(t,n,s,i,o){t.width=n.width,t.height=n.height,t.material.gainMap=s,t.material.sdr=i,t.material.gainMapMin=o.gainMapMin,t.material.gainMapMax=o.gainMapMax,t.material.offsetHdr=o.offsetHdr,t.material.offsetSdr=o.offsetSdr,t.material.gamma=o.gamma,t.material.hdrCapacityMin=o.hdrCapacityMin,t.material.hdrCapacityMax=o.hdrCapacityMax,t.material.maxDisplayBoost=Math.pow(2,o.hdrCapacityMax),t.material.needsUpdate=!0}}const ya=`
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,_a=`
// min half float value
#define HALF_FLOAT_MIN vec3( -65504, -65504, -65504 )
// max half float value
#define HALF_FLOAT_MAX vec3( 65504, 65504, 65504 )

uniform sampler2D sdr;
uniform sampler2D gainMap;
uniform vec3 gamma;
uniform vec3 offsetHdr;
uniform vec3 offsetSdr;
uniform vec3 gainMapMin;
uniform vec3 gainMapMax;
uniform float weightFactor;

varying vec2 vUv;

void main() {
  vec3 rgb = texture2D( sdr, vUv ).rgb;
  vec3 recovery = texture2D( gainMap, vUv ).rgb;
  vec3 logRecovery = pow( recovery, gamma );
  vec3 logBoost = gainMapMin * ( 1.0 - logRecovery ) + gainMapMax * logRecovery;
  vec3 hdrColor = (rgb + offsetSdr) * exp2( logBoost * weightFactor ) - offsetHdr;
  vec3 clampedHdrColor = max( HALF_FLOAT_MIN, min( HALF_FLOAT_MAX, hdrColor ));
  gl_FragColor = vec4( clampedHdrColor , 1.0 );
}
`;class Sa extends xt{_maxDisplayBoost;_hdrCapacityMin;_hdrCapacityMax;constructor({gamma:t,offsetHdr:n,offsetSdr:s,gainMapMin:i,gainMapMax:o,maxDisplayBoost:u,hdrCapacityMin:f,hdrCapacityMax:p,sdr:m,gainMap:A}){super({name:"GainMapDecoderMaterial",vertexShader:ya,fragmentShader:_a,uniforms:{sdr:{value:m},gainMap:{value:A},gamma:{value:new ce(1/t[0],1/t[1],1/t[2])},offsetHdr:{value:new ce().fromArray(n)},offsetSdr:{value:new ce().fromArray(s)},gainMapMin:{value:new ce().fromArray(i)},gainMapMax:{value:new ce().fromArray(o)},weightFactor:{value:(Math.log2(u)-f)/(p-f)}},blending:Dn,depthTest:!1,depthWrite:!1}),this._maxDisplayBoost=u,this._hdrCapacityMin=f,this._hdrCapacityMax=p,this.needsUpdate=!0,this.uniformsNeedUpdate=!0}get sdr(){return this.uniforms.sdr.value}set sdr(t){this.uniforms.sdr.value=t}get gainMap(){return this.uniforms.gainMap.value}set gainMap(t){this.uniforms.gainMap.value=t}get offsetHdr(){return this.uniforms.offsetHdr.value.toArray()}set offsetHdr(t){this.uniforms.offsetHdr.value.fromArray(t)}get offsetSdr(){return this.uniforms.offsetSdr.value.toArray()}set offsetSdr(t){this.uniforms.offsetSdr.value.fromArray(t)}get gainMapMin(){return this.uniforms.gainMapMin.value.toArray()}set gainMapMin(t){this.uniforms.gainMapMin.value.fromArray(t)}get gainMapMax(){return this.uniforms.gainMapMax.value.toArray()}set gainMapMax(t){this.uniforms.gainMapMax.value.fromArray(t)}get gamma(){const t=this.uniforms.gamma.value;return[1/t.x,1/t.y,1/t.z]}set gamma(t){const n=this.uniforms.gamma.value;n.x=1/t[0],n.y=1/t[1],n.z=1/t[2]}get hdrCapacityMin(){return this._hdrCapacityMin}set hdrCapacityMin(t){this._hdrCapacityMin=t,this.calculateWeight()}get hdrCapacityMax(){return this._hdrCapacityMax}set hdrCapacityMax(t){this._hdrCapacityMax=t,this.calculateWeight()}get maxDisplayBoost(){return this._maxDisplayBoost}set maxDisplayBoost(t){this._maxDisplayBoost=Math.max(1,Math.min(65504,t)),this.calculateWeight()}calculateWeight(){const t=(Math.log2(this._maxDisplayBoost)-this._hdrCapacityMin)/(this._hdrCapacityMax-this._hdrCapacityMin);this.uniforms.weightFactor.value=Math.max(0,Math.min(1,t))}}class Mr extends wa{constructor(t,n){super({renderer:t,createMaterial:s=>new Sa(s),createQuadRenderer:s=>new kt(s)},n)}async render(t,n,s,i){const{sdrImage:o,gainMapImage:u,needsFlip:f}=await this.processImages(s,i,"flipY"),{gainMap:p,sdr:m}=this.createTextures(o,u,f);this.updateQuadRenderer(t,o,p,m,n),t.render()}}class Pa extends Mr{load([t,n,s],i,o,u){const f=this.prepareQuadRenderer();let p,m,A;const b=async()=>{if(p&&m&&A){try{await this.render(f,A,p,m)}catch(E){this.manager.itemError(t),this.manager.itemError(n),this.manager.itemError(s),typeof u=="function"&&u(E),f.disposeOnDemandRenderer();return}typeof i=="function"&&i(f),this.manager.itemEnd(t),this.manager.itemEnd(n),this.manager.itemEnd(s),f.disposeOnDemandRenderer()}};let M=!0,Y=0,z=0,T=!0,U=0,R=0,Z=!0,$=0,G=0;const L=()=>{if(typeof o=="function"){const E=Y+U+$,k=z+R+G,V=M&&T&&Z;o(new ProgressEvent("progress",{lengthComputable:V,loaded:k,total:E}))}};this.manager.itemStart(t),this.manager.itemStart(n),this.manager.itemStart(s);const B=new ot(this._internalLoadingManager);B.setResponseType("arraybuffer"),B.setRequestHeader(this.requestHeader),B.setPath(this.path),B.setWithCredentials(this.withCredentials),B.load(t,async E=>{if(typeof E=="string")throw new Error("Invalid sdr buffer");p=E,await b()},E=>{M=E.lengthComputable,z=E.loaded,Y=E.total,L()},E=>{this.manager.itemError(t),typeof u=="function"&&u(E)});const X=new ot(this._internalLoadingManager);X.setResponseType("arraybuffer"),X.setRequestHeader(this.requestHeader),X.setPath(this.path),X.setWithCredentials(this.withCredentials),X.load(n,async E=>{if(typeof E=="string")throw new Error("Invalid gainmap buffer");m=E,await b()},E=>{T=E.lengthComputable,R=E.loaded,U=E.total,L()},E=>{this.manager.itemError(n),typeof u=="function"&&u(E)});const x=new ot(this._internalLoadingManager);return x.setRequestHeader(this.requestHeader),x.setPath(this.path),x.setWithCredentials(this.withCredentials),x.load(s,async E=>{if(typeof E!="string")throw new Error("Invalid metadata string");A=JSON.parse(E),await b()},E=>{Z=E.lengthComputable,G=E.loaded,$=E.total,L()},E=>{this.manager.itemError(s),typeof u=="function"&&u(E)}),f}}class Ha extends Mr{load(t,n,s,i){const o=this.prepareQuadRenderer(),u=new ot(this._internalLoadingManager);return u.setResponseType("arraybuffer"),u.setRequestHeader(this.requestHeader),u.setPath(this.path),u.setWithCredentials(this.withCredentials),this.manager.itemStart(t),u.load(t,async f=>{if(typeof f=="string")throw new Error("Invalid buffer, received [string], was expecting [ArrayBuffer]");const p=new Uint8Array(f);let m,A,b;try{const M=await ga(p);m=M.sdr,A=M.gainMap,b=M.metadata}catch(M){if(M instanceof br||M instanceof Er)console.warn(`Failure to reconstruct an HDR image from ${t}: Gain map metadata not found in the file, HDRJPGLoader will render the SDR jpeg`),b={gainMapMin:[0,0,0],gainMapMax:[1,1,1],gamma:[1,1,1],hdrCapacityMin:0,hdrCapacityMax:1,offsetHdr:[0,0,0],offsetSdr:[0,0,0]},m=p;else throw M}try{await this.render(o,b,m.buffer,A?.buffer)}catch(M){this.manager.itemError(t),typeof i=="function"&&i(M),o.disposeOnDemandRenderer();return}typeof n=="function"&&n(o),this.manager.itemEnd(t),o.disposeOnDemandRenderer()},s,f=>{this.manager.itemError(t),typeof i=="function"&&i(f)}),o}}export{za as E,Ra as F,Pa as G,Ha as H,Ma as L,Ln as M,Nn as P,Na as R,Hn as S,Ia as T,fr as U,La as V,Jt as _,ka as a,Sr as b,_r as c,fa as d,ua as e,Oa as f,Ba as g,Ca as h,Fa as i,Bn as j,kn as k,Da as l,Aa as m,Ta as n,Ua as t,mt as u,Et as v};
