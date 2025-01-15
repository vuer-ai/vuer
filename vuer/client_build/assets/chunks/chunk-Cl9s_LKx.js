import{o as nr,r as Ze,j as P,e as l0}from"./chunk-11bBwnOQ.js";import{fE as Xe,E as bl,l as c0}from"./chunk-C5hUn4Av.js";import"./chunk-D7HrI6pR.js";var u0=1e-6,rn=typeof Float32Array<"u"?Float32Array:Array;Math.hypot||(Math.hypot=function(){for(var n=0,e=arguments.length;e--;)n+=arguments[e]*arguments[e];return Math.sqrt(n)});function f0(){var n=new rn(9);return rn!=Float32Array&&(n[1]=0,n[2]=0,n[3]=0,n[5]=0,n[6]=0,n[7]=0),n[0]=1,n[4]=1,n[8]=1,n}function en(){var n=new rn(16);return rn!=Float32Array&&(n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0),n[0]=1,n[5]=1,n[10]=1,n[15]=1,n}function h0(n){var e=new rn(16);return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],e}function td(n,e){return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n}function nd(n,e){var t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],p=e[9],d=e[10],m=e[11],g=e[12],v=e[13],f=e[14],h=e[15],x=t*o-i*a,_=t*l-r*a,y=t*c-s*a,T=i*l-r*o,w=i*c-s*o,A=r*c-s*l,D=u*v-p*g,b=u*f-d*g,M=u*h-m*g,L=p*f-d*v,z=p*h-m*v,O=d*h-m*f,U=x*O-_*z+y*L+T*M-w*b+A*D;return U?(U=1/U,n[0]=(o*O-l*z+c*L)*U,n[1]=(r*z-i*O-s*L)*U,n[2]=(v*A-f*w+h*T)*U,n[3]=(d*w-p*A-m*T)*U,n[4]=(l*M-a*O-c*b)*U,n[5]=(t*O-r*M+s*b)*U,n[6]=(f*y-g*A-h*_)*U,n[7]=(u*A-d*y+m*_)*U,n[8]=(a*z-o*M+c*D)*U,n[9]=(i*M-t*z-s*D)*U,n[10]=(g*w-v*y+h*x)*U,n[11]=(p*y-u*w-m*x)*U,n[12]=(o*b-a*L-l*D)*U,n[13]=(t*L-i*b+r*D)*U,n[14]=(v*_-g*T-f*x)*U,n[15]=(u*T-p*_+d*x)*U,n):null}function id(n,e,t){var i=e[0],r=e[1],s=e[2],a=e[3],o=e[4],l=e[5],c=e[6],u=e[7],p=e[8],d=e[9],m=e[10],g=e[11],v=e[12],f=e[13],h=e[14],x=e[15],_=t[0],y=t[1],T=t[2],w=t[3];return n[0]=_*i+y*o+T*p+w*v,n[1]=_*r+y*l+T*d+w*f,n[2]=_*s+y*c+T*m+w*h,n[3]=_*a+y*u+T*g+w*x,_=t[4],y=t[5],T=t[6],w=t[7],n[4]=_*i+y*o+T*p+w*v,n[5]=_*r+y*l+T*d+w*f,n[6]=_*s+y*c+T*m+w*h,n[7]=_*a+y*u+T*g+w*x,_=t[8],y=t[9],T=t[10],w=t[11],n[8]=_*i+y*o+T*p+w*v,n[9]=_*r+y*l+T*d+w*f,n[10]=_*s+y*c+T*m+w*h,n[11]=_*a+y*u+T*g+w*x,_=t[12],y=t[13],T=t[14],w=t[15],n[12]=_*i+y*o+T*p+w*v,n[13]=_*r+y*l+T*d+w*f,n[14]=_*s+y*c+T*m+w*h,n[15]=_*a+y*u+T*g+w*x,n}function Ts(n,e){return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=e[0],n[13]=e[1],n[14]=e[2],n[15]=1,n}function Os(n,e,t){var i=e[0],r=e[1],s=e[2],a=e[3],o=i+i,l=r+r,c=s+s,u=i*o,p=i*l,d=i*c,m=r*l,g=r*c,v=s*c,f=a*o,h=a*l,x=a*c;return n[0]=1-(m+v),n[1]=p+x,n[2]=d-h,n[3]=0,n[4]=p-x,n[5]=1-(u+v),n[6]=g+f,n[7]=0,n[8]=d+h,n[9]=g-f,n[10]=1-(u+m),n[11]=0,n[12]=t[0],n[13]=t[1],n[14]=t[2],n[15]=1,n}function Rs(n,e){return n[0]=e[12],n[1]=e[13],n[2]=e[14],n}function wl(n,e){var t=e[0],i=e[1],r=e[2],s=e[4],a=e[5],o=e[6],l=e[8],c=e[9],u=e[10];return n[0]=Math.hypot(t,i,r),n[1]=Math.hypot(s,a,o),n[2]=Math.hypot(l,c,u),n}function Ha(n,e){var t=new rn(3);wl(t,e);var i=1/t[0],r=1/t[1],s=1/t[2],a=e[0]*i,o=e[1]*r,l=e[2]*s,c=e[4]*i,u=e[5]*r,p=e[6]*s,d=e[8]*i,m=e[9]*r,g=e[10]*s,v=a+u+g,f=0;return v>0?(f=Math.sqrt(v+1)*2,n[3]=.25*f,n[0]=(p-m)/f,n[1]=(d-l)/f,n[2]=(o-c)/f):a>u&&a>g?(f=Math.sqrt(1+a-u-g)*2,n[3]=(p-m)/f,n[0]=.25*f,n[1]=(o+c)/f,n[2]=(d+l)/f):u>g?(f=Math.sqrt(1+u-a-g)*2,n[3]=(d-l)/f,n[0]=(o+c)/f,n[1]=.25*f,n[2]=(p+m)/f):(f=Math.sqrt(1+g-a-u)*2,n[3]=(o-c)/f,n[0]=(d+l)/f,n[1]=(p+m)/f,n[2]=.25*f),n}function d0(n,e,t,i){var r=e[0],s=e[1],a=e[2],o=e[3],l=r+r,c=s+s,u=a+a,p=r*l,d=r*c,m=r*u,g=s*c,v=s*u,f=a*u,h=o*l,x=o*c,_=o*u,y=i[0],T=i[1],w=i[2];return n[0]=(1-(g+f))*y,n[1]=(d+_)*y,n[2]=(m-x)*y,n[3]=0,n[4]=(d-_)*T,n[5]=(1-(p+f))*T,n[6]=(v+h)*T,n[7]=0,n[8]=(m+x)*w,n[9]=(v-h)*w,n[10]=(1-(p+g))*w,n[11]=0,n[12]=t[0],n[13]=t[1],n[14]=t[2],n[15]=1,n}function p0(n,e,t,i,r){var s=1/Math.tan(e/2),a;return n[0]=s/t,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=s,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[11]=-1,n[12]=0,n[13]=0,n[15]=0,r!=null&&r!==1/0?(a=1/(i-r),n[10]=(r+i)*a,n[14]=2*r*i*a):(n[10]=-1,n[14]=-2*i),n}var Eu=p0;function pn(){var n=new rn(3);return rn!=Float32Array&&(n[0]=0,n[1]=0,n[2]=0),n}function m0(n){var e=n[0],t=n[1],i=n[2];return Math.hypot(e,t,i)}function An(n,e,t){var i=new rn(3);return i[0]=n,i[1]=e,i[2]=t,i}function Uo(n,e){return n[0]=e[0],n[1]=e[1],n[2]=e[2],n}function g0(n,e,t,i){return n[0]=e,n[1]=t,n[2]=i,n}function v0(n,e,t){return n[0]=e[0]+t[0],n[1]=e[1]+t[1],n[2]=e[2]+t[2],n}function rd(n,e){var t=e[0],i=e[1],r=e[2],s=t*t+i*i+r*r;return s>0&&(s=1/Math.sqrt(s)),n[0]=e[0]*s,n[1]=e[1]*s,n[2]=e[2]*s,n}function _0(n,e){return n[0]*e[0]+n[1]*e[1]+n[2]*e[2]}function No(n,e,t){var i=e[0],r=e[1],s=e[2],a=t[0],o=t[1],l=t[2];return n[0]=r*l-s*o,n[1]=s*a-i*l,n[2]=i*o-r*a,n}function Al(n,e,t,i){var r=e[0],s=e[1],a=e[2];return n[0]=r+i*(t[0]-r),n[1]=s+i*(t[1]-s),n[2]=a+i*(t[2]-a),n}function x0(n,e,t){var i=t[0],r=t[1],s=t[2],a=t[3],o=e[0],l=e[1],c=e[2],u=r*c-s*l,p=s*o-i*c,d=i*l-r*o,m=r*d-s*p,g=s*u-i*d,v=i*p-r*u,f=a*2;return u*=f,p*=f,d*=f,m*=2,g*=2,v*=2,n[0]=o+u+m,n[1]=l+p+g,n[2]=c+d+v,n}var y0=m0;(function(){var n=pn();return function(e,t,i,r,s,a){var o,l;for(t||(t=3),i||(i=0),r?l=Math.min(r*t+i,e.length):l=e.length,o=i;o<l;o+=t)n[0]=e[o],n[1]=e[o+1],n[2]=e[o+2],s(n,n,a),e[o]=n[0],e[o+1]=n[1],e[o+2]=n[2];return e}})();function M0(){var n=new rn(4);return rn!=Float32Array&&(n[0]=0,n[1]=0,n[2]=0,n[3]=0),n}function S0(n,e,t,i){var r=new rn(4);return r[0]=n,r[1]=e,r[2]=t,r[3]=i,r}function E0(n,e){return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n}function b0(n,e,t,i,r){return n[0]=e,n[1]=t,n[2]=i,n[3]=r,n}function w0(n,e){var t=e[0],i=e[1],r=e[2],s=e[3],a=t*t+i*i+r*r+s*s;return a>0&&(a=1/Math.sqrt(a)),n[0]=t*a,n[1]=i*a,n[2]=r*a,n[3]=s*a,n}(function(){var n=M0();return function(e,t,i,r,s,a){var o,l;for(t||(t=4),i||(i=0),r?l=Math.min(r*t+i,e.length):l=e.length,o=i;o<l;o+=t)n[0]=e[o],n[1]=e[o+1],n[2]=e[o+2],n[3]=e[o+3],s(n,n,a),e[o]=n[0],e[o+1]=n[1],e[o+2]=n[2],e[o+3]=n[3];return e}})();function Rn(){var n=new rn(4);return rn!=Float32Array&&(n[0]=0,n[1]=0,n[2]=0),n[3]=1,n}function sd(n,e,t){t=t*.5;var i=Math.sin(t);return n[0]=i*e[0],n[1]=i*e[1],n[2]=i*e[2],n[3]=Math.cos(t),n}function A0(n,e,t){var i=e[0],r=e[1],s=e[2],a=e[3],o=t[0],l=t[1],c=t[2],u=t[3];return n[0]=i*u+a*o+r*c-s*l,n[1]=r*u+a*l+s*o-i*c,n[2]=s*u+a*c+i*l-r*o,n[3]=a*u-i*o-r*l-s*c,n}function Ms(n,e,t,i){var r=e[0],s=e[1],a=e[2],o=e[3],l=t[0],c=t[1],u=t[2],p=t[3],d,m,g,v,f;return m=r*l+s*c+a*u+o*p,m<0&&(m=-m,l=-l,c=-c,u=-u,p=-p),1-m>u0?(d=Math.acos(m),g=Math.sin(d),v=Math.sin((1-i)*d)/g,f=Math.sin(i*d)/g):(v=1-i,f=i),n[0]=v*r+f*l,n[1]=v*s+f*c,n[2]=v*a+f*u,n[3]=v*o+f*p,n}function T0(n,e){return n[0]=-e[0],n[1]=-e[1],n[2]=-e[2],n[3]=e[3],n}function R0(n,e){var t=e[0]+e[4]+e[8],i;if(t>0)i=Math.sqrt(t+1),n[3]=.5*i,i=.5/i,n[0]=(e[5]-e[7])*i,n[1]=(e[6]-e[2])*i,n[2]=(e[1]-e[3])*i;else{var r=0;e[4]>e[0]&&(r=1),e[8]>e[r*3+r]&&(r=2);var s=(r+1)%3,a=(r+2)%3;i=Math.sqrt(e[r*3+r]-e[s*3+s]-e[a*3+a]+1),n[r]=.5*i,i=.5/i,n[3]=(e[s*3+a]-e[a*3+s])*i,n[s]=(e[s*3+r]+e[r*3+s])*i,n[a]=(e[a*3+r]+e[r*3+a])*i}return n}var Ga=S0,Fo=E0,bu=b0,co=w0;(function(){var n=pn(),e=An(1,0,0),t=An(0,1,0);return function(i,r,s){var a=_0(r,s);return a<-.999999?(No(n,e,r),y0(n)<1e-6&&No(n,t,r),rd(n,n),sd(i,n,Math.PI),i):a>.999999?(i[0]=0,i[1]=0,i[2]=0,i[3]=1,i):(No(n,r,s),i[0]=n[0],i[1]=n[1],i[2]=n[2],i[3]=1+a,co(i,i))}})();(function(){var n=Rn(),e=Rn();return function(t,i,r,s,a,o){return Ms(n,i,a,o),Ms(e,r,s,o),Ms(t,n,e,2*o*(1-o)),t}})();(function(){var n=f0();return function(e,t,i,r){return n[0]=i[0],n[3]=i[1],n[6]=i[2],n[1]=r[0],n[4]=r[1],n[7]=r[2],n[2]=-t[0],n[5]=-t[1],n[8]=-t[2],co(e,R0(e,n))}})();const Pt=Symbol("@immersive-web-emulation-runtime/xr-space");class qt extends EventTarget{constructor(e,t){super(),this[Pt]={parentSpace:e,offsetMatrix:t?h0(t):en(),emulated:!0}}}class C0 extends qt{constructor(){super(void 0,en())}}class Wa{static updateOffsetPosition(e,t){const i=e[Pt].offsetMatrix;Ts(i,t)}static updateOffsetQuaternion(e,t){const i=e[Pt].offsetMatrix,r=pn();Rs(r,i),Os(i,t,r)}static updateOffsetMatrix(e,t){const i=e[Pt].offsetMatrix;td(i,t)}static calculateGlobalOffsetMatrix(e,t=en()){const i=e[Pt].parentSpace?Wa.calculateGlobalOffsetMatrix(e[Pt].parentSpace):en();return id(t,i,e[Pt].offsetMatrix),t}}let Zi=class ad{constructor(e=0,t=0,i=0){this.vec3=An(e,t,i),this.tempVec3=pn()}get x(){return this.vec3[0]}set x(e){this.vec3[0]=e}get y(){return this.vec3[1]}set y(e){this.vec3[1]=e}get z(){return this.vec3[2]}set z(e){this.vec3[2]=e}set(e,t,i){return g0(this.vec3,e,t,i),this}clone(){return new ad(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}normalize(){return Uo(this.tempVec3,this.vec3),rd(this.vec3,this.tempVec3),this}add(e){return Uo(this.tempVec3,this.vec3),v0(this.vec3,this.tempVec3,e.vec3),this}applyQuaternion(e){return Uo(this.tempVec3,this.vec3),x0(this.vec3,this.tempVec3,e.quat),this}},Ss=class od{constructor(e=0,t=0,i=0,r=1){this.quat=Ga(e,t,i,r),this.tempQuat=Rn()}get x(){return this.quat[0]}set x(e){this.quat[0]=e}get y(){return this.quat[1]}set y(e){this.quat[1]=e}get z(){return this.quat[2]}set z(e){this.quat[2]=e}get w(){return this.quat[3]}set w(e){this.quat[3]=e}set(e,t,i,r){return bu(this.quat,e,t,i,r),this}clone(){return new od(this.x,this.y,this.z,this.w)}copy(e){return bu(this.quat,e.x,e.y,e.z,e.w),this}normalize(){return Fo(this.tempQuat,this.quat),co(this.quat,this.tempQuat),this}invert(){return Fo(this.tempQuat,this.quat),T0(this.quat,this.tempQuat),this}multiply(e){return Fo(this.tempQuat,this.quat),A0(this.quat,this.tempQuat,e.quat),this}setFromAxisAngle(e,t){return sd(this.quat,e.vec3,t),this}};const Se=Symbol("@immersive-web-emulation-runtime/gamepad");var Cs;(function(n){n.None="",n.Standard="standard",n.XRStandard="xr-standard"})(Cs||(Cs={}));class ld{constructor(e,t){this[Se]={type:e,eventTrigger:t,pressed:!1,touched:!1,value:0,lastFrameValue:0,pendingValue:null}}get pressed(){return this[Se].type==="manual"?this[Se].pressed:this[Se].value>0}get touched(){return this[Se].type==="manual"?this[Se].touched:this[Se].touched||this.pressed}get value(){return this[Se].value}}class P0{constructor(){this.pressed=!1,this.touched=!1,this.value=0}}class Uc{constructor(e,t="",i=-1){this[Se]={id:t,index:i,connected:!1,timestamp:performance.now(),mapping:e.mapping,buttonsMap:{},buttonsSequence:[],axesMap:{},axesSequence:[],hapticActuators:[]},e.buttons.forEach(r=>{var s;r===null?this[Se].buttonsSequence.push(null):(this[Se].buttonsSequence.push(r.id),this[Se].buttonsMap[r.id]=new ld(r.type,(s=r.eventTrigger)!==null&&s!==void 0?s:null))}),e.axes.forEach(r=>{r===null?this[Se].axesSequence.push(null):(this[Se].axesSequence.push(r.id+r.type),this[Se].axesMap[r.id]||(this[Se].axesMap[r.id]={x:0,y:0}))})}get id(){return this[Se].id}get index(){return this[Se].index}get connected(){return this[Se].connected}get timestamp(){return this[Se].timestamp}get mapping(){return this[Se].mapping}get axes(){const e=[];return this[Se].axesSequence.forEach(t=>{if(t===null)e.push(null);else{const i=t.substring(0,t.length-6),r=t.substring(t.length-6);e.push(r==="y-axis"?this[Se].axesMap[i].y:this[Se].axesMap[i].x)}}),e}get buttons(){return this[Se].buttonsSequence.map(e=>e===null?new P0:this[Se].buttonsMap[e])}get hapticActuators(){return this[Se].hapticActuators}get vibrationActuator(){return null}}var fn;(function(n){n.None="none",n.Left="left",n.Right="right"})(fn||(fn={}));var Xa;(function(n){n.Gaze="gaze",n.TrackedPointer="tracked-pointer",n.Screen="screen",n.TransientPointer="transient-pointer"})(Xa||(Xa={}));class L0 extends Array{}const oi=Symbol("@immersive-web-emulation-runtime/xr-input-source");class uo{constructor(e,t,i,r,s,a,o){this[oi]={handedness:e,targetRayMode:t,targetRaySpace:r,gripSpace:a,profiles:i,gamepad:s,hand:o}}get handedness(){return this[oi].handedness}get targetRayMode(){return this[oi].targetRayMode}get targetRaySpace(){return this[oi].targetRaySpace}get gripSpace(){return this[oi].gripSpace}get profiles(){return this[oi].profiles}get gamepad(){return this[oi].gamepad}get hand(){return this[oi].hand}}class Ta extends Event{constructor(e,t){if(super(e,t),!t.frame)throw new Error("XRInputSourceEventInit.frame is required");if(!t.inputSource)throw new Error("XRInputSourceEventInit.inputSource is required");this.frame=t.frame,this.inputSource=t.inputSource}}const vt=Symbol("@immersive-web-emulation-runtime/xr-tracked-input"),wu={[fn.Left]:{position:new Zi(-.25,1.5,-.4),quaternion:new Ss},[fn.Right]:{position:new Zi(.25,1.5,-.4),quaternion:new Ss},[fn.None]:{position:new Zi(.25,1.5,-.4),quaternion:new Ss}};class cd{constructor(e){this[vt]={inputSource:e,position:wu[e.handedness].position.clone(),quaternion:wu[e.handedness].quaternion.clone(),connected:!0,lastFrameConnected:!1,inputSourceChanged:!0}}get position(){return this[vt].position}get quaternion(){return this[vt].quaternion}get inputSource(){return this[vt].inputSource}get connected(){return this[vt].connected}set connected(e){this[vt].connected=e,this[vt].inputSource.gamepad[Se].connected=e}onFrameStart(e){const t=this[vt].inputSource.targetRaySpace;Os(t[Pt].offsetMatrix,this[vt].quaternion.quat,this[vt].position.vec3);const i=e.session;this[vt].inputSource.gamepad.buttons.forEach(r=>{r instanceof ld&&(r[Se].lastFrameValue=r[Se].value,r[Se].pendingValue!=null&&(r[Se].value=r[Se].pendingValue,r[Se].pendingValue=null),r[Se].eventTrigger!=null&&(r[Se].lastFrameValue===0&&r[Se].value>0?(i.dispatchEvent(new Ta(r[Se].eventTrigger,{frame:e,inputSource:this[vt].inputSource})),i.dispatchEvent(new Ta(r[Se].eventTrigger+"start",{frame:e,inputSource:this[vt].inputSource}))):r[Se].lastFrameValue>0&&r[Se].value===0&&i.dispatchEvent(new Ta(r[Se].eventTrigger+"end",{frame:e,inputSource:this[vt].inputSource}))))}),this[vt].inputSourceChanged=this.connected!==this[vt].lastFrameConnected,this[vt].lastFrameConnected=this.connected}}const Au=Symbol("@immersive-web-emulation-runtime/xr-controller");class I0 extends cd{constructor(e,t,i){if(!e.layout[t])throw new DOMException("Handedness not supported","InvalidStateError");const r=new qt(i),s=e.layout[t].gripOffsetMatrix?new qt(r,e.layout[t].gripOffsetMatrix):void 0,a=[e.profileId,...e.fallbackProfileIds],o=new uo(t,Xa.TrackedPointer,a,r,new Uc(e.layout[t].gamepad),s);super(o),this[Au]={gamepadConfig:e.layout[t].gamepad}}get gamepadConfig(){return this[Au].gamepadConfig}updateButtonValue(e,t){if(t>1||t<0){console.warn(`Out-of-range value ${t} provided for button ${e}.`);return}const i=this[vt].inputSource.gamepad[Se].buttonsMap[e];if(i){if(i[Se].type==="binary"&&t!=1&&t!=0){console.warn(`Non-binary value ${t} provided for binary button ${e}.`);return}i[Se].pendingValue=t}else console.warn(`Current controller does not have button ${e}.`)}updateButtonTouch(e,t){const i=this[vt].inputSource.gamepad[Se].buttonsMap[e];i?i[Se].touched=t:console.warn(`Current controller does not have button ${e}.`)}updateAxis(e,t,i){if(i>1||i<-1){console.warn(`Out-of-range value ${i} provided for ${e} axes.`);return}const r=this[vt].inputSource.gamepad[Se].axesMap[e];r?t==="x-axis"?r.x=i:t==="y-axis"&&(r.y=i):console.warn(`Current controller does not have ${e} axes.`)}updateAxes(e,t,i){if(t>1||t<-1||i>1||i<-1){console.warn(`Out-of-range value x:${t}, y:${i} provided for ${e} axes.`);return}const r=this[vt].inputSource.gamepad[Se].axesMap[e];r?(r.x=t,r.y=i):console.warn(`Current controller does not have ${e} axes.`)}}const zi=Symbol("@immersive-web-emulation-runtime/xr-view");var ft;(function(n){n.None="none",n.Left="left",n.Right="right"})(ft||(ft={}));class ud{constructor(e,t,i,r){this[zi]={eye:e,projectionMatrix:t,transform:i,recommendedViewportScale:null,requestedViewportScale:1,session:r}}get eye(){return this[zi].eye}get projectionMatrix(){return this[zi].projectionMatrix}get transform(){return this[zi].transform}get recommendedViewportScale(){return this[zi].recommendedViewportScale}requestViewportScale(e){if(e===null||e<=0||e>1){console.warn("Invalid scale value. Scale must be > 0 and <= 1.");return}this[zi].requestedViewportScale=e}}const Ki=Symbol("@immersive-web-emulation-runtime/xr-joint-space");class Nc extends qt{constructor(e,t,i){super(t,i),this[Ki]={jointName:e,radius:0}}get jointName(){return this[Ki].jointName}}const ns=Symbol("@immersive-web-emulation-runtime/xr-pose");class fo{constructor(e,t=!1,i=void 0,r=void 0){this[ns]={transform:e,emulatedPosition:t,linearVelocity:i,angularVelocity:r}}get transform(){return this[ns].transform}get emulatedPosition(){return this[ns].emulatedPosition}get linearVelocity(){return this[ns].linearVelocity}get angularVelocity(){return this[ns].angularVelocity}}const Tu=Symbol("@immersive-web-emulation-runtime/xr-joint-pose");class fd extends fo{constructor(e,t,i=!1,r=void 0,s=void 0){super(e,i,r,s),this[Tu]={radius:t}}get radius(){return this[Tu].radius}}class qa{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r,Object.freeze(this)}static fromPoint(e){return new qa(e.x,e.y,e.z,e.w)}matrixTransform(e){return new qa}toJSON(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const $s=typeof globalThis.DOMPointReadOnly<"u"?globalThis.DOMPointReadOnly:qa,on=Symbol("@immersive-web-emulation-runtime/xr-rigid-transform");class ho{constructor(e,t){const i=An(0,0,0),r=Rn();this[on]={matrix:en(),position:e?An(e.x,e.y,e.z):i,orientation:t?co(Rn(),Ga(t.x,t.y,t.z,t.w)):r,inverse:null},this.updateMatrix()}updateMatrix(){Os(this[on].matrix,this[on].orientation,this[on].position)}get matrix(){return this[on].matrix}get position(){const e=this[on].position;return new $s(e[0],e[1],e[2],1)}get orientation(){const e=this[on].orientation;return new $s(e[0],e[1],e[2],e[3])}get inverse(){if(!this[on].inverse){const e=en();if(!nd(e,this[on].matrix))throw new Error("Matrix is not invertible.");let t=pn();Rs(t,e);let i=Rn();Ha(i,e),this[on].inverse=new ho(new $s(t[0],t[1],t[2],1),new $s(i[0],i[1],i[2],i[3])),this[on].inverse[on].inverse=this}return this[on].inverse}}const Ru=Symbol("@immersive-web-emulation-runtime/xr-viewer-pose");class hd extends fo{constructor(e,t,i=!1,r=void 0,s=void 0){super(e,i,r,s),this[Ru]={views:Object.freeze(t)}}get views(){return this[Ru].views}}const Kt=Symbol("@immersive-web-emulation-runtime/xr-frame"),Cu=en(),Pu=en(),Lu=en(),Iu=(n,e,t)=>{Wa.calculateGlobalOffsetMatrix(e,Cu),Wa.calculateGlobalOffsetMatrix(t,Pu),nd(Lu,Pu),id(n,Lu,Cu)};class dd{constructor(e,t,i,r,s){this[Kt]={session:e,id:t,active:i,animationFrame:r,predictedDisplayTime:s,tempMat4:en()}}get session(){return this[Kt].session}get predictedDisplayTime(){return this[Kt].predictedDisplayTime}getPose(e,t){if(!this[Kt].active)throw new DOMException("XRFrame access outside the callback that produced it is invalid.","InvalidStateError");Iu(this[Kt].tempMat4,e,t);const i=pn();Rs(i,this[Kt].tempMat4);const r=Rn();return Ha(r,this[Kt].tempMat4),new fo(new ho({x:i[0],y:i[1],z:i[2],w:1},{x:r[0],y:r[1],z:r[2],w:r[3]}),e[Pt].emulated)}getViewerPose(e){if(!this[Kt].animationFrame)throw new DOMException("getViewerPose can only be called on XRFrame objects passed to XRSession.requestAnimationFrame callbacks.","InvalidStateError");const t=this[Kt].session,i=t[q].device,r=this.getPose(i.viewerSpace,e),s=t[q].mode===st.Inline?[ft.None]:[ft.Left,ft.Right],a=[];return s.forEach(o=>{const l=i.viewSpaces[o],c=this.getPose(l,e),u=t[q].getProjectionMatrix(o),p=new ud(o,new Float32Array(u),c.transform,t);a.push(p)}),new hd(r.transform,a,!1)}getJointPose(e,t){const i=this.getPose(e,t),r=e[Ki].radius;return new fd(i.transform,r,!1)}fillJointRadii(e,t){if(e=Array.from(e),!this[Kt].active)throw new DOMException("XRFrame access outside the callback that produced it is invalid.","InvalidStateError");if(e.length>t.length)throw new DOMException("The length of jointSpaces is larger than the number of elements in radii","TypeError");let i=!0;for(let r=0;r<e.length;r++)e[r][Ki].radius?t[r]=e[r][Ki].radius:(t[r]=NaN,i=!1);return i}fillPoses(e,t,i){if(e=Array.from(e),!this[Kt].active)throw new DOMException("XRFrame access outside the callback that produced it is invalid.","InvalidStateError");if(e.length*16>i.length)throw new DOMException("The length of spaces multiplied by 16 is larger than the number of elements in transforms","TypeError");return e.forEach((r,s)=>{Iu(this[Kt].tempMat4,r,t);for(let a=0;a<16;a++)i[s*16+a]=this[Kt].tempMat4[a]}),!0}}class pd extends Event{constructor(e,t){if(super(e,t),!t.session)throw new Error("XRInputSourcesChangeEventInit.session is required");if(!t.added)throw new Error("XRInputSourcesChangeEventInit.added is required");if(!t.removed)throw new Error("XRInputSourcesChangeEventInit.removed is required");this.session=t.session,this.added=t.added,this.removed=t.removed}}var md;const yi=Symbol("@immersive-web-emulation-runtime/xr-reference-space");var Ut;(function(n){n.Viewer="viewer",n.Local="local",n.LocalFloor="local-floor",n.BoundedFloor="bounded-floor",n.Unbounded="unbounded"})(Ut||(Ut={}));class ir extends qt{constructor(e,t,i){super(t,i),this[md]={type:null,onreset:()=>{}},this[yi].type=e}get onreset(){var e;return(e=this[yi].onreset)!==null&&e!==void 0?e:()=>{}}set onreset(e){this[yi].onreset&&this.removeEventListener("reset",this[yi].onreset),this[yi].onreset=e,e&&this.addEventListener("reset",e)}getOffsetReferenceSpace(e){return new ir(this[yi].type,this,e)}}md=yi;const is=Symbol("@immersive-web-emulation-runtime/xr-render-state");class Tl{constructor(e={},t){this[is]={depthNear:e.depthNear||(t==null?void 0:t.depthNear)||.1,depthFar:e.depthFar||(t==null?void 0:t.depthFar)||1e3,inlineVerticalFieldOfView:e.inlineVerticalFieldOfView||(t==null?void 0:t.inlineVerticalFieldOfView)||null,baseLayer:e.baseLayer||(t==null?void 0:t.baseLayer)||null}}get depthNear(){return this[is].depthNear}get depthFar(){return this[is].depthFar}get inlineVerticalFieldOfView(){return this[is].inlineVerticalFieldOfView}get baseLayer(){return this[is].baseLayer}}class ja extends Event{constructor(e,t){if(super(e,t),!t.session)throw new Error("XRSessionEventInit.session is required");this.session=t.session}}class gd extends EventTarget{}const vi=Symbol("@immersive-web-emulation-runtime/XRWebGLLayer"),D0={antialias:!0,depth:!0,stencil:!1,alpha:!0,ignoreDepthValues:!1,framebufferScaleFactor:1};let U0=class extends gd{constructor(e,t,i={}){if(super(),e[q].ended)throw new DOMException("Session has ended","InvalidStateError");const r={...D0,...i};this[vi]={session:e,context:t,antialias:r.antialias}}get context(){return this[vi].context}get antialias(){return this[vi].antialias}get ignoreDepthValues(){return!0}get framebuffer(){return null}get framebufferWidth(){return this[vi].context.drawingBufferWidth}get framebufferHeight(){return this[vi].context.drawingBufferHeight}getViewport(e){if(e[zi].session!==this[vi].session)throw new DOMException("View's session differs from Layer's session","InvalidStateError");return this[vi].session[q].device[se].getViewport(this,e)}static getNativeFramebufferScaleFactor(e){if(!(e instanceof Fc))throw new TypeError("getNativeFramebufferScaleFactor must be passed a session.");return e[q].ended?0:1}};var Tr;(function(n){n.Visible="visible",n.VisibleBlurred="visible-blurred",n.Hidden="hidden"})(Tr||(Tr={}));var st;(function(n){n.Inline="inline",n.ImmersiveVR="immersive-vr",n.ImmersiveAR="immersive-ar"})(st||(st={}));var Pn;(function(n){n.Opaque="opaque",n.AlphaBlend="alpha-blend",n.Additive="additive"})(Pn||(Pn={}));var kr;(function(n){n.ScreenSpace="screen-space",n.WorldSpace="world-space"})(kr||(kr={}));const q=Symbol("@immersive-web-emulation-runtime/xr-session");class Fc extends EventTarget{constructor(e,t,i){super(),this[q]={device:e,mode:t,renderState:new Tl,pendingRenderState:null,enabledFeatures:i,isSystemKeyboardSupported:!1,ended:!1,projectionMatrices:{[ft.Left]:en(),[ft.Right]:en(),[ft.None]:en()},getProjectionMatrix:r=>this[q].projectionMatrices[r],referenceSpaceIsSupported:r=>{if(!this[q].enabledFeatures.includes(r))return!1;switch(r){case Ut.Viewer:return!0;case Ut.Local:case Ut.LocalFloor:case Ut.BoundedFloor:case Ut.Unbounded:return this[q].mode!=st.Inline}},frameHandle:0,frameCallbacks:[],currentFrameCallbacks:null,onDeviceFrame:()=>{if(this[q].ended)return;this[q].deviceFrameHandle=globalThis.requestAnimationFrame(this[q].onDeviceFrame),this[q].pendingRenderState!=null&&(this[q].renderState=this[q].pendingRenderState,this[q].pendingRenderState=null,this[q].device[se].onBaseLayerSet(this[q].renderState.baseLayer));const r=this[q].renderState.baseLayer;if(r===null)return;const s=r.context,a=s.canvas;if(this[q].mode!=st.Inline){const g=s.getParameter(s.COLOR_CLEAR_VALUE),v=s.getParameter(s.DEPTH_CLEAR_VALUE),f=s.getParameter(s.STENCIL_CLEAR_VALUE);s.clearColor(0,0,0,0),s.clearDepth(1),s.clearStencil(0),s.clear(s.DEPTH_BUFFER_BIT|s.COLOR_BUFFER_BIT|s.STENCIL_BUFFER_BIT),s.clearColor(g[0],g[1],g[2],g[3]),s.clearDepth(v),s.clearStencil(f)}const{depthNear:o,depthFar:l}=this[q].renderState,{width:c,height:u}=a;if(this[q].mode!==st.Inline){const g=c*(this[q].device.stereoEnabled?.5:1)/u;Eu(this[q].projectionMatrices[ft.Left],this[q].device.fovy,g,o,l),td(this[q].projectionMatrices[ft.Right],this[q].projectionMatrices[ft.Left])}else{const g=c/u;Eu(this[q].projectionMatrices[ft.None],this[q].renderState.inlineVerticalFieldOfView,g,o,l)}const p=new dd(this,this[q].frameHandle,!0,!0,performance.now());this[q].device[se].onFrameStart(p),this[q].updateActiveInputSources();const d=this[q].currentFrameCallbacks=this[q].frameCallbacks;this[q].frameCallbacks=[];const m=performance.now();for(let g=0;g<d.length;g++)try{d[g].cancelled||d[g].callback(m,p)}catch(v){console.error(v)}this[q].currentFrameCallbacks=null,p[Kt].active=!1},nominalFrameRate:e.internalNominalFrameRate,referenceSpaces:[],inputSourceArray:[],activeInputSources:[],updateActiveInputSources:()=>{const r=this[q].enabledFeatures.includes(Ne.HandTracking),s=this[q].activeInputSources,a=this[q].device.inputSources.filter(c=>!c.hand||r),o=a.filter(c=>!s.includes(c)),l=s.filter(c=>!a.includes(c));this[q].activeInputSources=a,(o.length>0||l.length>0)&&this.dispatchEvent(new pd("inputsourceschange",{session:this,added:o,removed:l}))},onend:null,oninputsourceschange:null,onselect:null,onselectstart:null,onselectend:null,onsqueeze:null,onsqueezestart:null,onsqueezeend:null,onvisibilitychange:null,onframeratechange:null},this[q].onDeviceFrame()}get visibilityState(){return this[q].device.visibilityState}get frameRate(){return this[q].nominalFrameRate}get supportedFrameRates(){return new Float32Array(this[q].device.supportedFrameRates)}get renderState(){return this[q].renderState}get inputSources(){return this[q].inputSourceArray.length=0,!this[q].ended&&this[q].mode!==st.Inline&&this[q].inputSourceArray.push(...this[q].activeInputSources),this[q].inputSourceArray}get enabledFeatures(){return this[q].enabledFeatures}get isSystemKeyboardSupported(){return this[q].isSystemKeyboardSupported}get environmentBlendMode(){var e;return(e=this[q].device[se].environmentBlendModes[this[q].mode])!==null&&e!==void 0?e:Pn.Opaque}get interactionMode(){return this[q].device[se].interactionMode}updateRenderState(e={}){var t,i,r,s;if(this[q].ended)throw new DOMException("XRSession has already ended.","InvalidStateError");if(e.baseLayer&&e.baseLayer[vi].session!==this)throw new DOMException("Base layer was created by a different XRSession","InvalidStateError");if(e.inlineVerticalFieldOfView!=null&&this[q].mode!==st.Inline)throw new DOMException("InlineVerticalFieldOfView must not be set for an immersive session","InvalidStateError");const a={baseLayer:e.baseLayer||((t=this[q].pendingRenderState)===null||t===void 0?void 0:t.baseLayer)||void 0,depthFar:e.depthFar||((i=this[q].pendingRenderState)===null||i===void 0?void 0:i.depthFar)||void 0,depthNear:e.depthNear||((r=this[q].pendingRenderState)===null||r===void 0?void 0:r.depthNear)||void 0,inlineVerticalFieldOfView:e.inlineVerticalFieldOfView||((s=this[q].pendingRenderState)===null||s===void 0?void 0:s.inlineVerticalFieldOfView)||void 0};this[q].pendingRenderState=new Tl(a,this[q].renderState)}async updateTargetFrameRate(e){return new Promise((t,i)=>{this[q].ended?i(new DOMException("XRSession has already ended.","InvalidStateError")):this[q].device.supportedFrameRates.includes(e)?(this[q].nominalFrameRate===e?console.log("Requested frame rate is the same as the current nominal frame rate, no update made"):(this[q].nominalFrameRate=e,this.dispatchEvent(new ja("frameratechange",{session:this})),console.log(`Nominal frame rate updated to ${e}`)),t()):i(new DOMException("Requested frame rate not supported.","InvalidStateError"))})}async requestReferenceSpace(e){return new Promise((t,i)=>{if(this[q].ended||!this[q].referenceSpaceIsSupported(e)){i(new DOMException("The requested reference space type is not supported.","NotSupportedError"));return}let r;switch(e){case Ut.Viewer:r=this[q].device.viewerSpace;break;case Ut.Local:r=new ir(e,this[q].device[se].globalSpace,this[q].device.viewerSpace[Pt].offsetMatrix);break;case Ut.LocalFloor:case Ut.BoundedFloor:case Ut.Unbounded:r=new ir(e,this[q].device[se].globalSpace);break}this[q].referenceSpaces.push(r),t(r)})}requestAnimationFrame(e){if(this[q].ended)return 0;const t=++this[q].frameHandle;return this[q].frameCallbacks.push({handle:t,callback:e,cancelled:!1}),t}cancelAnimationFrame(e){let t=this[q].frameCallbacks,i=t.findIndex(r=>r&&r.handle===e);i>-1&&(t[i].cancelled=!0,t.splice(i,1)),t=this[q].currentFrameCallbacks,t&&(i=t.findIndex(r=>r&&r.handle===e),i>-1&&(t[i].cancelled=!0))}async end(){return new Promise((e,t)=>{this[q].ended||this[q].deviceFrameHandle===null?t(new DOMException("XRSession has already ended.","InvalidStateError")):(globalThis.cancelAnimationFrame(this[q].deviceFrameHandle),this[q].device[se].onSessionEnd(),this.dispatchEvent(new ja("end",{session:this})),e())})}get onend(){var e;return(e=this[q].onend)!==null&&e!==void 0?e:()=>{}}set onend(e){this[q].onend&&this.removeEventListener("end",this[q].onend),this[q].onend=e,e&&this.addEventListener("end",e)}get oninputsourceschange(){var e;return(e=this[q].oninputsourceschange)!==null&&e!==void 0?e:()=>{}}set oninputsourceschange(e){this[q].oninputsourceschange&&this.removeEventListener("inputsourceschange",this[q].oninputsourceschange),this[q].oninputsourceschange=e,e&&this.addEventListener("inputsourceschange",e)}get onselect(){var e;return(e=this[q].onselect)!==null&&e!==void 0?e:()=>{}}set onselect(e){this[q].onselect&&this.removeEventListener("select",this[q].onselect),this[q].onselect=e,e&&this.addEventListener("select",e)}get onselectstart(){var e;return(e=this[q].onselectstart)!==null&&e!==void 0?e:()=>{}}set onselectstart(e){this[q].onselectstart&&this.removeEventListener("selectstart",this[q].onselectstart),this[q].onselectstart=e,e&&this.addEventListener("selectstart",e)}get onselectend(){var e;return(e=this[q].onselectend)!==null&&e!==void 0?e:()=>{}}set onselectend(e){this[q].onselectend&&this.removeEventListener("selectend",this[q].onselectend),this[q].onselectend=e,e&&this.addEventListener("selectend",e)}get onsqueeze(){var e;return(e=this[q].onsqueeze)!==null&&e!==void 0?e:()=>{}}set onsqueeze(e){this[q].onsqueeze&&this.removeEventListener("squeeze",this[q].onsqueeze),this[q].onsqueeze=e,e&&this.addEventListener("squeeze",e)}get onsqueezestart(){var e;return(e=this[q].onsqueezestart)!==null&&e!==void 0?e:()=>{}}set onsqueezestart(e){this[q].onsqueezestart&&this.removeEventListener("squeezestart",this[q].onsqueezestart),this[q].onsqueezestart=e,e&&this.addEventListener("squeezestart",e)}get onsqueezeend(){var e;return(e=this[q].onsqueezeend)!==null&&e!==void 0?e:()=>{}}set onsqueezeend(e){this[q].onsqueezeend&&this.removeEventListener("squeezeend",this[q].onsqueezeend),this[q].onsqueezeend=e,e&&this.addEventListener("squeezeend",e)}get onvisibilitychange(){var e;return(e=this[q].onvisibilitychange)!==null&&e!==void 0?e:()=>{}}set onvisibilitychange(e){this[q].onvisibilitychange&&this.removeEventListener("visibilitychange",this[q].onvisibilitychange),this[q].onvisibilitychange=e,e&&this.addEventListener("visibilitychange",e)}get onframeratechange(){var e;return(e=this[q].onframeratechange)!==null&&e!==void 0?e:()=>{}}set onframeratechange(e){this[q].onframeratechange&&this.removeEventListener("frameratechange",this[q].onframeratechange),this[q].onframeratechange=e,e&&this.addEventListener("frameratechange",e)}}var Ps;(function(n){n.Wrist="wrist",n.ThumbMetacarpal="thumb-metacarpal",n.ThumbPhalanxProximal="thumb-phalanx-proximal",n.ThumbPhalanxDistal="thumb-phalanx-distal",n.ThumbTip="thumb-tip",n.IndexFingerMetacarpal="index-finger-metacarpal",n.IndexFingerPhalanxProximal="index-finger-phalanx-proximal",n.IndexFingerPhalanxIntermediate="index-finger-phalanx-intermediate",n.IndexFingerPhalanxDistal="index-finger-phalanx-distal",n.IndexFingerTip="index-finger-tip",n.MiddleFingerMetacarpal="middle-finger-metacarpal",n.MiddleFingerPhalanxProximal="middle-finger-phalanx-proximal",n.MiddleFingerPhalanxIntermediate="middle-finger-phalanx-intermediate",n.MiddleFingerPhalanxDistal="middle-finger-phalanx-distal",n.MiddleFingerTip="middle-finger-tip",n.RingFingerMetacarpal="ring-finger-metacarpal",n.RingFingerPhalanxProximal="ring-finger-phalanx-proximal",n.RingFingerPhalanxIntermediate="ring-finger-phalanx-intermediate",n.RingFingerPhalanxDistal="ring-finger-phalanx-distal",n.RingFingerTip="ring-finger-tip",n.PinkyFingerMetacarpal="pinky-finger-metacarpal",n.PinkyFingerPhalanxProximal="pinky-finger-phalanx-proximal",n.PinkyFingerPhalanxIntermediate="pinky-finger-phalanx-intermediate",n.PinkyFingerPhalanxDistal="pinky-finger-phalanx-distal",n.PinkyFingerTip="pinky-finger-tip"})(Ps||(Ps={}));class Oc extends Map{}const N0={jointTransforms:{wrist:{offsetMatrix:[.9060805439949036,-.1844543218612671,.3807799518108368,0,-.08027800172567368,.8086723685264587,.5827555656433105,0,-.4154181182384491,-.5585917234420776,.7179155349731445,0,-.06867414712905884,-.009423808194696903,.10627774149179459,1],radius:.021460847929120064},"thumb-metacarpal":{offsetMatrix:[-.5012241005897522,-.8650535345077515,-.0213695727288723,0,.7415963411331177,-.4421543478965759,.5045139193534851,0,-.44587990641593933,.23702676594257355,.8631392121315002,0,-.032122574746608734,-.01196830440312624,.07194234430789948,1],radius:.019382517784833908},"thumb-phalanx-proximal":{offsetMatrix:[-.3175753057003021,-.9460570216178894,-.06419729441404343,0,.8958902955055237,-.32153913378715515,.30658137798309326,0,-.3106854259967804,.03984907269477844,.9496771097183228,0,-.017625702545046806,-.01967475935816765,.04387917369604111,1],radius:.01228295173496008},"thumb-phalanx-distal":{offsetMatrix:[-.4944636821746826,-.8691971898078918,.001086252392269671,0,.8307800889015198,-.4722411036491394,.2946045398712158,0,-.25555649399757385,.14657381176948547,.9556186199188232,0,-.007126678712666035,-.021021386608481407,.011786630377173424,1],radius:.009768804535269737},"thumb-tip":{offsetMatrix:[-.4944636821746826,-.8691971898078918,.001086252392269671,0,.8307800889015198,-.4722411036491394,.2946045398712158,0,-.25555649399757385,.14657381176948547,.9556186199188232,0,.0003423091256991029,-.024528030306100845,-.011410919018089771,1],radius:.008768804371356964},"index-finger-metacarpal":{offsetMatrix:[.9060805439949036,-.1844543218612671,.3807799518108368,0,-.08027800172567368,.8086723685264587,.5827555656433105,0,-.4154181182384491,-.5585917234420776,.7179155349731445,0,-.038037415593862534,-.0020236473064869642,.07626739144325256,1],radius:.021228281781077385},"index-finger-phalanx-proximal":{offsetMatrix:[.7986818552017212,-.35985732078552246,.48229536414146423,0,.538311243057251,.7854709625244141,-.30537736415863037,0,-.2689369022846222,.5035246014595032,.8210577368736267,0,-.006869405973702669,.033938243985176086,.04206443578004837,1],radius:.010295259766280651},"index-finger-phalanx-intermediate":{offsetMatrix:[.8285930156707764,-.32672837376594543,.4546217918395996,0,.5577570199966431,.4116027057170868,-.7207564115524292,0,.04836784675717354,.8507823944091797,.5232869386672974,0,.0033306588884443045,.014840902760624886,.010923954658210278,1],radius:.00853810179978609},"index-finger-phalanx-distal":{offsetMatrix:[.8412464261054993,-.35794928669929504,.4051857888698578,0,.5139996409416199,.29711154103279114,-.8046918511390686,0,.16765329241752625,.8852096796035767,.4339304566383362,0,.0021551470272243023,-.0058362227864563465,-.0017938464879989624,1],radius:.007636196445673704},"index-finger-tip":{offsetMatrix:[.8412464261054993,-.35794928669929504,.4051857888698578,0,.5139996409416199,.29711154103279114,-.8046918511390686,0,.16765329241752625,.8852096796035767,.4339304566383362,0,-.00131594471167773,-.025222131982445717,-.012442642822861671,1],radius:.006636196281760931},"middle-finger-metacarpal":{offsetMatrix:[.9060805439949036,-.1844543218612671,.3807799518108368,0,-.08027800172567368,.8086723685264587,.5827555656433105,0,-.4154181182384491,-.5585917234420776,.7179155349731445,0,-.05395089089870453,.003063359996303916,.07402937114238739,1],radius:.021231964230537415},"middle-finger-phalanx-proximal":{offsetMatrix:[.9187911748886108,-.1530158370733261,.36387869715690613,0,.038666240870952606,.9522662162780762,.302808940410614,0,-.3928440511226654,-.26414817571640015,.8808513283729553,0,-.02717282809317112,.04162866622209549,.03678669035434723,1],radius:.01117393933236599},"middle-finger-phalanx-intermediate":{offsetMatrix:[.9228746294975281,-.12856416404247284,.36300456523895264,0,.14524033665657043,.9892153143882751,-.01890045404434204,0,-.3566599190235138,.07016586512327194,.9315956234931946,0,-.01030921470373869,.05296773463487625,-.0010256498353555799,1],radius:.008030958473682404},"middle-finger-phalanx-distal":{offsetMatrix:[.9325166344642639,-.040404170751571655,.35885775089263916,0,.06836572289466858,.995502769947052,-.0655682161450386,0,-.3545948565006256,.08567725121974945,.9310863614082336,0,-.0004833847051486373,.05103470757603645,-.026690717786550522,1],radius:.007629410829395056},"middle-finger-tip":{offsetMatrix:[.9325166344642639,-.040404170751571655,.35885775089263916,0,.06836572289466858,.995502769947052,-.0655682161450386,0,-.3545948565006256,.08567725121974945,.9310863614082336,0,.008158999495208263,.05004044249653816,-.050120558589696884,1],radius:.006629410665482283},"ring-finger-metacarpal":{offsetMatrix:[.9060805439949036,-.1844543218612671,.3807799518108368,0,-.08027800172567368,.8086723685264587,.5827555656433105,0,-.4154181182384491,-.5585917234420776,.7179155349731445,0,-.06732909381389618,.007902119308710098,.07209732383489609,1],radius:.019088275730609894},"ring-finger-phalanx-proximal":{offsetMatrix:[.9391821026802063,-.027994679287075996,.34227466583251953,0,-.18282271921634674,.8029410243034363,.5673282742500305,0,-.2907087206840515,-.5954000353813171,.7489906549453735,0,-.047129884362220764,.03806127607822418,.032147664576768875,1],radius:.00992213748395443},"ring-finger-phalanx-intermediate":{offsetMatrix:[.9249380826950073,.03699534013867378,.3783116042613983,0,-.12898847460746765,.9667453765869141,.2208271026611328,0,-.3575615882873535,-.25304901599884033,.8989526629447937,0,-.03579339757561684,.06127955764532089,.002939916681498289,1],radius:.007611672393977642},"ring-finger-phalanx-distal":{offsetMatrix:[.9001164436340332,.03983335196971893,.4338230490684509,0,-.09662467986345291,.9892624020576477,.10964841395616531,0,-.4247973561286926,-.14061418175697327,.8943013548851013,0,-.026291755959391594,.06800390034914017,-.02094830758869648,1],radius:.007231088820844889},"ring-finger-tip":{offsetMatrix:[.9001164436340332,.03983335196971893,.4338230490684509,0,-.09662467986345291,.9892624020576477,.10964841395616531,0,-.4247973561286926,-.14061418175697327,.8943013548851013,0,-.016345610842108727,.07300511747598648,-.04263874143362045,1],radius:.0062310886569321156},"pinky-finger-metacarpal":{offsetMatrix:[.8769711852073669,.31462907791137695,.36322021484375,0,-.4506046175956726,.801031768321991,.39408499002456665,0,-.16696058213710785,-.5092697143554688,.8442559838294983,0,-.07460174709558487,.0062340241856873035,.06756893545389175,1],radius:.01808827556669712},"pinky-finger-phalanx-proximal":{offsetMatrix:[.9498357176780701,.1553308218717575,.2714462876319885,0,-.3019258379936218,.6817675232887268,.6663586497306824,0,-.08155745267868042,-.7148879170417786,.694466233253479,0,-.06697750836610794,.029482364654541016,.02902858518064022,1],radius:.008483353070914745},"pinky-finger-phalanx-intermediate":{offsetMatrix:[.9214097261428833,.27928245067596436,.2701927423477173,0,-.3670244514942169,.8538867831230164,.36901235580444336,0,-.12765564024448395,-.43917882442474365,.8892839550971985,0,-.06447203457355499,.05144399777054787,.0076942890882492065,1],radius:.0067641944624483585},"pinky-finger-phalanx-distal":{offsetMatrix:[.9038633704185486,.23618005216121674,.3567195236682892,0,-.3532794713973999,.8823202252388,.3109731376171112,0,-.24129553139209747,-.4070987403392792,.8809353709220886,0,-.06187915802001953,.060364335775375366,-.010368337854743004,1],radius:.0064259846694767475},"pinky-finger-tip":{offsetMatrix:[.9038633704185486,.23618005216121674,.3567195236682892,0,-.3532794713973999,.8823202252388,.3109731376171112,0,-.24129553139209747,-.4070987403392792,.8809353709220886,0,-.056796226650476456,.07042007893323898,-.02921444922685623,1],radius:.005425984505563974}},gripOffsetMatrix:[.08027800917625427,-.8086723685264587,-.5827556252479553,0,-.4154181480407715,-.5585916638374329,.7179154753684998,0,-.9060805439949036,.1844543218612671,-.3807799518108368,0,-.038054611533880234,-.002910431008785963,.03720742464065552,1]},F0={jointTransforms:{wrist:{offsetMatrix:[.9340395331382751,-.13936476409435272,.32885703444480896,0,-.005510995630174875,.914999783039093,.40341612696647644,0,-.3571262061595917,-.37861889600753784,.8538784384727478,0,-.05789132043719292,.01670890860259533,.11183350533246994,1],radius:.021460847929120064},"thumb-metacarpal":{offsetMatrix:[.02145560085773468,-.9978390336036682,.0621047280728817,0,.41311800479888916,.06541631370782852,.9083252549171448,0,-.9104245901107788,.006167683284729719,.4136286973953247,0,-.016488194465637207,.012708572670817375,.08862338215112686,1],radius:.019382517784833908},"thumb-phalanx-proximal":{offsetMatrix:[.21270370483398438,-.966137707233429,.14606566727161407,0,.49890995025634766,.2359165996313095,.8339261412620544,0,-.8401462435722351,-.10450579971075058,.5321959853172302,0,.013112368993461132,.012508046813309193,.07517509907484055,1],radius:.01228295173496008},"thumb-phalanx-distal":{offsetMatrix:[.01653280481696129,-.9986647963523865,.048943229019641876,0,.26313456892967224,.051570065319538116,.9633802771568298,0,-.9646173715591431,-.0030490627977997065,.26363563537597656,0,.04150351136922836,.016039609909057617,.05719054117798805,1],radius:.009768804535269737},"thumb-tip":{offsetMatrix:[.01653280481696129,-.9986647963523865,.048943229019641876,0,.26313456892967224,.051570065319538116,.9633802771568298,0,-.9646173715591431,-.0030490627977997065,.26363563537597656,0,.06548332422971725,.01683700829744339,.0516640841960907,1],radius:.008768804371356964},"index-finger-metacarpal":{offsetMatrix:[.9340395331382751,-.13936476409435272,.32885703444480896,0,-.005510995630174875,.914999783039093,.40341612696647644,0,-.3571262061595917,-.37861889600753784,.8538784384727478,0,-.02592567168176174,.019982583820819855,.08479326963424683,1],radius:.021228281781077385},"index-finger-phalanx-proximal":{offsetMatrix:[.9063700437545776,-.21756279468536377,.3621589243412018,0,.0970839336514473,.9415287375450134,.3226419687271118,0,-.41117796301841736,-.2572731077671051,.8744958639144897,0,-.0015709538711234927,.043078210204839706,.034657616168260574,1],radius:.010295259766280651},"index-finger-phalanx-intermediate":{offsetMatrix:[.9159826040267944,-.1651475727558136,.36565208435058594,0,.09755707532167435,.9756820797920227,.1962820291519165,0,-.3891757130622864,-.14411886036396027,.9098196625709534,0,.014023927971720695,.052835866808891296,.0014903299743309617,1],radius:.00853810179978609},"index-finger-phalanx-distal":{offsetMatrix:[.9378057718276978,-.12329639494419098,.3245268166065216,0,.032558172941207886,.9619227051734924,.2713746726512909,0,-.3456292748451233,-.2439306229352951,.9061115384101868,0,.023482320830225945,.05633850023150444,-.020621655508875847,1],radius:.007636196445673704},"index-finger-tip":{offsetMatrix:[.9378057718276978,-.12329639494419098,.3245268166065216,0,.032558172941207886,.9619227051734924,.2713746726512909,0,-.3456292748451233,-.2439306229352951,.9061115384101868,0,.03096788562834263,.06281610578298569,-.040703095495700836,1],radius:.006636196281760931},"middle-finger-metacarpal":{offsetMatrix:[.9340395331382751,-.13936476409435272,.32885703444480896,0,-.005510995630174875,.914999783039093,.40341612696647644,0,-.3571262061595917,-.37861889600753784,.8538784384727478,0,-.04184452444314957,.022474845871329308,.08177298307418823,1],radius:.021231964230537415},"middle-finger-phalanx-proximal":{offsetMatrix:[.9720265865325928,-.08313076198101044,.21966552734375,0,.20477405190467834,.7580050826072693,-.6192700862884521,0,-.11502730846405029,.6469289064407349,.7538246512413025,0,-.022107340395450592,.05035499855875969,.02970452979207039,1],radius:.01117393933236599},"middle-finger-phalanx-intermediate":{offsetMatrix:[.9779140949249268,-.07129573822021484,.19646917283535004,0,.1287083923816681,-.5352076292037964,-.8348574042320251,0,.1646735966205597,.8417060971260071,-.5142109394073486,0,-.017169542610645294,.022584279999136925,-.00265491777099669,1],radius:.008030958473682404},"middle-finger-phalanx-distal":{offsetMatrix:[.9774913787841797,-.19657190144062042,.07661263644695282,0,-.1924918293952942,-.9796126484870911,-.05749811604619026,0,.08635343611240387,.041456472128629684,-.995401918888092,0,-.02170622907578945,-.0006043742760084569,.011511396616697311,1],radius:.007629410829395056},"middle-finger-tip":{offsetMatrix:[.9774913787841797,-.19657190144062042,.07661263644695282,0,-.1924918293952942,-.9796126484870911,-.05749811604619026,0,.08635343611240387,.041456472128629684,-.995401918888092,0,-.02438267692923546,-.0026927536819130182,.03627248480916023,1],radius:.006629410665482283},"ring-finger-metacarpal":{offsetMatrix:[.9340395331382751,-.13936476409435272,.32885703444480896,0,-.005510995630174875,.914999783039093,.40341612696647644,0,-.3571262061595917,-.37861889600753784,.8538784384727478,0,-.05944233387708664,.0264605600386858,.07478221505880356,1],radius:.019088275730609894},"ring-finger-phalanx-proximal":{offsetMatrix:[.9842101335525513,.024470895528793335,.1753024309873581,0,.12200043350458145,.6237703561782837,-.7720272541046143,0,-.12824076414108276,.7812241315841675,.610936164855957,0,-.04249368980526924,.0467497780919075,.027722163125872612,1],radius:.00992213748395443},"ring-finger-phalanx-intermediate":{offsetMatrix:[.9941774606704712,.05949164181947708,.08983955532312393,0,.10504482686519623,-.7208291888237,-.6851072907447815,0,.024001073092222214,.6905553936958313,-.7228817939758301,0,-.0374927744269371,.016285063698887825,.0038980208337306976,1],radius:.007611672393977642},"ring-finger-phalanx-distal":{offsetMatrix:[.9995742440223694,.01638498157262802,.02412819117307663,0,.007813597097992897,-.9474818110466003,.31971633434295654,0,.028100071474909782,-.31939181685447693,-.9472070932388306,0,-.038130562752485275,-.0020653479732573032,.02310742810368538,1],radius:.007231088820844889},"ring-finger-tip":{offsetMatrix:[.9995742440223694,.01638498157262802,.02412819117307663,0,.007813597097992897,-.9474818110466003,.31971633434295654,0,.028100071474909782,-.31939181685447693,-.9472070932388306,0,-.0390593595802784,.004176302347332239,.0466572530567646,1],radius:.0062310886569321156},"pinky-finger-metacarpal":{offsetMatrix:[.9147363901138306,.3458845317363739,.20885537564754486,0,-.3923271894454956,.8839452862739563,.2544005811214447,0,-.09662359952926636,-.3146490156650543,.9442773461341858,0,-.06715242564678192,.024195827543735504,.07137546688318253,1],radius:.01808827556669712},"pinky-finger-phalanx-proximal":{offsetMatrix:[.9613109827041626,.22439135611057281,.15977802872657776,0,.01002211682498455,.5511574745178223,-.8343409299850464,0,-.27528178691864014,.8036624789237976,.5275853276252747,0,-.06273911893367767,.038559623062610626,.028268879279494286,1],radius:.008483353070914745},"pinky-finger-phalanx-intermediate":{offsetMatrix:[.9820972084999084,.18811029195785522,-.00995189044624567,0,.14063723385334015,-.7673450708389282,-.6256227493286133,0,-.12532226741313934,.6130226850509644,-.7800630927085876,0,-.05428232625126839,.013870777562260628,.012061242014169693,1],radius:.0067641944624483585},"pinky-finger-phalanx-distal":{offsetMatrix:[.9744614362716675,.20454788208007812,-.09265263378620148,0,.22429193556308746,-.9065253138542175,.35764020681381226,0,-.010836843401193619,-.3692878782749176,-.9292529225349426,0,-.05173685774207115,.0014194445684552193,.02790539152920246,1],radius:.0064259846694767475},"pinky-finger-tip":{offsetMatrix:[.9744614362716675,.20454788208007812,-.09265263378620148,0,.22429193556308746,-.9065253138542175,.35764020681381226,0,-.010836843401193619,-.3692878782749176,-.9292529225349426,0,-.05098633095622063,.008463085629045963,.048688892275094986,1],radius:.005425984505563974}},gripOffsetMatrix:[.005510995630174875,-.9149997234344482,-.40341615676879883,0,-.3571262061595917,-.37861889600753784,.8538784384727478,0,-.9340395331382751,.13936474919319153,-.32885703444480896,0,-.031803809106349945,.007837686687707901,.04313928261399269,1]},O0={jointTransforms:{wrist:{offsetMatrix:[.9616971015930176,-.13805118203163147,.2368120402097702,0,.0005348679260350764,.8648636937141418,.5020061135292053,0,-.2741127610206604,-.48265108466148376,.8318111300468445,0,-.04913589730858803,.0021463718730956316,.11701996624469757,1],radius:.021460847929120064},"thumb-metacarpal":{offsetMatrix:[-.07536252588033676,-.9959676265716553,-.04867160692811012,0,.5877083539962769,-.08379616588354111,.8047218918800354,0,-.8055551648139954,.032041035592556,.5916536450386047,0,-.010643752291798592,.0006936835707165301,.08736639469861984,1],radius:.019382517784833908},"thumb-phalanx-proximal":{offsetMatrix:[.1374533325433731,-.9904957413673401,.004982374142855406,0,.5534393787384033,.08097179979085922,.8289443850517273,0,-.8214688897132874,-.11118389666080475,.559309184551239,0,.015547193586826324,-.0003480653394944966,.0681300163269043,1],radius:.01228295173496008},"thumb-phalanx-distal":{offsetMatrix:[-.04659227654337883,-.9974699020385742,-.05369402840733528,0,.6812446117401123,-.07104194164276123,.728600800037384,0,-.7305715084075928,-.002631746232509613,.6828309893608093,0,.04330715537071228,.003409178927540779,.0492292083799839,1],radius:.009768804535269737},"thumb-tip":{offsetMatrix:[-.04659227654337883,-.9974699020385742,-.05369402840733528,0,.6812446117401123,-.07104194164276123,.728600800037384,0,-.7305715084075928,-.002631746232509613,.6828309893608093,0,.062003348022699356,.004069602582603693,.03322213143110275,1],radius:.008768804371356964},"index-finger-metacarpal":{offsetMatrix:[.9616971015930176,-.13805118203163147,.2368120402097702,0,.0005348679260350764,.8648636937141418,.5020061135292053,0,-.2741127610206604,-.48265108466148376,.8318111300468445,0,-.02009812369942665,.008770795539021492,.08660387247800827,1],radius:.021228281781077385},"index-finger-phalanx-proximal":{offsetMatrix:[.9001791477203369,-.2598813474178314,.3494834005832672,0,.06073702871799469,.8695210218429565,.490146666765213,0,-.4312632381916046,-.41999316215515137,.7985095381736755,0,-.00017739279428496957,.03890012577176094,.039073407649993896,1],radius:.010295259766280651},"index-finger-phalanx-intermediate":{offsetMatrix:[.9082008600234985,-.20898112654685974,.36262574791908264,0,.11045389622449875,.9553793668746948,.27395179867744446,0,-.40369608998298645,-.20874978601932526,.8907597661018372,0,.01617925800383091,.05482936650514603,.008788082748651505,1],radius:.00853810179978609},"index-finger-phalanx-distal":{offsetMatrix:[.9309692978858948,-.16783711314201355,.32423174381256104,0,.1080828532576561,.9749603867530823,.1943446695804596,0,-.34873148798942566,-.14588497579097748,.9257990717887878,0,.02599053829908371,.059902746230363846,-.012860597111284733,1],radius:.007636196445673704},"index-finger-tip":{offsetMatrix:[.9309692978858948,-.16783711314201355,.32423174381256104,0,.1080828532576561,.9749603867530823,.1943446695804596,0,-.34873148798942566,-.14588497579097748,.9257990717887878,0,.03362493962049484,.06421422213315964,-.033461250364780426,1],radius:.006636196281760931},"middle-finger-metacarpal":{offsetMatrix:[.9616971015930176,-.13805118203163147,.2368120402097702,0,.0005348679260350764,.8648636937141418,.5020061135292053,0,-.2741127610206604,-.48265108466148376,.8318111300468445,0,-.03627845644950867,.011579737067222595,.08550142496824265,1],radius:.021231964230537415},"middle-finger-phalanx-proximal":{offsetMatrix:[.9876697659492493,-.06786545366048813,.1410750150680542,0,-.015095947310328484,.855663537979126,.5173118710517883,0,-.15582047402858734,-.5130629539489746,.8440889716148376,0,-.021259509027004242,.04587256908416748,.03659208118915558,1],radius:.01117393933236599},"middle-finger-phalanx-intermediate":{offsetMatrix:[.988391637802124,-.04354291781783104,.14555205404758453,0,.008894841186702251,.9729899168014526,.23067504167556763,0,-.15166506171226501,-.22670257091522217,.9620829224586487,0,-.014570588245987892,.06789684295654297,.0003578895702958107,1],radius:.008030958473682404},"middle-finger-phalanx-distal":{offsetMatrix:[.9853697419166565,.044260796159505844,.16458062827587128,0,-.0757969319820404,.9787378311157227,.19059516489505768,0,-.1526455283164978,-.20028135180473328,.9677740931510925,0,-.010392282158136368,.07414241135120392,-.026147106662392616,1],radius:.007629410829395056},"middle-finger-tip":{offsetMatrix:[.9853697419166565,.044260796159505844,.16458062827587128,0,-.0757969319820404,.9787378311157227,.19059516489505768,0,-.1526455283164978,-.20028135180473328,.9677740931510925,0,-.0069718430750072,.08024183660745621,-.05014154314994812,1],radius:.006629410665482283},"ring-finger-metacarpal":{offsetMatrix:[.9616971015930176,-.13805118203163147,.2368120402097702,0,.0005348679260350764,.8648636937141418,.5020061135292053,0,-.2741127610206604,-.48265108466148376,.8318111300468445,0,-.05402477830648422,.015797706320881844,.08152295649051666,1],radius:.019088275730609894},"ring-finger-phalanx-proximal":{offsetMatrix:[.9940828680992126,.05735103040933609,.09224652498960495,0,-.10022822767496109,.8116500377655029,.5754809379577637,0,-.041867565363645554,-.5813214182853699,.8125960826873779,0,-.041623555123806,.04171867296099663,.03582974523305893,1],radius:.00992213748395443},"ring-finger-phalanx-intermediate":{offsetMatrix:[.9843675494194031,.12044742703437805,.12850022315979004,0,-.15629759430885315,.9337108135223389,.3221098482608795,0,-.08118485659360886,-.3371586799621582,.937940776348114,0,-.039990875869989395,.06438793987035751,.004141641780734062,1],radius:.007611672393977642},"ring-finger-phalanx-distal":{offsetMatrix:[.9748351573944092,.11857274919748306,.18877571821212769,0,-.15575434267520905,.9681083559989929,.19623035192489624,0,-.15948788821697235,-.22069483995437622,.9622148275375366,0,-.03783353418111801,.07334739714860916,-.020782606676220894,1],radius:.007231088820844889},"ring-finger-tip":{offsetMatrix:[.9748351573944092,.11857274919748306,.18877571821212769,0,-.15575434267520905,.9681083559989929,.19623035192489624,0,-.15948788821697235,-.22069483995437622,.9622148275375366,0,-.03445569798350334,.0802423357963562,-.04392268508672714,1],radius:.0062310886569321156},"pinky-finger-metacarpal":{offsetMatrix:[.9181402921676636,.35625091195106506,.17350243031978607,0,-.39615097641944885,.8352503180503845,.38134080171585083,0,-.009065053425729275,-.41885748505592346,.9080066680908203,0,-.06191859766840935,.013620133511722088,.07850203663110733,1],radius:.01808827556669712},"pinky-finger-phalanx-proximal":{offsetMatrix:[.9714386463165283,.236698180437088,-.016745081171393394,0,-.18462024629116058,.7982627749443054,.5733163952827454,0,.14906984567642212,-.5538501739501953,.8191629648208618,0,-.061502378433942795,.032741155475378036,.03705105185508728,1],radius:.008483353070914745},"pinky-finger-phalanx-intermediate":{offsetMatrix:[.9337416291236877,.35620439052581787,-.03527557849884033,0,-.33203884959220886,.8987522721290588,.28634607791900635,0,.13370157778263092,-.2556603252887726,.9574766755104065,0,-.06608185172080994,.049755651503801346,.011886020191013813,1],radius:.0067641944624483585},"pinky-finger-phalanx-distal":{offsetMatrix:[.9419984817504883,.3303581774234772,.059175245463848114,0,-.33483216166496277,.9130291938781738,.23294763267040253,0,.02292730286717415,-.2392500638961792,.970687210559845,0,-.0687975287437439,.054948460310697556,-.007561664097011089,1],radius:.0064259846694767475},"pinky-finger-tip":{offsetMatrix:[.9419984817504883,.3303581774234772,.059175245463848114,0,-.33483216166496277,.9130291938781738,.23294763267040253,0,.02292730286717415,-.2392500638961792,.970687210559845,0,-.06947512179613113,.0613851435482502,-.028543535619974136,1],radius:.005425984505563974}},gripOffsetMatrix:[-.0005348679260350764,-.8648636937141418,-.5020061135292053,0,-.2741127908229828,-.48265108466148376,.8318111896514893,0,-.9616971015930176,.13805119693279266,-.2368120402097702,0,-.02878567762672901,.0017147823236882687,.04536811262369156,1]},Du={profileId:"oculus-hand",fallbackProfileIds:["generic-hand","generic-hand-select","generic-trigger"],poses:{default:O0,pinch:N0,point:F0}},k0={mapping:Cs.None,buttons:[{id:"pinch",type:"analog",eventTrigger:"select"}],axes:[]},Uu=pn(),Nu=Rn(),Fu=pn(),Ou=pn(),ku=Rn(),zu=pn(),Bu=pn(),Vu=Rn(),Hu=pn(),Gu=(n,e,t,i)=>(Rs(Uu,e),Ha(Nu,e),wl(Fu,e),Rs(Ou,t),Ha(ku,t),wl(zu,t),Al(Bu,Uu,Ou,i),Ms(Vu,Nu,ku,i),Al(Hu,Fu,zu,i),d0(n,Vu,Bu,Hu),n),z0=[1,-1,-1,0,-1,1,1,0,-1,1,1,0,-1,1,1,1],B0=n=>{for(let e=0;e<16;e++)n[e]*=z0[e]},Li=Symbol("@immersive-web-emulation-runtime/xr-hand-input");class Wu extends cd{constructor(e,t,i){if(t!==fn.Left&&t!==fn.Right)throw new DOMException('handedness for XRHandInput must be either "left" or "right"',"InvalidStateError");if(!e.poses.default||!e.poses.pinch)throw new DOMException('"default" and "pinch" hand pose configs are required',"InvalidStateError");const r=new qt(i),s=new qt(r),a=[e.profileId,...e.fallbackProfileIds],o=new Oc;Object.values(Ps).forEach(c=>{o.set(c,new Nc(c,r))});const l=new uo(t,Xa.TrackedPointer,a,r,new Uc(k0),s,o);super(l),this[Li]={poseId:"default",poses:e.poses},this.updateHandPose()}get poseId(){return this[Li].poseId}set poseId(e){if(!this[Li].poses[e]){console.warn(`Pose config ${e} not found`);return}this[Li].poseId=e}updateHandPose(){const e=this[Li].poses[this[Li].poseId],t=this[Li].poses.pinch;Object.values(Ps).forEach(i=>{const r=e.jointTransforms[i].offsetMatrix,s=t.jointTransforms[i].offsetMatrix,a=this.inputSource.hand.get(i);Gu(a[Pt].offsetMatrix,r,s,this.pinchValue),this.inputSource.handedness===fn.Right&&B0(a[Pt].offsetMatrix),a[Ki].radius=(1-this.pinchValue)*e.jointTransforms[i].radius+this.pinchValue*t.jointTransforms[i].radius}),e.gripOffsetMatrix&&t.gripOffsetMatrix&&Gu(this.inputSource.gripSpace[Pt].offsetMatrix,e.gripOffsetMatrix,t.gripOffsetMatrix,this.pinchValue)}get pinchValue(){return this[vt].inputSource.gamepad[Se].buttonsMap.pinch.value}updatePinchValue(e){if(e>1||e<0){console.warn(`Out-of-range value ${e} provided for pinch`);return}const t=this[vt].inputSource.gamepad[Se].buttonsMap.pinch;t[Se].pendingValue=e}onFrameStart(e){super.onFrameStart(e),this.updateHandPose()}}const _i=Symbol("@immersive-web-emulation-runtime/xr-system");class Xu extends EventTarget{constructor(e){super(),this[_i]={device:e}}isSessionSupported(e){return new Promise((t,i)=>{e===st.Inline?t(!0):t(this[_i].device.supportedSessionModes.includes(e))})}requestSession(e,t={}){return new Promise((i,r)=>{this.isSessionSupported(e).then(s=>{if(!s){r(new DOMException("The requested XRSession mode is not supported.","NotSupportedError"));return}if(this[_i].activeSession){r(new DOMException("An active XRSession already exists.","InvalidStateError"));return}const{requiredFeatures:a=[],optionalFeatures:o=[]}=t,{supportedFeatures:l}=this[_i].device;if(!a.every(m=>l.includes(m))){r(new Error("One or more required features are not supported by the device."));return}const u=o.filter(m=>l.includes(m)),p=Array.from(new Set([...a,...u,Ne.Viewer,Ne.Local])),d=new Fc(this[_i].device,e,p);this[_i].activeSession=d,d.addEventListener("end",()=>{this[_i].activeSession=void 0}),i(d)}).catch(r)})}}const Ge=Symbol("@immersive-web-emulation-runtime/action-player");class V0{constructor(e,t,i){const{schema:r,frames:s}=t;if(!s||!r||s.length===0)throw new DOMException("wrong recording format","NotSupportedError");const a=new ir(Ut.Viewer,e),o={[ft.Left]:new qt(a),[ft.Right]:new qt(a),[ft.None]:new qt(a)};this[Ge]={refSpace:e,inputSources:new Map,inputSchemas:new Map,frames:s,recordedFramePointer:0,startingTimeStamp:s[0][0],endingTimeStamp:s[s.length-1][0],playbackTime:s[0][0],playing:!1,viewerSpace:a,viewSpaces:o,vec3:pn(),quat:Rn()},Ts(this[Ge].viewSpaces[ft.Left][Pt].offsetMatrix,An(-i/2,0,0)),Ts(this[Ge].viewSpaces[ft.Right][Pt].offsetMatrix,An(i/2,0,0)),r.forEach(l=>{const c=l[0],u=l[1];let p;if(u.hasGamepad){const v=[];for(let h=0;h<u.numButtons;h++)v.push({id:h.toString(),type:"manual"});const f=[];for(let h=0;h<u.numAxes;h++)f.push({id:h.toString(),type:"manual"});p=new Uc({mapping:u.mapping,buttons:v,axes:f})}const d=new qt(e);let m;u.hasHand&&(m=new Oc,Object.values(Ps).forEach(v=>{m.set(v,new Nc(v,d))}));const g=new uo(u.handedness,u.targetRayMode,u.profiles,d,p,u.hasGrip?new qt(e):void 0,u.hasHand?m:void 0);this[Ge].inputSources.set(c,{active:!1,source:g}),this[Ge].inputSchemas.set(c,u)})}play(){this[Ge].recordedFramePointer=0,this[Ge].playbackTime=this[Ge].startingTimeStamp,this[Ge].playing=!0,this[Ge].actualTimeStamp=performance.now()}stop(){this[Ge].playing=!1}get playing(){return this[Ge].playing}get viewerSpace(){return this[Ge].viewerSpace}get viewSpaces(){return this[Ge].viewSpaces}get inputSources(){return Array.from(this[Ge].inputSources.values()).filter(e=>e.active).map(e=>e.source)}playFrame(){const e=performance.now(),t=e-this[Ge].actualTimeStamp;if(this[Ge].actualTimeStamp=e,this[Ge].playbackTime+=t,this[Ge].playbackTime>this[Ge].endingTimeStamp){this.stop();return}for(;this[Ge].frames[this[Ge].recordedFramePointer+1][0]<this[Ge].playbackTime;)this[Ge].recordedFramePointer++;const i=this[Ge].frames[this[Ge].recordedFramePointer],r=this[Ge].frames[this[Ge].recordedFramePointer+1],s=(this[Ge].playbackTime-i[0])/(r[0]-i[0]);this.updateXRSpaceFromMergedFrames(this[Ge].viewerSpace,i.slice(1,8),r.slice(1,8),s);const a=new Map;for(let l=8;l<i.length;l++){const{index:c,inputData:u}=this.processRawInputData(i[l]);a.set(c,u)}const o=new Map;for(let l=8;l<r.length;l++){const{index:c,inputData:u}=this.processRawInputData(r[l]);o.set(c,u)}this[Ge].inputSources.forEach(l=>{l.active=!1}),o.forEach((l,c)=>{this[Ge].inputSources.get(c).active=!0;const u=this[Ge].inputSources.get(c).source,p=this[Ge].inputSchemas.get(c);this.updateInputSource(u,p,a.has(c)?a.get(c):l,l,s)})}updateInputSource(e,t,i,r,s){if(this.updateXRSpaceFromMergedFrames(e.targetRaySpace,i.targetRayTransform,r.targetRayTransform,s),t.hasGrip&&this.updateXRSpaceFromMergedFrames(e.gripSpace,i.gripTransform,r.gripTransform,s),t.hasHand)for(let a=0;a<25;a++){const o=i.handTransforms.slice(a*8,a*8+7),l=r.handTransforms.slice(a*8,a*8+7),c=i.handTransforms[a*8+7],u=r.handTransforms[a*8+7],p=e.hand.get(t.jointSequence[a]);this.updateXRSpaceFromMergedFrames(p,o,l,s),p[Ki].radius=(u-c)*s+c}if(t.hasGamepad){const a=e.gamepad;r.buttons.forEach((o,l)=>{const c=a.buttons[l];c[Se].pressed=o[0]===1,c[Se].touched=o[1]===1;const u=i.buttons[l][2],p=o[2];c[Se].value=(p-u)*s+u}),r.axes.forEach((o,l)=>{const c=i.axes[l];a[Se].axesMap[l.toString()].x=(o-c)*s+c})}}updateXRSpaceFromMergedFrames(e,t,i,r){const s=An(t[0],t[1],t[2]),a=Ga(t[3],t[4],t[5],t[6]),o=An(i[0],i[1],i[2]),l=Ga(i[3],i[4],i[5],i[6]);Al(this[Ge].vec3,s,o,r),Ms(this[Ge].quat,a,l,r),Os(e[Pt].offsetMatrix,this[Ge].quat,this[Ge].vec3)}processRawInputData(e){const t=e[0],i=this[Ge].inputSchemas.get(t),s={targetRayTransform:e.slice(1,8)};let a=8;if(i.hasGrip&&(s.gripTransform=e[a++]),i.hasHand&&(s.handTransforms=e[a++]),i.hasGamepad){const o=e[a];s.buttons=o.slice(0,i.numButtons),s.axes=o.slice(i.numButtons)}return{index:t,inputData:s}}}const H0="1.0.4";class qu extends Event{constructor(e,t){if(super(e,t),!t.referenceSpace)throw new Error("XRReferenceSpaceEventInit.referenceSpace is required");this.referenceSpace=t.referenceSpace,this.transform=t.transform}}const rs=Symbol("@immersive-web-emulation-runtime/xr-viewport");class Zs{constructor(e,t,i,r){this[rs]={x:e,y:t,width:i,height:r}}get x(){return this[rs].x}get y(){return this[rs].y}get width(){return this[rs].width}get height(){return this[rs].height}}var Ne;(function(n){n.Viewer="viewer",n.Local="local",n.LocalFloor="local-floor",n.BoundedFloor="bounded-floor",n.Unbounded="unbounded",n.DomOverlay="dom-overlay",n.Anchors="anchors",n.PlaneDetection="plane-detection",n.MeshDetection="mesh-detection",n.HitTest="hit-test",n.HandTracking="hand-tracking",n.DepthSensing="depth-sensing"})(Ne||(Ne={}));const se=Symbol("@immersive-web-emulation-runtime/xr-device"),ss={ipd:.063,fovy:Math.PI/2,headsetPosition:new Zi(0,1.6,0),headsetQuaternion:new Ss,stereoEnabled:!1};class G0{constructor(e,t={}){var i,r,s,a,o,l;const c=new C0,u=new ir(Ut.Viewer,c),p={[ft.Left]:new qt(u),[ft.Right]:new qt(u),[ft.None]:new qt(u)},d=e.controllerConfig,m={};d&&Object.values(fn).forEach(f=>{d.layout[f]&&(m[f]=new I0(d,f,c))});const g={[fn.Left]:new Wu(Du,fn.Left,c),[fn.Right]:new Wu(Du,fn.Right,c)},v=(i=t.canvasContainer)!==null&&i!==void 0?i:document.createElement("div");v.dataset.webxr_runtime=`Immersive Web Emulation Runtime v${H0}`,v.style.position="fixed",v.style.width="100%",v.style.height="100%",v.style.top="0",v.style.left="0",v.style.display="flex",v.style.justifyContent="center",v.style.alignItems="center",v.style.overflow="hidden",v.style.zIndex="999",this[se]={name:e.name,supportedSessionModes:e.supportedSessionModes,supportedFeatures:e.supportedFeatures,supportedFrameRates:e.supportedFrameRates,isSystemKeyboardSupported:e.isSystemKeyboardSupported,internalNominalFrameRate:e.internalNominalFrameRate,environmentBlendModes:e.environmentBlendModes,interactionMode:e.interactionMode,userAgent:e.userAgent,position:(r=t.headsetPosition)!==null&&r!==void 0?r:ss.headsetPosition.clone(),quaternion:(s=t.headsetQuaternion)!==null&&s!==void 0?s:ss.headsetQuaternion.clone(),stereoEnabled:(a=t.stereoEnabled)!==null&&a!==void 0?a:ss.stereoEnabled,ipd:(o=t.ipd)!==null&&o!==void 0?o:ss.ipd,fovy:(l=t.fovy)!==null&&l!==void 0?l:ss.fovy,controllers:m,hands:g,primaryInputMode:"controller",pendingReferenceSpaceReset:!1,visibilityState:Tr.Visible,pendingVisibilityState:null,xrSystem:null,matrix:en(),globalSpace:c,viewerSpace:u,viewSpaces:p,canvasContainer:v,getViewport:(f,h)=>{const x=f.context.canvas,{width:_,height:y}=x;switch(h.eye){case ft.None:return new Zs(0,0,_,y);case ft.Left:return new Zs(0,0,this[se].stereoEnabled?_/2:_,y);case ft.Right:return new Zs(_/2,0,this[se].stereoEnabled?_/2:0,y)}},updateViews:()=>{const f=this[se].viewerSpace;Os(f[Pt].offsetMatrix,this[se].quaternion.quat,this[se].position.vec3),Ts(this[se].viewSpaces[ft.Left][Pt].offsetMatrix,An(-this[se].ipd/2,0,0)),Ts(this[se].viewSpaces[ft.Right][Pt].offsetMatrix,An(this[se].ipd/2,0,0))},onBaseLayerSet:f=>{if(!f)return;const h=f.context.canvas;h.parentElement!==this[se].canvasContainer&&(this[se].canvasData={canvas:h,parent:h.parentElement,width:h.width,height:h.height},this[se].canvasContainer.appendChild(h),document.body.appendChild(this[se].canvasContainer)),h.width=window.innerWidth,h.height=window.innerHeight},onSessionEnd:()=>{if(this[se].canvasData){const{canvas:f,parent:h,width:x,height:_}=this[se].canvasData;f.width=x,f.height=_,h?h.appendChild(f):this[se].canvasContainer.removeChild(f),document.body.removeChild(this[se].canvasContainer),window.dispatchEvent(new Event("resize"))}},onFrameStart:f=>{var h;if(!((h=this[se].actionPlayer)===null||h===void 0)&&h.playing)this[se].actionPlayer.playFrame();else{const x=f.session;this[se].updateViews(),this[se].pendingVisibilityState&&(this[se].visibilityState=this[se].pendingVisibilityState,this[se].pendingVisibilityState=null,x.dispatchEvent(new ja("visibilitychange",{session:x}))),this[se].visibilityState===Tr.Visible&&this.activeInputs.forEach(_=>{_.onFrameStart(f)}),this[se].pendingReferenceSpaceReset&&(x[q].referenceSpaces.forEach(_=>{switch(_[yi].type){case Ut.Local:case Ut.LocalFloor:case Ut.BoundedFloor:case Ut.Unbounded:_.dispatchEvent(new qu("reset",{referenceSpace:_}));break}}),this[se].pendingReferenceSpaceReset=!1)}this[se].updateViews()}},this[se].updateViews()}installRuntime(e=globalThis){Object.defineProperty(WebGL2RenderingContext.prototype,"makeXRCompatible",{value:function(){return new Promise((t,i)=>{t(!0)})},configurable:!0}),this[se].xrSystem=new Xu(this),Object.defineProperty(globalThis.navigator,"xr",{value:this[se].xrSystem,configurable:!0}),Object.defineProperty(navigator,"userAgent",{value:this[se].userAgent,writable:!1,configurable:!1,enumerable:!0}),e.XRSystem=Xu,e.XRSession=Fc,e.XRRenderState=Tl,e.XRFrame=dd,e.XRSpace=qt,e.XRReferenceSpace=ir,e.XRJointSpace=Nc,e.XRView=ud,e.XRViewport=Zs,e.XRRigidTransform=ho,e.XRPose=fo,e.XRViewerPose=hd,e.XRJointPose=fd,e.XRInputSource=uo,e.XRInputSourceArray=L0,e.XRHand=Oc,e.XRLayer=gd,e.XRWebGLLayer=U0,e.XRSessionEvent=ja,e.XRInputSourceEvent=Ta,e.XRInputSourcesChangeEvent=pd,e.XRReferenceSpaceEvent=qu}get supportedSessionModes(){return this[se].supportedSessionModes}get supportedFeatures(){return this[se].supportedFeatures}get supportedFrameRates(){return this[se].supportedFrameRates}get isSystemKeyboardSupported(){return this[se].isSystemKeyboardSupported}get internalNominalFrameRate(){return this[se].internalNominalFrameRate}get stereoEnabled(){return this[se].stereoEnabled}set stereoEnabled(e){this[se].stereoEnabled=e}get ipd(){return this[se].ipd}set ipd(e){this[se].ipd=e}get fovy(){return this[se].fovy}set fovy(e){this[se].fovy=e}get position(){return this[se].position}get quaternion(){return this[se].quaternion}get viewerSpace(){var e;return!((e=this[se].actionPlayer)===null||e===void 0)&&e.playing?this[se].actionPlayer.viewerSpace:this[se].viewerSpace}get viewSpaces(){var e;return!((e=this[se].actionPlayer)===null||e===void 0)&&e.playing?this[se].actionPlayer.viewSpaces:this[se].viewSpaces}get controllers(){return this[se].controllers}get hands(){return this[se].hands}get primaryInputMode(){return this[se].primaryInputMode}set primaryInputMode(e){if(e!=="controller"&&e!=="hand"){console.warn('primary input mode can only be "controller" or "hand"');return}this[se].primaryInputMode=e}get activeInputs(){return this[se].visibilityState!==Tr.Visible?[]:(this[se].primaryInputMode==="controller"?Object.values(this[se].controllers):Object.values(this[se].hands)).filter(t=>t.connected)}get inputSources(){var e;return!((e=this[se].actionPlayer)===null||e===void 0)&&e.playing?this[se].actionPlayer.inputSources:this.activeInputs.map(t=>t.inputSource)}get canvasContainer(){return this[se].canvasContainer}get activeSession(){var e;return(e=this[se].xrSystem)===null||e===void 0?void 0:e[_i].activeSession}recenter(){const e=new Zi(-this.position.x,0,-this.position.z),t=new Zi(0,0,-1).applyQuaternion(this.quaternion);t.y=0,t.normalize();const i=Math.atan2(t.x,-t.z),r=new Ss().setFromAxisAngle(new Zi(0,1,0),i);this.position.add(e),this.quaternion.multiply(r),[...Object.values(this[se].controllers),...Object.values(this[se].hands)].forEach(s=>{s.position.add(e),s.quaternion.multiply(r),s.position.applyQuaternion(r)}),this[se].pendingReferenceSpaceReset=!0}get visibilityState(){return this[se].visibilityState}updateVisibilityState(e){if(!Object.values(Tr).includes(e))throw new DOMException("Invalid XRVisibilityState value","NotSupportedError");e!==this[se].visibilityState&&(this[se].pendingVisibilityState=e)}createActionPlayer(e,t){return this[se].actionPlayer=new V0(e,t,this[se].ipd),this[se].actionPlayer}}const po={mapping:Cs.XRStandard,buttons:[{id:"trigger",type:"analog",eventTrigger:"select"},{id:"squeeze",type:"analog",eventTrigger:"squeeze"},null,{id:"thumbstick",type:"binary"},{id:"x-button",type:"binary"},{id:"y-button",type:"binary"},{id:"thumbrest",type:"binary"}],axes:[null,null,{id:"thumbstick",type:"x-axis"},{id:"thumbstick",type:"y-axis"}]},mo={mapping:Cs.XRStandard,buttons:[{id:"trigger",type:"analog",eventTrigger:"select"},{id:"squeeze",type:"analog",eventTrigger:"squeeze"},null,{id:"thumbstick",type:"binary"},{id:"a-button",type:"binary"},{id:"b-button",type:"binary"},{id:"thumbrest",type:"binary"}],axes:[null,null,{id:"thumbstick",type:"x-axis"},{id:"thumbstick",type:"y-axis"}]},W0={profileId:"oculus-touch-v2",fallbackProfileIds:["oculus-touch","generic-trigger-squeeze-thumbstick"],layout:{left:{gamepad:po,gripOffsetMatrix:[.9925461411476135,4673031295254759e-24,-.12186938524246216,0,.08617470413446426,.7071065306663513,.7018362283706665,0,.0861746296286583,-.70710688829422,.7018358707427979,0,-.003979847766458988,-.01585787907242775,.04964185878634453,1],numHapticActuators:1},right:{gamepad:mo,gripOffsetMatrix:[.9925461411476135,3688163374704345e-23,.12186937034130096,0,-.08617469668388367,.7071066498756409,.7018361687660217,0,-.0861746147274971,-.7071068286895752,.7018359899520874,0,.003979853354394436,-.01585787907242775,.04964182525873184,1],numHapticActuators:1}}},X0={profileId:"oculus-touch-v3",fallbackProfileIds:["oculus-touch","generic-trigger-squeeze-thumbstick"],layout:{left:{gamepad:po,gripOffsetMatrix:[.9925461411476135,20823669899527886e-24,-.12186937034130096,0,.08617465198040009,.7071067094802856,.701836109161377,0,.08617466688156128,-.7071067690849304,.7018360495567322,0,-.003979838453233242,-.015857907012104988,.04964181408286095,1],numHapticActuators:1},right:{gamepad:mo,gripOffsetMatrix:[.9925461411476135,-8329467959811154e-23,.12186941504478455,0,-.08617465943098068,.7071066498756409,.7018361687660217,0,-.08617471158504486,-.7071068286895752,.7018359303474426,0,.003979798872023821,-.015857888385653496,.049641866236925125,1],numHapticActuators:1}}},q0={profileId:"meta-quest-touch-pro",fallbackProfileIds:["oculus-touch-v2","oculus-touch","generic-trigger-squeeze-thumbstick"],layout:{left:{gamepad:po,gripOffsetMatrix:[.9925461411476135,-15779937356796836e-24,-.12186935544013977,0,.08617467433214188,.7071067094802856,.701836109161377,0,.0861746296286583,-.7071067690849304,.7018360495567322,0,-.003979836590588093,-.015857847407460213,.049641840159893036,1],numHapticActuators:3},right:{gamepad:mo,gripOffsetMatrix:[.9925461411476135,9267653311439972e-26,.12186937034130096,0,-.08617467433214188,.7071067094802856,.7018361687660217,0,-.08617464452981949,-.7071067690849304,.7018360495567322,0,.003979847766458988,-.01585782691836357,.04964186251163483,1],numHapticActuators:3}}},j0={profileId:"meta-quest-touch-plus",fallbackProfileIds:["oculus-touch-v3","oculus-touch","generic-trigger-squeeze-thumbstick"],layout:{left:{gamepad:po,gripOffsetMatrix:[.9925461411476135,10736208366779465e-24,-.12186933308839798,0,.08617459982633591,.70710688829422,.7018360495567322,0,.08617466688156128,-.7071067094802856,.7018362283706665,0,-.003979803062975407,-.015857873484492302,.04964187368750572,1],numHapticActuators:1},right:{gamepad:mo,gripOffsetMatrix:[.9925461411476135,-26238110351073374e-24,.12186934053897858,0,-.0861746147274971,.7071067690849304,.7018360495567322,0,-.08617465943098068,-.7071067094802856,.701836109161377,0,.003979838453233242,-.015857869759202003,.04964182525873184,1],numHapticActuators:1}}},Y0={name:"Oculus Quest 1",controllerConfig:W0,supportedSessionModes:[st.Inline,st.ImmersiveVR,st.ImmersiveAR],supportedFeatures:[Ne.Viewer,Ne.Local,Ne.LocalFloor,Ne.BoundedFloor,Ne.Unbounded,Ne.Anchors,Ne.PlaneDetection,Ne.HandTracking],supportedFrameRates:[72,80,90],isSystemKeyboardSupported:!0,internalNominalFrameRate:72,environmentBlendModes:{[st.ImmersiveVR]:Pn.Opaque,[st.ImmersiveAR]:Pn.AlphaBlend},interactionMode:kr.WorldSpace,userAgent:"Mozilla/5.0 (X11; Linux x86_64; Quest 1) AppleWebKit/537.36 (KHTML, like Gecko) OculusBrowser/33.0.0.x.x.x Chrome/126.0.6478.122 VR Safari/537.36"},$0={name:"Meta Quest 2",controllerConfig:X0,supportedSessionModes:[st.Inline,st.ImmersiveVR,st.ImmersiveAR],supportedFeatures:[Ne.Viewer,Ne.Local,Ne.LocalFloor,Ne.BoundedFloor,Ne.Unbounded,Ne.Anchors,Ne.PlaneDetection,Ne.MeshDetection,Ne.HitTest,Ne.HandTracking],supportedFrameRates:[72,80,90,120],isSystemKeyboardSupported:!0,internalNominalFrameRate:72,environmentBlendModes:{[st.ImmersiveVR]:Pn.Opaque,[st.ImmersiveAR]:Pn.AlphaBlend},interactionMode:kr.WorldSpace,userAgent:"Mozilla/5.0 (X11; Linux x86_64; Quest 2) AppleWebKit/537.36 (KHTML, like Gecko) OculusBrowser/33.0.0.x.x.x Chrome/126.0.6478.122 VR Safari/537.36"},Z0={name:"Meta Quest Pro",controllerConfig:q0,supportedSessionModes:[st.Inline,st.ImmersiveVR,st.ImmersiveAR],supportedFeatures:[Ne.Viewer,Ne.Local,Ne.LocalFloor,Ne.BoundedFloor,Ne.Unbounded,Ne.Anchors,Ne.PlaneDetection,Ne.MeshDetection,Ne.HitTest,Ne.HandTracking],supportedFrameRates:[72,80,90,120],isSystemKeyboardSupported:!0,internalNominalFrameRate:90,environmentBlendModes:{[st.ImmersiveVR]:Pn.Opaque,[st.ImmersiveAR]:Pn.AlphaBlend},interactionMode:kr.WorldSpace,userAgent:"Mozilla/5.0 (X11; Linux x86_64; Quest Pro) AppleWebKit/537.36 (KHTML, like Gecko) OculusBrowser/33.0.0.x.x.x Chrome/126.0.6478.122 VR Safari/537.36"},K0={name:"Meta Quest 3",controllerConfig:j0,supportedSessionModes:[st.Inline,st.ImmersiveVR,st.ImmersiveAR],supportedFeatures:[Ne.Viewer,Ne.Local,Ne.LocalFloor,Ne.BoundedFloor,Ne.Unbounded,Ne.Anchors,Ne.PlaneDetection,Ne.MeshDetection,Ne.HitTest,Ne.HandTracking,Ne.DepthSensing],supportedFrameRates:[72,80,90,120],isSystemKeyboardSupported:!0,internalNominalFrameRate:90,environmentBlendModes:{[st.ImmersiveVR]:Pn.Opaque,[st.ImmersiveAR]:Pn.AlphaBlend},interactionMode:kr.WorldSpace,userAgent:"Mozilla/5.0 (X11; Linux x86_64; Quest 3) AppleWebKit/537.36 (KHTML, like Gecko) OculusBrowser/33.0.0.x.x.x Chrome/126.0.6478.122 VR Safari/537.36"},ju=()=>{};let kc={},vd={},_d=null,xd={mark:ju,measure:ju};try{typeof window<"u"&&(kc=window),typeof document<"u"&&(vd=document),typeof MutationObserver<"u"&&(_d=MutationObserver),typeof performance<"u"&&(xd=performance)}catch{}const{userAgent:Yu=""}=kc.navigator||{},wi=kc,ht=vd,$u=_d,Ks=xd;wi.document;const si=!!ht.documentElement&&!!ht.head&&typeof ht.addEventListener=="function"&&typeof ht.createElement=="function",yd=~Yu.indexOf("MSIE")||~Yu.indexOf("Trident/");var mt="classic",Md="duotone",hn="sharp",dn="sharp-duotone",Q0=[mt,Md,hn,dn],J0={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},Zu={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},em=["kit"],tm=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,nm=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,im={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},rm={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},sm={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},am={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},om={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},lm={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},Sd={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},cm=["solid","regular","light","thin","duotone","brands"],Ed=[1,2,3,4,5,6,7,8,9,10],um=Ed.concat([11,12,13,14,15,16,17,18,19,20]),ms={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},fm=[...Object.keys(am),...cm,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ms.GROUP,ms.SWAP_OPACITY,ms.PRIMARY,ms.SECONDARY].concat(Ed.map(n=>"".concat(n,"x"))).concat(um.map(n=>"w-".concat(n))),hm={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},dm={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},pm={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Ku={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const ti="___FONT_AWESOME___",Rl=16,bd="fa",wd="svg-inline--fa",rr="data-fa-i2svg",Cl="data-fa-pseudo-element",mm="data-fa-pseudo-element-pending",zc="data-prefix",Bc="data-icon",Qu="fontawesome-i2svg",gm="async",vm=["HTML","HEAD","STYLE","SCRIPT"],Ad=(()=>{try{return!0}catch{return!1}})(),Td=[mt,hn,dn];function ks(n){return new Proxy(n,{get(e,t){return t in e?e[t]:e[mt]}})}const Rd={...Sd};Rd[mt]={...Sd[mt],...Zu.kit,...Zu["kit-duotone"]};const Qi=ks(Rd),Pl={...lm};Pl[mt]={...Pl[mt],...Ku.kit,...Ku["kit-duotone"]};const Ls=ks(Pl),Ll={...om};Ll[mt]={...Ll[mt],...pm.kit};const Ji=ks(Ll),Il={...sm};Il[mt]={...Il[mt],...dm.kit};const _m=ks(Il),xm=tm,Cd="fa-layers-text",ym=nm,Mm={...J0};ks(Mm);const Sm=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Oo=ms,zr=new Set;Object.keys(Ls[mt]).map(zr.add.bind(zr));Object.keys(Ls[hn]).map(zr.add.bind(zr));Object.keys(Ls[dn]).map(zr.add.bind(zr));const Em=[...em,...fm],Es=wi.FontAwesomeConfig||{};function bm(n){var e=ht.querySelector("script["+n+"]");if(e)return e.getAttribute(n)}function wm(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}ht&&typeof ht.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[t,i]=e;const r=wm(bm(t));r!=null&&(Es[i]=r)});const Pd={styleDefault:"solid",familyDefault:"classic",cssPrefix:bd,replacementClass:wd,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Es.familyPrefix&&(Es.cssPrefix=Es.familyPrefix);const Br={...Pd,...Es};Br.autoReplaceSvg||(Br.observeMutations=!1);const _e={};Object.keys(Pd).forEach(n=>{Object.defineProperty(_e,n,{enumerable:!0,set:function(e){Br[n]=e,bs.forEach(t=>t(_e))},get:function(){return Br[n]}})});Object.defineProperty(_e,"familyPrefix",{enumerable:!0,set:function(n){Br.cssPrefix=n,bs.forEach(e=>e(_e))},get:function(){return Br.cssPrefix}});wi.FontAwesomeConfig=_e;const bs=[];function Am(n){return bs.push(n),()=>{bs.splice(bs.indexOf(n),1)}}const li=Rl,zn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Tm(n){if(!n||!si)return;const e=ht.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=n;const t=ht.head.childNodes;let i=null;for(let r=t.length-1;r>-1;r--){const s=t[r],a=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(i=s)}return ht.head.insertBefore(e,i),n}const Rm="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Is(){let n=12,e="";for(;n-- >0;)e+=Rm[Math.random()*62|0];return e}function Qr(n){const e=[];for(let t=(n||[]).length>>>0;t--;)e[t]=n[t];return e}function Vc(n){return n.classList?Qr(n.classList):(n.getAttribute("class")||"").split(" ").filter(e=>e)}function Ld(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Cm(n){return Object.keys(n||{}).reduce((e,t)=>e+"".concat(t,'="').concat(Ld(n[t]),'" '),"").trim()}function go(n){return Object.keys(n||{}).reduce((e,t)=>e+"".concat(t,": ").concat(n[t].trim(),";"),"")}function Hc(n){return n.size!==zn.size||n.x!==zn.x||n.y!==zn.y||n.rotate!==zn.rotate||n.flipX||n.flipY}function Pm(n){let{transform:e,containerWidth:t,iconWidth:i}=n;const r={transform:"translate(".concat(t/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),a="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(a," ").concat(o)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:l,path:c}}function Lm(n){let{transform:e,width:t=Rl,height:i=Rl,startCentered:r=!1}=n,s="";return r&&yd?s+="translate(".concat(e.x/li-t/2,"em, ").concat(e.y/li-i/2,"em) "):r?s+="translate(calc(-50% + ".concat(e.x/li,"em), calc(-50% + ").concat(e.y/li,"em)) "):s+="translate(".concat(e.x/li,"em, ").concat(e.y/li,"em) "),s+="scale(".concat(e.size/li*(e.flipX?-1:1),", ").concat(e.size/li*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var Im=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Id(){const n=bd,e=wd,t=_e.cssPrefix,i=_e.replacementClass;let r=Im;if(t!==n||i!==e){const s=new RegExp("\\.".concat(n,"\\-"),"g"),a=new RegExp("\\--".concat(n,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(t,"-")).replace(a,"--".concat(t,"-")).replace(o,".".concat(i))}return r}let Ju=!1;function ko(){_e.autoAddCss&&!Ju&&(Tm(Id()),Ju=!0)}var Dm={mixout(){return{dom:{css:Id,insertCss:ko}}},hooks(){return{beforeDOMElementCreation(){ko()},beforeI2svg(){ko()}}}};const ni=wi||{};ni[ti]||(ni[ti]={});ni[ti].styles||(ni[ti].styles={});ni[ti].hooks||(ni[ti].hooks={});ni[ti].shims||(ni[ti].shims=[]);var Bn=ni[ti];const Dd=[],Ud=function(){ht.removeEventListener("DOMContentLoaded",Ud),Ya=1,Dd.map(n=>n())};let Ya=!1;si&&(Ya=(ht.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ht.readyState),Ya||ht.addEventListener("DOMContentLoaded",Ud));function Um(n){si&&(Ya?setTimeout(n,0):Dd.push(n))}function zs(n){const{tag:e,attributes:t={},children:i=[]}=n;return typeof n=="string"?Ld(n):"<".concat(e," ").concat(Cm(t),">").concat(i.map(zs).join(""),"</").concat(e,">")}function ef(n,e,t){if(n&&n[e]&&n[e][t])return{prefix:e,iconName:t,icon:n[e][t]}}var zo=function(e,t,i,r){var s=Object.keys(e),a=s.length,o=t,l,c,u;for(i===void 0?(l=1,u=e[s[0]]):(l=0,u=i);l<a;l++)c=s[l],u=o(u,e[c],c,e);return u};function Nm(n){const e=[];let t=0;const i=n.length;for(;t<i;){const r=n.charCodeAt(t++);if(r>=55296&&r<=56319&&t<i){const s=n.charCodeAt(t++);(s&64512)==56320?e.push(((r&1023)<<10)+(s&1023)+65536):(e.push(r),t--)}else e.push(r)}return e}function Dl(n){const e=Nm(n);return e.length===1?e[0].toString(16):null}function Fm(n,e){const t=n.length;let i=n.charCodeAt(e),r;return i>=55296&&i<=56319&&t>e+1&&(r=n.charCodeAt(e+1),r>=56320&&r<=57343)?(i-55296)*1024+r-56320+65536:i}function tf(n){return Object.keys(n).reduce((e,t)=>{const i=n[t];return!!i.icon?e[i.iconName]=i.icon:e[t]=i,e},{})}function Ul(n,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:i=!1}=t,r=tf(e);typeof Bn.hooks.addPack=="function"&&!i?Bn.hooks.addPack(n,tf(e)):Bn.styles[n]={...Bn.styles[n]||{},...r},n==="fas"&&Ul("fa",e)}const{styles:Gi,shims:Om}=Bn,km={[mt]:Object.values(Ji[mt]),[hn]:Object.values(Ji[hn]),[dn]:Object.values(Ji[dn])};let Gc=null,Nd={},Fd={},Od={},kd={},zd={};const zm={[mt]:Object.keys(Qi[mt]),[hn]:Object.keys(Qi[hn]),[dn]:Object.keys(Qi[dn])};function Bm(n){return~Em.indexOf(n)}function Vm(n,e){const t=e.split("-"),i=t[0],r=t.slice(1).join("-");return i===n&&r!==""&&!Bm(r)?r:null}const Bd=()=>{const n=i=>zo(Gi,(r,s,a)=>(r[a]=zo(s,i,{}),r),{});Nd=n((i,r,s)=>(r[3]&&(i[r[3]]=s),r[2]&&r[2].filter(o=>typeof o=="number").forEach(o=>{i[o.toString(16)]=s}),i)),Fd=n((i,r,s)=>(i[s]=s,r[2]&&r[2].filter(o=>typeof o=="string").forEach(o=>{i[o]=s}),i)),zd=n((i,r,s)=>{const a=r[2];return i[s]=s,a.forEach(o=>{i[o]=s}),i});const e="far"in Gi||_e.autoFetchSvg,t=zo(Om,(i,r)=>{const s=r[0];let a=r[1];const o=r[2];return a==="far"&&!e&&(a="fas"),typeof s=="string"&&(i.names[s]={prefix:a,iconName:o}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:a,iconName:o}),i},{names:{},unicodes:{}});Od=t.names,kd=t.unicodes,Gc=vo(_e.styleDefault,{family:_e.familyDefault})};Am(n=>{Gc=vo(n.styleDefault,{family:_e.familyDefault})});Bd();function Wc(n,e){return(Nd[n]||{})[e]}function Hm(n,e){return(Fd[n]||{})[e]}function Si(n,e){return(zd[n]||{})[e]}function Vd(n){return Od[n]||{prefix:null,iconName:null}}function Gm(n){const e=kd[n],t=Wc("fas",n);return e||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function Ai(){return Gc}const Xc=()=>({prefix:null,iconName:null,rest:[]});function vo(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:t=mt}=e,i=Qi[t][n],r=Ls[t][n]||Ls[t][i],s=n in Bn.styles?n:null;return r||s||null}const Wm={[mt]:Object.keys(Ji[mt]),[hn]:Object.keys(Ji[hn]),[dn]:Object.keys(Ji[dn])};function _o(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:t=!1}=e,i={[mt]:"".concat(_e.cssPrefix,"-").concat(mt),[hn]:"".concat(_e.cssPrefix,"-").concat(hn),[dn]:"".concat(_e.cssPrefix,"-").concat(dn)};let r=null,s=mt;const a=Q0.filter(l=>l!==Md);a.forEach(l=>{(n.includes(i[l])||n.some(c=>Wm[l].includes(c)))&&(s=l)});const o=n.reduce((l,c)=>{const u=Vm(_e.cssPrefix,c);if(Gi[c]?(c=km[s].includes(c)?_m[s][c]:c,r=c,l.prefix=c):zm[s].indexOf(c)>-1?(r=c,l.prefix=vo(c,{family:s})):u?l.iconName=u:c!==_e.replacementClass&&!a.some(p=>c===i[p])&&l.rest.push(c),!t&&l.prefix&&l.iconName){const p=r==="fa"?Vd(l.iconName):{},d=Si(l.prefix,l.iconName);p.prefix&&(r=null),l.iconName=p.iconName||d||l.iconName,l.prefix=p.prefix||l.prefix,l.prefix==="far"&&!Gi.far&&Gi.fas&&!_e.autoFetchSvg&&(l.prefix="fas")}return l},Xc());return(n.includes("fa-brands")||n.includes("fab"))&&(o.prefix="fab"),(n.includes("fa-duotone")||n.includes("fad"))&&(o.prefix="fad"),!o.prefix&&s===hn&&(Gi.fass||_e.autoFetchSvg)&&(o.prefix="fass",o.iconName=Si(o.prefix,o.iconName)||o.iconName),!o.prefix&&s===dn&&(Gi.fasds||_e.autoFetchSvg)&&(o.prefix="fasds",o.iconName=Si(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||r==="fa")&&(o.prefix=Ai()||"fas"),o}class Xm{constructor(){this.definitions={}}add(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];const r=t.reduce(this._pullDefinitions,{});Object.keys(r).forEach(s=>{this.definitions[s]={...this.definitions[s]||{},...r[s]},Ul(s,r[s]);const a=Ji[mt][s];a&&Ul(a,r[s]),Bd()})}reset(){this.definitions={}}_pullDefinitions(e,t){const i=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(i).map(r=>{const{prefix:s,iconName:a,icon:o}=i[r],l=o[2];e[s]||(e[s]={}),l.length>0&&l.forEach(c=>{typeof c=="string"&&(e[s][c]=o)}),e[s][a]=o}),e}}let nf=[],Rr={};const Ur={},qm=Object.keys(Ur);function jm(n,e){let{mixoutsTo:t}=e;return nf=n,Rr={},Object.keys(Ur).forEach(i=>{qm.indexOf(i)===-1&&delete Ur[i]}),nf.forEach(i=>{const r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(s=>{typeof r[s]=="function"&&(t[s]=r[s]),typeof r[s]=="object"&&Object.keys(r[s]).forEach(a=>{t[s]||(t[s]={}),t[s][a]=r[s][a]})}),i.hooks){const s=i.hooks();Object.keys(s).forEach(a=>{Rr[a]||(Rr[a]=[]),Rr[a].push(s[a])})}i.provides&&i.provides(Ur)}),t}function Nl(n,e){for(var t=arguments.length,i=new Array(t>2?t-2:0),r=2;r<t;r++)i[r-2]=arguments[r];return(Rr[n]||[]).forEach(a=>{e=a.apply(null,[e,...i])}),e}function sr(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),i=1;i<e;i++)t[i-1]=arguments[i];(Rr[n]||[]).forEach(s=>{s.apply(null,t)})}function Ti(){const n=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ur[n]?Ur[n].apply(null,e):void 0}function Fl(n){n.prefix==="fa"&&(n.prefix="fas");let{iconName:e}=n;const t=n.prefix||Ai();if(e)return e=Si(t,e)||e,ef(Hd.definitions,t,e)||ef(Bn.styles,t,e)}const Hd=new Xm,Ym=()=>{_e.autoReplaceSvg=!1,_e.observeMutations=!1,sr("noAuto")},$m={i2svg:function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return si?(sr("beforeI2svg",n),Ti("pseudoElements2svg",n),Ti("i2svg",n)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=n;_e.autoReplaceSvg===!1&&(_e.autoReplaceSvg=!0),_e.observeMutations=!0,Um(()=>{Km({autoReplaceSvgRoot:e}),sr("watch",n)})}},Zm={icon:n=>{if(n===null)return null;if(typeof n=="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:Si(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){const e=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],t=vo(n[0]);return{prefix:t,iconName:Si(t,e)||e}}if(typeof n=="string"&&(n.indexOf("".concat(_e.cssPrefix,"-"))>-1||n.match(xm))){const e=_o(n.split(" "),{skipLookups:!0});return{prefix:e.prefix||Ai(),iconName:Si(e.prefix,e.iconName)||e.iconName}}if(typeof n=="string"){const e=Ai();return{prefix:e,iconName:Si(e,n)||n}}}},mn={noAuto:Ym,config:_e,dom:$m,parse:Zm,library:Hd,findIconDefinition:Fl,toHtml:zs},Km=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=ht}=n;(Object.keys(Bn.styles).length>0||_e.autoFetchSvg)&&si&&_e.autoReplaceSvg&&mn.dom.i2svg({node:e})};function xo(n,e){return Object.defineProperty(n,"abstract",{get:e}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(t=>zs(t))}}),Object.defineProperty(n,"node",{get:function(){if(!si)return;const t=ht.createElement("div");return t.innerHTML=n.html,t.children}}),n}function Qm(n){let{children:e,main:t,mask:i,attributes:r,styles:s,transform:a}=n;if(Hc(a)&&t.found&&!i.found){const{width:o,height:l}=t,c={x:o/l/2,y:.5};r.style=go({...s,"transform-origin":"".concat(c.x+a.x/16,"em ").concat(c.y+a.y/16,"em")})}return[{tag:"svg",attributes:r,children:e}]}function Jm(n){let{prefix:e,iconName:t,children:i,attributes:r,symbol:s}=n;const a=s===!0?"".concat(e,"-").concat(_e.cssPrefix,"-").concat(t):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...r,id:a},children:i}]}]}function qc(n){const{icons:{main:e,mask:t},prefix:i,iconName:r,transform:s,symbol:a,title:o,maskId:l,titleId:c,extra:u,watchable:p=!1}=n,{width:d,height:m}=t.found?t:e,g=i==="fak",v=[_e.replacementClass,r?"".concat(_e.cssPrefix,"-").concat(r):""].filter(T=>u.classes.indexOf(T)===-1).filter(T=>T!==""||!!T).concat(u.classes).join(" ");let f={children:[],attributes:{...u.attributes,"data-prefix":i,"data-icon":r,class:v,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(m)}};const h=g&&!~u.classes.indexOf("fa-fw")?{width:"".concat(d/m*16*.0625,"em")}:{};p&&(f.attributes[rr]=""),o&&(f.children.push({tag:"title",attributes:{id:f.attributes["aria-labelledby"]||"title-".concat(c||Is())},children:[o]}),delete f.attributes.title);const x={...f,prefix:i,iconName:r,main:e,mask:t,maskId:l,transform:s,symbol:a,styles:{...h,...u.styles}},{children:_,attributes:y}=t.found&&e.found?Ti("generateAbstractMask",x)||{children:[],attributes:{}}:Ti("generateAbstractIcon",x)||{children:[],attributes:{}};return x.children=_,x.attributes=y,a?Jm(x):Qm(x)}function rf(n){const{content:e,width:t,height:i,transform:r,title:s,extra:a,watchable:o=!1}=n,l={...a.attributes,...s?{title:s}:{},class:a.classes.join(" ")};o&&(l[rr]="");const c={...a.styles};Hc(r)&&(c.transform=Lm({transform:r,startCentered:!0,width:t,height:i}),c["-webkit-transform"]=c.transform);const u=go(c);u.length>0&&(l.style=u);const p=[];return p.push({tag:"span",attributes:l,children:[e]}),s&&p.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),p}function e1(n){const{content:e,title:t,extra:i}=n,r={...i.attributes,...t?{title:t}:{},class:i.classes.join(" ")},s=go(i.styles);s.length>0&&(r.style=s);const a=[];return a.push({tag:"span",attributes:r,children:[e]}),t&&a.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),a}const{styles:Bo}=Bn;function Ol(n){const e=n[0],t=n[1],[i]=n.slice(4);let r=null;return Array.isArray(i)?r={tag:"g",attributes:{class:"".concat(_e.cssPrefix,"-").concat(Oo.GROUP)},children:[{tag:"path",attributes:{class:"".concat(_e.cssPrefix,"-").concat(Oo.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(_e.cssPrefix,"-").concat(Oo.PRIMARY),fill:"currentColor",d:i[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:t,icon:r}}const t1={found:!1,width:512,height:512};function n1(n,e){!Ad&&!_e.showMissingIcons&&n&&console.error('Icon with name "'.concat(n,'" and prefix "').concat(e,'" is missing.'))}function kl(n,e){let t=e;return e==="fa"&&_e.styleDefault!==null&&(e=Ai()),new Promise((i,r)=>{if(t==="fa"){const s=Vd(n);n=s.iconName||n,e=s.prefix||e}if(n&&e&&Bo[e]&&Bo[e][n]){const s=Bo[e][n];return i(Ol(s))}n1(n,e),i({...t1,icon:_e.showMissingIcons&&n?Ti("missingIconAbstract")||{}:{}})})}const sf=()=>{},zl=_e.measurePerformance&&Ks&&Ks.mark&&Ks.measure?Ks:{mark:sf,measure:sf},gs='FA "6.6.0"',i1=n=>(zl.mark("".concat(gs," ").concat(n," begins")),()=>Gd(n)),Gd=n=>{zl.mark("".concat(gs," ").concat(n," ends")),zl.measure("".concat(gs," ").concat(n),"".concat(gs," ").concat(n," begins"),"".concat(gs," ").concat(n," ends"))};var jc={begin:i1,end:Gd};const Ra=()=>{};function af(n){return typeof(n.getAttribute?n.getAttribute(rr):null)=="string"}function r1(n){const e=n.getAttribute?n.getAttribute(zc):null,t=n.getAttribute?n.getAttribute(Bc):null;return e&&t}function s1(n){return n&&n.classList&&n.classList.contains&&n.classList.contains(_e.replacementClass)}function a1(){return _e.autoReplaceSvg===!0?Ca.replace:Ca[_e.autoReplaceSvg]||Ca.replace}function o1(n){return ht.createElementNS("http://www.w3.org/2000/svg",n)}function l1(n){return ht.createElement(n)}function Wd(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:t=n.tag==="svg"?o1:l1}=e;if(typeof n=="string")return ht.createTextNode(n);const i=t(n.tag);return Object.keys(n.attributes||[]).forEach(function(s){i.setAttribute(s,n.attributes[s])}),(n.children||[]).forEach(function(s){i.appendChild(Wd(s,{ceFn:t}))}),i}function c1(n){let e=" ".concat(n.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Ca={replace:function(n){const e=n[0];if(e.parentNode)if(n[1].forEach(t=>{e.parentNode.insertBefore(Wd(t),e)}),e.getAttribute(rr)===null&&_e.keepOriginalSource){let t=ht.createComment(c1(e));e.parentNode.replaceChild(t,e)}else e.remove()},nest:function(n){const e=n[0],t=n[1];if(~Vc(e).indexOf(_e.replacementClass))return Ca.replace(n);const i=new RegExp("".concat(_e.cssPrefix,"-.*"));if(delete t[0].attributes.id,t[0].attributes.class){const s=t[0].attributes.class.split(" ").reduce((a,o)=>(o===_e.replacementClass||o.match(i)?a.toSvg.push(o):a.toNode.push(o),a),{toNode:[],toSvg:[]});t[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const r=t.map(s=>zs(s)).join(`
`);e.setAttribute(rr,""),e.innerHTML=r}};function of(n){n()}function Xd(n,e){const t=typeof e=="function"?e:Ra;if(n.length===0)t();else{let i=of;_e.mutateApproach===gm&&(i=wi.requestAnimationFrame||of),i(()=>{const r=a1(),s=jc.begin("mutate");n.map(r),s(),t()})}}let Yc=!1;function qd(){Yc=!0}function Bl(){Yc=!1}let $a=null;function lf(n){if(!$u||!_e.observeMutations)return;const{treeCallback:e=Ra,nodeCallback:t=Ra,pseudoElementsCallback:i=Ra,observeMutationsRoot:r=ht}=n;$a=new $u(s=>{if(Yc)return;const a=Ai();Qr(s).forEach(o=>{if(o.type==="childList"&&o.addedNodes.length>0&&!af(o.addedNodes[0])&&(_e.searchPseudoElements&&i(o.target),e(o.target)),o.type==="attributes"&&o.target.parentNode&&_e.searchPseudoElements&&i(o.target.parentNode),o.type==="attributes"&&af(o.target)&&~Sm.indexOf(o.attributeName))if(o.attributeName==="class"&&r1(o.target)){const{prefix:l,iconName:c}=_o(Vc(o.target));o.target.setAttribute(zc,l||a),c&&o.target.setAttribute(Bc,c)}else s1(o.target)&&t(o.target)})}),si&&$a.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function u1(){$a&&$a.disconnect()}function f1(n){const e=n.getAttribute("style");let t=[];return e&&(t=e.split(";").reduce((i,r)=>{const s=r.split(":"),a=s[0],o=s.slice(1);return a&&o.length>0&&(i[a]=o.join(":").trim()),i},{})),t}function h1(n){const e=n.getAttribute("data-prefix"),t=n.getAttribute("data-icon"),i=n.innerText!==void 0?n.innerText.trim():"";let r=_o(Vc(n));return r.prefix||(r.prefix=Ai()),e&&t&&(r.prefix=e,r.iconName=t),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=Hm(r.prefix,n.innerText)||Wc(r.prefix,Dl(n.innerText))),!r.iconName&&_e.autoFetchSvg&&n.firstChild&&n.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=n.firstChild.data)),r}function d1(n){const e=Qr(n.attributes).reduce((r,s)=>(r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r),{}),t=n.getAttribute("title"),i=n.getAttribute("data-fa-title-id");return _e.autoA11y&&(t?e["aria-labelledby"]="".concat(_e.replacementClass,"-title-").concat(i||Is()):(e["aria-hidden"]="true",e.focusable="false")),e}function p1(){return{iconName:null,title:null,titleId:null,prefix:null,transform:zn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function cf(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:t,prefix:i,rest:r}=h1(n),s=d1(n),a=Nl("parseNodeAttributes",{},n);let o=e.styleParser?f1(n):[];return{iconName:t,title:n.getAttribute("title"),titleId:n.getAttribute("data-fa-title-id"),prefix:i,transform:zn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:o,attributes:s},...a}}const{styles:m1}=Bn;function jd(n){const e=_e.autoReplaceSvg==="nest"?cf(n,{styleParser:!1}):cf(n);return~e.extra.classes.indexOf(Cd)?Ti("generateLayersText",n,e):Ti("generateSvgReplacementMutation",n,e)}let Hn=new Set;Td.map(n=>{Hn.add("fa-".concat(n))});Object.keys(Qi[mt]).map(Hn.add.bind(Hn));Object.keys(Qi[hn]).map(Hn.add.bind(Hn));Object.keys(Qi[dn]).map(Hn.add.bind(Hn));Hn=[...Hn];function uf(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!si)return Promise.resolve();const t=ht.documentElement.classList,i=u=>t.add("".concat(Qu,"-").concat(u)),r=u=>t.remove("".concat(Qu,"-").concat(u)),s=_e.autoFetchSvg?Hn:Td.map(u=>"fa-".concat(u)).concat(Object.keys(m1));s.includes("fa")||s.push("fa");const a=[".".concat(Cd,":not([").concat(rr,"])")].concat(s.map(u=>".".concat(u,":not([").concat(rr,"])"))).join(", ");if(a.length===0)return Promise.resolve();let o=[];try{o=Qr(n.querySelectorAll(a))}catch{}if(o.length>0)i("pending"),r("complete");else return Promise.resolve();const l=jc.begin("onTree"),c=o.reduce((u,p)=>{try{const d=jd(p);d&&u.push(d)}catch(d){Ad||d.name==="MissingIcon"&&console.error(d)}return u},[]);return new Promise((u,p)=>{Promise.all(c).then(d=>{Xd(d,()=>{i("active"),i("complete"),r("pending"),typeof e=="function"&&e(),l(),u()})}).catch(d=>{l(),p(d)})})}function g1(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;jd(n).then(t=>{t&&Xd([t],e)})}function v1(n){return function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=(e||{}).icon?e:Fl(e||{});let{mask:r}=t;return r&&(r=(r||{}).icon?r:Fl(r||{})),n(i,{...t,mask:r})}}const _1=function(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:t=zn,symbol:i=!1,mask:r=null,maskId:s=null,title:a=null,titleId:o=null,classes:l=[],attributes:c={},styles:u={}}=e;if(!n)return;const{prefix:p,iconName:d,icon:m}=n;return xo({type:"icon",...n},()=>(sr("beforeDOMElementCreation",{iconDefinition:n,params:e}),_e.autoA11y&&(a?c["aria-labelledby"]="".concat(_e.replacementClass,"-title-").concat(o||Is()):(c["aria-hidden"]="true",c.focusable="false")),qc({icons:{main:Ol(m),mask:r?Ol(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:d,transform:{...zn,...t},symbol:i,title:a,maskId:s,titleId:o,extra:{attributes:c,styles:u,classes:l}})))};var x1={mixout(){return{icon:v1(_1)}},hooks(){return{mutationObserverCallbacks(n){return n.treeCallback=uf,n.nodeCallback=g1,n}}},provides(n){n.i2svg=function(e){const{node:t=ht,callback:i=()=>{}}=e;return uf(t,i)},n.generateSvgReplacementMutation=function(e,t){const{iconName:i,title:r,titleId:s,prefix:a,transform:o,symbol:l,mask:c,maskId:u,extra:p}=t;return new Promise((d,m)=>{Promise.all([kl(i,a),c.iconName?kl(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(g=>{let[v,f]=g;d([e,qc({icons:{main:v,mask:f},prefix:a,iconName:i,transform:o,symbol:l,maskId:u,title:r,titleId:s,extra:p,watchable:!0})])}).catch(m)})},n.generateAbstractIcon=function(e){let{children:t,attributes:i,main:r,transform:s,styles:a}=e;const o=go(a);o.length>0&&(i.style=o);let l;return Hc(s)&&(l=Ti("generateAbstractTransformGrouping",{main:r,transform:s,containerWidth:r.width,iconWidth:r.width})),t.push(l||r.icon),{children:t,attributes:i}}}},y1={mixout(){return{layer(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:t=[]}=e;return xo({type:"layer"},()=>{sr("beforeDOMElementCreation",{assembler:n,params:e});let i=[];return n(r=>{Array.isArray(r)?r.map(s=>{i=i.concat(s.abstract)}):i=i.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(_e.cssPrefix,"-layers"),...t].join(" ")},children:i}]})}}}},M1={mixout(){return{counter(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:t=null,classes:i=[],attributes:r={},styles:s={}}=e;return xo({type:"counter",content:n},()=>(sr("beforeDOMElementCreation",{content:n,params:e}),e1({content:n.toString(),title:t,extra:{attributes:r,styles:s,classes:["".concat(_e.cssPrefix,"-layers-counter"),...i]}})))}}}},S1={mixout(){return{text(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:t=zn,title:i=null,classes:r=[],attributes:s={},styles:a={}}=e;return xo({type:"text",content:n},()=>(sr("beforeDOMElementCreation",{content:n,params:e}),rf({content:n,transform:{...zn,...t},title:i,extra:{attributes:s,styles:a,classes:["".concat(_e.cssPrefix,"-layers-text"),...r]}})))}}},provides(n){n.generateLayersText=function(e,t){const{title:i,transform:r,extra:s}=t;let a=null,o=null;if(yd){const l=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();a=c.width/l,o=c.height/l}return _e.autoA11y&&!i&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,rf({content:e.innerHTML,width:a,height:o,transform:r,title:i,extra:s,watchable:!0})])}}};const E1=new RegExp('"',"ug"),ff=[1105920,1112319],hf={FontAwesome:{normal:"fas",400:"fas"},...rm,...im,...hm},Vl=Object.keys(hf).reduce((n,e)=>(n[e.toLowerCase()]=hf[e],n),{}),b1=Object.keys(Vl).reduce((n,e)=>{const t=Vl[e];return n[e]=t[900]||[...Object.entries(t)][0][1],n},{});function w1(n){const e=n.replace(E1,""),t=Fm(e,0),i=t>=ff[0]&&t<=ff[1],r=e.length===2?e[0]===e[1]:!1;return{value:Dl(r?e[0]:e),isSecondary:i||r}}function A1(n,e){const t=n.replace(/^['"]|['"]$/g,"").toLowerCase(),i=parseInt(e),r=isNaN(i)?"normal":i;return(Vl[t]||{})[r]||b1[t]}function df(n,e){const t="".concat(mm).concat(e.replace(":","-"));return new Promise((i,r)=>{if(n.getAttribute(t)!==null)return i();const a=Qr(n.children).filter(d=>d.getAttribute(Cl)===e)[0],o=wi.getComputedStyle(n,e),l=o.getPropertyValue("font-family"),c=l.match(ym),u=o.getPropertyValue("font-weight"),p=o.getPropertyValue("content");if(a&&!c)return n.removeChild(a),i();if(c&&p!=="none"&&p!==""){const d=o.getPropertyValue("content");let m=A1(l,u);const{value:g,isSecondary:v}=w1(d),f=c[0].startsWith("FontAwesome");let h=Wc(m,g),x=h;if(f){const _=Gm(g);_.iconName&&_.prefix&&(h=_.iconName,m=_.prefix)}if(h&&!v&&(!a||a.getAttribute(zc)!==m||a.getAttribute(Bc)!==x)){n.setAttribute(t,x),a&&n.removeChild(a);const _=p1(),{extra:y}=_;y.attributes[Cl]=e,kl(h,m).then(T=>{const w=qc({..._,icons:{main:T,mask:Xc()},prefix:m,iconName:x,extra:y,watchable:!0}),A=ht.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?n.insertBefore(A,n.firstChild):n.appendChild(A),A.outerHTML=w.map(D=>zs(D)).join(`
`),n.removeAttribute(t),i()}).catch(r)}else i()}else i()})}function T1(n){return Promise.all([df(n,"::before"),df(n,"::after")])}function R1(n){return n.parentNode!==document.head&&!~vm.indexOf(n.tagName.toUpperCase())&&!n.getAttribute(Cl)&&(!n.parentNode||n.parentNode.tagName!=="svg")}function pf(n){if(si)return new Promise((e,t)=>{const i=Qr(n.querySelectorAll("*")).filter(R1).map(T1),r=jc.begin("searchPseudoElements");qd(),Promise.all(i).then(()=>{r(),Bl(),e()}).catch(()=>{r(),Bl(),t()})})}var C1={hooks(){return{mutationObserverCallbacks(n){return n.pseudoElementsCallback=pf,n}}},provides(n){n.pseudoElements2svg=function(e){const{node:t=ht}=e;_e.searchPseudoElements&&pf(t)}}};let mf=!1;var P1={mixout(){return{dom:{unwatch(){qd(),mf=!0}}}},hooks(){return{bootstrap(){lf(Nl("mutationObserverCallbacks",{}))},noAuto(){u1()},watch(n){const{observeMutationsRoot:e}=n;mf?Bl():lf(Nl("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const gf=n=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce((t,i)=>{const r=i.toLowerCase().split("-"),s=r[0];let a=r.slice(1).join("-");if(s&&a==="h")return t.flipX=!0,t;if(s&&a==="v")return t.flipY=!0,t;if(a=parseFloat(a),isNaN(a))return t;switch(s){case"grow":t.size=t.size+a;break;case"shrink":t.size=t.size-a;break;case"left":t.x=t.x-a;break;case"right":t.x=t.x+a;break;case"up":t.y=t.y-a;break;case"down":t.y=t.y+a;break;case"rotate":t.rotate=t.rotate+a;break}return t},e)};var L1={mixout(){return{parse:{transform:n=>gf(n)}}},hooks(){return{parseNodeAttributes(n,e){const t=e.getAttribute("data-fa-transform");return t&&(n.transform=gf(t)),n}}},provides(n){n.generateAbstractTransformGrouping=function(e){let{main:t,transform:i,containerWidth:r,iconWidth:s}=e;const a={transform:"translate(".concat(r/2," 256)")},o="translate(".concat(i.x*32,", ").concat(i.y*32,") "),l="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),u={transform:"".concat(o," ").concat(l," ").concat(c)},p={transform:"translate(".concat(s/2*-1," -256)")},d={outer:a,inner:u,path:p};return{tag:"g",attributes:{...d.outer},children:[{tag:"g",attributes:{...d.inner},children:[{tag:t.icon.tag,children:t.icon.children,attributes:{...t.icon.attributes,...d.path}}]}]}}}};const Vo={x:0,y:0,width:"100%",height:"100%"};function vf(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||e)&&(n.attributes.fill="black"),n}function I1(n){return n.tag==="g"?n.children:[n]}var D1={hooks(){return{parseNodeAttributes(n,e){const t=e.getAttribute("data-fa-mask"),i=t?_o(t.split(" ").map(r=>r.trim())):Xc();return i.prefix||(i.prefix=Ai()),n.mask=i,n.maskId=e.getAttribute("data-fa-mask-id"),n}}},provides(n){n.generateAbstractMask=function(e){let{children:t,attributes:i,main:r,mask:s,maskId:a,transform:o}=e;const{width:l,icon:c}=r,{width:u,icon:p}=s,d=Pm({transform:o,containerWidth:u,iconWidth:l}),m={tag:"rect",attributes:{...Vo,fill:"white"}},g=c.children?{children:c.children.map(vf)}:{},v={tag:"g",attributes:{...d.inner},children:[vf({tag:c.tag,attributes:{...c.attributes,...d.path},...g})]},f={tag:"g",attributes:{...d.outer},children:[v]},h="mask-".concat(a||Is()),x="clip-".concat(a||Is()),_={tag:"mask",attributes:{...Vo,id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[m,f]},y={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:I1(p)},_]};return t.push(y,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(h,")"),...Vo}}),{children:t,attributes:i}}}},U1={provides(n){let e=!1;wi.matchMedia&&(e=wi.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){const t=[],i={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};t.push({tag:"path",attributes:{...i,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const s={...r,attributeName:"opacity"},a={tag:"circle",attributes:{...i,cx:"256",cy:"364",r:"28"},children:[]};return e||a.children.push({tag:"animate",attributes:{...r,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...s,values:"1;0;1;1;0;1;"}}),t.push(a),t.push({tag:"path",attributes:{...i,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...s,values:"1;0;0;0;0;1;"}}]}),e||t.push({tag:"path",attributes:{...i,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...s,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:t}}}},N1={hooks(){return{parseNodeAttributes(n,e){const t=e.getAttribute("data-fa-symbol"),i=t===null?!1:t===""?!0:t;return n.symbol=i,n}}}},F1=[Dm,x1,y1,M1,S1,C1,P1,L1,D1,U1,N1];jm(F1,{mixoutsTo:mn});mn.noAuto;mn.config;mn.library;mn.dom;const Hl=mn.parse;mn.findIconDefinition;mn.toHtml;const O1=mn.icon;mn.layer;mn.text;mn.counter;function _f(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function Un(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?_f(Object(t),!0).forEach(function(i){Cr(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):_f(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function Za(n){"@babel/helpers - typeof";return Za=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Za(n)}function Cr(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function k1(n,e){if(n==null)return{};var t={},i=Object.keys(n),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(t[r]=n[r]);return t}function z1(n,e){if(n==null)return{};var t=k1(n,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(t[i]=n[i])}return t}function Gl(n){return B1(n)||V1(n)||H1(n)||G1()}function B1(n){if(Array.isArray(n))return Wl(n)}function V1(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function H1(n,e){if(n){if(typeof n=="string")return Wl(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Wl(n,e)}}function Wl(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function G1(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function W1(n){var e,t=n.beat,i=n.fade,r=n.beatFade,s=n.bounce,a=n.shake,o=n.flash,l=n.spin,c=n.spinPulse,u=n.spinReverse,p=n.pulse,d=n.fixedWidth,m=n.inverse,g=n.border,v=n.listItem,f=n.flip,h=n.size,x=n.rotation,_=n.pull,y=(e={"fa-beat":t,"fa-fade":i,"fa-beat-fade":r,"fa-bounce":s,"fa-shake":a,"fa-flash":o,"fa-spin":l,"fa-spin-reverse":u,"fa-spin-pulse":c,"fa-pulse":p,"fa-fw":d,"fa-inverse":m,"fa-border":g,"fa-li":v,"fa-flip":f===!0,"fa-flip-horizontal":f==="horizontal"||f==="both","fa-flip-vertical":f==="vertical"||f==="both"},Cr(e,"fa-".concat(h),typeof h<"u"&&h!==null),Cr(e,"fa-rotate-".concat(x),typeof x<"u"&&x!==null&&x!==0),Cr(e,"fa-pull-".concat(_),typeof _<"u"&&_!==null),Cr(e,"fa-swap-opacity",n.swapOpacity),e);return Object.keys(y).map(function(T){return y[T]?T:null}).filter(function(T){return T})}function X1(n){return n=n-0,n===n}function Yd(n){return X1(n)?n:(n=n.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""}),n.substr(0,1).toLowerCase()+n.substr(1))}var q1=["style"];function j1(n){return n.charAt(0).toUpperCase()+n.slice(1)}function Y1(n){return n.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var i=t.indexOf(":"),r=Yd(t.slice(0,i)),s=t.slice(i+1).trim();return r.startsWith("webkit")?e[j1(r)]=s:e[r]=s,e},{})}function $d(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var i=(e.children||[]).map(function(l){return $d(n,l)}),r=Object.keys(e.attributes||{}).reduce(function(l,c){var u=e.attributes[c];switch(c){case"class":l.attrs.className=u,delete e.attributes.class;break;case"style":l.attrs.style=Y1(u);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?l.attrs[c.toLowerCase()]=u:l.attrs[Yd(c)]=u}return l},{attrs:{}}),s=t.style,a=s===void 0?{}:s,o=z1(t,q1);return r.attrs.style=Un(Un({},r.attrs.style),a),n.apply(void 0,[e.tag,Un(Un({},r.attrs),o)].concat(Gl(i)))}var Zd=!1;try{Zd=!0}catch{}function $1(){if(!Zd&&console&&typeof console.error=="function"){var n;(n=console).error.apply(n,arguments)}}function xf(n){if(n&&Za(n)==="object"&&n.prefix&&n.iconName&&n.icon)return n;if(Hl.icon)return Hl.icon(n);if(n===null)return null;if(n&&Za(n)==="object"&&n.prefix&&n.iconName)return n;if(Array.isArray(n)&&n.length===2)return{prefix:n[0],iconName:n[1]};if(typeof n=="string")return{prefix:"fas",iconName:n}}function Ho(n,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Cr({},n,e):{}}var yf={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Ds=nr.forwardRef(function(n,e){var t=Un(Un({},yf),n),i=t.icon,r=t.mask,s=t.symbol,a=t.className,o=t.title,l=t.titleId,c=t.maskId,u=xf(i),p=Ho("classes",[].concat(Gl(W1(t)),Gl((a||"").split(" ")))),d=Ho("transform",typeof t.transform=="string"?Hl.transform(t.transform):t.transform),m=Ho("mask",xf(r)),g=O1(u,Un(Un(Un(Un({},p),d),m),{},{symbol:s,title:o,titleId:l,maskId:c}));if(!g)return $1("Could not find icon",u),null;var v=g.abstract,f={ref:e};return Object.keys(t).forEach(function(h){yf.hasOwnProperty(h)||(f[h]=t[h])}),Z1(v[0],f)});Ds.displayName="FontAwesomeIcon";Ds.propTypes={beat:Xe.bool,border:Xe.bool,beatFade:Xe.bool,bounce:Xe.bool,className:Xe.string,fade:Xe.bool,flash:Xe.bool,mask:Xe.oneOfType([Xe.object,Xe.array,Xe.string]),maskId:Xe.string,fixedWidth:Xe.bool,inverse:Xe.bool,flip:Xe.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Xe.oneOfType([Xe.object,Xe.array,Xe.string]),listItem:Xe.bool,pull:Xe.oneOf(["right","left"]),pulse:Xe.bool,rotation:Xe.oneOf([0,90,180,270]),shake:Xe.bool,size:Xe.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Xe.bool,spinPulse:Xe.bool,spinReverse:Xe.bool,symbol:Xe.oneOfType([Xe.bool,Xe.string]),title:Xe.string,titleId:Xe.string,transform:Xe.oneOfType([Xe.string,Xe.object]),swapOpacity:Xe.bool};var Z1=$d.bind(null,nr.createElement),Jt=function(){return Jt=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++){t=arguments[i];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},Jt.apply(this,arguments)};function Ka(n,e,t){if(t||arguments.length===2)for(var i=0,r=e.length,s;i<r;i++)(s||!(i in e))&&(s||(s=Array.prototype.slice.call(e,0,i)),s[i]=e[i]);return n.concat(s||Array.prototype.slice.call(e))}var ct="-ms-",ws="-moz-",tt="-webkit-",Kd="comm",yo="rule",$c="decl",K1="@import",Qd="@keyframes",Q1="@layer",Jd=Math.abs,Zc=String.fromCharCode,Xl=Object.assign;function J1(n,e){return Nt(n,0)^45?(((e<<2^Nt(n,0))<<2^Nt(n,1))<<2^Nt(n,2))<<2^Nt(n,3):0}function ep(n){return n.trim()}function Kn(n,e){return(n=e.exec(n))?n[0]:n}function Ve(n,e,t){return n.replace(e,t)}function Pa(n,e,t){return n.indexOf(e,t)}function Nt(n,e){return n.charCodeAt(e)|0}function Vr(n,e,t){return n.slice(e,t)}function Nn(n){return n.length}function tp(n){return n.length}function vs(n,e){return e.push(n),n}function eg(n,e){return n.map(e).join("")}function Mf(n,e){return n.filter(function(t){return!Kn(t,e)})}var Mo=1,Hr=1,np=0,yn=0,Ct=0,Jr="";function So(n,e,t,i,r,s,a,o){return{value:n,root:e,parent:t,type:i,props:r,children:s,line:Mo,column:Hr,length:a,return:"",siblings:o}}function xi(n,e){return Xl(So("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},e)}function cr(n){for(;n.root;)n=xi(n.root,{children:[n]});vs(n,n.siblings)}function tg(){return Ct}function ng(){return Ct=yn>0?Nt(Jr,--yn):0,Hr--,Ct===10&&(Hr=1,Mo--),Ct}function Cn(){return Ct=yn<np?Nt(Jr,yn++):0,Hr++,Ct===10&&(Hr=1,Mo++),Ct}function er(){return Nt(Jr,yn)}function La(){return yn}function Eo(n,e){return Vr(Jr,n,e)}function ql(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ig(n){return Mo=Hr=1,np=Nn(Jr=n),yn=0,[]}function rg(n){return Jr="",n}function Go(n){return ep(Eo(yn-1,jl(n===91?n+2:n===40?n+1:n)))}function sg(n){for(;(Ct=er())&&Ct<33;)Cn();return ql(n)>2||ql(Ct)>3?"":" "}function ag(n,e){for(;--e&&Cn()&&!(Ct<48||Ct>102||Ct>57&&Ct<65||Ct>70&&Ct<97););return Eo(n,La()+(e<6&&er()==32&&Cn()==32))}function jl(n){for(;Cn();)switch(Ct){case n:return yn;case 34:case 39:n!==34&&n!==39&&jl(Ct);break;case 40:n===41&&jl(n);break;case 92:Cn();break}return yn}function og(n,e){for(;Cn()&&n+Ct!==57;)if(n+Ct===84&&er()===47)break;return"/*"+Eo(e,yn-1)+"*"+Zc(n===47?n:Cn())}function lg(n){for(;!ql(er());)Cn();return Eo(n,yn)}function cg(n){return rg(Ia("",null,null,null,[""],n=ig(n),0,[0],n))}function Ia(n,e,t,i,r,s,a,o,l){for(var c=0,u=0,p=a,d=0,m=0,g=0,v=1,f=1,h=1,x=0,_="",y=r,T=s,w=i,A=_;f;)switch(g=x,x=Cn()){case 40:if(g!=108&&Nt(A,p-1)==58){Pa(A+=Ve(Go(x),"&","&\f"),"&\f",Jd(c?o[c-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:A+=Go(x);break;case 9:case 10:case 13:case 32:A+=sg(g);break;case 92:A+=ag(La()-1,7);continue;case 47:switch(er()){case 42:case 47:vs(ug(og(Cn(),La()),e,t,l),l);break;default:A+="/"}break;case 123*v:o[c++]=Nn(A)*h;case 125*v:case 59:case 0:switch(x){case 0:case 125:f=0;case 59+u:h==-1&&(A=Ve(A,/\f/g,"")),m>0&&Nn(A)-p&&vs(m>32?Ef(A+";",i,t,p-1,l):Ef(Ve(A," ","")+";",i,t,p-2,l),l);break;case 59:A+=";";default:if(vs(w=Sf(A,e,t,c,u,r,o,_,y=[],T=[],p,s),s),x===123)if(u===0)Ia(A,e,w,w,y,s,p,o,T);else switch(d===99&&Nt(A,3)===110?100:d){case 100:case 108:case 109:case 115:Ia(n,w,w,i&&vs(Sf(n,w,w,0,0,r,o,_,r,y=[],p,T),T),r,T,p,o,i?y:T);break;default:Ia(A,w,w,w,[""],T,0,o,T)}}c=u=m=0,v=h=1,_=A="",p=a;break;case 58:p=1+Nn(A),m=g;default:if(v<1){if(x==123)--v;else if(x==125&&v++==0&&ng()==125)continue}switch(A+=Zc(x),x*v){case 38:h=u>0?1:(A+="\f",-1);break;case 44:o[c++]=(Nn(A)-1)*h,h=1;break;case 64:er()===45&&(A+=Go(Cn())),d=er(),u=p=Nn(_=A+=lg(La())),x++;break;case 45:g===45&&Nn(A)==2&&(v=0)}}return s}function Sf(n,e,t,i,r,s,a,o,l,c,u,p){for(var d=r-1,m=r===0?s:[""],g=tp(m),v=0,f=0,h=0;v<i;++v)for(var x=0,_=Vr(n,d+1,d=Jd(f=a[v])),y=n;x<g;++x)(y=ep(f>0?m[x]+" "+_:Ve(_,/&\f/g,m[x])))&&(l[h++]=y);return So(n,e,t,r===0?yo:o,l,c,u,p)}function ug(n,e,t,i){return So(n,e,t,Kd,Zc(tg()),Vr(n,2,-2),0,i)}function Ef(n,e,t,i,r){return So(n,e,t,$c,Vr(n,0,i),Vr(n,i+1,-1),i,r)}function ip(n,e,t){switch(J1(n,e)){case 5103:return tt+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return tt+n+n;case 4789:return ws+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return tt+n+ws+n+ct+n+n;case 5936:switch(Nt(n,e+11)){case 114:return tt+n+ct+Ve(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return tt+n+ct+Ve(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return tt+n+ct+Ve(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return tt+n+ct+n+n;case 6165:return tt+n+ct+"flex-"+n+n;case 5187:return tt+n+Ve(n,/(\w+).+(:[^]+)/,tt+"box-$1$2"+ct+"flex-$1$2")+n;case 5443:return tt+n+ct+"flex-item-"+Ve(n,/flex-|-self/g,"")+(Kn(n,/flex-|baseline/)?"":ct+"grid-row-"+Ve(n,/flex-|-self/g,""))+n;case 4675:return tt+n+ct+"flex-line-pack"+Ve(n,/align-content|flex-|-self/g,"")+n;case 5548:return tt+n+ct+Ve(n,"shrink","negative")+n;case 5292:return tt+n+ct+Ve(n,"basis","preferred-size")+n;case 6060:return tt+"box-"+Ve(n,"-grow","")+tt+n+ct+Ve(n,"grow","positive")+n;case 4554:return tt+Ve(n,/([^-])(transform)/g,"$1"+tt+"$2")+n;case 6187:return Ve(Ve(Ve(n,/(zoom-|grab)/,tt+"$1"),/(image-set)/,tt+"$1"),n,"")+n;case 5495:case 3959:return Ve(n,/(image-set\([^]*)/,tt+"$1$`$1");case 4968:return Ve(Ve(n,/(.+:)(flex-)?(.*)/,tt+"box-pack:$3"+ct+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+tt+n+n;case 4200:if(!Kn(n,/flex-|baseline/))return ct+"grid-column-align"+Vr(n,e)+n;break;case 2592:case 3360:return ct+Ve(n,"template-","")+n;case 4384:case 3616:return t&&t.some(function(i,r){return e=r,Kn(i.props,/grid-\w+-end/)})?~Pa(n+(t=t[e].value),"span",0)?n:ct+Ve(n,"-start","")+n+ct+"grid-row-span:"+(~Pa(t,"span",0)?Kn(t,/\d+/):+Kn(t,/\d+/)-+Kn(n,/\d+/))+";":ct+Ve(n,"-start","")+n;case 4896:case 4128:return t&&t.some(function(i){return Kn(i.props,/grid-\w+-start/)})?n:ct+Ve(Ve(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return Ve(n,/(.+)-inline(.+)/,tt+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Nn(n)-1-e>6)switch(Nt(n,e+1)){case 109:if(Nt(n,e+4)!==45)break;case 102:return Ve(n,/(.+:)(.+)-([^]+)/,"$1"+tt+"$2-$3$1"+ws+(Nt(n,e+3)==108?"$3":"$2-$3"))+n;case 115:return~Pa(n,"stretch",0)?ip(Ve(n,"stretch","fill-available"),e,t)+n:n}break;case 5152:case 5920:return Ve(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,r,s,a,o,l,c){return ct+r+":"+s+c+(a?ct+r+"-span:"+(o?l:+l-+s)+c:"")+n});case 4949:if(Nt(n,e+6)===121)return Ve(n,":",":"+tt)+n;break;case 6444:switch(Nt(n,Nt(n,14)===45?18:11)){case 120:return Ve(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+tt+(Nt(n,14)===45?"inline-":"")+"box$3$1"+tt+"$2$3$1"+ct+"$2box$3")+n;case 100:return Ve(n,":",":"+ct)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Ve(n,"scroll-","scroll-snap-")+n}return n}function Qa(n,e){for(var t="",i=0;i<n.length;i++)t+=e(n[i],i,n,e)||"";return t}function fg(n,e,t,i){switch(n.type){case Q1:if(n.children.length)break;case K1:case $c:return n.return=n.return||n.value;case Kd:return"";case Qd:return n.return=n.value+"{"+Qa(n.children,i)+"}";case yo:if(!Nn(n.value=n.props.join(",")))return""}return Nn(t=Qa(n.children,i))?n.return=n.value+"{"+t+"}":""}function hg(n){var e=tp(n);return function(t,i,r,s){for(var a="",o=0;o<e;o++)a+=n[o](t,i,r,s)||"";return a}}function dg(n){return function(e){e.root||(e=e.return)&&n(e)}}function pg(n,e,t,i){if(n.length>-1&&!n.return)switch(n.type){case $c:n.return=ip(n.value,n.length,t);return;case Qd:return Qa([xi(n,{value:Ve(n.value,"@","@"+tt)})],i);case yo:if(n.length)return eg(t=n.props,function(r){switch(Kn(r,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":cr(xi(n,{props:[Ve(r,/:(read-\w+)/,":"+ws+"$1")]})),cr(xi(n,{props:[r]})),Xl(n,{props:Mf(t,i)});break;case"::placeholder":cr(xi(n,{props:[Ve(r,/:(plac\w+)/,":"+tt+"input-$1")]})),cr(xi(n,{props:[Ve(r,/:(plac\w+)/,":"+ws+"$1")]})),cr(xi(n,{props:[Ve(r,/:(plac\w+)/,ct+"input-$1")]})),cr(xi(n,{props:[r]})),Xl(n,{props:Mf(t,i)});break}return""})}}var mg={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},un={},Gr=typeof process<"u"&&un!==void 0&&(un.REACT_APP_SC_ATTR||un.SC_ATTR)||"data-styled",rp="active",sp="data-styled-version",bo="6.1.13",Kc=`/*!sc*/
`,Ja=typeof window<"u"&&"HTMLElement"in window,gg=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&un!==void 0&&un.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&un.REACT_APP_SC_DISABLE_SPEEDY!==""?un.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&un.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&un!==void 0&&un.SC_DISABLE_SPEEDY!==void 0&&un.SC_DISABLE_SPEEDY!==""&&un.SC_DISABLE_SPEEDY!=="false"&&un.SC_DISABLE_SPEEDY),wo=Object.freeze([]),Wr=Object.freeze({});function vg(n,e,t){return t===void 0&&(t=Wr),n.theme!==t.theme&&n.theme||e||t.theme}var ap=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),_g=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,xg=/(^-|-$)/g;function bf(n){return n.replace(_g,"-").replace(xg,"")}var yg=/(a)(d)/gi,Qs=52,wf=function(n){return String.fromCharCode(n+(n>25?39:97))};function Yl(n){var e,t="";for(e=Math.abs(n);e>Qs;e=e/Qs|0)t=wf(e%Qs)+t;return(wf(e%Qs)+t).replace(yg,"$1-$2")}var Wo,op=5381,Pr=function(n,e){for(var t=e.length;t;)n=33*n^e.charCodeAt(--t);return n},lp=function(n){return Pr(op,n)};function Mg(n){return Yl(lp(n)>>>0)}function Sg(n){return n.displayName||n.name||"Component"}function Xo(n){return typeof n=="string"&&!0}var cp=typeof Symbol=="function"&&Symbol.for,up=cp?Symbol.for("react.memo"):60115,Eg=cp?Symbol.for("react.forward_ref"):60112,bg={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},wg={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},fp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ag=((Wo={})[Eg]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Wo[up]=fp,Wo);function Af(n){return("type"in(e=n)&&e.type.$$typeof)===up?fp:"$$typeof"in n?Ag[n.$$typeof]:bg;var e}var Tg=Object.defineProperty,Rg=Object.getOwnPropertyNames,Tf=Object.getOwnPropertySymbols,Cg=Object.getOwnPropertyDescriptor,Pg=Object.getPrototypeOf,Rf=Object.prototype;function hp(n,e,t){if(typeof e!="string"){if(Rf){var i=Pg(e);i&&i!==Rf&&hp(n,i,t)}var r=Rg(e);Tf&&(r=r.concat(Tf(e)));for(var s=Af(n),a=Af(e),o=0;o<r.length;++o){var l=r[o];if(!(l in wg||t&&t[l]||a&&l in a||s&&l in s)){var c=Cg(e,l);try{Tg(n,l,c)}catch{}}}}return n}function Xr(n){return typeof n=="function"}function Qc(n){return typeof n=="object"&&"styledComponentId"in n}function ji(n,e){return n&&e?"".concat(n," ").concat(e):n||e||""}function Cf(n,e){if(n.length===0)return"";for(var t=n[0],i=1;i<n.length;i++)t+=n[i];return t}function Us(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function $l(n,e,t){if(t===void 0&&(t=!1),!t&&!Us(n)&&!Array.isArray(n))return e;if(Array.isArray(e))for(var i=0;i<e.length;i++)n[i]=$l(n[i],e[i]);else if(Us(e))for(var i in e)n[i]=$l(n[i],e[i]);return n}function Jc(n,e){Object.defineProperty(n,"toString",{value:e})}function Bs(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var Lg=function(){function n(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return n.prototype.indexOfGroup=function(e){for(var t=0,i=0;i<e;i++)t+=this.groupSizes[i];return t},n.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var i=this.groupSizes,r=i.length,s=r;e>=s;)if((s<<=1)<0)throw Bs(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(i),this.length=s;for(var a=r;a<s;a++)this.groupSizes[a]=0}for(var o=this.indexOfGroup(e+1),l=(a=0,t.length);a<l;a++)this.tag.insertRule(o,t[a])&&(this.groupSizes[e]++,o++)},n.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],i=this.indexOfGroup(e),r=i+t;this.groupSizes[e]=0;for(var s=i;s<r;s++)this.tag.deleteRule(i)}},n.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var i=this.groupSizes[e],r=this.indexOfGroup(e),s=r+i,a=r;a<s;a++)t+="".concat(this.tag.getRule(a)).concat(Kc);return t},n}(),Da=new Map,eo=new Map,Ua=1,Js=function(n){if(Da.has(n))return Da.get(n);for(;eo.has(Ua);)Ua++;var e=Ua++;return Da.set(n,e),eo.set(e,n),e},Ig=function(n,e){Ua=e+1,Da.set(n,e),eo.set(e,n)},Dg="style[".concat(Gr,"][").concat(sp,'="').concat(bo,'"]'),Ug=new RegExp("^".concat(Gr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ng=function(n,e,t){for(var i,r=t.split(","),s=0,a=r.length;s<a;s++)(i=r[s])&&n.registerName(e,i)},Fg=function(n,e){for(var t,i=((t=e.textContent)!==null&&t!==void 0?t:"").split(Kc),r=[],s=0,a=i.length;s<a;s++){var o=i[s].trim();if(o){var l=o.match(Ug);if(l){var c=0|parseInt(l[1],10),u=l[2];c!==0&&(Ig(u,c),Ng(n,u,l[3]),n.getTag().insertRules(c,r)),r.length=0}else r.push(o)}}},Pf=function(n){for(var e=document.querySelectorAll(Dg),t=0,i=e.length;t<i;t++){var r=e[t];r&&r.getAttribute(Gr)!==rp&&(Fg(n,r),r.parentNode&&r.parentNode.removeChild(r))}};function Og(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var dp=function(n){var e=document.head,t=n||e,i=document.createElement("style"),r=function(o){var l=Array.from(o.querySelectorAll("style[".concat(Gr,"]")));return l[l.length-1]}(t),s=r!==void 0?r.nextSibling:null;i.setAttribute(Gr,rp),i.setAttribute(sp,bo);var a=Og();return a&&i.setAttribute("nonce",a),t.insertBefore(i,s),i},kg=function(){function n(e){this.element=dp(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var i=document.styleSheets,r=0,s=i.length;r<s;r++){var a=i[r];if(a.ownerNode===t)return a}throw Bs(17)}(this.element),this.length=0}return n.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},n.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},n}(),zg=function(){function n(e){this.element=dp(e),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var i=document.createTextNode(t);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},n.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},n}(),Bg=function(){function n(e){this.rules=[],this.length=0}return n.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},n.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},n.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},n}(),Lf=Ja,Vg={isServer:!Ja,useCSSOMInjection:!gg},pp=function(){function n(e,t,i){e===void 0&&(e=Wr),t===void 0&&(t={});var r=this;this.options=Jt(Jt({},Vg),e),this.gs=t,this.names=new Map(i),this.server=!!e.isServer,!this.server&&Ja&&Lf&&(Lf=!1,Pf(this)),Jc(this,function(){return function(s){for(var a=s.getTag(),o=a.length,l="",c=function(p){var d=function(h){return eo.get(h)}(p);if(d===void 0)return"continue";var m=s.names.get(d),g=a.getGroup(p);if(m===void 0||!m.size||g.length===0)return"continue";var v="".concat(Gr,".g").concat(p,'[id="').concat(d,'"]'),f="";m!==void 0&&m.forEach(function(h){h.length>0&&(f+="".concat(h,","))}),l+="".concat(g).concat(v,'{content:"').concat(f,'"}').concat(Kc)},u=0;u<o;u++)c(u);return l}(r)})}return n.registerId=function(e){return Js(e)},n.prototype.rehydrate=function(){!this.server&&Ja&&Pf(this)},n.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new n(Jt(Jt({},this.options),e),this.gs,t&&this.names||void 0)},n.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var i=t.useCSSOMInjection,r=t.target;return t.isServer?new Bg(r):i?new kg(r):new zg(r)}(this.options),new Lg(e)));var e},n.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},n.prototype.registerName=function(e,t){if(Js(e),this.names.has(e))this.names.get(e).add(t);else{var i=new Set;i.add(t),this.names.set(e,i)}},n.prototype.insertRules=function(e,t,i){this.registerName(e,t),this.getTag().insertRules(Js(e),i)},n.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},n.prototype.clearRules=function(e){this.getTag().clearGroup(Js(e)),this.clearNames(e)},n.prototype.clearTag=function(){this.tag=void 0},n}(),Hg=/&/g,Gg=/^\s*\/\/.*$/gm;function mp(n,e){return n.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(i){return"".concat(e," ").concat(i)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=mp(t.children,e)),t})}function Wg(n){var e,t,i,r=Wr,s=r.options,a=s===void 0?Wr:s,o=r.plugins,l=o===void 0?wo:o,c=function(d,m,g){return g.startsWith(t)&&g.endsWith(t)&&g.replaceAll(t,"").length>0?".".concat(e):d},u=l.slice();u.push(function(d){d.type===yo&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(Hg,t).replace(i,c))}),a.prefix&&u.push(pg),u.push(fg);var p=function(d,m,g,v){m===void 0&&(m=""),g===void 0&&(g=""),v===void 0&&(v="&"),e=v,t=m,i=new RegExp("\\".concat(t,"\\b"),"g");var f=d.replace(Gg,""),h=cg(g||m?"".concat(g," ").concat(m," { ").concat(f," }"):f);a.namespace&&(h=mp(h,a.namespace));var x=[];return Qa(h,hg(u.concat(dg(function(_){return x.push(_)})))),x};return p.hash=l.length?l.reduce(function(d,m){return m.name||Bs(15),Pr(d,m.name)},op).toString():"",p}var Xg=new pp,Zl=Wg(),gp=nr.createContext({shouldForwardProp:void 0,styleSheet:Xg,stylis:Zl});gp.Consumer;nr.createContext(void 0);function If(){return Ze.useContext(gp)}var qg=function(){function n(e,t){var i=this;this.inject=function(r,s){s===void 0&&(s=Zl);var a=i.name+s.hash;r.hasNameForId(i.id,a)||r.insertRules(i.id,a,s(i.rules,a,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Jc(this,function(){throw Bs(12,String(i.name))})}return n.prototype.getName=function(e){return e===void 0&&(e=Zl),this.name+e.hash},n}(),jg=function(n){return n>="A"&&n<="Z"};function Df(n){for(var e="",t=0;t<n.length;t++){var i=n[t];if(t===1&&i==="-"&&n[0]==="-")return n;jg(i)?e+="-"+i.toLowerCase():e+=i}return e.startsWith("ms-")?"-"+e:e}var vp=function(n){return n==null||n===!1||n===""},_p=function(n){var e,t,i=[];for(var r in n){var s=n[r];n.hasOwnProperty(r)&&!vp(s)&&(Array.isArray(s)&&s.isCss||Xr(s)?i.push("".concat(Df(r),":"),s,";"):Us(s)?i.push.apply(i,Ka(Ka(["".concat(r," {")],_p(s),!1),["}"],!1)):i.push("".concat(Df(r),": ").concat((e=r,(t=s)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in mg||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return i};function tr(n,e,t,i){if(vp(n))return[];if(Qc(n))return[".".concat(n.styledComponentId)];if(Xr(n)){if(!Xr(s=n)||s.prototype&&s.prototype.isReactComponent||!e)return[n];var r=n(e);return tr(r,e,t,i)}var s;return n instanceof qg?t?(n.inject(t,i),[n.getName(i)]):[n]:Us(n)?_p(n):Array.isArray(n)?Array.prototype.concat.apply(wo,n.map(function(a){return tr(a,e,t,i)})):[n.toString()]}function Yg(n){for(var e=0;e<n.length;e+=1){var t=n[e];if(Xr(t)&&!Qc(t))return!1}return!0}var $g=lp(bo),Zg=function(){function n(e,t,i){this.rules=e,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&Yg(e),this.componentId=t,this.baseHash=Pr($g,t),this.baseStyle=i,pp.registerId(t)}return n.prototype.generateAndInjectStyles=function(e,t,i){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=ji(r,this.staticRulesId);else{var s=Cf(tr(this.rules,e,t,i)),a=Yl(Pr(this.baseHash,s)>>>0);if(!t.hasNameForId(this.componentId,a)){var o=i(s,".".concat(a),void 0,this.componentId);t.insertRules(this.componentId,a,o)}r=ji(r,a),this.staticRulesId=a}else{for(var l=Pr(this.baseHash,i.hash),c="",u=0;u<this.rules.length;u++){var p=this.rules[u];if(typeof p=="string")c+=p;else if(p){var d=Cf(tr(p,e,t,i));l=Pr(l,d+u),c+=d}}if(c){var m=Yl(l>>>0);t.hasNameForId(this.componentId,m)||t.insertRules(this.componentId,m,i(c,".".concat(m),void 0,this.componentId)),r=ji(r,m)}}return r},n}(),xp=nr.createContext(void 0);xp.Consumer;var qo={};function Kg(n,e,t){var i=Qc(n),r=n,s=!Xo(n),a=e.attrs,o=a===void 0?wo:a,l=e.componentId,c=l===void 0?function(y,T){var w=typeof y!="string"?"sc":bf(y);qo[w]=(qo[w]||0)+1;var A="".concat(w,"-").concat(Mg(bo+w+qo[w]));return T?"".concat(T,"-").concat(A):A}(e.displayName,e.parentComponentId):l,u=e.displayName,p=u===void 0?function(y){return Xo(y)?"styled.".concat(y):"Styled(".concat(Sg(y),")")}(n):u,d=e.displayName&&e.componentId?"".concat(bf(e.displayName),"-").concat(e.componentId):e.componentId||c,m=i&&r.attrs?r.attrs.concat(o).filter(Boolean):o,g=e.shouldForwardProp;if(i&&r.shouldForwardProp){var v=r.shouldForwardProp;if(e.shouldForwardProp){var f=e.shouldForwardProp;g=function(y,T){return v(y,T)&&f(y,T)}}else g=v}var h=new Zg(t,d,i?r.componentStyle:void 0);function x(y,T){return function(w,A,D){var b=w.attrs,M=w.componentStyle,L=w.defaultProps,z=w.foldedComponentIds,O=w.styledComponentId,U=w.target,X=nr.useContext(xp),H=If(),$=w.shouldForwardProp||H.shouldForwardProp,W=vg(A,X,L)||Wr,ee=function(te,pe,fe){for(var we,Ae=Jt(Jt({},pe),{className:void 0,theme:fe}),ke=0;ke<te.length;ke+=1){var ot=Xr(we=te[ke])?we(Ae):we;for(var C in ot)Ae[C]=C==="className"?ji(Ae[C],ot[C]):C==="style"?Jt(Jt({},Ae[C]),ot[C]):ot[C]}return pe.className&&(Ae.className=ji(Ae.className,pe.className)),Ae}(b,A,W),le=ee.as||U,de={};for(var Re in ee)ee[Re]===void 0||Re[0]==="$"||Re==="as"||Re==="theme"&&ee.theme===W||(Re==="forwardedAs"?de.as=ee.forwardedAs:$&&!$(Re,le)||(de[Re]=ee[Re]));var Ye=function(te,pe){var fe=If(),we=te.generateAndInjectStyles(pe,fe.styleSheet,fe.stylis);return we}(M,ee),j=ji(z,O);return Ye&&(j+=" "+Ye),ee.className&&(j+=" "+ee.className),de[Xo(le)&&!ap.has(le)?"class":"className"]=j,de.ref=D,Ze.createElement(le,de)}(_,y,T)}x.displayName=p;var _=nr.forwardRef(x);return _.attrs=m,_.componentStyle=h,_.displayName=p,_.shouldForwardProp=g,_.foldedComponentIds=i?ji(r.foldedComponentIds,r.styledComponentId):"",_.styledComponentId=d,_.target=i?r.target:n,Object.defineProperty(_,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(y){this._foldedDefaultProps=i?function(T){for(var w=[],A=1;A<arguments.length;A++)w[A-1]=arguments[A];for(var D=0,b=w;D<b.length;D++)$l(T,b[D],!0);return T}({},r.defaultProps,y):y}}),Jc(_,function(){return".".concat(_.styledComponentId)}),s&&hp(_,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),_}function Uf(n,e){for(var t=[n[0]],i=0,r=e.length;i<r;i+=1)t.push(e[i],n[i+1]);return t}var Nf=function(n){return Object.assign(n,{isCss:!0})};function Qg(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(Xr(n)||Us(n))return Nf(tr(Uf(wo,Ka([n],e,!0))));var i=n;return e.length===0&&i.length===1&&typeof i[0]=="string"?tr(i):Nf(tr(Uf(i,e)))}function Kl(n,e,t){if(t===void 0&&(t=Wr),!e)throw Bs(1,e);var i=function(r){for(var s=[],a=1;a<arguments.length;a++)s[a-1]=arguments[a];return n(e,t,Qg.apply(void 0,Ka([r],s,!1)))};return i.attrs=function(r){return Kl(n,e,Jt(Jt({},t),{attrs:Array.prototype.concat(t.attrs,r).filter(Boolean)}))},i.withConfig=function(r){return Kl(n,e,Jt(Jt({},t),r))},i}var yp=function(n){return Kl(Kg,n)},xt=yp;ap.forEach(function(n){xt[n]=yp(n)});const Ft=xt.button`
	background-color: rgba(255, 255, 255, 0.3);
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	color: white;
	border-radius: 2px;
	font-size: 14px;
	height: 24px;
	min-width: 24px;
	transition: all 0.2s ease-in-out;
	margin: 0 1px;
	text-transform: none;
	box-shadow: none;
	font-family: Arial, sans-serif;

	&:hover {
		background-color: rgba(255, 255, 255, 0.5);
	}

	&:active {
		background-color: rgba(255, 255, 255, 0.6);
	}

	&:first-child {
		border-radius: ${({$reverse:n})=>n?"2px 8px 8px 2px":"8px 2px 2px 8px"};
	}

	&:last-child {
		border-radius: ${({$reverse:n})=>n?"8px 2px 2px 8px":"2px 8px 8px 2px"};
	}
`,Yt=xt.div`
	background-color: ${({$pressed:n})=>n?"rgba(255, 255, 255, 0.6)":"rgba(255, 255, 255, 0.3)"};
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	border-radius: 5px;
	font-size: 14px;
	font-family: Arial, sans-serif;
	height: 20px;
	width: 20px;
	transition: all 0.2s ease-in-out;
`,Mp=xt.div`
	display: flex;
	align-items: center;
	height: 24px;
	margin-bottom: 2px;
	justify-content: flex-start;
	flex-direction: ${({$reverse:n})=>n?"row-reverse":"row"};
`,qr=xt.div`
	display: flex;
	flex-direction: ${({$reverse:n})=>n?"row-reverse":"row"};
	height: 100%;
	justify-content: space-between;
	align-items: center;
`;xt.button`
	background-color: rgba(255, 255, 255, 0.3);
	border: none;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0;
	pointer-events: none;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	position: relative;
	margin: 0 5px;
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
`;xt.div`
	position: absolute;
	background-color: white;
	border-radius: 50%;
	width: 36px;
	height: 36px;
	cursor: pointer;
	pointer-events: auto;
`;const Sp=xt.input.attrs({type:"range"})`
	-webkit-appearance: none;
	appearance: none;
	background-color: rgba(255, 255, 255, 0.3);
	border: none;
	height: 100%;
	width: 49px;
	cursor: pointer;
	margin: 0 1px;
	transition: all 0.2s ease-in-out;
	border-radius: ${({$reverse:n})=>n?"8px 2px 2px 8px":"2px 8px 8px 2px"};

	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 8px;
		height: 24px;
		background-color: white;
		border-radius: 3px;
	}

	&::-moz-range-thumb {
		width: 8px;
		height: 24px;
		background-color: white;
		border-radius: 3px;
	}

	&::-ms-thumb {
		width: 8px;
		height: 24px;
		background-color: white;
		border-radius: 3px;
	}
`,Jg=xt.div`
	display: flex;
	flex-direction: column;
	align-items: ${({$reverse:n})=>n?"flex-start":"flex-end"};
	justify-content: center;
	margin: ${({$reverse:n})=>n?"2px -26px 0 0":"2px 0 0 -26px"};
`,Ff=xt.div`
	display: flex;
	flex-direction: ${({$reverse:n})=>n?"row-reverse":"row"};
	align-items: center;
	justify-content: center;
`;xt.div`
	display: flex;
	flex-direction: column;
	height: 50px;
	justify-content: space-between;
`;const Et=xt(Ds)`
	height: 14px;
	min-height: 14px;
	max-height: 14px;
	width: 14px;
	min-width: 14px;
	max-width: 14px;
`,e2=()=>P.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[P.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M7 13.125a7 7 0 1 0 14 0v1.75a7 7 0 0 1-14 0v-1.75Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}}),P.jsx("path",{stroke:"#fff",strokeWidth:.55,d:"M14 19.863a6.738 6.738 0 1 0 0-13.476 6.738 6.738 0 0 0 0 13.476Z",style:{stroke:"#fff",strokeOpacity:1}}),P.jsx("path",{fill:"#fff",d:"M16.529 16.1h-.893l-1.653-2.713-1.68 2.713h-.832l2.074-3.255-1.942-2.992h.875l1.531 2.45 1.54-2.45h.831l-1.933 2.975 2.082 3.272Z",style:{fill:"#fff",fillOpacity:1}})]}),t2=()=>P.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[P.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M7 13.125a7 7 0 1 0 14 0v1.75a7 7 0 0 1-14 0v-1.75Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}}),P.jsx("path",{stroke:"#fff",strokeWidth:.55,d:"M14 19.863a6.738 6.738 0 1 0 0-13.476 6.738 6.738 0 0 0 0 13.476Z",style:{stroke:"#fff",strokeOpacity:1}}),P.jsx("path",{fill:"#fff",d:"m14.086 12.924 1.627-3.071h.849l-2.083 3.823V16.1h-.787v-2.389L11.61 9.853h.857l1.619 3.07Z",style:{fill:"#fff",fillOpacity:1}})]}),n2=()=>P.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[P.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M7 13.125a7 7 0 1 0 14 0v1.75a7 7 0 0 1-14 0v-1.75Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}}),P.jsx("path",{stroke:"#fff",strokeWidth:.55,d:"M14 19.863a6.738 6.738 0 1 0 0-13.476 6.738 6.738 0 0 0 0 13.476Z",style:{stroke:"#fff",strokeOpacity:1}}),P.jsx("path",{fill:"#fff",d:"m15.975 16.1-.753-1.934h-2.476l-.744 1.934h-.796l2.441-6.274h.709l2.432 6.274h-.813Zm-1.69-4.524a29.052 29.052 0 0 1-.21-.63 5.175 5.175 0 0 0-.087-.306c-.029.117-.06.236-.096.359-.03.116-.061.224-.096.323-.03.1-.056.184-.079.254l-.709 1.89h1.978l-.7-1.89Z",style:{fill:"#fff",fillOpacity:1}})]}),i2=()=>P.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[P.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M7 13.125a7 7 0 1 0 14 0v1.75a7 7 0 0 1-14 0v-1.75Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}}),P.jsx("path",{stroke:"#fff",strokeWidth:.55,d:"M14 19.863a6.738 6.738 0 1 0 0-13.476 6.738 6.738 0 0 0 0 13.476Z",style:{stroke:"#fff",strokeOpacity:1}}),P.jsx("path",{fill:"#fff",d:"M13.876 9.853c.519 0 .954.05 1.304.148.355.1.62.263.796.49.18.228.271.531.271.91 0 .245-.047.464-.14.656a1.198 1.198 0 0 1-.402.473 1.62 1.62 0 0 1-.648.254v.043c.262.041.499.117.709.228.216.11.385.268.507.473.123.204.184.47.184.796 0 .379-.088.703-.262.971a1.663 1.663 0 0 1-.753.604c-.32.134-.706.201-1.155.201h-2.196V9.853h1.785Zm.157 2.66c.537 0 .905-.085 1.103-.254.198-.175.297-.432.297-.77 0-.344-.122-.59-.367-.735-.24-.152-.624-.228-1.155-.228h-1.033v1.986h1.155Zm-1.155.656v2.266h1.26c.555 0 .94-.108 1.155-.324.216-.216.324-.498.324-.849 0-.221-.05-.414-.149-.577-.093-.163-.254-.289-.481-.376-.222-.093-.525-.14-.91-.14h-1.199Z",style:{fill:"#fff",fillOpacity:1}})]}),r2=()=>P.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[P.jsx("path",{stroke:"#fff",strokeWidth:.5,d:"M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z",style:{stroke:"#fff",strokeOpacity:1}}),P.jsx("path",{fill:"#fff",d:"M12.642 17.325v-6.247h.787v5.547h2.73v.7h-3.517ZM14.479 6.389a.525.525 0 0 1-.782 0l-2.235-2.495a.525.525 0 0 1 .39-.875h4.47c.454 0 .694.537.391.875L14.478 6.39Z",style:{fill:"#fff",fillOpacity:1}}),P.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"m13.045 6.711-1.093-1.22a8.75 8.75 0 1 0 4.24.036L15.11 6.733A7.352 7.352 0 0 1 14 21.35a7.35 7.35 0 0 1-.955-14.639Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}})]}),s2=()=>P.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[P.jsx("path",{stroke:"#fff",strokeWidth:.7,d:"M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z",style:{stroke:"#fff",strokeOpacity:1}}),P.jsx("path",{fill:"#fff",d:"M13.938 11.077c.52 0 .945.068 1.278.202.338.128.59.323.752.586.164.262.245.592.245.989 0 .332-.06.61-.183.83-.123.223-.28.4-.473.535a2.61 2.61 0 0 1-.595.306l1.715 2.8h-.919l-1.513-2.581h-1.243v2.58h-.787v-6.247h1.723Zm-.043.683h-.893v2.319h.936c.339 0 .616-.044.832-.132a.956.956 0 0 0 .472-.402c.105-.175.158-.394.158-.656 0-.274-.056-.493-.167-.657a.905.905 0 0 0-.49-.358c-.221-.076-.504-.114-.848-.114ZM14.479 6.389a.525.525 0 0 1-.782 0l-2.235-2.495a.525.525 0 0 1 .39-.875h4.47c.454 0 .694.537.391.875L14.478 6.39Z",style:{fill:"#fff",fillOpacity:1}}),P.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"m13.045 6.711-1.093-1.22a8.75 8.75 0 1 0 4.24.036L15.11 6.733A7.352 7.352 0 0 1 14 21.35a7.35 7.35 0 0 1-.955-14.639Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}})]}),a2=()=>P.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[P.jsx("path",{stroke:"#fff",strokeWidth:1.5,d:"M14 22.05a8.05 8.05 0 1 0 0-16.1 8.05 8.05 0 0 0 0 16.1Z",style:{stroke:"#fff",strokeOpacity:1}}),P.jsx("path",{stroke:"#fff",strokeWidth:.75,d:"M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z",style:{stroke:"#fff",strokeOpacity:1}}),P.jsx("path",{fill:"#fff",d:"M12.642 17.325v-6.248h.787v5.548h2.73v.7h-3.517ZM13.697.611a.525.525 0 0 1 .782 0l2.234 2.495a.525.525 0 0 1-.39.875h-4.47a.525.525 0 0 1-.391-.875L13.697.61Z",style:{fill:"#fff",fillOpacity:1}})]}),o2=()=>P.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[P.jsx("path",{stroke:"#fff",strokeWidth:1.5,d:"M14 22.05a8.05 8.05 0 1 0 0-16.1 8.05 8.05 0 0 0 0 16.1Z",style:{stroke:"#fff",strokeOpacity:1}}),P.jsx("path",{stroke:"#fff",strokeWidth:.75,d:"M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z",style:{stroke:"#fff",strokeOpacity:1}}),P.jsx("path",{fill:"#fff",d:"M12.642 17.325v-6.248h.787v5.548h2.73v.7h-3.517ZM14.479 27.389a.525.525 0 0 1-.782 0l-2.235-2.495a.525.525 0 0 1 .39-.875h4.47c.454 0 .694.537.391.875l-2.235 2.495Z",style:{fill:"#fff",fillOpacity:1}})]}),l2=()=>P.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[P.jsx("path",{stroke:"#fff",strokeWidth:1.5,d:"M14 22.05a8.05 8.05 0 1 0 0-16.1 8.05 8.05 0 0 0 0 16.1Z",style:{stroke:"#fff",strokeOpacity:1}}),P.jsx("path",{stroke:"#fff",strokeWidth:.75,d:"M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z",style:{stroke:"#fff",strokeOpacity:1}}),P.jsx("path",{fill:"#fff",d:"M12.642 17.325v-6.248h.787v5.548h2.73v.7h-3.517ZM.611 14.303a.525.525 0 0 1 0-.782l2.495-2.234a.525.525 0 0 1 .875.39v4.47a.525.525 0 0 1-.875.391L.61 14.303Z",style:{fill:"#fff",fillOpacity:1}})]}),c2=()=>P.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[P.jsx("path",{stroke:"#fff",strokeWidth:1.5,d:"M14 22.05a8.05 8.05 0 1 0 0-16.1 8.05 8.05 0 0 0 0 16.1Z",style:{stroke:"#fff",strokeOpacity:1}}),P.jsx("path",{stroke:"#fff",strokeWidth:.75,d:"M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z",style:{stroke:"#fff",strokeOpacity:1}}),P.jsx("path",{fill:"#fff",d:"M12.642 17.325v-6.248h.787v5.548h2.73v.7h-3.517ZM27.389 13.521a.525.525 0 0 1 0 .782l-2.495 2.235a.525.525 0 0 1-.875-.39v-4.47c0-.454.537-.694.875-.391l2.495 2.234Z",style:{fill:"#fff",fillOpacity:1}})]}),u2=()=>P.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[P.jsx("path",{stroke:"#fff",strokeWidth:1.5,d:"M14 22.05a8.05 8.05 0 1 0 0-16.1 8.05 8.05 0 0 0 0 16.1Z",style:{stroke:"#fff",strokeOpacity:1}}),P.jsx("path",{stroke:"#fff",strokeWidth:.75,d:"M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z",style:{stroke:"#fff",strokeOpacity:1}}),P.jsx("path",{fill:"#fff",d:"M13.938 11.077c.52 0 .945.068 1.278.202.338.128.59.323.752.586.164.262.245.592.245.989 0 .332-.06.61-.183.83-.123.223-.28.4-.473.535a2.61 2.61 0 0 1-.595.306l1.715 2.8h-.919l-1.513-2.581h-1.243v2.58h-.787v-6.247h1.723Zm-.043.683h-.893v2.319h.936c.339 0 .616-.044.832-.132a.956.956 0 0 0 .472-.402c.105-.175.158-.394.158-.656 0-.274-.056-.493-.167-.657a.905.905 0 0 0-.49-.358c-.221-.076-.504-.114-.848-.114ZM13.697.611a.525.525 0 0 1 .782 0l2.234 2.495a.525.525 0 0 1-.39.875h-4.47a.525.525 0 0 1-.391-.875L13.697.61Z",style:{fill:"#fff",fillOpacity:1}})]}),f2=()=>P.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[P.jsx("path",{stroke:"#fff",strokeWidth:1.5,d:"M14 22.05a8.05 8.05 0 1 0 0-16.1 8.05 8.05 0 0 0 0 16.1Z",style:{stroke:"#fff",strokeOpacity:1}}),P.jsx("path",{stroke:"#fff",strokeWidth:.75,d:"M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z",style:{stroke:"#fff",strokeOpacity:1}}),P.jsx("path",{fill:"#fff",d:"M13.938 11.077c.52 0 .945.068 1.278.202.338.128.59.323.752.586.164.262.245.592.245.989 0 .332-.06.61-.183.83-.123.223-.28.4-.473.535a2.61 2.61 0 0 1-.595.306l1.715 2.8h-.919l-1.513-2.581h-1.243v2.58h-.787v-6.247h1.723Zm-.043.683h-.893v2.319h.936c.339 0 .616-.044.832-.132a.956.956 0 0 0 .472-.402c.105-.175.158-.394.158-.656 0-.274-.056-.493-.167-.657a.905.905 0 0 0-.49-.358c-.221-.076-.504-.114-.848-.114ZM14.479 27.389a.525.525 0 0 1-.782 0l-2.235-2.495a.525.525 0 0 1 .39-.875h4.47c.454 0 .694.537.391.875l-2.235 2.495Z",style:{fill:"#fff",fillOpacity:1}})]}),h2=()=>P.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[P.jsx("path",{stroke:"#fff",strokeWidth:1.5,d:"M14 22.05a8.05 8.05 0 1 0 0-16.1 8.05 8.05 0 0 0 0 16.1Z",style:{stroke:"#fff",strokeOpacity:1}}),P.jsx("path",{stroke:"#fff",strokeWidth:.75,d:"M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z",style:{stroke:"#fff",strokeOpacity:1}}),P.jsx("path",{fill:"#fff",d:"M13.938 11.077c.52 0 .945.068 1.278.202.338.128.59.323.752.586.164.262.245.592.245.989 0 .332-.06.61-.183.83-.123.223-.28.4-.473.535a2.61 2.61 0 0 1-.595.306l1.715 2.8h-.919l-1.513-2.581h-1.243v2.58h-.787v-6.247h1.723Zm-.043.683h-.893v2.319h.936c.339 0 .616-.044.832-.132a.956.956 0 0 0 .472-.402c.105-.175.158-.394.158-.656 0-.274-.056-.493-.167-.657a.905.905 0 0 0-.49-.358c-.221-.076-.504-.114-.848-.114ZM.611 14.303a.525.525 0 0 1 0-.782l2.495-2.234a.525.525 0 0 1 .875.39v4.47a.525.525 0 0 1-.875.391L.61 14.303Z",style:{fill:"#fff",fillOpacity:1}})]}),d2=()=>P.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[P.jsx("path",{stroke:"#fff",strokeWidth:1.5,d:"M14 22.05a8.05 8.05 0 1 0 0-16.1 8.05 8.05 0 0 0 0 16.1Z",style:{stroke:"#fff",strokeOpacity:1}}),P.jsx("path",{stroke:"#fff",strokeWidth:.75,d:"M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z",style:{stroke:"#fff",strokeOpacity:1}}),P.jsx("path",{fill:"#fff",d:"M13.938 11.077c.52 0 .945.068 1.278.202.338.128.59.323.752.586.164.262.245.592.245.989 0 .332-.06.61-.183.83-.123.223-.28.4-.473.535a2.61 2.61 0 0 1-.595.306l1.715 2.8h-.919l-1.513-2.581h-1.243v2.58h-.787v-6.247h1.723Zm-.043.683h-.893v2.319h.936c.339 0 .616-.044.832-.132a.956.956 0 0 0 .472-.402c.105-.175.158-.394.158-.656 0-.274-.056-.493-.167-.657a.905.905 0 0 0-.49-.358c-.221-.076-.504-.114-.848-.114ZM27.389 13.521a.525.525 0 0 1 0 .782l-2.495 2.235a.525.525 0 0 1-.875-.39v-4.47c0-.454.537-.694.875-.391l2.495 2.234Z",style:{fill:"#fff",fillOpacity:1}})]}),p2=()=>P.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[P.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M7.525 7.875c-2.283 1.22-3.82 3.507-3.82 6.125s1.537 4.904 3.82 6.125C4.405 19.425 2.1 16.948 2.1 14s2.306-5.425 5.425-6.125Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}}),P.jsx("path",{stroke:"#fff",strokeWidth:.7,d:"M24.702 10.954a2.187 2.187 0 0 0-2.095-2.817H11.025a5.863 5.863 0 0 0 0 11.726h9.377c.966 0 1.818-.634 2.095-1.56l2.205-7.35Z",style:{stroke:"#fff",strokeOpacity:1}}),P.jsx("path",{fill:"#fff",d:"M10.594 17.15v-6.248h.788v5.548h2.73v.7h-3.518Zm7.13-3.299h2.162v3.063c-.338.11-.68.192-1.024.245a7.837 7.837 0 0 1-1.172.078c-.648 0-1.193-.128-1.637-.385a2.567 2.567 0 0 1-1.015-1.11c-.227-.485-.34-1.057-.34-1.716 0-.653.127-1.219.384-1.697a2.699 2.699 0 0 1 1.103-1.112c.484-.268 1.067-.402 1.75-.402.35 0 .68.032.988.096.315.064.607.155.875.271l-.297.683a4.55 4.55 0 0 0-.753-.254 3.453 3.453 0 0 0-.857-.105c-.496 0-.922.102-1.278.306a2.004 2.004 0 0 0-.813.875c-.187.374-.28.82-.28 1.34 0 .495.078.935.236 1.32.163.38.417.677.761.893.344.21.796.315 1.356.315.187 0 .35-.006.49-.018.146-.017.277-.037.394-.06.123-.024.236-.047.341-.07V14.55h-1.373v-.7Z",style:{fill:"#fff",fillOpacity:1}})]}),m2=()=>P.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[P.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M20.441 7.875c2.283 1.22 3.82 3.507 3.82 6.125s-1.537 4.904-3.82 6.125c3.12-.7 5.425-3.177 5.425-6.125s-2.305-5.425-5.425-6.125Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}}),P.jsx("path",{stroke:"#fff",strokeWidth:.7,d:"M3.264 10.954a2.187 2.187 0 0 1 2.095-2.817h11.582a5.862 5.862 0 0 1 0 11.726H7.564a2.188 2.188 0 0 1-2.095-1.56l-2.205-7.35Z",style:{stroke:"#fff",strokeOpacity:1}}),P.jsx("path",{fill:"#fff",d:"M9.497 10.902c.519 0 .945.068 1.277.202.339.128.59.323.753.586.163.262.245.592.245.989 0 .332-.062.61-.184.83-.122.223-.28.4-.472.535-.187.128-.386.23-.595.306l1.714 2.8h-.918l-1.514-2.581H8.56v2.58h-.787v-6.247h1.724Zm-.044.683H8.56v2.319h.937c.338 0 .615-.044.831-.132a.956.956 0 0 0 .473-.402c.104-.175.157-.394.157-.656 0-.274-.055-.493-.166-.657a.905.905 0 0 0-.49-.358c-.222-.076-.505-.114-.849-.114Zm6.476 2.266h2.16v3.063c-.337.11-.679.192-1.023.245a7.837 7.837 0 0 1-1.172.078c-.648 0-1.193-.128-1.637-.385a2.568 2.568 0 0 1-1.015-1.11c-.227-.485-.34-1.057-.34-1.716 0-.653.127-1.219.384-1.697a2.699 2.699 0 0 1 1.103-1.112c.484-.268 1.067-.402 1.75-.402.35 0 .68.032.988.096.315.064.607.155.875.271l-.297.683a4.551 4.551 0 0 0-.753-.254 3.453 3.453 0 0 0-.857-.105c-.496 0-.922.102-1.278.306a2.004 2.004 0 0 0-.813.875c-.187.374-.28.82-.28 1.34 0 .495.078.935.236 1.32.163.38.417.677.761.893.344.21.796.315 1.356.315.187 0 .35-.006.49-.018a5.17 5.17 0 0 0 .394-.06c.123-.024.236-.047.341-.07V14.55H15.93v-.7Z",style:{fill:"#fff",fillOpacity:1}})]}),g2=()=>P.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[P.jsx("path",{stroke:"#fff",strokeWidth:.7,d:"M14 20.212a7.612 7.612 0 1 0 0-15.224 7.612 7.612 0 0 0 0 15.224Z",style:{stroke:"#fff",strokeOpacity:1}}),P.jsx("path",{fill:"#fff",d:"M10.209 15.662V9.415h.787v5.548h2.73v.7H10.21Zm6.395 0h-.787v-5.556h-1.952v-.691h4.682v.691h-1.943v5.556Z",style:{fill:"#fff",fillOpacity:1}}),P.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M21.235 17.5a8.31 8.31 0 0 1-7.205 4.165A8.31 8.31 0 0 1 6.825 17.5c.823 3.4 3.737 5.915 7.205 5.915 3.469 0 6.382-2.514 7.205-5.915Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}})]}),v2=()=>P.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[P.jsx("path",{stroke:"#fff",strokeWidth:.7,d:"M14 20.212a7.612 7.612 0 1 0 0-15.224 7.612 7.612 0 0 0 0 15.224Z",style:{stroke:"#fff",strokeOpacity:1}}),P.jsx("path",{fill:"#fff",d:"M11.42 9.415c.52 0 .945.067 1.277.201.339.129.59.324.753.587.163.262.245.592.245.988 0 .333-.061.61-.184.832-.122.221-.28.4-.472.533-.187.129-.385.23-.595.307l1.715 2.8h-.92l-1.513-2.582h-1.242v2.582h-.788V9.415h1.724Zm-.044.683h-.892v2.318h.936c.338 0 .615-.043.831-.131a.956.956 0 0 0 .473-.402c.105-.175.157-.394.157-.657 0-.274-.055-.493-.166-.656a.905.905 0 0 0-.49-.359c-.222-.075-.505-.114-.849-.114Zm5.74 5.564h-.787v-5.556h-1.951v-.691h4.681v.691h-1.942v5.556Z",style:{fill:"#fff",fillOpacity:1}}),P.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M21.235 17.5a8.31 8.31 0 0 1-7.205 4.165A8.31 8.31 0 0 1 6.825 17.5c.823 3.4 3.737 5.915 7.205 5.915 3.469 0 6.382-2.514 7.205-5.915Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}})]}),_2=()=>P.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[P.jsx("path",{stroke:"#fff",d:"m20.01 15.768-4.242 4.242a5.5 5.5 0 1 1-7.778-7.778l4.242-4.242a5.5 5.5 0 1 1 7.778 7.778Z",style:{stroke:"#fff",strokeOpacity:1}}),P.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M11.172 16.828a1 1 0 0 0 1.414 0L15.414 14l.707.707-2.828 2.828a2 2 0 1 1-2.829-2.828l.708.707a1 1 0 0 0 0 1.414ZM12.586 14l2.828-2.829a1 1 0 1 1 1.414 1.415l.708.707a2 2 0 0 0-2.829-2.829l-2.828 2.829.707.707Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}}),P.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M15.414 16.828 18.243 14a3 3 0 0 0-2.289-5.117l-.869-.869a4 4 0 0 1 3.864 6.693l-2.828 2.828-.707-.707Zm-.707 2.122a4 4 0 1 1-5.657-5.657l4.243-4.243.707.707L9.757 14A3 3 0 1 0 14 18.242l.707.708Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}})]}),x2=()=>P.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[P.jsx("path",{stroke:"#fff",d:"m15.768 7.99 4.242 4.242a5.5 5.5 0 1 1-7.778 7.778L7.99 15.768a5.5 5.5 0 1 1 7.778-7.778Z",style:{stroke:"#fff",strokeOpacity:1}}),P.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M16.828 16.828a1 1 0 0 0 0-1.414L14 12.586l.707-.707 2.828 2.828a2 2 0 1 1-2.828 2.828l.707-.707a1 1 0 0 0 1.414 0ZM14 15.414l-2.828-2.828a1 1 0 0 1 1.414-1.414l.707-.708a2 2 0 0 0-2.829 2.829l2.829 2.828.707-.707Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}}),P.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M16.828 12.586 14 9.757a3 3 0 0 0-5.117 2.289l-.869.869a4 4 0 0 1 6.693-3.864l2.828 2.828-.707.707Zm2.122.707a4 4 0 1 1-5.657 5.657L9.05 14.707 9.757 14 14 18.243A3 3 0 1 0 18.243 14l.707-.707Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}})]}),y2={"x-button-left":e2,"y-button-left":t2,"a-button-right":n2,"b-button-right":i2,"thumbstick-left":r2,"thumbstick-up-left":a2,"thumbstick-down-left":o2,"thumbstick-right-left":c2,"thumbstick-left-left":l2,"thumbstick-right":s2,"thumbstick-up-right":u2,"thumbstick-down-right":f2,"thumbstick-right-right":d2,"thumbstick-left-right":h2,"trigger-left":g2,"trigger-right":v2,"squeeze-left":p2,"squeeze-right":m2,"thumbrest-left":_2,"thumbrest-right":x2},Ns=({buttonName:n,handedness:e})=>{const t=`${n}-${e}`,i=y2[t];return i?P.jsx(i,{}):P.jsx("div",{style:{width:"28px",height:"28px"}})},M2=()=>P.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:P.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M1 11.2A5.2 5.2 0 0 1 6.2 6h15.6a5.2 5.2 0 0 1 5.2 5.2v5.2a5.2 5.2 0 0 1-5.2 5.2h-3.109c-1.149 0-2.199-.65-2.713-1.677l-.199-.398a1.733 1.733 0 0 0-1.55-.958h-.458c-.656 0-1.257.37-1.55.958l-.2.398A3.033 3.033 0 0 1 9.31 21.6H6.2A5.2 5.2 0 0 1 1 16.4v-5.2Zm9.1 2.167a2.6 2.6 0 1 1-5.2 0 2.6 2.6 0 0 1 5.2 0Zm15.538-1.426a.498.498 0 0 0 .141-.542l.002-.002a5.456 5.456 0 0 0-.347-.755l-.104-.178a5.586 5.586 0 0 0-.486-.686.502.502 0 0 0-.54-.15l-1.225.39a4.234 4.234 0 0 0-.968-.56l-.275-1.256a.497.497 0 0 0-.4-.392 5.686 5.686 0 0 0-1.871.003.497.497 0 0 0-.4.391l-.276 1.257a4.234 4.234 0 0 0-.968.559l-1.226-.39a.498.498 0 0 0-.539.15 5.586 5.586 0 0 0-.486.686l-.104.179c-.134.242-.25.492-.347.754a.498.498 0 0 0 .14.542l.953.867a4.26 4.26 0 0 0 0 1.12l-.952.867a.498.498 0 0 0-.141.541c.097.262.213.513.347.755l.104.178c.145.242.308.471.486.687.13.156.346.211.54.15l1.223-.392c.295.226.62.416.968.559l.275 1.256c.044.2.198.359.4.392a5.686 5.686 0 0 0 1.871 0 .497.497 0 0 0 .4-.392l.276-1.256c.347-.143.673-.333.968-.56l1.225.39c.194.062.41.009.54-.15a5.59 5.59 0 0 0 .486-.686l.103-.178a5.45 5.45 0 0 0 .348-.755.498.498 0 0 0-.14-.541l-.954-.867a4.258 4.258 0 0 0 0-1.118l.953-.867ZM20.5 15.967a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}})}),S2=()=>P.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:12,height:16,fill:"none",children:[P.jsx("g",{clipPath:"url(#a)",children:P.jsx("path",{stroke:"#fff",d:"M.5 6.5H6m-5.5 0V5C.5 2.237 2.237.5 5 .5h1m-5.5 6V11c0 2.762 1.737 4.5 4.5 4.5h2c2.762 0 4.5-1.738 4.5-4.5V6.5M6 6.5v-6m0 6h5.5M6 .5h1c2.762 0 4.5 1.737 4.5 4.5v1.5",style:{stroke:"#fff",strokeOpacity:1}})}),P.jsx("path",{fill:"#fff",d:"M.5 6.5H6v-6H5C2.237.5.5 2.237.5 5v1.5Z",style:{fill:"#fff",fillOpacity:1}}),P.jsx("defs",{children:P.jsx("clipPath",{id:"a",children:P.jsx("path",{fill:"#fff",d:"M0 0h12v16H0z",style:{fill:"#fff",fillOpacity:1}})})})]}),E2=()=>P.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:12,height:16,fill:"none",children:[P.jsx("g",{clipPath:"url(#a)",children:P.jsx("path",{stroke:"#fff",d:"M.5 6.5H6m-5.5 0V5C.5 2.237 2.237.5 5 .5h1m-5.5 6V11c0 2.762 1.737 4.5 4.5 4.5h2c2.762 0 4.5-1.738 4.5-4.5V6.5M6 6.5v-6m0 6h5.5M6 .5h1c2.762 0 4.5 1.737 4.5 4.5v1.5",style:{stroke:"#fff",strokeOpacity:1}})}),P.jsx("path",{fill:"#fff",d:"M11.5 6.5H6v-6h1c2.762 0 4.5 1.737 4.5 4.5v1.5Z",style:{fill:"#fff",fillOpacity:1}}),P.jsx("defs",{children:P.jsx("clipPath",{id:"a",children:P.jsx("path",{fill:"#fff",d:"M0 0h12v16H0z",style:{fill:"#fff",fillOpacity:1}})})})]}),b2={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"]},eu={prefix:"fas",iconName:"fingerprint",icon:[512,512,[],"f577","M48 256C48 141.1 141.1 48 256 48c63.1 0 119.6 28.1 157.8 72.5c8.6 10.1 23.8 11.2 33.8 2.6s11.2-23.8 2.6-33.8C403.3 34.6 333.7 0 256 0C114.6 0 0 114.6 0 256l0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40zm458.5-52.9c-2.7-13-15.5-21.3-28.4-18.5s-21.3 15.5-18.5 28.4c2.9 13.9 4.5 28.3 4.5 43.1l0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40c0-18.1-1.9-35.8-5.5-52.9zM256 80c-19 0-37.4 3-54.5 8.6c-15.2 5-18.7 23.7-8.3 35.9c7.1 8.3 18.8 10.8 29.4 7.9c10.6-2.9 21.8-4.4 33.4-4.4c70.7 0 128 57.3 128 128l0 24.9c0 25.2-1.5 50.3-4.4 75.3c-1.7 14.6 9.4 27.8 24.2 27.8c11.8 0 21.9-8.6 23.3-20.3c3.3-27.4 5-55 5-82.7l0-24.9c0-97.2-78.8-176-176-176zM150.7 148.7c-9.1-10.6-25.3-11.4-33.9-.4C93.7 178 80 215.4 80 256l0 24.9c0 24.2-2.6 48.4-7.8 71.9C68.8 368.4 80.1 384 96.1 384c10.5 0 19.9-7 22.2-17.3c6.4-28.1 9.7-56.8 9.7-85.8l0-24.9c0-27.2 8.5-52.4 22.9-73.1c7.2-10.4 8-24.6-.2-34.2zM256 160c-53 0-96 43-96 96l0 24.9c0 35.9-4.6 71.5-13.8 106.1c-3.8 14.3 6.7 29 21.5 29c9.5 0 17.9-6.2 20.4-15.4c10.5-39 15.9-79.2 15.9-119.7l0-24.9c0-28.7 23.3-52 52-52s52 23.3 52 52l0 24.9c0 36.3-3.5 72.4-10.4 107.9c-2.7 13.9 7.7 27.2 21.8 27.2c10.2 0 19-7 21-17c7.7-38.8 11.6-78.3 11.6-118.1l0-24.9c0-53-43-96-96-96zm24 96c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 24.9c0 59.9-11 119.3-32.5 175.2l-5.9 15.3c-4.8 12.4 1.4 26.3 13.8 31s26.3-1.4 31-13.8l5.9-15.3C267.9 411.9 280 346.7 280 280.9l0-24.9z"]},w2={prefix:"fas",iconName:"caret-right",icon:[256,512,[],"f0da","M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"]},A2={prefix:"fas",iconName:"caret-left",icon:[256,512,[],"f0d9","M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"]},Of={prefix:"fas",iconName:"ban",icon:[512,512,[128683,"cancel"],"f05e","M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"]},T2={prefix:"fas",iconName:"arrow-right-to-bracket",icon:[512,512,["sign-in"],"f090","M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"]},Ep={prefix:"fas",iconName:"caret-up",icon:[320,512,[],"f0d8","M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"]},R2={prefix:"fas",iconName:"rotate-left",icon:[512,512,["rotate-back","rotate-backward","undo-alt"],"f2ea","M48.5 224L40 224c-13.3 0-24-10.7-24-24L16 72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8L48.5 224z"]},C2={prefix:"fas",iconName:"circle-play",icon:[512,512,[61469,"play-circle"],"f144","M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"]},P2={prefix:"fas",iconName:"square-arrow-up-right",icon:[448,512,["external-link-square"],"f14c","M384 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0zM160 144c-13.3 0-24 10.7-24 24s10.7 24 24 24l94.1 0L119 327c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135L288 328c0 13.3 10.7 24 24 24s24-10.7 24-24l0-160c0-13.3-10.7-24-24-24l-152 0z"]},L2={prefix:"fas",iconName:"keyboard",icon:[576,512,[9e3],"f11c","M64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zm16 64l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM64 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm16 80l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80-176c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm16 80l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM160 336c0-8.8 7.2-16 16-16l224 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-224 0c-8.8 0-16-7.2-16-16l0-32zM272 128l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM256 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM368 128l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM352 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM464 128l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM448 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm16 80l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z"]},bp={prefix:"fas",iconName:"caret-down",icon:[320,512,[],"f0d7","M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"]},I2={prefix:"fas",iconName:"delete-left",icon:[576,512,[9003,"backspace"],"f55a","M576 128c0-35.3-28.7-64-64-64L205.3 64c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7L512 448c35.3 0 64-28.7 64-64l0-256zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"]},kf={prefix:"fas",iconName:"angle-up",icon:[448,512,[8963],"f106","M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"]},D2={prefix:"fas",iconName:"arrow-turn-down",icon:[384,512,["level-down"],"f149","M32 64C14.3 64 0 49.7 0 32S14.3 0 32 0l96 0c53 0 96 43 96 96l0 306.7 73.4-73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-128 128c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 402.7 160 96c0-17.7-14.3-32-32-32L32 64z"]},U2={prefix:"fas",iconName:"arrows-up-down",icon:[320,512,["arrows-v"],"f07d","M182.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L128 109.3l0 293.5L86.6 361.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 402.7l0-293.5 41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96z"]},N2={prefix:"fas",iconName:"video",icon:[576,512,["video-camera"],"f03d","M0 128C0 92.7 28.7 64 64 64l256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2l0 256c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1l0-17.1 0-128 0-17.1 14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"]},Qn={KeyA:"A",KeyB:"B",KeyC:"C",KeyD:"D",KeyE:"E",KeyF:"F",KeyG:"G",KeyH:"H",KeyI:"I",KeyJ:"J",KeyK:"K",KeyL:"L",KeyM:"M",KeyN:"N",KeyO:"O",KeyP:"P",KeyQ:"Q",KeyR:"R",KeyS:"S",KeyT:"T",KeyU:"U",KeyV:"V",KeyW:"W",KeyX:"X",KeyY:"Y",KeyZ:"Z",Digit0:"0",Digit1:"1",Digit2:"2",Digit3:"3",Digit4:"4",Digit5:"5",Digit6:"6",Digit7:"7",Digit8:"8",Digit9:"9",Tab:P.jsx(Et,{icon:T2}),Backspace:P.jsx(Et,{icon:I2}),Enter:P.jsx(Et,{style:{transform:"rotate(90deg)"},icon:D2}),ShiftLeft:P.jsx(Et,{icon:kf}),ShiftRight:P.jsx(Et,{icon:kf}),Space:" ",ArrowUp:P.jsx(Et,{icon:Ep}),ArrowDown:P.jsx(Et,{icon:bp}),ArrowLeft:P.jsx(Et,{icon:A2}),ArrowRight:P.jsx(Et,{icon:w2}),Semicolon:";",Equal:"=",Comma:",",Minus:"-",Period:".",Slash:"/",Backquote:"`",BracketLeft:"[",Backslash:"\\",BracketRight:"]",Quote:"'",MouseLeft:P.jsx(S2,{}),MouseRight:P.jsx(E2,{})},F2={left:{"thumbstick-up":"KeyW","thumbstick-down":"KeyS","thumbstick-left":"KeyA","thumbstick-right":"KeyD",thumbstick:"KeyR","x-button":"KeyX","y-button":"KeyZ",trigger:"KeyQ",squeeze:"KeyE"},right:{"thumbstick-up":"ArrowUp","thumbstick-down":"ArrowDown","thumbstick-left":"ArrowLeft","thumbstick-right":"ArrowRight",thumbstick:"Slash","a-button":"Enter","b-button":"ShiftRight",trigger:"MouseLeft",squeeze:"MouseRight"}},O2=xt.div`
	display: flex;
	justify-content: space-between;
	pointer-events: all;
	position: fixed;
	display: flex;
	top: 40px;
	left: calc(50vw - 156px);
	width: 312px;
`,zf=xt.div`
	display: flex;
	flex-direction: column;
	width: 50%;
`,Bf=xt.div`
	display: flex;
	height: 24px;
	align-items: center;
	margin-bottom: 2px;
`,k2=({keyMap:n,setKeyMap:e})=>{const[t,i]=Ze.useState(null),r=(a,o)=>{i({controller:a,action:o})},s=(a,o)=>{e(l=>({...l,[a]:{...l[a],[o]:"Unmapped"}}))};return Ze.useEffect(()=>{const a=c=>{t&&Qn[c.code]&&(e(u=>({...u,[t.controller]:{...u[t.controller],[t.action]:c.code}})),i(null))},o=c=>{if(t){const u=c.button===0?"MouseLeft":c.button===2?"MouseRight":null;u&&Qn[u]&&(e(p=>({...p,[t.controller]:{...p[t.controller],[t.action]:u}})),i(null))}},l=c=>{c.preventDefault()};return window.addEventListener("keydown",a),window.addEventListener("mousedown",o),window.addEventListener("contextmenu",l),()=>{window.removeEventListener("keydown",a),window.removeEventListener("mousedown",o),window.removeEventListener("contextmenu",l)}},[t,e]),P.jsxs(O2,{children:[P.jsx(zf,{children:Object.keys(n.left).map(a=>P.jsxs(Bf,{children:[P.jsx(Ns,{buttonName:a==="up"?"thumbstick":a,handedness:"left"}),P.jsxs(qr,{$reverse:!1,children:[P.jsx(Ft,{$reverse:!1,style:{width:"100px",backgroundColor:t&&t.controller==="left"&&t.action===a?"rgba(255, 255, 255, 0.6)":"rgba(255, 255, 255, 0.3)"},onClick:()=>r("left",a),onContextMenu:o=>o.preventDefault(),children:n.left[a]}),P.jsx(Ft,{style:{width:"24px"},$reverse:!1,onClick:()=>s("left",a),onContextMenu:o=>o.preventDefault(),children:P.jsx(Ds,{icon:Of})})]})]},a))}),P.jsx(zf,{children:Object.keys(n.right).map(a=>P.jsxs(Bf,{children:[P.jsx(Ns,{buttonName:a==="up"?"thumbstick":a,handedness:"right"}),P.jsxs(qr,{$reverse:!1,children:[P.jsx(Ft,{$reverse:!1,style:{width:"100px",backgroundColor:t&&t.controller==="right"&&t.action===a?"rgba(255, 255, 255, 0.6)":"rgba(255, 255, 255, 0.3)"},onClick:()=>r("right",a),onContextMenu:o=>o.preventDefault(),children:n.right[a]}),P.jsx(Ft,{$reverse:!1,style:{width:"24px"},onClick:()=>s("right",a),onContextMenu:o=>o.preventDefault(),children:P.jsx(Ds,{icon:Of})})]})]},a))})]})},z2=({xrController:n,buttonId:e,pointerLocked:t,mappedKey:i})=>{const r=mu(),[s,a]=Ze.useState(!1),[o,l]=Ze.useState(!1),[c,u]=Ze.useState(!1),[p,d]=Ze.useState(0),m=n.inputSource.handedness;return Ze.useEffect(()=>{const g=x=>{x.code===i&&(n.updateButtonValue(e,1),u(!0))},v=x=>{x.code===i&&(n.updateButtonValue(e,0),u(!1))},f=x=>{(i==="MouseLeft"&&x.button===0||i==="MouseRight"&&x.button===2)&&(n.updateButtonValue(e,1),u(!0))},h=x=>{(i==="MouseLeft"&&x.button===0||i==="MouseRight"&&x.button===2)&&(n.updateButtonValue(e,0),u(!1))};return t?i==="MouseLeft"||i==="MouseRight"?(window.addEventListener("mousedown",f),window.addEventListener("mouseup",h)):(window.addEventListener("keydown",g),window.addEventListener("keyup",v)):i==="MouseLeft"||i==="MouseRight"?(window.removeEventListener("mousedown",f),window.removeEventListener("mouseup",h)):(window.removeEventListener("keydown",g),window.removeEventListener("keyup",v)),()=>{i==="MouseLeft"||i==="MouseRight"?(window.removeEventListener("mousedown",f),window.removeEventListener("mouseup",h)):(window.removeEventListener("keydown",g),window.removeEventListener("keyup",v))}},[i,t,e,n]),P.jsxs(Mp,{$reverse:m==="right",children:[P.jsx(Ns,{buttonName:e,handedness:m}),P.jsx(qr,{$reverse:m==="right",children:t?P.jsx(Yt,{$pressed:c,children:Qn[i]}):P.jsxs(P.Fragment,{children:[P.jsx(Ft,{$reverse:m==="right",style:{backgroundColor:o?"rgba(255, 255, 255, 0.6)":"rgba(255, 255, 255, 0.3)",width:"50px"},onClick:()=>{l(!0),n.updateButtonValue(e,1),setTimeout(()=>{l(!1),n.updateButtonValue(e,0)},r.buttonPressDuration)},children:"Press"}),P.jsx(Ft,{$reverse:m==="right",style:{backgroundColor:s?"rgba(255, 255, 255, 0.6)":"rgba(255, 255, 255, 0.3)",width:"29px"},onClick:()=>{a(!s),n.updateButtonTouch(e,!s)},children:P.jsx(Et,{icon:eu})}),P.jsx(Sp,{$reverse:m==="right",value:p,onChange:g=>{const v=Number(g.target.value);d(v),n.updateButtonValue(e,v/100)},min:"0",max:"100"})]})})]})},B2=({xrController:n,buttonId:e,pointerLocked:t,mappedKey:i})=>{const r=mu(),[s,a]=Ze.useState(!1),[o,l]=Ze.useState(!1),[c,u]=Ze.useState(!1),[p,d]=Ze.useState(!1),m=n.inputSource.handedness;return Ze.useEffect(()=>{const g=f=>{f.code===i&&(n.updateButtonValue(e,1),d(!0))},v=f=>{f.code===i&&(n.updateButtonValue(e,0),d(!1))};return t?(window.addEventListener("keydown",g),window.addEventListener("keyup",v)):(window.removeEventListener("keydown",g),window.removeEventListener("keyup",v)),()=>{window.removeEventListener("keydown",g),window.removeEventListener("keyup",v)}},[i,t,e,n]),P.jsxs(Mp,{$reverse:m==="right",children:[P.jsx(Ns,{buttonName:e,handedness:m}),P.jsx(qr,{$reverse:m==="right",children:t?P.jsx(Yt,{$pressed:p,children:Qn[i]}):P.jsxs(P.Fragment,{children:[P.jsx(Ft,{$reverse:m==="right",style:{backgroundColor:c?"rgba(255, 255, 255, 0.6)":"rgba(255, 255, 255, 0.3)",width:"50px"},onClick:()=>{u(!0),n.updateButtonValue(e,1),setTimeout(()=>{u(!1),n.updateButtonValue(e,0)},r.buttonPressDuration)},children:"Press"}),P.jsx(Ft,{$reverse:m==="right",style:{backgroundColor:s?"rgba(255, 255, 255, 0.6)":"rgba(255, 255, 255, 0.3)",width:"29px"},onClick:()=>{a(!s),n.updateButtonTouch(e,!s)},children:P.jsx(Et,{icon:eu})}),P.jsx(Ft,{$reverse:m==="right",style:{backgroundColor:o?"rgba(255, 255, 255, 0.6)":"rgba(255, 255, 255, 0.3)",width:"49px"},onClick:()=>{l(!o),n.updateButtonValue(e,o?0:1)},children:"Hold"})]})})]})},V2=xt.div`
	display: flex;
	align-items: center;
	margin-bottom: 2px;
`,H2=xt.button`
	background-color: rgba(255, 255, 255, 0.3);
	border: none;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0;
	pointer-events: none;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	position: relative;
	margin: 0 5px;
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
`,G2=xt.div`
	position: absolute;
	background-color: white;
	border-radius: 50%;
	width: 36px;
	height: 36px;
	cursor: pointer;
	pointer-events: auto;
`,Vf=xt(Ft)`
	width: 49px;
	font-size: 14px;

	${({$reverse:n})=>n?`
    &:first-child {
      margin-left: 1px;
      border-radius: 2px 8px 8px 2px;
    }

    &:last-child {
      margin-right: 1px;
      border-radius: 8px 2px 2px 8px;
    }
  `:`
    &:first-child {
      margin-right: 1px;
      border-radius: 8px 2px 2px 8px;
    }

    &:last-child {
      margin-left: 1px;
      border-radius: 2px 8px 8px 2px;
    }
  `}
`,W2=({xrController:n,pointerLocked:e,buttonId:t,mappedKeyUp:i,mappedKeyDown:r,mappedKeyLeft:s,mappedKeyRight:a,mappedKeyPressed:o})=>{const l=mu(),c=Ze.useRef(null),[u,p]=Ze.useState(!1),[d,m]=Ze.useState(!1),[g,v]=Ze.useState(!1),[f,h]=Ze.useState(!1),[x,_]=Ze.useState({x:0,y:0}),[y,T]=Ze.useState({up:!1,down:!1,left:!1,right:!1,pressed:!1}),w=n.inputSource.handedness,A=()=>{if(c.current){const M=c.current.getBoundingClientRect();_({x:M.left+M.width/2,y:M.top+M.height/2}),p(!0)}},D=M=>{if(u&&c.current){const L=M.clientX-x.x,z=M.clientY-x.y,O=Math.sqrt(L*L+z*z),U=12;let X,H;if(O<U)X=L,H=z;else{const ee=Math.atan2(z,L);X=Math.cos(ee)*U,H=Math.sin(ee)*U}c.current.style.transform=`translate(${X}px, ${H}px)`;const $=X/U,W=H/U;n.updateAxes(t,$,W)}},b=()=>{p(!1),c.current&&(c.current.style.transform="translate(0, 0)",n.updateAxes(t,0,0))};return Ze.useEffect(()=>{const M=O=>{const U={...y};O.code===i&&(U.up=!0),O.code===r&&(U.down=!0),O.code===s&&(U.left=!0),O.code===a&&(U.right=!0),O.code===o&&(U.pressed=!0,n.updateButtonValue(t,1)),T(U),z(U)},L=O=>{const U={...y};O.code===i&&(U.up=!1),O.code===r&&(U.down=!1),O.code===s&&(U.left=!1),O.code===a&&(U.right=!1),O.code===o&&(U.pressed=!1,n.updateButtonValue(t,0)),T(U),z(U)},z=O=>{const U=(O.right?1:0)-(O.left?1:0),X=(O.down?1:0)-(O.up?1:0),H=Math.sqrt(U*U+X*X);if(H===0){n.updateAxes(t,0,0);return}const $=U/H,W=X/H;n.updateAxes(t,$,W)};return e?(window.addEventListener("keydown",M),window.addEventListener("keyup",L)):(window.removeEventListener("keydown",M),window.removeEventListener("keyup",L)),()=>{window.removeEventListener("keydown",M),window.removeEventListener("keyup",L)}},[i,r,s,a,e,y]),Ze.useEffect(()=>(document.addEventListener("mousemove",D),document.addEventListener("mouseup",b),()=>{document.removeEventListener("mousemove",D),document.removeEventListener("mouseup",b)}),[u,x]),P.jsxs(V2,{style:{flexDirection:n.inputSource.handedness==="left"?"row":"row-reverse",alignItems:"flex-start"},children:[P.jsx(Ns,{buttonName:"thumbstick",handedness:n.inputSource.handedness}),e?P.jsxs(Jg,{$reverse:w==="right",children:[P.jsxs(Ff,{$reverse:w==="right",children:[P.jsx(Yt,{$pressed:y.up,style:{margin:"2px"},children:Qn[i]}),P.jsx(Yt,{$pressed:y.pressed,style:{margin:"2px"},children:Qn[o]})]}),P.jsxs(Ff,{$reverse:!1,children:[P.jsx(Yt,{$pressed:y.left,style:{margin:"2px"},children:Qn[s]}),P.jsx(Yt,{$pressed:y.down,style:{margin:"2px"},children:Qn[r]}),P.jsx(Yt,{$pressed:y.right,style:{margin:"2px"},children:Qn[a]})]})]}):P.jsxs(P.Fragment,{children:[P.jsx(H2,{style:{margin:n.inputSource.handedness==="left"?"0 5px 0 -3px":"0 -3px 0 5px"},children:P.jsx(G2,{ref:c,onMouseDown:A})}),P.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[P.jsx(Ft,{$reverse:w==="right",style:{backgroundColor:f?"rgba(255, 255, 255, 0.6)":"rgba(255, 255, 255, 0.3)",width:"80px",marginBottom:"2px",borderRadius:"8px"},onClick:()=>{h(!0),n.updateButtonValue(t,1),setTimeout(()=>{h(!1),n.updateButtonValue(t,0)},l.buttonPressDuration)},children:"Press"}),P.jsxs(qr,{$reverse:w==="right",children:[P.jsx(Vf,{$reverse:n.inputSource.handedness!=="left",style:{backgroundColor:d?"rgba(255, 255, 255, 0.6)":"rgba(255, 255, 255, 0.3)",width:"29px"},onClick:()=>{m(!d),n.updateButtonTouch(t,!d)},children:P.jsx(Et,{icon:eu})}),P.jsx(Vf,{$reverse:n.inputSource.handedness!=="left",style:{backgroundColor:g?"rgba(255, 255, 255, 0.6)":"rgba(255, 255, 255, 0.3)",width:"49px"},onClick:()=>{v(!g),n.updateButtonValue(t,g?0:1)},children:"Hold"})]})]})]})]})},X2=xt.div`
	padding: ${({$reverse:n})=>n?"6px 2px 3px 5px":"6px 5px 3px 2px"};
	pointer-events: all;
	background-color: rgba(43, 43, 43, 0.5);
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
	border-radius: ${({$reverse:n})=>n?"12px 0 0 0":"0 12px 0 0"};
`;function q2(n){const e=new Set;for(const i of n.axes)i&&i.id&&e.add(i.id);const t=n.buttons.filter(i=>i!==null).map(i=>({id:i.id,type:i.type,hasAxes:e.has(i.id)}));return t.sort((i,r)=>i.hasAxes&&!r.hasAxes?-1:!i.hasAxes&&r.hasAxes?1:0),t}const j2=({xrDevice:n,keyMap:e,pointerLocked:t})=>P.jsx("div",{style:{display:"flex",justifyContent:"space-between",flexDirection:"row"},children:Object.entries(n.controllers).map(([i,r])=>P.jsx(X2,{$reverse:i!=="left",children:q2(r.gamepadConfig).map(s=>{const a=e[i];return s.hasAxes?P.jsx(W2,{xrController:r,pointerLocked:t,buttonId:s.id,mappedKeyUp:e[i][`${s.id}-up`],mappedKeyDown:a[`${s.id}-down`],mappedKeyLeft:a[`${s.id}-left`],mappedKeyRight:a[`${s.id}-right`],mappedKeyPressed:a[s.id]},s.id):s.type==="analog"?P.jsx(z2,{xrController:r,buttonId:s.id,mappedKey:a[s.id],pointerLocked:t},s.id):P.jsx(B2,{xrController:r,buttonId:s.id,mappedKey:a[s.id],pointerLocked:t},s.id)})},i))}),Y2=xt.div`
	display: flex;
	justify-content: center;
	pointer-events: all;
	position: fixed;
	display: flex;
	top: 40px;
	left: calc(50vw - 156px);
	width: 312px;
`,$2=({xrDevice:n,inputLayer:e})=>{const[t,i]=Ze.useState(n.fovy);return P.jsx(Y2,{children:P.jsxs(qr,{$reverse:!1,children:[P.jsx(Ft,{$reverse:!1,disabled:!0,children:"FOV-Y"}),P.jsx(Sp,{$reverse:!1,value:t,style:{width:"100px",borderRadius:"2px"},onChange:r=>{const s=Number(r.target.value);i(s),n.fovy=s,e.syncFovy(),e.renderScene()},min:Math.PI/6,max:Math.PI/1.5,step:Math.PI/48}),P.jsxs(Ft,{$reverse:!1,disabled:!0,children:[(t/Math.PI*180).toFixed(2),"°"]})]})})},Z2=xt.div`
	padding: 6px 5px;
	display: flex;
	background-color: rgba(43, 43, 43, 0.5);
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
	justify-content: center;
	pointer-events: all;
	border-radius: 0 0 12px 12px;
	align-items: center;
	height: 24px;
`,Hf=xt.div`
	background-color: rgba(43, 43, 43, 0.5);
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
	border: none;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	cursor: pointer;
	color: white;
	white-space: nowrap;
	font-size: 14px;
	text-transform: none;
	box-shadow: none;
	font-family: Arial, sans-serif;
	border-radius: ${({$reverse:n})=>n?"0 0 0 12px":"0 0 12px 0"};
	padding: 5px;

	> div {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 2px;
		margin: 2px;
	}
`,K2=({xrDevice:n,inputLayer:e,keyMapOpen:t,setKeyMapOpen:i,fovSettingOpen:r,setFovSettingOpen:s})=>P.jsxs("div",{style:{display:"flex",justifyContent:"center"},children:[P.jsxs(Z2,{children:[P.jsx(M2,{}),P.jsxs("div",{style:{display:"flex",flexDirection:"row",marginLeft:"4px"},children:[P.jsx(Ft,{$reverse:!1,onClick:()=>{e.resetDeviceTransforms()},children:P.jsx(Et,{icon:R2})}),P.jsx(Ft,{$reverse:!1,onClick:()=>{e.lockPointer(),i(!1),s(!1)},children:P.jsx(Et,{icon:C2})}),P.jsx(Ft,{$reverse:!1,onClick:()=>{i(!t),s(!1)},children:P.jsx(Et,{icon:L2})}),P.jsx(Ft,{$reverse:!1,onClick:()=>{s(!r),i(!1)},children:P.jsx(Et,{icon:N2})}),P.jsx(Ft,{$reverse:!1,onClick:()=>{const a=n.activeSession;a==null||a.end()},children:P.jsx(Et,{icon:b2})})]})]}),P.jsxs(Hf,{$reverse:!1,style:{position:"fixed",left:"0",top:"0"},children:[P.jsxs("div",{children:[P.jsx(Et,{icon:P2,style:{marginRight:"4px"}})," ","Roomscale Movement"]}),P.jsxs("div",{children:[P.jsx(Yt,{$pressed:!1,style:{width:"50px"},children:"L Shift"}),P.jsx("span",{style:{margin:"0 4px"},children:"+"}),P.jsx(Yt,{$pressed:!1,children:"W"}),P.jsx(Yt,{$pressed:!1,children:"A"}),P.jsx(Yt,{$pressed:!1,children:"S"}),P.jsx(Yt,{$pressed:!1,children:"D"})]})]}),P.jsxs(Hf,{$reverse:!0,style:{position:"fixed",right:"0",top:"0"},children:[P.jsxs("div",{children:[P.jsx(Et,{icon:U2,style:{marginRight:"4px"}})," Camera Height"]}),P.jsxs("div",{children:[P.jsx(Yt,{$pressed:!1,style:{width:"50px"},children:"L Shift"}),P.jsx("span",{style:{margin:"0 4px"},children:"+"}),P.jsx(Yt,{$pressed:!1,children:P.jsx(Et,{icon:Ep})}),P.jsx(Yt,{$pressed:!1,children:P.jsx(Et,{icon:bp})})]})]})]});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tu="168",Q2=0,Gf=1,J2=2,wp=1,ev=2,Zn=3,ii=0,tn=1,On=2,Ei=0,Nr=1,Wf=2,Xf=3,qf=4,tv=5,Wi=100,nv=101,iv=102,rv=103,sv=104,av=200,ov=201,lv=202,cv=203,Ql=204,Jl=205,uv=206,fv=207,hv=208,dv=209,pv=210,mv=211,gv=212,vv=213,_v=214,xv=0,yv=1,Mv=2,to=3,Sv=4,Ev=5,bv=6,wv=7,Ap=0,Av=1,Tv=2,bi=0,Rv=1,Cv=2,Pv=3,Lv=4,Iv=5,Dv=6,Uv=7,Tp=300,jr=301,Yr=302,ec=303,tc=304,Ao=306,nc=1e3,Yi=1001,ic=1002,xn=1003,Nv=1004,ea=1005,wn=1006,jo=1007,$i=1008,ri=1009,Rp=1010,Cp=1011,Fs=1012,nu=1013,ar=1014,Jn=1015,Vs=1016,iu=1017,ru=1018,$r=1020,Pp=35902,Lp=1021,Ip=1022,Tn=1023,Dp=1024,Up=1025,Fr=1026,Zr=1027,Np=1028,su=1029,Fp=1030,au=1031,ou=1033,Na=33776,Fa=33777,Oa=33778,ka=33779,rc=35840,sc=35841,ac=35842,oc=35843,lc=36196,cc=37492,uc=37496,fc=37808,hc=37809,dc=37810,pc=37811,mc=37812,gc=37813,vc=37814,_c=37815,xc=37816,yc=37817,Mc=37818,Sc=37819,Ec=37820,bc=37821,za=36492,wc=36494,Ac=36495,Op=36283,Tc=36284,Rc=36285,Cc=36286,Fv=3200,Ov=3201,kv=0,zv=1,Mi="",Dn="srgb",Ci="srgb-linear",lu="display-p3",To="display-p3-linear",no="linear",ut="srgb",io="rec709",ro="p3",ur=7680,jf=519,Bv=512,Vv=513,Hv=514,kp=515,Gv=516,Wv=517,Xv=518,qv=519,Yf=35044,$f="300 es",ei=2e3,so=2001;class es{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yo=Math.PI/180,Pc=180/Math.PI;function Hs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function Qt(n,e,t){return Math.max(e,Math.min(t,n))}function jv(n,e){return(n%e+e)%e}function $o(n,e,t){return(1-t)*n+t*e}function as(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Zt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class qe{constructor(e=0,t=0){qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,i,r,s,a,o,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],p=i[7],d=i[2],m=i[5],g=i[8],v=r[0],f=r[3],h=r[6],x=r[1],_=r[4],y=r[7],T=r[2],w=r[5],A=r[8];return s[0]=a*v+o*x+l*T,s[3]=a*f+o*_+l*w,s[6]=a*h+o*y+l*A,s[1]=c*v+u*x+p*T,s[4]=c*f+u*_+p*w,s[7]=c*h+u*y+p*A,s[2]=d*v+m*x+g*T,s[5]=d*f+m*_+g*w,s[8]=d*h+m*y+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],p=u*a-o*c,d=o*l-u*s,m=c*s-a*l,g=t*p+i*d+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=p*v,e[1]=(r*c-u*i)*v,e[2]=(o*i-r*a)*v,e[3]=d*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=m*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Zo.makeScale(e,t)),this}rotate(e){return this.premultiply(Zo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zo=new He;function zp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ao(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Yv(){const n=ao("canvas");return n.style.display="block",n}const Zf={};function As(n){n in Zf||(Zf[n]=!0,console.warn(n))}function $v(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Kf=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Qf=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),os={[Ci]:{transfer:no,primaries:io,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Dn]:{transfer:ut,primaries:io,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[To]:{transfer:no,primaries:ro,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Qf),fromReference:n=>n.applyMatrix3(Kf)},[lu]:{transfer:ut,primaries:ro,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Qf),fromReference:n=>n.applyMatrix3(Kf).convertLinearToSRGB()}},Zv=new Set([Ci,To]),nt={enabled:!0,_workingColorSpace:Ci,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Zv.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=os[e].toReference,r=os[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return os[n].primaries},getTransfer:function(n){return n===Mi?no:os[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(os[e].luminanceCoefficients)}};function Or(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ko(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let fr;class Kv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{fr===void 0&&(fr=ao("canvas")),fr.width=e.width,fr.height=e.height;const i=fr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=fr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ao("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Or(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Or(t[i]/255)*255):t[i]=Or(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Qv=0;class Bp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qv++}),this.uuid=Hs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Qo(r[a].image)):s.push(Qo(r[a]))}else s=Qo(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Qo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Kv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jv=0;class nn extends es{constructor(e=nn.DEFAULT_IMAGE,t=nn.DEFAULT_MAPPING,i=Yi,r=Yi,s=wn,a=$i,o=Tn,l=ri,c=nn.DEFAULT_ANISOTROPY,u=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jv++}),this.uuid=Hs(),this.name="",this.source=new Bp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nc:e.x=e.x-Math.floor(e.x);break;case Yi:e.x=e.x<0?0:1;break;case ic:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nc:e.y=e.y-Math.floor(e.y);break;case Yi:e.y=e.y<0?0:1;break;case ic:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=Tp;nn.DEFAULT_ANISOTROPY=1;class Ot{constructor(e=0,t=0,i=0,r=1){Ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],p=l[8],d=l[1],m=l[5],g=l[9],v=l[2],f=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(p-v)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+d)<.1&&Math.abs(p+v)<.1&&Math.abs(g+f)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,y=(m+1)/2,T=(h+1)/2,w=(u+d)/4,A=(p+v)/4,D=(g+f)/4;return _>y&&_>T?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=w/i,s=A/i):y>T?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=w/r,s=D/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=A/s,r=D/s),this.set(i,r,s,t),this}let x=Math.sqrt((f-g)*(f-g)+(p-v)*(p-v)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(f-g)/x,this.y=(p-v)/x,this.z=(d-u)/x,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class e_ extends es{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new nn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Bp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class or extends e_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Vp extends nn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=xn,this.minFilter=xn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class t_ extends nn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=xn,this.minFilter=xn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bt{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],p=i[r+3];const d=s[a+0],m=s[a+1],g=s[a+2],v=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=p;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(p!==v||l!==d||c!==m||u!==g){let f=1-o;const h=l*d+c*m+u*g+p*v,x=h>=0?1:-1,_=1-h*h;if(_>Number.EPSILON){const T=Math.sqrt(_),w=Math.atan2(T,h*x);f=Math.sin(f*w)/T,o=Math.sin(o*w)/T}const y=o*x;if(l=l*f+d*y,c=c*f+m*y,u=u*f+g*y,p=p*f+v*y,f===1-o){const T=1/Math.sqrt(l*l+c*c+u*u+p*p);l*=T,c*=T,u*=T,p*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],p=s[a],d=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+u*p+l*m-c*d,e[t+1]=l*g+u*d+c*p-o*m,e[t+2]=c*g+u*m+o*d-l*p,e[t+3]=u*g-o*p-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),p=o(s/2),d=l(i/2),m=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=d*u*p+c*m*g,this._y=c*m*p-d*u*g,this._z=c*u*g+d*m*p,this._w=c*u*p-d*m*g;break;case"YXZ":this._x=d*u*p+c*m*g,this._y=c*m*p-d*u*g,this._z=c*u*g-d*m*p,this._w=c*u*p+d*m*g;break;case"ZXY":this._x=d*u*p-c*m*g,this._y=c*m*p+d*u*g,this._z=c*u*g+d*m*p,this._w=c*u*p-d*m*g;break;case"ZYX":this._x=d*u*p-c*m*g,this._y=c*m*p+d*u*g,this._z=c*u*g-d*m*p,this._w=c*u*p+d*m*g;break;case"YZX":this._x=d*u*p+c*m*g,this._y=c*m*p+d*u*g,this._z=c*u*g-d*m*p,this._w=c*u*p-d*m*g;break;case"XZY":this._x=d*u*p-c*m*g,this._y=c*m*p-d*u*g,this._z=c*u*g+d*m*p,this._w=c*u*p+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],p=t[10],d=i+o+p;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>p){const m=2*Math.sqrt(1+i-o-p);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>p){const m=2*Math.sqrt(1+o-i-p);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+p-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),p=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*p+this._w*d,this._x=i*p+this._x*d,this._y=r*p+this._y*d,this._z=s*p+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),p=2*(s*i-a*t);return this.x=t+l*c+a*p-o*u,this.y=i+l*u+o*c-s*p,this.z=r+l*p+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Jo.copy(this).projectOnVector(e),this.sub(Jo)}reflect(e){return this.sub(Jo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jo=new I,Jf=new Bt;class Gs{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Sn):Sn.fromBufferAttribute(s,a),Sn.applyMatrix4(e.matrixWorld),this.expandByPoint(Sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ta.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ta.copy(i.boundingBox)),ta.applyMatrix4(e.matrixWorld),this.union(ta)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Sn),Sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ls),na.subVectors(this.max,ls),hr.subVectors(e.a,ls),dr.subVectors(e.b,ls),pr.subVectors(e.c,ls),ci.subVectors(dr,hr),ui.subVectors(pr,dr),Ii.subVectors(hr,pr);let t=[0,-ci.z,ci.y,0,-ui.z,ui.y,0,-Ii.z,Ii.y,ci.z,0,-ci.x,ui.z,0,-ui.x,Ii.z,0,-Ii.x,-ci.y,ci.x,0,-ui.y,ui.x,0,-Ii.y,Ii.x,0];return!el(t,hr,dr,pr,na)||(t=[1,0,0,0,1,0,0,0,1],!el(t,hr,dr,pr,na))?!1:(ia.crossVectors(ci,ui),t=[ia.x,ia.y,ia.z],el(t,hr,dr,pr,na))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xn=[new I,new I,new I,new I,new I,new I,new I,new I],Sn=new I,ta=new Gs,hr=new I,dr=new I,pr=new I,ci=new I,ui=new I,Ii=new I,ls=new I,na=new I,ia=new I,Di=new I;function el(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Di.fromArray(n,s);const o=r.x*Math.abs(Di.x)+r.y*Math.abs(Di.y)+r.z*Math.abs(Di.z),l=e.dot(Di),c=t.dot(Di),u=i.dot(Di);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const n_=new Gs,cs=new I,tl=new I;class Ro{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):n_.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cs.subVectors(e,this.center);const t=cs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(cs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cs.copy(e.center).add(tl)),this.expandByPoint(cs.copy(e.center).sub(tl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qn=new I,nl=new I,ra=new I,fi=new I,il=new I,sa=new I,rl=new I;class cu{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,t),qn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){nl.copy(e).add(t).multiplyScalar(.5),ra.copy(t).sub(e).normalize(),fi.copy(this.origin).sub(nl);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ra),o=fi.dot(this.direction),l=-fi.dot(ra),c=fi.lengthSq(),u=Math.abs(1-a*a);let p,d,m,g;if(u>0)if(p=a*l-o,d=a*o-l,g=s*u,p>=0)if(d>=-g)if(d<=g){const v=1/u;p*=v,d*=v,m=p*(p+a*d+2*o)+d*(a*p+d+2*l)+c}else d=s,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*l)+c;else d=-s,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*l)+c;else d<=-g?(p=Math.max(0,-(-a*s+o)),d=p>0?-s:Math.min(Math.max(-s,-l),s),m=-p*p+d*(d+2*l)+c):d<=g?(p=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(p=Math.max(0,-(a*s+o)),d=p>0?s:Math.min(Math.max(-s,-l),s),m=-p*p+d*(d+2*l)+c);else d=a>0?-s:s,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(nl).addScaledVector(ra,d),m}intersectSphere(e,t){qn.subVectors(e.center,this.origin);const i=qn.dot(this.direction),r=qn.dot(qn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-d.z)*p,l=(e.max.z-d.z)*p):(o=(e.max.z-d.z)*p,l=(e.min.z-d.z)*p),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,t,i,r,s){il.subVectors(t,e),sa.subVectors(i,e),rl.crossVectors(il,sa);let a=this.direction.dot(rl),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;fi.subVectors(this.origin,e);const l=o*this.direction.dot(sa.crossVectors(fi,sa));if(l<0)return null;const c=o*this.direction.dot(il.cross(fi));if(c<0||l+c>a)return null;const u=-o*fi.dot(rl);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(e,t,i,r,s,a,o,l,c,u,p,d,m,g,v,f){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,p,d,m,g,v,f)}set(e,t,i,r,s,a,o,l,c,u,p,d,m,g,v,f){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=p,h[14]=d,h[3]=m,h[7]=g,h[11]=v,h[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/mr.setFromMatrixColumn(e,0).length(),s=1/mr.setFromMatrixColumn(e,1).length(),a=1/mr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const d=a*u,m=a*p,g=o*u,v=o*p;t[0]=l*u,t[4]=-l*p,t[8]=c,t[1]=m+g*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,m=l*p,g=c*u,v=c*p;t[0]=d+v*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*p,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,m=l*p,g=c*u,v=c*p;t[0]=d-v*o,t[4]=-a*p,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,m=a*p,g=o*u,v=o*p;t[0]=l*u,t[4]=g*c-m,t[8]=d*c+v,t[1]=l*p,t[5]=v*c+d,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=v-d*p,t[8]=g*p+m,t[1]=p,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*p+g,t[10]=d-v*p}else if(e.order==="XZY"){const d=a*l,m=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=-p,t[8]=c*u,t[1]=d*p+v,t[5]=a*u,t[9]=m*p-g,t[2]=g*p-m,t[6]=o*u,t[10]=v*p+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(i_,e,r_)}lookAt(e,t,i){const r=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),hi.crossVectors(i,ln),hi.lengthSq()===0&&(Math.abs(i.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),hi.crossVectors(i,ln)),hi.normalize(),aa.crossVectors(ln,hi),r[0]=hi.x,r[4]=aa.x,r[8]=ln.x,r[1]=hi.y,r[5]=aa.y,r[9]=ln.y,r[2]=hi.z,r[6]=aa.z,r[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],p=i[5],d=i[9],m=i[13],g=i[2],v=i[6],f=i[10],h=i[14],x=i[3],_=i[7],y=i[11],T=i[15],w=r[0],A=r[4],D=r[8],b=r[12],M=r[1],L=r[5],z=r[9],O=r[13],U=r[2],X=r[6],H=r[10],$=r[14],W=r[3],ee=r[7],le=r[11],de=r[15];return s[0]=a*w+o*M+l*U+c*W,s[4]=a*A+o*L+l*X+c*ee,s[8]=a*D+o*z+l*H+c*le,s[12]=a*b+o*O+l*$+c*de,s[1]=u*w+p*M+d*U+m*W,s[5]=u*A+p*L+d*X+m*ee,s[9]=u*D+p*z+d*H+m*le,s[13]=u*b+p*O+d*$+m*de,s[2]=g*w+v*M+f*U+h*W,s[6]=g*A+v*L+f*X+h*ee,s[10]=g*D+v*z+f*H+h*le,s[14]=g*b+v*O+f*$+h*de,s[3]=x*w+_*M+y*U+T*W,s[7]=x*A+_*L+y*X+T*ee,s[11]=x*D+_*z+y*H+T*le,s[15]=x*b+_*O+y*$+T*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],p=e[6],d=e[10],m=e[14],g=e[3],v=e[7],f=e[11],h=e[15];return g*(+s*l*p-r*c*p-s*o*d+i*c*d+r*o*m-i*l*m)+v*(+t*l*m-t*c*d+s*a*d-r*a*m+r*c*u-s*l*u)+f*(+t*c*p-t*o*m-s*a*p+i*a*m+s*o*u-i*c*u)+h*(-r*o*u-t*l*p+t*o*d+r*a*p-i*a*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],p=e[9],d=e[10],m=e[11],g=e[12],v=e[13],f=e[14],h=e[15],x=p*f*c-v*d*c+v*l*m-o*f*m-p*l*h+o*d*h,_=g*d*c-u*f*c-g*l*m+a*f*m+u*l*h-a*d*h,y=u*v*c-g*p*c+g*o*m-a*v*m-u*o*h+a*p*h,T=g*p*l-u*v*l-g*o*d+a*v*d+u*o*f-a*p*f,w=t*x+i*_+r*y+s*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=x*A,e[1]=(v*d*s-p*f*s-v*r*m+i*f*m+p*r*h-i*d*h)*A,e[2]=(o*f*s-v*l*s+v*r*c-i*f*c-o*r*h+i*l*h)*A,e[3]=(p*l*s-o*d*s-p*r*c+i*d*c+o*r*m-i*l*m)*A,e[4]=_*A,e[5]=(u*f*s-g*d*s+g*r*m-t*f*m-u*r*h+t*d*h)*A,e[6]=(g*l*s-a*f*s-g*r*c+t*f*c+a*r*h-t*l*h)*A,e[7]=(a*d*s-u*l*s+u*r*c-t*d*c-a*r*m+t*l*m)*A,e[8]=y*A,e[9]=(g*p*s-u*v*s-g*i*m+t*v*m+u*i*h-t*p*h)*A,e[10]=(a*v*s-g*o*s+g*i*c-t*v*c-a*i*h+t*o*h)*A,e[11]=(u*o*s-a*p*s-u*i*c+t*p*c+a*i*m-t*o*m)*A,e[12]=T*A,e[13]=(u*v*r-g*p*r+g*i*d-t*v*d-u*i*f+t*p*f)*A,e[14]=(g*o*r-a*v*r-g*i*l+t*v*l+a*i*f-t*o*f)*A,e[15]=(a*p*r-u*o*r+u*i*l-t*p*l-a*i*d+t*o*d)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,p=o+o,d=s*c,m=s*u,g=s*p,v=a*u,f=a*p,h=o*p,x=l*c,_=l*u,y=l*p,T=i.x,w=i.y,A=i.z;return r[0]=(1-(v+h))*T,r[1]=(m+y)*T,r[2]=(g-_)*T,r[3]=0,r[4]=(m-y)*w,r[5]=(1-(d+h))*w,r[6]=(f+x)*w,r[7]=0,r[8]=(g+_)*A,r[9]=(f-x)*A,r[10]=(1-(d+v))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=mr.set(r[0],r[1],r[2]).length();const a=mr.set(r[4],r[5],r[6]).length(),o=mr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],En.copy(this);const c=1/s,u=1/a,p=1/o;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=u,En.elements[5]*=u,En.elements[6]*=u,En.elements[8]*=p,En.elements[9]*=p,En.elements[10]*=p,t.setFromRotationMatrix(En),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=ei){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),p=(t+e)/(t-e),d=(i+r)/(i-r);let m,g;if(o===ei)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===so)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=ei){const l=this.elements,c=1/(t-e),u=1/(i-r),p=1/(a-s),d=(t+e)*c,m=(i+r)*u;let g,v;if(o===ei)g=(a+s)*p,v=-2*p;else if(o===so)g=s*p,v=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const mr=new I,En=new _t,i_=new I(0,0,0),r_=new I(1,1,1),hi=new I,aa=new I,ln=new I,eh=new _t,th=new Bt;class Gn{constructor(e=0,t=0,i=0,r=Gn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],p=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return eh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(eh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return th.setFromEuler(this),this.setFromQuaternion(th,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gn.DEFAULT_ORDER="XYZ";class uu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let s_=0;const nh=new I,gr=new Bt,jn=new _t,oa=new I,us=new I,a_=new I,o_=new Bt,ih=new I(1,0,0),rh=new I(0,1,0),sh=new I(0,0,1),ah={type:"added"},l_={type:"removed"},vr={type:"childadded",child:null},sl={type:"childremoved",child:null};class Vt extends es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:s_++}),this.uuid=Hs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new I,t=new Gn,i=new Bt,r=new I(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _t},normalMatrix:{value:new He}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gr.setFromAxisAngle(e,t),this.quaternion.multiply(gr),this}rotateOnWorldAxis(e,t){return gr.setFromAxisAngle(e,t),this.quaternion.premultiply(gr),this}rotateX(e){return this.rotateOnAxis(ih,e)}rotateY(e){return this.rotateOnAxis(rh,e)}rotateZ(e){return this.rotateOnAxis(sh,e)}translateOnAxis(e,t){return nh.copy(e).applyQuaternion(this.quaternion),this.position.add(nh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ih,e)}translateY(e){return this.translateOnAxis(rh,e)}translateZ(e){return this.translateOnAxis(sh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?oa.copy(e):oa.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(us,oa,this.up):jn.lookAt(oa,us,this.up),this.quaternion.setFromRotationMatrix(jn),r&&(jn.extractRotation(r.matrixWorld),gr.setFromRotationMatrix(jn),this.quaternion.premultiply(gr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ah),vr.child=e,this.dispatchEvent(vr),vr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(l_),sl.child=e,this.dispatchEvent(sl),sl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ah),vr.child=e,this.dispatchEvent(vr),vr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,e,a_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,o_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),p=a(e.shapes),d=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),p.length>0&&(i.shapes=p),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Vt.DEFAULT_UP=new I(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new I,Yn=new I,al=new I,$n=new I,_r=new I,xr=new I,oh=new I,ol=new I,ll=new I,cl=new I;class kn{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),bn.subVectors(e,t),r.cross(bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){bn.subVectors(r,t),Yn.subVectors(i,t),al.subVectors(e,t);const a=bn.dot(bn),o=bn.dot(Yn),l=bn.dot(al),c=Yn.dot(Yn),u=Yn.dot(al),p=a*c-o*o;if(p===0)return s.set(0,0,0),null;const d=1/p,m=(c*l-o*u)*d,g=(a*u-o*l)*d;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,$n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,$n.x),l.addScaledVector(a,$n.y),l.addScaledVector(o,$n.z),l)}static isFrontFacing(e,t,i,r){return bn.subVectors(i,t),Yn.subVectors(e,t),bn.cross(Yn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),bn.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return kn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return kn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;_r.subVectors(r,i),xr.subVectors(s,i),ol.subVectors(e,i);const l=_r.dot(ol),c=xr.dot(ol);if(l<=0&&c<=0)return t.copy(i);ll.subVectors(e,r);const u=_r.dot(ll),p=xr.dot(ll);if(u>=0&&p<=u)return t.copy(r);const d=l*p-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(_r,a);cl.subVectors(e,s);const m=_r.dot(cl),g=xr.dot(cl);if(g>=0&&m<=g)return t.copy(s);const v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(xr,o);const f=u*g-m*p;if(f<=0&&p-u>=0&&m-g>=0)return oh.subVectors(s,r),o=(p-u)/(p-u+(m-g)),t.copy(r).addScaledVector(oh,o);const h=1/(f+v+d);return a=v*h,o=d*h,t.copy(i).addScaledVector(_r,a).addScaledVector(xr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Hp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},la={h:0,s:0,l:0};function ul(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class rt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=nt.workingColorSpace){if(e=jv(e,1),t=Qt(t,0,1),i=Qt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=ul(a,s,e+1/3),this.g=ul(a,s,e),this.b=ul(a,s,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,t=Dn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dn){const i=Hp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Or(e.r),this.g=Or(e.g),this.b=Or(e.b),this}copyLinearToSRGB(e){return this.r=Ko(e.r),this.g=Ko(e.g),this.b=Ko(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dn){return nt.fromWorkingColorSpace(Gt.copy(this),e),Math.round(Qt(Gt.r*255,0,255))*65536+Math.round(Qt(Gt.g*255,0,255))*256+Math.round(Qt(Gt.b*255,0,255))}getHexString(e=Dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(Gt.copy(this),t);const i=Gt.r,r=Gt.g,s=Gt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const p=a-o;switch(c=u<=.5?p/(a+o):p/(2-a-o),a){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=Dn){nt.fromWorkingColorSpace(Gt.copy(this),e);const t=Gt.r,i=Gt.g,r=Gt.b;return e!==Dn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(di),this.setHSL(di.h+e,di.s+t,di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(di),e.getHSL(la);const i=$o(di.h,la.h,t),r=$o(di.s,la.s,t),s=$o(di.l,la.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new rt;rt.NAMES=Hp;let c_=0;class Ws extends es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:c_++}),this.uuid=Hs(),this.name="",this.type="Material",this.blending=Nr,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ql,this.blendDst=Jl,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=to,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ur,this.stencilZFail=ur,this.stencilZPass=ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Nr&&(i.blending=this.blending),this.side!==ii&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ql&&(i.blendSrc=this.blendSrc),this.blendDst!==Jl&&(i.blendDst=this.blendDst),this.blendEquation!==Wi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==to&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ur&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ur&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ur&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Xs extends Ws{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=Ap,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rt=new I,ca=new qe;class Vn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Yf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return As("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ca.fromBufferAttribute(this,t),ca.applyMatrix3(e),this.setXY(t,ca.x,ca.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=as(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Zt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=as(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=as(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=as(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=as(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array),r=Zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array),r=Zt(r,this.array),s=Zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yf&&(e.usage=this.usage),e}}class Gp extends Vn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Wp extends Vn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class dt extends Vn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let u_=0;const vn=new _t,fl=new Vt,yr=new I,cn=new Gs,fs=new Gs,Dt=new I;class $t extends es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:u_++}),this.uuid=Hs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zp(e)?Wp:Gp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,t,i){return vn.makeTranslation(e,t,i),this.applyMatrix4(vn),this}scale(e,t,i){return vn.makeScale(e,t,i),this.applyMatrix4(vn),this}lookAt(e){return fl.lookAt(e),fl.updateMatrix(),this.applyMatrix4(fl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yr).negate(),this.translate(yr.x,yr.y,yr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new dt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ro);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];fs.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(cn.min,fs.min),cn.expandByPoint(Dt),Dt.addVectors(cn.max,fs.max),cn.expandByPoint(Dt)):(cn.expandByPoint(fs.min),cn.expandByPoint(fs.max))}cn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Dt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Dt.fromBufferAttribute(o,c),l&&(yr.fromBufferAttribute(e,c),Dt.add(yr)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<i.count;D++)o[D]=new I,l[D]=new I;const c=new I,u=new I,p=new I,d=new qe,m=new qe,g=new qe,v=new I,f=new I;function h(D,b,M){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,b),p.fromBufferAttribute(i,M),d.fromBufferAttribute(s,D),m.fromBufferAttribute(s,b),g.fromBufferAttribute(s,M),u.sub(c),p.sub(c),m.sub(d),g.sub(d);const L=1/(m.x*g.y-g.x*m.y);isFinite(L)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(p,-m.y).multiplyScalar(L),f.copy(p).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(L),o[D].add(v),o[b].add(v),o[M].add(v),l[D].add(f),l[b].add(f),l[M].add(f))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let D=0,b=x.length;D<b;++D){const M=x[D],L=M.start,z=M.count;for(let O=L,U=L+z;O<U;O+=3)h(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const _=new I,y=new I,T=new I,w=new I;function A(D){T.fromBufferAttribute(r,D),w.copy(T);const b=o[D];_.copy(b),_.sub(T.multiplyScalar(T.dot(b))).normalize(),y.crossVectors(w,b);const L=y.dot(l[D])<0?-1:1;a.setXYZW(D,_.x,_.y,_.z,L)}for(let D=0,b=x.length;D<b;++D){const M=x[D],L=M.start,z=M.count;for(let O=L,U=L+z;O<U;O+=3)A(e.getX(O+0)),A(e.getX(O+1)),A(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Vn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new I,s=new I,a=new I,o=new I,l=new I,c=new I,u=new I,p=new I;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),v=e.getX(d+1),f=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,f),u.subVectors(a,s),p.subVectors(r,s),u.cross(p),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,f),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),p.subVectors(r,s),u.cross(p),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,p=o.normalized,d=new c.constructor(l.length*u);let m=0,g=0;for(let v=0,f=l.length;v<f;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*u;for(let h=0;h<u;h++)d[g++]=c[m++]}return new Vn(d,u,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $t,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,p=c.length;u<p;u++){const d=c[u],m=e(d,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let p=0,d=c.length;p<d;p++){const m=c[p];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],p=s[c];for(let d=0,m=p.length;d<m;d++)u.push(p[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lh=new _t,Ui=new cu,ua=new Ro,ch=new I,Mr=new I,Sr=new I,Er=new I,hl=new I,fa=new I,ha=new qe,da=new qe,pa=new qe,uh=new I,fh=new I,hh=new I,ma=new I,ga=new I;class ue extends Vt{constructor(e=new $t,t=new Xs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){fa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],p=s[l];u!==0&&(hl.fromBufferAttribute(p,e),a?fa.addScaledVector(hl,u):fa.addScaledVector(hl.sub(t),u))}t.add(fa)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ua.copy(i.boundingSphere),ua.applyMatrix4(s),Ui.copy(e.ray).recast(e.near),!(ua.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(ua,ch)===null||Ui.origin.distanceToSquared(ch)>(e.far-e.near)**2))&&(lh.copy(s).invert(),Ui.copy(e.ray).applyMatrix4(lh),!(i.boundingBox!==null&&Ui.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ui)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,p=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const f=d[g],h=a[f.materialIndex],x=Math.max(f.start,m.start),_=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let y=x,T=_;y<T;y+=3){const w=o.getX(y),A=o.getX(y+1),D=o.getX(y+2);r=va(this,h,e,i,c,u,p,w,A,D),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let f=g,h=v;f<h;f+=3){const x=o.getX(f),_=o.getX(f+1),y=o.getX(f+2);r=va(this,a,e,i,c,u,p,x,_,y),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const f=d[g],h=a[f.materialIndex],x=Math.max(f.start,m.start),_=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let y=x,T=_;y<T;y+=3){const w=y,A=y+1,D=y+2;r=va(this,h,e,i,c,u,p,w,A,D),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=f.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let f=g,h=v;f<h;f+=3){const x=f,_=f+1,y=f+2;r=va(this,a,e,i,c,u,p,x,_,y),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}}}}function f_(n,e,t,i,r,s,a,o){let l;if(e.side===tn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===ii,o),l===null)return null;ga.copy(o),ga.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ga);return c<t.near||c>t.far?null:{distance:c,point:ga.clone(),object:n}}function va(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Mr),n.getVertexPosition(l,Sr),n.getVertexPosition(c,Er);const u=f_(n,e,t,i,Mr,Sr,Er,ma);if(u){r&&(ha.fromBufferAttribute(r,o),da.fromBufferAttribute(r,l),pa.fromBufferAttribute(r,c),u.uv=kn.getInterpolation(ma,Mr,Sr,Er,ha,da,pa,new qe)),s&&(ha.fromBufferAttribute(s,o),da.fromBufferAttribute(s,l),pa.fromBufferAttribute(s,c),u.uv1=kn.getInterpolation(ma,Mr,Sr,Er,ha,da,pa,new qe)),a&&(uh.fromBufferAttribute(a,o),fh.fromBufferAttribute(a,l),hh.fromBufferAttribute(a,c),u.normal=kn.getInterpolation(ma,Mr,Sr,Er,uh,fh,hh,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new I,materialIndex:0};kn.getNormal(Mr,Sr,Er,p.normal),u.face=p}return u}class St extends $t{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],p=[];let d=0,m=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(p,2));function g(v,f,h,x,_,y,T,w,A,D,b){const M=y/A,L=T/D,z=y/2,O=T/2,U=w/2,X=A+1,H=D+1;let $=0,W=0;const ee=new I;for(let le=0;le<H;le++){const de=le*L-O;for(let Re=0;Re<X;Re++){const Ye=Re*M-z;ee[v]=Ye*x,ee[f]=de*_,ee[h]=U,c.push(ee.x,ee.y,ee.z),ee[v]=0,ee[f]=0,ee[h]=w>0?1:-1,u.push(ee.x,ee.y,ee.z),p.push(Re/A),p.push(1-le/D),$+=1}}for(let le=0;le<D;le++)for(let de=0;de<A;de++){const Re=d+de+X*le,Ye=d+de+X*(le+1),j=d+(de+1)+X*(le+1),te=d+(de+1)+X*le;l.push(Re,Ye,te),l.push(Ye,j,te),W+=6}o.addGroup(m,W,b),m+=W,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new St(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Kr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function jt(n){const e={};for(let t=0;t<n.length;t++){const i=Kr(n[t]);for(const r in i)e[r]=i[r]}return e}function h_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Xp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const d_={clone:Kr,merge:jt};var p_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,m_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends Ws{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=p_,this.fragmentShader=m_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Kr(e.uniforms),this.uniformsGroups=h_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class qp extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pi=new I,dh=new qe,ph=new qe;class _n extends qp{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Pc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pc*2*Math.atan(Math.tan(Yo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(pi.x,pi.y).multiplyScalar(-e/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(pi.x,pi.y).multiplyScalar(-e/pi.z)}getViewSize(e,t){return this.getViewBounds(e,dh,ph),t.subVectors(ph,dh)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Yo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const br=-90,wr=1;class g_ extends Vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new _n(br,wr,e,t);r.layers=this.layers,this.add(r);const s=new _n(br,wr,e,t);s.layers=this.layers,this.add(s);const a=new _n(br,wr,e,t);a.layers=this.layers,this.add(a);const o=new _n(br,wr,e,t);o.layers=this.layers,this.add(o);const l=new _n(br,wr,e,t);l.layers=this.layers,this.add(l);const c=new _n(br,wr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===ei)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===so)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,p=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(p,d,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class jp extends nn{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:jr,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class v_ extends or{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new jp(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:wn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new St(5,5,5),s=new Ri({name:"CubemapFromEquirect",uniforms:Kr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:Ei});s.uniforms.tEquirect.value=t;const a=new ue(r,s),o=t.minFilter;return t.minFilter===$i&&(t.minFilter=wn),new g_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const dl=new I,__=new I,x_=new He;class Bi{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=dl.subVectors(i,t).cross(__.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(dl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||x_.getNormalMatrix(e),r=this.coplanarPoint(dl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ni=new Ro,_a=new I;class Yp{constructor(e=new Bi,t=new Bi,i=new Bi,r=new Bi,s=new Bi,a=new Bi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ei){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],p=r[6],d=r[7],m=r[8],g=r[9],v=r[10],f=r[11],h=r[12],x=r[13],_=r[14],y=r[15];if(i[0].setComponents(l-s,d-c,f-m,y-h).normalize(),i[1].setComponents(l+s,d+c,f+m,y+h).normalize(),i[2].setComponents(l+a,d+u,f+g,y+x).normalize(),i[3].setComponents(l-a,d-u,f-g,y-x).normalize(),i[4].setComponents(l-o,d-p,f-v,y-_).normalize(),t===ei)i[5].setComponents(l+o,d+p,f+v,y+_).normalize();else if(t===so)i[5].setComponents(o,p,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(e){return Ni.center.set(0,0,0),Ni.radius=.7071067811865476,Ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(_a.x=r.normal.x>0?e.max.x:e.min.x,_a.y=r.normal.y>0?e.max.y:e.min.y,_a.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_a)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $p(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function y_(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,p=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){const u=l.array,p=l._updateRange,d=l.updateRanges;if(n.bindBuffer(c,o),p.count===-1&&d.length===0&&n.bufferSubData(c,0,u),d.length!==0){for(let m=0,g=d.length;m<g;m++){const v=d[m];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}p.count!==-1&&(n.bufferSubData(c,p.offset*u.BYTES_PER_ELEMENT,u,p.offset,p.count),p.count=-1),l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class qs extends $t{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,p=e/o,d=t/l,m=[],g=[],v=[],f=[];for(let h=0;h<u;h++){const x=h*d-a;for(let _=0;_<c;_++){const y=_*p-s;g.push(y,-x,0),v.push(0,0,1),f.push(_/o),f.push(1-h/l)}}for(let h=0;h<l;h++)for(let x=0;x<o;x++){const _=x+c*h,y=x+c*(h+1),T=x+1+c*(h+1),w=x+1+c*h;m.push(_,y,w),m.push(y,T,w)}this.setIndex(m),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(v,3)),this.setAttribute("uv",new dt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qs(e.width,e.height,e.widthSegments,e.heightSegments)}}var M_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,S_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,E_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,b_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,w_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,A_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,T_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,R_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,C_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,P_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,L_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,I_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,D_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,U_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,N_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,F_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,O_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,k_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,z_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,B_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,V_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,H_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,G_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,W_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,X_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,q_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,j_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Y_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Z_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,K_="gl_FragColor = linearToOutputTexel( gl_FragColor );",Q_=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,J_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ex=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,nx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ix=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ax=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ox=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ux=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,dx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,px=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_x=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,xx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Mx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Sx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ex=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ax=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Px=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ix=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ux=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ox=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Bx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Wx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$x=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Zx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,e3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,t3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,n3=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,i3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,r3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,s3=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,a3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,o3=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,l3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,c3=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,u3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,f3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,h3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,d3=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,p3=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,m3=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,g3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,v3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,x3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const y3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,M3=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E3=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,T3=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,R3=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,C3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,P3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,L3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I3=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,D3=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,U3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,N3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,O3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,z3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,V3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,H3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,X3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,j3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Z3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Q3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,J3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:M_,alphahash_pars_fragment:S_,alphamap_fragment:E_,alphamap_pars_fragment:b_,alphatest_fragment:w_,alphatest_pars_fragment:A_,aomap_fragment:T_,aomap_pars_fragment:R_,batching_pars_vertex:C_,batching_vertex:P_,begin_vertex:L_,beginnormal_vertex:I_,bsdfs:D_,iridescence_fragment:U_,bumpmap_pars_fragment:N_,clipping_planes_fragment:F_,clipping_planes_pars_fragment:O_,clipping_planes_pars_vertex:k_,clipping_planes_vertex:z_,color_fragment:B_,color_pars_fragment:V_,color_pars_vertex:H_,color_vertex:G_,common:W_,cube_uv_reflection_fragment:X_,defaultnormal_vertex:q_,displacementmap_pars_vertex:j_,displacementmap_vertex:Y_,emissivemap_fragment:$_,emissivemap_pars_fragment:Z_,colorspace_fragment:K_,colorspace_pars_fragment:Q_,envmap_fragment:J_,envmap_common_pars_fragment:ex,envmap_pars_fragment:tx,envmap_pars_vertex:nx,envmap_physical_pars_fragment:dx,envmap_vertex:ix,fog_vertex:rx,fog_pars_vertex:sx,fog_fragment:ax,fog_pars_fragment:ox,gradientmap_pars_fragment:lx,lightmap_pars_fragment:cx,lights_lambert_fragment:ux,lights_lambert_pars_fragment:fx,lights_pars_begin:hx,lights_toon_fragment:px,lights_toon_pars_fragment:mx,lights_phong_fragment:gx,lights_phong_pars_fragment:vx,lights_physical_fragment:_x,lights_physical_pars_fragment:xx,lights_fragment_begin:yx,lights_fragment_maps:Mx,lights_fragment_end:Sx,logdepthbuf_fragment:Ex,logdepthbuf_pars_fragment:bx,logdepthbuf_pars_vertex:wx,logdepthbuf_vertex:Ax,map_fragment:Tx,map_pars_fragment:Rx,map_particle_fragment:Cx,map_particle_pars_fragment:Px,metalnessmap_fragment:Lx,metalnessmap_pars_fragment:Ix,morphinstance_vertex:Dx,morphcolor_vertex:Ux,morphnormal_vertex:Nx,morphtarget_pars_vertex:Fx,morphtarget_vertex:Ox,normal_fragment_begin:kx,normal_fragment_maps:zx,normal_pars_fragment:Bx,normal_pars_vertex:Vx,normal_vertex:Hx,normalmap_pars_fragment:Gx,clearcoat_normal_fragment_begin:Wx,clearcoat_normal_fragment_maps:Xx,clearcoat_pars_fragment:qx,iridescence_pars_fragment:jx,opaque_fragment:Yx,packing:$x,premultiplied_alpha_fragment:Zx,project_vertex:Kx,dithering_fragment:Qx,dithering_pars_fragment:Jx,roughnessmap_fragment:e3,roughnessmap_pars_fragment:t3,shadowmap_pars_fragment:n3,shadowmap_pars_vertex:i3,shadowmap_vertex:r3,shadowmask_pars_fragment:s3,skinbase_vertex:a3,skinning_pars_vertex:o3,skinning_vertex:l3,skinnormal_vertex:c3,specularmap_fragment:u3,specularmap_pars_fragment:f3,tonemapping_fragment:h3,tonemapping_pars_fragment:d3,transmission_fragment:p3,transmission_pars_fragment:m3,uv_pars_fragment:g3,uv_pars_vertex:v3,uv_vertex:_3,worldpos_vertex:x3,background_vert:y3,background_frag:M3,backgroundCube_vert:S3,backgroundCube_frag:E3,cube_vert:b3,cube_frag:w3,depth_vert:A3,depth_frag:T3,distanceRGBA_vert:R3,distanceRGBA_frag:C3,equirect_vert:P3,equirect_frag:L3,linedashed_vert:I3,linedashed_frag:D3,meshbasic_vert:U3,meshbasic_frag:N3,meshlambert_vert:F3,meshlambert_frag:O3,meshmatcap_vert:k3,meshmatcap_frag:z3,meshnormal_vert:B3,meshnormal_frag:V3,meshphong_vert:H3,meshphong_frag:G3,meshphysical_vert:W3,meshphysical_frag:X3,meshtoon_vert:q3,meshtoon_frag:j3,points_vert:Y3,points_frag:$3,shadow_vert:Z3,shadow_frag:K3,sprite_vert:Q3,sprite_frag:J3},oe={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Fn={basic:{uniforms:jt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:jt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new rt(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:jt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:jt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:jt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new rt(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:jt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:jt([oe.points,oe.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:jt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:jt([oe.common,oe.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:jt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:jt([oe.sprite,oe.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:jt([oe.common,oe.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:jt([oe.lights,oe.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Fn.physical={uniforms:jt([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const xa={r:0,b:0,g:0},Fi=new Gn,ey=new _t;function ty(n,e,t,i,r,s,a){const o=new rt(0);let l=s===!0?0:1,c,u,p=null,d=0,m=null;function g(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?t:e).get(_)),_}function v(x){let _=!1;const y=g(x);y===null?h(o,l):y&&y.isColor&&(h(y,1),_=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function f(x,_){const y=g(_);y&&(y.isCubeTexture||y.mapping===Ao)?(u===void 0&&(u=new ue(new St(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:Kr(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Fi.copy(_.backgroundRotation),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ey.makeRotationFromEuler(Fi)),u.material.toneMapped=nt.getTransfer(y.colorSpace)!==ut,(p!==y||d!==y.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,p=y,d=y.version,m=n.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new ue(new qs(2,2),new Ri({name:"BackgroundMaterial",uniforms:Kr(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=nt.getTransfer(y.colorSpace)!==ut,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(p!==y||d!==y.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,p=y,d=y.version,m=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function h(x,_){x.getRGB(xa,Xp(n)),i.buffers.color.setClear(xa.r,xa.g,xa.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(x,_=1){o.set(x),l=_,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,h(o,l)},render:v,addToRenderList:f}}function ny(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(M,L,z,O,U){let X=!1;const H=p(O,z,L);s!==H&&(s=H,c(s.object)),X=m(M,O,z,U),X&&g(M,O,z,U),U!==null&&e.update(U,n.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,y(M,L,z,O),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function p(M,L,z){const O=z.wireframe===!0;let U=i[M.id];U===void 0&&(U={},i[M.id]=U);let X=U[L.id];X===void 0&&(X={},U[L.id]=X);let H=X[O];return H===void 0&&(H=d(l()),X[O]=H),H}function d(M){const L=[],z=[],O=[];for(let U=0;U<t;U++)L[U]=0,z[U]=0,O[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:z,attributeDivisors:O,object:M,attributes:{},index:null}}function m(M,L,z,O){const U=s.attributes,X=L.attributes;let H=0;const $=z.getAttributes();for(const W in $)if($[W].location>=0){const le=U[W];let de=X[W];if(de===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(de=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(de=M.instanceColor)),le===void 0||le.attribute!==de||de&&le.data!==de.data)return!0;H++}return s.attributesNum!==H||s.index!==O}function g(M,L,z,O){const U={},X=L.attributes;let H=0;const $=z.getAttributes();for(const W in $)if($[W].location>=0){let le=X[W];le===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(le=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(le=M.instanceColor));const de={};de.attribute=le,le&&le.data&&(de.data=le.data),U[W]=de,H++}s.attributes=U,s.attributesNum=H,s.index=O}function v(){const M=s.newAttributes;for(let L=0,z=M.length;L<z;L++)M[L]=0}function f(M){h(M,0)}function h(M,L){const z=s.newAttributes,O=s.enabledAttributes,U=s.attributeDivisors;z[M]=1,O[M]===0&&(n.enableVertexAttribArray(M),O[M]=1),U[M]!==L&&(n.vertexAttribDivisor(M,L),U[M]=L)}function x(){const M=s.newAttributes,L=s.enabledAttributes;for(let z=0,O=L.length;z<O;z++)L[z]!==M[z]&&(n.disableVertexAttribArray(z),L[z]=0)}function _(M,L,z,O,U,X,H){H===!0?n.vertexAttribIPointer(M,L,z,U,X):n.vertexAttribPointer(M,L,z,O,U,X)}function y(M,L,z,O){v();const U=O.attributes,X=z.getAttributes(),H=L.defaultAttributeValues;for(const $ in X){const W=X[$];if(W.location>=0){let ee=U[$];if(ee===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(ee=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(ee=M.instanceColor)),ee!==void 0){const le=ee.normalized,de=ee.itemSize,Re=e.get(ee);if(Re===void 0)continue;const Ye=Re.buffer,j=Re.type,te=Re.bytesPerElement,pe=j===n.INT||j===n.UNSIGNED_INT||ee.gpuType===nu;if(ee.isInterleavedBufferAttribute){const fe=ee.data,we=fe.stride,Ae=ee.offset;if(fe.isInstancedInterleavedBuffer){for(let ke=0;ke<W.locationSize;ke++)h(W.location+ke,fe.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ke=0;ke<W.locationSize;ke++)f(W.location+ke);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let ke=0;ke<W.locationSize;ke++)_(W.location+ke,de/W.locationSize,j,le,we*te,(Ae+de/W.locationSize*ke)*te,pe)}else{if(ee.isInstancedBufferAttribute){for(let fe=0;fe<W.locationSize;fe++)h(W.location+fe,ee.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let fe=0;fe<W.locationSize;fe++)f(W.location+fe);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let fe=0;fe<W.locationSize;fe++)_(W.location+fe,de/W.locationSize,j,le,de*te,de/W.locationSize*fe*te,pe)}}else if(H!==void 0){const le=H[$];if(le!==void 0)switch(le.length){case 2:n.vertexAttrib2fv(W.location,le);break;case 3:n.vertexAttrib3fv(W.location,le);break;case 4:n.vertexAttrib4fv(W.location,le);break;default:n.vertexAttrib1fv(W.location,le)}}}}x()}function T(){D();for(const M in i){const L=i[M];for(const z in L){const O=L[z];for(const U in O)u(O[U].object),delete O[U];delete L[z]}delete i[M]}}function w(M){if(i[M.id]===void 0)return;const L=i[M.id];for(const z in L){const O=L[z];for(const U in O)u(O[U].object),delete O[U];delete L[z]}delete i[M.id]}function A(M){for(const L in i){const z=i[L];if(z[M.id]===void 0)continue;const O=z[M.id];for(const U in O)u(O[U].object),delete O[U];delete z[M.id]}}function D(){b(),a=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:D,resetDefaultState:b,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:f,disableUnusedAttributes:x}}function iy(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,p){p!==0&&(n.drawArraysInstanced(i,c,u,p),t.update(u,i,p))}function o(c,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,p);let m=0;for(let g=0;g<p;g++)m+=u[g];t.update(m,i,1)}function l(c,u,p,d){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)a(c[g],u[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,p);let g=0;for(let v=0;v<p;v++)g+=u[v];for(let v=0;v<d.length;v++)t.update(g,i,d[v])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ry(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==Tn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const A=w===Vs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==ri&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Jn&&!A)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const p=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),h=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=m>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,maxTextures:d,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:v,maxAttributes:f,maxVertexUniforms:h,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:y,maxSamples:T}}function sy(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Bi,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){const m=p.length!==0||d||i!==0||r;return r=d,i=p.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,d){t=u(p,d,0)},this.setState=function(p,d,m){const g=p.clippingPlanes,v=p.clipIntersection,f=p.clipShadows,h=n.get(p);if(!r||g===null||g.length===0||s&&!f)s?u(null):c();else{const x=s?0:i,_=x*4;let y=h.clippingState||null;l.value=y,y=u(g,d,_,m);for(let T=0;T!==_;++T)y[T]=t[T];h.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(p,d,m,g){const v=p!==null?p.length:0;let f=null;if(v!==0){if(f=l.value,g!==!0||f===null){const h=m+v*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(f===null||f.length<h)&&(f=new Float32Array(h));for(let _=0,y=m;_!==v;++_,y+=4)a.copy(p[_]).applyMatrix4(x,o),a.normal.toArray(f,y),f[y+3]=a.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,f}}function ay(n){let e=new WeakMap;function t(a,o){return o===ec?a.mapping=jr:o===tc&&(a.mapping=Yr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===ec||o===tc)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new v_(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class oy extends qp{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Lr=4,mh=[.125,.215,.35,.446,.526,.582],Xi=20,pl=new oy,gh=new rt;let ml=null,gl=0,vl=0,_l=!1;const Vi=(1+Math.sqrt(5))/2,Ar=1/Vi,vh=[new I(-Vi,Ar,0),new I(Vi,Ar,0),new I(-Ar,0,Vi),new I(Ar,0,Vi),new I(0,Vi,-Ar),new I(0,Vi,Ar),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class _h{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ml=this._renderer.getRenderTarget(),gl=this._renderer.getActiveCubeFace(),vl=this._renderer.getActiveMipmapLevel(),_l=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ml,gl,vl),this._renderer.xr.enabled=_l,e.scissorTest=!1,ya(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===jr||e.mapping===Yr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ml=this._renderer.getRenderTarget(),gl=this._renderer.getActiveCubeFace(),vl=this._renderer.getActiveMipmapLevel(),_l=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:Vs,format:Tn,colorSpace:Ci,depthBuffer:!1},r=xh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xh(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ly(s)),this._blurMaterial=cy(s,e,t)}return r}_compileMaterial(e){const t=new ue(this._lodPlanes[0],e);this._renderer.compile(t,pl)}_sceneToCubeUV(e,t,i,r){const o=new _n(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,d=u.toneMapping;u.getClearColor(gh),u.toneMapping=bi,u.autoClear=!1;const m=new Xs({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),g=new ue(new St,m);let v=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,v=!0):(m.color.copy(gh),v=!0);for(let h=0;h<6;h++){const x=h%3;x===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):x===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const _=this._cubeSize;ya(r,x*_,h>2?_:0,_,_),u.setRenderTarget(r),v&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=p,e.background=f}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===jr||e.mapping===Yr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yh());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new ue(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ya(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,pl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=vh[(r-s-1)%vh.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,p=new ue(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Xi-1),v=s/g,f=isFinite(s)?1+Math.floor(u*v):Xi;f>Xi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Xi}`);const h=[];let x=0;for(let A=0;A<Xi;++A){const D=A/v,b=Math.exp(-D*D/2);h.push(b),A===0?x+=b:A<f&&(x+=2*b)}for(let A=0;A<h.length;A++)h[A]=h[A]/x;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-i;const y=this._sizeLods[r],T=3*y*(r>_-Lr?r-_+Lr:0),w=4*(this._cubeSize-y);ya(t,T,w,3*y,2*y),l.setRenderTarget(t),l.render(p,pl)}}function ly(n){const e=[],t=[],i=[];let r=n;const s=n-Lr+1+mh.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Lr?l=mh[a-n+Lr-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,p=1+c,d=[u,u,p,u,p,p,u,u,p,p,u,p],m=6,g=6,v=3,f=2,h=1,x=new Float32Array(v*g*m),_=new Float32Array(f*g*m),y=new Float32Array(h*g*m);for(let w=0;w<m;w++){const A=w%3*2/3-1,D=w>2?0:-1,b=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];x.set(b,v*g*w),_.set(d,f*g*w);const M=[w,w,w,w,w,w];y.set(M,h*g*w)}const T=new $t;T.setAttribute("position",new Vn(x,v)),T.setAttribute("uv",new Vn(_,f)),T.setAttribute("faceIndex",new Vn(y,h)),e.push(T),r>Lr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function xh(n,e,t){const i=new or(n,e,t);return i.texture.mapping=Ao,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ya(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function cy(n,e,t){const i=new Float32Array(Xi),r=new I(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function yh(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Mh(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function fu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function uy(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===ec||l===tc,u=l===jr||l===Yr;if(c||u){let p=e.get(o);const d=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new _h(n)),p=c?t.fromEquirectangular(o,p):t.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),p.texture;if(p!==void 0)return p.texture;{const m=o.image;return c&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new _h(n)),p=c?t.fromEquirectangular(o):t.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),o.addEventListener("dispose",s),p.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function fy(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&As("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function hy(n,e,t,i){const r={},s=new WeakMap;function a(p){const d=p.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let f=0,h=v.length;f<h;f++)e.remove(v[f])}d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(p,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(p){const d=p.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const m=p.morphAttributes;for(const g in m){const v=m[g];for(let f=0,h=v.length;f<h;f++)e.update(v[f],n.ARRAY_BUFFER)}}function c(p){const d=[],m=p.index,g=p.attributes.position;let v=0;if(m!==null){const x=m.array;v=m.version;for(let _=0,y=x.length;_<y;_+=3){const T=x[_+0],w=x[_+1],A=x[_+2];d.push(T,w,w,A,A,T)}}else if(g!==void 0){const x=g.array;v=g.version;for(let _=0,y=x.length/3-1;_<y;_+=3){const T=_+0,w=_+1,A=_+2;d.push(T,w,w,A,A,T)}}else return;const f=new(zp(d)?Wp:Gp)(d,1);f.version=v;const h=s.get(p);h&&e.remove(h),s.set(p,f)}function u(p){const d=s.get(p);if(d){const m=p.index;m!==null&&d.version<m.version&&c(p)}else c(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:u}}function dy(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,m){n.drawElements(i,m,s,d*a),t.update(m,i,1)}function c(d,m,g){g!==0&&(n.drawElementsInstanced(i,m,s,d*a,g),t.update(m,i,g))}function u(d,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,d,0,g);let f=0;for(let h=0;h<g;h++)f+=m[h];t.update(f,i,1)}function p(d,m,g,v){if(g===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let h=0;h<d.length;h++)c(d[h]/a,m[h],v[h]);else{f.multiDrawElementsInstancedWEBGL(i,m,0,s,d,0,v,0,g);let h=0;for(let x=0;x<g;x++)h+=m[x];for(let x=0;x<v.length;x++)t.update(h,i,v[x])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=p}function py(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function my(n,e,t){const i=new WeakMap,r=new Ot;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==p){let b=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let _=0;m===!0&&(_=1),g===!0&&(_=2),v===!0&&(_=3);let y=o.attributes.position.count*_,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const w=new Float32Array(y*T*4*p),A=new Vp(w,y,T,p);A.type=Jn,A.needsUpdate=!0;const D=_*4;for(let M=0;M<p;M++){const L=f[M],z=h[M],O=x[M],U=y*T*4*M;for(let X=0;X<L.count;X++){const H=X*D;m===!0&&(r.fromBufferAttribute(L,X),w[U+H+0]=r.x,w[U+H+1]=r.y,w[U+H+2]=r.z,w[U+H+3]=0),g===!0&&(r.fromBufferAttribute(z,X),w[U+H+4]=r.x,w[U+H+5]=r.y,w[U+H+6]=r.z,w[U+H+7]=0),v===!0&&(r.fromBufferAttribute(O,X),w[U+H+8]=r.x,w[U+H+9]=r.y,w[U+H+10]=r.z,w[U+H+11]=O.itemSize===4?r.w:1)}}d={count:p,texture:A,size:new qe(y,T)},i.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let m=0;for(let v=0;v<c.length;v++)m+=c[v];const g=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function gy(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,p=e.get(l,u);if(r.get(p)!==c&&(e.update(p),r.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return p}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class Zp extends nn{constructor(e,t,i,r,s,a,o,l,c,u=Fr){if(u!==Fr&&u!==Zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Fr&&(i=ar),i===void 0&&u===Zr&&(i=$r),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:xn,this.minFilter=l!==void 0?l:xn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Kp=new nn,Sh=new Zp(1,1),Qp=new Vp,Jp=new t_,e0=new jp,Eh=[],bh=[],wh=new Float32Array(16),Ah=new Float32Array(9),Th=new Float32Array(4);function ts(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Eh[r];if(s===void 0&&(s=new Float32Array(r),Eh[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Lt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function It(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Co(n,e){let t=bh[e];t===void 0&&(t=new Int32Array(e),bh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function vy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function _y(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2fv(this.addr,e),It(t,e)}}function xy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;n.uniform3fv(this.addr,e),It(t,e)}}function yy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4fv(this.addr,e),It(t,e)}}function My(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,i))return;Th.set(i),n.uniformMatrix2fv(this.addr,!1,Th),It(t,i)}}function Sy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,i))return;Ah.set(i),n.uniformMatrix3fv(this.addr,!1,Ah),It(t,i)}}function Ey(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,i))return;wh.set(i),n.uniformMatrix4fv(this.addr,!1,wh),It(t,i)}}function by(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function wy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2iv(this.addr,e),It(t,e)}}function Ay(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3iv(this.addr,e),It(t,e)}}function Ty(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4iv(this.addr,e),It(t,e)}}function Ry(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Cy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2uiv(this.addr,e),It(t,e)}}function Py(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3uiv(this.addr,e),It(t,e)}}function Ly(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4uiv(this.addr,e),It(t,e)}}function Iy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Sh.compareFunction=kp,s=Sh):s=Kp,t.setTexture2D(e||s,r)}function Dy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Jp,r)}function Uy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||e0,r)}function Ny(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Qp,r)}function Fy(n){switch(n){case 5126:return vy;case 35664:return _y;case 35665:return xy;case 35666:return yy;case 35674:return My;case 35675:return Sy;case 35676:return Ey;case 5124:case 35670:return by;case 35667:case 35671:return wy;case 35668:case 35672:return Ay;case 35669:case 35673:return Ty;case 5125:return Ry;case 36294:return Cy;case 36295:return Py;case 36296:return Ly;case 35678:case 36198:case 36298:case 36306:case 35682:return Iy;case 35679:case 36299:case 36307:return Dy;case 35680:case 36300:case 36308:case 36293:return Uy;case 36289:case 36303:case 36311:case 36292:return Ny}}function Oy(n,e){n.uniform1fv(this.addr,e)}function ky(n,e){const t=ts(e,this.size,2);n.uniform2fv(this.addr,t)}function zy(n,e){const t=ts(e,this.size,3);n.uniform3fv(this.addr,t)}function By(n,e){const t=ts(e,this.size,4);n.uniform4fv(this.addr,t)}function Vy(n,e){const t=ts(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Hy(n,e){const t=ts(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Gy(n,e){const t=ts(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Wy(n,e){n.uniform1iv(this.addr,e)}function Xy(n,e){n.uniform2iv(this.addr,e)}function qy(n,e){n.uniform3iv(this.addr,e)}function jy(n,e){n.uniform4iv(this.addr,e)}function Yy(n,e){n.uniform1uiv(this.addr,e)}function $y(n,e){n.uniform2uiv(this.addr,e)}function Zy(n,e){n.uniform3uiv(this.addr,e)}function Ky(n,e){n.uniform4uiv(this.addr,e)}function Qy(n,e,t){const i=this.cache,r=e.length,s=Co(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Kp,s[a])}function Jy(n,e,t){const i=this.cache,r=e.length,s=Co(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Jp,s[a])}function e5(n,e,t){const i=this.cache,r=e.length,s=Co(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||e0,s[a])}function t5(n,e,t){const i=this.cache,r=e.length,s=Co(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Qp,s[a])}function n5(n){switch(n){case 5126:return Oy;case 35664:return ky;case 35665:return zy;case 35666:return By;case 35674:return Vy;case 35675:return Hy;case 35676:return Gy;case 5124:case 35670:return Wy;case 35667:case 35671:return Xy;case 35668:case 35672:return qy;case 35669:case 35673:return jy;case 5125:return Yy;case 36294:return $y;case 36295:return Zy;case 36296:return Ky;case 35678:case 36198:case 36298:case 36306:case 35682:return Qy;case 35679:case 36299:case 36307:return Jy;case 35680:case 36300:case 36308:case 36293:return e5;case 36289:case 36303:case 36311:case 36292:return t5}}class i5{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Fy(t.type)}}class r5{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=n5(t.type)}}class s5{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const xl=/(\w+)(\])?(\[|\.)?/g;function Rh(n,e){n.seq.push(e),n.map[e.id]=e}function a5(n,e,t){const i=n.name,r=i.length;for(xl.lastIndex=0;;){const s=xl.exec(i),a=xl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Rh(t,c===void 0?new i5(o,n,e):new r5(o,n,e));break}else{let p=t.map[o];p===void 0&&(p=new s5(o),Rh(t,p)),t=p}}}class Ba{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);a5(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Ch(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const o5=37297;let l5=0;function c5(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function u5(n){const e=nt.getPrimaries(nt.workingColorSpace),t=nt.getPrimaries(n);let i;switch(e===t?i="":e===ro&&t===io?i="LinearDisplayP3ToLinearSRGB":e===io&&t===ro&&(i="LinearSRGBToLinearDisplayP3"),n){case Ci:case To:return[i,"LinearTransferOETF"];case Dn:case lu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Ph(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+c5(n.getShaderSource(e),a)}else return r}function f5(n,e){const t=u5(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function h5(n,e){let t;switch(e){case Rv:t="Linear";break;case Cv:t="Reinhard";break;case Pv:t="Cineon";break;case Lv:t="ACESFilmic";break;case Dv:t="AgX";break;case Uv:t="Neutral";break;case Iv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ma=new I;function d5(){nt.getLuminanceCoefficients(Ma);const n=Ma.x.toFixed(4),e=Ma.y.toFixed(4),t=Ma.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function p5(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_s).join(`
`)}function m5(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function g5(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function _s(n){return n!==""}function Lh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ih(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const v5=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lc(n){return n.replace(v5,x5)}const _5=new Map;function x5(n,e){let t=Be[e];if(t===void 0){const i=_5.get(e);if(i!==void 0)t=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Lc(t)}const y5=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dh(n){return n.replace(y5,M5)}function M5(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Uh(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function S5(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===wp?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ev?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Zn&&(e="SHADOWMAP_TYPE_VSM"),e}function E5(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case jr:case Yr:e="ENVMAP_TYPE_CUBE";break;case Ao:e="ENVMAP_TYPE_CUBE_UV";break}return e}function b5(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Yr:e="ENVMAP_MODE_REFRACTION";break}return e}function w5(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ap:e="ENVMAP_BLENDING_MULTIPLY";break;case Av:e="ENVMAP_BLENDING_MIX";break;case Tv:e="ENVMAP_BLENDING_ADD";break}return e}function A5(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function T5(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=S5(t),c=E5(t),u=b5(t),p=w5(t),d=A5(t),m=p5(t),g=m5(s),v=r.createProgram();let f,h,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(_s).join(`
`),f.length>0&&(f+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(_s).join(`
`),h.length>0&&(h+=`
`)):(f=[Uh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_s).join(`
`),h=[Uh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bi?"#define TONE_MAPPING":"",t.toneMapping!==bi?Be.tonemapping_pars_fragment:"",t.toneMapping!==bi?h5("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,f5("linearToOutputTexel",t.outputColorSpace),d5(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_s).join(`
`)),a=Lc(a),a=Lh(a,t),a=Ih(a,t),o=Lc(o),o=Lh(o,t),o=Ih(o,t),a=Dh(a),o=Dh(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,h=["#define varying in",t.glslVersion===$f?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$f?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const _=x+f+a,y=x+h+o,T=Ch(r,r.VERTEX_SHADER,_),w=Ch(r,r.FRAGMENT_SHADER,y);r.attachShader(v,T),r.attachShader(v,w),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function A(L){if(n.debug.checkShaderErrors){const z=r.getProgramInfoLog(v).trim(),O=r.getShaderInfoLog(T).trim(),U=r.getShaderInfoLog(w).trim();let X=!0,H=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,T,w);else{const $=Ph(r,T,"vertex"),W=Ph(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+z+`
`+$+`
`+W)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(O===""||U==="")&&(H=!1);H&&(L.diagnostics={runnable:X,programLog:z,vertexShader:{log:O,prefix:f},fragmentShader:{log:U,prefix:h}})}r.deleteShader(T),r.deleteShader(w),D=new Ba(r,v),b=g5(r,v)}let D;this.getUniforms=function(){return D===void 0&&A(this),D};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(v,o5)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=l5++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=w,this}let R5=0;class C5{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new P5(e),t.set(e,i)),i}}class P5{constructor(e){this.id=R5++,this.code=e,this.usedTimes=0}}function L5(n,e,t,i,r,s,a){const o=new uu,l=new C5,c=new Set,u=[],p=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function f(b,M,L,z,O){const U=z.fog,X=O.geometry,H=b.isMeshStandardMaterial?z.environment:null,$=(b.isMeshStandardMaterial?t:e).get(b.envMap||H),W=$&&$.mapping===Ao?$.image.height:null,ee=g[b.type];b.precision!==null&&(m=r.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const le=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,de=le!==void 0?le.length:0;let Re=0;X.morphAttributes.position!==void 0&&(Re=1),X.morphAttributes.normal!==void 0&&(Re=2),X.morphAttributes.color!==void 0&&(Re=3);let Ye,j,te,pe;if(ee){const Ke=Fn[ee];Ye=Ke.vertexShader,j=Ke.fragmentShader}else Ye=b.vertexShader,j=b.fragmentShader,l.update(b),te=l.getVertexShaderID(b),pe=l.getFragmentShaderID(b);const fe=n.getRenderTarget(),we=O.isInstancedMesh===!0,Ae=O.isBatchedMesh===!0,ke=!!b.map,ot=!!b.matcap,C=!!$,bt=!!b.aoMap,it=!!b.lightMap,at=!!b.bumpMap,be=!!b.normalMap,wt=!!b.displacementMap,Ue=!!b.emissiveMap,Oe=!!b.metalnessMap,R=!!b.roughnessMap,S=b.anisotropy>0,G=b.clearcoat>0,K=b.dispersion>0,J=b.iridescence>0,Q=b.sheen>0,Te=b.transmission>0,ce=S&&!!b.anisotropyMap,ge=G&&!!b.clearcoatMap,ze=G&&!!b.clearcoatNormalMap,ne=G&&!!b.clearcoatRoughnessMap,me=J&&!!b.iridescenceMap,je=J&&!!b.iridescenceThicknessMap,De=Q&&!!b.sheenColorMap,ve=Q&&!!b.sheenRoughnessMap,Fe=!!b.specularMap,We=!!b.specularColorMap,gt=!!b.specularIntensityMap,N=Te&&!!b.transmissionMap,ie=Te&&!!b.thicknessMap,Y=!!b.gradientMap,Z=!!b.alphaMap,ae=b.alphaTest>0,Ce=!!b.alphaHash,$e=!!b.extensions;let At=bi;b.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(At=n.toneMapping);const kt={shaderID:ee,shaderType:b.type,shaderName:b.name,vertexShader:Ye,fragmentShader:j,defines:b.defines,customVertexShaderID:te,customFragmentShaderID:pe,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:Ae,batchingColor:Ae&&O._colorsTexture!==null,instancing:we,instancingColor:we&&O.instanceColor!==null,instancingMorph:we&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:fe===null?n.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Ci,alphaToCoverage:!!b.alphaToCoverage,map:ke,matcap:ot,envMap:C,envMapMode:C&&$.mapping,envMapCubeUVHeight:W,aoMap:bt,lightMap:it,bumpMap:at,normalMap:be,displacementMap:d&&wt,emissiveMap:Ue,normalMapObjectSpace:be&&b.normalMapType===zv,normalMapTangentSpace:be&&b.normalMapType===kv,metalnessMap:Oe,roughnessMap:R,anisotropy:S,anisotropyMap:ce,clearcoat:G,clearcoatMap:ge,clearcoatNormalMap:ze,clearcoatRoughnessMap:ne,dispersion:K,iridescence:J,iridescenceMap:me,iridescenceThicknessMap:je,sheen:Q,sheenColorMap:De,sheenRoughnessMap:ve,specularMap:Fe,specularColorMap:We,specularIntensityMap:gt,transmission:Te,transmissionMap:N,thicknessMap:ie,gradientMap:Y,opaque:b.transparent===!1&&b.blending===Nr&&b.alphaToCoverage===!1,alphaMap:Z,alphaTest:ae,alphaHash:Ce,combine:b.combine,mapUv:ke&&v(b.map.channel),aoMapUv:bt&&v(b.aoMap.channel),lightMapUv:it&&v(b.lightMap.channel),bumpMapUv:at&&v(b.bumpMap.channel),normalMapUv:be&&v(b.normalMap.channel),displacementMapUv:wt&&v(b.displacementMap.channel),emissiveMapUv:Ue&&v(b.emissiveMap.channel),metalnessMapUv:Oe&&v(b.metalnessMap.channel),roughnessMapUv:R&&v(b.roughnessMap.channel),anisotropyMapUv:ce&&v(b.anisotropyMap.channel),clearcoatMapUv:ge&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:ze&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:je&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:De&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:ve&&v(b.sheenRoughnessMap.channel),specularMapUv:Fe&&v(b.specularMap.channel),specularColorMapUv:We&&v(b.specularColorMap.channel),specularIntensityMapUv:gt&&v(b.specularIntensityMap.channel),transmissionMapUv:N&&v(b.transmissionMap.channel),thicknessMapUv:ie&&v(b.thicknessMap.channel),alphaMapUv:Z&&v(b.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(be||S),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!X.attributes.uv&&(ke||Z),fog:!!U,useFog:b.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:O.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Re,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:At,decodeVideoTexture:ke&&b.map.isVideoTexture===!0&&nt.getTransfer(b.map.colorSpace)===ut,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===On,flipSided:b.side===tn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:$e&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&b.extensions.multiDraw===!0||Ae)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return kt.vertexUv1s=c.has(1),kt.vertexUv2s=c.has(2),kt.vertexUv3s=c.has(3),c.clear(),kt}function h(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)M.push(L),M.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(x(M,b),_(M,b),M.push(n.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function x(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function _(b,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.doubleSided&&o.enable(10),M.flipSided&&o.enable(11),M.useDepthPacking&&o.enable(12),M.dithering&&o.enable(13),M.transmission&&o.enable(14),M.sheen&&o.enable(15),M.opaque&&o.enable(16),M.pointsUvs&&o.enable(17),M.decodeVideoTexture&&o.enable(18),M.alphaToCoverage&&o.enable(19),b.push(o.mask)}function y(b){const M=g[b.type];let L;if(M){const z=Fn[M];L=d_.clone(z.uniforms)}else L=b.uniforms;return L}function T(b,M){let L;for(let z=0,O=u.length;z<O;z++){const U=u[z];if(U.cacheKey===M){L=U,++L.usedTimes;break}}return L===void 0&&(L=new T5(n,M,b,s),u.push(L)),L}function w(b){if(--b.usedTimes===0){const M=u.indexOf(b);u[M]=u[u.length-1],u.pop(),b.destroy()}}function A(b){l.remove(b)}function D(){l.dispose()}return{getParameters:f,getProgramCacheKey:h,getUniforms:y,acquireProgram:T,releaseProgram:w,releaseShaderCache:A,programs:u,dispose:D}}function I5(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function D5(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Nh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Fh(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(p,d,m,g,v,f){let h=n[e];return h===void 0?(h={id:p.id,object:p,geometry:d,material:m,groupOrder:g,renderOrder:p.renderOrder,z:v,group:f},n[e]=h):(h.id=p.id,h.object=p,h.geometry=d,h.material=m,h.groupOrder=g,h.renderOrder=p.renderOrder,h.z=v,h.group=f),e++,h}function o(p,d,m,g,v,f){const h=a(p,d,m,g,v,f);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):t.push(h)}function l(p,d,m,g,v,f){const h=a(p,d,m,g,v,f);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):t.unshift(h)}function c(p,d){t.length>1&&t.sort(p||D5),i.length>1&&i.sort(d||Nh),r.length>1&&r.sort(d||Nh)}function u(){for(let p=e,d=n.length;p<d;p++){const m=n[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function U5(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Fh,n.set(i,[a])):r>=s.length?(a=new Fh,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function N5(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new rt};break;case"SpotLight":t={position:new I,direction:new I,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function F5(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let O5=0;function k5(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function z5(n){const e=new N5,t=F5(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);const r=new I,s=new _t,a=new _t;function o(c){let u=0,p=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let m=0,g=0,v=0,f=0,h=0,x=0,_=0,y=0,T=0,w=0,A=0;c.sort(k5);for(let b=0,M=c.length;b<M;b++){const L=c[b],z=L.color,O=L.intensity,U=L.distance,X=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=z.r*O,p+=z.g*O,d+=z.b*O;else if(L.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(L.sh.coefficients[H],O);A++}else if(L.isDirectionalLight){const H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const $=L.shadow,W=t.get(L);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,i.directionalShadow[m]=W,i.directionalShadowMap[m]=X,i.directionalShadowMatrix[m]=L.shadow.matrix,x++}i.directional[m]=H,m++}else if(L.isSpotLight){const H=e.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(z).multiplyScalar(O),H.distance=U,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,i.spot[v]=H;const $=L.shadow;if(L.map&&(i.spotLightMap[T]=L.map,T++,$.updateMatrices(L),L.castShadow&&w++),i.spotLightMatrix[v]=$.matrix,L.castShadow){const W=t.get(L);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,i.spotShadow[v]=W,i.spotShadowMap[v]=X,y++}v++}else if(L.isRectAreaLight){const H=e.get(L);H.color.copy(z).multiplyScalar(O),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),i.rectArea[f]=H,f++}else if(L.isPointLight){const H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),H.distance=L.distance,H.decay=L.decay,L.castShadow){const $=L.shadow,W=t.get(L);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,W.shadowCameraNear=$.camera.near,W.shadowCameraFar=$.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=X,i.pointShadowMatrix[g]=L.shadow.matrix,_++}i.point[g]=H,g++}else if(L.isHemisphereLight){const H=e.get(L);H.skyColor.copy(L.color).multiplyScalar(O),H.groundColor.copy(L.groundColor).multiplyScalar(O),i.hemi[h]=H,h++}}f>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=p,i.ambient[2]=d;const D=i.hash;(D.directionalLength!==m||D.pointLength!==g||D.spotLength!==v||D.rectAreaLength!==f||D.hemiLength!==h||D.numDirectionalShadows!==x||D.numPointShadows!==_||D.numSpotShadows!==y||D.numSpotMaps!==T||D.numLightProbes!==A)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=f,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=y+T-w,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=A,D.directionalLength=m,D.pointLength=g,D.spotLength=v,D.rectAreaLength=f,D.hemiLength=h,D.numDirectionalShadows=x,D.numPointShadows=_,D.numSpotShadows=y,D.numSpotMaps=T,D.numLightProbes=A,i.version=O5++)}function l(c,u){let p=0,d=0,m=0,g=0,v=0;const f=u.matrixWorldInverse;for(let h=0,x=c.length;h<x;h++){const _=c[h];if(_.isDirectionalLight){const y=i.directional[p];y.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(f),p++}else if(_.isSpotLight){const y=i.spot[m];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(f),y.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(f),m++}else if(_.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(f),a.identity(),s.copy(_.matrixWorld),s.premultiply(f),a.extractRotation(s),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(f),d++}else if(_.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(f),v++}}}return{setup:o,setupView:l,state:i}}function Oh(n){const e=new z5(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function B5(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Oh(n),e.set(r,[o])):s>=a.length?(o=new Oh(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class V5 extends Ws{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class H5 extends Ws{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const G5=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,W5=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function X5(n,e,t){let i=new Yp;const r=new qe,s=new qe,a=new Ot,o=new V5({depthPacking:Ov}),l=new H5,c={},u=t.maxTextureSize,p={[ii]:tn,[tn]:ii,[On]:On},d=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:G5,fragmentShader:W5}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new $t;g.setAttribute("position",new Vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ue(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wp;let h=this.type;this.render=function(w,A,D){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||w.length===0)return;const b=n.getRenderTarget(),M=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Ei),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const O=h!==Zn&&this.type===Zn,U=h===Zn&&this.type!==Zn;for(let X=0,H=w.length;X<H;X++){const $=w[X],W=$.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const ee=W.getFrameExtents();if(r.multiply(ee),s.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ee.x),r.x=s.x*ee.x,W.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ee.y),r.y=s.y*ee.y,W.mapSize.y=s.y)),W.map===null||O===!0||U===!0){const de=this.type!==Zn?{minFilter:xn,magFilter:xn}:{};W.map!==null&&W.map.dispose(),W.map=new or(r.x,r.y,de),W.map.texture.name=$.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const le=W.getViewportCount();for(let de=0;de<le;de++){const Re=W.getViewport(de);a.set(s.x*Re.x,s.y*Re.y,s.x*Re.z,s.y*Re.w),z.viewport(a),W.updateMatrices($,de),i=W.getFrustum(),y(A,D,W.camera,$,this.type)}W.isPointLightShadow!==!0&&this.type===Zn&&x(W,D),W.needsUpdate=!1}h=this.type,f.needsUpdate=!1,n.setRenderTarget(b,M,L)};function x(w,A){const D=e.update(v);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new or(r.x,r.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(A,null,D,d,v,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(A,null,D,m,v,null)}function _(w,A,D,b){let M=null;const L=D.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)M=L;else if(M=D.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=M.uuid,O=A.uuid;let U=c[z];U===void 0&&(U={},c[z]=U);let X=U[O];X===void 0&&(X=M.clone(),U[O]=X,A.addEventListener("dispose",T)),M=X}if(M.visible=A.visible,M.wireframe=A.wireframe,b===Zn?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:p[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=n.properties.get(M);z.light=D}return M}function y(w,A,D,b,M){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===Zn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,w.matrixWorld);const O=e.update(w),U=w.material;if(Array.isArray(U)){const X=O.groups;for(let H=0,$=X.length;H<$;H++){const W=X[H],ee=U[W.materialIndex];if(ee&&ee.visible){const le=_(w,ee,b,M);w.onBeforeShadow(n,w,A,D,O,le,W),n.renderBufferDirect(D,null,O,le,w,W),w.onAfterShadow(n,w,A,D,O,le,W)}}}else if(U.visible){const X=_(w,U,b,M);w.onBeforeShadow(n,w,A,D,O,X,null),n.renderBufferDirect(D,null,O,X,w,null),w.onAfterShadow(n,w,A,D,O,X,null)}}const z=w.children;for(let O=0,U=z.length;O<U;O++)y(z[O],A,D,b,M)}function T(w){w.target.removeEventListener("dispose",T);for(const D in c){const b=c[D],M=w.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}function q5(n){function e(){let N=!1;const ie=new Ot;let Y=null;const Z=new Ot(0,0,0,0);return{setMask:function(ae){Y!==ae&&!N&&(n.colorMask(ae,ae,ae,ae),Y=ae)},setLocked:function(ae){N=ae},setClear:function(ae,Ce,$e,At,kt){kt===!0&&(ae*=At,Ce*=At,$e*=At),ie.set(ae,Ce,$e,At),Z.equals(ie)===!1&&(n.clearColor(ae,Ce,$e,At),Z.copy(ie))},reset:function(){N=!1,Y=null,Z.set(-1,0,0,0)}}}function t(){let N=!1,ie=null,Y=null,Z=null;return{setTest:function(ae){ae?pe(n.DEPTH_TEST):fe(n.DEPTH_TEST)},setMask:function(ae){ie!==ae&&!N&&(n.depthMask(ae),ie=ae)},setFunc:function(ae){if(Y!==ae){switch(ae){case xv:n.depthFunc(n.NEVER);break;case yv:n.depthFunc(n.ALWAYS);break;case Mv:n.depthFunc(n.LESS);break;case to:n.depthFunc(n.LEQUAL);break;case Sv:n.depthFunc(n.EQUAL);break;case Ev:n.depthFunc(n.GEQUAL);break;case bv:n.depthFunc(n.GREATER);break;case wv:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Y=ae}},setLocked:function(ae){N=ae},setClear:function(ae){Z!==ae&&(n.clearDepth(ae),Z=ae)},reset:function(){N=!1,ie=null,Y=null,Z=null}}}function i(){let N=!1,ie=null,Y=null,Z=null,ae=null,Ce=null,$e=null,At=null,kt=null;return{setTest:function(Ke){N||(Ke?pe(n.STENCIL_TEST):fe(n.STENCIL_TEST))},setMask:function(Ke){ie!==Ke&&!N&&(n.stencilMask(Ke),ie=Ke)},setFunc:function(Ke,Wn,Ln){(Y!==Ke||Z!==Wn||ae!==Ln)&&(n.stencilFunc(Ke,Wn,Ln),Y=Ke,Z=Wn,ae=Ln)},setOp:function(Ke,Wn,Ln){(Ce!==Ke||$e!==Wn||At!==Ln)&&(n.stencilOp(Ke,Wn,Ln),Ce=Ke,$e=Wn,At=Ln)},setLocked:function(Ke){N=Ke},setClear:function(Ke){kt!==Ke&&(n.clearStencil(Ke),kt=Ke)},reset:function(){N=!1,ie=null,Y=null,Z=null,ae=null,Ce=null,$e=null,At=null,kt=null}}}const r=new e,s=new t,a=new i,o=new WeakMap,l=new WeakMap;let c={},u={},p=new WeakMap,d=[],m=null,g=!1,v=null,f=null,h=null,x=null,_=null,y=null,T=null,w=new rt(0,0,0),A=0,D=!1,b=null,M=null,L=null,z=null,O=null;const U=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,H=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec($)[1]),X=H>=1):$.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),X=H>=2);let W=null,ee={};const le=n.getParameter(n.SCISSOR_BOX),de=n.getParameter(n.VIEWPORT),Re=new Ot().fromArray(le),Ye=new Ot().fromArray(de);function j(N,ie,Y,Z){const ae=new Uint8Array(4),Ce=n.createTexture();n.bindTexture(N,Ce),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let $e=0;$e<Y;$e++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(ie,0,n.RGBA,1,1,Z,0,n.RGBA,n.UNSIGNED_BYTE,ae):n.texImage2D(ie+$e,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ae);return Ce}const te={};te[n.TEXTURE_2D]=j(n.TEXTURE_2D,n.TEXTURE_2D,1),te[n.TEXTURE_CUBE_MAP]=j(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[n.TEXTURE_2D_ARRAY]=j(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),te[n.TEXTURE_3D]=j(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),pe(n.DEPTH_TEST),s.setFunc(to),at(!1),be(Gf),pe(n.CULL_FACE),bt(Ei);function pe(N){c[N]!==!0&&(n.enable(N),c[N]=!0)}function fe(N){c[N]!==!1&&(n.disable(N),c[N]=!1)}function we(N,ie){return u[N]!==ie?(n.bindFramebuffer(N,ie),u[N]=ie,N===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ie),N===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ie),!0):!1}function Ae(N,ie){let Y=d,Z=!1;if(N){Y=p.get(ie),Y===void 0&&(Y=[],p.set(ie,Y));const ae=N.textures;if(Y.length!==ae.length||Y[0]!==n.COLOR_ATTACHMENT0){for(let Ce=0,$e=ae.length;Ce<$e;Ce++)Y[Ce]=n.COLOR_ATTACHMENT0+Ce;Y.length=ae.length,Z=!0}}else Y[0]!==n.BACK&&(Y[0]=n.BACK,Z=!0);Z&&n.drawBuffers(Y)}function ke(N){return m!==N?(n.useProgram(N),m=N,!0):!1}const ot={[Wi]:n.FUNC_ADD,[nv]:n.FUNC_SUBTRACT,[iv]:n.FUNC_REVERSE_SUBTRACT};ot[rv]=n.MIN,ot[sv]=n.MAX;const C={[av]:n.ZERO,[ov]:n.ONE,[lv]:n.SRC_COLOR,[Ql]:n.SRC_ALPHA,[pv]:n.SRC_ALPHA_SATURATE,[hv]:n.DST_COLOR,[uv]:n.DST_ALPHA,[cv]:n.ONE_MINUS_SRC_COLOR,[Jl]:n.ONE_MINUS_SRC_ALPHA,[dv]:n.ONE_MINUS_DST_COLOR,[fv]:n.ONE_MINUS_DST_ALPHA,[mv]:n.CONSTANT_COLOR,[gv]:n.ONE_MINUS_CONSTANT_COLOR,[vv]:n.CONSTANT_ALPHA,[_v]:n.ONE_MINUS_CONSTANT_ALPHA};function bt(N,ie,Y,Z,ae,Ce,$e,At,kt,Ke){if(N===Ei){g===!0&&(fe(n.BLEND),g=!1);return}if(g===!1&&(pe(n.BLEND),g=!0),N!==tv){if(N!==v||Ke!==D){if((f!==Wi||_!==Wi)&&(n.blendEquation(n.FUNC_ADD),f=Wi,_=Wi),Ke)switch(N){case Nr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wf:n.blendFunc(n.ONE,n.ONE);break;case Xf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qf:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Nr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Wf:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Xf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qf:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}h=null,x=null,y=null,T=null,w.set(0,0,0),A=0,v=N,D=Ke}return}ae=ae||ie,Ce=Ce||Y,$e=$e||Z,(ie!==f||ae!==_)&&(n.blendEquationSeparate(ot[ie],ot[ae]),f=ie,_=ae),(Y!==h||Z!==x||Ce!==y||$e!==T)&&(n.blendFuncSeparate(C[Y],C[Z],C[Ce],C[$e]),h=Y,x=Z,y=Ce,T=$e),(At.equals(w)===!1||kt!==A)&&(n.blendColor(At.r,At.g,At.b,kt),w.copy(At),A=kt),v=N,D=!1}function it(N,ie){N.side===On?fe(n.CULL_FACE):pe(n.CULL_FACE);let Y=N.side===tn;ie&&(Y=!Y),at(Y),N.blending===Nr&&N.transparent===!1?bt(Ei):bt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),r.setMask(N.colorWrite);const Z=N.stencilWrite;a.setTest(Z),Z&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ue(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?pe(n.SAMPLE_ALPHA_TO_COVERAGE):fe(n.SAMPLE_ALPHA_TO_COVERAGE)}function at(N){b!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),b=N)}function be(N){N!==Q2?(pe(n.CULL_FACE),N!==M&&(N===Gf?n.cullFace(n.BACK):N===J2?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):fe(n.CULL_FACE),M=N}function wt(N){N!==L&&(X&&n.lineWidth(N),L=N)}function Ue(N,ie,Y){N?(pe(n.POLYGON_OFFSET_FILL),(z!==ie||O!==Y)&&(n.polygonOffset(ie,Y),z=ie,O=Y)):fe(n.POLYGON_OFFSET_FILL)}function Oe(N){N?pe(n.SCISSOR_TEST):fe(n.SCISSOR_TEST)}function R(N){N===void 0&&(N=n.TEXTURE0+U-1),W!==N&&(n.activeTexture(N),W=N)}function S(N,ie,Y){Y===void 0&&(W===null?Y=n.TEXTURE0+U-1:Y=W);let Z=ee[Y];Z===void 0&&(Z={type:void 0,texture:void 0},ee[Y]=Z),(Z.type!==N||Z.texture!==ie)&&(W!==Y&&(n.activeTexture(Y),W=Y),n.bindTexture(N,ie||te[N]),Z.type=N,Z.texture=ie)}function G(){const N=ee[W];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function K(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ce(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ge(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ze(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ne(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function me(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function je(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function De(N){Re.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),Re.copy(N))}function ve(N){Ye.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Ye.copy(N))}function Fe(N,ie){let Y=l.get(ie);Y===void 0&&(Y=new WeakMap,l.set(ie,Y));let Z=Y.get(N);Z===void 0&&(Z=n.getUniformBlockIndex(ie,N.name),Y.set(N,Z))}function We(N,ie){const Z=l.get(ie).get(N);o.get(ie)!==Z&&(n.uniformBlockBinding(ie,Z,N.__bindingPointIndex),o.set(ie,Z))}function gt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},W=null,ee={},u={},p=new WeakMap,d=[],m=null,g=!1,v=null,f=null,h=null,x=null,_=null,y=null,T=null,w=new rt(0,0,0),A=0,D=!1,b=null,M=null,L=null,z=null,O=null,Re.set(0,0,n.canvas.width,n.canvas.height),Ye.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:pe,disable:fe,bindFramebuffer:we,drawBuffers:Ae,useProgram:ke,setBlending:bt,setMaterial:it,setFlipSided:at,setCullFace:be,setLineWidth:wt,setPolygonOffset:Ue,setScissorTest:Oe,activeTexture:R,bindTexture:S,unbindTexture:G,compressedTexImage2D:K,compressedTexImage3D:J,texImage2D:me,texImage3D:je,updateUBOMapping:Fe,uniformBlockBinding:We,texStorage2D:ze,texStorage3D:ne,texSubImage2D:Q,texSubImage3D:Te,compressedTexSubImage2D:ce,compressedTexSubImage3D:ge,scissor:De,viewport:ve,reset:gt}}function kh(n,e,t,i){const r=j5(i);switch(t){case Lp:return n*e;case Dp:return n*e;case Up:return n*e*2;case Np:return n*e/r.components*r.byteLength;case su:return n*e/r.components*r.byteLength;case Fp:return n*e*2/r.components*r.byteLength;case au:return n*e*2/r.components*r.byteLength;case Ip:return n*e*3/r.components*r.byteLength;case Tn:return n*e*4/r.components*r.byteLength;case ou:return n*e*4/r.components*r.byteLength;case Na:case Fa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Oa:case ka:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case sc:case oc:return Math.max(n,16)*Math.max(e,8)/4;case rc:case ac:return Math.max(n,8)*Math.max(e,8)/2;case lc:case cc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case uc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case hc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case dc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case pc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case mc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case gc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case vc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case _c:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case xc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case yc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Mc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Sc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ec:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case bc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case za:case wc:case Ac:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Op:case Tc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Rc:case Cc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function j5(n){switch(n){case ri:case Rp:return{byteLength:1,components:1};case Fs:case Cp:case Vs:return{byteLength:2,components:1};case iu:case ru:return{byteLength:2,components:4};case ar:case nu:case Jn:return{byteLength:4,components:1};case Pp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Y5(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new qe,u=new WeakMap;let p;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,S){return m?new OffscreenCanvas(R,S):ao("canvas")}function v(R,S,G){let K=1;const J=Oe(R);if((J.width>G||J.height>G)&&(K=G/Math.max(J.width,J.height)),K<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Q=Math.floor(K*J.width),Te=Math.floor(K*J.height);p===void 0&&(p=g(Q,Te));const ce=S?g(Q,Te):p;return ce.width=Q,ce.height=Te,ce.getContext("2d").drawImage(R,0,0,Q,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Q+"x"+Te+")."),ce}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function f(R){return R.generateMipmaps&&R.minFilter!==xn&&R.minFilter!==wn}function h(R){n.generateMipmap(R)}function x(R,S,G,K,J=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Q=S;if(S===n.RED&&(G===n.FLOAT&&(Q=n.R32F),G===n.HALF_FLOAT&&(Q=n.R16F),G===n.UNSIGNED_BYTE&&(Q=n.R8)),S===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(Q=n.R8UI),G===n.UNSIGNED_SHORT&&(Q=n.R16UI),G===n.UNSIGNED_INT&&(Q=n.R32UI),G===n.BYTE&&(Q=n.R8I),G===n.SHORT&&(Q=n.R16I),G===n.INT&&(Q=n.R32I)),S===n.RG&&(G===n.FLOAT&&(Q=n.RG32F),G===n.HALF_FLOAT&&(Q=n.RG16F),G===n.UNSIGNED_BYTE&&(Q=n.RG8)),S===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(Q=n.RG8UI),G===n.UNSIGNED_SHORT&&(Q=n.RG16UI),G===n.UNSIGNED_INT&&(Q=n.RG32UI),G===n.BYTE&&(Q=n.RG8I),G===n.SHORT&&(Q=n.RG16I),G===n.INT&&(Q=n.RG32I)),S===n.RGB&&G===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),S===n.RGBA){const Te=J?no:nt.getTransfer(K);G===n.FLOAT&&(Q=n.RGBA32F),G===n.HALF_FLOAT&&(Q=n.RGBA16F),G===n.UNSIGNED_BYTE&&(Q=Te===ut?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function _(R,S){let G;return R?S===null||S===ar||S===$r?G=n.DEPTH24_STENCIL8:S===Jn?G=n.DEPTH32F_STENCIL8:S===Fs&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ar||S===$r?G=n.DEPTH_COMPONENT24:S===Jn?G=n.DEPTH_COMPONENT32F:S===Fs&&(G=n.DEPTH_COMPONENT16),G}function y(R,S){return f(R)===!0||R.isFramebufferTexture&&R.minFilter!==xn&&R.minFilter!==wn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function T(R){const S=R.target;S.removeEventListener("dispose",T),A(S),S.isVideoTexture&&u.delete(S)}function w(R){const S=R.target;S.removeEventListener("dispose",w),b(S)}function A(R){const S=i.get(R);if(S.__webglInit===void 0)return;const G=R.source,K=d.get(G);if(K){const J=K[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&D(R),Object.keys(K).length===0&&d.delete(G)}i.remove(R)}function D(R){const S=i.get(R);n.deleteTexture(S.__webglTexture);const G=R.source,K=d.get(G);delete K[S.__cacheKey],a.memory.textures--}function b(R){const S=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(S.__webglFramebuffer[K]))for(let J=0;J<S.__webglFramebuffer[K].length;J++)n.deleteFramebuffer(S.__webglFramebuffer[K][J]);else n.deleteFramebuffer(S.__webglFramebuffer[K]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[K])}else{if(Array.isArray(S.__webglFramebuffer))for(let K=0;K<S.__webglFramebuffer.length;K++)n.deleteFramebuffer(S.__webglFramebuffer[K]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let K=0;K<S.__webglColorRenderbuffer.length;K++)S.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[K]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const G=R.textures;for(let K=0,J=G.length;K<J;K++){const Q=i.get(G[K]);Q.__webglTexture&&(n.deleteTexture(Q.__webglTexture),a.memory.textures--),i.remove(G[K])}i.remove(R)}let M=0;function L(){M=0}function z(){const R=M;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),M+=1,R}function O(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function U(R,S){const G=i.get(R);if(R.isVideoTexture&&wt(R),R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){const K=R.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ye(G,R,S);return}}t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+S)}function X(R,S){const G=i.get(R);if(R.version>0&&G.__version!==R.version){Ye(G,R,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+S)}function H(R,S){const G=i.get(R);if(R.version>0&&G.__version!==R.version){Ye(G,R,S);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+S)}function $(R,S){const G=i.get(R);if(R.version>0&&G.__version!==R.version){j(G,R,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+S)}const W={[nc]:n.REPEAT,[Yi]:n.CLAMP_TO_EDGE,[ic]:n.MIRRORED_REPEAT},ee={[xn]:n.NEAREST,[Nv]:n.NEAREST_MIPMAP_NEAREST,[ea]:n.NEAREST_MIPMAP_LINEAR,[wn]:n.LINEAR,[jo]:n.LINEAR_MIPMAP_NEAREST,[$i]:n.LINEAR_MIPMAP_LINEAR},le={[Bv]:n.NEVER,[qv]:n.ALWAYS,[Vv]:n.LESS,[kp]:n.LEQUAL,[Hv]:n.EQUAL,[Xv]:n.GEQUAL,[Gv]:n.GREATER,[Wv]:n.NOTEQUAL};function de(R,S){if(S.type===Jn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===wn||S.magFilter===jo||S.magFilter===ea||S.magFilter===$i||S.minFilter===wn||S.minFilter===jo||S.minFilter===ea||S.minFilter===$i)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,W[S.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,W[S.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,W[S.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,ee[S.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,ee[S.minFilter]),S.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,le[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===xn||S.minFilter!==ea&&S.minFilter!==$i||S.type===Jn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Re(R,S){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",T));const K=S.source;let J=d.get(K);J===void 0&&(J={},d.set(K,J));const Q=O(S);if(Q!==R.__cacheKey){J[Q]===void 0&&(J[Q]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,G=!0),J[Q].usedTimes++;const Te=J[R.__cacheKey];Te!==void 0&&(J[R.__cacheKey].usedTimes--,Te.usedTimes===0&&D(S)),R.__cacheKey=Q,R.__webglTexture=J[Q].texture}return G}function Ye(R,S,G){let K=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(K=n.TEXTURE_3D);const J=Re(R,S),Q=S.source;t.bindTexture(K,R.__webglTexture,n.TEXTURE0+G);const Te=i.get(Q);if(Q.version!==Te.__version||J===!0){t.activeTexture(n.TEXTURE0+G);const ce=nt.getPrimaries(nt.workingColorSpace),ge=S.colorSpace===Mi?null:nt.getPrimaries(S.colorSpace),ze=S.colorSpace===Mi||ce===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let ne=v(S.image,!1,r.maxTextureSize);ne=Ue(S,ne);const me=s.convert(S.format,S.colorSpace),je=s.convert(S.type);let De=x(S.internalFormat,me,je,S.colorSpace,S.isVideoTexture);de(K,S);let ve;const Fe=S.mipmaps,We=S.isVideoTexture!==!0,gt=Te.__version===void 0||J===!0,N=Q.dataReady,ie=y(S,ne);if(S.isDepthTexture)De=_(S.format===Zr,S.type),gt&&(We?t.texStorage2D(n.TEXTURE_2D,1,De,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,De,ne.width,ne.height,0,me,je,null));else if(S.isDataTexture)if(Fe.length>0){We&&gt&&t.texStorage2D(n.TEXTURE_2D,ie,De,Fe[0].width,Fe[0].height);for(let Y=0,Z=Fe.length;Y<Z;Y++)ve=Fe[Y],We?N&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,ve.width,ve.height,me,je,ve.data):t.texImage2D(n.TEXTURE_2D,Y,De,ve.width,ve.height,0,me,je,ve.data);S.generateMipmaps=!1}else We?(gt&&t.texStorage2D(n.TEXTURE_2D,ie,De,ne.width,ne.height),N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ne.width,ne.height,me,je,ne.data)):t.texImage2D(n.TEXTURE_2D,0,De,ne.width,ne.height,0,me,je,ne.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){We&&gt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ie,De,Fe[0].width,Fe[0].height,ne.depth);for(let Y=0,Z=Fe.length;Y<Z;Y++)if(ve=Fe[Y],S.format!==Tn)if(me!==null)if(We){if(N)if(S.layerUpdates.size>0){const ae=kh(ve.width,ve.height,S.format,S.type);for(const Ce of S.layerUpdates){const $e=ve.data.subarray(Ce*ae/ve.data.BYTES_PER_ELEMENT,(Ce+1)*ae/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,Ce,ve.width,ve.height,1,me,$e,0,0)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,ve.width,ve.height,ne.depth,me,ve.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Y,De,ve.width,ve.height,ne.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,ve.width,ve.height,ne.depth,me,je,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Y,De,ve.width,ve.height,ne.depth,0,me,je,ve.data)}else{We&&gt&&t.texStorage2D(n.TEXTURE_2D,ie,De,Fe[0].width,Fe[0].height);for(let Y=0,Z=Fe.length;Y<Z;Y++)ve=Fe[Y],S.format!==Tn?me!==null?We?N&&t.compressedTexSubImage2D(n.TEXTURE_2D,Y,0,0,ve.width,ve.height,me,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,Y,De,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?N&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,ve.width,ve.height,me,je,ve.data):t.texImage2D(n.TEXTURE_2D,Y,De,ve.width,ve.height,0,me,je,ve.data)}else if(S.isDataArrayTexture)if(We){if(gt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ie,De,ne.width,ne.height,ne.depth),N)if(S.layerUpdates.size>0){const Y=kh(ne.width,ne.height,S.format,S.type);for(const Z of S.layerUpdates){const ae=ne.data.subarray(Z*Y/ne.data.BYTES_PER_ELEMENT,(Z+1)*Y/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,ne.width,ne.height,1,me,je,ae)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,me,je,ne.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,ne.width,ne.height,ne.depth,0,me,je,ne.data);else if(S.isData3DTexture)We?(gt&&t.texStorage3D(n.TEXTURE_3D,ie,De,ne.width,ne.height,ne.depth),N&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,me,je,ne.data)):t.texImage3D(n.TEXTURE_3D,0,De,ne.width,ne.height,ne.depth,0,me,je,ne.data);else if(S.isFramebufferTexture){if(gt)if(We)t.texStorage2D(n.TEXTURE_2D,ie,De,ne.width,ne.height);else{let Y=ne.width,Z=ne.height;for(let ae=0;ae<ie;ae++)t.texImage2D(n.TEXTURE_2D,ae,De,Y,Z,0,me,je,null),Y>>=1,Z>>=1}}else if(Fe.length>0){if(We&&gt){const Y=Oe(Fe[0]);t.texStorage2D(n.TEXTURE_2D,ie,De,Y.width,Y.height)}for(let Y=0,Z=Fe.length;Y<Z;Y++)ve=Fe[Y],We?N&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,me,je,ve):t.texImage2D(n.TEXTURE_2D,Y,De,me,je,ve);S.generateMipmaps=!1}else if(We){if(gt){const Y=Oe(ne);t.texStorage2D(n.TEXTURE_2D,ie,De,Y.width,Y.height)}N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me,je,ne)}else t.texImage2D(n.TEXTURE_2D,0,De,me,je,ne);f(S)&&h(K),Te.__version=Q.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function j(R,S,G){if(S.image.length!==6)return;const K=Re(R,S),J=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+G);const Q=i.get(J);if(J.version!==Q.__version||K===!0){t.activeTexture(n.TEXTURE0+G);const Te=nt.getPrimaries(nt.workingColorSpace),ce=S.colorSpace===Mi?null:nt.getPrimaries(S.colorSpace),ge=S.colorSpace===Mi||Te===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const ze=S.isCompressedTexture||S.image[0].isCompressedTexture,ne=S.image[0]&&S.image[0].isDataTexture,me=[];for(let Z=0;Z<6;Z++)!ze&&!ne?me[Z]=v(S.image[Z],!0,r.maxCubemapSize):me[Z]=ne?S.image[Z].image:S.image[Z],me[Z]=Ue(S,me[Z]);const je=me[0],De=s.convert(S.format,S.colorSpace),ve=s.convert(S.type),Fe=x(S.internalFormat,De,ve,S.colorSpace),We=S.isVideoTexture!==!0,gt=Q.__version===void 0||K===!0,N=J.dataReady;let ie=y(S,je);de(n.TEXTURE_CUBE_MAP,S);let Y;if(ze){We&&gt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ie,Fe,je.width,je.height);for(let Z=0;Z<6;Z++){Y=me[Z].mipmaps;for(let ae=0;ae<Y.length;ae++){const Ce=Y[ae];S.format!==Tn?De!==null?We?N&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae,0,0,Ce.width,Ce.height,De,Ce.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae,Fe,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae,0,0,Ce.width,Ce.height,De,ve,Ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae,Fe,Ce.width,Ce.height,0,De,ve,Ce.data)}}}else{if(Y=S.mipmaps,We&&gt){Y.length>0&&ie++;const Z=Oe(me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ie,Fe,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ne){We?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,me[Z].width,me[Z].height,De,ve,me[Z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Fe,me[Z].width,me[Z].height,0,De,ve,me[Z].data);for(let ae=0;ae<Y.length;ae++){const $e=Y[ae].image[Z].image;We?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae+1,0,0,$e.width,$e.height,De,ve,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae+1,Fe,$e.width,$e.height,0,De,ve,$e.data)}}else{We?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,De,ve,me[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Fe,De,ve,me[Z]);for(let ae=0;ae<Y.length;ae++){const Ce=Y[ae];We?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae+1,0,0,De,ve,Ce.image[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae+1,Fe,De,ve,Ce.image[Z])}}}f(S)&&h(n.TEXTURE_CUBE_MAP),Q.__version=J.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function te(R,S,G,K,J,Q){const Te=s.convert(G.format,G.colorSpace),ce=s.convert(G.type),ge=x(G.internalFormat,Te,ce,G.colorSpace);if(!i.get(S).__hasExternalTextures){const ne=Math.max(1,S.width>>Q),me=Math.max(1,S.height>>Q);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,Q,ge,ne,me,S.depth,0,Te,ce,null):t.texImage2D(J,Q,ge,ne,me,0,Te,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),be(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,J,i.get(G).__webglTexture,0,at(S)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,J,i.get(G).__webglTexture,Q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function pe(R,S,G){if(n.bindRenderbuffer(n.RENDERBUFFER,R),S.depthBuffer){const K=S.depthTexture,J=K&&K.isDepthTexture?K.type:null,Q=_(S.stencilBuffer,J),Te=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=at(S);be(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,Q,S.width,S.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,Q,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Q,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Te,n.RENDERBUFFER,R)}else{const K=S.textures;for(let J=0;J<K.length;J++){const Q=K[J],Te=s.convert(Q.format,Q.colorSpace),ce=s.convert(Q.type),ge=x(Q.internalFormat,Te,ce,Q.colorSpace),ze=at(S);G&&be(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ze,ge,S.width,S.height):be(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ze,ge,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,ge,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function fe(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),U(S.depthTexture,0);const K=i.get(S.depthTexture).__webglTexture,J=at(S);if(S.depthTexture.format===Fr)be(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(S.depthTexture.format===Zr)be(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function we(R){const S=i.get(R),G=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const K=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),K){const J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,K.removeEventListener("dispose",J)};K.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=K}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");fe(S.__webglFramebuffer,R)}else if(G){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]===void 0)S.__webglDepthbuffer[K]=n.createRenderbuffer(),pe(S.__webglDepthbuffer[K],R,!1);else{const J=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,Q)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),pe(S.__webglDepthbuffer,R,!1);else{const K=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,J)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ae(R,S,G){const K=i.get(R);S!==void 0&&te(K.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&we(R)}function ke(R){const S=R.texture,G=i.get(R),K=i.get(S);R.addEventListener("dispose",w);const J=R.textures,Q=R.isWebGLCubeRenderTarget===!0,Te=J.length>1;if(Te||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=S.version,a.memory.textures++),Q){G.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[ce]=[];for(let ge=0;ge<S.mipmaps.length;ge++)G.__webglFramebuffer[ce][ge]=n.createFramebuffer()}else G.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let ce=0;ce<S.mipmaps.length;ce++)G.__webglFramebuffer[ce]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(Te)for(let ce=0,ge=J.length;ce<ge;ce++){const ze=i.get(J[ce]);ze.__webglTexture===void 0&&(ze.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&be(R)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ce=0;ce<J.length;ce++){const ge=J[ce];G.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[ce]);const ze=s.convert(ge.format,ge.colorSpace),ne=s.convert(ge.type),me=x(ge.internalFormat,ze,ne,ge.colorSpace,R.isXRRenderTarget===!0),je=at(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,je,me,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,G.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),pe(G.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),de(n.TEXTURE_CUBE_MAP,S);for(let ce=0;ce<6;ce++)if(S.mipmaps&&S.mipmaps.length>0)for(let ge=0;ge<S.mipmaps.length;ge++)te(G.__webglFramebuffer[ce][ge],R,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ge);else te(G.__webglFramebuffer[ce],R,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);f(S)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let ce=0,ge=J.length;ce<ge;ce++){const ze=J[ce],ne=i.get(ze);t.bindTexture(n.TEXTURE_2D,ne.__webglTexture),de(n.TEXTURE_2D,ze),te(G.__webglFramebuffer,R,ze,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,0),f(ze)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ce=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,K.__webglTexture),de(ce,S),S.mipmaps&&S.mipmaps.length>0)for(let ge=0;ge<S.mipmaps.length;ge++)te(G.__webglFramebuffer[ge],R,S,n.COLOR_ATTACHMENT0,ce,ge);else te(G.__webglFramebuffer,R,S,n.COLOR_ATTACHMENT0,ce,0);f(S)&&h(ce),t.unbindTexture()}R.depthBuffer&&we(R)}function ot(R){const S=R.textures;for(let G=0,K=S.length;G<K;G++){const J=S[G];if(f(J)){const Q=R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Te=i.get(J).__webglTexture;t.bindTexture(Q,Te),h(Q),t.unbindTexture()}}}const C=[],bt=[];function it(R){if(R.samples>0){if(be(R)===!1){const S=R.textures,G=R.width,K=R.height;let J=n.COLOR_BUFFER_BIT;const Q=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=i.get(R),ce=S.length>1;if(ce)for(let ge=0;ge<S.length;ge++)t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let ge=0;ge<S.length;ge++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Te.__webglColorRenderbuffer[ge]);const ze=i.get(S[ge]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ze,0)}n.blitFramebuffer(0,0,G,K,0,0,G,K,J,n.NEAREST),l===!0&&(C.length=0,bt.length=0,C.push(n.COLOR_ATTACHMENT0+ge),R.depthBuffer&&R.resolveDepthBuffer===!1&&(C.push(Q),bt.push(Q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,bt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,C))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let ge=0;ge<S.length;ge++){t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,Te.__webglColorRenderbuffer[ge]);const ze=i.get(S[ge]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,ze,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const S=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function at(R){return Math.min(r.maxSamples,R.samples)}function be(R){const S=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function wt(R){const S=a.render.frame;u.get(R)!==S&&(u.set(R,S),R.update())}function Ue(R,S){const G=R.colorSpace,K=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==Ci&&G!==Mi&&(nt.getTransfer(G)===ut?(K!==Tn||J!==ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}function Oe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=L,this.setTexture2D=U,this.setTexture2DArray=X,this.setTexture3D=H,this.setTextureCube=$,this.rebindTextures=Ae,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=te,this.useMultisampledRTT=be}function $5(n,e){function t(i,r=Mi){let s;const a=nt.getTransfer(r);if(i===ri)return n.UNSIGNED_BYTE;if(i===iu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ru)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Pp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Rp)return n.BYTE;if(i===Cp)return n.SHORT;if(i===Fs)return n.UNSIGNED_SHORT;if(i===nu)return n.INT;if(i===ar)return n.UNSIGNED_INT;if(i===Jn)return n.FLOAT;if(i===Vs)return n.HALF_FLOAT;if(i===Lp)return n.ALPHA;if(i===Ip)return n.RGB;if(i===Tn)return n.RGBA;if(i===Dp)return n.LUMINANCE;if(i===Up)return n.LUMINANCE_ALPHA;if(i===Fr)return n.DEPTH_COMPONENT;if(i===Zr)return n.DEPTH_STENCIL;if(i===Np)return n.RED;if(i===su)return n.RED_INTEGER;if(i===Fp)return n.RG;if(i===au)return n.RG_INTEGER;if(i===ou)return n.RGBA_INTEGER;if(i===Na||i===Fa||i===Oa||i===ka)if(a===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Na)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Fa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Oa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ka)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Na)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Fa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Oa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ka)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===rc||i===sc||i===ac||i===oc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===rc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===sc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ac)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===oc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===lc||i===cc||i===uc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===lc||i===cc)return a===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===uc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===fc||i===hc||i===dc||i===pc||i===mc||i===gc||i===vc||i===_c||i===xc||i===yc||i===Mc||i===Sc||i===Ec||i===bc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===fc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===hc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===dc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===pc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===mc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===gc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===vc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_c)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===yc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Mc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Sc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ec)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===bc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===za||i===wc||i===Ac)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===za)return a===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===wc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ac)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Op||i===Tc||i===Rc||i===Cc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===za)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Tc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Rc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Cc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$r?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Z5 extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ir extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const K5={type:"move"};class yl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ir,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ir,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ir,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const f=t.getJointPose(v,i),h=this._getHandJoint(c,v);f!==null&&(h.matrix.fromArray(f.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=f.radius),h.visible=f!==null}const u=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],d=u.position.distanceTo(p.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(K5)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ir;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Q5=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,J5=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class eM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new nn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ri({vertexShader:Q5,fragmentShader:J5,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ue(new qs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class tM extends es{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,p=null,d=null,m=null,g=null;const v=new eM,f=t.getContextAttributes();let h=null,x=null;const _=[],y=[],T=new qe;let w=null;const A=new _n;A.layers.enable(1),A.viewport=new Ot;const D=new _n;D.layers.enable(2),D.viewport=new Ot;const b=[A,D],M=new Z5;M.layers.enable(1),M.layers.enable(2);let L=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let te=_[j];return te===void 0&&(te=new yl,_[j]=te),te.getTargetRaySpace()},this.getControllerGrip=function(j){let te=_[j];return te===void 0&&(te=new yl,_[j]=te),te.getGripSpace()},this.getHand=function(j){let te=_[j];return te===void 0&&(te=new yl,_[j]=te),te.getHandSpace()};function O(j){const te=y.indexOf(j.inputSource);if(te===-1)return;const pe=_[te];pe!==void 0&&(pe.update(j.inputSource,j.frame,c||a),pe.dispatchEvent({type:j.type,data:j.inputSource}))}function U(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",U),r.removeEventListener("inputsourceschange",X);for(let j=0;j<_.length;j++){const te=y[j];te!==null&&(y[j]=null,_[j].disconnect(te))}L=null,z=null,v.reset(),e.setRenderTarget(h),m=null,d=null,p=null,r=null,x=null,Ye.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return p},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",U),r.addEventListener("inputsourceschange",X),f.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(T),r.renderState.layers===void 0){const te={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,te),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),x=new or(m.framebufferWidth,m.framebufferHeight,{format:Tn,type:ri,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil})}else{let te=null,pe=null,fe=null;f.depth&&(fe=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=f.stencil?Zr:Fr,pe=f.stencil?$r:ar);const we={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:s};p=new XRWebGLBinding(r,t),d=p.createProjectionLayer(we),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new or(d.textureWidth,d.textureHeight,{format:Tn,type:ri,depthTexture:new Zp(d.textureWidth,d.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ye.setContext(r),Ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function X(j){for(let te=0;te<j.removed.length;te++){const pe=j.removed[te],fe=y.indexOf(pe);fe>=0&&(y[fe]=null,_[fe].disconnect(pe))}for(let te=0;te<j.added.length;te++){const pe=j.added[te];let fe=y.indexOf(pe);if(fe===-1){for(let Ae=0;Ae<_.length;Ae++)if(Ae>=y.length){y.push(pe),fe=Ae;break}else if(y[Ae]===null){y[Ae]=pe,fe=Ae;break}if(fe===-1)break}const we=_[fe];we&&we.connect(pe)}}const H=new I,$=new I;function W(j,te,pe){H.setFromMatrixPosition(te.matrixWorld),$.setFromMatrixPosition(pe.matrixWorld);const fe=H.distanceTo($),we=te.projectionMatrix.elements,Ae=pe.projectionMatrix.elements,ke=we[14]/(we[10]-1),ot=we[14]/(we[10]+1),C=(we[9]+1)/we[5],bt=(we[9]-1)/we[5],it=(we[8]-1)/we[0],at=(Ae[8]+1)/Ae[0],be=ke*it,wt=ke*at,Ue=fe/(-it+at),Oe=Ue*-it;if(te.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Oe),j.translateZ(Ue),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),we[10]===-1)j.projectionMatrix.copy(te.projectionMatrix),j.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const R=ke+Ue,S=ot+Ue,G=be-Oe,K=wt+(fe-Oe),J=C*ot/S*R,Q=bt*ot/S*R;j.projectionMatrix.makePerspective(G,K,J,Q,R,S),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ee(j,te){te===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(te.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let te=j.near,pe=j.far;v.texture!==null&&(v.depthNear>0&&(te=v.depthNear),v.depthFar>0&&(pe=v.depthFar)),M.near=D.near=A.near=te,M.far=D.far=A.far=pe,(L!==M.near||z!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,z=M.far);const fe=j.parent,we=M.cameras;ee(M,fe);for(let Ae=0;Ae<we.length;Ae++)ee(we[Ae],fe);we.length===2?W(M,A,D):M.projectionMatrix.copy(A.projectionMatrix),le(j,M,fe)};function le(j,te,pe){pe===null?j.matrix.copy(te.matrixWorld):(j.matrix.copy(pe.matrixWorld),j.matrix.invert(),j.matrix.multiply(te.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(te.projectionMatrix),j.projectionMatrixInverse.copy(te.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Pc*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=j)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let de=null;function Re(j,te){if(u=te.getViewerPose(c||a),g=te,u!==null){const pe=u.views;m!==null&&(e.setRenderTargetFramebuffer(x,m.framebuffer),e.setRenderTarget(x));let fe=!1;pe.length!==M.cameras.length&&(M.cameras.length=0,fe=!0);for(let Ae=0;Ae<pe.length;Ae++){const ke=pe[Ae];let ot=null;if(m!==null)ot=m.getViewport(ke);else{const bt=p.getViewSubImage(d,ke);ot=bt.viewport,Ae===0&&(e.setRenderTargetTextures(x,bt.colorTexture,d.ignoreDepthValues?void 0:bt.depthStencilTexture),e.setRenderTarget(x))}let C=b[Ae];C===void 0&&(C=new _n,C.layers.enable(Ae),C.viewport=new Ot,b[Ae]=C),C.matrix.fromArray(ke.transform.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale),C.projectionMatrix.fromArray(ke.projectionMatrix),C.projectionMatrixInverse.copy(C.projectionMatrix).invert(),C.viewport.set(ot.x,ot.y,ot.width,ot.height),Ae===0&&(M.matrix.copy(C.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),fe===!0&&M.cameras.push(C)}const we=r.enabledFeatures;if(we&&we.includes("depth-sensing")){const Ae=p.getDepthInformation(pe[0]);Ae&&Ae.isValid&&Ae.texture&&v.init(e,Ae,r.renderState)}}for(let pe=0;pe<_.length;pe++){const fe=y[pe],we=_[pe];fe!==null&&we!==void 0&&we.update(fe,te,c||a)}de&&de(j,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),g=null}const Ye=new $p;Ye.setAnimationLoop(Re),this.setAnimationLoop=function(j){de=j},this.dispose=function(){}}}const Oi=new Gn,nM=new _t;function iM(n,e){function t(f,h){f.matrixAutoUpdate===!0&&f.updateMatrix(),h.value.copy(f.matrix)}function i(f,h){h.color.getRGB(f.fogColor.value,Xp(n)),h.isFog?(f.fogNear.value=h.near,f.fogFar.value=h.far):h.isFogExp2&&(f.fogDensity.value=h.density)}function r(f,h,x,_,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(f,h):h.isMeshToonMaterial?(s(f,h),p(f,h)):h.isMeshPhongMaterial?(s(f,h),u(f,h)):h.isMeshStandardMaterial?(s(f,h),d(f,h),h.isMeshPhysicalMaterial&&m(f,h,y)):h.isMeshMatcapMaterial?(s(f,h),g(f,h)):h.isMeshDepthMaterial?s(f,h):h.isMeshDistanceMaterial?(s(f,h),v(f,h)):h.isMeshNormalMaterial?s(f,h):h.isLineBasicMaterial?(a(f,h),h.isLineDashedMaterial&&o(f,h)):h.isPointsMaterial?l(f,h,x,_):h.isSpriteMaterial?c(f,h):h.isShadowMaterial?(f.color.value.copy(h.color),f.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(f,h){f.opacity.value=h.opacity,h.color&&f.diffuse.value.copy(h.color),h.emissive&&f.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(f.map.value=h.map,t(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.bumpMap&&(f.bumpMap.value=h.bumpMap,t(h.bumpMap,f.bumpMapTransform),f.bumpScale.value=h.bumpScale,h.side===tn&&(f.bumpScale.value*=-1)),h.normalMap&&(f.normalMap.value=h.normalMap,t(h.normalMap,f.normalMapTransform),f.normalScale.value.copy(h.normalScale),h.side===tn&&f.normalScale.value.negate()),h.displacementMap&&(f.displacementMap.value=h.displacementMap,t(h.displacementMap,f.displacementMapTransform),f.displacementScale.value=h.displacementScale,f.displacementBias.value=h.displacementBias),h.emissiveMap&&(f.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,f.emissiveMapTransform)),h.specularMap&&(f.specularMap.value=h.specularMap,t(h.specularMap,f.specularMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest);const x=e.get(h),_=x.envMap,y=x.envMapRotation;_&&(f.envMap.value=_,Oi.copy(y),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),f.envMapRotation.value.setFromMatrix4(nM.makeRotationFromEuler(Oi)),f.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=h.reflectivity,f.ior.value=h.ior,f.refractionRatio.value=h.refractionRatio),h.lightMap&&(f.lightMap.value=h.lightMap,f.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,f.lightMapTransform)),h.aoMap&&(f.aoMap.value=h.aoMap,f.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,f.aoMapTransform))}function a(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,h.map&&(f.map.value=h.map,t(h.map,f.mapTransform))}function o(f,h){f.dashSize.value=h.dashSize,f.totalSize.value=h.dashSize+h.gapSize,f.scale.value=h.scale}function l(f,h,x,_){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.size.value=h.size*x,f.scale.value=_*.5,h.map&&(f.map.value=h.map,t(h.map,f.uvTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function c(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.rotation.value=h.rotation,h.map&&(f.map.value=h.map,t(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function u(f,h){f.specular.value.copy(h.specular),f.shininess.value=Math.max(h.shininess,1e-4)}function p(f,h){h.gradientMap&&(f.gradientMap.value=h.gradientMap)}function d(f,h){f.metalness.value=h.metalness,h.metalnessMap&&(f.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,f.metalnessMapTransform)),f.roughness.value=h.roughness,h.roughnessMap&&(f.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,f.roughnessMapTransform)),h.envMap&&(f.envMapIntensity.value=h.envMapIntensity)}function m(f,h,x){f.ior.value=h.ior,h.sheen>0&&(f.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),f.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(f.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,f.sheenColorMapTransform)),h.sheenRoughnessMap&&(f.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,f.sheenRoughnessMapTransform))),h.clearcoat>0&&(f.clearcoat.value=h.clearcoat,f.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(f.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,f.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(f.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===tn&&f.clearcoatNormalScale.value.negate())),h.dispersion>0&&(f.dispersion.value=h.dispersion),h.iridescence>0&&(f.iridescence.value=h.iridescence,f.iridescenceIOR.value=h.iridescenceIOR,f.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(f.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,f.iridescenceMapTransform)),h.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),h.transmission>0&&(f.transmission.value=h.transmission,f.transmissionSamplerMap.value=x.texture,f.transmissionSamplerSize.value.set(x.width,x.height),h.transmissionMap&&(f.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,f.transmissionMapTransform)),f.thickness.value=h.thickness,h.thicknessMap&&(f.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=h.attenuationDistance,f.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(f.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(f.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=h.specularIntensity,f.specularColor.value.copy(h.specularColor),h.specularColorMap&&(f.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,f.specularColorMapTransform)),h.specularIntensityMap&&(f.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,h){h.matcap&&(f.matcap.value=h.matcap)}function v(f,h){const x=e.get(h).light;f.referencePosition.value.setFromMatrixPosition(x.matrixWorld),f.nearDistance.value=x.shadow.camera.near,f.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function rM(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,_){const y=_.program;i.uniformBlockBinding(x,y)}function c(x,_){let y=r[x.id];y===void 0&&(g(x),y=u(x),r[x.id]=y,x.addEventListener("dispose",f));const T=_.program;i.updateUBOMapping(x,T);const w=e.render.frame;s[x.id]!==w&&(d(x),s[x.id]=w)}function u(x){const _=p();x.__bindingPointIndex=_;const y=n.createBuffer(),T=x.__size,w=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,T,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,y),y}function p(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const _=r[x.id],y=x.uniforms,T=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let w=0,A=y.length;w<A;w++){const D=Array.isArray(y[w])?y[w]:[y[w]];for(let b=0,M=D.length;b<M;b++){const L=D[b];if(m(L,w,b,T)===!0){const z=L.__offset,O=Array.isArray(L.value)?L.value:[L.value];let U=0;for(let X=0;X<O.length;X++){const H=O[X],$=v(H);typeof H=="number"||typeof H=="boolean"?(L.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,z+U,L.__data)):H.isMatrix3?(L.__data[0]=H.elements[0],L.__data[1]=H.elements[1],L.__data[2]=H.elements[2],L.__data[3]=0,L.__data[4]=H.elements[3],L.__data[5]=H.elements[4],L.__data[6]=H.elements[5],L.__data[7]=0,L.__data[8]=H.elements[6],L.__data[9]=H.elements[7],L.__data[10]=H.elements[8],L.__data[11]=0):(H.toArray(L.__data,U),U+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(x,_,y,T){const w=x.value,A=_+"_"+y;if(T[A]===void 0)return typeof w=="number"||typeof w=="boolean"?T[A]=w:T[A]=w.clone(),!0;{const D=T[A];if(typeof w=="number"||typeof w=="boolean"){if(D!==w)return T[A]=w,!0}else if(D.equals(w)===!1)return D.copy(w),!0}return!1}function g(x){const _=x.uniforms;let y=0;const T=16;for(let A=0,D=_.length;A<D;A++){const b=Array.isArray(_[A])?_[A]:[_[A]];for(let M=0,L=b.length;M<L;M++){const z=b[M],O=Array.isArray(z.value)?z.value:[z.value];for(let U=0,X=O.length;U<X;U++){const H=O[U],$=v(H),W=y%T,ee=W%$.boundary,le=W+ee;y+=ee,le!==0&&T-le<$.storage&&(y+=T-le),z.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=$.storage}}}const w=y%T;return w>0&&(y+=T-w),x.__size=y,x.__cache={},this}function v(x){const _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function f(x){const _=x.target;_.removeEventListener("dispose",f);const y=a.indexOf(_.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function h(){for(const x in r)n.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:l,update:c,dispose:h}}class sM{constructor(e={}){const{canvas:t=Yv(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const m=new Uint32Array(4),g=new Int32Array(4);let v=null,f=null;const h=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Dn,this.toneMapping=bi,this.toneMappingExposure=1;const _=this;let y=!1,T=0,w=0,A=null,D=-1,b=null;const M=new Ot,L=new Ot;let z=null;const O=new rt(0);let U=0,X=t.width,H=t.height,$=1,W=null,ee=null;const le=new Ot(0,0,X,H),de=new Ot(0,0,X,H);let Re=!1;const Ye=new Yp;let j=!1,te=!1;const pe=new _t,fe=new I,we=new Ot,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function ot(){return A===null?$:1}let C=i;function bt(E,F){return t.getContext(E,F)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${tu}`),t.addEventListener("webglcontextlost",Y,!1),t.addEventListener("webglcontextrestored",Z,!1),t.addEventListener("webglcontextcreationerror",ae,!1),C===null){const F="webgl2";if(C=bt(F,E),C===null)throw bt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let it,at,be,wt,Ue,Oe,R,S,G,K,J,Q,Te,ce,ge,ze,ne,me,je,De,ve,Fe,We,gt;function N(){it=new fy(C),it.init(),Fe=new $5(C,it),at=new ry(C,it,e,Fe),be=new q5(C),wt=new py(C),Ue=new I5,Oe=new Y5(C,it,be,Ue,at,Fe,wt),R=new ay(_),S=new uy(_),G=new y_(C),We=new ny(C,G),K=new hy(C,G,wt,We),J=new gy(C,K,G,wt),je=new my(C,at,Oe),ze=new sy(Ue),Q=new L5(_,R,S,it,at,We,ze),Te=new iM(_,Ue),ce=new U5,ge=new B5(it),me=new ty(_,R,S,be,J,d,l),ne=new X5(_,J,at),gt=new rM(C,wt,at,be),De=new iy(C,it,wt),ve=new dy(C,it,wt),wt.programs=Q.programs,_.capabilities=at,_.extensions=it,_.properties=Ue,_.renderLists=ce,_.shadowMap=ne,_.state=be,_.info=wt}N();const ie=new tM(_,C);this.xr=ie,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const E=it.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=it.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(E){E!==void 0&&($=E,this.setSize(X,H,!1))},this.getSize=function(E){return E.set(X,H)},this.setSize=function(E,F,B=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=E,H=F,t.width=Math.floor(E*$),t.height=Math.floor(F*$),B===!0&&(t.style.width=E+"px",t.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(X*$,H*$).floor()},this.setDrawingBufferSize=function(E,F,B){X=E,H=F,$=B,t.width=Math.floor(E*B),t.height=Math.floor(F*B),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(M)},this.getViewport=function(E){return E.copy(le)},this.setViewport=function(E,F,B,V){E.isVector4?le.set(E.x,E.y,E.z,E.w):le.set(E,F,B,V),be.viewport(M.copy(le).multiplyScalar($).round())},this.getScissor=function(E){return E.copy(de)},this.setScissor=function(E,F,B,V){E.isVector4?de.set(E.x,E.y,E.z,E.w):de.set(E,F,B,V),be.scissor(L.copy(de).multiplyScalar($).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(E){be.setScissorTest(Re=E)},this.setOpaqueSort=function(E){W=E},this.setTransparentSort=function(E){ee=E},this.getClearColor=function(E){return E.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor.apply(me,arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha.apply(me,arguments)},this.clear=function(E=!0,F=!0,B=!0){let V=0;if(E){let k=!1;if(A!==null){const re=A.texture.format;k=re===ou||re===au||re===su}if(k){const re=A.texture.type,he=re===ri||re===ar||re===Fs||re===$r||re===iu||re===ru,xe=me.getClearColor(),ye=me.getClearAlpha(),Pe=xe.r,Ie=xe.g,Me=xe.b;he?(m[0]=Pe,m[1]=Ie,m[2]=Me,m[3]=ye,C.clearBufferuiv(C.COLOR,0,m)):(g[0]=Pe,g[1]=Ie,g[2]=Me,g[3]=ye,C.clearBufferiv(C.COLOR,0,g))}else V|=C.COLOR_BUFFER_BIT}F&&(V|=C.DEPTH_BUFFER_BIT),B&&(V|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Y,!1),t.removeEventListener("webglcontextrestored",Z,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),ce.dispose(),ge.dispose(),Ue.dispose(),R.dispose(),S.dispose(),J.dispose(),We.dispose(),gt.dispose(),Q.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Ln),ie.removeEventListener("sessionend",gu),Pi.stop()};function Y(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function Z(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const E=wt.autoReset,F=ne.enabled,B=ne.autoUpdate,V=ne.needsUpdate,k=ne.type;N(),wt.autoReset=E,ne.enabled=F,ne.autoUpdate=B,ne.needsUpdate=V,ne.type=k}function ae(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ce(E){const F=E.target;F.removeEventListener("dispose",Ce),$e(F)}function $e(E){At(E),Ue.remove(E)}function At(E){const F=Ue.get(E).programs;F!==void 0&&(F.forEach(function(B){Q.releaseProgram(B)}),E.isShaderMaterial&&Q.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,B,V,k,re){F===null&&(F=Ae);const he=k.isMesh&&k.matrixWorld.determinant()<0,xe=r0(E,F,B,V,k);be.setMaterial(V,he);let ye=B.index,Pe=1;if(V.wireframe===!0){if(ye=K.getWireframeAttribute(B),ye===void 0)return;Pe=2}const Ie=B.drawRange,Me=B.attributes.position;let Qe=Ie.start*Pe,yt=(Ie.start+Ie.count)*Pe;re!==null&&(Qe=Math.max(Qe,re.start*Pe),yt=Math.min(yt,(re.start+re.count)*Pe)),ye!==null?(Qe=Math.max(Qe,0),yt=Math.min(yt,ye.count)):Me!=null&&(Qe=Math.max(Qe,0),yt=Math.min(yt,Me.count));const Mt=yt-Qe;if(Mt<0||Mt===1/0)return;We.setup(k,V,xe,B,ye);let sn,Je=De;if(ye!==null&&(sn=G.get(ye),Je=ve,Je.setIndex(sn)),k.isMesh)V.wireframe===!0?(be.setLineWidth(V.wireframeLinewidth*ot()),Je.setMode(C.LINES)):Je.setMode(C.TRIANGLES);else if(k.isLine){let Ee=V.linewidth;Ee===void 0&&(Ee=1),be.setLineWidth(Ee*ot()),k.isLineSegments?Je.setMode(C.LINES):k.isLineLoop?Je.setMode(C.LINE_LOOP):Je.setMode(C.LINE_STRIP)}else k.isPoints?Je.setMode(C.POINTS):k.isSprite&&Je.setMode(C.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Je.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))Je.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Ee=k._multiDrawStarts,zt=k._multiDrawCounts,et=k._multiDrawCount,Mn=ye?G.get(ye).bytesPerElement:1,lr=Ue.get(V).currentProgram.getUniforms();for(let an=0;an<et;an++)lr.setValue(C,"_gl_DrawID",an),Je.render(Ee[an]/Mn,zt[an])}else if(k.isInstancedMesh)Je.renderInstances(Qe,Mt,k.count);else if(B.isInstancedBufferGeometry){const Ee=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,zt=Math.min(B.instanceCount,Ee);Je.renderInstances(Qe,Mt,zt)}else Je.render(Qe,Mt)};function kt(E,F,B){E.transparent===!0&&E.side===On&&E.forceSinglePass===!1?(E.side=tn,E.needsUpdate=!0,Ys(E,F,B),E.side=ii,E.needsUpdate=!0,Ys(E,F,B),E.side=On):Ys(E,F,B)}this.compile=function(E,F,B=null){B===null&&(B=E),f=ge.get(B),f.init(F),x.push(f),B.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),E!==B&&E.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),f.setupLights();const V=new Set;return E.traverse(function(k){const re=k.material;if(re)if(Array.isArray(re))for(let he=0;he<re.length;he++){const xe=re[he];kt(xe,B,k),V.add(xe)}else kt(re,B,k),V.add(re)}),x.pop(),f=null,V},this.compileAsync=function(E,F,B=null){const V=this.compile(E,F,B);return new Promise(k=>{function re(){if(V.forEach(function(he){Ue.get(he).currentProgram.isReady()&&V.delete(he)}),V.size===0){k(E);return}setTimeout(re,10)}it.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Ke=null;function Wn(E){Ke&&Ke(E)}function Ln(){Pi.stop()}function gu(){Pi.start()}const Pi=new $p;Pi.setAnimationLoop(Wn),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(E){Ke=E,ie.setAnimationLoop(E),E===null?Pi.stop():Pi.start()},ie.addEventListener("sessionstart",Ln),ie.addEventListener("sessionend",gu),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(F),F=ie.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,F,A),f=ge.get(E,x.length),f.init(F),x.push(f),pe.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ye.setFromProjectionMatrix(pe),te=this.localClippingEnabled,j=ze.init(this.clippingPlanes,te),v=ce.get(E,h.length),v.init(),h.push(v),ie.enabled===!0&&ie.isPresenting===!0){const re=_.xr.getDepthSensingMesh();re!==null&&Po(re,F,-1/0,_.sortObjects)}Po(E,F,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(W,ee),ke=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,ke&&me.addToRenderList(v,E),this.info.render.frame++,j===!0&&ze.beginShadows();const B=f.state.shadowsArray;ne.render(B,E,F),j===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=v.opaque,k=v.transmissive;if(f.setupLights(),F.isArrayCamera){const re=F.cameras;if(k.length>0)for(let he=0,xe=re.length;he<xe;he++){const ye=re[he];_u(V,k,E,ye)}ke&&me.render(E);for(let he=0,xe=re.length;he<xe;he++){const ye=re[he];vu(v,E,ye,ye.viewport)}}else k.length>0&&_u(V,k,E,F),ke&&me.render(E),vu(v,E,F);A!==null&&(Oe.updateMultisampleRenderTarget(A),Oe.updateRenderTargetMipmap(A)),E.isScene===!0&&E.onAfterRender(_,E,F),We.resetDefaultState(),D=-1,b=null,x.pop(),x.length>0?(f=x[x.length-1],j===!0&&ze.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,h.pop(),h.length>0?v=h[h.length-1]:v=null};function Po(E,F,B,V){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)B=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ye.intersectsSprite(E)){V&&we.setFromMatrixPosition(E.matrixWorld).applyMatrix4(pe);const he=J.update(E),xe=E.material;xe.visible&&v.push(E,he,xe,B,we.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ye.intersectsObject(E))){const he=J.update(E),xe=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),we.copy(E.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),we.copy(he.boundingSphere.center)),we.applyMatrix4(E.matrixWorld).applyMatrix4(pe)),Array.isArray(xe)){const ye=he.groups;for(let Pe=0,Ie=ye.length;Pe<Ie;Pe++){const Me=ye[Pe],Qe=xe[Me.materialIndex];Qe&&Qe.visible&&v.push(E,he,Qe,B,we.z,Me)}}else xe.visible&&v.push(E,he,xe,B,we.z,null)}}const re=E.children;for(let he=0,xe=re.length;he<xe;he++)Po(re[he],F,B,V)}function vu(E,F,B,V){const k=E.opaque,re=E.transmissive,he=E.transparent;f.setupLightsView(B),j===!0&&ze.setGlobalState(_.clippingPlanes,B),V&&be.viewport(M.copy(V)),k.length>0&&js(k,F,B),re.length>0&&js(re,F,B),he.length>0&&js(he,F,B),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function _u(E,F,B,V){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[V.id]===void 0&&(f.state.transmissionRenderTarget[V.id]=new or(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?Vs:ri,minFilter:$i,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const re=f.state.transmissionRenderTarget[V.id],he=V.viewport||M;re.setSize(he.z,he.w);const xe=_.getRenderTarget();_.setRenderTarget(re),_.getClearColor(O),U=_.getClearAlpha(),U<1&&_.setClearColor(16777215,.5),_.clear(),ke&&me.render(B);const ye=_.toneMapping;_.toneMapping=bi;const Pe=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),f.setupLightsView(V),j===!0&&ze.setGlobalState(_.clippingPlanes,V),js(E,B,V),Oe.updateMultisampleRenderTarget(re),Oe.updateRenderTargetMipmap(re),it.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let Me=0,Qe=F.length;Me<Qe;Me++){const yt=F[Me],Mt=yt.object,sn=yt.geometry,Je=yt.material,Ee=yt.group;if(Je.side===On&&Mt.layers.test(V.layers)){const zt=Je.side;Je.side=tn,Je.needsUpdate=!0,xu(Mt,B,V,sn,Je,Ee),Je.side=zt,Je.needsUpdate=!0,Ie=!0}}Ie===!0&&(Oe.updateMultisampleRenderTarget(re),Oe.updateRenderTargetMipmap(re))}_.setRenderTarget(xe),_.setClearColor(O,U),Pe!==void 0&&(V.viewport=Pe),_.toneMapping=ye}function js(E,F,B){const V=F.isScene===!0?F.overrideMaterial:null;for(let k=0,re=E.length;k<re;k++){const he=E[k],xe=he.object,ye=he.geometry,Pe=V===null?he.material:V,Ie=he.group;xe.layers.test(B.layers)&&xu(xe,F,B,ye,Pe,Ie)}}function xu(E,F,B,V,k,re){E.onBeforeRender(_,F,B,V,k,re),E.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),k.onBeforeRender(_,F,B,V,E,re),k.transparent===!0&&k.side===On&&k.forceSinglePass===!1?(k.side=tn,k.needsUpdate=!0,_.renderBufferDirect(B,F,V,k,E,re),k.side=ii,k.needsUpdate=!0,_.renderBufferDirect(B,F,V,k,E,re),k.side=On):_.renderBufferDirect(B,F,V,k,E,re),E.onAfterRender(_,F,B,V,k,re)}function Ys(E,F,B){F.isScene!==!0&&(F=Ae);const V=Ue.get(E),k=f.state.lights,re=f.state.shadowsArray,he=k.state.version,xe=Q.getParameters(E,k.state,re,F,B),ye=Q.getProgramCacheKey(xe);let Pe=V.programs;V.environment=E.isMeshStandardMaterial?F.environment:null,V.fog=F.fog,V.envMap=(E.isMeshStandardMaterial?S:R).get(E.envMap||V.environment),V.envMapRotation=V.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Pe===void 0&&(E.addEventListener("dispose",Ce),Pe=new Map,V.programs=Pe);let Ie=Pe.get(ye);if(Ie!==void 0){if(V.currentProgram===Ie&&V.lightsStateVersion===he)return Mu(E,xe),Ie}else xe.uniforms=Q.getUniforms(E),E.onBeforeCompile(xe,_),Ie=Q.acquireProgram(xe,ye),Pe.set(ye,Ie),V.uniforms=xe.uniforms;const Me=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Me.clippingPlanes=ze.uniform),Mu(E,xe),V.needsLights=a0(E),V.lightsStateVersion=he,V.needsLights&&(Me.ambientLightColor.value=k.state.ambient,Me.lightProbe.value=k.state.probe,Me.directionalLights.value=k.state.directional,Me.directionalLightShadows.value=k.state.directionalShadow,Me.spotLights.value=k.state.spot,Me.spotLightShadows.value=k.state.spotShadow,Me.rectAreaLights.value=k.state.rectArea,Me.ltc_1.value=k.state.rectAreaLTC1,Me.ltc_2.value=k.state.rectAreaLTC2,Me.pointLights.value=k.state.point,Me.pointLightShadows.value=k.state.pointShadow,Me.hemisphereLights.value=k.state.hemi,Me.directionalShadowMap.value=k.state.directionalShadowMap,Me.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Me.spotShadowMap.value=k.state.spotShadowMap,Me.spotLightMatrix.value=k.state.spotLightMatrix,Me.spotLightMap.value=k.state.spotLightMap,Me.pointShadowMap.value=k.state.pointShadowMap,Me.pointShadowMatrix.value=k.state.pointShadowMatrix),V.currentProgram=Ie,V.uniformsList=null,Ie}function yu(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=Ba.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function Mu(E,F){const B=Ue.get(E);B.outputColorSpace=F.outputColorSpace,B.batching=F.batching,B.batchingColor=F.batchingColor,B.instancing=F.instancing,B.instancingColor=F.instancingColor,B.instancingMorph=F.instancingMorph,B.skinning=F.skinning,B.morphTargets=F.morphTargets,B.morphNormals=F.morphNormals,B.morphColors=F.morphColors,B.morphTargetsCount=F.morphTargetsCount,B.numClippingPlanes=F.numClippingPlanes,B.numIntersection=F.numClipIntersection,B.vertexAlphas=F.vertexAlphas,B.vertexTangents=F.vertexTangents,B.toneMapping=F.toneMapping}function r0(E,F,B,V,k){F.isScene!==!0&&(F=Ae),Oe.resetTextureUnits();const re=F.fog,he=V.isMeshStandardMaterial?F.environment:null,xe=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ci,ye=(V.isMeshStandardMaterial?S:R).get(V.envMap||he),Pe=V.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ie=!!B.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Me=!!B.morphAttributes.position,Qe=!!B.morphAttributes.normal,yt=!!B.morphAttributes.color;let Mt=bi;V.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Mt=_.toneMapping);const sn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Je=sn!==void 0?sn.length:0,Ee=Ue.get(V),zt=f.state.lights;if(j===!0&&(te===!0||E!==b)){const gn=E===b&&V.id===D;ze.setState(V,E,gn)}let et=!1;V.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==zt.state.version||Ee.outputColorSpace!==xe||k.isBatchedMesh&&Ee.batching===!1||!k.isBatchedMesh&&Ee.batching===!0||k.isBatchedMesh&&Ee.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ee.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ee.instancing===!1||!k.isInstancedMesh&&Ee.instancing===!0||k.isSkinnedMesh&&Ee.skinning===!1||!k.isSkinnedMesh&&Ee.skinning===!0||k.isInstancedMesh&&Ee.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ee.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ee.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ee.instancingMorph===!1&&k.morphTexture!==null||Ee.envMap!==ye||V.fog===!0&&Ee.fog!==re||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==ze.numPlanes||Ee.numIntersection!==ze.numIntersection)||Ee.vertexAlphas!==Pe||Ee.vertexTangents!==Ie||Ee.morphTargets!==Me||Ee.morphNormals!==Qe||Ee.morphColors!==yt||Ee.toneMapping!==Mt||Ee.morphTargetsCount!==Je)&&(et=!0):(et=!0,Ee.__version=V.version);let Mn=Ee.currentProgram;et===!0&&(Mn=Ys(V,F,k));let lr=!1,an=!1,Lo=!1;const Tt=Mn.getUniforms(),ai=Ee.uniforms;if(be.useProgram(Mn.program)&&(lr=!0,an=!0,Lo=!0),V.id!==D&&(D=V.id,an=!0),lr||b!==E){Tt.setValue(C,"projectionMatrix",E.projectionMatrix),Tt.setValue(C,"viewMatrix",E.matrixWorldInverse);const gn=Tt.map.cameraPosition;gn!==void 0&&gn.setValue(C,fe.setFromMatrixPosition(E.matrixWorld)),at.logarithmicDepthBuffer&&Tt.setValue(C,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Tt.setValue(C,"isOrthographic",E.isOrthographicCamera===!0),b!==E&&(b=E,an=!0,Lo=!0)}if(k.isSkinnedMesh){Tt.setOptional(C,k,"bindMatrix"),Tt.setOptional(C,k,"bindMatrixInverse");const gn=k.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Tt.setValue(C,"boneTexture",gn.boneTexture,Oe))}k.isBatchedMesh&&(Tt.setOptional(C,k,"batchingTexture"),Tt.setValue(C,"batchingTexture",k._matricesTexture,Oe),Tt.setOptional(C,k,"batchingIdTexture"),Tt.setValue(C,"batchingIdTexture",k._indirectTexture,Oe),Tt.setOptional(C,k,"batchingColorTexture"),k._colorsTexture!==null&&Tt.setValue(C,"batchingColorTexture",k._colorsTexture,Oe));const Io=B.morphAttributes;if((Io.position!==void 0||Io.normal!==void 0||Io.color!==void 0)&&je.update(k,B,Mn),(an||Ee.receiveShadow!==k.receiveShadow)&&(Ee.receiveShadow=k.receiveShadow,Tt.setValue(C,"receiveShadow",k.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(ai.envMap.value=ye,ai.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&F.environment!==null&&(ai.envMapIntensity.value=F.environmentIntensity),an&&(Tt.setValue(C,"toneMappingExposure",_.toneMappingExposure),Ee.needsLights&&s0(ai,Lo),re&&V.fog===!0&&Te.refreshFogUniforms(ai,re),Te.refreshMaterialUniforms(ai,V,$,H,f.state.transmissionRenderTarget[E.id]),Ba.upload(C,yu(Ee),ai,Oe)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ba.upload(C,yu(Ee),ai,Oe),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Tt.setValue(C,"center",k.center),Tt.setValue(C,"modelViewMatrix",k.modelViewMatrix),Tt.setValue(C,"normalMatrix",k.normalMatrix),Tt.setValue(C,"modelMatrix",k.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const gn=V.uniformsGroups;for(let Do=0,o0=gn.length;Do<o0;Do++){const Su=gn[Do];gt.update(Su,Mn),gt.bind(Su,Mn)}}return Mn}function s0(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function a0(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(E,F,B){Ue.get(E.texture).__webglTexture=F,Ue.get(E.depthTexture).__webglTexture=B;const V=Ue.get(E);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=B===void 0,V.__autoAllocateDepthBuffer||it.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,F){const B=Ue.get(E);B.__webglFramebuffer=F,B.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,B=0){A=E,T=F,w=B;let V=!0,k=null,re=!1,he=!1;if(E){const ye=Ue.get(E);if(ye.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(C.FRAMEBUFFER,null),V=!1;else if(ye.__webglFramebuffer===void 0)Oe.setupRenderTarget(E);else if(ye.__hasExternalTextures)Oe.rebindTextures(E,Ue.get(E.texture).__webglTexture,Ue.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Me=E.depthTexture;if(ye.__boundDepthTexture!==Me){if(Me!==null&&Ue.has(Me)&&(E.width!==Me.image.width||E.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(E)}}const Pe=E.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(he=!0);const Ie=Ue.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ie[F])?k=Ie[F][B]:k=Ie[F],re=!0):E.samples>0&&Oe.useMultisampledRTT(E)===!1?k=Ue.get(E).__webglMultisampledFramebuffer:Array.isArray(Ie)?k=Ie[B]:k=Ie,M.copy(E.viewport),L.copy(E.scissor),z=E.scissorTest}else M.copy(le).multiplyScalar($).floor(),L.copy(de).multiplyScalar($).floor(),z=Re;if(be.bindFramebuffer(C.FRAMEBUFFER,k)&&V&&be.drawBuffers(E,k),be.viewport(M),be.scissor(L),be.setScissorTest(z),re){const ye=Ue.get(E.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+F,ye.__webglTexture,B)}else if(he){const ye=Ue.get(E.texture),Pe=F||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,ye.__webglTexture,B||0,Pe)}D=-1},this.readRenderTargetPixels=function(E,F,B,V,k,re,he){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Ue.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&he!==void 0&&(xe=xe[he]),xe){be.bindFramebuffer(C.FRAMEBUFFER,xe);try{const ye=E.texture,Pe=ye.format,Ie=ye.type;if(!at.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!at.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-V&&B>=0&&B<=E.height-k&&C.readPixels(F,B,V,k,Fe.convert(Pe),Fe.convert(Ie),re)}finally{const ye=A!==null?Ue.get(A).__webglFramebuffer:null;be.bindFramebuffer(C.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(E,F,B,V,k,re,he){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Ue.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&he!==void 0&&(xe=xe[he]),xe){be.bindFramebuffer(C.FRAMEBUFFER,xe);try{const ye=E.texture,Pe=ye.format,Ie=ye.type;if(!at.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!at.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=E.width-V&&B>=0&&B<=E.height-k){const Me=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Me),C.bufferData(C.PIXEL_PACK_BUFFER,re.byteLength,C.STREAM_READ),C.readPixels(F,B,V,k,Fe.convert(Pe),Fe.convert(Ie),0),C.flush();const Qe=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);await $v(C,Qe,4);try{C.bindBuffer(C.PIXEL_PACK_BUFFER,Me),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,re)}finally{C.deleteBuffer(Me),C.deleteSync(Qe)}return re}}finally{const ye=A!==null?Ue.get(A).__webglFramebuffer:null;be.bindFramebuffer(C.FRAMEBUFFER,ye)}}},this.copyFramebufferToTexture=function(E,F=null,B=0){E.isTexture!==!0&&(As("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,E=arguments[1]);const V=Math.pow(2,-B),k=Math.floor(E.image.width*V),re=Math.floor(E.image.height*V),he=F!==null?F.x:0,xe=F!==null?F.y:0;Oe.setTexture2D(E,0),C.copyTexSubImage2D(C.TEXTURE_2D,B,0,0,he,xe,k,re),be.unbindTexture()},this.copyTextureToTexture=function(E,F,B=null,V=null,k=0){E.isTexture!==!0&&(As("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,E=arguments[1],F=arguments[2],k=arguments[3]||0,B=null);let re,he,xe,ye,Pe,Ie;B!==null?(re=B.max.x-B.min.x,he=B.max.y-B.min.y,xe=B.min.x,ye=B.min.y):(re=E.image.width,he=E.image.height,xe=0,ye=0),V!==null?(Pe=V.x,Ie=V.y):(Pe=0,Ie=0);const Me=Fe.convert(F.format),Qe=Fe.convert(F.type);Oe.setTexture2D(F,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,F.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,F.unpackAlignment);const yt=C.getParameter(C.UNPACK_ROW_LENGTH),Mt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),sn=C.getParameter(C.UNPACK_SKIP_PIXELS),Je=C.getParameter(C.UNPACK_SKIP_ROWS),Ee=C.getParameter(C.UNPACK_SKIP_IMAGES),zt=E.isCompressedTexture?E.mipmaps[k]:E.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,zt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,zt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,xe),C.pixelStorei(C.UNPACK_SKIP_ROWS,ye),E.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,k,Pe,Ie,re,he,Me,Qe,zt.data):E.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,k,Pe,Ie,zt.width,zt.height,Me,zt.data):C.texSubImage2D(C.TEXTURE_2D,k,Pe,Ie,re,he,Me,Qe,zt),C.pixelStorei(C.UNPACK_ROW_LENGTH,yt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Mt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,sn),C.pixelStorei(C.UNPACK_SKIP_ROWS,Je),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ee),k===0&&F.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),be.unbindTexture()},this.copyTextureToTexture3D=function(E,F,B=null,V=null,k=0){E.isTexture!==!0&&(As("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,V=arguments[1]||null,E=arguments[2],F=arguments[3],k=arguments[4]||0);let re,he,xe,ye,Pe,Ie,Me,Qe,yt;const Mt=E.isCompressedTexture?E.mipmaps[k]:E.image;B!==null?(re=B.max.x-B.min.x,he=B.max.y-B.min.y,xe=B.max.z-B.min.z,ye=B.min.x,Pe=B.min.y,Ie=B.min.z):(re=Mt.width,he=Mt.height,xe=Mt.depth,ye=0,Pe=0,Ie=0),V!==null?(Me=V.x,Qe=V.y,yt=V.z):(Me=0,Qe=0,yt=0);const sn=Fe.convert(F.format),Je=Fe.convert(F.type);let Ee;if(F.isData3DTexture)Oe.setTexture3D(F,0),Ee=C.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)Oe.setTexture2DArray(F,0),Ee=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,F.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,F.unpackAlignment);const zt=C.getParameter(C.UNPACK_ROW_LENGTH),et=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Mn=C.getParameter(C.UNPACK_SKIP_PIXELS),lr=C.getParameter(C.UNPACK_SKIP_ROWS),an=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Mt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Mt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ye),C.pixelStorei(C.UNPACK_SKIP_ROWS,Pe),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ie),E.isDataTexture||E.isData3DTexture?C.texSubImage3D(Ee,k,Me,Qe,yt,re,he,xe,sn,Je,Mt.data):F.isCompressedArrayTexture?C.compressedTexSubImage3D(Ee,k,Me,Qe,yt,re,he,xe,sn,Mt.data):C.texSubImage3D(Ee,k,Me,Qe,yt,re,he,xe,sn,Je,Mt),C.pixelStorei(C.UNPACK_ROW_LENGTH,zt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,et),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Mn),C.pixelStorei(C.UNPACK_SKIP_ROWS,lr),C.pixelStorei(C.UNPACK_SKIP_IMAGES,an),k===0&&F.generateMipmaps&&C.generateMipmap(Ee),be.unbindTexture()},this.initRenderTarget=function(E){Ue.get(E).__webglFramebuffer===void 0&&Oe.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Oe.setTextureCube(E,0):E.isData3DTexture?Oe.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Oe.setTexture2DArray(E,0):Oe.setTexture2D(E,0),be.unbindTexture()},this.resetState=function(){T=0,w=0,A=null,be.reset(),We.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===lu?"display-p3":"srgb",t.unpackColorSpace=nt.workingColorSpace===To?"display-p3":"srgb"}}class aM extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class t0 extends Ws{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const oo=new I,lo=new I,zh=new _t,hs=new cu,Sa=new Ro,Ml=new I,Bh=new I;class mi extends Vt{constructor(e=new $t,t=new t0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)oo.fromBufferAttribute(t,r-1),lo.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=oo.distanceTo(lo);e.setAttribute("lineDistance",new dt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Sa.copy(i.boundingSphere),Sa.applyMatrix4(r),Sa.radius+=s,e.ray.intersectsSphere(Sa)===!1)return;zh.copy(r).invert(),hs.copy(e.ray).applyMatrix4(zh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const m=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=m,f=g-1;v<f;v+=c){const h=u.getX(v),x=u.getX(v+1),_=Ea(this,e,hs,l,h,x);_&&t.push(_)}if(this.isLineLoop){const v=u.getX(g-1),f=u.getX(m),h=Ea(this,e,hs,l,v,f);h&&t.push(h)}}else{const m=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=m,f=g-1;v<f;v+=c){const h=Ea(this,e,hs,l,v,v+1);h&&t.push(h)}if(this.isLineLoop){const v=Ea(this,e,hs,l,g-1,m);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ea(n,e,t,i,r,s){const a=n.geometry.attributes.position;if(oo.fromBufferAttribute(a,r),lo.fromBufferAttribute(a,s),t.distanceSqToSegment(oo,lo,Ml,Bh)>i)return;Ml.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Ml);if(!(l<e.near||l>e.far))return{distance:l,point:Bh.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,object:n}}class Wt extends $t{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],p=[],d=[],m=[];let g=0;const v=[],f=i/2;let h=0;x(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new dt(p,3)),this.setAttribute("normal",new dt(d,3)),this.setAttribute("uv",new dt(m,2));function x(){const y=new I,T=new I;let w=0;const A=(t-e)/i;for(let D=0;D<=s;D++){const b=[],M=D/s,L=M*(t-e)+e;for(let z=0;z<=r;z++){const O=z/r,U=O*l+o,X=Math.sin(U),H=Math.cos(U);T.x=L*X,T.y=-M*i+f,T.z=L*H,p.push(T.x,T.y,T.z),y.set(X,A,H).normalize(),d.push(y.x,y.y,y.z),m.push(O,1-M),b.push(g++)}v.push(b)}for(let D=0;D<r;D++)for(let b=0;b<s;b++){const M=v[b][D],L=v[b+1][D],z=v[b+1][D+1],O=v[b][D+1];u.push(M,L,O),u.push(L,z,O),w+=6}c.addGroup(h,w,0),h+=w}function _(y){const T=g,w=new qe,A=new I;let D=0;const b=y===!0?e:t,M=y===!0?1:-1;for(let z=1;z<=r;z++)p.push(0,f*M,0),d.push(0,M,0),m.push(.5,.5),g++;const L=g;for(let z=0;z<=r;z++){const U=z/r*l+o,X=Math.cos(U),H=Math.sin(U);A.x=b*H,A.y=f*M,A.z=b*X,p.push(A.x,A.y,A.z),d.push(0,M,0),w.x=X*.5+.5,w.y=H*.5*M+.5,m.push(w.x,w.y),g++}for(let z=0;z<r;z++){const O=T+z,U=L+z;y===!0?u.push(U,U+1,O):u.push(U+1,U,O),D+=3}c.addGroup(h,D,y===!0?1:2),h+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class hu extends $t{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],a=[];o(r),c(i),u(),this.setAttribute("position",new dt(s,3)),this.setAttribute("normal",new dt(s.slice(),3)),this.setAttribute("uv",new dt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const _=new I,y=new I,T=new I;for(let w=0;w<t.length;w+=3)m(t[w+0],_),m(t[w+1],y),m(t[w+2],T),l(_,y,T,x)}function l(x,_,y,T){const w=T+1,A=[];for(let D=0;D<=w;D++){A[D]=[];const b=x.clone().lerp(y,D/w),M=_.clone().lerp(y,D/w),L=w-D;for(let z=0;z<=L;z++)z===0&&D===w?A[D][z]=b:A[D][z]=b.clone().lerp(M,z/L)}for(let D=0;D<w;D++)for(let b=0;b<2*(w-D)-1;b++){const M=Math.floor(b/2);b%2===0?(d(A[D][M+1]),d(A[D+1][M]),d(A[D][M])):(d(A[D][M+1]),d(A[D+1][M+1]),d(A[D+1][M]))}}function c(x){const _=new I;for(let y=0;y<s.length;y+=3)_.x=s[y+0],_.y=s[y+1],_.z=s[y+2],_.normalize().multiplyScalar(x),s[y+0]=_.x,s[y+1]=_.y,s[y+2]=_.z}function u(){const x=new I;for(let _=0;_<s.length;_+=3){x.x=s[_+0],x.y=s[_+1],x.z=s[_+2];const y=f(x)/2/Math.PI+.5,T=h(x)/Math.PI+.5;a.push(y,1-T)}g(),p()}function p(){for(let x=0;x<a.length;x+=6){const _=a[x+0],y=a[x+2],T=a[x+4],w=Math.max(_,y,T),A=Math.min(_,y,T);w>.9&&A<.1&&(_<.2&&(a[x+0]+=1),y<.2&&(a[x+2]+=1),T<.2&&(a[x+4]+=1))}}function d(x){s.push(x.x,x.y,x.z)}function m(x,_){const y=x*3;_.x=e[y+0],_.y=e[y+1],_.z=e[y+2]}function g(){const x=new I,_=new I,y=new I,T=new I,w=new qe,A=new qe,D=new qe;for(let b=0,M=0;b<s.length;b+=9,M+=6){x.set(s[b+0],s[b+1],s[b+2]),_.set(s[b+3],s[b+4],s[b+5]),y.set(s[b+6],s[b+7],s[b+8]),w.set(a[M+0],a[M+1]),A.set(a[M+2],a[M+3]),D.set(a[M+4],a[M+5]),T.copy(x).add(_).add(y).divideScalar(3);const L=f(T);v(w,M+0,x,L),v(A,M+2,_,L),v(D,M+4,y,L)}}function v(x,_,y,T){T<0&&x.x===1&&(a[_]=x.x-1),y.x===0&&y.z===0&&(a[_]=T/2/Math.PI+.5)}function f(x){return Math.atan2(x.z,-x.x)}function h(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hu(e.vertices,e.indices,e.radius,e.details)}}class Dr extends hu{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Dr(e.radius,e.detail)}}class du extends $t{constructor(e=.5,t=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],c=[],u=[];let p=e;const d=(t-e)/r,m=new I,g=new qe;for(let v=0;v<=r;v++){for(let f=0;f<=i;f++){const h=s+f/i*a;m.x=p*Math.cos(h),m.y=p*Math.sin(h),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/t+1)/2,g.y=(m.y/t+1)/2,u.push(g.x,g.y)}p+=d}for(let v=0;v<r;v++){const f=v*(i+1);for(let h=0;h<i;h++){const x=h+f,_=x,y=x+i+1,T=x+i+2,w=x+1;o.push(_,y,w),o.push(y,T,w)}}this.setIndex(o),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(c,3)),this.setAttribute("uv",new dt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new du(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class pu extends $t{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],p=new I,d=new I,m=[],g=[],v=[],f=[];for(let h=0;h<=i;h++){const x=[],_=h/i;let y=0;h===0&&a===0?y=.5/t:h===i&&l===Math.PI&&(y=-.5/t);for(let T=0;T<=t;T++){const w=T/t;p.x=-e*Math.cos(r+w*s)*Math.sin(a+_*o),p.y=e*Math.cos(a+_*o),p.z=e*Math.sin(r+w*s)*Math.sin(a+_*o),g.push(p.x,p.y,p.z),d.copy(p).normalize(),v.push(d.x,d.y,d.z),f.push(w+y,1-_),x.push(c++)}u.push(x)}for(let h=0;h<i;h++)for(let x=0;x<t;x++){const _=u[h][x+1],y=u[h][x],T=u[h+1][x],w=u[h+1][x+1];(h!==0||a>0)&&m.push(_,y,w),(h!==i-1||l<Math.PI)&&m.push(y,T,w)}this.setIndex(m),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(v,3)),this.setAttribute("uv",new dt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class qi extends $t{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],l=[],c=[],u=new I,p=new I,d=new I;for(let m=0;m<=i;m++)for(let g=0;g<=r;g++){const v=g/r*s,f=m/i*Math.PI*2;p.x=(e+t*Math.cos(f))*Math.cos(v),p.y=(e+t*Math.cos(f))*Math.sin(v),p.z=t*Math.sin(f),o.push(p.x,p.y,p.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),d.subVectors(p,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/r),c.push(m/i)}for(let m=1;m<=i;m++)for(let g=1;g<=r;g++){const v=(r+1)*m+g-1,f=(r+1)*(m-1)+g-1,h=(r+1)*(m-1)+g,x=(r+1)*m+g;a.push(v,f,x),a.push(f,h,x)}this.setIndex(a),this.setAttribute("position",new dt(o,3)),this.setAttribute("normal",new dt(l,3)),this.setAttribute("uv",new dt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qi(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}const Vh=new _t;class oM{constructor(e,t,i=0,r=1/0){this.ray=new cu(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new uu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Vh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Vh),this}intersectObject(e,t=!0,i=[]){return Ic(e,this,i,t),i.sort(Hh),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Ic(e[r],this,i,t);return i.sort(Hh),i}}function Hh(n,e){return n.distance-e.distance}function Ic(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)Ic(s[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tu);const ki=new oM,Xt=new I,gi=new I,pt=new Bt,Gh={X:new I(1,0,0),Y:new I(0,1,0),Z:new I(0,0,1)},Sl={type:"change"},Wh={type:"mouseDown",mode:null},Xh={type:"mouseUp",mode:null},qh={type:"objectChange"};class jh extends Vt{constructor(e,t){super(),t===void 0&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),t=document),this.isTransformControls=!0,this.visible=!1,this.domElement=t,this.domElement.style.touchAction="none";const i=new dM;this._gizmo=i,this.add(i);const r=new pM;this._plane=r,this.add(r);const s=this;function a(x,_){let y=_;Object.defineProperty(s,x,{get:function(){return y!==void 0?y:_},set:function(T){y!==T&&(y=T,r[x]=T,i[x]=T,s.dispatchEvent({type:x+"-changed",value:T}),s.dispatchEvent(Sl))}}),s[x]=_,r[x]=_,i[x]=_}a("camera",e),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0);const o=new I,l=new I,c=new Bt,u=new Bt,p=new I,d=new Bt,m=new I,g=new I,v=new I,f=0,h=new I;a("worldPosition",o),a("worldPositionStart",l),a("worldQuaternion",c),a("worldQuaternionStart",u),a("cameraPosition",p),a("cameraQuaternion",d),a("pointStart",m),a("pointEnd",g),a("rotationAxis",v),a("rotationAngle",f),a("eye",h),this._offset=new I,this._startNorm=new I,this._endNorm=new I,this._cameraScale=new I,this._parentPosition=new I,this._parentQuaternion=new Bt,this._parentQuaternionInv=new Bt,this._parentScale=new I,this._worldScaleStart=new I,this._worldQuaternionInv=new Bt,this._worldScale=new I,this._positionStart=new I,this._quaternionStart=new Bt,this._scaleStart=new I,this._getPointer=lM.bind(this),this._onPointerDown=uM.bind(this),this._onPointerHover=cM.bind(this),this._onPointerMove=fM.bind(this),this._onPointerUp=hM.bind(this),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp)}updateMatrixWorld(e){this.object!==void 0&&(this.object.updateMatrixWorld(),this.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this._parentPosition,this._parentQuaternion,this._parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this._worldScale),this._parentQuaternionInv.copy(this._parentQuaternion).invert(),this._worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this._cameraScale),this.camera.isOrthographicCamera?this.camera.getWorldDirection(this.eye).negate():this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld(e)}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&ki.setFromCamera(e,this.camera);const t=El(this._gizmo.picker[this.mode],ki);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&ki.setFromCamera(e,this.camera);const t=El(this._plane,ki,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,Wh.mode=this.mode,this.dispatchEvent(Wh)}}pointerMove(e){const t=this.axis,i=this.mode,r=this.object;let s=this.space;if(i==="scale"?s="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(s="world"),r===void 0||t===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&ki.setFromCamera(e,this.camera);const a=El(this._plane,ki,!0);if(a){if(this.pointEnd.copy(a.point).sub(this.worldPositionStart),i==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),s==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),s==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),r.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(s==="local"&&(r.position.applyQuaternion(pt.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.position.applyQuaternion(this._quaternionStart)),s==="world"&&(r.parent&&r.position.add(Xt.setFromMatrixPosition(r.parent.matrixWorld)),t.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.parent&&r.position.sub(Xt.setFromMatrixPosition(r.parent.matrixWorld))));else if(i==="scale"){if(t.search("XYZ")!==-1){let o=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(o*=-1),gi.set(o,o,o)}else Xt.copy(this.pointStart),gi.copy(this.pointEnd),Xt.applyQuaternion(this._worldQuaternionInv),gi.applyQuaternion(this._worldQuaternionInv),gi.divide(Xt),t.search("X")===-1&&(gi.x=1),t.search("Y")===-1&&(gi.y=1),t.search("Z")===-1&&(gi.z=1);r.scale.copy(this._scaleStart).multiply(gi),this.scaleSnap&&(t.search("X")!==-1&&(r.scale.x=Math.round(r.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(r.scale.y=Math.round(r.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(r.scale.z=Math.round(r.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(i==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const o=20/this.worldPosition.distanceTo(Xt.setFromMatrixPosition(this.camera.matrixWorld));let l=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(Xt.copy(this.rotationAxis).cross(this.eye))*o):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(Gh[t]),Xt.copy(Gh[t]),s==="local"&&Xt.applyQuaternion(this.worldQuaternion),Xt.cross(this.eye),Xt.length()===0?l=!0:this.rotationAngle=this._offset.dot(Xt.normalize())*o),(t==="E"||l)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),s==="local"&&t!=="E"&&t!=="XYZE"?(r.quaternion.copy(this._quaternionStart),r.quaternion.multiply(pt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),r.quaternion.copy(pt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),r.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Sl),this.dispatchEvent(qh)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(Xh.mode=this.mode,this.dispatchEvent(Xh)),this.dragging=!1,this.axis=null)}dispose(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}attach(e){return this.object=e,this.visible=!0,this}detach(){return this.object=void 0,this.visible=!1,this.axis=null,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Sl),this.dispatchEvent(qh),this.pointStart.copy(this.pointEnd))}getRaycaster(){return ki}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}}function lM(n){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:n.button};{const e=this.domElement.getBoundingClientRect();return{x:(n.clientX-e.left)/e.width*2-1,y:-(n.clientY-e.top)/e.height*2+1,button:n.button}}}function cM(n){if(this.enabled)switch(n.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(n));break}}function uM(n){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(n)),this.pointerDown(this._getPointer(n)))}function fM(n){this.enabled&&this.pointerMove(this._getPointer(n))}function hM(n){this.enabled&&(this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(n)))}function El(n,e,t){const i=e.intersectObject(n,!0);for(let r=0;r<i.length;r++)if(i[r].object.visible||t)return i[r];return!1}const ba=new Gn,lt=new I(0,1,0),Yh=new I(0,0,0),$h=new _t,wa=new Bt,Va=new Bt,In=new I,Zh=new _t,xs=new I(1,0,0),Hi=new I(0,1,0),ys=new I(0,0,1),Aa=new I,ds=new I,ps=new I;class dM extends Vt{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new Xs({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new t0({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),i=e.clone();i.opacity=.15;const r=t.clone();r.opacity=.5;const s=e.clone();s.color.setHex(16711680);const a=e.clone();a.color.setHex(65280);const o=e.clone();o.color.setHex(255);const l=e.clone();l.color.setHex(16711680),l.opacity=.5;const c=e.clone();c.color.setHex(65280),c.opacity=.5;const u=e.clone();u.color.setHex(255),u.opacity=.5;const p=e.clone();p.opacity=.25;const d=e.clone();d.color.setHex(16776960),d.opacity=.25,e.clone().color.setHex(16776960);const g=e.clone();g.color.setHex(7895160);const v=new Wt(0,.04,.1,12);v.translate(0,.05,0);const f=new St(.08,.08,.08);f.translate(0,.04,0);const h=new $t;h.setAttribute("position",new dt([0,0,0,1,0,0],3));const x=new Wt(.0075,.0075,.5,3);x.translate(0,.25,0);function _(X,H){const $=new qi(X,.0075,3,64,H*Math.PI*2);return $.rotateY(Math.PI/2),$.rotateX(Math.PI/2),$}function y(){const X=new $t;return X.setAttribute("position",new dt([0,0,0,1,1,1],3)),X}const T={X:[[new ue(v,s),[.5,0,0],[0,0,-Math.PI/2]],[new ue(v,s),[-.5,0,0],[0,0,Math.PI/2]],[new ue(x,s),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new ue(v,a),[0,.5,0]],[new ue(v,a),[0,-.5,0],[Math.PI,0,0]],[new ue(x,a)]],Z:[[new ue(v,o),[0,0,.5],[Math.PI/2,0,0]],[new ue(v,o),[0,0,-.5],[-Math.PI/2,0,0]],[new ue(x,o),null,[Math.PI/2,0,0]]],XYZ:[[new ue(new Dr(.1,0),p.clone()),[0,0,0]]],XY:[[new ue(new St(.15,.15,.01),u.clone()),[.15,.15,0]]],YZ:[[new ue(new St(.15,.15,.01),l.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ue(new St(.15,.15,.01),c.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},w={X:[[new ue(new Wt(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new ue(new Wt(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ue(new Wt(.2,0,.6,4),i),[0,.3,0]],[new ue(new Wt(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ue(new Wt(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new ue(new Wt(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new ue(new Dr(.2,0),i)]],XY:[[new ue(new St(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new ue(new St(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ue(new St(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]]},A={START:[[new ue(new Dr(.01,2),r),null,null,null,"helper"]],END:[[new ue(new Dr(.01,2),r),null,null,null,"helper"]],DELTA:[[new mi(y(),r),null,null,null,"helper"]],X:[[new mi(h,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new mi(h,r.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new mi(h,r.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},D={XYZE:[[new ue(_(.5,1),g),null,[0,Math.PI/2,0]]],X:[[new ue(_(.5,.5),s)]],Y:[[new ue(_(.5,.5),a),null,[0,0,-Math.PI/2]]],Z:[[new ue(_(.5,.5),o),null,[0,Math.PI/2,0]]],E:[[new ue(_(.75,1),d),null,[0,Math.PI/2,0]]]},b={AXIS:[[new mi(h,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},M={XYZE:[[new ue(new pu(.25,10,8),i)]],X:[[new ue(new qi(.5,.1,4,24),i),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new ue(new qi(.5,.1,4,24),i),[0,0,0],[Math.PI/2,0,0]]],Z:[[new ue(new qi(.5,.1,4,24),i),[0,0,0],[0,0,-Math.PI/2]]],E:[[new ue(new qi(.75,.1,2,24),i)]]},L={X:[[new ue(f,s),[.5,0,0],[0,0,-Math.PI/2]],[new ue(x,s),[0,0,0],[0,0,-Math.PI/2]],[new ue(f,s),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new ue(f,a),[0,.5,0]],[new ue(x,a)],[new ue(f,a),[0,-.5,0],[0,0,Math.PI]]],Z:[[new ue(f,o),[0,0,.5],[Math.PI/2,0,0]],[new ue(x,o),[0,0,0],[Math.PI/2,0,0]],[new ue(f,o),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new ue(new St(.15,.15,.01),u),[.15,.15,0]]],YZ:[[new ue(new St(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ue(new St(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ue(new St(.1,.1,.1),p.clone())]]},z={X:[[new ue(new Wt(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new ue(new Wt(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ue(new Wt(.2,0,.6,4),i),[0,.3,0]],[new ue(new Wt(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ue(new Wt(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new ue(new Wt(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new ue(new St(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new ue(new St(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ue(new St(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ue(new St(.2,.2,.2),i),[0,0,0]]]},O={X:[[new mi(h,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new mi(h,r.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new mi(h,r.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function U(X){const H=new Vt;for(const $ in X)for(let W=X[$].length;W--;){const ee=X[$][W][0].clone(),le=X[$][W][1],de=X[$][W][2],Re=X[$][W][3],Ye=X[$][W][4];ee.name=$,ee.tag=Ye,le&&ee.position.set(le[0],le[1],le[2]),de&&ee.rotation.set(de[0],de[1],de[2]),Re&&ee.scale.set(Re[0],Re[1],Re[2]),ee.updateMatrix();const j=ee.geometry.clone();j.applyMatrix4(ee.matrix),ee.geometry=j,ee.renderOrder=1/0,ee.position.set(0,0,0),ee.rotation.set(0,0,0),ee.scale.set(1,1,1),H.add(ee)}return H}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=U(T)),this.add(this.gizmo.rotate=U(D)),this.add(this.gizmo.scale=U(L)),this.add(this.picker.translate=U(w)),this.add(this.picker.rotate=U(M)),this.add(this.picker.scale=U(z)),this.add(this.helper.translate=U(A)),this.add(this.helper.rotate=U(b)),this.add(this.helper.scale=U(O)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const i=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:Va;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let r=[];r=r.concat(this.picker[this.mode].children),r=r.concat(this.gizmo[this.mode].children),r=r.concat(this.helper[this.mode].children);for(let s=0;s<r.length;s++){const a=r[s];a.visible=!0,a.rotation.set(0,0,0),a.position.copy(this.worldPosition);let o;if(this.camera.isOrthographicCamera?o=(this.camera.top-this.camera.bottom)/this.camera.zoom:o=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),a.scale.set(1,1,1).multiplyScalar(o*this.size/4),a.tag==="helper"){a.visible=!1,a.name==="AXIS"?(a.visible=!!this.axis,this.axis==="X"&&(pt.setFromEuler(ba.set(0,0,0)),a.quaternion.copy(i).multiply(pt),Math.abs(lt.copy(xs).applyQuaternion(i).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="Y"&&(pt.setFromEuler(ba.set(0,0,Math.PI/2)),a.quaternion.copy(i).multiply(pt),Math.abs(lt.copy(Hi).applyQuaternion(i).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="Z"&&(pt.setFromEuler(ba.set(0,Math.PI/2,0)),a.quaternion.copy(i).multiply(pt),Math.abs(lt.copy(ys).applyQuaternion(i).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="XYZE"&&(pt.setFromEuler(ba.set(0,Math.PI/2,0)),lt.copy(this.rotationAxis),a.quaternion.setFromRotationMatrix($h.lookAt(Yh,lt,Hi)),a.quaternion.multiply(pt),a.visible=this.dragging),this.axis==="E"&&(a.visible=!1)):a.name==="START"?(a.position.copy(this.worldPositionStart),a.visible=this.dragging):a.name==="END"?(a.position.copy(this.worldPosition),a.visible=this.dragging):a.name==="DELTA"?(a.position.copy(this.worldPositionStart),a.quaternion.copy(this.worldQuaternionStart),Xt.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),Xt.applyQuaternion(this.worldQuaternionStart.clone().invert()),a.scale.copy(Xt),a.visible=this.dragging):(a.quaternion.copy(i),this.dragging?a.position.copy(this.worldPositionStart):a.position.copy(this.worldPosition),this.axis&&(a.visible=this.axis.search(a.name)!==-1));continue}a.quaternion.copy(i),this.mode==="translate"||this.mode==="scale"?(a.name==="X"&&Math.abs(lt.copy(xs).applyQuaternion(i).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="Y"&&Math.abs(lt.copy(Hi).applyQuaternion(i).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="Z"&&Math.abs(lt.copy(ys).applyQuaternion(i).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="XY"&&Math.abs(lt.copy(ys).applyQuaternion(i).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="YZ"&&Math.abs(lt.copy(xs).applyQuaternion(i).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="XZ"&&Math.abs(lt.copy(Hi).applyQuaternion(i).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1)):this.mode==="rotate"&&(wa.copy(i),lt.copy(this.eye).applyQuaternion(pt.copy(i).invert()),a.name.search("E")!==-1&&a.quaternion.setFromRotationMatrix($h.lookAt(this.eye,Yh,Hi)),a.name==="X"&&(pt.setFromAxisAngle(xs,Math.atan2(-lt.y,lt.z)),pt.multiplyQuaternions(wa,pt),a.quaternion.copy(pt)),a.name==="Y"&&(pt.setFromAxisAngle(Hi,Math.atan2(lt.x,lt.z)),pt.multiplyQuaternions(wa,pt),a.quaternion.copy(pt)),a.name==="Z"&&(pt.setFromAxisAngle(ys,Math.atan2(lt.y,lt.x)),pt.multiplyQuaternions(wa,pt),a.quaternion.copy(pt))),a.visible=a.visible&&(a.name.indexOf("X")===-1||this.showX),a.visible=a.visible&&(a.name.indexOf("Y")===-1||this.showY),a.visible=a.visible&&(a.name.indexOf("Z")===-1||this.showZ),a.visible=a.visible&&(a.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),a.material._color=a.material._color||a.material.color.clone(),a.material._opacity=a.material._opacity||a.material.opacity,a.material.color.copy(a.material._color),a.material.opacity=a.material._opacity,this.enabled&&this.axis&&(a.name===this.axis||this.axis.split("").some(function(l){return a.name===l}))&&(a.material.color.setHex(16776960),a.material.opacity=1)}super.updateMatrixWorld(e)}}class pM extends ue{constructor(){super(new qs(1e5,1e5,2,2),new Xs({visible:!1,wireframe:!0,side:On,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),Aa.copy(xs).applyQuaternion(t==="local"?this.worldQuaternion:Va),ds.copy(Hi).applyQuaternion(t==="local"?this.worldQuaternion:Va),ps.copy(ys).applyQuaternion(t==="local"?this.worldQuaternion:Va),lt.copy(ds),this.mode){case"translate":case"scale":switch(this.axis){case"X":lt.copy(this.eye).cross(Aa),In.copy(Aa).cross(lt);break;case"Y":lt.copy(this.eye).cross(ds),In.copy(ds).cross(lt);break;case"Z":lt.copy(this.eye).cross(ps),In.copy(ps).cross(lt);break;case"XY":In.copy(ps);break;case"YZ":In.copy(Aa);break;case"XZ":lt.copy(ps),In.copy(ds);break;case"XYZ":case"E":In.set(0,0,0);break}break;case"rotate":default:In.set(0,0,0)}In.length()===0?this.quaternion.copy(this.cameraQuaternion):(Zh.lookAt(Xt.set(0,0,0),In,lt),this.quaternion.setFromRotationMatrix(Zh)),super.updateMatrixWorld(e)}}const Le=Symbol("@@iwer/devui/input-scene"),mM=.016;class gM{constructor(e){const t=e.canvasContainer,i=new aM,r=new _n(e.fovy/Math.PI*180,t.offsetWidth/t.offsetHeight,.1,1e3),s=new Ir,a=new Ir;i.add(s),s.add(a),a.position.fromArray(e.position.vec3),a.quaternion.fromArray(e.quaternion.quat),a.add(r),r.position.x-=e.ipd/2;const o=new ue(new St(.1,.1,.1)),l=o.clone();o.position.fromArray(e.controllers.left.position.vec3),o.quaternion.fromArray(e.controllers.left.quaternion.quat),l.position.fromArray(e.controllers.right.position.vec3),l.quaternion.fromArray(e.controllers.right.quaternion.quat),a.attach(o),a.attach(l),o.visible=!1,l.visible=!1;const c=new ue(new du(.25,.27,32),new Xs({color:16777215,side:ii}));c.rotateX(-Math.PI/2),i.add(c);const u=new sM({alpha:!0});u.setSize(t.offsetWidth,t.offsetHeight),u.setClearColor(0,0),t.appendChild(u.domElement);const p=new jh(r,u.domElement);p.attach(o),i.add(p);const d=new jh(r,u.domElement);d.attach(l),i.add(d);const m=new ResizeObserver(()=>{this.resize()});m.observe(t);const g=f=>{f.addEventListener("mouseDown",()=>{f.userData.pressStart=performance.now()}),f.addEventListener("mouseUp",()=>{const h=performance.now()-f.userData.pressStart;f.userData.pressStart=null,h<200&&(f.mode==="rotate"?f.setMode("translate"):f.setMode("rotate"))}),f.addEventListener("change",()=>{this.renderScene()})};g(p),g(d);const v=f=>{if(!this[Le].isPointerLocked)return;const h=f.movementX||f.mozMovementX||f.webkitMovementX||0,x=f.movementY||f.mozMovementY||f.webkitMovementY||0;s.rotation.y-=h*.002,a.rotation.x-=x*.002,e.quaternion.copy(a.getWorldQuaternion(new Bt)),this.renderScene()};this[Le]={canvasContainer:t,renderer:u,scene:i,camera:r,playerRig:s,cameraRig:a,xrDevice:e,controllerIndicators:{left:o,right:l},transformControls:{left:p,right:d},headsetDefaultPosition:a.position.clone(),headsetDefaultQuaternion:a.quaternion.clone(),controllerDefaultPositions:{left:o.position.clone(),right:l.position.clone()},controllerDefaultQuaternions:{left:o.quaternion.clone(),right:l.quaternion.clone()},resizeObserver:m,isPointerLocked:!1,vec3:new I,quat:new Bt,mouseMoveHandler:v,keyState:{ShiftLeft:!1,KeyW:!1,KeyA:!1,KeyS:!1,KeyD:!1,ArrowUp:!1,ArrowDown:!1},movePlayerRig:()=>this.movePlayerRig(),moveInterval:null},document.addEventListener("pointerlockchange",this.pointerLockChangeHandler.bind(this),!1),document.addEventListener("mozpointerlockchange",this.pointerLockChangeHandler.bind(this),!1),document.addEventListener("webkitpointerlockchange",this.pointerLockChangeHandler.bind(this),!1),document.addEventListener("keydown",this.keyDownHandler.bind(this),!1),document.addEventListener("keyup",this.keyUpHandler.bind(this),!1)}lockPointer(){this[Le].renderer.domElement.requestPointerLock=this[Le].renderer.domElement.requestPointerLock||this[Le].renderer.domElement.mozRequestPointerLock||this[Le].renderer.domElement.webkitRequestPointerLock,this[Le].renderer.domElement.requestPointerLock()}pointerLockChangeHandler(){this[Le].isPointerLocked=document.pointerLockElement===this[Le].renderer.domElement||document.mozPointerLockElement===this[Le].renderer.domElement||document.webkitPointerLockElement===this[Le].renderer.domElement,this[Le].isPointerLocked?(document.addEventListener("mousemove",this[Le].mouseMoveHandler,!1),Object.values(this[Le].transformControls).forEach(e=>{e.enabled=!1,e.visible=!1})):(document.removeEventListener("mousemove",this[Le].mouseMoveHandler,!1),Object.values(this[Le].transformControls).forEach(e=>{e.enabled=!0,e.visible=!0}))}keyDownHandler(e){const{keyState:t,movePlayerRig:i,moveInterval:r}=this[Le];e.code in t&&(t[e.code]=!0),t.ShiftLeft&&(t.KeyW||t.KeyA||t.KeyS||t.KeyD)&&(r||(this[Le].moveInterval=window.setInterval(i,16))),t.ShiftLeft&&t.ArrowUp&&(this[Le].cameraRig.position.y+=.05,this.renderScene()),t.ShiftLeft&&t.ArrowDown&&(this[Le].cameraRig.position.y-=.05,this.renderScene())}keyUpHandler(e){const{keyState:t,moveInterval:i}=this[Le];e.code in t&&(t[e.code]=!1),(!t.ShiftLeft||!(t.KeyW||t.KeyA||t.KeyS||t.KeyD))&&i&&(window.clearInterval(i),this[Le].moveInterval=null)}movePlayerRig(){const{playerRig:e,keyState:t,vec3:i}=this[Le];i.set((t.KeyD?1:0)-(t.KeyA?1:0),0,(t.KeyS?1:0)-(t.KeyW?1:0)),i.lengthSq()>0&&(i.normalize().multiplyScalar(mM).applyQuaternion(e.quaternion),e.position.add(i),this.renderScene())}syncFovy(){this[Le].camera.fov=this[Le].xrDevice.fovy/Math.PI*180,this[Le].camera.updateProjectionMatrix()}resetDeviceTransforms(){const{playerRig:e,cameraRig:t,controllerIndicators:i}=this[Le];t.position.copy(this[Le].headsetDefaultPosition),t.quaternion.set(0,0,0,1),e.position.set(0,0,0),e.quaternion.set(0,0,0,1),Object.entries(i).forEach(([r,s])=>{s.position.copy(this[Le].controllerDefaultPositions[r]),s.quaternion.copy(this[Le].controllerDefaultQuaternions[r])}),this.syncDeviceTransforms(),this.renderScene()}syncDeviceTransforms(){const{xrDevice:e,cameraRig:t,controllerIndicators:i}=this[Le];e.position.copy(t.getWorldPosition(this[Le].vec3)),e.quaternion.copy(t.getWorldQuaternion(this[Le].quat)),Object.entries(i).forEach(([r,s])=>{e.controllers[r].position.copy(s.getWorldPosition(this[Le].vec3)),e.controllers[r].quaternion.copy(s.getWorldQuaternion(this[Le].quat))})}renderScene(){this.syncDeviceTransforms(),this[Le].renderer.render(this[Le].scene,this[Le].camera)}get domElement(){return this[Le].renderer.domElement}resize(){const e=this[Le].canvasContainer.offsetWidth,t=this[Le].canvasContainer.offsetHeight;this[Le].renderer.setSize(e,t),this[Le].camera.aspect=e/t,this[Le].camera.updateProjectionMatrix(),this.renderScene()}dispose(){this[Le].resizeObserver.disconnect(),this[Le].renderer.dispose(),document.removeEventListener("pointerlockchange",this.pointerLockChangeHandler.bind(this),!1),document.removeEventListener("mozpointerlockchange",this.pointerLockChangeHandler.bind(this),!1),document.removeEventListener("webkitpointerlockchange",this.pointerLockChangeHandler.bind(this),!1),document.removeEventListener("mousemove",this[Le].mouseMoveHandler,!1),document.removeEventListener("keydown",this.keyDownHandler.bind(this),!1),document.removeEventListener("keyup",this.keyUpHandler.bind(this),!1)}}const vM=Symbol("@@iwer/devui/devui"),Dc={buttonPressDuration:250},n0=Ze.createContext(Dc),mu=()=>Ze.useContext(n0);class _M{constructor(e,t={}){e.ipd=0;const i=e.canvasContainer,r=document.createElement("div");r.style.position="fixed",r.style.width="100%",r.style.height="100%",r.style.top="0",r.style.left="0",r.style.display="flex",r.style.justifyContent="center",r.style.alignItems="center",r.style.overflow="hidden",r.style.pointerEvents="none",r.style.zIndex="3",i.appendChild(r);const s=new gM(e),a=s.domElement;a.style.position="fixed",a.style.width="100%",a.style.height="100%",a.style.top="0",a.style.left="0",a.style.zIndex="2",i.appendChild(a),l0(r).render(P.jsx(xM,{xrDevice:e,inputLayer:s,options:t})),this[vM]={xrDevice:e,inputLayer:s}}}const xM=({xrDevice:n,inputLayer:e,options:t})=>{const[i,r]=Ze.useState(!1),[s,a]=Ze.useState(F2),[o,l]=Ze.useState(!1),[c,u]=Ze.useState(!1),[p,d]=Ze.useState(Dc);return Ze.useEffect(()=>{var m;d({buttonPressDuration:(m=t.buttonPressDuration)!==null&&m!==void 0?m:Dc.buttonPressDuration});const g=()=>{const v=document.pointerLockElement||document.mozPointerLockElement||document.webkitPointerLockElement;r(!!v)};return document.addEventListener("pointerlockchange",g,!1),document.addEventListener("mozpointerlockchange",g,!1),document.addEventListener("webkitpointerlockchange",g,!1),()=>{document.removeEventListener("pointerlockchange",g,!1),document.removeEventListener("mozpointerlockchange",g,!1),document.removeEventListener("webkitpointerlockchange",g,!1)}},[]),P.jsx(n0.Provider,{value:p,children:P.jsxs("div",{style:{width:"100vw",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[P.jsx(K2,{xrDevice:n,inputLayer:e,keyMapOpen:o,setKeyMapOpen:l,fovSettingOpen:c,setFovSettingOpen:u}),o&&P.jsx(k2,{keyMap:s,setKeyMap:a}),c&&P.jsx($2,{xrDevice:n,inputLayer:e}),P.jsx(j2,{xrDevice:n,keyMap:s,pointerLocked:i})]})})},yM={metaQuest3:K0,metaQuest2:$0,metaQuestPro:Z0,oculusQuest1:Y0},MM=["left","none","right"];function TM(n){const e=typeof n=="string"?n:n.type??"metaQuest3",t=new G0(yM[e],typeof n=="string"?void 0:n);return typeof n!="string"&&(i0(t,n.headset),Qh(t.hands,n.hand),Qh(t.controllers,n.controller),t.primaryInputMode=n.primaryInputMode??"controller"),t.ipd=typeof n=="string"?0:n.ipd??0,t.installRuntime(),new _M(t),t}const Kh=new bl,SM=new c0;function Qh(n,e){if(e!=null)for(const t of MM)i0(n[t],e[t])}function i0(n,e){n==null||e==null||(Jh(n.position,e.position),Jh(Kh,e.rotation),ed(n.quaternion,SM.setFromEuler(Kh)),ed(n.quaternion,e.quaternion))}function Jh(n,e){if(e!=null){if(e instanceof bl&&n instanceof bl&&n.copy(e),Array.isArray(e)){n.x=e[0],n.y=e[1],n.z=e[2];return}n.x=e.x,n.y=e.y,n.z=e.z}}function ed(n,e){if(e!=null){if(Array.isArray(e)){n.x=e[0],n.y=e[1],n.z=e[2],n.w=e[3];return}n.x=e.x,n.y=e.y,n.z=e.z,n.w=e.w}}export{TM as emulate};
//# sourceMappingURL=chunk-Cl9s_LKx.js.map
