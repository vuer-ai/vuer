import{o as nr,r as it,j as P,e as Q0}from"./chunk-CYTjWIao.js";import{ag as Xe}from"./chunk-AXKtRLWU.js";import"./chunk-B5NqXhlg.js";var J0=1e-6,rn=typeof Float32Array<"u"?Float32Array:Array;Math.hypot||(Math.hypot=function(){for(var n=0,e=arguments.length;e--;)n+=arguments[e]*arguments[e];return Math.sqrt(n)});function ep(){var n=new rn(9);return rn!=Float32Array&&(n[1]=0,n[2]=0,n[3]=0,n[5]=0,n[6]=0,n[7]=0),n[0]=1,n[4]=1,n[8]=1,n}function en(){var n=new rn(16);return rn!=Float32Array&&(n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0),n[0]=1,n[5]=1,n[10]=1,n[15]=1,n}function tp(n){var e=new rn(16);return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],e}function qh(n,e){return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n[4]=e[4],n[5]=e[5],n[6]=e[6],n[7]=e[7],n[8]=e[8],n[9]=e[9],n[10]=e[10],n[11]=e[11],n[12]=e[12],n[13]=e[13],n[14]=e[14],n[15]=e[15],n}function jh(n,e){var t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],p=e[9],d=e[10],m=e[11],g=e[12],v=e[13],h=e[14],f=e[15],x=t*o-i*a,_=t*l-r*a,M=t*c-s*a,T=i*l-r*o,w=i*c-s*o,A=r*c-s*l,I=u*v-p*g,E=u*h-d*g,y=u*f-m*g,L=p*h-d*v,k=p*f-m*v,O=d*f-m*h,z=x*O-_*k+M*L+T*y-w*E+A*I;return z?(z=1/z,n[0]=(o*O-l*k+c*L)*z,n[1]=(r*k-i*O-s*L)*z,n[2]=(v*A-h*w+f*T)*z,n[3]=(d*w-p*A-m*T)*z,n[4]=(l*y-a*O-c*E)*z,n[5]=(t*O-r*y+s*E)*z,n[6]=(h*M-g*A-f*_)*z,n[7]=(u*A-d*M+m*_)*z,n[8]=(a*k-o*y+c*I)*z,n[9]=(i*y-t*k-s*I)*z,n[10]=(g*w-v*M+f*x)*z,n[11]=(p*M-u*w-m*x)*z,n[12]=(o*E-a*L-l*I)*z,n[13]=(t*L-i*E+r*I)*z,n[14]=(v*_-g*T-h*x)*z,n[15]=(u*T-p*_+d*x)*z,n):null}function Yh(n,e,t){var i=e[0],r=e[1],s=e[2],a=e[3],o=e[4],l=e[5],c=e[6],u=e[7],p=e[8],d=e[9],m=e[10],g=e[11],v=e[12],h=e[13],f=e[14],x=e[15],_=t[0],M=t[1],T=t[2],w=t[3];return n[0]=_*i+M*o+T*p+w*v,n[1]=_*r+M*l+T*d+w*h,n[2]=_*s+M*c+T*m+w*f,n[3]=_*a+M*u+T*g+w*x,_=t[4],M=t[5],T=t[6],w=t[7],n[4]=_*i+M*o+T*p+w*v,n[5]=_*r+M*l+T*d+w*h,n[6]=_*s+M*c+T*m+w*f,n[7]=_*a+M*u+T*g+w*x,_=t[8],M=t[9],T=t[10],w=t[11],n[8]=_*i+M*o+T*p+w*v,n[9]=_*r+M*l+T*d+w*h,n[10]=_*s+M*c+T*m+w*f,n[11]=_*a+M*u+T*g+w*x,_=t[12],M=t[13],T=t[14],w=t[15],n[12]=_*i+M*o+T*p+w*v,n[13]=_*r+M*l+T*d+w*h,n[14]=_*s+M*c+T*m+w*f,n[15]=_*a+M*u+T*g+w*x,n}function ws(n,e){return n[0]=1,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=1,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=1,n[11]=0,n[12]=e[0],n[13]=e[1],n[14]=e[2],n[15]=1,n}function Ns(n,e,t){var i=e[0],r=e[1],s=e[2],a=e[3],o=i+i,l=r+r,c=s+s,u=i*o,p=i*l,d=i*c,m=r*l,g=r*c,v=s*c,h=a*o,f=a*l,x=a*c;return n[0]=1-(m+v),n[1]=p+x,n[2]=d-f,n[3]=0,n[4]=p-x,n[5]=1-(u+v),n[6]=g+h,n[7]=0,n[8]=d+f,n[9]=g-h,n[10]=1-(u+m),n[11]=0,n[12]=t[0],n[13]=t[1],n[14]=t[2],n[15]=1,n}function As(n,e){return n[0]=e[12],n[1]=e[13],n[2]=e[14],n}function Sl(n,e){var t=e[0],i=e[1],r=e[2],s=e[4],a=e[5],o=e[6],l=e[8],c=e[9],u=e[10];return n[0]=Math.hypot(t,i,r),n[1]=Math.hypot(s,a,o),n[2]=Math.hypot(l,c,u),n}function Ba(n,e){var t=new rn(3);Sl(t,e);var i=1/t[0],r=1/t[1],s=1/t[2],a=e[0]*i,o=e[1]*r,l=e[2]*s,c=e[4]*i,u=e[5]*r,p=e[6]*s,d=e[8]*i,m=e[9]*r,g=e[10]*s,v=a+u+g,h=0;return v>0?(h=Math.sqrt(v+1)*2,n[3]=.25*h,n[0]=(p-m)/h,n[1]=(d-l)/h,n[2]=(o-c)/h):a>u&&a>g?(h=Math.sqrt(1+a-u-g)*2,n[3]=(p-m)/h,n[0]=.25*h,n[1]=(o+c)/h,n[2]=(d+l)/h):u>g?(h=Math.sqrt(1+u-a-g)*2,n[3]=(d-l)/h,n[0]=(o+c)/h,n[1]=.25*h,n[2]=(p+m)/h):(h=Math.sqrt(1+g-a-u)*2,n[3]=(o-c)/h,n[0]=(d+l)/h,n[1]=(p+m)/h,n[2]=.25*h),n}function np(n,e,t,i){var r=e[0],s=e[1],a=e[2],o=e[3],l=r+r,c=s+s,u=a+a,p=r*l,d=r*c,m=r*u,g=s*c,v=s*u,h=a*u,f=o*l,x=o*c,_=o*u,M=i[0],T=i[1],w=i[2];return n[0]=(1-(g+h))*M,n[1]=(d+_)*M,n[2]=(m-x)*M,n[3]=0,n[4]=(d-_)*T,n[5]=(1-(p+h))*T,n[6]=(v+f)*T,n[7]=0,n[8]=(m+x)*w,n[9]=(v-f)*w,n[10]=(1-(p+g))*w,n[11]=0,n[12]=t[0],n[13]=t[1],n[14]=t[2],n[15]=1,n}function ip(n,e,t,i,r){var s=1/Math.tan(e/2),a;return n[0]=s/t,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=s,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[11]=-1,n[12]=0,n[13]=0,n[15]=0,r!=null&&r!==1/0?(a=1/(i-r),n[10]=(r+i)*a,n[14]=2*r*i*a):(n[10]=-1,n[14]=-2*i),n}var _u=ip;function pn(){var n=new rn(3);return rn!=Float32Array&&(n[0]=0,n[1]=0,n[2]=0),n}function rp(n){var e=n[0],t=n[1],i=n[2];return Math.hypot(e,t,i)}function An(n,e,t){var i=new rn(3);return i[0]=n,i[1]=e,i[2]=t,i}function Io(n,e){return n[0]=e[0],n[1]=e[1],n[2]=e[2],n}function sp(n,e,t,i){return n[0]=e,n[1]=t,n[2]=i,n}function ap(n,e,t){return n[0]=e[0]+t[0],n[1]=e[1]+t[1],n[2]=e[2]+t[2],n}function $h(n,e){var t=e[0],i=e[1],r=e[2],s=t*t+i*i+r*r;return s>0&&(s=1/Math.sqrt(s)),n[0]=e[0]*s,n[1]=e[1]*s,n[2]=e[2]*s,n}function op(n,e){return n[0]*e[0]+n[1]*e[1]+n[2]*e[2]}function Do(n,e,t){var i=e[0],r=e[1],s=e[2],a=t[0],o=t[1],l=t[2];return n[0]=r*l-s*o,n[1]=s*a-i*l,n[2]=i*o-r*a,n}function El(n,e,t,i){var r=e[0],s=e[1],a=e[2];return n[0]=r+i*(t[0]-r),n[1]=s+i*(t[1]-s),n[2]=a+i*(t[2]-a),n}function lp(n,e,t){var i=t[0],r=t[1],s=t[2],a=t[3],o=e[0],l=e[1],c=e[2],u=r*c-s*l,p=s*o-i*c,d=i*l-r*o,m=r*d-s*p,g=s*u-i*d,v=i*p-r*u,h=a*2;return u*=h,p*=h,d*=h,m*=2,g*=2,v*=2,n[0]=o+u+m,n[1]=l+p+g,n[2]=c+d+v,n}var cp=rp;(function(){var n=pn();return function(e,t,i,r,s,a){var o,l;for(t||(t=3),i||(i=0),r?l=Math.min(r*t+i,e.length):l=e.length,o=i;o<l;o+=t)n[0]=e[o],n[1]=e[o+1],n[2]=e[o+2],s(n,n,a),e[o]=n[0],e[o+1]=n[1],e[o+2]=n[2];return e}})();function up(){var n=new rn(4);return rn!=Float32Array&&(n[0]=0,n[1]=0,n[2]=0,n[3]=0),n}function fp(n,e,t,i){var r=new rn(4);return r[0]=n,r[1]=e,r[2]=t,r[3]=i,r}function hp(n,e){return n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],n}function dp(n,e,t,i,r){return n[0]=e,n[1]=t,n[2]=i,n[3]=r,n}function pp(n,e){var t=e[0],i=e[1],r=e[2],s=e[3],a=t*t+i*i+r*r+s*s;return a>0&&(a=1/Math.sqrt(a)),n[0]=t*a,n[1]=i*a,n[2]=r*a,n[3]=s*a,n}(function(){var n=up();return function(e,t,i,r,s,a){var o,l;for(t||(t=4),i||(i=0),r?l=Math.min(r*t+i,e.length):l=e.length,o=i;o<l;o+=t)n[0]=e[o],n[1]=e[o+1],n[2]=e[o+2],n[3]=e[o+3],s(n,n,a),e[o]=n[0],e[o+1]=n[1],e[o+2]=n[2],e[o+3]=n[3];return e}})();function Rn(){var n=new rn(4);return rn!=Float32Array&&(n[0]=0,n[1]=0,n[2]=0),n[3]=1,n}function Zh(n,e,t){t=t*.5;var i=Math.sin(t);return n[0]=i*e[0],n[1]=i*e[1],n[2]=i*e[2],n[3]=Math.cos(t),n}function mp(n,e,t){var i=e[0],r=e[1],s=e[2],a=e[3],o=t[0],l=t[1],c=t[2],u=t[3];return n[0]=i*u+a*o+r*c-s*l,n[1]=r*u+a*l+s*o-i*c,n[2]=s*u+a*c+i*l-r*o,n[3]=a*u-i*o-r*l-s*c,n}function ys(n,e,t,i){var r=e[0],s=e[1],a=e[2],o=e[3],l=t[0],c=t[1],u=t[2],p=t[3],d,m,g,v,h;return m=r*l+s*c+a*u+o*p,m<0&&(m=-m,l=-l,c=-c,u=-u,p=-p),1-m>J0?(d=Math.acos(m),g=Math.sin(d),v=Math.sin((1-i)*d)/g,h=Math.sin(i*d)/g):(v=1-i,h=i),n[0]=v*r+h*l,n[1]=v*s+h*c,n[2]=v*a+h*u,n[3]=v*o+h*p,n}function gp(n,e){return n[0]=-e[0],n[1]=-e[1],n[2]=-e[2],n[3]=e[3],n}function vp(n,e){var t=e[0]+e[4]+e[8],i;if(t>0)i=Math.sqrt(t+1),n[3]=.5*i,i=.5/i,n[0]=(e[5]-e[7])*i,n[1]=(e[6]-e[2])*i,n[2]=(e[1]-e[3])*i;else{var r=0;e[4]>e[0]&&(r=1),e[8]>e[r*3+r]&&(r=2);var s=(r+1)%3,a=(r+2)%3;i=Math.sqrt(e[r*3+r]-e[s*3+s]-e[a*3+a]+1),n[r]=.5*i,i=.5/i,n[3]=(e[s*3+a]-e[a*3+s])*i,n[s]=(e[s*3+r]+e[r*3+s])*i,n[a]=(e[a*3+r]+e[r*3+a])*i}return n}var Va=fp,Uo=hp,xu=dp,oo=pp;(function(){var n=pn(),e=An(1,0,0),t=An(0,1,0);return function(i,r,s){var a=op(r,s);return a<-.999999?(Do(n,e,r),cp(n)<1e-6&&Do(n,t,r),$h(n,n),Zh(i,n,Math.PI),i):a>.999999?(i[0]=0,i[1]=0,i[2]=0,i[3]=1,i):(Do(n,r,s),i[0]=n[0],i[1]=n[1],i[2]=n[2],i[3]=1+a,oo(i,i))}})();(function(){var n=Rn(),e=Rn();return function(t,i,r,s,a,o){return ys(n,i,a,o),ys(e,r,s,o),ys(t,n,e,2*o*(1-o)),t}})();(function(){var n=ep();return function(e,t,i,r){return n[0]=i[0],n[3]=i[1],n[6]=i[2],n[1]=r[0],n[4]=r[1],n[7]=r[2],n[2]=-t[0],n[5]=-t[1],n[8]=-t[2],oo(e,vp(e,n))}})();const Pt=Symbol("@immersive-web-emulation-runtime/xr-space");class qt extends EventTarget{constructor(e,t){super(),this[Pt]={parentSpace:e,offsetMatrix:t?tp(t):en(),emulated:!0}}}class _p extends qt{constructor(){super(void 0,en())}}class Ha{static updateOffsetPosition(e,t){const i=e[Pt].offsetMatrix;ws(i,t)}static updateOffsetQuaternion(e,t){const i=e[Pt].offsetMatrix,r=pn();As(r,i),Ns(i,t,r)}static updateOffsetMatrix(e,t){const i=e[Pt].offsetMatrix;qh(i,t)}static calculateGlobalOffsetMatrix(e,t=en()){const i=e[Pt].parentSpace?Ha.calculateGlobalOffsetMatrix(e[Pt].parentSpace):en();return Yh(t,i,e[Pt].offsetMatrix),t}}let Zi=class Kh{constructor(e=0,t=0,i=0){this.vec3=An(e,t,i),this.tempVec3=pn()}get x(){return this.vec3[0]}set x(e){this.vec3[0]=e}get y(){return this.vec3[1]}set y(e){this.vec3[1]=e}get z(){return this.vec3[2]}set z(e){this.vec3[2]=e}set(e,t,i){return sp(this.vec3,e,t,i),this}clone(){return new Kh(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}normalize(){return Io(this.tempVec3,this.vec3),$h(this.vec3,this.tempVec3),this}add(e){return Io(this.tempVec3,this.vec3),ap(this.vec3,this.tempVec3,e.vec3),this}applyQuaternion(e){return Io(this.tempVec3,this.vec3),lp(this.vec3,this.tempVec3,e.quat),this}},Ms=class Qh{constructor(e=0,t=0,i=0,r=1){this.quat=Va(e,t,i,r),this.tempQuat=Rn()}get x(){return this.quat[0]}set x(e){this.quat[0]=e}get y(){return this.quat[1]}set y(e){this.quat[1]=e}get z(){return this.quat[2]}set z(e){this.quat[2]=e}get w(){return this.quat[3]}set w(e){this.quat[3]=e}set(e,t,i,r){return xu(this.quat,e,t,i,r),this}clone(){return new Qh(this.x,this.y,this.z,this.w)}copy(e){return xu(this.quat,e.x,e.y,e.z,e.w),this}normalize(){return Uo(this.tempQuat,this.quat),oo(this.quat,this.tempQuat),this}invert(){return Uo(this.tempQuat,this.quat),gp(this.quat,this.tempQuat),this}multiply(e){return Uo(this.tempQuat,this.quat),mp(this.quat,this.tempQuat,e.quat),this}setFromAxisAngle(e,t){return Zh(this.quat,e.vec3,t),this}};const Me=Symbol("@immersive-web-emulation-runtime/gamepad");var Ts;(function(n){n.None="",n.Standard="standard",n.XRStandard="xr-standard"})(Ts||(Ts={}));class Jh{constructor(e,t){this[Me]={type:e,eventTrigger:t,pressed:!1,touched:!1,value:0,lastFrameValue:0,pendingValue:null}}get pressed(){return this[Me].type==="manual"?this[Me].pressed:this[Me].value>0}get touched(){return this[Me].type==="manual"?this[Me].touched:this[Me].touched||this.pressed}get value(){return this[Me].value}}class xp{constructor(){this.pressed=!1,this.touched=!1,this.value=0}}class Pc{constructor(e,t="",i=-1){this[Me]={id:t,index:i,connected:!1,timestamp:performance.now(),mapping:e.mapping,buttonsMap:{},buttonsSequence:[],axesMap:{},axesSequence:[],hapticActuators:[]},e.buttons.forEach(r=>{var s;r===null?this[Me].buttonsSequence.push(null):(this[Me].buttonsSequence.push(r.id),this[Me].buttonsMap[r.id]=new Jh(r.type,(s=r.eventTrigger)!==null&&s!==void 0?s:null))}),e.axes.forEach(r=>{r===null?this[Me].axesSequence.push(null):(this[Me].axesSequence.push(r.id+r.type),this[Me].axesMap[r.id]||(this[Me].axesMap[r.id]={x:0,y:0}))})}get id(){return this[Me].id}get index(){return this[Me].index}get connected(){return this[Me].connected}get timestamp(){return this[Me].timestamp}get mapping(){return this[Me].mapping}get axes(){const e=[];return this[Me].axesSequence.forEach(t=>{if(t===null)e.push(null);else{const i=t.substring(0,t.length-6),r=t.substring(t.length-6);e.push(r==="y-axis"?this[Me].axesMap[i].y:this[Me].axesMap[i].x)}}),e}get buttons(){return this[Me].buttonsSequence.map(e=>e===null?new xp:this[Me].buttonsMap[e])}get hapticActuators(){return this[Me].hapticActuators}get vibrationActuator(){return null}}var fn;(function(n){n.None="none",n.Left="left",n.Right="right"})(fn||(fn={}));var Ga;(function(n){n.Gaze="gaze",n.TrackedPointer="tracked-pointer",n.Screen="screen",n.TransientPointer="transient-pointer"})(Ga||(Ga={}));class yp extends Array{}const oi=Symbol("@immersive-web-emulation-runtime/xr-input-source");class lo{constructor(e,t,i,r,s,a,o){this[oi]={handedness:e,targetRayMode:t,targetRaySpace:r,gripSpace:a,profiles:i,gamepad:s,hand:o}}get handedness(){return this[oi].handedness}get targetRayMode(){return this[oi].targetRayMode}get targetRaySpace(){return this[oi].targetRaySpace}get gripSpace(){return this[oi].gripSpace}get profiles(){return this[oi].profiles}get gamepad(){return this[oi].gamepad}get hand(){return this[oi].hand}}class wa extends Event{constructor(e,t){if(super(e,t),!t.frame)throw new Error("XRInputSourceEventInit.frame is required");if(!t.inputSource)throw new Error("XRInputSourceEventInit.inputSource is required");this.frame=t.frame,this.inputSource=t.inputSource}}const vt=Symbol("@immersive-web-emulation-runtime/xr-tracked-input"),yu={[fn.Left]:{position:new Zi(-.25,1.5,-.4),quaternion:new Ms},[fn.Right]:{position:new Zi(.25,1.5,-.4),quaternion:new Ms},[fn.None]:{position:new Zi(.25,1.5,-.4),quaternion:new Ms}};class ed{constructor(e){this[vt]={inputSource:e,position:yu[e.handedness].position.clone(),quaternion:yu[e.handedness].quaternion.clone(),connected:!0,lastFrameConnected:!1,inputSourceChanged:!0}}get position(){return this[vt].position}get quaternion(){return this[vt].quaternion}get inputSource(){return this[vt].inputSource}get connected(){return this[vt].connected}set connected(e){this[vt].connected=e,this[vt].inputSource.gamepad[Me].connected=e}onFrameStart(e){const t=this[vt].inputSource.targetRaySpace;Ns(t[Pt].offsetMatrix,this[vt].quaternion.quat,this[vt].position.vec3);const i=e.session;this[vt].inputSource.gamepad.buttons.forEach(r=>{r instanceof Jh&&(r[Me].lastFrameValue=r[Me].value,r[Me].pendingValue!=null&&(r[Me].value=r[Me].pendingValue,r[Me].pendingValue=null),r[Me].eventTrigger!=null&&(r[Me].lastFrameValue===0&&r[Me].value>0?(i.dispatchEvent(new wa(r[Me].eventTrigger,{frame:e,inputSource:this[vt].inputSource})),i.dispatchEvent(new wa(r[Me].eventTrigger+"start",{frame:e,inputSource:this[vt].inputSource}))):r[Me].lastFrameValue>0&&r[Me].value===0&&i.dispatchEvent(new wa(r[Me].eventTrigger+"end",{frame:e,inputSource:this[vt].inputSource}))))}),this[vt].inputSourceChanged=this.connected!==this[vt].lastFrameConnected,this[vt].lastFrameConnected=this.connected}}const Mu=Symbol("@immersive-web-emulation-runtime/xr-controller");class Mp extends ed{constructor(e,t,i){if(!e.layout[t])throw new DOMException("Handedness not supported","InvalidStateError");const r=new qt(i),s=e.layout[t].gripOffsetMatrix?new qt(r,e.layout[t].gripOffsetMatrix):void 0,a=[e.profileId,...e.fallbackProfileIds],o=new lo(t,Ga.TrackedPointer,a,r,new Pc(e.layout[t].gamepad),s);super(o),this[Mu]={gamepadConfig:e.layout[t].gamepad}}get gamepadConfig(){return this[Mu].gamepadConfig}updateButtonValue(e,t){if(t>1||t<0){console.warn(`Out-of-range value ${t} provided for button ${e}.`);return}const i=this[vt].inputSource.gamepad[Me].buttonsMap[e];if(i){if(i[Me].type==="binary"&&t!=1&&t!=0){console.warn(`Non-binary value ${t} provided for binary button ${e}.`);return}i[Me].pendingValue=t}else console.warn(`Current controller does not have button ${e}.`)}updateButtonTouch(e,t){const i=this[vt].inputSource.gamepad[Me].buttonsMap[e];i?i[Me].touched=t:console.warn(`Current controller does not have button ${e}.`)}updateAxis(e,t,i){if(i>1||i<-1){console.warn(`Out-of-range value ${i} provided for ${e} axes.`);return}const r=this[vt].inputSource.gamepad[Me].axesMap[e];r?t==="x-axis"?r.x=i:t==="y-axis"&&(r.y=i):console.warn(`Current controller does not have ${e} axes.`)}updateAxes(e,t,i){if(t>1||t<-1||i>1||i<-1){console.warn(`Out-of-range value x:${t}, y:${i} provided for ${e} axes.`);return}const r=this[vt].inputSource.gamepad[Me].axesMap[e];r?(r.x=t,r.y=i):console.warn(`Current controller does not have ${e} axes.`)}}const zi=Symbol("@immersive-web-emulation-runtime/xr-view");var ft;(function(n){n.None="none",n.Left="left",n.Right="right"})(ft||(ft={}));class td{constructor(e,t,i,r){this[zi]={eye:e,projectionMatrix:t,transform:i,recommendedViewportScale:null,requestedViewportScale:1,session:r}}get eye(){return this[zi].eye}get projectionMatrix(){return this[zi].projectionMatrix}get transform(){return this[zi].transform}get recommendedViewportScale(){return this[zi].recommendedViewportScale}requestViewportScale(e){if(e===null||e<=0||e>1){console.warn("Invalid scale value. Scale must be > 0 and <= 1.");return}this[zi].requestedViewportScale=e}}const Ki=Symbol("@immersive-web-emulation-runtime/xr-joint-space");class Lc extends qt{constructor(e,t,i){super(t,i),this[Ki]={jointName:e,radius:0}}get jointName(){return this[Ki].jointName}}const ns=Symbol("@immersive-web-emulation-runtime/xr-pose");class co{constructor(e,t=!1,i=void 0,r=void 0){this[ns]={transform:e,emulatedPosition:t,linearVelocity:i,angularVelocity:r}}get transform(){return this[ns].transform}get emulatedPosition(){return this[ns].emulatedPosition}get linearVelocity(){return this[ns].linearVelocity}get angularVelocity(){return this[ns].angularVelocity}}const Su=Symbol("@immersive-web-emulation-runtime/xr-joint-pose");class nd extends co{constructor(e,t,i=!1,r=void 0,s=void 0){super(e,i,r,s),this[Su]={radius:t}}get radius(){return this[Su].radius}}class Wa{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r,Object.freeze(this)}static fromPoint(e){return new Wa(e.x,e.y,e.z,e.w)}matrixTransform(e){return new Wa}toJSON(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const js=typeof globalThis.DOMPointReadOnly<"u"?globalThis.DOMPointReadOnly:Wa,on=Symbol("@immersive-web-emulation-runtime/xr-rigid-transform");class uo{constructor(e,t){const i=An(0,0,0),r=Rn();this[on]={matrix:en(),position:e?An(e.x,e.y,e.z):i,orientation:t?oo(Rn(),Va(t.x,t.y,t.z,t.w)):r,inverse:null},this.updateMatrix()}updateMatrix(){Ns(this[on].matrix,this[on].orientation,this[on].position)}get matrix(){return this[on].matrix}get position(){const e=this[on].position;return new js(e[0],e[1],e[2],1)}get orientation(){const e=this[on].orientation;return new js(e[0],e[1],e[2],e[3])}get inverse(){if(!this[on].inverse){const e=en();if(!jh(e,this[on].matrix))throw new Error("Matrix is not invertible.");let t=pn();As(t,e);let i=Rn();Ba(i,e),this[on].inverse=new uo(new js(t[0],t[1],t[2],1),new js(i[0],i[1],i[2],i[3])),this[on].inverse[on].inverse=this}return this[on].inverse}}const Eu=Symbol("@immersive-web-emulation-runtime/xr-viewer-pose");class id extends co{constructor(e,t,i=!1,r=void 0,s=void 0){super(e,i,r,s),this[Eu]={views:Object.freeze(t)}}get views(){return this[Eu].views}}const Kt=Symbol("@immersive-web-emulation-runtime/xr-frame"),bu=en(),wu=en(),Au=en(),Tu=(n,e,t)=>{Ha.calculateGlobalOffsetMatrix(e,bu),Ha.calculateGlobalOffsetMatrix(t,wu),jh(Au,wu),Yh(n,Au,bu)};class rd{constructor(e,t,i,r,s){this[Kt]={session:e,id:t,active:i,animationFrame:r,predictedDisplayTime:s,tempMat4:en()}}get session(){return this[Kt].session}get predictedDisplayTime(){return this[Kt].predictedDisplayTime}getPose(e,t){if(!this[Kt].active)throw new DOMException("XRFrame access outside the callback that produced it is invalid.","InvalidStateError");Tu(this[Kt].tempMat4,e,t);const i=pn();As(i,this[Kt].tempMat4);const r=Rn();return Ba(r,this[Kt].tempMat4),new co(new uo({x:i[0],y:i[1],z:i[2],w:1},{x:r[0],y:r[1],z:r[2],w:r[3]}),e[Pt].emulated)}getViewerPose(e){if(!this[Kt].animationFrame)throw new DOMException("getViewerPose can only be called on XRFrame objects passed to XRSession.requestAnimationFrame callbacks.","InvalidStateError");const t=this[Kt].session,i=t[q].device,r=this.getPose(i.viewerSpace,e),s=t[q].mode===st.Inline?[ft.None]:[ft.Left,ft.Right],a=[];return s.forEach(o=>{const l=i.viewSpaces[o],c=this.getPose(l,e),u=t[q].getProjectionMatrix(o),p=new td(o,new Float32Array(u),c.transform,t);a.push(p)}),new id(r.transform,a,!1)}getJointPose(e,t){const i=this.getPose(e,t),r=e[Ki].radius;return new nd(i.transform,r,!1)}fillJointRadii(e,t){if(e=Array.from(e),!this[Kt].active)throw new DOMException("XRFrame access outside the callback that produced it is invalid.","InvalidStateError");if(e.length>t.length)throw new DOMException("The length of jointSpaces is larger than the number of elements in radii","TypeError");let i=!0;for(let r=0;r<e.length;r++)e[r][Ki].radius?t[r]=e[r][Ki].radius:(t[r]=NaN,i=!1);return i}fillPoses(e,t,i){if(e=Array.from(e),!this[Kt].active)throw new DOMException("XRFrame access outside the callback that produced it is invalid.","InvalidStateError");if(e.length*16>i.length)throw new DOMException("The length of spaces multiplied by 16 is larger than the number of elements in transforms","TypeError");return e.forEach((r,s)=>{Tu(this[Kt].tempMat4,r,t);for(let a=0;a<16;a++)i[s*16+a]=this[Kt].tempMat4[a]}),!0}}class sd extends Event{constructor(e,t){if(super(e,t),!t.session)throw new Error("XRInputSourcesChangeEventInit.session is required");if(!t.added)throw new Error("XRInputSourcesChangeEventInit.added is required");if(!t.removed)throw new Error("XRInputSourcesChangeEventInit.removed is required");this.session=t.session,this.added=t.added,this.removed=t.removed}}var ad;const yi=Symbol("@immersive-web-emulation-runtime/xr-reference-space");var Ut;(function(n){n.Viewer="viewer",n.Local="local",n.LocalFloor="local-floor",n.BoundedFloor="bounded-floor",n.Unbounded="unbounded"})(Ut||(Ut={}));class ir extends qt{constructor(e,t,i){super(t,i),this[ad]={type:null,onreset:()=>{}},this[yi].type=e}get onreset(){var e;return(e=this[yi].onreset)!==null&&e!==void 0?e:()=>{}}set onreset(e){this[yi].onreset&&this.removeEventListener("reset",this[yi].onreset),this[yi].onreset=e,e&&this.addEventListener("reset",e)}getOffsetReferenceSpace(e){return new ir(this[yi].type,this,e)}}ad=yi;const is=Symbol("@immersive-web-emulation-runtime/xr-render-state");class bl{constructor(e={},t){this[is]={depthNear:e.depthNear||(t==null?void 0:t.depthNear)||.1,depthFar:e.depthFar||(t==null?void 0:t.depthFar)||1e3,inlineVerticalFieldOfView:e.inlineVerticalFieldOfView||(t==null?void 0:t.inlineVerticalFieldOfView)||null,baseLayer:e.baseLayer||(t==null?void 0:t.baseLayer)||null}}get depthNear(){return this[is].depthNear}get depthFar(){return this[is].depthFar}get inlineVerticalFieldOfView(){return this[is].inlineVerticalFieldOfView}get baseLayer(){return this[is].baseLayer}}class Xa extends Event{constructor(e,t){if(super(e,t),!t.session)throw new Error("XRSessionEventInit.session is required");this.session=t.session}}class od extends EventTarget{}const vi=Symbol("@immersive-web-emulation-runtime/XRWebGLLayer"),Sp={antialias:!0,depth:!0,stencil:!1,alpha:!0,ignoreDepthValues:!1,framebufferScaleFactor:1};let Ep=class extends od{constructor(e,t,i={}){if(super(),e[q].ended)throw new DOMException("Session has ended","InvalidStateError");const r={...Sp,...i};this[vi]={session:e,context:t,antialias:r.antialias}}get context(){return this[vi].context}get antialias(){return this[vi].antialias}get ignoreDepthValues(){return!0}get framebuffer(){return null}get framebufferWidth(){return this[vi].context.drawingBufferWidth}get framebufferHeight(){return this[vi].context.drawingBufferHeight}getViewport(e){if(e[zi].session!==this[vi].session)throw new DOMException("View's session differs from Layer's session","InvalidStateError");return this[vi].session[q].device[se].getViewport(this,e)}static getNativeFramebufferScaleFactor(e){if(!(e instanceof Ic))throw new TypeError("getNativeFramebufferScaleFactor must be passed a session.");return e[q].ended?0:1}};var Tr;(function(n){n.Visible="visible",n.VisibleBlurred="visible-blurred",n.Hidden="hidden"})(Tr||(Tr={}));var st;(function(n){n.Inline="inline",n.ImmersiveVR="immersive-vr",n.ImmersiveAR="immersive-ar"})(st||(st={}));var Pn;(function(n){n.Opaque="opaque",n.AlphaBlend="alpha-blend",n.Additive="additive"})(Pn||(Pn={}));var kr;(function(n){n.ScreenSpace="screen-space",n.WorldSpace="world-space"})(kr||(kr={}));const q=Symbol("@immersive-web-emulation-runtime/xr-session");class Ic extends EventTarget{constructor(e,t,i){super(),this[q]={device:e,mode:t,renderState:new bl,pendingRenderState:null,enabledFeatures:i,isSystemKeyboardSupported:!1,ended:!1,projectionMatrices:{[ft.Left]:en(),[ft.Right]:en(),[ft.None]:en()},getProjectionMatrix:r=>this[q].projectionMatrices[r],referenceSpaceIsSupported:r=>{if(!this[q].enabledFeatures.includes(r))return!1;switch(r){case Ut.Viewer:return!0;case Ut.Local:case Ut.LocalFloor:case Ut.BoundedFloor:case Ut.Unbounded:return this[q].mode!=st.Inline}},frameHandle:0,frameCallbacks:[],currentFrameCallbacks:null,onDeviceFrame:()=>{if(this[q].ended)return;this[q].deviceFrameHandle=globalThis.requestAnimationFrame(this[q].onDeviceFrame),this[q].pendingRenderState!=null&&(this[q].renderState=this[q].pendingRenderState,this[q].pendingRenderState=null,this[q].device[se].onBaseLayerSet(this[q].renderState.baseLayer));const r=this[q].renderState.baseLayer;if(r===null)return;const s=r.context,a=s.canvas;if(this[q].mode!=st.Inline){const g=s.getParameter(s.COLOR_CLEAR_VALUE),v=s.getParameter(s.DEPTH_CLEAR_VALUE),h=s.getParameter(s.STENCIL_CLEAR_VALUE);s.clearColor(0,0,0,0),s.clearDepth(1),s.clearStencil(0),s.clear(s.DEPTH_BUFFER_BIT|s.COLOR_BUFFER_BIT|s.STENCIL_BUFFER_BIT),s.clearColor(g[0],g[1],g[2],g[3]),s.clearDepth(v),s.clearStencil(h)}const{depthNear:o,depthFar:l}=this[q].renderState,{width:c,height:u}=a;if(this[q].mode!==st.Inline){const g=c*(this[q].device.stereoEnabled?.5:1)/u;_u(this[q].projectionMatrices[ft.Left],this[q].device.fovy,g,o,l),qh(this[q].projectionMatrices[ft.Right],this[q].projectionMatrices[ft.Left])}else{const g=c/u;_u(this[q].projectionMatrices[ft.None],this[q].renderState.inlineVerticalFieldOfView,g,o,l)}const p=new rd(this,this[q].frameHandle,!0,!0,performance.now());this[q].device[se].onFrameStart(p),this[q].updateActiveInputSources();const d=this[q].currentFrameCallbacks=this[q].frameCallbacks;this[q].frameCallbacks=[];const m=performance.now();for(let g=0;g<d.length;g++)try{d[g].cancelled||d[g].callback(m,p)}catch(v){console.error(v)}this[q].currentFrameCallbacks=null,p[Kt].active=!1},nominalFrameRate:e.internalNominalFrameRate,referenceSpaces:[],inputSourceArray:[],activeInputSources:[],updateActiveInputSources:()=>{const r=this[q].enabledFeatures.includes(Ue.HandTracking),s=this[q].activeInputSources,a=this[q].device.inputSources.filter(c=>!c.hand||r),o=a.filter(c=>!s.includes(c)),l=s.filter(c=>!a.includes(c));this[q].activeInputSources=a,(o.length>0||l.length>0)&&this.dispatchEvent(new sd("inputsourceschange",{session:this,added:o,removed:l}))},onend:null,oninputsourceschange:null,onselect:null,onselectstart:null,onselectend:null,onsqueeze:null,onsqueezestart:null,onsqueezeend:null,onvisibilitychange:null,onframeratechange:null},this[q].onDeviceFrame()}get visibilityState(){return this[q].device.visibilityState}get frameRate(){return this[q].nominalFrameRate}get supportedFrameRates(){return new Float32Array(this[q].device.supportedFrameRates)}get renderState(){return this[q].renderState}get inputSources(){return this[q].inputSourceArray.length=0,!this[q].ended&&this[q].mode!==st.Inline&&this[q].inputSourceArray.push(...this[q].activeInputSources),this[q].inputSourceArray}get enabledFeatures(){return this[q].enabledFeatures}get isSystemKeyboardSupported(){return this[q].isSystemKeyboardSupported}get environmentBlendMode(){var e;return(e=this[q].device[se].environmentBlendModes[this[q].mode])!==null&&e!==void 0?e:Pn.Opaque}get interactionMode(){return this[q].device[se].interactionMode}updateRenderState(e={}){var t,i,r,s;if(this[q].ended)throw new DOMException("XRSession has already ended.","InvalidStateError");if(e.baseLayer&&e.baseLayer[vi].session!==this)throw new DOMException("Base layer was created by a different XRSession","InvalidStateError");if(e.inlineVerticalFieldOfView!=null&&this[q].mode!==st.Inline)throw new DOMException("InlineVerticalFieldOfView must not be set for an immersive session","InvalidStateError");const a={baseLayer:e.baseLayer||((t=this[q].pendingRenderState)===null||t===void 0?void 0:t.baseLayer)||void 0,depthFar:e.depthFar||((i=this[q].pendingRenderState)===null||i===void 0?void 0:i.depthFar)||void 0,depthNear:e.depthNear||((r=this[q].pendingRenderState)===null||r===void 0?void 0:r.depthNear)||void 0,inlineVerticalFieldOfView:e.inlineVerticalFieldOfView||((s=this[q].pendingRenderState)===null||s===void 0?void 0:s.inlineVerticalFieldOfView)||void 0};this[q].pendingRenderState=new bl(a,this[q].renderState)}async updateTargetFrameRate(e){return new Promise((t,i)=>{this[q].ended?i(new DOMException("XRSession has already ended.","InvalidStateError")):this[q].device.supportedFrameRates.includes(e)?(this[q].nominalFrameRate===e?console.log("Requested frame rate is the same as the current nominal frame rate, no update made"):(this[q].nominalFrameRate=e,this.dispatchEvent(new Xa("frameratechange",{session:this})),console.log(`Nominal frame rate updated to ${e}`)),t()):i(new DOMException("Requested frame rate not supported.","InvalidStateError"))})}async requestReferenceSpace(e){return new Promise((t,i)=>{if(this[q].ended||!this[q].referenceSpaceIsSupported(e)){i(new DOMException("The requested reference space type is not supported.","NotSupportedError"));return}let r;switch(e){case Ut.Viewer:r=this[q].device.viewerSpace;break;case Ut.Local:r=new ir(e,this[q].device[se].globalSpace,this[q].device.viewerSpace[Pt].offsetMatrix);break;case Ut.LocalFloor:case Ut.BoundedFloor:case Ut.Unbounded:r=new ir(e,this[q].device[se].globalSpace);break}this[q].referenceSpaces.push(r),t(r)})}requestAnimationFrame(e){if(this[q].ended)return 0;const t=++this[q].frameHandle;return this[q].frameCallbacks.push({handle:t,callback:e,cancelled:!1}),t}cancelAnimationFrame(e){let t=this[q].frameCallbacks,i=t.findIndex(r=>r&&r.handle===e);i>-1&&(t[i].cancelled=!0,t.splice(i,1)),t=this[q].currentFrameCallbacks,t&&(i=t.findIndex(r=>r&&r.handle===e),i>-1&&(t[i].cancelled=!0))}async end(){return new Promise((e,t)=>{this[q].ended||this[q].deviceFrameHandle===null?t(new DOMException("XRSession has already ended.","InvalidStateError")):(globalThis.cancelAnimationFrame(this[q].deviceFrameHandle),this[q].device[se].onSessionEnd(),this.dispatchEvent(new Xa("end",{session:this})),e())})}get onend(){var e;return(e=this[q].onend)!==null&&e!==void 0?e:()=>{}}set onend(e){this[q].onend&&this.removeEventListener("end",this[q].onend),this[q].onend=e,e&&this.addEventListener("end",e)}get oninputsourceschange(){var e;return(e=this[q].oninputsourceschange)!==null&&e!==void 0?e:()=>{}}set oninputsourceschange(e){this[q].oninputsourceschange&&this.removeEventListener("inputsourceschange",this[q].oninputsourceschange),this[q].oninputsourceschange=e,e&&this.addEventListener("inputsourceschange",e)}get onselect(){var e;return(e=this[q].onselect)!==null&&e!==void 0?e:()=>{}}set onselect(e){this[q].onselect&&this.removeEventListener("select",this[q].onselect),this[q].onselect=e,e&&this.addEventListener("select",e)}get onselectstart(){var e;return(e=this[q].onselectstart)!==null&&e!==void 0?e:()=>{}}set onselectstart(e){this[q].onselectstart&&this.removeEventListener("selectstart",this[q].onselectstart),this[q].onselectstart=e,e&&this.addEventListener("selectstart",e)}get onselectend(){var e;return(e=this[q].onselectend)!==null&&e!==void 0?e:()=>{}}set onselectend(e){this[q].onselectend&&this.removeEventListener("selectend",this[q].onselectend),this[q].onselectend=e,e&&this.addEventListener("selectend",e)}get onsqueeze(){var e;return(e=this[q].onsqueeze)!==null&&e!==void 0?e:()=>{}}set onsqueeze(e){this[q].onsqueeze&&this.removeEventListener("squeeze",this[q].onsqueeze),this[q].onsqueeze=e,e&&this.addEventListener("squeeze",e)}get onsqueezestart(){var e;return(e=this[q].onsqueezestart)!==null&&e!==void 0?e:()=>{}}set onsqueezestart(e){this[q].onsqueezestart&&this.removeEventListener("squeezestart",this[q].onsqueezestart),this[q].onsqueezestart=e,e&&this.addEventListener("squeezestart",e)}get onsqueezeend(){var e;return(e=this[q].onsqueezeend)!==null&&e!==void 0?e:()=>{}}set onsqueezeend(e){this[q].onsqueezeend&&this.removeEventListener("squeezeend",this[q].onsqueezeend),this[q].onsqueezeend=e,e&&this.addEventListener("squeezeend",e)}get onvisibilitychange(){var e;return(e=this[q].onvisibilitychange)!==null&&e!==void 0?e:()=>{}}set onvisibilitychange(e){this[q].onvisibilitychange&&this.removeEventListener("visibilitychange",this[q].onvisibilitychange),this[q].onvisibilitychange=e,e&&this.addEventListener("visibilitychange",e)}get onframeratechange(){var e;return(e=this[q].onframeratechange)!==null&&e!==void 0?e:()=>{}}set onframeratechange(e){this[q].onframeratechange&&this.removeEventListener("frameratechange",this[q].onframeratechange),this[q].onframeratechange=e,e&&this.addEventListener("frameratechange",e)}}var Rs;(function(n){n.Wrist="wrist",n.ThumbMetacarpal="thumb-metacarpal",n.ThumbPhalanxProximal="thumb-phalanx-proximal",n.ThumbPhalanxDistal="thumb-phalanx-distal",n.ThumbTip="thumb-tip",n.IndexFingerMetacarpal="index-finger-metacarpal",n.IndexFingerPhalanxProximal="index-finger-phalanx-proximal",n.IndexFingerPhalanxIntermediate="index-finger-phalanx-intermediate",n.IndexFingerPhalanxDistal="index-finger-phalanx-distal",n.IndexFingerTip="index-finger-tip",n.MiddleFingerMetacarpal="middle-finger-metacarpal",n.MiddleFingerPhalanxProximal="middle-finger-phalanx-proximal",n.MiddleFingerPhalanxIntermediate="middle-finger-phalanx-intermediate",n.MiddleFingerPhalanxDistal="middle-finger-phalanx-distal",n.MiddleFingerTip="middle-finger-tip",n.RingFingerMetacarpal="ring-finger-metacarpal",n.RingFingerPhalanxProximal="ring-finger-phalanx-proximal",n.RingFingerPhalanxIntermediate="ring-finger-phalanx-intermediate",n.RingFingerPhalanxDistal="ring-finger-phalanx-distal",n.RingFingerTip="ring-finger-tip",n.PinkyFingerMetacarpal="pinky-finger-metacarpal",n.PinkyFingerPhalanxProximal="pinky-finger-phalanx-proximal",n.PinkyFingerPhalanxIntermediate="pinky-finger-phalanx-intermediate",n.PinkyFingerPhalanxDistal="pinky-finger-phalanx-distal",n.PinkyFingerTip="pinky-finger-tip"})(Rs||(Rs={}));class Dc extends Map{}const bp={jointTransforms:{wrist:{offsetMatrix:[.9060805439949036,-.1844543218612671,.3807799518108368,0,-.08027800172567368,.8086723685264587,.5827555656433105,0,-.4154181182384491,-.5585917234420776,.7179155349731445,0,-.06867414712905884,-.009423808194696903,.10627774149179459,1],radius:.021460847929120064},"thumb-metacarpal":{offsetMatrix:[-.5012241005897522,-.8650535345077515,-.0213695727288723,0,.7415963411331177,-.4421543478965759,.5045139193534851,0,-.44587990641593933,.23702676594257355,.8631392121315002,0,-.032122574746608734,-.01196830440312624,.07194234430789948,1],radius:.019382517784833908},"thumb-phalanx-proximal":{offsetMatrix:[-.3175753057003021,-.9460570216178894,-.06419729441404343,0,.8958902955055237,-.32153913378715515,.30658137798309326,0,-.3106854259967804,.03984907269477844,.9496771097183228,0,-.017625702545046806,-.01967475935816765,.04387917369604111,1],radius:.01228295173496008},"thumb-phalanx-distal":{offsetMatrix:[-.4944636821746826,-.8691971898078918,.001086252392269671,0,.8307800889015198,-.4722411036491394,.2946045398712158,0,-.25555649399757385,.14657381176948547,.9556186199188232,0,-.007126678712666035,-.021021386608481407,.011786630377173424,1],radius:.009768804535269737},"thumb-tip":{offsetMatrix:[-.4944636821746826,-.8691971898078918,.001086252392269671,0,.8307800889015198,-.4722411036491394,.2946045398712158,0,-.25555649399757385,.14657381176948547,.9556186199188232,0,.0003423091256991029,-.024528030306100845,-.011410919018089771,1],radius:.008768804371356964},"index-finger-metacarpal":{offsetMatrix:[.9060805439949036,-.1844543218612671,.3807799518108368,0,-.08027800172567368,.8086723685264587,.5827555656433105,0,-.4154181182384491,-.5585917234420776,.7179155349731445,0,-.038037415593862534,-.0020236473064869642,.07626739144325256,1],radius:.021228281781077385},"index-finger-phalanx-proximal":{offsetMatrix:[.7986818552017212,-.35985732078552246,.48229536414146423,0,.538311243057251,.7854709625244141,-.30537736415863037,0,-.2689369022846222,.5035246014595032,.8210577368736267,0,-.006869405973702669,.033938243985176086,.04206443578004837,1],radius:.010295259766280651},"index-finger-phalanx-intermediate":{offsetMatrix:[.8285930156707764,-.32672837376594543,.4546217918395996,0,.5577570199966431,.4116027057170868,-.7207564115524292,0,.04836784675717354,.8507823944091797,.5232869386672974,0,.0033306588884443045,.014840902760624886,.010923954658210278,1],radius:.00853810179978609},"index-finger-phalanx-distal":{offsetMatrix:[.8412464261054993,-.35794928669929504,.4051857888698578,0,.5139996409416199,.29711154103279114,-.8046918511390686,0,.16765329241752625,.8852096796035767,.4339304566383362,0,.0021551470272243023,-.0058362227864563465,-.0017938464879989624,1],radius:.007636196445673704},"index-finger-tip":{offsetMatrix:[.8412464261054993,-.35794928669929504,.4051857888698578,0,.5139996409416199,.29711154103279114,-.8046918511390686,0,.16765329241752625,.8852096796035767,.4339304566383362,0,-.00131594471167773,-.025222131982445717,-.012442642822861671,1],radius:.006636196281760931},"middle-finger-metacarpal":{offsetMatrix:[.9060805439949036,-.1844543218612671,.3807799518108368,0,-.08027800172567368,.8086723685264587,.5827555656433105,0,-.4154181182384491,-.5585917234420776,.7179155349731445,0,-.05395089089870453,.003063359996303916,.07402937114238739,1],radius:.021231964230537415},"middle-finger-phalanx-proximal":{offsetMatrix:[.9187911748886108,-.1530158370733261,.36387869715690613,0,.038666240870952606,.9522662162780762,.302808940410614,0,-.3928440511226654,-.26414817571640015,.8808513283729553,0,-.02717282809317112,.04162866622209549,.03678669035434723,1],radius:.01117393933236599},"middle-finger-phalanx-intermediate":{offsetMatrix:[.9228746294975281,-.12856416404247284,.36300456523895264,0,.14524033665657043,.9892153143882751,-.01890045404434204,0,-.3566599190235138,.07016586512327194,.9315956234931946,0,-.01030921470373869,.05296773463487625,-.0010256498353555799,1],radius:.008030958473682404},"middle-finger-phalanx-distal":{offsetMatrix:[.9325166344642639,-.040404170751571655,.35885775089263916,0,.06836572289466858,.995502769947052,-.0655682161450386,0,-.3545948565006256,.08567725121974945,.9310863614082336,0,-.0004833847051486373,.05103470757603645,-.026690717786550522,1],radius:.007629410829395056},"middle-finger-tip":{offsetMatrix:[.9325166344642639,-.040404170751571655,.35885775089263916,0,.06836572289466858,.995502769947052,-.0655682161450386,0,-.3545948565006256,.08567725121974945,.9310863614082336,0,.008158999495208263,.05004044249653816,-.050120558589696884,1],radius:.006629410665482283},"ring-finger-metacarpal":{offsetMatrix:[.9060805439949036,-.1844543218612671,.3807799518108368,0,-.08027800172567368,.8086723685264587,.5827555656433105,0,-.4154181182384491,-.5585917234420776,.7179155349731445,0,-.06732909381389618,.007902119308710098,.07209732383489609,1],radius:.019088275730609894},"ring-finger-phalanx-proximal":{offsetMatrix:[.9391821026802063,-.027994679287075996,.34227466583251953,0,-.18282271921634674,.8029410243034363,.5673282742500305,0,-.2907087206840515,-.5954000353813171,.7489906549453735,0,-.047129884362220764,.03806127607822418,.032147664576768875,1],radius:.00992213748395443},"ring-finger-phalanx-intermediate":{offsetMatrix:[.9249380826950073,.03699534013867378,.3783116042613983,0,-.12898847460746765,.9667453765869141,.2208271026611328,0,-.3575615882873535,-.25304901599884033,.8989526629447937,0,-.03579339757561684,.06127955764532089,.002939916681498289,1],radius:.007611672393977642},"ring-finger-phalanx-distal":{offsetMatrix:[.9001164436340332,.03983335196971893,.4338230490684509,0,-.09662467986345291,.9892624020576477,.10964841395616531,0,-.4247973561286926,-.14061418175697327,.8943013548851013,0,-.026291755959391594,.06800390034914017,-.02094830758869648,1],radius:.007231088820844889},"ring-finger-tip":{offsetMatrix:[.9001164436340332,.03983335196971893,.4338230490684509,0,-.09662467986345291,.9892624020576477,.10964841395616531,0,-.4247973561286926,-.14061418175697327,.8943013548851013,0,-.016345610842108727,.07300511747598648,-.04263874143362045,1],radius:.0062310886569321156},"pinky-finger-metacarpal":{offsetMatrix:[.8769711852073669,.31462907791137695,.36322021484375,0,-.4506046175956726,.801031768321991,.39408499002456665,0,-.16696058213710785,-.5092697143554688,.8442559838294983,0,-.07460174709558487,.0062340241856873035,.06756893545389175,1],radius:.01808827556669712},"pinky-finger-phalanx-proximal":{offsetMatrix:[.9498357176780701,.1553308218717575,.2714462876319885,0,-.3019258379936218,.6817675232887268,.6663586497306824,0,-.08155745267868042,-.7148879170417786,.694466233253479,0,-.06697750836610794,.029482364654541016,.02902858518064022,1],radius:.008483353070914745},"pinky-finger-phalanx-intermediate":{offsetMatrix:[.9214097261428833,.27928245067596436,.2701927423477173,0,-.3670244514942169,.8538867831230164,.36901235580444336,0,-.12765564024448395,-.43917882442474365,.8892839550971985,0,-.06447203457355499,.05144399777054787,.0076942890882492065,1],radius:.0067641944624483585},"pinky-finger-phalanx-distal":{offsetMatrix:[.9038633704185486,.23618005216121674,.3567195236682892,0,-.3532794713973999,.8823202252388,.3109731376171112,0,-.24129553139209747,-.4070987403392792,.8809353709220886,0,-.06187915802001953,.060364335775375366,-.010368337854743004,1],radius:.0064259846694767475},"pinky-finger-tip":{offsetMatrix:[.9038633704185486,.23618005216121674,.3567195236682892,0,-.3532794713973999,.8823202252388,.3109731376171112,0,-.24129553139209747,-.4070987403392792,.8809353709220886,0,-.056796226650476456,.07042007893323898,-.02921444922685623,1],radius:.005425984505563974}},gripOffsetMatrix:[.08027800917625427,-.8086723685264587,-.5827556252479553,0,-.4154181480407715,-.5585916638374329,.7179154753684998,0,-.9060805439949036,.1844543218612671,-.3807799518108368,0,-.038054611533880234,-.002910431008785963,.03720742464065552,1]},wp={jointTransforms:{wrist:{offsetMatrix:[.9340395331382751,-.13936476409435272,.32885703444480896,0,-.005510995630174875,.914999783039093,.40341612696647644,0,-.3571262061595917,-.37861889600753784,.8538784384727478,0,-.05789132043719292,.01670890860259533,.11183350533246994,1],radius:.021460847929120064},"thumb-metacarpal":{offsetMatrix:[.02145560085773468,-.9978390336036682,.0621047280728817,0,.41311800479888916,.06541631370782852,.9083252549171448,0,-.9104245901107788,.006167683284729719,.4136286973953247,0,-.016488194465637207,.012708572670817375,.08862338215112686,1],radius:.019382517784833908},"thumb-phalanx-proximal":{offsetMatrix:[.21270370483398438,-.966137707233429,.14606566727161407,0,.49890995025634766,.2359165996313095,.8339261412620544,0,-.8401462435722351,-.10450579971075058,.5321959853172302,0,.013112368993461132,.012508046813309193,.07517509907484055,1],radius:.01228295173496008},"thumb-phalanx-distal":{offsetMatrix:[.01653280481696129,-.9986647963523865,.048943229019641876,0,.26313456892967224,.051570065319538116,.9633802771568298,0,-.9646173715591431,-.0030490627977997065,.26363563537597656,0,.04150351136922836,.016039609909057617,.05719054117798805,1],radius:.009768804535269737},"thumb-tip":{offsetMatrix:[.01653280481696129,-.9986647963523865,.048943229019641876,0,.26313456892967224,.051570065319538116,.9633802771568298,0,-.9646173715591431,-.0030490627977997065,.26363563537597656,0,.06548332422971725,.01683700829744339,.0516640841960907,1],radius:.008768804371356964},"index-finger-metacarpal":{offsetMatrix:[.9340395331382751,-.13936476409435272,.32885703444480896,0,-.005510995630174875,.914999783039093,.40341612696647644,0,-.3571262061595917,-.37861889600753784,.8538784384727478,0,-.02592567168176174,.019982583820819855,.08479326963424683,1],radius:.021228281781077385},"index-finger-phalanx-proximal":{offsetMatrix:[.9063700437545776,-.21756279468536377,.3621589243412018,0,.0970839336514473,.9415287375450134,.3226419687271118,0,-.41117796301841736,-.2572731077671051,.8744958639144897,0,-.0015709538711234927,.043078210204839706,.034657616168260574,1],radius:.010295259766280651},"index-finger-phalanx-intermediate":{offsetMatrix:[.9159826040267944,-.1651475727558136,.36565208435058594,0,.09755707532167435,.9756820797920227,.1962820291519165,0,-.3891757130622864,-.14411886036396027,.9098196625709534,0,.014023927971720695,.052835866808891296,.0014903299743309617,1],radius:.00853810179978609},"index-finger-phalanx-distal":{offsetMatrix:[.9378057718276978,-.12329639494419098,.3245268166065216,0,.032558172941207886,.9619227051734924,.2713746726512909,0,-.3456292748451233,-.2439306229352951,.9061115384101868,0,.023482320830225945,.05633850023150444,-.020621655508875847,1],radius:.007636196445673704},"index-finger-tip":{offsetMatrix:[.9378057718276978,-.12329639494419098,.3245268166065216,0,.032558172941207886,.9619227051734924,.2713746726512909,0,-.3456292748451233,-.2439306229352951,.9061115384101868,0,.03096788562834263,.06281610578298569,-.040703095495700836,1],radius:.006636196281760931},"middle-finger-metacarpal":{offsetMatrix:[.9340395331382751,-.13936476409435272,.32885703444480896,0,-.005510995630174875,.914999783039093,.40341612696647644,0,-.3571262061595917,-.37861889600753784,.8538784384727478,0,-.04184452444314957,.022474845871329308,.08177298307418823,1],radius:.021231964230537415},"middle-finger-phalanx-proximal":{offsetMatrix:[.9720265865325928,-.08313076198101044,.21966552734375,0,.20477405190467834,.7580050826072693,-.6192700862884521,0,-.11502730846405029,.6469289064407349,.7538246512413025,0,-.022107340395450592,.05035499855875969,.02970452979207039,1],radius:.01117393933236599},"middle-finger-phalanx-intermediate":{offsetMatrix:[.9779140949249268,-.07129573822021484,.19646917283535004,0,.1287083923816681,-.5352076292037964,-.8348574042320251,0,.1646735966205597,.8417060971260071,-.5142109394073486,0,-.017169542610645294,.022584279999136925,-.00265491777099669,1],radius:.008030958473682404},"middle-finger-phalanx-distal":{offsetMatrix:[.9774913787841797,-.19657190144062042,.07661263644695282,0,-.1924918293952942,-.9796126484870911,-.05749811604619026,0,.08635343611240387,.041456472128629684,-.995401918888092,0,-.02170622907578945,-.0006043742760084569,.011511396616697311,1],radius:.007629410829395056},"middle-finger-tip":{offsetMatrix:[.9774913787841797,-.19657190144062042,.07661263644695282,0,-.1924918293952942,-.9796126484870911,-.05749811604619026,0,.08635343611240387,.041456472128629684,-.995401918888092,0,-.02438267692923546,-.0026927536819130182,.03627248480916023,1],radius:.006629410665482283},"ring-finger-metacarpal":{offsetMatrix:[.9340395331382751,-.13936476409435272,.32885703444480896,0,-.005510995630174875,.914999783039093,.40341612696647644,0,-.3571262061595917,-.37861889600753784,.8538784384727478,0,-.05944233387708664,.0264605600386858,.07478221505880356,1],radius:.019088275730609894},"ring-finger-phalanx-proximal":{offsetMatrix:[.9842101335525513,.024470895528793335,.1753024309873581,0,.12200043350458145,.6237703561782837,-.7720272541046143,0,-.12824076414108276,.7812241315841675,.610936164855957,0,-.04249368980526924,.0467497780919075,.027722163125872612,1],radius:.00992213748395443},"ring-finger-phalanx-intermediate":{offsetMatrix:[.9941774606704712,.05949164181947708,.08983955532312393,0,.10504482686519623,-.7208291888237,-.6851072907447815,0,.024001073092222214,.6905553936958313,-.7228817939758301,0,-.0374927744269371,.016285063698887825,.0038980208337306976,1],radius:.007611672393977642},"ring-finger-phalanx-distal":{offsetMatrix:[.9995742440223694,.01638498157262802,.02412819117307663,0,.007813597097992897,-.9474818110466003,.31971633434295654,0,.028100071474909782,-.31939181685447693,-.9472070932388306,0,-.038130562752485275,-.0020653479732573032,.02310742810368538,1],radius:.007231088820844889},"ring-finger-tip":{offsetMatrix:[.9995742440223694,.01638498157262802,.02412819117307663,0,.007813597097992897,-.9474818110466003,.31971633434295654,0,.028100071474909782,-.31939181685447693,-.9472070932388306,0,-.0390593595802784,.004176302347332239,.0466572530567646,1],radius:.0062310886569321156},"pinky-finger-metacarpal":{offsetMatrix:[.9147363901138306,.3458845317363739,.20885537564754486,0,-.3923271894454956,.8839452862739563,.2544005811214447,0,-.09662359952926636,-.3146490156650543,.9442773461341858,0,-.06715242564678192,.024195827543735504,.07137546688318253,1],radius:.01808827556669712},"pinky-finger-phalanx-proximal":{offsetMatrix:[.9613109827041626,.22439135611057281,.15977802872657776,0,.01002211682498455,.5511574745178223,-.8343409299850464,0,-.27528178691864014,.8036624789237976,.5275853276252747,0,-.06273911893367767,.038559623062610626,.028268879279494286,1],radius:.008483353070914745},"pinky-finger-phalanx-intermediate":{offsetMatrix:[.9820972084999084,.18811029195785522,-.00995189044624567,0,.14063723385334015,-.7673450708389282,-.6256227493286133,0,-.12532226741313934,.6130226850509644,-.7800630927085876,0,-.05428232625126839,.013870777562260628,.012061242014169693,1],radius:.0067641944624483585},"pinky-finger-phalanx-distal":{offsetMatrix:[.9744614362716675,.20454788208007812,-.09265263378620148,0,.22429193556308746,-.9065253138542175,.35764020681381226,0,-.010836843401193619,-.3692878782749176,-.9292529225349426,0,-.05173685774207115,.0014194445684552193,.02790539152920246,1],radius:.0064259846694767475},"pinky-finger-tip":{offsetMatrix:[.9744614362716675,.20454788208007812,-.09265263378620148,0,.22429193556308746,-.9065253138542175,.35764020681381226,0,-.010836843401193619,-.3692878782749176,-.9292529225349426,0,-.05098633095622063,.008463085629045963,.048688892275094986,1],radius:.005425984505563974}},gripOffsetMatrix:[.005510995630174875,-.9149997234344482,-.40341615676879883,0,-.3571262061595917,-.37861889600753784,.8538784384727478,0,-.9340395331382751,.13936474919319153,-.32885703444480896,0,-.031803809106349945,.007837686687707901,.04313928261399269,1]},Ap={jointTransforms:{wrist:{offsetMatrix:[.9616971015930176,-.13805118203163147,.2368120402097702,0,.0005348679260350764,.8648636937141418,.5020061135292053,0,-.2741127610206604,-.48265108466148376,.8318111300468445,0,-.04913589730858803,.0021463718730956316,.11701996624469757,1],radius:.021460847929120064},"thumb-metacarpal":{offsetMatrix:[-.07536252588033676,-.9959676265716553,-.04867160692811012,0,.5877083539962769,-.08379616588354111,.8047218918800354,0,-.8055551648139954,.032041035592556,.5916536450386047,0,-.010643752291798592,.0006936835707165301,.08736639469861984,1],radius:.019382517784833908},"thumb-phalanx-proximal":{offsetMatrix:[.1374533325433731,-.9904957413673401,.004982374142855406,0,.5534393787384033,.08097179979085922,.8289443850517273,0,-.8214688897132874,-.11118389666080475,.559309184551239,0,.015547193586826324,-.0003480653394944966,.0681300163269043,1],radius:.01228295173496008},"thumb-phalanx-distal":{offsetMatrix:[-.04659227654337883,-.9974699020385742,-.05369402840733528,0,.6812446117401123,-.07104194164276123,.728600800037384,0,-.7305715084075928,-.002631746232509613,.6828309893608093,0,.04330715537071228,.003409178927540779,.0492292083799839,1],radius:.009768804535269737},"thumb-tip":{offsetMatrix:[-.04659227654337883,-.9974699020385742,-.05369402840733528,0,.6812446117401123,-.07104194164276123,.728600800037384,0,-.7305715084075928,-.002631746232509613,.6828309893608093,0,.062003348022699356,.004069602582603693,.03322213143110275,1],radius:.008768804371356964},"index-finger-metacarpal":{offsetMatrix:[.9616971015930176,-.13805118203163147,.2368120402097702,0,.0005348679260350764,.8648636937141418,.5020061135292053,0,-.2741127610206604,-.48265108466148376,.8318111300468445,0,-.02009812369942665,.008770795539021492,.08660387247800827,1],radius:.021228281781077385},"index-finger-phalanx-proximal":{offsetMatrix:[.9001791477203369,-.2598813474178314,.3494834005832672,0,.06073702871799469,.8695210218429565,.490146666765213,0,-.4312632381916046,-.41999316215515137,.7985095381736755,0,-.00017739279428496957,.03890012577176094,.039073407649993896,1],radius:.010295259766280651},"index-finger-phalanx-intermediate":{offsetMatrix:[.9082008600234985,-.20898112654685974,.36262574791908264,0,.11045389622449875,.9553793668746948,.27395179867744446,0,-.40369608998298645,-.20874978601932526,.8907597661018372,0,.01617925800383091,.05482936650514603,.008788082748651505,1],radius:.00853810179978609},"index-finger-phalanx-distal":{offsetMatrix:[.9309692978858948,-.16783711314201355,.32423174381256104,0,.1080828532576561,.9749603867530823,.1943446695804596,0,-.34873148798942566,-.14588497579097748,.9257990717887878,0,.02599053829908371,.059902746230363846,-.012860597111284733,1],radius:.007636196445673704},"index-finger-tip":{offsetMatrix:[.9309692978858948,-.16783711314201355,.32423174381256104,0,.1080828532576561,.9749603867530823,.1943446695804596,0,-.34873148798942566,-.14588497579097748,.9257990717887878,0,.03362493962049484,.06421422213315964,-.033461250364780426,1],radius:.006636196281760931},"middle-finger-metacarpal":{offsetMatrix:[.9616971015930176,-.13805118203163147,.2368120402097702,0,.0005348679260350764,.8648636937141418,.5020061135292053,0,-.2741127610206604,-.48265108466148376,.8318111300468445,0,-.03627845644950867,.011579737067222595,.08550142496824265,1],radius:.021231964230537415},"middle-finger-phalanx-proximal":{offsetMatrix:[.9876697659492493,-.06786545366048813,.1410750150680542,0,-.015095947310328484,.855663537979126,.5173118710517883,0,-.15582047402858734,-.5130629539489746,.8440889716148376,0,-.021259509027004242,.04587256908416748,.03659208118915558,1],radius:.01117393933236599},"middle-finger-phalanx-intermediate":{offsetMatrix:[.988391637802124,-.04354291781783104,.14555205404758453,0,.008894841186702251,.9729899168014526,.23067504167556763,0,-.15166506171226501,-.22670257091522217,.9620829224586487,0,-.014570588245987892,.06789684295654297,.0003578895702958107,1],radius:.008030958473682404},"middle-finger-phalanx-distal":{offsetMatrix:[.9853697419166565,.044260796159505844,.16458062827587128,0,-.0757969319820404,.9787378311157227,.19059516489505768,0,-.1526455283164978,-.20028135180473328,.9677740931510925,0,-.010392282158136368,.07414241135120392,-.026147106662392616,1],radius:.007629410829395056},"middle-finger-tip":{offsetMatrix:[.9853697419166565,.044260796159505844,.16458062827587128,0,-.0757969319820404,.9787378311157227,.19059516489505768,0,-.1526455283164978,-.20028135180473328,.9677740931510925,0,-.0069718430750072,.08024183660745621,-.05014154314994812,1],radius:.006629410665482283},"ring-finger-metacarpal":{offsetMatrix:[.9616971015930176,-.13805118203163147,.2368120402097702,0,.0005348679260350764,.8648636937141418,.5020061135292053,0,-.2741127610206604,-.48265108466148376,.8318111300468445,0,-.05402477830648422,.015797706320881844,.08152295649051666,1],radius:.019088275730609894},"ring-finger-phalanx-proximal":{offsetMatrix:[.9940828680992126,.05735103040933609,.09224652498960495,0,-.10022822767496109,.8116500377655029,.5754809379577637,0,-.041867565363645554,-.5813214182853699,.8125960826873779,0,-.041623555123806,.04171867296099663,.03582974523305893,1],radius:.00992213748395443},"ring-finger-phalanx-intermediate":{offsetMatrix:[.9843675494194031,.12044742703437805,.12850022315979004,0,-.15629759430885315,.9337108135223389,.3221098482608795,0,-.08118485659360886,-.3371586799621582,.937940776348114,0,-.039990875869989395,.06438793987035751,.004141641780734062,1],radius:.007611672393977642},"ring-finger-phalanx-distal":{offsetMatrix:[.9748351573944092,.11857274919748306,.18877571821212769,0,-.15575434267520905,.9681083559989929,.19623035192489624,0,-.15948788821697235,-.22069483995437622,.9622148275375366,0,-.03783353418111801,.07334739714860916,-.020782606676220894,1],radius:.007231088820844889},"ring-finger-tip":{offsetMatrix:[.9748351573944092,.11857274919748306,.18877571821212769,0,-.15575434267520905,.9681083559989929,.19623035192489624,0,-.15948788821697235,-.22069483995437622,.9622148275375366,0,-.03445569798350334,.0802423357963562,-.04392268508672714,1],radius:.0062310886569321156},"pinky-finger-metacarpal":{offsetMatrix:[.9181402921676636,.35625091195106506,.17350243031978607,0,-.39615097641944885,.8352503180503845,.38134080171585083,0,-.009065053425729275,-.41885748505592346,.9080066680908203,0,-.06191859766840935,.013620133511722088,.07850203663110733,1],radius:.01808827556669712},"pinky-finger-phalanx-proximal":{offsetMatrix:[.9714386463165283,.236698180437088,-.016745081171393394,0,-.18462024629116058,.7982627749443054,.5733163952827454,0,.14906984567642212,-.5538501739501953,.8191629648208618,0,-.061502378433942795,.032741155475378036,.03705105185508728,1],radius:.008483353070914745},"pinky-finger-phalanx-intermediate":{offsetMatrix:[.9337416291236877,.35620439052581787,-.03527557849884033,0,-.33203884959220886,.8987522721290588,.28634607791900635,0,.13370157778263092,-.2556603252887726,.9574766755104065,0,-.06608185172080994,.049755651503801346,.011886020191013813,1],radius:.0067641944624483585},"pinky-finger-phalanx-distal":{offsetMatrix:[.9419984817504883,.3303581774234772,.059175245463848114,0,-.33483216166496277,.9130291938781738,.23294763267040253,0,.02292730286717415,-.2392500638961792,.970687210559845,0,-.0687975287437439,.054948460310697556,-.007561664097011089,1],radius:.0064259846694767475},"pinky-finger-tip":{offsetMatrix:[.9419984817504883,.3303581774234772,.059175245463848114,0,-.33483216166496277,.9130291938781738,.23294763267040253,0,.02292730286717415,-.2392500638961792,.970687210559845,0,-.06947512179613113,.0613851435482502,-.028543535619974136,1],radius:.005425984505563974}},gripOffsetMatrix:[-.0005348679260350764,-.8648636937141418,-.5020061135292053,0,-.2741127908229828,-.48265108466148376,.8318111896514893,0,-.9616971015930176,.13805119693279266,-.2368120402097702,0,-.02878567762672901,.0017147823236882687,.04536811262369156,1]},Ru={profileId:"oculus-hand",fallbackProfileIds:["generic-hand","generic-hand-select","generic-trigger"],poses:{default:Ap,pinch:bp,point:wp}},Tp={mapping:Ts.None,buttons:[{id:"pinch",type:"analog",eventTrigger:"select"}],axes:[]},Cu=pn(),Pu=Rn(),Lu=pn(),Iu=pn(),Du=Rn(),Uu=pn(),Nu=pn(),Ou=Rn(),Fu=pn(),ku=(n,e,t,i)=>(As(Cu,e),Ba(Pu,e),Sl(Lu,e),As(Iu,t),Ba(Du,t),Sl(Uu,t),El(Nu,Cu,Iu,i),ys(Ou,Pu,Du,i),El(Fu,Lu,Uu,i),np(n,Ou,Nu,Fu),n),Rp=[1,-1,-1,0,-1,1,1,0,-1,1,1,0,-1,1,1,1],Cp=n=>{for(let e=0;e<16;e++)n[e]*=Rp[e]},Li=Symbol("@immersive-web-emulation-runtime/xr-hand-input");class zu extends ed{constructor(e,t,i){if(t!==fn.Left&&t!==fn.Right)throw new DOMException('handedness for XRHandInput must be either "left" or "right"',"InvalidStateError");if(!e.poses.default||!e.poses.pinch)throw new DOMException('"default" and "pinch" hand pose configs are required',"InvalidStateError");const r=new qt(i),s=new qt(r),a=[e.profileId,...e.fallbackProfileIds],o=new Dc;Object.values(Rs).forEach(c=>{o.set(c,new Lc(c,r))});const l=new lo(t,Ga.TrackedPointer,a,r,new Pc(Tp),s,o);super(l),this[Li]={poseId:"default",poses:e.poses},this.updateHandPose()}get poseId(){return this[Li].poseId}set poseId(e){if(!this[Li].poses[e]){console.warn(`Pose config ${e} not found`);return}this[Li].poseId=e}updateHandPose(){const e=this[Li].poses[this[Li].poseId],t=this[Li].poses.pinch;Object.values(Rs).forEach(i=>{const r=e.jointTransforms[i].offsetMatrix,s=t.jointTransforms[i].offsetMatrix,a=this.inputSource.hand.get(i);ku(a[Pt].offsetMatrix,r,s,this.pinchValue),this.inputSource.handedness===fn.Right&&Cp(a[Pt].offsetMatrix),a[Ki].radius=(1-this.pinchValue)*e.jointTransforms[i].radius+this.pinchValue*t.jointTransforms[i].radius}),e.gripOffsetMatrix&&t.gripOffsetMatrix&&ku(this.inputSource.gripSpace[Pt].offsetMatrix,e.gripOffsetMatrix,t.gripOffsetMatrix,this.pinchValue)}get pinchValue(){return this[vt].inputSource.gamepad[Me].buttonsMap.pinch.value}updatePinchValue(e){if(e>1||e<0){console.warn(`Out-of-range value ${e} provided for pinch`);return}const t=this[vt].inputSource.gamepad[Me].buttonsMap.pinch;t[Me].pendingValue=e}onFrameStart(e){super.onFrameStart(e),this.updateHandPose()}}const _i=Symbol("@immersive-web-emulation-runtime/xr-system");class Bu extends EventTarget{constructor(e){super(),this[_i]={device:e}}isSessionSupported(e){return new Promise((t,i)=>{e===st.Inline?t(!0):t(this[_i].device.supportedSessionModes.includes(e))})}requestSession(e,t={}){return new Promise((i,r)=>{this.isSessionSupported(e).then(s=>{if(!s){r(new DOMException("The requested XRSession mode is not supported.","NotSupportedError"));return}if(this[_i].activeSession){r(new DOMException("An active XRSession already exists.","InvalidStateError"));return}const{requiredFeatures:a=[],optionalFeatures:o=[]}=t,{supportedFeatures:l}=this[_i].device;if(!a.every(m=>l.includes(m))){r(new Error("One or more required features are not supported by the device."));return}const u=o.filter(m=>l.includes(m)),p=Array.from(new Set([...a,...u,Ue.Viewer,Ue.Local])),d=new Ic(this[_i].device,e,p);this[_i].activeSession=d,d.addEventListener("end",()=>{this[_i].activeSession=void 0}),i(d)}).catch(r)})}}const Ge=Symbol("@immersive-web-emulation-runtime/action-player");class Pp{constructor(e,t,i){const{schema:r,frames:s}=t;if(!s||!r||s.length===0)throw new DOMException("wrong recording format","NotSupportedError");const a=new ir(Ut.Viewer,e),o={[ft.Left]:new qt(a),[ft.Right]:new qt(a),[ft.None]:new qt(a)};this[Ge]={refSpace:e,inputSources:new Map,inputSchemas:new Map,frames:s,recordedFramePointer:0,startingTimeStamp:s[0][0],endingTimeStamp:s[s.length-1][0],playbackTime:s[0][0],playing:!1,viewerSpace:a,viewSpaces:o,vec3:pn(),quat:Rn()},ws(this[Ge].viewSpaces[ft.Left][Pt].offsetMatrix,An(-i/2,0,0)),ws(this[Ge].viewSpaces[ft.Right][Pt].offsetMatrix,An(i/2,0,0)),r.forEach(l=>{const c=l[0],u=l[1];let p;if(u.hasGamepad){const v=[];for(let f=0;f<u.numButtons;f++)v.push({id:f.toString(),type:"manual"});const h=[];for(let f=0;f<u.numAxes;f++)h.push({id:f.toString(),type:"manual"});p=new Pc({mapping:u.mapping,buttons:v,axes:h})}const d=new qt(e);let m;u.hasHand&&(m=new Dc,Object.values(Rs).forEach(v=>{m.set(v,new Lc(v,d))}));const g=new lo(u.handedness,u.targetRayMode,u.profiles,d,p,u.hasGrip?new qt(e):void 0,u.hasHand?m:void 0);this[Ge].inputSources.set(c,{active:!1,source:g}),this[Ge].inputSchemas.set(c,u)})}play(){this[Ge].recordedFramePointer=0,this[Ge].playbackTime=this[Ge].startingTimeStamp,this[Ge].playing=!0,this[Ge].actualTimeStamp=performance.now()}stop(){this[Ge].playing=!1}get playing(){return this[Ge].playing}get viewerSpace(){return this[Ge].viewerSpace}get viewSpaces(){return this[Ge].viewSpaces}get inputSources(){return Array.from(this[Ge].inputSources.values()).filter(e=>e.active).map(e=>e.source)}playFrame(){const e=performance.now(),t=e-this[Ge].actualTimeStamp;if(this[Ge].actualTimeStamp=e,this[Ge].playbackTime+=t,this[Ge].playbackTime>this[Ge].endingTimeStamp){this.stop();return}for(;this[Ge].frames[this[Ge].recordedFramePointer+1][0]<this[Ge].playbackTime;)this[Ge].recordedFramePointer++;const i=this[Ge].frames[this[Ge].recordedFramePointer],r=this[Ge].frames[this[Ge].recordedFramePointer+1],s=(this[Ge].playbackTime-i[0])/(r[0]-i[0]);this.updateXRSpaceFromMergedFrames(this[Ge].viewerSpace,i.slice(1,8),r.slice(1,8),s);const a=new Map;for(let l=8;l<i.length;l++){const{index:c,inputData:u}=this.processRawInputData(i[l]);a.set(c,u)}const o=new Map;for(let l=8;l<r.length;l++){const{index:c,inputData:u}=this.processRawInputData(r[l]);o.set(c,u)}this[Ge].inputSources.forEach(l=>{l.active=!1}),o.forEach((l,c)=>{this[Ge].inputSources.get(c).active=!0;const u=this[Ge].inputSources.get(c).source,p=this[Ge].inputSchemas.get(c);this.updateInputSource(u,p,a.has(c)?a.get(c):l,l,s)})}updateInputSource(e,t,i,r,s){if(this.updateXRSpaceFromMergedFrames(e.targetRaySpace,i.targetRayTransform,r.targetRayTransform,s),t.hasGrip&&this.updateXRSpaceFromMergedFrames(e.gripSpace,i.gripTransform,r.gripTransform,s),t.hasHand)for(let a=0;a<25;a++){const o=i.handTransforms.slice(a*8,a*8+7),l=r.handTransforms.slice(a*8,a*8+7),c=i.handTransforms[a*8+7],u=r.handTransforms[a*8+7],p=e.hand.get(t.jointSequence[a]);this.updateXRSpaceFromMergedFrames(p,o,l,s),p[Ki].radius=(u-c)*s+c}if(t.hasGamepad){const a=e.gamepad;r.buttons.forEach((o,l)=>{const c=a.buttons[l];c[Me].pressed=o[0]===1,c[Me].touched=o[1]===1;const u=i.buttons[l][2],p=o[2];c[Me].value=(p-u)*s+u}),r.axes.forEach((o,l)=>{const c=i.axes[l];a[Me].axesMap[l.toString()].x=(o-c)*s+c})}}updateXRSpaceFromMergedFrames(e,t,i,r){const s=An(t[0],t[1],t[2]),a=Va(t[3],t[4],t[5],t[6]),o=An(i[0],i[1],i[2]),l=Va(i[3],i[4],i[5],i[6]);El(this[Ge].vec3,s,o,r),ys(this[Ge].quat,a,l,r),Ns(e[Pt].offsetMatrix,this[Ge].quat,this[Ge].vec3)}processRawInputData(e){const t=e[0],i=this[Ge].inputSchemas.get(t),s={targetRayTransform:e.slice(1,8)};let a=8;if(i.hasGrip&&(s.gripTransform=e[a++]),i.hasHand&&(s.handTransforms=e[a++]),i.hasGamepad){const o=e[a];s.buttons=o.slice(0,i.numButtons),s.axes=o.slice(i.numButtons)}return{index:t,inputData:s}}}const Lp="1.0.4";class Vu extends Event{constructor(e,t){if(super(e,t),!t.referenceSpace)throw new Error("XRReferenceSpaceEventInit.referenceSpace is required");this.referenceSpace=t.referenceSpace,this.transform=t.transform}}const rs=Symbol("@immersive-web-emulation-runtime/xr-viewport");class Ys{constructor(e,t,i,r){this[rs]={x:e,y:t,width:i,height:r}}get x(){return this[rs].x}get y(){return this[rs].y}get width(){return this[rs].width}get height(){return this[rs].height}}var Ue;(function(n){n.Viewer="viewer",n.Local="local",n.LocalFloor="local-floor",n.BoundedFloor="bounded-floor",n.Unbounded="unbounded",n.DomOverlay="dom-overlay",n.Anchors="anchors",n.PlaneDetection="plane-detection",n.MeshDetection="mesh-detection",n.HitTest="hit-test",n.HandTracking="hand-tracking",n.DepthSensing="depth-sensing"})(Ue||(Ue={}));const se=Symbol("@immersive-web-emulation-runtime/xr-device"),ss={ipd:.063,fovy:Math.PI/2,headsetPosition:new Zi(0,1.6,0),headsetQuaternion:new Ms,stereoEnabled:!1};class Ip{constructor(e,t={}){var i,r,s,a,o,l;const c=new _p,u=new ir(Ut.Viewer,c),p={[ft.Left]:new qt(u),[ft.Right]:new qt(u),[ft.None]:new qt(u)},d=e.controllerConfig,m={};d&&Object.values(fn).forEach(h=>{d.layout[h]&&(m[h]=new Mp(d,h,c))});const g={[fn.Left]:new zu(Ru,fn.Left,c),[fn.Right]:new zu(Ru,fn.Right,c)},v=(i=t.canvasContainer)!==null&&i!==void 0?i:document.createElement("div");v.dataset.webxr_runtime=`Immersive Web Emulation Runtime v${Lp}`,v.style.position="fixed",v.style.width="100%",v.style.height="100%",v.style.top="0",v.style.left="0",v.style.display="flex",v.style.justifyContent="center",v.style.alignItems="center",v.style.overflow="hidden",v.style.zIndex="999",this[se]={name:e.name,supportedSessionModes:e.supportedSessionModes,supportedFeatures:e.supportedFeatures,supportedFrameRates:e.supportedFrameRates,isSystemKeyboardSupported:e.isSystemKeyboardSupported,internalNominalFrameRate:e.internalNominalFrameRate,environmentBlendModes:e.environmentBlendModes,interactionMode:e.interactionMode,userAgent:e.userAgent,position:(r=t.headsetPosition)!==null&&r!==void 0?r:ss.headsetPosition.clone(),quaternion:(s=t.headsetQuaternion)!==null&&s!==void 0?s:ss.headsetQuaternion.clone(),stereoEnabled:(a=t.stereoEnabled)!==null&&a!==void 0?a:ss.stereoEnabled,ipd:(o=t.ipd)!==null&&o!==void 0?o:ss.ipd,fovy:(l=t.fovy)!==null&&l!==void 0?l:ss.fovy,controllers:m,hands:g,primaryInputMode:"controller",pendingReferenceSpaceReset:!1,visibilityState:Tr.Visible,pendingVisibilityState:null,xrSystem:null,matrix:en(),globalSpace:c,viewerSpace:u,viewSpaces:p,canvasContainer:v,getViewport:(h,f)=>{const x=h.context.canvas,{width:_,height:M}=x;switch(f.eye){case ft.None:return new Ys(0,0,_,M);case ft.Left:return new Ys(0,0,this[se].stereoEnabled?_/2:_,M);case ft.Right:return new Ys(_/2,0,this[se].stereoEnabled?_/2:0,M)}},updateViews:()=>{const h=this[se].viewerSpace;Ns(h[Pt].offsetMatrix,this[se].quaternion.quat,this[se].position.vec3),ws(this[se].viewSpaces[ft.Left][Pt].offsetMatrix,An(-this[se].ipd/2,0,0)),ws(this[se].viewSpaces[ft.Right][Pt].offsetMatrix,An(this[se].ipd/2,0,0))},onBaseLayerSet:h=>{if(!h)return;const f=h.context.canvas;f.parentElement!==this[se].canvasContainer&&(this[se].canvasData={canvas:f,parent:f.parentElement,width:f.width,height:f.height},this[se].canvasContainer.appendChild(f),document.body.appendChild(this[se].canvasContainer)),f.width=window.innerWidth,f.height=window.innerHeight},onSessionEnd:()=>{if(this[se].canvasData){const{canvas:h,parent:f,width:x,height:_}=this[se].canvasData;h.width=x,h.height=_,f?f.appendChild(h):this[se].canvasContainer.removeChild(h),document.body.removeChild(this[se].canvasContainer),window.dispatchEvent(new Event("resize"))}},onFrameStart:h=>{var f;if(!((f=this[se].actionPlayer)===null||f===void 0)&&f.playing)this[se].actionPlayer.playFrame();else{const x=h.session;this[se].updateViews(),this[se].pendingVisibilityState&&(this[se].visibilityState=this[se].pendingVisibilityState,this[se].pendingVisibilityState=null,x.dispatchEvent(new Xa("visibilitychange",{session:x}))),this[se].visibilityState===Tr.Visible&&this.activeInputs.forEach(_=>{_.onFrameStart(h)}),this[se].pendingReferenceSpaceReset&&(x[q].referenceSpaces.forEach(_=>{switch(_[yi].type){case Ut.Local:case Ut.LocalFloor:case Ut.BoundedFloor:case Ut.Unbounded:_.dispatchEvent(new Vu("reset",{referenceSpace:_}));break}}),this[se].pendingReferenceSpaceReset=!1)}this[se].updateViews()}},this[se].updateViews()}installRuntime(e=globalThis){Object.defineProperty(WebGL2RenderingContext.prototype,"makeXRCompatible",{value:function(){return new Promise((t,i)=>{t(!0)})},configurable:!0}),this[se].xrSystem=new Bu(this),Object.defineProperty(globalThis.navigator,"xr",{value:this[se].xrSystem,configurable:!0}),Object.defineProperty(navigator,"userAgent",{value:this[se].userAgent,writable:!1,configurable:!1,enumerable:!0}),e.XRSystem=Bu,e.XRSession=Ic,e.XRRenderState=bl,e.XRFrame=rd,e.XRSpace=qt,e.XRReferenceSpace=ir,e.XRJointSpace=Lc,e.XRView=td,e.XRViewport=Ys,e.XRRigidTransform=uo,e.XRPose=co,e.XRViewerPose=id,e.XRJointPose=nd,e.XRInputSource=lo,e.XRInputSourceArray=yp,e.XRHand=Dc,e.XRLayer=od,e.XRWebGLLayer=Ep,e.XRSessionEvent=Xa,e.XRInputSourceEvent=wa,e.XRInputSourcesChangeEvent=sd,e.XRReferenceSpaceEvent=Vu}get supportedSessionModes(){return this[se].supportedSessionModes}get supportedFeatures(){return this[se].supportedFeatures}get supportedFrameRates(){return this[se].supportedFrameRates}get isSystemKeyboardSupported(){return this[se].isSystemKeyboardSupported}get internalNominalFrameRate(){return this[se].internalNominalFrameRate}get stereoEnabled(){return this[se].stereoEnabled}set stereoEnabled(e){this[se].stereoEnabled=e}get ipd(){return this[se].ipd}set ipd(e){this[se].ipd=e}get fovy(){return this[se].fovy}set fovy(e){this[se].fovy=e}get position(){return this[se].position}get quaternion(){return this[se].quaternion}get viewerSpace(){var e;return!((e=this[se].actionPlayer)===null||e===void 0)&&e.playing?this[se].actionPlayer.viewerSpace:this[se].viewerSpace}get viewSpaces(){var e;return!((e=this[se].actionPlayer)===null||e===void 0)&&e.playing?this[se].actionPlayer.viewSpaces:this[se].viewSpaces}get controllers(){return this[se].controllers}get hands(){return this[se].hands}get primaryInputMode(){return this[se].primaryInputMode}set primaryInputMode(e){if(e!=="controller"&&e!=="hand"){console.warn('primary input mode can only be "controller" or "hand"');return}this[se].primaryInputMode=e}get activeInputs(){return this[se].visibilityState!==Tr.Visible?[]:(this[se].primaryInputMode==="controller"?Object.values(this[se].controllers):Object.values(this[se].hands)).filter(t=>t.connected)}get inputSources(){var e;return!((e=this[se].actionPlayer)===null||e===void 0)&&e.playing?this[se].actionPlayer.inputSources:this.activeInputs.map(t=>t.inputSource)}get canvasContainer(){return this[se].canvasContainer}get activeSession(){var e;return(e=this[se].xrSystem)===null||e===void 0?void 0:e[_i].activeSession}recenter(){const e=new Zi(-this.position.x,0,-this.position.z),t=new Zi(0,0,-1).applyQuaternion(this.quaternion);t.y=0,t.normalize();const i=Math.atan2(t.x,-t.z),r=new Ms().setFromAxisAngle(new Zi(0,1,0),i);this.position.add(e),this.quaternion.multiply(r),[...Object.values(this[se].controllers),...Object.values(this[se].hands)].forEach(s=>{s.position.add(e),s.quaternion.multiply(r),s.position.applyQuaternion(r)}),this[se].pendingReferenceSpaceReset=!0}get visibilityState(){return this[se].visibilityState}updateVisibilityState(e){if(!Object.values(Tr).includes(e))throw new DOMException("Invalid XRVisibilityState value","NotSupportedError");e!==this[se].visibilityState&&(this[se].pendingVisibilityState=e)}createActionPlayer(e,t){return this[se].actionPlayer=new Pp(e,t,this[se].ipd),this[se].actionPlayer}}const fo={mapping:Ts.XRStandard,buttons:[{id:"trigger",type:"analog",eventTrigger:"select"},{id:"squeeze",type:"analog",eventTrigger:"squeeze"},null,{id:"thumbstick",type:"binary"},{id:"x-button",type:"binary"},{id:"y-button",type:"binary"},{id:"thumbrest",type:"binary"}],axes:[null,null,{id:"thumbstick",type:"x-axis"},{id:"thumbstick",type:"y-axis"}]},ho={mapping:Ts.XRStandard,buttons:[{id:"trigger",type:"analog",eventTrigger:"select"},{id:"squeeze",type:"analog",eventTrigger:"squeeze"},null,{id:"thumbstick",type:"binary"},{id:"a-button",type:"binary"},{id:"b-button",type:"binary"},{id:"thumbrest",type:"binary"}],axes:[null,null,{id:"thumbstick",type:"x-axis"},{id:"thumbstick",type:"y-axis"}]},Dp={profileId:"oculus-touch-v2",fallbackProfileIds:["oculus-touch","generic-trigger-squeeze-thumbstick"],layout:{left:{gamepad:fo,gripOffsetMatrix:[.9925461411476135,4673031295254759e-24,-.12186938524246216,0,.08617470413446426,.7071065306663513,.7018362283706665,0,.0861746296286583,-.70710688829422,.7018358707427979,0,-.003979847766458988,-.01585787907242775,.04964185878634453,1],numHapticActuators:1},right:{gamepad:ho,gripOffsetMatrix:[.9925461411476135,3688163374704345e-23,.12186937034130096,0,-.08617469668388367,.7071066498756409,.7018361687660217,0,-.0861746147274971,-.7071068286895752,.7018359899520874,0,.003979853354394436,-.01585787907242775,.04964182525873184,1],numHapticActuators:1}}},Up={profileId:"oculus-touch-v3",fallbackProfileIds:["oculus-touch","generic-trigger-squeeze-thumbstick"],layout:{left:{gamepad:fo,gripOffsetMatrix:[.9925461411476135,20823669899527886e-24,-.12186937034130096,0,.08617465198040009,.7071067094802856,.701836109161377,0,.08617466688156128,-.7071067690849304,.7018360495567322,0,-.003979838453233242,-.015857907012104988,.04964181408286095,1],numHapticActuators:1},right:{gamepad:ho,gripOffsetMatrix:[.9925461411476135,-8329467959811154e-23,.12186941504478455,0,-.08617465943098068,.7071066498756409,.7018361687660217,0,-.08617471158504486,-.7071068286895752,.7018359303474426,0,.003979798872023821,-.015857888385653496,.049641866236925125,1],numHapticActuators:1}}},Np={profileId:"meta-quest-touch-pro",fallbackProfileIds:["oculus-touch-v2","oculus-touch","generic-trigger-squeeze-thumbstick"],layout:{left:{gamepad:fo,gripOffsetMatrix:[.9925461411476135,-15779937356796836e-24,-.12186935544013977,0,.08617467433214188,.7071067094802856,.701836109161377,0,.0861746296286583,-.7071067690849304,.7018360495567322,0,-.003979836590588093,-.015857847407460213,.049641840159893036,1],numHapticActuators:3},right:{gamepad:ho,gripOffsetMatrix:[.9925461411476135,9267653311439972e-26,.12186937034130096,0,-.08617467433214188,.7071067094802856,.7018361687660217,0,-.08617464452981949,-.7071067690849304,.7018360495567322,0,.003979847766458988,-.01585782691836357,.04964186251163483,1],numHapticActuators:3}}},Op={profileId:"meta-quest-touch-plus",fallbackProfileIds:["oculus-touch-v3","oculus-touch","generic-trigger-squeeze-thumbstick"],layout:{left:{gamepad:fo,gripOffsetMatrix:[.9925461411476135,10736208366779465e-24,-.12186933308839798,0,.08617459982633591,.70710688829422,.7018360495567322,0,.08617466688156128,-.7071067094802856,.7018362283706665,0,-.003979803062975407,-.015857873484492302,.04964187368750572,1],numHapticActuators:1},right:{gamepad:ho,gripOffsetMatrix:[.9925461411476135,-26238110351073374e-24,.12186934053897858,0,-.0861746147274971,.7071067690849304,.7018360495567322,0,-.08617465943098068,-.7071067094802856,.701836109161377,0,.003979838453233242,-.015857869759202003,.04964182525873184,1],numHapticActuators:1}}},Fp={name:"Oculus Quest 1",controllerConfig:Dp,supportedSessionModes:[st.Inline,st.ImmersiveVR,st.ImmersiveAR],supportedFeatures:[Ue.Viewer,Ue.Local,Ue.LocalFloor,Ue.BoundedFloor,Ue.Unbounded,Ue.Anchors,Ue.PlaneDetection,Ue.HandTracking],supportedFrameRates:[72,80,90],isSystemKeyboardSupported:!0,internalNominalFrameRate:72,environmentBlendModes:{[st.ImmersiveVR]:Pn.Opaque,[st.ImmersiveAR]:Pn.AlphaBlend},interactionMode:kr.WorldSpace,userAgent:"Mozilla/5.0 (X11; Linux x86_64; Quest 1) AppleWebKit/537.36 (KHTML, like Gecko) OculusBrowser/33.0.0.x.x.x Chrome/126.0.6478.122 VR Safari/537.36"},kp={name:"Meta Quest 2",controllerConfig:Up,supportedSessionModes:[st.Inline,st.ImmersiveVR,st.ImmersiveAR],supportedFeatures:[Ue.Viewer,Ue.Local,Ue.LocalFloor,Ue.BoundedFloor,Ue.Unbounded,Ue.Anchors,Ue.PlaneDetection,Ue.MeshDetection,Ue.HitTest,Ue.HandTracking],supportedFrameRates:[72,80,90,120],isSystemKeyboardSupported:!0,internalNominalFrameRate:72,environmentBlendModes:{[st.ImmersiveVR]:Pn.Opaque,[st.ImmersiveAR]:Pn.AlphaBlend},interactionMode:kr.WorldSpace,userAgent:"Mozilla/5.0 (X11; Linux x86_64; Quest 2) AppleWebKit/537.36 (KHTML, like Gecko) OculusBrowser/33.0.0.x.x.x Chrome/126.0.6478.122 VR Safari/537.36"},zp={name:"Meta Quest Pro",controllerConfig:Np,supportedSessionModes:[st.Inline,st.ImmersiveVR,st.ImmersiveAR],supportedFeatures:[Ue.Viewer,Ue.Local,Ue.LocalFloor,Ue.BoundedFloor,Ue.Unbounded,Ue.Anchors,Ue.PlaneDetection,Ue.MeshDetection,Ue.HitTest,Ue.HandTracking],supportedFrameRates:[72,80,90,120],isSystemKeyboardSupported:!0,internalNominalFrameRate:90,environmentBlendModes:{[st.ImmersiveVR]:Pn.Opaque,[st.ImmersiveAR]:Pn.AlphaBlend},interactionMode:kr.WorldSpace,userAgent:"Mozilla/5.0 (X11; Linux x86_64; Quest Pro) AppleWebKit/537.36 (KHTML, like Gecko) OculusBrowser/33.0.0.x.x.x Chrome/126.0.6478.122 VR Safari/537.36"},Bp={name:"Meta Quest 3",controllerConfig:Op,supportedSessionModes:[st.Inline,st.ImmersiveVR,st.ImmersiveAR],supportedFeatures:[Ue.Viewer,Ue.Local,Ue.LocalFloor,Ue.BoundedFloor,Ue.Unbounded,Ue.Anchors,Ue.PlaneDetection,Ue.MeshDetection,Ue.HitTest,Ue.HandTracking,Ue.DepthSensing],supportedFrameRates:[72,80,90,120],isSystemKeyboardSupported:!0,internalNominalFrameRate:90,environmentBlendModes:{[st.ImmersiveVR]:Pn.Opaque,[st.ImmersiveAR]:Pn.AlphaBlend},interactionMode:kr.WorldSpace,userAgent:"Mozilla/5.0 (X11; Linux x86_64; Quest 3) AppleWebKit/537.36 (KHTML, like Gecko) OculusBrowser/33.0.0.x.x.x Chrome/126.0.6478.122 VR Safari/537.36"},Hu=()=>{};let Uc={},ld={},cd=null,ud={mark:Hu,measure:Hu};try{typeof window<"u"&&(Uc=window),typeof document<"u"&&(ld=document),typeof MutationObserver<"u"&&(cd=MutationObserver),typeof performance<"u"&&(ud=performance)}catch{}const{userAgent:Gu=""}=Uc.navigator||{},wi=Uc,ht=ld,Wu=cd,$s=ud;wi.document;const si=!!ht.documentElement&&!!ht.head&&typeof ht.addEventListener=="function"&&typeof ht.createElement=="function",fd=~Gu.indexOf("MSIE")||~Gu.indexOf("Trident/");var mt="classic",hd="duotone",hn="sharp",dn="sharp-duotone",Vp=[mt,hd,hn,dn],Hp={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},Xu={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Gp=["kit"],Wp=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,Xp=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,qp={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},jp={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},Yp={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},$p={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},Zp={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},Kp={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},dd={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},Qp=["solid","regular","light","thin","duotone","brands"],pd=[1,2,3,4,5,6,7,8,9,10],Jp=pd.concat([11,12,13,14,15,16,17,18,19,20]),ps={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},em=[...Object.keys($p),...Qp,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ps.GROUP,ps.SWAP_OPACITY,ps.PRIMARY,ps.SECONDARY].concat(pd.map(n=>"".concat(n,"x"))).concat(Jp.map(n=>"w-".concat(n))),tm={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},nm={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},im={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},qu={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const ti="___FONT_AWESOME___",wl=16,md="fa",gd="svg-inline--fa",rr="data-fa-i2svg",Al="data-fa-pseudo-element",rm="data-fa-pseudo-element-pending",Nc="data-prefix",Oc="data-icon",ju="fontawesome-i2svg",sm="async",am=["HTML","HEAD","STYLE","SCRIPT"],vd=(()=>{try{return!0}catch{return!1}})(),_d=[mt,hn,dn];function Os(n){return new Proxy(n,{get(e,t){return t in e?e[t]:e[mt]}})}const xd={...dd};xd[mt]={...dd[mt],...Xu.kit,...Xu["kit-duotone"]};const Qi=Os(xd),Tl={...Kp};Tl[mt]={...Tl[mt],...qu.kit,...qu["kit-duotone"]};const Cs=Os(Tl),Rl={...Zp};Rl[mt]={...Rl[mt],...im.kit};const Ji=Os(Rl),Cl={...Yp};Cl[mt]={...Cl[mt],...nm.kit};const om=Os(Cl),lm=Wp,yd="fa-layers-text",cm=Xp,um={...Hp};Os(um);const fm=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],No=ps,zr=new Set;Object.keys(Cs[mt]).map(zr.add.bind(zr));Object.keys(Cs[hn]).map(zr.add.bind(zr));Object.keys(Cs[dn]).map(zr.add.bind(zr));const hm=[...Gp,...em],Ss=wi.FontAwesomeConfig||{};function dm(n){var e=ht.querySelector("script["+n+"]");if(e)return e.getAttribute(n)}function pm(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}ht&&typeof ht.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[t,i]=e;const r=pm(dm(t));r!=null&&(Ss[i]=r)});const Md={styleDefault:"solid",familyDefault:"classic",cssPrefix:md,replacementClass:gd,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ss.familyPrefix&&(Ss.cssPrefix=Ss.familyPrefix);const Br={...Md,...Ss};Br.autoReplaceSvg||(Br.observeMutations=!1);const _e={};Object.keys(Md).forEach(n=>{Object.defineProperty(_e,n,{enumerable:!0,set:function(e){Br[n]=e,Es.forEach(t=>t(_e))},get:function(){return Br[n]}})});Object.defineProperty(_e,"familyPrefix",{enumerable:!0,set:function(n){Br.cssPrefix=n,Es.forEach(e=>e(_e))},get:function(){return Br.cssPrefix}});wi.FontAwesomeConfig=_e;const Es=[];function mm(n){return Es.push(n),()=>{Es.splice(Es.indexOf(n),1)}}const li=wl,zn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function gm(n){if(!n||!si)return;const e=ht.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=n;const t=ht.head.childNodes;let i=null;for(let r=t.length-1;r>-1;r--){const s=t[r],a=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(i=s)}return ht.head.insertBefore(e,i),n}const vm="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ps(){let n=12,e="";for(;n-- >0;)e+=vm[Math.random()*62|0];return e}function Qr(n){const e=[];for(let t=(n||[]).length>>>0;t--;)e[t]=n[t];return e}function Fc(n){return n.classList?Qr(n.classList):(n.getAttribute("class")||"").split(" ").filter(e=>e)}function Sd(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function _m(n){return Object.keys(n||{}).reduce((e,t)=>e+"".concat(t,'="').concat(Sd(n[t]),'" '),"").trim()}function po(n){return Object.keys(n||{}).reduce((e,t)=>e+"".concat(t,": ").concat(n[t].trim(),";"),"")}function kc(n){return n.size!==zn.size||n.x!==zn.x||n.y!==zn.y||n.rotate!==zn.rotate||n.flipX||n.flipY}function xm(n){let{transform:e,containerWidth:t,iconWidth:i}=n;const r={transform:"translate(".concat(t/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),a="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(a," ").concat(o)},c={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:l,path:c}}function ym(n){let{transform:e,width:t=wl,height:i=wl,startCentered:r=!1}=n,s="";return r&&fd?s+="translate(".concat(e.x/li-t/2,"em, ").concat(e.y/li-i/2,"em) "):r?s+="translate(calc(-50% + ".concat(e.x/li,"em), calc(-50% + ").concat(e.y/li,"em)) "):s+="translate(".concat(e.x/li,"em, ").concat(e.y/li,"em) "),s+="scale(".concat(e.size/li*(e.flipX?-1:1),", ").concat(e.size/li*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var Mm=`:root, :host {
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
}`;function Ed(){const n=md,e=gd,t=_e.cssPrefix,i=_e.replacementClass;let r=Mm;if(t!==n||i!==e){const s=new RegExp("\\.".concat(n,"\\-"),"g"),a=new RegExp("\\--".concat(n,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(t,"-")).replace(a,"--".concat(t,"-")).replace(o,".".concat(i))}return r}let Yu=!1;function Oo(){_e.autoAddCss&&!Yu&&(gm(Ed()),Yu=!0)}var Sm={mixout(){return{dom:{css:Ed,insertCss:Oo}}},hooks(){return{beforeDOMElementCreation(){Oo()},beforeI2svg(){Oo()}}}};const ni=wi||{};ni[ti]||(ni[ti]={});ni[ti].styles||(ni[ti].styles={});ni[ti].hooks||(ni[ti].hooks={});ni[ti].shims||(ni[ti].shims=[]);var Bn=ni[ti];const bd=[],wd=function(){ht.removeEventListener("DOMContentLoaded",wd),qa=1,bd.map(n=>n())};let qa=!1;si&&(qa=(ht.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ht.readyState),qa||ht.addEventListener("DOMContentLoaded",wd));function Em(n){si&&(qa?setTimeout(n,0):bd.push(n))}function Fs(n){const{tag:e,attributes:t={},children:i=[]}=n;return typeof n=="string"?Sd(n):"<".concat(e," ").concat(_m(t),">").concat(i.map(Fs).join(""),"</").concat(e,">")}function $u(n,e,t){if(n&&n[e]&&n[e][t])return{prefix:e,iconName:t,icon:n[e][t]}}var Fo=function(e,t,i,r){var s=Object.keys(e),a=s.length,o=t,l,c,u;for(i===void 0?(l=1,u=e[s[0]]):(l=0,u=i);l<a;l++)c=s[l],u=o(u,e[c],c,e);return u};function bm(n){const e=[];let t=0;const i=n.length;for(;t<i;){const r=n.charCodeAt(t++);if(r>=55296&&r<=56319&&t<i){const s=n.charCodeAt(t++);(s&64512)==56320?e.push(((r&1023)<<10)+(s&1023)+65536):(e.push(r),t--)}else e.push(r)}return e}function Pl(n){const e=bm(n);return e.length===1?e[0].toString(16):null}function wm(n,e){const t=n.length;let i=n.charCodeAt(e),r;return i>=55296&&i<=56319&&t>e+1&&(r=n.charCodeAt(e+1),r>=56320&&r<=57343)?(i-55296)*1024+r-56320+65536:i}function Zu(n){return Object.keys(n).reduce((e,t)=>{const i=n[t];return!!i.icon?e[i.iconName]=i.icon:e[t]=i,e},{})}function Ll(n,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:i=!1}=t,r=Zu(e);typeof Bn.hooks.addPack=="function"&&!i?Bn.hooks.addPack(n,Zu(e)):Bn.styles[n]={...Bn.styles[n]||{},...r},n==="fas"&&Ll("fa",e)}const{styles:Gi,shims:Am}=Bn,Tm={[mt]:Object.values(Ji[mt]),[hn]:Object.values(Ji[hn]),[dn]:Object.values(Ji[dn])};let zc=null,Ad={},Td={},Rd={},Cd={},Pd={};const Rm={[mt]:Object.keys(Qi[mt]),[hn]:Object.keys(Qi[hn]),[dn]:Object.keys(Qi[dn])};function Cm(n){return~hm.indexOf(n)}function Pm(n,e){const t=e.split("-"),i=t[0],r=t.slice(1).join("-");return i===n&&r!==""&&!Cm(r)?r:null}const Ld=()=>{const n=i=>Fo(Gi,(r,s,a)=>(r[a]=Fo(s,i,{}),r),{});Ad=n((i,r,s)=>(r[3]&&(i[r[3]]=s),r[2]&&r[2].filter(o=>typeof o=="number").forEach(o=>{i[o.toString(16)]=s}),i)),Td=n((i,r,s)=>(i[s]=s,r[2]&&r[2].filter(o=>typeof o=="string").forEach(o=>{i[o]=s}),i)),Pd=n((i,r,s)=>{const a=r[2];return i[s]=s,a.forEach(o=>{i[o]=s}),i});const e="far"in Gi||_e.autoFetchSvg,t=Fo(Am,(i,r)=>{const s=r[0];let a=r[1];const o=r[2];return a==="far"&&!e&&(a="fas"),typeof s=="string"&&(i.names[s]={prefix:a,iconName:o}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:a,iconName:o}),i},{names:{},unicodes:{}});Rd=t.names,Cd=t.unicodes,zc=mo(_e.styleDefault,{family:_e.familyDefault})};mm(n=>{zc=mo(n.styleDefault,{family:_e.familyDefault})});Ld();function Bc(n,e){return(Ad[n]||{})[e]}function Lm(n,e){return(Td[n]||{})[e]}function Si(n,e){return(Pd[n]||{})[e]}function Id(n){return Rd[n]||{prefix:null,iconName:null}}function Im(n){const e=Cd[n],t=Bc("fas",n);return e||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function Ai(){return zc}const Vc=()=>({prefix:null,iconName:null,rest:[]});function mo(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:t=mt}=e,i=Qi[t][n],r=Cs[t][n]||Cs[t][i],s=n in Bn.styles?n:null;return r||s||null}const Dm={[mt]:Object.keys(Ji[mt]),[hn]:Object.keys(Ji[hn]),[dn]:Object.keys(Ji[dn])};function go(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:t=!1}=e,i={[mt]:"".concat(_e.cssPrefix,"-").concat(mt),[hn]:"".concat(_e.cssPrefix,"-").concat(hn),[dn]:"".concat(_e.cssPrefix,"-").concat(dn)};let r=null,s=mt;const a=Vp.filter(l=>l!==hd);a.forEach(l=>{(n.includes(i[l])||n.some(c=>Dm[l].includes(c)))&&(s=l)});const o=n.reduce((l,c)=>{const u=Pm(_e.cssPrefix,c);if(Gi[c]?(c=Tm[s].includes(c)?om[s][c]:c,r=c,l.prefix=c):Rm[s].indexOf(c)>-1?(r=c,l.prefix=mo(c,{family:s})):u?l.iconName=u:c!==_e.replacementClass&&!a.some(p=>c===i[p])&&l.rest.push(c),!t&&l.prefix&&l.iconName){const p=r==="fa"?Id(l.iconName):{},d=Si(l.prefix,l.iconName);p.prefix&&(r=null),l.iconName=p.iconName||d||l.iconName,l.prefix=p.prefix||l.prefix,l.prefix==="far"&&!Gi.far&&Gi.fas&&!_e.autoFetchSvg&&(l.prefix="fas")}return l},Vc());return(n.includes("fa-brands")||n.includes("fab"))&&(o.prefix="fab"),(n.includes("fa-duotone")||n.includes("fad"))&&(o.prefix="fad"),!o.prefix&&s===hn&&(Gi.fass||_e.autoFetchSvg)&&(o.prefix="fass",o.iconName=Si(o.prefix,o.iconName)||o.iconName),!o.prefix&&s===dn&&(Gi.fasds||_e.autoFetchSvg)&&(o.prefix="fasds",o.iconName=Si(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||r==="fa")&&(o.prefix=Ai()||"fas"),o}class Um{constructor(){this.definitions={}}add(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];const r=t.reduce(this._pullDefinitions,{});Object.keys(r).forEach(s=>{this.definitions[s]={...this.definitions[s]||{},...r[s]},Ll(s,r[s]);const a=Ji[mt][s];a&&Ll(a,r[s]),Ld()})}reset(){this.definitions={}}_pullDefinitions(e,t){const i=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(i).map(r=>{const{prefix:s,iconName:a,icon:o}=i[r],l=o[2];e[s]||(e[s]={}),l.length>0&&l.forEach(c=>{typeof c=="string"&&(e[s][c]=o)}),e[s][a]=o}),e}}let Ku=[],Rr={};const Ur={},Nm=Object.keys(Ur);function Om(n,e){let{mixoutsTo:t}=e;return Ku=n,Rr={},Object.keys(Ur).forEach(i=>{Nm.indexOf(i)===-1&&delete Ur[i]}),Ku.forEach(i=>{const r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(s=>{typeof r[s]=="function"&&(t[s]=r[s]),typeof r[s]=="object"&&Object.keys(r[s]).forEach(a=>{t[s]||(t[s]={}),t[s][a]=r[s][a]})}),i.hooks){const s=i.hooks();Object.keys(s).forEach(a=>{Rr[a]||(Rr[a]=[]),Rr[a].push(s[a])})}i.provides&&i.provides(Ur)}),t}function Il(n,e){for(var t=arguments.length,i=new Array(t>2?t-2:0),r=2;r<t;r++)i[r-2]=arguments[r];return(Rr[n]||[]).forEach(a=>{e=a.apply(null,[e,...i])}),e}function sr(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),i=1;i<e;i++)t[i-1]=arguments[i];(Rr[n]||[]).forEach(s=>{s.apply(null,t)})}function Ti(){const n=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ur[n]?Ur[n].apply(null,e):void 0}function Dl(n){n.prefix==="fa"&&(n.prefix="fas");let{iconName:e}=n;const t=n.prefix||Ai();if(e)return e=Si(t,e)||e,$u(Dd.definitions,t,e)||$u(Bn.styles,t,e)}const Dd=new Um,Fm=()=>{_e.autoReplaceSvg=!1,_e.observeMutations=!1,sr("noAuto")},km={i2svg:function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return si?(sr("beforeI2svg",n),Ti("pseudoElements2svg",n),Ti("i2svg",n)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=n;_e.autoReplaceSvg===!1&&(_e.autoReplaceSvg=!0),_e.observeMutations=!0,Em(()=>{Bm({autoReplaceSvgRoot:e}),sr("watch",n)})}},zm={icon:n=>{if(n===null)return null;if(typeof n=="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:Si(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){const e=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],t=mo(n[0]);return{prefix:t,iconName:Si(t,e)||e}}if(typeof n=="string"&&(n.indexOf("".concat(_e.cssPrefix,"-"))>-1||n.match(lm))){const e=go(n.split(" "),{skipLookups:!0});return{prefix:e.prefix||Ai(),iconName:Si(e.prefix,e.iconName)||e.iconName}}if(typeof n=="string"){const e=Ai();return{prefix:e,iconName:Si(e,n)||n}}}},mn={noAuto:Fm,config:_e,dom:km,parse:zm,library:Dd,findIconDefinition:Dl,toHtml:Fs},Bm=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=ht}=n;(Object.keys(Bn.styles).length>0||_e.autoFetchSvg)&&si&&_e.autoReplaceSvg&&mn.dom.i2svg({node:e})};function vo(n,e){return Object.defineProperty(n,"abstract",{get:e}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(t=>Fs(t))}}),Object.defineProperty(n,"node",{get:function(){if(!si)return;const t=ht.createElement("div");return t.innerHTML=n.html,t.children}}),n}function Vm(n){let{children:e,main:t,mask:i,attributes:r,styles:s,transform:a}=n;if(kc(a)&&t.found&&!i.found){const{width:o,height:l}=t,c={x:o/l/2,y:.5};r.style=po({...s,"transform-origin":"".concat(c.x+a.x/16,"em ").concat(c.y+a.y/16,"em")})}return[{tag:"svg",attributes:r,children:e}]}function Hm(n){let{prefix:e,iconName:t,children:i,attributes:r,symbol:s}=n;const a=s===!0?"".concat(e,"-").concat(_e.cssPrefix,"-").concat(t):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...r,id:a},children:i}]}]}function Hc(n){const{icons:{main:e,mask:t},prefix:i,iconName:r,transform:s,symbol:a,title:o,maskId:l,titleId:c,extra:u,watchable:p=!1}=n,{width:d,height:m}=t.found?t:e,g=i==="fak",v=[_e.replacementClass,r?"".concat(_e.cssPrefix,"-").concat(r):""].filter(T=>u.classes.indexOf(T)===-1).filter(T=>T!==""||!!T).concat(u.classes).join(" ");let h={children:[],attributes:{...u.attributes,"data-prefix":i,"data-icon":r,class:v,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(m)}};const f=g&&!~u.classes.indexOf("fa-fw")?{width:"".concat(d/m*16*.0625,"em")}:{};p&&(h.attributes[rr]=""),o&&(h.children.push({tag:"title",attributes:{id:h.attributes["aria-labelledby"]||"title-".concat(c||Ps())},children:[o]}),delete h.attributes.title);const x={...h,prefix:i,iconName:r,main:e,mask:t,maskId:l,transform:s,symbol:a,styles:{...f,...u.styles}},{children:_,attributes:M}=t.found&&e.found?Ti("generateAbstractMask",x)||{children:[],attributes:{}}:Ti("generateAbstractIcon",x)||{children:[],attributes:{}};return x.children=_,x.attributes=M,a?Hm(x):Vm(x)}function Qu(n){const{content:e,width:t,height:i,transform:r,title:s,extra:a,watchable:o=!1}=n,l={...a.attributes,...s?{title:s}:{},class:a.classes.join(" ")};o&&(l[rr]="");const c={...a.styles};kc(r)&&(c.transform=ym({transform:r,startCentered:!0,width:t,height:i}),c["-webkit-transform"]=c.transform);const u=po(c);u.length>0&&(l.style=u);const p=[];return p.push({tag:"span",attributes:l,children:[e]}),s&&p.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),p}function Gm(n){const{content:e,title:t,extra:i}=n,r={...i.attributes,...t?{title:t}:{},class:i.classes.join(" ")},s=po(i.styles);s.length>0&&(r.style=s);const a=[];return a.push({tag:"span",attributes:r,children:[e]}),t&&a.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),a}const{styles:ko}=Bn;function Ul(n){const e=n[0],t=n[1],[i]=n.slice(4);let r=null;return Array.isArray(i)?r={tag:"g",attributes:{class:"".concat(_e.cssPrefix,"-").concat(No.GROUP)},children:[{tag:"path",attributes:{class:"".concat(_e.cssPrefix,"-").concat(No.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(_e.cssPrefix,"-").concat(No.PRIMARY),fill:"currentColor",d:i[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:t,icon:r}}const Wm={found:!1,width:512,height:512};function Xm(n,e){!vd&&!_e.showMissingIcons&&n&&console.error('Icon with name "'.concat(n,'" and prefix "').concat(e,'" is missing.'))}function Nl(n,e){let t=e;return e==="fa"&&_e.styleDefault!==null&&(e=Ai()),new Promise((i,r)=>{if(t==="fa"){const s=Id(n)||{};n=s.iconName||n,e=s.prefix||e}if(n&&e&&ko[e]&&ko[e][n]){const s=ko[e][n];return i(Ul(s))}Xm(n,e),i({...Wm,icon:_e.showMissingIcons&&n?Ti("missingIconAbstract")||{}:{}})})}const Ju=()=>{},Ol=_e.measurePerformance&&$s&&$s.mark&&$s.measure?$s:{mark:Ju,measure:Ju},ms='FA "6.6.0"',qm=n=>(Ol.mark("".concat(ms," ").concat(n," begins")),()=>Ud(n)),Ud=n=>{Ol.mark("".concat(ms," ").concat(n," ends")),Ol.measure("".concat(ms," ").concat(n),"".concat(ms," ").concat(n," begins"),"".concat(ms," ").concat(n," ends"))};var Gc={begin:qm,end:Ud};const Aa=()=>{};function ef(n){return typeof(n.getAttribute?n.getAttribute(rr):null)=="string"}function jm(n){const e=n.getAttribute?n.getAttribute(Nc):null,t=n.getAttribute?n.getAttribute(Oc):null;return e&&t}function Ym(n){return n&&n.classList&&n.classList.contains&&n.classList.contains(_e.replacementClass)}function $m(){return _e.autoReplaceSvg===!0?Ta.replace:Ta[_e.autoReplaceSvg]||Ta.replace}function Zm(n){return ht.createElementNS("http://www.w3.org/2000/svg",n)}function Km(n){return ht.createElement(n)}function Nd(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:t=n.tag==="svg"?Zm:Km}=e;if(typeof n=="string")return ht.createTextNode(n);const i=t(n.tag);return Object.keys(n.attributes||[]).forEach(function(s){i.setAttribute(s,n.attributes[s])}),(n.children||[]).forEach(function(s){i.appendChild(Nd(s,{ceFn:t}))}),i}function Qm(n){let e=" ".concat(n.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Ta={replace:function(n){const e=n[0];if(e.parentNode)if(n[1].forEach(t=>{e.parentNode.insertBefore(Nd(t),e)}),e.getAttribute(rr)===null&&_e.keepOriginalSource){let t=ht.createComment(Qm(e));e.parentNode.replaceChild(t,e)}else e.remove()},nest:function(n){const e=n[0],t=n[1];if(~Fc(e).indexOf(_e.replacementClass))return Ta.replace(n);const i=new RegExp("".concat(_e.cssPrefix,"-.*"));if(delete t[0].attributes.id,t[0].attributes.class){const s=t[0].attributes.class.split(" ").reduce((a,o)=>(o===_e.replacementClass||o.match(i)?a.toSvg.push(o):a.toNode.push(o),a),{toNode:[],toSvg:[]});t[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const r=t.map(s=>Fs(s)).join(`
`);e.setAttribute(rr,""),e.innerHTML=r}};function tf(n){n()}function Od(n,e){const t=typeof e=="function"?e:Aa;if(n.length===0)t();else{let i=tf;_e.mutateApproach===sm&&(i=wi.requestAnimationFrame||tf),i(()=>{const r=$m(),s=Gc.begin("mutate");n.map(r),s(),t()})}}let Wc=!1;function Fd(){Wc=!0}function Fl(){Wc=!1}let ja=null;function nf(n){if(!Wu||!_e.observeMutations)return;const{treeCallback:e=Aa,nodeCallback:t=Aa,pseudoElementsCallback:i=Aa,observeMutationsRoot:r=ht}=n;ja=new Wu(s=>{if(Wc)return;const a=Ai();Qr(s).forEach(o=>{if(o.type==="childList"&&o.addedNodes.length>0&&!ef(o.addedNodes[0])&&(_e.searchPseudoElements&&i(o.target),e(o.target)),o.type==="attributes"&&o.target.parentNode&&_e.searchPseudoElements&&i(o.target.parentNode),o.type==="attributes"&&ef(o.target)&&~fm.indexOf(o.attributeName))if(o.attributeName==="class"&&jm(o.target)){const{prefix:l,iconName:c}=go(Fc(o.target));o.target.setAttribute(Nc,l||a),c&&o.target.setAttribute(Oc,c)}else Ym(o.target)&&t(o.target)})}),si&&ja.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Jm(){ja&&ja.disconnect()}function e1(n){const e=n.getAttribute("style");let t=[];return e&&(t=e.split(";").reduce((i,r)=>{const s=r.split(":"),a=s[0],o=s.slice(1);return a&&o.length>0&&(i[a]=o.join(":").trim()),i},{})),t}function t1(n){const e=n.getAttribute("data-prefix"),t=n.getAttribute("data-icon"),i=n.innerText!==void 0?n.innerText.trim():"";let r=go(Fc(n));return r.prefix||(r.prefix=Ai()),e&&t&&(r.prefix=e,r.iconName=t),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=Lm(r.prefix,n.innerText)||Bc(r.prefix,Pl(n.innerText))),!r.iconName&&_e.autoFetchSvg&&n.firstChild&&n.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=n.firstChild.data)),r}function n1(n){const e=Qr(n.attributes).reduce((r,s)=>(r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r),{}),t=n.getAttribute("title"),i=n.getAttribute("data-fa-title-id");return _e.autoA11y&&(t?e["aria-labelledby"]="".concat(_e.replacementClass,"-title-").concat(i||Ps()):(e["aria-hidden"]="true",e.focusable="false")),e}function i1(){return{iconName:null,title:null,titleId:null,prefix:null,transform:zn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function rf(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:t,prefix:i,rest:r}=t1(n),s=n1(n),a=Il("parseNodeAttributes",{},n);let o=e.styleParser?e1(n):[];return{iconName:t,title:n.getAttribute("title"),titleId:n.getAttribute("data-fa-title-id"),prefix:i,transform:zn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:o,attributes:s},...a}}const{styles:r1}=Bn;function kd(n){const e=_e.autoReplaceSvg==="nest"?rf(n,{styleParser:!1}):rf(n);return~e.extra.classes.indexOf(yd)?Ti("generateLayersText",n,e):Ti("generateSvgReplacementMutation",n,e)}let Hn=new Set;_d.map(n=>{Hn.add("fa-".concat(n))});Object.keys(Qi[mt]).map(Hn.add.bind(Hn));Object.keys(Qi[hn]).map(Hn.add.bind(Hn));Object.keys(Qi[dn]).map(Hn.add.bind(Hn));Hn=[...Hn];function sf(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!si)return Promise.resolve();const t=ht.documentElement.classList,i=u=>t.add("".concat(ju,"-").concat(u)),r=u=>t.remove("".concat(ju,"-").concat(u)),s=_e.autoFetchSvg?Hn:_d.map(u=>"fa-".concat(u)).concat(Object.keys(r1));s.includes("fa")||s.push("fa");const a=[".".concat(yd,":not([").concat(rr,"])")].concat(s.map(u=>".".concat(u,":not([").concat(rr,"])"))).join(", ");if(a.length===0)return Promise.resolve();let o=[];try{o=Qr(n.querySelectorAll(a))}catch{}if(o.length>0)i("pending"),r("complete");else return Promise.resolve();const l=Gc.begin("onTree"),c=o.reduce((u,p)=>{try{const d=kd(p);d&&u.push(d)}catch(d){vd||d.name==="MissingIcon"&&console.error(d)}return u},[]);return new Promise((u,p)=>{Promise.all(c).then(d=>{Od(d,()=>{i("active"),i("complete"),r("pending"),typeof e=="function"&&e(),l(),u()})}).catch(d=>{l(),p(d)})})}function s1(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;kd(n).then(t=>{t&&Od([t],e)})}function a1(n){return function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=(e||{}).icon?e:Dl(e||{});let{mask:r}=t;return r&&(r=(r||{}).icon?r:Dl(r||{})),n(i,{...t,mask:r})}}const o1=function(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:t=zn,symbol:i=!1,mask:r=null,maskId:s=null,title:a=null,titleId:o=null,classes:l=[],attributes:c={},styles:u={}}=e;if(!n)return;const{prefix:p,iconName:d,icon:m}=n;return vo({type:"icon",...n},()=>(sr("beforeDOMElementCreation",{iconDefinition:n,params:e}),_e.autoA11y&&(a?c["aria-labelledby"]="".concat(_e.replacementClass,"-title-").concat(o||Ps()):(c["aria-hidden"]="true",c.focusable="false")),Hc({icons:{main:Ul(m),mask:r?Ul(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:d,transform:{...zn,...t},symbol:i,title:a,maskId:s,titleId:o,extra:{attributes:c,styles:u,classes:l}})))};var l1={mixout(){return{icon:a1(o1)}},hooks(){return{mutationObserverCallbacks(n){return n.treeCallback=sf,n.nodeCallback=s1,n}}},provides(n){n.i2svg=function(e){const{node:t=ht,callback:i=()=>{}}=e;return sf(t,i)},n.generateSvgReplacementMutation=function(e,t){const{iconName:i,title:r,titleId:s,prefix:a,transform:o,symbol:l,mask:c,maskId:u,extra:p}=t;return new Promise((d,m)=>{Promise.all([Nl(i,a),c.iconName?Nl(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(g=>{let[v,h]=g;d([e,Hc({icons:{main:v,mask:h},prefix:a,iconName:i,transform:o,symbol:l,maskId:u,title:r,titleId:s,extra:p,watchable:!0})])}).catch(m)})},n.generateAbstractIcon=function(e){let{children:t,attributes:i,main:r,transform:s,styles:a}=e;const o=po(a);o.length>0&&(i.style=o);let l;return kc(s)&&(l=Ti("generateAbstractTransformGrouping",{main:r,transform:s,containerWidth:r.width,iconWidth:r.width})),t.push(l||r.icon),{children:t,attributes:i}}}},c1={mixout(){return{layer(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:t=[]}=e;return vo({type:"layer"},()=>{sr("beforeDOMElementCreation",{assembler:n,params:e});let i=[];return n(r=>{Array.isArray(r)?r.map(s=>{i=i.concat(s.abstract)}):i=i.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(_e.cssPrefix,"-layers"),...t].join(" ")},children:i}]})}}}},u1={mixout(){return{counter(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:t=null,classes:i=[],attributes:r={},styles:s={}}=e;return vo({type:"counter",content:n},()=>(sr("beforeDOMElementCreation",{content:n,params:e}),Gm({content:n.toString(),title:t,extra:{attributes:r,styles:s,classes:["".concat(_e.cssPrefix,"-layers-counter"),...i]}})))}}}},f1={mixout(){return{text(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:t=zn,title:i=null,classes:r=[],attributes:s={},styles:a={}}=e;return vo({type:"text",content:n},()=>(sr("beforeDOMElementCreation",{content:n,params:e}),Qu({content:n,transform:{...zn,...t},title:i,extra:{attributes:s,styles:a,classes:["".concat(_e.cssPrefix,"-layers-text"),...r]}})))}}},provides(n){n.generateLayersText=function(e,t){const{title:i,transform:r,extra:s}=t;let a=null,o=null;if(fd){const l=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();a=c.width/l,o=c.height/l}return _e.autoA11y&&!i&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,Qu({content:e.innerHTML,width:a,height:o,transform:r,title:i,extra:s,watchable:!0})])}}};const h1=new RegExp('"',"ug"),af=[1105920,1112319],of={FontAwesome:{normal:"fas",400:"fas"},...jp,...qp,...tm},kl=Object.keys(of).reduce((n,e)=>(n[e.toLowerCase()]=of[e],n),{}),d1=Object.keys(kl).reduce((n,e)=>{const t=kl[e];return n[e]=t[900]||[...Object.entries(t)][0][1],n},{});function p1(n){const e=n.replace(h1,""),t=wm(e,0),i=t>=af[0]&&t<=af[1],r=e.length===2?e[0]===e[1]:!1;return{value:Pl(r?e[0]:e),isSecondary:i||r}}function m1(n,e){const t=n.replace(/^['"]|['"]$/g,"").toLowerCase(),i=parseInt(e),r=isNaN(i)?"normal":i;return(kl[t]||{})[r]||d1[t]}function lf(n,e){const t="".concat(rm).concat(e.replace(":","-"));return new Promise((i,r)=>{if(n.getAttribute(t)!==null)return i();const a=Qr(n.children).filter(d=>d.getAttribute(Al)===e)[0],o=wi.getComputedStyle(n,e),l=o.getPropertyValue("font-family"),c=l.match(cm),u=o.getPropertyValue("font-weight"),p=o.getPropertyValue("content");if(a&&!c)return n.removeChild(a),i();if(c&&p!=="none"&&p!==""){const d=o.getPropertyValue("content");let m=m1(l,u);const{value:g,isSecondary:v}=p1(d),h=c[0].startsWith("FontAwesome");let f=Bc(m,g),x=f;if(h){const _=Im(g);_.iconName&&_.prefix&&(f=_.iconName,m=_.prefix)}if(f&&!v&&(!a||a.getAttribute(Nc)!==m||a.getAttribute(Oc)!==x)){n.setAttribute(t,x),a&&n.removeChild(a);const _=i1(),{extra:M}=_;M.attributes[Al]=e,Nl(f,m).then(T=>{const w=Hc({..._,icons:{main:T,mask:Vc()},prefix:m,iconName:x,extra:M,watchable:!0}),A=ht.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?n.insertBefore(A,n.firstChild):n.appendChild(A),A.outerHTML=w.map(I=>Fs(I)).join(`
`),n.removeAttribute(t),i()}).catch(r)}else i()}else i()})}function g1(n){return Promise.all([lf(n,"::before"),lf(n,"::after")])}function v1(n){return n.parentNode!==document.head&&!~am.indexOf(n.tagName.toUpperCase())&&!n.getAttribute(Al)&&(!n.parentNode||n.parentNode.tagName!=="svg")}function cf(n){if(si)return new Promise((e,t)=>{const i=Qr(n.querySelectorAll("*")).filter(v1).map(g1),r=Gc.begin("searchPseudoElements");Fd(),Promise.all(i).then(()=>{r(),Fl(),e()}).catch(()=>{r(),Fl(),t()})})}var _1={hooks(){return{mutationObserverCallbacks(n){return n.pseudoElementsCallback=cf,n}}},provides(n){n.pseudoElements2svg=function(e){const{node:t=ht}=e;_e.searchPseudoElements&&cf(t)}}};let uf=!1;var x1={mixout(){return{dom:{unwatch(){Fd(),uf=!0}}}},hooks(){return{bootstrap(){nf(Il("mutationObserverCallbacks",{}))},noAuto(){Jm()},watch(n){const{observeMutationsRoot:e}=n;uf?Fl():nf(Il("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const ff=n=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce((t,i)=>{const r=i.toLowerCase().split("-"),s=r[0];let a=r.slice(1).join("-");if(s&&a==="h")return t.flipX=!0,t;if(s&&a==="v")return t.flipY=!0,t;if(a=parseFloat(a),isNaN(a))return t;switch(s){case"grow":t.size=t.size+a;break;case"shrink":t.size=t.size-a;break;case"left":t.x=t.x-a;break;case"right":t.x=t.x+a;break;case"up":t.y=t.y-a;break;case"down":t.y=t.y+a;break;case"rotate":t.rotate=t.rotate+a;break}return t},e)};var y1={mixout(){return{parse:{transform:n=>ff(n)}}},hooks(){return{parseNodeAttributes(n,e){const t=e.getAttribute("data-fa-transform");return t&&(n.transform=ff(t)),n}}},provides(n){n.generateAbstractTransformGrouping=function(e){let{main:t,transform:i,containerWidth:r,iconWidth:s}=e;const a={transform:"translate(".concat(r/2," 256)")},o="translate(".concat(i.x*32,", ").concat(i.y*32,") "),l="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),u={transform:"".concat(o," ").concat(l," ").concat(c)},p={transform:"translate(".concat(s/2*-1," -256)")},d={outer:a,inner:u,path:p};return{tag:"g",attributes:{...d.outer},children:[{tag:"g",attributes:{...d.inner},children:[{tag:t.icon.tag,children:t.icon.children,attributes:{...t.icon.attributes,...d.path}}]}]}}}};const zo={x:0,y:0,width:"100%",height:"100%"};function hf(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||e)&&(n.attributes.fill="black"),n}function M1(n){return n.tag==="g"?n.children:[n]}var S1={hooks(){return{parseNodeAttributes(n,e){const t=e.getAttribute("data-fa-mask"),i=t?go(t.split(" ").map(r=>r.trim())):Vc();return i.prefix||(i.prefix=Ai()),n.mask=i,n.maskId=e.getAttribute("data-fa-mask-id"),n}}},provides(n){n.generateAbstractMask=function(e){let{children:t,attributes:i,main:r,mask:s,maskId:a,transform:o}=e;const{width:l,icon:c}=r,{width:u,icon:p}=s,d=xm({transform:o,containerWidth:u,iconWidth:l}),m={tag:"rect",attributes:{...zo,fill:"white"}},g=c.children?{children:c.children.map(hf)}:{},v={tag:"g",attributes:{...d.inner},children:[hf({tag:c.tag,attributes:{...c.attributes,...d.path},...g})]},h={tag:"g",attributes:{...d.outer},children:[v]},f="mask-".concat(a||Ps()),x="clip-".concat(a||Ps()),_={tag:"mask",attributes:{...zo,id:f,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[m,h]},M={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:M1(p)},_]};return t.push(M,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(f,")"),...zo}}),{children:t,attributes:i}}}},E1={provides(n){let e=!1;wi.matchMedia&&(e=wi.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){const t=[],i={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};t.push({tag:"path",attributes:{...i,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const s={...r,attributeName:"opacity"},a={tag:"circle",attributes:{...i,cx:"256",cy:"364",r:"28"},children:[]};return e||a.children.push({tag:"animate",attributes:{...r,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...s,values:"1;0;1;1;0;1;"}}),t.push(a),t.push({tag:"path",attributes:{...i,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...s,values:"1;0;0;0;0;1;"}}]}),e||t.push({tag:"path",attributes:{...i,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...s,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:t}}}},b1={hooks(){return{parseNodeAttributes(n,e){const t=e.getAttribute("data-fa-symbol"),i=t===null?!1:t===""?!0:t;return n.symbol=i,n}}}},w1=[Sm,l1,c1,u1,f1,_1,x1,y1,S1,E1,b1];Om(w1,{mixoutsTo:mn});mn.noAuto;mn.config;mn.library;mn.dom;const zl=mn.parse;mn.findIconDefinition;mn.toHtml;const A1=mn.icon;mn.layer;mn.text;mn.counter;function df(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function Un(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?df(Object(t),!0).forEach(function(i){Cr(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):df(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function Ya(n){"@babel/helpers - typeof";return Ya=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ya(n)}function Cr(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function T1(n,e){if(n==null)return{};var t={},i=Object.keys(n),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(t[r]=n[r]);return t}function R1(n,e){if(n==null)return{};var t=T1(n,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(t[i]=n[i])}return t}function Bl(n){return C1(n)||P1(n)||L1(n)||I1()}function C1(n){if(Array.isArray(n))return Vl(n)}function P1(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function L1(n,e){if(n){if(typeof n=="string")return Vl(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Vl(n,e)}}function Vl(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function I1(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D1(n){var e,t=n.beat,i=n.fade,r=n.beatFade,s=n.bounce,a=n.shake,o=n.flash,l=n.spin,c=n.spinPulse,u=n.spinReverse,p=n.pulse,d=n.fixedWidth,m=n.inverse,g=n.border,v=n.listItem,h=n.flip,f=n.size,x=n.rotation,_=n.pull,M=(e={"fa-beat":t,"fa-fade":i,"fa-beat-fade":r,"fa-bounce":s,"fa-shake":a,"fa-flash":o,"fa-spin":l,"fa-spin-reverse":u,"fa-spin-pulse":c,"fa-pulse":p,"fa-fw":d,"fa-inverse":m,"fa-border":g,"fa-li":v,"fa-flip":h===!0,"fa-flip-horizontal":h==="horizontal"||h==="both","fa-flip-vertical":h==="vertical"||h==="both"},Cr(e,"fa-".concat(f),typeof f<"u"&&f!==null),Cr(e,"fa-rotate-".concat(x),typeof x<"u"&&x!==null&&x!==0),Cr(e,"fa-pull-".concat(_),typeof _<"u"&&_!==null),Cr(e,"fa-swap-opacity",n.swapOpacity),e);return Object.keys(M).map(function(T){return M[T]?T:null}).filter(function(T){return T})}function U1(n){return n=n-0,n===n}function zd(n){return U1(n)?n:(n=n.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""}),n.substr(0,1).toLowerCase()+n.substr(1))}var N1=["style"];function O1(n){return n.charAt(0).toUpperCase()+n.slice(1)}function F1(n){return n.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var i=t.indexOf(":"),r=zd(t.slice(0,i)),s=t.slice(i+1).trim();return r.startsWith("webkit")?e[O1(r)]=s:e[r]=s,e},{})}function Bd(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var i=(e.children||[]).map(function(l){return Bd(n,l)}),r=Object.keys(e.attributes||{}).reduce(function(l,c){var u=e.attributes[c];switch(c){case"class":l.attrs.className=u,delete e.attributes.class;break;case"style":l.attrs.style=F1(u);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?l.attrs[c.toLowerCase()]=u:l.attrs[zd(c)]=u}return l},{attrs:{}}),s=t.style,a=s===void 0?{}:s,o=R1(t,N1);return r.attrs.style=Un(Un({},r.attrs.style),a),n.apply(void 0,[e.tag,Un(Un({},r.attrs),o)].concat(Bl(i)))}var Vd=!1;try{Vd=!0}catch{}function k1(){if(!Vd&&console&&typeof console.error=="function"){var n;(n=console).error.apply(n,arguments)}}function pf(n){if(n&&Ya(n)==="object"&&n.prefix&&n.iconName&&n.icon)return n;if(zl.icon)return zl.icon(n);if(n===null)return null;if(n&&Ya(n)==="object"&&n.prefix&&n.iconName)return n;if(Array.isArray(n)&&n.length===2)return{prefix:n[0],iconName:n[1]};if(typeof n=="string")return{prefix:"fas",iconName:n}}function Bo(n,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Cr({},n,e):{}}var mf={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Ls=nr.forwardRef(function(n,e){var t=Un(Un({},mf),n),i=t.icon,r=t.mask,s=t.symbol,a=t.className,o=t.title,l=t.titleId,c=t.maskId,u=pf(i),p=Bo("classes",[].concat(Bl(D1(t)),Bl((a||"").split(" ")))),d=Bo("transform",typeof t.transform=="string"?zl.transform(t.transform):t.transform),m=Bo("mask",pf(r)),g=A1(u,Un(Un(Un(Un({},p),d),m),{},{symbol:s,title:o,titleId:l,maskId:c}));if(!g)return k1("Could not find icon",u),null;var v=g.abstract,h={ref:e};return Object.keys(t).forEach(function(f){mf.hasOwnProperty(f)||(h[f]=t[f])}),z1(v[0],h)});Ls.displayName="FontAwesomeIcon";Ls.propTypes={beat:Xe.bool,border:Xe.bool,beatFade:Xe.bool,bounce:Xe.bool,className:Xe.string,fade:Xe.bool,flash:Xe.bool,mask:Xe.oneOfType([Xe.object,Xe.array,Xe.string]),maskId:Xe.string,fixedWidth:Xe.bool,inverse:Xe.bool,flip:Xe.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Xe.oneOfType([Xe.object,Xe.array,Xe.string]),listItem:Xe.bool,pull:Xe.oneOf(["right","left"]),pulse:Xe.bool,rotation:Xe.oneOf([0,90,180,270]),shake:Xe.bool,size:Xe.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Xe.bool,spinPulse:Xe.bool,spinReverse:Xe.bool,symbol:Xe.oneOfType([Xe.bool,Xe.string]),title:Xe.string,titleId:Xe.string,transform:Xe.oneOfType([Xe.string,Xe.object]),swapOpacity:Xe.bool};var z1=Bd.bind(null,nr.createElement),Jt=function(){return Jt=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++){t=arguments[i];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},Jt.apply(this,arguments)};function $a(n,e,t){if(t||arguments.length===2)for(var i=0,r=e.length,s;i<r;i++)(s||!(i in e))&&(s||(s=Array.prototype.slice.call(e,0,i)),s[i]=e[i]);return n.concat(s||Array.prototype.slice.call(e))}var ct="-ms-",bs="-moz-",et="-webkit-",Hd="comm",_o="rule",Xc="decl",B1="@import",Gd="@keyframes",V1="@layer",Wd=Math.abs,qc=String.fromCharCode,Hl=Object.assign;function H1(n,e){return Nt(n,0)^45?(((e<<2^Nt(n,0))<<2^Nt(n,1))<<2^Nt(n,2))<<2^Nt(n,3):0}function Xd(n){return n.trim()}function Kn(n,e){return(n=e.exec(n))?n[0]:n}function Ve(n,e,t){return n.replace(e,t)}function Ra(n,e,t){return n.indexOf(e,t)}function Nt(n,e){return n.charCodeAt(e)|0}function Vr(n,e,t){return n.slice(e,t)}function Nn(n){return n.length}function qd(n){return n.length}function gs(n,e){return e.push(n),n}function G1(n,e){return n.map(e).join("")}function gf(n,e){return n.filter(function(t){return!Kn(t,e)})}var xo=1,Hr=1,jd=0,yn=0,Ct=0,Jr="";function yo(n,e,t,i,r,s,a,o){return{value:n,root:e,parent:t,type:i,props:r,children:s,line:xo,column:Hr,length:a,return:"",siblings:o}}function xi(n,e){return Hl(yo("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},e)}function cr(n){for(;n.root;)n=xi(n.root,{children:[n]});gs(n,n.siblings)}function W1(){return Ct}function X1(){return Ct=yn>0?Nt(Jr,--yn):0,Hr--,Ct===10&&(Hr=1,xo--),Ct}function Cn(){return Ct=yn<jd?Nt(Jr,yn++):0,Hr++,Ct===10&&(Hr=1,xo++),Ct}function er(){return Nt(Jr,yn)}function Ca(){return yn}function Mo(n,e){return Vr(Jr,n,e)}function Gl(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function q1(n){return xo=Hr=1,jd=Nn(Jr=n),yn=0,[]}function j1(n){return Jr="",n}function Vo(n){return Xd(Mo(yn-1,Wl(n===91?n+2:n===40?n+1:n)))}function Y1(n){for(;(Ct=er())&&Ct<33;)Cn();return Gl(n)>2||Gl(Ct)>3?"":" "}function $1(n,e){for(;--e&&Cn()&&!(Ct<48||Ct>102||Ct>57&&Ct<65||Ct>70&&Ct<97););return Mo(n,Ca()+(e<6&&er()==32&&Cn()==32))}function Wl(n){for(;Cn();)switch(Ct){case n:return yn;case 34:case 39:n!==34&&n!==39&&Wl(Ct);break;case 40:n===41&&Wl(n);break;case 92:Cn();break}return yn}function Z1(n,e){for(;Cn()&&n+Ct!==57;)if(n+Ct===84&&er()===47)break;return"/*"+Mo(e,yn-1)+"*"+qc(n===47?n:Cn())}function K1(n){for(;!Gl(er());)Cn();return Mo(n,yn)}function Q1(n){return j1(Pa("",null,null,null,[""],n=q1(n),0,[0],n))}function Pa(n,e,t,i,r,s,a,o,l){for(var c=0,u=0,p=a,d=0,m=0,g=0,v=1,h=1,f=1,x=0,_="",M=r,T=s,w=i,A=_;h;)switch(g=x,x=Cn()){case 40:if(g!=108&&Nt(A,p-1)==58){Ra(A+=Ve(Vo(x),"&","&\f"),"&\f",Wd(c?o[c-1]:0))!=-1&&(f=-1);break}case 34:case 39:case 91:A+=Vo(x);break;case 9:case 10:case 13:case 32:A+=Y1(g);break;case 92:A+=$1(Ca()-1,7);continue;case 47:switch(er()){case 42:case 47:gs(J1(Z1(Cn(),Ca()),e,t,l),l);break;default:A+="/"}break;case 123*v:o[c++]=Nn(A)*f;case 125*v:case 59:case 0:switch(x){case 0:case 125:h=0;case 59+u:f==-1&&(A=Ve(A,/\f/g,"")),m>0&&Nn(A)-p&&gs(m>32?_f(A+";",i,t,p-1,l):_f(Ve(A," ","")+";",i,t,p-2,l),l);break;case 59:A+=";";default:if(gs(w=vf(A,e,t,c,u,r,o,_,M=[],T=[],p,s),s),x===123)if(u===0)Pa(A,e,w,w,M,s,p,o,T);else switch(d===99&&Nt(A,3)===110?100:d){case 100:case 108:case 109:case 115:Pa(n,w,w,i&&gs(vf(n,w,w,0,0,r,o,_,r,M=[],p,T),T),r,T,p,o,i?M:T);break;default:Pa(A,w,w,w,[""],T,0,o,T)}}c=u=m=0,v=f=1,_=A="",p=a;break;case 58:p=1+Nn(A),m=g;default:if(v<1){if(x==123)--v;else if(x==125&&v++==0&&X1()==125)continue}switch(A+=qc(x),x*v){case 38:f=u>0?1:(A+="\f",-1);break;case 44:o[c++]=(Nn(A)-1)*f,f=1;break;case 64:er()===45&&(A+=Vo(Cn())),d=er(),u=p=Nn(_=A+=K1(Ca())),x++;break;case 45:g===45&&Nn(A)==2&&(v=0)}}return s}function vf(n,e,t,i,r,s,a,o,l,c,u,p){for(var d=r-1,m=r===0?s:[""],g=qd(m),v=0,h=0,f=0;v<i;++v)for(var x=0,_=Vr(n,d+1,d=Wd(h=a[v])),M=n;x<g;++x)(M=Xd(h>0?m[x]+" "+_:Ve(_,/&\f/g,m[x])))&&(l[f++]=M);return yo(n,e,t,r===0?_o:o,l,c,u,p)}function J1(n,e,t,i){return yo(n,e,t,Hd,qc(W1()),Vr(n,2,-2),0,i)}function _f(n,e,t,i,r){return yo(n,e,t,Xc,Vr(n,0,i),Vr(n,i+1,-1),i,r)}function Yd(n,e,t){switch(H1(n,e)){case 5103:return et+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return et+n+n;case 4789:return bs+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return et+n+bs+n+ct+n+n;case 5936:switch(Nt(n,e+11)){case 114:return et+n+ct+Ve(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return et+n+ct+Ve(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return et+n+ct+Ve(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return et+n+ct+n+n;case 6165:return et+n+ct+"flex-"+n+n;case 5187:return et+n+Ve(n,/(\w+).+(:[^]+)/,et+"box-$1$2"+ct+"flex-$1$2")+n;case 5443:return et+n+ct+"flex-item-"+Ve(n,/flex-|-self/g,"")+(Kn(n,/flex-|baseline/)?"":ct+"grid-row-"+Ve(n,/flex-|-self/g,""))+n;case 4675:return et+n+ct+"flex-line-pack"+Ve(n,/align-content|flex-|-self/g,"")+n;case 5548:return et+n+ct+Ve(n,"shrink","negative")+n;case 5292:return et+n+ct+Ve(n,"basis","preferred-size")+n;case 6060:return et+"box-"+Ve(n,"-grow","")+et+n+ct+Ve(n,"grow","positive")+n;case 4554:return et+Ve(n,/([^-])(transform)/g,"$1"+et+"$2")+n;case 6187:return Ve(Ve(Ve(n,/(zoom-|grab)/,et+"$1"),/(image-set)/,et+"$1"),n,"")+n;case 5495:case 3959:return Ve(n,/(image-set\([^]*)/,et+"$1$`$1");case 4968:return Ve(Ve(n,/(.+:)(flex-)?(.*)/,et+"box-pack:$3"+ct+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+et+n+n;case 4200:if(!Kn(n,/flex-|baseline/))return ct+"grid-column-align"+Vr(n,e)+n;break;case 2592:case 3360:return ct+Ve(n,"template-","")+n;case 4384:case 3616:return t&&t.some(function(i,r){return e=r,Kn(i.props,/grid-\w+-end/)})?~Ra(n+(t=t[e].value),"span",0)?n:ct+Ve(n,"-start","")+n+ct+"grid-row-span:"+(~Ra(t,"span",0)?Kn(t,/\d+/):+Kn(t,/\d+/)-+Kn(n,/\d+/))+";":ct+Ve(n,"-start","")+n;case 4896:case 4128:return t&&t.some(function(i){return Kn(i.props,/grid-\w+-start/)})?n:ct+Ve(Ve(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return Ve(n,/(.+)-inline(.+)/,et+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Nn(n)-1-e>6)switch(Nt(n,e+1)){case 109:if(Nt(n,e+4)!==45)break;case 102:return Ve(n,/(.+:)(.+)-([^]+)/,"$1"+et+"$2-$3$1"+bs+(Nt(n,e+3)==108?"$3":"$2-$3"))+n;case 115:return~Ra(n,"stretch",0)?Yd(Ve(n,"stretch","fill-available"),e,t)+n:n}break;case 5152:case 5920:return Ve(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,r,s,a,o,l,c){return ct+r+":"+s+c+(a?ct+r+"-span:"+(o?l:+l-+s)+c:"")+n});case 4949:if(Nt(n,e+6)===121)return Ve(n,":",":"+et)+n;break;case 6444:switch(Nt(n,Nt(n,14)===45?18:11)){case 120:return Ve(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+et+(Nt(n,14)===45?"inline-":"")+"box$3$1"+et+"$2$3$1"+ct+"$2box$3")+n;case 100:return Ve(n,":",":"+ct)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Ve(n,"scroll-","scroll-snap-")+n}return n}function Za(n,e){for(var t="",i=0;i<n.length;i++)t+=e(n[i],i,n,e)||"";return t}function eg(n,e,t,i){switch(n.type){case V1:if(n.children.length)break;case B1:case Xc:return n.return=n.return||n.value;case Hd:return"";case Gd:return n.return=n.value+"{"+Za(n.children,i)+"}";case _o:if(!Nn(n.value=n.props.join(",")))return""}return Nn(t=Za(n.children,i))?n.return=n.value+"{"+t+"}":""}function tg(n){var e=qd(n);return function(t,i,r,s){for(var a="",o=0;o<e;o++)a+=n[o](t,i,r,s)||"";return a}}function ng(n){return function(e){e.root||(e=e.return)&&n(e)}}function ig(n,e,t,i){if(n.length>-1&&!n.return)switch(n.type){case Xc:n.return=Yd(n.value,n.length,t);return;case Gd:return Za([xi(n,{value:Ve(n.value,"@","@"+et)})],i);case _o:if(n.length)return G1(t=n.props,function(r){switch(Kn(r,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":cr(xi(n,{props:[Ve(r,/:(read-\w+)/,":"+bs+"$1")]})),cr(xi(n,{props:[r]})),Hl(n,{props:gf(t,i)});break;case"::placeholder":cr(xi(n,{props:[Ve(r,/:(plac\w+)/,":"+et+"input-$1")]})),cr(xi(n,{props:[Ve(r,/:(plac\w+)/,":"+bs+"$1")]})),cr(xi(n,{props:[Ve(r,/:(plac\w+)/,ct+"input-$1")]})),cr(xi(n,{props:[r]})),Hl(n,{props:gf(t,i)});break}return""})}}var rg={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},un={},Gr=typeof process<"u"&&un!==void 0&&(un.REACT_APP_SC_ATTR||un.SC_ATTR)||"data-styled",$d="active",Zd="data-styled-version",So="6.1.13",jc=`/*!sc*/
`,Ka=typeof window<"u"&&"HTMLElement"in window,sg=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&un!==void 0&&un.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&un.REACT_APP_SC_DISABLE_SPEEDY!==""?un.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&un.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&un!==void 0&&un.SC_DISABLE_SPEEDY!==void 0&&un.SC_DISABLE_SPEEDY!==""&&un.SC_DISABLE_SPEEDY!=="false"&&un.SC_DISABLE_SPEEDY),Eo=Object.freeze([]),Wr=Object.freeze({});function ag(n,e,t){return t===void 0&&(t=Wr),n.theme!==t.theme&&n.theme||e||t.theme}var Kd=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),og=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,lg=/(^-|-$)/g;function xf(n){return n.replace(og,"-").replace(lg,"")}var cg=/(a)(d)/gi,Zs=52,yf=function(n){return String.fromCharCode(n+(n>25?39:97))};function Xl(n){var e,t="";for(e=Math.abs(n);e>Zs;e=e/Zs|0)t=yf(e%Zs)+t;return(yf(e%Zs)+t).replace(cg,"$1-$2")}var Ho,Qd=5381,Pr=function(n,e){for(var t=e.length;t;)n=33*n^e.charCodeAt(--t);return n},Jd=function(n){return Pr(Qd,n)};function ug(n){return Xl(Jd(n)>>>0)}function fg(n){return n.displayName||n.name||"Component"}function Go(n){return typeof n=="string"&&!0}var e0=typeof Symbol=="function"&&Symbol.for,t0=e0?Symbol.for("react.memo"):60115,hg=e0?Symbol.for("react.forward_ref"):60112,dg={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},pg={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},mg=((Ho={})[hg]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ho[t0]=n0,Ho);function Mf(n){return("type"in(e=n)&&e.type.$$typeof)===t0?n0:"$$typeof"in n?mg[n.$$typeof]:dg;var e}var gg=Object.defineProperty,vg=Object.getOwnPropertyNames,Sf=Object.getOwnPropertySymbols,_g=Object.getOwnPropertyDescriptor,xg=Object.getPrototypeOf,Ef=Object.prototype;function i0(n,e,t){if(typeof e!="string"){if(Ef){var i=xg(e);i&&i!==Ef&&i0(n,i,t)}var r=vg(e);Sf&&(r=r.concat(Sf(e)));for(var s=Mf(n),a=Mf(e),o=0;o<r.length;++o){var l=r[o];if(!(l in pg||t&&t[l]||a&&l in a||s&&l in s)){var c=_g(e,l);try{gg(n,l,c)}catch{}}}}return n}function Xr(n){return typeof n=="function"}function Yc(n){return typeof n=="object"&&"styledComponentId"in n}function ji(n,e){return n&&e?"".concat(n," ").concat(e):n||e||""}function bf(n,e){if(n.length===0)return"";for(var t=n[0],i=1;i<n.length;i++)t+=n[i];return t}function Is(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function ql(n,e,t){if(t===void 0&&(t=!1),!t&&!Is(n)&&!Array.isArray(n))return e;if(Array.isArray(e))for(var i=0;i<e.length;i++)n[i]=ql(n[i],e[i]);else if(Is(e))for(var i in e)n[i]=ql(n[i],e[i]);return n}function $c(n,e){Object.defineProperty(n,"toString",{value:e})}function ks(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var yg=function(){function n(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return n.prototype.indexOfGroup=function(e){for(var t=0,i=0;i<e;i++)t+=this.groupSizes[i];return t},n.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var i=this.groupSizes,r=i.length,s=r;e>=s;)if((s<<=1)<0)throw ks(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(i),this.length=s;for(var a=r;a<s;a++)this.groupSizes[a]=0}for(var o=this.indexOfGroup(e+1),l=(a=0,t.length);a<l;a++)this.tag.insertRule(o,t[a])&&(this.groupSizes[e]++,o++)},n.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],i=this.indexOfGroup(e),r=i+t;this.groupSizes[e]=0;for(var s=i;s<r;s++)this.tag.deleteRule(i)}},n.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var i=this.groupSizes[e],r=this.indexOfGroup(e),s=r+i,a=r;a<s;a++)t+="".concat(this.tag.getRule(a)).concat(jc);return t},n}(),La=new Map,Qa=new Map,Ia=1,Ks=function(n){if(La.has(n))return La.get(n);for(;Qa.has(Ia);)Ia++;var e=Ia++;return La.set(n,e),Qa.set(e,n),e},Mg=function(n,e){Ia=e+1,La.set(n,e),Qa.set(e,n)},Sg="style[".concat(Gr,"][").concat(Zd,'="').concat(So,'"]'),Eg=new RegExp("^".concat(Gr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),bg=function(n,e,t){for(var i,r=t.split(","),s=0,a=r.length;s<a;s++)(i=r[s])&&n.registerName(e,i)},wg=function(n,e){for(var t,i=((t=e.textContent)!==null&&t!==void 0?t:"").split(jc),r=[],s=0,a=i.length;s<a;s++){var o=i[s].trim();if(o){var l=o.match(Eg);if(l){var c=0|parseInt(l[1],10),u=l[2];c!==0&&(Mg(u,c),bg(n,u,l[3]),n.getTag().insertRules(c,r)),r.length=0}else r.push(o)}}},wf=function(n){for(var e=document.querySelectorAll(Sg),t=0,i=e.length;t<i;t++){var r=e[t];r&&r.getAttribute(Gr)!==$d&&(wg(n,r),r.parentNode&&r.parentNode.removeChild(r))}};function Ag(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var r0=function(n){var e=document.head,t=n||e,i=document.createElement("style"),r=function(o){var l=Array.from(o.querySelectorAll("style[".concat(Gr,"]")));return l[l.length-1]}(t),s=r!==void 0?r.nextSibling:null;i.setAttribute(Gr,$d),i.setAttribute(Zd,So);var a=Ag();return a&&i.setAttribute("nonce",a),t.insertBefore(i,s),i},Tg=function(){function n(e){this.element=r0(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var i=document.styleSheets,r=0,s=i.length;r<s;r++){var a=i[r];if(a.ownerNode===t)return a}throw ks(17)}(this.element),this.length=0}return n.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},n.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},n}(),Rg=function(){function n(e){this.element=r0(e),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var i=document.createTextNode(t);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},n.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},n}(),Cg=function(){function n(e){this.rules=[],this.length=0}return n.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},n.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},n.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},n}(),Af=Ka,Pg={isServer:!Ka,useCSSOMInjection:!sg},s0=function(){function n(e,t,i){e===void 0&&(e=Wr),t===void 0&&(t={});var r=this;this.options=Jt(Jt({},Pg),e),this.gs=t,this.names=new Map(i),this.server=!!e.isServer,!this.server&&Ka&&Af&&(Af=!1,wf(this)),$c(this,function(){return function(s){for(var a=s.getTag(),o=a.length,l="",c=function(p){var d=function(f){return Qa.get(f)}(p);if(d===void 0)return"continue";var m=s.names.get(d),g=a.getGroup(p);if(m===void 0||!m.size||g.length===0)return"continue";var v="".concat(Gr,".g").concat(p,'[id="').concat(d,'"]'),h="";m!==void 0&&m.forEach(function(f){f.length>0&&(h+="".concat(f,","))}),l+="".concat(g).concat(v,'{content:"').concat(h,'"}').concat(jc)},u=0;u<o;u++)c(u);return l}(r)})}return n.registerId=function(e){return Ks(e)},n.prototype.rehydrate=function(){!this.server&&Ka&&wf(this)},n.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new n(Jt(Jt({},this.options),e),this.gs,t&&this.names||void 0)},n.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var i=t.useCSSOMInjection,r=t.target;return t.isServer?new Cg(r):i?new Tg(r):new Rg(r)}(this.options),new yg(e)));var e},n.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},n.prototype.registerName=function(e,t){if(Ks(e),this.names.has(e))this.names.get(e).add(t);else{var i=new Set;i.add(t),this.names.set(e,i)}},n.prototype.insertRules=function(e,t,i){this.registerName(e,t),this.getTag().insertRules(Ks(e),i)},n.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},n.prototype.clearRules=function(e){this.getTag().clearGroup(Ks(e)),this.clearNames(e)},n.prototype.clearTag=function(){this.tag=void 0},n}(),Lg=/&/g,Ig=/^\s*\/\/.*$/gm;function a0(n,e){return n.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(i){return"".concat(e," ").concat(i)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=a0(t.children,e)),t})}function Dg(n){var e,t,i,r=Wr,s=r.options,a=s===void 0?Wr:s,o=r.plugins,l=o===void 0?Eo:o,c=function(d,m,g){return g.startsWith(t)&&g.endsWith(t)&&g.replaceAll(t,"").length>0?".".concat(e):d},u=l.slice();u.push(function(d){d.type===_o&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(Lg,t).replace(i,c))}),a.prefix&&u.push(ig),u.push(eg);var p=function(d,m,g,v){m===void 0&&(m=""),g===void 0&&(g=""),v===void 0&&(v="&"),e=v,t=m,i=new RegExp("\\".concat(t,"\\b"),"g");var h=d.replace(Ig,""),f=Q1(g||m?"".concat(g," ").concat(m," { ").concat(h," }"):h);a.namespace&&(f=a0(f,a.namespace));var x=[];return Za(f,tg(u.concat(ng(function(_){return x.push(_)})))),x};return p.hash=l.length?l.reduce(function(d,m){return m.name||ks(15),Pr(d,m.name)},Qd).toString():"",p}var Ug=new s0,jl=Dg(),o0=nr.createContext({shouldForwardProp:void 0,styleSheet:Ug,stylis:jl});o0.Consumer;nr.createContext(void 0);function Tf(){return it.useContext(o0)}var Ng=function(){function n(e,t){var i=this;this.inject=function(r,s){s===void 0&&(s=jl);var a=i.name+s.hash;r.hasNameForId(i.id,a)||r.insertRules(i.id,a,s(i.rules,a,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,$c(this,function(){throw ks(12,String(i.name))})}return n.prototype.getName=function(e){return e===void 0&&(e=jl),this.name+e.hash},n}(),Og=function(n){return n>="A"&&n<="Z"};function Rf(n){for(var e="",t=0;t<n.length;t++){var i=n[t];if(t===1&&i==="-"&&n[0]==="-")return n;Og(i)?e+="-"+i.toLowerCase():e+=i}return e.startsWith("ms-")?"-"+e:e}var l0=function(n){return n==null||n===!1||n===""},c0=function(n){var e,t,i=[];for(var r in n){var s=n[r];n.hasOwnProperty(r)&&!l0(s)&&(Array.isArray(s)&&s.isCss||Xr(s)?i.push("".concat(Rf(r),":"),s,";"):Is(s)?i.push.apply(i,$a($a(["".concat(r," {")],c0(s),!1),["}"],!1)):i.push("".concat(Rf(r),": ").concat((e=r,(t=s)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in rg||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return i};function tr(n,e,t,i){if(l0(n))return[];if(Yc(n))return[".".concat(n.styledComponentId)];if(Xr(n)){if(!Xr(s=n)||s.prototype&&s.prototype.isReactComponent||!e)return[n];var r=n(e);return tr(r,e,t,i)}var s;return n instanceof Ng?t?(n.inject(t,i),[n.getName(i)]):[n]:Is(n)?c0(n):Array.isArray(n)?Array.prototype.concat.apply(Eo,n.map(function(a){return tr(a,e,t,i)})):[n.toString()]}function Fg(n){for(var e=0;e<n.length;e+=1){var t=n[e];if(Xr(t)&&!Yc(t))return!1}return!0}var kg=Jd(So),zg=function(){function n(e,t,i){this.rules=e,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&Fg(e),this.componentId=t,this.baseHash=Pr(kg,t),this.baseStyle=i,s0.registerId(t)}return n.prototype.generateAndInjectStyles=function(e,t,i){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=ji(r,this.staticRulesId);else{var s=bf(tr(this.rules,e,t,i)),a=Xl(Pr(this.baseHash,s)>>>0);if(!t.hasNameForId(this.componentId,a)){var o=i(s,".".concat(a),void 0,this.componentId);t.insertRules(this.componentId,a,o)}r=ji(r,a),this.staticRulesId=a}else{for(var l=Pr(this.baseHash,i.hash),c="",u=0;u<this.rules.length;u++){var p=this.rules[u];if(typeof p=="string")c+=p;else if(p){var d=bf(tr(p,e,t,i));l=Pr(l,d+u),c+=d}}if(c){var m=Xl(l>>>0);t.hasNameForId(this.componentId,m)||t.insertRules(this.componentId,m,i(c,".".concat(m),void 0,this.componentId)),r=ji(r,m)}}return r},n}(),u0=nr.createContext(void 0);u0.Consumer;var Wo={};function Bg(n,e,t){var i=Yc(n),r=n,s=!Go(n),a=e.attrs,o=a===void 0?Eo:a,l=e.componentId,c=l===void 0?function(M,T){var w=typeof M!="string"?"sc":xf(M);Wo[w]=(Wo[w]||0)+1;var A="".concat(w,"-").concat(ug(So+w+Wo[w]));return T?"".concat(T,"-").concat(A):A}(e.displayName,e.parentComponentId):l,u=e.displayName,p=u===void 0?function(M){return Go(M)?"styled.".concat(M):"Styled(".concat(fg(M),")")}(n):u,d=e.displayName&&e.componentId?"".concat(xf(e.displayName),"-").concat(e.componentId):e.componentId||c,m=i&&r.attrs?r.attrs.concat(o).filter(Boolean):o,g=e.shouldForwardProp;if(i&&r.shouldForwardProp){var v=r.shouldForwardProp;if(e.shouldForwardProp){var h=e.shouldForwardProp;g=function(M,T){return v(M,T)&&h(M,T)}}else g=v}var f=new zg(t,d,i?r.componentStyle:void 0);function x(M,T){return function(w,A,I){var E=w.attrs,y=w.componentStyle,L=w.defaultProps,k=w.foldedComponentIds,O=w.styledComponentId,z=w.target,X=nr.useContext(u0),G=Tf(),$=w.shouldForwardProp||G.shouldForwardProp,W=ag(A,X,L)||Wr,te=function(J,pe,fe){for(var Te,Le=Jt(Jt({},pe),{className:void 0,theme:fe}),ke=0;ke<J.length;ke+=1){var ot=Xr(Te=J[ke])?Te(Le):Te;for(var C in ot)Le[C]=C==="className"?ji(Le[C],ot[C]):C==="style"?Jt(Jt({},Le[C]),ot[C]):ot[C]}return pe.className&&(Le.className=ji(Le.className,pe.className)),Le}(E,A,W),ue=te.as||z,de={};for(var Ae in te)te[Ae]===void 0||Ae[0]==="$"||Ae==="as"||Ae==="theme"&&te.theme===W||(Ae==="forwardedAs"?de.as=te.forwardedAs:$&&!$(Ae,ue)||(de[Ae]=te[Ae]));var Ye=function(J,pe){var fe=Tf(),Te=J.generateAndInjectStyles(pe,fe.styleSheet,fe.stylis);return Te}(y,te),j=ji(k,O);return Ye&&(j+=" "+Ye),te.className&&(j+=" "+te.className),de[Go(ue)&&!Kd.has(ue)?"class":"className"]=j,de.ref=I,it.createElement(ue,de)}(_,M,T)}x.displayName=p;var _=nr.forwardRef(x);return _.attrs=m,_.componentStyle=f,_.displayName=p,_.shouldForwardProp=g,_.foldedComponentIds=i?ji(r.foldedComponentIds,r.styledComponentId):"",_.styledComponentId=d,_.target=i?r.target:n,Object.defineProperty(_,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(M){this._foldedDefaultProps=i?function(T){for(var w=[],A=1;A<arguments.length;A++)w[A-1]=arguments[A];for(var I=0,E=w;I<E.length;I++)ql(T,E[I],!0);return T}({},r.defaultProps,M):M}}),$c(_,function(){return".".concat(_.styledComponentId)}),s&&i0(_,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),_}function Cf(n,e){for(var t=[n[0]],i=0,r=e.length;i<r;i+=1)t.push(e[i],n[i+1]);return t}var Pf=function(n){return Object.assign(n,{isCss:!0})};function Vg(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(Xr(n)||Is(n))return Pf(tr(Cf(Eo,$a([n],e,!0))));var i=n;return e.length===0&&i.length===1&&typeof i[0]=="string"?tr(i):Pf(tr(Cf(i,e)))}function Yl(n,e,t){if(t===void 0&&(t=Wr),!e)throw ks(1,e);var i=function(r){for(var s=[],a=1;a<arguments.length;a++)s[a-1]=arguments[a];return n(e,t,Vg.apply(void 0,$a([r],s,!1)))};return i.attrs=function(r){return Yl(n,e,Jt(Jt({},t),{attrs:Array.prototype.concat(t.attrs,r).filter(Boolean)}))},i.withConfig=function(r){return Yl(n,e,Jt(Jt({},t),r))},i}var f0=function(n){return Yl(Bg,n)},xt=f0;Kd.forEach(function(n){xt[n]=f0(n)});const Ot=xt.button`
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
`,h0=xt.div`
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
`;const d0=xt.input.attrs({type:"range"})`
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
`,Hg=xt.div`
	display: flex;
	flex-direction: column;
	align-items: ${({$reverse:n})=>n?"flex-start":"flex-end"};
	justify-content: center;
	margin: ${({$reverse:n})=>n?"2px -26px 0 0":"2px 0 0 -26px"};
`,Lf=xt.div`
	display: flex;
	flex-direction: ${({$reverse:n})=>n?"row-reverse":"row"};
	align-items: center;
	justify-content: center;
`;xt.div`
	display: flex;
	flex-direction: column;
	height: 50px;
	justify-content: space-between;
`;const Et=xt(Ls)`
	height: 14px;
	min-height: 14px;
	max-height: 14px;
	width: 14px;
	min-width: 14px;
	max-width: 14px;
`,Gg=()=>P.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[P.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M7 13.125a7 7 0 1 0 14 0v1.75a7 7 0 0 1-14 0v-1.75Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}}),P.jsx("path",{stroke:"#fff",strokeWidth:.55,d:"M14 19.863a6.738 6.738 0 1 0 0-13.476 6.738 6.738 0 0 0 0 13.476Z",style:{stroke:"#fff",strokeOpacity:1}}),P.jsx("path",{fill:"#fff",d:"M16.529 16.1h-.893l-1.653-2.713-1.68 2.713h-.832l2.074-3.255-1.942-2.992h.875l1.531 2.45 1.54-2.45h.831l-1.933 2.975 2.082 3.272Z",style:{fill:"#fff",fillOpacity:1}})]}),Wg=()=>P.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[P.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M7 13.125a7 7 0 1 0 14 0v1.75a7 7 0 0 1-14 0v-1.75Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}}),P.jsx("path",{stroke:"#fff",strokeWidth:.55,d:"M14 19.863a6.738 6.738 0 1 0 0-13.476 6.738 6.738 0 0 0 0 13.476Z",style:{stroke:"#fff",strokeOpacity:1}}),P.jsx("path",{fill:"#fff",d:"m14.086 12.924 1.627-3.071h.849l-2.083 3.823V16.1h-.787v-2.389L11.61 9.853h.857l1.619 3.07Z",style:{fill:"#fff",fillOpacity:1}})]}),Xg=()=>P.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[P.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M7 13.125a7 7 0 1 0 14 0v1.75a7 7 0 0 1-14 0v-1.75Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}}),P.jsx("path",{stroke:"#fff",strokeWidth:.55,d:"M14 19.863a6.738 6.738 0 1 0 0-13.476 6.738 6.738 0 0 0 0 13.476Z",style:{stroke:"#fff",strokeOpacity:1}}),P.jsx("path",{fill:"#fff",d:"m15.975 16.1-.753-1.934h-2.476l-.744 1.934h-.796l2.441-6.274h.709l2.432 6.274h-.813Zm-1.69-4.524a29.052 29.052 0 0 1-.21-.63 5.175 5.175 0 0 0-.087-.306c-.029.117-.06.236-.096.359-.03.116-.061.224-.096.323-.03.1-.056.184-.079.254l-.709 1.89h1.978l-.7-1.89Z",style:{fill:"#fff",fillOpacity:1}})]}),qg=()=>P.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[P.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M7 13.125a7 7 0 1 0 14 0v1.75a7 7 0 0 1-14 0v-1.75Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}}),P.jsx("path",{stroke:"#fff",strokeWidth:.55,d:"M14 19.863a6.738 6.738 0 1 0 0-13.476 6.738 6.738 0 0 0 0 13.476Z",style:{stroke:"#fff",strokeOpacity:1}}),P.jsx("path",{fill:"#fff",d:"M13.876 9.853c.519 0 .954.05 1.304.148.355.1.62.263.796.49.18.228.271.531.271.91 0 .245-.047.464-.14.656a1.198 1.198 0 0 1-.402.473 1.62 1.62 0 0 1-.648.254v.043c.262.041.499.117.709.228.216.11.385.268.507.473.123.204.184.47.184.796 0 .379-.088.703-.262.971a1.663 1.663 0 0 1-.753.604c-.32.134-.706.201-1.155.201h-2.196V9.853h1.785Zm.157 2.66c.537 0 .905-.085 1.103-.254.198-.175.297-.432.297-.77 0-.344-.122-.59-.367-.735-.24-.152-.624-.228-1.155-.228h-1.033v1.986h1.155Zm-1.155.656v2.266h1.26c.555 0 .94-.108 1.155-.324.216-.216.324-.498.324-.849 0-.221-.05-.414-.149-.577-.093-.163-.254-.289-.481-.376-.222-.093-.525-.14-.91-.14h-1.199Z",style:{fill:"#fff",fillOpacity:1}})]}),jg=()=>P.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[P.jsx("path",{stroke:"#fff",strokeWidth:.5,d:"M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z",style:{stroke:"#fff",strokeOpacity:1}}),P.jsx("path",{fill:"#fff",d:"M12.642 17.325v-6.247h.787v5.547h2.73v.7h-3.517ZM14.479 6.389a.525.525 0 0 1-.782 0l-2.235-2.495a.525.525 0 0 1 .39-.875h4.47c.454 0 .694.537.391.875L14.478 6.39Z",style:{fill:"#fff",fillOpacity:1}}),P.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"m13.045 6.711-1.093-1.22a8.75 8.75 0 1 0 4.24.036L15.11 6.733A7.352 7.352 0 0 1 14 21.35a7.35 7.35 0 0 1-.955-14.639Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}})]}),Yg=()=>P.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[P.jsx("path",{stroke:"#fff",strokeWidth:.7,d:"M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z",style:{stroke:"#fff",strokeOpacity:1}}),P.jsx("path",{fill:"#fff",d:"M13.938 11.077c.52 0 .945.068 1.278.202.338.128.59.323.752.586.164.262.245.592.245.989 0 .332-.06.61-.183.83-.123.223-.28.4-.473.535a2.61 2.61 0 0 1-.595.306l1.715 2.8h-.919l-1.513-2.581h-1.243v2.58h-.787v-6.247h1.723Zm-.043.683h-.893v2.319h.936c.339 0 .616-.044.832-.132a.956.956 0 0 0 .472-.402c.105-.175.158-.394.158-.656 0-.274-.056-.493-.167-.657a.905.905 0 0 0-.49-.358c-.221-.076-.504-.114-.848-.114ZM14.479 6.389a.525.525 0 0 1-.782 0l-2.235-2.495a.525.525 0 0 1 .39-.875h4.47c.454 0 .694.537.391.875L14.478 6.39Z",style:{fill:"#fff",fillOpacity:1}}),P.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"m13.045 6.711-1.093-1.22a8.75 8.75 0 1 0 4.24.036L15.11 6.733A7.352 7.352 0 0 1 14 21.35a7.35 7.35 0 0 1-.955-14.639Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}})]}),$g=()=>P.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[P.jsx("path",{stroke:"#fff",strokeWidth:1.5,d:"M14 22.05a8.05 8.05 0 1 0 0-16.1 8.05 8.05 0 0 0 0 16.1Z",style:{stroke:"#fff",strokeOpacity:1}}),P.jsx("path",{stroke:"#fff",strokeWidth:.75,d:"M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z",style:{stroke:"#fff",strokeOpacity:1}}),P.jsx("path",{fill:"#fff",d:"M12.642 17.325v-6.248h.787v5.548h2.73v.7h-3.517ZM13.697.611a.525.525 0 0 1 .782 0l2.234 2.495a.525.525 0 0 1-.39.875h-4.47a.525.525 0 0 1-.391-.875L13.697.61Z",style:{fill:"#fff",fillOpacity:1}})]}),Zg=()=>P.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[P.jsx("path",{stroke:"#fff",strokeWidth:1.5,d:"M14 22.05a8.05 8.05 0 1 0 0-16.1 8.05 8.05 0 0 0 0 16.1Z",style:{stroke:"#fff",strokeOpacity:1}}),P.jsx("path",{stroke:"#fff",strokeWidth:.75,d:"M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z",style:{stroke:"#fff",strokeOpacity:1}}),P.jsx("path",{fill:"#fff",d:"M12.642 17.325v-6.248h.787v5.548h2.73v.7h-3.517ZM14.479 27.389a.525.525 0 0 1-.782 0l-2.235-2.495a.525.525 0 0 1 .39-.875h4.47c.454 0 .694.537.391.875l-2.235 2.495Z",style:{fill:"#fff",fillOpacity:1}})]}),Kg=()=>P.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[P.jsx("path",{stroke:"#fff",strokeWidth:1.5,d:"M14 22.05a8.05 8.05 0 1 0 0-16.1 8.05 8.05 0 0 0 0 16.1Z",style:{stroke:"#fff",strokeOpacity:1}}),P.jsx("path",{stroke:"#fff",strokeWidth:.75,d:"M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z",style:{stroke:"#fff",strokeOpacity:1}}),P.jsx("path",{fill:"#fff",d:"M12.642 17.325v-6.248h.787v5.548h2.73v.7h-3.517ZM.611 14.303a.525.525 0 0 1 0-.782l2.495-2.234a.525.525 0 0 1 .875.39v4.47a.525.525 0 0 1-.875.391L.61 14.303Z",style:{fill:"#fff",fillOpacity:1}})]}),Qg=()=>P.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[P.jsx("path",{stroke:"#fff",strokeWidth:1.5,d:"M14 22.05a8.05 8.05 0 1 0 0-16.1 8.05 8.05 0 0 0 0 16.1Z",style:{stroke:"#fff",strokeOpacity:1}}),P.jsx("path",{stroke:"#fff",strokeWidth:.75,d:"M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z",style:{stroke:"#fff",strokeOpacity:1}}),P.jsx("path",{fill:"#fff",d:"M12.642 17.325v-6.248h.787v5.548h2.73v.7h-3.517ZM27.389 13.521a.525.525 0 0 1 0 .782l-2.495 2.235a.525.525 0 0 1-.875-.39v-4.47c0-.454.537-.694.875-.391l2.495 2.234Z",style:{fill:"#fff",fillOpacity:1}})]}),Jg=()=>P.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[P.jsx("path",{stroke:"#fff",strokeWidth:1.5,d:"M14 22.05a8.05 8.05 0 1 0 0-16.1 8.05 8.05 0 0 0 0 16.1Z",style:{stroke:"#fff",strokeOpacity:1}}),P.jsx("path",{stroke:"#fff",strokeWidth:.75,d:"M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z",style:{stroke:"#fff",strokeOpacity:1}}),P.jsx("path",{fill:"#fff",d:"M13.938 11.077c.52 0 .945.068 1.278.202.338.128.59.323.752.586.164.262.245.592.245.989 0 .332-.06.61-.183.83-.123.223-.28.4-.473.535a2.61 2.61 0 0 1-.595.306l1.715 2.8h-.919l-1.513-2.581h-1.243v2.58h-.787v-6.247h1.723Zm-.043.683h-.893v2.319h.936c.339 0 .616-.044.832-.132a.956.956 0 0 0 .472-.402c.105-.175.158-.394.158-.656 0-.274-.056-.493-.167-.657a.905.905 0 0 0-.49-.358c-.221-.076-.504-.114-.848-.114ZM13.697.611a.525.525 0 0 1 .782 0l2.234 2.495a.525.525 0 0 1-.39.875h-4.47a.525.525 0 0 1-.391-.875L13.697.61Z",style:{fill:"#fff",fillOpacity:1}})]}),e2=()=>P.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[P.jsx("path",{stroke:"#fff",strokeWidth:1.5,d:"M14 22.05a8.05 8.05 0 1 0 0-16.1 8.05 8.05 0 0 0 0 16.1Z",style:{stroke:"#fff",strokeOpacity:1}}),P.jsx("path",{stroke:"#fff",strokeWidth:.75,d:"M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z",style:{stroke:"#fff",strokeOpacity:1}}),P.jsx("path",{fill:"#fff",d:"M13.938 11.077c.52 0 .945.068 1.278.202.338.128.59.323.752.586.164.262.245.592.245.989 0 .332-.06.61-.183.83-.123.223-.28.4-.473.535a2.61 2.61 0 0 1-.595.306l1.715 2.8h-.919l-1.513-2.581h-1.243v2.58h-.787v-6.247h1.723Zm-.043.683h-.893v2.319h.936c.339 0 .616-.044.832-.132a.956.956 0 0 0 .472-.402c.105-.175.158-.394.158-.656 0-.274-.056-.493-.167-.657a.905.905 0 0 0-.49-.358c-.221-.076-.504-.114-.848-.114ZM14.479 27.389a.525.525 0 0 1-.782 0l-2.235-2.495a.525.525 0 0 1 .39-.875h4.47c.454 0 .694.537.391.875l-2.235 2.495Z",style:{fill:"#fff",fillOpacity:1}})]}),t2=()=>P.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[P.jsx("path",{stroke:"#fff",strokeWidth:1.5,d:"M14 22.05a8.05 8.05 0 1 0 0-16.1 8.05 8.05 0 0 0 0 16.1Z",style:{stroke:"#fff",strokeOpacity:1}}),P.jsx("path",{stroke:"#fff",strokeWidth:.75,d:"M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z",style:{stroke:"#fff",strokeOpacity:1}}),P.jsx("path",{fill:"#fff",d:"M13.938 11.077c.52 0 .945.068 1.278.202.338.128.59.323.752.586.164.262.245.592.245.989 0 .332-.06.61-.183.83-.123.223-.28.4-.473.535a2.61 2.61 0 0 1-.595.306l1.715 2.8h-.919l-1.513-2.581h-1.243v2.58h-.787v-6.247h1.723Zm-.043.683h-.893v2.319h.936c.339 0 .616-.044.832-.132a.956.956 0 0 0 .472-.402c.105-.175.158-.394.158-.656 0-.274-.056-.493-.167-.657a.905.905 0 0 0-.49-.358c-.221-.076-.504-.114-.848-.114ZM.611 14.303a.525.525 0 0 1 0-.782l2.495-2.234a.525.525 0 0 1 .875.39v4.47a.525.525 0 0 1-.875.391L.61 14.303Z",style:{fill:"#fff",fillOpacity:1}})]}),n2=()=>P.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[P.jsx("path",{stroke:"#fff",strokeWidth:1.5,d:"M14 22.05a8.05 8.05 0 1 0 0-16.1 8.05 8.05 0 0 0 0 16.1Z",style:{stroke:"#fff",strokeOpacity:1}}),P.jsx("path",{stroke:"#fff",strokeWidth:.75,d:"M14 19.95a5.95 5.95 0 1 0 0-11.9 5.95 5.95 0 0 0 0 11.9Z",style:{stroke:"#fff",strokeOpacity:1}}),P.jsx("path",{fill:"#fff",d:"M13.938 11.077c.52 0 .945.068 1.278.202.338.128.59.323.752.586.164.262.245.592.245.989 0 .332-.06.61-.183.83-.123.223-.28.4-.473.535a2.61 2.61 0 0 1-.595.306l1.715 2.8h-.919l-1.513-2.581h-1.243v2.58h-.787v-6.247h1.723Zm-.043.683h-.893v2.319h.936c.339 0 .616-.044.832-.132a.956.956 0 0 0 .472-.402c.105-.175.158-.394.158-.656 0-.274-.056-.493-.167-.657a.905.905 0 0 0-.49-.358c-.221-.076-.504-.114-.848-.114ZM27.389 13.521a.525.525 0 0 1 0 .782l-2.495 2.235a.525.525 0 0 1-.875-.39v-4.47c0-.454.537-.694.875-.391l2.495 2.234Z",style:{fill:"#fff",fillOpacity:1}})]}),i2=()=>P.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[P.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M7.525 7.875c-2.283 1.22-3.82 3.507-3.82 6.125s1.537 4.904 3.82 6.125C4.405 19.425 2.1 16.948 2.1 14s2.306-5.425 5.425-6.125Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}}),P.jsx("path",{stroke:"#fff",strokeWidth:.7,d:"M24.702 10.954a2.187 2.187 0 0 0-2.095-2.817H11.025a5.863 5.863 0 0 0 0 11.726h9.377c.966 0 1.818-.634 2.095-1.56l2.205-7.35Z",style:{stroke:"#fff",strokeOpacity:1}}),P.jsx("path",{fill:"#fff",d:"M10.594 17.15v-6.248h.788v5.548h2.73v.7h-3.518Zm7.13-3.299h2.162v3.063c-.338.11-.68.192-1.024.245a7.837 7.837 0 0 1-1.172.078c-.648 0-1.193-.128-1.637-.385a2.567 2.567 0 0 1-1.015-1.11c-.227-.485-.34-1.057-.34-1.716 0-.653.127-1.219.384-1.697a2.699 2.699 0 0 1 1.103-1.112c.484-.268 1.067-.402 1.75-.402.35 0 .68.032.988.096.315.064.607.155.875.271l-.297.683a4.55 4.55 0 0 0-.753-.254 3.453 3.453 0 0 0-.857-.105c-.496 0-.922.102-1.278.306a2.004 2.004 0 0 0-.813.875c-.187.374-.28.82-.28 1.34 0 .495.078.935.236 1.32.163.38.417.677.761.893.344.21.796.315 1.356.315.187 0 .35-.006.49-.018.146-.017.277-.037.394-.06.123-.024.236-.047.341-.07V14.55h-1.373v-.7Z",style:{fill:"#fff",fillOpacity:1}})]}),r2=()=>P.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[P.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M20.441 7.875c2.283 1.22 3.82 3.507 3.82 6.125s-1.537 4.904-3.82 6.125c3.12-.7 5.425-3.177 5.425-6.125s-2.305-5.425-5.425-6.125Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}}),P.jsx("path",{stroke:"#fff",strokeWidth:.7,d:"M3.264 10.954a2.187 2.187 0 0 1 2.095-2.817h11.582a5.862 5.862 0 0 1 0 11.726H7.564a2.188 2.188 0 0 1-2.095-1.56l-2.205-7.35Z",style:{stroke:"#fff",strokeOpacity:1}}),P.jsx("path",{fill:"#fff",d:"M9.497 10.902c.519 0 .945.068 1.277.202.339.128.59.323.753.586.163.262.245.592.245.989 0 .332-.062.61-.184.83-.122.223-.28.4-.472.535-.187.128-.386.23-.595.306l1.714 2.8h-.918l-1.514-2.581H8.56v2.58h-.787v-6.247h1.724Zm-.044.683H8.56v2.319h.937c.338 0 .615-.044.831-.132a.956.956 0 0 0 .473-.402c.104-.175.157-.394.157-.656 0-.274-.055-.493-.166-.657a.905.905 0 0 0-.49-.358c-.222-.076-.505-.114-.849-.114Zm6.476 2.266h2.16v3.063c-.337.11-.679.192-1.023.245a7.837 7.837 0 0 1-1.172.078c-.648 0-1.193-.128-1.637-.385a2.568 2.568 0 0 1-1.015-1.11c-.227-.485-.34-1.057-.34-1.716 0-.653.127-1.219.384-1.697a2.699 2.699 0 0 1 1.103-1.112c.484-.268 1.067-.402 1.75-.402.35 0 .68.032.988.096.315.064.607.155.875.271l-.297.683a4.551 4.551 0 0 0-.753-.254 3.453 3.453 0 0 0-.857-.105c-.496 0-.922.102-1.278.306a2.004 2.004 0 0 0-.813.875c-.187.374-.28.82-.28 1.34 0 .495.078.935.236 1.32.163.38.417.677.761.893.344.21.796.315 1.356.315.187 0 .35-.006.49-.018a5.17 5.17 0 0 0 .394-.06c.123-.024.236-.047.341-.07V14.55H15.93v-.7Z",style:{fill:"#fff",fillOpacity:1}})]}),s2=()=>P.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[P.jsx("path",{stroke:"#fff",strokeWidth:.7,d:"M14 20.212a7.612 7.612 0 1 0 0-15.224 7.612 7.612 0 0 0 0 15.224Z",style:{stroke:"#fff",strokeOpacity:1}}),P.jsx("path",{fill:"#fff",d:"M10.209 15.662V9.415h.787v5.548h2.73v.7H10.21Zm6.395 0h-.787v-5.556h-1.952v-.691h4.682v.691h-1.943v5.556Z",style:{fill:"#fff",fillOpacity:1}}),P.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M21.235 17.5a8.31 8.31 0 0 1-7.205 4.165A8.31 8.31 0 0 1 6.825 17.5c.823 3.4 3.737 5.915 7.205 5.915 3.469 0 6.382-2.514 7.205-5.915Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}})]}),a2=()=>P.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[P.jsx("path",{stroke:"#fff",strokeWidth:.7,d:"M14 20.212a7.612 7.612 0 1 0 0-15.224 7.612 7.612 0 0 0 0 15.224Z",style:{stroke:"#fff",strokeOpacity:1}}),P.jsx("path",{fill:"#fff",d:"M11.42 9.415c.52 0 .945.067 1.277.201.339.129.59.324.753.587.163.262.245.592.245.988 0 .333-.061.61-.184.832-.122.221-.28.4-.472.533-.187.129-.385.23-.595.307l1.715 2.8h-.92l-1.513-2.582h-1.242v2.582h-.788V9.415h1.724Zm-.044.683h-.892v2.318h.936c.338 0 .615-.043.831-.131a.956.956 0 0 0 .473-.402c.105-.175.157-.394.157-.657 0-.274-.055-.493-.166-.656a.905.905 0 0 0-.49-.359c-.222-.075-.505-.114-.849-.114Zm5.74 5.564h-.787v-5.556h-1.951v-.691h4.681v.691h-1.942v5.556Z",style:{fill:"#fff",fillOpacity:1}}),P.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M21.235 17.5a8.31 8.31 0 0 1-7.205 4.165A8.31 8.31 0 0 1 6.825 17.5c.823 3.4 3.737 5.915 7.205 5.915 3.469 0 6.382-2.514 7.205-5.915Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}})]}),o2=()=>P.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[P.jsx("path",{stroke:"#fff",d:"m20.01 15.768-4.242 4.242a5.5 5.5 0 1 1-7.778-7.778l4.242-4.242a5.5 5.5 0 1 1 7.778 7.778Z",style:{stroke:"#fff",strokeOpacity:1}}),P.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M11.172 16.828a1 1 0 0 0 1.414 0L15.414 14l.707.707-2.828 2.828a2 2 0 1 1-2.829-2.828l.708.707a1 1 0 0 0 0 1.414ZM12.586 14l2.828-2.829a1 1 0 1 1 1.414 1.415l.708.707a2 2 0 0 0-2.829-2.829l-2.828 2.829.707.707Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}}),P.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M15.414 16.828 18.243 14a3 3 0 0 0-2.289-5.117l-.869-.869a4 4 0 0 1 3.864 6.693l-2.828 2.828-.707-.707Zm-.707 2.122a4 4 0 1 1-5.657-5.657l4.243-4.243.707.707L9.757 14A3 3 0 1 0 14 18.242l.707.708Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}})]}),l2=()=>P.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:[P.jsx("path",{stroke:"#fff",d:"m15.768 7.99 4.242 4.242a5.5 5.5 0 1 1-7.778 7.778L7.99 15.768a5.5 5.5 0 1 1 7.778-7.778Z",style:{stroke:"#fff",strokeOpacity:1}}),P.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M16.828 16.828a1 1 0 0 0 0-1.414L14 12.586l.707-.707 2.828 2.828a2 2 0 1 1-2.828 2.828l.707-.707a1 1 0 0 0 1.414 0ZM14 15.414l-2.828-2.828a1 1 0 0 1 1.414-1.414l.707-.708a2 2 0 0 0-2.829 2.829l2.829 2.828.707-.707Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}}),P.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M16.828 12.586 14 9.757a3 3 0 0 0-5.117 2.289l-.869.869a4 4 0 0 1 6.693-3.864l2.828 2.828-.707.707Zm2.122.707a4 4 0 1 1-5.657 5.657L9.05 14.707 9.757 14 14 18.243A3 3 0 1 0 18.243 14l.707-.707Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}})]}),c2={"x-button-left":Gg,"y-button-left":Wg,"a-button-right":Xg,"b-button-right":qg,"thumbstick-left":jg,"thumbstick-up-left":$g,"thumbstick-down-left":Zg,"thumbstick-right-left":Qg,"thumbstick-left-left":Kg,"thumbstick-right":Yg,"thumbstick-up-right":Jg,"thumbstick-down-right":e2,"thumbstick-right-right":n2,"thumbstick-left-right":t2,"trigger-left":s2,"trigger-right":a2,"squeeze-left":i2,"squeeze-right":r2,"thumbrest-left":o2,"thumbrest-right":l2},Ds=({buttonName:n,handedness:e})=>{const t=`${n}-${e}`,i=c2[t];return i?P.jsx(i,{}):P.jsx("div",{style:{width:"28px",height:"28px"}})},u2=()=>P.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:28,height:28,fill:"none",children:P.jsx("path",{fill:"#fff",fillRule:"evenodd",d:"M1 11.2A5.2 5.2 0 0 1 6.2 6h15.6a5.2 5.2 0 0 1 5.2 5.2v5.2a5.2 5.2 0 0 1-5.2 5.2h-3.109c-1.149 0-2.199-.65-2.713-1.677l-.199-.398a1.733 1.733 0 0 0-1.55-.958h-.458c-.656 0-1.257.37-1.55.958l-.2.398A3.033 3.033 0 0 1 9.31 21.6H6.2A5.2 5.2 0 0 1 1 16.4v-5.2Zm9.1 2.167a2.6 2.6 0 1 1-5.2 0 2.6 2.6 0 0 1 5.2 0Zm15.538-1.426a.498.498 0 0 0 .141-.542l.002-.002a5.456 5.456 0 0 0-.347-.755l-.104-.178a5.586 5.586 0 0 0-.486-.686.502.502 0 0 0-.54-.15l-1.225.39a4.234 4.234 0 0 0-.968-.56l-.275-1.256a.497.497 0 0 0-.4-.392 5.686 5.686 0 0 0-1.871.003.497.497 0 0 0-.4.391l-.276 1.257a4.234 4.234 0 0 0-.968.559l-1.226-.39a.498.498 0 0 0-.539.15 5.586 5.586 0 0 0-.486.686l-.104.179c-.134.242-.25.492-.347.754a.498.498 0 0 0 .14.542l.953.867a4.26 4.26 0 0 0 0 1.12l-.952.867a.498.498 0 0 0-.141.541c.097.262.213.513.347.755l.104.178c.145.242.308.471.486.687.13.156.346.211.54.15l1.223-.392c.295.226.62.416.968.559l.275 1.256c.044.2.198.359.4.392a5.686 5.686 0 0 0 1.871 0 .497.497 0 0 0 .4-.392l.276-1.256c.347-.143.673-.333.968-.56l1.225.39c.194.062.41.009.54-.15a5.59 5.59 0 0 0 .486-.686l.103-.178a5.45 5.45 0 0 0 .348-.755.498.498 0 0 0-.14-.541l-.954-.867a4.258 4.258 0 0 0 0-1.118l.953-.867ZM20.5 15.967a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Z",clipRule:"evenodd",style:{fill:"#fff",fillOpacity:1}})}),f2=()=>P.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:12,height:16,fill:"none",children:[P.jsx("g",{clipPath:"url(#a)",children:P.jsx("path",{stroke:"#fff",d:"M.5 6.5H6m-5.5 0V5C.5 2.237 2.237.5 5 .5h1m-5.5 6V11c0 2.762 1.737 4.5 4.5 4.5h2c2.762 0 4.5-1.738 4.5-4.5V6.5M6 6.5v-6m0 6h5.5M6 .5h1c2.762 0 4.5 1.737 4.5 4.5v1.5",style:{stroke:"#fff",strokeOpacity:1}})}),P.jsx("path",{fill:"#fff",d:"M.5 6.5H6v-6H5C2.237.5.5 2.237.5 5v1.5Z",style:{fill:"#fff",fillOpacity:1}}),P.jsx("defs",{children:P.jsx("clipPath",{id:"a",children:P.jsx("path",{fill:"#fff",d:"M0 0h12v16H0z",style:{fill:"#fff",fillOpacity:1}})})})]}),h2=()=>P.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:12,height:16,fill:"none",children:[P.jsx("g",{clipPath:"url(#a)",children:P.jsx("path",{stroke:"#fff",d:"M.5 6.5H6m-5.5 0V5C.5 2.237 2.237.5 5 .5h1m-5.5 6V11c0 2.762 1.737 4.5 4.5 4.5h2c2.762 0 4.5-1.738 4.5-4.5V6.5M6 6.5v-6m0 6h5.5M6 .5h1c2.762 0 4.5 1.737 4.5 4.5v1.5",style:{stroke:"#fff",strokeOpacity:1}})}),P.jsx("path",{fill:"#fff",d:"M11.5 6.5H6v-6h1c2.762 0 4.5 1.737 4.5 4.5v1.5Z",style:{fill:"#fff",fillOpacity:1}}),P.jsx("defs",{children:P.jsx("clipPath",{id:"a",children:P.jsx("path",{fill:"#fff",d:"M0 0h12v16H0z",style:{fill:"#fff",fillOpacity:1}})})})]}),d2={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"]},Zc={prefix:"fas",iconName:"fingerprint",icon:[512,512,[],"f577","M48 256C48 141.1 141.1 48 256 48c63.1 0 119.6 28.1 157.8 72.5c8.6 10.1 23.8 11.2 33.8 2.6s11.2-23.8 2.6-33.8C403.3 34.6 333.7 0 256 0C114.6 0 0 114.6 0 256l0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40zm458.5-52.9c-2.7-13-15.5-21.3-28.4-18.5s-21.3 15.5-18.5 28.4c2.9 13.9 4.5 28.3 4.5 43.1l0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40c0-18.1-1.9-35.8-5.5-52.9zM256 80c-19 0-37.4 3-54.5 8.6c-15.2 5-18.7 23.7-8.3 35.9c7.1 8.3 18.8 10.8 29.4 7.9c10.6-2.9 21.8-4.4 33.4-4.4c70.7 0 128 57.3 128 128l0 24.9c0 25.2-1.5 50.3-4.4 75.3c-1.7 14.6 9.4 27.8 24.2 27.8c11.8 0 21.9-8.6 23.3-20.3c3.3-27.4 5-55 5-82.7l0-24.9c0-97.2-78.8-176-176-176zM150.7 148.7c-9.1-10.6-25.3-11.4-33.9-.4C93.7 178 80 215.4 80 256l0 24.9c0 24.2-2.6 48.4-7.8 71.9C68.8 368.4 80.1 384 96.1 384c10.5 0 19.9-7 22.2-17.3c6.4-28.1 9.7-56.8 9.7-85.8l0-24.9c0-27.2 8.5-52.4 22.9-73.1c7.2-10.4 8-24.6-.2-34.2zM256 160c-53 0-96 43-96 96l0 24.9c0 35.9-4.6 71.5-13.8 106.1c-3.8 14.3 6.7 29 21.5 29c9.5 0 17.9-6.2 20.4-15.4c10.5-39 15.9-79.2 15.9-119.7l0-24.9c0-28.7 23.3-52 52-52s52 23.3 52 52l0 24.9c0 36.3-3.5 72.4-10.4 107.9c-2.7 13.9 7.7 27.2 21.8 27.2c10.2 0 19-7 21-17c7.7-38.8 11.6-78.3 11.6-118.1l0-24.9c0-53-43-96-96-96zm24 96c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 24.9c0 59.9-11 119.3-32.5 175.2l-5.9 15.3c-4.8 12.4 1.4 26.3 13.8 31s26.3-1.4 31-13.8l5.9-15.3C267.9 411.9 280 346.7 280 280.9l0-24.9z"]},p2={prefix:"fas",iconName:"caret-right",icon:[256,512,[],"f0da","M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"]},m2={prefix:"fas",iconName:"caret-left",icon:[256,512,[],"f0d9","M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"]},If={prefix:"fas",iconName:"ban",icon:[512,512,[128683,"cancel"],"f05e","M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"]},g2={prefix:"fas",iconName:"arrow-right-to-bracket",icon:[512,512,["sign-in"],"f090","M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"]},p0={prefix:"fas",iconName:"caret-up",icon:[320,512,[],"f0d8","M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l256 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"]},v2={prefix:"fas",iconName:"rotate-left",icon:[512,512,["rotate-back","rotate-backward","undo-alt"],"f2ea","M48.5 224L40 224c-13.3 0-24-10.7-24-24L16 72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8L48.5 224z"]},_2={prefix:"fas",iconName:"circle-play",icon:[512,512,[61469,"play-circle"],"f144","M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"]},x2={prefix:"fas",iconName:"square-arrow-up-right",icon:[448,512,["external-link-square"],"f14c","M384 32c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0zM160 144c-13.3 0-24 10.7-24 24s10.7 24 24 24l94.1 0L119 327c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135L288 328c0 13.3 10.7 24 24 24s24-10.7 24-24l0-160c0-13.3-10.7-24-24-24l-152 0z"]},y2={prefix:"fas",iconName:"keyboard",icon:[576,512,[9e3],"f11c","M64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zm16 64l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM64 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm16 80l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zm80-176c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm16 80l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM160 336c0-8.8 7.2-16 16-16l224 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-224 0c-8.8 0-16-7.2-16-16l0-32zM272 128l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM256 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM368 128l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM352 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM464 128l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM448 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm16 80l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z"]},m0={prefix:"fas",iconName:"caret-down",icon:[320,512,[],"f0d7","M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"]},M2={prefix:"fas",iconName:"delete-left",icon:[576,512,[9003,"backspace"],"f55a","M576 128c0-35.3-28.7-64-64-64L205.3 64c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7L512 448c35.3 0 64-28.7 64-64l0-256zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"]},Df={prefix:"fas",iconName:"angle-up",icon:[448,512,[8963],"f106","M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"]},S2={prefix:"fas",iconName:"arrow-turn-down",icon:[384,512,["level-down"],"f149","M32 64C14.3 64 0 49.7 0 32S14.3 0 32 0l96 0c53 0 96 43 96 96l0 306.7 73.4-73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-128 128c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 402.7 160 96c0-17.7-14.3-32-32-32L32 64z"]},E2={prefix:"fas",iconName:"arrows-up-down",icon:[320,512,["arrows-v"],"f07d","M182.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L128 109.3l0 293.5L86.6 361.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 402.7l0-293.5 41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96z"]},b2={prefix:"fas",iconName:"video",icon:[576,512,["video-camera"],"f03d","M0 128C0 92.7 28.7 64 64 64l256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2l0 256c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1l0-17.1 0-128 0-17.1 14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"]},Qn={KeyA:"A",KeyB:"B",KeyC:"C",KeyD:"D",KeyE:"E",KeyF:"F",KeyG:"G",KeyH:"H",KeyI:"I",KeyJ:"J",KeyK:"K",KeyL:"L",KeyM:"M",KeyN:"N",KeyO:"O",KeyP:"P",KeyQ:"Q",KeyR:"R",KeyS:"S",KeyT:"T",KeyU:"U",KeyV:"V",KeyW:"W",KeyX:"X",KeyY:"Y",KeyZ:"Z",Digit0:"0",Digit1:"1",Digit2:"2",Digit3:"3",Digit4:"4",Digit5:"5",Digit6:"6",Digit7:"7",Digit8:"8",Digit9:"9",Tab:P.jsx(Et,{icon:g2}),Backspace:P.jsx(Et,{icon:M2}),Enter:P.jsx(Et,{style:{transform:"rotate(90deg)"},icon:S2}),ShiftLeft:P.jsx(Et,{icon:Df}),ShiftRight:P.jsx(Et,{icon:Df}),Space:" ",ArrowUp:P.jsx(Et,{icon:p0}),ArrowDown:P.jsx(Et,{icon:m0}),ArrowLeft:P.jsx(Et,{icon:m2}),ArrowRight:P.jsx(Et,{icon:p2}),Semicolon:";",Equal:"=",Comma:",",Minus:"-",Period:".",Slash:"/",Backquote:"`",BracketLeft:"[",Backslash:"\\",BracketRight:"]",Quote:"'",MouseLeft:P.jsx(f2,{}),MouseRight:P.jsx(h2,{})},w2={left:{"thumbstick-up":"KeyW","thumbstick-down":"KeyS","thumbstick-left":"KeyA","thumbstick-right":"KeyD",thumbstick:"KeyR","x-button":"KeyX","y-button":"KeyZ",trigger:"KeyQ",squeeze:"KeyE"},right:{"thumbstick-up":"ArrowUp","thumbstick-down":"ArrowDown","thumbstick-left":"ArrowLeft","thumbstick-right":"ArrowRight",thumbstick:"Slash","a-button":"Enter","b-button":"ShiftRight",trigger:"MouseLeft",squeeze:"MouseRight"}},A2=xt.div`
	display: flex;
	justify-content: space-between;
	pointer-events: all;
	position: fixed;
	display: flex;
	top: 40px;
	left: calc(50vw - 156px);
	width: 312px;
`,Uf=xt.div`
	display: flex;
	flex-direction: column;
	width: 50%;
`,Nf=xt.div`
	display: flex;
	height: 24px;
	align-items: center;
	margin-bottom: 2px;
`,T2=({keyMap:n,setKeyMap:e})=>{const[t,i]=it.useState(null),r=(a,o)=>{i({controller:a,action:o})},s=(a,o)=>{e(l=>({...l,[a]:{...l[a],[o]:"Unmapped"}}))};return it.useEffect(()=>{const a=c=>{t&&Qn[c.code]&&(e(u=>({...u,[t.controller]:{...u[t.controller],[t.action]:c.code}})),i(null))},o=c=>{if(t){const u=c.button===0?"MouseLeft":c.button===2?"MouseRight":null;u&&Qn[u]&&(e(p=>({...p,[t.controller]:{...p[t.controller],[t.action]:u}})),i(null))}},l=c=>{c.preventDefault()};return window.addEventListener("keydown",a),window.addEventListener("mousedown",o),window.addEventListener("contextmenu",l),()=>{window.removeEventListener("keydown",a),window.removeEventListener("mousedown",o),window.removeEventListener("contextmenu",l)}},[t,e]),P.jsxs(A2,{children:[P.jsx(Uf,{children:Object.keys(n.left).map(a=>P.jsxs(Nf,{children:[P.jsx(Ds,{buttonName:a==="up"?"thumbstick":a,handedness:"left"}),P.jsxs(qr,{$reverse:!1,children:[P.jsx(Ot,{$reverse:!1,style:{width:"100px",backgroundColor:t&&t.controller==="left"&&t.action===a?"rgba(255, 255, 255, 0.6)":"rgba(255, 255, 255, 0.3)"},onClick:()=>r("left",a),onContextMenu:o=>o.preventDefault(),children:n.left[a]}),P.jsx(Ot,{style:{width:"24px"},$reverse:!1,onClick:()=>s("left",a),onContextMenu:o=>o.preventDefault(),children:P.jsx(Ls,{icon:If})})]})]},a))}),P.jsx(Uf,{children:Object.keys(n.right).map(a=>P.jsxs(Nf,{children:[P.jsx(Ds,{buttonName:a==="up"?"thumbstick":a,handedness:"right"}),P.jsxs(qr,{$reverse:!1,children:[P.jsx(Ot,{$reverse:!1,style:{width:"100px",backgroundColor:t&&t.controller==="right"&&t.action===a?"rgba(255, 255, 255, 0.6)":"rgba(255, 255, 255, 0.3)"},onClick:()=>r("right",a),onContextMenu:o=>o.preventDefault(),children:n.right[a]}),P.jsx(Ot,{$reverse:!1,style:{width:"24px"},onClick:()=>s("right",a),onContextMenu:o=>o.preventDefault(),children:P.jsx(Ls,{icon:If})})]})]},a))})]})},R2=({xrController:n,buttonId:e,pointerLocked:t,mappedKey:i})=>{const[r,s]=it.useState(!1),[a,o]=it.useState(!1),[l,c]=it.useState(!1),[u,p]=it.useState(0),d=n.inputSource.handedness;return it.useEffect(()=>{const m=f=>{f.code===i&&(n.updateButtonValue(e,1),c(!0))},g=f=>{f.code===i&&(n.updateButtonValue(e,0),c(!1))},v=f=>{(i==="MouseLeft"&&f.button===0||i==="MouseRight"&&f.button===2)&&(n.updateButtonValue(e,1),c(!0))},h=f=>{(i==="MouseLeft"&&f.button===0||i==="MouseRight"&&f.button===2)&&(n.updateButtonValue(e,0),c(!1))};return t?i==="MouseLeft"||i==="MouseRight"?(window.addEventListener("mousedown",v),window.addEventListener("mouseup",h)):(window.addEventListener("keydown",m),window.addEventListener("keyup",g)):i==="MouseLeft"||i==="MouseRight"?(window.removeEventListener("mousedown",v),window.removeEventListener("mouseup",h)):(window.removeEventListener("keydown",m),window.removeEventListener("keyup",g)),()=>{i==="MouseLeft"||i==="MouseRight"?(window.removeEventListener("mousedown",v),window.removeEventListener("mouseup",h)):(window.removeEventListener("keydown",m),window.removeEventListener("keyup",g))}},[i,t,e,n]),P.jsxs(h0,{$reverse:d==="right",children:[P.jsx(Ds,{buttonName:e,handedness:d}),P.jsx(qr,{$reverse:d==="right",children:t?P.jsx(Yt,{$pressed:l,children:Qn[i]}):P.jsxs(P.Fragment,{children:[P.jsx(Ot,{$reverse:d==="right",style:{backgroundColor:a?"rgba(255, 255, 255, 0.6)":"rgba(255, 255, 255, 0.3)",width:"50px"},onClick:()=>{o(!0),n.updateButtonValue(e,1),setTimeout(()=>{o(!1),n.updateButtonValue(e,0)},500)},children:"Press"}),P.jsx(Ot,{$reverse:d==="right",style:{backgroundColor:r?"rgba(255, 255, 255, 0.6)":"rgba(255, 255, 255, 0.3)",width:"29px"},onClick:()=>{s(!r),n.updateButtonTouch(e,!r)},children:P.jsx(Et,{icon:Zc})}),P.jsx(d0,{$reverse:d==="right",value:u,onChange:m=>{const g=Number(m.target.value);p(g),n.updateButtonValue(e,g/100)},min:"0",max:"100"})]})})]})},C2=({xrController:n,buttonId:e,pointerLocked:t,mappedKey:i})=>{const[r,s]=it.useState(!1),[a,o]=it.useState(!1),[l,c]=it.useState(!1),[u,p]=it.useState(!1),d=n.inputSource.handedness;return it.useEffect(()=>{const m=v=>{v.code===i&&(n.updateButtonValue(e,1),p(!0))},g=v=>{v.code===i&&(n.updateButtonValue(e,0),p(!1))};return t?(window.addEventListener("keydown",m),window.addEventListener("keyup",g)):(window.removeEventListener("keydown",m),window.removeEventListener("keyup",g)),()=>{window.removeEventListener("keydown",m),window.removeEventListener("keyup",g)}},[i,t,e,n]),P.jsxs(h0,{$reverse:d==="right",children:[P.jsx(Ds,{buttonName:e,handedness:d}),P.jsx(qr,{$reverse:d==="right",children:t?P.jsx(Yt,{$pressed:u,children:Qn[i]}):P.jsxs(P.Fragment,{children:[P.jsx(Ot,{$reverse:d==="right",style:{backgroundColor:l?"rgba(255, 255, 255, 0.6)":"rgba(255, 255, 255, 0.3)",width:"50px"},onClick:()=>{c(!0),n.updateButtonValue(e,1),setTimeout(()=>{c(!1),n.updateButtonValue(e,0)},500)},children:"Press"}),P.jsx(Ot,{$reverse:d==="right",style:{backgroundColor:r?"rgba(255, 255, 255, 0.6)":"rgba(255, 255, 255, 0.3)",width:"29px"},onClick:()=>{s(!r),n.updateButtonTouch(e,!r)},children:P.jsx(Et,{icon:Zc})}),P.jsx(Ot,{$reverse:d==="right",style:{backgroundColor:a?"rgba(255, 255, 255, 0.6)":"rgba(255, 255, 255, 0.3)",width:"49px"},onClick:()=>{o(!a),n.updateButtonValue(e,a?0:1)},children:"Hold"})]})})]})},P2=xt.div`
	display: flex;
	align-items: center;
	margin-bottom: 2px;
`,L2=xt.button`
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
`,I2=xt.div`
	position: absolute;
	background-color: white;
	border-radius: 50%;
	width: 36px;
	height: 36px;
	cursor: pointer;
	pointer-events: auto;
`,Of=xt(Ot)`
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
`,D2=({xrController:n,pointerLocked:e,buttonId:t,mappedKeyUp:i,mappedKeyDown:r,mappedKeyLeft:s,mappedKeyRight:a,mappedKeyPressed:o})=>{const l=it.useRef(null),[c,u]=it.useState(!1),[p,d]=it.useState(!1),[m,g]=it.useState(!1),[v,h]=it.useState(!1),[f,x]=it.useState({x:0,y:0}),[_,M]=it.useState({up:!1,down:!1,left:!1,right:!1,pressed:!1}),T=n.inputSource.handedness,w=()=>{if(l.current){const E=l.current.getBoundingClientRect();x({x:E.left+E.width/2,y:E.top+E.height/2}),u(!0)}},A=E=>{if(c&&l.current){const y=E.clientX-f.x,L=E.clientY-f.y,k=Math.sqrt(y*y+L*L),O=12;let z,X;if(k<O)z=y,X=L;else{const W=Math.atan2(L,y);z=Math.cos(W)*O,X=Math.sin(W)*O}l.current.style.transform=`translate(${z}px, ${X}px)`;const G=z/O,$=X/O;n.updateAxes(t,G,$)}},I=()=>{u(!1),l.current&&(l.current.style.transform="translate(0, 0)",n.updateAxes(t,0,0))};return it.useEffect(()=>{const E=k=>{const O={..._};k.code===i&&(O.up=!0),k.code===r&&(O.down=!0),k.code===s&&(O.left=!0),k.code===a&&(O.right=!0),k.code===o&&(O.pressed=!0,n.updateButtonValue(t,1)),M(O),L(O)},y=k=>{const O={..._};k.code===i&&(O.up=!1),k.code===r&&(O.down=!1),k.code===s&&(O.left=!1),k.code===a&&(O.right=!1),k.code===o&&(O.pressed=!1,n.updateButtonValue(t,0)),M(O),L(O)},L=k=>{const O=(k.right?1:0)-(k.left?1:0),z=(k.down?1:0)-(k.up?1:0),X=Math.sqrt(O*O+z*z);if(X===0){n.updateAxes(t,0,0);return}const G=O/X,$=z/X;n.updateAxes(t,G,$)};return e?(window.addEventListener("keydown",E),window.addEventListener("keyup",y)):(window.removeEventListener("keydown",E),window.removeEventListener("keyup",y)),()=>{window.removeEventListener("keydown",E),window.removeEventListener("keyup",y)}},[i,r,s,a,e,_]),it.useEffect(()=>(document.addEventListener("mousemove",A),document.addEventListener("mouseup",I),()=>{document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",I)}),[c,f]),P.jsxs(P2,{style:{flexDirection:n.inputSource.handedness==="left"?"row":"row-reverse",alignItems:"flex-start"},children:[P.jsx(Ds,{buttonName:"thumbstick",handedness:n.inputSource.handedness}),e?P.jsxs(Hg,{$reverse:T==="right",children:[P.jsxs(Lf,{$reverse:T==="right",children:[P.jsx(Yt,{$pressed:_.up,style:{margin:"2px"},children:Qn[i]}),P.jsx(Yt,{$pressed:_.pressed,style:{margin:"2px"},children:Qn[o]})]}),P.jsxs(Lf,{$reverse:!1,children:[P.jsx(Yt,{$pressed:_.left,style:{margin:"2px"},children:Qn[s]}),P.jsx(Yt,{$pressed:_.down,style:{margin:"2px"},children:Qn[r]}),P.jsx(Yt,{$pressed:_.right,style:{margin:"2px"},children:Qn[a]})]})]}):P.jsxs(P.Fragment,{children:[P.jsx(L2,{style:{margin:n.inputSource.handedness==="left"?"0 5px 0 -3px":"0 -3px 0 5px"},children:P.jsx(I2,{ref:l,onMouseDown:w})}),P.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[P.jsx(Ot,{$reverse:T==="right",style:{backgroundColor:v?"rgba(255, 255, 255, 0.6)":"rgba(255, 255, 255, 0.3)",width:"80px",marginBottom:"2px",borderRadius:"8px"},onClick:()=>{h(!0),n.updateButtonValue(t,1),setTimeout(()=>{h(!1),n.updateButtonValue(t,0)},500)},children:"Press"}),P.jsxs(qr,{$reverse:T==="right",children:[P.jsx(Of,{$reverse:n.inputSource.handedness!=="left",style:{backgroundColor:p?"rgba(255, 255, 255, 0.6)":"rgba(255, 255, 255, 0.3)",width:"29px"},onClick:()=>{d(!p),n.updateButtonTouch(t,!p)},children:P.jsx(Et,{icon:Zc})}),P.jsx(Of,{$reverse:n.inputSource.handedness!=="left",style:{backgroundColor:m?"rgba(255, 255, 255, 0.6)":"rgba(255, 255, 255, 0.3)",width:"49px"},onClick:()=>{g(!m),n.updateButtonValue(t,m?0:1)},children:"Hold"})]})]})]})]})},U2=xt.div`
	padding: ${({$reverse:n})=>n?"6px 2px 3px 5px":"6px 5px 3px 2px"};
	pointer-events: all;
	background-color: rgba(43, 43, 43, 0.5);
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
	border-radius: ${({$reverse:n})=>n?"12px 0 0 0":"0 12px 0 0"};
`;function N2(n){const e=new Set;for(const i of n.axes)i&&i.id&&e.add(i.id);const t=n.buttons.filter(i=>i!==null).map(i=>({id:i.id,type:i.type,hasAxes:e.has(i.id)}));return t.sort((i,r)=>i.hasAxes&&!r.hasAxes?-1:!i.hasAxes&&r.hasAxes?1:0),t}const O2=({xrDevice:n,keyMap:e,pointerLocked:t})=>P.jsx("div",{style:{display:"flex",justifyContent:"space-between",flexDirection:"row"},children:Object.entries(n.controllers).map(([i,r])=>P.jsx(U2,{$reverse:i!=="left",children:N2(r.gamepadConfig).map(s=>{const a=e[i];return s.hasAxes?P.jsx(D2,{xrController:r,pointerLocked:t,buttonId:s.id,mappedKeyUp:e[i][`${s.id}-up`],mappedKeyDown:a[`${s.id}-down`],mappedKeyLeft:a[`${s.id}-left`],mappedKeyRight:a[`${s.id}-right`],mappedKeyPressed:a[s.id]},s.id):s.type==="analog"?P.jsx(R2,{xrController:r,buttonId:s.id,mappedKey:a[s.id],pointerLocked:t},s.id):P.jsx(C2,{xrController:r,buttonId:s.id,mappedKey:a[s.id],pointerLocked:t},s.id)})},i))}),F2=xt.div`
	display: flex;
	justify-content: center;
	pointer-events: all;
	position: fixed;
	display: flex;
	top: 40px;
	left: calc(50vw - 156px);
	width: 312px;
`,k2=({xrDevice:n,inputLayer:e})=>{const[t,i]=it.useState(n.fovy);return P.jsx(F2,{children:P.jsxs(qr,{$reverse:!1,children:[P.jsx(Ot,{$reverse:!1,disabled:!0,children:"FOV-Y"}),P.jsx(d0,{$reverse:!1,value:t,style:{width:"100px",borderRadius:"2px"},onChange:r=>{const s=Number(r.target.value);i(s),n.fovy=s,e.syncFovy(),e.renderScene()},min:Math.PI/6,max:Math.PI/1.5,step:Math.PI/48}),P.jsxs(Ot,{$reverse:!1,disabled:!0,children:[(t/Math.PI*180).toFixed(2),"°"]})]})})},z2=xt.div`
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
`,Ff=xt.div`
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
`,B2=({xrDevice:n,inputLayer:e,keyMapOpen:t,setKeyMapOpen:i,fovSettingOpen:r,setFovSettingOpen:s})=>P.jsxs("div",{style:{display:"flex",justifyContent:"center"},children:[P.jsxs(z2,{children:[P.jsx(u2,{}),P.jsxs("div",{style:{display:"flex",flexDirection:"row",marginLeft:"4px"},children:[P.jsx(Ot,{$reverse:!1,onClick:()=>{e.resetDeviceTransforms()},children:P.jsx(Et,{icon:v2})}),P.jsx(Ot,{$reverse:!1,onClick:()=>{e.lockPointer(),i(!1),s(!1)},children:P.jsx(Et,{icon:_2})}),P.jsx(Ot,{$reverse:!1,onClick:()=>{i(!t),s(!1)},children:P.jsx(Et,{icon:y2})}),P.jsx(Ot,{$reverse:!1,onClick:()=>{s(!r),i(!1)},children:P.jsx(Et,{icon:b2})}),P.jsx(Ot,{$reverse:!1,onClick:()=>{const a=n.activeSession;a==null||a.end()},children:P.jsx(Et,{icon:d2})})]})]}),P.jsxs(Ff,{$reverse:!1,style:{position:"fixed",left:"0",top:"0"},children:[P.jsxs("div",{children:[P.jsx(Et,{icon:x2,style:{marginRight:"4px"}})," ","Roomscale Movement"]}),P.jsxs("div",{children:[P.jsx(Yt,{$pressed:!1,style:{width:"50px"},children:"L Shift"}),P.jsx("span",{style:{margin:"0 4px"},children:"+"}),P.jsx(Yt,{$pressed:!1,children:"W"}),P.jsx(Yt,{$pressed:!1,children:"A"}),P.jsx(Yt,{$pressed:!1,children:"S"}),P.jsx(Yt,{$pressed:!1,children:"D"})]})]}),P.jsxs(Ff,{$reverse:!0,style:{position:"fixed",right:"0",top:"0"},children:[P.jsxs("div",{children:[P.jsx(Et,{icon:E2,style:{marginRight:"4px"}})," Camera Height"]}),P.jsxs("div",{children:[P.jsx(Yt,{$pressed:!1,style:{width:"50px"},children:"L Shift"}),P.jsx("span",{style:{margin:"0 4px"},children:"+"}),P.jsx(Yt,{$pressed:!1,children:P.jsx(Et,{icon:p0})}),P.jsx(Yt,{$pressed:!1,children:P.jsx(Et,{icon:m0})})]})]})]});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kc="166",V2=0,kf=1,H2=2,g0=1,G2=2,Zn=3,ii=0,tn=1,Fn=2,Ei=0,Nr=1,zf=2,Bf=3,Vf=4,W2=5,Wi=100,X2=101,q2=102,j2=103,Y2=104,$2=200,Z2=201,K2=202,Q2=203,$l=204,Zl=205,J2=206,ev=207,tv=208,nv=209,iv=210,rv=211,sv=212,av=213,ov=214,lv=0,cv=1,uv=2,Ja=3,fv=4,hv=5,dv=6,pv=7,v0=0,mv=1,gv=2,bi=0,vv=1,_v=2,xv=3,yv=4,Mv=5,Sv=6,Ev=7,_0=300,jr=301,Yr=302,Kl=303,Ql=304,bo=306,Jl=1e3,Yi=1001,ec=1002,xn=1003,bv=1004,Qs=1005,wn=1006,Xo=1007,$i=1008,ri=1009,x0=1010,y0=1011,Us=1012,Qc=1013,ar=1014,Jn=1015,zs=1016,Jc=1017,eu=1018,$r=1020,M0=35902,S0=1021,E0=1022,Tn=1023,b0=1024,w0=1025,Or=1026,Zr=1027,A0=1028,tu=1029,T0=1030,nu=1031,iu=1033,Da=33776,Ua=33777,Na=33778,Oa=33779,tc=35840,nc=35841,ic=35842,rc=35843,sc=36196,ac=37492,oc=37496,lc=37808,cc=37809,uc=37810,fc=37811,hc=37812,dc=37813,pc=37814,mc=37815,gc=37816,vc=37817,_c=37818,xc=37819,yc=37820,Mc=37821,Fa=36492,Sc=36494,Ec=36495,R0=36283,bc=36284,wc=36285,Ac=36286,wv=3200,Av=3201,Tv=0,Rv=1,Mi="",Dn="srgb",Ci="srgb-linear",ru="display-p3",wo="display-p3-linear",eo="linear",ut="srgb",to="rec709",no="p3",ur=7680,Hf=519,Cv=512,Pv=513,Lv=514,C0=515,Iv=516,Dv=517,Uv=518,Nv=519,Gf=35044,Wf="300 es",ei=2e3,io=2001;class es{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qo=Math.PI/180,Tc=180/Math.PI;function Bs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function Qt(n,e,t){return Math.max(e,Math.min(t,n))}function Ov(n,e){return(n%e+e)%e}function jo(n,e,t){return(1-t)*n+t*e}function as(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Zt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class qe{constructor(e=0,t=0){qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,i,r,s,a,o,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],p=i[7],d=i[2],m=i[5],g=i[8],v=r[0],h=r[3],f=r[6],x=r[1],_=r[4],M=r[7],T=r[2],w=r[5],A=r[8];return s[0]=a*v+o*x+l*T,s[3]=a*h+o*_+l*w,s[6]=a*f+o*M+l*A,s[1]=c*v+u*x+p*T,s[4]=c*h+u*_+p*w,s[7]=c*f+u*M+p*A,s[2]=d*v+m*x+g*T,s[5]=d*h+m*_+g*w,s[8]=d*f+m*M+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],p=u*a-o*c,d=o*l-u*s,m=c*s-a*l,g=t*p+i*d+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=p*v,e[1]=(r*c-u*i)*v,e[2]=(o*i-r*a)*v,e[3]=d*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=m*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Yo.makeScale(e,t)),this}rotate(e){return this.premultiply(Yo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Yo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Yo=new He;function P0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ro(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Fv(){const n=ro("canvas");return n.style.display="block",n}const Xf={};function L0(n){n in Xf||(Xf[n]=!0,console.warn(n))}function kv(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const qf=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),jf=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Js={[Ci]:{transfer:eo,primaries:to,toReference:n=>n,fromReference:n=>n},[Dn]:{transfer:ut,primaries:to,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[wo]:{transfer:eo,primaries:no,toReference:n=>n.applyMatrix3(jf),fromReference:n=>n.applyMatrix3(qf)},[ru]:{transfer:ut,primaries:no,toReference:n=>n.convertSRGBToLinear().applyMatrix3(jf),fromReference:n=>n.applyMatrix3(qf).convertLinearToSRGB()}},zv=new Set([Ci,wo]),nt={enabled:!0,_workingColorSpace:Ci,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!zv.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Js[e].toReference,r=Js[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Js[n].primaries},getTransfer:function(n){return n===Mi?eo:Js[n].transfer}};function Fr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function $o(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let fr;class Bv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{fr===void 0&&(fr=ro("canvas")),fr.width=e.width,fr.height=e.height;const i=fr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=fr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ro("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Fr(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Fr(t[i]/255)*255):t[i]=Fr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Vv=0;class I0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vv++}),this.uuid=Bs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Zo(r[a].image)):s.push(Zo(r[a]))}else s=Zo(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Zo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Bv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Hv=0;class nn extends es{constructor(e=nn.DEFAULT_IMAGE,t=nn.DEFAULT_MAPPING,i=Yi,r=Yi,s=wn,a=$i,o=Tn,l=ri,c=nn.DEFAULT_ANISOTROPY,u=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hv++}),this.uuid=Bs(),this.name="",this.source=new I0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jl:e.x=e.x-Math.floor(e.x);break;case Yi:e.x=e.x<0?0:1;break;case ec:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jl:e.y=e.y-Math.floor(e.y);break;case Yi:e.y=e.y<0?0:1;break;case ec:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=_0;nn.DEFAULT_ANISOTROPY=1;class Ft{constructor(e=0,t=0,i=0,r=1){Ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],p=l[8],d=l[1],m=l[5],g=l[9],v=l[2],h=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(p-v)<.01&&Math.abs(g-h)<.01){if(Math.abs(u+d)<.1&&Math.abs(p+v)<.1&&Math.abs(g+h)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,M=(m+1)/2,T=(f+1)/2,w=(u+d)/4,A=(p+v)/4,I=(g+h)/4;return _>M&&_>T?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=w/i,s=A/i):M>T?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=w/r,s=I/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=A/s,r=I/s),this.set(i,r,s,t),this}let x=Math.sqrt((h-g)*(h-g)+(p-v)*(p-v)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(h-g)/x,this.y=(p-v)/x,this.z=(d-u)/x,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gv extends es{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new nn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new I0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class or extends Gv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class D0 extends nn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=xn,this.minFilter=xn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Wv extends nn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=xn,this.minFilter=xn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bt{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],p=i[r+3];const d=s[a+0],m=s[a+1],g=s[a+2],v=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=p;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(p!==v||l!==d||c!==m||u!==g){let h=1-o;const f=l*d+c*m+u*g+p*v,x=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){const T=Math.sqrt(_),w=Math.atan2(T,f*x);h=Math.sin(h*w)/T,o=Math.sin(o*w)/T}const M=o*x;if(l=l*h+d*M,c=c*h+m*M,u=u*h+g*M,p=p*h+v*M,h===1-o){const T=1/Math.sqrt(l*l+c*c+u*u+p*p);l*=T,c*=T,u*=T,p*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],p=s[a],d=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+u*p+l*m-c*d,e[t+1]=l*g+u*d+c*p-o*m,e[t+2]=c*g+u*m+o*d-l*p,e[t+3]=u*g-o*p-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),p=o(s/2),d=l(i/2),m=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=d*u*p+c*m*g,this._y=c*m*p-d*u*g,this._z=c*u*g+d*m*p,this._w=c*u*p-d*m*g;break;case"YXZ":this._x=d*u*p+c*m*g,this._y=c*m*p-d*u*g,this._z=c*u*g-d*m*p,this._w=c*u*p+d*m*g;break;case"ZXY":this._x=d*u*p-c*m*g,this._y=c*m*p+d*u*g,this._z=c*u*g+d*m*p,this._w=c*u*p-d*m*g;break;case"ZYX":this._x=d*u*p-c*m*g,this._y=c*m*p+d*u*g,this._z=c*u*g-d*m*p,this._w=c*u*p+d*m*g;break;case"YZX":this._x=d*u*p+c*m*g,this._y=c*m*p+d*u*g,this._z=c*u*g-d*m*p,this._w=c*u*p-d*m*g;break;case"XZY":this._x=d*u*p-c*m*g,this._y=c*m*p-d*u*g,this._z=c*u*g+d*m*p,this._w=c*u*p+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],p=t[10],d=i+o+p;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>p){const m=2*Math.sqrt(1+i-o-p);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>p){const m=2*Math.sqrt(1+o-i-p);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+p-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),p=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*p+this._w*d,this._x=i*p+this._x*d,this._y=r*p+this._y*d,this._z=s*p+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),p=2*(s*i-a*t);return this.x=t+l*c+a*p-o*u,this.y=i+l*u+o*c-s*p,this.z=r+l*p+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ko.copy(this).projectOnVector(e),this.sub(Ko)}reflect(e){return this.sub(Ko.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ko=new D,Yf=new Bt;class Vs{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Sn):Sn.fromBufferAttribute(s,a),Sn.applyMatrix4(e.matrixWorld),this.expandByPoint(Sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ea.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ea.copy(i.boundingBox)),ea.applyMatrix4(e.matrixWorld),this.union(ea)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Sn),Sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(os),ta.subVectors(this.max,os),hr.subVectors(e.a,os),dr.subVectors(e.b,os),pr.subVectors(e.c,os),ci.subVectors(dr,hr),ui.subVectors(pr,dr),Ii.subVectors(hr,pr);let t=[0,-ci.z,ci.y,0,-ui.z,ui.y,0,-Ii.z,Ii.y,ci.z,0,-ci.x,ui.z,0,-ui.x,Ii.z,0,-Ii.x,-ci.y,ci.x,0,-ui.y,ui.x,0,-Ii.y,Ii.x,0];return!Qo(t,hr,dr,pr,ta)||(t=[1,0,0,0,1,0,0,0,1],!Qo(t,hr,dr,pr,ta))?!1:(na.crossVectors(ci,ui),t=[na.x,na.y,na.z],Qo(t,hr,dr,pr,ta))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xn=[new D,new D,new D,new D,new D,new D,new D,new D],Sn=new D,ea=new Vs,hr=new D,dr=new D,pr=new D,ci=new D,ui=new D,Ii=new D,os=new D,ta=new D,na=new D,Di=new D;function Qo(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Di.fromArray(n,s);const o=r.x*Math.abs(Di.x)+r.y*Math.abs(Di.y)+r.z*Math.abs(Di.z),l=e.dot(Di),c=t.dot(Di),u=i.dot(Di);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Xv=new Vs,ls=new D,Jo=new D;class Ao{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Xv.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ls.subVectors(e,this.center);const t=ls.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ls,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ls.copy(e.center).add(Jo)),this.expandByPoint(ls.copy(e.center).sub(Jo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qn=new D,el=new D,ia=new D,fi=new D,tl=new D,ra=new D,nl=new D;class su{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,t),qn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){el.copy(e).add(t).multiplyScalar(.5),ia.copy(t).sub(e).normalize(),fi.copy(this.origin).sub(el);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ia),o=fi.dot(this.direction),l=-fi.dot(ia),c=fi.lengthSq(),u=Math.abs(1-a*a);let p,d,m,g;if(u>0)if(p=a*l-o,d=a*o-l,g=s*u,p>=0)if(d>=-g)if(d<=g){const v=1/u;p*=v,d*=v,m=p*(p+a*d+2*o)+d*(a*p+d+2*l)+c}else d=s,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*l)+c;else d=-s,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*l)+c;else d<=-g?(p=Math.max(0,-(-a*s+o)),d=p>0?-s:Math.min(Math.max(-s,-l),s),m=-p*p+d*(d+2*l)+c):d<=g?(p=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(p=Math.max(0,-(a*s+o)),d=p>0?s:Math.min(Math.max(-s,-l),s),m=-p*p+d*(d+2*l)+c);else d=a>0?-s:s,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(el).addScaledVector(ia,d),m}intersectSphere(e,t){qn.subVectors(e.center,this.origin);const i=qn.dot(this.direction),r=qn.dot(qn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-d.z)*p,l=(e.max.z-d.z)*p):(o=(e.max.z-d.z)*p,l=(e.min.z-d.z)*p),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,t,i,r,s){tl.subVectors(t,e),ra.subVectors(i,e),nl.crossVectors(tl,ra);let a=this.direction.dot(nl),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;fi.subVectors(this.origin,e);const l=o*this.direction.dot(ra.crossVectors(fi,ra));if(l<0)return null;const c=o*this.direction.dot(tl.cross(fi));if(c<0||l+c>a)return null;const u=-o*fi.dot(nl);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(e,t,i,r,s,a,o,l,c,u,p,d,m,g,v,h){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,p,d,m,g,v,h)}set(e,t,i,r,s,a,o,l,c,u,p,d,m,g,v,h){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=p,f[14]=d,f[3]=m,f[7]=g,f[11]=v,f[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/mr.setFromMatrixColumn(e,0).length(),s=1/mr.setFromMatrixColumn(e,1).length(),a=1/mr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const d=a*u,m=a*p,g=o*u,v=o*p;t[0]=l*u,t[4]=-l*p,t[8]=c,t[1]=m+g*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,m=l*p,g=c*u,v=c*p;t[0]=d+v*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*p,t[5]=a*u,t[9]=-o,t[2]=m*o-g,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,m=l*p,g=c*u,v=c*p;t[0]=d-v*o,t[4]=-a*p,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*u,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,m=a*p,g=o*u,v=o*p;t[0]=l*u,t[4]=g*c-m,t[8]=d*c+v,t[1]=l*p,t[5]=v*c+d,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=v-d*p,t[8]=g*p+m,t[1]=p,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*p+g,t[10]=d-v*p}else if(e.order==="XZY"){const d=a*l,m=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=-p,t[8]=c*u,t[1]=d*p+v,t[5]=a*u,t[9]=m*p-g,t[2]=g*p-m,t[6]=o*u,t[10]=v*p+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qv,e,jv)}lookAt(e,t,i){const r=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),hi.crossVectors(i,ln),hi.lengthSq()===0&&(Math.abs(i.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),hi.crossVectors(i,ln)),hi.normalize(),sa.crossVectors(ln,hi),r[0]=hi.x,r[4]=sa.x,r[8]=ln.x,r[1]=hi.y,r[5]=sa.y,r[9]=ln.y,r[2]=hi.z,r[6]=sa.z,r[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],p=i[5],d=i[9],m=i[13],g=i[2],v=i[6],h=i[10],f=i[14],x=i[3],_=i[7],M=i[11],T=i[15],w=r[0],A=r[4],I=r[8],E=r[12],y=r[1],L=r[5],k=r[9],O=r[13],z=r[2],X=r[6],G=r[10],$=r[14],W=r[3],te=r[7],ue=r[11],de=r[15];return s[0]=a*w+o*y+l*z+c*W,s[4]=a*A+o*L+l*X+c*te,s[8]=a*I+o*k+l*G+c*ue,s[12]=a*E+o*O+l*$+c*de,s[1]=u*w+p*y+d*z+m*W,s[5]=u*A+p*L+d*X+m*te,s[9]=u*I+p*k+d*G+m*ue,s[13]=u*E+p*O+d*$+m*de,s[2]=g*w+v*y+h*z+f*W,s[6]=g*A+v*L+h*X+f*te,s[10]=g*I+v*k+h*G+f*ue,s[14]=g*E+v*O+h*$+f*de,s[3]=x*w+_*y+M*z+T*W,s[7]=x*A+_*L+M*X+T*te,s[11]=x*I+_*k+M*G+T*ue,s[15]=x*E+_*O+M*$+T*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],p=e[6],d=e[10],m=e[14],g=e[3],v=e[7],h=e[11],f=e[15];return g*(+s*l*p-r*c*p-s*o*d+i*c*d+r*o*m-i*l*m)+v*(+t*l*m-t*c*d+s*a*d-r*a*m+r*c*u-s*l*u)+h*(+t*c*p-t*o*m-s*a*p+i*a*m+s*o*u-i*c*u)+f*(-r*o*u-t*l*p+t*o*d+r*a*p-i*a*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],p=e[9],d=e[10],m=e[11],g=e[12],v=e[13],h=e[14],f=e[15],x=p*h*c-v*d*c+v*l*m-o*h*m-p*l*f+o*d*f,_=g*d*c-u*h*c-g*l*m+a*h*m+u*l*f-a*d*f,M=u*v*c-g*p*c+g*o*m-a*v*m-u*o*f+a*p*f,T=g*p*l-u*v*l-g*o*d+a*v*d+u*o*h-a*p*h,w=t*x+i*_+r*M+s*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=x*A,e[1]=(v*d*s-p*h*s-v*r*m+i*h*m+p*r*f-i*d*f)*A,e[2]=(o*h*s-v*l*s+v*r*c-i*h*c-o*r*f+i*l*f)*A,e[3]=(p*l*s-o*d*s-p*r*c+i*d*c+o*r*m-i*l*m)*A,e[4]=_*A,e[5]=(u*h*s-g*d*s+g*r*m-t*h*m-u*r*f+t*d*f)*A,e[6]=(g*l*s-a*h*s-g*r*c+t*h*c+a*r*f-t*l*f)*A,e[7]=(a*d*s-u*l*s+u*r*c-t*d*c-a*r*m+t*l*m)*A,e[8]=M*A,e[9]=(g*p*s-u*v*s-g*i*m+t*v*m+u*i*f-t*p*f)*A,e[10]=(a*v*s-g*o*s+g*i*c-t*v*c-a*i*f+t*o*f)*A,e[11]=(u*o*s-a*p*s-u*i*c+t*p*c+a*i*m-t*o*m)*A,e[12]=T*A,e[13]=(u*v*r-g*p*r+g*i*d-t*v*d-u*i*h+t*p*h)*A,e[14]=(g*o*r-a*v*r-g*i*l+t*v*l+a*i*h-t*o*h)*A,e[15]=(a*p*r-u*o*r+u*i*l-t*p*l-a*i*d+t*o*d)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,p=o+o,d=s*c,m=s*u,g=s*p,v=a*u,h=a*p,f=o*p,x=l*c,_=l*u,M=l*p,T=i.x,w=i.y,A=i.z;return r[0]=(1-(v+f))*T,r[1]=(m+M)*T,r[2]=(g-_)*T,r[3]=0,r[4]=(m-M)*w,r[5]=(1-(d+f))*w,r[6]=(h+x)*w,r[7]=0,r[8]=(g+_)*A,r[9]=(h-x)*A,r[10]=(1-(d+v))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=mr.set(r[0],r[1],r[2]).length();const a=mr.set(r[4],r[5],r[6]).length(),o=mr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],En.copy(this);const c=1/s,u=1/a,p=1/o;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=u,En.elements[5]*=u,En.elements[6]*=u,En.elements[8]*=p,En.elements[9]*=p,En.elements[10]*=p,t.setFromRotationMatrix(En),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=ei){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),p=(t+e)/(t-e),d=(i+r)/(i-r);let m,g;if(o===ei)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===io)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=ei){const l=this.elements,c=1/(t-e),u=1/(i-r),p=1/(a-s),d=(t+e)*c,m=(i+r)*u;let g,v;if(o===ei)g=(a+s)*p,v=-2*p;else if(o===io)g=s*p,v=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const mr=new D,En=new _t,qv=new D(0,0,0),jv=new D(1,1,1),hi=new D,sa=new D,ln=new D,$f=new _t,Zf=new Bt;class Gn{constructor(e=0,t=0,i=0,r=Gn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],p=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return $f.makeRotationFromQuaternion(e),this.setFromRotationMatrix($f,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zf.setFromEuler(this),this.setFromQuaternion(Zf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gn.DEFAULT_ORDER="XYZ";class au{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Yv=0;const Kf=new D,gr=new Bt,jn=new _t,aa=new D,cs=new D,$v=new D,Zv=new Bt,Qf=new D(1,0,0),Jf=new D(0,1,0),eh=new D(0,0,1),th={type:"added"},Kv={type:"removed"},vr={type:"childadded",child:null},il={type:"childremoved",child:null};class Vt extends es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yv++}),this.uuid=Bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new D,t=new Gn,i=new Bt,r=new D(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _t},normalMatrix:{value:new He}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new au,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gr.setFromAxisAngle(e,t),this.quaternion.multiply(gr),this}rotateOnWorldAxis(e,t){return gr.setFromAxisAngle(e,t),this.quaternion.premultiply(gr),this}rotateX(e){return this.rotateOnAxis(Qf,e)}rotateY(e){return this.rotateOnAxis(Jf,e)}rotateZ(e){return this.rotateOnAxis(eh,e)}translateOnAxis(e,t){return Kf.copy(e).applyQuaternion(this.quaternion),this.position.add(Kf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qf,e)}translateY(e){return this.translateOnAxis(Jf,e)}translateZ(e){return this.translateOnAxis(eh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?aa.copy(e):aa.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(cs,aa,this.up):jn.lookAt(aa,cs,this.up),this.quaternion.setFromRotationMatrix(jn),r&&(jn.extractRotation(r.matrixWorld),gr.setFromRotationMatrix(jn),this.quaternion.premultiply(gr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(th),vr.child=e,this.dispatchEvent(vr),vr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kv),il.child=e,this.dispatchEvent(il),il.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(th),vr.child=e,this.dispatchEvent(vr),vr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,e,$v),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,Zv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),p=a(e.shapes),d=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),p.length>0&&(i.shapes=p),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Vt.DEFAULT_UP=new D(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new D,Yn=new D,rl=new D,$n=new D,_r=new D,xr=new D,nh=new D,sl=new D,al=new D,ol=new D;class kn{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),bn.subVectors(e,t),r.cross(bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){bn.subVectors(r,t),Yn.subVectors(i,t),rl.subVectors(e,t);const a=bn.dot(bn),o=bn.dot(Yn),l=bn.dot(rl),c=Yn.dot(Yn),u=Yn.dot(rl),p=a*c-o*o;if(p===0)return s.set(0,0,0),null;const d=1/p,m=(c*l-o*u)*d,g=(a*u-o*l)*d;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,$n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,$n.x),l.addScaledVector(a,$n.y),l.addScaledVector(o,$n.z),l)}static isFrontFacing(e,t,i,r){return bn.subVectors(i,t),Yn.subVectors(e,t),bn.cross(Yn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),bn.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return kn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return kn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;_r.subVectors(r,i),xr.subVectors(s,i),sl.subVectors(e,i);const l=_r.dot(sl),c=xr.dot(sl);if(l<=0&&c<=0)return t.copy(i);al.subVectors(e,r);const u=_r.dot(al),p=xr.dot(al);if(u>=0&&p<=u)return t.copy(r);const d=l*p-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(_r,a);ol.subVectors(e,s);const m=_r.dot(ol),g=xr.dot(ol);if(g>=0&&m<=g)return t.copy(s);const v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(xr,o);const h=u*g-m*p;if(h<=0&&p-u>=0&&m-g>=0)return nh.subVectors(s,r),o=(p-u)/(p-u+(m-g)),t.copy(r).addScaledVector(nh,o);const f=1/(h+v+d);return a=v*f,o=d*f,t.copy(i).addScaledVector(_r,a).addScaledVector(xr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const U0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},oa={h:0,s:0,l:0};function ll(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class rt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=nt.workingColorSpace){if(e=Ov(e,1),t=Qt(t,0,1),i=Qt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=ll(a,s,e+1/3),this.g=ll(a,s,e),this.b=ll(a,s,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,t=Dn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dn){const i=U0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fr(e.r),this.g=Fr(e.g),this.b=Fr(e.b),this}copyLinearToSRGB(e){return this.r=$o(e.r),this.g=$o(e.g),this.b=$o(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dn){return nt.fromWorkingColorSpace(Gt.copy(this),e),Math.round(Qt(Gt.r*255,0,255))*65536+Math.round(Qt(Gt.g*255,0,255))*256+Math.round(Qt(Gt.b*255,0,255))}getHexString(e=Dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(Gt.copy(this),t);const i=Gt.r,r=Gt.g,s=Gt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const p=a-o;switch(c=u<=.5?p/(a+o):p/(2-a-o),a){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=Dn){nt.fromWorkingColorSpace(Gt.copy(this),e);const t=Gt.r,i=Gt.g,r=Gt.b;return e!==Dn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(di),this.setHSL(di.h+e,di.s+t,di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(di),e.getHSL(oa);const i=jo(di.h,oa.h,t),r=jo(di.s,oa.s,t),s=jo(di.l,oa.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new rt;rt.NAMES=U0;let Qv=0;class Hs extends es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qv++}),this.uuid=Bs(),this.name="",this.type="Material",this.blending=Nr,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$l,this.blendDst=Zl,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=Ja,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ur,this.stencilZFail=ur,this.stencilZPass=ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Nr&&(i.blending=this.blending),this.side!==ii&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==$l&&(i.blendSrc=this.blendSrc),this.blendDst!==Zl&&(i.blendDst=this.blendDst),this.blendEquation!==Wi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ja&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ur&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ur&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ur&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Gs extends Hs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=v0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rt=new D,la=new qe;class Vn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Gf,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return L0("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)la.fromBufferAttribute(this,t),la.applyMatrix3(e),this.setXY(t,la.x,la.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=as(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Zt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=as(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=as(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=as(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=as(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array),r=Zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array),r=Zt(r,this.array),s=Zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gf&&(e.usage=this.usage),e}}class N0 extends Vn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class O0 extends Vn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class dt extends Vn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Jv=0;const vn=new _t,cl=new Vt,yr=new D,cn=new Vs,us=new Vs,Dt=new D;class $t extends es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jv++}),this.uuid=Bs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(P0(e)?O0:N0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,t,i){return vn.makeTranslation(e,t,i),this.applyMatrix4(vn),this}scale(e,t,i){return vn.makeScale(e,t,i),this.applyMatrix4(vn),this}lookAt(e){return cl.lookAt(e),cl.updateMatrix(),this.applyMatrix4(cl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yr).negate(),this.translate(yr.x,yr.y,yr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new dt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ao);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];us.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(cn.min,us.min),cn.expandByPoint(Dt),Dt.addVectors(cn.max,us.max),cn.expandByPoint(Dt)):(cn.expandByPoint(us.min),cn.expandByPoint(us.max))}cn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Dt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Dt.fromBufferAttribute(o,c),l&&(yr.fromBufferAttribute(e,c),Dt.add(yr)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<i.count;I++)o[I]=new D,l[I]=new D;const c=new D,u=new D,p=new D,d=new qe,m=new qe,g=new qe,v=new D,h=new D;function f(I,E,y){c.fromBufferAttribute(i,I),u.fromBufferAttribute(i,E),p.fromBufferAttribute(i,y),d.fromBufferAttribute(s,I),m.fromBufferAttribute(s,E),g.fromBufferAttribute(s,y),u.sub(c),p.sub(c),m.sub(d),g.sub(d);const L=1/(m.x*g.y-g.x*m.y);isFinite(L)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(p,-m.y).multiplyScalar(L),h.copy(p).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(L),o[I].add(v),o[E].add(v),o[y].add(v),l[I].add(h),l[E].add(h),l[y].add(h))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let I=0,E=x.length;I<E;++I){const y=x[I],L=y.start,k=y.count;for(let O=L,z=L+k;O<z;O+=3)f(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const _=new D,M=new D,T=new D,w=new D;function A(I){T.fromBufferAttribute(r,I),w.copy(T);const E=o[I];_.copy(E),_.sub(T.multiplyScalar(T.dot(E))).normalize(),M.crossVectors(w,E);const L=M.dot(l[I])<0?-1:1;a.setXYZW(I,_.x,_.y,_.z,L)}for(let I=0,E=x.length;I<E;++I){const y=x[I],L=y.start,k=y.count;for(let O=L,z=L+k;O<z;O+=3)A(e.getX(O+0)),A(e.getX(O+1)),A(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Vn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new D,s=new D,a=new D,o=new D,l=new D,c=new D,u=new D,p=new D;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),v=e.getX(d+1),h=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,h),u.subVectors(a,s),p.subVectors(r,s),u.cross(p),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,h),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(h,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),p.subVectors(r,s),u.cross(p),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,p=o.normalized,d=new c.constructor(l.length*u);let m=0,g=0;for(let v=0,h=l.length;v<h;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*u;for(let f=0;f<u;f++)d[g++]=c[m++]}return new Vn(d,u,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $t,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,p=c.length;u<p;u++){const d=c[u],m=e(d,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let p=0,d=c.length;p<d;p++){const m=c[p];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],p=s[c];for(let d=0,m=p.length;d<m;d++)u.push(p[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ih=new _t,Ui=new su,ca=new Ao,rh=new D,Mr=new D,Sr=new D,Er=new D,ul=new D,ua=new D,fa=new qe,ha=new qe,da=new qe,sh=new D,ah=new D,oh=new D,pa=new D,ma=new D;class ce extends Vt{constructor(e=new $t,t=new Gs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ua.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],p=s[l];u!==0&&(ul.fromBufferAttribute(p,e),a?ua.addScaledVector(ul,u):ua.addScaledVector(ul.sub(t),u))}t.add(ua)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ca.copy(i.boundingSphere),ca.applyMatrix4(s),Ui.copy(e.ray).recast(e.near),!(ca.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(ca,rh)===null||Ui.origin.distanceToSquared(rh)>(e.far-e.near)**2))&&(ih.copy(s).invert(),Ui.copy(e.ray).applyMatrix4(ih),!(i.boundingBox!==null&&Ui.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ui)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,p=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const h=d[g],f=a[h.materialIndex],x=Math.max(h.start,m.start),_=Math.min(o.count,Math.min(h.start+h.count,m.start+m.count));for(let M=x,T=_;M<T;M+=3){const w=o.getX(M),A=o.getX(M+1),I=o.getX(M+2);r=ga(this,f,e,i,c,u,p,w,A,I),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=h.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let h=g,f=v;h<f;h+=3){const x=o.getX(h),_=o.getX(h+1),M=o.getX(h+2);r=ga(this,a,e,i,c,u,p,x,_,M),r&&(r.faceIndex=Math.floor(h/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const h=d[g],f=a[h.materialIndex],x=Math.max(h.start,m.start),_=Math.min(l.count,Math.min(h.start+h.count,m.start+m.count));for(let M=x,T=_;M<T;M+=3){const w=M,A=M+1,I=M+2;r=ga(this,f,e,i,c,u,p,w,A,I),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=h.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let h=g,f=v;h<f;h+=3){const x=h,_=h+1,M=h+2;r=ga(this,a,e,i,c,u,p,x,_,M),r&&(r.faceIndex=Math.floor(h/3),t.push(r))}}}}function e_(n,e,t,i,r,s,a,o){let l;if(e.side===tn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===ii,o),l===null)return null;ma.copy(o),ma.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ma);return c<t.near||c>t.far?null:{distance:c,point:ma.clone(),object:n}}function ga(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Mr),n.getVertexPosition(l,Sr),n.getVertexPosition(c,Er);const u=e_(n,e,t,i,Mr,Sr,Er,pa);if(u){r&&(fa.fromBufferAttribute(r,o),ha.fromBufferAttribute(r,l),da.fromBufferAttribute(r,c),u.uv=kn.getInterpolation(pa,Mr,Sr,Er,fa,ha,da,new qe)),s&&(fa.fromBufferAttribute(s,o),ha.fromBufferAttribute(s,l),da.fromBufferAttribute(s,c),u.uv1=kn.getInterpolation(pa,Mr,Sr,Er,fa,ha,da,new qe)),a&&(sh.fromBufferAttribute(a,o),ah.fromBufferAttribute(a,l),oh.fromBufferAttribute(a,c),u.normal=kn.getInterpolation(pa,Mr,Sr,Er,sh,ah,oh,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new D,materialIndex:0};kn.getNormal(Mr,Sr,Er,p.normal),u.face=p}return u}class St extends $t{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],p=[];let d=0,m=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(p,2));function g(v,h,f,x,_,M,T,w,A,I,E){const y=M/A,L=T/I,k=M/2,O=T/2,z=w/2,X=A+1,G=I+1;let $=0,W=0;const te=new D;for(let ue=0;ue<G;ue++){const de=ue*L-O;for(let Ae=0;Ae<X;Ae++){const Ye=Ae*y-k;te[v]=Ye*x,te[h]=de*_,te[f]=z,c.push(te.x,te.y,te.z),te[v]=0,te[h]=0,te[f]=w>0?1:-1,u.push(te.x,te.y,te.z),p.push(Ae/A),p.push(1-ue/I),$+=1}}for(let ue=0;ue<I;ue++)for(let de=0;de<A;de++){const Ae=d+de+X*ue,Ye=d+de+X*(ue+1),j=d+(de+1)+X*(ue+1),J=d+(de+1)+X*ue;l.push(Ae,Ye,J),l.push(Ye,j,J),W+=6}o.addGroup(m,W,E),m+=W,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new St(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Kr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function jt(n){const e={};for(let t=0;t<n.length;t++){const i=Kr(n[t]);for(const r in i)e[r]=i[r]}return e}function t_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function F0(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const n_={clone:Kr,merge:jt};var i_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,r_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends Hs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=i_,this.fragmentShader=r_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Kr(e.uniforms),this.uniformsGroups=t_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class k0 extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pi=new D,lh=new qe,ch=new qe;class _n extends k0{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Tc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Tc*2*Math.atan(Math.tan(qo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(pi.x,pi.y).multiplyScalar(-e/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(pi.x,pi.y).multiplyScalar(-e/pi.z)}getViewSize(e,t){return this.getViewBounds(e,lh,ch),t.subVectors(ch,lh)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const br=-90,wr=1;class s_ extends Vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new _n(br,wr,e,t);r.layers=this.layers,this.add(r);const s=new _n(br,wr,e,t);s.layers=this.layers,this.add(s);const a=new _n(br,wr,e,t);a.layers=this.layers,this.add(a);const o=new _n(br,wr,e,t);o.layers=this.layers,this.add(o);const l=new _n(br,wr,e,t);l.layers=this.layers,this.add(l);const c=new _n(br,wr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===ei)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===io)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,p=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(p,d,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class z0 extends nn{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:jr,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class a_ extends or{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new z0(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:wn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new St(5,5,5),s=new Ri({name:"CubemapFromEquirect",uniforms:Kr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:Ei});s.uniforms.tEquirect.value=t;const a=new ce(r,s),o=t.minFilter;return t.minFilter===$i&&(t.minFilter=wn),new s_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const fl=new D,o_=new D,l_=new He;class Bi{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=fl.subVectors(i,t).cross(o_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(fl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||l_.getNormalMatrix(e),r=this.coplanarPoint(fl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ni=new Ao,va=new D;class B0{constructor(e=new Bi,t=new Bi,i=new Bi,r=new Bi,s=new Bi,a=new Bi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ei){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],p=r[6],d=r[7],m=r[8],g=r[9],v=r[10],h=r[11],f=r[12],x=r[13],_=r[14],M=r[15];if(i[0].setComponents(l-s,d-c,h-m,M-f).normalize(),i[1].setComponents(l+s,d+c,h+m,M+f).normalize(),i[2].setComponents(l+a,d+u,h+g,M+x).normalize(),i[3].setComponents(l-a,d-u,h-g,M-x).normalize(),i[4].setComponents(l-o,d-p,h-v,M-_).normalize(),t===ei)i[5].setComponents(l+o,d+p,h+v,M+_).normalize();else if(t===io)i[5].setComponents(o,p,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(e){return Ni.center.set(0,0,0),Ni.radius=.7071067811865476,Ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(va.x=r.normal.x>0?e.max.x:e.min.x,va.y=r.normal.y>0?e.max.y:e.min.y,va.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(va)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function V0(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function c_(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,p=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){const u=l.array,p=l._updateRange,d=l.updateRanges;if(n.bindBuffer(c,o),p.count===-1&&d.length===0&&n.bufferSubData(c,0,u),d.length!==0){for(let m=0,g=d.length;m<g;m++){const v=d[m];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}p.count!==-1&&(n.bufferSubData(c,p.offset*u.BYTES_PER_ELEMENT,u,p.offset,p.count),p.count=-1),l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class Ws extends $t{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,p=e/o,d=t/l,m=[],g=[],v=[],h=[];for(let f=0;f<u;f++){const x=f*d-a;for(let _=0;_<c;_++){const M=_*p-s;g.push(M,-x,0),v.push(0,0,1),h.push(_/o),h.push(1-f/l)}}for(let f=0;f<l;f++)for(let x=0;x<o;x++){const _=x+c*f,M=x+c*(f+1),T=x+1+c*(f+1),w=x+1+c*f;m.push(_,M,w),m.push(M,T,w)}this.setIndex(m),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(v,3)),this.setAttribute("uv",new dt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ws(e.width,e.height,e.widthSegments,e.heightSegments)}}var u_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,f_=`#ifdef USE_ALPHAHASH
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
#endif`,h_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,d_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,p_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,m_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,g_=`#ifdef USE_AOMAP
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
#endif`,v_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,__=`#ifdef USE_BATCHING
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
#endif`,x_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,y_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,M_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,S_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,E_=`#ifdef USE_IRIDESCENCE
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
#endif`,b_=`#ifdef USE_BUMPMAP
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
#endif`,w_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,A_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,T_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,R_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,C_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,P_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,L_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,I_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,D_=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,U_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,N_=`vec3 transformedNormal = objectNormal;
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
#endif`,O_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,F_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,k_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,z_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,B_="gl_FragColor = linearToOutputTexel( gl_FragColor );",V_=`
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
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,H_=`#ifdef USE_ENVMAP
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
#endif`,G_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,W_=`#ifdef USE_ENVMAP
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
#endif`,X_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,q_=`#ifdef USE_ENVMAP
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
#endif`,j_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Y_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Z_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,K_=`#ifdef USE_GRADIENTMAP
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
}`,Q_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,J_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ex=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tx=`uniform bool receiveShadow;
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
#endif`,nx=`#ifdef USE_ENVMAP
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
#endif`,ix=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ax=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ox=`PhysicalMaterial material;
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
#endif`,lx=`struct PhysicalMaterial {
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
}`,cx=`
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
#endif`,ux=`#if defined( RE_IndirectDiffuse )
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
#endif`,fx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,px=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_x=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xx=`#if defined( USE_POINTS_UV )
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
#endif`,yx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ex=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wx=`#ifdef USE_MORPHTARGETS
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
#endif`,Ax=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Rx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Px=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ix=`#ifdef USE_NORMALMAP
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
#endif`,Dx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ux=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ox=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,zx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Yx=`float getShadowMask() {
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
}`,$x=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zx=`#ifdef USE_SKINNING
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
#endif`,Kx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qx=`#ifdef USE_SKINNING
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
#endif`,Jx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,e3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,t3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,n3=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,i3=`#ifdef USE_TRANSMISSION
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
#endif`,r3=`#ifdef USE_TRANSMISSION
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
#endif`,s3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const c3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,u3=`uniform sampler2D t2D;
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
}`,f3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h3=`#ifdef ENVMAP_TYPE_CUBE
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
}`,d3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m3=`#include <common>
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
}`,g3=`#if DEPTH_PACKING == 3200
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
	#endif
}`,v3=`#define DISTANCE
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
}`,_3=`#define DISTANCE
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
}`,x3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,y3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M3=`uniform float scale;
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
}`,S3=`uniform vec3 diffuse;
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
}`,E3=`#include <common>
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
}`,b3=`uniform vec3 diffuse;
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
}`,w3=`#define LAMBERT
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
}`,A3=`#define LAMBERT
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
}`,T3=`#define MATCAP
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
}`,R3=`#define MATCAP
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
}`,C3=`#define NORMAL
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
}`,P3=`#define NORMAL
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
}`,L3=`#define PHONG
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
}`,I3=`#define PHONG
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
}`,D3=`#define STANDARD
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
}`,U3=`#define STANDARD
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
}`,N3=`#define TOON
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
}`,O3=`#define TOON
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
}`,F3=`uniform float size;
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
}`,k3=`uniform vec3 diffuse;
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
}`,z3=`#include <common>
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
}`,B3=`uniform vec3 color;
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
}`,V3=`uniform float rotation;
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
}`,H3=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:u_,alphahash_pars_fragment:f_,alphamap_fragment:h_,alphamap_pars_fragment:d_,alphatest_fragment:p_,alphatest_pars_fragment:m_,aomap_fragment:g_,aomap_pars_fragment:v_,batching_pars_vertex:__,batching_vertex:x_,begin_vertex:y_,beginnormal_vertex:M_,bsdfs:S_,iridescence_fragment:E_,bumpmap_pars_fragment:b_,clipping_planes_fragment:w_,clipping_planes_pars_fragment:A_,clipping_planes_pars_vertex:T_,clipping_planes_vertex:R_,color_fragment:C_,color_pars_fragment:P_,color_pars_vertex:L_,color_vertex:I_,common:D_,cube_uv_reflection_fragment:U_,defaultnormal_vertex:N_,displacementmap_pars_vertex:O_,displacementmap_vertex:F_,emissivemap_fragment:k_,emissivemap_pars_fragment:z_,colorspace_fragment:B_,colorspace_pars_fragment:V_,envmap_fragment:H_,envmap_common_pars_fragment:G_,envmap_pars_fragment:W_,envmap_pars_vertex:X_,envmap_physical_pars_fragment:nx,envmap_vertex:q_,fog_vertex:j_,fog_pars_vertex:Y_,fog_fragment:$_,fog_pars_fragment:Z_,gradientmap_pars_fragment:K_,lightmap_pars_fragment:Q_,lights_lambert_fragment:J_,lights_lambert_pars_fragment:ex,lights_pars_begin:tx,lights_toon_fragment:ix,lights_toon_pars_fragment:rx,lights_phong_fragment:sx,lights_phong_pars_fragment:ax,lights_physical_fragment:ox,lights_physical_pars_fragment:lx,lights_fragment_begin:cx,lights_fragment_maps:ux,lights_fragment_end:fx,logdepthbuf_fragment:hx,logdepthbuf_pars_fragment:dx,logdepthbuf_pars_vertex:px,logdepthbuf_vertex:mx,map_fragment:gx,map_pars_fragment:vx,map_particle_fragment:_x,map_particle_pars_fragment:xx,metalnessmap_fragment:yx,metalnessmap_pars_fragment:Mx,morphinstance_vertex:Sx,morphcolor_vertex:Ex,morphnormal_vertex:bx,morphtarget_pars_vertex:wx,morphtarget_vertex:Ax,normal_fragment_begin:Tx,normal_fragment_maps:Rx,normal_pars_fragment:Cx,normal_pars_vertex:Px,normal_vertex:Lx,normalmap_pars_fragment:Ix,clearcoat_normal_fragment_begin:Dx,clearcoat_normal_fragment_maps:Ux,clearcoat_pars_fragment:Nx,iridescence_pars_fragment:Ox,opaque_fragment:Fx,packing:kx,premultiplied_alpha_fragment:zx,project_vertex:Bx,dithering_fragment:Vx,dithering_pars_fragment:Hx,roughnessmap_fragment:Gx,roughnessmap_pars_fragment:Wx,shadowmap_pars_fragment:Xx,shadowmap_pars_vertex:qx,shadowmap_vertex:jx,shadowmask_pars_fragment:Yx,skinbase_vertex:$x,skinning_pars_vertex:Zx,skinning_vertex:Kx,skinnormal_vertex:Qx,specularmap_fragment:Jx,specularmap_pars_fragment:e3,tonemapping_fragment:t3,tonemapping_pars_fragment:n3,transmission_fragment:i3,transmission_pars_fragment:r3,uv_pars_fragment:s3,uv_pars_vertex:a3,uv_vertex:o3,worldpos_vertex:l3,background_vert:c3,background_frag:u3,backgroundCube_vert:f3,backgroundCube_frag:h3,cube_vert:d3,cube_frag:p3,depth_vert:m3,depth_frag:g3,distanceRGBA_vert:v3,distanceRGBA_frag:_3,equirect_vert:x3,equirect_frag:y3,linedashed_vert:M3,linedashed_frag:S3,meshbasic_vert:E3,meshbasic_frag:b3,meshlambert_vert:w3,meshlambert_frag:A3,meshmatcap_vert:T3,meshmatcap_frag:R3,meshnormal_vert:C3,meshnormal_frag:P3,meshphong_vert:L3,meshphong_frag:I3,meshphysical_vert:D3,meshphysical_frag:U3,meshtoon_vert:N3,meshtoon_frag:O3,points_vert:F3,points_frag:k3,shadow_vert:z3,shadow_frag:B3,sprite_vert:V3,sprite_frag:H3},oe={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},On={basic:{uniforms:jt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:jt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new rt(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:jt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:jt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:jt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new rt(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:jt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:jt([oe.points,oe.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:jt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:jt([oe.common,oe.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:jt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:jt([oe.sprite,oe.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:jt([oe.common,oe.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:jt([oe.lights,oe.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};On.physical={uniforms:jt([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const _a={r:0,b:0,g:0},Oi=new Gn,G3=new _t;function W3(n,e,t,i,r,s,a){const o=new rt(0);let l=s===!0?0:1,c,u,p=null,d=0,m=null;function g(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?t:e).get(_)),_}function v(x){let _=!1;const M=g(x);M===null?f(o,l):M&&M.isColor&&(f(M,1),_=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function h(x,_){const M=g(_);M&&(M.isCubeTexture||M.mapping===bo)?(u===void 0&&(u=new ce(new St(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:Kr(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Oi.copy(_.backgroundRotation),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(G3.makeRotationFromEuler(Oi)),u.material.toneMapped=nt.getTransfer(M.colorSpace)!==ut,(p!==M||d!==M.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,p=M,d=M.version,m=n.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new ce(new Ws(2,2),new Ri({name:"BackgroundMaterial",uniforms:Kr(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=nt.getTransfer(M.colorSpace)!==ut,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(p!==M||d!==M.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,p=M,d=M.version,m=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function f(x,_){x.getRGB(_a,F0(n)),i.buffers.color.setClear(_a.r,_a.g,_a.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(x,_=1){o.set(x),l=_,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,f(o,l)},render:v,addToRenderList:h}}function X3(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(y,L,k,O,z){let X=!1;const G=p(O,k,L);s!==G&&(s=G,c(s.object)),X=m(y,O,k,z),X&&g(y,O,k,z),z!==null&&e.update(z,n.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,M(y,L,k,O),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function p(y,L,k){const O=k.wireframe===!0;let z=i[y.id];z===void 0&&(z={},i[y.id]=z);let X=z[L.id];X===void 0&&(X={},z[L.id]=X);let G=X[O];return G===void 0&&(G=d(l()),X[O]=G),G}function d(y){const L=[],k=[],O=[];for(let z=0;z<t;z++)L[z]=0,k[z]=0,O[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:O,object:y,attributes:{},index:null}}function m(y,L,k,O){const z=s.attributes,X=L.attributes;let G=0;const $=k.getAttributes();for(const W in $)if($[W].location>=0){const ue=z[W];let de=X[W];if(de===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(de=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(de=y.instanceColor)),ue===void 0||ue.attribute!==de||de&&ue.data!==de.data)return!0;G++}return s.attributesNum!==G||s.index!==O}function g(y,L,k,O){const z={},X=L.attributes;let G=0;const $=k.getAttributes();for(const W in $)if($[W].location>=0){let ue=X[W];ue===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(ue=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(ue=y.instanceColor));const de={};de.attribute=ue,ue&&ue.data&&(de.data=ue.data),z[W]=de,G++}s.attributes=z,s.attributesNum=G,s.index=O}function v(){const y=s.newAttributes;for(let L=0,k=y.length;L<k;L++)y[L]=0}function h(y){f(y,0)}function f(y,L){const k=s.newAttributes,O=s.enabledAttributes,z=s.attributeDivisors;k[y]=1,O[y]===0&&(n.enableVertexAttribArray(y),O[y]=1),z[y]!==L&&(n.vertexAttribDivisor(y,L),z[y]=L)}function x(){const y=s.newAttributes,L=s.enabledAttributes;for(let k=0,O=L.length;k<O;k++)L[k]!==y[k]&&(n.disableVertexAttribArray(k),L[k]=0)}function _(y,L,k,O,z,X,G){G===!0?n.vertexAttribIPointer(y,L,k,z,X):n.vertexAttribPointer(y,L,k,O,z,X)}function M(y,L,k,O){v();const z=O.attributes,X=k.getAttributes(),G=L.defaultAttributeValues;for(const $ in X){const W=X[$];if(W.location>=0){let te=z[$];if(te===void 0&&($==="instanceMatrix"&&y.instanceMatrix&&(te=y.instanceMatrix),$==="instanceColor"&&y.instanceColor&&(te=y.instanceColor)),te!==void 0){const ue=te.normalized,de=te.itemSize,Ae=e.get(te);if(Ae===void 0)continue;const Ye=Ae.buffer,j=Ae.type,J=Ae.bytesPerElement,pe=j===n.INT||j===n.UNSIGNED_INT||te.gpuType===Qc;if(te.isInterleavedBufferAttribute){const fe=te.data,Te=fe.stride,Le=te.offset;if(fe.isInstancedInterleavedBuffer){for(let ke=0;ke<W.locationSize;ke++)f(W.location+ke,fe.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ke=0;ke<W.locationSize;ke++)h(W.location+ke);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let ke=0;ke<W.locationSize;ke++)_(W.location+ke,de/W.locationSize,j,ue,Te*J,(Le+de/W.locationSize*ke)*J,pe)}else{if(te.isInstancedBufferAttribute){for(let fe=0;fe<W.locationSize;fe++)f(W.location+fe,te.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let fe=0;fe<W.locationSize;fe++)h(W.location+fe);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let fe=0;fe<W.locationSize;fe++)_(W.location+fe,de/W.locationSize,j,ue,de*J,de/W.locationSize*fe*J,pe)}}else if(G!==void 0){const ue=G[$];if(ue!==void 0)switch(ue.length){case 2:n.vertexAttrib2fv(W.location,ue);break;case 3:n.vertexAttrib3fv(W.location,ue);break;case 4:n.vertexAttrib4fv(W.location,ue);break;default:n.vertexAttrib1fv(W.location,ue)}}}}x()}function T(){I();for(const y in i){const L=i[y];for(const k in L){const O=L[k];for(const z in O)u(O[z].object),delete O[z];delete L[k]}delete i[y]}}function w(y){if(i[y.id]===void 0)return;const L=i[y.id];for(const k in L){const O=L[k];for(const z in O)u(O[z].object),delete O[z];delete L[k]}delete i[y.id]}function A(y){for(const L in i){const k=i[L];if(k[y.id]===void 0)continue;const O=k[y.id];for(const z in O)u(O[z].object),delete O[z];delete k[y.id]}}function I(){E(),a=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:I,resetDefaultState:E,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:h,disableUnusedAttributes:x}}function q3(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,p){p!==0&&(n.drawArraysInstanced(i,c,u,p),t.update(u,i,p))}function o(c,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,p);let m=0;for(let g=0;g<p;g++)m+=u[g];t.update(m,i,1)}function l(c,u,p,d){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)a(c[g],u[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,p);let g=0;for(let v=0;v<p;v++)g+=u[v];for(let v=0;v<d.length;v++)t.update(g,i,d[v])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function j3(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==Tn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const A=w===zs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==ri&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Jn&&!A)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const p=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),f=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=m>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,maxTextures:d,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:v,maxAttributes:h,maxVertexUniforms:f,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:M,maxSamples:T}}function Y3(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Bi,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){const m=p.length!==0||d||i!==0||r;return r=d,i=p.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,d){t=u(p,d,0)},this.setState=function(p,d,m){const g=p.clippingPlanes,v=p.clipIntersection,h=p.clipShadows,f=n.get(p);if(!r||g===null||g.length===0||s&&!h)s?u(null):c();else{const x=s?0:i,_=x*4;let M=f.clippingState||null;l.value=M,M=u(g,d,_,m);for(let T=0;T!==_;++T)M[T]=t[T];f.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(p,d,m,g){const v=p!==null?p.length:0;let h=null;if(v!==0){if(h=l.value,g!==!0||h===null){const f=m+v*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(h===null||h.length<f)&&(h=new Float32Array(f));for(let _=0,M=m;_!==v;++_,M+=4)a.copy(p[_]).applyMatrix4(x,o),a.normal.toArray(h,M),h[M+3]=a.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,h}}function $3(n){let e=new WeakMap;function t(a,o){return o===Kl?a.mapping=jr:o===Ql&&(a.mapping=Yr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Kl||o===Ql)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new a_(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Z3 extends k0{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Lr=4,uh=[.125,.215,.35,.446,.526,.582],Xi=20,hl=new Z3,fh=new rt;let dl=null,pl=0,ml=0,gl=!1;const Vi=(1+Math.sqrt(5))/2,Ar=1/Vi,hh=[new D(-Vi,Ar,0),new D(Vi,Ar,0),new D(-Ar,0,Vi),new D(Ar,0,Vi),new D(0,Vi,-Ar),new D(0,Vi,Ar),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class dh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){dl=this._renderer.getRenderTarget(),pl=this._renderer.getActiveCubeFace(),ml=this._renderer.getActiveMipmapLevel(),gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(dl,pl,ml),this._renderer.xr.enabled=gl,e.scissorTest=!1,xa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===jr||e.mapping===Yr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dl=this._renderer.getRenderTarget(),pl=this._renderer.getActiveCubeFace(),ml=this._renderer.getActiveMipmapLevel(),gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:zs,format:Tn,colorSpace:Ci,depthBuffer:!1},r=ph(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ph(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=K3(s)),this._blurMaterial=Q3(s,e,t)}return r}_compileMaterial(e){const t=new ce(this._lodPlanes[0],e);this._renderer.compile(t,hl)}_sceneToCubeUV(e,t,i,r){const o=new _n(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,d=u.toneMapping;u.getClearColor(fh),u.toneMapping=bi,u.autoClear=!1;const m=new Gs({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),g=new ce(new St,m);let v=!1;const h=e.background;h?h.isColor&&(m.color.copy(h),e.background=null,v=!0):(m.color.copy(fh),v=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):x===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const _=this._cubeSize;xa(r,x*_,f>2?_:0,_,_),u.setRenderTarget(r),v&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=p,e.background=h}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===jr||e.mapping===Yr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=gh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mh());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new ce(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;xa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,hl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=hh[(r-s-1)%hh.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,p=new ce(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Xi-1),v=s/g,h=isFinite(s)?1+Math.floor(u*v):Xi;h>Xi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${Xi}`);const f=[];let x=0;for(let A=0;A<Xi;++A){const I=A/v,E=Math.exp(-I*I/2);f.push(E),A===0?x+=E:A<h&&(x+=2*E)}for(let A=0;A<f.length;A++)f[A]=f[A]/x;d.envMap.value=e.texture,d.samples.value=h,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-i;const M=this._sizeLods[r],T=3*M*(r>_-Lr?r-_+Lr:0),w=4*(this._cubeSize-M);xa(t,T,w,3*M,2*M),l.setRenderTarget(t),l.render(p,hl)}}function K3(n){const e=[],t=[],i=[];let r=n;const s=n-Lr+1+uh.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Lr?l=uh[a-n+Lr-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,p=1+c,d=[u,u,p,u,p,p,u,u,p,p,u,p],m=6,g=6,v=3,h=2,f=1,x=new Float32Array(v*g*m),_=new Float32Array(h*g*m),M=new Float32Array(f*g*m);for(let w=0;w<m;w++){const A=w%3*2/3-1,I=w>2?0:-1,E=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];x.set(E,v*g*w),_.set(d,h*g*w);const y=[w,w,w,w,w,w];M.set(y,f*g*w)}const T=new $t;T.setAttribute("position",new Vn(x,v)),T.setAttribute("uv",new Vn(_,h)),T.setAttribute("faceIndex",new Vn(M,f)),e.push(T),r>Lr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ph(n,e,t){const i=new or(n,e,t);return i.texture.mapping=bo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xa(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Q3(n,e,t){const i=new Float32Array(Xi),r=new D(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ou(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function mh(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ou(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function gh(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function ou(){return`

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
	`}function J3(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Kl||l===Ql,u=l===jr||l===Yr;if(c||u){let p=e.get(o);const d=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new dh(n)),p=c?t.fromEquirectangular(o,p):t.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),p.texture;if(p!==void 0)return p.texture;{const m=o.image;return c&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new dh(n)),p=c?t.fromEquirectangular(o):t.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),o.addEventListener("dispose",s),p.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function ey(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&L0("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function ty(n,e,t,i){const r={},s=new WeakMap;function a(p){const d=p.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let h=0,f=v.length;h<f;h++)e.remove(v[h])}d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(p,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(p){const d=p.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const m=p.morphAttributes;for(const g in m){const v=m[g];for(let h=0,f=v.length;h<f;h++)e.update(v[h],n.ARRAY_BUFFER)}}function c(p){const d=[],m=p.index,g=p.attributes.position;let v=0;if(m!==null){const x=m.array;v=m.version;for(let _=0,M=x.length;_<M;_+=3){const T=x[_+0],w=x[_+1],A=x[_+2];d.push(T,w,w,A,A,T)}}else if(g!==void 0){const x=g.array;v=g.version;for(let _=0,M=x.length/3-1;_<M;_+=3){const T=_+0,w=_+1,A=_+2;d.push(T,w,w,A,A,T)}}else return;const h=new(P0(d)?O0:N0)(d,1);h.version=v;const f=s.get(p);f&&e.remove(f),s.set(p,h)}function u(p){const d=s.get(p);if(d){const m=p.index;m!==null&&d.version<m.version&&c(p)}else c(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:u}}function ny(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,m){n.drawElements(i,m,s,d*a),t.update(m,i,1)}function c(d,m,g){g!==0&&(n.drawElementsInstanced(i,m,s,d*a,g),t.update(m,i,g))}function u(d,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,d,0,g);let h=0;for(let f=0;f<g;f++)h+=m[f];t.update(h,i,1)}function p(d,m,g,v){if(g===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let f=0;f<d.length;f++)c(d[f]/a,m[f],v[f]);else{h.multiDrawElementsInstancedWEBGL(i,m,0,s,d,0,v,0,g);let f=0;for(let x=0;x<g;x++)f+=m[x];for(let x=0;x<v.length;x++)t.update(f,i,v[x])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=p}function iy(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function ry(n,e,t){const i=new WeakMap,r=new Ft;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==p){let E=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let _=0;m===!0&&(_=1),g===!0&&(_=2),v===!0&&(_=3);let M=o.attributes.position.count*_,T=1;M>e.maxTextureSize&&(T=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const w=new Float32Array(M*T*4*p),A=new D0(w,M,T,p);A.type=Jn,A.needsUpdate=!0;const I=_*4;for(let y=0;y<p;y++){const L=h[y],k=f[y],O=x[y],z=M*T*4*y;for(let X=0;X<L.count;X++){const G=X*I;m===!0&&(r.fromBufferAttribute(L,X),w[z+G+0]=r.x,w[z+G+1]=r.y,w[z+G+2]=r.z,w[z+G+3]=0),g===!0&&(r.fromBufferAttribute(k,X),w[z+G+4]=r.x,w[z+G+5]=r.y,w[z+G+6]=r.z,w[z+G+7]=0),v===!0&&(r.fromBufferAttribute(O,X),w[z+G+8]=r.x,w[z+G+9]=r.y,w[z+G+10]=r.z,w[z+G+11]=O.itemSize===4?r.w:1)}}d={count:p,texture:A,size:new qe(M,T)},i.set(o,d),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let m=0;for(let v=0;v<c.length;v++)m+=c[v];const g=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function sy(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,p=e.get(l,u);if(r.get(p)!==c&&(e.update(p),r.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return p}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class H0 extends nn{constructor(e,t,i,r,s,a,o,l,c,u=Or){if(u!==Or&&u!==Zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Or&&(i=ar),i===void 0&&u===Zr&&(i=$r),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:xn,this.minFilter=l!==void 0?l:xn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const G0=new nn,vh=new H0(1,1),W0=new D0,X0=new Wv,q0=new z0,_h=[],xh=[],yh=new Float32Array(16),Mh=new Float32Array(9),Sh=new Float32Array(4);function ts(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=_h[r];if(s===void 0&&(s=new Float32Array(r),_h[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Lt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function It(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function To(n,e){let t=xh[e];t===void 0&&(t=new Int32Array(e),xh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ay(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function oy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2fv(this.addr,e),It(t,e)}}function ly(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;n.uniform3fv(this.addr,e),It(t,e)}}function cy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4fv(this.addr,e),It(t,e)}}function uy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,i))return;Sh.set(i),n.uniformMatrix2fv(this.addr,!1,Sh),It(t,i)}}function fy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,i))return;Mh.set(i),n.uniformMatrix3fv(this.addr,!1,Mh),It(t,i)}}function hy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,i))return;yh.set(i),n.uniformMatrix4fv(this.addr,!1,yh),It(t,i)}}function dy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function py(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2iv(this.addr,e),It(t,e)}}function my(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3iv(this.addr,e),It(t,e)}}function gy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4iv(this.addr,e),It(t,e)}}function vy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function _y(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2uiv(this.addr,e),It(t,e)}}function xy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3uiv(this.addr,e),It(t,e)}}function yy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4uiv(this.addr,e),It(t,e)}}function My(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(vh.compareFunction=C0,s=vh):s=G0,t.setTexture2D(e||s,r)}function Sy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||X0,r)}function Ey(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||q0,r)}function by(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||W0,r)}function wy(n){switch(n){case 5126:return ay;case 35664:return oy;case 35665:return ly;case 35666:return cy;case 35674:return uy;case 35675:return fy;case 35676:return hy;case 5124:case 35670:return dy;case 35667:case 35671:return py;case 35668:case 35672:return my;case 35669:case 35673:return gy;case 5125:return vy;case 36294:return _y;case 36295:return xy;case 36296:return yy;case 35678:case 36198:case 36298:case 36306:case 35682:return My;case 35679:case 36299:case 36307:return Sy;case 35680:case 36300:case 36308:case 36293:return Ey;case 36289:case 36303:case 36311:case 36292:return by}}function Ay(n,e){n.uniform1fv(this.addr,e)}function Ty(n,e){const t=ts(e,this.size,2);n.uniform2fv(this.addr,t)}function Ry(n,e){const t=ts(e,this.size,3);n.uniform3fv(this.addr,t)}function Cy(n,e){const t=ts(e,this.size,4);n.uniform4fv(this.addr,t)}function Py(n,e){const t=ts(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Ly(n,e){const t=ts(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Iy(n,e){const t=ts(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Dy(n,e){n.uniform1iv(this.addr,e)}function Uy(n,e){n.uniform2iv(this.addr,e)}function Ny(n,e){n.uniform3iv(this.addr,e)}function Oy(n,e){n.uniform4iv(this.addr,e)}function Fy(n,e){n.uniform1uiv(this.addr,e)}function ky(n,e){n.uniform2uiv(this.addr,e)}function zy(n,e){n.uniform3uiv(this.addr,e)}function By(n,e){n.uniform4uiv(this.addr,e)}function Vy(n,e,t){const i=this.cache,r=e.length,s=To(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||G0,s[a])}function Hy(n,e,t){const i=this.cache,r=e.length,s=To(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||X0,s[a])}function Gy(n,e,t){const i=this.cache,r=e.length,s=To(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||q0,s[a])}function Wy(n,e,t){const i=this.cache,r=e.length,s=To(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||W0,s[a])}function Xy(n){switch(n){case 5126:return Ay;case 35664:return Ty;case 35665:return Ry;case 35666:return Cy;case 35674:return Py;case 35675:return Ly;case 35676:return Iy;case 5124:case 35670:return Dy;case 35667:case 35671:return Uy;case 35668:case 35672:return Ny;case 35669:case 35673:return Oy;case 5125:return Fy;case 36294:return ky;case 36295:return zy;case 36296:return By;case 35678:case 36198:case 36298:case 36306:case 35682:return Vy;case 35679:case 36299:case 36307:return Hy;case 35680:case 36300:case 36308:case 36293:return Gy;case 36289:case 36303:case 36311:case 36292:return Wy}}class qy{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=wy(t.type)}}class jy{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Xy(t.type)}}class Yy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const vl=/(\w+)(\])?(\[|\.)?/g;function Eh(n,e){n.seq.push(e),n.map[e.id]=e}function $y(n,e,t){const i=n.name,r=i.length;for(vl.lastIndex=0;;){const s=vl.exec(i),a=vl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Eh(t,c===void 0?new qy(o,n,e):new jy(o,n,e));break}else{let p=t.map[o];p===void 0&&(p=new Yy(o),Eh(t,p)),t=p}}}class ka{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);$y(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function bh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Zy=37297;let Ky=0;function Qy(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function Jy(n){const e=nt.getPrimaries(nt.workingColorSpace),t=nt.getPrimaries(n);let i;switch(e===t?i="":e===no&&t===to?i="LinearDisplayP3ToLinearSRGB":e===to&&t===no&&(i="LinearSRGBToLinearDisplayP3"),n){case Ci:case wo:return[i,"LinearTransferOETF"];case Dn:case ru:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function wh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Qy(n.getShaderSource(e),a)}else return r}function e5(n,e){const t=Jy(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function t5(n,e){let t;switch(e){case vv:t="Linear";break;case _v:t="Reinhard";break;case xv:t="OptimizedCineon";break;case yv:t="ACESFilmic";break;case Sv:t="AgX";break;case Ev:t="Neutral";break;case Mv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function n5(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vs).join(`
`)}function i5(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function r5(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function vs(n){return n!==""}function Ah(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Th(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const s5=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rc(n){return n.replace(s5,o5)}const a5=new Map;function o5(n,e){let t=Be[e];if(t===void 0){const i=a5.get(e);if(i!==void 0)t=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Rc(t)}const l5=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rh(n){return n.replace(l5,c5)}function c5(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ch(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function u5(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===g0?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===G2?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Zn&&(e="SHADOWMAP_TYPE_VSM"),e}function f5(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case jr:case Yr:e="ENVMAP_TYPE_CUBE";break;case bo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function h5(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Yr:e="ENVMAP_MODE_REFRACTION";break}return e}function d5(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case v0:e="ENVMAP_BLENDING_MULTIPLY";break;case mv:e="ENVMAP_BLENDING_MIX";break;case gv:e="ENVMAP_BLENDING_ADD";break}return e}function p5(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function m5(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=u5(t),c=f5(t),u=h5(t),p=d5(t),d=p5(t),m=n5(t),g=i5(s),v=r.createProgram();let h,f,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(vs).join(`
`),h.length>0&&(h+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(vs).join(`
`),f.length>0&&(f+=`
`)):(h=[Ch(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vs).join(`
`),f=[Ch(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bi?"#define TONE_MAPPING":"",t.toneMapping!==bi?Be.tonemapping_pars_fragment:"",t.toneMapping!==bi?t5("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,e5("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vs).join(`
`)),a=Rc(a),a=Ah(a,t),a=Th(a,t),o=Rc(o),o=Ah(o,t),o=Th(o,t),a=Rh(a),o=Rh(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,h=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,f=["#define varying in",t.glslVersion===Wf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=x+h+a,M=x+f+o,T=bh(r,r.VERTEX_SHADER,_),w=bh(r,r.FRAGMENT_SHADER,M);r.attachShader(v,T),r.attachShader(v,w),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function A(L){if(n.debug.checkShaderErrors){const k=r.getProgramInfoLog(v).trim(),O=r.getShaderInfoLog(T).trim(),z=r.getShaderInfoLog(w).trim();let X=!0,G=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,T,w);else{const $=wh(r,T,"vertex"),W=wh(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+k+`
`+$+`
`+W)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(O===""||z==="")&&(G=!1);G&&(L.diagnostics={runnable:X,programLog:k,vertexShader:{log:O,prefix:h},fragmentShader:{log:z,prefix:f}})}r.deleteShader(T),r.deleteShader(w),I=new ka(r,v),E=r5(r,v)}let I;this.getUniforms=function(){return I===void 0&&A(this),I};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(v,Zy)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ky++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=w,this}let g5=0;class v5{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new _5(e),t.set(e,i)),i}}class _5{constructor(e){this.id=g5++,this.code=e,this.usedTimes=0}}function x5(n,e,t,i,r,s,a){const o=new au,l=new v5,c=new Set,u=[],p=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return c.add(E),E===0?"uv":`uv${E}`}function h(E,y,L,k,O){const z=k.fog,X=O.geometry,G=E.isMeshStandardMaterial?k.environment:null,$=(E.isMeshStandardMaterial?t:e).get(E.envMap||G),W=$&&$.mapping===bo?$.image.height:null,te=g[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const ue=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,de=ue!==void 0?ue.length:0;let Ae=0;X.morphAttributes.position!==void 0&&(Ae=1),X.morphAttributes.normal!==void 0&&(Ae=2),X.morphAttributes.color!==void 0&&(Ae=3);let Ye,j,J,pe;if(te){const Ze=On[te];Ye=Ze.vertexShader,j=Ze.fragmentShader}else Ye=E.vertexShader,j=E.fragmentShader,l.update(E),J=l.getVertexShaderID(E),pe=l.getFragmentShaderID(E);const fe=n.getRenderTarget(),Te=O.isInstancedMesh===!0,Le=O.isBatchedMesh===!0,ke=!!E.map,ot=!!E.matcap,C=!!$,bt=!!E.aoMap,tt=!!E.lightMap,at=!!E.bumpMap,Ee=!!E.normalMap,wt=!!E.displacementMap,Ne=!!E.emissiveMap,Fe=!!E.metalnessMap,R=!!E.roughnessMap,S=E.anisotropy>0,H=E.clearcoat>0,Q=E.dispersion>0,ee=E.iridescence>0,K=E.sheen>0,be=E.transmission>0,le=S&&!!E.anisotropyMap,ge=H&&!!E.clearcoatMap,ze=H&&!!E.clearcoatNormalMap,ne=H&&!!E.clearcoatRoughnessMap,me=ee&&!!E.iridescenceMap,je=ee&&!!E.iridescenceThicknessMap,De=K&&!!E.sheenColorMap,ve=K&&!!E.sheenRoughnessMap,Oe=!!E.specularMap,We=!!E.specularColorMap,gt=!!E.specularIntensityMap,U=be&&!!E.transmissionMap,ie=be&&!!E.thicknessMap,Y=!!E.gradientMap,Z=!!E.alphaMap,ae=E.alphaTest>0,Re=!!E.alphaHash,$e=!!E.extensions;let At=bi;E.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(At=n.toneMapping);const kt={shaderID:te,shaderType:E.type,shaderName:E.name,vertexShader:Ye,fragmentShader:j,defines:E.defines,customVertexShaderID:J,customFragmentShaderID:pe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Le,batchingColor:Le&&O._colorsTexture!==null,instancing:Te,instancingColor:Te&&O.instanceColor!==null,instancingMorph:Te&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:fe===null?n.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Ci,alphaToCoverage:!!E.alphaToCoverage,map:ke,matcap:ot,envMap:C,envMapMode:C&&$.mapping,envMapCubeUVHeight:W,aoMap:bt,lightMap:tt,bumpMap:at,normalMap:Ee,displacementMap:d&&wt,emissiveMap:Ne,normalMapObjectSpace:Ee&&E.normalMapType===Rv,normalMapTangentSpace:Ee&&E.normalMapType===Tv,metalnessMap:Fe,roughnessMap:R,anisotropy:S,anisotropyMap:le,clearcoat:H,clearcoatMap:ge,clearcoatNormalMap:ze,clearcoatRoughnessMap:ne,dispersion:Q,iridescence:ee,iridescenceMap:me,iridescenceThicknessMap:je,sheen:K,sheenColorMap:De,sheenRoughnessMap:ve,specularMap:Oe,specularColorMap:We,specularIntensityMap:gt,transmission:be,transmissionMap:U,thicknessMap:ie,gradientMap:Y,opaque:E.transparent===!1&&E.blending===Nr&&E.alphaToCoverage===!1,alphaMap:Z,alphaTest:ae,alphaHash:Re,combine:E.combine,mapUv:ke&&v(E.map.channel),aoMapUv:bt&&v(E.aoMap.channel),lightMapUv:tt&&v(E.lightMap.channel),bumpMapUv:at&&v(E.bumpMap.channel),normalMapUv:Ee&&v(E.normalMap.channel),displacementMapUv:wt&&v(E.displacementMap.channel),emissiveMapUv:Ne&&v(E.emissiveMap.channel),metalnessMapUv:Fe&&v(E.metalnessMap.channel),roughnessMapUv:R&&v(E.roughnessMap.channel),anisotropyMapUv:le&&v(E.anisotropyMap.channel),clearcoatMapUv:ge&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:ze&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:je&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:De&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:ve&&v(E.sheenRoughnessMap.channel),specularMapUv:Oe&&v(E.specularMap.channel),specularColorMapUv:We&&v(E.specularColorMap.channel),specularIntensityMapUv:gt&&v(E.specularIntensityMap.channel),transmissionMapUv:U&&v(E.transmissionMap.channel),thicknessMapUv:ie&&v(E.thicknessMap.channel),alphaMapUv:Z&&v(E.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Ee||S),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!X.attributes.uv&&(ke||Z),fog:!!z,useFog:E.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:O.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Ae,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:At,decodeVideoTexture:ke&&E.map.isVideoTexture===!0&&nt.getTransfer(E.map.colorSpace)===ut,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Fn,flipSided:E.side===tn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:$e&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&E.extensions.multiDraw===!0||Le)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return kt.vertexUv1s=c.has(1),kt.vertexUv2s=c.has(2),kt.vertexUv3s=c.has(3),c.clear(),kt}function f(E){const y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(const L in E.defines)y.push(L),y.push(E.defines[L]);return E.isRawShaderMaterial===!1&&(x(y,E),_(y,E),y.push(n.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function x(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function _(E,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.skinning&&o.enable(4),y.morphTargets&&o.enable(5),y.morphNormals&&o.enable(6),y.morphColors&&o.enable(7),y.premultipliedAlpha&&o.enable(8),y.shadowMapEnabled&&o.enable(9),y.doubleSided&&o.enable(10),y.flipSided&&o.enable(11),y.useDepthPacking&&o.enable(12),y.dithering&&o.enable(13),y.transmission&&o.enable(14),y.sheen&&o.enable(15),y.opaque&&o.enable(16),y.pointsUvs&&o.enable(17),y.decodeVideoTexture&&o.enable(18),y.alphaToCoverage&&o.enable(19),E.push(o.mask)}function M(E){const y=g[E.type];let L;if(y){const k=On[y];L=n_.clone(k.uniforms)}else L=E.uniforms;return L}function T(E,y){let L;for(let k=0,O=u.length;k<O;k++){const z=u[k];if(z.cacheKey===y){L=z,++L.usedTimes;break}}return L===void 0&&(L=new m5(n,y,E,s),u.push(L)),L}function w(E){if(--E.usedTimes===0){const y=u.indexOf(E);u[y]=u[u.length-1],u.pop(),E.destroy()}}function A(E){l.remove(E)}function I(){l.dispose()}return{getParameters:h,getProgramCacheKey:f,getUniforms:M,acquireProgram:T,releaseProgram:w,releaseShaderCache:A,programs:u,dispose:I}}function y5(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function M5(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ph(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Lh(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(p,d,m,g,v,h){let f=n[e];return f===void 0?(f={id:p.id,object:p,geometry:d,material:m,groupOrder:g,renderOrder:p.renderOrder,z:v,group:h},n[e]=f):(f.id=p.id,f.object=p,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=p.renderOrder,f.z=v,f.group=h),e++,f}function o(p,d,m,g,v,h){const f=a(p,d,m,g,v,h);m.transmission>0?i.push(f):m.transparent===!0?r.push(f):t.push(f)}function l(p,d,m,g,v,h){const f=a(p,d,m,g,v,h);m.transmission>0?i.unshift(f):m.transparent===!0?r.unshift(f):t.unshift(f)}function c(p,d){t.length>1&&t.sort(p||M5),i.length>1&&i.sort(d||Ph),r.length>1&&r.sort(d||Ph)}function u(){for(let p=e,d=n.length;p<d;p++){const m=n[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function S5(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Lh,n.set(i,[a])):r>=s.length?(a=new Lh,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function E5(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new rt};break;case"SpotLight":t={position:new D,direction:new D,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function b5(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let w5=0;function A5(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function T5(n){const e=new E5,t=b5(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const r=new D,s=new _t,a=new _t;function o(c){let u=0,p=0,d=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let m=0,g=0,v=0,h=0,f=0,x=0,_=0,M=0,T=0,w=0,A=0;c.sort(A5);for(let E=0,y=c.length;E<y;E++){const L=c[E],k=L.color,O=L.intensity,z=L.distance,X=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=k.r*O,p+=k.g*O,d+=k.b*O;else if(L.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(L.sh.coefficients[G],O);A++}else if(L.isDirectionalLight){const G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const $=L.shadow,W=t.get(L);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,i.directionalShadow[m]=W,i.directionalShadowMap[m]=X,i.directionalShadowMatrix[m]=L.shadow.matrix,x++}i.directional[m]=G,m++}else if(L.isSpotLight){const G=e.get(L);G.position.setFromMatrixPosition(L.matrixWorld),G.color.copy(k).multiplyScalar(O),G.distance=z,G.coneCos=Math.cos(L.angle),G.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),G.decay=L.decay,i.spot[v]=G;const $=L.shadow;if(L.map&&(i.spotLightMap[T]=L.map,T++,$.updateMatrices(L),L.castShadow&&w++),i.spotLightMatrix[v]=$.matrix,L.castShadow){const W=t.get(L);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,i.spotShadow[v]=W,i.spotShadowMap[v]=X,M++}v++}else if(L.isRectAreaLight){const G=e.get(L);G.color.copy(k).multiplyScalar(O),G.halfWidth.set(L.width*.5,0,0),G.halfHeight.set(0,L.height*.5,0),i.rectArea[h]=G,h++}else if(L.isPointLight){const G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),G.distance=L.distance,G.decay=L.decay,L.castShadow){const $=L.shadow,W=t.get(L);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,W.shadowCameraNear=$.camera.near,W.shadowCameraFar=$.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=X,i.pointShadowMatrix[g]=L.shadow.matrix,_++}i.point[g]=G,g++}else if(L.isHemisphereLight){const G=e.get(L);G.skyColor.copy(L.color).multiplyScalar(O),G.groundColor.copy(L.groundColor).multiplyScalar(O),i.hemi[f]=G,f++}}h>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=p,i.ambient[2]=d;const I=i.hash;(I.directionalLength!==m||I.pointLength!==g||I.spotLength!==v||I.rectAreaLength!==h||I.hemiLength!==f||I.numDirectionalShadows!==x||I.numPointShadows!==_||I.numSpotShadows!==M||I.numSpotMaps!==T||I.numLightProbes!==A)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=h,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=M+T-w,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=A,I.directionalLength=m,I.pointLength=g,I.spotLength=v,I.rectAreaLength=h,I.hemiLength=f,I.numDirectionalShadows=x,I.numPointShadows=_,I.numSpotShadows=M,I.numSpotMaps=T,I.numLightProbes=A,i.version=w5++)}function l(c,u){let p=0,d=0,m=0,g=0,v=0;const h=u.matrixWorldInverse;for(let f=0,x=c.length;f<x;f++){const _=c[f];if(_.isDirectionalLight){const M=i.directional[p];M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(h),p++}else if(_.isSpotLight){const M=i.spot[m];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(h),M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(h),m++}else if(_.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(h),a.identity(),s.copy(_.matrixWorld),s.premultiply(h),a.extractRotation(s),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(h),d++}else if(_.isHemisphereLight){const M=i.hemi[v];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(h),v++}}}return{setup:o,setupView:l,state:i}}function Ih(n){const e=new T5(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function R5(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Ih(n),e.set(r,[o])):s>=a.length?(o=new Ih(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class C5 extends Hs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class P5 extends Hs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const L5=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,I5=`uniform sampler2D shadow_pass;
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
}`;function D5(n,e,t){let i=new B0;const r=new qe,s=new qe,a=new Ft,o=new C5({depthPacking:Av}),l=new P5,c={},u=t.maxTextureSize,p={[ii]:tn,[tn]:ii,[Fn]:Fn},d=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:L5,fragmentShader:I5}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new $t;g.setAttribute("position",new Vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ce(g,d),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=g0;let f=this.type;this.render=function(w,A,I){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||w.length===0)return;const E=n.getRenderTarget(),y=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),k=n.state;k.setBlending(Ei),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const O=f!==Zn&&this.type===Zn,z=f===Zn&&this.type!==Zn;for(let X=0,G=w.length;X<G;X++){const $=w[X],W=$.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const te=W.getFrameExtents();if(r.multiply(te),s.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/te.x),r.x=s.x*te.x,W.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/te.y),r.y=s.y*te.y,W.mapSize.y=s.y)),W.map===null||O===!0||z===!0){const de=this.type!==Zn?{minFilter:xn,magFilter:xn}:{};W.map!==null&&W.map.dispose(),W.map=new or(r.x,r.y,de),W.map.texture.name=$.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const ue=W.getViewportCount();for(let de=0;de<ue;de++){const Ae=W.getViewport(de);a.set(s.x*Ae.x,s.y*Ae.y,s.x*Ae.z,s.y*Ae.w),k.viewport(a),W.updateMatrices($,de),i=W.getFrustum(),M(A,I,W.camera,$,this.type)}W.isPointLightShadow!==!0&&this.type===Zn&&x(W,I),W.needsUpdate=!1}f=this.type,h.needsUpdate=!1,n.setRenderTarget(E,y,L)};function x(w,A){const I=e.update(v);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new or(r.x,r.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(A,null,I,d,v,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(A,null,I,m,v,null)}function _(w,A,I,E){let y=null;const L=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)y=L;else if(y=I.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const k=y.uuid,O=A.uuid;let z=c[k];z===void 0&&(z={},c[k]=z);let X=z[O];X===void 0&&(X=y.clone(),z[O]=X,A.addEventListener("dispose",T)),y=X}if(y.visible=A.visible,y.wireframe=A.wireframe,E===Zn?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:p[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const k=n.properties.get(y);k.light=I}return y}function M(w,A,I,E,y){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===Zn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);const O=e.update(w),z=w.material;if(Array.isArray(z)){const X=O.groups;for(let G=0,$=X.length;G<$;G++){const W=X[G],te=z[W.materialIndex];if(te&&te.visible){const ue=_(w,te,E,y);w.onBeforeShadow(n,w,A,I,O,ue,W),n.renderBufferDirect(I,null,O,ue,w,W),w.onAfterShadow(n,w,A,I,O,ue,W)}}}else if(z.visible){const X=_(w,z,E,y);w.onBeforeShadow(n,w,A,I,O,X,null),n.renderBufferDirect(I,null,O,X,w,null),w.onAfterShadow(n,w,A,I,O,X,null)}}const k=w.children;for(let O=0,z=k.length;O<z;O++)M(k[O],A,I,E,y)}function T(w){w.target.removeEventListener("dispose",T);for(const I in c){const E=c[I],y=w.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}function U5(n){function e(){let U=!1;const ie=new Ft;let Y=null;const Z=new Ft(0,0,0,0);return{setMask:function(ae){Y!==ae&&!U&&(n.colorMask(ae,ae,ae,ae),Y=ae)},setLocked:function(ae){U=ae},setClear:function(ae,Re,$e,At,kt){kt===!0&&(ae*=At,Re*=At,$e*=At),ie.set(ae,Re,$e,At),Z.equals(ie)===!1&&(n.clearColor(ae,Re,$e,At),Z.copy(ie))},reset:function(){U=!1,Y=null,Z.set(-1,0,0,0)}}}function t(){let U=!1,ie=null,Y=null,Z=null;return{setTest:function(ae){ae?pe(n.DEPTH_TEST):fe(n.DEPTH_TEST)},setMask:function(ae){ie!==ae&&!U&&(n.depthMask(ae),ie=ae)},setFunc:function(ae){if(Y!==ae){switch(ae){case lv:n.depthFunc(n.NEVER);break;case cv:n.depthFunc(n.ALWAYS);break;case uv:n.depthFunc(n.LESS);break;case Ja:n.depthFunc(n.LEQUAL);break;case fv:n.depthFunc(n.EQUAL);break;case hv:n.depthFunc(n.GEQUAL);break;case dv:n.depthFunc(n.GREATER);break;case pv:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Y=ae}},setLocked:function(ae){U=ae},setClear:function(ae){Z!==ae&&(n.clearDepth(ae),Z=ae)},reset:function(){U=!1,ie=null,Y=null,Z=null}}}function i(){let U=!1,ie=null,Y=null,Z=null,ae=null,Re=null,$e=null,At=null,kt=null;return{setTest:function(Ze){U||(Ze?pe(n.STENCIL_TEST):fe(n.STENCIL_TEST))},setMask:function(Ze){ie!==Ze&&!U&&(n.stencilMask(Ze),ie=Ze)},setFunc:function(Ze,Wn,Ln){(Y!==Ze||Z!==Wn||ae!==Ln)&&(n.stencilFunc(Ze,Wn,Ln),Y=Ze,Z=Wn,ae=Ln)},setOp:function(Ze,Wn,Ln){(Re!==Ze||$e!==Wn||At!==Ln)&&(n.stencilOp(Ze,Wn,Ln),Re=Ze,$e=Wn,At=Ln)},setLocked:function(Ze){U=Ze},setClear:function(Ze){kt!==Ze&&(n.clearStencil(Ze),kt=Ze)},reset:function(){U=!1,ie=null,Y=null,Z=null,ae=null,Re=null,$e=null,At=null,kt=null}}}const r=new e,s=new t,a=new i,o=new WeakMap,l=new WeakMap;let c={},u={},p=new WeakMap,d=[],m=null,g=!1,v=null,h=null,f=null,x=null,_=null,M=null,T=null,w=new rt(0,0,0),A=0,I=!1,E=null,y=null,L=null,k=null,O=null;const z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,G=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec($)[1]),X=G>=1):$.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),X=G>=2);let W=null,te={};const ue=n.getParameter(n.SCISSOR_BOX),de=n.getParameter(n.VIEWPORT),Ae=new Ft().fromArray(ue),Ye=new Ft().fromArray(de);function j(U,ie,Y,Z){const ae=new Uint8Array(4),Re=n.createTexture();n.bindTexture(U,Re),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let $e=0;$e<Y;$e++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(ie,0,n.RGBA,1,1,Z,0,n.RGBA,n.UNSIGNED_BYTE,ae):n.texImage2D(ie+$e,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ae);return Re}const J={};J[n.TEXTURE_2D]=j(n.TEXTURE_2D,n.TEXTURE_2D,1),J[n.TEXTURE_CUBE_MAP]=j(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[n.TEXTURE_2D_ARRAY]=j(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),J[n.TEXTURE_3D]=j(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),pe(n.DEPTH_TEST),s.setFunc(Ja),at(!1),Ee(kf),pe(n.CULL_FACE),bt(Ei);function pe(U){c[U]!==!0&&(n.enable(U),c[U]=!0)}function fe(U){c[U]!==!1&&(n.disable(U),c[U]=!1)}function Te(U,ie){return u[U]!==ie?(n.bindFramebuffer(U,ie),u[U]=ie,U===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ie),U===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ie),!0):!1}function Le(U,ie){let Y=d,Z=!1;if(U){Y=p.get(ie),Y===void 0&&(Y=[],p.set(ie,Y));const ae=U.textures;if(Y.length!==ae.length||Y[0]!==n.COLOR_ATTACHMENT0){for(let Re=0,$e=ae.length;Re<$e;Re++)Y[Re]=n.COLOR_ATTACHMENT0+Re;Y.length=ae.length,Z=!0}}else Y[0]!==n.BACK&&(Y[0]=n.BACK,Z=!0);Z&&n.drawBuffers(Y)}function ke(U){return m!==U?(n.useProgram(U),m=U,!0):!1}const ot={[Wi]:n.FUNC_ADD,[X2]:n.FUNC_SUBTRACT,[q2]:n.FUNC_REVERSE_SUBTRACT};ot[j2]=n.MIN,ot[Y2]=n.MAX;const C={[$2]:n.ZERO,[Z2]:n.ONE,[K2]:n.SRC_COLOR,[$l]:n.SRC_ALPHA,[iv]:n.SRC_ALPHA_SATURATE,[tv]:n.DST_COLOR,[J2]:n.DST_ALPHA,[Q2]:n.ONE_MINUS_SRC_COLOR,[Zl]:n.ONE_MINUS_SRC_ALPHA,[nv]:n.ONE_MINUS_DST_COLOR,[ev]:n.ONE_MINUS_DST_ALPHA,[rv]:n.CONSTANT_COLOR,[sv]:n.ONE_MINUS_CONSTANT_COLOR,[av]:n.CONSTANT_ALPHA,[ov]:n.ONE_MINUS_CONSTANT_ALPHA};function bt(U,ie,Y,Z,ae,Re,$e,At,kt,Ze){if(U===Ei){g===!0&&(fe(n.BLEND),g=!1);return}if(g===!1&&(pe(n.BLEND),g=!0),U!==W2){if(U!==v||Ze!==I){if((h!==Wi||_!==Wi)&&(n.blendEquation(n.FUNC_ADD),h=Wi,_=Wi),Ze)switch(U){case Nr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zf:n.blendFunc(n.ONE,n.ONE);break;case Bf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Vf:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Nr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zf:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Bf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Vf:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}f=null,x=null,M=null,T=null,w.set(0,0,0),A=0,v=U,I=Ze}return}ae=ae||ie,Re=Re||Y,$e=$e||Z,(ie!==h||ae!==_)&&(n.blendEquationSeparate(ot[ie],ot[ae]),h=ie,_=ae),(Y!==f||Z!==x||Re!==M||$e!==T)&&(n.blendFuncSeparate(C[Y],C[Z],C[Re],C[$e]),f=Y,x=Z,M=Re,T=$e),(At.equals(w)===!1||kt!==A)&&(n.blendColor(At.r,At.g,At.b,kt),w.copy(At),A=kt),v=U,I=!1}function tt(U,ie){U.side===Fn?fe(n.CULL_FACE):pe(n.CULL_FACE);let Y=U.side===tn;ie&&(Y=!Y),at(Y),U.blending===Nr&&U.transparent===!1?bt(Ei):bt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),r.setMask(U.colorWrite);const Z=U.stencilWrite;a.setTest(Z),Z&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ne(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?pe(n.SAMPLE_ALPHA_TO_COVERAGE):fe(n.SAMPLE_ALPHA_TO_COVERAGE)}function at(U){E!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),E=U)}function Ee(U){U!==V2?(pe(n.CULL_FACE),U!==y&&(U===kf?n.cullFace(n.BACK):U===H2?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):fe(n.CULL_FACE),y=U}function wt(U){U!==L&&(X&&n.lineWidth(U),L=U)}function Ne(U,ie,Y){U?(pe(n.POLYGON_OFFSET_FILL),(k!==ie||O!==Y)&&(n.polygonOffset(ie,Y),k=ie,O=Y)):fe(n.POLYGON_OFFSET_FILL)}function Fe(U){U?pe(n.SCISSOR_TEST):fe(n.SCISSOR_TEST)}function R(U){U===void 0&&(U=n.TEXTURE0+z-1),W!==U&&(n.activeTexture(U),W=U)}function S(U,ie,Y){Y===void 0&&(W===null?Y=n.TEXTURE0+z-1:Y=W);let Z=te[Y];Z===void 0&&(Z={type:void 0,texture:void 0},te[Y]=Z),(Z.type!==U||Z.texture!==ie)&&(W!==Y&&(n.activeTexture(Y),W=Y),n.bindTexture(U,ie||J[U]),Z.type=U,Z.texture=ie)}function H(){const U=te[W];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ze(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function je(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function De(U){Ae.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Ae.copy(U))}function ve(U){Ye.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),Ye.copy(U))}function Oe(U,ie){let Y=l.get(ie);Y===void 0&&(Y=new WeakMap,l.set(ie,Y));let Z=Y.get(U);Z===void 0&&(Z=n.getUniformBlockIndex(ie,U.name),Y.set(U,Z))}function We(U,ie){const Z=l.get(ie).get(U);o.get(ie)!==Z&&(n.uniformBlockBinding(ie,Z,U.__bindingPointIndex),o.set(ie,Z))}function gt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},W=null,te={},u={},p=new WeakMap,d=[],m=null,g=!1,v=null,h=null,f=null,x=null,_=null,M=null,T=null,w=new rt(0,0,0),A=0,I=!1,E=null,y=null,L=null,k=null,O=null,Ae.set(0,0,n.canvas.width,n.canvas.height),Ye.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:pe,disable:fe,bindFramebuffer:Te,drawBuffers:Le,useProgram:ke,setBlending:bt,setMaterial:tt,setFlipSided:at,setCullFace:Ee,setLineWidth:wt,setPolygonOffset:Ne,setScissorTest:Fe,activeTexture:R,bindTexture:S,unbindTexture:H,compressedTexImage2D:Q,compressedTexImage3D:ee,texImage2D:me,texImage3D:je,updateUBOMapping:Oe,uniformBlockBinding:We,texStorage2D:ze,texStorage3D:ne,texSubImage2D:K,texSubImage3D:be,compressedTexSubImage2D:le,compressedTexSubImage3D:ge,scissor:De,viewport:ve,reset:gt}}function Dh(n,e,t,i){const r=N5(i);switch(t){case S0:return n*e;case b0:return n*e;case w0:return n*e*2;case A0:return n*e/r.components*r.byteLength;case tu:return n*e/r.components*r.byteLength;case T0:return n*e*2/r.components*r.byteLength;case nu:return n*e*2/r.components*r.byteLength;case E0:return n*e*3/r.components*r.byteLength;case Tn:return n*e*4/r.components*r.byteLength;case iu:return n*e*4/r.components*r.byteLength;case Da:case Ua:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Na:case Oa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case nc:case rc:return Math.max(n,16)*Math.max(e,8)/4;case tc:case ic:return Math.max(n,8)*Math.max(e,8)/2;case sc:case ac:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case oc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case lc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case cc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case uc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case fc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case hc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case dc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case pc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case mc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case gc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case vc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case _c:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case xc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case yc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Mc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Fa:case Sc:case Ec:return Math.ceil(n/4)*Math.ceil(e/4)*16;case R0:case bc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case wc:case Ac:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function N5(n){switch(n){case ri:case x0:return{byteLength:1,components:1};case Us:case y0:case zs:return{byteLength:2,components:1};case Jc:case eu:return{byteLength:2,components:4};case ar:case Qc:case Jn:return{byteLength:4,components:1};case M0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function O5(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new qe,u=new WeakMap;let p;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,S){return m?new OffscreenCanvas(R,S):ro("canvas")}function v(R,S,H){let Q=1;const ee=Fe(R);if((ee.width>H||ee.height>H)&&(Q=H/Math.max(ee.width,ee.height)),Q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const K=Math.floor(Q*ee.width),be=Math.floor(Q*ee.height);p===void 0&&(p=g(K,be));const le=S?g(K,be):p;return le.width=K,le.height=be,le.getContext("2d").drawImage(R,0,0,K,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+K+"x"+be+")."),le}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),R;return R}function h(R){return R.generateMipmaps&&R.minFilter!==xn&&R.minFilter!==wn}function f(R){n.generateMipmap(R)}function x(R,S,H,Q,ee=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let K=S;if(S===n.RED&&(H===n.FLOAT&&(K=n.R32F),H===n.HALF_FLOAT&&(K=n.R16F),H===n.UNSIGNED_BYTE&&(K=n.R8)),S===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(K=n.R8UI),H===n.UNSIGNED_SHORT&&(K=n.R16UI),H===n.UNSIGNED_INT&&(K=n.R32UI),H===n.BYTE&&(K=n.R8I),H===n.SHORT&&(K=n.R16I),H===n.INT&&(K=n.R32I)),S===n.RG&&(H===n.FLOAT&&(K=n.RG32F),H===n.HALF_FLOAT&&(K=n.RG16F),H===n.UNSIGNED_BYTE&&(K=n.RG8)),S===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(K=n.RG8UI),H===n.UNSIGNED_SHORT&&(K=n.RG16UI),H===n.UNSIGNED_INT&&(K=n.RG32UI),H===n.BYTE&&(K=n.RG8I),H===n.SHORT&&(K=n.RG16I),H===n.INT&&(K=n.RG32I)),S===n.RGB&&H===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),S===n.RGBA){const be=ee?eo:nt.getTransfer(Q);H===n.FLOAT&&(K=n.RGBA32F),H===n.HALF_FLOAT&&(K=n.RGBA16F),H===n.UNSIGNED_BYTE&&(K=be===ut?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function _(R,S){let H;return R?S===null||S===ar||S===$r?H=n.DEPTH24_STENCIL8:S===Jn?H=n.DEPTH32F_STENCIL8:S===Us&&(H=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ar||S===$r?H=n.DEPTH_COMPONENT24:S===Jn?H=n.DEPTH_COMPONENT32F:S===Us&&(H=n.DEPTH_COMPONENT16),H}function M(R,S){return h(R)===!0||R.isFramebufferTexture&&R.minFilter!==xn&&R.minFilter!==wn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function T(R){const S=R.target;S.removeEventListener("dispose",T),A(S),S.isVideoTexture&&u.delete(S)}function w(R){const S=R.target;S.removeEventListener("dispose",w),E(S)}function A(R){const S=i.get(R);if(S.__webglInit===void 0)return;const H=R.source,Q=d.get(H);if(Q){const ee=Q[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&I(R),Object.keys(Q).length===0&&d.delete(H)}i.remove(R)}function I(R){const S=i.get(R);n.deleteTexture(S.__webglTexture);const H=R.source,Q=d.get(H);delete Q[S.__cacheKey],a.memory.textures--}function E(R){const S=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(S.__webglFramebuffer[Q]))for(let ee=0;ee<S.__webglFramebuffer[Q].length;ee++)n.deleteFramebuffer(S.__webglFramebuffer[Q][ee]);else n.deleteFramebuffer(S.__webglFramebuffer[Q]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[Q])}else{if(Array.isArray(S.__webglFramebuffer))for(let Q=0;Q<S.__webglFramebuffer.length;Q++)n.deleteFramebuffer(S.__webglFramebuffer[Q]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Q=0;Q<S.__webglColorRenderbuffer.length;Q++)S.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[Q]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const H=R.textures;for(let Q=0,ee=H.length;Q<ee;Q++){const K=i.get(H[Q]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),a.memory.textures--),i.remove(H[Q])}i.remove(R)}let y=0;function L(){y=0}function k(){const R=y;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),y+=1,R}function O(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function z(R,S){const H=i.get(R);if(R.isVideoTexture&&wt(R),R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){const Q=R.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ye(H,R,S);return}}t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+S)}function X(R,S){const H=i.get(R);if(R.version>0&&H.__version!==R.version){Ye(H,R,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+S)}function G(R,S){const H=i.get(R);if(R.version>0&&H.__version!==R.version){Ye(H,R,S);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+S)}function $(R,S){const H=i.get(R);if(R.version>0&&H.__version!==R.version){j(H,R,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+S)}const W={[Jl]:n.REPEAT,[Yi]:n.CLAMP_TO_EDGE,[ec]:n.MIRRORED_REPEAT},te={[xn]:n.NEAREST,[bv]:n.NEAREST_MIPMAP_NEAREST,[Qs]:n.NEAREST_MIPMAP_LINEAR,[wn]:n.LINEAR,[Xo]:n.LINEAR_MIPMAP_NEAREST,[$i]:n.LINEAR_MIPMAP_LINEAR},ue={[Cv]:n.NEVER,[Nv]:n.ALWAYS,[Pv]:n.LESS,[C0]:n.LEQUAL,[Lv]:n.EQUAL,[Uv]:n.GEQUAL,[Iv]:n.GREATER,[Dv]:n.NOTEQUAL};function de(R,S){if(S.type===Jn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===wn||S.magFilter===Xo||S.magFilter===Qs||S.magFilter===$i||S.minFilter===wn||S.minFilter===Xo||S.minFilter===Qs||S.minFilter===$i)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,W[S.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,W[S.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,W[S.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,te[S.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,te[S.minFilter]),S.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,ue[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===xn||S.minFilter!==Qs&&S.minFilter!==$i||S.type===Jn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Ae(R,S){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",T));const Q=S.source;let ee=d.get(Q);ee===void 0&&(ee={},d.set(Q,ee));const K=O(S);if(K!==R.__cacheKey){ee[K]===void 0&&(ee[K]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,H=!0),ee[K].usedTimes++;const be=ee[R.__cacheKey];be!==void 0&&(ee[R.__cacheKey].usedTimes--,be.usedTimes===0&&I(S)),R.__cacheKey=K,R.__webglTexture=ee[K].texture}return H}function Ye(R,S,H){let Q=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Q=n.TEXTURE_3D);const ee=Ae(R,S),K=S.source;t.bindTexture(Q,R.__webglTexture,n.TEXTURE0+H);const be=i.get(K);if(K.version!==be.__version||ee===!0){t.activeTexture(n.TEXTURE0+H);const le=nt.getPrimaries(nt.workingColorSpace),ge=S.colorSpace===Mi?null:nt.getPrimaries(S.colorSpace),ze=S.colorSpace===Mi||le===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let ne=v(S.image,!1,r.maxTextureSize);ne=Ne(S,ne);const me=s.convert(S.format,S.colorSpace),je=s.convert(S.type);let De=x(S.internalFormat,me,je,S.colorSpace,S.isVideoTexture);de(Q,S);let ve;const Oe=S.mipmaps,We=S.isVideoTexture!==!0,gt=be.__version===void 0||ee===!0,U=K.dataReady,ie=M(S,ne);if(S.isDepthTexture)De=_(S.format===Zr,S.type),gt&&(We?t.texStorage2D(n.TEXTURE_2D,1,De,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,De,ne.width,ne.height,0,me,je,null));else if(S.isDataTexture)if(Oe.length>0){We&&gt&&t.texStorage2D(n.TEXTURE_2D,ie,De,Oe[0].width,Oe[0].height);for(let Y=0,Z=Oe.length;Y<Z;Y++)ve=Oe[Y],We?U&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,ve.width,ve.height,me,je,ve.data):t.texImage2D(n.TEXTURE_2D,Y,De,ve.width,ve.height,0,me,je,ve.data);S.generateMipmaps=!1}else We?(gt&&t.texStorage2D(n.TEXTURE_2D,ie,De,ne.width,ne.height),U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ne.width,ne.height,me,je,ne.data)):t.texImage2D(n.TEXTURE_2D,0,De,ne.width,ne.height,0,me,je,ne.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){We&&gt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ie,De,Oe[0].width,Oe[0].height,ne.depth);for(let Y=0,Z=Oe.length;Y<Z;Y++)if(ve=Oe[Y],S.format!==Tn)if(me!==null)if(We){if(U)if(S.layerUpdates.size>0){const ae=Dh(ve.width,ve.height,S.format,S.type);for(const Re of S.layerUpdates){const $e=ve.data.subarray(Re*ae/ve.data.BYTES_PER_ELEMENT,(Re+1)*ae/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,Re,ve.width,ve.height,1,me,$e,0,0)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,ve.width,ve.height,ne.depth,me,ve.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Y,De,ve.width,ve.height,ne.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?U&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,ve.width,ve.height,ne.depth,me,je,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Y,De,ve.width,ve.height,ne.depth,0,me,je,ve.data)}else{We&&gt&&t.texStorage2D(n.TEXTURE_2D,ie,De,Oe[0].width,Oe[0].height);for(let Y=0,Z=Oe.length;Y<Z;Y++)ve=Oe[Y],S.format!==Tn?me!==null?We?U&&t.compressedTexSubImage2D(n.TEXTURE_2D,Y,0,0,ve.width,ve.height,me,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,Y,De,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?U&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,ve.width,ve.height,me,je,ve.data):t.texImage2D(n.TEXTURE_2D,Y,De,ve.width,ve.height,0,me,je,ve.data)}else if(S.isDataArrayTexture)if(We){if(gt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ie,De,ne.width,ne.height,ne.depth),U)if(S.layerUpdates.size>0){const Y=Dh(ne.width,ne.height,S.format,S.type);for(const Z of S.layerUpdates){const ae=ne.data.subarray(Z*Y/ne.data.BYTES_PER_ELEMENT,(Z+1)*Y/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Z,ne.width,ne.height,1,me,je,ae)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,me,je,ne.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,ne.width,ne.height,ne.depth,0,me,je,ne.data);else if(S.isData3DTexture)We?(gt&&t.texStorage3D(n.TEXTURE_3D,ie,De,ne.width,ne.height,ne.depth),U&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,me,je,ne.data)):t.texImage3D(n.TEXTURE_3D,0,De,ne.width,ne.height,ne.depth,0,me,je,ne.data);else if(S.isFramebufferTexture){if(gt)if(We)t.texStorage2D(n.TEXTURE_2D,ie,De,ne.width,ne.height);else{let Y=ne.width,Z=ne.height;for(let ae=0;ae<ie;ae++)t.texImage2D(n.TEXTURE_2D,ae,De,Y,Z,0,me,je,null),Y>>=1,Z>>=1}}else if(Oe.length>0){if(We&&gt){const Y=Fe(Oe[0]);t.texStorage2D(n.TEXTURE_2D,ie,De,Y.width,Y.height)}for(let Y=0,Z=Oe.length;Y<Z;Y++)ve=Oe[Y],We?U&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,me,je,ve):t.texImage2D(n.TEXTURE_2D,Y,De,me,je,ve);S.generateMipmaps=!1}else if(We){if(gt){const Y=Fe(ne);t.texStorage2D(n.TEXTURE_2D,ie,De,Y.width,Y.height)}U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me,je,ne)}else t.texImage2D(n.TEXTURE_2D,0,De,me,je,ne);h(S)&&f(Q),be.__version=K.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function j(R,S,H){if(S.image.length!==6)return;const Q=Ae(R,S),ee=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+H);const K=i.get(ee);if(ee.version!==K.__version||Q===!0){t.activeTexture(n.TEXTURE0+H);const be=nt.getPrimaries(nt.workingColorSpace),le=S.colorSpace===Mi?null:nt.getPrimaries(S.colorSpace),ge=S.colorSpace===Mi||be===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const ze=S.isCompressedTexture||S.image[0].isCompressedTexture,ne=S.image[0]&&S.image[0].isDataTexture,me=[];for(let Z=0;Z<6;Z++)!ze&&!ne?me[Z]=v(S.image[Z],!0,r.maxCubemapSize):me[Z]=ne?S.image[Z].image:S.image[Z],me[Z]=Ne(S,me[Z]);const je=me[0],De=s.convert(S.format,S.colorSpace),ve=s.convert(S.type),Oe=x(S.internalFormat,De,ve,S.colorSpace),We=S.isVideoTexture!==!0,gt=K.__version===void 0||Q===!0,U=ee.dataReady;let ie=M(S,je);de(n.TEXTURE_CUBE_MAP,S);let Y;if(ze){We&&gt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ie,Oe,je.width,je.height);for(let Z=0;Z<6;Z++){Y=me[Z].mipmaps;for(let ae=0;ae<Y.length;ae++){const Re=Y[ae];S.format!==Tn?De!==null?We?U&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae,0,0,Re.width,Re.height,De,Re.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae,Oe,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae,0,0,Re.width,Re.height,De,ve,Re.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae,Oe,Re.width,Re.height,0,De,ve,Re.data)}}}else{if(Y=S.mipmaps,We&&gt){Y.length>0&&ie++;const Z=Fe(me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ie,Oe,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ne){We?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,me[Z].width,me[Z].height,De,ve,me[Z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Oe,me[Z].width,me[Z].height,0,De,ve,me[Z].data);for(let ae=0;ae<Y.length;ae++){const $e=Y[ae].image[Z].image;We?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae+1,0,0,$e.width,$e.height,De,ve,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae+1,Oe,$e.width,$e.height,0,De,ve,$e.data)}}else{We?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,De,ve,me[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Oe,De,ve,me[Z]);for(let ae=0;ae<Y.length;ae++){const Re=Y[ae];We?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae+1,0,0,De,ve,Re.image[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae+1,Oe,De,ve,Re.image[Z])}}}h(S)&&f(n.TEXTURE_CUBE_MAP),K.__version=ee.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function J(R,S,H,Q,ee,K){const be=s.convert(H.format,H.colorSpace),le=s.convert(H.type),ge=x(H.internalFormat,be,le,H.colorSpace);if(!i.get(S).__hasExternalTextures){const ne=Math.max(1,S.width>>K),me=Math.max(1,S.height>>K);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,K,ge,ne,me,S.depth,0,be,le,null):t.texImage2D(ee,K,ge,ne,me,0,be,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),Ee(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,ee,i.get(H).__webglTexture,0,at(S)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,ee,i.get(H).__webglTexture,K),t.bindFramebuffer(n.FRAMEBUFFER,null)}function pe(R,S,H){if(n.bindRenderbuffer(n.RENDERBUFFER,R),S.depthBuffer){const Q=S.depthTexture,ee=Q&&Q.isDepthTexture?Q.type:null,K=_(S.stencilBuffer,ee),be=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=at(S);Ee(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,K,S.width,S.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,K,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,K,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,be,n.RENDERBUFFER,R)}else{const Q=S.textures;for(let ee=0;ee<Q.length;ee++){const K=Q[ee],be=s.convert(K.format,K.colorSpace),le=s.convert(K.type),ge=x(K.internalFormat,be,le,K.colorSpace),ze=at(S);H&&Ee(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ze,ge,S.width,S.height):Ee(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ze,ge,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,ge,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function fe(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),z(S.depthTexture,0);const Q=i.get(S.depthTexture).__webglTexture,ee=at(S);if(S.depthTexture.format===Or)Ee(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(S.depthTexture.format===Zr)Ee(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Te(R){const S=i.get(R),H=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");fe(S.__webglFramebuffer,R)}else if(H){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]=n.createRenderbuffer(),pe(S.__webglDepthbuffer[Q],R,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=n.createRenderbuffer(),pe(S.__webglDepthbuffer,R,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Le(R,S,H){const Q=i.get(R);S!==void 0&&J(Q.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&Te(R)}function ke(R){const S=R.texture,H=i.get(R),Q=i.get(S);R.addEventListener("dispose",w);const ee=R.textures,K=R.isWebGLCubeRenderTarget===!0,be=ee.length>1;if(be||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=S.version,a.memory.textures++),K){H.__webglFramebuffer=[];for(let le=0;le<6;le++)if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[le]=[];for(let ge=0;ge<S.mipmaps.length;ge++)H.__webglFramebuffer[le][ge]=n.createFramebuffer()}else H.__webglFramebuffer[le]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let le=0;le<S.mipmaps.length;le++)H.__webglFramebuffer[le]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(be)for(let le=0,ge=ee.length;le<ge;le++){const ze=i.get(ee[le]);ze.__webglTexture===void 0&&(ze.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&Ee(R)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let le=0;le<ee.length;le++){const ge=ee[le];H.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[le]);const ze=s.convert(ge.format,ge.colorSpace),ne=s.convert(ge.type),me=x(ge.internalFormat,ze,ne,ge.colorSpace,R.isXRRenderTarget===!0),je=at(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,je,me,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,H.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),pe(H.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),de(n.TEXTURE_CUBE_MAP,S);for(let le=0;le<6;le++)if(S.mipmaps&&S.mipmaps.length>0)for(let ge=0;ge<S.mipmaps.length;ge++)J(H.__webglFramebuffer[le][ge],R,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,ge);else J(H.__webglFramebuffer[le],R,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);h(S)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let le=0,ge=ee.length;le<ge;le++){const ze=ee[le],ne=i.get(ze);t.bindTexture(n.TEXTURE_2D,ne.__webglTexture),de(n.TEXTURE_2D,ze),J(H.__webglFramebuffer,R,ze,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,0),h(ze)&&f(n.TEXTURE_2D)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(le=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,Q.__webglTexture),de(le,S),S.mipmaps&&S.mipmaps.length>0)for(let ge=0;ge<S.mipmaps.length;ge++)J(H.__webglFramebuffer[ge],R,S,n.COLOR_ATTACHMENT0,le,ge);else J(H.__webglFramebuffer,R,S,n.COLOR_ATTACHMENT0,le,0);h(S)&&f(le),t.unbindTexture()}R.depthBuffer&&Te(R)}function ot(R){const S=R.textures;for(let H=0,Q=S.length;H<Q;H++){const ee=S[H];if(h(ee)){const K=R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,be=i.get(ee).__webglTexture;t.bindTexture(K,be),f(K),t.unbindTexture()}}}const C=[],bt=[];function tt(R){if(R.samples>0){if(Ee(R)===!1){const S=R.textures,H=R.width,Q=R.height;let ee=n.COLOR_BUFFER_BIT;const K=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=i.get(R),le=S.length>1;if(le)for(let ge=0;ge<S.length;ge++)t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let ge=0;ge<S.length;ge++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,be.__webglColorRenderbuffer[ge]);const ze=i.get(S[ge]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ze,0)}n.blitFramebuffer(0,0,H,Q,0,0,H,Q,ee,n.NEAREST),l===!0&&(C.length=0,bt.length=0,C.push(n.COLOR_ATTACHMENT0+ge),R.depthBuffer&&R.resolveDepthBuffer===!1&&(C.push(K),bt.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,bt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,C))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let ge=0;ge<S.length;ge++){t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,be.__webglColorRenderbuffer[ge]);const ze=i.get(S[ge]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,ze,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const S=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function at(R){return Math.min(r.maxSamples,R.samples)}function Ee(R){const S=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function wt(R){const S=a.render.frame;u.get(R)!==S&&(u.set(R,S),R.update())}function Ne(R,S){const H=R.colorSpace,Q=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==Ci&&H!==Mi&&(nt.getTransfer(H)===ut?(Q!==Tn||ee!==ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),S}function Fe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=L,this.setTexture2D=z,this.setTexture2DArray=X,this.setTexture3D=G,this.setTextureCube=$,this.rebindTextures=Le,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Ee}function F5(n,e){function t(i,r=Mi){let s;const a=nt.getTransfer(r);if(i===ri)return n.UNSIGNED_BYTE;if(i===Jc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===eu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===M0)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===x0)return n.BYTE;if(i===y0)return n.SHORT;if(i===Us)return n.UNSIGNED_SHORT;if(i===Qc)return n.INT;if(i===ar)return n.UNSIGNED_INT;if(i===Jn)return n.FLOAT;if(i===zs)return n.HALF_FLOAT;if(i===S0)return n.ALPHA;if(i===E0)return n.RGB;if(i===Tn)return n.RGBA;if(i===b0)return n.LUMINANCE;if(i===w0)return n.LUMINANCE_ALPHA;if(i===Or)return n.DEPTH_COMPONENT;if(i===Zr)return n.DEPTH_STENCIL;if(i===A0)return n.RED;if(i===tu)return n.RED_INTEGER;if(i===T0)return n.RG;if(i===nu)return n.RG_INTEGER;if(i===iu)return n.RGBA_INTEGER;if(i===Da||i===Ua||i===Na||i===Oa)if(a===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Da)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ua)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Na)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Oa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Da)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ua)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Na)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Oa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===tc||i===nc||i===ic||i===rc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===tc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===nc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ic)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===rc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===sc||i===ac||i===oc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===sc||i===ac)return a===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===oc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===lc||i===cc||i===uc||i===fc||i===hc||i===dc||i===pc||i===mc||i===gc||i===vc||i===_c||i===xc||i===yc||i===Mc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===lc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===cc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===uc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===fc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===hc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===dc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===pc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===mc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===gc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===vc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===_c)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===xc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===yc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Mc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Fa||i===Sc||i===Ec)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Fa)return a===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Sc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ec)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===R0||i===bc||i===wc||i===Ac)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Fa)return s.COMPRESSED_RED_RGTC1_EXT;if(i===bc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===wc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ac)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$r?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class k5 extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ir extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const z5={type:"move"};class _l{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ir,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ir,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ir,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const h=t.getJointPose(v,i),f=this._getHandJoint(c,v);h!==null&&(f.matrix.fromArray(h.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=h.radius),f.visible=h!==null}const u=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],d=u.position.distanceTo(p.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(z5)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ir;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const B5=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,V5=`
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

}`;class H5{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new nn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ri({vertexShader:B5,fragmentShader:V5,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ce(new Ws(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class G5 extends es{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,p=null,d=null,m=null,g=null;const v=new H5,h=t.getContextAttributes();let f=null,x=null;const _=[],M=[],T=new qe;let w=null;const A=new _n;A.layers.enable(1),A.viewport=new Ft;const I=new _n;I.layers.enable(2),I.viewport=new Ft;const E=[A,I],y=new k5;y.layers.enable(1),y.layers.enable(2);let L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let J=_[j];return J===void 0&&(J=new _l,_[j]=J),J.getTargetRaySpace()},this.getControllerGrip=function(j){let J=_[j];return J===void 0&&(J=new _l,_[j]=J),J.getGripSpace()},this.getHand=function(j){let J=_[j];return J===void 0&&(J=new _l,_[j]=J),J.getHandSpace()};function O(j){const J=M.indexOf(j.inputSource);if(J===-1)return;const pe=_[J];pe!==void 0&&(pe.update(j.inputSource,j.frame,c||a),pe.dispatchEvent({type:j.type,data:j.inputSource}))}function z(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",X);for(let j=0;j<_.length;j++){const J=M[j];J!==null&&(M[j]=null,_[j].disconnect(J))}L=null,k=null,v.reset(),e.setRenderTarget(f),m=null,d=null,p=null,r=null,x=null,Ye.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return p},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",z),r.addEventListener("inputsourceschange",X),h.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(T),r.renderState.layers===void 0){const J={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,J),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),x=new or(m.framebufferWidth,m.framebufferHeight,{format:Tn,type:ri,colorSpace:e.outputColorSpace,stencilBuffer:h.stencil})}else{let J=null,pe=null,fe=null;h.depth&&(fe=h.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=h.stencil?Zr:Or,pe=h.stencil?$r:ar);const Te={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:s};p=new XRWebGLBinding(r,t),d=p.createProjectionLayer(Te),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new or(d.textureWidth,d.textureHeight,{format:Tn,type:ri,depthTexture:new H0(d.textureWidth,d.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:h.stencil,colorSpace:e.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ye.setContext(r),Ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function X(j){for(let J=0;J<j.removed.length;J++){const pe=j.removed[J],fe=M.indexOf(pe);fe>=0&&(M[fe]=null,_[fe].disconnect(pe))}for(let J=0;J<j.added.length;J++){const pe=j.added[J];let fe=M.indexOf(pe);if(fe===-1){for(let Le=0;Le<_.length;Le++)if(Le>=M.length){M.push(pe),fe=Le;break}else if(M[Le]===null){M[Le]=pe,fe=Le;break}if(fe===-1)break}const Te=_[fe];Te&&Te.connect(pe)}}const G=new D,$=new D;function W(j,J,pe){G.setFromMatrixPosition(J.matrixWorld),$.setFromMatrixPosition(pe.matrixWorld);const fe=G.distanceTo($),Te=J.projectionMatrix.elements,Le=pe.projectionMatrix.elements,ke=Te[14]/(Te[10]-1),ot=Te[14]/(Te[10]+1),C=(Te[9]+1)/Te[5],bt=(Te[9]-1)/Te[5],tt=(Te[8]-1)/Te[0],at=(Le[8]+1)/Le[0],Ee=ke*tt,wt=ke*at,Ne=fe/(-tt+at),Fe=Ne*-tt;J.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Fe),j.translateZ(Ne),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const R=ke+Ne,S=ot+Ne,H=Ee-Fe,Q=wt+(fe-Fe),ee=C*ot/S*R,K=bt*ot/S*R;j.projectionMatrix.makePerspective(H,Q,ee,K,R,S),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function te(j,J){J===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(J.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;v.texture!==null&&(j.near=v.depthNear,j.far=v.depthFar),y.near=I.near=A.near=j.near,y.far=I.far=A.far=j.far,(L!==y.near||k!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),L=y.near,k=y.far,A.near=L,A.far=k,I.near=L,I.far=k,A.updateProjectionMatrix(),I.updateProjectionMatrix(),j.updateProjectionMatrix());const J=j.parent,pe=y.cameras;te(y,J);for(let fe=0;fe<pe.length;fe++)te(pe[fe],J);pe.length===2?W(y,A,I):y.projectionMatrix.copy(A.projectionMatrix),ue(j,y,J)};function ue(j,J,pe){pe===null?j.matrix.copy(J.matrixWorld):(j.matrix.copy(pe.matrixWorld),j.matrix.invert(),j.matrix.multiply(J.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(J.projectionMatrix),j.projectionMatrixInverse.copy(J.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Tc*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=j)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let de=null;function Ae(j,J){if(u=J.getViewerPose(c||a),g=J,u!==null){const pe=u.views;m!==null&&(e.setRenderTargetFramebuffer(x,m.framebuffer),e.setRenderTarget(x));let fe=!1;pe.length!==y.cameras.length&&(y.cameras.length=0,fe=!0);for(let Le=0;Le<pe.length;Le++){const ke=pe[Le];let ot=null;if(m!==null)ot=m.getViewport(ke);else{const bt=p.getViewSubImage(d,ke);ot=bt.viewport,Le===0&&(e.setRenderTargetTextures(x,bt.colorTexture,d.ignoreDepthValues?void 0:bt.depthStencilTexture),e.setRenderTarget(x))}let C=E[Le];C===void 0&&(C=new _n,C.layers.enable(Le),C.viewport=new Ft,E[Le]=C),C.matrix.fromArray(ke.transform.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale),C.projectionMatrix.fromArray(ke.projectionMatrix),C.projectionMatrixInverse.copy(C.projectionMatrix).invert(),C.viewport.set(ot.x,ot.y,ot.width,ot.height),Le===0&&(y.matrix.copy(C.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),fe===!0&&y.cameras.push(C)}const Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const Le=p.getDepthInformation(pe[0]);Le&&Le.isValid&&Le.texture&&v.init(e,Le,r.renderState)}}for(let pe=0;pe<_.length;pe++){const fe=M[pe],Te=_[pe];fe!==null&&Te!==void 0&&Te.update(fe,J,c||a)}de&&de(j,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),g=null}const Ye=new V0;Ye.setAnimationLoop(Ae),this.setAnimationLoop=function(j){de=j},this.dispose=function(){}}}const Fi=new Gn,W5=new _t;function X5(n,e){function t(h,f){h.matrixAutoUpdate===!0&&h.updateMatrix(),f.value.copy(h.matrix)}function i(h,f){f.color.getRGB(h.fogColor.value,F0(n)),f.isFog?(h.fogNear.value=f.near,h.fogFar.value=f.far):f.isFogExp2&&(h.fogDensity.value=f.density)}function r(h,f,x,_,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(h,f):f.isMeshToonMaterial?(s(h,f),p(h,f)):f.isMeshPhongMaterial?(s(h,f),u(h,f)):f.isMeshStandardMaterial?(s(h,f),d(h,f),f.isMeshPhysicalMaterial&&m(h,f,M)):f.isMeshMatcapMaterial?(s(h,f),g(h,f)):f.isMeshDepthMaterial?s(h,f):f.isMeshDistanceMaterial?(s(h,f),v(h,f)):f.isMeshNormalMaterial?s(h,f):f.isLineBasicMaterial?(a(h,f),f.isLineDashedMaterial&&o(h,f)):f.isPointsMaterial?l(h,f,x,_):f.isSpriteMaterial?c(h,f):f.isShadowMaterial?(h.color.value.copy(f.color),h.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(h,f){h.opacity.value=f.opacity,f.color&&h.diffuse.value.copy(f.color),f.emissive&&h.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(h.map.value=f.map,t(f.map,h.mapTransform)),f.alphaMap&&(h.alphaMap.value=f.alphaMap,t(f.alphaMap,h.alphaMapTransform)),f.bumpMap&&(h.bumpMap.value=f.bumpMap,t(f.bumpMap,h.bumpMapTransform),h.bumpScale.value=f.bumpScale,f.side===tn&&(h.bumpScale.value*=-1)),f.normalMap&&(h.normalMap.value=f.normalMap,t(f.normalMap,h.normalMapTransform),h.normalScale.value.copy(f.normalScale),f.side===tn&&h.normalScale.value.negate()),f.displacementMap&&(h.displacementMap.value=f.displacementMap,t(f.displacementMap,h.displacementMapTransform),h.displacementScale.value=f.displacementScale,h.displacementBias.value=f.displacementBias),f.emissiveMap&&(h.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,h.emissiveMapTransform)),f.specularMap&&(h.specularMap.value=f.specularMap,t(f.specularMap,h.specularMapTransform)),f.alphaTest>0&&(h.alphaTest.value=f.alphaTest);const x=e.get(f),_=x.envMap,M=x.envMapRotation;_&&(h.envMap.value=_,Fi.copy(M),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),h.envMapRotation.value.setFromMatrix4(W5.makeRotationFromEuler(Fi)),h.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=f.reflectivity,h.ior.value=f.ior,h.refractionRatio.value=f.refractionRatio),f.lightMap&&(h.lightMap.value=f.lightMap,h.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,h.lightMapTransform)),f.aoMap&&(h.aoMap.value=f.aoMap,h.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,h.aoMapTransform))}function a(h,f){h.diffuse.value.copy(f.color),h.opacity.value=f.opacity,f.map&&(h.map.value=f.map,t(f.map,h.mapTransform))}function o(h,f){h.dashSize.value=f.dashSize,h.totalSize.value=f.dashSize+f.gapSize,h.scale.value=f.scale}function l(h,f,x,_){h.diffuse.value.copy(f.color),h.opacity.value=f.opacity,h.size.value=f.size*x,h.scale.value=_*.5,f.map&&(h.map.value=f.map,t(f.map,h.uvTransform)),f.alphaMap&&(h.alphaMap.value=f.alphaMap,t(f.alphaMap,h.alphaMapTransform)),f.alphaTest>0&&(h.alphaTest.value=f.alphaTest)}function c(h,f){h.diffuse.value.copy(f.color),h.opacity.value=f.opacity,h.rotation.value=f.rotation,f.map&&(h.map.value=f.map,t(f.map,h.mapTransform)),f.alphaMap&&(h.alphaMap.value=f.alphaMap,t(f.alphaMap,h.alphaMapTransform)),f.alphaTest>0&&(h.alphaTest.value=f.alphaTest)}function u(h,f){h.specular.value.copy(f.specular),h.shininess.value=Math.max(f.shininess,1e-4)}function p(h,f){f.gradientMap&&(h.gradientMap.value=f.gradientMap)}function d(h,f){h.metalness.value=f.metalness,f.metalnessMap&&(h.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,h.metalnessMapTransform)),h.roughness.value=f.roughness,f.roughnessMap&&(h.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,h.roughnessMapTransform)),f.envMap&&(h.envMapIntensity.value=f.envMapIntensity)}function m(h,f,x){h.ior.value=f.ior,f.sheen>0&&(h.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),h.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(h.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,h.sheenColorMapTransform)),f.sheenRoughnessMap&&(h.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,h.sheenRoughnessMapTransform))),f.clearcoat>0&&(h.clearcoat.value=f.clearcoat,h.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(h.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,h.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(h.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===tn&&h.clearcoatNormalScale.value.negate())),f.dispersion>0&&(h.dispersion.value=f.dispersion),f.iridescence>0&&(h.iridescence.value=f.iridescence,h.iridescenceIOR.value=f.iridescenceIOR,h.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(h.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,h.iridescenceMapTransform)),f.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),f.transmission>0&&(h.transmission.value=f.transmission,h.transmissionSamplerMap.value=x.texture,h.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(h.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,h.transmissionMapTransform)),h.thickness.value=f.thickness,f.thicknessMap&&(h.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=f.attenuationDistance,h.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(h.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(h.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=f.specularIntensity,h.specularColor.value.copy(f.specularColor),f.specularColorMap&&(h.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,h.specularColorMapTransform)),f.specularIntensityMap&&(h.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,h.specularIntensityMapTransform))}function g(h,f){f.matcap&&(h.matcap.value=f.matcap)}function v(h,f){const x=e.get(f).light;h.referencePosition.value.setFromMatrixPosition(x.matrixWorld),h.nearDistance.value=x.shadow.camera.near,h.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function q5(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,_){const M=_.program;i.uniformBlockBinding(x,M)}function c(x,_){let M=r[x.id];M===void 0&&(g(x),M=u(x),r[x.id]=M,x.addEventListener("dispose",h));const T=_.program;i.updateUBOMapping(x,T);const w=e.render.frame;s[x.id]!==w&&(d(x),s[x.id]=w)}function u(x){const _=p();x.__bindingPointIndex=_;const M=n.createBuffer(),T=x.__size,w=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,T,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,M),M}function p(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const _=r[x.id],M=x.uniforms,T=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let w=0,A=M.length;w<A;w++){const I=Array.isArray(M[w])?M[w]:[M[w]];for(let E=0,y=I.length;E<y;E++){const L=I[E];if(m(L,w,E,T)===!0){const k=L.__offset,O=Array.isArray(L.value)?L.value:[L.value];let z=0;for(let X=0;X<O.length;X++){const G=O[X],$=v(G);typeof G=="number"||typeof G=="boolean"?(L.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,k+z,L.__data)):G.isMatrix3?(L.__data[0]=G.elements[0],L.__data[1]=G.elements[1],L.__data[2]=G.elements[2],L.__data[3]=0,L.__data[4]=G.elements[3],L.__data[5]=G.elements[4],L.__data[6]=G.elements[5],L.__data[7]=0,L.__data[8]=G.elements[6],L.__data[9]=G.elements[7],L.__data[10]=G.elements[8],L.__data[11]=0):(G.toArray(L.__data,z),z+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(x,_,M,T){const w=x.value,A=_+"_"+M;if(T[A]===void 0)return typeof w=="number"||typeof w=="boolean"?T[A]=w:T[A]=w.clone(),!0;{const I=T[A];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return T[A]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function g(x){const _=x.uniforms;let M=0;const T=16;for(let A=0,I=_.length;A<I;A++){const E=Array.isArray(_[A])?_[A]:[_[A]];for(let y=0,L=E.length;y<L;y++){const k=E[y],O=Array.isArray(k.value)?k.value:[k.value];for(let z=0,X=O.length;z<X;z++){const G=O[z],$=v(G),W=M%T;W!==0&&T-W<$.boundary&&(M+=T-W),k.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=M,M+=$.storage}}}const w=M%T;return w>0&&(M+=T-w),x.__size=M,x.__cache={},this}function v(x){const _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function h(x){const _=x.target;_.removeEventListener("dispose",h);const M=a.indexOf(_.__bindingPointIndex);a.splice(M,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function f(){for(const x in r)n.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}class j5{constructor(e={}){const{canvas:t=Fv(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const m=new Uint32Array(4),g=new Int32Array(4);let v=null,h=null;const f=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Dn,this.toneMapping=bi,this.toneMappingExposure=1;const _=this;let M=!1,T=0,w=0,A=null,I=-1,E=null;const y=new Ft,L=new Ft;let k=null;const O=new rt(0);let z=0,X=t.width,G=t.height,$=1,W=null,te=null;const ue=new Ft(0,0,X,G),de=new Ft(0,0,X,G);let Ae=!1;const Ye=new B0;let j=!1,J=!1;const pe=new _t,fe=new D,Te=new Ft,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function ot(){return A===null?$:1}let C=i;function bt(b,N){return t.getContext(b,N)}try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Kc}`),t.addEventListener("webglcontextlost",Y,!1),t.addEventListener("webglcontextrestored",Z,!1),t.addEventListener("webglcontextcreationerror",ae,!1),C===null){const N="webgl2";if(C=bt(N,b),C===null)throw bt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let tt,at,Ee,wt,Ne,Fe,R,S,H,Q,ee,K,be,le,ge,ze,ne,me,je,De,ve,Oe,We,gt;function U(){tt=new ey(C),tt.init(),Oe=new F5(C,tt),at=new j3(C,tt,e,Oe),Ee=new U5(C),wt=new iy(C),Ne=new y5,Fe=new O5(C,tt,Ee,Ne,at,Oe,wt),R=new $3(_),S=new J3(_),H=new c_(C),We=new X3(C,H),Q=new ty(C,H,wt,We),ee=new sy(C,Q,H,wt),je=new ry(C,at,Fe),ze=new Y3(Ne),K=new x5(_,R,S,tt,at,We,ze),be=new X5(_,Ne),le=new S5,ge=new R5(tt),me=new W3(_,R,S,Ee,ee,d,l),ne=new D5(_,ee,at),gt=new q5(C,wt,at,Ee),De=new q3(C,tt,wt),ve=new ny(C,tt,wt),wt.programs=K.programs,_.capabilities=at,_.extensions=tt,_.properties=Ne,_.renderLists=le,_.shadowMap=ne,_.state=Ee,_.info=wt}U();const ie=new G5(_,C);this.xr=ie,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const b=tt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=tt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(b){b!==void 0&&($=b,this.setSize(X,G,!1))},this.getSize=function(b){return b.set(X,G)},this.setSize=function(b,N,B=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=b,G=N,t.width=Math.floor(b*$),t.height=Math.floor(N*$),B===!0&&(t.style.width=b+"px",t.style.height=N+"px"),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(X*$,G*$).floor()},this.setDrawingBufferSize=function(b,N,B){X=b,G=N,$=B,t.width=Math.floor(b*B),t.height=Math.floor(N*B),this.setViewport(0,0,b,N)},this.getCurrentViewport=function(b){return b.copy(y)},this.getViewport=function(b){return b.copy(ue)},this.setViewport=function(b,N,B,V){b.isVector4?ue.set(b.x,b.y,b.z,b.w):ue.set(b,N,B,V),Ee.viewport(y.copy(ue).multiplyScalar($).round())},this.getScissor=function(b){return b.copy(de)},this.setScissor=function(b,N,B,V){b.isVector4?de.set(b.x,b.y,b.z,b.w):de.set(b,N,B,V),Ee.scissor(L.copy(de).multiplyScalar($).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(b){Ee.setScissorTest(Ae=b)},this.setOpaqueSort=function(b){W=b},this.setTransparentSort=function(b){te=b},this.getClearColor=function(b){return b.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor.apply(me,arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha.apply(me,arguments)},this.clear=function(b=!0,N=!0,B=!0){let V=0;if(b){let F=!1;if(A!==null){const re=A.texture.format;F=re===iu||re===nu||re===tu}if(F){const re=A.texture.type,he=re===ri||re===ar||re===Us||re===$r||re===Jc||re===eu,xe=me.getClearColor(),ye=me.getClearAlpha(),Ce=xe.r,Ie=xe.g,we=xe.b;he?(m[0]=Ce,m[1]=Ie,m[2]=we,m[3]=ye,C.clearBufferuiv(C.COLOR,0,m)):(g[0]=Ce,g[1]=Ie,g[2]=we,g[3]=ye,C.clearBufferiv(C.COLOR,0,g))}else V|=C.COLOR_BUFFER_BIT}N&&(V|=C.DEPTH_BUFFER_BIT),B&&(V|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Y,!1),t.removeEventListener("webglcontextrestored",Z,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),le.dispose(),ge.dispose(),Ne.dispose(),R.dispose(),S.dispose(),ee.dispose(),We.dispose(),gt.dispose(),K.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Ln),ie.removeEventListener("sessionend",fu),Pi.stop()};function Y(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function Z(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const b=wt.autoReset,N=ne.enabled,B=ne.autoUpdate,V=ne.needsUpdate,F=ne.type;U(),wt.autoReset=b,ne.enabled=N,ne.autoUpdate=B,ne.needsUpdate=V,ne.type=F}function ae(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Re(b){const N=b.target;N.removeEventListener("dispose",Re),$e(N)}function $e(b){At(b),Ne.remove(b)}function At(b){const N=Ne.get(b).programs;N!==void 0&&(N.forEach(function(B){K.releaseProgram(B)}),b.isShaderMaterial&&K.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,B,V,F,re){N===null&&(N=Le);const he=F.isMesh&&F.matrixWorld.determinant()<0,xe=Y0(b,N,B,V,F);Ee.setMaterial(V,he);let ye=B.index,Ce=1;if(V.wireframe===!0){if(ye=Q.getWireframeAttribute(B),ye===void 0)return;Ce=2}const Ie=B.drawRange,we=B.attributes.position;let Ke=Ie.start*Ce,yt=(Ie.start+Ie.count)*Ce;re!==null&&(Ke=Math.max(Ke,re.start*Ce),yt=Math.min(yt,(re.start+re.count)*Ce)),ye!==null?(Ke=Math.max(Ke,0),yt=Math.min(yt,ye.count)):we!=null&&(Ke=Math.max(Ke,0),yt=Math.min(yt,we.count));const Mt=yt-Ke;if(Mt<0||Mt===1/0)return;We.setup(F,V,xe,B,ye);let sn,Qe=De;if(ye!==null&&(sn=H.get(ye),Qe=ve,Qe.setIndex(sn)),F.isMesh)V.wireframe===!0?(Ee.setLineWidth(V.wireframeLinewidth*ot()),Qe.setMode(C.LINES)):Qe.setMode(C.TRIANGLES);else if(F.isLine){let Se=V.linewidth;Se===void 0&&(Se=1),Ee.setLineWidth(Se*ot()),F.isLineSegments?Qe.setMode(C.LINES):F.isLineLoop?Qe.setMode(C.LINE_LOOP):Qe.setMode(C.LINE_STRIP)}else F.isPoints?Qe.setMode(C.POINTS):F.isSprite&&Qe.setMode(C.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Qe.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))Qe.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Se=F._multiDrawStarts,zt=F._multiDrawCounts,Je=F._multiDrawCount,Mn=ye?H.get(ye).bytesPerElement:1,lr=Ne.get(V).currentProgram.getUniforms();for(let an=0;an<Je;an++)lr.setValue(C,"_gl_DrawID",an),Qe.render(Se[an]/Mn,zt[an])}else if(F.isInstancedMesh)Qe.renderInstances(Ke,Mt,F.count);else if(B.isInstancedBufferGeometry){const Se=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,zt=Math.min(B.instanceCount,Se);Qe.renderInstances(Ke,Mt,zt)}else Qe.render(Ke,Mt)};function kt(b,N,B){b.transparent===!0&&b.side===Fn&&b.forceSinglePass===!1?(b.side=tn,b.needsUpdate=!0,qs(b,N,B),b.side=ii,b.needsUpdate=!0,qs(b,N,B),b.side=Fn):qs(b,N,B)}this.compile=function(b,N,B=null){B===null&&(B=b),h=ge.get(B),h.init(N),x.push(h),B.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(h.pushLight(F),F.castShadow&&h.pushShadow(F))}),b!==B&&b.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(h.pushLight(F),F.castShadow&&h.pushShadow(F))}),h.setupLights();const V=new Set;return b.traverse(function(F){const re=F.material;if(re)if(Array.isArray(re))for(let he=0;he<re.length;he++){const xe=re[he];kt(xe,B,F),V.add(xe)}else kt(re,B,F),V.add(re)}),x.pop(),h=null,V},this.compileAsync=function(b,N,B=null){const V=this.compile(b,N,B);return new Promise(F=>{function re(){if(V.forEach(function(he){Ne.get(he).currentProgram.isReady()&&V.delete(he)}),V.size===0){F(b);return}setTimeout(re,10)}tt.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Ze=null;function Wn(b){Ze&&Ze(b)}function Ln(){Pi.stop()}function fu(){Pi.start()}const Pi=new V0;Pi.setAnimationLoop(Wn),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(b){Ze=b,ie.setAnimationLoop(b),b===null?Pi.stop():Pi.start()},ie.addEventListener("sessionstart",Ln),ie.addEventListener("sessionend",fu),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(N),N=ie.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,N,A),h=ge.get(b,x.length),h.init(N),x.push(h),pe.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Ye.setFromProjectionMatrix(pe),J=this.localClippingEnabled,j=ze.init(this.clippingPlanes,J),v=le.get(b,f.length),v.init(),f.push(v),ie.enabled===!0&&ie.isPresenting===!0){const re=_.xr.getDepthSensingMesh();re!==null&&Ro(re,N,-1/0,_.sortObjects)}Ro(b,N,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(W,te),ke=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,ke&&me.addToRenderList(v,b),this.info.render.frame++,j===!0&&ze.beginShadows();const B=h.state.shadowsArray;ne.render(B,b,N),j===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=v.opaque,F=v.transmissive;if(h.setupLights(),N.isArrayCamera){const re=N.cameras;if(F.length>0)for(let he=0,xe=re.length;he<xe;he++){const ye=re[he];du(V,F,b,ye)}ke&&me.render(b);for(let he=0,xe=re.length;he<xe;he++){const ye=re[he];hu(v,b,ye,ye.viewport)}}else F.length>0&&du(V,F,b,N),ke&&me.render(b),hu(v,b,N);A!==null&&(Fe.updateMultisampleRenderTarget(A),Fe.updateRenderTargetMipmap(A)),b.isScene===!0&&b.onAfterRender(_,b,N),We.resetDefaultState(),I=-1,E=null,x.pop(),x.length>0?(h=x[x.length-1],j===!0&&ze.setGlobalState(_.clippingPlanes,h.state.camera)):h=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function Ro(b,N,B,V){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)B=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)h.pushLight(b),b.castShadow&&h.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ye.intersectsSprite(b)){V&&Te.setFromMatrixPosition(b.matrixWorld).applyMatrix4(pe);const he=ee.update(b),xe=b.material;xe.visible&&v.push(b,he,xe,B,Te.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ye.intersectsObject(b))){const he=ee.update(b),xe=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Te.copy(b.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Te.copy(he.boundingSphere.center)),Te.applyMatrix4(b.matrixWorld).applyMatrix4(pe)),Array.isArray(xe)){const ye=he.groups;for(let Ce=0,Ie=ye.length;Ce<Ie;Ce++){const we=ye[Ce],Ke=xe[we.materialIndex];Ke&&Ke.visible&&v.push(b,he,Ke,B,Te.z,we)}}else xe.visible&&v.push(b,he,xe,B,Te.z,null)}}const re=b.children;for(let he=0,xe=re.length;he<xe;he++)Ro(re[he],N,B,V)}function hu(b,N,B,V){const F=b.opaque,re=b.transmissive,he=b.transparent;h.setupLightsView(B),j===!0&&ze.setGlobalState(_.clippingPlanes,B),V&&Ee.viewport(y.copy(V)),F.length>0&&Xs(F,N,B),re.length>0&&Xs(re,N,B),he.length>0&&Xs(he,N,B),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function du(b,N,B,V){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[V.id]===void 0&&(h.state.transmissionRenderTarget[V.id]=new or(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?zs:ri,minFilter:$i,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const re=h.state.transmissionRenderTarget[V.id],he=V.viewport||y;re.setSize(he.z,he.w);const xe=_.getRenderTarget();_.setRenderTarget(re),_.getClearColor(O),z=_.getClearAlpha(),z<1&&_.setClearColor(16777215,.5),ke?me.render(B):_.clear();const ye=_.toneMapping;_.toneMapping=bi;const Ce=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),h.setupLightsView(V),j===!0&&ze.setGlobalState(_.clippingPlanes,V),Xs(b,B,V),Fe.updateMultisampleRenderTarget(re),Fe.updateRenderTargetMipmap(re),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let we=0,Ke=N.length;we<Ke;we++){const yt=N[we],Mt=yt.object,sn=yt.geometry,Qe=yt.material,Se=yt.group;if(Qe.side===Fn&&Mt.layers.test(V.layers)){const zt=Qe.side;Qe.side=tn,Qe.needsUpdate=!0,pu(Mt,B,V,sn,Qe,Se),Qe.side=zt,Qe.needsUpdate=!0,Ie=!0}}Ie===!0&&(Fe.updateMultisampleRenderTarget(re),Fe.updateRenderTargetMipmap(re))}_.setRenderTarget(xe),_.setClearColor(O,z),Ce!==void 0&&(V.viewport=Ce),_.toneMapping=ye}function Xs(b,N,B){const V=N.isScene===!0?N.overrideMaterial:null;for(let F=0,re=b.length;F<re;F++){const he=b[F],xe=he.object,ye=he.geometry,Ce=V===null?he.material:V,Ie=he.group;xe.layers.test(B.layers)&&pu(xe,N,B,ye,Ce,Ie)}}function pu(b,N,B,V,F,re){b.onBeforeRender(_,N,B,V,F,re),b.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),F.transparent===!0&&F.side===Fn&&F.forceSinglePass===!1?(F.side=tn,F.needsUpdate=!0,_.renderBufferDirect(B,N,V,F,b,re),F.side=ii,F.needsUpdate=!0,_.renderBufferDirect(B,N,V,F,b,re),F.side=Fn):_.renderBufferDirect(B,N,V,F,b,re),b.onAfterRender(_,N,B,V,F,re)}function qs(b,N,B){N.isScene!==!0&&(N=Le);const V=Ne.get(b),F=h.state.lights,re=h.state.shadowsArray,he=F.state.version,xe=K.getParameters(b,F.state,re,N,B),ye=K.getProgramCacheKey(xe);let Ce=V.programs;V.environment=b.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(b.isMeshStandardMaterial?S:R).get(b.envMap||V.environment),V.envMapRotation=V.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,Ce===void 0&&(b.addEventListener("dispose",Re),Ce=new Map,V.programs=Ce);let Ie=Ce.get(ye);if(Ie!==void 0){if(V.currentProgram===Ie&&V.lightsStateVersion===he)return gu(b,xe),Ie}else xe.uniforms=K.getUniforms(b),b.onBeforeCompile(xe,_),Ie=K.acquireProgram(xe,ye),Ce.set(ye,Ie),V.uniforms=xe.uniforms;const we=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(we.clippingPlanes=ze.uniform),gu(b,xe),V.needsLights=Z0(b),V.lightsStateVersion=he,V.needsLights&&(we.ambientLightColor.value=F.state.ambient,we.lightProbe.value=F.state.probe,we.directionalLights.value=F.state.directional,we.directionalLightShadows.value=F.state.directionalShadow,we.spotLights.value=F.state.spot,we.spotLightShadows.value=F.state.spotShadow,we.rectAreaLights.value=F.state.rectArea,we.ltc_1.value=F.state.rectAreaLTC1,we.ltc_2.value=F.state.rectAreaLTC2,we.pointLights.value=F.state.point,we.pointLightShadows.value=F.state.pointShadow,we.hemisphereLights.value=F.state.hemi,we.directionalShadowMap.value=F.state.directionalShadowMap,we.directionalShadowMatrix.value=F.state.directionalShadowMatrix,we.spotShadowMap.value=F.state.spotShadowMap,we.spotLightMatrix.value=F.state.spotLightMatrix,we.spotLightMap.value=F.state.spotLightMap,we.pointShadowMap.value=F.state.pointShadowMap,we.pointShadowMatrix.value=F.state.pointShadowMatrix),V.currentProgram=Ie,V.uniformsList=null,Ie}function mu(b){if(b.uniformsList===null){const N=b.currentProgram.getUniforms();b.uniformsList=ka.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function gu(b,N){const B=Ne.get(b);B.outputColorSpace=N.outputColorSpace,B.batching=N.batching,B.batchingColor=N.batchingColor,B.instancing=N.instancing,B.instancingColor=N.instancingColor,B.instancingMorph=N.instancingMorph,B.skinning=N.skinning,B.morphTargets=N.morphTargets,B.morphNormals=N.morphNormals,B.morphColors=N.morphColors,B.morphTargetsCount=N.morphTargetsCount,B.numClippingPlanes=N.numClippingPlanes,B.numIntersection=N.numClipIntersection,B.vertexAlphas=N.vertexAlphas,B.vertexTangents=N.vertexTangents,B.toneMapping=N.toneMapping}function Y0(b,N,B,V,F){N.isScene!==!0&&(N=Le),Fe.resetTextureUnits();const re=N.fog,he=V.isMeshStandardMaterial?N.environment:null,xe=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ci,ye=(V.isMeshStandardMaterial?S:R).get(V.envMap||he),Ce=V.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ie=!!B.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),we=!!B.morphAttributes.position,Ke=!!B.morphAttributes.normal,yt=!!B.morphAttributes.color;let Mt=bi;V.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Mt=_.toneMapping);const sn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Qe=sn!==void 0?sn.length:0,Se=Ne.get(V),zt=h.state.lights;if(j===!0&&(J===!0||b!==E)){const gn=b===E&&V.id===I;ze.setState(V,b,gn)}let Je=!1;V.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==zt.state.version||Se.outputColorSpace!==xe||F.isBatchedMesh&&Se.batching===!1||!F.isBatchedMesh&&Se.batching===!0||F.isBatchedMesh&&Se.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Se.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Se.instancing===!1||!F.isInstancedMesh&&Se.instancing===!0||F.isSkinnedMesh&&Se.skinning===!1||!F.isSkinnedMesh&&Se.skinning===!0||F.isInstancedMesh&&Se.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Se.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Se.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Se.instancingMorph===!1&&F.morphTexture!==null||Se.envMap!==ye||V.fog===!0&&Se.fog!==re||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==ze.numPlanes||Se.numIntersection!==ze.numIntersection)||Se.vertexAlphas!==Ce||Se.vertexTangents!==Ie||Se.morphTargets!==we||Se.morphNormals!==Ke||Se.morphColors!==yt||Se.toneMapping!==Mt||Se.morphTargetsCount!==Qe)&&(Je=!0):(Je=!0,Se.__version=V.version);let Mn=Se.currentProgram;Je===!0&&(Mn=qs(V,N,F));let lr=!1,an=!1,Co=!1;const Tt=Mn.getUniforms(),ai=Se.uniforms;if(Ee.useProgram(Mn.program)&&(lr=!0,an=!0,Co=!0),V.id!==I&&(I=V.id,an=!0),lr||E!==b){Tt.setValue(C,"projectionMatrix",b.projectionMatrix),Tt.setValue(C,"viewMatrix",b.matrixWorldInverse);const gn=Tt.map.cameraPosition;gn!==void 0&&gn.setValue(C,fe.setFromMatrixPosition(b.matrixWorld)),at.logarithmicDepthBuffer&&Tt.setValue(C,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Tt.setValue(C,"isOrthographic",b.isOrthographicCamera===!0),E!==b&&(E=b,an=!0,Co=!0)}if(F.isSkinnedMesh){Tt.setOptional(C,F,"bindMatrix"),Tt.setOptional(C,F,"bindMatrixInverse");const gn=F.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Tt.setValue(C,"boneTexture",gn.boneTexture,Fe))}F.isBatchedMesh&&(Tt.setOptional(C,F,"batchingTexture"),Tt.setValue(C,"batchingTexture",F._matricesTexture,Fe),Tt.setOptional(C,F,"batchingIdTexture"),Tt.setValue(C,"batchingIdTexture",F._indirectTexture,Fe),Tt.setOptional(C,F,"batchingColorTexture"),F._colorsTexture!==null&&Tt.setValue(C,"batchingColorTexture",F._colorsTexture,Fe));const Po=B.morphAttributes;if((Po.position!==void 0||Po.normal!==void 0||Po.color!==void 0)&&je.update(F,B,Mn),(an||Se.receiveShadow!==F.receiveShadow)&&(Se.receiveShadow=F.receiveShadow,Tt.setValue(C,"receiveShadow",F.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(ai.envMap.value=ye,ai.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&N.environment!==null&&(ai.envMapIntensity.value=N.environmentIntensity),an&&(Tt.setValue(C,"toneMappingExposure",_.toneMappingExposure),Se.needsLights&&$0(ai,Co),re&&V.fog===!0&&be.refreshFogUniforms(ai,re),be.refreshMaterialUniforms(ai,V,$,G,h.state.transmissionRenderTarget[b.id]),ka.upload(C,mu(Se),ai,Fe)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ka.upload(C,mu(Se),ai,Fe),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Tt.setValue(C,"center",F.center),Tt.setValue(C,"modelViewMatrix",F.modelViewMatrix),Tt.setValue(C,"normalMatrix",F.normalMatrix),Tt.setValue(C,"modelMatrix",F.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const gn=V.uniformsGroups;for(let Lo=0,K0=gn.length;Lo<K0;Lo++){const vu=gn[Lo];gt.update(vu,Mn),gt.bind(vu,Mn)}}return Mn}function $0(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function Z0(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(b,N,B){Ne.get(b.texture).__webglTexture=N,Ne.get(b.depthTexture).__webglTexture=B;const V=Ne.get(b);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=B===void 0,V.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,N){const B=Ne.get(b);B.__webglFramebuffer=N,B.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,B=0){A=b,T=N,w=B;let V=!0,F=null,re=!1,he=!1;if(b){const ye=Ne.get(b);ye.__useDefaultFramebuffer!==void 0?(Ee.bindFramebuffer(C.FRAMEBUFFER,null),V=!1):ye.__webglFramebuffer===void 0?Fe.setupRenderTarget(b):ye.__hasExternalTextures&&Fe.rebindTextures(b,Ne.get(b.texture).__webglTexture,Ne.get(b.depthTexture).__webglTexture);const Ce=b.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(he=!0);const Ie=Ne.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ie[N])?F=Ie[N][B]:F=Ie[N],re=!0):b.samples>0&&Fe.useMultisampledRTT(b)===!1?F=Ne.get(b).__webglMultisampledFramebuffer:Array.isArray(Ie)?F=Ie[B]:F=Ie,y.copy(b.viewport),L.copy(b.scissor),k=b.scissorTest}else y.copy(ue).multiplyScalar($).floor(),L.copy(de).multiplyScalar($).floor(),k=Ae;if(Ee.bindFramebuffer(C.FRAMEBUFFER,F)&&V&&Ee.drawBuffers(b,F),Ee.viewport(y),Ee.scissor(L),Ee.setScissorTest(k),re){const ye=Ne.get(b.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+N,ye.__webglTexture,B)}else if(he){const ye=Ne.get(b.texture),Ce=N||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,ye.__webglTexture,B||0,Ce)}I=-1},this.readRenderTargetPixels=function(b,N,B,V,F,re,he){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Ne.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&he!==void 0&&(xe=xe[he]),xe){Ee.bindFramebuffer(C.FRAMEBUFFER,xe);try{const ye=b.texture,Ce=ye.format,Ie=ye.type;if(!at.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!at.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-V&&B>=0&&B<=b.height-F&&C.readPixels(N,B,V,F,Oe.convert(Ce),Oe.convert(Ie),re)}finally{const ye=A!==null?Ne.get(A).__webglFramebuffer:null;Ee.bindFramebuffer(C.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(b,N,B,V,F,re,he){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Ne.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&he!==void 0&&(xe=xe[he]),xe){Ee.bindFramebuffer(C.FRAMEBUFFER,xe);try{const ye=b.texture,Ce=ye.format,Ie=ye.type;if(!at.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!at.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=b.width-V&&B>=0&&B<=b.height-F){const we=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,we),C.bufferData(C.PIXEL_PACK_BUFFER,re.byteLength,C.STREAM_READ),C.readPixels(N,B,V,F,Oe.convert(Ce),Oe.convert(Ie),0),C.flush();const Ke=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);await kv(C,Ke,4);try{C.bindBuffer(C.PIXEL_PACK_BUFFER,we),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,re)}finally{C.deleteBuffer(we),C.deleteSync(Ke)}return re}}finally{const ye=A!==null?Ne.get(A).__webglFramebuffer:null;Ee.bindFramebuffer(C.FRAMEBUFFER,ye)}}},this.copyFramebufferToTexture=function(b,N=null,B=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,b=arguments[1]);const V=Math.pow(2,-B),F=Math.floor(b.image.width*V),re=Math.floor(b.image.height*V),he=N!==null?N.x:0,xe=N!==null?N.y:0;Fe.setTexture2D(b,0),C.copyTexSubImage2D(C.TEXTURE_2D,B,0,0,he,xe,F,re),Ee.unbindTexture()},this.copyTextureToTexture=function(b,N,B=null,V=null,F=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,b=arguments[1],N=arguments[2],F=arguments[3]||0,B=null);let re,he,xe,ye,Ce,Ie;B!==null?(re=B.max.x-B.min.x,he=B.max.y-B.min.y,xe=B.min.x,ye=B.min.y):(re=b.image.width,he=b.image.height,xe=0,ye=0),V!==null?(Ce=V.x,Ie=V.y):(Ce=0,Ie=0);const we=Oe.convert(N.format),Ke=Oe.convert(N.type);Fe.setTexture2D(N,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,N.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,N.unpackAlignment);const yt=C.getParameter(C.UNPACK_ROW_LENGTH),Mt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),sn=C.getParameter(C.UNPACK_SKIP_PIXELS),Qe=C.getParameter(C.UNPACK_SKIP_ROWS),Se=C.getParameter(C.UNPACK_SKIP_IMAGES),zt=b.isCompressedTexture?b.mipmaps[F]:b.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,zt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,zt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,xe),C.pixelStorei(C.UNPACK_SKIP_ROWS,ye),b.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,F,Ce,Ie,re,he,we,Ke,zt.data):b.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,F,Ce,Ie,zt.width,zt.height,we,zt.data):C.texSubImage2D(C.TEXTURE_2D,F,Ce,Ie,re,he,we,Ke,zt),C.pixelStorei(C.UNPACK_ROW_LENGTH,yt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Mt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,sn),C.pixelStorei(C.UNPACK_SKIP_ROWS,Qe),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Se),F===0&&N.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),Ee.unbindTexture()},this.copyTextureToTexture3D=function(b,N,B=null,V=null,F=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,V=arguments[1]||null,b=arguments[2],N=arguments[3],F=arguments[4]||0);let re,he,xe,ye,Ce,Ie,we,Ke,yt;const Mt=b.isCompressedTexture?b.mipmaps[F]:b.image;B!==null?(re=B.max.x-B.min.x,he=B.max.y-B.min.y,xe=B.max.z-B.min.z,ye=B.min.x,Ce=B.min.y,Ie=B.min.z):(re=Mt.width,he=Mt.height,xe=Mt.depth,ye=0,Ce=0,Ie=0),V!==null?(we=V.x,Ke=V.y,yt=V.z):(we=0,Ke=0,yt=0);const sn=Oe.convert(N.format),Qe=Oe.convert(N.type);let Se;if(N.isData3DTexture)Fe.setTexture3D(N,0),Se=C.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)Fe.setTexture2DArray(N,0),Se=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,N.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,N.unpackAlignment);const zt=C.getParameter(C.UNPACK_ROW_LENGTH),Je=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Mn=C.getParameter(C.UNPACK_SKIP_PIXELS),lr=C.getParameter(C.UNPACK_SKIP_ROWS),an=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Mt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Mt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ye),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ce),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ie),b.isDataTexture||b.isData3DTexture?C.texSubImage3D(Se,F,we,Ke,yt,re,he,xe,sn,Qe,Mt.data):N.isCompressedArrayTexture?C.compressedTexSubImage3D(Se,F,we,Ke,yt,re,he,xe,sn,Mt.data):C.texSubImage3D(Se,F,we,Ke,yt,re,he,xe,sn,Qe,Mt),C.pixelStorei(C.UNPACK_ROW_LENGTH,zt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Je),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Mn),C.pixelStorei(C.UNPACK_SKIP_ROWS,lr),C.pixelStorei(C.UNPACK_SKIP_IMAGES,an),F===0&&N.generateMipmaps&&C.generateMipmap(Se),Ee.unbindTexture()},this.initRenderTarget=function(b){Ne.get(b).__webglFramebuffer===void 0&&Fe.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Fe.setTextureCube(b,0):b.isData3DTexture?Fe.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Fe.setTexture2DArray(b,0):Fe.setTexture2D(b,0),Ee.unbindTexture()},this.resetState=function(){T=0,w=0,A=null,Ee.reset(),We.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ru?"display-p3":"srgb",t.unpackColorSpace=nt.workingColorSpace===wo?"display-p3":"srgb"}}class Y5 extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class j0 extends Hs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const so=new D,ao=new D,Uh=new _t,fs=new su,ya=new Ao,xl=new D,Nh=new D;class mi extends Vt{constructor(e=new $t,t=new j0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)so.fromBufferAttribute(t,r-1),ao.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=so.distanceTo(ao);e.setAttribute("lineDistance",new dt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ya.copy(i.boundingSphere),ya.applyMatrix4(r),ya.radius+=s,e.ray.intersectsSphere(ya)===!1)return;Uh.copy(r).invert(),fs.copy(e.ray).applyMatrix4(Uh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const m=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=m,h=g-1;v<h;v+=c){const f=u.getX(v),x=u.getX(v+1),_=Ma(this,e,fs,l,f,x);_&&t.push(_)}if(this.isLineLoop){const v=u.getX(g-1),h=u.getX(m),f=Ma(this,e,fs,l,v,h);f&&t.push(f)}}else{const m=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=m,h=g-1;v<h;v+=c){const f=Ma(this,e,fs,l,v,v+1);f&&t.push(f)}if(this.isLineLoop){const v=Ma(this,e,fs,l,g-1,m);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ma(n,e,t,i,r,s){const a=n.geometry.attributes.position;if(so.fromBufferAttribute(a,r),ao.fromBufferAttribute(a,s),t.distanceSqToSegment(so,ao,xl,Nh)>i)return;xl.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(xl);if(!(l<e.near||l>e.far))return{distance:l,point:Nh.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,object:n}}class Wt extends $t{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],p=[],d=[],m=[];let g=0;const v=[],h=i/2;let f=0;x(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new dt(p,3)),this.setAttribute("normal",new dt(d,3)),this.setAttribute("uv",new dt(m,2));function x(){const M=new D,T=new D;let w=0;const A=(t-e)/i;for(let I=0;I<=s;I++){const E=[],y=I/s,L=y*(t-e)+e;for(let k=0;k<=r;k++){const O=k/r,z=O*l+o,X=Math.sin(z),G=Math.cos(z);T.x=L*X,T.y=-y*i+h,T.z=L*G,p.push(T.x,T.y,T.z),M.set(X,A,G).normalize(),d.push(M.x,M.y,M.z),m.push(O,1-y),E.push(g++)}v.push(E)}for(let I=0;I<r;I++)for(let E=0;E<s;E++){const y=v[E][I],L=v[E+1][I],k=v[E+1][I+1],O=v[E][I+1];u.push(y,L,O),u.push(L,k,O),w+=6}c.addGroup(f,w,0),f+=w}function _(M){const T=g,w=new qe,A=new D;let I=0;const E=M===!0?e:t,y=M===!0?1:-1;for(let k=1;k<=r;k++)p.push(0,h*y,0),d.push(0,y,0),m.push(.5,.5),g++;const L=g;for(let k=0;k<=r;k++){const z=k/r*l+o,X=Math.cos(z),G=Math.sin(z);A.x=E*G,A.y=h*y,A.z=E*X,p.push(A.x,A.y,A.z),d.push(0,y,0),w.x=X*.5+.5,w.y=G*.5*y+.5,m.push(w.x,w.y),g++}for(let k=0;k<r;k++){const O=T+k,z=L+k;M===!0?u.push(z,z+1,O):u.push(z+1,z,O),I+=3}c.addGroup(f,I,M===!0?1:2),f+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class lu extends $t{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],a=[];o(r),c(i),u(),this.setAttribute("position",new dt(s,3)),this.setAttribute("normal",new dt(s.slice(),3)),this.setAttribute("uv",new dt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const _=new D,M=new D,T=new D;for(let w=0;w<t.length;w+=3)m(t[w+0],_),m(t[w+1],M),m(t[w+2],T),l(_,M,T,x)}function l(x,_,M,T){const w=T+1,A=[];for(let I=0;I<=w;I++){A[I]=[];const E=x.clone().lerp(M,I/w),y=_.clone().lerp(M,I/w),L=w-I;for(let k=0;k<=L;k++)k===0&&I===w?A[I][k]=E:A[I][k]=E.clone().lerp(y,k/L)}for(let I=0;I<w;I++)for(let E=0;E<2*(w-I)-1;E++){const y=Math.floor(E/2);E%2===0?(d(A[I][y+1]),d(A[I+1][y]),d(A[I][y])):(d(A[I][y+1]),d(A[I+1][y+1]),d(A[I+1][y]))}}function c(x){const _=new D;for(let M=0;M<s.length;M+=3)_.x=s[M+0],_.y=s[M+1],_.z=s[M+2],_.normalize().multiplyScalar(x),s[M+0]=_.x,s[M+1]=_.y,s[M+2]=_.z}function u(){const x=new D;for(let _=0;_<s.length;_+=3){x.x=s[_+0],x.y=s[_+1],x.z=s[_+2];const M=h(x)/2/Math.PI+.5,T=f(x)/Math.PI+.5;a.push(M,1-T)}g(),p()}function p(){for(let x=0;x<a.length;x+=6){const _=a[x+0],M=a[x+2],T=a[x+4],w=Math.max(_,M,T),A=Math.min(_,M,T);w>.9&&A<.1&&(_<.2&&(a[x+0]+=1),M<.2&&(a[x+2]+=1),T<.2&&(a[x+4]+=1))}}function d(x){s.push(x.x,x.y,x.z)}function m(x,_){const M=x*3;_.x=e[M+0],_.y=e[M+1],_.z=e[M+2]}function g(){const x=new D,_=new D,M=new D,T=new D,w=new qe,A=new qe,I=new qe;for(let E=0,y=0;E<s.length;E+=9,y+=6){x.set(s[E+0],s[E+1],s[E+2]),_.set(s[E+3],s[E+4],s[E+5]),M.set(s[E+6],s[E+7],s[E+8]),w.set(a[y+0],a[y+1]),A.set(a[y+2],a[y+3]),I.set(a[y+4],a[y+5]),T.copy(x).add(_).add(M).divideScalar(3);const L=h(T);v(w,y+0,x,L),v(A,y+2,_,L),v(I,y+4,M,L)}}function v(x,_,M,T){T<0&&x.x===1&&(a[_]=x.x-1),M.x===0&&M.z===0&&(a[_]=T/2/Math.PI+.5)}function h(x){return Math.atan2(x.z,-x.x)}function f(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lu(e.vertices,e.indices,e.radius,e.details)}}class Dr extends lu{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Dr(e.radius,e.detail)}}class cu extends $t{constructor(e=.5,t=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],c=[],u=[];let p=e;const d=(t-e)/r,m=new D,g=new qe;for(let v=0;v<=r;v++){for(let h=0;h<=i;h++){const f=s+h/i*a;m.x=p*Math.cos(f),m.y=p*Math.sin(f),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/t+1)/2,g.y=(m.y/t+1)/2,u.push(g.x,g.y)}p+=d}for(let v=0;v<r;v++){const h=v*(i+1);for(let f=0;f<i;f++){const x=f+h,_=x,M=x+i+1,T=x+i+2,w=x+1;o.push(_,M,w),o.push(M,T,w)}}this.setIndex(o),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(c,3)),this.setAttribute("uv",new dt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cu(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class uu extends $t{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],p=new D,d=new D,m=[],g=[],v=[],h=[];for(let f=0;f<=i;f++){const x=[],_=f/i;let M=0;f===0&&a===0?M=.5/t:f===i&&l===Math.PI&&(M=-.5/t);for(let T=0;T<=t;T++){const w=T/t;p.x=-e*Math.cos(r+w*s)*Math.sin(a+_*o),p.y=e*Math.cos(a+_*o),p.z=e*Math.sin(r+w*s)*Math.sin(a+_*o),g.push(p.x,p.y,p.z),d.copy(p).normalize(),v.push(d.x,d.y,d.z),h.push(w+M,1-_),x.push(c++)}u.push(x)}for(let f=0;f<i;f++)for(let x=0;x<t;x++){const _=u[f][x+1],M=u[f][x],T=u[f+1][x],w=u[f+1][x+1];(f!==0||a>0)&&m.push(_,M,w),(f!==i-1||l<Math.PI)&&m.push(M,T,w)}this.setIndex(m),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(v,3)),this.setAttribute("uv",new dt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class qi extends $t{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],l=[],c=[],u=new D,p=new D,d=new D;for(let m=0;m<=i;m++)for(let g=0;g<=r;g++){const v=g/r*s,h=m/i*Math.PI*2;p.x=(e+t*Math.cos(h))*Math.cos(v),p.y=(e+t*Math.cos(h))*Math.sin(v),p.z=t*Math.sin(h),o.push(p.x,p.y,p.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),d.subVectors(p,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/r),c.push(m/i)}for(let m=1;m<=i;m++)for(let g=1;g<=r;g++){const v=(r+1)*m+g-1,h=(r+1)*(m-1)+g-1,f=(r+1)*(m-1)+g,x=(r+1)*m+g;a.push(v,h,x),a.push(h,f,x)}this.setIndex(a),this.setAttribute("position",new dt(o,3)),this.setAttribute("normal",new dt(l,3)),this.setAttribute("uv",new dt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qi(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}const Oh=new _t;class $5{constructor(e,t,i=0,r=1/0){this.ray=new su(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new au,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Oh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Oh),this}intersectObject(e,t=!0,i=[]){return Cc(e,this,i,t),i.sort(Fh),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Cc(e[r],this,i,t);return i.sort(Fh),i}}function Fh(n,e){return n.distance-e.distance}function Cc(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)Cc(s[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kc);const ki=new $5,Xt=new D,gi=new D,pt=new Bt,kh={X:new D(1,0,0),Y:new D(0,1,0),Z:new D(0,0,1)},yl={type:"change"},zh={type:"mouseDown",mode:null},Bh={type:"mouseUp",mode:null},Vh={type:"objectChange"};class Hh extends Vt{constructor(e,t){super(),t===void 0&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),t=document),this.isTransformControls=!0,this.visible=!1,this.domElement=t,this.domElement.style.touchAction="none";const i=new tM;this._gizmo=i,this.add(i);const r=new nM;this._plane=r,this.add(r);const s=this;function a(x,_){let M=_;Object.defineProperty(s,x,{get:function(){return M!==void 0?M:_},set:function(T){M!==T&&(M=T,r[x]=T,i[x]=T,s.dispatchEvent({type:x+"-changed",value:T}),s.dispatchEvent(yl))}}),s[x]=_,r[x]=_,i[x]=_}a("camera",e),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0);const o=new D,l=new D,c=new Bt,u=new Bt,p=new D,d=new Bt,m=new D,g=new D,v=new D,h=0,f=new D;a("worldPosition",o),a("worldPositionStart",l),a("worldQuaternion",c),a("worldQuaternionStart",u),a("cameraPosition",p),a("cameraQuaternion",d),a("pointStart",m),a("pointEnd",g),a("rotationAxis",v),a("rotationAngle",h),a("eye",f),this._offset=new D,this._startNorm=new D,this._endNorm=new D,this._cameraScale=new D,this._parentPosition=new D,this._parentQuaternion=new Bt,this._parentQuaternionInv=new Bt,this._parentScale=new D,this._worldScaleStart=new D,this._worldQuaternionInv=new Bt,this._worldScale=new D,this._positionStart=new D,this._quaternionStart=new Bt,this._scaleStart=new D,this._getPointer=Z5.bind(this),this._onPointerDown=Q5.bind(this),this._onPointerHover=K5.bind(this),this._onPointerMove=J5.bind(this),this._onPointerUp=eM.bind(this),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp)}updateMatrixWorld(e){this.object!==void 0&&(this.object.updateMatrixWorld(),this.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this._parentPosition,this._parentQuaternion,this._parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this._worldScale),this._parentQuaternionInv.copy(this._parentQuaternion).invert(),this._worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this._cameraScale),this.camera.isOrthographicCamera?this.camera.getWorldDirection(this.eye).negate():this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld(e)}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;e!==null&&ki.setFromCamera(e,this.camera);const t=Ml(this._gizmo.picker[this.mode],ki);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e!=null&&e.button!==0)&&this.axis!==null){e!==null&&ki.setFromCamera(e,this.camera);const t=Ml(this._plane,ki,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,zh.mode=this.mode,this.dispatchEvent(zh)}}pointerMove(e){const t=this.axis,i=this.mode,r=this.object;let s=this.space;if(i==="scale"?s="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(s="world"),r===void 0||t===null||this.dragging===!1||e!==null&&e.button!==-1)return;e!==null&&ki.setFromCamera(e,this.camera);const a=Ml(this._plane,ki,!0);if(a){if(this.pointEnd.copy(a.point).sub(this.worldPositionStart),i==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),s==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),s==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),r.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(s==="local"&&(r.position.applyQuaternion(pt.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.position.applyQuaternion(this._quaternionStart)),s==="world"&&(r.parent&&r.position.add(Xt.setFromMatrixPosition(r.parent.matrixWorld)),t.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.parent&&r.position.sub(Xt.setFromMatrixPosition(r.parent.matrixWorld))));else if(i==="scale"){if(t.search("XYZ")!==-1){let o=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(o*=-1),gi.set(o,o,o)}else Xt.copy(this.pointStart),gi.copy(this.pointEnd),Xt.applyQuaternion(this._worldQuaternionInv),gi.applyQuaternion(this._worldQuaternionInv),gi.divide(Xt),t.search("X")===-1&&(gi.x=1),t.search("Y")===-1&&(gi.y=1),t.search("Z")===-1&&(gi.z=1);r.scale.copy(this._scaleStart).multiply(gi),this.scaleSnap&&(t.search("X")!==-1&&(r.scale.x=Math.round(r.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(r.scale.y=Math.round(r.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(r.scale.z=Math.round(r.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(i==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const o=20/this.worldPosition.distanceTo(Xt.setFromMatrixPosition(this.camera.matrixWorld));let l=!1;t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(Xt.copy(this.rotationAxis).cross(this.eye))*o):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(kh[t]),Xt.copy(kh[t]),s==="local"&&Xt.applyQuaternion(this.worldQuaternion),Xt.cross(this.eye),Xt.length()===0?l=!0:this.rotationAngle=this._offset.dot(Xt.normalize())*o),(t==="E"||l)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),s==="local"&&t!=="E"&&t!=="XYZE"?(r.quaternion.copy(this._quaternionStart),r.quaternion.multiply(pt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),r.quaternion.copy(pt.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),r.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(yl),this.dispatchEvent(Vh)}}pointerUp(e){e!==null&&e.button!==0||(this.dragging&&this.axis!==null&&(Bh.mode=this.mode,this.dispatchEvent(Bh)),this.dragging=!1,this.axis=null)}dispose(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}attach(e){return this.object=e,this.visible=!0,this}detach(){return this.object=void 0,this.visible=!1,this.axis=null,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(yl),this.dispatchEvent(Vh),this.pointStart.copy(this.pointEnd))}getRaycaster(){return ki}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}}function Z5(n){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:n.button};{const e=this.domElement.getBoundingClientRect();return{x:(n.clientX-e.left)/e.width*2-1,y:-(n.clientY-e.top)/e.height*2+1,button:n.button}}}function K5(n){if(this.enabled)switch(n.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(n));break}}function Q5(n){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(n)),this.pointerDown(this._getPointer(n)))}function J5(n){this.enabled&&this.pointerMove(this._getPointer(n))}function eM(n){this.enabled&&(this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(n)))}function Ml(n,e,t){const i=e.intersectObject(n,!0);for(let r=0;r<i.length;r++)if(i[r].object.visible||t)return i[r];return!1}const Sa=new Gn,lt=new D(0,1,0),Gh=new D(0,0,0),Wh=new _t,Ea=new Bt,za=new Bt,In=new D,Xh=new _t,_s=new D(1,0,0),Hi=new D(0,1,0),xs=new D(0,0,1),ba=new D,hs=new D,ds=new D;class tM extends Vt{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new Gs({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new j0({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),i=e.clone();i.opacity=.15;const r=t.clone();r.opacity=.5;const s=e.clone();s.color.setHex(16711680);const a=e.clone();a.color.setHex(65280);const o=e.clone();o.color.setHex(255);const l=e.clone();l.color.setHex(16711680),l.opacity=.5;const c=e.clone();c.color.setHex(65280),c.opacity=.5;const u=e.clone();u.color.setHex(255),u.opacity=.5;const p=e.clone();p.opacity=.25;const d=e.clone();d.color.setHex(16776960),d.opacity=.25,e.clone().color.setHex(16776960);const g=e.clone();g.color.setHex(7895160);const v=new Wt(0,.04,.1,12);v.translate(0,.05,0);const h=new St(.08,.08,.08);h.translate(0,.04,0);const f=new $t;f.setAttribute("position",new dt([0,0,0,1,0,0],3));const x=new Wt(.0075,.0075,.5,3);x.translate(0,.25,0);function _(X,G){const $=new qi(X,.0075,3,64,G*Math.PI*2);return $.rotateY(Math.PI/2),$.rotateX(Math.PI/2),$}function M(){const X=new $t;return X.setAttribute("position",new dt([0,0,0,1,1,1],3)),X}const T={X:[[new ce(v,s),[.5,0,0],[0,0,-Math.PI/2]],[new ce(v,s),[-.5,0,0],[0,0,Math.PI/2]],[new ce(x,s),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new ce(v,a),[0,.5,0]],[new ce(v,a),[0,-.5,0],[Math.PI,0,0]],[new ce(x,a)]],Z:[[new ce(v,o),[0,0,.5],[Math.PI/2,0,0]],[new ce(v,o),[0,0,-.5],[-Math.PI/2,0,0]],[new ce(x,o),null,[Math.PI/2,0,0]]],XYZ:[[new ce(new Dr(.1,0),p.clone()),[0,0,0]]],XY:[[new ce(new St(.15,.15,.01),u.clone()),[.15,.15,0]]],YZ:[[new ce(new St(.15,.15,.01),l.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ce(new St(.15,.15,.01),c.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},w={X:[[new ce(new Wt(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new ce(new Wt(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ce(new Wt(.2,0,.6,4),i),[0,.3,0]],[new ce(new Wt(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ce(new Wt(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new ce(new Wt(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new ce(new Dr(.2,0),i)]],XY:[[new ce(new St(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new ce(new St(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ce(new St(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]]},A={START:[[new ce(new Dr(.01,2),r),null,null,null,"helper"]],END:[[new ce(new Dr(.01,2),r),null,null,null,"helper"]],DELTA:[[new mi(M(),r),null,null,null,"helper"]],X:[[new mi(f,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new mi(f,r.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new mi(f,r.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},I={XYZE:[[new ce(_(.5,1),g),null,[0,Math.PI/2,0]]],X:[[new ce(_(.5,.5),s)]],Y:[[new ce(_(.5,.5),a),null,[0,0,-Math.PI/2]]],Z:[[new ce(_(.5,.5),o),null,[0,Math.PI/2,0]]],E:[[new ce(_(.75,1),d),null,[0,Math.PI/2,0]]]},E={AXIS:[[new mi(f,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},y={XYZE:[[new ce(new uu(.25,10,8),i)]],X:[[new ce(new qi(.5,.1,4,24),i),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new ce(new qi(.5,.1,4,24),i),[0,0,0],[Math.PI/2,0,0]]],Z:[[new ce(new qi(.5,.1,4,24),i),[0,0,0],[0,0,-Math.PI/2]]],E:[[new ce(new qi(.75,.1,2,24),i)]]},L={X:[[new ce(h,s),[.5,0,0],[0,0,-Math.PI/2]],[new ce(x,s),[0,0,0],[0,0,-Math.PI/2]],[new ce(h,s),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new ce(h,a),[0,.5,0]],[new ce(x,a)],[new ce(h,a),[0,-.5,0],[0,0,Math.PI]]],Z:[[new ce(h,o),[0,0,.5],[Math.PI/2,0,0]],[new ce(x,o),[0,0,0],[Math.PI/2,0,0]],[new ce(h,o),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new ce(new St(.15,.15,.01),u),[.15,.15,0]]],YZ:[[new ce(new St(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ce(new St(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ce(new St(.1,.1,.1),p.clone())]]},k={X:[[new ce(new Wt(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new ce(new Wt(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new ce(new Wt(.2,0,.6,4),i),[0,.3,0]],[new ce(new Wt(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new ce(new Wt(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new ce(new Wt(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new ce(new St(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new ce(new St(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new ce(new St(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new ce(new St(.2,.2,.2),i),[0,0,0]]]},O={X:[[new mi(f,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new mi(f,r.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new mi(f,r.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function z(X){const G=new Vt;for(const $ in X)for(let W=X[$].length;W--;){const te=X[$][W][0].clone(),ue=X[$][W][1],de=X[$][W][2],Ae=X[$][W][3],Ye=X[$][W][4];te.name=$,te.tag=Ye,ue&&te.position.set(ue[0],ue[1],ue[2]),de&&te.rotation.set(de[0],de[1],de[2]),Ae&&te.scale.set(Ae[0],Ae[1],Ae[2]),te.updateMatrix();const j=te.geometry.clone();j.applyMatrix4(te.matrix),te.geometry=j,te.renderOrder=1/0,te.position.set(0,0,0),te.rotation.set(0,0,0),te.scale.set(1,1,1),G.add(te)}return G}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=z(T)),this.add(this.gizmo.rotate=z(I)),this.add(this.gizmo.scale=z(L)),this.add(this.picker.translate=z(w)),this.add(this.picker.rotate=z(y)),this.add(this.picker.scale=z(k)),this.add(this.helper.translate=z(A)),this.add(this.helper.rotate=z(E)),this.add(this.helper.scale=z(O)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const i=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:za;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let r=[];r=r.concat(this.picker[this.mode].children),r=r.concat(this.gizmo[this.mode].children),r=r.concat(this.helper[this.mode].children);for(let s=0;s<r.length;s++){const a=r[s];a.visible=!0,a.rotation.set(0,0,0),a.position.copy(this.worldPosition);let o;if(this.camera.isOrthographicCamera?o=(this.camera.top-this.camera.bottom)/this.camera.zoom:o=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),a.scale.set(1,1,1).multiplyScalar(o*this.size/4),a.tag==="helper"){a.visible=!1,a.name==="AXIS"?(a.visible=!!this.axis,this.axis==="X"&&(pt.setFromEuler(Sa.set(0,0,0)),a.quaternion.copy(i).multiply(pt),Math.abs(lt.copy(_s).applyQuaternion(i).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="Y"&&(pt.setFromEuler(Sa.set(0,0,Math.PI/2)),a.quaternion.copy(i).multiply(pt),Math.abs(lt.copy(Hi).applyQuaternion(i).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="Z"&&(pt.setFromEuler(Sa.set(0,Math.PI/2,0)),a.quaternion.copy(i).multiply(pt),Math.abs(lt.copy(xs).applyQuaternion(i).dot(this.eye))>.9&&(a.visible=!1)),this.axis==="XYZE"&&(pt.setFromEuler(Sa.set(0,Math.PI/2,0)),lt.copy(this.rotationAxis),a.quaternion.setFromRotationMatrix(Wh.lookAt(Gh,lt,Hi)),a.quaternion.multiply(pt),a.visible=this.dragging),this.axis==="E"&&(a.visible=!1)):a.name==="START"?(a.position.copy(this.worldPositionStart),a.visible=this.dragging):a.name==="END"?(a.position.copy(this.worldPosition),a.visible=this.dragging):a.name==="DELTA"?(a.position.copy(this.worldPositionStart),a.quaternion.copy(this.worldQuaternionStart),Xt.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),Xt.applyQuaternion(this.worldQuaternionStart.clone().invert()),a.scale.copy(Xt),a.visible=this.dragging):(a.quaternion.copy(i),this.dragging?a.position.copy(this.worldPositionStart):a.position.copy(this.worldPosition),this.axis&&(a.visible=this.axis.search(a.name)!==-1));continue}a.quaternion.copy(i),this.mode==="translate"||this.mode==="scale"?(a.name==="X"&&Math.abs(lt.copy(_s).applyQuaternion(i).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="Y"&&Math.abs(lt.copy(Hi).applyQuaternion(i).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="Z"&&Math.abs(lt.copy(xs).applyQuaternion(i).dot(this.eye))>.99&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="XY"&&Math.abs(lt.copy(xs).applyQuaternion(i).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="YZ"&&Math.abs(lt.copy(_s).applyQuaternion(i).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1),a.name==="XZ"&&Math.abs(lt.copy(Hi).applyQuaternion(i).dot(this.eye))<.2&&(a.scale.set(1e-10,1e-10,1e-10),a.visible=!1)):this.mode==="rotate"&&(Ea.copy(i),lt.copy(this.eye).applyQuaternion(pt.copy(i).invert()),a.name.search("E")!==-1&&a.quaternion.setFromRotationMatrix(Wh.lookAt(this.eye,Gh,Hi)),a.name==="X"&&(pt.setFromAxisAngle(_s,Math.atan2(-lt.y,lt.z)),pt.multiplyQuaternions(Ea,pt),a.quaternion.copy(pt)),a.name==="Y"&&(pt.setFromAxisAngle(Hi,Math.atan2(lt.x,lt.z)),pt.multiplyQuaternions(Ea,pt),a.quaternion.copy(pt)),a.name==="Z"&&(pt.setFromAxisAngle(xs,Math.atan2(lt.y,lt.x)),pt.multiplyQuaternions(Ea,pt),a.quaternion.copy(pt))),a.visible=a.visible&&(a.name.indexOf("X")===-1||this.showX),a.visible=a.visible&&(a.name.indexOf("Y")===-1||this.showY),a.visible=a.visible&&(a.name.indexOf("Z")===-1||this.showZ),a.visible=a.visible&&(a.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),a.material._color=a.material._color||a.material.color.clone(),a.material._opacity=a.material._opacity||a.material.opacity,a.material.color.copy(a.material._color),a.material.opacity=a.material._opacity,this.enabled&&this.axis&&(a.name===this.axis||this.axis.split("").some(function(l){return a.name===l}))&&(a.material.color.setHex(16776960),a.material.opacity=1)}super.updateMatrixWorld(e)}}class nM extends ce{constructor(){super(new Ws(1e5,1e5,2,2),new Gs({visible:!1,wireframe:!0,side:Fn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),ba.copy(_s).applyQuaternion(t==="local"?this.worldQuaternion:za),hs.copy(Hi).applyQuaternion(t==="local"?this.worldQuaternion:za),ds.copy(xs).applyQuaternion(t==="local"?this.worldQuaternion:za),lt.copy(hs),this.mode){case"translate":case"scale":switch(this.axis){case"X":lt.copy(this.eye).cross(ba),In.copy(ba).cross(lt);break;case"Y":lt.copy(this.eye).cross(hs),In.copy(hs).cross(lt);break;case"Z":lt.copy(this.eye).cross(ds),In.copy(ds).cross(lt);break;case"XY":In.copy(ds);break;case"YZ":In.copy(ba);break;case"XZ":lt.copy(ds),In.copy(hs);break;case"XYZ":case"E":In.set(0,0,0);break}break;case"rotate":default:In.set(0,0,0)}In.length()===0?this.quaternion.copy(this.cameraQuaternion):(Xh.lookAt(Xt.set(0,0,0),In,lt),this.quaternion.setFromRotationMatrix(Xh)),super.updateMatrixWorld(e)}}const Pe=Symbol("@@iwer/devui/input-scene"),iM=.016;class rM{constructor(e){const t=e.canvasContainer,i=new Y5,r=new _n(e.fovy/Math.PI*180,t.offsetWidth/t.offsetHeight,.1,1e3),s=new Ir,a=new Ir;i.add(s),s.add(a),a.position.fromArray(e.position.vec3),a.quaternion.fromArray(e.quaternion.quat),a.add(r),r.position.x-=e.ipd/2;const o=new ce(new St(.1,.1,.1)),l=o.clone();o.position.fromArray(e.controllers.left.position.vec3),o.quaternion.fromArray(e.controllers.left.quaternion.quat),l.position.fromArray(e.controllers.right.position.vec3),l.quaternion.fromArray(e.controllers.right.quaternion.quat),a.attach(o),a.attach(l),o.visible=!1,l.visible=!1;const c=new ce(new cu(.25,.27,32),new Gs({color:16777215,side:ii}));c.rotateX(-Math.PI/2),i.add(c);const u=new j5({alpha:!0});u.setSize(t.offsetWidth,t.offsetHeight),u.setClearColor(0,0),t.appendChild(u.domElement);const p=new Hh(r,u.domElement);p.attach(o),i.add(p);const d=new Hh(r,u.domElement);d.attach(l),i.add(d);const m=new ResizeObserver(()=>{this.resize()});m.observe(t);const g=h=>{h.addEventListener("mouseDown",()=>{h.userData.pressStart=performance.now()}),h.addEventListener("mouseUp",()=>{const f=performance.now()-h.userData.pressStart;h.userData.pressStart=null,f<200&&(h.mode==="rotate"?h.setMode("translate"):h.setMode("rotate"))}),h.addEventListener("change",()=>{this.renderScene()})};g(p),g(d);const v=h=>{if(!this[Pe].isPointerLocked)return;const f=h.movementX||h.mozMovementX||h.webkitMovementX||0,x=h.movementY||h.mozMovementY||h.webkitMovementY||0;s.rotation.y-=f*.002,a.rotation.x-=x*.002,e.quaternion.copy(a.getWorldQuaternion(new Bt)),this.renderScene()};this[Pe]={canvasContainer:t,renderer:u,scene:i,camera:r,playerRig:s,cameraRig:a,xrDevice:e,controllerIndicators:{left:o,right:l},transformControls:{left:p,right:d},headsetDefaultPosition:a.position.clone(),headsetDefaultQuaternion:a.quaternion.clone(),controllerDefaultPositions:{left:o.position.clone(),right:l.position.clone()},controllerDefaultQuaternions:{left:o.quaternion.clone(),right:l.quaternion.clone()},resizeObserver:m,isPointerLocked:!1,vec3:new D,quat:new Bt,mouseMoveHandler:v,keyState:{ShiftLeft:!1,KeyW:!1,KeyA:!1,KeyS:!1,KeyD:!1,ArrowUp:!1,ArrowDown:!1},movePlayerRig:()=>this.movePlayerRig(),moveInterval:null},document.addEventListener("pointerlockchange",this.pointerLockChangeHandler.bind(this),!1),document.addEventListener("mozpointerlockchange",this.pointerLockChangeHandler.bind(this),!1),document.addEventListener("webkitpointerlockchange",this.pointerLockChangeHandler.bind(this),!1),document.addEventListener("keydown",this.keyDownHandler.bind(this),!1),document.addEventListener("keyup",this.keyUpHandler.bind(this),!1)}lockPointer(){this[Pe].renderer.domElement.requestPointerLock=this[Pe].renderer.domElement.requestPointerLock||this[Pe].renderer.domElement.mozRequestPointerLock||this[Pe].renderer.domElement.webkitRequestPointerLock,this[Pe].renderer.domElement.requestPointerLock()}pointerLockChangeHandler(){this[Pe].isPointerLocked=document.pointerLockElement===this[Pe].renderer.domElement||document.mozPointerLockElement===this[Pe].renderer.domElement||document.webkitPointerLockElement===this[Pe].renderer.domElement,this[Pe].isPointerLocked?(document.addEventListener("mousemove",this[Pe].mouseMoveHandler,!1),Object.values(this[Pe].transformControls).forEach(e=>{e.enabled=!1,e.visible=!1})):(document.removeEventListener("mousemove",this[Pe].mouseMoveHandler,!1),Object.values(this[Pe].transformControls).forEach(e=>{e.enabled=!0,e.visible=!0}))}keyDownHandler(e){const{keyState:t,movePlayerRig:i,moveInterval:r}=this[Pe];e.code in t&&(t[e.code]=!0),t.ShiftLeft&&(t.KeyW||t.KeyA||t.KeyS||t.KeyD)&&(r||(this[Pe].moveInterval=window.setInterval(i,16))),t.ShiftLeft&&t.ArrowUp&&(this[Pe].cameraRig.position.y+=.05,this.renderScene()),t.ShiftLeft&&t.ArrowDown&&(this[Pe].cameraRig.position.y-=.05,this.renderScene())}keyUpHandler(e){const{keyState:t,moveInterval:i}=this[Pe];e.code in t&&(t[e.code]=!1),(!t.ShiftLeft||!(t.KeyW||t.KeyA||t.KeyS||t.KeyD))&&i&&(window.clearInterval(i),this[Pe].moveInterval=null)}movePlayerRig(){const{playerRig:e,keyState:t,vec3:i}=this[Pe];i.set((t.KeyD?1:0)-(t.KeyA?1:0),0,(t.KeyS?1:0)-(t.KeyW?1:0)),i.lengthSq()>0&&(i.normalize().multiplyScalar(iM).applyQuaternion(e.quaternion),e.position.add(i),this.renderScene())}syncFovy(){this[Pe].camera.fov=this[Pe].xrDevice.fovy/Math.PI*180,this[Pe].camera.updateProjectionMatrix()}resetDeviceTransforms(){const{playerRig:e,cameraRig:t,controllerIndicators:i}=this[Pe];t.position.copy(this[Pe].headsetDefaultPosition),t.quaternion.set(0,0,0,1),e.position.set(0,0,0),e.quaternion.set(0,0,0,1),Object.entries(i).forEach(([r,s])=>{s.position.copy(this[Pe].controllerDefaultPositions[r]),s.quaternion.copy(this[Pe].controllerDefaultQuaternions[r])}),this.syncDeviceTransforms(),this.renderScene()}syncDeviceTransforms(){const{xrDevice:e,cameraRig:t,controllerIndicators:i}=this[Pe];e.position.copy(t.getWorldPosition(this[Pe].vec3)),e.quaternion.copy(t.getWorldQuaternion(this[Pe].quat)),Object.entries(i).forEach(([r,s])=>{e.controllers[r].position.copy(s.getWorldPosition(this[Pe].vec3)),e.controllers[r].quaternion.copy(s.getWorldQuaternion(this[Pe].quat))})}renderScene(){this.syncDeviceTransforms(),this[Pe].renderer.render(this[Pe].scene,this[Pe].camera)}get domElement(){return this[Pe].renderer.domElement}resize(){const e=this[Pe].canvasContainer.offsetWidth,t=this[Pe].canvasContainer.offsetHeight;this[Pe].renderer.setSize(e,t),this[Pe].camera.aspect=e/t,this[Pe].camera.updateProjectionMatrix(),this.renderScene()}dispose(){this[Pe].resizeObserver.disconnect(),this[Pe].renderer.dispose(),document.removeEventListener("pointerlockchange",this.pointerLockChangeHandler.bind(this),!1),document.removeEventListener("mozpointerlockchange",this.pointerLockChangeHandler.bind(this),!1),document.removeEventListener("webkitpointerlockchange",this.pointerLockChangeHandler.bind(this),!1),document.removeEventListener("mousemove",this[Pe].mouseMoveHandler,!1),document.removeEventListener("keydown",this.keyDownHandler.bind(this),!1),document.removeEventListener("keyup",this.keyUpHandler.bind(this),!1)}}const sM=Symbol("@@iwer/devui/devui");class aM{constructor(e){e.ipd=0;const t=e.canvasContainer,i=document.createElement("div");i.style.position="fixed",i.style.width="100%",i.style.height="100%",i.style.top="0",i.style.left="0",i.style.display="flex",i.style.justifyContent="center",i.style.alignItems="center",i.style.overflow="hidden",i.style.pointerEvents="none",i.style.zIndex="3",t.appendChild(i);const r=new rM(e),s=r.domElement;s.style.position="fixed",s.style.width="100%",s.style.height="100%",s.style.top="0",s.style.left="0",s.style.zIndex="2",t.appendChild(s),Q0(i).render(P.jsx(oM,{xrDevice:e,inputLayer:r})),this[sM]={xrDevice:e,inputLayer:r}}}const oM=({xrDevice:n,inputLayer:e})=>{const[t,i]=it.useState(!1),[r,s]=it.useState(w2),[a,o]=it.useState(!1),[l,c]=it.useState(!1);return it.useEffect(()=>{const u=()=>{const p=document.pointerLockElement||document.mozPointerLockElement||document.webkitPointerLockElement;i(!!p)};return document.addEventListener("pointerlockchange",u,!1),document.addEventListener("mozpointerlockchange",u,!1),document.addEventListener("webkitpointerlockchange",u,!1),()=>{document.removeEventListener("pointerlockchange",u,!1),document.removeEventListener("mozpointerlockchange",u,!1),document.removeEventListener("webkitpointerlockchange",u,!1)}},[]),P.jsxs("div",{style:{width:"100vw",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[P.jsx(B2,{xrDevice:n,inputLayer:e,keyMapOpen:a,setKeyMapOpen:o,fovSettingOpen:l,setFovSettingOpen:c}),a&&P.jsx(T2,{keyMap:r,setKeyMap:s}),l&&P.jsx(k2,{xrDevice:n,inputLayer:e}),P.jsx(O2,{xrDevice:n,keyMap:r,pointerLocked:t})]})},lM={metaQuest3:Bp,metaQuest2:kp,metaQuestPro:zp,oculusQuest1:Fp};function dM(n){const e=new Ip(lM[n]);e.ipd=0,e.installRuntime(),new aM(e)}export{dM as emulate};
//# sourceMappingURL=chunk-IotQM6ai.js.map
