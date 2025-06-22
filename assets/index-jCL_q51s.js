(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Rd(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const $e={},ei=[],Bn=()=>{},rA=()=>!1,hc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),bd=t=>t.startsWith("onUpdate:"),Ut=Object.assign,Cd=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},iA=Object.prototype.hasOwnProperty,xe=(t,e)=>iA.call(t,e),de=Array.isArray,ti=t=>dc(t)==="[object Map]",Vy=t=>dc(t)==="[object Set]",pe=t=>typeof t=="function",it=t=>typeof t=="string",er=t=>typeof t=="symbol",Ge=t=>t!==null&&typeof t=="object",Fy=t=>(Ge(t)||pe(t))&&pe(t.then)&&pe(t.catch),Uy=Object.prototype.toString,dc=t=>Uy.call(t),oA=t=>dc(t).slice(8,-1),By=t=>dc(t)==="[object Object]",Sd=t=>it(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,_o=Rd(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},aA=/-(\w)/g,mn=fc(t=>t.replace(aA,(e,n)=>n?n.toUpperCase():"")),lA=/\B([A-Z])/g,Nr=fc(t=>t.replace(lA,"-$1").toLowerCase()),pc=fc(t=>t.charAt(0).toUpperCase()+t.slice(1)),Su=fc(t=>t?`on${pc(t)}`:""),Fs=(t,e)=>!Object.is(t,e),nl=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},hh=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},dh=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let om;const mc=()=>om||(om=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function gc(t){if(de(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=it(s)?dA(s):gc(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(it(t)||Ge(t))return t}const cA=/;(?![^(]*\))/g,uA=/:([^]+)/,hA=/\/\*[^]*?\*\//g;function dA(t){const e={};return t.replace(hA,"").split(cA).forEach(n=>{if(n){const s=n.split(uA);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function di(t){let e="";if(it(t))e=t;else if(de(t))for(let n=0;n<t.length;n++){const s=di(t[n]);s&&(e+=s+" ")}else if(Ge(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const fA="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",pA=Rd(fA);function $y(t){return!!t||t===""}const jy=t=>!!(t&&t.__v_isRef===!0),dt=t=>it(t)?t:t==null?"":de(t)||Ge(t)&&(t.toString===Uy||!pe(t.toString))?jy(t)?dt(t.value):JSON.stringify(t,Hy,2):String(t),Hy=(t,e)=>jy(e)?Hy(t,e.value):ti(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[Pu(s,i)+" =>"]=r,n),{})}:Vy(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Pu(n))}:er(e)?Pu(e):Ge(e)&&!de(e)&&!By(e)?String(e):e,Pu=(t,e="")=>{var n;return er(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let kt;class qy{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=kt,!e&&kt&&(this.index=(kt.scopes||(kt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=kt;try{return kt=this,e()}finally{kt=n}}}on(){++this._on===1&&(this.prevScope=kt,kt=this)}off(){this._on>0&&--this._on===0&&(kt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function mA(t){return new qy(t)}function Wy(){return kt}function gA(t,e=!1){kt&&kt.cleanups.push(t)}let je;const ku=new WeakSet;class zy{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,kt&&kt.active&&kt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ku.has(this)&&(ku.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Gy(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,am(this),Qy(this);const e=je,n=In;je=this,In=!0;try{return this.fn()}finally{Yy(this),je=e,In=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Nd(e);this.deps=this.depsTail=void 0,am(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ku.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){fh(this)&&this.run()}get dirty(){return fh(this)}}let Ky=0,yo,vo;function Gy(t,e=!1){if(t.flags|=8,e){t.next=vo,vo=t;return}t.next=yo,yo=t}function Pd(){Ky++}function kd(){if(--Ky>0)return;if(vo){let e=vo;for(vo=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;yo;){let e=yo;for(yo=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Qy(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Yy(t){let e,n=t.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),Nd(s),_A(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}t.deps=e,t.depsTail=n}function fh(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Xy(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Xy(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Lo)||(t.globalVersion=Lo,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!fh(t))))return;t.flags|=2;const e=t.dep,n=je,s=In;je=t,In=!0;try{Qy(t);const r=t.fn(t._value);(e.version===0||Fs(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{je=n,In=s,Yy(t),t.flags&=-3}}function Nd(t,e=!1){const{dep:n,prevSub:s,nextSub:r}=t;if(s&&(s.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Nd(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function _A(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let In=!0;const Jy=[];function ms(){Jy.push(In),In=!1}function gs(){const t=Jy.pop();In=t===void 0?!0:t}function am(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=je;je=void 0;try{e()}finally{je=n}}}let Lo=0;class yA{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Od{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!je||!In||je===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==je)n=this.activeLink=new yA(je,this),je.deps?(n.prevDep=je.depsTail,je.depsTail.nextDep=n,je.depsTail=n):je.deps=je.depsTail=n,Zy(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=je.depsTail,n.nextDep=void 0,je.depsTail.nextDep=n,je.depsTail=n,je.deps===n&&(je.deps=s)}return n}trigger(e){this.version++,Lo++,this.notify(e)}notify(e){Pd();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{kd()}}}function Zy(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Zy(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ph=new WeakMap,yr=Symbol(""),mh=Symbol(""),Vo=Symbol("");function Ot(t,e,n){if(In&&je){let s=ph.get(t);s||ph.set(t,s=new Map);let r=s.get(n);r||(s.set(n,r=new Od),r.map=s,r.key=n),r.track()}}function os(t,e,n,s,r,i){const o=ph.get(t);if(!o){Lo++;return}const a=c=>{c&&c.trigger()};if(Pd(),e==="clear")o.forEach(a);else{const c=de(t),u=c&&Sd(n);if(c&&n==="length"){const h=Number(s);o.forEach((d,p)=>{(p==="length"||p===Vo||!er(p)&&p>=h)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(Vo)),e){case"add":c?u&&a(o.get("length")):(a(o.get(yr)),ti(t)&&a(o.get(mh)));break;case"delete":c||(a(o.get(yr)),ti(t)&&a(o.get(mh)));break;case"set":ti(t)&&a(o.get(yr));break}}kd()}function jr(t){const e=De(t);return e===t?e:(Ot(e,"iterate",Vo),fn(t)?e:e.map(vt))}function _c(t){return Ot(t=De(t),"iterate",Vo),t}const vA={__proto__:null,[Symbol.iterator](){return Nu(this,Symbol.iterator,vt)},concat(...t){return jr(this).concat(...t.map(e=>de(e)?jr(e):e))},entries(){return Nu(this,"entries",t=>(t[1]=vt(t[1]),t))},every(t,e){return ts(this,"every",t,e,void 0,arguments)},filter(t,e){return ts(this,"filter",t,e,n=>n.map(vt),arguments)},find(t,e){return ts(this,"find",t,e,vt,arguments)},findIndex(t,e){return ts(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return ts(this,"findLast",t,e,vt,arguments)},findLastIndex(t,e){return ts(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return ts(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ou(this,"includes",t)},indexOf(...t){return Ou(this,"indexOf",t)},join(t){return jr(this).join(t)},lastIndexOf(...t){return Ou(this,"lastIndexOf",t)},map(t,e){return ts(this,"map",t,e,void 0,arguments)},pop(){return eo(this,"pop")},push(...t){return eo(this,"push",t)},reduce(t,...e){return lm(this,"reduce",t,e)},reduceRight(t,...e){return lm(this,"reduceRight",t,e)},shift(){return eo(this,"shift")},some(t,e){return ts(this,"some",t,e,void 0,arguments)},splice(...t){return eo(this,"splice",t)},toReversed(){return jr(this).toReversed()},toSorted(t){return jr(this).toSorted(t)},toSpliced(...t){return jr(this).toSpliced(...t)},unshift(...t){return eo(this,"unshift",t)},values(){return Nu(this,"values",vt)}};function Nu(t,e,n){const s=_c(t),r=s[e]();return s!==t&&!fn(t)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=n(i.value)),i}),r}const EA=Array.prototype;function ts(t,e,n,s,r,i){const o=_c(t),a=o!==t&&!fn(t),c=o[e];if(c!==EA[e]){const d=c.apply(t,i);return a?vt(d):d}let u=n;o!==t&&(a?u=function(d,p){return n.call(this,vt(d),p,t)}:n.length>2&&(u=function(d,p){return n.call(this,d,p,t)}));const h=c.call(o,u,s);return a&&r?r(h):h}function lm(t,e,n,s){const r=_c(t);let i=n;return r!==t&&(fn(t)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,t)}):i=function(o,a,c){return n.call(this,o,vt(a),c,t)}),r[e](i,...s)}function Ou(t,e,n){const s=De(t);Ot(s,"iterate",Vo);const r=s[e](...n);return(r===-1||r===!1)&&Md(n[0])?(n[0]=De(n[0]),s[e](...n)):r}function eo(t,e,n=[]){ms(),Pd();const s=De(t)[e].apply(t,n);return kd(),gs(),s}const TA=Rd("__proto__,__v_isRef,__isVue"),ev=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(er));function wA(t){er(t)||(t=String(t));const e=De(this);return Ot(e,"has",t),e.hasOwnProperty(t)}class tv{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?OA:iv:i?rv:sv).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=de(e);if(!r){let c;if(o&&(c=vA[n]))return c;if(n==="hasOwnProperty")return wA}const a=Reflect.get(e,n,It(e)?e:s);return(er(n)?ev.has(n):TA(n))||(r||Ot(e,"get",n),i)?a:It(a)?o&&Sd(n)?a:a.value:Ge(a)?r?av(a):yc(a):a}}class nv extends tv{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(!this._isShallow){const c=Ws(i);if(!fn(s)&&!Ws(s)&&(i=De(i),s=De(s)),!de(e)&&It(i)&&!It(s))return c?!1:(i.value=s,!0)}const o=de(e)&&Sd(n)?Number(n)<e.length:xe(e,n),a=Reflect.set(e,n,s,It(e)?e:r);return e===De(r)&&(o?Fs(s,i)&&os(e,"set",n,s):os(e,"add",n,s)),a}deleteProperty(e,n){const s=xe(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&os(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!er(n)||!ev.has(n))&&Ot(e,"has",n),s}ownKeys(e){return Ot(e,"iterate",de(e)?"length":yr),Reflect.ownKeys(e)}}class IA extends tv{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const AA=new nv,RA=new IA,bA=new nv(!0);const gh=t=>t,Ua=t=>Reflect.getPrototypeOf(t);function CA(t,e,n){return function(...s){const r=this.__v_raw,i=De(r),o=ti(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=r[t](...s),h=n?gh:e?El:vt;return!e&&Ot(i,"iterate",c?mh:yr),{next(){const{value:d,done:p}=u.next();return p?{value:d,done:p}:{value:a?[h(d[0]),h(d[1])]:h(d),done:p}},[Symbol.iterator](){return this}}}}function Ba(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function SA(t,e){const n={get(r){const i=this.__v_raw,o=De(i),a=De(r);t||(Fs(r,a)&&Ot(o,"get",r),Ot(o,"get",a));const{has:c}=Ua(o),u=e?gh:t?El:vt;if(c.call(o,r))return u(i.get(r));if(c.call(o,a))return u(i.get(a));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!t&&Ot(De(r),"iterate",yr),Reflect.get(r,"size",r)},has(r){const i=this.__v_raw,o=De(i),a=De(r);return t||(Fs(r,a)&&Ot(o,"has",r),Ot(o,"has",a)),r===a?i.has(r):i.has(r)||i.has(a)},forEach(r,i){const o=this,a=o.__v_raw,c=De(a),u=e?gh:t?El:vt;return!t&&Ot(c,"iterate",yr),a.forEach((h,d)=>r.call(i,u(h),u(d),o))}};return Ut(n,t?{add:Ba("add"),set:Ba("set"),delete:Ba("delete"),clear:Ba("clear")}:{add(r){!e&&!fn(r)&&!Ws(r)&&(r=De(r));const i=De(this);return Ua(i).has.call(i,r)||(i.add(r),os(i,"add",r,r)),this},set(r,i){!e&&!fn(i)&&!Ws(i)&&(i=De(i));const o=De(this),{has:a,get:c}=Ua(o);let u=a.call(o,r);u||(r=De(r),u=a.call(o,r));const h=c.call(o,r);return o.set(r,i),u?Fs(i,h)&&os(o,"set",r,i):os(o,"add",r,i),this},delete(r){const i=De(this),{has:o,get:a}=Ua(i);let c=o.call(i,r);c||(r=De(r),c=o.call(i,r)),a&&a.call(i,r);const u=i.delete(r);return c&&os(i,"delete",r,void 0),u},clear(){const r=De(this),i=r.size!==0,o=r.clear();return i&&os(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=CA(r,t,e)}),n}function Dd(t,e){const n=SA(t,e);return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(xe(n,r)&&r in s?n:s,r,i)}const PA={get:Dd(!1,!1)},kA={get:Dd(!1,!0)},NA={get:Dd(!0,!1)};const sv=new WeakMap,rv=new WeakMap,iv=new WeakMap,OA=new WeakMap;function DA(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function xA(t){return t.__v_skip||!Object.isExtensible(t)?0:DA(oA(t))}function yc(t){return Ws(t)?t:xd(t,!1,AA,PA,sv)}function ov(t){return xd(t,!1,bA,kA,rv)}function av(t){return xd(t,!0,RA,NA,iv)}function xd(t,e,n,s,r){if(!Ge(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=xA(t);if(i===0)return t;const o=r.get(t);if(o)return o;const a=new Proxy(t,i===2?s:n);return r.set(t,a),a}function ni(t){return Ws(t)?ni(t.__v_raw):!!(t&&t.__v_isReactive)}function Ws(t){return!!(t&&t.__v_isReadonly)}function fn(t){return!!(t&&t.__v_isShallow)}function Md(t){return t?!!t.__v_raw:!1}function De(t){const e=t&&t.__v_raw;return e?De(e):t}function MA(t){return!xe(t,"__v_skip")&&Object.isExtensible(t)&&hh(t,"__v_skip",!0),t}const vt=t=>Ge(t)?yc(t):t,El=t=>Ge(t)?av(t):t;function It(t){return t?t.__v_isRef===!0:!1}function Me(t){return cv(t,!1)}function lv(t){return cv(t,!0)}function cv(t,e){return It(t)?t:new LA(t,e)}class LA{constructor(e,n){this.dep=new Od,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:De(e),this._value=n?e:vt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||fn(e)||Ws(e);e=s?e:De(e),Fs(e,n)&&(this._rawValue=e,this._value=s?e:vt(e),this.dep.trigger())}}function pt(t){return It(t)?t.value:t}function rs(t){return pe(t)?t():pt(t)}const VA={get:(t,e,n)=>e==="__v_raw"?t:pt(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return It(r)&&!It(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function uv(t){return ni(t)?t:new Proxy(t,VA)}class FA{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Od(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Lo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&je!==this)return Gy(this,!0),!0}get value(){const e=this.dep.track();return Xy(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function UA(t,e,n=!1){let s,r;return pe(t)?s=t:(s=t.get,r=t.set),new FA(s,r,n)}const $a={},Tl=new WeakMap;let dr;function BA(t,e=!1,n=dr){if(n){let s=Tl.get(n);s||Tl.set(n,s=[]),s.push(t)}}function $A(t,e,n=$e){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:a,call:c}=n,u=V=>r?V:fn(V)||r===!1||r===0?as(V,1):as(V);let h,d,p,g,y=!1,T=!1;if(It(t)?(d=()=>t.value,y=fn(t)):ni(t)?(d=()=>u(t),y=!0):de(t)?(T=!0,y=t.some(V=>ni(V)||fn(V)),d=()=>t.map(V=>{if(It(V))return V.value;if(ni(V))return u(V);if(pe(V))return c?c(V,2):V()})):pe(t)?e?d=c?()=>c(t,2):t:d=()=>{if(p){ms();try{p()}finally{gs()}}const V=dr;dr=h;try{return c?c(t,3,[g]):t(g)}finally{dr=V}}:d=Bn,e&&r){const V=d,Z=r===!0?1/0:r;d=()=>as(V(),Z)}const w=Wy(),O=()=>{h.stop(),w&&w.active&&Cd(w.effects,h)};if(i&&e){const V=e;e=(...Z)=>{V(...Z),O()}}let D=T?new Array(t.length).fill($a):$a;const x=V=>{if(!(!(h.flags&1)||!h.dirty&&!V))if(e){const Z=h.run();if(r||y||(T?Z.some((se,b)=>Fs(se,D[b])):Fs(Z,D))){p&&p();const se=dr;dr=h;try{const b=[Z,D===$a?void 0:T&&D[0]===$a?[]:D,g];D=Z,c?c(e,3,b):e(...b)}finally{dr=se}}}else h.run()};return a&&a(x),h=new zy(d),h.scheduler=o?()=>o(x,!1):x,g=V=>BA(V,!1,h),p=h.onStop=()=>{const V=Tl.get(h);if(V){if(c)c(V,4);else for(const Z of V)Z();Tl.delete(h)}},e?s?x(!0):D=h.run():o?o(x.bind(null,!0),!0):h.run(),O.pause=h.pause.bind(h),O.resume=h.resume.bind(h),O.stop=O,O}function as(t,e=1/0,n){if(e<=0||!Ge(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,It(t))as(t.value,e,n);else if(de(t))for(let s=0;s<t.length;s++)as(t[s],e,n);else if(Vy(t)||ti(t))t.forEach(s=>{as(s,e,n)});else if(By(t)){for(const s in t)as(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&as(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ra(t,e,n,s){try{return s?t(...s):t()}catch(r){vc(r,e,n)}}function zn(t,e,n,s){if(pe(t)){const r=ra(t,e,n,s);return r&&Fy(r)&&r.catch(i=>{vc(i,e,n)}),r}if(de(t)){const r=[];for(let i=0;i<t.length;i++)r.push(zn(t[i],e,n,s));return r}}function vc(t,e,n,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||$e;if(e){let a=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const h=a.ec;if(h){for(let d=0;d<h.length;d++)if(h[d](t,c,u)===!1)return}a=a.parent}if(i){ms(),ra(i,null,10,[t,c,u]),gs();return}}jA(t,n,r,s,o)}function jA(t,e,n,s=!0,r=!1){if(r)throw t;console.error(t)}const qt=[];let xn=-1;const si=[];let ks=null,qr=0;const hv=Promise.resolve();let wl=null;function dv(t){const e=wl||hv;return t?e.then(this?t.bind(this):t):e}function HA(t){let e=xn+1,n=qt.length;for(;e<n;){const s=e+n>>>1,r=qt[s],i=Fo(r);i<t||i===t&&r.flags&2?e=s+1:n=s}return e}function Ld(t){if(!(t.flags&1)){const e=Fo(t),n=qt[qt.length-1];!n||!(t.flags&2)&&e>=Fo(n)?qt.push(t):qt.splice(HA(e),0,t),t.flags|=1,fv()}}function fv(){wl||(wl=hv.then(mv))}function qA(t){de(t)?si.push(...t):ks&&t.id===-1?ks.splice(qr+1,0,t):t.flags&1||(si.push(t),t.flags|=1),fv()}function cm(t,e,n=xn+1){for(;n<qt.length;n++){const s=qt[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;qt.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function pv(t){if(si.length){const e=[...new Set(si)].sort((n,s)=>Fo(n)-Fo(s));if(si.length=0,ks){ks.push(...e);return}for(ks=e,qr=0;qr<ks.length;qr++){const n=ks[qr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}ks=null,qr=0}}const Fo=t=>t.id==null?t.flags&2?-1:1/0:t.id;function mv(t){try{for(xn=0;xn<qt.length;xn++){const e=qt[xn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ra(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;xn<qt.length;xn++){const e=qt[xn];e&&(e.flags&=-2)}xn=-1,qt.length=0,pv(),wl=null,(qt.length||si.length)&&mv()}}let Qt=null,gv=null;function Il(t){const e=Qt;return Qt=t,gv=t&&t.type.__scopeId||null,e}function ls(t,e=Qt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&vm(-1);const i=Il(e);let o;try{o=t(...r)}finally{Il(i),s._d&&vm(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Al(t,e){if(Qt===null)return t;const n=Ic(Qt),s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,a,c=$e]=e[r];i&&(pe(i)&&(i={mounted:i,updated:i}),i.deep&&as(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function ur(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(ms(),zn(c,n,8,[t.el,a,t,e]),gs())}}const WA=Symbol("_vte"),zA=t=>t.__isTeleport;function Vd(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Vd(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function _v(t,e){return pe(t)?Ut({name:t.name},e,{setup:t}):t}function yv(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Eo(t,e,n,s,r=!1){if(de(t)){t.forEach((y,T)=>Eo(y,e&&(de(e)?e[T]:e),n,s,r));return}if(To(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Eo(t,e,n,s.component.subTree);return}const i=s.shapeFlag&4?Ic(s.component):s.el,o=r?null:i,{i:a,r:c}=t,u=e&&e.r,h=a.refs===$e?a.refs={}:a.refs,d=a.setupState,p=De(d),g=d===$e?()=>!1:y=>xe(p,y);if(u!=null&&u!==c&&(it(u)?(h[u]=null,g(u)&&(d[u]=null)):It(u)&&(u.value=null)),pe(c))ra(c,a,12,[o,h]);else{const y=it(c),T=It(c);if(y||T){const w=()=>{if(t.f){const O=y?g(c)?d[c]:h[c]:c.value;r?de(O)&&Cd(O,i):de(O)?O.includes(i)||O.push(i):y?(h[c]=[i],g(c)&&(d[c]=h[c])):(c.value=[i],t.k&&(h[t.k]=c.value))}else y?(h[c]=o,g(c)&&(d[c]=o)):T&&(c.value=o,t.k&&(h[t.k]=o))};o?(w.id=-1,nn(w,n)):w()}}}mc().requestIdleCallback;mc().cancelIdleCallback;const To=t=>!!t.type.__asyncLoader,vv=t=>t.type.__isKeepAlive;function KA(t,e){Ev(t,"a",e)}function GA(t,e){Ev(t,"da",e)}function Ev(t,e,n=Et){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Ec(e,s,n),n){let r=n.parent;for(;r&&r.parent;)vv(r.parent.vnode)&&QA(s,e,n,r),r=r.parent}}function QA(t,e,n,s){const r=Ec(e,t,s,!0);Tv(()=>{Cd(s[e],r)},n)}function Ec(t,e,n=Et,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{ms();const a=ia(n),c=zn(e,n,t,o);return a(),gs(),c});return s?r.unshift(i):r.push(i),i}}const Ts=t=>(e,n=Et)=>{(!Bo||t==="sp")&&Ec(t,(...s)=>e(...s),n)},YA=Ts("bm"),Fd=Ts("m"),XA=Ts("bu"),JA=Ts("u"),ZA=Ts("bum"),Tv=Ts("um"),wv=Ts("sp"),eR=Ts("rtg"),tR=Ts("rtc");function nR(t,e=Et){Ec("ec",t,e)}const sR="components";function Ud(t,e){return iR(sR,t,!0,e)||t}const rR=Symbol.for("v-ndc");function iR(t,e,n=!0,s=!1){const r=Qt||Et;if(r){const i=r.type;{const a=KR(i,!1);if(a&&(a===e||a===mn(e)||a===pc(mn(e))))return i}const o=um(r[t]||i[t],e)||um(r.appContext[t],e);return!o&&s?i:o}}function um(t,e){return t&&(t[e]||t[mn(e)]||t[pc(mn(e))])}function fi(t,e,n,s){let r;const i=n,o=de(t);if(o||it(t)){const a=o&&ni(t);let c=!1,u=!1;a&&(c=!fn(t),u=Ws(t),t=_c(t)),r=new Array(t.length);for(let h=0,d=t.length;h<d;h++)r[h]=e(c?u?El(vt(t[h])):vt(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,i)}else if(Ge(t))if(t[Symbol.iterator])r=Array.from(t,(a,c)=>e(a,c,void 0,i));else{const a=Object.keys(t);r=new Array(a.length);for(let c=0,u=a.length;c<u;c++){const h=a[c];r[c]=e(t[h],h,c,i)}}else r=[];return r}const _h=t=>t?qv(t)?Ic(t):_h(t.parent):null,wo=Ut(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>_h(t.parent),$root:t=>_h(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Av(t),$forceUpdate:t=>t.f||(t.f=()=>{Ld(t.update)}),$nextTick:t=>t.n||(t.n=dv.bind(t.proxy)),$watch:t=>bR.bind(t)}),Du=(t,e)=>t!==$e&&!t.__isScriptSetup&&xe(t,e),oR={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(Du(s,e))return o[e]=1,s[e];if(r!==$e&&xe(r,e))return o[e]=2,r[e];if((u=t.propsOptions[0])&&xe(u,e))return o[e]=3,i[e];if(n!==$e&&xe(n,e))return o[e]=4,n[e];yh&&(o[e]=0)}}const h=wo[e];let d,p;if(h)return e==="$attrs"&&Ot(t.attrs,"get",""),h(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==$e&&xe(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,xe(p,e))return p[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return Du(r,e)?(r[e]=n,!0):s!==$e&&xe(s,e)?(s[e]=n,!0):xe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==$e&&xe(t,o)||Du(e,o)||(a=i[0])&&xe(a,o)||xe(s,o)||xe(wo,o)||xe(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:xe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function hm(t){return de(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let yh=!0;function aR(t){const e=Av(t),n=t.proxy,s=t.ctx;yh=!1,e.beforeCreate&&dm(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:u,created:h,beforeMount:d,mounted:p,beforeUpdate:g,updated:y,activated:T,deactivated:w,beforeDestroy:O,beforeUnmount:D,destroyed:x,unmounted:V,render:Z,renderTracked:se,renderTriggered:b,errorCaptured:v,serverPrefetch:A,expose:C,inheritAttrs:S,components:k,directives:R,filters:$t}=e;if(u&&lR(u,s,null),o)for(const Re in o){const Te=o[Re];pe(Te)&&(s[Re]=Te.bind(n))}if(r){const Re=r.call(n,n);Ge(Re)&&(t.data=yc(Re))}if(yh=!0,i)for(const Re in i){const Te=i[Re],en=pe(Te)?Te.bind(n,n):pe(Te.get)?Te.get.bind(n,n):Bn,_n=!pe(Te)&&pe(Te.set)?Te.set.bind(n):Bn,cn=Je({get:en,set:_n});Object.defineProperty(s,Re,{enumerable:!0,configurable:!0,get:()=>cn.value,set:Qe=>cn.value=Qe})}if(a)for(const Re in a)Iv(a[Re],s,n,Re);if(c){const Re=pe(c)?c.call(n):c;Reflect.ownKeys(Re).forEach(Te=>{sl(Te,Re[Te])})}h&&dm(h,t,"c");function nt(Re,Te){de(Te)?Te.forEach(en=>Re(en.bind(n))):Te&&Re(Te.bind(n))}if(nt(YA,d),nt(Fd,p),nt(XA,g),nt(JA,y),nt(KA,T),nt(GA,w),nt(nR,v),nt(tR,se),nt(eR,b),nt(ZA,D),nt(Tv,V),nt(wv,A),de(C))if(C.length){const Re=t.exposed||(t.exposed={});C.forEach(Te=>{Object.defineProperty(Re,Te,{get:()=>n[Te],set:en=>n[Te]=en})})}else t.exposed||(t.exposed={});Z&&t.render===Bn&&(t.render=Z),S!=null&&(t.inheritAttrs=S),k&&(t.components=k),R&&(t.directives=R),A&&yv(t)}function lR(t,e,n=Bn){de(t)&&(t=vh(t));for(const s in t){const r=t[s];let i;Ge(r)?"default"in r?i=pn(r.from||s,r.default,!0):i=pn(r.from||s):i=pn(r),It(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function dm(t,e,n){zn(de(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Iv(t,e,n,s){let r=s.includes(".")?Vv(n,s):()=>n[s];if(it(t)){const i=e[t];pe(i)&&ii(r,i)}else if(pe(t))ii(r,t.bind(n));else if(Ge(t))if(de(t))t.forEach(i=>Iv(i,e,n,s));else{const i=pe(t.handler)?t.handler.bind(n):e[t.handler];pe(i)&&ii(r,i,t)}}function Av(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(u=>Rl(c,u,o,!0)),Rl(c,e,o)),Ge(e)&&i.set(e,c),c}function Rl(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Rl(t,i,n,!0),r&&r.forEach(o=>Rl(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=cR[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const cR={data:fm,props:pm,emits:pm,methods:lo,computed:lo,beforeCreate:Ht,created:Ht,beforeMount:Ht,mounted:Ht,beforeUpdate:Ht,updated:Ht,beforeDestroy:Ht,beforeUnmount:Ht,destroyed:Ht,unmounted:Ht,activated:Ht,deactivated:Ht,errorCaptured:Ht,serverPrefetch:Ht,components:lo,directives:lo,watch:hR,provide:fm,inject:uR};function fm(t,e){return e?t?function(){return Ut(pe(t)?t.call(this,this):t,pe(e)?e.call(this,this):e)}:e:t}function uR(t,e){return lo(vh(t),vh(e))}function vh(t){if(de(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ht(t,e){return t?[...new Set([].concat(t,e))]:e}function lo(t,e){return t?Ut(Object.create(null),t,e):e}function pm(t,e){return t?de(t)&&de(e)?[...new Set([...t,...e])]:Ut(Object.create(null),hm(t),hm(e??{})):e}function hR(t,e){if(!t)return e;if(!e)return t;const n=Ut(Object.create(null),t);for(const s in e)n[s]=Ht(t[s],e[s]);return n}function Rv(){return{app:null,config:{isNativeTag:rA,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let dR=0;function fR(t,e){return function(s,r=null){pe(s)||(s=Ut({},s)),r!=null&&!Ge(r)&&(r=null);const i=Rv(),o=new WeakSet,a=[];let c=!1;const u=i.app={_uid:dR++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:QR,get config(){return i.config},set config(h){},use(h,...d){return o.has(h)||(h&&pe(h.install)?(o.add(h),h.install(u,...d)):pe(h)&&(o.add(h),h(u,...d))),u},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),u},component(h,d){return d?(i.components[h]=d,u):i.components[h]},directive(h,d){return d?(i.directives[h]=d,u):i.directives[h]},mount(h,d,p){if(!c){const g=u._ceVNode||Ve(s,r);return g.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),t(g,h,p),c=!0,u._container=h,h.__vue_app__=u,Ic(g.component)}},onUnmount(h){a.push(h)},unmount(){c&&(zn(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(h,d){return i.provides[h]=d,u},runWithContext(h){const d=ri;ri=u;try{return h()}finally{ri=d}}};return u}}let ri=null;function sl(t,e){if(Et){let n=Et.provides;const s=Et.parent&&Et.parent.provides;s===n&&(n=Et.provides=Object.create(s)),n[t]=e}}function pn(t,e,n=!1){const s=Et||Qt;if(s||ri){let r=ri?ri._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&pe(e)?e.call(s&&s.proxy):e}}const bv={},Cv=()=>Object.create(bv),Sv=t=>Object.getPrototypeOf(t)===bv;function pR(t,e,n,s=!1){const r={},i=Cv();t.propsDefaults=Object.create(null),Pv(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:ov(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function mR(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=De(r),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let d=0;d<h.length;d++){let p=h[d];if(Tc(t.emitsOptions,p))continue;const g=e[p];if(c)if(xe(i,p))g!==i[p]&&(i[p]=g,u=!0);else{const y=mn(p);r[y]=Eh(c,a,y,g,t,!1)}else g!==i[p]&&(i[p]=g,u=!0)}}}else{Pv(t,e,r,i)&&(u=!0);let h;for(const d in a)(!e||!xe(e,d)&&((h=Nr(d))===d||!xe(e,h)))&&(c?n&&(n[d]!==void 0||n[h]!==void 0)&&(r[d]=Eh(c,a,d,void 0,t,!0)):delete r[d]);if(i!==a)for(const d in i)(!e||!xe(e,d))&&(delete i[d],u=!0)}u&&os(t.attrs,"set","")}function Pv(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(_o(c))continue;const u=e[c];let h;r&&xe(r,h=mn(c))?!i||!i.includes(h)?n[h]=u:(a||(a={}))[h]=u:Tc(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(i){const c=De(n),u=a||$e;for(let h=0;h<i.length;h++){const d=i[h];n[d]=Eh(r,c,d,u[d],t,!xe(u,d))}}return o}function Eh(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=xe(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&pe(c)){const{propsDefaults:u}=r;if(n in u)s=u[n];else{const h=ia(r);s=u[n]=c.call(null,e),h()}}else s=c;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Nr(n))&&(s=!0))}return s}const gR=new WeakMap;function kv(t,e,n=!1){const s=n?gR:e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!pe(t)){const h=d=>{c=!0;const[p,g]=kv(d,e,!0);Ut(o,p),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!c)return Ge(t)&&s.set(t,ei),ei;if(de(i))for(let h=0;h<i.length;h++){const d=mn(i[h]);mm(d)&&(o[d]=$e)}else if(i)for(const h in i){const d=mn(h);if(mm(d)){const p=i[h],g=o[d]=de(p)||pe(p)?{type:p}:Ut({},p),y=g.type;let T=!1,w=!0;if(de(y))for(let O=0;O<y.length;++O){const D=y[O],x=pe(D)&&D.name;if(x==="Boolean"){T=!0;break}else x==="String"&&(w=!1)}else T=pe(y)&&y.name==="Boolean";g[0]=T,g[1]=w,(T||xe(g,"default"))&&a.push(d)}}const u=[o,a];return Ge(t)&&s.set(t,u),u}function mm(t){return t[0]!=="$"&&!_o(t)}const Bd=t=>t[0]==="_"||t==="$stable",$d=t=>de(t)?t.map(Ln):[Ln(t)],_R=(t,e,n)=>{if(e._n)return e;const s=ls((...r)=>$d(e(...r)),n);return s._c=!1,s},Nv=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Bd(r))continue;const i=t[r];if(pe(i))e[r]=_R(r,i,s);else if(i!=null){const o=$d(i);e[r]=()=>o}}},Ov=(t,e)=>{const n=$d(e);t.slots.default=()=>n},Dv=(t,e,n)=>{for(const s in e)(n||!Bd(s))&&(t[s]=e[s])},yR=(t,e,n)=>{const s=t.slots=Cv();if(t.vnode.shapeFlag&32){const r=e.__;r&&hh(s,"__",r,!0);const i=e._;i?(Dv(s,e,n),n&&hh(s,"_",i,!0)):Nv(e,s)}else e&&Ov(t,e)},vR=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=$e;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:Dv(r,e,n):(i=!e.$stable,Nv(e,r)),o=e}else e&&(Ov(t,e),o={default:1});if(i)for(const a in r)!Bd(a)&&o[a]==null&&delete r[a]},nn=DR;function ER(t){return TR(t)}function TR(t,e){const n=mc();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:h,parentNode:d,nextSibling:p,setScopeId:g=Bn,insertStaticContent:y}=t,T=(E,I,P,U=null,j=null,B=null,Y=void 0,K=null,z=!!I.dynamicChildren)=>{if(E===I)return;E&&!to(E,I)&&(U=F(E),Qe(E,j,B,!0),E=null),I.patchFlag===-2&&(z=!1,I.dynamicChildren=null);const{type:q,ref:oe,shapeFlag:Q}=I;switch(q){case wc:w(E,I,P,U);break;case zs:O(E,I,P,U);break;case rl:E==null&&D(I,P,U,Y);break;case et:k(E,I,P,U,j,B,Y,K,z);break;default:Q&1?Z(E,I,P,U,j,B,Y,K,z):Q&6?R(E,I,P,U,j,B,Y,K,z):(Q&64||Q&128)&&q.process(E,I,P,U,j,B,Y,K,z,ne)}oe!=null&&j?Eo(oe,E&&E.ref,B,I||E,!I):oe==null&&E&&E.ref!=null&&Eo(E.ref,null,B,E,!0)},w=(E,I,P,U)=>{if(E==null)s(I.el=a(I.children),P,U);else{const j=I.el=E.el;I.children!==E.children&&u(j,I.children)}},O=(E,I,P,U)=>{E==null?s(I.el=c(I.children||""),P,U):I.el=E.el},D=(E,I,P,U)=>{[E.el,E.anchor]=y(E.children,I,P,U,E.el,E.anchor)},x=({el:E,anchor:I},P,U)=>{let j;for(;E&&E!==I;)j=p(E),s(E,P,U),E=j;s(I,P,U)},V=({el:E,anchor:I})=>{let P;for(;E&&E!==I;)P=p(E),r(E),E=P;r(I)},Z=(E,I,P,U,j,B,Y,K,z)=>{I.type==="svg"?Y="svg":I.type==="math"&&(Y="mathml"),E==null?se(I,P,U,j,B,Y,K,z):A(E,I,j,B,Y,K,z)},se=(E,I,P,U,j,B,Y,K)=>{let z,q;const{props:oe,shapeFlag:Q,transition:re,dirs:he}=E;if(z=E.el=o(E.type,B,oe&&oe.is,oe),Q&8?h(z,E.children):Q&16&&v(E.children,z,null,U,j,xu(E,B),Y,K),he&&ur(E,null,U,"created"),b(z,E,E.scopeId,Y,U),oe){for(const ge in oe)ge!=="value"&&!_o(ge)&&i(z,ge,null,oe[ge],B,U);"value"in oe&&i(z,"value",null,oe.value,B),(q=oe.onVnodeBeforeMount)&&On(q,U,E)}he&&ur(E,null,U,"beforeMount");const le=wR(j,re);le&&re.beforeEnter(z),s(z,I,P),((q=oe&&oe.onVnodeMounted)||le||he)&&nn(()=>{q&&On(q,U,E),le&&re.enter(z),he&&ur(E,null,U,"mounted")},j)},b=(E,I,P,U,j)=>{if(P&&g(E,P),U)for(let B=0;B<U.length;B++)g(E,U[B]);if(j){let B=j.subTree;if(I===B||Uv(B.type)&&(B.ssContent===I||B.ssFallback===I)){const Y=j.vnode;b(E,Y,Y.scopeId,Y.slotScopeIds,j.parent)}}},v=(E,I,P,U,j,B,Y,K,z=0)=>{for(let q=z;q<E.length;q++){const oe=E[q]=K?Ns(E[q]):Ln(E[q]);T(null,oe,I,P,U,j,B,Y,K)}},A=(E,I,P,U,j,B,Y)=>{const K=I.el=E.el;let{patchFlag:z,dynamicChildren:q,dirs:oe}=I;z|=E.patchFlag&16;const Q=E.props||$e,re=I.props||$e;let he;if(P&&hr(P,!1),(he=re.onVnodeBeforeUpdate)&&On(he,P,I,E),oe&&ur(I,E,P,"beforeUpdate"),P&&hr(P,!0),(Q.innerHTML&&re.innerHTML==null||Q.textContent&&re.textContent==null)&&h(K,""),q?C(E.dynamicChildren,q,K,P,U,xu(I,j),B):Y||Te(E,I,K,null,P,U,xu(I,j),B,!1),z>0){if(z&16)S(K,Q,re,P,j);else if(z&2&&Q.class!==re.class&&i(K,"class",null,re.class,j),z&4&&i(K,"style",Q.style,re.style,j),z&8){const le=I.dynamicProps;for(let ge=0;ge<le.length;ge++){const be=le[ge],mt=Q[be],gt=re[be];(gt!==mt||be==="value")&&i(K,be,mt,gt,j,P)}}z&1&&E.children!==I.children&&h(K,I.children)}else!Y&&q==null&&S(K,Q,re,P,j);((he=re.onVnodeUpdated)||oe)&&nn(()=>{he&&On(he,P,I,E),oe&&ur(I,E,P,"updated")},U)},C=(E,I,P,U,j,B,Y)=>{for(let K=0;K<I.length;K++){const z=E[K],q=I[K],oe=z.el&&(z.type===et||!to(z,q)||z.shapeFlag&198)?d(z.el):P;T(z,q,oe,null,U,j,B,Y,!0)}},S=(E,I,P,U,j)=>{if(I!==P){if(I!==$e)for(const B in I)!_o(B)&&!(B in P)&&i(E,B,I[B],null,j,U);for(const B in P){if(_o(B))continue;const Y=P[B],K=I[B];Y!==K&&B!=="value"&&i(E,B,K,Y,j,U)}"value"in P&&i(E,"value",I.value,P.value,j)}},k=(E,I,P,U,j,B,Y,K,z)=>{const q=I.el=E?E.el:a(""),oe=I.anchor=E?E.anchor:a("");let{patchFlag:Q,dynamicChildren:re,slotScopeIds:he}=I;he&&(K=K?K.concat(he):he),E==null?(s(q,P,U),s(oe,P,U),v(I.children||[],P,oe,j,B,Y,K,z)):Q>0&&Q&64&&re&&E.dynamicChildren?(C(E.dynamicChildren,re,P,j,B,Y,K),(I.key!=null||j&&I===j.subTree)&&xv(E,I,!0)):Te(E,I,P,oe,j,B,Y,K,z)},R=(E,I,P,U,j,B,Y,K,z)=>{I.slotScopeIds=K,E==null?I.shapeFlag&512?j.ctx.activate(I,P,U,Y,z):$t(I,P,U,j,B,Y,z):ln(E,I,z)},$t=(E,I,P,U,j,B,Y)=>{const K=E.component=jR(E,U,j);if(vv(E)&&(K.ctx.renderer=ne),HR(K,!1,Y),K.asyncDep){if(j&&j.registerDep(K,nt,Y),!E.el){const z=K.subTree=Ve(zs);O(null,z,I,P)}}else nt(K,E,I,P,j,B,Y)},ln=(E,I,P)=>{const U=I.component=E.component;if(NR(E,I,P))if(U.asyncDep&&!U.asyncResolved){Re(U,I,P);return}else U.next=I,U.update();else I.el=E.el,U.vnode=I},nt=(E,I,P,U,j,B,Y)=>{const K=()=>{if(E.isMounted){let{next:Q,bu:re,u:he,parent:le,vnode:ge}=E;{const bt=Mv(E);if(bt){Q&&(Q.el=ge.el,Re(E,Q,Y)),bt.asyncDep.then(()=>{E.isUnmounted||K()});return}}let be=Q,mt;hr(E,!1),Q?(Q.el=ge.el,Re(E,Q,Y)):Q=ge,re&&nl(re),(mt=Q.props&&Q.props.onVnodeBeforeUpdate)&&On(mt,le,Q,ge),hr(E,!0);const gt=_m(E),un=E.subTree;E.subTree=gt,T(un,gt,d(un.el),F(un),E,j,B),Q.el=gt.el,be===null&&OR(E,gt.el),he&&nn(he,j),(mt=Q.props&&Q.props.onVnodeUpdated)&&nn(()=>On(mt,le,Q,ge),j)}else{let Q;const{el:re,props:he}=I,{bm:le,m:ge,parent:be,root:mt,type:gt}=E,un=To(I);hr(E,!1),le&&nl(le),!un&&(Q=he&&he.onVnodeBeforeMount)&&On(Q,be,I),hr(E,!0);{mt.ce&&mt.ce._def.shadowRoot!==!1&&mt.ce._injectChildStyle(gt);const bt=E.subTree=_m(E);T(null,bt,P,U,E,j,B),I.el=bt.el}if(ge&&nn(ge,j),!un&&(Q=he&&he.onVnodeMounted)){const bt=I;nn(()=>On(Q,be,bt),j)}(I.shapeFlag&256||be&&To(be.vnode)&&be.vnode.shapeFlag&256)&&E.a&&nn(E.a,j),E.isMounted=!0,I=P=U=null}};E.scope.on();const z=E.effect=new zy(K);E.scope.off();const q=E.update=z.run.bind(z),oe=E.job=z.runIfDirty.bind(z);oe.i=E,oe.id=E.uid,z.scheduler=()=>Ld(oe),hr(E,!0),q()},Re=(E,I,P)=>{I.component=E;const U=E.vnode.props;E.vnode=I,E.next=null,mR(E,I.props,U,P),vR(E,I.children,P),ms(),cm(E),gs()},Te=(E,I,P,U,j,B,Y,K,z=!1)=>{const q=E&&E.children,oe=E?E.shapeFlag:0,Q=I.children,{patchFlag:re,shapeFlag:he}=I;if(re>0){if(re&128){_n(q,Q,P,U,j,B,Y,K,z);return}else if(re&256){en(q,Q,P,U,j,B,Y,K,z);return}}he&8?(oe&16&&Wt(q,j,B),Q!==q&&h(P,Q)):oe&16?he&16?_n(q,Q,P,U,j,B,Y,K,z):Wt(q,j,B,!0):(oe&8&&h(P,""),he&16&&v(Q,P,U,j,B,Y,K,z))},en=(E,I,P,U,j,B,Y,K,z)=>{E=E||ei,I=I||ei;const q=E.length,oe=I.length,Q=Math.min(q,oe);let re;for(re=0;re<Q;re++){const he=I[re]=z?Ns(I[re]):Ln(I[re]);T(E[re],he,P,null,j,B,Y,K,z)}q>oe?Wt(E,j,B,!0,!1,Q):v(I,P,U,j,B,Y,K,z,Q)},_n=(E,I,P,U,j,B,Y,K,z)=>{let q=0;const oe=I.length;let Q=E.length-1,re=oe-1;for(;q<=Q&&q<=re;){const he=E[q],le=I[q]=z?Ns(I[q]):Ln(I[q]);if(to(he,le))T(he,le,P,null,j,B,Y,K,z);else break;q++}for(;q<=Q&&q<=re;){const he=E[Q],le=I[re]=z?Ns(I[re]):Ln(I[re]);if(to(he,le))T(he,le,P,null,j,B,Y,K,z);else break;Q--,re--}if(q>Q){if(q<=re){const he=re+1,le=he<oe?I[he].el:U;for(;q<=re;)T(null,I[q]=z?Ns(I[q]):Ln(I[q]),P,le,j,B,Y,K,z),q++}}else if(q>re)for(;q<=Q;)Qe(E[q],j,B,!0),q++;else{const he=q,le=q,ge=new Map;for(q=le;q<=re;q++){const _t=I[q]=z?Ns(I[q]):Ln(I[q]);_t.key!=null&&ge.set(_t.key,q)}let be,mt=0;const gt=re-le+1;let un=!1,bt=0;const As=new Array(gt);for(q=0;q<gt;q++)As[q]=0;for(q=he;q<=Q;q++){const _t=E[q];if(mt>=gt){Qe(_t,j,B,!0);continue}let hn;if(_t.key!=null)hn=ge.get(_t.key);else for(be=le;be<=re;be++)if(As[be-le]===0&&to(_t,I[be])){hn=be;break}hn===void 0?Qe(_t,j,B,!0):(As[hn-le]=q+1,hn>=bt?bt=hn:un=!0,T(_t,I[hn],P,null,j,B,Y,K,z),mt++)}const $i=un?IR(As):ei;for(be=$i.length-1,q=gt-1;q>=0;q--){const _t=le+q,hn=I[_t],Ia=_t+1<oe?I[_t+1].el:U;As[q]===0?T(null,hn,P,Ia,j,B,Y,K,z):un&&(be<0||q!==$i[be]?cn(hn,P,Ia,2):be--)}}},cn=(E,I,P,U,j=null)=>{const{el:B,type:Y,transition:K,children:z,shapeFlag:q}=E;if(q&6){cn(E.component.subTree,I,P,U);return}if(q&128){E.suspense.move(I,P,U);return}if(q&64){Y.move(E,I,P,ne);return}if(Y===et){s(B,I,P);for(let Q=0;Q<z.length;Q++)cn(z[Q],I,P,U);s(E.anchor,I,P);return}if(Y===rl){x(E,I,P);return}if(U!==2&&q&1&&K)if(U===0)K.beforeEnter(B),s(B,I,P),nn(()=>K.enter(B),j);else{const{leave:Q,delayLeave:re,afterLeave:he}=K,le=()=>{E.ctx.isUnmounted?r(B):s(B,I,P)},ge=()=>{Q(B,()=>{le(),he&&he()})};re?re(B,le,ge):ge()}else s(B,I,P)},Qe=(E,I,P,U=!1,j=!1)=>{const{type:B,props:Y,ref:K,children:z,dynamicChildren:q,shapeFlag:oe,patchFlag:Q,dirs:re,cacheIndex:he}=E;if(Q===-2&&(j=!1),K!=null&&(ms(),Eo(K,null,P,E,!0),gs()),he!=null&&(I.renderCache[he]=void 0),oe&256){I.ctx.deactivate(E);return}const le=oe&1&&re,ge=!To(E);let be;if(ge&&(be=Y&&Y.onVnodeBeforeUnmount)&&On(be,I,E),oe&6)Nn(E.component,P,U);else{if(oe&128){E.suspense.unmount(P,U);return}le&&ur(E,null,I,"beforeUnmount"),oe&64?E.type.remove(E,I,P,ne,U):q&&!q.hasOnce&&(B!==et||Q>0&&Q&64)?Wt(q,I,P,!1,!0):(B===et&&Q&384||!j&&oe&16)&&Wt(z,I,P),U&&Ye(E)}(ge&&(be=Y&&Y.onVnodeUnmounted)||le)&&nn(()=>{be&&On(be,I,E),le&&ur(E,null,I,"unmounted")},P)},Ye=E=>{const{type:I,el:P,anchor:U,transition:j}=E;if(I===et){Is(P,U);return}if(I===rl){V(E);return}const B=()=>{r(P),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(E.shapeFlag&1&&j&&!j.persisted){const{leave:Y,delayLeave:K}=j,z=()=>Y(P,B);K?K(E.el,B,z):z()}else B()},Is=(E,I)=>{let P;for(;E!==I;)P=p(E),r(E),E=P;r(I)},Nn=(E,I,P)=>{const{bum:U,scope:j,job:B,subTree:Y,um:K,m:z,a:q,parent:oe,slots:{__:Q}}=E;gm(z),gm(q),U&&nl(U),oe&&de(Q)&&Q.forEach(re=>{oe.renderCache[re]=void 0}),j.stop(),B&&(B.flags|=8,Qe(Y,E,I,P)),K&&nn(K,I),nn(()=>{E.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},Wt=(E,I,P,U=!1,j=!1,B=0)=>{for(let Y=B;Y<E.length;Y++)Qe(E[Y],I,P,U,j)},F=E=>{if(E.shapeFlag&6)return F(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const I=p(E.anchor||E.el),P=I&&I[WA];return P?p(P):I};let ee=!1;const J=(E,I,P)=>{E==null?I._vnode&&Qe(I._vnode,null,null,!0):T(I._vnode||null,E,I,null,null,null,P),I._vnode=E,ee||(ee=!0,cm(),pv(),ee=!1)},ne={p:T,um:Qe,m:cn,r:Ye,mt:$t,mc:v,pc:Te,pbc:C,n:F,o:t};return{render:J,hydrate:void 0,createApp:fR(J)}}function xu({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function hr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function wR(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function xv(t,e,n=!1){const s=t.children,r=e.children;if(de(s)&&de(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Ns(r[i]),a.el=o.el),!n&&a.patchFlag!==-2&&xv(o,a)),a.type===wc&&(a.el=o.el),a.type===zs&&!a.el&&(a.el=o.el)}}function IR(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(r=n[n.length-1],t[r]<u){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Mv(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Mv(e)}function gm(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const AR=Symbol.for("v-scx"),RR=()=>pn(AR);function ii(t,e,n){return Lv(t,e,n)}function Lv(t,e,n=$e){const{immediate:s,deep:r,flush:i,once:o}=n,a=Ut({},n),c=e&&s||!e&&i!=="post";let u;if(Bo){if(i==="sync"){const g=RR();u=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=Bn,g.resume=Bn,g.pause=Bn,g}}const h=Et;a.call=(g,y,T)=>zn(g,h,y,T);let d=!1;i==="post"?a.scheduler=g=>{nn(g,h&&h.suspense)}:i!=="sync"&&(d=!0,a.scheduler=(g,y)=>{y?g():Ld(g)}),a.augmentJob=g=>{e&&(g.flags|=4),d&&(g.flags|=2,h&&(g.id=h.uid,g.i=h))};const p=$A(t,e,a);return Bo&&(u?u.push(p):c&&p()),p}function bR(t,e,n){const s=this.proxy,r=it(t)?t.includes(".")?Vv(s,t):()=>s[t]:t.bind(s,s);let i;pe(e)?i=e:(i=e.handler,n=e);const o=ia(this),a=Lv(r,i.bind(s),n);return o(),a}function Vv(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const CR=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${mn(e)}Modifiers`]||t[`${Nr(e)}Modifiers`];function SR(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||$e;let r=n;const i=e.startsWith("update:"),o=i&&CR(s,e.slice(7));o&&(o.trim&&(r=n.map(h=>it(h)?h.trim():h)),o.number&&(r=n.map(dh)));let a,c=s[a=Su(e)]||s[a=Su(mn(e))];!c&&i&&(c=s[a=Su(Nr(e))]),c&&zn(c,t,6,r);const u=s[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,zn(u,t,6,r)}}function Fv(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!pe(t)){const c=u=>{const h=Fv(u,e,!0);h&&(a=!0,Ut(o,h))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Ge(t)&&s.set(t,null),null):(de(i)?i.forEach(c=>o[c]=null):Ut(o,i),Ge(t)&&s.set(t,o),o)}function Tc(t,e){return!t||!hc(e)?!1:(e=e.slice(2).replace(/Once$/,""),xe(t,e[0].toLowerCase()+e.slice(1))||xe(t,Nr(e))||xe(t,e))}function _m(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:a,emit:c,render:u,renderCache:h,props:d,data:p,setupState:g,ctx:y,inheritAttrs:T}=t,w=Il(t);let O,D;try{if(n.shapeFlag&4){const V=r||s,Z=V;O=Ln(u.call(Z,V,h,d,g,p,y)),D=a}else{const V=e;O=Ln(V.length>1?V(d,{attrs:a,slots:o,emit:c}):V(d,null)),D=e.props?a:PR(a)}}catch(V){Io.length=0,vc(V,t,1),O=Ve(zs)}let x=O;if(D&&T!==!1){const V=Object.keys(D),{shapeFlag:Z}=x;V.length&&Z&7&&(i&&V.some(bd)&&(D=kR(D,i)),x=pi(x,D,!1,!0))}return n.dirs&&(x=pi(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition&&Vd(x,n.transition),O=x,Il(w),O}const PR=t=>{let e;for(const n in t)(n==="class"||n==="style"||hc(n))&&((e||(e={}))[n]=t[n]);return e},kR=(t,e)=>{const n={};for(const s in t)(!bd(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function NR(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?ym(s,o,u):!!o;if(c&8){const h=e.dynamicProps;for(let d=0;d<h.length;d++){const p=h[d];if(o[p]!==s[p]&&!Tc(u,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?ym(s,o,u):!0:!!o;return!1}function ym(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Tc(n,i))return!0}return!1}function OR({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Uv=t=>t.__isSuspense;function DR(t,e){e&&e.pendingBranch?de(t)?e.effects.push(...t):e.effects.push(t):qA(t)}const et=Symbol.for("v-fgt"),wc=Symbol.for("v-txt"),zs=Symbol.for("v-cmt"),rl=Symbol.for("v-stc"),Io=[];let sn=null;function Ee(t=!1){Io.push(sn=t?null:[])}function xR(){Io.pop(),sn=Io[Io.length-1]||null}let Uo=1;function vm(t,e=!1){Uo+=t,t<0&&sn&&e&&(sn.hasOnce=!0)}function Bv(t){return t.dynamicChildren=Uo>0?sn||ei:null,xR(),Uo>0&&sn&&sn.push(t),t}function Ie(t,e,n,s,r,i){return Bv(W(t,e,n,s,r,i,!0))}function $v(t,e,n,s,r){return Bv(Ve(t,e,n,s,r,!0))}function bl(t){return t?t.__v_isVNode===!0:!1}function to(t,e){return t.type===e.type&&t.key===e.key}const jv=({key:t})=>t??null,il=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?it(t)||It(t)||pe(t)?{i:Qt,r:t,k:e,f:!!n}:t:null);function W(t,e=null,n=null,s=0,r=null,i=t===et?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&jv(e),ref:e&&il(e),scopeId:gv,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Qt};return a?(jd(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=it(n)?8:16),Uo>0&&!o&&sn&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&sn.push(c),c}const Ve=MR;function MR(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===rR)&&(t=zs),bl(t)){const a=pi(t,e,!0);return n&&jd(a,n),Uo>0&&!i&&sn&&(a.shapeFlag&6?sn[sn.indexOf(t)]=a:sn.push(a)),a.patchFlag=-2,a}if(GR(t)&&(t=t.__vccOpts),e){e=LR(e);let{class:a,style:c}=e;a&&!it(a)&&(e.class=di(a)),Ge(c)&&(Md(c)&&!de(c)&&(c=Ut({},c)),e.style=gc(c))}const o=it(t)?1:Uv(t)?128:zA(t)?64:Ge(t)?4:pe(t)?2:0;return W(t,e,n,s,r,o,i,!0)}function LR(t){return t?Md(t)||Sv(t)?Ut({},t):t:null}function pi(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:a,transition:c}=t,u=e?UR(r||{},e):r,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&jv(u),ref:e&&e.ref?n&&i?de(i)?i.concat(il(e)):[i,il(e)]:il(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==et?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&pi(t.ssContent),ssFallback:t.ssFallback&&pi(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&Vd(h,c.clone(h)),h}function Vn(t=" ",e=0){return Ve(wc,null,t,e)}function VR(t,e){const n=Ve(rl,null,t);return n.staticCount=e,n}function FR(t="",e=!1){return e?(Ee(),$v(zs,null,t)):Ve(zs,null,t)}function Ln(t){return t==null||typeof t=="boolean"?Ve(zs):de(t)?Ve(et,null,t.slice()):bl(t)?Ns(t):Ve(wc,null,String(t))}function Ns(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:pi(t)}function jd(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(de(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),jd(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Sv(e)?e._ctx=Qt:r===3&&Qt&&(Qt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else pe(e)?(e={default:e,_ctx:Qt},n=32):(e=String(e),s&64?(n=16,e=[Vn(e)]):n=8);t.children=e,t.shapeFlag|=n}function UR(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=di([e.class,s.class]));else if(r==="style")e.style=gc([e.style,s.style]);else if(hc(r)){const i=e[r],o=s[r];o&&i!==o&&!(de(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function On(t,e,n,s=null){zn(t,e,7,[n,s])}const BR=Rv();let $R=0;function jR(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||BR,i={uid:$R++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new qy(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:kv(s,r),emitsOptions:Fv(s,r),emit:null,emitted:null,propsDefaults:$e,inheritAttrs:s.inheritAttrs,ctx:$e,data:$e,props:$e,attrs:$e,slots:$e,refs:$e,setupState:$e,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=SR.bind(null,i),t.ce&&t.ce(i),i}let Et=null;const Hv=()=>Et||Qt;let Cl,Th;{const t=mc(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};Cl=e("__VUE_INSTANCE_SETTERS__",n=>Et=n),Th=e("__VUE_SSR_SETTERS__",n=>Bo=n)}const ia=t=>{const e=Et;return Cl(t),t.scope.on(),()=>{t.scope.off(),Cl(e)}},Em=()=>{Et&&Et.scope.off(),Cl(null)};function qv(t){return t.vnode.shapeFlag&4}let Bo=!1;function HR(t,e=!1,n=!1){e&&Th(e);const{props:s,children:r}=t.vnode,i=qv(t);pR(t,s,i,e),yR(t,r,n||e);const o=i?qR(t,e):void 0;return e&&Th(!1),o}function qR(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,oR);const{setup:s}=n;if(s){ms();const r=t.setupContext=s.length>1?zR(t):null,i=ia(t),o=ra(s,t,0,[t.props,r]),a=Fy(o);if(gs(),i(),(a||t.sp)&&!To(t)&&yv(t),a){if(o.then(Em,Em),e)return o.then(c=>{Tm(t,c)}).catch(c=>{vc(c,t,0)});t.asyncDep=o}else Tm(t,o)}else Wv(t)}function Tm(t,e,n){pe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ge(e)&&(t.setupState=uv(e)),Wv(t)}function Wv(t,e,n){const s=t.type;t.render||(t.render=s.render||Bn);{const r=ia(t);ms();try{aR(t)}finally{gs(),r()}}}const WR={get(t,e){return Ot(t,"get",""),t[e]}};function zR(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,WR),slots:t.slots,emit:t.emit,expose:e}}function Ic(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(uv(MA(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in wo)return wo[n](t)},has(e,n){return n in e||n in wo}})):t.proxy}function KR(t,e=!0){return pe(t)?t.displayName||t.name:t.name||e&&t.__name}function GR(t){return pe(t)&&"__vccOpts"in t}const Je=(t,e)=>UA(t,e,Bo);function zv(t,e,n){const s=arguments.length;return s===2?Ge(e)&&!de(e)?bl(e)?Ve(t,null,[e]):Ve(t,e):Ve(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&bl(n)&&(n=[n]),Ve(t,e,n))}const QR="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let wh;const wm=typeof window<"u"&&window.trustedTypes;if(wm)try{wh=wm.createPolicy("vue",{createHTML:t=>t})}catch{}const Kv=wh?t=>wh.createHTML(t):t=>t,YR="http://www.w3.org/2000/svg",XR="http://www.w3.org/1998/Math/MathML",is=typeof document<"u"?document:null,Im=is&&is.createElement("template"),JR={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?is.createElementNS(YR,t):e==="mathml"?is.createElementNS(XR,t):n?is.createElement(t,{is:n}):is.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>is.createTextNode(t),createComment:t=>is.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>is.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Im.innerHTML=Kv(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=Im.content;if(s==="svg"||s==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},ZR=Symbol("_vtc");function eb(t,e,n){const s=t[ZR];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Am=Symbol("_vod"),tb=Symbol("_vsh"),nb=Symbol(""),sb=/(^|;)\s*display\s*:/;function rb(t,e,n){const s=t.style,r=it(n);let i=!1;if(n&&!r){if(e)if(it(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&ol(s,a,"")}else for(const o in e)n[o]==null&&ol(s,o,"");for(const o in n)o==="display"&&(i=!0),ol(s,o,n[o])}else if(r){if(e!==n){const o=s[nb];o&&(n+=";"+o),s.cssText=n,i=sb.test(n)}}else e&&t.removeAttribute("style");Am in t&&(t[Am]=i?s.display:"",t[tb]&&(s.display="none"))}const Rm=/\s*!important$/;function ol(t,e,n){if(de(n))n.forEach(s=>ol(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=ib(t,e);Rm.test(n)?t.setProperty(Nr(s),n.replace(Rm,""),"important"):t[s]=n}}const bm=["Webkit","Moz","ms"],Mu={};function ib(t,e){const n=Mu[e];if(n)return n;let s=mn(e);if(s!=="filter"&&s in t)return Mu[e]=s;s=pc(s);for(let r=0;r<bm.length;r++){const i=bm[r]+s;if(i in t)return Mu[e]=i}return e}const Cm="http://www.w3.org/1999/xlink";function Sm(t,e,n,s,r,i=pA(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Cm,e.slice(6,e.length)):t.setAttributeNS(Cm,e,n):n==null||i&&!$y(n)?t.removeAttribute(e):t.setAttribute(e,i?"":er(n)?String(n):n)}function Pm(t,e,n,s,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Kv(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=$y(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function Wr(t,e,n,s){t.addEventListener(e,n,s)}function ob(t,e,n,s){t.removeEventListener(e,n,s)}const km=Symbol("_vei");function ab(t,e,n,s,r=null){const i=t[km]||(t[km]={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=lb(e);if(s){const u=i[e]=hb(s,r);Wr(t,a,u,c)}else o&&(ob(t,a,o,c),i[e]=void 0)}}const Nm=/(?:Once|Passive|Capture)$/;function lb(t){let e;if(Nm.test(t)){e={};let s;for(;s=t.match(Nm);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Nr(t.slice(2)),e]}let Lu=0;const cb=Promise.resolve(),ub=()=>Lu||(cb.then(()=>Lu=0),Lu=Date.now());function hb(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;zn(db(s,n.value),e,5,[s])};return n.value=t,n.attached=ub(),n}function db(t,e){if(de(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Om=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,fb=(t,e,n,s,r,i)=>{const o=r==="svg";e==="class"?eb(t,s,o):e==="style"?rb(t,n,s):hc(e)?bd(e)||ab(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):pb(t,e,s,o))?(Pm(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Sm(t,e,s,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!it(s))?Pm(t,mn(e),s,i,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Sm(t,e,s,o))};function pb(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Om(e)&&pe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Om(e)&&it(n)?!1:e in t}const Dm=t=>{const e=t.props["onUpdate:modelValue"]||!1;return de(e)?n=>nl(e,n):e};function mb(t){t.target.composing=!0}function xm(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Vu=Symbol("_assign"),Sl={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[Vu]=Dm(r);const i=s||r.props&&r.props.type==="number";Wr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=dh(a)),t[Vu](a)}),n&&Wr(t,"change",()=>{t.value=t.value.trim()}),e||(Wr(t,"compositionstart",mb),Wr(t,"compositionend",xm),Wr(t,"change",xm))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},o){if(t[Vu]=Dm(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?dh(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||r&&t.value.trim()===c)||(t.value=c))}},gb=Ut({patchProp:fb},JR);let Mm;function _b(){return Mm||(Mm=ER(gb))}const yb=(...t)=>{const e=_b().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Eb(s);if(!r)return;const i=e._component;!pe(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,vb(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function vb(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Eb(t){return it(t)?document.querySelector(t):t}const Tb=()=>{};var Lm={};/**
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
 */const Gv={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const X=function(t,e){if(!t)throw Ci(e)},Ci=function(t){return new Error("Firebase Database ("+Gv.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Qv=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},wb=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ac={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,h=i>>2,d=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(p=64)),s.push(n[h],n[d],n[p],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Qv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):wb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const d=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||u==null||d==null)throw new Ib;const p=i<<2|a>>4;if(s.push(p),u!==64){const g=a<<4&240|u>>2;if(s.push(g),d!==64){const y=u<<6&192|d;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ib extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Yv=function(t){const e=Qv(t);return Ac.encodeByteArray(e,!0)},Pl=function(t){return Yv(t).replace(/\./g,"")},kl=function(t){try{return Ac.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ab(t){return Xv(void 0,t)}function Xv(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Rb(n)||(t[n]=Xv(t[n],e[n]));return t}function Rb(t){return t!=="__proto__"}/**
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
 */function bb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Cb=()=>bb().__FIREBASE_DEFAULTS__,Sb=()=>{if(typeof process>"u"||typeof Lm>"u")return;const t=Lm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Pb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&kl(t[1]);return e&&JSON.parse(e)},Rc=()=>{try{return Tb()||Cb()||Sb()||Pb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Jv=t=>{var e,n;return(n=(e=Rc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},kb=t=>{const e=Jv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Zv=()=>{var t;return(t=Rc())===null||t===void 0?void 0:t.config},eE=t=>{var e;return(e=Rc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class $o{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Si(t){return t.endsWith(".cloudworkstations.dev")}async function tE(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function Nb(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Pl(JSON.stringify(n)),Pl(JSON.stringify(o)),""].join(".")}const Ao={};function Ob(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ao))Ao[e]?t.emulator.push(e):t.prod.push(e);return t}function Db(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Vm=!1;function nE(t,e){if(typeof window>"u"||typeof document>"u"||!Si(window.location.host)||Ao[t]===e||Ao[t]||Vm)return;Ao[t]=e;function n(p){return`__firebase__banner__${p}`}const s="__firebase__banner",i=Ob().prod.length>0;function o(){const p=document.getElementById(s);p&&p.remove()}function a(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function c(p,g){p.setAttribute("width","24"),p.setAttribute("id",g),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function u(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{Vm=!0,o()},p}function h(p,g){p.setAttribute("id",g),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function d(){const p=Db(s),g=n("text"),y=document.getElementById(g)||document.createElement("span"),T=n("learnmore"),w=document.getElementById(T)||document.createElement("a"),O=n("preprendIcon"),D=document.getElementById(O)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const x=p.element;a(x),h(w,T);const V=u();c(D,O),x.append(D,y,w,V),document.body.appendChild(x)}i?(y.innerText="Preview backend disconnected.",D.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(D.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,y.innerText="Preview backend running in this workspace."),y.setAttribute("id",g)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
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
 */function Bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Bt())}function xb(){var t;const e=(t=Rc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Mb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Lb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function sE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Vb(){const t=Bt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Fb(){return Gv.NODE_ADMIN===!0}function Ub(){return!xb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function rE(){try{return typeof indexedDB=="object"}catch{return!1}}function Bb(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const $b="FirebaseError";class Xn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=$b,Object.setPrototypeOf(this,Xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pi.prototype.create)}}class Pi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?jb(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Xn(r,a,s)}}function jb(t,e){return t.replace(Hb,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Hb=/\{\$([^}]+)}/g;/**
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
 */function jo(t){return JSON.parse(t)}function Tt(t){return JSON.stringify(t)}/**
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
 */const iE=function(t){let e={},n={},s={},r="";try{const i=t.split(".");e=jo(kl(i[0])||""),n=jo(kl(i[1])||""),r=i[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:r}},qb=function(t){const e=iE(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Wb=function(t){const e=iE(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function ws(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function mi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ih(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Nl(t,e,n){const s={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(s[r]=e.call(n,t[r],r,t));return s}function Er(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Fm(i)&&Fm(o)){if(!Er(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Fm(t){return t!==null&&typeof t=="object"}/**
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
 */function ki(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function co(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function uo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class zb{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)s[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const p=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(p<<1|p>>>31)&4294967295}let r=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],u,h;for(let d=0;d<80;d++){d<40?d<20?(u=a^i&(o^a),h=1518500249):(u=i^o^a,h=1859775393):d<60?(u=i&o|a&(i|o),h=2400959708):(u=i^o^a,h=3395469782);const p=(r<<5|r>>>27)+u+c+h+s[d]&4294967295;c=a,a=o,o=(i<<30|i>>>2)&4294967295,i=r,r=p}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=s;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<n;)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let r=0;r<5;r++)for(let i=24;i>=0;i-=8)e[s]=this.chain_[r]>>i&255,++s;return e}}function Kb(t,e){const n=new Gb(t,e);return n.subscribe.bind(n)}class Gb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Qb(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Fu),r.error===void 0&&(r.error=Fu),r.complete===void 0&&(r.complete=Fu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Qb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Fu(){}function Yb(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Xb=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);if(r>=55296&&r<=56319){const i=r-55296;s++,X(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;r=65536+(i<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},bc=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function At(t){return t&&t._delegate?t._delegate:t}class bn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const fr="[DEFAULT]";/**
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
 */class Jb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new $o;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(eC(e))try{this.getOrInitializeService({instanceIdentifier:fr})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=fr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fr){return this.instances.has(e)}getOptions(e=fr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Zb(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=fr){return this.component?this.component.multipleInstances?e:fr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Zb(t){return t===fr?void 0:t}function eC(t){return t.instantiationMode==="EAGER"}/**
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
 */class tC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Jb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ve||(ve={}));const nC={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},sC=ve.INFO,rC={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},iC=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=rC[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class oa{constructor(e){this.name=e,this._logLevel=sC,this._logHandler=iC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?nC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const oC=(t,e)=>e.some(n=>t instanceof n);let Um,Bm;function aC(){return Um||(Um=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lC(){return Bm||(Bm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const oE=new WeakMap,Ah=new WeakMap,aE=new WeakMap,Uu=new WeakMap,qd=new WeakMap;function cC(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Us(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&oE.set(n,t)}).catch(()=>{}),qd.set(e,t),e}function uC(t){if(Ah.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ah.set(t,e)}let Rh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ah.get(t);if(e==="objectStoreNames")return t.objectStoreNames||aE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Us(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function hC(t){Rh=t(Rh)}function dC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Bu(this),e,...n);return aE.set(s,e.sort?e.sort():[e]),Us(s)}:lC().includes(t)?function(...e){return t.apply(Bu(this),e),Us(oE.get(this))}:function(...e){return Us(t.apply(Bu(this),e))}}function fC(t){return typeof t=="function"?dC(t):(t instanceof IDBTransaction&&uC(t),oC(t,aC())?new Proxy(t,Rh):t)}function Us(t){if(t instanceof IDBRequest)return cC(t);if(Uu.has(t))return Uu.get(t);const e=fC(t);return e!==t&&(Uu.set(t,e),qd.set(e,t)),e}const Bu=t=>qd.get(t);function pC(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Us(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Us(o.result),c.oldVersion,c.newVersion,Us(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const mC=["get","getKey","getAll","getAllKeys","count"],gC=["put","add","delete","clear"],$u=new Map;function $m(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($u.get(e))return $u.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=gC.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||mC.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return $u.set(e,i),i}hC(t=>({...t,get:(e,n,s)=>$m(e,n)||t.get(e,n,s),has:(e,n)=>!!$m(e,n)||t.has(e,n)}));/**
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
 */class _C{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(yC(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function yC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bh="@firebase/app",jm="0.13.1";/**
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
 */const _s=new oa("@firebase/app"),vC="@firebase/app-compat",EC="@firebase/analytics-compat",TC="@firebase/analytics",wC="@firebase/app-check-compat",IC="@firebase/app-check",AC="@firebase/auth",RC="@firebase/auth-compat",bC="@firebase/database",CC="@firebase/data-connect",SC="@firebase/database-compat",PC="@firebase/functions",kC="@firebase/functions-compat",NC="@firebase/installations",OC="@firebase/installations-compat",DC="@firebase/messaging",xC="@firebase/messaging-compat",MC="@firebase/performance",LC="@firebase/performance-compat",VC="@firebase/remote-config",FC="@firebase/remote-config-compat",UC="@firebase/storage",BC="@firebase/storage-compat",$C="@firebase/firestore",jC="@firebase/ai",HC="@firebase/firestore-compat",qC="firebase",WC="11.9.0";/**
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
 */const Ch="[DEFAULT]",zC={[bh]:"fire-core",[vC]:"fire-core-compat",[TC]:"fire-analytics",[EC]:"fire-analytics-compat",[IC]:"fire-app-check",[wC]:"fire-app-check-compat",[AC]:"fire-auth",[RC]:"fire-auth-compat",[bC]:"fire-rtdb",[CC]:"fire-data-connect",[SC]:"fire-rtdb-compat",[PC]:"fire-fn",[kC]:"fire-fn-compat",[NC]:"fire-iid",[OC]:"fire-iid-compat",[DC]:"fire-fcm",[xC]:"fire-fcm-compat",[MC]:"fire-perf",[LC]:"fire-perf-compat",[VC]:"fire-rc",[FC]:"fire-rc-compat",[UC]:"fire-gcs",[BC]:"fire-gcs-compat",[$C]:"fire-fst",[HC]:"fire-fst-compat",[jC]:"fire-vertex","fire-js":"fire-js",[qC]:"fire-js-all"};/**
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
 */const Ol=new Map,KC=new Map,Sh=new Map;function Hm(t,e){try{t.container.addComponent(e)}catch(n){_s.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Kn(t){const e=t.name;if(Sh.has(e))return _s.debug(`There were multiple attempts to register component ${e}.`),!1;Sh.set(e,t);for(const n of Ol.values())Hm(n,t);for(const n of KC.values())Hm(n,t);return!0}function Wd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Kt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const GC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Bs=new Pi("app","Firebase",GC);/**
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
 */class QC{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Bs.create("app-deleted",{appName:this._name})}}/**
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
 */const tr=WC;function lE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Ch,automaticDataCollectionEnabled:!0},e),r=s.name;if(typeof r!="string"||!r)throw Bs.create("bad-app-name",{appName:String(r)});if(n||(n=Zv()),!n)throw Bs.create("no-options");const i=Ol.get(r);if(i){if(Er(n,i.options)&&Er(s,i.config))return i;throw Bs.create("duplicate-app",{appName:r})}const o=new tC(r);for(const c of Sh.values())o.addComponent(c);const a=new QC(n,s,o);return Ol.set(r,a),a}function zd(t=Ch){const e=Ol.get(t);if(!e&&t===Ch&&Zv())return lE();if(!e)throw Bs.create("no-app",{appName:t});return e}function on(t,e,n){var s;let r=(s=zC[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_s.warn(a.join(" "));return}Kn(new bn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const YC="firebase-heartbeat-database",XC=1,Ho="firebase-heartbeat-store";let ju=null;function cE(){return ju||(ju=pC(YC,XC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ho)}catch(n){console.warn(n)}}}}).catch(t=>{throw Bs.create("idb-open",{originalErrorMessage:t.message})})),ju}async function JC(t){try{const n=(await cE()).transaction(Ho),s=await n.objectStore(Ho).get(uE(t));return await n.done,s}catch(e){if(e instanceof Xn)_s.warn(e.message);else{const n=Bs.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_s.warn(n.message)}}}async function qm(t,e){try{const s=(await cE()).transaction(Ho,"readwrite");await s.objectStore(Ho).put(e,uE(t)),await s.done}catch(n){if(n instanceof Xn)_s.warn(n.message);else{const s=Bs.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});_s.warn(s.message)}}}function uE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ZC=1024,eS=30;class tS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new sS(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Wm();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>eS){const o=rS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){_s.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Wm(),{heartbeatsToSend:s,unsentEntries:r}=nS(this._heartbeatsCache.heartbeats),i=Pl(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return _s.warn(n),""}}}function Wm(){return new Date().toISOString().substring(0,10)}function nS(t,e=ZC){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),zm(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),zm(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class sS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rE()?Bb().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await JC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return qm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return qm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function zm(t){return Pl(JSON.stringify({version:2,heartbeats:t})).length}function rS(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function iS(t){Kn(new bn("platform-logger",e=>new _C(e),"PRIVATE")),Kn(new bn("heartbeat",e=>new tS(e),"PRIVATE")),on(bh,jm,t),on(bh,jm,"esm2017"),on("fire-js","")}iS("");function Kd(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function hE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const oS=hE,dE=new Pi("auth","Firebase",hE());/**
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
 */const Dl=new oa("@firebase/auth");function aS(t,...e){Dl.logLevel<=ve.WARN&&Dl.warn(`Auth (${tr}): ${t}`,...e)}function al(t,...e){Dl.logLevel<=ve.ERROR&&Dl.error(`Auth (${tr}): ${t}`,...e)}/**
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
 */function Cn(t,...e){throw Gd(t,...e)}function $n(t,...e){return Gd(t,...e)}function fE(t,e,n){const s=Object.assign(Object.assign({},oS()),{[e]:n});return new Pi("auth","Firebase",s).create(e,{appName:t.name})}function ds(t){return fE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Gd(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return dE.create(t,...e)}function ce(t,e,...n){if(!t)throw Gd(e,...n)}function cs(t){const e="INTERNAL ASSERTION FAILED: "+t;throw al(e),new Error(e)}function ys(t,e){t||cs(e)}/**
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
 */function Ph(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function lS(){return Km()==="http:"||Km()==="https:"}function Km(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function cS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lS()||Lb()||"connection"in navigator)?navigator.onLine:!0}function uS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class aa{constructor(e,n){this.shortDelay=e,this.longDelay=n,ys(n>e,"Short delay should be less than long delay!"),this.isMobile=Hd()||sE()}get(){return cS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Qd(t,e){ys(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class pE{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;cs("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;cs("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;cs("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const hS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const dS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],fS=new aa(3e4,6e4);function nr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function sr(t,e,n,s,r={}){return mE(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=ki(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return Mb()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Si(t.emulatorConfig.host)&&(u.credentials="include"),pE.fetch()(await gE(t,t.config.apiHost,n,a),u)})}async function mE(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},hS),e);try{const r=new mS(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ja(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ja(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ja(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ja(t,"user-disabled",o);const h=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw fE(t,h,u);Cn(t,h)}}catch(r){if(r instanceof Xn)throw r;Cn(t,"network-request-failed",{message:String(r)})}}async function la(t,e,n,s,r={}){const i=await sr(t,e,n,s,r);return"mfaPendingCredential"in i&&Cn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function gE(t,e,n,s){const r=`${e}${n}?${s}`,i=t,o=i.config.emulator?Qd(t.config,r):`${t.config.apiScheme}://${r}`;return dS.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function pS(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class mS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s($n(this.auth,"network-request-failed")),fS.get())})}}function ja(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=$n(t,e,s);return r.customData._tokenResponse=n,r}function Gm(t){return t!==void 0&&t.enterprise!==void 0}class gS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return pS(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function _S(t,e){return sr(t,"GET","/v2/recaptchaConfig",nr(t,e))}/**
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
 */async function yS(t,e){return sr(t,"POST","/v1/accounts:delete",e)}async function xl(t,e){return sr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ro(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vS(t,e=!1){const n=At(t),s=await n.getIdToken(e),r=Yd(s);ce(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Ro(Hu(r.auth_time)),issuedAtTime:Ro(Hu(r.iat)),expirationTime:Ro(Hu(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Hu(t){return Number(t)*1e3}function Yd(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return al("JWT malformed, contained fewer than 3 sections"),null;try{const r=kl(n);return r?JSON.parse(r):(al("Failed to decode base64 JWT payload"),null)}catch(r){return al("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Qm(t){const e=Yd(t);return ce(e,"internal-error"),ce(typeof e.exp<"u","internal-error"),ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function qo(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Xn&&ES(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function ES({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class TS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class kh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ro(this.lastLoginAt),this.creationTime=Ro(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ml(t){var e;const n=t.auth,s=await t.getIdToken(),r=await qo(t,xl(n,{idToken:s}));ce(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?_E(i.providerUserInfo):[],a=IS(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),h=c?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new kh(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function wS(t){const e=At(t);await Ml(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function IS(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function _E(t){return t.map(e=>{var{providerId:n}=e,s=Kd(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function AS(t,e){const n=await mE(t,{},async()=>{const s=ki({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=await gE(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:s};return t.emulatorConfig&&Si(t.emulatorConfig.host)&&(c.credentials="include"),pE.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function RS(t,e){return sr(t,"POST","/v2/accounts:revokeToken",nr(t,e))}/**
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
 */class oi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ce(e.idToken,"internal-error"),ce(typeof e.idToken<"u","internal-error"),ce(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Qm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ce(e.length!==0,"internal-error");const n=Qm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await AS(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new oi;return s&&(ce(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(ce(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(ce(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new oi,this.toJSON())}_performRefresh(){return cs("not implemented")}}/**
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
 */function Ss(t,e){ce(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class En{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Kd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new TS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new kh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await qo(this,this.stsTokenManager.getToken(this.auth,e));return ce(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return vS(this,e)}reload(){return wS(this)}_assign(e){this!==e&&(ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new En(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Ml(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Kt(this.auth.app))return Promise.reject(ds(this.auth));const e=await this.getIdToken();return await qo(this,yS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,u,h;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,p=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,T=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,O=(u=n.createdAt)!==null&&u!==void 0?u:void 0,D=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:x,emailVerified:V,isAnonymous:Z,providerData:se,stsTokenManager:b}=n;ce(x&&b,e,"internal-error");const v=oi.fromJSON(this.name,b);ce(typeof x=="string",e,"internal-error"),Ss(d,e.name),Ss(p,e.name),ce(typeof V=="boolean",e,"internal-error"),ce(typeof Z=="boolean",e,"internal-error"),Ss(g,e.name),Ss(y,e.name),Ss(T,e.name),Ss(w,e.name),Ss(O,e.name),Ss(D,e.name);const A=new En({uid:x,auth:e,email:p,emailVerified:V,displayName:d,isAnonymous:Z,photoURL:y,phoneNumber:g,tenantId:T,stsTokenManager:v,createdAt:O,lastLoginAt:D});return se&&Array.isArray(se)&&(A.providerData=se.map(C=>Object.assign({},C))),w&&(A._redirectEventId=w),A}static async _fromIdTokenResponse(e,n,s=!1){const r=new oi;r.updateFromServerResponse(n);const i=new En({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Ml(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];ce(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?_E(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),a=new oi;a.updateFromIdToken(s);const c=new En({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new kh(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const Ym=new Map;function us(t){ys(t instanceof Function,"Expected a class definition");let e=Ym.get(t);return e?(ys(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ym.set(t,e),e)}/**
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
 */class yE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}yE.type="NONE";const Xm=yE;/**
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
 */function ll(t,e,n){return`firebase:${t}:${e}:${n}`}class ai{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=ll(this.userKey,r.apiKey,i),this.fullPersistenceKey=ll("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await xl(this.auth,{idToken:e}).catch(()=>{});return n?En._fromGetAccountInfoResponse(this.auth,n,e):null}return En._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ai(us(Xm),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||us(Xm);const o=ll(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){let d;if(typeof h=="string"){const p=await xl(e,{idToken:h}).catch(()=>{});if(!p)break;d=await En._fromGetAccountInfoResponse(e,p,h)}else d=En._fromJSON(e,h);u!==i&&(a=d),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ai(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new ai(i,e,s))}}/**
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
 */function Jm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(wE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(AE(e))return"Blackberry";if(RE(e))return"Webos";if(EE(e))return"Safari";if((e.includes("chrome/")||TE(e))&&!e.includes("edge/"))return"Chrome";if(IE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function vE(t=Bt()){return/firefox\//i.test(t)}function EE(t=Bt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function TE(t=Bt()){return/crios\//i.test(t)}function wE(t=Bt()){return/iemobile/i.test(t)}function IE(t=Bt()){return/android/i.test(t)}function AE(t=Bt()){return/blackberry/i.test(t)}function RE(t=Bt()){return/webos/i.test(t)}function Xd(t=Bt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function bS(t=Bt()){var e;return Xd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function CS(){return Vb()&&document.documentMode===10}function bE(t=Bt()){return Xd(t)||IE(t)||RE(t)||AE(t)||/windows phone/i.test(t)||wE(t)}/**
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
 */function CE(t,e=[]){let n;switch(t){case"Browser":n=Jm(Bt());break;case"Worker":n=`${Jm(Bt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${tr}/${s}`}/**
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
 */class SS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function PS(t,e={}){return sr(t,"GET","/v2/passwordPolicy",nr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const kS=6;class NS{constructor(e){var n,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:kS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsLowercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class OS{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zm(this),this.idTokenSubscription=new Zm(this),this.beforeStateQueue=new SS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=us(n)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted&&(this.persistenceManager=await ai.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await xl(this,{idToken:e}),s=await En._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Kt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ml(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=uS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Kt(this.app))return Promise.reject(ds(this));const n=e?At(e):null;return n&&ce(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Kt(this.app)?Promise.reject(ds(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Kt(this.app)?Promise.reject(ds(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(us(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await PS(this),n=new NS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Pi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await RS(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&us(e)||this._popupRedirectResolver;ce(n,this,"argument-error"),this.redirectPersistenceManager=await ai.create(this,[us(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ce(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,s,r);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=CE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;if(Kt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&aS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Or(t){return At(t)}class Zm{constructor(e){this.auth=e,this.observer=null,this.addObserver=Kb(n=>this.observer=n)}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Cc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function DS(t){Cc=t}function SE(t){return Cc.loadJS(t)}function xS(){return Cc.recaptchaEnterpriseScript}function MS(){return Cc.gapiScript}function LS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class VS{constructor(){this.enterprise=new FS}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class FS{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const US="recaptcha-enterprise",PE="NO_RECAPTCHA";class BS{constructor(e){this.type=US,this.auth=Or(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{_S(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new gS(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function r(i,o,a){const c=window.grecaptcha;Gm(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(PE)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new VS().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&Gm(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=xS();c.length!==0&&(c+=a),SE(c).then(()=>{r(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function eg(t,e,n,s=!1,r=!1){const i=new BS(t);let o;if(r)o=PE;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return s?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Nh(t,e,n,s,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await eg(t,e,n,n==="getOobCode");return s(t,o)}else return s(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await eg(t,e,n,n==="getOobCode");return s(t,a)}else return Promise.reject(o)})}/**
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
 */function kE(t,e){const n=Wd(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Er(i,e??{}))return r;Cn(r,"already-initialized")}return n.initialize({options:e})}function $S(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(us);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function jS(t,e,n){const s=Or(t);ce(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=NE(e),{host:o,port:a}=HS(e),c=a===null?"":`:${a}`,u={url:`${i}//${o}${c}/`},h=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){ce(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ce(Er(u,s.config.emulator)&&Er(h,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=u,s.emulatorConfig=h,s.settings.appVerificationDisabledForTesting=!0,Si(o)?(tE(`${i}//${o}${c}`),nE("Auth",!0)):qS()}function NE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function HS(t){const e=NE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:tg(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:tg(o)}}}function tg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function qS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Jd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return cs("not implemented")}_getIdTokenResponse(e){return cs("not implemented")}_linkToIdToken(e,n){return cs("not implemented")}_getReauthenticationResolver(e){return cs("not implemented")}}async function WS(t,e){return sr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function zS(t,e){return la(t,"POST","/v1/accounts:signInWithPassword",nr(t,e))}/**
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
 */async function KS(t,e){return la(t,"POST","/v1/accounts:signInWithEmailLink",nr(t,e))}async function GS(t,e){return la(t,"POST","/v1/accounts:signInWithEmailLink",nr(t,e))}/**
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
 */class Wo extends Jd{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Wo(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Wo(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Nh(e,n,"signInWithPassword",zS);case"emailLink":return KS(e,{email:this._email,oobCode:this._password});default:Cn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Nh(e,s,"signUpPassword",WS);case"emailLink":return GS(e,{idToken:n,email:this._email,oobCode:this._password});default:Cn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function li(t,e){return la(t,"POST","/v1/accounts:signInWithIdp",nr(t,e))}/**
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
 */const QS="http://localhost";class Tr extends Jd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Tr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Cn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Kd(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Tr(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return li(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,li(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,li(e,n)}buildRequest(){const e={requestUri:QS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ki(n)}return e}}/**
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
 */function YS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function XS(t){const e=co(uo(t)).link,n=e?co(uo(e)).deep_link_id:null,s=co(uo(t)).deep_link_id;return(s?co(uo(s)).link:null)||s||n||e||t}class Zd{constructor(e){var n,s,r,i,o,a;const c=co(uo(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,h=(s=c.oobCode)!==null&&s!==void 0?s:null,d=YS((r=c.mode)!==null&&r!==void 0?r:null);ce(u&&h&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=h,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.lang)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=XS(e);try{return new Zd(n)}catch{return null}}}/**
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
 */class Ni{constructor(){this.providerId=Ni.PROVIDER_ID}static credential(e,n){return Wo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Zd.parseLink(n);return ce(s,"argument-error"),Wo._fromEmailAndCode(e,s.code,s.tenantId)}}Ni.PROVIDER_ID="password";Ni.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ni.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class OE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ca extends OE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ds extends ca{constructor(){super("facebook.com")}static credential(e){return Tr._fromParams({providerId:Ds.PROVIDER_ID,signInMethod:Ds.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ds.credentialFromTaggedObject(e)}static credentialFromError(e){return Ds.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ds.credential(e.oauthAccessToken)}catch{return null}}}Ds.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ds.PROVIDER_ID="facebook.com";/**
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
 */class xs extends ca{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Tr._fromParams({providerId:xs.PROVIDER_ID,signInMethod:xs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return xs.credentialFromTaggedObject(e)}static credentialFromError(e){return xs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return xs.credential(n,s)}catch{return null}}}xs.GOOGLE_SIGN_IN_METHOD="google.com";xs.PROVIDER_ID="google.com";/**
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
 */class Ms extends ca{constructor(){super("github.com")}static credential(e){return Tr._fromParams({providerId:Ms.PROVIDER_ID,signInMethod:Ms.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ms.credentialFromTaggedObject(e)}static credentialFromError(e){return Ms.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ms.credential(e.oauthAccessToken)}catch{return null}}}Ms.GITHUB_SIGN_IN_METHOD="github.com";Ms.PROVIDER_ID="github.com";/**
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
 */class Ls extends ca{constructor(){super("twitter.com")}static credential(e,n){return Tr._fromParams({providerId:Ls.PROVIDER_ID,signInMethod:Ls.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ls.credentialFromTaggedObject(e)}static credentialFromError(e){return Ls.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Ls.credential(n,s)}catch{return null}}}Ls.TWITTER_SIGN_IN_METHOD="twitter.com";Ls.PROVIDER_ID="twitter.com";/**
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
 */async function JS(t,e){return la(t,"POST","/v1/accounts:signUp",nr(t,e))}/**
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
 */class wr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await En._fromIdTokenResponse(e,s,r),o=ng(s);return new wr({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=ng(s);return new wr({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function ng(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ll extends Xn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Ll.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Ll(e,n,s,r)}}function DE(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ll._fromErrorAndOperation(t,i,e,s):i})}async function ZS(t,e,n=!1){const s=await qo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return wr._forOperation(t,"link",s)}/**
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
 */async function eP(t,e,n=!1){const{auth:s}=t;if(Kt(s.app))return Promise.reject(ds(s));const r="reauthenticate";try{const i=await qo(t,DE(s,r,e,t),n);ce(i.idToken,s,"internal-error");const o=Yd(i.idToken);ce(o,s,"internal-error");const{sub:a}=o;return ce(t.uid===a,s,"user-mismatch"),wr._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Cn(s,"user-mismatch"),i}}/**
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
 */async function xE(t,e,n=!1){if(Kt(t.app))return Promise.reject(ds(t));const s="signIn",r=await DE(t,s,e),i=await wr._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function tP(t,e){return xE(Or(t),e)}/**
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
 */async function ME(t){const e=Or(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function nP(t,e,n){if(Kt(t.app))return Promise.reject(ds(t));const s=Or(t),o=await Nh(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",JS).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&ME(t),c}),a=await wr._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function sP(t,e,n){return Kt(t.app)?Promise.reject(ds(t)):tP(At(t),Ni.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&ME(t),s})}function LE(t,e,n,s){return At(t).onIdTokenChanged(e,n,s)}function rP(t,e,n){return At(t).beforeAuthStateChanged(e,n)}const Vl="__sak";/**
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
 */class VE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Vl,"1"),this.storage.removeItem(Vl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const iP=1e3,oP=10;class FE extends VE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=bE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);CS()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,oP):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},iP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}FE.type="LOCAL";const UE=FE;/**
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
 */class BE extends VE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}BE.type="SESSION";const ef=BE;/**
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
 */function aP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Sc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Sc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await aP(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Sc.receivers=[];/**
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
 */function tf(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class lP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=tf("",20);r.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(d){const p=d;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(h),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function jn(){return window}function cP(t){jn().location.href=t}/**
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
 */function $E(){return typeof jn().WorkerGlobalScope<"u"&&typeof jn().importScripts=="function"}async function uP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function hP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function dP(){return $E()?self:null}/**
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
 */const jE="firebaseLocalStorageDb",fP=1,Fl="firebaseLocalStorage",HE="fbase_key";class ua{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Pc(t,e){return t.transaction([Fl],e?"readwrite":"readonly").objectStore(Fl)}function pP(){const t=indexedDB.deleteDatabase(jE);return new ua(t).toPromise()}function Oh(){const t=indexedDB.open(jE,fP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Fl,{keyPath:HE})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Fl)?e(s):(s.close(),await pP(),e(await Oh()))})})}async function sg(t,e,n){const s=Pc(t,!0).put({[HE]:e,value:n});return new ua(s).toPromise()}async function mP(t,e){const n=Pc(t,!1).get(e),s=await new ua(n).toPromise();return s===void 0?null:s.value}function rg(t,e){const n=Pc(t,!0).delete(e);return new ua(n).toPromise()}const gP=800,_P=3;class qE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Oh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>_P)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $E()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Sc._getInstance(dP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await uP(),!this.activeServiceWorker)return;this.sender=new lP(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||hP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Oh();return await sg(e,Vl,"1"),await rg(e,Vl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>sg(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>mP(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>rg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Pc(r,!1).getAll();return new ua(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qE.type="LOCAL";const WE=qE;new aa(3e4,6e4);/**
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
 */function yP(t,e){return e?us(e):(ce(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class nf extends Jd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return li(e,this._buildIdpRequest())}_linkToIdToken(e,n){return li(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return li(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function vP(t){return xE(t.auth,new nf(t),t.bypassAuthState)}function EP(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),eP(n,new nf(t),t.bypassAuthState)}async function TP(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),ZS(n,new nf(t),t.bypassAuthState)}/**
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
 */class zE{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return vP;case"linkViaPopup":case"linkViaRedirect":return TP;case"reauthViaPopup":case"reauthViaRedirect":return EP;default:Cn(this.auth,"internal-error")}}resolve(e){ys(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ys(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const wP=new aa(2e3,1e4);class Xr extends zE{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Xr.currentPopupAction&&Xr.currentPopupAction.cancel(),Xr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ce(e,this.auth,"internal-error"),e}async onExecution(){ys(this.filter.length===1,"Popup operations only handle one event");const e=tf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject($n(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject($n(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($n(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,wP.get())};e()}}Xr.currentPopupAction=null;/**
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
 */const IP="pendingRedirect",cl=new Map;class AP extends zE{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=cl.get(this.auth._key());if(!e){try{const s=await RP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}cl.set(this.auth._key(),e)}return this.bypassAuthState||cl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function RP(t,e){const n=SP(e),s=CP(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function bP(t,e){cl.set(t._key(),e)}function CP(t){return us(t._redirectPersistence)}function SP(t){return ll(IP,t.config.apiKey,t.name)}async function PP(t,e,n=!1){if(Kt(t.app))return Promise.reject(ds(t));const s=Or(t),r=yP(s,e),o=await new AP(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const kP=10*60*1e3;class NP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!OP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!KE(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError($n(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=kP&&this.cachedEventUids.clear(),this.cachedEventUids.has(ig(e))}saveEventToCache(e){this.cachedEventUids.add(ig(e)),this.lastProcessedEventTime=Date.now()}}function ig(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function KE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function OP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return KE(t);default:return!1}}/**
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
 */async function DP(t,e={}){return sr(t,"GET","/v1/projects",e)}/**
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
 */const xP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,MP=/^https?/;async function LP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await DP(t);for(const n of e)try{if(VP(n))return}catch{}Cn(t,"unauthorized-domain")}function VP(t){const e=Ph(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!MP.test(n))return!1;if(xP.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const FP=new aa(3e4,6e4);function og(){const t=jn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function UP(t){return new Promise((e,n)=>{var s,r,i;function o(){og(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{og(),n($n(t,"network-request-failed"))},timeout:FP.get()})}if(!((r=(s=jn().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=jn().gapi)===null||i===void 0)&&i.load)o();else{const a=LS("iframefcb");return jn()[a]=()=>{gapi.load?o():n($n(t,"network-request-failed"))},SE(`${MS()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw ul=null,e})}let ul=null;function BP(t){return ul=ul||UP(t),ul}/**
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
 */const $P=new aa(5e3,15e3),jP="__/auth/iframe",HP="emulator/auth/iframe",qP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},WP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zP(t){const e=t.config;ce(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Qd(e,HP):`https://${t.config.authDomain}/${jP}`,s={apiKey:e.apiKey,appName:t.name,v:tr},r=WP.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${ki(s).slice(1)}`}async function KP(t){const e=await BP(t),n=jn().gapi;return ce(n,t,"internal-error"),e.open({where:document.body,url:zP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qP,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=$n(t,"network-request-failed"),a=jn().setTimeout(()=>{i(o)},$P.get());function c(){jn().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const GP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},QP=500,YP=600,XP="_blank",JP="http://localhost";class ag{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ZP(t,e,n,s=QP,r=YP){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},GP),{width:s.toString(),height:r.toString(),top:i,left:o}),u=Bt().toLowerCase();n&&(a=TE(u)?XP:n),vE(u)&&(e=e||JP,c.scrollbars="yes");const h=Object.entries(c).reduce((p,[g,y])=>`${p}${g}=${y},`,"");if(bS(u)&&a!=="_self")return e1(e||"",a),new ag(null);const d=window.open(e||"",a,h);ce(d,t,"popup-blocked");try{d.focus()}catch{}return new ag(d)}function e1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const t1="__/auth/handler",n1="emulator/auth/handler",s1=encodeURIComponent("fac");async function lg(t,e,n,s,r,i){ce(t.config.authDomain,t,"auth-domain-config-required"),ce(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:tr,eventId:r};if(e instanceof OE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ih(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof ca){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const c=await t._getAppCheckToken(),u=c?`#${s1}=${encodeURIComponent(c)}`:"";return`${r1(t)}?${ki(a).slice(1)}${u}`}function r1({config:t}){return t.emulator?Qd(t,n1):`https://${t.authDomain}/${t1}`}/**
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
 */const qu="webStorageSupport";class i1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ef,this._completeRedirectFn=PP,this._overrideRedirectResult=bP}async _openPopup(e,n,s,r){var i;ys((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await lg(e,n,s,Ph(),r);return ZP(e,o,tf())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await lg(e,n,s,Ph(),r);return cP(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(ys(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await KP(e),s=new NP(e);return n.register("authEvent",r=>(ce(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(qu,{type:qu},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[qu];o!==void 0&&n(!!o),Cn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=LP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return bE()||EE()||Xd()}}const GE=i1;var cg="@firebase/auth",ug="1.10.7";/**
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
 */class o1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function a1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function l1(t){Kn(new bn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;ce(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:CE(t)},u=new OS(s,r,i,c);return $S(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Kn(new bn("auth-internal",e=>{const n=Or(e.getProvider("auth").getImmediate());return(s=>new o1(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),on(cg,ug,a1(t)),on(cg,ug,"esm2017")}/**
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
 */const c1=5*60,u1=eE("authIdTokenMaxAge")||c1;let hg=null;const h1=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>u1)return;const r=n==null?void 0:n.token;hg!==r&&(hg=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function d1(t=zd()){const e=Wd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=kE(t,{popupRedirectResolver:GE,persistence:[WE,UE,ef]}),s=eE("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=h1(i.toString());rP(n,o,()=>o(n.currentUser)),LE(n,a=>o(a))}}const r=Jv("auth");return r&&jS(n,`http://${r}`),n}function f1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}DS({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=$n("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",f1().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});l1("Browser");var p1="firebase",m1="11.9.1";/**
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
 */on(p1,m1,"app");var dg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $s,QE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,v){function A(){}A.prototype=v.prototype,b.D=v.prototype,b.prototype=new A,b.prototype.constructor=b,b.C=function(C,S,k){for(var R=Array(arguments.length-2),$t=2;$t<arguments.length;$t++)R[$t-2]=arguments[$t];return v.prototype[S].apply(C,R)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(b,v,A){A||(A=0);var C=Array(16);if(typeof v=="string")for(var S=0;16>S;++S)C[S]=v.charCodeAt(A++)|v.charCodeAt(A++)<<8|v.charCodeAt(A++)<<16|v.charCodeAt(A++)<<24;else for(S=0;16>S;++S)C[S]=v[A++]|v[A++]<<8|v[A++]<<16|v[A++]<<24;v=b.g[0],A=b.g[1],S=b.g[2];var k=b.g[3],R=v+(k^A&(S^k))+C[0]+3614090360&4294967295;v=A+(R<<7&4294967295|R>>>25),R=k+(S^v&(A^S))+C[1]+3905402710&4294967295,k=v+(R<<12&4294967295|R>>>20),R=S+(A^k&(v^A))+C[2]+606105819&4294967295,S=k+(R<<17&4294967295|R>>>15),R=A+(v^S&(k^v))+C[3]+3250441966&4294967295,A=S+(R<<22&4294967295|R>>>10),R=v+(k^A&(S^k))+C[4]+4118548399&4294967295,v=A+(R<<7&4294967295|R>>>25),R=k+(S^v&(A^S))+C[5]+1200080426&4294967295,k=v+(R<<12&4294967295|R>>>20),R=S+(A^k&(v^A))+C[6]+2821735955&4294967295,S=k+(R<<17&4294967295|R>>>15),R=A+(v^S&(k^v))+C[7]+4249261313&4294967295,A=S+(R<<22&4294967295|R>>>10),R=v+(k^A&(S^k))+C[8]+1770035416&4294967295,v=A+(R<<7&4294967295|R>>>25),R=k+(S^v&(A^S))+C[9]+2336552879&4294967295,k=v+(R<<12&4294967295|R>>>20),R=S+(A^k&(v^A))+C[10]+4294925233&4294967295,S=k+(R<<17&4294967295|R>>>15),R=A+(v^S&(k^v))+C[11]+2304563134&4294967295,A=S+(R<<22&4294967295|R>>>10),R=v+(k^A&(S^k))+C[12]+1804603682&4294967295,v=A+(R<<7&4294967295|R>>>25),R=k+(S^v&(A^S))+C[13]+4254626195&4294967295,k=v+(R<<12&4294967295|R>>>20),R=S+(A^k&(v^A))+C[14]+2792965006&4294967295,S=k+(R<<17&4294967295|R>>>15),R=A+(v^S&(k^v))+C[15]+1236535329&4294967295,A=S+(R<<22&4294967295|R>>>10),R=v+(S^k&(A^S))+C[1]+4129170786&4294967295,v=A+(R<<5&4294967295|R>>>27),R=k+(A^S&(v^A))+C[6]+3225465664&4294967295,k=v+(R<<9&4294967295|R>>>23),R=S+(v^A&(k^v))+C[11]+643717713&4294967295,S=k+(R<<14&4294967295|R>>>18),R=A+(k^v&(S^k))+C[0]+3921069994&4294967295,A=S+(R<<20&4294967295|R>>>12),R=v+(S^k&(A^S))+C[5]+3593408605&4294967295,v=A+(R<<5&4294967295|R>>>27),R=k+(A^S&(v^A))+C[10]+38016083&4294967295,k=v+(R<<9&4294967295|R>>>23),R=S+(v^A&(k^v))+C[15]+3634488961&4294967295,S=k+(R<<14&4294967295|R>>>18),R=A+(k^v&(S^k))+C[4]+3889429448&4294967295,A=S+(R<<20&4294967295|R>>>12),R=v+(S^k&(A^S))+C[9]+568446438&4294967295,v=A+(R<<5&4294967295|R>>>27),R=k+(A^S&(v^A))+C[14]+3275163606&4294967295,k=v+(R<<9&4294967295|R>>>23),R=S+(v^A&(k^v))+C[3]+4107603335&4294967295,S=k+(R<<14&4294967295|R>>>18),R=A+(k^v&(S^k))+C[8]+1163531501&4294967295,A=S+(R<<20&4294967295|R>>>12),R=v+(S^k&(A^S))+C[13]+2850285829&4294967295,v=A+(R<<5&4294967295|R>>>27),R=k+(A^S&(v^A))+C[2]+4243563512&4294967295,k=v+(R<<9&4294967295|R>>>23),R=S+(v^A&(k^v))+C[7]+1735328473&4294967295,S=k+(R<<14&4294967295|R>>>18),R=A+(k^v&(S^k))+C[12]+2368359562&4294967295,A=S+(R<<20&4294967295|R>>>12),R=v+(A^S^k)+C[5]+4294588738&4294967295,v=A+(R<<4&4294967295|R>>>28),R=k+(v^A^S)+C[8]+2272392833&4294967295,k=v+(R<<11&4294967295|R>>>21),R=S+(k^v^A)+C[11]+1839030562&4294967295,S=k+(R<<16&4294967295|R>>>16),R=A+(S^k^v)+C[14]+4259657740&4294967295,A=S+(R<<23&4294967295|R>>>9),R=v+(A^S^k)+C[1]+2763975236&4294967295,v=A+(R<<4&4294967295|R>>>28),R=k+(v^A^S)+C[4]+1272893353&4294967295,k=v+(R<<11&4294967295|R>>>21),R=S+(k^v^A)+C[7]+4139469664&4294967295,S=k+(R<<16&4294967295|R>>>16),R=A+(S^k^v)+C[10]+3200236656&4294967295,A=S+(R<<23&4294967295|R>>>9),R=v+(A^S^k)+C[13]+681279174&4294967295,v=A+(R<<4&4294967295|R>>>28),R=k+(v^A^S)+C[0]+3936430074&4294967295,k=v+(R<<11&4294967295|R>>>21),R=S+(k^v^A)+C[3]+3572445317&4294967295,S=k+(R<<16&4294967295|R>>>16),R=A+(S^k^v)+C[6]+76029189&4294967295,A=S+(R<<23&4294967295|R>>>9),R=v+(A^S^k)+C[9]+3654602809&4294967295,v=A+(R<<4&4294967295|R>>>28),R=k+(v^A^S)+C[12]+3873151461&4294967295,k=v+(R<<11&4294967295|R>>>21),R=S+(k^v^A)+C[15]+530742520&4294967295,S=k+(R<<16&4294967295|R>>>16),R=A+(S^k^v)+C[2]+3299628645&4294967295,A=S+(R<<23&4294967295|R>>>9),R=v+(S^(A|~k))+C[0]+4096336452&4294967295,v=A+(R<<6&4294967295|R>>>26),R=k+(A^(v|~S))+C[7]+1126891415&4294967295,k=v+(R<<10&4294967295|R>>>22),R=S+(v^(k|~A))+C[14]+2878612391&4294967295,S=k+(R<<15&4294967295|R>>>17),R=A+(k^(S|~v))+C[5]+4237533241&4294967295,A=S+(R<<21&4294967295|R>>>11),R=v+(S^(A|~k))+C[12]+1700485571&4294967295,v=A+(R<<6&4294967295|R>>>26),R=k+(A^(v|~S))+C[3]+2399980690&4294967295,k=v+(R<<10&4294967295|R>>>22),R=S+(v^(k|~A))+C[10]+4293915773&4294967295,S=k+(R<<15&4294967295|R>>>17),R=A+(k^(S|~v))+C[1]+2240044497&4294967295,A=S+(R<<21&4294967295|R>>>11),R=v+(S^(A|~k))+C[8]+1873313359&4294967295,v=A+(R<<6&4294967295|R>>>26),R=k+(A^(v|~S))+C[15]+4264355552&4294967295,k=v+(R<<10&4294967295|R>>>22),R=S+(v^(k|~A))+C[6]+2734768916&4294967295,S=k+(R<<15&4294967295|R>>>17),R=A+(k^(S|~v))+C[13]+1309151649&4294967295,A=S+(R<<21&4294967295|R>>>11),R=v+(S^(A|~k))+C[4]+4149444226&4294967295,v=A+(R<<6&4294967295|R>>>26),R=k+(A^(v|~S))+C[11]+3174756917&4294967295,k=v+(R<<10&4294967295|R>>>22),R=S+(v^(k|~A))+C[2]+718787259&4294967295,S=k+(R<<15&4294967295|R>>>17),R=A+(k^(S|~v))+C[9]+3951481745&4294967295,b.g[0]=b.g[0]+v&4294967295,b.g[1]=b.g[1]+(S+(R<<21&4294967295|R>>>11))&4294967295,b.g[2]=b.g[2]+S&4294967295,b.g[3]=b.g[3]+k&4294967295}s.prototype.u=function(b,v){v===void 0&&(v=b.length);for(var A=v-this.blockSize,C=this.B,S=this.h,k=0;k<v;){if(S==0)for(;k<=A;)r(this,b,k),k+=this.blockSize;if(typeof b=="string"){for(;k<v;)if(C[S++]=b.charCodeAt(k++),S==this.blockSize){r(this,C),S=0;break}}else for(;k<v;)if(C[S++]=b[k++],S==this.blockSize){r(this,C),S=0;break}}this.h=S,this.o+=v},s.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var v=1;v<b.length-8;++v)b[v]=0;var A=8*this.o;for(v=b.length-8;v<b.length;++v)b[v]=A&255,A/=256;for(this.u(b),b=Array(16),v=A=0;4>v;++v)for(var C=0;32>C;C+=8)b[A++]=this.g[v]>>>C&255;return b};function i(b,v){var A=a;return Object.prototype.hasOwnProperty.call(A,b)?A[b]:A[b]=v(b)}function o(b,v){this.h=v;for(var A=[],C=!0,S=b.length-1;0<=S;S--){var k=b[S]|0;C&&k==v||(A[S]=k,C=!1)}this.g=A}var a={};function c(b){return-128<=b&&128>b?i(b,function(v){return new o([v|0],0>v?-1:0)}):new o([b|0],0>b?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return d;if(0>b)return w(u(-b));for(var v=[],A=1,C=0;b>=A;C++)v[C]=b/A|0,A*=4294967296;return new o(v,0)}function h(b,v){if(b.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(b.charAt(0)=="-")return w(h(b.substring(1),v));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=u(Math.pow(v,8)),C=d,S=0;S<b.length;S+=8){var k=Math.min(8,b.length-S),R=parseInt(b.substring(S,S+k),v);8>k?(k=u(Math.pow(v,k)),C=C.j(k).add(u(R))):(C=C.j(A),C=C.add(u(R)))}return C}var d=c(0),p=c(1),g=c(16777216);t=o.prototype,t.m=function(){if(T(this))return-w(this).m();for(var b=0,v=1,A=0;A<this.g.length;A++){var C=this.i(A);b+=(0<=C?C:4294967296+C)*v,v*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(y(this))return"0";if(T(this))return"-"+w(this).toString(b);for(var v=u(Math.pow(b,6)),A=this,C="";;){var S=V(A,v).g;A=O(A,S.j(v));var k=((0<A.g.length?A.g[0]:A.h)>>>0).toString(b);if(A=S,y(A))return k+C;for(;6>k.length;)k="0"+k;C=k+C}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function y(b){if(b.h!=0)return!1;for(var v=0;v<b.g.length;v++)if(b.g[v]!=0)return!1;return!0}function T(b){return b.h==-1}t.l=function(b){return b=O(this,b),T(b)?-1:y(b)?0:1};function w(b){for(var v=b.g.length,A=[],C=0;C<v;C++)A[C]=~b.g[C];return new o(A,~b.h).add(p)}t.abs=function(){return T(this)?w(this):this},t.add=function(b){for(var v=Math.max(this.g.length,b.g.length),A=[],C=0,S=0;S<=v;S++){var k=C+(this.i(S)&65535)+(b.i(S)&65535),R=(k>>>16)+(this.i(S)>>>16)+(b.i(S)>>>16);C=R>>>16,k&=65535,R&=65535,A[S]=R<<16|k}return new o(A,A[A.length-1]&-2147483648?-1:0)};function O(b,v){return b.add(w(v))}t.j=function(b){if(y(this)||y(b))return d;if(T(this))return T(b)?w(this).j(w(b)):w(w(this).j(b));if(T(b))return w(this.j(w(b)));if(0>this.l(g)&&0>b.l(g))return u(this.m()*b.m());for(var v=this.g.length+b.g.length,A=[],C=0;C<2*v;C++)A[C]=0;for(C=0;C<this.g.length;C++)for(var S=0;S<b.g.length;S++){var k=this.i(C)>>>16,R=this.i(C)&65535,$t=b.i(S)>>>16,ln=b.i(S)&65535;A[2*C+2*S]+=R*ln,D(A,2*C+2*S),A[2*C+2*S+1]+=k*ln,D(A,2*C+2*S+1),A[2*C+2*S+1]+=R*$t,D(A,2*C+2*S+1),A[2*C+2*S+2]+=k*$t,D(A,2*C+2*S+2)}for(C=0;C<v;C++)A[C]=A[2*C+1]<<16|A[2*C];for(C=v;C<2*v;C++)A[C]=0;return new o(A,0)};function D(b,v){for(;(b[v]&65535)!=b[v];)b[v+1]+=b[v]>>>16,b[v]&=65535,v++}function x(b,v){this.g=b,this.h=v}function V(b,v){if(y(v))throw Error("division by zero");if(y(b))return new x(d,d);if(T(b))return v=V(w(b),v),new x(w(v.g),w(v.h));if(T(v))return v=V(b,w(v)),new x(w(v.g),v.h);if(30<b.g.length){if(T(b)||T(v))throw Error("slowDivide_ only works with positive integers.");for(var A=p,C=v;0>=C.l(b);)A=Z(A),C=Z(C);var S=se(A,1),k=se(C,1);for(C=se(C,2),A=se(A,2);!y(C);){var R=k.add(C);0>=R.l(b)&&(S=S.add(A),k=R),C=se(C,1),A=se(A,1)}return v=O(b,S.j(v)),new x(S,v)}for(S=d;0<=b.l(v);){for(A=Math.max(1,Math.floor(b.m()/v.m())),C=Math.ceil(Math.log(A)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),k=u(A),R=k.j(v);T(R)||0<R.l(b);)A-=C,k=u(A),R=k.j(v);y(k)&&(k=p),S=S.add(k),b=O(b,R)}return new x(S,b)}t.A=function(b){return V(this,b).h},t.and=function(b){for(var v=Math.max(this.g.length,b.g.length),A=[],C=0;C<v;C++)A[C]=this.i(C)&b.i(C);return new o(A,this.h&b.h)},t.or=function(b){for(var v=Math.max(this.g.length,b.g.length),A=[],C=0;C<v;C++)A[C]=this.i(C)|b.i(C);return new o(A,this.h|b.h)},t.xor=function(b){for(var v=Math.max(this.g.length,b.g.length),A=[],C=0;C<v;C++)A[C]=this.i(C)^b.i(C);return new o(A,this.h^b.h)};function Z(b){for(var v=b.g.length+1,A=[],C=0;C<v;C++)A[C]=b.i(C)<<1|b.i(C-1)>>>31;return new o(A,b.h)}function se(b,v){var A=v>>5;v%=32;for(var C=b.g.length-A,S=[],k=0;k<C;k++)S[k]=0<v?b.i(k+A)>>>v|b.i(k+A+1)<<32-v:b.i(k+A);return new o(S,b.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,QE=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,$s=o}).apply(typeof dg<"u"?dg:typeof self<"u"?self:typeof window<"u"?window:{});var Ha=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var YE,ho,XE,hl,Dh,JE,ZE,eT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,m){return l==Array.prototype||l==Object.prototype||(l[f]=m.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ha=="object"&&Ha];for(var f=0;f<l.length;++f){var m=l[f];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var s=n(this);function r(l,f){if(f)e:{var m=s;l=l.split(".");for(var _=0;_<l.length-1;_++){var N=l[_];if(!(N in m))break e;m=m[N]}l=l[l.length-1],_=m[l],f=f(_),f!=_&&f!=null&&e(m,l,{configurable:!0,writable:!0,value:f})}}function i(l,f){l instanceof String&&(l+="");var m=0,_=!1,N={next:function(){if(!_&&m<l.length){var L=m++;return{value:f(L,l[L]),done:!1}}return _=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}r("Array.prototype.values",function(l){return l||function(){return i(this,function(f,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function u(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function h(l,f,m){return l.call.apply(l.bind,arguments)}function d(l,f,m){if(!l)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,_),l.apply(f,N)}}return function(){return l.apply(f,arguments)}}function p(l,f,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:d,p.apply(null,arguments)}function g(l,f){var m=Array.prototype.slice.call(arguments,1);return function(){var _=m.slice();return _.push.apply(_,arguments),l.apply(this,_)}}function y(l,f){function m(){}m.prototype=f.prototype,l.aa=f.prototype,l.prototype=new m,l.prototype.constructor=l,l.Qb=function(_,N,L){for(var G=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)G[Be-2]=arguments[Be];return f.prototype[N].apply(_,G)}}function T(l){const f=l.length;if(0<f){const m=Array(f);for(let _=0;_<f;_++)m[_]=l[_];return m}return[]}function w(l,f){for(let m=1;m<arguments.length;m++){const _=arguments[m];if(c(_)){const N=l.length||0,L=_.length||0;l.length=N+L;for(let G=0;G<L;G++)l[N+G]=_[G]}else l.push(_)}}class O{constructor(f,m){this.i=f,this.j=m,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function D(l){return/^[\s\xa0]*$/.test(l)}function x(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function V(l){return V[" "](l),l}V[" "]=function(){};var Z=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function se(l,f,m){for(const _ in l)f.call(m,l[_],_,l)}function b(l,f){for(const m in l)f.call(void 0,l[m],m,l)}function v(l){const f={};for(const m in l)f[m]=l[m];return f}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(l,f){let m,_;for(let N=1;N<arguments.length;N++){_=arguments[N];for(m in _)l[m]=_[m];for(let L=0;L<A.length;L++)m=A[L],Object.prototype.hasOwnProperty.call(_,m)&&(l[m]=_[m])}}function S(l){var f=1;l=l.split(":");const m=[];for(;0<f&&l.length;)m.push(l.shift()),f--;return l.length&&m.push(l.join(":")),m}function k(l){a.setTimeout(()=>{throw l},0)}function R(){var l=en;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class $t{constructor(){this.h=this.g=null}add(f,m){const _=ln.get();_.set(f,m),this.h?this.h.next=_:this.g=_,this.h=_}}var ln=new O(()=>new nt,l=>l.reset());class nt{constructor(){this.next=this.g=this.h=null}set(f,m){this.h=f,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let Re,Te=!1,en=new $t,_n=()=>{const l=a.Promise.resolve(void 0);Re=()=>{l.then(cn)}};var cn=()=>{for(var l;l=R();){try{l.h.call(l.g)}catch(m){k(m)}var f=ln;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}Te=!1};function Qe(){this.s=this.s,this.C=this.C}Qe.prototype.s=!1,Qe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Qe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ye(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}Ye.prototype.h=function(){this.defaultPrevented=!0};var Is=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const m=()=>{};a.addEventListener("test",m,f),a.removeEventListener("test",m,f)}catch{}return l}();function Nn(l,f){if(Ye.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var m=this.type=l.type,_=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(Z){e:{try{V(f.nodeName);var N=!0;break e}catch{}N=!1}N||(f=null)}}else m=="mouseover"?f=l.fromElement:m=="mouseout"&&(f=l.toElement);this.relatedTarget=f,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Wt[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Nn.aa.h.call(this)}}y(Nn,Ye);var Wt={2:"touch",3:"pen",4:"mouse"};Nn.prototype.h=function(){Nn.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var F="closure_listenable_"+(1e6*Math.random()|0),ee=0;function J(l,f,m,_,N){this.listener=l,this.proxy=null,this.src=f,this.type=m,this.capture=!!_,this.ha=N,this.key=++ee,this.da=this.fa=!1}function ne(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function ke(l){this.src=l,this.g={},this.h=0}ke.prototype.add=function(l,f,m,_,N){var L=l.toString();l=this.g[L],l||(l=this.g[L]=[],this.h++);var G=I(l,f,_,N);return-1<G?(f=l[G],m||(f.fa=!1)):(f=new J(f,this.src,L,!!_,N),f.fa=m,l.push(f)),f};function E(l,f){var m=f.type;if(m in l.g){var _=l.g[m],N=Array.prototype.indexOf.call(_,f,void 0),L;(L=0<=N)&&Array.prototype.splice.call(_,N,1),L&&(ne(f),l.g[m].length==0&&(delete l.g[m],l.h--))}}function I(l,f,m,_){for(var N=0;N<l.length;++N){var L=l[N];if(!L.da&&L.listener==f&&L.capture==!!m&&L.ha==_)return N}return-1}var P="closure_lm_"+(1e6*Math.random()|0),U={};function j(l,f,m,_,N){if(Array.isArray(f)){for(var L=0;L<f.length;L++)j(l,f[L],m,_,N);return null}return m=he(m),l&&l[F]?l.K(f,m,u(_)?!!_.capture:!1,N):B(l,f,m,!1,_,N)}function B(l,f,m,_,N,L){if(!f)throw Error("Invalid event type");var G=u(N)?!!N.capture:!!N,Be=Q(l);if(Be||(l[P]=Be=new ke(l)),m=Be.add(f,m,_,G,L),m.proxy)return m;if(_=Y(),m.proxy=_,_.src=l,_.listener=m,l.addEventListener)Is||(N=G),N===void 0&&(N=!1),l.addEventListener(f.toString(),_,N);else if(l.attachEvent)l.attachEvent(q(f.toString()),_);else if(l.addListener&&l.removeListener)l.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return m}function Y(){function l(m){return f.call(l.src,l.listener,m)}const f=oe;return l}function K(l,f,m,_,N){if(Array.isArray(f))for(var L=0;L<f.length;L++)K(l,f[L],m,_,N);else _=u(_)?!!_.capture:!!_,m=he(m),l&&l[F]?(l=l.i,f=String(f).toString(),f in l.g&&(L=l.g[f],m=I(L,m,_,N),-1<m&&(ne(L[m]),Array.prototype.splice.call(L,m,1),L.length==0&&(delete l.g[f],l.h--)))):l&&(l=Q(l))&&(f=l.g[f.toString()],l=-1,f&&(l=I(f,m,_,N)),(m=-1<l?f[l]:null)&&z(m))}function z(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[F])E(f.i,l);else{var m=l.type,_=l.proxy;f.removeEventListener?f.removeEventListener(m,_,l.capture):f.detachEvent?f.detachEvent(q(m),_):f.addListener&&f.removeListener&&f.removeListener(_),(m=Q(f))?(E(m,l),m.h==0&&(m.src=null,f[P]=null)):ne(l)}}}function q(l){return l in U?U[l]:U[l]="on"+l}function oe(l,f){if(l.da)l=!0;else{f=new Nn(f,this);var m=l.listener,_=l.ha||l.src;l.fa&&z(l),l=m.call(_,f)}return l}function Q(l){return l=l[P],l instanceof ke?l:null}var re="__closure_events_fn_"+(1e9*Math.random()>>>0);function he(l){return typeof l=="function"?l:(l[re]||(l[re]=function(f){return l.handleEvent(f)}),l[re])}function le(){Qe.call(this),this.i=new ke(this),this.M=this,this.F=null}y(le,Qe),le.prototype[F]=!0,le.prototype.removeEventListener=function(l,f,m,_){K(this,l,f,m,_)};function ge(l,f){var m,_=l.F;if(_)for(m=[];_;_=_.F)m.push(_);if(l=l.M,_=f.type||f,typeof f=="string")f=new Ye(f,l);else if(f instanceof Ye)f.target=f.target||l;else{var N=f;f=new Ye(_,l),C(f,N)}if(N=!0,m)for(var L=m.length-1;0<=L;L--){var G=f.g=m[L];N=be(G,_,!0,f)&&N}if(G=f.g=l,N=be(G,_,!0,f)&&N,N=be(G,_,!1,f)&&N,m)for(L=0;L<m.length;L++)G=f.g=m[L],N=be(G,_,!1,f)&&N}le.prototype.N=function(){if(le.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var m=l.g[f],_=0;_<m.length;_++)ne(m[_]);delete l.g[f],l.h--}}this.F=null},le.prototype.K=function(l,f,m,_){return this.i.add(String(l),f,!1,m,_)},le.prototype.L=function(l,f,m,_){return this.i.add(String(l),f,!0,m,_)};function be(l,f,m,_){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var N=!0,L=0;L<f.length;++L){var G=f[L];if(G&&!G.da&&G.capture==m){var Be=G.listener,yt=G.ha||G.src;G.fa&&E(l.i,G),N=Be.call(yt,_)!==!1&&N}}return N&&!_.defaultPrevented}function mt(l,f,m){if(typeof l=="function")m&&(l=p(l,m));else if(l&&typeof l.handleEvent=="function")l=p(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:a.setTimeout(l,f||0)}function gt(l){l.g=mt(()=>{l.g=null,l.i&&(l.i=!1,gt(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class un extends Qe{constructor(f,m){super(),this.m=f,this.l=m,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:gt(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function bt(l){Qe.call(this),this.h=l,this.g={}}y(bt,Qe);var As=[];function $i(l){se(l.g,function(f,m){this.g.hasOwnProperty(m)&&z(f)},l),l.g={}}bt.prototype.N=function(){bt.aa.N.call(this),$i(this)},bt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var _t=a.JSON.stringify,hn=a.JSON.parse,Ia=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function fu(){}fu.prototype.h=null;function mp(l){return l.h||(l.h=l.i())}function gp(){}var ji={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function pu(){Ye.call(this,"d")}y(pu,Ye);function mu(){Ye.call(this,"c")}y(mu,Ye);var or={},_p=null;function Aa(){return _p=_p||new le}or.La="serverreachability";function yp(l){Ye.call(this,or.La,l)}y(yp,Ye);function Hi(l){const f=Aa();ge(f,new yp(f))}or.STAT_EVENT="statevent";function vp(l,f){Ye.call(this,or.STAT_EVENT,l),this.stat=f}y(vp,Ye);function jt(l){const f=Aa();ge(f,new vp(f,l))}or.Ma="timingevent";function Ep(l,f){Ye.call(this,or.Ma,l),this.size=f}y(Ep,Ye);function qi(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},f)}function Wi(){this.g=!0}Wi.prototype.xa=function(){this.g=!1};function M0(l,f,m,_,N,L){l.info(function(){if(l.g)if(L)for(var G="",Be=L.split("&"),yt=0;yt<Be.length;yt++){var Ne=Be[yt].split("=");if(1<Ne.length){var Ct=Ne[0];Ne=Ne[1];var St=Ct.split("_");G=2<=St.length&&St[1]=="type"?G+(Ct+"="+Ne+"&"):G+(Ct+"=redacted&")}}else G=null;else G=L;return"XMLHTTP REQ ("+_+") [attempt "+N+"]: "+f+`
`+m+`
`+G})}function L0(l,f,m,_,N,L,G){l.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+N+"]: "+f+`
`+m+`
`+L+" "+G})}function Fr(l,f,m,_){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+F0(l,m)+(_?" "+_:"")})}function V0(l,f){l.info(function(){return"TIMEOUT: "+f})}Wi.prototype.info=function(){};function F0(l,f){if(!l.g)return f;if(!f)return null;try{var m=JSON.parse(f);if(m){for(l=0;l<m.length;l++)if(Array.isArray(m[l])){var _=m[l];if(!(2>_.length)){var N=_[1];if(Array.isArray(N)&&!(1>N.length)){var L=N[0];if(L!="noop"&&L!="stop"&&L!="close")for(var G=1;G<N.length;G++)N[G]=""}}}}return _t(m)}catch{return f}}var Ra={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Tp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},gu;function ba(){}y(ba,fu),ba.prototype.g=function(){return new XMLHttpRequest},ba.prototype.i=function(){return{}},gu=new ba;function Rs(l,f,m,_){this.j=l,this.i=f,this.l=m,this.R=_||1,this.U=new bt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new wp}function wp(){this.i=null,this.g="",this.h=!1}var Ip={},_u={};function yu(l,f,m){l.L=1,l.v=ka(Zn(f)),l.m=m,l.P=!0,Ap(l,null)}function Ap(l,f){l.F=Date.now(),Ca(l),l.A=Zn(l.v);var m=l.A,_=l.R;Array.isArray(_)||(_=[String(_)]),Fp(m.i,"t",_),l.C=0,m=l.j.J,l.h=new wp,l.g=nm(l.j,m?f:null,!l.m),0<l.O&&(l.M=new un(p(l.Y,l,l.g),l.O)),f=l.U,m=l.g,_=l.ca;var N="readystatechange";Array.isArray(N)||(N&&(As[0]=N.toString()),N=As);for(var L=0;L<N.length;L++){var G=j(m,N[L],_||f.handleEvent,!1,f.h||f);if(!G)break;f.g[G.key]=G}f=l.H?v(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),Hi(),M0(l.i,l.u,l.A,l.l,l.R,l.m)}Rs.prototype.ca=function(l){l=l.target;const f=this.M;f&&es(l)==3?f.j():this.Y(l)},Rs.prototype.Y=function(l){try{if(l==this.g)e:{const St=es(this.g);var f=this.g.Ba();const $r=this.g.Z();if(!(3>St)&&(St!=3||this.g&&(this.h.h||this.g.oa()||Wp(this.g)))){this.J||St!=4||f==7||(f==8||0>=$r?Hi(3):Hi(2)),vu(this);var m=this.g.Z();this.X=m;t:if(Rp(this)){var _=Wp(this.g);l="";var N=_.length,L=es(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ar(this),zi(this);var G="";break t}this.h.i=new a.TextDecoder}for(f=0;f<N;f++)this.h.h=!0,l+=this.h.i.decode(_[f],{stream:!(L&&f==N-1)});_.length=0,this.h.g+=l,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=m==200,L0(this.i,this.u,this.A,this.l,this.R,St,m),this.o){if(this.T&&!this.K){t:{if(this.g){var Be,yt=this.g;if((Be=yt.g?yt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!D(Be)){var Ne=Be;break t}}Ne=null}if(m=Ne)Fr(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Eu(this,m);else{this.o=!1,this.s=3,jt(12),ar(this),zi(this);break e}}if(this.P){m=!0;let yn;for(;!this.J&&this.C<G.length;)if(yn=U0(this,G),yn==_u){St==4&&(this.s=4,jt(14),m=!1),Fr(this.i,this.l,null,"[Incomplete Response]");break}else if(yn==Ip){this.s=4,jt(15),Fr(this.i,this.l,G,"[Invalid Chunk]"),m=!1;break}else Fr(this.i,this.l,yn,null),Eu(this,yn);if(Rp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),St!=4||G.length!=0||this.h.h||(this.s=1,jt(16),m=!1),this.o=this.o&&m,!m)Fr(this.i,this.l,G,"[Invalid Chunked Response]"),ar(this),zi(this);else if(0<G.length&&!this.W){this.W=!0;var Ct=this.j;Ct.g==this&&Ct.ba&&!Ct.M&&(Ct.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),bu(Ct),Ct.M=!0,jt(11))}}else Fr(this.i,this.l,G,null),Eu(this,G);St==4&&ar(this),this.o&&!this.J&&(St==4?Jp(this.j,this):(this.o=!1,Ca(this)))}else nA(this.g),m==400&&0<G.indexOf("Unknown SID")?(this.s=3,jt(12)):(this.s=0,jt(13)),ar(this),zi(this)}}}catch{}finally{}};function Rp(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function U0(l,f){var m=l.C,_=f.indexOf(`
`,m);return _==-1?_u:(m=Number(f.substring(m,_)),isNaN(m)?Ip:(_+=1,_+m>f.length?_u:(f=f.slice(_,_+m),l.C=_+m,f)))}Rs.prototype.cancel=function(){this.J=!0,ar(this)};function Ca(l){l.S=Date.now()+l.I,bp(l,l.I)}function bp(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=qi(p(l.ba,l),f)}function vu(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Rs.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(V0(this.i,this.A),this.L!=2&&(Hi(),jt(17)),ar(this),this.s=2,zi(this)):bp(this,this.S-l)};function zi(l){l.j.G==0||l.J||Jp(l.j,l)}function ar(l){vu(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,$i(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function Eu(l,f){try{var m=l.j;if(m.G!=0&&(m.g==l||Tu(m.h,l))){if(!l.K&&Tu(m.h,l)&&m.G==3){try{var _=m.Da.g.parse(f)}catch{_=null}if(Array.isArray(_)&&_.length==3){var N=_;if(N[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<l.F)La(m),xa(m);else break e;Ru(m),jt(18)}}else m.za=N[1],0<m.za-m.T&&37500>N[2]&&m.F&&m.v==0&&!m.C&&(m.C=qi(p(m.Za,m),6e3));if(1>=Pp(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else cr(m,11)}else if((l.K||m.g==l)&&La(m),!D(f))for(N=m.Da.g.parse(f),f=0;f<N.length;f++){let Ne=N[f];if(m.T=Ne[0],Ne=Ne[1],m.G==2)if(Ne[0]=="c"){m.K=Ne[1],m.ia=Ne[2];const Ct=Ne[3];Ct!=null&&(m.la=Ct,m.j.info("VER="+m.la));const St=Ne[4];St!=null&&(m.Aa=St,m.j.info("SVER="+m.Aa));const $r=Ne[5];$r!=null&&typeof $r=="number"&&0<$r&&(_=1.5*$r,m.L=_,m.j.info("backChannelRequestTimeoutMs_="+_)),_=m;const yn=l.g;if(yn){const Fa=yn.g?yn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Fa){var L=_.h;L.g||Fa.indexOf("spdy")==-1&&Fa.indexOf("quic")==-1&&Fa.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(wu(L,L.h),L.h=null))}if(_.D){const Cu=yn.g?yn.g.getResponseHeader("X-HTTP-Session-Id"):null;Cu&&(_.ya=Cu,He(_.I,_.D,Cu))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-l.F,m.j.info("Handshake RTT: "+m.R+"ms")),_=m;var G=l;if(_.qa=tm(_,_.J?_.ia:null,_.W),G.K){kp(_.h,G);var Be=G,yt=_.L;yt&&(Be.I=yt),Be.B&&(vu(Be),Ca(Be)),_.g=G}else Yp(_);0<m.i.length&&Ma(m)}else Ne[0]!="stop"&&Ne[0]!="close"||cr(m,7);else m.G==3&&(Ne[0]=="stop"||Ne[0]=="close"?Ne[0]=="stop"?cr(m,7):Au(m):Ne[0]!="noop"&&m.l&&m.l.ta(Ne),m.v=0)}}Hi(4)}catch{}}var B0=class{constructor(l,f){this.g=l,this.map=f}};function Cp(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Sp(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Pp(l){return l.h?1:l.g?l.g.size:0}function Tu(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function wu(l,f){l.g?l.g.add(f):l.h=f}function kp(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}Cp.prototype.cancel=function(){if(this.i=Np(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Np(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const m of l.g.values())f=f.concat(m.D);return f}return T(l.i)}function $0(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(c(l)){for(var f=[],m=l.length,_=0;_<m;_++)f.push(l[_]);return f}f=[],m=0;for(_ in l)f[m++]=l[_];return f}function j0(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(c(l)||typeof l=="string"){var f=[];l=l.length;for(var m=0;m<l;m++)f.push(m);return f}f=[],m=0;for(const _ in l)f[m++]=_;return f}}}function Op(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(c(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var m=j0(l),_=$0(l),N=_.length,L=0;L<N;L++)f.call(void 0,_[L],m&&m[L],l)}var Dp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function H0(l,f){if(l){l=l.split("&");for(var m=0;m<l.length;m++){var _=l[m].indexOf("="),N=null;if(0<=_){var L=l[m].substring(0,_);N=l[m].substring(_+1)}else L=l[m];f(L,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function lr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof lr){this.h=l.h,Sa(this,l.j),this.o=l.o,this.g=l.g,Pa(this,l.s),this.l=l.l;var f=l.i,m=new Qi;m.i=f.i,f.g&&(m.g=new Map(f.g),m.h=f.h),xp(this,m),this.m=l.m}else l&&(f=String(l).match(Dp))?(this.h=!1,Sa(this,f[1]||"",!0),this.o=Ki(f[2]||""),this.g=Ki(f[3]||"",!0),Pa(this,f[4]),this.l=Ki(f[5]||"",!0),xp(this,f[6]||"",!0),this.m=Ki(f[7]||"")):(this.h=!1,this.i=new Qi(null,this.h))}lr.prototype.toString=function(){var l=[],f=this.j;f&&l.push(Gi(f,Mp,!0),":");var m=this.g;return(m||f=="file")&&(l.push("//"),(f=this.o)&&l.push(Gi(f,Mp,!0),"@"),l.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&l.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&l.push("/"),l.push(Gi(m,m.charAt(0)=="/"?z0:W0,!0))),(m=this.i.toString())&&l.push("?",m),(m=this.m)&&l.push("#",Gi(m,G0)),l.join("")};function Zn(l){return new lr(l)}function Sa(l,f,m){l.j=m?Ki(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function Pa(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function xp(l,f,m){f instanceof Qi?(l.i=f,Q0(l.i,l.h)):(m||(f=Gi(f,K0)),l.i=new Qi(f,l.h))}function He(l,f,m){l.i.set(f,m)}function ka(l){return He(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Ki(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Gi(l,f,m){return typeof l=="string"?(l=encodeURI(l).replace(f,q0),m&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function q0(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Mp=/[#\/\?@]/g,W0=/[#\?:]/g,z0=/[#\?]/g,K0=/[#\?@]/g,G0=/#/g;function Qi(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function bs(l){l.g||(l.g=new Map,l.h=0,l.i&&H0(l.i,function(f,m){l.add(decodeURIComponent(f.replace(/\+/g," ")),m)}))}t=Qi.prototype,t.add=function(l,f){bs(this),this.i=null,l=Ur(this,l);var m=this.g.get(l);return m||this.g.set(l,m=[]),m.push(f),this.h+=1,this};function Lp(l,f){bs(l),f=Ur(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function Vp(l,f){return bs(l),f=Ur(l,f),l.g.has(f)}t.forEach=function(l,f){bs(this),this.g.forEach(function(m,_){m.forEach(function(N){l.call(f,N,_,this)},this)},this)},t.na=function(){bs(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),m=[];for(let _=0;_<f.length;_++){const N=l[_];for(let L=0;L<N.length;L++)m.push(f[_])}return m},t.V=function(l){bs(this);let f=[];if(typeof l=="string")Vp(this,l)&&(f=f.concat(this.g.get(Ur(this,l))));else{l=Array.from(this.g.values());for(let m=0;m<l.length;m++)f=f.concat(l[m])}return f},t.set=function(l,f){return bs(this),this.i=null,l=Ur(this,l),Vp(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},t.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function Fp(l,f,m){Lp(l,f),0<m.length&&(l.i=null,l.g.set(Ur(l,f),T(m)),l.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var m=0;m<f.length;m++){var _=f[m];const L=encodeURIComponent(String(_)),G=this.V(_);for(_=0;_<G.length;_++){var N=L;G[_]!==""&&(N+="="+encodeURIComponent(String(G[_]))),l.push(N)}}return this.i=l.join("&")};function Ur(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function Q0(l,f){f&&!l.j&&(bs(l),l.i=null,l.g.forEach(function(m,_){var N=_.toLowerCase();_!=N&&(Lp(this,_),Fp(this,N,m))},l)),l.j=f}function Y0(l,f){const m=new Wi;if(a.Image){const _=new Image;_.onload=g(Cs,m,"TestLoadImage: loaded",!0,f,_),_.onerror=g(Cs,m,"TestLoadImage: error",!1,f,_),_.onabort=g(Cs,m,"TestLoadImage: abort",!1,f,_),_.ontimeout=g(Cs,m,"TestLoadImage: timeout",!1,f,_),a.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=l}else f(!1)}function X0(l,f){const m=new Wi,_=new AbortController,N=setTimeout(()=>{_.abort(),Cs(m,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:_.signal}).then(L=>{clearTimeout(N),L.ok?Cs(m,"TestPingServer: ok",!0,f):Cs(m,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(N),Cs(m,"TestPingServer: error",!1,f)})}function Cs(l,f,m,_,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),_(m)}catch{}}function J0(){this.g=new Ia}function Z0(l,f,m){const _=m||"";try{Op(l,function(N,L){let G=N;u(N)&&(G=_t(N)),f.push(_+L+"="+encodeURIComponent(G))})}catch(N){throw f.push(_+"type="+encodeURIComponent("_badmap")),N}}function Na(l){this.l=l.Ub||null,this.j=l.eb||!1}y(Na,fu),Na.prototype.g=function(){return new Oa(this.l,this.j)},Na.prototype.i=function(l){return function(){return l}}({});function Oa(l,f){le.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}y(Oa,le),t=Oa.prototype,t.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,Xi(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||a).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Yi(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Xi(this)),this.g&&(this.readyState=3,Xi(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Up(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Up(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?Yi(this):Xi(this),this.readyState==3&&Up(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Yi(this))},t.Qa=function(l){this.g&&(this.response=l,Yi(this))},t.ga=function(){this.g&&Yi(this)};function Yi(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Xi(l)}t.setRequestHeader=function(l,f){this.u.append(l,f)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var m=f.next();!m.done;)m=m.value,l.push(m[0]+": "+m[1]),m=f.next();return l.join(`\r
`)};function Xi(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Oa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Bp(l){let f="";return se(l,function(m,_){f+=_,f+=":",f+=m,f+=`\r
`}),f}function Iu(l,f,m){e:{for(_ in m){var _=!1;break e}_=!0}_||(m=Bp(m),typeof l=="string"?m!=null&&encodeURIComponent(String(m)):He(l,f,m))}function Xe(l){le.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}y(Xe,le);var eA=/^https?$/i,tA=["POST","PUT"];t=Xe.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,f,m,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():gu.g(),this.v=this.o?mp(this.o):mp(gu),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(L){$p(this,L);return}if(l=m||"",m=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var N in _)m.set(N,_[N]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const L of _.keys())m.set(L,_.get(L));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(m.keys()).find(L=>L.toLowerCase()=="content-type"),N=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(tA,f,void 0))||_||N||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,G]of m)this.g.setRequestHeader(L,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{qp(this),this.u=!0,this.g.send(l),this.u=!1}catch(L){$p(this,L)}};function $p(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,jp(l),Da(l)}function jp(l){l.A||(l.A=!0,ge(l,"complete"),ge(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,ge(this,"complete"),ge(this,"abort"),Da(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Da(this,!0)),Xe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Hp(this):this.bb())},t.bb=function(){Hp(this)};function Hp(l){if(l.h&&typeof o<"u"&&(!l.v[1]||es(l)!=4||l.Z()!=2)){if(l.u&&es(l)==4)mt(l.Ea,0,l);else if(ge(l,"readystatechange"),es(l)==4){l.h=!1;try{const G=l.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var m;if(!(m=f)){var _;if(_=G===0){var N=String(l.D).match(Dp)[1]||null;!N&&a.self&&a.self.location&&(N=a.self.location.protocol.slice(0,-1)),_=!eA.test(N?N.toLowerCase():"")}m=_}if(m)ge(l,"complete"),ge(l,"success");else{l.m=6;try{var L=2<es(l)?l.g.statusText:""}catch{L=""}l.l=L+" ["+l.Z()+"]",jp(l)}}finally{Da(l)}}}}function Da(l,f){if(l.g){qp(l);const m=l.g,_=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||ge(l,"ready");try{m.onreadystatechange=_}catch{}}}function qp(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function es(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<es(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),hn(f)}};function Wp(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function nA(l){const f={};l=(l.g&&2<=es(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<l.length;_++){if(D(l[_]))continue;var m=S(l[_]);const N=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const L=f[N]||[];f[N]=L,L.push(m)}b(f,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ji(l,f,m){return m&&m.internalChannelParams&&m.internalChannelParams[l]||f}function zp(l){this.Aa=0,this.i=[],this.j=new Wi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ji("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ji("baseRetryDelayMs",5e3,l),this.cb=Ji("retryDelaySeedMs",1e4,l),this.Wa=Ji("forwardChannelMaxRetries",2,l),this.wa=Ji("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Cp(l&&l.concurrentRequestLimit),this.Da=new J0,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=zp.prototype,t.la=8,t.G=1,t.connect=function(l,f,m,_){jt(0),this.W=l,this.H=f||{},m&&_!==void 0&&(this.H.OSID=m,this.H.OAID=_),this.F=this.X,this.I=tm(this,null,this.W),Ma(this)};function Au(l){if(Kp(l),l.G==3){var f=l.U++,m=Zn(l.I);if(He(m,"SID",l.K),He(m,"RID",f),He(m,"TYPE","terminate"),Zi(l,m),f=new Rs(l,l.j,f),f.L=2,f.v=ka(Zn(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(f.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=f.v,m=!0),m||(f.g=nm(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Ca(f)}em(l)}function xa(l){l.g&&(bu(l),l.g.cancel(),l.g=null)}function Kp(l){xa(l),l.u&&(a.clearTimeout(l.u),l.u=null),La(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Ma(l){if(!Sp(l.h)&&!l.s){l.s=!0;var f=l.Ga;Re||_n(),Te||(Re(),Te=!0),en.add(f,l),l.B=0}}function sA(l,f){return Pp(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=qi(p(l.Ga,l,f),Zp(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const N=new Rs(this,this.j,l);let L=this.o;if(this.S&&(L?(L=v(L),C(L,this.S)):L=this.S),this.m!==null||this.O||(N.H=L,L=null),this.P)e:{for(var f=0,m=0;m<this.i.length;m++){t:{var _=this.i[m];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(f+=_,4096<f){f=m;break e}if(f===4096||m===this.i.length-1){f=m+1;break e}}f=1e3}else f=1e3;f=Qp(this,N,f),m=Zn(this.I),He(m,"RID",l),He(m,"CVER",22),this.D&&He(m,"X-HTTP-Session-Id",this.D),Zi(this,m),L&&(this.O?f="headers="+encodeURIComponent(String(Bp(L)))+"&"+f:this.m&&Iu(m,this.m,L)),wu(this.h,N),this.Ua&&He(m,"TYPE","init"),this.P?(He(m,"$req",f),He(m,"SID","null"),N.T=!0,yu(N,m,null)):yu(N,m,f),this.G=2}}else this.G==3&&(l?Gp(this,l):this.i.length==0||Sp(this.h)||Gp(this))};function Gp(l,f){var m;f?m=f.l:m=l.U++;const _=Zn(l.I);He(_,"SID",l.K),He(_,"RID",m),He(_,"AID",l.T),Zi(l,_),l.m&&l.o&&Iu(_,l.m,l.o),m=new Rs(l,l.j,m,l.B+1),l.m===null&&(m.H=l.o),f&&(l.i=f.D.concat(l.i)),f=Qp(l,m,1e3),m.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),wu(l.h,m),yu(m,_,f)}function Zi(l,f){l.H&&se(l.H,function(m,_){He(f,_,m)}),l.l&&Op({},function(m,_){He(f,_,m)})}function Qp(l,f,m){m=Math.min(l.i.length,m);var _=l.l?p(l.l.Na,l.l,l):null;e:{var N=l.i;let L=-1;for(;;){const G=["count="+m];L==-1?0<m?(L=N[0].g,G.push("ofs="+L)):L=0:G.push("ofs="+L);let Be=!0;for(let yt=0;yt<m;yt++){let Ne=N[yt].g;const Ct=N[yt].map;if(Ne-=L,0>Ne)L=Math.max(0,N[yt].g-100),Be=!1;else try{Z0(Ct,G,"req"+Ne+"_")}catch{_&&_(Ct)}}if(Be){_=G.join("&");break e}}}return l=l.i.splice(0,m),f.D=l,_}function Yp(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;Re||_n(),Te||(Re(),Te=!0),en.add(f,l),l.v=0}}function Ru(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=qi(p(l.Fa,l),Zp(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,Xp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=qi(p(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,jt(10),xa(this),Xp(this))};function bu(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Xp(l){l.g=new Rs(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=Zn(l.qa);He(f,"RID","rpc"),He(f,"SID",l.K),He(f,"AID",l.T),He(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&He(f,"TO",l.ja),He(f,"TYPE","xmlhttp"),Zi(l,f),l.m&&l.o&&Iu(f,l.m,l.o),l.L&&(l.g.I=l.L);var m=l.g;l=l.ia,m.L=1,m.v=ka(Zn(f)),m.m=null,m.P=!0,Ap(m,l)}t.Za=function(){this.C!=null&&(this.C=null,xa(this),Ru(this),jt(19))};function La(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function Jp(l,f){var m=null;if(l.g==f){La(l),bu(l),l.g=null;var _=2}else if(Tu(l.h,f))m=f.D,kp(l.h,f),_=1;else return;if(l.G!=0){if(f.o)if(_==1){m=f.m?f.m.length:0,f=Date.now()-f.F;var N=l.B;_=Aa(),ge(_,new Ep(_,m)),Ma(l)}else Yp(l);else if(N=f.s,N==3||N==0&&0<f.X||!(_==1&&sA(l,f)||_==2&&Ru(l)))switch(m&&0<m.length&&(f=l.h,f.i=f.i.concat(m)),N){case 1:cr(l,5);break;case 4:cr(l,10);break;case 3:cr(l,6);break;default:cr(l,2)}}}function Zp(l,f){let m=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(m*=2),m*f}function cr(l,f){if(l.j.info("Error code "+f),f==2){var m=p(l.fb,l),_=l.Xa;const N=!_;_=new lr(_||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Sa(_,"https"),ka(_),N?Y0(_.toString(),m):X0(_.toString(),m)}else jt(2);l.G=0,l.l&&l.l.sa(f),em(l),Kp(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),jt(2)):(this.j.info("Failed to ping google.com"),jt(1))};function em(l){if(l.G=0,l.ka=[],l.l){const f=Np(l.h);(f.length!=0||l.i.length!=0)&&(w(l.ka,f),w(l.ka,l.i),l.h.i.length=0,T(l.i),l.i.length=0),l.l.ra()}}function tm(l,f,m){var _=m instanceof lr?Zn(m):new lr(m);if(_.g!="")f&&(_.g=f+"."+_.g),Pa(_,_.s);else{var N=a.location;_=N.protocol,f=f?f+"."+N.hostname:N.hostname,N=+N.port;var L=new lr(null);_&&Sa(L,_),f&&(L.g=f),N&&Pa(L,N),m&&(L.l=m),_=L}return m=l.D,f=l.ya,m&&f&&He(_,m,f),He(_,"VER",l.la),Zi(l,_),_}function nm(l,f,m){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new Xe(new Na({eb:m})):new Xe(l.pa),f.Ha(l.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function sm(){}t=sm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Va(){}Va.prototype.g=function(l,f){return new tn(l,f)};function tn(l,f){le.call(this),this.g=new zp(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!D(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!D(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new Br(this)}y(tn,le),tn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},tn.prototype.close=function(){Au(this.g)},tn.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var m={};m.__data__=l,l=m}else this.u&&(m={},m.__data__=_t(l),l=m);f.i.push(new B0(f.Ya++,l)),f.G==3&&Ma(f)},tn.prototype.N=function(){this.g.l=null,delete this.j,Au(this.g),delete this.g,tn.aa.N.call(this)};function rm(l){pu.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const m in f){l=m;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}y(rm,pu);function im(){mu.call(this),this.status=1}y(im,mu);function Br(l){this.g=l}y(Br,sm),Br.prototype.ua=function(){ge(this.g,"a")},Br.prototype.ta=function(l){ge(this.g,new rm(l))},Br.prototype.sa=function(l){ge(this.g,new im)},Br.prototype.ra=function(){ge(this.g,"b")},Va.prototype.createWebChannel=Va.prototype.g,tn.prototype.send=tn.prototype.o,tn.prototype.open=tn.prototype.m,tn.prototype.close=tn.prototype.close,eT=function(){return new Va},ZE=function(){return Aa()},JE=or,Dh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ra.NO_ERROR=0,Ra.TIMEOUT=8,Ra.HTTP_ERROR=6,hl=Ra,Tp.COMPLETE="complete",XE=Tp,gp.EventType=ji,ji.OPEN="a",ji.CLOSE="b",ji.ERROR="c",ji.MESSAGE="d",le.prototype.listen=le.prototype.K,ho=gp,Xe.prototype.listenOnce=Xe.prototype.L,Xe.prototype.getLastError=Xe.prototype.Ka,Xe.prototype.getLastErrorCode=Xe.prototype.Ba,Xe.prototype.getStatus=Xe.prototype.Z,Xe.prototype.getResponseJson=Xe.prototype.Oa,Xe.prototype.getResponseText=Xe.prototype.oa,Xe.prototype.send=Xe.prototype.ea,Xe.prototype.setWithCredentials=Xe.prototype.Ha,YE=Xe}).apply(typeof Ha<"u"?Ha:typeof self<"u"?self:typeof window<"u"?window:{});const fg="@firebase/firestore",pg="4.7.17";/**
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
 */class Nt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Nt.UNAUTHENTICATED=new Nt(null),Nt.GOOGLE_CREDENTIALS=new Nt("google-credentials-uid"),Nt.FIRST_PARTY=new Nt("first-party-uid"),Nt.MOCK_USER=new Nt("mock-user");/**
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
 */let Oi="11.9.0";/**
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
 */const Ir=new oa("@firebase/firestore");function zr(){return Ir.logLevel}function te(t,...e){if(Ir.logLevel<=ve.DEBUG){const n=e.map(sf);Ir.debug(`Firestore (${Oi}): ${t}`,...n)}}function vs(t,...e){if(Ir.logLevel<=ve.ERROR){const n=e.map(sf);Ir.error(`Firestore (${Oi}): ${t}`,...n)}}function gi(t,...e){if(Ir.logLevel<=ve.WARN){const n=e.map(sf);Ir.warn(`Firestore (${Oi}): ${t}`,...n)}}function sf(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function ue(t,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,tT(t,s,n)}function tT(t,e,n){let s=`FIRESTORE (${Oi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw vs(s),new Error(s)}function Fe(t,e,n,s){let r="Unexpected state";typeof n=="string"?r=n:s=n,t||tT(e,r,s)}function me(t,e){return t}/**
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
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends Xn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class fs{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class nT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class g1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Nt.UNAUTHENTICATED))}shutdown(){}}class _1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class y1{constructor(e){this.t=e,this.currentUser=Nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Fe(this.o===void 0,42304);let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new fs;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new fs,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new fs)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Fe(typeof s.accessToken=="string",31837,{l:s}),new nT(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string",2055,{h:e}),new Nt(e)}}class v1{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=Nt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class E1{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new v1(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class mg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class T1{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Kt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Fe(this.o===void 0,3512);const s=i=>{i.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,te("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?r(i):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new mg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Fe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new mg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function w1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function sT(){return new TextEncoder}/**
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
 */class rT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=w1(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%62))}return s}}function ye(t,e){return t<e?-1:t>e?1:0}function xh(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=t.codePointAt(n),r=e.codePointAt(n);if(s!==r){if(s<128&&r<128)return ye(s,r);{const i=sT(),o=I1(i.encode(gg(t,n)),i.encode(gg(e,n)));return o!==0?o:ye(s,r)}}n+=s>65535?2:1}return ye(t.length,e.length)}function gg(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function I1(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return ye(t[n],e[n]);return ye(t.length,e.length)}function _i(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */const _g=-62135596800,yg=1e6;class rt{static now(){return rt.fromMillis(Date.now())}static fromDate(e){return rt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*yg);return new rt(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ie(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ie(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<_g)throw new ie(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/yg}_compareTo(e){return this.seconds===e.seconds?ye(this.nanoseconds,e.nanoseconds):ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-_g;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class fe{static fromTimestamp(e){return new fe(e)}static min(){return new fe(new rt(0,0))}static max(){return new fe(new rt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const vg="__name__";class Mn{constructor(e,n,s){n===void 0?n=0:n>e.length&&ue(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&ue(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Mn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Mn?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=Mn.compareSegments(e.get(r),n.get(r));if(i!==0)return i}return ye(e.length,n.length)}static compareSegments(e,n){const s=Mn.isNumericId(e),r=Mn.isNumericId(n);return s&&!r?-1:!s&&r?1:s&&r?Mn.extractNumericId(e).compare(Mn.extractNumericId(n)):xh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return $s.fromString(e.substring(4,e.length-2))}}class Ke extends Mn{construct(e,n,s){return new Ke(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new ie(H.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Ke(n)}static emptyPath(){return new Ke([])}}const A1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class wt extends Mn{construct(e,n,s){return new wt(e,n,s)}static isValidIdentifier(e){return A1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),wt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===vg}static keyField(){return new wt([vg])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new ie(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new ie(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ie(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new ie(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new wt(n)}static emptyPath(){return new wt([])}}/**
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
 */class ae{constructor(e){this.path=e}static fromPath(e){return new ae(Ke.fromString(e))}static fromName(e){return new ae(Ke.fromString(e).popFirst(5))}static empty(){return new ae(Ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ke.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ae(new Ke(e.slice()))}}/**
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
 */const zo=-1;function R1(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=fe.fromTimestamp(s===1e9?new rt(n+1,0):new rt(n,s));return new Ks(r,ae.empty(),e)}function b1(t){return new Ks(t.readTime,t.key,zo)}class Ks{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Ks(fe.min(),ae.empty(),zo)}static max(){return new Ks(fe.max(),ae.empty(),zo)}}function C1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ae.comparator(t.documentKey,e.documentKey),n!==0?n:ye(t.largestBatchId,e.largestBatchId))}/**
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
 */const S1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class P1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Di(t){if(t.code!==H.FAILED_PRECONDITION||t.message!==S1)throw t;te("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ue(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,s)=>{n(e)})}static reject(e){return new $((n,s)=>{s(e)})}static waitFor(e){return new $((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=$.resolve(!1);for(const s of e)n=n.next(r=>r?$.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new $((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(h=>{o[u]=h,++a,a===i&&s(o)},h=>r(h))}})}static doWhile(e,n){return new $((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function k1(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function xi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class kc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ue(s),this.ce=s=>n.writeSequenceNumber(s))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}kc.le=-1;/**
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
 */const rf=-1;function Nc(t){return t==null}function Ul(t){return t===0&&1/t==-1/0}function N1(t){return typeof t=="number"&&Number.isInteger(t)&&!Ul(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const iT="";function O1(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Eg(e)),e=D1(t.get(n),e);return Eg(e)}function D1(t,e){let n=e;const s=t.length;for(let r=0;r<s;r++){const i=t.charAt(r);switch(i){case"\0":n+="";break;case iT:n+="";break;default:n+=i}}return n}function Eg(t){return t+iT+""}/**
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
 */function Tg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function rr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function oT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */let ot=class Mh{constructor(e,n){this.comparator=e,this.root=n||js.EMPTY}insert(e,n){return new Mh(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,js.BLACK,null,null))}remove(e){return new Mh(this.comparator,this.root.remove(e,this.comparator).copy(null,null,js.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new qa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new qa(this.root,e,this.comparator,!1)}getReverseIterator(){return new qa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new qa(this.root,e,this.comparator,!0)}},qa=class{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},js=class ss{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??ss.RED,this.left=r??ss.EMPTY,this.right=i??ss.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new ss(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ss.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return ss.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ss.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ss.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ue(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ue(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ue(27949);return e+(this.isRed()?0:1)}};js.EMPTY=null,js.RED=!0,js.BLACK=!1;js.EMPTY=new class{constructor(){this.size=0}get key(){throw ue(57766)}get value(){throw ue(16141)}get color(){throw ue(16727)}get left(){throw ue(29726)}get right(){throw ue(36894)}copy(e,n,s,r,i){return this}insert(e,n,s){return new js(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class lt{constructor(e){this.comparator=e,this.data=new ot(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new wg(this.data.getIterator())}getIteratorFrom(e){return new wg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof lt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new lt(this.comparator);return n.data=e,n}}class wg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class rn{constructor(e){this.fields=e,e.sort(wt.comparator)}static empty(){return new rn([])}unionWith(e){let n=new lt(wt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new rn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return _i(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class aT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new aT("Invalid base64 string: "+i):i}}(e);return new Rt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i}(e);return new Rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Rt.EMPTY_BYTE_STRING=new Rt("");const x1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gs(t){if(Fe(!!t,39018),typeof t=="string"){let e=0;const n=x1.exec(t);if(Fe(!!n,46558,{timestamp:t}),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ze(t.seconds),nanos:Ze(t.nanos)}}function Ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Qs(t){return typeof t=="string"?Rt.fromBase64String(t):Rt.fromUint8Array(t)}/**
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
 */const lT="server_timestamp",cT="__type__",uT="__previous_value__",hT="__local_write_time__";function of(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[cT])===null||n===void 0?void 0:n.stringValue)===lT}function Oc(t){const e=t.mapValue.fields[uT];return of(e)?Oc(e):e}function Ko(t){const e=Gs(t.mapValue.fields[hT].timestampValue);return new rt(e.seconds,e.nanos)}/**
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
 */class M1{constructor(e,n,s,r,i,o,a,c,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=h}}const Bl="(default)";class Go{constructor(e,n){this.projectId=e,this.database=n||Bl}static empty(){return new Go("","")}get isDefaultDatabase(){return this.database===Bl}isEqual(e){return e instanceof Go&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const dT="__type__",L1="__max__",Wa={mapValue:{}},fT="__vector__",$l="value";function Ys(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?of(t)?4:F1(t)?9007199254740991:V1(t)?10:11:ue(28295,{value:t})}function Gn(t,e){if(t===e)return!0;const n=Ys(t);if(n!==Ys(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ko(t).isEqual(Ko(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=Gs(r.timestampValue),a=Gs(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Qs(r.bytesValue).isEqual(Qs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Ze(r.geoPointValue.latitude)===Ze(i.geoPointValue.latitude)&&Ze(r.geoPointValue.longitude)===Ze(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Ze(r.integerValue)===Ze(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=Ze(r.doubleValue),a=Ze(i.doubleValue);return o===a?Ul(o)===Ul(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return _i(t.arrayValue.values||[],e.arrayValue.values||[],Gn);case 10:case 11:return function(r,i){const o=r.mapValue.fields||{},a=i.mapValue.fields||{};if(Tg(o)!==Tg(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Gn(o[c],a[c])))return!1;return!0}(t,e);default:return ue(52216,{left:t})}}function Qo(t,e){return(t.values||[]).find(n=>Gn(n,e))!==void 0}function yi(t,e){if(t===e)return 0;const n=Ys(t),s=Ys(e);if(n!==s)return ye(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ye(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Ze(i.integerValue||i.doubleValue),c=Ze(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return Ig(t.timestampValue,e.timestampValue);case 4:return Ig(Ko(t),Ko(e));case 5:return xh(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Qs(i),c=Qs(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const h=ye(a[u],c[u]);if(h!==0)return h}return ye(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ye(Ze(i.latitude),Ze(o.latitude));return a!==0?a:ye(Ze(i.longitude),Ze(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Ag(t.arrayValue,e.arrayValue);case 10:return function(i,o){var a,c,u,h;const d=i.fields||{},p=o.fields||{},g=(a=d[$l])===null||a===void 0?void 0:a.arrayValue,y=(c=p[$l])===null||c===void 0?void 0:c.arrayValue,T=ye(((u=g==null?void 0:g.values)===null||u===void 0?void 0:u.length)||0,((h=y==null?void 0:y.values)===null||h===void 0?void 0:h.length)||0);return T!==0?T:Ag(g,y)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Wa.mapValue&&o===Wa.mapValue)return 0;if(i===Wa.mapValue)return 1;if(o===Wa.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),u=o.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let d=0;d<c.length&&d<h.length;++d){const p=xh(c[d],h[d]);if(p!==0)return p;const g=yi(a[c[d]],u[h[d]]);if(g!==0)return g}return ye(c.length,h.length)}(t.mapValue,e.mapValue);default:throw ue(23264,{Pe:n})}}function Ig(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ye(t,e);const n=Gs(t),s=Gs(e),r=ye(n.seconds,s.seconds);return r!==0?r:ye(n.nanos,s.nanos)}function Ag(t,e){const n=t.values||[],s=e.values||[];for(let r=0;r<n.length&&r<s.length;++r){const i=yi(n[r],s[r]);if(i)return i}return ye(n.length,s.length)}function vi(t){return Lh(t)}function Lh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const s=Gs(n);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Qs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ae.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let s="[",r=!0;for(const i of n.values||[])r?r=!1:s+=",",s+=Lh(i);return s+"]"}(t.arrayValue):"mapValue"in t?function(n){const s=Object.keys(n.fields||{}).sort();let r="{",i=!0;for(const o of s)i?i=!1:r+=",",r+=`${o}:${Lh(n.fields[o])}`;return r+"}"}(t.mapValue):ue(61005,{value:t})}function dl(t){switch(Ys(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Oc(t);return e?16+dl(e):16;case 5:return 2*t.stringValue.length;case 6:return Qs(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((r,i)=>r+dl(i),0)}(t.arrayValue);case 10:case 11:return function(s){let r=0;return rr(s.fields,(i,o)=>{r+=i.length+dl(o)}),r}(t.mapValue);default:throw ue(13486,{value:t})}}function Vh(t){return!!t&&"integerValue"in t}function af(t){return!!t&&"arrayValue"in t}function Rg(t){return!!t&&"nullValue"in t}function bg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function fl(t){return!!t&&"mapValue"in t}function V1(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[dT])===null||n===void 0?void 0:n.stringValue)===fT}function bo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return rr(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=bo(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=bo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function F1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===L1}/**
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
 */class Gt{constructor(e){this.value=e}static empty(){return new Gt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!fl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=bo(n)}setAll(e){let n=wt.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=bo(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());fl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Gn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];fl(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){rr(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Gt(bo(this.value))}}function pT(t){const e=[];return rr(t.fields,(n,s)=>{const r=new wt([n]);if(fl(s)){const i=pT(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new rn(e)}/**
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
 */class Dt{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Dt(e,0,fe.min(),fe.min(),fe.min(),Gt.empty(),0)}static newFoundDocument(e,n,s,r){return new Dt(e,1,n,fe.min(),s,r,0)}static newNoDocument(e,n){return new Dt(e,2,n,fe.min(),fe.min(),Gt.empty(),0)}static newUnknownDocument(e,n){return new Dt(e,3,n,fe.min(),fe.min(),Gt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(fe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Gt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=fe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class jl{constructor(e,n){this.position=e,this.inclusive=n}}function Cg(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=ae.comparator(ae.fromName(o.referenceValue),n.key):s=yi(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Sg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Gn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Hl{constructor(e,n="asc"){this.field=e,this.dir=n}}function U1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class mT{}class at extends mT{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new $1(e,n,s):n==="array-contains"?new q1(e,s):n==="in"?new W1(e,s):n==="not-in"?new z1(e,s):n==="array-contains-any"?new K1(e,s):new at(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new j1(e,s):new H1(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(yi(n,this.value)):n!==null&&Ys(this.value)===Ys(n)&&this.matchesComparison(yi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ue(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Qn extends mT{constructor(e,n){super(),this.filters=e,this.op=n,this.Te=null}static create(e,n){return new Qn(e,n)}matches(e){return gT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function gT(t){return t.op==="and"}function _T(t){return B1(t)&&gT(t)}function B1(t){for(const e of t.filters)if(e instanceof Qn)return!1;return!0}function Fh(t){if(t instanceof at)return t.field.canonicalString()+t.op.toString()+vi(t.value);if(_T(t))return t.filters.map(e=>Fh(e)).join(",");{const e=t.filters.map(n=>Fh(n)).join(",");return`${t.op}(${e})`}}function yT(t,e){return t instanceof at?function(s,r){return r instanceof at&&s.op===r.op&&s.field.isEqual(r.field)&&Gn(s.value,r.value)}(t,e):t instanceof Qn?function(s,r){return r instanceof Qn&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((i,o,a)=>i&&yT(o,r.filters[a]),!0):!1}(t,e):void ue(19439)}function vT(t){return t instanceof at?function(n){return`${n.field.canonicalString()} ${n.op} ${vi(n.value)}`}(t):t instanceof Qn?function(n){return n.op.toString()+" {"+n.getFilters().map(vT).join(" ,")+"}"}(t):"Filter"}class $1 extends at{constructor(e,n,s){super(e,n,s),this.key=ae.fromName(s.referenceValue)}matches(e){const n=ae.comparator(e.key,this.key);return this.matchesComparison(n)}}class j1 extends at{constructor(e,n){super(e,"in",n),this.keys=ET("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class H1 extends at{constructor(e,n){super(e,"not-in",n),this.keys=ET("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function ET(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>ae.fromName(s.referenceValue))}class q1 extends at{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return af(n)&&Qo(n.arrayValue,this.value)}}class W1 extends at{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Qo(this.value.arrayValue,n)}}class z1 extends at{constructor(e,n){super(e,"not-in",n)}matches(e){if(Qo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Qo(this.value.arrayValue,n)}}class K1 extends at{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!af(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Qo(this.value.arrayValue,s))}}/**
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
 */class G1{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.Ie=null}}function Pg(t,e=null,n=[],s=[],r=null,i=null,o=null){return new G1(t,e,n,s,r,i,o)}function lf(t){const e=me(t);if(e.Ie===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Fh(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Nc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>vi(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>vi(s)).join(",")),e.Ie=n}return e.Ie}function cf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!U1(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!yT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Sg(t.startAt,e.startAt)&&Sg(t.endAt,e.endAt)}function Uh(t){return ae.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Dc{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function Q1(t,e,n,s,r,i,o,a){return new Dc(t,e,n,s,r,i,o,a)}function xc(t){return new Dc(t)}function kg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Y1(t){return t.collectionGroup!==null}function Co(t){const e=me(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),n.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new lt(wt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new Hl(i,s))}),n.has(wt.keyField().canonicalString())||e.Ee.push(new Hl(wt.keyField(),s))}return e.Ee}function Hn(t){const e=me(t);return e.de||(e.de=X1(e,Co(t))),e.de}function X1(t,e){if(t.limitType==="F")return Pg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(r=>{const i=r.dir==="desc"?"asc":"desc";return new Hl(r.field,i)});const n=t.endAt?new jl(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new jl(t.startAt.position,t.startAt.inclusive):null;return Pg(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function Bh(t,e,n){return new Dc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Mc(t,e){return cf(Hn(t),Hn(e))&&t.limitType===e.limitType}function TT(t){return`${lf(Hn(t))}|lt:${t.limitType}`}function Kr(t){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(r=>vT(r)).join(", ")}]`),Nc(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(r=>vi(r)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(r=>vi(r)).join(",")),`Target(${s})`}(Hn(t))}; limitType=${t.limitType})`}function Lc(t,e){return e.isFoundDocument()&&function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):ae.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)}(t,e)&&function(s,r){for(const i of Co(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(s,r){return!(s.startAt&&!function(o,a,c){const u=Cg(o,a,c);return o.inclusive?u<=0:u<0}(s.startAt,Co(s),r)||s.endAt&&!function(o,a,c){const u=Cg(o,a,c);return o.inclusive?u>=0:u>0}(s.endAt,Co(s),r))}(t,e)}function J1(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function wT(t){return(e,n)=>{let s=!1;for(const r of Co(t)){const i=Z1(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function Z1(t,e,n){const s=t.field.isKeyField()?ae.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),u=a.data.field(i);return c!==null&&u!==null?yi(c,u):ue(42886)}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return ue(19790,{direction:t.dir})}}/**
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
 */class Dr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){rr(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return oT(this.inner)}size(){return this.innerSize}}/**
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
 */const ek=new ot(ae.comparator);function Es(){return ek}const IT=new ot(ae.comparator);function fo(...t){let e=IT;for(const n of t)e=e.insert(n.key,n);return e}function AT(t){let e=IT;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function mr(){return So()}function RT(){return So()}function So(){return new Dr(t=>t.toString(),(t,e)=>t.isEqual(e))}const tk=new ot(ae.comparator),nk=new lt(ae.comparator);function we(...t){let e=nk;for(const n of t)e=e.add(n);return e}const sk=new lt(ye);function rk(){return sk}/**
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
 */function uf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ul(e)?"-0":e}}function bT(t){return{integerValue:""+t}}function ik(t,e){return N1(e)?bT(e):uf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Vc{constructor(){this._=void 0}}function ok(t,e,n){return t instanceof Yo?function(r,i){const o={fields:{[cT]:{stringValue:lT},[hT]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&of(i)&&(i=Oc(i)),i&&(o.fields[uT]=i),{mapValue:o}}(n,e):t instanceof Xo?ST(t,e):t instanceof Jo?PT(t,e):function(r,i){const o=CT(r,i),a=Ng(o)+Ng(r.Re);return Vh(o)&&Vh(r.Re)?bT(a):uf(r.serializer,a)}(t,e)}function ak(t,e,n){return t instanceof Xo?ST(t,e):t instanceof Jo?PT(t,e):n}function CT(t,e){return t instanceof ql?function(s){return Vh(s)||function(i){return!!i&&"doubleValue"in i}(s)}(e)?e:{integerValue:0}:null}class Yo extends Vc{}class Xo extends Vc{constructor(e){super(),this.elements=e}}function ST(t,e){const n=kT(e);for(const s of t.elements)n.some(r=>Gn(r,s))||n.push(s);return{arrayValue:{values:n}}}class Jo extends Vc{constructor(e){super(),this.elements=e}}function PT(t,e){let n=kT(e);for(const s of t.elements)n=n.filter(r=>!Gn(r,s));return{arrayValue:{values:n}}}class ql extends Vc{constructor(e,n){super(),this.serializer=e,this.Re=n}}function Ng(t){return Ze(t.integerValue||t.doubleValue)}function kT(t){return af(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class lk{constructor(e,n){this.field=e,this.transform=n}}function ck(t,e){return t.field.isEqual(e.field)&&function(s,r){return s instanceof Xo&&r instanceof Xo||s instanceof Jo&&r instanceof Jo?_i(s.elements,r.elements,Gn):s instanceof ql&&r instanceof ql?Gn(s.Re,r.Re):s instanceof Yo&&r instanceof Yo}(t.transform,e.transform)}class uk{constructor(e,n){this.version=e,this.transformResults=n}}class qn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new qn}static exists(e){return new qn(void 0,e)}static updateTime(e){return new qn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function pl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Fc{}function NT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new DT(t.key,qn.none()):new ha(t.key,t.data,qn.none());{const n=t.data,s=Gt.empty();let r=new lt(wt.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new ir(t.key,s,new rn(r.toArray()),qn.none())}}function hk(t,e,n){t instanceof ha?function(r,i,o){const a=r.value.clone(),c=Dg(r.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ir?function(r,i,o){if(!pl(r.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Dg(r.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(OT(r)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Po(t,e,n,s){return t instanceof ha?function(i,o,a,c){if(!pl(i.precondition,o))return a;const u=i.value.clone(),h=xg(i.fieldTransforms,c,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,s):t instanceof ir?function(i,o,a,c){if(!pl(i.precondition,o))return a;const u=xg(i.fieldTransforms,c,o),h=o.data;return h.setAll(OT(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(t,e,n,s):function(i,o,a){return pl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function dk(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=CT(s.transform,r||null);i!=null&&(n===null&&(n=Gt.empty()),n.set(s.field,i))}return n||null}function Og(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&_i(s,r,(i,o)=>ck(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ha extends Fc{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ir extends Fc{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function OT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Dg(t,e,n){const s=new Map;Fe(t.length===n.length,32656,{Ve:n.length,me:t.length});for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,ak(o,a,n[r]))}return s}function xg(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,ok(i,o,e))}return s}class DT extends Fc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fk extends Fc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class pk{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&hk(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Po(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Po(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=RT();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=NT(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(fe.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),we())}isEqual(e){return this.batchId===e.batchId&&_i(this.mutations,e.mutations,(n,s)=>Og(n,s))&&_i(this.baseMutations,e.baseMutations,(n,s)=>Og(n,s))}}class hf{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){Fe(e.mutations.length===s.length,58842,{fe:e.mutations.length,ge:s.length});let r=function(){return tk}();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new hf(e,n,s,r)}}/**
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
 */class mk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class gk{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var st,Ce;function _k(t){switch(t){case H.OK:return ue(64938);case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0;default:return ue(15467,{code:t})}}function xT(t){if(t===void 0)return vs("GRPC error has no .code"),H.UNKNOWN;switch(t){case st.OK:return H.OK;case st.CANCELLED:return H.CANCELLED;case st.UNKNOWN:return H.UNKNOWN;case st.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case st.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case st.INTERNAL:return H.INTERNAL;case st.UNAVAILABLE:return H.UNAVAILABLE;case st.UNAUTHENTICATED:return H.UNAUTHENTICATED;case st.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case st.NOT_FOUND:return H.NOT_FOUND;case st.ALREADY_EXISTS:return H.ALREADY_EXISTS;case st.PERMISSION_DENIED:return H.PERMISSION_DENIED;case st.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case st.ABORTED:return H.ABORTED;case st.OUT_OF_RANGE:return H.OUT_OF_RANGE;case st.UNIMPLEMENTED:return H.UNIMPLEMENTED;case st.DATA_LOSS:return H.DATA_LOSS;default:return ue(39323,{code:t})}}(Ce=st||(st={}))[Ce.OK=0]="OK",Ce[Ce.CANCELLED=1]="CANCELLED",Ce[Ce.UNKNOWN=2]="UNKNOWN",Ce[Ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ce[Ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ce[Ce.NOT_FOUND=5]="NOT_FOUND",Ce[Ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ce[Ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ce[Ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ce[Ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ce[Ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ce[Ce.ABORTED=10]="ABORTED",Ce[Ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ce[Ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ce[Ce.INTERNAL=13]="INTERNAL",Ce[Ce.UNAVAILABLE=14]="UNAVAILABLE",Ce[Ce.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const yk=new $s([4294967295,4294967295],0);function Mg(t){const e=sT().encode(t),n=new QE;return n.update(e),new Uint8Array(n.digest())}function Lg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new $s([n,s],0),new $s([r,i],0)]}class df{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new po(`Invalid padding: ${n}`);if(s<0)throw new po(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new po(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new po(`Invalid padding when bitmap length is 0: ${n}`);this.pe=8*e.length-n,this.ye=$s.fromNumber(this.pe)}we(e,n,s){let r=e.add(n.multiply($s.fromNumber(s)));return r.compare(yk)===1&&(r=new $s([r.getBits(0),r.getBits(1)],0)),r.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const n=Mg(e),[s,r]=Lg(n);for(let i=0;i<this.hashCount;i++){const o=this.we(s,r,i);if(!this.be(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new df(i,r,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.pe===0)return;const n=Mg(e),[s,r]=Lg(n);for(let i=0;i<this.hashCount;i++){const o=this.we(s,r,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class po extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Uc{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,da.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Uc(fe.min(),r,new ot(ye),Es(),we())}}class da{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new da(s,n,we(),we(),we())}}/**
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
 */class ml{constructor(e,n,s,r){this.De=e,this.removedTargetIds=n,this.key=s,this.ve=r}}class MT{constructor(e,n){this.targetId=e,this.Ce=n}}class LT{constructor(e,n,s=Rt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Vg{constructor(){this.Fe=0,this.Me=Fg(),this.xe=Rt.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=we(),n=we(),s=we();return this.Me.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:ue(38017,{changeType:i})}}),new da(this.xe,this.Oe,e,n,s)}Qe(){this.Ne=!1,this.Me=Fg()}$e(e,n){this.Ne=!0,this.Me=this.Me.insert(e,n)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,Fe(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class vk{constructor(e){this.ze=e,this.je=new Map,this.He=Es(),this.Je=za(),this.Ye=za(),this.Ze=new ot(ye)}Xe(e){for(const n of e.De)e.ve&&e.ve.isFoundDocument()?this.et(n,e.ve):this.tt(n,e.key,e.ve);for(const n of e.removedTargetIds)this.tt(n,e.key,e.ve)}nt(e){this.forEachTarget(e,n=>{const s=this.rt(n);switch(e.state){case 0:this.it(n)&&s.ke(e.resumeToken);break;case 1:s.We(),s.Be||s.Qe(),s.ke(e.resumeToken);break;case 2:s.We(),s.Be||this.removeTarget(n);break;case 3:this.it(n)&&(s.Ge(),s.ke(e.resumeToken));break;case 4:this.it(n)&&(this.st(n),s.ke(e.resumeToken));break;default:ue(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.je.forEach((s,r)=>{this.it(r)&&n(r)})}ot(e){const n=e.targetId,s=e.Ce.count,r=this._t(n);if(r){const i=r.target;if(Uh(i))if(s===0){const o=new ae(i.path);this.tt(n,o,Dt.newNoDocument(o,fe.min()))}else Fe(s===1,20013,{expectedCount:s});else{const o=this.ut(n);if(o!==s){const a=this.ct(e),c=a?this.lt(a,e,o):1;if(c!==0){this.st(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,u)}}}}}ct(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=n;let o,a;try{o=Qs(s).toUint8Array()}catch(c){if(c instanceof aT)return gi("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new df(o,r,i)}catch(c){return gi(c instanceof po?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.pe===0?null:a}lt(e,n,s){return n.Ce.count===s-this.Tt(e,n.targetId)?0:2}Tt(e,n){const s=this.ze.getRemoteKeysForTarget(n);let r=0;return s.forEach(i=>{const o=this.ze.Pt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.tt(n,i,null),r++)}),r}It(e){const n=new Map;this.je.forEach((i,o)=>{const a=this._t(o);if(a){if(i.current&&Uh(a.target)){const c=new ae(a.target.path);this.Et(c).has(o)||this.dt(o,c)||this.tt(o,c,Dt.newNoDocument(c,e))}i.Le&&(n.set(o,i.qe()),i.Qe())}});let s=we();this.Ye.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this._t(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.He.forEach((i,o)=>o.setReadTime(e));const r=new Uc(e,n,this.Ze,this.He,s);return this.He=Es(),this.Je=za(),this.Ye=za(),this.Ze=new ot(ye),r}et(e,n){if(!this.it(e))return;const s=this.dt(e,n.key)?2:0;this.rt(e).$e(n.key,s),this.He=this.He.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.Ye=this.Ye.insert(n.key,this.At(n.key).add(e))}tt(e,n,s){if(!this.it(e))return;const r=this.rt(e);this.dt(e,n)?r.$e(n,1):r.Ue(n),this.Ye=this.Ye.insert(n,this.At(n).delete(e)),this.Ye=this.Ye.insert(n,this.At(n).add(e)),s&&(this.He=this.He.insert(n,s))}removeTarget(e){this.je.delete(e)}ut(e){const n=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let n=this.je.get(e);return n||(n=new Vg,this.je.set(e,n)),n}At(e){let n=this.Ye.get(e);return n||(n=new lt(ye),this.Ye=this.Ye.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new lt(ye),this.Je=this.Je.insert(e,n)),n}it(e){const n=this._t(e)!==null;return n||te("WatchChangeAggregator","Detected inactive target",e),n}_t(e){const n=this.je.get(e);return n&&n.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new Vg),this.ze.getRemoteKeysForTarget(e).forEach(n=>{this.tt(e,n,null)})}dt(e,n){return this.ze.getRemoteKeysForTarget(e).has(n)}}function za(){return new ot(ae.comparator)}function Fg(){return new ot(ae.comparator)}const Ek={asc:"ASCENDING",desc:"DESCENDING"},Tk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},wk={and:"AND",or:"OR"};class Ik{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function $h(t,e){return t.useProto3Json||Nc(e)?e:{value:e}}function Wl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function VT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Ak(t,e){return Wl(t,e.toTimestamp())}function Wn(t){return Fe(!!t,49232),fe.fromTimestamp(function(n){const s=Gs(n);return new rt(s.seconds,s.nanos)}(t))}function ff(t,e){return jh(t,e).canonicalString()}function jh(t,e){const n=function(r){return new Ke(["projects",r.projectId,"databases",r.database])}(t).child("documents");return e===void 0?n:n.child(e)}function FT(t){const e=Ke.fromString(t);return Fe(HT(e),10190,{key:e.toString()}),e}function Hh(t,e){return ff(t.databaseId,e.path)}function Wu(t,e){const n=FT(e);if(n.get(1)!==t.databaseId.projectId)throw new ie(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ie(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ae(BT(n))}function UT(t,e){return ff(t.databaseId,e)}function Rk(t){const e=FT(t);return e.length===4?Ke.emptyPath():BT(e)}function qh(t){return new Ke(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function BT(t){return Fe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Ug(t,e,n){return{name:Hh(t,e),fields:n.value.mapValue.fields}}function bk(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ue(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(Fe(h===void 0||typeof h=="string",58123),Rt.fromBase64String(h||"")):(Fe(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),Rt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?H.UNKNOWN:xT(u.code);return new ie(h,u.message||"")}(o);n=new LT(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Wu(t,s.document.name),i=Wn(s.document.updateTime),o=s.document.createTime?Wn(s.document.createTime):fe.min(),a=new Gt({mapValue:{fields:s.document.fields}}),c=Dt.newFoundDocument(r,i,o,a),u=s.targetIds||[],h=s.removedTargetIds||[];n=new ml(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Wu(t,s.document),i=s.readTime?Wn(s.readTime):fe.min(),o=Dt.newNoDocument(r,i),a=s.removedTargetIds||[];n=new ml([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Wu(t,s.document),i=s.removedTargetIds||[];n=new ml([],i,r,null)}else{if(!("filter"in e))return ue(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new gk(r,i),a=s.targetId;n=new MT(a,o)}}return n}function Ck(t,e){let n;if(e instanceof ha)n={update:Ug(t,e.key,e.value)};else if(e instanceof DT)n={delete:Hh(t,e.key)};else if(e instanceof ir)n={update:Ug(t,e.key,e.data),updateMask:Lk(e.fieldMask)};else{if(!(e instanceof fk))return ue(16599,{ft:e.type});n={verify:Hh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,o){const a=o.transform;if(a instanceof Yo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Xo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Jo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ql)return{fieldPath:o.field.canonicalString(),increment:a.Re};throw ue(20930,{transform:o.transform})}(0,s))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:Ak(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ue(27497)}(t,e.precondition)),n}function Sk(t,e){return t&&t.length>0?(Fe(e!==void 0,14353),t.map(n=>function(r,i){let o=r.updateTime?Wn(r.updateTime):Wn(i);return o.isEqual(fe.min())&&(o=Wn(i)),new uk(o,r.transformResults||[])}(n,e))):[]}function Pk(t,e){return{documents:[UT(t,e.path)]}}function kk(t,e){const n={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=UT(t,r);const i=function(u){if(u.length!==0)return jT(Qn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(p){return{field:Gr(p.field),direction:Dk(p.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=$h(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{gt:n,parent:r}}function Nk(t){let e=Rk(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Fe(s===1,65062);const h=n.from[0];h.allDescendants?r=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(d){const p=$T(d);return p instanceof Qn&&_T(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(p=>function(y){return new Hl(Qr(y.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(d){let p;return p=typeof d=="object"?d.value:d,Nc(p)?null:p}(n.limit));let c=null;n.startAt&&(c=function(d){const p=!!d.before,g=d.values||[];return new jl(g,p)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const p=!d.before,g=d.values||[];return new jl(g,p)}(n.endAt)),Q1(e,r,o,i,a,"F",c,u)}function Ok(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ue(28987,{purpose:r})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function $T(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Qr(n.unaryFilter.field);return at.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=Qr(n.unaryFilter.field);return at.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Qr(n.unaryFilter.field);return at.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Qr(n.unaryFilter.field);return at.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ue(61313);default:return ue(60726)}}(t):t.fieldFilter!==void 0?function(n){return at.create(Qr(n.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ue(58110);default:return ue(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Qn.create(n.compositeFilter.filters.map(s=>$T(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return ue(1026)}}(n.compositeFilter.op))}(t):ue(30097,{filter:t})}function Dk(t){return Ek[t]}function xk(t){return Tk[t]}function Mk(t){return wk[t]}function Gr(t){return{fieldPath:t.canonicalString()}}function Qr(t){return wt.fromServerFormat(t.fieldPath)}function jT(t){return t instanceof at?function(n){if(n.op==="=="){if(bg(n.value))return{unaryFilter:{field:Gr(n.field),op:"IS_NAN"}};if(Rg(n.value))return{unaryFilter:{field:Gr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(bg(n.value))return{unaryFilter:{field:Gr(n.field),op:"IS_NOT_NAN"}};if(Rg(n.value))return{unaryFilter:{field:Gr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Gr(n.field),op:xk(n.op),value:n.value}}}(t):t instanceof Qn?function(n){const s=n.getFilters().map(r=>jT(r));return s.length===1?s[0]:{compositeFilter:{op:Mk(n.op),filters:s}}}(t):ue(54877,{filter:t})}function Lk(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function HT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Vs{constructor(e,n,s,r,i=fe.min(),o=fe.min(),a=Rt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Vs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Vs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Vs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Vs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Vk{constructor(e){this.wt=e}}function Fk(t){const e=Nk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Bh(e,e.limit,"L"):e}/**
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
 */class Uk{constructor(){this.Cn=new Bk}addToCollectionParentIndex(e,n){return this.Cn.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(Ks.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(Ks.min())}updateCollectionGroup(e,n,s){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class Bk{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new lt(Ke.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new lt(Ke.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const Bg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},qT=41943040;class zt{static withCacheSize(e){return new zt(e,zt.DEFAULT_COLLECTION_PERCENTILE,zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
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
 */zt.DEFAULT_COLLECTION_PERCENTILE=10,zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,zt.DEFAULT=new zt(qT,zt.DEFAULT_COLLECTION_PERCENTILE,zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),zt.DISABLED=new zt(-1,0,0);/**
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
 */class Ei{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new Ei(0)}static lr(){return new Ei(-1)}}/**
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
 */const $g="LruGarbageCollector",$k=1048576;function jg([t,e],[n,s]){const r=ye(t,n);return r===0?ye(e,s):r}class jk{constructor(e){this.Er=e,this.buffer=new lt(jg),this.dr=0}Ar(){return++this.dr}Rr(e){const n=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();jg(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Hk{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){te($g,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){xi(n)?te($g,"Ignoring IndexedDB error during garbage collection: ",n):await Di(n)}await this.mr(3e5)})}}class qk{constructor(e,n){this.gr=e,this.params=n}calculateTargetCount(e,n){return this.gr.pr(e).next(s=>Math.floor(n/100*s))}nthSequenceNumber(e,n){if(n===0)return $.resolve(kc.le);const s=new jk(n);return this.gr.forEachTarget(e,r=>s.Rr(r.sequenceNumber)).next(()=>this.gr.yr(e,r=>s.Rr(r))).next(()=>s.maxValue)}removeTargets(e,n,s){return this.gr.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.gr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(te("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(Bg)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(te("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Bg):this.wr(e,n))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,n){let s,r,i,o,a,c,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(te("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),r=this.params.maximumSequenceNumbersToCollect):r=d,o=Date.now(),this.nthSequenceNumber(e,r))).next(d=>(s=d,a=Date.now(),this.removeTargets(e,s,n))).next(d=>(i=d,c=Date.now(),this.removeOrphanedDocuments(e,s))).next(d=>(u=Date.now(),zr()<=ve.DEBUG&&te("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${r} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${d} documents in `+(u-c)+`ms
Total Duration: ${u-h}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:d})))}}function Wk(t,e){return new qk(t,e)}/**
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
 */class zk{constructor(){this.changes=new Dr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Dt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?$.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class Kk{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Gk{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&Po(s.mutation,r,rn.empty(),rt.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,we()).next(()=>s))}getLocalViewOfDocuments(e,n,s=we()){const r=mr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=fo();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=mr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,we()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=Es();const o=So(),a=function(){return So()}();return n.forEach((c,u)=>{const h=s.get(u.key);r.has(u.key)&&(h===void 0||h.mutation instanceof ir)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Po(h.mutation,u,h.mutation.getFieldMask(),rt.now())):o.set(u.key,rn.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var d;return a.set(u,new Kk(h,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const s=So();let r=new ot((o,a)=>o-a),i=we();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let h=s.get(c)||rn.empty();h=a.applyToLocalView(u,h),s.set(c,h);const d=(r.get(a.batchId)||we()).add(c);r=r.insert(a.batchId,d)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,h=c.value,d=RT();h.forEach(p=>{if(!i.has(p)){const g=NT(n.get(p),s.get(p));g!==null&&d.set(p,g),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return $.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,r){return function(o){return ae.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Y1(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,r):this.getDocumentsMatchingCollectionQuery(e,n,s,r)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):$.resolve(mr());let a=zo,c=i;return o.next(u=>$.forEach(u,(h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),i.get(h)?$.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{c=c.insert(h,p)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,we())).next(h=>({batchId:a,changes:AT(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ae(n)).next(s=>{let r=fo();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s,r){const i=n.collectionGroup;let o=fo();return this.indexManager.getCollectionParents(e,i).next(a=>$.forEach(a,c=>{const u=function(d,p){return new Dc(p,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,s,r).next(h=>{h.forEach((d,p)=>{o=o.insert(d,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i,r))).next(o=>{i.forEach((c,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,Dt.newInvalidDocument(h)))});let a=fo();return o.forEach((c,u)=>{const h=i.get(c);h!==void 0&&Po(h.mutation,u,rn.empty(),rt.now()),Lc(n,u)&&(a=a.insert(c,u))}),a})}}/**
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
 */class Qk{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,n){return $.resolve(this.kr.get(n))}saveBundleMetadata(e,n){return this.kr.set(n.id,function(r){return{id:r.id,version:r.version,createTime:Wn(r.createTime)}}(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.qr.get(n))}saveNamedQuery(e,n){return this.qr.set(n.name,function(r){return{name:r.name,query:Fk(r.bundledQuery),readTime:Wn(r.readTime)}}(n)),$.resolve()}}/**
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
 */class Yk{constructor(){this.overlays=new ot(ae.comparator),this.Qr=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const s=mr();return $.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.St(e,n,i)}),$.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.Qr.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Qr.delete(s)),$.resolve()}getOverlaysForCollection(e,n,s){const r=mr(),i=n.length+1,o=new ae(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return $.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new ot((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let h=i.get(u.largestBatchId);h===null&&(h=mr(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=mr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=r)););return $.resolve(a)}St(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.Qr.get(r.largestBatchId).delete(s.key);this.Qr.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new mk(n,s));let i=this.Qr.get(n);i===void 0&&(i=we(),this.Qr.set(n,i)),this.Qr.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Xk{constructor(){this.sessionToken=Rt.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,$.resolve()}}/**
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
 */class pf{constructor(){this.$r=new lt(ut.Ur),this.Kr=new lt(ut.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,n){const s=new ut(e,n);this.$r=this.$r.add(s),this.Kr=this.Kr.add(s)}Gr(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.zr(new ut(e,n))}jr(e,n){e.forEach(s=>this.removeReference(s,n))}Hr(e){const n=new ae(new Ke([])),s=new ut(n,e),r=new ut(n,e+1),i=[];return this.Kr.forEachInRange([s,r],o=>{this.zr(o),i.push(o.key)}),i}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const n=new ae(new Ke([])),s=new ut(n,e),r=new ut(n,e+1);let i=we();return this.Kr.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ut(e,0),s=this.$r.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class ut{constructor(e,n){this.key=e,this.Zr=n}static Ur(e,n){return ae.comparator(e.key,n.key)||ye(e.Zr,n.Zr)}static Wr(e,n){return ye(e.Zr,n.Zr)||ae.comparator(e.key,n.key)}}/**
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
 */class Jk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.nr=1,this.Xr=new lt(ut.Ur)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new pk(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.Xr=this.Xr.add(new ut(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return $.resolve(o)}lookupMutationBatch(e,n){return $.resolve(this.ei(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ti(s),i=r<0?0:r;return $.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?rf:this.nr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new ut(n,0),r=new ut(n,Number.POSITIVE_INFINITY),i=[];return this.Xr.forEachInRange([s,r],o=>{const a=this.ei(o.Zr);i.push(a)}),$.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new lt(ye);return n.forEach(r=>{const i=new ut(r,0),o=new ut(r,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([i,o],a=>{s=s.add(a.Zr)})}),$.resolve(this.ni(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;ae.isDocumentKey(i)||(i=i.child(""));const o=new ut(new ae(i),0);let a=new lt(ye);return this.Xr.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c.Zr)),!0)},o),$.resolve(this.ni(a))}ni(e){const n=[];return e.forEach(s=>{const r=this.ei(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Fe(this.ri(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Xr;return $.forEach(n.mutations,r=>{const i=new ut(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Xr=s})}sr(e){}containsKey(e,n){const s=new ut(n,0),r=this.Xr.firstAfterOrEqual(s);return $.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}ri(e,n){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const n=this.ti(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Zk{constructor(e){this.ii=e,this.docs=function(){return new ot(ae.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.ii(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return $.resolve(s?s.document.mutableCopy():Dt.newInvalidDocument(n))}getEntries(e,n){let s=Es();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Dt.newInvalidDocument(r))}),$.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=Es();const o=n.path,a=new ae(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||C1(b1(h),s)<=0||(r.has(h.key)||Lc(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return $.resolve(i)}getAllFromCollectionGroup(e,n,s,r){ue(9500)}si(e,n){return $.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new eN(this)}getSize(e){return $.resolve(this.size)}}class eN extends zk{constructor(e){super(),this.Br=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Br.addEntry(e,r)):this.Br.removeEntry(s)}),$.waitFor(n)}getFromCache(e,n){return this.Br.getEntry(e,n)}getAllFromCache(e,n){return this.Br.getEntries(e,n)}}/**
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
 */class tN{constructor(e){this.persistence=e,this.oi=new Dr(n=>lf(n),cf),this.lastRemoteSnapshotVersion=fe.min(),this.highestTargetId=0,this._i=0,this.ai=new pf,this.targetCount=0,this.ui=Ei.cr()}forEachTarget(e,n){return this.oi.forEach((s,r)=>n(r)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this._i&&(this._i=n),$.resolve()}Tr(e){this.oi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ui=new Ei(n),this.highestTargetId=n),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,n){return this.Tr(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.Tr(n),$.resolve()}removeTargetData(e,n){return this.oi.delete(n.target),this.ai.Hr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.oi.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.oi.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),$.waitFor(i).next(()=>r)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const s=this.oi.get(n)||null;return $.resolve(s)}addMatchingKeys(e,n,s){return this.ai.Gr(n,s),$.resolve()}removeMatchingKeys(e,n,s){this.ai.jr(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),$.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ai.Hr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const s=this.ai.Yr(n);return $.resolve(s)}containsKey(e,n){return $.resolve(this.ai.containsKey(n))}}/**
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
 */class WT{constructor(e,n){this.ci={},this.overlays={},this.li=new kc(0),this.hi=!1,this.hi=!0,this.Pi=new Xk,this.referenceDelegate=e(this),this.Ti=new tN(this),this.indexManager=new Uk,this.remoteDocumentCache=function(r){return new Zk(r)}(s=>this.referenceDelegate.Ii(s)),this.serializer=new Vk(n),this.Ei=new Qk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Yk,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.ci[e.toKey()];return s||(s=new Jk(n,this.referenceDelegate),this.ci[e.toKey()]=s),s}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,n,s){te("MemoryPersistence","Starting transaction:",e);const r=new nN(this.li.next());return this.referenceDelegate.di(),s(r).next(i=>this.referenceDelegate.Ai(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ri(e,n){return $.or(Object.values(this.ci).map(s=>()=>s.containsKey(e,n)))}}class nN extends P1{constructor(e){super(),this.currentSequenceNumber=e}}class mf{constructor(e){this.persistence=e,this.Vi=new pf,this.mi=null}static fi(e){return new mf(e)}get gi(){if(this.mi)return this.mi;throw ue(60996)}addReference(e,n,s){return this.Vi.addReference(s,n),this.gi.delete(s.toString()),$.resolve()}removeReference(e,n,s){return this.Vi.removeReference(s,n),this.gi.add(s.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.gi.add(n.toString()),$.resolve()}removeTarget(e,n){this.Vi.Hr(n.targetId).forEach(r=>this.gi.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.gi.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}di(){this.mi=new Set}Ai(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.gi,s=>{const r=ae.fromPath(s);return this.pi(e,r).next(i=>{i||n.removeEntry(r,fe.min())})}).next(()=>(this.mi=null,n.apply(e)))}updateLimboDocument(e,n){return this.pi(e,n).next(s=>{s?this.gi.delete(n.toString()):this.gi.add(n.toString())})}Ii(e){return 0}pi(e,n){return $.or([()=>$.resolve(this.Vi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ri(e,n)])}}class zl{constructor(e,n){this.persistence=e,this.yi=new Dr(s=>O1(s.path),(s,r)=>s.isEqual(r)),this.garbageCollector=Wk(this,n)}static fi(e,n){return new zl(e,n)}di(){}Ai(e){return $.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}pr(e){const n=this.br(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>n.next(r=>s+r))}br(e){let n=0;return this.yr(e,s=>{n++}).next(()=>n)}yr(e,n){return $.forEach(this.yi,(s,r)=>this.Dr(e,s,r).next(i=>i?$.resolve():n(r)))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.si(e,o=>this.Dr(e,o,n).next(a=>{a||(s++,i.removeEntry(o,fe.min()))})).next(()=>i.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,n){return this.yi.set(n,e.currentSequenceNumber),$.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.yi.set(s,e.currentSequenceNumber),$.resolve()}removeReference(e,n,s){return this.yi.set(s,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,n){return this.yi.set(n,e.currentSequenceNumber),$.resolve()}Ii(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=dl(e.data.value)),n}Dr(e,n,s){return $.or([()=>this.persistence.Ri(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const r=this.yi.get(n);return $.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class gf{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.ds=s,this.As=r}static Rs(e,n){let s=we(),r=we();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new gf(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class sN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class rN{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return Ub()?8:k1(Bt())>0?6:4}()}initialize(e,n){this.ys=e,this.indexManager=n,this.Vs=!0}getDocumentsMatchingQuery(e,n,s,r){const i={result:null};return this.ws(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.bs(e,n,r,s).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new sN;return this.Ss(e,n,o).next(a=>{if(i.result=a,this.fs)return this.Ds(e,n,o,a.size)})}).next(()=>i.result)}Ds(e,n,s,r){return s.documentReadCount<this.gs?(zr()<=ve.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",Kr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),$.resolve()):(zr()<=ve.DEBUG&&te("QueryEngine","Query:",Kr(n),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.ps*r?(zr()<=ve.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",Kr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Hn(n))):$.resolve())}ws(e,n){if(kg(n))return $.resolve(null);let s=Hn(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Bh(n,null,"F"),s=Hn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=we(...i);return this.ys.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.vs(n,a);return this.Cs(n,u,o,c.readTime)?this.ws(e,Bh(n,null,"F")):this.Fs(e,u,n,c)}))})))}bs(e,n,s,r){return kg(n)||r.isEqual(fe.min())?$.resolve(null):this.ys.getDocuments(e,s).next(i=>{const o=this.vs(n,i);return this.Cs(n,o,s,r)?$.resolve(null):(zr()<=ve.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Kr(n)),this.Fs(e,o,n,R1(r,zo)).next(a=>a))})}vs(e,n){let s=new lt(wT(e));return n.forEach((r,i)=>{Lc(e,i)&&(s=s.add(i))}),s}Cs(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ss(e,n,s){return zr()<=ve.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",Kr(n)),this.ys.getDocumentsMatchingQuery(e,n,Ks.min(),s)}Fs(e,n,s,r){return this.ys.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const _f="LocalStore",iN=3e8;class oN{constructor(e,n,s,r){this.persistence=e,this.Ms=n,this.serializer=r,this.xs=new ot(ye),this.Os=new Dr(i=>lf(i),cf),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(s)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Gk(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.xs))}}function aN(t,e,n,s){return new oN(t,e,n,s)}async function zT(t,e){const n=me(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Ls(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=we();for(const u of r){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return n.localDocuments.getDocuments(s,c).next(u=>({ks:u,removedBatchIds:o,addedBatchIds:a}))})})}function lN(t,e){const n=me(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Bs.newChangeBuffer({trackRemovals:!0});return function(a,c,u,h){const d=u.batch,p=d.keys();let g=$.resolve();return p.forEach(y=>{g=g.next(()=>h.getEntry(c,y)).next(T=>{const w=u.docVersions.get(y);Fe(w!==null,48541),T.version.compareTo(w)<0&&(d.applyToRemoteDocument(T,u),T.isValidDocument()&&(T.setReadTime(u.commitVersion),h.addEntry(T)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(c,d))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(a){let c=we();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function KT(t){const e=me(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ti.getLastRemoteSnapshotVersion(n))}function cN(t,e){const n=me(t),s=e.snapshotVersion;let r=n.xs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Bs.newChangeBuffer({trackRemovals:!0});r=n.xs;const a=[];e.targetChanges.forEach((h,d)=>{const p=r.get(d);if(!p)return;a.push(n.Ti.removeMatchingKeys(i,h.removedDocuments,d).next(()=>n.Ti.addMatchingKeys(i,h.addedDocuments,d)));let g=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?g=g.withResumeToken(Rt.EMPTY_BYTE_STRING,fe.min()).withLastLimboFreeSnapshotVersion(fe.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,s)),r=r.insert(d,g),function(T,w,O){return T.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-T.snapshotVersion.toMicroseconds()>=iN?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(p,g,h)&&a.push(n.Ti.updateTargetData(i,g))});let c=Es(),u=we();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(uN(i,o,e.documentUpdates).next(h=>{c=h.qs,u=h.Qs})),!s.isEqual(fe.min())){const h=n.Ti.getLastRemoteSnapshotVersion(i).next(d=>n.Ti.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(h)}return $.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.xs=r,i))}function uN(t,e,n){let s=we(),r=we();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Es();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(fe.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):te(_f,"Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{qs:o,Qs:r}})}function hN(t,e){const n=me(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=rf),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function dN(t,e){const n=me(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Ti.getTargetData(s,e).next(i=>i?(r=i,$.resolve(r)):n.Ti.allocateTargetId(s).next(o=>(r=new Vs(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Ti.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.xs.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.xs=n.xs.insert(s.targetId,s),n.Os.set(e,s.targetId)),s})}async function Wh(t,e,n){const s=me(t),r=s.xs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!xi(o))throw o;te(_f,`Failed to update sequence numbers for target ${e}: ${o}`)}s.xs=s.xs.remove(e),s.Os.delete(r.target)}function Hg(t,e,n){const s=me(t);let r=fe.min(),i=we();return s.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,h){const d=me(c),p=d.Os.get(h);return p!==void 0?$.resolve(d.xs.get(p)):d.Ti.getTargetData(u,h)}(s,o,Hn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Ti.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Ms.getDocumentsMatchingQuery(o,e,n?r:fe.min(),n?i:we())).next(a=>(fN(s,J1(e),a),{documents:a,$s:i})))}function fN(t,e,n){let s=t.Ns.get(e)||fe.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ns.set(e,s)}class qg{constructor(){this.activeTargetIds=rk()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class pN{constructor(){this.xo=new qg,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,n,s){this.Oo[e]=n}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new qg,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class mN{No(e){}shutdown(){}}/**
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
 */const Wg="ConnectivityMonitor";class zg{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){te(Wg,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){te(Wg,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let Ka=null;function zh(){return Ka===null?Ka=function(){return 268435456+Math.round(2147483648*Math.random())}():Ka++,"0x"+Ka.toString(16)}/**
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
 */const zu="RestConnection",gN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class _N{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Wo=`projects/${s}/databases/${r}`,this.Go=this.databaseId.database===Bl?`project_id=${s}`:`project_id=${s}&database_id=${r}`}zo(e,n,s,r,i){const o=zh(),a=this.jo(e,n.toUriEncodedString());te(zu,`Sending RPC '${e}' ${o}:`,a,s);const c={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(c,r,i);const{host:u}=new URL(a),h=Si(u);return this.Jo(e,a,c,s,h).then(d=>(te(zu,`Received RPC '${e}' ${o}: `,d),d),d=>{throw gi(zu,`RPC '${e}' ${o} failed with error: `,d,"url: ",a,"request:",s),d})}Yo(e,n,s,r,i,o){return this.zo(e,n,s,r,i)}Ho(e,n,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Oi}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}jo(e,n){const s=gN[e];return`${this.Ko}/v1/${n}:${s}`}terminate(){}}/**
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
 */class yN{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
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
 */const Pt="WebChannelConnection";class vN extends _N{constructor(e){super(e),this.l_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,s,r,i){const o=zh();return new Promise((a,c)=>{const u=new YE;u.setWithCredentials(!0),u.listenOnce(XE.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case hl.NO_ERROR:const d=u.getResponseJson();te(Pt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(d)),a(d);break;case hl.TIMEOUT:te(Pt,`RPC '${e}' ${o} timed out`),c(new ie(H.DEADLINE_EXCEEDED,"Request time out"));break;case hl.HTTP_ERROR:const p=u.getStatus();if(te(Pt,`RPC '${e}' ${o} failed with status:`,p,"response text:",u.getResponseText()),p>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const y=g==null?void 0:g.error;if(y&&y.status&&y.message){const T=function(O){const D=O.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(D)>=0?D:H.UNKNOWN}(y.status);c(new ie(T,y.message))}else c(new ie(H.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new ie(H.UNAVAILABLE,"Connection failed."));break;default:ue(9055,{h_:e,streamId:o,P_:u.getLastErrorCode(),T_:u.getLastError()})}}finally{te(Pt,`RPC '${e}' ${o} completed.`)}});const h=JSON.stringify(r);te(Pt,`RPC '${e}' ${o} sending request:`,r),u.send(n,"POST",h,s,15)})}I_(e,n,s){const r=zh(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=eT(),a=ZE(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Ho(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const h=i.join("");te(Pt,`Creating RPC '${e}' stream ${r}: ${h}`,c);const d=o.createWebChannel(h,c);this.E_(d);let p=!1,g=!1;const y=new yN({Zo:w=>{g?te(Pt,`Not sending because RPC '${e}' stream ${r} is closed:`,w):(p||(te(Pt,`Opening RPC '${e}' stream ${r} transport.`),d.open(),p=!0),te(Pt,`RPC '${e}' stream ${r} sending:`,w),d.send(w))},Xo:()=>d.close()}),T=(w,O,D)=>{w.listen(O,x=>{try{D(x)}catch(V){setTimeout(()=>{throw V},0)}})};return T(d,ho.EventType.OPEN,()=>{g||(te(Pt,`RPC '${e}' stream ${r} transport opened.`),y.__())}),T(d,ho.EventType.CLOSE,()=>{g||(g=!0,te(Pt,`RPC '${e}' stream ${r} transport closed`),y.u_(),this.d_(d))}),T(d,ho.EventType.ERROR,w=>{g||(g=!0,gi(Pt,`RPC '${e}' stream ${r} transport errored. Name:`,w.name,"Message:",w.message),y.u_(new ie(H.UNAVAILABLE,"The operation could not be completed")))}),T(d,ho.EventType.MESSAGE,w=>{var O;if(!g){const D=w.data[0];Fe(!!D,16349);const x=D,V=(x==null?void 0:x.error)||((O=x[0])===null||O===void 0?void 0:O.error);if(V){te(Pt,`RPC '${e}' stream ${r} received error:`,V);const Z=V.status;let se=function(A){const C=st[A];if(C!==void 0)return xT(C)}(Z),b=V.message;se===void 0&&(se=H.INTERNAL,b="Unknown error status: "+Z+" with message "+V.message),g=!0,y.u_(new ie(se,b)),d.close()}else te(Pt,`RPC '${e}' stream ${r} received:`,D),y.c_(D)}}),T(a,JE.STAT_EVENT,w=>{w.stat===Dh.PROXY?te(Pt,`RPC '${e}' stream ${r} detected buffering proxy`):w.stat===Dh.NOPROXY&&te(Pt,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{y.a_()},0),y}terminate(){this.l_.forEach(e=>e.close()),this.l_=[]}E_(e){this.l_.push(e)}d_(e){this.l_=this.l_.filter(n=>n===e)}}function Ku(){return typeof document<"u"?document:null}/**
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
 */function Bc(t){return new Ik(t,!0)}/**
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
 */class GT{constructor(e,n,s=1e3,r=1.5,i=6e4){this.xi=e,this.timerId=n,this.A_=s,this.R_=r,this.V_=i,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(e){this.cancel();const n=Math.floor(this.m_+this.w_()),s=Math.max(0,Date.now()-this.g_),r=Math.max(0,n-s);r>0&&te("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.m_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,r,()=>(this.g_=Date.now(),e())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
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
 */const Kg="PersistentStream";class QT{constructor(e,n,s,r,i,o,a,c){this.xi=e,this.S_=s,this.D_=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new GT(e,n)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(e){this.U_(),this.stream.send(e)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(e,n){this.U_(),this.K_(),this.x_.cancel(),this.v_++,e!==4?this.x_.reset():n&&n.code===H.RESOURCE_EXHAUSTED?(vs(n.toString()),vs("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):n&&n.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(n)}W_(){}auth(){this.state=1;const e=this.G_(this.v_),n=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.v_===n&&this.z_(s,r)},s=>{e(()=>{const r=new ie(H.UNKNOWN,"Fetching auth token failed: "+s.message);return this.j_(r)})})}z_(e,n){const s=this.G_(this.v_);this.stream=this.H_(e,n),this.stream.e_(()=>{s(()=>this.listener.e_())}),this.stream.n_(()=>{s(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(r=>{s(()=>this.j_(r))}),this.stream.onMessage(r=>{s(()=>++this.M_==1?this.J_(r):this.onNext(r))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(e){return te(Kg,`close with error: ${e}`),this.stream=null,this.close(4,e)}G_(e){return n=>{this.xi.enqueueAndForget(()=>this.v_===e?n():(te(Kg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class EN extends QT{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}H_(e,n){return this.connection.I_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.x_.reset();const n=bk(this.serializer,e),s=function(i){if(!("targetChange"in i))return fe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?fe.min():o.readTime?Wn(o.readTime):fe.min()}(e);return this.listener.Y_(n,s)}Z_(e){const n={};n.database=qh(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=Uh(c)?{documents:Pk(i,c)}:{query:kk(i,c).gt},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=VT(i,o.resumeToken);const u=$h(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(fe.min())>0){a.readTime=Wl(i,o.snapshotVersion.toTimestamp());const u=$h(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const s=Ok(this.serializer,e);s&&(n.labels=s),this.Q_(n)}X_(e){const n={};n.database=qh(this.serializer),n.removeTarget=e,this.Q_(n)}}class TN extends QT{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}get ea(){return this.M_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.ea&&this.ta([])}H_(e,n){return this.connection.I_("Write",e,n)}J_(e){return Fe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Fe(!e.writeResults||e.writeResults.length===0,55816),this.listener.na()}onNext(e){Fe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.x_.reset();const n=Sk(e.writeResults,e.commitTime),s=Wn(e.commitTime);return this.listener.ra(s,n)}ia(){const e={};e.database=qh(this.serializer),this.Q_(e)}ta(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Ck(this.serializer,s))};this.Q_(n)}}/**
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
 */class wN{}class IN extends wN{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.sa=!1}oa(){if(this.sa)throw new ie(H.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,n,s,r){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.zo(e,jh(n,s),r,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ie(H.UNKNOWN,i.toString())})}Yo(e,n,s,r,i){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Yo(e,jh(n,s),r,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ie(H.UNKNOWN,o.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class AN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(e){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.la("Offline")))}set(e){this.Ta(),this._a=0,e==="Online"&&(this.ua=!1),this.la(e)}la(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ha(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(vs(n),this.ua=!1):te("OnlineStateTracker",n)}Ta(){this.aa!==null&&(this.aa.cancel(),this.aa=null)}}/**
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
 */const Ar="RemoteStore";class RN{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=i,this.Ra.No(o=>{s.enqueueAndForget(async()=>{xr(this)&&(te(Ar,"Restarting streams for network reachability change."),await async function(c){const u=me(c);u.da.add(4),await fa(u),u.Va.set("Unknown"),u.da.delete(4),await $c(u)}(this))})}),this.Va=new AN(s,r)}}async function $c(t){if(xr(t))for(const e of t.Aa)await e(!0)}async function fa(t){for(const e of t.Aa)await e(!1)}function YT(t,e){const n=me(t);n.Ea.has(e.targetId)||(n.Ea.set(e.targetId,e),Tf(n)?Ef(n):Mi(n).N_()&&vf(n,e))}function yf(t,e){const n=me(t),s=Mi(n);n.Ea.delete(e),s.N_()&&XT(n,e),n.Ea.size===0&&(s.N_()?s.k_():xr(n)&&n.Va.set("Unknown"))}function vf(t,e){if(t.ma.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(fe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Mi(t).Z_(e)}function XT(t,e){t.ma.Ke(e),Mi(t).X_(e)}function Ef(t){t.ma=new vk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>t.Ea.get(e)||null,Pt:()=>t.datastore.serializer.databaseId}),Mi(t).start(),t.Va.ca()}function Tf(t){return xr(t)&&!Mi(t).O_()&&t.Ea.size>0}function xr(t){return me(t).da.size===0}function JT(t){t.ma=void 0}async function bN(t){t.Va.set("Online")}async function CN(t){t.Ea.forEach((e,n)=>{vf(t,e)})}async function SN(t,e){JT(t),Tf(t)?(t.Va.Pa(e),Ef(t)):t.Va.set("Unknown")}async function PN(t,e,n){if(t.Va.set("Online"),e instanceof LT&&e.state===2&&e.cause)try{await async function(r,i){const o=i.cause;for(const a of i.targetIds)r.Ea.has(a)&&(await r.remoteSyncer.rejectListen(a,o),r.Ea.delete(a),r.ma.removeTarget(a))}(t,e)}catch(s){te(Ar,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Kl(t,s)}else if(e instanceof ml?t.ma.Xe(e):e instanceof MT?t.ma.ot(e):t.ma.nt(e),!n.isEqual(fe.min()))try{const s=await KT(t.localStore);n.compareTo(s)>=0&&await function(i,o){const a=i.ma.It(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=i.Ea.get(u);h&&i.Ea.set(u,h.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const h=i.Ea.get(c);if(!h)return;i.Ea.set(c,h.withResumeToken(Rt.EMPTY_BYTE_STRING,h.snapshotVersion)),XT(i,c);const d=new Vs(h.target,c,u,h.sequenceNumber);vf(i,d)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(s){te(Ar,"Failed to raise snapshot:",s),await Kl(t,s)}}async function Kl(t,e,n){if(!xi(e))throw e;t.da.add(1),await fa(t),t.Va.set("Offline"),n||(n=()=>KT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{te(Ar,"Retrying IndexedDB access"),await n(),t.da.delete(1),await $c(t)})}function ZT(t,e){return e().catch(n=>Kl(t,n,e))}async function jc(t){const e=me(t),n=Xs(e);let s=e.Ia.length>0?e.Ia[e.Ia.length-1].batchId:rf;for(;kN(e);)try{const r=await hN(e.localStore,s);if(r===null){e.Ia.length===0&&n.k_();break}s=r.batchId,NN(e,r)}catch(r){await Kl(e,r)}ew(e)&&tw(e)}function kN(t){return xr(t)&&t.Ia.length<10}function NN(t,e){t.Ia.push(e);const n=Xs(t);n.N_()&&n.ea&&n.ta(e.mutations)}function ew(t){return xr(t)&&!Xs(t).O_()&&t.Ia.length>0}function tw(t){Xs(t).start()}async function ON(t){Xs(t).ia()}async function DN(t){const e=Xs(t);for(const n of t.Ia)e.ta(n.mutations)}async function xN(t,e,n){const s=t.Ia.shift(),r=hf.from(s,e,n);await ZT(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await jc(t)}async function MN(t,e){e&&Xs(t).ea&&await async function(s,r){if(function(o){return _k(o)&&o!==H.ABORTED}(r.code)){const i=s.Ia.shift();Xs(s).L_(),await ZT(s,()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r)),await jc(s)}}(t,e),ew(t)&&tw(t)}async function Gg(t,e){const n=me(t);n.asyncQueue.verifyOperationInProgress(),te(Ar,"RemoteStore received new credentials");const s=xr(n);n.da.add(3),await fa(n),s&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.da.delete(3),await $c(n)}async function LN(t,e){const n=me(t);e?(n.da.delete(2),await $c(n)):e||(n.da.add(2),await fa(n),n.Va.set("Unknown"))}function Mi(t){return t.fa||(t.fa=function(n,s,r){const i=me(n);return i.oa(),new EN(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{e_:bN.bind(null,t),n_:CN.bind(null,t),i_:SN.bind(null,t),Y_:PN.bind(null,t)}),t.Aa.push(async e=>{e?(t.fa.L_(),Tf(t)?Ef(t):t.Va.set("Unknown")):(await t.fa.stop(),JT(t))})),t.fa}function Xs(t){return t.ga||(t.ga=function(n,s,r){const i=me(n);return i.oa(),new TN(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{e_:()=>Promise.resolve(),n_:ON.bind(null,t),i_:MN.bind(null,t),na:DN.bind(null,t),ra:xN.bind(null,t)}),t.Aa.push(async e=>{e?(t.ga.L_(),await jc(t)):(await t.ga.stop(),t.Ia.length>0&&(te(Ar,`Stopping write stream with ${t.Ia.length} pending writes`),t.Ia=[]))})),t.ga}/**
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
 */class wf{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new fs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new wf(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function If(t,e){if(vs("AsyncQueue",`${e}: ${t}`),xi(t))return new ie(H.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ci{static emptySet(e){return new ci(e.comparator)}constructor(e){this.comparator=e?(n,s)=>e(n,s)||ae.comparator(n.key,s.key):(n,s)=>ae.comparator(n.key,s.key),this.keyedMap=fo(),this.sortedSet=new ot(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ci)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new ci;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class Qg{constructor(){this.pa=new ot(ae.comparator)}track(e){const n=e.doc.key,s=this.pa.get(n);s?e.type!==0&&s.type===3?this.pa=this.pa.insert(n,e):e.type===3&&s.type!==1?this.pa=this.pa.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.pa=this.pa.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.pa=this.pa.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.pa=this.pa.remove(n):e.type===1&&s.type===2?this.pa=this.pa.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.pa=this.pa.insert(n,{type:2,doc:e.doc}):ue(63341,{Vt:e,ya:s}):this.pa=this.pa.insert(n,e)}wa(){const e=[];return this.pa.inorderTraversal((n,s)=>{e.push(s)}),e}}class Ti{constructor(e,n,s,r,i,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ti(e,n,ci.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Mc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class VN{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(e=>e.va())}}class FN{constructor(){this.queries=Yg(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,s){const r=me(n),i=r.queries;r.queries=Yg(),i.forEach((o,a)=>{for(const c of a.Sa)c.onError(s)})})(this,new ie(H.ABORTED,"Firestore shutting down"))}}function Yg(){return new Dr(t=>TT(t),Mc)}async function Af(t,e){const n=me(t);let s=3;const r=e.query;let i=n.queries.get(r);i?!i.Da()&&e.va()&&(s=2):(i=new VN,s=e.va()?0:1);try{switch(s){case 0:i.ba=await n.onListen(r,!0);break;case 1:i.ba=await n.onListen(r,!1);break;case 2:await n.onFirstRemoteStoreListen(r)}}catch(o){const a=If(o,`Initialization of query '${Kr(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.Sa.push(e),e.Fa(n.onlineState),i.ba&&e.Ma(i.ba)&&bf(n)}async function Rf(t,e){const n=me(t),s=e.query;let r=3;const i=n.queries.get(s);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?r=e.va()?0:1:!i.Da()&&e.va()&&(r=2))}switch(r){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function UN(t,e){const n=me(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.Sa)a.Ma(r)&&(s=!0);o.ba=r}}s&&bf(n)}function BN(t,e,n){const s=me(t),r=s.queries.get(e);if(r)for(const i of r.Sa)i.onError(n);s.queries.delete(e)}function bf(t){t.Ca.forEach(e=>{e.next()})}var Kh,Xg;(Xg=Kh||(Kh={})).xa="default",Xg.Cache="cache";class Cf{constructor(e,n,s){this.query=e,this.Oa=n,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=s||{}}Ma(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Ti(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Na?this.La(e)&&(this.Oa.next(e),n=!0):this.ka(e,this.onlineState)&&(this.qa(e),n=!0),this.Ba=e,n}onError(e){this.Oa.error(e)}Fa(e){this.onlineState=e;let n=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,e)&&(this.qa(this.Ba),n=!0),n}ka(e,n){if(!e.fromCache||!this.va())return!0;const s=n!=="Offline";return(!this.options.Qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}La(e){if(e.docChanges.length>0)return!0;const n=this.Ba&&this.Ba.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qa(e){e=Ti.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Na=!0,this.Oa.next(e)}va(){return this.options.source!==Kh.Cache}}/**
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
 */class nw{constructor(e){this.key=e}}class sw{constructor(e){this.key=e}}class $N{constructor(e,n){this.query=e,this.Ha=n,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=we(),this.mutatedKeys=we(),this.Za=wT(e),this.Xa=new ci(this.Za)}get eu(){return this.Ha}tu(e,n){const s=n?n.nu:new Qg,r=n?n.Xa:this.Xa;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((h,d)=>{const p=r.get(h),g=Lc(this.query,d)?d:null,y=!!p&&this.mutatedKeys.has(p.key),T=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let w=!1;p&&g?p.data.isEqual(g.data)?y!==T&&(s.track({type:3,doc:g}),w=!0):this.ru(p,g)||(s.track({type:2,doc:g}),w=!0,(c&&this.Za(g,c)>0||u&&this.Za(g,u)<0)&&(a=!0)):!p&&g?(s.track({type:0,doc:g}),w=!0):p&&!g&&(s.track({type:1,doc:p}),w=!0,(c||u)&&(a=!0)),w&&(g?(o=o.add(g),i=T?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),s.track({type:1,doc:h})}return{Xa:o,nu:s,Cs:a,mutatedKeys:i}}ru(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,r){const i=this.Xa;this.Xa=e.Xa,this.mutatedKeys=e.mutatedKeys;const o=e.nu.wa();o.sort((h,d)=>function(g,y){const T=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ue(20277,{Vt:w})}};return T(g)-T(y)}(h.type,d.type)||this.Za(h.doc,d.doc)),this.iu(s),r=r!=null&&r;const a=n&&!r?this.su():[],c=this.Ya.size===0&&this.current&&!r?1:0,u=c!==this.Ja;return this.Ja=c,o.length!==0||u?{snapshot:new Ti(this.query,e.Xa,i,o,e.mutatedKeys,c===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),ou:a}:{ou:a}}Fa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new Qg,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(e){return!this.Ha.has(e)&&!!this.Xa.has(e)&&!this.Xa.get(e).hasLocalMutations}iu(e){e&&(e.addedDocuments.forEach(n=>this.Ha=this.Ha.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ha=this.Ha.delete(n)),this.current=e.current)}su(){if(!this.current)return[];const e=this.Ya;this.Ya=we(),this.Xa.forEach(s=>{this._u(s.key)&&(this.Ya=this.Ya.add(s.key))});const n=[];return e.forEach(s=>{this.Ya.has(s)||n.push(new sw(s))}),this.Ya.forEach(s=>{e.has(s)||n.push(new nw(s))}),n}au(e){this.Ha=e.$s,this.Ya=we();const n=this.tu(e.documents);return this.applyChanges(n,!0)}uu(){return Ti.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,this.Ja===0,this.hasCachedResults)}}const Sf="SyncEngine";class jN{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class HN{constructor(e){this.key=e,this.cu=!1}}class qN{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.lu={},this.hu=new Dr(a=>TT(a),Mc),this.Pu=new Map,this.Tu=new Set,this.Iu=new ot(ae.comparator),this.Eu=new Map,this.du=new pf,this.Au={},this.Ru=new Map,this.Vu=Ei.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}async function WN(t,e,n=!0){const s=cw(t);let r;const i=s.hu.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.uu()):r=await rw(s,e,n,!0),r}async function zN(t,e){const n=cw(t);await rw(n,e,!0,!1)}async function rw(t,e,n,s){const r=await dN(t.localStore,Hn(e)),i=r.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return s&&(a=await KN(t,e,i,o==="current",r.resumeToken)),t.isPrimaryClient&&n&&YT(t.remoteStore,r),a}async function KN(t,e,n,s,r){t.fu=(d,p,g)=>async function(T,w,O,D){let x=w.view.tu(O);x.Cs&&(x=await Hg(T.localStore,w.query,!1).then(({documents:b})=>w.view.tu(b,x)));const V=D&&D.targetChanges.get(w.targetId),Z=D&&D.targetMismatches.get(w.targetId)!=null,se=w.view.applyChanges(x,T.isPrimaryClient,V,Z);return Zg(T,w.targetId,se.ou),se.snapshot}(t,d,p,g);const i=await Hg(t.localStore,e,!0),o=new $N(e,i.$s),a=o.tu(i.documents),c=da.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),u=o.applyChanges(a,t.isPrimaryClient,c);Zg(t,n,u.ou);const h=new jN(e,n,o);return t.hu.set(e,h),t.Pu.has(n)?t.Pu.get(n).push(e):t.Pu.set(n,[e]),u.snapshot}async function GN(t,e,n){const s=me(t),r=s.hu.get(e),i=s.Pu.get(r.targetId);if(i.length>1)return s.Pu.set(r.targetId,i.filter(o=>!Mc(o,e))),void s.hu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await Wh(s.localStore,r.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(r.targetId),n&&yf(s.remoteStore,r.targetId),Gh(s,r.targetId)}).catch(Di)):(Gh(s,r.targetId),await Wh(s.localStore,r.targetId,!0))}async function QN(t,e){const n=me(t),s=n.hu.get(e),r=n.Pu.get(s.targetId);n.isPrimaryClient&&r.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),yf(n.remoteStore,s.targetId))}async function YN(t,e,n){const s=sO(t);try{const r=await function(o,a){const c=me(o),u=rt.now(),h=a.reduce((g,y)=>g.add(y.key),we());let d,p;return c.persistence.runTransaction("Locally write mutations","readwrite",g=>{let y=Es(),T=we();return c.Bs.getEntries(g,h).next(w=>{y=w,y.forEach((O,D)=>{D.isValidDocument()||(T=T.add(O))})}).next(()=>c.localDocuments.getOverlayedDocuments(g,y)).next(w=>{d=w;const O=[];for(const D of a){const x=dk(D,d.get(D.key).overlayedDocument);x!=null&&O.push(new ir(D.key,x,pT(x.value.mapValue),qn.exists(!0)))}return c.mutationQueue.addMutationBatch(g,u,O,a)}).next(w=>{p=w;const O=w.applyToLocalDocumentSet(d,T);return c.documentOverlayCache.saveOverlays(g,w.batchId,O)})}).then(()=>({batchId:p.batchId,changes:AT(d)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(o,a,c){let u=o.Au[o.currentUser.toKey()];u||(u=new ot(ye)),u=u.insert(a,c),o.Au[o.currentUser.toKey()]=u}(s,r.batchId,n),await pa(s,r.changes),await jc(s.remoteStore)}catch(r){const i=If(r,"Failed to persist write");n.reject(i)}}async function iw(t,e){const n=me(t);try{const s=await cN(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.Eu.get(i);o&&(Fe(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?o.cu=!0:r.modifiedDocuments.size>0?Fe(o.cu,14607):r.removedDocuments.size>0&&(Fe(o.cu,42227),o.cu=!1))}),await pa(n,s,e)}catch(s){await Di(s)}}function Jg(t,e,n){const s=me(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.hu.forEach((i,o)=>{const a=o.view.Fa(e);a.snapshot&&r.push(a.snapshot)}),function(o,a){const c=me(o);c.onlineState=a;let u=!1;c.queries.forEach((h,d)=>{for(const p of d.Sa)p.Fa(a)&&(u=!0)}),u&&bf(c)}(s.eventManager,e),r.length&&s.lu.Y_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function XN(t,e,n){const s=me(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.Eu.get(e),i=r&&r.key;if(i){let o=new ot(ae.comparator);o=o.insert(i,Dt.newNoDocument(i,fe.min()));const a=we().add(i),c=new Uc(fe.min(),new Map,new ot(ye),o,a);await iw(s,c),s.Iu=s.Iu.remove(i),s.Eu.delete(e),Pf(s)}else await Wh(s.localStore,e,!1).then(()=>Gh(s,e,n)).catch(Di)}async function JN(t,e){const n=me(t),s=e.batch.batchId;try{const r=await lN(n.localStore,e);aw(n,s,null),ow(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await pa(n,r)}catch(r){await Di(r)}}async function ZN(t,e,n){const s=me(t);try{const r=await function(o,a){const c=me(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return c.mutationQueue.lookupMutationBatch(u,a).next(d=>(Fe(d!==null,37113),h=d.keys(),c.mutationQueue.removeMutationBatch(u,d))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>c.localDocuments.getDocuments(u,h))})}(s.localStore,e);aw(s,e,n),ow(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await pa(s,r)}catch(r){await Di(r)}}function ow(t,e){(t.Ru.get(e)||[]).forEach(n=>{n.resolve()}),t.Ru.delete(e)}function aw(t,e,n){const s=me(t);let r=s.Au[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.Au[s.currentUser.toKey()]=r}}function Gh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Pu.get(e))t.hu.delete(s),n&&t.lu.gu(s,n);t.Pu.delete(e),t.isPrimaryClient&&t.du.Hr(e).forEach(s=>{t.du.containsKey(s)||lw(t,s)})}function lw(t,e){t.Tu.delete(e.path.canonicalString());const n=t.Iu.get(e);n!==null&&(yf(t.remoteStore,n),t.Iu=t.Iu.remove(e),t.Eu.delete(n),Pf(t))}function Zg(t,e,n){for(const s of n)s instanceof nw?(t.du.addReference(s.key,e),eO(t,s)):s instanceof sw?(te(Sf,"Document no longer in limbo: "+s.key),t.du.removeReference(s.key,e),t.du.containsKey(s.key)||lw(t,s.key)):ue(19791,{pu:s})}function eO(t,e){const n=e.key,s=n.path.canonicalString();t.Iu.get(n)||t.Tu.has(s)||(te(Sf,"New document in limbo: "+n),t.Tu.add(s),Pf(t))}function Pf(t){for(;t.Tu.size>0&&t.Iu.size<t.maxConcurrentLimboResolutions;){const e=t.Tu.values().next().value;t.Tu.delete(e);const n=new ae(Ke.fromString(e)),s=t.Vu.next();t.Eu.set(s,new HN(n)),t.Iu=t.Iu.insert(n,s),YT(t.remoteStore,new Vs(Hn(xc(n.path)),s,"TargetPurposeLimboResolution",kc.le))}}async function pa(t,e,n){const s=me(t),r=[],i=[],o=[];s.hu.isEmpty()||(s.hu.forEach((a,c)=>{o.push(s.fu(c,e,n).then(u=>{var h;if((u||n)&&s.isPrimaryClient){const d=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(c.targetId))===null||h===void 0?void 0:h.current;s.sharedClientState.updateQueryState(c.targetId,d?"current":"not-current")}if(u){r.push(u);const d=gf.Rs(c.targetId,u);i.push(d)}}))}),await Promise.all(o),s.lu.Y_(r),await async function(c,u){const h=me(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>$.forEach(u,p=>$.forEach(p.ds,g=>h.persistence.referenceDelegate.addReference(d,p.targetId,g)).next(()=>$.forEach(p.As,g=>h.persistence.referenceDelegate.removeReference(d,p.targetId,g)))))}catch(d){if(!xi(d))throw d;te(_f,"Failed to update sequence numbers: "+d)}for(const d of u){const p=d.targetId;if(!d.fromCache){const g=h.xs.get(p),y=g.snapshotVersion,T=g.withLastLimboFreeSnapshotVersion(y);h.xs=h.xs.insert(p,T)}}}(s.localStore,i))}async function tO(t,e){const n=me(t);if(!n.currentUser.isEqual(e)){te(Sf,"User change. New user:",e.toKey());const s=await zT(n.localStore,e);n.currentUser=e,function(i,o){i.Ru.forEach(a=>{a.forEach(c=>{c.reject(new ie(H.CANCELLED,o))})}),i.Ru.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await pa(n,s.ks)}}function nO(t,e){const n=me(t),s=n.Eu.get(e);if(s&&s.cu)return we().add(s.key);{let r=we();const i=n.Pu.get(e);if(!i)return r;for(const o of i){const a=n.hu.get(o);r=r.unionWith(a.view.eu)}return r}}function cw(t){const e=me(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=iw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=nO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=XN.bind(null,e),e.lu.Y_=UN.bind(null,e.eventManager),e.lu.gu=BN.bind(null,e.eventManager),e}function sO(t){const e=me(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=JN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ZN.bind(null,e),e}class Gl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Bc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Su(e),await this.persistence.start(),this.localStore=this.Du(e),this.gcScheduler=this.vu(e,this.localStore),this.indexBackfillerScheduler=this.Cu(e,this.localStore)}vu(e,n){return null}Cu(e,n){return null}Du(e){return aN(this.persistence,new rN,e.initialUser,this.serializer)}Su(e){return new WT(mf.fi,this.serializer)}bu(e){return new pN}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Gl.provider={build:()=>new Gl};class rO extends Gl{constructor(e){super(),this.cacheSizeBytes=e}vu(e,n){Fe(this.persistence.referenceDelegate instanceof zl,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new Hk(s,e.asyncQueue,n)}Su(e){const n=this.cacheSizeBytes!==void 0?zt.withCacheSize(this.cacheSizeBytes):zt.DEFAULT;return new WT(s=>zl.fi(s,n),this.serializer)}}class Qh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Jg(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=tO.bind(null,this.syncEngine),await LN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new FN}()}createDatastore(e){const n=Bc(e.databaseInfo.databaseId),s=function(i){return new vN(i)}(e.databaseInfo);return function(i,o,a,c){return new IN(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,r,i,o,a){return new RN(s,r,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Jg(this.syncEngine,n,0),function(){return zg.C()?new zg:new mN}())}createSyncEngine(e,n){return function(r,i,o,a,c,u,h){const d=new qN(r,i,o,a,c,u);return h&&(d.mu=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(r){const i=me(r);te(Ar,"RemoteStore shutting down."),i.da.add(5),await fa(i),i.Ra.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Qh.provider={build:()=>new Qh};/**
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
 *//**
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
 */class kf{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Mu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Mu(this.observer.error,e):vs("Uncaught Error in snapshot listener:",e.toString()))}xu(){this.muted=!0}Mu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const Js="FirestoreClient";class iO{constructor(e,n,s,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Nt.UNAUTHENTICATED,this.clientId=rT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,async o=>{te(Js,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(s,o=>(te(Js,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new fs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=If(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Gu(t,e){t.asyncQueue.verifyOperationInProgress(),te(Js,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await zT(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function e_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await oO(t);te(Js,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(s=>Gg(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,r)=>Gg(e.remoteStore,r)),t._onlineComponents=e}async function oO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){te(Js,"Using user provided OfflineComponentProvider");try{await Gu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(r){return r.name==="FirebaseError"?r.code===H.FAILED_PRECONDITION||r.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(n))throw n;gi("Error using user provided cache. Falling back to memory cache: "+n),await Gu(t,new Gl)}}else te(Js,"Using default OfflineComponentProvider"),await Gu(t,new rO(void 0));return t._offlineComponents}async function uw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(te(Js,"Using user provided OnlineComponentProvider"),await e_(t,t._uninitializedComponentsProvider._online)):(te(Js,"Using default OnlineComponentProvider"),await e_(t,new Qh))),t._onlineComponents}function aO(t){return uw(t).then(e=>e.syncEngine)}async function Ql(t){const e=await uw(t),n=e.eventManager;return n.onListen=WN.bind(null,e.syncEngine),n.onUnlisten=GN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=zN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=QN.bind(null,e.syncEngine),n}function lO(t,e,n={}){const s=new fs;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,u){const h=new kf({next:p=>{h.xu(),o.enqueueAndForget(()=>Rf(i,d));const g=p.docs.has(a);!g&&p.fromCache?u.reject(new ie(H.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&p.fromCache&&c&&c.source==="server"?u.reject(new ie(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(p)},error:p=>u.reject(p)}),d=new Cf(xc(a.path),h,{includeMetadataChanges:!0,Qa:!0});return Af(i,d)}(await Ql(t),t.asyncQueue,e,n,s)),s.promise}function cO(t,e,n={}){const s=new fs;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,u){const h=new kf({next:p=>{h.xu(),o.enqueueAndForget(()=>Rf(i,d)),p.fromCache&&c.source==="server"?u.reject(new ie(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),d=new Cf(a,h,{includeMetadataChanges:!0,Qa:!0});return Af(i,d)}(await Ql(t),t.asyncQueue,e,n,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function hw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const t_=new Map;/**
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
 */function dw(t,e,n){if(!n)throw new ie(H.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function uO(t,e,n,s){if(e===!0&&s===!0)throw new ie(H.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function n_(t){if(!ae.isDocumentKey(t))throw new ie(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function s_(t){if(ae.isDocumentKey(t))throw new ie(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Nf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ue(12329,{type:typeof t})}function An(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ie(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Nf(t);throw new ie(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const fw="firestore.googleapis.com",r_=!0;class i_{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ie(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=fw,this.ssl=r_}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:r_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=qT;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<$k)throw new ie(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}uO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=hw((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ie(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ie(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ie(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Hc{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new i_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ie(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ie(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new i_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new g1;switch(s.type){case"firstParty":return new E1(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ie(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=t_.get(n);s&&(te("ComponentProvider","Removing Datastore"),t_.delete(n),s.terminate())}(this),Promise.resolve()}}function hO(t,e,n,s={}){var r;t=An(t,Hc);const i=Si(e),o=t._getSettings(),a=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),c=`${e}:${n}`;i&&(tE(`https://${c}`),nE("Firestore",!0)),o.host!==fw&&o.host!==c&&gi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},o),{host:c,ssl:i,emulatorOptions:s});if(!Er(u,a)&&(t._setSettings(u),s.mockUserToken)){let h,d;if(typeof s.mockUserToken=="string")h=s.mockUserToken,d=Nt.MOCK_USER;else{h=Nb(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const p=s.mockUserToken.sub||s.mockUserToken.user_id;if(!p)throw new ie(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new Nt(p)}t._authCredentials=new _1(new nT(h,d))}}/**
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
 */class ma{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ma(this.firestore,e,this._query)}}class Xt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Hs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Xt(this.firestore,e,this._key)}}class Hs extends ma{constructor(e,n,s){super(e,n,xc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Xt(this.firestore,null,new ae(e))}withConverter(e){return new Hs(this.firestore,e,this._path)}}function o_(t,e,...n){if(t=At(t),dw("collection","path",e),t instanceof Hc){const s=Ke.fromString(e,...n);return s_(s),new Hs(t,null,s)}{if(!(t instanceof Xt||t instanceof Hs))throw new ie(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ke.fromString(e,...n));return s_(s),new Hs(t.firestore,null,s)}}function Yh(t,e,...n){if(t=At(t),arguments.length===1&&(e=rT.newId()),dw("doc","path",e),t instanceof Hc){const s=Ke.fromString(e,...n);return n_(s),new Xt(t,null,new ae(s))}{if(!(t instanceof Xt||t instanceof Hs))throw new ie(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ke.fromString(e,...n));return n_(s),new Xt(t.firestore,t instanceof Hs?t.converter:null,new ae(s))}}/**
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
 */const a_="AsyncQueue";class l_{constructor(e=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new GT(this,"async_queue_retry"),this.rc=()=>{const s=Ku();s&&te(a_,"Visibility state changed to "+s.visibilityState),this.x_.b_()},this.sc=e;const n=Ku();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.oc(),this._c(e)}enterRestrictedMode(e){if(!this.Yu){this.Yu=!0,this.tc=e||!1;const n=Ku();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.rc)}}enqueue(e){if(this.oc(),this.Yu)return new Promise(()=>{});const n=new fs;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ju.push(e),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(e){if(!xi(e))throw e;te(a_,"Operation failed with retryable error: "+e)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(e){const n=this.sc.then(()=>(this.ec=!0,e().catch(s=>{throw this.Xu=s,this.ec=!1,vs("INTERNAL UNHANDLED ERROR: ",c_(s)),s}).then(s=>(this.ec=!1,s))));return this.sc=n,n}enqueueAfterDelay(e,n,s){this.oc(),this.nc.indexOf(e)>-1&&(n=0);const r=wf.createAndSchedule(this,e,n,s,i=>this.uc(i));return this.Zu.push(r),r}oc(){this.Xu&&ue(47125,{cc:c_(this.Xu)})}verifyOperationInProgress(){}async lc(){let e;do e=this.sc,await e;while(e!==this.sc)}hc(e){for(const n of this.Zu)if(n.timerId===e)return!0;return!1}Pc(e){return this.lc().then(()=>{this.Zu.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Zu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.lc()})}Tc(e){this.nc.push(e)}uc(e){const n=this.Zu.indexOf(e);this.Zu.splice(n,1)}}function c_(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
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
 */function u_(t){return function(n,s){if(typeof n!="object"||n===null)return!1;const r=n;for(const i of s)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Rr extends Hc{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new l_,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new l_(e),this._firestoreClient=void 0,await e}}}function dO(t,e){const n=typeof t=="object"?t:zd(),s=typeof t=="string"?t:Bl,r=Wd(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=kb("firestore");i&&hO(r,...i)}return r}function qc(t){if(t._terminated)throw new ie(H.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||fO(t),t._firestoreClient}function fO(t){var e,n,s;const r=t._freezeSettings(),i=function(a,c,u,h){return new M1(a,c,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,hw(h.experimentalLongPollingOptions),h.useFetchStreams,h.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._componentsProvider||!((n=r.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),t._firestoreClient=new iO(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class wi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new wi(Rt.fromBase64String(e))}catch(n){throw new ie(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new wi(Rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Wc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ie(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new wt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class zc{constructor(e){this._methodName=e}}/**
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
 */class Kc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ie(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ie(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ye(this._lat,e._lat)||ye(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Of{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const pO=/^__.*__$/;class mO{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new ir(e,this.data,this.fieldMask,n,this.fieldTransforms):new ha(e,this.data,n,this.fieldTransforms)}}class pw{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new ir(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function mw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ue(40011,{Ic:t})}}class Df{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Ec(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ic(){return this.settings.Ic}dc(e){return new Df(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ac(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.dc({path:s,Rc:!1});return r.Vc(e),r}mc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.dc({path:s,Rc:!1});return r.Ec(),r}fc(e){return this.dc({path:void 0,Rc:!0})}gc(e){return Yl(e,this.settings.methodName,this.settings.yc||!1,this.path,this.settings.wc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ec(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vc(this.path.get(e))}Vc(e){if(e.length===0)throw this.gc("Document fields must not be empty");if(mw(this.Ic)&&pO.test(e))throw this.gc('Document fields cannot begin and end with "__"')}}class gO{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||Bc(e)}bc(e,n,s,r=!1){return new Df({Ic:e,methodName:n,wc:s,path:wt.emptyPath(),Rc:!1,yc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function gw(t){const e=t._freezeSettings(),n=Bc(t._databaseId);return new gO(t._databaseId,!!e.ignoreUndefinedProperties,n)}function _O(t,e,n,s,r,i={}){const o=t.bc(i.merge||i.mergeFields?2:0,e,n,r);Mf("Data must be an object, but it was:",o,s);const a=_w(s,o);let c,u;if(i.merge)c=new rn(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const d of i.mergeFields){const p=Xh(e,d,n);if(!o.contains(p))throw new ie(H.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);vw(h,p)||h.push(p)}c=new rn(h),u=o.fieldTransforms.filter(d=>c.covers(d.field))}else c=null,u=o.fieldTransforms;return new mO(new Gt(a),c,u)}class Gc extends zc{_toFieldTransform(e){if(e.Ic!==2)throw e.Ic===1?e.gc(`${this._methodName}() can only appear at the top level of your update data`):e.gc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Gc}}class xf extends zc{_toFieldTransform(e){return new lk(e.path,new Yo)}isEqual(e){return e instanceof xf}}function yO(t,e,n,s){const r=t.bc(1,e,n);Mf("Data must be an object, but it was:",r,s);const i=[],o=Gt.empty();rr(s,(c,u)=>{const h=Lf(e,c,n);u=At(u);const d=r.mc(h);if(u instanceof Gc)i.push(h);else{const p=Qc(u,d);p!=null&&(i.push(h),o.set(h,p))}});const a=new rn(i);return new pw(o,a,r.fieldTransforms)}function vO(t,e,n,s,r,i){const o=t.bc(1,e,n),a=[Xh(e,s,n)],c=[r];if(i.length%2!=0)throw new ie(H.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)a.push(Xh(e,i[p])),c.push(i[p+1]);const u=[],h=Gt.empty();for(let p=a.length-1;p>=0;--p)if(!vw(u,a[p])){const g=a[p];let y=c[p];y=At(y);const T=o.mc(g);if(y instanceof Gc)u.push(g);else{const w=Qc(y,T);w!=null&&(u.push(g),h.set(g,w))}}const d=new rn(u);return new pw(h,d,o.fieldTransforms)}function Qc(t,e){if(yw(t=At(t)))return Mf("Unsupported field value:",e,t),_w(t,e);if(t instanceof zc)return function(s,r){if(!mw(r.Ic))throw r.gc(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.gc(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Rc&&e.Ic!==4)throw e.gc("Nested arrays are not supported");return function(s,r){const i=[];let o=0;for(const a of s){let c=Qc(a,r.fc(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(s,r){if((s=At(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return ik(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=rt.fromDate(s);return{timestampValue:Wl(r.serializer,i)}}if(s instanceof rt){const i=new rt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Wl(r.serializer,i)}}if(s instanceof Kc)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof wi)return{bytesValue:VT(r.serializer,s._byteString)};if(s instanceof Xt){const i=r.databaseId,o=s.firestore._databaseId;if(!o.isEqual(i))throw r.gc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ff(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof Of)return function(o,a){return{mapValue:{fields:{[dT]:{stringValue:fT},[$l]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.gc("VectorValues must only contain numeric values.");return uf(a.serializer,u)})}}}}}}(s,r);throw r.gc(`Unsupported field value: ${Nf(s)}`)}(t,e)}function _w(t,e){const n={};return oT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):rr(t,(s,r)=>{const i=Qc(r,e.Ac(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function yw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof rt||t instanceof Kc||t instanceof wi||t instanceof Xt||t instanceof zc||t instanceof Of)}function Mf(t,e,n){if(!yw(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const s=Nf(n);throw s==="an object"?e.gc(t+" a custom object"):e.gc(t+" "+s)}}function Xh(t,e,n){if((e=At(e))instanceof Wc)return e._internalPath;if(typeof e=="string")return Lf(t,e);throw Yl("Field path arguments must be of type string or ",t,!1,void 0,n)}const EO=new RegExp("[~\\*/\\[\\]]");function Lf(t,e,n){if(e.search(EO)>=0)throw Yl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Wc(...e.split("."))._internalPath}catch{throw Yl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Yl(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new ie(H.INVALID_ARGUMENT,a+t+c)}function vw(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Ew{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Xt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new TO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Tw("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class TO extends Ew{data(){return super.data()}}function Tw(t,e){return typeof e=="string"?Lf(t,e):e instanceof Wc?e._internalPath:e._delegate._internalPath}/**
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
 */function ww(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ie(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class wO{convertValue(e,n="none"){switch(Ys(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Qs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ue(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return rr(e,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertVectorValue(e){var n,s,r;const i=(r=(s=(n=e.fields)===null||n===void 0?void 0:n[$l].arrayValue)===null||s===void 0?void 0:s.values)===null||r===void 0?void 0:r.map(o=>Ze(o.doubleValue));return new Of(i)}convertGeoPoint(e){return new Kc(Ze(e.latitude),Ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Oc(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Ko(e));default:return null}}convertTimestamp(e){const n=Gs(e);return new rt(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Ke.fromString(e);Fe(HT(s),9688,{name:e});const r=new Go(s.get(1),s.get(3)),i=new ae(s.popFirst(5));return r.isEqual(n)||vs(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function IO(t,e,n){let s;return s=t?t.toFirestore(e):e,s}/**
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
 */class mo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Iw extends Ew{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new gl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Tw("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class gl extends Iw{data(e={}){return super.data(e)}}class Aw{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new mo(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new gl(this._firestore,this._userDataWriter,s.key,s,new mo(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ie(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(a=>{const c=new gl(r._firestore,r._userDataWriter,a.doc.key,a.doc,new mo(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new gl(r._firestore,r._userDataWriter,a.doc.key,a.doc,new mo(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:AO(a.type),doc:c,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function AO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ue(61501,{type:t})}}/**
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
 */function Rw(t){t=An(t,Xt);const e=An(t.firestore,Rr);return lO(qc(e),t._key).then(n=>Cw(e,t,n))}class Vf extends wO{constructor(e){super(),this.firestore=e}convertBytes(e){return new wi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Xt(this.firestore,null,n)}}function RO(t){t=An(t,ma);const e=An(t.firestore,Rr),n=qc(e),s=new Vf(e);return ww(t._query),cO(n,t._query).then(r=>new Aw(e,s,t,r))}function h_(t,e,n,...s){t=An(t,Xt);const r=An(t.firestore,Rr),i=gw(r);let o;return o=typeof(e=At(e))=="string"||e instanceof Wc?vO(i,"updateDoc",t._key,e,n,s):yO(i,"updateDoc",t._key,e),bw(r,[o.toMutation(t._key,qn.exists(!0))])}function bO(t,e){const n=An(t.firestore,Rr),s=Yh(t),r=IO(t.converter,e);return bw(n,[_O(gw(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,qn.exists(!1))]).then(()=>s)}function Ff(t,...e){var n,s,r;t=At(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||u_(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(u_(e[o])){const d=e[o];e[o]=(n=d.next)===null||n===void 0?void 0:n.bind(d),e[o+1]=(s=d.error)===null||s===void 0?void 0:s.bind(d),e[o+2]=(r=d.complete)===null||r===void 0?void 0:r.bind(d)}let c,u,h;if(t instanceof Xt)u=An(t.firestore,Rr),h=xc(t._key.path),c={next:d=>{e[o]&&e[o](Cw(u,t,d))},error:e[o+1],complete:e[o+2]};else{const d=An(t,ma);u=An(d.firestore,Rr),h=d._query;const p=new Vf(u);c={next:g=>{e[o]&&e[o](new Aw(u,p,d,g))},error:e[o+1],complete:e[o+2]},ww(t._query)}return function(p,g,y,T){const w=new kf(T),O=new Cf(g,w,y);return p.asyncQueue.enqueueAndForget(async()=>Af(await Ql(p),O)),()=>{w.xu(),p.asyncQueue.enqueueAndForget(async()=>Rf(await Ql(p),O))}}(qc(u),h,a,c)}function bw(t,e){return function(s,r){const i=new fs;return s.asyncQueue.enqueueAndForget(async()=>YN(await aO(s),r,i)),i.promise}(qc(t),e)}function Cw(t,e,n){const s=n.docs.get(e._key),r=new Vf(t);return new Iw(t,r,e._key,s,new mo(n.hasPendingWrites,n.fromCache),e.converter)}function Ga(){return new xf("serverTimestamp")}(function(e,n=!0){(function(r){Oi=r})(tr),Kn(new bn("firestore",(s,{instanceIdentifier:r,options:i})=>{const o=s.getProvider("app").getImmediate(),a=new Rr(new y1(s.getProvider("auth-internal")),new T1(o,s.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ie(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Go(u.options.projectId,h)}(o,r),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),on(fg,pg,e),on(fg,pg,"esm2017")})();const CO={apiKey:"AIzaSyCUM0ReK07RGfrefoTa4ETPoqjYrbM0CmQ",authDomain:"vue-git.firebaseapp.com",projectId:"vue-git",storageBucket:"vue-git.firebasestorage.app",messagingSenderId:"1023184041734",appId:"1:1023184041734:web:5bfb7442c88f384e03d087"},Uf=lE(CO),Qa=dO(Uf),d_=d1(Uf);/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Yr=typeof document<"u";function Sw(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function SO(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Sw(t.default)}const Oe=Object.assign;function Qu(t,e){const n={};for(const s in e){const r=e[s];n[s]=Sn(r)?r.map(t):t(r)}return n}const ko=()=>{},Sn=Array.isArray,Pw=/#/g,PO=/&/g,kO=/\//g,NO=/=/g,OO=/\?/g,kw=/\+/g,DO=/%5B/g,xO=/%5D/g,Nw=/%5E/g,MO=/%60/g,Ow=/%7B/g,LO=/%7C/g,Dw=/%7D/g,VO=/%20/g;function Bf(t){return encodeURI(""+t).replace(LO,"|").replace(DO,"[").replace(xO,"]")}function FO(t){return Bf(t).replace(Ow,"{").replace(Dw,"}").replace(Nw,"^")}function Jh(t){return Bf(t).replace(kw,"%2B").replace(VO,"+").replace(Pw,"%23").replace(PO,"%26").replace(MO,"`").replace(Ow,"{").replace(Dw,"}").replace(Nw,"^")}function UO(t){return Jh(t).replace(NO,"%3D")}function BO(t){return Bf(t).replace(Pw,"%23").replace(OO,"%3F")}function $O(t){return t==null?"":BO(t).replace(kO,"%2F")}function Zo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const jO=/\/$/,HO=t=>t.replace(jO,"");function Yu(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=KO(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:Zo(o)}}function qO(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function f_(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function WO(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Ii(e.matched[s],n.matched[r])&&xw(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ii(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function xw(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!zO(t[n],e[n]))return!1;return!0}function zO(t,e){return Sn(t)?p_(t,e):Sn(e)?p_(e,t):t===e}function p_(t,e){return Sn(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function KO(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o).join("/")}const Ps={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ea;(function(t){t.pop="pop",t.push="push"})(ea||(ea={}));var No;(function(t){t.back="back",t.forward="forward",t.unknown=""})(No||(No={}));function GO(t){if(!t)if(Yr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),HO(t)}const QO=/^[^#]+#/;function YO(t,e){return t.replace(QO,"#")+e}function XO(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Yc=()=>({left:window.scrollX,top:window.scrollY});function JO(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=XO(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function m_(t,e){return(history.state?history.state.position-e:-1)+t}const Zh=new Map;function ZO(t,e){Zh.set(t,e)}function eD(t){const e=Zh.get(t);return Zh.delete(t),e}let tD=()=>location.protocol+"//"+location.host;function Mw(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),f_(c,"")}return f_(n,t)+s+r}function nD(t,e,n,s){let r=[],i=[],o=null;const a=({state:p})=>{const g=Mw(t,location),y=n.value,T=e.value;let w=0;if(p){if(n.value=g,e.value=p,o&&o===y){o=null;return}w=T?p.position-T.position:0}else s(g);r.forEach(O=>{O(n.value,y,{delta:w,type:ea.pop,direction:w?w>0?No.forward:No.back:No.unknown})})};function c(){o=n.value}function u(p){r.push(p);const g=()=>{const y=r.indexOf(p);y>-1&&r.splice(y,1)};return i.push(g),g}function h(){const{history:p}=window;p.state&&p.replaceState(Oe({},p.state,{scroll:Yc()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:c,listen:u,destroy:d}}function g_(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Yc():null}}function sD(t){const{history:e,location:n}=window,s={value:Mw(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,h){const d=t.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+c:tD()+t+c;try{e[h?"replaceState":"pushState"](u,"",p),r.value=u}catch(g){console.error(g),n[h?"replace":"assign"](p)}}function o(c,u){const h=Oe({},e.state,g_(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});i(c,h,!0),s.value=c}function a(c,u){const h=Oe({},r.value,e.state,{forward:c,scroll:Yc()});i(h.current,h,!0);const d=Oe({},g_(s.value,c,null),{position:h.position+1},u);i(c,d,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function rD(t){t=GO(t);const e=sD(t),n=nD(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=Oe({location:"",base:t,go:s,createHref:YO.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function iD(t){return typeof t=="string"||t&&typeof t=="object"}function Lw(t){return typeof t=="string"||typeof t=="symbol"}const Vw=Symbol("");var __;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(__||(__={}));function Ai(t,e){return Oe(new Error,{type:t,[Vw]:!0},e)}function ns(t,e){return t instanceof Error&&Vw in t&&(e==null||!!(t.type&e))}const y_="[^/]+?",oD={sensitive:!1,strict:!1,start:!0,end:!0},aD=/[.+*?^${}()[\]/\\]/g;function lD(t,e){const n=Oe({},oD,e),s=[];let r=n.start?"^":"";const i=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let d=0;d<u.length;d++){const p=u[d];let g=40+(n.sensitive?.25:0);if(p.type===0)d||(r+="/"),r+=p.value.replace(aD,"\\$&"),g+=40;else if(p.type===1){const{value:y,repeatable:T,optional:w,regexp:O}=p;i.push({name:y,repeatable:T,optional:w});const D=O||y_;if(D!==y_){g+=10;try{new RegExp(`(${D})`)}catch(V){throw new Error(`Invalid custom RegExp for param "${y}" (${D}): `+V.message)}}let x=T?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;d||(x=w&&u.length<2?`(?:/${x})`:"/"+x),w&&(x+="?"),r+=x,g+=20,w&&(g+=-8),T&&(g+=-20),D===".*"&&(g+=-50)}h.push(g)}s.push(h)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(u){const h=u.match(o),d={};if(!h)return null;for(let p=1;p<h.length;p++){const g=h[p]||"",y=i[p-1];d[y.name]=g&&y.repeatable?g.split("/"):g}return d}function c(u){let h="",d=!1;for(const p of t){(!d||!h.endsWith("/"))&&(h+="/"),d=!1;for(const g of p)if(g.type===0)h+=g.value;else if(g.type===1){const{value:y,repeatable:T,optional:w}=g,O=y in u?u[y]:"";if(Sn(O)&&!T)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const D=Sn(O)?O.join("/"):O;if(!D)if(w)p.length<2&&(h.endsWith("/")?h=h.slice(0,-1):d=!0);else throw new Error(`Missing required param "${y}"`);h+=D}}return h||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function cD(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Fw(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=cD(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(v_(s))return 1;if(v_(r))return-1}return r.length-s.length}function v_(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const uD={type:0,value:""},hD=/[a-zA-Z0-9_]/;function dD(t){if(!t)return[[]];if(t==="/")return[[uD]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,u="",h="";function d(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&d(),o()):c===":"?(d(),n=1):p();break;case 4:p(),n=s;break;case 1:c==="("?n=2:hD.test(c)?p():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+c:n=3:h+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),r}function fD(t,e,n){const s=lD(dD(t.path),n),r=Oe(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function pD(t,e){const n=[],s=new Map;e=I_({strict:!1,end:!0,sensitive:!1},e);function r(d){return s.get(d)}function i(d,p,g){const y=!g,T=T_(d);T.aliasOf=g&&g.record;const w=I_(e,d),O=[T];if("alias"in d){const V=typeof d.alias=="string"?[d.alias]:d.alias;for(const Z of V)O.push(T_(Oe({},T,{components:g?g.record.components:T.components,path:Z,aliasOf:g?g.record:T})))}let D,x;for(const V of O){const{path:Z}=V;if(p&&Z[0]!=="/"){const se=p.record.path,b=se[se.length-1]==="/"?"":"/";V.path=p.record.path+(Z&&b+Z)}if(D=fD(V,p,w),g?g.alias.push(D):(x=x||D,x!==D&&x.alias.push(D),y&&d.name&&!w_(D)&&o(d.name)),Uw(D)&&c(D),T.children){const se=T.children;for(let b=0;b<se.length;b++)i(se[b],D,g&&g.children[b])}g=g||D}return x?()=>{o(x)}:ko}function o(d){if(Lw(d)){const p=s.get(d);p&&(s.delete(d),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(d);p>-1&&(n.splice(p,1),d.record.name&&s.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function c(d){const p=_D(d,n);n.splice(p,0,d),d.record.name&&!w_(d)&&s.set(d.record.name,d)}function u(d,p){let g,y={},T,w;if("name"in d&&d.name){if(g=s.get(d.name),!g)throw Ai(1,{location:d});w=g.record.name,y=Oe(E_(p.params,g.keys.filter(x=>!x.optional).concat(g.parent?g.parent.keys.filter(x=>x.optional):[]).map(x=>x.name)),d.params&&E_(d.params,g.keys.map(x=>x.name))),T=g.stringify(y)}else if(d.path!=null)T=d.path,g=n.find(x=>x.re.test(T)),g&&(y=g.parse(T),w=g.record.name);else{if(g=p.name?s.get(p.name):n.find(x=>x.re.test(p.path)),!g)throw Ai(1,{location:d,currentLocation:p});w=g.record.name,y=Oe({},p.params,d.params),T=g.stringify(y)}const O=[];let D=g;for(;D;)O.unshift(D.record),D=D.parent;return{name:w,path:T,params:y,matched:O,meta:gD(O)}}t.forEach(d=>i(d));function h(){n.length=0,s.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:r}}function E_(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function T_(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:mD(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function mD(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function w_(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function gD(t){return t.reduce((e,n)=>Oe(e,n.meta),{})}function I_(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function _D(t,e){let n=0,s=e.length;for(;n!==s;){const i=n+s>>1;Fw(t,e[i])<0?s=i:n=i+1}const r=yD(t);return r&&(s=e.lastIndexOf(r,s-1)),s}function yD(t){let e=t;for(;e=e.parent;)if(Uw(e)&&Fw(t,e)===0)return e}function Uw({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function vD(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(kw," "),o=i.indexOf("="),a=Zo(o<0?i:i.slice(0,o)),c=o<0?null:Zo(i.slice(o+1));if(a in e){let u=e[a];Sn(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function A_(t){let e="";for(let n in t){const s=t[n];if(n=UO(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Sn(s)?s.map(i=>i&&Jh(i)):[s&&Jh(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function ED(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Sn(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const TD=Symbol(""),R_=Symbol(""),Xc=Symbol(""),Bw=Symbol(""),ed=Symbol("");function no(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Os(t,e,n,s,r,i=o=>o()){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((a,c)=>{const u=p=>{p===!1?c(Ai(4,{from:n,to:e})):p instanceof Error?c(p):iD(p)?c(Ai(2,{from:e,to:p})):(o&&s.enterCallbacks[r]===o&&typeof p=="function"&&o.push(p),a())},h=i(()=>t.call(s&&s.instances[r],e,n,u));let d=Promise.resolve(h);t.length<3&&(d=d.then(u)),d.catch(p=>c(p))})}function Xu(t,e,n,s,r=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Sw(c)){const h=(c.__vccOpts||c)[e];h&&i.push(Os(h,n,s,o,a,r))}else{let u=c();i.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=SO(h)?h.default:h;o.mods[a]=h,o.components[a]=d;const g=(d.__vccOpts||d)[e];return g&&Os(g,n,s,o,a,r)()}))}}return i}function b_(t){const e=pn(Xc),n=pn(Bw),s=Je(()=>{const c=pt(t.to);return e.resolve(c)}),r=Je(()=>{const{matched:c}=s.value,{length:u}=c,h=c[u-1],d=n.matched;if(!h||!d.length)return-1;const p=d.findIndex(Ii.bind(null,h));if(p>-1)return p;const g=C_(c[u-2]);return u>1&&C_(h)===g&&d[d.length-1].path!==g?d.findIndex(Ii.bind(null,c[u-2])):p}),i=Je(()=>r.value>-1&&bD(n.params,s.value.params)),o=Je(()=>r.value>-1&&r.value===n.matched.length-1&&xw(n.params,s.value.params));function a(c={}){if(RD(c)){const u=e[pt(t.replace)?"replace":"push"](pt(t.to)).catch(ko);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:Je(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}function wD(t){return t.length===1?t[0]:t}const ID=_v({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:b_,setup(t,{slots:e}){const n=yc(b_(t)),{options:s}=pn(Xc),r=Je(()=>({[S_(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[S_(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&wD(e.default(n));return t.custom?i:zv("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),AD=ID;function RD(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function bD(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Sn(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function C_(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const S_=(t,e,n)=>t??e??n,CD=_v({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=pn(ed),r=Je(()=>t.route||s.value),i=pn(R_,0),o=Je(()=>{let u=pt(i);const{matched:h}=r.value;let d;for(;(d=h[u])&&!d.components;)u++;return u}),a=Je(()=>r.value.matched[o.value]);sl(R_,Je(()=>o.value+1)),sl(TD,a),sl(ed,r);const c=Me();return ii(()=>[c.value,a.value,t.name],([u,h,d],[p,g,y])=>{h&&(h.instances[d]=u,g&&g!==h&&u&&u===p&&(h.leaveGuards.size||(h.leaveGuards=g.leaveGuards),h.updateGuards.size||(h.updateGuards=g.updateGuards))),u&&h&&(!g||!Ii(h,g)||!p)&&(h.enterCallbacks[d]||[]).forEach(T=>T(u))},{flush:"post"}),()=>{const u=r.value,h=t.name,d=a.value,p=d&&d.components[h];if(!p)return P_(n.default,{Component:p,route:u});const g=d.props[h],y=g?g===!0?u.params:typeof g=="function"?g(u):g:null,w=zv(p,Oe({},y,e,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(d.instances[h]=null)},ref:c}));return P_(n.default,{Component:w,route:u})||w}}});function P_(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const SD=CD;function PD(t){const e=pD(t.routes,t),n=t.parseQuery||vD,s=t.stringifyQuery||A_,r=t.history,i=no(),o=no(),a=no(),c=lv(Ps);let u=Ps;Yr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Qu.bind(null,F=>""+F),d=Qu.bind(null,$O),p=Qu.bind(null,Zo);function g(F,ee){let J,ne;return Lw(F)?(J=e.getRecordMatcher(F),ne=ee):ne=F,e.addRoute(ne,J)}function y(F){const ee=e.getRecordMatcher(F);ee&&e.removeRoute(ee)}function T(){return e.getRoutes().map(F=>F.record)}function w(F){return!!e.getRecordMatcher(F)}function O(F,ee){if(ee=Oe({},ee||c.value),typeof F=="string"){const P=Yu(n,F,ee.path),U=e.resolve({path:P.path},ee),j=r.createHref(P.fullPath);return Oe(P,U,{params:p(U.params),hash:Zo(P.hash),redirectedFrom:void 0,href:j})}let J;if(F.path!=null)J=Oe({},F,{path:Yu(n,F.path,ee.path).path});else{const P=Oe({},F.params);for(const U in P)P[U]==null&&delete P[U];J=Oe({},F,{params:d(P)}),ee.params=d(ee.params)}const ne=e.resolve(J,ee),ke=F.hash||"";ne.params=h(p(ne.params));const E=qO(s,Oe({},F,{hash:FO(ke),path:ne.path})),I=r.createHref(E);return Oe({fullPath:E,hash:ke,query:s===A_?ED(F.query):F.query||{}},ne,{redirectedFrom:void 0,href:I})}function D(F){return typeof F=="string"?Yu(n,F,c.value.path):Oe({},F)}function x(F,ee){if(u!==F)return Ai(8,{from:ee,to:F})}function V(F){return b(F)}function Z(F){return V(Oe(D(F),{replace:!0}))}function se(F){const ee=F.matched[F.matched.length-1];if(ee&&ee.redirect){const{redirect:J}=ee;let ne=typeof J=="function"?J(F):J;return typeof ne=="string"&&(ne=ne.includes("?")||ne.includes("#")?ne=D(ne):{path:ne},ne.params={}),Oe({query:F.query,hash:F.hash,params:ne.path!=null?{}:F.params},ne)}}function b(F,ee){const J=u=O(F),ne=c.value,ke=F.state,E=F.force,I=F.replace===!0,P=se(J);if(P)return b(Oe(D(P),{state:typeof P=="object"?Oe({},ke,P.state):ke,force:E,replace:I}),ee||J);const U=J;U.redirectedFrom=ee;let j;return!E&&WO(s,ne,J)&&(j=Ai(16,{to:U,from:ne}),cn(ne,ne,!0,!1)),(j?Promise.resolve(j):C(U,ne)).catch(B=>ns(B)?ns(B,2)?B:_n(B):Te(B,U,ne)).then(B=>{if(B){if(ns(B,2))return b(Oe({replace:I},D(B.to),{state:typeof B.to=="object"?Oe({},ke,B.to.state):ke,force:E}),ee||U)}else B=k(U,ne,!0,I,ke);return S(U,ne,B),B})}function v(F,ee){const J=x(F,ee);return J?Promise.reject(J):Promise.resolve()}function A(F){const ee=Is.values().next().value;return ee&&typeof ee.runWithContext=="function"?ee.runWithContext(F):F()}function C(F,ee){let J;const[ne,ke,E]=kD(F,ee);J=Xu(ne.reverse(),"beforeRouteLeave",F,ee);for(const P of ne)P.leaveGuards.forEach(U=>{J.push(Os(U,F,ee))});const I=v.bind(null,F,ee);return J.push(I),Wt(J).then(()=>{J=[];for(const P of i.list())J.push(Os(P,F,ee));return J.push(I),Wt(J)}).then(()=>{J=Xu(ke,"beforeRouteUpdate",F,ee);for(const P of ke)P.updateGuards.forEach(U=>{J.push(Os(U,F,ee))});return J.push(I),Wt(J)}).then(()=>{J=[];for(const P of E)if(P.beforeEnter)if(Sn(P.beforeEnter))for(const U of P.beforeEnter)J.push(Os(U,F,ee));else J.push(Os(P.beforeEnter,F,ee));return J.push(I),Wt(J)}).then(()=>(F.matched.forEach(P=>P.enterCallbacks={}),J=Xu(E,"beforeRouteEnter",F,ee,A),J.push(I),Wt(J))).then(()=>{J=[];for(const P of o.list())J.push(Os(P,F,ee));return J.push(I),Wt(J)}).catch(P=>ns(P,8)?P:Promise.reject(P))}function S(F,ee,J){a.list().forEach(ne=>A(()=>ne(F,ee,J)))}function k(F,ee,J,ne,ke){const E=x(F,ee);if(E)return E;const I=ee===Ps,P=Yr?history.state:{};J&&(ne||I?r.replace(F.fullPath,Oe({scroll:I&&P&&P.scroll},ke)):r.push(F.fullPath,ke)),c.value=F,cn(F,ee,J,I),_n()}let R;function $t(){R||(R=r.listen((F,ee,J)=>{if(!Nn.listening)return;const ne=O(F),ke=se(ne);if(ke){b(Oe(ke,{replace:!0,force:!0}),ne).catch(ko);return}u=ne;const E=c.value;Yr&&ZO(m_(E.fullPath,J.delta),Yc()),C(ne,E).catch(I=>ns(I,12)?I:ns(I,2)?(b(Oe(D(I.to),{force:!0}),ne).then(P=>{ns(P,20)&&!J.delta&&J.type===ea.pop&&r.go(-1,!1)}).catch(ko),Promise.reject()):(J.delta&&r.go(-J.delta,!1),Te(I,ne,E))).then(I=>{I=I||k(ne,E,!1),I&&(J.delta&&!ns(I,8)?r.go(-J.delta,!1):J.type===ea.pop&&ns(I,20)&&r.go(-1,!1)),S(ne,E,I)}).catch(ko)}))}let ln=no(),nt=no(),Re;function Te(F,ee,J){_n(F);const ne=nt.list();return ne.length?ne.forEach(ke=>ke(F,ee,J)):console.error(F),Promise.reject(F)}function en(){return Re&&c.value!==Ps?Promise.resolve():new Promise((F,ee)=>{ln.add([F,ee])})}function _n(F){return Re||(Re=!F,$t(),ln.list().forEach(([ee,J])=>F?J(F):ee()),ln.reset()),F}function cn(F,ee,J,ne){const{scrollBehavior:ke}=t;if(!Yr||!ke)return Promise.resolve();const E=!J&&eD(m_(F.fullPath,0))||(ne||!J)&&history.state&&history.state.scroll||null;return dv().then(()=>ke(F,ee,E)).then(I=>I&&JO(I)).catch(I=>Te(I,F,ee))}const Qe=F=>r.go(F);let Ye;const Is=new Set,Nn={currentRoute:c,listening:!0,addRoute:g,removeRoute:y,clearRoutes:e.clearRoutes,hasRoute:w,getRoutes:T,resolve:O,options:t,push:V,replace:Z,go:Qe,back:()=>Qe(-1),forward:()=>Qe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:nt.add,isReady:en,install(F){const ee=this;F.component("RouterLink",AD),F.component("RouterView",SD),F.config.globalProperties.$router=ee,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>pt(c)}),Yr&&!Ye&&c.value===Ps&&(Ye=!0,V(r.location).catch(ke=>{}));const J={};for(const ke in Ps)Object.defineProperty(J,ke,{get:()=>c.value[ke],enumerable:!0});F.provide(Xc,ee),F.provide(Bw,ov(J)),F.provide(ed,c);const ne=F.unmount;Is.add(F),F.unmount=function(){Is.delete(F),Is.size<1&&(u=Ps,R&&R(),R=null,c.value=Ps,Ye=!1,Re=!1),ne()}}};function Wt(F){return F.reduce((ee,J)=>ee.then(()=>A(J)),Promise.resolve())}return Nn}function kD(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>Ii(u,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>Ii(u,c))||r.push(c))}return[n,s,r]}function Jc(){return pn(Xc)}/**
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
 */const ND=new Map,OD={activated:!1,tokenObservers:[]};function Pn(t){return ND.get(t)||Object.assign({},OD)}const k_={RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class DD{constructor(e,n,s,r,i){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=r,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=r,r>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new $o,this.pending.promise.catch(n=>{}),await xD(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new $o,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function xD(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const MD={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.","initial-throttle":"{$httpStatus} error. Attempts allowed again after {$time}",throttled:"Requests throttled due to previous {$httpStatus} error. Attempts allowed again after {$time}"},Xl=new Pi("appCheck","AppCheck",MD);function $w(t){if(!Pn(t).activated)throw Xl.create("use-before-activation",{appName:t.name})}/**
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
 */const LD="firebase-app-check-database",VD=1,td="firebase-app-check-store";let Ya=null;function FD(){return Ya||(Ya=new Promise((t,e)=>{try{const n=indexedDB.open(LD,VD);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var r;e(Xl.create("storage-open",{originalErrorMessage:(r=s.target.error)===null||r===void 0?void 0:r.message}))},n.onupgradeneeded=s=>{const r=s.target.result;switch(s.oldVersion){case 0:r.createObjectStore(td,{keyPath:"compositeKey"})}}}catch(n){e(Xl.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Ya)}function UD(t,e){return BD($D(t),e)}async function BD(t,e){const s=(await FD()).transaction(td,"readwrite"),i=s.objectStore(td).put({compositeKey:t,value:e});return new Promise((o,a)=>{i.onsuccess=c=>{o()},s.onerror=c=>{var u;a(Xl.create("storage-set",{originalErrorMessage:(u=c.target.error)===null||u===void 0?void 0:u.message}))}})}function $D(t){return`${t.options.appId}-${t.name}`}/**
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
 */const nd=new oa("@firebase/app-check");function N_(t,e){return rE()?UD(t,e).catch(n=>{nd.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
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
 */const jD={error:"UNKNOWN_ERROR"};function HD(t){return Ac.encodeString(JSON.stringify(t),!1)}async function sd(t,e=!1,n=!1){const s=t.app;$w(s);const r=Pn(s);let i=r.token,o;if(i&&!go(i)&&(r.token=void 0,i=void 0),!i){const u=await r.cachedTokenPromise;u&&(go(u)?i=u:await N_(s,void 0))}if(!e&&i&&go(i))return{token:i.token};let a=!1;try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),a=!0),i=await Pn(s).exchangeTokenPromise}catch(u){u.code==="appCheck/throttled"||u.code==="appCheck/initial-throttle"?nd.warn(u.message):n&&nd.error(u),o=u}let c;return i?o?go(i)?c={token:i.token,internalError:o}:c=D_(o):(c={token:i.token},r.token=i,await N_(s,i)):c=D_(o),a&&KD(s,c),c}async function qD(t){const e=t.app;$w(e);const{provider:n}=Pn(e);{const{token:s}=await n.getToken();return{token:s}}}function WD(t,e,n,s){const{app:r}=t,i=Pn(r),o={next:n,error:s,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&go(i.token)){const a=i.token;Promise.resolve().then(()=>{n({token:a.token}),O_(t)}).catch(()=>{})}i.cachedTokenPromise.then(()=>O_(t))}function jw(t,e){const n=Pn(t),s=n.tokenObservers.filter(r=>r.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function O_(t){const{app:e}=t,n=Pn(e);let s=n.tokenRefresher;s||(s=zD(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function zD(t){const{app:e}=t;return new DD(async()=>{const n=Pn(e);let s;if(n.token?s=await sd(t,!0):s=await sd(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=Pn(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const r=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,r),Math.max(0,s-Date.now())}else return 0},k_.RETRIAL_MIN_WAIT,k_.RETRIAL_MAX_WAIT)}function KD(t,e){const n=Pn(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function go(t){return t.expireTimeMillis-Date.now()>0}function D_(t){return{token:HD(jD),error:t}}/**
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
 */class GD{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=Pn(this.app);for(const n of e)jw(this.app,n.next);return Promise.resolve()}}function QD(t,e){return new GD(t,e)}function YD(t){return{getToken:e=>sd(t,e),getLimitedUseToken:()=>qD(t),addTokenListener:e=>WD(t,"INTERNAL",e),removeTokenListener:e=>jw(t.app,e)}}const XD="@firebase/app-check",JD="0.10.0",ZD="app-check",x_="app-check-internal";function ex(){Kn(new bn(ZD,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return QD(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(x_).initialize()})),Kn(new bn(x_,t=>{const e=t.getProvider("app-check").getImmediate();return YD(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),on(XD,JD)}ex();const Hw=Symbol("firebaseApp");function Zc(t){return Hv()&&pn(Hw,null)||zd(t)}const Fn=()=>{};function $f(t,e){return e.split(".").reduce((n,s)=>n&&n[s],t)}function tx(t,e,n){const s=(""+e).split("."),r=s.pop(),i=s.reduce((o,a)=>o&&o[a],t);if(i!=null)return Array.isArray(i)?i.splice(Number(r),1,n):i[r]=n}function Mr(t){return!!t&&typeof t=="object"}const nx=Object.prototype;function sx(t){return Mr(t)&&Object.getPrototypeOf(t)===nx}function jf(t){return Mr(t)&&t.type==="document"}function rx(t){return Mr(t)&&t.type==="collection"}function ix(t){return jf(t)||rx(t)}function ox(t){return Mr(t)&&t.type==="query"}function ax(t){return Mr(t)&&"ref"in t}function lx(t){return Mr(t)&&typeof t.bucket=="string"}function cx(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}const ux=Symbol.for("v-scx");function hx(){return!!pn(ux,0)}const Xa=new WeakMap;function dx(t,e){if(!Xa.has(t)){const n=mA(!0);Xa.set(t,n);const{unmount:s}=e;e.unmount=()=>{s.call(e),n.stop(),Xa.delete(t)}}return Xa.get(t)}const qw=new WeakMap;function Ww(t){return qw.get(Zc(t))}const Ja=new WeakMap;function zw(t){const e=Zc(t);if(!Ja.has(e)){let n;const r=[new Promise(i=>{n=i}),i=>{Ja.set(e,i),n(i.value)}];Ja.set(e,r)}return Ja.get(e)}function Kw(t){const e=zw(t);return Array.isArray(e)?e[0]:Promise.resolve(e.value)}function fx(t,e){LE(e,n=>{const s=zw();t.value=n,Array.isArray(s)&&s[1](t)})}var M_={};const L_="@firebase/database",V_="1.0.19";/**
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
 */let Gw="";function px(t){Gw=t}/**
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
 */class mx{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Tt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:jo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class gx{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ws(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Qw=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new mx(e)}}catch{}return new gx},gr=Qw("localStorage"),_x=Qw("sessionStorage");/**
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
 */const ui=new oa("@firebase/database"),yx=function(){let t=1;return function(){return t++}}(),Yw=function(t){const e=Xb(t),n=new zb;n.update(e);const s=n.digest();return Ac.encodeByteArray(s)},ga=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ga.apply(null,s):typeof s=="object"?e+=Tt(s):e+=s,e+=" "}return e};let Oo=null,F_=!0;const vx=function(t,e){X(!0,"Can't turn on custom loggers persistently."),ui.logLevel=ve.VERBOSE,Oo=ui.log.bind(ui)},xt=function(...t){if(F_===!0&&(F_=!1,Oo===null&&_x.get("logging_enabled")===!0&&vx()),Oo){const e=ga.apply(null,t);Oo(e)}},_a=function(t){return function(...e){xt(t,...e)}},rd=function(...t){const e="FIREBASE INTERNAL ERROR: "+ga(...t);ui.error(e)},br=function(...t){const e=`FIREBASE FATAL ERROR: ${ga(...t)}`;throw ui.error(e),new Error(e)},an=function(...t){const e="FIREBASE WARNING: "+ga(...t);ui.warn(e)},Ex=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&an("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Xw=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Tx=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ri="[MIN_NAME]",Cr="[MAX_NAME]",Li=function(t,e){if(t===e)return 0;if(t===Ri||e===Cr)return-1;if(e===Ri||t===Cr)return 1;{const n=U_(t),s=U_(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},wx=function(t,e){return t===e?0:t<e?-1:1},so=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Tt(e))},Hf=function(t){if(typeof t!="object"||t===null)return Tt(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Tt(e[s]),n+=":",n+=Hf(t[e[s]]);return n+="}",n},Jw=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let r=0;r<n;r+=e)r+e>n?s.push(t.substring(r,n)):s.push(t.substring(r,r+e));return s};function gn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Zw=function(t){X(!Xw(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let r,i,o,a,c;t===0?(i=0,o=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),i=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-s-n))));const u=[];for(c=n;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(r?1:0),u.reverse();const h=u.join("");let d="";for(c=0;c<64;c+=8){let p=parseInt(h.substr(c,8),2).toString(16);p.length===1&&(p="0"+p),d=d+p}return d.toLowerCase()},Ix=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Ax=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},Rx=new RegExp("^-?(0*)\\d{1,10}$"),bx=-2147483648,Cx=2147483647,U_=function(t){if(Rx.test(t)){const e=Number(t);if(e>=bx&&e<=Cx)return e}return null},ya=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw an("Exception was thrown by user callback.",n),e},Math.floor(0))}},Sx=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Do=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Px{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Kt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){an(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class kx{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(xt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',an(e)}}/**
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
 */const qf="5",eI="v",tI="s",nI="r",sI="f",rI=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,iI="ls",oI="p",id="ac",aI="websocket",lI="long_polling";/**
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
 */class Nx{constructor(e,n,s,r,i=!1,o="",a=!1,c=!1,u=null){this.secure=n,this.namespace=s,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=gr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&gr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Ox(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function cI(t,e,n){X(typeof e=="string","typeof type must == string"),X(typeof n=="object","typeof params must == object");let s;if(e===aI)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===lI)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Ox(t)&&(n.ns=t.namespace);const r=[];return gn(n,(i,o)=>{r.push(i+"="+o)}),s+r.join("&")}/**
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
 */class Dx{constructor(){this.counters_={}}incrementCounter(e,n=1){ws(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Ab(this.counters_)}}/**
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
 */const Ju={},Zu={};function Wf(t){const e=t.toString();return Ju[e]||(Ju[e]=new Dx),Ju[e]}function xx(t,e){const n=t.toString();return Zu[n]||(Zu[n]=e()),Zu[n]}/**
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
 */class Mx{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<s.length;++r)s[r]&&ya(()=>{this.onMessage_(s[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const B_="start",Lx="close",Vx="pLPCommand",Fx="pRTLPCB",uI="id",hI="pw",dI="ser",Ux="cb",Bx="seg",$x="ts",jx="d",Hx="dframe",fI=1870,pI=30,qx=fI-pI,Wx=25e3,zx=3e4;class Jr{constructor(e,n,s,r,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=_a(e),this.stats_=Wf(n),this.urlFn=c=>(this.appCheckToken&&(c[id]=this.appCheckToken),cI(n,lI,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Mx(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(zx)),Tx(()=>{if(this.isClosed_)return;this.scriptTagHolder=new zf((...i)=>{const[o,a,c,u,h]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===B_)this.id=a,this.password=c;else if(o===Lx)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[B_]="t",s[dI]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Ux]=this.scriptTagHolder.uniqueCallbackIdentifier),s[eI]=qf,this.transportSessionId&&(s[tI]=this.transportSessionId),this.lastSessionId&&(s[iI]=this.lastSessionId),this.applicationId&&(s[oI]=this.applicationId),this.appCheckToken&&(s[id]=this.appCheckToken),typeof location<"u"&&location.hostname&&rI.test(location.hostname)&&(s[nI]=sI);const r=this.urlFn(s);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Jr.forceAllow_=!0}static forceDisallow(){Jr.forceDisallow_=!0}static isAvailable(){return Jr.forceAllow_?!0:!Jr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Ix()&&!Ax()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Tt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Yv(n),r=Jw(s,qx);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Hx]="t",s[uI]=e,s[hI]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Tt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class zf{constructor(e,n,s,r){this.onDisconnect=s,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=yx(),window[Vx+this.uniqueCallbackIdentifier]=e,window[Fx+this.uniqueCallbackIdentifier]=n,this.myIFrame=zf.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){xt("frame writing exception"),a.stack&&xt(a.stack),xt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||xt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[uI]=this.myID,e[hI]=this.myPW,e[dI]=this.currentSerial;let n=this.urlFn(e),s="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+pI+s.length<=fI;){const o=this.pendingSegs.shift();s=s+"&"+Bx+r+"="+o.seg+"&"+$x+r+"="+o.ts+"&"+jx+r+"="+o.d,r++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(s,Math.floor(Wx)),i=()=>{clearTimeout(r),s()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const r=s.readyState;(!r||r==="loaded"||r==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{xt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const Kx=16384,Gx=45e3;let Jl=null;typeof MozWebSocket<"u"?Jl=MozWebSocket:typeof WebSocket<"u"&&(Jl=WebSocket);class vn{constructor(e,n,s,r,i,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=_a(this.connId),this.stats_=Wf(n),this.connURL=vn.connectionURL_(n,o,a,r,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,r,i){const o={};return o[eI]=qf,typeof location<"u"&&location.hostname&&rI.test(location.hostname)&&(o[nI]=sI),n&&(o[tI]=n),s&&(o[iI]=s),r&&(o[id]=r),i&&(o[oI]=i),cI(e,aI,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,gr.set("previous_websocket_failure",!0);try{let s;Fb(),this.mySock=new Jl(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){vn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Jl!==null&&!vn.forceDisallow_}static previouslyFailed(){return gr.isInMemoryStorage||gr.get("previous_websocket_failure")===!0}markConnectionHealthy(){gr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=jo(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(X(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Tt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Jw(n,Kx);s.length>1&&this.sendString_(String(s.length));for(let r=0;r<s.length;r++)this.sendString_(s[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Gx))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}vn.responsesRequiredToBeHealthy=2;vn.healthyTimeout=3e4;/**
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
 */class ta{static get ALL_TRANSPORTS(){return[Jr,vn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=vn&&vn.isAvailable();let s=n&&!vn.previouslyFailed();if(e.webSocketOnly&&(n||an("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[vn];else{const r=this.transports_=[];for(const i of ta.ALL_TRANSPORTS)i&&i.isAvailable()&&r.push(i);ta.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ta.globalTransportInitialized_=!1;/**
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
 */const Qx=6e4,Yx=5e3,Xx=10*1024,Jx=100*1024,eh="t",$_="d",Zx="s",j_="r",eM="e",H_="o",q_="a",W_="n",z_="p",tM="h";class nM{constructor(e,n,s,r,i,o,a,c,u,h){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=_a("c:"+this.id+":"),this.transportManager_=new ta(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Do(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Jx?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Xx?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(eh in e){const n=e[eh];n===q_?this.upgradeIfSecondaryHealthy_():n===j_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===H_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=so("t",e),s=so("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:z_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:q_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:W_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=so("t",e),s=so("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=so(eh,e);if($_ in e){const s=e[$_];if(n===tM){const r=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===W_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Zx?this.onConnectionShutdown_(s):n===j_?this.onReset_(s):n===eM?rd("Server Error: "+s):n===H_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):rd("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),qf!==s&&an("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Do(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Qx))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Do(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Yx))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:z_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(gr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class mI{put(e,n,s,r){}merge(e,n,s,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class gI{constructor(e){this.allowedEvents_=e,this.listeners_={},X(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let r=0;r<s.length;r++)s[r].callback.apply(s[r].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const r=this.getInitialEvent(e);r&&n.apply(s,r)}off(e,n,s){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===n&&(!s||s===r[i].context)){r.splice(i,1);return}}validateEventType_(e){X(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Zl extends gI{static getInstance(){return new Zl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Hd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return X(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const K_=32,G_=768;class ze{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[s]=this.pieces_[r],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Ue(){return new ze("")}function Se(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Zs(t){return t.pieces_.length-t.pieceNum_}function We(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ze(t.pieces_,e)}function _I(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function sM(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function yI(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function vI(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ze(e,0)}function ft(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ze)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let r=0;r<s.length;r++)s[r].length>0&&n.push(s[r])}return new ze(n,0)}function Ae(t){return t.pieceNum_>=t.pieces_.length}function dn(t,e){const n=Se(t),s=Se(e);if(n===null)return e;if(n===s)return dn(We(t),We(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function EI(t,e){if(Zs(t)!==Zs(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Tn(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Zs(t)>Zs(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class rM{constructor(e,n){this.errorPrefix_=n,this.parts_=yI(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=bc(this.parts_[s]);TI(this)}}function iM(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=bc(e),TI(t)}function oM(t){const e=t.parts_.pop();t.byteLength_-=bc(e),t.parts_.length>0&&(t.byteLength_-=1)}function TI(t){if(t.byteLength_>G_)throw new Error(t.errorPrefix_+"has a key path longer than "+G_+" bytes ("+t.byteLength_+").");if(t.parts_.length>K_)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+K_+") or object contains a cycle "+pr(t))}function pr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Kf extends gI{static getInstance(){return new Kf}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return X(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ro=1e3,aM=60*5*1e3,Q_=30*1e3,lM=1.3,cM=3e4,uM="server_kill",Y_=3;class ps extends mI{constructor(e,n,s,r,i,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=ps.nextPersistentConnectionId_++,this.log_=_a("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ro,this.maxReconnectDelay_=aM,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Kf.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Zl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const r=++this.requestNumber_,i={r,a:e,b:n};this.log_(Tt(i)),X(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),s&&(this.requestCBHash_[r]=s)}get(e){this.initConnection_();const n=new $o,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,s,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),X(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),X(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:s};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+s+" for "+r);const i={p:s},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const c=a.d,u=a.s;ps.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(r))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(s,r),e.onComplete&&e.onComplete(u,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ws(e,"w")){const s=mi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();an(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Wb(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Q_)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=qb(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,r=>{const i=r.s,o=r.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+r),X(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,r)&&this.connected_&&this.sendUnlisten_(s,r,e._queryObject,n)}sendUnlisten_(e,n,s,r){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";r&&(i.q=s,i.t=r),this.sendRequest(o,i)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,r){const i={p:n,d:s};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,s,r){this.putInternal("p",e,n,s,r)}merge(e,n,s,r){this.putInternal("m",e,n,s,r)}putInternal(e,n,s,r,i){this.initConnection_();const o={p:n,d:s};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const i=s.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Tt(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):rd("Unrecognized action received from server: "+Tt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){X(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ro,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ro,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>cM&&(this.reconnectDelay_=ro),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*lM)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+ps.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},u=function(d){X(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:c,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,p]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?xt("getToken() completed but was canceled"):(xt("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=p&&p.token,a=new nM(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,g=>{an(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(uM)},i))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&an(d),c())}}}interrupt(e){xt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){xt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ih(this.interruptReasons_)&&(this.reconnectDelay_=ro,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(i=>Hf(i)).join("$"):s="default";const r=this.removeListen_(e,s);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const s=new ze(e).toString();let r;if(this.listens.has(s)){const i=this.listens.get(s);r=i.get(n),i.delete(n),i.size===0&&this.listens.delete(s)}else r=void 0;return r}onAuthRevoked_(e,n){xt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Y_&&(this.reconnectDelay_=Q_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){xt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Y_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Gw.replace(/\./g,"-")]=1,Hd()?e["framework.cordova"]=1:sE()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Zl.getInstance().currentlyOnline();return Ih(this.interruptReasons_)&&e}}ps.nextPersistentConnectionId_=0;ps.nextConnectionId_=0;/**
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
 */class Pe{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Pe(e,n)}}/**
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
 */class eu{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new Pe(Ri,e),r=new Pe(Ri,n);return this.compare(s,r)!==0}minPost(){return Pe.MIN}}/**
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
 */let Za;class wI extends eu{static get __EMPTY_NODE(){return Za}static set __EMPTY_NODE(e){Za=e}compare(e,n){return Li(e.name,n.name)}isDefinedOn(e){throw Ci("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Pe.MIN}maxPost(){return new Pe(Cr,Za)}makePost(e,n){return X(typeof e=="string","KeyIndex indexValue must always be a string."),new Pe(e,Za)}toString(){return".key"}}const hi=new wI;/**
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
 */class el{constructor(e,n,s,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ht{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??ht.RED,this.left=r??Yt.EMPTY_NODE,this.right=i??Yt.EMPTY_NODE}copy(e,n,s,r,i){return new ht(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return i<0?r=r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Yt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,r;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Yt.EMPTY_NODE;r=s.right.min_(),s=s.copy(r.key,r.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ht.RED=!0;ht.BLACK=!1;class hM{copy(e,n,s,r,i){return this}insert(e,n,s){return new ht(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Yt{constructor(e,n=Yt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Yt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ht.BLACK,null,null))}remove(e){return new Yt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ht.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,r=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return r?r.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(r=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new el(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new el(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new el(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new el(this.root_,null,this.comparator_,!0,e)}}Yt.EMPTY_NODE=new hM;/**
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
 */function dM(t,e){return Li(t.name,e.name)}function Gf(t,e){return Li(t,e)}/**
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
 */let od;function fM(t){od=t}const II=function(t){return typeof t=="number"?"number:"+Zw(t):"string:"+t},AI=function(t){if(t.isLeafNode()){const e=t.val();X(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ws(e,".sv"),"Priority must be a string or number.")}else X(t===od||t.isEmpty(),"priority of unexpected type.");X(t===od||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let X_;class ct{static set __childrenNodeConstructor(e){X_=e}static get __childrenNodeConstructor(){return X_}constructor(e,n=ct.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,X(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),AI(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ct(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ct.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ae(e)?this:Se(e)===".priority"?this.priorityNode_:ct.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ct.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=Se(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(X(s!==".priority"||Zs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ct.__childrenNodeConstructor.EMPTY_NODE.updateChild(We(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+II(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Zw(this.value_):e+=this.value_,this.lazyHash_=Yw(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ct.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ct.__childrenNodeConstructor?-1:(X(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,r=ct.VALUE_TYPE_ORDER.indexOf(n),i=ct.VALUE_TYPE_ORDER.indexOf(s);return X(r>=0,"Unknown leaf type: "+n),X(i>=0,"Unknown leaf type: "+s),r===i?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ct.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let RI,bI;function pM(t){RI=t}function mM(t){bI=t}class gM extends eu{compare(e,n){const s=e.node.getPriority(),r=n.node.getPriority(),i=s.compareTo(r);return i===0?Li(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Pe.MIN}maxPost(){return new Pe(Cr,new ct("[PRIORITY-POST]",bI))}makePost(e,n){const s=RI(e);return new Pe(n,new ct("[PRIORITY-POST]",s))}toString(){return".priority"}}const Ft=new gM;/**
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
 */const _M=Math.log(2);class yM{constructor(e){const n=i=>parseInt(Math.log(i)/_M,10),s=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=s(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ec=function(t,e,n,s){t.sort(e);const r=function(c,u){const h=u-c;let d,p;if(h===0)return null;if(h===1)return d=t[c],p=n?n(d):d,new ht(p,d.node,ht.BLACK,null,null);{const g=parseInt(h/2,10)+c,y=r(c,g),T=r(g+1,u);return d=t[g],p=n?n(d):d,new ht(p,d.node,ht.BLACK,y,T)}},i=function(c){let u=null,h=null,d=t.length;const p=function(y,T){const w=d-y,O=d;d-=y;const D=r(w+1,O),x=t[w],V=n?n(x):x;g(new ht(V,x.node,T,null,D))},g=function(y){u?(u.left=y,u=y):(h=y,u=y)};for(let y=0;y<c.count;++y){const T=c.nextBitIsOne(),w=Math.pow(2,c.count-(y+1));T?p(w,ht.BLACK):(p(w,ht.BLACK),p(w,ht.RED))}return h},o=new yM(t.length),a=i(o);return new Yt(s||e,a)};/**
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
 */let th;const Hr={};class hs{static get Default(){return X(Hr&&Ft,"ChildrenNode.ts has not been loaded"),th=th||new hs({".priority":Hr},{".priority":Ft}),th}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=mi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Yt?n:null}hasIndex(e){return ws(this.indexSet_,e.toString())}addIndex(e,n){X(e!==hi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let r=!1;const i=n.getIterator(Pe.Wrap);let o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),s.push(o),o=i.getNext();let a;r?a=ec(s,e.getCompare()):a=Hr;const c=e.toString(),u=Object.assign({},this.indexSet_);u[c]=e;const h=Object.assign({},this.indexes_);return h[c]=a,new hs(h,u)}addToIndexes(e,n){const s=Nl(this.indexes_,(r,i)=>{const o=mi(this.indexSet_,i);if(X(o,"Missing index implementation for "+i),r===Hr)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(Pe.Wrap);let u=c.getNext();for(;u;)u.name!==e.name&&a.push(u),u=c.getNext();return a.push(e),ec(a,o.getCompare())}else return Hr;else{const a=n.get(e.name);let c=r;return a&&(c=c.remove(new Pe(e.name,a))),c.insert(e,e.node)}});return new hs(s,this.indexSet_)}removeFromIndexes(e,n){const s=Nl(this.indexes_,r=>{if(r===Hr)return r;{const i=n.get(e.name);return i?r.remove(new Pe(e.name,i)):r}});return new hs(s,this.indexSet_)}}/**
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
 */let io;class Le{static get EMPTY_NODE(){return io||(io=new Le(new Yt(Gf),null,hs.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&AI(this.priorityNode_),this.children_.isEmpty()&&X(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||io}updatePriority(e){return this.children_.isEmpty()?this:new Le(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?io:n}}getChild(e){const n=Se(e);return n===null?this:this.getImmediateChild(n).getChild(We(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(X(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new Pe(e,n);let r,i;n.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(s,this.children_)):(r=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(s,this.children_));const o=r.isEmpty()?io:this.priorityNode_;return new Le(r,o,i)}}updateChild(e,n){const s=Se(e);if(s===null)return n;{X(Se(e)!==".priority"||Zs(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(s).updateChild(We(e),n);return this.updateImmediateChild(s,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,r=0,i=!0;if(this.forEachChild(Ft,(o,a)=>{n[o]=a.val(e),s++,i&&Le.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1}),!e&&i&&r<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+II(this.getPriority().val())+":"),this.forEachChild(Ft,(n,s)=>{const r=s.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":Yw(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const r=this.resolveIndex_(s);if(r){const i=r.getPredecessorKey(new Pe(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Pe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Pe(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,Pe.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)<0;)r.getNext(),i=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,Pe.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)>0;)r.getNext(),i=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===va?-1:0}withIndex(e){if(e===hi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Le(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===hi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Ft),r=n.getIterator(Ft);let i=s.getNext(),o=r.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=s.getNext(),o=r.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===hi?null:this.indexMap_.get(e.toString())}}Le.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class vM extends Le{constructor(){super(new Yt(Gf),Le.EMPTY_NODE,hs.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Le.EMPTY_NODE}isEmpty(){return!1}}const va=new vM;Object.defineProperties(Pe,{MIN:{value:new Pe(Ri,Le.EMPTY_NODE)},MAX:{value:new Pe(Cr,va)}});wI.__EMPTY_NODE=Le.EMPTY_NODE;ct.__childrenNodeConstructor=Le;fM(va);mM(va);/**
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
 */const EM=!0;function Mt(t,e=null){if(t===null)return Le.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),X(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ct(n,Mt(e))}if(!(t instanceof Array)&&EM){const n=[];let s=!1;if(gn(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=Mt(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new Pe(o,c)))}}),n.length===0)return Le.EMPTY_NODE;const i=ec(n,dM,o=>o.name,Gf);if(s){const o=ec(n,Ft.getCompare());return new Le(i,Mt(e),new hs({".priority":o},{".priority":Ft}))}else return new Le(i,Mt(e),hs.Default)}else{let n=Le.EMPTY_NODE;return gn(t,(s,r)=>{if(ws(t,s)&&s.substring(0,1)!=="."){const i=Mt(r);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(s,i))}}),n.updatePriority(Mt(e))}}pM(Mt);/**
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
 */class TM extends eu{constructor(e){super(),this.indexPath_=e,X(!Ae(e)&&Se(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),r=this.extractChild(n.node),i=s.compareTo(r);return i===0?Li(e.name,n.name):i}makePost(e,n){const s=Mt(e),r=Le.EMPTY_NODE.updateChild(this.indexPath_,s);return new Pe(n,r)}maxPost(){const e=Le.EMPTY_NODE.updateChild(this.indexPath_,va);return new Pe(Cr,e)}toString(){return yI(this.indexPath_,0).join("/")}}/**
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
 */class wM extends eu{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Li(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Pe.MIN}maxPost(){return Pe.MAX}makePost(e,n){const s=Mt(e);return new Pe(n,s)}toString(){return".value"}}const IM=new wM;/**
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
 */function AM(t){return{type:"value",snapshotNode:t}}function RM(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function bM(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function J_(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function CM(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Qf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ft}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return X(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return X(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ri}hasEnd(){return this.endSet_}getIndexEndValue(){return X(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return X(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Cr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return X(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ft}copy(){const e=new Qf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Z_(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ft?n="$priority":t.index_===IM?n="$value":t.index_===hi?n="$key":(X(t.index_ instanceof TM,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Tt(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Tt(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Tt(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Tt(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Tt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function ey(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ft&&(e.i=t.index_.toString()),e}/**
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
 */class tc extends mI{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(X(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=r,this.log_=_a("p:rest:"),this.listens_={}}listen(e,n,s,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=tc.getListenId_(e,s),a={};this.listens_[o]=a;const c=Z_(e._queryParams);this.restRequest_(i+".json",c,(u,h)=>{let d=h;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(i,d,!1,s),mi(this.listens_,o)===a){let p;u?u===401?p="permission_denied":p="rest_error:"+u:p="ok",r(p,null)}})}unlisten(e,n){const s=tc.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Z_(e._queryParams),s=e._path.toString(),r=new $o;return this.restRequest_(s+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(s,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(n.auth=r.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ki(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=jo(a.responseText)}catch{an("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&an("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class SM{constructor(){this.rootNode_=Le.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function nc(){return{value:null,children:new Map}}function CI(t,e,n){if(Ae(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=Se(e);t.children.has(s)||t.children.set(s,nc());const r=t.children.get(s);e=We(e),CI(r,e,n)}}function ad(t,e,n){t.value!==null?n(e,t.value):PM(t,(s,r)=>{const i=new ze(e.toString()+"/"+s);ad(r,i,n)})}function PM(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class kM{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&gn(this.last_,(s,r)=>{n[s]=n[s]-r}),this.last_=e,n}}/**
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
 */const ty=10*1e3,NM=30*1e3,OM=5*60*1e3;class DM{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new kM(e);const s=ty+(NM-ty)*Math.random();Do(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;gn(e,(r,i)=>{i>0&&ws(this.statsToReport_,r)&&(n[r]=i,s=!0)}),s&&this.server_.reportStats(n),Do(this.reportStats_.bind(this),Math.floor(Math.random()*2*OM))}}/**
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
 */var Un;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Un||(Un={}));function SI(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function PI(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function kI(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class sc{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Un.ACK_USER_WRITE,this.source=SI()}operationForChild(e){if(Ae(this.path)){if(this.affectedTree.value!=null)return X(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ze(e));return new sc(Ue(),n,this.revert)}}else return X(Se(this.path)===e,"operationForChild called for unrelated child."),new sc(We(this.path),this.affectedTree,this.revert)}}/**
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
 */class Sr{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Un.OVERWRITE}operationForChild(e){return Ae(this.path)?new Sr(this.source,Ue(),this.snap.getImmediateChild(e)):new Sr(this.source,We(this.path),this.snap)}}/**
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
 */class na{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Un.MERGE}operationForChild(e){if(Ae(this.path)){const n=this.children.subtree(new ze(e));return n.isEmpty()?null:n.value?new Sr(this.source,Ue(),n.value):new na(this.source,Ue(),n)}else return X(Se(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new na(this.source,We(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Yf{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ae(e))return this.isFullyInitialized()&&!this.filtered_;const n=Se(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function xM(t,e,n,s){const r=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(CM(o.childName,o.snapshotNode))}),oo(t,r,"child_removed",e,s,n),oo(t,r,"child_added",e,s,n),oo(t,r,"child_moved",i,s,n),oo(t,r,"child_changed",e,s,n),oo(t,r,"value",e,s,n),r}function oo(t,e,n,s,r,i){const o=s.filter(a=>a.type===n);o.sort((a,c)=>LM(t,a,c)),o.forEach(a=>{const c=MM(t,a,i);r.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(c,t.query_))})})}function MM(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function LM(t,e,n){if(e.childName==null||n.childName==null)throw Ci("Should only compare child_ events.");const s=new Pe(e.childName,e.snapshotNode),r=new Pe(n.childName,n.snapshotNode);return t.index_.compare(s,r)}/**
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
 */function NI(t,e){return{eventCache:t,serverCache:e}}function xo(t,e,n,s){return NI(new Yf(e,n,s),t.serverCache)}function OI(t,e,n,s){return NI(t.eventCache,new Yf(e,n,s))}function ld(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Pr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let nh;const VM=()=>(nh||(nh=new Yt(wx)),nh);class qe{static fromObject(e){let n=new qe(null);return gn(e,(s,r)=>{n=n.set(new ze(s),r)}),n}constructor(e,n=VM()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Ue(),value:this.value};if(Ae(e))return null;{const s=Se(e),r=this.children.get(s);if(r!==null){const i=r.findRootMostMatchingPathAndValue(We(e),n);return i!=null?{path:ft(new ze(s),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ae(e))return this;{const n=Se(e),s=this.children.get(n);return s!==null?s.subtree(We(e)):new qe(null)}}set(e,n){if(Ae(e))return new qe(n,this.children);{const s=Se(e),i=(this.children.get(s)||new qe(null)).set(We(e),n),o=this.children.insert(s,i);return new qe(this.value,o)}}remove(e){if(Ae(e))return this.children.isEmpty()?new qe(null):new qe(null,this.children);{const n=Se(e),s=this.children.get(n);if(s){const r=s.remove(We(e));let i;return r.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,r),this.value===null&&i.isEmpty()?new qe(null):new qe(this.value,i)}else return this}}get(e){if(Ae(e))return this.value;{const n=Se(e),s=this.children.get(n);return s?s.get(We(e)):null}}setTree(e,n){if(Ae(e))return n;{const s=Se(e),i=(this.children.get(s)||new qe(null)).setTree(We(e),n);let o;return i.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,i),new qe(this.value,o)}}fold(e){return this.fold_(Ue(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((r,i)=>{s[r]=i.fold_(ft(e,r),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Ue(),n)}findOnPath_(e,n,s){const r=this.value?s(n,this.value):!1;if(r)return r;if(Ae(e))return null;{const i=Se(e),o=this.children.get(i);return o?o.findOnPath_(We(e),ft(n,i),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Ue(),n)}foreachOnPath_(e,n,s){if(Ae(e))return this;{this.value&&s(n,this.value);const r=Se(e),i=this.children.get(r);return i?i.foreachOnPath_(We(e),ft(n,r),s):new qe(null)}}foreach(e){this.foreach_(Ue(),e)}foreach_(e,n){this.children.inorderTraversal((s,r)=>{r.foreach_(ft(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class Rn{constructor(e){this.writeTree_=e}static empty(){return new Rn(new qe(null))}}function Mo(t,e,n){if(Ae(e))return new Rn(new qe(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const r=s.path;let i=s.value;const o=dn(r,e);return i=i.updateChild(o,n),new Rn(t.writeTree_.set(r,i))}else{const r=new qe(n),i=t.writeTree_.setTree(e,r);return new Rn(i)}}}function ny(t,e,n){let s=t;return gn(n,(r,i)=>{s=Mo(s,ft(e,r),i)}),s}function sy(t,e){if(Ae(e))return Rn.empty();{const n=t.writeTree_.setTree(e,new qe(null));return new Rn(n)}}function cd(t,e){return Lr(t,e)!=null}function Lr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(dn(n.path,e)):null}function ry(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ft,(s,r)=>{e.push(new Pe(s,r))}):t.writeTree_.children.inorderTraversal((s,r)=>{r.value!=null&&e.push(new Pe(s,r.value))}),e}function qs(t,e){if(Ae(e))return t;{const n=Lr(t,e);return n!=null?new Rn(new qe(n)):new Rn(t.writeTree_.subtree(e))}}function ud(t){return t.writeTree_.isEmpty()}function bi(t,e){return DI(Ue(),t.writeTree_,e)}function DI(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((r,i)=>{r===".priority"?(X(i.value!==null,"Priority writes must always be leaf nodes"),s=i.value):n=DI(ft(t,r),i,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(ft(t,".priority"),s)),n}}/**
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
 */function xI(t,e){return UI(e,t)}function FM(t,e,n,s,r){X(s>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:r}),r&&(t.visibleWrites=Mo(t.visibleWrites,e,n)),t.lastWriteId=s}function UM(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function BM(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);X(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let r=s.visible,i=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&$M(a,s.path)?r=!1:Tn(s.path,a.path)&&(i=!0)),o--}if(r){if(i)return jM(t),!0;if(s.snap)t.visibleWrites=sy(t.visibleWrites,s.path);else{const a=s.children;gn(a,c=>{t.visibleWrites=sy(t.visibleWrites,ft(s.path,c))})}return!0}else return!1}function $M(t,e){if(t.snap)return Tn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Tn(ft(t.path,n),e))return!0;return!1}function jM(t){t.visibleWrites=MI(t.allWrites,HM,Ue()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function HM(t){return t.visible}function MI(t,e,n){let s=Rn.empty();for(let r=0;r<t.length;++r){const i=t[r];if(e(i)){const o=i.path;let a;if(i.snap)Tn(n,o)?(a=dn(n,o),s=Mo(s,a,i.snap)):Tn(o,n)&&(a=dn(o,n),s=Mo(s,Ue(),i.snap.getChild(a)));else if(i.children){if(Tn(n,o))a=dn(n,o),s=ny(s,a,i.children);else if(Tn(o,n))if(a=dn(o,n),Ae(a))s=ny(s,Ue(),i.children);else{const c=mi(i.children,Se(a));if(c){const u=c.getChild(We(a));s=Mo(s,Ue(),u)}}}else throw Ci("WriteRecord should have .snap or .children")}}return s}function LI(t,e,n,s,r){if(!s&&!r){const i=Lr(t.visibleWrites,e);if(i!=null)return i;{const o=qs(t.visibleWrites,e);if(ud(o))return n;if(n==null&&!cd(o,Ue()))return null;{const a=n||Le.EMPTY_NODE;return bi(o,a)}}}else{const i=qs(t.visibleWrites,e);if(!r&&ud(i))return n;if(!r&&n==null&&!cd(i,Ue()))return null;{const o=function(u){return(u.visible||r)&&(!s||!~s.indexOf(u.writeId))&&(Tn(u.path,e)||Tn(e,u.path))},a=MI(t.allWrites,o,e),c=n||Le.EMPTY_NODE;return bi(a,c)}}}function qM(t,e,n){let s=Le.EMPTY_NODE;const r=Lr(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(Ft,(i,o)=>{s=s.updateImmediateChild(i,o)}),s;if(n){const i=qs(t.visibleWrites,e);return n.forEachChild(Ft,(o,a)=>{const c=bi(qs(i,new ze(o)),a);s=s.updateImmediateChild(o,c)}),ry(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const i=qs(t.visibleWrites,e);return ry(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function WM(t,e,n,s,r){X(s||r,"Either existingEventSnap or existingServerSnap must exist");const i=ft(e,n);if(cd(t.visibleWrites,i))return null;{const o=qs(t.visibleWrites,i);return ud(o)?r.getChild(n):bi(o,r.getChild(n))}}function zM(t,e,n,s){const r=ft(e,n),i=Lr(t.visibleWrites,r);if(i!=null)return i;if(s.isCompleteForChild(n)){const o=qs(t.visibleWrites,r);return bi(o,s.getNode().getImmediateChild(n))}else return null}function KM(t,e){return Lr(t.visibleWrites,e)}function GM(t,e,n,s,r,i,o){let a;const c=qs(t.visibleWrites,e),u=Lr(c,Ue());if(u!=null)a=u;else if(n!=null)a=bi(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],d=o.getCompare(),p=i?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let g=p.getNext();for(;g&&h.length<r;)d(g,s)!==0&&h.push(g),g=p.getNext();return h}else return[]}function QM(){return{visibleWrites:Rn.empty(),allWrites:[],lastWriteId:-1}}function hd(t,e,n,s){return LI(t.writeTree,t.treePath,e,n,s)}function VI(t,e){return qM(t.writeTree,t.treePath,e)}function iy(t,e,n,s){return WM(t.writeTree,t.treePath,e,n,s)}function rc(t,e){return KM(t.writeTree,ft(t.treePath,e))}function YM(t,e,n,s,r,i){return GM(t.writeTree,t.treePath,e,n,s,r,i)}function Xf(t,e,n){return zM(t.writeTree,t.treePath,e,n)}function FI(t,e){return UI(ft(t.treePath,e),t.writeTree)}function UI(t,e){return{treePath:t,writeTree:e}}/**
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
 */class XM{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;X(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),X(s!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(s);if(r){const i=r.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(s,J_(s,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(s,bM(s,r.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(s,RM(s,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(s,J_(s,e.snapshotNode,r.oldSnap));else throw Ci("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class JM{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const BI=new JM;class Jf{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Yf(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Xf(this.writes_,e,s)}}getChildAfterChild(e,n,s){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Pr(this.viewCache_),i=YM(this.writes_,r,n,1,s,e);return i.length===0?null:i[0]}}function ZM(t,e){X(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),X(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function eL(t,e,n,s,r){const i=new XM;let o,a;if(n.type===Un.OVERWRITE){const u=n;u.source.fromUser?o=dd(t,e,u.path,u.snap,s,r,i):(X(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!Ae(u.path),o=ic(t,e,u.path,u.snap,s,r,a,i))}else if(n.type===Un.MERGE){const u=n;u.source.fromUser?o=nL(t,e,u.path,u.children,s,r,i):(X(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=fd(t,e,u.path,u.children,s,r,a,i))}else if(n.type===Un.ACK_USER_WRITE){const u=n;u.revert?o=iL(t,e,u.path,s,r,i):o=sL(t,e,u.path,u.affectedTree,s,r,i)}else if(n.type===Un.LISTEN_COMPLETE)o=rL(t,e,n.path,s,i);else throw Ci("Unknown operation type: "+n.type);const c=i.getChanges();return tL(e,o,c),{viewCache:o,changes:c}}function tL(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const r=s.getNode().isLeafNode()||s.getNode().isEmpty(),i=ld(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!s.getNode().equals(i)||!s.getNode().getPriority().equals(i.getPriority()))&&n.push(AM(ld(e)))}}function $I(t,e,n,s,r,i){const o=e.eventCache;if(rc(s,n)!=null)return e;{let a,c;if(Ae(n))if(X(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Pr(e),h=u instanceof Le?u:Le.EMPTY_NODE,d=VI(s,h);a=t.filter.updateFullNode(e.eventCache.getNode(),d,i)}else{const u=hd(s,Pr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=Se(n);if(u===".priority"){X(Zs(n)===1,"Can't have a priority with additional path components");const h=o.getNode();c=e.serverCache.getNode();const d=iy(s,n,h,c);d!=null?a=t.filter.updatePriority(h,d):a=o.getNode()}else{const h=We(n);let d;if(o.isCompleteForChild(u)){c=e.serverCache.getNode();const p=iy(s,n,o.getNode(),c);p!=null?d=o.getNode().getImmediateChild(u).updateChild(h,p):d=o.getNode().getImmediateChild(u)}else d=Xf(s,u,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),u,d,h,r,i):a=o.getNode()}}return xo(e,a,o.isFullyInitialized()||Ae(n),t.filter.filtersNodes())}}function ic(t,e,n,s,r,i,o,a){const c=e.serverCache;let u;const h=o?t.filter:t.filter.getIndexedFilter();if(Ae(n))u=h.updateFullNode(c.getNode(),s,null);else if(h.filtersNodes()&&!c.isFiltered()){const g=c.getNode().updateChild(n,s);u=h.updateFullNode(c.getNode(),g,null)}else{const g=Se(n);if(!c.isCompleteForPath(n)&&Zs(n)>1)return e;const y=We(n),w=c.getNode().getImmediateChild(g).updateChild(y,s);g===".priority"?u=h.updatePriority(c.getNode(),w):u=h.updateChild(c.getNode(),g,w,y,BI,null)}const d=OI(e,u,c.isFullyInitialized()||Ae(n),h.filtersNodes()),p=new Jf(r,d,i);return $I(t,d,n,r,p,a)}function dd(t,e,n,s,r,i,o){const a=e.eventCache;let c,u;const h=new Jf(r,e,i);if(Ae(n))u=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=xo(e,u,!0,t.filter.filtersNodes());else{const d=Se(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),s),c=xo(e,u,a.isFullyInitialized(),a.isFiltered());else{const p=We(n),g=a.getNode().getImmediateChild(d);let y;if(Ae(p))y=s;else{const T=h.getCompleteChild(d);T!=null?_I(p)===".priority"&&T.getChild(vI(p)).isEmpty()?y=T:y=T.updateChild(p,s):y=Le.EMPTY_NODE}if(g.equals(y))c=e;else{const T=t.filter.updateChild(a.getNode(),d,y,p,h,o);c=xo(e,T,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function oy(t,e){return t.eventCache.isCompleteForChild(e)}function nL(t,e,n,s,r,i,o){let a=e;return s.foreach((c,u)=>{const h=ft(n,c);oy(e,Se(h))&&(a=dd(t,a,h,u,r,i,o))}),s.foreach((c,u)=>{const h=ft(n,c);oy(e,Se(h))||(a=dd(t,a,h,u,r,i,o))}),a}function ay(t,e,n){return n.foreach((s,r)=>{e=e.updateChild(s,r)}),e}function fd(t,e,n,s,r,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,u;Ae(n)?u=s:u=new qe(null).setTree(n,s);const h=e.serverCache.getNode();return u.children.inorderTraversal((d,p)=>{if(h.hasChild(d)){const g=e.serverCache.getNode().getImmediateChild(d),y=ay(t,g,p);c=ic(t,c,new ze(d),y,r,i,o,a)}}),u.children.inorderTraversal((d,p)=>{const g=!e.serverCache.isCompleteForChild(d)&&p.value===null;if(!h.hasChild(d)&&!g){const y=e.serverCache.getNode().getImmediateChild(d),T=ay(t,y,p);c=ic(t,c,new ze(d),T,r,i,o,a)}}),c}function sL(t,e,n,s,r,i,o){if(rc(r,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(Ae(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return ic(t,e,n,c.getNode().getChild(n),r,i,a,o);if(Ae(n)){let u=new qe(null);return c.getNode().forEachChild(hi,(h,d)=>{u=u.set(new ze(h),d)}),fd(t,e,n,u,r,i,a,o)}else return e}else{let u=new qe(null);return s.foreach((h,d)=>{const p=ft(n,h);c.isCompleteForPath(p)&&(u=u.set(h,c.getNode().getChild(p)))}),fd(t,e,n,u,r,i,a,o)}}function rL(t,e,n,s,r){const i=e.serverCache,o=OI(e,i.getNode(),i.isFullyInitialized()||Ae(n),i.isFiltered());return $I(t,o,n,s,BI,r)}function iL(t,e,n,s,r,i){let o;if(rc(s,n)!=null)return e;{const a=new Jf(s,e,r),c=e.eventCache.getNode();let u;if(Ae(n)||Se(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=hd(s,Pr(e));else{const d=e.serverCache.getNode();X(d instanceof Le,"serverChildren would be complete if leaf node"),h=VI(s,d)}h=h,u=t.filter.updateFullNode(c,h,i)}else{const h=Se(n);let d=Xf(s,h,e.serverCache);d==null&&e.serverCache.isCompleteForChild(h)&&(d=c.getImmediateChild(h)),d!=null?u=t.filter.updateChild(c,h,d,We(n),a,i):e.eventCache.getNode().hasChild(h)?u=t.filter.updateChild(c,h,Le.EMPTY_NODE,We(n),a,i):u=c,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=hd(s,Pr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||rc(s,Ue())!=null,xo(e,u,o,t.filter.filtersNodes())}}function oL(t,e){const n=Pr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Ae(e)&&!n.getImmediateChild(Se(e)).isEmpty())?n.getChild(e):null}function ly(t,e,n,s){e.type===Un.MERGE&&e.source.queryId!==null&&(X(Pr(t.viewCache_),"We should always have a full cache before handling merges"),X(ld(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,i=eL(t.processor_,r,e,n,s);return ZM(t.processor_,i.viewCache),X(i.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,aL(t,i.changes,i.viewCache.eventCache.getNode())}function aL(t,e,n,s){const r=t.eventRegistrations_;return xM(t.eventGenerator_,e,n,r)}/**
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
 */let cy;function lL(t){X(!cy,"__referenceConstructor has already been defined"),cy=t}function Zf(t,e,n,s){const r=e.source.queryId;if(r!==null){const i=t.views.get(r);return X(i!=null,"SyncTree gave us an op for an invalid query."),ly(i,e,n,s)}else{let i=[];for(const o of t.views.values())i=i.concat(ly(o,e,n,s));return i}}function ep(t,e){let n=null;for(const s of t.views.values())n=n||oL(s,e);return n}/**
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
 */let uy;function cL(t){X(!uy,"__referenceConstructor has already been defined"),uy=t}class hy{constructor(e){this.listenProvider_=e,this.syncPointTree_=new qe(null),this.pendingWriteTree_=QM(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function uL(t,e,n,s,r){return FM(t.pendingWriteTree_,e,n,s,r),r?nu(t,new Sr(SI(),e,n)):[]}function Zr(t,e,n=!1){const s=UM(t.pendingWriteTree_,e);if(BM(t.pendingWriteTree_,e)){let i=new qe(null);return s.snap!=null?i=i.set(Ue(),!0):gn(s.children,o=>{i=i.set(new ze(o),!0)}),nu(t,new sc(s.path,i,n))}else return[]}function tu(t,e,n){return nu(t,new Sr(PI(),e,n))}function hL(t,e,n){const s=qe.fromObject(n);return nu(t,new na(PI(),e,s))}function dL(t,e,n,s){const r=WI(t,s);if(r!=null){const i=zI(r),o=i.path,a=i.queryId,c=dn(o,e),u=new Sr(kI(a),c,n);return KI(t,o,u)}else return[]}function fL(t,e,n,s){const r=WI(t,s);if(r){const i=zI(r),o=i.path,a=i.queryId,c=dn(o,e),u=qe.fromObject(n),h=new na(kI(a),c,u);return KI(t,o,h)}else return[]}function jI(t,e,n){const r=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=dn(o,e),u=ep(a,c);if(u)return u});return LI(r,e,i,n,!0)}function nu(t,e){return HI(e,t.syncPointTree_,null,xI(t.pendingWriteTree_,Ue()))}function HI(t,e,n,s){if(Ae(t.path))return qI(t,e,n,s);{const r=e.get(Ue());n==null&&r!=null&&(n=ep(r,Ue()));let i=[];const o=Se(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const u=n?n.getImmediateChild(o):null,h=FI(s,o);i=i.concat(HI(a,c,u,h))}return r&&(i=i.concat(Zf(r,t,s,n))),i}}function qI(t,e,n,s){const r=e.get(Ue());n==null&&r!=null&&(n=ep(r,Ue()));let i=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,u=FI(s,o),h=t.operationForChild(o);h&&(i=i.concat(qI(h,a,c,u)))}),r&&(i=i.concat(Zf(r,t,s,n))),i}function WI(t,e){return t.tagToQueryMap.get(e)}function zI(t){const e=t.indexOf("$");return X(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ze(t.substr(0,e))}}function KI(t,e,n){const s=t.syncPointTree_.get(e);X(s,"Missing sync point for query tag that we're tracking");const r=xI(t.pendingWriteTree_,e);return Zf(s,n,r,null)}/**
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
 */class tp{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new tp(n)}node(){return this.node_}}class np{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ft(this.path_,e);return new np(this.syncTree_,n)}node(){return jI(this.syncTree_,this.path_)}}const pL=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},dy=function(t,e,n){if(!t||typeof t!="object")return t;if(X(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return mL(t[".sv"],e,n);if(typeof t[".sv"]=="object")return gL(t[".sv"],e);X(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},mL=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:X(!1,"Unexpected server value: "+t)}},gL=function(t,e,n){t.hasOwnProperty("increment")||X(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&X(!1,"Unexpected increment value: "+s);const r=e.node();if(X(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return s;const o=r.getValue();return typeof o!="number"?s:o+s},_L=function(t,e,n,s){return sp(e,new np(n,t),s)},yL=function(t,e,n){return sp(t,new tp(e),n)};function sp(t,e,n){const s=t.getPriority().val(),r=dy(s,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=dy(o.getValue(),e,n);return a!==o.getValue()||r!==o.getPriority().val()?new ct(a,Mt(r)):t}else{const o=t;return i=o,r!==o.getPriority().val()&&(i=i.updatePriority(new ct(r))),o.forEachChild(Ft,(a,c)=>{const u=sp(c,e.getImmediateChild(a),n);u!==c&&(i=i.updateImmediateChild(a,u))}),i}}/**
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
 */class rp{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function ip(t,e){let n=e instanceof ze?e:new ze(e),s=t,r=Se(n);for(;r!==null;){const i=mi(s.node.children,r)||{children:{},childCount:0};s=new rp(r,s,i),n=We(n),r=Se(n)}return s}function Vi(t){return t.node.value}function GI(t,e){t.node.value=e,pd(t)}function QI(t){return t.node.childCount>0}function vL(t){return Vi(t)===void 0&&!QI(t)}function su(t,e){gn(t.node.children,(n,s)=>{e(new rp(n,t,s))})}function YI(t,e,n,s){n&&e(t),su(t,r=>{YI(r,e,!0)})}function EL(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ea(t){return new ze(t.parent===null?t.name:Ea(t.parent)+"/"+t.name)}function pd(t){t.parent!==null&&TL(t.parent,t.name,t)}function TL(t,e,n){const s=vL(n),r=ws(t.node.children,e);s&&r?(delete t.node.children[e],t.node.childCount--,pd(t)):!s&&!r&&(t.node.children[e]=n.node,t.node.childCount++,pd(t))}/**
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
 */const wL=/[\[\].#$\/\u0000-\u001F\u007F]/,IL=/[\[\].#$\u0000-\u001F\u007F]/,sh=10*1024*1024,XI=function(t){return typeof t=="string"&&t.length!==0&&!wL.test(t)},AL=function(t){return typeof t=="string"&&t.length!==0&&!IL.test(t)},RL=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),AL(t)},JI=function(t,e,n){const s=n instanceof ze?new rM(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+pr(s));if(typeof e=="function")throw new Error(t+"contains a function "+pr(s)+" with contents = "+e.toString());if(Xw(e))throw new Error(t+"contains "+e.toString()+" "+pr(s));if(typeof e=="string"&&e.length>sh/3&&bc(e)>sh)throw new Error(t+"contains a string greater than "+sh+" utf8 bytes "+pr(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,i=!1;if(gn(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!XI(o)))throw new Error(t+" contains an invalid key ("+o+") "+pr(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);iM(s,o),JI(t,a,s),oM(s)}),r&&i)throw new Error(t+' contains ".value" child '+pr(s)+" in addition to actual children.")}},bL=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!XI(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!RL(n))throw new Error(Yb(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class CL{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function SL(t,e){let n=null;for(let s=0;s<e.length;s++){const r=e[s],i=r.getPath();n!==null&&!EI(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(r)}n&&t.eventLists_.push(n)}function Vr(t,e,n){SL(t,n),PL(t,s=>Tn(s,e)||Tn(e,s))}function PL(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const r=t.eventLists_[s];if(r){const i=r.path;e(i)?(kL(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function kL(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Oo&&xt("event: "+n.toString()),ya(s)}}}/**
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
 */const NL="repo_interrupt",OL=25;class DL{constructor(e,n,s,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new CL,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=nc(),this.transactionQueueTree_=new rp,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function xL(t,e,n){if(t.stats_=Wf(t.repoInfo_),t.forceRestClient_||Sx())t.server_=new tc(t.repoInfo_,(s,r,i,o)=>{fy(t,s,r,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>py(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Tt(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new ps(t.repoInfo_,e,(s,r,i,o)=>{fy(t,s,r,i,o)},s=>{py(t,s)},s=>{LL(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=xx(t.repoInfo_,()=>new DM(t.stats_,t.server_)),t.infoData_=new SM,t.infoSyncTree_=new hy({startListening:(s,r,i,o)=>{let a=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(a=tu(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),op(t,"connected",!1),t.serverSyncTree_=new hy({startListening:(s,r,i,o)=>(t.server_.listen(s,i,r,(a,c)=>{const u=o(a,c);Vr(t.eventQueue_,s._path,u)}),[]),stopListening:(s,r)=>{t.server_.unlisten(s,r)}})}function ML(t){const n=t.infoData_.getNode(new ze(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ZI(t){return pL({timestamp:ML(t)})}function fy(t,e,n,s,r){t.dataUpdateCount++;const i=new ze(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(s){const c=Nl(n,u=>Mt(u));o=fL(t.serverSyncTree_,i,c,r)}else{const c=Mt(n);o=dL(t.serverSyncTree_,i,c,r)}else if(s){const c=Nl(n,u=>Mt(u));o=hL(t.serverSyncTree_,i,c)}else{const c=Mt(n);o=tu(t.serverSyncTree_,i,c)}let a=i;o.length>0&&(a=lp(t,i)),Vr(t.eventQueue_,a,o)}function py(t,e){op(t,"connected",e),e===!1&&FL(t)}function LL(t,e){gn(e,(n,s)=>{op(t,n,s)})}function op(t,e,n){const s=new ze("/.info/"+e),r=Mt(n);t.infoData_.updateSnapshot(s,r);const i=tu(t.infoSyncTree_,s,r);Vr(t.eventQueue_,s,i)}function VL(t){return t.nextWriteId_++}function FL(t){e0(t,"onDisconnectEvents");const e=ZI(t),n=nc();ad(t.onDisconnect_,Ue(),(r,i)=>{const o=_L(r,i,t.serverSyncTree_,e);CI(n,r,o)});let s=[];ad(n,Ue(),(r,i)=>{s=s.concat(tu(t.serverSyncTree_,r,i));const o=jL(t,r);lp(t,o)}),t.onDisconnect_=nc(),Vr(t.eventQueue_,Ue(),s)}function UL(t){t.persistentConnection_&&t.persistentConnection_.interrupt(NL)}function e0(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),xt(n,...e)}function t0(t,e,n){return jI(t.serverSyncTree_,e,n)||Le.EMPTY_NODE}function ap(t,e=t.transactionQueueTree_){if(e||ru(t,e),Vi(e)){const n=s0(t,e);X(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&BL(t,Ea(e),n)}else QI(e)&&su(e,n=>{ap(t,n)})}function BL(t,e,n){const s=n.map(u=>u.currentWriteId),r=t0(t,e,s);let i=r;const o=r.hash();for(let u=0;u<n.length;u++){const h=n[u];X(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const d=dn(e,h.path);i=i.updateChild(d,h.currentOutputSnapshotRaw)}const a=i.val(!0),c=e;t.server_.put(c.toString(),a,u=>{e0(t,"transaction put response",{path:c.toString(),status:u});let h=[];if(u==="ok"){const d=[];for(let p=0;p<n.length;p++)n[p].status=2,h=h.concat(Zr(t.serverSyncTree_,n[p].currentWriteId)),n[p].onComplete&&d.push(()=>n[p].onComplete(null,!0,n[p].currentOutputSnapshotResolved)),n[p].unwatcher();ru(t,ip(t.transactionQueueTree_,e)),ap(t,t.transactionQueueTree_),Vr(t.eventQueue_,e,h);for(let p=0;p<d.length;p++)ya(d[p])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{an("transaction at "+c.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}lp(t,e)}},o)}function lp(t,e){const n=n0(t,e),s=Ea(n),r=s0(t,n);return $L(t,r,s),s}function $L(t,e,n){if(e.length===0)return;const s=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],u=dn(n,c.path);let h=!1,d;if(X(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)h=!0,d=c.abortReason,r=r.concat(Zr(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=OL)h=!0,d="maxretry",r=r.concat(Zr(t.serverSyncTree_,c.currentWriteId,!0));else{const p=t0(t,c.path,o);c.currentInputSnapshot=p;const g=e[a].update(p.val());if(g!==void 0){JI("transaction failed: Data returned ",g,c.path);let y=Mt(g);typeof g=="object"&&g!=null&&ws(g,".priority")||(y=y.updatePriority(p.getPriority()));const w=c.currentWriteId,O=ZI(t),D=yL(y,p,O);c.currentOutputSnapshotRaw=y,c.currentOutputSnapshotResolved=D,c.currentWriteId=VL(t),o.splice(o.indexOf(w),1),r=r.concat(uL(t.serverSyncTree_,c.path,D,c.currentWriteId,c.applyLocally)),r=r.concat(Zr(t.serverSyncTree_,w,!0))}else h=!0,d="nodata",r=r.concat(Zr(t.serverSyncTree_,c.currentWriteId,!0))}Vr(t.eventQueue_,n,r),r=[],h&&(e[a].status=2,function(p){setTimeout(p,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(d),!1,null))))}ru(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)ya(s[a]);ap(t,t.transactionQueueTree_)}function n0(t,e){let n,s=t.transactionQueueTree_;for(n=Se(e);n!==null&&Vi(s)===void 0;)s=ip(s,n),e=We(e),n=Se(e);return s}function s0(t,e){const n=[];return r0(t,e,n),n.sort((s,r)=>s.order-r.order),n}function r0(t,e,n){const s=Vi(e);if(s)for(let r=0;r<s.length;r++)n.push(s[r]);su(e,r=>{r0(t,r,n)})}function ru(t,e){const n=Vi(e);if(n){let s=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[s]=n[r],s++);n.length=s,GI(e,n.length>0?n:void 0)}su(e,s=>{ru(t,s)})}function jL(t,e){const n=Ea(n0(t,e)),s=ip(t.transactionQueueTree_,e);return EL(s,r=>{rh(t,r)}),rh(t,s),YI(s,r=>{rh(t,r)}),n}function rh(t,e){const n=Vi(e);if(n){const s=[];let r=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(X(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(X(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(Zr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?GI(e,void 0):n.length=i+1,Vr(t.eventQueue_,Ea(e),r);for(let o=0;o<s.length;o++)ya(s[o])}}/**
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
 */function HL(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let r=n[s];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function qL(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):an(`Invalid query segment '${n}' in query '${t}'`)}return e}const my=function(t,e){const n=WL(t),s=n.namespace;n.domain==="firebase.com"&&br(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&br("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Ex();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Nx(n.host,n.secure,s,r,e,"",s!==n.subdomain),path:new ze(n.pathString)}},WL=function(t){let e="",n="",s="",r="",i="",o=!0,a="https",c=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let h=t.indexOf("/");h===-1&&(h=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(h,d)),h<d&&(r=HL(t.substring(h,d)));const p=qL(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const y=e.indexOf(".");s=e.substring(0,y).toLowerCase(),n=e.substring(y+1),i=s}"ns"in p&&(i=p.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:a,pathString:r,namespace:i}};/**
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
 */class cp{constructor(e,n,s,r){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=r}get key(){return Ae(this._path)?null:_I(this._path)}get ref(){return new Fi(this._repo,this._path)}get _queryIdentifier(){const e=ey(this._queryParams),n=Hf(e);return n==="{}"?"default":n}get _queryObject(){return ey(this._queryParams)}isEqual(e){if(e=At(e),!(e instanceof cp))return!1;const n=this._repo===e._repo,s=EI(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&s&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+sM(this._path)}}class Fi extends cp{constructor(e,n){super(e,n,new Qf,!1)}get parent(){const e=vI(this._path);return e===null?null:new Fi(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}lL(Fi);cL(Fi);/**
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
 */const zL="FIREBASE_DATABASE_EMULATOR_HOST",md={};let KL=!1;function GL(t,e,n,s,r){let i=s||t.options.databaseURL;i===void 0&&(t.options.projectId||br("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),xt("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=my(i,r),a=o.repoInfo,c;typeof process<"u"&&M_&&(c=M_[zL]),c?(i=`http://${c}?ns=${a.namespace}`,o=my(i,r),a=o.repoInfo):o.repoInfo.secure;const u=new kx(t.name,t.options,e);bL("Invalid Firebase Database URL",o),Ae(o.path)||br("Database URL must point to the root of a Firebase Database (not including a child path).");const h=YL(a,t,u,new Px(t,n));return new XL(h,t)}function QL(t,e){const n=md[e];(!n||n[t.key]!==t)&&br(`Database ${e}(${t.repoInfo_}) has already been deleted.`),UL(t),delete n[t.key]}function YL(t,e,n,s){let r=md[e.name];r||(r={},md[e.name]=r);let i=r[t.toURLString()];return i&&br("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new DL(t,KL,n,s),r[t.toURLString()]=i,i}class XL{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(xL(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Fi(this._repo,Ue())),this._rootInternal}_delete(){return this._rootInternal!==null&&(QL(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&br("Cannot call "+e+" on a deleted database.")}}/**
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
 */function JL(t){px(tr),Kn(new bn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return GL(s,r,i,n)},"PUBLIC").setMultipleInstances(!0)),on(L_,V_,t),on(L_,V_,"esm2017")}ps.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};ps.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};JL();/**
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
 */const i0="firebasestorage.googleapis.com",ZL="storageBucket",eV=2*60*1e3,tV=10*60*1e3;/**
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
 */class Jn extends Xn{constructor(e,n,s=0){super(ih(e),`Firebase Storage: ${n} (${ih(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Jn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ih(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Yn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Yn||(Yn={}));function ih(t){return"storage/"+t}function nV(){const t="An unknown error occurred, please check the error payload for server response.";return new Jn(Yn.UNKNOWN,t)}function sV(){return new Jn(Yn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function rV(){return new Jn(Yn.CANCELED,"User canceled the upload/download.")}function iV(t){return new Jn(Yn.INVALID_URL,"Invalid URL '"+t+"'.")}function oV(t){return new Jn(Yn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function gy(t){return new Jn(Yn.INVALID_ARGUMENT,t)}function o0(){return new Jn(Yn.APP_DELETED,"The Firebase app was deleted.")}function aV(t){return new Jn(Yn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class wn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=wn.makeFromUrl(e,n)}catch{return new wn(e,"")}if(s.path==="")return s;throw oV(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(V){V.path.charAt(V.path.length-1)==="/"&&(V.path_=V.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function u(V){V.path_=decodeURIComponent(V.path)}const h="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",g=new RegExp(`^https?://${d}/${h}/b/${r}/o${p}`,"i"),y={bucket:1,path:3},T=n===i0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",O=new RegExp(`^https?://${T}/${r}/${w}`,"i"),x=[{regex:a,indices:c,postModify:i},{regex:g,indices:y,postModify:u},{regex:O,indices:{bucket:1,path:2},postModify:u}];for(let V=0;V<x.length;V++){const Z=x[V],se=Z.regex.exec(e);if(se){const b=se[Z.indices.bucket];let v=se[Z.indices.path];v||(v=""),s=new wn(b,v),Z.postModify(s);break}}if(s==null)throw iV(e);return s}}class lV{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function cV(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function c(){return a===2}let u=!1;function h(...w){u||(u=!0,e.apply(null,w))}function d(w){r=setTimeout(()=>{r=null,t(g,c())},w)}function p(){i&&clearTimeout(i)}function g(w,...O){if(u){p();return}if(w){p(),h.call(null,w,...O);return}if(c()||o){p(),h.call(null,w,...O);return}s<64&&(s*=2);let x;a===1?(a=2,x=0):x=(s+Math.random())*1e3,d(x)}let y=!1;function T(w){y||(y=!0,p(),!u&&(r!==null?(w||(a=2),clearTimeout(r),d(0)):w||(a=1)))}return d(0),i=setTimeout(()=>{o=!0,T(!0)},n),T}function uV(t){t(!1)}/**
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
 */function hV(t){return t!==void 0}function _y(t,e,n,s){if(s<e)throw gy(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw gy(`Invalid value for '${t}'. Expected ${n} or less.`)}function dV(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}var oc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(oc||(oc={}));/**
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
 */function fV(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
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
 */class pV{constructor(e,n,s,r,i,o,a,c,u,h,d,p=!0,g=!1){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=d,this.retry=p,this.isUsingEmulator=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((y,T)=>{this.resolve_=y,this.reject_=T,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new tl(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===oc.NO_ERROR,c=i.getStatus();if(!a||fV(c,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===oc.ABORT;s(!1,new tl(!1,null,h));return}const u=this.successCodes_.indexOf(c)!==-1;s(!0,new tl(u,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());hV(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=nV();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?o0():rV();o(c)}else{const c=sV();o(c)}};this.canceled_?n(!1,new tl(!1,null,!0)):this.backoffId_=cV(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&uV(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class tl{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function mV(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function gV(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function _V(t,e){e&&(t["X-Firebase-GMPID"]=e)}function yV(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function vV(t,e,n,s,r,i,o=!0,a=!1){const c=dV(t.urlParams),u=t.url+c,h=Object.assign({},t.headers);return _V(h,e),mV(h,n),gV(h,i),yV(h,s),new pV(u,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o,a)}/**
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
 */function EV(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function TV(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class ac{constructor(e,n){this._service=e,n instanceof wn?this._location=n:this._location=wn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ac(e,n)}get root(){const e=new wn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return TV(this._location.path)}get storage(){return this._service}get parent(){const e=EV(this._location.path);if(e===null)return null;const n=new wn(this._location.bucket,e);return new ac(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw aV(e)}}function yy(t,e){const n=e==null?void 0:e[ZL];return n==null?null:wn.makeFromBucketSpec(n,t)}class wV{constructor(e,n,s,r,i,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._isUsingEmulator=o,this._bucket=null,this._host=i0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=eV,this._maxUploadRetryTime=tV,this._requests=new Set,r!=null?this._bucket=wn.makeFromBucketSpec(r,this._host):this._bucket=yy(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=wn.makeFromBucketSpec(this._url,e):this._bucket=yy(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){_y("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){_y("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Kt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ac(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new lV(o0());{const o=vV(e,this._appId,s,r,n,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const vy="@firebase/storage",Ey="0.13.13";/**
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
 */const IV="storage";function AV(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new wV(n,s,r,e,tr)}function RV(){Kn(new bn(IV,AV,"PUBLIC").setMultipleInstances(!0)),on(vy,Ey,""),on(vy,Ey,"esm2017")}RV();const oh=new WeakMap;function a0(t,e){return oh.has(e)||oh.set(e,{f:{},r:{},s:{},u:{}}),oh.get(e)}function bV(t,e,n,s){if(!t)return n;const[r,i]=l0(t);if(!r)return n;const o=a0(void 0,s)[r]||{},a=e||i;return a&&a in o?o[a]:n}function CV(t,e,n,s){if(!t)return;const[r,i]=l0(t);if(!r)return;const o=a0(void 0,s)[r],a=e||i;if(a)return n.then(c=>{o[a]=c}).catch(Fn),a}function l0(t){return ix(t)||ox(t)?["f",t.path]:ax(t)?["r",t.toString()]:lx(t)?["s",t.toString()]:[]}const ah=new WeakMap;function SV(t,e,n){const s=Zc();ah.has(s)||ah.set(s,new Map);const r=ah.get(s),i=CV(e,n,t,s);return i&&r.set(i,t),i?()=>r.delete(i):Fn}const PV={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function gd(t,e,n,s){if(!sx(t))return[t,{}];const r=[{},{}],i=Object.keys(n).reduce((a,c)=>{const u=n[c];return a[u.path]=u.data(),a},{});function o(a,c,u,h){c=c||{};const[d,p]=h;Object.getOwnPropertyNames(a).forEach(g=>{const y=Object.getOwnPropertyDescriptor(a,g);y&&!y.enumerable&&Object.defineProperty(d,g,y)});for(const g in a){const y=a[g];if(y==null||y instanceof Date||y instanceof rt||y instanceof Kc)d[g]=y;else if(jf(y)){const T=u+g;d[g]=T in n?c[g]:y.path,p[T]=y.converter?y:y.withConverter(s.converter)}else if(Array.isArray(y)){d[g]=Array(y.length);for(let T=0;T<y.length;T++){const w=y[T];w&&w.path in i&&(d[g][T]=i[w.path])}o(y,c[g]||d[g],u+g+".",[d[g],p])}else Mr(y)?(d[g]={},o(y,c[g],u+g+".",[d[g],p])):d[g]=y}}return o(t,e,"",r),r}const up={reset:!1,wait:!0,maxRefDepth:2,converter:PV,snapshotOptions:{serverTimestamps:"estimate"}};function lc(t){for(const e in t)t[e].unsub()}function _d(t,e,n,s,r,i,o,a,c){const[u,h]=gd(s.data(t.snapshotOptions),$f(e,n),r,t);i.set(e,n,u),yd(t,e,n,r,h,i,o,a,c)}function kV({ref:t,target:e,path:n,depth:s,resolve:r,reject:i,ops:o},a){const c=Object.create(null);let u=Fn;return a.once?Rw(t).then(h=>{h.exists()?_d(a,e,n,h,c,o,s,r,i):(o.set(e,n,null),r())}).catch(i):u=Ff(t,h=>{h.exists()?_d(a,e,n,h,c,o,s,r,i):(o.set(e,n,null),r())},i),()=>{u(),lc(c)}}function yd(t,e,n,s,r,i,o,a,c){const u=Object.keys(r);if(Object.keys(s).filter(T=>u.indexOf(T)<0).forEach(T=>{s[T].unsub(),delete s[T]}),!u.length||++o>t.maxRefDepth)return a(n);let d=0;const p=u.length,g=Object.create(null);function y(T){T in g&&++d>=p&&a(n)}u.forEach(T=>{const w=s[T],O=r[T],D=`${n}.${T}`;if(g[D]=!0,w)if(w.path!==O.path)w.unsub();else return;s[T]={data:()=>$f(e,D),unsub:kV({ref:O,target:e,path:D,depth:o,ops:i,resolve:y.bind(null,D),reject:c},t),path:O.path}})}function NV(t,e,n,s,r,i){const o=Object.assign({},up,i),{snapshotListenOptions:a,snapshotOptions:c,wait:u,once:h}=o,d="value";let p=Me(u?[]:t.value);u||n.set(t,d,[]);const g=s;let y,T=Fn;const w=[],O={added:({newIndex:x,doc:V})=>{w.splice(x,0,Object.create(null));const Z=w[x],[se,b]=gd(V.data(c),void 0,Z,o);n.add(rs(p),x,se),yd(o,p,`${d}.${x}`,Z,b,n,0,s.bind(null,V),r)},modified:({oldIndex:x,newIndex:V,doc:Z})=>{const se=rs(p),b=w[x],v=se[x],[A,C]=gd(Z.data(c),v,b,o);w.splice(V,0,b),n.remove(se,x),n.add(se,V,A),yd(o,p,`${d}.${V}`,b,C,n,0,s,r)},removed:({oldIndex:x})=>{const V=rs(p);n.remove(V,x),lc(w.splice(x,1)[0])}};function D(x){const V=x.docChanges(a);if(!y&&V.length){y=!0;let Z=0;const se=V.length,b=Object.create(null);for(let v=0;v<se;v++)b[V[v].doc.id]=!0;s=v=>{v&&v.id in b&&++Z>=se&&(u&&(n.set(t,d,rs(p)),p=t),g(rs(p)),s=Fn)}}V.forEach(Z=>{O[Z.type](Z)}),V.length||(u&&(n.set(t,d,rs(p)),p=t),s(rs(p)))}return h?RO(e).then(D).catch(r):T=Ff(e,D,r),x=>{if(T(),x){const V=typeof x=="function"?x():[];n.set(t,d,V)}w.forEach(lc)}}function OV(t,e,n,s,r,i){const o=Object.assign({},up,i),a="value",c=Object.create(null);s=cx(s,()=>$f(t,a));let u=Fn;function h(d){d.exists()?_d(o,t,a,d,c,n,0,s,r):(n.set(t,a,null),s(null))}return o.once?Rw(e).then(h).catch(r):u=Ff(e,h,r),d=>{if(u(),d){const p=typeof d=="function"?d():null;n.set(t,a,p)}lc(c)}}const Ty=Symbol();function DV(t,e){let n=Fn;const s=Object.assign({},up,e),r=rs(t),i=s.target||Me();hx()&&(s.once=!0);const o=bV(r,s.ssrKey,Ty,Zc()),a=o!==Ty;a&&(i.value=o);let c=!a;const u=Me(!1),h=Me(),d=lv(),p=Wy();let g=Fn;function y(){let O=rs(t);const D=new Promise((x,V)=>{if(n(s.reset),!O)return n=Fn,x(null);u.value=c,c=!0,O.converter||(O=O.withConverter(s.converter)),n=(jf(O)?OV:NV)(i,O,xV,x,V,s)}).catch(x=>(d.value===D&&(h.value=x),Promise.reject(x))).finally(()=>{d.value===D&&(u.value=!1)});d.value=D}let T=Fn;(It(t)||typeof t=="function")&&(T=ii(t,y)),y(),r&&(g=SV(d.value,r,s.ssrKey)),Hv()&&wv(()=>d.value),p&&gA(w);function w(O=s.reset){T(),g(),n(O)}return Object.defineProperties(i,{error:{get:()=>h},data:{get:()=>i},pending:{get:()=>u},promise:{get:()=>d},stop:{get:()=>w}})}const xV={set:(t,e,n)=>tx(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function MV(t,e){return DV(t,{target:Me([]),...e})}function LV(t){return FV({initialUser:t,dependencies:{popupRedirectResolver:GE,persistence:[WE,UE,ef]}})}const VV=Symbol("VueFireAuth");function FV({dependencies:t,initialUser:e}){return(n,s)=>{const[r,i]=UV(n,s,e,t);fx(r,i)}}function UV(t,e,n,s,r=kE(t,s)){const i=dx(t,e).run(()=>Me(n));return qw.set(t,i),e.provide(VV,r),[i,r]}function BV(t,{firebaseApp:e,modules:n=[]}){t.provide(Hw,e);for(const s of n)s(e,t)}const $V={__name:"App",setup(t){Me(!1);const e=Jc(),n=Kw();return Fd(()=>{console.log("onMounted"),n.value&&(console.log("val"),e.push("/dashboard"))}),(s,r)=>{const i=Ud("router-view");return Ee(),$v(i)}}},Lt={HOME:"/",TICTACTOE:"tictactoe",WORDGAME:"wordGame",GOT:"got",DASHBOARD:"dashboard",LOGIN:"login"},jV={class:"p-2 sticky-top"},HV={class:"d-flex justify-content-center"},qV={class:"btn-group",role:"group"},iu={__name:"Header",setup(t){return(e,n)=>{const s=Ud("router-link");return Ee(),Ie("div",jV,[n[4]||(n[4]=W("hr",null,null,-1)),W("div",HV,[W("div",qV,[Ve(s,{class:"btn btn-primary",to:{name:pt(Lt).HOME}},{default:ls(()=>n[0]||(n[0]=[W("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-house",viewBox:"0 0 16 16"},[W("path",{d:"M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"})],-1)])),_:1,__:[0]},8,["to"]),Ve(s,{class:"btn btn-primary",to:{name:pt(Lt).TICTACTOE}},{default:ls(()=>n[1]||(n[1]=[Vn("TicTacToe")])),_:1,__:[1]},8,["to"]),Ve(s,{class:"btn btn-primary",to:{name:pt(Lt).WORDGAME}},{default:ls(()=>n[2]||(n[2]=[Vn("Guess Word")])),_:1,__:[2]},8,["to"]),Ve(s,{class:"btn btn-primary",to:{name:pt(Lt).GOT}},{default:ls(()=>n[3]||(n[3]=[Vn("Game Of Thrones")])),_:1,__:[3]},8,["to"])])])])}}},hp=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},WV={class:"min-vh-100 d-flex justify-content-center align-items-center text-center"},zV={class:"game"},KV={class:"board"},GV=["onClick"],QV={class:"info"},YV={key:0},XV={key:1},JV={key:2},ZV={__name:"TicTacToe",setup(t){const e=Me(Array(9).fill("")),n=Me("X"),s=Me(null),r=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],i=u=>{e.value[u]||s.value||(e.value[u]=n.value,o(),n.value=n.value==="X"?"O":"X")},o=()=>{for(const u of r){const[h,d,p]=u;if(e.value[h]&&e.value[h]===e.value[d]&&e.value[h]===e.value[p]){s.value=e.value[h];return}}},a=Je(()=>e.value.every(u=>u)&&!s.value),c=()=>{e.value=Array(9).fill(""),n.value="X",s.value=null};return(u,h)=>(Ee(),Ie(et,null,[Ve(iu),W("div",WV,[W("div",zV,[h[0]||(h[0]=W("h1",null,"Tic Tac Toe",-1)),W("div",KV,[(Ee(!0),Ie(et,null,fi(e.value,(d,p)=>(Ee(),Ie("div",{key:p,class:"cell",onClick:g=>i(p)},dt(d),9,GV))),128))]),W("div",QV,[s.value?(Ee(),Ie("p",YV,"🎉 "+dt(s.value)+" wins!",1)):a.value?(Ee(),Ie("p",XV,"😅 It's a draw!")):(Ee(),Ie("p",JV,"Current Turn: "+dt(n.value),1)),W("button",{class:"btn btn-primary",onClick:c},"Reset")])])])],64))}},e2=hp(ZV,[["__scopeId","data-v-278e24f2"]]),t2={class:"min-vh-100 d-flex justify-content-center align-items-center text-center"},n2={class:"offset-md-3 col-md-6"},s2={class:"list-group"},r2={__name:"Home",setup(t){return Jc(),(e,n)=>{const s=Ud("router-link");return Ee(),Ie(et,null,[W("div",t2,[W("div",null,[n[4]||(n[4]=W("h3",null,"This is my Vue PlayGround",-1)),n[5]||(n[5]=W("p",null," A collection of mini apps and experiments built while learning and playing with Vue.js. ",-1)),W("div",n2,[W("ul",s2,[Ve(s,{class:"list-group-item enable-button-pointers",to:{name:pt(Lt).TICTACTOE}},{default:ls(()=>n[0]||(n[0]=[Vn("TicTacToe")])),_:1,__:[0]},8,["to"]),Ve(s,{class:"list-group-item enable-button-pointers",to:{name:pt(Lt).WORDGAME}},{default:ls(()=>n[1]||(n[1]=[Vn("Guess Word")])),_:1,__:[1]},8,["to"]),Ve(s,{class:"list-group-item enable-button-pointers",to:{name:pt(Lt).GOT}},{default:ls(()=>n[2]||(n[2]=[Vn("Game Of Thrones")])),_:1,__:[2]},8,["to"]),Ve(s,{class:"list-group-item enable-button-pointers active",to:{name:pt(Lt).DASHBOARD}},{default:ls(()=>n[3]||(n[3]=[Vn("Auth Section")])),_:1,__:[3]},8,["to"])])])])]),n[6]||(n[6]=W("div",{class:"sticky-bottom w-100 text-center p-2"},[W("a",{href:"https://www.flaticon.com",title:"instrument icons"},"icons created by Flaticon")],-1))],64)}}},i2={class:"min-vh-100 d-flex justify-content-center align-items-center text-center"},o2={class:"input-group mb-3"},a2={class:"input-group mb-3"},l2={__name:"Login",setup(t){const e=Me(""),n=Me(""),s=Jc(),r=async()=>{try{await sP(d_,e.value,n.value),s.push(Lt.DASHBOARD)}catch(o){alert(o.message)}},i=async()=>{try{await nP(d_,e.value,n.value),s.push(Lt.DASHBOARD)}catch(o){alert(o.message)}};return(o,a)=>(Ee(),Ie("div",i2,[W("div",null,[a[4]||(a[4]=W("h1",null,"Login / Register",-1)),W("div",o2,[a[2]||(a[2]=W("span",{class:"input-group-text",id:"basic-addon1"},[W("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-envelope",viewBox:"0 0 16 16"},[W("path",{d:"M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"})])],-1)),Al(W("input",{type:"text",class:"form-control",placeholder:"Email","aria-label":"Email","onUpdate:modelValue":a[0]||(a[0]=c=>e.value=c)},null,512),[[Sl,e.value]])]),W("div",a2,[a[3]||(a[3]=W("span",{class:"input-group-text",id:"basic-addon1"},[W("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-lock",viewBox:"0 0 16 16"},[W("path",{"fill-rule":"evenodd",d:"M8 0a4 4 0 0 1 4 4v2.05a2.5 2.5 0 0 1 2 2.45v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5v-5a2.5 2.5 0 0 1 2-2.45V4a4 4 0 0 1 4-4M4.5 7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7zM8 1a3 3 0 0 0-3 3v2h6V4a3 3 0 0 0-3-3"})])],-1)),Al(W("input",{type:"password",class:"form-control",placeholder:"Password","onUpdate:modelValue":a[1]||(a[1]=c=>n.value=c)},null,512),[[Sl,n.value]])]),W("div",{class:"btn-group",role:"group","aria-label":"Basic outlined example"},[W("button",{type:"button",class:"btn btn-outline-primary",onClick:r}," Login "),W("button",{type:"button",class:"btn btn-outline-primary",onClick:i}," Register ")])])]))}},c2={class:"min-vh-100 d-flex justify-content-center align-items-center text-center w-100"},u2={class:"game"},h2={key:0},d2={class:""},f2={class:"input-group"},p2={key:1},m2={class:"word"},g2={class:"letters clearfix"},_2=["onClick"],y2={class:"status"},v2={key:0},E2={key:1},T2={key:2},wy=6,w2={__name:"WordGame",setup(t){const e=Me(""),n=Me([]),s=Me(!1),r=Me(""),i=Me([]),o="abcdefghijklmnopqrstuvwxyz".toUpperCase().split(""),a=Je(()=>i.value.filter(w=>!r.value.includes(w.toUpperCase()))),c=Je(()=>r.value.split("").every(w=>i.value.includes(w.toUpperCase()))),u=Je(()=>a.value.length>=wy),h=Je(()=>c.value||u.value);function d(w){i.value.push(w.toUpperCase())}function p(){r.value=T(),i.value=[]}function g(){i.value=[],e.value="",n.value=[],s.value=!1,r.value="",i.value=[]}function y(){if(n.value=e.value.split(",").map(w=>w.trim().toUpperCase()).filter(w=>w.length>0),n.value.length===0){alert("Please enter at least one word.");return}r.value=T(),i.value=[],s.value=!0}function T(){return n.value[Math.floor(Math.random()*n.value.length)]}return(w,O)=>(Ee(),Ie(et,null,[Ve(iu),W("div",c2,[W("div",u2,[s.value?(Ee(),Ie("div",p2,[W("p",m2,[(Ee(!0),Ie(et,null,fi(r.value,(D,x)=>(Ee(),Ie("span",{key:x},dt(i.value.includes(D)?D:"_"),1))),128))]),W("p",g2,[(Ee(!0),Ie(et,null,fi(pt(o),D=>(Ee(),Ie("span",{class:di(["d-inline-block bg-warning rounded-2",i.value.includes(D)||h.value?"disabled":""]),key:D,onClick:x=>d(D)},dt(D),11,_2))),128))]),W("p",y2,[c.value?(Ee(),Ie("span",v2,"🎉 You won!")):u.value?(Ee(),Ie("span",E2,'💀 You lost. Word was "'+dt(r.value)+'"',1)):(Ee(),Ie("span",T2,"Mistakes: "+dt(a.value.length)+"/"+dt(wy),1))]),W("div",{class:"d-flex justify-content-center"},[W("div",{class:"btn-group",role:"group"},[W("button",{class:"btn btn-primary",onClick:p},"Next"),W("button",{class:"btn btn-primary",onClick:g},"Restart")])])])):(Ee(),Ie("div",h2,[W("div",d2,[W("div",f2,[Al(W("input",{type:"text",class:"form-control","onUpdate:modelValue":O[0]||(O[0]=D=>e.value=D)},null,512),[[Sl,e.value]])]),O[1]||(O[1]=W("div",{class:"form-text"},"Enter comma-separated words (e.g. a, ab, abc, abcd, abcde)",-1))]),O[2]||(O[2]=W("br",null,null,-1)),W("button",{class:"btn btn-primary",onClick:y},"Start Game")]))])])],64))}},I2=hp(w2,[["__scopeId","data-v-66ddca4c"]]);function c0(t,e){return function(){return t.apply(e,arguments)}}const{toString:A2}=Object.prototype,{getPrototypeOf:dp}=Object,{iterator:ou,toStringTag:u0}=Symbol,au=(t=>e=>{const n=A2.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),kn=t=>(t=t.toLowerCase(),e=>au(e)===t),lu=t=>e=>typeof e===t,{isArray:Ui}=Array,sa=lu("undefined");function R2(t){return t!==null&&!sa(t)&&t.constructor!==null&&!sa(t.constructor)&&Jt(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const h0=kn("ArrayBuffer");function b2(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&h0(t.buffer),e}const C2=lu("string"),Jt=lu("function"),d0=lu("number"),cu=t=>t!==null&&typeof t=="object",S2=t=>t===!0||t===!1,_l=t=>{if(au(t)!=="object")return!1;const e=dp(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(u0 in t)&&!(ou in t)},P2=kn("Date"),k2=kn("File"),N2=kn("Blob"),O2=kn("FileList"),D2=t=>cu(t)&&Jt(t.pipe),x2=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||Jt(t.append)&&((e=au(t))==="formdata"||e==="object"&&Jt(t.toString)&&t.toString()==="[object FormData]"))},M2=kn("URLSearchParams"),[L2,V2,F2,U2]=["ReadableStream","Request","Response","Headers"].map(kn),B2=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ta(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let s,r;if(typeof t!="object"&&(t=[t]),Ui(t))for(s=0,r=t.length;s<r;s++)e.call(null,t[s],s,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let a;for(s=0;s<o;s++)a=i[s],e.call(null,t[a],a,t)}}function f0(t,e){e=e.toLowerCase();const n=Object.keys(t);let s=n.length,r;for(;s-- >0;)if(r=n[s],e===r.toLowerCase())return r;return null}const _r=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,p0=t=>!sa(t)&&t!==_r;function vd(){const{caseless:t}=p0(this)&&this||{},e={},n=(s,r)=>{const i=t&&f0(e,r)||r;_l(e[i])&&_l(s)?e[i]=vd(e[i],s):_l(s)?e[i]=vd({},s):Ui(s)?e[i]=s.slice():e[i]=s};for(let s=0,r=arguments.length;s<r;s++)arguments[s]&&Ta(arguments[s],n);return e}const $2=(t,e,n,{allOwnKeys:s}={})=>(Ta(e,(r,i)=>{n&&Jt(r)?t[i]=c0(r,n):t[i]=r},{allOwnKeys:s}),t),j2=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),H2=(t,e,n,s)=>{t.prototype=Object.create(e.prototype,s),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},q2=(t,e,n,s)=>{let r,i,o;const a={};if(e=e||{},t==null)return e;do{for(r=Object.getOwnPropertyNames(t),i=r.length;i-- >0;)o=r[i],(!s||s(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&dp(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},W2=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const s=t.indexOf(e,n);return s!==-1&&s===n},z2=t=>{if(!t)return null;if(Ui(t))return t;let e=t.length;if(!d0(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},K2=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&dp(Uint8Array)),G2=(t,e)=>{const s=(t&&t[ou]).call(t);let r;for(;(r=s.next())&&!r.done;){const i=r.value;e.call(t,i[0],i[1])}},Q2=(t,e)=>{let n;const s=[];for(;(n=t.exec(e))!==null;)s.push(n);return s},Y2=kn("HTMLFormElement"),X2=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,s,r){return s.toUpperCase()+r}),Iy=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),J2=kn("RegExp"),m0=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),s={};Ta(n,(r,i)=>{let o;(o=e(r,i,t))!==!1&&(s[i]=o||r)}),Object.defineProperties(t,s)},Z2=t=>{m0(t,(e,n)=>{if(Jt(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const s=t[n];if(Jt(s)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},eF=(t,e)=>{const n={},s=r=>{r.forEach(i=>{n[i]=!0})};return Ui(t)?s(t):s(String(t).split(e)),n},tF=()=>{},nF=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function sF(t){return!!(t&&Jt(t.append)&&t[u0]==="FormData"&&t[ou])}const rF=t=>{const e=new Array(10),n=(s,r)=>{if(cu(s)){if(e.indexOf(s)>=0)return;if(!("toJSON"in s)){e[r]=s;const i=Ui(s)?[]:{};return Ta(s,(o,a)=>{const c=n(o,r+1);!sa(c)&&(i[a]=c)}),e[r]=void 0,i}}return s};return n(t,0)},iF=kn("AsyncFunction"),oF=t=>t&&(cu(t)||Jt(t))&&Jt(t.then)&&Jt(t.catch),g0=((t,e)=>t?setImmediate:e?((n,s)=>(_r.addEventListener("message",({source:r,data:i})=>{r===_r&&i===n&&s.length&&s.shift()()},!1),r=>{s.push(r),_r.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Jt(_r.postMessage)),aF=typeof queueMicrotask<"u"?queueMicrotask.bind(_r):typeof process<"u"&&process.nextTick||g0,lF=t=>t!=null&&Jt(t[ou]),M={isArray:Ui,isArrayBuffer:h0,isBuffer:R2,isFormData:x2,isArrayBufferView:b2,isString:C2,isNumber:d0,isBoolean:S2,isObject:cu,isPlainObject:_l,isReadableStream:L2,isRequest:V2,isResponse:F2,isHeaders:U2,isUndefined:sa,isDate:P2,isFile:k2,isBlob:N2,isRegExp:J2,isFunction:Jt,isStream:D2,isURLSearchParams:M2,isTypedArray:K2,isFileList:O2,forEach:Ta,merge:vd,extend:$2,trim:B2,stripBOM:j2,inherits:H2,toFlatObject:q2,kindOf:au,kindOfTest:kn,endsWith:W2,toArray:z2,forEachEntry:G2,matchAll:Q2,isHTMLForm:Y2,hasOwnProperty:Iy,hasOwnProp:Iy,reduceDescriptors:m0,freezeMethods:Z2,toObjectSet:eF,toCamelCase:X2,noop:tF,toFiniteNumber:nF,findKey:f0,global:_r,isContextDefined:p0,isSpecCompliantForm:sF,toJSONObject:rF,isAsyncFn:iF,isThenable:oF,setImmediate:g0,asap:aF,isIterable:lF};function _e(t,e,n,s,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),s&&(this.request=s),r&&(this.response=r,this.status=r.status?r.status:null)}M.inherits(_e,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:M.toJSONObject(this.config),code:this.code,status:this.status}}});const _0=_e.prototype,y0={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{y0[t]={value:t}});Object.defineProperties(_e,y0);Object.defineProperty(_0,"isAxiosError",{value:!0});_e.from=(t,e,n,s,r,i)=>{const o=Object.create(_0);return M.toFlatObject(t,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),_e.call(o,t.message,e,n,s,r),o.cause=t,o.name=t.name,i&&Object.assign(o,i),o};const cF=null;function Ed(t){return M.isPlainObject(t)||M.isArray(t)}function v0(t){return M.endsWith(t,"[]")?t.slice(0,-2):t}function Ay(t,e,n){return t?t.concat(e).map(function(r,i){return r=v0(r),!n&&i?"["+r+"]":r}).join(n?".":""):e}function uF(t){return M.isArray(t)&&!t.some(Ed)}const hF=M.toFlatObject(M,{},null,function(e){return/^is[A-Z]/.test(e)});function uu(t,e,n){if(!M.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=M.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(T,w){return!M.isUndefined(w[T])});const s=n.metaTokens,r=n.visitor||h,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&M.isSpecCompliantForm(e);if(!M.isFunction(r))throw new TypeError("visitor must be a function");function u(y){if(y===null)return"";if(M.isDate(y))return y.toISOString();if(M.isBoolean(y))return y.toString();if(!c&&M.isBlob(y))throw new _e("Blob is not supported. Use a Buffer instead.");return M.isArrayBuffer(y)||M.isTypedArray(y)?c&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function h(y,T,w){let O=y;if(y&&!w&&typeof y=="object"){if(M.endsWith(T,"{}"))T=s?T:T.slice(0,-2),y=JSON.stringify(y);else if(M.isArray(y)&&uF(y)||(M.isFileList(y)||M.endsWith(T,"[]"))&&(O=M.toArray(y)))return T=v0(T),O.forEach(function(x,V){!(M.isUndefined(x)||x===null)&&e.append(o===!0?Ay([T],V,i):o===null?T:T+"[]",u(x))}),!1}return Ed(y)?!0:(e.append(Ay(w,T,i),u(y)),!1)}const d=[],p=Object.assign(hF,{defaultVisitor:h,convertValue:u,isVisitable:Ed});function g(y,T){if(!M.isUndefined(y)){if(d.indexOf(y)!==-1)throw Error("Circular reference detected in "+T.join("."));d.push(y),M.forEach(y,function(O,D){(!(M.isUndefined(O)||O===null)&&r.call(e,O,M.isString(D)?D.trim():D,T,p))===!0&&g(O,T?T.concat(D):[D])}),d.pop()}}if(!M.isObject(t))throw new TypeError("data must be an object");return g(t),e}function Ry(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(s){return e[s]})}function fp(t,e){this._pairs=[],t&&uu(t,this,e)}const E0=fp.prototype;E0.append=function(e,n){this._pairs.push([e,n])};E0.toString=function(e){const n=e?function(s){return e.call(this,s,Ry)}:Ry;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function dF(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function T0(t,e,n){if(!e)return t;const s=n&&n.encode||dF;M.isFunction(n)&&(n={serialize:n});const r=n&&n.serialize;let i;if(r?i=r(e,n):i=M.isURLSearchParams(e)?e.toString():new fp(e,n).toString(s),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class by{constructor(){this.handlers=[]}use(e,n,s){return this.handlers.push({fulfilled:e,rejected:n,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){M.forEach(this.handlers,function(s){s!==null&&e(s)})}}const w0={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},fF=typeof URLSearchParams<"u"?URLSearchParams:fp,pF=typeof FormData<"u"?FormData:null,mF=typeof Blob<"u"?Blob:null,gF={isBrowser:!0,classes:{URLSearchParams:fF,FormData:pF,Blob:mF},protocols:["http","https","file","blob","url","data"]},pp=typeof window<"u"&&typeof document<"u",Td=typeof navigator=="object"&&navigator||void 0,_F=pp&&(!Td||["ReactNative","NativeScript","NS"].indexOf(Td.product)<0),yF=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",vF=pp&&window.location.href||"http://localhost",EF=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:pp,hasStandardBrowserEnv:_F,hasStandardBrowserWebWorkerEnv:yF,navigator:Td,origin:vF},Symbol.toStringTag,{value:"Module"})),Vt={...EF,...gF};function TF(t,e){return uu(t,new Vt.classes.URLSearchParams,Object.assign({visitor:function(n,s,r,i){return Vt.isNode&&M.isBuffer(n)?(this.append(s,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function wF(t){return M.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function IF(t){const e={},n=Object.keys(t);let s;const r=n.length;let i;for(s=0;s<r;s++)i=n[s],e[i]=t[i];return e}function I0(t){function e(n,s,r,i){let o=n[i++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),c=i>=n.length;return o=!o&&M.isArray(r)?r.length:o,c?(M.hasOwnProp(r,o)?r[o]=[r[o],s]:r[o]=s,!a):((!r[o]||!M.isObject(r[o]))&&(r[o]=[]),e(n,s,r[o],i)&&M.isArray(r[o])&&(r[o]=IF(r[o])),!a)}if(M.isFormData(t)&&M.isFunction(t.entries)){const n={};return M.forEachEntry(t,(s,r)=>{e(wF(s),r,n,0)}),n}return null}function AF(t,e,n){if(M.isString(t))try{return(e||JSON.parse)(t),M.trim(t)}catch(s){if(s.name!=="SyntaxError")throw s}return(n||JSON.stringify)(t)}const wa={transitional:w0,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const s=n.getContentType()||"",r=s.indexOf("application/json")>-1,i=M.isObject(e);if(i&&M.isHTMLForm(e)&&(e=new FormData(e)),M.isFormData(e))return r?JSON.stringify(I0(e)):e;if(M.isArrayBuffer(e)||M.isBuffer(e)||M.isStream(e)||M.isFile(e)||M.isBlob(e)||M.isReadableStream(e))return e;if(M.isArrayBufferView(e))return e.buffer;if(M.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(s.indexOf("application/x-www-form-urlencoded")>-1)return TF(e,this.formSerializer).toString();if((a=M.isFileList(e))||s.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return uu(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return i||r?(n.setContentType("application/json",!1),AF(e)):e}],transformResponse:[function(e){const n=this.transitional||wa.transitional,s=n&&n.forcedJSONParsing,r=this.responseType==="json";if(M.isResponse(e)||M.isReadableStream(e))return e;if(e&&M.isString(e)&&(s&&!this.responseType||r)){const o=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?_e.from(a,_e.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Vt.classes.FormData,Blob:Vt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};M.forEach(["delete","get","head","post","put","patch"],t=>{wa.headers[t]={}});const RF=M.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),bF=t=>{const e={};let n,s,r;return t&&t.split(`
`).forEach(function(o){r=o.indexOf(":"),n=o.substring(0,r).trim().toLowerCase(),s=o.substring(r+1).trim(),!(!n||e[n]&&RF[n])&&(n==="set-cookie"?e[n]?e[n].push(s):e[n]=[s]:e[n]=e[n]?e[n]+", "+s:s)}),e},Cy=Symbol("internals");function ao(t){return t&&String(t).trim().toLowerCase()}function yl(t){return t===!1||t==null?t:M.isArray(t)?t.map(yl):String(t)}function CF(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=n.exec(t);)e[s[1]]=s[2];return e}const SF=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function lh(t,e,n,s,r){if(M.isFunction(s))return s.call(this,e,n);if(r&&(e=n),!!M.isString(e)){if(M.isString(s))return e.indexOf(s)!==-1;if(M.isRegExp(s))return s.test(e)}}function PF(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,s)=>n.toUpperCase()+s)}function kF(t,e){const n=M.toCamelCase(" "+e);["get","set","has"].forEach(s=>{Object.defineProperty(t,s+n,{value:function(r,i,o){return this[s].call(this,e,r,i,o)},configurable:!0})})}let Zt=class{constructor(e){e&&this.set(e)}set(e,n,s){const r=this;function i(a,c,u){const h=ao(c);if(!h)throw new Error("header name must be a non-empty string");const d=M.findKey(r,h);(!d||r[d]===void 0||u===!0||u===void 0&&r[d]!==!1)&&(r[d||c]=yl(a))}const o=(a,c)=>M.forEach(a,(u,h)=>i(u,h,c));if(M.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(M.isString(e)&&(e=e.trim())&&!SF(e))o(bF(e),n);else if(M.isObject(e)&&M.isIterable(e)){let a={},c,u;for(const h of e){if(!M.isArray(h))throw TypeError("Object iterator must return a key-value pair");a[u=h[0]]=(c=a[u])?M.isArray(c)?[...c,h[1]]:[c,h[1]]:h[1]}o(a,n)}else e!=null&&i(n,e,s);return this}get(e,n){if(e=ao(e),e){const s=M.findKey(this,e);if(s){const r=this[s];if(!n)return r;if(n===!0)return CF(r);if(M.isFunction(n))return n.call(this,r,s);if(M.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=ao(e),e){const s=M.findKey(this,e);return!!(s&&this[s]!==void 0&&(!n||lh(this,this[s],s,n)))}return!1}delete(e,n){const s=this;let r=!1;function i(o){if(o=ao(o),o){const a=M.findKey(s,o);a&&(!n||lh(s,s[a],a,n))&&(delete s[a],r=!0)}}return M.isArray(e)?e.forEach(i):i(e),r}clear(e){const n=Object.keys(this);let s=n.length,r=!1;for(;s--;){const i=n[s];(!e||lh(this,this[i],i,e,!0))&&(delete this[i],r=!0)}return r}normalize(e){const n=this,s={};return M.forEach(this,(r,i)=>{const o=M.findKey(s,i);if(o){n[o]=yl(r),delete n[i];return}const a=e?PF(i):String(i).trim();a!==i&&delete n[i],n[a]=yl(r),s[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return M.forEach(this,(s,r)=>{s!=null&&s!==!1&&(n[r]=e&&M.isArray(s)?s.join(", "):s)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const s=new this(e);return n.forEach(r=>s.set(r)),s}static accessor(e){const s=(this[Cy]=this[Cy]={accessors:{}}).accessors,r=this.prototype;function i(o){const a=ao(o);s[a]||(kF(r,o),s[a]=!0)}return M.isArray(e)?e.forEach(i):i(e),this}};Zt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);M.reduceDescriptors(Zt.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(s){this[n]=s}}});M.freezeMethods(Zt);function ch(t,e){const n=this||wa,s=e||n,r=Zt.from(s.headers);let i=s.data;return M.forEach(t,function(a){i=a.call(n,i,r.normalize(),e?e.status:void 0)}),r.normalize(),i}function A0(t){return!!(t&&t.__CANCEL__)}function Bi(t,e,n){_e.call(this,t??"canceled",_e.ERR_CANCELED,e,n),this.name="CanceledError"}M.inherits(Bi,_e,{__CANCEL__:!0});function R0(t,e,n){const s=n.config.validateStatus;!n.status||!s||s(n.status)?t(n):e(new _e("Request failed with status code "+n.status,[_e.ERR_BAD_REQUEST,_e.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function NF(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function OF(t,e){t=t||10;const n=new Array(t),s=new Array(t);let r=0,i=0,o;return e=e!==void 0?e:1e3,function(c){const u=Date.now(),h=s[i];o||(o=u),n[r]=c,s[r]=u;let d=i,p=0;for(;d!==r;)p+=n[d++],d=d%t;if(r=(r+1)%t,r===i&&(i=(i+1)%t),u-o<e)return;const g=h&&u-h;return g?Math.round(p*1e3/g):void 0}}function DF(t,e){let n=0,s=1e3/e,r,i;const o=(u,h=Date.now())=>{n=h,r=null,i&&(clearTimeout(i),i=null),t.apply(null,u)};return[(...u)=>{const h=Date.now(),d=h-n;d>=s?o(u,h):(r=u,i||(i=setTimeout(()=>{i=null,o(r)},s-d)))},()=>r&&o(r)]}const cc=(t,e,n=3)=>{let s=0;const r=OF(50,250);return DF(i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,c=o-s,u=r(c),h=o<=a;s=o;const d={loaded:o,total:a,progress:a?o/a:void 0,bytes:c,rate:u||void 0,estimated:u&&a&&h?(a-o)/u:void 0,event:i,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(d)},n)},Sy=(t,e)=>{const n=t!=null;return[s=>e[0]({lengthComputable:n,total:t,loaded:s}),e[1]]},Py=t=>(...e)=>M.asap(()=>t(...e)),xF=Vt.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,Vt.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(Vt.origin),Vt.navigator&&/(msie|trident)/i.test(Vt.navigator.userAgent)):()=>!0,MF=Vt.hasStandardBrowserEnv?{write(t,e,n,s,r,i){const o=[t+"="+encodeURIComponent(e)];M.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),M.isString(s)&&o.push("path="+s),M.isString(r)&&o.push("domain="+r),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function LF(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function VF(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function b0(t,e,n){let s=!LF(e);return t&&(s||n==!1)?VF(t,e):e}const ky=t=>t instanceof Zt?{...t}:t;function kr(t,e){e=e||{};const n={};function s(u,h,d,p){return M.isPlainObject(u)&&M.isPlainObject(h)?M.merge.call({caseless:p},u,h):M.isPlainObject(h)?M.merge({},h):M.isArray(h)?h.slice():h}function r(u,h,d,p){if(M.isUndefined(h)){if(!M.isUndefined(u))return s(void 0,u,d,p)}else return s(u,h,d,p)}function i(u,h){if(!M.isUndefined(h))return s(void 0,h)}function o(u,h){if(M.isUndefined(h)){if(!M.isUndefined(u))return s(void 0,u)}else return s(void 0,h)}function a(u,h,d){if(d in e)return s(u,h);if(d in t)return s(void 0,u)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(u,h,d)=>r(ky(u),ky(h),d,!0)};return M.forEach(Object.keys(Object.assign({},t,e)),function(h){const d=c[h]||r,p=d(t[h],e[h],h);M.isUndefined(p)&&d!==a||(n[h]=p)}),n}const C0=t=>{const e=kr({},t);let{data:n,withXSRFToken:s,xsrfHeaderName:r,xsrfCookieName:i,headers:o,auth:a}=e;e.headers=o=Zt.from(o),e.url=T0(b0(e.baseURL,e.url,e.allowAbsoluteUrls),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let c;if(M.isFormData(n)){if(Vt.hasStandardBrowserEnv||Vt.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((c=o.getContentType())!==!1){const[u,...h]=c?c.split(";").map(d=>d.trim()).filter(Boolean):[];o.setContentType([u||"multipart/form-data",...h].join("; "))}}if(Vt.hasStandardBrowserEnv&&(s&&M.isFunction(s)&&(s=s(e)),s||s!==!1&&xF(e.url))){const u=r&&i&&MF.read(i);u&&o.set(r,u)}return e},FF=typeof XMLHttpRequest<"u",UF=FF&&function(t){return new Promise(function(n,s){const r=C0(t);let i=r.data;const o=Zt.from(r.headers).normalize();let{responseType:a,onUploadProgress:c,onDownloadProgress:u}=r,h,d,p,g,y;function T(){g&&g(),y&&y(),r.cancelToken&&r.cancelToken.unsubscribe(h),r.signal&&r.signal.removeEventListener("abort",h)}let w=new XMLHttpRequest;w.open(r.method.toUpperCase(),r.url,!0),w.timeout=r.timeout;function O(){if(!w)return;const x=Zt.from("getAllResponseHeaders"in w&&w.getAllResponseHeaders()),Z={data:!a||a==="text"||a==="json"?w.responseText:w.response,status:w.status,statusText:w.statusText,headers:x,config:t,request:w};R0(function(b){n(b),T()},function(b){s(b),T()},Z),w=null}"onloadend"in w?w.onloadend=O:w.onreadystatechange=function(){!w||w.readyState!==4||w.status===0&&!(w.responseURL&&w.responseURL.indexOf("file:")===0)||setTimeout(O)},w.onabort=function(){w&&(s(new _e("Request aborted",_e.ECONNABORTED,t,w)),w=null)},w.onerror=function(){s(new _e("Network Error",_e.ERR_NETWORK,t,w)),w=null},w.ontimeout=function(){let V=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const Z=r.transitional||w0;r.timeoutErrorMessage&&(V=r.timeoutErrorMessage),s(new _e(V,Z.clarifyTimeoutError?_e.ETIMEDOUT:_e.ECONNABORTED,t,w)),w=null},i===void 0&&o.setContentType(null),"setRequestHeader"in w&&M.forEach(o.toJSON(),function(V,Z){w.setRequestHeader(Z,V)}),M.isUndefined(r.withCredentials)||(w.withCredentials=!!r.withCredentials),a&&a!=="json"&&(w.responseType=r.responseType),u&&([p,y]=cc(u,!0),w.addEventListener("progress",p)),c&&w.upload&&([d,g]=cc(c),w.upload.addEventListener("progress",d),w.upload.addEventListener("loadend",g)),(r.cancelToken||r.signal)&&(h=x=>{w&&(s(!x||x.type?new Bi(null,t,w):x),w.abort(),w=null)},r.cancelToken&&r.cancelToken.subscribe(h),r.signal&&(r.signal.aborted?h():r.signal.addEventListener("abort",h)));const D=NF(r.url);if(D&&Vt.protocols.indexOf(D)===-1){s(new _e("Unsupported protocol "+D+":",_e.ERR_BAD_REQUEST,t));return}w.send(i||null)})},BF=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let s=new AbortController,r;const i=function(u){if(!r){r=!0,a();const h=u instanceof Error?u:this.reason;s.abort(h instanceof _e?h:new Bi(h instanceof Error?h.message:h))}};let o=e&&setTimeout(()=>{o=null,i(new _e(`timeout ${e} of ms exceeded`,_e.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(u=>{u.unsubscribe?u.unsubscribe(i):u.removeEventListener("abort",i)}),t=null)};t.forEach(u=>u.addEventListener("abort",i));const{signal:c}=s;return c.unsubscribe=()=>M.asap(a),c}},$F=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let s=0,r;for(;s<n;)r=s+e,yield t.slice(s,r),s=r},jF=async function*(t,e){for await(const n of HF(t))yield*$F(n,e)},HF=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:s}=await e.read();if(n)break;yield s}}finally{await e.cancel()}},Ny=(t,e,n,s)=>{const r=jF(t,e);let i=0,o,a=c=>{o||(o=!0,s&&s(c))};return new ReadableStream({async pull(c){try{const{done:u,value:h}=await r.next();if(u){a(),c.close();return}let d=h.byteLength;if(n){let p=i+=d;n(p)}c.enqueue(new Uint8Array(h))}catch(u){throw a(u),u}},cancel(c){return a(c),r.return()}},{highWaterMark:2})},hu=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",S0=hu&&typeof ReadableStream=="function",qF=hu&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),P0=(t,...e)=>{try{return!!t(...e)}catch{return!1}},WF=S0&&P0(()=>{let t=!1;const e=new Request(Vt.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e}),Oy=64*1024,wd=S0&&P0(()=>M.isReadableStream(new Response("").body)),uc={stream:wd&&(t=>t.body)};hu&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!uc[e]&&(uc[e]=M.isFunction(t[e])?n=>n[e]():(n,s)=>{throw new _e(`Response type '${e}' is not supported`,_e.ERR_NOT_SUPPORT,s)})})})(new Response);const zF=async t=>{if(t==null)return 0;if(M.isBlob(t))return t.size;if(M.isSpecCompliantForm(t))return(await new Request(Vt.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(M.isArrayBufferView(t)||M.isArrayBuffer(t))return t.byteLength;if(M.isURLSearchParams(t)&&(t=t+""),M.isString(t))return(await qF(t)).byteLength},KF=async(t,e)=>{const n=M.toFiniteNumber(t.getContentLength());return n??zF(e)},GF=hu&&(async t=>{let{url:e,method:n,data:s,signal:r,cancelToken:i,timeout:o,onDownloadProgress:a,onUploadProgress:c,responseType:u,headers:h,withCredentials:d="same-origin",fetchOptions:p}=C0(t);u=u?(u+"").toLowerCase():"text";let g=BF([r,i&&i.toAbortSignal()],o),y;const T=g&&g.unsubscribe&&(()=>{g.unsubscribe()});let w;try{if(c&&WF&&n!=="get"&&n!=="head"&&(w=await KF(h,s))!==0){let Z=new Request(e,{method:"POST",body:s,duplex:"half"}),se;if(M.isFormData(s)&&(se=Z.headers.get("content-type"))&&h.setContentType(se),Z.body){const[b,v]=Sy(w,cc(Py(c)));s=Ny(Z.body,Oy,b,v)}}M.isString(d)||(d=d?"include":"omit");const O="credentials"in Request.prototype;y=new Request(e,{...p,signal:g,method:n.toUpperCase(),headers:h.normalize().toJSON(),body:s,duplex:"half",credentials:O?d:void 0});let D=await fetch(y,p);const x=wd&&(u==="stream"||u==="response");if(wd&&(a||x&&T)){const Z={};["status","statusText","headers"].forEach(A=>{Z[A]=D[A]});const se=M.toFiniteNumber(D.headers.get("content-length")),[b,v]=a&&Sy(se,cc(Py(a),!0))||[];D=new Response(Ny(D.body,Oy,b,()=>{v&&v(),T&&T()}),Z)}u=u||"text";let V=await uc[M.findKey(uc,u)||"text"](D,t);return!x&&T&&T(),await new Promise((Z,se)=>{R0(Z,se,{data:V,headers:Zt.from(D.headers),status:D.status,statusText:D.statusText,config:t,request:y})})}catch(O){throw T&&T(),O&&O.name==="TypeError"&&/Load failed|fetch/i.test(O.message)?Object.assign(new _e("Network Error",_e.ERR_NETWORK,t,y),{cause:O.cause||O}):_e.from(O,O&&O.code,t,y)}}),Id={http:cF,xhr:UF,fetch:GF};M.forEach(Id,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Dy=t=>`- ${t}`,QF=t=>M.isFunction(t)||t===null||t===!1,k0={getAdapter:t=>{t=M.isArray(t)?t:[t];const{length:e}=t;let n,s;const r={};for(let i=0;i<e;i++){n=t[i];let o;if(s=n,!QF(n)&&(s=Id[(o=String(n)).toLowerCase()],s===void 0))throw new _e(`Unknown adapter '${o}'`);if(s)break;r[o||"#"+i]=s}if(!s){const i=Object.entries(r).map(([a,c])=>`adapter ${a} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=e?i.length>1?`since :
`+i.map(Dy).join(`
`):" "+Dy(i[0]):"as no adapter specified";throw new _e("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return s},adapters:Id};function uh(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Bi(null,t)}function xy(t){return uh(t),t.headers=Zt.from(t.headers),t.data=ch.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),k0.getAdapter(t.adapter||wa.adapter)(t).then(function(s){return uh(t),s.data=ch.call(t,t.transformResponse,s),s.headers=Zt.from(s.headers),s},function(s){return A0(s)||(uh(t),s&&s.response&&(s.response.data=ch.call(t,t.transformResponse,s.response),s.response.headers=Zt.from(s.response.headers))),Promise.reject(s)})}const N0="1.10.0",du={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{du[t]=function(s){return typeof s===t||"a"+(e<1?"n ":" ")+t}});const My={};du.transitional=function(e,n,s){function r(i,o){return"[Axios v"+N0+"] Transitional option '"+i+"'"+o+(s?". "+s:"")}return(i,o,a)=>{if(e===!1)throw new _e(r(o," has been removed"+(n?" in "+n:"")),_e.ERR_DEPRECATED);return n&&!My[o]&&(My[o]=!0,console.warn(r(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};du.spelling=function(e){return(n,s)=>(console.warn(`${s} is likely a misspelling of ${e}`),!0)};function YF(t,e,n){if(typeof t!="object")throw new _e("options must be an object",_e.ERR_BAD_OPTION_VALUE);const s=Object.keys(t);let r=s.length;for(;r-- >0;){const i=s[r],o=e[i];if(o){const a=t[i],c=a===void 0||o(a,i,t);if(c!==!0)throw new _e("option "+i+" must be "+c,_e.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new _e("Unknown option "+i,_e.ERR_BAD_OPTION)}}const vl={assertOptions:YF,validators:du},Dn=vl.validators;let vr=class{constructor(e){this.defaults=e||{},this.interceptors={request:new by,response:new by}}async request(e,n){try{return await this._request(e,n)}catch(s){if(s instanceof Error){let r={};Error.captureStackTrace?Error.captureStackTrace(r):r=new Error;const i=r.stack?r.stack.replace(/^.+\n/,""):"";try{s.stack?i&&!String(s.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(s.stack+=`
`+i):s.stack=i}catch{}}throw s}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=kr(this.defaults,n);const{transitional:s,paramsSerializer:r,headers:i}=n;s!==void 0&&vl.assertOptions(s,{silentJSONParsing:Dn.transitional(Dn.boolean),forcedJSONParsing:Dn.transitional(Dn.boolean),clarifyTimeoutError:Dn.transitional(Dn.boolean)},!1),r!=null&&(M.isFunction(r)?n.paramsSerializer={serialize:r}:vl.assertOptions(r,{encode:Dn.function,serialize:Dn.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),vl.assertOptions(n,{baseUrl:Dn.spelling("baseURL"),withXsrfToken:Dn.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&M.merge(i.common,i[n.method]);i&&M.forEach(["delete","get","head","post","put","patch","common"],y=>{delete i[y]}),n.headers=Zt.concat(o,i);const a=[];let c=!0;this.interceptors.request.forEach(function(T){typeof T.runWhen=="function"&&T.runWhen(n)===!1||(c=c&&T.synchronous,a.unshift(T.fulfilled,T.rejected))});const u=[];this.interceptors.response.forEach(function(T){u.push(T.fulfilled,T.rejected)});let h,d=0,p;if(!c){const y=[xy.bind(this),void 0];for(y.unshift.apply(y,a),y.push.apply(y,u),p=y.length,h=Promise.resolve(n);d<p;)h=h.then(y[d++],y[d++]);return h}p=a.length;let g=n;for(d=0;d<p;){const y=a[d++],T=a[d++];try{g=y(g)}catch(w){T.call(this,w);break}}try{h=xy.call(this,g)}catch(y){return Promise.reject(y)}for(d=0,p=u.length;d<p;)h=h.then(u[d++],u[d++]);return h}getUri(e){e=kr(this.defaults,e);const n=b0(e.baseURL,e.url,e.allowAbsoluteUrls);return T0(n,e.params,e.paramsSerializer)}};M.forEach(["delete","get","head","options"],function(e){vr.prototype[e]=function(n,s){return this.request(kr(s||{},{method:e,url:n,data:(s||{}).data}))}});M.forEach(["post","put","patch"],function(e){function n(s){return function(i,o,a){return this.request(kr(a||{},{method:e,headers:s?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}vr.prototype[e]=n(),vr.prototype[e+"Form"]=n(!0)});let XF=class O0{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const s=this;this.promise.then(r=>{if(!s._listeners)return;let i=s._listeners.length;for(;i-- >0;)s._listeners[i](r);s._listeners=null}),this.promise.then=r=>{let i;const o=new Promise(a=>{s.subscribe(a),i=a}).then(r);return o.cancel=function(){s.unsubscribe(i)},o},e(function(i,o,a){s.reason||(s.reason=new Bi(i,o,a),n(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=s=>{e.abort(s)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new O0(function(r){e=r}),cancel:e}}};function JF(t){return function(n){return t.apply(null,n)}}function ZF(t){return M.isObject(t)&&t.isAxiosError===!0}const Ad={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ad).forEach(([t,e])=>{Ad[e]=t});function D0(t){const e=new vr(t),n=c0(vr.prototype.request,e);return M.extend(n,vr.prototype,e,{allOwnKeys:!0}),M.extend(n,e,null,{allOwnKeys:!0}),n.create=function(r){return D0(kr(t,r))},n}const tt=D0(wa);tt.Axios=vr;tt.CanceledError=Bi;tt.CancelToken=XF;tt.isCancel=A0;tt.VERSION=N0;tt.toFormData=uu;tt.AxiosError=_e;tt.Cancel=tt.CanceledError;tt.all=function(e){return Promise.all(e)};tt.spread=JF;tt.isAxiosError=ZF;tt.mergeConfig=kr;tt.AxiosHeaders=Zt;tt.formToJSON=t=>I0(M.isHTMLForm(t)?new FormData(t):t);tt.getAdapter=k0.getAdapter;tt.HttpStatusCode=Ad;tt.default=tt;const{Axios:KU,AxiosError:GU,CanceledError:QU,isCancel:YU,CancelToken:XU,VERSION:JU,all:ZU,Cancel:e4,isAxiosError:t4,spread:n4,toFormData:s4,AxiosHeaders:r4,HttpStatusCode:i4,formToJSON:o4,getAdapter:a4,mergeConfig:l4}=tt,eU=tt.create({baseURL:"https://api.gameofthronesquotes.xyz/v1",timeout:5e3});function tU(){const t=Me(!1),e=Me(null),n=Me(""),s=Me("");return{quote:n,character:s,loading:t,error:e,fetchQuote:async()=>{t.value=!0,e.value=null;try{const{data:i}=await eU.get("/random");n.value=i.sentence.toUpperCase(),s.value=i.character.name}catch(i){e.value="Failed to fetch quote.",console.error(i)}finally{t.value=!1}}}}const nU={class:"min-vh-100 d-flex justify-content-center align-items-center text-center w-100"},sU={class:"game"},rU={class:"word"},iU={class:"letters clearfix"},oU=["onClick"],aU={key:0,class:"border border-warning bg-warning-subtle d-inline-block py-2 px-4 rounded-2"},lU={class:"status"},cU={key:0},uU={key:1},hU={key:2},dU={class:"d-flex justify-content-center"},fU={class:"btn-group",role:"group"},Ly=6,pU={__name:"GOT",setup(t){const{quote:e,character:n,fetchQuote:s}=tU();console.log(n),console.log(e);const r=Me(!1),i=Me(""),o=Me([]),a="abcdefghijklmnopqrstuvwxyz".toUpperCase().split(""),c=Je(()=>o.value.filter(T=>!i.value.includes(T.toUpperCase())));function u(T){return/^[A-Z]$/i.test(T)}const h=Je(()=>i.value.split("").every(T=>!u(T)||o.value.includes(T.toUpperCase()))),d=Je(()=>c.value.length>=Ly),p=Je(()=>h.value||d.value);function g(T){!p.value&&!o.value.includes(T.toUpperCase())&&o.value.push(T.toUpperCase())}async function y(){await s(),i.value=e.value,o.value=[]}return Fd(()=>{y()}),(T,w)=>(Ee(),Ie(et,null,[Ve(iu),W("div",nU,[W("div",sU,[W("div",null,[W("p",rU,[(Ee(!0),Ie(et,null,fi(i.value,(O,D)=>(Ee(),Ie("span",{key:D},dt(u(O)?o.value.includes(O)?O:"_":O),1))),128))]),W("p",iU,[(Ee(!0),Ie(et,null,fi(pt(a),O=>(Ee(),Ie("span",{class:di(["d-inline-block bg-warning rounded-2",o.value.includes(O)||p.value?"disabled":""]),key:O,onClick:D=>g(O)},dt(O),11,oU))),128))]),r.value?(Ee(),Ie("p",aU,dt(pt(n)),1)):FR("",!0),W("p",lU,[h.value?(Ee(),Ie("span",cU,"🎉 You won!")):d.value?(Ee(),Ie("span",uU,'💀 You lost. Word was "'+dt(i.value)+'"',1)):(Ee(),Ie("span",hU,"Mistakes: "+dt(c.value.length)+"/"+dt(Ly),1))]),W("div",dU,[W("div",fU,[W("button",{class:"btn btn-primary",onClick:y},"Next"),W("button",{class:di(["btn btn-primary",c.value.length<5?"disabled":""]),onClick:w[0]||(w[0]=O=>r.value=!r.value)},"Show Hint",2)])])])])])],64))}},mU=hp(pU,[["__scopeId","data-v-8d32b366"]]),gU={class:"input-group mb-3"},_U=["value"],yU=["value"],vU=["value"],EU={__name:"BookForm",props:["title","author","totalPages"],emits:["update:title","update:author","update:totalPages","add"],setup(t,{emit:e}){const n=e,s=()=>n("add");return(r,i)=>(Ee(),Ie("div",gU,[W("input",{value:t.title,onInput:i[0]||(i[0]=o=>r.$emit("update:title",o.target.value)),type:"text",class:"form-control",placeholder:"Book Name"},null,40,_U),W("input",{value:t.author,onInput:i[1]||(i[1]=o=>r.$emit("update:author",o.target.value)),type:"text",class:"form-control",placeholder:"Author"},null,40,yU),W("input",{value:t.totalPages,onInput:i[2]||(i[2]=o=>r.$emit("update:totalPages",+o.target.value)),type:"text",class:"form-control",placeholder:"Total Pages"},null,40,vU),W("span",{class:"input-group-text text-bg-success",onClick:s},i[3]||(i[3]=[W("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-check-circle",viewBox:"0 0 16 16"},[W("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"}),W("path",{d:"m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"})],-1)]))]))}},TU={class:"btn-group my-3",role:"group"},wU=["checked"],IU=["checked"],AU=["checked"],RU={__name:"BookFilter",props:["modelValue"],emits:["update:modelValue"],setup(t){return(e,n)=>(Ee(),Ie("div",TU,[W("input",{type:"radio",class:"btn-check",id:"filter-all",value:"all",checked:t.modelValue==="all",onChange:n[0]||(n[0]=s=>e.$emit("update:modelValue","all"))},null,40,wU),n[3]||(n[3]=W("label",{class:"btn btn-outline-primary",for:"filter-all"},"All",-1)),W("input",{type:"radio",class:"btn-check",id:"filter-reading",value:"reading",checked:t.modelValue==="reading",onChange:n[1]||(n[1]=s=>e.$emit("update:modelValue","reading"))},null,40,IU),n[4]||(n[4]=W("label",{class:"btn btn-outline-primary",for:"filter-reading"},"Reading",-1)),W("input",{type:"radio",class:"btn-check",id:"filter-completed",value:"completed",checked:t.modelValue==="completed",onChange:n[2]||(n[2]=s=>e.$emit("update:modelValue","completed"))},null,40,AU),n[5]||(n[5]=W("label",{class:"btn btn-outline-primary",for:"filter-completed"},"Completed",-1))]))}},bU={class:"row"},CU={class:"col-5"},SU={class:"col-3"},PU={class:"progress",style:{height:"10px"}},kU={class:"col-4"},NU={class:"input-group"},OU=["max","onUpdate:modelValue"],DU=["onClick"],xU=["onClick"],MU={__name:"BookList",props:["books","pageInputs"],emits:["updatePage","complete"],setup(t){return(e,n)=>(Ee(),Ie(et,null,[n[3]||(n[3]=VR('<li class="list-group-item"><div class="row fw-bold"><div class="col-5">Book</div><div class="col-3">Progress</div><div class="col-4">Action</div></div></li>',1)),(Ee(!0),Ie(et,null,fi(t.books,s=>(Ee(),Ie("li",{key:s.id,class:"list-group-item"},[W("div",bU,[W("div",CU,[Vn(dt(s.title),1),n[0]||(n[0]=W("br",null,null,-1)),Vn(" "+dt(s.author),1)]),W("div",SU,[W("div",PU,[W("div",{class:"progress-bar bg-success",role:"progressbar",style:gc({width:`${s.currentPage/s.totalPages*100}%`})},null,4)]),W("small",null,dt((s.currentPage/s.totalPages*100).toFixed(0))+"%",1)]),W("div",kU,[W("div",NU,[Al(W("input",{type:"number",class:"form-control",max:s.totalPages,min:0,"onUpdate:modelValue":r=>t.pageInputs[s.id]=r},null,8,OU),[[Sl,t.pageInputs[s.id],void 0,{number:!0}]]),W("span",{class:"input-group-text text-bg-primary",onClick:r=>e.$emit("updatePage",s)},n[1]||(n[1]=[W("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-save",viewBox:"0 0 16 16"},[W("path",{d:"M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1z"})],-1)]),8,DU),W("span",{class:"input-group-text text-bg-success",onClick:r=>e.$emit("complete",s)},n[2]||(n[2]=[W("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-check-circle",viewBox:"0 0 16 16"},[W("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"}),W("path",{d:"m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"})],-1)]),8,xU)])])])]))),128))],64))}},LU={class:"container"},VU={class:"offset-md-3 col-md-6 col"},FU={class:"list-group list-group-flush"},UU={__name:"BooksView",setup(t){const e=Me(""),n=Me(""),s=Me(null),r=Me({}),i=Me("all"),o=Ww(),a=Je(()=>o.value?o_(Qa,`users/${o.value.uid}/books`):null),{data:c}=MV(a),u=Je(()=>{if(!c.value)return[];switch(i.value){case"reading":return c.value.filter(g=>g.currentPage>0&&g.currentPage<g.totalPages);case"completed":return c.value.filter(g=>g.currentPage===g.totalPages);default:return c.value}});ii(c,g=>{g&&g.forEach(y=>{r.value[y.id]||(r.value[y.id]=y.currentPage)})});const h=async()=>{if(!o.value||!e.value||!n.value||!s.value)return;const g={title:e.value,author:n.value,totalPages:s.value,currentPage:0,createdAt:Ga(),updatedAt:Ga()};await bO(o_(Qa,`users/${o.value.uid}/books`),g),e.value="",n.value="",s.value=null},d=async g=>{const y=Number(r.value[g.id]);if(isNaN(y)||y<0||y>g.totalPages)return;const T=Yh(Qa,`users/${o.value.uid}/books/${g.id}`);await h_(T,{currentPage:y,updatedAt:Ga()})},p=async g=>{if(!o.value)return;const y=Yh(Qa,`users/${o.value.uid}/books/${g.id}`);await h_(y,{currentPage:g.totalPages,updatedAt:Ga()}),r.value[g.id]=g.totalPages};return(g,y)=>(Ee(),Ie(et,null,[Ve(iu),y[4]||(y[4]=W("hr",null,null,-1)),W("div",LU,[W("div",VU,[Ve(EU,{title:e.value,author:n.value,totalPages:s.value,"onUpdate:title":y[0]||(y[0]=T=>e.value=T),"onUpdate:author":y[1]||(y[1]=T=>n.value=T),"onUpdate:totalPages":y[2]||(y[2]=T=>s.value=T),onAdd:h},null,8,["title","author","totalPages"]),Ve(RU,{modelValue:i.value,"onUpdate:modelValue":y[3]||(y[3]=T=>i.value=T)},null,8,["modelValue"]),W("ul",FU,[Ve(MU,{books:u.value,pageInputs:r.value,onUpdatePage:d,onComplete:p},null,8,["books","pageInputs"])])])])],64))}},BU={__name:"Dashboard",setup(t){return Jc(),Ww(),(e,n)=>(Ee(),Ie("div",null,[Ve(UU)]))}},$U=[{path:"/",component:r2,name:Lt.HOME},{path:"/login",component:l2,name:Lt.LOGIN},{path:"/tictactoe",component:e2,name:Lt.TICTACTOE},{path:"/wordGame",component:I2,name:Lt.WORDGAME},{path:"/got",component:mU,name:Lt.GOT},{path:"/dashboard",component:BU,name:Lt.DASHBOARD,meta:{requiresAuth:!0}}],x0=PD({history:rD("/vue-games/"),routes:$U});x0.beforeEach(async(t,e,n)=>{const s=await Kw();t.matched.some(i=>i.meta.requiresAuth)&&!s?(console.log("🔐 Redirect to login"),n("/login")):t.path==="/login"&&s?(console.log("✅ Already logged in, redirecting to dashboard"),n("/dashboard")):(console.log("➡️ Proceed"),n())});const jU=yb($V);jU.use(BV,{firebaseApp:Uf,modules:[LV()]}).use(x0).mount("#app");
