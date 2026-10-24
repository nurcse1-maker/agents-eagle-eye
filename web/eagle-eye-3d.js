(()=>{var CW="186";var _W=0,PQ=1,PW=2;var e6=1,AW=2,k6=3,I6=0,X9=1,V9=2,v9=0,a9=1,PJ=2,AQ=3,wQ=4,wW=5;var z6=100,TW=101,SW=102,jW=103,vW=104,yW=200,bW=201,fW=202,hW=203,xW=204,gW=205,pW=206,mW=207,uW=208,lW=209,dW=210,cW=211,nW=212,sW=213,iW=214,oW=0,aW=1,rW=2,TQ=3,tW=4,eW=5,JY=6,$Y=7,QY=0,ZY=1,KY=2,R9=0,J7=1,$7=2,Q7=3,Z7=4,K7=5,W7=6,Y7=7;var R6=301,h8=302,K$=303,W$=304,X7=306,WY=1000,Y$=1001,YY=1002,u9=1003,XY=1004;var U7=1005;var L9=1006,X$=1007;var x8=1008;var C9=1009,UY=1010,HY=1011,H7=1012,SQ=1013,C8=1014,U8=1015,tJ=1016,jQ=1017,vQ=1018,C6=1020,GY=35902,qY=35899,NY=1021,FY=1022,y9=1023,g8=1026,p8=1027,OY=1028,yQ=1029,m8=1030,bQ=1031;var fQ=1033,U$=33776,H$=33777,G$=33778,q$=33779,hQ=35840,xQ=35841,gQ=35842,pQ=35843,mQ=36196,uQ=37492,lQ=37496,dQ=37488,cQ=37489,N$=37490,nQ=37491,sQ=37808,iQ=37809,oQ=37810,aQ=37811,rQ=37812,tQ=37813,eQ=37814,JZ=37815,$Z=37816,QZ=37817,ZZ=37818,KZ=37819,WZ=37820,YZ=37821,XZ=36492,UZ=36494,HZ=36495,GZ=36283,qZ=36284,F$=36285,NZ=36286;var FZ=0,EY=1,u8="",_6="srgb",P6="srgb-linear",OZ="linear",RJ="srgb";var MY=512,DY=513,VY=514,O$=515,LY=516,BY=517,E$=518,kY=519;var U9=35048;var EZ="300 es",MZ=2000;function pU(J){for(let $=J.length-1;$>=0;--$)if(J[$]>=65535)return!0;return!1}function mU(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function r6(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function IY(){let J=r6("canvas");return J.style.display="block",J}var JW={},B6=null;function t6(...J){let $="THREE."+J.shift();if(B6)B6("log",$,...J);else console.log($,...J)}function zY(J){let $=J[0];if(typeof $==="string"&&$.startsWith("TSL:")){let Q=J[1];if(Q&&Q.isStackTrace)J[0]+=" "+Q.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function QJ(...J){J=zY(J);let $="THREE."+J.shift();if(B6)B6("warn",$,...J);else{let Q=J[0];if(Q&&Q.isStackTrace)console.warn(Q.getError($));else console.warn($,...J)}}function KJ(...J){J=zY(J);let $="THREE."+J.shift();if(B6)B6("error",$,...J);else{let Q=J[0];if(Q&&Q.isStackTrace)console.error(Q.getError($));else console.error($,...J)}}function f8(...J){let $=J.join(" ");if($ in JW)return;JW[$]=!0,QJ(...J)}function RY(J,$,Q){return new Promise(function(Z,K){function W(){switch(J.clientWaitSync($,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:K();break;case J.TIMEOUT_EXPIRED:setTimeout(W,Q);break;default:Z()}}setTimeout(W,Q)})}var CY={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class H8{addEventListener(J,$){if(this._listeners===void 0)this._listeners={};let Q=this._listeners;if(Q[J]===void 0)Q[J]=[];if(Q[J].indexOf($)===-1)Q[J].push($)}hasEventListener(J,$){let Q=this._listeners;if(Q===void 0)return!1;return Q[J]!==void 0&&Q[J].indexOf($)!==-1}removeEventListener(J,$){let Q=this._listeners;if(Q===void 0)return;let Z=Q[J];if(Z!==void 0){let K=Z.indexOf($);if(K!==-1)Z.splice(K,1)}}dispatchEvent(J){let $=this._listeners;if($===void 0)return;let Q=$[J.type];if(Q!==void 0){J.target=this;let Z=Q.slice(0);for(let K=0,W=Z.length;K<W;K++)Z[K].call(this,J);J.target=null}}}var Z9=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ZQ=Math.PI/180,$$=180/Math.PI;function z8(){let J=Math.random()*4294967295|0,$=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,Z=Math.random()*4294967295|0;return(Z9[J&255]+Z9[J>>8&255]+Z9[J>>16&255]+Z9[J>>24&255]+"-"+Z9[$&255]+Z9[$>>8&255]+"-"+Z9[$>>16&15|64]+Z9[$>>24&255]+"-"+Z9[Q&63|128]+Z9[Q>>8&255]+"-"+Z9[Q>>16&255]+Z9[Q>>24&255]+Z9[Z&255]+Z9[Z>>8&255]+Z9[Z>>16&255]+Z9[Z>>24&255]).toLowerCase()}function OJ(J,$,Q){return Math.max($,Math.min(Q,J))}function uU(J,$){return(J%$+$)%$}function KQ(J,$,Q){return(1-Q)*J+Q*$}function o9(J,$){switch($.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:case Uint8ClampedArray:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function _J(J,$){switch($.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}class o0{static{o0.prototype.isVector2=!0}constructor(J=0,$=0){this.x=J,this.y=$}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,$){return this.x=J,this.y=$,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,$){switch(J){case 0:this.x=$;break;case 1:this.y=$;break;default:throw Error("THREE.Vector2: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,$){return this.x=J.x+$.x,this.y=J.y+$.y,this}addScaledVector(J,$){return this.x+=J.x*$,this.y+=J.y*$,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,$){return this.x=J.x-$.x,this.y=J.y-$.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let $=this.x,Q=this.y,Z=J.elements;return this.x=Z[0]*$+Z[3]*Q+Z[6],this.y=Z[1]*$+Z[4]*Q+Z[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,$){return this.x=OJ(this.x,J.x,$.x),this.y=OJ(this.y,J.y,$.y),this}clampScalar(J,$){return this.x=OJ(this.x,J,$),this.y=OJ(this.y,J,$),this}clampLength(J,$){let Q=this.length();return this.divideScalar(Q||1).multiplyScalar(OJ(Q,J,$))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let $=Math.sqrt(this.lengthSq()*J.lengthSq());if($===0)return Math.PI/2;let Q=this.dot(J)/$;return Math.acos(OJ(Q,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let $=this.x-J.x,Q=this.y-J.y;return $*$+Q*Q}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,$){return this.x+=(J.x-this.x)*$,this.y+=(J.y-this.y)*$,this}lerpVectors(J,$,Q){return this.x=J.x+($.x-J.x)*Q,this.y=J.y+($.y-J.y)*Q,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,$=0){return this.x=J[$],this.y=J[$+1],this}toArray(J=[],$=0){return J[$]=this.x,J[$+1]=this.y,J}fromBufferAttribute(J,$){return this.x=J.getX($),this.y=J.getY($),this}rotateAround(J,$){let Q=Math.cos($),Z=Math.sin($),K=this.x-J.x,W=this.y-J.y;return this.x=K*Q-W*Z+J.x,this.y=K*Z+W*Q+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class l9{constructor(J=0,$=0,Q=0,Z=1){this.isQuaternion=!0,this._x=J,this._y=$,this._z=Q,this._w=Z}static slerpFlat(J,$,Q,Z,K,W,Y){let X=Q[Z+0],U=Q[Z+1],H=Q[Z+2],q=Q[Z+3],N=K[W+0],G=K[W+1],F=K[W+2],M=K[W+3];if(q!==M||X!==N||U!==G||H!==F){let B=X*N+U*G+H*F+q*M;if(B<0)N=-N,G=-G,F=-F,M=-M,B=-B;let O=1-Y;if(B<0.9995){let E=Math.acos(B),C=Math.sin(E);O=Math.sin(O*E)/C,Y=Math.sin(Y*E)/C,X=X*O+N*Y,U=U*O+G*Y,H=H*O+F*Y,q=q*O+M*Y}else{X=X*O+N*Y,U=U*O+G*Y,H=H*O+F*Y,q=q*O+M*Y;let E=1/Math.sqrt(X*X+U*U+H*H+q*q);X*=E,U*=E,H*=E,q*=E}}J[$]=X,J[$+1]=U,J[$+2]=H,J[$+3]=q}static multiplyQuaternionsFlat(J,$,Q,Z,K,W){let Y=Q[Z],X=Q[Z+1],U=Q[Z+2],H=Q[Z+3],q=K[W],N=K[W+1],G=K[W+2],F=K[W+3];return J[$]=Y*F+H*q+X*G-U*N,J[$+1]=X*F+H*N+U*q-Y*G,J[$+2]=U*F+H*G+Y*N-X*q,J[$+3]=H*F-Y*q-X*N-U*G,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,$,Q,Z){return this._x=J,this._y=$,this._z=Q,this._w=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,$=!0){let{_x:Q,_y:Z,_z:K,_order:W}=J,Y=Math.cos,X=Math.sin,U=Y(Q/2),H=Y(Z/2),q=Y(K/2),N=X(Q/2),G=X(Z/2),F=X(K/2);switch(W){case"XYZ":this._x=N*H*q+U*G*F,this._y=U*G*q-N*H*F,this._z=U*H*F+N*G*q,this._w=U*H*q-N*G*F;break;case"YXZ":this._x=N*H*q+U*G*F,this._y=U*G*q-N*H*F,this._z=U*H*F-N*G*q,this._w=U*H*q+N*G*F;break;case"ZXY":this._x=N*H*q-U*G*F,this._y=U*G*q+N*H*F,this._z=U*H*F+N*G*q,this._w=U*H*q-N*G*F;break;case"ZYX":this._x=N*H*q-U*G*F,this._y=U*G*q+N*H*F,this._z=U*H*F-N*G*q,this._w=U*H*q+N*G*F;break;case"YZX":this._x=N*H*q+U*G*F,this._y=U*G*q+N*H*F,this._z=U*H*F-N*G*q,this._w=U*H*q-N*G*F;break;case"XZY":this._x=N*H*q-U*G*F,this._y=U*G*q-N*H*F,this._z=U*H*F+N*G*q,this._w=U*H*q+N*G*F;break;default:QJ("Quaternion: .setFromEuler() encountered an unknown order: "+W)}if($===!0)this._onChangeCallback();return this}setFromAxisAngle(J,$){let Q=$/2,Z=Math.sin(Q);return this._x=J.x*Z,this._y=J.y*Z,this._z=J.z*Z,this._w=Math.cos(Q),this._onChangeCallback(),this}setFromRotationMatrix(J){let $=J.elements,Q=$[0],Z=$[4],K=$[8],W=$[1],Y=$[5],X=$[9],U=$[2],H=$[6],q=$[10],N=Q+Y+q;if(N>0){let G=0.5/Math.sqrt(N+1);this._w=0.25/G,this._x=(H-X)*G,this._y=(K-U)*G,this._z=(W-Z)*G}else if(Q>Y&&Q>q){let G=2*Math.sqrt(1+Q-Y-q);this._w=(H-X)/G,this._x=0.25*G,this._y=(Z+W)/G,this._z=(K+U)/G}else if(Y>q){let G=2*Math.sqrt(1+Y-Q-q);this._w=(K-U)/G,this._x=(Z+W)/G,this._y=0.25*G,this._z=(X+H)/G}else{let G=2*Math.sqrt(1+q-Q-Y);this._w=(W-Z)/G,this._x=(K+U)/G,this._y=(X+H)/G,this._z=0.25*G}return this._onChangeCallback(),this}setFromUnitVectors(J,$){let Q=J.dot($)+1;if(Q<0.00000001)if(Q=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=Q;else this._x=0,this._y=-J.z,this._z=J.y,this._w=Q;else this._x=J.y*$.z-J.z*$.y,this._y=J.z*$.x-J.x*$.z,this._z=J.x*$.y-J.y*$.x,this._w=Q;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(OJ(this.dot(J),-1,1)))}rotateTowards(J,$){let Q=this.angleTo(J);if(Q===0)return this;let Z=Math.min(1,$/Q);return this.slerp(J,Z),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,$){let{_x:Q,_y:Z,_z:K,_w:W}=J,Y=$._x,X=$._y,U=$._z,H=$._w;return this._x=Q*H+W*Y+Z*U-K*X,this._y=Z*H+W*X+K*Y-Q*U,this._z=K*H+W*U+Q*X-Z*Y,this._w=W*H-Q*Y-Z*X-K*U,this._onChangeCallback(),this}slerp(J,$){let{_x:Q,_y:Z,_z:K,_w:W}=J,Y=this.dot(J);if(Y<0)Q=-Q,Z=-Z,K=-K,W=-W,Y=-Y;let X=1-$;if(Y<0.9995){let U=Math.acos(Y),H=Math.sin(U);X=Math.sin(X*U)/H,$=Math.sin($*U)/H,this._x=this._x*X+Q*$,this._y=this._y*X+Z*$,this._z=this._z*X+K*$,this._w=this._w*X+W*$,this._onChangeCallback()}else this._x=this._x*X+Q*$,this._y=this._y*X+Z*$,this._z=this._z*X+K*$,this._w=this._w*X+W*$,this.normalize();return this}slerpQuaternions(J,$,Q){return this.copy(J).slerp($,Q)}random(){let J=2*Math.PI*Math.random(),$=2*Math.PI*Math.random(),Q=Math.random(),Z=Math.sqrt(1-Q),K=Math.sqrt(Q);return this.set(Z*Math.sin(J),Z*Math.cos(J),K*Math.sin($),K*Math.cos($))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,$=0){return this._x=J[$],this._y=J[$+1],this._z=J[$+2],this._w=J[$+3],this._onChangeCallback(),this}toArray(J=[],$=0){return J[$]=this._x,J[$+1]=this._y,J[$+2]=this._z,J[$+3]=this._w,J}fromBufferAttribute(J,$){return this._x=J.getX($),this._y=J.getY($),this._z=J.getZ($),this._w=J.getW($),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class x{static{x.prototype.isVector3=!0}constructor(J=0,$=0,Q=0){this.x=J,this.y=$,this.z=Q}set(J,$,Q){if(Q===void 0)Q=this.z;return this.x=J,this.y=$,this.z=Q,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,$){switch(J){case 0:this.x=$;break;case 1:this.y=$;break;case 2:this.z=$;break;default:throw Error("THREE.Vector3: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,$){return this.x=J.x+$.x,this.y=J.y+$.y,this.z=J.z+$.z,this}addScaledVector(J,$){return this.x+=J.x*$,this.y+=J.y*$,this.z+=J.z*$,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,$){return this.x=J.x-$.x,this.y=J.y-$.y,this.z=J.z-$.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,$){return this.x=J.x*$.x,this.y=J.y*$.y,this.z=J.z*$.z,this}applyEuler(J){return this.applyQuaternion($W.setFromEuler(J))}applyAxisAngle(J,$){return this.applyQuaternion($W.setFromAxisAngle(J,$))}applyMatrix3(J){let $=this.x,Q=this.y,Z=this.z,K=J.elements;return this.x=K[0]*$+K[3]*Q+K[6]*Z,this.y=K[1]*$+K[4]*Q+K[7]*Z,this.z=K[2]*$+K[5]*Q+K[8]*Z,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let $=this.x,Q=this.y,Z=this.z,K=J.elements,W=1/(K[3]*$+K[7]*Q+K[11]*Z+K[15]);return this.x=(K[0]*$+K[4]*Q+K[8]*Z+K[12])*W,this.y=(K[1]*$+K[5]*Q+K[9]*Z+K[13])*W,this.z=(K[2]*$+K[6]*Q+K[10]*Z+K[14])*W,this}applyQuaternion(J){let $=this.x,Q=this.y,Z=this.z,K=J.x,W=J.y,Y=J.z,X=J.w,U=2*(W*Z-Y*Q),H=2*(Y*$-K*Z),q=2*(K*Q-W*$);return this.x=$+X*U+W*q-Y*H,this.y=Q+X*H+Y*U-K*q,this.z=Z+X*q+K*H-W*U,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let $=this.x,Q=this.y,Z=this.z,K=J.elements;return this.x=K[0]*$+K[4]*Q+K[8]*Z,this.y=K[1]*$+K[5]*Q+K[9]*Z,this.z=K[2]*$+K[6]*Q+K[10]*Z,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,$){return this.x=OJ(this.x,J.x,$.x),this.y=OJ(this.y,J.y,$.y),this.z=OJ(this.z,J.z,$.z),this}clampScalar(J,$){return this.x=OJ(this.x,J,$),this.y=OJ(this.y,J,$),this.z=OJ(this.z,J,$),this}clampLength(J,$){let Q=this.length();return this.divideScalar(Q||1).multiplyScalar(OJ(Q,J,$))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,$){return this.x+=(J.x-this.x)*$,this.y+=(J.y-this.y)*$,this.z+=(J.z-this.z)*$,this}lerpVectors(J,$,Q){return this.x=J.x+($.x-J.x)*Q,this.y=J.y+($.y-J.y)*Q,this.z=J.z+($.z-J.z)*Q,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,$){let{x:Q,y:Z,z:K}=J,W=$.x,Y=$.y,X=$.z;return this.x=Z*X-K*Y,this.y=K*W-Q*X,this.z=Q*Y-Z*W,this}projectOnVector(J){let $=J.lengthSq();if($===0)return this.set(0,0,0);let Q=J.dot(this)/$;return this.copy(J).multiplyScalar(Q)}projectOnPlane(J){return WQ.copy(this).projectOnVector(J),this.sub(WQ)}reflect(J){return this.sub(WQ.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let $=Math.sqrt(this.lengthSq()*J.lengthSq());if($===0)return Math.PI/2;let Q=this.dot(J)/$;return Math.acos(OJ(Q,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let $=this.x-J.x,Q=this.y-J.y,Z=this.z-J.z;return $*$+Q*Q+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,$,Q){let Z=Math.sin($)*J;return this.x=Z*Math.sin(Q),this.y=Math.cos($)*J,this.z=Z*Math.cos(Q),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,$,Q){return this.x=J*Math.sin($),this.y=Q,this.z=J*Math.cos($),this}setFromMatrixPosition(J){let $=J.elements;return this.x=$[12],this.y=$[13],this.z=$[14],this}setFromMatrixScale(J){let $=this.setFromMatrixColumn(J,0).length(),Q=this.setFromMatrixColumn(J,1).length(),Z=this.setFromMatrixColumn(J,2).length();return this.x=$,this.y=Q,this.z=Z,this}setFromMatrixColumn(J,$){return this.fromArray(J.elements,$*4)}setFromMatrix3Column(J,$){return this.fromArray(J.elements,$*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,$=0){return this.x=J[$],this.y=J[$+1],this.z=J[$+2],this}toArray(J=[],$=0){return J[$]=this.x,J[$+1]=this.y,J[$+2]=this.z,J}fromBufferAttribute(J,$){return this.x=J.getX($),this.y=J.getY($),this.z=J.getZ($),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,$=Math.random()*2-1,Q=Math.sqrt(1-$*$);return this.x=Q*Math.cos(J),this.y=$,this.z=Q*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var WQ=new x,$W=new l9;class UJ{static{UJ.prototype.isMatrix3=!0}constructor(J,$,Q,Z,K,W,Y,X,U){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,$,Q,Z,K,W,Y,X,U)}set(J,$,Q,Z,K,W,Y,X,U){let H=this.elements;return H[0]=J,H[1]=Z,H[2]=Y,H[3]=$,H[4]=K,H[5]=X,H[6]=Q,H[7]=W,H[8]=U,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let $=this.elements,Q=J.elements;return $[0]=Q[0],$[1]=Q[1],$[2]=Q[2],$[3]=Q[3],$[4]=Q[4],$[5]=Q[5],$[6]=Q[6],$[7]=Q[7],$[8]=Q[8],this}extractBasis(J,$,Q){return J.setFromMatrix3Column(this,0),$.setFromMatrix3Column(this,1),Q.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let $=J.elements;return this.set($[0],$[4],$[8],$[1],$[5],$[9],$[2],$[6],$[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,$){let Q=J.elements,Z=$.elements,K=this.elements,W=Q[0],Y=Q[3],X=Q[6],U=Q[1],H=Q[4],q=Q[7],N=Q[2],G=Q[5],F=Q[8],M=Z[0],B=Z[3],O=Z[6],E=Z[1],C=Z[4],P=Z[7],k=Z[2],z=Z[5],_=Z[8];return K[0]=W*M+Y*E+X*k,K[3]=W*B+Y*C+X*z,K[6]=W*O+Y*P+X*_,K[1]=U*M+H*E+q*k,K[4]=U*B+H*C+q*z,K[7]=U*O+H*P+q*_,K[2]=N*M+G*E+F*k,K[5]=N*B+G*C+F*z,K[8]=N*O+G*P+F*_,this}multiplyScalar(J){let $=this.elements;return $[0]*=J,$[3]*=J,$[6]*=J,$[1]*=J,$[4]*=J,$[7]*=J,$[2]*=J,$[5]*=J,$[8]*=J,this}determinant(){let J=this.elements,$=J[0],Q=J[1],Z=J[2],K=J[3],W=J[4],Y=J[5],X=J[6],U=J[7],H=J[8];return $*W*H-$*Y*U-Q*K*H+Q*Y*X+Z*K*U-Z*W*X}invert(){let J=this.elements,$=J[0],Q=J[1],Z=J[2],K=J[3],W=J[4],Y=J[5],X=J[6],U=J[7],H=J[8],q=H*W-Y*U,N=Y*X-H*K,G=U*K-W*X,F=$*q+Q*N+Z*G;if(F===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/F;return J[0]=q*M,J[1]=(Z*U-H*Q)*M,J[2]=(Y*Q-Z*W)*M,J[3]=N*M,J[4]=(H*$-Z*X)*M,J[5]=(Z*K-Y*$)*M,J[6]=G*M,J[7]=(Q*X-U*$)*M,J[8]=(W*$-Q*K)*M,this}transpose(){let J,$=this.elements;return J=$[1],$[1]=$[3],$[3]=J,J=$[2],$[2]=$[6],$[6]=J,J=$[5],$[5]=$[7],$[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let $=this.elements;return J[0]=$[0],J[1]=$[3],J[2]=$[6],J[3]=$[1],J[4]=$[4],J[5]=$[7],J[6]=$[2],J[7]=$[5],J[8]=$[8],this}setUvTransform(J,$,Q,Z,K,W,Y){let X=Math.cos(K),U=Math.sin(K);return this.set(Q*X,Q*U,-Q*(X*W+U*Y)+W+J,-Z*U,Z*X,-Z*(-U*W+X*Y)+Y+$,0,0,1),this}scale(J,$){return f8("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(YQ.makeScale(J,$)),this}rotate(J){return f8("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(YQ.makeRotation(-J)),this}translate(J,$){return f8("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(YQ.makeTranslation(J,$)),this}makeTranslation(J,$){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,$,0,0,1);return this}makeRotation(J){let $=Math.cos(J),Q=Math.sin(J);return this.set($,-Q,0,Q,$,0,0,0,1),this}makeScale(J,$){return this.set(J,0,0,0,$,0,0,0,1),this}equals(J){let $=this.elements,Q=J.elements;for(let Z=0;Z<9;Z++)if($[Z]!==Q[Z])return!1;return!0}fromArray(J,$=0){for(let Q=0;Q<9;Q++)this.elements[Q]=J[Q+$];return this}toArray(J=[],$=0){let Q=this.elements;return J[$]=Q[0],J[$+1]=Q[1],J[$+2]=Q[2],J[$+3]=Q[3],J[$+4]=Q[4],J[$+5]=Q[5],J[$+6]=Q[6],J[$+7]=Q[7],J[$+8]=Q[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var YQ=new UJ,QW=new UJ().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),ZW=new UJ().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function lU(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(K,W,Y){if(this.enabled===!1||W===Y||!W||!Y)return K;if(this.spaces[W].transfer==="srgb")K.r=X8(K.r),K.g=X8(K.g),K.b=X8(K.b);if(this.spaces[W].primaries!==this.spaces[Y].primaries)K.applyMatrix3(this.spaces[W].toXYZ),K.applyMatrix3(this.spaces[Y].fromXYZ);if(this.spaces[Y].transfer==="srgb")K.r=L6(K.r),K.g=L6(K.g),K.b=L6(K.b);return K},workingToColorSpace:function(K,W){return this.convert(K,this.workingColorSpace,W)},colorSpaceToWorking:function(K,W){return this.convert(K,W,this.workingColorSpace)},getPrimaries:function(K){return this.spaces[K].primaries},getTransfer:function(K){if(K==="")return"linear";return this.spaces[K].transfer},getToneMappingMode:function(K){return this.spaces[K].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(K,W=this.workingColorSpace){return K.fromArray(this.spaces[W].luminanceCoefficients)},define:function(K){Object.assign(this.spaces,K)},_getMatrix:function(K,W,Y){return K.copy(this.spaces[W].toXYZ).multiply(this.spaces[Y].fromXYZ)},_getDrawingBufferColorSpace:function(K){return this.spaces[K].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(K=this.workingColorSpace){return this.spaces[K].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(K,W){return f8("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(K,W)},toWorkingColorSpace:function(K,W){return f8("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(K,W)}},$=[0.64,0.33,0.3,0.6,0.15,0.06],Q=[0.2126,0.7152,0.0722],Z=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:$,whitePoint:Z,transfer:"linear",toXYZ:QW,fromXYZ:ZW,luminanceCoefficients:Q,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:$,whitePoint:Z,transfer:"srgb",toXYZ:QW,fromXYZ:ZW,luminanceCoefficients:Q,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var FJ=lU();function X8(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function L6(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var W6;class DZ{static getDataURL(J,$="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let Q;if(J instanceof HTMLCanvasElement)Q=J;else{if(W6===void 0)W6=r6("canvas");W6.width=J.width,W6.height=J.height;let Z=W6.getContext("2d");if(J instanceof ImageData)Z.putImageData(J,0,0);else Z.drawImage(J,0,0,J.width,J.height);Q=W6}return Q.toDataURL($)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let $=r6("canvas");$.width=J.width,$.height=J.height;let Q=$.getContext("2d");Q.drawImage(J,0,0,J.width,J.height);let Z=Q.getImageData(0,0,J.width,J.height),K=Z.data;for(let W=0;W<K.length;W++)K[W]=X8(K[W]/255)*255;return Q.putImageData(Z,0,0),$}else if(J.data){let $=J.data.slice(0);for(let Q=0;Q<$.length;Q++)if($ instanceof Uint8Array||$ instanceof Uint8ClampedArray)$[Q]=Math.floor(X8($[Q]/255)*255);else $[Q]=X8($[Q]);return{data:$,width:J.width,height:J.height}}else return QJ("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var dU=0;class G7{constructor(J=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:dU++}),this.uuid=z8(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let $=this.data;if(typeof HTMLVideoElement<"u"&&$ instanceof HTMLVideoElement)J.set($.videoWidth,$.videoHeight,0);else if(typeof VideoFrame<"u"&&$ instanceof VideoFrame)J.set($.displayWidth,$.displayHeight,0);else if($!==null)J.set($.width,$.height,$.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let $=J===void 0||typeof J==="string";if(!$&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let Q={uuid:this.uuid,url:""},Z=this.data;if(Z!==null){let K;if(Array.isArray(Z)){K=[];for(let W=0,Y=Z.length;W<Y;W++)if(Z[W].isDataTexture)K.push(XQ(Z[W].image));else K.push(XQ(Z[W]))}else K=XQ(Z);Q.url=K}if(!$)J.images[this.uuid]=Q;return Q}}function XQ(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return DZ.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return QJ("Texture: Unable to serialize Texture."),{}}var cU=0,UQ=new x;class W9 extends H8{constructor(J=W9.DEFAULT_IMAGE,$=W9.DEFAULT_MAPPING,Q=1001,Z=1001,K=1006,W=1008,Y=1023,X=1009,U=W9.DEFAULT_ANISOTROPY,H=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:cU++}),this.uuid=z8(),this.name="",this.source=new G7(J),this.mipmaps=[],this.mapping=$,this.channel=0,this.wrapS=Q,this.wrapT=Z,this.magFilter=K,this.minFilter=W,this.anisotropy=U,this.format=Y,this.internalFormat=null,this.type=X,this.offset=new o0(0,0),this.repeat=new o0(1,1),this.center=new o0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new UJ,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=H,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(UQ).x}get height(){return this.source.getSize(UQ).y}get depth(){return this.source.getSize(UQ).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,$){this.updateRanges.push({start:J,count:$})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let $ in J){let Q=J[$];if(Q===void 0){QJ(`Texture.setValues(): parameter '${$}' has value of undefined.`);continue}let Z=this[$];if(Z===void 0){QJ(`Texture.setValues(): property '${$}' does not exist.`);continue}if(Z&&Q&&(Z.isVector2&&Q.isVector2))Z.copy(Q);else if(Z&&Q&&(Z.isVector3&&Q.isVector3))Z.copy(Q);else if(Z&&Q&&(Z.isMatrix3&&Q.isMatrix3))Z.copy(Q);else this[$]=Q}}toJSON(J){let $=J===void 0||typeof J==="string";if(!$&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let Q={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)Q.userData=this.userData;if(!$)J.textures[this.uuid]=Q;return Q}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}W9.DEFAULT_IMAGE=null;W9.DEFAULT_MAPPING=300;W9.DEFAULT_ANISOTROPY=1;class jJ{static{jJ.prototype.isVector4=!0}constructor(J=0,$=0,Q=0,Z=1){this.x=J,this.y=$,this.z=Q,this.w=Z}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,$,Q,Z){return this.x=J,this.y=$,this.z=Q,this.w=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,$){switch(J){case 0:this.x=$;break;case 1:this.y=$;break;case 2:this.z=$;break;case 3:this.w=$;break;default:throw Error("THREE.Vector4: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,$){return this.x=J.x+$.x,this.y=J.y+$.y,this.z=J.z+$.z,this.w=J.w+$.w,this}addScaledVector(J,$){return this.x+=J.x*$,this.y+=J.y*$,this.z+=J.z*$,this.w+=J.w*$,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,$){return this.x=J.x-$.x,this.y=J.y-$.y,this.z=J.z-$.z,this.w=J.w-$.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let $=this.x,Q=this.y,Z=this.z,K=this.w,W=J.elements;return this.x=W[0]*$+W[4]*Q+W[8]*Z+W[12]*K,this.y=W[1]*$+W[5]*Q+W[9]*Z+W[13]*K,this.z=W[2]*$+W[6]*Q+W[10]*Z+W[14]*K,this.w=W[3]*$+W[7]*Q+W[11]*Z+W[15]*K,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let $=Math.sqrt(1-J.w*J.w);if($<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/$,this.y=J.y/$,this.z=J.z/$;return this}setAxisAngleFromRotationMatrix(J){let $,Q,Z,K,W=0.01,Y=0.1,X=J.elements,U=X[0],H=X[4],q=X[8],N=X[1],G=X[5],F=X[9],M=X[2],B=X[6],O=X[10];if(Math.abs(H-N)<0.01&&Math.abs(q-M)<0.01&&Math.abs(F-B)<0.01){if(Math.abs(H+N)<0.1&&Math.abs(q+M)<0.1&&Math.abs(F+B)<0.1&&Math.abs(U+G+O-3)<0.1)return this.set(1,0,0,0),this;$=Math.PI;let C=(U+1)/2,P=(G+1)/2,k=(O+1)/2,z=(H+N)/4,_=(q+M)/4,A=(F+B)/4;if(C>P&&C>k)if(C<0.01)Q=0,Z=0.707106781,K=0.707106781;else Q=Math.sqrt(C),Z=z/Q,K=_/Q;else if(P>k)if(P<0.01)Q=0.707106781,Z=0,K=0.707106781;else Z=Math.sqrt(P),Q=z/Z,K=A/Z;else if(k<0.01)Q=0.707106781,Z=0.707106781,K=0;else K=Math.sqrt(k),Q=_/K,Z=A/K;return this.set(Q,Z,K,$),this}let E=Math.sqrt((B-F)*(B-F)+(q-M)*(q-M)+(N-H)*(N-H));if(Math.abs(E)<0.001)E=1;return this.x=(B-F)/E,this.y=(q-M)/E,this.z=(N-H)/E,this.w=Math.acos((U+G+O-1)/2),this}setFromMatrixPosition(J){let $=J.elements;return this.x=$[12],this.y=$[13],this.z=$[14],this.w=$[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,$){return this.x=OJ(this.x,J.x,$.x),this.y=OJ(this.y,J.y,$.y),this.z=OJ(this.z,J.z,$.z),this.w=OJ(this.w,J.w,$.w),this}clampScalar(J,$){return this.x=OJ(this.x,J,$),this.y=OJ(this.y,J,$),this.z=OJ(this.z,J,$),this.w=OJ(this.w,J,$),this}clampLength(J,$){let Q=this.length();return this.divideScalar(Q||1).multiplyScalar(OJ(Q,J,$))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,$){return this.x+=(J.x-this.x)*$,this.y+=(J.y-this.y)*$,this.z+=(J.z-this.z)*$,this.w+=(J.w-this.w)*$,this}lerpVectors(J,$,Q){return this.x=J.x+($.x-J.x)*Q,this.y=J.y+($.y-J.y)*Q,this.z=J.z+($.z-J.z)*Q,this.w=J.w+($.w-J.w)*Q,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,$=0){return this.x=J[$],this.y=J[$+1],this.z=J[$+2],this.w=J[$+3],this}toArray(J=[],$=0){return J[$]=this.x,J[$+1]=this.y,J[$+2]=this.z,J[$+3]=this.w,J}fromBufferAttribute(J,$){return this.x=J.getX($),this.y=J.getY($),this.z=J.getZ($),this.w=J.getW($),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class VZ extends H8{constructor(J=1,$=1,Q={}){super();Q=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},Q),this.isRenderTarget=!0,this.width=J,this.height=$,this.depth=Q.depth,this.scissor=new jJ(0,0,J,$),this.scissorTest=!1,this.viewport=new jJ(0,0,J,$),this.textures=[];let Z={width:J,height:$,depth:Q.depth},K=new W9(Z),W=Q.count;for(let Y=0;Y<W;Y++)this.textures[Y]=K.clone(),this.textures[Y].isRenderTargetTexture=!0,this.textures[Y].renderTarget=this;this._setTextureOptions(Q),this.depthBuffer=Q.depthBuffer,this.stencilBuffer=Q.stencilBuffer,this.resolveColorBuffer=Q.resolveColorBuffer,this.resolveDepthBuffer=Q.resolveDepthBuffer,this.resolveStencilBuffer=Q.resolveStencilBuffer,this.storeMultisampledColorBuffer=Q.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=Q.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=Q.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=Q.depthTexture,this.samples=Q.samples,this.multiview=Q.multiview,this.useArrayDepthTexture=Q.useArrayDepthTexture}_setTextureOptions(J={}){let $={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)$.mapping=J.mapping;if(J.wrapS!==void 0)$.wrapS=J.wrapS;if(J.wrapT!==void 0)$.wrapT=J.wrapT;if(J.wrapR!==void 0)$.wrapR=J.wrapR;if(J.magFilter!==void 0)$.magFilter=J.magFilter;if(J.minFilter!==void 0)$.minFilter=J.minFilter;if(J.format!==void 0)$.format=J.format;if(J.type!==void 0)$.type=J.type;if(J.anisotropy!==void 0)$.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)$.colorSpace=J.colorSpace;if(J.flipY!==void 0)$.flipY=J.flipY;if(J.generateMipmaps!==void 0)$.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)$.internalFormat=J.internalFormat;for(let Q=0;Q<this.textures.length;Q++)this.textures[Q].setValues($)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(J!==null&&J.renderTarget===null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,$,Q=1){if(this.width!==J||this.height!==$||this.depth!==Q){this.width=J,this.height=$,this.depth=Q;for(let Z=0,K=this.textures.length;Z<K;Z++)if(this.textures[Z].image.width=J,this.textures[Z].image.height=$,this.textures[Z].image.depth=Q,this.textures[Z].isData3DTexture!==!0)this.textures[Z].isArrayTexture=this.textures[Z].image.depth>1;this.dispose()}this.viewport.set(0,0,J,$),this.scissor.set(0,0,J,$)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let $=0,Q=J.textures.length;$<Q;$++){this.textures[$]=J.textures[$].clone(),this.textures[$].isRenderTargetTexture=!0,this.textures[$].renderTarget=this;let Z=Object.assign({},J.textures[$].image);this.textures[$].source=new G7(Z)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveColorBuffer=J.resolveColorBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,this.storeMultisampledColorBuffer=J.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=J.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=J.storeMultisampledStencilBuffer,J.depthTexture!==null)if(J.depthTexture.renderTarget===J){let $=J.depthTexture.clone();$.renderTarget=null,this.depthTexture=$}else this.depthTexture=J.depthTexture;return this.samples=J.samples,this.multiview=J.multiview,this.useArrayDepthTexture=J.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pJ extends VZ{constructor(J=1,$=1,Q={}){super(J,$,Q);this.isWebGLRenderTarget=!0}}class M$ extends W9{constructor(J=null,$=1,Q=1,Z=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:$,height:Q,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class LZ extends W9{constructor(J=null,$=1,Q=1,Z=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:$,height:Q,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}}class bJ{static{bJ.prototype.isMatrix4=!0}constructor(J,$,Q,Z,K,W,Y,X,U,H,q,N,G,F,M,B){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,$,Q,Z,K,W,Y,X,U,H,q,N,G,F,M,B)}set(J,$,Q,Z,K,W,Y,X,U,H,q,N,G,F,M,B){let O=this.elements;return O[0]=J,O[4]=$,O[8]=Q,O[12]=Z,O[1]=K,O[5]=W,O[9]=Y,O[13]=X,O[2]=U,O[6]=H,O[10]=q,O[14]=N,O[3]=G,O[7]=F,O[11]=M,O[15]=B,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bJ().fromArray(this.elements)}copy(J){let $=this.elements,Q=J.elements;return $[0]=Q[0],$[1]=Q[1],$[2]=Q[2],$[3]=Q[3],$[4]=Q[4],$[5]=Q[5],$[6]=Q[6],$[7]=Q[7],$[8]=Q[8],$[9]=Q[9],$[10]=Q[10],$[11]=Q[11],$[12]=Q[12],$[13]=Q[13],$[14]=Q[14],$[15]=Q[15],this}copyPosition(J){let $=this.elements,Q=J.elements;return $[12]=Q[12],$[13]=Q[13],$[14]=Q[14],this}setFromMatrix3(J){let $=J.elements;return this.set($[0],$[3],$[6],0,$[1],$[4],$[7],0,$[2],$[5],$[8],0,0,0,0,1),this}extractBasis(J,$,Q){if(this.determinantAffine()===0)return J.set(1,0,0),$.set(0,1,0),Q.set(0,0,1),this;return J.setFromMatrixColumn(this,0),$.setFromMatrixColumn(this,1),Q.setFromMatrixColumn(this,2),this}makeBasis(J,$,Q){return this.set(J.x,$.x,Q.x,0,J.y,$.y,Q.y,0,J.z,$.z,Q.z,0,0,0,0,1),this}extractRotation(J){if(J.determinantAffine()===0)return this.identity();let $=this.elements,Q=J.elements,Z=1/Y6.setFromMatrixColumn(J,0).length(),K=1/Y6.setFromMatrixColumn(J,1).length(),W=1/Y6.setFromMatrixColumn(J,2).length();return $[0]=Q[0]*Z,$[1]=Q[1]*Z,$[2]=Q[2]*Z,$[3]=0,$[4]=Q[4]*K,$[5]=Q[5]*K,$[6]=Q[6]*K,$[7]=0,$[8]=Q[8]*W,$[9]=Q[9]*W,$[10]=Q[10]*W,$[11]=0,$[12]=0,$[13]=0,$[14]=0,$[15]=1,this}makeRotationFromEuler(J){let $=this.elements,Q=J.x,Z=J.y,K=J.z,W=Math.cos(Q),Y=Math.sin(Q),X=Math.cos(Z),U=Math.sin(Z),H=Math.cos(K),q=Math.sin(K);if(J.order==="XYZ"){let N=W*H,G=W*q,F=Y*H,M=Y*q;$[0]=X*H,$[4]=-X*q,$[8]=U,$[1]=G+F*U,$[5]=N-M*U,$[9]=-Y*X,$[2]=M-N*U,$[6]=F+G*U,$[10]=W*X}else if(J.order==="YXZ"){let N=X*H,G=X*q,F=U*H,M=U*q;$[0]=N+M*Y,$[4]=F*Y-G,$[8]=W*U,$[1]=W*q,$[5]=W*H,$[9]=-Y,$[2]=G*Y-F,$[6]=M+N*Y,$[10]=W*X}else if(J.order==="ZXY"){let N=X*H,G=X*q,F=U*H,M=U*q;$[0]=N-M*Y,$[4]=-W*q,$[8]=F+G*Y,$[1]=G+F*Y,$[5]=W*H,$[9]=M-N*Y,$[2]=-W*U,$[6]=Y,$[10]=W*X}else if(J.order==="ZYX"){let N=W*H,G=W*q,F=Y*H,M=Y*q;$[0]=X*H,$[4]=F*U-G,$[8]=N*U+M,$[1]=X*q,$[5]=M*U+N,$[9]=G*U-F,$[2]=-U,$[6]=Y*X,$[10]=W*X}else if(J.order==="YZX"){let N=W*X,G=W*U,F=Y*X,M=Y*U;$[0]=X*H,$[4]=M-N*q,$[8]=F*q+G,$[1]=q,$[5]=W*H,$[9]=-Y*H,$[2]=-U*H,$[6]=G*q+F,$[10]=N-M*q}else if(J.order==="XZY"){let N=W*X,G=W*U,F=Y*X,M=Y*U;$[0]=X*H,$[4]=-q,$[8]=U*H,$[1]=N*q+M,$[5]=W*H,$[9]=G*q-F,$[2]=F*q-G,$[6]=Y*H,$[10]=M*q+N}return $[3]=0,$[7]=0,$[11]=0,$[12]=0,$[13]=0,$[14]=0,$[15]=1,this}makeRotationFromQuaternion(J){return this.compose(nU,J,sU)}lookAt(J,$,Q){let Z=this.elements;if(I9.subVectors(J,$),I9.lengthSq()===0)I9.z=1;if(I9.normalize(),V8.crossVectors(Q,I9),V8.lengthSq()===0){if(Math.abs(Q.z)===1)I9.x+=0.0001;else I9.z+=0.0001;I9.normalize(),V8.crossVectors(Q,I9)}return V8.normalize(),j7.crossVectors(I9,V8),Z[0]=V8.x,Z[4]=j7.x,Z[8]=I9.x,Z[1]=V8.y,Z[5]=j7.y,Z[9]=I9.y,Z[2]=V8.z,Z[6]=j7.z,Z[10]=I9.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,$){let Q=J.elements,Z=$.elements,K=this.elements,W=Q[0],Y=Q[4],X=Q[8],U=Q[12],H=Q[1],q=Q[5],N=Q[9],G=Q[13],F=Q[2],M=Q[6],B=Q[10],O=Q[14],E=Q[3],C=Q[7],P=Q[11],k=Q[15],z=Z[0],_=Z[4],A=Z[8],D=Z[12],V=Z[1],T=Z[5],w=Z[9],S=Z[13],n=Z[2],y=Z[6],c=Z[10],i=Z[14],h=Z[3],t=Z[7],v=Z[11],g=Z[15];return K[0]=W*z+Y*V+X*n+U*h,K[4]=W*_+Y*T+X*y+U*t,K[8]=W*A+Y*w+X*c+U*v,K[12]=W*D+Y*S+X*i+U*g,K[1]=H*z+q*V+N*n+G*h,K[5]=H*_+q*T+N*y+G*t,K[9]=H*A+q*w+N*c+G*v,K[13]=H*D+q*S+N*i+G*g,K[2]=F*z+M*V+B*n+O*h,K[6]=F*_+M*T+B*y+O*t,K[10]=F*A+M*w+B*c+O*v,K[14]=F*D+M*S+B*i+O*g,K[3]=E*z+C*V+P*n+k*h,K[7]=E*_+C*T+P*y+k*t,K[11]=E*A+C*w+P*c+k*v,K[15]=E*D+C*S+P*i+k*g,this}multiplyScalar(J){let $=this.elements;return $[0]*=J,$[4]*=J,$[8]*=J,$[12]*=J,$[1]*=J,$[5]*=J,$[9]*=J,$[13]*=J,$[2]*=J,$[6]*=J,$[10]*=J,$[14]*=J,$[3]*=J,$[7]*=J,$[11]*=J,$[15]*=J,this}determinant(){let J=this.elements,$=J[0],Q=J[4],Z=J[8],K=J[12],W=J[1],Y=J[5],X=J[9],U=J[13],H=J[2],q=J[6],N=J[10],G=J[14],F=J[3],M=J[7],B=J[11],O=J[15],E=X*G-U*N,C=Y*G-U*q,P=Y*N-X*q,k=W*G-U*H,z=W*N-X*H,_=W*q-Y*H;return $*(M*E-B*C+O*P)-Q*(F*E-B*k+O*z)+Z*(F*C-M*k+O*_)-K*(F*P-M*z+B*_)}determinantAffine(){let J=this.elements,$=J[0],Q=J[4],Z=J[8],K=J[1],W=J[5],Y=J[9],X=J[2],U=J[6],H=J[10];return $*(W*H-Y*U)-Q*(K*H-Y*X)+Z*(K*U-W*X)}transpose(){let J=this.elements,$;return $=J[1],J[1]=J[4],J[4]=$,$=J[2],J[2]=J[8],J[8]=$,$=J[6],J[6]=J[9],J[9]=$,$=J[3],J[3]=J[12],J[12]=$,$=J[7],J[7]=J[13],J[13]=$,$=J[11],J[11]=J[14],J[14]=$,this}setPosition(J,$,Q){let Z=this.elements;if(J.isVector3)Z[12]=J.x,Z[13]=J.y,Z[14]=J.z;else Z[12]=J,Z[13]=$,Z[14]=Q;return this}invert(){let J=this.elements,$=J[0],Q=J[1],Z=J[2],K=J[3],W=J[4],Y=J[5],X=J[6],U=J[7],H=J[8],q=J[9],N=J[10],G=J[11],F=J[12],M=J[13],B=J[14],O=J[15],E=$*Y-Q*W,C=$*X-Z*W,P=$*U-K*W,k=Q*X-Z*Y,z=Q*U-K*Y,_=Z*U-K*X,A=H*M-q*F,D=H*B-N*F,V=H*O-G*F,T=q*B-N*M,w=q*O-G*M,S=N*O-G*B,n=E*S-C*w+P*T+k*V-z*D+_*A;if(n===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let y=1/n;return J[0]=(Y*S-X*w+U*T)*y,J[1]=(Z*w-Q*S-K*T)*y,J[2]=(M*_-B*z+O*k)*y,J[3]=(N*z-q*_-G*k)*y,J[4]=(X*V-W*S-U*D)*y,J[5]=($*S-Z*V+K*D)*y,J[6]=(B*P-F*_-O*C)*y,J[7]=(H*_-N*P+G*C)*y,J[8]=(W*w-Y*V+U*A)*y,J[9]=(Q*V-$*w-K*A)*y,J[10]=(F*z-M*P+O*E)*y,J[11]=(q*P-H*z-G*E)*y,J[12]=(Y*D-W*T-X*A)*y,J[13]=($*T-Q*D+Z*A)*y,J[14]=(M*C-F*k-B*E)*y,J[15]=(H*k-q*C+N*E)*y,this}scale(J){let $=this.elements,Q=J.x,Z=J.y,K=J.z;return $[0]*=Q,$[4]*=Z,$[8]*=K,$[1]*=Q,$[5]*=Z,$[9]*=K,$[2]*=Q,$[6]*=Z,$[10]*=K,$[3]*=Q,$[7]*=Z,$[11]*=K,this}getMaxScaleOnAxis(){let J=this.elements,$=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],Q=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],Z=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max($,Q,Z))}makeTranslation(J,$,Q){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,$,0,0,1,Q,0,0,0,1);return this}makeRotationX(J){let $=Math.cos(J),Q=Math.sin(J);return this.set(1,0,0,0,0,$,-Q,0,0,Q,$,0,0,0,0,1),this}makeRotationY(J){let $=Math.cos(J),Q=Math.sin(J);return this.set($,0,Q,0,0,1,0,0,-Q,0,$,0,0,0,0,1),this}makeRotationZ(J){let $=Math.cos(J),Q=Math.sin(J);return this.set($,-Q,0,0,Q,$,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,$){let Q=Math.cos($),Z=Math.sin($),K=1-Q,W=J.x,Y=J.y,X=J.z,U=K*W,H=K*Y;return this.set(U*W+Q,U*Y-Z*X,U*X+Z*Y,0,U*Y+Z*X,H*Y+Q,H*X-Z*W,0,U*X-Z*Y,H*X+Z*W,K*X*X+Q,0,0,0,0,1),this}makeScale(J,$,Q){return this.set(J,0,0,0,0,$,0,0,0,0,Q,0,0,0,0,1),this}makeShear(J,$,Q,Z,K,W){return this.set(1,Q,K,0,J,1,W,0,$,Z,1,0,0,0,0,1),this}compose(J,$,Q){let Z=this.elements,K=$._x,W=$._y,Y=$._z,X=$._w,U=K+K,H=W+W,q=Y+Y,N=K*U,G=K*H,F=K*q,M=W*H,B=W*q,O=Y*q,E=X*U,C=X*H,P=X*q,k=Q.x,z=Q.y,_=Q.z;return Z[0]=(1-(M+O))*k,Z[1]=(G+P)*k,Z[2]=(F-C)*k,Z[3]=0,Z[4]=(G-P)*z,Z[5]=(1-(N+O))*z,Z[6]=(B+E)*z,Z[7]=0,Z[8]=(F+C)*_,Z[9]=(B-E)*_,Z[10]=(1-(N+M))*_,Z[11]=0,Z[12]=J.x,Z[13]=J.y,Z[14]=J.z,Z[15]=1,this}decompose(J,$,Q){let Z=this.elements;J.x=Z[12],J.y=Z[13],J.z=Z[14];let K=this.determinantAffine();if(K===0)return Q.set(1,1,1),$.identity(),this;let W=Y6.set(Z[0],Z[1],Z[2]).length(),Y=Y6.set(Z[4],Z[5],Z[6]).length(),X=Y6.set(Z[8],Z[9],Z[10]).length();if(K<0)W=-W;g9.copy(this);let U=1/W,H=1/Y,q=1/X;return g9.elements[0]*=U,g9.elements[1]*=U,g9.elements[2]*=U,g9.elements[4]*=H,g9.elements[5]*=H,g9.elements[6]*=H,g9.elements[8]*=q,g9.elements[9]*=q,g9.elements[10]*=q,$.setFromRotationMatrix(g9),Q.x=W,Q.y=Y,Q.z=X,this}makePerspective(J,$,Q,Z,K,W,Y=2000,X=!1){let U=this.elements,H=2*K/($-J),q=2*K/(Q-Z),N=($+J)/($-J),G=(Q+Z)/(Q-Z),F,M;if(X)F=K/(W-K),M=W*K/(W-K);else if(Y===2000)F=-(W+K)/(W-K),M=-2*W*K/(W-K);else if(Y===2001)F=-W/(W-K),M=-W*K/(W-K);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+Y);return U[0]=H,U[4]=0,U[8]=N,U[12]=0,U[1]=0,U[5]=q,U[9]=G,U[13]=0,U[2]=0,U[6]=0,U[10]=F,U[14]=M,U[3]=0,U[7]=0,U[11]=-1,U[15]=0,this}makeOrthographic(J,$,Q,Z,K,W,Y=2000,X=!1){let U=this.elements,H=2/($-J),q=2/(Q-Z),N=-($+J)/($-J),G=-(Q+Z)/(Q-Z),F,M;if(X)F=1/(W-K),M=W/(W-K);else if(Y===2000)F=-2/(W-K),M=-(W+K)/(W-K);else if(Y===2001)F=-1/(W-K),M=-K/(W-K);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+Y);return U[0]=H,U[4]=0,U[8]=0,U[12]=N,U[1]=0,U[5]=q,U[9]=0,U[13]=G,U[2]=0,U[6]=0,U[10]=F,U[14]=M,U[3]=0,U[7]=0,U[11]=0,U[15]=1,this}equals(J){let $=this.elements,Q=J.elements;for(let Z=0;Z<16;Z++)if($[Z]!==Q[Z])return!1;return!0}fromArray(J,$=0){for(let Q=0;Q<16;Q++)this.elements[Q]=J[Q+$];return this}toArray(J=[],$=0){let Q=this.elements;return J[$]=Q[0],J[$+1]=Q[1],J[$+2]=Q[2],J[$+3]=Q[3],J[$+4]=Q[4],J[$+5]=Q[5],J[$+6]=Q[6],J[$+7]=Q[7],J[$+8]=Q[8],J[$+9]=Q[9],J[$+10]=Q[10],J[$+11]=Q[11],J[$+12]=Q[12],J[$+13]=Q[13],J[$+14]=Q[14],J[$+15]=Q[15],J}}var Y6=new x,g9=new bJ,nU=new x(0,0,0),sU=new x(1,1,1),V8=new x,j7=new x,I9=new x,KW=new bJ,WW=new l9;class R8{constructor(J=0,$=0,Q=0,Z=R8.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=$,this._z=Q,this._order=Z}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,$,Q,Z=this._order){return this._x=J,this._y=$,this._z=Q,this._order=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,$=this._order,Q=!0){let Z=J.elements,K=Z[0],W=Z[4],Y=Z[8],X=Z[1],U=Z[5],H=Z[9],q=Z[2],N=Z[6],G=Z[10];switch($){case"XYZ":if(this._y=Math.asin(OJ(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-H,G),this._z=Math.atan2(-W,K);else this._x=Math.atan2(N,U),this._z=0;break;case"YXZ":if(this._x=Math.asin(-OJ(H,-1,1)),Math.abs(H)<0.9999999)this._y=Math.atan2(Y,G),this._z=Math.atan2(X,U);else this._y=Math.atan2(-q,K),this._z=0;break;case"ZXY":if(this._x=Math.asin(OJ(N,-1,1)),Math.abs(N)<0.9999999)this._y=Math.atan2(-q,G),this._z=Math.atan2(-W,U);else this._y=0,this._z=Math.atan2(X,K);break;case"ZYX":if(this._y=Math.asin(-OJ(q,-1,1)),Math.abs(q)<0.9999999)this._x=Math.atan2(N,G),this._z=Math.atan2(X,K);else this._x=0,this._z=Math.atan2(-W,U);break;case"YZX":if(this._z=Math.asin(OJ(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2(-H,U),this._y=Math.atan2(-q,K);else this._x=0,this._y=Math.atan2(Y,G);break;case"XZY":if(this._z=Math.asin(-OJ(W,-1,1)),Math.abs(W)<0.9999999)this._x=Math.atan2(N,U),this._y=Math.atan2(Y,K);else this._x=Math.atan2(-H,G),this._y=0;break;default:QJ("Euler: .setFromRotationMatrix() encountered an unknown order: "+$)}if(this._order=$,Q===!0)this._onChangeCallback();return this}setFromQuaternion(J,$,Q){return KW.makeRotationFromQuaternion(J),this.setFromRotationMatrix(KW,$,Q)}setFromVector3(J,$=this._order){return this.set(J.x,J.y,J.z,$)}reorder(J){return WW.setFromEuler(this),this.setFromQuaternion(WW,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],$=0){return J[$]=this._x,J[$+1]=this._y,J[$+2]=this._z,J[$+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}R8.DEFAULT_ORDER="XYZ";class D${constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var iU=0,YW=new x,X6=new l9,Q8=new bJ,v7=new x,n6=new x,oU=new x,aU=new l9,XW=new x(1,0,0),UW=new x(0,1,0),HW=new x(0,0,1),GW={type:"added"},rU={type:"removed"},U6={type:"childadded",child:null},HQ={type:"childremoved",child:null};class Y9 extends H8{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:iU++}),this.uuid=z8(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Y9.DEFAULT_UP.clone();let J=new x,$=new R8,Q=new l9,Z=new x(1,1,1);function K(){Q.setFromEuler($,!1)}function W(){$.setFromQuaternion(Q,void 0,!1)}$._onChange(K),Q._onChange(W),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:$},quaternion:{configurable:!0,enumerable:!0,value:Q},scale:{configurable:!0,enumerable:!0,value:Z},modelViewMatrix:{value:new bJ},normalMatrix:{value:new UJ}}),this.matrix=new bJ,this.matrixWorld=new bJ,this.matrixAutoUpdate=Y9.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Y9.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new D$,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,$){this.quaternion.setFromAxisAngle(J,$)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,$){return X6.setFromAxisAngle(J,$),this.quaternion.multiply(X6),this}rotateOnWorldAxis(J,$){return X6.setFromAxisAngle(J,$),this.quaternion.premultiply(X6),this}rotateX(J){return this.rotateOnAxis(XW,J)}rotateY(J){return this.rotateOnAxis(UW,J)}rotateZ(J){return this.rotateOnAxis(HW,J)}translateOnAxis(J,$){return YW.copy(J).applyQuaternion(this.quaternion),this.position.add(YW.multiplyScalar($)),this}translateX(J){return this.translateOnAxis(XW,J)}translateY(J){return this.translateOnAxis(UW,J)}translateZ(J){return this.translateOnAxis(HW,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(Q8.copy(this.matrixWorld).invert())}lookAt(J,$,Q){if(J.isVector3)v7.copy(J);else v7.set(J,$,Q);let Z=this.parent;if(this.updateWorldMatrix(!0,!1),n6.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)Q8.lookAt(n6,v7,this.up);else Q8.lookAt(v7,n6,this.up);if(this.quaternion.setFromRotationMatrix(Q8),Z)Q8.extractRotation(Z.matrixWorld),X6.setFromRotationMatrix(Q8),this.quaternion.premultiply(X6.invert())}add(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.add(arguments[$]);return this}if(J===this)return KJ("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(GW),U6.child=J,this.dispatchEvent(U6),U6.child=null;else KJ("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.remove(arguments[Q]);return this}let $=this.children.indexOf(J);if($!==-1)J.parent=null,this.children.splice($,1),J.dispatchEvent(rU),HQ.child=J,this.dispatchEvent(HQ),HQ.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),Q8.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),Q8.multiply(J.parent.matrixWorld);return J.applyMatrix4(Q8),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(GW),U6.child=J,this.dispatchEvent(U6),U6.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,$){if(this[J]===$)return this;for(let Q=0,Z=this.children.length;Q<Z;Q++){let W=this.children[Q].getObjectByProperty(J,$);if(W!==void 0)return W}return}getObjectsByProperty(J,$,Q=[]){if(this[J]===$)Q.push(this);let Z=this.children;for(let K=0,W=Z.length;K<W;K++)Z[K].getObjectsByProperty(J,$,Q);return Q}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(n6,J,oU),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(n6,aU,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let $=this.matrixWorld.elements;return J.set($[8],$[9],$[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(J){J(this);let $=this.children;for(let Q=0,Z=$.length;Q<Z;Q++)$[Q].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let $=this.children;for(let Q=0,Z=$.length;Q<Z;Q++)$[Q].traverseVisible(J)}traverseAncestors(J){let $=this.parent;if($!==null)J($),$.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:$,y:Q,z:Z}=J,K=this.matrix.elements;K[12]+=$-K[0]*$-K[4]*Q-K[8]*Z,K[13]+=Q-K[1]*$-K[5]*Q-K[9]*Z,K[14]+=Z-K[2]*$-K[6]*Q-K[10]*Z}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let $=this.children;for(let Q=0,Z=$.length;Q<Z;Q++)$[Q].updateMatrixWorld(J)}updateWorldMatrix(J,$,Q=!1){let Z=this.parent;if(J===!0&&Z!==null)Z.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||Q){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,Q=!0}if($===!0){let K=this.children;for(let W=0,Y=K.length;W<Y;W++)K[W].updateWorldMatrix(!1,!0,Q)}}toJSON(J){let $=J===void 0||typeof J==="string",Q={};if($)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},Q.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let Z={};if(Z.uuid=this.uuid,Z.type=this.type,Z.name=this.name,Z.castShadow=this.castShadow,Z.receiveShadow=this.receiveShadow,Z.visible=this.visible,Z.frustumCulled=this.frustumCulled,Z.renderOrder=this.renderOrder,Z.static=this.static,Z.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)Z.userData=this.userData;if(Z.layers=this.layers.mask,Z.matrix=this.matrix.toArray(),Z.up=this.up.toArray(),this.pivot!==null)Z.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)Z.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)Z.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(Z.type="InstancedMesh",Z.count=this.count,Z.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)Z.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(Z.type="BatchedMesh",Z.perObjectFrustumCulled=this.perObjectFrustumCulled,Z.sortObjects=this.sortObjects,Z.drawRanges=this._drawRanges,Z.reservedRanges=this._reservedRanges,Z.geometryInfo=this._geometryInfo.map((Y)=>({...Y,boundingBox:Y.boundingBox?Y.boundingBox.toJSON():void 0,boundingSphere:Y.boundingSphere?Y.boundingSphere.toJSON():void 0})),Z.instanceInfo=this._instanceInfo.map((Y)=>({...Y})),Z.availableInstanceIds=this._availableInstanceIds.slice(),Z.availableGeometryIds=this._availableGeometryIds.slice(),Z.nextIndexStart=this._nextIndexStart,Z.nextVertexStart=this._nextVertexStart,Z.geometryCount=this._geometryCount,Z.maxInstanceCount=this._maxInstanceCount,Z.maxVertexCount=this._maxVertexCount,Z.maxIndexCount=this._maxIndexCount,Z.geometryInitialized=this._geometryInitialized,Z.matricesTexture=this._matricesTexture.toJSON(J),Z.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)Z.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)Z.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)Z.boundingBox=this.boundingBox.toJSON()}function K(Y,X){if(Y[X.uuid]===void 0)Y[X.uuid]=X.toJSON(J);return X.uuid}if(this.isScene){if(this.background){if(this.background.isColor)Z.background=this.background.toJSON();else if(this.background.isTexture)Z.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)Z.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){Z.geometry=K(J.geometries,this.geometry);let Y=this.geometry.parameters;if(Y!==void 0&&Y.shapes!==void 0){let X=Y.shapes;if(Array.isArray(X))for(let U=0,H=X.length;U<H;U++){let q=X[U];K(J.shapes,q)}else K(J.shapes,X)}}if(this.isSkinnedMesh){if(Z.bindMode=this.bindMode,Z.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)K(J.skeletons,this.skeleton),Z.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let Y=[];for(let X=0,U=this.material.length;X<U;X++)Y.push(K(J.materials,this.material[X]));Z.material=Y}else Z.material=K(J.materials,this.material);if(this.children.length>0){Z.children=[];for(let Y=0;Y<this.children.length;Y++)Z.children.push(this.children[Y].toJSON(J).object)}if(this.animations.length>0){Z.animations=[];for(let Y=0;Y<this.animations.length;Y++){let X=this.animations[Y];Z.animations.push(K(J.animations,X))}}if($){let Y=W(J.geometries),X=W(J.materials),U=W(J.textures),H=W(J.images),q=W(J.shapes),N=W(J.skeletons),G=W(J.animations),F=W(J.nodes);if(Y.length>0)Q.geometries=Y;if(X.length>0)Q.materials=X;if(U.length>0)Q.textures=U;if(H.length>0)Q.images=H;if(q.length>0)Q.shapes=q;if(N.length>0)Q.skeletons=N;if(G.length>0)Q.animations=G;if(F.length>0)Q.nodes=F}return Q.object=Z,Q;function W(Y){let X=[];for(let U in Y){let H=Y[U];delete H.metadata,X.push(H)}return X}}clone(J){return new this.constructor().copy(this,J)}copy(J,$=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),$===!0)for(let Q=0;Q<J.children.length;Q++){let Z=J.children[Q];this.add(Z.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Y9.DEFAULT_UP=new x(0,1,0);Y9.DEFAULT_MATRIX_AUTO_UPDATE=!0;Y9.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class V6 extends Y9{constructor(){super();this.isGroup=!0,this.type="Group"}}var tU={type:"move"};class q7{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new V6,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new V6,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new x,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new x;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new V6,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new x,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new x,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let $=this._hand;if($)for(let Q of J.hand.values())this._getHandJoint($,Q)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,$,Q){let Z=null,K=null,W=null,Y=this._targetRay,X=this._grip,U=this._hand;if(J&&$.session.visibilityState!=="visible-blurred"){if(U&&J.hand){W=!0;for(let M of J.hand.values()){let B=$.getJointPose(M,Q),O=this._getHandJoint(U,M);if(B!==null)O.matrix.fromArray(B.transform.matrix),O.matrix.decompose(O.position,O.rotation,O.scale),O.matrixWorldNeedsUpdate=!0,O.jointRadius=B.radius;O.visible=B!==null}let H=U.joints["index-finger-tip"],q=U.joints["thumb-tip"],N=H.position.distanceTo(q.position),G=0.02,F=0.005;if(U.inputState.pinching&&N>G+F)U.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!U.inputState.pinching&&N<=G-F)U.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(X!==null&&J.gripSpace){if(K=$.getPose(J.gripSpace,Q),K!==null){if(X.matrix.fromArray(K.transform.matrix),X.matrix.decompose(X.position,X.rotation,X.scale),X.matrixWorldNeedsUpdate=!0,K.linearVelocity)X.hasLinearVelocity=!0,X.linearVelocity.copy(K.linearVelocity);else X.hasLinearVelocity=!1;if(K.angularVelocity)X.hasAngularVelocity=!0,X.angularVelocity.copy(K.angularVelocity);else X.hasAngularVelocity=!1;if(X.eventsEnabled)X.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(Y!==null){if(Z=$.getPose(J.targetRaySpace,Q),Z===null&&K!==null)Z=K;if(Z!==null){if(Y.matrix.fromArray(Z.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,Z.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(Z.linearVelocity);else Y.hasLinearVelocity=!1;if(Z.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(Z.angularVelocity);else Y.hasAngularVelocity=!1;this.dispatchEvent(tU)}}}if(Y!==null)Y.visible=Z!==null;if(X!==null)X.visible=K!==null;if(U!==null)U.visible=W!==null;return this}_getHandJoint(J,$){if(J.joints[$.jointName]===void 0){let Q=new V6;Q.matrixAutoUpdate=!1,Q.visible=!1,J.joints[$.jointName]=Q,J.add(Q)}return J.joints[$.jointName]}}var _Y={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},L8={h:0,s:0,l:0},y7={h:0,s:0,l:0};function GQ(J,$,Q){if(Q<0)Q+=1;if(Q>1)Q-=1;if(Q<0.16666666666666666)return J+($-J)*6*Q;if(Q<0.5)return $;if(Q<0.6666666666666666)return J+($-J)*6*(0.6666666666666666-Q);return J}class WJ{constructor(J,$,Q){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,$,Q)}set(J,$,Q){if($===void 0&&Q===void 0){let Z=J;if(Z&&Z.isColor)this.copy(Z);else if(typeof Z==="number")this.setHex(Z);else if(typeof Z==="string")this.setStyle(Z)}else this.setRGB(J,$,Q);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,$="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,FJ.colorSpaceToWorking(this,$),this}setRGB(J,$,Q,Z=FJ.workingColorSpace){return this.r=J,this.g=$,this.b=Q,FJ.colorSpaceToWorking(this,Z),this}setHSL(J,$,Q,Z=FJ.workingColorSpace){if(J=uU(J,1),$=OJ($,0,1),Q=OJ(Q,0,1),$===0)this.r=this.g=this.b=Q;else{let K=Q<=0.5?Q*(1+$):Q+$-Q*$,W=2*Q-K;this.r=GQ(W,K,J+0.3333333333333333),this.g=GQ(W,K,J),this.b=GQ(W,K,J-0.3333333333333333)}return FJ.colorSpaceToWorking(this,Z),this}setStyle(J,$="srgb"){function Q(K){if(K===void 0)return;if(parseFloat(K)<1)QJ("Color: Alpha component of "+J+" will be ignored.")}let Z;if(Z=/^(\w+)\(([^\)]*)\)/.exec(J)){let K,W=Z[1],Y=Z[2];switch(W){case"rgb":case"rgba":if(K=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return Q(K[4]),this.setRGB(Math.min(255,parseInt(K[1],10))/255,Math.min(255,parseInt(K[2],10))/255,Math.min(255,parseInt(K[3],10))/255,$);if(K=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return Q(K[4]),this.setRGB(Math.min(100,parseInt(K[1],10))/100,Math.min(100,parseInt(K[2],10))/100,Math.min(100,parseInt(K[3],10))/100,$);break;case"hsl":case"hsla":if(K=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return Q(K[4]),this.setHSL(parseFloat(K[1])/360,parseFloat(K[2])/100,parseFloat(K[3])/100,$);break;default:QJ("Color: Unknown color model "+J)}}else if(Z=/^\#([A-Fa-f\d]+)$/.exec(J)){let K=Z[1],W=K.length;if(W===3)return this.setRGB(parseInt(K.charAt(0),16)/15,parseInt(K.charAt(1),16)/15,parseInt(K.charAt(2),16)/15,$);else if(W===6)return this.setHex(parseInt(K,16),$);else QJ("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,$);return this}setColorName(J,$="srgb"){let Q=_Y[J.toLowerCase()];if(Q!==void 0)this.setHex(Q,$);else QJ("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=X8(J.r),this.g=X8(J.g),this.b=X8(J.b),this}copyLinearToSRGB(J){return this.r=L6(J.r),this.g=L6(J.g),this.b=L6(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return FJ.workingToColorSpace(K9.copy(this),J),Math.round(OJ(K9.r*255,0,255))*65536+Math.round(OJ(K9.g*255,0,255))*256+Math.round(OJ(K9.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,$=FJ.workingColorSpace){FJ.workingToColorSpace(K9.copy(this),$);let{r:Q,g:Z,b:K}=K9,W=Math.max(Q,Z,K),Y=Math.min(Q,Z,K),X,U,H=(Y+W)/2;if(Y===W)X=0,U=0;else{let q=W-Y;switch(U=H<=0.5?q/(W+Y):q/(2-W-Y),W){case Q:X=(Z-K)/q+(Z<K?6:0);break;case Z:X=(K-Q)/q+2;break;case K:X=(Q-Z)/q+4;break}X/=6}return J.h=X,J.s=U,J.l=H,J}getRGB(J,$=FJ.workingColorSpace){return FJ.workingToColorSpace(K9.copy(this),$),J.r=K9.r,J.g=K9.g,J.b=K9.b,J}getStyle(J="srgb"){FJ.workingToColorSpace(K9.copy(this),J);let{r:$,g:Q,b:Z}=K9;if(J!=="srgb")return`color(${J} ${$.toFixed(3)} ${Q.toFixed(3)} ${Z.toFixed(3)})`;return`rgb(${Math.round($*255)},${Math.round(Q*255)},${Math.round(Z*255)})`}offsetHSL(J,$,Q){return this.getHSL(L8),this.setHSL(L8.h+J,L8.s+$,L8.l+Q)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,$){return this.r=J.r+$.r,this.g=J.g+$.g,this.b=J.b+$.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,$){return this.r+=(J.r-this.r)*$,this.g+=(J.g-this.g)*$,this.b+=(J.b-this.b)*$,this}lerpColors(J,$,Q){return this.r=J.r+($.r-J.r)*Q,this.g=J.g+($.g-J.g)*Q,this.b=J.b+($.b-J.b)*Q,this}lerpHSL(J,$){this.getHSL(L8),J.getHSL(y7);let Q=KQ(L8.h,y7.h,$),Z=KQ(L8.s,y7.s,$),K=KQ(L8.l,y7.l,$);return this.setHSL(Q,Z,K),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let $=this.r,Q=this.g,Z=this.b,K=J.elements;return this.r=K[0]*$+K[3]*Q+K[6]*Z,this.g=K[1]*$+K[4]*Q+K[7]*Z,this.b=K[2]*$+K[5]*Q+K[8]*Z,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,$=0){return this.r=J[$],this.g=J[$+1],this.b=J[$+2],this}toArray(J=[],$=0){return J[$]=this.r,J[$+1]=this.g,J[$+2]=this.b,J}fromBufferAttribute(J,$){return this.r=J.getX($),this.g=J.getY($),this.b=J.getZ($),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var K9=new WJ;WJ.NAMES=_Y;class V$ extends Y9{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new R8,this.environmentIntensity=1,this.environmentRotation=new R8,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,$){if(super.copy(J,$),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let $=super.toJSON(J);if(this.fog!==null)$.object.fog=this.fog.toJSON();return $.object.backgroundBlurriness=this.backgroundBlurriness,$.object.backgroundIntensity=this.backgroundIntensity,$.object.backgroundRotation=this.backgroundRotation.toArray(),$.object.environmentIntensity=this.environmentIntensity,$.object.environmentRotation=this.environmentRotation.toArray(),$}}var p9=new x,Z8=new x,qQ=new x,K8=new x,H6=new x,G6=new x,qW=new x,NQ=new x,FQ=new x,OQ=new x,EQ=new jJ,MQ=new jJ,DQ=new jJ;class j9{constructor(J=new x,$=new x,Q=new x){this.a=J,this.b=$,this.c=Q}static getNormal(J,$,Q,Z){Z.subVectors(Q,$),p9.subVectors(J,$),Z.cross(p9);let K=Z.lengthSq();if(K>0)return Z.multiplyScalar(1/Math.sqrt(K));return Z.set(0,0,0)}static getBarycoord(J,$,Q,Z,K){p9.subVectors(Z,$),Z8.subVectors(Q,$),qQ.subVectors(J,$);let W=p9.dot(p9),Y=p9.dot(Z8),X=p9.dot(qQ),U=Z8.dot(Z8),H=Z8.dot(qQ),q=W*U-Y*Y;if(q===0)return K.set(0,0,0),null;let N=1/q,G=(U*X-Y*H)*N,F=(W*H-Y*X)*N;return K.set(1-G-F,F,G)}static containsPoint(J,$,Q,Z){if(this.getBarycoord(J,$,Q,Z,K8)===null)return!1;return K8.x>=0&&K8.y>=0&&K8.x+K8.y<=1}static getInterpolation(J,$,Q,Z,K,W,Y,X){if(this.getBarycoord(J,$,Q,Z,K8)===null){if(X.x=0,X.y=0,"z"in X)X.z=0;if("w"in X)X.w=0;return null}return X.setScalar(0),X.addScaledVector(K,K8.x),X.addScaledVector(W,K8.y),X.addScaledVector(Y,K8.z),X}static getInterpolatedAttribute(J,$,Q,Z,K,W){return EQ.setScalar(0),MQ.setScalar(0),DQ.setScalar(0),EQ.fromBufferAttribute(J,$),MQ.fromBufferAttribute(J,Q),DQ.fromBufferAttribute(J,Z),W.setScalar(0),W.addScaledVector(EQ,K.x),W.addScaledVector(MQ,K.y),W.addScaledVector(DQ,K.z),W}static isFrontFacing(J,$,Q,Z){return p9.subVectors(Q,$),Z8.subVectors(J,$),p9.cross(Z8).dot(Z)<0}set(J,$,Q){return this.a.copy(J),this.b.copy($),this.c.copy(Q),this}setFromPointsAndIndices(J,$,Q,Z){return this.a.copy(J[$]),this.b.copy(J[Q]),this.c.copy(J[Z]),this}setFromAttributeAndIndices(J,$,Q,Z){return this.a.fromBufferAttribute(J,$),this.b.fromBufferAttribute(J,Q),this.c.fromBufferAttribute(J,Z),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return p9.subVectors(this.c,this.b),Z8.subVectors(this.a,this.b),p9.cross(Z8).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return j9.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,$){return j9.getBarycoord(J,this.a,this.b,this.c,$)}getInterpolation(J,$,Q,Z,K){return j9.getInterpolation(J,this.a,this.b,this.c,$,Q,Z,K)}containsPoint(J){return j9.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return j9.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,$){let Q=this.a,Z=this.b,K=this.c,W,Y;H6.subVectors(Z,Q),G6.subVectors(K,Q),NQ.subVectors(J,Q);let X=H6.dot(NQ),U=G6.dot(NQ);if(X<=0&&U<=0)return $.copy(Q);FQ.subVectors(J,Z);let H=H6.dot(FQ),q=G6.dot(FQ);if(H>=0&&q<=H)return $.copy(Z);let N=X*q-H*U;if(N<=0&&X>=0&&H<=0)return W=X/(X-H),$.copy(Q).addScaledVector(H6,W);OQ.subVectors(J,K);let G=H6.dot(OQ),F=G6.dot(OQ);if(F>=0&&G<=F)return $.copy(K);let M=G*U-X*F;if(M<=0&&U>=0&&F<=0)return Y=U/(U-F),$.copy(Q).addScaledVector(G6,Y);let B=H*F-G*q;if(B<=0&&q-H>=0&&G-F>=0)return qW.subVectors(K,Z),Y=(q-H)/(q-H+(G-F)),$.copy(Z).addScaledVector(qW,Y);let O=1/(B+M+N);return W=M*O,Y=N*O,$.copy(Q).addScaledVector(H6,W).addScaledVector(G6,Y)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class l8{constructor(J=new x(1/0,1/0,1/0),$=new x(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=$}set(J,$){return this.min.copy(J),this.max.copy($),this}setFromArray(J){this.makeEmpty();for(let $=0,Q=J.length;$<Q;$+=3)this.expandByPoint(m9.fromArray(J,$));return this}setFromBufferAttribute(J){this.makeEmpty();for(let $=0,Q=J.count;$<Q;$++)this.expandByPoint(m9.fromBufferAttribute(J,$));return this}setFromPoints(J){this.makeEmpty();for(let $=0,Q=J.length;$<Q;$++)this.expandByPoint(J[$]);return this}setFromCenterAndSize(J,$){let Q=m9.copy($).multiplyScalar(0.5);return this.min.copy(J).sub(Q),this.max.copy(J).add(Q),this}setFromObject(J,$=!1){return this.makeEmpty(),this.expandByObject(J,$)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,$=!1){J.updateWorldMatrix(!1,!1);let Q=J.geometry;if(Q!==void 0){let K=Q.getAttribute("position");if($===!0&&K!==void 0&&J.isInstancedMesh!==!0)for(let W=0,Y=K.count;W<Y;W++){if(J.isMesh===!0)J.getVertexPosition(W,m9);else m9.fromBufferAttribute(K,W);m9.applyMatrix4(J.matrixWorld),this.expandByPoint(m9)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();b7.copy(J.boundingBox)}else{if(Q.boundingBox===null)Q.computeBoundingBox();b7.copy(Q.boundingBox)}b7.applyMatrix4(J.matrixWorld),this.union(b7)}}let Z=J.children;for(let K=0,W=Z.length;K<W;K++)this.expandByObject(Z[K],$);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,$){return $.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,m9),m9.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let $,Q;if(J.normal.x>0)$=J.normal.x*this.min.x,Q=J.normal.x*this.max.x;else $=J.normal.x*this.max.x,Q=J.normal.x*this.min.x;if(J.normal.y>0)$+=J.normal.y*this.min.y,Q+=J.normal.y*this.max.y;else $+=J.normal.y*this.max.y,Q+=J.normal.y*this.min.y;if(J.normal.z>0)$+=J.normal.z*this.min.z,Q+=J.normal.z*this.max.z;else $+=J.normal.z*this.max.z,Q+=J.normal.z*this.min.z;return $<=-J.constant&&Q>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(s6),f7.subVectors(this.max,s6),q6.subVectors(J.a,s6),N6.subVectors(J.b,s6),F6.subVectors(J.c,s6),B8.subVectors(N6,q6),k8.subVectors(F6,N6),j8.subVectors(q6,F6);let $=[0,-B8.z,B8.y,0,-k8.z,k8.y,0,-j8.z,j8.y,B8.z,0,-B8.x,k8.z,0,-k8.x,j8.z,0,-j8.x,-B8.y,B8.x,0,-k8.y,k8.x,0,-j8.y,j8.x,0];if(!VQ($,q6,N6,F6,f7))return!1;if($=[1,0,0,0,1,0,0,0,1],!VQ($,q6,N6,F6,f7))return!1;return h7.crossVectors(B8,k8),$=[h7.x,h7.y,h7.z],VQ($,q6,N6,F6,f7)}clampPoint(J,$){return $.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,m9).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(m9).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return W8[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),W8[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),W8[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),W8[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),W8[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),W8[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),W8[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),W8[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(W8),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var W8=[new x,new x,new x,new x,new x,new x,new x,new x],m9=new x,b7=new l8,q6=new x,N6=new x,F6=new x,B8=new x,k8=new x,j8=new x,s6=new x,f7=new x,h7=new x,v8=new x;function VQ(J,$,Q,Z,K){for(let W=0,Y=J.length-3;W<=Y;W+=3){v8.fromArray(J,W);let X=K.x*Math.abs(v8.x)+K.y*Math.abs(v8.y)+K.z*Math.abs(v8.z),U=$.dot(v8),H=Q.dot(v8),q=Z.dot(v8);if(Math.max(-Math.max(U,H,q),Math.min(U,H,q))>X)return!1}return!0}var lJ=new x,x7=new o0,eU=0;class gJ extends H8{constructor(J,$,Q=!1){super();if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:eU++}),this.name="",this.array=J,this.itemSize=$,this.count=J!==void 0?J.length/$:0,this.normalized=Q,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,$){this.updateRanges.push({start:J,count:$})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,$,Q){J*=this.itemSize,Q*=$.itemSize;for(let Z=0,K=this.itemSize;Z<K;Z++)this.array[J+Z]=$.array[Q+Z];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let $=0,Q=this.count;$<Q;$++)x7.fromBufferAttribute(this,$),x7.applyMatrix3(J),this.setXY($,x7.x,x7.y);else if(this.itemSize===3)for(let $=0,Q=this.count;$<Q;$++)lJ.fromBufferAttribute(this,$),lJ.applyMatrix3(J),this.setXYZ($,lJ.x,lJ.y,lJ.z);return this}applyMatrix4(J){for(let $=0,Q=this.count;$<Q;$++)lJ.fromBufferAttribute(this,$),lJ.applyMatrix4(J),this.setXYZ($,lJ.x,lJ.y,lJ.z);return this}applyNormalMatrix(J){for(let $=0,Q=this.count;$<Q;$++)lJ.fromBufferAttribute(this,$),lJ.applyNormalMatrix(J),this.setXYZ($,lJ.x,lJ.y,lJ.z);return this}transformDirection(J){for(let $=0,Q=this.count;$<Q;$++)lJ.fromBufferAttribute(this,$),lJ.transformDirection(J),this.setXYZ($,lJ.x,lJ.y,lJ.z);return this}set(J,$=0){return this.array.set(J,$),this}getComponent(J,$){let Q=this.array[J*this.itemSize+$];if(this.normalized)Q=o9(Q,this.array);return Q}setComponent(J,$,Q){if(this.normalized)Q=_J(Q,this.array);return this.array[J*this.itemSize+$]=Q,this}getX(J){let $=this.array[J*this.itemSize];if(this.normalized)$=o9($,this.array);return $}setX(J,$){if(this.normalized)$=_J($,this.array);return this.array[J*this.itemSize]=$,this}getY(J){let $=this.array[J*this.itemSize+1];if(this.normalized)$=o9($,this.array);return $}setY(J,$){if(this.normalized)$=_J($,this.array);return this.array[J*this.itemSize+1]=$,this}getZ(J){let $=this.array[J*this.itemSize+2];if(this.normalized)$=o9($,this.array);return $}setZ(J,$){if(this.normalized)$=_J($,this.array);return this.array[J*this.itemSize+2]=$,this}getW(J){let $=this.array[J*this.itemSize+3];if(this.normalized)$=o9($,this.array);return $}setW(J,$){if(this.normalized)$=_J($,this.array);return this.array[J*this.itemSize+3]=$,this}setXY(J,$,Q){if(J*=this.itemSize,this.normalized)$=_J($,this.array),Q=_J(Q,this.array);return this.array[J+0]=$,this.array[J+1]=Q,this}setXYZ(J,$,Q,Z){if(J*=this.itemSize,this.normalized)$=_J($,this.array),Q=_J(Q,this.array),Z=_J(Z,this.array);return this.array[J+0]=$,this.array[J+1]=Q,this.array[J+2]=Z,this}setXYZW(J,$,Q,Z,K){if(J*=this.itemSize,this.normalized)$=_J($,this.array),Q=_J(Q,this.array),Z=_J(Z,this.array),K=_J(K,this.array);return this.array[J+0]=$,this.array[J+1]=Q,this.array[J+2]=Z,this.array[J+3]=K,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return J.name=this.name,J.usage=this.usage,J.gpuType=this.gpuType,J}dispose(){this.dispatchEvent({type:"dispose"})}}class L$ extends gJ{constructor(J,$,Q){super(new Uint16Array(J),$,Q)}}class B$ extends gJ{constructor(J,$,Q){super(new Uint32Array(J),$,Q)}}class kJ extends gJ{constructor(J,$,Q){super(new Float32Array(J),$,Q)}}var JH=new l8,i6=new x,LQ=new x;class _9{constructor(J=new x,$=-1){this.isSphere=!0,this.center=J,this.radius=$}set(J,$){return this.center.copy(J),this.radius=$,this}setFromPoints(J,$){let Q=this.center;if($!==void 0)Q.copy($);else JH.setFromPoints(J).getCenter(Q);let Z=0;for(let K=0,W=J.length;K<W;K++)Z=Math.max(Z,Q.distanceToSquared(J[K]));return this.radius=Math.sqrt(Z),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let $=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=$*$}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,$){let Q=this.center.distanceToSquared(J);if($.copy(J),Q>this.radius*this.radius)$.sub(this.center).normalize(),$.multiplyScalar(this.radius).add(this.center);return $}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;i6.subVectors(J,this.center);let $=i6.lengthSq();if($>this.radius*this.radius){let Q=Math.sqrt($),Z=(Q-this.radius)*0.5;this.center.addScaledVector(i6,Z/Q),this.radius+=Z}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else LQ.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(i6.copy(J.center).add(LQ)),this.expandByPoint(i6.copy(J.center).sub(LQ));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var $H=0,S9=new bJ,BQ=new Y9,O6=new x,z9=new l8,o6=new l8,rJ=new x;class hJ extends H8{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$H++}),this.uuid=z8(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((pU(J))?B$:L$)(J,1);else this.index=J;return this}setIndirect(J,$=0){return this.indirect=J,this.indirectOffset=$,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,$){return this.attributes[J]=$,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,$,Q=0){this.groups.push({start:J,count:$,materialIndex:Q})}clearGroups(){this.groups=[]}setDrawRange(J,$){this.drawRange.start=J,this.drawRange.count=$}applyMatrix4(J){let $=this.attributes.position;if($!==void 0)$.applyMatrix4(J),$.needsUpdate=!0;let Q=this.attributes.normal;if(Q!==void 0){let K=new UJ().getNormalMatrix(J);Q.applyNormalMatrix(K),Q.needsUpdate=!0}let Z=this.attributes.tangent;if(Z!==void 0)Z.transformDirection(J),Z.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(J){return S9.makeRotationFromQuaternion(J),this.applyMatrix4(S9),this}rotateX(J){return S9.makeRotationX(J),this.applyMatrix4(S9),this}rotateY(J){return S9.makeRotationY(J),this.applyMatrix4(S9),this}rotateZ(J){return S9.makeRotationZ(J),this.applyMatrix4(S9),this}translate(J,$,Q){return S9.makeTranslation(J,$,Q),this.applyMatrix4(S9),this}scale(J,$,Q){return S9.makeScale(J,$,Q),this.applyMatrix4(S9),this}lookAt(J){return BQ.lookAt(J),BQ.updateMatrix(),this.applyMatrix4(BQ.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(O6).negate(),this.translate(O6.x,O6.y,O6.z),this}setFromPoints(J){let $=this.getAttribute("position");if($===void 0){let Q=[];for(let Z=0,K=J.length;Z<K;Z++){let W=J[Z];Q.push(W.x,W.y,W.z||0)}this.setAttribute("position",new kJ(Q,3))}else{let Q=Math.min(J.length,$.count);for(let Z=0;Z<Q;Z++){let K=J[Z];$.setXYZ(Z,K.x,K.y,K.z||0)}if(J.length>$.count)QJ("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");$.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new l8;let J=this.attributes.position,$=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){KJ("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new x(-1/0,-1/0,-1/0),new x(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),$)for(let Q=0,Z=$.length;Q<Z;Q++){let K=$[Q];if(z9.setFromBufferAttribute(K),this.morphTargetsRelative)rJ.addVectors(this.boundingBox.min,z9.min),this.boundingBox.expandByPoint(rJ),rJ.addVectors(this.boundingBox.max,z9.max),this.boundingBox.expandByPoint(rJ);else this.boundingBox.expandByPoint(z9.min),this.boundingBox.expandByPoint(z9.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))KJ('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new _9;let J=this.attributes.position,$=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){KJ("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new x,1/0);return}if(J){let Q=this.boundingSphere.center;if(z9.setFromBufferAttribute(J),$)for(let K=0,W=$.length;K<W;K++){let Y=$[K];if(o6.setFromBufferAttribute(Y),this.morphTargetsRelative)rJ.addVectors(z9.min,o6.min),z9.expandByPoint(rJ),rJ.addVectors(z9.max,o6.max),z9.expandByPoint(rJ);else z9.expandByPoint(o6.min),z9.expandByPoint(o6.max)}z9.getCenter(Q);let Z=0;for(let K=0,W=J.count;K<W;K++)rJ.fromBufferAttribute(J,K),Z=Math.max(Z,Q.distanceToSquared(rJ));if($)for(let K=0,W=$.length;K<W;K++){let Y=$[K],X=this.morphTargetsRelative;for(let U=0,H=Y.count;U<H;U++){if(rJ.fromBufferAttribute(Y,U),X)O6.fromBufferAttribute(J,U),rJ.add(O6);Z=Math.max(Z,Q.distanceToSquared(rJ))}}if(this.boundingSphere.radius=Math.sqrt(Z),isNaN(this.boundingSphere.radius))KJ('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,$=this.attributes;if(J===null||$.position===void 0||$.normal===void 0||$.uv===void 0){KJ("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:Q,normal:Z,uv:K}=$,W=this.getAttribute("tangent");if(W===void 0||W.count!==Q.count)W=new gJ(new Float32Array(4*Q.count),4),this.setAttribute("tangent",W);let Y=[],X=[];for(let A=0;A<Q.count;A++)Y[A]=new x,X[A]=new x;let U=new x,H=new x,q=new x,N=new o0,G=new o0,F=new o0,M=new x,B=new x;function O(A,D,V){U.fromBufferAttribute(Q,A),H.fromBufferAttribute(Q,D),q.fromBufferAttribute(Q,V),N.fromBufferAttribute(K,A),G.fromBufferAttribute(K,D),F.fromBufferAttribute(K,V),H.sub(U),q.sub(U),G.sub(N),F.sub(N);let T=1/(G.x*F.y-F.x*G.y);if(!isFinite(T))return;M.copy(H).multiplyScalar(F.y).addScaledVector(q,-G.y).multiplyScalar(T),B.copy(q).multiplyScalar(G.x).addScaledVector(H,-F.x).multiplyScalar(T),Y[A].add(M),Y[D].add(M),Y[V].add(M),X[A].add(B),X[D].add(B),X[V].add(B)}let E=this.groups;if(E.length===0)E=[{start:0,count:J.count}];for(let A=0,D=E.length;A<D;++A){let V=E[A],T=V.start,w=V.count;for(let S=T,n=T+w;S<n;S+=3)O(J.getX(S+0),J.getX(S+1),J.getX(S+2))}let C=new x,P=new x,k=new x,z=new x;function _(A){k.fromBufferAttribute(Z,A),z.copy(k);let D=Y[A];C.copy(D),C.sub(k.multiplyScalar(k.dot(D))).normalize(),P.crossVectors(z,D);let T=P.dot(X[A])<0?-1:1;W.setXYZW(A,C.x,C.y,C.z,T)}for(let A=0,D=E.length;A<D;++A){let V=E[A],T=V.start,w=V.count;for(let S=T,n=T+w;S<n;S+=3)_(J.getX(S+0)),_(J.getX(S+1)),_(J.getX(S+2))}this._transformed=!0}computeVertexNormals(){let J=this.index,$=this.getAttribute("position");if($!==void 0){let Q=this.getAttribute("normal");if(Q===void 0||Q.count!==$.count)Q=new gJ(new Float32Array($.count*3),3),this.setAttribute("normal",Q);else for(let N=0,G=Q.count;N<G;N++)Q.setXYZ(N,0,0,0);let Z=new x,K=new x,W=new x,Y=new x,X=new x,U=new x,H=new x,q=new x;if(J)for(let N=0,G=J.count;N<G;N+=3){let F=J.getX(N+0),M=J.getX(N+1),B=J.getX(N+2);Z.fromBufferAttribute($,F),K.fromBufferAttribute($,M),W.fromBufferAttribute($,B),H.subVectors(W,K),q.subVectors(Z,K),H.cross(q),Y.fromBufferAttribute(Q,F),X.fromBufferAttribute(Q,M),U.fromBufferAttribute(Q,B),Y.add(H),X.add(H),U.add(H),Q.setXYZ(F,Y.x,Y.y,Y.z),Q.setXYZ(M,X.x,X.y,X.z),Q.setXYZ(B,U.x,U.y,U.z)}else for(let N=0,G=$.count;N<G;N+=3)Z.fromBufferAttribute($,N+0),K.fromBufferAttribute($,N+1),W.fromBufferAttribute($,N+2),H.subVectors(W,K),q.subVectors(Z,K),H.cross(q),Q.setXYZ(N+0,H.x,H.y,H.z),Q.setXYZ(N+1,H.x,H.y,H.z),Q.setXYZ(N+2,H.x,H.y,H.z);this.normalizeNormals(),Q.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let $=0,Q=J.count;$<Q;$++)rJ.fromBufferAttribute(J,$),rJ.normalize(),J.setXYZ($,rJ.x,rJ.y,rJ.z)}toNonIndexed(){function J(Y,X){let{array:U,itemSize:H,normalized:q}=Y,N=new U.constructor(X.length*H),G=0,F=0;for(let M=0,B=X.length;M<B;M++){if(Y.isInterleavedBufferAttribute)G=X[M]*Y.data.stride+Y.offset;else G=X[M]*H;for(let O=0;O<H;O++)N[F++]=U[G++]}return new gJ(N,H,q)}if(this.index===null)return QJ("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let $=new hJ,Q=this.index.array,Z=this.attributes;for(let Y in Z){let X=Z[Y],U=J(X,Q);$.setAttribute(Y,U)}let K=this.morphAttributes;for(let Y in K){let X=[],U=K[Y];for(let H=0,q=U.length;H<q;H++){let N=U[H],G=J(N,Q);X.push(G)}$.morphAttributes[Y]=X}$.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;for(let Y=0,X=W.length;Y<X;Y++){let U=W[Y];$.addGroup(U.start,U.count,U.materialIndex)}return $}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,J.name=this.name,Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let X=this.parameters;for(let U in X)if(X[U]!==void 0)J[U]=X[U];return J}J.data={attributes:{}};let $=this.index;if($!==null)J.data.index={type:$.array.constructor.name,array:Array.prototype.slice.call($.array)};let Q=this.attributes;for(let X in Q){let U=Q[X];J.data.attributes[X]=U.toJSON(J.data)}let Z={},K=!1;for(let X in this.morphAttributes){let U=this.morphAttributes[X],H=[];for(let q=0,N=U.length;q<N;q++){let G=U[q];H.push(G.toJSON(J.data))}if(H.length>0)Z[X]=H,K=!0}if(K)J.data.morphAttributes=Z,J.data.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;if(W.length>0)J.data.groups=JSON.parse(JSON.stringify(W));let Y=this.boundingSphere;if(Y!==null)J.data.boundingSphere=Y.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let $={};this.name=J.name;let Q=J.index;if(Q!==null)this.setIndex(Q.clone());let Z=J.attributes;for(let U in Z){let H=Z[U];this.setAttribute(U,H.clone($))}let K=J.morphAttributes;for(let U in K){let H=[],q=K[U];for(let N=0,G=q.length;N<G;N++)H.push(q[N].clone($));this.morphAttributes[U]=H}this.morphTargetsRelative=J.morphTargetsRelative;let W=J.groups;for(let U=0,H=W.length;U<H;U++){let q=W[U];this.addGroup(q.start,q.count,q.materialIndex)}let Y=J.boundingBox;if(Y!==null)this.boundingBox=Y.clone();let X=J.boundingSphere;if(X!==null)this.boundingSphere=X.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this._transformed=J._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class BZ{constructor(J,$){this.isInterleavedBuffer=!0,this.array=J,this.stride=$,this.count=J!==void 0?J.length/$:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=z8()}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,$){this.updateRanges.push({start:J,count:$})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.array=new J.array.constructor(J.array),this.count=J.count,this.stride=J.stride,this.usage=J.usage,this}copyAt(J,$,Q){J*=this.stride,Q*=$.stride;for(let Z=0,K=this.stride;Z<K;Z++)this.array[J+Z]=$.array[Q+Z];return this}set(J,$=0){return this.array.set(J,$),this}clone(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=z8();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let $=new this.array.constructor(J.arrayBuffers[this.array.buffer._uuid]),Q=new this.constructor($,this.stride);return Q.setUsage(this.usage),Q}onUpload(J){return this.onUploadCallback=J,this}toJSON(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=z8();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));let $={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return $.usage=this.usage,$}}var O9=new x;class M9{constructor(J,$,Q,Z=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=J,this.itemSize=$,this.offset=Q,this.normalized=Z}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(J){this.data.needsUpdate=J}applyMatrix4(J){for(let $=0,Q=this.data.count;$<Q;$++)O9.fromBufferAttribute(this,$),O9.applyMatrix4(J),this.setXYZ($,O9.x,O9.y,O9.z);return this}applyNormalMatrix(J){for(let $=0,Q=this.count;$<Q;$++)O9.fromBufferAttribute(this,$),O9.applyNormalMatrix(J),this.setXYZ($,O9.x,O9.y,O9.z);return this}transformDirection(J){for(let $=0,Q=this.count;$<Q;$++)O9.fromBufferAttribute(this,$),O9.transformDirection(J),this.setXYZ($,O9.x,O9.y,O9.z);return this}getComponent(J,$){let Q=this.array[J*this.data.stride+this.offset+$];if(this.normalized)Q=o9(Q,this.array);return Q}setComponent(J,$,Q){if(this.normalized)Q=_J(Q,this.array);return this.data.array[J*this.data.stride+this.offset+$]=Q,this}setX(J,$){if(this.normalized)$=_J($,this.array);return this.data.array[J*this.data.stride+this.offset]=$,this}setY(J,$){if(this.normalized)$=_J($,this.array);return this.data.array[J*this.data.stride+this.offset+1]=$,this}setZ(J,$){if(this.normalized)$=_J($,this.array);return this.data.array[J*this.data.stride+this.offset+2]=$,this}setW(J,$){if(this.normalized)$=_J($,this.array);return this.data.array[J*this.data.stride+this.offset+3]=$,this}getX(J){let $=this.data.array[J*this.data.stride+this.offset];if(this.normalized)$=o9($,this.array);return $}getY(J){let $=this.data.array[J*this.data.stride+this.offset+1];if(this.normalized)$=o9($,this.array);return $}getZ(J){let $=this.data.array[J*this.data.stride+this.offset+2];if(this.normalized)$=o9($,this.array);return $}getW(J){let $=this.data.array[J*this.data.stride+this.offset+3];if(this.normalized)$=o9($,this.array);return $}setXY(J,$,Q){if(J=J*this.data.stride+this.offset,this.normalized)$=_J($,this.array),Q=_J(Q,this.array);return this.data.array[J+0]=$,this.data.array[J+1]=Q,this}setXYZ(J,$,Q,Z){if(J=J*this.data.stride+this.offset,this.normalized)$=_J($,this.array),Q=_J(Q,this.array),Z=_J(Z,this.array);return this.data.array[J+0]=$,this.data.array[J+1]=Q,this.data.array[J+2]=Z,this}setXYZW(J,$,Q,Z,K){if(J=J*this.data.stride+this.offset,this.normalized)$=_J($,this.array),Q=_J(Q,this.array),Z=_J(Z,this.array),K=_J(K,this.array);return this.data.array[J+0]=$,this.data.array[J+1]=Q,this.data.array[J+2]=Z,this.data.array[J+3]=K,this}clone(J){if(J===void 0){t6("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let $=[];for(let Q=0;Q<this.count;Q++){let Z=Q*this.data.stride+this.offset;for(let K=0;K<this.itemSize;K++)$.push(this.data.array[Z+K])}return new gJ(new this.array.constructor($),this.itemSize,this.normalized)}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.clone(J);return new M9(J.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(J){if(J===void 0){t6("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let $=[];for(let Q=0;Q<this.count;Q++){let Z=Q*this.data.stride+this.offset;for(let K=0;K<this.itemSize;K++)$.push(this.data.array[Z+K])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:$,normalized:this.normalized}}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.toJSON(J);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}var kQ=new x,QH=new x,ZH=new UJ;class i9{constructor(J=new x(1,0,0),$=0){this.isPlane=!0,this.normal=J,this.constant=$}set(J,$){return this.normal.copy(J),this.constant=$,this}setComponents(J,$,Q,Z){return this.normal.set(J,$,Q),this.constant=Z,this}setFromNormalAndCoplanarPoint(J,$){return this.normal.copy(J),this.constant=-$.dot(this.normal),this}setFromCoplanarPoints(J,$,Q){let Z=kQ.subVectors(Q,$).cross(QH.subVectors(J,$)).normalize();return this.setFromNormalAndCoplanarPoint(Z,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,$){return $.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,$,Q=!0){let Z=J.delta(kQ),K=this.normal.dot(Z);if(K===0){if(this.distanceToPoint(J.start)===0)return $.copy(J.start);return null}let W=-(J.start.dot(this.normal)+this.constant)/K;if(Q===!0&&(W<0||W>1))return null;return $.copy(J.start).addScaledVector(Z,W)}intersectsLine(J){let $=this.distanceToPoint(J.start),Q=this.distanceToPoint(J.end);return $<0&&Q>0||Q<0&&$>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,$){let Q=$||ZH.getNormalMatrix(J),Z=this.coplanarPoint(kQ).applyMatrix4(J),K=this.normal.applyMatrix3(Q).normalize();return this.constant=-Z.dot(K),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(J){return this.normal.fromArray(J.normal),this.constant=J.constant,this}}var KH=0;class _8 extends H8{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:KH++}),this.uuid=z8(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new WJ(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let $ in J){let Q=J[$];if(Q===void 0){QJ(`Material: parameter '${$}' has value of undefined.`);continue}let Z=this[$];if(Z===void 0){QJ(`Material: '${$}' is not a property of THREE.${this.type}.`);continue}if(Z&&Z.isColor)Z.set(Q);else if(Z&&Z.isVector2&&(Q&&Q.isVector2)||Z&&Z.isEuler&&(Q&&Q.isEuler)||Z&&Z.isVector3&&(Q&&Q.isVector3))Z.copy(Q);else this[$]=Q}}toJSON(J){let $=J===void 0||typeof J==="string";if($)J={textures:{},images:{}};let Q={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(Q.uuid=this.uuid,Q.type=this.type,Q.blending=this.blending,Q.side=this.side,Q.shadowSide=this.shadowSide,Q.vertexColors=this.vertexColors,Q.opacity=this.opacity,Q.transparent=this.transparent,Q.blendSrc=this.blendSrc,Q.blendDst=this.blendDst,Q.blendEquation=this.blendEquation,Q.blendSrcAlpha=this.blendSrcAlpha,Q.blendDstAlpha=this.blendDstAlpha,Q.blendEquationAlpha=this.blendEquationAlpha,Q.blendColor=this.blendColor.getHex(),Q.blendAlpha=this.blendAlpha,Q.depthFunc=this.depthFunc,Q.depthTest=this.depthTest,Q.depthWrite=this.depthWrite,Q.colorWrite=this.colorWrite,Q.clipIntersection=this.clipIntersection,Q.clipShadows=this.clipShadows,Q.stencilWriteMask=this.stencilWriteMask,Q.stencilFunc=this.stencilFunc,Q.stencilRef=this.stencilRef,Q.stencilFuncMask=this.stencilFuncMask,Q.stencilFail=this.stencilFail,Q.stencilZFail=this.stencilZFail,Q.stencilZPass=this.stencilZPass,Q.stencilWrite=this.stencilWrite,Q.polygonOffset=this.polygonOffset,Q.polygonOffsetFactor=this.polygonOffsetFactor,Q.polygonOffsetUnits=this.polygonOffsetUnits,Q.dithering=this.dithering,Q.alphaTest=this.alphaTest,Q.alphaHash=this.alphaHash,Q.alphaToCoverage=this.alphaToCoverage,Q.premultipliedAlpha=this.premultipliedAlpha,Q.forceSinglePass=this.forceSinglePass,Q.allowOverride=this.allowOverride,Q.visible=this.visible,Q.toneMapped=this.toneMapped,Q.name=this.name,this.color&&this.color.isColor)Q.color=this.color.getHex();if(this.roughness!==void 0)Q.roughness=this.roughness;if(this.metalness!==void 0)Q.metalness=this.metalness;if(this.sheen!==void 0)Q.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)Q.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)Q.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)Q.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)Q.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)Q.specular=this.specular.getHex();if(this.specularIntensity!==void 0)Q.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)Q.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)Q.shininess=this.shininess;if(this.clearcoat!==void 0)Q.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)Q.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)Q.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)Q.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)Q.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,Q.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)Q.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)Q.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)Q.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)Q.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)Q.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)Q.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)Q.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)Q.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)Q.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)Q.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)Q.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)Q.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)Q.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)Q.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)Q.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)Q.lightMap=this.lightMap.toJSON(J).uuid,Q.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)Q.aoMap=this.aoMap.toJSON(J).uuid,Q.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)Q.bumpMap=this.bumpMap.toJSON(J).uuid,Q.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)Q.normalMap=this.normalMap.toJSON(J).uuid,Q.normalMapType=this.normalMapType,Q.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)Q.displacementMap=this.displacementMap.toJSON(J).uuid,Q.displacementScale=this.displacementScale,Q.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)Q.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)Q.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)Q.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)Q.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)Q.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)Q.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if(Q.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)Q.combine=this.combine}if(this.envMapRotation!==void 0)Q.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)Q.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)Q.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)Q.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)Q.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)Q.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)Q.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)Q.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)Q.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0)Q.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)Q.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)Q.size=this.size;if(this.sizeAttenuation!==void 0)Q.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)Q.clippingPlanes=this.clippingPlanes.map((K)=>K.toJSON());if(this.rotation!==void 0)Q.rotation=this.rotation;if(this.depthPacking!==void 0)Q.depthPacking=this.depthPacking;if(this.linewidth!==void 0)Q.linewidth=this.linewidth;if(this.linecap!==void 0)Q.linecap=this.linecap;if(this.linejoin!==void 0)Q.linejoin=this.linejoin;if(this.dashSize!==void 0)Q.dashSize=this.dashSize;if(this.gapSize!==void 0)Q.gapSize=this.gapSize;if(this.scale!==void 0)Q.scale=this.scale;if(this.wireframe!==void 0)Q.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)Q.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)Q.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)Q.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)Q.flatShading=this.flatShading;if(this.fog!==void 0)Q.fog=this.fog;if(Object.keys(this.userData).length>0)Q.userData=this.userData;function Z(K){let W=[];for(let Y in K){let X=K[Y];delete X.metadata,W.push(X)}return W}if($){let K=Z(J.textures),W=Z(J.images);if(K.length>0)Q.textures=K;if(W.length>0)Q.images=W}return Q}fromJSON(J,$){if(J.uuid!==void 0)this.uuid=J.uuid;if(J.name!==void 0)this.name=J.name;if(J.color!==void 0&&this.color!==void 0)this.color.setHex(J.color);if(J.roughness!==void 0)this.roughness=J.roughness;if(J.metalness!==void 0)this.metalness=J.metalness;if(J.sheen!==void 0)this.sheen=J.sheen;if(J.sheenColor!==void 0)this.sheenColor=new WJ().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)this.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(J.emissive);if(J.specular!==void 0&&this.specular!==void 0)this.specular.setHex(J.specular);if(J.specularIntensity!==void 0)this.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)this.shininess=J.shininess;if(J.clearcoat!==void 0)this.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)this.clearcoatRoughness=J.clearcoatRoughness;if(J.dispersion!==void 0)this.dispersion=J.dispersion;if(J.retroreflectivity!==void 0)this.retroreflectivity=J.retroreflectivity;if(J.iridescence!==void 0)this.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)this.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=J.iridescenceThicknessRange;if(J.transmission!==void 0)this.transmission=J.transmission;if(J.thickness!==void 0)this.thickness=J.thickness;if(J.attenuationDistance!==void 0)this.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)this.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)this.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)this.fog=J.fog;if(J.flatShading!==void 0)this.flatShading=J.flatShading;if(J.blending!==void 0)this.blending=J.blending;if(J.combine!==void 0)this.combine=J.combine;if(J.side!==void 0)this.side=J.side;if(J.shadowSide!==void 0)this.shadowSide=J.shadowSide;if(J.opacity!==void 0)this.opacity=J.opacity;if(J.transparent!==void 0)this.transparent=J.transparent;if(J.alphaTest!==void 0)this.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)this.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)this.depthFunc=J.depthFunc;if(J.depthTest!==void 0)this.depthTest=J.depthTest;if(J.depthWrite!==void 0)this.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)this.colorWrite=J.colorWrite;if(J.clippingPlanes!==void 0)this.clippingPlanes=J.clippingPlanes.map((Q)=>new i9().fromJSON(Q));if(J.clipIntersection!==void 0)this.clipIntersection=J.clipIntersection;if(J.clipShadows!==void 0)this.clipShadows=J.clipShadows;if(J.depthPacking!==void 0)this.depthPacking=J.depthPacking;if(J.blendSrc!==void 0)this.blendSrc=J.blendSrc;if(J.blendDst!==void 0)this.blendDst=J.blendDst;if(J.blendEquation!==void 0)this.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)this.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)this.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)this.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)this.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)this.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)this.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)this.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)this.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)this.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)this.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)this.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)this.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)this.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)this.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)this.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)this.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)this.rotation=J.rotation;if(J.linewidth!==void 0)this.linewidth=J.linewidth;if(J.linecap!==void 0)this.linecap=J.linecap;if(J.linejoin!==void 0)this.linejoin=J.linejoin;if(J.dashSize!==void 0)this.dashSize=J.dashSize;if(J.gapSize!==void 0)this.gapSize=J.gapSize;if(J.scale!==void 0)this.scale=J.scale;if(J.polygonOffset!==void 0)this.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)this.dithering=J.dithering;if(J.alphaToCoverage!==void 0)this.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)this.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)this.forceSinglePass=J.forceSinglePass;if(J.allowOverride!==void 0)this.allowOverride=J.allowOverride;if(J.visible!==void 0)this.visible=J.visible;if(J.toneMapped!==void 0)this.toneMapped=J.toneMapped;if(J.userData!==void 0)this.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")this.vertexColors=J.vertexColors>0;else this.vertexColors=J.vertexColors;if(J.size!==void 0)this.size=J.size;if(J.sizeAttenuation!==void 0)this.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)this.map=$[J.map]||null;if(J.matcap!==void 0)this.matcap=$[J.matcap]||null;if(J.alphaMap!==void 0)this.alphaMap=$[J.alphaMap]||null;if(J.bumpMap!==void 0)this.bumpMap=$[J.bumpMap]||null;if(J.bumpScale!==void 0)this.bumpScale=J.bumpScale;if(J.normalMap!==void 0)this.normalMap=$[J.normalMap]||null;if(J.normalMapType!==void 0)this.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let Q=J.normalScale;if(Array.isArray(Q)===!1)Q=[Q,Q];this.normalScale=new o0().fromArray(Q)}if(J.displacementMap!==void 0)this.displacementMap=$[J.displacementMap]||null;if(J.displacementScale!==void 0)this.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)this.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)this.roughnessMap=$[J.roughnessMap]||null;if(J.metalnessMap!==void 0)this.metalnessMap=$[J.metalnessMap]||null;if(J.emissiveMap!==void 0)this.emissiveMap=$[J.emissiveMap]||null;if(J.emissiveIntensity!==void 0)this.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)this.specularMap=$[J.specularMap]||null;if(J.specularIntensityMap!==void 0)this.specularIntensityMap=$[J.specularIntensityMap]||null;if(J.specularColorMap!==void 0)this.specularColorMap=$[J.specularColorMap]||null;if(J.envMap!==void 0)this.envMap=$[J.envMap]||null;if(J.envMapRotation!==void 0)this.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)this.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)this.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)this.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)this.lightMap=$[J.lightMap]||null;if(J.lightMapIntensity!==void 0)this.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)this.aoMap=$[J.aoMap]||null;if(J.aoMapIntensity!==void 0)this.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)this.gradientMap=$[J.gradientMap]||null;if(J.clearcoatMap!==void 0)this.clearcoatMap=$[J.clearcoatMap]||null;if(J.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=$[J.clearcoatRoughnessMap]||null;if(J.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=$[J.clearcoatNormalMap]||null;if(J.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new o0().fromArray(J.clearcoatNormalScale);if(J.iridescenceMap!==void 0)this.iridescenceMap=$[J.iridescenceMap]||null;if(J.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=$[J.iridescenceThicknessMap]||null;if(J.transmissionMap!==void 0)this.transmissionMap=$[J.transmissionMap]||null;if(J.thicknessMap!==void 0)this.thicknessMap=$[J.thicknessMap]||null;if(J.anisotropyMap!==void 0)this.anisotropyMap=$[J.anisotropyMap]||null;if(J.sheenColorMap!==void 0)this.sheenColorMap=$[J.sheenColorMap]||null;if(J.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=$[J.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let $=J.clippingPlanes,Q=null;if($!==null){let Z=$.length;Q=Array(Z);for(let K=0;K!==Z;++K)Q[K]=$[K].clone()}return this.clippingPlanes=Q,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}var Y8=new x,IQ=new x,g7=new x,p7=new x;class N7{constructor(J=new x,$=new x(0,0,-1)){this.origin=J,this.direction=$}set(J,$){return this.origin.copy(J),this.direction.copy($),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,$){return $.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,Y8)),this}closestPointToPoint(J,$){$.subVectors(J,this.origin);let Q=$.dot(this.direction);if(Q<0)return $.copy(this.origin);return $.copy(this.origin).addScaledVector(this.direction,Q)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let $=Y8.subVectors(J,this.origin).dot(this.direction);if($<0)return this.origin.distanceToSquared(J);return Y8.copy(this.origin).addScaledVector(this.direction,$),Y8.distanceToSquared(J)}distanceSqToSegment(J,$,Q,Z){IQ.copy(J).add($).multiplyScalar(0.5),g7.copy($).sub(J).normalize(),p7.copy(this.origin).sub(IQ);let K=J.distanceTo($)*0.5,W=-this.direction.dot(g7),Y=p7.dot(this.direction),X=-p7.dot(g7),U=p7.lengthSq(),H=Math.abs(1-W*W),q,N,G,F;if(H>0)if(q=W*X-Y,N=W*Y-X,F=K*H,q>=0)if(N>=-F)if(N<=F){let M=1/H;q*=M,N*=M,G=q*(q+W*N+2*Y)+N*(W*q+N+2*X)+U}else N=K,q=Math.max(0,-(W*N+Y)),G=-q*q+N*(N+2*X)+U;else N=-K,q=Math.max(0,-(W*N+Y)),G=-q*q+N*(N+2*X)+U;else if(N<=-F)q=Math.max(0,-(-W*K+Y)),N=q>0?-K:Math.min(Math.max(-K,-X),K),G=-q*q+N*(N+2*X)+U;else if(N<=F)q=0,N=Math.min(Math.max(-K,-X),K),G=N*(N+2*X)+U;else q=Math.max(0,-(W*K+Y)),N=q>0?K:Math.min(Math.max(-K,-X),K),G=-q*q+N*(N+2*X)+U;else N=W>0?-K:K,q=Math.max(0,-(W*N+Y)),G=-q*q+N*(N+2*X)+U;if(Q)Q.copy(this.origin).addScaledVector(this.direction,q);if(Z)Z.copy(IQ).addScaledVector(g7,N);return G}intersectSphere(J,$){if(J.radius<0)return null;Y8.subVectors(J.center,this.origin);let Q=Y8.dot(this.direction),Z=Y8.dot(Y8)-Q*Q,K=J.radius*J.radius;if(Z>K)return null;let W=Math.sqrt(K-Z),Y=Q-W,X=Q+W;if(X<0)return null;if(Y<0)return this.at(X,$);return this.at(Y,$)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let $=J.normal.dot(this.direction);if($===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let Q=-(this.origin.dot(J.normal)+J.constant)/$;return Q>=0?Q:null}intersectPlane(J,$){let Q=this.distanceToPlane(J);if(Q===null)return null;return this.at(Q,$)}intersectsPlane(J){let $=J.distanceToPoint(this.origin);if($===0)return!0;if(J.normal.dot(this.direction)*$<0)return!0;return!1}intersectBox(J,$){let Q,Z,K,W,Y,X,U=1/this.direction.x,H=1/this.direction.y,q=1/this.direction.z,N=this.origin;if(U>=0)Q=(J.min.x-N.x)*U,Z=(J.max.x-N.x)*U;else Q=(J.max.x-N.x)*U,Z=(J.min.x-N.x)*U;if(H>=0)K=(J.min.y-N.y)*H,W=(J.max.y-N.y)*H;else K=(J.max.y-N.y)*H,W=(J.min.y-N.y)*H;if(Q>W||K>Z)return null;if(K>Q||isNaN(Q))Q=K;if(W<Z||isNaN(Z))Z=W;if(q>=0)Y=(J.min.z-N.z)*q,X=(J.max.z-N.z)*q;else Y=(J.max.z-N.z)*q,X=(J.min.z-N.z)*q;if(Q>X||Y>Z)return null;if(Y>Q||Q!==Q)Q=Y;if(X<Z||Z!==Z)Z=X;if(Z<0)return null;return this.at(Q>=0?Q:Z,$)}intersectsBox(J){return this.intersectBox(J,Y8)!==null}intersectTriangle(J,$,Q,Z,K){let W=this.origin,Y=this.direction,X=Y.x,U=Y.y,H=Y.z,q=J.x-W.x,N=J.y-W.y,G=J.z-W.z,F=$.x-W.x,M=$.y-W.y,B=$.z-W.z,O=Q.x-W.x,E=Q.y-W.y,C=Q.z-W.z,P=Math.abs(X),k=Math.abs(U),z=Math.abs(H),_,A,D,V,T,w,S,n,y,c,i,h;if(P>=k&&P>=z)if(D=X,w=q,y=F,h=O,X>=0)_=U,A=H,V=N,T=G,S=M,n=B,c=E,i=C;else _=H,A=U,V=G,T=N,S=B,n=M,c=C,i=E;else if(k>=z)if(D=U,w=N,y=M,h=E,U>=0)_=H,A=X,V=G,T=q,S=B,n=F,c=C,i=O;else _=X,A=H,V=q,T=G,S=F,n=B,c=O,i=C;else if(D=H,w=G,y=B,h=C,H>=0)_=X,A=U,V=q,T=N,S=F,n=M,c=O,i=E;else _=U,A=X,V=N,T=q,S=M,n=F,c=E,i=O;if(D===0)return null;let t=_/D,v=A/D,g=1/D,p=V-t*w,O0=T-v*w,L0=S-t*y,g0=n-v*y,M0=c-t*h,d=i-v*h,Y0=M0*g0-d*L0,X0=p*d-O0*M0,Z0=L0*O0-g0*p;if(Z){if(Y0<0||X0<0||Z0<0)return null}else if((Y0<0||X0<0||Z0<0)&&(Y0>0||X0>0||Z0>0))return null;let k0=Y0+X0+Z0;if(k0===0)return null;let Q0=g*(Y0*w+X0*y+Z0*h);if(k0>0?Q0<0:Q0>0)return null;return this.at(Q0/k0,K)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class P8 extends _8{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new WJ(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new R8,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var NW=new bJ,y8=new N7,m7=new _9,FW=new x,u7=new x,l7=new x,d7=new x,zQ=new x,c7=new x,OW=new x,n7=new x;class GJ extends Y9{constructor(J=new hJ,$=new P8){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=$,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,$){if(super.copy(J,$),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let $=this.geometry.morphAttributes,Q=Object.keys($);if(Q.length>0){let Z=$[Q[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let K=0,W=Z.length;K<W;K++){let Y=Z[K].name||String(K);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=K}}}}getVertexPosition(J,$){let Q=this.geometry,Z=Q.attributes.position,K=Q.morphAttributes.position,W=Q.morphTargetsRelative;$.fromBufferAttribute(Z,J);let Y=this.morphTargetInfluences;if(K&&Y){c7.set(0,0,0);for(let X=0,U=K.length;X<U;X++){let H=Y[X],q=K[X];if(H===0)continue;if(zQ.fromBufferAttribute(q,J),W)c7.addScaledVector(zQ,H);else c7.addScaledVector(zQ.sub($),H)}$.add(c7)}return $}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,$){let Q=this.geometry,Z=this.material,K=this.matrixWorld;if(Z===void 0)return;if(Q.boundingSphere===null)Q.computeBoundingSphere();if(m7.copy(Q.boundingSphere),m7.applyMatrix4(K),y8.copy(J.ray).recast(J.near),m7.containsPoint(y8.origin)===!1){if(y8.intersectSphere(m7,FW)===null)return;if(y8.origin.distanceToSquared(FW)>(J.far-J.near)**2)return}if(NW.copy(K).invert(),y8.copy(J.ray).applyMatrix4(NW),Q.boundingBox!==null){if(y8.intersectsBox(Q.boundingBox)===!1)return}this._computeIntersections(J,$,y8)}_computeIntersections(J,$,Q){let Z,K=this.geometry,W=this.material,Y=K.index,X=K.attributes.position,U=K.attributes.uv,H=K.attributes.uv1,q=K.attributes.normal,N=K.groups,G=K.drawRange;if(Y!==null)if(Array.isArray(W))for(let F=0,M=N.length;F<M;F++){let B=N[F],O=W[B.materialIndex],E=Math.max(B.start,G.start),C=Math.min(Y.count,Math.min(B.start+B.count,G.start+G.count));for(let P=E,k=C;P<k;P+=3){let z=Y.getX(P),_=Y.getX(P+1),A=Y.getX(P+2);if(Z=s7(this,O,J,Q,U,H,q,z,_,A),Z)Z.faceIndex=Math.floor(P/3),Z.face.materialIndex=B.materialIndex,$.push(Z)}}else{let F=Math.max(0,G.start),M=Math.min(Y.count,G.start+G.count);for(let B=F,O=M;B<O;B+=3){let E=Y.getX(B),C=Y.getX(B+1),P=Y.getX(B+2);if(Z=s7(this,W,J,Q,U,H,q,E,C,P),Z)Z.faceIndex=Math.floor(B/3),$.push(Z)}}else if(X!==void 0)if(Array.isArray(W))for(let F=0,M=N.length;F<M;F++){let B=N[F],O=W[B.materialIndex],E=Math.max(B.start,G.start),C=Math.min(X.count,Math.min(B.start+B.count,G.start+G.count));for(let P=E,k=C;P<k;P+=3){let z=P,_=P+1,A=P+2;if(Z=s7(this,O,J,Q,U,H,q,z,_,A),Z)Z.faceIndex=Math.floor(P/3),Z.face.materialIndex=B.materialIndex,$.push(Z)}}else{let F=Math.max(0,G.start),M=Math.min(X.count,G.start+G.count);for(let B=F,O=M;B<O;B+=3){let E=B,C=B+1,P=B+2;if(Z=s7(this,W,J,Q,U,H,q,E,C,P),Z)Z.faceIndex=Math.floor(B/3),$.push(Z)}}}}function WH(J,$,Q,Z,K,W,Y,X){let U;if($.side===1)U=Z.intersectTriangle(Y,W,K,!0,X);else U=Z.intersectTriangle(K,W,Y,$.side===0,X);if(U===null)return null;n7.copy(X),n7.applyMatrix4(J.matrixWorld);let H=Q.ray.origin.distanceTo(n7);if(H<Q.near||H>Q.far)return null;return{distance:H,point:n7.clone(),object:J}}function s7(J,$,Q,Z,K,W,Y,X,U,H){J.getVertexPosition(X,u7),J.getVertexPosition(U,l7),J.getVertexPosition(H,d7);let q=WH(J,$,Q,Z,u7,l7,d7,OW);if(q){let N=new x;if(j9.getBarycoord(OW,u7,l7,d7,N),K)q.uv=j9.getInterpolatedAttribute(K,X,U,H,N,new o0);if(W)q.uv1=j9.getInterpolatedAttribute(W,X,U,H,N,new o0);if(Y){if(q.normal=j9.getInterpolatedAttribute(Y,X,U,H,N,new x),q.normal.dot(Z.direction)>0)q.normal.multiplyScalar(-1)}let G={a:X,b:U,c:H,normal:new x,materialIndex:0};j9.getNormal(u7,l7,d7,G.normal),q.face=G,q.barycoord=N}return q}class F7 extends W9{constructor(J=null,$=1,Q=1,Z,K,W,Y,X,U=1003,H=1003,q,N){super(null,W,Y,X,U,H,Z,K,q,N);this.isDataTexture=!0,this.image={data:J,width:$,height:Q},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dJ extends gJ{constructor(J,$,Q,Z=1){super(J,$,Q);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=Z}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}toJSON(){let J=super.toJSON();return J.meshPerAttribute=this.meshPerAttribute,J.isInstancedBufferAttribute=!0,J}}var b8=new _9,YH=new o0(0.5,0.5),i7=new x;class k${constructor(J=new i9,$=new i9,Q=new i9,Z=new i9,K=new i9,W=new i9){this.planes=[J,$,Q,Z,K,W]}set(J,$,Q,Z,K,W){let Y=this.planes;return Y[0].copy(J),Y[1].copy($),Y[2].copy(Q),Y[3].copy(Z),Y[4].copy(K),Y[5].copy(W),this}copy(J){let $=this.planes;for(let Q=0;Q<6;Q++)$[Q].copy(J.planes[Q]);return this}setFromProjectionMatrix(J,$=2000,Q=!1){let Z=this.planes,K=J.elements,W=K[0],Y=K[1],X=K[2],U=K[3],H=K[4],q=K[5],N=K[6],G=K[7],F=K[8],M=K[9],B=K[10],O=K[11],E=K[12],C=K[13],P=K[14],k=K[15];if(Z[0].setComponents(U-W,G-H,O-F,k-E).normalize(),Z[1].setComponents(U+W,G+H,O+F,k+E).normalize(),Z[2].setComponents(U+Y,G+q,O+M,k+C).normalize(),Z[3].setComponents(U-Y,G-q,O-M,k-C).normalize(),Q)Z[4].setComponents(X,N,B,P).normalize(),Z[5].setComponents(U-X,G-N,O-B,k-P).normalize();else if(Z[4].setComponents(U-X,G-N,O-B,k-P).normalize(),$===2000)Z[5].setComponents(U+X,G+N,O+B,k+P).normalize();else if($===2001)Z[5].setComponents(X,N,B,P).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+$);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();b8.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let $=J.geometry;if($.boundingSphere===null)$.computeBoundingSphere();b8.copy($.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(b8)}intersectsSprite(J){b8.center.set(0,0,0);let $=YH.distanceTo(J.center);return b8.radius=0.7071067811865476+$,b8.applyMatrix4(J.matrixWorld),this.intersectsSphere(b8)}intersectsSphere(J){let $=this.planes,Q=J.center,Z=-J.radius;for(let K=0;K<6;K++)if($[K].distanceToPoint(Q)<Z)return!1;return!0}intersectsBox(J){let $=this.planes;for(let Q=0;Q<6;Q++){let Z=$[Q];if(i7.x=Z.normal.x>0?J.max.x:J.min.x,i7.y=Z.normal.y>0?J.max.y:J.min.y,i7.z=Z.normal.z>0?J.max.z:J.min.z,Z.distanceToPoint(i7)<0)return!1}return!0}containsPoint(J){let $=this.planes;for(let Q=0;Q<6;Q++)if($[Q].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class O7 extends _8{constructor(J){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new WJ(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.linewidth=J.linewidth,this.linecap=J.linecap,this.linejoin=J.linejoin,this.fog=J.fog,this}}var Q$=new x,Z$=new x,EW=new bJ,a6=new N7,o7=new _9,RQ=new x,MW=new x;class kZ extends Y9{constructor(J=new hJ,$=new O7){super();this.isLine=!0,this.type="Line",this.geometry=J,this.material=$,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,$){return super.copy(J,$),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}computeLineDistances(){let J=this.geometry;if(J.index===null){let $=J.attributes.position,Q=[0];for(let Z=1,K=$.count;Z<K;Z++)Q$.fromBufferAttribute($,Z-1),Z$.fromBufferAttribute($,Z),Q[Z]=Q[Z-1],Q[Z]+=Q$.distanceTo(Z$);J.setAttribute("lineDistance",new kJ(Q,1))}else QJ("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,$){let Q=this.geometry,Z=this.matrixWorld,K=J.params.Line.threshold,W=Q.drawRange;if(Q.boundingSphere===null)Q.computeBoundingSphere();if(o7.copy(Q.boundingSphere),o7.applyMatrix4(Z),o7.radius+=K,J.ray.intersectsSphere(o7)===!1)return;EW.copy(Z).invert(),a6.copy(J.ray).applyMatrix4(EW);let Y=K/((this.scale.x+this.scale.y+this.scale.z)/3),X=Y*Y,U=this.isLineSegments?2:1,H=Q.index,N=Q.attributes.position;if(H!==null){let G=Math.max(0,W.start),F=Math.min(H.count,W.start+W.count);for(let M=G,B=F-1;M<B;M+=U){let O=H.getX(M),E=H.getX(M+1),C=a7(this,J,a6,X,O,E,M);if(C)$.push(C)}if(this.isLineLoop){let M=H.getX(F-1),B=H.getX(G),O=a7(this,J,a6,X,M,B,F-1);if(O)$.push(O)}}else{let G=Math.max(0,W.start),F=Math.min(N.count,W.start+W.count);for(let M=G,B=F-1;M<B;M+=U){let O=a7(this,J,a6,X,M,M+1,M);if(O)$.push(O)}if(this.isLineLoop){let M=a7(this,J,a6,X,F-1,G,F-1);if(M)$.push(M)}}}updateMorphTargets(){let $=this.geometry.morphAttributes,Q=Object.keys($);if(Q.length>0){let Z=$[Q[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let K=0,W=Z.length;K<W;K++){let Y=Z[K].name||String(K);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=K}}}}}function a7(J,$,Q,Z,K,W,Y){let X=J.geometry.attributes.position;if(Q$.fromBufferAttribute(X,K),Z$.fromBufferAttribute(X,W),Q.distanceSqToSegment(Q$,Z$,RQ,MW)>Z)return;RQ.applyMatrix4(J.matrixWorld);let H=$.ray.origin.distanceTo(RQ);if(H<$.near||H>$.far)return;return{distance:H,point:MW.clone().applyMatrix4(J.matrixWorld),index:Y,face:null,faceIndex:null,barycoord:null,object:J}}var DW=new x,VW=new x;class I$ extends kZ{constructor(J,$){super(J,$);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let J=this.geometry;if(J.index===null){let $=J.attributes.position,Q=[];for(let Z=0,K=$.count;Z<K;Z+=2)DW.fromBufferAttribute($,Z),VW.fromBufferAttribute($,Z+1),Q[Z]=Z===0?0:Q[Z-1],Q[Z+1]=Q[Z]+DW.distanceTo(VW);J.setAttribute("lineDistance",new kJ(Q,1))}else QJ("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class IZ extends _8{constructor(J){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new WJ(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.size=J.size,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var LW=new bJ,_Q=new N7,r7=new _9,t7=new x;class A6 extends Y9{constructor(J=new hJ,$=new IZ){super();this.isPoints=!0,this.type="Points",this.geometry=J,this.material=$,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,$){return super.copy(J,$),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,$){let Q=this.geometry,Z=this.matrixWorld,K=J.params.Points.threshold,W=Q.drawRange;if(Q.boundingSphere===null)Q.computeBoundingSphere();if(r7.copy(Q.boundingSphere),r7.applyMatrix4(Z),r7.radius+=K,J.ray.intersectsSphere(r7)===!1)return;LW.copy(Z).invert(),_Q.copy(J.ray).applyMatrix4(LW);let Y=K/((this.scale.x+this.scale.y+this.scale.z)/3),X=Y*Y,U=Q.index,q=Q.attributes.position;if(U!==null){let N=Math.max(0,W.start),G=Math.min(U.count,W.start+W.count);for(let F=N,M=G;F<M;F++){let B=U.getX(F);t7.fromBufferAttribute(q,B),BW(t7,B,X,Z,J,$,this)}}else{let N=Math.max(0,W.start),G=Math.min(q.count,W.start+W.count);for(let F=N,M=G;F<M;F++)t7.fromBufferAttribute(q,F),BW(t7,F,X,Z,J,$,this)}}updateMorphTargets(){let $=this.geometry.morphAttributes,Q=Object.keys($);if(Q.length>0){let Z=$[Q[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let K=0,W=Z.length;K<W;K++){let Y=Z[K].name||String(K);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=K}}}}}function BW(J,$,Q,Z,K,W,Y){let X=_Q.distanceSqToPoint(J);if(X<Q){let U=new x;_Q.closestPointToPoint(J,U),U.applyMatrix4(Z);let H=K.ray.origin.distanceTo(U);if(H<K.near||H>K.far)return;W.push({distance:H,distanceToRay:Math.sqrt(X),point:U,index:$,face:null,faceIndex:null,barycoord:null,object:Y})}}class z$ extends W9{constructor(J=[],$=301,Q,Z,K,W,Y,X,U,H){super(J,$,Q,Z,K,W,Y,X,U,H);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class d8 extends W9{constructor(J,$,Q=1014,Z,K,W,Y=1003,X=1003,U,H=1026,q=1){if(H!==1026&&H!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let N={width:J,height:$,depth:q};super(N,Z,K,W,Y,X,H,Q,U);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new G7(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let $=super.toJSON(J);return $.compareFunction=this.compareFunction,$}}class zZ extends d8{constructor(J,$=1014,Q=301,Z,K,W=1003,Y=1003,X,U=1026){let H={width:J,height:J,depth:1},q=[H,H,H,H,H,H];super(J,J,$,Q,Z,K,W,Y,X,U);this.image=q,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class R$ extends W9{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class w6 extends hJ{constructor(J=1,$=1,Q=1,Z=1,K=1,W=1){super();this.type="BoxGeometry",this.parameters={width:J,height:$,depth:Q,widthSegments:Z,heightSegments:K,depthSegments:W};let Y=this;Z=Math.floor(Z),K=Math.floor(K),W=Math.floor(W);let X=[],U=[],H=[],q=[],N=0,G=0;F("z","y","x",-1,-1,Q,$,J,W,K,0),F("z","y","x",1,-1,Q,$,-J,W,K,1),F("x","z","y",1,1,J,Q,$,Z,W,2),F("x","z","y",1,-1,J,Q,-$,Z,W,3),F("x","y","z",1,-1,J,$,Q,Z,K,4),F("x","y","z",-1,-1,J,$,-Q,Z,K,5),this.setIndex(X),this.setAttribute("position",new kJ(U,3)),this.setAttribute("normal",new kJ(H,3)),this.setAttribute("uv",new kJ(q,2));function F(M,B,O,E,C,P,k,z,_,A,D){let V=P/_,T=k/A,w=P/2,S=k/2,n=z/2,y=_+1,c=A+1,i=0,h=0,t=new x;for(let v=0;v<c;v++){let g=v*T-S;for(let p=0;p<y;p++){let O0=p*V-w;t[M]=O0*E,t[B]=g*C,t[O]=n,U.push(t.x,t.y,t.z),t[M]=0,t[B]=0,t[O]=z>0?1:-1,H.push(t.x,t.y,t.z),q.push(p/_),q.push(1-v/A),i+=1}}for(let v=0;v<A;v++)for(let g=0;g<_;g++){let p=N+g+y*v,O0=N+g+y*(v+1),L0=N+(g+1)+y*(v+1),g0=N+(g+1)+y*v;X.push(p,O0,g0),X.push(O0,L0,g0),h+=6}Y.addGroup(G,h,D),G+=h,N+=i}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new w6(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class H9 extends hJ{constructor(J=1,$=1,Q=1,Z=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:$,widthSegments:Q,heightSegments:Z};let K=J/2,W=$/2,Y=Math.floor(Q),X=Math.floor(Z),U=Y+1,H=X+1,q=J/Y,N=$/X,G=[],F=[],M=[],B=[];for(let O=0;O<H;O++){let E=O*N-W;for(let C=0;C<U;C++){let P=C*q-K;F.push(P,-E,0),M.push(0,0,1),B.push(C/Y),B.push(1-O/X)}}for(let O=0;O<X;O++)for(let E=0;E<Y;E++){let C=E+U*O,P=E+U*(O+1),k=E+1+U*(O+1),z=E+1+U*O;G.push(C,P,z),G.push(P,k,z)}this.setIndex(G),this.setAttribute("position",new kJ(F,3)),this.setAttribute("normal",new kJ(M,3)),this.setAttribute("uv",new kJ(B,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new H9(J.width,J.height,J.widthSegments,J.heightSegments)}}class G8 extends hJ{constructor(J=1,$=32,Q=16,Z=0,K=Math.PI*2,W=0,Y=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:J,widthSegments:$,heightSegments:Q,phiStart:Z,phiLength:K,thetaStart:W,thetaLength:Y},$=Math.max(3,Math.floor($)),Q=Math.max(2,Math.floor(Q));let X=Math.min(W+Y,Math.PI),U=0,H=[],q=new x,N=new x,G=[],F=[],M=[],B=[];for(let O=0;O<=Q;O++){let E=[],C=O/Q,P=W+C*Y,k=J*Math.cos(P),z=Math.sqrt(J*J-k*k),_=0;if(O===0&&W===0)_=0.5/$;else if(O===Q&&X===Math.PI)_=-0.5/$;for(let A=0;A<=$;A++){let D=A/$,V=Z+D*K;q.x=-z*Math.cos(V),q.y=k,q.z=z*Math.sin(V),F.push(q.x,q.y,q.z),N.copy(q).normalize(),M.push(N.x,N.y,N.z),B.push(D+_,1-C),E.push(U++)}H.push(E)}for(let O=0;O<Q;O++)for(let E=0;E<$;E++){let C=H[O][E+1],P=H[O][E],k=H[O+1][E],z=H[O+1][E+1];if(O!==0||W>0)G.push(C,P,z);if(O!==Q-1||X<Math.PI)G.push(P,k,z)}this.setIndex(G),this.setAttribute("position",new kJ(F,3)),this.setAttribute("normal",new kJ(M,3)),this.setAttribute("uv",new kJ(B,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new G8(J.radius,J.widthSegments,J.heightSegments,J.phiStart,J.phiLength,J.thetaStart,J.thetaLength)}}function c8(J){let $={};for(let Q in J){$[Q]={};for(let Z in J[Q]){let K=J[Q][Z];if(kW(K))if(K.isRenderTargetTexture)QJ("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),$[Q][Z]=null;else $[Q][Z]=K.clone();else if(Array.isArray(K))if(kW(K[0])){let W=[];for(let Y=0,X=K.length;Y<X;Y++)W[Y]=K[Y].clone();$[Q][Z]=W}else $[Q][Z]=K.slice();else $[Q][Z]=K}}return $}function G9(J){let $={};for(let Q=0;Q<J.length;Q++){let Z=c8(J[Q]);for(let K in Z)$[K]=Z[K]}return $}function kW(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function XH(J){let $=[];for(let Q=0;Q<J.length;Q++)$.push(J[Q].clone());return $}function RZ(J){let $=J.getRenderTarget();if($===null)return J.outputColorSpace;if($.isXRRenderTarget===!0)return $.texture.colorSpace;return FJ.workingColorSpace}var q8={clone:c8,merge:G9},UH=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,HH=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ZJ extends _8{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=UH,this.fragmentShader=HH,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=c8(J.uniforms),this.uniformsGroups=XH(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let $=super.toJSON(J);$.glslVersion=this.glslVersion,$.uniforms={};for(let Z in this.uniforms){let W=this.uniforms[Z].value;if(W&&W.isTexture)$.uniforms[Z]={type:"t",value:W.toJSON(J).uuid};else if(W&&W.isColor)$.uniforms[Z]={type:"c",value:W.getHex()};else if(W&&W.isVector2)$.uniforms[Z]={type:"v2",value:W.toArray()};else if(W&&W.isVector3)$.uniforms[Z]={type:"v3",value:W.toArray()};else if(W&&W.isVector4)$.uniforms[Z]={type:"v4",value:W.toArray()};else if(W&&W.isMatrix3)$.uniforms[Z]={type:"m3",value:W.toArray()};else if(W&&W.isMatrix4)$.uniforms[Z]={type:"m4",value:W.toArray()};else $.uniforms[Z]={value:W}}if(Object.keys(this.defines).length>0)$.defines=this.defines;$.vertexShader=this.vertexShader,$.fragmentShader=this.fragmentShader,$.lights=this.lights,$.clipping=this.clipping;let Q={};for(let Z in this.extensions)if(this.extensions[Z]===!0)Q[Z]=!0;if(Object.keys(Q).length>0)$.extensions=Q;return $}fromJSON(J,$){if(super.fromJSON(J,$),J.uniforms!==void 0)for(let Q in J.uniforms){let Z=J.uniforms[Q];switch(this.uniforms[Q]={},Z.type){case"t":this.uniforms[Q].value=$[Z.value]||null;break;case"c":this.uniforms[Q].value=new WJ().setHex(Z.value);break;case"v2":this.uniforms[Q].value=new o0().fromArray(Z.value);break;case"v3":this.uniforms[Q].value=new x().fromArray(Z.value);break;case"v4":this.uniforms[Q].value=new jJ().fromArray(Z.value);break;case"m3":this.uniforms[Q].value=new UJ().fromArray(Z.value);break;case"m4":this.uniforms[Q].value=new bJ().fromArray(Z.value);break;default:this.uniforms[Q].value=Z.value}}if(J.defines!==void 0)this.defines=J.defines;if(J.vertexShader!==void 0)this.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)this.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)this.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let Q in J.extensions)this.extensions[Q]=J.extensions[Q];if(J.lights!==void 0)this.lights=J.lights;if(J.clipping!==void 0)this.clipping=J.clipping;return this}}class E7 extends ZJ{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class CZ extends _8{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class _Z extends _8{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function E6(J,$){if(!J||J.constructor===$)return J;if(typeof $.BYTES_PER_ELEMENT==="number")return new $(J);return Array.prototype.slice.call(J)}function CQ(J){return J!==void 0&&J.inTangents!==void 0&&J.outTangents!==void 0}class n8{constructor(J,$,Q,Z){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=Z!==void 0?Z:new $.constructor(Q),this.sampleValues=$,this.valueSize=Q,this.settings=null,this.DefaultSettings_={}}evaluate(J){let $=this.parameterPositions,Q=this._cachedIndex,Z=$[Q],K=$[Q-1];Q:{J:{let W;$:{Z:if(!(J<Z)){for(let Y=Q+2;;){if(Z===void 0){if(J<K)break Z;return Q=$.length,this._cachedIndex=Q,this.copySampleValue_(Q-1)}if(Q===Y)break;if(K=Z,Z=$[++Q],J<Z)break J}W=$.length;break $}if(!(J>=K)){let Y=$[1];if(J<Y)Q=2,K=Y;for(let X=Q-2;;){if(K===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Q===X)break;if(Z=K,K=$[--Q-1],J>=K)break J}W=Q,Q=0;break $}break Q}while(Q<W){let Y=Q+W>>>1;if(J<$[Y])W=Y;else Q=Y+1}if(Z=$[Q],K=$[Q-1],K===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===void 0)return Q=$.length,this._cachedIndex=Q,this.copySampleValue_(Q-1)}this._cachedIndex=Q,this.intervalChanged_(Q,K,Z)}return this.interpolate_(Q,K,J,Z)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let $=this.resultBuffer,Q=this.sampleValues,Z=this.valueSize,K=J*Z;for(let W=0;W!==Z;++W)$[W]=Q[K+W];return $}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class PZ extends n8{constructor(J,$,Q,Z){super(J,$,Q,Z);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,$,Q){let Z=this.parameterPositions,K=J-2,W=J+1,Y=Z[K],X=Z[W];if(Y===void 0)switch(this.getSettings_().endingStart){case 2401:K=J,Y=2*$-Q;break;case 2402:K=Z.length-2,Y=$+Z[K]-Z[K+1];break;default:K=J,Y=Q}if(X===void 0)switch(this.getSettings_().endingEnd){case 2401:W=J,X=2*Q-$;break;case 2402:W=1,X=Q+Z[1]-Z[0];break;default:W=J-1,X=$}let U=(Q-$)*0.5,H=this.valueSize;this._weightPrev=U/($-Y),this._weightNext=U/(X-Q),this._offsetPrev=K*H,this._offsetNext=W*H}interpolate_(J,$,Q,Z){let K=this.resultBuffer,W=this.sampleValues,Y=this.valueSize,X=J*Y,U=X-Y,H=this._offsetPrev,q=this._offsetNext,N=this._weightPrev,G=this._weightNext,F=(Q-$)/(Z-$),M=F*F,B=M*F,O=-N*B+2*N*M-N*F,E=(1+N)*B+(-1.5-2*N)*M+(-0.5+N)*F+1,C=(-1-G)*B+(1.5+G)*M+0.5*F,P=G*B-G*M;for(let k=0;k!==Y;++k)K[k]=O*W[H+k]+E*W[U+k]+C*W[X+k]+P*W[q+k];return K}}class AZ extends n8{constructor(J,$,Q,Z){super(J,$,Q,Z)}interpolate_(J,$,Q,Z){let K=this.resultBuffer,W=this.sampleValues,Y=this.valueSize,X=J*Y,U=X-Y,H=(Q-$)/(Z-$),q=1-H;for(let N=0;N!==Y;++N)K[N]=W[U+N]*q+W[X+N]*H;return K}}class wZ extends n8{constructor(J,$,Q,Z){super(J,$,Q,Z)}interpolate_(J){return this.copySampleValue_(J-1)}}class TZ extends n8{interpolate_(J,$,Q,Z){let K=this.resultBuffer,W=this.sampleValues,Y=this.valueSize,X=J*Y,U=X-Y,H=this.inTangents,q=this.outTangents;if(!H||!q){let F=(Q-$)/(Z-$),M=1-F;for(let B=0;B!==Y;++B)K[B]=W[U+B]*M+W[X+B]*F;return K}let N=Y*2,G=J-1;for(let F=0;F!==Y;++F){let M=W[U+F],B=W[X+F],O=G*N+F*2,E=q[O],C=q[O+1],P=J*N+F*2,k=H[P],z=H[P+1],_=qH(Q,$,E,k,Z);K[F]=PY(_,M,C,z,B)}return K}}function PY(J,$,Q,Z,K){let W=1-J;return W*W*W*$+3*W*W*J*Q+3*W*J*J*Z+J*J*J*K}function GH(J,$,Q,Z,K){let W=1-J;return 3*W*W*(Q-$)+6*W*J*(Z-Q)+3*J*J*(K-Z)}function qH(J,$,Q,Z,K){let W=(J-$)/(K-$);for(let Y=0;Y<8;Y++){let X=PY(W,$,Q,Z,K)-J;if(Math.abs(X)<0.0000000001)break;let U=GH(W,$,Q,Z,K);if(Math.abs(U)<0.0000000001)break;W=Math.max(0,Math.min(1,W-X/U))}return W}class b9{constructor(J,$,Q,Z){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if($===void 0||$.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=E6($,this.TimeBufferType),this.values=E6(Q,this.ValueBufferType),this.setInterpolation(Z||this.DefaultInterpolation)}static toJSON(J){let $=J.constructor,Q;if($.toJSON!==this.toJSON)Q=$.toJSON(J);else{Q={name:J.name,times:E6(J.times,Array),values:E6(J.values,Array)};let Z=J.getInterpolation();if(Z!==J.DefaultInterpolation)Q.interpolation=Z;if(CQ(J.settings))Q.settings={inTangents:E6(J.settings.inTangents,Array),outTangents:E6(J.settings.outTangents,Array)}}return Q.type=J.ValueTypeName,Q}InterpolantFactoryMethodDiscrete(J){return new wZ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new AZ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new PZ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let $=new TZ(this.times,this.values,this.getValueSize(),J);if(this.settings)$.inTangents=this.settings.inTangents,$.outTangents=this.settings.outTangents;return $}setInterpolation(J){let $;switch(J){case 2300:$=this.InterpolantFactoryMethodDiscrete;break;case 2301:$=this.InterpolantFactoryMethodLinear;break;case 2302:$=this.InterpolantFactoryMethodSmooth;break;case 2303:$=this.InterpolantFactoryMethodBezier;break}if($===void 0){let Q="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(Q);return QJ("KeyframeTrack:",Q),this}return this.createInterpolant=$,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let $=this.times;for(let Q=0,Z=$.length;Q!==Z;++Q)$[Q]+=J}return this}scale(J){if(J!==1){let $=this.times;for(let Q=0,Z=$.length;Q!==Z;++Q)$[Q]*=J;if(CQ(this.settings))IW(this.settings.inTangents,J),IW(this.settings.outTangents,J)}return this}trim(J,$){let Q=this.times,Z=Q.length,K=0,W=Z-1;while(K!==Z&&Q[K]<J)++K;while(W!==-1&&Q[W]>$)--W;if(++W,K!==0||W!==Z){if(K>=W)W=Math.max(W,1),K=W-1;let Y=this.getValueSize();this.times=Q.slice(K,W),this.values=this.values.slice(K*Y,W*Y)}return this}validate(){let J=!0,$=this.getValueSize();if($-Math.floor($)!==0)KJ("KeyframeTrack: Invalid value size in track.",this),J=!1;let Q=this.times,Z=this.values,K=Q.length;if(K===0)KJ("KeyframeTrack: Track is empty.",this),J=!1;let W=null;for(let Y=0;Y!==K;Y++){let X=Q[Y];if(typeof X==="number"&&isNaN(X)){KJ("KeyframeTrack: Time is not a valid number.",this,Y,X),J=!1;break}if(W!==null&&W>X){KJ("KeyframeTrack: Out of order keys.",this,Y,X,W),J=!1;break}W=X}if(Z!==void 0){if(mU(Z))for(let Y=0,X=Z.length;Y!==X;++Y){let U=Z[Y];if(isNaN(U)){KJ("KeyframeTrack: Value is not a valid number.",this,Y,U),J=!1;break}}}return J}optimize(){let J=this.times.slice(),$=this.values.slice(),Q=this.getValueSize(),Z=this.getInterpolation()===2302,K=J.length-1,W=1;for(let Y=1;Y<K;++Y){let X=!1,U=J[Y],H=J[Y+1];if(U!==H&&(Y!==1||U!==J[0]))if(!Z){let q=Y*Q,N=q-Q,G=q+Q;for(let F=0;F!==Q;++F){let M=$[q+F];if(M!==$[N+F]||M!==$[G+F]){X=!0;break}}}else X=!0;if(X){if(Y!==W){J[W]=J[Y];let q=Y*Q,N=W*Q;for(let G=0;G!==Q;++G)$[N+G]=$[q+G]}++W}}if(K>0){J[W]=J[K];for(let Y=K*Q,X=W*Q,U=0;U!==Q;++U)$[X+U]=$[Y+U];++W}if(W!==J.length)this.times=J.slice(0,W),this.values=$.slice(0,W*Q);else this.times=J,this.values=$;return this}clone(){let J=this.times.slice(),$=this.values.slice(),Z=new this.constructor(this.name,J,$);if(Z.createInterpolant=this.createInterpolant,CQ(this.settings))Z.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return Z}}function IW(J,$){for(let Q=0,Z=J.length;Q!==Z;Q+=2)J[Q]*=$}b9.prototype.ValueTypeName="";b9.prototype.TimeBufferType=Float32Array;b9.prototype.ValueBufferType=Float32Array;b9.prototype.DefaultInterpolation=2301;class s8 extends b9{constructor(J,$,Q){super(J,$,Q)}}s8.prototype.ValueTypeName="bool";s8.prototype.ValueBufferType=Array;s8.prototype.DefaultInterpolation=2300;s8.prototype.InterpolantFactoryMethodLinear=void 0;s8.prototype.InterpolantFactoryMethodSmooth=void 0;class SZ extends b9{constructor(J,$,Q,Z){super(J,$,Q,Z)}}SZ.prototype.ValueTypeName="color";class jZ extends b9{constructor(J,$,Q,Z){super(J,$,Q,Z)}}jZ.prototype.ValueTypeName="number";class vZ extends n8{constructor(J,$,Q,Z){super(J,$,Q,Z)}interpolate_(J,$,Q,Z){let K=this.resultBuffer,W=this.sampleValues,Y=this.valueSize,X=(Q-$)/(Z-$),U=J*Y;for(let H=U+Y;U!==H;U+=4)l9.slerpFlat(K,0,W,U-Y,W,U,X);return K}}class C$ extends b9{constructor(J,$,Q,Z){super(J,$,Q,Z)}InterpolantFactoryMethodLinear(J){return new vZ(this.times,this.values,this.getValueSize(),J)}}C$.prototype.ValueTypeName="quaternion";C$.prototype.InterpolantFactoryMethodSmooth=void 0;class i8 extends b9{constructor(J,$,Q){super(J,$,Q)}}i8.prototype.ValueTypeName="string";i8.prototype.ValueBufferType=Array;i8.prototype.DefaultInterpolation=2300;i8.prototype.InterpolantFactoryMethodLinear=void 0;i8.prototype.InterpolantFactoryMethodSmooth=void 0;class yZ extends b9{constructor(J,$,Q,Z){super(J,$,Q,Z)}}yZ.prototype.ValueTypeName="vector";class bZ{constructor(J,$,Q){let Z=this,K=!1,W=0,Y=0,X=void 0,U=[];this.onStart=void 0,this.onLoad=J,this.onProgress=$,this.onError=Q,this._abortController=null,this.itemStart=function(H){if(Y++,K===!1){if(Z.onStart!==void 0)Z.onStart(H,W,Y)}K=!0},this.itemEnd=function(H){if(W++,Z.onProgress!==void 0)Z.onProgress(H,W,Y);if(W===Y){if(K=!1,Z.onLoad!==void 0)Z.onLoad()}},this.itemError=function(H){if(Z.onError!==void 0)Z.onError(H)},this.resolveURL=function(H){if(H=H.normalize("NFC"),X)return X(H);return H},this.setURLModifier=function(H){return X=H,this},this.addHandler=function(H,q){return U.push(H,q),this},this.removeHandler=function(H){let q=U.indexOf(H);if(q!==-1)U.splice(q,2);return this},this.getHandler=function(H){for(let q=0,N=U.length;q<N;q+=2){let G=U[q],F=U[q+1];if(G.global)G.lastIndex=0;if(G.test(H))return F}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var AY=new bZ;class fZ{constructor(J){if(this.manager=J!==void 0?J:AY,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,$){let Q=this;return new Promise(function(Z,K){Q.load(J,Z,$,K)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}fZ.DEFAULT_MATERIAL_NAME="__DEFAULT";var e7=new x,J$=new l9,s9=new x;class _$ extends Y9{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bJ,this.projectionMatrix=new bJ,this.projectionMatrixInverse=new bJ,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,$){return super.copy(J,$),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(e7,J$,s9),s9.x===1&&s9.y===1&&s9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(e7,J$,s9.set(1,1,1)).invert()}updateWorldMatrix(J,$,Q=!1){if(super.updateWorldMatrix(J,$,Q),this.matrixWorld.decompose(e7,J$,s9),s9.x===1&&s9.y===1&&s9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(e7,J$,s9.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var I8=new x,zW=new o0,RW=new o0;class E9 extends _${constructor(J=50,$=1,Q=0.1,Z=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=Q,this.far=Z,this.focus=10,this.aspect=$,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,$){return super.copy(J,$),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let $=0.5*this.getFilmHeight()/J;this.fov=$$*2*Math.atan($),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(ZQ*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return $$*2*Math.atan(Math.tan(ZQ*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,$,Q){I8.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(I8.x,I8.y).multiplyScalar(-J/I8.z),I8.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(I8.x,I8.y).multiplyScalar(-J/I8.z)}getViewSize(J,$){return this.getViewBounds(J,zW,RW),$.subVectors(RW,zW)}setViewOffset(J,$,Q,Z,K,W){if(this.aspect=J/$,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=$,this.view.offsetX=Q,this.view.offsetY=Z,this.view.width=K,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,$=J*Math.tan(ZQ*0.5*this.fov)/this.zoom,Q=2*$,Z=this.aspect*Q,K=-0.5*Z,W=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:X,fullHeight:U}=W;K+=W.offsetX*Z/X,$-=W.offsetY*Q/U,Z*=W.width/X,Q*=W.height/U}let Y=this.filmOffset;if(Y!==0)K+=J*Y/this.getFilmWidth();this.projectionMatrix.makePerspective(K,K+Z,$,$-Q,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let $=super.toJSON(J);if($.object.fov=this.fov,$.object.zoom=this.zoom,$.object.near=this.near,$.object.far=this.far,$.object.focus=this.focus,$.object.aspect=this.aspect,this.view!==null)$.object.view=Object.assign({},this.view);return $.object.filmGauge=this.filmGauge,$.object.filmOffset=this.filmOffset,$}}class T6 extends _${constructor(J=-1,$=1,Q=1,Z=-1,K=0.1,W=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=$,this.top=Q,this.bottom=Z,this.near=K,this.far=W,this.updateProjectionMatrix()}copy(J,$){return super.copy(J,$),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,$,Q,Z,K,W){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=$,this.view.offsetX=Q,this.view.offsetY=Z,this.view.width=K,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),$=(this.top-this.bottom)/(2*this.zoom),Q=(this.right+this.left)/2,Z=(this.top+this.bottom)/2,K=Q-J,W=Q+J,Y=Z+$,X=Z-$;if(this.view!==null&&this.view.enabled){let U=(this.right-this.left)/this.view.fullWidth/this.zoom,H=(this.top-this.bottom)/this.view.fullHeight/this.zoom;K+=U*this.view.offsetX,W=K+U*this.view.width,Y-=H*this.view.offsetY,X=Y-H*this.view.height}this.projectionMatrix.makeOrthographic(K,W,Y,X,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let $=super.toJSON(J);if($.object.zoom=this.zoom,$.object.left=this.left,$.object.right=this.right,$.object.top=this.top,$.object.bottom=this.bottom,$.object.near=this.near,$.object.far=this.far,this.view!==null)$.object.view=Object.assign({},this.view);return $}}class eJ extends hJ{constructor(){super();this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(J){return super.copy(J),this.instanceCount=J.instanceCount,this}toJSON(){let J=super.toJSON();return J.instanceCount=this.instanceCount,J.isInstancedBufferGeometry=!0,J}}var M6=-90,D6=1;class hZ extends Y9{constructor(J,$,Q){super();this.type="CubeCamera",this.renderTarget=Q,this.coordinateSystem=null,this.activeMipmapLevel=0;let Z=new E9(M6,D6,J,$);Z.layers=this.layers,this.add(Z);let K=new E9(M6,D6,J,$);K.layers=this.layers,this.add(K);let W=new E9(M6,D6,J,$);W.layers=this.layers,this.add(W);let Y=new E9(M6,D6,J,$);Y.layers=this.layers,this.add(Y);let X=new E9(M6,D6,J,$);X.layers=this.layers,this.add(X);let U=new E9(M6,D6,J,$);U.layers=this.layers,this.add(U)}updateCoordinateSystem(){let J=this.coordinateSystem,$=this.children.concat(),[Q,Z,K,W,Y,X]=$;for(let U of $)this.remove(U);if(J===2000)Q.up.set(0,1,0),Q.lookAt(1,0,0),Z.up.set(0,1,0),Z.lookAt(-1,0,0),K.up.set(0,0,-1),K.lookAt(0,1,0),W.up.set(0,0,1),W.lookAt(0,-1,0),Y.up.set(0,1,0),Y.lookAt(0,0,1),X.up.set(0,1,0),X.lookAt(0,0,-1);else if(J===2001)Q.up.set(0,-1,0),Q.lookAt(-1,0,0),Z.up.set(0,-1,0),Z.lookAt(1,0,0),K.up.set(0,0,1),K.lookAt(0,1,0),W.up.set(0,0,-1),W.lookAt(0,-1,0),Y.up.set(0,-1,0),Y.lookAt(0,0,1),X.up.set(0,-1,0),X.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let U of $)this.add(U),U.updateMatrixWorld()}update(J,$){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:Q,activeMipmapLevel:Z}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[K,W,Y,X,U,H]=this.children,q=J.getRenderTarget(),N=J.getActiveCubeFace(),G=J.getActiveMipmapLevel(),F=J.xr.enabled;J.xr.enabled=!1;let M=Q.texture.generateMipmaps;Q.texture.generateMipmaps=!1;let B=!1;if(J.isWebGLRenderer===!0)B=J.state.buffers.depth.getReversed();else B=J.reversedDepthBuffer;if(J.setRenderTarget(Q,0,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render($,K),J.setRenderTarget(Q,1,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render($,W),J.setRenderTarget(Q,2,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render($,Y),J.setRenderTarget(Q,3,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render($,X),J.setRenderTarget(Q,4,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render($,U),Q.texture.generateMipmaps=M,J.setRenderTarget(Q,5,Z),B&&J.autoClear===!1)J.clearDepth();J.render($,H),J.setRenderTarget(q,N,G),J.xr.enabled=F,Q.texture.needsPMREMUpdate=!0}}class xZ extends E9{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}class P${constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(J){if(this._document=J,J.hidden!==void 0)this._pageVisibilityHandler=NH.bind(this),J.addEventListener("visibilitychange",this._pageVisibilityHandler,!1)}disconnect(){if(this._pageVisibilityHandler!==null)this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null;this._document=null}getDelta(){return this._delta/1000}getElapsed(){return this._elapsed/1000}getTimescale(){return this._timescale}setTimescale(J){return this._timescale=J,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(J){if(this._pageVisibilityHandler!==null&&this._document.hidden===!0)this._delta=0;else this._previousTime=this._currentTime,this._currentTime=(J!==void 0?J:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta;return this}}function NH(){if(this._document.hidden===!1)this.reset()}var gZ="\\[\\]\\.:\\/",FH=new RegExp("["+gZ+"]","g"),pZ="[^"+gZ+"]",OH="[^"+gZ.replace("\\.","")+"]",EH=/((?:WC+[\/:])*)/.source.replace("WC",pZ),MH=/(WCOD+)?/.source.replace("WCOD",OH),DH=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pZ),VH=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pZ),LH=new RegExp("^"+EH+MH+DH+VH+"$"),BH=["material","materials","bones","map"];class wY{constructor(J,$,Q){let Z=Q||zJ.parseTrackName($);this._targetGroup=J,this._bindings=J.subscribe_($,Z)}getValue(J,$){this.bind();let Q=this._targetGroup.nCachedObjects_,Z=this._bindings[Q];if(Z!==void 0)Z.getValue(J,$)}setValue(J,$){let Q=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,K=Q.length;Z!==K;++Z)Q[Z].setValue(J,$)}bind(){let J=this._bindings;for(let $=this._targetGroup.nCachedObjects_,Q=J.length;$!==Q;++$)J[$].bind()}unbind(){let J=this._bindings;for(let $=this._targetGroup.nCachedObjects_,Q=J.length;$!==Q;++$)J[$].unbind()}}class zJ{constructor(J,$,Q){this.path=$,this.parsedPath=Q||zJ.parseTrackName($),this.node=zJ.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,$,Q){if(!(J&&J.isAnimationObjectGroup))return new zJ(J,$,Q);else return new zJ.Composite(J,$,Q)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(FH,"")}static parseTrackName(J){let $=LH.exec(J);if($===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+J);let Q={nodeName:$[2],objectName:$[3],objectIndex:$[4],propertyName:$[5],propertyIndex:$[6]},Z=Q.nodeName&&Q.nodeName.lastIndexOf(".");if(Z!==void 0&&Z!==-1){let K=Q.nodeName.substring(Z+1);if(BH.indexOf(K)!==-1)Q.nodeName=Q.nodeName.substring(0,Z),Q.objectName=K}if(Q.propertyName===null||Q.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+J);return Q}static findNode(J,$){if($===void 0||$===""||$==="."||$===-1||$===J.name||$===J.uuid)return J;if(J.skeleton){let Q=J.skeleton.getBoneByName($);if(Q!==void 0)return Q}if(J.children){let Q=function(K){for(let W=0;W<K.length;W++){let Y=K[W];if(Y.name===$||Y.uuid===$)return Y;let X=Q(Y.children);if(X)return X}return null},Z=Q(J.children);if(Z)return Z}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,$){J[$]=this.targetObject[this.propertyName]}_getValue_array(J,$){let Q=this.resolvedProperty;for(let Z=0,K=Q.length;Z!==K;++Z)J[$++]=Q[Z]}_getValue_arrayElement(J,$){J[$]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,$){this.resolvedProperty.toArray(J,$)}_setValue_direct(J,$){this.targetObject[this.propertyName]=J[$]}_setValue_direct_setNeedsUpdate(J,$){this.targetObject[this.propertyName]=J[$],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,$){this.targetObject[this.propertyName]=J[$],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,$){let Q=this.resolvedProperty;for(let Z=0,K=Q.length;Z!==K;++Z)Q[Z]=J[$++]}_setValue_array_setNeedsUpdate(J,$){let Q=this.resolvedProperty;for(let Z=0,K=Q.length;Z!==K;++Z)Q[Z]=J[$++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,$){let Q=this.resolvedProperty;for(let Z=0,K=Q.length;Z!==K;++Z)Q[Z]=J[$++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,$){this.resolvedProperty[this.propertyIndex]=J[$]}_setValue_arrayElement_setNeedsUpdate(J,$){this.resolvedProperty[this.propertyIndex]=J[$],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,$){this.resolvedProperty[this.propertyIndex]=J[$],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,$){this.resolvedProperty.fromArray(J,$)}_setValue_fromArray_setNeedsUpdate(J,$){this.resolvedProperty.fromArray(J,$),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,$){this.resolvedProperty.fromArray(J,$),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,$){this.bind(),this.getValue(J,$)}_setValue_unbound(J,$){this.bind(),this.setValue(J,$)}bind(){let J=this.node,$=this.parsedPath,Q=$.objectName,Z=$.propertyName,K=$.propertyIndex;if(!J)J=zJ.findNode(this.rootNode,$.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){QJ("PropertyBinding: No target node found for track: "+this.path+".");return}if(Q){let U=$.objectIndex;switch(Q){case"materials":if(!J.material){KJ("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){KJ("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){KJ("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let H=0;H<J.length;H++)if(J[H].name===U){U=H;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){KJ("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){KJ("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[Q]===void 0){KJ("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[Q]}if(U!==void 0){if(J[U]===void 0){KJ("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[U]}}let W=J[Z];if(W===void 0){let U=$.nodeName;KJ("PropertyBinding: Trying to update property for track: "+U+"."+Z+" but it wasn't found.",J);return}let Y=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)Y=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)Y=this.Versioning.MatrixWorldNeedsUpdate;let X=this.BindingType.Direct;if(K!==void 0){if(Z==="morphTargetInfluences"){if(!J.geometry){KJ("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){KJ("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[K]!==void 0)K=J.morphTargetDictionary[K]}X=this.BindingType.ArrayElement,this.resolvedProperty=W,this.propertyIndex=K}else if(W.fromArray!==void 0&&W.toArray!==void 0)X=this.BindingType.HasFromToArray,this.resolvedProperty=W;else if(Array.isArray(W))X=this.BindingType.EntireArray,this.resolvedProperty=W;else this.propertyName=Z;this.getValue=this.GetterByBindingType[X],this.setValue=this.SetterByBindingTypeAndVersioning[X][Y]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}zJ.Composite=wY;zJ.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};zJ.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};zJ.prototype.GetterByBindingType=[zJ.prototype._getValue_direct,zJ.prototype._getValue_array,zJ.prototype._getValue_arrayElement,zJ.prototype._getValue_toArray];zJ.prototype.SetterByBindingTypeAndVersioning=[[zJ.prototype._setValue_direct,zJ.prototype._setValue_direct_setNeedsUpdate,zJ.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[zJ.prototype._setValue_array,zJ.prototype._setValue_array_setNeedsUpdate,zJ.prototype._setValue_array_setMatrixWorldNeedsUpdate],[zJ.prototype._setValue_arrayElement,zJ.prototype._setValue_arrayElement_setNeedsUpdate,zJ.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[zJ.prototype._setValue_fromArray,zJ.prototype._setValue_fromArray_setNeedsUpdate,zJ.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var QM=new Float32Array(1);class A8 extends BZ{constructor(J,$,Q=1){super(J,$);this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=Q}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}clone(J){let $=super.clone(J);return $.meshPerAttribute=this.meshPerAttribute,$}toJSON(J){let $=super.toJSON(J);return $.isInstancedInterleavedBuffer=!0,$.meshPerAttribute=this.meshPerAttribute,$}}class mZ{static{mZ.prototype.isMatrix2=!0}constructor(J,$,Q,Z){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,$,Q,Z)}identity(){return this.set(1,0,0,1),this}fromArray(J,$=0){for(let Q=0;Q<4;Q++)this.elements[Q]=J[Q+$];return this}set(J,$,Q,Z){let K=this.elements;return K[0]=J,K[2]=$,K[1]=Q,K[3]=Z,this}}function uZ(J,$,Q,Z){let K=kH(Z);switch(Q){case 1021:return J*$;case 1028:return J*$/K.components*K.byteLength;case 1029:return J*$/K.components*K.byteLength;case 1030:return J*$*2/K.components*K.byteLength;case 1031:return J*$*2/K.components*K.byteLength;case 1022:return J*$*3/K.components*K.byteLength;case 1023:return J*$*4/K.components*K.byteLength;case 1033:return J*$*4/K.components*K.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor(($+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor(($+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max($,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max($,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor(($+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor(($+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor(($+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor(($+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor(($+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor(($+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor(($+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor(($+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor(($+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor(($+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor(($+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor(($+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor(($+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor(($+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor(($+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor(($+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil($/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil($/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil($/4)*16}throw Error(`Unable to determine texture byte length for ${Q} format.`)}function kH(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));if(typeof window<"u")if(window.__THREE__)QJ("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="186";function rY(){let J=null,$=!1,Q=null,Z=null;function K(W,Y){Z=J.requestAnimationFrame(K),Q(W,Y)}return{start:function(){if($===!0)return;if(Q===null)return;if(J===null)return;Z=J.requestAnimationFrame(K),$=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(Z);$=!1},setAnimationLoop:function(W){Q=W},setContext:function(W){J=W}}}function IH(J){let $=new WeakMap;function Q(X,U){let{array:H,usage:q}=X,N=H.byteLength,G=J.createBuffer();J.bindBuffer(U,G),J.bufferData(U,H,q),X.onUploadCallback();let F;if(H instanceof Float32Array)F=J.FLOAT;else if(typeof Float16Array<"u"&&H instanceof Float16Array)F=J.HALF_FLOAT;else if(H instanceof Uint16Array)if(X.isFloat16BufferAttribute)F=J.HALF_FLOAT;else F=J.UNSIGNED_SHORT;else if(H instanceof Int16Array)F=J.SHORT;else if(H instanceof Uint32Array)F=J.UNSIGNED_INT;else if(H instanceof Int32Array)F=J.INT;else if(H instanceof Int8Array)F=J.BYTE;else if(H instanceof Uint8Array)F=J.UNSIGNED_BYTE;else if(H instanceof Uint8ClampedArray)F=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+H);return{buffer:G,type:F,bytesPerElement:H.BYTES_PER_ELEMENT,version:X.version,size:N}}function Z(X,U,H){let{array:q,updateRanges:N}=U;if(J.bindBuffer(H,X),N.length===0)J.bufferSubData(H,0,q);else{N.sort((F,M)=>F.start-M.start);let G=0;for(let F=1;F<N.length;F++){let M=N[G],B=N[F];if(B.start<=M.start+M.count+1)M.count=Math.max(M.count,B.start+B.count-M.start);else++G,N[G]=B}N.length=G+1;for(let F=0,M=N.length;F<M;F++){let B=N[F];J.bufferSubData(H,B.start*q.BYTES_PER_ELEMENT,q,B.start,B.count)}U.clearUpdateRanges()}U.onUploadCallback()}function K(X){if(X.isInterleavedBufferAttribute)X=X.data;return $.get(X)}function W(X){if(X.isInterleavedBufferAttribute)X=X.data;let U=$.get(X);if(U)J.deleteBuffer(U.buffer),$.delete(X)}function Y(X,U){if(X.isInterleavedBufferAttribute)X=X.data;if(X.isGLBufferAttribute){let q=$.get(X);if(!q||q.version<X.version)$.set(X,{buffer:X.buffer,type:X.type,bytesPerElement:X.elementSize,version:X.version});return}let H=$.get(X);if(H===void 0)$.set(X,Q(X,U));else if(H.version<X.version){if(H.size!==X.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Z(H.buffer,X,U),H.version=X.version}}return{get:K,remove:W,update:Y}}var zH=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,RH=`#ifdef USE_ALPHAHASH
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
#endif`,CH=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_H=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PH=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,AH=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wH=`#ifdef USE_AOMAP
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
#endif`,TH=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,SH=`#ifdef USE_BATCHING
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
#endif`,jH=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vH=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yH=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bH=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fH=`#ifdef USE_IRIDESCENCE
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
#endif`,hH=`#ifdef USE_BUMPMAP
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
#endif`,xH=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gH=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pH=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mH=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uH=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,lH=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,dH=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,cH=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,nH=`#define PI 3.141592653589793
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
} // validated`,sH=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,iH=`vec3 transformedNormal = objectNormal;
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
#endif`,oH=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,aH=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rH=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tH=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eH="gl_FragColor = linearToOutputTexel( gl_FragColor );",JG=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$G=`#ifdef USE_ENVMAP
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
#endif`,QG=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ZG=`#ifdef USE_ENVMAP
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
#endif`,KG=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,WG=`#ifdef USE_ENVMAP
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
#endif`,YG=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,XG=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,UG=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,HG=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,GG=`#ifdef USE_GRADIENTMAP
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
}`,qG=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,NG=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,FG=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,OG=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,EG=`#ifdef USE_ENVMAP
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
#endif`,MG=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,DG=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,VG=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,LG=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,BG=`PhysicalMaterial material;
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
#endif`,kG=`uniform sampler2D dfgLUT;
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
}`,IG=`
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
#endif`,zG=`#if defined( RE_IndirectDiffuse )
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
#endif`,RG=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,CG=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,_G=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,PG=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AG=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wG=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,TG=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,SG=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jG=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vG=`#if defined( USE_POINTS_UV )
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
#endif`,yG=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bG=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fG=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hG=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xG=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gG=`#ifdef USE_MORPHTARGETS
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
#endif`,pG=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mG=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,uG=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lG=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dG=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cG=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,nG=`#ifdef USE_NORMALMAP
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
#endif`,sG=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iG=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,oG=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,aG=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rG=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tG=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,eG=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,J1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Q1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Z1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,K1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,W1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Y1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,X1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,U1=`float getShadowMask() {
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
}`,H1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,G1=`#ifdef USE_SKINNING
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
#endif`,q1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,N1=`#ifdef USE_SKINNING
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
#endif`,F1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,O1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,E1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,M1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,D1=`#ifdef USE_TRANSMISSION
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
#endif`,V1=`#ifdef USE_TRANSMISSION
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
#endif`,L1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,z1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,R1=`uniform sampler2D t2D;
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
}`,C1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,P1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w1=`#include <common>
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
}`,T1=`#if DEPTH_PACKING == 3200
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
}`,S1=`#define DISTANCE
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
}`,j1=`#define DISTANCE
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
}`,v1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,y1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b1=`uniform float scale;
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
}`,f1=`uniform vec3 diffuse;
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
}`,h1=`#include <common>
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
}`,x1=`uniform vec3 diffuse;
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
}`,g1=`#define LAMBERT
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
}`,p1=`#define LAMBERT
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
}`,m1=`#define MATCAP
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
}`,u1=`#define MATCAP
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
}`,l1=`#define NORMAL
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
}`,d1=`#define NORMAL
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
}`,c1=`#define PHONG
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
}`,n1=`#define PHONG
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
}`,s1=`#define STANDARD
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
}`,i1=`#define STANDARD
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
}`,o1=`#define TOON
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
}`,a1=`#define TOON
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
}`,r1=`uniform float size;
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
}`,t1=`uniform vec3 diffuse;
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
}`,e1=`#include <common>
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
}`,Jq=`uniform vec3 color;
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
}`,$q=`uniform float rotation;
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
}`,Qq=`uniform vec3 diffuse;
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
}`,NJ={alphahash_fragment:zH,alphahash_pars_fragment:RH,alphamap_fragment:CH,alphamap_pars_fragment:_H,alphatest_fragment:PH,alphatest_pars_fragment:AH,aomap_fragment:wH,aomap_pars_fragment:TH,batching_pars_vertex:SH,batching_vertex:jH,begin_vertex:vH,beginnormal_vertex:yH,bsdfs:bH,iridescence_fragment:fH,bumpmap_pars_fragment:hH,clipping_planes_fragment:xH,clipping_planes_pars_fragment:gH,clipping_planes_pars_vertex:pH,clipping_planes_vertex:mH,color_fragment:uH,color_pars_fragment:lH,color_pars_vertex:dH,color_vertex:cH,common:nH,cube_uv_reflection_fragment:sH,defaultnormal_vertex:iH,displacementmap_pars_vertex:oH,displacementmap_vertex:aH,emissivemap_fragment:rH,emissivemap_pars_fragment:tH,colorspace_fragment:eH,colorspace_pars_fragment:JG,envmap_fragment:$G,envmap_common_pars_fragment:QG,envmap_pars_fragment:ZG,envmap_pars_vertex:KG,envmap_physical_pars_fragment:EG,envmap_vertex:WG,fog_vertex:YG,fog_pars_vertex:XG,fog_fragment:UG,fog_pars_fragment:HG,gradientmap_pars_fragment:GG,lightmap_pars_fragment:qG,lights_lambert_fragment:NG,lights_lambert_pars_fragment:FG,lights_pars_begin:OG,lights_toon_fragment:MG,lights_toon_pars_fragment:DG,lights_phong_fragment:VG,lights_phong_pars_fragment:LG,lights_physical_fragment:BG,lights_physical_pars_fragment:kG,lights_fragment_begin:IG,lights_fragment_maps:zG,lights_fragment_end:RG,lightprobes_pars_fragment:CG,logdepthbuf_fragment:_G,logdepthbuf_pars_fragment:PG,logdepthbuf_pars_vertex:AG,logdepthbuf_vertex:wG,map_fragment:TG,map_pars_fragment:SG,map_particle_fragment:jG,map_particle_pars_fragment:vG,metalnessmap_fragment:yG,metalnessmap_pars_fragment:bG,morphinstance_vertex:fG,morphcolor_vertex:hG,morphnormal_vertex:xG,morphtarget_pars_vertex:gG,morphtarget_vertex:pG,normal_fragment_begin:mG,normal_fragment_maps:uG,normal_pars_fragment:lG,normal_pars_vertex:dG,normal_vertex:cG,normalmap_pars_fragment:nG,clearcoat_normal_fragment_begin:sG,clearcoat_normal_fragment_maps:iG,clearcoat_pars_fragment:oG,iridescence_pars_fragment:aG,opaque_fragment:rG,packing:tG,premultiplied_alpha_fragment:eG,project_vertex:J1,dithering_fragment:$1,dithering_pars_fragment:Q1,roughnessmap_fragment:Z1,roughnessmap_pars_fragment:K1,shadowmap_pars_fragment:W1,shadowmap_pars_vertex:Y1,shadowmap_vertex:X1,shadowmask_pars_fragment:U1,skinbase_vertex:H1,skinning_pars_vertex:G1,skinning_vertex:q1,skinnormal_vertex:N1,specularmap_fragment:F1,specularmap_pars_fragment:O1,tonemapping_fragment:E1,tonemapping_pars_fragment:M1,transmission_fragment:D1,transmission_pars_fragment:V1,uv_pars_fragment:L1,uv_pars_vertex:B1,uv_vertex:k1,worldpos_vertex:I1,background_vert:z1,background_frag:R1,backgroundCube_vert:C1,backgroundCube_frag:_1,cube_vert:P1,cube_frag:A1,depth_vert:w1,depth_frag:T1,distance_vert:S1,distance_frag:j1,equirect_vert:v1,equirect_frag:y1,linedashed_vert:b1,linedashed_frag:f1,meshbasic_vert:h1,meshbasic_frag:x1,meshlambert_vert:g1,meshlambert_frag:p1,meshmatcap_vert:m1,meshmatcap_frag:u1,meshnormal_vert:l1,meshnormal_frag:d1,meshphong_vert:c1,meshphong_frag:n1,meshphysical_vert:s1,meshphysical_frag:i1,meshtoon_vert:o1,meshtoon_frag:a1,points_vert:r1,points_frag:t1,shadow_vert:e1,shadow_frag:Jq,sprite_vert:$q,sprite_frag:Qq},b0={common:{diffuse:{value:new WJ(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new UJ},alphaMap:{value:null},alphaMapTransform:{value:new UJ},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new UJ}},envmap:{envMap:{value:null},envMapRotation:{value:new UJ},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new UJ}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new UJ}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new UJ},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new UJ},normalScale:{value:new o0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new UJ},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new UJ}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new UJ}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new UJ}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new WJ(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new x},probesMax:{value:new x},probesResolution:{value:new x}},points:{diffuse:{value:new WJ(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new UJ},alphaTest:{value:0},uvTransform:{value:new UJ}},sprite:{diffuse:{value:new WJ(16777215)},opacity:{value:1},center:{value:new o0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new UJ},alphaMap:{value:null},alphaMapTransform:{value:new UJ},alphaTest:{value:0}}},t9={basic:{uniforms:G9([b0.common,b0.specularmap,b0.envmap,b0.aomap,b0.lightmap,b0.fog]),vertexShader:NJ.meshbasic_vert,fragmentShader:NJ.meshbasic_frag},lambert:{uniforms:G9([b0.common,b0.specularmap,b0.envmap,b0.aomap,b0.lightmap,b0.emissivemap,b0.bumpmap,b0.normalmap,b0.displacementmap,b0.fog,b0.lights,{emissive:{value:new WJ(0)},envMapIntensity:{value:1}}]),vertexShader:NJ.meshlambert_vert,fragmentShader:NJ.meshlambert_frag},phong:{uniforms:G9([b0.common,b0.specularmap,b0.envmap,b0.aomap,b0.lightmap,b0.emissivemap,b0.bumpmap,b0.normalmap,b0.displacementmap,b0.fog,b0.lights,{emissive:{value:new WJ(0)},specular:{value:new WJ(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:NJ.meshphong_vert,fragmentShader:NJ.meshphong_frag},standard:{uniforms:G9([b0.common,b0.envmap,b0.aomap,b0.lightmap,b0.emissivemap,b0.bumpmap,b0.normalmap,b0.displacementmap,b0.roughnessmap,b0.metalnessmap,b0.fog,b0.lights,{emissive:{value:new WJ(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:NJ.meshphysical_vert,fragmentShader:NJ.meshphysical_frag},toon:{uniforms:G9([b0.common,b0.aomap,b0.lightmap,b0.emissivemap,b0.bumpmap,b0.normalmap,b0.displacementmap,b0.gradientmap,b0.fog,b0.lights,{emissive:{value:new WJ(0)}}]),vertexShader:NJ.meshtoon_vert,fragmentShader:NJ.meshtoon_frag},matcap:{uniforms:G9([b0.common,b0.bumpmap,b0.normalmap,b0.displacementmap,b0.fog,{matcap:{value:null}}]),vertexShader:NJ.meshmatcap_vert,fragmentShader:NJ.meshmatcap_frag},points:{uniforms:G9([b0.points,b0.fog]),vertexShader:NJ.points_vert,fragmentShader:NJ.points_frag},dashed:{uniforms:G9([b0.common,b0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:NJ.linedashed_vert,fragmentShader:NJ.linedashed_frag},depth:{uniforms:G9([b0.common,b0.displacementmap]),vertexShader:NJ.depth_vert,fragmentShader:NJ.depth_frag},normal:{uniforms:G9([b0.common,b0.bumpmap,b0.normalmap,b0.displacementmap,{opacity:{value:1}}]),vertexShader:NJ.meshnormal_vert,fragmentShader:NJ.meshnormal_frag},sprite:{uniforms:G9([b0.sprite,b0.fog]),vertexShader:NJ.sprite_vert,fragmentShader:NJ.sprite_frag},background:{uniforms:{uvTransform:{value:new UJ},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:NJ.background_vert,fragmentShader:NJ.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new UJ}},vertexShader:NJ.backgroundCube_vert,fragmentShader:NJ.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:NJ.cube_vert,fragmentShader:NJ.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:NJ.equirect_vert,fragmentShader:NJ.equirect_frag},distance:{uniforms:G9([b0.common,b0.displacementmap,{referencePosition:{value:new x},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:NJ.distance_vert,fragmentShader:NJ.distance_frag},shadow:{uniforms:G9([b0.lights,b0.fog,{color:{value:new WJ(0)},opacity:{value:1}}]),vertexShader:NJ.shadow_vert,fragmentShader:NJ.shadow_frag}};t9.physical={uniforms:G9([t9.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new UJ},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new UJ},clearcoatNormalScale:{value:new o0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new UJ},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new UJ},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new UJ},sheen:{value:0},sheenColor:{value:new WJ(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new UJ},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new UJ},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new UJ},transmissionSamplerSize:{value:new o0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new UJ},attenuationDistance:{value:0},attenuationColor:{value:new WJ(0)},specularColor:{value:new WJ(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new UJ},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new UJ},anisotropyVector:{value:new o0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new UJ}}]),vertexShader:NJ.meshphysical_vert,fragmentShader:NJ.meshphysical_frag};var A$={r:0,b:0,g:0},Zq=new bJ,tY=new UJ;tY.set(-1,0,0,0,1,0,0,0,1);function Kq(J,$,Q,Z,K,W){let Y=new WJ(0),X=K===!0?0:1,U,H,q=null,N=0,G=null;function F(C){let P=C.isScene===!0?C.background:null;if(P&&P.isTexture){let k=C.backgroundBlurriness>0;P=$.get(P,k)}return P}function M(C){let P=!1,k=F(C);if(k===null)O(Y,X);else if(k&&k.isColor)O(k,1),P=!0;let z=J.xr.getEnvironmentBlendMode();if(z==="additive")Q.buffers.color.setClear(0,0,0,1,W);else if(z==="alpha-blend")Q.buffers.color.setClear(0,0,0,0,W);if(J.autoClear||P)Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function B(C,P){let k=F(P);if(k&&(k.isCubeTexture||k.mapping===X7)){if(H===void 0)H=new GJ(new w6(1,1,1),new ZJ({name:"BackgroundCubeMaterial",uniforms:c8(t9.backgroundCube.uniforms),vertexShader:t9.backgroundCube.vertexShader,fragmentShader:t9.backgroundCube.fragmentShader,side:X9,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),H.geometry.deleteAttribute("normal"),H.geometry.deleteAttribute("uv"),H.onBeforeRender=function(z,_,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(H.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),Z.update(H);if(H.material.uniforms.envMap.value=k,H.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,H.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,H.material.uniforms.backgroundRotation.value.setFromMatrix4(Zq.makeRotationFromEuler(P.backgroundRotation)).transpose(),k.isCubeTexture&&k.isRenderTargetTexture===!1)H.material.uniforms.backgroundRotation.value.premultiply(tY);if(H.material.toneMapped=FJ.getTransfer(k.colorSpace)!==RJ,q!==k||N!==k.version||G!==J.toneMapping)H.material.needsUpdate=!0,q=k,N=k.version,G=J.toneMapping;H.layers.enableAll(),C.unshift(H,H.geometry,H.material,0,0,null)}else if(k&&k.isTexture){if(U===void 0)U=new GJ(new H9(2,2),new ZJ({name:"BackgroundMaterial",uniforms:c8(t9.background.uniforms),vertexShader:t9.background.vertexShader,fragmentShader:t9.background.fragmentShader,side:I6,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),Object.defineProperty(U.material,"map",{get:function(){return this.uniforms.t2D.value}}),Z.update(U);if(U.material.uniforms.t2D.value=k,U.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,U.material.toneMapped=FJ.getTransfer(k.colorSpace)!==RJ,k.matrixAutoUpdate===!0)k.updateMatrix();if(U.material.uniforms.uvTransform.value.copy(k.matrix),q!==k||N!==k.version||G!==J.toneMapping)U.material.needsUpdate=!0,q=k,N=k.version,G=J.toneMapping;U.layers.enableAll(),C.unshift(U,U.geometry,U.material,0,0,null)}}function O(C,P){C.getRGB(A$,RZ(J)),Q.buffers.color.setClear(A$.r,A$.g,A$.b,P,W)}function E(){if(H!==void 0)H.geometry.dispose(),H.material.dispose(),H=void 0;if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0}return{getClearColor:function(){return Y},setClearColor:function(C,P=1){Y.set(C),X=P,O(Y,X)},getClearAlpha:function(){return X},setClearAlpha:function(C){X=C,O(Y,X)},render:M,addToRenderList:B,dispose:E}}function Wq(J,$){let Q=J.getParameter(J.MAX_VERTEX_ATTRIBS),Z={},K=G(null),W=K,Y=!1;function X(w,S,n,y,c){let i=!1,h=N(w,y,n,S);if(W!==h)W=h,H(W.object);if(i=F(w,y,n,c),i)M(w,y,n,c);if(c!==null)$.update(c,J.ELEMENT_ARRAY_BUFFER);if(i||Y){if(Y=!1,k(w,S,n,y),c!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,$.get(c).buffer)}}function U(){return J.createVertexArray()}function H(w){return J.bindVertexArray(w)}function q(w){return J.deleteVertexArray(w)}function N(w,S,n,y){let c=y.wireframe===!0,i=Z[S.id];if(i===void 0)i={},Z[S.id]=i;let h=w.isInstancedMesh===!0?w.id:0,t=i[h];if(t===void 0)t={},i[h]=t;let v=t[n.id];if(v===void 0)v={},t[n.id]=v;let g=v[c];if(g===void 0)g=G(U()),v[c]=g;return g}function G(w){let S=[],n=[],y=[];for(let c=0;c<Q;c++)S[c]=0,n[c]=0,y[c]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:n,attributeDivisors:y,object:w,attributes:{},index:null}}function F(w,S,n,y){let c=W.attributes,i=S.attributes,h=0,t=n.getAttributes();for(let v in t)if(t[v].location>=0){let p=c[v],O0=i[v];if(O0===void 0){if(v==="instanceMatrix"&&w.instanceMatrix)O0=w.instanceMatrix;if(v==="instanceColor"&&w.instanceColor)O0=w.instanceColor}if(p===void 0)return!0;if(p.attribute!==O0)return!0;if(O0&&p.data!==O0.data)return!0;h++}if(W.attributesNum!==h)return!0;if(W.index!==y)return!0;return!1}function M(w,S,n,y){let c={},i=S.attributes,h=0,t=n.getAttributes();for(let v in t)if(t[v].location>=0){let p=i[v];if(p===void 0){if(v==="instanceMatrix"&&w.instanceMatrix)p=w.instanceMatrix;if(v==="instanceColor"&&w.instanceColor)p=w.instanceColor}let O0={};if(O0.attribute=p,p&&p.data)O0.data=p.data;c[v]=O0,h++}W.attributes=c,W.attributesNum=h,W.index=y}function B(){let w=W.newAttributes;for(let S=0,n=w.length;S<n;S++)w[S]=0}function O(w){E(w,0)}function E(w,S){let{newAttributes:n,enabledAttributes:y,attributeDivisors:c}=W;if(n[w]=1,y[w]===0)J.enableVertexAttribArray(w),y[w]=1;if(c[w]!==S)J.vertexAttribDivisor(w,S),c[w]=S}function C(){let{newAttributes:w,enabledAttributes:S}=W;for(let n=0,y=S.length;n<y;n++)if(S[n]!==w[n])J.disableVertexAttribArray(n),S[n]=0}function P(w,S,n,y,c,i,h){if(h===!0)J.vertexAttribIPointer(w,S,n,c,i);else J.vertexAttribPointer(w,S,n,y,c,i)}function k(w,S,n,y){B();let c=y.attributes,i=n.getAttributes(),h=S.defaultAttributeValues;for(let t in i){let v=i[t];if(v.location>=0){let g=c[t];if(g===void 0){if(t==="instanceMatrix"&&w.instanceMatrix)g=w.instanceMatrix;if(t==="instanceColor"&&w.instanceColor)g=w.instanceColor}if(g!==void 0){let{normalized:p,itemSize:O0}=g,L0=$.get(g);if(L0===void 0)continue;let{buffer:g0,type:M0,bytesPerElement:d}=L0,Y0=M0===J.INT||M0===J.UNSIGNED_INT||g.gpuType===SQ;if(g.isInterleavedBufferAttribute){let X0=g.data,Z0=X0.stride,k0=g.offset;if(X0.isInstancedInterleavedBuffer){for(let Q0=0;Q0<v.locationSize;Q0++)E(v.location+Q0,X0.meshPerAttribute);if(w.isInstancedMesh!==!0&&y._maxInstanceCount===void 0)y._maxInstanceCount=X0.meshPerAttribute*X0.count}else for(let Q0=0;Q0<v.locationSize;Q0++)O(v.location+Q0);J.bindBuffer(J.ARRAY_BUFFER,g0);for(let Q0=0;Q0<v.locationSize;Q0++)P(v.location+Q0,O0/v.locationSize,M0,p,Z0*d,(k0+O0/v.locationSize*Q0)*d,Y0)}else{if(g.isInstancedBufferAttribute){for(let X0=0;X0<v.locationSize;X0++)E(v.location+X0,g.meshPerAttribute);if(w.isInstancedMesh!==!0&&y._maxInstanceCount===void 0)y._maxInstanceCount=g.meshPerAttribute*g.count}else for(let X0=0;X0<v.locationSize;X0++)O(v.location+X0);J.bindBuffer(J.ARRAY_BUFFER,g0);for(let X0=0;X0<v.locationSize;X0++)P(v.location+X0,O0/v.locationSize,M0,p,O0*d,O0/v.locationSize*X0*d,Y0)}}else if(h!==void 0){let p=h[t];if(p!==void 0)switch(p.length){case 2:J.vertexAttrib2fv(v.location,p);break;case 3:J.vertexAttrib3fv(v.location,p);break;case 4:J.vertexAttrib4fv(v.location,p);break;default:J.vertexAttrib1fv(v.location,p)}}}}C()}function z(){V();for(let w in Z){let S=Z[w];for(let n in S){let y=S[n];for(let c in y){let i=y[c];for(let h in i)q(i[h].object),delete i[h];delete y[c]}}delete Z[w]}}function _(w){if(Z[w.id]===void 0)return;let S=Z[w.id];for(let n in S){let y=S[n];for(let c in y){let i=y[c];for(let h in i)q(i[h].object),delete i[h];delete y[c]}}delete Z[w.id]}function A(w){for(let S in Z){let n=Z[S];for(let y in n){let c=n[y];if(c[w.id]===void 0)continue;let i=c[w.id];for(let h in i)q(i[h].object),delete i[h];delete c[w.id]}}}function D(w){for(let S in Z){let n=Z[S],y=w.isInstancedMesh===!0?w.id:0,c=n[y];if(c===void 0)continue;for(let i in c){let h=c[i];for(let t in h)q(h[t].object),delete h[t];delete c[i]}if(delete n[y],Object.keys(n).length===0)delete Z[S]}}function V(){if(T(),Y=!0,W===K)return;W=K,H(W.object)}function T(){K.geometry=null,K.program=null,K.wireframe=!1}return{setup:X,reset:V,resetDefaultState:T,dispose:z,releaseStatesOfGeometry:_,releaseStatesOfObject:D,releaseStatesOfProgram:A,initAttributes:B,enableAttribute:O,disableUnusedAttributes:C}}function Yq(J,$,Q){let Z;function K(U){Z=U}function W(U,H){J.drawArrays(Z,U,H),Q.update(H,Z,1)}function Y(U,H,q){if(q===0)return;J.drawArraysInstanced(Z,U,H,q),Q.update(H,Z,q)}function X(U,H,q){if(q===0)return;$.get("WEBGL_multi_draw").multiDrawArraysWEBGL(Z,U,0,H,0,q);let G=0;for(let F=0;F<q;F++)G+=H[F];Q.update(G,Z,1)}this.setMode=K,this.render=W,this.renderInstances=Y,this.renderMultiDraw=X}function Xq(J,$,Q,Z){let K;function W(){if(K!==void 0)return K;if($.has("EXT_texture_filter_anisotropic")===!0){let A=$.get("EXT_texture_filter_anisotropic");K=J.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else K=0;return K}function Y(A){if(A!==y9&&Z.convert(A)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function X(A){let D=A===tJ&&($.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float"));if(A!==C9&&A!==U8&&!D&&Z.convert(A)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function U(A){if(A==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";A="mediump"}if(A==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let H=Q.precision!==void 0?Q.precision:"highp",q=U(H);if(q!==H)QJ("WebGLRenderer:",H,"not supported, using",q,"instead."),H=q;let N=Q.logarithmicDepthBuffer===!0,G=Q.reversedDepthBuffer===!0&&$.has("EXT_clip_control");if(Q.reversedDepthBuffer===!0&&G===!1)QJ("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let F=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),M=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),B=J.getParameter(J.MAX_TEXTURE_SIZE),O=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),E=J.getParameter(J.MAX_VERTEX_ATTRIBS),C=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),P=J.getParameter(J.MAX_VARYING_VECTORS),k=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),z=J.getParameter(J.MAX_SAMPLES),_=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:W,getMaxPrecision:U,textureFormatReadable:Y,textureTypeReadable:X,precision:H,logarithmicDepthBuffer:N,reversedDepthBuffer:G,maxTextures:F,maxVertexTextures:M,maxTextureSize:B,maxCubemapSize:O,maxAttributes:E,maxVertexUniforms:C,maxVaryings:P,maxFragmentUniforms:k,maxSamples:z,samples:_}}function Uq(J){let $=this,Q=null,Z=0,K=!1,W=!1,Y=new i9,X=new UJ,U={value:null,needsUpdate:!1};this.uniform=U,this.numPlanes=0,this.numIntersection=0,this.init=function(N,G){let F=N.length!==0||G||Z!==0||K;return K=G,Z=N.length,F},this.beginShadows=function(){W=!0,q(null)},this.endShadows=function(){W=!1},this.setGlobalState=function(N,G){Q=q(N,G,0)},this.setState=function(N,G,F){let{clippingPlanes:M,clipIntersection:B,clipShadows:O}=N,E=J.get(N);if(!K||M===null||M.length===0||W&&!O)if(W)q(null);else H();else{let C=W?0:Z,P=C*4,k=E.clippingState||null;U.value=k,k=q(M,G,P,F);for(let z=0;z!==P;++z)k[z]=Q[z];E.clippingState=k,this.numIntersection=B?this.numPlanes:0,this.numPlanes+=C}};function H(){if(U.value!==Q)U.value=Q,U.needsUpdate=Z>0;$.numPlanes=Z,$.numIntersection=0}function q(N,G,F,M){let B=N!==null?N.length:0,O=null;if(B!==0){if(O=U.value,M!==!0||O===null){let E=F+B*4,C=G.matrixWorldInverse;if(X.getNormalMatrix(C),O===null||O.length<E)O=new Float32Array(E);for(let P=0,k=F;P!==B;++P,k+=4)Y.copy(N[P]).applyMatrix4(C,X),Y.normal.toArray(O,k),O[k+3]=Y.constant}U.value=O,U.needsUpdate=!0}return $.numPlanes=B,$.numIntersection=0,O}}var j6=4,Hq=6,Gq=20,qq=256,M7=new T6,TY=new WJ,lZ=null,dZ=0,cZ=0,nZ=!1,Nq=new x,o8=new x;class oZ{constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(J,$=0,Q=0.1,Z=100,K={}){let{size:W=256,position:Y=Nq}=K;lZ=this._renderer.getRenderTarget(),dZ=this._renderer.getActiveCubeFace(),cZ=this._renderer.getActiveMipmapLevel(),nZ=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(W);let X=this._allocateTargets();if(X.depthBuffer=!0,this._sceneToCubeUV(J,Q,Z,X,Y),$>0)this._blur(X,0,0,$);return this._applyPMREM(X),this._cleanup(X),X}fromEquirectangular(J,$=null){return this._fromTexture(J,$)}fromCubemap(J,$=null){return this._fromTexture(J,$)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=vY(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=jY(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodMeshes.length;J++)this._lodMeshes[J].geometry.dispose()}_cleanup(J){this._renderer.setRenderTarget(lZ,dZ,cZ),this._renderer.xr.enabled=nZ,J.scissorTest=!1,S6(J,0,0,J.width,J.height)}_fromTexture(J,$){if(J.mapping===R6||J.mapping===h8)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);lZ=this._renderer.getRenderTarget(),dZ=this._renderer.getActiveCubeFace(),cZ=this._renderer.getActiveMipmapLevel(),nZ=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let Q=$||this._allocateTargets();return this._textureToCubeUV(J,Q),this._applyPMREM(Q),this._cleanup(Q),Q}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),$=4*this._cubeSize,Q={magFilter:L9,minFilter:L9,generateMipmaps:!1,type:tJ,format:y9,colorSpace:P6,depthBuffer:!1},Z=SY(J,$,Q);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==$){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=SY(J,$,Q);let{_lodMax:K}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Fq(K)),this._blurMaterial=Eq(K,J,$),this._ggxMaterial=Oq(K,J,$)}return Z}_compileMaterial(J){let $=new GJ(new hJ,J);this._renderer.compile($,M7)}_sceneToCubeUV(J,$,Q,Z,K){let X=new E9(90,1,$,Q),U=[1,-1,1,1,1,1],H=[1,1,1,-1,-1,-1],q=this._renderer,N=q.autoClear,G=q.toneMapping;if(q.getClearColor(TY),q.toneMapping=R9,q.autoClear=!1,q.state.buffers.depth.getReversed())q.setRenderTarget(Z),q.clearDepth(),q.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new GJ(new w6,new P8({name:"PMREM.Background",side:X9,depthWrite:!1,depthTest:!1}));let M=this._backgroundBox,B=M.material,O=!1,E=J.background;if(E){if(E.isColor)B.color.copy(E),J.background=null,O=!0}else B.color.copy(TY),O=!0;for(let C=0;C<6;C++){let P=C%3;if(P===0)X.up.set(0,U[C],0),X.position.set(K.x,K.y,K.z),X.lookAt(K.x+H[C],K.y,K.z);else if(P===1)X.up.set(0,0,U[C]),X.position.set(K.x,K.y,K.z),X.lookAt(K.x,K.y+H[C],K.z);else X.up.set(0,U[C],0),X.position.set(K.x,K.y,K.z),X.lookAt(K.x,K.y,K.z+H[C]);let k=this._cubeSize;if(S6(Z,P*k,C>2?k:0,k,k),q.setRenderTarget(Z),O)q.render(M,X);q.render(J,X)}q.toneMapping=G,q.autoClear=N,J.background=E}_textureToCubeUV(J,$){let Q=this._renderer,Z=J.mapping===R6||J.mapping===h8;if(Z){if(this._cubemapMaterial===null)this._cubemapMaterial=vY();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=jY();let K=Z?this._cubemapMaterial:this._equirectMaterial,W=this._lodMeshes[0];W.material=K;let Y=K.uniforms;Y.envMap.value=J;let X=this._cubeSize;S6($,0,0,3*X,2*X),Q.setRenderTarget($),Q.render(W,M7)}_applyPMREM(J){let $=this._renderer,Q=$.autoClear;$.autoClear=!1;let Z=this._lodMeshes.length;for(let K=1;K<Z;K++)this._applyGGXFilter(J,K-1,K);$.autoClear=Q}_applyGGXFilter(J,$,Q){let Z=this._renderer,K=this._pingPongRenderTarget,W=this._ggxMaterial,Y=this._lodMeshes[Q];Y.material=W;let X=W.uniforms,U=Q/(this._lodMeshes.length-1),H=$/(this._lodMeshes.length-1),q=Math.sqrt(U*U-H*H),N=U*1.25,G=q*N,{_lodMax:F}=this,M=this._sizeLods[Q],B=3*M*(Q>F-j6?Q-F+j6:0),O=4*(this._cubeSize-M);X.envMap.value=J.texture,X.roughness.value=G,X.mipInt.value=F-$,S6(K,B,O,3*M,2*M),Z.setRenderTarget(K),Z.render(Y,M7),X.envMap.value=K.texture,X.roughness.value=0,X.mipInt.value=F-Q,S6(J,B,O,3*M,2*M),Z.setRenderTarget(J),Z.render(Y,M7)}_blur(J,$,Q,Z){let K=this._pingPongRenderTarget,W=Math.min(Z,Math.PI)/Math.SQRT2;this._blurPass(J,K,$,Q,W),this._blurPass(K,J,Q,Q,W)}_blurPass(J,$,Q,Z,K){let W=this._renderer,Y=this._blurMaterial,X=this._lodMeshes[Z];X.material=Y;let U=Y.uniforms;U.envMap.value=J.texture,U.sigma.value=K,U.mipInt.value=this._lodMax-Q;let H=this._sizeLods[Z],q=3*H*(Z>this._lodMax-j6?Z-this._lodMax+j6:0),N=4*(this._cubeSize-H);S6($,q,N,3*H,2*H),W.setRenderTarget($),W.render(X,M7)}}function Fq(J){let $=[],Q=[],Z=J,K=J-j6+1+Hq;for(let W=0;W<K;W++){let Y=Math.pow(2,Z);$.push(Y);let X=1/(Y-2),U=-X,H=1+X,q=[U,U,H,U,H,H,U,U,H,H,U,H],N=6,G=6,F=3,M=new Float32Array(F*G*N),B=new Float32Array(F*G*N);for(let E=0;E<N;E++){let C=E%3*2/3-1,P=E>2?0:-1,k=[C,P,0,C+0.6666666666666666,P,0,C+0.6666666666666666,P+1,0,C,P,0,C+0.6666666666666666,P+1,0,C,P+1,0];M.set(k,F*G*E);for(let z=0;z<G;z++){let _=q[z*2]*2-1,A=q[z*2+1]*2-1;if(E===0)o8.set(1,A,_);else if(E===1)o8.set(-_,1,-A);else if(E===2)o8.set(-_,A,1);else if(E===3)o8.set(-1,A,-_);else if(E===4)o8.set(-_,-1,A);else o8.set(_,A,-1);o8.toArray(B,(E*G+z)*F)}}let O=new hJ;if(O.setAttribute("position",new gJ(M,F)),O.setAttribute("outputDirection",new gJ(B,F)),Q.push(new GJ(O,null)),Z>j6)Z--}return{lodMeshes:Q,sizeLods:$}}function SY(J,$,Q){let Z=new pJ(J,$,Q);return Z.texture.mapping=X7,Z.texture.name="PMREM.cubeUv",Z.scissorTest=!0,Z}function S6(J,$,Q,Z,K){J.viewport.set($,Q,Z,K),J.scissor.set($,Q,Z,K)}function Oq(J,$,Q){return new ZJ({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:qq,CUBEUV_TEXEL_WIDTH:1/$,CUBEUV_TEXEL_HEIGHT:1/Q,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:T$(),fragmentShader:`

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
		`,blending:v9,depthTest:!1,depthWrite:!1})}function Eq(J,$,Q){return new ZJ({name:"SphericalGaussianBlur",defines:{SAMPLES:Gq,CUBEUV_TEXEL_WIDTH:1/$,CUBEUV_TEXEL_HEIGHT:1/Q,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:T$(),fragmentShader:`

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
		`,blending:v9,depthTest:!1,depthWrite:!1})}function jY(){return new ZJ({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:T$(),fragmentShader:`

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
		`,blending:v9,depthTest:!1,depthWrite:!1})}function vY(){return new ZJ({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:T$(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:v9,depthTest:!1,depthWrite:!1})}function T$(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class tZ extends pJ{constructor(J=1,$={}){super(J,J,$);this.isWebGLCubeRenderTarget=!0;let Q={width:J,height:J,depth:1},Z=[Q,Q,Q,Q,Q,Q];this.texture=new z$(Z),this._setTextureOptions($),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,$){this.texture.type=$.type,this.texture.colorSpace=$.colorSpace,this.texture.generateMipmaps=$.generateMipmaps,this.texture.minFilter=$.minFilter,this.texture.magFilter=$.magFilter;let Q={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},Z=new w6(5,5,5),K=new ZJ({name:"CubemapFromEquirect",uniforms:c8(Q.uniforms),vertexShader:Q.vertexShader,fragmentShader:Q.fragmentShader,side:X9,blending:v9});K.uniforms.tEquirect.value=$;let W=new GJ(Z,K),Y=$.minFilter;if($.minFilter===x8)$.minFilter=L9;return new hZ(1,10,this).update(J,W),$.minFilter=Y,W.geometry.dispose(),W.material.dispose(),this}clear(J,$=!0,Q=!0,Z=!0){let K=J.getRenderTarget();for(let W=0;W<6;W++)J.setRenderTarget(this,W),J.clear($,Q,Z);J.setRenderTarget(K)}}function Mq(J){let $=new WeakMap,Q=new WeakMap,Z=null;function K(G,F=!1){if(G===null||G===void 0)return null;if(F)return Y(G);return W(G)}function W(G){if(G&&G.isTexture){let F=G.mapping;if(F===K$||F===W$)if($.has(G)){let M=$.get(G).texture;return X(M,G.mapping)}else{let M=G.image;if(M&&M.height>0){let B=new tZ(M.height);return B.fromEquirectangularTexture(J,G),$.set(G,B),G.addEventListener("dispose",H),X(B.texture,G.mapping)}else return null}}return G}function Y(G){if(G&&G.isTexture){let F=G.mapping,M=F===K$||F===W$,B=F===R6||F===h8;if(M||B){let O=Q.get(G),E=O!==void 0?O.texture.pmremVersion:0;if(G.isRenderTargetTexture&&G.pmremVersion!==E){if(Z===null)Z=new oZ(J);return O=M?Z.fromEquirectangular(G,O):Z.fromCubemap(G,O),O.texture.pmremVersion=G.pmremVersion,Q.set(G,O),O.texture}else if(O!==void 0)return O.texture;else{let C=G.image;if(M&&C&&C.height>0||B&&C&&U(C)){if(Z===null)Z=new oZ(J);return O=M?Z.fromEquirectangular(G):Z.fromCubemap(G),O.texture.pmremVersion=G.pmremVersion,Q.set(G,O),G.addEventListener("dispose",q),O.texture}else return null}}}return G}function X(G,F){if(F===K$)G.mapping=R6;else if(F===W$)G.mapping=h8;return G}function U(G){let F=0,M=6;for(let B=0;B<M;B++)if(G[B]!==void 0)F++;return F===M}function H(G){let F=G.target;F.removeEventListener("dispose",H);let M=$.get(F);if(M!==void 0)$.delete(F),M.dispose()}function q(G){let F=G.target;F.removeEventListener("dispose",q);let M=Q.get(F);if(M!==void 0)Q.delete(F),M.dispose()}function N(){if($=new WeakMap,Q=new WeakMap,Z!==null)Z.dispose(),Z=null}return{get:K,dispose:N}}function Dq(J){let $={};function Q(Z){if($[Z]!==void 0)return $[Z];let K=J.getExtension(Z);return $[Z]=K,K}return{has:function(Z){return Q(Z)!==null},init:function(){Q("EXT_color_buffer_float"),Q("WEBGL_clip_cull_distance"),Q("OES_texture_float_linear"),Q("EXT_color_buffer_half_float"),Q("WEBGL_multisampled_render_to_texture"),Q("WEBGL_render_shared_exponent")},get:function(Z){let K=Q(Z);if(K===null)f8("WebGLRenderer: "+Z+" extension not supported.");return K}}}function Vq(J,$,Q,Z){let K={},W=new WeakMap;function Y(N){let G=N.target;if(G.index!==null)$.remove(G.index);for(let M in G.attributes)$.remove(G.attributes[M]);G.removeEventListener("dispose",Y),delete K[G.id];let F=W.get(G);if(F)$.remove(F),W.delete(G);if(Z.releaseStatesOfGeometry(G),G.isInstancedBufferGeometry===!0)delete G._maxInstanceCount;Q.memory.geometries--}function X(N,G){if(K[G.id]===!0)return G;return G.addEventListener("dispose",Y),K[G.id]=!0,Q.memory.geometries++,G}function U(N){let G=N.attributes;for(let F in G)$.update(G[F],J.ARRAY_BUFFER)}function H(N){let G=[],F=N.index,M=N.attributes.position,B=0;if(M===void 0)return;if(F!==null){let C=F.array;B=F.version;for(let P=0,k=C.length;P<k;P+=3){let z=C[P+0],_=C[P+1],A=C[P+2];G.push(z,_,_,A,A,z)}}else{let C=M.array;B=M.version;for(let P=0,k=C.length/3-1;P<k;P+=3){let z=P+0,_=P+1,A=P+2;G.push(z,_,_,A,A,z)}}let O=new(M.count>=65535?B$:L$)(G,1);O.version=B;let E=W.get(N);if(E)$.remove(E);W.set(N,O)}function q(N){let G=W.get(N);if(G){let F=N.index;if(F!==null){if(G.version<F.version)H(N)}}else H(N);return W.get(N)}return{get:X,update:U,getWireframeAttribute:q}}function Lq(J,$,Q){let Z;function K(N){Z=N}let W,Y;function X(N){W=N.type,Y=N.bytesPerElement}function U(N,G){J.drawElements(Z,G,W,N*Y),Q.update(G,Z,1)}function H(N,G,F){if(F===0)return;J.drawElementsInstanced(Z,G,W,N*Y,F),Q.update(G,Z,F)}function q(N,G,F){if(F===0)return;$.get("WEBGL_multi_draw").multiDrawElementsWEBGL(Z,G,0,W,N,0,F);let B=0;for(let O=0;O<F;O++)B+=G[O];Q.update(B,Z,1)}this.setMode=K,this.setIndex=X,this.render=U,this.renderInstances=H,this.renderMultiDraw=q}function Bq(J){let $={geometries:0,textures:0},Q={frame:0,calls:0,triangles:0,points:0,lines:0};function Z(W,Y,X){switch(Q.calls++,Y){case J.TRIANGLES:Q.triangles+=X*(W/3);break;case J.LINES:Q.lines+=X*(W/2);break;case J.LINE_STRIP:Q.lines+=X*(W-1);break;case J.LINE_LOOP:Q.lines+=X*W;break;case J.POINTS:Q.points+=X*W;break;default:KJ("WebGLInfo: Unknown draw mode:",Y);break}}function K(){Q.calls=0,Q.triangles=0,Q.points=0,Q.lines=0}return{memory:$,render:Q,programs:null,autoReset:!0,reset:K,update:Z}}function kq(J,$,Q){let Z=new WeakMap,K=new jJ;function W(Y,X,U){let H=Y.morphTargetInfluences,q=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,N=q!==void 0?q.length:0,G=Z.get(X);if(G===void 0||G.count!==N){let V=function(){A.dispose(),Z.delete(X),X.removeEventListener("dispose",V)};if(G!==void 0)G.texture.dispose();let F=X.morphAttributes.position!==void 0,M=X.morphAttributes.normal!==void 0,B=X.morphAttributes.color!==void 0,O=X.morphAttributes.position||[],E=X.morphAttributes.normal||[],C=X.morphAttributes.color||[],P=0;if(F===!0)P=1;if(M===!0)P=2;if(B===!0)P=3;let k=X.attributes.position.count*P,z=1;if(k>$.maxTextureSize)z=Math.ceil(k/$.maxTextureSize),k=$.maxTextureSize;let _=new Float32Array(k*z*4*N),A=new M$(_,k,z,N);A.type=U8,A.needsUpdate=!0;let D=P*4;for(let T=0;T<N;T++){let w=O[T],S=E[T],n=C[T],y=k*z*4*T;for(let c=0;c<w.count;c++){let i=c*D;if(F===!0)K.fromBufferAttribute(w,c),_[y+i+0]=K.x,_[y+i+1]=K.y,_[y+i+2]=K.z,_[y+i+3]=0;if(M===!0)K.fromBufferAttribute(S,c),_[y+i+4]=K.x,_[y+i+5]=K.y,_[y+i+6]=K.z,_[y+i+7]=0;if(B===!0)K.fromBufferAttribute(n,c),_[y+i+8]=K.x,_[y+i+9]=K.y,_[y+i+10]=K.z,_[y+i+11]=n.itemSize===4?K.w:1}}G={count:N,texture:A,size:new o0(k,z)},Z.set(X,G),X.addEventListener("dispose",V)}if(Y.isInstancedMesh===!0&&Y.morphTexture!==null)U.getUniforms().setValue(J,"morphTexture",Y.morphTexture,Q);else{let F=0;for(let B=0;B<H.length;B++)F+=H[B];let M=X.morphTargetsRelative?1:1-F;U.getUniforms().setValue(J,"morphTargetBaseInfluence",M),U.getUniforms().setValue(J,"morphTargetInfluences",H)}U.getUniforms().setValue(J,"morphTargetsTexture",G.texture,Q),U.getUniforms().setValue(J,"morphTargetsTextureSize",G.size)}return{update:W}}function Iq(J,$,Q,Z,K){let W=new WeakMap;function Y(H){let q=K.render.frame,N=H.geometry,G=$.get(H,N);if(W.get(G)!==q)$.update(G),W.set(G,q);if(H.isInstancedMesh){if(H.hasEventListener("dispose",U)===!1)H.addEventListener("dispose",U);if(W.get(H)!==q){if(Q.update(H.instanceMatrix,J.ARRAY_BUFFER),H.instanceColor!==null)Q.update(H.instanceColor,J.ARRAY_BUFFER);W.set(H,q)}}if(H.isSkinnedMesh){let F=H.skeleton;if(W.get(F)!==q)F.update(),W.set(F,q)}return G}function X(){W=new WeakMap}function U(H){let q=H.target;if(q.removeEventListener("dispose",U),Z.releaseStatesOfObject(q),Q.remove(q.instanceMatrix),q.instanceColor!==null)Q.remove(q.instanceColor)}return{update:Y,dispose:X}}var zq={[J7]:"LINEAR_TONE_MAPPING",[$7]:"REINHARD_TONE_MAPPING",[Q7]:"CINEON_TONE_MAPPING",[Z7]:"ACES_FILMIC_TONE_MAPPING",[W7]:"AGX_TONE_MAPPING",[Y7]:"NEUTRAL_TONE_MAPPING",[K7]:"CUSTOM_TONE_MAPPING"};function Rq(J,$,Q,Z,K,W){let Y=new pJ($,Q,{type:J,depthBuffer:K,stencilBuffer:W,samples:Z?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),X=null,U=null,H=new hJ;H.setAttribute("position",new kJ([-1,3,0,-1,-1,0,3,-1,0],3)),H.setAttribute("uv",new kJ([0,2,0,0,2,0],2));let q=new E7({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),N=new GJ(H,q),G=new T6(-1,1,1,-1,0,1),F=null,M=null,B=!1,O,E=null,C=[],P=!1;this.setSize=function(k,z){if(Y.setSize(k,z),X!==null)X.setSize(k,z);if(U!==null)U.setSize(k,z);for(let _=0;_<C.length;_++){let A=C[_];if(A.setSize)A.setSize(k,z)}},this.setEffects=function(k){C=k,P=C.length>0&&C[0].isRenderPass===!0;let{width:z,height:_}=Y;if(C.length>0&&X===null)X=new pJ(z,_,{type:tJ,depthBuffer:!1,stencilBuffer:!1}),U=new pJ(z,_,{type:tJ,depthBuffer:!1,stencilBuffer:!1});for(let A=0;A<C.length;A++){let D=C[A];if(D.setSize)D.setSize(z,_)}},this.begin=function(k,z){if(B)return!1;if(k.toneMapping===R9&&C.length===0)return!1;if(E=z,z!==null){let{width:_,height:A}=z;if(Y.width!==_||Y.height!==A)this.setSize(_,A)}if(P===!1)k.setRenderTarget(Y);return O=k.toneMapping,k.toneMapping=R9,!0},this.hasRenderPass=function(){return P},this.end=function(k,z){k.toneMapping=O,B=!0;let _=Y,A=X;for(let D=0;D<C.length;D++){let V=C[D];if(V.enabled===!1)continue;if(V.render(k,A,_,z),V.needsSwap!==!1)_=A,A=A===X?U:X}if(F!==k.outputColorSpace||M!==k.toneMapping){if(F=k.outputColorSpace,M=k.toneMapping,q.defines={},FJ.getTransfer(F)===RJ)q.defines.SRGB_TRANSFER="";let D=zq[M];if(D)q.defines[D]="";q.needsUpdate=!0}q.uniforms.tDiffuse.value=_.texture,k.setRenderTarget(E),k.render(N,G),E=null,B=!1},this.isCompositing=function(){return B},this.dispose=function(){if(Y.dispose(),X!==null)X.dispose();if(U!==null)U.dispose();H.dispose(),q.dispose()}}var eY=new W9,aZ=new d8(1,1),JX=new M$,$X=new LZ,QX=new z$,yY=[],bY=[],fY=new Float32Array(16),hY=new Float32Array(9),xY=new Float32Array(4);function v6(J,$,Q){let Z=J[0];if(Z<=0||Z>0)return J;let K=$*Q,W=yY[K];if(W===void 0)W=new Float32Array(K),yY[K]=W;if($!==0){Z.toArray(W,0);for(let Y=1,X=0;Y!==$;++Y)X+=Q,J[Y].toArray(W,X)}return W}function nJ(J,$){if(J.length!==$.length)return!1;for(let Q=0,Z=J.length;Q<Z;Q++)if(J[Q]!==$[Q])return!1;return!0}function sJ(J,$){for(let Q=0,Z=$.length;Q<Z;Q++)J[Q]=$[Q]}function S$(J,$){let Q=bY[$];if(Q===void 0)Q=new Int32Array($),bY[$]=Q;for(let Z=0;Z!==$;++Z)Q[Z]=J.allocateTextureUnit();return Q}function Cq(J,$){let Q=this.cache;if(Q[0]===$)return;J.uniform1f(this.addr,$),Q[0]=$}function _q(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y)J.uniform2f(this.addr,$.x,$.y),Q[0]=$.x,Q[1]=$.y}else{if(nJ(Q,$))return;J.uniform2fv(this.addr,$),sJ(Q,$)}}function Pq(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y||Q[2]!==$.z)J.uniform3f(this.addr,$.x,$.y,$.z),Q[0]=$.x,Q[1]=$.y,Q[2]=$.z}else if($.r!==void 0){if(Q[0]!==$.r||Q[1]!==$.g||Q[2]!==$.b)J.uniform3f(this.addr,$.r,$.g,$.b),Q[0]=$.r,Q[1]=$.g,Q[2]=$.b}else{if(nJ(Q,$))return;J.uniform3fv(this.addr,$),sJ(Q,$)}}function Aq(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y||Q[2]!==$.z||Q[3]!==$.w)J.uniform4f(this.addr,$.x,$.y,$.z,$.w),Q[0]=$.x,Q[1]=$.y,Q[2]=$.z,Q[3]=$.w}else{if(nJ(Q,$))return;J.uniform4fv(this.addr,$),sJ(Q,$)}}function wq(J,$){let Q=this.cache,Z=$.elements;if(Z===void 0){if(nJ(Q,$))return;J.uniformMatrix2fv(this.addr,!1,$),sJ(Q,$)}else{if(nJ(Q,Z))return;xY.set(Z),J.uniformMatrix2fv(this.addr,!1,xY),sJ(Q,Z)}}function Tq(J,$){let Q=this.cache,Z=$.elements;if(Z===void 0){if(nJ(Q,$))return;J.uniformMatrix3fv(this.addr,!1,$),sJ(Q,$)}else{if(nJ(Q,Z))return;hY.set(Z),J.uniformMatrix3fv(this.addr,!1,hY),sJ(Q,Z)}}function Sq(J,$){let Q=this.cache,Z=$.elements;if(Z===void 0){if(nJ(Q,$))return;J.uniformMatrix4fv(this.addr,!1,$),sJ(Q,$)}else{if(nJ(Q,Z))return;fY.set(Z),J.uniformMatrix4fv(this.addr,!1,fY),sJ(Q,Z)}}function jq(J,$){let Q=this.cache;if(Q[0]===$)return;J.uniform1i(this.addr,$),Q[0]=$}function vq(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y)J.uniform2i(this.addr,$.x,$.y),Q[0]=$.x,Q[1]=$.y}else{if(nJ(Q,$))return;J.uniform2iv(this.addr,$),sJ(Q,$)}}function yq(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y||Q[2]!==$.z)J.uniform3i(this.addr,$.x,$.y,$.z),Q[0]=$.x,Q[1]=$.y,Q[2]=$.z}else{if(nJ(Q,$))return;J.uniform3iv(this.addr,$),sJ(Q,$)}}function bq(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y||Q[2]!==$.z||Q[3]!==$.w)J.uniform4i(this.addr,$.x,$.y,$.z,$.w),Q[0]=$.x,Q[1]=$.y,Q[2]=$.z,Q[3]=$.w}else{if(nJ(Q,$))return;J.uniform4iv(this.addr,$),sJ(Q,$)}}function fq(J,$){let Q=this.cache;if(Q[0]===$)return;J.uniform1ui(this.addr,$),Q[0]=$}function hq(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y)J.uniform2ui(this.addr,$.x,$.y),Q[0]=$.x,Q[1]=$.y}else{if(nJ(Q,$))return;J.uniform2uiv(this.addr,$),sJ(Q,$)}}function xq(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y||Q[2]!==$.z)J.uniform3ui(this.addr,$.x,$.y,$.z),Q[0]=$.x,Q[1]=$.y,Q[2]=$.z}else{if(nJ(Q,$))return;J.uniform3uiv(this.addr,$),sJ(Q,$)}}function gq(J,$){let Q=this.cache;if($.x!==void 0){if(Q[0]!==$.x||Q[1]!==$.y||Q[2]!==$.z||Q[3]!==$.w)J.uniform4ui(this.addr,$.x,$.y,$.z,$.w),Q[0]=$.x,Q[1]=$.y,Q[2]=$.z,Q[3]=$.w}else{if(nJ(Q,$))return;J.uniform4uiv(this.addr,$),sJ(Q,$)}}function pq(J,$,Q){let Z=this.cache,K=Q.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;let W;if(this.type===J.SAMPLER_2D_SHADOW)aZ.compareFunction=Q.isReversedDepthBuffer()?E$:O$,W=aZ;else W=eY;Q.setTexture2D($||W,K)}function mq(J,$,Q){let Z=this.cache,K=Q.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;Q.setTexture3D($||$X,K)}function uq(J,$,Q){let Z=this.cache,K=Q.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;Q.setTextureCube($||QX,K)}function lq(J,$,Q){let Z=this.cache,K=Q.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;Q.setTexture2DArray($||JX,K)}function dq(J){switch(J){case 5126:return Cq;case 35664:return _q;case 35665:return Pq;case 35666:return Aq;case 35674:return wq;case 35675:return Tq;case 35676:return Sq;case 5124:case 35670:return jq;case 35667:case 35671:return vq;case 35668:case 35672:return yq;case 35669:case 35673:return bq;case 5125:return fq;case 36294:return hq;case 36295:return xq;case 36296:return gq;case 35678:case 36198:case 36298:case 36306:case 35682:return pq;case 35679:case 36299:case 36307:return mq;case 35680:case 36300:case 36308:case 36293:return uq;case 36289:case 36303:case 36311:case 36292:return lq}}function cq(J,$){J.uniform1fv(this.addr,$)}function nq(J,$){let Q=v6($,this.size,2);J.uniform2fv(this.addr,Q)}function sq(J,$){let Q=v6($,this.size,3);J.uniform3fv(this.addr,Q)}function iq(J,$){let Q=v6($,this.size,4);J.uniform4fv(this.addr,Q)}function oq(J,$){let Q=v6($,this.size,4);J.uniformMatrix2fv(this.addr,!1,Q)}function aq(J,$){let Q=v6($,this.size,9);J.uniformMatrix3fv(this.addr,!1,Q)}function rq(J,$){let Q=v6($,this.size,16);J.uniformMatrix4fv(this.addr,!1,Q)}function tq(J,$){J.uniform1iv(this.addr,$)}function eq(J,$){J.uniform2iv(this.addr,$)}function JN(J,$){J.uniform3iv(this.addr,$)}function $N(J,$){J.uniform4iv(this.addr,$)}function QN(J,$){J.uniform1uiv(this.addr,$)}function ZN(J,$){J.uniform2uiv(this.addr,$)}function KN(J,$){J.uniform3uiv(this.addr,$)}function WN(J,$){J.uniform4uiv(this.addr,$)}function YN(J,$,Q){let Z=this.cache,K=$.length,W=S$(Q,K);if(!nJ(Z,W))J.uniform1iv(this.addr,W),sJ(Z,W);let Y;if(this.type===J.SAMPLER_2D_SHADOW)Y=aZ;else Y=eY;for(let X=0;X!==K;++X)Q.setTexture2D($[X]||Y,W[X])}function XN(J,$,Q){let Z=this.cache,K=$.length,W=S$(Q,K);if(!nJ(Z,W))J.uniform1iv(this.addr,W),sJ(Z,W);for(let Y=0;Y!==K;++Y)Q.setTexture3D($[Y]||$X,W[Y])}function UN(J,$,Q){let Z=this.cache,K=$.length,W=S$(Q,K);if(!nJ(Z,W))J.uniform1iv(this.addr,W),sJ(Z,W);for(let Y=0;Y!==K;++Y)Q.setTextureCube($[Y]||QX,W[Y])}function HN(J,$,Q){let Z=this.cache,K=$.length,W=S$(Q,K);if(!nJ(Z,W))J.uniform1iv(this.addr,W),sJ(Z,W);for(let Y=0;Y!==K;++Y)Q.setTexture2DArray($[Y]||JX,W[Y])}function GN(J){switch(J){case 5126:return cq;case 35664:return nq;case 35665:return sq;case 35666:return iq;case 35674:return oq;case 35675:return aq;case 35676:return rq;case 5124:case 35670:return tq;case 35667:case 35671:return eq;case 35668:case 35672:return JN;case 35669:case 35673:return $N;case 5125:return QN;case 36294:return ZN;case 36295:return KN;case 36296:return WN;case 35678:case 36198:case 36298:case 36306:case 35682:return YN;case 35679:case 36299:case 36307:return XN;case 35680:case 36300:case 36308:case 36293:return UN;case 36289:case 36303:case 36311:case 36292:return HN}}class ZX{constructor(J,$,Q){this.id=J,this.addr=Q,this.cache=[],this.type=$.type,this.setValue=dq($.type)}}class KX{constructor(J,$,Q){this.id=J,this.addr=Q,this.cache=[],this.type=$.type,this.size=$.size,this.setValue=GN($.type)}}class WX{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,$,Q){let Z=this.seq;for(let K=0,W=Z.length;K!==W;++K){let Y=Z[K];Y.setValue(J,$[Y.id],Q)}}}var sZ=/(\w+)(\])?(\[|\.)?/g;function gY(J,$){J.seq.push($),J.map[$.id]=$}function qN(J,$,Q){let Z=J.name,K=Z.length;sZ.lastIndex=0;while(!0){let W=sZ.exec(Z),Y=sZ.lastIndex,X=W[1],U=W[2]==="]",H=W[3];if(U)X=X|0;if(H===void 0||H==="["&&Y+2===K){gY(Q,H===void 0?new ZX(X,J,$):new KX(X,J,$));break}else{let N=Q.map[X];if(N===void 0)N=new WX(X),gY(Q,N);Q=N}}}class L7{constructor(J,$){this.seq=[],this.map={};let Q=J.getProgramParameter($,J.ACTIVE_UNIFORMS);for(let W=0;W<Q;++W){let Y=J.getActiveUniform($,W),X=J.getUniformLocation($,Y.name);qN(Y,X,this)}let Z=[],K=[];for(let W of this.seq)if(W.type===J.SAMPLER_2D_SHADOW||W.type===J.SAMPLER_CUBE_SHADOW||W.type===J.SAMPLER_2D_ARRAY_SHADOW)Z.push(W);else K.push(W);if(Z.length>0)this.seq=Z.concat(K)}setValue(J,$,Q,Z){let K=this.map[$];if(K!==void 0)K.setValue(J,Q,Z)}setOptional(J,$,Q){let Z=$[Q];if(Z!==void 0)this.setValue(J,Q,Z)}static upload(J,$,Q,Z){for(let K=0,W=$.length;K!==W;++K){let Y=$[K],X=Q[Y.id];if(X.needsUpdate!==!1)Y.setValue(J,X.value,Z)}}static seqWithValue(J,$){let Q=[];for(let Z=0,K=J.length;Z!==K;++Z){let W=J[Z];if(W.id in $)Q.push(W)}return Q}}function pY(J,$,Q){let Z=J.createShader($);return J.shaderSource(Z,Q),J.compileShader(Z),Z}var NN=37297,FN=0;function ON(J,$){let Q=J.split(`
`),Z=[],K=Math.max($-6,0),W=Math.min($+6,Q.length);for(let Y=K;Y<W;Y++){let X=Y+1;Z.push(`${X===$?">":" "} ${X}: ${Q[Y]}`)}return Z.join(`
`)}var mY=new UJ;function EN(J){FJ._getMatrix(mY,FJ.workingColorSpace,J);let $=`mat3( ${mY.elements.map((Q)=>Q.toFixed(4))} )`;switch(FJ.getTransfer(J)){case OZ:return[$,"LinearTransferOETF"];case RJ:return[$,"sRGBTransferOETF"];default:return QJ("WebGLProgram: Unsupported color space: ",J),[$,"LinearTransferOETF"]}}function uY(J,$,Q){let Z=J.getShaderParameter($,J.COMPILE_STATUS),W=(J.getShaderInfoLog($)||"").trim();if(Z&&W==="")return"";let Y=/ERROR: 0:(\d+)/.exec(W);if(Y){let X=parseInt(Y[1]);return Q.toUpperCase()+`

`+W+`

`+ON(J.getShaderSource($),X)}else return W}function MN(J,$){let Q=EN($);return[`vec4 ${J}( vec4 value ) {`,`	return ${Q[1]}( vec4( value.rgb * ${Q[0]}, value.a ) );`,"}"].join(`
`)}var DN={[J7]:"Linear",[$7]:"Reinhard",[Q7]:"Cineon",[Z7]:"ACESFilmic",[W7]:"AgX",[Y7]:"Neutral",[K7]:"Custom"};function VN(J,$){let Q=DN[$];if(Q===void 0)return QJ("WebGLProgram: Unsupported toneMapping:",$),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+Q+"ToneMapping( color ); }"}var w$=new x;function LN(){FJ.getLuminanceCoefficients(w$);let J=w$.x.toFixed(4),$=w$.y.toFixed(4),Q=w$.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${$}, ${Q} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function BN(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(V7).join(`
`)}function kN(J){let $=[];for(let Q in J){let Z=J[Q];if(Z===!1)continue;$.push("#define "+Q+" "+Z)}return $.join(`
`)}function IN(J,$){let Q={},Z=J.getProgramParameter($,J.ACTIVE_ATTRIBUTES);for(let K=0;K<Z;K++){let W=J.getActiveAttrib($,K),Y=W.name,X=1;if(W.type===J.FLOAT_MAT2)X=2;if(W.type===J.FLOAT_MAT3)X=3;if(W.type===J.FLOAT_MAT4)X=4;Q[Y]={type:W.type,location:J.getAttribLocation($,Y),locationSize:X}}return Q}function V7(J){return J!==""}function lY(J,$){let Q=$.numSpotLightShadows+$.numSpotLightMaps-$.numSpotLightShadowsWithMaps;return J.replace(/NUM_SUN_LIGHTS/g,$.numSunLights).replace(/NUM_DIR_LIGHTS/g,$.numDirLights).replace(/NUM_SPOT_LIGHTS/g,$.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,$.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,Q).replace(/NUM_RECT_AREA_LIGHTS/g,$.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,$.numPointLights).replace(/NUM_HEMI_LIGHTS/g,$.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,$.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,$.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,$.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,$.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,$.numPointLightShadows)}function dY(J,$){return J.replace(/NUM_CLIPPING_PLANES/g,$.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,$.numClippingPlanes-$.numClipIntersection)}var zN=/^[ \t]*#include +<([\w\d./]+)>/gm;function rZ(J){return J.replace(zN,CN)}var RN=new Map;function CN(J,$){let Q=NJ[$];if(Q===void 0){let Z=RN.get($);if(Z!==void 0)Q=NJ[Z],QJ('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',$,Z);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+$+">")}return rZ(Q)}var _N=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cY(J){return J.replace(_N,PN)}function PN(J,$,Q,Z){let K="";for(let W=parseInt($);W<parseInt(Q);W++)K+=Z.replace(/\[\s*i\s*\]/g,"[ "+W+" ]").replace(/UNROLLED_LOOP_INDEX/g,W);return K}function nY(J){let $=`precision ${J.precision} float;
	precision ${J.precision} int;
	precision ${J.precision} sampler2D;
	precision ${J.precision} samplerCube;
	precision ${J.precision} sampler3D;
	precision ${J.precision} sampler2DArray;
	precision ${J.precision} sampler2DShadow;
	precision ${J.precision} samplerCubeShadow;
	precision ${J.precision} sampler2DArrayShadow;
	precision ${J.precision} isampler2D;
	precision ${J.precision} isampler3D;
	precision ${J.precision} isamplerCube;
	precision ${J.precision} isampler2DArray;
	precision ${J.precision} usampler2D;
	precision ${J.precision} usampler3D;
	precision ${J.precision} usamplerCube;
	precision ${J.precision} usampler2DArray;
	`;if(J.precision==="highp")$+=`
#define HIGH_PRECISION`;else if(J.precision==="mediump")$+=`
#define MEDIUM_PRECISION`;else if(J.precision==="lowp")$+=`
#define LOW_PRECISION`;return $}var AN={[e6]:"SHADOWMAP_TYPE_PCF",[k6]:"SHADOWMAP_TYPE_VSM"};function wN(J){return AN[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var TN={[R6]:"ENVMAP_TYPE_CUBE",[h8]:"ENVMAP_TYPE_CUBE",[X7]:"ENVMAP_TYPE_CUBE_UV"};function SN(J){if(J.envMap===!1)return"ENVMAP_TYPE_CUBE";return TN[J.envMapMode]||"ENVMAP_TYPE_CUBE"}var jN={[h8]:"ENVMAP_MODE_REFRACTION"};function vN(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return jN[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var yN={[QY]:"ENVMAP_BLENDING_MULTIPLY",[ZY]:"ENVMAP_BLENDING_MIX",[KY]:"ENVMAP_BLENDING_ADD"};function bN(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return yN[J.combine]||"ENVMAP_BLENDING_NONE"}function fN(J){let $=J.envMapCubeUVHeight;if($===null)return null;let Q=Math.log2($)-2,Z=1/$;return{texelWidth:1/(3*Math.max(Math.pow(2,Q),112)),texelHeight:Z,maxMip:Q}}function hN(J,$,Q,Z){let K=J.getContext(),W=Q.defines,Y=Q.vertexShader,X=Q.fragmentShader,U=wN(Q),H=SN(Q),q=vN(Q),N=bN(Q),G=fN(Q),F=BN(Q),M=kN(W),B=K.createProgram(),O,E,C=Q.glslVersion?"#version "+Q.glslVersion+`
`:"";if(Q.isRawShaderMaterial){if(O=["#define SHADER_TYPE "+Q.shaderType,"#define SHADER_NAME "+Q.shaderName,M].filter(V7).join(`
`),O.length>0)O+=`
`;if(E=["#define SHADER_TYPE "+Q.shaderType,"#define SHADER_NAME "+Q.shaderName,M].filter(V7).join(`
`),E.length>0)E+=`
`}else O=[nY(Q),"#define SHADER_TYPE "+Q.shaderType,"#define SHADER_NAME "+Q.shaderName,M,Q.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",Q.batching?"#define USE_BATCHING":"",Q.batchingColor?"#define USE_BATCHING_COLOR":"",Q.instancing?"#define USE_INSTANCING":"",Q.instancingColor?"#define USE_INSTANCING_COLOR":"",Q.instancingMorph?"#define USE_INSTANCING_MORPH":"",Q.useFog&&Q.fog?"#define USE_FOG":"",Q.useFog&&Q.fogExp2?"#define FOG_EXP2":"",Q.map?"#define USE_MAP":"",Q.envMap?"#define USE_ENVMAP":"",Q.envMap?"#define "+q:"",Q.lightMap?"#define USE_LIGHTMAP":"",Q.aoMap?"#define USE_AOMAP":"",Q.bumpMap?"#define USE_BUMPMAP":"",Q.normalMap?"#define USE_NORMALMAP":"",Q.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Q.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Q.displacementMap?"#define USE_DISPLACEMENTMAP":"",Q.emissiveMap?"#define USE_EMISSIVEMAP":"",Q.anisotropy?"#define USE_ANISOTROPY":"",Q.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Q.clearcoatMap?"#define USE_CLEARCOATMAP":"",Q.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Q.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Q.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Q.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Q.specularMap?"#define USE_SPECULARMAP":"",Q.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Q.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Q.roughnessMap?"#define USE_ROUGHNESSMAP":"",Q.metalnessMap?"#define USE_METALNESSMAP":"",Q.alphaMap?"#define USE_ALPHAMAP":"",Q.alphaHash?"#define USE_ALPHAHASH":"",Q.transmission?"#define USE_TRANSMISSION":"",Q.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Q.thicknessMap?"#define USE_THICKNESSMAP":"",Q.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Q.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Q.mapUv?"#define MAP_UV "+Q.mapUv:"",Q.alphaMapUv?"#define ALPHAMAP_UV "+Q.alphaMapUv:"",Q.lightMapUv?"#define LIGHTMAP_UV "+Q.lightMapUv:"",Q.aoMapUv?"#define AOMAP_UV "+Q.aoMapUv:"",Q.emissiveMapUv?"#define EMISSIVEMAP_UV "+Q.emissiveMapUv:"",Q.bumpMapUv?"#define BUMPMAP_UV "+Q.bumpMapUv:"",Q.normalMapUv?"#define NORMALMAP_UV "+Q.normalMapUv:"",Q.displacementMapUv?"#define DISPLACEMENTMAP_UV "+Q.displacementMapUv:"",Q.metalnessMapUv?"#define METALNESSMAP_UV "+Q.metalnessMapUv:"",Q.roughnessMapUv?"#define ROUGHNESSMAP_UV "+Q.roughnessMapUv:"",Q.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+Q.anisotropyMapUv:"",Q.clearcoatMapUv?"#define CLEARCOATMAP_UV "+Q.clearcoatMapUv:"",Q.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+Q.clearcoatNormalMapUv:"",Q.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+Q.clearcoatRoughnessMapUv:"",Q.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+Q.iridescenceMapUv:"",Q.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+Q.iridescenceThicknessMapUv:"",Q.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+Q.sheenColorMapUv:"",Q.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+Q.sheenRoughnessMapUv:"",Q.specularMapUv?"#define SPECULARMAP_UV "+Q.specularMapUv:"",Q.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+Q.specularColorMapUv:"",Q.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+Q.specularIntensityMapUv:"",Q.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+Q.transmissionMapUv:"",Q.thicknessMapUv?"#define THICKNESSMAP_UV "+Q.thicknessMapUv:"",Q.vertexTangents&&Q.flatShading===!1?"#define USE_TANGENT":"",Q.vertexNormals?"#define HAS_NORMAL":"",Q.vertexColors?"#define USE_COLOR":"",Q.vertexAlphas?"#define USE_COLOR_ALPHA":"",Q.vertexUv1s?"#define USE_UV1":"",Q.vertexUv2s?"#define USE_UV2":"",Q.vertexUv3s?"#define USE_UV3":"",Q.pointsUvs?"#define USE_POINTS_UV":"",Q.flatShading?"#define FLAT_SHADED":"",Q.skinning?"#define USE_SKINNING":"",Q.morphTargets?"#define USE_MORPHTARGETS":"",Q.morphNormals&&Q.flatShading===!1?"#define USE_MORPHNORMALS":"",Q.morphColors?"#define USE_MORPHCOLORS":"",Q.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+Q.morphTextureStride:"",Q.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+Q.morphTargetsCount:"",Q.doubleSided?"#define DOUBLE_SIDED":"",Q.flipSided?"#define FLIP_SIDED":"",Q.shadowMapEnabled?"#define USE_SHADOWMAP":"",Q.shadowMapEnabled?"#define "+U:"",Q.sizeAttenuation?"#define USE_SIZEATTENUATION":"",Q.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Q.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",Q.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(V7).join(`
`),E=[nY(Q),"#define SHADER_TYPE "+Q.shaderType,"#define SHADER_NAME "+Q.shaderName,M,Q.useFog&&Q.fog?"#define USE_FOG":"",Q.useFog&&Q.fogExp2?"#define FOG_EXP2":"",Q.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",Q.map?"#define USE_MAP":"",Q.matcap?"#define USE_MATCAP":"",Q.envMap?"#define USE_ENVMAP":"",Q.envMap?"#define "+H:"",Q.envMap?"#define "+q:"",Q.envMap?"#define "+N:"",G?"#define CUBEUV_TEXEL_WIDTH "+G.texelWidth:"",G?"#define CUBEUV_TEXEL_HEIGHT "+G.texelHeight:"",G?"#define CUBEUV_MAX_MIP "+G.maxMip+".0":"",Q.lightMap?"#define USE_LIGHTMAP":"",Q.aoMap?"#define USE_AOMAP":"",Q.bumpMap?"#define USE_BUMPMAP":"",Q.normalMap?"#define USE_NORMALMAP":"",Q.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",Q.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",Q.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",Q.emissiveMap?"#define USE_EMISSIVEMAP":"",Q.anisotropy?"#define USE_ANISOTROPY":"",Q.anisotropyMap?"#define USE_ANISOTROPYMAP":"",Q.clearcoat?"#define USE_CLEARCOAT":"",Q.clearcoatMap?"#define USE_CLEARCOATMAP":"",Q.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",Q.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",Q.dispersion?"#define USE_DISPERSION":"",Q.retroreflection?"#define USE_RETROREFLECTION":"",Q.iridescence?"#define USE_IRIDESCENCE":"",Q.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",Q.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",Q.specularMap?"#define USE_SPECULARMAP":"",Q.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",Q.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",Q.roughnessMap?"#define USE_ROUGHNESSMAP":"",Q.metalnessMap?"#define USE_METALNESSMAP":"",Q.alphaMap?"#define USE_ALPHAMAP":"",Q.alphaTest?"#define USE_ALPHATEST":"",Q.alphaHash?"#define USE_ALPHAHASH":"",Q.sheen?"#define USE_SHEEN":"",Q.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",Q.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",Q.transmission?"#define USE_TRANSMISSION":"",Q.transmissionMap?"#define USE_TRANSMISSIONMAP":"",Q.thicknessMap?"#define USE_THICKNESSMAP":"",Q.vertexTangents&&Q.flatShading===!1?"#define USE_TANGENT":"",Q.vertexColors||Q.instancingColor?"#define USE_COLOR":"",Q.vertexAlphas||Q.batchingColor?"#define USE_COLOR_ALPHA":"",Q.vertexUv1s?"#define USE_UV1":"",Q.vertexUv2s?"#define USE_UV2":"",Q.vertexUv3s?"#define USE_UV3":"",Q.pointsUvs?"#define USE_POINTS_UV":"",Q.gradientMap?"#define USE_GRADIENTMAP":"",Q.flatShading?"#define FLAT_SHADED":"",Q.doubleSided?"#define DOUBLE_SIDED":"",Q.flipSided?"#define FLIP_SIDED":"",Q.shadowMapEnabled?"#define USE_SHADOWMAP":"",Q.shadowMapEnabled?"#define "+U:"",Q.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",Q.numLightProbes>0?"#define USE_LIGHT_PROBES":"",Q.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",Q.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",Q.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",Q.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",Q.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",Q.toneMapping!==R9?"#define TONE_MAPPING":"",Q.toneMapping!==R9?NJ.tonemapping_pars_fragment:"",Q.toneMapping!==R9?VN("toneMapping",Q.toneMapping):"",Q.dithering?"#define DITHERING":"",Q.opaque?"#define OPAQUE":"",NJ.colorspace_pars_fragment,MN("linearToOutputTexel",Q.outputColorSpace),LN(),Q.useDepthPacking?"#define DEPTH_PACKING "+Q.depthPacking:"",`
`].filter(V7).join(`
`);if(Y=rZ(Y),Y=lY(Y,Q),Y=dY(Y,Q),X=rZ(X),X=lY(X,Q),X=dY(X,Q),Y=cY(Y),X=cY(X),Q.isRawShaderMaterial!==!0)C=`#version 300 es
`,O=[F,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+O,E=["#define varying in",Q.glslVersion===EZ?"":"layout(location = 0) out highp vec4 pc_fragColor;",Q.glslVersion===EZ?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E;let P=C+O+Y,k=C+E+X,z=pY(K,K.VERTEX_SHADER,P),_=pY(K,K.FRAGMENT_SHADER,k);if(K.attachShader(B,z),K.attachShader(B,_),Q.index0AttributeName!==void 0)K.bindAttribLocation(B,0,Q.index0AttributeName);else if(Q.hasPositionAttribute===!0)K.bindAttribLocation(B,0,"position");K.linkProgram(B);function A(w){if(J.debug.checkShaderErrors){let S=K.getProgramInfoLog(B)||"",n=K.getShaderInfoLog(z)||"",y=K.getShaderInfoLog(_)||"",c=S.trim(),i=n.trim(),h=y.trim(),t=!0,v=!0;if(K.getProgramParameter(B,K.LINK_STATUS)===!1)if(t=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(K,B,z,_);else{let g=uY(K,z,"vertex"),p=uY(K,_,"fragment");KJ("WebGLProgram: Shader Error "+K.getError()+" - VALIDATE_STATUS "+K.getProgramParameter(B,K.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+c+`
`+g+`
`+p)}else if(c!=="")QJ("WebGLProgram: Program Info Log:",c);else if(i===""||h==="")v=!1;if(v)w.diagnostics={runnable:t,programLog:c,vertexShader:{log:i,prefix:O},fragmentShader:{log:h,prefix:E}}}K.deleteShader(z),K.deleteShader(_),D=new L7(K,B),V=IN(K,B)}let D;this.getUniforms=function(){if(D===void 0)A(this);return D};let V;this.getAttributes=function(){if(V===void 0)A(this);return V};let T=Q.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(T===!1)T=K.getProgramParameter(B,NN);return T},this.destroy=function(){Z.releaseStatesOfProgram(this),K.deleteProgram(B),this.program=void 0},this.type=Q.shaderType,this.name=Q.shaderName,this.id=FN++,this.cacheKey=$,this.usedTimes=1,this.program=B,this.vertexShader=z,this.fragmentShader=_,this}var xN=0;class YX{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J,$,Q){let Z=this._getShaderCacheForMaterial(J);if(Z.has($)===!1)Z.add($),$.usedTimes++;if(Z.has(Q)===!1)Z.add(Q),Q.usedTimes++;return this}remove(J){let $=this.materialCache.get(J);for(let Q of $)if(Q.usedTimes--,Q.usedTimes===0)this.shaderCache.delete(Q.code);return this.materialCache.delete(J),this}getVertexShaderStage(J){return this._getShaderStage(J.vertexShader)}getFragmentShaderStage(J){return this._getShaderStage(J.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let $=this.materialCache,Q=$.get(J);if(Q===void 0)Q=new Set,$.set(J,Q);return Q}_getShaderStage(J){let $=this.shaderCache,Q=$.get(J);if(Q===void 0)Q=new XX(J),$.set(J,Q);return Q}}class XX{constructor(J){this.id=xN++,this.code=J,this.usedTimes=0}}function gN(J){return J===m8||J===N$||J===F$}function pN(J,$,Q,Z,K,W){let Y=new D$,X=new YX,U=new Set,H=[],q=new Map,N=Z.logarithmicDepthBuffer,G=Z.precision,F={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(D){if(U.add(D),D===0)return"uv";return`uv${D}`}function B(D,V,T,w,S,n){let y=w.fog,c=S.geometry,i=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?w.environment:null,h=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap,t=$.get(D.envMap||i,h),v=!!t&&t.mapping===X7?t.image.height:null,g=F[D.type];if(D.precision!==null){if(G=Z.getMaxPrecision(D.precision),G!==D.precision)QJ("WebGLProgram.getParameters:",D.precision,"not supported, using",G,"instead.")}let p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,O0=p!==void 0?p.length:0,L0=0;if(c.morphAttributes.position!==void 0)L0=1;if(c.morphAttributes.normal!==void 0)L0=2;if(c.morphAttributes.color!==void 0)L0=3;let g0,M0,d,Y0;if(g){let C0=t9[g];g0=C0.vertexShader,M0=C0.fragmentShader}else{g0=D.vertexShader,M0=D.fragmentShader;let C0=X.getVertexShaderStage(D),P0=X.getFragmentShaderStage(D);X.update(D,C0,P0),d=C0.id,Y0=P0.id}let X0=J.getRenderTarget(),Z0=J.state.buffers.depth.getReversed(),k0=S.isInstancedMesh===!0,Q0=S.isBatchedMesh===!0,_0=!!D.map,z0=!!D.matcap,B0=!!t,p0=!!D.aoMap,w0=!!D.lightMap,JJ=!!D.bumpMap&&D.wireframe===!1,c0=!!D.normalMap,S0=!!D.displacementMap,r=!!D.emissiveMap,V0=!!D.metalnessMap,j=!!D.roughnessMap,r0=D.anisotropy>0,e0=D.clearcoat>0,R0=D.dispersion>0,R=D.retroreflectivity>0,L=D.iridescence>0,f=D.sheen>0,e=D.transmission>0,N0=r0&&!!D.anisotropyMap,l=e0&&!!D.clearcoatMap,G0=e0&&!!D.clearcoatNormalMap,o=e0&&!!D.clearcoatRoughnessMap,W0=L&&!!D.iridescenceMap,a=L&&!!D.iridescenceThicknessMap,E0=f&&!!D.sheenColorMap,F0=f&&!!D.sheenRoughnessMap,D0=!!D.specularMap,m0=!!D.specularColorMap,l0=!!D.specularIntensityMap,s0=e&&!!D.transmissionMap,m=e&&!!D.thicknessMap,T0=!!D.gradientMap,U0=!!D.alphaMap,j0=D.alphaTest>0,h0=!!D.alphaHash,b=!!D.extensions,s=R9;if(D.toneMapped){if(X0===null||X0.isXRRenderTarget===!0)s=J.toneMapping}let H0={shaderID:g,shaderType:D.type,shaderName:D.name,vertexShader:g0,fragmentShader:M0,defines:D.defines,customVertexShaderID:d,customFragmentShaderID:Y0,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:G,batching:Q0,batchingColor:Q0&&S._colorsTexture!==null,instancing:k0,instancingColor:k0&&S.instanceColor!==null,instancingMorph:k0&&S.morphTexture!==null,outputColorSpace:X0===null?J.outputColorSpace:X0.isXRRenderTarget===!0?X0.texture.colorSpace:FJ.workingColorSpace,alphaToCoverage:!!D.alphaToCoverage,map:_0,matcap:z0,envMap:B0,envMapMode:B0&&t.mapping,envMapCubeUVHeight:v,aoMap:p0,lightMap:w0,bumpMap:JJ,normalMap:c0,displacementMap:S0,emissiveMap:r,normalMapObjectSpace:c0&&D.normalMapType===EY,normalMapTangentSpace:c0&&D.normalMapType===FZ,packedNormalMap:c0&&D.normalMapType===FZ&&gN(D.normalMap.format),metalnessMap:V0,roughnessMap:j,anisotropy:r0,anisotropyMap:N0,clearcoat:e0,clearcoatMap:l,clearcoatNormalMap:G0,clearcoatRoughnessMap:o,dispersion:R0,retroreflection:R,iridescence:L,iridescenceMap:W0,iridescenceThicknessMap:a,sheen:f,sheenColorMap:E0,sheenRoughnessMap:F0,specularMap:D0,specularColorMap:m0,specularIntensityMap:l0,transmission:e,transmissionMap:s0,thicknessMap:m,gradientMap:T0,opaque:D.transparent===!1&&D.blending===a9&&D.alphaToCoverage===!1,alphaMap:U0,alphaTest:j0,alphaHash:h0,combine:D.combine,mapUv:_0&&M(D.map.channel),aoMapUv:p0&&M(D.aoMap.channel),lightMapUv:w0&&M(D.lightMap.channel),bumpMapUv:JJ&&M(D.bumpMap.channel),normalMapUv:c0&&M(D.normalMap.channel),displacementMapUv:S0&&M(D.displacementMap.channel),emissiveMapUv:r&&M(D.emissiveMap.channel),metalnessMapUv:V0&&M(D.metalnessMap.channel),roughnessMapUv:j&&M(D.roughnessMap.channel),anisotropyMapUv:N0&&M(D.anisotropyMap.channel),clearcoatMapUv:l&&M(D.clearcoatMap.channel),clearcoatNormalMapUv:G0&&M(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:o&&M(D.clearcoatRoughnessMap.channel),iridescenceMapUv:W0&&M(D.iridescenceMap.channel),iridescenceThicknessMapUv:a&&M(D.iridescenceThicknessMap.channel),sheenColorMapUv:E0&&M(D.sheenColorMap.channel),sheenRoughnessMapUv:F0&&M(D.sheenRoughnessMap.channel),specularMapUv:D0&&M(D.specularMap.channel),specularColorMapUv:m0&&M(D.specularColorMap.channel),specularIntensityMapUv:l0&&M(D.specularIntensityMap.channel),transmissionMapUv:s0&&M(D.transmissionMap.channel),thicknessMapUv:m&&M(D.thicknessMap.channel),alphaMapUv:U0&&M(D.alphaMap.channel),vertexTangents:!!c.attributes.tangent&&(c0||r0),vertexNormals:!!c.attributes.normal,vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!c.attributes.color&&c.attributes.color.itemSize===4,pointsUvs:S.isPoints===!0&&!!c.attributes.uv&&(_0||U0),fog:!!y,useFog:D.fog===!0,fogExp2:!!y&&y.isFogExp2,flatShading:D.wireframe===!1&&(D.flatShading===!0||c.attributes.normal===void 0&&c0===!1&&(D.isMeshLambertMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isMeshPhysicalMaterial)),sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:N,reversedDepthBuffer:Z0,skinning:S.isSkinnedMesh===!0,hasPositionAttribute:c.attributes.position!==void 0,morphTargets:c.morphAttributes.position!==void 0,morphNormals:c.morphAttributes.normal!==void 0,morphColors:c.morphAttributes.color!==void 0,morphTargetsCount:O0,morphTextureStride:L0,numSunLights:V.sun.length,numDirLights:V.directional.length,numPointLights:V.point.length,numSpotLights:V.spot.length,numSpotLightMaps:V.spotLightMap.length,numRectAreaLights:V.rectArea.length,numHemiLights:V.hemi.length,numSunLightShadows:V.sunShadowMap.length,numDirLightShadows:V.directionalShadowMap.length,numPointLightShadows:V.pointShadowMap.length,numSpotLightShadows:V.spotShadowMap.length,numSpotLightShadowsWithMaps:V.numSpotLightShadowsWithMaps,numLightProbes:V.numLightProbes,numLightProbeGrids:n.length,numClippingPlanes:W.numPlanes,numClipIntersection:W.numIntersection,dithering:D.dithering,shadowMapEnabled:J.shadowMap.enabled&&T.length>0,shadowMapType:J.shadowMap.type,toneMapping:s,decodeVideoTexture:_0&&D.map.isVideoTexture===!0&&FJ.getTransfer(D.map.colorSpace)===RJ,decodeVideoTextureEmissive:r&&D.emissiveMap.isVideoTexture===!0&&FJ.getTransfer(D.emissiveMap.colorSpace)===RJ,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===V9,flipSided:D.side===X9,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:b&&D.extensions.clipCullDistance===!0&&Q.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(b&&D.extensions.multiDraw===!0||Q0)&&Q.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:Q.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return H0.vertexUv1s=U.has(1),H0.vertexUv2s=U.has(2),H0.vertexUv3s=U.has(3),U.clear(),H0}function O(D){let V=[];if(D.shaderID)V.push(D.shaderID);else V.push(D.customVertexShaderID),V.push(D.customFragmentShaderID);if(D.defines!==void 0)for(let T in D.defines)V.push(T),V.push(D.defines[T]);if(D.isRawShaderMaterial===!1)E(V,D),C(V,D),V.push(J.outputColorSpace);return V.push(D.customProgramCacheKey),V.join()}function E(D,V){D.push(V.precision),D.push(V.outputColorSpace),D.push(V.envMapMode),D.push(V.envMapCubeUVHeight),D.push(V.mapUv),D.push(V.alphaMapUv),D.push(V.lightMapUv),D.push(V.aoMapUv),D.push(V.bumpMapUv),D.push(V.normalMapUv),D.push(V.displacementMapUv),D.push(V.emissiveMapUv),D.push(V.metalnessMapUv),D.push(V.roughnessMapUv),D.push(V.anisotropyMapUv),D.push(V.clearcoatMapUv),D.push(V.clearcoatNormalMapUv),D.push(V.clearcoatRoughnessMapUv),D.push(V.iridescenceMapUv),D.push(V.iridescenceThicknessMapUv),D.push(V.sheenColorMapUv),D.push(V.sheenRoughnessMapUv),D.push(V.specularMapUv),D.push(V.specularColorMapUv),D.push(V.specularIntensityMapUv),D.push(V.transmissionMapUv),D.push(V.thicknessMapUv),D.push(V.combine),D.push(V.fogExp2),D.push(V.sizeAttenuation),D.push(V.morphTargetsCount),D.push(V.morphAttributeCount),D.push(V.numSunLights),D.push(V.numDirLights),D.push(V.numPointLights),D.push(V.numSpotLights),D.push(V.numSpotLightMaps),D.push(V.numHemiLights),D.push(V.numRectAreaLights),D.push(V.numSunLightShadows),D.push(V.numDirLightShadows),D.push(V.numPointLightShadows),D.push(V.numSpotLightShadows),D.push(V.numSpotLightShadowsWithMaps),D.push(V.numLightProbes),D.push(V.shadowMapType),D.push(V.toneMapping),D.push(V.numClippingPlanes),D.push(V.numClipIntersection),D.push(V.depthPacking)}function C(D,V){if(Y.disableAll(),V.instancing)Y.enable(0);if(V.instancingColor)Y.enable(1);if(V.instancingMorph)Y.enable(2);if(V.matcap)Y.enable(3);if(V.envMap)Y.enable(4);if(V.normalMapObjectSpace)Y.enable(5);if(V.normalMapTangentSpace)Y.enable(6);if(V.clearcoat)Y.enable(7);if(V.iridescence)Y.enable(8);if(V.alphaTest)Y.enable(9);if(V.vertexColors)Y.enable(10);if(V.vertexAlphas)Y.enable(11);if(V.vertexUv1s)Y.enable(12);if(V.vertexUv2s)Y.enable(13);if(V.vertexUv3s)Y.enable(14);if(V.vertexTangents)Y.enable(15);if(V.anisotropy)Y.enable(16);if(V.alphaHash)Y.enable(17);if(V.batching)Y.enable(18);if(V.dispersion)Y.enable(19);if(V.retroreflection)Y.enable(24);if(V.batchingColor)Y.enable(20);if(V.gradientMap)Y.enable(21);if(V.packedNormalMap)Y.enable(22);if(V.vertexNormals)Y.enable(23);if(D.push(Y.mask),Y.disableAll(),V.fog)Y.enable(0);if(V.useFog)Y.enable(1);if(V.flatShading)Y.enable(2);if(V.logarithmicDepthBuffer)Y.enable(3);if(V.reversedDepthBuffer)Y.enable(4);if(V.skinning)Y.enable(5);if(V.morphTargets)Y.enable(6);if(V.morphNormals)Y.enable(7);if(V.morphColors)Y.enable(8);if(V.premultipliedAlpha)Y.enable(9);if(V.shadowMapEnabled)Y.enable(10);if(V.doubleSided)Y.enable(11);if(V.flipSided)Y.enable(12);if(V.useDepthPacking)Y.enable(13);if(V.dithering)Y.enable(14);if(V.transmission)Y.enable(15);if(V.sheen)Y.enable(16);if(V.opaque)Y.enable(17);if(V.pointsUvs)Y.enable(18);if(V.decodeVideoTexture)Y.enable(19);if(V.decodeVideoTextureEmissive)Y.enable(20);if(V.alphaToCoverage)Y.enable(21);if(V.numLightProbeGrids>0)Y.enable(22);if(V.hasPositionAttribute)Y.enable(23);D.push(Y.mask)}function P(D){let V=F[D.type],T;if(V){let w=t9[V];T=q8.clone(w.uniforms)}else T=D.uniforms;return T}function k(D,V){let T=q.get(V);if(T!==void 0)++T.usedTimes;else T=new hN(J,V,D,K),H.push(T),q.set(V,T);return T}function z(D){if(--D.usedTimes===0){let V=H.indexOf(D);H[V]=H[H.length-1],H.pop(),q.delete(D.cacheKey),D.destroy()}}function _(D){X.remove(D)}function A(){X.dispose()}return{getParameters:B,getProgramCacheKey:O,getUniforms:P,acquireProgram:k,releaseProgram:z,releaseShaderCache:_,programs:H,dispose:A}}function mN(){let J=new WeakMap;function $(Y){return J.has(Y)}function Q(Y){let X=J.get(Y);if(X===void 0)X={},J.set(Y,X);return X}function Z(Y){J.delete(Y)}function K(Y,X,U){J.get(Y)[X]=U}function W(){J=new WeakMap}return{has:$,get:Q,remove:Z,update:K,dispose:W}}function uN(J,$){if(J.groupOrder!==$.groupOrder)return J.groupOrder-$.groupOrder;else if(J.renderOrder!==$.renderOrder)return J.renderOrder-$.renderOrder;else if(J.material.id!==$.material.id)return J.material.id-$.material.id;else if(J.materialVariant!==$.materialVariant)return J.materialVariant-$.materialVariant;else if(J.z!==$.z)return J.z-$.z;else return J.id-$.id}function sY(J,$){if(J.groupOrder!==$.groupOrder)return J.groupOrder-$.groupOrder;else if(J.renderOrder!==$.renderOrder)return J.renderOrder-$.renderOrder;else if(J.z!==$.z)return $.z-J.z;else return J.id-$.id}function iY(){let J=[],$=0,Q=[],Z=[],K=[];function W(){$=0,Q.length=0,Z.length=0,K.length=0}function Y(G){let F=0;if(G.isInstancedMesh)F+=2;if(G.isSkinnedMesh)F+=1;return F}function X(G,F,M,B,O,E){let C=J[$];if(C===void 0)C={id:G.id,object:G,geometry:F,material:M,materialVariant:Y(G),groupOrder:B,renderOrder:G.renderOrder,z:O,group:E},J[$]=C;else C.id=G.id,C.object=G,C.geometry=F,C.material=M,C.materialVariant=Y(G),C.groupOrder=B,C.renderOrder=G.renderOrder,C.z=O,C.group=E;return $++,C}function U(G,F,M,B,O,E,C){if(C.reversedDepth===!0)O=-O;let P=X(G,F,M,B,O,E);if(M.transmission>0)Z.push(P);else if(M.transparent===!0)K.push(P);else Q.push(P)}function H(G,F,M,B,O,E){let C=X(G,F,M,B,O,E);if(M.transmission>0)Z.unshift(C);else if(M.transparent===!0)K.unshift(C);else Q.unshift(C)}function q(G,F){if(Q.length>1)Q.sort(G||uN);if(Z.length>1)Z.sort(F||sY);if(K.length>1)K.sort(F||sY)}function N(){for(let G=$,F=J.length;G<F;G++){let M=J[G];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:Q,transmissive:Z,transparent:K,init:W,push:U,unshift:H,finish:N,sort:q}}function lN(){let J=new WeakMap;function $(Z,K){let W=J.get(Z),Y;if(W===void 0)Y=new iY,J.set(Z,[Y]);else if(K>=W.length)Y=new iY,W.push(Y);else Y=W[K];return Y}function Q(){J=new WeakMap}return{get:$,dispose:Q}}function dN(){let J={};return{get:function($){if(J[$.id]!==void 0)return J[$.id];let Q;switch($.type){case"SunLight":case"DirectionalLight":Q={direction:new x,color:new WJ};break;case"SpotLight":Q={position:new x,direction:new x,color:new WJ,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":Q={position:new x,color:new WJ,distance:0,decay:0};break;case"HemisphereLight":Q={direction:new x,skyColor:new WJ,groundColor:new WJ};break;case"RectAreaLight":Q={color:new WJ,position:new x,halfWidth:new x,halfHeight:new x};break}return J[$.id]=Q,Q}}}function cN(){let J={};return{get:function($){if(J[$.id]!==void 0)return J[$.id];let Q;switch($.type){case"SunLight":case"DirectionalLight":Q={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new o0};break;case"SpotLight":Q={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new o0};break;case"PointLight":Q={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new o0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[$.id]=Q,Q}}}var nN=0;function sN(J,$){return($.castShadow?2:0)-(J.castShadow?2:0)+($.map?1:0)-(J.map?1:0)}function iN(J){let $=new dN,Q=cN(),Z={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let H=0;H<9;H++)Z.probe.push(new x);let K=new x,W=new bJ,Y=new bJ;function X(H){let q=0,N=0,G=0;for(let S=0;S<9;S++)Z.probe[S].set(0,0,0);let F=0,M=0,B=0,O=0,E=0,C=0,P=0,k=0,z=0,_=0,A=0,D=0,V=0,T=0;H.sort(sN);for(let S=0,n=H.length;S<n;S++){let y=H[S],c=y.color,i=y.intensity,h=y.distance,t=null;if(y.shadow&&y.shadow.map)if(y.shadow.map.texture.format===m8)t=y.shadow.map.texture;else t=y.shadow.map.depthTexture||y.shadow.map.texture;if(y.isAmbientLight)q+=c.r*i,N+=c.g*i,G+=c.b*i;else if(y.isLightProbe){for(let v=0;v<9;v++)Z.probe[v].addScaledVector(y.sh.coefficients[v],i);T++}else if(y.isSunLight){let v=$.get(y);if(v.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let g=y.shadow,p=Q.get(y);p.shadowIntensity=g.intensity,p.shadowBias=g.bias,p.shadowNormalBias=g.normalBias,p.shadowRadius=g.radius,p.shadowMapSize.copy(g.mapSize).multiply(g.getFrameExtents()),Z.sunShadow[M]=p,Z.sunShadowMap[M]=t;let O0=g.getViewportCount();for(let L0=0;L0<O0;L0++)Z.sunShadowMatrix[B+L0]=g.getMatrix(L0),Z.sunShadowCascade[B+L0]=g._cascadeData[L0];B+=O0,M++}Z.sun[F]=v,F++}else if(y.isDirectionalLight){let v=$.get(y);if(v.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let g=y.shadow,p=Q.get(y);p.shadowIntensity=g.intensity,p.shadowBias=g.bias,p.shadowNormalBias=g.normalBias,p.shadowRadius=g.radius,p.shadowMapSize=g.mapSize,Z.directionalShadow[O]=p,Z.directionalShadowMap[O]=t,Z.directionalShadowMatrix[O]=y.shadow.matrix,z++}Z.directional[O]=v,O++}else if(y.isSpotLight){let v=$.get(y);v.position.setFromMatrixPosition(y.matrixWorld),v.color.copy(c).multiplyScalar(i),v.distance=h,v.coneCos=Math.cos(y.angle),v.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),v.decay=y.decay,Z.spot[C]=v;let g=y.shadow;if(y.map){if(Z.spotLightMap[D]=y.map,D++,g.updateMatrices(y),y.castShadow)V++}if(Z.spotLightMatrix[C]=g.matrix,y.castShadow){let p=Q.get(y);p.shadowIntensity=g.intensity,p.shadowBias=g.bias,p.shadowNormalBias=g.normalBias,p.shadowRadius=g.radius,p.shadowMapSize=g.mapSize,Z.spotShadow[C]=p,Z.spotShadowMap[C]=t,A++}C++}else if(y.isRectAreaLight){let v=$.get(y);v.color.copy(c).multiplyScalar(i),v.halfWidth.set(y.width*0.5,0,0),v.halfHeight.set(0,y.height*0.5,0),Z.rectArea[P]=v,P++}else if(y.isPointLight){let v=$.get(y);if(v.color.copy(y.color).multiplyScalar(y.intensity),v.distance=y.distance,v.decay=y.decay,y.castShadow){let g=y.shadow,p=Q.get(y);p.shadowIntensity=g.intensity,p.shadowBias=g.bias,p.shadowNormalBias=g.normalBias,p.shadowRadius=g.radius,p.shadowMapSize=g.mapSize,p.shadowCameraNear=g.camera.near,p.shadowCameraFar=g.camera.far,Z.pointShadow[E]=p,Z.pointShadowMap[E]=t,Z.pointShadowMatrix[E]=y.shadow.matrix,_++}Z.point[E]=v,E++}else if(y.isHemisphereLight){let v=$.get(y);v.skyColor.copy(y.color).multiplyScalar(i),v.groundColor.copy(y.groundColor).multiplyScalar(i),Z.hemi[k]=v,k++}}if(P>0)if(J.has("OES_texture_float_linear")===!0)Z.rectAreaLTC1=b0.LTC_FLOAT_1,Z.rectAreaLTC2=b0.LTC_FLOAT_2;else Z.rectAreaLTC1=b0.LTC_HALF_1,Z.rectAreaLTC2=b0.LTC_HALF_2;Z.ambient[0]=q,Z.ambient[1]=N,Z.ambient[2]=G;let w=Z.hash;if(w.sunLength!==F||w.directionalLength!==O||w.pointLength!==E||w.spotLength!==C||w.rectAreaLength!==P||w.hemiLength!==k||w.numSunShadows!==M||w.numDirectionalShadows!==z||w.numPointShadows!==_||w.numSpotShadows!==A||w.numSpotMaps!==D||w.numLightProbes!==T)Z.sun.length=F,Z.directional.length=O,Z.spot.length=C,Z.rectArea.length=P,Z.point.length=E,Z.hemi.length=k,Z.sunShadow.length=M,Z.sunShadowMap.length=M,Z.sunShadowMatrix.length=B,Z.sunShadowCascade.length=B,Z.directionalShadow.length=z,Z.directionalShadowMap.length=z,Z.directionalShadowMatrix.length=z,Z.pointShadow.length=_,Z.pointShadowMap.length=_,Z.pointShadowMatrix.length=_,Z.spotShadow.length=A,Z.spotShadowMap.length=A,Z.spotLightMatrix.length=A+D-V,Z.spotLightMap.length=D,Z.numSpotLightShadowsWithMaps=V,Z.numLightProbes=T,w.sunLength=F,w.directionalLength=O,w.pointLength=E,w.spotLength=C,w.rectAreaLength=P,w.hemiLength=k,w.numSunShadows=M,w.numDirectionalShadows=z,w.numPointShadows=_,w.numSpotShadows=A,w.numSpotMaps=D,w.numLightProbes=T,Z.version=nN++}function U(H,q){let N=0,G=0,F=0,M=0,B=0,O=0,E=q.matrixWorldInverse;for(let C=0,P=H.length;C<P;C++){let k=H[C];if(k.isSunLight){let z=Z.sun[N];z.direction.setFromMatrixPosition(k.matrixWorld),z.direction.transformDirection(E),N++}else if(k.isDirectionalLight){let z=Z.directional[G];z.direction.setFromMatrixPosition(k.matrixWorld),K.setFromMatrixPosition(k.target.matrixWorld),z.direction.sub(K),z.direction.transformDirection(E),G++}else if(k.isSpotLight){let z=Z.spot[M];z.position.setFromMatrixPosition(k.matrixWorld),z.position.applyMatrix4(E),z.direction.setFromMatrixPosition(k.matrixWorld),K.setFromMatrixPosition(k.target.matrixWorld),z.direction.sub(K),z.direction.transformDirection(E),M++}else if(k.isRectAreaLight){let z=Z.rectArea[B];z.position.setFromMatrixPosition(k.matrixWorld),z.position.applyMatrix4(E),Y.identity(),W.copy(k.matrixWorld),W.premultiply(E),Y.extractRotation(W),z.halfWidth.set(k.width*0.5,0,0),z.halfHeight.set(0,k.height*0.5,0),z.halfWidth.applyMatrix4(Y),z.halfHeight.applyMatrix4(Y),B++}else if(k.isPointLight){let z=Z.point[F];z.position.setFromMatrixPosition(k.matrixWorld),z.position.applyMatrix4(E),F++}else if(k.isHemisphereLight){let z=Z.hemi[O];z.direction.setFromMatrixPosition(k.matrixWorld),z.direction.transformDirection(E),O++}}}return{setup:X,setupView:U,state:Z}}function oY(J){let $=new iN(J),Q=[],Z=[],K=[];function W(G){N.camera=G,Q.length=0,Z.length=0,K.length=0}function Y(G){Q.push(G)}function X(G){Z.push(G)}function U(G){K.push(G)}function H(){$.setup(Q)}function q(G){$.setupView(Q,G)}let N={lightsArray:Q,shadowsArray:Z,lightProbeGridArray:K,camera:null,lights:$,transmissionRenderTarget:{},textureUnits:0};return{init:W,state:N,setupLights:H,setupLightsView:q,pushLight:Y,pushShadow:X,pushLightProbeGrid:U}}function oN(J){let $=new WeakMap;function Q(K,W=0){let Y=$.get(K),X;if(Y===void 0)X=new oY(J),$.set(K,[X]);else if(W>=Y.length)X=new oY(J),Y.push(X);else X=Y[W];return X}function Z(){$=new WeakMap}return{get:Q,dispose:Z}}var aN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rN=`uniform sampler2D shadow_pass;
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
}`,tN=[new x(1,0,0),new x(-1,0,0),new x(0,1,0),new x(0,-1,0),new x(0,0,1),new x(0,0,-1)],eN=[new x(0,-1,0),new x(0,-1,0),new x(0,0,1),new x(0,0,-1),new x(0,-1,0),new x(0,-1,0)],aY=new bJ,D7=new x,iZ=new x;function JF(J,$,Q){let Z=new k$,K=new o0,W=new o0,Y=new jJ,X=new CZ,U=new _Z,H={},q=Q.maxTextureSize,N={[I6]:X9,[X9]:I6,[V9]:V9},G=new ZJ({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new o0},radius:{value:4}},vertexShader:aN,fragmentShader:rN}),F=G.clone();F.defines.HORIZONTAL_PASS=1;let M=new hJ;M.setAttribute("position",new gJ(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let B=new GJ(M,G),O=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=e6;let E=this.type;this.render=function(_,A,D){if(O.enabled===!1)return;if(O.autoUpdate===!1&&O.needsUpdate===!1)return;if(_.length===0)return;if(this.type===AW)QJ("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=e6;let V=J.getRenderTarget(),T=J.getActiveCubeFace(),w=J.getActiveMipmapLevel(),S=J.state;if(S.setBlending(v9),S.buffers.depth.getReversed()===!0)S.buffers.color.setClear(0,0,0,0);else S.buffers.color.setClear(1,1,1,1);S.buffers.depth.setTest(!0),S.setScissorTest(!1);let n=E!==this.type;if(n)A.traverse(function(y){if(y.material)if(Array.isArray(y.material))y.material.forEach((c)=>c.needsUpdate=!0);else y.material.needsUpdate=!0});for(let y=0,c=_.length;y<c;y++){let i=_[y],h=i.shadow;if(h===void 0){QJ("WebGLShadowMap:",i,"has no shadow.");continue}if(h.autoUpdate===!1&&h.needsUpdate===!1)continue;K.copy(h.mapSize);let t=h.getFrameExtents();if(K.multiply(t),W.copy(h.mapSize),K.x>q||K.y>q){if(K.x>q)W.x=Math.floor(q/t.x),K.x=W.x*t.x,h.mapSize.x=W.x;if(K.y>q)W.y=Math.floor(q/t.y),K.y=W.y*t.y,h.mapSize.y=W.y}let v=J.state.buffers.depth.getReversed();if(h.camera._reversedDepth=v,h.map===null||n===!0){if(h.map!==null){if(h.map.depthTexture!==null)h.map.depthTexture.dispose(),h.map.depthTexture=null;h.map.dispose()}if(this.type===k6){if(i.isPointLight){QJ("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}h.map=new pJ(K.x,K.y,{format:m8,type:tJ,minFilter:L9,magFilter:L9,generateMipmaps:!1}),h.map.texture.name=i.name+".shadowMap",h.map.depthTexture=new d8(K.x,K.y,U8),h.map.depthTexture.name=i.name+".shadowMapDepth",h.map.depthTexture.format=g8,h.map.depthTexture.compareFunction=null,h.map.depthTexture.minFilter=u9,h.map.depthTexture.magFilter=u9}else{if(i.isPointLight)h.map=new tZ(K.x),h.map.depthTexture=new zZ(K.x,C8);else h.map=new pJ(K.x,K.y),h.map.depthTexture=new d8(K.x,K.y,C8);if(h.map.depthTexture.name=i.name+".shadowMap",h.map.depthTexture.format=g8,this.type===e6)h.map.depthTexture.compareFunction=v?E$:O$,h.map.depthTexture.minFilter=L9,h.map.depthTexture.magFilter=L9;else h.map.depthTexture.compareFunction=null,h.map.depthTexture.minFilter=u9,h.map.depthTexture.magFilter=u9}h.camera.updateProjectionMatrix()}if(h.map.isWebGLCubeRenderTarget!==!0&&(h.map.width!==K.x||h.map.height!==K.y))h.map.setSize(K.x,K.y);let g=h.map.isWebGLCubeRenderTarget?6:h.getViewportCount();if(i.isPointLight!==!0)h.updateMatrices(i,D);for(let p=0;p<g;p++){let O0=h.getCamera(p);if(i.isPointLight){let{camera:L0,matrix:g0}=h,M0=i.distance||L0.far;if(M0!==L0.far)L0.far=M0,L0.updateProjectionMatrix();D7.setFromMatrixPosition(i.matrixWorld),L0.position.copy(D7),iZ.copy(L0.position),iZ.add(tN[p]),L0.up.copy(eN[p]),L0.lookAt(iZ),L0.updateMatrixWorld(),g0.makeTranslation(-D7.x,-D7.y,-D7.z),aY.multiplyMatrices(L0.projectionMatrix,L0.matrixWorldInverse),h._frustum.setFromProjectionMatrix(aY,L0.coordinateSystem,L0.reversedDepth)}if(h.map.isWebGLCubeRenderTarget)J.setRenderTarget(h.map,p),J.clear();else{if(p===0)J.setRenderTarget(h.map),J.clear();let L0=h.getViewport(p);Y.set(W.x*L0.x,W.y*L0.y,W.x*L0.z,W.y*L0.w),S.viewport(Y)}Z=h.getFrustum(p),k(A,D,O0,i,this.type)}if(h.isPointLightShadow!==!0&&this.type===k6)C(h,D);h.needsUpdate=!1}E=this.type,O.needsUpdate=!1,J.setRenderTarget(V,T,w)};function C(_,A){let D=$.update(B);if(G.defines.VSM_SAMPLES!==_.blurSamples)G.defines.VSM_SAMPLES=_.blurSamples,F.defines.VSM_SAMPLES=_.blurSamples,G.needsUpdate=!0,F.needsUpdate=!0;if(_.mapPass===null)_.mapPass=new pJ(K.x,K.y,{format:m8,type:tJ});else if(_.mapPass.width!==_.map.width||_.mapPass.height!==_.map.height)_.mapPass.setSize(_.map.width,_.map.height);G.uniforms.shadow_pass.value=_.map.depthTexture,G.uniforms.resolution.value.set(_.map.width,_.map.height),G.uniforms.radius.value=_.radius,J.setRenderTarget(_.mapPass),J.clear(),J.renderBufferDirect(A,null,D,G,B,null),F.uniforms.shadow_pass.value=_.mapPass.texture,F.uniforms.resolution.value.set(_.map.width,_.map.height),F.uniforms.radius.value=_.radius,J.setRenderTarget(_.map),J.clear(),J.renderBufferDirect(A,null,D,F,B,null)}function P(_,A,D,V){let T=null,w=D.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(w!==void 0)T=w;else if(T=D.isPointLight===!0?U:X,J.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let S=T.uuid,n=A.uuid,y=H[S];if(y===void 0)y={},H[S]=y;let c=y[n];if(c===void 0)c=T.clone(),y[n]=c,A.addEventListener("dispose",z);T=c}if(T.visible=A.visible,T.wireframe=A.wireframe,V===k6)T.side=A.shadowSide!==null?A.shadowSide:A.side;else T.side=A.shadowSide!==null?A.shadowSide:N[A.side];if(T.alphaMap=A.alphaMap,T.alphaTest=A.alphaToCoverage===!0?0.5:A.alphaTest,T.map=A.map,T.clipShadows=A.clipShadows,T.clippingPlanes=A.clippingPlanes,T.clipIntersection=A.clipIntersection,T.displacementMap=A.displacementMap,T.displacementScale=A.displacementScale,T.displacementBias=A.displacementBias,T.wireframeLinewidth=A.wireframeLinewidth,T.linewidth=A.linewidth,D.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let S=J.properties.get(T);S.light=D}return T}function k(_,A,D,V,T){if(_.visible===!1)return;if(_.layers.test(A.layers)&&(_.isMesh||_.isLine||_.isPoints)){if((_.castShadow||_.receiveShadow&&T===k6)&&(!_.frustumCulled||_.intersectsFrustum(Z))){_.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,_.matrixWorld);let n=$.update(_),y=_.material;if(Array.isArray(y)){let c=n.groups;for(let i=0,h=c.length;i<h;i++){let t=c[i],v=y[t.materialIndex];if(v&&v.visible){let g=P(_,v,V,T);_.onBeforeShadow(J,_,A,D,n,g,t),J.renderBufferDirect(D,null,n,g,_,t),_.onAfterShadow(J,_,A,D,n,g,t)}}}else if(y.visible){let c=P(_,y,V,T);_.onBeforeShadow(J,_,A,D,n,c,null),J.renderBufferDirect(D,null,n,c,_,null),_.onAfterShadow(J,_,A,D,n,c,null)}}}let S=_.children;for(let n=0,y=S.length;n<y;n++)k(S[n],A,D,V,T)}function z(_){_.target.removeEventListener("dispose",z);for(let D in H){let V=H[D],T=_.target.uuid;if(T in V)V[T].dispose(),delete V[T]}}}function $F(J,$){function Q(){let m=!1,T0=new jJ,U0=null,j0=new jJ(0,0,0,0);return{setMask:function(h0){if(U0!==h0&&!m)J.colorMask(h0,h0,h0,h0),U0=h0},setLocked:function(h0){m=h0},setClear:function(h0,b,s,H0,C0){if(C0===!0)h0*=H0,b*=H0,s*=H0;if(T0.set(h0,b,s,H0),j0.equals(T0)===!1)J.clearColor(h0,b,s,H0),j0.copy(T0)},reset:function(){m=!1,U0=null,j0.set(-1,0,0,0)}}}function Z(){let m=!1,T0=!1,U0=null,j0=null,h0=null;return{setReversed:function(b){if(T0!==b){let s=$.get("EXT_clip_control");if(b)s.clipControlEXT(s.LOWER_LEFT_EXT,s.ZERO_TO_ONE_EXT);else s.clipControlEXT(s.LOWER_LEFT_EXT,s.NEGATIVE_ONE_TO_ONE_EXT);T0=b;let H0=h0;h0=null,this.setClear(H0)}},getReversed:function(){return T0},setTest:function(b){if(b)X0(J.DEPTH_TEST);else Z0(J.DEPTH_TEST)},setMask:function(b){if(U0!==b&&!m)J.depthMask(b),U0=b},setFunc:function(b){if(T0)b=CY[b];if(j0!==b){switch(b){case oW:J.depthFunc(J.NEVER);break;case aW:J.depthFunc(J.ALWAYS);break;case rW:J.depthFunc(J.LESS);break;case TQ:J.depthFunc(J.LEQUAL);break;case tW:J.depthFunc(J.EQUAL);break;case eW:J.depthFunc(J.GEQUAL);break;case JY:J.depthFunc(J.GREATER);break;case $Y:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}j0=b}},setLocked:function(b){m=b},setClear:function(b){if(h0!==b){if(h0=b,T0)b=1-b;J.clearDepth(b)}},reset:function(){m=!1,U0=null,j0=null,h0=null,T0=!1}}}function K(){let m=!1,T0=null,U0=null,j0=null,h0=null,b=null,s=null,H0=null,C0=null;return{setTest:function(P0){if(!m)if(P0)X0(J.STENCIL_TEST);else Z0(J.STENCIL_TEST)},setMask:function(P0){if(T0!==P0&&!m)J.stencilMask(P0),T0=P0},setFunc:function(P0,x0,y0){if(U0!==P0||j0!==x0||h0!==y0)J.stencilFunc(P0,x0,y0),U0=P0,j0=x0,h0=y0},setOp:function(P0,x0,y0){if(b!==P0||s!==x0||H0!==y0)J.stencilOp(P0,x0,y0),b=P0,s=x0,H0=y0},setLocked:function(P0){m=P0},setClear:function(P0){if(C0!==P0)J.clearStencil(P0),C0=P0},reset:function(){m=!1,T0=null,U0=null,j0=null,h0=null,b=null,s=null,H0=null,C0=null}}}let W=new Q,Y=new Z,X=new K,U=new WeakMap,H=new WeakMap,q={},N={},G={},F=new WeakMap,M=[],B=null,O=!1,E=null,C=null,P=null,k=null,z=null,_=null,A=null,D=new WJ(0,0,0),V=0,T=!1,w=null,S=null,n=null,y=null,c=null,i=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),h=!1,t=0,v=J.getParameter(J.VERSION);if(v.indexOf("WebGL")!==-1)t=parseFloat(/^WebGL (\d)/.exec(v)[1]),h=t>=1;else if(v.indexOf("OpenGL ES")!==-1)t=parseFloat(/^OpenGL ES (\d)/.exec(v)[1]),h=t>=2;let g=null,p={},O0=J.getParameter(J.SCISSOR_BOX),L0=J.getParameter(J.VIEWPORT),g0=new jJ().fromArray(O0),M0=new jJ().fromArray(L0);function d(m,T0,U0,j0){let h0=new Uint8Array(4),b=J.createTexture();J.bindTexture(m,b),J.texParameteri(m,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(m,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let s=0;s<U0;s++)if(m===J.TEXTURE_3D||m===J.TEXTURE_2D_ARRAY)J.texImage3D(T0,0,J.RGBA,1,1,j0,0,J.RGBA,J.UNSIGNED_BYTE,h0);else J.texImage2D(T0+s,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,h0);return b}let Y0={};Y0[J.TEXTURE_2D]=d(J.TEXTURE_2D,J.TEXTURE_2D,1),Y0[J.TEXTURE_CUBE_MAP]=d(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y0[J.TEXTURE_2D_ARRAY]=d(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),Y0[J.TEXTURE_3D]=d(J.TEXTURE_3D,J.TEXTURE_3D,1,1),W.setClear(0,0,0,1),Y.setClear(1),X.setClear(0),X0(J.DEPTH_TEST),Y.setFunc(TQ),JJ(!1),c0(PQ),X0(J.CULL_FACE),p0(v9);function X0(m){if(q[m]!==!0)J.enable(m),q[m]=!0}function Z0(m){if(q[m]!==!1)J.disable(m),q[m]=!1}function k0(m,T0){if(G[m]!==T0){if(J.bindFramebuffer(m,T0),G[m]=T0,m===J.DRAW_FRAMEBUFFER)G[J.FRAMEBUFFER]=T0;if(m===J.FRAMEBUFFER)G[J.DRAW_FRAMEBUFFER]=T0;return!0}return!1}function Q0(m,T0){let U0=M,j0=!1;if(m){if(U0=F.get(T0),U0===void 0)U0=[],F.set(T0,U0);let h0=m.textures;if(U0.length!==h0.length||U0[0]!==J.COLOR_ATTACHMENT0){for(let b=0,s=h0.length;b<s;b++)U0[b]=J.COLOR_ATTACHMENT0+b;U0.length=h0.length,j0=!0}}else if(U0[0]!==J.BACK)U0[0]=J.BACK,j0=!0;if(j0)J.drawBuffers(U0)}function _0(m){if(B!==m)return J.useProgram(m),B=m,!0;return!1}let z0={[z6]:J.FUNC_ADD,[TW]:J.FUNC_SUBTRACT,[SW]:J.FUNC_REVERSE_SUBTRACT};z0[jW]=J.MIN,z0[vW]=J.MAX;let B0={[yW]:J.ZERO,[bW]:J.ONE,[fW]:J.SRC_COLOR,[xW]:J.SRC_ALPHA,[dW]:J.SRC_ALPHA_SATURATE,[uW]:J.DST_COLOR,[pW]:J.DST_ALPHA,[hW]:J.ONE_MINUS_SRC_COLOR,[gW]:J.ONE_MINUS_SRC_ALPHA,[lW]:J.ONE_MINUS_DST_COLOR,[mW]:J.ONE_MINUS_DST_ALPHA,[cW]:J.CONSTANT_COLOR,[nW]:J.ONE_MINUS_CONSTANT_COLOR,[sW]:J.CONSTANT_ALPHA,[iW]:J.ONE_MINUS_CONSTANT_ALPHA};function p0(m,T0,U0,j0,h0,b,s,H0,C0,P0){if(m===v9){if(O===!0)Z0(J.BLEND),O=!1;return}if(O===!1)X0(J.BLEND),O=!0;if(m!==wW){if(m!==E||P0!==T){if(C!==z6||z!==z6)J.blendEquation(J.FUNC_ADD),C=z6,z=z6;if(P0)switch(m){case a9:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case PJ:J.blendFunc(J.ONE,J.ONE);break;case AQ:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case wQ:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:KJ("WebGLState: Invalid blending: ",m);break}else switch(m){case a9:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case PJ:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case AQ:KJ("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wQ:KJ("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:KJ("WebGLState: Invalid blending: ",m);break}P=null,k=null,_=null,A=null,D.set(0,0,0),V=0,E=m,T=P0}return}if(h0=h0||T0,b=b||U0,s=s||j0,T0!==C||h0!==z)J.blendEquationSeparate(z0[T0],z0[h0]),C=T0,z=h0;if(U0!==P||j0!==k||b!==_||s!==A)J.blendFuncSeparate(B0[U0],B0[j0],B0[b],B0[s]),P=U0,k=j0,_=b,A=s;if(H0.equals(D)===!1||C0!==V)J.blendColor(H0.r,H0.g,H0.b,C0),D.copy(H0),V=C0;E=m,T=!1}function w0(m,T0){m.side===V9?Z0(J.CULL_FACE):X0(J.CULL_FACE);let U0=m.side===X9;if(T0)U0=!U0;JJ(U0),m.blending===a9&&m.transparent===!1?p0(v9):p0(m.blending,m.blendEquation,m.blendSrc,m.blendDst,m.blendEquationAlpha,m.blendSrcAlpha,m.blendDstAlpha,m.blendColor,m.blendAlpha,m.premultipliedAlpha),Y.setFunc(m.depthFunc),Y.setTest(m.depthTest),Y.setMask(m.depthWrite),W.setMask(m.colorWrite);let j0=m.stencilWrite;if(X.setTest(j0),j0)X.setMask(m.stencilWriteMask),X.setFunc(m.stencilFunc,m.stencilRef,m.stencilFuncMask),X.setOp(m.stencilFail,m.stencilZFail,m.stencilZPass);r(m.polygonOffset,m.polygonOffsetFactor,m.polygonOffsetUnits),m.alphaToCoverage===!0?X0(J.SAMPLE_ALPHA_TO_COVERAGE):Z0(J.SAMPLE_ALPHA_TO_COVERAGE)}function JJ(m){if(w!==m){if(m)J.frontFace(J.CW);else J.frontFace(J.CCW);w=m}}function c0(m){if(m!==_W){if(X0(J.CULL_FACE),m!==S)if(m===PQ)J.cullFace(J.BACK);else if(m===PW)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else Z0(J.CULL_FACE);S=m}function S0(m){if(m!==n){if(h)J.lineWidth(m);n=m}}function r(m,T0,U0){if(m){if(X0(J.POLYGON_OFFSET_FILL),y!==T0||c!==U0){if(y=T0,c=U0,Y.getReversed())T0=-T0;J.polygonOffset(T0,U0)}}else Z0(J.POLYGON_OFFSET_FILL)}function V0(m){if(m)X0(J.SCISSOR_TEST);else Z0(J.SCISSOR_TEST)}function j(m){if(m===void 0)m=J.TEXTURE0+i-1;if(g!==m)J.activeTexture(m),g=m}function r0(m,T0,U0){if(U0===void 0)if(g===null)U0=J.TEXTURE0+i-1;else U0=g;let j0=p[U0];if(j0===void 0)j0={type:void 0,texture:void 0},p[U0]=j0;if(j0.type!==m||j0.texture!==T0){if(g!==U0)J.activeTexture(U0),g=U0;J.bindTexture(m,T0||Y0[m]),j0.type=m,j0.texture=T0}}function e0(){let m=p[g];if(m!==void 0&&m.type!==void 0)J.bindTexture(m.type,null),m.type=void 0,m.texture=void 0}function R0(){try{J.compressedTexImage2D(...arguments)}catch(m){KJ("WebGLState:",m)}}function R(){try{J.compressedTexImage3D(...arguments)}catch(m){KJ("WebGLState:",m)}}function L(){try{J.texSubImage2D(...arguments)}catch(m){KJ("WebGLState:",m)}}function f(){try{J.texSubImage3D(...arguments)}catch(m){KJ("WebGLState:",m)}}function e(){try{J.compressedTexSubImage2D(...arguments)}catch(m){KJ("WebGLState:",m)}}function N0(){try{J.compressedTexSubImage3D(...arguments)}catch(m){KJ("WebGLState:",m)}}function l(){try{J.texStorage2D(...arguments)}catch(m){KJ("WebGLState:",m)}}function G0(){try{J.texStorage3D(...arguments)}catch(m){KJ("WebGLState:",m)}}function o(){try{J.texImage2D(...arguments)}catch(m){KJ("WebGLState:",m)}}function W0(){try{J.texImage3D(...arguments)}catch(m){KJ("WebGLState:",m)}}function a(m){if(N[m]!==void 0)return N[m];else return J.getParameter(m)}function E0(m,T0){if(N[m]!==T0)J.pixelStorei(m,T0),N[m]=T0}function F0(m){if(g0.equals(m)===!1)J.scissor(m.x,m.y,m.z,m.w),g0.copy(m)}function D0(m){if(M0.equals(m)===!1)J.viewport(m.x,m.y,m.z,m.w),M0.copy(m)}function m0(m,T0){let U0=H.get(T0);if(U0===void 0)U0=new WeakMap,H.set(T0,U0);let j0=U0.get(m);if(j0===void 0)j0=J.getUniformBlockIndex(T0,m.name),U0.set(m,j0)}function l0(m,T0){let j0=H.get(T0).get(m);if(U.get(T0)!==j0)J.uniformBlockBinding(T0,j0,m.__bindingPointIndex),U.set(T0,j0)}function s0(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),Y.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),q={},N={},g=null,p={},G={},F=new WeakMap,M=[],B=null,O=!1,E=null,C=null,P=null,k=null,z=null,_=null,A=null,D=new WJ(0,0,0),V=0,T=!1,w=null,S=null,n=null,y=null,c=null,g0.set(0,0,J.canvas.width,J.canvas.height),M0.set(0,0,J.canvas.width,J.canvas.height),W.reset(),Y.reset(),X.reset()}return{buffers:{color:W,depth:Y,stencil:X},enable:X0,disable:Z0,bindFramebuffer:k0,drawBuffers:Q0,useProgram:_0,setBlending:p0,setMaterial:w0,setFlipSided:JJ,setCullFace:c0,setLineWidth:S0,setPolygonOffset:r,setScissorTest:V0,activeTexture:j,bindTexture:r0,unbindTexture:e0,compressedTexImage2D:R0,compressedTexImage3D:R,texImage2D:o,texImage3D:W0,pixelStorei:E0,getParameter:a,updateUBOMapping:m0,uniformBlockBinding:l0,texStorage2D:l,texStorage3D:G0,texSubImage2D:L,texSubImage3D:f,compressedTexSubImage2D:e,compressedTexSubImage3D:N0,scissor:F0,viewport:D0,reset:s0}}function QF(J,$,Q,Z,K,W,Y){let X=$.has("WEBGL_multisampled_render_to_texture")?$.get("WEBGL_multisampled_render_to_texture"):null,U=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),H=new o0,q=new WeakMap,N=new Set,G,F=new WeakMap,M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(R){}function B(R,L){return M?new OffscreenCanvas(R,L):r6("canvas")}function O(R,L,f){let e=1,N0=R0(R);if(N0.width>f||N0.height>f)e=f/Math.max(N0.width,N0.height);if(e<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let l=Math.floor(e*N0.width),G0=Math.floor(e*N0.height);if(G===void 0)G=B(l,G0);let o=L?B(l,G0):G;return o.width=l,o.height=G0,o.getContext("2d").drawImage(R,0,0,l,G0),QJ("WebGLRenderer: Texture has been resized from ("+N0.width+"x"+N0.height+") to ("+l+"x"+G0+")."),o}else{if("data"in R)QJ("WebGLRenderer: Image in DataTexture is too big ("+N0.width+"x"+N0.height+").");return R}return R}function E(R){return R.generateMipmaps}function C(R){J.generateMipmap(R)}function P(R){if(R.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(R.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function k(R,L,f,e,N0,l=!1){if(R!==null){if(J[R]!==void 0)return J[R];QJ("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let G0;if(e){if(G0=$.get("EXT_texture_norm16"),!G0)QJ("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let o=L;if(L===J.RED){if(f===J.FLOAT)o=J.R32F;if(f===J.HALF_FLOAT)o=J.R16F;if(f===J.UNSIGNED_BYTE)o=J.R8;if(f===J.UNSIGNED_SHORT&&G0)o=G0.R16_EXT;if(f===J.SHORT&&G0)o=G0.R16_SNORM_EXT}if(L===J.RED_INTEGER){if(f===J.UNSIGNED_BYTE)o=J.R8UI;if(f===J.UNSIGNED_SHORT)o=J.R16UI;if(f===J.UNSIGNED_INT)o=J.R32UI;if(f===J.BYTE)o=J.R8I;if(f===J.SHORT)o=J.R16I;if(f===J.INT)o=J.R32I}if(L===J.RG){if(f===J.FLOAT)o=J.RG32F;if(f===J.HALF_FLOAT)o=J.RG16F;if(f===J.UNSIGNED_BYTE)o=J.RG8;if(f===J.UNSIGNED_SHORT&&G0)o=G0.RG16_EXT;if(f===J.SHORT&&G0)o=G0.RG16_SNORM_EXT}if(L===J.RG_INTEGER){if(f===J.UNSIGNED_BYTE)o=J.RG8UI;if(f===J.UNSIGNED_SHORT)o=J.RG16UI;if(f===J.UNSIGNED_INT)o=J.RG32UI;if(f===J.BYTE)o=J.RG8I;if(f===J.SHORT)o=J.RG16I;if(f===J.INT)o=J.RG32I}if(L===J.RGB_INTEGER){if(f===J.UNSIGNED_BYTE)o=J.RGB8UI;if(f===J.UNSIGNED_SHORT)o=J.RGB16UI;if(f===J.UNSIGNED_INT)o=J.RGB32UI;if(f===J.BYTE)o=J.RGB8I;if(f===J.SHORT)o=J.RGB16I;if(f===J.INT)o=J.RGB32I}if(L===J.RGBA_INTEGER){if(f===J.UNSIGNED_BYTE)o=J.RGBA8UI;if(f===J.UNSIGNED_SHORT)o=J.RGBA16UI;if(f===J.UNSIGNED_INT)o=J.RGBA32UI;if(f===J.BYTE)o=J.RGBA8I;if(f===J.SHORT)o=J.RGBA16I;if(f===J.INT)o=J.RGBA32I}if(L===J.RGB){if(f===J.UNSIGNED_SHORT&&G0)o=G0.RGB16_EXT;if(f===J.SHORT&&G0)o=G0.RGB16_SNORM_EXT;if(f===J.UNSIGNED_INT_5_9_9_9_REV)o=J.RGB9_E5;if(f===J.UNSIGNED_INT_10F_11F_11F_REV)o=J.R11F_G11F_B10F}if(L===J.RGBA){let W0=l?OZ:FJ.getTransfer(N0);if(f===J.FLOAT)o=J.RGBA32F;if(f===J.HALF_FLOAT)o=J.RGBA16F;if(f===J.UNSIGNED_BYTE)o=W0===RJ?J.SRGB8_ALPHA8:J.RGBA8;if(f===J.UNSIGNED_SHORT&&G0)o=G0.RGBA16_EXT;if(f===J.SHORT&&G0)o=G0.RGBA16_SNORM_EXT;if(f===J.UNSIGNED_SHORT_4_4_4_4)o=J.RGBA4;if(f===J.UNSIGNED_SHORT_5_5_5_1)o=J.RGB5_A1}if(o===J.R16F||o===J.R32F||o===J.RG16F||o===J.RG32F||o===J.RGBA16F||o===J.RGBA32F)$.get("EXT_color_buffer_float");return o}function z(R,L){let f;if(R){if(L===null||L===C8||L===C6)f=J.DEPTH24_STENCIL8;else if(L===U8)f=J.DEPTH32F_STENCIL8;else if(L===H7)f=J.DEPTH24_STENCIL8,QJ("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(L===null||L===C8||L===C6)f=J.DEPTH_COMPONENT24;else if(L===U8)f=J.DEPTH_COMPONENT32F;else if(L===H7)f=J.DEPTH_COMPONENT16;return f}function _(R,L){if(E(R)===!0||R.isFramebufferTexture&&R.minFilter!==u9&&R.minFilter!==L9)return Math.log2(Math.max(L.width,L.height))+1;else if(R.mipmaps!==void 0&&R.mipmaps.length>0)return R.mipmaps.length;else if(R.isCompressedTexture&&Array.isArray(R.image))return L.mipmaps.length;else return 1}function A(R){let L=R.target;if(L.removeEventListener("dispose",A),V(L),L.isVideoTexture)q.delete(L);if(L.isHTMLTexture)N.delete(L)}function D(R){let L=R.target;L.removeEventListener("dispose",D),w(L)}function V(R){let L=Z.get(R);if(L.__webglInit===void 0)return;let f=R.source,e=F.get(f);if(e){let N0=e[L.__cacheKey];if(N0.usedTimes--,N0.usedTimes===0)T(R);if(Object.keys(e).length===0)F.delete(f)}Z.remove(R)}function T(R){let L=Z.get(R);J.deleteTexture(L.__webglTexture);let f=R.source,e=F.get(f);delete e[L.__cacheKey],Y.memory.textures--}function w(R){let L=Z.get(R);if(R.depthTexture)R.depthTexture.dispose(),Z.remove(R.depthTexture);if(R.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(L.__webglFramebuffer[e]))for(let N0=0;N0<L.__webglFramebuffer[e].length;N0++)J.deleteFramebuffer(L.__webglFramebuffer[e][N0]);else J.deleteFramebuffer(L.__webglFramebuffer[e]);if(L.__webglDepthbuffer)J.deleteRenderbuffer(L.__webglDepthbuffer[e])}else{if(Array.isArray(L.__webglFramebuffer))for(let e=0;e<L.__webglFramebuffer.length;e++)J.deleteFramebuffer(L.__webglFramebuffer[e]);else J.deleteFramebuffer(L.__webglFramebuffer);if(L.__webglDepthbuffer)J.deleteRenderbuffer(L.__webglDepthbuffer);if(L.__webglMultisampledFramebuffer)J.deleteFramebuffer(L.__webglMultisampledFramebuffer);if(L.__webglColorRenderbuffer){for(let e=0;e<L.__webglColorRenderbuffer.length;e++)if(L.__webglColorRenderbuffer[e])J.deleteRenderbuffer(L.__webglColorRenderbuffer[e])}if(L.__webglDepthRenderbuffer)J.deleteRenderbuffer(L.__webglDepthRenderbuffer)}let f=R.textures;for(let e=0,N0=f.length;e<N0;e++){let l=Z.get(f[e]);if(l.__webglTexture)J.deleteTexture(l.__webglTexture),Y.memory.textures--;Z.remove(f[e])}Z.remove(R)}let S=0;function n(){S=0}function y(){return S}function c(R){S=R}function i(){let R=S;if(R>=K.maxTextures)QJ("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+K.maxTextures);return S+=1,R}function h(R){let L=[];return L.push(R.wrapS),L.push(R.wrapT),L.push(R.wrapR||0),L.push(R.magFilter),L.push(R.minFilter),L.push(R.anisotropy),L.push(R.internalFormat),L.push(R.format),L.push(R.type),L.push(R.generateMipmaps),L.push(R.premultiplyAlpha),L.push(R.flipY),L.push(R.unpackAlignment),L.push(R.colorSpace),L.join()}function t(R,L){let f=Z.get(R);if(R.isVideoTexture)r0(R);if(R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&f.__version!==R.version){let e=R.image;if(e===null)QJ("WebGLRenderer: Texture marked for update but no image data found.");else if(e.complete===!1)QJ("WebGLRenderer: Texture marked for update but image is incomplete");else{Z0(f,R,L);return}}else if(R.isExternalTexture)f.__webglTexture=R.sourceTexture?R.sourceTexture:null;Q.bindTexture(J.TEXTURE_2D,f.__webglTexture,J.TEXTURE0+L)}function v(R,L){let f=Z.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&f.__version!==R.version){Z0(f,R,L);return}else if(R.isExternalTexture)f.__webglTexture=R.sourceTexture?R.sourceTexture:null;Q.bindTexture(J.TEXTURE_2D_ARRAY,f.__webglTexture,J.TEXTURE0+L)}function g(R,L){let f=Z.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&f.__version!==R.version){Z0(f,R,L);return}Q.bindTexture(J.TEXTURE_3D,f.__webglTexture,J.TEXTURE0+L)}function p(R,L){let f=Z.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&f.__version!==R.version){k0(f,R,L);return}Q.bindTexture(J.TEXTURE_CUBE_MAP,f.__webglTexture,J.TEXTURE0+L)}let O0={[WY]:J.REPEAT,[Y$]:J.CLAMP_TO_EDGE,[YY]:J.MIRRORED_REPEAT},L0={[u9]:J.NEAREST,[XY]:J.NEAREST_MIPMAP_NEAREST,[U7]:J.NEAREST_MIPMAP_LINEAR,[L9]:J.LINEAR,[X$]:J.LINEAR_MIPMAP_NEAREST,[x8]:J.LINEAR_MIPMAP_LINEAR},g0={[MY]:J.NEVER,[kY]:J.ALWAYS,[DY]:J.LESS,[O$]:J.LEQUAL,[VY]:J.EQUAL,[E$]:J.GEQUAL,[LY]:J.GREATER,[BY]:J.NOTEQUAL};function M0(R,L){if(L.type===U8&&$.has("OES_texture_float_linear")===!1&&(L.magFilter===L9||L.magFilter===X$||L.magFilter===U7||L.magFilter===x8||L.minFilter===L9||L.minFilter===X$||L.minFilter===U7||L.minFilter===x8))QJ("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(R,J.TEXTURE_WRAP_S,O0[L.wrapS]),J.texParameteri(R,J.TEXTURE_WRAP_T,O0[L.wrapT]),R===J.TEXTURE_3D||R===J.TEXTURE_2D_ARRAY)J.texParameteri(R,J.TEXTURE_WRAP_R,O0[L.wrapR]);if(J.texParameteri(R,J.TEXTURE_MAG_FILTER,L0[L.magFilter]),J.texParameteri(R,J.TEXTURE_MIN_FILTER,L0[L.minFilter]),L.compareFunction)J.texParameteri(R,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(R,J.TEXTURE_COMPARE_FUNC,g0[L.compareFunction]);if($.has("EXT_texture_filter_anisotropic")===!0){if(L.magFilter===u9)return;if(L.minFilter!==U7&&L.minFilter!==x8)return;if(L.type===U8&&$.has("OES_texture_float_linear")===!1)return;if(L.anisotropy>1||Z.get(L).__currentAnisotropy){let f=$.get("EXT_texture_filter_anisotropic");J.texParameterf(R,f.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(L.anisotropy,K.getMaxAnisotropy())),Z.get(L).__currentAnisotropy=L.anisotropy}}}function d(R,L){let f=!1;if(R.__webglInit===void 0)R.__webglInit=!0,L.addEventListener("dispose",A);let e=L.source,N0=F.get(e);if(N0===void 0)N0={},F.set(e,N0);let l=h(L);if(l!==R.__cacheKey){if(N0[l]===void 0)N0[l]={texture:J.createTexture(),usedTimes:0},Y.memory.textures++,f=!0;N0[l].usedTimes++;let G0=N0[R.__cacheKey];if(G0!==void 0){if(N0[R.__cacheKey].usedTimes--,G0.usedTimes===0)T(L)}R.__cacheKey=l,R.__webglTexture=N0[l].texture}return f}function Y0(R,L,f){return Math.floor(Math.floor(R/f)/L)}function X0(R,L,f,e){let l=R.updateRanges;if(l.length===0)Q.texSubImage2D(J.TEXTURE_2D,0,0,0,L.width,L.height,f,e,L.data);else{l.sort((E0,F0)=>E0.start-F0.start);let G0=0;for(let E0=1;E0<l.length;E0++){let F0=l[G0],D0=l[E0],m0=F0.start+F0.count,l0=Y0(D0.start,L.width,4),s0=Y0(F0.start,L.width,4);if(D0.start<=m0+1&&l0===s0&&Y0(D0.start+D0.count-1,L.width,4)===l0)F0.count=Math.max(F0.count,D0.start+D0.count-F0.start);else++G0,l[G0]=D0}l.length=G0+1;let o=Q.getParameter(J.UNPACK_ROW_LENGTH),W0=Q.getParameter(J.UNPACK_SKIP_PIXELS),a=Q.getParameter(J.UNPACK_SKIP_ROWS);Q.pixelStorei(J.UNPACK_ROW_LENGTH,L.width);for(let E0=0,F0=l.length;E0<F0;E0++){let D0=l[E0],m0=Math.floor(D0.start/4),l0=Math.ceil(D0.count/4),s0=m0%L.width,m=Math.floor(m0/L.width),T0=l0,U0=1;Q.pixelStorei(J.UNPACK_SKIP_PIXELS,s0),Q.pixelStorei(J.UNPACK_SKIP_ROWS,m),Q.texSubImage2D(J.TEXTURE_2D,0,s0,m,T0,1,f,e,L.data)}R.clearUpdateRanges(),Q.pixelStorei(J.UNPACK_ROW_LENGTH,o),Q.pixelStorei(J.UNPACK_SKIP_PIXELS,W0),Q.pixelStorei(J.UNPACK_SKIP_ROWS,a)}}function Z0(R,L,f){let e=J.TEXTURE_2D;if(L.isDataArrayTexture||L.isCompressedArrayTexture)e=J.TEXTURE_2D_ARRAY;if(L.isData3DTexture)e=J.TEXTURE_3D;let N0=d(R,L),l=L.source;Q.bindTexture(e,R.__webglTexture,J.TEXTURE0+f);let G0=Z.get(l);if(l.version!==G0.__version||N0===!0){if(Q.activeTexture(J.TEXTURE0+f),(typeof ImageBitmap<"u"&&L.image instanceof ImageBitmap)===!1){let U0=FJ.getPrimaries(FJ.workingColorSpace),j0=L.colorSpace===u8?null:FJ.getPrimaries(L.colorSpace),h0=L.colorSpace===u8||U0===j0?J.NONE:J.BROWSER_DEFAULT_WEBGL;Q.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,L.flipY),Q.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),Q.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,h0)}Q.pixelStorei(J.UNPACK_ALIGNMENT,L.unpackAlignment);let W0=O(L.image,!1,K.maxTextureSize);W0=e0(L,W0);let a=W.convert(L.format,L.colorSpace),E0=W.convert(L.type),F0=k(L.internalFormat,a,E0,L.normalized,L.colorSpace,L.isVideoTexture);M0(e,L);let D0,m0=L.mipmaps,l0=L.isVideoTexture!==!0,s0=G0.__version===void 0||N0===!0,m=l.dataReady,T0=_(L,W0);if(L.isDepthTexture){if(F0=z(L.format===p8,L.type),s0)if(l0)Q.texStorage2D(J.TEXTURE_2D,1,F0,W0.width,W0.height);else Q.texImage2D(J.TEXTURE_2D,0,F0,W0.width,W0.height,0,a,E0,null)}else if(L.isDataTexture)if(m0.length>0){if(l0&&s0)Q.texStorage2D(J.TEXTURE_2D,T0,F0,m0[0].width,m0[0].height);for(let U0=0,j0=m0.length;U0<j0;U0++)if(D0=m0[U0],l0){if(m)Q.texSubImage2D(J.TEXTURE_2D,U0,0,0,D0.width,D0.height,a,E0,D0.data)}else Q.texImage2D(J.TEXTURE_2D,U0,F0,D0.width,D0.height,0,a,E0,D0.data);L.generateMipmaps=!1}else if(l0){if(s0)Q.texStorage2D(J.TEXTURE_2D,T0,F0,W0.width,W0.height);if(m)X0(L,W0,a,E0)}else Q.texImage2D(J.TEXTURE_2D,0,F0,W0.width,W0.height,0,a,E0,W0.data);else if(L.isCompressedTexture)if(L.isCompressedArrayTexture){if(l0&&s0)Q.texStorage3D(J.TEXTURE_2D_ARRAY,T0,F0,m0[0].width,m0[0].height,W0.depth);for(let U0=0,j0=m0.length;U0<j0;U0++)if(D0=m0[U0],L.format!==y9)if(a!==null)if(l0){if(m)if(L.layerUpdates.size>0){let h0=uZ(D0.width,D0.height,L.format,L.type);for(let b of L.layerUpdates){let s=D0.data.subarray(b*h0/D0.data.BYTES_PER_ELEMENT,(b+1)*h0/D0.data.BYTES_PER_ELEMENT);Q.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,U0,0,0,b,D0.width,D0.height,1,a,s)}}else Q.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,U0,0,0,0,D0.width,D0.height,W0.depth,a,D0.data)}else Q.compressedTexImage3D(J.TEXTURE_2D_ARRAY,U0,F0,D0.width,D0.height,W0.depth,0,D0.data,0,0);else QJ("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(l0){if(m)Q.texSubImage3D(J.TEXTURE_2D_ARRAY,U0,0,0,0,D0.width,D0.height,W0.depth,a,E0,D0.data)}else Q.texImage3D(J.TEXTURE_2D_ARRAY,U0,F0,D0.width,D0.height,W0.depth,0,a,E0,D0.data);if(L.layerUpdates.size>0)L.clearLayerUpdates()}else{if(l0&&s0)Q.texStorage2D(J.TEXTURE_2D,T0,F0,m0[0].width,m0[0].height);for(let U0=0,j0=m0.length;U0<j0;U0++)if(D0=m0[U0],L.format!==y9)if(a!==null)if(l0){if(m)Q.compressedTexSubImage2D(J.TEXTURE_2D,U0,0,0,D0.width,D0.height,a,D0.data)}else Q.compressedTexImage2D(J.TEXTURE_2D,U0,F0,D0.width,D0.height,0,D0.data);else QJ("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(l0){if(m)Q.texSubImage2D(J.TEXTURE_2D,U0,0,0,D0.width,D0.height,a,E0,D0.data)}else Q.texImage2D(J.TEXTURE_2D,U0,F0,D0.width,D0.height,0,a,E0,D0.data)}else if(L.isDataArrayTexture)if(l0){if(s0)Q.texStorage3D(J.TEXTURE_2D_ARRAY,T0,F0,W0.width,W0.height,W0.depth);if(m)if(L.layerUpdates.size>0){let U0=uZ(W0.width,W0.height,L.format,L.type);for(let j0 of L.layerUpdates){let h0=W0.data.subarray(j0*U0/W0.data.BYTES_PER_ELEMENT,(j0+1)*U0/W0.data.BYTES_PER_ELEMENT);Q.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,j0,W0.width,W0.height,1,a,E0,h0)}L.clearLayerUpdates()}else Q.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,W0.width,W0.height,W0.depth,a,E0,W0.data)}else Q.texImage3D(J.TEXTURE_2D_ARRAY,0,F0,W0.width,W0.height,W0.depth,0,a,E0,W0.data);else if(L.isData3DTexture)if(l0){if(s0)Q.texStorage3D(J.TEXTURE_3D,T0,F0,W0.width,W0.height,W0.depth);if(m)Q.texSubImage3D(J.TEXTURE_3D,0,0,0,0,W0.width,W0.height,W0.depth,a,E0,W0.data)}else Q.texImage3D(J.TEXTURE_3D,0,F0,W0.width,W0.height,W0.depth,0,a,E0,W0.data);else if(L.isFramebufferTexture){if(s0)if(l0)Q.texStorage2D(J.TEXTURE_2D,T0,F0,W0.width,W0.height);else{let{width:U0,height:j0}=W0;for(let h0=0;h0<T0;h0++)Q.texImage2D(J.TEXTURE_2D,h0,F0,U0,j0,0,a,E0,null),U0>>=1,j0>>=1}}else if(L.isHTMLTexture){if("texElementImage2D"in J){let U0=J.canvas;if(!U0.hasAttribute("layoutsubtree"))U0.setAttribute("layoutsubtree","true");if(W0.parentNode!==U0){U0.appendChild(W0),N.add(L),U0.onpaint=(j0)=>{let h0=j0.changedElements;for(let b of N)if(h0.includes(b.image))b.needsUpdate=!0},U0.requestPaint();return}if(J.texElementImage2D.length===3)J.texElementImage2D(J.TEXTURE_2D,J.RGBA8,W0);else{let{RGBA:h0,RGBA:b,UNSIGNED_BYTE:s}=J;J.texElementImage2D(J.TEXTURE_2D,0,h0,b,s,W0)}J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(m0.length>0){if(l0&&s0){let U0=R0(m0[0]);Q.texStorage2D(J.TEXTURE_2D,T0,F0,U0.width,U0.height)}for(let U0=0,j0=m0.length;U0<j0;U0++)if(D0=m0[U0],l0){if(m)Q.texSubImage2D(J.TEXTURE_2D,U0,0,0,a,E0,D0)}else Q.texImage2D(J.TEXTURE_2D,U0,F0,a,E0,D0);L.generateMipmaps=!1}else if(l0){if(s0){let U0=R0(W0);Q.texStorage2D(J.TEXTURE_2D,T0,F0,U0.width,U0.height)}if(m)Q.texSubImage2D(J.TEXTURE_2D,0,0,0,a,E0,W0)}else Q.texImage2D(J.TEXTURE_2D,0,F0,a,E0,W0);if(E(L))C(e);if(G0.__version=l.version,L.onUpdate)L.onUpdate(L)}R.__version=L.version}function k0(R,L,f){if(L.image.length!==6)return;let e=d(R,L),N0=L.source;Q.bindTexture(J.TEXTURE_CUBE_MAP,R.__webglTexture,J.TEXTURE0+f);let l=Z.get(N0);if(N0.version!==l.__version||e===!0){Q.activeTexture(J.TEXTURE0+f);let G0=FJ.getPrimaries(FJ.workingColorSpace),o=L.colorSpace===u8?null:FJ.getPrimaries(L.colorSpace),W0=L.colorSpace===u8||G0===o?J.NONE:J.BROWSER_DEFAULT_WEBGL;Q.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,L.flipY),Q.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),Q.pixelStorei(J.UNPACK_ALIGNMENT,L.unpackAlignment),Q.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,W0);let a=L.isCompressedTexture||L.image[0].isCompressedTexture,E0=L.image[0]&&L.image[0].isDataTexture,F0=[];for(let b=0;b<6;b++){if(!a&&!E0)F0[b]=O(L.image[b],!0,K.maxCubemapSize);else F0[b]=E0?L.image[b].image:L.image[b];F0[b]=e0(L,F0[b])}let D0=F0[0],m0=W.convert(L.format,L.colorSpace),l0=W.convert(L.type),s0=k(L.internalFormat,m0,l0,L.normalized,L.colorSpace),m=L.isVideoTexture!==!0,T0=l.__version===void 0||e===!0,U0=N0.dataReady,j0=_(L,D0);M0(J.TEXTURE_CUBE_MAP,L);let h0;if(a){if(m&&T0)Q.texStorage2D(J.TEXTURE_CUBE_MAP,j0,s0,D0.width,D0.height);for(let b=0;b<6;b++){h0=F0[b].mipmaps;for(let s=0;s<h0.length;s++){let H0=h0[s];if(L.format!==y9)if(m0!==null)if(m){if(U0)Q.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+b,s,0,0,H0.width,H0.height,m0,H0.data)}else Q.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+b,s,s0,H0.width,H0.height,0,H0.data);else QJ("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(m){if(U0)Q.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+b,s,0,0,H0.width,H0.height,m0,l0,H0.data)}else Q.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+b,s,s0,H0.width,H0.height,0,m0,l0,H0.data)}}}else{if(h0=L.mipmaps,m&&T0){if(h0.length>0)j0++;let b=R0(F0[0]);Q.texStorage2D(J.TEXTURE_CUBE_MAP,j0,s0,b.width,b.height)}for(let b=0;b<6;b++)if(E0){if(m){if(U0)Q.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+b,0,0,0,F0[b].width,F0[b].height,m0,l0,F0[b].data)}else Q.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+b,0,s0,F0[b].width,F0[b].height,0,m0,l0,F0[b].data);for(let s=0;s<h0.length;s++){let C0=h0[s].image[b].image;if(m){if(U0)Q.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+b,s+1,0,0,C0.width,C0.height,m0,l0,C0.data)}else Q.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+b,s+1,s0,C0.width,C0.height,0,m0,l0,C0.data)}}else{if(m){if(U0)Q.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+b,0,0,0,m0,l0,F0[b])}else Q.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+b,0,s0,m0,l0,F0[b]);for(let s=0;s<h0.length;s++){let H0=h0[s];if(m){if(U0)Q.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+b,s+1,0,0,m0,l0,H0.image[b])}else Q.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+b,s+1,s0,m0,l0,H0.image[b])}}}if(E(L))C(J.TEXTURE_CUBE_MAP);if(l.__version=N0.version,L.onUpdate)L.onUpdate(L)}R.__version=L.version}function Q0(R,L,f,e,N0,l){let G0=W.convert(f.format,f.colorSpace),o=W.convert(f.type),W0=k(f.internalFormat,G0,o,f.normalized,f.colorSpace),a=Z.get(L),E0=Z.get(f);if(E0.__renderTarget=L,!a.__hasExternalTextures){let F0=Math.max(1,L.width>>l),D0=Math.max(1,L.height>>l);if(N0===J.TEXTURE_3D||N0===J.TEXTURE_2D_ARRAY)Q.texImage3D(N0,l,W0,F0,D0,L.depth,0,G0,o,null);else Q.texImage2D(N0,l,W0,F0,D0,0,G0,o,null)}if(Q.bindFramebuffer(J.FRAMEBUFFER,R),j(L))X.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,e,N0,E0.__webglTexture,0,V0(L));else if(N0===J.TEXTURE_2D||N0>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&N0<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,e,N0,E0.__webglTexture,l);Q.bindFramebuffer(J.FRAMEBUFFER,null)}function _0(R,L,f){if(J.bindRenderbuffer(J.RENDERBUFFER,R),L.depthBuffer){let e=L.depthTexture,N0=e&&e.isDepthTexture?e.type:null,l=z(L.stencilBuffer,N0),G0=L.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(j(L))X.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,V0(L),l,L.width,L.height);else if(f)J.renderbufferStorageMultisample(J.RENDERBUFFER,V0(L),l,L.width,L.height);else J.renderbufferStorage(J.RENDERBUFFER,l,L.width,L.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,G0,J.RENDERBUFFER,R)}else{let e=L.textures;for(let N0=0;N0<e.length;N0++){let l=e[N0],G0=W.convert(l.format,l.colorSpace),o=W.convert(l.type),W0=k(l.internalFormat,G0,o,l.normalized,l.colorSpace);if(j(L))X.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,V0(L),W0,L.width,L.height);else if(f)J.renderbufferStorageMultisample(J.RENDERBUFFER,V0(L),W0,L.width,L.height);else J.renderbufferStorage(J.RENDERBUFFER,W0,L.width,L.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function z0(R,L,f){let e=L.isWebGLCubeRenderTarget===!0;if(Q.bindFramebuffer(J.FRAMEBUFFER,R),!(L.depthTexture&&L.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let N0=Z.get(L.depthTexture);if(N0.__renderTarget=L,!N0.__webglTexture||L.depthTexture.image.width!==L.width||L.depthTexture.image.height!==L.height)L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0;if(e){if(N0.__webglInit===void 0)N0.__webglInit=!0,L.depthTexture.addEventListener("dispose",A);if(N0.__webglTexture===void 0){N0.__webglTexture=J.createTexture(),Q.bindTexture(J.TEXTURE_CUBE_MAP,N0.__webglTexture),M0(J.TEXTURE_CUBE_MAP,L.depthTexture);let a=W.convert(L.depthTexture.format),E0=W.convert(L.depthTexture.type),F0;if(L.depthTexture.format===g8)F0=J.DEPTH_COMPONENT24;else if(L.depthTexture.format===p8)F0=J.DEPTH24_STENCIL8;for(let D0=0;D0<6;D0++)J.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+D0,0,F0,L.width,L.height,0,a,E0,null)}}else t(L.depthTexture,0);let l=N0.__webglTexture,G0=V0(L),o=e?J.TEXTURE_CUBE_MAP_POSITIVE_X+f:J.TEXTURE_2D,W0=L.depthTexture.format===p8?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(L.depthTexture.format===g8)if(j(L))X.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,W0,o,l,0,G0);else J.framebufferTexture2D(J.FRAMEBUFFER,W0,o,l,0);else if(L.depthTexture.format===p8)if(j(L))X.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,W0,o,l,0,G0);else J.framebufferTexture2D(J.FRAMEBUFFER,W0,o,l,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function B0(R){let L=Z.get(R),f=R.isWebGLCubeRenderTarget===!0;if(L.__boundDepthTexture!==R.depthTexture){let e=R.depthTexture;if(L.__depthDisposeCallback)L.__depthDisposeCallback();if(e){let N0=()=>{delete L.__boundDepthTexture,delete L.__depthDisposeCallback,e.removeEventListener("dispose",N0)};e.addEventListener("dispose",N0),L.__depthDisposeCallback=N0}L.__boundDepthTexture=e}if(R.depthTexture&&!L.__autoAllocateDepthBuffer)if(f)for(let e=0;e<6;e++)z0(L.__webglFramebuffer[e],R,e);else{let e=R.texture.mipmaps;if(e&&e.length>0)z0(L.__webglFramebuffer[0],R,0);else z0(L.__webglFramebuffer,R,0)}else if(f){L.__webglDepthbuffer=[];for(let e=0;e<6;e++)if(Q.bindFramebuffer(J.FRAMEBUFFER,L.__webglFramebuffer[e]),L.__webglDepthbuffer[e]===void 0)L.__webglDepthbuffer[e]=J.createRenderbuffer(),_0(L.__webglDepthbuffer[e],R,!1);else{let N0=R.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,l=L.__webglDepthbuffer[e];J.bindRenderbuffer(J.RENDERBUFFER,l),J.framebufferRenderbuffer(J.FRAMEBUFFER,N0,J.RENDERBUFFER,l)}}else{let e=R.texture.mipmaps;if(e&&e.length>0)Q.bindFramebuffer(J.FRAMEBUFFER,L.__webglFramebuffer[0]);else Q.bindFramebuffer(J.FRAMEBUFFER,L.__webglFramebuffer);if(L.__webglDepthbuffer===void 0)L.__webglDepthbuffer=J.createRenderbuffer(),_0(L.__webglDepthbuffer,R,!1);else{let N0=R.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,l=L.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,l),J.framebufferRenderbuffer(J.FRAMEBUFFER,N0,J.RENDERBUFFER,l)}}Q.bindFramebuffer(J.FRAMEBUFFER,null)}function p0(R,L,f){let e=Z.get(R);if(L!==void 0)Q0(e.__webglFramebuffer,R,R.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(f!==void 0)B0(R)}function w0(R){let L=R.texture,f=Z.get(R),e=Z.get(L);R.addEventListener("dispose",D);let N0=R.textures,l=R.isWebGLCubeRenderTarget===!0,G0=N0.length>1;if(!G0){if(e.__webglTexture===void 0)e.__webglTexture=J.createTexture();e.__version=L.version,Y.memory.textures++}if(l){f.__webglFramebuffer=[];for(let o=0;o<6;o++)if(L.mipmaps&&L.mipmaps.length>0){f.__webglFramebuffer[o]=[];for(let W0=0;W0<L.mipmaps.length;W0++)f.__webglFramebuffer[o][W0]=J.createFramebuffer()}else f.__webglFramebuffer[o]=J.createFramebuffer()}else{if(L.mipmaps&&L.mipmaps.length>0){f.__webglFramebuffer=[];for(let o=0;o<L.mipmaps.length;o++)f.__webglFramebuffer[o]=J.createFramebuffer()}else f.__webglFramebuffer=J.createFramebuffer();if(G0)for(let o=0,W0=N0.length;o<W0;o++){let a=Z.get(N0[o]);if(a.__webglTexture===void 0)a.__webglTexture=J.createTexture(),Y.memory.textures++}if(R.samples>0&&j(R)===!1){f.__webglMultisampledFramebuffer=J.createFramebuffer(),f.__webglColorRenderbuffer=[],Q.bindFramebuffer(J.FRAMEBUFFER,f.__webglMultisampledFramebuffer);for(let o=0;o<N0.length;o++){let W0=N0[o];f.__webglColorRenderbuffer[o]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,f.__webglColorRenderbuffer[o]);let a=W.convert(W0.format,W0.colorSpace),E0=W.convert(W0.type),F0=k(W0.internalFormat,a,E0,W0.normalized,W0.colorSpace,R.isXRRenderTarget===!0),D0=V0(R);J.renderbufferStorageMultisample(J.RENDERBUFFER,D0,F0,R.width,R.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+o,J.RENDERBUFFER,f.__webglColorRenderbuffer[o])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),R.depthBuffer)f.__webglDepthRenderbuffer=J.createRenderbuffer(),_0(f.__webglDepthRenderbuffer,R,!0);Q.bindFramebuffer(J.FRAMEBUFFER,null)}}if(l){Q.bindTexture(J.TEXTURE_CUBE_MAP,e.__webglTexture),M0(J.TEXTURE_CUBE_MAP,L);for(let o=0;o<6;o++)if(L.mipmaps&&L.mipmaps.length>0)for(let W0=0;W0<L.mipmaps.length;W0++)Q0(f.__webglFramebuffer[o][W0],R,L,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+o,W0);else Q0(f.__webglFramebuffer[o],R,L,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+o,0);if(E(L))C(J.TEXTURE_CUBE_MAP);Q.unbindTexture()}else if(G0){for(let o=0,W0=N0.length;o<W0;o++){let a=N0[o],E0=Z.get(a),F0=J.TEXTURE_2D;if(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)F0=R.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if(Q.bindTexture(F0,E0.__webglTexture),M0(F0,a),Q0(f.__webglFramebuffer,R,a,J.COLOR_ATTACHMENT0+o,F0,0),E(a))C(F0)}Q.unbindTexture()}else{let o=J.TEXTURE_2D;if(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)o=R.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if(Q.bindTexture(o,e.__webglTexture),M0(o,L),L.mipmaps&&L.mipmaps.length>0)for(let W0=0;W0<L.mipmaps.length;W0++)Q0(f.__webglFramebuffer[W0],R,L,J.COLOR_ATTACHMENT0,o,W0);else Q0(f.__webglFramebuffer,R,L,J.COLOR_ATTACHMENT0,o,0);if(E(L))C(o);Q.unbindTexture()}if(R.depthBuffer)B0(R)}function JJ(R){let L=R.textures;for(let f=0,e=L.length;f<e;f++){let N0=L[f];if(E(N0)){let l=P(R),G0=Z.get(N0).__webglTexture;Q.bindTexture(l,G0),C(l),Q.unbindTexture()}}}let c0=[],S0=[];function r(R){if(R.samples>0){if(j(R)===!1){let{textures:L,width:f,height:e}=R,N0=J.COLOR_BUFFER_BIT,l=R.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,G0=Z.get(R),o=L.length>1;if(o)for(let a=0;a<L.length;a++)Q.bindFramebuffer(J.FRAMEBUFFER,G0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+a,J.RENDERBUFFER,null),Q.bindFramebuffer(J.FRAMEBUFFER,G0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+a,J.TEXTURE_2D,null,0);Q.bindFramebuffer(J.READ_FRAMEBUFFER,G0.__webglMultisampledFramebuffer);let W0=R.texture.mipmaps;if(W0&&W0.length>0)Q.bindFramebuffer(J.DRAW_FRAMEBUFFER,G0.__webglFramebuffer[0]);else Q.bindFramebuffer(J.DRAW_FRAMEBUFFER,G0.__webglFramebuffer);for(let a=0;a<L.length;a++){if(R.resolveDepthBuffer){if(R.depthBuffer)N0|=J.DEPTH_BUFFER_BIT;if(R.stencilBuffer&&R.resolveStencilBuffer)N0|=J.STENCIL_BUFFER_BIT}if(o){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,G0.__webglColorRenderbuffer[a]);let E0=Z.get(L[a]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,E0,0)}if(J.blitFramebuffer(0,0,f,e,0,0,f,e,N0,J.NEAREST),U===!0){if(c0.length=0,S0.length=0,c0.push(J.COLOR_ATTACHMENT0+a),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1)c0.push(l),S0.push(l),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,S0);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,c0)}}if(Q.bindFramebuffer(J.READ_FRAMEBUFFER,null),Q.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),o)for(let a=0;a<L.length;a++){Q.bindFramebuffer(J.FRAMEBUFFER,G0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+a,J.RENDERBUFFER,G0.__webglColorRenderbuffer[a]);let E0=Z.get(L[a]).__webglTexture;Q.bindFramebuffer(J.FRAMEBUFFER,G0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+a,J.TEXTURE_2D,E0,0)}Q.bindFramebuffer(J.DRAW_FRAMEBUFFER,G0.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&U){let L=R.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[L])}}}function V0(R){return Math.min(K.maxSamples,R.samples)}function j(R){let L=Z.get(R);return R.samples>0&&$.has("WEBGL_multisampled_render_to_texture")===!0&&L.__useRenderToTexture!==!1}function r0(R){let L=Y.render.frame;if(q.get(R)!==L)q.set(R,L),R.update()}function e0(R,L){let{colorSpace:f,format:e,type:N0}=R;if(R.isCompressedTexture===!0||R.isVideoTexture===!0)return L;if(f!==P6&&f!==u8)if(FJ.getTransfer(f)===RJ){if(e!==y9||N0!==C9)QJ("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else KJ("WebGLTextures: Unsupported texture color space:",f);return L}function R0(R){if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement)H.width=R.naturalWidth||R.width,H.height=R.naturalHeight||R.height;else if(typeof VideoFrame<"u"&&R instanceof VideoFrame)H.width=R.displayWidth,H.height=R.displayHeight;else H.width=R.width,H.height=R.height;return H}this.allocateTextureUnit=i,this.resetTextureUnits=n,this.getTextureUnits=y,this.setTextureUnits=c,this.setTexture2D=t,this.setTexture2DArray=v,this.setTexture3D=g,this.setTextureCube=p,this.rebindTextures=p0,this.setupRenderTarget=w0,this.updateRenderTargetMipmap=JJ,this.updateMultisampleRenderTarget=r,this.setupDepthRenderbuffer=B0,this.setupFrameBufferTexture=Q0,this.useMultisampledRTT=j,this.isReversedDepthBuffer=function(){return Q.buffers.depth.getReversed()}}function ZF(J,$){function Q(Z,K=u8){let W,Y=FJ.getTransfer(K);if(Z===C9)return J.UNSIGNED_BYTE;if(Z===jQ)return J.UNSIGNED_SHORT_4_4_4_4;if(Z===vQ)return J.UNSIGNED_SHORT_5_5_5_1;if(Z===GY)return J.UNSIGNED_INT_5_9_9_9_REV;if(Z===qY)return J.UNSIGNED_INT_10F_11F_11F_REV;if(Z===UY)return J.BYTE;if(Z===HY)return J.SHORT;if(Z===H7)return J.UNSIGNED_SHORT;if(Z===SQ)return J.INT;if(Z===C8)return J.UNSIGNED_INT;if(Z===U8)return J.FLOAT;if(Z===tJ)return J.HALF_FLOAT;if(Z===NY)return J.ALPHA;if(Z===FY)return J.RGB;if(Z===y9)return J.RGBA;if(Z===g8)return J.DEPTH_COMPONENT;if(Z===p8)return J.DEPTH_STENCIL;if(Z===OY)return J.RED;if(Z===yQ)return J.RED_INTEGER;if(Z===m8)return J.RG;if(Z===bQ)return J.RG_INTEGER;if(Z===fQ)return J.RGBA_INTEGER;if(Z===U$||Z===H$||Z===G$||Z===q$)if(Y===RJ)if(W=$.get("WEBGL_compressed_texture_s3tc_srgb"),W!==null){if(Z===U$)return W.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Z===H$)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Z===G$)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Z===q$)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(W=$.get("WEBGL_compressed_texture_s3tc"),W!==null){if(Z===U$)return W.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Z===H$)return W.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Z===G$)return W.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Z===q$)return W.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Z===hQ||Z===xQ||Z===gQ||Z===pQ)if(W=$.get("WEBGL_compressed_texture_pvrtc"),W!==null){if(Z===hQ)return W.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Z===xQ)return W.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Z===gQ)return W.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Z===pQ)return W.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Z===mQ||Z===uQ||Z===lQ||Z===dQ||Z===cQ||Z===N$||Z===nQ)if(W=$.get("WEBGL_compressed_texture_etc"),W!==null){if(Z===mQ||Z===uQ)return Y===RJ?W.COMPRESSED_SRGB8_ETC2:W.COMPRESSED_RGB8_ETC2;if(Z===lQ)return Y===RJ?W.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:W.COMPRESSED_RGBA8_ETC2_EAC;if(Z===dQ)return W.COMPRESSED_R11_EAC;if(Z===cQ)return W.COMPRESSED_SIGNED_R11_EAC;if(Z===N$)return W.COMPRESSED_RG11_EAC;if(Z===nQ)return W.COMPRESSED_SIGNED_RG11_EAC}else return null;if(Z===sQ||Z===iQ||Z===oQ||Z===aQ||Z===rQ||Z===tQ||Z===eQ||Z===JZ||Z===$Z||Z===QZ||Z===ZZ||Z===KZ||Z===WZ||Z===YZ)if(W=$.get("WEBGL_compressed_texture_astc"),W!==null){if(Z===sQ)return Y===RJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:W.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Z===iQ)return Y===RJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:W.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Z===oQ)return Y===RJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:W.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Z===aQ)return Y===RJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:W.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Z===rQ)return Y===RJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:W.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Z===tQ)return Y===RJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:W.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Z===eQ)return Y===RJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:W.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Z===JZ)return Y===RJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:W.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Z===$Z)return Y===RJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:W.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Z===QZ)return Y===RJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:W.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Z===ZZ)return Y===RJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:W.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Z===KZ)return Y===RJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:W.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Z===WZ)return Y===RJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:W.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Z===YZ)return Y===RJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:W.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Z===XZ||Z===UZ||Z===HZ)if(W=$.get("EXT_texture_compression_bptc"),W!==null){if(Z===XZ)return Y===RJ?W.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:W.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Z===UZ)return W.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Z===HZ)return W.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Z===GZ||Z===qZ||Z===F$||Z===NZ)if(W=$.get("EXT_texture_compression_rgtc"),W!==null){if(Z===GZ)return W.COMPRESSED_RED_RGTC1_EXT;if(Z===qZ)return W.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Z===F$)return W.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Z===NZ)return W.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(Z===C6)return J.UNSIGNED_INT_24_8;return J[Z]!==void 0?J[Z]:null}return{convert:Q}}var KF=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,WF=`
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

}`;class UX{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,$){if(this.texture===null){let Q=new R$(J.texture);if(J.depthNear!==$.depthNear||J.depthFar!==$.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=Q}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let $=J.cameras[0].viewport,Q=new ZJ({vertexShader:KF,fragmentShader:WF,uniforms:{depthColor:{value:this.texture},depthWidth:{value:$.z},depthHeight:{value:$.w}}});this.mesh=new GJ(new H9(20,20),Q)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class HX extends H8{constructor(J,$){super();let Q=this,Z=null,K=1,W=null,Y="local-floor",X=1,U=null,H=null,q=null,N=null,G=null,F=null,M=typeof XRWebGLBinding<"u",B=new UX,O={},E=$.getContextAttributes(),C=null,P=null,k=[],z=[],_=new o0,A=null,D=null,V=new E9;V.viewport=new jJ;let T=new E9;T.viewport=new jJ;let w=[V,T],S=new xZ,n=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(d){let Y0=k[d];if(Y0===void 0)Y0=new q7,k[d]=Y0;return Y0.getTargetRaySpace()},this.getControllerGrip=function(d){let Y0=k[d];if(Y0===void 0)Y0=new q7,k[d]=Y0;return Y0.getGripSpace()},this.getHand=function(d){let Y0=k[d];if(Y0===void 0)Y0=new q7,k[d]=Y0;return Y0.getHandSpace()};function c(d){let Y0=z.indexOf(d.inputSource);if(Y0===-1)return;let X0=k[Y0];if(X0!==void 0)X0.update(d.inputSource,d.frame,U||W),X0.dispatchEvent({type:d.type,data:d.inputSource})}function i(){Z.removeEventListener("select",c),Z.removeEventListener("selectstart",c),Z.removeEventListener("selectend",c),Z.removeEventListener("squeeze",c),Z.removeEventListener("squeezestart",c),Z.removeEventListener("squeezeend",c),Z.removeEventListener("end",i),Z.removeEventListener("inputsourceschange",h);for(let d=0;d<k.length;d++){let Y0=z[d];if(Y0===null)continue;z[d]=null,k[d].disconnect(Y0)}n=null,y=null,B.reset();for(let d in O)delete O[d];if(J.setRenderTarget(C),G=null,N=null,q=null,Z=null,P=null,M0.stop(),Q.isPresenting=!1,J.setPixelRatio(A),J.setSize(_.width,_.height,!1),D!==null){let d=D.camera;d.fov=D.fov,d.zoom=D.zoom,d.updateProjectionMatrix(),D=null}Q.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(d){if(K=d,Q.isPresenting===!0)QJ("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(d){if(Y=d,Q.isPresenting===!0)QJ("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return U||W},this.setReferenceSpace=function(d){U=d},this.getBaseLayer=function(){return N!==null?N:G},this.getBinding=function(){if(q===null&&M)q=new XRWebGLBinding(Z,$);return q},this.getFrame=function(){return F},this.getSession=function(){return Z},this.setSession=async function(d){if(Z=d,Z!==null){if(C=J.getRenderTarget(),Z.addEventListener("select",c),Z.addEventListener("selectstart",c),Z.addEventListener("selectend",c),Z.addEventListener("squeeze",c),Z.addEventListener("squeezestart",c),Z.addEventListener("squeezeend",c),Z.addEventListener("end",i),Z.addEventListener("inputsourceschange",h),E.xrCompatible!==!0)await $.makeXRCompatible();if(A=J.getPixelRatio(),J.getSize(_),!(M&&("createProjectionLayer"in XRWebGLBinding.prototype))){let X0={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:K};G=new XRWebGLLayer(Z,$,X0),Z.updateRenderState({baseLayer:G}),J.setPixelRatio(1),J.setSize(G.framebufferWidth,G.framebufferHeight,!1),P=new pJ(G.framebufferWidth,G.framebufferHeight,{format:y9,type:C9,colorSpace:J.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:G.ignoreDepthValues===!1,resolveStencilBuffer:G.ignoreDepthValues===!1,storeMultisampledDepthBuffer:G.ignoreDepthValues===!1,storeMultisampledStencilBuffer:G.ignoreDepthValues===!1})}else{let X0=null,Z0=null,k0=null;if(E.depth)k0=E.stencil?$.DEPTH24_STENCIL8:$.DEPTH_COMPONENT24,X0=E.stencil?p8:g8,Z0=E.stencil?C6:C8;let Q0={colorFormat:$.RGBA8,depthFormat:k0,scaleFactor:K};q=this.getBinding(),N=q.createProjectionLayer(Q0),Z.updateRenderState({layers:[N]}),J.setPixelRatio(1),J.setSize(N.textureWidth,N.textureHeight,!1),P=new pJ(N.textureWidth,N.textureHeight,{format:y9,type:C9,depthTexture:new d8(N.textureWidth,N.textureHeight,Z0,void 0,void 0,void 0,void 0,void 0,void 0,X0),stencilBuffer:E.stencil,colorSpace:J.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:N.ignoreDepthValues===!1,resolveStencilBuffer:N.ignoreDepthValues===!1,storeMultisampledDepthBuffer:N.ignoreDepthValues===!1,storeMultisampledStencilBuffer:N.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(X),U=null,W=await Z.requestReferenceSpace(Y),M0.setContext(Z),M0.start(),Q.isPresenting=!0,Q.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(Z!==null)return Z.environmentBlendMode},this.getDepthTexture=function(){return B.getDepthTexture()};function h(d){for(let Y0=0;Y0<d.removed.length;Y0++){let X0=d.removed[Y0],Z0=z.indexOf(X0);if(Z0>=0)z[Z0]=null,k[Z0].disconnect(X0)}for(let Y0=0;Y0<d.added.length;Y0++){let X0=d.added[Y0],Z0=z.indexOf(X0);if(Z0===-1){for(let Q0=0;Q0<k.length;Q0++)if(Q0>=z.length){z.push(X0),Z0=Q0;break}else if(z[Q0]===null){z[Q0]=X0,Z0=Q0;break}if(Z0===-1)break}let k0=k[Z0];if(k0)k0.connect(X0)}}let t=new x,v=new x;function g(d,Y0,X0){t.setFromMatrixPosition(Y0.matrixWorld),v.setFromMatrixPosition(X0.matrixWorld);let Z0=t.distanceTo(v),k0=Y0.projectionMatrix.elements,Q0=X0.projectionMatrix.elements,_0=k0[14]/(k0[10]-1),z0=k0[14]/(k0[10]+1),B0=(k0[9]+1)/k0[5],p0=(k0[9]-1)/k0[5],w0=(k0[8]-1)/k0[0],JJ=(Q0[8]+1)/Q0[0],c0=_0*w0,S0=_0*JJ,r=Z0/(-w0+JJ),V0=r*-w0;if(Y0.matrixWorld.decompose(d.position,d.quaternion,d.scale),d.translateX(V0),d.translateZ(r),d.matrixWorld.compose(d.position,d.quaternion,d.scale),d.matrixWorldInverse.copy(d.matrixWorld).invert(),k0[10]===-1)d.projectionMatrix.copy(Y0.projectionMatrix),d.projectionMatrixInverse.copy(Y0.projectionMatrixInverse);else{let j=_0+r,r0=z0+r,e0=c0-V0,R0=S0+(Z0-V0),R=B0*z0/r0*j,L=p0*z0/r0*j;d.projectionMatrix.makePerspective(e0,R0,R,L,j,r0),d.projectionMatrixInverse.copy(d.projectionMatrix).invert()}}function p(d,Y0){if(Y0===null)d.matrixWorld.copy(d.matrix);else d.matrixWorld.multiplyMatrices(Y0.matrixWorld,d.matrix);d.matrixWorldInverse.copy(d.matrixWorld).invert()}this.updateCamera=function(d){if(Z===null)return;let{near:Y0,far:X0}=d;if(B.texture!==null){if(B.depthNear>0)Y0=B.depthNear;if(B.depthFar>0)X0=B.depthFar}if(S.near=T.near=V.near=Y0,S.far=T.far=V.far=X0,n!==S.near||y!==S.far)Z.updateRenderState({depthNear:S.near,depthFar:S.far}),n=S.near,y=S.far;S.layers.mask=d.layers.mask|6,V.layers.mask=S.layers.mask&-5,T.layers.mask=S.layers.mask&-3;let Z0=d.parent,k0=S.cameras;p(S,Z0);for(let Q0=0;Q0<k0.length;Q0++)p(k0[Q0],Z0);if(k0.length===2)g(S,V,T);else S.projectionMatrix.copy(V.projectionMatrix);if(D===null&&d.isPerspectiveCamera)D={camera:d,fov:d.fov,zoom:d.zoom};O0(d,S,Z0)};function O0(d,Y0,X0){if(X0===null)d.matrix.copy(Y0.matrixWorld);else d.matrix.copy(X0.matrixWorld),d.matrix.invert(),d.matrix.multiply(Y0.matrixWorld);if(d.matrix.decompose(d.position,d.quaternion,d.scale),d.updateMatrixWorld(!0),d.projectionMatrix.copy(Y0.projectionMatrix),d.projectionMatrixInverse.copy(Y0.projectionMatrixInverse),d.isPerspectiveCamera)d.fov=$$*2*Math.atan(1/d.projectionMatrix.elements[5]),d.zoom=1}this.getCamera=function(){return S},this.getFoveation=function(){if(N===null&&G===null)return;return X},this.setFoveation=function(d){if(X=d,N!==null)N.fixedFoveation=d;if(G!==null&&G.fixedFoveation!==void 0)G.fixedFoveation=d},this.hasDepthSensing=function(){return B.texture!==null},this.getDepthSensingMesh=function(){return B.getMesh(S)},this.getCameraTexture=function(d){return O[d]};let L0=null;function g0(d,Y0){if(H=Y0.getViewerPose(U||W),F=Y0,H!==null){let X0=H.views;if(G!==null)J.setRenderTargetFramebuffer(P,G.framebuffer),J.setRenderTarget(P);let Z0=!1;if(X0.length!==S.cameras.length)S.cameras.length=0,Z0=!0;for(let z0=0;z0<X0.length;z0++){let B0=X0[z0],p0=null;if(G!==null)p0=G.getViewport(B0);else{let JJ=q.getViewSubImage(N,B0);if(p0=JJ.viewport,z0===0)J.setRenderTargetTextures(P,JJ.colorTexture,JJ.depthStencilTexture),J.setRenderTarget(P)}let w0=w[z0];if(w0===void 0)w0=new E9,w0.layers.enable(z0),w0.viewport=new jJ,w[z0]=w0;if(w0.matrix.fromArray(B0.transform.matrix),w0.matrix.decompose(w0.position,w0.quaternion,w0.scale),w0.projectionMatrix.fromArray(B0.projectionMatrix),w0.projectionMatrixInverse.copy(w0.projectionMatrix).invert(),w0.viewport.set(p0.x,p0.y,p0.width,p0.height),z0===0)S.matrix.copy(w0.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale);if(Z0===!0)S.cameras.push(w0)}let k0=Z.enabledFeatures;if(k0&&k0.includes("depth-sensing")&&Z.depthUsage=="gpu-optimized"&&M){q=Q.getBinding();let z0=q.getDepthInformation(X0[0]);if(z0&&z0.isValid&&z0.texture)B.init(z0,Z.renderState)}if(k0&&k0.includes("camera-access")&&M){J.state.unbindTexture(),q=Q.getBinding();for(let z0=0;z0<X0.length;z0++){let B0=X0[z0].camera;if(B0){let p0=O[B0];if(!p0)p0=new R$,O[B0]=p0;let w0=q.getCameraImage(B0);p0.sourceTexture=w0}}}}for(let X0=0;X0<k.length;X0++){let Z0=z[X0],k0=k[X0];if(Z0!==null&&k0!==void 0)k0.update(Z0,Y0,U||W)}if(L0)L0(d,Y0);if(Y0.detectedPlanes)Q.dispatchEvent({type:"planesdetected",data:Y0});F=null}let M0=new rY;M0.setAnimationLoop(g0),this.setAnimationLoop=function(d){L0=d},this.dispose=function(){}}}var YF=new bJ,GX=new UJ;GX.set(-1,0,0,0,1,0,0,0,1);function XF(J,$){function Q(O,E){if(O.matrixAutoUpdate===!0)O.updateMatrix();E.value.copy(O.matrix)}function Z(O,E){if(E.color.getRGB(O.fogColor.value,RZ(J)),E.isFog)O.fogNear.value=E.near,O.fogFar.value=E.far;else if(E.isFogExp2)O.fogDensity.value=E.density}function K(O,E,C,P,k){if(E.isNodeMaterial)E.uniformsNeedUpdate=!1;else if(E.isMeshBasicMaterial)W(O,E);else if(E.isMeshLambertMaterial){if(W(O,E),E.envMap)O.envMapIntensity.value=E.envMapIntensity}else if(E.isMeshToonMaterial)W(O,E),N(O,E);else if(E.isMeshPhongMaterial){if(W(O,E),q(O,E),E.envMap)O.envMapIntensity.value=E.envMapIntensity}else if(E.isMeshStandardMaterial){if(W(O,E),G(O,E),E.isMeshPhysicalMaterial)F(O,E,k)}else if(E.isMeshMatcapMaterial)W(O,E),M(O,E);else if(E.isMeshDepthMaterial)W(O,E);else if(E.isMeshDistanceMaterial)W(O,E),B(O,E);else if(E.isMeshNormalMaterial)W(O,E);else if(E.isLineBasicMaterial){if(Y(O,E),E.isLineDashedMaterial)X(O,E)}else if(E.isPointsMaterial)U(O,E,C,P);else if(E.isSpriteMaterial)H(O,E);else if(E.isShadowMaterial)O.color.value.copy(E.color),O.opacity.value=E.opacity;else if(E.isShaderMaterial)E.uniformsNeedUpdate=!1}function W(O,E){if(O.opacity.value=E.opacity,E.color)O.diffuse.value.copy(E.color);if(E.emissive)O.emissive.value.copy(E.emissive).multiplyScalar(E.emissiveIntensity);if(E.map)O.map.value=E.map,Q(E.map,O.mapTransform);if(E.alphaMap)O.alphaMap.value=E.alphaMap,Q(E.alphaMap,O.alphaMapTransform);if(E.bumpMap){if(O.bumpMap.value=E.bumpMap,Q(E.bumpMap,O.bumpMapTransform),O.bumpScale.value=E.bumpScale,E.side===X9)O.bumpScale.value*=-1}if(E.normalMap){if(O.normalMap.value=E.normalMap,Q(E.normalMap,O.normalMapTransform),O.normalScale.value.copy(E.normalScale),E.side===X9)O.normalScale.value.negate()}if(E.displacementMap)O.displacementMap.value=E.displacementMap,Q(E.displacementMap,O.displacementMapTransform),O.displacementScale.value=E.displacementScale,O.displacementBias.value=E.displacementBias;if(E.emissiveMap)O.emissiveMap.value=E.emissiveMap,Q(E.emissiveMap,O.emissiveMapTransform);if(E.specularMap)O.specularMap.value=E.specularMap,Q(E.specularMap,O.specularMapTransform);if(E.alphaTest>0)O.alphaTest.value=E.alphaTest;let C=$.get(E),P=C.envMap,k=C.envMapRotation;if(P){if(O.envMap.value=P,O.envMapRotation.value.setFromMatrix4(YF.makeRotationFromEuler(k)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1)O.envMapRotation.value.premultiply(GX);O.reflectivity.value=E.reflectivity,O.ior.value=E.ior,O.refractionRatio.value=E.refractionRatio}if(E.lightMap)O.lightMap.value=E.lightMap,O.lightMapIntensity.value=E.lightMapIntensity,Q(E.lightMap,O.lightMapTransform);if(E.aoMap)O.aoMap.value=E.aoMap,O.aoMapIntensity.value=E.aoMapIntensity,Q(E.aoMap,O.aoMapTransform)}function Y(O,E){if(O.diffuse.value.copy(E.color),O.opacity.value=E.opacity,E.map)O.map.value=E.map,Q(E.map,O.mapTransform)}function X(O,E){O.dashSize.value=E.dashSize,O.totalSize.value=E.dashSize+E.gapSize,O.scale.value=E.scale}function U(O,E,C,P){if(O.diffuse.value.copy(E.color),O.opacity.value=E.opacity,O.size.value=E.size*C,O.scale.value=P*0.5,E.map)O.map.value=E.map,Q(E.map,O.uvTransform);if(E.alphaMap)O.alphaMap.value=E.alphaMap,Q(E.alphaMap,O.alphaMapTransform);if(E.alphaTest>0)O.alphaTest.value=E.alphaTest}function H(O,E){if(O.diffuse.value.copy(E.color),O.opacity.value=E.opacity,O.rotation.value=E.rotation,E.map)O.map.value=E.map,Q(E.map,O.mapTransform);if(E.alphaMap)O.alphaMap.value=E.alphaMap,Q(E.alphaMap,O.alphaMapTransform);if(E.alphaTest>0)O.alphaTest.value=E.alphaTest}function q(O,E){O.specular.value.copy(E.specular),O.shininess.value=Math.max(E.shininess,0.0001)}function N(O,E){if(E.gradientMap)O.gradientMap.value=E.gradientMap}function G(O,E){if(O.metalness.value=E.metalness,E.metalnessMap)O.metalnessMap.value=E.metalnessMap,Q(E.metalnessMap,O.metalnessMapTransform);if(O.roughness.value=E.roughness,E.roughnessMap)O.roughnessMap.value=E.roughnessMap,Q(E.roughnessMap,O.roughnessMapTransform);if(E.envMap)O.envMapIntensity.value=E.envMapIntensity}function F(O,E,C){if(O.ior.value=E.ior,E.sheen>0){if(O.sheenColor.value.copy(E.sheenColor).multiplyScalar(E.sheen),O.sheenRoughness.value=E.sheenRoughness,E.sheenColorMap)O.sheenColorMap.value=E.sheenColorMap,Q(E.sheenColorMap,O.sheenColorMapTransform);if(E.sheenRoughnessMap)O.sheenRoughnessMap.value=E.sheenRoughnessMap,Q(E.sheenRoughnessMap,O.sheenRoughnessMapTransform)}if(E.clearcoat>0){if(O.clearcoat.value=E.clearcoat,O.clearcoatRoughness.value=E.clearcoatRoughness,E.clearcoatMap)O.clearcoatMap.value=E.clearcoatMap,Q(E.clearcoatMap,O.clearcoatMapTransform);if(E.clearcoatRoughnessMap)O.clearcoatRoughnessMap.value=E.clearcoatRoughnessMap,Q(E.clearcoatRoughnessMap,O.clearcoatRoughnessMapTransform);if(E.clearcoatNormalMap){if(O.clearcoatNormalMap.value=E.clearcoatNormalMap,Q(E.clearcoatNormalMap,O.clearcoatNormalMapTransform),O.clearcoatNormalScale.value.copy(E.clearcoatNormalScale),E.side===X9)O.clearcoatNormalScale.value.negate()}}if(E.dispersion>0)O.dispersion.value=E.dispersion;if(E.retroreflectivity>0)O.retroreflectivity.value=E.retroreflectivity;if(E.iridescence>0){if(O.iridescence.value=E.iridescence,O.iridescenceIOR.value=E.iridescenceIOR,O.iridescenceThicknessMinimum.value=E.iridescenceThicknessRange[0],O.iridescenceThicknessMaximum.value=E.iridescenceThicknessRange[1],E.iridescenceMap)O.iridescenceMap.value=E.iridescenceMap,Q(E.iridescenceMap,O.iridescenceMapTransform);if(E.iridescenceThicknessMap)O.iridescenceThicknessMap.value=E.iridescenceThicknessMap,Q(E.iridescenceThicknessMap,O.iridescenceThicknessMapTransform)}if(E.transmission>0){if(O.transmission.value=E.transmission,O.transmissionSamplerMap.value=C.texture,O.transmissionSamplerSize.value.set(C.width,C.height),E.transmissionMap)O.transmissionMap.value=E.transmissionMap,Q(E.transmissionMap,O.transmissionMapTransform);if(O.thickness.value=E.thickness,E.thicknessMap)O.thicknessMap.value=E.thicknessMap,Q(E.thicknessMap,O.thicknessMapTransform);O.attenuationDistance.value=E.attenuationDistance,O.attenuationColor.value.copy(E.attenuationColor)}if(E.anisotropy>0){if(O.anisotropyVector.value.set(E.anisotropy*Math.cos(E.anisotropyRotation),E.anisotropy*Math.sin(E.anisotropyRotation)),E.anisotropyMap)O.anisotropyMap.value=E.anisotropyMap,Q(E.anisotropyMap,O.anisotropyMapTransform)}if(O.specularIntensity.value=E.specularIntensity,O.specularColor.value.copy(E.specularColor),E.specularColorMap)O.specularColorMap.value=E.specularColorMap,Q(E.specularColorMap,O.specularColorMapTransform);if(E.specularIntensityMap)O.specularIntensityMap.value=E.specularIntensityMap,Q(E.specularIntensityMap,O.specularIntensityMapTransform)}function M(O,E){if(E.matcap)O.matcap.value=E.matcap}function B(O,E){let C=$.get(E).light;O.referencePosition.value.setFromMatrixPosition(C.matrixWorld),O.nearDistance.value=C.shadow.camera.near,O.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:Z,refreshMaterialUniforms:K}}function UF(J,$,Q,Z){let K={},W={},Y=[],X=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function U(k,z){let _=z.program;Z.uniformBlockBinding(k,_)}function H(k,z){let _=K[k.id];if(_===void 0)O(k),_=q(k),K[k.id]=_,k.addEventListener("dispose",C);let A=z.program;Z.updateUBOMapping(k,A);let D=$.render.frame;if(W[k.id]!==D)G(k),W[k.id]=D}function q(k){let z=N();k.__bindingPointIndex=z;let _=J.createBuffer(),A=k.__size,D=k.usage;return J.bindBuffer(J.UNIFORM_BUFFER,_),J.bufferData(J.UNIFORM_BUFFER,A,D),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,z,_),_}function N(){for(let k=0;k<X;k++)if(Y.indexOf(k)===-1)return Y.push(k),k;return KJ("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function G(k){let z=K[k.id],_=k.uniforms,A=k.__cache;J.bindBuffer(J.UNIFORM_BUFFER,z);for(let D=0,V=_.length;D<V;D++){let T=_[D];if(Array.isArray(T))for(let w=0,S=T.length;w<S;w++)F(T[w],D,w,A);else F(T,D,0,A)}J.bindBuffer(J.UNIFORM_BUFFER,null)}function F(k,z,_,A){if(B(k,z,_,A)===!0){let{__offset:D,value:V}=k;if(Array.isArray(V)){let T=0;for(let w=0;w<V.length;w++){let S=V[w],n=E(S);if(M(S,k.__data,T),typeof S!=="number"&&typeof S!=="boolean"&&!S.isMatrix3&&!ArrayBuffer.isView(S))T+=n.storage/Float32Array.BYTES_PER_ELEMENT}}else M(V,k.__data,0);J.bufferSubData(J.UNIFORM_BUFFER,D,k.__data)}}function M(k,z,_){if(typeof k==="number"||typeof k==="boolean")z[0]=k;else if(k.isMatrix3)z[0]=k.elements[0],z[1]=k.elements[1],z[2]=k.elements[2],z[3]=0,z[4]=k.elements[3],z[5]=k.elements[4],z[6]=k.elements[5],z[7]=0,z[8]=k.elements[6],z[9]=k.elements[7],z[10]=k.elements[8],z[11]=0;else if(ArrayBuffer.isView(k))z.set(new k.constructor(k.buffer,k.byteOffset,z.length));else k.toArray(z,_)}function B(k,z,_,A){let D=k.value,V=z+"_"+_;if(A[V]===void 0){if(typeof D==="number"||typeof D==="boolean")A[V]=D;else if(ArrayBuffer.isView(D))A[V]=D.slice();else A[V]=D.clone();return!0}else{let T=A[V];if(typeof D==="number"||typeof D==="boolean"){if(T!==D)return A[V]=D,!0}else if(ArrayBuffer.isView(D))return!0;else if(T.equals(D)===!1)return T.copy(D),!0}return!1}function O(k){let z=k.uniforms,_=0,A=16;for(let V=0,T=z.length;V<T;V++){let w=Array.isArray(z[V])?z[V]:[z[V]];for(let S=0,n=w.length;S<n;S++){let y=w[S],c=Array.isArray(y.value)?y.value:[y.value];for(let i=0,h=c.length;i<h;i++){let t=c[i],v=E(t),g=_%A,p=g%v.boundary,O0=g+p;if(_+=p,O0!==0&&A-O0<v.storage)_+=A-O0;y.__data=new Float32Array(v.storage/Float32Array.BYTES_PER_ELEMENT),y.__offset=_,_+=v.storage}}}let D=_%A;if(D>0)_+=A-D;return k.__size=_,k.__cache={},this}function E(k){let z={boundary:0,storage:0};if(typeof k==="number"||typeof k==="boolean")z.boundary=4,z.storage=4;else if(k.isVector2)z.boundary=8,z.storage=8;else if(k.isVector3||k.isColor)z.boundary=16,z.storage=12;else if(k.isVector4)z.boundary=16,z.storage=16;else if(k.isMatrix3)z.boundary=48,z.storage=48;else if(k.isMatrix4)z.boundary=64,z.storage=64;else if(k.isTexture)QJ("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(k))z.boundary=16,z.storage=k.byteLength;else QJ("WebGLRenderer: Unsupported uniform value type.",k);return z}function C(k){let z=k.target;z.removeEventListener("dispose",C);let _=Y.indexOf(z.__bindingPointIndex);Y.splice(_,1),J.deleteBuffer(K[z.id]),delete K[z.id],delete W[z.id]}function P(){for(let k in K)J.deleteBuffer(K[k]);Y=[],K={},W={}}return{bind:U,update:H,dispose:P}}var HF=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),r9=null;function GF(){if(r9===null)r9=new F7(HF,16,16,m8,tJ),r9.name="DFG_LUT",r9.minFilter=L9,r9.magFilter=L9,r9.wrapS=Y$,r9.wrapT=Y$,r9.generateMipmaps=!1,r9.needsUpdate=!0;return r9}class eZ{constructor(J={}){let{canvas:$=IY(),context:Q=null,depth:Z=!0,stencil:K=!1,alpha:W=!1,antialias:Y=!1,premultipliedAlpha:X=!0,preserveDrawingBuffer:U=!1,powerPreference:H="default",failIfMajorPerformanceCaveat:q=!1,reversedDepthBuffer:N=!1,outputBufferType:G=C9}=J;this.isWebGLRenderer=!0;let F;if(Q!==null){if(typeof WebGLRenderingContext<"u"&&Q instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");F=Q.getContextAttributes().alpha}else F=W;let M=G,B=new Set([fQ,bQ,yQ]),O=new Set([C9,C8,H7,C6,jQ,vQ]),E=new Uint32Array(4),C=new Int32Array(4),P=new x,k=null,z=null,_=[],A=[],D=null;this.domElement=$,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=R9,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let V=this,T=!1,w=null,S=null,n=null,y=null;this._outputColorSpace=_6;let c=0,i=0,h=null,t=-1,v=null,g=new jJ,p=new jJ,O0=null,L0=new WJ(0),g0=0,M0=$.width,d=$.height,Y0=1,X0=null,Z0=null,k0=new jJ(0,0,M0,d),Q0=new jJ(0,0,M0,d),_0=!1,z0=new k$,B0=!1,p0=!1,w0=new bJ,JJ=new x,c0=new jJ,S0={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},r=!1;function V0(){return h===null?Y0:1}let j=Q;function r0(I,u){return $.getContext(I,u)}let e0,R0,R,L,f,e,N0,l,G0,o,W0,a,E0,F0,D0,m0,l0,s0,m,T0,U0,j0,h0;try{let I={alpha:!0,depth:Z,stencil:K,antialias:Y,premultipliedAlpha:X,preserveDrawingBuffer:U,powerPreference:H,failIfMajorPerformanceCaveat:q};if("setAttribute"in $)$.setAttribute("data-engine",`three.js r${CW}`);if($.addEventListener("webglcontextlost",H0,!1),$.addEventListener("webglcontextrestored",C0,!1),$.addEventListener("webglcontextcreationerror",P0,!1),j===null){if(j=r0("webgl2",I),j===null)if(r0("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}b()}catch(I){throw $.removeEventListener("webglcontextlost",H0,!1),$.removeEventListener("webglcontextrestored",C0,!1),$.removeEventListener("webglcontextcreationerror",P0,!1),KJ("WebGLRenderer: "+I.message),I}function b(){if(e0=new Dq(j),e0.init(),U0=new ZF(j,e0),R0=new Xq(j,e0,J,U0),R=new $F(j,e0),R0.reversedDepthBuffer&&N)R.buffers.depth.setReversed(!0);S=j.createFramebuffer(),n=j.createFramebuffer(),y=j.createFramebuffer(),L=new Bq(j),f=new mN,e=new QF(j,e0,R,f,R0,U0,L),N0=new Mq(V),l=new IH(j),j0=new Wq(j,l),G0=new Vq(j,l,L,j0),o=new Iq(j,G0,l,j0,L),s0=new kq(j,R0,e),D0=new Uq(f),W0=new pN(V,N0,e0,R0,j0,D0),a=new XF(V,f),E0=new lN,F0=new oN(e0),l0=new Kq(V,N0,R,o,F,X),m0=new JF(V,o,R0),h0=new UF(j,L,R0,R),m=new Yq(j,e0,L),T0=new Lq(j,e0,L),L.programs=W0.programs,V.capabilities=R0,V.extensions=e0,V.properties=f,V.renderLists=E0,V.shadowMap=m0,V.state=R,V.info=L}if(M!==C9)D=new Rq(M,$.width,$.height,Y,Z,K);let s=new HX(V,j);this.xr=s,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){let I=e0.get("WEBGL_lose_context");if(I)I.loseContext()},this.forceContextRestore=function(){let I=e0.get("WEBGL_lose_context");if(I)I.restoreContext()},this.getPixelRatio=function(){return Y0},this.setPixelRatio=function(I){if(I===void 0)return;Y0=I,this.setSize(M0,d,!1)},this.getSize=function(I){return I.set(M0,d)},this.setSize=function(I,u,K0=!0){if(s.isPresenting){QJ("WebGLRenderer: Can't change size while VR device is presenting.");return}if(M0=I,d=u,$.width=Math.floor(I*Y0),$.height=Math.floor(u*Y0),K0===!0)$.style.width=I+"px",$.style.height=u+"px";if(D!==null)D.setSize($.width,$.height);this.setViewport(0,0,I,u)},this.getDrawingBufferSize=function(I){return I.set(M0*Y0,d*Y0).floor()},this.setDrawingBufferSize=function(I,u,K0){M0=I,d=u,Y0=K0,$.width=Math.floor(I*K0),$.height=Math.floor(u*K0),this.setViewport(0,0,I,u)},this.setEffects=function(I){if(M===C9){KJ("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let u=0;u<I.length;u++)if(I[u].isOutputPass===!0){QJ("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy(g)},this.getViewport=function(I){return I.copy(k0)},this.setViewport=function(I,u,K0,J0){if(I.isVector4)k0.set(I.x,I.y,I.z,I.w);else k0.set(I,u,K0,J0);R.viewport(g.copy(k0).multiplyScalar(Y0).round())},this.getScissor=function(I){return I.copy(Q0)},this.setScissor=function(I,u,K0,J0){if(I.isVector4)Q0.set(I.x,I.y,I.z,I.w);else Q0.set(I,u,K0,J0);R.scissor(p.copy(Q0).multiplyScalar(Y0).round())},this.getScissorTest=function(){return _0},this.setScissorTest=function(I){R.setScissorTest(_0=I)},this.setOpaqueSort=function(I){X0=I},this.setTransparentSort=function(I){Z0=I},this.getClearColor=function(I){return I.copy(l0.getClearColor())},this.setClearColor=function(){l0.setClearColor(...arguments)},this.getClearAlpha=function(){return l0.getClearAlpha()},this.setClearAlpha=function(){l0.setClearAlpha(...arguments)},this.clear=function(I=!0,u=!0,K0=!0){let J0=0;if(I){let $0=!1;if(h!==null){let v0=h.texture.format;$0=B.has(v0)}if($0){let v0=h.texture.type,A0=O.has(v0),q0=l0.getClearColor(),I0=l0.getClearAlpha(),d0=q0.r,$J=q0.g,i0=q0.b;if(A0)E[0]=d0,E[1]=$J,E[2]=i0,E[3]=I0,j.clearBufferuiv(j.COLOR,0,E);else C[0]=d0,C[1]=$J,C[2]=i0,C[3]=I0,j.clearBufferiv(j.COLOR,0,C)}else J0|=j.COLOR_BUFFER_BIT}if(u)J0|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(K0)J0|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(J0!==0)j.clear(J0)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(I){I.setRenderer(this),w=I},this.dispose=function(){$.removeEventListener("webglcontextlost",H0,!1),$.removeEventListener("webglcontextrestored",C0,!1),$.removeEventListener("webglcontextcreationerror",P0,!1),l0.dispose(),E0.dispose(),F0.dispose(),f.dispose(),N0.dispose(),o.dispose(),j0.dispose(),h0.dispose(),W0.dispose(),s.dispose(),s.removeEventListener("sessionstart",VJ),s.removeEventListener("sessionend",D9),vJ.stop()};function H0(I){I.preventDefault(),t6("WebGLRenderer: Context Lost."),T=!0}function C0(){t6("WebGLRenderer: Context Restored."),T=!1;let I=L.autoReset,u=m0.enabled,K0=m0.autoUpdate,J0=m0.needsUpdate,$0=m0.type;b(),L.autoReset=I,m0.enabled=u,m0.autoUpdate=K0,m0.needsUpdate=J0,m0.type=$0}function P0(I){KJ("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function x0(I){let u=I.target;u.removeEventListener("dispose",x0),y0(u)}function y0(I){XJ(I),f.remove(I)}function XJ(I){let u=f.get(I).programs;if(u!==void 0){if(u.forEach(function(K0){W0.releaseProgram(K0)}),I.isShaderMaterial)W0.releaseShaderCache(I)}}this.renderBufferDirect=function(I,u,K0,J0,$0,v0){if(u===null)u=S0;let A0=$0.isMesh&&$0.matrixWorld.determinantAffine()<0,q0=A9(I,u,K0,J0,$0);R.setMaterial(J0,A0);let I0=K0.index,d0=1;if(J0.wireframe===!0){if(I0=G0.getWireframeAttribute(K0),I0===void 0)return;d0=2}let $J=K0.drawRange,i0=K0.attributes.position,n0=$J.start*d0,BJ=($J.start+$J.count)*d0;if(v0!==null)n0=Math.max(n0,v0.start*d0),BJ=Math.min(BJ,(v0.start+v0.count)*d0);if(I0!==null)n0=Math.max(n0,0),BJ=Math.min(BJ,I0.count);else if(i0!==void 0&&i0!==null)n0=Math.max(n0,0),BJ=Math.min(BJ,i0.count);let uJ=BJ-n0;if(uJ<0||uJ===1/0)return;j0.setup($0,J0,q0,K0,I0);let SJ,AJ=m;if(I0!==null)SJ=l.get(I0),AJ=T0,AJ.setIndex(SJ);if($0.isMesh)if(J0.wireframe===!0)R.setLineWidth(J0.wireframeLinewidth*V0()),AJ.setMode(j.LINES);else AJ.setMode(j.TRIANGLES);else if($0.isLine){let Q9=J0.linewidth;if(Q9===void 0)Q9=1;if(R.setLineWidth(Q9*V0()),$0.isLineSegments)AJ.setMode(j.LINES);else if($0.isLineLoop)AJ.setMode(j.LINE_LOOP);else AJ.setMode(j.LINE_STRIP)}else if($0.isPoints)AJ.setMode(j.POINTS);else if($0.isSprite)AJ.setMode(j.TRIANGLES);if($0.isBatchedMesh)if(!e0.get("WEBGL_multi_draw")){let{_multiDrawStarts:Q9,_multiDrawCounts:u0,_multiDrawCount:F9}=$0,MJ=I0?l.get(I0).bytesPerElement:1,T9=f.get(J0).currentProgram.getUniforms();for(let n9=0;n9<F9;n9++)T9.setValue(j,"_gl_DrawID",n9),AJ.render(Q9[n9]/MJ,u0[n9])}else AJ.renderMultiDraw($0._multiDrawStarts,$0._multiDrawCounts,$0._multiDrawCount);else if($0.isInstancedMesh)AJ.renderInstances(n0,uJ,$0.count);else if(K0.isInstancedBufferGeometry){let Q9=K0._maxInstanceCount!==void 0?K0._maxInstanceCount:1/0,u0=Math.min(K0.instanceCount,Q9);AJ.renderInstances(n0,uJ,u0)}else AJ.render(n0,uJ)};function HJ(I,u,K0,J0){if(w!==null&&I.isNodeMaterial)w.setObject(J0,I);if(B0===!0)D0.setState(I,K0,!1);if(I.transparent===!0&&I.side===V9&&I.forceSinglePass===!1)I.side=X9,I.needsUpdate=!0,mJ(I,u,J0),I.side=I6,I.needsUpdate=!0,mJ(I,u,J0),I.side=V9;else mJ(I,u,J0)}this.compile=function(I,u,K0=null){if(K0===null)K0=I;if(w!==null)w.renderStart(I,u,K0);if(z=F0.get(K0),z.init(u),A.push(z),K0.traverseVisible(function($0){if($0.isLight&&$0.layers.test(u.layers)){if(z.pushLight($0),$0.castShadow)z.pushShadow($0)}}),I!==K0)I.traverseVisible(function($0){if($0.isLight&&$0.layers.test(u.layers)){if(z.pushLight($0),$0.castShadow)z.pushShadow($0)}});if(z.setupLights(),w!==null)w.updateLights(z.state.lightsArray);if(p0=this.localClippingEnabled,B0=D0.init(this.clippingPlanes,p0),B0===!0)D0.setGlobalState(this.clippingPlanes,u);if(w!==null)m0.render(z.state.shadowsArray,K0,u);let J0=new Set;if(I.traverse(function($0){if(!($0.isMesh||$0.isPoints||$0.isLine||$0.isSprite))return;let v0=$0.material;if(v0)if(Array.isArray(v0))for(let A0=0;A0<v0.length;A0++){let q0=v0[A0];HJ(q0,K0,u,$0),J0.add(q0)}else HJ(v0,K0,u,$0),J0.add(v0)}),z=A.pop(),w!==null)w.renderEnd();return J0},this.compileAsync=function(I,u,K0=null){let J0=this.compile(I,u,K0);return new Promise(($0)=>{function v0(){if(J0.forEach(function(A0){let I0=f.get(A0).currentProgram;if(I0===void 0||I0.isReady())J0.delete(A0)}),J0.size===0){$0(I);return}setTimeout(v0,10)}if(e0.get("KHR_parallel_shader_compile")!==null)v0();else setTimeout(v0,10)})};let t0=null;function DJ(I){if(t0)t0(I)}function VJ(){vJ.stop()}function D9(){vJ.start()}let vJ=new rY;if(vJ.setAnimationLoop(DJ),typeof self<"u")vJ.setContext(self);this.setAnimationLoop=function(I){t0=I,s.setAnimationLoop(I),I===null?vJ.stop():vJ.start()},s.addEventListener("sessionstart",VJ),s.addEventListener("sessionend",D9),this.render=function(I,u){if(u!==void 0&&u.isCamera!==!0){KJ("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(w!==null)w.renderStart(I,u);let K0=s.enabled===!0&&s.isPresenting===!0,J0=D!==null&&(h===null||K0)&&D.begin(V,h);if(I.matrixWorldAutoUpdate===!0)I.updateMatrixWorld();if(u.parent===null&&u.matrixWorldAutoUpdate===!0)u.updateMatrixWorld();if(s.enabled===!0&&s.isPresenting===!0&&(D===null||D.isCompositing()===!1)){if(s.cameraAutoUpdate===!0)s.updateCamera(u);u=s.getCamera()}if(I.isScene===!0)I.onBeforeRender(V,I,u,h);if(z=F0.get(I,A.length),z.init(u),z.state.textureUnits=e.getTextureUnits(),A.push(z),w0.multiplyMatrices(u.projectionMatrix,u.matrixWorldInverse),z0.setFromProjectionMatrix(w0,MZ,u.reversedDepth),p0=this.localClippingEnabled,B0=D0.init(this.clippingPlanes,p0),k=E0.get(I,_.length),k.init(),_.push(k),s.enabled===!0&&s.isPresenting===!0){let A0=V.xr.getDepthSensingMesh();if(A0!==null)k9(A0,u,-1/0,V.sortObjects)}if(k9(I,u,0,V.sortObjects),k.finish(),w!==null)w.updateLights(z.state.lightsArray);if(V.sortObjects===!0)k.sort(X0,Z0);if(r=s.enabled===!1||s.isPresenting===!1||s.hasDepthSensing()===!1,r)l0.addToRenderList(k,I);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(B0===!0)D0.beginShadows();let $0=z.state.shadowsArray;if(m0.render($0,I,u),B0===!0)D0.endShadows();if((J0&&D.hasRenderPass())===!1){let{opaque:A0,transmissive:q0}=k;if(z.setupLights(),u.isArrayCamera){let I0=u.cameras;if(q0.length>0)for(let d0=0,$J=I0.length;d0<$J;d0++){let i0=I0[d0];LJ(A0,q0,I,i0)}if(r)l0.render(I);for(let d0=0,$J=I0.length;d0<$J;d0++){let i0=I0[d0];EJ(k,I,i0,i0.viewport)}}else{if(q0.length>0)LJ(A0,q0,I,u);if(r)l0.render(I);EJ(k,I,u)}}if(h!==null&&i===0)e.updateMultisampleRenderTarget(h),e.updateRenderTargetMipmap(h);if(J0)D.end(V);if(I.isScene===!0)I.onAfterRender(V,I,u);if(j0.resetDefaultState(),t=-1,v=null,A.pop(),A.length>0){if(z=A[A.length-1],e.setTextureUnits(z.state.textureUnits),B0===!0)D0.setGlobalState(V.clippingPlanes,z.state.camera)}else z=null;if(_.pop(),_.length>0)k=_[_.length-1];else k=null;if(w!==null)w.renderEnd()};function k9(I,u,K0,J0){if(I.visible===!1)return;if(I.layers.test(u.layers)){if(I.isGroup)K0=I.renderOrder;else if(I.isLOD){if(I.autoUpdate===!0)I.update(u)}else if(I.isLightProbeGrid)z.pushLightProbeGrid(I);else if(I.isLight){if(z.pushLight(I),I.castShadow)z.pushShadow(I)}else if(I.isSprite){if(!I.frustumCulled||I.intersectsFrustum(z0)){if(J0)c0.setFromMatrixPosition(I.matrixWorld).applyMatrix4(w0);let A0=o.update(I),q0=I.material;if(q0.visible)k.push(I,A0,q0,K0,c0.z,null,u)}}else if(I.isMesh||I.isLine||I.isPoints){if(!I.frustumCulled||I.intersectsFrustum(z0)){let A0=o.update(I),q0=I.material;if(J0){if(I.boundingSphere!==void 0){if(I.boundingSphere===null)I.computeBoundingSphere();c0.copy(I.boundingSphere.center)}else{if(A0.boundingSphere===null)A0.computeBoundingSphere();c0.copy(A0.boundingSphere.center)}c0.applyMatrix4(I.matrixWorld).applyMatrix4(w0)}if(Array.isArray(q0)){let I0=A0.groups;for(let d0=0,$J=I0.length;d0<$J;d0++){let i0=I0[d0],n0=q0[i0.materialIndex];if(n0&&n0.visible)k.push(I,A0,n0,K0,c0.z,i0,u)}}else if(q0.visible)k.push(I,A0,q0,K0,c0.z,null,u)}}}let v0=I.children;for(let A0=0,q0=v0.length;A0<q0;A0++)k9(v0[A0],u,K0,J0)}function EJ(I,u,K0,J0){let{opaque:$0,transmissive:v0,transparent:A0}=I;if(z.setupLightsView(K0),B0===!0)D0.setGlobalState(V.clippingPlanes,K0);if(J0)R.viewport(g.copy(J0));if($0.length>0)yJ($0,u,K0);if(v0.length>0)yJ(v0,u,K0);if(A0.length>0)yJ(A0,u,K0);R.buffers.depth.setTest(!0),R.buffers.depth.setMask(!0),R.buffers.color.setMask(!0),R.setPolygonOffset(!1)}function LJ(I,u,K0,J0){if((K0.isScene===!0?K0.overrideMaterial:null)!==null)return;if(z.state.transmissionRenderTarget[J0.id]===void 0){let n0=e0.has("EXT_color_buffer_half_float")||e0.has("EXT_color_buffer_float");z.state.transmissionRenderTarget[J0.id]=new pJ(1,1,{generateMipmaps:!0,type:n0?tJ:C9,minFilter:x8,samples:Math.max(4,R0.samples),stencilBuffer:K,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:FJ.workingColorSpace})}let v0=z.state.transmissionRenderTarget[J0.id],A0=J0.viewport||g;v0.setSize(A0.z*V.transmissionResolutionScale,A0.w*V.transmissionResolutionScale);let q0=V.getRenderTarget(),I0=V.getActiveCubeFace(),d0=V.getActiveMipmapLevel();if(V.setRenderTarget(v0),V.getClearColor(L0),g0=V.getClearAlpha(),g0<1)V.setClearColor(16777215,0.5);if(V.clear(),r)l0.render(K0);let $J=V.toneMapping;V.toneMapping=R9;let i0=J0.viewport;if(J0.viewport!==void 0)J0.viewport=void 0;if(z.setupLightsView(J0),B0===!0)D0.setGlobalState(V.clippingPlanes,J0);if(yJ(I,K0,J0),e.updateMultisampleRenderTarget(v0),e.updateRenderTargetMipmap(v0),e0.has("WEBGL_multisampled_render_to_texture")===!1){let n0=!1;for(let BJ=0,uJ=u.length;BJ<uJ;BJ++){let SJ=u[BJ],{object:AJ,geometry:Q9,material:u0,group:F9}=SJ;if(u0.side===V9&&AJ.layers.test(J0.layers)){let MJ=u0.side;u0.side=X9,u0.needsUpdate=!0,aJ(AJ,K0,J0,Q9,u0,F9),u0.side=MJ,u0.needsUpdate=!0,n0=!0}}if(n0===!0)e.updateMultisampleRenderTarget(v0),e.updateRenderTargetMipmap(v0)}if(V.setRenderTarget(q0,I0,d0),V.setClearColor(L0,g0),i0!==void 0)J0.viewport=i0;V.toneMapping=$J}function yJ(I,u,K0){let J0=u.isScene===!0?u.overrideMaterial:null;for(let $0=0,v0=I.length;$0<v0;$0++){let A0=I[$0],{object:q0,geometry:I0,group:d0}=A0,$J=A0.material;if($J.allowOverride===!0&&J0!==null)$J=J0;if(q0.layers.test(K0.layers))aJ(q0,u,K0,I0,$J,d0)}}function aJ(I,u,K0,J0,$0,v0){if(w!==null&&$0.isNodeMaterial)w.setObject(I,$0);if(I.onBeforeRender(V,u,K0,J0,$0,v0),I.modelViewMatrix.multiplyMatrices(K0.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),$0.onBeforeRender(V,u,K0,J0,I,v0),$0.transparent===!0&&$0.side===V9&&$0.forceSinglePass===!1)$0.side=X9,$0.needsUpdate=!0,V.renderBufferDirect(K0,u,J0,$0,I,v0),$0.side=I6,$0.needsUpdate=!0,V.renderBufferDirect(K0,u,J0,$0,I,v0),$0.side=V9;else V.renderBufferDirect(K0,u,J0,$0,I,v0);I.onAfterRender(V,u,K0,J0,$0,v0)}function mJ(I,u,K0){if(u.isScene!==!0)u=S0;let J0=f.get(I),$0=z.state.lights,v0=z.state.shadowsArray,A0=$0.state.version,q0=W0.getParameters(I,$0.state,v0,u,K0,z.state.lightProbeGridArray),I0=W0.getProgramCacheKey(q0),d0=J0.programs;J0.environment=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?u.environment:null,J0.fog=u.fog;let $J=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap;if(J0.envMap=N0.get(I.envMap||J0.environment,$J),J0.envMapRotation=J0.environment!==null&&I.envMap===null?u.environmentRotation:I.envMapRotation,d0===void 0)I.addEventListener("dispose",x0),d0=new Map,J0.programs=d0;let i0=d0.get(I0);if(i0!==void 0){if(J0.currentProgram===i0&&J0.lightsStateVersion===A0)return cJ(I,q0),i0}else{if(q0.uniforms=W0.getUniforms(I),w!==null&&I.isNodeMaterial)w.build(I,K0,q0);I.onBeforeCompile(q0,V),i0=W0.acquireProgram(q0,I0),d0.set(I0,i0),J0.uniforms=q0.uniforms}let n0=J0.uniforms;if(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)n0.clippingPlanes=D0.uniform;if(cJ(I,q0),J0.needsLights=w9(I),J0.lightsStateVersion=A0,J0.needsLights)n0.ambientLightColor.value=$0.state.ambient,n0.lightProbe.value=$0.state.probe,n0.sunLights.value=$0.state.sun,n0.sunLightShadows.value=$0.state.sunShadow,n0.directionalLights.value=$0.state.directional,n0.directionalLightShadows.value=$0.state.directionalShadow,n0.spotLights.value=$0.state.spot,n0.spotLightShadows.value=$0.state.spotShadow,n0.rectAreaLights.value=$0.state.rectArea,n0.ltc_1.value=$0.state.rectAreaLTC1,n0.ltc_2.value=$0.state.rectAreaLTC2,n0.pointLights.value=$0.state.point,n0.pointLightShadows.value=$0.state.pointShadow,n0.hemisphereLights.value=$0.state.hemi,n0.sunShadowMatrix.value=$0.state.sunShadowMatrix,n0.sunShadowCascade.value=$0.state.sunShadowCascade,n0.directionalShadowMatrix.value=$0.state.directionalShadowMatrix,n0.spotLightMatrix.value=$0.state.spotLightMatrix,n0.spotLightMap.value=$0.state.spotLightMap,n0.pointShadowMatrix.value=$0.state.pointShadowMatrix;return J0.lightProbeGrid=z.state.lightProbeGridArray.length>0,J0.currentProgram=i0,J0.uniformsList=null,i0}function TJ(I){if(I.uniformsList===null){let u=I.currentProgram.getUniforms();I.uniformsList=L7.seqWithValue(u.seq,I.uniforms)}return I.uniformsList}function cJ(I,u){let K0=f.get(I);K0.outputColorSpace=u.outputColorSpace,K0.batching=u.batching,K0.batchingColor=u.batchingColor,K0.instancing=u.instancing,K0.instancingColor=u.instancingColor,K0.instancingMorph=u.instancingMorph,K0.skinning=u.skinning,K0.morphTargets=u.morphTargets,K0.morphNormals=u.morphNormals,K0.morphColors=u.morphColors,K0.morphTargetsCount=u.morphTargetsCount,K0.numClippingPlanes=u.numClippingPlanes,K0.numIntersection=u.numClipIntersection,K0.vertexAlphas=u.vertexAlphas,K0.vertexTangents=u.vertexTangents,K0.toneMapping=u.toneMapping}function $8(I,u){if(I.length===0)return null;if(I.length===1)return I[0].texture!==null?I[0]:null;P.setFromMatrixPosition(u.matrixWorld);for(let K0=0,J0=I.length;K0<J0;K0++){let $0=I[K0];if($0.texture!==null&&$0.boundingBox.containsPoint(P))return $0}return null}function A9(I,u,K0,J0,$0){if(u.isScene!==!0)u=S0;e.resetTextureUnits();let v0=u.fog,A0=J0.isMeshStandardMaterial||J0.isMeshLambertMaterial||J0.isMeshPhongMaterial?u.environment:null,q0=h===null?V.outputColorSpace:h.isXRRenderTarget===!0?h.texture.colorSpace:FJ.workingColorSpace,I0=J0.isMeshStandardMaterial||J0.isMeshLambertMaterial&&!J0.envMap||J0.isMeshPhongMaterial&&!J0.envMap,d0=N0.get(J0.envMap||A0,I0),$J=J0.vertexColors===!0&&!!K0.attributes.color&&K0.attributes.color.itemSize===4,i0=!!K0.attributes.tangent&&(!!J0.normalMap||J0.anisotropy>0),n0=!!K0.morphAttributes.position,BJ=!!K0.morphAttributes.normal,uJ=!!K0.morphAttributes.color,SJ=R9;if(J0.toneMapped){if(h===null||h.isXRRenderTarget===!0)SJ=V.toneMapping}let AJ=K0.morphAttributes.position||K0.morphAttributes.normal||K0.morphAttributes.color,Q9=AJ!==void 0?AJ.length:0,u0=f.get(J0),F9=z.state.lights;if(B0===!0){if(p0===!0||I!==v){let wJ=I===v&&J0.id===t;D0.setState(J0,I,wJ)}}let MJ=!1;if(J0.version===u0.__version){if(u0.needsLights&&u0.lightsStateVersion!==F9.state.version)MJ=!0;else if(u0.outputColorSpace!==q0)MJ=!0;else if($0.isBatchedMesh&&u0.batching===!1)MJ=!0;else if(!$0.isBatchedMesh&&u0.batching===!0)MJ=!0;else if($0.isBatchedMesh&&u0.batchingColor===!0&&$0._colorsTexture===null)MJ=!0;else if($0.isBatchedMesh&&u0.batchingColor===!1&&$0._colorsTexture!==null)MJ=!0;else if($0.isInstancedMesh&&u0.instancing===!1)MJ=!0;else if(!$0.isInstancedMesh&&u0.instancing===!0)MJ=!0;else if($0.isSkinnedMesh&&u0.skinning===!1)MJ=!0;else if(!$0.isSkinnedMesh&&u0.skinning===!0)MJ=!0;else if($0.isInstancedMesh&&u0.instancingColor===!0&&$0.instanceColor===null)MJ=!0;else if($0.isInstancedMesh&&u0.instancingColor===!1&&$0.instanceColor!==null)MJ=!0;else if($0.isInstancedMesh&&u0.instancingMorph===!0&&$0.morphTexture===null)MJ=!0;else if($0.isInstancedMesh&&u0.instancingMorph===!1&&$0.morphTexture!==null)MJ=!0;else if(u0.envMap!==d0)MJ=!0;else if(J0.fog===!0&&u0.fog!==v0)MJ=!0;else if(u0.numClippingPlanes!==void 0&&(u0.numClippingPlanes!==D0.numPlanes||u0.numIntersection!==D0.numIntersection))MJ=!0;else if(u0.vertexAlphas!==$J)MJ=!0;else if(u0.vertexTangents!==i0)MJ=!0;else if(u0.morphTargets!==n0)MJ=!0;else if(u0.morphNormals!==BJ)MJ=!0;else if(u0.morphColors!==uJ)MJ=!0;else if(u0.toneMapping!==SJ)MJ=!0;else if(u0.morphTargetsCount!==Q9)MJ=!0;else if(!!u0.lightProbeGrid!==z.state.lightProbeGridArray.length>0)MJ=!0}else MJ=!0,u0.__version=J0.version;let T9=u0.currentProgram;if(MJ===!0){if(T9=mJ(J0,u,$0),w&&J0.isNodeMaterial)w.onUpdateProgram(J0,T9,u0)}let n9=!1,E8=!1,Z6=!1,CJ=T9.getUniforms(),xJ=u0.uniforms;if(R.useProgram(T9.program))n9=!0,E8=!0,Z6=!0;if(J0.id!==t)t=J0.id,E8=!0;if(u0.needsLights){let wJ=$8(z.state.lightProbeGridArray,$0);if(u0.lightProbeGrid!==wJ)u0.lightProbeGrid=wJ,E8=!0}if(n9||v!==I){if(R.buffers.depth.getReversed()&&I.reversedDepth!==!0)I._reversedDepth=!0,I.updateProjectionMatrix();CJ.setValue(j,"projectionMatrix",I.projectionMatrix),CJ.setValue(j,"viewMatrix",I.matrixWorldInverse);let D8=CJ.map.cameraPosition;if(D8!==void 0)D8.setValue(j,JJ.setFromMatrixPosition(I.matrixWorld));if(R0.logarithmicDepthBuffer)CJ.setValue(j,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2));if(J0.isMeshPhongMaterial||J0.isMeshToonMaterial||J0.isMeshLambertMaterial||J0.isMeshBasicMaterial||J0.isMeshStandardMaterial||J0.isShaderMaterial)CJ.setValue(j,"isOrthographic",I.isOrthographicCamera===!0);if(v!==I)v=I,E8=!0,Z6=!0}if(u0.needsLights){if(F9.state.sunShadowMap.length>0)CJ.setValue(j,"sunShadowMap",F9.state.sunShadowMap,e);if(F9.state.directionalShadowMap.length>0)CJ.setValue(j,"directionalShadowMap",F9.state.directionalShadowMap,e);if(F9.state.spotShadowMap.length>0)CJ.setValue(j,"spotShadowMap",F9.state.spotShadowMap,e);if(F9.state.pointShadowMap.length>0)CJ.setValue(j,"pointShadowMap",F9.state.pointShadowMap,e)}if($0.isSkinnedMesh){CJ.setOptional(j,$0,"bindMatrix"),CJ.setOptional(j,$0,"bindMatrixInverse");let wJ=$0.skeleton;if(wJ){if(wJ.boneTexture===null)wJ.computeBoneTexture();CJ.setValue(j,"boneTexture",wJ.boneTexture,e)}}if($0.isBatchedMesh){if(CJ.setOptional(j,$0,"batchingTexture"),CJ.setValue(j,"batchingTexture",$0._matricesTexture,e),CJ.setOptional(j,$0,"batchingIdTexture"),CJ.setValue(j,"batchingIdTexture",$0._indirectTexture,e),CJ.setOptional(j,$0,"batchingColorTexture"),$0._colorsTexture!==null)CJ.setValue(j,"batchingColorTexture",$0._colorsTexture,e)}let M8=K0.morphAttributes;if(M8.position!==void 0||M8.normal!==void 0||M8.color!==void 0)s0.update($0,K0,T9);if(E8||u0.receiveShadow!==$0.receiveShadow)u0.receiveShadow=$0.receiveShadow,CJ.setValue(j,"receiveShadow",$0.receiveShadow);if((J0.isMeshStandardMaterial||J0.isMeshLambertMaterial||J0.isMeshPhongMaterial)&&J0.envMap===null&&u.environment!==null)xJ.envMapIntensity.value=u.environmentIntensity;if(xJ.dfgLUT!==void 0)xJ.dfgLUT.value=GF();if(E8){if(CJ.setValue(j,"toneMappingExposure",V.toneMappingExposure),u0.needsLights)N9(xJ,Z6);if(v0&&J0.fog===!0)a.refreshFogUniforms(xJ,v0);if(a.refreshMaterialUniforms(xJ,J0,Y0,d,z.state.transmissionRenderTarget[I.id]),u0.needsLights&&u0.lightProbeGrid){let wJ=u0.lightProbeGrid;xJ.probesSH.value=wJ.texture,xJ.probesMin.value.copy(wJ.boundingBox.min),xJ.probesMax.value.copy(wJ.boundingBox.max),xJ.probesResolution.value.copy(wJ.resolution)}L7.upload(j,TJ(u0),xJ,e)}if(J0.isShaderMaterial&&J0.uniformsNeedUpdate===!0)L7.upload(j,TJ(u0),xJ,e),J0.uniformsNeedUpdate=!1;if(J0.isSpriteMaterial)CJ.setValue(j,"center",$0.center);if(CJ.setValue(j,"modelViewMatrix",$0.modelViewMatrix),CJ.setValue(j,"normalMatrix",$0.normalMatrix),CJ.setValue(j,"modelMatrix",$0.matrixWorld),J0.uniformsGroups!==void 0){let wJ=J0.uniformsGroups;for(let D8=0,K6=wJ.length;D8<K6;D8++){let eK=wJ[D8];h0.update(eK,T9),h0.bind(eK,T9)}}return T9}function N9(I,u){I.ambientLightColor.needsUpdate=u,I.lightProbe.needsUpdate=u,I.sunLights.needsUpdate=u,I.sunLightShadows.needsUpdate=u,I.directionalLights.needsUpdate=u,I.directionalLightShadows.needsUpdate=u,I.pointLights.needsUpdate=u,I.pointLightShadows.needsUpdate=u,I.spotLights.needsUpdate=u,I.spotLightShadows.needsUpdate=u,I.rectAreaLights.needsUpdate=u,I.hemisphereLights.needsUpdate=u}function w9(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return c},this.getActiveMipmapLevel=function(){return i},this.getRenderTarget=function(){return h},this.setRenderTargetTextures=function(I,u,K0){let J0=f.get(I);if(J0.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,J0.__autoAllocateDepthBuffer===!1)J0.__useRenderToTexture=!1;f.get(I.texture).__webglTexture=u,f.get(I.depthTexture).__webglTexture=J0.__autoAllocateDepthBuffer?void 0:K0,J0.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,u){let K0=f.get(I);K0.__webglFramebuffer=u,K0.__useDefaultFramebuffer=u===void 0},this.setRenderTarget=function(I,u=0,K0=0){h=I,c=u,i=K0;let J0=null,$0=!1,v0=!1;if(I){let q0=f.get(I);if(q0.__useDefaultFramebuffer!==void 0){R.bindFramebuffer(j.FRAMEBUFFER,q0.__webglFramebuffer),g.copy(I.viewport),p.copy(I.scissor),O0=I.scissorTest,R.viewport(g),R.scissor(p),R.setScissorTest(O0),t=-1;return}else if(q0.__webglFramebuffer===void 0)e.setupRenderTarget(I);else if(q0.__hasExternalTextures)e.rebindTextures(I,f.get(I.texture).__webglTexture,f.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let $J=I.depthTexture;if(q0.__boundDepthTexture!==$J){if($J!==null&&f.has($J)&&(I.width!==$J.image.width||I.height!==$J.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");e.setupDepthRenderbuffer(I)}}let I0=I.texture;if(I0.isData3DTexture||I0.isDataArrayTexture||I0.isCompressedArrayTexture)v0=!0;let d0=f.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget){if(Array.isArray(d0[u]))J0=d0[u][K0];else J0=d0[u];$0=!0}else if(I.samples>0&&e.useMultisampledRTT(I)===!1)J0=f.get(I).__webglMultisampledFramebuffer;else if(Array.isArray(d0))J0=d0[K0];else J0=d0;g.copy(I.viewport),p.copy(I.scissor),O0=I.scissorTest}else g.copy(k0).multiplyScalar(Y0).floor(),p.copy(Q0).multiplyScalar(Y0).floor(),O0=_0;if(K0!==0)J0=S;if(R.bindFramebuffer(j.FRAMEBUFFER,J0))R.drawBuffers(I,J0);if(R.viewport(g),R.scissor(p),R.setScissorTest(O0),$0){let q0=f.get(I.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+u,q0.__webglTexture,K0)}else if(v0){let q0=u;for(let I0=0;I0<I.textures.length;I0++){let d0=f.get(I.textures[I0]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+I0,d0.__webglTexture,K0,q0)}}else if(I!==null&&K0!==0){let q0=f.get(I.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,q0.__webglTexture,K0)}t=-1};function x9(I){let u=f.get(I);if(u.__readFormat!==I.format||u.__readType!==I.type)u.__readFormat=I.format,u.__readType=I.type,u.__formatReadable=R0.textureFormatReadable(I.format),u.__typeReadable=R0.textureTypeReadable(I.type);return u}if(this.readRenderTargetPixels=function(I,u,K0,J0,$0,v0,A0,q0=0){if(!(I&&I.isWebGLRenderTarget)){KJ("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let I0=f.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&A0!==void 0)I0=I0[A0];if(I0){R.bindFramebuffer(j.FRAMEBUFFER,I0);try{let d0=I.textures[q0],$J=d0.format,i0=d0.type;if(I.textures.length>1)j.readBuffer(j.COLOR_ATTACHMENT0+q0);let n0=x9(d0);if(n0.__formatReadable===!1){KJ("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(n0.__typeReadable===!1){KJ("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(u>=0&&u<=I.width-J0&&(K0>=0&&K0<=I.height-$0))j.readPixels(u,K0,J0,$0,U0.convert($J),U0.convert(i0),v0)}finally{let d0=h!==null?f.get(h).__webglFramebuffer:null;R.bindFramebuffer(j.FRAMEBUFFER,d0)}}},this.readRenderTargetPixelsAsync=async function(I,u,K0,J0,$0,v0,A0,q0=0){if(!(I&&I.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let I0=f.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&A0!==void 0)I0=I0[A0];if(I0)if(u>=0&&u<=I.width-J0&&(K0>=0&&K0<=I.height-$0)){R.bindFramebuffer(j.FRAMEBUFFER,I0);let d0=I.textures[q0],$J=d0.format,i0=d0.type;if(I.textures.length>1)j.readBuffer(j.COLOR_ATTACHMENT0+q0);let n0=x9(d0);if(n0.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(n0.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let BJ=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,BJ),j.bufferData(j.PIXEL_PACK_BUFFER,v0.byteLength,j.STREAM_READ),j.readPixels(u,K0,J0,$0,U0.convert($J),U0.convert(i0),0),j.bindBuffer(j.PIXEL_PACK_BUFFER,null);let uJ=h!==null?f.get(h).__webglFramebuffer:null;R.bindFramebuffer(j.FRAMEBUFFER,uJ);let SJ=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await RY(j,SJ,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,BJ),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,v0),j.bindBuffer(j.PIXEL_PACK_BUFFER,null),j.deleteBuffer(BJ),j.deleteSync(SJ),v0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,u=null,K0=0){let J0=Math.pow(2,-K0),$0=Math.floor(I.image.width*J0),v0=Math.floor(I.image.height*J0),A0=u!==null?u.x:0,q0=u!==null?u.y:0;e.setTexture2D(I,0),j.copyTexSubImage2D(j.TEXTURE_2D,K0,0,0,A0,q0,$0,v0),R.unbindTexture()},this.copyTextureToTexture=function(I,u,K0=null,J0=null,$0=0,v0=0){let A0,q0,I0,d0,$J,i0,n0,BJ,uJ,SJ=I.isCompressedTexture?I.mipmaps[v0]:I.image;if(K0!==null)A0=K0.max.x-K0.min.x,q0=K0.max.y-K0.min.y,I0=K0.isBox3?K0.max.z-K0.min.z:1,d0=K0.min.x,$J=K0.min.y,i0=K0.isBox3?K0.min.z:0;else{let xJ=Math.pow(2,-$0);if(A0=Math.floor(SJ.width*xJ),q0=Math.floor(SJ.height*xJ),I.isDataArrayTexture)I0=SJ.depth;else if(I.isData3DTexture)I0=Math.floor(SJ.depth*xJ);else I0=1;d0=0,$J=0,i0=0}if(J0!==null)n0=J0.x,BJ=J0.y,uJ=J0.z;else n0=0,BJ=0,uJ=0;let AJ=U0.convert(u.format),Q9=U0.convert(u.type),u0;if(u.isData3DTexture)e.setTexture3D(u,0),u0=j.TEXTURE_3D;else if(u.isDataArrayTexture||u.isCompressedArrayTexture)e.setTexture2DArray(u,0),u0=j.TEXTURE_2D_ARRAY;else e.setTexture2D(u,0),u0=j.TEXTURE_2D;R.activeTexture(j.TEXTURE0),R.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,u.flipY),R.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,u.premultiplyAlpha),R.pixelStorei(j.UNPACK_ALIGNMENT,u.unpackAlignment);let F9=R.getParameter(j.UNPACK_ROW_LENGTH),MJ=R.getParameter(j.UNPACK_IMAGE_HEIGHT),T9=R.getParameter(j.UNPACK_SKIP_PIXELS),n9=R.getParameter(j.UNPACK_SKIP_ROWS),E8=R.getParameter(j.UNPACK_SKIP_IMAGES);R.pixelStorei(j.UNPACK_ROW_LENGTH,SJ.width),R.pixelStorei(j.UNPACK_IMAGE_HEIGHT,SJ.height),R.pixelStorei(j.UNPACK_SKIP_PIXELS,d0),R.pixelStorei(j.UNPACK_SKIP_ROWS,$J),R.pixelStorei(j.UNPACK_SKIP_IMAGES,i0);let Z6=I.isDataArrayTexture||I.isData3DTexture,CJ=u.isDataArrayTexture||u.isData3DTexture;if(I.isDepthTexture){let xJ=f.get(I),M8=f.get(u),wJ=f.get(xJ.__renderTarget),D8=f.get(M8.__renderTarget);R.bindFramebuffer(j.READ_FRAMEBUFFER,wJ.__webglFramebuffer),R.bindFramebuffer(j.DRAW_FRAMEBUFFER,D8.__webglFramebuffer);for(let K6=0;K6<I0;K6++){if(Z6)j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,f.get(I).__webglTexture,$0,i0+K6),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,f.get(u).__webglTexture,v0,uJ+K6);j.blitFramebuffer(d0,$J,A0,q0,n0,BJ,A0,q0,j.DEPTH_BUFFER_BIT,j.NEAREST)}R.bindFramebuffer(j.READ_FRAMEBUFFER,null),R.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if($0!==0||I.isRenderTargetTexture||f.has(I)){let xJ=f.get(I),M8=f.get(u);R.bindFramebuffer(j.READ_FRAMEBUFFER,n),R.bindFramebuffer(j.DRAW_FRAMEBUFFER,y);for(let wJ=0;wJ<I0;wJ++){if(Z6)j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,xJ.__webglTexture,$0,i0+wJ);else j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,xJ.__webglTexture,$0);if(CJ)j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,M8.__webglTexture,v0,uJ+wJ);else j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,M8.__webglTexture,v0);if($0!==0)j.blitFramebuffer(d0,$J,A0,q0,n0,BJ,A0,q0,j.COLOR_BUFFER_BIT,j.NEAREST);else if(CJ)j.copyTexSubImage3D(u0,v0,n0,BJ,uJ+wJ,d0,$J,A0,q0);else j.copyTexSubImage2D(u0,v0,n0,BJ,d0,$J,A0,q0)}R.bindFramebuffer(j.READ_FRAMEBUFFER,null),R.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(CJ)if(I.isDataTexture||I.isData3DTexture)j.texSubImage3D(u0,v0,n0,BJ,uJ,A0,q0,I0,AJ,Q9,SJ.data);else if(u.isCompressedArrayTexture)j.compressedTexSubImage3D(u0,v0,n0,BJ,uJ,A0,q0,I0,AJ,SJ.data);else j.texSubImage3D(u0,v0,n0,BJ,uJ,A0,q0,I0,AJ,Q9,SJ);else if(I.isDataTexture)j.texSubImage2D(j.TEXTURE_2D,v0,n0,BJ,A0,q0,AJ,Q9,SJ.data);else if(I.isCompressedTexture)j.compressedTexSubImage2D(j.TEXTURE_2D,v0,n0,BJ,SJ.width,SJ.height,AJ,SJ.data);else j.texSubImage2D(j.TEXTURE_2D,v0,n0,BJ,A0,q0,AJ,Q9,SJ);if(R.pixelStorei(j.UNPACK_ROW_LENGTH,F9),R.pixelStorei(j.UNPACK_IMAGE_HEIGHT,MJ),R.pixelStorei(j.UNPACK_SKIP_PIXELS,T9),R.pixelStorei(j.UNPACK_SKIP_ROWS,n9),R.pixelStorei(j.UNPACK_SKIP_IMAGES,E8),v0===0&&u.generateMipmaps)j.generateMipmap(u0);R.unbindTexture()},this.initRenderTarget=function(I){if(f.get(I).__webglFramebuffer===void 0)e.setupRenderTarget(I)},this.initTexture=function(I){if(I.isCubeTexture)e.setTextureCube(I,0);else if(I.isData3DTexture)e.setTexture3D(I,0);else if(I.isDataArrayTexture||I.isCompressedArrayTexture)e.setTexture2DArray(I,0);else e.setTexture2D(I,0);R.unbindTexture()},this.resetState=function(){c=0,i=0,h=null,R.reset(),j0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return MZ}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let $=this.getContext();$.drawingBufferColorSpace=FJ._getDrawingBufferColorSpace(J),$.unpackColorSpace=FJ._getUnpackColorSpace()}}var JK=new Map;function qX(){for(let J of JK.values())J.needsUpdate=!0}function NX(){for(let J of JK.values())J.dispose();JK.clear()}var y6={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class f9{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}var qF=new T6(-1,1,1,-1,0,1);class FX extends hJ{constructor(){super();this.setAttribute("position",new kJ([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new kJ([0,2,0,0,2,0],2))}}var NF=new FX;class a8{constructor(J){this._mesh=new GJ(NF,J)}dispose(){this._mesh.geometry.dispose()}render(J){J.render(this._mesh,qF)}get material(){return this._mesh.material}set material(J){this._mesh.material=J}}class $K extends f9{constructor(J,$="tDiffuse"){super();if(this.textureID=$,this.uniforms=null,this.material=null,J instanceof ZJ)this.uniforms=J.uniforms,this.material=J;else if(J)this.uniforms=q8.clone(J.uniforms),this.material=new ZJ({name:J.name!==void 0?J.name:"unspecified",defines:Object.assign({},J.defines),uniforms:this.uniforms,vertexShader:J.vertexShader,fragmentShader:J.fragmentShader});this._fsQuad=new a8(this.material)}render(J,$,Q){if(this.uniforms[this.textureID])this.uniforms[this.textureID].value=Q.texture;if(this._fsQuad.material=this.material,this.renderToScreen)J.setRenderTarget(null),this._fsQuad.render(J);else{if(J.setRenderTarget($),this.clear)J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil);this._fsQuad.render(J)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class j$ extends f9{constructor(J,$){super();this.scene=J,this.camera=$,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(J,$,Q){let Z=J.getContext(),K=J.state;K.buffers.color.setMask(!1),K.buffers.depth.setMask(!1),K.buffers.color.setLocked(!0),K.buffers.depth.setLocked(!0);let W,Y;if(this.inverse)W=0,Y=1;else W=1,Y=0;if(K.buffers.stencil.setTest(!0),K.buffers.stencil.setOp(Z.REPLACE,Z.REPLACE,Z.REPLACE),K.buffers.stencil.setFunc(Z.ALWAYS,W,4294967295),K.buffers.stencil.setClear(Y),K.buffers.stencil.setLocked(!0),J.setRenderTarget(Q),this.clear)J.clear();if(J.render(this.scene,this.camera),J.setRenderTarget($),this.clear)J.clear();J.render(this.scene,this.camera),K.buffers.color.setLocked(!1),K.buffers.depth.setLocked(!1),K.buffers.color.setMask(!0),K.buffers.depth.setMask(!0),K.buffers.stencil.setLocked(!1),K.buffers.stencil.setFunc(Z.EQUAL,1,4294967295),K.buffers.stencil.setOp(Z.KEEP,Z.KEEP,Z.KEEP),K.buffers.stencil.setLocked(!0)}}class QK extends f9{constructor(){super();this.needsSwap=!1}render(J){J.state.buffers.stencil.setLocked(!1),J.state.buffers.stencil.setTest(!1)}}class ZK{constructor(J,$){if(this.renderer=J,this._pixelRatio=J.getPixelRatio(),$===void 0){let Q=J.getSize(new o0);this._width=Q.width,this._height=Q.height,$=new pJ(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:tJ}),$.texture.name="EffectComposer.rt1"}else this._width=$.width,this._height=$.height;this.renderTarget1=$,this.renderTarget2=$.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new $K(y6),this.copyPass.material.blending=v9,this.timer=new P$}swapBuffers(){let J=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=J}addPass(J){this.passes.push(J),J.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(J,$){this.passes.splice($,0,J),J.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(J){let $=this.passes.indexOf(J);if($!==-1)this.passes.splice($,1)}isLastEnabledPass(J){for(let $=J+1;$<this.passes.length;$++)if(this.passes[$].enabled)return!1;return!0}render(J){if(this.timer.update(),J===void 0)J=this.timer.getDelta();let $=this.renderer.getRenderTarget(),Q=!1;for(let Z=0,K=this.passes.length;Z<K;Z++){let W=this.passes[Z];if(W.enabled===!1)continue;if(W.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(Z),W.render(this.renderer,this.writeBuffer,this.readBuffer,J,Q),W.needsSwap){if(Q){let Y=this.renderer.getContext(),X=this.renderer.state.buffers.stencil;X.setFunc(Y.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,J),X.setFunc(Y.EQUAL,1,4294967295)}this.swapBuffers()}if(j$!==void 0){if(W instanceof j$)Q=!0;else if(W instanceof QK)Q=!1}}this.renderer.setRenderTarget($)}reset(J){if(J===void 0){let $=this.renderer.getSize(new o0);this._pixelRatio=this.renderer.getPixelRatio(),this._width=$.width,this._height=$.height,J=this.renderTarget1.clone(),J.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=J,this.renderTarget2=J.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(J,$){this._width=J,this._height=$;let Q=this._width*this._pixelRatio,Z=this._height*this._pixelRatio;this.renderTarget1.setSize(Q,Z),this.renderTarget2.setSize(Q,Z);for(let K=0;K<this.passes.length;K++)this.passes[K].setSize(Q,Z)}setPixelRatio(J){this._pixelRatio=J,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}var B7={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class KK extends f9{constructor(){super();this.isOutputPass=!0,this.uniforms=q8.clone(B7.uniforms),this.material=new E7({name:B7.name,uniforms:this.uniforms,vertexShader:B7.vertexShader,fragmentShader:B7.fragmentShader}),this._fsQuad=new a8(this.material),this._outputColorSpace=null,this._toneMapping=null}render(J,$,Q){if(this.uniforms.tDiffuse.value=Q.texture,this.uniforms.toneMappingExposure.value=J.toneMappingExposure,this._outputColorSpace!==J.outputColorSpace||this._toneMapping!==J.toneMapping){if(this._outputColorSpace=J.outputColorSpace,this._toneMapping=J.toneMapping,this.material.defines={},FJ.getTransfer(this._outputColorSpace)===RJ)this.material.defines.SRGB_TRANSFER="";if(this._toneMapping===J7)this.material.defines.LINEAR_TONE_MAPPING="";else if(this._toneMapping===$7)this.material.defines.REINHARD_TONE_MAPPING="";else if(this._toneMapping===Q7)this.material.defines.CINEON_TONE_MAPPING="";else if(this._toneMapping===Z7)this.material.defines.ACES_FILMIC_TONE_MAPPING="";else if(this._toneMapping===W7)this.material.defines.AGX_TONE_MAPPING="";else if(this._toneMapping===Y7)this.material.defines.NEUTRAL_TONE_MAPPING="";else if(this._toneMapping===K7)this.material.defines.CUSTOM_TONE_MAPPING="";this.material.needsUpdate=!0}if(this.renderToScreen===!0)J.setRenderTarget(null),this._fsQuad.render(J);else{if(J.setRenderTarget($),this.clear)J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil);this._fsQuad.render(J)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class WK extends f9{constructor(J,$,Q=null,Z=null,K=null){super();this.scene=J,this.camera=$,this.overrideMaterial=Q,this.clearColor=Z,this.clearAlpha=K,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new WJ}render(J,$,Q){let Z=J.autoClear;J.autoClear=!1;let K,W;if(this.overrideMaterial!==null)W=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial;if(this.clearColor!==null)J.getClearColor(this._oldClearColor),J.setClearColor(this.clearColor,J.getClearAlpha());if(this.clearAlpha!==null)K=J.getClearAlpha(),J.setClearAlpha(this.clearAlpha);if(this.clearDepth==!0)J.clearDepth();if(J.setRenderTarget(this.renderToScreen?null:Q),this.clear===!0)J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil);if(J.render(this.scene,this.camera),this.clearColor!==null)J.setClearColor(this._oldClearColor);if(this.clearAlpha!==null)J.setClearAlpha(K);if(this.overrideMaterial!==null)this.scene.overrideMaterial=W;J.autoClear=Z}}var OX={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new WJ(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class r8 extends f9{constructor(J,$=1,Q,Z){super();this.strength=$,this.radius=Q,this.threshold=Z,this.resolution=J!==void 0?new o0(J.x,J.y):new o0(256,256),this.clearColor=new WJ(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let K=Math.round(this.resolution.x/2),W=Math.round(this.resolution.y/2);this.renderTargetBright=new pJ(K,W,{type:tJ,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let H=0;H<this.nMips;H++){let q=new pJ(K,W,{type:tJ,depthBuffer:!1});q.texture.name="UnrealBloomPass.h"+H,q.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(q);let N=new pJ(K,W,{type:tJ,depthBuffer:!1});N.texture.name="UnrealBloomPass.v"+H,N.texture.generateMipmaps=!1,this.renderTargetsVertical.push(N),K=Math.round(K/2),W=Math.round(W/2)}let Y=OX;this.highPassUniforms=q8.clone(Y.uniforms),this.highPassUniforms.luminosityThreshold.value=Z,this.highPassUniforms.smoothWidth.value=0.01,this.materialHighPassFilter=new ZJ({uniforms:this.highPassUniforms,vertexShader:Y.vertexShader,fragmentShader:Y.fragmentShader}),this.separableBlurMaterials=[];let X=[6,10,14,18,22];K=Math.round(this.resolution.x/2),W=Math.round(this.resolution.y/2);for(let H=0;H<this.nMips;H++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(X[H])),this.separableBlurMaterials[H].uniforms.invSize.value=new o0(1/K,1/W),K=Math.round(K/2),W=Math.round(W/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=$,this.compositeMaterial.uniforms.bloomRadius.value=0.1;let U=[1,0.8,0.6,0.4,0.2];this.compositeMaterial.uniforms.bloomFactors.value=U,this.bloomTintColors=[new x(1,1,1),new x(1,1,1),new x(1,1,1),new x(1,1,1),new x(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=q8.clone(y6.uniforms),this.blendMaterial=new ZJ({uniforms:this.copyUniforms,vertexShader:y6.vertexShader,fragmentShader:y6.fragmentShader,premultipliedAlpha:!0,blending:PJ,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new WJ,this._oldClearAlpha=1,this._basic=new P8,this._fsQuad=new a8(null)}dispose(){for(let J=0;J<this.renderTargetsHorizontal.length;J++)this.renderTargetsHorizontal[J].dispose();for(let J=0;J<this.renderTargetsVertical.length;J++)this.renderTargetsVertical[J].dispose();this.renderTargetBright.dispose();for(let J=0;J<this.separableBlurMaterials.length;J++)this.separableBlurMaterials[J].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(J,$){let Q=Math.round(J/2),Z=Math.round($/2);this.renderTargetBright.setSize(Q,Z);for(let K=0;K<this.nMips;K++)this.renderTargetsHorizontal[K].setSize(Q,Z),this.renderTargetsVertical[K].setSize(Q,Z),this.separableBlurMaterials[K].uniforms.invSize.value=new o0(1/Q,1/Z),Q=Math.round(Q/2),Z=Math.round(Z/2)}render(J,$,Q,Z,K){J.getClearColor(this._oldClearColor),this._oldClearAlpha=J.getClearAlpha();let W=J.autoClear;if(J.autoClear=!1,J.setClearColor(this.clearColor,0),K)J.state.buffers.stencil.setTest(!1);if(this.renderToScreen)this._fsQuad.material=this._basic,this._basic.map=Q.texture,J.setRenderTarget(null),J.clear(),this._fsQuad.render(J);this.highPassUniforms.tDiffuse.value=Q.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,J.setRenderTarget(this.renderTargetBright),J.clear(),this._fsQuad.render(J);let Y=this.renderTargetBright;for(let X=0;X<this.nMips;X++)this._fsQuad.material=this.separableBlurMaterials[X],this.separableBlurMaterials[X].uniforms.colorTexture.value=Y.texture,this.separableBlurMaterials[X].uniforms.direction.value=r8.BlurDirectionX,J.setRenderTarget(this.renderTargetsHorizontal[X]),J.clear(),this._fsQuad.render(J),this.separableBlurMaterials[X].uniforms.colorTexture.value=this.renderTargetsHorizontal[X].texture,this.separableBlurMaterials[X].uniforms.direction.value=r8.BlurDirectionY,J.setRenderTarget(this.renderTargetsVertical[X]),J.clear(),this._fsQuad.render(J),Y=this.renderTargetsVertical[X];if(this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,J.setRenderTarget(this.renderTargetsHorizontal[0]),J.clear(),this._fsQuad.render(J),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,K)J.state.buffers.stencil.setTest(!0);if(this.renderToScreen)J.setRenderTarget(null),this._fsQuad.render(J);else J.setRenderTarget(Q),this._fsQuad.render(J);J.setClearColor(this._oldClearColor,this._oldClearAlpha),J.autoClear=W}_getSeparableBlurMaterial(J){let $=[],Q=J/3;for(let W=0;W<J;W++)$.push(0.39894*Math.exp(-0.5*W*W/(Q*Q))/Q);let Z=[],K=[];for(let W=1;W<J;W+=2){let Y=$[W],X=W+1<J?$[W+1]:0,U=Y+X;Z.push((W*Y+(W+1)*X)/U),K.push(U)}return new ZJ({defines:{KERNEL_PAIRS:Z.length},uniforms:{colorTexture:{value:null},invSize:{value:new o0(0.5,0.5)},direction:{value:new o0(0.5,0.5)},centerWeight:{value:$[0]},gaussianOffsets:{value:Z},gaussianWeights:{value:K}},vertexShader:`

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

				}`})}_getCompositeMaterial(J){return new ZJ({defines:{NUM_MIPS:J},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}r8.BlurDirectionX=new o0(1,0);r8.BlurDirectionY=new o0(0,1);var EX=0.6,FF=0.4,OF=0.7,EF=4,MX="eagle-eye-3d-bloom",DX=(J)=>{if(!(J>0))return 1;let $=Math.min(1,Math.max(0,(J-0.25)/0.75));return 0.5+0.5*$*$*(3-2*$)},v$=(J,$,Q)=>Q&&J&&$===1,MF=()=>{try{return localStorage.getItem(MX)!=="0"}catch{return!0}},DF=(J)=>{try{localStorage.setItem(MX,J?"1":"0")}catch{}},VX=(J)=>{let{renderer:$}=J,Q=new WJ,Z=new WJ().setRGB((J.clearHex>>16&255)/255,(J.clearHex>>8&255)/255,(J.clearHex&255)/255,P6),K=new WJ(J.clearHex),W,Y,X=0,U=0,H=1,q=0,N=!1,G=!1,F=!1,M=EX,B=document.createElement("style");B.textContent='.ee3d-bloom{position:absolute;right:16px;bottom:14px;z-index:3;margin:0;padding:7px 12px 7px 24px;border:1px solid rgba(120,140,220,.18);border-radius:999px;font:500 12px/1 Inter,"Segoe UI",system-ui,sans-serif;letter-spacing:.02em;color:#8a93b8;background:rgba(10,14,40,.55);cursor:pointer;transition:color 120ms ease-out,background-color 120ms ease-out,transform 120ms ease-out}.ee3d-bloom::before{content:"";position:absolute;left:10px;top:50%;width:6px;height:6px;margin-top:-3px;border-radius:50%;background:#707898;transition:background-color 120ms ease-out,box-shadow 120ms ease-out}.ee3d-bloom:active{transform:scale(.97)}.ee3d-bloom[aria-pressed="true"]{color:#e8ecff;background:rgba(120,140,220,.2)}.ee3d-bloom[aria-pressed="true"]::before{background:#8fb0ff;box-shadow:0 0 8px #8fb0ff}.ee3d-bloom:focus-visible{outline:2px solid rgba(140,170,255,.7);outline-offset:1px}@media (hover:hover){.ee3d-bloom:hover:not([aria-pressed="true"]){color:#c4cbea}}@media (prefers-reduced-motion:reduce){.ee3d-bloom,.ee3d-bloom::before{transition:none}.ee3d-bloom:active{transform:none}}';let O=document.createElement("button");O.type="button",O.className="ee3d-bloom",O.textContent="Bloom",O.setAttribute("aria-pressed","false"),J.container.append(B,O);let E="",C=()=>{let V=v$(D.user,J.tier(),!N),T=`${V}|${D.user}`;if(T===E)return;E=T,O.setAttribute("aria-pressed",String(V)),O.title=V?"Bloom glow is on":D.user&&!N?"Bloom glow is paused: the frame rate dropped. Press to try again":"Bloom glow is off"},P=()=>{if(v$(D.user,J.tier(),!N))D.setUser(!1);else D.setUser(!0),J.allowTier()};O.addEventListener("click",P);let k=(V)=>V.stopPropagation();O.addEventListener("pointerdown",k),O.addEventListener("dblclick",k);let z=()=>{try{let V=new pJ(Math.max(1,X*H),Math.max(1,U*H),{type:tJ}),T=new ZK($,V);return T.setPixelRatio(H),T.setSize(X,U),T.addPass(new WK(J.scene,J.camera)),Y=new r8(new o0(X*H,U*H),EX,FF,OF),T.addPass(Y),T.addPass(new KK),W=T,!0}catch(V){return console.error("eagle-eye 3D: bloom unavailable",V),N=!0,W=void 0,!1}},_=()=>{W?.dispose(),Y?.dispose(),W=void 0,Y=void 0},A=(V)=>{if(V===G)return;G=V,$.outputColorSpace=V?P6:_6,$.setClearColor(V?Z:Q.copy(K),1)},D={user:MF(),zoomScale:1,get active(){return v$(D.user,J.tier(),!N)},render(V){if(!W&&!z())return A(!1),C(),!1;if(A(!0),Y)Y.strength=M*D.zoomScale;return W.render(V),!0},tick(V){let T=v$(D.user,J.tier(),!N);if(T)q=0;else{if(q+=V,G)A(!1);if(W&&q>EF)_()}if(T!==F)F=T,C()},setSize(V,T,w){if(X=V,U=T,H=w,W)W.setPixelRatio(H),W.setSize(X,U)},tune(V,T,w){if(M=V,Y)Y.strength=V,Y.radius=T,Y.threshold=w},setUser(V){if(D.user=V,DF(V),!V)_();C()},dispose(){O.removeEventListener("click",P),O.removeEventListener("pointerdown",k),O.removeEventListener("dblclick",k),O.remove(),B.remove(),A(!1),_()}};return C(),D};var qJ=Math.PI*2,f0=(J,$=0,Q=1)=>J<$?$:J>Q?Q:J,IJ=(J,$,Q)=>J+($-J)*Q,a0=(J,$,Q,Z)=>J+($-J)*(1-Math.exp(-Q*Z)),N8=(J)=>1-Math.pow(1-J,3);class J9{x;target;k;c;v=0;constructor(J=0,$=0,Q=170,Z=14){this.x=J;this.target=$;this.k=Q;this.c=Z}step(J){let $=Math.max(1,Math.ceil(J/0.008)),Q=J/$;for(let Z=0;Z<$;Z++)this.v+=(this.k*(this.target-this.x)-this.c*this.v)*Q,this.x+=this.v*Q;return this.x}}var LX={Spring:J9,damp:a0,easeOutCubic:N8,clamp:f0,lerp:IJ,TAU:qJ};var t8=38,YK=Math.PI/180,VF=32,LF=-10,BF=80,b6=(90-BF)*YK,f6=(90-LF)*YK,BX=0.24,kX=(90-VF)*YK,kF=8,IF=1.6,k7=6,zF=4,RF=0.03,IX=0.0052,CF=5,_F=(J)=>J-Math.round(J/qJ)*qJ,PF=(J,$,Q,Z,K,W=t8)=>{let Y=Math.tan(W*Math.PI/360),X=Y*Math.max(0.05,Q),U=Math.sin($),H=Math.cos($),q=Math.sqrt(U*U+1/(X*X)),N=0;for(let G of J){let F=Math.hypot(G.x,G.z),M=G.y*H,B=M+F*q+Z/X,O=Math.abs(G.y*U-F*H)+K,E=Math.abs(G.y*U+F*H)+K,C=Math.max(M+F*U+O/Y,M-F*U+E/Y);N=Math.max(N,B,C)}return N},zX=(J)=>{let{canvas:$,fx:Q}=J,Z=J.rand??Math.random,K=new E9(t8,1,10,30000),W=1,Y=1,X=new o0(0,0),U=new o0(0,0),H=new o0(0,0),q=new J9(0,0,60,9),N=new J9(0,0,60,9),G=0,F=0,M=0,B=0,O=0,E=BX,C=kX,P=1,k,z=!1,_=0,A=!1,D={camera:K,pointerNDC:X,pointerActive:!1,parallax:U,orbit:H,theta:BX,phi:kX,radius:1800,homeRadius:1800,get dragging(){return z},get idleFor(){return B},get fitTarget(){return _},shouldOrbit:()=>!0,idleDriftEnabled:!0,update:p0,resize:w0,reset:JJ,setHomeRadius:c0,setHome:S0,fitSphere:r,fitDisc:V0,rayFromNDC:e0,pointerWorldOnPlane:L,project:e,dispose:N0},V=()=>D.homeRadius*0.3,T=()=>D.homeRadius*2.4;function w(){B=0,O=0,k=void 0,A=!1}let S=new Map,n=-1,y=0,c=0,i=!1,h=0,t=0,v=0,g=0,p=(l)=>{let G0=$.getBoundingClientRect();if(G0.width<1||G0.height<1)return;X.set((l.clientX-G0.left)/G0.width*2-1,-((l.clientY-G0.top)/G0.height*2-1)),D.pointerActive=!0},O0=(l)=>{if(p(l),l.pointerType==="mouse"&&l.button!==0)return;if(S.size===0&&!D.shouldOrbit(l))return;S.set(l.pointerId,{x:l.clientX,y:l.clientY});try{$.setPointerCapture(l.pointerId)}catch{}if(w(),S.size===1)n=l.pointerId,y=h=l.clientX,c=t=l.clientY,v=l.timeStamp,i=!1,G=F=0;else if(S.size===2){let[G0,o]=[...S.values()];g=Math.hypot(G0.x-o.x,G0.y-o.y),i=!0}z=!0},L0=(l)=>{p(l);let G0=S.get(l.pointerId);if(!G0)return;if(w(),G0.x=l.clientX,G0.y=l.clientY,S.size>=2){let[D0,m0]=[...S.values()],l0=Math.hypot(D0.x-m0.x,D0.y-m0.y);if(g>0&&l0>0)D.radius=f0(D.radius*(g/l0),V(),T());g=l0;return}if(l.pointerId!==n)return;if(!i&&Math.hypot(l.clientX-y,l.clientY-c)>CF)i=!0;if(!i)return;let o=l.clientX-h,W0=l.clientY-t,a=Math.max(0.008,(l.timeStamp-v)/1000);h=l.clientX,t=l.clientY,v=l.timeStamp;let E0=-o*IX,F0=-W0*IX;D.theta+=E0,D.phi=f0(D.phi+F0,b6,f6),G+=(E0/a-G)*0.5,F+=(F0/a-F)*0.5},g0=(l)=>{if(!S.has(l.pointerId))return;try{$.releasePointerCapture(l.pointerId)}catch{}let G0=l.pointerId===n;if(S.delete(l.pointerId),S.size<2)g=0;if(S.size===0){if(z=!1,n=-1,G0&&!i&&l.type==="pointerup")D.onTap?.(l);if(l.timeStamp-v>90)G=F=0}else if(S.size===1){let[o,W0]=[...S.entries()][0];n=o,h=W0.x,t=W0.y,v=l.timeStamp,G=F=0}},M0=()=>{if(!z)D.pointerActive=!1},d=(l)=>{l.preventDefault(),w();let G0=l.deltaMode===1?16:l.deltaMode===2?400:1;M+=f0(l.deltaY*G0,-300,300)*0.0011*k7},Y0=(l)=>{if(!D.shouldOrbit(l))return;JJ()},X0=(l)=>{if(l.ctrlKey||l.metaKey||l.altKey)return;let G0=!0;switch(l.key){case"ArrowLeft":w(),G-=0.9;break;case"ArrowRight":w(),G+=0.9;break;case"ArrowUp":w(),F-=0.7;break;case"ArrowDown":w(),F+=0.7;break;case"+":case"=":w(),M-=0.5*k7*0.3;break;case"-":case"_":w(),M+=0.5*k7*0.3;break;case"r":case"R":JJ();break;default:G0=!1}if(G0)l.preventDefault()};$.style.touchAction="none",$.tabIndex=0,$.setAttribute("role","application"),$.setAttribute("aria-label","Agent network 3D view"),$.setAttribute("aria-roledescription","orbit view. Arrow keys orbit, plus and minus zoom, R resets."),$.style.outline="none",$.addEventListener("pointerdown",O0),$.addEventListener("pointermove",L0),$.addEventListener("pointerup",g0),$.addEventListener("pointercancel",g0),$.addEventListener("pointerleave",M0),$.addEventListener("wheel",d,{passive:!1}),$.addEventListener("dblclick",Y0),$.addEventListener("keydown",X0);let Z0=new x,k0=new x,Q0=new x,_0=new x,z0=new x,B0=new x(0,1,0);function p0(l,G0){let o=J.motion();if(B+=l,k){let s0=k;if(D.theta=s0.t.step(l),D.phi=f0(s0.p.step(l),b6,f6),D.radius=f0(s0.r.step(l),V(),T()),Math.abs(s0.t.x-s0.t.target)+Math.abs(s0.p.x-s0.p.target)+Math.abs(s0.r.x-s0.r.target)/D.homeRadius<0.002&&Math.abs(s0.t.v)+Math.abs(s0.p.v)<0.002)D.theta=s0.t.target,D.phi=s0.p.target,D.radius=s0.r.target,k=void 0;G=F=M=0}else{if(!z){if(D.theta+=G*l,D.phi=f0(D.phi+F*l,b6,f6),D.phi<=b6||D.phi>=f6)F=0;let s0=Math.exp(-k7*l);G*=s0,F*=s0}if(D.radius=f0(D.radius*Math.exp(M*l),V(),T()),M*=Math.exp(-k7*l),Math.abs(G)<0.0001)G=0;if(Math.abs(F)<0.0001)F=0;if(Math.abs(M)<0.00001)M=0}if(_>0&&!z&&(B>=kF||A)&&Math.abs(D.homeRadius-_)>0.5){let s0=a0(D.homeRadius,_,IF,l),m=D.radius/D.homeRadius;if(D.homeRadius=s0,k)k.r.target=s0;else D.radius=s0*m}let W0=D.idleDriftEnabled&&!z&&B>zF&&!k;if(O=a0(O,W0?1:0,W0?0.7:20,l),O>0.0001)D.theta+=RF*O*o*l;q.target=D.pointerActive?X.x:0,N.target=D.pointerActive?X.y:0,U.set(q.step(l),N.step(l)),H.set(_F(D.theta-E),D.phi-C);let a=f0(D.phi,b6,f6),E0=Math.sin(a);_0.set(E0*Math.sin(D.theta),Math.cos(a),E0*Math.cos(D.theta)).multiplyScalar(D.radius),Q0.copy(_0).negate().normalize(),Z0.crossVectors(Q0,B0).normalize(),k0.crossVectors(Z0,Q0).normalize();let F0=D.radius*0.015*o,D0=U.x*F0,m0=U.y*F0,l0=Q.shakeValue;if(l0>0.2)D0+=(Z()*2-1)*l0,m0+=(Z()*2-1)*l0;_0.addScaledVector(Z0,D0).addScaledVector(k0,m0),z0.set(0,0,0).addScaledVector(Z0,D0).addScaledVector(k0,m0),K.position.copy(_0),K.up.copy(B0),K.lookAt(z0),K.updateMatrixWorld()}function w0(l,G0){W=Math.max(1,l),Y=Math.max(1,G0),K.aspect=W/Y,P=K.aspect,K.updateProjectionMatrix()}function JJ(){B=0,O=0,A=!0;let l=Math.round(D.theta/qJ)*qJ+E,G0=new J9(D.theta,l,70,13),o=new J9(D.phi,C,70,13),W0=new J9(D.radius,D.homeRadius,70,13);G0.v=G,o.v=F,k={t:G0,p:o,r:W0},G=F=M=0}function c0(l){if(!(l>0))return;let G0=D.homeRadius>0?D.radius/D.homeRadius:1;if(D.homeRadius=l,D.radius=f0(l*G0,V(),T()),k)k.r.target=l}function S0(l,G0=!0){if(l.theta!==void 0)E=l.theta;if(l.phi!==void 0)C=f0(l.phi,b6,f6);if(l.radius!==void 0&&l.radius>0)D.homeRadius=l.radius;if(G0)D.theta=E,D.phi=C,D.radius=f0(D.homeRadius,V(),T()),k=void 0,G=F=M=0}function r(l,G0,o=1.06){let W0=t8*Math.PI/360,a=Math.atan(Math.tan(W0)*P),F0=(Math.hypot(l.x,l.y,l.z)+G0)*o/Math.sin(Math.min(W0,a));return c0(F0),F0}function V0(l,G0,o,W0=!1){let a=PF(l,C,P,G0,o);if(!(a>0))return _;if(_=a,W0)c0(a);return a}let j=new x,r0=new x;function e0(l,G0,o,W0){o.copy(K.position),W0.set(l,G0,0.5).unproject(K).sub(o).normalize()}let R0=new x,R=new x;function L(l,G0,o=new x){e0(X.x,X.y,R0,R);let W0=G0??j.setFromMatrixColumn(K.matrixWorld,2),a=W0.dot(R);if(Math.abs(a)<0.000001)return null;let E0=r0.copy(l).sub(R0).dot(W0)/a;if(E0<0)return null;return o.copy(R0).addScaledVector(R,E0)}let f=new x;function e(l,G0={x:0,y:0,z:0,visible:!1}){return f.copy(l).project(K),G0.x=(f.x*0.5+0.5)*W,G0.y=(-f.y*0.5+0.5)*Y,G0.z=f.z,G0.visible=f.z>-1&&f.z<1,G0}function N0(){$.removeEventListener("pointerdown",O0),$.removeEventListener("pointermove",L0),$.removeEventListener("pointerup",g0),$.removeEventListener("pointercancel",g0),$.removeEventListener("pointerleave",M0),$.removeEventListener("wheel",d),$.removeEventListener("dblclick",Y0),$.removeEventListener("keydown",X0),S.clear()}return D};var XK=60,AF=700,wF=900,RX=(J,$,Q=Math.random)=>{let Z=[],K=[],W=[],Y=0,X=(H,q)=>H+Q()*(q-H);return{sparks:Z,ripples:K,get shakeValue(){return Y},burst(H,q,N,G=60){for(let F=0;F<N&&Z.length<AF;F++){let M=X(-1,1),B=X(0,qJ),O=Math.sqrt(1-M*M),E=X(0.2,1)*G;Z.push({x:H.x,y:H.y,z:H.z,vx:Math.cos(B)*O*E,vy:Math.sin(B)*O*E,vz:M*E,life:0,max:X(0.5,1.3),size:X(0.8,2.2),col:q})}},spark(H,q,N,G,F){if(Z.length<wF)Z.push({x:H.x,y:H.y,z:H.z,vx:q.x,vy:q.y,vz:q.z,life:0,max:N,size:G,col:F})},ripple(H){if(K.length>XK)K.shift();K.push({x:H.pos.x,y:H.pos.y,z:H.pos.z,r0:H.r0,r1:H.r1,life:0,max:H.life,col:H.color,w:H.width??2.5,shell:H.shell??!1})},shockwave(H,q){for(let N of J.agents.values()){let G=N.x-H.x,F=N.y-H.y,M=N.z-H.z,B=Math.hypot(G,F,M)+1;if(B>600||B<8)continue;let O=q*3.2/(1+B/120);N.vx+=G/B*O,N.vy+=F/B*O,N.vz+=M/B*O}for(let N of W)N(H,q)},shake(H){Y=Math.max(Y,H*$())},flash(H,q=1){if(H==="orb")J.orb.flash=Math.max(J.orb.flash,q);else{let N=J.agents.get(H);if(N)N.flash=Math.max(N.flash,q)}},onShockwave(H){return W.push(H),()=>{let q=W.indexOf(H);if(q>=0)W.splice(q,1)}},step(H){Y=a0(Y,0,4.5,H);for(let q=Z.length-1;q>=0;q--){let N=Z[q];if(N.life+=H,N.life>=N.max){Z[q]=Z[Z.length-1],Z.pop();continue}let G=1-1.4*H;N.vx*=G,N.vy*=G,N.vz*=G,N.x+=N.vx*H,N.y+=N.vy*H,N.z+=N.vz*H}for(let q=K.length-1;q>=0;q--)if(K[q].life+=H,K[q].life>=K[q].max)K[q]=K[K.length-1],K.pop()},clear(){Z.length=0,K.length=0,Y=0}}};var CX=900,_X=0.45,F8=(J)=>J.fog??={value:new x(2000,CX,_X)},w8=(J,$,Q)=>{F8(J).value.set(Math.hypot($.x-Q.x,$.y-Q.y,$.z-Q.z),CX,_X)},h6=`
uniform vec3 uFog;
float fogFade(vec3 wp) {
  float d = distance(wp, cameraPosition);
  return mix(1.0, uFog.z, smoothstep(uFog.x - 0.4 * uFog.y, uFog.x + uFog.y, d));
}
`,YJ={background:-1000,stars:-900,dust:-200,orbits:-180,flare:-150,links:-100,packets:-90,orb:0,nodes:100,halos:150,rings:200,sparks:300,ripples:310,fx:400};function I7(J){let $=J>>>0;return()=>{$=$+1831565813>>>0;let Q=$;return Q=Math.imul(Q^Q>>>15,Q|1),Q^=Q+Math.imul(Q^Q>>>7,Q|61),((Q^Q>>>14)>>>0)/4294967296}}var y$={doc:[52,150,255],search:[40,175,255],code:[178,82,255],mail:[150,160,235],chart:[255,168,52],image:[52,242,112],bell:[150,160,235],globe:[150,226,255],pencil:[52,172,255],api:[150,160,235],gear:[88,255,82],database:[255,162,52],check:[255,172,62]},b$=[[70,150,255],[170,90,255],[255,170,70],[70,255,150],[120,230,255],[235,240,255]];var P9=(J)=>[...y$[J]],PX=[{id:"planner",name:"Planner Agent",icon:"doc",status:"running",tokens:312000,seconds:501,x:467,y:158,radius:66,color:P9("doc")},{id:"research",name:"Research Agent",icon:"search",status:"running",tokens:423000,seconds:734,x:198,y:298,radius:62,color:P9("search")},{id:"code",name:"Code Agent",icon:"code",status:"running",tokens:621000,seconds:948,x:735,y:315,radius:64,color:P9("code")},{id:"email",name:"Email Agent",icon:"mail",status:"stopped",tokens:0,seconds:0,x:117,y:473,radius:48,color:P9("mail")},{id:"analysis",name:"Analysis Agent",icon:"chart",status:"thinking",tokens:198000,seconds:392,x:777,y:568,radius:60,color:P9("chart")},{id:"vision",name:"Vision Agent",icon:"image",status:"running",tokens:391000,seconds:716,x:101,y:637,radius:60,color:P9("image")},{id:"notify",name:"Notification Agent",icon:"bell",status:"stopped",tokens:0,seconds:0,x:815,y:763,radius:42,color:P9("bell")},{id:"web",name:"Web Agent",icon:"globe",status:"completed",tokens:154000,seconds:462,x:128,y:886,radius:61,color:P9("globe")},{id:"writer",name:"Writer Agent",icon:"pencil",status:"idle",tokens:42000,seconds:131,x:805,y:922,radius:57,color:P9("pencil")},{id:"api",name:"API Agent",icon:"api",status:"offline",tokens:0,seconds:0,x:98,y:1108,radius:43,color:P9("api")},{id:"executor",name:"Executor Agent",icon:"gear",status:"running",tokens:512000,seconds:1083,x:724,y:1084,radius:61,color:P9("gear")},{id:"db",name:"DB Agent",icon:"database",status:"running",tokens:287000,seconds:557,x:350,y:1170,radius:61,color:P9("database")},{id:"qa",name:"QA Agent",icon:"check",status:"waiting",tokens:0,seconds:0,x:660,y:1270,radius:57,color:P9("check")}];var q9={running:{label:"Running",dot:[46,255,150],power:1,flow:1,spin:1,tokenRate:300,ticks:!0},thinking:{label:"Thinking",dot:[255,196,78],power:0.9,flow:0.6,spin:2.2,tokenRate:110,ticks:!0},waiting:{label:"Waiting",dot:[255,184,82],power:0.62,flow:0.25,spin:0.35,tokenRate:0,ticks:!1},idle:{label:"Idle",dot:[44,200,255],power:0.7,flow:0.2,spin:0.3,tokenRate:0,ticks:!1},completed:{label:"Completed",dot:[118,228,255],power:0.3,flow:0,spin:0,tokenRate:0,ticks:!1},stopped:{label:"Stopped",dot:[118,126,160],power:0.04,flow:0,spin:0,tokenRate:0,ticks:!1},offline:{label:"Offline",dot:[118,126,160],power:0.04,flow:0,spin:0,tokenRate:0,ticks:!1}},T8=new Set(["completed","stopped","offline"]),AX=new Set(["running","thinking","waiting"]),e8=new Set(["stopped","offline"]),wX={running:["thinking","completed","waiting","running"],thinking:["running","completed"],waiting:["running","thinking"],idle:["running","waiting"],completed:["idle","running"],stopped:["running"],offline:["running"]},x6=[112,120,156];var UK=1024,HK=1536,GK=512,qK=755,NK=(J,$,Q)=>{let Z=-110*Math.PI/180+J/Math.max(1,$)*Math.PI*2,K=$>8?J%2===0?1:0.8:0.94,W=Q==="stopped"||Q==="offline";return{x:Math.min(924,Math.max(100,GK+Math.cos(Z)*380*K)),y:qK+Math.sin(Z)*580*K,radius:W?45:60}},TX=(J)=>J.map(($,Q)=>({...$,...NK(Q,J.length,$.status),color:y$[$.icon]}));var $9=0.7,B9=135*$9,SX=60,TF=380,SF=580,FK=[430,590,750],jX=[0.86,1.06],z7=[270,430,590,750,910],jF=0.9,OK=(J,$)=>{let Q=Math.max(0.05,Math.min(J/UK,$/HK)),Z=J/Q,K=$/Q;return{S:Q,LW:Z,LH:K,stretchX:f0(Z/UK,1,1.7),stretchY:f0(K/HK,1,1.7)}};var EK=(J)=>{let $=f0(0.62+0.25*(J.LW/Math.max(1,J.LH)),0.8,1.1);return{kx:$,kz:$*jF}},vF=(J)=>J<jX[0]?0:J<jX[1]?1:2,yF=(J)=>{let $=2166136261;for(let Q=0;Q<J.length;Q++)$^=J.charCodeAt(Q),$=Math.imul($,16777619);return $>>>0},bF=(J)=>{let $=yF(J);return $=Math.imul($^$>>>16,2246822507),$=Math.imul($^$>>>13,3266489909),$=($^$>>>16)>>>0,$/4294967296},fF=(J)=>bF(J)*2*SX-SX,hF=(J,$)=>{let Q=(J-GK)/TF,Z=($-qK)/SF;return{angle:Math.atan2(Z,Q),ring:Math.hypot(Q,Z)}},vX=(J,$,Q,Z)=>{let{x:K,y:W}=J;if(!Number.isFinite(K)||!Number.isFinite(W)){let q=NK(Q,Z,J.status);K=q.x,W=q.y}let{angle:Y,ring:X}=hF(K,W),U=FK[vF(X)],H=EK($);return{x:Math.cos(Y)*U*H.kx,y:fF(J.id),z:Math.sin(Y)*U*H.kz}};var e9=0.55,MK=0.8,h9=e9+MK,R7=1.15,xF=h9+0.3,gF=0.22,f$=(J,$,Q)=>[IJ(J[0],$[0],Q),IJ(J[1],$[1],Q),IJ(J[2],$[2],Q)],J6=(J,$)=>f$(J,[255,255,255],$),pF=()=>({x:0,y:0,z:0,r:B9,px:new J9(0,0,60,9),py:new J9(0,0,60,9),spawn:new J9(0,0,120,10),feed:0,flash:0,press:0,beat:0,shimmerT:0,activeCount:0,model:"",labelAnchor:{x:0,y:0,z:0}}),yX=(J,$,Q,Z)=>{let K=q9[J.status],W=(N,G)=>N+Q()*(G-N),Y=9,X=Q()>0.5?1:-1,U=[];for(let N=0;N<9;N++){let G=N===0;U.push({off:G?0:N/8*2-1+(Q()-0.5)*0.3,a1:(G?0.5:W(0.25,0.95))*(Q()>0.3?1:-1)*X,a2:(G?0.5:W(0.25,0.95))*(Q()>0.3?-1:1)*X,f1:W(0.4,1.1),f2:W(0.4,1.1),p1:W(0,qJ),p2:W(0,qJ),w:G?2:W(0.5,1.3),alpha:G?0.95:W(0.18,0.5),pts:Array(12).fill(0)})}let H=[J.color[0],J.color[1],J.color[2]],q=J.radius??58;return{spec:J,id:J.id,index:$,accent:H,r:q,baseR:q,hx:0,hy:0,hz:0,x:0,y:0,z:0,vx:0,vy:0,vz:0,col:f$(H,x6,1-K.power),dot:K.dot,power:K.power,flow:K.flow,spin:K.spin,detail:K.power>0.15?1:0,rest:T8.has(J.status)?1:0,spawn:new J9(0,0,150,11),spawnAt:Z,spawned:!1,hover:new J9(1,1,220,16),labelShift:new J9(0,0,200,18),tokens:J.tokens,seconds:J.seconds,introCount:0,grow:0,hit:0,flash:0,statusT:99,tokText:"",timeText:"",tokFlash:0,timeFlash:0,lean:[0,0],phase:W(0,qJ),fs:W(0.8,1.25),side:X,flip:!1,strands:U,packets:[],spawnAcc:W(0,1),launched:!1,launchGrow:0,charging:!1,novaS:1,novaL:0,fade:e8.has(J.status)?0:1,dragging:!1,grabX:0,grabY:0,grabZ:0}},bX={grow:(J,$,Q)=>Math.max(Math.min(1,Math.max(0,(J-($+0.2))/1.3)),Q),count:(J,$)=>Math.min(1,Math.max(0,(J-$)/2))};class DK{agents=new Map;orb=pF();layout=OK(1024,1536);model="";session="";simulate=!1;time=0;selection=null;hover=null;lastState;paused=!1;mountKey="";rosterKey="";built=!1;listeners={};w=0;h=0;on(J,$){let Q=this.listeners[J]??=[];return Q.push($),()=>{let Z=Q.indexOf($);if(Z>=0)Q.splice(Z,1)}}emit(J,$){let Q=this.listeners[J];if(!Q)return;for(let Z of[...Q])Z($)}setPaused(J,$){if(J===this.paused)return;this.paused=J,this.emit("pause",{paused:J,at:$})}setHover(J){if(J===this.hover)return;this.hover=J,this.emit("hover",{id:J})}setSelection(J){if(J===this.selection)return;this.selection=J,this.emit("selection",{id:J})}list(){return[...this.agents.values()]}setViewport(J,$){if(J<2||$<2||J===this.w&&$===this.h)return;this.w=J,this.h=$,this.relayout(!1)}relayout(J){this.layout=OK(this.w||1024,this.h||1536);let $=this.agents.size,Q=0;for(let Z of this.agents.values()){let K=vX(Z.spec,this.layout,Q++,$);if(Z.hx=K.x,Z.hy=K.y,Z.hz=K.z,J)Z.x=Z.hx,Z.y=Z.hy,Z.z=Z.hz}this.emit("layout",{layout:this.layout})}setAgents(J){this.agents.clear(),this.time=0;let $=I7(7);J.forEach((Q,Z)=>{let K={...Q};this.agents.set(K.id,yX(K,Z,$,xF+Z*gF))}),this.relayout(!0),this.built=!0,this.emit("reset",{agents:this.list()})}addAgent(J){if(this.agents.has(J.id))return;let $=this.agents.size,Q=yX({...J},$,I7(7+$),this.time+h9);this.agents.set(Q.id,Q),this.relayout(!1),Q.x=Q.hx,Q.y=Q.hy,Q.z=Q.hz,this.emit("agentAdded",{agent:Q})}updateAgent(J,$){let Q=this.agents.get(J);if(!Q)return;if($.name!==void 0)Q.spec.name=$.name;if($.tokens!==void 0)Q.tokens=$.tokens,Q.spec.tokens=$.tokens;if($.seconds!==void 0)Q.seconds=$.seconds,Q.spec.seconds=$.seconds;let Z=!1;if($.x!==void 0&&$.x!==Q.spec.x||$.y!==void 0&&$.y!==Q.spec.y)Q.spec.x=$.x??Q.spec.x,Q.spec.y=$.y??Q.spec.y,Z=!0;if($.status!==void 0&&$.status!==Q.spec.status){let K=Q.spec.status;Q.spec.status=$.status,Q.statusT=0,this.emit("status",{agent:Q,prev:K,next:$.status})}if(Z)this.relayout(!1);this.emit("agentUpdated",{agent:Q})}setStatus(J,$){if(J.spec.status===$)return;let Q=J.spec.status;J.spec.status=$,J.statusT=0,this.emit("status",{agent:J,prev:Q,next:$})}removeAgent(J){let $=this.agents.get(J);if(!$)return;if(this.agents.delete(J),this.hover===J)this.setHover(null);if(this.selection===J)this.setSelection(null);this.relayout(!1),this.emit("agentRemoved",{agent:$})}applyState(J){this.lastState=J,this.model=J.model,this.session=J.session;let $=`${J.demo}|${J.model}`,Q=J.demo?PX.map((K)=>({...K,color:[...K.color]})):TX(J.agents),Z=J.demo?"":Q.map((K)=>K.id).join(",");if(!this.built||$!==this.mountKey){this.mountKey=$,this.rosterKey=Z,this.simulate=J.demo,this.setAgents(Q);return}if(J.demo)return;if(Z!==this.rosterKey){let K=new Set(this.rosterKey?this.rosterKey.split(","):[]);this.rosterKey=Z;let W=new Set(Q.map((Y)=>Y.id));for(let Y of K)if(!W.has(Y))this.removeAgent(Y);for(let Y of Q)if(!K.has(Y.id))this.addAgent(Y)}for(let K of Q)this.updateAgent(K.id,{status:K.status,tokens:K.tokens,seconds:K.seconds,name:K.name,x:K.x,y:K.y})}}var fX=197647,hX=0.4,mF=0.033,xX=0.25,uF=3000,lF=230,dF=150,cF=20,nF=12,sF=30,gX=120,iF=2500,pX=0.15,mX=0.6,oF=100,aF=8,uX=(J,$)=>{let Q=new URLSearchParams(location.search),Z=$.freeze??Q.get("freeze")==="1",K=new eZ({antialias:!1,alpha:!1,powerPreference:"default"});K.outputColorSpace=_6,K.toneMapping=R9,K.setClearColor(new WJ(fX),1);let W=Math.min(window.devicePixelRatio||1,1.5),Y=W;K.setPixelRatio(Y);let X=K.domElement;if(X.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block",getComputedStyle(J).position==="static")J.style.position="relative";J.appendChild(X);let U=I7(58593),H=new V$,q=new DK,N=typeof window.matchMedia==="function"?window.matchMedia("(prefers-reduced-motion: reduce)"):null,G=$.reducedMotion||N?.matches?0.35:1,F=RX(q,()=>G,U),M=zX({canvas:X,fx:F,motion:()=>G,rand:U});M.idleDriftEnabled=G>=0.5,K.info.autoReset=!1;let B={time:{value:0},ft:{value:0},motion:{value:G},pointer:{value:new o0},orbit:{value:new o0},tier:{value:1},dpr:{value:Y},resolution:{value:new o0(1,1)}};F8(B);let O=0,E=0,C=1,P=0,k=0,z=!1,_=!0,A=!1,D=!1,V=!1,T=0,w=0,S,n=16.7,y=0,c=0,i=-1/0,h=0,t=0,v=[],g=!1,p=[],O0=[],L0=0,g0=0,M0=0.016,d=1,Y0={container:J,canvas:X,renderer:K,scene:H,rig:M,world:q,fx:F,uniforms:B,get ctx(){return Z0},get t(){return O},get ft(){return E},get motion(){return G},get tier(){return C},get dpr(){return Y},hasBloom:!0,get bloom(){return X0},get profile(){return g},set profile(a){g=a},layerTimings:c0,setDpr:(a)=>V0(a,performance.now()),governor:Q.get("gov")!=="0",get width(){return P},get height(){return k},frozen:Z,addLayer:k0,getLayer:(a)=>v.find((E0)=>E0.name===a),update:(a)=>q.applyState(a),setPaused:e0,resize:Q0,setTime:S0,step:(a)=>{w0(a),JJ()},stats:o,dispose:W0},X0=VX({renderer:K,scene:H,camera:M.camera,container:J,clearHex:fX,tier:()=>C,allowTier:()=>{C=1,B.tier.value=1,y=0,i=performance.now()}}),Z0={engine:Y0,renderer:K,scene:H,world:q,fx:F,rig:M,uniforms:B,springs:LX,rng:U};function k0(a){let E0=v.length;while(E0>0&&v[E0-1].renderOrder>a.renderOrder)E0--;if(v.splice(E0,0,a),a.init(Z0),P>0)a.onResize?.(P,k,Z0)}function Q0(){if(D)return;let{clientWidth:a,clientHeight:E0}=J;if(a<2||E0<2||a===P&&E0===k)return;P=a,k=E0,K.setSize(P,k,!1),X0.setSize(P,k,Y),B.resolution.value.set(P,k),M.resize(P,k),q.setViewport(P,k),z0();for(let F0 of v)F0.onResize?.(P,k,Z0);if(!V&&!D&&w)JJ()}let _0=[];function z0(){if(_=!1,P<2)return;let a=0;for(let E0 of q.agents.values()){let F0=_0[a]??(_0[a]={x:0,y:0,z:0});F0.x=E0.hx,F0.y=E0.hy,F0.z=E0.hz,a++}if(_0.length=a,a===0){let E0=_0[0]??(_0[0]={x:0,y:0,z:0});E0.x=430,E0.y=0,E0.z=0,_0.length=1}if(M.fitDisc(_0,lF,dF,!z),!z)M.radius=M.homeRadius;if(a>0)z=!0}let B0=()=>{_=!0};q.on("layout",B0),q.on("reset",B0),q.on("agentAdded",B0),q.on("agentRemoved",B0);function p0(a){O+=a,E+=a*hX,B.time.value=O,B.ft.value=E,B.motion.value=G,q.time=O;let E0=g?performance.now():0;if(F.step(a),_)z0();if(M.update(a,O),B.pointer.value.copy(M.parallax),B.orbit.value.copy(M.orbit),g){L0+=performance.now()-E0;for(let F0=0;F0<v.length;F0++){let D0=performance.now();v[F0].update(a,Z0),p[F0]=(p[F0]??0)+performance.now()-D0}}else for(let F0 of v)F0.update(a,Z0)}function w0(a){let E0=Math.min(xX,Math.max(0.001,a)),F0=Math.ceil(E0/mF);M0=E0;for(let D0=0;D0<F0;D0++)p0(E0/F0)}function JJ(){if(w8(B,M.camera.position,q.orb),g){g0++;for(let a=0;a<v.length;a++){let E0=performance.now();v[a].beforeRender?.(Z0),O0[a]=(O0[a]??0)+performance.now()-E0}}else for(let a of v)a.beforeRender?.(Z0);if(X0.zoomScale=DX(M.radius/M.homeRadius),X0.tick(M0),K.info.reset(),!(X0.active&&X0.render(M0)))K.render(H,M.camera);h=K.info.render.calls,t=K.info.render.triangles}function c0(){let a=Math.max(1,g0),E0=[{name:"engine(fx,camera)",updateMs:L0/a,renderMs:0}];for(let F0=0;F0<v.length;F0++)E0.push({name:v[F0].name,updateMs:(p[F0]??0)/a,renderMs:(O0[F0]??0)/a});return p=[],O0=[],L0=0,g0=0,E0}function S0(a){O=Math.max(0,a),E=O*hX,B.time.value=O,B.ft.value=E,q.time=O,M.update(0.0001,O),B.pointer.value.copy(M.parallax),B.orbit.value.copy(M.orbit),JJ()}function r(a,E0){if(n+=(a-n)*0.1,n>cF)y++,c=0;else if(n<nF)c++,y=0;else y=c=0;if(E0-i<iF)return;if(y>=sF){if(y=0,C>0){let F0=X0.active;if(C=0,B.tier.value=0,i=E0,F0){d=Math.min(aF,d*2);return}}if(Y>mX+0.000001)V0(Math.max(mX,Y-pX),E0)}else if(c>=gX){if(Y<W-0.000001)c=0,V0(Math.min(W,Y+pX),E0);else if(C===0&&c>=gX*d)c=0,C=1,B.tier.value=1,i=E0}}function V0(a,E0){Y=a,i=E0,K.setPixelRatio(Y),X0.setSize(P,k,Y),B.dpr.value=Y;for(let F0 of v)F0.onResize?.(P,k,Z0)}function j(a){if(D||A||V)return;T=requestAnimationFrame(j),Q0();let E0=w?a-w:16.7,F0=(a-(w||a))/1000*1;if(w=a,Y0.governor&&E0<=oF&&!document.hidden)r(E0,a);if(!Z)w0(F0);else M.update(Math.min(xX,Math.max(0.001,F0)),O);JJ()}function r0(){if(cancelAnimationFrame(T),w=0,!D&&!A&&!V&&!document.hidden)T=requestAnimationFrame(j)}function e0(a){if(a===A)return;if(A=a,q.setPaused(A||document.hidden,performance.now()),a)cancelAnimationFrame(T);else r0()}let R0=()=>{if(q.setPaused(A||document.hidden,performance.now()),document.hidden)cancelAnimationFrame(T);else r0()};document.addEventListener("visibilitychange",R0);let R=typeof ResizeObserver==="function"?new ResizeObserver(()=>Q0()):null;R?.observe(J);let L=()=>{G=N?.matches?0.35:1,B.motion.value=G,M.idleDriftEnabled=G>=0.5};N?.addEventListener?.("change",L);let f=(a)=>{a.preventDefault(),V=!0,cancelAnimationFrame(T),clearTimeout(S),S=setTimeout(()=>{if(V&&!D)$.onFatal?.("WebGL context was lost and not restored")},uF)},e=()=>{clearTimeout(S),V=!1,qX();for(let a of v)a.onContextRestored?.(Z0);r0()};X.addEventListener("webglcontextlost",f),X.addEventListener("webglcontextrestored",e),q.on("reset",()=>{O=0,E=0,B.time.value=0,B.ft.value=0,F.clear()});let N0={x:0,y:0,z:0},l=new x,G0=new x(0,0,1);M.onTap=()=>{let a=M.pointerWorldOnPlane(l.set(q.orb.x,q.orb.y,q.orb.z),G0);if(!a)return;N0.x=a.x,N0.y=a.y,N0.z=a.z,F.ripple({pos:N0,r0:70,r1:6,life:0.7,color:[150,180,255],width:2})};function o(){return{fps:Math.round(1000/Math.max(1,n)*10)/10,frameMs:Math.round(n*100)/100,drawCalls:h,dpr:Math.round(Y*100)/100,tier:C,triangles:t}}function W0(){if(D)return;D=!0,cancelAnimationFrame(T),clearTimeout(S),R?.disconnect(),X0.dispose(),document.removeEventListener("visibilitychange",R0),N?.removeEventListener?.("change",L),X.removeEventListener("webglcontextlost",f),X.removeEventListener("webglcontextrestored",e);for(let a=v.length-1;a>=0;a--)try{v[a].dispose()}catch(E0){console.error("eagle-eye 3D: layer dispose failed",v[a].name,E0)}v.length=0,M.dispose(),F.clear(),NX(),K.dispose(),K.forceContextLoss(),X.remove()}if(Q0(),P>0)JJ();return r0(),Y0};var VK=[{x:0.2,y:0.1,r:0.55,c:[150,70,255],a:0.2,fx:0.07,fy:0.05},{x:0.55,y:0.5,r:0.7,c:[50,90,255],a:0.16,fx:0.05,fy:0.06},{x:0.3,y:0.88,r:0.5,c:[255,140,50],a:0.13,fx:0.06,fy:0.04},{x:0.02,y:0.45,r:0.4,c:[40,255,130],a:0.11,fx:0.05,fy:0.07},{x:0.95,y:0.28,r:0.45,c:[60,200,255],a:0.1,fx:0.04,fy:0.05},{x:0.9,y:0.78,r:0.45,c:[255,150,60],a:0.08,fx:0.05,fy:0.05}],LK=["#03040f","#050a22","#030410"],BK=(J)=>new x(parseInt(J.slice(1,3),16),parseInt(J.slice(3,5),16),parseInt(J.slice(5,7),16)).divideScalar(255),rF=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,tF=`
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
`;function lX(){let J,$,Q;return{name:"background",renderOrder:YJ.background,init(Z){let K=Z.uniforms;$=new ZJ({vertexShader:rF,fragmentShader:tF,uniforms:{uTime:K.time,uMotion:K.motion,uPointer:K.pointer,uOrbit:K.orbit,uRes:K.resolution,uG0:{value:BK(LK[0])},uG1:{value:BK(LK[1])},uG2:{value:BK(LK[2])},uBlob:{value:VK.map((W)=>new jJ(W.x,W.y,W.r,W.a))},uBlobC:{value:VK.map((W)=>new x(W.c[0],W.c[1],W.c[2]).divideScalar(255))},uBlobF:{value:VK.map((W)=>new o0(W.fx,W.fy))}},depthTest:!1,depthWrite:!1,transparent:!1,toneMapped:!1}),J=new GJ(new H9(2,2),$),J.frustumCulled=!1,J.renderOrder=YJ.background,J.name="background",Q=Z.scene,Q.add(J)},update(){},dispose(){if(J)Q?.remove(J),J.geometry.dispose();$?.dispose(),J=void 0,$=void 0}}}var kK=3000,eF=6000,dX=14000,JO=`
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
`,$O=`
precision highp float;
varying float vAlpha;
uniform vec3 uColor;
void main() {
  vec2 c = gl_PointCoord - 0.5;
  float soft = 1.0 - smoothstep(0.25, 0.5, length(c));
  gl_FragColor = vec4(uColor * vAlpha * soft, 1.0);
}
`;function cX(){let J,$,Q,Z;return{name:"stars",renderOrder:YJ.stars,init(K){let W=K.rng,Y=new Float32Array(kK*3),X=new Float32Array(kK*4);for(let U=0;U<kK;U++){let H=W()*2-1,q=W()*qJ,N=Math.sqrt(1-H*H),G=0.2+W()*0.8,F=dX+(eF-dX)*G;Y[U*3]=Math.cos(q)*N*F,Y[U*3+1]=H*F,Y[U*3+2]=Math.sin(q)*N*F,X[U*4]=0.4+W()*1.2,X[U*4+1]=W()*qJ,X[U*4+2]=0.6+W()*1.8,X[U*4+3]=G}$=new hJ,$.setAttribute("position",new kJ(Y,3)),$.setAttribute("aStar",new kJ(X,4)),$.boundingSphere=new _9(new x(0,0,0),1e6),Q=new ZJ({vertexShader:JO,fragmentShader:$O,uniforms:{uTime:K.uniforms.time,uMotion:K.uniforms.motion,uDpr:K.uniforms.dpr,uColor:{value:new x(207,224,255).divideScalar(255)}},blending:PJ,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),J=new A6($,Q),J.frustumCulled=!1,J.renderOrder=YJ.stars,J.name="stars",Z=K.scene,Z.add(J)},update(){},dispose(){if(J)Z?.remove(J);$?.dispose(),Q?.dispose(),J=void 0,$=void 0,Q=void 0}}}var IK=(J)=>J<10?"0"+J:""+J;function h$(J){if(J>=1e6)return(J/1e6).toFixed(2)+"M";if(J>=1000)return Math.floor(J/1000)+"K";return String(Math.floor(J))}function x$(J){let $=Math.floor(J),Q=Math.floor($/3600),Z=Math.floor($%3600/60);if(Q>0)return`${Q}:${IK(Z)}:${IK($%60)}`;return`${Z}:${IK($%60)}`}var QO=(J)=>f0((J-1)/0.07),sX=(J,$,Q)=>f0((J-0.45)*2.2)*(1-$*(1-QO(Q))),iX=(J,$)=>N8(f0((J-$-0.1)/0.9)),oX=(J,$)=>N8(f0((J-$+0.05)/0.5)),aX=(J,$)=>$?1:0.92+0.08*J,rX=(J)=>{let $=(Q)=>Math.round(IJ(Q,255,J));return`rgb(${$(188)},${$(196)},${$(228)})`},tX=(J,$)=>IJ(0.62,1,J)*$,eX=(J,$)=>{let Q=$<0.2?0.5:0,Z=(K,W)=>{let Y=J[K]+(255-J[K])*0.12;return Math.round(Y+(W-Y)*Q)};return`rgb(${Z(0,175)},${Z(1,180)},${Z(2,205)})`},J5=(J,$)=>J*(0.7+0.3*($<0.8?1:0.9)),RK=(J)=>{let $=(Q)=>Math.round(IJ(Q,255,J));return`rgb(${$(205)},${$(214)},${$(245)})`},CK=(J,$)=>J*(0.82+$*0.18),$5=(J)=>{let $=(Q,Z)=>{let K=J[Q]+(255-J[Q])*0.35;return Math.round(K+(Z-K)*0.2)};return`rgb(${$(0,200)},${$(1,215)},${$(2,255)})`},Q5=(J,$,Q)=>{let Z=N8(f0(Q));return{tok:h$(IJ(0,J,Z)),time:x$(IJ(0,$,Z))}},nX=[9,16,12],Z5=(J,$,Q)=>Q?nX[J]*(0.78+0.22*Math.sin($*3+J*1.5)):nX[J],K5=(J,$)=>($?J*1.6-Math.PI/2:-Math.PI/4)*180/Math.PI,W5=(J,$,Q)=>6.2+(Q?Math.sin(J*4+$)*0.5:0),Y5=(J,$)=>(J*0.9+$)%1,X5=(J)=>7+J*9,U5=(J,$)=>(1-J)*0.45*$,H5=(J,$)=>(J?0.55:0.2)*$,G5=(J)=>0.88+0.12*Math.sin(J*1.5),q5=(J,$)=>f0(1.9-0.9*(J/Math.max(1,$)),0.35,1),d9={padX:12,padY:9,nameLine:20,rowLine:19,minInner:108,radius:10,gap:40,margin:8},N5=d9.padY*2+d9.nameLine+d9.rowLine,C7=N5+d9.rowLine*2,F5=(J)=>IJ(N5,C7,f0(J)),_K=(J)=>Math.ceil(Math.max(J,d9.minInner)+d9.padX*2),zK=700,ZO=6,O5=(J,$)=>{let Q=Math.min(J,$),Z=Q>=zK?0.75:f0(0.5+0.25*(Q-400)/(zK-400),0.5,0.75);return f0(Math.min(J/1400,$/900),Z,1.05)},E5=(J,$,Q)=>Q>ZO&&Math.min(J,$)<zK,M5=(J)=>f0(4+J,4,16),D5=(J,$=22)=>J.length<=$?J:J.slice(0,$-3).trimEnd()+"...",V5=(J,$,Q,Z,K,W,Y,X=d9.gap)=>{let U=J-Q,H=$-Z,q=Math.hypot(U,H);if(q<0.001)U=Math.SQRT1_2,H=-Math.SQRT1_2;else U/=q,H/=q;let N=J+U*(K+X),G=$+H*(K+X),F=f0(U*2.5,-1,1),M=f0(H*2.5,-1,1);return{x:N-W*(0.5-0.5*F),y:G-Y*(0.5-0.5*M),dx:U,dy:H}},L5=(J,$,Q,Z,K,W,Y,X,U,H=d9.gap,q=d9.margin)=>{let N=K+H*0.6;if(J+W>X-q&&Q-N-W>=q&&J>Q-W/2)J=Q-N-W;else if(J<q&&Q+N+W<=X-q&&J<Q-W/2)J=Q+N;if($+Y>U-q&&Z-N-Y>=q&&$>Z-Y/2)$=Z-N-Y;else if($<q&&Z+N+Y<=U-q&&$<Z-Y/2)$=Z+N;return{x:J,y:$}},PK=(J,$,Q,Z,K,W)=>({x:f0(J,Q,Q+K),y:f0($,Z,Z+W)}),g$=(J,$,Q,Z,K,W,Y=d9.margin)=>({x:f0(J,Y,Math.max(Y,K-Y-Q)),y:f0($,Y,Math.max(Y,W-Y-Z))}),B5=(J,$,Q,Z,K,W,Y)=>{let X=PK(J,$,Z,K,W,Y),U=X.x-J,H=X.y-$,q=Math.hypot(U,H);if(q<=Q+2)return{x0:X.x,y0:X.y,x1:X.x,y1:X.y,len:0,ang:0};let N=U/q,G=H/q,F=J+N*Q,M=$+G*Q;return{x0:F,y0:M,x1:X.x,y1:X.y,len:q-Q,ang:Math.atan2(G,N)*180/Math.PI}},k5=(J,$,Q,Z,K,W=4,Y=d9.margin)=>{let X=J.length;for(let U=0;U<W;U++){let H=!1;for(let q=0;q<X;q++){let N=J[q];for(let G=q+1;G<X;G++){let F=J[G],M=Math.min(N.x+N.w,F.x+F.w)-Math.max(N.x,F.x)+Y;if(M<=0)continue;let B=Math.min(N.y+N.h,F.y+F.h)-Math.max(N.y,F.y)+Y;if(B<=0)continue;let O=N.id<F.id?N.id+"|"+F.id:F.id+"|"+N.id,E=Z.get(O),C=M<=B?0:1;if(E){if(C=E.axis,C===0&&B<M*0.7)C=1;else if(C===1&&M<B*0.7)C=0;E.axis=C,E.seen=K}else Z.set(O,{axis:C,seen:K});if(C===0){let P=N.x+N.w/2<=F.x+F.w/2?1:-1;N.x-=P*M/2,F.x+=P*M/2}else{let P=N.y+N.h/2<=F.y+F.h/2?1:-1;N.y-=P*B/2,F.y+=P*B/2}H=!0}}for(let q of J){let N=g$(q.x,q.y,q.w,q.h,$,Q,Y);q.x=N.x,q.y=N.y}if(!H)break}for(let[U,H]of Z)if(K-H.seen>30)Z.delete(U)},I5=(J,$,Q,Z,K,W,Y=16,X=8)=>{let U=J+Y,H=$+Y;if(U+Q>K-X)U=J-Y-Q;if(H+Z>W-X)H=$-Y-Z;return U=f0(U,X,Math.max(X,K-X-Q)),H=f0(H,X,Math.max(X,W-X-Z)),{x:U,y:H}},z5=(J,$,Q,Z,K)=>({x:J-Q*K/2,y:$-Z*K});var AK='Inter, "Segoe UI", system-ui, -apple-system, Roboto, "Helvetica Neue", sans-serif',KO=`600 15px ${AK}`,WO=204,YO=98,XO=12,R5=120,C5=20;class c9{el;x=NaN;y=NaN;s=NaN;o=-1;constructor(J){this.el=J}set(J,$,Q,Z){let K=this.el.style;if(!(Math.abs(J-this.x)<0.1&&Math.abs($-this.y)<0.1&&Math.abs(Q-this.s)<0.001))this.x=J,this.y=$,this.s=Q,K.transform=`translate(${J.toFixed(1)}px,${$.toFixed(1)}px)${Q===1?"":` scale(${Q.toFixed(3)})`}`;this.op(Z)}op(J){let $=J<0.004?0:J>0.996?1:J;if(Math.abs($-this.o)>0.004||$===0!==(this.o===0))this.o=$,this.el.style.opacity=$.toFixed(3)}hide(){if(this.o!==0)this.o=0,this.el.style.opacity="0"}}var _5=new WeakMap,iJ=(J,$,Q)=>{let Z=_5.get(J);if(!Z)_5.set(J,Z={});if(Z[$]===Q)return;if(Z[$]=Q,$==="text")J.textContent=Q;else if($.startsWith("--"))J.style.setProperty($,Q);else if($.startsWith("@"))J.setAttribute($.slice(1),Q);else J.style[$]=Q},_7=(J,$)=>iJ(J,"opacity",(Math.round($*250)/250).toString()),P5=(J,$="")=>`<span class="ee3d-iw">${J}</span><span class="ee3d-t"></span>${$?`<span class="ee3d-u">${$}</span>`:""}`,UO='<svg viewBox="-10 -10 20 20" width="15" height="15" fill="currentColor"><rect x="-7" width="3.8" rx="1.6"/><rect x="-1.2" width="3.8" rx="1.6"/><rect x="4.6" width="3.8" rx="1.6"/></svg>',HO='<svg viewBox="-10 -10 20 20" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round"><circle cx="0" cy="1.5" r="6.8"/><path d="M-2.6 -8H2.6"/><path class="hand" d="M0 1.5H4.4"/></svg>',A5="http://www.w3.org/2000/svg";function w5(){let J,$,Q,Z,K,W,Y,X,U,H=new Map,q=[],N=new x,G={x:0,y:0,z:0,visible:!1},F={x:0,y:0,z:0,visible:!1},M={x:0,y:0,z:0,visible:!1},B=new Map,O=[],E=[],C=0,P=0,k="",z="",_="",A=-1,D=[],V=-9,T=document.createElement("canvas").getContext("2d"),w=new Map,S=(g,p)=>{let O0=g+"|"+p,L0=w.get(O0);if(L0===void 0){if(T)T.font=g;if(L0=T?T.measureText(p).width:p.length*8,w.size>400)w.clear();w.set(O0,L0)}return L0},n=-1,y=()=>{if(n>=0)return n;let g=25.22,p=6.24;if(T){T.font=`400 26px ${AK}`;let O0=T.measureText("Sonnet 5.5");if(O0.fontBoundingBoxAscent>0)g=O0.fontBoundingBoxAscent,p=O0.fontBoundingBoxDescent}return n=(30-(g+p))/2+g,n},c=(g,p="")=>{let O0=document.createElement("div");if(O0.className=g,p)O0.innerHTML=p;return O0},i=(g)=>{let p=c("ee3d-lab");p.dataset.id=g.id;let O0=c("ee3d-clip"),L0=c("ee3d-bg");O0.appendChild(L0);let g0=c("ee3d-edge"),M0=c("ee3d-it ee3d-name"),d=c("ee3d-it ee3d-row ee3d-srow",'<span class="ee3d-dw"><i class="ee3d-ring"></i><i class="ee3d-glow"></i><i class="ee3d-dot"></i></span><span class="ee3d-t ee3d-st"></span>'),Y0=c("ee3d-it ee3d-row ee3d-stat ee3d-r3",P5(UO,"tokens")),X0=c("ee3d-it ee3d-row ee3d-stat ee3d-r4",P5(HO));p.append(O0,g0,M0,d,Y0,X0),Q.appendChild(p);let Z0=document.createElementNS(A5,"svg");Z0.setAttribute("class","ee3d-lead"),Z0.setAttribute("width","100"),Z0.setAttribute("height","6"),Z0.setAttribute("viewBox","0 -3 100 6"),Z0.setAttribute("aria-hidden","true"),Z0.dataset.id=g.id;let k0=document.createElementNS(A5,"line");k0.setAttribute("x1","0"),k0.setAttribute("y1","0"),k0.setAttribute("x2","100"),k0.setAttribute("y2","0"),k0.setAttribute("pathLength","1"),k0.setAttribute("stroke-dasharray","1 1"),k0.setAttribute("stroke-dashoffset","1"),Z0.appendChild(k0);let Q0=c("ee3d-ldot");Z.append(Z0,Q0);let _0=(B0,p0)=>B0.querySelector(p0),z0=`${g.accent[0]|0},${g.accent[1]|0},${g.accent[2]|0}`;return p.style.setProperty("--ac",z0),Z0.style.setProperty("--ac",z0),Q0.style.setProperty("--ac",z0),{id:g.id,root:p,clip:O0,bg:new c9(L0),edge:new c9(g0),name:new c9(M0),stat:new c9(d),tok:new c9(Y0),time:new c9(X0),lead:new c9(Z0),leadLine:k0,ldot:new c9(Q0),nameEl:M0,statText:_0(d,".ee3d-st"),ring:_0(d,".ee3d-ring"),glow:_0(d,".ee3d-glow"),dot:_0(d,".ee3d-dot"),tokText:_0(Y0,".ee3d-t"),timeText:_0(X0,".ee3d-t"),tokIcon:_0(Y0,".ee3d-iw"),timeIcon:_0(X0,".ee3d-iw"),bars:Array.from(Y0.querySelectorAll("rect")),hand:_0(X0,".hand"),tokStr:"",timeStr:"",tokFlash:0,timeFlash:0,changedAt:-99,occ:1,cmp:0,fullName:"",w:_K(0),ox:new J9(0,0,R5,C5),oy:new J9(0,0,R5,C5),shown:!1,px:0,py:0,pr:0,h:C7,alpha:0,fade:1,rect:{id:g.id,x:0,y:0,w:0,h:0},rootKey:"",leadKey:""}},h=(g)=>{g.shown=!1,g.bg.hide(),g.edge.hide(),g.name.hide(),g.stat.hide(),g.tok.hide(),g.time.hide(),g.lead.hide(),g.ldot.hide()},t=(g)=>{g.root.remove(),g.lead.el.remove(),g.ldot.el.remove(),H.delete(g.id)},v=(g)=>{if(D.push(g),D.length>8)D.shift()};return{name:"labels",renderOrder:900,init(g){J=g,$=g.engine.container,Q=c("ee3d-labels"),Q.setAttribute("data-ee3d","labels"),Z=c("ee3d-leads"),K=c("ee3d-sr"),K.setAttribute("role","status"),K.setAttribute("aria-live","polite"),K.setAttribute("aria-atomic","true"),W=c("ee3d-tip",'<b></b><span class="s"><i></i><u></u></span><span class="k">Tokens <em></em></span><span class="k">Elapsed <em></em></span>'),X=c("ee3d-model"),X.style.translate="none",Y=new c9(W),U=new c9(X),Q.append(Z,X),$.append(Q,K),Y.hide(),U.hide(),q.push(g.world.on("status",({agent:p,next:O0})=>{let L0=H.get(p.id);if(L0)L0.changedAt=g.world.time;v(`${p.spec.name}: ${q9[O0].label}`)}),g.world.on("agentAdded",({agent:p})=>v(`${p.spec.name} joined`)),g.world.on("agentRemoved",({agent:p})=>{let O0=H.get(p.id);if(O0)t(O0);v(`${p.spec.name} left`)}),g.world.on("reset",()=>{for(let p of[...H.values()])t(p);D.length=0,P=0,B.clear()}))},update(){},beforeRender(g){let{world:p,rig:O0}=g,L0=p.time,g0=f0(L0-P,0,0.1);P=L0,C++;let M0=g.engine.width,d=g.engine.height;if(M0<2||d<2)return;let X0=g.uniforms.motion.value<0.5,Z0=O0.camera.position,k0=Math.tan(t8*Math.PI/360),Q0=O0.homeRadius,_0=O5(M0,d),z0=E5(M0,d,p.agents.size)?1:0;for(let r of p.agents.values())if(!H.has(r.id))H.set(r.id,i(r));for(let r of H.values())if(!p.agents.has(r.id))t(r);if(Q.lastChild!==W)Q.appendChild(W);N.set(p.orb.x,p.orb.y,p.orb.z),O0.project(N,F);let B0=Z0.distanceTo(N),p0=d/2/(k0*B0),w0=B9*p0;O.length=0,E.length=0;for(let r of p.agents.values()){let V0=H.get(r.id);if(!V0)continue;let j=sX(r.spawn.x,r.rest,r.hover.x)*r.fade;N.set(r.x,r.y,r.z),O0.project(N,G);let r0=!G.visible||G.z>=1;if(j<=0.01||r0||G.x<-200||G.x>M0+200||G.y<-200||G.y>d+200){h(V0);continue}let e0=Z0.distanceTo(N),R0=d/2/(k0*e0);if(r.spec.name!==V0.fullName){V0.fullName=r.spec.name;let l=D5(r.spec.name);V0.nameEl.textContent=l,V0.w=_K(S(KO,l)),V0.root.style.setProperty("--w",`${V0.w}px`)}let R=e0>B0&&Math.hypot(G.x-F.x,G.y-F.y)<w0*0.9;V0.occ=a0(V0.occ,R?0.3:1,8,g0),V0.px=G.x,V0.py=G.y,V0.pr=Math.max(2,r.r*r.spawn.x*r.hover.x*R0),V0.cmp=a0(V0.cmp,z0,6,g0),V0.h=F5(r.detail*(1-V0.cmp)),V0.alpha=j,V0.fade=q5(e0,Q0)*V0.occ;let L=V5(V0.px,V0.py,F.x,F.y,V0.pr,V0.w*_0,V0.h*_0),f=V0.rect;f.x=L.x,f.y=L.y,f.w=V0.w*_0,f.h=V0.h*_0;let e=L5(f.x,f.y,V0.px,V0.py,V0.pr,f.w,f.h,M0,d),N0=g$(e.x,e.y,f.w,f.h,M0,d);f.x=N0.x,f.y=N0.y,O.push(f),E.push(V0)}k5(O,M0,d,B,C,M5(O.length));for(let r of E){let V0=p.agents.get(r.id),j=r.rect;if(r.ox.target=j.x-r.px,r.oy.target=j.y-r.py,!r.shown)r.ox.x=r.ox.target,r.oy.x=r.oy.target,r.ox.v=r.oy.v=0,r.shown=!0;else r.ox.step(g0),r.oy.step(g0);let r0=g$(r.px+r.ox.x,r.py+r.oy.x,j.w,j.h,M0,d);JJ(r,V0,r0.x,r0.y,j.w,j.h)}function JJ(r,V0,j,r0,e0,R0){let R=q9[V0.spec.status],L=R.ticks,f=L&&!X0,e=iX(L0,V0.spawnAt),N0=aX(e,X0),l=r.alpha*e*r.fade,G0=PK(r.px,r.py,j,r0,e0,R0),o=_0*N0,W0=j+(G0.x-j)*(1-N0),a=r0+(G0.y-r0)*(1-N0),E0=`translate(${W0.toFixed(1)}px,${a.toFixed(1)}px) scale(${o.toFixed(3)})`;if(E0!==r.rootKey)r.rootKey=E0,r.root.style.transform=E0;let F0=r.h;iJ(r.clip,"transform",`translateY(${(F0-C7).toFixed(1)}px)`),r.bg.set(0,C7-F0,1,l),r.edge.set(0,F0-XO,1,l);let D0=B5(r.px,r.py,r.pr,j,r0,e0,R0),m0=oX(L0,V0.spawnAt),l0=X0?1:m0,s0=r.alpha*r.fade*(X0?m0:Math.min(1,m0*3))*0.85;if(D0.len>3){let s=D0.len*l0,H0=r.lead.el.style,C0=`${D0.x0.toFixed(1)},${D0.y0.toFixed(1)},${D0.ang.toFixed(2)},${D0.len.toFixed(1)}`;if(C0!==r.leadKey)r.leadKey=C0,H0.transform=`translate(${D0.x0.toFixed(1)}px,${D0.y0.toFixed(1)}px) rotate(${D0.ang.toFixed(2)}deg) scaleX(${(D0.len/100).toFixed(4)})`;iJ(r.leadLine,"@stroke-dashoffset",(1-Math.round(l0*200)/200).toFixed(3)),r.lead.op(s>0.5?s0:0),r.ldot.set(D0.x0,D0.y0,1,s0)}else r.lead.hide(),r.ldot.hide();let m=V0.detail*(1-r.cmp);iJ(r.nameEl,"color",rX(m)),r.name.op(tX(0.6+0.4*m,l));let T0=`${Math.round(V0.dot[0])},${Math.round(V0.dot[1])},${Math.round(V0.dot[2])}`;iJ(r.stat.el,"--dot",T0),iJ(r.statText,"text",R.label),iJ(r.statText,"color",eX(V0.dot,V0.power)),_7(r.statText,J5(1,L0-r.changedAt)),r.stat.op(l);let U0=Y5(L0,V0.phase),j0=f?X5(U0)/7:1;iJ(r.ring,"transform",`translate(-50%,-50%) scale(${j0.toFixed(2)})`),_7(r.ring,f?U5(U0,1):0),_7(r.glow,H5(L,1));let h0=W5(L0,V0.phase,f)/6.2;iJ(r.dot,"transform",`translate(-50%,-50%) scale(${h0.toFixed(3)})`);let b=f0((m-0.35)/0.65);if(b>0.01){let s=l*b,H0=bX.count(L0,V0.spawnAt),C0=Q5(V0.tokens,V0.seconds,H0);if(C0.tok!==r.tokStr){if(r.tokStr)r.tokFlash=1;r.tokStr=C0.tok}if(C0.time!==r.timeStr){if(r.timeStr&&H0>=1)r.timeFlash=1;r.timeStr=C0.time}r.tokFlash=a0(r.tokFlash,0,3.2,g0),r.timeFlash=a0(r.timeFlash,0,5,g0);let P0=$5(V0.accent);iJ(r.tokIcon,"color",P0),iJ(r.timeIcon,"color",P0),iJ(r.tokText,"text",r.tokStr),iJ(r.timeText,"text",r.timeStr),iJ(r.tokText,"color",RK(r.tokFlash)),iJ(r.timeText,"color",RK(r.timeFlash)),_7(r.tokText,CK(1,r.tokFlash)),_7(r.timeText,CK(1,r.timeFlash));let x0=(1-b)*-4;r.tok.set(0,x0-r.tokFlash*1.5,1,s),r.time.set(0,x0-r.timeFlash*1.5,1,s);for(let XJ=0;XJ<3;XJ++){let HJ=Math.round(Z5(XJ,L0,f)*20)/20,t0=r.bars[XJ];iJ(t0,"@height",String(HJ)),iJ(t0,"@y",String(8-HJ))}let y0=Math.round(K5(L0,f)*4)/4;iJ(r.hand,"@transform",`rotate(${y0} 0 1.5)`)}else r.tok.hide(),r.time.hide()}if(p.model&&F.visible){let{orb:r,model:V0}=p;iJ(X,"text",V0),N.set(r.labelAnchor.x,r.labelAnchor.y,r.labelAnchor.z),O0.project(N,M);let j=S(`400 26px ${AK}`,V0),r0=z5(M.x,M.y,j,y(),p0);U.set(r0.x,r0.y,p0,f0((r.spawn.x-0.3)*1.5)*G5(L0))}else U.hide();let c0=p.hover,S0=c0&&c0!=="orb"?p.agents.get(c0):void 0;if(S0&&O0.pointerActive){let r=q9[S0.spec.status];if(S0.spec.name!==z||r.label!==_||c0!==k||L0-A>=0.25||L0<A){z=S0.spec.name,_=r.label,A=L0,k=c0;let e0=W.querySelector("b"),R0=W.querySelector("i"),R=W.querySelector("u"),L=W.querySelectorAll("em");e0.textContent=S0.spec.name,R.textContent=r.label,R0.style.background=`rgb(${S0.dot[0]|0},${S0.dot[1]|0},${S0.dot[2]|0})`,L[0].textContent=h$(S0.tokens),L[1].textContent=x$(S0.seconds)}let V0=(O0.pointerNDC.x+1)*0.5*M0,j=(1-O0.pointerNDC.y)*0.5*d,r0=I5(V0,j,WO,YO,M0,d);Y.set(r0.x,r0.y,1,1)}else Y.hide(),k="";if(D.length&&performance.now()/1000-V>0.6)V=performance.now()/1000,K.textContent=D.splice(0).join(". ")},dispose(){for(let g of q.splice(0))g();H.clear(),B.clear(),Q?.remove(),K?.remove()}}}var S5=26;var p$=(J)=>J<0?0:J>1?1:J;function j5(J,$,Q,Z){let K=J.x-$.x,W=J.y-$.y,Y=J.z-$.z,X=Math.hypot(K,W,Y)+0.001,U=K/X,H=W/X,q=Y/X,N=-q,G=0,F=U,M=Math.hypot(N,F);if(M<0.001)N=1,F=0,M=1;N/=M,G/=M,F/=M;let B=G*q-F*H,O=F*U-N*q,E=N*H-G*U,C=J.r*J.spawn.x,P=Math.max(20,X-$.r-C),k=0.6+0.4*Z,z=$.r*0.985,_=P*0.15;for(let A=0;A<J.strands.length;A++){let D=J.strands[A],V=D.off===0?0:Math.sin(D.p1)*1.05,T=Math.cos(V),w=Math.sin(V),S=N*T+B*w,n=G*T+O*w,y=F*T+E*w,c=B*T-N*w,i=O*T-G*w,h=E*T-F*w,t=D.off*0.2,v=Math.cos(t),g=Math.sin(t),p=U*v+S*g,O0=H*v+n*g,L0=q*v+y*g,g0=$.x+p*z,M0=$.y+O0*z,d=$.z+L0*z,Y0=J.x-U*C*0.97+S*D.off*C*0.22,X0=J.y-H*C*0.97+n*D.off*C*0.22,Z0=J.z-q*C*0.97+y*D.off*C*0.22,k0=(D.a1*0.5+Math.sin(Q*D.f1+D.p1)*0.28*k)*P*0.34,Q0=(D.a2*0.5+Math.sin(Q*D.f2+D.p2)*0.28*k)*P*0.34,_0=(D.a2*0.35+Math.sin(Q*D.f2*0.8+D.p2+1.3)*0.2*k)*P*0.34,z0=(D.a1*0.35+Math.sin(Q*D.f1*0.8+D.p1+2.1)*0.2*k)*P*0.34,B0=D.pts;B0[0]=g0,B0[1]=M0,B0[2]=d,B0[3]=g0+p*P*0.36+S*k0+c*_0,B0[4]=M0+O0*P*0.36+n*k0+i*_0+_,B0[5]=d+L0*P*0.36+y*k0+h*_0,B0[6]=Y0-U*P*0.36+S*Q0+c*z0,B0[7]=X0-H*P*0.36+n*Q0+i*z0+_,B0[8]=Z0-q*P*0.36+y*Q0+h*z0,B0[9]=Y0,B0[10]=X0,B0[11]=Z0}}function g6(J,$,Q){let Z=1-$,K=Z*Z*Z,W=3*Z*Z*$,Y=3*Z*$*$,X=$*$*$;Q[0]=K*J[0]+W*J[3]+Y*J[6]+X*J[9],Q[1]=K*J[1]+W*J[4]+Y*J[7]+X*J[10],Q[2]=K*J[2]+W*J[5]+Y*J[8]+X*J[11]}var v5=()=>({out:[0,0,0],inn:[0,0,0],spOut:[0,0,0],spIn:[0,0,0]}),wK=(J,$,Q,Z)=>{J[0]=$[0]+(Q[0]-$[0])*Z,J[1]=$[1]+(Q[1]-$[1])*Z,J[2]=$[2]+(Q[2]-$[2])*Z},GO=[200,160,255],qO=[190,150,255],NO=[255,255,255],T5=(J,$,Q)=>wK(J,$,NO,Q);function TK(J,$){T5($.out,J,0.35),T5($.inn,J,0.2),wK($.inn,$.inn,GO,0.5),$.spOut[0]=J[0],$.spOut[1]=J[1],$.spOut[2]=J[2],wK($.spIn,J,qO,0.5)}var J8=[0,0,0];function y5(J,$,Q,Z,K){let W=(Y,X)=>Y+Q()*(X-Y);J.spawnAcc+=$*J.flow*2.4*J.grow;while(J.spawnAcc>=1)if(J.spawnAcc-=1,J.packets.length<16){let Y=Q()<0.55;J.packets.push({si:Math.floor(Q()*J.strands.length),t:Y?0:1,dir:Y?1:-1,spd:W(0.16,0.34)*(0.7+J.flow*0.5),size:W(0.8,1.4),sparkT:0})}for(let Y=J.packets.length-1;Y>=0;Y--){let X=J.packets[Y];if(X.t+=X.spd*X.dir*$,g6(J.strands[X.si].pts,p$(X.t),J8),X.sparkT-=$,X.sparkT<=0&&Z.sparkCount()<600)X.sparkT=0.045,Z.spark(J8[0],J8[1],J8[2],W(-14,14),W(-14,14),W(-14,14),W(0.5,1.2),W(0.6,1.4),X.dir>0?K.spOut:K.spIn);if(X.t>=1&&X.dir>0)J.hit=Math.min(1.2,J.hit+0.28),Z.burst(J8[0],J8[1],J8[2],J.col,3,40),J.packets.splice(Y,1);else if(X.t<=0&&X.dir<0)Z.feed(0.06),Z.burst(J8[0],J8[1],J8[2],J.col,2,30),J.packets.splice(Y,1);else if(X.t>1.01||X.t<-0.01)J.packets.splice(Y,1)}}function b5(J,$,Q){for(let Z=0;Z<$&&J.packets.length<22;Z++)J.packets.push({si:Math.floor(Q()*J.strands.length),t:Z%2?1:0,dir:Z%2?-1:1,spd:0.45+Q()*0.35,size:1+Q()*0.5,sparkT:0});J.hit=Math.min(1.4,J.hit+0.5)}var f5=(J,$,Q)=>(0.1+0.9*p$(J))*(1+$*0.8+Q*0.25),h5=(J)=>p$((J-1)/0.07),x5=(J)=>Math.max(0.07692307692307693,Math.min(1,J)),g5=(J)=>p$(J*1.2+0.1);var p5=64,FO=9,OO=FO*2,EO=p5*OO,SK=19,MO=`${h6}
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
`,DO=`
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
`;function m5(){let J,$,Q,Z,K=new Float32Array(EO*SK),W=new A8(K,SK,1);W.setUsage(U9);let Y=S5;return{name:"links",renderOrder:YJ.links,init(X){$=new eJ;let U=new Float32Array((Y+1)*2*3);for(let N=0;N<=Y;N++)U[N*6]=N/Y,U[N*6+1]=-1,U[N*6+3]=N/Y,U[N*6+4]=1;let H=[];for(let N=0;N<Y;N++){let G=N*2;H.push(G,G+1,G+2,G+1,G+3,G+2)}$.setAttribute("position",new gJ(U,3)),$.setIndex(H);let q=(N,G)=>new M9(W,G,N);$.setAttribute("aP0",q(0,3)),$.setAttribute("aP1",q(3,3)),$.setAttribute("aP2",q(6,3)),$.setAttribute("aP3",q(9,3)),$.setAttribute("aParam",q(12,4)),$.setAttribute("aCol",q(16,3)),$.instanceCount=0,Q=new ZJ({vertexShader:MO,fragmentShader:DO,uniforms:{uRes:{value:X.uniforms.resolution.value},uFog:F8(X.uniforms)},blending:PJ,side:V9,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),J=new GJ($,Q),J.frustumCulled=!1,J.renderOrder=YJ.links,J.name="links",Z=X.scene,Z.add(J)},update(X,U){let H=U.world,q=U.uniforms.motion.value;for(let N of H.agents.values())j5(N,H.orb,H.time,q)},beforeRender(X){if(!$)return;let U=X.world;w8(X.uniforms,X.rig.camera.position,U.orb);let H=U.time,q=0,N=0;for(let G of U.agents.values()){if(N++>=p5)break;if(G.grow<=0.001)continue;let F=h5(G.hover.x),M=f5(G.power,F,G.hit),B=x5(G.grow),O=G.col[0]/255,E=G.col[1]/255,C=G.col[2]/255;for(let P=0;P<2;P++)for(let k=G.strands.length-1;k>=0;k--){let z=G.strands[k],_=q++*SK,A=z.pts;for(let D=0;D<12;D++)K[_+D]=A[D];if(P===0)K[_+12]=7*(1+F*0.4),K[_+13]=Math.min(1,0.055*M),K[_+14]=1;else{let D=0.75+0.25*Math.sin(H*1.6+z.p1);K[_+12]=z.w*(1+F*0.4),K[_+13]=Math.min(1,z.alpha*M*D),K[_+14]=0}K[_+15]=B,K[_+16]=O,K[_+17]=E,K[_+18]=C}}$.instanceCount=q,W.needsUpdate=!0},dispose(){if(J)Z?.remove(J);$?.dispose(),Q?.dispose(),J=void 0,$=void 0,Q=void 0}}}var VO=`
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
`,LO=`
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
`;class $6{capacity;mesh;geo;mat;pos;col;aPos;aCol;n=0;scene;constructor(J,$,Q,Z){this.capacity=J;let K=new eJ;K.setAttribute("position",new gJ(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),K.setIndex([0,1,2,0,2,3]),this.pos=new Float32Array(J*4),this.col=new Float32Array(J*4),this.aPos=new dJ(this.pos,4),this.aCol=new dJ(this.col,4),this.aPos.setUsage(U9),this.aCol.setUsage(U9),K.setAttribute("aPos",this.aPos),K.setAttribute("aCol",this.aCol),K.instanceCount=0,this.geo=K,this.mat=new ZJ({vertexShader:VO,fragmentShader:LO,uniforms:{uRes:{value:Q.resolution.value}},blending:PJ,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),this.mesh=new GJ(K,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=$,this.mesh.name=Z}attach(J){this.scene=J,J.add(this.mesh)}begin(){this.n=0}add(J,$,Q,Z,K,W,Y,X){if(this.n>=this.capacity||X<=0.004)return;let U=this.n++*4;this.pos[U]=J,this.pos[U+1]=$,this.pos[U+2]=Q,this.pos[U+3]=Z,this.col[U]=K/255,this.col[U+1]=W/255,this.col[U+2]=Y/255,this.col[U+3]=X>1?1:X}end(){this.geo.instanceCount=this.n,this.aPos.needsUpdate=!0,this.aCol.needsUpdate=!0}get count(){return this.n}dispose(){this.scene?.remove(this.mesh),this.geo.dispose(),this.mat.dispose(),this.scene=void 0}}var BO=4096,kO=5;function u5(){let J,$,Q=new Map,Z=[0,0,0],K={x:0,y:0,z:0},W,Y=(X)=>{let U=Q.get(X);if(!U)U=v5(),Q.set(X,U);return U};return{name:"packets",renderOrder:YJ.packets,init(X){J=new $6(BO,YJ.packets,X.uniforms,"packets"),J.attach(X.scene),W={sparkCount:()=>X.fx.sparks.length,spark(N,G,F,M,B,O,E,C,P){K.x=N,K.y=G,K.z=F,X.fx.spark(K,{x:M,y:B,z:O},E,C,P)},burst(N,G,F,M,B,O){K.x=N,K.y=G,K.z=F,X.fx.burst(K,M,B,O)},feed(N){X.world.orb.feed=Math.min(1,X.world.orb.feed+N)}};let U=(N,G)=>{b5(N,G,X.rng),X.fx.ripple({pos:N,r0:N.r,r1:N.r+70,life:1,color:N.col,width:2.5})},H=X.world.on("pulseAgent",({agent:N,n:G})=>U(N,G)),q=X.world.on("pulse",({id:N})=>{if(N){let G=X.world.agents.get(N);if(G)U(G,5)}else for(let G of X.world.agents.values())U(G,5)});$=()=>{H(),q()}},update(X,U){if(!W)return;for(let H of U.world.agents.values()){if(H.grow<=0.001&&H.packets.length===0)continue;let q=Y(H);TK(H.col,q),y5(H,X,U.rng,W,q)}},beforeRender(X){if(!J)return;J.begin();for(let U of X.world.agents.values()){if(U.grow<=0.001||U.packets.length===0)continue;let H=Y(U);TK(U.col,H);let q=g5(U.power);for(let N=0;N<U.packets.length;N++){let G=U.packets[N];if(G.t>U.grow+0.02)continue;let F=G.dir>0?H.out:H.inn,M=U.strands[G.si].pts;for(let B=kO;B>=1;B--){let O=Math.min(1,Math.max(0,G.t-G.dir*B*0.012));g6(M,O,Z),J.add(Z[0],Z[1],Z[2],5*G.size*(1-B*0.12),F[0],F[1],F[2],(0.5-B*0.08)*q)}g6(M,Math.min(1,Math.max(0,G.t)),Z),J.add(Z[0],Z[1],Z[2],14*G.size,F[0],F[1],F[2],0.75*q),J.add(Z[0],Z[1],Z[2],-1.7*G.size,255,255,255,q)}}J.end()},dispose(){$?.(),$=void 0,J?.dispose(),J=void 0,Q.clear()}}}var IO=1500;function l5(){let J;return{name:"sparks",renderOrder:YJ.sparks,init($){J=new $6(IO,YJ.sparks,$.uniforms,"sparks"),J.attach($.scene)},update(){},beforeRender($){if(!J)return;let Q=$.fx.sparks;J.begin();for(let Z=0;Z<Q.length;Z++){let K=Q[Z],W=1-K.life/K.max;J.add(K.x,K.y,K.z,K.size*3.2,K.col[0],K.col[1],K.col[2],W*0.8)}J.end()},dispose(){J?.dispose(),J=void 0}}}var m$=XK+4,zO=`
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
`,RO=`
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
`;function d5(){let J,$,Q,Z,K=new Float32Array(m$*4),W=new Float32Array(m$*4),Y=new Float32Array(m$*2),X=new dJ(K,4),U=new dJ(W,4),H=new dJ(Y,2);return X.setUsage(U9),U.setUsage(U9),H.setUsage(U9),{name:"ripples",renderOrder:YJ.ripples,init(q){$=new eJ,$.setAttribute("position",new gJ(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),$.setIndex([0,1,2,0,2,3]),$.setAttribute("aA",X),$.setAttribute("aB",U),$.setAttribute("aC",H),$.instanceCount=0,Q=new ZJ({vertexShader:zO,fragmentShader:RO,uniforms:{uRes:{value:q.uniforms.resolution.value}},blending:PJ,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),J=new GJ($,Q),J.frustumCulled=!1,J.renderOrder=YJ.ripples,J.name="ripples",Z=q.scene,Z.add(J)},update(){},beforeRender(q){if(!$)return;let N=q.fx.ripples,G=Math.min(N.length,m$);for(let F=0;F<G;F++){let M=N[F],B=M.life/M.max,O=N8(B);K[F*4]=M.x,K[F*4+1]=M.y,K[F*4+2]=M.z,K[F*4+3]=IJ(M.r0,M.r1,O),W[F*4]=M.col[0]/255,W[F*4+1]=M.col[1]/255,W[F*4+2]=M.col[2]/255,W[F*4+3]=(1-B)*0.55,Y[F*2]=M.w*(1-B*0.6),Y[F*2+1]=M.shell?1:0}$.instanceCount=G,X.needsUpdate=!0,U.needsUpdate=!0,H.needsUpdate=!0},dispose(){if(J)Z?.remove(J);$?.dispose(),Q?.dispose(),J=void 0,$=void 0,Q=void 0}}}var c5=260000,s5=900,CO=180,p6=12,u$=0,l$=1,d$=2,c$=3,n$=4,s$=5,_O=6,i$=7,PO=8,AO=9,n5=10,wO=11,TO=0.05,SO=0.03,jO=70,vO=(J,$,Q,Z=1024,K=1536)=>f0(Math.round(J*$/(Z*K)*560*(Q?0.4:1)),CO,s5);class jK{rand;data=new Float32Array(s5*p6);count=0;LW=1024;LH=1536;classes;constructor(J,$=6){this.rand=J;this.classes=$}rnd(J,$){return J+this.rand()*($-J)}setViewport(J,$,Q,Z,K){this.LW=J,this.LH=$;let W=vO(J,$,Q);if(this.count===0||Math.abs(this.count-W)/W>0.25){this.count=W;for(let Y=0;Y<W;Y++)this.spawn(Y,!0,-1,0,0,0,Z,K);return!0}return!1}spawn(J,$,Q,Z,K,W,Y,X){let U=this.data,H=J*p6,q=this.rnd(0,qJ),N=Math.hypot(this.LW,this.LH)*0.55,G,F;if($)G=this.rnd(-this.LW/2-40,this.LW/2+40),F=this.rnd(-this.LH/2-40,this.LH/2+40);else{let _=this.rnd(Y*1.6,N);G=Z+Math.cos(q)*_,F=W+Math.sin(q)*_*1.1}let M=K+(this.rand()+this.rand()+this.rand()-1.5)*(jO*1.33),B=G-Z,O=M-K,E=F-W,C=Math.hypot(B,O,E)+1,P=Math.hypot(B,E)+0.000001,k=Math.sqrt(c5/C)*this.rnd(0.45,1.05)*X,z=this.rand()<0.88?1:-1;U[H+u$]=G,U[H+l$]=M,U[H+d$]=F,U[H+c$]=-E/P*k*z,U[H+n$]=this.rnd(-3,3)*X,U[H+s$]=B/P*k*z,U[H+_O]=this.rnd(0.7,2.3),U[H+i$]=Q>=0?Q:Math.floor(Math.pow(this.rand(),1.5)*this.classes),U[H+PO]=this.rnd(0,qJ),U[H+AO]=this.rnd(0.8,3),U[H+n5]=$?5:0,U[H+wO]=this.rand()<0.12?1:0}shockwave(J,$,Q,Z,K){let W=this.data;for(let Y=0;Y<this.count;Y++){let X=Y*p6,U=W[X+u$]-J,H=W[X+l$]-$,q=W[X+d$]-Q,N=Math.hypot(U,H,q)+1;if(N>520)continue;let G=Z/(1+N/90)*K;W[X+c$]+=U/N*G,W[X+n$]+=H/N*G,W[X+s$]+=q/N*G}}step(J,$){let Q=this.data,{cx:Z,cy:K,cz:W,R:Y,agents:X,ptrMass:U,motion:H}=$,q=Y*Y*0.72,N=this.LW/2+260,G=this.LH/2+260,F=Math.exp(-0.05*J),M=Math.exp(-SO*J),B=X.length;for(let O=0;O<this.count;O++){let E=O*p6;Q[E+n5]+=J;let C=Q[E+u$],P=Q[E+l$],k=Q[E+d$],z=Z-C,_=K-P,A=W-k,D=z*z+_*_+A*A,V=D+1200,T=c5/(V*Math.sqrt(V)),w=z*T,S=_*T,n=A*T;if(D<q){$.onConsume(C,P,k,Q[E+i$]),this.spawn(O,!1,Q[E+i$],Z,K,W,Y,H);continue}for(let p=0;p<B;p++){let O0=X[p];z=O0.x-C,_=O0.y-P,A=O0.z-k,V=z*z+_*_+A*A+500,T=9000*(0.25+O0.power)*(O0.dragging?3:1)/(V*Math.sqrt(V)),w+=z*T,S+=_*T,n+=A*T}if(U)z=$.px-C,_=$.py-P,A=$.pz-k,V=z*z+_*_+A*A+900,T=U/(V*Math.sqrt(V)),w+=z*T,S+=_*T,n+=A*T;S-=(P-K)*TO;let y=Q[E+c$]+w*J*H,c=Q[E+n$]+S*J*H,i=Q[E+s$]+n*J*H;y*=F,c*=F*M,i*=F;let h=Math.hypot(y,c,i);if(h>240){let p=240/h;y*=p,c*=p,i*=p}Q[E+c$]=y,Q[E+n$]=c,Q[E+s$]=i;let t=C+y*J,v=P+c*J,g=k+i*J;if(Q[E+u$]=t,Q[E+l$]=v,Q[E+d$]=g,t<Z-N||t>Z+N||g<W-G||g>W+G||v<K-900||v>K+900)this.spawn(O,!1,Q[E+i$],Z,K,W,Y,H)}}}var yO=26000,bO=150000,fO=new x(140,180,255).divideScalar(255),vK=240,hO=`${h6}
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
`,xO=`
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
`,gO=`
varying vec2 vP;
uniform float uSpan;
void main() {
  vP = (uv - 0.5) * uSpan;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,pO=`
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
`;function i5(){let J,$,Q,Z,K,W,Y,X,U,H,q,N=[],G=new x,F=new x,M=0,B=!1,O=0,E=0,C=!1,P=new x,k=new x(0,1,0),z=new l9().setFromAxisAngle(new x(1,0,0),-Math.PI/2),_=new x,A=!1,D={cx:0,cy:0,cz:0,R:B9,agents:N,ptrMass:0,px:0,py:0,pz:0,motion:1,onConsume:(V,T,w,S)=>{}};return{name:"dust",renderOrder:YJ.dust,init(V){U=V.scene;let T=V.world;J=new jK(V.rng,b$.length);let w=()=>{let y=V.uniforms.motion.value<0.5;J.setViewport(T.layout.LW,T.layout.LH,y,T.orb.r,V.uniforms.motion.value)};w(),q=T.on("layout",w),H=V.fx.onShockwave((y,c)=>{J.shockwave(y.x,y.y,y.z,c,V.uniforms.motion.value)});let S=new x;D.onConsume=(y,c,i,h)=>{if(T.orb.feed=Math.min(1,T.orb.feed+0.012),V.rng()<0.3)S.x=y,S.y=c,S.z=i,V.fx.burst(S,b$[h],1,25)};let n=new H9(2,2);Q=new eJ,Q.setIndex(n.getIndex()),Q.setAttribute("position",n.getAttribute("position")),n.dispose(),K=new A8(J.data,p6,1),K.setUsage(U9),Q.setAttribute("iPos",new M9(K,3,0)),Q.setAttribute("iVel",new M9(K,3,3)),Q.setAttribute("iA",new M9(K,4,6)),Q.setAttribute("iB",new M9(K,2,10)),Q.instanceCount=J.count,Z=new ZJ({vertexShader:hO,fragmentShader:xO,uniforms:{uTime:V.uniforms.time,uDpr:V.uniforms.dpr,uRes:{value:V.uniforms.resolution.value},uFog:F8(V.uniforms),uPal:{value:b$.map((y)=>new x(y[0],y[1],y[2]).divideScalar(255))}},blending:PJ,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),$=new GJ(Q,Z),$.frustumCulled=!1,$.renderOrder=YJ.dust,$.name="dust",U.add($),X=new H9(1,1),Y=new ZJ({vertexShader:gO,fragmentShader:pO,uniforms:{uSpan:{value:vK},uRadius:{value:60},uAlpha:{value:0},uHalfW:{value:0.75},uColor:{value:fO}},blending:PJ,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),W=new GJ(X,Y),W.scale.set(vK,vK,1),W.frustumCulled=!1,W.visible=!1,W.renderOrder=YJ.rings,W.name="dust-well-ring",U.add(W)},update(V,T){let w=J,S=T.world,n=T.rig,y=T.uniforms.motion.value;N.length=0;for(let h of S.agents.values())N.push(h);let c=!1;for(let h=0;h<N.length;h++)if(N[h].dragging)c=!0;if(F.set(S.orb.x,S.orb.y,S.orb.z),C=!1,B=n.pointerActive,n.camera.getWorldDirection(_),A=Math.abs(_.y)>0.3,B&&n.pointerWorldOnPlane(F,A?k:void 0,G)&&G.distanceToSquared(F)<6250000)C=!0;let i=n.dragging;M=C?i?bO:yO:0,O=a0(O,i?1:0,14,V),E=a0(E,C&&!c?1:0,14,V),D.cx=S.orb.x,D.cy=S.orb.y,D.cz=S.orb.z,D.R=S.orb.r,D.ptrMass=M,D.px=G.x,D.py=G.y,D.pz=G.z,D.motion=y,w.step(V,D)},beforeRender(V){if(!J||!Q||!K||!W||!Y)return;w8(V.uniforms,V.rig.camera.position,V.world.orb),K.needsUpdate=!0,Q.instanceCount=J.count;let T=E>0.01&&C;if(W.visible=T,!T)return;let w=V.uniforms.time.value*0.8%1,S=O,n=60-w*55*S+w*24*(1-S);P.copy(G),W.position.copy(P),W.quaternion.copy(A?z:V.rig.camera.quaternion);let c=2*V.rig.camera.position.distanceTo(P)*Math.tan(V.rig.camera.fov*Math.PI/360)/Math.max(1,V.uniforms.resolution.value.y);Y.uniforms.uRadius.value=n,Y.uniforms.uAlpha.value=(1-w)*(0.12+S*0.3)*E,Y.uniforms.uHalfW.value=Math.max(0.75,c*0.6)},onResize(V,T,w){Z?.uniforms.uRes.value?.copy(w.uniforms.resolution.value)},dispose(){if(H?.(),q?.(),$)U?.remove($);if(W)U?.remove(W);Q?.dispose(),Z?.dispose(),X?.dispose(),Y?.dispose(),$=void 0,W=void 0,Q=void 0,Z=void 0,Y=void 0,X=void 0,K=void 0,J=void 0}}}var P7=[[0,[255,205,255]],[0.14,[226,118,255]],[0.38,[168,92,255]],[0.62,[84,152,255]],[0.84,[96,232,255]],[1,[255,215,255]]],mO=(J,$,Q)=>[IJ(J[0],$[0],Q),IJ(J[1],$[1],Q),IJ(J[2],$[2],Q)],A7=Array.from({length:65},(J,$)=>{let Q=$/64;for(let Z=1;Z<P7.length;Z++){let[K,W]=P7[Z];if(Q<=K){let[Y,X]=P7[Z-1];return mO(X,W,(Q-Y)/(K-Y))}}return P7[P7.length-1][1]}),t5=(J)=>A7[Math.round(f0(J)*64)],o5=[-0.92,-0.5,-0.12,0.18,0.55,0.9],uO=0.4,a5=90,lO=96,Q6=8,m6=0,r5=1,yK=2,bK=3,fK=4,hK=5,xK=6,gK=7;class pK{rand;th=-0.95;thT=-0.95;ph=-0.55;phT=-0.55;sc=0.25;scT=0.25;el=1;elT=1;di=0;diT=0;dn=1;dnT=1;next=0;k=0;kk=0;acc=0;sacc=0;cx=0;cy=0;A=1;B=1;c=1;s=0;a0=0;sA=0;sB=1;fax=0;fay=0;fbx=0;fby=0;nax=0;nay=0;nbx=0;nby=0;ft=0;thE=-0.95;tilt=0;fm={th:-0.95,ph:-0.55,sc:0.25,el:1,di:0,dn:1};R=B9;particles=new Float32Array(a5*Q6);count=0;lp=new Float64Array(4);fp=new Float64Array(2);constructor(J){this.rand=J}rnd(J,$){return J+this.rand()*($-J)}loopAt(J){let $=this.lp,Q=this.a0+J*qJ,Z=Math.cos(Q),K=Math.sin(Q),W=this.A*Z,Y=this.B*K;$[0]=this.cx+W*this.c-Y*this.s,$[1]=this.cy+W*this.s+Y*this.c;let X=this.B*Z,U=this.A*K,H=Math.hypot(X,U)||1;$[2]=(X*this.c-U*this.s)/H,$[3]=(X*this.s+U*this.c)/H;let q=this.R*this.sc*(0.1*Math.sin(J*qJ*2+this.ft*0.7)+0.05*Math.sin(J*qJ*4-this.ft*0.6))*(0.4+0.6*this.kk);return $[0]+=$[2]*q,$[1]+=$[3]*q,$}flareOff(J,$,Q,Z,K,W){let Y=this.R*this.sc*0.5*(0.55+0.45*K)*(0.1+0.9*Math.pow(Math.sin(Math.PI*J),0.75)),X=Math.sin(J*qJ*1.4+Z+W*0.45)*Q,U=(Math.sin(J*7-W*0.8+Z*1.3)+0.5*Math.sin(J*15+W*1.2+Z*2.1))*0.15;return($*0.35+X*0.75+U)*Y}strandAt(J,$,Q,Z,K,W){let Y=this.loopAt(IJ(this.sA,this.sB,J)),X=this.flareOff(J,$,Q,Z,K,W);return this.fp[0]=Y[0]+Y[2]*X,this.fp[1]=Y[1]+Y[3]*X,this.fp}step(J,$){let Q=$.R;this.R=Q;let Z=$.motion,K=J*uO;this.ft+=K;let W=this.ft,Y=$.active,X=Y>0?f0(0.78+Y*0.05):0.1;this.k=a0(this.k,X,Y>0?1.4:0.8,J);let U=this.kk=f0(this.k*f0($.spawn)+$.feed*0.5);if(W>=this.next){this.next=W+this.rnd(2.4,5.5),this.thT=f0(this.th+this.rnd(-1.6,1.6),-2.6,0.6),this.phT=this.thT+this.rnd(-0.6,1.2);let T=this.rand();this.scT=0.35*(T<0.72?this.rnd(0.5,0.8):T<0.88?this.rnd(0.85,1):this.rnd(0.3,0.45)),this.elT=this.rnd(0.8,1.25),this.diT=this.rnd(-0.12,0.12);let w=this.rand();this.dnT=w<0.75?this.rnd(0.6,1.3):w<0.93?this.rnd(0.12,0.3):0.03}let H=this.fm;H.th=a0(H.th,this.thT,1.4,K),this.th=a0(this.th,H.th,1.4,K),H.ph=a0(H.ph,this.phT,1.3,K),this.ph=a0(this.ph,H.ph,1.3,K),H.sc=a0(H.sc,this.scT,1.8,K),this.sc=a0(this.sc,H.sc,1.8,K),H.el=a0(H.el,this.elT,1.4,K),this.el=a0(this.el,H.el,1.4,K),H.di=a0(H.di,this.diT,1.4,K),this.di=a0(this.di,H.di,1.4,K),H.dn=a0(H.dn,this.dnT,1.2,K),this.dn=a0(this.dn,H.dn,1.2,K);let q=this.sc*(1+0.05*Math.sin(W*0.8)),N=this.th+Math.sin(W*0.35)*0.06;this.thE=N;let G=Q*(0.65+1.4*q+this.di);this.cx=Math.cos(N)*G,this.cy=Math.sin(N)*G,this.A=Q*q*(1.45+0.36*U)*this.el,this.B=Q*q*(1+0.2*U)/Math.sqrt(this.el);let F=this.ph+Math.sin(W*0.31)*0.12;this.c=Math.cos(F),this.s=Math.sin(F),this.tilt=Z*(0.7*Math.sin(W*0.9+1.3)+0.25*Math.sin(W*0.37+4.1));let M=lO,B=this.a0;this.a0=0;let O=1e9,E=0;for(let T=0;T<M;T++){let w=this.loopAt(T/M),S=Math.hypot(w[0],w[1]);if(S<O)O=S,E=T}let C=E/M*qJ;this.a0=B+(((C-B+Math.PI)%qJ+qJ)%qJ-Math.PI)*(1-Math.exp(-8*J));let P=-1,k=-1,z=0;for(let T=0;T<=M;T++){let w=this.loopAt(T/M),S=Math.hypot(w[0],w[1])-Q*0.985;if(T>0){if(z<=0&&S>0){let n=-z/(S-z);P=(T-1+n)/M}if(z>0&&S<=0){let n=z/(z-S);k=(T-1+n)/M}}z=S}if(P<0||k<0||k<=P)P=0,k=1;let _=1-Math.exp(-10*J);this.sA+=(Math.max(0,P-1.5/M)-this.sA)*_,this.sB+=(Math.min(1,k+1.5/M)-this.sB)*_;let A=this.loopAt(this.sA);this.fax=A[0],this.fay=A[1];let D=Math.hypot(A[0],A[1])||1;this.nax=A[0]/D,this.nay=A[1]/D,A=this.loopAt(this.sB),this.fbx=A[0],this.fby=A[1],D=Math.hypot(A[0],A[1])||1,this.nbx=A[0]/D,this.nby=A[1]/D,this.acc=Math.min(8,this.acc+J*20*U*this.dn*(0.5+0.5*this.sc)*Z);let V=this.particles;while(this.acc>=1&&this.count<a5){this.acc-=1;let T=o5[Math.floor(this.rand()*o5.length)],w=this.count++*Q6;V[w+m6]=this.rnd(0,0.04),V[w+r5]=this.rnd(0.09,0.24),V[w+yK]=f0(T+(this.rand()+this.rand()+this.rand()-1.5)*0.22,-1.1,1.1),V[w+bK]=this.rnd(0.25,1),V[w+fK]=this.rnd(0,qJ),V[w+hK]=this.rnd(0.8,2.4),V[w+xK]=this.rnd(-0.12,0.12),V[w+gK]=this.rand()<0.12?1:0}this.sacc=Math.min(3,this.sacc+J*1.2*U*this.dn*(0.5+0.5*this.sc)*Z);while(this.sacc>=1&&$.sparkRoom){this.sacc-=1;let T=this.rnd(0.05,0.95),w=this.loopAt(IJ(this.sA,this.sB,T)),S=this.rnd(20,90);$.onSpark(w[0],w[1],w[2]*S+this.rnd(-20,20),w[3]*S+this.rnd(-20,20),this.rnd(0.6,1.5),this.rnd(0.8,2),T)}for(let T=this.count-1;T>=0;T--){let w=T*Q6;if(V[w+m6]+=V[w+r5]*K*(1.55-V[w+m6]*0.85)*(0.55+U*0.9)*Z,V[w+m6]>=1){let S=--this.count*Q6;if(S!==w)for(let n=0;n<Q6;n++)V[w+n]=V[S+n]}}}}var mK=16,e5=520,dO=5,cO=0.93,nO=`
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
`,sO=`
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
`;function JU(){let J,$,Q,Z,K,W,Y,X,U,H,q,N=1,G=0,F=1,M=0,B=0,O=0,E=0,C=0,P=0,k=0,z=(i,h)=>{let t=N*i+G*h;C=B+i*F+N*t*(1-F),P=O+h*F+G*t*(1-F),k=E+(N*h-G*i)*M},_=0,A=(i,h,t,v,g,p,O0,L0,g0,M0,d,Y0,X0=0,Z0=0,k0=0)=>{if(_>=e5)return;let Q0=_++*mK;q[Q0]=i,q[Q0+1]=h,q[Q0+2]=t,q[Q0+3]=v,q[Q0+4]=g,q[Q0+5]=p,q[Q0+6]=O0,q[Q0+7]=L0,q[Q0+8]=g0,q[Q0+9]=M0,q[Q0+10]=d,q[Q0+11]=Y0,q[Q0+12]=X0,q[Q0+13]=Z0,q[Q0+14]=k0},D=(i,h,t,v,g,p)=>{if(g<=0.004||t<=0.5)return;if(z(i,h),p)A(C,P,k,0,C,P,k,t,-1,0,0,f0(g),p[0]/255,p[1]/255,p[2]/255);else A(C,P,k,0,C,P,k,t,v,0,0,f0(g))},V=(i,h,t,v,g,p,O0,L0)=>{if(L0<=0.004)return;z(i,h);let g0=C,M0=P,d=k;z(t,v),A(g0,M0,d,g,C,P,k,0,p,O0,f0(L0),0)},T={R:B9,motion:1,active:0,spawn:0,feed:0,sparkRoom:!0,onSpark:()=>{}},w={x:0,y:0,z:0},S={x:0,y:0,z:0},n=new Float64Array(6),y=(i,h,t)=>{let v=J;N=Math.cos(v.thE),G=Math.sin(v.thE),F=Math.cos(v.tilt),M=Math.sin(v.tilt),B=i,O=h,E=t};return{get sim(){return J},name:"flare",renderOrder:YJ.flare,init(i){H=i.scene,J=new pK(i.rng),q=new Float32Array(e5*mK);let h=new Uint8Array(260);for(let v=0;v<65;v++)h[v*4]=Math.round(A7[v][0]),h[v*4+1]=Math.round(A7[v][1]),h[v*4+2]=Math.round(A7[v][2]),h[v*4+3]=255;U=new F7(h,65,1,y9,C9),U.minFilter=u9,U.magFilter=u9,U.generateMipmaps=!1,U.needsUpdate=!0;let t=new H9(2,2);W=new eJ,W.setIndex(t.getIndex()),W.setAttribute("position",t.getAttribute("position")),t.dispose(),X=new A8(q,mK,1),X.setUsage(U9),W.setAttribute("iA",new M9(X,4,0)),W.setAttribute("iB",new M9(X,4,4)),W.setAttribute("iC",new M9(X,4,8)),W.setAttribute("iD",new M9(X,4,12)),W.instanceCount=0,Y=new ZJ({vertexShader:nO,fragmentShader:sO,uniforms:{uDpr:i.uniforms.dpr,uRes:{value:i.uniforms.resolution.value},uLut:{value:U}},blending:PJ,transparent:!0,depthTest:!0,depthWrite:!1,toneMapped:!1}),$=new GJ(W,Y),$.frustumCulled=!1,$.renderOrder=dO,$.name="flare",$.visible=!1,H.add($),Z=new G8(1,28,18),K=new P8({colorWrite:!1,depthWrite:!0,depthTest:!0}),Q=new GJ(Z,K),Q.frustumCulled=!1,Q.visible=!1,Q.name="flare-occluder",H.add(Q),T.onSpark=(v,g,p,O0,L0,g0,M0)=>{z(v,g),w.x=C,w.y=P,w.z=k;let d=N*p+G*O0;S.x=p*F+N*d*(1-F),S.y=O0*F+G*d*(1-F),S.z=(N*O0-G*p)*M,i.fx.spark(w,S,L0,g0,J6(t5(M0),0.3))}},update(i,h){let t=J,v=h.world,g=0;for(let p of v.agents.values())if(p.power>0.3)g++;T.R=v.orb.r,T.motion=h.uniforms.motion.value,T.active=g,T.spawn=v.orb.spawn.x,T.feed=v.orb.feed,T.sparkRoom=h.fx.sparks.length<700,y(v.orb.x,v.orb.y,v.orb.z),t.step(i,T)},beforeRender(i){let h=J;if(!h||!$||!W||!X||!Q)return;let t=i.world,v=h.kk;if(h.count===0&&v<0.02){$.visible=!1,Q.visible=!1;return}$.visible=!0,Q.visible=!0,Q.position.set(t.orb.x,t.orb.y,t.orb.z),Q.scale.setScalar(t.orb.r*cO);let g=t.orb.r,p=h.ft;y(t.orb.x,t.orb.y,t.orb.z),_=0;for(let Q0=0;Q0<14;Q0++){let _0=(Q0+0.5)/14,z0=h.loopAt(IJ(h.sA,h.sB,_0)),B0=Math.sin(Math.PI*_0),p0=g*0.28+Math.sin(p*0.7+Q0*1.9)*g*0.22;D(z0[0]+z0[2]*p0,z0[1]+z0[3]*p0,g*h.sc*(0.7+0.45*B0),_0*0.9+0.05,(0.14+0.14*B0)*v)}let O0=48,L0=8,g0=O0/L0;for(let Q0=0;Q0<3;Q0++){let _0=0.35+0.25*Q0,z0=Q0*2.1;for(let B0=0;B0<L0;B0++){let p0=(B0+0.5)/L0,JJ=(0.12+0.3*(0.5+0.5*Math.sin(p*1.2+p0*11+Q0*2)))*v*Math.sin(Math.PI*p0);if(JJ<=0.004)continue;let c0=h.strandAt(B0*g0/O0,0,_0,z0,v,p),S0=c0[0],r=c0[1];for(let V0=1;V0<=g0;V0++)c0=h.strandAt((B0*g0+V0)/O0,0,_0,z0,v,p),V(S0,r,c0[0],c0[1],1.1,p0,0.55,JJ),S0=c0[0],r=c0[1]}}let M0=f0(v*1.9*(0.55+0.45*h.dn)),d=8,Y0=0.016*(0.6+v),X0=[0.22,0.45,0.8],Z0=0,k0=h.particles;for(let Q0=0;Q0<h.count;Q0++){let _0=Q0*Q6,z0=k0[_0+m6],B0=k0[_0+yK],p0=k0[_0+bK],w0=k0[_0+fK],JJ=1-Math.min(1,Math.abs(B0))*0.5,c0=Math.min(1,z0*9)*Math.min(1,(1-z0)*6)*(0.3+0.55*JJ)*M0*(0.75+0.25*Math.sin(p*2.5+w0*5));if(c0<0.08)continue;let S0=k0[_0+xK],r=Math.min(d-1,Math.max(0,Math.floor(f0(z0+S0)*d))),V0=c0<0.3?0:c0<0.6?1:2,j=h.strandAt(z0,B0,p0,w0,v,p);n[0]=j[0],n[1]=j[1],j=h.strandAt(Math.max(0,z0-Y0),B0,p0,w0,v,p),n[2]=j[0],n[3]=j[1],j=h.strandAt(Math.max(0,z0-Y0*2.4),B0,p0,w0,v,p),n[4]=j[0],n[5]=j[1];let r0=(r+0.5)/d;if(V(n[0],n[1],n[2],n[3],1.2,r0,0.3,X0[V0]*0.45),V(n[2],n[3],n[4],n[5],1.2,r0,0.3,X0[V0]*0.45),V(n[0],n[1],n[2],n[3],2.1,r0,0.44000000000000006,X0[V0]),k0[_0+gK]>0.5&&Z0<14)Z0++,D(n[0],n[1],k0[_0+hK]*6,f0(z0+S0),c0*0.6)}for(let Q0=0;Q0<2;Q0++){let _0=Q0===0?h.fax:h.fbx,z0=Q0===0?h.fay:h.fby,B0=Q0===0?h.nax:h.nbx,p0=Q0===0?h.nay:h.nby,w0=Q0===0?0:2.3,JJ=0.75+0.25*Math.sin(p*2+w0)+t.orb.feed*0.3;D(_0,z0,g*0.85*h.sc*(0.8+0.4*v),0,0.24*v*JJ,[255,170,255]),D(_0,z0,g*0.36,0,0.285*v*JJ,[255,245,255]);let c0=Math.atan2(p0,B0);for(let S0=0;S0<8;S0++){let r=Math.sin(S0*91.7+w0)*0.5+0.5,V0=c0+(S0/7-0.5)*1.6+Math.sin(p*1.2+S0*1.3+w0)*0.1,j=g*(0.1+0.28*r)*(0.6+0.4*Math.sin(p*2+S0*2.1+w0)),r0=Math.cos(V0),e0=Math.sin(V0);V(_0+r0*4,z0+e0*4,_0+r0*j,z0+e0*j,0.7+r*1.1,0.1+r*0.5,0.5,0.084*v*JJ)}}X.needsUpdate=!0,W.instanceCount=_},onContextRestored(){if(U)U.needsUpdate=!0},dispose(){if($)H?.remove($);if(Q)H?.remove(Q);W?.dispose(),Y?.dispose(),Z?.dispose(),K?.dispose(),U?.dispose(),$=void 0,Q=void 0,W=void 0,Y=void 0,Z=void 0,K=void 0,U=void 0,X=void 0,J=void 0}}}var fJ=B9;var iO=(J)=>0.55/Math.pow(1+J*0.35,1.5),oO=(J,$,Q,Z)=>J*(1+$*0.012+Q*0.02+Z*0.03);function $U(J,$,Q,Z,K){return aO(J,Math.cos($)*Q,Math.sin($)*Q,Z,K)}function aO(J,$,Q,Z,K){let W=Math.cos(K),Y=Math.sin(K),X=Math.cos(Z),U=(W*$+Y*Q)*(1-X);return J.x=$*X+W*U,J.y=(Y*$-W*Q)*Math.sin(Z),J.z=Q*X+Y*U,J}var KU=(J,$=1,Q=1)=>$*(1-Math.exp(-Q*J/$)),rO=0.62,tO=(J,$)=>KU(0.38+J*0.12+$*0.2,rO),eO=0.55,JE=(J,$)=>KU(0.36+J*0.12+$*0.18,eO),$E=(J)=>{if(!(J>0))return 1;let $=Math.min(1,Math.max(0,(J-0.25)/0.75));return 0.7+0.3*$*$*(3-2*$)},QE=0.35,ZE=0.05,QU=[[170,80,255],[60,120,255],[255,150,60],[60,255,140]],KE=[0.1,-0.16,0.22,-0.08],WE=[0,1.1,2.2,3.3],YE=[0.12,0.26,-0.18,0.34],XE=[0.5,1.9,3.1,4.4],UE=1.025,o$=90,HE=3,ZU=`
varying vec2 vP;
void main() {
  vP = position.xy;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,GE=`
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
`,uK=`
varying vec3 vN;
varying vec3 vO;
void main() {
  vN = normalize(normalMatrix * normal);
  vO = position; // unit sphere, object space: rotates with the mesh (the surface yaw)
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,qE=`
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
`,NE=`
precision highp float;
varying vec3 vN;
varying vec3 vO;
uniform float uTime;
uniform float uBeat;
uniform float uTier;
${qE}
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
  // particle network: calmer at the centre, brighter toward the limb
  // (the governor's low tier skips it: ~54 cell lookups per fragment)
  if (uTier > 0.5) {
    vec3 nw = network(normalize(vO), uTime);
    float k = mix(0.35, 1.0, smoothstep(0.25, 0.95, rr)) * (1.0 + uBeat * 0.35);
    col += (nw.x * vec3(0.55, 0.8, 1.0) * 0.6 + nw.y * vec3(0.22, 0.42, 1.0) * 0.4) * k;
  }
  col = 1.0 - exp(-col * 1.15); // soft clip: the body stays deep blue, never white
  gl_FragColor = vec4(col, a);
}
`,FE=`
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
`,OE=`
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
  float a = stroke(d, ${fJ.toFixed(1)}, ${(26*$9).toFixed(2)}) * (0.14 + uBeat * 0.08)
          + stroke(d, ${fJ.toFixed(1)}, ${(13*$9).toFixed(2)}) * 0.34
          + stroke(d, ${fJ.toFixed(1)}, ${(5*$9).toFixed(2)})
          + stroke(d, ${(fJ-15*$9).toFixed(2)}, ${(1.6*$9).toFixed(2)}) * 0.55;
  a = 1.0 - exp(-1.4 * a); // stacked strokes soft-clip to a coloured rim instead of adding up to white
  gl_FragColor = vec4(c * a, 1.0);
}
`,EE=`
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
  float rr = ${fJ.toFixed(1)} + ${(17*$9).toFixed(2)} + wave * ${(3*$9).toFixed(2)};
  vec4 mv = modelViewMatrix * vec4(cos(an) * rr, -sin(an) * rr, 0.0, 1.0);
  vA = 0.1 + wave * 0.55;
  float worldDiam = ${(2*$9).toFixed(2)} * (1.1 + wave * 0.9) * uScale;
  float px = worldDiam * uRes.y * 0.5 * projectionMatrix[1][1] / max(1.0, -mv.z) * uDpr;
  gl_PointSize = max(px, 1.5);
  vA *= min(px / 1.5, 1.0);
  gl_Position = projectionMatrix * mv;
}
`,ME=`
precision highp float;
varying float vA;
void main() {
  float soft = 1.0 - smoothstep(0.3, 0.5, length(gl_PointCoord - 0.5));
  gl_FragColor = vec4(vec3(159.0, 196.0, 255.0) / 255.0 * vA * soft, 1.0);
}
`,DE=uK,VE=`
precision highp float;
varying vec3 vN;
uniform vec3 uColor;
uniform float uAlpha;
void main() {
  float f = pow(1.0 - clamp(abs(normalize(vN).z), 0.0, 1.0), 2.0);
  gl_FragColor = vec4(uColor * (uAlpha * (0.06 + 0.94 * f)), 1.0);
}
`,w7={blending:PJ,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1};function WU(){let J,$=[],Q=[],Z=[],K=[],W,Y,X,U,H,q,N=0,G,F,M,B=[],O=[],E=[],C=-1,P=0,k=0,z=!1,_=!1,A=()=>{},D=0,V=new x,T=new x,w=new x,S=new x,n=new x,y=new x(0,0,0),c=new x,i={x:0,y:0,z:0,visible:!1},h={x:0,y:0,z:0,visible:!1},t={x:0,y:0,z:0},v=0,g=0,p=(M0,d,Y0)=>{let X0=new ZJ({vertexShader:ZU,fragmentShader:GE,uniforms:{uColor:{value:new x(M0[0]/255,M0[1]/255,M0[2]/255)},uAlpha:{value:0},uDotR:{value:d},uBody:{value:new x},uInner:{value:1}},...w7}),Z0=new GJ(O0,X0);return Z0.frustumCulled=!1,Z0.renderOrder=Y0,Z.push(X0),K.push(Z0),Z0},O0,L0=(M0,d,Y0,X0)=>{let Z0=E.find((k0)=>!k0.on);if(!Z0)Z0=E.reduce((k0,Q0)=>k0.life/k0.max>Q0.life/Q0.max?k0:Q0);Z0.on=!0,Z0.life=0,Z0.max=Y0,Z0.r0=M0,Z0.r1=d,Z0.mat.uniforms.uColor.value.set(X0[0]/255,X0[1]/255,X0[2]/255),Z0.mesh.visible=!0},g0={name:"orb",renderOrder:YJ.orb,init(M0){J=M0;let{scene:d,world:Y0,fx:X0,rig:Z0}=M0;O0=new H9(2,2),Q.push(O0);let k0=new G8(1,48,32);Q.push(k0);let Q0=YJ.orb;M=p([70,110,255],0,Q0-20);for(let R0=0;R0<4;R0++)B.push(p(QU[R0],0,Q0-10));for(let R0=0;R0<4;R0++)O.push(p(QU[R0],0.16,Q0-10));U=new ZJ({vertexShader:uK,fragmentShader:NE,uniforms:{uTime:M0.uniforms.time,uBeat:{value:0},uTier:M0.uniforms.tier},blending:a9,transparent:!0,depthTest:!0,depthWrite:!0,toneMapped:!1}),Z.push(U),X=new GJ(k0,U),X.renderOrder=Q0,X.frustumCulled=!1,K.push(X),q=new ZJ({vertexShader:uK,fragmentShader:FE,uniforms:{uBeat:{value:0}},...w7,depthTest:!0}),Z.push(q),H=new GJ(k0,q),H.renderOrder=Q0+0.5,H.frustumCulled=!1,K.push(H),F=new ZJ({vertexShader:ZU,fragmentShader:OE,uniforms:{uQ:{value:fJ+24*$9},uRot:{value:0},uBeat:{value:0}},...w7}),Z.push(F),G=new GJ(O0,F),G.renderOrder=Q0+1,G.frustumCulled=!1,K.push(G);let _0=new Float32Array(o$);for(let R0=0;R0<o$;R0++)_0[R0]=R0/o$*qJ;let z0=new hJ;z0.setAttribute("position",new kJ(new Float32Array(o$*3),3)),z0.setAttribute("aBase",new kJ(_0,1)),z0.boundingSphere=new _9(new x,1e5),Q.push(z0),Y=new ZJ({vertexShader:EE,fragmentShader:ME,uniforms:{uTime:M0.uniforms.time,uMotion:M0.uniforms.motion,uDpr:M0.uniforms.dpr,uRes:M0.uniforms.resolution,uScale:{value:1}},...w7}),Z.push(Y),W=new A6(z0,Y),W.frustumCulled=!1,W.renderOrder=Q0+2;for(let R0=0;R0<HE;R0++){let R=new ZJ({vertexShader:DE,fragmentShader:VE,uniforms:{uColor:{value:new x(0.43,0.59,1)},uAlpha:{value:0}},...w7});Z.push(R);let L=new GJ(k0,R);L.renderOrder=Q0+3,L.frustumCulled=!1,L.visible=!1,K.push(L),E.push({mesh:L,mat:R,life:0,max:1,r0:fJ,r1:fJ,on:!1})}for(let R0 of K)R0.visible=!1,d.add(R0);d.add(W),W.visible=!1,$.push(Y0.on("orbClick",()=>g0.pulse())),$.push(Y0.on("reset",()=>{for(let R0 of E)R0.on=!1,R0.mesh.visible=!1}));let B0=M0.renderer.domElement,p0=(R0,R)=>{if(v<0.05)return!1;if(n.set(Y0.orb.x,Y0.orb.y,Y0.orb.z),S.set(1,0,0).applyQuaternion(Z0.camera.quaternion),Z0.project(n,i),Z0.project(V.copy(n).addScaledVector(S,fJ*v),h),!i.visible)return!1;return Math.hypot(R0-i.x,R-i.y)<Math.hypot(h.x-i.x,h.y-i.y)},w0=(R0)=>{let R=B0.getBoundingClientRect();return p0(R0.clientX-R.left,R0.clientY-R.top)},JJ=(R0,R)=>!!M0.engine.getLayer("nodes")?.pick?.(R0,R),c0=(R0)=>{if(C>=0||R0.pointerType==="mouse"&&R0.button!==0)return;if(!w0(R0)||JJ(R0.clientX,R0.clientY))return;C=R0.pointerId,P=R0.clientX,k=R0.clientY,z=!1,D=1},S0=(R0)=>{if(C>=0){if(R0.pointerId===C&&Math.hypot(R0.clientX-P,R0.clientY-k)>5)z=!0;return}},r=(R0)=>{if(R0.pointerId!==C)return;let R=R0.type==="pointerup"&&!z&&w0(R0);if(C=-1,D=0,R)Y0.emit("orbClick",void 0)},V0=()=>{j(!1)};A=()=>{let R0=Y0,R=R0.hover;if(C>=0)return j(R==="orb");let L=!Z0.pointerActive||Z0.dragging,f=!1;if(!L&&(R===null||R==="orb")&&v>=0.05){let e=(Z0.pointerNDC.x*0.5+0.5)*M0.engine.width,N0=(-Z0.pointerNDC.y*0.5+0.5)*M0.engine.height,l=B0.getBoundingClientRect();f=p0(e,N0)&&!JJ(l.left+e,l.top+N0)}if(f&&R===null)R0.setHover("orb");else if(!f&&R==="orb")R0.setHover(null);j(f)};let j=(R0)=>{if(R0===_)return;_=R0,B0.style.cursor=R0?"pointer":""};B0.addEventListener("pointerdown",c0),B0.addEventListener("pointermove",S0),B0.addEventListener("pointerup",r),B0.addEventListener("pointercancel",r),B0.addEventListener("pointerleave",V0),$.push(()=>{if(B0.removeEventListener("pointerdown",c0),B0.removeEventListener("pointermove",S0),B0.removeEventListener("pointerup",r),B0.removeEventListener("pointercancel",r),B0.removeEventListener("pointerleave",V0),_)B0.style.cursor=""});let r0=Z0.onTap,e0=(R0)=>{if(w0(R0))return;r0?.(R0)};Z0.onTap=e0,$.push(()=>{if(Z0.onTap===e0)Z0.onTap=r0})},pulse(M0){let d=J;if(!d)return;let Y0=d.world.orb;t.x=Y0.x,t.y=Y0.y,t.z=Y0.z;let X0=[140,170,255];d.fx.ripple({pos:t,r0:fJ,r1:fJ+260*$9,life:1.6,color:X0,width:4}),L0(fJ,fJ+260*$9,1.6,X0),Y0.flash=1,d.fx.shockwave(t,70),d.world.emit("pulse",{id:M0})},update(M0,d){let{world:Y0,fx:X0,rig:Z0,uniforms:k0}=d,Q0=Y0.orb,_0=Y0.time;Q0.spawn.target=_0>0.05?1:0,Q0.spawn.step(M0);let z0=0,B0=0;if(Z0.pointerActive){let w0=Z0.pointerWorldOnPlane(y,void 0,c);if(w0){let JJ=Math.hypot(w0.x,w0.y)+1,c0=Math.min(12,JJ*0.02);z0=w0.x/JJ*c0,B0=w0.y/JJ*c0}}Q0.px.target=z0,Q0.py.target=B0,Q0.px.step(M0),Q0.py.step(M0),Q0.x=Q0.px.x,Q0.y=Q0.py.x,Q0.feed=a0(Q0.feed,0,2.2,M0),Q0.flash=a0(Q0.flash,0,3,M0),Q0.press=a0(Q0.press,D,12,M0);let p0=0;for(let w0 of Y0.agents.values())if(w0.power>0.3)p0++;Q0.activeCount=p0,Q0.shimmerT+=M0,N=(N+ZE*k0.motion.value*M0)%qJ,Q0.model=Y0.model;for(let w0 of E){if(!w0.on)continue;if(w0.life+=M0,w0.life>=w0.max)w0.on=!1,w0.mesh.visible=!1}},beforeRender(M0){let{world:d,rig:Y0,uniforms:X0}=M0,Z0=d.orb,k0=X0.time.value,Q0=X0.motion.value,_0=Z0.spawn.x;g=_0;let z0=oO(_0,Z0.beat,Z0.feed,Z0.press);v=z0;let B0=_0>=0.01;A();let p0=Z0.beat,w0=Y0.camera;for(let S0 of K)S0.visible=B0;for(let S0 of E)S0.mesh.visible=B0&&S0.on;if(W)W.visible=B0;if(!B0){for(let S0 of E)S0.mesh.visible=!1;return}n.set(Z0.x,Z0.y,Z0.z),T.copy(w0.position).sub(n).normalize(),w.set(0,1,0).applyQuaternion(w0.quaternion),Z0.labelAnchor.x=Z0.x,Z0.labelAnchor.y=Z0.y-(fJ*0.2+44*$9)*z0,Z0.labelAnchor.z=Z0.z;let JJ=$E(Y0.radius/Y0.homeRadius);M.position.copy(n),M.quaternion.copy(w0.quaternion),M.scale.setScalar(fJ*2.3*z0),M.material.uniforms.uAlpha.value=JE(p0,Z0.feed)*JJ;let c0=tO(p0,Z0.feed)*JJ;S.set(1,0,0).applyQuaternion(w0.quaternion);for(let S0=0;S0<4;S0++){let r=k0*0.22*Q0+S0*qJ/4;$U(t,r,fJ*0.95*z0,KE[S0],WE[S0]);let V0=B[S0];V0.position.set(Z0.x+t.x,Z0.y+t.y,Z0.z+t.z),V0.quaternion.copy(w0.quaternion),V0.scale.setScalar(fJ*1.05*z0),V0.renderOrder=t.x*T.x+t.y*T.y+t.z*T.z>0?YJ.orb+10:YJ.orb-10;let j=V0.material.uniforms;j.uAlpha.value=c0;let r0=fJ*1.05*z0;j.uBody.value.set(-(t.x*S.x+t.y*S.y+t.z*S.z)/r0,-(t.x*w.x+t.y*w.y+t.z*w.z)/r0,fJ*z0/r0),j.uInner.value=QE}for(let S0=0;S0<4;S0++){let r=k0*iO(S0)*(S0%2?-1:1)*Q0+S0*1.7;$U(t,r,(fJ+(40+S0*14)*$9)*z0,YE[S0],XE[S0]);let V0=O[S0];V0.position.set(Z0.x+t.x,Z0.y+t.y,Z0.z+t.z),V0.quaternion.copy(w0.quaternion),V0.scale.setScalar(10*$9*z0),V0.renderOrder=t.x*T.x+t.y*T.y+t.z*T.z>0?YJ.orb+11:YJ.orb-9,V0.material.uniforms.uAlpha.value=0.9}if(X.position.copy(n),X.scale.setScalar(fJ*z0),X.rotation.y=N,U.uniforms.uBeat.value=p0,H.position.copy(n),H.scale.setScalar(fJ*UE*z0),H.rotation.y=N,q.uniforms.uBeat.value=p0,G.position.copy(n),G.quaternion.copy(w0.quaternion),G.scale.setScalar((fJ+24*$9)*z0),F.uniforms.uRot.value=k0*0.25*Q0,F.uniforms.uBeat.value=p0,W&&Y)W.position.copy(n),W.quaternion.copy(w0.quaternion),W.scale.setScalar(z0),Y.uniforms.uScale.value=z0;for(let S0 of E){if(!S0.on)continue;let r=S0.life/S0.max;S0.mesh.position.set(Z0.x,Z0.y,Z0.z),S0.mesh.scale.setScalar(Math.max(1,IJ(S0.r0,S0.r1,N8(r)))),S0.mat.uniforms.uAlpha.value=(1-r)*0.4}},dispose(){for(let d of $)d();$.length=0;let M0=J?.scene;for(let d of K)M0?.remove(d);if(W)M0?.remove(W);for(let d of Q)d.dispose();for(let d of Z)d.dispose();K.length=0,Q.length=0,Z.length=0,B.length=0,O.length=0,E.length=0,W=void 0,Y=void 0,J=void 0}};return g0}var LE=(J,$,Q)=>J*IJ(0.68,1.1,f0($))*IJ(1,0.52,Q),BE=(J,$)=>J?1.12:$?1.07:1;function HU(J){J.dot=[J.dot[0],J.dot[1],J.dot[2]],J.col=[J.col[0],J.col[1],J.col[2]],J.axisQ??=[0,0,0,1],J.ringN??=[0,1,0],J.spinQ??=[0,0,0,1]}function lK(J,$,Q,Z){let K=q9[J.spec.status];if(!J.spawned&&Q>=J.spawnAt)J.spawned=!0,J.spawn.target=1;J.spawn.step($),J.hover.target=BE(J.dragging,Z),J.hover.step($),J.labelShift.target=Z?5:0,J.labelShift.step($),J.statusT+=$,J.power=a0(J.power,K.power,2.6,$),J.rest=a0(J.rest,T8.has(J.spec.status)&&!J.charging?1:0,3,$),J.novaS=a0(J.novaS,1,4,$),J.novaL=a0(J.novaL,0,1.6,$),J.fade=a0(J.fade,e8.has(J.spec.status)?0:1,1.5,$),J.r=LE(J.baseR,J.power,J.rest),J.flow=a0(J.flow,K.flow,2.6,$),J.spin=a0(J.spin,K.spin,2.6,$),J.detail=a0(J.detail,K.power>0.15?1:0,4,$);let W=1-Math.exp(-5*$),Y=1-f0(J.power*1.1);for(let U=0;U<3;U++){let H=J.accent[U]+(x6[U]-J.accent[U])*Y;J.col[U]+=(H-J.col[U])*W}let X=1-Math.exp(-6*$);for(let U=0;U<3;U++)J.dot[U]+=(K.dot[U]-J.dot[U])*X;J.hit=a0(J.hit,0,2.6,$),J.flash=a0(J.flash,0,2.2,$),J.tokFlash=a0(J.tokFlash,0,3.2,$),J.timeFlash=a0(J.timeFlash,0,5,$),J.grow=T8.has(J.spec.status)&&!J.charging&&J.launchGrow>=1?a0(J.grow,0,3,$):Math.max(f0((Q-(J.spawnAt+0.2))/1.3),J.launchGrow),J.introCount=f0((Q-J.spawnAt)/2)}function GU(J,$,Q){let Z=q9[J.spec.status];if(Z.tokenRate>0)J.tokens+=Z.tokenRate*$*(0.6+Q()*0.8),J.seconds+=$}var qU=()=>({active:!1,ox:0,oy:0,oz:0,dx:0,dy:0,dz:1,nx:0,ny:0,nz:1});function t$(J,$,Q,Z,K){let W=J.dx*J.nx+J.dy*J.ny+J.dz*J.nz;if(Math.abs(W)<0.000001)return!1;let Y=(($-J.ox)*J.nx+(Q-J.oy)*J.ny+(Z-J.oz)*J.nz)/W;if(Y<0)return!1;return K.x=J.ox+J.dx*Y,K.y=J.oy+J.dy*Y,K.z=J.oz+J.dz*Y,!0}var a$={x:0,y:0,z:0};function kE(J,$,Q,Z){let K=7*Q,W=1+0.08*J.rest,Y=1-0.6*J.rest;Z[0]=J.hx*W+Math.sin($*0.5*J.fs+J.phase)*K*Y,Z[1]=J.hy*W+Math.cos($*0.43*J.fs+J.phase*1.7)*K*1.3*Y,Z[2]=J.hz*W+Math.sin($*0.37*J.fs+J.phase*2.3)*K*1.1*Y}var r$=[0,0,0];function NU(J,$,Q,Z,K){kE(J,Z,K.motion,r$);let W,Y,X;if(J.dragging&&K.drag)W=280*(K.drag.x-J.grabX-J.x)-26*J.vx,Y=280*(K.drag.y-J.grabY-J.y)-26*J.vy,X=280*(K.drag.z-J.grabZ-J.z)-26*J.vz;else{W=55*(r$[0]-J.x)-7*J.vx,Y=55*(r$[1]-J.y)-7*J.vy,X=55*(r$[2]-J.z)-7*J.vz;let U=K.ray;if(U&&U.active&&t$(U,J.x,J.y,J.z,a$)){let H=a$.x-J.x,q=a$.y-J.y,N=a$.z-J.z,G=Math.hypot(H,q,N)+1,F=(650*J.power+120)/(1+G/190*(G/190));W+=H/G*F,Y+=q/G*F,X+=N/G*F}for(let H=0;H<$.length;H++){let q=$[H];if(q===J)continue;let N=J.x-q.x,G=J.y-q.y,F=J.z-q.z,M=Math.hypot(N,G,F)+0.01,B=J.r+q.r+60;if(M<B){let O=(B-M)*28;W+=N/M*O,Y+=G/M*O,X+=F/M*O}}}J.vx+=W*Q,J.vy+=Y*Q,J.vz+=X*Q,J.x+=J.vx*Q,J.y+=J.vy*Q,J.z+=J.vz*Q,J.lean[0]=a0(J.lean[0],-J.vx*0.05,9,Q),J.lean[1]=a0(J.lean[1],-J.vy*0.05,9,Q)}var FU=()=>({run:0,think:0,wait:0,idle:0,check:0,ang:[0,0,0],off:[0,qJ*1/3,qJ*2/3]}),T7=8;function dK(J,$,Q){let Z=$.spec.status,K=f0($.power)>0.2;J.run=a0(J.run,K&&Z==="running"?1:0,T7,Q),J.think=a0(J.think,K&&Z==="thinking"?1:0,T7,Q),J.wait=a0(J.wait,K&&Z==="waiting"?1:0,T7,Q),J.idle=a0(J.idle,K&&Z==="idle"?1:0,T7,Q),J.check=a0(J.check,Z==="completed"?1:0,T7,Q);let W=OU(J),Y=IJ(0.9,2.6,W),X=W>0.5?2:3;for(let U=0;U<3;U++)J.ang[U]+=Q*$.spin*Y*(U%2?-1:1),J.off[U]=a0(J.off[U],U*qJ/X,6,Q)}var OU=(J)=>J.think/(J.run+J.think+0.0001),EU=(J)=>IJ(0.62,1.1,OU(J));var MU={running:0.6,thinking:0.9,waiting:0.15,idle:0.08,completed:0,stopped:0,offline:0},YU=2,XU=15,IE=25;function u6(J,$){let Q=2166136261^$;for(let Z=0;Z<J.length;Z++)Q^=J.charCodeAt(Z),Q=Math.imul(Q,16777619);return Q^=Q>>>13,Q=Math.imul(Q,2246822507),Q^=Q>>>16,(Q>>>0)/4294967296}var zE=Math.PI/180;function DU(J,$){return{tilt:(XU+(IE-XU)*u6(J,1))*zE,az:qJ*u6(J,2),prec:(0.05+0.05*u6(J,3))*(u6(J,4)<0.5?-1:1),rate:MU[$],yaw:qJ*u6(J,5),wob:$==="thinking"?1:0,ph:qJ*u6(J,6)}}function cK(J,$,Q,Z,K){J.rate=a0(J.rate,MU[$],YU,Q),J.wob=a0(J.wob,$==="thinking"?1:0,YU,Q);let W=1+0.18*J.wob*Math.sin(Z*3.1+J.ph);if(J.yaw+=J.rate*W*K*Q,J.yaw>1e4)J.yaw-=qJ*1000;J.az+=J.prec*K*Q}var RE=(J,$)=>J.tilt+0.035*J.wob*Math.sin($*2.3+J.ph*1.3);function e$(J,$,Q,Z,K){let W=RE(J,$),Y=Math.sin(W),X=Y*Math.cos(J.az),U=Math.cos(W),H=Y*Math.sin(J.az);Z[0]=X,Z[1]=U,Z[2]=H;let q=Math.sin(W/2),N=Math.sin(J.az)*q,G=0,F=-Math.cos(J.az)*q,M=Math.cos(W/2);Q[0]=N,Q[1]=G,Q[2]=F,Q[3]=M;let B=Math.sin(J.yaw/2),O=Math.cos(J.yaw/2);K[0]=N*O-F*B,K[1]=M*B+G*O,K[2]=F*O+N*B,K[3]=M*O-G*B}function UU(J,$,Q,Z,K,W=0){let Y=J[0],X=J[1],U=J[2],H=J[3],q=2*(X*Z-U*Q),N=2*(U*$-Y*Z),G=2*(Y*Q-X*$);K[W]=$+H*q+(X*G-U*N),K[W+1]=Q+H*N+(U*q-Y*G),K[W+2]=Z+H*G+(Y*N-X*q)}function VU(J,$){UU(J,1,0,0,$,0),UU(J,0,0,-1,$,3)}var JQ=0.5,LU=(J)=>IJ(1,0.85,kU(f0(J/JQ))),BU=(J)=>1-kU(f0(J/JQ)),kU=(J)=>1-Math.pow(1-J,3),IU=(J)=>Math.max(J*1.18+6,26);function zU(J,$,Q,Z,K,W,Y){let X=-1,U=1e9;for(let H=0;H<J;H++){if(!K[H])continue;let q=Math.hypot(W-$[H],Y-Q[H]);if(q<Z[H]&&q<U)X=H,U=q}return X}var nK=`
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
`;var RU=`
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
`,CU=1.16,_U=`
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
`;var S7=10,l6=3,CE=32,_E=1.04,PE=0.78,AE=27,d6=AE*2,wE=()=>{try{return/[?&#]axes=1\b/.test(location.search+location.hash)}catch{return!1}},TE=`
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
`,SE=`
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
`,jE=`
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
`,vE=`
precision highp float;
varying float vSide;
varying vec4 vCol;
varying float vEnd;
void main() {
  float a = min(vCol.a, 1.0) * (1.0 - smoothstep(0.5, 1.0, abs(vSide))) * smoothstep(0.0, 1.0, vEnd);
  if (a < 0.002) discard;
  gl_FragColor = vec4(vCol.rgb * a, 1.0);
}
`,$Q=new _9(new x(0,0,0),1e6),sK=18;function PU(J){let $=new eJ;$.setAttribute("position",new kJ([-1,-1,0,1,-1,0,1,1,0,-1,1,0],3)),$.setIndex([0,1,2,0,2,3]);let Q=[4,4,4,1,4,3],Z=["aC","aP","aQ","aS","aU","aV"],K=[],W=[];for(let Y=0;Y<Q.length;Y++){let X=new Float32Array(J*Q[Y]),U=new dJ(X,Q[Y]);$.setAttribute(Z[Y],U),K.push(X),W.push(U)}return $.instanceCount=0,$.boundingSphere=$Q,{geo:$,arrays:K,attrs:W}}function yE(J,$,Q,Z){let K=(v,g)=>new ZJ({vertexShader:TE,fragmentShader:SE,uniforms:{uTime:$},blending:v?PJ:a9,transparent:!0,depthTest:g,depthWrite:!1,toneMapped:!1}),W=K(!0,!1),Y=K(!0,!0),X=PU(J),U=new GJ(X.geo,W);U.renderOrder=YJ.nodes-5,U.frustumCulled=!1,U.name="node-halos";let H=PU(J*S7),q=new GJ(H.geo,Y);q.renderOrder=YJ.rings,q.frustumCulled=!1,q.name="node-sprites";let N=new G8(1,40,26),G=new Float32Array(J*4),F=new Float32Array(J*4),M=new Float32Array(J*4),B=new Float32Array(J*4),O=[new dJ(G,4),new dJ(F,4),new dJ(M,4),new dJ(B,4)],E=()=>{let v=new eJ;return v.index=N.index,v.setAttribute("position",N.getAttribute("position")),v.setAttribute("normal",N.getAttribute("normal")),v.setAttribute("aB",O[0]),v.setAttribute("aBC",O[1]),v.setAttribute("aBE",O[2]),v.setAttribute("aBQ",O[3]),v.instanceCount=0,v.boundingSphere=$Q,v},C=E(),P=E(),k=new ZJ({vertexShader:nK,fragmentShader:RU,uniforms:{uTime:$,uOrb:Q,uScale:{value:1}},blending:a9,transparent:!0,depthTest:!0,depthWrite:!0,toneMapped:!1}),z=new GJ(C,k);z.renderOrder=YJ.nodes,z.frustumCulled=!1,z.name="node-bodies";let _=new ZJ({vertexShader:nK,fragmentShader:_U,uniforms:{uTime:$,uOrb:Q,uScale:{value:CU}},blending:PJ,side:X9,transparent:!0,depthTest:!0,depthWrite:!1,toneMapped:!1}),A=new GJ(P,_);A.renderOrder=YJ.nodes+1,A.frustumCulled=!1,A.name="node-atmospheres";let D=new eJ,V=[],T=[];for(let v=0;v<=sK;v++){let g=v/sK;if(V.push(g,-1,0,g,1,0),v<sK){let p=v*2;T.push(p,p+1,p+2,p+1,p+3,p+2)}}D.setAttribute("position",new kJ(V,3)),D.setIndex(T);let w=J*l6,S=[new Float32Array(w*4),new Float32Array(w*4),new Float32Array(w*4),new Float32Array(w*4),new Float32Array(w)],n=["aA","aB","aCc","aD","aE"],y=S.map((v,g)=>{let p=new dJ(v,g===4?1:4);return D.setAttribute(n[g],p),p});D.instanceCount=0,D.boundingSphere=$Q;let c=new ZJ({vertexShader:jE,fragmentShader:vE,blending:PJ,transparent:!0,depthTest:!0,depthWrite:!1,toneMapped:!1}),i=new GJ(D,c);i.renderOrder=YJ.rings+1,i.frustumCulled=!1,i.name="node-arcs";let h={halo:U,haloGeo:X.geo,haloA:X.arrays,body:z,atmo:A,bodyGeo:C,atmoGeo:P,bodyA:[G,F,M,B],bodyMat:k,atmoMat:_,spr:q,sprGeo:H.geo,sprA:H.arrays,arc:i,arcGeo:D,arcA:S,attrs:[...X.attrs,...H.attrs,...O,...y]},t=[W,Y,k,_,c];if(Z){let v=new Float32Array(J*d6*3),g=new Float32Array(J*d6*3),p=new hJ,O0=new kJ(v,3),L0=new kJ(g,3);p.setAttribute("position",O0),p.setAttribute("color",L0),p.boundingSphere=$Q,p.setDrawRange(0,0);let g0=new O7({vertexColors:!0,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),M0=new I$(p,g0);M0.renderOrder=YJ.fx+50,M0.frustumCulled=!1,M0.name="node-axes",h.axes=M0,h.axesGeo=p,h.axesP=v,h.axesC=g,h.axesAttrs=[O0,L0]}return{gpu:h,mats:t,sphere:N}}var O8=(J,$)=>(J+(255-J)*$)/255;function AU(){let J,$,Q=[],Z,K=CE,W=0,Y=[],X=[],U=new Map,H=[],q=[],N=0,G=new Map,F=[],M=qU(),B={motion:1,ray:M,drag:null},O={x:0,y:0,z:0},E={x:0,y:0,z:0},C=new x,P=new x,k=new x,z=new x,_=new x,A={x:0,y:0,z:0,visible:!1},D=null,V=!1,T=!1,w=-1,S=0,n=0,y=new x,c=!1,i=[],h,t,v=new Float64Array(16),g=new Float64Array(16),p=new Float64Array(16),O0=new Float64Array(16),L0=new Uint8Array(16),g0=new Uint8Array(16),M0=0,d=0,Y0=0,X0=0,Z0=!1,k0=wE(),Q0={value:new x},_0=[],z0=()=>{$?.halo.removeFromParent(),$?.body.removeFromParent(),$?.atmo.removeFromParent(),$?.spr.removeFromParent(),$?.arc.removeFromParent(),$?.axes?.removeFromParent()},B0=()=>{z0(),p0();let b=yE(K,J.uniforms.time,Q0,k0);if($=b.gpu,Q=b.mats,Z=b.sphere,J.scene.add($.halo,$.body,$.atmo,$.spr,$.arc),$.axes)J.scene.add($.axes)},p0=()=>{if(!$)return;$.haloGeo.dispose(),$.bodyGeo.dispose(),$.atmoGeo.dispose(),$.sprGeo.dispose(),$.arcGeo.dispose(),$.axesGeo?.dispose(),$.axes?.material?.dispose(),Z?.dispose();for(let b of Q)b.dispose();$=void 0,Q=[],Z=void 0},w0=()=>F.pop()??{x:0,y:0,pxu:1,r:0,depth:1,visible:!1},JJ=(b)=>{let s=U.get(b);if(s!==void 0)return s;if(s=H.pop()??N++,s>=K)K*=2,B0();if(U.set(b,s),q[s]=FU(),_0[s]=DU(b.id,b.spec.status),W=Math.max(W,s+1),!G.has(b.id))G.set(b.id,w0());return HU(b),e$(_0[s],J.world.time,b.axisQ,b.ringN,b.spinQ),s},c0=(b)=>{if(!$)return;$.haloA[1][b*4+3]=0,$.bodyA[0][b*4+3]=0,$.bodyA[2][b*4]=0;for(let s=0;s<S7;s++)$.sprA[1][(b*S7+s)*4+3]=0;for(let s=0;s<l6;s++)$.arcA[3][(b*l6+s)*4+3]=0;if($.axesP)$.axesP.fill(0,b*d6*3,(b+1)*d6*3)},S0=(b)=>{let s=U.get(b);if(s===void 0)return;U.delete(b),c0(s),H.push(s)},r=()=>{for(let b of[...U.keys()])S0(b);X.length=0;for(let b of G.values())F.push(b);G.clear()},V0=()=>{Y=J.world.list();for(let b of Y)JJ(b)},j=()=>J.engine.canvas,r0=()=>{let b=J.rig;M.active=b.pointerActive,b.rayFromNDC(b.pointerNDC.x,b.pointerNDC.y,C,P),k.setFromMatrixColumn(b.camera.matrixWorld,2),M.ox=C.x,M.oy=C.y,M.oz=C.z,M.dx=P.x,M.dy=P.y,M.dz=P.z,M.nx=k.x,M.ny=k.y,M.nz=k.z},e0=(b)=>{if(v.length>=b)return;let s=Math.max(b,v.length*2);v=new Float64Array(s),g=new Float64Array(s),p=new Float64Array(s),O0=new Float64Array(s),L0=new Uint8Array(s),g0=new Uint8Array(s)},R0=(b,s)=>{let H0=Y.length,C0=Z0&&Math.hypot(b-M0,s-d)<Y0;for(let P0=0;P0<H0;P0++)g0[P0]=L0[P0]&&!(C0&&O0[P0]>X0)?1:0;return zU(H0,v,g,p,g0,b,s)},R=(b,s)=>{let H0=j().getBoundingClientRect();return R0(b-H0.left,s-H0.top)},L=(b)=>{if(V||b.pointerType==="mouse"&&b.button!==0)return;let s=R(b.clientX,b.clientY);if(s<0)return;let H0=Y[s];if(V=!0,T=!1,w=b.pointerId,S=b.clientX,n=b.clientY,D=H0,H0.dragging=!0,r0(),M.active=!0,y.set(H0.x,H0.y,H0.z),t$(M,H0.x,H0.y,H0.z,E))H0.grabX=E.x-H0.x,H0.grabY=E.y-H0.y,H0.grabZ=E.z-H0.z;else H0.grabX=H0.grabY=H0.grabZ=0;try{j().setPointerCapture(b.pointerId)}catch{}J.world.setHover(H0.id),j().style.cursor="grabbing",c=!0},f=(b)=>{if(!V||b.pointerId!==w)return;if(!T&&Math.hypot(b.clientX-S,b.clientY-n)>5)T=!0},e=(b)=>{if(!V||b.pointerId!==w)return;let s=b.type==="pointercancel"?null:D;V=!1;try{j().releasePointerCapture(b.pointerId)}catch{}for(let H0 of Y)H0.dragging=!1;if(D=null,s&&!T&&J.world.agents.get(s.id)===s)N0(s);j().style.cursor="",c=!1},N0=(b)=>{J.world.emit("agentClick",{agent:b}),J.world.emit("pulseAgent",{agent:b,n:10}),J.fx.burst(b,[b.col[0],b.col[1],b.col[2]],22,100),J.fx.shockwave(b,55)},l=()=>{let b=J.rig,s=b.camera;s.updateMatrixWorld(),z.setFromMatrixColumn(s.matrixWorld,2).negate();let H0=s.position,C0=J.engine.height/2/Math.tan(t8*Math.PI/360),P0=Y.length;e0(P0);for(let XJ=0;XJ<P0;XJ++){let HJ=Y[XJ],t0=G.get(HJ.id),DJ=(HJ.x-H0.x)*z.x+(HJ.y-H0.y)*z.y+(HJ.z-H0.z)*z.z,VJ=DJ>1?C0/DJ:0;_.set(HJ.x,HJ.y,HJ.z),b.project(_,A);let D9=Math.max(0,HJ.spawn.x),vJ=A.visible&&DJ>1&&D9>0.3;if(v[XJ]=A.x,g[XJ]=A.y,O0[XJ]=DJ,p[XJ]=IU(HJ.r)*VJ,L0[XJ]=vJ?1:0,t0)t0.x=A.x,t0.y=A.y,t0.pxu=VJ,t0.depth=DJ,t0.r=HJ.r*D9*HJ.hover.x*HJ.novaS*VJ,t0.visible=vJ}let x0=J.world.orb;_.set(x0.x,x0.y,x0.z),b.project(_,A);let y0=(x0.x-H0.x)*z.x+(x0.y-H0.y)*z.y+(x0.z-H0.z)*z.z;Z0=A.visible&&y0>1,M0=A.x,d=A.y,X0=y0,Y0=Z0?x0.r*(C0/y0):0},G0=()=>{let{world:b,rig:s}=J;if(V)return;let H0=b.hover,C0=H0!==null&&H0!=="orb";if(!s.pointerActive||s.dragging){if(C0)b.setHover(null);if(c)j().style.cursor="",c=!1;return}let P0=J.engine.width,x0=J.engine.height,y0=(s.pointerNDC.x*0.5+0.5)*P0,XJ=(-s.pointerNDC.y*0.5+0.5)*x0,HJ=R0(y0,XJ);if(HJ>=0){if(b.setHover(Y[HJ].id),!c)j().style.cursor="pointer",c=!0}else{if(C0)b.setHover(null);if(c)j().style.cursor="",c=!1}},o=new Float32Array(6),W0=(b)=>c0(b),a=(b,s,H0,C0,P0,x0,y0,XJ,HJ,t0,DJ,VJ,D9,vJ,k9)=>{let EJ=$.sprA,LJ=b*4;EJ[0][LJ]=s,EJ[0][LJ+1]=H0,EJ[0][LJ+2]=C0,EJ[0][LJ+3]=P0,EJ[1][LJ]=x0,EJ[1][LJ+1]=y0,EJ[1][LJ+2]=XJ,EJ[1][LJ+3]=HJ<0?0:HJ>1?1:HJ,EJ[2][LJ]=t0,EJ[2][LJ+1]=DJ,EJ[2][LJ+2]=VJ,EJ[2][LJ+3]=D9,EJ[3][b]=vJ,EJ[4][LJ]=o[0],EJ[4][LJ+1]=o[1],EJ[4][LJ+2]=o[2],EJ[4][LJ+3]=k9;let yJ=b*3;EJ[5][yJ]=o[3],EJ[5][yJ+1]=o[4],EJ[5][yJ+2]=o[5]},E0=(b,s,H0,C0,P0,x0,y0)=>{let XJ=$,HJ=Math.max(0,s.spawn.x),t0=HJ*s.hover.x*s.novaS*x0;if(HJ<0.01||P0<=0.002||t0<0.01){W0(b);return}let DJ=s.r,VJ=DJ*t0,D9=VJ*PE,vJ=f0(s.power),k9=0.8+0.2*Math.sin(y0*1.7+s.phase),EJ=f0(s.hit*0.5+s.flash*0.6+(s.hover.x-1)*4+s.novaL*0.8),LJ=s.col[0]/255,yJ=s.col[1]/255,aJ=s.col[2]/255,mJ=s.x,TJ=s.y,cJ=s.z,$8=_E*D9;VU(s.axisQ,o);{let q0=XJ.haloA,I0=b*4;q0[0][I0]=mJ,q0[0][I0+1]=TJ,q0[0][I0+2]=cJ,q0[0][I0+3]=2.4*VJ,q0[1][I0]=LJ,q0[1][I0+1]=yJ,q0[1][I0+2]=aJ,q0[1][I0+3]=Math.min(1,((0.5*vJ+0.12)*k9+EJ*0.3)*P0),q0[2][I0]=0,q0[2][I0+1]=0,q0[2][I0+2]=0,q0[2][I0+3]=0,q0[3][b]=0,q0[4][I0+3]=0}{let q0=XJ.bodyA,I0=b*4;q0[0][I0]=mJ,q0[0][I0+1]=TJ,q0[0][I0+2]=cJ,q0[0][I0+3]=D9,q0[1][I0]=LJ,q0[1][I0+1]=yJ,q0[1][I0+2]=aJ,q0[1][I0+3]=vJ;let d0=(0.18+0.5*vJ)*(0.85+0.15*Math.sin(y0*2.4+s.phase))+EJ*0.3;q0[2][I0]=P0,q0[2][I0+1]=d0,q0[2][I0+2]=EJ,q0[2][I0+3]=C0.ph/(Math.PI*2);let $J=s.spinQ;q0[3][I0]=$J[0],q0[3][I0+1]=$J[1],q0[3][I0+2]=$J[2],q0[3][I0+3]=$J[3]}let A9=0.25+0.75*vJ,N9=b*S7,w9=(q0,I0)=>q0+I0*0.5+2;a(N9,mJ,TJ,cJ,w9(VJ,15*t0),LJ,yJ,aJ,0.1*A9*k9*P0,1,VJ,15*t0,0,0,1),a(N9+1,mJ,TJ,cJ,w9(VJ,8*t0),LJ,yJ,aJ,(0.28*A9+EJ*0.2)*P0,1,VJ,8*t0,0,0,1);let x9=0.18+EJ*0.4;a(N9+2,mJ,TJ,cJ,w9(VJ,3.2*t0),O8(s.col[0],x9),O8(s.col[1],x9),O8(s.col[2],x9),(0.35+0.65*A9)*P0,1,VJ,3.2*t0,0,0,1);let I=(DJ-9)*t0;a(N9+3,mJ,TJ,cJ,w9(Math.max(I,1),1.4*t0),LJ,yJ,aJ,0.38*A9*P0,1,Math.max(I,1),1.4*t0,0,0,1);let u=(DJ+12)*t0;a(N9+4,mJ,TJ,cJ,u+4*t0,LJ,yJ,aJ,0.6*(0.5+0.5*Math.sin(y0*2.2))*H0.wait*P0,2,u,2.4*t0,t0,0,1);let K0=(y0*0.35+s.phase)%1,J0=(DJ+4+K0*34)*t0;a(N9+5,mJ,TJ,cJ,w9(J0,2*t0),LJ,yJ,aJ,(1-K0)*0.5*H0.idle*P0,1,J0,2*t0,0,0,1),a(N9+6,mJ,TJ,cJ,VJ*0.7,O8(s.col[0],0.35),O8(s.col[1],0.35),O8(s.col[2],0.35),0.75*s.rest*H0.check*P0,3,VJ,2.2*t0,0,$8,0);let $0=Math.min(1,H0.run+H0.think);for(let q0=0;q0<3;q0++){let I0=-(y0*(0.8+q0*0.35)*(q0%2?-1:1)+s.phase+q0*2.1),d0=(DJ+22+q0*5)*t0,$J=Math.cos(I0)*d0,i0=Math.sin(I0)*d0;a(N9+7+q0,mJ+o[0]*$J+o[3]*i0,TJ+o[1]*$J+o[4]*i0,cJ+o[2]*$J+o[5]*i0,6*t0,LJ,yJ,aJ,0.9*vJ*$0*P0,0,0,0,0,0,0)}let v0=EU(H0),A0=XJ.arcA;for(let q0=0;q0<l6;q0++){let I0=b*l6+q0,d0=q0<2?Math.min(1,H0.run+H0.think):H0.run,$J=H0.ang[q0]+H0.off[q0],i0=I0*4;A0[0][i0]=mJ,A0[0][i0+1]=TJ,A0[0][i0+2]=cJ,A0[0][i0+3]=(DJ+11+q0%2*3)*t0,A0[1][i0]=o[0],A0[1][i0+1]=o[1],A0[1][i0+2]=o[2],A0[1][i0+3]=-($J+v0),A0[2][i0]=o[3],A0[2][i0+1]=o[4],A0[2][i0+2]=o[5],A0[2][i0+3]=v0,A0[3][i0]=O8(s.col[0],0.3),A0[3][i0+1]=O8(s.col[1],0.3),A0[3][i0+2]=O8(s.col[2],0.3),A0[3][i0+3]=Math.min(1,0.75*vJ*d0*P0),A0[4][I0]=2.2*t0}if(XJ.axesP)j0(b,s,D9,C0,P0)},F0=[1,0.36,0.62],D0=[0.3,0.72,1],m0=[1,0.6,0.2],l0=0,s0=0,m=(b,s,H0,C0,P0,x0,y0,XJ)=>{let{axesP:HJ,axesC:t0}=$,DJ=(s0+l0)*3;HJ[DJ]=b,HJ[DJ+1]=s,HJ[DJ+2]=H0,HJ[DJ+3]=C0,HJ[DJ+4]=P0,HJ[DJ+5]=x0;for(let VJ=0;VJ<3;VJ++)t0[DJ+VJ]=y0[VJ]*XJ,t0[DJ+3+VJ]=y0[VJ]*XJ;l0+=2},T0=(b,s,H0,C0,P0,x0,y0,XJ,HJ,t0,DJ,VJ,D9)=>{let vJ=0,k9=0,EJ=0;for(let TJ=0;TJ<=DJ;TJ++){let cJ=HJ+(t0-HJ)*TJ/DJ,$8=Math.cos(cJ)*XJ,A9=Math.sin(cJ)*XJ,N9=b+C0[P0]*$8+x0[y0]*A9,w9=s+C0[P0+1]*$8+x0[y0+1]*A9,x9=H0+C0[P0+2]*$8+x0[y0+2]*A9;if(TJ>0)m(vJ,k9,EJ,N9,w9,x9,VJ,D9);vJ=N9,k9=w9,EJ=x9}let LJ=t0>HJ?1:-1,yJ=Math.cos(t0),aJ=Math.sin(t0),mJ=Math.max(XJ*0.35,6);for(let TJ=-1;TJ<=1;TJ+=2){let cJ=(-aJ*C0[P0]+yJ*x0[y0])*LJ,$8=(-aJ*C0[P0+1]+yJ*x0[y0+1])*LJ,A9=(-aJ*C0[P0+2]+yJ*x0[y0+2])*LJ,N9=yJ*C0[P0]+aJ*x0[y0],w9=yJ*C0[P0+1]+aJ*x0[y0+1],x9=yJ*C0[P0+2]+aJ*x0[y0+2];m(vJ,k9,EJ,vJ-(cJ+N9*TJ*0.6)*mJ,k9-($8+w9*TJ*0.6)*mJ,EJ-(A9+x9*TJ*0.6)*mJ,VJ,D9)}},U0=new Float32Array(3),j0=(b,s,H0,C0,P0)=>{s0=b*d6,l0=0;let x0=s.ringN,y0=Math.min(1,P0)*0.9,XJ=s.x,HJ=s.y,t0=s.z;m(XJ-x0[0]*H0*1.5,HJ-x0[1]*H0*1.5,t0-x0[2]*H0*1.5,XJ+x0[0]*H0*2,HJ+x0[1]*H0*2,t0+x0[2]*H0*2,m0,y0);let DJ=1.6*H0;T0(XJ+x0[0]*DJ,HJ+x0[1]*DJ,t0+x0[2]*DJ,o,0,o,3,H0*0.42,0,5.2,14,F0,y0),U0[0]=x0[0],U0[1]=x0[1],U0[2]=x0[2];let VJ=C0.prec>=0?1:-1;T0(XJ,HJ,t0,o,0,U0,0,H0*1.45,Math.PI*0.62-VJ*0.5,Math.PI*0.62+VJ*0.5,8,D0,y0)};return{name:"nodes",renderOrder:YJ.nodes,anchors:G,pick(b,s){let H0=R(b,s);return H0>=0?Y[H0]:null},init(b){J=b,B0();let s=b.world;i.push(s.on("reset",()=>{r(),D=null,V=!1,N=0,H.length=0,W=0,V0()}),s.on("agentAdded",()=>V0()),s.on("agentRemoved",({agent:C0})=>{if(Y=s.list(),C0===D)D=null,V=!1;if(C0.dragging=!1,U.has(C0)){X.push({a:C0,t:0});let P0=G.get(C0.id);if(P0)G.delete(C0.id),F.push(P0);J.fx.burst(C0,[C0.col[0],C0.col[1],C0.col[2]],10,60)}}));let H0=b.engine.canvas;H0.addEventListener("pointerdown",L),H0.addEventListener("pointermove",f),H0.addEventListener("pointerup",e),H0.addEventListener("pointercancel",e),h=b.rig.shouldOrbit,t=(C0)=>R(C0.clientX,C0.clientY)>=0?!1:h?h(C0):!0,b.rig.shouldOrbit=t,V0()},update(b,s){let H0=s.world,C0=H0.time;if(B.motion=s.uniforms.motion.value,r0(),D&&V&&t$(M,y.x,y.y,y.z,O))B.drag=O;else B.drag=null;let P0=0;for(let x0=0;x0<Y.length;x0++){let y0=Y[x0],XJ=JJ(y0);if(lK(y0,b,C0,H0.hover===y0.id),GU(y0,b,s.rng),NU(y0,Y,b,C0,B),dK(q[XJ],y0,b),cK(_0[XJ],y0.spec.status,b,C0,B.motion),e$(_0[XJ],C0,y0.axisQ,y0.ringN,y0.spinQ),y0.power>0.3)P0++}H0.orb.activeCount=P0;for(let x0=X.length-1;x0>=0;x0--){let y0=X[x0];y0.t+=b,lK(y0.a,b,C0,!1);let XJ=U.get(y0.a);if(XJ!==void 0)dK(q[XJ],y0.a,b),cK(_0[XJ],y0.a.spec.status,b,C0,B.motion),e$(_0[XJ],C0,y0.a.axisQ,y0.a.ringN,y0.a.spinQ);if(y0.t>=JQ)S0(y0.a),X.splice(x0,1)}},beforeRender(b){if(!$)return;l(),G0();let s=b.world.time,H0=b.world.orb;Q0.value.set(H0.x,H0.y,H0.z);for(let P0=0;P0<Y.length;P0++){let x0=Y[P0],y0=U.get(x0);if(y0===void 0)continue;E0(y0,x0,q[y0],_0[y0],x0.fade,1,s)}for(let P0 of X){let x0=P0,y0=U.get(x0.a);if(y0===void 0)continue;E0(y0,x0.a,q[y0],_0[y0],BU(x0.t),LU(x0.t),s)}let C0=$;C0.haloGeo.instanceCount=W,C0.bodyGeo.instanceCount=W,C0.atmoGeo.instanceCount=W,C0.sprGeo.instanceCount=W*S7,C0.arcGeo.instanceCount=W*l6;for(let P0 of C0.attrs)P0.needsUpdate=!0;if(C0.axesGeo&&C0.axesAttrs){C0.axesGeo.setDrawRange(0,W*d6);for(let P0 of C0.axesAttrs)P0.needsUpdate=!0}},onContextRestored(){if($)for(let b of $.attrs)b.needsUpdate=!0;if($?.axesAttrs)for(let b of $.axesAttrs)b.needsUpdate=!0},dispose(){for(let s of i)s();i.length=0;let b=J?.engine.canvas;if(b){if(b.removeEventListener("pointerdown",L),b.removeEventListener("pointermove",f),b.removeEventListener("pointerup",e),b.removeEventListener("pointercancel",e),c)b.style.cursor=""}if(J&&J.rig.shouldOrbit===t&&h)J.rig.shouldOrbit=h;z0(),p0(),U.clear(),G.clear(),Y=[],X.length=0}}}var S8=[255,255,255],iK=44,bE=h9+1;function wU(J,$){let Q=J()*2-1,Z=J()*qJ,K=Math.sqrt(1-Q*Q);$[0]=Math.cos(Z)*K,$[1]=Math.sin(Z)*K,$[2]=Q}function fE(J,$,Q,Z,K){let W=Math.abs(J)<0.8?1:0,Y=W?0:1,X=Y*Q,U=-W*Q,H=W*$-Y*J,q=Math.hypot(X,U,H)||1;X/=q,U/=q,H/=q;let N=$*H-Q*U,G=Q*X-J*H,F=J*U-$*X,M=Math.cos(Z),B=Math.sin(Z);K[0]=X*M+N*B,K[1]=U*M+G*B,K[2]=H*M+F*B}var SU=(J)=>J*0.15,hE=2000,xE=2000;function gE(J,$){if(($==="running"||$==="thinking")&&!AX.has(J))return"launch";if($==="completed"&&!T8.has(J))return"nova";return"change"}var pE=(J,$)=>q9[J].power<0.1&&q9[$].power>0.1,oJ=[0,0,0],TU=(J,$,Q)=>({kind:J,a:$,t:0,intro:Q,acc:0,arrived:!1,hx:0,hy:0,hz:0,u:0,trail:new Float32Array(J==="launch"?iK*3:0),trailN:0,dx:0,dy:1,dz:0,lc2:J6($.accent,0.2),lc25:J6($.accent,0.25),lc3:J6($.accent,0.3),lc4:J6($.accent,0.4),hot:f$($.accent,S8,0.5)});function mE(J,$){let Q=J.a,Z=Q.x-$.x,K=Q.y-$.y,W=Q.z-$.z,Y=Math.hypot(Z,K,W);if(Y<0.001)J.dx=0,J.dy=1,J.dz=0;else J.dx=Z/Y,J.dy=K/Y,J.dz=W/Y}class oK{hooks;rand;list=[];paused=!1;pausedAt=0;pending=new Map;constructor(J,$){this.hooks=J;this.rand=$}rnd(J,$){return J+this.rand()*($-J)}startLaunch(J,$){let Q=TU("launch",J,$);return this.list.push(Q),Q}startNova(J){if(this.novaActive(J))return;let $=TU("nova",J,!1);return this.list.push($),$}novaActive(J){for(let $=0;$<this.list.length;$++)if(this.list[$].kind==="nova"&&this.list[$].a===J)return!0;return!1}onStatus(J,$,Q){let Z=gE($,Q);if(Z==="launch")return this.startLaunch(J,!1),Z;if(Z==="nova")return this.startNova(J),Z;if(e8.has(Q))return Z;let K=this.hooks,W=pE($,Q),Y=q9[Q].dot;return J.flash=1,K.pulseAgent(J,W?12:5),K.burst(J.x,J.y,J.z,Y,W?26:12,90),K.ripple(J.x,J.y,J.z,J.r*0.8,J.r+120,1.4,Y,3,!1),Z}onStatusEvent(J,$,Q,Z){if(!this.paused){this.onStatus(J,$,Q);return}let K=this.pending.get(J);if(!K)this.pending.set(J,{agent:J,prev:$,next:Q,at:Z});else K.next=Q,K.at=Z}setPaused(J,$){if(J===this.paused)return;if(this.paused=J,J){this.pausedAt=$;return}let Q=$-this.pausedAt>hE,Z=[...this.pending.values()];this.pending.clear();for(let K of Z){if(K.prev===K.next)continue;if(Q||$-K.at>xE)this.applySilently(K.agent,K.next);else this.onStatus(K.agent,K.prev,K.next)}}applySilently(J,$){this.drop(J);let Q=q9[$];J.statusT=99,J.power=Q.power,J.flow=Q.flow,J.spin=Q.spin,J.detail=Q.power>0.15?1:0,J.rest=T8.has($)?1:0,J.novaS=1,J.novaL=0,J.fade=e8.has($)?0:1,J.flash=0,J.hit=0;let Z=1-f0(J.power*1.1);for(let K=0;K<3;K++)J.col[K]=J.accent[K]+(x6[K]-J.accent[K])*Z,J.dot[K]=Q.dot[K]}drop(J){this.pending.delete(J);for(let $=this.list.length-1;$>=0;$--)if(this.list[$].a===J)this.list.splice($,1);J.charging=!1}clear(){this.pending.clear();for(let J of this.list)J.a.charging=!1;this.list.length=0}update(J,$,Q,Z){for(let K of Q)if(!K.launched&&$>=K.spawnAt-h9)K.launched=!0,this.startLaunch(K,!0);for(let K=this.list.length-1;K>=0;K--){let W=this.list[K];if(W.kind==="launch"?this.stepLaunch(W,J,Z):this.stepNova(W,J,Z))this.list[K]=this.list[this.list.length-1],this.list.pop()}}impact(J){let $=J.a,Q=this.hooks,Z=J.lc25;Q.ripple($.x,$.y,$.z,$.r*0.7,$.r+170,1.2,Z,5,!0),Q.ripple($.x,$.y,$.z,$.r*0.9,$.r+300,1.9,$.accent,2.5,!0),Q.ripple($.x,$.y,$.z,$.r,$.r+90,0.7,S8,3,!0);for(let K=0;K<46;K++){wU(this.rand,oJ);let W=this.rnd(40,260);Q.spark($.x,$.y,$.z,oJ[0]*W,oJ[1]*W,oJ[2]*W,this.rnd(0.6,1.5),this.rnd(0.9,2.4),K%3?Z:S8)}Q.pulseAgent($,14),$.flash=1,$.hit=1.4,Q.shake(5),Q.shockwave($.x,$.y,$.z,60)}stepLaunch(J,$,Q){let Z=J.a,K=this.hooks,W=Q.orb;J.t+=$;let Y=J.t;mE(J,W);let X=W.x+J.dx*W.r,U=W.y+J.dy*W.r,H=W.z+J.dz*W.r;if(Y<e9){let q=Y/e9;W.flash=Math.max(W.flash,0.55*q),W.feed=Math.min(1,W.feed+$*1.5),J.acc+=$*(70+160*q);while(J.acc>=1){J.acc-=1;let N=this.rnd(-1,1),G=this.rnd(50,120);fE(J.dx,J.dy,J.dz,this.rand()*qJ,oJ);let F=Math.cos(N),M=Math.sin(N),B=X+(J.dx*F+oJ[0]*M)*G,O=U+(J.dy*F+oJ[1]*M)*G,E=H+(J.dz*F+oJ[2]*M)*G,C=X-B,P=U-O,k=H-E,z=Math.hypot(C,P,k)+0.01;K.spark(B,O,E,C/z*210,P/z*210,k/z*210,this.rnd(0.35,0.7),this.rnd(0.9,1.8),this.rand()<0.5?S8:J.lc3)}}else if(Y<h9){let q=Math.pow((Y-e9)/MK,1.6);g6(Z.strands[0].pts,q,oJ),J.hx=oJ[0],J.hy=oJ[1],J.hz=oJ[2],J.u=q;let N=J.trail;if(N.copyWithin(3,0,(iK-1)*3),N[0]=J.hx,N[1]=J.hy,N[2]=J.hz,J.trailN<iK)J.trailN++;if(J.intro)Z.launchGrow=q;for(let G=0;G<3;G++)K.spark(J.hx,J.hy,J.hz,this.rnd(-40,40),this.rnd(-40,40),this.rnd(-40,40),this.rnd(0.3,0.8),this.rnd(0.8,1.8),G?J.lc3:S8)}if(Y>=h9){if(!J.arrived)if(J.arrived=!0,J.intro)Z.launchGrow=1;else this.impact(J);J.trailN=Math.max(0,J.trailN-6)}return Y>=bE}stepNova(J,$,Q){let Z=J.a,K=this.hooks;J.t+=$;let W=J.t;if(W<R7){let Y=W/R7,X=Y*Y;Z.charging=!0,Z.novaS=1-0.9*X,Z.novaL=0.3*(0.2+1.4*X),J.acc+=$*(40+220*X);while(J.acc>=1){J.acc-=1,wU(this.rand,oJ);let U=Z.r*this.rnd(1.8,3.4);K.spark(Z.x+oJ[0]*U,Z.y+oJ[1]*U,Z.z+oJ[2]*U,-oJ[0]*280,-oJ[1]*280,-oJ[2]*280,this.rnd(0.3,0.6),this.rnd(0.9,1.8),this.rand()<0.5?S8:J.lc4)}return!1}return Z.charging=!1,Z.novaS=1,Z.novaL=0,!0}}var jU=(J)=>({centreR:1.9+0.5*J,centreA:0.28*J,whiteR:24+70*J*J,whiteA:0.85*J,colR:50+110*J,colA:0.55*J}),vU=(J)=>f0(1-(J-e9)/0.25),yU=(J)=>f0(1-J/0.9);var uE=4,lE=4;class aK{simT=uE;step(J,$,Q,Z,K){if(this.simT-=J,this.simT>0||$<=lE)return!1;if(this.simT=4.5+Z()*4,Q.size===0)return!1;let W=[...Q.values()],Y=W[Math.floor(Z()*W.length)];if(q9[Y.spec.status].power<0.1&&Z()>=0.3)return!1;let U=wX[Y.spec.status],H=U[Math.floor(Z()*U.length)];if(H===Y.spec.status)return!1;return K(Y,H),!0}}var dE=1536,QQ=192,cE=`
attribute vec4 aA; // centre xyz, radius
attribute vec4 aB; // rgb 0..1, alpha
attribute float aC; // line width (world)
uniform vec2 uRes;
varying vec2 vC;
varying vec4 vCol;
varying vec3 vP;
void main() {
  vec4 mv = viewMatrix * vec4(aA.xyz, 1.0);
  float zc = max(-mv.z, 1.0);
  float upp = zc / (projectionMatrix[1][1] * 0.5 * uRes.y);
  float hw = max(aC * 0.5, 0.6 * upp);
  float ext = aA.w + hw + 2.0 * upp;
  vec4 pos = mv;
  pos.xy += position.xy * ext;
  vC = position.xy * ext;
  vP = vec3(aA.w, hw, upp);
  float thin = min(1.0, aC * 0.5 / hw);
  vCol = vec4(aB.rgb, aB.a * thin * (mv.z < -1.0 ? 1.0 : 0.0));
  gl_Position = projectionMatrix * pos;
}
`,nE=`
precision highp float;
varying vec2 vC;
varying vec4 vCol;
varying vec3 vP;
void main() {
  float d = length(vC);
  float R = vP.x;
  float hw = vP.y;
  float aa = vP.z;
  float band = 1.0 - smoothstep(hw - aa, hw + aa, abs(d - R));
  if (band <= 0.002) discard;
  gl_FragColor = vec4(vCol.rgb * (vCol.a * band), 1.0);
}
`,sE=new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]);class bU{mesh;geo=new eJ;mat;A=new Float32Array(QQ*4);B=new Float32Array(QQ*4);C=new Float32Array(QQ);aA=new dJ(this.A,4);aB=new dJ(this.B,4);aC=new dJ(this.C,1);n=0;constructor(J){let $=this.geo;$.setAttribute("position",new gJ(sE,3)),$.setIndex([0,1,2,0,2,3]);for(let Q of[this.aA,this.aB,this.aC])Q.setUsage(U9);$.setAttribute("aA",this.aA),$.setAttribute("aB",this.aB),$.setAttribute("aC",this.aC),$.instanceCount=0,this.mat=new ZJ({vertexShader:cE,fragmentShader:nE,uniforms:{uRes:{value:J.resolution.value}},blending:PJ,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),this.mesh=new GJ($,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=YJ.fx,this.mesh.name="choreo-rings"}begin(){this.n=0}add(J,$,Q,Z,K,W,Y){if(this.n>=QQ||Y<=0.004||Z<=0.5)return;let X=this.n++;this.A[X*4]=J,this.A[X*4+1]=$,this.A[X*4+2]=Q,this.A[X*4+3]=Z,this.B[X*4]=W[0]/255,this.B[X*4+1]=W[1]/255,this.B[X*4+2]=W[2]/255,this.B[X*4+3]=Y>1?1:Y,this.C[X]=K}end(){this.geo.instanceCount=this.n,this.aA.needsUpdate=!0,this.aB.needsUpdate=!0,this.aC.needsUpdate=!0}dispose(){this.mesh.removeFromParent(),this.geo.dispose(),this.mat.dispose()}}function fU(){let J,$,Q,Z,K,W=[],Y={orb:{x:0,y:0,z:0,r:B9,flash:0,feed:0},motion:1,rand:Math.random},X={x:0,y:0,z:0},U={x:0,y:0,z:0},H=(q,N)=>{if(!J||!$)return;let{a:G,t:F}=q,M=N.world.orb;if(q.kind==="launch"){let E=M.x+q.dx*M.r,C=M.y+q.dy*M.r,P=M.z+q.dz*M.r;if(F<e9){let z=F/e9,_=jU(z);J.add(M.x,M.y,M.z,M.r*_.centreR,G.accent[0],G.accent[1],G.accent[2],_.centreA),J.add(E,C,P,_.whiteR,255,255,255,_.whiteA),J.add(E,C,P,_.colR,q.lc25[0],q.lc25[1],q.lc25[2],_.colA)}else if(F<h9){let z=vU(F);if(z>0)J.add(E,C,P,110,q.lc25[0],q.lc25[1],q.lc25[2],0.6*z)}let k=q.trailN;for(let z=0;z<k;z++){let _=1-z/k;J.add(q.trail[z*3],q.trail[z*3+1],q.trail[z*3+2],5+24*_,q.lc25[0],q.lc25[1],q.lc25[2],0.5*_)}if(F>=e9&&F<h9)J.add(q.hx,q.hy,q.hz,56,G.accent[0],G.accent[1],G.accent[2],0.8),J.add(q.hx,q.hy,q.hz,26,255,255,255,1);if(F>=h9){let z=F-h9,_=yU(z);if(J.add(G.x,G.y,G.z,G.r*(2.5+z*5),q.lc25[0],q.lc25[1],q.lc25[2],_*_*0.9),z<0.5)J.add(G.x,G.y,G.z,G.r*1.7,255,255,255,1-z/0.5);$.add(G.x,G.y,G.z,G.r*(1+z*2.6),3*_+0.5,S8,_*0.7)}return}let B=F/R7,O=B*B;J.add(G.x,G.y,G.z,G.r*(1.8+2.2*O),q.hot[0],q.hot[1],q.hot[2],(0.3+0.6*O)*0.3),J.add(G.x,G.y,G.z,G.r*(0.8+B),255,255,255,SU(O))};return{name:"choreo",renderOrder:YJ.fx,init(q){let{world:N,fx:G}=q;Q=q.scene,Y.orb=N.orb,Y.rand=q.rng,Z=new oK({ripple(M,B,O,E,C,P,k,z,_){X.x=M,X.y=B,X.z=O,G.ripple({pos:X,r0:E,r1:C,life:P,color:k,width:z,shell:_})},spark(M,B,O,E,C,P,k,z,_){X.x=M,X.y=B,X.z=O,U.x=E,U.y=C,U.z=P,G.spark(X,U,k,z,_)},burst(M,B,O,E,C,P){X.x=M,X.y=B,X.z=O,G.burst(X,E,C,P)},shockwave(M,B,O,E){X.x=M,X.y=B,X.z=O,G.shockwave(X,E)},shake:(M)=>G.shake(M),pulseAgent:(M,B)=>N.emit("pulseAgent",{agent:M,n:B})},q.rng),Z.paused=N.paused,K=new aK,J=new $6(dE,YJ.fx,q.uniforms,"choreo-glows"),J.attach(Q),$=new bU(q.uniforms),Q.add($.mesh),W.push(N.on("status",({agent:M,prev:B,next:O})=>Z?.onStatusEvent(M,B,O,performance.now())),N.on("pause",({paused:M,at:B})=>Z?.setPaused(M,B)),N.on("agentRemoved",({agent:M})=>Z?.drop(M)),N.on("reset",()=>Z?.clear()))},update(q,N){if(!Z)return;Y.motion=N.uniforms.motion.value;let G=N.world;if(G.simulate&&K)K.step(q,G.time,G.agents,N.rng,(F,M)=>G.setStatus(F,M));Z.update(q,G.time,G.agents.values(),Y)},beforeRender(q){if(!Z||!J||!$)return;J.begin(),$.begin();for(let N=0;N<Z.list.length;N++)H(Z.list[N],q);J.end(),$.end()},dispose(){for(let q of W)q();W.length=0,Z?.clear(),Z=void 0,J?.dispose(),$?.dispose(),J=$=void 0}}}var hU=z7.length,iE=30,rK=0.55,oE=0.2,aE=0.2,rE=0.11,tE=new x(120,160,255).divideScalar(255),eE=`
uniform float uExt;
uniform vec3 uOrb;
varying vec3 vW;
void main() {
  vec3 w = vec3(uOrb.x + position.x * uExt, uOrb.y, uOrb.z + position.y * uExt);
  vW = w;
  gl_Position = projectionMatrix * viewMatrix * vec4(w, 1.0);
}
`,JM=`
precision highp float;
${h6}
#define RINGS ${hU}
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
    float n = floor(TAU * R / ${iE.toFixed(1)} + 0.5);
    float dir = mod(float(i), 2.0) < 0.5 ? 1.0 : -1.0;
    float ph = fract(th / TAU * n + dir * uTime * uMotion * ${oE.toFixed(2)});
    float fwp = fw * n / (TAU * R); // one pixel in dash periods (radial estimate)
    float dash = smoothstep(0.0, fwp, ph) * (1.0 - smoothstep(${rK.toFixed(2)} - fwp, ${rK.toFixed(2)}, ph));
    dash = mix(dash, ${rK.toFixed(2)}, clamp(fwp * 2.0 - 0.5, 0.0, 1.0)); // sub-pixel dashes average out
    acc += line * dash * uA[i];
  }
  if (acc <= 0.0) discard;
  gl_FragColor = vec4(uCol * (acc * fogFade(vW)), 1.0);
}
`;function xU(){let J,$,Q,Z,K,W=z7.slice(),Y=z7.map((H)=>FK.includes(H)?aE:rE),X=new o0(1,1),U=new x;return{name:"orbits",renderOrder:YJ.orbits,init(H){Z=H.scene,$=new H9(2,2),Q=new ZJ({vertexShader:eE,fragmentShader:JM,uniforms:{uExt:{value:1000},uOrb:{value:U},uK:{value:X},uR:{value:W},uA:{value:Y},uTime:H.uniforms.time,uMotion:H.uniforms.motion,uCol:{value:tE},uFog:F8(H.uniforms)},blending:PJ,side:V9,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),J=new GJ($,Q),J.frustumCulled=!1,J.renderOrder=YJ.orbits,J.name="orbits",Z.add(J);let q=()=>{let N=EK(H.world.layout);X.set(N.kx,N.kz),Q.uniforms.uExt.value=z7[hU-1]*Math.max(N.kx,N.kz)+40};q(),K=H.world.on("layout",q)},update(){},beforeRender(H){let q=H.world.orb;U.set(q.x,q.y,q.z),w8(H.uniforms,H.rig.camera.position,q)},dispose(){if(K?.(),J)Z?.remove(J);$?.dispose(),Q?.dispose(),J=void 0,$=void 0,Q=void 0}}}var gU=[lX,cX,w5,m5,u5,l5,d5,i5,JU,WU,AU,fU,xU];var c6,$M=(J,$)=>{let Q=uX(J,{reducedMotion:$.reducedMotion,onFatal:(K)=>{console.error("eagle-eye 3D: fatal,",K),J.dispatchEvent(new CustomEvent("eagle-eye-3d-fatal",{detail:K,bubbles:!0}))}});for(let K of gU)Q.addLayer(K());let Z=[Q.world.on("agentClick",({agent:K})=>$.onAgentClick?.(K.spec)),Q.world.on("orbClick",()=>$.onOrbClick?.())];return c6=Q,tK.engine=Q,{update(K){Q.update(K)},setPaused:(K)=>Q.setPaused(K),destroy(){for(let K of Z)K();if(Q.dispose(),c6===Q)c6=void 0,tK.engine=void 0}}},tK={mount:$M,stats:()=>c6?.stats()??{fps:0,drawCalls:0},setTime:(J)=>c6?.setTime(J),step:(J)=>c6?.step(J),engine:void 0};window.__eagleEye3D=tK;})();
