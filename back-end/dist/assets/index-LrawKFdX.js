(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ai(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ie={},ln=[],st=()=>{},ku=()=>!1,ts=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Oi=t=>t.startsWith("onUpdate:"),me=Object.assign,Ci=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},xu=Object.prototype.hasOwnProperty,ee=(t,e)=>xu.call(t,e),H=Array.isArray,un=t=>lr(t)==="[object Map]",ns=t=>lr(t)==="[object Set]",mo=t=>lr(t)==="[object Date]",W=t=>typeof t=="function",he=t=>typeof t=="string",at=t=>typeof t=="symbol",ue=t=>t!==null&&typeof t=="object",Ja=t=>(ue(t)||W(t))&&W(t.then)&&W(t.catch),Ya=Object.prototype.toString,lr=t=>Ya.call(t),Nu=t=>lr(t).slice(8,-1),Xa=t=>lr(t)==="[object Object]",Pi=t=>he(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Bn=Ai(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),rs=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Du=/-(\w)/g,Ve=rs(t=>t.replace(Du,(e,n)=>n?n.toUpperCase():"")),Mu=/\B([A-Z])/g,en=rs(t=>t.replace(Mu,"-$1").toLowerCase()),ss=rs(t=>t.charAt(0).toUpperCase()+t.slice(1)),Os=rs(t=>t?`on${ss(t)}`:""),xt=(t,e)=>!Object.is(t,e),Rr=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Qa=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Lr=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let go;const is=()=>go||(go=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ki(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=he(r)?$u(r):ki(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(he(t)||ue(t))return t}const Lu=/;(?![^(]*\))/g,Uu=/:([^]+)/,Fu=/\/\*[^]*?\*\//g;function $u(t){const e={};return t.replace(Fu,"").split(Lu).forEach(n=>{if(n){const r=n.split(Uu);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function xi(t){let e="";if(he(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const r=xi(t[n]);r&&(e+=r+" ")}else if(ue(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Bu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Hu=Ai(Bu);function Za(t){return!!t||t===""}function ju(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=os(t[r],e[r]);return n}function os(t,e){if(t===e)return!0;let n=mo(t),r=mo(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=at(t),r=at(e),n||r)return t===e;if(n=H(t),r=H(e),n||r)return n&&r?ju(t,e):!1;if(n=ue(t),r=ue(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!os(t[o],e[o]))return!1}}return String(t)===String(e)}function Vu(t,e){return t.findIndex(n=>os(n,e))}const ec=t=>!!(t&&t.__v_isRef===!0),Ae=t=>he(t)?t:t==null?"":H(t)||ue(t)&&(t.toString===Ya||!W(t.toString))?ec(t)?Ae(t.value):JSON.stringify(t,tc,2):String(t),tc=(t,e)=>ec(e)?tc(t,e.value):un(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Cs(r,i)+" =>"]=s,n),{})}:ns(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Cs(n))}:at(e)?Cs(e):ue(e)&&!H(e)&&!Xa(e)?String(e):e,Cs=(t,e="")=>{var n;return at(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Le;class Wu{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Le,!e&&Le&&(this.index=(Le.scopes||(Le.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Le;try{return Le=this,e()}finally{Le=n}}}on(){Le=this}off(){Le=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function qu(){return Le}let ce;const Ps=new WeakSet;class nc{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Le&&Le.active&&Le.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ps.has(this)&&(Ps.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||sc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,_o(this),ic(this);const e=ce,n=ze;ce=this,ze=!0;try{return this.fn()}finally{oc(this),ce=e,ze=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Mi(e);this.deps=this.depsTail=void 0,_o(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ps.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Zs(this)&&this.run()}get dirty(){return Zs(this)}}let rc=0,Hn,jn;function sc(t,e=!1){if(t.flags|=8,e){t.next=jn,jn=t;return}t.next=Hn,Hn=t}function Ni(){rc++}function Di(){if(--rc>0)return;if(jn){let e=jn;for(jn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Hn;){let e=Hn;for(Hn=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function ic(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function oc(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Mi(r),zu(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Zs(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ac(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function ac(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Jn))return;t.globalVersion=Jn;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Zs(t)){t.flags&=-3;return}const n=ce,r=ze;ce=t,ze=!0;try{ic(t);const s=t.fn(t._value);(e.version===0||xt(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{ce=n,ze=r,oc(t),t.flags&=-3}}function Mi(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Mi(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function zu(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let ze=!0;const cc=[];function Lt(){cc.push(ze),ze=!1}function Ut(){const t=cc.pop();ze=t===void 0?!0:t}function _o(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ce;ce=void 0;try{e()}finally{ce=n}}}let Jn=0;class Ku{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Li{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ce||!ze||ce===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ce)n=this.activeLink=new Ku(ce,this),ce.deps?(n.prevDep=ce.depsTail,ce.depsTail.nextDep=n,ce.depsTail=n):ce.deps=ce.depsTail=n,lc(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ce.depsTail,n.nextDep=void 0,ce.depsTail.nextDep=n,ce.depsTail=n,ce.deps===n&&(ce.deps=r)}return n}trigger(e){this.version++,Jn++,this.notify(e)}notify(e){Ni();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Di()}}}function lc(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)lc(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ei=new WeakMap,zt=Symbol(""),ti=Symbol(""),Yn=Symbol("");function ve(t,e,n){if(ze&&ce){let r=ei.get(t);r||ei.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Li),s.map=r,s.key=n),s.track()}}function pt(t,e,n,r,s,i){const o=ei.get(t);if(!o){Jn++;return}const a=c=>{c&&c.trigger()};if(Ni(),e==="clear")o.forEach(a);else{const c=H(t),l=c&&Pi(n);if(c&&n==="length"){const u=Number(r);o.forEach((f,p)=>{(p==="length"||p===Yn||!at(p)&&p>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),l&&a(o.get(Yn)),e){case"add":c?l&&a(o.get("length")):(a(o.get(zt)),un(t)&&a(o.get(ti)));break;case"delete":c||(a(o.get(zt)),un(t)&&a(o.get(ti)));break;case"set":un(t)&&a(o.get(zt));break}}Di()}function sn(t){const e=Z(t);return e===t?e:(ve(e,"iterate",Yn),je(t)?e:e.map(be))}function as(t){return ve(t=Z(t),"iterate",Yn),t}const Gu={__proto__:null,[Symbol.iterator](){return ks(this,Symbol.iterator,be)},concat(...t){return sn(this).concat(...t.map(e=>H(e)?sn(e):e))},entries(){return ks(this,"entries",t=>(t[1]=be(t[1]),t))},every(t,e){return ft(this,"every",t,e,void 0,arguments)},filter(t,e){return ft(this,"filter",t,e,n=>n.map(be),arguments)},find(t,e){return ft(this,"find",t,e,be,arguments)},findIndex(t,e){return ft(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return ft(this,"findLast",t,e,be,arguments)},findLastIndex(t,e){return ft(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return ft(this,"forEach",t,e,void 0,arguments)},includes(...t){return xs(this,"includes",t)},indexOf(...t){return xs(this,"indexOf",t)},join(t){return sn(this).join(t)},lastIndexOf(...t){return xs(this,"lastIndexOf",t)},map(t,e){return ft(this,"map",t,e,void 0,arguments)},pop(){return Nn(this,"pop")},push(...t){return Nn(this,"push",t)},reduce(t,...e){return yo(this,"reduce",t,e)},reduceRight(t,...e){return yo(this,"reduceRight",t,e)},shift(){return Nn(this,"shift")},some(t,e){return ft(this,"some",t,e,void 0,arguments)},splice(...t){return Nn(this,"splice",t)},toReversed(){return sn(this).toReversed()},toSorted(t){return sn(this).toSorted(t)},toSpliced(...t){return sn(this).toSpliced(...t)},unshift(...t){return Nn(this,"unshift",t)},values(){return ks(this,"values",be)}};function ks(t,e,n){const r=as(t),s=r[e]();return r!==t&&!je(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Ju=Array.prototype;function ft(t,e,n,r,s,i){const o=as(t),a=o!==t&&!je(t),c=o[e];if(c!==Ju[e]){const f=c.apply(t,i);return a?be(f):f}let l=n;o!==t&&(a?l=function(f,p){return n.call(this,be(f),p,t)}:n.length>2&&(l=function(f,p){return n.call(this,f,p,t)}));const u=c.call(o,l,r);return a&&s?s(u):u}function yo(t,e,n,r){const s=as(t);let i=n;return s!==t&&(je(t)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,t)}):i=function(o,a,c){return n.call(this,o,be(a),c,t)}),s[e](i,...r)}function xs(t,e,n){const r=Z(t);ve(r,"iterate",Yn);const s=r[e](...n);return(s===-1||s===!1)&&$i(n[0])?(n[0]=Z(n[0]),r[e](...n)):s}function Nn(t,e,n=[]){Lt(),Ni();const r=Z(t)[e].apply(t,n);return Di(),Ut(),r}const Yu=Ai("__proto__,__v_isRef,__isVue"),uc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(at));function Xu(t){at(t)||(t=String(t));const e=Z(this);return ve(e,"has",t),e.hasOwnProperty(t)}class fc{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?cf:mc:i?pc:hc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=H(e);if(!s){let c;if(o&&(c=Gu[n]))return c;if(n==="hasOwnProperty")return Xu}const a=Reflect.get(e,n,Ee(e)?e:r);return(at(n)?uc.has(n):Yu(n))||(s||ve(e,"get",n),i)?a:Ee(a)?o&&Pi(n)?a:a.value:ue(a)?s?_c(a):cs(a):a}}class dc extends fc{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Jt(i);if(!je(r)&&!Jt(r)&&(i=Z(i),r=Z(r)),!H(e)&&Ee(i)&&!Ee(r))return c?!1:(i.value=r,!0)}const o=H(e)&&Pi(n)?Number(n)<e.length:ee(e,n),a=Reflect.set(e,n,r,Ee(e)?e:s);return e===Z(s)&&(o?xt(r,i)&&pt(e,"set",n,r):pt(e,"add",n,r)),a}deleteProperty(e,n){const r=ee(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&pt(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!at(n)||!uc.has(n))&&ve(e,"has",n),r}ownKeys(e){return ve(e,"iterate",H(e)?"length":zt),Reflect.ownKeys(e)}}class Qu extends fc{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Zu=new dc,ef=new Qu,tf=new dc(!0);const ni=t=>t,Er=t=>Reflect.getPrototypeOf(t);function nf(t,e,n){return function(...r){const s=this.__v_raw,i=Z(s),o=un(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?ni:e?ri:be;return!e&&ve(i,"iterate",c?ti:zt),{next(){const{value:f,done:p}=l.next();return p?{value:f,done:p}:{value:a?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function Ir(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function rf(t,e){const n={get(s){const i=this.__v_raw,o=Z(i),a=Z(s);t||(xt(s,a)&&ve(o,"get",s),ve(o,"get",a));const{has:c}=Er(o),l=e?ni:t?ri:be;if(c.call(o,s))return l(i.get(s));if(c.call(o,a))return l(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&ve(Z(s),"iterate",zt),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Z(i),a=Z(s);return t||(xt(s,a)&&ve(o,"has",s),ve(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,c=Z(a),l=e?ni:t?ri:be;return!t&&ve(c,"iterate",zt),a.forEach((u,f)=>s.call(i,l(u),l(f),o))}};return me(n,t?{add:Ir("add"),set:Ir("set"),delete:Ir("delete"),clear:Ir("clear")}:{add(s){!e&&!je(s)&&!Jt(s)&&(s=Z(s));const i=Z(this);return Er(i).has.call(i,s)||(i.add(s),pt(i,"add",s,s)),this},set(s,i){!e&&!je(i)&&!Jt(i)&&(i=Z(i));const o=Z(this),{has:a,get:c}=Er(o);let l=a.call(o,s);l||(s=Z(s),l=a.call(o,s));const u=c.call(o,s);return o.set(s,i),l?xt(i,u)&&pt(o,"set",s,i):pt(o,"add",s,i),this},delete(s){const i=Z(this),{has:o,get:a}=Er(i);let c=o.call(i,s);c||(s=Z(s),c=o.call(i,s)),a&&a.call(i,s);const l=i.delete(s);return c&&pt(i,"delete",s,void 0),l},clear(){const s=Z(this),i=s.size!==0,o=s.clear();return i&&pt(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=nf(s,t,e)}),n}function Ui(t,e){const n=rf(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ee(n,s)&&s in r?n:r,s,i)}const sf={get:Ui(!1,!1)},of={get:Ui(!1,!0)},af={get:Ui(!0,!1)};const hc=new WeakMap,pc=new WeakMap,mc=new WeakMap,cf=new WeakMap;function lf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function uf(t){return t.__v_skip||!Object.isExtensible(t)?0:lf(Nu(t))}function cs(t){return Jt(t)?t:Fi(t,!1,Zu,sf,hc)}function gc(t){return Fi(t,!1,tf,of,pc)}function _c(t){return Fi(t,!0,ef,af,mc)}function Fi(t,e,n,r,s){if(!ue(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=uf(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function fn(t){return Jt(t)?fn(t.__v_raw):!!(t&&t.__v_isReactive)}function Jt(t){return!!(t&&t.__v_isReadonly)}function je(t){return!!(t&&t.__v_isShallow)}function $i(t){return t?!!t.__v_raw:!1}function Z(t){const e=t&&t.__v_raw;return e?Z(e):t}function ff(t){return!ee(t,"__v_skip")&&Object.isExtensible(t)&&Qa(t,"__v_skip",!0),t}const be=t=>ue(t)?cs(t):t,ri=t=>ue(t)?_c(t):t;function Ee(t){return t?t.__v_isRef===!0:!1}function _e(t){return yc(t,!1)}function df(t){return yc(t,!0)}function yc(t,e){return Ee(t)?t:new hf(t,e)}class hf{constructor(e,n){this.dep=new Li,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Z(e),this._value=n?e:be(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||je(e)||Jt(e);e=r?e:Z(e),xt(e,n)&&(this._rawValue=e,this._value=r?e:be(e),this.dep.trigger())}}function Ke(t){return Ee(t)?t.value:t}const pf={get:(t,e,n)=>e==="__v_raw"?t:Ke(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ee(s)&&!Ee(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function vc(t){return fn(t)?t:new Proxy(t,pf)}class mf{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Li(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Jn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ce!==this)return sc(this,!0),!0}get value(){const e=this.dep.track();return ac(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function gf(t,e,n=!1){let r,s;return W(t)?r=t:(r=t.get,s=t.set),new mf(r,s,n)}const Sr={},Ur=new WeakMap;let jt;function _f(t,e=!1,n=jt){if(n){let r=Ur.get(n);r||Ur.set(n,r=[]),r.push(t)}}function yf(t,e,n=ie){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=n,l=N=>s?N:je(N)||s===!1||s===0?mt(N,1):mt(N);let u,f,p,m,g=!1,y=!1;if(Ee(t)?(f=()=>t.value,g=je(t)):fn(t)?(f=()=>l(t),g=!0):H(t)?(y=!0,g=t.some(N=>fn(N)||je(N)),f=()=>t.map(N=>{if(Ee(N))return N.value;if(fn(N))return l(N);if(W(N))return c?c(N,2):N()})):W(t)?e?f=c?()=>c(t,2):t:f=()=>{if(p){Lt();try{p()}finally{Ut()}}const N=jt;jt=u;try{return c?c(t,3,[m]):t(m)}finally{jt=N}}:f=st,e&&s){const N=f,j=s===!0?1/0:s;f=()=>mt(N(),j)}const b=qu(),R=()=>{u.stop(),b&&Ci(b.effects,u)};if(i&&e){const N=e;e=(...j)=>{N(...j),R()}}let I=y?new Array(t.length).fill(Sr):Sr;const P=N=>{if(!(!(u.flags&1)||!u.dirty&&!N))if(e){const j=u.run();if(s||g||(y?j.some((X,G)=>xt(X,I[G])):xt(j,I))){p&&p();const X=jt;jt=u;try{const G=[j,I===Sr?void 0:y&&I[0]===Sr?[]:I,m];c?c(e,3,G):e(...G),I=j}finally{jt=X}}}else u.run()};return a&&a(P),u=new nc(f),u.scheduler=o?()=>o(P,!1):P,m=N=>_f(N,!1,u),p=u.onStop=()=>{const N=Ur.get(u);if(N){if(c)c(N,4);else for(const j of N)j();Ur.delete(u)}},e?r?P(!0):I=u.run():o?o(P.bind(null,!0),!0):u.run(),R.pause=u.pause.bind(u),R.resume=u.resume.bind(u),R.stop=R,R}function mt(t,e=1/0,n){if(e<=0||!ue(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Ee(t))mt(t.value,e,n);else if(H(t))for(let r=0;r<t.length;r++)mt(t[r],e,n);else if(ns(t)||un(t))t.forEach(r=>{mt(r,e,n)});else if(Xa(t)){for(const r in t)mt(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&mt(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ur(t,e,n,r){try{return r?t(...r):t()}catch(s){ls(s,e,n)}}function ct(t,e,n,r){if(W(t)){const s=ur(t,e,n,r);return s&&Ja(s)&&s.catch(i=>{ls(i,e,n)}),s}if(H(t)){const s=[];for(let i=0;i<t.length;i++)s.push(ct(t[i],e,n,r));return s}}function ls(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ie;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,c,l)===!1)return}a=a.parent}if(i){Lt(),ur(i,null,10,[t,c,l]),Ut();return}}vf(t,n,s,r,o)}function vf(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Re=[];let nt=-1;const dn=[];let Tt=null,on=0;const bc=Promise.resolve();let Fr=null;function Bi(t){const e=Fr||bc;return t?e.then(this?t.bind(this):t):e}function bf(t){let e=nt+1,n=Re.length;for(;e<n;){const r=e+n>>>1,s=Re[r],i=Xn(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Hi(t){if(!(t.flags&1)){const e=Xn(t),n=Re[Re.length-1];!n||!(t.flags&2)&&e>=Xn(n)?Re.push(t):Re.splice(bf(e),0,t),t.flags|=1,wc()}}function wc(){Fr||(Fr=bc.then(Ic))}function wf(t){H(t)?dn.push(...t):Tt&&t.id===-1?Tt.splice(on+1,0,t):t.flags&1||(dn.push(t),t.flags|=1),wc()}function vo(t,e,n=nt+1){for(;n<Re.length;n++){const r=Re[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Re.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Ec(t){if(dn.length){const e=[...new Set(dn)].sort((n,r)=>Xn(n)-Xn(r));if(dn.length=0,Tt){Tt.push(...e);return}for(Tt=e,on=0;on<Tt.length;on++){const n=Tt[on];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Tt=null,on=0}}const Xn=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Ic(t){try{for(nt=0;nt<Re.length;nt++){const e=Re[nt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ur(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;nt<Re.length;nt++){const e=Re[nt];e&&(e.flags&=-2)}nt=-1,Re.length=0,Ec(),Fr=null,(Re.length||dn.length)&&Ic()}}let Ue=null,Sc=null;function $r(t){const e=Ue;return Ue=t,Sc=t&&t.type.__scopeId||null,e}function Mt(t,e=Ue,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Oo(-1);const i=$r(e);let o;try{o=t(...s)}finally{$r(i),r._d&&Oo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Tc(t,e){if(Ue===null)return t;const n=hs(Ue),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=ie]=e[s];i&&(W(i)&&(i={mounted:i,updated:i}),i.deep&&mt(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function Bt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Lt(),ct(c,n,8,[t.el,a,t,e]),Ut())}}const Ef=Symbol("_vte"),If=t=>t.__isTeleport;function ji(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ji(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Rc(t,e){return W(t)?me({name:t.name},e,{setup:t}):t}function Ac(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function si(t,e,n,r,s=!1){if(H(t)){t.forEach((g,y)=>si(g,e&&(H(e)?e[y]:e),n,r,s));return}if(Vn(r)&&!s)return;const i=r.shapeFlag&4?hs(r.component):r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ie?a.refs={}:a.refs,f=a.setupState,p=Z(f),m=f===ie?()=>!1:g=>ee(p,g);if(l!=null&&l!==c&&(he(l)?(u[l]=null,m(l)&&(f[l]=null)):Ee(l)&&(l.value=null)),W(c))ur(c,a,12,[o,u]);else{const g=he(c),y=Ee(c);if(g||y){const b=()=>{if(t.f){const R=g?m(c)?f[c]:u[c]:c.value;s?H(R)&&Ci(R,i):H(R)?R.includes(i)||R.push(i):g?(u[c]=[i],m(c)&&(f[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else g?(u[c]=o,m(c)&&(f[c]=o)):y&&(c.value=o,t.k&&(u[t.k]=o))};o?(b.id=-1,Me(b,n)):b()}}}is().requestIdleCallback;is().cancelIdleCallback;const Vn=t=>!!t.type.__asyncLoader,Oc=t=>t.type.__isKeepAlive;function Sf(t,e){Cc(t,"a",e)}function Tf(t,e){Cc(t,"da",e)}function Cc(t,e,n=we){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(us(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Oc(s.parent.vnode)&&Rf(r,e,n,s),s=s.parent}}function Rf(t,e,n,r){const s=us(e,t,r,!0);Pc(()=>{Ci(r[e],s)},n)}function us(t,e,n=we,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Lt();const a=fr(n),c=ct(e,n,t,o);return a(),Ut(),c});return r?s.unshift(i):s.push(i),i}}const vt=t=>(e,n=we)=>{(!Zn||t==="sp")&&us(t,(...r)=>e(...r),n)},Af=vt("bm"),Tn=vt("m"),Of=vt("bu"),Cf=vt("u"),Pf=vt("bum"),Pc=vt("um"),kf=vt("sp"),xf=vt("rtg"),Nf=vt("rtc");function Df(t,e=we){us("ec",t,e)}const Mf="components";function Vi(t,e){return Uf(Mf,t,!0,e)||t}const Lf=Symbol.for("v-ndc");function Uf(t,e,n=!0,r=!1){const s=Ue||we;if(s){const i=s.type;{const a=Id(i,!1);if(a&&(a===e||a===Ve(e)||a===ss(Ve(e))))return i}const o=bo(s[t]||i[t],e)||bo(s.appContext[t],e);return!o&&r?i:o}}function bo(t,e){return t&&(t[e]||t[Ve(e)]||t[ss(Ve(e))])}function Br(t,e,n,r){let s;const i=n,o=H(t);if(o||he(t)){const a=o&&fn(t);let c=!1;a&&(c=!je(t),t=as(t)),s=new Array(t.length);for(let l=0,u=t.length;l<u;l++)s[l]=e(c?be(t[l]):t[l],l,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i)}else if(ue(t))if(t[Symbol.iterator])s=Array.from(t,(a,c)=>e(a,c,void 0,i));else{const a=Object.keys(t);s=new Array(a.length);for(let c=0,l=a.length;c<l;c++){const u=a[c];s[c]=e(t[u],u,c,i)}}else s=[];return s}const ii=t=>t?Qc(t)?hs(t):ii(t.parent):null,Wn=me(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ii(t.parent),$root:t=>ii(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Wi(t),$forceUpdate:t=>t.f||(t.f=()=>{Hi(t.update)}),$nextTick:t=>t.n||(t.n=Bi.bind(t.proxy)),$watch:t=>sd.bind(t)}),Ns=(t,e)=>t!==ie&&!t.__isScriptSetup&&ee(t,e),Ff={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ns(r,e))return o[e]=1,r[e];if(s!==ie&&ee(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&ee(l,e))return o[e]=3,i[e];if(n!==ie&&ee(n,e))return o[e]=4,n[e];oi&&(o[e]=0)}}const u=Wn[e];let f,p;if(u)return e==="$attrs"&&ve(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==ie&&ee(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,ee(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ns(s,e)?(s[e]=n,!0):r!==ie&&ee(r,e)?(r[e]=n,!0):ee(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==ie&&ee(t,o)||Ns(e,o)||(a=i[0])&&ee(a,o)||ee(r,o)||ee(Wn,o)||ee(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ee(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function wo(t){return H(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let oi=!0;function $f(t){const e=Wi(t),n=t.proxy,r=t.ctx;oi=!1,e.beforeCreate&&Eo(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:p,beforeUpdate:m,updated:g,activated:y,deactivated:b,beforeDestroy:R,beforeUnmount:I,destroyed:P,unmounted:N,render:j,renderTracked:X,renderTriggered:G,errorCaptured:ge,serverPrefetch:Se,expose:Be,inheritAttrs:bt,components:$t,directives:Qe,filters:kn}=e;if(l&&Bf(l,r,null),o)for(const se in o){const Q=o[se];W(Q)&&(r[se]=Q.bind(n))}if(s){const se=s.call(n,n);ue(se)&&(t.data=cs(se))}if(oi=!0,i)for(const se in i){const Q=i[se],ut=W(Q)?Q.bind(n,n):W(Q.get)?Q.get.bind(n,n):st,wt=!W(Q)&&W(Q.set)?Q.set.bind(n):st,Ze=Ce({get:ut,set:wt});Object.defineProperty(r,se,{enumerable:!0,configurable:!0,get:()=>Ze.value,set:Oe=>Ze.value=Oe})}if(a)for(const se in a)kc(a[se],r,n,se);if(c){const se=W(c)?c.call(n):c;Reflect.ownKeys(se).forEach(Q=>{Ar(Q,se[Q])})}u&&Eo(u,t,"c");function pe(se,Q){H(Q)?Q.forEach(ut=>se(ut.bind(n))):Q&&se(Q.bind(n))}if(pe(Af,f),pe(Tn,p),pe(Of,m),pe(Cf,g),pe(Sf,y),pe(Tf,b),pe(Df,ge),pe(Nf,X),pe(xf,G),pe(Pf,I),pe(Pc,N),pe(kf,Se),H(Be))if(Be.length){const se=t.exposed||(t.exposed={});Be.forEach(Q=>{Object.defineProperty(se,Q,{get:()=>n[Q],set:ut=>n[Q]=ut})})}else t.exposed||(t.exposed={});j&&t.render===st&&(t.render=j),bt!=null&&(t.inheritAttrs=bt),$t&&(t.components=$t),Qe&&(t.directives=Qe),Se&&Ac(t)}function Bf(t,e,n=st){H(t)&&(t=ai(t));for(const r in t){const s=t[r];let i;ue(s)?"default"in s?i=Ge(s.from||r,s.default,!0):i=Ge(s.from||r):i=Ge(s),Ee(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Eo(t,e,n){ct(H(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function kc(t,e,n,r){let s=r.includes(".")?qc(n,r):()=>n[r];if(he(t)){const i=e[t];W(i)&&pn(s,i)}else if(W(t))pn(s,t.bind(n));else if(ue(t))if(H(t))t.forEach(i=>kc(i,e,n,r));else{const i=W(t.handler)?t.handler.bind(n):e[t.handler];W(i)&&pn(s,i,t)}}function Wi(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Hr(c,l,o,!0)),Hr(c,e,o)),ue(e)&&i.set(e,c),c}function Hr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Hr(t,i,n,!0),s&&s.forEach(o=>Hr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Hf[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Hf={data:Io,props:So,emits:So,methods:Un,computed:Un,beforeCreate:Te,created:Te,beforeMount:Te,mounted:Te,beforeUpdate:Te,updated:Te,beforeDestroy:Te,beforeUnmount:Te,destroyed:Te,unmounted:Te,activated:Te,deactivated:Te,errorCaptured:Te,serverPrefetch:Te,components:Un,directives:Un,watch:Vf,provide:Io,inject:jf};function Io(t,e){return e?t?function(){return me(W(t)?t.call(this,this):t,W(e)?e.call(this,this):e)}:e:t}function jf(t,e){return Un(ai(t),ai(e))}function ai(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Te(t,e){return t?[...new Set([].concat(t,e))]:e}function Un(t,e){return t?me(Object.create(null),t,e):e}function So(t,e){return t?H(t)&&H(e)?[...new Set([...t,...e])]:me(Object.create(null),wo(t),wo(e??{})):e}function Vf(t,e){if(!t)return e;if(!e)return t;const n=me(Object.create(null),t);for(const r in e)n[r]=Te(t[r],e[r]);return n}function xc(){return{app:null,config:{isNativeTag:ku,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Wf=0;function qf(t,e){return function(r,s=null){W(r)||(r=me({},r)),s!=null&&!ue(s)&&(s=null);const i=xc(),o=new WeakSet,a=[];let c=!1;const l=i.app={_uid:Wf++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Td,get config(){return i.config},set config(u){},use(u,...f){return o.has(u)||(u&&W(u.install)?(o.add(u),u.install(l,...f)):W(u)&&(o.add(u),u(l,...f))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,f){return f?(i.components[u]=f,l):i.components[u]},directive(u,f){return f?(i.directives[u]=f,l):i.directives[u]},mount(u,f,p){if(!c){const m=l._ceVNode||Y(r,s);return m.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),f&&e?e(m,u):t(m,u,p),c=!0,l._container=u,u.__vue_app__=l,hs(m.component)}},onUnmount(u){a.push(u)},unmount(){c&&(ct(a,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(u,f){return i.provides[u]=f,l},runWithContext(u){const f=hn;hn=l;try{return u()}finally{hn=f}}};return l}}let hn=null;function Ar(t,e){if(we){let n=we.provides;const r=we.parent&&we.parent.provides;r===n&&(n=we.provides=Object.create(r)),n[t]=e}}function Ge(t,e,n=!1){const r=we||Ue;if(r||hn){const s=hn?hn._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&W(e)?e.call(r&&r.proxy):e}}const Nc={},Dc=()=>Object.create(Nc),Mc=t=>Object.getPrototypeOf(t)===Nc;function zf(t,e,n,r=!1){const s={},i=Dc();t.propsDefaults=Object.create(null),Lc(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:gc(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Kf(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Z(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(fs(t.emitsOptions,p))continue;const m=e[p];if(c)if(ee(i,p))m!==i[p]&&(i[p]=m,l=!0);else{const g=Ve(p);s[g]=ci(c,a,g,m,t,!1)}else m!==i[p]&&(i[p]=m,l=!0)}}}else{Lc(t,e,s,i)&&(l=!0);let u;for(const f in a)(!e||!ee(e,f)&&((u=en(f))===f||!ee(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=ci(c,a,f,void 0,t,!0)):delete s[f]);if(i!==a)for(const f in i)(!e||!ee(e,f))&&(delete i[f],l=!0)}l&&pt(t.attrs,"set","")}function Lc(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Bn(c))continue;const l=e[c];let u;s&&ee(s,u=Ve(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:fs(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=Z(n),l=a||ie;for(let u=0;u<i.length;u++){const f=i[u];n[f]=ci(s,c,f,l[f],t,!ee(l,f))}}return o}function ci(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ee(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&W(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=fr(s);r=l[n]=c.call(null,e),u()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===en(n))&&(r=!0))}return r}const Gf=new WeakMap;function Uc(t,e,n=!1){const r=n?Gf:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!W(t)){const u=f=>{c=!0;const[p,m]=Uc(f,e,!0);me(o,p),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return ue(t)&&r.set(t,ln),ln;if(H(i))for(let u=0;u<i.length;u++){const f=Ve(i[u]);To(f)&&(o[f]=ie)}else if(i)for(const u in i){const f=Ve(u);if(To(f)){const p=i[u],m=o[f]=H(p)||W(p)?{type:p}:me({},p),g=m.type;let y=!1,b=!0;if(H(g))for(let R=0;R<g.length;++R){const I=g[R],P=W(I)&&I.name;if(P==="Boolean"){y=!0;break}else P==="String"&&(b=!1)}else y=W(g)&&g.name==="Boolean";m[0]=y,m[1]=b,(y||ee(m,"default"))&&a.push(f)}}const l=[o,a];return ue(t)&&r.set(t,l),l}function To(t){return t[0]!=="$"&&!Bn(t)}const Fc=t=>t[0]==="_"||t==="$stable",qi=t=>H(t)?t.map(rt):[rt(t)],Jf=(t,e,n)=>{if(e._n)return e;const r=Mt((...s)=>qi(e(...s)),n);return r._c=!1,r},$c=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Fc(s))continue;const i=t[s];if(W(i))e[s]=Jf(s,i,r);else if(i!=null){const o=qi(i);e[s]=()=>o}}},Bc=(t,e)=>{const n=qi(e);t.slots.default=()=>n},Hc=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},Yf=(t,e,n)=>{const r=t.slots=Dc();if(t.vnode.shapeFlag&32){const s=e._;s?(Hc(r,e,n),n&&Qa(r,"_",s,!0)):$c(e,r)}else e&&Bc(t,e)},Xf=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ie;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:Hc(s,e,n):(i=!e.$stable,$c(e,s)),o=e}else e&&(Bc(t,e),o={default:1});if(i)for(const a in s)!Fc(a)&&o[a]==null&&delete s[a]},Me=fd;function Qf(t){return Zf(t)}function Zf(t,e){const n=is();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:p,setScopeId:m=st,insertStaticContent:g}=t,y=(d,h,_,S=null,w=null,T=null,x=void 0,k=null,O=!!h.dynamicChildren)=>{if(d===h)return;d&&!Dn(d,h)&&(S=E(d),Oe(d,w,T,!0),d=null),h.patchFlag===-2&&(O=!1,h.dynamicChildren=null);const{type:A,ref:B,shapeFlag:M}=h;switch(A){case ds:b(d,h,_,S);break;case Yt:R(d,h,_,S);break;case Ls:d==null&&I(h,_,S,x);break;case de:$t(d,h,_,S,w,T,x,k,O);break;default:M&1?j(d,h,_,S,w,T,x,k,O):M&6?Qe(d,h,_,S,w,T,x,k,O):(M&64||M&128)&&A.process(d,h,_,S,w,T,x,k,O,U)}B!=null&&w&&si(B,d&&d.ref,T,h||d,!h)},b=(d,h,_,S)=>{if(d==null)r(h.el=a(h.children),_,S);else{const w=h.el=d.el;h.children!==d.children&&l(w,h.children)}},R=(d,h,_,S)=>{d==null?r(h.el=c(h.children||""),_,S):h.el=d.el},I=(d,h,_,S)=>{[d.el,d.anchor]=g(d.children,h,_,S,d.el,d.anchor)},P=({el:d,anchor:h},_,S)=>{let w;for(;d&&d!==h;)w=p(d),r(d,_,S),d=w;r(h,_,S)},N=({el:d,anchor:h})=>{let _;for(;d&&d!==h;)_=p(d),s(d),d=_;s(h)},j=(d,h,_,S,w,T,x,k,O)=>{h.type==="svg"?x="svg":h.type==="math"&&(x="mathml"),d==null?X(h,_,S,w,T,x,k,O):Se(d,h,w,T,x,k,O)},X=(d,h,_,S,w,T,x,k)=>{let O,A;const{props:B,shapeFlag:M,transition:F,dirs:V}=d;if(O=d.el=o(d.type,T,B&&B.is,B),M&8?u(O,d.children):M&16&&ge(d.children,O,null,S,w,Ds(d,T),x,k),V&&Bt(d,null,S,"created"),G(O,d,d.scopeId,x,S),B){for(const ae in B)ae!=="value"&&!Bn(ae)&&i(O,ae,null,B[ae],T,S);"value"in B&&i(O,"value",null,B.value,T),(A=B.onVnodeBeforeMount)&&tt(A,S,d)}V&&Bt(d,null,S,"beforeMount");const J=ed(w,F);J&&F.beforeEnter(O),r(O,h,_),((A=B&&B.onVnodeMounted)||J||V)&&Me(()=>{A&&tt(A,S,d),J&&F.enter(O),V&&Bt(d,null,S,"mounted")},w)},G=(d,h,_,S,w)=>{if(_&&m(d,_),S)for(let T=0;T<S.length;T++)m(d,S[T]);if(w){let T=w.subTree;if(h===T||Kc(T.type)&&(T.ssContent===h||T.ssFallback===h)){const x=w.vnode;G(d,x,x.scopeId,x.slotScopeIds,w.parent)}}},ge=(d,h,_,S,w,T,x,k,O=0)=>{for(let A=O;A<d.length;A++){const B=d[A]=k?Rt(d[A]):rt(d[A]);y(null,B,h,_,S,w,T,x,k)}},Se=(d,h,_,S,w,T,x)=>{const k=h.el=d.el;let{patchFlag:O,dynamicChildren:A,dirs:B}=h;O|=d.patchFlag&16;const M=d.props||ie,F=h.props||ie;let V;if(_&&Ht(_,!1),(V=F.onVnodeBeforeUpdate)&&tt(V,_,h,d),B&&Bt(h,d,_,"beforeUpdate"),_&&Ht(_,!0),(M.innerHTML&&F.innerHTML==null||M.textContent&&F.textContent==null)&&u(k,""),A?Be(d.dynamicChildren,A,k,_,S,Ds(h,w),T):x||Q(d,h,k,null,_,S,Ds(h,w),T,!1),O>0){if(O&16)bt(k,M,F,_,w);else if(O&2&&M.class!==F.class&&i(k,"class",null,F.class,w),O&4&&i(k,"style",M.style,F.style,w),O&8){const J=h.dynamicProps;for(let ae=0;ae<J.length;ae++){const ne=J[ae],xe=M[ne],ye=F[ne];(ye!==xe||ne==="value")&&i(k,ne,xe,ye,w,_)}}O&1&&d.children!==h.children&&u(k,h.children)}else!x&&A==null&&bt(k,M,F,_,w);((V=F.onVnodeUpdated)||B)&&Me(()=>{V&&tt(V,_,h,d),B&&Bt(h,d,_,"updated")},S)},Be=(d,h,_,S,w,T,x)=>{for(let k=0;k<h.length;k++){const O=d[k],A=h[k],B=O.el&&(O.type===de||!Dn(O,A)||O.shapeFlag&70)?f(O.el):_;y(O,A,B,null,S,w,T,x,!0)}},bt=(d,h,_,S,w)=>{if(h!==_){if(h!==ie)for(const T in h)!Bn(T)&&!(T in _)&&i(d,T,h[T],null,w,S);for(const T in _){if(Bn(T))continue;const x=_[T],k=h[T];x!==k&&T!=="value"&&i(d,T,k,x,w,S)}"value"in _&&i(d,"value",h.value,_.value,w)}},$t=(d,h,_,S,w,T,x,k,O)=>{const A=h.el=d?d.el:a(""),B=h.anchor=d?d.anchor:a("");let{patchFlag:M,dynamicChildren:F,slotScopeIds:V}=h;V&&(k=k?k.concat(V):V),d==null?(r(A,_,S),r(B,_,S),ge(h.children||[],_,B,w,T,x,k,O)):M>0&&M&64&&F&&d.dynamicChildren?(Be(d.dynamicChildren,F,_,w,T,x,k),(h.key!=null||w&&h===w.subTree)&&jc(d,h,!0)):Q(d,h,_,B,w,T,x,k,O)},Qe=(d,h,_,S,w,T,x,k,O)=>{h.slotScopeIds=k,d==null?h.shapeFlag&512?w.ctx.activate(h,_,S,x,O):kn(h,_,S,w,T,x,O):tn(d,h,O)},kn=(d,h,_,S,w,T,x)=>{const k=d.component=yd(d,S,w);if(Oc(d)&&(k.ctx.renderer=U),vd(k,!1,x),k.asyncDep){if(w&&w.registerDep(k,pe,x),!d.el){const O=k.subTree=Y(Yt);R(null,O,h,_)}}else pe(k,d,h,_,w,T,x)},tn=(d,h,_)=>{const S=h.component=d.component;if(ld(d,h,_))if(S.asyncDep&&!S.asyncResolved){se(S,h,_);return}else S.next=h,S.update();else h.el=d.el,S.vnode=h},pe=(d,h,_,S,w,T,x)=>{const k=()=>{if(d.isMounted){let{next:M,bu:F,u:V,parent:J,vnode:ae}=d;{const Ne=Vc(d);if(Ne){M&&(M.el=ae.el,se(d,M,x)),Ne.asyncDep.then(()=>{d.isUnmounted||k()});return}}let ne=M,xe;Ht(d,!1),M?(M.el=ae.el,se(d,M,x)):M=ae,F&&Rr(F),(xe=M.props&&M.props.onVnodeBeforeUpdate)&&tt(xe,J,M,ae),Ht(d,!0);const ye=Ms(d),We=d.subTree;d.subTree=ye,y(We,ye,f(We.el),E(We),d,w,T),M.el=ye.el,ne===null&&ud(d,ye.el),V&&Me(V,w),(xe=M.props&&M.props.onVnodeUpdated)&&Me(()=>tt(xe,J,M,ae),w)}else{let M;const{el:F,props:V}=h,{bm:J,m:ae,parent:ne,root:xe,type:ye}=d,We=Vn(h);if(Ht(d,!1),J&&Rr(J),!We&&(M=V&&V.onVnodeBeforeMount)&&tt(M,ne,h),Ht(d,!0),F&&fe){const Ne=()=>{d.subTree=Ms(d),fe(F,d.subTree,d,w,null)};We&&ye.__asyncHydrate?ye.__asyncHydrate(F,d,Ne):Ne()}else{xe.ce&&xe.ce._injectChildStyle(ye);const Ne=d.subTree=Ms(d);y(null,Ne,_,S,d,w,T),h.el=Ne.el}if(ae&&Me(ae,w),!We&&(M=V&&V.onVnodeMounted)){const Ne=h;Me(()=>tt(M,ne,Ne),w)}(h.shapeFlag&256||ne&&Vn(ne.vnode)&&ne.vnode.shapeFlag&256)&&d.a&&Me(d.a,w),d.isMounted=!0,h=_=S=null}};d.scope.on();const O=d.effect=new nc(k);d.scope.off();const A=d.update=O.run.bind(O),B=d.job=O.runIfDirty.bind(O);B.i=d,B.id=d.uid,O.scheduler=()=>Hi(B),Ht(d,!0),A()},se=(d,h,_)=>{h.component=d;const S=d.vnode.props;d.vnode=h,d.next=null,Kf(d,h.props,S,_),Xf(d,h.children,_),Lt(),vo(d),Ut()},Q=(d,h,_,S,w,T,x,k,O=!1)=>{const A=d&&d.children,B=d?d.shapeFlag:0,M=h.children,{patchFlag:F,shapeFlag:V}=h;if(F>0){if(F&128){wt(A,M,_,S,w,T,x,k,O);return}else if(F&256){ut(A,M,_,S,w,T,x,k,O);return}}V&8?(B&16&&He(A,w,T),M!==A&&u(_,M)):B&16?V&16?wt(A,M,_,S,w,T,x,k,O):He(A,w,T,!0):(B&8&&u(_,""),V&16&&ge(M,_,S,w,T,x,k,O))},ut=(d,h,_,S,w,T,x,k,O)=>{d=d||ln,h=h||ln;const A=d.length,B=h.length,M=Math.min(A,B);let F;for(F=0;F<M;F++){const V=h[F]=O?Rt(h[F]):rt(h[F]);y(d[F],V,_,null,w,T,x,k,O)}A>B?He(d,w,T,!0,!1,M):ge(h,_,S,w,T,x,k,O,M)},wt=(d,h,_,S,w,T,x,k,O)=>{let A=0;const B=h.length;let M=d.length-1,F=B-1;for(;A<=M&&A<=F;){const V=d[A],J=h[A]=O?Rt(h[A]):rt(h[A]);if(Dn(V,J))y(V,J,_,null,w,T,x,k,O);else break;A++}for(;A<=M&&A<=F;){const V=d[M],J=h[F]=O?Rt(h[F]):rt(h[F]);if(Dn(V,J))y(V,J,_,null,w,T,x,k,O);else break;M--,F--}if(A>M){if(A<=F){const V=F+1,J=V<B?h[V].el:S;for(;A<=F;)y(null,h[A]=O?Rt(h[A]):rt(h[A]),_,J,w,T,x,k,O),A++}}else if(A>F)for(;A<=M;)Oe(d[A],w,T,!0),A++;else{const V=A,J=A,ae=new Map;for(A=J;A<=F;A++){const De=h[A]=O?Rt(h[A]):rt(h[A]);De.key!=null&&ae.set(De.key,A)}let ne,xe=0;const ye=F-J+1;let We=!1,Ne=0;const xn=new Array(ye);for(A=0;A<ye;A++)xn[A]=0;for(A=V;A<=M;A++){const De=d[A];if(xe>=ye){Oe(De,w,T,!0);continue}let et;if(De.key!=null)et=ae.get(De.key);else for(ne=J;ne<=F;ne++)if(xn[ne-J]===0&&Dn(De,h[ne])){et=ne;break}et===void 0?Oe(De,w,T,!0):(xn[et-J]=A+1,et>=Ne?Ne=et:We=!0,y(De,h[et],_,null,w,T,x,k,O),xe++)}const ho=We?td(xn):ln;for(ne=ho.length-1,A=ye-1;A>=0;A--){const De=J+A,et=h[De],po=De+1<B?h[De+1].el:S;xn[A]===0?y(null,et,_,po,w,T,x,k,O):We&&(ne<0||A!==ho[ne]?Ze(et,_,po,2):ne--)}}},Ze=(d,h,_,S,w=null)=>{const{el:T,type:x,transition:k,children:O,shapeFlag:A}=d;if(A&6){Ze(d.component.subTree,h,_,S);return}if(A&128){d.suspense.move(h,_,S);return}if(A&64){x.move(d,h,_,U);return}if(x===de){r(T,h,_);for(let M=0;M<O.length;M++)Ze(O[M],h,_,S);r(d.anchor,h,_);return}if(x===Ls){P(d,h,_);return}if(S!==2&&A&1&&k)if(S===0)k.beforeEnter(T),r(T,h,_),Me(()=>k.enter(T),w);else{const{leave:M,delayLeave:F,afterLeave:V}=k,J=()=>r(T,h,_),ae=()=>{M(T,()=>{J(),V&&V()})};F?F(T,J,ae):ae()}else r(T,h,_)},Oe=(d,h,_,S=!1,w=!1)=>{const{type:T,props:x,ref:k,children:O,dynamicChildren:A,shapeFlag:B,patchFlag:M,dirs:F,cacheIndex:V}=d;if(M===-2&&(w=!1),k!=null&&si(k,null,_,d,!0),V!=null&&(h.renderCache[V]=void 0),B&256){h.ctx.deactivate(d);return}const J=B&1&&F,ae=!Vn(d);let ne;if(ae&&(ne=x&&x.onVnodeBeforeUnmount)&&tt(ne,h,d),B&6)wr(d.component,_,S);else{if(B&128){d.suspense.unmount(_,S);return}J&&Bt(d,null,h,"beforeUnmount"),B&64?d.type.remove(d,h,_,U,S):A&&!A.hasOnce&&(T!==de||M>0&&M&64)?He(A,h,_,!1,!0):(T===de&&M&384||!w&&B&16)&&He(O,h,_),S&&nn(d)}(ae&&(ne=x&&x.onVnodeUnmounted)||J)&&Me(()=>{ne&&tt(ne,h,d),J&&Bt(d,null,h,"unmounted")},_)},nn=d=>{const{type:h,el:_,anchor:S,transition:w}=d;if(h===de){rn(_,S);return}if(h===Ls){N(d);return}const T=()=>{s(_),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(d.shapeFlag&1&&w&&!w.persisted){const{leave:x,delayLeave:k}=w,O=()=>x(_,T);k?k(d.el,T,O):O()}else T()},rn=(d,h)=>{let _;for(;d!==h;)_=p(d),s(d),d=_;s(h)},wr=(d,h,_)=>{const{bum:S,scope:w,job:T,subTree:x,um:k,m:O,a:A}=d;Ro(O),Ro(A),S&&Rr(S),w.stop(),T&&(T.flags|=8,Oe(x,d,h,_)),k&&Me(k,h),Me(()=>{d.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},He=(d,h,_,S=!1,w=!1,T=0)=>{for(let x=T;x<d.length;x++)Oe(d[x],h,_,S,w)},E=d=>{if(d.shapeFlag&6)return E(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();const h=p(d.anchor||d.el),_=h&&h[Ef];return _?p(_):h};let L=!1;const D=(d,h,_)=>{d==null?h._vnode&&Oe(h._vnode,null,null,!0):y(h._vnode||null,d,h,null,null,null,_),h._vnode=d,L||(L=!0,vo(),Ec(),L=!1)},U={p:y,um:Oe,m:Ze,r:nn,mt:kn,mc:ge,pc:Q,pbc:Be,n:E,o:t};let te,fe;return{render:D,hydrate:te,createApp:qf(D,te)}}function Ds({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ht({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function ed(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function jc(t,e,n=!1){const r=t.children,s=e.children;if(H(r)&&H(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Rt(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&jc(o,a)),a.type===ds&&(a.el=o.el)}}function td(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Vc(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Vc(e)}function Ro(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const nd=Symbol.for("v-scx"),rd=()=>Ge(nd);function pn(t,e,n){return Wc(t,e,n)}function Wc(t,e,n=ie){const{immediate:r,deep:s,flush:i,once:o}=n,a=me({},n),c=e&&r||!e&&i!=="post";let l;if(Zn){if(i==="sync"){const m=rd();l=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=st,m.resume=st,m.pause=st,m}}const u=we;a.call=(m,g,y)=>ct(m,u,g,y);let f=!1;i==="post"?a.scheduler=m=>{Me(m,u&&u.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(m,g)=>{g?m():Hi(m)}),a.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const p=yf(t,e,a);return Zn&&(l?l.push(p):c&&p()),p}function sd(t,e,n){const r=this.proxy,s=he(t)?t.includes(".")?qc(r,t):()=>r[t]:t.bind(r,r);let i;W(e)?i=e:(i=e.handler,n=e);const o=fr(this),a=Wc(s,i.bind(r),n);return o(),a}function qc(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const id=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ve(e)}Modifiers`]||t[`${en(e)}Modifiers`];function od(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ie;let s=n;const i=e.startsWith("update:"),o=i&&id(r,e.slice(7));o&&(o.trim&&(s=n.map(u=>he(u)?u.trim():u)),o.number&&(s=n.map(Lr)));let a,c=r[a=Os(e)]||r[a=Os(Ve(e))];!c&&i&&(c=r[a=Os(en(e))]),c&&ct(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ct(l,t,6,s)}}function zc(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!W(t)){const c=l=>{const u=zc(l,e,!0);u&&(a=!0,me(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ue(t)&&r.set(t,null),null):(H(i)?i.forEach(c=>o[c]=null):me(o,i),ue(t)&&r.set(t,o),o)}function fs(t,e){return!t||!ts(e)?!1:(e=e.slice(2).replace(/Once$/,""),ee(t,e[0].toLowerCase()+e.slice(1))||ee(t,en(e))||ee(t,e))}function Ms(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:f,data:p,setupState:m,ctx:g,inheritAttrs:y}=t,b=$r(t);let R,I;try{if(n.shapeFlag&4){const N=s||r,j=N;R=rt(l.call(j,N,u,f,m,p,g)),I=a}else{const N=e;R=rt(N.length>1?N(f,{attrs:a,slots:o,emit:c}):N(f,null)),I=e.props?a:ad(a)}}catch(N){qn.length=0,ls(N,t,1),R=Y(Yt)}let P=R;if(I&&y!==!1){const N=Object.keys(I),{shapeFlag:j}=P;N.length&&j&7&&(i&&N.some(Oi)&&(I=cd(I,i)),P=bn(P,I,!1,!0))}return n.dirs&&(P=bn(P,null,!1,!0),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&ji(P,n.transition),R=P,$r(b),R}const ad=t=>{let e;for(const n in t)(n==="class"||n==="style"||ts(n))&&((e||(e={}))[n]=t[n]);return e},cd=(t,e)=>{const n={};for(const r in t)(!Oi(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function ld(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Ao(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(o[p]!==r[p]&&!fs(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Ao(r,o,l):!0:!!o;return!1}function Ao(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!fs(n,i))return!0}return!1}function ud({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Kc=t=>t.__isSuspense;function fd(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):wf(t)}const de=Symbol.for("v-fgt"),ds=Symbol.for("v-txt"),Yt=Symbol.for("v-cmt"),Ls=Symbol.for("v-stc"),qn=[];let Fe=null;function z(t=!1){qn.push(Fe=t?null:[])}function dd(){qn.pop(),Fe=qn[qn.length-1]||null}let Qn=1;function Oo(t){Qn+=t,t<0&&Fe&&(Fe.hasOnce=!0)}function Gc(t){return t.dynamicChildren=Qn>0?Fe||ln:null,dd(),Qn>0&&Fe&&Fe.push(t),t}function K(t,e,n,r,s,i){return Gc(C(t,e,n,r,s,i,!0))}function Jc(t,e,n,r,s){return Gc(Y(t,e,n,r,s,!0))}function jr(t){return t?t.__v_isVNode===!0:!1}function Dn(t,e){return t.type===e.type&&t.key===e.key}const Yc=({key:t})=>t??null,Or=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?he(t)||Ee(t)||W(t)?{i:Ue,r:t,k:e,f:!!n}:t:null);function C(t,e=null,n=null,r=0,s=null,i=t===de?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Yc(e),ref:e&&Or(e),scopeId:Sc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ue};return a?(zi(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=he(n)?8:16),Qn>0&&!o&&Fe&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Fe.push(c),c}const Y=hd;function hd(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Lf)&&(t=Yt),jr(t)){const a=bn(t,e,!0);return n&&zi(a,n),Qn>0&&!i&&Fe&&(a.shapeFlag&6?Fe[Fe.indexOf(t)]=a:Fe.push(a)),a.patchFlag=-2,a}if(Sd(t)&&(t=t.__vccOpts),e){e=pd(e);let{class:a,style:c}=e;a&&!he(a)&&(e.class=xi(a)),ue(c)&&($i(c)&&!H(c)&&(c=me({},c)),e.style=ki(c))}const o=he(t)?1:Kc(t)?128:If(t)?64:ue(t)?4:W(t)?2:0;return C(t,e,n,r,s,o,i,!0)}function pd(t){return t?$i(t)||Mc(t)?me({},t):t:null}function bn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=t,l=e?md(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Yc(l),ref:e&&e.ref?n&&i?H(i)?i.concat(Or(e)):[i,Or(e)]:Or(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==de?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&bn(t.ssContent),ssFallback:t.ssFallback&&bn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&ji(u,c.clone(u)),u}function Xc(t=" ",e=0){return Y(ds,null,t,e)}function qe(t="",e=!1){return e?(z(),Jc(Yt,null,t)):Y(Yt,null,t)}function rt(t){return t==null||typeof t=="boolean"?Y(Yt):H(t)?Y(de,null,t.slice()):jr(t)?Rt(t):Y(ds,null,String(t))}function Rt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:bn(t)}function zi(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),zi(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Mc(e)?e._ctx=Ue:s===3&&Ue&&(Ue.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else W(e)?(e={default:e,_ctx:Ue},n=32):(e=String(e),r&64?(n=16,e=[Xc(e)]):n=8);t.children=e,t.shapeFlag|=n}function md(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=xi([e.class,r.class]));else if(s==="style")e.style=ki([e.style,r.style]);else if(ts(s)){const i=e[s],o=r[s];o&&i!==o&&!(H(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function tt(t,e,n,r=null){ct(t,e,7,[n,r])}const gd=xc();let _d=0;function yd(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||gd,i={uid:_d++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Wu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Uc(r,s),emitsOptions:zc(r,s),emit:null,emitted:null,propsDefaults:ie,inheritAttrs:r.inheritAttrs,ctx:ie,data:ie,props:ie,attrs:ie,slots:ie,refs:ie,setupState:ie,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=od.bind(null,i),t.ce&&t.ce(i),i}let we=null,Vr,li;{const t=is(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Vr=e("__VUE_INSTANCE_SETTERS__",n=>we=n),li=e("__VUE_SSR_SETTERS__",n=>Zn=n)}const fr=t=>{const e=we;return Vr(t),t.scope.on(),()=>{t.scope.off(),Vr(e)}},Co=()=>{we&&we.scope.off(),Vr(null)};function Qc(t){return t.vnode.shapeFlag&4}let Zn=!1;function vd(t,e=!1,n=!1){e&&li(e);const{props:r,children:s}=t.vnode,i=Qc(t);zf(t,r,i,e),Yf(t,s,n);const o=i?bd(t,e):void 0;return e&&li(!1),o}function bd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Ff);const{setup:r}=n;if(r){Lt();const s=t.setupContext=r.length>1?Ed(t):null,i=fr(t),o=ur(r,t,0,[t.props,s]),a=Ja(o);if(Ut(),i(),(a||t.sp)&&!Vn(t)&&Ac(t),a){if(o.then(Co,Co),e)return o.then(c=>{Po(t,c,e)}).catch(c=>{ls(c,t,0)});t.asyncDep=o}else Po(t,o,e)}else Zc(t,e)}function Po(t,e,n){W(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ue(e)&&(t.setupState=vc(e)),Zc(t,n)}let ko;function Zc(t,e,n){const r=t.type;if(!t.render){if(!e&&ko&&!r.render){const s=r.template||Wi(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=me(me({isCustomElement:i,delimiters:a},o),c);r.render=ko(s,l)}}t.render=r.render||st}{const s=fr(t);Lt();try{$f(t)}finally{Ut(),s()}}}const wd={get(t,e){return ve(t,"get",""),t[e]}};function Ed(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,wd),slots:t.slots,emit:t.emit,expose:e}}function hs(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(vc(ff(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Wn)return Wn[n](t)},has(e,n){return n in e||n in Wn}})):t.proxy}function Id(t,e=!0){return W(t)?t.displayName||t.name:t.name||e&&t.__name}function Sd(t){return W(t)&&"__vccOpts"in t}const Ce=(t,e)=>gf(t,e,Zn);function el(t,e,n){const r=arguments.length;return r===2?ue(e)&&!H(e)?jr(e)?Y(t,null,[e]):Y(t,e):Y(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&jr(n)&&(n=[n]),Y(t,e,n))}const Td="3.5.12";/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ui;const xo=typeof window<"u"&&window.trustedTypes;if(xo)try{ui=xo.createPolicy("vue",{createHTML:t=>t})}catch{}const tl=ui?t=>ui.createHTML(t):t=>t,Rd="http://www.w3.org/2000/svg",Ad="http://www.w3.org/1998/Math/MathML",ht=typeof document<"u"?document:null,No=ht&&ht.createElement("template"),Od={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?ht.createElementNS(Rd,t):e==="mathml"?ht.createElementNS(Ad,t):n?ht.createElement(t,{is:n}):ht.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>ht.createTextNode(t),createComment:t=>ht.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ht.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{No.innerHTML=tl(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=No.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Cd=Symbol("_vtc");function Pd(t,e,n){const r=t[Cd];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Do=Symbol("_vod"),kd=Symbol("_vsh"),xd=Symbol(""),Nd=/(^|;)\s*display\s*:/;function Dd(t,e,n){const r=t.style,s=he(n);let i=!1;if(n&&!s){if(e)if(he(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Cr(r,a,"")}else for(const o in e)n[o]==null&&Cr(r,o,"");for(const o in n)o==="display"&&(i=!0),Cr(r,o,n[o])}else if(s){if(e!==n){const o=r[xd];o&&(n+=";"+o),r.cssText=n,i=Nd.test(n)}}else e&&t.removeAttribute("style");Do in t&&(t[Do]=i?r.display:"",t[kd]&&(r.display="none"))}const Mo=/\s*!important$/;function Cr(t,e,n){if(H(n))n.forEach(r=>Cr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Md(t,e);Mo.test(n)?t.setProperty(en(r),n.replace(Mo,""),"important"):t[r]=n}}const Lo=["Webkit","Moz","ms"],Us={};function Md(t,e){const n=Us[e];if(n)return n;let r=Ve(e);if(r!=="filter"&&r in t)return Us[e]=r;r=ss(r);for(let s=0;s<Lo.length;s++){const i=Lo[s]+r;if(i in t)return Us[e]=i}return e}const Uo="http://www.w3.org/1999/xlink";function Fo(t,e,n,r,s,i=Hu(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Uo,e.slice(6,e.length)):t.setAttributeNS(Uo,e,n):n==null||i&&!Za(n)?t.removeAttribute(e):t.setAttribute(e,i?"":at(n)?String(n):n)}function $o(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?tl(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Za(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Wt(t,e,n,r){t.addEventListener(e,n,r)}function Ld(t,e,n,r){t.removeEventListener(e,n,r)}const Bo=Symbol("_vei");function Ud(t,e,n,r,s=null){const i=t[Bo]||(t[Bo]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Fd(e);if(r){const l=i[e]=Hd(r,s);Wt(t,a,l,c)}else o&&(Ld(t,a,o,c),i[e]=void 0)}}const Ho=/(?:Once|Passive|Capture)$/;function Fd(t){let e;if(Ho.test(t)){e={};let r;for(;r=t.match(Ho);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):en(t.slice(2)),e]}let Fs=0;const $d=Promise.resolve(),Bd=()=>Fs||($d.then(()=>Fs=0),Fs=Date.now());function Hd(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;ct(jd(r,n.value),e,5,[r])};return n.value=t,n.attached=Bd(),n}function jd(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const jo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Vd=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?Pd(t,r,o):e==="style"?Dd(t,n,r):ts(e)?Oi(e)||Ud(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Wd(t,e,r,o))?($o(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Fo(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!he(r))?$o(t,Ve(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Fo(t,e,r,o))};function Wd(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&jo(e)&&W(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return jo(e)&&he(n)?!1:e in t}const Wr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return H(e)?n=>Rr(e,n):e};function qd(t){t.target.composing=!0}function Vo(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const mn=Symbol("_assign"),zd={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[mn]=Wr(s);const i=r||s.props&&s.props.type==="number";Wt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Lr(a)),t[mn](a)}),n&&Wt(t,"change",()=>{t.value=t.value.trim()}),e||(Wt(t,"compositionstart",qd),Wt(t,"compositionend",Vo),Wt(t,"change",Vo))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[mn]=Wr(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?Lr(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},Kd={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=ns(e);Wt(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Lr(qr(o)):qr(o));t[mn](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Bi(()=>{t._assigning=!1})}),t[mn]=Wr(r)},mounted(t,{value:e}){Wo(t,e)},beforeUpdate(t,e,n){t[mn]=Wr(n)},updated(t,{value:e}){t._assigning||Wo(t,e)}};function Wo(t,e){const n=t.multiple,r=H(e);if(!(n&&!r&&!ns(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],a=qr(o);if(n)if(r){const c=typeof a;c==="string"||c==="number"?o.selected=e.some(l=>String(l)===String(a)):o.selected=Vu(e,a)>-1}else o.selected=e.has(a);else if(os(qr(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function qr(t){return"_value"in t?t._value:t.value}const Gd=me({patchProp:Vd},Od);let qo;function Jd(){return qo||(qo=Qf(Gd))}const Yd=(...t)=>{const e=Jd().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Qd(r);if(!s)return;const i=e._component;!W(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Xd(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Xd(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Qd(t){return he(t)?document.querySelector(t):t}var zo={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nl=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Zd=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},rl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(p=64)),r.push(n[u],n[f],n[p],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(nl(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Zd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||f==null)throw Error();const p=i<<2|a>>4;if(r.push(p),l!==64){const m=a<<4&240|l>>2;if(r.push(m),f!==64){const g=l<<6&192|f;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},eh=function(t){const e=nl(t);return rl.encodeByteArray(e,!0)},sl=function(t){return eh(t).replace(/\./g,"")},il=function(t){try{return rl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function th(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ie())}function nh(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function rh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sh(){const t=Ie();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ih(){try{return typeof indexedDB=="object"}catch{return!1}}function oh(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function ah(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ch=()=>ah().__FIREBASE_DEFAULTS__,lh=()=>{if(typeof process>"u"||typeof zo>"u")return;const t=zo.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},uh=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&il(t[1]);return e&&JSON.parse(e)},Ki=()=>{try{return ch()||lh()||uh()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},fh=t=>{var e,n;return(n=(e=Ki())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},dh=()=>{var t;return(t=Ki())===null||t===void 0?void 0:t.config},ol=t=>{var e;return(e=Ki())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph="FirebaseError";class Ft extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ph,Object.setPrototypeOf(this,Ft.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,dr.prototype.create)}}class dr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?mh(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ft(s,a,r)}}function mh(t,e){return t.replace(gh,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const gh=/\{\$([^}]+)}/g;function _h(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function zr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Ko(i)&&Ko(o)){if(!zr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ko(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Fn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function $n(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function yh(t,e){const n=new vh(t,e);return n.subscribe.bind(n)}class vh{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");bh(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=$s),s.error===void 0&&(s.error=$s),s.complete===void 0&&(s.complete=$s);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bh(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function $s(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(t){return t&&t._delegate?t._delegate:t}class wn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new hh;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ih(e))try{this.getOrInitializeService({instanceIdentifier:Vt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Vt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vt){return this.instances.has(e)}getOptions(e=Vt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Eh(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Vt){return this.component?this.component.multipleInstances?e:Vt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Eh(t){return t===Vt?void 0:t}function Ih(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new wh(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const Th={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},Rh=le.INFO,Ah={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},Oh=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Ah[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class al{constructor(e){this.name=e,this._logLevel=Rh,this._logHandler=Oh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Th[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const Ch=(t,e)=>e.some(n=>t instanceof n);let Go,Jo;function Ph(){return Go||(Go=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kh(){return Jo||(Jo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cl=new WeakMap,fi=new WeakMap,ll=new WeakMap,Bs=new WeakMap,Gi=new WeakMap;function xh(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Nt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&cl.set(n,t)}).catch(()=>{}),Gi.set(e,t),e}function Nh(t){if(fi.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});fi.set(t,e)}let di={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return fi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ll.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Dh(t){di=t(di)}function Mh(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Hs(this),e,...n);return ll.set(r,e.sort?e.sort():[e]),Nt(r)}:kh().includes(t)?function(...e){return t.apply(Hs(this),e),Nt(cl.get(this))}:function(...e){return Nt(t.apply(Hs(this),e))}}function Lh(t){return typeof t=="function"?Mh(t):(t instanceof IDBTransaction&&Nh(t),Ch(t,Ph())?new Proxy(t,di):t)}function Nt(t){if(t instanceof IDBRequest)return xh(t);if(Bs.has(t))return Bs.get(t);const e=Lh(t);return e!==t&&(Bs.set(t,e),Gi.set(e,t)),e}const Hs=t=>Gi.get(t);function Uh(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Nt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Nt(o.result),c.oldVersion,c.newVersion,Nt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const Fh=["get","getKey","getAll","getAllKeys","count"],$h=["put","add","delete","clear"],js=new Map;function Yo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(js.get(e))return js.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=$h.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Fh.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return js.set(e,i),i}Dh(t=>({...t,get:(e,n,r)=>Yo(e,n)||t.get(e,n,r),has:(e,n)=>!!Yo(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Hh(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Hh(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hi="@firebase/app",Xo="0.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt=new al("@firebase/app"),jh="@firebase/app-compat",Vh="@firebase/analytics-compat",Wh="@firebase/analytics",qh="@firebase/app-check-compat",zh="@firebase/app-check",Kh="@firebase/auth",Gh="@firebase/auth-compat",Jh="@firebase/database",Yh="@firebase/database-compat",Xh="@firebase/functions",Qh="@firebase/functions-compat",Zh="@firebase/installations",ep="@firebase/installations-compat",tp="@firebase/messaging",np="@firebase/messaging-compat",rp="@firebase/performance",sp="@firebase/performance-compat",ip="@firebase/remote-config",op="@firebase/remote-config-compat",ap="@firebase/storage",cp="@firebase/storage-compat",lp="@firebase/firestore",up="@firebase/firestore-compat",fp="firebase",dp="9.15.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi="[DEFAULT]",hp={[hi]:"fire-core",[jh]:"fire-core-compat",[Wh]:"fire-analytics",[Vh]:"fire-analytics-compat",[zh]:"fire-app-check",[qh]:"fire-app-check-compat",[Kh]:"fire-auth",[Gh]:"fire-auth-compat",[Jh]:"fire-rtdb",[Yh]:"fire-rtdb-compat",[Xh]:"fire-fn",[Qh]:"fire-fn-compat",[Zh]:"fire-iid",[ep]:"fire-iid-compat",[tp]:"fire-fcm",[np]:"fire-fcm-compat",[rp]:"fire-perf",[sp]:"fire-perf-compat",[ip]:"fire-rc",[op]:"fire-rc-compat",[ap]:"fire-gcs",[cp]:"fire-gcs-compat",[lp]:"fire-fst",[up]:"fire-fst-compat","fire-js":"fire-js",[fp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr=new Map,mi=new Map;function pp(t,e){try{t.container.addComponent(e)}catch(n){Xt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function er(t){const e=t.name;if(mi.has(e))return Xt.debug(`There were multiple attempts to register component ${e}.`),!1;mi.set(e,t);for(const n of Kr.values())pp(n,t);return!0}function ul(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Dt=new dr("app","Firebase",mp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Dt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps=dp;function fl(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:pi,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Dt.create("bad-app-name",{appName:String(s)});if(n||(n=dh()),!n)throw Dt.create("no-options");const i=Kr.get(s);if(i){if(zr(n,i.options)&&zr(r,i.config))return i;throw Dt.create("duplicate-app",{appName:s})}const o=new Sh(s);for(const c of mi.values())o.addComponent(c);const a=new gp(n,r,o);return Kr.set(s,a),a}function _p(t=pi){const e=Kr.get(t);if(!e&&t===pi)return fl();if(!e)throw Dt.create("no-app",{appName:t});return e}function gn(t,e,n){var r;let s=(r=hp[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xt.warn(a.join(" "));return}er(new wn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp="firebase-heartbeat-database",vp=1,tr="firebase-heartbeat-store";let Vs=null;function dl(){return Vs||(Vs=Uh(yp,vp,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(tr)}}}).catch(t=>{throw Dt.create("idb-open",{originalErrorMessage:t.message})})),Vs}async function bp(t){try{return(await dl()).transaction(tr).objectStore(tr).get(hl(t))}catch(e){if(e instanceof Ft)Xt.warn(e.message);else{const n=Dt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Xt.warn(n.message)}}}async function Qo(t,e){try{const r=(await dl()).transaction(tr,"readwrite");return await r.objectStore(tr).put(e,hl(t)),r.done}catch(n){if(n instanceof Ft)Xt.warn(n.message);else{const r=Dt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Xt.warn(r.message)}}}function hl(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp=1024,Ep=30*24*60*60*1e3;class Ip{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Tp(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Zo();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Ep}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Zo(),{heartbeatsToSend:n,unsentEntries:r}=Sp(this._heartbeatsCache.heartbeats),s=sl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Zo(){return new Date().toISOString().substring(0,10)}function Sp(t,e=wp){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ea(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ea(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Tp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ih()?oh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await bp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Qo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Qo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ea(t){return sl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rp(t){er(new wn("platform-logger",e=>new Bh(e),"PRIVATE")),er(new wn("heartbeat",e=>new Ip(e),"PRIVATE")),gn(hi,Xo,t),gn(hi,Xo,"esm2017"),gn("fire-js","")}Rp("");function Ji(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function pl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ap=pl,ml=new dr("auth","Firebase",pl());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta=new al("@firebase/auth");function Pr(t,...e){ta.logLevel<=le.ERROR&&ta.error(`Auth (${ps}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(t,...e){throw Yi(t,...e)}function it(t,...e){return Yi(t,...e)}function Op(t,e,n){const r=Object.assign(Object.assign({},Ap()),{[e]:n});return new dr("auth","Firebase",r).create(e,{appName:t.name})}function Yi(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ml.create(t,...e)}function $(t,e,...n){if(!t)throw Yi(e,...n)}function gt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Pr(e),new Error(e)}function yt(t,e){t||gt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na=new Map;function _t(t){yt(t instanceof Function,"Expected a class definition");let e=na.get(t);return e?(yt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,na.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cp(t,e){const n=ul(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(zr(i,e??{}))return s;Je(s,"already-initialized")}return n.initialize({options:e})}function Pp(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_t);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function kp(){return ra()==="http:"||ra()==="https:"}function ra(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(kp()||nh()||"connection"in navigator)?navigator.onLine:!0}function Np(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,n){this.shortDelay=e,this.longDelay=n,yt(n>e,"Short delay should be less than long delay!"),this.isMobile=th()||rh()}get(){return xp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(t,e){yt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;gt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;gt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;gt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp=new pr(3e4,6e4);function mr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Rn(t,e,n,r,s={}){return _l(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=hr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),gl.fetch()(yl(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function _l(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Dp),e);try{const s=new Lp(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Tr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Tr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Tr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Tr(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Op(t,u,l);Je(t,u)}}catch(s){if(s instanceof Ft)throw s;Je(t,"network-request-failed")}}async function ms(t,e,n,r,s={}){const i=await Rn(t,e,n,r,s);return"mfaPendingCredential"in i&&Je(t,"multi-factor-auth-required",{_serverResponse:i}),i}function yl(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Xi(t.config,s):`${t.config.apiScheme}://${s}`}class Lp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(it(this.auth,"network-request-failed")),Mp.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Tr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=it(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Up(t,e){return Rn(t,"POST","/v1/accounts:delete",e)}async function Fp(t,e){return Rn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $p(t,e=!1){const n=lt(t),r=await n.getIdToken(e),s=Qi(r);$(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:zn(Ws(s.auth_time)),issuedAtTime:zn(Ws(s.iat)),expirationTime:zn(Ws(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ws(t){return Number(t)*1e3}function Qi(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Pr("JWT malformed, contained fewer than 3 sections"),null;try{const s=il(n);return s?JSON.parse(s):(Pr("Failed to decode base64 JWT payload"),null)}catch(s){return Pr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Bp(t){const e=Qi(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ft&&Hp(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Hp({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=zn(this.lastLoginAt),this.creationTime=zn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await nr(t,Fp(n,{idToken:r}));$(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?qp(i.providerUserInfo):[],a=Wp(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new vl(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function Vp(t){const e=lt(t);await Jr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Wp(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function qp(t){return t.map(e=>{var{providerId:n}=e,r=Ji(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zp(t,e){const n=await _l(t,{},async()=>{const r=hr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=yl(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",gl.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Bp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return $(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await zp(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new rr;return r&&($(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&($(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&($(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new rr,this.toJSON())}_performRefresh(){return gt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Kt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ji(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new jp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new vl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await nr(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return $p(this,e)}reload(){return Vp(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Kt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Jr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await nr(this,Up(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,R=(l=n.createdAt)!==null&&l!==void 0?l:void 0,I=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:P,emailVerified:N,isAnonymous:j,providerData:X,stsTokenManager:G}=n;$(P&&G,e,"internal-error");const ge=rr.fromJSON(this.name,G);$(typeof P=="string",e,"internal-error"),Et(f,e.name),Et(p,e.name),$(typeof N=="boolean",e,"internal-error"),$(typeof j=="boolean",e,"internal-error"),Et(m,e.name),Et(g,e.name),Et(y,e.name),Et(b,e.name),Et(R,e.name),Et(I,e.name);const Se=new Kt({uid:P,auth:e,email:p,emailVerified:N,displayName:f,isAnonymous:j,photoURL:g,phoneNumber:m,tenantId:y,stsTokenManager:ge,createdAt:R,lastLoginAt:I});return X&&Array.isArray(X)&&(Se.providerData=X.map(Be=>Object.assign({},Be))),b&&(Se._redirectEventId=b),Se}static async _fromIdTokenResponse(e,n,r=!1){const s=new rr;s.updateFromServerResponse(n);const i=new Kt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Jr(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}bl.type="NONE";const sa=bl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(t,e,n){return`firebase:${t}:${e}:${n}`}class _n{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=kr(this.userKey,s.apiKey,i),this.fullPersistenceKey=kr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Kt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new _n(_t(sa),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||_t(sa);const o=kr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const f=Kt._fromJSON(e,u);l!==i&&(a=f),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new _n(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new _n(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ia(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Il(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(wl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Tl(e))return"Blackberry";if(Rl(e))return"Webos";if(Zi(e))return"Safari";if((e.includes("chrome/")||El(e))&&!e.includes("edge/"))return"Chrome";if(Sl(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function wl(t=Ie()){return/firefox\//i.test(t)}function Zi(t=Ie()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function El(t=Ie()){return/crios\//i.test(t)}function Il(t=Ie()){return/iemobile/i.test(t)}function Sl(t=Ie()){return/android/i.test(t)}function Tl(t=Ie()){return/blackberry/i.test(t)}function Rl(t=Ie()){return/webos/i.test(t)}function gs(t=Ie()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Kp(t=Ie()){var e;return gs(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Gp(){return sh()&&document.documentMode===10}function Al(t=Ie()){return gs(t)||Sl(t)||Rl(t)||Tl(t)||/windows phone/i.test(t)||Il(t)}function Jp(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(t,e=[]){let n;switch(t){case"Browser":n=ia(Ie());break;case"Worker":n=`${ia(Ie())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ps}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new oa(this),this.idTokenSubscription=new oa(this),this.beforeStateQueue=new Yp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ml,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=_t(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await _n.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Jr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Np()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?lt(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(_t(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new dr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&_t(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await _n.create(this,[_t(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return $(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ol(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function _s(t){return lt(t)}class oa{constructor(e){this.auth=e,this.observer=null,this.addObserver=yh(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Qp(t,e,n){const r=_s(t);$(r._canInitEmulator,r,"emulator-config-failed"),$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Cl(e),{host:o,port:a}=Zp(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),em()}function Cl(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Zp(t){const e=Cl(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:aa(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:aa(o)}}}function aa(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function em(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return gt("not implemented")}_getIdTokenResponse(e){return gt("not implemented")}_linkToIdToken(e,n){return gt("not implemented")}_getReauthenticationResolver(e){return gt("not implemented")}}async function tm(t,e){return Rn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nm(t,e){return ms(t,"POST","/v1/accounts:signInWithPassword",mr(t,e))}async function rm(t,e){return Rn(t,"POST","/v1/accounts:sendOobCode",mr(t,e))}async function sm(t,e){return rm(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function im(t,e){return ms(t,"POST","/v1/accounts:signInWithEmailLink",mr(t,e))}async function om(t,e){return ms(t,"POST","/v1/accounts:signInWithEmailLink",mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends eo{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new sr(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new sr(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return nm(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return im(e,{email:this._email,oobCode:this._password});default:Je(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return tm(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return om(e,{idToken:n,email:this._email,oobCode:this._password});default:Je(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yn(t,e){return ms(t,"POST","/v1/accounts:signInWithIdp",mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am="http://localhost";class Qt extends eo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Qt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Je("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ji(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Qt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return yn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,yn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,yn(e,n)}buildRequest(){const e={requestUri:am,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=hr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cm(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function lm(t){const e=Fn($n(t)).link,n=e?Fn($n(e)).deep_link_id:null,r=Fn($n(t)).deep_link_id;return(r?Fn($n(r)).link:null)||r||n||e||t}class ys{constructor(e){var n,r,s,i,o,a;const c=Fn($n(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,f=cm((s=c.mode)!==null&&s!==void 0?s:null);$(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=lm(e);try{return new ys(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(){this.providerId=An.PROVIDER_ID}static credential(e,n){return sr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ys.parseLink(n);return $(r,"argument-error"),sr._fromEmailAndCode(e,r.code,r.tenantId)}}An.PROVIDER_ID="password";An.EMAIL_PASSWORD_SIGN_IN_METHOD="password";An.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr extends Pl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends gr{constructor(){super("facebook.com")}static credential(e){return Qt._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ot.credential(e.oauthAccessToken)}catch{return null}}}Ot.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ot.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends gr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Qt._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ct.credential(n,r)}catch{return null}}}Ct.GOOGLE_SIGN_IN_METHOD="google.com";Ct.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends gr{constructor(){super("github.com")}static credential(e){return Qt._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pt.credential(e.oauthAccessToken)}catch{return null}}}Pt.GITHUB_SIGN_IN_METHOD="github.com";Pt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends gr{constructor(){super("twitter.com")}static credential(e,n){return Qt._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return kt.credential(n,r)}catch{return null}}}kt.TWITTER_SIGN_IN_METHOD="twitter.com";kt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Kt._fromIdTokenResponse(e,r,s),o=ca(r);return new En({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ca(r);return new En({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ca(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr extends Ft{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Yr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Yr(e,n,r,s)}}function kl(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Yr._fromErrorAndOperation(t,i,e,r):i})}async function um(t,e,n=!1){const r=await nr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return En._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fm(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await nr(t,kl(r,s,e,t),n);$(i.idToken,r,"internal-error");const o=Qi(i.idToken);$(o,r,"internal-error");const{sub:a}=o;return $(t.uid===a,r,"user-mismatch"),En._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Je(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xl(t,e,n=!1){const r="signIn",s=await kl(t,r,e),i=await En._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function dm(t,e){return xl(_s(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hm(t,e,n){var r;$(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),$(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&($(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&($(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nl(t,e,n){const r=lt(t),s={requestType:"EMAIL_SIGNIN",email:e};$(n.handleCodeInApp,r,"argument-error"),n&&hm(r,s,n),await sm(r,s)}function Dl(t,e){const n=ys.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function Ml(t,e,n){const r=lt(t),s=An.credentialWithLink(e,n||Gr());return $(s._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),dm(r,s)}function pm(t,e,n,r){return lt(t).onIdTokenChanged(e,n,r)}function mm(t,e,n){return lt(t).beforeAuthStateChanged(e,n)}function gm(t,e,n,r){return lt(t).onAuthStateChanged(e,n,r)}function _m(t){return lt(t).signOut()}const Xr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xr,"1"),this.storage.removeItem(Xr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ym(){const t=Ie();return Zi(t)||gs(t)}const vm=1e3,bm=10;class Ul extends Ll{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ym()&&Jp(),this.fallbackToPolling=Al(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Gp()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,bm):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},vm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ul.type="LOCAL";const wm=Ul;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl extends Ll{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Fl.type="SESSION";const $l=Fl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Em(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new vs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Em(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=to("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const p=f;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(){return window}function Sm(t){ot().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(){return typeof ot().WorkerGlobalScope<"u"&&typeof ot().importScripts=="function"}async function Tm(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Rm(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Am(){return Bl()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl="firebaseLocalStorageDb",Om=1,Qr="firebaseLocalStorage",jl="fbase_key";class _r{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function bs(t,e){return t.transaction([Qr],e?"readwrite":"readonly").objectStore(Qr)}function Cm(){const t=indexedDB.deleteDatabase(Hl);return new _r(t).toPromise()}function gi(){const t=indexedDB.open(Hl,Om);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Qr,{keyPath:jl})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Qr)?e(r):(r.close(),await Cm(),e(await gi()))})})}async function la(t,e,n){const r=bs(t,!0).put({[jl]:e,value:n});return new _r(r).toPromise()}async function Pm(t,e){const n=bs(t,!1).get(e),r=await new _r(n).toPromise();return r===void 0?null:r.value}function ua(t,e){const n=bs(t,!0).delete(e);return new _r(n).toPromise()}const km=800,xm=3;class Vl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gi(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>xm)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vs._getInstance(Am()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Tm(),!this.activeServiceWorker)return;this.sender=new Im(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Rm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gi();return await la(e,Xr,"1"),await ua(e,Xr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>la(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Pm(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ua(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=bs(s,!1).getAll();return new _r(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),km)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Vl.type="LOCAL";const Nm=Vl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dm(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Mm(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=it("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Dm().appendChild(r)})}function Lm(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new pr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Um(t,e){return e?_t(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no extends eo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return yn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return yn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return yn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Fm(t){return xl(t.auth,new no(t),t.bypassAuthState)}function $m(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),fm(n,new no(t),t.bypassAuthState)}async function Bm(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),um(n,new no(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Fm;case"linkViaPopup":case"linkViaRedirect":return Bm;case"reauthViaPopup":case"reauthViaRedirect":return $m;default:Je(this.auth,"internal-error")}}resolve(e){yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm=new pr(2e3,1e4);class cn extends Wl{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,cn.currentPopupAction&&cn.currentPopupAction.cancel(),cn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){yt(this.filter.length===1,"Popup operations only handle one event");const e=to();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(it(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(it(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,cn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(it(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Hm.get())};e()}}cn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm="pendingRedirect",xr=new Map;class Vm extends Wl{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=xr.get(this.auth._key());if(!e){try{const r=await Wm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}xr.set(this.auth._key(),e)}return this.bypassAuthState||xr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Wm(t,e){const n=Km(e),r=zm(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function qm(t,e){xr.set(t._key(),e)}function zm(t){return _t(t._redirectPersistence)}function Km(t){return kr(jm,t.config.apiKey,t.name)}async function Gm(t,e,n=!1){const r=_s(t),s=Um(r,e),o=await new Vm(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm=10*60*1e3;class Ym{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Xm(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ql(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(it(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Jm&&this.cachedEventUids.clear(),this.cachedEventUids.has(fa(e))}saveEventToCache(e){this.cachedEventUids.add(fa(e)),this.lastProcessedEventTime=Date.now()}}function fa(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ql({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Xm(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ql(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qm(t,e={}){return Rn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,eg=/^https?/;async function tg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Qm(t);for(const n of e)try{if(ng(n))return}catch{}Je(t,"unauthorized-domain")}function ng(t){const e=Gr(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!eg.test(n))return!1;if(Zm.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg=new pr(3e4,6e4);function da(){const t=ot().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function sg(t){return new Promise((e,n)=>{var r,s,i;function o(){da(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{da(),n(it(t,"network-request-failed"))},timeout:rg.get()})}if(!((s=(r=ot().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=ot().gapi)===null||i===void 0)&&i.load)o();else{const a=Lm("iframefcb");return ot()[a]=()=>{gapi.load?o():n(it(t,"network-request-failed"))},Mm(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Nr=null,e})}let Nr=null;function ig(t){return Nr=Nr||sg(t),Nr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og=new pr(5e3,15e3),ag="__/auth/iframe",cg="emulator/auth/iframe",lg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ug=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fg(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Xi(e,cg):`https://${t.config.authDomain}/${ag}`,r={apiKey:e.apiKey,appName:t.name,v:ps},s=ug.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${hr(r).slice(1)}`}async function dg(t){const e=await ig(t),n=ot().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:fg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=it(t,"network-request-failed"),a=ot().setTimeout(()=>{i(o)},og.get());function c(){ot().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pg=500,mg=600,gg="_blank",_g="http://localhost";class ha{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yg(t,e,n,r=pg,s=mg){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},hg),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Ie().toLowerCase();n&&(a=El(l)?gg:n),wl(l)&&(e=e||_g,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[m,g])=>`${p}${m}=${g},`,"");if(Kp(l)&&a!=="_self")return vg(e||"",a),new ha(null);const f=window.open(e||"",a,u);$(f,t,"popup-blocked");try{f.focus()}catch{}return new ha(f)}function vg(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg="__/auth/handler",wg="emulator/auth/handler";function pa(t,e,n,r,s,i){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ps,eventId:s};if(e instanceof Pl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",_h(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries({}))o[c]=l}if(e instanceof gr){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Eg(t)}?${hr(a).slice(1)}`}function Eg({config:t}){return t.emulator?Xi(t,wg):`https://${t.authDomain}/${bg}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs="webStorageSupport";class Ig{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$l,this._completeRedirectFn=Gm,this._overrideRedirectResult=qm}async _openPopup(e,n,r,s){var i;yt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=pa(e,n,r,Gr(),s);return yg(e,o,to())}async _openRedirect(e,n,r,s){return await this._originValidation(e),Sm(pa(e,n,r,Gr(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(yt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await dg(e),r=new Ym(e);return n.register("authEvent",s=>($(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(qs,{type:qs},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[qs];o!==void 0&&n(!!o),Je(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=tg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Al()||Zi()||gs()}}const Sg=Ig;var ma="@firebase/auth",ga="0.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ag(t){er(new wn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{$(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),$(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ol(t)},u=new Xp(a,c,l);return Pp(u,n),u})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),er(new wn("auth-internal",e=>{const n=_s(e.getProvider("auth").getImmediate());return(r=>new Tg(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),gn(ma,ga,Rg(t)),gn(ma,ga,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og=5*60,Cg=ol("authIdTokenMaxAge")||Og;let _a=null;const Pg=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Cg)return;const s=n==null?void 0:n.token;_a!==s&&(_a=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function vn(t=_p()){const e=ul(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Cp(t,{popupRedirectResolver:Sg,persistence:[Nm,wm,$l]}),r=ol("authTokenSyncURL");if(r){const i=Pg(r);mm(n,i,()=>i(n.currentUser)),pm(n,o=>i(o))}const s=fh("auth");return s&&Qp(n,`http://${s}`),n}Ag("Browser");const kg={__name:"App",setup(t){const e=_e(null);return Tn(()=>{const n=vn();gm(n,r=>{e.value=r})}),(n,r)=>{const s=Vi("router-view");return z(),Jc(s,{user:e.value},null,8,["user"])}}},xg=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Ng={},Dg={class:"footer"};function Mg(t,e){return z(),K("div",Dg,e[0]||(e[0]=[C("p",null,"Two Trees Olive Oil ®",-1),C("p",null,[Xc("2024 "),C("a",{href:"https://javicalonge.github.io/portfolio/",target:"_blank",rel:"noopener noreferrer"},"Javi Calonge")],-1)]))}const On=xg(Ng,[["render",Mg]]),ro="/assets/logo-hexagon-CPXM5FB7.svg";/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const an=typeof document<"u";function zl(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Lg(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&zl(t.default)}const re=Object.assign;function zs(t,e){const n={};for(const r in e){const s=e[r];n[r]=Ye(s)?s.map(t):t(s)}return n}const Kn=()=>{},Ye=Array.isArray,Kl=/#/g,Ug=/&/g,Fg=/\//g,$g=/=/g,Bg=/\?/g,Gl=/\+/g,Hg=/%5B/g,jg=/%5D/g,Jl=/%5E/g,Vg=/%60/g,Yl=/%7B/g,Wg=/%7C/g,Xl=/%7D/g,qg=/%20/g;function so(t){return encodeURI(""+t).replace(Wg,"|").replace(Hg,"[").replace(jg,"]")}function zg(t){return so(t).replace(Yl,"{").replace(Xl,"}").replace(Jl,"^")}function _i(t){return so(t).replace(Gl,"%2B").replace(qg,"+").replace(Kl,"%23").replace(Ug,"%26").replace(Vg,"`").replace(Yl,"{").replace(Xl,"}").replace(Jl,"^")}function Kg(t){return _i(t).replace($g,"%3D")}function Gg(t){return so(t).replace(Kl,"%23").replace(Bg,"%3F")}function Jg(t){return t==null?"":Gg(t).replace(Fg,"%2F")}function ir(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Yg=/\/$/,Xg=t=>t.replace(Yg,"");function Ks(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=t_(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:ir(o)}}function Qg(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ya(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Zg(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&In(e.matched[r],n.matched[s])&&Ql(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function In(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ql(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!e_(t[n],e[n]))return!1;return!0}function e_(t,e){return Ye(t)?va(t,e):Ye(e)?va(e,t):t===e}function va(t,e){return Ye(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function t_(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const It={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var or;(function(t){t.pop="pop",t.push="push"})(or||(or={}));var Gn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Gn||(Gn={}));function n_(t){if(!t)if(an){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Xg(t)}const r_=/^[^#]+#/;function s_(t,e){return t.replace(r_,"#")+e}function i_(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ws=()=>({left:window.scrollX,top:window.scrollY});function o_(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=i_(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function ba(t,e){return(history.state?history.state.position-e:-1)+t}const yi=new Map;function a_(t,e){yi.set(t,e)}function c_(t){const e=yi.get(t);return yi.delete(t),e}let l_=()=>location.protocol+"//"+location.host;function Zl(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),ya(c,"")}return ya(n,t)+r+s}function u_(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const m=Zl(t,location),g=n.value,y=e.value;let b=0;if(p){if(n.value=m,e.value=p,o&&o===g){o=null;return}b=y?p.position-y.position:0}else r(m);s.forEach(R=>{R(n.value,g,{delta:b,type:or.pop,direction:b?b>0?Gn.forward:Gn.back:Gn.unknown})})};function c(){o=n.value}function l(p){s.push(p);const m=()=>{const g=s.indexOf(p);g>-1&&s.splice(g,1)};return i.push(m),m}function u(){const{history:p}=window;p.state&&p.replaceState(re({},p.state,{scroll:ws()}),"")}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:f}}function wa(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ws():null}}function f_(t){const{history:e,location:n}=window,r={value:Zl(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const f=t.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:l_()+t+c;try{e[u?"replaceState":"pushState"](l,"",p),s.value=l}catch(m){console.error(m),n[u?"replace":"assign"](p)}}function o(c,l){const u=re({},e.state,wa(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=re({},s.value,e.state,{forward:c,scroll:ws()});i(u.current,u,!0);const f=re({},wa(r.value,c,null),{position:u.position+1},l);i(c,f,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function d_(t){t=n_(t);const e=f_(t),n=u_(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=re({location:"",base:t,go:r,createHref:s_.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function h_(t){return typeof t=="string"||t&&typeof t=="object"}function eu(t){return typeof t=="string"||typeof t=="symbol"}const tu=Symbol("");var Ea;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ea||(Ea={}));function Sn(t,e){return re(new Error,{type:t,[tu]:!0},e)}function dt(t,e){return t instanceof Error&&tu in t&&(e==null||!!(t.type&e))}const Ia="[^/]+?",p_={sensitive:!1,strict:!1,start:!0,end:!0},m_=/[.+*?^${}()[\]/\\]/g;function g_(t,e){const n=re({},p_,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let f=0;f<l.length;f++){const p=l[f];let m=40+(n.sensitive?.25:0);if(p.type===0)f||(s+="/"),s+=p.value.replace(m_,"\\$&"),m+=40;else if(p.type===1){const{value:g,repeatable:y,optional:b,regexp:R}=p;i.push({name:g,repeatable:y,optional:b});const I=R||Ia;if(I!==Ia){m+=10;try{new RegExp(`(${I})`)}catch(N){throw new Error(`Invalid custom RegExp for param "${g}" (${I}): `+N.message)}}let P=y?`((?:${I})(?:/(?:${I}))*)`:`(${I})`;f||(P=b&&l.length<2?`(?:/${P})`:"/"+P),b&&(P+="?"),s+=P,m+=20,b&&(m+=-8),y&&(m+=-20),I===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let p=1;p<u.length;p++){const m=u[p]||"",g=i[p-1];f[g.name]=m&&g.repeatable?m.split("/"):m}return f}function c(l){let u="",f=!1;for(const p of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of p)if(m.type===0)u+=m.value;else if(m.type===1){const{value:g,repeatable:y,optional:b}=m,R=g in l?l[g]:"";if(Ye(R)&&!y)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const I=Ye(R)?R.join("/"):R;if(!I)if(b)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=I}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function __(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function nu(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=__(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Sa(r))return 1;if(Sa(s))return-1}return s.length-r.length}function Sa(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const y_={type:0,value:""},v_=/[a-zA-Z0-9_]/;function b_(t){if(!t)return[[]];if(t==="/")return[[y_]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function f(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:v_.test(c)?p():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),f(),o(),s}function w_(t,e,n){const r=g_(b_(t.path),n),s=re(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function E_(t,e){const n=[],r=new Map;e=Oa({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,p,m){const g=!m,y=Ra(f);y.aliasOf=m&&m.record;const b=Oa(e,f),R=[y];if("alias"in f){const N=typeof f.alias=="string"?[f.alias]:f.alias;for(const j of N)R.push(Ra(re({},y,{components:m?m.record.components:y.components,path:j,aliasOf:m?m.record:y})))}let I,P;for(const N of R){const{path:j}=N;if(p&&j[0]!=="/"){const X=p.record.path,G=X[X.length-1]==="/"?"":"/";N.path=p.record.path+(j&&G+j)}if(I=w_(N,p,b),m?m.alias.push(I):(P=P||I,P!==I&&P.alias.push(I),g&&f.name&&!Aa(I)&&o(f.name)),ru(I)&&c(I),y.children){const X=y.children;for(let G=0;G<X.length;G++)i(X[G],I,m&&m.children[G])}m=m||I}return P?()=>{o(P)}:Kn}function o(f){if(eu(f)){const p=r.get(f);p&&(r.delete(f),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(f);p>-1&&(n.splice(p,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){const p=T_(f,n);n.splice(p,0,f),f.record.name&&!Aa(f)&&r.set(f.record.name,f)}function l(f,p){let m,g={},y,b;if("name"in f&&f.name){if(m=r.get(f.name),!m)throw Sn(1,{location:f});b=m.record.name,g=re(Ta(p.params,m.keys.filter(P=>!P.optional).concat(m.parent?m.parent.keys.filter(P=>P.optional):[]).map(P=>P.name)),f.params&&Ta(f.params,m.keys.map(P=>P.name))),y=m.stringify(g)}else if(f.path!=null)y=f.path,m=n.find(P=>P.re.test(y)),m&&(g=m.parse(y),b=m.record.name);else{if(m=p.name?r.get(p.name):n.find(P=>P.re.test(p.path)),!m)throw Sn(1,{location:f,currentLocation:p});b=m.record.name,g=re({},p.params,f.params),y=m.stringify(g)}const R=[];let I=m;for(;I;)R.unshift(I.record),I=I.parent;return{name:b,path:y,params:g,matched:R,meta:S_(R)}}t.forEach(f=>i(f));function u(){n.length=0,r.clear()}return{addRoute:i,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function Ta(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Ra(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:I_(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function I_(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Aa(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function S_(t){return t.reduce((e,n)=>re(e,n.meta),{})}function Oa(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function T_(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;nu(t,e[i])<0?r=i:n=i+1}const s=R_(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function R_(t){let e=t;for(;e=e.parent;)if(ru(e)&&nu(t,e)===0)return e}function ru({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function A_(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Gl," "),o=i.indexOf("="),a=ir(o<0?i:i.slice(0,o)),c=o<0?null:ir(i.slice(o+1));if(a in e){let l=e[a];Ye(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Ca(t){let e="";for(let n in t){const r=t[n];if(n=Kg(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ye(r)?r.map(i=>i&&_i(i)):[r&&_i(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function O_(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Ye(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const C_=Symbol(""),Pa=Symbol(""),Es=Symbol(""),io=Symbol(""),vi=Symbol("");function Mn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function At(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=p=>{p===!1?c(Sn(4,{from:n,to:e})):p instanceof Error?c(p):h_(p)?c(Sn(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),a())},u=i(()=>t.call(r&&r.instances[s],e,n,l));let f=Promise.resolve(u);t.length<3&&(f=f.then(l)),f.catch(p=>c(p))})}function Gs(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(zl(c)){const u=(c.__vccOpts||c)[e];u&&i.push(At(u,n,r,o,a,s))}else{let l=c();i.push(()=>l.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=Lg(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const m=(f.__vccOpts||f)[e];return m&&At(m,n,r,o,a,s)()}))}}return i}function ka(t){const e=Ge(Es),n=Ge(io),r=Ce(()=>{const c=Ke(t.to);return e.resolve(c)}),s=Ce(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const p=f.findIndex(In.bind(null,u));if(p>-1)return p;const m=xa(c[l-2]);return l>1&&xa(u)===m&&f[f.length-1].path!==m?f.findIndex(In.bind(null,c[l-2])):p}),i=Ce(()=>s.value>-1&&x_(n.params,r.value.params)),o=Ce(()=>s.value>-1&&s.value===n.matched.length-1&&Ql(n.params,r.value.params));function a(c={}){return k_(c)?e[Ke(t.replace)?"replace":"push"](Ke(t.to)).catch(Kn):Promise.resolve()}return{route:r,href:Ce(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const P_=Rc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ka,setup(t,{slots:e}){const n=cs(ka(t)),{options:r}=Ge(Es),s=Ce(()=>({[Na(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Na(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:el("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),ar=P_;function k_(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function x_(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ye(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function xa(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Na=(t,e,n)=>t??e??n,N_=Rc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ge(vi),s=Ce(()=>t.route||r.value),i=Ge(Pa,0),o=Ce(()=>{let l=Ke(i);const{matched:u}=s.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=Ce(()=>s.value.matched[o.value]);Ar(Pa,Ce(()=>o.value+1)),Ar(C_,a),Ar(vi,s);const c=_e();return pn(()=>[c.value,a.value,t.name],([l,u,f],[p,m,g])=>{u&&(u.instances[f]=l,m&&m!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!In(u,m)||!p)&&(u.enterCallbacks[f]||[]).forEach(y=>y(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,f=a.value,p=f&&f.components[u];if(!p)return Da(n.default,{Component:p,route:l});const m=f.props[u],g=m?m===!0?l.params:typeof m=="function"?m(l):m:null,b=el(p,re({},g,e,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return Da(n.default,{Component:b,route:l})||b}}});function Da(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const D_=N_;function M_(t){const e=E_(t.routes,t),n=t.parseQuery||A_,r=t.stringifyQuery||Ca,s=t.history,i=Mn(),o=Mn(),a=Mn(),c=df(It);let l=It;an&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=zs.bind(null,E=>""+E),f=zs.bind(null,Jg),p=zs.bind(null,ir);function m(E,L){let D,U;return eu(E)?(D=e.getRecordMatcher(E),U=L):U=E,e.addRoute(U,D)}function g(E){const L=e.getRecordMatcher(E);L&&e.removeRoute(L)}function y(){return e.getRoutes().map(E=>E.record)}function b(E){return!!e.getRecordMatcher(E)}function R(E,L){if(L=re({},L||c.value),typeof E=="string"){const h=Ks(n,E,L.path),_=e.resolve({path:h.path},L),S=s.createHref(h.fullPath);return re(h,_,{params:p(_.params),hash:ir(h.hash),redirectedFrom:void 0,href:S})}let D;if(E.path!=null)D=re({},E,{path:Ks(n,E.path,L.path).path});else{const h=re({},E.params);for(const _ in h)h[_]==null&&delete h[_];D=re({},E,{params:f(h)}),L.params=f(L.params)}const U=e.resolve(D,L),te=E.hash||"";U.params=u(p(U.params));const fe=Qg(r,re({},E,{hash:zg(te),path:U.path})),d=s.createHref(fe);return re({fullPath:fe,hash:te,query:r===Ca?O_(E.query):E.query||{}},U,{redirectedFrom:void 0,href:d})}function I(E){return typeof E=="string"?Ks(n,E,c.value.path):re({},E)}function P(E,L){if(l!==E)return Sn(8,{from:L,to:E})}function N(E){return G(E)}function j(E){return N(re(I(E),{replace:!0}))}function X(E){const L=E.matched[E.matched.length-1];if(L&&L.redirect){const{redirect:D}=L;let U=typeof D=="function"?D(E):D;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=I(U):{path:U},U.params={}),re({query:E.query,hash:E.hash,params:U.path!=null?{}:E.params},U)}}function G(E,L){const D=l=R(E),U=c.value,te=E.state,fe=E.force,d=E.replace===!0,h=X(D);if(h)return G(re(I(h),{state:typeof h=="object"?re({},te,h.state):te,force:fe,replace:d}),L||D);const _=D;_.redirectedFrom=L;let S;return!fe&&Zg(r,U,D)&&(S=Sn(16,{to:_,from:U}),Ze(U,U,!0,!1)),(S?Promise.resolve(S):Be(_,U)).catch(w=>dt(w)?dt(w,2)?w:wt(w):Q(w,_,U)).then(w=>{if(w){if(dt(w,2))return G(re({replace:d},I(w.to),{state:typeof w.to=="object"?re({},te,w.to.state):te,force:fe}),L||_)}else w=$t(_,U,!0,d,te);return bt(_,U,w),w})}function ge(E,L){const D=P(E,L);return D?Promise.reject(D):Promise.resolve()}function Se(E){const L=rn.values().next().value;return L&&typeof L.runWithContext=="function"?L.runWithContext(E):E()}function Be(E,L){let D;const[U,te,fe]=L_(E,L);D=Gs(U.reverse(),"beforeRouteLeave",E,L);for(const h of U)h.leaveGuards.forEach(_=>{D.push(At(_,E,L))});const d=ge.bind(null,E,L);return D.push(d),He(D).then(()=>{D=[];for(const h of i.list())D.push(At(h,E,L));return D.push(d),He(D)}).then(()=>{D=Gs(te,"beforeRouteUpdate",E,L);for(const h of te)h.updateGuards.forEach(_=>{D.push(At(_,E,L))});return D.push(d),He(D)}).then(()=>{D=[];for(const h of fe)if(h.beforeEnter)if(Ye(h.beforeEnter))for(const _ of h.beforeEnter)D.push(At(_,E,L));else D.push(At(h.beforeEnter,E,L));return D.push(d),He(D)}).then(()=>(E.matched.forEach(h=>h.enterCallbacks={}),D=Gs(fe,"beforeRouteEnter",E,L,Se),D.push(d),He(D))).then(()=>{D=[];for(const h of o.list())D.push(At(h,E,L));return D.push(d),He(D)}).catch(h=>dt(h,8)?h:Promise.reject(h))}function bt(E,L,D){a.list().forEach(U=>Se(()=>U(E,L,D)))}function $t(E,L,D,U,te){const fe=P(E,L);if(fe)return fe;const d=L===It,h=an?history.state:{};D&&(U||d?s.replace(E.fullPath,re({scroll:d&&h&&h.scroll},te)):s.push(E.fullPath,te)),c.value=E,Ze(E,L,D,d),wt()}let Qe;function kn(){Qe||(Qe=s.listen((E,L,D)=>{if(!wr.listening)return;const U=R(E),te=X(U);if(te){G(re(te,{replace:!0}),U).catch(Kn);return}l=U;const fe=c.value;an&&a_(ba(fe.fullPath,D.delta),ws()),Be(U,fe).catch(d=>dt(d,12)?d:dt(d,2)?(G(d.to,U).then(h=>{dt(h,20)&&!D.delta&&D.type===or.pop&&s.go(-1,!1)}).catch(Kn),Promise.reject()):(D.delta&&s.go(-D.delta,!1),Q(d,U,fe))).then(d=>{d=d||$t(U,fe,!1),d&&(D.delta&&!dt(d,8)?s.go(-D.delta,!1):D.type===or.pop&&dt(d,20)&&s.go(-1,!1)),bt(U,fe,d)}).catch(Kn)}))}let tn=Mn(),pe=Mn(),se;function Q(E,L,D){wt(E);const U=pe.list();return U.length?U.forEach(te=>te(E,L,D)):console.error(E),Promise.reject(E)}function ut(){return se&&c.value!==It?Promise.resolve():new Promise((E,L)=>{tn.add([E,L])})}function wt(E){return se||(se=!E,kn(),tn.list().forEach(([L,D])=>E?D(E):L()),tn.reset()),E}function Ze(E,L,D,U){const{scrollBehavior:te}=t;if(!an||!te)return Promise.resolve();const fe=!D&&c_(ba(E.fullPath,0))||(U||!D)&&history.state&&history.state.scroll||null;return Bi().then(()=>te(E,L,fe)).then(d=>d&&o_(d)).catch(d=>Q(d,E,L))}const Oe=E=>s.go(E);let nn;const rn=new Set,wr={currentRoute:c,listening:!0,addRoute:m,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:b,getRoutes:y,resolve:R,options:t,push:N,replace:j,go:Oe,back:()=>Oe(-1),forward:()=>Oe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:pe.add,isReady:ut,install(E){const L=this;E.component("RouterLink",ar),E.component("RouterView",D_),E.config.globalProperties.$router=L,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>Ke(c)}),an&&!nn&&c.value===It&&(nn=!0,N(s.location).catch(te=>{}));const D={};for(const te in It)Object.defineProperty(D,te,{get:()=>c.value[te],enumerable:!0});E.provide(Es,L),E.provide(io,gc(D)),E.provide(vi,c);const U=E.unmount;rn.add(E),E.unmount=function(){rn.delete(E),rn.size<1&&(l=It,Qe&&Qe(),Qe=null,c.value=It,nn=!1,se=!1),U()}}};function He(E){return E.reduce((L,D)=>L.then(()=>Se(D)),Promise.resolve())}return wr}function L_(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>In(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>In(l,c))||s.push(c))}return[n,r,s]}function oo(){return Ge(Es)}function su(t){return Ge(io)}const U_={class:"nav-bar"},F_={class:"logo-wrap"},$_=["src"],B_={class:"nav-buttons-wrap"},H_={key:0,class:"modal-overlay"},j_={class:"modal-content"},V_={key:0},W_={key:1},q_={key:3,class:"modal-buttons"},z_={key:1,class:"modal-overlay"},yr={__name:"NavBar",props:{user:{type:Object,default:null}},setup(t){const e=su(),n=oo(),r=_e(!1),s=_e(!1),i=_e(""),o=_e(""),a=t;Tn(async()=>{const m=vn();if(Dl(m,window.location.href)){const g=window.localStorage.getItem("emailForSignIn");await Ml(m,g,window.location.href),r.value=!0,i.value="Successfully signed in!",window.localStorage.removeItem("emailForSignIn"),n.push({name:"products"})}});async function c(){if(!o.value)return;const m=vn(),g={url:`http://localhost:5173/product/${e.params.id}`,handleCodeInApp:!0};try{await Nl(m,o.value,g),i.value="A login link was sent to your email",r.value=!1,window.localStorage.setItem("emailForSignIn",o.value),r.value=!0}catch(y){console.error("Error sending email link:",y)}}function l(){const m=vn();_m(m).then(()=>{i.value="You have successfully signed out.",s.value=!1,r.value=!0})}function u(){r.value=!0}function f(){s.value=!0}function p(){r.value=!1,s.value=!1,i.value=""}return(m,g)=>{const y=Vi("RouterLink");return z(),K(de,null,[C("div",U_,[Y(y,{to:{name:"products"},class:"products-link"},{default:Mt(()=>[C("div",F_,[C("img",{src:Ke(ro),alt:"logo"},null,8,$_)])]),_:1})]),C("div",B_,[a.user?qe("",!0):(z(),K("button",{key:0,onClick:u,class:"sign-in-out"}," Sign in ")),a.user?(z(),K("button",{key:1,onClick:f,class:"sign-in-out"}," Sign Out ")):qe("",!0),Y(y,{to:{name:"cart"}},{default:Mt(()=>g[1]||(g[1]=[C("button",{class:"btn-cart"},"Shopping Cart",-1)])),_:1})]),r.value?(z(),K("div",H_,[C("div",j_,[i.value?(z(),K("h2",W_,Ae(i.value),1)):(z(),K("h2",V_,"Please enter your email to sign in")),i.value?(z(),K("div",q_,[C("button",{class:"modal-button",onClick:p},"Close")])):(z(),K(de,{key:2},[Tc(C("input",{"onUpdate:modelValue":g[0]||(g[0]=b=>o.value=b),type:"email",placeholder:"Enter your email",class:"email-input"},null,512),[[zd,o.value]]),C("div",{class:"modal-buttons"},[C("button",{class:"modal-button",onClick:c},"Log In")])],64))])])):qe("",!0),s.value?(z(),K("div",z_,[C("div",{class:"modal-content"},[g[2]||(g[2]=C("h2",{class:"hope"},"Hope to see you soon",-1)),C("div",{class:"modal-buttons"},[C("button",{class:"modal-button",onClick:l},"Log Out"),C("button",{class:"modal-button",onClick:p},"Cancel")])])])):qe("",!0)],64)}}},K_={class:"page-wrap"},iu={__name:"PageNotFound",setup(t){return window.scrollTo(0,0),(e,n)=>{const r=Vi("RouterLink");return z(),K(de,null,[Y(yr),C("div",K_,[n[1]||(n[1]=C("h1",null,"Sorry, the page does not exist",-1)),Y(r,{to:{name:"products"}},{default:Mt(()=>n[0]||(n[0]=[C("button",{class:"go-back"},"Go back",-1)])),_:1})]),Y(On)],64)}}};function ou(t,e){return function(){return t.apply(e,arguments)}}const{toString:G_}=Object.prototype,{getPrototypeOf:ao}=Object,Is=(t=>e=>{const n=G_.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Xe=t=>(t=t.toLowerCase(),e=>Is(e)===t),Ss=t=>e=>typeof e===t,{isArray:Cn}=Array,cr=Ss("undefined");function J_(t){return t!==null&&!cr(t)&&t.constructor!==null&&!cr(t.constructor)&&$e(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const au=Xe("ArrayBuffer");function Y_(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&au(t.buffer),e}const X_=Ss("string"),$e=Ss("function"),cu=Ss("number"),Ts=t=>t!==null&&typeof t=="object",Q_=t=>t===!0||t===!1,Dr=t=>{if(Is(t)!=="object")return!1;const e=ao(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},Z_=Xe("Date"),ey=Xe("File"),ty=Xe("Blob"),ny=Xe("FileList"),ry=t=>Ts(t)&&$e(t.pipe),sy=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||$e(t.append)&&((e=Is(t))==="formdata"||e==="object"&&$e(t.toString)&&t.toString()==="[object FormData]"))},iy=Xe("URLSearchParams"),[oy,ay,cy,ly]=["ReadableStream","Request","Response","Headers"].map(Xe),uy=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function vr(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),Cn(t))for(r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let a;for(r=0;r<o;r++)a=i[r],e.call(null,t[a],a,t)}}function lu(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,s;for(;r-- >0;)if(s=n[r],e===s.toLowerCase())return s;return null}const qt=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,uu=t=>!cr(t)&&t!==qt;function bi(){const{caseless:t}=uu(this)&&this||{},e={},n=(r,s)=>{const i=t&&lu(e,s)||s;Dr(e[i])&&Dr(r)?e[i]=bi(e[i],r):Dr(r)?e[i]=bi({},r):Cn(r)?e[i]=r.slice():e[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&vr(arguments[r],n);return e}const fy=(t,e,n,{allOwnKeys:r}={})=>(vr(e,(s,i)=>{n&&$e(s)?t[i]=ou(s,n):t[i]=s},{allOwnKeys:r}),t),dy=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),hy=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},py=(t,e,n,r)=>{let s,i,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),i=s.length;i-- >0;)o=s[i],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&ao(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},my=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},gy=t=>{if(!t)return null;if(Cn(t))return t;let e=t.length;if(!cu(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},_y=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&ao(Uint8Array)),yy=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let s;for(;(s=r.next())&&!s.done;){const i=s.value;e.call(t,i[0],i[1])}},vy=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},by=Xe("HTMLFormElement"),wy=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Ma=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),Ey=Xe("RegExp"),fu=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};vr(n,(s,i)=>{let o;(o=e(s,i,t))!==!1&&(r[i]=o||s)}),Object.defineProperties(t,r)},Iy=t=>{fu(t,(e,n)=>{if($e(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if($e(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Sy=(t,e)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return Cn(t)?r(t):r(String(t).split(e)),n},Ty=()=>{},Ry=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e,Js="abcdefghijklmnopqrstuvwxyz",La="0123456789",du={DIGIT:La,ALPHA:Js,ALPHA_DIGIT:Js+Js.toUpperCase()+La},Ay=(t=16,e=du.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function Oy(t){return!!(t&&$e(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const Cy=t=>{const e=new Array(10),n=(r,s)=>{if(Ts(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[s]=r;const i=Cn(r)?[]:{};return vr(r,(o,a)=>{const c=n(o,s+1);!cr(c)&&(i[a]=c)}),e[s]=void 0,i}}return r};return n(t,0)},Py=Xe("AsyncFunction"),ky=t=>t&&(Ts(t)||$e(t))&&$e(t.then)&&$e(t.catch),hu=((t,e)=>t?setImmediate:e?((n,r)=>(qt.addEventListener("message",({source:s,data:i})=>{s===qt&&i===n&&r.length&&r.shift()()},!1),s=>{r.push(s),qt.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",$e(qt.postMessage)),xy=typeof queueMicrotask<"u"?queueMicrotask.bind(qt):typeof process<"u"&&process.nextTick||hu,v={isArray:Cn,isArrayBuffer:au,isBuffer:J_,isFormData:sy,isArrayBufferView:Y_,isString:X_,isNumber:cu,isBoolean:Q_,isObject:Ts,isPlainObject:Dr,isReadableStream:oy,isRequest:ay,isResponse:cy,isHeaders:ly,isUndefined:cr,isDate:Z_,isFile:ey,isBlob:ty,isRegExp:Ey,isFunction:$e,isStream:ry,isURLSearchParams:iy,isTypedArray:_y,isFileList:ny,forEach:vr,merge:bi,extend:fy,trim:uy,stripBOM:dy,inherits:hy,toFlatObject:py,kindOf:Is,kindOfTest:Xe,endsWith:my,toArray:gy,forEachEntry:yy,matchAll:vy,isHTMLForm:by,hasOwnProperty:Ma,hasOwnProp:Ma,reduceDescriptors:fu,freezeMethods:Iy,toObjectSet:Sy,toCamelCase:wy,noop:Ty,toFiniteNumber:Ry,findKey:lu,global:qt,isContextDefined:uu,ALPHABET:du,generateString:Ay,isSpecCompliantForm:Oy,toJSONObject:Cy,isAsyncFn:Py,isThenable:ky,setImmediate:hu,asap:xy};function q(t,e,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}v.inherits(q,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:v.toJSONObject(this.config),code:this.code,status:this.status}}});const pu=q.prototype,mu={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{mu[t]={value:t}});Object.defineProperties(q,mu);Object.defineProperty(pu,"isAxiosError",{value:!0});q.from=(t,e,n,r,s,i)=>{const o=Object.create(pu);return v.toFlatObject(t,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),q.call(o,t.message,e,n,r,s),o.cause=t,o.name=t.name,i&&Object.assign(o,i),o};const Ny=null;function wi(t){return v.isPlainObject(t)||v.isArray(t)}function gu(t){return v.endsWith(t,"[]")?t.slice(0,-2):t}function Ua(t,e,n){return t?t.concat(e).map(function(s,i){return s=gu(s),!n&&i?"["+s+"]":s}).join(n?".":""):e}function Dy(t){return v.isArray(t)&&!t.some(wi)}const My=v.toFlatObject(v,{},null,function(e){return/^is[A-Z]/.test(e)});function Rs(t,e,n){if(!v.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=v.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,b){return!v.isUndefined(b[y])});const r=n.metaTokens,s=n.visitor||u,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&v.isSpecCompliantForm(e);if(!v.isFunction(s))throw new TypeError("visitor must be a function");function l(g){if(g===null)return"";if(v.isDate(g))return g.toISOString();if(!c&&v.isBlob(g))throw new q("Blob is not supported. Use a Buffer instead.");return v.isArrayBuffer(g)||v.isTypedArray(g)?c&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function u(g,y,b){let R=g;if(g&&!b&&typeof g=="object"){if(v.endsWith(y,"{}"))y=r?y:y.slice(0,-2),g=JSON.stringify(g);else if(v.isArray(g)&&Dy(g)||(v.isFileList(g)||v.endsWith(y,"[]"))&&(R=v.toArray(g)))return y=gu(y),R.forEach(function(P,N){!(v.isUndefined(P)||P===null)&&e.append(o===!0?Ua([y],N,i):o===null?y:y+"[]",l(P))}),!1}return wi(g)?!0:(e.append(Ua(b,y,i),l(g)),!1)}const f=[],p=Object.assign(My,{defaultVisitor:u,convertValue:l,isVisitable:wi});function m(g,y){if(!v.isUndefined(g)){if(f.indexOf(g)!==-1)throw Error("Circular reference detected in "+y.join("."));f.push(g),v.forEach(g,function(R,I){(!(v.isUndefined(R)||R===null)&&s.call(e,R,v.isString(I)?I.trim():I,y,p))===!0&&m(R,y?y.concat(I):[I])}),f.pop()}}if(!v.isObject(t))throw new TypeError("data must be an object");return m(t),e}function Fa(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function co(t,e){this._pairs=[],t&&Rs(t,this,e)}const _u=co.prototype;_u.append=function(e,n){this._pairs.push([e,n])};_u.toString=function(e){const n=e?function(r){return e.call(this,r,Fa)}:Fa;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Ly(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function yu(t,e,n){if(!e)return t;const r=n&&n.encode||Ly,s=n&&n.serialize;let i;if(s?i=s(e,n):i=v.isURLSearchParams(e)?e.toString():new co(e,n).toString(r),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class $a{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){v.forEach(this.handlers,function(r){r!==null&&e(r)})}}const vu={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Uy=typeof URLSearchParams<"u"?URLSearchParams:co,Fy=typeof FormData<"u"?FormData:null,$y=typeof Blob<"u"?Blob:null,By={isBrowser:!0,classes:{URLSearchParams:Uy,FormData:Fy,Blob:$y},protocols:["http","https","file","blob","url","data"]},lo=typeof window<"u"&&typeof document<"u",Ei=typeof navigator=="object"&&navigator||void 0,Hy=lo&&(!Ei||["ReactNative","NativeScript","NS"].indexOf(Ei.product)<0),jy=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Vy=lo&&window.location.href||"http://localhost",Wy=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:lo,hasStandardBrowserEnv:Hy,hasStandardBrowserWebWorkerEnv:jy,navigator:Ei,origin:Vy},Symbol.toStringTag,{value:"Module"})),Pe={...Wy,...By};function qy(t,e){return Rs(t,new Pe.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return Pe.isNode&&v.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function zy(t){return v.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Ky(t){const e={},n=Object.keys(t);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],e[i]=t[i];return e}function bu(t){function e(n,r,s,i){let o=n[i++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),c=i>=n.length;return o=!o&&v.isArray(s)?s.length:o,c?(v.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!v.isObject(s[o]))&&(s[o]=[]),e(n,r,s[o],i)&&v.isArray(s[o])&&(s[o]=Ky(s[o])),!a)}if(v.isFormData(t)&&v.isFunction(t.entries)){const n={};return v.forEachEntry(t,(r,s)=>{e(zy(r),s,n,0)}),n}return null}function Gy(t,e,n){if(v.isString(t))try{return(e||JSON.parse)(t),v.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(0,JSON.stringify)(t)}const br={transitional:vu,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=v.isObject(e);if(i&&v.isHTMLForm(e)&&(e=new FormData(e)),v.isFormData(e))return s?JSON.stringify(bu(e)):e;if(v.isArrayBuffer(e)||v.isBuffer(e)||v.isStream(e)||v.isFile(e)||v.isBlob(e)||v.isReadableStream(e))return e;if(v.isArrayBufferView(e))return e.buffer;if(v.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return qy(e,this.formSerializer).toString();if((a=v.isFileList(e))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return Rs(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),Gy(e)):e}],transformResponse:[function(e){const n=this.transitional||br.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(v.isResponse(e)||v.isReadableStream(e))return e;if(e&&v.isString(e)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?q.from(a,q.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Pe.classes.FormData,Blob:Pe.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};v.forEach(["delete","get","head","post","put","patch"],t=>{br.headers[t]={}});const Jy=v.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Yy=t=>{const e={};let n,r,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||e[n]&&Jy[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},Ba=Symbol("internals");function Ln(t){return t&&String(t).trim().toLowerCase()}function Mr(t){return t===!1||t==null?t:v.isArray(t)?t.map(Mr):String(t)}function Xy(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const Qy=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Ys(t,e,n,r,s){if(v.isFunction(r))return r.call(this,e,n);if(s&&(e=n),!!v.isString(e)){if(v.isString(r))return e.indexOf(r)!==-1;if(v.isRegExp(r))return r.test(e)}}function Zy(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function ev(t,e){const n=v.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(s,i,o){return this[r].call(this,e,s,i,o)},configurable:!0})})}class ke{constructor(e){e&&this.set(e)}set(e,n,r){const s=this;function i(a,c,l){const u=Ln(c);if(!u)throw new Error("header name must be a non-empty string");const f=v.findKey(s,u);(!f||s[f]===void 0||l===!0||l===void 0&&s[f]!==!1)&&(s[f||c]=Mr(a))}const o=(a,c)=>v.forEach(a,(l,u)=>i(l,u,c));if(v.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(v.isString(e)&&(e=e.trim())&&!Qy(e))o(Yy(e),n);else if(v.isHeaders(e))for(const[a,c]of e.entries())i(c,a,r);else e!=null&&i(n,e,r);return this}get(e,n){if(e=Ln(e),e){const r=v.findKey(this,e);if(r){const s=this[r];if(!n)return s;if(n===!0)return Xy(s);if(v.isFunction(n))return n.call(this,s,r);if(v.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Ln(e),e){const r=v.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||Ys(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let s=!1;function i(o){if(o=Ln(o),o){const a=v.findKey(r,o);a&&(!n||Ys(r,r[a],a,n))&&(delete r[a],s=!0)}}return v.isArray(e)?e.forEach(i):i(e),s}clear(e){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!e||Ys(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){const n=this,r={};return v.forEach(this,(s,i)=>{const o=v.findKey(r,i);if(o){n[o]=Mr(s),delete n[i];return}const a=e?Zy(i):String(i).trim();a!==i&&delete n[i],n[a]=Mr(s),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return v.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=e&&v.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[Ba]=this[Ba]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=Ln(o);r[a]||(ev(s,o),r[a]=!0)}return v.isArray(e)?e.forEach(i):i(e),this}}ke.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);v.reduceDescriptors(ke.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});v.freezeMethods(ke);function Xs(t,e){const n=this||br,r=e||n,s=ke.from(r.headers);let i=r.data;return v.forEach(t,function(a){i=a.call(n,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function wu(t){return!!(t&&t.__CANCEL__)}function Pn(t,e,n){q.call(this,t??"canceled",q.ERR_CANCELED,e,n),this.name="CanceledError"}v.inherits(Pn,q,{__CANCEL__:!0});function Eu(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new q("Request failed with status code "+n.status,[q.ERR_BAD_REQUEST,q.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function tv(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function nv(t,e){t=t||10;const n=new Array(t),r=new Array(t);let s=0,i=0,o;return e=e!==void 0?e:1e3,function(c){const l=Date.now(),u=r[i];o||(o=l),n[s]=c,r[s]=l;let f=i,p=0;for(;f!==s;)p+=n[f++],f=f%t;if(s=(s+1)%t,s===i&&(i=(i+1)%t),l-o<e)return;const m=u&&l-u;return m?Math.round(p*1e3/m):void 0}}function rv(t,e){let n=0,r=1e3/e,s,i;const o=(l,u=Date.now())=>{n=u,s=null,i&&(clearTimeout(i),i=null),t.apply(null,l)};return[(...l)=>{const u=Date.now(),f=u-n;f>=r?o(l,u):(s=l,i||(i=setTimeout(()=>{i=null,o(s)},r-f)))},()=>s&&o(s)]}const Zr=(t,e,n=3)=>{let r=0;const s=nv(50,250);return rv(i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,c=o-r,l=s(c),u=o<=a;r=o;const f={loaded:o,total:a,progress:a?o/a:void 0,bytes:c,rate:l||void 0,estimated:l&&a&&u?(a-o)/l:void 0,event:i,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(f)},n)},Ha=(t,e)=>{const n=t!=null;return[r=>e[0]({lengthComputable:n,total:t,loaded:r}),e[1]]},ja=t=>(...e)=>v.asap(()=>t(...e)),sv=Pe.hasStandardBrowserEnv?function(){const e=Pe.navigator&&/(msie|trident)/i.test(Pe.navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const a=v.isString(o)?s(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}(),iv=Pe.hasStandardBrowserEnv?{write(t,e,n,r,s,i){const o=[t+"="+encodeURIComponent(e)];v.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),v.isString(r)&&o.push("path="+r),v.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function ov(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function av(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function Iu(t,e){return t&&!ov(e)?av(t,e):e}const Va=t=>t instanceof ke?{...t}:t;function Zt(t,e){e=e||{};const n={};function r(l,u,f){return v.isPlainObject(l)&&v.isPlainObject(u)?v.merge.call({caseless:f},l,u):v.isPlainObject(u)?v.merge({},u):v.isArray(u)?u.slice():u}function s(l,u,f){if(v.isUndefined(u)){if(!v.isUndefined(l))return r(void 0,l,f)}else return r(l,u,f)}function i(l,u){if(!v.isUndefined(u))return r(void 0,u)}function o(l,u){if(v.isUndefined(u)){if(!v.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function a(l,u,f){if(f in e)return r(l,u);if(f in t)return r(void 0,l)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,u)=>s(Va(l),Va(u),!0)};return v.forEach(Object.keys(Object.assign({},t,e)),function(u){const f=c[u]||s,p=f(t[u],e[u],u);v.isUndefined(p)&&f!==a||(n[u]=p)}),n}const Su=t=>{const e=Zt({},t);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:i,headers:o,auth:a}=e;e.headers=o=ke.from(o),e.url=yu(Iu(e.baseURL,e.url),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let c;if(v.isFormData(n)){if(Pe.hasStandardBrowserEnv||Pe.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((c=o.getContentType())!==!1){const[l,...u]=c?c.split(";").map(f=>f.trim()).filter(Boolean):[];o.setContentType([l||"multipart/form-data",...u].join("; "))}}if(Pe.hasStandardBrowserEnv&&(r&&v.isFunction(r)&&(r=r(e)),r||r!==!1&&sv(e.url))){const l=s&&i&&iv.read(i);l&&o.set(s,l)}return e},cv=typeof XMLHttpRequest<"u",lv=cv&&function(t){return new Promise(function(n,r){const s=Su(t);let i=s.data;const o=ke.from(s.headers).normalize();let{responseType:a,onUploadProgress:c,onDownloadProgress:l}=s,u,f,p,m,g;function y(){m&&m(),g&&g(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let b=new XMLHttpRequest;b.open(s.method.toUpperCase(),s.url,!0),b.timeout=s.timeout;function R(){if(!b)return;const P=ke.from("getAllResponseHeaders"in b&&b.getAllResponseHeaders()),j={data:!a||a==="text"||a==="json"?b.responseText:b.response,status:b.status,statusText:b.statusText,headers:P,config:t,request:b};Eu(function(G){n(G),y()},function(G){r(G),y()},j),b=null}"onloadend"in b?b.onloadend=R:b.onreadystatechange=function(){!b||b.readyState!==4||b.status===0&&!(b.responseURL&&b.responseURL.indexOf("file:")===0)||setTimeout(R)},b.onabort=function(){b&&(r(new q("Request aborted",q.ECONNABORTED,t,b)),b=null)},b.onerror=function(){r(new q("Network Error",q.ERR_NETWORK,t,b)),b=null},b.ontimeout=function(){let N=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const j=s.transitional||vu;s.timeoutErrorMessage&&(N=s.timeoutErrorMessage),r(new q(N,j.clarifyTimeoutError?q.ETIMEDOUT:q.ECONNABORTED,t,b)),b=null},i===void 0&&o.setContentType(null),"setRequestHeader"in b&&v.forEach(o.toJSON(),function(N,j){b.setRequestHeader(j,N)}),v.isUndefined(s.withCredentials)||(b.withCredentials=!!s.withCredentials),a&&a!=="json"&&(b.responseType=s.responseType),l&&([p,g]=Zr(l,!0),b.addEventListener("progress",p)),c&&b.upload&&([f,m]=Zr(c),b.upload.addEventListener("progress",f),b.upload.addEventListener("loadend",m)),(s.cancelToken||s.signal)&&(u=P=>{b&&(r(!P||P.type?new Pn(null,t,b):P),b.abort(),b=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const I=tv(s.url);if(I&&Pe.protocols.indexOf(I)===-1){r(new q("Unsupported protocol "+I+":",q.ERR_BAD_REQUEST,t));return}b.send(i||null)})},uv=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let r=new AbortController,s;const i=function(l){if(!s){s=!0,a();const u=l instanceof Error?l:this.reason;r.abort(u instanceof q?u:new Pn(u instanceof Error?u.message:u))}};let o=e&&setTimeout(()=>{o=null,i(new q(`timeout ${e} of ms exceeded`,q.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(l=>{l.unsubscribe?l.unsubscribe(i):l.removeEventListener("abort",i)}),t=null)};t.forEach(l=>l.addEventListener("abort",i));const{signal:c}=r;return c.unsubscribe=()=>v.asap(a),c}},fv=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let r=0,s;for(;r<n;)s=r+e,yield t.slice(r,s),r=s},dv=async function*(t,e){for await(const n of hv(t))yield*fv(n,e)},hv=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:r}=await e.read();if(n)break;yield r}}finally{await e.cancel()}},Wa=(t,e,n,r)=>{const s=dv(t,e);let i=0,o,a=c=>{o||(o=!0,r&&r(c))};return new ReadableStream({async pull(c){try{const{done:l,value:u}=await s.next();if(l){a(),c.close();return}let f=u.byteLength;if(n){let p=i+=f;n(p)}c.enqueue(new Uint8Array(u))}catch(l){throw a(l),l}},cancel(c){return a(c),s.return()}},{highWaterMark:2})},As=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Tu=As&&typeof ReadableStream=="function",pv=As&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),Ru=(t,...e)=>{try{return!!t(...e)}catch{return!1}},mv=Tu&&Ru(()=>{let t=!1;const e=new Request(Pe.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e}),qa=64*1024,Ii=Tu&&Ru(()=>v.isReadableStream(new Response("").body)),es={stream:Ii&&(t=>t.body)};As&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!es[e]&&(es[e]=v.isFunction(t[e])?n=>n[e]():(n,r)=>{throw new q(`Response type '${e}' is not supported`,q.ERR_NOT_SUPPORT,r)})})})(new Response);const gv=async t=>{if(t==null)return 0;if(v.isBlob(t))return t.size;if(v.isSpecCompliantForm(t))return(await new Request(Pe.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(v.isArrayBufferView(t)||v.isArrayBuffer(t))return t.byteLength;if(v.isURLSearchParams(t)&&(t=t+""),v.isString(t))return(await pv(t)).byteLength},_v=async(t,e)=>{const n=v.toFiniteNumber(t.getContentLength());return n??gv(e)},yv=As&&(async t=>{let{url:e,method:n,data:r,signal:s,cancelToken:i,timeout:o,onDownloadProgress:a,onUploadProgress:c,responseType:l,headers:u,withCredentials:f="same-origin",fetchOptions:p}=Su(t);l=l?(l+"").toLowerCase():"text";let m=uv([s,i&&i.toAbortSignal()],o),g;const y=m&&m.unsubscribe&&(()=>{m.unsubscribe()});let b;try{if(c&&mv&&n!=="get"&&n!=="head"&&(b=await _v(u,r))!==0){let j=new Request(e,{method:"POST",body:r,duplex:"half"}),X;if(v.isFormData(r)&&(X=j.headers.get("content-type"))&&u.setContentType(X),j.body){const[G,ge]=Ha(b,Zr(ja(c)));r=Wa(j.body,qa,G,ge)}}v.isString(f)||(f=f?"include":"omit");const R="credentials"in Request.prototype;g=new Request(e,{...p,signal:m,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",credentials:R?f:void 0});let I=await fetch(g);const P=Ii&&(l==="stream"||l==="response");if(Ii&&(a||P&&y)){const j={};["status","statusText","headers"].forEach(Se=>{j[Se]=I[Se]});const X=v.toFiniteNumber(I.headers.get("content-length")),[G,ge]=a&&Ha(X,Zr(ja(a),!0))||[];I=new Response(Wa(I.body,qa,G,()=>{ge&&ge(),y&&y()}),j)}l=l||"text";let N=await es[v.findKey(es,l)||"text"](I,t);return!P&&y&&y(),await new Promise((j,X)=>{Eu(j,X,{data:N,headers:ke.from(I.headers),status:I.status,statusText:I.statusText,config:t,request:g})})}catch(R){throw y&&y(),R&&R.name==="TypeError"&&/fetch/i.test(R.message)?Object.assign(new q("Network Error",q.ERR_NETWORK,t,g),{cause:R.cause||R}):q.from(R,R&&R.code,t,g)}}),Si={http:Ny,xhr:lv,fetch:yv};v.forEach(Si,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const za=t=>`- ${t}`,vv=t=>v.isFunction(t)||t===null||t===!1,Au={getAdapter:t=>{t=v.isArray(t)?t:[t];const{length:e}=t;let n,r;const s={};for(let i=0;i<e;i++){n=t[i];let o;if(r=n,!vv(n)&&(r=Si[(o=String(n)).toLowerCase()],r===void 0))throw new q(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([a,c])=>`adapter ${a} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=e?i.length>1?`since :
`+i.map(za).join(`
`):" "+za(i[0]):"as no adapter specified";throw new q("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:Si};function Qs(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Pn(null,t)}function Ka(t){return Qs(t),t.headers=ke.from(t.headers),t.data=Xs.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Au.getAdapter(t.adapter||br.adapter)(t).then(function(r){return Qs(t),r.data=Xs.call(t,t.transformResponse,r),r.headers=ke.from(r.headers),r},function(r){return wu(r)||(Qs(t),r&&r.response&&(r.response.data=Xs.call(t,t.transformResponse,r.response),r.response.headers=ke.from(r.response.headers))),Promise.reject(r)})}const Ou="1.7.7",uo={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{uo[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const Ga={};uo.transitional=function(e,n,r){function s(i,o){return"[Axios v"+Ou+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(e===!1)throw new q(s(o," has been removed"+(n?" in "+n:"")),q.ERR_DEPRECATED);return n&&!Ga[o]&&(Ga[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};function bv(t,e,n){if(typeof t!="object")throw new q("options must be an object",q.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const i=r[s],o=e[i];if(o){const a=t[i],c=a===void 0||o(a,i,t);if(c!==!0)throw new q("option "+i+" must be "+c,q.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new q("Unknown option "+i,q.ERR_BAD_OPTION)}}const Ti={assertOptions:bv,validators:uo},St=Ti.validators;class Gt{constructor(e){this.defaults=e,this.interceptors={request:new $a,response:new $a}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const i=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Zt(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&Ti.assertOptions(r,{silentJSONParsing:St.transitional(St.boolean),forcedJSONParsing:St.transitional(St.boolean),clarifyTimeoutError:St.transitional(St.boolean)},!1),s!=null&&(v.isFunction(s)?n.paramsSerializer={serialize:s}:Ti.assertOptions(s,{encode:St.function,serialize:St.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&v.merge(i.common,i[n.method]);i&&v.forEach(["delete","get","head","post","put","patch","common"],g=>{delete i[g]}),n.headers=ke.concat(o,i);const a=[];let c=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(c=c&&y.synchronous,a.unshift(y.fulfilled,y.rejected))});const l=[];this.interceptors.response.forEach(function(y){l.push(y.fulfilled,y.rejected)});let u,f=0,p;if(!c){const g=[Ka.bind(this),void 0];for(g.unshift.apply(g,a),g.push.apply(g,l),p=g.length,u=Promise.resolve(n);f<p;)u=u.then(g[f++],g[f++]);return u}p=a.length;let m=n;for(f=0;f<p;){const g=a[f++],y=a[f++];try{m=g(m)}catch(b){y.call(this,b);break}}try{u=Ka.call(this,m)}catch(g){return Promise.reject(g)}for(f=0,p=l.length;f<p;)u=u.then(l[f++],l[f++]);return u}getUri(e){e=Zt(this.defaults,e);const n=Iu(e.baseURL,e.url);return yu(n,e.params,e.paramsSerializer)}}v.forEach(["delete","get","head","options"],function(e){Gt.prototype[e]=function(n,r){return this.request(Zt(r||{},{method:e,url:n,data:(r||{}).data}))}});v.forEach(["post","put","patch"],function(e){function n(r){return function(i,o,a){return this.request(Zt(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}Gt.prototype[e]=n(),Gt.prototype[e+"Form"]=n(!0)});class fo{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},e(function(i,o,a){r.reason||(r.reason=new Pn(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=r=>{e.abort(r)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new fo(function(s){e=s}),cancel:e}}}function wv(t){return function(n){return t.apply(null,n)}}function Ev(t){return v.isObject(t)&&t.isAxiosError===!0}const Ri={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ri).forEach(([t,e])=>{Ri[e]=t});function Cu(t){const e=new Gt(t),n=ou(Gt.prototype.request,e);return v.extend(n,Gt.prototype,e,{allOwnKeys:!0}),v.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return Cu(Zt(t,s))},n}const oe=Cu(br);oe.Axios=Gt;oe.CanceledError=Pn;oe.CancelToken=fo;oe.isCancel=wu;oe.VERSION=Ou;oe.toFormData=Rs;oe.AxiosError=q;oe.Cancel=oe.CanceledError;oe.all=function(e){return Promise.all(e)};oe.spread=wv;oe.isAxiosError=Ev;oe.mergeConfig=Zt;oe.AxiosHeaders=ke;oe.formToJSON=t=>bu(v.isHTMLForm(t)?new FormData(t):t);oe.getAdapter=Au.getAdapter;oe.HttpStatusCode=Ri;oe.default=oe;const Iv={class:"page-wrap"},Sv={key:0},Tv={key:1,class:"description-container"},Rv={class:"img-wrap"},Av=["src"],Ov={class:"product-details"},Cv={key:0,class:"grey-button",disabled:""},Pv={class:"price"},kv={class:"description"},xv={key:2},Nv={key:0,class:"modal-overlay"},Dv={__name:"ProductDetails",props:{user:{type:Object,default:null}},setup(t){const e=_e(null),n=su(),r=_e(!1),s=_e([]),i=_e(!0),o=_e(!1),a=_e(null),c=t;async function l(b){if(b)try{const R=await oe.get(`/api/users/${c.user.uid}/cart`);s.value=R.data.map(I=>I.id)}catch(R){console.error("Error al cargar el carrito:",R)}else s.value=[]}Tn(async()=>{window.scrollTo(0,0);const b=vn();if(Dl(b,window.location.href)){const I=window.localStorage.getItem("emailForSignIn");await Ml(b,I,window.location.href),alert("Successfully signed in!"),window.localStorage.removeItem("emailForSignIn"),router.push("/products")}const R=n.params.id;try{const I=await oe.get(`/api/products/${R}`);e.value=I.data,e.value?c.user&&await l(c.user):r.value=!0}catch(I){console.error("Error al obtener el producto o el carrito:",I),r.value=!0}finally{i.value=!1}pn(()=>c.user,async I=>{await l(I)})});async function u(){const b=prompt("Please enter your email to sign in"),R=vn();await Nl(R,b,{url:"http://localhost:5173/products",handleCodeInApp:!0}),alert("A login link was sent to your email"),window.localStorage.setItem("emailForSignIn",b)}async function f(){const b=n.params.id;if(s.value.includes(b)){alert("This product is already in the cart");return}try{await oe.post(`/api/users/${c.user.uid}/cart`,{id:b}),s.value.push(b)}catch(R){console.error("Error al agregar al carrito:",R)}}function p(b){a.value=b,m(),o.value=!0,setTimeout(()=>{g()},2e3)}function m(){const b=document.getElementById("product-image"),R=document.querySelector(".btn-cart");if(b&&R){const I=b.cloneNode(!0),P=b.getBoundingClientRect();I.style.position="fixed",I.style.left=`${P.left}px`,I.style.top=`${P.top}px`,I.classList.add("fly-to-cart"),document.body.appendChild(I);const N=-500,j=-1e3,X=R.getBoundingClientRect();I.style.transform=`translate(${X.left-P.left+N}px, ${X.top-P.top+j}px) scale(0.1)`,I.style.opacity="0",I.addEventListener("transitionend",()=>{I.remove()})}setTimeout(()=>f(),800)}function g(){o.value=!1}const y=Ce(()=>e.value&&s.value.includes(e.value.id));return(b,R)=>(z(),K(de,null,[Y(yr,{user:t.user},null,8,["user"]),C("div",Iv,[i.value?(z(),K("div",Sv)):qe("",!0),!r.value&&e.value?(z(),K("div",Tv,[C("h1",null,Ae(e.value.name),1),C("div",Rv,[C("img",{src:`http://localhost:8000/images/${e.value.id}.webp`,alt:"product",id:"product-image"},null,8,Av)]),C("div",Ov,[c.user&&y.value?(z(),K("button",Cv," Item is already in Cart ")):qe("",!0),c.user&&!y.value?(z(),K("button",{key:1,onClick:p,class:"add-to-cart"}," Add to Cart ")):qe("",!0),c.user?qe("",!0):(z(),K("button",{key:2,onClick:u,class:"sig-in-button"}," Sign in to add to Cart ")),C("h3",Pv,Ae(e.value.price),1)]),C("p",kv,Ae(e.value.description),1)])):!i.value&&r.value?(z(),K("div",xv,[Y(iu)])):qe("",!0)]),o.value?(z(),K("div",Nv,R[0]||(R[0]=[C("div",{class:"modal-content"},[C("h2",null,"The product is in the Cart")],-1)]))):qe("",!0),Y(On)],64))}},Mv={class:"grid-wrap"},Lv=["src"],Uv={class:"product-name"},Fv={class:"product-price"},$v={__name:"ProductsList",props:{products:{type:Object,required:!0}},setup(t){const e=t;return(n,r)=>(z(),K("div",Mv,[(z(!0),K(de,null,Br(e.products,s=>(z(),K("div",{class:"product-item",key:s.id},[C("img",{src:s.imageUrl=`http://localhost:8000/images/${s.id}.webp`,alt:"product"},null,8,Lv),C("h3",Uv,Ae(s.name),1),C("p",Fv,Ae(s.price),1),Y(Ke(ar),{class:"details-button-wrap",to:{name:"product",params:{id:s.id}}},{default:Mt(()=>r[0]||(r[0]=[C("button",{class:"details-button"},"View Details",-1)])),_:2},1032,["to"])]))),128))]))}},Bv={class:"page-wrap"},Hv={__name:"Products",props:{user:{type:Object,default:null}},setup(t){const e=_e([]);return Tn(async()=>{try{const n=await oe.get("/api/products");e.value=n.data}catch(n){console.error("Error al obtener los productos:",n)}}),(n,r)=>(z(),K(de,null,[Y(yr,{user:t.user},null,8,["user"]),C("div",Bv,[r[0]||(r[0]=C("h1",null,"Products",-1)),Y($v,{products:e.value},null,8,["products"])]),Y(On)],64))}},jv=["src"],Vv={class:"details-wrap"},Wv={class:"price"},qv=["onUpdate:modelValue","onChange"],zv=["value"],Kv=["onClick"],Gv={__name:"CartList",props:{cart:{type:Array,required:!0}},emits:["remove-from-cart","update-quantity"],setup(t,{emit:e}){const n=t;return(r,s)=>(z(!0),K(de,null,Br(n.cart,i=>(z(),K("div",{class:"product-container",key:i.id},[C("div",null,[C("h2",null,Ae(i.name),1),C("img",{class:"product-image",src:i.imageUrl=`http://localhost:8000/images/${i.id}.webp`,alt:"product"},null,8,jv)]),C("div",Vv,[C("p",Wv,Ae(i.price)+" €",1),s[0]||(s[0]=C("label",{for:"quantity"},"Quantity:",-1)),Tc(C("select",{"onUpdate:modelValue":o=>i.quantity=o,onChange:o=>r.$emit("update-quantity",i)},[(z(),K(de,null,Br(10,o=>C("option",{key:o,value:o},Ae(o),9,zv)),64))],40,qv),[[Kd,i.quantity]]),s[1]||(s[1]=C("br",null,null,-1)),C("button",{onClick:o=>r.$emit("remove-from-cart",i.id),class:"remove-button"},"Delete",8,Kv)])]))),128))}},Jv={class:"page-wrap"},Yv={key:0},Xv={class:"total-price"},Qv={key:1},Zv={key:0,class:"modal-overlay"},eb={__name:"ShoppingCart",props:{user:{type:Object,default:null}},setup(t){const e=_e([]),n=_e(!1),r=_e(null),s=oo(),i=Ce(()=>e.value.reduce((g,y)=>{const b=parseFloat(y.price)||0,R=parseInt(y.quantity)||1;return g+b*R},0).toFixed(2)),o=t;pn(()=>o.user,async g=>{g?await a(g):e.value=[]},{immediate:!0});async function a(g){if(g)try{const y=await oe.get(`/api/users/${g.uid}/cart`);e.value=y.data.map(b=>({...b,quantity:parseInt(b.quantity)||1,price:parseFloat(b.price)||0}))}catch(y){console.error("Error al cargar el carrito:",y),e.value=[]}}async function c(g){if(!o.user){console.error("No hay usuario autenticado");return}const y=e.value.findIndex(b=>b.id===g.id);if(y!==-1){e.value[y].quantity=parseInt(g.quantity)||1;try{await oe.put(`/api/users/${o.user.uid}/cart/${g.id}`,{quantity:e.value[y].quantity})}catch(b){console.error("Error al actualizar la cantidad en el carrito:",b)}}}function l(g){r.value=g,n.value=!0}async function u(){if(r.value){try{const g=await oe.delete(`/api/users/${o.user.uid}/cart/${r.value}`);e.value=g.data.map(y=>({...y,quantity:parseInt(y.quantity)||1,price:parseFloat(y.price)||0}))}catch(g){console.error("Error al eliminar del carrito:",g)}p()}}function f(){p()}function p(){n.value=!1,r.value=null}function m(){localStorage.setItem("cartData",JSON.stringify(e.value)),s.push({name:"pay"})}return(g,y)=>(z(),K(de,null,[Y(yr,{user:t.user},null,8,["user"]),C("div",Jv,[y[2]||(y[2]=C("h1",null,"Shopping Cart",-1)),e.value.length>0?(z(),K("div",Yv,[Y(Gv,{onRemoveFromCart:l,onUpdateQuantity:c,cart:e.value},null,8,["cart"]),C("div",Xv,[y[0]||(y[0]=C("p",null,"Total price:",-1)),C("p",null,Ae(i.value)+" €",1)]),C("div",{class:"checkout-wrap"},[C("button",{class:"checkout-button",onClick:m},"Proceed to Checkout")])])):(z(),K("div",Qv,y[1]||(y[1]=[C("h2",{class:"empty"},"Your Cart is empty!",-1)])))]),n.value?(z(),K("div",Zv,[C("div",{class:"modal-content"},[y[3]||(y[3]=C("h2",null,"You are going to delete this item",-1)),C("div",{class:"modal-buttons"},[C("button",{class:"modal-button",onClick:u},"Ok"),C("button",{class:"modal-button",onClick:f},"Cancel")])])])):qe("",!0),Y(On)],64))}},tb={class:"home"},nb={__name:"Home",setup(t){return(e,n)=>(z(),K("div",tb,[Y(Ke(ar),{to:{name:"products"}},{default:Mt(()=>n[0]||(n[0]=[C("img",{src:ro,alt:""},null,-1)])),_:1}),Y(Ke(ar),{style:{"text-decoration":"none"},to:{name:"products"}},{default:Mt(()=>n[1]||(n[1]=[C("h1",{class:"home-title"},"Welcome!",-1),C("h1",{class:"home-subtitle"},"Your premium olive oil shop",-1)])),_:1})]))}},rb={class:"page-wrap"},sb={class:"orderFromCart"},ib={class:"order-name"},ob={class:"order-name-title"},ab=["src"],cb={class:"order-details"},lb={class:"total-price"},ub={__name:"Pay",props:{user:{type:Object,default:null}},setup(t){const e=_e([]),n=oo(),r=t;window.scrollTo(0,0),Tn(()=>{const o=localStorage.getItem("cartData");o&&(e.value=JSON.parse(o))});const s=Ce(()=>e.value.reduce((o,a)=>o+a.price*a.quantity,0).toFixed(2));async function i(){try{await oe.delete(`/api/users/${r.user.uid}/cart`),localStorage.removeItem("cartData")}catch(o){console.error("Error al vaciar el carrito:",o)}n.push({name:"orderConfirm"})}return(o,a)=>(z(),K(de,null,[Y(yr,{user:t.user},null,8,["user"]),C("div",rb,[a[0]||(a[0]=C("h1",{class:"pay-title"},"This is your order",-1)),C("div",sb,[(z(!0),K(de,null,Br(e.value,c=>(z(),K("div",{key:c.id,class:"order-item"},[C("div",ib,[C("p",ob,Ae(c.name),1),C("img",{class:"product-image",src:c.imageUrl=`http://localhost:8000/images/${c.id}.webp`,alt:"product"},null,8,ab)]),C("div",cb,[C("p",null,"Price: "+Ae(c.price)+" €",1),C("p",null,"Quantity: "+Ae(c.quantity),1)])]))),128)),C("div",lb,[C("p",null,"Total Price: "+Ae(s.value)+" €",1)])]),C("div",{class:"pay-btn"},[C("button",{onClick:i}," Click to pay! ")])]),Y(On)],64))}},fb={class:"confirm-container"},db={__name:"orderConfirm",setup(t){return window.scrollTo(0,0),(e,n)=>(z(),K(de,null,[C("div",fb,[Y(Ke(ar),{to:{name:"home"}},{default:Mt(()=>n[0]||(n[0]=[C("img",{class:"confirm-img",src:ro,alt:""},null,-1)])),_:1}),n[1]||(n[1]=C("h1",{class:"confirm-title"},"Congratulations, your order is confirmed",-1))]),Y(On)],64))}},hb=M_({history:d_("/"),routes:[{path:"/",name:"home",component:nb},{path:"/products",name:"products",component:Hv,props:t=>({user:t.params.user})},{path:"/product/:id",name:"product",component:Dv},{path:"/products/cart",name:"cart",component:eb,props:t=>({user:t.params.user})},{path:"/pay",name:"pay",component:ub,props:t=>({user:t.params.user})},{path:"/orderConfirm",name:"orderConfirm",component:db,props:t=>({user:t.params.user})},{path:"/:catchAll(.*)",name:"not-found",component:iu}]});var pb="firebase",mb="9.15.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gn(pb,mb,"app");const gb={apiKey:"AIzaSyCYFWnEgsjITHm6OIgXsH2t1b3HndT-UMg",authDomain:"basil-e-commerce.firebaseapp.com",projectId:"basil-e-commerce",storageBucket:"basil-e-commerce.firebasestorage.app",messagingSenderId:"145733370148",appId:"1:145733370148:web:d1ab652382b2daa5fc33b1"};fl(gb);const Pu=Yd(kg);Pu.use(hb);Pu.mount("#app");
