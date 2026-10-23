(()=>{var Uh="186";var Oh=0,Na=1,Bh=2;var nr=1,zh=2,Ss=3,Ms=0,hn=1,un=2,Nn=0,Qn=1,Et=2,Fa=3,Ua=4,kh=5;var ws=100,Gh=101,Hh=102,Vh=103,Wh=104,Xh=200,qh=201,Yh=202,Zh=203,$h=204,Jh=205,Kh=206,Qh=207,jh=208,eu=209,tu=210,nu=211,iu=212,su=213,ru=214,ou=0,au=1,lu=2,Oa=3,cu=4,hu=5,uu=6,du=7,fu=0,pu=1,mu=2,wn=0,ir=1,sr=2,rr=3,or=4,ar=5,lr=6,cr=7;var As=301,Bi=302,ao=303,lo=304,hr=306,gu=1000,co=1001,xu=1002,Vn=1003,vu=1004;var ur=1005;var rn=1006,ho=1007;var zi=1008;var An=1009,_u=1010,yu=1011,dr=1012,Ba=1013,Ei=1014,hi=1015,en=1016,za=1017,ka=1018,Ts=1020,bu=35902,Su=35899,Mu=1021,wu=1022,Fn=1023,ki=1026,Gi=1027,Au=1028,Ga=1029,Hi=1030,Ha=1031;var Va=1033,uo=33776,fo=33777,po=33778,mo=33779,Wa=35840,Xa=35841,qa=35842,Ya=35843,Za=36196,$a=37492,Ja=37496,Ka=37488,Qa=37489,go=37490,ja=37491,el=37808,tl=37809,nl=37810,il=37811,sl=37812,rl=37813,ol=37814,al=37815,ll=37816,cl=37817,hl=37818,ul=37819,dl=37820,fl=37821,pl=36492,ml=36494,gl=36495,xl=36283,vl=36284,xo=36285,_l=36286;var yl=0,Tu=1,Vi="",Es="srgb",Cs="srgb-linear",bl="linear",Ct="srgb";var Eu=512,Cu=513,Ru=514,vo=515,Pu=516,Iu=517,_o=518,Lu=519;var tn=35048;var Sl="300 es",Ml=2000;function lm(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function cm(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function er(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Du(){let e=er("canvas");return e.style.display="block",e}var uh={},bs=null;function tr(...e){let t="THREE."+e.shift();if(bs)bs("log",t,...e);else console.log(t,...e)}function Nu(e){let t=e[0];if(typeof t==="string"&&t.startsWith("TSL:")){let n=e[1];if(n&&n.isStackTrace)e[0]+=" "+n.getLocation();else e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function it(...e){e=Nu(e);let t="THREE."+e.shift();if(bs)bs("warn",t,...e);else{let n=e[0];if(n&&n.isStackTrace)console.warn(n.getError(t));else console.warn(t,...e)}}function rt(...e){e=Nu(e);let t="THREE."+e.shift();if(bs)bs("error",t,...e);else{let n=e[0];if(n&&n.isStackTrace)console.error(n.getError(t));else console.error(t,...e)}}function Oi(...e){let t=e.join(" ");if(t in uh)return;uh[t]=!0,it(...e)}function Fu(e,t,n){return new Promise(function(i,s){function r(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}var Uu={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class ui{addEventListener(e,t){if(this._listeners===void 0)this._listeners={};let n=this._listeners;if(n[e]===void 0)n[e]=[];if(n[e].indexOf(t)===-1)n[e].push(t)}hasEventListener(e,t){let n=this._listeners;if(n===void 0)return!1;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);if(s!==-1)i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}}var an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ha=Math.PI/180,so=180/Math.PI;function Ai(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(an[e&255]+an[e>>8&255]+an[e>>16&255]+an[e>>24&255]+"-"+an[t&255]+an[t>>8&255]+"-"+an[t>>16&15|64]+an[t>>24&255]+"-"+an[n&63|128]+an[n>>8&255]+"-"+an[n>>16&255]+an[n>>24&255]+an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]).toLowerCase()}function gt(e,t,n){return Math.max(t,Math.min(n,e))}function hm(e,t){return(e%t+t)%t}function ua(e,t,n){return(1-n)*e+n*t}function Kn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function Pt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}class $e{static{$e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,r,o){let a=n[i+0],l=n[i+1],c=n[i+2],u=n[i+3],d=s[r+0],h=s[r+1],f=s[r+2],x=s[r+3];if(u!==x||a!==d||l!==h||c!==f){let v=a*d+l*h+c*f+u*x;if(v<0)d=-d,h=-h,f=-f,x=-x,v=-v;let m=1-o;if(v<0.9995){let p=Math.acos(v),A=Math.sin(p);m=Math.sin(m*p)/A,o=Math.sin(o*p)/A,a=a*m+d*o,l=l*m+h*o,c=c*m+f*o,u=u*m+x*o}else{a=a*m+d*o,l=l*m+h*o,c=c*m+f*o,u=u*m+x*o;let p=1/Math.sqrt(a*a+l*l+c*c+u*u);a*=p,l*=p,c*=p,u*=p}}e[t]=a,e[t+1]=l,e[t+2]=c,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,r){let o=n[i],a=n[i+1],l=n[i+2],c=n[i+3],u=s[r],d=s[r+1],h=s[r+2],f=s[r+3];return e[t]=o*f+c*u+a*h-l*d,e[t+1]=a*f+c*d+l*u-o*h,e[t+2]=l*f+c*h+o*d-a*u,e[t+3]=c*f-o*u-a*d-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let{_x:n,_y:i,_z:s,_order:r}=e,{cos:o,sin:a}=Math,l=o(n/2),c=o(i/2),u=o(s/2),d=a(n/2),h=a(i/2),f=a(s/2);switch(r){case"XYZ":this._x=d*c*u+l*h*f,this._y=l*h*u-d*c*f,this._z=l*c*f+d*h*u,this._w=l*c*u-d*h*f;break;case"YXZ":this._x=d*c*u+l*h*f,this._y=l*h*u-d*c*f,this._z=l*c*f-d*h*u,this._w=l*c*u+d*h*f;break;case"ZXY":this._x=d*c*u-l*h*f,this._y=l*h*u+d*c*f,this._z=l*c*f+d*h*u,this._w=l*c*u-d*h*f;break;case"ZYX":this._x=d*c*u-l*h*f,this._y=l*h*u+d*c*f,this._z=l*c*f-d*h*u,this._w=l*c*u+d*h*f;break;case"YZX":this._x=d*c*u+l*h*f,this._y=l*h*u+d*c*f,this._z=l*c*f-d*h*u,this._w=l*c*u-d*h*f;break;case"XZY":this._x=d*c*u-l*h*f,this._y=l*h*u-d*c*f,this._z=l*c*f+d*h*u,this._w=l*c*u+d*h*f;break;default:it("Quaternion: .setFromEuler() encountered an unknown order: "+r)}if(t===!0)this._onChangeCallback();return this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],u=t[10],d=n+o+u;if(d>0){let h=0.5/Math.sqrt(d+1);this._w=0.25/h,this._x=(c-a)*h,this._y=(s-l)*h,this._z=(r-i)*h}else if(n>o&&n>u){let h=2*Math.sqrt(1+n-o-u);this._w=(c-a)/h,this._x=0.25*h,this._y=(i+r)/h,this._z=(s+l)/h}else if(o>u){let h=2*Math.sqrt(1+o-n-u);this._w=(s-l)/h,this._x=(i+r)/h,this._y=0.25*h,this._z=(a+c)/h}else{let h=2*Math.sqrt(1+u-n-o);this._w=(r-i)/h,this._x=(s+l)/h,this._y=(a+c)/h,this._z=0.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;if(n<0.00000001)if(n=0,Math.abs(e.x)>Math.abs(e.z))this._x=-e.y,this._y=e.x,this._z=0,this._w=n;else this._x=0,this._y=-e.z,this._z=e.y,this._w=n;else this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n;return this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();if(e===0)this._x=0,this._y=0,this._z=0,this._w=1;else e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e;return this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let{_x:n,_y:i,_z:s,_w:r}=e,{_x:o,_y:a,_z:l,_w:c}=t;return this._x=n*c+r*o+i*l-s*a,this._y=i*c+r*a+s*o-n*l,this._z=s*c+r*l+n*a-i*o,this._w=r*c-n*o-i*a-s*l,this._onChangeCallback(),this}slerp(e,t){let{_x:n,_y:i,_z:s,_w:r}=e,o=this.dot(e);if(o<0)n=-n,i=-i,s=-s,r=-r,o=-o;let a=1-t;if(o<0.9995){let l=Math.acos(o),c=Math.sin(l);a=Math.sin(a*l)/c,t=Math.sin(t*l)/c,this._x=this._x*a+n*t,this._y=this._y*a+i*t,this._z=this._z*a+s*t,this._w=this._w*a+r*t,this._onChangeCallback()}else this._x=this._x*a+n*t,this._y=this._y*a+i*t,this._z=this._z*a+s*t,this._w=this._w*a+r*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{static{B.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){if(n===void 0)n=this.z;return this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,{x:s,y:r,z:o,w:a}=e,l=2*(r*i-o*n),c=2*(o*t-s*i),u=2*(s*n-r*t);return this.x=t+a*l+r*u-o*c,this.y=n+a*c+o*l-s*u,this.z=i+a*u+s*c-r*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let{x:n,y:i,z:s}=e,{x:r,y:o,z:a}=t;return this.x=i*a-s*o,this.y=s*r-n*a,this.z=n*o-i*r,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return da.copy(this).projectOnVector(e),this.sub(da)}reflect(e){return this.sub(da.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var da=new B,dh=new Wn;class ht{static{ht.prototype.isMatrix3=!0}constructor(e,t,n,i,s,r,o,a,l){if(this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0)this.set(e,t,n,i,s,r,o,a,l)}set(e,t,n,i,s,r,o,a,l){let c=this.elements;return c[0]=e,c[1]=i,c[2]=o,c[3]=t,c[4]=s,c[5]=a,c[6]=n,c[7]=r,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[3],a=n[6],l=n[1],c=n[4],u=n[7],d=n[2],h=n[5],f=n[8],x=i[0],v=i[3],m=i[6],p=i[1],A=i[4],R=i[7],b=i[2],w=i[5],T=i[8];return s[0]=r*x+o*p+a*b,s[3]=r*v+o*A+a*w,s[6]=r*m+o*R+a*T,s[1]=l*x+c*p+u*b,s[4]=l*v+c*A+u*w,s[7]=l*m+c*R+u*T,s[2]=d*x+h*p+f*b,s[5]=d*v+h*A+f*w,s[8]=d*m+h*R+f*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],a=e[6],l=e[7],c=e[8];return t*r*c-t*o*l-n*s*c+n*o*a+i*s*l-i*r*a}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],a=e[6],l=e[7],c=e[8],u=c*r-o*l,d=o*a-c*s,h=l*s-r*a,f=t*u+n*d+i*h;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/f;return e[0]=u*x,e[1]=(i*l-c*n)*x,e[2]=(o*n-i*r)*x,e[3]=d*x,e[4]=(c*t-i*a)*x,e[5]=(i*s-o*t)*x,e[6]=h*x,e[7]=(n*a-l*t)*x,e[8]=(r*t-n*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,o){let a=Math.cos(s),l=Math.sin(s);return this.set(n*a,n*l,-n*(a*r+l*o)+r+e,-i*l,i*a,-i*(-l*r+a*o)+o+t,0,0,1),this}scale(e,t){return Oi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(fa.makeScale(e,t)),this}rotate(e){return Oi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(fa.makeRotation(-e)),this}translate(e,t){return Oi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(fa.makeTranslation(e,t)),this}makeTranslation(e,t){if(e.isVector2)this.set(1,0,e.x,0,1,e.y,0,0,1);else this.set(1,0,e,0,1,t,0,0,1);return this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}var fa=new ht,fh=new ht().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),ph=new ht().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function um(){let e={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(s,r,o){if(this.enabled===!1||r===o||!r||!o)return s;if(this.spaces[r].transfer==="srgb")s.r=ci(s.r),s.g=ci(s.g),s.b=ci(s.b);if(this.spaces[r].primaries!==this.spaces[o].primaries)s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ);if(this.spaces[o].transfer==="srgb")s.r=ys(s.r),s.g=ys(s.g),s.b=ys(s.b);return s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){if(s==="")return"linear";return this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Oi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Oi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,r)}},t=[0.64,0.33,0.3,0.6,0.15,0.06],n=[0.2126,0.7152,0.0722],i=[0.3127,0.329];return e.define({["srgb-linear"]:{primaries:t,whitePoint:i,transfer:"linear",toXYZ:fh,fromXYZ:ph,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:t,whitePoint:i,transfer:"srgb",toXYZ:fh,fromXYZ:ph,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),e}var pt=um();function ci(e){return e<0.04045?e*0.0773993808:Math.pow(e*0.9478672986+0.0521327014,2.4)}function ys(e){return e<0.0031308?e*12.92:1.055*Math.pow(e,0.41666)-0.055}var os;class wl{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src))return e.src;if(typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{if(os===void 0)os=er("canvas");os.width=e.width,os.height=e.height;let i=os.getContext("2d");if(e instanceof ImageData)i.putImageData(e,0,0);else i.drawImage(e,0,0,e.width,e.height);n=os}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=er("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=ci(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)if(t instanceof Uint8Array||t instanceof Uint8ClampedArray)t[n]=Math.floor(ci(t[n]/255)*255);else t[n]=ci(t[n]);return{data:t,width:e.width,height:e.height}}else return it("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}var dm=0;class fr{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:dm++}),this.uuid=Ai(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;if(typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement)e.set(t.videoWidth,t.videoHeight,0);else if(typeof VideoFrame<"u"&&t instanceof VideoFrame)e.set(t.displayWidth,t.displayHeight,0);else if(t!==null)e.set(t.width,t.height,t.depth||0);else e.set(0,0,0);return e}set needsUpdate(e){if(e===!0)this.version++}toJSON(e){let t=e===void 0||typeof e==="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)if(i[r].isDataTexture)s.push(pa(i[r].image));else s.push(pa(i[r]))}else s=pa(i);n.url=s}if(!t)e.images[this.uuid]=n;return n}}function pa(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap)return wl.getDataURL(e);else if(e.data)return{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name};else return it("Texture: Unable to serialize Texture."),{}}var fm=0,ma=new B;class sn extends ui{constructor(e=sn.DEFAULT_IMAGE,t=sn.DEFAULT_MAPPING,n=1001,i=1001,s=1006,r=1008,o=1023,a=1009,l=sn.DEFAULT_ANISOTROPY,c=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=Ai(),this.name="",this.source=new fr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=a,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=e&&e.depth&&e.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ma).x}get height(){return this.source.getSize(ma).y}get depth(){return this.source.getSize(ma).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){it(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){it(`Texture.setValues(): property '${t}' does not exist.`);continue}if(i&&n&&(i.isVector2&&n.isVector2))i.copy(n);else if(i&&n&&(i.isVector3&&n.isVector3))i.copy(n);else if(i&&n&&(i.isMatrix3&&n.isMatrix3))i.copy(n);else this[t]=n}}toJSON(e){let t=e===void 0||typeof e==="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)n.userData=this.userData;if(!t)e.textures[this.uuid]=n;return n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1000:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(e.x)%2)===1)e.x=Math.ceil(e.x)-e.x;else e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1000:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(e.y)%2)===1)e.y=Math.ceil(e.y)-e.y;else e.y=e.y-Math.floor(e.y);break}if(this.flipY)e.y=1-e.y;return e}set needsUpdate(e){if(e===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(e){if(e===!0)this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=300;sn.DEFAULT_ANISOTROPY=1;class Ft{static{Ft.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);if(t<0.0001)this.x=1,this.y=0,this.z=0;else this.x=e.x/t,this.y=e.y/t,this.z=e.z/t;return this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,r=0.01,o=0.1,a=e.elements,l=a[0],c=a[4],u=a[8],d=a[1],h=a[5],f=a[9],x=a[2],v=a[6],m=a[10];if(Math.abs(c-d)<0.01&&Math.abs(u-x)<0.01&&Math.abs(f-v)<0.01){if(Math.abs(c+d)<0.1&&Math.abs(u+x)<0.1&&Math.abs(f+v)<0.1&&Math.abs(l+h+m-3)<0.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(l+1)/2,R=(h+1)/2,b=(m+1)/2,w=(c+d)/4,T=(u+x)/4,P=(f+v)/4;if(A>R&&A>b)if(A<0.01)n=0,i=0.707106781,s=0.707106781;else n=Math.sqrt(A),i=w/n,s=T/n;else if(R>b)if(R<0.01)n=0.707106781,i=0,s=0.707106781;else i=Math.sqrt(R),n=w/i,s=P/i;else if(b<0.01)n=0.707106781,i=0.707106781,s=0;else s=Math.sqrt(b),n=T/s,i=P/s;return this.set(n,i,s,t),this}let p=Math.sqrt((v-f)*(v-f)+(u-x)*(u-x)+(d-c)*(d-c));if(Math.abs(p)<0.001)p=1;return this.x=(v-f)/p,this.y=(u-x)/p,this.z=(d-c)/p,this.w=Math.acos((l+h+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this.w=gt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this.w=gt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Al extends ui{constructor(e=1,t=1,n={}){super();n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t),this.textures=[];let i={width:e,height:t,depth:n.depth},s=new sn(i),r=n.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(e.mapping!==void 0)t.mapping=e.mapping;if(e.wrapS!==void 0)t.wrapS=e.wrapS;if(e.wrapT!==void 0)t.wrapT=e.wrapT;if(e.wrapR!==void 0)t.wrapR=e.wrapR;if(e.magFilter!==void 0)t.magFilter=e.magFilter;if(e.minFilter!==void 0)t.minFilter=e.minFilter;if(e.format!==void 0)t.format=e.format;if(e.type!==void 0)t.type=e.type;if(e.anisotropy!==void 0)t.anisotropy=e.anisotropy;if(e.colorSpace!==void 0)t.colorSpace=e.colorSpace;if(e.flipY!==void 0)t.flipY=e.flipY;if(e.generateMipmaps!==void 0)t.generateMipmaps=e.generateMipmaps;if(e.internalFormat!==void 0)t.internalFormat=e.internalFormat;for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(e!==null&&e.renderTarget===null)e.renderTarget=this;this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)if(this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0)this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new fr(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vt extends Al{constructor(e=1,t=1,n={}){super(e,t,n);this.isWebGLRenderTarget=!0}}class yo extends sn{constructor(e=null,t=1,n=1,i=1){super(null);this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Tl extends sn{constructor(e=null,t=1,n=1,i=1){super(null);this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class Bt{static{Bt.prototype.isMatrix4=!0}constructor(e,t,n,i,s,r,o,a,l,c,u,d,h,f,x,v){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0)this.set(e,t,n,i,s,r,o,a,l,c,u,d,h,f,x,v)}set(e,t,n,i,s,r,o,a,l,c,u,d,h,f,x,v){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=r,m[9]=o,m[13]=a,m[2]=l,m[6]=c,m[10]=u,m[14]=d,m[3]=h,m[7]=f,m[11]=x,m[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){if(this.determinantAffine()===0)return e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this;return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/as.setFromMatrixColumn(e,0).length(),s=1/as.setFromMatrixColumn(e,1).length(),r=1/as.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,{x:n,y:i,z:s}=e,r=Math.cos(n),o=Math.sin(n),a=Math.cos(i),l=Math.sin(i),c=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=r*c,h=r*u,f=o*c,x=o*u;t[0]=a*c,t[4]=-a*u,t[8]=l,t[1]=h+f*l,t[5]=d-x*l,t[9]=-o*a,t[2]=x-d*l,t[6]=f+h*l,t[10]=r*a}else if(e.order==="YXZ"){let d=a*c,h=a*u,f=l*c,x=l*u;t[0]=d+x*o,t[4]=f*o-h,t[8]=r*l,t[1]=r*u,t[5]=r*c,t[9]=-o,t[2]=h*o-f,t[6]=x+d*o,t[10]=r*a}else if(e.order==="ZXY"){let d=a*c,h=a*u,f=l*c,x=l*u;t[0]=d-x*o,t[4]=-r*u,t[8]=f+h*o,t[1]=h+f*o,t[5]=r*c,t[9]=x-d*o,t[2]=-r*l,t[6]=o,t[10]=r*a}else if(e.order==="ZYX"){let d=r*c,h=r*u,f=o*c,x=o*u;t[0]=a*c,t[4]=f*l-h,t[8]=d*l+x,t[1]=a*u,t[5]=x*l+d,t[9]=h*l-f,t[2]=-l,t[6]=o*a,t[10]=r*a}else if(e.order==="YZX"){let d=r*a,h=r*l,f=o*a,x=o*l;t[0]=a*c,t[4]=x-d*u,t[8]=f*u+h,t[1]=u,t[5]=r*c,t[9]=-o*c,t[2]=-l*c,t[6]=h*u+f,t[10]=d-x*u}else if(e.order==="XZY"){let d=r*a,h=r*l,f=o*a,x=o*l;t[0]=a*c,t[4]=-u,t[8]=l*c,t[1]=d*u+x,t[5]=r*c,t[9]=h*u-f,t[2]=f*u-h,t[6]=o*c,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pm,e,mm)}lookAt(e,t,n){let i=this.elements;if(Sn.subVectors(e,t),Sn.lengthSq()===0)Sn.z=1;if(Sn.normalize(),yi.crossVectors(n,Sn),yi.lengthSq()===0){if(Math.abs(n.z)===1)Sn.x+=0.0001;else Sn.z+=0.0001;Sn.normalize(),yi.crossVectors(n,Sn)}return yi.normalize(),Fr.crossVectors(Sn,yi),i[0]=yi.x,i[4]=Fr.x,i[8]=Sn.x,i[1]=yi.y,i[5]=Fr.y,i[9]=Sn.y,i[2]=yi.z,i[6]=Fr.z,i[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[4],a=n[8],l=n[12],c=n[1],u=n[5],d=n[9],h=n[13],f=n[2],x=n[6],v=n[10],m=n[14],p=n[3],A=n[7],R=n[11],b=n[15],w=i[0],T=i[4],P=i[8],g=i[12],_=i[1],D=i[5],I=i[9],F=i[13],X=i[2],L=i[6],G=i[10],Z=i[14],N=i[3],ie=i[7],O=i[11],z=i[15];return s[0]=r*w+o*_+a*X+l*N,s[4]=r*T+o*D+a*L+l*ie,s[8]=r*P+o*I+a*G+l*O,s[12]=r*g+o*F+a*Z+l*z,s[1]=c*w+u*_+d*X+h*N,s[5]=c*T+u*D+d*L+h*ie,s[9]=c*P+u*I+d*G+h*O,s[13]=c*g+u*F+d*Z+h*z,s[2]=f*w+x*_+v*X+m*N,s[6]=f*T+x*D+v*L+m*ie,s[10]=f*P+x*I+v*G+m*O,s[14]=f*g+x*F+v*Z+m*z,s[3]=p*w+A*_+R*X+b*N,s[7]=p*T+A*D+R*L+b*ie,s[11]=p*P+A*I+R*G+b*O,s[15]=p*g+A*F+R*Z+b*z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],o=e[5],a=e[9],l=e[13],c=e[2],u=e[6],d=e[10],h=e[14],f=e[3],x=e[7],v=e[11],m=e[15],p=a*h-l*d,A=o*h-l*u,R=o*d-a*u,b=r*h-l*c,w=r*d-a*c,T=r*u-o*c;return t*(x*p-v*A+m*R)-n*(f*p-v*b+m*w)+i*(f*A-x*b+m*T)-s*(f*R-x*w+v*T)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],r=e[5],o=e[9],a=e[2],l=e[6],c=e[10];return t*(r*c-o*l)-n*(s*c-o*a)+i*(s*l-r*a)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;if(e.isVector3)i[12]=e.x,i[13]=e.y,i[14]=e.z;else i[12]=e,i[13]=t,i[14]=n;return this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],a=e[6],l=e[7],c=e[8],u=e[9],d=e[10],h=e[11],f=e[12],x=e[13],v=e[14],m=e[15],p=t*o-n*r,A=t*a-i*r,R=t*l-s*r,b=n*a-i*o,w=n*l-s*o,T=i*l-s*a,P=c*x-u*f,g=c*v-d*f,_=c*m-h*f,D=u*v-d*x,I=u*m-h*x,F=d*m-h*v,X=p*F-A*I+R*D+b*_-w*g+T*P;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/X;return e[0]=(o*F-a*I+l*D)*L,e[1]=(i*I-n*F-s*D)*L,e[2]=(x*T-v*w+m*b)*L,e[3]=(d*w-u*T-h*b)*L,e[4]=(a*_-r*F-l*g)*L,e[5]=(t*F-i*_+s*g)*L,e[6]=(v*R-f*T-m*A)*L,e[7]=(c*T-d*R+h*A)*L,e[8]=(r*I-o*_+l*P)*L,e[9]=(n*_-t*I-s*P)*L,e[10]=(f*w-x*R+m*p)*L,e[11]=(u*R-c*w-h*p)*L,e[12]=(o*g-r*D-a*P)*L,e[13]=(t*D-n*g+i*P)*L,e[14]=(x*A-f*b-v*p)*L,e[15]=(c*b-u*A+d*p)*L,this}scale(e){let t=this.elements,{x:n,y:i,z:s}=e;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){if(e.isVector3)this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1);else this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1);return this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,{x:r,y:o,z:a}=e,l=s*r,c=s*o;return this.set(l*r+n,l*o-i*a,l*a+i*o,0,l*o+i*a,c*o+n,c*a-i*r,0,l*a-i*o,c*a+i*r,s*a*a+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,{_x:s,_y:r,_z:o,_w:a}=t,l=s+s,c=r+r,u=o+o,d=s*l,h=s*c,f=s*u,x=r*c,v=r*u,m=o*u,p=a*l,A=a*c,R=a*u,{x:b,y:w,z:T}=n;return i[0]=(1-(x+m))*b,i[1]=(h+R)*b,i[2]=(f-A)*b,i[3]=0,i[4]=(h-R)*w,i[5]=(1-(d+m))*w,i[6]=(v+p)*w,i[7]=0,i[8]=(f+A)*T,i[9]=(v-p)*T,i[10]=(1-(d+x))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let r=as.set(i[0],i[1],i[2]).length(),o=as.set(i[4],i[5],i[6]).length(),a=as.set(i[8],i[9],i[10]).length();if(s<0)r=-r;kn.copy(this);let l=1/r,c=1/o,u=1/a;return kn.elements[0]*=l,kn.elements[1]*=l,kn.elements[2]*=l,kn.elements[4]*=c,kn.elements[5]*=c,kn.elements[6]*=c,kn.elements[8]*=u,kn.elements[9]*=u,kn.elements[10]*=u,t.setFromRotationMatrix(kn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,r,o=2000,a=!1){let l=this.elements,c=2*s/(t-e),u=2*s/(n-i),d=(t+e)/(t-e),h=(n+i)/(n-i),f,x;if(a)f=s/(r-s),x=r*s/(r-s);else if(o===2000)f=-(r+s)/(r-s),x=-2*r*s/(r-s);else if(o===2001)f=-r/(r-s),x=-r*s/(r-s);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,r,o=2000,a=!1){let l=this.elements,c=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),h=-(n+i)/(n-i),f,x;if(a)f=1/(r-s),x=r/(r-s);else if(o===2000)f=-2/(r-s),x=-(r+s)/(r-s);else if(o===2001)f=-1/(r-s),x=-s/(r-s);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=f,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}var as=new B,kn=new Bt,pm=new B(0,0,0),mm=new B(1,1,1),yi=new B,Fr=new B,Sn=new B,mh=new Bt,gh=new Wn;class Ti{constructor(e=0,t=0,n=0,i=Ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],r=i[4],o=i[8],a=i[1],l=i[5],c=i[9],u=i[2],d=i[6],h=i[10];switch(t){case"XYZ":if(this._y=Math.asin(gt(o,-1,1)),Math.abs(o)<0.9999999)this._x=Math.atan2(-c,h),this._z=Math.atan2(-r,s);else this._x=Math.atan2(d,l),this._z=0;break;case"YXZ":if(this._x=Math.asin(-gt(c,-1,1)),Math.abs(c)<0.9999999)this._y=Math.atan2(o,h),this._z=Math.atan2(a,l);else this._y=Math.atan2(-u,s),this._z=0;break;case"ZXY":if(this._x=Math.asin(gt(d,-1,1)),Math.abs(d)<0.9999999)this._y=Math.atan2(-u,h),this._z=Math.atan2(-r,l);else this._y=0,this._z=Math.atan2(a,s);break;case"ZYX":if(this._y=Math.asin(-gt(u,-1,1)),Math.abs(u)<0.9999999)this._x=Math.atan2(d,h),this._z=Math.atan2(a,s);else this._x=0,this._z=Math.atan2(-r,l);break;case"YZX":if(this._z=Math.asin(gt(a,-1,1)),Math.abs(a)<0.9999999)this._x=Math.atan2(-c,l),this._y=Math.atan2(-u,s);else this._x=0,this._y=Math.atan2(o,h);break;case"XZY":if(this._z=Math.asin(-gt(r,-1,1)),Math.abs(r)<0.9999999)this._x=Math.atan2(d,l),this._y=Math.atan2(o,s);else this._x=Math.atan2(-c,h),this._y=0;break;default:it("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}if(this._order=t,n===!0)this._onChangeCallback();return this}setFromQuaternion(e,t,n){return mh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gh.setFromEuler(this),this.setFromQuaternion(gh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){if(this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0)this._order=e[3];return this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ti.DEFAULT_ORDER="XYZ";class bo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}var gm=0,xh=new B,ls=new Wn,si=new Bt,Ur=new B,$s=new B,xm=new B,vm=new Wn,vh=new B(1,0,0),_h=new B(0,1,0),yh=new B(0,0,1),bh={type:"added"},_m={type:"removed"},cs={type:"childadded",child:null},ga={type:"childremoved",child:null};class cn extends ui{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=cn.DEFAULT_UP.clone();let e=new B,t=new Ti,n=new Wn,i=new B(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Bt},normalMatrix:{value:new ht}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ls.setFromAxisAngle(e,t),this.quaternion.multiply(ls),this}rotateOnWorldAxis(e,t){return ls.setFromAxisAngle(e,t),this.quaternion.premultiply(ls),this}rotateX(e){return this.rotateOnAxis(vh,e)}rotateY(e){return this.rotateOnAxis(_h,e)}rotateZ(e){return this.rotateOnAxis(yh,e)}translateOnAxis(e,t){return xh.copy(e).applyQuaternion(this.quaternion),this.position.add(xh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vh,e)}translateY(e){return this.translateOnAxis(_h,e)}translateZ(e){return this.translateOnAxis(yh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(e,t,n){if(e.isVector3)Ur.copy(e);else Ur.set(e,t,n);let i=this.parent;if(this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)si.lookAt($s,Ur,this.up);else si.lookAt(Ur,$s,this.up);if(this.quaternion.setFromRotationMatrix(si),i)si.extractRotation(i.matrixWorld),ls.setFromRotationMatrix(si),this.quaternion.premultiply(ls.invert())}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}if(e===this)return rt("Object3D.add: object can't be added as a child of itself.",e),this;if(e&&e.isObject3D)e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bh),cs.child=e,this.dispatchEvent(cs),cs.child=null;else rt("Object3D.add: object not an instance of THREE.Object3D.",e);return this}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);if(t!==-1)e.parent=null,this.children.splice(t,1),e.dispatchEvent(_m),ga.child=e,this.dispatchEvent(ga),ga.child=null;return this}removeFromParent(){let e=this.parent;if(e!==null)e.remove(this);return this}clear(){return this.remove(...this.children)}attach(e){if(this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),e.parent!==null)e.parent.updateWorldMatrix(!0,!1),si.multiply(e.parent.matrixWorld);return e.applyMatrix4(si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bh),cs.child=e,this.dispatchEvent(cs),cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}return}getObjectsByProperty(e,t,n=[]){if(this[e]===t)n.push(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,e,xm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,vm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;if(t!==null)e(t),t.traverseAncestors(e)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let{x:t,y:n,z:i}=e,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||e){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,e=!0}let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null)i.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||n){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,n=!0}if(t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==="string",n={};if(t)e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let i={};if(i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)i.userData=this.userData;if(i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null)i.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)i.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)i.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map((o)=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map((o)=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null)i.colorsTexture=this._colorsTexture.toJSON(e);if(this.boundingSphere!==null)i.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)i.boundingBox=this.boundingBox.toJSON()}function s(o,a){if(o[a.uuid]===void 0)o[a.uuid]=a.toJSON(e);return a.uuid}if(this.isScene){if(this.background){if(this.background.isColor)i.background=this.background.toJSON();else if(this.background.isTexture)i.background=this.background.toJSON(e).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)i.environment=this.environment.toJSON(e).uuid}else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let a=o.shapes;if(Array.isArray(a))for(let l=0,c=a.length;l<c;l++){let u=a[l];s(e.shapes,u)}else s(e.shapes,a)}}if(this.isSkinnedMesh){if(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let a=0,l=this.material.length;a<l;a++)o.push(s(e.materials,this.material[a]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let a=this.animations[o];i.animations.push(s(e.animations,a))}}if(t){let o=r(e.geometries),a=r(e.materials),l=r(e.textures),c=r(e.images),u=r(e.shapes),d=r(e.skeletons),h=r(e.animations),f=r(e.nodes);if(o.length>0)n.geometries=o;if(a.length>0)n.materials=a;if(l.length>0)n.textures=l;if(c.length>0)n.images=c;if(u.length>0)n.shapes=u;if(d.length>0)n.skeletons=d;if(h.length>0)n.animations=h;if(f.length>0)n.nodes=f}return n.object=i,n;function r(o){let a=[];for(let l in o){let c=o[l];delete c.metadata,a.push(c)}return a}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}cn.DEFAULT_UP=new B(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class _s extends cn{constructor(){super();this.isGroup=!0,this.type="Group"}}var ym={type:"move"};class pr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new _s,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new _s,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new _s,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(e){if(this._targetRay!==null)this._targetRay.dispatchEvent(e);if(this._grip!==null)this._grip.dispatchEvent(e);if(this._hand!==null)this._hand.dispatchEvent(e);return this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){if(this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(e,t,n){let i=null,s=null,r=null,o=this._targetRay,a=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(let x of e.hand.values()){let v=t.getJointPose(x,n),m=this._getHandJoint(l,x);if(v!==null)m.matrix.fromArray(v.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=v.radius;m.visible=v!==null}let c=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=c.position.distanceTo(u.position),h=0.02,f=0.005;if(l.inputState.pinching&&d>h+f)l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this});else if(!l.inputState.pinching&&d<=h-f)l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this})}else if(a!==null&&e.gripSpace){if(s=t.getPose(e.gripSpace,n),s!==null){if(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity)a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity);else a.hasLinearVelocity=!1;if(s.angularVelocity)a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity);else a.hasAngularVelocity=!1;if(a.eventsEnabled)a.dispatchEvent({type:"gripUpdated",data:e,target:this})}}if(o!==null){if(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null)i=s;if(i!==null){if(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity)o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity);else o.hasLinearVelocity=!1;if(i.angularVelocity)o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity);else o.hasAngularVelocity=!1;this.dispatchEvent(ym)}}}if(o!==null)o.visible=i!==null;if(a!==null)a.visible=s!==null;if(l!==null)l.visible=r!==null;return this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new _s;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}var Ou={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},Or={h:0,s:0,l:0};function xa(e,t,n){if(n<0)n+=1;if(n>1)n-=1;if(n<0.16666666666666666)return e+(t-e)*6*n;if(n<0.5)return t;if(n<0.6666666666666666)return e+(t-e)*6*(0.6666666666666666-n);return e}class at{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;if(i&&i.isColor)this.copy(i);else if(typeof i==="number")this.setHex(i);else if(typeof i==="string")this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t="srgb"){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=pt.workingColorSpace){if(e=hm(e,1),t=gt(t,0,1),n=gt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=0.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=xa(r,s,e+0.3333333333333333),this.g=xa(r,s,e),this.b=xa(r,s,e-0.3333333333333333)}return pt.colorSpaceToWorking(this,i),this}setStyle(e,t="srgb"){function n(s){if(s===void 0)return;if(parseFloat(s)<1)it("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:it("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);else if(r===6)return this.setHex(parseInt(s,16),t);else it("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t="srgb"){let n=Ou[e.toLowerCase()];if(n!==void 0)this.setHex(n,t);else it("Color: Unknown color "+e);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e="srgb"){return pt.workingToColorSpace(ln.copy(this),e),Math.round(gt(ln.r*255,0,255))*65536+Math.round(gt(ln.g*255,0,255))*256+Math.round(gt(ln.b*255,0,255))}getHexString(e="srgb"){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.workingToColorSpace(ln.copy(this),t);let{r:n,g:i,b:s}=ln,r=Math.max(n,i,s),o=Math.min(n,i,s),a,l,c=(o+r)/2;if(o===r)a=0,l=0;else{let u=r-o;switch(l=c<=0.5?u/(r+o):u/(2-r-o),r){case n:a=(i-s)/u+(i<s?6:0);break;case i:a=(s-n)/u+2;break;case s:a=(n-i)/u+4;break}a/=6}return e.h=a,e.s=l,e.l=c,e}getRGB(e,t=pt.workingColorSpace){return pt.workingToColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e="srgb"){pt.workingToColorSpace(ln.copy(this),e);let{r:t,g:n,b:i}=ln;if(e!=="srgb")return`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`;return`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+t,bi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(bi),e.getHSL(Or);let n=ua(bi.h,Or.h,t),i=ua(bi.s,Or.s,t),s=ua(bi.l,Or.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var ln=new at;at.NAMES=Ou;class So extends cn{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){if(super.copy(e,t),e.background!==null)this.background=e.background.clone();if(e.environment!==null)this.environment=e.environment.clone();if(e.fog!==null)this.fog=e.fog.clone();if(this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null)this.overrideMaterial=e.overrideMaterial.clone();return this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);if(this.fog!==null)t.object.fog=this.fog.toJSON();return t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}var Gn=new B,ri=new B,va=new B,oi=new B,hs=new B,us=new B,Sh=new B,_a=new B,ya=new B,ba=new B,Sa=new Ft,Ma=new Ft,wa=new Ft;class Dn{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Gn.subVectors(e,t),i.cross(Gn);let s=i.lengthSq();if(s>0)return i.multiplyScalar(1/Math.sqrt(s));return i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Gn.subVectors(i,t),ri.subVectors(n,t),va.subVectors(e,t);let r=Gn.dot(Gn),o=Gn.dot(ri),a=Gn.dot(va),l=ri.dot(ri),c=ri.dot(va),u=r*l-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,h=(l*a-o*c)*d,f=(r*c-o*a)*d;return s.set(1-h-f,f,h)}static containsPoint(e,t,n,i){if(this.getBarycoord(e,t,n,i,oi)===null)return!1;return oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(e,t,n,i,s,r,o,a){if(this.getBarycoord(e,t,n,i,oi)===null){if(a.x=0,a.y=0,"z"in a)a.z=0;if("w"in a)a.w=0;return null}return a.setScalar(0),a.addScaledVector(s,oi.x),a.addScaledVector(r,oi.y),a.addScaledVector(o,oi.z),a}static getInterpolatedAttribute(e,t,n,i,s,r){return Sa.setScalar(0),Ma.setScalar(0),wa.setScalar(0),Sa.fromBufferAttribute(e,t),Ma.fromBufferAttribute(e,n),wa.fromBufferAttribute(e,i),r.setScalar(0),r.addScaledVector(Sa,s.x),r.addScaledVector(Ma,s.y),r.addScaledVector(wa,s.z),r}static isFrontFacing(e,t,n,i){return Gn.subVectors(n,t),ri.subVectors(e,t),Gn.cross(ri).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gn.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Gn.cross(ri).length()*0.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Dn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,r,o;hs.subVectors(i,n),us.subVectors(s,n),_a.subVectors(e,n);let a=hs.dot(_a),l=us.dot(_a);if(a<=0&&l<=0)return t.copy(n);ya.subVectors(e,i);let c=hs.dot(ya),u=us.dot(ya);if(c>=0&&u<=c)return t.copy(i);let d=a*u-c*l;if(d<=0&&a>=0&&c<=0)return r=a/(a-c),t.copy(n).addScaledVector(hs,r);ba.subVectors(e,s);let h=hs.dot(ba),f=us.dot(ba);if(f>=0&&h<=f)return t.copy(s);let x=h*l-a*f;if(x<=0&&l>=0&&f<=0)return o=l/(l-f),t.copy(n).addScaledVector(us,o);let v=c*f-h*u;if(v<=0&&u-c>=0&&h-f>=0)return Sh.subVectors(s,i),o=(u-c)/(u-c+(h-f)),t.copy(i).addScaledVector(Sh,o);let m=1/(v+x+d);return r=x*m,o=d*m,t.copy(n).addScaledVector(hs,r).addScaledVector(us,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Wi{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Hn.copy(t).multiplyScalar(0.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++){if(e.isMesh===!0)e.getVertexPosition(r,Hn);else Hn.fromBufferAttribute(s,r);Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn)}else{if(e.boundingBox!==void 0){if(e.boundingBox===null)e.computeBoundingBox();Br.copy(e.boundingBox)}else{if(n.boundingBox===null)n.computeBoundingBox();Br.copy(n.boundingBox)}Br.applyMatrix4(e.matrixWorld),this.union(Br)}}let i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;if(e.normal.x>0)t=e.normal.x*this.min.x,n=e.normal.x*this.max.x;else t=e.normal.x*this.max.x,n=e.normal.x*this.min.x;if(e.normal.y>0)t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y;else t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y;if(e.normal.z>0)t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z;else t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z;return t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Js),zr.subVectors(this.max,Js),ds.subVectors(e.a,Js),fs.subVectors(e.b,Js),ps.subVectors(e.c,Js),Si.subVectors(fs,ds),Mi.subVectors(ps,fs),Di.subVectors(ds,ps);let t=[0,-Si.z,Si.y,0,-Mi.z,Mi.y,0,-Di.z,Di.y,Si.z,0,-Si.x,Mi.z,0,-Mi.x,Di.z,0,-Di.x,-Si.y,Si.x,0,-Mi.y,Mi.x,0,-Di.y,Di.x,0];if(!Aa(t,ds,fs,ps,zr))return!1;if(t=[1,0,0,0,1,0,0,0,1],!Aa(t,ds,fs,ps,zr))return!1;return kr.crossVectors(Si,Mi),t=[kr.x,kr.y,kr.z],Aa(t,ds,fs,ps,zr)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){if(this.isEmpty())e.makeEmpty();else this.getCenter(e.center),e.radius=this.getSize(Hn).length()*0.5;return e}intersect(e){if(this.min.max(e.min),this.max.min(e.max),this.isEmpty())this.makeEmpty();return this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){if(this.isEmpty())return this;return ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ai),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}var ai=[new B,new B,new B,new B,new B,new B,new B,new B],Hn=new B,Br=new Wi,ds=new B,fs=new B,ps=new B,Si=new B,Mi=new B,Di=new B,Js=new B,zr=new B,kr=new B,Ni=new B;function Aa(e,t,n,i,s){for(let r=0,o=e.length-3;r<=o;r+=3){Ni.fromArray(e,r);let a=s.x*Math.abs(Ni.x)+s.y*Math.abs(Ni.y)+s.z*Math.abs(Ni.z),l=t.dot(Ni),c=n.dot(Ni),u=i.dot(Ni);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var qt=new B,Gr=new $e,bm=0;class kt extends ui{constructor(e,t,n=!1){super();if(Array.isArray(e))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(e){if(e===!0)this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Gr.fromBufferAttribute(this,t),Gr.applyMatrix3(e),this.setXY(t,Gr.x,Gr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];if(this.normalized)n=Kn(n,this.array);return n}setComponent(e,t,n){if(this.normalized)n=Pt(n,this.array);return this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];if(this.normalized)t=Kn(t,this.array);return t}setX(e,t){if(this.normalized)t=Pt(t,this.array);return this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];if(this.normalized)t=Kn(t,this.array);return t}setY(e,t){if(this.normalized)t=Pt(t,this.array);return this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];if(this.normalized)t=Kn(t,this.array);return t}setZ(e,t){if(this.normalized)t=Pt(t,this.array);return this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];if(this.normalized)t=Kn(t,this.array);return t}setW(e,t){if(this.normalized)t=Pt(t,this.array);return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){if(e*=this.itemSize,this.normalized)t=Pt(t,this.array),n=Pt(n,this.array);return this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){if(e*=this.itemSize,this.normalized)t=Pt(t,this.array),n=Pt(n,this.array),i=Pt(i,this.array);return this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){if(e*=this.itemSize,this.normalized)t=Pt(t,this.array),n=Pt(n,this.array),i=Pt(i,this.array),s=Pt(s,this.array);return this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Mo extends kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class wo extends kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class vt extends kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}var Sm=new Wi,Ks=new B,Ta=new B;class Tn{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;if(t!==void 0)n.copy(t);else Sm.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);if(t.copy(e),n>this.radius*this.radius)t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center);return t}getBoundingBox(e){if(this.isEmpty())return e.makeEmpty(),e;return e.set(this.center,this.center),e.expandByScalar(this.radius),e}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ks.subVectors(e,this.center);let t=Ks.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*0.5;this.center.addScaledVector(Ks,i/n),this.radius+=i}return this}union(e){if(e.isEmpty())return this;if(this.isEmpty())return this.copy(e),this;if(this.center.equals(e.center)===!0)this.radius=Math.max(this.radius,e.radius);else Ta.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ks.copy(e.center).add(Ta)),this.expandByPoint(Ks.copy(e.center).sub(Ta));return this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}var Mm=0,Ln=new Bt,Ea=new cn,ms=new B,Mn=new Wi,Qs=new Wi,jt=new B;class zt extends ui{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mm++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){if(Array.isArray(e))this.index=new((lm(e))?wo:Mo)(e,1);else this.index=e;return this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;if(t!==void 0)t.applyMatrix4(e),t.needsUpdate=!0;let n=this.attributes.normal;if(n!==void 0){let s=new ht().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;if(i!==void 0)i.transformDirection(e),i.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,t,n){return Ln.makeTranslation(e,t,n),this.applyMatrix4(Ln),this}scale(e,t,n){return Ln.makeScale(e,t,n),this.applyMatrix4(Ln),this}lookAt(e){return Ea.lookAt(e),Ea.updateMatrix(),this.applyMatrix4(Ea.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new vt(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}if(e.length>t.count)it("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");t.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new Wi;let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];if(Mn.setFromBufferAttribute(s),this.morphTargetsRelative)jt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(jt);else this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new Tn;let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){let n=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){let o=t[s];if(Qs.setFromBufferAttribute(o),this.morphTargetsRelative)jt.addVectors(Mn.min,Qs.min),Mn.expandByPoint(jt),jt.addVectors(Mn.max,Qs.max),Mn.expandByPoint(jt);else Mn.expandByPoint(Qs.min),Mn.expandByPoint(Qs.max)}Mn.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)jt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(jt));if(t)for(let s=0,r=t.length;s<r;s++){let o=t[s],a=this.morphTargetsRelative;for(let l=0,c=o.count;l<c;l++){if(jt.fromBufferAttribute(o,l),a)ms.fromBufferAttribute(e,l),jt.add(ms);i=Math.max(i,n.distanceToSquared(jt))}}if(this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius))rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:n,normal:i,uv:s}=t,r=this.getAttribute("tangent");if(r===void 0||r.count!==n.count)r=new kt(new Float32Array(4*n.count),4),this.setAttribute("tangent",r);let o=[],a=[];for(let P=0;P<n.count;P++)o[P]=new B,a[P]=new B;let l=new B,c=new B,u=new B,d=new $e,h=new $e,f=new $e,x=new B,v=new B;function m(P,g,_){l.fromBufferAttribute(n,P),c.fromBufferAttribute(n,g),u.fromBufferAttribute(n,_),d.fromBufferAttribute(s,P),h.fromBufferAttribute(s,g),f.fromBufferAttribute(s,_),c.sub(l),u.sub(l),h.sub(d),f.sub(d);let D=1/(h.x*f.y-f.x*h.y);if(!isFinite(D))return;x.copy(c).multiplyScalar(f.y).addScaledVector(u,-h.y).multiplyScalar(D),v.copy(u).multiplyScalar(h.x).addScaledVector(c,-f.x).multiplyScalar(D),o[P].add(x),o[g].add(x),o[_].add(x),a[P].add(v),a[g].add(v),a[_].add(v)}let p=this.groups;if(p.length===0)p=[{start:0,count:e.count}];for(let P=0,g=p.length;P<g;++P){let _=p[P],{start:D,count:I}=_;for(let F=D,X=D+I;F<X;F+=3)m(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let A=new B,R=new B,b=new B,w=new B;function T(P){b.fromBufferAttribute(i,P),w.copy(b);let g=o[P];A.copy(g),A.sub(b.multiplyScalar(b.dot(g))).normalize(),R.crossVectors(w,g);let D=R.dot(a[P])<0?-1:1;r.setXYZW(P,A.x,A.y,A.z,D)}for(let P=0,g=p.length;P<g;++P){let _=p[P],{start:D,count:I}=_;for(let F=D,X=D+I;F<X;F+=3)T(e.getX(F+0)),T(e.getX(F+1)),T(e.getX(F+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,h=n.count;d<h;d++)n.setXYZ(d,0,0,0);let i=new B,s=new B,r=new B,o=new B,a=new B,l=new B,c=new B,u=new B;if(e)for(let d=0,h=e.count;d<h;d+=3){let f=e.getX(d+0),x=e.getX(d+1),v=e.getX(d+2);i.fromBufferAttribute(t,f),s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,v),c.subVectors(r,s),u.subVectors(i,s),c.cross(u),o.fromBufferAttribute(n,f),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,v),o.add(c),a.add(c),l.add(c),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z)}else for(let d=0,h=t.count;d<h;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),r.fromBufferAttribute(t,d+2),c.subVectors(r,s),u.subVectors(i,s),c.cross(u),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(o,a){let{array:l,itemSize:c,normalized:u}=o,d=new l.constructor(a.length*c),h=0,f=0;for(let x=0,v=a.length;x<v;x++){if(o.isInterleavedBufferAttribute)h=a[x]*o.data.stride+o.offset;else h=a[x]*c;for(let m=0;m<c;m++)d[f++]=l[h++]}return new kt(d,c,u)}if(this.index===null)return it("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new zt,n=this.index.array,i=this.attributes;for(let o in i){let a=i[o],l=e(a,n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let a=[],l=s[o];for(let c=0,u=l.length;c<u;c++){let d=l[c],h=e(d,n);a.push(h)}t.morphAttributes[o]=a}t.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,a=r.length;o<a;o++){let l=r[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0)e.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let a=this.parameters;for(let l in a)if(a[l]!==void 0)e[l]=a[l];return e}e.data={attributes:{}};let t=this.index;if(t!==null)e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)};let n=this.attributes;for(let a in n){let l=n[a];e.data.attributes[a]=l.toJSON(e.data)}let i={},s=!1;for(let a in this.morphAttributes){let l=this.morphAttributes[a],c=[];for(let u=0,d=l.length;u<d;u++){let h=l[u];c.push(h.toJSON(e.data))}if(c.length>0)i[a]=c,s=!0}if(s)e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;if(r.length>0)e.data.groups=JSON.parse(JSON.stringify(r));let o=this.boundingSphere;if(o!==null)e.data.boundingSphere=o.toJSON();return e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;if(n!==null)this.setIndex(n.clone());let i=e.attributes;for(let l in i){let c=i[l];this.setAttribute(l,c.clone(t))}let s=e.morphAttributes;for(let l in s){let c=[],u=s[l];for(let d=0,h=u.length;d<h;d++)c.push(u[d].clone(t));this.morphAttributes[l]=c}this.morphTargetsRelative=e.morphTargetsRelative;let r=e.groups;for(let l=0,c=r.length;l<c;l++){let u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;if(o!==null)this.boundingBox=o.clone();let a=e.boundingSphere;if(a!==null)this.boundingSphere=a.clone();return this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class El{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=Ai()}onUploadCallback(){}set needsUpdate(e){if(e===!0)this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){if(e.arrayBuffers===void 0)e.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=Ai();if(e.arrayBuffers[this.array.buffer._uuid]===void 0)e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){if(e.arrayBuffers===void 0)e.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=Ai();if(e.arrayBuffers[this.array.buffer._uuid]===void 0)e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}var xn=new B;class _n{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix4(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyNormalMatrix(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.transformDirection(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];if(this.normalized)n=Kn(n,this.array);return n}setComponent(e,t,n){if(this.normalized)n=Pt(n,this.array);return this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){if(this.normalized)t=Pt(t,this.array);return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){if(this.normalized)t=Pt(t,this.array);return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){if(this.normalized)t=Pt(t,this.array);return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){if(this.normalized)t=Pt(t,this.array);return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];if(this.normalized)t=Kn(t,this.array);return t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];if(this.normalized)t=Kn(t,this.array);return t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];if(this.normalized)t=Kn(t,this.array);return t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];if(this.normalized)t=Kn(t,this.array);return t}setXY(e,t,n){if(e=e*this.data.stride+this.offset,this.normalized)t=Pt(t,this.array),n=Pt(n,this.array);return this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){if(e=e*this.data.stride+this.offset,this.normalized)t=Pt(t,this.array),n=Pt(n,this.array),i=Pt(i,this.array);return this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){if(e=e*this.data.stride+this.offset,this.normalized)t=Pt(t,this.array),n=Pt(n,this.array),i=Pt(i,this.array),s=Pt(s,this.array);return this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){tr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new kt(new this.array.constructor(t),this.itemSize,this.normalized)}else{if(e.interleavedBuffers===void 0)e.interleavedBuffers={};if(e.interleavedBuffers[this.data.uuid]===void 0)e.interleavedBuffers[this.data.uuid]=this.data.clone(e);return new _n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(e){if(e===void 0){tr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else{if(e.interleavedBuffers===void 0)e.interleavedBuffers={};if(e.interleavedBuffers[this.data.uuid]===void 0)e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}var Ca=new B,wm=new B,Am=new ht;class Jn{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Ca.subVectors(n,t).cross(wm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(Ca),s=this.normal.dot(i);if(s===0){if(this.distanceToPoint(e.start)===0)return t.copy(e.start);return null}let r=-(e.start.dot(this.normal)+this.constant)/s;if(n===!0&&(r<0||r>1))return null;return t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Am.getNormalMatrix(e),i=this.coplanarPoint(Ca).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}var Tm=0;class Ci extends ui{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tm++}),this.uuid=Ai(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){if(this._alphaTest>0!==e>0)this.version++;this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e===void 0)return;for(let t in e){let n=e[t];if(n===void 0){it(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){it(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}if(i&&i.isColor)i.set(n);else if(i&&i.isVector2&&(n&&n.isVector2)||i&&i.isEuler&&(n&&n.isEuler)||i&&i.isVector3&&(n&&n.isVector3))i.copy(n);else this[t]=n}}toJSON(e){let t=e===void 0||typeof e==="string";if(t)e={textures:{},images:{}};let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor)n.color=this.color.getHex();if(this.roughness!==void 0)n.roughness=this.roughness;if(this.metalness!==void 0)n.metalness=this.metalness;if(this.sheen!==void 0)n.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)n.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)n.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)n.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)n.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)n.specular=this.specular.getHex();if(this.specularIntensity!==void 0)n.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)n.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)n.shininess=this.shininess;if(this.clearcoat!==void 0)n.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)n.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid;if(this.dispersion!==void 0)n.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)n.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)n.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)n.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)n.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid;if(this.anisotropy!==void 0)n.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)n.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid;if(this.map&&this.map.isTexture)n.map=this.map.toJSON(e).uuid;if(this.matcap&&this.matcap.isTexture)n.matcap=this.matcap.toJSON(e).uuid;if(this.alphaMap&&this.alphaMap.isTexture)n.alphaMap=this.alphaMap.toJSON(e).uuid;if(this.lightMap&&this.lightMap.isTexture)n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)n.roughnessMap=this.roughnessMap.toJSON(e).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)n.metalnessMap=this.metalnessMap.toJSON(e).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)n.emissiveMap=this.emissiveMap.toJSON(e).uuid;if(this.specularMap&&this.specularMap.isTexture)n.specularMap=this.specularMap.toJSON(e).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)n.specularColorMap=this.specularColorMap.toJSON(e).uuid;if(this.envMap&&this.envMap.isTexture){if(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0)n.combine=this.combine}if(this.envMapRotation!==void 0)n.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)n.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)n.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)n.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)n.gradientMap=this.gradientMap.toJSON(e).uuid;if(this.transmission!==void 0)n.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)n.transmissionMap=this.transmissionMap.toJSON(e).uuid;if(this.thickness!==void 0)n.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)n.thicknessMap=this.thicknessMap.toJSON(e).uuid;if(this.attenuationDistance!==void 0)n.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)n.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)n.size=this.size;if(this.sizeAttenuation!==void 0)n.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)n.clippingPlanes=this.clippingPlanes.map((s)=>s.toJSON());if(this.rotation!==void 0)n.rotation=this.rotation;if(this.depthPacking!==void 0)n.depthPacking=this.depthPacking;if(this.linewidth!==void 0)n.linewidth=this.linewidth;if(this.linecap!==void 0)n.linecap=this.linecap;if(this.linejoin!==void 0)n.linejoin=this.linejoin;if(this.dashSize!==void 0)n.dashSize=this.dashSize;if(this.gapSize!==void 0)n.gapSize=this.gapSize;if(this.scale!==void 0)n.scale=this.scale;if(this.wireframe!==void 0)n.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)n.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)n.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)n.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)n.flatShading=this.flatShading;if(this.fog!==void 0)n.fog=this.fog;if(Object.keys(this.userData).length>0)n.userData=this.userData;function i(s){let r=[];for(let o in s){let a=s[o];delete a.metadata,r.push(a)}return r}if(t){let s=i(e.textures),r=i(e.images);if(s.length>0)n.textures=s;if(r.length>0)n.images=r}return n}fromJSON(e,t){if(e.uuid!==void 0)this.uuid=e.uuid;if(e.name!==void 0)this.name=e.name;if(e.color!==void 0&&this.color!==void 0)this.color.setHex(e.color);if(e.roughness!==void 0)this.roughness=e.roughness;if(e.metalness!==void 0)this.metalness=e.metalness;if(e.sheen!==void 0)this.sheen=e.sheen;if(e.sheenColor!==void 0)this.sheenColor=new at().setHex(e.sheenColor);if(e.sheenRoughness!==void 0)this.sheenRoughness=e.sheenRoughness;if(e.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(e.emissive);if(e.specular!==void 0&&this.specular!==void 0)this.specular.setHex(e.specular);if(e.specularIntensity!==void 0)this.specularIntensity=e.specularIntensity;if(e.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(e.specularColor);if(e.shininess!==void 0)this.shininess=e.shininess;if(e.clearcoat!==void 0)this.clearcoat=e.clearcoat;if(e.clearcoatRoughness!==void 0)this.clearcoatRoughness=e.clearcoatRoughness;if(e.dispersion!==void 0)this.dispersion=e.dispersion;if(e.retroreflectivity!==void 0)this.retroreflectivity=e.retroreflectivity;if(e.iridescence!==void 0)this.iridescence=e.iridescence;if(e.iridescenceIOR!==void 0)this.iridescenceIOR=e.iridescenceIOR;if(e.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=e.iridescenceThicknessRange;if(e.transmission!==void 0)this.transmission=e.transmission;if(e.thickness!==void 0)this.thickness=e.thickness;if(e.attenuationDistance!==void 0)this.attenuationDistance=e.attenuationDistance;if(e.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(e.attenuationColor);if(e.anisotropy!==void 0)this.anisotropy=e.anisotropy;if(e.anisotropyRotation!==void 0)this.anisotropyRotation=e.anisotropyRotation;if(e.fog!==void 0)this.fog=e.fog;if(e.flatShading!==void 0)this.flatShading=e.flatShading;if(e.blending!==void 0)this.blending=e.blending;if(e.combine!==void 0)this.combine=e.combine;if(e.side!==void 0)this.side=e.side;if(e.shadowSide!==void 0)this.shadowSide=e.shadowSide;if(e.opacity!==void 0)this.opacity=e.opacity;if(e.transparent!==void 0)this.transparent=e.transparent;if(e.alphaTest!==void 0)this.alphaTest=e.alphaTest;if(e.alphaHash!==void 0)this.alphaHash=e.alphaHash;if(e.depthFunc!==void 0)this.depthFunc=e.depthFunc;if(e.depthTest!==void 0)this.depthTest=e.depthTest;if(e.depthWrite!==void 0)this.depthWrite=e.depthWrite;if(e.colorWrite!==void 0)this.colorWrite=e.colorWrite;if(e.clippingPlanes!==void 0)this.clippingPlanes=e.clippingPlanes.map((n)=>new Jn().fromJSON(n));if(e.clipIntersection!==void 0)this.clipIntersection=e.clipIntersection;if(e.clipShadows!==void 0)this.clipShadows=e.clipShadows;if(e.depthPacking!==void 0)this.depthPacking=e.depthPacking;if(e.blendSrc!==void 0)this.blendSrc=e.blendSrc;if(e.blendDst!==void 0)this.blendDst=e.blendDst;if(e.blendEquation!==void 0)this.blendEquation=e.blendEquation;if(e.blendSrcAlpha!==void 0)this.blendSrcAlpha=e.blendSrcAlpha;if(e.blendDstAlpha!==void 0)this.blendDstAlpha=e.blendDstAlpha;if(e.blendEquationAlpha!==void 0)this.blendEquationAlpha=e.blendEquationAlpha;if(e.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(e.blendColor);if(e.blendAlpha!==void 0)this.blendAlpha=e.blendAlpha;if(e.stencilWriteMask!==void 0)this.stencilWriteMask=e.stencilWriteMask;if(e.stencilFunc!==void 0)this.stencilFunc=e.stencilFunc;if(e.stencilRef!==void 0)this.stencilRef=e.stencilRef;if(e.stencilFuncMask!==void 0)this.stencilFuncMask=e.stencilFuncMask;if(e.stencilFail!==void 0)this.stencilFail=e.stencilFail;if(e.stencilZFail!==void 0)this.stencilZFail=e.stencilZFail;if(e.stencilZPass!==void 0)this.stencilZPass=e.stencilZPass;if(e.stencilWrite!==void 0)this.stencilWrite=e.stencilWrite;if(e.wireframe!==void 0)this.wireframe=e.wireframe;if(e.wireframeLinewidth!==void 0)this.wireframeLinewidth=e.wireframeLinewidth;if(e.wireframeLinecap!==void 0)this.wireframeLinecap=e.wireframeLinecap;if(e.wireframeLinejoin!==void 0)this.wireframeLinejoin=e.wireframeLinejoin;if(e.rotation!==void 0)this.rotation=e.rotation;if(e.linewidth!==void 0)this.linewidth=e.linewidth;if(e.linecap!==void 0)this.linecap=e.linecap;if(e.linejoin!==void 0)this.linejoin=e.linejoin;if(e.dashSize!==void 0)this.dashSize=e.dashSize;if(e.gapSize!==void 0)this.gapSize=e.gapSize;if(e.scale!==void 0)this.scale=e.scale;if(e.polygonOffset!==void 0)this.polygonOffset=e.polygonOffset;if(e.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=e.polygonOffsetFactor;if(e.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=e.polygonOffsetUnits;if(e.dithering!==void 0)this.dithering=e.dithering;if(e.alphaToCoverage!==void 0)this.alphaToCoverage=e.alphaToCoverage;if(e.premultipliedAlpha!==void 0)this.premultipliedAlpha=e.premultipliedAlpha;if(e.forceSinglePass!==void 0)this.forceSinglePass=e.forceSinglePass;if(e.allowOverride!==void 0)this.allowOverride=e.allowOverride;if(e.visible!==void 0)this.visible=e.visible;if(e.toneMapped!==void 0)this.toneMapped=e.toneMapped;if(e.userData!==void 0)this.userData=e.userData;if(e.vertexColors!==void 0)if(typeof e.vertexColors==="number")this.vertexColors=e.vertexColors>0;else this.vertexColors=e.vertexColors;if(e.size!==void 0)this.size=e.size;if(e.sizeAttenuation!==void 0)this.sizeAttenuation=e.sizeAttenuation;if(e.map!==void 0)this.map=t[e.map]||null;if(e.matcap!==void 0)this.matcap=t[e.matcap]||null;if(e.alphaMap!==void 0)this.alphaMap=t[e.alphaMap]||null;if(e.bumpMap!==void 0)this.bumpMap=t[e.bumpMap]||null;if(e.bumpScale!==void 0)this.bumpScale=e.bumpScale;if(e.normalMap!==void 0)this.normalMap=t[e.normalMap]||null;if(e.normalMapType!==void 0)this.normalMapType=e.normalMapType;if(e.normalScale!==void 0){let n=e.normalScale;if(Array.isArray(n)===!1)n=[n,n];this.normalScale=new $e().fromArray(n)}if(e.displacementMap!==void 0)this.displacementMap=t[e.displacementMap]||null;if(e.displacementScale!==void 0)this.displacementScale=e.displacementScale;if(e.displacementBias!==void 0)this.displacementBias=e.displacementBias;if(e.roughnessMap!==void 0)this.roughnessMap=t[e.roughnessMap]||null;if(e.metalnessMap!==void 0)this.metalnessMap=t[e.metalnessMap]||null;if(e.emissiveMap!==void 0)this.emissiveMap=t[e.emissiveMap]||null;if(e.emissiveIntensity!==void 0)this.emissiveIntensity=e.emissiveIntensity;if(e.specularMap!==void 0)this.specularMap=t[e.specularMap]||null;if(e.specularIntensityMap!==void 0)this.specularIntensityMap=t[e.specularIntensityMap]||null;if(e.specularColorMap!==void 0)this.specularColorMap=t[e.specularColorMap]||null;if(e.envMap!==void 0)this.envMap=t[e.envMap]||null;if(e.envMapRotation!==void 0)this.envMapRotation.fromArray(e.envMapRotation);if(e.envMapIntensity!==void 0)this.envMapIntensity=e.envMapIntensity;if(e.reflectivity!==void 0)this.reflectivity=e.reflectivity;if(e.refractionRatio!==void 0)this.refractionRatio=e.refractionRatio;if(e.lightMap!==void 0)this.lightMap=t[e.lightMap]||null;if(e.lightMapIntensity!==void 0)this.lightMapIntensity=e.lightMapIntensity;if(e.aoMap!==void 0)this.aoMap=t[e.aoMap]||null;if(e.aoMapIntensity!==void 0)this.aoMapIntensity=e.aoMapIntensity;if(e.gradientMap!==void 0)this.gradientMap=t[e.gradientMap]||null;if(e.clearcoatMap!==void 0)this.clearcoatMap=t[e.clearcoatMap]||null;if(e.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null;if(e.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null;if(e.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new $e().fromArray(e.clearcoatNormalScale);if(e.iridescenceMap!==void 0)this.iridescenceMap=t[e.iridescenceMap]||null;if(e.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null;if(e.transmissionMap!==void 0)this.transmissionMap=t[e.transmissionMap]||null;if(e.thicknessMap!==void 0)this.thicknessMap=t[e.thicknessMap]||null;if(e.anisotropyMap!==void 0)this.anisotropyMap=t[e.anisotropyMap]||null;if(e.sheenColorMap!==void 0)this.sheenColorMap=t[e.sheenColorMap]||null;if(e.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){if(e===!0)this.version++}}var li=new B,Ra=new B,Hr=new B,Vr=new B;class mr{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);if(n<0)return t.copy(this.origin);return t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=li.subVectors(e,this.origin).dot(this.direction);if(t<0)return this.origin.distanceToSquared(e);return li.copy(this.origin).addScaledVector(this.direction,t),li.distanceToSquared(e)}distanceSqToSegment(e,t,n,i){Ra.copy(e).add(t).multiplyScalar(0.5),Hr.copy(t).sub(e).normalize(),Vr.copy(this.origin).sub(Ra);let s=e.distanceTo(t)*0.5,r=-this.direction.dot(Hr),o=Vr.dot(this.direction),a=-Vr.dot(Hr),l=Vr.lengthSq(),c=Math.abs(1-r*r),u,d,h,f;if(c>0)if(u=r*a-o,d=r*o-a,f=s*c,u>=0)if(d>=-f)if(d<=f){let x=1/c;u*=x,d*=x,h=u*(u+r*d+2*o)+d*(r*u+d+2*a)+l}else d=s,u=Math.max(0,-(r*d+o)),h=-u*u+d*(d+2*a)+l;else d=-s,u=Math.max(0,-(r*d+o)),h=-u*u+d*(d+2*a)+l;else if(d<=-f)u=Math.max(0,-(-r*s+o)),d=u>0?-s:Math.min(Math.max(-s,-a),s),h=-u*u+d*(d+2*a)+l;else if(d<=f)u=0,d=Math.min(Math.max(-s,-a),s),h=d*(d+2*a)+l;else u=Math.max(0,-(r*s+o)),d=u>0?s:Math.min(Math.max(-s,-a),s),h=-u*u+d*(d+2*a)+l;else d=r>0?-s:s,u=Math.max(0,-(r*d+o)),h=-u*u+d*(d+2*a)+l;if(n)n.copy(this.origin).addScaledVector(this.direction,u);if(i)i.copy(Ra).addScaledVector(Hr,d);return h}intersectSphere(e,t){if(e.radius<0)return null;li.subVectors(e.center,this.origin);let n=li.dot(this.direction),i=li.dot(li)-n*n,s=e.radius*e.radius;if(i>s)return null;let r=Math.sqrt(s-i),o=n-r,a=n+r;if(a<0)return null;if(o<0)return this.at(a,t);return this.at(o,t)}intersectsSphere(e){if(e.radius<0)return!1;return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0){if(e.distanceToPoint(this.origin)===0)return 0;return null}let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);if(n===null)return null;return this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);if(t===0)return!0;if(e.normal.dot(this.direction)*t<0)return!0;return!1}intersectBox(e,t){let n,i,s,r,o,a,l=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;if(l>=0)n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l;else n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l;if(c>=0)s=(e.min.y-d.y)*c,r=(e.max.y-d.y)*c;else s=(e.max.y-d.y)*c,r=(e.min.y-d.y)*c;if(n>r||s>i)return null;if(s>n||isNaN(n))n=s;if(r<i||isNaN(i))i=r;if(u>=0)o=(e.min.z-d.z)*u,a=(e.max.z-d.z)*u;else o=(e.max.z-d.z)*u,a=(e.min.z-d.z)*u;if(n>a||o>i)return null;if(o>n||n!==n)n=o;if(a<i||i!==i)i=a;if(i<0)return null;return this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,li)!==null}intersectTriangle(e,t,n,i,s){let r=this.origin,o=this.direction,{x:a,y:l,z:c}=o,u=e.x-r.x,d=e.y-r.y,h=e.z-r.z,f=t.x-r.x,x=t.y-r.y,v=t.z-r.z,m=n.x-r.x,p=n.y-r.y,A=n.z-r.z,R=Math.abs(a),b=Math.abs(l),w=Math.abs(c),T,P,g,_,D,I,F,X,L,G,Z,N;if(R>=b&&R>=w)if(g=a,I=u,L=f,N=m,a>=0)T=l,P=c,_=d,D=h,F=x,X=v,G=p,Z=A;else T=c,P=l,_=h,D=d,F=v,X=x,G=A,Z=p;else if(b>=w)if(g=l,I=d,L=x,N=p,l>=0)T=c,P=a,_=h,D=u,F=v,X=f,G=A,Z=m;else T=a,P=c,_=u,D=h,F=f,X=v,G=m,Z=A;else if(g=c,I=h,L=v,N=A,c>=0)T=a,P=l,_=u,D=d,F=f,X=x,G=m,Z=p;else T=l,P=a,_=d,D=u,F=x,X=f,G=p,Z=m;if(g===0)return null;let ie=T/g,O=P/g,z=1/g,H=_-ie*I,fe=D-O*I,pe=F-ie*L,We=X-O*L,Ie=G-ie*N,j=Z-O*N,xe=Ie*We-j*pe,re=H*j-fe*Ie,Se=pe*fe-We*H;if(i){if(xe<0||re<0||Se<0)return null}else if((xe<0||re<0||Se<0)&&(xe>0||re>0||Se>0))return null;let Ae=xe+re+Se;if(Ae===0)return null;let me=z*(xe*I+re*L+Se*N);if(Ae>0?me<0:me>0)return null;return this.at(me/Ae,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ri extends Ci{constructor(e){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}var Mh=new Bt,Fi=new mr,Wr=new Tn,wh=new B,Xr=new B,qr=new B,Yr=new B,Pa=new B,Zr=new B,Ah=new B,$r=new B;class ct extends cn{constructor(e=new zt,t=new Ri){super();this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){if(super.copy(e,t),e.morphTargetInfluences!==void 0)this.morphTargetInfluences=e.morphTargetInfluences.slice();if(e.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary);return this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){Zr.set(0,0,0);for(let a=0,l=s.length;a<l;a++){let c=o[a],u=s[a];if(c===0)continue;if(Pa.fromBufferAttribute(u,e),r)Zr.addScaledVector(Pa,c);else Zr.addScaledVector(Pa.sub(t),c)}t.add(Zr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0)return;if(n.boundingSphere===null)n.computeBoundingSphere();if(Wr.copy(n.boundingSphere),Wr.applyMatrix4(s),Fi.copy(e.ray).recast(e.near),Wr.containsPoint(Fi.origin)===!1){if(Fi.intersectSphere(Wr,wh)===null)return;if(Fi.origin.distanceToSquared(wh)>(e.far-e.near)**2)return}if(Mh.copy(s).invert(),Fi.copy(e.ray).applyMatrix4(Mh),n.boundingBox!==null){if(Fi.intersectsBox(n.boundingBox)===!1)return}this._computeIntersections(e,t,Fi)}_computeIntersections(e,t,n){let i,s=this.geometry,r=this.material,o=s.index,a=s.attributes.position,l=s.attributes.uv,c=s.attributes.uv1,u=s.attributes.normal,{groups:d,drawRange:h}=s;if(o!==null)if(Array.isArray(r))for(let f=0,x=d.length;f<x;f++){let v=d[f],m=r[v.materialIndex],p=Math.max(v.start,h.start),A=Math.min(o.count,Math.min(v.start+v.count,h.start+h.count));for(let R=p,b=A;R<b;R+=3){let w=o.getX(R),T=o.getX(R+1),P=o.getX(R+2);if(i=Jr(this,m,e,n,l,c,u,w,T,P),i)i.faceIndex=Math.floor(R/3),i.face.materialIndex=v.materialIndex,t.push(i)}}else{let f=Math.max(0,h.start),x=Math.min(o.count,h.start+h.count);for(let v=f,m=x;v<m;v+=3){let p=o.getX(v),A=o.getX(v+1),R=o.getX(v+2);if(i=Jr(this,r,e,n,l,c,u,p,A,R),i)i.faceIndex=Math.floor(v/3),t.push(i)}}else if(a!==void 0)if(Array.isArray(r))for(let f=0,x=d.length;f<x;f++){let v=d[f],m=r[v.materialIndex],p=Math.max(v.start,h.start),A=Math.min(a.count,Math.min(v.start+v.count,h.start+h.count));for(let R=p,b=A;R<b;R+=3){let w=R,T=R+1,P=R+2;if(i=Jr(this,m,e,n,l,c,u,w,T,P),i)i.faceIndex=Math.floor(R/3),i.face.materialIndex=v.materialIndex,t.push(i)}}else{let f=Math.max(0,h.start),x=Math.min(a.count,h.start+h.count);for(let v=f,m=x;v<m;v+=3){let p=v,A=v+1,R=v+2;if(i=Jr(this,r,e,n,l,c,u,p,A,R),i)i.faceIndex=Math.floor(v/3),t.push(i)}}}}function Em(e,t,n,i,s,r,o,a){let l;if(t.side===1)l=i.intersectTriangle(o,r,s,!0,a);else l=i.intersectTriangle(s,r,o,t.side===0,a);if(l===null)return null;$r.copy(a),$r.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo($r);if(c<n.near||c>n.far)return null;return{distance:c,point:$r.clone(),object:e}}function Jr(e,t,n,i,s,r,o,a,l,c){e.getVertexPosition(a,Xr),e.getVertexPosition(l,qr),e.getVertexPosition(c,Yr);let u=Em(e,t,n,i,Xr,qr,Yr,Ah);if(u){let d=new B;if(Dn.getBarycoord(Ah,Xr,qr,Yr,d),s)u.uv=Dn.getInterpolatedAttribute(s,a,l,c,d,new $e);if(r)u.uv1=Dn.getInterpolatedAttribute(r,a,l,c,d,new $e);if(o){if(u.normal=Dn.getInterpolatedAttribute(o,a,l,c,d,new B),u.normal.dot(i.direction)>0)u.normal.multiplyScalar(-1)}let h={a,b:l,c,normal:new B,materialIndex:0};Dn.getNormal(Xr,qr,Yr,h.normal),u.face=h,u.barycoord=d}return u}class gr extends sn{constructor(e=null,t=1,n=1,i,s,r,o,a,l=1003,c=1003,u,d){super(null,r,o,a,l,c,i,s,u,d);this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gt extends kt{constructor(e,t,n,i=1){super(e,t,n);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}var Ui=new Tn,Cm=new $e(0.5,0.5),Kr=new B;class Ao{constructor(e=new Jn,t=new Jn,n=new Jn,i=new Jn,s=new Jn,r=new Jn){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2000,n=!1){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],d=s[6],h=s[7],f=s[8],x=s[9],v=s[10],m=s[11],p=s[12],A=s[13],R=s[14],b=s[15];if(i[0].setComponents(l-r,h-c,m-f,b-p).normalize(),i[1].setComponents(l+r,h+c,m+f,b+p).normalize(),i[2].setComponents(l+o,h+u,m+x,b+A).normalize(),i[3].setComponents(l-o,h-u,m-x,b-A).normalize(),n)i[4].setComponents(a,d,v,R).normalize(),i[5].setComponents(l-a,h-d,m-v,b-R).normalize();else if(i[4].setComponents(l-a,h-d,m-v,b-R).normalize(),t===2000)i[5].setComponents(l+a,h+d,m+v,b+R).normalize();else if(t===2001)i[5].setComponents(a,d,v,R).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0){if(e.boundingSphere===null)e.computeBoundingSphere();Ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld)}else{let t=e.geometry;if(t.boundingSphere===null)t.computeBoundingSphere();Ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(e){Ui.center.set(0,0,0);let t=Cm.distanceTo(e.center);return Ui.radius=0.7071067811865476+t,Ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Kr.x=i.normal.x>0?e.max.x:e.min.x,Kr.y=i.normal.y>0?e.max.y:e.min.y,Kr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Kr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xr extends Ci{constructor(e){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new at(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}var ro=new B,oo=new B,Th=new Bt,js=new mr,Qr=new Tn,Ia=new B,Eh=new B;class Cl extends cn{constructor(e=new zt,t=new xr){super();this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)ro.fromBufferAttribute(t,i-1),oo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ro.distanceTo(oo);e.setAttribute("lineDistance",new vt(n,1))}else it("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null)n.computeBoundingSphere();if(Qr.copy(n.boundingSphere),Qr.applyMatrix4(i),Qr.radius+=s,e.ray.intersectsSphere(Qr)===!1)return;Th.copy(i).invert(),js.copy(e.ray).applyMatrix4(Th);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o,l=this.isLineSegments?2:1,c=n.index,d=n.attributes.position;if(c!==null){let h=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let x=h,v=f-1;x<v;x+=l){let m=c.getX(x),p=c.getX(x+1),A=jr(this,e,js,a,m,p,x);if(A)t.push(A)}if(this.isLineLoop){let x=c.getX(f-1),v=c.getX(h),m=jr(this,e,js,a,x,v,f-1);if(m)t.push(m)}}else{let h=Math.max(0,r.start),f=Math.min(d.count,r.start+r.count);for(let x=h,v=f-1;x<v;x+=l){let m=jr(this,e,js,a,x,x+1,x);if(m)t.push(m)}if(this.isLineLoop){let x=jr(this,e,js,a,f-1,h,f-1);if(x)t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function jr(e,t,n,i,s,r,o){let a=e.geometry.attributes.position;if(ro.fromBufferAttribute(a,s),oo.fromBufferAttribute(a,r),n.distanceSqToSegment(ro,oo,Ia,Eh)>i)return;Ia.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(Ia);if(c<t.near||c>t.far)return;return{distance:c,point:Eh.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var Ch=new B,Rh=new B;class To extends Cl{constructor(e,t){super(e,t);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Ch.fromBufferAttribute(t,i),Rh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ch.distanceTo(Rh);e.setAttribute("lineDistance",new vt(n,1))}else it("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Rl extends Ci{constructor(e){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new at(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}var Ph=new Bt,Da=new mr,eo=new Tn,to=new B;class Rs extends cn{constructor(e=new zt,t=new Rl){super();this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null)n.computeBoundingSphere();if(eo.copy(n.boundingSphere),eo.applyMatrix4(i),eo.radius+=s,e.ray.intersectsSphere(eo)===!1)return;Ph.copy(i).invert(),Da.copy(e.ray).applyMatrix4(Ph);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,r.start),h=Math.min(l.count,r.start+r.count);for(let f=d,x=h;f<x;f++){let v=l.getX(f);to.fromBufferAttribute(u,v),Ih(to,v,a,i,e,t,this)}}else{let d=Math.max(0,r.start),h=Math.min(u.count,r.start+r.count);for(let f=d,x=h;f<x;f++)to.fromBufferAttribute(u,f),Ih(to,f,a,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ih(e,t,n,i,s,r,o){let a=Da.distanceSqToPoint(e);if(a<n){let l=new B;Da.closestPointToPoint(e,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Eo extends sn{constructor(e=[],t=301,n,i,s,r,o,a,l,c){super(e,t,n,i,s,r,o,a,l,c);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Co extends sn{constructor(e,t,n,i,s,r,o,a,l){super(e,t,n,i,s,r,o,a,l);this.isCanvasTexture=!0,this.needsUpdate=!0}}class Xi extends sn{constructor(e,t,n=1014,i,s,r,o=1003,a=1003,l,c=1026,u=1){if(c!==1026&&c!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,i,s,r,o,a,c,n,l);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Pl extends Xi{constructor(e,t=1014,n=301,i,s,r=1003,o=1003,a,l=1026){let c={width:e,height:e,depth:1},u=[c,c,c,c,c,c];super(e,e,t,n,i,s,r,o,a,l);this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ro extends sn{constructor(e=null){super();this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ps extends zt{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};let o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);let a=[],l=[],c=[],u=[],d=0,h=0;f("z","y","x",-1,-1,n,t,e,r,s,0),f("z","y","x",1,-1,n,t,-e,r,s,1),f("x","z","y",1,1,e,n,t,i,r,2),f("x","z","y",1,-1,e,n,-t,i,r,3),f("x","y","z",1,-1,e,t,n,i,s,4),f("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(a),this.setAttribute("position",new vt(l,3)),this.setAttribute("normal",new vt(c,3)),this.setAttribute("uv",new vt(u,2));function f(x,v,m,p,A,R,b,w,T,P,g){let _=R/T,D=b/P,I=R/2,F=b/2,X=w/2,L=T+1,G=P+1,Z=0,N=0,ie=new B;for(let O=0;O<G;O++){let z=O*D-F;for(let H=0;H<L;H++){let fe=H*_-I;ie[x]=fe*p,ie[v]=z*A,ie[m]=X,l.push(ie.x,ie.y,ie.z),ie[x]=0,ie[v]=0,ie[m]=w>0?1:-1,c.push(ie.x,ie.y,ie.z),u.push(H/T),u.push(1-O/P),Z+=1}}for(let O=0;O<P;O++)for(let z=0;z<T;z++){let H=d+z+L*O,fe=d+z+L*(O+1),pe=d+(z+1)+L*(O+1),We=d+(z+1)+L*O;a.push(H,fe,We),a.push(fe,pe,We),N+=6}o.addGroup(h,N,g),h+=N,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ps(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class dn extends zt{constructor(e=1,t=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,r=t/2,o=Math.floor(n),a=Math.floor(i),l=o+1,c=a+1,u=e/o,d=t/a,h=[],f=[],x=[],v=[];for(let m=0;m<c;m++){let p=m*d-r;for(let A=0;A<l;A++){let R=A*u-s;f.push(R,-p,0),x.push(0,0,1),v.push(A/o),v.push(1-m/a)}}for(let m=0;m<a;m++)for(let p=0;p<o;p++){let A=p+l*m,R=p+l*(m+1),b=p+1+l*(m+1),w=p+1+l*m;h.push(A,R,w),h.push(R,b,w)}this.setIndex(h),this.setAttribute("position",new vt(f,3)),this.setAttribute("normal",new vt(x,3)),this.setAttribute("uv",new vt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dn(e.width,e.height,e.widthSegments,e.heightSegments)}}class di extends zt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,r=0,o=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let a=Math.min(r+o,Math.PI),l=0,c=[],u=new B,d=new B,h=[],f=[],x=[],v=[];for(let m=0;m<=n;m++){let p=[],A=m/n,R=r+A*o,b=e*Math.cos(R),w=Math.sqrt(e*e-b*b),T=0;if(m===0&&r===0)T=0.5/t;else if(m===n&&a===Math.PI)T=-0.5/t;for(let P=0;P<=t;P++){let g=P/t,_=i+g*s;u.x=-w*Math.cos(_),u.y=b,u.z=w*Math.sin(_),f.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),v.push(g+T,1-A),p.push(l++)}c.push(p)}for(let m=0;m<n;m++)for(let p=0;p<t;p++){let A=c[m][p+1],R=c[m][p],b=c[m+1][p],w=c[m+1][p+1];if(m!==0||r>0)h.push(A,R,w);if(m!==n-1||a<Math.PI)h.push(R,b,w)}this.setIndex(h),this.setAttribute("position",new vt(f,3)),this.setAttribute("normal",new vt(x,3)),this.setAttribute("uv",new vt(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new di(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function qi(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];if(Lh(s))if(s.isRenderTargetTexture)it("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null;else t[n][i]=s.clone();else if(Array.isArray(s))if(Lh(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[n][i]=r}else t[n][i]=s.slice();else t[n][i]=s}}return t}function fn(e){let t={};for(let n=0;n<e.length;n++){let i=qi(e[n]);for(let s in i)t[s]=i[s]}return t}function Lh(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Rm(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Il(e){let t=e.getRenderTarget();if(t===null)return e.outputColorSpace;if(t.isXRRenderTarget===!0)return t.texture.colorSpace;return pt.workingColorSpace}var fi={clone:qi,merge:fn},Pm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Im=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qe extends Ci{constructor(e){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pm,this.fragmentShader=Im,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0)this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qi(e.uniforms),this.uniformsGroups=Rm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;if(r&&r.isTexture)t.uniforms[i]={type:"t",value:r.toJSON(e).uuid};else if(r&&r.isColor)t.uniforms[i]={type:"c",value:r.getHex()};else if(r&&r.isVector2)t.uniforms[i]={type:"v2",value:r.toArray()};else if(r&&r.isVector3)t.uniforms[i]={type:"v3",value:r.toArray()};else if(r&&r.isVector4)t.uniforms[i]={type:"v4",value:r.toArray()};else if(r&&r.isMatrix3)t.uniforms[i]={type:"m3",value:r.toArray()};else if(r&&r.isMatrix4)t.uniforms[i]={type:"m4",value:r.toArray()};else t.uniforms[i]={value:r}}if(Object.keys(this.defines).length>0)t.defines=this.defines;t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)if(this.extensions[i]===!0)n[i]=!0;if(Object.keys(n).length>0)t.extensions=n;return t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new at().setHex(i.value);break;case"v2":this.uniforms[n].value=new $e().fromArray(i.value);break;case"v3":this.uniforms[n].value=new B().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Ft().fromArray(i.value);break;case"m3":this.uniforms[n].value=new ht().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Bt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0)this.defines=e.defines;if(e.vertexShader!==void 0)this.vertexShader=e.vertexShader;if(e.fragmentShader!==void 0)this.fragmentShader=e.fragmentShader;if(e.glslVersion!==void 0)this.glslVersion=e.glslVersion;if(e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];if(e.lights!==void 0)this.lights=e.lights;if(e.clipping!==void 0)this.clipping=e.clipping;return this}}class vr extends Qe{constructor(e){super(e);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ll extends Ci{constructor(e){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Dl extends Ci{constructor(e){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function gs(e,t){if(!e||e.constructor===t)return e;if(typeof t.BYTES_PER_ELEMENT==="number")return new t(e);return Array.prototype.slice.call(e)}function La(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}class Yi{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let r;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}r=t.length;break t}if(!(e>=s)){let o=t[1];if(e<o)n=2,s=o;for(let a=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(i=s,s=t[--n-1],e>=s)break e}r=n,n=0;break t}break n}while(n<r){let o=n+r>>>1;if(e<t[o])r=o;else n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)t[r]=n[s+r];return t}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class Nl extends Yi{constructor(e,t,n,i){super(e,t,n,i);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,r=e+1,o=i[s],a=i[r];if(o===void 0)switch(this.getSettings_().endingStart){case 2401:s=e,o=2*t-n;break;case 2402:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(a===void 0)switch(this.getSettings_().endingEnd){case 2401:r=e,a=2*n-t;break;case 2402:r=1,a=n+i[1]-i[0];break;default:r=e-1,a=t}let l=(n-t)*0.5,c=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(a-n),this._offsetPrev=s*c,this._offsetNext=r*c}interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=e*o,l=a-o,c=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,h=this._weightNext,f=(n-t)/(i-t),x=f*f,v=x*f,m=-d*v+2*d*x-d*f,p=(1+d)*v+(-1.5-2*d)*x+(-0.5+d)*f+1,A=(-1-h)*v+(1.5+h)*x+0.5*f,R=h*v-h*x;for(let b=0;b!==o;++b)s[b]=m*r[c+b]+p*r[l+b]+A*r[a+b]+R*r[u+b];return s}}class Fl extends Yi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=e*o,l=a-o,c=(n-t)/(i-t),u=1-c;for(let d=0;d!==o;++d)s[d]=r[l+d]*u+r[a+d]*c;return s}}class Ul extends Yi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ol extends Yi{interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=e*o,l=a-o,c=this.inTangents,u=this.outTangents;if(!c||!u){let f=(n-t)/(i-t),x=1-f;for(let v=0;v!==o;++v)s[v]=r[l+v]*x+r[a+v]*f;return s}let d=o*2,h=e-1;for(let f=0;f!==o;++f){let x=r[l+f],v=r[a+f],m=h*d+f*2,p=u[m],A=u[m+1],R=e*d+f*2,b=c[R],w=c[R+1],T=Dm(n,t,p,b,i);s[f]=Bu(T,x,A,w,v)}return s}}function Bu(e,t,n,i,s){let r=1-e;return r*r*r*t+3*r*r*e*n+3*r*e*e*i+e*e*e*s}function Lm(e,t,n,i,s){let r=1-e;return 3*r*r*(n-t)+6*r*e*(i-n)+3*e*e*(s-i)}function Dm(e,t,n,i,s){let r=(e-t)/(s-t);for(let o=0;o<8;o++){let a=Bu(r,t,n,i,s)-e;if(Math.abs(a)<0.0000000001)break;let l=Lm(r,t,n,i,s);if(Math.abs(l)<0.0000000001)break;r=Math.max(0,Math.min(1,r-a/l))}return r}class Un{constructor(e,t,n,i){if(e===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=gs(t,this.TimeBufferType),this.values=gs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:gs(e.times,Array),values:gs(e.values,Array)};let i=e.getInterpolation();if(i!==e.DefaultInterpolation)n.interpolation=i;if(La(e.settings))n.settings={inTangents:gs(e.settings.inTangents,Array),outTangents:gs(e.settings.outTangents,Array)}}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ul(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Fl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Nl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ol(this.times,this.values,this.getValueSize(),e);if(this.settings)t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents;return t}setInterpolation(e){let t;switch(e){case 2300:t=this.InterpolantFactoryMethodDiscrete;break;case 2301:t=this.InterpolantFactoryMethodLinear;break;case 2302:t=this.InterpolantFactoryMethodSmooth;break;case 2303:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(n);return it("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;if(La(this.settings))Dh(this.settings.inTangents,e),Dh(this.settings.outTangents,e)}return this}trim(e,t){let n=this.times,i=n.length,s=0,r=i-1;while(s!==i&&n[s]<e)++s;while(r!==-1&&n[r]>t)--r;if(++r,s!==0||r!==i){if(s>=r)r=Math.max(r,1),s=r-1;let o=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*o,r*o)}return this}validate(){let e=!0,t=this.getValueSize();if(t-Math.floor(t)!==0)rt("KeyframeTrack: Invalid value size in track.",this),e=!1;let n=this.times,i=this.values,s=n.length;if(s===0)rt("KeyframeTrack: Track is empty.",this),e=!1;let r=null;for(let o=0;o!==s;o++){let a=n[o];if(typeof a==="number"&&isNaN(a)){rt("KeyframeTrack: Time is not a valid number.",this,o,a),e=!1;break}if(r!==null&&r>a){rt("KeyframeTrack: Out of order keys.",this,o,a,r),e=!1;break}r=a}if(i!==void 0){if(cm(i))for(let o=0,a=i.length;o!==a;++o){let l=i[o];if(isNaN(l)){rt("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===2302,s=e.length-1,r=1;for(let o=1;o<s;++o){let a=!1,l=e[o],c=e[o+1];if(l!==c&&(o!==1||l!==e[0]))if(!i){let u=o*n,d=u-n,h=u+n;for(let f=0;f!==n;++f){let x=t[u+f];if(x!==t[d+f]||x!==t[h+f]){a=!0;break}}}else a=!0;if(a){if(o!==r){e[r]=e[o];let u=o*n,d=r*n;for(let h=0;h!==n;++h)t[d+h]=t[u+h]}++r}}if(s>0){e[r]=e[s];for(let o=s*n,a=r*n,l=0;l!==n;++l)t[a+l]=t[o+l];++r}if(r!==e.length)this.times=e.slice(0,r),this.values=t.slice(0,r*n);else this.times=e,this.values=t;return this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);if(i.createInterpolant=this.createInterpolant,La(this.settings))i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return i}}function Dh(e,t){for(let n=0,i=e.length;n!==i;n+=2)e[n]*=t}Un.prototype.ValueTypeName="";Un.prototype.TimeBufferType=Float32Array;Un.prototype.ValueBufferType=Float32Array;Un.prototype.DefaultInterpolation=2301;class Zi extends Un{constructor(e,t,n){super(e,t,n)}}Zi.prototype.ValueTypeName="bool";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=2300;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;class Bl extends Un{constructor(e,t,n,i){super(e,t,n,i)}}Bl.prototype.ValueTypeName="color";class zl extends Un{constructor(e,t,n,i){super(e,t,n,i)}}zl.prototype.ValueTypeName="number";class kl extends Yi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=(n-t)/(i-t),l=e*o;for(let c=l+o;l!==c;l+=4)Wn.slerpFlat(s,0,r,l-o,r,l,a);return s}}class Po extends Un{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new kl(this.times,this.values,this.getValueSize(),e)}}Po.prototype.ValueTypeName="quaternion";Po.prototype.InterpolantFactoryMethodSmooth=void 0;class $i extends Un{constructor(e,t,n){super(e,t,n)}}$i.prototype.ValueTypeName="string";$i.prototype.ValueBufferType=Array;$i.prototype.DefaultInterpolation=2300;$i.prototype.InterpolantFactoryMethodLinear=void 0;$i.prototype.InterpolantFactoryMethodSmooth=void 0;class Gl extends Un{constructor(e,t,n,i){super(e,t,n,i)}}Gl.prototype.ValueTypeName="vector";class Hl{constructor(e,t,n){let i=this,s=!1,r=0,o=0,a=void 0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(c){if(o++,s===!1){if(i.onStart!==void 0)i.onStart(c,r,o)}s=!0},this.itemEnd=function(c){if(r++,i.onProgress!==void 0)i.onProgress(c,r,o);if(r===o){if(s=!1,i.onLoad!==void 0)i.onLoad()}},this.itemError=function(c){if(i.onError!==void 0)i.onError(c)},this.resolveURL=function(c){if(c=c.normalize("NFC"),a)return a(c);return c},this.setURLModifier=function(c){return a=c,this},this.addHandler=function(c,u){return l.push(c,u),this},this.removeHandler=function(c){let u=l.indexOf(c);if(u!==-1)l.splice(u,2);return this},this.getHandler=function(c){for(let u=0,d=l.length;u<d;u+=2){let h=l[u],f=l[u+1];if(h.global)h.lastIndex=0;if(h.test(c))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var zu=new Hl;class Vl{constructor(e){if(this.manager=e!==void 0?e:zu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Vl.DEFAULT_MATERIAL_NAME="__DEFAULT";var no=new B,io=new Wn,$n=new B;class Io extends cn{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.matrixWorld.decompose(no,io,$n),$n.x===1&&$n.y===1&&$n.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(no,io,$n.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){if(super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(no,io,$n),$n.x===1&&$n.y===1&&$n.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(no,io,$n.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var wi=new B,Nh=new $e,Fh=new $e;class vn extends Io{constructor(e=50,t=1,n=0.1,i=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=0.5*this.getFilmHeight()/e;this.fov=so*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ha*0.5*this.fov);return 0.5*this.getFilmHeight()/e}getEffectiveFOV(){return so*2*Math.atan(Math.tan(ha*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){wi.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),t.set(wi.x,wi.y).multiplyScalar(-e/wi.z),wi.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),n.set(wi.x,wi.y).multiplyScalar(-e/wi.z)}getViewSize(e,t){return this.getViewBounds(e,Nh,Fh),t.subVectors(Fh,Nh)}setViewOffset(e,t,n,i,s,r){if(this.aspect=e/t,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ha*0.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-0.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:a,fullHeight:l}=r;s+=r.offsetX*i/a,t-=r.offsetY*n/l,i*=r.width/a,n*=r.height/l}let o=this.filmOffset;if(o!==0)s+=e*o/this.getFilmWidth();this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);if(t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null)t.object.view=Object.assign({},this.view);return t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Is extends Io{constructor(e=-1,t=1,n=1,i=-1,s=0.1,r=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,r){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,r=n+e,o=i+t,a=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,o-=c*this.view.offsetY,a=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,a,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);if(t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null)t.object.view=Object.assign({},this.view);return t}}class Zt extends zt{constructor(){super();this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}var xs=-90,vs=1;class Wl extends cn{constructor(e,t,n){super();this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new vn(xs,vs,e,t);i.layers=this.layers,this.add(i);let s=new vn(xs,vs,e,t);s.layers=this.layers,this.add(s);let r=new vn(xs,vs,e,t);r.layers=this.layers,this.add(r);let o=new vn(xs,vs,e,t);o.layers=this.layers,this.add(o);let a=new vn(xs,vs,e,t);a.layers=this.layers,this.add(a);let l=new vn(xs,vs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,r,o,a]=t;for(let l of t)this.remove(l);if(e===2000)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;if(this.coordinateSystem!==e.coordinateSystem)this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem();let[s,r,o,a,l,c]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let v=!1;if(e.isWebGLRenderer===!0)v=e.state.buffers.depth.getReversed();else v=e.reversedDepthBuffer;if(e.setRenderTarget(n,0,i),v&&e.autoClear===!1)e.clearDepth();if(e.render(t,s),e.setRenderTarget(n,1,i),v&&e.autoClear===!1)e.clearDepth();if(e.render(t,r),e.setRenderTarget(n,2,i),v&&e.autoClear===!1)e.clearDepth();if(e.render(t,o),e.setRenderTarget(n,3,i),v&&e.autoClear===!1)e.clearDepth();if(e.render(t,a),e.setRenderTarget(n,4,i),v&&e.autoClear===!1)e.clearDepth();if(e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),v&&e.autoClear===!1)e.clearDepth();e.render(t,c),e.setRenderTarget(u,d,h),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Xl extends vn{constructor(e=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Lo{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){if(this._document=e,e.hidden!==void 0)this._pageVisibilityHandler=Nm.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1)}disconnect(){if(this._pageVisibilityHandler!==null)this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null;this._document=null}getDelta(){return this._delta/1000}getElapsed(){return this._elapsed/1000}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){if(this._pageVisibilityHandler!==null&&this._document.hidden===!0)this._delta=0;else this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta;return this}}function Nm(){if(this._document.hidden===!1)this.reset()}var ql="\\[\\]\\.:\\/",Fm=new RegExp("["+ql+"]","g"),Yl="[^"+ql+"]",Um="[^"+ql.replace("\\.","")+"]",Om=/((?:WC+[\/:])*)/.source.replace("WC",Yl),Bm=/(WCOD+)?/.source.replace("WCOD",Um),zm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yl),km=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yl),Gm=new RegExp("^"+Om+Bm+zm+km+"$"),Hm=["material","materials","bones","map"];class ku{constructor(e,t,n){let i=n||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];if(i!==void 0)i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Tt{constructor(e,t,n){this.path=t,this.parsedPath=n||Tt.parseTrackName(t),this.node=Tt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){if(!(e&&e.isAnimationObjectGroup))return new Tt(e,t,n);else return new Tt.Composite(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Fm,"")}static parseTrackName(e){let t=Gm.exec(e);if(t===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);if(Hm.indexOf(s)!==-1)n.nodeName=n.nodeName.substring(0,i),n.objectName=s}if(n.propertyName===null||n.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let r=0;r<s.length;r++){let o=s[r];if(o.name===t||o.uuid===t)return o;let a=n(o.children);if(a)return a}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,{objectName:n,propertyName:i,propertyIndex:s}=t;if(!e)e=Tt.findNode(this.rootNode,t.nodeName),this.node=e;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){it("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){rt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){rt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===l){l=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){rt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){rt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){rt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let r=e[i];if(r===void 0){let l=t.nodeName;rt("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;if(this.targetObject=e,e.isMaterial===!0)o=this.Versioning.NeedsUpdate;else if(e.isObject3D===!0)o=this.Versioning.MatrixWorldNeedsUpdate;let a=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(e.morphTargetDictionary[s]!==void 0)s=e.morphTargetDictionary[s]}a=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else if(r.fromArray!==void 0&&r.toArray!==void 0)a=this.BindingType.HasFromToArray,this.resolvedProperty=r;else if(Array.isArray(r))a=this.BindingType.EntireArray,this.resolvedProperty=r;else this.propertyName=i;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Tt.Composite=ku;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var US=new Float32Array(1);class Pi extends El{constructor(e,t,n=1){super(e,t);this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class Zl{static{Zl.prototype.isMatrix2=!0}constructor(e,t,n,i){if(this.elements=[1,0,0,1],e!==void 0)this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}}function $l(e,t,n,i){let s=Vm(i);switch(n){case 1021:return e*t;case 1028:return e*t/s.components*s.byteLength;case 1029:return e*t/s.components*s.byteLength;case 1030:return e*t*2/s.components*s.byteLength;case 1031:return e*t*2/s.components*s.byteLength;case 1022:return e*t*3/s.components*s.byteLength;case 1023:return e*t*4/s.components*s.byteLength;case 1033:return e*t*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case 33778:case 33779:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case 35841:case 35843:return Math.max(e,16)*Math.max(t,8)/4;case 35840:case 35842:return Math.max(e,8)*Math.max(t,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case 37808:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case 37809:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case 37810:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case 37811:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case 37812:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case 37813:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case 37814:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case 37815:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case 37816:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case 37817:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case 37818:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case 37819:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case 37820:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case 37821:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(e/4)*Math.ceil(t/4)*16;case 36283:case 36284:return Math.ceil(e/4)*Math.ceil(t/4)*8;case 36285:case 36286:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Vm(e){switch(e){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));if(typeof window<"u")if(window.__THREE__)it("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="186";function ld(){let e=null,t=!1,n=null,i=null;function s(r,o){i=e.requestAnimationFrame(s),n(r,o)}return{start:function(){if(t===!0)return;if(n===null)return;if(e===null)return;i=e.requestAnimationFrame(s),t=!0},stop:function(){if(e!==null)e.cancelAnimationFrame(i);t=!1},setAnimationLoop:function(r){n=r},setContext:function(r){e=r}}}function Wm(e){let t=new WeakMap;function n(a,l){let{array:c,usage:u}=a,d=c.byteLength,h=e.createBuffer();e.bindBuffer(l,h),e.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=e.HALF_FLOAT;else if(c instanceof Uint16Array)if(a.isFloat16BufferAttribute)f=e.HALF_FLOAT;else f=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=e.SHORT;else if(c instanceof Uint32Array)f=e.UNSIGNED_INT;else if(c instanceof Int32Array)f=e.INT;else if(c instanceof Int8Array)f=e.BYTE;else if(c instanceof Uint8Array)f=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=e.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let{array:u,updateRanges:d}=l;if(e.bindBuffer(c,a),d.length===0)e.bufferSubData(c,0,u);else{d.sort((f,x)=>f.start-x.start);let h=0;for(let f=1;f<d.length;f++){let x=d[h],v=d[f];if(v.start<=x.start+x.count+1)x.count=Math.max(x.count,v.start+v.count-x.start);else++h,d[h]=v}d.length=h+1;for(let f=0,x=d.length;f<x;f++){let v=d[f];e.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){if(a.isInterleavedBufferAttribute)a=a.data;return t.get(a)}function r(a){if(a.isInterleavedBufferAttribute)a=a.data;let l=t.get(a);if(l)e.deleteBuffer(l.buffer),t.delete(a)}function o(a,l){if(a.isInterleavedBufferAttribute)a=a.data;if(a.isGLBufferAttribute){let u=t.get(a);if(!u||u.version<a.version)t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Xm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qm=`#ifdef USE_ALPHAHASH
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
#endif`,Ym=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$m=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Km=`#ifdef USE_AOMAP
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
#endif`,Qm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jm=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,e0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,t0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,n0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,i0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,s0=`#ifdef USE_IRIDESCENCE
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
#endif`,r0=`#ifdef USE_BUMPMAP
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
#endif`,o0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,a0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,l0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,c0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,h0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,u0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,d0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,f0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,p0=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,m0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,g0=`vec3 transformedNormal = objectNormal;
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
#endif`,x0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,v0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,y0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,b0="gl_FragColor = linearToOutputTexel( gl_FragColor );",S0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,M0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,w0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,A0=`#ifdef USE_ENVMAP
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
#endif`,T0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,E0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,C0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,R0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,P0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,I0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,L0=`#ifdef USE_GRADIENTMAP
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
}`,D0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,N0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,F0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,U0=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,O0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,B0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,z0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,k0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,G0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,H0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,V0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,W0=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,X0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,q0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Y0=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Z0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,J0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,K0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Q0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,j0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tg=`#if defined( USE_POINTS_UV )
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
#endif`,ng=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ig=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,og=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ag=`#ifdef USE_MORPHTARGETS
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
#endif`,lg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ug=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,pg=`#ifdef USE_NORMALMAP
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
#endif`,mg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_g=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,bg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ag=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Eg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Cg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,Rg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,Pg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,Ig=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lg=`#ifdef USE_SKINNING
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
#endif`,Dg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ng=`#ifdef USE_SKINNING
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
#endif`,Fg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ug=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Og=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zg=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kg=`#ifdef USE_TRANSMISSION
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
#endif`,Gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`;var Wg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Xg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qg=`uniform sampler2D t2D;
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
}`,Yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kg=`#include <common>
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
}`,Qg=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jg=`#define DISTANCE
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
}`,ex=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ix=`uniform float scale;
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
}`,sx=`uniform vec3 diffuse;
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
}`,rx=`#include <common>
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
}`,ox=`uniform vec3 diffuse;
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
}`,ax=`#define LAMBERT
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
}`,lx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,cx=`#define MATCAP
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
}`,hx=`#define MATCAP
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
}`,ux=`#define NORMAL
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
}`,dx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fx=`#define PHONG
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
}`,px=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,mx=`#define STANDARD
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
}`,gx=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,xx=`#define TOON
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
}`,vx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,_x=`uniform float size;
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
}`,yx=`uniform vec3 diffuse;
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
}`,bx=`#include <common>
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
}`,Sx=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,Mx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,wx=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:Xm,alphahash_pars_fragment:qm,alphamap_fragment:Ym,alphamap_pars_fragment:Zm,alphatest_fragment:$m,alphatest_pars_fragment:Jm,aomap_fragment:Km,aomap_pars_fragment:Qm,batching_pars_vertex:jm,batching_vertex:e0,begin_vertex:t0,beginnormal_vertex:n0,bsdfs:i0,iridescence_fragment:s0,bumpmap_pars_fragment:r0,clipping_planes_fragment:o0,clipping_planes_pars_fragment:a0,clipping_planes_pars_vertex:l0,clipping_planes_vertex:c0,color_fragment:h0,color_pars_fragment:u0,color_pars_vertex:d0,color_vertex:f0,common:p0,cube_uv_reflection_fragment:m0,defaultnormal_vertex:g0,displacementmap_pars_vertex:x0,displacementmap_vertex:v0,emissivemap_fragment:_0,emissivemap_pars_fragment:y0,colorspace_fragment:b0,colorspace_pars_fragment:S0,envmap_fragment:M0,envmap_common_pars_fragment:w0,envmap_pars_fragment:A0,envmap_pars_vertex:T0,envmap_physical_pars_fragment:O0,envmap_vertex:E0,fog_vertex:C0,fog_pars_vertex:R0,fog_fragment:P0,fog_pars_fragment:I0,gradientmap_pars_fragment:L0,lightmap_pars_fragment:D0,lights_lambert_fragment:N0,lights_lambert_pars_fragment:F0,lights_pars_begin:U0,lights_toon_fragment:B0,lights_toon_pars_fragment:z0,lights_phong_fragment:k0,lights_phong_pars_fragment:G0,lights_physical_fragment:H0,lights_physical_pars_fragment:V0,lights_fragment_begin:W0,lights_fragment_maps:X0,lights_fragment_end:q0,lightprobes_pars_fragment:Y0,logdepthbuf_fragment:Z0,logdepthbuf_pars_fragment:$0,logdepthbuf_pars_vertex:J0,logdepthbuf_vertex:K0,map_fragment:Q0,map_pars_fragment:j0,map_particle_fragment:eg,map_particle_pars_fragment:tg,metalnessmap_fragment:ng,metalnessmap_pars_fragment:ig,morphinstance_vertex:sg,morphcolor_vertex:rg,morphnormal_vertex:og,morphtarget_pars_vertex:ag,morphtarget_vertex:lg,normal_fragment_begin:cg,normal_fragment_maps:hg,normal_pars_fragment:ug,normal_pars_vertex:dg,normal_vertex:fg,normalmap_pars_fragment:pg,clearcoat_normal_fragment_begin:mg,clearcoat_normal_fragment_maps:gg,clearcoat_pars_fragment:xg,iridescence_pars_fragment:vg,opaque_fragment:_g,packing:yg,premultiplied_alpha_fragment:bg,project_vertex:Sg,dithering_fragment:Mg,dithering_pars_fragment:wg,roughnessmap_fragment:Ag,roughnessmap_pars_fragment:Tg,shadowmap_pars_fragment:Eg,shadowmap_pars_vertex:Cg,shadowmap_vertex:Rg,shadowmask_pars_fragment:Pg,skinbase_vertex:Ig,skinning_pars_vertex:Lg,skinning_vertex:Dg,skinnormal_vertex:Ng,specularmap_fragment:Fg,specularmap_pars_fragment:Ug,tonemapping_fragment:Og,tonemapping_pars_fragment:Bg,transmission_fragment:zg,transmission_pars_fragment:kg,uv_pars_fragment:Gg,uv_pars_vertex:Hg,uv_vertex:Vg,worldpos_vertex:Wg,background_vert:Xg,background_frag:qg,backgroundCube_vert:Yg,backgroundCube_frag:Zg,cube_vert:$g,cube_frag:Jg,depth_vert:Kg,depth_frag:Qg,distance_vert:jg,distance_frag:ex,equirect_vert:tx,equirect_frag:nx,linedashed_vert:ix,linedashed_frag:sx,meshbasic_vert:rx,meshbasic_frag:ox,meshlambert_vert:ax,meshlambert_frag:lx,meshmatcap_vert:cx,meshmatcap_frag:hx,meshnormal_vert:ux,meshnormal_frag:dx,meshphong_vert:fx,meshphong_frag:px,meshphysical_vert:mx,meshphysical_frag:gx,meshtoon_vert:xx,meshtoon_frag:vx,points_vert:_x,points_frag:yx,shadow_vert:bx,shadow_frag:Sx,sprite_vert:Mx,sprite_frag:wx},Oe={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new $e(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},ei={basic:{uniforms:fn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:fn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new at(0)},envMapIntensity:{value:1}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:fn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:fn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:fn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new at(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:fn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:fn([Oe.points,Oe.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:fn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:fn([Oe.common,Oe.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:fn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:fn([Oe.sprite,Oe.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:fn([Oe.common,Oe.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:fn([Oe.lights,Oe.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};ei.physical={uniforms:fn([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};var Do={r:0,b:0,g:0},Ax=new Bt,cd=new ht;cd.set(-1,0,0,0,1,0,0,0,1);function Tx(e,t,n,i,s,r){let o=new at(0),a=s===!0?0:1,l,c,u=null,d=0,h=null;function f(A){let R=A.isScene===!0?A.background:null;if(R&&R.isTexture){let b=A.backgroundBlurriness>0;R=t.get(R,b)}return R}function x(A){let R=!1,b=f(A);if(b===null)m(o,a);else if(b&&b.isColor)m(b,1),R=!0;let w=e.xr.getEnvironmentBlendMode();if(w==="additive")n.buffers.color.setClear(0,0,0,1,r);else if(w==="alpha-blend")n.buffers.color.setClear(0,0,0,0,r);if(e.autoClear||R)n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil)}function v(A,R){let b=f(R);if(b&&(b.isCubeTexture||b.mapping===hr)){if(c===void 0)c=new ct(new Ps(1,1,1),new Qe({name:"BackgroundCubeMaterial",uniforms:qi(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c);if(c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ax.makeRotationFromEuler(R.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1)c.material.uniforms.backgroundRotation.value.premultiply(cd);if(c.material.toneMapped=pt.getTransfer(b.colorSpace)!==Ct,u!==b||d!==b.version||h!==e.toneMapping)c.material.needsUpdate=!0,u=b,d=b.version,h=e.toneMapping;c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null)}else if(b&&b.isTexture){if(l===void 0)l=new ct(new dn(2,2),new Qe({name:"BackgroundMaterial",uniforms:qi(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:Ms,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l);if(l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=pt.getTransfer(b.colorSpace)!==Ct,b.matrixAutoUpdate===!0)b.updateMatrix();if(l.material.uniforms.uvTransform.value.copy(b.matrix),u!==b||d!==b.version||h!==e.toneMapping)l.material.needsUpdate=!0,u=b,d=b.version,h=e.toneMapping;l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null)}}function m(A,R){A.getRGB(Do,Il(e)),n.buffers.color.setClear(Do.r,Do.g,Do.b,R,r)}function p(){if(c!==void 0)c.geometry.dispose(),c.material.dispose(),c=void 0;if(l!==void 0)l.geometry.dispose(),l.material.dispose(),l=void 0}return{getClearColor:function(){return o},setClearColor:function(A,R=1){o.set(A),a=R,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(A){a=A,m(o,a)},render:x,addToRenderList:v,dispose:p}}function Ex(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,o=!1;function a(I,F,X,L,G){let Z=!1,N=d(I,L,X,F);if(r!==N)r=N,c(r.object);if(Z=f(I,L,X,G),Z)x(I,L,X,G);if(G!==null)t.update(G,e.ELEMENT_ARRAY_BUFFER);if(Z||o){if(o=!1,b(I,F,X,L),G!==null)e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(G).buffer)}}function l(){return e.createVertexArray()}function c(I){return e.bindVertexArray(I)}function u(I){return e.deleteVertexArray(I)}function d(I,F,X,L){let G=L.wireframe===!0,Z=i[F.id];if(Z===void 0)Z={},i[F.id]=Z;let N=I.isInstancedMesh===!0?I.id:0,ie=Z[N];if(ie===void 0)ie={},Z[N]=ie;let O=ie[X.id];if(O===void 0)O={},ie[X.id]=O;let z=O[G];if(z===void 0)z=h(l()),O[G]=z;return z}function h(I){let F=[],X=[],L=[];for(let G=0;G<n;G++)F[G]=0,X[G]=0,L[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:X,attributeDivisors:L,object:I,attributes:{},index:null}}function f(I,F,X,L){let G=r.attributes,Z=F.attributes,N=0,ie=X.getAttributes();for(let O in ie)if(ie[O].location>=0){let H=G[O],fe=Z[O];if(fe===void 0){if(O==="instanceMatrix"&&I.instanceMatrix)fe=I.instanceMatrix;if(O==="instanceColor"&&I.instanceColor)fe=I.instanceColor}if(H===void 0)return!0;if(H.attribute!==fe)return!0;if(fe&&H.data!==fe.data)return!0;N++}if(r.attributesNum!==N)return!0;if(r.index!==L)return!0;return!1}function x(I,F,X,L){let G={},Z=F.attributes,N=0,ie=X.getAttributes();for(let O in ie)if(ie[O].location>=0){let H=Z[O];if(H===void 0){if(O==="instanceMatrix"&&I.instanceMatrix)H=I.instanceMatrix;if(O==="instanceColor"&&I.instanceColor)H=I.instanceColor}let fe={};if(fe.attribute=H,H&&H.data)fe.data=H.data;G[O]=fe,N++}r.attributes=G,r.attributesNum=N,r.index=L}function v(){let I=r.newAttributes;for(let F=0,X=I.length;F<X;F++)I[F]=0}function m(I){p(I,0)}function p(I,F){let X=r.newAttributes,L=r.enabledAttributes,G=r.attributeDivisors;if(X[I]=1,L[I]===0)e.enableVertexAttribArray(I),L[I]=1;if(G[I]!==F)e.vertexAttribDivisor(I,F),G[I]=F}function A(){let I=r.newAttributes,F=r.enabledAttributes;for(let X=0,L=F.length;X<L;X++)if(F[X]!==I[X])e.disableVertexAttribArray(X),F[X]=0}function R(I,F,X,L,G,Z,N){if(N===!0)e.vertexAttribIPointer(I,F,X,G,Z);else e.vertexAttribPointer(I,F,X,L,G,Z)}function b(I,F,X,L){v();let G=L.attributes,Z=X.getAttributes(),N=F.defaultAttributeValues;for(let ie in Z){let O=Z[ie];if(O.location>=0){let z=G[ie];if(z===void 0){if(ie==="instanceMatrix"&&I.instanceMatrix)z=I.instanceMatrix;if(ie==="instanceColor"&&I.instanceColor)z=I.instanceColor}if(z!==void 0){let H=z.normalized,fe=z.itemSize,pe=t.get(z);if(pe===void 0)continue;let{buffer:We,type:Ie,bytesPerElement:j}=pe,xe=Ie===e.INT||Ie===e.UNSIGNED_INT||z.gpuType===Ba;if(z.isInterleavedBufferAttribute){let re=z.data,Se=re.stride,Ae=z.offset;if(re.isInstancedInterleavedBuffer){for(let me=0;me<O.locationSize;me++)p(O.location+me,re.meshPerAttribute);if(I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0)L._maxInstanceCount=re.meshPerAttribute*re.count}else for(let me=0;me<O.locationSize;me++)m(O.location+me);e.bindBuffer(e.ARRAY_BUFFER,We);for(let me=0;me<O.locationSize;me++)R(O.location+me,fe/O.locationSize,Ie,H,Se*j,(Ae+fe/O.locationSize*me)*j,xe)}else{if(z.isInstancedBufferAttribute){for(let re=0;re<O.locationSize;re++)p(O.location+re,z.meshPerAttribute);if(I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0)L._maxInstanceCount=z.meshPerAttribute*z.count}else for(let re=0;re<O.locationSize;re++)m(O.location+re);e.bindBuffer(e.ARRAY_BUFFER,We);for(let re=0;re<O.locationSize;re++)R(O.location+re,fe/O.locationSize,Ie,H,fe*j,fe/O.locationSize*re*j,xe)}}else if(N!==void 0){let H=N[ie];if(H!==void 0)switch(H.length){case 2:e.vertexAttrib2fv(O.location,H);break;case 3:e.vertexAttrib3fv(O.location,H);break;case 4:e.vertexAttrib4fv(O.location,H);break;default:e.vertexAttrib1fv(O.location,H)}}}}A()}function w(){_();for(let I in i){let F=i[I];for(let X in F){let L=F[X];for(let G in L){let Z=L[G];for(let N in Z)u(Z[N].object),delete Z[N];delete L[G]}}delete i[I]}}function T(I){if(i[I.id]===void 0)return;let F=i[I.id];for(let X in F){let L=F[X];for(let G in L){let Z=L[G];for(let N in Z)u(Z[N].object),delete Z[N];delete L[G]}}delete i[I.id]}function P(I){for(let F in i){let X=i[F];for(let L in X){let G=X[L];if(G[I.id]===void 0)continue;let Z=G[I.id];for(let N in Z)u(Z[N].object),delete Z[N];delete G[I.id]}}}function g(I){for(let F in i){let X=i[F],L=I.isInstancedMesh===!0?I.id:0,G=X[L];if(G===void 0)continue;for(let Z in G){let N=G[Z];for(let ie in N)u(N[ie].object),delete N[ie];delete G[Z]}if(delete X[L],Object.keys(X).length===0)delete i[F]}}function _(){if(D(),o=!0,r===s)return;r=s,c(r.object)}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:_,resetDefaultState:D,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:g,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:m,disableUnusedAttributes:A}}function Cx(e,t,n){let i;function s(l){i=l}function r(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,u){if(u===0)return;e.drawArraysInstanced(i,l,c,u),n.update(c,i,u)}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];n.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Rx(e,t,n,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){if(P!==Fn&&i.convert(P)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function a(P){let g=P===en&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));if(P!==An&&P!==hi&&!g&&i.convert(P)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function l(P){if(P==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";P="mediump"}if(P==="mediump"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let c=n.precision!==void 0?n.precision:"highp",u=l(c);if(u!==c)it("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u;let d=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");if(n.reversedDepthBuffer===!0&&h===!1)it("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),p=e.getParameter(e.MAX_VERTEX_ATTRIBS),A=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),R=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),w=e.getParameter(e.MAX_SAMPLES),T=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:x,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:A,maxVaryings:R,maxFragmentUniforms:b,maxSamples:w,samples:T}}function Px(e){let t=this,n=null,i=0,s=!1,r=!1,o=new Jn,a=new ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){n=u(d,h,0)},this.setState=function(d,h,f){let{clippingPlanes:x,clipIntersection:v,clipShadows:m}=d,p=e.get(d);if(!s||x===null||x.length===0||r&&!m)if(r)u(null);else c();else{let A=r?0:i,R=A*4,b=p.clippingState||null;l.value=b,b=u(x,h,R,f);for(let w=0;w!==R;++w)b[w]=n[w];p.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function c(){if(l.value!==n)l.value=n,l.needsUpdate=i>0;t.numPlanes=i,t.numIntersection=0}function u(d,h,f,x){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=l.value,x!==!0||m===null){let p=f+v*4,A=h.matrixWorldInverse;if(a.getNormalMatrix(A),m===null||m.length<p)m=new Float32Array(p);for(let R=0,b=f;R!==v;++R,b+=4)o.copy(d[R]).applyMatrix4(A,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}var Ds=4,Ix=6,Lx=20,Dx=256,_r=new Is,Gu=new at,Jl=null,Kl=0,Ql=0,jl=!1,Nx=new B,Ji=new B;class nc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=0.1,i=100,s={}){let{size:r=256,position:o=Nx}=s;Jl=this._renderer.getRenderTarget(),Kl=this._renderer.getActiveCubeFace(),Ql=this._renderer.getActiveMipmapLevel(),jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let a=this._allocateTargets();if(a.depthBuffer=!0,this._sceneToCubeUV(e,n,i,a,o),t>0)this._blur(a,0,0,t);return this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=Wu(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=Vu(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Jl,Kl,Ql),this._renderer.xr.enabled=jl,e.scissorTest=!1,Ls(e,0,0,e.width,e.height)}_fromTexture(e,t){if(e.mapping===As||e.mapping===Bi)this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width);else this._setSize(e.image.width/4);Jl=this._renderer.getRenderTarget(),Kl=this._renderer.getActiveCubeFace(),Ql=this._renderer.getActiveMipmapLevel(),jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:en,format:Fn,colorSpace:Cs,depthBuffer:!1},i=Hu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=Hu(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Fx(s)),this._blurMaterial=Ox(s,e,t),this._ggxMaterial=Ux(s,e,t)}return i}_compileMaterial(e){let t=new ct(new zt,e);this._renderer.compile(t,_r)}_sceneToCubeUV(e,t,n,i,s){let a=new vn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,{autoClear:d,toneMapping:h}=u;if(u.getClearColor(Gu),u.toneMapping=wn,u.autoClear=!1,u.state.buffers.depth.getReversed())u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new ct(new Ps,new Ri({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}));let x=this._backgroundBox,v=x.material,m=!1,p=e.background;if(p){if(p.isColor)v.color.copy(p),e.background=null,m=!0}else v.color.copy(Gu),m=!0;for(let A=0;A<6;A++){let R=A%3;if(R===0)a.up.set(0,l[A],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x+c[A],s.y,s.z);else if(R===1)a.up.set(0,0,l[A]),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y+c[A],s.z);else a.up.set(0,l[A],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y,s.z+c[A]);let b=this._cubeSize;if(Ls(i,R*b,A>2?b:0,b,b),u.setRenderTarget(i),m)u.render(x,a);u.render(e,a)}u.toneMapping=h,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===As||e.mapping===Bi;if(i){if(this._cubemapMaterial===null)this._cubemapMaterial=Wu();this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=Vu();let s=i?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;let o=s.uniforms;o.envMap.value=e;let a=this._cubeSize;Ls(t,0,0,3*a,2*a),n.setRenderTarget(t),n.render(r,_r)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[n];o.material=r;let a=r.uniforms,l=n/(this._lodMeshes.length-1),c=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-c*c),d=l*1.25,h=u*d,{_lodMax:f}=this,x=this._sizeLods[n],v=3*x*(n>f-Ds?n-f+Ds:0),m=4*(this._cubeSize-x);a.envMap.value=e.texture,a.roughness.value=h,a.mipInt.value=f-t,Ls(s,v,m,3*x,2*x),i.setRenderTarget(s),i.render(o,_r),a.envMap.value=s.texture,a.roughness.value=0,a.mipInt.value=f-n,Ls(e,v,m,3*x,2*x),i.setRenderTarget(e),i.render(o,_r)}_blur(e,t,n,i){let s=this._pingPongRenderTarget,r=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,r),this._blurPass(s,e,n,n,r)}_blurPass(e,t,n,i,s){let r=this._renderer,o=this._blurMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-n;let c=this._sizeLods[i],u=3*c*(i>this._lodMax-Ds?i-this._lodMax+Ds:0),d=4*(this._cubeSize-c);Ls(t,u,d,3*c,2*c),r.setRenderTarget(t),r.render(a,_r)}}function Fx(e){let t=[],n=[],i=e,s=e-Ds+1+Ix;for(let r=0;r<s;r++){let o=Math.pow(2,i);t.push(o);let a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,f=3,x=new Float32Array(f*h*d),v=new Float32Array(f*h*d);for(let p=0;p<d;p++){let A=p%3*2/3-1,R=p>2?0:-1,b=[A,R,0,A+0.6666666666666666,R,0,A+0.6666666666666666,R+1,0,A,R,0,A+0.6666666666666666,R+1,0,A,R+1,0];x.set(b,f*h*p);for(let w=0;w<h;w++){let T=u[w*2]*2-1,P=u[w*2+1]*2-1;if(p===0)Ji.set(1,P,T);else if(p===1)Ji.set(-T,1,-P);else if(p===2)Ji.set(-T,P,1);else if(p===3)Ji.set(-1,P,-T);else if(p===4)Ji.set(-T,-1,P);else Ji.set(T,P,-1);Ji.toArray(v,(p*h+w)*f)}}let m=new zt;if(m.setAttribute("position",new kt(x,f)),m.setAttribute("outputDirection",new kt(v,f)),n.push(new ct(m,null)),i>Ds)i--}return{lodMeshes:n,sizeLods:t}}function Hu(e,t,n){let i=new Vt(e,t,n);return i.texture.mapping=hr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ls(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function Ux(e,t,n){return new Qe({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Dx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Fo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Ox(e,t,n){return new Qe({name:"SphericalGaussianBlur",defines:{SAMPLES:Lx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Fo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Vu(){return new Qe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fo(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Wu(){return new Qe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Fo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class rc extends Vt{constructor(e=1,t={}){super(e,e,t);this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Eo(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ps(5,5,5),s=new Qe({name:"CubemapFromEquirect",uniforms:qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:hn,blending:Nn});s.uniforms.tEquirect.value=t;let r=new ct(i,s),o=t.minFilter;if(t.minFilter===zi)t.minFilter=rn;return new Wl(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(s)}}function Bx(e){let t=new WeakMap,n=new WeakMap,i=null;function s(h,f=!1){if(h===null||h===void 0)return null;if(f)return o(h);return r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===ao||f===lo)if(t.has(h)){let x=t.get(h).texture;return a(x,h.mapping)}else{let x=h.image;if(x&&x.height>0){let v=new rc(x.height);return v.fromEquirectangularTexture(e,h),t.set(h,v),h.addEventListener("dispose",c),a(v.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let f=h.mapping,x=f===ao||f===lo,v=f===As||f===Bi;if(x||v){let m=n.get(h),p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p){if(i===null)i=new nc(e);return m=x?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,n.set(h,m),m.texture}else if(m!==void 0)return m.texture;else{let A=h.image;if(x&&A&&A.height>0||v&&A&&l(A)){if(i===null)i=new nc(e);return m=x?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,n.set(h,m),h.addEventListener("dispose",u),m.texture}else return null}}}return h}function a(h,f){if(f===ao)h.mapping=As;else if(f===lo)h.mapping=Bi;return h}function l(h){let f=0,x=6;for(let v=0;v<x;v++)if(h[v]!==void 0)f++;return f===x}function c(h){let f=h.target;f.removeEventListener("dispose",c);let x=t.get(f);if(x!==void 0)t.delete(f),x.dispose()}function u(h){let f=h.target;f.removeEventListener("dispose",u);let x=n.get(f);if(x!==void 0)n.delete(f),x.dispose()}function d(){if(t=new WeakMap,n=new WeakMap,i!==null)i.dispose(),i=null}return{get:s,dispose:d}}function zx(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s=e.getExtension(i);return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);if(s===null)Oi("WebGLRenderer: "+i+" extension not supported.");return s}}}function kx(e,t,n,i){let s={},r=new WeakMap;function o(d){let h=d.target;if(h.index!==null)t.remove(h.index);for(let x in h.attributes)t.remove(h.attributes[x]);h.removeEventListener("dispose",o),delete s[h.id];let f=r.get(h);if(f)t.remove(f),r.delete(h);if(i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0)delete h._maxInstanceCount;n.memory.geometries--}function a(d,h){if(s[h.id]===!0)return h;return h.addEventListener("dispose",o),s[h.id]=!0,n.memory.geometries++,h}function l(d){let h=d.attributes;for(let f in h)t.update(h[f],e.ARRAY_BUFFER)}function c(d){let h=[],f=d.index,x=d.attributes.position,v=0;if(x===void 0)return;if(f!==null){let A=f.array;v=f.version;for(let R=0,b=A.length;R<b;R+=3){let w=A[R+0],T=A[R+1],P=A[R+2];h.push(w,T,T,P,P,w)}}else{let A=x.array;v=x.version;for(let R=0,b=A.length/3-1;R<b;R+=3){let w=R+0,T=R+1,P=R+2;h.push(w,T,T,P,P,w)}}let m=new(x.count>=65535?wo:Mo)(h,1);m.version=v;let p=r.get(d);if(p)t.remove(p);r.set(d,m)}function u(d){let h=r.get(d);if(h){let f=d.index;if(f!==null){if(h.version<f.version)c(d)}}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function Gx(e,t,n){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,h){e.drawElements(i,h,r,d*o),n.update(h,i,1)}function c(d,h,f){if(f===0)return;e.drawElementsInstanced(i,h,r,d*o,f),n.update(h,i,f)}function u(d,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,f);let v=0;for(let m=0;m<f;m++)v+=h[m];n.update(v,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Hx(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case e.TRIANGLES:n.triangles+=a*(r/3);break;case e.LINES:n.lines+=a*(r/2);break;case e.LINE_STRIP:n.lines+=a*(r-1);break;case e.LINE_LOOP:n.lines+=a*r;break;case e.POINTS:n.points+=a*r;break;default:rt("WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function Vx(e,t,n){let i=new WeakMap,s=new Ft;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(a);if(h===void 0||h.count!==d){let _=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",_)};if(h!==void 0)h.texture.dispose();let f=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],A=a.morphAttributes.color||[],R=0;if(f===!0)R=1;if(x===!0)R=2;if(v===!0)R=3;let b=a.attributes.position.count*R,w=1;if(b>t.maxTextureSize)w=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize;let T=new Float32Array(b*w*4*d),P=new yo(T,b,w,d);P.type=hi,P.needsUpdate=!0;let g=R*4;for(let D=0;D<d;D++){let I=m[D],F=p[D],X=A[D],L=b*w*4*D;for(let G=0;G<I.count;G++){let Z=G*g;if(f===!0)s.fromBufferAttribute(I,G),T[L+Z+0]=s.x,T[L+Z+1]=s.y,T[L+Z+2]=s.z,T[L+Z+3]=0;if(x===!0)s.fromBufferAttribute(F,G),T[L+Z+4]=s.x,T[L+Z+5]=s.y,T[L+Z+6]=s.z,T[L+Z+7]=0;if(v===!0)s.fromBufferAttribute(X,G),T[L+Z+8]=s.x,T[L+Z+9]=s.y,T[L+Z+10]=s.z,T[L+Z+11]=X.itemSize===4?s.w:1}}h={count:d,texture:P,size:new $e(b,w)},i.set(a,h),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",o.morphTexture,n);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let x=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(e,"morphTargetBaseInfluence",x),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",h.size)}return{update:r}}function Wx(e,t,n,i,s){let r=new WeakMap;function o(c){let u=s.render.frame,d=c.geometry,h=t.get(c,d);if(r.get(h)!==u)t.update(h),r.set(h,u);if(c.isInstancedMesh){if(c.hasEventListener("dispose",l)===!1)c.addEventListener("dispose",l);if(r.get(c)!==u){if(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null)n.update(c.instanceColor,e.ARRAY_BUFFER);r.set(c,u)}}if(c.isSkinnedMesh){let f=c.skeleton;if(r.get(f)!==u)f.update(),r.set(f,u)}return h}function a(){r=new WeakMap}function l(c){let u=c.target;if(u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null)n.remove(u.instanceColor)}return{update:o,dispose:a}}var Xx={[ir]:"LINEAR_TONE_MAPPING",[sr]:"REINHARD_TONE_MAPPING",[rr]:"CINEON_TONE_MAPPING",[or]:"ACES_FILMIC_TONE_MAPPING",[lr]:"AGX_TONE_MAPPING",[cr]:"NEUTRAL_TONE_MAPPING",[ar]:"CUSTOM_TONE_MAPPING"};function qx(e,t,n,i,s,r){let o=new Vt(t,n,{type:e,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new zt;c.setAttribute("position",new vt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new vt([0,2,0,0,2,0],2));let u=new vr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new ct(c,u),h=new Is(-1,1,1,-1,0,1),f=null,x=null,v=!1,m,p=null,A=[],R=!1;this.setSize=function(b,w){if(o.setSize(b,w),a!==null)a.setSize(b,w);if(l!==null)l.setSize(b,w);for(let T=0;T<A.length;T++){let P=A[T];if(P.setSize)P.setSize(b,w)}},this.setEffects=function(b){A=b,R=A.length>0&&A[0].isRenderPass===!0;let{width:w,height:T}=o;if(A.length>0&&a===null)a=new Vt(w,T,{type:en,depthBuffer:!1,stencilBuffer:!1}),l=new Vt(w,T,{type:en,depthBuffer:!1,stencilBuffer:!1});for(let P=0;P<A.length;P++){let g=A[P];if(g.setSize)g.setSize(w,T)}},this.begin=function(b,w){if(v)return!1;if(b.toneMapping===wn&&A.length===0)return!1;if(p=w,w!==null){let{width:T,height:P}=w;if(o.width!==T||o.height!==P)this.setSize(T,P)}if(R===!1)b.setRenderTarget(o);return m=b.toneMapping,b.toneMapping=wn,!0},this.hasRenderPass=function(){return R},this.end=function(b,w){b.toneMapping=m,v=!0;let T=o,P=a;for(let g=0;g<A.length;g++){let _=A[g];if(_.enabled===!1)continue;if(_.render(b,P,T,w),_.needsSwap!==!1)T=P,P=P===a?l:a}if(f!==b.outputColorSpace||x!==b.toneMapping){if(f=b.outputColorSpace,x=b.toneMapping,u.defines={},pt.getTransfer(f)===Ct)u.defines.SRGB_TRANSFER="";let g=Xx[x];if(g)u.defines[g]="";u.needsUpdate=!0}u.uniforms.tDiffuse.value=T.texture,b.setRenderTarget(p),b.render(d,h),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){if(o.dispose(),a!==null)a.dispose();if(l!==null)l.dispose();c.dispose(),u.dispose()}}var hd=new sn,ic=new Xi(1,1),ud=new yo,dd=new Tl,fd=new Eo,Xu=[],qu=[],Yu=new Float32Array(16),Zu=new Float32Array(9),$u=new Float32Array(4);function Ns(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,r=Xu[s];if(r===void 0)r=new Float32Array(s),Xu[s]=r;if(t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=n,e[o].toArray(r,a)}return r}function $t(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Jt(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Uo(e,t){let n=qu[t];if(n===void 0)n=new Int32Array(t),qu[t]=n;for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function Yx(e,t){let n=this.cache;if(n[0]===t)return;e.uniform1f(this.addr,t),n[0]=t}function Zx(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y)e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y}else{if($t(n,t))return;e.uniform2fv(this.addr,t),Jt(n,t)}}function $x(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z}else if(t.r!==void 0){if(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b}else{if($t(n,t))return;e.uniform3fv(this.addr,t),Jt(n,t)}}function Jx(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w}else{if($t(n,t))return;e.uniform4fv(this.addr,t),Jt(n,t)}}function Kx(e,t){let n=this.cache,i=t.elements;if(i===void 0){if($t(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Jt(n,t)}else{if($t(n,i))return;$u.set(i),e.uniformMatrix2fv(this.addr,!1,$u),Jt(n,i)}}function Qx(e,t){let n=this.cache,i=t.elements;if(i===void 0){if($t(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Jt(n,t)}else{if($t(n,i))return;Zu.set(i),e.uniformMatrix3fv(this.addr,!1,Zu),Jt(n,i)}}function jx(e,t){let n=this.cache,i=t.elements;if(i===void 0){if($t(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Jt(n,t)}else{if($t(n,i))return;Yu.set(i),e.uniformMatrix4fv(this.addr,!1,Yu),Jt(n,i)}}function ev(e,t){let n=this.cache;if(n[0]===t)return;e.uniform1i(this.addr,t),n[0]=t}function tv(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y)e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y}else{if($t(n,t))return;e.uniform2iv(this.addr,t),Jt(n,t)}}function nv(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z}else{if($t(n,t))return;e.uniform3iv(this.addr,t),Jt(n,t)}}function iv(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w}else{if($t(n,t))return;e.uniform4iv(this.addr,t),Jt(n,t)}}function sv(e,t){let n=this.cache;if(n[0]===t)return;e.uniform1ui(this.addr,t),n[0]=t}function rv(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y)e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y}else{if($t(n,t))return;e.uniform2uiv(this.addr,t),Jt(n,t)}}function ov(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z}else{if($t(n,t))return;e.uniform3uiv(this.addr,t),Jt(n,t)}}function av(e,t){let n=this.cache;if(t.x!==void 0){if(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w}else{if($t(n,t))return;e.uniform4uiv(this.addr,t),Jt(n,t)}}function lv(e,t,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)e.uniform1i(this.addr,s),i[0]=s;let r;if(this.type===e.SAMPLER_2D_SHADOW)ic.compareFunction=n.isReversedDepthBuffer()?_o:vo,r=ic;else r=hd;n.setTexture2D(t||r,s)}function cv(e,t,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)e.uniform1i(this.addr,s),i[0]=s;n.setTexture3D(t||dd,s)}function hv(e,t,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)e.uniform1i(this.addr,s),i[0]=s;n.setTextureCube(t||fd,s)}function uv(e,t,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)e.uniform1i(this.addr,s),i[0]=s;n.setTexture2DArray(t||ud,s)}function dv(e){switch(e){case 5126:return Yx;case 35664:return Zx;case 35665:return $x;case 35666:return Jx;case 35674:return Kx;case 35675:return Qx;case 35676:return jx;case 5124:case 35670:return ev;case 35667:case 35671:return tv;case 35668:case 35672:return nv;case 35669:case 35673:return iv;case 5125:return sv;case 36294:return rv;case 36295:return ov;case 36296:return av;case 35678:case 36198:case 36298:case 36306:case 35682:return lv;case 35679:case 36299:case 36307:return cv;case 35680:case 36300:case 36308:case 36293:return hv;case 36289:case 36303:case 36311:case 36292:return uv}}function fv(e,t){e.uniform1fv(this.addr,t)}function pv(e,t){let n=Ns(t,this.size,2);e.uniform2fv(this.addr,n)}function mv(e,t){let n=Ns(t,this.size,3);e.uniform3fv(this.addr,n)}function gv(e,t){let n=Ns(t,this.size,4);e.uniform4fv(this.addr,n)}function xv(e,t){let n=Ns(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function vv(e,t){let n=Ns(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function _v(e,t){let n=Ns(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function yv(e,t){e.uniform1iv(this.addr,t)}function bv(e,t){e.uniform2iv(this.addr,t)}function Sv(e,t){e.uniform3iv(this.addr,t)}function Mv(e,t){e.uniform4iv(this.addr,t)}function wv(e,t){e.uniform1uiv(this.addr,t)}function Av(e,t){e.uniform2uiv(this.addr,t)}function Tv(e,t){e.uniform3uiv(this.addr,t)}function Ev(e,t){e.uniform4uiv(this.addr,t)}function Cv(e,t,n){let i=this.cache,s=t.length,r=Uo(n,s);if(!$t(i,r))e.uniform1iv(this.addr,r),Jt(i,r);let o;if(this.type===e.SAMPLER_2D_SHADOW)o=ic;else o=hd;for(let a=0;a!==s;++a)n.setTexture2D(t[a]||o,r[a])}function Rv(e,t,n){let i=this.cache,s=t.length,r=Uo(n,s);if(!$t(i,r))e.uniform1iv(this.addr,r),Jt(i,r);for(let o=0;o!==s;++o)n.setTexture3D(t[o]||dd,r[o])}function Pv(e,t,n){let i=this.cache,s=t.length,r=Uo(n,s);if(!$t(i,r))e.uniform1iv(this.addr,r),Jt(i,r);for(let o=0;o!==s;++o)n.setTextureCube(t[o]||fd,r[o])}function Iv(e,t,n){let i=this.cache,s=t.length,r=Uo(n,s);if(!$t(i,r))e.uniform1iv(this.addr,r),Jt(i,r);for(let o=0;o!==s;++o)n.setTexture2DArray(t[o]||ud,r[o])}function Lv(e){switch(e){case 5126:return fv;case 35664:return pv;case 35665:return mv;case 35666:return gv;case 35674:return xv;case 35675:return vv;case 35676:return _v;case 5124:case 35670:return yv;case 35667:case 35671:return bv;case 35668:case 35672:return Sv;case 35669:case 35673:return Mv;case 5125:return wv;case 36294:return Av;case 36295:return Tv;case 36296:return Ev;case 35678:case 36198:case 36298:case 36306:case 35682:return Cv;case 35679:case 36299:case 36307:return Rv;case 35680:case 36300:case 36308:case 36293:return Pv;case 36289:case 36303:case 36311:case 36292:return Iv}}class pd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=dv(t.type)}}class md{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Lv(t.type)}}class gd{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,r=i.length;s!==r;++s){let o=i[s];o.setValue(e,t[o.id],n)}}}var ec=/(\w+)(\])?(\[|\.)?/g;function Ju(e,t){e.seq.push(t),e.map[t.id]=t}function Dv(e,t,n){let i=e.name,s=i.length;ec.lastIndex=0;while(!0){let r=ec.exec(i),o=ec.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l)a=a|0;if(c===void 0||c==="["&&o+2===s){Ju(n,c===void 0?new pd(a,e,t):new md(a,e,t));break}else{let d=n.map[a];if(d===void 0)d=new gd(a),Ju(n,d);n=d}}}class Sr{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let o=e.getActiveUniform(t,r),a=e.getUniformLocation(t,o.name);Dv(o,a,this)}let i=[],s=[];for(let r of this.seq)if(r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW)i.push(r);else s.push(r);if(i.length>0)this.seq=i.concat(s)}setValue(e,t,n,i){let s=this.map[t];if(s!==void 0)s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];if(i!==void 0)this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,r=t.length;s!==r;++s){let o=t[s],a=n[o.id];if(a.needsUpdate!==!1)o.setValue(e,a.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let r=e[i];if(r.id in t)n.push(r)}return n}}function Ku(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var Nv=37297,Fv=0;function Uv(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,n.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}var Qu=new ht;function Ov(e){pt._getMatrix(Qu,pt.workingColorSpace,e);let t=`mat3( ${Qu.elements.map((n)=>n.toFixed(4))} )`;switch(pt.getTransfer(e)){case bl:return[t,"LinearTransferOETF"];case Ct:return[t,"sRGBTransferOETF"];default:return it("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function ju(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),r=(e.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+Uv(e.getShaderSource(t),a)}else return r}function Bv(e,t){let n=Ov(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var zv={[ir]:"Linear",[sr]:"Reinhard",[rr]:"Cineon",[or]:"ACESFilmic",[lr]:"AgX",[cr]:"Neutral",[ar]:"Custom"};function kv(e,t){let n=zv[t];if(n===void 0)return it("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var No=new B;function Gv(){pt.getLuminanceCoefficients(No);let e=No.x.toFixed(4),t=No.y.toFixed(4),n=No.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function Hv(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(br).join(`
`)}function Vv(e){let t=[];for(let n in e){let i=e[n];if(i===!1)continue;t.push("#define "+n+" "+i)}return t.join(`
`)}function Wv(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=e.getActiveAttrib(t,s),o=r.name,a=1;if(r.type===e.FLOAT_MAT2)a=2;if(r.type===e.FLOAT_MAT3)a=3;if(r.type===e.FLOAT_MAT4)a=4;n[o]={type:r.type,location:e.getAttribLocation(t,o),locationSize:a}}return n}function br(e){return e!==""}function ed(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function td(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Xv=/^[ \t]*#include +<([\w\d./]+)>/gm;function sc(e){return e.replace(Xv,Yv)}var qv=new Map;function Yv(e,t){let n=ft[t];if(n===void 0){let i=qv.get(t);if(i!==void 0)n=ft[i],it('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return sc(n)}var Zv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nd(e){return e.replace(Zv,$v)}function $v(e,t,n,i){let s="";for(let r=parseInt(t);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function id(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;if(e.precision==="highp")t+=`
#define HIGH_PRECISION`;else if(e.precision==="mediump")t+=`
#define MEDIUM_PRECISION`;else if(e.precision==="lowp")t+=`
#define LOW_PRECISION`;return t}var Jv={[nr]:"SHADOWMAP_TYPE_PCF",[Ss]:"SHADOWMAP_TYPE_VSM"};function Kv(e){return Jv[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Qv={[As]:"ENVMAP_TYPE_CUBE",[Bi]:"ENVMAP_TYPE_CUBE",[hr]:"ENVMAP_TYPE_CUBE_UV"};function jv(e){if(e.envMap===!1)return"ENVMAP_TYPE_CUBE";return Qv[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var e_={[Bi]:"ENVMAP_MODE_REFRACTION"};function t_(e){if(e.envMap===!1)return"ENVMAP_MODE_REFLECTION";return e_[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var n_={[fu]:"ENVMAP_BLENDING_MULTIPLY",[pu]:"ENVMAP_BLENDING_MIX",[mu]:"ENVMAP_BLENDING_ADD"};function i_(e){if(e.envMap===!1)return"ENVMAP_BLENDING_NONE";return n_[e.combine]||"ENVMAP_BLENDING_NONE"}function s_(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function r_(e,t,n,i){let s=e.getContext(),{defines:r,vertexShader:o,fragmentShader:a}=n,l=Kv(n),c=jv(n),u=t_(n),d=i_(n),h=s_(n),f=Hv(n),x=Vv(r),v=s.createProgram(),m,p,A=n.glslVersion?"#version "+n.glslVersion+`
`:"";if(n.isRawShaderMaterial){if(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(br).join(`
`),m.length>0)m+=`
`;if(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(br).join(`
`),p.length>0)p+=`
`}else m=[id(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(br).join(`
`),p=[id(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==wn?"#define TONE_MAPPING":"",n.toneMapping!==wn?ft.tonemapping_pars_fragment:"",n.toneMapping!==wn?kv("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,Bv("linearToOutputTexel",n.outputColorSpace),Gv(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(br).join(`
`);if(o=sc(o),o=ed(o,n),o=td(o,n),a=sc(a),a=ed(a,n),a=td(a,n),o=nd(o),a=nd(a),n.isRawShaderMaterial!==!0)A=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===Sl?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Sl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p;let R=A+m+o,b=A+p+a,w=Ku(s,s.VERTEX_SHADER,R),T=Ku(s,s.FRAGMENT_SHADER,b);if(s.attachShader(v,w),s.attachShader(v,T),n.index0AttributeName!==void 0)s.bindAttribLocation(v,0,n.index0AttributeName);else if(n.hasPositionAttribute===!0)s.bindAttribLocation(v,0,"position");s.linkProgram(v);function P(I){if(e.debug.checkShaderErrors){let F=s.getProgramInfoLog(v)||"",X=s.getShaderInfoLog(w)||"",L=s.getShaderInfoLog(T)||"",G=F.trim(),Z=X.trim(),N=L.trim(),ie=!0,O=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(ie=!1,typeof e.debug.onShaderError==="function")e.debug.onShaderError(s,v,w,T);else{let z=ju(s,w,"vertex"),H=ju(s,T,"fragment");rt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+G+`
`+z+`
`+H)}else if(G!=="")it("WebGLProgram: Program Info Log:",G);else if(Z===""||N==="")O=!1;if(O)I.diagnostics={runnable:ie,programLog:G,vertexShader:{log:Z,prefix:m},fragmentShader:{log:N,prefix:p}}}s.deleteShader(w),s.deleteShader(T),g=new Sr(s,v),_=Wv(s,v)}let g;this.getUniforms=function(){if(g===void 0)P(this);return g};let _;this.getAttributes=function(){if(_===void 0)P(this);return _};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(D===!1)D=s.getProgramParameter(v,Nv);return D},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Fv++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=T,this}var o_=0;class xd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);if(i.has(t)===!1)i.add(t),t.usedTimes++;if(i.has(n)===!1)i.add(n),n.usedTimes++;return this}remove(e){let t=this.materialCache.get(e);for(let n of t)if(n.usedTimes--,n.usedTimes===0)this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);if(n===void 0)n=new Set,t.set(e,n);return n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);if(n===void 0)n=new vd(e),t.set(e,n);return n}}class vd{constructor(e){this.id=o_++,this.code=e,this.usedTimes=0}}function a_(e){return e===Hi||e===go||e===xo}function l_(e,t,n,i,s,r){let o=new bo,a=new xd,l=new Set,c=[],u=new Map,{logarithmicDepthBuffer:d,precision:h}=i,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(g){if(l.add(g),g===0)return"uv";return`uv${g}`}function v(g,_,D,I,F,X){let L=I.fog,G=F.geometry,Z=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?I.environment:null,N=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,ie=t.get(g.envMap||Z,N),O=!!ie&&ie.mapping===hr?ie.image.height:null,z=f[g.type];if(g.precision!==null){if(h=i.getMaxPrecision(g.precision),h!==g.precision)it("WebGLProgram.getParameters:",g.precision,"not supported, using",h,"instead.")}let H=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,fe=H!==void 0?H.length:0,pe=0;if(G.morphAttributes.position!==void 0)pe=1;if(G.morphAttributes.normal!==void 0)pe=2;if(G.morphAttributes.color!==void 0)pe=3;let We,Ie,j,xe;if(z){let _e=ei[z];We=_e.vertexShader,Ie=_e.fragmentShader}else{We=g.vertexShader,Ie=g.fragmentShader;let _e=a.getVertexShaderStage(g),be=a.getFragmentShaderStage(g);a.update(g,_e,be),j=_e.id,xe=be.id}let re=e.getRenderTarget(),Se=e.state.buffers.depth.getReversed(),Ae=F.isInstancedMesh===!0,me=F.isBatchedMesh===!0,Te=!!g.map,Ne=!!g.matcap,Le=!!ie,Je=!!g.aoMap,Ke=!!g.lightMap,dt=!!g.bumpMap&&g.wireframe===!1,Me=!!g.normalMap,ze=!!g.displacementMap,V=!!g.emissiveMap,ve=!!g.metalnessMap,C=!!g.roughnessMap,Ge=g.anisotropy>0,we=g.clearcoat>0,et=g.dispersion>0,M=g.retroreflectivity>0,y=g.iridescence>0,U=g.sheen>0,J=g.transmission>0,he=Ge&&!!g.anisotropyMap,q=we&&!!g.clearcoatMap,ee=we&&!!g.clearcoatNormalMap,K=we&&!!g.clearcoatRoughnessMap,te=y&&!!g.iridescenceMap,Q=y&&!!g.iridescenceThicknessMap,ce=U&&!!g.sheenColorMap,de=U&&!!g.sheenRoughnessMap,ge=!!g.specularMap,ke=!!g.specularColorMap,He=!!g.specularIntensityMap,qe=J&&!!g.transmissionMap,W=J&&!!g.thicknessMap,Ee=!!g.gradientMap,le=!!g.alphaMap,Re=g.alphaTest>0,Be=!!g.alphaHash,E=!!g.extensions,k=wn;if(g.toneMapped){if(re===null||re.isXRRenderTarget===!0)k=e.toneMapping}let ae={shaderID:z,shaderType:g.type,shaderName:g.name,vertexShader:We,fragmentShader:Ie,defines:g.defines,customVertexShaderID:j,customFragmentShaderID:xe,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:h,batching:me,batchingColor:me&&F._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&F.instanceColor!==null,instancingMorph:Ae&&F.morphTexture!==null,outputColorSpace:re===null?e.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:pt.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Te,matcap:Ne,envMap:Le,envMapMode:Le&&ie.mapping,envMapCubeUVHeight:O,aoMap:Je,lightMap:Ke,bumpMap:dt,normalMap:Me,displacementMap:ze,emissiveMap:V,normalMapObjectSpace:Me&&g.normalMapType===Tu,normalMapTangentSpace:Me&&g.normalMapType===yl,packedNormalMap:Me&&g.normalMapType===yl&&a_(g.normalMap.format),metalnessMap:ve,roughnessMap:C,anisotropy:Ge,anisotropyMap:he,clearcoat:we,clearcoatMap:q,clearcoatNormalMap:ee,clearcoatRoughnessMap:K,dispersion:et,retroreflection:M,iridescence:y,iridescenceMap:te,iridescenceThicknessMap:Q,sheen:U,sheenColorMap:ce,sheenRoughnessMap:de,specularMap:ge,specularColorMap:ke,specularIntensityMap:He,transmission:J,transmissionMap:qe,thicknessMap:W,gradientMap:Ee,opaque:g.transparent===!1&&g.blending===Qn&&g.alphaToCoverage===!1,alphaMap:le,alphaTest:Re,alphaHash:Be,combine:g.combine,mapUv:Te&&x(g.map.channel),aoMapUv:Je&&x(g.aoMap.channel),lightMapUv:Ke&&x(g.lightMap.channel),bumpMapUv:dt&&x(g.bumpMap.channel),normalMapUv:Me&&x(g.normalMap.channel),displacementMapUv:ze&&x(g.displacementMap.channel),emissiveMapUv:V&&x(g.emissiveMap.channel),metalnessMapUv:ve&&x(g.metalnessMap.channel),roughnessMapUv:C&&x(g.roughnessMap.channel),anisotropyMapUv:he&&x(g.anisotropyMap.channel),clearcoatMapUv:q&&x(g.clearcoatMap.channel),clearcoatNormalMapUv:ee&&x(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&x(g.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&x(g.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&x(g.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&x(g.sheenColorMap.channel),sheenRoughnessMapUv:de&&x(g.sheenRoughnessMap.channel),specularMapUv:ge&&x(g.specularMap.channel),specularColorMapUv:ke&&x(g.specularColorMap.channel),specularIntensityMapUv:He&&x(g.specularIntensityMap.channel),transmissionMapUv:qe&&x(g.transmissionMap.channel),thicknessMapUv:W&&x(g.thicknessMap.channel),alphaMapUv:le&&x(g.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Me||Ge),vertexNormals:!!G.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!G.attributes.uv&&(Te||le),fog:!!L,useFog:g.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||G.attributes.normal===void 0&&Me===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Se,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:pe,numSunLights:_.sun.length,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numSunLightShadows:_.sunShadowMap.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:e.shadowMap.enabled&&D.length>0,shadowMapType:e.shadowMap.type,toneMapping:k,decodeVideoTexture:Te&&g.map.isVideoTexture===!0&&pt.getTransfer(g.map.colorSpace)===Ct,decodeVideoTextureEmissive:V&&g.emissiveMap.isVideoTexture===!0&&pt.getTransfer(g.emissiveMap.colorSpace)===Ct,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===un,flipSided:g.side===hn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:E&&g.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(E&&g.extensions.multiDraw===!0||me)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return ae.vertexUv1s=l.has(1),ae.vertexUv2s=l.has(2),ae.vertexUv3s=l.has(3),l.clear(),ae}function m(g){let _=[];if(g.shaderID)_.push(g.shaderID);else _.push(g.customVertexShaderID),_.push(g.customFragmentShaderID);if(g.defines!==void 0)for(let D in g.defines)_.push(D),_.push(g.defines[D]);if(g.isRawShaderMaterial===!1)p(_,g),A(_,g),_.push(e.outputColorSpace);return _.push(g.customProgramCacheKey),_.join()}function p(g,_){g.push(_.precision),g.push(_.outputColorSpace),g.push(_.envMapMode),g.push(_.envMapCubeUVHeight),g.push(_.mapUv),g.push(_.alphaMapUv),g.push(_.lightMapUv),g.push(_.aoMapUv),g.push(_.bumpMapUv),g.push(_.normalMapUv),g.push(_.displacementMapUv),g.push(_.emissiveMapUv),g.push(_.metalnessMapUv),g.push(_.roughnessMapUv),g.push(_.anisotropyMapUv),g.push(_.clearcoatMapUv),g.push(_.clearcoatNormalMapUv),g.push(_.clearcoatRoughnessMapUv),g.push(_.iridescenceMapUv),g.push(_.iridescenceThicknessMapUv),g.push(_.sheenColorMapUv),g.push(_.sheenRoughnessMapUv),g.push(_.specularMapUv),g.push(_.specularColorMapUv),g.push(_.specularIntensityMapUv),g.push(_.transmissionMapUv),g.push(_.thicknessMapUv),g.push(_.combine),g.push(_.fogExp2),g.push(_.sizeAttenuation),g.push(_.morphTargetsCount),g.push(_.morphAttributeCount),g.push(_.numSunLights),g.push(_.numDirLights),g.push(_.numPointLights),g.push(_.numSpotLights),g.push(_.numSpotLightMaps),g.push(_.numHemiLights),g.push(_.numRectAreaLights),g.push(_.numSunLightShadows),g.push(_.numDirLightShadows),g.push(_.numPointLightShadows),g.push(_.numSpotLightShadows),g.push(_.numSpotLightShadowsWithMaps),g.push(_.numLightProbes),g.push(_.shadowMapType),g.push(_.toneMapping),g.push(_.numClippingPlanes),g.push(_.numClipIntersection),g.push(_.depthPacking)}function A(g,_){if(o.disableAll(),_.instancing)o.enable(0);if(_.instancingColor)o.enable(1);if(_.instancingMorph)o.enable(2);if(_.matcap)o.enable(3);if(_.envMap)o.enable(4);if(_.normalMapObjectSpace)o.enable(5);if(_.normalMapTangentSpace)o.enable(6);if(_.clearcoat)o.enable(7);if(_.iridescence)o.enable(8);if(_.alphaTest)o.enable(9);if(_.vertexColors)o.enable(10);if(_.vertexAlphas)o.enable(11);if(_.vertexUv1s)o.enable(12);if(_.vertexUv2s)o.enable(13);if(_.vertexUv3s)o.enable(14);if(_.vertexTangents)o.enable(15);if(_.anisotropy)o.enable(16);if(_.alphaHash)o.enable(17);if(_.batching)o.enable(18);if(_.dispersion)o.enable(19);if(_.retroreflection)o.enable(24);if(_.batchingColor)o.enable(20);if(_.gradientMap)o.enable(21);if(_.packedNormalMap)o.enable(22);if(_.vertexNormals)o.enable(23);if(g.push(o.mask),o.disableAll(),_.fog)o.enable(0);if(_.useFog)o.enable(1);if(_.flatShading)o.enable(2);if(_.logarithmicDepthBuffer)o.enable(3);if(_.reversedDepthBuffer)o.enable(4);if(_.skinning)o.enable(5);if(_.morphTargets)o.enable(6);if(_.morphNormals)o.enable(7);if(_.morphColors)o.enable(8);if(_.premultipliedAlpha)o.enable(9);if(_.shadowMapEnabled)o.enable(10);if(_.doubleSided)o.enable(11);if(_.flipSided)o.enable(12);if(_.useDepthPacking)o.enable(13);if(_.dithering)o.enable(14);if(_.transmission)o.enable(15);if(_.sheen)o.enable(16);if(_.opaque)o.enable(17);if(_.pointsUvs)o.enable(18);if(_.decodeVideoTexture)o.enable(19);if(_.decodeVideoTextureEmissive)o.enable(20);if(_.alphaToCoverage)o.enable(21);if(_.numLightProbeGrids>0)o.enable(22);if(_.hasPositionAttribute)o.enable(23);g.push(o.mask)}function R(g){let _=f[g.type],D;if(_){let I=ei[_];D=fi.clone(I.uniforms)}else D=g.uniforms;return D}function b(g,_){let D=u.get(_);if(D!==void 0)++D.usedTimes;else D=new r_(e,_,g,s),c.push(D),u.set(_,D);return D}function w(g){if(--g.usedTimes===0){let _=c.indexOf(g);c[_]=c[c.length-1],c.pop(),u.delete(g.cacheKey),g.destroy()}}function T(g){a.remove(g)}function P(){a.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:R,acquireProgram:b,releaseProgram:w,releaseShaderCache:T,programs:c,dispose:P}}function c_(){let e=new WeakMap;function t(o){return e.has(o)}function n(o){let a=e.get(o);if(a===void 0)a={},e.set(o,a);return a}function i(o){e.delete(o)}function s(o,a,l){e.get(o)[a]=l}function r(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:r}}function h_(e,t){if(e.groupOrder!==t.groupOrder)return e.groupOrder-t.groupOrder;else if(e.renderOrder!==t.renderOrder)return e.renderOrder-t.renderOrder;else if(e.material.id!==t.material.id)return e.material.id-t.material.id;else if(e.materialVariant!==t.materialVariant)return e.materialVariant-t.materialVariant;else if(e.z!==t.z)return e.z-t.z;else return e.id-t.id}function sd(e,t){if(e.groupOrder!==t.groupOrder)return e.groupOrder-t.groupOrder;else if(e.renderOrder!==t.renderOrder)return e.renderOrder-t.renderOrder;else if(e.z!==t.z)return t.z-e.z;else return e.id-t.id}function rd(){let e=[],t=0,n=[],i=[],s=[];function r(){t=0,n.length=0,i.length=0,s.length=0}function o(h){let f=0;if(h.isInstancedMesh)f+=2;if(h.isSkinnedMesh)f+=1;return f}function a(h,f,x,v,m,p){let A=e[t];if(A===void 0)A={id:h.id,object:h,geometry:f,material:x,materialVariant:o(h),groupOrder:v,renderOrder:h.renderOrder,z:m,group:p},e[t]=A;else A.id=h.id,A.object=h,A.geometry=f,A.material=x,A.materialVariant=o(h),A.groupOrder=v,A.renderOrder=h.renderOrder,A.z=m,A.group=p;return t++,A}function l(h,f,x,v,m,p,A){if(A.reversedDepth===!0)m=-m;let R=a(h,f,x,v,m,p);if(x.transmission>0)i.push(R);else if(x.transparent===!0)s.push(R);else n.push(R)}function c(h,f,x,v,m,p){let A=a(h,f,x,v,m,p);if(x.transmission>0)i.unshift(A);else if(x.transparent===!0)s.unshift(A);else n.unshift(A)}function u(h,f){if(n.length>1)n.sort(h||h_);if(i.length>1)i.sort(f||sd);if(s.length>1)s.sort(f||sd)}function d(){for(let h=t,f=e.length;h<f;h++){let x=e[h];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function u_(){let e=new WeakMap;function t(i,s){let r=e.get(i),o;if(r===void 0)o=new rd,e.set(i,[o]);else if(s>=r.length)o=new rd,r.push(o);else o=r[s];return o}function n(){e=new WeakMap}return{get:t,dispose:n}}function d_(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={direction:new B,color:new at};break;case"SpotLight":n={position:new B,direction:new B,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new at,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new at,groundColor:new at};break;case"RectAreaLight":n={color:new at,position:new B,halfWidth:new B,halfHeight:new B};break}return e[t.id]=n,n}}}function f_(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1000};break}return e[t.id]=n,n}}}var p_=0;function m_(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function g_(e){let t=new d_,n=f_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);let s=new B,r=new Bt,o=new Bt;function a(c){let u=0,d=0,h=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let f=0,x=0,v=0,m=0,p=0,A=0,R=0,b=0,w=0,T=0,P=0,g=0,_=0,D=0;c.sort(m_);for(let F=0,X=c.length;F<X;F++){let L=c[F],{color:G,intensity:Z,distance:N}=L,ie=null;if(L.shadow&&L.shadow.map)if(L.shadow.map.texture.format===Hi)ie=L.shadow.map.texture;else ie=L.shadow.map.depthTexture||L.shadow.map.texture;if(L.isAmbientLight)u+=G.r*Z,d+=G.g*Z,h+=G.b*Z;else if(L.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(L.sh.coefficients[O],Z);D++}else if(L.isSunLight){let O=t.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let z=L.shadow,H=n.get(L);H.shadowIntensity=z.intensity,H.shadowBias=z.bias,H.shadowNormalBias=z.normalBias,H.shadowRadius=z.radius,H.shadowMapSize.copy(z.mapSize).multiply(z.getFrameExtents()),i.sunShadow[x]=H,i.sunShadowMap[x]=ie;let fe=z.getViewportCount();for(let pe=0;pe<fe;pe++)i.sunShadowMatrix[v+pe]=z.getMatrix(pe),i.sunShadowCascade[v+pe]=z._cascadeData[pe];v+=fe,x++}i.sun[f]=O,f++}else if(L.isDirectionalLight){let O=t.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let z=L.shadow,H=n.get(L);H.shadowIntensity=z.intensity,H.shadowBias=z.bias,H.shadowNormalBias=z.normalBias,H.shadowRadius=z.radius,H.shadowMapSize=z.mapSize,i.directionalShadow[m]=H,i.directionalShadowMap[m]=ie,i.directionalShadowMatrix[m]=L.shadow.matrix,w++}i.directional[m]=O,m++}else if(L.isSpotLight){let O=t.get(L);O.position.setFromMatrixPosition(L.matrixWorld),O.color.copy(G).multiplyScalar(Z),O.distance=N,O.coneCos=Math.cos(L.angle),O.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),O.decay=L.decay,i.spot[A]=O;let z=L.shadow;if(L.map){if(i.spotLightMap[g]=L.map,g++,z.updateMatrices(L),L.castShadow)_++}if(i.spotLightMatrix[A]=z.matrix,L.castShadow){let H=n.get(L);H.shadowIntensity=z.intensity,H.shadowBias=z.bias,H.shadowNormalBias=z.normalBias,H.shadowRadius=z.radius,H.shadowMapSize=z.mapSize,i.spotShadow[A]=H,i.spotShadowMap[A]=ie,P++}A++}else if(L.isRectAreaLight){let O=t.get(L);O.color.copy(G).multiplyScalar(Z),O.halfWidth.set(L.width*0.5,0,0),O.halfHeight.set(0,L.height*0.5,0),i.rectArea[R]=O,R++}else if(L.isPointLight){let O=t.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity),O.distance=L.distance,O.decay=L.decay,L.castShadow){let z=L.shadow,H=n.get(L);H.shadowIntensity=z.intensity,H.shadowBias=z.bias,H.shadowNormalBias=z.normalBias,H.shadowRadius=z.radius,H.shadowMapSize=z.mapSize,H.shadowCameraNear=z.camera.near,H.shadowCameraFar=z.camera.far,i.pointShadow[p]=H,i.pointShadowMap[p]=ie,i.pointShadowMatrix[p]=L.shadow.matrix,T++}i.point[p]=O,p++}else if(L.isHemisphereLight){let O=t.get(L);O.skyColor.copy(L.color).multiplyScalar(Z),O.groundColor.copy(L.groundColor).multiplyScalar(Z),i.hemi[b]=O,b++}}if(R>0)if(e.has("OES_texture_float_linear")===!0)i.rectAreaLTC1=Oe.LTC_FLOAT_1,i.rectAreaLTC2=Oe.LTC_FLOAT_2;else i.rectAreaLTC1=Oe.LTC_HALF_1,i.rectAreaLTC2=Oe.LTC_HALF_2;i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let I=i.hash;if(I.sunLength!==f||I.directionalLength!==m||I.pointLength!==p||I.spotLength!==A||I.rectAreaLength!==R||I.hemiLength!==b||I.numSunShadows!==x||I.numDirectionalShadows!==w||I.numPointShadows!==T||I.numSpotShadows!==P||I.numSpotMaps!==g||I.numLightProbes!==D)i.sun.length=f,i.directional.length=m,i.spot.length=A,i.rectArea.length=R,i.point.length=p,i.hemi.length=b,i.sunShadow.length=x,i.sunShadowMap.length=x,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=P,i.spotShadowMap.length=P,i.spotLightMatrix.length=P+g-_,i.spotLightMap.length=g,i.numSpotLightShadowsWithMaps=_,i.numLightProbes=D,I.sunLength=f,I.directionalLength=m,I.pointLength=p,I.spotLength=A,I.rectAreaLength=R,I.hemiLength=b,I.numSunShadows=x,I.numDirectionalShadows=w,I.numPointShadows=T,I.numSpotShadows=P,I.numSpotMaps=g,I.numLightProbes=D,i.version=p_++}function l(c,u){let d=0,h=0,f=0,x=0,v=0,m=0,p=u.matrixWorldInverse;for(let A=0,R=c.length;A<R;A++){let b=c[A];if(b.isSunLight){let w=i.sun[d];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(p),d++}else if(b.isDirectionalLight){let w=i.directional[h];w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),h++}else if(b.isSpotLight){let w=i.spot[x];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),x++}else if(b.isRectAreaLight){let w=i.rectArea[v];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(p),o.identity(),r.copy(b.matrixWorld),r.premultiply(p),o.extractRotation(r),w.halfWidth.set(b.width*0.5,0,0),w.halfHeight.set(0,b.height*0.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),v++}else if(b.isPointLight){let w=i.point[f];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){let w=i.hemi[m];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(p),m++}}}return{setup:a,setupView:l,state:i}}function od(e){let t=new g_(e),n=[],i=[],s=[];function r(h){d.camera=h,n.length=0,i.length=0,s.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function l(h){s.push(h)}function c(){t.setup(n)}function u(h){t.setupView(n,h)}let d={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function x_(e){let t=new WeakMap;function n(s,r=0){let o=t.get(s),a;if(o===void 0)a=new od(e),t.set(s,[a]);else if(r>=o.length)a=new od(e),o.push(a);else a=o[r];return a}function i(){t=new WeakMap}return{get:n,dispose:i}}var v_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,__=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,y_=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],b_=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],ad=new Bt,yr=new B,tc=new B;function S_(e,t,n){let i=new Ao,s=new $e,r=new $e,o=new Ft,a=new Ll,l=new Dl,c={},u=n.maxTextureSize,d={[Ms]:hn,[hn]:Ms,[un]:un},h=new Qe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:v_,fragmentShader:__}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let x=new zt;x.setAttribute("position",new kt(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let v=new ct(x,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nr;let p=this.type;this.render=function(T,P,g){if(m.enabled===!1)return;if(m.autoUpdate===!1&&m.needsUpdate===!1)return;if(T.length===0)return;if(this.type===zh)it("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=nr;let _=e.getRenderTarget(),D=e.getActiveCubeFace(),I=e.getActiveMipmapLevel(),F=e.state;if(F.setBlending(Nn),F.buffers.depth.getReversed()===!0)F.buffers.color.setClear(0,0,0,0);else F.buffers.color.setClear(1,1,1,1);F.buffers.depth.setTest(!0),F.setScissorTest(!1);let X=p!==this.type;if(X)P.traverse(function(L){if(L.material)if(Array.isArray(L.material))L.material.forEach((G)=>G.needsUpdate=!0);else L.material.needsUpdate=!0});for(let L=0,G=T.length;L<G;L++){let Z=T[L],N=Z.shadow;if(N===void 0){it("WebGLShadowMap:",Z,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);let ie=N.getFrameExtents();if(s.multiply(ie),r.copy(N.mapSize),s.x>u||s.y>u){if(s.x>u)r.x=Math.floor(u/ie.x),s.x=r.x*ie.x,N.mapSize.x=r.x;if(s.y>u)r.y=Math.floor(u/ie.y),s.y=r.y*ie.y,N.mapSize.y=r.y}let O=e.state.buffers.depth.getReversed();if(N.camera._reversedDepth=O,N.map===null||X===!0){if(N.map!==null){if(N.map.depthTexture!==null)N.map.depthTexture.dispose(),N.map.depthTexture=null;N.map.dispose()}if(this.type===Ss){if(Z.isPointLight){it("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new Vt(s.x,s.y,{format:Hi,type:en,minFilter:rn,magFilter:rn,generateMipmaps:!1}),N.map.texture.name=Z.name+".shadowMap",N.map.depthTexture=new Xi(s.x,s.y,hi),N.map.depthTexture.name=Z.name+".shadowMapDepth",N.map.depthTexture.format=ki,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Vn,N.map.depthTexture.magFilter=Vn}else{if(Z.isPointLight)N.map=new rc(s.x),N.map.depthTexture=new Pl(s.x,Ei);else N.map=new Vt(s.x,s.y),N.map.depthTexture=new Xi(s.x,s.y,Ei);if(N.map.depthTexture.name=Z.name+".shadowMap",N.map.depthTexture.format=ki,this.type===nr)N.map.depthTexture.compareFunction=O?_o:vo,N.map.depthTexture.minFilter=rn,N.map.depthTexture.magFilter=rn;else N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Vn,N.map.depthTexture.magFilter=Vn}N.camera.updateProjectionMatrix()}if(N.map.isWebGLCubeRenderTarget!==!0&&(N.map.width!==s.x||N.map.height!==s.y))N.map.setSize(s.x,s.y);let z=N.map.isWebGLCubeRenderTarget?6:N.getViewportCount();if(Z.isPointLight!==!0)N.updateMatrices(Z,g);for(let H=0;H<z;H++){let fe=N.getCamera(H);if(Z.isPointLight){let{camera:pe,matrix:We}=N,Ie=Z.distance||pe.far;if(Ie!==pe.far)pe.far=Ie,pe.updateProjectionMatrix();yr.setFromMatrixPosition(Z.matrixWorld),pe.position.copy(yr),tc.copy(pe.position),tc.add(y_[H]),pe.up.copy(b_[H]),pe.lookAt(tc),pe.updateMatrixWorld(),We.makeTranslation(-yr.x,-yr.y,-yr.z),ad.multiplyMatrices(pe.projectionMatrix,pe.matrixWorldInverse),N._frustum.setFromProjectionMatrix(ad,pe.coordinateSystem,pe.reversedDepth)}if(N.map.isWebGLCubeRenderTarget)e.setRenderTarget(N.map,H),e.clear();else{if(H===0)e.setRenderTarget(N.map),e.clear();let pe=N.getViewport(H);o.set(r.x*pe.x,r.y*pe.y,r.x*pe.z,r.y*pe.w),F.viewport(o)}i=N.getFrustum(H),b(P,g,fe,Z,this.type)}if(N.isPointLightShadow!==!0&&this.type===Ss)A(N,g);N.needsUpdate=!1}p=this.type,m.needsUpdate=!1,e.setRenderTarget(_,D,I)};function A(T,P){let g=t.update(v);if(h.defines.VSM_SAMPLES!==T.blurSamples)h.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0;if(T.mapPass===null)T.mapPass=new Vt(s.x,s.y,{format:Hi,type:en});else if(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)T.mapPass.setSize(T.map.width,T.map.height);h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,e.setRenderTarget(T.mapPass),e.clear(),e.renderBufferDirect(P,null,g,h,v,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,e.setRenderTarget(T.map),e.clear(),e.renderBufferDirect(P,null,g,f,v,null)}function R(T,P,g,_){let D=null,I=g.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)D=I;else if(D=g.isPointLight===!0?l:a,e.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let F=D.uuid,X=P.uuid,L=c[F];if(L===void 0)L={},c[F]=L;let G=L[X];if(G===void 0)G=D.clone(),L[X]=G,P.addEventListener("dispose",w);D=G}if(D.visible=P.visible,D.wireframe=P.wireframe,_===Ss)D.side=P.shadowSide!==null?P.shadowSide:P.side;else D.side=P.shadowSide!==null?P.shadowSide:d[P.side];if(D.alphaMap=P.alphaMap,D.alphaTest=P.alphaToCoverage===!0?0.5:P.alphaTest,D.map=P.map,D.clipShadows=P.clipShadows,D.clippingPlanes=P.clippingPlanes,D.clipIntersection=P.clipIntersection,D.displacementMap=P.displacementMap,D.displacementScale=P.displacementScale,D.displacementBias=P.displacementBias,D.wireframeLinewidth=P.wireframeLinewidth,D.linewidth=P.linewidth,g.isPointLight===!0&&D.isMeshDistanceMaterial===!0){let F=e.properties.get(D);F.light=g}return D}function b(T,P,g,_,D){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)){if((T.castShadow||T.receiveShadow&&D===Ss)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,T.matrixWorld);let X=t.update(T),L=T.material;if(Array.isArray(L)){let G=X.groups;for(let Z=0,N=G.length;Z<N;Z++){let ie=G[Z],O=L[ie.materialIndex];if(O&&O.visible){let z=R(T,O,_,D);T.onBeforeShadow(e,T,P,g,X,z,ie),e.renderBufferDirect(g,null,X,z,T,ie),T.onAfterShadow(e,T,P,g,X,z,ie)}}}else if(L.visible){let G=R(T,L,_,D);T.onBeforeShadow(e,T,P,g,X,G,null),e.renderBufferDirect(g,null,X,G,T,null),T.onAfterShadow(e,T,P,g,X,G,null)}}}let F=T.children;for(let X=0,L=F.length;X<L;X++)b(F[X],P,g,_,D)}function w(T){T.target.removeEventListener("dispose",w);for(let g in c){let _=c[g],D=T.target.uuid;if(D in _)_[D].dispose(),delete _[D]}}}function M_(e,t){function n(){let W=!1,Ee=new Ft,le=null,Re=new Ft(0,0,0,0);return{setMask:function(Be){if(le!==Be&&!W)e.colorMask(Be,Be,Be,Be),le=Be},setLocked:function(Be){W=Be},setClear:function(Be,E,k,ae,_e){if(_e===!0)Be*=ae,E*=ae,k*=ae;if(Ee.set(Be,E,k,ae),Re.equals(Ee)===!1)e.clearColor(Be,E,k,ae),Re.copy(Ee)},reset:function(){W=!1,le=null,Re.set(-1,0,0,0)}}}function i(){let W=!1,Ee=!1,le=null,Re=null,Be=null;return{setReversed:function(E){if(Ee!==E){let k=t.get("EXT_clip_control");if(E)k.clipControlEXT(k.LOWER_LEFT_EXT,k.ZERO_TO_ONE_EXT);else k.clipControlEXT(k.LOWER_LEFT_EXT,k.NEGATIVE_ONE_TO_ONE_EXT);Ee=E;let ae=Be;Be=null,this.setClear(ae)}},getReversed:function(){return Ee},setTest:function(E){if(E)re(e.DEPTH_TEST);else Se(e.DEPTH_TEST)},setMask:function(E){if(le!==E&&!W)e.depthMask(E),le=E},setFunc:function(E){if(Ee)E=Uu[E];if(Re!==E){switch(E){case ou:e.depthFunc(e.NEVER);break;case au:e.depthFunc(e.ALWAYS);break;case lu:e.depthFunc(e.LESS);break;case Oa:e.depthFunc(e.LEQUAL);break;case cu:e.depthFunc(e.EQUAL);break;case hu:e.depthFunc(e.GEQUAL);break;case uu:e.depthFunc(e.GREATER);break;case du:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}Re=E}},setLocked:function(E){W=E},setClear:function(E){if(Be!==E){if(Be=E,Ee)E=1-E;e.clearDepth(E)}},reset:function(){W=!1,le=null,Re=null,Be=null,Ee=!1}}}function s(){let W=!1,Ee=null,le=null,Re=null,Be=null,E=null,k=null,ae=null,_e=null;return{setTest:function(be){if(!W)if(be)re(e.STENCIL_TEST);else Se(e.STENCIL_TEST)},setMask:function(be){if(Ee!==be&&!W)e.stencilMask(be),Ee=be},setFunc:function(be,Fe,Pe){if(le!==be||Re!==Fe||Be!==Pe)e.stencilFunc(be,Fe,Pe),le=be,Re=Fe,Be=Pe},setOp:function(be,Fe,Pe){if(E!==be||k!==Fe||ae!==Pe)e.stencilOp(be,Fe,Pe),E=be,k=Fe,ae=Pe},setLocked:function(be){W=be},setClear:function(be){if(_e!==be)e.clearStencil(be),_e=be},reset:function(){W=!1,Ee=null,le=null,Re=null,Be=null,E=null,k=null,ae=null,_e=null}}}let r=new n,o=new i,a=new s,l=new WeakMap,c=new WeakMap,u={},d={},h={},f=new WeakMap,x=[],v=null,m=!1,p=null,A=null,R=null,b=null,w=null,T=null,P=null,g=new at(0,0,0),_=0,D=!1,I=null,F=null,X=null,L=null,G=null,Z=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,ie=0,O=e.getParameter(e.VERSION);if(O.indexOf("WebGL")!==-1)ie=parseFloat(/^WebGL (\d)/.exec(O)[1]),N=ie>=1;else if(O.indexOf("OpenGL ES")!==-1)ie=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),N=ie>=2;let z=null,H={},fe=e.getParameter(e.SCISSOR_BOX),pe=e.getParameter(e.VIEWPORT),We=new Ft().fromArray(fe),Ie=new Ft().fromArray(pe);function j(W,Ee,le,Re){let Be=new Uint8Array(4),E=e.createTexture();e.bindTexture(W,E),e.texParameteri(W,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(W,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let k=0;k<le;k++)if(W===e.TEXTURE_3D||W===e.TEXTURE_2D_ARRAY)e.texImage3D(Ee,0,e.RGBA,1,1,Re,0,e.RGBA,e.UNSIGNED_BYTE,Be);else e.texImage2D(Ee+k,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Be);return E}let xe={};xe[e.TEXTURE_2D]=j(e.TEXTURE_2D,e.TEXTURE_2D,1),xe[e.TEXTURE_CUBE_MAP]=j(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[e.TEXTURE_2D_ARRAY]=j(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),xe[e.TEXTURE_3D]=j(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(e.DEPTH_TEST),o.setFunc(Oa),dt(!1),Me(Na),re(e.CULL_FACE),Je(Nn);function re(W){if(u[W]!==!0)e.enable(W),u[W]=!0}function Se(W){if(u[W]!==!1)e.disable(W),u[W]=!1}function Ae(W,Ee){if(h[W]!==Ee){if(e.bindFramebuffer(W,Ee),h[W]=Ee,W===e.DRAW_FRAMEBUFFER)h[e.FRAMEBUFFER]=Ee;if(W===e.FRAMEBUFFER)h[e.DRAW_FRAMEBUFFER]=Ee;return!0}return!1}function me(W,Ee){let le=x,Re=!1;if(W){if(le=f.get(Ee),le===void 0)le=[],f.set(Ee,le);let Be=W.textures;if(le.length!==Be.length||le[0]!==e.COLOR_ATTACHMENT0){for(let E=0,k=Be.length;E<k;E++)le[E]=e.COLOR_ATTACHMENT0+E;le.length=Be.length,Re=!0}}else if(le[0]!==e.BACK)le[0]=e.BACK,Re=!0;if(Re)e.drawBuffers(le)}function Te(W){if(v!==W)return e.useProgram(W),v=W,!0;return!1}let Ne={[ws]:e.FUNC_ADD,[Gh]:e.FUNC_SUBTRACT,[Hh]:e.FUNC_REVERSE_SUBTRACT};Ne[Vh]=e.MIN,Ne[Wh]=e.MAX;let Le={[Xh]:e.ZERO,[qh]:e.ONE,[Yh]:e.SRC_COLOR,[$h]:e.SRC_ALPHA,[tu]:e.SRC_ALPHA_SATURATE,[jh]:e.DST_COLOR,[Kh]:e.DST_ALPHA,[Zh]:e.ONE_MINUS_SRC_COLOR,[Jh]:e.ONE_MINUS_SRC_ALPHA,[eu]:e.ONE_MINUS_DST_COLOR,[Qh]:e.ONE_MINUS_DST_ALPHA,[nu]:e.CONSTANT_COLOR,[iu]:e.ONE_MINUS_CONSTANT_COLOR,[su]:e.CONSTANT_ALPHA,[ru]:e.ONE_MINUS_CONSTANT_ALPHA};function Je(W,Ee,le,Re,Be,E,k,ae,_e,be){if(W===Nn){if(m===!0)Se(e.BLEND),m=!1;return}if(m===!1)re(e.BLEND),m=!0;if(W!==kh){if(W!==p||be!==D){if(A!==ws||w!==ws)e.blendEquation(e.FUNC_ADD),A=ws,w=ws;if(be)switch(W){case Qn:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Et:e.blendFunc(e.ONE,e.ONE);break;case Fa:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Ua:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:rt("WebGLState: Invalid blending: ",W);break}else switch(W){case Qn:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Et:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Fa:rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ua:rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rt("WebGLState: Invalid blending: ",W);break}R=null,b=null,T=null,P=null,g.set(0,0,0),_=0,p=W,D=be}return}if(Be=Be||Ee,E=E||le,k=k||Re,Ee!==A||Be!==w)e.blendEquationSeparate(Ne[Ee],Ne[Be]),A=Ee,w=Be;if(le!==R||Re!==b||E!==T||k!==P)e.blendFuncSeparate(Le[le],Le[Re],Le[E],Le[k]),R=le,b=Re,T=E,P=k;if(ae.equals(g)===!1||_e!==_)e.blendColor(ae.r,ae.g,ae.b,_e),g.copy(ae),_=_e;p=W,D=!1}function Ke(W,Ee){W.side===un?Se(e.CULL_FACE):re(e.CULL_FACE);let le=W.side===hn;if(Ee)le=!le;dt(le),W.blending===Qn&&W.transparent===!1?Je(Nn):Je(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);let Re=W.stencilWrite;if(a.setTest(Re),Re)a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass);V(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?re(e.SAMPLE_ALPHA_TO_COVERAGE):Se(e.SAMPLE_ALPHA_TO_COVERAGE)}function dt(W){if(I!==W){if(W)e.frontFace(e.CW);else e.frontFace(e.CCW);I=W}}function Me(W){if(W!==Oh){if(re(e.CULL_FACE),W!==F)if(W===Na)e.cullFace(e.BACK);else if(W===Bh)e.cullFace(e.FRONT);else e.cullFace(e.FRONT_AND_BACK)}else Se(e.CULL_FACE);F=W}function ze(W){if(W!==X){if(N)e.lineWidth(W);X=W}}function V(W,Ee,le){if(W){if(re(e.POLYGON_OFFSET_FILL),L!==Ee||G!==le){if(L=Ee,G=le,o.getReversed())Ee=-Ee;e.polygonOffset(Ee,le)}}else Se(e.POLYGON_OFFSET_FILL)}function ve(W){if(W)re(e.SCISSOR_TEST);else Se(e.SCISSOR_TEST)}function C(W){if(W===void 0)W=e.TEXTURE0+Z-1;if(z!==W)e.activeTexture(W),z=W}function Ge(W,Ee,le){if(le===void 0)if(z===null)le=e.TEXTURE0+Z-1;else le=z;let Re=H[le];if(Re===void 0)Re={type:void 0,texture:void 0},H[le]=Re;if(Re.type!==W||Re.texture!==Ee){if(z!==le)e.activeTexture(le),z=le;e.bindTexture(W,Ee||xe[W]),Re.type=W,Re.texture=Ee}}function we(){let W=H[z];if(W!==void 0&&W.type!==void 0)e.bindTexture(W.type,null),W.type=void 0,W.texture=void 0}function et(){try{e.compressedTexImage2D(...arguments)}catch(W){rt("WebGLState:",W)}}function M(){try{e.compressedTexImage3D(...arguments)}catch(W){rt("WebGLState:",W)}}function y(){try{e.texSubImage2D(...arguments)}catch(W){rt("WebGLState:",W)}}function U(){try{e.texSubImage3D(...arguments)}catch(W){rt("WebGLState:",W)}}function J(){try{e.compressedTexSubImage2D(...arguments)}catch(W){rt("WebGLState:",W)}}function he(){try{e.compressedTexSubImage3D(...arguments)}catch(W){rt("WebGLState:",W)}}function q(){try{e.texStorage2D(...arguments)}catch(W){rt("WebGLState:",W)}}function ee(){try{e.texStorage3D(...arguments)}catch(W){rt("WebGLState:",W)}}function K(){try{e.texImage2D(...arguments)}catch(W){rt("WebGLState:",W)}}function te(){try{e.texImage3D(...arguments)}catch(W){rt("WebGLState:",W)}}function Q(W){if(d[W]!==void 0)return d[W];else return e.getParameter(W)}function ce(W,Ee){if(d[W]!==Ee)e.pixelStorei(W,Ee),d[W]=Ee}function de(W){if(We.equals(W)===!1)e.scissor(W.x,W.y,W.z,W.w),We.copy(W)}function ge(W){if(Ie.equals(W)===!1)e.viewport(W.x,W.y,W.z,W.w),Ie.copy(W)}function ke(W,Ee){let le=c.get(Ee);if(le===void 0)le=new WeakMap,c.set(Ee,le);let Re=le.get(W);if(Re===void 0)Re=e.getUniformBlockIndex(Ee,W.name),le.set(W,Re)}function He(W,Ee){let Re=c.get(Ee).get(W);if(l.get(Ee)!==Re)e.uniformBlockBinding(Ee,Re,W.__bindingPointIndex),l.set(Ee,Re)}function qe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},z=null,H={},h={},f=new WeakMap,x=[],v=null,m=!1,p=null,A=null,R=null,b=null,w=null,T=null,P=null,g=new at(0,0,0),_=0,D=!1,I=null,F=null,X=null,L=null,G=null,We.set(0,0,e.canvas.width,e.canvas.height),Ie.set(0,0,e.canvas.width,e.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:re,disable:Se,bindFramebuffer:Ae,drawBuffers:me,useProgram:Te,setBlending:Je,setMaterial:Ke,setFlipSided:dt,setCullFace:Me,setLineWidth:ze,setPolygonOffset:V,setScissorTest:ve,activeTexture:C,bindTexture:Ge,unbindTexture:we,compressedTexImage2D:et,compressedTexImage3D:M,texImage2D:K,texImage3D:te,pixelStorei:ce,getParameter:Q,updateUBOMapping:ke,uniformBlockBinding:He,texStorage2D:q,texStorage3D:ee,texSubImage2D:y,texSubImage3D:U,compressedTexSubImage2D:J,compressedTexSubImage3D:he,scissor:de,viewport:ge,reset:qe}}function w_(e,t,n,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $e,u=new WeakMap,d=new Set,h,f=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(M){}function v(M,y){return x?new OffscreenCanvas(M,y):er("canvas")}function m(M,y,U){let J=1,he=et(M);if(he.width>U||he.height>U)J=U/Math.max(he.width,he.height);if(J<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){let q=Math.floor(J*he.width),ee=Math.floor(J*he.height);if(h===void 0)h=v(q,ee);let K=y?v(q,ee):h;return K.width=q,K.height=ee,K.getContext("2d").drawImage(M,0,0,q,ee),it("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+q+"x"+ee+")."),K}else{if("data"in M)it("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+").");return M}return M}function p(M){return M.generateMipmaps}function A(M){e.generateMipmap(M)}function R(M){if(M.isWebGLCubeRenderTarget)return e.TEXTURE_CUBE_MAP;if(M.isWebGL3DRenderTarget)return e.TEXTURE_3D;if(M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture)return e.TEXTURE_2D_ARRAY;return e.TEXTURE_2D}function b(M,y,U,J,he,q=!1){if(M!==null){if(e[M]!==void 0)return e[M];it("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let ee;if(J){if(ee=t.get("EXT_texture_norm16"),!ee)it("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let K=y;if(y===e.RED){if(U===e.FLOAT)K=e.R32F;if(U===e.HALF_FLOAT)K=e.R16F;if(U===e.UNSIGNED_BYTE)K=e.R8;if(U===e.UNSIGNED_SHORT&&ee)K=ee.R16_EXT;if(U===e.SHORT&&ee)K=ee.R16_SNORM_EXT}if(y===e.RED_INTEGER){if(U===e.UNSIGNED_BYTE)K=e.R8UI;if(U===e.UNSIGNED_SHORT)K=e.R16UI;if(U===e.UNSIGNED_INT)K=e.R32UI;if(U===e.BYTE)K=e.R8I;if(U===e.SHORT)K=e.R16I;if(U===e.INT)K=e.R32I}if(y===e.RG){if(U===e.FLOAT)K=e.RG32F;if(U===e.HALF_FLOAT)K=e.RG16F;if(U===e.UNSIGNED_BYTE)K=e.RG8;if(U===e.UNSIGNED_SHORT&&ee)K=ee.RG16_EXT;if(U===e.SHORT&&ee)K=ee.RG16_SNORM_EXT}if(y===e.RG_INTEGER){if(U===e.UNSIGNED_BYTE)K=e.RG8UI;if(U===e.UNSIGNED_SHORT)K=e.RG16UI;if(U===e.UNSIGNED_INT)K=e.RG32UI;if(U===e.BYTE)K=e.RG8I;if(U===e.SHORT)K=e.RG16I;if(U===e.INT)K=e.RG32I}if(y===e.RGB_INTEGER){if(U===e.UNSIGNED_BYTE)K=e.RGB8UI;if(U===e.UNSIGNED_SHORT)K=e.RGB16UI;if(U===e.UNSIGNED_INT)K=e.RGB32UI;if(U===e.BYTE)K=e.RGB8I;if(U===e.SHORT)K=e.RGB16I;if(U===e.INT)K=e.RGB32I}if(y===e.RGBA_INTEGER){if(U===e.UNSIGNED_BYTE)K=e.RGBA8UI;if(U===e.UNSIGNED_SHORT)K=e.RGBA16UI;if(U===e.UNSIGNED_INT)K=e.RGBA32UI;if(U===e.BYTE)K=e.RGBA8I;if(U===e.SHORT)K=e.RGBA16I;if(U===e.INT)K=e.RGBA32I}if(y===e.RGB){if(U===e.UNSIGNED_SHORT&&ee)K=ee.RGB16_EXT;if(U===e.SHORT&&ee)K=ee.RGB16_SNORM_EXT;if(U===e.UNSIGNED_INT_5_9_9_9_REV)K=e.RGB9_E5;if(U===e.UNSIGNED_INT_10F_11F_11F_REV)K=e.R11F_G11F_B10F}if(y===e.RGBA){let te=q?bl:pt.getTransfer(he);if(U===e.FLOAT)K=e.RGBA32F;if(U===e.HALF_FLOAT)K=e.RGBA16F;if(U===e.UNSIGNED_BYTE)K=te===Ct?e.SRGB8_ALPHA8:e.RGBA8;if(U===e.UNSIGNED_SHORT&&ee)K=ee.RGBA16_EXT;if(U===e.SHORT&&ee)K=ee.RGBA16_SNORM_EXT;if(U===e.UNSIGNED_SHORT_4_4_4_4)K=e.RGBA4;if(U===e.UNSIGNED_SHORT_5_5_5_1)K=e.RGB5_A1}if(K===e.R16F||K===e.R32F||K===e.RG16F||K===e.RG32F||K===e.RGBA16F||K===e.RGBA32F)t.get("EXT_color_buffer_float");return K}function w(M,y){let U;if(M){if(y===null||y===Ei||y===Ts)U=e.DEPTH24_STENCIL8;else if(y===hi)U=e.DEPTH32F_STENCIL8;else if(y===dr)U=e.DEPTH24_STENCIL8,it("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(y===null||y===Ei||y===Ts)U=e.DEPTH_COMPONENT24;else if(y===hi)U=e.DEPTH_COMPONENT32F;else if(y===dr)U=e.DEPTH_COMPONENT16;return U}function T(M,y){if(p(M)===!0||M.isFramebufferTexture&&M.minFilter!==Vn&&M.minFilter!==rn)return Math.log2(Math.max(y.width,y.height))+1;else if(M.mipmaps!==void 0&&M.mipmaps.length>0)return M.mipmaps.length;else if(M.isCompressedTexture&&Array.isArray(M.image))return y.mipmaps.length;else return 1}function P(M){let y=M.target;if(y.removeEventListener("dispose",P),_(y),y.isVideoTexture)u.delete(y);if(y.isHTMLTexture)d.delete(y)}function g(M){let y=M.target;y.removeEventListener("dispose",g),I(y)}function _(M){let y=i.get(M);if(y.__webglInit===void 0)return;let U=M.source,J=f.get(U);if(J){let he=J[y.__cacheKey];if(he.usedTimes--,he.usedTimes===0)D(M);if(Object.keys(J).length===0)f.delete(U)}i.remove(M)}function D(M){let y=i.get(M);e.deleteTexture(y.__webglTexture);let U=M.source,J=f.get(U);delete J[y.__cacheKey],o.memory.textures--}function I(M){let y=i.get(M);if(M.depthTexture)M.depthTexture.dispose(),i.remove(M.depthTexture);if(M.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(y.__webglFramebuffer[J]))for(let he=0;he<y.__webglFramebuffer[J].length;he++)e.deleteFramebuffer(y.__webglFramebuffer[J][he]);else e.deleteFramebuffer(y.__webglFramebuffer[J]);if(y.__webglDepthbuffer)e.deleteRenderbuffer(y.__webglDepthbuffer[J])}else{if(Array.isArray(y.__webglFramebuffer))for(let J=0;J<y.__webglFramebuffer.length;J++)e.deleteFramebuffer(y.__webglFramebuffer[J]);else e.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer)e.deleteRenderbuffer(y.__webglDepthbuffer);if(y.__webglMultisampledFramebuffer)e.deleteFramebuffer(y.__webglMultisampledFramebuffer);if(y.__webglColorRenderbuffer){for(let J=0;J<y.__webglColorRenderbuffer.length;J++)if(y.__webglColorRenderbuffer[J])e.deleteRenderbuffer(y.__webglColorRenderbuffer[J])}if(y.__webglDepthRenderbuffer)e.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let U=M.textures;for(let J=0,he=U.length;J<he;J++){let q=i.get(U[J]);if(q.__webglTexture)e.deleteTexture(q.__webglTexture),o.memory.textures--;i.remove(U[J])}i.remove(M)}let F=0;function X(){F=0}function L(){return F}function G(M){F=M}function Z(){let M=F;if(M>=s.maxTextures)it("WebGLTextures: Trying to use "+(M+1)+" texture units while this GPU supports only "+s.maxTextures);return F+=1,M}function N(M){let y=[];return y.push(M.wrapS),y.push(M.wrapT),y.push(M.wrapR||0),y.push(M.magFilter),y.push(M.minFilter),y.push(M.anisotropy),y.push(M.internalFormat),y.push(M.format),y.push(M.type),y.push(M.generateMipmaps),y.push(M.premultiplyAlpha),y.push(M.flipY),y.push(M.unpackAlignment),y.push(M.colorSpace),y.join()}function ie(M,y){let U=i.get(M);if(M.isVideoTexture)Ge(M);if(M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&U.__version!==M.version){let J=M.image;if(J===null)it("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)it("WebGLRenderer: Texture marked for update but image is incomplete");else{Se(U,M,y);return}}else if(M.isExternalTexture)U.__webglTexture=M.sourceTexture?M.sourceTexture:null;n.bindTexture(e.TEXTURE_2D,U.__webglTexture,e.TEXTURE0+y)}function O(M,y){let U=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&U.__version!==M.version){Se(U,M,y);return}else if(M.isExternalTexture)U.__webglTexture=M.sourceTexture?M.sourceTexture:null;n.bindTexture(e.TEXTURE_2D_ARRAY,U.__webglTexture,e.TEXTURE0+y)}function z(M,y){let U=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&U.__version!==M.version){Se(U,M,y);return}n.bindTexture(e.TEXTURE_3D,U.__webglTexture,e.TEXTURE0+y)}function H(M,y){let U=i.get(M);if(M.isCubeDepthTexture!==!0&&M.version>0&&U.__version!==M.version){Ae(U,M,y);return}n.bindTexture(e.TEXTURE_CUBE_MAP,U.__webglTexture,e.TEXTURE0+y)}let fe={[gu]:e.REPEAT,[co]:e.CLAMP_TO_EDGE,[xu]:e.MIRRORED_REPEAT},pe={[Vn]:e.NEAREST,[vu]:e.NEAREST_MIPMAP_NEAREST,[ur]:e.NEAREST_MIPMAP_LINEAR,[rn]:e.LINEAR,[ho]:e.LINEAR_MIPMAP_NEAREST,[zi]:e.LINEAR_MIPMAP_LINEAR},We={[Eu]:e.NEVER,[Lu]:e.ALWAYS,[Cu]:e.LESS,[vo]:e.LEQUAL,[Ru]:e.EQUAL,[_o]:e.GEQUAL,[Pu]:e.GREATER,[Iu]:e.NOTEQUAL};function Ie(M,y){if(y.type===hi&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===rn||y.magFilter===ho||y.magFilter===ur||y.magFilter===zi||y.minFilter===rn||y.minFilter===ho||y.minFilter===ur||y.minFilter===zi))it("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(e.texParameteri(M,e.TEXTURE_WRAP_S,fe[y.wrapS]),e.texParameteri(M,e.TEXTURE_WRAP_T,fe[y.wrapT]),M===e.TEXTURE_3D||M===e.TEXTURE_2D_ARRAY)e.texParameteri(M,e.TEXTURE_WRAP_R,fe[y.wrapR]);if(e.texParameteri(M,e.TEXTURE_MAG_FILTER,pe[y.magFilter]),e.texParameteri(M,e.TEXTURE_MIN_FILTER,pe[y.minFilter]),y.compareFunction)e.texParameteri(M,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(M,e.TEXTURE_COMPARE_FUNC,We[y.compareFunction]);if(t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Vn)return;if(y.minFilter!==ur&&y.minFilter!==zi)return;if(y.type===hi&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let U=t.get("EXT_texture_filter_anisotropic");e.texParameterf(M,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function j(M,y){let U=!1;if(M.__webglInit===void 0)M.__webglInit=!0,y.addEventListener("dispose",P);let J=y.source,he=f.get(J);if(he===void 0)he={},f.set(J,he);let q=N(y);if(q!==M.__cacheKey){if(he[q]===void 0)he[q]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,U=!0;he[q].usedTimes++;let ee=he[M.__cacheKey];if(ee!==void 0){if(he[M.__cacheKey].usedTimes--,ee.usedTimes===0)D(y)}M.__cacheKey=q,M.__webglTexture=he[q].texture}return U}function xe(M,y,U){return Math.floor(Math.floor(M/U)/y)}function re(M,y,U,J){let q=M.updateRanges;if(q.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,y.width,y.height,U,J,y.data);else{q.sort((ce,de)=>ce.start-de.start);let ee=0;for(let ce=1;ce<q.length;ce++){let de=q[ee],ge=q[ce],ke=de.start+de.count,He=xe(ge.start,y.width,4),qe=xe(de.start,y.width,4);if(ge.start<=ke+1&&He===qe&&xe(ge.start+ge.count-1,y.width,4)===He)de.count=Math.max(de.count,ge.start+ge.count-de.start);else++ee,q[ee]=ge}q.length=ee+1;let K=n.getParameter(e.UNPACK_ROW_LENGTH),te=n.getParameter(e.UNPACK_SKIP_PIXELS),Q=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,y.width);for(let ce=0,de=q.length;ce<de;ce++){let ge=q[ce],ke=Math.floor(ge.start/4),He=Math.ceil(ge.count/4),qe=ke%y.width,W=Math.floor(ke/y.width),Ee=He,le=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,qe),n.pixelStorei(e.UNPACK_SKIP_ROWS,W),n.texSubImage2D(e.TEXTURE_2D,0,qe,W,Ee,1,U,J,y.data)}M.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,K),n.pixelStorei(e.UNPACK_SKIP_PIXELS,te),n.pixelStorei(e.UNPACK_SKIP_ROWS,Q)}}function Se(M,y,U){let J=e.TEXTURE_2D;if(y.isDataArrayTexture||y.isCompressedArrayTexture)J=e.TEXTURE_2D_ARRAY;if(y.isData3DTexture)J=e.TEXTURE_3D;let he=j(M,y),q=y.source;n.bindTexture(J,M.__webglTexture,e.TEXTURE0+U);let ee=i.get(q);if(q.version!==ee.__version||he===!0){if(n.activeTexture(e.TEXTURE0+U),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let le=pt.getPrimaries(pt.workingColorSpace),Re=y.colorSpace===Vi?null:pt.getPrimaries(y.colorSpace),Be=y.colorSpace===Vi||le===Re?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be)}n.pixelStorei(e.UNPACK_ALIGNMENT,y.unpackAlignment);let te=m(y.image,!1,s.maxTextureSize);te=we(y,te);let Q=r.convert(y.format,y.colorSpace),ce=r.convert(y.type),de=b(y.internalFormat,Q,ce,y.normalized,y.colorSpace,y.isVideoTexture);Ie(J,y);let ge,ke=y.mipmaps,He=y.isVideoTexture!==!0,qe=ee.__version===void 0||he===!0,W=q.dataReady,Ee=T(y,te);if(y.isDepthTexture){if(de=w(y.format===Gi,y.type),qe)if(He)n.texStorage2D(e.TEXTURE_2D,1,de,te.width,te.height);else n.texImage2D(e.TEXTURE_2D,0,de,te.width,te.height,0,Q,ce,null)}else if(y.isDataTexture)if(ke.length>0){if(He&&qe)n.texStorage2D(e.TEXTURE_2D,Ee,de,ke[0].width,ke[0].height);for(let le=0,Re=ke.length;le<Re;le++)if(ge=ke[le],He){if(W)n.texSubImage2D(e.TEXTURE_2D,le,0,0,ge.width,ge.height,Q,ce,ge.data)}else n.texImage2D(e.TEXTURE_2D,le,de,ge.width,ge.height,0,Q,ce,ge.data);y.generateMipmaps=!1}else if(He){if(qe)n.texStorage2D(e.TEXTURE_2D,Ee,de,te.width,te.height);if(W)re(y,te,Q,ce)}else n.texImage2D(e.TEXTURE_2D,0,de,te.width,te.height,0,Q,ce,te.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){if(He&&qe)n.texStorage3D(e.TEXTURE_2D_ARRAY,Ee,de,ke[0].width,ke[0].height,te.depth);for(let le=0,Re=ke.length;le<Re;le++)if(ge=ke[le],y.format!==Fn)if(Q!==null)if(He){if(W)if(y.layerUpdates.size>0){let Be=$l(ge.width,ge.height,y.format,y.type);for(let E of y.layerUpdates){let k=ge.data.subarray(E*Be/ge.data.BYTES_PER_ELEMENT,(E+1)*Be/ge.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,le,0,0,E,ge.width,ge.height,1,Q,k)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,le,0,0,0,ge.width,ge.height,te.depth,Q,ge.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,le,de,ge.width,ge.height,te.depth,0,ge.data,0,0);else it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(He){if(W)n.texSubImage3D(e.TEXTURE_2D_ARRAY,le,0,0,0,ge.width,ge.height,te.depth,Q,ce,ge.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,le,de,ge.width,ge.height,te.depth,0,Q,ce,ge.data);if(y.layerUpdates.size>0)y.clearLayerUpdates()}else{if(He&&qe)n.texStorage2D(e.TEXTURE_2D,Ee,de,ke[0].width,ke[0].height);for(let le=0,Re=ke.length;le<Re;le++)if(ge=ke[le],y.format!==Fn)if(Q!==null)if(He){if(W)n.compressedTexSubImage2D(e.TEXTURE_2D,le,0,0,ge.width,ge.height,Q,ge.data)}else n.compressedTexImage2D(e.TEXTURE_2D,le,de,ge.width,ge.height,0,ge.data);else it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(He){if(W)n.texSubImage2D(e.TEXTURE_2D,le,0,0,ge.width,ge.height,Q,ce,ge.data)}else n.texImage2D(e.TEXTURE_2D,le,de,ge.width,ge.height,0,Q,ce,ge.data)}else if(y.isDataArrayTexture)if(He){if(qe)n.texStorage3D(e.TEXTURE_2D_ARRAY,Ee,de,te.width,te.height,te.depth);if(W)if(y.layerUpdates.size>0){let le=$l(te.width,te.height,y.format,y.type);for(let Re of y.layerUpdates){let Be=te.data.subarray(Re*le/te.data.BYTES_PER_ELEMENT,(Re+1)*le/te.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Re,te.width,te.height,1,Q,ce,Be)}y.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,Q,ce,te.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,de,te.width,te.height,te.depth,0,Q,ce,te.data);else if(y.isData3DTexture)if(He){if(qe)n.texStorage3D(e.TEXTURE_3D,Ee,de,te.width,te.height,te.depth);if(W)n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,Q,ce,te.data)}else n.texImage3D(e.TEXTURE_3D,0,de,te.width,te.height,te.depth,0,Q,ce,te.data);else if(y.isFramebufferTexture){if(qe)if(He)n.texStorage2D(e.TEXTURE_2D,Ee,de,te.width,te.height);else{let le=te.width,Re=te.height;for(let Be=0;Be<Ee;Be++)n.texImage2D(e.TEXTURE_2D,Be,de,le,Re,0,Q,ce,null),le>>=1,Re>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in e){let le=e.canvas;if(!le.hasAttribute("layoutsubtree"))le.setAttribute("layoutsubtree","true");if(te.parentNode!==le){le.appendChild(te),d.add(y),le.onpaint=(Re)=>{let Be=Re.changedElements;for(let E of d)if(Be.includes(E.image))E.needsUpdate=!0},le.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,te);else{let{RGBA:Be,RGBA:E,UNSIGNED_BYTE:k}=e;e.texElementImage2D(e.TEXTURE_2D,0,Be,E,k,te)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(ke.length>0){if(He&&qe){let le=et(ke[0]);n.texStorage2D(e.TEXTURE_2D,Ee,de,le.width,le.height)}for(let le=0,Re=ke.length;le<Re;le++)if(ge=ke[le],He){if(W)n.texSubImage2D(e.TEXTURE_2D,le,0,0,Q,ce,ge)}else n.texImage2D(e.TEXTURE_2D,le,de,Q,ce,ge);y.generateMipmaps=!1}else if(He){if(qe){let le=et(te);n.texStorage2D(e.TEXTURE_2D,Ee,de,le.width,le.height)}if(W)n.texSubImage2D(e.TEXTURE_2D,0,0,0,Q,ce,te)}else n.texImage2D(e.TEXTURE_2D,0,de,Q,ce,te);if(p(y))A(J);if(ee.__version=q.version,y.onUpdate)y.onUpdate(y)}M.__version=y.version}function Ae(M,y,U){if(y.image.length!==6)return;let J=j(M,y),he=y.source;n.bindTexture(e.TEXTURE_CUBE_MAP,M.__webglTexture,e.TEXTURE0+U);let q=i.get(he);if(he.version!==q.__version||J===!0){n.activeTexture(e.TEXTURE0+U);let ee=pt.getPrimaries(pt.workingColorSpace),K=y.colorSpace===Vi?null:pt.getPrimaries(y.colorSpace),te=y.colorSpace===Vi||ee===K?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let Q=y.isCompressedTexture||y.image[0].isCompressedTexture,ce=y.image[0]&&y.image[0].isDataTexture,de=[];for(let E=0;E<6;E++){if(!Q&&!ce)de[E]=m(y.image[E],!0,s.maxCubemapSize);else de[E]=ce?y.image[E].image:y.image[E];de[E]=we(y,de[E])}let ge=de[0],ke=r.convert(y.format,y.colorSpace),He=r.convert(y.type),qe=b(y.internalFormat,ke,He,y.normalized,y.colorSpace),W=y.isVideoTexture!==!0,Ee=q.__version===void 0||J===!0,le=he.dataReady,Re=T(y,ge);Ie(e.TEXTURE_CUBE_MAP,y);let Be;if(Q){if(W&&Ee)n.texStorage2D(e.TEXTURE_CUBE_MAP,Re,qe,ge.width,ge.height);for(let E=0;E<6;E++){Be=de[E].mipmaps;for(let k=0;k<Be.length;k++){let ae=Be[k];if(y.format!==Fn)if(ke!==null)if(W){if(le)n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+E,k,0,0,ae.width,ae.height,ke,ae.data)}else n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+E,k,qe,ae.width,ae.height,0,ae.data);else it("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(W){if(le)n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+E,k,0,0,ae.width,ae.height,ke,He,ae.data)}else n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+E,k,qe,ae.width,ae.height,0,ke,He,ae.data)}}}else{if(Be=y.mipmaps,W&&Ee){if(Be.length>0)Re++;let E=et(de[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,Re,qe,E.width,E.height)}for(let E=0;E<6;E++)if(ce){if(W){if(le)n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+E,0,0,0,de[E].width,de[E].height,ke,He,de[E].data)}else n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+E,0,qe,de[E].width,de[E].height,0,ke,He,de[E].data);for(let k=0;k<Be.length;k++){let _e=Be[k].image[E].image;if(W){if(le)n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+E,k+1,0,0,_e.width,_e.height,ke,He,_e.data)}else n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+E,k+1,qe,_e.width,_e.height,0,ke,He,_e.data)}}else{if(W){if(le)n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+E,0,0,0,ke,He,de[E])}else n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+E,0,qe,ke,He,de[E]);for(let k=0;k<Be.length;k++){let ae=Be[k];if(W){if(le)n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+E,k+1,0,0,ke,He,ae.image[E])}else n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+E,k+1,qe,ke,He,ae.image[E])}}}if(p(y))A(e.TEXTURE_CUBE_MAP);if(q.__version=he.version,y.onUpdate)y.onUpdate(y)}M.__version=y.version}function me(M,y,U,J,he,q){let ee=r.convert(U.format,U.colorSpace),K=r.convert(U.type),te=b(U.internalFormat,ee,K,U.normalized,U.colorSpace),Q=i.get(y),ce=i.get(U);if(ce.__renderTarget=y,!Q.__hasExternalTextures){let de=Math.max(1,y.width>>q),ge=Math.max(1,y.height>>q);if(he===e.TEXTURE_3D||he===e.TEXTURE_2D_ARRAY)n.texImage3D(he,q,te,de,ge,y.depth,0,ee,K,null);else n.texImage2D(he,q,te,de,ge,0,ee,K,null)}if(n.bindFramebuffer(e.FRAMEBUFFER,M),C(y))a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,J,he,ce.__webglTexture,0,ve(y));else if(he===e.TEXTURE_2D||he>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)e.framebufferTexture2D(e.FRAMEBUFFER,J,he,ce.__webglTexture,q);n.bindFramebuffer(e.FRAMEBUFFER,null)}function Te(M,y,U){if(e.bindRenderbuffer(e.RENDERBUFFER,M),y.depthBuffer){let J=y.depthTexture,he=J&&J.isDepthTexture?J.type:null,q=w(y.stencilBuffer,he),ee=y.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(C(y))a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ve(y),q,y.width,y.height);else if(U)e.renderbufferStorageMultisample(e.RENDERBUFFER,ve(y),q,y.width,y.height);else e.renderbufferStorage(e.RENDERBUFFER,q,y.width,y.height);e.framebufferRenderbuffer(e.FRAMEBUFFER,ee,e.RENDERBUFFER,M)}else{let J=y.textures;for(let he=0;he<J.length;he++){let q=J[he],ee=r.convert(q.format,q.colorSpace),K=r.convert(q.type),te=b(q.internalFormat,ee,K,q.normalized,q.colorSpace);if(C(y))a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ve(y),te,y.width,y.height);else if(U)e.renderbufferStorageMultisample(e.RENDERBUFFER,ve(y),te,y.width,y.height);else e.renderbufferStorage(e.RENDERBUFFER,te,y.width,y.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ne(M,y,U){let J=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,M),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let he=i.get(y.depthTexture);if(he.__renderTarget=y,!he.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0;if(J){if(he.__webglInit===void 0)he.__webglInit=!0,y.depthTexture.addEventListener("dispose",P);if(he.__webglTexture===void 0){he.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,he.__webglTexture),Ie(e.TEXTURE_CUBE_MAP,y.depthTexture);let Q=r.convert(y.depthTexture.format),ce=r.convert(y.depthTexture.type),de;if(y.depthTexture.format===ki)de=e.DEPTH_COMPONENT24;else if(y.depthTexture.format===Gi)de=e.DEPTH24_STENCIL8;for(let ge=0;ge<6;ge++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,de,y.width,y.height,0,Q,ce,null)}}else ie(y.depthTexture,0);let q=he.__webglTexture,ee=ve(y),K=J?e.TEXTURE_CUBE_MAP_POSITIVE_X+U:e.TEXTURE_2D,te=y.depthTexture.format===Gi?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(y.depthTexture.format===ki)if(C(y))a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,te,K,q,0,ee);else e.framebufferTexture2D(e.FRAMEBUFFER,te,K,q,0);else if(y.depthTexture.format===Gi)if(C(y))a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,te,K,q,0,ee);else e.framebufferTexture2D(e.FRAMEBUFFER,te,K,q,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Le(M){let y=i.get(M),U=M.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==M.depthTexture){let J=M.depthTexture;if(y.__depthDisposeCallback)y.__depthDisposeCallback();if(J){let he=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,J.removeEventListener("dispose",he)};J.addEventListener("dispose",he),y.__depthDisposeCallback=he}y.__boundDepthTexture=J}if(M.depthTexture&&!y.__autoAllocateDepthBuffer)if(U)for(let J=0;J<6;J++)Ne(y.__webglFramebuffer[J],M,J);else{let J=M.texture.mipmaps;if(J&&J.length>0)Ne(y.__webglFramebuffer[0],M,0);else Ne(y.__webglFramebuffer,M,0)}else if(U){y.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(n.bindFramebuffer(e.FRAMEBUFFER,y.__webglFramebuffer[J]),y.__webglDepthbuffer[J]===void 0)y.__webglDepthbuffer[J]=e.createRenderbuffer(),Te(y.__webglDepthbuffer[J],M,!1);else{let he=M.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,q=y.__webglDepthbuffer[J];e.bindRenderbuffer(e.RENDERBUFFER,q),e.framebufferRenderbuffer(e.FRAMEBUFFER,he,e.RENDERBUFFER,q)}}else{let J=M.texture.mipmaps;if(J&&J.length>0)n.bindFramebuffer(e.FRAMEBUFFER,y.__webglFramebuffer[0]);else n.bindFramebuffer(e.FRAMEBUFFER,y.__webglFramebuffer);if(y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=e.createRenderbuffer(),Te(y.__webglDepthbuffer,M,!1);else{let he=M.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,q=y.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,q),e.framebufferRenderbuffer(e.FRAMEBUFFER,he,e.RENDERBUFFER,q)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Je(M,y,U){let J=i.get(M);if(y!==void 0)me(J.__webglFramebuffer,M,M.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0);if(U!==void 0)Le(M)}function Ke(M){let y=M.texture,U=i.get(M),J=i.get(y);M.addEventListener("dispose",g);let he=M.textures,q=M.isWebGLCubeRenderTarget===!0,ee=he.length>1;if(!ee){if(J.__webglTexture===void 0)J.__webglTexture=e.createTexture();J.__version=y.version,o.memory.textures++}if(q){U.__webglFramebuffer=[];for(let K=0;K<6;K++)if(y.mipmaps&&y.mipmaps.length>0){U.__webglFramebuffer[K]=[];for(let te=0;te<y.mipmaps.length;te++)U.__webglFramebuffer[K][te]=e.createFramebuffer()}else U.__webglFramebuffer[K]=e.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){U.__webglFramebuffer=[];for(let K=0;K<y.mipmaps.length;K++)U.__webglFramebuffer[K]=e.createFramebuffer()}else U.__webglFramebuffer=e.createFramebuffer();if(ee)for(let K=0,te=he.length;K<te;K++){let Q=i.get(he[K]);if(Q.__webglTexture===void 0)Q.__webglTexture=e.createTexture(),o.memory.textures++}if(M.samples>0&&C(M)===!1){U.__webglMultisampledFramebuffer=e.createFramebuffer(),U.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let K=0;K<he.length;K++){let te=he[K];U.__webglColorRenderbuffer[K]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,U.__webglColorRenderbuffer[K]);let Q=r.convert(te.format,te.colorSpace),ce=r.convert(te.type),de=b(te.internalFormat,Q,ce,te.normalized,te.colorSpace,M.isXRRenderTarget===!0),ge=ve(M);e.renderbufferStorageMultisample(e.RENDERBUFFER,ge,de,M.width,M.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+K,e.RENDERBUFFER,U.__webglColorRenderbuffer[K])}if(e.bindRenderbuffer(e.RENDERBUFFER,null),M.depthBuffer)U.__webglDepthRenderbuffer=e.createRenderbuffer(),Te(U.__webglDepthRenderbuffer,M,!0);n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(q){n.bindTexture(e.TEXTURE_CUBE_MAP,J.__webglTexture),Ie(e.TEXTURE_CUBE_MAP,y);for(let K=0;K<6;K++)if(y.mipmaps&&y.mipmaps.length>0)for(let te=0;te<y.mipmaps.length;te++)me(U.__webglFramebuffer[K][te],M,y,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+K,te);else me(U.__webglFramebuffer[K],M,y,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);if(p(y))A(e.TEXTURE_CUBE_MAP);n.unbindTexture()}else if(ee){for(let K=0,te=he.length;K<te;K++){let Q=he[K],ce=i.get(Q),de=e.TEXTURE_2D;if(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)de=M.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY;if(n.bindTexture(de,ce.__webglTexture),Ie(de,Q),me(U.__webglFramebuffer,M,Q,e.COLOR_ATTACHMENT0+K,de,0),p(Q))A(de)}n.unbindTexture()}else{let K=e.TEXTURE_2D;if(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)K=M.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY;if(n.bindTexture(K,J.__webglTexture),Ie(K,y),y.mipmaps&&y.mipmaps.length>0)for(let te=0;te<y.mipmaps.length;te++)me(U.__webglFramebuffer[te],M,y,e.COLOR_ATTACHMENT0,K,te);else me(U.__webglFramebuffer,M,y,e.COLOR_ATTACHMENT0,K,0);if(p(y))A(K);n.unbindTexture()}if(M.depthBuffer)Le(M)}function dt(M){let y=M.textures;for(let U=0,J=y.length;U<J;U++){let he=y[U];if(p(he)){let q=R(M),ee=i.get(he).__webglTexture;n.bindTexture(q,ee),A(q),n.unbindTexture()}}}let Me=[],ze=[];function V(M){if(M.samples>0){if(C(M)===!1){let{textures:y,width:U,height:J}=M,he=e.COLOR_BUFFER_BIT,q=M.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ee=i.get(M),K=y.length>1;if(K)for(let Q=0;Q<y.length;Q++)n.bindFramebuffer(e.FRAMEBUFFER,ee.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Q,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,ee.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Q,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,ee.__webglMultisampledFramebuffer);let te=M.texture.mipmaps;if(te&&te.length>0)n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ee.__webglFramebuffer[0]);else n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ee.__webglFramebuffer);for(let Q=0;Q<y.length;Q++){if(M.resolveDepthBuffer){if(M.depthBuffer)he|=e.DEPTH_BUFFER_BIT;if(M.stencilBuffer&&M.resolveStencilBuffer)he|=e.STENCIL_BUFFER_BIT}if(K){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ee.__webglColorRenderbuffer[Q]);let ce=i.get(y[Q]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,ce,0)}if(e.blitFramebuffer(0,0,U,J,0,0,U,J,he,e.NEAREST),l===!0){if(Me.length=0,ze.length=0,Me.push(e.COLOR_ATTACHMENT0+Q),M.depthBuffer&&M.storeMultisampledDepthBuffer===!1)Me.push(q),ze.push(q),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,ze);e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Me)}}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),K)for(let Q=0;Q<y.length;Q++){n.bindFramebuffer(e.FRAMEBUFFER,ee.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Q,e.RENDERBUFFER,ee.__webglColorRenderbuffer[Q]);let ce=i.get(y[Q]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,ee.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Q,e.TEXTURE_2D,ce,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ee.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.storeMultisampledDepthBuffer===!1&&l){let y=M.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[y])}}}function ve(M){return Math.min(s.maxSamples,M.samples)}function C(M){let y=i.get(M);return M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ge(M){let y=o.render.frame;if(u.get(M)!==y)u.set(M,y),M.update()}function we(M,y){let{colorSpace:U,format:J,type:he}=M;if(M.isCompressedTexture===!0||M.isVideoTexture===!0)return y;if(U!==Cs&&U!==Vi)if(pt.getTransfer(U)===Ct){if(J!==Fn||he!==An)it("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else rt("WebGLTextures: Unsupported texture color space:",U);return y}function et(M){if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement)c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height;else if(typeof VideoFrame<"u"&&M instanceof VideoFrame)c.width=M.displayWidth,c.height=M.displayHeight;else c.width=M.width,c.height=M.height;return c}this.allocateTextureUnit=Z,this.resetTextureUnits=X,this.getTextureUnits=L,this.setTextureUnits=G,this.setTexture2D=ie,this.setTexture2DArray=O,this.setTexture3D=z,this.setTextureCube=H,this.rebindTextures=Je,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=V,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=me,this.useMultisampledRTT=C,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function A_(e,t){function n(i,s=Vi){let r,o=pt.getTransfer(s);if(i===An)return e.UNSIGNED_BYTE;if(i===za)return e.UNSIGNED_SHORT_4_4_4_4;if(i===ka)return e.UNSIGNED_SHORT_5_5_5_1;if(i===bu)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Su)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===_u)return e.BYTE;if(i===yu)return e.SHORT;if(i===dr)return e.UNSIGNED_SHORT;if(i===Ba)return e.INT;if(i===Ei)return e.UNSIGNED_INT;if(i===hi)return e.FLOAT;if(i===en)return e.HALF_FLOAT;if(i===Mu)return e.ALPHA;if(i===wu)return e.RGB;if(i===Fn)return e.RGBA;if(i===ki)return e.DEPTH_COMPONENT;if(i===Gi)return e.DEPTH_STENCIL;if(i===Au)return e.RED;if(i===Ga)return e.RED_INTEGER;if(i===Hi)return e.RG;if(i===Ha)return e.RG_INTEGER;if(i===Va)return e.RGBA_INTEGER;if(i===uo||i===fo||i===po||i===mo)if(o===Ct)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===uo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===uo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===fo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===po)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===mo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Wa||i===Xa||i===qa||i===Ya)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Wa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Xa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===qa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ya)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Za||i===$a||i===Ja||i===Ka||i===Qa||i===go||i===ja)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Za||i===$a)return o===Ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ja)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ka)return r.COMPRESSED_R11_EAC;if(i===Qa)return r.COMPRESSED_SIGNED_R11_EAC;if(i===go)return r.COMPRESSED_RG11_EAC;if(i===ja)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===el||i===tl||i===nl||i===il||i===sl||i===rl||i===ol||i===al||i===ll||i===cl||i===hl||i===ul||i===dl||i===fl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===el)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===tl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===nl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===il)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===sl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===rl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ol)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===al)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ll)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===cl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===hl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ul)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===dl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===fl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===pl||i===ml||i===gl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===pl)return o===Ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ml)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===gl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===xl||i===vl||i===xo||i===_l)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===xl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===vl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===xo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===_l)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(i===Ts)return e.UNSIGNED_INT_24_8;return e[i]!==void 0?e[i]:null}return{convert:n}}var T_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,E_=`
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

}`;class _d{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ro(e.texture);if(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)this.depthNear=e.depthNear,this.depthFar=e.depthFar;this.texture=n}}getMesh(e){if(this.texture!==null){if(this.mesh===null){let t=e.cameras[0].viewport,n=new Qe({vertexShader:T_,fragmentShader:E_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ct(new dn(20,20),n)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yd extends ui{constructor(e,t){super();let n=this,i=null,s=1,r=null,o="local-floor",a=1,l=null,c=null,u=null,d=null,h=null,f=null,x=typeof XRWebGLBinding<"u",v=new _d,m={},p=t.getContextAttributes(),A=null,R=null,b=[],w=[],T=new $e,P=null,g=null,_=new vn;_.viewport=new Ft;let D=new vn;D.viewport=new Ft;let I=[_,D],F=new Xl,X=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let xe=b[j];if(xe===void 0)xe=new pr,b[j]=xe;return xe.getTargetRaySpace()},this.getControllerGrip=function(j){let xe=b[j];if(xe===void 0)xe=new pr,b[j]=xe;return xe.getGripSpace()},this.getHand=function(j){let xe=b[j];if(xe===void 0)xe=new pr,b[j]=xe;return xe.getHandSpace()};function G(j){let xe=w.indexOf(j.inputSource);if(xe===-1)return;let re=b[xe];if(re!==void 0)re.update(j.inputSource,j.frame,l||r),re.dispatchEvent({type:j.type,data:j.inputSource})}function Z(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",Z),i.removeEventListener("inputsourceschange",N);for(let j=0;j<b.length;j++){let xe=w[j];if(xe===null)continue;w[j]=null,b[j].disconnect(xe)}X=null,L=null,v.reset();for(let j in m)delete m[j];if(e.setRenderTarget(A),h=null,d=null,u=null,i=null,R=null,Ie.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(T.width,T.height,!1),g!==null){let j=g.camera;j.fov=g.fov,j.zoom=g.zoom,j.updateProjectionMatrix(),g=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){if(s=j,n.isPresenting===!0)it("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){if(o=j,n.isPresenting===!0)it("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){if(u===null&&x)u=new XRWebGLBinding(i,t);return u},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(A=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",Z),i.addEventListener("inputsourceschange",N),p.xrCompatible!==!0)await t.makeXRCompatible();if(P=e.getPixelRatio(),e.getSize(T),!(x&&("createProjectionLayer"in XRWebGLBinding.prototype))){let re={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,t,re),i.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),R=new Vt(h.framebufferWidth,h.framebufferHeight,{format:Fn,type:An,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let re=null,Se=null,Ae=null;if(p.depth)Ae=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=p.stencil?Gi:ki,Se=p.stencil?Ts:Ei;let me={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(me),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),R=new Vt(d.textureWidth,d.textureHeight,{format:Fn,type:An,depthTexture:new Xi(d.textureWidth,d.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(a),l=null,r=await i.requestReferenceSpace(o),Ie.setContext(i),Ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function N(j){for(let xe=0;xe<j.removed.length;xe++){let re=j.removed[xe],Se=w.indexOf(re);if(Se>=0)w[Se]=null,b[Se].disconnect(re)}for(let xe=0;xe<j.added.length;xe++){let re=j.added[xe],Se=w.indexOf(re);if(Se===-1){for(let me=0;me<b.length;me++)if(me>=w.length){w.push(re),Se=me;break}else if(w[me]===null){w[me]=re,Se=me;break}if(Se===-1)break}let Ae=b[Se];if(Ae)Ae.connect(re)}}let ie=new B,O=new B;function z(j,xe,re){ie.setFromMatrixPosition(xe.matrixWorld),O.setFromMatrixPosition(re.matrixWorld);let Se=ie.distanceTo(O),Ae=xe.projectionMatrix.elements,me=re.projectionMatrix.elements,Te=Ae[14]/(Ae[10]-1),Ne=Ae[14]/(Ae[10]+1),Le=(Ae[9]+1)/Ae[5],Je=(Ae[9]-1)/Ae[5],Ke=(Ae[8]-1)/Ae[0],dt=(me[8]+1)/me[0],Me=Te*Ke,ze=Te*dt,V=Se/(-Ke+dt),ve=V*-Ke;if(xe.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ve),j.translateZ(V),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ae[10]===-1)j.projectionMatrix.copy(xe.projectionMatrix),j.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{let C=Te+V,Ge=Ne+V,we=Me-ve,et=ze+(Se-ve),M=Le*Ne/Ge*C,y=Je*Ne/Ge*C;j.projectionMatrix.makePerspective(we,et,M,y,C,Ge),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function H(j,xe){if(xe===null)j.matrixWorld.copy(j.matrix);else j.matrixWorld.multiplyMatrices(xe.matrixWorld,j.matrix);j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let{near:xe,far:re}=j;if(v.texture!==null){if(v.depthNear>0)xe=v.depthNear;if(v.depthFar>0)re=v.depthFar}if(F.near=D.near=_.near=xe,F.far=D.far=_.far=re,X!==F.near||L!==F.far)i.updateRenderState({depthNear:F.near,depthFar:F.far}),X=F.near,L=F.far;F.layers.mask=j.layers.mask|6,_.layers.mask=F.layers.mask&-5,D.layers.mask=F.layers.mask&-3;let Se=j.parent,Ae=F.cameras;H(F,Se);for(let me=0;me<Ae.length;me++)H(Ae[me],Se);if(Ae.length===2)z(F,_,D);else F.projectionMatrix.copy(_.projectionMatrix);if(g===null&&j.isPerspectiveCamera)g={camera:j,fov:j.fov,zoom:j.zoom};fe(j,F,Se)};function fe(j,xe,re){if(re===null)j.matrix.copy(xe.matrixWorld);else j.matrix.copy(re.matrixWorld),j.matrix.invert(),j.matrix.multiply(xe.matrixWorld);if(j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(xe.projectionMatrix),j.projectionMatrixInverse.copy(xe.projectionMatrixInverse),j.isPerspectiveCamera)j.fov=so*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1}this.getCamera=function(){return F},this.getFoveation=function(){if(d===null&&h===null)return;return a},this.setFoveation=function(j){if(a=j,d!==null)d.fixedFoveation=j;if(h!==null&&h.fixedFoveation!==void 0)h.fixedFoveation=j},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(F)},this.getCameraTexture=function(j){return m[j]};let pe=null;function We(j,xe){if(c=xe.getViewerPose(l||r),f=xe,c!==null){let re=c.views;if(h!==null)e.setRenderTargetFramebuffer(R,h.framebuffer),e.setRenderTarget(R);let Se=!1;if(re.length!==F.cameras.length)F.cameras.length=0,Se=!0;for(let Ne=0;Ne<re.length;Ne++){let Le=re[Ne],Je=null;if(h!==null)Je=h.getViewport(Le);else{let dt=u.getViewSubImage(d,Le);if(Je=dt.viewport,Ne===0)e.setRenderTargetTextures(R,dt.colorTexture,dt.depthStencilTexture),e.setRenderTarget(R)}let Ke=I[Ne];if(Ke===void 0)Ke=new vn,Ke.layers.enable(Ne),Ke.viewport=new Ft,I[Ne]=Ke;if(Ke.matrix.fromArray(Le.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(Le.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(Je.x,Je.y,Je.width,Je.height),Ne===0)F.matrix.copy(Ke.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale);if(Se===!0)F.cameras.push(Ke)}let Ae=i.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let Ne=u.getDepthInformation(re[0]);if(Ne&&Ne.isValid&&Ne.texture)v.init(Ne,i.renderState)}if(Ae&&Ae.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let Ne=0;Ne<re.length;Ne++){let Le=re[Ne].camera;if(Le){let Je=m[Le];if(!Je)Je=new Ro,m[Le]=Je;let Ke=u.getCameraImage(Le);Je.sourceTexture=Ke}}}}for(let re=0;re<b.length;re++){let Se=w[re],Ae=b[re];if(Se!==null&&Ae!==void 0)Ae.update(Se,xe,l||r)}if(pe)pe(j,xe);if(xe.detectedPlanes)n.dispatchEvent({type:"planesdetected",data:xe});f=null}let Ie=new ld;Ie.setAnimationLoop(We),this.setAnimationLoop=function(j){pe=j},this.dispose=function(){}}}var C_=new Bt,bd=new ht;bd.set(-1,0,0,0,1,0,0,0,1);function R_(e,t){function n(m,p){if(m.matrixAutoUpdate===!0)m.updateMatrix();p.value.copy(m.matrix)}function i(m,p){if(p.color.getRGB(m.fogColor.value,Il(e)),p.isFog)m.fogNear.value=p.near,m.fogFar.value=p.far;else if(p.isFogExp2)m.fogDensity.value=p.density}function s(m,p,A,R,b){if(p.isNodeMaterial)p.uniformsNeedUpdate=!1;else if(p.isMeshBasicMaterial)r(m,p);else if(p.isMeshLambertMaterial){if(r(m,p),p.envMap)m.envMapIntensity.value=p.envMapIntensity}else if(p.isMeshToonMaterial)r(m,p),d(m,p);else if(p.isMeshPhongMaterial){if(r(m,p),u(m,p),p.envMap)m.envMapIntensity.value=p.envMapIntensity}else if(p.isMeshStandardMaterial){if(r(m,p),h(m,p),p.isMeshPhysicalMaterial)f(m,p,b)}else if(p.isMeshMatcapMaterial)r(m,p),x(m,p);else if(p.isMeshDepthMaterial)r(m,p);else if(p.isMeshDistanceMaterial)r(m,p),v(m,p);else if(p.isMeshNormalMaterial)r(m,p);else if(p.isLineBasicMaterial){if(o(m,p),p.isLineDashedMaterial)a(m,p)}else if(p.isPointsMaterial)l(m,p,A,R);else if(p.isSpriteMaterial)c(m,p);else if(p.isShadowMaterial)m.color.value.copy(p.color),m.opacity.value=p.opacity;else if(p.isShaderMaterial)p.uniformsNeedUpdate=!1}function r(m,p){if(m.opacity.value=p.opacity,p.color)m.diffuse.value.copy(p.color);if(p.emissive)m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity);if(p.map)m.map.value=p.map,n(p.map,m.mapTransform);if(p.alphaMap)m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform);if(p.bumpMap){if(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===hn)m.bumpScale.value*=-1}if(p.normalMap){if(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===hn)m.normalScale.value.negate()}if(p.displacementMap)m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias;if(p.emissiveMap)m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform);if(p.specularMap)m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform);if(p.alphaTest>0)m.alphaTest.value=p.alphaTest;let A=t.get(p),{envMap:R,envMapRotation:b}=A;if(R){if(m.envMap.value=R,m.envMapRotation.value.setFromMatrix4(C_.makeRotationFromEuler(b)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1)m.envMapRotation.value.premultiply(bd);m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio}if(p.lightMap)m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform);if(p.aoMap)m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform)}function o(m,p){if(m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map)m.map.value=p.map,n(p.map,m.mapTransform)}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,A,R){if(m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=R*0.5,p.map)m.map.value=p.map,n(p.map,m.uvTransform);if(p.alphaMap)m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform);if(p.alphaTest>0)m.alphaTest.value=p.alphaTest}function c(m,p){if(m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map)m.map.value=p.map,n(p.map,m.mapTransform);if(p.alphaMap)m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform);if(p.alphaTest>0)m.alphaTest.value=p.alphaTest}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,0.0001)}function d(m,p){if(p.gradientMap)m.gradientMap.value=p.gradientMap}function h(m,p){if(m.metalness.value=p.metalness,p.metalnessMap)m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform);if(m.roughness.value=p.roughness,p.roughnessMap)m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform);if(p.envMap)m.envMapIntensity.value=p.envMapIntensity}function f(m,p,A){if(m.ior.value=p.ior,p.sheen>0){if(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap)m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform);if(p.sheenRoughnessMap)m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform)}if(p.clearcoat>0){if(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap)m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform);if(p.clearcoatRoughnessMap)m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform);if(p.clearcoatNormalMap){if(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===hn)m.clearcoatNormalScale.value.negate()}}if(p.dispersion>0)m.dispersion.value=p.dispersion;if(p.retroreflectivity>0)m.retroreflectivity.value=p.retroreflectivity;if(p.iridescence>0){if(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap)m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform);if(p.iridescenceThicknessMap)m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform)}if(p.transmission>0){if(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap)m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform);if(m.thickness.value=p.thickness,p.thicknessMap)m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform);m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)}if(p.anisotropy>0){if(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap)m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform)}if(m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap)m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform);if(p.specularIntensityMap)m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform)}function x(m,p){if(p.matcap)m.matcap.value=p.matcap}function v(m,p){let A=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function P_(e,t,n,i){let s={},r={},o=[],a=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,w){let T=w.program;i.uniformBlockBinding(b,T)}function c(b,w){let T=s[b.id];if(T===void 0)m(b),T=u(b),s[b.id]=T,b.addEventListener("dispose",A);let P=w.program;i.updateUBOMapping(b,P);let g=t.render.frame;if(r[b.id]!==g)h(b),r[b.id]=g}function u(b){let w=d();b.__bindingPointIndex=w;let T=e.createBuffer(),{__size:P,usage:g}=b;return e.bindBuffer(e.UNIFORM_BUFFER,T),e.bufferData(e.UNIFORM_BUFFER,P,g),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,w,T),T}function d(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){let w=s[b.id],{uniforms:T,__cache:P}=b;e.bindBuffer(e.UNIFORM_BUFFER,w);for(let g=0,_=T.length;g<_;g++){let D=T[g];if(Array.isArray(D))for(let I=0,F=D.length;I<F;I++)f(D[I],g,I,P);else f(D,g,0,P)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function f(b,w,T,P){if(v(b,w,T,P)===!0){let{__offset:g,value:_}=b;if(Array.isArray(_)){let D=0;for(let I=0;I<_.length;I++){let F=_[I],X=p(F);if(x(F,b.__data,D),typeof F!=="number"&&typeof F!=="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F))D+=X.storage/Float32Array.BYTES_PER_ELEMENT}}else x(_,b.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,g,b.__data)}}function x(b,w,T){if(typeof b==="number"||typeof b==="boolean")w[0]=b;else if(b.isMatrix3)w[0]=b.elements[0],w[1]=b.elements[1],w[2]=b.elements[2],w[3]=0,w[4]=b.elements[3],w[5]=b.elements[4],w[6]=b.elements[5],w[7]=0,w[8]=b.elements[6],w[9]=b.elements[7],w[10]=b.elements[8],w[11]=0;else if(ArrayBuffer.isView(b))w.set(new b.constructor(b.buffer,b.byteOffset,w.length));else b.toArray(w,T)}function v(b,w,T,P){let g=b.value,_=w+"_"+T;if(P[_]===void 0){if(typeof g==="number"||typeof g==="boolean")P[_]=g;else if(ArrayBuffer.isView(g))P[_]=g.slice();else P[_]=g.clone();return!0}else{let D=P[_];if(typeof g==="number"||typeof g==="boolean"){if(D!==g)return P[_]=g,!0}else if(ArrayBuffer.isView(g))return!0;else if(D.equals(g)===!1)return D.copy(g),!0}return!1}function m(b){let w=b.uniforms,T=0,P=16;for(let _=0,D=w.length;_<D;_++){let I=Array.isArray(w[_])?w[_]:[w[_]];for(let F=0,X=I.length;F<X;F++){let L=I[F],G=Array.isArray(L.value)?L.value:[L.value];for(let Z=0,N=G.length;Z<N;Z++){let ie=G[Z],O=p(ie),z=T%P,H=z%O.boundary,fe=z+H;if(T+=H,fe!==0&&P-fe<O.storage)T+=P-fe;L.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=T,T+=O.storage}}}let g=T%P;if(g>0)T+=P-g;return b.__size=T,b.__cache={},this}function p(b){let w={boundary:0,storage:0};if(typeof b==="number"||typeof b==="boolean")w.boundary=4,w.storage=4;else if(b.isVector2)w.boundary=8,w.storage=8;else if(b.isVector3||b.isColor)w.boundary=16,w.storage=12;else if(b.isVector4)w.boundary=16,w.storage=16;else if(b.isMatrix3)w.boundary=48,w.storage=48;else if(b.isMatrix4)w.boundary=64,w.storage=64;else if(b.isTexture)it("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(b))w.boundary=16,w.storage=b.byteLength;else it("WebGLRenderer: Unsupported uniform value type.",b);return w}function A(b){let w=b.target;w.removeEventListener("dispose",A);let T=o.indexOf(w.__bindingPointIndex);o.splice(T,1),e.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function R(){for(let b in s)e.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:R}}var I_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),jn=null;function L_(){if(jn===null)jn=new gr(I_,16,16,Hi,en),jn.name="DFG_LUT",jn.minFilter=rn,jn.magFilter=rn,jn.wrapS=co,jn.wrapT=co,jn.generateMipmaps=!1,jn.needsUpdate=!0;return jn}class oc{constructor(e={}){let{canvas:t=Du(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:h=An}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;let x=h,v=new Set([Va,Ha,Ga]),m=new Set([An,Ei,dr,Ts,za,ka]),p=new Uint32Array(4),A=new Int32Array(4),R=new B,b=null,w=null,T=[],P=[],g=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let _=this,D=!1,I=null,F=null,X=null,L=null;this._outputColorSpace=Es;let G=0,Z=0,N=null,ie=-1,O=null,z=new Ft,H=new Ft,fe=null,pe=new at(0),We=0,{width:Ie,height:j}=t,xe=1,re=null,Se=null,Ae=new Ft(0,0,Ie,j),me=new Ft(0,0,Ie,j),Te=!1,Ne=new Ao,Le=!1,Je=!1,Ke=new Bt,dt=new B,Me=new Ft,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},V=!1;function ve(){return N===null?xe:1}let C=n;function Ge(S,Y){return t.getContext(S,Y)}let we,et,M,y,U,J,he,q,ee,K,te,Q,ce,de,ge,ke,He,qe,W,Ee,le,Re,Be;try{let S={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in t)t.setAttribute("data-engine",`three.js r${Uh}`);if(t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",be,!1),C===null){if(C=Ge("webgl2",S),C===null)if(Ge("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}E()}catch(S){throw t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",be,!1),rt("WebGLRenderer: "+S.message),S}function E(){if(we=new zx(C),we.init(),le=new A_(C,we),et=new Rx(C,we,e,le),M=new M_(C,we),et.reversedDepthBuffer&&d)M.buffers.depth.setReversed(!0);F=C.createFramebuffer(),X=C.createFramebuffer(),L=C.createFramebuffer(),y=new Hx(C),U=new c_,J=new w_(C,we,M,U,et,le,y),he=new Bx(_),q=new Wm(C),Re=new Ex(C,q),ee=new kx(C,q,y,Re),K=new Wx(C,ee,q,Re,y),qe=new Vx(C,et,J),ge=new Px(U),te=new l_(_,he,we,et,Re,ge),Q=new R_(_,U),ce=new u_,de=new x_(we),He=new Tx(_,he,M,K,f,a),ke=new S_(_,K,et),Be=new P_(C,y,et,M),W=new Cx(C,we,y),Ee=new Gx(C,we,y),y.programs=te.programs,_.capabilities=et,_.extensions=we,_.properties=U,_.renderLists=ce,_.shadowMap=ke,_.state=M,_.info=y}if(x!==An)g=new qx(x,t.width,t.height,o,i,s);let k=new yd(_,C);this.xr=k,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let S=we.get("WEBGL_lose_context");if(S)S.loseContext()},this.forceContextRestore=function(){let S=we.get("WEBGL_lose_context");if(S)S.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(S){if(S===void 0)return;xe=S,this.setSize(Ie,j,!1)},this.getSize=function(S){return S.set(Ie,j)},this.setSize=function(S,Y,oe=!0){if(k.isPresenting){it("WebGLRenderer: Can't change size while VR device is presenting.");return}if(Ie=S,j=Y,t.width=Math.floor(S*xe),t.height=Math.floor(Y*xe),oe===!0)t.style.width=S+"px",t.style.height=Y+"px";if(g!==null)g.setSize(t.width,t.height);this.setViewport(0,0,S,Y)},this.getDrawingBufferSize=function(S){return S.set(Ie*xe,j*xe).floor()},this.setDrawingBufferSize=function(S,Y,oe){Ie=S,j=Y,xe=oe,t.width=Math.floor(S*oe),t.height=Math.floor(Y*oe),this.setViewport(0,0,S,Y)},this.setEffects=function(S){if(x===An){rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let Y=0;Y<S.length;Y++)if(S[Y].isOutputPass===!0){it("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}g.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(z)},this.getViewport=function(S){return S.copy(Ae)},this.setViewport=function(S,Y,oe,ne){if(S.isVector4)Ae.set(S.x,S.y,S.z,S.w);else Ae.set(S,Y,oe,ne);M.viewport(z.copy(Ae).multiplyScalar(xe).round())},this.getScissor=function(S){return S.copy(me)},this.setScissor=function(S,Y,oe,ne){if(S.isVector4)me.set(S.x,S.y,S.z,S.w);else me.set(S,Y,oe,ne);M.scissor(H.copy(me).multiplyScalar(xe).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(S){M.setScissorTest(Te=S)},this.setOpaqueSort=function(S){re=S},this.setTransparentSort=function(S){Se=S},this.getClearColor=function(S){return S.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(S=!0,Y=!0,oe=!0){let ne=0;if(S){let se=!1;if(N!==null){let Ue=N.texture.format;se=v.has(Ue)}if(se){let Ue=N.texture.type,Ce=m.has(Ue),ue=He.getClearColor(),ye=He.getClearAlpha(),{r:Xe,g:nt,b:Ze}=ue;if(Ce)p[0]=Xe,p[1]=nt,p[2]=Ze,p[3]=ye,C.clearBufferuiv(C.COLOR,0,p);else A[0]=Xe,A[1]=nt,A[2]=Ze,A[3]=ye,C.clearBufferiv(C.COLOR,0,A)}else ne|=C.COLOR_BUFFER_BIT}if(Y)ne|=C.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(oe)ne|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(ne!==0)C.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),I=S},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",be,!1),He.dispose(),ce.dispose(),de.dispose(),U.dispose(),he.dispose(),K.dispose(),Re.dispose(),Be.dispose(),te.dispose(),k.dispose(),k.removeEventListener("sessionstart",bt),k.removeEventListener("sessionend",yn),Ut.stop()};function ae(S){S.preventDefault(),tr("WebGLRenderer: Context Lost."),D=!0}function _e(){tr("WebGLRenderer: Context Restored."),D=!1;let S=y.autoReset,Y=ke.enabled,oe=ke.autoUpdate,ne=ke.needsUpdate,se=ke.type;E(),y.autoReset=S,ke.enabled=Y,ke.autoUpdate=oe,ke.needsUpdate=ne,ke.type=se}function be(S){rt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Fe(S){let Y=S.target;Y.removeEventListener("dispose",Fe),Pe(Y)}function Pe(S){st(S),U.remove(S)}function st(S){let Y=U.get(S).programs;if(Y!==void 0){if(Y.forEach(function(oe){te.releaseProgram(oe)}),S.isShaderMaterial)te.releaseShaderCache(S)}}this.renderBufferDirect=function(S,Y,oe,ne,se,Ue){if(Y===null)Y=ze;let Ce=se.isMesh&&se.matrixWorld.determinantAffine()<0,ue=Rn(S,Y,oe,ne,se);M.setMaterial(ne,Ce);let ye=oe.index,Xe=1;if(ne.wireframe===!0){if(ye=ee.getWireframeAttribute(oe),ye===void 0)return;Xe=2}let nt=oe.drawRange,Ze=oe.attributes.position,Ye=nt.start*Xe,wt=(nt.start+nt.count)*Xe;if(Ue!==null)Ye=Math.max(Ye,Ue.start*Xe),wt=Math.min(wt,(Ue.start+Ue.count)*Xe);if(ye!==null)Ye=Math.max(Ye,0),wt=Math.min(wt,ye.count);else if(Ze!==void 0&&Ze!==null)Ye=Math.max(Ye,0),wt=Math.min(wt,Ze.count);let Xt=wt-Ye;if(Xt<0||Xt===1/0)return;Re.setup(se,ne,ue,oe,ye);let Nt,It=W;if(ye!==null)Nt=q.get(ye),It=Ee,It.setIndex(Nt);if(se.isMesh)if(ne.wireframe===!0)M.setLineWidth(ne.wireframeLinewidth*ve()),It.setMode(C.LINES);else It.setMode(C.TRIANGLES);else if(se.isLine){let on=ne.linewidth;if(on===void 0)on=1;if(M.setLineWidth(on*ve()),se.isLineSegments)It.setMode(C.LINES);else if(se.isLineLoop)It.setMode(C.LINE_LOOP);else It.setMode(C.LINE_STRIP)}else if(se.isPoints)It.setMode(C.POINTS);else if(se.isSprite)It.setMode(C.TRIANGLES);if(se.isBatchedMesh)if(!we.get("WEBGL_multi_draw")){let{_multiDrawStarts:on,_multiDrawCounts:Ve,_multiDrawCount:gn}=se,_t=ye?q.get(ye).bytesPerElement:1,In=U.get(ne).currentProgram.getUniforms();for(let Zn=0;Zn<gn;Zn++)In.setValue(C,"_gl_DrawID",Zn),It.render(on[Zn]/_t,Ve[Zn])}else It.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else if(se.isInstancedMesh)It.renderInstances(Ye,Xt,se.count);else if(oe.isInstancedBufferGeometry){let on=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Ve=Math.min(oe.instanceCount,on);It.renderInstances(Ye,Xt,Ve)}else It.render(Ye,Xt)};function ot(S,Y,oe,ne){if(I!==null&&S.isNodeMaterial)I.setObject(ne,S);if(Le===!0)ge.setState(S,oe,!1);if(S.transparent===!0&&S.side===un&&S.forceSinglePass===!1)S.side=hn,S.needsUpdate=!0,Wt(S,Y,ne),S.side=Ms,S.needsUpdate=!0,Wt(S,Y,ne),S.side=un;else Wt(S,Y,ne)}this.compile=function(S,Y,oe=null){if(oe===null)oe=S;if(I!==null)I.renderStart(S,Y,oe);if(w=de.get(oe),w.init(Y),P.push(w),oe.traverseVisible(function(se){if(se.isLight&&se.layers.test(Y.layers)){if(w.pushLight(se),se.castShadow)w.pushShadow(se)}}),S!==oe)S.traverseVisible(function(se){if(se.isLight&&se.layers.test(Y.layers)){if(w.pushLight(se),se.castShadow)w.pushShadow(se)}});if(w.setupLights(),I!==null)I.updateLights(w.state.lightsArray);if(Je=this.localClippingEnabled,Le=ge.init(this.clippingPlanes,Je),Le===!0)ge.setGlobalState(this.clippingPlanes,Y);if(I!==null)ke.render(w.state.shadowsArray,oe,Y);let ne=new Set;if(S.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;let Ue=se.material;if(Ue)if(Array.isArray(Ue))for(let Ce=0;Ce<Ue.length;Ce++){let ue=Ue[Ce];ot(ue,oe,Y,se),ne.add(ue)}else ot(Ue,oe,Y,se),ne.add(Ue)}),w=P.pop(),I!==null)I.renderEnd();return ne},this.compileAsync=function(S,Y,oe=null){let ne=this.compile(S,Y,oe);return new Promise((se)=>{function Ue(){if(ne.forEach(function(Ce){let ye=U.get(Ce).currentProgram;if(ye===void 0||ye.isReady())ne.delete(Ce)}),ne.size===0){se(S);return}setTimeout(Ue,10)}if(we.get("KHR_parallel_shader_compile")!==null)Ue();else setTimeout(Ue,10)})};let tt=null;function yt(S){if(tt)tt(S)}function bt(){Ut.stop()}function yn(){Ut.start()}let Ut=new ld;if(Ut.setAnimationLoop(yt),typeof self<"u")Ut.setContext(self);this.setAnimationLoop=function(S){tt=S,k.setAnimationLoop(S),S===null?Ut.stop():Ut.start()},k.addEventListener("sessionstart",bt),k.addEventListener("sessionend",yn),this.render=function(S,Y){if(Y!==void 0&&Y.isCamera!==!0){rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(I!==null)I.renderStart(S,Y);let oe=k.enabled===!0&&k.isPresenting===!0,ne=g!==null&&(N===null||oe)&&g.begin(_,N);if(S.matrixWorldAutoUpdate===!0)S.updateMatrixWorld();if(Y.parent===null&&Y.matrixWorldAutoUpdate===!0)Y.updateMatrixWorld();if(k.enabled===!0&&k.isPresenting===!0&&(g===null||g.isCompositing()===!1)){if(k.cameraAutoUpdate===!0)k.updateCamera(Y);Y=k.getCamera()}if(S.isScene===!0)S.onBeforeRender(_,S,Y,N);if(w=de.get(S,P.length),w.init(Y),w.state.textureUnits=J.getTextureUnits(),P.push(w),Ke.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Ne.setFromProjectionMatrix(Ke,Ml,Y.reversedDepth),Je=this.localClippingEnabled,Le=ge.init(this.clippingPlanes,Je),b=ce.get(S,T.length),b.init(),T.push(b),k.enabled===!0&&k.isPresenting===!0){let Ce=_.xr.getDepthSensingMesh();if(Ce!==null)bn(Ce,Y,-1/0,_.sortObjects)}if(bn(S,Y,0,_.sortObjects),b.finish(),I!==null)I.updateLights(w.state.lightsArray);if(_.sortObjects===!0)b.sort(re,Se);if(V=k.enabled===!1||k.isPresenting===!1||k.hasDepthSensing()===!1,V)He.addToRenderList(b,S);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(Le===!0)ge.beginShadows();let se=w.state.shadowsArray;if(ke.render(se,S,Y),Le===!0)ge.endShadows();if((ne&&g.hasRenderPass())===!1){let Ce=b.opaque,ue=b.transmissive;if(w.setupLights(),Y.isArrayCamera){let ye=Y.cameras;if(ue.length>0)for(let Xe=0,nt=ye.length;Xe<nt;Xe++){let Ze=ye[Xe];St(Ce,ue,S,Ze)}if(V)He.render(S);for(let Xe=0,nt=ye.length;Xe<nt;Xe++){let Ze=ye[Xe];xt(b,S,Ze,Ze.viewport)}}else{if(ue.length>0)St(Ce,ue,S,Y);if(V)He.render(S);xt(b,S,Y)}}if(N!==null&&Z===0)J.updateMultisampleRenderTarget(N),J.updateRenderTargetMipmap(N);if(ne)g.end(_);if(S.isScene===!0)S.onAfterRender(_,S,Y);if(Re.resetDefaultState(),ie=-1,O=null,P.pop(),P.length>0){if(w=P[P.length-1],J.setTextureUnits(w.state.textureUnits),Le===!0)ge.setGlobalState(_.clippingPlanes,w.state.camera)}else w=null;if(T.pop(),T.length>0)b=T[T.length-1];else b=null;if(I!==null)I.renderEnd()};function bn(S,Y,oe,ne){if(S.visible===!1)return;if(S.layers.test(Y.layers)){if(S.isGroup)oe=S.renderOrder;else if(S.isLOD){if(S.autoUpdate===!0)S.update(Y)}else if(S.isLightProbeGrid)w.pushLightProbeGrid(S);else if(S.isLight){if(w.pushLight(S),S.castShadow)w.pushShadow(S)}else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(Ne)){if(ne)Me.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ke);let Ce=K.update(S),ue=S.material;if(ue.visible)b.push(S,Ce,ue,oe,Me.z,null,Y)}}else if(S.isMesh||S.isLine||S.isPoints){if(!S.frustumCulled||S.intersectsFrustum(Ne)){let Ce=K.update(S),ue=S.material;if(ne){if(S.boundingSphere!==void 0){if(S.boundingSphere===null)S.computeBoundingSphere();Me.copy(S.boundingSphere.center)}else{if(Ce.boundingSphere===null)Ce.computeBoundingSphere();Me.copy(Ce.boundingSphere.center)}Me.applyMatrix4(S.matrixWorld).applyMatrix4(Ke)}if(Array.isArray(ue)){let ye=Ce.groups;for(let Xe=0,nt=ye.length;Xe<nt;Xe++){let Ze=ye[Xe],Ye=ue[Ze.materialIndex];if(Ye&&Ye.visible)b.push(S,Ce,Ye,oe,Me.z,Ze,Y)}}else if(ue.visible)b.push(S,Ce,ue,oe,Me.z,null,Y)}}}let Ue=S.children;for(let Ce=0,ue=Ue.length;Ce<ue;Ce++)bn(Ue[Ce],Y,oe,ne)}function xt(S,Y,oe,ne){let{opaque:se,transmissive:Ue,transparent:Ce}=S;if(w.setupLightsView(oe),Le===!0)ge.setGlobalState(_.clippingPlanes,oe);if(ne)M.viewport(z.copy(ne));if(se.length>0)Ot(se,Y,oe);if(Ue.length>0)Ot(Ue,Y,oe);if(Ce.length>0)Ot(Ce,Y,oe);M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function St(S,Y,oe,ne){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[ne.id]===void 0){let Ye=we.has("EXT_color_buffer_half_float")||we.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[ne.id]=new Vt(1,1,{generateMipmaps:!0,type:Ye?en:An,minFilter:zi,samples:Math.max(4,et.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:pt.workingColorSpace})}let Ue=w.state.transmissionRenderTarget[ne.id],Ce=ne.viewport||z;Ue.setSize(Ce.z*_.transmissionResolutionScale,Ce.w*_.transmissionResolutionScale);let ue=_.getRenderTarget(),ye=_.getActiveCubeFace(),Xe=_.getActiveMipmapLevel();if(_.setRenderTarget(Ue),_.getClearColor(pe),We=_.getClearAlpha(),We<1)_.setClearColor(16777215,0.5);if(_.clear(),V)He.render(oe);let nt=_.toneMapping;_.toneMapping=wn;let Ze=ne.viewport;if(ne.viewport!==void 0)ne.viewport=void 0;if(w.setupLightsView(ne),Le===!0)ge.setGlobalState(_.clippingPlanes,ne);if(Ot(S,oe,ne),J.updateMultisampleRenderTarget(Ue),J.updateRenderTargetMipmap(Ue),we.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let wt=0,Xt=Y.length;wt<Xt;wt++){let Nt=Y[wt],{object:It,geometry:on,material:Ve,group:gn}=Nt;if(Ve.side===un&&It.layers.test(ne.layers)){let _t=Ve.side;Ve.side=hn,Ve.needsUpdate=!0,Qt(It,oe,ne,on,Ve,gn),Ve.side=_t,Ve.needsUpdate=!0,Ye=!0}}if(Ye===!0)J.updateMultisampleRenderTarget(Ue),J.updateRenderTargetMipmap(Ue)}if(_.setRenderTarget(ue,ye,Xe),_.setClearColor(pe,We),Ze!==void 0)ne.viewport=Ze;_.toneMapping=nt}function Ot(S,Y,oe){let ne=Y.isScene===!0?Y.overrideMaterial:null;for(let se=0,Ue=S.length;se<Ue;se++){let Ce=S[se],{object:ue,geometry:ye,group:Xe}=Ce,nt=Ce.material;if(nt.allowOverride===!0&&ne!==null)nt=ne;if(ue.layers.test(oe.layers))Qt(ue,Y,oe,ye,nt,Xe)}}function Qt(S,Y,oe,ne,se,Ue){if(I!==null&&se.isNodeMaterial)I.setObject(S,se);if(S.onBeforeRender(_,Y,oe,ne,se,Ue),S.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),se.onBeforeRender(_,Y,oe,ne,S,Ue),se.transparent===!0&&se.side===un&&se.forceSinglePass===!1)se.side=hn,se.needsUpdate=!0,_.renderBufferDirect(oe,Y,ne,se,S,Ue),se.side=Ms,se.needsUpdate=!0,_.renderBufferDirect(oe,Y,ne,se,S,Ue),se.side=un;else _.renderBufferDirect(oe,Y,ne,se,S,Ue);S.onAfterRender(_,Y,oe,ne,se,Ue)}function Wt(S,Y,oe){if(Y.isScene!==!0)Y=ze;let ne=U.get(S),se=w.state.lights,Ue=w.state.shadowsArray,Ce=se.state.version,ue=te.getParameters(S,se.state,Ue,Y,oe,w.state.lightProbeGridArray),ye=te.getProgramCacheKey(ue),Xe=ne.programs;ne.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?Y.environment:null,ne.fog=Y.fog;let nt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;if(ne.envMap=he.get(S.envMap||ne.environment,nt),ne.envMapRotation=ne.environment!==null&&S.envMap===null?Y.environmentRotation:S.envMapRotation,Xe===void 0)S.addEventListener("dispose",Fe),Xe=new Map,ne.programs=Xe;let Ze=Xe.get(ye);if(Ze!==void 0){if(ne.currentProgram===Ze&&ne.lightsStateVersion===Ce)return Yt(S,ue),Ze}else{if(ue.uniforms=te.getUniforms(S),I!==null&&S.isNodeMaterial)I.build(S,oe,ue);S.onBeforeCompile(ue,_),Ze=te.acquireProgram(ue,ye),Xe.set(ye,Ze),ne.uniforms=ue.uniforms}let Ye=ne.uniforms;if(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)Ye.clippingPlanes=ge.uniform;if(Yt(S,ue),ne.needsLights=Pn(S),ne.lightsStateVersion=Ce,ne.needsLights)Ye.ambientLightColor.value=se.state.ambient,Ye.lightProbe.value=se.state.probe,Ye.sunLights.value=se.state.sun,Ye.sunLightShadows.value=se.state.sunShadow,Ye.directionalLights.value=se.state.directional,Ye.directionalLightShadows.value=se.state.directionalShadow,Ye.spotLights.value=se.state.spot,Ye.spotLightShadows.value=se.state.spotShadow,Ye.rectAreaLights.value=se.state.rectArea,Ye.ltc_1.value=se.state.rectAreaLTC1,Ye.ltc_2.value=se.state.rectAreaLTC2,Ye.pointLights.value=se.state.point,Ye.pointLightShadows.value=se.state.pointShadow,Ye.hemisphereLights.value=se.state.hemi,Ye.sunShadowMatrix.value=se.state.sunShadowMatrix,Ye.sunShadowCascade.value=se.state.sunShadowCascade,Ye.directionalShadowMatrix.value=se.state.directionalShadowMatrix,Ye.spotLightMatrix.value=se.state.spotLightMatrix,Ye.spotLightMap.value=se.state.spotLightMap,Ye.pointShadowMatrix.value=se.state.pointShadowMatrix;return ne.lightProbeGrid=w.state.lightProbeGridArray.length>0,ne.currentProgram=Ze,ne.uniformsList=null,Ze}function Dt(S){if(S.uniformsList===null){let Y=S.currentProgram.getUniforms();S.uniformsList=Sr.seqWithValue(Y.seq,S.uniforms)}return S.uniformsList}function Yt(S,Y){let oe=U.get(S);oe.outputColorSpace=Y.outputColorSpace,oe.batching=Y.batching,oe.batchingColor=Y.batchingColor,oe.instancing=Y.instancing,oe.instancingColor=Y.instancingColor,oe.instancingMorph=Y.instancingMorph,oe.skinning=Y.skinning,oe.morphTargets=Y.morphTargets,oe.morphNormals=Y.morphNormals,oe.morphColors=Y.morphColors,oe.morphTargetsCount=Y.morphTargetsCount,oe.numClippingPlanes=Y.numClippingPlanes,oe.numIntersection=Y.numClipIntersection,oe.vertexAlphas=Y.vertexAlphas,oe.vertexTangents=Y.vertexTangents,oe.toneMapping=Y.toneMapping}function ii(S,Y){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;R.setFromMatrixPosition(Y.matrixWorld);for(let oe=0,ne=S.length;oe<ne;oe++){let se=S[oe];if(se.texture!==null&&se.boundingBox.containsPoint(R))return se}return null}function Rn(S,Y,oe,ne,se){if(Y.isScene!==!0)Y=ze;J.resetTextureUnits();let Ue=Y.fog,Ce=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?Y.environment:null,ue=N===null?_.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:pt.workingColorSpace,ye=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,Xe=he.get(ne.envMap||Ce,ye),nt=ne.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,Ze=!!oe.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ye=!!oe.morphAttributes.position,wt=!!oe.morphAttributes.normal,Xt=!!oe.morphAttributes.color,Nt=wn;if(ne.toneMapped){if(N===null||N.isXRRenderTarget===!0)Nt=_.toneMapping}let It=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,on=It!==void 0?It.length:0,Ve=U.get(ne),gn=w.state.lights;if(Le===!0){if(Je===!0||S!==O){let Lt=S===O&&ne.id===ie;ge.setState(ne,S,Lt)}}let _t=!1;if(ne.version===Ve.__version){if(Ve.needsLights&&Ve.lightsStateVersion!==gn.state.version)_t=!0;else if(Ve.outputColorSpace!==ue)_t=!0;else if(se.isBatchedMesh&&Ve.batching===!1)_t=!0;else if(!se.isBatchedMesh&&Ve.batching===!0)_t=!0;else if(se.isBatchedMesh&&Ve.batchingColor===!0&&se._colorsTexture===null)_t=!0;else if(se.isBatchedMesh&&Ve.batchingColor===!1&&se._colorsTexture!==null)_t=!0;else if(se.isInstancedMesh&&Ve.instancing===!1)_t=!0;else if(!se.isInstancedMesh&&Ve.instancing===!0)_t=!0;else if(se.isSkinnedMesh&&Ve.skinning===!1)_t=!0;else if(!se.isSkinnedMesh&&Ve.skinning===!0)_t=!0;else if(se.isInstancedMesh&&Ve.instancingColor===!0&&se.instanceColor===null)_t=!0;else if(se.isInstancedMesh&&Ve.instancingColor===!1&&se.instanceColor!==null)_t=!0;else if(se.isInstancedMesh&&Ve.instancingMorph===!0&&se.morphTexture===null)_t=!0;else if(se.isInstancedMesh&&Ve.instancingMorph===!1&&se.morphTexture!==null)_t=!0;else if(Ve.envMap!==Xe)_t=!0;else if(ne.fog===!0&&Ve.fog!==Ue)_t=!0;else if(Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==ge.numPlanes||Ve.numIntersection!==ge.numIntersection))_t=!0;else if(Ve.vertexAlphas!==nt)_t=!0;else if(Ve.vertexTangents!==Ze)_t=!0;else if(Ve.morphTargets!==Ye)_t=!0;else if(Ve.morphNormals!==wt)_t=!0;else if(Ve.morphColors!==Xt)_t=!0;else if(Ve.toneMapping!==Nt)_t=!0;else if(Ve.morphTargetsCount!==on)_t=!0;else if(!!Ve.lightProbeGrid!==w.state.lightProbeGridArray.length>0)_t=!0}else _t=!0,Ve.__version=ne.version;let In=Ve.currentProgram;if(_t===!0){if(In=Wt(ne,Y,se),I&&ne.isNodeMaterial)I.onUpdateProgram(ne,In,Ve)}let Zn=!1,xi=!1,ss=!1,Rt=In.getUniforms(),Ht=Ve.uniforms;if(M.useProgram(In.program))Zn=!0,xi=!0,ss=!0;if(ne.id!==ie)ie=ne.id,xi=!0;if(Ve.needsLights){let Lt=ii(w.state.lightProbeGridArray,se);if(Ve.lightProbeGrid!==Lt)Ve.lightProbeGrid=Lt,xi=!0}if(Zn||O!==S){if(M.buffers.depth.getReversed()&&S.reversedDepth!==!0)S._reversedDepth=!0,S.updateProjectionMatrix();Rt.setValue(C,"projectionMatrix",S.projectionMatrix),Rt.setValue(C,"viewMatrix",S.matrixWorldInverse);let _i=Rt.map.cameraPosition;if(_i!==void 0)_i.setValue(C,dt.setFromMatrixPosition(S.matrixWorld));if(et.logarithmicDepthBuffer)Rt.setValue(C,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2));if(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)Rt.setValue(C,"isOrthographic",S.isOrthographicCamera===!0);if(O!==S)O=S,xi=!0,ss=!0}if(Ve.needsLights){if(gn.state.sunShadowMap.length>0)Rt.setValue(C,"sunShadowMap",gn.state.sunShadowMap,J);if(gn.state.directionalShadowMap.length>0)Rt.setValue(C,"directionalShadowMap",gn.state.directionalShadowMap,J);if(gn.state.spotShadowMap.length>0)Rt.setValue(C,"spotShadowMap",gn.state.spotShadowMap,J);if(gn.state.pointShadowMap.length>0)Rt.setValue(C,"pointShadowMap",gn.state.pointShadowMap,J)}if(se.isSkinnedMesh){Rt.setOptional(C,se,"bindMatrix"),Rt.setOptional(C,se,"bindMatrixInverse");let Lt=se.skeleton;if(Lt){if(Lt.boneTexture===null)Lt.computeBoneTexture();Rt.setValue(C,"boneTexture",Lt.boneTexture,J)}}if(se.isBatchedMesh){if(Rt.setOptional(C,se,"batchingTexture"),Rt.setValue(C,"batchingTexture",se._matricesTexture,J),Rt.setOptional(C,se,"batchingIdTexture"),Rt.setValue(C,"batchingIdTexture",se._indirectTexture,J),Rt.setOptional(C,se,"batchingColorTexture"),se._colorsTexture!==null)Rt.setValue(C,"batchingColorTexture",se._colorsTexture,J)}let vi=oe.morphAttributes;if(vi.position!==void 0||vi.normal!==void 0||vi.color!==void 0)qe.update(se,oe,In);if(xi||Ve.receiveShadow!==se.receiveShadow)Ve.receiveShadow=se.receiveShadow,Rt.setValue(C,"receiveShadow",se.receiveShadow);if((ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&Y.environment!==null)Ht.envMapIntensity.value=Y.environmentIntensity;if(Ht.dfgLUT!==void 0)Ht.dfgLUT.value=L_();if(xi){if(Rt.setValue(C,"toneMappingExposure",_.toneMappingExposure),Ve.needsLights)mn(Ht,ss);if(Ue&&ne.fog===!0)Q.refreshFogUniforms(Ht,Ue);if(Q.refreshMaterialUniforms(Ht,ne,xe,j,w.state.transmissionRenderTarget[S.id]),Ve.needsLights&&Ve.lightProbeGrid){let Lt=Ve.lightProbeGrid;Ht.probesSH.value=Lt.texture,Ht.probesMin.value.copy(Lt.boundingBox.min),Ht.probesMax.value.copy(Lt.boundingBox.max),Ht.probesResolution.value.copy(Lt.resolution)}Sr.upload(C,Dt(Ve),Ht,J)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0)Sr.upload(C,Dt(Ve),Ht,J),ne.uniformsNeedUpdate=!1;if(ne.isSpriteMaterial)Rt.setValue(C,"center",se.center);if(Rt.setValue(C,"modelViewMatrix",se.modelViewMatrix),Rt.setValue(C,"normalMatrix",se.normalMatrix),Rt.setValue(C,"modelMatrix",se.matrixWorld),ne.uniformsGroups!==void 0){let Lt=ne.uniformsGroups;for(let _i=0,rs=Lt.length;_i<rs;_i++){let hh=Lt[_i];Be.update(hh,In),Be.bind(hh,In)}}return In}function mn(S,Y){S.ambientLightColor.needsUpdate=Y,S.lightProbe.needsUpdate=Y,S.sunLights.needsUpdate=Y,S.sunLightShadows.needsUpdate=Y,S.directionalLights.needsUpdate=Y,S.directionalLightShadows.needsUpdate=Y,S.pointLights.needsUpdate=Y,S.pointLightShadows.needsUpdate=Y,S.spotLights.needsUpdate=Y,S.spotLightShadows.needsUpdate=Y,S.rectAreaLights.needsUpdate=Y,S.hemisphereLights.needsUpdate=Y}function Pn(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(S,Y,oe){let ne=U.get(S);if(ne.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1)ne.__useRenderToTexture=!1;U.get(S.texture).__webglTexture=Y,U.get(S.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:oe,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,Y){let oe=U.get(S);oe.__webglFramebuffer=Y,oe.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(S,Y=0,oe=0){N=S,G=Y,Z=oe;let ne=null,se=!1,Ue=!1;if(S){let ue=U.get(S);if(ue.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(C.FRAMEBUFFER,ue.__webglFramebuffer),z.copy(S.viewport),H.copy(S.scissor),fe=S.scissorTest,M.viewport(z),M.scissor(H),M.setScissorTest(fe),ie=-1;return}else if(ue.__webglFramebuffer===void 0)J.setupRenderTarget(S);else if(ue.__hasExternalTextures)J.rebindTextures(S,U.get(S.texture).__webglTexture,U.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let nt=S.depthTexture;if(ue.__boundDepthTexture!==nt){if(nt!==null&&U.has(nt)&&(S.width!==nt.image.width||S.height!==nt.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(S)}}let ye=S.texture;if(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)Ue=!0;let Xe=U.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget){if(Array.isArray(Xe[Y]))ne=Xe[Y][oe];else ne=Xe[Y];se=!0}else if(S.samples>0&&J.useMultisampledRTT(S)===!1)ne=U.get(S).__webglMultisampledFramebuffer;else if(Array.isArray(Xe))ne=Xe[oe];else ne=Xe;z.copy(S.viewport),H.copy(S.scissor),fe=S.scissorTest}else z.copy(Ae).multiplyScalar(xe).floor(),H.copy(me).multiplyScalar(xe).floor(),fe=Te;if(oe!==0)ne=F;if(M.bindFramebuffer(C.FRAMEBUFFER,ne))M.drawBuffers(S,ne);if(M.viewport(z),M.scissor(H),M.setScissorTest(fe),se){let ue=U.get(S.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ue.__webglTexture,oe)}else if(Ue){let ue=Y;for(let ye=0;ye<S.textures.length;ye++){let Xe=U.get(S.textures[ye]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+ye,Xe.__webglTexture,oe,ue)}}else if(S!==null&&oe!==0){let ue=U.get(S.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,ue.__webglTexture,oe)}ie=-1};function zn(S){let Y=U.get(S);if(Y.__readFormat!==S.format||Y.__readType!==S.type)Y.__readFormat=S.format,Y.__readType=S.type,Y.__formatReadable=et.textureFormatReadable(S.format),Y.__typeReadable=et.textureTypeReadable(S.type);return Y}if(this.readRenderTargetPixels=function(S,Y,oe,ne,se,Ue,Ce,ue=0){if(!(S&&S.isWebGLRenderTarget)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=U.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ce!==void 0)ye=ye[Ce];if(ye){M.bindFramebuffer(C.FRAMEBUFFER,ye);try{let Xe=S.textures[ue],{format:nt,type:Ze}=Xe;if(S.textures.length>1)C.readBuffer(C.COLOR_ATTACHMENT0+ue);let Ye=zn(Xe);if(Ye.__formatReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ye.__typeReadable===!1){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(Y>=0&&Y<=S.width-ne&&(oe>=0&&oe<=S.height-se))C.readPixels(Y,oe,ne,se,le.convert(nt),le.convert(Ze),Ue)}finally{let Xe=N!==null?U.get(N).__webglFramebuffer:null;M.bindFramebuffer(C.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(S,Y,oe,ne,se,Ue,Ce,ue=0){if(!(S&&S.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=U.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ce!==void 0)ye=ye[Ce];if(ye)if(Y>=0&&Y<=S.width-ne&&(oe>=0&&oe<=S.height-se)){M.bindFramebuffer(C.FRAMEBUFFER,ye);let Xe=S.textures[ue],{format:nt,type:Ze}=Xe;if(S.textures.length>1)C.readBuffer(C.COLOR_ATTACHMENT0+ue);let Ye=zn(Xe);if(Ye.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ye.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let wt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,wt),C.bufferData(C.PIXEL_PACK_BUFFER,Ue.byteLength,C.STREAM_READ),C.readPixels(Y,oe,ne,se,le.convert(nt),le.convert(Ze),0),C.bindBuffer(C.PIXEL_PACK_BUFFER,null);let Xt=N!==null?U.get(N).__webglFramebuffer:null;M.bindFramebuffer(C.FRAMEBUFFER,Xt);let Nt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Fu(C,Nt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,wt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Ue),C.bindBuffer(C.PIXEL_PACK_BUFFER,null),C.deleteBuffer(wt),C.deleteSync(Nt),Ue}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,Y=null,oe=0){let ne=Math.pow(2,-oe),se=Math.floor(S.image.width*ne),Ue=Math.floor(S.image.height*ne),Ce=Y!==null?Y.x:0,ue=Y!==null?Y.y:0;J.setTexture2D(S,0),C.copyTexSubImage2D(C.TEXTURE_2D,oe,0,0,Ce,ue,se,Ue),M.unbindTexture()},this.copyTextureToTexture=function(S,Y,oe=null,ne=null,se=0,Ue=0){let Ce,ue,ye,Xe,nt,Ze,Ye,wt,Xt,Nt=S.isCompressedTexture?S.mipmaps[Ue]:S.image;if(oe!==null)Ce=oe.max.x-oe.min.x,ue=oe.max.y-oe.min.y,ye=oe.isBox3?oe.max.z-oe.min.z:1,Xe=oe.min.x,nt=oe.min.y,Ze=oe.isBox3?oe.min.z:0;else{let Ht=Math.pow(2,-se);if(Ce=Math.floor(Nt.width*Ht),ue=Math.floor(Nt.height*Ht),S.isDataArrayTexture)ye=Nt.depth;else if(S.isData3DTexture)ye=Math.floor(Nt.depth*Ht);else ye=1;Xe=0,nt=0,Ze=0}if(ne!==null)Ye=ne.x,wt=ne.y,Xt=ne.z;else Ye=0,wt=0,Xt=0;let It=le.convert(Y.format),on=le.convert(Y.type),Ve;if(Y.isData3DTexture)J.setTexture3D(Y,0),Ve=C.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)J.setTexture2DArray(Y,0),Ve=C.TEXTURE_2D_ARRAY;else J.setTexture2D(Y,0),Ve=C.TEXTURE_2D;M.activeTexture(C.TEXTURE0),M.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,Y.flipY),M.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),M.pixelStorei(C.UNPACK_ALIGNMENT,Y.unpackAlignment);let gn=M.getParameter(C.UNPACK_ROW_LENGTH),_t=M.getParameter(C.UNPACK_IMAGE_HEIGHT),In=M.getParameter(C.UNPACK_SKIP_PIXELS),Zn=M.getParameter(C.UNPACK_SKIP_ROWS),xi=M.getParameter(C.UNPACK_SKIP_IMAGES);M.pixelStorei(C.UNPACK_ROW_LENGTH,Nt.width),M.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Nt.height),M.pixelStorei(C.UNPACK_SKIP_PIXELS,Xe),M.pixelStorei(C.UNPACK_SKIP_ROWS,nt),M.pixelStorei(C.UNPACK_SKIP_IMAGES,Ze);let ss=S.isDataArrayTexture||S.isData3DTexture,Rt=Y.isDataArrayTexture||Y.isData3DTexture;if(S.isDepthTexture){let Ht=U.get(S),vi=U.get(Y),Lt=U.get(Ht.__renderTarget),_i=U.get(vi.__renderTarget);M.bindFramebuffer(C.READ_FRAMEBUFFER,Lt.__webglFramebuffer),M.bindFramebuffer(C.DRAW_FRAMEBUFFER,_i.__webglFramebuffer);for(let rs=0;rs<ye;rs++){if(ss)C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,U.get(S).__webglTexture,se,Ze+rs),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,U.get(Y).__webglTexture,Ue,Xt+rs);C.blitFramebuffer(Xe,nt,Ce,ue,Ye,wt,Ce,ue,C.DEPTH_BUFFER_BIT,C.NEAREST)}M.bindFramebuffer(C.READ_FRAMEBUFFER,null),M.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(se!==0||S.isRenderTargetTexture||U.has(S)){let Ht=U.get(S),vi=U.get(Y);M.bindFramebuffer(C.READ_FRAMEBUFFER,X),M.bindFramebuffer(C.DRAW_FRAMEBUFFER,L);for(let Lt=0;Lt<ye;Lt++){if(ss)C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ht.__webglTexture,se,Ze+Lt);else C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ht.__webglTexture,se);if(Rt)C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,vi.__webglTexture,Ue,Xt+Lt);else C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,vi.__webglTexture,Ue);if(se!==0)C.blitFramebuffer(Xe,nt,Ce,ue,Ye,wt,Ce,ue,C.COLOR_BUFFER_BIT,C.NEAREST);else if(Rt)C.copyTexSubImage3D(Ve,Ue,Ye,wt,Xt+Lt,Xe,nt,Ce,ue);else C.copyTexSubImage2D(Ve,Ue,Ye,wt,Xe,nt,Ce,ue)}M.bindFramebuffer(C.READ_FRAMEBUFFER,null),M.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(Rt)if(S.isDataTexture||S.isData3DTexture)C.texSubImage3D(Ve,Ue,Ye,wt,Xt,Ce,ue,ye,It,on,Nt.data);else if(Y.isCompressedArrayTexture)C.compressedTexSubImage3D(Ve,Ue,Ye,wt,Xt,Ce,ue,ye,It,Nt.data);else C.texSubImage3D(Ve,Ue,Ye,wt,Xt,Ce,ue,ye,It,on,Nt);else if(S.isDataTexture)C.texSubImage2D(C.TEXTURE_2D,Ue,Ye,wt,Ce,ue,It,on,Nt.data);else if(S.isCompressedTexture)C.compressedTexSubImage2D(C.TEXTURE_2D,Ue,Ye,wt,Nt.width,Nt.height,It,Nt.data);else C.texSubImage2D(C.TEXTURE_2D,Ue,Ye,wt,Ce,ue,It,on,Nt);if(M.pixelStorei(C.UNPACK_ROW_LENGTH,gn),M.pixelStorei(C.UNPACK_IMAGE_HEIGHT,_t),M.pixelStorei(C.UNPACK_SKIP_PIXELS,In),M.pixelStorei(C.UNPACK_SKIP_ROWS,Zn),M.pixelStorei(C.UNPACK_SKIP_IMAGES,xi),Ue===0&&Y.generateMipmaps)C.generateMipmap(Ve);M.unbindTexture()},this.initRenderTarget=function(S){if(U.get(S).__webglFramebuffer===void 0)J.setupRenderTarget(S)},this.initTexture=function(S){if(S.isCubeTexture)J.setTextureCube(S,0);else if(S.isData3DTexture)J.setTexture3D(S,0);else if(S.isDataArrayTexture||S.isCompressedArrayTexture)J.setTexture2DArray(S,0);else J.setTexture2D(S,0);M.unbindTexture()},this.resetState=function(){G=0,Z=0,N=null,M.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ml}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=pt._getUnpackColorSpace()}}var ac=new Map;function Sd(){for(let e of ac.values())e.needsUpdate=!0}function Md(){for(let e of ac.values())e.dispose();ac.clear()}var Fs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class On{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}var D_=new Is(-1,1,1,-1,0,1);class wd extends zt{constructor(){super();this.setAttribute("position",new vt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new vt([0,2,0,0,2,0],2))}}var N_=new wd;class Ki{constructor(e){this._mesh=new ct(N_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,D_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class lc extends On{constructor(e,t="tDiffuse"){super();if(this.textureID=t,this.uniforms=null,this.material=null,e instanceof Qe)this.uniforms=e.uniforms,this.material=e;else if(e)this.uniforms=fi.clone(e.uniforms),this.material=new Qe({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader});this._fsQuad=new Ki(this.material)}render(e,t,n){if(this.uniforms[this.textureID])this.uniforms[this.textureID].value=n.texture;if(this._fsQuad.material=this.material,this.renderToScreen)e.setRenderTarget(null),this._fsQuad.render(e);else{if(e.setRenderTarget(t),this.clear)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);this._fsQuad.render(e)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Oo extends On{constructor(e,t){super();this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let r,o;if(this.inverse)r=0,o=1;else r=1,o=0;if(s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,r,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear)e.clear();if(e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear)e.clear();e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class cc extends On{constructor(){super();this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class hc{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new $e);this._width=n.width,this._height=n.height,t=new Vt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:en}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new lc(Fs),this.copyPass.material.blending=Nn,this.timer=new Lo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);if(t!==-1)this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){if(this.timer.update(),e===void 0)e=this.timer.getDelta();let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,s=this.passes.length;i<s;i++){let r=this.passes[i];if(r.enabled===!1)continue;if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let o=this.renderer.getContext(),a=this.renderer.state.buffers.stencil;a.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),a.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}if(Oo!==void 0){if(r instanceof Oo)n=!0;else if(r instanceof cc)n=!1}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new $e);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}var Mr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class uc extends On{constructor(){super();this.isOutputPass=!0,this.uniforms=fi.clone(Mr.uniforms),this.material=new vr({name:Mr.name,uniforms:this.uniforms,vertexShader:Mr.vertexShader,fragmentShader:Mr.fragmentShader}),this._fsQuad=new Ki(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){if(this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping){if(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},pt.getTransfer(this._outputColorSpace)===Ct)this.material.defines.SRGB_TRANSFER="";if(this._toneMapping===ir)this.material.defines.LINEAR_TONE_MAPPING="";else if(this._toneMapping===sr)this.material.defines.REINHARD_TONE_MAPPING="";else if(this._toneMapping===rr)this.material.defines.CINEON_TONE_MAPPING="";else if(this._toneMapping===or)this.material.defines.ACES_FILMIC_TONE_MAPPING="";else if(this._toneMapping===lr)this.material.defines.AGX_TONE_MAPPING="";else if(this._toneMapping===cr)this.material.defines.NEUTRAL_TONE_MAPPING="";else if(this._toneMapping===ar)this.material.defines.CUSTOM_TONE_MAPPING="";this.material.needsUpdate=!0}if(this.renderToScreen===!0)e.setRenderTarget(null),this._fsQuad.render(e);else{if(e.setRenderTarget(t),this.clear)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);this._fsQuad.render(e)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class dc extends On{constructor(e,t,n=null,i=null,s=null){super();this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new at}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let s,r;if(this.overrideMaterial!==null)r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial;if(this.clearColor!==null)e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha());if(this.clearAlpha!==null)s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha);if(this.clearDepth==!0)e.clearDepth();if(e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0)e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil);if(e.render(this.scene,this.camera),this.clearColor!==null)e.setClearColor(this._oldClearColor);if(this.clearAlpha!==null)e.setClearAlpha(s);if(this.overrideMaterial!==null)this.scene.overrideMaterial=r;e.autoClear=i}}var Ad={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new at(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Qi extends On{constructor(e,t=1,n,i){super();this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new $e(e.x,e.y):new $e(256,256),this.clearColor=new at(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Vt(s,r,{type:en,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){let u=new Vt(s,r,{type:en,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+c,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new Vt(s,r,{type:en,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+c,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),r=Math.round(r/2)}let o=Ad;this.highPassUniforms=fi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=0.01,this.materialHighPassFilter=new Qe({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let a=[6,10,14,18,22];s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(a[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new $e(1/s,1/r),s=Math.round(s/2),r=Math.round(r/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=0.1;let l=[1,0.8,0.6,0.4,0.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=fi.clone(Fs.uniforms),this.blendMaterial=new Qe({uniforms:this.copyUniforms,vertexShader:Fs.vertexShader,fragmentShader:Fs.fragmentShader,premultipliedAlpha:!0,blending:Et,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new at,this._oldClearAlpha=1,this._basic=new Ri,this._fsQuad=new Ki(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new $e(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let r=e.autoClear;if(e.autoClear=!1,e.setClearColor(this.clearColor,0),s)e.state.buffers.stencil.setTest(!1);if(this.renderToScreen)this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e);this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let a=0;a<this.nMips;a++)this._fsQuad.material=this.separableBlurMaterials[a],this.separableBlurMaterials[a].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[a].uniforms.direction.value=Qi.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[a]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[a].uniforms.colorTexture.value=this.renderTargetsHorizontal[a].texture,this.separableBlurMaterials[a].uniforms.direction.value=Qi.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[a]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[a];if(this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s)e.state.buffers.stencil.setTest(!0);if(this.renderToScreen)e.setRenderTarget(null),this._fsQuad.render(e);else e.setRenderTarget(n),this._fsQuad.render(e);e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=r}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(0.39894*Math.exp(-0.5*r*r/(n*n))/n);let i=[],s=[];for(let r=1;r<e;r+=2){let o=t[r],a=r+1<e?t[r+1]:0,l=o+a;i.push((r*o+(r+1)*a)/l),s.push(l)}return new Qe({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new $e(0.5,0.5)},direction:{value:new $e(0.5,0.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:i},gaussianWeights:{value:s}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Qe({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}Qi.BlurDirectionX=new $e(1,0);Qi.BlurDirectionY=new $e(0,1);var Td=0.6,F_=0.4,U_=0.7,O_=4,Ed="eagle-eye-3d-bloom",Cd=(e)=>{if(!(e>0))return 1;let t=Math.min(1,Math.max(0,(e-0.25)/0.75));return 0.5+0.5*t*t*(3-2*t)},Bo=(e,t,n)=>n&&e&&t===1,B_=()=>{try{return localStorage.getItem(Ed)!=="0"}catch{return!0}},z_=(e)=>{try{localStorage.setItem(Ed,e?"1":"0")}catch{}},Rd=(e)=>{let{renderer:t}=e,n=new at,i=new at().setRGB((e.clearHex>>16&255)/255,(e.clearHex>>8&255)/255,(e.clearHex&255)/255,Cs),s=new at(e.clearHex),r,o,a=0,l=0,c=1,u=0,d=!1,h=!1,f=!1,x=Td,v=document.createElement("style");v.textContent='.ee3d-bloom{position:absolute;right:16px;bottom:14px;z-index:3;margin:0;padding:7px 12px 7px 24px;border:1px solid rgba(120,140,220,.18);border-radius:999px;font:500 12px/1 Inter,"Segoe UI",system-ui,sans-serif;letter-spacing:.02em;color:#8a93b8;background:rgba(10,14,40,.55);cursor:pointer;transition:color 120ms ease-out,background-color 120ms ease-out,transform 120ms ease-out}.ee3d-bloom::before{content:"";position:absolute;left:10px;top:50%;width:6px;height:6px;margin-top:-3px;border-radius:50%;background:#707898;transition:background-color 120ms ease-out,box-shadow 120ms ease-out}.ee3d-bloom:active{transform:scale(.97)}.ee3d-bloom[aria-pressed="true"]{color:#e8ecff;background:rgba(120,140,220,.2)}.ee3d-bloom[aria-pressed="true"]::before{background:#8fb0ff;box-shadow:0 0 8px #8fb0ff}.ee3d-bloom:focus-visible{outline:2px solid rgba(140,170,255,.7);outline-offset:1px}@media (hover:hover){.ee3d-bloom:hover:not([aria-pressed="true"]){color:#c4cbea}}@media (prefers-reduced-motion:reduce){.ee3d-bloom,.ee3d-bloom::before{transition:none}.ee3d-bloom:active{transform:none}}';let m=document.createElement("button");m.type="button",m.className="ee3d-bloom",m.textContent="Bloom",m.setAttribute("aria-pressed","false"),e.container.append(v,m);let p="",A=()=>{let _=Bo(g.user,e.tier(),!d),D=`${_}|${g.user}`;if(D===p)return;p=D,m.setAttribute("aria-pressed",String(_)),m.title=_?"Bloom glow is on":g.user&&!d?"Bloom glow is paused: the frame rate dropped. Press to try again":"Bloom glow is off"},R=()=>{if(Bo(g.user,e.tier(),!d))g.setUser(!1);else g.setUser(!0),e.allowTier()};m.addEventListener("click",R);let b=(_)=>_.stopPropagation();m.addEventListener("pointerdown",b),m.addEventListener("dblclick",b);let w=()=>{try{let _=new Vt(Math.max(1,a*c),Math.max(1,l*c),{type:en}),D=new hc(t,_);return D.setPixelRatio(c),D.setSize(a,l),D.addPass(new dc(e.scene,e.camera)),o=new Qi(new $e(a*c,l*c),Td,F_,U_),D.addPass(o),D.addPass(new uc),r=D,!0}catch(_){return console.error("eagle-eye 3D: bloom unavailable",_),d=!0,r=void 0,!1}},T=()=>{r?.dispose(),o?.dispose(),r=void 0,o=void 0},P=(_)=>{if(_===h)return;h=_,t.outputColorSpace=_?Cs:Es,t.setClearColor(_?i:n.copy(s),1)},g={user:B_(),zoomScale:1,novaScale:1,get active(){return Bo(g.user,e.tier(),!d)},render(_){if(!r&&!w())return P(!1),A(),!1;if(P(!0),o)o.strength=x*g.zoomScale*g.novaScale;return r.render(_),!0},tick(_){let D=Bo(g.user,e.tier(),!d);if(D)u=0;else{if(u+=_,h)P(!1);if(r&&u>O_)T()}if(D!==f)f=D,A()},setSize(_,D,I){if(a=_,l=D,c=I,r)r.setPixelRatio(c),r.setSize(a,l)},tune(_,D,I){if(x=_,o)o.strength=_,o.radius=D,o.threshold=I},setUser(_){if(g.user=_,z_(_),!_)T();A()},dispose(){m.removeEventListener("click",R),m.removeEventListener("pointerdown",b),m.removeEventListener("dblclick",b),m.remove(),v.remove(),P(!1),T()}};return A(),g};var ut=Math.PI*2,De=(e,t=0,n=1)=>e<t?t:e>n?n:e,At=(e,t,n)=>e+(t-e)*n,je=(e,t,n,i)=>e+(t-e)*(1-Math.exp(-n*i)),En=(e)=>1-Math.pow(1-e,3);class nn{x;target;k;c;v=0;constructor(e=0,t=0,n=170,i=14){this.x=e;this.target=t;this.k=n;this.c=i}step(e){let t=Math.max(1,Math.ceil(e/0.008)),n=e/t;for(let i=0;i<t;i++)this.v+=(this.k*(this.target-this.x)-this.c*this.v)*n,this.x+=this.v*n;return this.x}}var Pd={Spring:nn,damp:je,easeOutCubic:En,clamp:De,lerp:At,TAU:ut};var pi=38,fc=Math.PI/180,k_=32,G_=-10,H_=80,Us=(90-H_)*fc,Os=(90-G_)*fc,Id=0.24,Ld=(90-k_)*fc,V_=8,W_=1.6,wr=6,X_=4,q_=0.03,Dd=0.0052,Y_=5,Z_=(e)=>e-Math.round(e/ut)*ut,$_=(e,t,n,i,s,r=pi)=>{let o=Math.tan(r*Math.PI/360),a=o*Math.max(0.05,n),l=Math.sin(t),c=Math.cos(t),u=Math.sqrt(l*l+1/(a*a)),d=0;for(let h of e){let f=Math.hypot(h.x,h.z),x=h.y*c,v=x+f*u+i/a,m=Math.abs(h.y*l-f*c)+s,p=Math.abs(h.y*l+f*c)+s,A=Math.max(x+f*l+m/o,x-f*l+p/o);d=Math.max(d,v,A)}return d},Nd=(e)=>{let{canvas:t,fx:n}=e,i=e.rand??Math.random,s=new vn(pi,1,10,30000),r=1,o=1,a=new $e(0,0),l=new $e(0,0),c=new $e(0,0),u=new nn(0,0,60,9),d=new nn(0,0,60,9),h=0,f=0,x=0,v=0,m=0,p=Id,A=Ld,R=1,b,w=!1,T=0,P=!1,g={camera:s,pointerNDC:a,pointerActive:!1,parallax:l,orbit:c,theta:Id,phi:Ld,radius:1800,homeRadius:1800,get dragging(){return w},get idleFor(){return v},get fitTarget(){return T},shouldOrbit:()=>!0,idleDriftEnabled:!0,update:Je,resize:Ke,reset:dt,setHomeRadius:Me,setHome:ze,fitSphere:V,fitDisc:ve,rayFromNDC:we,pointerWorldOnPlane:y,project:J,dispose:he},_=()=>g.homeRadius*0.3,D=()=>g.homeRadius*2.4;function I(){v=0,m=0,b=void 0,P=!1}let F=new Map,X=-1,L=0,G=0,Z=!1,N=0,ie=0,O=0,z=0,H=(q)=>{let ee=t.getBoundingClientRect();if(ee.width<1||ee.height<1)return;a.set((q.clientX-ee.left)/ee.width*2-1,-((q.clientY-ee.top)/ee.height*2-1)),g.pointerActive=!0},fe=(q)=>{if(H(q),q.pointerType==="mouse"&&q.button!==0)return;if(F.size===0&&!g.shouldOrbit(q))return;F.set(q.pointerId,{x:q.clientX,y:q.clientY});try{t.setPointerCapture(q.pointerId)}catch{}if(I(),F.size===1)X=q.pointerId,L=N=q.clientX,G=ie=q.clientY,O=q.timeStamp,Z=!1,h=f=0;else if(F.size===2){let[ee,K]=[...F.values()];z=Math.hypot(ee.x-K.x,ee.y-K.y),Z=!0}w=!0},pe=(q)=>{H(q);let ee=F.get(q.pointerId);if(!ee)return;if(I(),ee.x=q.clientX,ee.y=q.clientY,F.size>=2){let[ge,ke]=[...F.values()],He=Math.hypot(ge.x-ke.x,ge.y-ke.y);if(z>0&&He>0)g.radius=De(g.radius*(z/He),_(),D());z=He;return}if(q.pointerId!==X)return;if(!Z&&Math.hypot(q.clientX-L,q.clientY-G)>Y_)Z=!0;if(!Z)return;let K=q.clientX-N,te=q.clientY-ie,Q=Math.max(0.008,(q.timeStamp-O)/1000);N=q.clientX,ie=q.clientY,O=q.timeStamp;let ce=-K*Dd,de=-te*Dd;g.theta+=ce,g.phi=De(g.phi+de,Us,Os),h+=(ce/Q-h)*0.5,f+=(de/Q-f)*0.5},We=(q)=>{if(!F.has(q.pointerId))return;try{t.releasePointerCapture(q.pointerId)}catch{}let ee=q.pointerId===X;if(F.delete(q.pointerId),F.size<2)z=0;if(F.size===0){if(w=!1,X=-1,ee&&!Z&&q.type==="pointerup")g.onTap?.(q);if(q.timeStamp-O>90)h=f=0}else if(F.size===1){let[K,te]=[...F.entries()][0];X=K,N=te.x,ie=te.y,O=q.timeStamp,h=f=0}},Ie=()=>{if(!w)g.pointerActive=!1},j=(q)=>{q.preventDefault(),I();let ee=q.deltaMode===1?16:q.deltaMode===2?400:1;x+=De(q.deltaY*ee,-300,300)*0.0011*wr},xe=(q)=>{if(!g.shouldOrbit(q))return;dt()},re=(q)=>{if(q.ctrlKey||q.metaKey||q.altKey)return;let ee=!0;switch(q.key){case"ArrowLeft":I(),h-=0.9;break;case"ArrowRight":I(),h+=0.9;break;case"ArrowUp":I(),f-=0.7;break;case"ArrowDown":I(),f+=0.7;break;case"+":case"=":I(),x-=0.5*wr*0.3;break;case"-":case"_":I(),x+=0.5*wr*0.3;break;case"r":case"R":dt();break;default:ee=!1}if(ee)q.preventDefault()};t.style.touchAction="none",t.tabIndex=0,t.setAttribute("role","application"),t.setAttribute("aria-label","Agent network 3D view"),t.setAttribute("aria-roledescription","orbit view. Arrow keys orbit, plus and minus zoom, R resets."),t.style.outline="none",t.addEventListener("pointerdown",fe),t.addEventListener("pointermove",pe),t.addEventListener("pointerup",We),t.addEventListener("pointercancel",We),t.addEventListener("pointerleave",Ie),t.addEventListener("wheel",j,{passive:!1}),t.addEventListener("dblclick",xe),t.addEventListener("keydown",re);let Se=new B,Ae=new B,me=new B,Te=new B,Ne=new B,Le=new B(0,1,0);function Je(q,ee){let K=e.motion();if(v+=q,b){let qe=b;if(g.theta=qe.t.step(q),g.phi=De(qe.p.step(q),Us,Os),g.radius=De(qe.r.step(q),_(),D()),Math.abs(qe.t.x-qe.t.target)+Math.abs(qe.p.x-qe.p.target)+Math.abs(qe.r.x-qe.r.target)/g.homeRadius<0.002&&Math.abs(qe.t.v)+Math.abs(qe.p.v)<0.002)g.theta=qe.t.target,g.phi=qe.p.target,g.radius=qe.r.target,b=void 0;h=f=x=0}else{if(!w){if(g.theta+=h*q,g.phi=De(g.phi+f*q,Us,Os),g.phi<=Us||g.phi>=Os)f=0;let qe=Math.exp(-wr*q);h*=qe,f*=qe}if(g.radius=De(g.radius*Math.exp(x*q),_(),D()),x*=Math.exp(-wr*q),Math.abs(h)<0.0001)h=0;if(Math.abs(f)<0.0001)f=0;if(Math.abs(x)<0.00001)x=0}if(T>0&&!w&&(v>=V_||P)&&Math.abs(g.homeRadius-T)>0.5){let qe=je(g.homeRadius,T,W_,q),W=g.radius/g.homeRadius;if(g.homeRadius=qe,b)b.r.target=qe;else g.radius=qe*W}let te=g.idleDriftEnabled&&!w&&v>X_&&!b;if(m=je(m,te?1:0,te?0.7:20,q),m>0.0001)g.theta+=q_*m*K*q;u.target=g.pointerActive?a.x:0,d.target=g.pointerActive?a.y:0,l.set(u.step(q),d.step(q)),c.set(Z_(g.theta-p),g.phi-A);let Q=De(g.phi,Us,Os),ce=Math.sin(Q);Te.set(ce*Math.sin(g.theta),Math.cos(Q),ce*Math.cos(g.theta)).multiplyScalar(g.radius),me.copy(Te).negate().normalize(),Se.crossVectors(me,Le).normalize(),Ae.crossVectors(Se,me).normalize();let de=g.radius*0.015*K,ge=l.x*de,ke=l.y*de,He=n.shakeValue;if(He>0.2)ge+=(i()*2-1)*He,ke+=(i()*2-1)*He;Te.addScaledVector(Se,ge).addScaledVector(Ae,ke),Ne.set(0,0,0).addScaledVector(Se,ge).addScaledVector(Ae,ke),s.position.copy(Te),s.up.copy(Le),s.lookAt(Ne),s.updateMatrixWorld()}function Ke(q,ee){r=Math.max(1,q),o=Math.max(1,ee),s.aspect=r/o,R=s.aspect,s.updateProjectionMatrix()}function dt(){v=0,m=0,P=!0;let q=Math.round(g.theta/ut)*ut+p,ee=new nn(g.theta,q,70,13),K=new nn(g.phi,A,70,13),te=new nn(g.radius,g.homeRadius,70,13);ee.v=h,K.v=f,b={t:ee,p:K,r:te},h=f=x=0}function Me(q){if(!(q>0))return;let ee=g.homeRadius>0?g.radius/g.homeRadius:1;if(g.homeRadius=q,g.radius=De(q*ee,_(),D()),b)b.r.target=q}function ze(q,ee=!0){if(q.theta!==void 0)p=q.theta;if(q.phi!==void 0)A=De(q.phi,Us,Os);if(q.radius!==void 0&&q.radius>0)g.homeRadius=q.radius;if(ee)g.theta=p,g.phi=A,g.radius=De(g.homeRadius,_(),D()),b=void 0,h=f=x=0}function V(q,ee,K=1.06){let te=pi*Math.PI/360,Q=Math.atan(Math.tan(te)*R),de=(Math.hypot(q.x,q.y,q.z)+ee)*K/Math.sin(Math.min(te,Q));return Me(de),de}function ve(q,ee,K,te=!1){let Q=$_(q,A,R,ee,K);if(!(Q>0))return T;if(T=Q,te)Me(Q);return Q}let C=new B,Ge=new B;function we(q,ee,K,te){K.copy(s.position),te.set(q,ee,0.5).unproject(s).sub(K).normalize()}let et=new B,M=new B;function y(q,ee,K=new B){we(a.x,a.y,et,M);let te=ee??C.setFromMatrixColumn(s.matrixWorld,2),Q=te.dot(M);if(Math.abs(Q)<0.000001)return null;let ce=Ge.copy(q).sub(et).dot(te)/Q;if(ce<0)return null;return K.copy(et).addScaledVector(M,ce)}let U=new B;function J(q,ee={x:0,y:0,z:0,visible:!1}){return U.copy(q).project(s),ee.x=(U.x*0.5+0.5)*r,ee.y=(-U.y*0.5+0.5)*o,ee.z=U.z,ee.visible=U.z>-1&&U.z<1,ee}function he(){t.removeEventListener("pointerdown",fe),t.removeEventListener("pointermove",pe),t.removeEventListener("pointerup",We),t.removeEventListener("pointercancel",We),t.removeEventListener("pointerleave",Ie),t.removeEventListener("wheel",j),t.removeEventListener("dblclick",xe),t.removeEventListener("keydown",re),F.clear()}return g};var pc=60,J_=700,K_=900,Fd=(e,t,n=Math.random)=>{let i=[],s=[],r=[],o=0,a=(c,u)=>c+n()*(u-c);return{sparks:i,ripples:s,get shakeValue(){return o},burst(c,u,d,h=60){for(let f=0;f<d&&i.length<J_;f++){let x=a(-1,1),v=a(0,ut),m=Math.sqrt(1-x*x),p=a(0.2,1)*h;i.push({x:c.x,y:c.y,z:c.z,vx:Math.cos(v)*m*p,vy:Math.sin(v)*m*p,vz:x*p,life:0,max:a(0.5,1.3),size:a(0.8,2.2),col:u})}},spark(c,u,d,h,f){if(i.length<K_)i.push({x:c.x,y:c.y,z:c.z,vx:u.x,vy:u.y,vz:u.z,life:0,max:d,size:h,col:f})},ripple(c){if(s.length>pc)s.shift();s.push({x:c.pos.x,y:c.pos.y,z:c.pos.z,r0:c.r0,r1:c.r1,life:0,max:c.life,col:c.color,w:c.width??2.5,shell:c.shell??!1})},shockwave(c,u){for(let d of e.agents.values()){let h=d.x-c.x,f=d.y-c.y,x=d.z-c.z,v=Math.hypot(h,f,x)+1;if(v>600||v<8)continue;let m=u*3.2/(1+v/120);d.vx+=h/v*m,d.vy+=f/v*m,d.vz+=x/v*m}for(let d of r)d(c,u)},shake(c){o=Math.max(o,c*t())},flash(c,u=1){if(c==="orb")e.orb.flash=Math.max(e.orb.flash,u);else{let d=e.agents.get(c);if(d)d.flash=Math.max(d.flash,u)}},onShockwave(c){return r.push(c),()=>{let u=r.indexOf(c);if(u>=0)r.splice(u,1)}},step(c){o=je(o,0,4.5,c);for(let u=i.length-1;u>=0;u--){let d=i[u];if(d.life+=c,d.life>=d.max){i[u]=i[i.length-1],i.pop();continue}let h=1-1.4*c;d.vx*=h,d.vy*=h,d.vz*=h,d.x+=d.vx*c,d.y+=d.vy*c,d.z+=d.vz*c}for(let u=s.length-1;u>=0;u--)if(s[u].life+=c,s[u].life>=s[u].max)s[u]=s[s.length-1],s.pop()},clear(){i.length=0,s.length=0,o=0}}};var Ud=900,Od=0.45,mi=(e)=>e.fog??={value:new B(2000,Ud,Od)},Ii=(e,t,n)=>{mi(e).value.set(Math.hypot(t.x-n.x,t.y-n.y,t.z-n.z),Ud,Od)},Bs=`
uniform vec3 uFog;
float fogFade(vec3 wp) {
  float d = distance(wp, cameraPosition);
  return mix(1.0, uFog.z, smoothstep(uFog.x - 0.4 * uFog.y, uFog.x + uFog.y, d));
}
`,lt={background:-1000,stars:-900,dust:-200,orbits:-180,flare:-150,links:-100,packets:-90,orb:0,nodes:100,halos:150,rings:200,sparks:300,ripples:310,fx:400};function Ar(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}var zo={doc:[52,150,255],search:[40,175,255],code:[178,82,255],mail:[150,160,235],chart:[255,168,52],image:[52,242,112],bell:[150,160,235],globe:[150,226,255],pencil:[52,172,255],api:[150,160,235],gear:[88,255,82],database:[255,162,52],check:[255,172,62]},ko=[[70,150,255],[170,90,255],[255,170,70],[70,255,150],[120,230,255],[235,240,255]];var Cn=(e)=>[...zo[e]],Bd=[{id:"planner",name:"Planner Agent",icon:"doc",status:"running",tokens:312000,seconds:501,x:467,y:158,radius:66,color:Cn("doc")},{id:"research",name:"Research Agent",icon:"search",status:"running",tokens:423000,seconds:734,x:198,y:298,radius:62,color:Cn("search")},{id:"code",name:"Code Agent",icon:"code",status:"running",tokens:621000,seconds:948,x:735,y:315,radius:64,color:Cn("code")},{id:"email",name:"Email Agent",icon:"mail",status:"stopped",tokens:0,seconds:0,x:117,y:473,radius:48,color:Cn("mail")},{id:"analysis",name:"Analysis Agent",icon:"chart",status:"thinking",tokens:198000,seconds:392,x:777,y:568,radius:60,color:Cn("chart")},{id:"vision",name:"Vision Agent",icon:"image",status:"running",tokens:391000,seconds:716,x:101,y:637,radius:60,color:Cn("image")},{id:"notify",name:"Notification Agent",icon:"bell",status:"stopped",tokens:0,seconds:0,x:815,y:763,radius:42,color:Cn("bell")},{id:"web",name:"Web Agent",icon:"globe",status:"completed",tokens:154000,seconds:462,x:128,y:886,radius:61,color:Cn("globe")},{id:"writer",name:"Writer Agent",icon:"pencil",status:"idle",tokens:42000,seconds:131,x:805,y:922,radius:57,color:Cn("pencil")},{id:"api",name:"API Agent",icon:"api",status:"offline",tokens:0,seconds:0,x:98,y:1108,radius:43,color:Cn("api")},{id:"executor",name:"Executor Agent",icon:"gear",status:"running",tokens:512000,seconds:1083,x:724,y:1084,radius:61,color:Cn("gear")},{id:"db",name:"DB Agent",icon:"database",status:"running",tokens:287000,seconds:557,x:350,y:1170,radius:61,color:Cn("database")},{id:"qa",name:"QA Agent",icon:"check",status:"waiting",tokens:0,seconds:0,x:660,y:1270,radius:57,color:Cn("check")}];var pn={running:{label:"Running",dot:[46,255,150],power:1,flow:1,spin:1,tokenRate:300,ticks:!0},thinking:{label:"Thinking",dot:[255,196,78],power:0.9,flow:0.6,spin:2.2,tokenRate:110,ticks:!0},waiting:{label:"Waiting",dot:[255,184,82],power:0.62,flow:0.25,spin:0.35,tokenRate:0,ticks:!1},idle:{label:"Idle",dot:[44,200,255],power:0.7,flow:0.2,spin:0.3,tokenRate:0,ticks:!1},completed:{label:"Completed",dot:[118,228,255],power:0.3,flow:0,spin:0,tokenRate:0,ticks:!1},stopped:{label:"Stopped",dot:[118,126,160],power:0.04,flow:0,spin:0,tokenRate:0,ticks:!1},offline:{label:"Offline",dot:[118,126,160],power:0.04,flow:0,spin:0,tokenRate:0,ticks:!1}},ji=new Set(["completed","stopped","offline"]),zd=new Set(["running","thinking","waiting"]),kd={running:["thinking","completed","waiting","running"],thinking:["running","completed"],waiting:["running","thinking"],idle:["running","waiting"],completed:["idle","running"],stopped:["running"],offline:["running"]},zs=[112,120,156];var mc=1024,gc=1536,xc=512,vc=755,_c=(e,t,n)=>{let i=-110*Math.PI/180+e/Math.max(1,t)*Math.PI*2,s=t>8?e%2===0?1:0.8:0.94,r=n==="stopped"||n==="offline";return{x:Math.min(924,Math.max(100,xc+Math.cos(i)*380*s)),y:vc+Math.sin(i)*580*s,radius:r?45:60}},Gd=(e)=>e.map((t,n)=>({...t,..._c(n,e.length,t.status),color:zo[t.icon]}));var ks=135,Hd=60,Q_=380,j_=580,yc=[430,590,750],Vd=[0.86,1.06],Tr=[270,430,590,750,910],ey=0.9,bc=(e,t)=>{let n=Math.max(0.05,Math.min(e/mc,t/gc)),i=e/n,s=t/n;return{S:n,LW:i,LH:s,stretchX:De(i/mc,1,1.7),stretchY:De(s/gc,1,1.7)}};var Sc=(e)=>{let t=De(0.62+0.25*(e.LW/Math.max(1,e.LH)),0.8,1.1);return{kx:t,kz:t*ey}},ty=(e)=>e<Vd[0]?0:e<Vd[1]?1:2,ny=(e)=>{let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0},iy=(e)=>{let t=ny(e);return t=Math.imul(t^t>>>16,2246822507),t=Math.imul(t^t>>>13,3266489909),t=(t^t>>>16)>>>0,t/4294967296},sy=(e)=>iy(e)*2*Hd-Hd,ry=(e,t)=>{let n=(e-xc)/Q_,i=(t-vc)/j_;return{angle:Math.atan2(i,n),ring:Math.hypot(n,i)}},Wd=(e,t,n,i)=>{let{x:s,y:r}=e;if(!Number.isFinite(s)||!Number.isFinite(r)){let u=_c(n,i,e.status);s=u.x,r=u.y}let{angle:o,ring:a}=ry(s,r),l=yc[ty(a)],c=Sc(t);return{x:Math.cos(o)*l*c.kx,y:sy(e.id),z:Math.sin(o)*l*c.kz}};var ti=0.55,Mc=0.8,Bn=ti+Mc,Li=1.15,qd=3.6,oy=Bn+0.3,ay=0.22,Er=(e,t,n)=>[At(e[0],t[0],n),At(e[1],t[1],n),At(e[2],t[2],n)],es=(e,t)=>Er(e,[255,255,255],t),ly=()=>({x:0,y:0,z:0,r:ks,px:new nn(0,0,60,9),py:new nn(0,0,60,9),spawn:new nn(0,0,120,10),feed:0,flash:0,press:0,beat:0,pulseT:0.8,shimmerT:0,activeCount:0,model:"",labelAnchor:{x:0,y:0,z:0}}),Xd=(e,t,n,i)=>{let s=pn[e.status],r=(d,h)=>d+n()*(h-d),o=9,a=n()>0.5?1:-1,l=[];for(let d=0;d<9;d++){let h=d===0;l.push({off:h?0:d/8*2-1+(n()-0.5)*0.3,a1:(h?0.5:r(0.25,0.95))*(n()>0.3?1:-1)*a,a2:(h?0.5:r(0.25,0.95))*(n()>0.3?-1:1)*a,f1:r(0.4,1.1),f2:r(0.4,1.1),p1:r(0,ut),p2:r(0,ut),w:h?2:r(0.5,1.3),alpha:h?0.95:r(0.18,0.5),pts:Array(12).fill(0)})}let c=[e.color[0],e.color[1],e.color[2]],u=e.radius??58;return{spec:e,id:e.id,index:t,accent:c,r:u,baseR:u,hx:0,hy:0,hz:0,x:0,y:0,z:0,vx:0,vy:0,vz:0,col:Er(c,zs,1-s.power),dot:s.dot,power:s.power,flow:s.flow,spin:s.spin,detail:s.power>0.15?1:0,rest:ji.has(e.status)?1:0,spawn:new nn(0,0,150,11),spawnAt:i,spawned:!1,hover:new nn(1,1,220,16),labelShift:new nn(0,0,200,18),tokens:e.tokens,seconds:e.seconds,introCount:0,grow:0,hit:0,flash:0,statusT:99,tokText:"",timeText:"",tokFlash:0,timeFlash:0,lean:[0,0],phase:r(0,ut),fs:r(0.8,1.25),side:a,flip:!1,strands:l,packets:[],spawnAcc:r(0,1),launched:!1,launchGrow:0,charging:!1,novaS:1,novaL:0,dragging:!1,grabX:0,grabY:0,grabZ:0}},Yd={grow:(e,t,n)=>Math.max(Math.min(1,Math.max(0,(e-(t+0.2))/1.3)),n),count:(e,t)=>Math.min(1,Math.max(0,(e-t)/2))};class wc{agents=new Map;orb=ly();layout=bc(1024,1536);model="";session="";simulate=!1;time=0;selection=null;hover=null;lastState;paused=!1;mountKey="";rosterKey="";built=!1;listeners={};w=0;h=0;on(e,t){let n=this.listeners[e]??=[];return n.push(t),()=>{let i=n.indexOf(t);if(i>=0)n.splice(i,1)}}emit(e,t){let n=this.listeners[e];if(!n)return;for(let i of[...n])i(t)}setPaused(e,t){if(e===this.paused)return;this.paused=e,this.emit("pause",{paused:e,at:t})}setHover(e){if(e===this.hover)return;this.hover=e,this.emit("hover",{id:e})}setSelection(e){if(e===this.selection)return;this.selection=e,this.emit("selection",{id:e})}list(){return[...this.agents.values()]}setViewport(e,t){if(e<2||t<2||e===this.w&&t===this.h)return;this.w=e,this.h=t,this.relayout(!1)}relayout(e){this.layout=bc(this.w||1024,this.h||1536);let t=this.agents.size,n=0;for(let i of this.agents.values()){let s=Wd(i.spec,this.layout,n++,t);if(i.hx=s.x,i.hy=s.y,i.hz=s.z,e)i.x=i.hx,i.y=i.hy,i.z=i.hz}this.emit("layout",{layout:this.layout})}setAgents(e){this.agents.clear(),this.time=0;let t=Ar(7);e.forEach((n,i)=>{let s={...n};this.agents.set(s.id,Xd(s,i,t,oy+i*ay))}),this.relayout(!0),this.built=!0,this.emit("reset",{agents:this.list()})}addAgent(e){if(this.agents.has(e.id))return;let t=this.agents.size,n=Xd({...e},t,Ar(7+t),this.time+Bn);this.agents.set(n.id,n),this.relayout(!1),n.x=n.hx,n.y=n.hy,n.z=n.hz,this.emit("agentAdded",{agent:n})}updateAgent(e,t){let n=this.agents.get(e);if(!n)return;if(t.name!==void 0)n.spec.name=t.name;if(t.tokens!==void 0)n.tokens=t.tokens,n.spec.tokens=t.tokens;if(t.seconds!==void 0)n.seconds=t.seconds,n.spec.seconds=t.seconds;let i=!1;if(t.x!==void 0&&t.x!==n.spec.x||t.y!==void 0&&t.y!==n.spec.y)n.spec.x=t.x??n.spec.x,n.spec.y=t.y??n.spec.y,i=!0;if(t.status!==void 0&&t.status!==n.spec.status){let s=n.spec.status;n.spec.status=t.status,n.statusT=0,this.emit("status",{agent:n,prev:s,next:t.status})}if(i)this.relayout(!1);this.emit("agentUpdated",{agent:n})}setStatus(e,t){if(e.spec.status===t)return;let n=e.spec.status;e.spec.status=t,e.statusT=0,this.emit("status",{agent:e,prev:n,next:t})}removeAgent(e){let t=this.agents.get(e);if(!t)return;if(this.agents.delete(e),this.hover===e)this.setHover(null);if(this.selection===e)this.setSelection(null);this.relayout(!1),this.emit("agentRemoved",{agent:t})}applyState(e){this.lastState=e,this.model=e.model,this.session=e.session;let t=`${e.demo}|${e.model}`,n=e.demo?Bd.map((s)=>({...s,color:[...s.color]})):Gd(e.agents),i=e.demo?"":n.map((s)=>s.id).join(",");if(!this.built||t!==this.mountKey){this.mountKey=t,this.rosterKey=i,this.simulate=e.demo,this.setAgents(n);return}if(e.demo)return;if(i!==this.rosterKey){let s=new Set(this.rosterKey?this.rosterKey.split(","):[]);this.rosterKey=i;let r=new Set(n.map((o)=>o.id));for(let o of s)if(!r.has(o))this.removeAgent(o);for(let o of n)if(!s.has(o.id))this.addAgent(o)}for(let s of n)this.updateAgent(s.id,{status:s.status,tokens:s.tokens,seconds:s.seconds,name:s.name,x:s.x,y:s.y})}}var Zd=197647,$d=0.4,cy=0.033,Jd=0.25,hy=3000,uy=230,dy=150,fy=20,py=12,my=30,Kd=120,gy=2500,Qd=0.15,jd=0.6,xy=100,vy=8,ef=(e,t)=>{let n=new URLSearchParams(location.search),i=t.freeze??n.get("freeze")==="1",s=new oc({antialias:!1,alpha:!1,powerPreference:"default"});s.outputColorSpace=Es,s.toneMapping=wn,s.setClearColor(new at(Zd),1);let r=Math.min(window.devicePixelRatio||1,1.5),o=r;s.setPixelRatio(o);let a=s.domElement;if(a.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block",getComputedStyle(e).position==="static")e.style.position="relative";e.appendChild(a);let l=Ar(58593),c=new So,u=new wc,d=typeof window.matchMedia==="function"?window.matchMedia("(prefers-reduced-motion: reduce)"):null,h=t.reducedMotion||d?.matches?0.35:1,f=Fd(u,()=>h,l),x=Nd({canvas:a,fx:f,motion:()=>h,rand:l});x.idleDriftEnabled=h>=0.5,s.info.autoReset=!1;let v={time:{value:0},ft:{value:0},motion:{value:h},pointer:{value:new $e},orbit:{value:new $e},tier:{value:1},dpr:{value:o},resolution:{value:new $e(1,1)}};mi(v);let m=0,p=0,A=1,R=0,b=0,w=!1,T=!0,P=!1,g=!1,_=!1,D=0,I=0,F,X=16.7,L=0,G=0,Z=-1/0,N=0,ie=0,O=[],z=!1,H=[],fe=[],pe=0,We=0,Ie=0.016,j=1,xe={container:e,canvas:a,renderer:s,scene:c,rig:x,world:u,fx:f,uniforms:v,get ctx(){return Se},get t(){return m},get ft(){return p},get motion(){return h},get tier(){return A},get dpr(){return o},hasBloom:!0,get bloom(){return re},get profile(){return z},set profile(Q){z=Q},layerTimings:Me,setDpr:(Q)=>ve(Q,performance.now()),governor:n.get("gov")!=="0",get width(){return R},get height(){return b},frozen:i,addLayer:Ae,getLayer:(Q)=>O.find((ce)=>ce.name===Q),update:(Q)=>u.applyState(Q),setPaused:we,resize:me,setTime:ze,step:(Q)=>{Ke(Q),dt()},stats:K,dispose:te},re=Rd({renderer:s,scene:c,camera:x.camera,container:e,clearHex:Zd,tier:()=>A,allowTier:()=>{A=1,v.tier.value=1,L=0,Z=performance.now()}}),Se={engine:xe,renderer:s,scene:c,world:u,fx:f,rig:x,uniforms:v,springs:Pd,rng:l};function Ae(Q){let ce=O.length;while(ce>0&&O[ce-1].renderOrder>Q.renderOrder)ce--;if(O.splice(ce,0,Q),Q.init(Se),R>0)Q.onResize?.(R,b,Se)}function me(){if(g)return;let{clientWidth:Q,clientHeight:ce}=e;if(Q<2||ce<2||Q===R&&ce===b)return;R=Q,b=ce,s.setSize(R,b,!1),re.setSize(R,b,o),v.resolution.value.set(R,b),x.resize(R,b),u.setViewport(R,b),Ne();for(let de of O)de.onResize?.(R,b,Se);if(!_&&!g&&I)dt()}let Te=[];function Ne(){if(T=!1,R<2)return;let Q=0;for(let ce of u.agents.values()){let de=Te[Q]??(Te[Q]={x:0,y:0,z:0});de.x=ce.hx,de.y=ce.hy,de.z=ce.hz,Q++}if(Te.length=Q,Q===0){let ce=Te[0]??(Te[0]={x:0,y:0,z:0});ce.x=430,ce.y=0,ce.z=0,Te.length=1}if(x.fitDisc(Te,uy,dy,!w),!w)x.radius=x.homeRadius;if(Q>0)w=!0}let Le=()=>{T=!0};u.on("layout",Le),u.on("reset",Le),u.on("agentAdded",Le),u.on("agentRemoved",Le);function Je(Q){m+=Q,p+=Q*$d,v.time.value=m,v.ft.value=p,v.motion.value=h,u.time=m;let ce=z?performance.now():0;if(f.step(Q),T)Ne();if(x.update(Q,m),v.pointer.value.copy(x.parallax),v.orbit.value.copy(x.orbit),z){pe+=performance.now()-ce;for(let de=0;de<O.length;de++){let ge=performance.now();O[de].update(Q,Se),H[de]=(H[de]??0)+performance.now()-ge}}else for(let de of O)de.update(Q,Se)}function Ke(Q){let ce=Math.min(Jd,Math.max(0.001,Q)),de=Math.ceil(ce/cy);Ie=ce;for(let ge=0;ge<de;ge++)Je(ce/de)}function dt(){if(Ii(v,x.camera.position,u.orb),z){We++;for(let Q=0;Q<O.length;Q++){let ce=performance.now();O[Q].beforeRender?.(Se),fe[Q]=(fe[Q]??0)+performance.now()-ce}}else for(let Q of O)Q.beforeRender?.(Se);if(re.zoomScale=Cd(x.radius/x.homeRadius),re.tick(Ie),s.info.reset(),!(re.active&&re.render(Ie)))s.render(c,x.camera);N=s.info.render.calls,ie=s.info.render.triangles}function Me(){let Q=Math.max(1,We),ce=[{name:"engine(fx,camera)",updateMs:pe/Q,renderMs:0}];for(let de=0;de<O.length;de++)ce.push({name:O[de].name,updateMs:(H[de]??0)/Q,renderMs:(fe[de]??0)/Q});return H=[],fe=[],pe=0,We=0,ce}function ze(Q){m=Math.max(0,Q),p=m*$d,v.time.value=m,v.ft.value=p,u.time=m,x.update(0.0001,m),v.pointer.value.copy(x.parallax),v.orbit.value.copy(x.orbit),dt()}function V(Q,ce){if(X+=(Q-X)*0.1,X>fy)L++,G=0;else if(X<py)G++,L=0;else L=G=0;if(ce-Z<gy)return;if(L>=my){if(L=0,A>0){let de=re.active;if(A=0,v.tier.value=0,Z=ce,de){j=Math.min(vy,j*2);return}}if(o>jd+0.000001)ve(Math.max(jd,o-Qd),ce)}else if(G>=Kd){if(o<r-0.000001)G=0,ve(Math.min(r,o+Qd),ce);else if(A===0&&G>=Kd*j)G=0,A=1,v.tier.value=1,Z=ce}}function ve(Q,ce){o=Q,Z=ce,s.setPixelRatio(o),re.setSize(R,b,o),v.dpr.value=o;for(let de of O)de.onResize?.(R,b,Se)}function C(Q){if(g||P||_)return;D=requestAnimationFrame(C),me();let ce=I?Q-I:16.7,de=(Q-(I||Q))/1000*1;if(I=Q,xe.governor&&ce<=xy&&!document.hidden)V(ce,Q);if(!i)Ke(de);else x.update(Math.min(Jd,Math.max(0.001,de)),m);dt()}function Ge(){if(cancelAnimationFrame(D),I=0,!g&&!P&&!_&&!document.hidden)D=requestAnimationFrame(C)}function we(Q){if(Q===P)return;if(P=Q,u.setPaused(P||document.hidden,performance.now()),Q)cancelAnimationFrame(D);else Ge()}let et=()=>{if(u.setPaused(P||document.hidden,performance.now()),document.hidden)cancelAnimationFrame(D);else Ge()};document.addEventListener("visibilitychange",et);let M=typeof ResizeObserver==="function"?new ResizeObserver(()=>me()):null;M?.observe(e);let y=()=>{h=d?.matches?0.35:1,v.motion.value=h,x.idleDriftEnabled=h>=0.5};d?.addEventListener?.("change",y);let U=(Q)=>{Q.preventDefault(),_=!0,cancelAnimationFrame(D),clearTimeout(F),F=setTimeout(()=>{if(_&&!g)t.onFatal?.("WebGL context was lost and not restored")},hy)},J=()=>{clearTimeout(F),_=!1,Sd();for(let Q of O)Q.onContextRestored?.(Se);Ge()};a.addEventListener("webglcontextlost",U),a.addEventListener("webglcontextrestored",J),u.on("reset",()=>{m=0,p=0,v.time.value=0,v.ft.value=0,f.clear()});let he={x:0,y:0,z:0},q=new B,ee=new B(0,0,1);x.onTap=()=>{let Q=x.pointerWorldOnPlane(q.set(u.orb.x,u.orb.y,u.orb.z),ee);if(!Q)return;he.x=Q.x,he.y=Q.y,he.z=Q.z,f.ripple({pos:he,r0:70,r1:6,life:0.7,color:[150,180,255],width:2})};function K(){return{fps:Math.round(1000/Math.max(1,X)*10)/10,frameMs:Math.round(X*100)/100,drawCalls:N,dpr:Math.round(o*100)/100,tier:A,triangles:ie}}function te(){if(g)return;g=!0,cancelAnimationFrame(D),clearTimeout(F),M?.disconnect(),re.dispose(),document.removeEventListener("visibilitychange",et),d?.removeEventListener?.("change",y),a.removeEventListener("webglcontextlost",U),a.removeEventListener("webglcontextrestored",J);for(let Q=O.length-1;Q>=0;Q--)try{O[Q].dispose()}catch(ce){console.error("eagle-eye 3D: layer dispose failed",O[Q].name,ce)}O.length=0,x.dispose(),f.clear(),Md(),s.dispose(),s.forceContextLoss(),a.remove()}if(me(),R>0)dt();return Ge(),xe};var Ac=[{x:0.2,y:0.1,r:0.55,c:[150,70,255],a:0.2,fx:0.07,fy:0.05},{x:0.55,y:0.5,r:0.7,c:[50,90,255],a:0.16,fx:0.05,fy:0.06},{x:0.3,y:0.88,r:0.5,c:[255,140,50],a:0.13,fx:0.06,fy:0.04},{x:0.02,y:0.45,r:0.4,c:[40,255,130],a:0.11,fx:0.05,fy:0.07},{x:0.95,y:0.28,r:0.45,c:[60,200,255],a:0.1,fx:0.04,fy:0.05},{x:0.9,y:0.78,r:0.45,c:[255,150,60],a:0.08,fx:0.05,fy:0.05}],Tc=["#03040f","#050a22","#030410"],Ec=(e)=>new B(parseInt(e.slice(1,3),16),parseInt(e.slice(3,5),16),parseInt(e.slice(5,7),16)).divideScalar(255),_y=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,yy=`
precision highp float;
varying vec2 vUv;
uniform float uTime;
uniform float uMotion;
uniform vec2 uPointer;   // -1..1, y up
uniform vec2 uOrbit;     // theta, phi relative to home
uniform vec2 uRes;       // CSS px
uniform vec3 uG0;
uniform vec3 uG1;
uniform vec3 uG2;
uniform vec4 uBlob[6];   // x, y, r, alpha
uniform vec3 uBlobC[6];  // colour 0..1
uniform vec2 uBlobF[6];  // fx, fy

float ign(vec2 p) { return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715)))); }

void main() {
  vec2 res = uRes;
  float W = res.x;
  float H = res.y;
  vec2 p = vec2(vUv.x * W, (1.0 - vUv.y) * H); // CSS px, y down like the 2D canvas
  float gy = 1.0 - vUv.y;

  // gradient: top -> middle -> bottom (2D L1368-1371)
  vec3 col = gy < 0.5 ? mix(uG0, uG1, gy / 0.5) : mix(uG1, uG2, (gy - 0.5) / 0.5);

  // pointer / orbit parallax (2D pxo,pyo L1377-1378; blobs move by 0.03 of it)
  float pxo = uPointer.x * 0.5;
  float pyo = -uPointer.y * 0.5;
  float ox = pxo * 0.03 - sin(uOrbit.x) * 0.06;
  float oy = pyo * 0.03 + sin(uOrbit.y) * 0.06;

  float M = max(W, H);
  for (int k = 0; k < 6; k++) {
    float i = float(k);
    vec4 b = uBlob[k];
    vec2 f = uBlobF[k];
    float bx = (b.x + sin(uTime * f.x * uMotion + i * 2.0) * 0.05 - ox) * W;
    float by = (b.y + cos(uTime * f.y * uMotion + i * 3.0) * 0.04 - oy) * H;
    float r = b.z * M * (1.0 + sin(uTime * 0.2 + i) * 0.05);
    float d = length(p - vec2(bx, by));
    float a = b.w * clamp(1.0 - d / r, 0.0, 1.0);
    col += uBlobC[k] * a; // additive, like 'lighter'
  }

  // vignette (2D L1403-1407): radial 0.35 min(W,H) .. 0.62 hypot(W,H), rgba(0,0,8,0.6) at the rim
  float r0 = min(W, H) * 0.35;
  float r1 = length(res) * 0.62;
  float v = clamp((length(p - res * 0.5) - r0) / (r1 - r0), 0.0, 1.0) * 0.6;
  col = mix(col, vec3(0.0, 0.0, 8.0 / 255.0), v);

  // one 8-bit step of triangular-ish dither so the gradients do not band
  col += (ign(gl_FragCoord.xy) - 0.5) / 255.0;
  gl_FragColor = vec4(col, 1.0);
}
`;function tf(){let e,t,n;return{name:"background",renderOrder:lt.background,init(i){let s=i.uniforms;t=new Qe({vertexShader:_y,fragmentShader:yy,uniforms:{uTime:s.time,uMotion:s.motion,uPointer:s.pointer,uOrbit:s.orbit,uRes:s.resolution,uG0:{value:Ec(Tc[0])},uG1:{value:Ec(Tc[1])},uG2:{value:Ec(Tc[2])},uBlob:{value:Ac.map((r)=>new Ft(r.x,r.y,r.r,r.a))},uBlobC:{value:Ac.map((r)=>new B(r.c[0],r.c[1],r.c[2]).divideScalar(255))},uBlobF:{value:Ac.map((r)=>new $e(r.fx,r.fy))}},depthTest:!1,depthWrite:!1,transparent:!1,toneMapped:!1}),e=new ct(new dn(2,2),t),e.frustumCulled=!1,e.renderOrder=lt.background,e.name="background",n=i.scene,n.add(e)},update(){},dispose(){if(e)n?.remove(e),e.geometry.dispose();t?.dispose(),e=void 0,t=void 0}}}var Cc=3000,by=6000,nf=14000,Sy=`
attribute vec4 aStar; // size, phase, frequency, z (brightness depth 0.2..1)
uniform float uTime;
uniform float uMotion;
uniform float uDpr;
varying float vAlpha;
void main() {
  float s = aStar.x;
  // twinkle (2D L1395): a = (0.25 + 0.75 * (0.5 + 0.5 sin(t f + ph))) * z * 0.8 ; frozen at its mean when motion is reduced
  float tw = uMotion < 0.5 ? 0.5 : 0.5 + 0.5 * sin(uTime * aStar.z + aStar.y);
  float a = (0.25 + 0.75 * tw) * aStar.w * 0.8;
  float px = s * uDpr;
  gl_PointSize = max(px, 1.0);
  vAlpha = a * min(px, 1.0); // sub-pixel stars become dimmer instead of vanishing
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,My=`
precision highp float;
varying float vAlpha;
uniform vec3 uColor;
void main() {
  vec2 c = gl_PointCoord - 0.5;
  float soft = 1.0 - smoothstep(0.25, 0.5, length(c));
  gl_FragColor = vec4(uColor * vAlpha * soft, 1.0);
}
`;function sf(){let e,t,n,i;return{name:"stars",renderOrder:lt.stars,init(s){let r=s.rng,o=new Float32Array(Cc*3),a=new Float32Array(Cc*4);for(let l=0;l<Cc;l++){let c=r()*2-1,u=r()*ut,d=Math.sqrt(1-c*c),h=0.2+r()*0.8,f=nf+(by-nf)*h;o[l*3]=Math.cos(u)*d*f,o[l*3+1]=c*f,o[l*3+2]=Math.sin(u)*d*f,a[l*4]=0.4+r()*1.2,a[l*4+1]=r()*ut,a[l*4+2]=0.6+r()*1.8,a[l*4+3]=h}t=new zt,t.setAttribute("position",new vt(o,3)),t.setAttribute("aStar",new vt(a,4)),t.boundingSphere=new Tn(new B(0,0,0),1e6),n=new Qe({vertexShader:Sy,fragmentShader:My,uniforms:{uTime:s.uniforms.time,uMotion:s.uniforms.motion,uDpr:s.uniforms.dpr,uColor:{value:new B(207,224,255).divideScalar(255)}},blending:Et,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),e=new Rs(t,n),e.frustumCulled=!1,e.renderOrder=lt.stars,e.name="stars",i=s.scene,i.add(e)},update(){},dispose(){if(e)i?.remove(e);t?.dispose(),n?.dispose(),e=void 0,t=void 0,n=void 0}}}var Rc=(e)=>e<10?"0"+e:""+e;function Go(e){if(e>=1e6)return(e/1e6).toFixed(2)+"M";if(e>=1000)return Math.floor(e/1000)+"K";return String(Math.floor(e))}function Ho(e){let t=Math.floor(e),n=Math.floor(t/3600),i=Math.floor(t%3600/60);if(n>0)return`${n}:${Rc(i)}:${Rc(t%60)}`;return`${i}:${Rc(t%60)}`}var wy=(e)=>De((e-1)/0.07),of=(e,t,n)=>De((e-0.45)*2.2)*(1-t*(1-wy(n))),af=(e,t)=>En(De((e-t-0.1)/0.9)),lf=(e,t)=>En(De((e-t+0.05)/0.5)),cf=(e,t)=>t?1:0.92+0.08*e,hf=(e)=>{let t=(n)=>Math.round(At(n,255,e));return`rgb(${t(188)},${t(196)},${t(228)})`},uf=(e,t)=>At(0.62,1,e)*t,df=(e,t)=>{let n=t<0.2?0.5:0,i=(s,r)=>{let o=e[s]+(255-e[s])*0.12;return Math.round(o+(r-o)*n)};return`rgb(${i(0,175)},${i(1,180)},${i(2,205)})`},ff=(e,t)=>e*(0.7+0.3*(t<0.8?1:0.9)),Ic=(e)=>{let t=(n)=>Math.round(At(n,255,e));return`rgb(${t(205)},${t(214)},${t(245)})`},Lc=(e,t)=>e*(0.82+t*0.18),pf=(e)=>{let t=(n,i)=>{let s=e[n]+(255-e[n])*0.35;return Math.round(s+(i-s)*0.2)};return`rgb(${t(0,200)},${t(1,215)},${t(2,255)})`},mf=(e,t,n)=>{let i=En(De(n));return{tok:Go(At(0,e,i)),time:Ho(At(0,t,i))}},rf=[9,16,12],gf=(e,t,n)=>n?rf[e]*(0.78+0.22*Math.sin(t*3+e*1.5)):rf[e],xf=(e,t)=>(t?e*1.6-Math.PI/2:-Math.PI/4)*180/Math.PI,vf=(e,t,n)=>6.2+(n?Math.sin(e*4+t)*0.5:0),_f=(e,t)=>(e*0.9+t)%1,yf=(e)=>7+e*9,bf=(e,t)=>(1-e)*0.45*t,Sf=(e,t)=>(e?0.55:0.2)*t,Mf=(e)=>0.88+0.12*Math.sin(e*1.5),wf=(e,t)=>De(1.9-0.9*(e/Math.max(1,t)),0.35,1),Xn={padX:12,padY:9,nameLine:20,rowLine:19,minInner:108,radius:10,gap:40,margin:8},Af=Xn.padY*2+Xn.nameLine+Xn.rowLine,Cr=Af+Xn.rowLine*2,Tf=(e)=>At(Af,Cr,De(e)),Dc=(e)=>Math.ceil(Math.max(e,Xn.minInner)+Xn.padX*2),Pc=700,Ay=6,Ef=(e,t)=>{let n=Math.min(e,t),i=n>=Pc?0.75:De(0.5+0.25*(n-400)/(Pc-400),0.5,0.75);return De(Math.min(e/1400,t/900),i,1.05)},Cf=(e,t,n)=>n>Ay&&Math.min(e,t)<Pc,Rf=(e)=>De(4+e,4,16),Pf=(e,t=22)=>e.length<=t?e:e.slice(0,t-3).trimEnd()+"...",If=(e,t,n,i,s,r,o,a=Xn.gap)=>{let l=e-n,c=t-i,u=Math.hypot(l,c);if(u<0.001)l=Math.SQRT1_2,c=-Math.SQRT1_2;else l/=u,c/=u;let d=e+l*(s+a),h=t+c*(s+a),f=De(l*2.5,-1,1),x=De(c*2.5,-1,1);return{x:d-r*(0.5-0.5*f),y:h-o*(0.5-0.5*x),dx:l,dy:c}},Lf=(e,t,n,i,s,r,o,a,l,c=Xn.gap,u=Xn.margin)=>{let d=s+c*0.6;if(e+r>a-u&&n-d-r>=u&&e>n-r/2)e=n-d-r;else if(e<u&&n+d+r<=a-u&&e<n-r/2)e=n+d;if(t+o>l-u&&i-d-o>=u&&t>i-o/2)t=i-d-o;else if(t<u&&i+d+o<=l-u&&t<i-o/2)t=i+d;return{x:e,y:t}},Nc=(e,t,n,i,s,r)=>({x:De(e,n,n+s),y:De(t,i,i+r)}),Vo=(e,t,n,i,s,r,o=Xn.margin)=>({x:De(e,o,Math.max(o,s-o-n)),y:De(t,o,Math.max(o,r-o-i))}),Df=(e,t,n,i,s,r,o)=>{let a=Nc(e,t,i,s,r,o),l=a.x-e,c=a.y-t,u=Math.hypot(l,c);if(u<=n+2)return{x0:a.x,y0:a.y,x1:a.x,y1:a.y,len:0,ang:0};let d=l/u,h=c/u,f=e+d*n,x=t+h*n;return{x0:f,y0:x,x1:a.x,y1:a.y,len:u-n,ang:Math.atan2(h,d)*180/Math.PI}},Nf=(e,t,n,i,s,r=4,o=Xn.margin)=>{let a=e.length;for(let l=0;l<r;l++){let c=!1;for(let u=0;u<a;u++){let d=e[u];for(let h=u+1;h<a;h++){let f=e[h],x=Math.min(d.x+d.w,f.x+f.w)-Math.max(d.x,f.x)+o;if(x<=0)continue;let v=Math.min(d.y+d.h,f.y+f.h)-Math.max(d.y,f.y)+o;if(v<=0)continue;let m=d.id<f.id?d.id+"|"+f.id:f.id+"|"+d.id,p=i.get(m),A=x<=v?0:1;if(p){if(A=p.axis,A===0&&v<x*0.7)A=1;else if(A===1&&x<v*0.7)A=0;p.axis=A,p.seen=s}else i.set(m,{axis:A,seen:s});if(A===0){let R=d.x+d.w/2<=f.x+f.w/2?1:-1;d.x-=R*x/2,f.x+=R*x/2}else{let R=d.y+d.h/2<=f.y+f.h/2?1:-1;d.y-=R*v/2,f.y+=R*v/2}c=!0}}for(let u of e){let d=Vo(u.x,u.y,u.w,u.h,t,n,o);u.x=d.x,u.y=d.y}if(!c)break}for(let[l,c]of i)if(s-c.seen>30)i.delete(l)},Ff=(e,t,n,i,s,r,o=16,a=8)=>{let l=e+o,c=t+o;if(l+n>s-a)l=e-o-n;if(c+i>r-a)c=t-o-i;return l=De(l,a,Math.max(a,s-a-n)),c=De(c,a,Math.max(a,r-a-i)),{x:l,y:c}},Uf=(e,t,n,i,s)=>({x:e-n*s/2,y:t-i*s});var Fc='Inter, "Segoe UI", system-ui, -apple-system, Roboto, "Helvetica Neue", sans-serif',Ty=`600 15px ${Fc}`,Ey=204,Cy=98,Ry=12,Of=120,Bf=20;class qn{el;x=NaN;y=NaN;s=NaN;o=-1;constructor(e){this.el=e}set(e,t,n,i){let s=this.el.style;if(!(Math.abs(e-this.x)<0.1&&Math.abs(t-this.y)<0.1&&Math.abs(n-this.s)<0.001))this.x=e,this.y=t,this.s=n,s.transform=`translate(${e.toFixed(1)}px,${t.toFixed(1)}px)${n===1?"":` scale(${n.toFixed(3)})`}`;this.op(i)}op(e){let t=e<0.004?0:e>0.996?1:e;if(Math.abs(t-this.o)>0.004||t===0!==(this.o===0))this.o=t,this.el.style.opacity=t.toFixed(3)}hide(){if(this.o!==0)this.o=0,this.el.style.opacity="0"}}var zf=new WeakMap,Kt=(e,t,n)=>{let i=zf.get(e);if(!i)zf.set(e,i={});if(i[t]===n)return;if(i[t]=n,t==="text")e.textContent=n;else if(t.startsWith("--"))e.style.setProperty(t,n);else if(t.startsWith("@"))e.setAttribute(t.slice(1),n);else e.style[t]=n},Rr=(e,t)=>Kt(e,"opacity",(Math.round(t*250)/250).toString()),kf=(e,t="")=>`<span class="ee3d-iw">${e}</span><span class="ee3d-t"></span>${t?`<span class="ee3d-u">${t}</span>`:""}`,Py='<svg viewBox="-10 -10 20 20" width="15" height="15" fill="currentColor"><rect x="-7" width="3.8" rx="1.6"/><rect x="-1.2" width="3.8" rx="1.6"/><rect x="4.6" width="3.8" rx="1.6"/></svg>',Iy='<svg viewBox="-10 -10 20 20" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round"><circle cx="0" cy="1.5" r="6.8"/><path d="M-2.6 -8H2.6"/><path class="hand" d="M0 1.5H4.4"/></svg>',Gf="http://www.w3.org/2000/svg";function Hf(){let e,t,n,i,s,r,o,a,l,c=new Map,u=[],d=new B,h={x:0,y:0,z:0,visible:!1},f={x:0,y:0,z:0,visible:!1},x={x:0,y:0,z:0,visible:!1},v=new Map,m=[],p=[],A=0,R=0,b="",w="",T="",P=-1,g=[],_=-9,D=document.createElement("canvas").getContext("2d"),I=new Map,F=(z,H)=>{let fe=z+"|"+H,pe=I.get(fe);if(pe===void 0){if(D)D.font=z;if(pe=D?D.measureText(H).width:H.length*8,I.size>400)I.clear();I.set(fe,pe)}return pe},X=-1,L=()=>{if(X>=0)return X;let z=25.22,H=6.24;if(D){D.font=`400 26px ${Fc}`;let fe=D.measureText("Sonnet 5.5");if(fe.fontBoundingBoxAscent>0)z=fe.fontBoundingBoxAscent,H=fe.fontBoundingBoxDescent}return X=(30-(z+H))/2+z,X},G=(z,H="")=>{let fe=document.createElement("div");if(fe.className=z,H)fe.innerHTML=H;return fe},Z=(z)=>{let H=G("ee3d-lab");H.dataset.id=z.id;let fe=G("ee3d-clip"),pe=G("ee3d-bg");fe.appendChild(pe);let We=G("ee3d-edge"),Ie=G("ee3d-it ee3d-name"),j=G("ee3d-it ee3d-row ee3d-srow",'<span class="ee3d-dw"><i class="ee3d-ring"></i><i class="ee3d-glow"></i><i class="ee3d-dot"></i></span><span class="ee3d-t ee3d-st"></span>'),xe=G("ee3d-it ee3d-row ee3d-stat ee3d-r3",kf(Py,"tokens")),re=G("ee3d-it ee3d-row ee3d-stat ee3d-r4",kf(Iy));H.append(fe,We,Ie,j,xe,re),n.appendChild(H);let Se=document.createElementNS(Gf,"svg");Se.setAttribute("class","ee3d-lead"),Se.setAttribute("width","100"),Se.setAttribute("height","6"),Se.setAttribute("viewBox","0 -3 100 6"),Se.setAttribute("aria-hidden","true"),Se.dataset.id=z.id;let Ae=document.createElementNS(Gf,"line");Ae.setAttribute("x1","0"),Ae.setAttribute("y1","0"),Ae.setAttribute("x2","100"),Ae.setAttribute("y2","0"),Ae.setAttribute("pathLength","1"),Ae.setAttribute("stroke-dasharray","1 1"),Ae.setAttribute("stroke-dashoffset","1"),Se.appendChild(Ae);let me=G("ee3d-ldot");i.append(Se,me);let Te=(Le,Je)=>Le.querySelector(Je),Ne=`${z.accent[0]|0},${z.accent[1]|0},${z.accent[2]|0}`;return H.style.setProperty("--ac",Ne),Se.style.setProperty("--ac",Ne),me.style.setProperty("--ac",Ne),{id:z.id,root:H,clip:fe,bg:new qn(pe),edge:new qn(We),name:new qn(Ie),stat:new qn(j),tok:new qn(xe),time:new qn(re),lead:new qn(Se),leadLine:Ae,ldot:new qn(me),nameEl:Ie,statText:Te(j,".ee3d-st"),ring:Te(j,".ee3d-ring"),glow:Te(j,".ee3d-glow"),dot:Te(j,".ee3d-dot"),tokText:Te(xe,".ee3d-t"),timeText:Te(re,".ee3d-t"),tokIcon:Te(xe,".ee3d-iw"),timeIcon:Te(re,".ee3d-iw"),bars:Array.from(xe.querySelectorAll("rect")),hand:Te(re,".hand"),tokStr:"",timeStr:"",tokFlash:0,timeFlash:0,changedAt:-99,occ:1,cmp:0,fullName:"",w:Dc(0),ox:new nn(0,0,Of,Bf),oy:new nn(0,0,Of,Bf),shown:!1,px:0,py:0,pr:0,h:Cr,alpha:0,fade:1,rect:{id:z.id,x:0,y:0,w:0,h:0},rootKey:"",leadKey:""}},N=(z)=>{z.shown=!1,z.bg.hide(),z.edge.hide(),z.name.hide(),z.stat.hide(),z.tok.hide(),z.time.hide(),z.lead.hide(),z.ldot.hide()},ie=(z)=>{z.root.remove(),z.lead.el.remove(),z.ldot.el.remove(),c.delete(z.id)},O=(z)=>{if(g.push(z),g.length>8)g.shift()};return{name:"labels",renderOrder:900,init(z){e=z,t=z.engine.container,n=G("ee3d-labels"),n.setAttribute("data-ee3d","labels"),i=G("ee3d-leads"),s=G("ee3d-sr"),s.setAttribute("role","status"),s.setAttribute("aria-live","polite"),s.setAttribute("aria-atomic","true"),r=G("ee3d-tip",'<b></b><span class="s"><i></i><u></u></span><span class="k">Tokens <em></em></span><span class="k">Elapsed <em></em></span>'),a=G("ee3d-model"),a.style.translate="none",o=new qn(r),l=new qn(a),n.append(i,a),t.append(n,s),o.hide(),l.hide(),u.push(z.world.on("status",({agent:H,next:fe})=>{let pe=c.get(H.id);if(pe)pe.changedAt=z.world.time;O(`${H.spec.name}: ${pn[fe].label}`)}),z.world.on("agentAdded",({agent:H})=>O(`${H.spec.name} joined`)),z.world.on("agentRemoved",({agent:H})=>{let fe=c.get(H.id);if(fe)ie(fe);O(`${H.spec.name} left`)}),z.world.on("reset",()=>{for(let H of[...c.values()])ie(H);g.length=0,R=0,v.clear()}))},update(){},beforeRender(z){let{world:H,rig:fe}=z,pe=H.time,We=De(pe-R,0,0.1);R=pe,A++;let Ie=z.engine.width,j=z.engine.height;if(Ie<2||j<2)return;let re=z.uniforms.motion.value<0.5,Se=fe.camera.position,Ae=Math.tan(pi*Math.PI/360),me=fe.homeRadius,Te=Ef(Ie,j),Ne=Cf(Ie,j,H.agents.size)?1:0;for(let V of H.agents.values())if(!c.has(V.id))c.set(V.id,Z(V));for(let V of c.values())if(!H.agents.has(V.id))ie(V);if(n.lastChild!==r)n.appendChild(r);d.set(H.orb.x,H.orb.y,H.orb.z),fe.project(d,f);let Le=Se.distanceTo(d),Je=j/2/(Ae*Le),Ke=ks*Je;m.length=0,p.length=0;for(let V of H.agents.values()){let ve=c.get(V.id);if(!ve)continue;let C=of(V.spawn.x,V.rest,V.hover.x);d.set(V.x,V.y,V.z),fe.project(d,h);let Ge=!h.visible||h.z>=1;if(C<=0.01||Ge||h.x<-200||h.x>Ie+200||h.y<-200||h.y>j+200){N(ve);continue}let we=Se.distanceTo(d),et=j/2/(Ae*we);if(V.spec.name!==ve.fullName){ve.fullName=V.spec.name;let q=Pf(V.spec.name);ve.nameEl.textContent=q,ve.w=Dc(F(Ty,q)),ve.root.style.setProperty("--w",`${ve.w}px`)}let M=we>Le&&Math.hypot(h.x-f.x,h.y-f.y)<Ke*0.9;ve.occ=je(ve.occ,M?0.3:1,8,We),ve.px=h.x,ve.py=h.y,ve.pr=Math.max(2,V.r*V.spawn.x*V.hover.x*et),ve.cmp=je(ve.cmp,Ne,6,We),ve.h=Tf(V.detail*(1-ve.cmp)),ve.alpha=C,ve.fade=wf(we,me)*ve.occ;let y=If(ve.px,ve.py,f.x,f.y,ve.pr,ve.w*Te,ve.h*Te),U=ve.rect;U.x=y.x,U.y=y.y,U.w=ve.w*Te,U.h=ve.h*Te;let J=Lf(U.x,U.y,ve.px,ve.py,ve.pr,U.w,U.h,Ie,j),he=Vo(J.x,J.y,U.w,U.h,Ie,j);U.x=he.x,U.y=he.y,m.push(U),p.push(ve)}Nf(m,Ie,j,v,A,Rf(m.length));for(let V of p){let ve=H.agents.get(V.id),C=V.rect;if(V.ox.target=C.x-V.px,V.oy.target=C.y-V.py,!V.shown)V.ox.x=V.ox.target,V.oy.x=V.oy.target,V.ox.v=V.oy.v=0,V.shown=!0;else V.ox.step(We),V.oy.step(We);let Ge=Vo(V.px+V.ox.x,V.py+V.oy.x,C.w,C.h,Ie,j);dt(V,ve,Ge.x,Ge.y,C.w,C.h)}function dt(V,ve,C,Ge,we,et){let M=pn[ve.spec.status],y=M.ticks,U=y&&!re,J=af(pe,ve.spawnAt),he=cf(J,re),q=V.alpha*J*V.fade,ee=Nc(V.px,V.py,C,Ge,we,et),K=Te*he,te=C+(ee.x-C)*(1-he),Q=Ge+(ee.y-Ge)*(1-he),ce=`translate(${te.toFixed(1)}px,${Q.toFixed(1)}px) scale(${K.toFixed(3)})`;if(ce!==V.rootKey)V.rootKey=ce,V.root.style.transform=ce;let de=V.h;Kt(V.clip,"transform",`translateY(${(de-Cr).toFixed(1)}px)`),V.bg.set(0,Cr-de,1,q),V.edge.set(0,de-Ry,1,q);let ge=Df(V.px,V.py,V.pr,C,Ge,we,et),ke=lf(pe,ve.spawnAt),He=re?1:ke,qe=V.alpha*V.fade*(re?ke:Math.min(1,ke*3))*0.85;if(ge.len>3){let k=ge.len*He,ae=V.lead.el.style,_e=`${ge.x0.toFixed(1)},${ge.y0.toFixed(1)},${ge.ang.toFixed(2)},${ge.len.toFixed(1)}`;if(_e!==V.leadKey)V.leadKey=_e,ae.transform=`translate(${ge.x0.toFixed(1)}px,${ge.y0.toFixed(1)}px) rotate(${ge.ang.toFixed(2)}deg) scaleX(${(ge.len/100).toFixed(4)})`;Kt(V.leadLine,"@stroke-dashoffset",(1-Math.round(He*200)/200).toFixed(3)),V.lead.op(k>0.5?qe:0),V.ldot.set(ge.x0,ge.y0,1,qe)}else V.lead.hide(),V.ldot.hide();let W=ve.detail*(1-V.cmp);Kt(V.nameEl,"color",hf(W)),V.name.op(uf(0.6+0.4*W,q));let Ee=`${Math.round(ve.dot[0])},${Math.round(ve.dot[1])},${Math.round(ve.dot[2])}`;Kt(V.stat.el,"--dot",Ee),Kt(V.statText,"text",M.label),Kt(V.statText,"color",df(ve.dot,ve.power)),Rr(V.statText,ff(1,pe-V.changedAt)),V.stat.op(q);let le=_f(pe,ve.phase),Re=U?yf(le)/7:1;Kt(V.ring,"transform",`translate(-50%,-50%) scale(${Re.toFixed(2)})`),Rr(V.ring,U?bf(le,1):0),Rr(V.glow,Sf(y,1));let Be=vf(pe,ve.phase,U)/6.2;Kt(V.dot,"transform",`translate(-50%,-50%) scale(${Be.toFixed(3)})`);let E=De((W-0.35)/0.65);if(E>0.01){let k=q*E,ae=Yd.count(pe,ve.spawnAt),_e=mf(ve.tokens,ve.seconds,ae);if(_e.tok!==V.tokStr){if(V.tokStr)V.tokFlash=1;V.tokStr=_e.tok}if(_e.time!==V.timeStr){if(V.timeStr&&ae>=1)V.timeFlash=1;V.timeStr=_e.time}V.tokFlash=je(V.tokFlash,0,3.2,We),V.timeFlash=je(V.timeFlash,0,5,We);let be=pf(ve.accent);Kt(V.tokIcon,"color",be),Kt(V.timeIcon,"color",be),Kt(V.tokText,"text",V.tokStr),Kt(V.timeText,"text",V.timeStr),Kt(V.tokText,"color",Ic(V.tokFlash)),Kt(V.timeText,"color",Ic(V.timeFlash)),Rr(V.tokText,Lc(1,V.tokFlash)),Rr(V.timeText,Lc(1,V.timeFlash));let Fe=(1-E)*-4;V.tok.set(0,Fe-V.tokFlash*1.5,1,k),V.time.set(0,Fe-V.timeFlash*1.5,1,k);for(let st=0;st<3;st++){let ot=Math.round(gf(st,pe,U)*20)/20,tt=V.bars[st];Kt(tt,"@height",String(ot)),Kt(tt,"@y",String(8-ot))}let Pe=Math.round(xf(pe,U)*4)/4;Kt(V.hand,"@transform",`rotate(${Pe} 0 1.5)`)}else V.tok.hide(),V.time.hide()}if(H.model&&f.visible){let{orb:V,model:ve}=H;Kt(a,"text",ve),d.set(V.labelAnchor.x,V.labelAnchor.y,V.labelAnchor.z),fe.project(d,x);let C=F(`400 26px ${Fc}`,ve),Ge=Uf(x.x,x.y,C,L(),Je);l.set(Ge.x,Ge.y,Je,De((V.spawn.x-0.3)*1.5)*Mf(pe))}else l.hide();let Me=H.hover,ze=Me&&Me!=="orb"?H.agents.get(Me):void 0;if(ze&&fe.pointerActive){let V=pn[ze.spec.status];if(ze.spec.name!==w||V.label!==T||Me!==b||pe-P>=0.25||pe<P){w=ze.spec.name,T=V.label,P=pe,b=Me;let we=r.querySelector("b"),et=r.querySelector("i"),M=r.querySelector("u"),y=r.querySelectorAll("em");we.textContent=ze.spec.name,M.textContent=V.label,et.style.background=`rgb(${ze.dot[0]|0},${ze.dot[1]|0},${ze.dot[2]|0})`,y[0].textContent=Go(ze.tokens),y[1].textContent=Ho(ze.seconds)}let ve=(fe.pointerNDC.x+1)*0.5*Ie,C=(1-fe.pointerNDC.y)*0.5*j,Ge=Ff(ve,C,Ey,Cy,Ie,j);o.set(Ge.x,Ge.y,1,1)}else o.hide(),b="";if(g.length&&performance.now()/1000-_>0.6)_=performance.now()/1000,s.textContent=g.splice(0).join(". ")},dispose(){for(let z of u.splice(0))z();c.clear(),v.clear(),n?.remove(),s?.remove()}}}var Wf=26;var Wo=(e)=>e<0?0:e>1?1:e;function Xf(e,t,n,i){let s=e.x-t.x,r=e.y-t.y,o=e.z-t.z,a=Math.hypot(s,r,o)+0.001,l=s/a,c=r/a,u=o/a,d=-u,h=0,f=l,x=Math.hypot(d,f);if(x<0.001)d=1,f=0,x=1;d/=x,h/=x,f/=x;let v=h*u-f*c,m=f*l-d*u,p=d*c-h*l,A=e.r*e.spawn.x,R=Math.max(20,a-t.r-A),b=0.6+0.4*i,w=t.r*0.985,T=R*0.15;for(let P=0;P<e.strands.length;P++){let g=e.strands[P],_=g.off===0?0:Math.sin(g.p1)*1.05,D=Math.cos(_),I=Math.sin(_),F=d*D+v*I,X=h*D+m*I,L=f*D+p*I,G=v*D-d*I,Z=m*D-h*I,N=p*D-f*I,ie=g.off*0.2,O=Math.cos(ie),z=Math.sin(ie),H=l*O+F*z,fe=c*O+X*z,pe=u*O+L*z,We=t.x+H*w,Ie=t.y+fe*w,j=t.z+pe*w,xe=e.x-l*A*0.97+F*g.off*A*0.22,re=e.y-c*A*0.97+X*g.off*A*0.22,Se=e.z-u*A*0.97+L*g.off*A*0.22,Ae=(g.a1*0.5+Math.sin(n*g.f1+g.p1)*0.28*b)*R*0.34,me=(g.a2*0.5+Math.sin(n*g.f2+g.p2)*0.28*b)*R*0.34,Te=(g.a2*0.35+Math.sin(n*g.f2*0.8+g.p2+1.3)*0.2*b)*R*0.34,Ne=(g.a1*0.35+Math.sin(n*g.f1*0.8+g.p1+2.1)*0.2*b)*R*0.34,Le=g.pts;Le[0]=We,Le[1]=Ie,Le[2]=j,Le[3]=We+H*R*0.36+F*Ae+G*Te,Le[4]=Ie+fe*R*0.36+X*Ae+Z*Te+T,Le[5]=j+pe*R*0.36+L*Ae+N*Te,Le[6]=xe-l*R*0.36+F*me+G*Ne,Le[7]=re-c*R*0.36+X*me+Z*Ne+T,Le[8]=Se-u*R*0.36+L*me+N*Ne,Le[9]=xe,Le[10]=re,Le[11]=Se}}function Gs(e,t,n){let i=1-t,s=i*i*i,r=3*i*i*t,o=3*i*t*t,a=t*t*t;n[0]=s*e[0]+r*e[3]+o*e[6]+a*e[9],n[1]=s*e[1]+r*e[4]+o*e[7]+a*e[10],n[2]=s*e[2]+r*e[5]+o*e[8]+a*e[11]}var qf=()=>({out:[0,0,0],inn:[0,0,0],spOut:[0,0,0],spIn:[0,0,0]}),Uc=(e,t,n,i)=>{e[0]=t[0]+(n[0]-t[0])*i,e[1]=t[1]+(n[1]-t[1])*i,e[2]=t[2]+(n[2]-t[2])*i},Ly=[200,160,255],Dy=[190,150,255],Ny=[255,255,255],Vf=(e,t,n)=>Uc(e,t,Ny,n);function Oc(e,t){Vf(t.out,e,0.35),Vf(t.inn,e,0.2),Uc(t.inn,t.inn,Ly,0.5),t.spOut[0]=e[0],t.spOut[1]=e[1],t.spOut[2]=e[2],Uc(t.spIn,e,Dy,0.5)}var ni=[0,0,0];function Yf(e,t,n,i,s){let r=(o,a)=>o+n()*(a-o);e.spawnAcc+=t*e.flow*2.4*e.grow;while(e.spawnAcc>=1)if(e.spawnAcc-=1,e.packets.length<16){let o=n()<0.55;e.packets.push({si:Math.floor(n()*e.strands.length),t:o?0:1,dir:o?1:-1,spd:r(0.16,0.34)*(0.7+e.flow*0.5),size:r(0.8,1.4),sparkT:0})}for(let o=e.packets.length-1;o>=0;o--){let a=e.packets[o];if(a.t+=a.spd*a.dir*t,Gs(e.strands[a.si].pts,Wo(a.t),ni),a.sparkT-=t,a.sparkT<=0&&i.sparkCount()<600)a.sparkT=0.045,i.spark(ni[0],ni[1],ni[2],r(-14,14),r(-14,14),r(-14,14),r(0.5,1.2),r(0.6,1.4),a.dir>0?s.spOut:s.spIn);if(a.t>=1&&a.dir>0)e.hit=Math.min(1.2,e.hit+0.28),i.burst(ni[0],ni[1],ni[2],e.col,3,40),e.packets.splice(o,1);else if(a.t<=0&&a.dir<0)i.feed(0.06),i.burst(ni[0],ni[1],ni[2],e.col,2,30),e.packets.splice(o,1);else if(a.t>1.01||a.t<-0.01)e.packets.splice(o,1)}}function Zf(e,t,n){for(let i=0;i<t&&e.packets.length<22;i++)e.packets.push({si:Math.floor(n()*e.strands.length),t:i%2?1:0,dir:i%2?-1:1,spd:0.45+n()*0.35,size:1+n()*0.5,sparkT:0});e.hit=Math.min(1.4,e.hit+0.5)}var $f=(e,t,n)=>(0.1+0.9*Wo(e))*(1+t*0.8+n*0.25),Jf=(e)=>Wo((e-1)/0.07),Kf=(e)=>Math.max(0.07692307692307693,Math.min(1,e)),Qf=(e)=>Wo(e*1.2+0.1);var jf=64,Fy=9,Uy=Fy*2,Oy=jf*Uy,Bc=19,By=`${Bs}
attribute vec3 aP0;
attribute vec3 aP1;
attribute vec3 aP2;
attribute vec3 aP3;
attribute vec4 aParam; // width (design px), alpha, glow flag, visible fraction of the curve
attribute vec3 aCol;   // agent colour 0..1
uniform vec2 uRes;
varying vec2 vUS;      // curve u, px offset from the centre line
varying float vHalf;
varying float vAlpha;
varying float vGlow;
varying vec3 vCol;

vec3 bez(float u) {
  float m = 1.0 - u;
  return m * m * m * aP0 + 3.0 * m * m * u * aP1 + 3.0 * m * u * u * aP2 + u * u * u * aP3;
}
vec3 dbez(float u) {
  float m = 1.0 - u;
  return 3.0 * (m * m * (aP1 - aP0) + 2.0 * m * u * (aP2 - aP1) + u * u * (aP3 - aP2));
}

void main() {
  float u = position.xy.x * aParam.w;
  vec3 P = bez(u);
  vec3 T = dbez(u);
  vec4 c = projectionMatrix * viewMatrix * vec4(P, 1.0);
  if (c.w < 1.0 || aParam.y <= 0.001) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); return; }
  float tl = max(length(T), 1e-4);
  vec4 c2 = projectionMatrix * viewMatrix * vec4(P + T / tl * 4.0, 1.0);
  vec2 s0 = c.xy / c.w * uRes * 0.5;
  vec2 s1 = c2.xy / max(c2.w, 1.0) * uRes * 0.5;
  vec2 dir = s1 - s0;
  float dl = length(dir);
  dir = dl > 1e-4 ? dir / dl : vec2(1.0, 0.0);
  vec2 perp = vec2(-dir.y, dir.x);
  float ppu = projectionMatrix[1][1] * 0.5 * uRes.y / c.w; // px per world unit at this depth
  float glow = aParam.z;
  float wpx = aParam.x * ppu;
  // clamped screen-space width: thin lines stay visible, near ones do not balloon
  wpx = clamp(wpx, mix(0.9, 3.5, glow), aParam.x * 2.2 + 1.6);
  float hw = wpx * 0.5;
  float quad = glow > 0.5 ? hw * 2.2 : hw + 0.9;
  vec2 offPx = perp * (position.xy.y * quad);
  c.xy += offPx * 2.0 / uRes * c.w;
  gl_Position = c;
  vUS = vec2(u, position.xy.y * quad);
  vHalf = hw;
  vGlow = glow;
  vAlpha = aParam.y * (glow > 0.5 ? 1.0 : clamp(wpx, 0.55, 1.0)) * fogFade(P); // depth cue (Addendum A.8)
  vCol = aCol;
}
`,zy=`
precision highp float;
varying vec2 vUS;
varying float vHalf;
varying float vAlpha;
varying float vGlow;
varying vec3 vCol;
void main() {
  float u = vUS.x;
  vec3 c0 = mix(vCol, vec3(160.0, 110.0, 255.0) / 255.0, 0.55);   // 2D L1445
  vec3 c1 = mix(vCol, vec3(90.0, 140.0, 255.0) / 255.0, 0.2);     // 2D L1446
  vec3 c2 = mix(vCol, vec3(1.0), 0.2);                            // 2D L1447
  vec3 g = u < 0.5 ? mix(c0, c1, u * 2.0) : mix(c1, c2, (u - 0.5) * 2.0);
  float d = abs(vUS.y);
  float prof;
  if (vGlow > 0.5) {
    float x = d / max(vHalf * 1.1, 0.001);
    prof = exp(-x * x * 1.6);
  } else {
    float x = clamp(d / (vHalf + 0.75), 0.0, 1.0);
    prof = pow(1.0 - x, 1.4);
  }
  gl_FragColor = vec4(g * (vAlpha * prof), 1.0);
}
`;function ep(){let e,t,n,i,s=new Float32Array(Oy*Bc),r=new Pi(s,Bc,1);r.setUsage(tn);let o=Wf;return{name:"links",renderOrder:lt.links,init(a){t=new Zt;let l=new Float32Array((o+1)*2*3);for(let d=0;d<=o;d++)l[d*6]=d/o,l[d*6+1]=-1,l[d*6+3]=d/o,l[d*6+4]=1;let c=[];for(let d=0;d<o;d++){let h=d*2;c.push(h,h+1,h+2,h+1,h+3,h+2)}t.setAttribute("position",new kt(l,3)),t.setIndex(c);let u=(d,h)=>new _n(r,h,d);t.setAttribute("aP0",u(0,3)),t.setAttribute("aP1",u(3,3)),t.setAttribute("aP2",u(6,3)),t.setAttribute("aP3",u(9,3)),t.setAttribute("aParam",u(12,4)),t.setAttribute("aCol",u(16,3)),t.instanceCount=0,n=new Qe({vertexShader:By,fragmentShader:zy,uniforms:{uRes:{value:a.uniforms.resolution.value},uFog:mi(a.uniforms)},blending:Et,side:un,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),e=new ct(t,n),e.frustumCulled=!1,e.renderOrder=lt.links,e.name="links",i=a.scene,i.add(e)},update(a,l){let c=l.world,u=l.uniforms.motion.value;for(let d of c.agents.values())Xf(d,c.orb,c.time,u)},beforeRender(a){if(!t)return;let l=a.world;Ii(a.uniforms,a.rig.camera.position,l.orb);let c=l.time,u=0,d=0;for(let h of l.agents.values()){if(d++>=jf)break;if(h.grow<=0.001)continue;let f=Jf(h.hover.x),x=$f(h.power,f,h.hit),v=Kf(h.grow),m=h.col[0]/255,p=h.col[1]/255,A=h.col[2]/255;for(let R=0;R<2;R++)for(let b=h.strands.length-1;b>=0;b--){let w=h.strands[b],T=u++*Bc,P=w.pts;for(let g=0;g<12;g++)s[T+g]=P[g];if(R===0)s[T+12]=7*(1+f*0.4),s[T+13]=Math.min(1,0.055*x),s[T+14]=1;else{let g=0.75+0.25*Math.sin(c*1.6+w.p1);s[T+12]=w.w*(1+f*0.4),s[T+13]=Math.min(1,w.alpha*x*g),s[T+14]=0}s[T+15]=v,s[T+16]=m,s[T+17]=p,s[T+18]=A}}t.instanceCount=u,r.needsUpdate=!0},dispose(){if(e)i?.remove(e);t?.dispose(),n?.dispose(),e=void 0,t=void 0,n=void 0}}}var ky=`
attribute vec4 aPos; // xyz centre, w = radius in world units (negative: hard disc)
attribute vec4 aCol; // rgb 0..1, alpha
uniform vec2 uRes;
varying vec2 vC;
varying vec4 vCol;
varying float vDisc;
void main() {
  vec4 mv = viewMatrix * vec4(aPos.xyz, 1.0);
  float r0 = abs(aPos.w);
  float zc = max(-mv.z, 1.0);
  float ppu = projectionMatrix[1][1] * 0.5 * uRes.y / zc; // px per world unit
  float rad = max(r0, 1.2 / ppu);
  float fade = min(1.0, (r0 * r0) / (rad * rad)); // a sprite grown to the 1.2 px floor gets dimmer, not brighter
  vec4 pos = mv;
  pos.xy += position.xy * rad;
  vC = position.xy;
  vDisc = aPos.w < 0.0 ? 1.0 : 0.0;
  vCol = vec4(aCol.rgb, aCol.a * fade * (mv.z < -1.0 ? 1.0 : 0.0));
  gl_Position = projectionMatrix * pos;
}
`,Gy=`
precision highp float;
varying vec2 vC;
varying vec4 vCol;
varying float vDisc;
void main() {
  float d = length(vC);
  if (d >= 1.0) discard;
  float g;
  if (vDisc > 0.5) {
    g = 1.0 - smoothstep(0.6, 1.0, d);
  } else if (d < 0.2) {
    g = mix(1.0, 0.55, d / 0.2);
  } else if (d < 0.5) {
    g = mix(0.55, 0.14, (d - 0.2) / 0.3);
  } else {
    g = mix(0.14, 0.0, (d - 0.5) / 0.5);
  }
  gl_FragColor = vec4(vCol.rgb * (vCol.a * g), 1.0);
}
`;class ts{capacity;mesh;geo;mat;pos;col;aPos;aCol;n=0;scene;constructor(e,t,n,i){this.capacity=e;let s=new Zt;s.setAttribute("position",new kt(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),s.setIndex([0,1,2,0,2,3]),this.pos=new Float32Array(e*4),this.col=new Float32Array(e*4),this.aPos=new Gt(this.pos,4),this.aCol=new Gt(this.col,4),this.aPos.setUsage(tn),this.aCol.setUsage(tn),s.setAttribute("aPos",this.aPos),s.setAttribute("aCol",this.aCol),s.instanceCount=0,this.geo=s,this.mat=new Qe({vertexShader:ky,fragmentShader:Gy,uniforms:{uRes:{value:n.resolution.value}},blending:Et,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),this.mesh=new ct(s,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=t,this.mesh.name=i}attach(e){this.scene=e,e.add(this.mesh)}begin(){this.n=0}add(e,t,n,i,s,r,o,a){if(this.n>=this.capacity||a<=0.004)return;let l=this.n++*4;this.pos[l]=e,this.pos[l+1]=t,this.pos[l+2]=n,this.pos[l+3]=i,this.col[l]=s/255,this.col[l+1]=r/255,this.col[l+2]=o/255,this.col[l+3]=a>1?1:a}end(){this.geo.instanceCount=this.n,this.aPos.needsUpdate=!0,this.aCol.needsUpdate=!0}get count(){return this.n}dispose(){this.scene?.remove(this.mesh),this.geo.dispose(),this.mat.dispose(),this.scene=void 0}}var Hy=4096,Vy=5;function tp(){let e,t,n=new Map,i=[0,0,0],s={x:0,y:0,z:0},r,o=(a)=>{let l=n.get(a);if(!l)l=qf(),n.set(a,l);return l};return{name:"packets",renderOrder:lt.packets,init(a){e=new ts(Hy,lt.packets,a.uniforms,"packets"),e.attach(a.scene),r={sparkCount:()=>a.fx.sparks.length,spark(d,h,f,x,v,m,p,A,R){s.x=d,s.y=h,s.z=f,a.fx.spark(s,{x,y:v,z:m},p,A,R)},burst(d,h,f,x,v,m){s.x=d,s.y=h,s.z=f,a.fx.burst(s,x,v,m)},feed(d){a.world.orb.feed=Math.min(1,a.world.orb.feed+d)}};let l=(d,h)=>{Zf(d,h,a.rng),a.fx.ripple({pos:d,r0:d.r,r1:d.r+70,life:1,color:d.col,width:2.5})},c=a.world.on("pulseAgent",({agent:d,n:h})=>l(d,h)),u=a.world.on("pulse",({id:d})=>{if(d){let h=a.world.agents.get(d);if(h)l(h,5)}else for(let h of a.world.agents.values())l(h,5)});t=()=>{c(),u()}},update(a,l){if(!r)return;for(let c of l.world.agents.values()){if(c.grow<=0.001&&c.packets.length===0)continue;let u=o(c);Oc(c.col,u),Yf(c,a,l.rng,r,u)}},beforeRender(a){if(!e)return;e.begin();for(let l of a.world.agents.values()){if(l.grow<=0.001||l.packets.length===0)continue;let c=o(l);Oc(l.col,c);let u=Qf(l.power);for(let d=0;d<l.packets.length;d++){let h=l.packets[d];if(h.t>l.grow+0.02)continue;let f=h.dir>0?c.out:c.inn,x=l.strands[h.si].pts;for(let v=Vy;v>=1;v--){let m=Math.min(1,Math.max(0,h.t-h.dir*v*0.012));Gs(x,m,i),e.add(i[0],i[1],i[2],5*h.size*(1-v*0.12),f[0],f[1],f[2],(0.5-v*0.08)*u)}Gs(x,Math.min(1,Math.max(0,h.t)),i),e.add(i[0],i[1],i[2],14*h.size,f[0],f[1],f[2],0.75*u),e.add(i[0],i[1],i[2],-1.7*h.size,255,255,255,u)}}e.end()},dispose(){t?.(),t=void 0,e?.dispose(),e=void 0,n.clear()}}}var Wy=1500;function np(){let e;return{name:"sparks",renderOrder:lt.sparks,init(t){e=new ts(Wy,lt.sparks,t.uniforms,"sparks"),e.attach(t.scene)},update(){},beforeRender(t){if(!e)return;let n=t.fx.sparks;e.begin();for(let i=0;i<n.length;i++){let s=n[i],r=1-s.life/s.max;e.add(s.x,s.y,s.z,s.size*3.2,s.col[0],s.col[1],s.col[2],r*0.8)}e.end()},dispose(){e?.dispose(),e=void 0}}}var Xo=pc+4,Xy=`
attribute vec4 aA; // centre xyz, radius R
attribute vec4 aB; // rgb 0..1, alpha
attribute vec2 aC; // line width (world), shell flag
uniform vec2 uRes;
varying vec2 vC;
varying vec4 vCol;
varying vec3 vP; // R, half width, world units per px
varying float vShell;
void main() {
  vec4 mv = viewMatrix * vec4(aA.xyz, 1.0);
  float zc = max(-mv.z, 1.0);
  float upp = zc / (projectionMatrix[1][1] * 0.5 * uRes.y); // world units per px
  float hw = max(aC.x * 0.5, 0.6 * upp); // never thinner than ~1.2 px
  float ext = aA.w + hw + 2.0 * upp;
  vec4 pos = mv;
  pos.xy += position.xy * ext;
  vC = position.xy * ext;
  vP = vec3(aA.w, hw, upp);
  vShell = aC.y;
  float thin = min(1.0, aC.x * 0.5 / hw);
  vCol = vec4(aB.rgb, aB.a * thin * (mv.z < -1.0 ? 1.0 : 0.0));
  gl_Position = projectionMatrix * pos;
}
`,qy=`
precision highp float;
varying vec2 vC;
varying vec4 vCol;
varying vec3 vP;
varying float vShell;
void main() {
  float d = length(vC);
  float R = vP.x;
  float hw = vP.y;
  float aa = vP.z;
  float band = 1.0 - smoothstep(hw - aa, hw + aa, abs(d - R));
  float g = band;
  if (vShell > 0.5) {
    float rho = clamp(d / max(R, 0.001), 0.0, 1.0);
    // limb brightening of a thin shell: path length ~ 1/sqrt(1 - rho^2)
    float limb = 1.0 / sqrt(max(1.0 - rho * rho, 0.04)) - 1.0;
    g = max(band, 0.16 * limb * step(d, R)) ;
    g = min(g, 1.0);
  }
  if (g <= 0.002) discard;
  gl_FragColor = vec4(vCol.rgb * (vCol.a * g), 1.0);
}
`;function ip(){let e,t,n,i,s=new Float32Array(Xo*4),r=new Float32Array(Xo*4),o=new Float32Array(Xo*2),a=new Gt(s,4),l=new Gt(r,4),c=new Gt(o,2);return a.setUsage(tn),l.setUsage(tn),c.setUsage(tn),{name:"ripples",renderOrder:lt.ripples,init(u){t=new Zt,t.setAttribute("position",new kt(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),t.setIndex([0,1,2,0,2,3]),t.setAttribute("aA",a),t.setAttribute("aB",l),t.setAttribute("aC",c),t.instanceCount=0,n=new Qe({vertexShader:Xy,fragmentShader:qy,uniforms:{uRes:{value:u.uniforms.resolution.value}},blending:Et,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),e=new ct(t,n),e.frustumCulled=!1,e.renderOrder=lt.ripples,e.name="ripples",i=u.scene,i.add(e)},update(){},beforeRender(u){if(!t)return;let d=u.fx.ripples,h=Math.min(d.length,Xo);for(let f=0;f<h;f++){let x=d[f],v=x.life/x.max,m=En(v);s[f*4]=x.x,s[f*4+1]=x.y,s[f*4+2]=x.z,s[f*4+3]=At(x.r0,x.r1,m),r[f*4]=x.col[0]/255,r[f*4+1]=x.col[1]/255,r[f*4+2]=x.col[2]/255,r[f*4+3]=(1-v)*0.55,o[f*2]=x.w*(1-v*0.6),o[f*2+1]=x.shell?1:0}t.instanceCount=h,a.needsUpdate=!0,l.needsUpdate=!0,c.needsUpdate=!0},dispose(){if(e)i?.remove(e);t?.dispose(),n?.dispose(),e=void 0,t=void 0,n=void 0}}}var sp=260000,op=900,Yy=180,Hs=12,qo=0,Yo=1,Zo=2,$o=3,Jo=4,Ko=5,Zy=6,Qo=7,$y=8,Jy=9,rp=10,Ky=11,Qy=0.05,jy=0.03,eb=70,tb=(e,t,n,i=1024,s=1536)=>De(Math.round(e*t/(i*s)*560*(n?0.4:1)),Yy,op);class zc{rand;data=new Float32Array(op*Hs);count=0;LW=1024;LH=1536;classes;constructor(e,t=6){this.rand=e;this.classes=t}rnd(e,t){return e+this.rand()*(t-e)}setViewport(e,t,n,i,s){this.LW=e,this.LH=t;let r=tb(e,t,n);if(this.count===0||Math.abs(this.count-r)/r>0.25){this.count=r;for(let o=0;o<r;o++)this.spawn(o,!0,-1,0,0,0,i,s);return!0}return!1}spawn(e,t,n,i,s,r,o,a){let l=this.data,c=e*Hs,u=this.rnd(0,ut),d=Math.hypot(this.LW,this.LH)*0.55,h,f;if(t)h=this.rnd(-this.LW/2-40,this.LW/2+40),f=this.rnd(-this.LH/2-40,this.LH/2+40);else{let T=this.rnd(o*1.6,d);h=i+Math.cos(u)*T,f=r+Math.sin(u)*T*1.1}let x=s+(this.rand()+this.rand()+this.rand()-1.5)*(eb*1.33),v=h-i,m=x-s,p=f-r,A=Math.hypot(v,m,p)+1,R=Math.hypot(v,p)+0.000001,b=Math.sqrt(sp/A)*this.rnd(0.45,1.05)*a,w=this.rand()<0.88?1:-1;l[c+qo]=h,l[c+Yo]=x,l[c+Zo]=f,l[c+$o]=-p/R*b*w,l[c+Jo]=this.rnd(-3,3)*a,l[c+Ko]=v/R*b*w,l[c+Zy]=this.rnd(0.7,2.3),l[c+Qo]=n>=0?n:Math.floor(Math.pow(this.rand(),1.5)*this.classes),l[c+$y]=this.rnd(0,ut),l[c+Jy]=this.rnd(0.8,3),l[c+rp]=t?5:0,l[c+Ky]=this.rand()<0.12?1:0}shockwave(e,t,n,i,s){let r=this.data;for(let o=0;o<this.count;o++){let a=o*Hs,l=r[a+qo]-e,c=r[a+Yo]-t,u=r[a+Zo]-n,d=Math.hypot(l,c,u)+1;if(d>520)continue;let h=i/(1+d/90)*s;r[a+$o]+=l/d*h,r[a+Jo]+=c/d*h,r[a+Ko]+=u/d*h}}step(e,t){let n=this.data,{cx:i,cy:s,cz:r,R:o,agents:a,ptrMass:l,motion:c}=t,u=o*o*0.72,d=this.LW/2+260,h=this.LH/2+260,f=Math.exp(-0.05*e),x=Math.exp(-jy*e),v=a.length;for(let m=0;m<this.count;m++){let p=m*Hs;n[p+rp]+=e;let A=n[p+qo],R=n[p+Yo],b=n[p+Zo],w=i-A,T=s-R,P=r-b,g=w*w+T*T+P*P,_=g+1200,D=sp/(_*Math.sqrt(_)),I=w*D,F=T*D,X=P*D;if(g<u){t.onConsume(A,R,b,n[p+Qo]),this.spawn(m,!1,n[p+Qo],i,s,r,o,c);continue}for(let H=0;H<v;H++){let fe=a[H];w=fe.x-A,T=fe.y-R,P=fe.z-b,_=w*w+T*T+P*P+500,D=9000*(0.25+fe.power)*(fe.dragging?3:1)/(_*Math.sqrt(_)),I+=w*D,F+=T*D,X+=P*D}if(l)w=t.px-A,T=t.py-R,P=t.pz-b,_=w*w+T*T+P*P+900,D=l/(_*Math.sqrt(_)),I+=w*D,F+=T*D,X+=P*D;F-=(R-s)*Qy;let L=n[p+$o]+I*e*c,G=n[p+Jo]+F*e*c,Z=n[p+Ko]+X*e*c;L*=f,G*=f*x,Z*=f;let N=Math.hypot(L,G,Z);if(N>240){let H=240/N;L*=H,G*=H,Z*=H}n[p+$o]=L,n[p+Jo]=G,n[p+Ko]=Z;let ie=A+L*e,O=R+G*e,z=b+Z*e;if(n[p+qo]=ie,n[p+Yo]=O,n[p+Zo]=z,ie<i-d||ie>i+d||z<r-h||z>r+h||O<s-900||O>s+900)this.spawn(m,!1,n[p+Qo],i,s,r,o,c)}}}var nb=26000,ib=150000,sb=new B(140,180,255).divideScalar(255),kc=240,rb=`${Bs}
attribute vec3 iPos;
attribute vec3 iVel;
attribute vec4 iA; // size, class, phase, twinkle frequency
attribute vec2 iB; // age, big
uniform float uTime;
uniform float uDpr;
uniform vec2 uRes;
uniform vec3 uPal[6];
varying vec2 vLocal;
varying vec3 vInfo; // streak length (px), core width (px), glow radius (px)
varying vec3 vCol;
varying vec2 vAlpha; // alpha, core dimming for sub-pixel sizes
void main() {
  vec4 hc = projectionMatrix * modelViewMatrix * vec4(iPos, 1.0);
  if (hc.w < 1.0) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); vLocal = vec2(0.0); vInfo = vec3(0.0); vCol = vec3(0.0); vAlpha = vec2(0.0); return; }
  // 2D L1424-1431: speed > 70 is drawn as a streak from the head back along -v * 0.05
  vec4 tc = projectionMatrix * modelViewMatrix * vec4(iPos - iVel * 0.05, 1.0);
  float sp = length(iVel);
  float streak = step(70.0, sp);
  vec2 half_ = 0.5 * uRes;
  vec2 hpx = hc.xy / hc.w * half_;
  vec2 tpx = tc.xy / max(tc.w, 0.5) * half_;
  float ppu = half_.y * projectionMatrix[1][1] / hc.w; // px per world unit at this depth
  float s = iA.x;
  float sizePx = s * ppu;
  float minPx = 1.0 / uDpr; // one device pixel
  float w = streak > 0.5 ? max(sizePx * 0.8, minPx) : max(sizePx, minPx);
  float dim = min(sizePx / minPx, 1.0);
  vec2 d = (tpx - hpx) * streak;
  float len = length(d);
  vec2 dir = len > 1e-4 ? d / len : vec2(1.0, 0.0);
  vec2 perp = vec2(-dir.y, dir.x);
  float G = iB.y > 0.5 ? s * 5.0 * ppu : 0.0; // 12% big glow: s * 5 (2D L1420)
  float ext = max(w * 0.5, G) + 1.0;
  vec2 local = vec2(position.x * (len * 0.5 + ext), position.y * ext);
  vec2 ppx = hpx + dir * (len * 0.5) + dir * local.x + perp * local.y;
  gl_Position = vec4(ppx / half_ * hc.w, hc.z, hc.w);
  vLocal = local;
  vInfo = vec3(len, w, G);
  vCol = uPal[int(iA.y + 0.5)];
  // twinkle, fade-in, alpha (2D L1416-1418)
  float tw = 0.55 + 0.45 * sin(uTime * iA.w + iA.z);
  float fade = clamp(iB.x / 1.2, 0.0, 1.0);
  vAlpha = vec2(tw * fade * 0.85 * fogFade(iPos), dim); // depth cue (Addendum A.8)
}
`,ob=`
precision highp float;
varying vec2 vLocal;
varying vec3 vInfo;
varying vec3 vCol;
varying vec2 vAlpha;
void main() {
  float hl = vInfo.x * 0.5;
  float dx = clamp(vLocal.x, -hl, hl);
  float dist = length(vec2(vLocal.x - dx, vLocal.y));
  float core = clamp(vInfo.y * 0.5 + 0.5 - dist, 0.0, 1.0) * vAlpha.y;
  float g = 0.0;
  if (vInfo.z > 0.0) {
    // the 2D glow sprite profile: 1 at the centre, 0.55 at 20%, 0.14 at 50%, 0 at the edge (assets.ts)
    float r = length(vLocal - vec2(-hl, 0.0)) / vInfo.z;
    g = r >= 1.0 ? 0.0 : r < 0.2 ? mix(1.0, 0.55, r / 0.2) : r < 0.5 ? mix(0.55, 0.14, (r - 0.2) / 0.3) : mix(0.14, 0.0, (r - 0.5) / 0.5);
  }
  float a = vAlpha.x * (core + g * 0.55);
  gl_FragColor = vec4(vCol * a, 1.0);
}
`,ab=`
varying vec2 vP;
uniform float uSpan;
void main() {
  vP = (uv - 0.5) * uSpan;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,lb=`
precision highp float;
varying vec2 vP;
uniform float uRadius;
uniform float uAlpha;
uniform float uHalfW; // half line width in world units
uniform vec3 uColor;
void main() {
  float d = abs(length(vP) - uRadius);
  float a = clamp((uHalfW + 0.5 * uHalfW - d) / max(uHalfW, 1e-3), 0.0, 1.0) * uAlpha;
  gl_FragColor = vec4(uColor * a, 1.0);
}
`;function ap(){let e,t,n,i,s,r,o,a,l,c,u,d=[],h=new B,f=new B,x=0,v=!1,m=0,p=0,A=!1,R=new B,b=new B(0,1,0),w=new Wn().setFromAxisAngle(new B(1,0,0),-Math.PI/2),T=new B,P=!1,g={cx:0,cy:0,cz:0,R:135,agents:d,ptrMass:0,px:0,py:0,pz:0,motion:1,onConsume:(_,D,I,F)=>{}};return{name:"dust",renderOrder:lt.dust,init(_){l=_.scene;let D=_.world;e=new zc(_.rng,ko.length);let I=()=>{let L=_.uniforms.motion.value<0.5;e.setViewport(D.layout.LW,D.layout.LH,L,D.orb.r,_.uniforms.motion.value)};I(),u=D.on("layout",I),c=_.fx.onShockwave((L,G)=>{e.shockwave(L.x,L.y,L.z,G,_.uniforms.motion.value)});let F=new B;g.onConsume=(L,G,Z,N)=>{if(D.orb.feed=Math.min(1,D.orb.feed+0.012),_.rng()<0.3)F.x=L,F.y=G,F.z=Z,_.fx.burst(F,ko[N],1,25)};let X=new dn(2,2);n=new Zt,n.setIndex(X.getIndex()),n.setAttribute("position",X.getAttribute("position")),X.dispose(),s=new Pi(e.data,Hs,1),s.setUsage(tn),n.setAttribute("iPos",new _n(s,3,0)),n.setAttribute("iVel",new _n(s,3,3)),n.setAttribute("iA",new _n(s,4,6)),n.setAttribute("iB",new _n(s,2,10)),n.instanceCount=e.count,i=new Qe({vertexShader:rb,fragmentShader:ob,uniforms:{uTime:_.uniforms.time,uDpr:_.uniforms.dpr,uRes:{value:_.uniforms.resolution.value},uFog:mi(_.uniforms),uPal:{value:ko.map((L)=>new B(L[0],L[1],L[2]).divideScalar(255))}},blending:Et,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),t=new ct(n,i),t.frustumCulled=!1,t.renderOrder=lt.dust,t.name="dust",l.add(t),a=new dn(1,1),o=new Qe({vertexShader:ab,fragmentShader:lb,uniforms:{uSpan:{value:kc},uRadius:{value:60},uAlpha:{value:0},uHalfW:{value:0.75},uColor:{value:sb}},blending:Et,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),r=new ct(a,o),r.scale.set(kc,kc,1),r.frustumCulled=!1,r.visible=!1,r.renderOrder=lt.rings,r.name="dust-well-ring",l.add(r)},update(_,D){let I=e,{world:F,rig:X}=D,L=D.uniforms.motion.value;d.length=0;for(let N of F.agents.values())d.push(N);let G=!1;for(let N=0;N<d.length;N++)if(d[N].dragging)G=!0;if(f.set(F.orb.x,F.orb.y,F.orb.z),A=!1,v=X.pointerActive,X.camera.getWorldDirection(T),P=Math.abs(T.y)>0.3,v&&X.pointerWorldOnPlane(f,P?b:void 0,h)&&h.distanceToSquared(f)<6250000)A=!0;let Z=X.dragging;x=A?Z?ib:nb:0,m=je(m,Z?1:0,14,_),p=je(p,A&&!G?1:0,14,_),g.cx=F.orb.x,g.cy=F.orb.y,g.cz=F.orb.z,g.R=F.orb.r,g.ptrMass=x,g.px=h.x,g.py=h.y,g.pz=h.z,g.motion=L,I.step(_,g)},beforeRender(_){if(!e||!n||!s||!r||!o)return;Ii(_.uniforms,_.rig.camera.position,_.world.orb),s.needsUpdate=!0,n.instanceCount=e.count;let D=p>0.01&&A;if(r.visible=D,!D)return;let I=_.uniforms.time.value*0.8%1,F=m,X=60-I*55*F+I*24*(1-F);R.copy(h),r.position.copy(R),r.quaternion.copy(P?w:_.rig.camera.quaternion);let G=2*_.rig.camera.position.distanceTo(R)*Math.tan(_.rig.camera.fov*Math.PI/360)/Math.max(1,_.uniforms.resolution.value.y);o.uniforms.uRadius.value=X,o.uniforms.uAlpha.value=(1-I)*(0.12+F*0.3)*p,o.uniforms.uHalfW.value=Math.max(0.75,G*0.6)},onResize(_,D,I){i?.uniforms.uRes.value?.copy(I.uniforms.resolution.value)},dispose(){if(c?.(),u?.(),t)l?.remove(t);if(r)l?.remove(r);n?.dispose(),i?.dispose(),a?.dispose(),o?.dispose(),t=void 0,r=void 0,n=void 0,i=void 0,o=void 0,a=void 0,s=void 0,e=void 0}}}var Pr=[[0,[255,205,255]],[0.14,[226,118,255]],[0.38,[168,92,255]],[0.62,[84,152,255]],[0.84,[96,232,255]],[1,[255,215,255]]],cb=(e,t,n)=>[At(e[0],t[0],n),At(e[1],t[1],n),At(e[2],t[2],n)],Ir=Array.from({length:65},(e,t)=>{let n=t/64;for(let i=1;i<Pr.length;i++){let[s,r]=Pr[i];if(n<=s){let[o,a]=Pr[i-1];return cb(a,r,(n-o)/(s-o))}}return Pr[Pr.length-1][1]}),up=(e)=>Ir[Math.round(De(e)*64)],lp=[-0.92,-0.5,-0.12,0.18,0.55,0.9],hb=0.4,cp=90,ub=96,ns=8,Vs=0,hp=1,Gc=2,Hc=3,Vc=4,Wc=5,Xc=6,qc=7;class Yc{rand;th=-0.95;thT=-0.95;ph=-0.55;phT=-0.55;sc=0.25;scT=0.25;el=1;elT=1;di=0;diT=0;dn=1;dnT=1;next=0;k=0;kk=0;acc=0;sacc=0;cx=0;cy=0;A=1;B=1;c=1;s=0;a0=0;sA=0;sB=1;fax=0;fay=0;fbx=0;fby=0;nax=0;nay=0;nbx=0;nby=0;ft=0;thE=-0.95;tilt=0;fm={th:-0.95,ph:-0.55,sc:0.25,el:1,di:0,dn:1};R=135;particles=new Float32Array(cp*ns);count=0;lp=new Float64Array(4);fp=new Float64Array(2);constructor(e){this.rand=e}rnd(e,t){return e+this.rand()*(t-e)}loopAt(e){let t=this.lp,n=this.a0+e*ut,i=Math.cos(n),s=Math.sin(n),r=this.A*i,o=this.B*s;t[0]=this.cx+r*this.c-o*this.s,t[1]=this.cy+r*this.s+o*this.c;let a=this.B*i,l=this.A*s,c=Math.hypot(a,l)||1;t[2]=(a*this.c-l*this.s)/c,t[3]=(a*this.s+l*this.c)/c;let u=this.R*this.sc*(0.1*Math.sin(e*ut*2+this.ft*0.7)+0.05*Math.sin(e*ut*4-this.ft*0.6))*(0.4+0.6*this.kk);return t[0]+=t[2]*u,t[1]+=t[3]*u,t}flareOff(e,t,n,i,s,r){let o=this.R*this.sc*0.5*(0.55+0.45*s)*(0.1+0.9*Math.pow(Math.sin(Math.PI*e),0.75)),a=Math.sin(e*ut*1.4+i+r*0.45)*n,l=(Math.sin(e*7-r*0.8+i*1.3)+0.5*Math.sin(e*15+r*1.2+i*2.1))*0.15;return(t*0.35+a*0.75+l)*o}strandAt(e,t,n,i,s,r){let o=this.loopAt(At(this.sA,this.sB,e)),a=this.flareOff(e,t,n,i,s,r);return this.fp[0]=o[0]+o[2]*a,this.fp[1]=o[1]+o[3]*a,this.fp}step(e,t){let n=t.R;this.R=n;let i=t.motion,s=e*hb;this.ft+=s;let r=this.ft,o=t.active,a=o>0?De(0.78+o*0.05):0.1;this.k=je(this.k,a,o>0?1.4:0.8,e);let l=this.kk=De(this.k*De(t.spawn)+t.feed*0.5);if(r>=this.next){this.next=r+this.rnd(2.4,5.5),this.thT=De(this.th+this.rnd(-1.6,1.6),-2.6,0.6),this.phT=this.thT+this.rnd(-0.6,1.2);let D=this.rand();this.scT=0.35*(D<0.72?this.rnd(0.5,0.8):D<0.88?this.rnd(0.85,1):this.rnd(0.3,0.45)),this.elT=this.rnd(0.8,1.25),this.diT=this.rnd(-0.12,0.12);let I=this.rand();this.dnT=I<0.75?this.rnd(0.6,1.3):I<0.93?this.rnd(0.12,0.3):0.03}let c=this.fm;c.th=je(c.th,this.thT,1.4,s),this.th=je(this.th,c.th,1.4,s),c.ph=je(c.ph,this.phT,1.3,s),this.ph=je(this.ph,c.ph,1.3,s),c.sc=je(c.sc,this.scT,1.8,s),this.sc=je(this.sc,c.sc,1.8,s),c.el=je(c.el,this.elT,1.4,s),this.el=je(this.el,c.el,1.4,s),c.di=je(c.di,this.diT,1.4,s),this.di=je(this.di,c.di,1.4,s),c.dn=je(c.dn,this.dnT,1.2,s),this.dn=je(this.dn,c.dn,1.2,s);let u=this.sc*(1+0.05*Math.sin(r*0.8)),d=this.th+Math.sin(r*0.35)*0.06;this.thE=d;let h=n*(0.65+1.4*u+this.di);this.cx=Math.cos(d)*h,this.cy=Math.sin(d)*h,this.A=n*u*(1.45+0.36*l)*this.el,this.B=n*u*(1+0.2*l)/Math.sqrt(this.el);let f=this.ph+Math.sin(r*0.31)*0.12;this.c=Math.cos(f),this.s=Math.sin(f),this.tilt=i*(0.7*Math.sin(r*0.9+1.3)+0.25*Math.sin(r*0.37+4.1));let x=ub,v=this.a0;this.a0=0;let m=1e9,p=0;for(let D=0;D<x;D++){let I=this.loopAt(D/x),F=Math.hypot(I[0],I[1]);if(F<m)m=F,p=D}let A=p/x*ut;this.a0=v+(((A-v+Math.PI)%ut+ut)%ut-Math.PI)*(1-Math.exp(-8*e));let R=-1,b=-1,w=0;for(let D=0;D<=x;D++){let I=this.loopAt(D/x),F=Math.hypot(I[0],I[1])-n*0.985;if(D>0){if(w<=0&&F>0){let X=-w/(F-w);R=(D-1+X)/x}if(w>0&&F<=0){let X=w/(w-F);b=(D-1+X)/x}}w=F}if(R<0||b<0||b<=R)R=0,b=1;let T=1-Math.exp(-10*e);this.sA+=(Math.max(0,R-1.5/x)-this.sA)*T,this.sB+=(Math.min(1,b+1.5/x)-this.sB)*T;let P=this.loopAt(this.sA);this.fax=P[0],this.fay=P[1];let g=Math.hypot(P[0],P[1])||1;this.nax=P[0]/g,this.nay=P[1]/g,P=this.loopAt(this.sB),this.fbx=P[0],this.fby=P[1],g=Math.hypot(P[0],P[1])||1,this.nbx=P[0]/g,this.nby=P[1]/g,this.acc=Math.min(8,this.acc+e*20*l*this.dn*(0.5+0.5*this.sc)*i);let _=this.particles;while(this.acc>=1&&this.count<cp){this.acc-=1;let D=lp[Math.floor(this.rand()*lp.length)],I=this.count++*ns;_[I+Vs]=this.rnd(0,0.04),_[I+hp]=this.rnd(0.09,0.24),_[I+Gc]=De(D+(this.rand()+this.rand()+this.rand()-1.5)*0.22,-1.1,1.1),_[I+Hc]=this.rnd(0.25,1),_[I+Vc]=this.rnd(0,ut),_[I+Wc]=this.rnd(0.8,2.4),_[I+Xc]=this.rnd(-0.12,0.12),_[I+qc]=this.rand()<0.12?1:0}this.sacc=Math.min(3,this.sacc+e*1.2*l*this.dn*(0.5+0.5*this.sc)*i);while(this.sacc>=1&&t.sparkRoom){this.sacc-=1;let D=this.rnd(0.05,0.95),I=this.loopAt(At(this.sA,this.sB,D)),F=this.rnd(20,90);t.onSpark(I[0],I[1],I[2]*F+this.rnd(-20,20),I[3]*F+this.rnd(-20,20),this.rnd(0.6,1.5),this.rnd(0.8,2),D)}for(let D=this.count-1;D>=0;D--){let I=D*ns;if(_[I+Vs]+=_[I+hp]*s*(1.55-_[I+Vs]*0.85)*(0.55+l*0.9)*i,_[I+Vs]>=1){let F=--this.count*ns;if(F!==I)for(let X=0;X<ns;X++)_[I+X]=_[F+X]}}}}var Zc=16,dp=520,db=5,fb=0.93,pb=`
attribute vec4 iA; // p0.xyz, width (world units)
attribute vec4 iB; // p1.xyz, glow radius (world units)
attribute vec4 iC; // hue (<0: use iD.rgb), lighten, core alpha, glow alpha
attribute vec4 iD; // rgb override 0..1
uniform float uDpr;
uniform vec2 uRes;
uniform sampler2D uLut;
varying vec2 vLocal;
varying vec3 vInfo; // length (px), width (px), glow radius (px)
varying vec3 vCol;
varying vec2 vAlpha; // core alpha (dimmed when sub-pixel), glow alpha
void main() {
  vec4 hc = projectionMatrix * modelViewMatrix * vec4(iA.xyz, 1.0);
  if (hc.w < 1.0) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); vLocal = vec2(0.0); vInfo = vec3(0.0); vCol = vec3(0.0); vAlpha = vec2(0.0); return; }
  vec4 tc = projectionMatrix * modelViewMatrix * vec4(iB.xyz, 1.0);
  vec2 half_ = 0.5 * uRes;
  vec2 hpx = hc.xy / hc.w * half_;
  vec2 tpx = tc.xy / max(tc.w, 0.5) * half_;
  float ppu = half_.y * projectionMatrix[1][1] / hc.w;
  float minPx = 1.0 / uDpr;
  float wpx = iA.w * ppu;
  float w = max(wpx, minPx);
  float dim = iA.w > 0.0 ? min(wpx / minPx, 1.0) : 0.0;
  vec2 d = tpx - hpx;
  float len = length(d);
  vec2 dir = len > 1e-4 ? d / len : vec2(1.0, 0.0);
  vec2 perp = vec2(-dir.y, dir.x);
  float G = iB.w * ppu;
  float ext = max(w * 0.5, G) + 1.0;
  vec2 local = vec2(position.x * (len * 0.5 + ext), position.y * ext);
  vec2 ppx = hpx + dir * (len * 0.5) + dir * local.x + perp * local.y;
  gl_Position = vec4(ppx / half_ * hc.w, hc.z, hc.w);
  vLocal = local;
  vInfo = vec3(len, w, G);
  // palette LUT: index round(h * 64) (2D L109), nearest texel
  float idx = floor(clamp(iC.x, 0.0, 1.0) * 64.0 + 0.5);
  vec3 col = iC.x < 0.0 ? iD.rgb : texture2D(uLut, vec2((idx + 0.5) / 65.0, 0.5)).rgb;
  vCol = mix(col, vec3(1.0), iC.y);
  vAlpha = vec2(iC.z * dim, iC.w);
}
`,mb=`
precision highp float;
varying vec2 vLocal;
varying vec3 vInfo;
varying vec3 vCol;
varying vec2 vAlpha;
void main() {
  float hl = vInfo.x * 0.5;
  float dx = clamp(vLocal.x, -hl, hl);
  float core = clamp(vInfo.y * 0.5 + 0.5 - length(vec2(vLocal.x - dx, vLocal.y)), 0.0, 1.0);
  float g = 0.0;
  if (vInfo.z > 0.0 && vAlpha.y > 0.0) {
    // the 2D glow sprite profile (assets.ts): 1 at the centre, 0.55 at 20%, 0.14 at 50%, 0 at the edge
    float r = length(vLocal - vec2(-hl, 0.0)) / vInfo.z;
    g = r >= 1.0 ? 0.0 : r < 0.2 ? mix(1.0, 0.55, r / 0.2) : r < 0.5 ? mix(0.55, 0.14, (r - 0.2) / 0.3) : mix(0.14, 0.0, (r - 0.5) / 0.5);
  }
  gl_FragColor = vec4(vCol * (core * vAlpha.x + g * vAlpha.y), 1.0);
}
`;function fp(){let e,t,n,i,s,r,o,a,l,c,u,d=1,h=0,f=1,x=0,v=0,m=0,p=0,A=0,R=0,b=0,w=(Z,N)=>{let ie=d*Z+h*N;A=v+Z*f+d*ie*(1-f),R=m+N*f+h*ie*(1-f),b=p+(d*N-h*Z)*x},T=0,P=(Z,N,ie,O,z,H,fe,pe,We,Ie,j,xe,re=0,Se=0,Ae=0)=>{if(T>=dp)return;let me=T++*Zc;u[me]=Z,u[me+1]=N,u[me+2]=ie,u[me+3]=O,u[me+4]=z,u[me+5]=H,u[me+6]=fe,u[me+7]=pe,u[me+8]=We,u[me+9]=Ie,u[me+10]=j,u[me+11]=xe,u[me+12]=re,u[me+13]=Se,u[me+14]=Ae},g=(Z,N,ie,O,z,H)=>{if(z<=0.004||ie<=0.5)return;if(w(Z,N),H)P(A,R,b,0,A,R,b,ie,-1,0,0,De(z),H[0]/255,H[1]/255,H[2]/255);else P(A,R,b,0,A,R,b,ie,O,0,0,De(z))},_=(Z,N,ie,O,z,H,fe,pe)=>{if(pe<=0.004)return;w(Z,N);let We=A,Ie=R,j=b;w(ie,O),P(We,Ie,j,z,A,R,b,0,H,fe,De(pe),0)},D={R:135,motion:1,active:0,spawn:0,feed:0,sparkRoom:!0,onSpark:()=>{}},I={x:0,y:0,z:0},F={x:0,y:0,z:0},X=new Float64Array(6),L=(Z,N,ie)=>{let O=e;d=Math.cos(O.thE),h=Math.sin(O.thE),f=Math.cos(O.tilt),x=Math.sin(O.tilt),v=Z,m=N,p=ie};return{get sim(){return e},name:"flare",renderOrder:lt.flare,init(Z){c=Z.scene,e=new Yc(Z.rng),u=new Float32Array(dp*Zc);let N=new Uint8Array(260);for(let O=0;O<65;O++)N[O*4]=Math.round(Ir[O][0]),N[O*4+1]=Math.round(Ir[O][1]),N[O*4+2]=Math.round(Ir[O][2]),N[O*4+3]=255;l=new gr(N,65,1,Fn,An),l.minFilter=Vn,l.magFilter=Vn,l.generateMipmaps=!1,l.needsUpdate=!0;let ie=new dn(2,2);r=new Zt,r.setIndex(ie.getIndex()),r.setAttribute("position",ie.getAttribute("position")),ie.dispose(),a=new Pi(u,Zc,1),a.setUsage(tn),r.setAttribute("iA",new _n(a,4,0)),r.setAttribute("iB",new _n(a,4,4)),r.setAttribute("iC",new _n(a,4,8)),r.setAttribute("iD",new _n(a,4,12)),r.instanceCount=0,o=new Qe({vertexShader:pb,fragmentShader:mb,uniforms:{uDpr:Z.uniforms.dpr,uRes:{value:Z.uniforms.resolution.value},uLut:{value:l}},blending:Et,transparent:!0,depthTest:!0,depthWrite:!1,toneMapped:!1}),t=new ct(r,o),t.frustumCulled=!1,t.renderOrder=db,t.name="flare",t.visible=!1,c.add(t),i=new di(1,28,18),s=new Ri({colorWrite:!1,depthWrite:!0,depthTest:!0}),n=new ct(i,s),n.frustumCulled=!1,n.visible=!1,n.name="flare-occluder",c.add(n),D.onSpark=(O,z,H,fe,pe,We,Ie)=>{w(O,z),I.x=A,I.y=R,I.z=b;let j=d*H+h*fe;F.x=H*f+d*j*(1-f),F.y=fe*f+h*j*(1-f),F.z=(d*fe-h*H)*x,Z.fx.spark(I,F,pe,We,es(up(Ie),0.3))}},update(Z,N){let ie=e,O=N.world,z=0;for(let H of O.agents.values())if(H.power>0.3)z++;D.R=O.orb.r,D.motion=N.uniforms.motion.value,D.active=z,D.spawn=O.orb.spawn.x,D.feed=O.orb.feed,D.sparkRoom=N.fx.sparks.length<700,L(O.orb.x,O.orb.y,O.orb.z),ie.step(Z,D)},beforeRender(Z){let N=e;if(!N||!t||!r||!a||!n)return;let ie=Z.world,O=N.kk;if(N.count===0&&O<0.02){t.visible=!1,n.visible=!1;return}t.visible=!0,n.visible=!0,n.position.set(ie.orb.x,ie.orb.y,ie.orb.z),n.scale.setScalar(ie.orb.r*fb);let z=ie.orb.r,H=N.ft;L(ie.orb.x,ie.orb.y,ie.orb.z),T=0;for(let me=0;me<14;me++){let Te=(me+0.5)/14,Ne=N.loopAt(At(N.sA,N.sB,Te)),Le=Math.sin(Math.PI*Te),Je=z*0.28+Math.sin(H*0.7+me*1.9)*z*0.22;g(Ne[0]+Ne[2]*Je,Ne[1]+Ne[3]*Je,z*N.sc*(0.7+0.45*Le),Te*0.9+0.05,(0.14+0.14*Le)*O)}let fe=48,pe=8,We=fe/pe;for(let me=0;me<3;me++){let Te=0.35+0.25*me,Ne=me*2.1;for(let Le=0;Le<pe;Le++){let Je=(Le+0.5)/pe,dt=(0.12+0.3*(0.5+0.5*Math.sin(H*1.2+Je*11+me*2)))*O*Math.sin(Math.PI*Je);if(dt<=0.004)continue;let Me=N.strandAt(Le*We/fe,0,Te,Ne,O,H),ze=Me[0],V=Me[1];for(let ve=1;ve<=We;ve++)Me=N.strandAt((Le*We+ve)/fe,0,Te,Ne,O,H),_(ze,V,Me[0],Me[1],1.1,Je,0.55,dt),ze=Me[0],V=Me[1]}}let Ie=De(O*1.9*(0.55+0.45*N.dn)),j=8,xe=0.016*(0.6+O),re=[0.22,0.45,0.8],Se=0,Ae=N.particles;for(let me=0;me<N.count;me++){let Te=me*ns,Ne=Ae[Te+Vs],Le=Ae[Te+Gc],Je=Ae[Te+Hc],Ke=Ae[Te+Vc],dt=1-Math.min(1,Math.abs(Le))*0.5,Me=Math.min(1,Ne*9)*Math.min(1,(1-Ne)*6)*(0.3+0.55*dt)*Ie*(0.75+0.25*Math.sin(H*2.5+Ke*5));if(Me<0.08)continue;let ze=Ae[Te+Xc],V=Math.min(j-1,Math.max(0,Math.floor(De(Ne+ze)*j))),ve=Me<0.3?0:Me<0.6?1:2,C=N.strandAt(Ne,Le,Je,Ke,O,H);X[0]=C[0],X[1]=C[1],C=N.strandAt(Math.max(0,Ne-xe),Le,Je,Ke,O,H),X[2]=C[0],X[3]=C[1],C=N.strandAt(Math.max(0,Ne-xe*2.4),Le,Je,Ke,O,H),X[4]=C[0],X[5]=C[1];let Ge=(V+0.5)/j;if(_(X[0],X[1],X[2],X[3],1.2,Ge,0.3,re[ve]*0.45),_(X[2],X[3],X[4],X[5],1.2,Ge,0.3,re[ve]*0.45),_(X[0],X[1],X[2],X[3],2.1,Ge,0.44000000000000006,re[ve]),Ae[Te+qc]>0.5&&Se<14)Se++,g(X[0],X[1],Ae[Te+Wc]*6,De(Ne+ze),Me*0.6)}for(let me=0;me<2;me++){let Te=me===0?N.fax:N.fbx,Ne=me===0?N.fay:N.fby,Le=me===0?N.nax:N.nbx,Je=me===0?N.nay:N.nby,Ke=me===0?0:2.3,dt=0.75+0.25*Math.sin(H*2+Ke)+ie.orb.feed*0.3;g(Te,Ne,z*0.85*N.sc*(0.8+0.4*O),0,0.24*O*dt,[255,170,255]),g(Te,Ne,z*0.36,0,0.285*O*dt,[255,245,255]);let Me=Math.atan2(Je,Le);for(let ze=0;ze<8;ze++){let V=Math.sin(ze*91.7+Ke)*0.5+0.5,ve=Me+(ze/7-0.5)*1.6+Math.sin(H*1.2+ze*1.3+Ke)*0.1,C=z*(0.1+0.28*V)*(0.6+0.4*Math.sin(H*2+ze*2.1+Ke)),Ge=Math.cos(ve),we=Math.sin(ve);_(Te+Ge*4,Ne+we*4,Te+Ge*C,Ne+we*C,0.7+V*1.1,0.1+V*0.5,0.5,0.084*O*dt)}}a.needsUpdate=!0,r.instanceCount=T},onContextRestored(){if(l)l.needsUpdate=!0},dispose(){if(t)c?.remove(t);if(n)c?.remove(n);r?.dispose(),o?.dispose(),i?.dispose(),s?.dispose(),l?.dispose(),t=void 0,n=void 0,r=void 0,o=void 0,i=void 0,s=void 0,l=void 0,a=void 0,e=void 0}}}var Mt=ks,gb=(e)=>0.55+e*0.04,xb=(e,t)=>Math.pow(Math.max(0,Math.sin(e*ut*t)),8),vb=(e)=>2.4-Math.min(1.2,e*0.1),_b=(e)=>0.55/Math.pow(1+e*0.35,1.5),yb=(e,t,n,i)=>e*(1+t*0.012+n*0.02+i*0.03);function pp(e,t,n,i,s){return vp(e,Math.cos(t)*n,Math.sin(t)*n,i,s)}function vp(e,t,n,i,s){let r=Math.cos(s),o=Math.sin(s),a=Math.cos(i),l=(r*t+o*n)*(1-a);return e.x=t*a+r*l,e.y=(o*t-r*n)*Math.sin(i),e.z=n*a+o*l,e}var _p=(e,t=1,n=1)=>t*(1-Math.exp(-n*e/t)),bb=0.62,Sb=(e,t)=>_p(0.38+e*0.12+t*0.2,bb),Mb=0.55,wb=(e,t)=>_p(0.36+e*0.12+t*0.18,Mb),Ab=(e)=>{if(!(e>0))return 1;let t=Math.min(1,Math.max(0,(e-0.25)/0.75));return 0.7+0.3*t*t*(3-2*t)},Tb=0.35,Eb=0.05,Cb=14,mp=[[170,80,255],[60,120,255],[255,150,60],[60,255,140]],Rb=[0.1,-0.16,0.22,-0.08],Pb=[0,1.1,2.2,3.3],Ib=[0.12,0.26,-0.18,0.34],Lb=[0.5,1.9,3.1,4.4],gp=[{dr:34,inc:0.05,node:0.4,col:[110,160,255],a:0.42,dashes:0,speed:0},{dr:62,inc:-0.11,node:1.7,col:[170,120,255],a:0.34,dashes:64,speed:0.045},{dr:96,inc:0.16,node:3,col:[90,220,255],a:0.26,dashes:120,speed:-0.03}],Db=1.025,jo=90,Nb=["M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z","M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z","M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4","M17.599 6.5a3 3 0 0 0 .399-1.375","M6.003 5.125A3 3 0 0 0 6.401 6.5","M3.477 10.896a4 4 0 0 1 .585-.396","M19.938 10.5a4 4 0 0 1 .585.396","M6 18a4 4 0 0 1-1.967-.516","M19.967 17.484A4 4 0 0 1 18 18"],xp=200,Ws=256,Fb=30,Ub=3,$c=`
varying vec2 vP;
void main() {
  vP = position.xy;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Ob=`
precision highp float;
varying vec2 vP;
uniform vec3 uColor;
uniform float uAlpha;
uniform float uDotR;
uniform vec3 uBody; // body disc in this quad's local space: centre xy, radius z (z = 0: none)
uniform float uInner; // glow factor inside the body disc
void main() {
  float r = length(vP);
  if (r > 1.0) discard;
  float a = r < 0.2 ? mix(1.0, 0.55, r / 0.2) : (r < 0.5 ? mix(0.55, 0.14, (r - 0.2) / 0.3) : mix(0.14, 0.0, (r - 0.5) / 0.5));
  if (uBody.z > 0.0) a *= mix(1.0, uInner, 1.0 - smoothstep(uBody.z - 0.06, uBody.z + 0.02, length(vP - uBody.xy)));
  vec3 c = uColor * (a * uAlpha);
  if (uDotR > 0.0) c += vec3(0.9 * (1.0 - smoothstep(uDotR - 0.03, uDotR + 0.03, r)));
  gl_FragColor = vec4(c, 1.0);
}
`,Jc=`
varying vec3 vN;
varying vec3 vO;
void main() {
  vN = normalize(normalMatrix * normal);
  vO = position; // unit sphere, object space: rotates with the mesh (the surface yaw)
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Bb=`
vec3 nHash(vec3 p) {
  p = vec3(dot(p, vec3(127.1, 311.7, 74.7)), dot(p, vec3(269.5, 183.3, 246.1)), dot(p, vec3(113.5, 271.9, 124.6)));
  return fract(sin(p) * 43758.5453);
}
const float NS = 7.0;
// x = dot glow, y = line glow, z = twinkle seed of the nearest point
vec3 network(vec3 dir, float time) {
  vec3 p = dir * NS;
  vec3 c = floor(p);
  float best = 1e9;
  vec3 bp = p;
  float seed = 0.0;
  for (int x = -1; x <= 1; x++)
  for (int y = -1; y <= 1; y++)
  for (int z = -1; z <= 1; z++) {
    vec3 g = c + vec3(float(x), float(y), float(z));
    vec3 h = nHash(g);
    vec3 q = normalize(g + 0.15 + 0.7 * h) * NS;
    vec3 e = q - p;
    float d = dot(e, e);
    if (d < best) { best = d; bp = q; seed = h.x; }
  }
  float line = 0.0;
  for (int x = -1; x <= 1; x++)
  for (int y = -1; y <= 1; y++)
  for (int z = -1; z <= 1; z++) {
    vec3 g = c + vec3(float(x), float(y), float(z));
    vec3 q = normalize(g + 0.15 + 0.7 * nHash(g)) * NS;
    vec3 e = q - bp;
    float L2 = dot(e, e);
    if (L2 < 1e-4 || L2 > 1.7) continue;
    float k = clamp(dot(p - bp, e) / L2, 0.0, 1.0);
    float dd = length(p - bp - e * k);
    line = max(line, (1.0 - smoothstep(0.012, 0.04, dd)) * (1.0 - L2 / 1.7));
  }
  float dotG = 1.0 - smoothstep(0.0, 0.012, best);
  float halo = (1.0 - smoothstep(0.0, 0.06, best)) * 0.35;
  float tw = 0.55 + 0.45 * sin(time * (0.8 + seed * 1.6) + seed * 40.0);
  return vec3((dotG + halo) * tw, line, seed);
}
`,zb=`
precision highp float;
varying vec3 vN;
varying vec3 vO;
uniform float uTime;
uniform float uBeat;
uniform float uTier;
${Bb}
void main() {
  vec3 n = normalize(vN);
  float rr = clamp(length(n.xy), 0.0, 1.0);
  vec3 c0 = vec3(12.0, 16.0, 70.0) / 255.0;
  vec3 c1 = vec3(14.0, 20.0, 92.0) / 255.0;
  vec3 c2 = vec3(46.0, 60.0, 180.0) / 255.0;
  vec3 col = rr < 0.65 ? mix(c0, c1, rr / 0.65) : mix(c1, c2, (rr - 0.65) / 0.35);
  float a = rr < 0.65 ? mix(0.97, 0.96, rr / 0.65) : mix(0.96, 0.92, (rr - 0.65) / 0.35);
  float fres = pow(1.0 - clamp(n.z, 0.0, 1.0), 3.0);
  col += fres * vec3(0.05, 0.13, 0.42) * 0.55;
  // soft glass highlight, upper left
  float hl = smoothstep(0.55, 0.0, distance(n.xy, vec2(-0.28, 0.42)));
  col += hl * vec3(0.05, 0.07, 0.16);
  // particle network: calmer at the centre (the brain glyph sits there), brighter toward the limb
  // (the governor's low tier skips it: ~54 cell lookups per fragment)
  if (uTier > 0.5) {
    vec3 nw = network(normalize(vO), uTime);
    float k = mix(0.35, 1.0, smoothstep(0.25, 0.95, rr)) * (1.0 + uBeat * 0.35);
    col += (nw.x * vec3(0.55, 0.8, 1.0) * 0.6 + nw.y * vec3(0.22, 0.42, 1.0) * 0.4) * k;
  }
  col = 1.0 - exp(-col * 1.15); // soft clip: the body stays deep blue, never white
  gl_FragColor = vec4(col, a);
}
`,kb=`
precision highp float;
varying vec3 vN;
varying vec3 vO;
uniform float uBeat;
const float PI = 3.14159265;
float gridLine(float a) {
  float w = min(fwidth(a), 0.25);
  float f = abs(fract(a + 0.5) - 0.5);
  return 1.0 - smoothstep(0.35 * w, 1.35 * w, f);
}
void main() {
  vec3 o = normalize(vO);
  float lat = asin(clamp(o.y, -1.0, 1.0));
  float lon = atan(o.z, o.x);
  float la = gridLine(lat / (PI / 12.0));
  float lo = gridLine(lon / (PI / 12.0)) * smoothstep(0.06, 0.3, sqrt(max(0.0, 1.0 - o.y * o.y)));
  float eq = 1.0 - smoothstep(0.0, 0.012, abs(o.y));
  float g = max(max(la, lo) * 0.75, eq);
  float fres = pow(1.0 - clamp(abs(normalize(vN).z), 0.0, 1.0), 1.5);
  float a = g * (0.14 + 0.34 * fres) * (1.0 + uBeat * 0.4);
  gl_FragColor = vec4(vec3(0.45, 0.66, 1.0) * a, 1.0);
}
`,Gb=`
attribute vec2 aUV;
attribute vec4 aRing; // radius, dash count, dash speed, alpha
attribute vec3 aCol;
varying vec2 vUV;
varying vec4 vRing;
varying vec3 vCol;
void main() {
  vUV = aUV;
  vRing = aRing;
  vCol = aCol;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Hb=`
precision highp float;
varying vec2 vUV;
varying vec4 vRing;
varying vec3 vCol;
uniform float uTime;
uniform float uMotion;
uniform float uAlpha;
const float PI2 = 6.283185307;
void main() {
  float d = length(vUV);
  float off = abs(d - vRing.x);
  if (off > 8.0) discard;
  float aa = fwidth(d);
  float hw = max(0.8, aa * 0.6);
  float line = 1.0 - smoothstep(hw, hw + aa * 1.5, off);
  float glow = (1.0 - smoothstep(0.0, 7.0, off)) * 0.18;
  float m = 1.0;
  if (vRing.y > 0.5) {
    float u = fract(atan(vUV.y, vUV.x) / PI2 * vRing.y - uTime * vRing.z * uMotion * vRing.y);
    m = 1.0 - smoothstep(0.28, 0.36, abs(u - 0.5));
  }
  gl_FragColor = vec4(vCol * (line * m + glow) * vRing.w * uAlpha, 1.0);
}
`,Vb=`
precision highp float;
varying vec2 vP;
uniform float uQ;     // quad radius in world px
uniform float uRot;   // conic start angle
uniform float uBeat;
const float PI2 = 6.283185307;
const vec3 k0 = vec3(168.0, 88.0, 255.0) / 255.0;
const vec3 k1 = vec3(70.0, 150.0, 255.0) / 255.0;
const vec3 k2 = vec3(60.0, 235.0, 255.0) / 255.0;
const vec3 k3 = vec3(70.0, 255.0, 130.0) / 255.0;
const vec3 k4 = vec3(255.0, 170.0, 60.0) / 255.0;
const vec3 k5 = vec3(255.0, 110.0, 190.0) / 255.0;
vec3 conic(float u) {
  if (u < 0.2) return mix(k0, k1, u / 0.2);
  if (u < 0.38) return mix(k1, k2, (u - 0.2) / 0.18);
  if (u < 0.54) return mix(k2, k3, (u - 0.38) / 0.16);
  if (u < 0.74) return mix(k3, k4, (u - 0.54) / 0.2);
  if (u < 0.88) return mix(k4, k5, (u - 0.74) / 0.14);
  return mix(k5, k0, (u - 0.88) / 0.12);
}
float stroke(float d, float rad, float w) {
  return 1.0 - smoothstep(w * 0.5 - 0.5, w * 0.5 + 0.5, abs(d - rad));
}
void main() {
  float d = length(vP) * uQ;
  if (d > uQ) discard;
  // canvas conic: angle clockwise on screen from uRot (y-up here, so negate y)
  float u = fract((atan(-vP.y, vP.x) - uRot) / PI2);
  vec3 c = conic(u);
  float a = stroke(d, ${Mt.toFixed(1)}, 26.0) * (0.14 + uBeat * 0.08)
          + stroke(d, ${Mt.toFixed(1)}, 13.0) * 0.34
          + stroke(d, ${Mt.toFixed(1)}, 5.0)
          + stroke(d, ${(Mt-15).toFixed(1)}, 1.6) * 0.55;
  a = 1.0 - exp(-1.4 * a); // stacked strokes soft-clip to a coloured rim instead of adding up to white
  gl_FragColor = vec4(c * a, 1.0);
}
`,Wb=`
attribute float aBase;
uniform float uTime;
uniform float uMotion;
uniform float uScale;
uniform float uDpr;
uniform vec2 uRes;
varying float vA;
void main() {
  float an = aBase + uTime * 0.08 * uMotion;               // 2D L1774
  float wave = 0.5 + 0.5 * sin(an * 3.0 - uTime * 2.2);    // 2D L1775
  float rr = ${Mt.toFixed(1)} + 17.0 + wave * 3.0;
  vec4 mv = modelViewMatrix * vec4(cos(an) * rr, -sin(an) * rr, 0.0, 1.0);
  vA = 0.1 + wave * 0.55;
  float worldDiam = 2.0 * (1.1 + wave * 0.9) * uScale;
  float px = worldDiam * uRes.y * 0.5 * projectionMatrix[1][1] / max(1.0, -mv.z) * uDpr;
  gl_PointSize = max(px, 1.5);
  vA *= min(px / 1.5, 1.0);
  gl_Position = projectionMatrix * mv;
}
`,Xb=`
precision highp float;
varying float vA;
void main() {
  float soft = 1.0 - smoothstep(0.3, 0.5, length(gl_PointCoord - 0.5));
  gl_FragColor = vec4(vec3(159.0, 196.0, 255.0) / 255.0 * vA * soft, 1.0);
}
`,qb=Jc,Yb=`
precision highp float;
varying vec3 vN;
uniform vec3 uColor;
uniform float uAlpha;
void main() {
  float f = pow(1.0 - clamp(abs(normalize(vN).z), 0.0, 1.0), 2.0);
  gl_FragColor = vec4(uColor * (uAlpha * (0.06 + 0.94 * f)), 1.0);
}
`,Zb=`
precision highp float;
varying vec2 vP;
uniform sampler2D uMap;
void main() {
  vec4 t = texture2D(uMap, vP * 0.5 + 0.5);
  vec3 c = t.rgb * t.a;
  c /= 1.0 + 0.45 * max(c.r, max(c.g, c.b)); // roll off the peaks, keep the hue: a pale blue glyph, not a white blob
  gl_FragColor = vec4(c, 1.0);
}
`,is={blending:Et,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1};function yp(){let e,t=[],n=[],i=[],s=[],r,o,a,l,c,u,d,h,f=0,x=0,v,m,p,A=[],R=[],b=[],w,T,P,g,_,D=[],I=-1,F=-1,X=0,L=0,G=!1,Z=!1,N=()=>{},ie=0,O=new B,z=new B,H=new B,fe=new B,pe=new B,We=new B(0,0,0),Ie=new B,j={x:0,y:0,z:0,visible:!1},xe={x:0,y:0,z:0,visible:!1},re={x:0,y:0,z:0},Se=0,Ae=0,me=(Me,ze,V)=>{let ve=new Qe({vertexShader:$c,fragmentShader:Ob,uniforms:{uColor:{value:new B(Me[0]/255,Me[1]/255,Me[2]/255)},uAlpha:{value:0},uDotR:{value:ze},uBody:{value:new B},uInner:{value:1}},...is}),C=new ct(Te,ve);return C.frustumCulled=!1,C.renderOrder=V,i.push(ve),s.push(C),C},Te,Ne=(Me,ze)=>{let V=g,ve=Mt*0.64/24*(Ws/xp);V.setTransform(1,0,0,1,0,0),V.globalCompositeOperation="source-over",V.clearRect(0,0,Ws,Ws),V.setTransform(ve,0,0,ve,Ws/2-12*ve,Ws/2-12*ve),V.lineCap="round",V.lineJoin="round",V.globalAlpha=De(0.2+ze*0.2),V.fillStyle=_,V.fillRect(-15,-15,54,54),V.globalAlpha=1,V.strokeStyle="rgba(52,156,255,0.220)",V.lineWidth=3.6;for(let C of D)V.stroke(C);V.strokeStyle="rgba(103,181,255,0.850)",V.lineWidth=1.35;for(let C of D)V.stroke(C);V.setLineDash(Le),V.lineDashOffset=-x,V.strokeStyle="rgba(215,236,255,0.800)",V.lineWidth=1.1;for(let C of D)V.stroke(C);V.setLineDash(Je),T.needsUpdate=!0},Le=[5,34],Je=[],Ke=(Me,ze,V,ve)=>{let C=b.find((Ge)=>!Ge.on);if(!C)C=b.reduce((Ge,we)=>Ge.life/Ge.max>we.life/we.max?Ge:we);C.on=!0,C.life=0,C.max=V,C.r0=Me,C.r1=ze,C.mat.uniforms.uColor.value.set(ve[0]/255,ve[1]/255,ve[2]/255),C.mesh.visible=!0},dt={name:"orb",renderOrder:lt.orb,init(Me){e=Me;let{scene:ze,world:V,fx:ve,rig:C}=Me;Te=new dn(2,2),n.push(Te);let Ge=new di(1,48,32);n.push(Ge);let we=lt.orb;p=me([70,110,255],0,we-20);for(let E=0;E<4;E++)A.push(me(mp[E],0,we-10));for(let E=0;E<4;E++)R.push(me(mp[E],0.16,we-10));l=new Qe({vertexShader:Jc,fragmentShader:zb,uniforms:{uTime:Me.uniforms.time,uBeat:{value:0},uTier:Me.uniforms.tier},blending:Qn,transparent:!0,depthTest:!0,depthWrite:!0,toneMapped:!1}),i.push(l),a=new ct(Ge,l),a.renderOrder=we,a.frustumCulled=!1,s.push(a),u=new Qe({vertexShader:Jc,fragmentShader:kb,uniforms:{uBeat:{value:0}},...is,depthTest:!0}),i.push(u),c=new ct(Ge,u),c.renderOrder=we+0.5,c.frustumCulled=!1,s.push(c);let et=gp.length,M=new Float32Array(et*4*3),y=new Float32Array(et*4*2),U=new Float32Array(et*4*4),J=new Float32Array(et*4*3),he=[],q=[-1,-1,1,-1,1,1,-1,1];for(let E=0;E<et;E++){let k=gp[E],ae=Mt+k.dr,_e=ae+10;for(let Fe=0;Fe<4;Fe++){let Pe=E*4+Fe,st=q[Fe*2]*_e,ot=q[Fe*2+1]*_e;vp(re,st,ot,k.inc,k.node),M.set([re.x,re.y,re.z],Pe*3),y.set([st,ot],Pe*2),U.set([ae,k.dashes,k.speed,k.a],Pe*4),J.set([k.col[0]/255,k.col[1]/255,k.col[2]/255],Pe*3)}let be=E*4;he.push(be,be+1,be+2,be,be+2,be+3)}let ee=new zt;ee.setAttribute("position",new vt(M,3)),ee.setAttribute("aUV",new vt(y,2)),ee.setAttribute("aRing",new vt(U,4)),ee.setAttribute("aCol",new vt(J,3)),ee.setIndex(he),n.push(ee),h=new Qe({vertexShader:Gb,fragmentShader:Hb,uniforms:{uTime:Me.uniforms.time,uMotion:Me.uniforms.motion,uAlpha:{value:1}},...is,depthTest:!0,side:un}),i.push(h),d=new ct(ee,h),d.renderOrder=we+4,d.frustumCulled=!1,s.push(d),m=new Qe({vertexShader:$c,fragmentShader:Vb,uniforms:{uQ:{value:Mt+24},uRot:{value:0},uBeat:{value:0}},...is}),i.push(m),v=new ct(Te,m),v.renderOrder=we+1,v.frustumCulled=!1,s.push(v);let K=new Float32Array(jo);for(let E=0;E<jo;E++)K[E]=E/jo*ut;let te=new zt;te.setAttribute("position",new vt(new Float32Array(jo*3),3)),te.setAttribute("aBase",new vt(K,1)),te.boundingSphere=new Tn(new B,1e5),n.push(te),o=new Qe({vertexShader:Wb,fragmentShader:Xb,uniforms:{uTime:Me.uniforms.time,uMotion:Me.uniforms.motion,uDpr:Me.uniforms.dpr,uRes:Me.uniforms.resolution,uScale:{value:1}},...is}),i.push(o),r=new Rs(te,o),r.frustumCulled=!1,r.renderOrder=we+2;for(let E=0;E<Ub;E++){let k=new Qe({vertexShader:qb,fragmentShader:Yb,uniforms:{uColor:{value:new B(0.43,0.59,1)},uAlpha:{value:0}},...is});i.push(k);let ae=new ct(Ge,k);ae.renderOrder=we+3,ae.frustumCulled=!1,ae.visible=!1,s.push(ae),b.push({mesh:ae,mat:k,life:0,max:1,r0:Mt,r1:Mt,on:!1})}P=document.createElement("canvas"),P.width=P.height=Ws,g=P.getContext("2d"),_=g.createRadialGradient(12,12,0,12,12,26),_.addColorStop(0,"rgba(52,156,252,1)"),_.addColorStop(0.2,"rgba(52,156,252,0.55)"),_.addColorStop(0.5,"rgba(52,156,252,0.14)"),_.addColorStop(1,"rgba(52,156,252,0)"),D=Nb.map((E)=>new Path2D(E)),T=new Co(P),T.minFilter=rn,T.magFilter=rn,T.generateMipmaps=!1;let Q=new Qe({vertexShader:$c,fragmentShader:Zb,uniforms:{uMap:{value:T}},...is});i.push(Q),w=new ct(Te,Q),w.renderOrder=we+20,w.frustumCulled=!1,s.push(w);for(let E of s)E.visible=!1,ze.add(E);ze.add(r),r.visible=!1,t.push(V.on("orbClick",()=>dt.pulse())),t.push(V.on("reset",()=>{V.orb.pulseT=0.8;for(let E of b)E.on=!1,E.mesh.visible=!1}));let ce=Me.renderer.domElement,de=(E,k)=>{if(Se<0.05)return!1;if(pe.set(V.orb.x,V.orb.y,V.orb.z),fe.set(1,0,0).applyQuaternion(C.camera.quaternion),C.project(pe,j),C.project(O.copy(pe).addScaledVector(fe,Mt*Se),xe),!j.visible)return!1;return Math.hypot(E-j.x,k-j.y)<Math.hypot(xe.x-j.x,xe.y-j.y)},ge=(E)=>{let k=ce.getBoundingClientRect();return de(E.clientX-k.left,E.clientY-k.top)},ke=(E,k)=>!!Me.engine.getLayer("nodes")?.pick?.(E,k),He=(E)=>{if(F>=0||E.pointerType==="mouse"&&E.button!==0)return;if(!ge(E)||ke(E.clientX,E.clientY))return;F=E.pointerId,X=E.clientX,L=E.clientY,G=!1,ie=1},qe=(E)=>{if(F>=0){if(E.pointerId===F&&Math.hypot(E.clientX-X,E.clientY-L)>5)G=!0;return}},W=(E)=>{if(E.pointerId!==F)return;let k=E.type==="pointerup"&&!G&&ge(E);if(F=-1,ie=0,k)V.emit("orbClick",void 0)},Ee=()=>{le(!1)};N=()=>{let E=V,k=E.hover;if(F>=0)return le(k==="orb");let ae=!C.pointerActive||C.dragging,_e=!1;if(!ae&&(k===null||k==="orb")&&Se>=0.05){let be=(C.pointerNDC.x*0.5+0.5)*Me.engine.width,Fe=(-C.pointerNDC.y*0.5+0.5)*Me.engine.height,Pe=ce.getBoundingClientRect();_e=de(be,Fe)&&!ke(Pe.left+be,Pe.top+Fe)}if(_e&&k===null)E.setHover("orb");else if(!_e&&k==="orb")E.setHover(null);le(_e)};let le=(E)=>{if(E===Z)return;Z=E,ce.style.cursor=E?"pointer":""};ce.addEventListener("pointerdown",He),ce.addEventListener("pointermove",qe),ce.addEventListener("pointerup",W),ce.addEventListener("pointercancel",W),ce.addEventListener("pointerleave",Ee),t.push(()=>{if(ce.removeEventListener("pointerdown",He),ce.removeEventListener("pointermove",qe),ce.removeEventListener("pointerup",W),ce.removeEventListener("pointercancel",W),ce.removeEventListener("pointerleave",Ee),Z)ce.style.cursor=""});let Re=C.onTap,Be=(E)=>{if(ge(E))return;Re?.(E)};C.onTap=Be,t.push(()=>{if(C.onTap===Be)C.onTap=Re})},pulse(Me){let ze=e;if(!ze)return;let V=ze.world.orb;re.x=V.x,re.y=V.y,re.z=V.z;let ve=[140,170,255];ze.fx.ripple({pos:re,r0:Mt,r1:Mt+260,life:1.6,color:ve,width:4}),Ke(Mt,Mt+260,1.6,ve),V.flash=1,ze.fx.shockwave(re,70),ze.world.emit("pulse",{id:Me})},update(Me,ze){let{world:V,fx:ve,rig:C,uniforms:Ge}=ze,{orb:we,time:et}=V;we.spawn.target=et>0.05?1:0,we.spawn.step(Me);let M=0,y=0;if(C.pointerActive){let J=C.pointerWorldOnPlane(We,void 0,Ie);if(J){let he=Math.hypot(J.x,J.y)+1,q=Math.min(12,he*0.02);M=J.x/he*q,y=J.y/he*q}}we.px.target=M,we.py.target=y,we.px.step(Me),we.py.step(Me),we.x=we.px.x,we.y=we.py.x,we.feed=je(we.feed,0,2.2,Me),we.flash=je(we.flash,0,3,Me),we.press=je(we.press,ie,12,Me);let U=0;for(let J of V.agents.values())if(J.power>0.3)U++;if(we.activeCount=U,we.beat=xb(et,gb(U)),we.pulseT-=Me,we.pulseT<=0)we.pulseT=vb(U),re.x=we.x,re.y=we.y,re.z=we.z,ve.ripple({pos:re,r0:Mt*0.98,r1:Mt+170,life:2.4,color:[110,150,255],width:3}),Ke(Mt*0.98,Mt+170,2.4,[110,150,255]);we.shimmerT+=Me,f=(f+Eb*Ge.motion.value*Me)%ut,x=(x+Cb*Ge.motion.value*Me)%3900,we.model=V.model;for(let J of b){if(!J.on)continue;if(J.life+=Me,J.life>=J.max)J.on=!1,J.mesh.visible=!1}},beforeRender(Me){let{world:ze,rig:V,uniforms:ve}=Me,C=ze.orb,Ge=ve.time.value,we=ve.motion.value,et=C.spawn.x;Ae=et;let M=yb(et,C.beat,C.feed,C.press);Se=M;let y=et>=0.01;N();let U=C.beat,J=V.camera;for(let ee of s)ee.visible=y;for(let ee of b)ee.mesh.visible=y&&ee.on;if(r)r.visible=y;if(!y){for(let ee of b)ee.mesh.visible=!1;return}pe.set(C.x,C.y,C.z),z.copy(J.position).sub(pe).normalize(),H.set(0,1,0).applyQuaternion(J.quaternion),C.labelAnchor.x=C.x,C.labelAnchor.y=C.y-(Mt*0.2+44)*M,C.labelAnchor.z=C.z;let he=Ab(V.radius/V.homeRadius);p.position.copy(pe),p.quaternion.copy(J.quaternion),p.scale.setScalar(Mt*2.3*M),p.material.uniforms.uAlpha.value=wb(U,C.feed)*he;let q=Sb(U,C.feed)*he;fe.set(1,0,0).applyQuaternion(J.quaternion);for(let ee=0;ee<4;ee++){let K=Ge*0.22*we+ee*ut/4;pp(re,K,Mt*0.95*M,Rb[ee],Pb[ee]);let te=A[ee];te.position.set(C.x+re.x,C.y+re.y,C.z+re.z),te.quaternion.copy(J.quaternion),te.scale.setScalar(Mt*1.05*M),te.renderOrder=re.x*z.x+re.y*z.y+re.z*z.z>0?lt.orb+10:lt.orb-10;let Q=te.material.uniforms;Q.uAlpha.value=q;let ce=Mt*1.05*M;Q.uBody.value.set(-(re.x*fe.x+re.y*fe.y+re.z*fe.z)/ce,-(re.x*H.x+re.y*H.y+re.z*H.z)/ce,Mt*M/ce),Q.uInner.value=Tb}for(let ee=0;ee<4;ee++){let K=Ge*_b(ee)*(ee%2?-1:1)*we+ee*1.7;pp(re,K,(Mt+40+ee*14)*M,Ib[ee],Lb[ee]);let te=R[ee];te.position.set(C.x+re.x,C.y+re.y,C.z+re.z),te.quaternion.copy(J.quaternion),te.scale.setScalar(10*M),te.renderOrder=re.x*z.x+re.y*z.y+re.z*z.z>0?lt.orb+11:lt.orb-9,te.material.uniforms.uAlpha.value=0.9}if(a.position.copy(pe),a.scale.setScalar(Mt*M),a.rotation.y=f,l.uniforms.uBeat.value=U,c.position.copy(pe),c.scale.setScalar(Mt*Db*M),c.rotation.y=f,u.uniforms.uBeat.value=U,d.position.copy(pe),d.scale.setScalar(M),h.uniforms.uAlpha.value=De(0.85+U*0.25+C.feed*0.3,0,1.4),v.position.copy(pe),v.quaternion.copy(J.quaternion),v.scale.setScalar((Mt+24)*M),m.uniforms.uRot.value=Ge*0.25*we,m.uniforms.uBeat.value=U,r&&o)r.position.copy(pe),r.quaternion.copy(J.quaternion),r.scale.setScalar(M),o.uniforms.uScale.value=M;for(let ee of b){if(!ee.on)continue;let K=ee.life/ee.max;ee.mesh.position.set(C.x,C.y,C.z),ee.mesh.scale.setScalar(Math.max(1,At(ee.r0,ee.r1,En(K)))),ee.mat.uniforms.uAlpha.value=(1-K)*0.4}if(I<0||Ge<I||Ge-I>=1/Fb)I=Ge,Ne(Ge,U);w.position.copy(pe).addScaledVector(z,Mt*M).addScaledVector(H,Mt*0.12*M),w.quaternion.copy(J.quaternion),w.scale.setScalar(xp/2*M*(1+U*0.03))},onContextRestored(){if(T)T.needsUpdate=!0;I=-1},dispose(){for(let ze of t)ze();t.length=0;let Me=e?.scene;for(let ze of s)Me?.remove(ze);if(r)Me?.remove(r);for(let ze of n)ze.dispose();for(let ze of i)ze.dispose();T?.dispose(),s.length=0,n.length=0,i.length=0,A.length=0,R.length=0,b.length=0,r=void 0,o=void 0,e=void 0}};return dt}var $b=(e,t,n)=>e*At(0.68,1.1,De(t))*At(1,0.52,n),Jb=(e,t)=>e?1.12:t?1.07:1;function wp(e){e.dot=[e.dot[0],e.dot[1],e.dot[2]],e.col=[e.col[0],e.col[1],e.col[2]],e.axisQ??=[0,0,0,1],e.ringN??=[0,1,0],e.spinQ??=[0,0,0,1]}function Kc(e,t,n,i){let s=pn[e.spec.status];if(!e.spawned&&n>=e.spawnAt)e.spawned=!0,e.spawn.target=1;e.spawn.step(t),e.hover.target=Jb(e.dragging,i),e.hover.step(t),e.labelShift.target=i?5:0,e.labelShift.step(t),e.statusT+=t,e.power=je(e.power,s.power,2.6,t),e.rest=je(e.rest,ji.has(e.spec.status)&&!e.charging?1:0,3,t),e.novaS=je(e.novaS,1,4,t),e.novaL=je(e.novaL,0,1.6,t),e.r=$b(e.baseR,e.power,e.rest),e.flow=je(e.flow,s.flow,2.6,t),e.spin=je(e.spin,s.spin,2.6,t),e.detail=je(e.detail,s.power>0.15?1:0,4,t);let r=1-Math.exp(-5*t),o=1-De(e.power*1.1);for(let l=0;l<3;l++){let c=e.accent[l]+(zs[l]-e.accent[l])*o;e.col[l]+=(c-e.col[l])*r}let a=1-Math.exp(-6*t);for(let l=0;l<3;l++)e.dot[l]+=(s.dot[l]-e.dot[l])*a;e.hit=je(e.hit,0,2.6,t),e.flash=je(e.flash,0,2.2,t),e.tokFlash=je(e.tokFlash,0,3.2,t),e.timeFlash=je(e.timeFlash,0,5,t),e.grow=Math.max(De((n-(e.spawnAt+0.2))/1.3),e.launchGrow),e.introCount=De((n-e.spawnAt)/2)}function Ap(e,t,n){let i=pn[e.spec.status];if(i.tokenRate>0)e.tokens+=i.tokenRate*t*(0.6+n()*0.8),e.seconds+=t}var Tp=()=>({active:!1,ox:0,oy:0,oz:0,dx:0,dy:0,dz:1,nx:0,ny:0,nz:1});function na(e,t,n,i,s){let r=e.dx*e.nx+e.dy*e.ny+e.dz*e.nz;if(Math.abs(r)<0.000001)return!1;let o=((t-e.ox)*e.nx+(n-e.oy)*e.ny+(i-e.oz)*e.nz)/r;if(o<0)return!1;return s.x=e.ox+e.dx*o,s.y=e.oy+e.dy*o,s.z=e.oz+e.dz*o,!0}var ea={x:0,y:0,z:0};function Kb(e,t,n,i){let s=7*n,r=1+0.08*e.rest,o=1-0.6*e.rest;i[0]=e.hx*r+Math.sin(t*0.5*e.fs+e.phase)*s*o,i[1]=e.hy*r+Math.cos(t*0.43*e.fs+e.phase*1.7)*s*1.3*o,i[2]=e.hz*r+Math.sin(t*0.37*e.fs+e.phase*2.3)*s*1.1*o}var ta=[0,0,0];function Ep(e,t,n,i,s){Kb(e,i,s.motion,ta);let r,o,a;if(e.dragging&&s.drag)r=280*(s.drag.x-e.grabX-e.x)-26*e.vx,o=280*(s.drag.y-e.grabY-e.y)-26*e.vy,a=280*(s.drag.z-e.grabZ-e.z)-26*e.vz;else{r=55*(ta[0]-e.x)-7*e.vx,o=55*(ta[1]-e.y)-7*e.vy,a=55*(ta[2]-e.z)-7*e.vz;let l=s.ray;if(l&&l.active&&na(l,e.x,e.y,e.z,ea)){let c=ea.x-e.x,u=ea.y-e.y,d=ea.z-e.z,h=Math.hypot(c,u,d)+1,f=(650*e.power+120)/(1+h/190*(h/190));r+=c/h*f,o+=u/h*f,a+=d/h*f}for(let c=0;c<t.length;c++){let u=t[c];if(u===e)continue;let d=e.x-u.x,h=e.y-u.y,f=e.z-u.z,x=Math.hypot(d,h,f)+0.01,v=e.r+u.r+60;if(x<v){let m=(v-x)*28;r+=d/x*m,o+=h/x*m,a+=f/x*m}}}e.vx+=r*n,e.vy+=o*n,e.vz+=a*n,e.x+=e.vx*n,e.y+=e.vy*n,e.z+=e.vz*n,e.lean[0]=je(e.lean[0],-e.vx*0.05,9,n),e.lean[1]=je(e.lean[1],-e.vy*0.05,9,n)}var Cp=()=>({run:0,think:0,wait:0,idle:0,check:0,ang:[0,0,0],off:[0,ut*1/3,ut*2/3]}),Lr=8;function Qc(e,t,n){let i=t.spec.status,s=De(t.power)>0.2;e.run=je(e.run,s&&i==="running"?1:0,Lr,n),e.think=je(e.think,s&&i==="thinking"?1:0,Lr,n),e.wait=je(e.wait,s&&i==="waiting"?1:0,Lr,n),e.idle=je(e.idle,s&&i==="idle"?1:0,Lr,n),e.check=je(e.check,i==="completed"?1:0,Lr,n);let r=Rp(e),o=At(0.9,2.6,r),a=r>0.5?2:3;for(let l=0;l<3;l++)e.ang[l]+=n*t.spin*o*(l%2?-1:1),e.off[l]=je(e.off[l],l*ut/a,6,n)}var Rp=(e)=>e.think/(e.run+e.think+0.0001),Pp=(e)=>At(0.62,1.1,Rp(e));var Ip={running:0.6,thinking:0.9,waiting:0.15,idle:0.08,completed:0,stopped:0,offline:0},bp=2,Sp=15,Qb=25;function Xs(e,t){let n=2166136261^t;for(let i=0;i<e.length;i++)n^=e.charCodeAt(i),n=Math.imul(n,16777619);return n^=n>>>13,n=Math.imul(n,2246822507),n^=n>>>16,(n>>>0)/4294967296}var jb=Math.PI/180;function Lp(e,t){return{tilt:(Sp+(Qb-Sp)*Xs(e,1))*jb,az:ut*Xs(e,2),prec:(0.05+0.05*Xs(e,3))*(Xs(e,4)<0.5?-1:1),rate:Ip[t],yaw:ut*Xs(e,5),wob:t==="thinking"?1:0,ph:ut*Xs(e,6)}}function jc(e,t,n,i,s){e.rate=je(e.rate,Ip[t],bp,n),e.wob=je(e.wob,t==="thinking"?1:0,bp,n);let r=1+0.18*e.wob*Math.sin(i*3.1+e.ph);if(e.yaw+=e.rate*r*s*n,e.yaw>1e4)e.yaw-=ut*1000;e.az+=e.prec*s*n}var eS=(e,t)=>e.tilt+0.035*e.wob*Math.sin(t*2.3+e.ph*1.3);function ia(e,t,n,i,s){let r=eS(e,t),o=Math.sin(r),a=o*Math.cos(e.az),l=Math.cos(r),c=o*Math.sin(e.az);i[0]=a,i[1]=l,i[2]=c;let u=Math.sin(r/2),d=Math.sin(e.az)*u,h=0,f=-Math.cos(e.az)*u,x=Math.cos(r/2);n[0]=d,n[1]=h,n[2]=f,n[3]=x;let v=Math.sin(e.yaw/2),m=Math.cos(e.yaw/2);s[0]=d*m-f*v,s[1]=x*v+h*m,s[2]=f*m+d*v,s[3]=x*m-h*v}function Mp(e,t,n,i,s,r=0){let o=e[0],a=e[1],l=e[2],c=e[3],u=2*(a*i-l*n),d=2*(l*t-o*i),h=2*(o*n-a*t);s[r]=t+c*u+(a*h-l*d),s[r+1]=n+c*d+(l*u-o*h),s[r+2]=i+c*h+(o*d-a*u)}function Dp(e,t){Mp(e,1,0,0,t,0),Mp(e,0,0,-1,t,3)}var sa=0.5,Np=(e)=>At(1,0.85,Up(De(e/sa))),Fp=(e)=>1-Up(De(e/sa)),Up=(e)=>1-Math.pow(1-e,3),Op=(e)=>Math.max(e*1.18+6,26);function Bp(e,t,n,i,s,r,o){let a=-1,l=1e9;for(let c=0;c<e;c++){if(!s[c])continue;let u=Math.hypot(r-t[c],o-n[c]);if(u<i[c]&&u<l)a=c,l=u}return a}var eh=`
attribute vec4 aB;
attribute vec4 aBC;
attribute vec4 aBE;
attribute vec4 aBQ;
uniform float uScale;
varying vec3 vObj;
varying vec3 vN;
varying vec3 vW;
varying vec4 vCol;
varying vec4 vE;

vec3 qrot(vec4 q, vec3 v) {
  vec3 t = 2.0 * cross(q.xyz, v);
  return v + q.w * t + cross(q.xyz, t);
}

void main() {
  vObj = position;
  vN = qrot(aBQ, normal);
  vW = aB.xyz + qrot(aBQ, position) * aB.w * uScale;
  vCol = aBC;
  vE = aBE;
  float on = step(0.002, aBE.x) * step(0.05, aB.w);
  gl_Position = on > 0.5 ? projectionMatrix * viewMatrix * vec4(vW, 1.0) : vec4(2.0, 2.0, 2.0, 1.0);
}
`;var zp=`
precision highp float;
uniform vec3 uOrb;
uniform float uTime;
varying vec3 vObj;
varying vec3 vN;
varying vec3 vW;
varying vec4 vCol;
varying vec4 vE;

float hash3(vec3 p) {
  p = fract(p * 0.3183099 + 0.1);
  p *= 17.0;
  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}
float vnoise(vec3 x) {
  vec3 i = floor(x);
  vec3 f = fract(x);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(mix(hash3(i), hash3(i + vec3(1.0, 0.0, 0.0)), f.x), mix(hash3(i + vec3(0.0, 1.0, 0.0)), hash3(i + vec3(1.0, 1.0, 0.0)), f.x), f.y),
    mix(mix(hash3(i + vec3(0.0, 0.0, 1.0)), hash3(i + vec3(1.0, 0.0, 1.0)), f.x), mix(hash3(i + vec3(0.0, 1.0, 1.0)), hash3(i + vec3(1.0, 1.0, 1.0)), f.x), f.y),
    f.z);
}
float fbm4(vec3 p) {
  float s = 0.0;
  float a = 0.5;
  for (int i = 0; i < 4; i++) {
    s += a * vnoise(p);
    p = p * 2.03 + vec3(1.7, 9.2, 3.1);
    a *= 0.5;
  }
  return s / 0.9375;
}
float fbm3(vec3 p) {
  float s = 0.0;
  float a = 0.5;
  for (int i = 0; i < 3; i++) {
    s += a * vnoise(p);
    p = p * 2.11 + vec3(5.3, 1.3, 7.7);
    a *= 0.5;
  }
  return s / 0.875;
}

void main() {
  vec3 N = normalize(vN);
  vec3 V = normalize(cameraPosition - vW);
  vec3 L = normalize(uOrb - vW);
  vec3 col = vCol.rgb;
  float act = vCol.a;
  float seed = vE.w;
  vec3 o = normalize(vObj);

  // continents: 4-octave value noise on the object-space sphere (spins with the body)
  vec3 p = o * 2.1 + vec3(seed * 17.0, seed * 31.0, seed * 7.0);
  float h = fbm4(p + 0.35 * vec3(vnoise(p * 1.9 + 4.0), vnoise(p * 1.9 + 9.0), vnoise(p * 1.9 + 13.0)));
  float land = smoothstep(0.5, 0.56, h);
  float high = smoothstep(0.6, 0.78, h);
  float coast = 1.0 - smoothstep(0.0, 0.035, abs(h - 0.53));

  // cloud band: streaks stretched along latitude, densest in two belts, drifting slowly over the surface
  float lat = o.y;
  float lon = atan(o.z, o.x);
  vec3 cp = vec3(cos(lon + uTime * 0.04) * 1.6, lat * 6.5, sin(lon + uTime * 0.04) * 1.6) + seed * 11.0;
  float cl = fbm3(cp);
  float belt = 0.35 + 0.65 * smoothstep(0.32, 0.0, abs(abs(lat) - 0.38 - 0.06 * sin(seed * 20.0)));
  float clouds = smoothstep(0.52, 0.72, cl) * belt;

  vec3 ocean = col * 0.2 + vec3(0.012, 0.018, 0.06);
  vec3 ground = mix(col * 0.55 + vec3(0.02, 0.03, 0.05), mix(col, vec3(1.0), 0.18) * 0.85, high);
  vec3 alb = mix(ocean, ground, land);
  alb += col * coast * 0.12;
  alb = mix(alb, mix(col, vec3(1.0), 0.55) * 0.95, clouds * 0.75);

  // terminator lighting: the orb is the light; soft wrap, a warm-ish band at the terminator, faint night emissive
  float ndl = dot(N, L);
  float lit = smoothstep(-0.12, 0.6, ndl);
  float term = exp(-ndl * ndl / 0.018) * 0.12;
  vec3 night = alb * 0.2 + col * (0.05 + 0.05 * act) + col * land * 0.05 * act;
  vec3 c = mix(night, alb * 1.08, lit) + mix(col, vec3(1.0, 0.75, 0.5), 0.3) * term * lit;

  // core pulse (2D inner core L1621) and light (hit/flash/hover/nova, L1528) as emissive toward the centre
  float nv = clamp(dot(N, V), 0.0, 1.0);
  c += mix(col, vec3(1.0), 0.2) * (vE.y * 0.22 * nv * nv + vE.z * 0.25);

  // dim overall (labels sit next to it) and scale by activity
  c *= 0.6 + 0.4 * act;

  // fresnel rim (2D rim: col @ 0.2 + 0.2 act), brighter on the lit side
  float fr = pow(1.0 - nv, 3.0);
  c += mix(col, vec3(1.0), 0.25) * fr * (0.25 + 0.75 * smoothstep(-0.35, 0.6, ndl)) * (0.35 + 0.45 * act);

  gl_FragColor = vec4(c, vE.x);
}
`,kp=1.16,Gp=`
precision highp float;
uniform vec3 uOrb;
varying vec3 vObj;
varying vec3 vN;
varying vec3 vW;
varying vec4 vCol;
varying vec4 vE;
void main() {
  vec3 N = normalize(vN);
  vec3 V = normalize(cameraPosition - vW);
  vec3 L = normalize(uOrb - vW);
  // back faces of the shell: |N.V| -> projected radius fraction u of the shell; the body limb sits at 1 / ATMO_SCALE
  float d = dot(N, V);
  float u = sqrt(max(0.0, 1.0 - d * d));
  float inner = ${0.8620689655172414 .toFixed(5)};
  float g = clamp((1.0 - u) / (1.0 - inner), 0.0, 1.0);
  g = g * g * (3.0 - 2.0 * g);
  g *= g;
  float lit = 0.18 + 0.82 * smoothstep(-0.45, 0.55, dot(N, L));
  float act = vCol.a;
  vec3 c = mix(vCol.rgb, vec3(1.0), 0.3) * g * lit * (0.25 + 0.5 * act + vE.z * 0.3) * vE.x;
  if (max(c.r, max(c.g, c.b)) < 0.002) discard;
  gl_FragColor = vec4(c, 1.0);
}
`;var Dr=10,qs=3,tS=32,nS=1.04,iS=0.78,sS=27,Ys=sS*2,rS=()=>{try{return/[?&#]axes=1\b/.test(location.search+location.hash)}catch{return!1}},oS=`
attribute vec4 aC; // xyz centre, w half extent
attribute vec4 aP; // rgb colour 0..1, alpha
attribute vec4 aQ; // kind, p1, p2, p3
attribute float aS; // shift toward the camera (billboards)
attribute vec4 aU; // xyz plane axis u, w = 1 planar (ring plane), 0 camera-facing
attribute vec3 aV; // plane axis v
varying vec2 vP;
varying vec4 vCol;
varying vec4 vQ;
varying float vHalf;
void main() {
  float on = step(0.002, aP.w) * step(0.05, aC.w);
  vP = position.xy * aC.w;
  vCol = aP;
  vQ = aQ;
  vHalf = aC.w;
  vec3 w;
  if (aU.w > 0.5) {
    w = aC.xyz + (aU.xyz * position.x + aV * position.y) * aC.w;
  } else {
    vec3 toCam = cameraPosition - aC.xyz;
    float d = max(length(toCam), 1.0);
    vec3 c = aC.xyz + toCam / d * aS;
    float k = max(d - aS, 1.0) / d; // same screen size as unshifted
    vec3 right = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
    vec3 up = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);
    w = c + (right * position.x + up * position.y) * aC.w * k;
  }
  gl_Position = on > 0.5 ? projectionMatrix * viewMatrix * vec4(w, 1.0) : vec4(2.0, 2.0, 2.0, 1.0);
}
`,aS=`
precision highp float;
varying vec2 vP;
varying vec4 vCol;
varying vec4 vQ;
varying float vHalf;
uniform float uTime;
float segd(vec2 p, vec2 a, vec2 b) {
  vec2 pa = p - a;
  vec2 ba = b - a;
  float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
  return length(pa - ba * h);
}
void main() {
  float kind = vQ.x;
  float rho = length(vP);
  float cov = 0.0;
  if (kind < 0.5) {
    // 2D glow sprite: alpha 1 @0, 0.55 @0.2, 0.14 @0.5, 0 @1 (L130-148)
    float u = rho / vHalf;
    cov = u < 0.2 ? mix(1.0, 0.55, u / 0.2) : u < 0.5 ? mix(0.55, 0.14, (u - 0.2) / 0.3) : u < 1.0 ? mix(0.14, 0.0, (u - 0.5) / 0.5) : 0.0;
  } else if (kind < 1.5) {
    float aa = max(fwidth(rho), 0.0005);
    cov = 1.0 - smoothstep(vQ.z * 0.5 - aa * 0.5, vQ.z * 0.5 + aa * 0.5, abs(rho - vQ.y));
  } else if (kind < 2.5) {
    // dashed ring [2, 9] with round caps, offset -8 t (clockwise): vQ.y radius, vQ.z width, vQ.w scale
    float aa = max(fwidth(rho), 0.0005);
    float per = 11.0 * vQ.w;
    float dash = 2.0 * vQ.w;
    float s = -atan(vP.y, vP.x) * vQ.y;
    float u = mod(s - 8.0 * uTime * vQ.w, per);
    float ax = u < dash ? 0.0 : min(u - dash, per - u);
    float dd = length(vec2(ax, rho - vQ.y));
    cov = 1.0 - smoothstep(vQ.z * 0.5 - aa * 0.5, vQ.z * 0.5 + aa * 0.5, dd);
  } else {
    // checkmark (-0.34,0.02) (-0.1,0.28) (0.38,-0.26) * r, y flipped; vQ.y = r, vQ.z = width
    float s = vQ.y;
    vec2 a = vec2(-0.34, -0.02) * s;
    vec2 b = vec2(-0.1, -0.28) * s;
    vec2 c = vec2(0.38, 0.26) * s;
    float dd = min(segd(vP, a, b), segd(vP, b, c));
    float aa = max(fwidth(dd), 0.0005);
    cov = 1.0 - smoothstep(vQ.z * 0.5 - aa * 0.5, vQ.z * 0.5 + aa * 0.5, dd);
  }
  float a = min(vCol.a, 1.0) * cov;
  if (a < 0.002) discard;
  gl_FragColor = vec4(vCol.rgb * a, 1.0);
}
`,lS=`
attribute vec4 aA; // xyz centre, w radius
attribute vec4 aB; // xyz basis u, w start angle
attribute vec4 aCc; // xyz basis v, w sweep
attribute vec4 aD; // rgb, alpha
attribute float aE; // width
varying float vSide;
varying vec4 vCol;
varying float vEnd;
void main() {
  float u = position.x;
  float side = position.y;
  float R = max(aA.w, 1.0);
  float capA = aE * 0.5 / R;
  float span = aCc.w + 2.0 * capA;
  float ang = aB.w - capA + u * span;
  vec3 pos = aA.xyz + (cos(ang) * aB.xyz + sin(ang) * aCc.xyz) * R;
  vec3 tang = -sin(ang) * aB.xyz + cos(ang) * aCc.xyz;
  vec3 view = normalize(cameraPosition - pos);
  vec3 s = cross(tang, view);
  float sl = length(s);
  s = sl > 1e-4 ? s / sl : vec3(0.0);
  pos += s * side * aE * 0.5;
  vSide = side;
  vCol = aD;
  vEnd = clamp(min(u, 1.0 - u) * span / (2.0 * capA), 0.0, 1.0);
  float on = step(0.002, aD.w) * step(0.5, aA.w);
  gl_Position = on > 0.5 ? projectionMatrix * viewMatrix * vec4(pos, 1.0) : vec4(2.0, 2.0, 2.0, 1.0);
}
`,cS=`
precision highp float;
varying float vSide;
varying vec4 vCol;
varying float vEnd;
void main() {
  float a = min(vCol.a, 1.0) * (1.0 - smoothstep(0.5, 1.0, abs(vSide))) * smoothstep(0.0, 1.0, vEnd);
  if (a < 0.002) discard;
  gl_FragColor = vec4(vCol.rgb * a, 1.0);
}
`,ra=new Tn(new B(0,0,0),1e6),th=18;function Hp(e){let t=new Zt;t.setAttribute("position",new vt([-1,-1,0,1,-1,0,1,1,0,-1,1,0],3)),t.setIndex([0,1,2,0,2,3]);let n=[4,4,4,1,4,3],i=["aC","aP","aQ","aS","aU","aV"],s=[],r=[];for(let o=0;o<n.length;o++){let a=new Float32Array(e*n[o]),l=new Gt(a,n[o]);t.setAttribute(i[o],l),s.push(a),r.push(l)}return t.instanceCount=0,t.boundingSphere=ra,{geo:t,arrays:s,attrs:r}}function hS(e,t,n,i){let s=(O,z)=>new Qe({vertexShader:oS,fragmentShader:aS,uniforms:{uTime:t},blending:O?Et:Qn,transparent:!0,depthTest:z,depthWrite:!1,toneMapped:!1}),r=s(!0,!1),o=s(!0,!0),a=Hp(e),l=new ct(a.geo,r);l.renderOrder=lt.nodes-5,l.frustumCulled=!1,l.name="node-halos";let c=Hp(e*Dr),u=new ct(c.geo,o);u.renderOrder=lt.rings,u.frustumCulled=!1,u.name="node-sprites";let d=new di(1,40,26),h=new Float32Array(e*4),f=new Float32Array(e*4),x=new Float32Array(e*4),v=new Float32Array(e*4),m=[new Gt(h,4),new Gt(f,4),new Gt(x,4),new Gt(v,4)],p=()=>{let O=new Zt;return O.index=d.index,O.setAttribute("position",d.getAttribute("position")),O.setAttribute("normal",d.getAttribute("normal")),O.setAttribute("aB",m[0]),O.setAttribute("aBC",m[1]),O.setAttribute("aBE",m[2]),O.setAttribute("aBQ",m[3]),O.instanceCount=0,O.boundingSphere=ra,O},A=p(),R=p(),b=new Qe({vertexShader:eh,fragmentShader:zp,uniforms:{uTime:t,uOrb:n,uScale:{value:1}},blending:Qn,transparent:!0,depthTest:!0,depthWrite:!0,toneMapped:!1}),w=new ct(A,b);w.renderOrder=lt.nodes,w.frustumCulled=!1,w.name="node-bodies";let T=new Qe({vertexShader:eh,fragmentShader:Gp,uniforms:{uTime:t,uOrb:n,uScale:{value:kp}},blending:Et,side:hn,transparent:!0,depthTest:!0,depthWrite:!1,toneMapped:!1}),P=new ct(R,T);P.renderOrder=lt.nodes+1,P.frustumCulled=!1,P.name="node-atmospheres";let g=new Zt,_=[],D=[];for(let O=0;O<=th;O++){let z=O/th;if(_.push(z,-1,0,z,1,0),O<th){let H=O*2;D.push(H,H+1,H+2,H+1,H+3,H+2)}}g.setAttribute("position",new vt(_,3)),g.setIndex(D);let I=e*qs,F=[new Float32Array(I*4),new Float32Array(I*4),new Float32Array(I*4),new Float32Array(I*4),new Float32Array(I)],X=["aA","aB","aCc","aD","aE"],L=F.map((O,z)=>{let H=new Gt(O,z===4?1:4);return g.setAttribute(X[z],H),H});g.instanceCount=0,g.boundingSphere=ra;let G=new Qe({vertexShader:lS,fragmentShader:cS,blending:Et,transparent:!0,depthTest:!0,depthWrite:!1,toneMapped:!1}),Z=new ct(g,G);Z.renderOrder=lt.rings+1,Z.frustumCulled=!1,Z.name="node-arcs";let N={halo:l,haloGeo:a.geo,haloA:a.arrays,body:w,atmo:P,bodyGeo:A,atmoGeo:R,bodyA:[h,f,x,v],bodyMat:b,atmoMat:T,spr:u,sprGeo:c.geo,sprA:c.arrays,arc:Z,arcGeo:g,arcA:F,attrs:[...a.attrs,...c.attrs,...m,...L]},ie=[r,o,b,T,G];if(i){let O=new Float32Array(e*Ys*3),z=new Float32Array(e*Ys*3),H=new zt,fe=new vt(O,3),pe=new vt(z,3);H.setAttribute("position",fe),H.setAttribute("color",pe),H.boundingSphere=ra,H.setDrawRange(0,0);let We=new xr({vertexColors:!0,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),Ie=new To(H,We);Ie.renderOrder=lt.fx+50,Ie.frustumCulled=!1,Ie.name="node-axes",N.axes=Ie,N.axesGeo=H,N.axesP=O,N.axesC=z,N.axesAttrs=[fe,pe]}return{gpu:N,mats:ie,sphere:d}}var gi=(e,t)=>(e+(255-e)*t)/255;function Vp(){let e,t,n=[],i,s=tS,r=0,o=[],a=[],l=new Map,c=[],u=[],d=0,h=new Map,f=[],x=Tp(),v={motion:1,ray:x,drag:null},m={x:0,y:0,z:0},p={x:0,y:0,z:0},A=new B,R=new B,b=new B,w=new B,T=new B,P={x:0,y:0,z:0,visible:!1},g=null,_=!1,D=!1,I=-1,F=0,X=0,L=new B,G=!1,Z=[],N,ie,O=new Float64Array(16),z=new Float64Array(16),H=new Float64Array(16),fe=new Float64Array(16),pe=new Uint8Array(16),We=new Uint8Array(16),Ie=0,j=0,xe=0,re=0,Se=!1,Ae=rS(),me={value:new B},Te=[],Ne=()=>{t?.halo.removeFromParent(),t?.body.removeFromParent(),t?.atmo.removeFromParent(),t?.spr.removeFromParent(),t?.arc.removeFromParent(),t?.axes?.removeFromParent()},Le=()=>{Ne(),Je();let E=hS(s,e.uniforms.time,me,Ae);if(t=E.gpu,n=E.mats,i=E.sphere,e.scene.add(t.halo,t.body,t.atmo,t.spr,t.arc),t.axes)e.scene.add(t.axes)},Je=()=>{if(!t)return;t.haloGeo.dispose(),t.bodyGeo.dispose(),t.atmoGeo.dispose(),t.sprGeo.dispose(),t.arcGeo.dispose(),t.axesGeo?.dispose(),t.axes?.material?.dispose(),i?.dispose();for(let E of n)E.dispose();t=void 0,n=[],i=void 0},Ke=()=>f.pop()??{x:0,y:0,pxu:1,r:0,depth:1,visible:!1},dt=(E)=>{let k=l.get(E);if(k!==void 0)return k;if(k=c.pop()??d++,k>=s)s*=2,Le();if(l.set(E,k),u[k]=Cp(),Te[k]=Lp(E.id,E.spec.status),r=Math.max(r,k+1),!h.has(E.id))h.set(E.id,Ke());return wp(E),ia(Te[k],e.world.time,E.axisQ,E.ringN,E.spinQ),k},Me=(E)=>{if(!t)return;t.haloA[1][E*4+3]=0,t.bodyA[0][E*4+3]=0,t.bodyA[2][E*4]=0;for(let k=0;k<Dr;k++)t.sprA[1][(E*Dr+k)*4+3]=0;for(let k=0;k<qs;k++)t.arcA[3][(E*qs+k)*4+3]=0;if(t.axesP)t.axesP.fill(0,E*Ys*3,(E+1)*Ys*3)},ze=(E)=>{let k=l.get(E);if(k===void 0)return;l.delete(E),Me(k),c.push(k)},V=()=>{for(let E of[...l.keys()])ze(E);a.length=0;for(let E of h.values())f.push(E);h.clear()},ve=()=>{o=e.world.list();for(let E of o)dt(E)},C=()=>e.engine.canvas,Ge=()=>{let E=e.rig;x.active=E.pointerActive,E.rayFromNDC(E.pointerNDC.x,E.pointerNDC.y,A,R),b.setFromMatrixColumn(E.camera.matrixWorld,2),x.ox=A.x,x.oy=A.y,x.oz=A.z,x.dx=R.x,x.dy=R.y,x.dz=R.z,x.nx=b.x,x.ny=b.y,x.nz=b.z},we=(E)=>{if(O.length>=E)return;let k=Math.max(E,O.length*2);O=new Float64Array(k),z=new Float64Array(k),H=new Float64Array(k),fe=new Float64Array(k),pe=new Uint8Array(k),We=new Uint8Array(k)},et=(E,k)=>{let ae=o.length,_e=Se&&Math.hypot(E-Ie,k-j)<xe;for(let be=0;be<ae;be++)We[be]=pe[be]&&!(_e&&fe[be]>re)?1:0;return Bp(ae,O,z,H,We,E,k)},M=(E,k)=>{let ae=C().getBoundingClientRect();return et(E-ae.left,k-ae.top)},y=(E)=>{if(_||E.pointerType==="mouse"&&E.button!==0)return;let k=M(E.clientX,E.clientY);if(k<0)return;let ae=o[k];if(_=!0,D=!1,I=E.pointerId,F=E.clientX,X=E.clientY,g=ae,ae.dragging=!0,Ge(),x.active=!0,L.set(ae.x,ae.y,ae.z),na(x,ae.x,ae.y,ae.z,p))ae.grabX=p.x-ae.x,ae.grabY=p.y-ae.y,ae.grabZ=p.z-ae.z;else ae.grabX=ae.grabY=ae.grabZ=0;try{C().setPointerCapture(E.pointerId)}catch{}e.world.setHover(ae.id),C().style.cursor="grabbing",G=!0},U=(E)=>{if(!_||E.pointerId!==I)return;if(!D&&Math.hypot(E.clientX-F,E.clientY-X)>5)D=!0},J=(E)=>{if(!_||E.pointerId!==I)return;let k=E.type==="pointercancel"?null:g;_=!1;try{C().releasePointerCapture(E.pointerId)}catch{}for(let ae of o)ae.dragging=!1;if(g=null,k&&!D&&e.world.agents.get(k.id)===k)he(k);C().style.cursor="",G=!1},he=(E)=>{e.world.emit("agentClick",{agent:E}),e.world.emit("pulseAgent",{agent:E,n:10}),e.fx.burst(E,[E.col[0],E.col[1],E.col[2]],22,100),e.fx.shockwave(E,55)},q=()=>{let E=e.rig,k=E.camera;k.updateMatrixWorld(),w.setFromMatrixColumn(k.matrixWorld,2).negate();let ae=k.position,_e=e.engine.height/2/Math.tan(pi*Math.PI/360),be=o.length;we(be);for(let st=0;st<be;st++){let ot=o[st],tt=h.get(ot.id),yt=(ot.x-ae.x)*w.x+(ot.y-ae.y)*w.y+(ot.z-ae.z)*w.z,bt=yt>1?_e/yt:0;T.set(ot.x,ot.y,ot.z),E.project(T,P);let yn=Math.max(0,ot.spawn.x),Ut=P.visible&&yt>1&&yn>0.3;if(O[st]=P.x,z[st]=P.y,fe[st]=yt,H[st]=Op(ot.r)*bt,pe[st]=Ut?1:0,tt)tt.x=P.x,tt.y=P.y,tt.pxu=bt,tt.depth=yt,tt.r=ot.r*yn*ot.hover.x*ot.novaS*bt,tt.visible=Ut}let Fe=e.world.orb;T.set(Fe.x,Fe.y,Fe.z),E.project(T,P);let Pe=(Fe.x-ae.x)*w.x+(Fe.y-ae.y)*w.y+(Fe.z-ae.z)*w.z;Se=P.visible&&Pe>1,Ie=P.x,j=P.y,re=Pe,xe=Se?Fe.r*(_e/Pe):0},ee=()=>{let E=e.world,k=e.rig;if(_)return;let ae=E.hover,_e=ae!==null&&ae!=="orb";if(!k.pointerActive||k.dragging){if(_e)E.setHover(null);if(G)C().style.cursor="",G=!1;return}let be=e.engine.width,Fe=e.engine.height,Pe=(k.pointerNDC.x*0.5+0.5)*be,st=(-k.pointerNDC.y*0.5+0.5)*Fe,ot=et(Pe,st);if(ot>=0){if(E.setHover(o[ot].id),!G)C().style.cursor="pointer",G=!0}else{if(_e)E.setHover(null);if(G)C().style.cursor="",G=!1}},K=new Float32Array(6),te=(E)=>Me(E),Q=(E,k,ae,_e,be,Fe,Pe,st,ot,tt,yt,bt,yn,Ut,bn)=>{let xt=t.sprA,St=E*4;xt[0][St]=k,xt[0][St+1]=ae,xt[0][St+2]=_e,xt[0][St+3]=be,xt[1][St]=Fe,xt[1][St+1]=Pe,xt[1][St+2]=st,xt[1][St+3]=ot<0?0:ot>1?1:ot,xt[2][St]=tt,xt[2][St+1]=yt,xt[2][St+2]=bt,xt[2][St+3]=yn,xt[3][E]=Ut,xt[4][St]=K[0],xt[4][St+1]=K[1],xt[4][St+2]=K[2],xt[4][St+3]=bn;let Ot=E*3;xt[5][Ot]=K[3],xt[5][Ot+1]=K[4],xt[5][Ot+2]=K[5]},ce=(E,k,ae,_e,be,Fe,Pe)=>{let st=t,ot=Math.max(0,k.spawn.x),tt=ot*k.hover.x*k.novaS*Fe;if(ot<0.01||be<=0.002||tt<0.01){te(E);return}let yt=k.r,bt=yt*tt,yn=bt*iS,Ut=De(k.power),bn=0.8+0.2*Math.sin(Pe*1.7+k.phase),xt=De(k.hit*0.5+k.flash*0.6+(k.hover.x-1)*4+k.novaL*0.8),St=k.col[0]/255,Ot=k.col[1]/255,Qt=k.col[2]/255,{x:Wt,y:Dt,z:Yt}=k,ii=nS*yn;Dp(k.axisQ,K);{let ue=st.haloA,ye=E*4;ue[0][ye]=Wt,ue[0][ye+1]=Dt,ue[0][ye+2]=Yt,ue[0][ye+3]=2.4*bt,ue[1][ye]=St,ue[1][ye+1]=Ot,ue[1][ye+2]=Qt,ue[1][ye+3]=Math.min(1,((0.5*Ut+0.12)*bn+xt*0.3)*be),ue[2][ye]=0,ue[2][ye+1]=0,ue[2][ye+2]=0,ue[2][ye+3]=0,ue[3][E]=0,ue[4][ye+3]=0}{let ue=st.bodyA,ye=E*4;ue[0][ye]=Wt,ue[0][ye+1]=Dt,ue[0][ye+2]=Yt,ue[0][ye+3]=yn,ue[1][ye]=St,ue[1][ye+1]=Ot,ue[1][ye+2]=Qt,ue[1][ye+3]=Ut;let Xe=(0.18+0.5*Ut)*(0.85+0.15*Math.sin(Pe*2.4+k.phase))+xt*0.3;ue[2][ye]=be,ue[2][ye+1]=Xe,ue[2][ye+2]=xt,ue[2][ye+3]=_e.ph/(Math.PI*2);let nt=k.spinQ;ue[3][ye]=nt[0],ue[3][ye+1]=nt[1],ue[3][ye+2]=nt[2],ue[3][ye+3]=nt[3]}let Rn=0.25+0.75*Ut,mn=E*Dr,Pn=(ue,ye)=>ue+ye*0.5+2;Q(mn,Wt,Dt,Yt,Pn(bt,15*tt),St,Ot,Qt,0.1*Rn*bn*be,1,bt,15*tt,0,0,1),Q(mn+1,Wt,Dt,Yt,Pn(bt,8*tt),St,Ot,Qt,(0.28*Rn+xt*0.2)*be,1,bt,8*tt,0,0,1);let zn=0.18+xt*0.4;Q(mn+2,Wt,Dt,Yt,Pn(bt,3.2*tt),gi(k.col[0],zn),gi(k.col[1],zn),gi(k.col[2],zn),(0.35+0.65*Rn)*be,1,bt,3.2*tt,0,0,1);let S=(yt-9)*tt;Q(mn+3,Wt,Dt,Yt,Pn(Math.max(S,1),1.4*tt),St,Ot,Qt,0.38*Rn*be,1,Math.max(S,1),1.4*tt,0,0,1);let Y=(yt+12)*tt;Q(mn+4,Wt,Dt,Yt,Y+4*tt,St,Ot,Qt,0.6*(0.5+0.5*Math.sin(Pe*2.2))*ae.wait*be,2,Y,2.4*tt,tt,0,1);let oe=(Pe*0.35+k.phase)%1,ne=(yt+4+oe*34)*tt;Q(mn+5,Wt,Dt,Yt,Pn(ne,2*tt),St,Ot,Qt,(1-oe)*0.5*ae.idle*be,1,ne,2*tt,0,0,1),Q(mn+6,Wt,Dt,Yt,bt*0.7,gi(k.col[0],0.35),gi(k.col[1],0.35),gi(k.col[2],0.35),0.75*k.rest*ae.check*be,3,bt,2.2*tt,0,ii,0);let se=Math.min(1,ae.run+ae.think);for(let ue=0;ue<3;ue++){let ye=-(Pe*(0.8+ue*0.35)*(ue%2?-1:1)+k.phase+ue*2.1),Xe=(yt+22+ue*5)*tt,nt=Math.cos(ye)*Xe,Ze=Math.sin(ye)*Xe;Q(mn+7+ue,Wt+K[0]*nt+K[3]*Ze,Dt+K[1]*nt+K[4]*Ze,Yt+K[2]*nt+K[5]*Ze,6*tt,St,Ot,Qt,0.9*Ut*se*be,0,0,0,0,0,0)}let Ue=Pp(ae),Ce=st.arcA;for(let ue=0;ue<qs;ue++){let ye=E*qs+ue,Xe=ue<2?Math.min(1,ae.run+ae.think):ae.run,nt=ae.ang[ue]+ae.off[ue],Ze=ye*4;Ce[0][Ze]=Wt,Ce[0][Ze+1]=Dt,Ce[0][Ze+2]=Yt,Ce[0][Ze+3]=(yt+11+ue%2*3)*tt,Ce[1][Ze]=K[0],Ce[1][Ze+1]=K[1],Ce[1][Ze+2]=K[2],Ce[1][Ze+3]=-(nt+Ue),Ce[2][Ze]=K[3],Ce[2][Ze+1]=K[4],Ce[2][Ze+2]=K[5],Ce[2][Ze+3]=Ue,Ce[3][Ze]=gi(k.col[0],0.3),Ce[3][Ze+1]=gi(k.col[1],0.3),Ce[3][Ze+2]=gi(k.col[2],0.3),Ce[3][Ze+3]=Math.min(1,0.75*Ut*Xe*be),Ce[4][ye]=2.2*tt}if(st.axesP)Re(E,k,yn,_e,be)},de=[1,0.36,0.62],ge=[0.3,0.72,1],ke=[1,0.6,0.2],He=0,qe=0,W=(E,k,ae,_e,be,Fe,Pe,st)=>{let ot=t.axesP,tt=t.axesC,yt=(qe+He)*3;ot[yt]=E,ot[yt+1]=k,ot[yt+2]=ae,ot[yt+3]=_e,ot[yt+4]=be,ot[yt+5]=Fe;for(let bt=0;bt<3;bt++)tt[yt+bt]=Pe[bt]*st,tt[yt+3+bt]=Pe[bt]*st;He+=2},Ee=(E,k,ae,_e,be,Fe,Pe,st,ot,tt,yt,bt,yn)=>{let Ut=0,bn=0,xt=0;for(let Dt=0;Dt<=yt;Dt++){let Yt=ot+(tt-ot)*Dt/yt,ii=Math.cos(Yt)*st,Rn=Math.sin(Yt)*st,mn=E+_e[be]*ii+Fe[Pe]*Rn,Pn=k+_e[be+1]*ii+Fe[Pe+1]*Rn,zn=ae+_e[be+2]*ii+Fe[Pe+2]*Rn;if(Dt>0)W(Ut,bn,xt,mn,Pn,zn,bt,yn);Ut=mn,bn=Pn,xt=zn}let St=tt>ot?1:-1,Ot=Math.cos(tt),Qt=Math.sin(tt),Wt=Math.max(st*0.35,6);for(let Dt=-1;Dt<=1;Dt+=2){let Yt=(-Qt*_e[be]+Ot*Fe[Pe])*St,ii=(-Qt*_e[be+1]+Ot*Fe[Pe+1])*St,Rn=(-Qt*_e[be+2]+Ot*Fe[Pe+2])*St,mn=Ot*_e[be]+Qt*Fe[Pe],Pn=Ot*_e[be+1]+Qt*Fe[Pe+1],zn=Ot*_e[be+2]+Qt*Fe[Pe+2];W(Ut,bn,xt,Ut-(Yt+mn*Dt*0.6)*Wt,bn-(ii+Pn*Dt*0.6)*Wt,xt-(Rn+zn*Dt*0.6)*Wt,bt,yn)}},le=new Float32Array(3),Re=(E,k,ae,_e,be)=>{qe=E*Ys,He=0;let Fe=k.ringN,Pe=Math.min(1,be)*0.9,{x:st,y:ot,z:tt}=k;W(st-Fe[0]*ae*1.5,ot-Fe[1]*ae*1.5,tt-Fe[2]*ae*1.5,st+Fe[0]*ae*2,ot+Fe[1]*ae*2,tt+Fe[2]*ae*2,ke,Pe);let yt=1.6*ae;Ee(st+Fe[0]*yt,ot+Fe[1]*yt,tt+Fe[2]*yt,K,0,K,3,ae*0.42,0,5.2,14,de,Pe),le[0]=Fe[0],le[1]=Fe[1],le[2]=Fe[2];let bt=_e.prec>=0?1:-1;Ee(st,ot,tt,K,0,le,0,ae*1.45,Math.PI*0.62-bt*0.5,Math.PI*0.62+bt*0.5,8,ge,Pe)};return{name:"nodes",renderOrder:lt.nodes,anchors:h,pick(E,k){let ae=M(E,k);return ae>=0?o[ae]:null},init(E){e=E,Le();let k=E.world;Z.push(k.on("reset",()=>{V(),g=null,_=!1,d=0,c.length=0,r=0,ve()}),k.on("agentAdded",()=>ve()),k.on("agentRemoved",({agent:_e})=>{if(o=k.list(),_e===g)g=null,_=!1;if(_e.dragging=!1,l.has(_e)){a.push({a:_e,t:0});let be=h.get(_e.id);if(be)h.delete(_e.id),f.push(be);e.fx.burst(_e,[_e.col[0],_e.col[1],_e.col[2]],10,60)}}));let ae=E.engine.canvas;ae.addEventListener("pointerdown",y),ae.addEventListener("pointermove",U),ae.addEventListener("pointerup",J),ae.addEventListener("pointercancel",J),N=E.rig.shouldOrbit,ie=(_e)=>M(_e.clientX,_e.clientY)>=0?!1:N?N(_e):!0,E.rig.shouldOrbit=ie,ve()},update(E,k){let ae=k.world,_e=ae.time;if(v.motion=k.uniforms.motion.value,Ge(),g&&_&&na(x,L.x,L.y,L.z,m))v.drag=m;else v.drag=null;let be=0;for(let Fe=0;Fe<o.length;Fe++){let Pe=o[Fe],st=dt(Pe);if(Kc(Pe,E,_e,ae.hover===Pe.id),Ap(Pe,E,k.rng),Ep(Pe,o,E,_e,v),Qc(u[st],Pe,E),jc(Te[st],Pe.spec.status,E,_e,v.motion),ia(Te[st],_e,Pe.axisQ,Pe.ringN,Pe.spinQ),Pe.power>0.3)be++}ae.orb.activeCount=be;for(let Fe=a.length-1;Fe>=0;Fe--){let Pe=a[Fe];Pe.t+=E,Kc(Pe.a,E,_e,!1);let st=l.get(Pe.a);if(st!==void 0)Qc(u[st],Pe.a,E),jc(Te[st],Pe.a.spec.status,E,_e,v.motion),ia(Te[st],_e,Pe.a.axisQ,Pe.a.ringN,Pe.a.spinQ);if(Pe.t>=sa)ze(Pe.a),a.splice(Fe,1)}},beforeRender(E){if(!t)return;q(),ee();let k=E.world.time,ae=E.world.orb;me.value.set(ae.x,ae.y,ae.z);for(let be=0;be<o.length;be++){let Fe=o[be],Pe=l.get(Fe);if(Pe===void 0)continue;ce(Pe,Fe,u[Pe],Te[Pe],1,1,k)}for(let be of a){let Fe=be,Pe=l.get(Fe.a);if(Pe===void 0)continue;ce(Pe,Fe.a,u[Pe],Te[Pe],Fp(Fe.t),Np(Fe.t),k)}let _e=t;_e.haloGeo.instanceCount=r,_e.bodyGeo.instanceCount=r,_e.atmoGeo.instanceCount=r,_e.sprGeo.instanceCount=r*Dr,_e.arcGeo.instanceCount=r*qs;for(let be of _e.attrs)be.needsUpdate=!0;if(_e.axesGeo&&_e.axesAttrs){_e.axesGeo.setDrawRange(0,r*Ys);for(let be of _e.axesAttrs)be.needsUpdate=!0}},onContextRestored(){if(t)for(let E of t.attrs)E.needsUpdate=!0;if(t?.axesAttrs)for(let E of t.axesAttrs)E.needsUpdate=!0},dispose(){for(let k of Z)k();Z.length=0;let E=e?.engine.canvas;if(E){if(E.removeEventListener("pointerdown",y),E.removeEventListener("pointermove",U),E.removeEventListener("pointerup",J),E.removeEventListener("pointercancel",J),G)E.style.cursor=""}if(e&&e.rig.shouldOrbit===ie&&N)e.rig.shouldOrbit=N;Ne(),Je(),l.clear(),h.clear(),o=[],a.length=0}}}var Yn=[255,255,255],aa=[255,196,140],nh=44,uS=18,dS=26,fS=Bn+1,pS=Li+qd;function Nr(e,t){let n=e()*2-1,i=e()*ut,s=Math.sqrt(1-n*n);t[0]=Math.cos(i)*s,t[1]=Math.sin(i)*s,t[2]=n}function Wp(e,t,n,i,s){let r=Math.abs(e)<0.8?1:0,o=r?0:1,a=o*n,l=-r*n,c=r*t-o*e,u=Math.hypot(a,l,c)||1;a/=u,l/=u,c/=u;let d=t*c-n*l,h=n*a-e*c,f=e*l-t*a,x=Math.cos(i),v=Math.sin(i);s[0]=a*x+d*v,s[1]=l*x+h*v,s[2]=c*x+f*v}var mS=0.3,Xp=0.8;function Yp(e,t){if(e<0||e>=Xp)return;let n=1-e/Xp,i=n*n;return{q:n,coreA:0.5*i,coreR:t*(4+6*e),wideA:0.12*i}}var Zp=(e)=>e*0.5;function ih(e,t,n,i,s=mS){if(!(t>0.000000001))return e;return Math.min(e,s*Math.min(n,i)/t)}var $p=(e)=>1-0.5*Math.min(1,Math.max(0,e)),gS=2000,xS=2000;function vS(e,t){if((t==="running"||t==="thinking")&&!zd.has(e))return"launch";if(t==="completed"&&!ji.has(e))return"nova";return"change"}var _S=(e,t)=>pn[e].power<0.1&&pn[t].power>0.1,mt=[0,0,0],oa=[0,0,0],qp=(e,t,n)=>({kind:e,a:t,t:0,intro:n,acc:0,fired:!1,arrived:!1,blasted:!1,hx:0,hy:0,hz:0,u:0,trail:new Float32Array(e==="launch"?nh*3:0),trailN:0,dx:0,dy:1,dz:0,rays:[],clumps:[],lc2:es(t.accent,0.2),lc25:es(t.accent,0.25),lc3:es(t.accent,0.3),lc4:es(t.accent,0.4),hot:Er(t.accent,Yn,0.5),cool:Er(t.accent,Yn,0.3)});function yS(e,t){let n=e.a,i=n.x-t.x,s=n.y-t.y,r=n.z-t.z,o=Math.hypot(i,s,r);if(o<0.001)e.dx=0,e.dy=1,e.dz=0;else e.dx=i/o,e.dy=s/o,e.dz=r/o}class sh{hooks;rand;list=[];paused=!1;pausedAt=0;pending=new Map;constructor(e,t){this.hooks=e;this.rand=t}rnd(e,t){return e+this.rand()*(t-e)}startLaunch(e,t){let n=qp("launch",e,t);return this.list.push(n),n}startNova(e){if(this.novaActive(e))return;let t=qp("nova",e,!1),n=this.rnd.bind(this);for(let i=0;i<uS;i++)Nr(this.rand,mt),t.rays.push({dx:mt[0],dy:mt[1],dz:mt[2],len:n(180,460),w:n(1,3.2)});for(let i=0;i<dS;i++)Nr(this.rand,mt),Wp(mt[0],mt[1],mt[2],this.rand()*ut,oa),t.clumps.push({dx:mt[0],dy:mt[1],dz:mt[2],tx:oa[0],ty:oa[1],tz:oa[2],dist:n(120,360),size:n(14,40),hot:this.rand()<0.4,dir:this.rand()<0.5?-1:1});return this.list.push(t),t}novaActive(e){for(let t=0;t<this.list.length;t++)if(this.list[t].kind==="nova"&&this.list[t].a===e)return!0;return!1}onStatus(e,t,n){let i=vS(t,n);if(i==="launch")return this.startLaunch(e,!1),i;if(i==="nova")return this.startNova(e),i;let s=this.hooks,r=_S(t,n),o=pn[n].dot;return e.flash=1,s.pulseAgent(e,r?12:5),s.burst(e.x,e.y,e.z,o,r?26:12,90),s.ripple(e.x,e.y,e.z,e.r*0.8,e.r+120,1.4,o,3,!1),i}onStatusEvent(e,t,n,i){if(!this.paused){this.onStatus(e,t,n);return}let s=this.pending.get(e);if(!s)this.pending.set(e,{agent:e,prev:t,next:n,at:i});else s.next=n,s.at=i}setPaused(e,t){if(e===this.paused)return;if(this.paused=e,e){this.pausedAt=t;return}let n=t-this.pausedAt>gS,i=[...this.pending.values()];this.pending.clear();for(let s of i){if(s.prev===s.next)continue;if(n||t-s.at>xS)this.applySilently(s.agent,s.next);else this.onStatus(s.agent,s.prev,s.next)}}applySilently(e,t){this.drop(e);let n=pn[t];e.statusT=99,e.power=n.power,e.flow=n.flow,e.spin=n.spin,e.detail=n.power>0.15?1:0,e.rest=ji.has(t)?1:0,e.novaS=1,e.novaL=0,e.flash=0,e.hit=0;let i=1-De(e.power*1.1);for(let s=0;s<3;s++)e.col[s]=e.accent[s]+(zs[s]-e.accent[s])*i,e.dot[s]=n.dot[s]}drop(e){this.pending.delete(e);for(let t=this.list.length-1;t>=0;t--)if(this.list[t].a===e)this.list.splice(t,1);e.charging=!1}clear(){this.pending.clear();for(let e of this.list)e.a.charging=!1;this.list.length=0}update(e,t,n,i){for(let s of n)if(!s.launched&&t>=s.spawnAt-Bn)s.launched=!0,this.startLaunch(s,!0);for(let s=this.list.length-1;s>=0;s--){let r=this.list[s];if(r.kind==="launch"?this.stepLaunch(r,e,i):this.stepNova(r,e,i))this.list[s]=this.list[this.list.length-1],this.list.pop()}}impact(e){let t=e.a,n=this.hooks,i=e.lc25;n.ripple(t.x,t.y,t.z,t.r*0.7,t.r+170,1.2,i,5,!0),n.ripple(t.x,t.y,t.z,t.r*0.9,t.r+300,1.9,t.accent,2.5,!0),n.ripple(t.x,t.y,t.z,t.r,t.r+90,0.7,Yn,3,!0);for(let s=0;s<46;s++){Nr(this.rand,mt);let r=this.rnd(40,260);n.spark(t.x,t.y,t.z,mt[0]*r,mt[1]*r,mt[2]*r,this.rnd(0.6,1.5),this.rnd(0.9,2.4),s%3?i:Yn)}n.pulseAgent(t,14),t.flash=1,t.hit=1.4,n.shake(5),n.shockwave(t.x,t.y,t.z,60)}stepLaunch(e,t,n){let i=e.a,s=this.hooks,r=n.orb;e.t+=t;let o=e.t;yS(e,r);let a=r.x+e.dx*r.r,l=r.y+e.dy*r.r,c=r.z+e.dz*r.r;if(!e.fired)e.fired=!0,s.ripple(r.x,r.y,r.z,r.r*0.98,r.r+300,1.5,e.lc2,4,!0),s.shockwave(r.x,r.y,r.z,45);if(o<ti){let u=o/ti;r.flash=Math.max(r.flash,0.55*u),r.feed=Math.min(1,r.feed+t*1.5),e.acc+=t*(70+160*u);while(e.acc>=1){e.acc-=1;let d=this.rnd(-1,1),h=this.rnd(50,120);Wp(e.dx,e.dy,e.dz,this.rand()*ut,mt);let f=Math.cos(d),x=Math.sin(d),v=a+(e.dx*f+mt[0]*x)*h,m=l+(e.dy*f+mt[1]*x)*h,p=c+(e.dz*f+mt[2]*x)*h,A=a-v,R=l-m,b=c-p,w=Math.hypot(A,R,b)+0.01;s.spark(v,m,p,A/w*210,R/w*210,b/w*210,this.rnd(0.35,0.7),this.rnd(0.9,1.8),this.rand()<0.5?Yn:e.lc3)}}else if(o<Bn){let u=Math.pow((o-ti)/Mc,1.6);Gs(i.strands[0].pts,u,mt),e.hx=mt[0],e.hy=mt[1],e.hz=mt[2],e.u=u;let d=e.trail;if(d.copyWithin(3,0,(nh-1)*3),d[0]=e.hx,d[1]=e.hy,d[2]=e.hz,e.trailN<nh)e.trailN++;if(e.intro)i.launchGrow=u;for(let h=0;h<3;h++)s.spark(e.hx,e.hy,e.hz,this.rnd(-40,40),this.rnd(-40,40),this.rnd(-40,40),this.rnd(0.3,0.8),this.rnd(0.8,1.8),h?e.lc3:Yn)}if(o>=Bn){if(!e.arrived){if(e.arrived=!0,e.intro)i.launchGrow=1;this.impact(e)}e.trailN=Math.max(0,e.trailN-6)}return o>=fS}stepNova(e,t,n){let i=e.a,s=this.hooks;e.t+=t;let r=e.t;if(r<Li){let o=r/Li,a=o*o;i.charging=!0,i.novaS=1-0.26*a+Math.sin(r*70)*0.014*a*n.motion,i.novaL=0.2+1.4*a,e.acc+=t*(40+220*a);while(e.acc>=1){e.acc-=1,Nr(this.rand,mt);let l=i.r*this.rnd(1.8,3.4);s.spark(i.x+mt[0]*l,i.y+mt[1]*l,i.z+mt[2]*l,-mt[0]*280,-mt[1]*280,-mt[2]*280,this.rnd(0.3,0.6),this.rnd(0.9,1.8),this.rand()<0.5?Yn:e.lc4)}}else if(!e.blasted){e.blasted=!0,i.charging=!1,i.novaS=1.45,i.novaL=2.4,i.flash=1,i.hit=1.4,s.shake(16),s.shockwave(i.x,i.y,i.z,210),s.ripple(i.x,i.y,i.z,i.r*0.6,i.r+520,2.6,Yn,7,!0),s.ripple(i.x,i.y,i.z,i.r*0.8,i.r+360,2,e.lc3,4,!0),s.ripple(i.x,i.y,i.z,i.r,i.r+220,1.4,aa,3,!0);for(let o=0;o<120;o++){Nr(this.rand,mt);let a=Math.pow(this.rand(),0.6)*560+60,l=o%4===0?Yn:o%4===1?aa:e.lc3,c=i.r*0.5;s.spark(i.x+mt[0]*c,i.y+mt[1]*c,i.z+mt[2]*c,mt[0]*a,mt[1]*a,mt[2]*a,this.rnd(0.9,2.4),this.rnd(1,3),l)}}if(r>=pS)return i.charging=!1,!0;return!1}}var Jp=(e)=>({centreR:1.9+0.5*e,centreA:0.28*e,whiteR:24+70*e*e,whiteA:0.85*e,colR:50+110*e,colA:0.55*e}),Kp=(e)=>De(1-(e-ti)/0.25),Qp=(e)=>De(1-e/0.9),jp=(e)=>Math.pow(1-De(e/1.6),1.5)*0.8;function em(e,t,n){let i=Math.cos(t),s=Math.sin(t);n[0]=e.dx*i+e.tx*s,n[1]=e.dy*i+e.ty*s,n[2]=e.dz*i+e.tz*s}var bS=4,SS=4;class rh{simT=bS;step(e,t,n,i,s){if(this.simT-=e,this.simT>0||t<=SS)return!1;if(this.simT=4.5+i()*4,n.size===0)return!1;let r=[...n.values()],o=r[Math.floor(i()*r.length)];if(pn[o.spec.status].power<0.1&&i()>=0.3)return!1;let l=kd[o.spec.status],c=l[Math.floor(i()*l.length)];if(c===o.spec.status)return!1;return s(o,c),!0}}var MS=1536,la=192,oh=256,wS=`
attribute vec4 aA; // centre xyz, radius
attribute vec4 aB; // rgb 0..1, alpha
attribute vec2 aC; // line width (world), shell flag
uniform vec2 uRes;
varying vec2 vC;
varying vec4 vCol;
varying vec3 vP;
varying float vShell;
void main() {
  vec4 mv = viewMatrix * vec4(aA.xyz, 1.0);
  float zc = max(-mv.z, 1.0);
  float upp = zc / (projectionMatrix[1][1] * 0.5 * uRes.y);
  float hw = max(aC.x * 0.5, 0.6 * upp);
  float ext = aA.w + hw + 2.0 * upp;
  vec4 pos = mv;
  pos.xy += position.xy * ext;
  vC = position.xy * ext;
  vP = vec3(aA.w, hw, upp);
  vShell = aC.y;
  float thin = min(1.0, aC.x * 0.5 / hw);
  vCol = vec4(aB.rgb, aB.a * thin * (mv.z < -1.0 ? 1.0 : 0.0));
  gl_Position = projectionMatrix * pos;
}
`,AS=`
precision highp float;
varying vec2 vC;
varying vec4 vCol;
varying vec3 vP;
varying float vShell;
void main() {
  float d = length(vC);
  float R = vP.x;
  float hw = vP.y;
  float aa = vP.z;
  float band = 1.0 - smoothstep(hw - aa, hw + aa, abs(d - R));
  float g = band;
  if (vShell > 0.5) {
    float rho = clamp(d / max(R, 0.001), 0.0, 1.0);
    float limb = 1.0 / sqrt(max(1.0 - rho * rho, 0.04)) - 1.0;
    g = min(max(band, 0.16 * limb * step(d, R)), 1.0);
  }
  if (g <= 0.002) discard;
  gl_FragColor = vec4(vCol.rgb * (vCol.a * g), 1.0);
}
`,TS=`
attribute vec4 aP0; // start xyz, half width (world)
attribute vec4 aP1; // end xyz, alpha
uniform vec2 uRes;
varying vec2 vS;
varying vec3 vP; // length, half width, world per px
varying float vA;
void main() {
  vec4 m0 = viewMatrix * vec4(aP0.xyz, 1.0);
  vec4 m1 = viewMatrix * vec4(aP1.xyz, 1.0);
  vec2 d = m1.xy - m0.xy;
  float L = length(d);
  vec2 dir = L > 1e-4 ? d / L : vec2(1.0, 0.0);
  vec2 nrm = vec2(-dir.y, dir.x);
  float zc = max(-m0.z, 1.0);
  float upp = zc / (projectionMatrix[1][1] * 0.5 * uRes.y);
  float hw = max(aP0.w, 0.6 * upp);
  float ext = hw + 2.0 * upp;
  bool atStart = position.x < 0.0;
  vec4 mv = atStart ? m0 : m1;
  mv.xy += dir * (atStart ? -ext : ext) + nrm * position.y * ext;
  vS = vec2(atStart ? -ext : L + ext, position.y * ext);
  vP = vec3(L, hw, upp);
  vA = aP1.w * min(1.0, aP0.w / hw) * ((m0.z < -1.0 && m1.z < -1.0) ? 1.0 : 0.0);
  gl_Position = projectionMatrix * mv;
}
`,ES=`
precision highp float;
varying vec2 vS;
varying vec3 vP;
varying float vA;
void main() {
  float d = length(vec2(vS.x - clamp(vS.x, 0.0, vP.x), vS.y));
  float g = 1.0 - smoothstep(vP.y - vP.z, vP.y + vP.z, d);
  if (g <= 0.002) discard;
  gl_FragColor = vec4(vec3(vA * g), 1.0);
}
`,tm=new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]);class nm{mesh;geo=new Zt;mat;A=new Float32Array(la*4);B=new Float32Array(la*4);C=new Float32Array(la*2);aA=new Gt(this.A,4);aB=new Gt(this.B,4);aC=new Gt(this.C,2);n=0;constructor(e){let t=this.geo;t.setAttribute("position",new kt(tm,3)),t.setIndex([0,1,2,0,2,3]);for(let n of[this.aA,this.aB,this.aC])n.setUsage(tn);t.setAttribute("aA",this.aA),t.setAttribute("aB",this.aB),t.setAttribute("aC",this.aC),t.instanceCount=0,this.mat=new Qe({vertexShader:wS,fragmentShader:AS,uniforms:{uRes:{value:e.resolution.value}},blending:Et,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),this.mesh=new ct(t,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=lt.fx,this.mesh.name="choreo-rings"}begin(){this.n=0}add(e,t,n,i,s,r,o,a){if(this.n>=la||o<=0.004||i<=0.5)return;let l=this.n++;this.A[l*4]=e,this.A[l*4+1]=t,this.A[l*4+2]=n,this.A[l*4+3]=i,this.B[l*4]=r[0]/255,this.B[l*4+1]=r[1]/255,this.B[l*4+2]=r[2]/255,this.B[l*4+3]=o>1?1:o,this.C[l*2]=s,this.C[l*2+1]=a?1:0}end(){this.geo.instanceCount=this.n,this.aA.needsUpdate=!0,this.aB.needsUpdate=!0,this.aC.needsUpdate=!0}dispose(){this.mesh.removeFromParent(),this.geo.dispose(),this.mat.dispose()}}class im{mesh;geo=new Zt;mat;P0=new Float32Array(oh*4);P1=new Float32Array(oh*4);a0=new Gt(this.P0,4);a1=new Gt(this.P1,4);n=0;constructor(e){let t=this.geo;t.setAttribute("position",new kt(tm,3)),t.setIndex([0,1,2,0,2,3]),this.a0.setUsage(tn),this.a1.setUsage(tn),t.setAttribute("aP0",this.a0),t.setAttribute("aP1",this.a1),t.instanceCount=0,this.mat=new Qe({vertexShader:TS,fragmentShader:ES,uniforms:{uRes:{value:e.resolution.value}},blending:Et,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),this.mesh=new ct(t,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=lt.fx,this.mesh.name="choreo-rays"}begin(){this.n=0}add(e,t,n,i,s,r,o,a){if(this.n>=oh||a<=0.004||o<=0.01)return;let l=this.n++*4;this.P0[l]=e,this.P0[l+1]=t,this.P0[l+2]=n,this.P0[l+3]=o*0.5,this.P1[l]=i,this.P1[l+1]=s,this.P1[l+2]=r,this.P1[l+3]=a>1?1:a}end(){this.geo.instanceCount=this.n,this.a0.needsUpdate=!0,this.a1.needsUpdate=!0}dispose(){this.mesh.removeFromParent(),this.geo.dispose(),this.mat.dispose()}}var ah=[255,250,240],ca=[0,0,0];function sm(){let e,t,n,i,s,r,o=[],a=0,l,c={orb:{x:0,y:0,z:0,r:135,flash:0,feed:0},motion:1,rand:Math.random},u={x:0,y:0,z:0},d={x:0,y:0,z:0},h=(f,x)=>{if(!e||!t||!n)return;let{a:v,t:m}=f,p=x.world.orb;if(f.kind==="launch"){let X=p.x+f.dx*p.r,L=p.y+f.dy*p.r,G=p.z+f.dz*p.r;if(m<ti){let N=m/ti,ie=Jp(N);e.add(p.x,p.y,p.z,p.r*ie.centreR,v.accent[0],v.accent[1],v.accent[2],ie.centreA),e.add(X,L,G,ie.whiteR,255,255,255,ie.whiteA),e.add(X,L,G,ie.colR,f.lc25[0],f.lc25[1],f.lc25[2],ie.colA)}else if(m<Bn){let N=Kp(m);if(N>0)e.add(X,L,G,110,f.lc25[0],f.lc25[1],f.lc25[2],0.6*N)}let Z=f.trailN;for(let N=0;N<Z;N++){let ie=1-N/Z;e.add(f.trail[N*3],f.trail[N*3+1],f.trail[N*3+2],5+24*ie,f.lc25[0],f.lc25[1],f.lc25[2],0.5*ie)}if(m>=ti&&m<Bn)e.add(f.hx,f.hy,f.hz,56,v.accent[0],v.accent[1],v.accent[2],0.8),e.add(f.hx,f.hy,f.hz,26,255,255,255,1);if(m>=Bn){let N=m-Bn,ie=Qp(N);if(e.add(v.x,v.y,v.z,v.r*(2.5+N*5),f.lc25[0],f.lc25[1],f.lc25[2],ie*ie*0.9),N<0.5)e.add(v.x,v.y,v.z,v.r*1.7,255,255,255,1-N/0.5);t.add(v.x,v.y,v.z,v.r*(1+N*2.6),3*ie+0.5,Yn,ie*0.7,!1)}return}if(m<Li){let X=m/Li,L=X*X;e.add(v.x,v.y,v.z,v.r*(1.8+2.2*L),f.hot[0],f.hot[1],f.hot[2],0.3+0.6*L),e.add(v.x,v.y,v.z,v.r*(0.8+X),255,255,255,Zp(L));for(let G=0;G<3;G++){let Z=(X*1.6+G/3)%1;t.add(v.x,v.y,v.z,v.r*(3.2-2.4*Z),2,f.hot,(1-Z)*0.5*X,!1)}return}let A=m-Li,R=Yp(A,v.r);if(R){let X=x.world.layout,L=x.uniforms.resolution.value,G=x.rig.camera.position,Z=Math.max(1,Math.hypot(v.x-G.x,v.y-G.y,v.z-G.z)),N=0.5*L.y/(Z*Math.tan(pi*Math.PI/360));if(R.q>a)a=R.q;e.add(v.x,v.y,v.z,ih(R.coreR,N,L.x,L.y),ah[0],ah[1],ah[2],R.coreA),e.add(v.x,v.y,v.z,ih(Math.max(X.LW,X.LH)*0.9,N,L.x,L.y),f.cool[0],f.cool[1],f.cool[2],R.wideA)}let b=De(A/3),w=Math.pow(1-b,1.5),T=18*(1-b)+2,P=En(b)*(v.r+430);t.add(v.x,v.y,v.z,P,T,f.cool,0.22*w,!0),t.add(v.x,v.y,v.z,P*0.7,T,f.cool,0.14*w,!0);let g=De(A/1.6),_=En(g),D=jp(A);if(D>=0.01)for(let X=0;X<f.rays.length;X++){let L=f.rays[X],G=v.r*0.5+_*L.len*0.45,Z=v.r*0.7+_*L.len;n.add(v.x+L.dx*G,v.y+L.dy*G,v.z+L.dz*G,v.x+L.dx*Z,v.y+L.dy*Z,v.z+L.dz*Z,L.w*(1-g),D)}let I=De(A/3.2),F=0.5*Math.pow(1-I,1.4);if(F>0.01){let X=En(I);for(let L=0;L<f.clumps.length;L++){let G=f.clumps[L],Z=X*G.dist+v.r*0.5;em(G,I*0.5*G.dir,ca);let N=G.hot?aa:f.cool;e.add(v.x+ca[0]*Z,v.y+ca[1]*Z,v.z+ca[2]*Z,G.size*(0.6+I*0.9),N[0],N[1],N[2],F)}}};return{name:"choreo",renderOrder:lt.fx,init(f){let{world:x,fx:v}=f;i=f.scene,c.orb=x.orb,c.rand=f.rng,s=new sh({ripple(p,A,R,b,w,T,P,g,_){u.x=p,u.y=A,u.z=R,v.ripple({pos:u,r0:b,r1:w,life:T,color:P,width:g,shell:_})},spark(p,A,R,b,w,T,P,g,_){u.x=p,u.y=A,u.z=R,d.x=b,d.y=w,d.z=T,v.spark(u,d,P,g,_)},burst(p,A,R,b,w,T){u.x=p,u.y=A,u.z=R,v.burst(u,b,w,T)},shockwave(p,A,R,b){u.x=p,u.y=A,u.z=R,v.shockwave(u,b)},shake:(p)=>v.shake(p),pulseAgent:(p,A)=>x.emit("pulseAgent",{agent:p,n:A})},f.rng),s.paused=x.paused,r=new rh,e=new ts(MS,lt.fx,f.uniforms,"choreo-glows"),e.attach(i),t=new nm(f.uniforms),n=new im(f.uniforms),i.add(t.mesh),i.add(n.mesh),o.push(x.on("status",({agent:p,prev:A,next:R})=>s?.onStatusEvent(p,A,R,performance.now())),x.on("pause",({paused:p,at:A})=>s?.setPaused(p,A)),x.on("agentRemoved",({agent:p})=>s?.drop(p)),x.on("reset",()=>s?.clear()))},update(f,x){if(!s)return;c.motion=x.uniforms.motion.value;let v=x.world;if(v.simulate&&r)r.step(f,v.time,v.agents,x.rng,(m,p)=>v.setStatus(m,p));s.update(f,v.time,v.agents.values(),c)},beforeRender(f){if(!s||!e||!t||!n)return;a=0,e.begin(),t.begin(),n.begin();for(let x=0;x<s.list.length;x++)h(s.list[x],f);e.end(),t.end(),n.end(),l=f.engine.bloom,l.novaScale=$p(a)},dispose(){if(l)l.novaScale=1;l=void 0;for(let f of o)f();o.length=0,s?.clear(),s=void 0,e?.dispose(),t?.dispose(),n?.dispose(),e=t=void 0,n=void 0}}}var rm=Tr.length,CS=30,lh=0.55,RS=0.2,PS=0.2,IS=0.11,LS=new B(120,160,255).divideScalar(255),DS=`
uniform float uExt;
uniform vec3 uOrb;
varying vec3 vW;
void main() {
  vec3 w = vec3(uOrb.x + position.x * uExt, uOrb.y, uOrb.z + position.y * uExt);
  vW = w;
  gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0);
}
`,NS=`
precision highp float;
${Bs}
#define RINGS ${rm}
#define TAU 6.283185307
uniform vec2 uK;
uniform vec3 uOrb;
uniform float uR[RINGS];
uniform float uA[RINGS];
uniform float uTime;
uniform float uMotion;
uniform vec3 uCol;
varying vec3 vW;
void main() {
  vec2 q = vec2((vW.x - uOrb.x) / uK.x, (vW.z - uOrb.z) / uK.y);
  float rho = length(q);
  float fw = max(fwidth(rho), 1e-3);
  float th = atan(q.y, q.x);
  float acc = 0.0;
  for (int i = 0; i < RINGS; i++) {
    float R = uR[i];
    float line = 1.0 - smoothstep(0.6 * fw, 1.6 * fw, abs(rho - R));
    if (line <= 0.0) continue;
    float n = floor(TAU * R / ${CS.toFixed(1)} + 0.5);
    float dir = mod(float(i), 2.0) < 0.5 ? 1.0 : -1.0;
    float ph = fract(th / TAU * n + dir * uTime * uMotion * ${RS.toFixed(2)});
    float fwp = fw * n / (TAU * R); // one pixel in dash periods (radial estimate)
    float dash = smoothstep(0.0, fwp, ph) * (1.0 - smoothstep(${lh.toFixed(2)} - fwp, ${lh.toFixed(2)}, ph));
    dash = mix(dash, ${lh.toFixed(2)}, clamp(fwp * 2.0 - 0.5, 0.0, 1.0)); // sub-pixel dashes average out
    acc += line * dash * uA[i];
  }
  if (acc <= 0.0) discard;
  gl_FragColor = vec4(uCol * (acc * fogFade(vW)), 1.0);
}
`;function om(){let e,t,n,i,s,r=Tr.slice(),o=Tr.map((c)=>yc.includes(c)?PS:IS),a=new $e(1,1),l=new B;return{name:"orbits",renderOrder:lt.orbits,init(c){i=c.scene,t=new dn(2,2),n=new Qe({vertexShader:DS,fragmentShader:NS,uniforms:{uExt:{value:1000},uOrb:{value:l},uK:{value:a},uR:{value:r},uA:{value:o},uTime:c.uniforms.time,uMotion:c.uniforms.motion,uCol:{value:LS},uFog:mi(c.uniforms)},blending:Et,side:un,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),e=new ct(t,n),e.frustumCulled=!1,e.renderOrder=lt.orbits,e.name="orbits",i.add(e);let u=()=>{let d=Sc(c.world.layout);a.set(d.kx,d.kz),n.uniforms.uExt.value=Tr[rm-1]*Math.max(d.kx,d.kz)+40};u(),s=c.world.on("layout",u)},update(){},beforeRender(c){let u=c.world.orb;l.set(u.x,u.y,u.z),Ii(c.uniforms,c.rig.camera.position,u)},dispose(){if(s?.(),e)i?.remove(e);t?.dispose(),n?.dispose(),e=void 0,t=void 0,n=void 0}}}var am=[tf,sf,Hf,ep,tp,np,ip,ap,fp,yp,Vp,sm,om];var Zs,FS=(e,t)=>{let n=ef(e,{reducedMotion:t.reducedMotion,onFatal:(s)=>{console.error("eagle-eye 3D: fatal,",s),e.dispatchEvent(new CustomEvent("eagle-eye-3d-fatal",{detail:s,bubbles:!0}))}});for(let s of am)n.addLayer(s());let i=[n.world.on("agentClick",({agent:s})=>t.onAgentClick?.(s.spec)),n.world.on("orbClick",()=>t.onOrbClick?.())];return Zs=n,ch.engine=n,{update(s){n.update(s)},setPaused:(s)=>n.setPaused(s),destroy(){for(let s of i)s();if(n.dispose(),Zs===n)Zs=void 0,ch.engine=void 0}}},ch={mount:FS,stats:()=>Zs?.stats()??{fps:0,drawCalls:0},setTime:(e)=>Zs?.setTime(e),step:(e)=>Zs?.step(e),engine:void 0};window.__eagleEye3D=ch;})();
