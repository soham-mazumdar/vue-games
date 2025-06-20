(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ki(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ie={},mn=[],it=()=>{},$u=()=>!1,rs=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),xi=t=>t.startsWith("onUpdate:"),Ie=Object.assign,Ni=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Hu=Object.prototype.hasOwnProperty,Q=(t,e)=>Hu.call(t,e),H=Array.isArray,gn=t=>ss(t)==="[object Map]",ec=t=>ss(t)==="[object Set]",W=t=>typeof t=="function",de=t=>typeof t=="string",jt=t=>typeof t=="symbol",le=t=>t!==null&&typeof t=="object",tc=t=>(le(t)||W(t))&&W(t.then)&&W(t.catch),nc=Object.prototype.toString,ss=t=>nc.call(t),ju=t=>ss(t).slice(8,-1),rc=t=>ss(t)==="[object Object]",Di=t=>de(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,jn=ki(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),is=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Vu=/-(\w)/g,Ve=is(t=>t.replace(Vu,(e,n)=>n?n.toUpperCase():"")),Wu=/\B([A-Z])/g,sn=is(t=>t.replace(Wu,"-$1").toLowerCase()),os=is(t=>t.charAt(0).toUpperCase()+t.slice(1)),Os=is(t=>t?`on${os(t)}`:""),Ut=(t,e)=>!Object.is(t,e),Ar=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Zs=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},ei=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let go;const as=()=>go||(go=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Li(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=de(r)?Gu(r):Li(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(de(t)||le(t))return t}const qu=/;(?![^(]*\))/g,zu=/:([^]+)/,Ku=/\/\*[^]*?\*\//g;function Gu(t){const e={};return t.replace(Ku,"").split(qu).forEach(n=>{if(n){const r=n.split(zu);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function In(t){let e="";if(de(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const r=In(t[n]);r&&(e+=r+" ")}else if(le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ju="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Yu=ki(Ju);function sc(t){return!!t||t===""}const ic=t=>!!(t&&t.__v_isRef===!0),Ce=t=>de(t)?t:t==null?"":H(t)||le(t)&&(t.toString===nc||!W(t.toString))?ic(t)?Ce(t.value):JSON.stringify(t,oc,2):String(t),oc=(t,e)=>ic(e)?oc(t,e.value):gn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Ps(r,i)+" =>"]=s,n),{})}:ec(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ps(n))}:jt(e)?Ps(e):le(e)&&!H(e)&&!rc(e)?String(e):e,Ps=(t,e="")=>{var n;return jt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ne;class Xu{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ne,!e&&Ne&&(this.index=(Ne.scopes||(Ne.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ne;try{return Ne=this,e()}finally{Ne=n}}}on(){++this._on===1&&(this.prevScope=Ne,Ne=this)}off(){this._on>0&&--this._on===0&&(Ne=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Qu(){return Ne}let ae;const ks=new WeakSet;class ac{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ne&&Ne.active&&Ne.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ks.has(this)&&(ks.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||lc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,_o(this),uc(this);const e=ae,n=ze;ae=this,ze=!0;try{return this.fn()}finally{fc(this),ae=e,ze=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Fi(e);this.deps=this.depsTail=void 0,_o(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ks.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ti(this)&&this.run()}get dirty(){return ti(this)}}let cc=0,Vn,Wn;function lc(t,e=!1){if(t.flags|=8,e){t.next=Wn,Wn=t;return}t.next=Vn,Vn=t}function Mi(){cc++}function Ui(){if(--cc>0)return;if(Wn){let e=Wn;for(Wn=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Vn;){let e=Vn;for(Vn=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function uc(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function fc(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Fi(r),Zu(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function ti(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(dc(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function dc(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Zn)||(t.globalVersion=Zn,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!ti(t))))return;t.flags|=2;const e=t.dep,n=ae,r=ze;ae=t,ze=!0;try{uc(t);const s=t.fn(t._value);(e.version===0||Ut(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{ae=n,ze=r,fc(t),t.flags&=-3}}function Fi(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Fi(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Zu(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let ze=!0;const hc=[];function bt(){hc.push(ze),ze=!1}function wt(){const t=hc.pop();ze=t===void 0?!0:t}function _o(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ae;ae=void 0;try{e()}finally{ae=n}}}let Zn=0;class ef{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Bi{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ae||!ze||ae===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ae)n=this.activeLink=new ef(ae,this),ae.deps?(n.prevDep=ae.depsTail,ae.depsTail.nextDep=n,ae.depsTail=n):ae.deps=ae.depsTail=n,pc(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ae.depsTail,n.nextDep=void 0,ae.depsTail.nextDep=n,ae.depsTail=n,ae.deps===n&&(ae.deps=r)}return n}trigger(e){this.version++,Zn++,this.notify(e)}notify(e){Mi();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ui()}}}function pc(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)pc(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ni=new WeakMap,Zt=Symbol(""),ri=Symbol(""),er=Symbol("");function ve(t,e,n){if(ze&&ae){let r=ni.get(t);r||ni.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Bi),s.map=r,s.key=n),s.track()}}function pt(t,e,n,r,s,i){const o=ni.get(t);if(!o){Zn++;return}const a=c=>{c&&c.trigger()};if(Mi(),e==="clear")o.forEach(a);else{const c=H(t),l=c&&Di(n);if(c&&n==="length"){const u=Number(r);o.forEach((f,h)=>{(h==="length"||h===er||!jt(h)&&h>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),l&&a(o.get(er)),e){case"add":c?l&&a(o.get("length")):(a(o.get(Zt)),gn(t)&&a(o.get(ri)));break;case"delete":c||(a(o.get(Zt)),gn(t)&&a(o.get(ri)));break;case"set":gn(t)&&a(o.get(Zt));break}}Ui()}function un(t){const e=X(t);return e===t?e:(ve(e,"iterate",er),je(t)?e:e.map(_e))}function cs(t){return ve(t=X(t),"iterate",er),t}const tf={__proto__:null,[Symbol.iterator](){return xs(this,Symbol.iterator,_e)},concat(...t){return un(this).concat(...t.map(e=>H(e)?un(e):e))},entries(){return xs(this,"entries",t=>(t[1]=_e(t[1]),t))},every(t,e){return ft(this,"every",t,e,void 0,arguments)},filter(t,e){return ft(this,"filter",t,e,n=>n.map(_e),arguments)},find(t,e){return ft(this,"find",t,e,_e,arguments)},findIndex(t,e){return ft(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return ft(this,"findLast",t,e,_e,arguments)},findLastIndex(t,e){return ft(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return ft(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ns(this,"includes",t)},indexOf(...t){return Ns(this,"indexOf",t)},join(t){return un(this).join(t)},lastIndexOf(...t){return Ns(this,"lastIndexOf",t)},map(t,e){return ft(this,"map",t,e,void 0,arguments)},pop(){return Ln(this,"pop")},push(...t){return Ln(this,"push",t)},reduce(t,...e){return yo(this,"reduce",t,e)},reduceRight(t,...e){return yo(this,"reduceRight",t,e)},shift(){return Ln(this,"shift")},some(t,e){return ft(this,"some",t,e,void 0,arguments)},splice(...t){return Ln(this,"splice",t)},toReversed(){return un(this).toReversed()},toSorted(t){return un(this).toSorted(t)},toSpliced(...t){return un(this).toSpliced(...t)},unshift(...t){return Ln(this,"unshift",t)},values(){return xs(this,"values",_e)}};function xs(t,e,n){const r=cs(t),s=r[e]();return r!==t&&!je(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const nf=Array.prototype;function ft(t,e,n,r,s,i){const o=cs(t),a=o!==t&&!je(t),c=o[e];if(c!==nf[e]){const f=c.apply(t,i);return a?_e(f):f}let l=n;o!==t&&(a?l=function(f,h){return n.call(this,_e(f),h,t)}:n.length>2&&(l=function(f,h){return n.call(this,f,h,t)}));const u=c.call(o,l,r);return a&&s?s(u):u}function yo(t,e,n,r){const s=cs(t);let i=n;return s!==t&&(je(t)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,t)}):i=function(o,a,c){return n.call(this,o,_e(a),c,t)}),s[e](i,...r)}function Ns(t,e,n){const r=X(t);ve(r,"iterate",er);const s=r[e](...n);return(s===-1||s===!1)&&ji(n[0])?(n[0]=X(n[0]),r[e](...n)):s}function Ln(t,e,n=[]){bt(),Mi();const r=X(t)[e].apply(t,n);return Ui(),wt(),r}const rf=ki("__proto__,__v_isRef,__isVue"),mc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(jt));function sf(t){jt(t)||(t=String(t));const e=X(this);return ve(e,"has",t),e.hasOwnProperty(t)}class gc{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?mf:bc:i?vc:yc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=H(e);if(!s){let c;if(o&&(c=tf[n]))return c;if(n==="hasOwnProperty")return sf}const a=Reflect.get(e,n,Se(e)?e:r);return(jt(n)?mc.has(n):rf(n))||(s||ve(e,"get",n),i)?a:Se(a)?o&&Di(n)?a:a.value:le(a)?s?Ec(a):ls(a):a}}class _c extends gc{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=$t(i);if(!je(r)&&!$t(r)&&(i=X(i),r=X(r)),!H(e)&&Se(i)&&!Se(r))return c?!1:(i.value=r,!0)}const o=H(e)&&Di(n)?Number(n)<e.length:Q(e,n),a=Reflect.set(e,n,r,Se(e)?e:s);return e===X(s)&&(o?Ut(r,i)&&pt(e,"set",n,r):pt(e,"add",n,r)),a}deleteProperty(e,n){const r=Q(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&pt(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!jt(n)||!mc.has(n))&&ve(e,"has",n),r}ownKeys(e){return ve(e,"iterate",H(e)?"length":Zt),Reflect.ownKeys(e)}}class of extends gc{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const af=new _c,cf=new of,lf=new _c(!0);const si=t=>t,Ir=t=>Reflect.getPrototypeOf(t);function uf(t,e,n){return function(...r){const s=this.__v_raw,i=X(s),o=gn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?si:e?$r:_e;return!e&&ve(i,"iterate",c?ri:Zt),{next(){const{value:f,done:h}=l.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Tr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function ff(t,e){const n={get(s){const i=this.__v_raw,o=X(i),a=X(s);t||(Ut(s,a)&&ve(o,"get",s),ve(o,"get",a));const{has:c}=Ir(o),l=e?si:t?$r:_e;if(c.call(o,s))return l(i.get(s));if(c.call(o,a))return l(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&ve(X(s),"iterate",Zt),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=X(i),a=X(s);return t||(Ut(s,a)&&ve(o,"has",s),ve(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,c=X(a),l=e?si:t?$r:_e;return!t&&ve(c,"iterate",Zt),a.forEach((u,f)=>s.call(i,l(u),l(f),o))}};return Ie(n,t?{add:Tr("add"),set:Tr("set"),delete:Tr("delete"),clear:Tr("clear")}:{add(s){!e&&!je(s)&&!$t(s)&&(s=X(s));const i=X(this);return Ir(i).has.call(i,s)||(i.add(s),pt(i,"add",s,s)),this},set(s,i){!e&&!je(i)&&!$t(i)&&(i=X(i));const o=X(this),{has:a,get:c}=Ir(o);let l=a.call(o,s);l||(s=X(s),l=a.call(o,s));const u=c.call(o,s);return o.set(s,i),l?Ut(i,u)&&pt(o,"set",s,i):pt(o,"add",s,i),this},delete(s){const i=X(this),{has:o,get:a}=Ir(i);let c=o.call(i,s);c||(s=X(s),c=o.call(i,s)),a&&a.call(i,s);const l=i.delete(s);return c&&pt(i,"delete",s,void 0),l},clear(){const s=X(this),i=s.size!==0,o=s.clear();return i&&pt(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=uf(s,t,e)}),n}function $i(t,e){const n=ff(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Q(n,s)&&s in r?n:r,s,i)}const df={get:$i(!1,!1)},hf={get:$i(!1,!0)},pf={get:$i(!0,!1)};const yc=new WeakMap,vc=new WeakMap,bc=new WeakMap,mf=new WeakMap;function gf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function _f(t){return t.__v_skip||!Object.isExtensible(t)?0:gf(ju(t))}function ls(t){return $t(t)?t:Hi(t,!1,af,df,yc)}function wc(t){return Hi(t,!1,lf,hf,vc)}function Ec(t){return Hi(t,!0,cf,pf,bc)}function Hi(t,e,n,r,s){if(!le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=_f(t);if(i===0)return t;const o=s.get(t);if(o)return o;const a=new Proxy(t,i===2?r:n);return s.set(t,a),a}function _n(t){return $t(t)?_n(t.__v_raw):!!(t&&t.__v_isReactive)}function $t(t){return!!(t&&t.__v_isReadonly)}function je(t){return!!(t&&t.__v_isShallow)}function ji(t){return t?!!t.__v_raw:!1}function X(t){const e=t&&t.__v_raw;return e?X(e):t}function yf(t){return!Q(t,"__v_skip")&&Object.isExtensible(t)&&Zs(t,"__v_skip",!0),t}const _e=t=>le(t)?ls(t):t,$r=t=>le(t)?Ec(t):t;function Se(t){return t?t.__v_isRef===!0:!1}function he(t){return Sc(t,!1)}function vf(t){return Sc(t,!0)}function Sc(t,e){return Se(t)?t:new bf(t,e)}class bf{constructor(e,n){this.dep=new Bi,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:X(e),this._value=n?e:_e(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||je(e)||$t(e);e=r?e:X(e),Ut(e,n)&&(this._rawValue=e,this._value=r?e:_e(e),this.dep.trigger())}}function ye(t){return Se(t)?t.value:t}const wf={get:(t,e,n)=>e==="__v_raw"?t:ye(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Se(s)&&!Se(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Ic(t){return _n(t)?t:new Proxy(t,wf)}class Ef{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Bi(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Zn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ae!==this)return lc(this,!0),!0}get value(){const e=this.dep.track();return dc(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Sf(t,e,n=!1){let r,s;return W(t)?r=t:(r=t.get,s=t.set),new Ef(r,s,n)}const Rr={},Hr=new WeakMap;let Yt;function If(t,e=!1,n=Yt){if(n){let r=Hr.get(n);r||Hr.set(n,r=[]),r.push(t)}}function Tf(t,e,n=ie){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=n,l=x=>s?x:je(x)||s===!1||s===0?mt(x,1):mt(x);let u,f,h,m,y=!1,v=!1;if(Se(t)?(f=()=>t.value,y=je(t)):_n(t)?(f=()=>l(t),y=!0):H(t)?(v=!0,y=t.some(x=>_n(x)||je(x)),f=()=>t.map(x=>{if(Se(x))return x.value;if(_n(x))return l(x);if(W(x))return c?c(x,2):x()})):W(t)?e?f=c?()=>c(t,2):t:f=()=>{if(h){bt();try{h()}finally{wt()}}const x=Yt;Yt=u;try{return c?c(t,3,[m]):t(m)}finally{Yt=x}}:f=it,e&&s){const x=f,j=s===!0?1/0:s;f=()=>mt(x(),j)}const b=Qu(),T=()=>{u.stop(),b&&b.active&&Ni(b.effects,u)};if(i&&e){const x=e;e=(...j)=>{x(...j),T()}}let R=v?new Array(t.length).fill(Rr):Rr;const A=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(e){const j=u.run();if(s||y||(v?j.some((G,z)=>Ut(G,R[z])):Ut(j,R))){h&&h();const G=Yt;Yt=u;try{const z=[j,R===Rr?void 0:v&&R[0]===Rr?[]:R,m];R=j,c?c(e,3,z):e(...z)}finally{Yt=G}}}else u.run()};return a&&a(A),u=new ac(f),u.scheduler=o?()=>o(A,!1):A,m=x=>If(x,!1,u),h=u.onStop=()=>{const x=Hr.get(u);if(x){if(c)c(x,4);else for(const j of x)j();Hr.delete(u)}},e?r?A(!0):R=u.run():o?o(A.bind(null,!0),!0):u.run(),T.pause=u.pause.bind(u),T.resume=u.resume.bind(u),T.stop=T,T}function mt(t,e=1/0,n){if(e<=0||!le(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Se(t))mt(t.value,e,n);else if(H(t))for(let r=0;r<t.length;r++)mt(t[r],e,n);else if(ec(t)||gn(t))t.forEach(r=>{mt(r,e,n)});else if(rc(t)){for(const r in t)mt(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&mt(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function dr(t,e,n,r){try{return r?t(...r):t()}catch(s){us(s,e,n)}}function lt(t,e,n,r){if(W(t)){const s=dr(t,e,n,r);return s&&tc(s)&&s.catch(i=>{us(i,e,n)}),s}if(H(t)){const s=[];for(let i=0;i<t.length;i++)s.push(lt(t[i],e,n,r));return s}}function us(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ie;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,c,l)===!1)return}a=a.parent}if(i){bt(),dr(i,null,10,[t,c,l]),wt();return}}Rf(t,n,s,r,o)}function Rf(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Ae=[];let rt=-1;const yn=[];let Ot=null,fn=0;const Tc=Promise.resolve();let jr=null;function Rc(t){const e=jr||Tc;return t?e.then(this?t.bind(this):t):e}function Cf(t){let e=rt+1,n=Ae.length;for(;e<n;){const r=e+n>>>1,s=Ae[r],i=tr(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Vi(t){if(!(t.flags&1)){const e=tr(t),n=Ae[Ae.length-1];!n||!(t.flags&2)&&e>=tr(n)?Ae.push(t):Ae.splice(Cf(e),0,t),t.flags|=1,Cc()}}function Cc(){jr||(jr=Tc.then(Oc))}function Af(t){H(t)?yn.push(...t):Ot&&t.id===-1?Ot.splice(fn+1,0,t):t.flags&1||(yn.push(t),t.flags|=1),Cc()}function vo(t,e,n=rt+1){for(;n<Ae.length;n++){const r=Ae[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Ae.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Ac(t){if(yn.length){const e=[...new Set(yn)].sort((n,r)=>tr(n)-tr(r));if(yn.length=0,Ot){Ot.push(...e);return}for(Ot=e,fn=0;fn<Ot.length;fn++){const n=Ot[fn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ot=null,fn=0}}const tr=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Oc(t){try{for(rt=0;rt<Ae.length;rt++){const e=Ae[rt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),dr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;rt<Ae.length;rt++){const e=Ae[rt];e&&(e.flags&=-2)}rt=-1,Ae.length=0,Ac(),jr=null,(Ae.length||yn.length)&&Oc()}}let Fe=null,Pc=null;function Vr(t){const e=Fe;return Fe=t,Pc=t&&t.type.__scopeId||null,e}function gt(t,e=Fe,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Oo(-1);const i=Vr(e);let o;try{o=t(...s)}finally{Vr(i),r._d&&Oo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ii(t,e){if(Fe===null)return t;const n=ps(Fe),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=ie]=e[s];i&&(W(i)&&(i={mounted:i,updated:i}),i.deep&&mt(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function Gt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(bt(),lt(c,n,8,[t.el,a,t,e]),wt())}}const Of=Symbol("_vte"),Pf=t=>t.__isTeleport;function Wi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Wi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function kc(t,e){return W(t)?Ie({name:t.name},e,{setup:t}):t}function xc(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function qn(t,e,n,r,s=!1){if(H(t)){t.forEach((y,v)=>qn(y,e&&(H(e)?e[v]:e),n,r,s));return}if(zn(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&qn(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?ps(r.component):r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ie?a.refs={}:a.refs,f=a.setupState,h=X(f),m=f===ie?()=>!1:y=>Q(h,y);if(l!=null&&l!==c&&(de(l)?(u[l]=null,m(l)&&(f[l]=null)):Se(l)&&(l.value=null)),W(c))dr(c,a,12,[o,u]);else{const y=de(c),v=Se(c);if(y||v){const b=()=>{if(t.f){const T=y?m(c)?f[c]:u[c]:c.value;s?H(T)&&Ni(T,i):H(T)?T.includes(i)||T.push(i):y?(u[c]=[i],m(c)&&(f[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else y?(u[c]=o,m(c)&&(f[c]=o)):v&&(c.value=o,t.k&&(u[t.k]=o))};o?(b.id=-1,Ue(b,n)):b()}}}as().requestIdleCallback;as().cancelIdleCallback;const zn=t=>!!t.type.__asyncLoader,Nc=t=>t.type.__isKeepAlive;function kf(t,e){Dc(t,"a",e)}function xf(t,e){Dc(t,"da",e)}function Dc(t,e,n=we){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(fs(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Nc(s.parent.vnode)&&Nf(r,e,n,s),s=s.parent}}function Nf(t,e,n,r){const s=fs(e,t,r,!0);Lc(()=>{Ni(r[e],s)},n)}function fs(t,e,n=we,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{bt();const a=hr(n),c=lt(e,n,t,o);return a(),wt(),c});return r?s.unshift(i):s.push(i),i}}const It=t=>(e,n=we)=>{(!sr||t==="sp")&&fs(t,(...r)=>e(...r),n)},Df=It("bm"),qi=It("m"),Lf=It("bu"),Mf=It("u"),Uf=It("bum"),Lc=It("um"),Ff=It("sp"),Bf=It("rtg"),$f=It("rtc");function Hf(t,e=we){fs("ec",t,e)}const jf="components";function zi(t,e){return Wf(jf,t,!0,e)||t}const Vf=Symbol.for("v-ndc");function Wf(t,e,n=!0,r=!1){const s=Fe||we;if(s){const i=s.type;{const a=Pd(i,!1);if(a&&(a===e||a===Ve(e)||a===os(Ve(e))))return i}const o=bo(s[t]||i[t],e)||bo(s.appContext[t],e);return!o&&r?i:o}}function bo(t,e){return t&&(t[e]||t[Ve(e)]||t[os(Ve(e))])}function nr(t,e,n,r){let s;const i=n,o=H(t);if(o||de(t)){const a=o&&_n(t);let c=!1,l=!1;a&&(c=!je(t),l=$t(t),t=cs(t)),s=new Array(t.length);for(let u=0,f=t.length;u<f;u++)s[u]=e(c?l?$r(_e(t[u])):_e(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i)}else if(le(t))if(t[Symbol.iterator])s=Array.from(t,(a,c)=>e(a,c,void 0,i));else{const a=Object.keys(t);s=new Array(a.length);for(let c=0,l=a.length;c<l;c++){const u=a[c];s[c]=e(t[u],u,c,i)}}else s=[];return s}const oi=t=>t?rl(t)?ps(t):oi(t.parent):null,Kn=Ie(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>oi(t.parent),$root:t=>oi(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Uc(t),$forceUpdate:t=>t.f||(t.f=()=>{Vi(t.update)}),$nextTick:t=>t.n||(t.n=Rc.bind(t.proxy)),$watch:t=>fd.bind(t)}),Ds=(t,e)=>t!==ie&&!t.__isScriptSetup&&Q(t,e),qf={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ds(r,e))return o[e]=1,r[e];if(s!==ie&&Q(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&Q(l,e))return o[e]=3,i[e];if(n!==ie&&Q(n,e))return o[e]=4,n[e];ai&&(o[e]=0)}}const u=Kn[e];let f,h;if(u)return e==="$attrs"&&ve(t.attrs,"get",""),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==ie&&Q(n,e))return o[e]=4,n[e];if(h=c.config.globalProperties,Q(h,e))return h[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ds(s,e)?(s[e]=n,!0):r!==ie&&Q(r,e)?(r[e]=n,!0):Q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==ie&&Q(t,o)||Ds(e,o)||(a=i[0])&&Q(a,o)||Q(r,o)||Q(Kn,o)||Q(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function wo(t){return H(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ai=!0;function zf(t){const e=Uc(t),n=t.proxy,r=t.ctx;ai=!1,e.beforeCreate&&Eo(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:h,beforeUpdate:m,updated:y,activated:v,deactivated:b,beforeDestroy:T,beforeUnmount:R,destroyed:A,unmounted:x,render:j,renderTracked:G,renderTriggered:z,errorCaptured:ge,serverPrefetch:Te,expose:$e,inheritAttrs:Tt,components:Kt,directives:Ye,filters:Nn}=e;if(l&&Kf(l,r,null),o)for(const te in o){const J=o[te];W(J)&&(r[te]=J.bind(n))}if(s){const te=s.call(n,n);le(te)&&(t.data=ls(te))}if(ai=!0,i)for(const te in i){const J=i[te],ut=W(J)?J.bind(n,n):W(J.get)?J.get.bind(n,n):it,Rt=!W(J)&&W(J.set)?J.set.bind(n):it,Xe=fe({get:ut,set:Rt});Object.defineProperty(r,te,{enumerable:!0,configurable:!0,get:()=>Xe.value,set:Pe=>Xe.value=Pe})}if(a)for(const te in a)Mc(a[te],r,n,te);if(c){const te=W(c)?c.call(n):c;Reflect.ownKeys(te).forEach(J=>{Or(J,te[J])})}u&&Eo(u,t,"c");function pe(te,J){H(J)?J.forEach(ut=>te(ut.bind(n))):J&&te(J.bind(n))}if(pe(Df,f),pe(qi,h),pe(Lf,m),pe(Mf,y),pe(kf,v),pe(xf,b),pe(Hf,ge),pe($f,G),pe(Bf,z),pe(Uf,R),pe(Lc,x),pe(Ff,Te),H($e))if($e.length){const te=t.exposed||(t.exposed={});$e.forEach(J=>{Object.defineProperty(te,J,{get:()=>n[J],set:ut=>n[J]=ut})})}else t.exposed||(t.exposed={});j&&t.render===it&&(t.render=j),Tt!=null&&(t.inheritAttrs=Tt),Kt&&(t.components=Kt),Ye&&(t.directives=Ye),Te&&xc(t)}function Kf(t,e,n=it){H(t)&&(t=ci(t));for(const r in t){const s=t[r];let i;le(s)?"default"in s?i=ot(s.from||r,s.default,!0):i=ot(s.from||r):i=ot(s),Se(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Eo(t,e,n){lt(H(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Mc(t,e,n,r){let s=r.includes(".")?Yc(n,r):()=>n[r];if(de(t)){const i=e[t];W(i)&&Pr(s,i)}else if(W(t))Pr(s,t.bind(n));else if(le(t))if(H(t))t.forEach(i=>Mc(i,e,n,r));else{const i=W(t.handler)?t.handler.bind(n):e[t.handler];W(i)&&Pr(s,i,t)}}function Uc(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Wr(c,l,o,!0)),Wr(c,e,o)),le(e)&&i.set(e,c),c}function Wr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Wr(t,i,n,!0),s&&s.forEach(o=>Wr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Gf[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Gf={data:So,props:Io,emits:Io,methods:Bn,computed:Bn,beforeCreate:Re,created:Re,beforeMount:Re,mounted:Re,beforeUpdate:Re,updated:Re,beforeDestroy:Re,beforeUnmount:Re,destroyed:Re,unmounted:Re,activated:Re,deactivated:Re,errorCaptured:Re,serverPrefetch:Re,components:Bn,directives:Bn,watch:Yf,provide:So,inject:Jf};function So(t,e){return e?t?function(){return Ie(W(t)?t.call(this,this):t,W(e)?e.call(this,this):e)}:e:t}function Jf(t,e){return Bn(ci(t),ci(e))}function ci(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Re(t,e){return t?[...new Set([].concat(t,e))]:e}function Bn(t,e){return t?Ie(Object.create(null),t,e):e}function Io(t,e){return t?H(t)&&H(e)?[...new Set([...t,...e])]:Ie(Object.create(null),wo(t),wo(e??{})):e}function Yf(t,e){if(!t)return e;if(!e)return t;const n=Ie(Object.create(null),t);for(const r in e)n[r]=Re(t[r],e[r]);return n}function Fc(){return{app:null,config:{isNativeTag:$u,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Xf=0;function Qf(t,e){return function(r,s=null){W(r)||(r=Ie({},r)),s!=null&&!le(s)&&(s=null);const i=Fc(),o=new WeakSet,a=[];let c=!1;const l=i.app={_uid:Xf++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:xd,get config(){return i.config},set config(u){},use(u,...f){return o.has(u)||(u&&W(u.install)?(o.add(u),u.install(l,...f)):W(u)&&(o.add(u),u(l,...f))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,f){return f?(i.components[u]=f,l):i.components[u]},directive(u,f){return f?(i.directives[u]=f,l):i.directives[u]},mount(u,f,h){if(!c){const m=l._ceVNode||ce(r,s);return m.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),t(m,u,h),c=!0,l._container=u,u.__vue_app__=l,ps(m.component)}},onUnmount(u){a.push(u)},unmount(){c&&(lt(a,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(u,f){return i.provides[u]=f,l},runWithContext(u){const f=vn;vn=l;try{return u()}finally{vn=f}}};return l}}let vn=null;function Or(t,e){if(we){let n=we.provides;const r=we.parent&&we.parent.provides;r===n&&(n=we.provides=Object.create(r)),n[t]=e}}function ot(t,e,n=!1){const r=we||Fe;if(r||vn){let s=vn?vn._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&W(e)?e.call(r&&r.proxy):e}}const Bc={},$c=()=>Object.create(Bc),Hc=t=>Object.getPrototypeOf(t)===Bc;function Zf(t,e,n,r=!1){const s={},i=$c();t.propsDefaults=Object.create(null),jc(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:wc(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function ed(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=X(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(ds(t.emitsOptions,h))continue;const m=e[h];if(c)if(Q(i,h))m!==i[h]&&(i[h]=m,l=!0);else{const y=Ve(h);s[y]=li(c,a,y,m,t,!1)}else m!==i[h]&&(i[h]=m,l=!0)}}}else{jc(t,e,s,i)&&(l=!0);let u;for(const f in a)(!e||!Q(e,f)&&((u=sn(f))===f||!Q(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=li(c,a,f,void 0,t,!0)):delete s[f]);if(i!==a)for(const f in i)(!e||!Q(e,f))&&(delete i[f],l=!0)}l&&pt(t.attrs,"set","")}function jc(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(jn(c))continue;const l=e[c];let u;s&&Q(s,u=Ve(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:ds(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=X(n),l=a||ie;for(let u=0;u<i.length;u++){const f=i[u];n[f]=li(s,c,f,l[f],t,!Q(l,f))}}return o}function li(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=Q(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&W(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=hr(s);r=l[n]=c.call(null,e),u()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===sn(n))&&(r=!0))}return r}const td=new WeakMap;function Vc(t,e,n=!1){const r=n?td:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!W(t)){const u=f=>{c=!0;const[h,m]=Vc(f,e,!0);Ie(o,h),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return le(t)&&r.set(t,mn),mn;if(H(i))for(let u=0;u<i.length;u++){const f=Ve(i[u]);To(f)&&(o[f]=ie)}else if(i)for(const u in i){const f=Ve(u);if(To(f)){const h=i[u],m=o[f]=H(h)||W(h)?{type:h}:Ie({},h),y=m.type;let v=!1,b=!0;if(H(y))for(let T=0;T<y.length;++T){const R=y[T],A=W(R)&&R.name;if(A==="Boolean"){v=!0;break}else A==="String"&&(b=!1)}else v=W(y)&&y.name==="Boolean";m[0]=v,m[1]=b,(v||Q(m,"default"))&&a.push(f)}}const l=[o,a];return le(t)&&r.set(t,l),l}function To(t){return t[0]!=="$"&&!jn(t)}const Ki=t=>t[0]==="_"||t==="$stable",Gi=t=>H(t)?t.map(st):[st(t)],nd=(t,e,n)=>{if(e._n)return e;const r=gt((...s)=>Gi(e(...s)),n);return r._c=!1,r},Wc=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ki(s))continue;const i=t[s];if(W(i))e[s]=nd(s,i,r);else if(i!=null){const o=Gi(i);e[s]=()=>o}}},qc=(t,e)=>{const n=Gi(e);t.slots.default=()=>n},zc=(t,e,n)=>{for(const r in e)(n||!Ki(r))&&(t[r]=e[r])},rd=(t,e,n)=>{const r=t.slots=$c();if(t.vnode.shapeFlag&32){const s=e.__;s&&Zs(r,"__",s,!0);const i=e._;i?(zc(r,e,n),n&&Zs(r,"_",i,!0)):Wc(e,r)}else e&&qc(t,e)},sd=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ie;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:zc(s,e,n):(i=!e.$stable,Wc(e,s)),o=e}else e&&(qc(t,e),o={default:1});if(i)for(const a in s)!Ki(a)&&o[a]==null&&delete s[a]},Ue=yd;function id(t){return od(t)}function od(t,e){const n=as();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:h,setScopeId:m=it,insertStaticContent:y}=t,v=(d,p,g,w=null,I=null,S=null,k=void 0,P=null,O=!!p.dynamicChildren)=>{if(d===p)return;d&&!Mn(d,p)&&(w=E(d),Pe(d,I,S,!0),d=null),p.patchFlag===-2&&(O=!1,p.dynamicChildren=null);const{type:C,ref:F,shapeFlag:D}=p;switch(C){case hs:b(d,p,g,w);break;case Ht:T(d,p,g,w);break;case Ms:d==null&&R(p,g,w,k);break;case me:Kt(d,p,g,w,I,S,k,P,O);break;default:D&1?j(d,p,g,w,I,S,k,P,O):D&6?Ye(d,p,g,w,I,S,k,P,O):(D&64||D&128)&&C.process(d,p,g,w,I,S,k,P,O,M)}F!=null&&I?qn(F,d&&d.ref,S,p||d,!p):F==null&&d&&d.ref!=null&&qn(d.ref,null,S,d,!0)},b=(d,p,g,w)=>{if(d==null)r(p.el=a(p.children),g,w);else{const I=p.el=d.el;p.children!==d.children&&l(I,p.children)}},T=(d,p,g,w)=>{d==null?r(p.el=c(p.children||""),g,w):p.el=d.el},R=(d,p,g,w)=>{[d.el,d.anchor]=y(d.children,p,g,w,d.el,d.anchor)},A=({el:d,anchor:p},g,w)=>{let I;for(;d&&d!==p;)I=h(d),r(d,g,w),d=I;r(p,g,w)},x=({el:d,anchor:p})=>{let g;for(;d&&d!==p;)g=h(d),s(d),d=g;s(p)},j=(d,p,g,w,I,S,k,P,O)=>{p.type==="svg"?k="svg":p.type==="math"&&(k="mathml"),d==null?G(p,g,w,I,S,k,P,O):Te(d,p,I,S,k,P,O)},G=(d,p,g,w,I,S,k,P)=>{let O,C;const{props:F,shapeFlag:D,transition:U,dirs:V}=d;if(O=d.el=o(d.type,S,F&&F.is,F),D&8?u(O,d.children):D&16&&ge(d.children,O,null,w,I,Ls(d,S),k,P),V&&Gt(d,null,w,"created"),z(O,d,d.scopeId,k,w),F){for(const oe in F)oe!=="value"&&!jn(oe)&&i(O,oe,null,F[oe],S,w);"value"in F&&i(O,"value",null,F.value,S),(C=F.onVnodeBeforeMount)&&tt(C,w,d)}V&&Gt(d,null,w,"beforeMount");const K=ad(I,U);K&&U.beforeEnter(O),r(O,p,g),((C=F&&F.onVnodeMounted)||K||V)&&Ue(()=>{C&&tt(C,w,d),K&&U.enter(O),V&&Gt(d,null,w,"mounted")},I)},z=(d,p,g,w,I)=>{if(g&&m(d,g),w)for(let S=0;S<w.length;S++)m(d,w[S]);if(I){let S=I.subTree;if(p===S||Qc(S.type)&&(S.ssContent===p||S.ssFallback===p)){const k=I.vnode;z(d,k,k.scopeId,k.slotScopeIds,I.parent)}}},ge=(d,p,g,w,I,S,k,P,O=0)=>{for(let C=O;C<d.length;C++){const F=d[C]=P?Pt(d[C]):st(d[C]);v(null,F,p,g,w,I,S,k,P)}},Te=(d,p,g,w,I,S,k)=>{const P=p.el=d.el;let{patchFlag:O,dynamicChildren:C,dirs:F}=p;O|=d.patchFlag&16;const D=d.props||ie,U=p.props||ie;let V;if(g&&Jt(g,!1),(V=U.onVnodeBeforeUpdate)&&tt(V,g,p,d),F&&Gt(p,d,g,"beforeUpdate"),g&&Jt(g,!0),(D.innerHTML&&U.innerHTML==null||D.textContent&&U.textContent==null)&&u(P,""),C?$e(d.dynamicChildren,C,P,g,w,Ls(p,I),S):k||J(d,p,P,null,g,w,Ls(p,I),S,!1),O>0){if(O&16)Tt(P,D,U,g,I);else if(O&2&&D.class!==U.class&&i(P,"class",null,U.class,I),O&4&&i(P,"style",D.style,U.style,I),O&8){const K=p.dynamicProps;for(let oe=0;oe<K.length;oe++){const ee=K[oe],ke=D[ee],xe=U[ee];(xe!==ke||ee==="value")&&i(P,ee,ke,xe,I,g)}}O&1&&d.children!==p.children&&u(P,p.children)}else!k&&C==null&&Tt(P,D,U,g,I);((V=U.onVnodeUpdated)||F)&&Ue(()=>{V&&tt(V,g,p,d),F&&Gt(p,d,g,"updated")},w)},$e=(d,p,g,w,I,S,k)=>{for(let P=0;P<p.length;P++){const O=d[P],C=p[P],F=O.el&&(O.type===me||!Mn(O,C)||O.shapeFlag&198)?f(O.el):g;v(O,C,F,null,w,I,S,k,!0)}},Tt=(d,p,g,w,I)=>{if(p!==g){if(p!==ie)for(const S in p)!jn(S)&&!(S in g)&&i(d,S,p[S],null,I,w);for(const S in g){if(jn(S))continue;const k=g[S],P=p[S];k!==P&&S!=="value"&&i(d,S,P,k,I,w)}"value"in g&&i(d,"value",p.value,g.value,I)}},Kt=(d,p,g,w,I,S,k,P,O)=>{const C=p.el=d?d.el:a(""),F=p.anchor=d?d.anchor:a("");let{patchFlag:D,dynamicChildren:U,slotScopeIds:V}=p;V&&(P=P?P.concat(V):V),d==null?(r(C,g,w),r(F,g,w),ge(p.children||[],g,F,I,S,k,P,O)):D>0&&D&64&&U&&d.dynamicChildren?($e(d.dynamicChildren,U,g,I,S,k,P),(p.key!=null||I&&p===I.subTree)&&Kc(d,p,!0)):J(d,p,g,F,I,S,k,P,O)},Ye=(d,p,g,w,I,S,k,P,O)=>{p.slotScopeIds=P,d==null?p.shapeFlag&512?I.ctx.activate(p,g,w,k,O):Nn(p,g,w,I,S,k,O):an(d,p,O)},Nn=(d,p,g,w,I,S,k)=>{const P=d.component=Td(d,w,I);if(Nc(d)&&(P.ctx.renderer=M),Rd(P,!1,k),P.asyncDep){if(I&&I.registerDep(P,pe,k),!d.el){const O=P.subTree=ce(Ht);T(null,O,p,g)}}else pe(P,d,p,g,I,S,k)},an=(d,p,g)=>{const w=p.component=d.component;if(gd(d,p,g))if(w.asyncDep&&!w.asyncResolved){te(w,p,g);return}else w.next=p,w.update();else p.el=d.el,w.vnode=p},pe=(d,p,g,w,I,S,k)=>{const P=()=>{if(d.isMounted){let{next:D,bu:U,u:V,parent:K,vnode:oe}=d;{const Ze=Gc(d);if(Ze){D&&(D.el=oe.el,te(d,D,k)),Ze.asyncDep.then(()=>{d.isUnmounted||P()});return}}let ee=D,ke;Jt(d,!1),D?(D.el=oe.el,te(d,D,k)):D=oe,U&&Ar(U),(ke=D.props&&D.props.onVnodeBeforeUpdate)&&tt(ke,K,D,oe),Jt(d,!0);const xe=Co(d),Qe=d.subTree;d.subTree=xe,v(Qe,xe,f(Qe.el),E(Qe),d,I,S),D.el=xe.el,ee===null&&_d(d,xe.el),V&&Ue(V,I),(ke=D.props&&D.props.onVnodeUpdated)&&Ue(()=>tt(ke,K,D,oe),I)}else{let D;const{el:U,props:V}=p,{bm:K,m:oe,parent:ee,root:ke,type:xe}=d,Qe=zn(p);Jt(d,!1),K&&Ar(K),!Qe&&(D=V&&V.onVnodeBeforeMount)&&tt(D,ee,p),Jt(d,!0);{ke.ce&&ke.ce._def.shadowRoot!==!1&&ke.ce._injectChildStyle(xe);const Ze=d.subTree=Co(d);v(null,Ze,g,w,d,I,S),p.el=Ze.el}if(oe&&Ue(oe,I),!Qe&&(D=V&&V.onVnodeMounted)){const Ze=p;Ue(()=>tt(D,ee,Ze),I)}(p.shapeFlag&256||ee&&zn(ee.vnode)&&ee.vnode.shapeFlag&256)&&d.a&&Ue(d.a,I),d.isMounted=!0,p=g=w=null}};d.scope.on();const O=d.effect=new ac(P);d.scope.off();const C=d.update=O.run.bind(O),F=d.job=O.runIfDirty.bind(O);F.i=d,F.id=d.uid,O.scheduler=()=>Vi(F),Jt(d,!0),C()},te=(d,p,g)=>{p.component=d;const w=d.vnode.props;d.vnode=p,d.next=null,ed(d,p.props,w,g),sd(d,p.children,g),bt(),vo(d),wt()},J=(d,p,g,w,I,S,k,P,O=!1)=>{const C=d&&d.children,F=d?d.shapeFlag:0,D=p.children,{patchFlag:U,shapeFlag:V}=p;if(U>0){if(U&128){Rt(C,D,g,w,I,S,k,P,O);return}else if(U&256){ut(C,D,g,w,I,S,k,P,O);return}}V&8?(F&16&&He(C,I,S),D!==C&&u(g,D)):F&16?V&16?Rt(C,D,g,w,I,S,k,P,O):He(C,I,S,!0):(F&8&&u(g,""),V&16&&ge(D,g,w,I,S,k,P,O))},ut=(d,p,g,w,I,S,k,P,O)=>{d=d||mn,p=p||mn;const C=d.length,F=p.length,D=Math.min(C,F);let U;for(U=0;U<D;U++){const V=p[U]=O?Pt(p[U]):st(p[U]);v(d[U],V,g,null,I,S,k,P,O)}C>F?He(d,I,S,!0,!1,D):ge(p,g,w,I,S,k,P,O,D)},Rt=(d,p,g,w,I,S,k,P,O)=>{let C=0;const F=p.length;let D=d.length-1,U=F-1;for(;C<=D&&C<=U;){const V=d[C],K=p[C]=O?Pt(p[C]):st(p[C]);if(Mn(V,K))v(V,K,g,null,I,S,k,P,O);else break;C++}for(;C<=D&&C<=U;){const V=d[D],K=p[U]=O?Pt(p[U]):st(p[U]);if(Mn(V,K))v(V,K,g,null,I,S,k,P,O);else break;D--,U--}if(C>D){if(C<=U){const V=U+1,K=V<F?p[V].el:w;for(;C<=U;)v(null,p[C]=O?Pt(p[C]):st(p[C]),g,K,I,S,k,P,O),C++}}else if(C>U)for(;C<=D;)Pe(d[C],I,S,!0),C++;else{const V=C,K=C,oe=new Map;for(C=K;C<=U;C++){const Me=p[C]=O?Pt(p[C]):st(p[C]);Me.key!=null&&oe.set(Me.key,C)}let ee,ke=0;const xe=U-K+1;let Qe=!1,Ze=0;const Dn=new Array(xe);for(C=0;C<xe;C++)Dn[C]=0;for(C=V;C<=D;C++){const Me=d[C];if(ke>=xe){Pe(Me,I,S,!0);continue}let et;if(Me.key!=null)et=oe.get(Me.key);else for(ee=K;ee<=U;ee++)if(Dn[ee-K]===0&&Mn(Me,p[ee])){et=ee;break}et===void 0?Pe(Me,I,S,!0):(Dn[et-K]=C+1,et>=Ze?Ze=et:Qe=!0,v(Me,p[et],g,null,I,S,k,P,O),ke++)}const po=Qe?cd(Dn):mn;for(ee=po.length-1,C=xe-1;C>=0;C--){const Me=K+C,et=p[Me],mo=Me+1<F?p[Me+1].el:w;Dn[C]===0?v(null,et,g,mo,I,S,k,P,O):Qe&&(ee<0||C!==po[ee]?Xe(et,g,mo,2):ee--)}}},Xe=(d,p,g,w,I=null)=>{const{el:S,type:k,transition:P,children:O,shapeFlag:C}=d;if(C&6){Xe(d.component.subTree,p,g,w);return}if(C&128){d.suspense.move(p,g,w);return}if(C&64){k.move(d,p,g,M);return}if(k===me){r(S,p,g);for(let D=0;D<O.length;D++)Xe(O[D],p,g,w);r(d.anchor,p,g);return}if(k===Ms){A(d,p,g);return}if(w!==2&&C&1&&P)if(w===0)P.beforeEnter(S),r(S,p,g),Ue(()=>P.enter(S),I);else{const{leave:D,delayLeave:U,afterLeave:V}=P,K=()=>{d.ctx.isUnmounted?s(S):r(S,p,g)},oe=()=>{D(S,()=>{K(),V&&V()})};U?U(S,K,oe):oe()}else r(S,p,g)},Pe=(d,p,g,w=!1,I=!1)=>{const{type:S,props:k,ref:P,children:O,dynamicChildren:C,shapeFlag:F,patchFlag:D,dirs:U,cacheIndex:V}=d;if(D===-2&&(I=!1),P!=null&&(bt(),qn(P,null,g,d,!0),wt()),V!=null&&(p.renderCache[V]=void 0),F&256){p.ctx.deactivate(d);return}const K=F&1&&U,oe=!zn(d);let ee;if(oe&&(ee=k&&k.onVnodeBeforeUnmount)&&tt(ee,p,d),F&6)Sr(d.component,g,w);else{if(F&128){d.suspense.unmount(g,w);return}K&&Gt(d,null,p,"beforeUnmount"),F&64?d.type.remove(d,p,g,M,w):C&&!C.hasOnce&&(S!==me||D>0&&D&64)?He(C,p,g,!1,!0):(S===me&&D&384||!I&&F&16)&&He(O,p,g),w&&cn(d)}(oe&&(ee=k&&k.onVnodeUnmounted)||K)&&Ue(()=>{ee&&tt(ee,p,d),K&&Gt(d,null,p,"unmounted")},g)},cn=d=>{const{type:p,el:g,anchor:w,transition:I}=d;if(p===me){ln(g,w);return}if(p===Ms){x(d);return}const S=()=>{s(g),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(d.shapeFlag&1&&I&&!I.persisted){const{leave:k,delayLeave:P}=I,O=()=>k(g,S);P?P(d.el,S,O):O()}else S()},ln=(d,p)=>{let g;for(;d!==p;)g=h(d),s(d),d=g;s(p)},Sr=(d,p,g)=>{const{bum:w,scope:I,job:S,subTree:k,um:P,m:O,a:C,parent:F,slots:{__:D}}=d;Ro(O),Ro(C),w&&Ar(w),F&&H(D)&&D.forEach(U=>{F.renderCache[U]=void 0}),I.stop(),S&&(S.flags|=8,Pe(k,d,p,g)),P&&Ue(P,p),Ue(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},He=(d,p,g,w=!1,I=!1,S=0)=>{for(let k=S;k<d.length;k++)Pe(d[k],p,g,w,I)},E=d=>{if(d.shapeFlag&6)return E(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();const p=h(d.anchor||d.el),g=p&&p[Of];return g?h(g):p};let L=!1;const N=(d,p,g)=>{d==null?p._vnode&&Pe(p._vnode,null,null,!0):v(p._vnode||null,d,p,null,null,null,g),p._vnode=d,L||(L=!0,vo(),Ac(),L=!1)},M={p:v,um:Pe,m:Xe,r:cn,mt:Nn,mc:ge,pc:J,pbc:$e,n:E,o:t};return{render:N,hydrate:void 0,createApp:Qf(N)}}function Ls({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Jt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function ad(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Kc(t,e,n=!1){const r=t.children,s=e.children;if(H(r)&&H(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Pt(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Kc(o,a)),a.type===hs&&(a.el=o.el),a.type===Ht&&!a.el&&(a.el=o.el)}}function cd(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Gc(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Gc(e)}function Ro(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const ld=Symbol.for("v-scx"),ud=()=>ot(ld);function Pr(t,e,n){return Jc(t,e,n)}function Jc(t,e,n=ie){const{immediate:r,deep:s,flush:i,once:o}=n,a=Ie({},n),c=e&&r||!e&&i!=="post";let l;if(sr){if(i==="sync"){const m=ud();l=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=it,m.resume=it,m.pause=it,m}}const u=we;a.call=(m,y,v)=>lt(m,u,y,v);let f=!1;i==="post"?a.scheduler=m=>{Ue(m,u&&u.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(m,y)=>{y?m():Vi(m)}),a.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const h=Tf(t,e,a);return sr&&(l?l.push(h):c&&h()),h}function fd(t,e,n){const r=this.proxy,s=de(t)?t.includes(".")?Yc(r,t):()=>r[t]:t.bind(r,r);let i;W(e)?i=e:(i=e.handler,n=e);const o=hr(this),a=Jc(s,i.bind(r),n);return o(),a}function Yc(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const dd=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ve(e)}Modifiers`]||t[`${sn(e)}Modifiers`];function hd(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ie;let s=n;const i=e.startsWith("update:"),o=i&&dd(r,e.slice(7));o&&(o.trim&&(s=n.map(u=>de(u)?u.trim():u)),o.number&&(s=n.map(ei)));let a,c=r[a=Os(e)]||r[a=Os(Ve(e))];!c&&i&&(c=r[a=Os(sn(e))]),c&&lt(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,lt(l,t,6,s)}}function Xc(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!W(t)){const c=l=>{const u=Xc(l,e,!0);u&&(a=!0,Ie(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(le(t)&&r.set(t,null),null):(H(i)?i.forEach(c=>o[c]=null):Ie(o,i),le(t)&&r.set(t,o),o)}function ds(t,e){return!t||!rs(e)?!1:(e=e.slice(2).replace(/Once$/,""),Q(t,e[0].toLowerCase()+e.slice(1))||Q(t,sn(e))||Q(t,e))}function Co(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:f,data:h,setupState:m,ctx:y,inheritAttrs:v}=t,b=Vr(t);let T,R;try{if(n.shapeFlag&4){const x=s||r,j=x;T=st(l.call(j,x,u,f,m,h,y)),R=a}else{const x=e;T=st(x.length>1?x(f,{attrs:a,slots:o,emit:c}):x(f,null)),R=e.props?a:pd(a)}}catch(x){Gn.length=0,us(x,t,1),T=ce(Ht)}let A=T;if(R&&v!==!1){const x=Object.keys(R),{shapeFlag:j}=A;x.length&&j&7&&(i&&x.some(xi)&&(R=md(R,i)),A=Tn(A,R,!1,!0))}return n.dirs&&(A=Tn(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(n.dirs):n.dirs),n.transition&&Wi(A,n.transition),T=A,Vr(b),T}const pd=t=>{let e;for(const n in t)(n==="class"||n==="style"||rs(n))&&((e||(e={}))[n]=t[n]);return e},md=(t,e)=>{const n={};for(const r in t)(!xi(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function gd(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Ao(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==r[h]&&!ds(l,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Ao(r,o,l):!0:!!o;return!1}function Ao(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ds(n,i))return!0}return!1}function _d({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Qc=t=>t.__isSuspense;function yd(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):Af(t)}const me=Symbol.for("v-fgt"),hs=Symbol.for("v-txt"),Ht=Symbol.for("v-cmt"),Ms=Symbol.for("v-stc"),Gn=[];let Be=null;function Z(t=!1){Gn.push(Be=t?null:[])}function vd(){Gn.pop(),Be=Gn[Gn.length-1]||null}let rr=1;function Oo(t,e=!1){rr+=t,t<0&&Be&&e&&(Be.hasOnce=!0)}function Zc(t){return t.dynamicChildren=rr>0?Be||mn:null,vd(),rr>0&&Be&&Be.push(t),t}function ne(t,e,n,r,s,i){return Zc(B(t,e,n,r,s,i,!0))}function el(t,e,n,r,s){return Zc(ce(t,e,n,r,s,!0))}function qr(t){return t?t.__v_isVNode===!0:!1}function Mn(t,e){return t.type===e.type&&t.key===e.key}const tl=({key:t})=>t??null,kr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?de(t)||Se(t)||W(t)?{i:Fe,r:t,k:e,f:!!n}:t:null);function B(t,e=null,n=null,r=0,s=null,i=t===me?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&tl(e),ref:e&&kr(e),scopeId:Pc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Fe};return a?(Ji(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=de(n)?8:16),rr>0&&!o&&Be&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Be.push(c),c}const ce=bd;function bd(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Vf)&&(t=Ht),qr(t)){const a=Tn(t,e,!0);return n&&Ji(a,n),rr>0&&!i&&Be&&(a.shapeFlag&6?Be[Be.indexOf(t)]=a:Be.push(a)),a.patchFlag=-2,a}if(kd(t)&&(t=t.__vccOpts),e){e=wd(e);let{class:a,style:c}=e;a&&!de(a)&&(e.class=In(a)),le(c)&&(ji(c)&&!H(c)&&(c=Ie({},c)),e.style=Li(c))}const o=de(t)?1:Qc(t)?128:Pf(t)?64:le(t)?4:W(t)?2:0;return B(t,e,n,r,s,o,i,!0)}function wd(t){return t?ji(t)||Hc(t)?Ie({},t):t:null}function Tn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=t,l=e?Ed(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&tl(l),ref:e&&e.ref?n&&i?H(i)?i.concat(kr(e)):[i,kr(e)]:kr(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==me?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Tn(t.ssContent),ssFallback:t.ssFallback&&Tn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Wi(u,c.clone(u)),u}function Mt(t=" ",e=0){return ce(hs,null,t,e)}function nl(t="",e=!1){return e?(Z(),el(Ht,null,t)):ce(Ht,null,t)}function st(t){return t==null||typeof t=="boolean"?ce(Ht):H(t)?ce(me,null,t.slice()):qr(t)?Pt(t):ce(hs,null,String(t))}function Pt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Tn(t)}function Ji(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ji(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Hc(e)?e._ctx=Fe:s===3&&Fe&&(Fe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else W(e)?(e={default:e,_ctx:Fe},n=32):(e=String(e),r&64?(n=16,e=[Mt(e)]):n=8);t.children=e,t.shapeFlag|=n}function Ed(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=In([e.class,r.class]));else if(s==="style")e.style=Li([e.style,r.style]);else if(rs(s)){const i=e[s],o=r[s];o&&i!==o&&!(H(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function tt(t,e,n,r=null){lt(t,e,7,[n,r])}const Sd=Fc();let Id=0;function Td(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Sd,i={uid:Id++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Xu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Vc(r,s),emitsOptions:Xc(r,s),emit:null,emitted:null,propsDefaults:ie,inheritAttrs:r.inheritAttrs,ctx:ie,data:ie,props:ie,attrs:ie,slots:ie,refs:ie,setupState:ie,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=hd.bind(null,i),t.ce&&t.ce(i),i}let we=null,zr,ui;{const t=as(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};zr=e("__VUE_INSTANCE_SETTERS__",n=>we=n),ui=e("__VUE_SSR_SETTERS__",n=>sr=n)}const hr=t=>{const e=we;return zr(t),t.scope.on(),()=>{t.scope.off(),zr(e)}},Po=()=>{we&&we.scope.off(),zr(null)};function rl(t){return t.vnode.shapeFlag&4}let sr=!1;function Rd(t,e=!1,n=!1){e&&ui(e);const{props:r,children:s}=t.vnode,i=rl(t);Zf(t,r,i,e),rd(t,s,n||e);const o=i?Cd(t,e):void 0;return e&&ui(!1),o}function Cd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,qf);const{setup:r}=n;if(r){bt();const s=t.setupContext=r.length>1?Od(t):null,i=hr(t),o=dr(r,t,0,[t.props,s]),a=tc(o);if(wt(),i(),(a||t.sp)&&!zn(t)&&xc(t),a){if(o.then(Po,Po),e)return o.then(c=>{ko(t,c)}).catch(c=>{us(c,t,0)});t.asyncDep=o}else ko(t,o)}else sl(t)}function ko(t,e,n){W(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:le(e)&&(t.setupState=Ic(e)),sl(t)}function sl(t,e,n){const r=t.type;t.render||(t.render=r.render||it);{const s=hr(t);bt();try{zf(t)}finally{wt(),s()}}}const Ad={get(t,e){return ve(t,"get",""),t[e]}};function Od(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Ad),slots:t.slots,emit:t.emit,expose:e}}function ps(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Ic(yf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Kn)return Kn[n](t)},has(e,n){return n in e||n in Kn}})):t.proxy}function Pd(t,e=!0){return W(t)?t.displayName||t.name:t.name||e&&t.__name}function kd(t){return W(t)&&"__vccOpts"in t}const fe=(t,e)=>Sf(t,e,sr);function il(t,e,n){const r=arguments.length;return r===2?le(e)&&!H(e)?qr(e)?ce(t,null,[e]):ce(t,e):ce(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&qr(n)&&(n=[n]),ce(t,e,n))}const xd="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let fi;const xo=typeof window<"u"&&window.trustedTypes;if(xo)try{fi=xo.createPolicy("vue",{createHTML:t=>t})}catch{}const ol=fi?t=>fi.createHTML(t):t=>t,Nd="http://www.w3.org/2000/svg",Dd="http://www.w3.org/1998/Math/MathML",ht=typeof document<"u"?document:null,No=ht&&ht.createElement("template"),Ld={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?ht.createElementNS(Nd,t):e==="mathml"?ht.createElementNS(Dd,t):n?ht.createElement(t,{is:n}):ht.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>ht.createTextNode(t),createComment:t=>ht.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ht.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{No.innerHTML=ol(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=No.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Md=Symbol("_vtc");function Ud(t,e,n){const r=t[Md];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Do=Symbol("_vod"),Fd=Symbol("_vsh"),Bd=Symbol(""),$d=/(^|;)\s*display\s*:/;function Hd(t,e,n){const r=t.style,s=de(n);let i=!1;if(n&&!s){if(e)if(de(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&xr(r,a,"")}else for(const o in e)n[o]==null&&xr(r,o,"");for(const o in n)o==="display"&&(i=!0),xr(r,o,n[o])}else if(s){if(e!==n){const o=r[Bd];o&&(n+=";"+o),r.cssText=n,i=$d.test(n)}}else e&&t.removeAttribute("style");Do in t&&(t[Do]=i?r.display:"",t[Fd]&&(r.display="none"))}const Lo=/\s*!important$/;function xr(t,e,n){if(H(n))n.forEach(r=>xr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=jd(t,e);Lo.test(n)?t.setProperty(sn(r),n.replace(Lo,""),"important"):t[r]=n}}const Mo=["Webkit","Moz","ms"],Us={};function jd(t,e){const n=Us[e];if(n)return n;let r=Ve(e);if(r!=="filter"&&r in t)return Us[e]=r;r=os(r);for(let s=0;s<Mo.length;s++){const i=Mo[s]+r;if(i in t)return Us[e]=i}return e}const Uo="http://www.w3.org/1999/xlink";function Fo(t,e,n,r,s,i=Yu(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Uo,e.slice(6,e.length)):t.setAttributeNS(Uo,e,n):n==null||i&&!sc(n)?t.removeAttribute(e):t.setAttribute(e,i?"":jt(n)?String(n):n)}function Bo(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?ol(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=sc(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function dn(t,e,n,r){t.addEventListener(e,n,r)}function Vd(t,e,n,r){t.removeEventListener(e,n,r)}const $o=Symbol("_vei");function Wd(t,e,n,r,s=null){const i=t[$o]||(t[$o]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=qd(e);if(r){const l=i[e]=Gd(r,s);dn(t,a,l,c)}else o&&(Vd(t,a,o,c),i[e]=void 0)}}const Ho=/(?:Once|Passive|Capture)$/;function qd(t){let e;if(Ho.test(t)){e={};let r;for(;r=t.match(Ho);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):sn(t.slice(2)),e]}let Fs=0;const zd=Promise.resolve(),Kd=()=>Fs||(zd.then(()=>Fs=0),Fs=Date.now());function Gd(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;lt(Jd(r,n.value),e,5,[r])};return n.value=t,n.attached=Kd(),n}function Jd(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const jo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Yd=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?Ud(t,r,o):e==="style"?Hd(t,n,r):rs(e)?xi(e)||Wd(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Xd(t,e,r,o))?(Bo(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Fo(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!de(r))?Bo(t,Ve(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Fo(t,e,r,o))};function Xd(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&jo(e)&&W(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return jo(e)&&de(n)?!1:e in t}const Vo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return H(e)?n=>Ar(e,n):e};function Qd(t){t.target.composing=!0}function Wo(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Bs=Symbol("_assign"),di={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Bs]=Vo(s);const i=r||s.props&&s.props.type==="number";dn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=ei(a)),t[Bs](a)}),n&&dn(t,"change",()=>{t.value=t.value.trim()}),e||(dn(t,"compositionstart",Qd),dn(t,"compositionend",Wo),dn(t,"change",Wo))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Bs]=Vo(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?ei(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},Zd=Ie({patchProp:Yd},Ld);let qo;function eh(){return qo||(qo=id(Zd))}const th=(...t)=>{const e=eh().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=rh(r);if(!s)return;const i=e._component;!W(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,nh(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function nh(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function rh(t){return de(t)?document.querySelector(t):t}const sh=()=>{};var zo={};/**
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
 */const al=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},ih=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},cl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let h=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(h=64)),r.push(n[u],n[f],n[h],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(al(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ih(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||f==null)throw new oh;const h=i<<2|a>>4;if(r.push(h),l!==64){const m=a<<4&240|l>>2;if(r.push(m),f!==64){const y=l<<6&192|f;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class oh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ah=function(t){const e=al(t);return cl.encodeByteArray(e,!0)},ll=function(t){return ah(t).replace(/\./g,"")},ul=function(t){try{return cl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ch(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const lh=()=>ch().__FIREBASE_DEFAULTS__,uh=()=>{if(typeof process>"u"||typeof zo>"u")return;const t=zo.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},fh=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ul(t[1]);return e&&JSON.parse(e)},Yi=()=>{try{return sh()||lh()||uh()||fh()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},dh=t=>{var e,n;return(n=(e=Yi())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},fl=()=>{var t;return(t=Yi())===null||t===void 0?void 0:t.config},dl=t=>{var e;return(e=Yi())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */function ms(t){return t.endsWith(".cloudworkstations.dev")}async function ph(t){return(await fetch(t,{credentials:"include"})).ok}const Jn={};function mh(){const t={prod:[],emulator:[]};for(const e of Object.keys(Jn))Jn[e]?t.emulator.push(e):t.prod.push(e);return t}function gh(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Ko=!1;function _h(t,e){if(typeof window>"u"||typeof document>"u"||!ms(window.location.host)||Jn[t]===e||Jn[t]||Ko)return;Jn[t]=e;function n(h){return`__firebase__banner__${h}`}const r="__firebase__banner",i=mh().prod.length>0;function o(){const h=document.getElementById(r);h&&h.remove()}function a(h){h.style.display="flex",h.style.background="#7faaf0",h.style.position="fixed",h.style.bottom="5px",h.style.left="5px",h.style.padding=".5em",h.style.borderRadius="5px",h.style.alignItems="center"}function c(h,m){h.setAttribute("width","24"),h.setAttribute("id",m),h.setAttribute("height","24"),h.setAttribute("viewBox","0 0 24 24"),h.setAttribute("fill","none"),h.style.marginLeft="-6px"}function l(){const h=document.createElement("span");return h.style.cursor="pointer",h.style.marginLeft="16px",h.style.fontSize="24px",h.innerHTML=" &times;",h.onclick=()=>{Ko=!0,o()},h}function u(h,m){h.setAttribute("id",m),h.innerText="Learn more",h.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",h.setAttribute("target","__blank"),h.style.paddingLeft="5px",h.style.textDecoration="underline"}function f(){const h=gh(r),m=n("text"),y=document.getElementById(m)||document.createElement("span"),v=n("learnmore"),b=document.getElementById(v)||document.createElement("a"),T=n("preprendIcon"),R=document.getElementById(T)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(h.created){const A=h.element;a(A),u(b,v);const x=l();c(R,T),A.append(R,y,b,x),document.body.appendChild(A)}i?(y.innerText="Preview backend disconnected.",R.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(R.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,y.innerText="Preview backend running in this workspace."),y.setAttribute("id",m)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
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
 */function Oe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Oe())}function vh(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function bh(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function wh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Eh(){const t=Oe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Sh(){try{return typeof indexedDB=="object"}catch{return!1}}function Ih(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Th="FirebaseError";class Vt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Th,Object.setPrototypeOf(this,Vt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pr.prototype.create)}}class pr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Rh(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Vt(s,a,r)}}function Rh(t,e){return t.replace(Ch,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Ch=/\{\$([^}]+)}/g;function Ah(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Rn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Go(i)&&Go(o)){if(!Rn(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Go(t){return t!==null&&typeof t=="object"}/**
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
 */function mr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function $n(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Hn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Oh(t,e){const n=new Ph(t,e);return n.subscribe.bind(n)}class Ph{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");kh(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=$s),s.error===void 0&&(s.error=$s),s.complete===void 0&&(s.complete=$s);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kh(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function $s(){}/**
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
 */function Wt(t){return t&&t._delegate?t._delegate:t}class Cn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Xt="[DEFAULT]";/**
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
 */class xh{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new hh;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Dh(e))try{this.getOrInitializeService({instanceIdentifier:Xt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Xt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xt){return this.instances.has(e)}getOptions(e=Xt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Nh(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Xt){return this.component?this.component.multipleInstances?e:Xt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Nh(t){return t===Xt?void 0:t}function Dh(t){return t.instantiationMode==="EAGER"}/**
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
 */class Lh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new xh(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const Mh={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},Uh=se.INFO,Fh={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},Bh=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Fh[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hl{constructor(e){this.name=e,this._logLevel=Uh,this._logHandler=Bh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Mh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const $h=(t,e)=>e.some(n=>t instanceof n);let Jo,Yo;function Hh(){return Jo||(Jo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jh(){return Yo||(Yo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pl=new WeakMap,hi=new WeakMap,ml=new WeakMap,Hs=new WeakMap,Xi=new WeakMap;function Vh(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Ft(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&pl.set(n,t)}).catch(()=>{}),Xi.set(e,t),e}function Wh(t){if(hi.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});hi.set(t,e)}let pi={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ml.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ft(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function qh(t){pi=t(pi)}function zh(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(js(this),e,...n);return ml.set(r,e.sort?e.sort():[e]),Ft(r)}:jh().includes(t)?function(...e){return t.apply(js(this),e),Ft(pl.get(this))}:function(...e){return Ft(t.apply(js(this),e))}}function Kh(t){return typeof t=="function"?zh(t):(t instanceof IDBTransaction&&Wh(t),$h(t,Hh())?new Proxy(t,pi):t)}function Ft(t){if(t instanceof IDBRequest)return Vh(t);if(Hs.has(t))return Hs.get(t);const e=Kh(t);return e!==t&&(Hs.set(t,e),Xi.set(e,t)),e}const js=t=>Xi.get(t);function Gh(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Ft(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Ft(o.result),c.oldVersion,c.newVersion,Ft(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Jh=["get","getKey","getAll","getAllKeys","count"],Yh=["put","add","delete","clear"],Vs=new Map;function Xo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Vs.get(e))return Vs.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Yh.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Jh.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Vs.set(e,i),i}qh(t=>({...t,get:(e,n,r)=>Xo(e,n)||t.get(e,n,r),has:(e,n)=>!!Xo(e,n)||t.has(e,n)}));/**
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
 */class Xh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Qh(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Qh(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const mi="@firebase/app",Qo="0.13.1";/**
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
 */const Et=new hl("@firebase/app"),Zh="@firebase/app-compat",ep="@firebase/analytics-compat",tp="@firebase/analytics",np="@firebase/app-check-compat",rp="@firebase/app-check",sp="@firebase/auth",ip="@firebase/auth-compat",op="@firebase/database",ap="@firebase/data-connect",cp="@firebase/database-compat",lp="@firebase/functions",up="@firebase/functions-compat",fp="@firebase/installations",dp="@firebase/installations-compat",hp="@firebase/messaging",pp="@firebase/messaging-compat",mp="@firebase/performance",gp="@firebase/performance-compat",_p="@firebase/remote-config",yp="@firebase/remote-config-compat",vp="@firebase/storage",bp="@firebase/storage-compat",wp="@firebase/firestore",Ep="@firebase/ai",Sp="@firebase/firestore-compat",Ip="firebase",Tp="11.9.0";/**
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
 */const gi="[DEFAULT]",Rp={[mi]:"fire-core",[Zh]:"fire-core-compat",[tp]:"fire-analytics",[ep]:"fire-analytics-compat",[rp]:"fire-app-check",[np]:"fire-app-check-compat",[sp]:"fire-auth",[ip]:"fire-auth-compat",[op]:"fire-rtdb",[ap]:"fire-data-connect",[cp]:"fire-rtdb-compat",[lp]:"fire-fn",[up]:"fire-fn-compat",[fp]:"fire-iid",[dp]:"fire-iid-compat",[hp]:"fire-fcm",[pp]:"fire-fcm-compat",[mp]:"fire-perf",[gp]:"fire-perf-compat",[_p]:"fire-rc",[yp]:"fire-rc-compat",[vp]:"fire-gcs",[bp]:"fire-gcs-compat",[wp]:"fire-fst",[Sp]:"fire-fst-compat",[Ep]:"fire-vertex","fire-js":"fire-js",[Ip]:"fire-js-all"};/**
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
 */const Kr=new Map,Cp=new Map,_i=new Map;function Zo(t,e){try{t.container.addComponent(e)}catch(n){Et.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ir(t){const e=t.name;if(_i.has(e))return Et.debug(`There were multiple attempts to register component ${e}.`),!1;_i.set(e,t);for(const n of Kr.values())Zo(n,t);for(const n of Cp.values())Zo(n,t);return!0}function gl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function We(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Ap={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Bt=new pr("app","Firebase",Ap);/**
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
 */class Op{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Bt.create("app-deleted",{appName:this._name})}}/**
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
 */const gr=Tp;function _l(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:gi,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Bt.create("bad-app-name",{appName:String(s)});if(n||(n=fl()),!n)throw Bt.create("no-options");const i=Kr.get(s);if(i){if(Rn(n,i.options)&&Rn(r,i.config))return i;throw Bt.create("duplicate-app",{appName:s})}const o=new Lh(s);for(const c of _i.values())o.addComponent(c);const a=new Op(n,r,o);return Kr.set(s,a),a}function Pp(t=gi){const e=Kr.get(t);if(!e&&t===gi&&fl())return _l();if(!e)throw Bt.create("no-app",{appName:t});return e}function bn(t,e,n){var r;let s=(r=Rp[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Et.warn(a.join(" "));return}ir(new Cn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const kp="firebase-heartbeat-database",xp=1,or="firebase-heartbeat-store";let Ws=null;function yl(){return Ws||(Ws=Gh(kp,xp,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(or)}catch(n){console.warn(n)}}}}).catch(t=>{throw Bt.create("idb-open",{originalErrorMessage:t.message})})),Ws}async function Np(t){try{const n=(await yl()).transaction(or),r=await n.objectStore(or).get(vl(t));return await n.done,r}catch(e){if(e instanceof Vt)Et.warn(e.message);else{const n=Bt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Et.warn(n.message)}}}async function ea(t,e){try{const r=(await yl()).transaction(or,"readwrite");await r.objectStore(or).put(e,vl(t)),await r.done}catch(n){if(n instanceof Vt)Et.warn(n.message);else{const r=Bt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Et.warn(r.message)}}}function vl(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Dp=1024,Lp=30;class Mp{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Fp(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ta();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Lp){const o=Bp(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Et.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ta(),{heartbeatsToSend:r,unsentEntries:s}=Up(this._heartbeatsCache.heartbeats),i=ll(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Et.warn(n),""}}}function ta(){return new Date().toISOString().substring(0,10)}function Up(t,e=Dp){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),na(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),na(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Fp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Sh()?Ih().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Np(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ea(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ea(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function na(t){return ll(JSON.stringify({version:2,heartbeats:t})).length}function Bp(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function $p(t){ir(new Cn("platform-logger",e=>new Xh(e),"PRIVATE")),ir(new Cn("heartbeat",e=>new Mp(e),"PRIVATE")),bn(mi,Qo,t),bn(mi,Qo,"esm2017"),bn("fire-js","")}$p("");function Qi(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function bl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Hp=bl,wl=new pr("auth","Firebase",bl());/**
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
 */const Gr=new hl("@firebase/auth");function jp(t,...e){Gr.logLevel<=se.WARN&&Gr.warn(`Auth (${gr}): ${t}`,...e)}function Nr(t,...e){Gr.logLevel<=se.ERROR&&Gr.error(`Auth (${gr}): ${t}`,...e)}/**
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
 */function Ke(t,...e){throw Zi(t,...e)}function at(t,...e){return Zi(t,...e)}function El(t,e,n){const r=Object.assign(Object.assign({},Hp()),{[e]:n});return new pr("auth","Firebase",r).create(e,{appName:t.name})}function vt(t){return El(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Zi(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return wl.create(t,...e)}function $(t,e,...n){if(!t)throw Zi(e,...n)}function _t(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Nr(e),new Error(e)}function St(t,e){t||_t(e)}/**
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
 */function yi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Vp(){return ra()==="http:"||ra()==="https:"}function ra(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Wp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Vp()||bh()||"connection"in navigator)?navigator.onLine:!0}function qp(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class _r{constructor(e,n){this.shortDelay=e,this.longDelay=n,St(n>e,"Short delay should be less than long delay!"),this.isMobile=yh()||wh()}get(){return Wp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function eo(t,e){St(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Sl{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_t("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_t("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_t("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const zp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Kp=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Gp=new _r(3e4,6e4);function qt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function zt(t,e,n,r,s={}){return Il(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=mr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const l=Object.assign({method:e,headers:c},i);return vh()||(l.referrerPolicy="no-referrer"),t.emulatorConfig&&ms(t.emulatorConfig.host)&&(l.credentials="include"),Sl.fetch()(await Tl(t,t.config.apiHost,n,a),l)})}async function Il(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},zp),e);try{const s=new Yp(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Cr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Cr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Cr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Cr(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw El(t,u,l);Ke(t,u)}}catch(s){if(s instanceof Vt)throw s;Ke(t,"network-request-failed",{message:String(s)})}}async function yr(t,e,n,r,s={}){const i=await zt(t,e,n,r,s);return"mfaPendingCredential"in i&&Ke(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Tl(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?eo(t.config,s):`${t.config.apiScheme}://${s}`;return Kp.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function Jp(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Yp{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(at(this.auth,"network-request-failed")),Gp.get())})}}function Cr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=at(t,e,r);return s.customData._tokenResponse=n,s}function sa(t){return t!==void 0&&t.enterprise!==void 0}class Xp{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Jp(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Qp(t,e){return zt(t,"GET","/v2/recaptchaConfig",qt(t,e))}/**
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
 */async function Zp(t,e){return zt(t,"POST","/v1/accounts:delete",e)}async function Jr(t,e){return zt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Yn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function em(t,e=!1){const n=Wt(t),r=await n.getIdToken(e),s=to(r);$(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Yn(qs(s.auth_time)),issuedAtTime:Yn(qs(s.iat)),expirationTime:Yn(qs(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function qs(t){return Number(t)*1e3}function to(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Nr("JWT malformed, contained fewer than 3 sections"),null;try{const s=ul(n);return s?JSON.parse(s):(Nr("Failed to decode base64 JWT payload"),null)}catch(s){return Nr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ia(t){const e=to(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ar(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Vt&&tm(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function tm({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class nm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class vi{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Yn(this.lastLoginAt),this.creationTime=Yn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Yr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ar(t,Jr(n,{idToken:r}));$(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Rl(i.providerUserInfo):[],a=sm(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new vi(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function rm(t){const e=Wt(t);await Yr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function sm(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Rl(t){return t.map(e=>{var{providerId:n}=e,r=Qi(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function im(t,e){const n=await Il(t,{},async()=>{const r=mr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Tl(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:r};return t.emulatorConfig&&ms(t.emulatorConfig.host)&&(c.credentials="include"),Sl.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function om(t,e){return zt(t,"POST","/v2/accounts:revokeToken",qt(t,e))}/**
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
 */class wn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ia(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){$(e.length!==0,"internal-error");const n=ia(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:($(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await im(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new wn;return r&&($(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&($(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&($(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new wn,this.toJSON())}_performRefresh(){return _t("not implemented")}}/**
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
 */function Ct(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class qe{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Qi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new nm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new vi(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ar(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return em(this,e)}reload(){return rm(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new qe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Yr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(We(this.auth.app))return Promise.reject(vt(this.auth));const e=await this.getIdToken();return await ar(this,Zp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,T=(l=n.createdAt)!==null&&l!==void 0?l:void 0,R=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:A,emailVerified:x,isAnonymous:j,providerData:G,stsTokenManager:z}=n;$(A&&z,e,"internal-error");const ge=wn.fromJSON(this.name,z);$(typeof A=="string",e,"internal-error"),Ct(f,e.name),Ct(h,e.name),$(typeof x=="boolean",e,"internal-error"),$(typeof j=="boolean",e,"internal-error"),Ct(m,e.name),Ct(y,e.name),Ct(v,e.name),Ct(b,e.name),Ct(T,e.name),Ct(R,e.name);const Te=new qe({uid:A,auth:e,email:h,emailVerified:x,displayName:f,isAnonymous:j,photoURL:y,phoneNumber:m,tenantId:v,stsTokenManager:ge,createdAt:T,lastLoginAt:R});return G&&Array.isArray(G)&&(Te.providerData=G.map($e=>Object.assign({},$e))),b&&(Te._redirectEventId=b),Te}static async _fromIdTokenResponse(e,n,r=!1){const s=new wn;s.updateFromServerResponse(n);const i=new qe({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Yr(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];$(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Rl(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new wn;a.updateFromIdToken(r);const c=new qe({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new vi(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
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
 */const oa=new Map;function yt(t){St(t instanceof Function,"Expected a class definition");let e=oa.get(t);return e?(St(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,oa.set(t,e),e)}/**
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
 */class Cl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Cl.type="NONE";const aa=Cl;/**
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
 */function Dr(t,e,n){return`firebase:${t}:${e}:${n}`}class En{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Dr(this.userKey,s.apiKey,i),this.fullPersistenceKey=Dr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Jr(this.auth,{idToken:e}).catch(()=>{});return n?qe._fromGetAccountInfoResponse(this.auth,n,e):null}return qe._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new En(yt(aa),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||yt(aa);const o=Dr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){let f;if(typeof u=="string"){const h=await Jr(e,{idToken:u}).catch(()=>{});if(!h)break;f=await qe._fromGetAccountInfoResponse(e,h,u)}else f=qe._fromJSON(e,u);l!==i&&(a=f),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new En(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new En(i,e,r))}}/**
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
 */function ca(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(kl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Al(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Nl(e))return"Blackberry";if(Dl(e))return"Webos";if(Ol(e))return"Safari";if((e.includes("chrome/")||Pl(e))&&!e.includes("edge/"))return"Chrome";if(xl(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Al(t=Oe()){return/firefox\//i.test(t)}function Ol(t=Oe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Pl(t=Oe()){return/crios\//i.test(t)}function kl(t=Oe()){return/iemobile/i.test(t)}function xl(t=Oe()){return/android/i.test(t)}function Nl(t=Oe()){return/blackberry/i.test(t)}function Dl(t=Oe()){return/webos/i.test(t)}function no(t=Oe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function am(t=Oe()){var e;return no(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function cm(){return Eh()&&document.documentMode===10}function Ll(t=Oe()){return no(t)||xl(t)||Dl(t)||Nl(t)||/windows phone/i.test(t)||kl(t)}/**
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
 */function Ml(t,e=[]){let n;switch(t){case"Browser":n=ca(Oe());break;case"Worker":n=`${ca(Oe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${gr}/${r}`}/**
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
 */class lm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function um(t,e={}){return zt(t,"GET","/v2/passwordPolicy",qt(t,e))}/**
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
 */const fm=6;class dm{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:fm,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class hm{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new la(this),this.idTokenSubscription=new la(this),this.beforeStateQueue=new lm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=yt(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await En.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Jr(this,{idToken:e}),r=await qe._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(We(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Yr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=qp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(We(this.app))return Promise.reject(vt(this));const n=e?Wt(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return We(this.app)?Promise.reject(vt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return We(this.app)?Promise.reject(vt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await um(this),n=new dm(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new pr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await om(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&yt(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await En.create(this,[yt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if($(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ml(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(We(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&jp(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function on(t){return Wt(t)}class la{constructor(e){this.auth=e,this.observer=null,this.addObserver=Oh(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let gs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function pm(t){gs=t}function Ul(t){return gs.loadJS(t)}function mm(){return gs.recaptchaEnterpriseScript}function gm(){return gs.gapiScript}function _m(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class ym{constructor(){this.enterprise=new vm}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class vm{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const bm="recaptcha-enterprise",Fl="NO_RECAPTCHA";class wm{constructor(e){this.type=bm,this.auth=on(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Qp(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Xp(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;sa(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(Fl)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new ym().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&sa(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=mm();c.length!==0&&(c+=a),Ul(c).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function ua(t,e,n,r=!1,s=!1){const i=new wm(t);let o;if(s)o=Fl;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,l=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function bi(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await ua(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await ua(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
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
 */function Em(t,e){const n=gl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Rn(i,e??{}))return s;Ke(s,"already-initialized")}return n.initialize({options:e})}function Sm(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(yt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Im(t,e,n){const r=on(t);$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Bl(e),{host:o,port:a}=Tm(e),c=a===null?"":`:${a}`,l={url:`${i}//${o}${c}/`},u=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){$(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),$(Rn(l,r.config.emulator)&&Rn(u,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=l,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,ms(o)?(ph(`${i}//${o}${c}`),_h("Auth",!0)):Rm()}function Bl(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Tm(t){const e=Bl(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:fa(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:fa(o)}}}function fa(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Rm(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ro{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return _t("not implemented")}_getIdTokenResponse(e){return _t("not implemented")}_linkToIdToken(e,n){return _t("not implemented")}_getReauthenticationResolver(e){return _t("not implemented")}}async function Cm(t,e){return zt(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Am(t,e){return yr(t,"POST","/v1/accounts:signInWithPassword",qt(t,e))}/**
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
 */async function Om(t,e){return yr(t,"POST","/v1/accounts:signInWithEmailLink",qt(t,e))}async function Pm(t,e){return yr(t,"POST","/v1/accounts:signInWithEmailLink",qt(t,e))}/**
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
 */class cr extends ro{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new cr(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new cr(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bi(e,n,"signInWithPassword",Am);case"emailLink":return Om(e,{email:this._email,oobCode:this._password});default:Ke(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bi(e,r,"signUpPassword",Cm);case"emailLink":return Pm(e,{idToken:n,email:this._email,oobCode:this._password});default:Ke(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Sn(t,e){return yr(t,"POST","/v1/accounts:signInWithIdp",qt(t,e))}/**
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
 */const km="http://localhost";class tn extends ro{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new tn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ke("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Qi(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new tn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Sn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Sn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Sn(e,n)}buildRequest(){const e={requestUri:km,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=mr(n)}return e}}/**
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
 */function xm(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Nm(t){const e=$n(Hn(t)).link,n=e?$n(Hn(e)).deep_link_id:null,r=$n(Hn(t)).deep_link_id;return(r?$n(Hn(r)).link:null)||r||n||e||t}class so{constructor(e){var n,r,s,i,o,a;const c=$n(Hn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,f=xm((s=c.mode)!==null&&s!==void 0?s:null);$(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.lang)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Nm(e);try{return new so(n)}catch{return null}}}/**
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
 */class Pn{constructor(){this.providerId=Pn.PROVIDER_ID}static credential(e,n){return cr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=so.parseLink(n);return $(r,"argument-error"),cr._fromEmailAndCode(e,r.code,r.tenantId)}}Pn.PROVIDER_ID="password";Pn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Pn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class $l{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class vr extends $l{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class xt extends vr{constructor(){super("facebook.com")}static credential(e){return tn._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xt.credential(e.oauthAccessToken)}catch{return null}}}xt.FACEBOOK_SIGN_IN_METHOD="facebook.com";xt.PROVIDER_ID="facebook.com";/**
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
 */class Nt extends vr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return tn._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Nt.credential(n,r)}catch{return null}}}Nt.GOOGLE_SIGN_IN_METHOD="google.com";Nt.PROVIDER_ID="google.com";/**
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
 */class Dt extends vr{constructor(){super("github.com")}static credential(e){return tn._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dt.credentialFromTaggedObject(e)}static credentialFromError(e){return Dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dt.credential(e.oauthAccessToken)}catch{return null}}}Dt.GITHUB_SIGN_IN_METHOD="github.com";Dt.PROVIDER_ID="github.com";/**
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
 */class Lt extends vr{constructor(){super("twitter.com")}static credential(e,n){return tn._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Lt.credentialFromTaggedObject(e)}static credentialFromError(e){return Lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Lt.credential(n,r)}catch{return null}}}Lt.TWITTER_SIGN_IN_METHOD="twitter.com";Lt.PROVIDER_ID="twitter.com";/**
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
 */async function Dm(t,e){return yr(t,"POST","/v1/accounts:signUp",qt(t,e))}/**
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
 */class nn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await qe._fromIdTokenResponse(e,r,s),o=da(r);return new nn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=da(r);return new nn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function da(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Xr extends Vt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Xr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Xr(e,n,r,s)}}function Hl(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Xr._fromErrorAndOperation(t,i,e,r):i})}async function Lm(t,e,n=!1){const r=await ar(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return nn._forOperation(t,"link",r)}/**
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
 */async function Mm(t,e,n=!1){const{auth:r}=t;if(We(r.app))return Promise.reject(vt(r));const s="reauthenticate";try{const i=await ar(t,Hl(r,s,e,t),n);$(i.idToken,r,"internal-error");const o=to(i.idToken);$(o,r,"internal-error");const{sub:a}=o;return $(t.uid===a,r,"user-mismatch"),nn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ke(r,"user-mismatch"),i}}/**
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
 */async function jl(t,e,n=!1){if(We(t.app))return Promise.reject(vt(t));const r="signIn",s=await Hl(t,r,e),i=await nn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Um(t,e){return jl(on(t),e)}/**
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
 */async function Vl(t){const e=on(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Fm(t,e,n){if(We(t.app))return Promise.reject(vt(t));const r=on(t),o=await bi(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Dm).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Vl(t),c}),a=await nn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function Bm(t,e,n){return We(t.app)?Promise.reject(vt(t)):Um(Wt(t),Pn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Vl(t),r})}function $m(t,e,n,r){return Wt(t).onIdTokenChanged(e,n,r)}function Hm(t,e,n){return Wt(t).beforeAuthStateChanged(e,n)}function jm(t,e,n,r){return Wt(t).onAuthStateChanged(e,n,r)}const Qr="__sak";/**
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
 */class Wl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Qr,"1"),this.storage.removeItem(Qr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Vm=1e3,Wm=10;class ql extends Wl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ll(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);cm()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Wm):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Vm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ql.type="LOCAL";const qm=ql;/**
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
 */class zl extends Wl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}zl.type="SESSION";const Kl=zl;/**
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
 */function zm(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class _s{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new _s(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await zm(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_s.receivers=[];/**
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
 */function io(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Km{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=io("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const h=f;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(h.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ct(){return window}function Gm(t){ct().location.href=t}/**
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
 */function Gl(){return typeof ct().WorkerGlobalScope<"u"&&typeof ct().importScripts=="function"}async function Jm(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ym(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Xm(){return Gl()?self:null}/**
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
 */const Jl="firebaseLocalStorageDb",Qm=1,Zr="firebaseLocalStorage",Yl="fbase_key";class br{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ys(t,e){return t.transaction([Zr],e?"readwrite":"readonly").objectStore(Zr)}function Zm(){const t=indexedDB.deleteDatabase(Jl);return new br(t).toPromise()}function wi(){const t=indexedDB.open(Jl,Qm);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Zr,{keyPath:Yl})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Zr)?e(r):(r.close(),await Zm(),e(await wi()))})})}async function ha(t,e,n){const r=ys(t,!0).put({[Yl]:e,value:n});return new br(r).toPromise()}async function eg(t,e){const n=ys(t,!1).get(e),r=await new br(n).toPromise();return r===void 0?null:r.value}function pa(t,e){const n=ys(t,!0).delete(e);return new br(n).toPromise()}const tg=800,ng=3;class Xl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wi(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ng)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Gl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_s._getInstance(Xm()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Jm(),!this.activeServiceWorker)return;this.sender=new Km(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ym()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wi();return await ha(e,Qr,"1"),await pa(e,Qr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ha(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>eg(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>pa(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ys(s,!1).getAll();return new br(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xl.type="LOCAL";const rg=Xl;new _r(3e4,6e4);/**
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
 */function sg(t,e){return e?yt(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class oo extends ro{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Sn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Sn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Sn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ig(t){return jl(t.auth,new oo(t),t.bypassAuthState)}function og(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),Mm(n,new oo(t),t.bypassAuthState)}async function ag(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),Lm(n,new oo(t),t.bypassAuthState)}/**
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
 */class Ql{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ig;case"linkViaPopup":case"linkViaRedirect":return ag;case"reauthViaPopup":case"reauthViaRedirect":return og;default:Ke(this.auth,"internal-error")}}resolve(e){St(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){St(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const cg=new _r(2e3,1e4);class pn extends Ql{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,pn.currentPopupAction&&pn.currentPopupAction.cancel(),pn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){St(this.filter.length===1,"Popup operations only handle one event");const e=io();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(at(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(at(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(at(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,cg.get())};e()}}pn.currentPopupAction=null;/**
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
 */const lg="pendingRedirect",Lr=new Map;class ug extends Ql{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Lr.get(this.auth._key());if(!e){try{const r=await fg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Lr.set(this.auth._key(),e)}return this.bypassAuthState||Lr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fg(t,e){const n=pg(e),r=hg(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function dg(t,e){Lr.set(t._key(),e)}function hg(t){return yt(t._redirectPersistence)}function pg(t){return Dr(lg,t.config.apiKey,t.name)}async function mg(t,e,n=!1){if(We(t.app))return Promise.reject(vt(t));const r=on(t),s=sg(r,e),o=await new ug(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const gg=10*60*1e3;class _g{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!yg(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Zl(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(at(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gg&&this.cachedEventUids.clear(),this.cachedEventUids.has(ma(e))}saveEventToCache(e){this.cachedEventUids.add(ma(e)),this.lastProcessedEventTime=Date.now()}}function ma(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Zl({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function yg(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Zl(t);default:return!1}}/**
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
 */async function vg(t,e={}){return zt(t,"GET","/v1/projects",e)}/**
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
 */const bg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wg=/^https?/;async function Eg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await vg(t);for(const n of e)try{if(Sg(n))return}catch{}Ke(t,"unauthorized-domain")}function Sg(t){const e=yi(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!wg.test(n))return!1;if(bg.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Ig=new _r(3e4,6e4);function ga(){const t=ct().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Tg(t){return new Promise((e,n)=>{var r,s,i;function o(){ga(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ga(),n(at(t,"network-request-failed"))},timeout:Ig.get()})}if(!((s=(r=ct().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=ct().gapi)===null||i===void 0)&&i.load)o();else{const a=_m("iframefcb");return ct()[a]=()=>{gapi.load?o():n(at(t,"network-request-failed"))},Ul(`${gm()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Mr=null,e})}let Mr=null;function Rg(t){return Mr=Mr||Tg(t),Mr}/**
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
 */const Cg=new _r(5e3,15e3),Ag="__/auth/iframe",Og="emulator/auth/iframe",Pg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},kg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xg(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?eo(e,Og):`https://${t.config.authDomain}/${Ag}`,r={apiKey:e.apiKey,appName:t.name,v:gr},s=kg.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${mr(r).slice(1)}`}async function Ng(t){const e=await Rg(t),n=ct().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:xg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Pg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=at(t,"network-request-failed"),a=ct().setTimeout(()=>{i(o)},Cg.get());function c(){ct().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const Dg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Lg=500,Mg=600,Ug="_blank",Fg="http://localhost";class _a{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Bg(t,e,n,r=Lg,s=Mg){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Dg),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Oe().toLowerCase();n&&(a=Pl(l)?Ug:n),Al(l)&&(e=e||Fg,c.scrollbars="yes");const u=Object.entries(c).reduce((h,[m,y])=>`${h}${m}=${y},`,"");if(am(l)&&a!=="_self")return $g(e||"",a),new _a(null);const f=window.open(e||"",a,u);$(f,t,"popup-blocked");try{f.focus()}catch{}return new _a(f)}function $g(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Hg="__/auth/handler",jg="emulator/auth/handler",Vg=encodeURIComponent("fac");async function ya(t,e,n,r,s,i){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:gr,eventId:s};if(e instanceof $l){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ah(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,f]of Object.entries({}))o[u]=f}if(e instanceof vr){const u=e.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${Vg}=${encodeURIComponent(c)}`:"";return`${Wg(t)}?${mr(a).slice(1)}${l}`}function Wg({config:t}){return t.emulator?eo(t,jg):`https://${t.authDomain}/${Hg}`}/**
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
 */const zs="webStorageSupport";class qg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kl,this._completeRedirectFn=mg,this._overrideRedirectResult=dg}async _openPopup(e,n,r,s){var i;St((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await ya(e,n,r,yi(),s);return Bg(e,o,io())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await ya(e,n,r,yi(),s);return Gm(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(St(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Ng(e),r=new _g(e);return n.register("authEvent",s=>($(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(zs,{type:zs},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[zs];o!==void 0&&n(!!o),Ke(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Eg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ll()||Ol()||no()}}const zg=qg;var va="@firebase/auth",ba="1.10.7";/**
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
 */class Kg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Gg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Jg(t){ir(new Cn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ml(t)},l=new hm(r,s,i,c);return Sm(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ir(new Cn("auth-internal",e=>{const n=on(e.getProvider("auth").getImmediate());return(r=>new Kg(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),bn(va,ba,Gg(t)),bn(va,ba,"esm2017")}/**
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
 */const Yg=5*60,Xg=dl("authIdTokenMaxAge")||Yg;let wa=null;const Qg=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Xg)return;const s=n==null?void 0:n.token;wa!==s&&(wa=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Zg(t=Pp()){const e=gl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Em(t,{popupRedirectResolver:zg,persistence:[rg,qm,Kl]}),r=dl("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Qg(i.toString());Hm(n,o,()=>o(n.currentUser)),$m(n,a=>o(a))}}const s=dh("auth");return s&&Im(n,`http://${s}`),n}function e_(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}pm({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=at("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",e_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Jg("Browser");var t_="firebase",n_="11.9.1";/**
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
 */bn(t_,n_,"app");const r_={apiKey:"AIzaSyCUM0ReK07RGfrefoTa4ETPoqjYrbM0CmQ",authDomain:"vue-git.firebaseapp.com",projectId:"vue-git",storageBucket:"vue-git.firebasestorage.app",messagingSenderId:"1023184041734",appId:"1:1023184041734:web:5bfb7442c88f384e03d087"},s_=_l(r_),es=Zg(s_);/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const hn=typeof document<"u";function eu(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function i_(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&eu(t.default)}const Y=Object.assign;function Ks(t,e){const n={};for(const r in e){const s=e[r];n[r]=Ge(s)?s.map(t):t(s)}return n}const Xn=()=>{},Ge=Array.isArray,tu=/#/g,o_=/&/g,a_=/\//g,c_=/=/g,l_=/\?/g,nu=/\+/g,u_=/%5B/g,f_=/%5D/g,ru=/%5E/g,d_=/%60/g,su=/%7B/g,h_=/%7C/g,iu=/%7D/g,p_=/%20/g;function ao(t){return encodeURI(""+t).replace(h_,"|").replace(u_,"[").replace(f_,"]")}function m_(t){return ao(t).replace(su,"{").replace(iu,"}").replace(ru,"^")}function Ei(t){return ao(t).replace(nu,"%2B").replace(p_,"+").replace(tu,"%23").replace(o_,"%26").replace(d_,"`").replace(su,"{").replace(iu,"}").replace(ru,"^")}function g_(t){return Ei(t).replace(c_,"%3D")}function __(t){return ao(t).replace(tu,"%23").replace(l_,"%3F")}function y_(t){return t==null?"":__(t).replace(a_,"%2F")}function lr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const v_=/\/$/,b_=t=>t.replace(v_,"");function Gs(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=I_(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:lr(o)}}function w_(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ea(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function E_(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&An(e.matched[r],n.matched[s])&&ou(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function An(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ou(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!S_(t[n],e[n]))return!1;return!0}function S_(t,e){return Ge(t)?Sa(t,e):Ge(e)?Sa(e,t):t===e}function Sa(t,e){return Ge(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function I_(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const At={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ur;(function(t){t.pop="pop",t.push="push"})(ur||(ur={}));var Qn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Qn||(Qn={}));function T_(t){if(!t)if(hn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),b_(t)}const R_=/^[^#]+#/;function C_(t,e){return t.replace(R_,"#")+e}function A_(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const vs=()=>({left:window.scrollX,top:window.scrollY});function O_(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=A_(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Ia(t,e){return(history.state?history.state.position-e:-1)+t}const Si=new Map;function P_(t,e){Si.set(t,e)}function k_(t){const e=Si.get(t);return Si.delete(t),e}let x_=()=>location.protocol+"//"+location.host;function au(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Ea(c,"")}return Ea(n,t)+r+s}function N_(t,e,n,r){let s=[],i=[],o=null;const a=({state:h})=>{const m=au(t,location),y=n.value,v=e.value;let b=0;if(h){if(n.value=m,e.value=h,o&&o===y){o=null;return}b=v?h.position-v.position:0}else r(m);s.forEach(T=>{T(n.value,y,{delta:b,type:ur.pop,direction:b?b>0?Qn.forward:Qn.back:Qn.unknown})})};function c(){o=n.value}function l(h){s.push(h);const m=()=>{const y=s.indexOf(h);y>-1&&s.splice(y,1)};return i.push(m),m}function u(){const{history:h}=window;h.state&&h.replaceState(Y({},h.state,{scroll:vs()}),"")}function f(){for(const h of i)h();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:f}}function Ta(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?vs():null}}function D_(t){const{history:e,location:n}=window,r={value:au(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const f=t.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:x_()+t+c;try{e[u?"replaceState":"pushState"](l,"",h),s.value=l}catch(m){console.error(m),n[u?"replace":"assign"](h)}}function o(c,l){const u=Y({},e.state,Ta(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=Y({},s.value,e.state,{forward:c,scroll:vs()});i(u.current,u,!0);const f=Y({},Ta(r.value,c,null),{position:u.position+1},l);i(c,f,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function L_(t){t=T_(t);const e=D_(t),n=N_(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Y({location:"",base:t,go:r,createHref:C_.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function M_(t){return typeof t=="string"||t&&typeof t=="object"}function cu(t){return typeof t=="string"||typeof t=="symbol"}const lu=Symbol("");var Ra;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ra||(Ra={}));function On(t,e){return Y(new Error,{type:t,[lu]:!0},e)}function dt(t,e){return t instanceof Error&&lu in t&&(e==null||!!(t.type&e))}const Ca="[^/]+?",U_={sensitive:!1,strict:!1,start:!0,end:!0},F_=/[.+*?^${}()[\]/\\]/g;function B_(t,e){const n=Y({},U_,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let f=0;f<l.length;f++){const h=l[f];let m=40+(n.sensitive?.25:0);if(h.type===0)f||(s+="/"),s+=h.value.replace(F_,"\\$&"),m+=40;else if(h.type===1){const{value:y,repeatable:v,optional:b,regexp:T}=h;i.push({name:y,repeatable:v,optional:b});const R=T||Ca;if(R!==Ca){m+=10;try{new RegExp(`(${R})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${y}" (${R}): `+x.message)}}let A=v?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;f||(A=b&&l.length<2?`(?:/${A})`:"/"+A),b&&(A+="?"),s+=A,m+=20,b&&(m+=-8),v&&(m+=-20),R===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const m=u[h]||"",y=i[h-1];f[y.name]=m&&y.repeatable?m.split("/"):m}return f}function c(l){let u="",f=!1;for(const h of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of h)if(m.type===0)u+=m.value;else if(m.type===1){const{value:y,repeatable:v,optional:b}=m,T=y in l?l[y]:"";if(Ge(T)&&!v)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const R=Ge(T)?T.join("/"):T;if(!R)if(b)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${y}"`);u+=R}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function $_(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function uu(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=$_(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Aa(r))return 1;if(Aa(s))return-1}return s.length-r.length}function Aa(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const H_={type:0,value:""},j_=/[a-zA-Z0-9_]/;function V_(t){if(!t)return[[]];if(t==="/")return[[H_]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function f(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function h(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):h();break;case 4:h(),n=r;break;case 1:c==="("?n=2:j_.test(c)?h():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),f(),o(),s}function W_(t,e,n){const r=B_(V_(t.path),n),s=Y(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function q_(t,e){const n=[],r=new Map;e=xa({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,h,m){const y=!m,v=Pa(f);v.aliasOf=m&&m.record;const b=xa(e,f),T=[v];if("alias"in f){const x=typeof f.alias=="string"?[f.alias]:f.alias;for(const j of x)T.push(Pa(Y({},v,{components:m?m.record.components:v.components,path:j,aliasOf:m?m.record:v})))}let R,A;for(const x of T){const{path:j}=x;if(h&&j[0]!=="/"){const G=h.record.path,z=G[G.length-1]==="/"?"":"/";x.path=h.record.path+(j&&z+j)}if(R=W_(x,h,b),m?m.alias.push(R):(A=A||R,A!==R&&A.alias.push(R),y&&f.name&&!ka(R)&&o(f.name)),fu(R)&&c(R),v.children){const G=v.children;for(let z=0;z<G.length;z++)i(G[z],R,m&&m.children[z])}m=m||R}return A?()=>{o(A)}:Xn}function o(f){if(cu(f)){const h=r.get(f);h&&(r.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){const h=G_(f,n);n.splice(h,0,f),f.record.name&&!ka(f)&&r.set(f.record.name,f)}function l(f,h){let m,y={},v,b;if("name"in f&&f.name){if(m=r.get(f.name),!m)throw On(1,{location:f});b=m.record.name,y=Y(Oa(h.params,m.keys.filter(A=>!A.optional).concat(m.parent?m.parent.keys.filter(A=>A.optional):[]).map(A=>A.name)),f.params&&Oa(f.params,m.keys.map(A=>A.name))),v=m.stringify(y)}else if(f.path!=null)v=f.path,m=n.find(A=>A.re.test(v)),m&&(y=m.parse(v),b=m.record.name);else{if(m=h.name?r.get(h.name):n.find(A=>A.re.test(h.path)),!m)throw On(1,{location:f,currentLocation:h});b=m.record.name,y=Y({},h.params,f.params),v=m.stringify(y)}const T=[];let R=m;for(;R;)T.unshift(R.record),R=R.parent;return{name:b,path:v,params:y,matched:T,meta:K_(T)}}t.forEach(f=>i(f));function u(){n.length=0,r.clear()}return{addRoute:i,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function Oa(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Pa(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:z_(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function z_(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function ka(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function K_(t){return t.reduce((e,n)=>Y(e,n.meta),{})}function xa(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function G_(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;uu(t,e[i])<0?r=i:n=i+1}const s=J_(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function J_(t){let e=t;for(;e=e.parent;)if(fu(e)&&uu(t,e)===0)return e}function fu({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Y_(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(nu," "),o=i.indexOf("="),a=lr(o<0?i:i.slice(0,o)),c=o<0?null:lr(i.slice(o+1));if(a in e){let l=e[a];Ge(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Na(t){let e="";for(let n in t){const r=t[n];if(n=g_(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ge(r)?r.map(i=>i&&Ei(i)):[r&&Ei(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function X_(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Ge(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Q_=Symbol(""),Da=Symbol(""),bs=Symbol(""),du=Symbol(""),Ii=Symbol("");function Un(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function kt(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=h=>{h===!1?c(On(4,{from:n,to:e})):h instanceof Error?c(h):M_(h)?c(On(2,{from:e,to:h})):(o&&r.enterCallbacks[s]===o&&typeof h=="function"&&o.push(h),a())},u=i(()=>t.call(r&&r.instances[s],e,n,l));let f=Promise.resolve(u);t.length<3&&(f=f.then(l)),f.catch(h=>c(h))})}function Js(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(eu(c)){const u=(c.__vccOpts||c)[e];u&&i.push(kt(u,n,r,o,a,s))}else{let l=c();i.push(()=>l.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=i_(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const m=(f.__vccOpts||f)[e];return m&&kt(m,n,r,o,a,s)()}))}}return i}function La(t){const e=ot(bs),n=ot(du),r=fe(()=>{const c=ye(t.to);return e.resolve(c)}),s=fe(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(An.bind(null,u));if(h>-1)return h;const m=Ma(c[l-2]);return l>1&&Ma(u)===m&&f[f.length-1].path!==m?f.findIndex(An.bind(null,c[l-2])):h}),i=fe(()=>s.value>-1&&ry(n.params,r.value.params)),o=fe(()=>s.value>-1&&s.value===n.matched.length-1&&ou(n.params,r.value.params));function a(c={}){if(ny(c)){const l=e[ye(t.replace)?"replace":"push"](ye(t.to)).catch(Xn);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>l),l}return Promise.resolve()}return{route:r,href:fe(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function Z_(t){return t.length===1?t[0]:t}const ey=kc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:La,setup(t,{slots:e}){const n=ls(La(t)),{options:r}=ot(bs),s=fe(()=>({[Ua(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ua(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&Z_(e.default(n));return t.custom?i:il("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),ty=ey;function ny(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ry(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ge(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Ma(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ua=(t,e,n)=>t??e??n,sy=kc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=ot(Ii),s=fe(()=>t.route||r.value),i=ot(Da,0),o=fe(()=>{let l=ye(i);const{matched:u}=s.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=fe(()=>s.value.matched[o.value]);Or(Da,fe(()=>o.value+1)),Or(Q_,a),Or(Ii,s);const c=he();return Pr(()=>[c.value,a.value,t.name],([l,u,f],[h,m,y])=>{u&&(u.instances[f]=l,m&&m!==u&&l&&l===h&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!An(u,m)||!h)&&(u.enterCallbacks[f]||[]).forEach(v=>v(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,f=a.value,h=f&&f.components[u];if(!h)return Fa(n.default,{Component:h,route:l});const m=f.props[u],y=m?m===!0?l.params:typeof m=="function"?m(l):m:null,b=il(h,Y({},y,e,{onVnodeUnmounted:T=>{T.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return Fa(n.default,{Component:b,route:l})||b}}});function Fa(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const iy=sy;function oy(t){const e=q_(t.routes,t),n=t.parseQuery||Y_,r=t.stringifyQuery||Na,s=t.history,i=Un(),o=Un(),a=Un(),c=vf(At);let l=At;hn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ks.bind(null,E=>""+E),f=Ks.bind(null,y_),h=Ks.bind(null,lr);function m(E,L){let N,M;return cu(E)?(N=e.getRecordMatcher(E),M=L):M=E,e.addRoute(M,N)}function y(E){const L=e.getRecordMatcher(E);L&&e.removeRoute(L)}function v(){return e.getRoutes().map(E=>E.record)}function b(E){return!!e.getRecordMatcher(E)}function T(E,L){if(L=Y({},L||c.value),typeof E=="string"){const g=Gs(n,E,L.path),w=e.resolve({path:g.path},L),I=s.createHref(g.fullPath);return Y(g,w,{params:h(w.params),hash:lr(g.hash),redirectedFrom:void 0,href:I})}let N;if(E.path!=null)N=Y({},E,{path:Gs(n,E.path,L.path).path});else{const g=Y({},E.params);for(const w in g)g[w]==null&&delete g[w];N=Y({},E,{params:f(g)}),L.params=f(L.params)}const M=e.resolve(N,L),re=E.hash||"";M.params=u(h(M.params));const d=w_(r,Y({},E,{hash:m_(re),path:M.path})),p=s.createHref(d);return Y({fullPath:d,hash:re,query:r===Na?X_(E.query):E.query||{}},M,{redirectedFrom:void 0,href:p})}function R(E){return typeof E=="string"?Gs(n,E,c.value.path):Y({},E)}function A(E,L){if(l!==E)return On(8,{from:L,to:E})}function x(E){return z(E)}function j(E){return x(Y(R(E),{replace:!0}))}function G(E){const L=E.matched[E.matched.length-1];if(L&&L.redirect){const{redirect:N}=L;let M=typeof N=="function"?N(E):N;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=R(M):{path:M},M.params={}),Y({query:E.query,hash:E.hash,params:M.path!=null?{}:E.params},M)}}function z(E,L){const N=l=T(E),M=c.value,re=E.state,d=E.force,p=E.replace===!0,g=G(N);if(g)return z(Y(R(g),{state:typeof g=="object"?Y({},re,g.state):re,force:d,replace:p}),L||N);const w=N;w.redirectedFrom=L;let I;return!d&&E_(r,M,N)&&(I=On(16,{to:w,from:M}),Xe(M,M,!0,!1)),(I?Promise.resolve(I):$e(w,M)).catch(S=>dt(S)?dt(S,2)?S:Rt(S):J(S,w,M)).then(S=>{if(S){if(dt(S,2))return z(Y({replace:p},R(S.to),{state:typeof S.to=="object"?Y({},re,S.to.state):re,force:d}),L||w)}else S=Kt(w,M,!0,p,re);return Tt(w,M,S),S})}function ge(E,L){const N=A(E,L);return N?Promise.reject(N):Promise.resolve()}function Te(E){const L=ln.values().next().value;return L&&typeof L.runWithContext=="function"?L.runWithContext(E):E()}function $e(E,L){let N;const[M,re,d]=ay(E,L);N=Js(M.reverse(),"beforeRouteLeave",E,L);for(const g of M)g.leaveGuards.forEach(w=>{N.push(kt(w,E,L))});const p=ge.bind(null,E,L);return N.push(p),He(N).then(()=>{N=[];for(const g of i.list())N.push(kt(g,E,L));return N.push(p),He(N)}).then(()=>{N=Js(re,"beforeRouteUpdate",E,L);for(const g of re)g.updateGuards.forEach(w=>{N.push(kt(w,E,L))});return N.push(p),He(N)}).then(()=>{N=[];for(const g of d)if(g.beforeEnter)if(Ge(g.beforeEnter))for(const w of g.beforeEnter)N.push(kt(w,E,L));else N.push(kt(g.beforeEnter,E,L));return N.push(p),He(N)}).then(()=>(E.matched.forEach(g=>g.enterCallbacks={}),N=Js(d,"beforeRouteEnter",E,L,Te),N.push(p),He(N))).then(()=>{N=[];for(const g of o.list())N.push(kt(g,E,L));return N.push(p),He(N)}).catch(g=>dt(g,8)?g:Promise.reject(g))}function Tt(E,L,N){a.list().forEach(M=>Te(()=>M(E,L,N)))}function Kt(E,L,N,M,re){const d=A(E,L);if(d)return d;const p=L===At,g=hn?history.state:{};N&&(M||p?s.replace(E.fullPath,Y({scroll:p&&g&&g.scroll},re)):s.push(E.fullPath,re)),c.value=E,Xe(E,L,N,p),Rt()}let Ye;function Nn(){Ye||(Ye=s.listen((E,L,N)=>{if(!Sr.listening)return;const M=T(E),re=G(M);if(re){z(Y(re,{replace:!0,force:!0}),M).catch(Xn);return}l=M;const d=c.value;hn&&P_(Ia(d.fullPath,N.delta),vs()),$e(M,d).catch(p=>dt(p,12)?p:dt(p,2)?(z(Y(R(p.to),{force:!0}),M).then(g=>{dt(g,20)&&!N.delta&&N.type===ur.pop&&s.go(-1,!1)}).catch(Xn),Promise.reject()):(N.delta&&s.go(-N.delta,!1),J(p,M,d))).then(p=>{p=p||Kt(M,d,!1),p&&(N.delta&&!dt(p,8)?s.go(-N.delta,!1):N.type===ur.pop&&dt(p,20)&&s.go(-1,!1)),Tt(M,d,p)}).catch(Xn)}))}let an=Un(),pe=Un(),te;function J(E,L,N){Rt(E);const M=pe.list();return M.length?M.forEach(re=>re(E,L,N)):console.error(E),Promise.reject(E)}function ut(){return te&&c.value!==At?Promise.resolve():new Promise((E,L)=>{an.add([E,L])})}function Rt(E){return te||(te=!E,Nn(),an.list().forEach(([L,N])=>E?N(E):L()),an.reset()),E}function Xe(E,L,N,M){const{scrollBehavior:re}=t;if(!hn||!re)return Promise.resolve();const d=!N&&k_(Ia(E.fullPath,0))||(M||!N)&&history.state&&history.state.scroll||null;return Rc().then(()=>re(E,L,d)).then(p=>p&&O_(p)).catch(p=>J(p,E,L))}const Pe=E=>s.go(E);let cn;const ln=new Set,Sr={currentRoute:c,listening:!0,addRoute:m,removeRoute:y,clearRoutes:e.clearRoutes,hasRoute:b,getRoutes:v,resolve:T,options:t,push:x,replace:j,go:Pe,back:()=>Pe(-1),forward:()=>Pe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:pe.add,isReady:ut,install(E){const L=this;E.component("RouterLink",ty),E.component("RouterView",iy),E.config.globalProperties.$router=L,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>ye(c)}),hn&&!cn&&c.value===At&&(cn=!0,x(s.location).catch(re=>{}));const N={};for(const re in At)Object.defineProperty(N,re,{get:()=>c.value[re],enumerable:!0});E.provide(bs,L),E.provide(du,wc(N)),E.provide(Ii,c);const M=E.unmount;ln.add(E),E.unmount=function(){ln.delete(E),ln.size<1&&(l=At,Ye&&Ye(),Ye=null,c.value=At,cn=!1,te=!1),M()}}};function He(E){return E.reduce((L,N)=>L.then(()=>Te(N)),Promise.resolve())}return Sr}function ay(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>An(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>An(l,c))||s.push(c))}return[n,r,s]}function co(){return ot(bs)}const cy={__name:"App",setup(t){const e=he(!1),n=co();return qi(()=>{jm(es,r=>{e.value=!0,r&&n.currentRoute.value.path==="/login"&&n.push("/dashboard")})}),(r,s)=>{const i=zi("router-view");return e.value?(Z(),el(i,{key:0})):nl("",!0)}}},be={HOME:"home",TICTACTOE:"tictactoe",WORDGAME:"wordGame",GOT:"got",DASHBOARD:"dashboard",LOGIN:"login"},ly={class:"p-2 sticky-top"},uy={class:"d-flex justify-content-center"},fy={class:"btn-group",role:"group"},lo={__name:"Header",setup(t){return(e,n)=>{const r=zi("router-link");return Z(),ne("div",ly,[n[4]||(n[4]=B("div",{class:"d-flex justify-content-center"},null,-1)),n[5]||(n[5]=B("hr",null,null,-1)),B("div",uy,[B("div",fy,[ce(r,{class:"btn btn-primary",to:{name:ye(be).HOME}},{default:gt(()=>n[0]||(n[0]=[B("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-house",viewBox:"0 0 16 16"},[B("path",{d:"M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"})],-1)])),_:1,__:[0]},8,["to"]),ce(r,{class:"btn btn-primary",to:{name:ye(be).TICTACTOE}},{default:gt(()=>n[1]||(n[1]=[Mt("TicTacToe")])),_:1,__:[1]},8,["to"]),ce(r,{class:"btn btn-primary",to:{name:ye(be).WORDGAME}},{default:gt(()=>n[2]||(n[2]=[Mt("Guess Word")])),_:1,__:[2]},8,["to"]),ce(r,{class:"btn btn-primary",to:{name:ye(be).GOT}},{default:gt(()=>n[3]||(n[3]=[Mt("Game Of Thrones")])),_:1,__:[3]},8,["to"])])])])}}},ws=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},dy={class:"min-vh-100 d-flex justify-content-center align-items-center text-center"},hy={class:"game"},py={class:"board"},my=["onClick"],gy={class:"info"},_y={key:0},yy={key:1},vy={key:2},by={__name:"TicTacToe",setup(t){const e=he(Array(9).fill("")),n=he("X"),r=he(null),s=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],i=l=>{e.value[l]||r.value||(e.value[l]=n.value,o(),n.value=n.value==="X"?"O":"X")},o=()=>{for(const l of s){const[u,f,h]=l;if(e.value[u]&&e.value[u]===e.value[f]&&e.value[u]===e.value[h]){r.value=e.value[u];return}}},a=fe(()=>e.value.every(l=>l)&&!r.value),c=()=>{e.value=Array(9).fill(""),n.value="X",r.value=null};return(l,u)=>(Z(),ne(me,null,[ce(lo),B("div",dy,[B("div",hy,[u[0]||(u[0]=B("h1",null,"Tic Tac Toe",-1)),B("div",py,[(Z(!0),ne(me,null,nr(e.value,(f,h)=>(Z(),ne("div",{key:h,class:"cell",onClick:m=>i(h)},Ce(f),9,my))),128))]),B("div",gy,[r.value?(Z(),ne("p",_y,"🎉 "+Ce(r.value)+" wins!",1)):a.value?(Z(),ne("p",yy,"😅 It's a draw!")):(Z(),ne("p",vy,"Current Turn: "+Ce(n.value),1)),B("button",{class:"btn btn-primary",onClick:c},"Reset")])])])],64))}},wy=ws(by,[["__scopeId","data-v-278e24f2"]]),Ey={class:"min-vh-100 d-flex justify-content-center align-items-center text-center"},Sy={class:"offset-md-3 col-md-6"},Iy={class:"list-group"},Ty={__name:"Home",setup(t){return co(),(e,n)=>{const r=zi("router-link");return Z(),ne(me,null,[B("div",Ey,[B("div",null,[n[4]||(n[4]=B("h3",null,"This is my Vue PlayGround",-1)),n[5]||(n[5]=B("p",null," A collection of mini apps and experiments built while learning and playing with Vue.js. ",-1)),B("div",Sy,[B("ul",Iy,[ce(r,{class:"list-group-item enable-button-pointers",to:{name:ye(be).TICTACTOE}},{default:gt(()=>n[0]||(n[0]=[Mt("TicTacToe")])),_:1,__:[0]},8,["to"]),ce(r,{class:"list-group-item enable-button-pointers",to:{name:ye(be).WORDGAME}},{default:gt(()=>n[1]||(n[1]=[Mt("Guess Word")])),_:1,__:[1]},8,["to"]),ce(r,{class:"list-group-item enable-button-pointers",to:{name:ye(be).GOT}},{default:gt(()=>n[2]||(n[2]=[Mt("Game Of Thrones")])),_:1,__:[2]},8,["to"]),ce(r,{class:"list-group-item enable-button-pointers active",to:{name:ye(be).DASHBOARD}},{default:gt(()=>n[3]||(n[3]=[Mt("Auth Section")])),_:1,__:[3]},8,["to"])])])])]),n[6]||(n[6]=B("div",{class:"sticky-bottom w-100 text-center p-2"},[B("a",{href:"https://www.flaticon.com",title:"instrument icons"},"icons created by Flaticon")],-1))],64)}}},Ry={__name:"Login",setup(t){const e=he(""),n=he(""),r=co(),s=async()=>{try{await Bm(es,e.value,n.value),r.push(be.DASHBOARD)}catch(o){alert(o.message)}},i=async()=>{try{await Fm(es,e.value,n.value),r.push(be.DASHBOARD)}catch(o){alert(o.message)}};return(o,a)=>(Z(),ne("div",null,[a[2]||(a[2]=B("h1",null,"Login / Register",-1)),ii(B("input",{"onUpdate:modelValue":a[0]||(a[0]=c=>e.value=c),placeholder:"Email"},null,512),[[di,e.value]]),ii(B("input",{"onUpdate:modelValue":a[1]||(a[1]=c=>n.value=c),type:"password",placeholder:"Password"},null,512),[[di,n.value]]),B("button",{onClick:s},"Login"),B("button",{onClick:i},"Register")]))}},Cy={class:"min-vh-100 d-flex justify-content-center align-items-center text-center w-100"},Ay={class:"game"},Oy={key:0},Py={class:""},ky={class:"input-group"},xy={key:1},Ny={class:"word"},Dy={class:"letters clearfix"},Ly=["onClick"],My={class:"status"},Uy={key:0},Fy={key:1},By={key:2},Ba=6,$y={__name:"WordGame",setup(t){const e=he(""),n=he([]),r=he(!1),s=he(""),i=he([]),o="abcdefghijklmnopqrstuvwxyz".toUpperCase().split(""),a=fe(()=>i.value.filter(b=>!s.value.includes(b.toUpperCase()))),c=fe(()=>s.value.split("").every(b=>i.value.includes(b.toUpperCase()))),l=fe(()=>a.value.length>=Ba),u=fe(()=>c.value||l.value);function f(b){i.value.push(b.toUpperCase())}function h(){s.value=v(),i.value=[]}function m(){i.value=[],e.value="",n.value=[],r.value=!1,s.value="",i.value=[]}function y(){if(n.value=e.value.split(",").map(b=>b.trim().toUpperCase()).filter(b=>b.length>0),n.value.length===0){alert("Please enter at least one word.");return}s.value=v(),i.value=[],r.value=!0}function v(){return n.value[Math.floor(Math.random()*n.value.length)]}return(b,T)=>(Z(),ne(me,null,[ce(lo),B("div",Cy,[B("div",Ay,[r.value?(Z(),ne("div",xy,[B("p",Ny,[(Z(!0),ne(me,null,nr(s.value,(R,A)=>(Z(),ne("span",{key:A},Ce(i.value.includes(R)?R:"_"),1))),128))]),B("p",Dy,[(Z(!0),ne(me,null,nr(ye(o),R=>(Z(),ne("span",{class:In(["d-inline-block bg-warning rounded-2",i.value.includes(R)||u.value?"disabled":""]),key:R,onClick:A=>f(R)},Ce(R),11,Ly))),128))]),B("p",My,[c.value?(Z(),ne("span",Uy,"🎉 You won!")):l.value?(Z(),ne("span",Fy,'💀 You lost. Word was "'+Ce(s.value)+'"',1)):(Z(),ne("span",By,"Mistakes: "+Ce(a.value.length)+"/"+Ce(Ba),1))]),B("div",{class:"d-flex justify-content-center"},[B("div",{class:"btn-group",role:"group"},[B("button",{class:"btn btn-primary",onClick:h},"Next"),B("button",{class:"btn btn-primary",onClick:m},"Restart")])])])):(Z(),ne("div",Oy,[B("div",Py,[B("div",ky,[ii(B("input",{type:"text",class:"form-control","onUpdate:modelValue":T[0]||(T[0]=R=>e.value=R)},null,512),[[di,e.value]])]),T[1]||(T[1]=B("div",{class:"form-text"},"Enter comma-separated words (e.g. a, ab, abc, abcd, abcde)",-1))]),T[2]||(T[2]=B("br",null,null,-1)),B("button",{class:"btn btn-primary",onClick:y},"Start Game")]))])])],64))}},Hy=ws($y,[["__scopeId","data-v-66ddca4c"]]);function hu(t,e){return function(){return t.apply(e,arguments)}}const{toString:jy}=Object.prototype,{getPrototypeOf:uo}=Object,{iterator:Es,toStringTag:pu}=Symbol,Ss=(t=>e=>{const n=jy.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Je=t=>(t=t.toLowerCase(),e=>Ss(e)===t),Is=t=>e=>typeof e===t,{isArray:kn}=Array,fr=Is("undefined");function Vy(t){return t!==null&&!fr(t)&&t.constructor!==null&&!fr(t.constructor)&&De(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const mu=Je("ArrayBuffer");function Wy(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&mu(t.buffer),e}const qy=Is("string"),De=Is("function"),gu=Is("number"),Ts=t=>t!==null&&typeof t=="object",zy=t=>t===!0||t===!1,Ur=t=>{if(Ss(t)!=="object")return!1;const e=uo(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(pu in t)&&!(Es in t)},Ky=Je("Date"),Gy=Je("File"),Jy=Je("Blob"),Yy=Je("FileList"),Xy=t=>Ts(t)&&De(t.pipe),Qy=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||De(t.append)&&((e=Ss(t))==="formdata"||e==="object"&&De(t.toString)&&t.toString()==="[object FormData]"))},Zy=Je("URLSearchParams"),[ev,tv,nv,rv]=["ReadableStream","Request","Response","Headers"].map(Je),sv=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function wr(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),kn(t))for(r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let a;for(r=0;r<o;r++)a=i[r],e.call(null,t[a],a,t)}}function _u(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,s;for(;r-- >0;)if(s=n[r],e===s.toLowerCase())return s;return null}const Qt=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,yu=t=>!fr(t)&&t!==Qt;function Ti(){const{caseless:t}=yu(this)&&this||{},e={},n=(r,s)=>{const i=t&&_u(e,s)||s;Ur(e[i])&&Ur(r)?e[i]=Ti(e[i],r):Ur(r)?e[i]=Ti({},r):kn(r)?e[i]=r.slice():e[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&wr(arguments[r],n);return e}const iv=(t,e,n,{allOwnKeys:r}={})=>(wr(e,(s,i)=>{n&&De(s)?t[i]=hu(s,n):t[i]=s},{allOwnKeys:r}),t),ov=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),av=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},cv=(t,e,n,r)=>{let s,i,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),i=s.length;i-- >0;)o=s[i],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&uo(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},lv=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},uv=t=>{if(!t)return null;if(kn(t))return t;let e=t.length;if(!gu(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},fv=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&uo(Uint8Array)),dv=(t,e)=>{const r=(t&&t[Es]).call(t);let s;for(;(s=r.next())&&!s.done;){const i=s.value;e.call(t,i[0],i[1])}},hv=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},pv=Je("HTMLFormElement"),mv=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),$a=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),gv=Je("RegExp"),vu=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};wr(n,(s,i)=>{let o;(o=e(s,i,t))!==!1&&(r[i]=o||s)}),Object.defineProperties(t,r)},_v=t=>{vu(t,(e,n)=>{if(De(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(De(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},yv=(t,e)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return kn(t)?r(t):r(String(t).split(e)),n},vv=()=>{},bv=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function wv(t){return!!(t&&De(t.append)&&t[pu]==="FormData"&&t[Es])}const Ev=t=>{const e=new Array(10),n=(r,s)=>{if(Ts(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[s]=r;const i=kn(r)?[]:{};return wr(r,(o,a)=>{const c=n(o,s+1);!fr(c)&&(i[a]=c)}),e[s]=void 0,i}}return r};return n(t,0)},Sv=Je("AsyncFunction"),Iv=t=>t&&(Ts(t)||De(t))&&De(t.then)&&De(t.catch),bu=((t,e)=>t?setImmediate:e?((n,r)=>(Qt.addEventListener("message",({source:s,data:i})=>{s===Qt&&i===n&&r.length&&r.shift()()},!1),s=>{r.push(s),Qt.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",De(Qt.postMessage)),Tv=typeof queueMicrotask<"u"?queueMicrotask.bind(Qt):typeof process<"u"&&process.nextTick||bu,Rv=t=>t!=null&&De(t[Es]),_={isArray:kn,isArrayBuffer:mu,isBuffer:Vy,isFormData:Qy,isArrayBufferView:Wy,isString:qy,isNumber:gu,isBoolean:zy,isObject:Ts,isPlainObject:Ur,isReadableStream:ev,isRequest:tv,isResponse:nv,isHeaders:rv,isUndefined:fr,isDate:Ky,isFile:Gy,isBlob:Jy,isRegExp:gv,isFunction:De,isStream:Xy,isURLSearchParams:Zy,isTypedArray:fv,isFileList:Yy,forEach:wr,merge:Ti,extend:iv,trim:sv,stripBOM:ov,inherits:av,toFlatObject:cv,kindOf:Ss,kindOfTest:Je,endsWith:lv,toArray:uv,forEachEntry:dv,matchAll:hv,isHTMLForm:pv,hasOwnProperty:$a,hasOwnProp:$a,reduceDescriptors:vu,freezeMethods:_v,toObjectSet:yv,toCamelCase:mv,noop:vv,toFiniteNumber:bv,findKey:_u,global:Qt,isContextDefined:yu,isSpecCompliantForm:wv,toJSONObject:Ev,isAsyncFn:Sv,isThenable:Iv,setImmediate:bu,asap:Tv,isIterable:Rv};function q(t,e,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}_.inherits(q,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:_.toJSONObject(this.config),code:this.code,status:this.status}}});const wu=q.prototype,Eu={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Eu[t]={value:t}});Object.defineProperties(q,Eu);Object.defineProperty(wu,"isAxiosError",{value:!0});q.from=(t,e,n,r,s,i)=>{const o=Object.create(wu);return _.toFlatObject(t,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),q.call(o,t.message,e,n,r,s),o.cause=t,o.name=t.name,i&&Object.assign(o,i),o};const Cv=null;function Ri(t){return _.isPlainObject(t)||_.isArray(t)}function Su(t){return _.endsWith(t,"[]")?t.slice(0,-2):t}function Ha(t,e,n){return t?t.concat(e).map(function(s,i){return s=Su(s),!n&&i?"["+s+"]":s}).join(n?".":""):e}function Av(t){return _.isArray(t)&&!t.some(Ri)}const Ov=_.toFlatObject(_,{},null,function(e){return/^is[A-Z]/.test(e)});function Rs(t,e,n){if(!_.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=_.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,b){return!_.isUndefined(b[v])});const r=n.metaTokens,s=n.visitor||u,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&_.isSpecCompliantForm(e);if(!_.isFunction(s))throw new TypeError("visitor must be a function");function l(y){if(y===null)return"";if(_.isDate(y))return y.toISOString();if(_.isBoolean(y))return y.toString();if(!c&&_.isBlob(y))throw new q("Blob is not supported. Use a Buffer instead.");return _.isArrayBuffer(y)||_.isTypedArray(y)?c&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function u(y,v,b){let T=y;if(y&&!b&&typeof y=="object"){if(_.endsWith(v,"{}"))v=r?v:v.slice(0,-2),y=JSON.stringify(y);else if(_.isArray(y)&&Av(y)||(_.isFileList(y)||_.endsWith(v,"[]"))&&(T=_.toArray(y)))return v=Su(v),T.forEach(function(A,x){!(_.isUndefined(A)||A===null)&&e.append(o===!0?Ha([v],x,i):o===null?v:v+"[]",l(A))}),!1}return Ri(y)?!0:(e.append(Ha(b,v,i),l(y)),!1)}const f=[],h=Object.assign(Ov,{defaultVisitor:u,convertValue:l,isVisitable:Ri});function m(y,v){if(!_.isUndefined(y)){if(f.indexOf(y)!==-1)throw Error("Circular reference detected in "+v.join("."));f.push(y),_.forEach(y,function(T,R){(!(_.isUndefined(T)||T===null)&&s.call(e,T,_.isString(R)?R.trim():R,v,h))===!0&&m(T,v?v.concat(R):[R])}),f.pop()}}if(!_.isObject(t))throw new TypeError("data must be an object");return m(t),e}function ja(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function fo(t,e){this._pairs=[],t&&Rs(t,this,e)}const Iu=fo.prototype;Iu.append=function(e,n){this._pairs.push([e,n])};Iu.toString=function(e){const n=e?function(r){return e.call(this,r,ja)}:ja;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Pv(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Tu(t,e,n){if(!e)return t;const r=n&&n.encode||Pv;_.isFunction(n)&&(n={serialize:n});const s=n&&n.serialize;let i;if(s?i=s(e,n):i=_.isURLSearchParams(e)?e.toString():new fo(e,n).toString(r),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class Va{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){_.forEach(this.handlers,function(r){r!==null&&e(r)})}}const Ru={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},kv=typeof URLSearchParams<"u"?URLSearchParams:fo,xv=typeof FormData<"u"?FormData:null,Nv=typeof Blob<"u"?Blob:null,Dv={isBrowser:!0,classes:{URLSearchParams:kv,FormData:xv,Blob:Nv},protocols:["http","https","file","blob","url","data"]},ho=typeof window<"u"&&typeof document<"u",Ci=typeof navigator=="object"&&navigator||void 0,Lv=ho&&(!Ci||["ReactNative","NativeScript","NS"].indexOf(Ci.product)<0),Mv=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Uv=ho&&window.location.href||"http://localhost",Fv=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:ho,hasStandardBrowserEnv:Lv,hasStandardBrowserWebWorkerEnv:Mv,navigator:Ci,origin:Uv},Symbol.toStringTag,{value:"Module"})),Ee={...Fv,...Dv};function Bv(t,e){return Rs(t,new Ee.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return Ee.isNode&&_.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function $v(t){return _.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Hv(t){const e={},n=Object.keys(t);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],e[i]=t[i];return e}function Cu(t){function e(n,r,s,i){let o=n[i++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),c=i>=n.length;return o=!o&&_.isArray(s)?s.length:o,c?(_.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!_.isObject(s[o]))&&(s[o]=[]),e(n,r,s[o],i)&&_.isArray(s[o])&&(s[o]=Hv(s[o])),!a)}if(_.isFormData(t)&&_.isFunction(t.entries)){const n={};return _.forEachEntry(t,(r,s)=>{e($v(r),s,n,0)}),n}return null}function jv(t,e,n){if(_.isString(t))try{return(e||JSON.parse)(t),_.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const Er={transitional:Ru,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=_.isObject(e);if(i&&_.isHTMLForm(e)&&(e=new FormData(e)),_.isFormData(e))return s?JSON.stringify(Cu(e)):e;if(_.isArrayBuffer(e)||_.isBuffer(e)||_.isStream(e)||_.isFile(e)||_.isBlob(e)||_.isReadableStream(e))return e;if(_.isArrayBufferView(e))return e.buffer;if(_.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Bv(e,this.formSerializer).toString();if((a=_.isFileList(e))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return Rs(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),jv(e)):e}],transformResponse:[function(e){const n=this.transitional||Er.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(_.isResponse(e)||_.isReadableStream(e))return e;if(e&&_.isString(e)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?q.from(a,q.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ee.classes.FormData,Blob:Ee.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};_.forEach(["delete","get","head","post","put","patch"],t=>{Er.headers[t]={}});const Vv=_.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Wv=t=>{const e={};let n,r,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||e[n]&&Vv[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},Wa=Symbol("internals");function Fn(t){return t&&String(t).trim().toLowerCase()}function Fr(t){return t===!1||t==null?t:_.isArray(t)?t.map(Fr):String(t)}function qv(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const zv=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Ys(t,e,n,r,s){if(_.isFunction(r))return r.call(this,e,n);if(s&&(e=n),!!_.isString(e)){if(_.isString(r))return e.indexOf(r)!==-1;if(_.isRegExp(r))return r.test(e)}}function Kv(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function Gv(t,e){const n=_.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(s,i,o){return this[r].call(this,e,s,i,o)},configurable:!0})})}let Le=class{constructor(e){e&&this.set(e)}set(e,n,r){const s=this;function i(a,c,l){const u=Fn(c);if(!u)throw new Error("header name must be a non-empty string");const f=_.findKey(s,u);(!f||s[f]===void 0||l===!0||l===void 0&&s[f]!==!1)&&(s[f||c]=Fr(a))}const o=(a,c)=>_.forEach(a,(l,u)=>i(l,u,c));if(_.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(_.isString(e)&&(e=e.trim())&&!zv(e))o(Wv(e),n);else if(_.isObject(e)&&_.isIterable(e)){let a={},c,l;for(const u of e){if(!_.isArray(u))throw TypeError("Object iterator must return a key-value pair");a[l=u[0]]=(c=a[l])?_.isArray(c)?[...c,u[1]]:[c,u[1]]:u[1]}o(a,n)}else e!=null&&i(n,e,r);return this}get(e,n){if(e=Fn(e),e){const r=_.findKey(this,e);if(r){const s=this[r];if(!n)return s;if(n===!0)return qv(s);if(_.isFunction(n))return n.call(this,s,r);if(_.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Fn(e),e){const r=_.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||Ys(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let s=!1;function i(o){if(o=Fn(o),o){const a=_.findKey(r,o);a&&(!n||Ys(r,r[a],a,n))&&(delete r[a],s=!0)}}return _.isArray(e)?e.forEach(i):i(e),s}clear(e){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!e||Ys(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){const n=this,r={};return _.forEach(this,(s,i)=>{const o=_.findKey(r,i);if(o){n[o]=Fr(s),delete n[i];return}const a=e?Kv(i):String(i).trim();a!==i&&delete n[i],n[a]=Fr(s),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return _.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=e&&_.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[Wa]=this[Wa]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=Fn(o);r[a]||(Gv(s,o),r[a]=!0)}return _.isArray(e)?e.forEach(i):i(e),this}};Le.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);_.reduceDescriptors(Le.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});_.freezeMethods(Le);function Xs(t,e){const n=this||Er,r=e||n,s=Le.from(r.headers);let i=r.data;return _.forEach(t,function(a){i=a.call(n,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function Au(t){return!!(t&&t.__CANCEL__)}function xn(t,e,n){q.call(this,t??"canceled",q.ERR_CANCELED,e,n),this.name="CanceledError"}_.inherits(xn,q,{__CANCEL__:!0});function Ou(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new q("Request failed with status code "+n.status,[q.ERR_BAD_REQUEST,q.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function Jv(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function Yv(t,e){t=t||10;const n=new Array(t),r=new Array(t);let s=0,i=0,o;return e=e!==void 0?e:1e3,function(c){const l=Date.now(),u=r[i];o||(o=l),n[s]=c,r[s]=l;let f=i,h=0;for(;f!==s;)h+=n[f++],f=f%t;if(s=(s+1)%t,s===i&&(i=(i+1)%t),l-o<e)return;const m=u&&l-u;return m?Math.round(h*1e3/m):void 0}}function Xv(t,e){let n=0,r=1e3/e,s,i;const o=(l,u=Date.now())=>{n=u,s=null,i&&(clearTimeout(i),i=null),t.apply(null,l)};return[(...l)=>{const u=Date.now(),f=u-n;f>=r?o(l,u):(s=l,i||(i=setTimeout(()=>{i=null,o(s)},r-f)))},()=>s&&o(s)]}const ts=(t,e,n=3)=>{let r=0;const s=Yv(50,250);return Xv(i=>{const o=i.loaded,a=i.lengthComputable?i.total:void 0,c=o-r,l=s(c),u=o<=a;r=o;const f={loaded:o,total:a,progress:a?o/a:void 0,bytes:c,rate:l||void 0,estimated:l&&a&&u?(a-o)/l:void 0,event:i,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(f)},n)},qa=(t,e)=>{const n=t!=null;return[r=>e[0]({lengthComputable:n,total:t,loaded:r}),e[1]]},za=t=>(...e)=>_.asap(()=>t(...e)),Qv=Ee.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,Ee.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(Ee.origin),Ee.navigator&&/(msie|trident)/i.test(Ee.navigator.userAgent)):()=>!0,Zv=Ee.hasStandardBrowserEnv?{write(t,e,n,r,s,i){const o=[t+"="+encodeURIComponent(e)];_.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),_.isString(r)&&o.push("path="+r),_.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function eb(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function tb(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function Pu(t,e,n){let r=!eb(e);return t&&(r||n==!1)?tb(t,e):e}const Ka=t=>t instanceof Le?{...t}:t;function rn(t,e){e=e||{};const n={};function r(l,u,f,h){return _.isPlainObject(l)&&_.isPlainObject(u)?_.merge.call({caseless:h},l,u):_.isPlainObject(u)?_.merge({},u):_.isArray(u)?u.slice():u}function s(l,u,f,h){if(_.isUndefined(u)){if(!_.isUndefined(l))return r(void 0,l,f,h)}else return r(l,u,f,h)}function i(l,u){if(!_.isUndefined(u))return r(void 0,u)}function o(l,u){if(_.isUndefined(u)){if(!_.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function a(l,u,f){if(f in e)return r(l,u);if(f in t)return r(void 0,l)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,u,f)=>s(Ka(l),Ka(u),f,!0)};return _.forEach(Object.keys(Object.assign({},t,e)),function(u){const f=c[u]||s,h=f(t[u],e[u],u);_.isUndefined(h)&&f!==a||(n[u]=h)}),n}const ku=t=>{const e=rn({},t);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:i,headers:o,auth:a}=e;e.headers=o=Le.from(o),e.url=Tu(Pu(e.baseURL,e.url,e.allowAbsoluteUrls),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let c;if(_.isFormData(n)){if(Ee.hasStandardBrowserEnv||Ee.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((c=o.getContentType())!==!1){const[l,...u]=c?c.split(";").map(f=>f.trim()).filter(Boolean):[];o.setContentType([l||"multipart/form-data",...u].join("; "))}}if(Ee.hasStandardBrowserEnv&&(r&&_.isFunction(r)&&(r=r(e)),r||r!==!1&&Qv(e.url))){const l=s&&i&&Zv.read(i);l&&o.set(s,l)}return e},nb=typeof XMLHttpRequest<"u",rb=nb&&function(t){return new Promise(function(n,r){const s=ku(t);let i=s.data;const o=Le.from(s.headers).normalize();let{responseType:a,onUploadProgress:c,onDownloadProgress:l}=s,u,f,h,m,y;function v(){m&&m(),y&&y(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let b=new XMLHttpRequest;b.open(s.method.toUpperCase(),s.url,!0),b.timeout=s.timeout;function T(){if(!b)return;const A=Le.from("getAllResponseHeaders"in b&&b.getAllResponseHeaders()),j={data:!a||a==="text"||a==="json"?b.responseText:b.response,status:b.status,statusText:b.statusText,headers:A,config:t,request:b};Ou(function(z){n(z),v()},function(z){r(z),v()},j),b=null}"onloadend"in b?b.onloadend=T:b.onreadystatechange=function(){!b||b.readyState!==4||b.status===0&&!(b.responseURL&&b.responseURL.indexOf("file:")===0)||setTimeout(T)},b.onabort=function(){b&&(r(new q("Request aborted",q.ECONNABORTED,t,b)),b=null)},b.onerror=function(){r(new q("Network Error",q.ERR_NETWORK,t,b)),b=null},b.ontimeout=function(){let x=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const j=s.transitional||Ru;s.timeoutErrorMessage&&(x=s.timeoutErrorMessage),r(new q(x,j.clarifyTimeoutError?q.ETIMEDOUT:q.ECONNABORTED,t,b)),b=null},i===void 0&&o.setContentType(null),"setRequestHeader"in b&&_.forEach(o.toJSON(),function(x,j){b.setRequestHeader(j,x)}),_.isUndefined(s.withCredentials)||(b.withCredentials=!!s.withCredentials),a&&a!=="json"&&(b.responseType=s.responseType),l&&([h,y]=ts(l,!0),b.addEventListener("progress",h)),c&&b.upload&&([f,m]=ts(c),b.upload.addEventListener("progress",f),b.upload.addEventListener("loadend",m)),(s.cancelToken||s.signal)&&(u=A=>{b&&(r(!A||A.type?new xn(null,t,b):A),b.abort(),b=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const R=Jv(s.url);if(R&&Ee.protocols.indexOf(R)===-1){r(new q("Unsupported protocol "+R+":",q.ERR_BAD_REQUEST,t));return}b.send(i||null)})},sb=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let r=new AbortController,s;const i=function(l){if(!s){s=!0,a();const u=l instanceof Error?l:this.reason;r.abort(u instanceof q?u:new xn(u instanceof Error?u.message:u))}};let o=e&&setTimeout(()=>{o=null,i(new q(`timeout ${e} of ms exceeded`,q.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(l=>{l.unsubscribe?l.unsubscribe(i):l.removeEventListener("abort",i)}),t=null)};t.forEach(l=>l.addEventListener("abort",i));const{signal:c}=r;return c.unsubscribe=()=>_.asap(a),c}},ib=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let r=0,s;for(;r<n;)s=r+e,yield t.slice(r,s),r=s},ob=async function*(t,e){for await(const n of ab(t))yield*ib(n,e)},ab=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:r}=await e.read();if(n)break;yield r}}finally{await e.cancel()}},Ga=(t,e,n,r)=>{const s=ob(t,e);let i=0,o,a=c=>{o||(o=!0,r&&r(c))};return new ReadableStream({async pull(c){try{const{done:l,value:u}=await s.next();if(l){a(),c.close();return}let f=u.byteLength;if(n){let h=i+=f;n(h)}c.enqueue(new Uint8Array(u))}catch(l){throw a(l),l}},cancel(c){return a(c),s.return()}},{highWaterMark:2})},Cs=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",xu=Cs&&typeof ReadableStream=="function",cb=Cs&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),Nu=(t,...e)=>{try{return!!t(...e)}catch{return!1}},lb=xu&&Nu(()=>{let t=!1;const e=new Request(Ee.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e}),Ja=64*1024,Ai=xu&&Nu(()=>_.isReadableStream(new Response("").body)),ns={stream:Ai&&(t=>t.body)};Cs&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!ns[e]&&(ns[e]=_.isFunction(t[e])?n=>n[e]():(n,r)=>{throw new q(`Response type '${e}' is not supported`,q.ERR_NOT_SUPPORT,r)})})})(new Response);const ub=async t=>{if(t==null)return 0;if(_.isBlob(t))return t.size;if(_.isSpecCompliantForm(t))return(await new Request(Ee.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(_.isArrayBufferView(t)||_.isArrayBuffer(t))return t.byteLength;if(_.isURLSearchParams(t)&&(t=t+""),_.isString(t))return(await cb(t)).byteLength},fb=async(t,e)=>{const n=_.toFiniteNumber(t.getContentLength());return n??ub(e)},db=Cs&&(async t=>{let{url:e,method:n,data:r,signal:s,cancelToken:i,timeout:o,onDownloadProgress:a,onUploadProgress:c,responseType:l,headers:u,withCredentials:f="same-origin",fetchOptions:h}=ku(t);l=l?(l+"").toLowerCase():"text";let m=sb([s,i&&i.toAbortSignal()],o),y;const v=m&&m.unsubscribe&&(()=>{m.unsubscribe()});let b;try{if(c&&lb&&n!=="get"&&n!=="head"&&(b=await fb(u,r))!==0){let j=new Request(e,{method:"POST",body:r,duplex:"half"}),G;if(_.isFormData(r)&&(G=j.headers.get("content-type"))&&u.setContentType(G),j.body){const[z,ge]=qa(b,ts(za(c)));r=Ga(j.body,Ja,z,ge)}}_.isString(f)||(f=f?"include":"omit");const T="credentials"in Request.prototype;y=new Request(e,{...h,signal:m,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",credentials:T?f:void 0});let R=await fetch(y,h);const A=Ai&&(l==="stream"||l==="response");if(Ai&&(a||A&&v)){const j={};["status","statusText","headers"].forEach(Te=>{j[Te]=R[Te]});const G=_.toFiniteNumber(R.headers.get("content-length")),[z,ge]=a&&qa(G,ts(za(a),!0))||[];R=new Response(Ga(R.body,Ja,z,()=>{ge&&ge(),v&&v()}),j)}l=l||"text";let x=await ns[_.findKey(ns,l)||"text"](R,t);return!A&&v&&v(),await new Promise((j,G)=>{Ou(j,G,{data:x,headers:Le.from(R.headers),status:R.status,statusText:R.statusText,config:t,request:y})})}catch(T){throw v&&v(),T&&T.name==="TypeError"&&/Load failed|fetch/i.test(T.message)?Object.assign(new q("Network Error",q.ERR_NETWORK,t,y),{cause:T.cause||T}):q.from(T,T&&T.code,t,y)}}),Oi={http:Cv,xhr:rb,fetch:db};_.forEach(Oi,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Ya=t=>`- ${t}`,hb=t=>_.isFunction(t)||t===null||t===!1,Du={getAdapter:t=>{t=_.isArray(t)?t:[t];const{length:e}=t;let n,r;const s={};for(let i=0;i<e;i++){n=t[i];let o;if(r=n,!hb(n)&&(r=Oi[(o=String(n)).toLowerCase()],r===void 0))throw new q(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([a,c])=>`adapter ${a} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=e?i.length>1?`since :
`+i.map(Ya).join(`
`):" "+Ya(i[0]):"as no adapter specified";throw new q("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:Oi};function Qs(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new xn(null,t)}function Xa(t){return Qs(t),t.headers=Le.from(t.headers),t.data=Xs.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Du.getAdapter(t.adapter||Er.adapter)(t).then(function(r){return Qs(t),r.data=Xs.call(t,t.transformResponse,r),r.headers=Le.from(r.headers),r},function(r){return Au(r)||(Qs(t),r&&r.response&&(r.response.data=Xs.call(t,t.transformResponse,r.response),r.response.headers=Le.from(r.response.headers))),Promise.reject(r)})}const Lu="1.10.0",As={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{As[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const Qa={};As.transitional=function(e,n,r){function s(i,o){return"[Axios v"+Lu+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(e===!1)throw new q(s(o," has been removed"+(n?" in "+n:"")),q.ERR_DEPRECATED);return n&&!Qa[o]&&(Qa[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};As.spelling=function(e){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};function pb(t,e,n){if(typeof t!="object")throw new q("options must be an object",q.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const i=r[s],o=e[i];if(o){const a=t[i],c=a===void 0||o(a,i,t);if(c!==!0)throw new q("option "+i+" must be "+c,q.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new q("Unknown option "+i,q.ERR_BAD_OPTION)}}const Br={assertOptions:pb,validators:As},nt=Br.validators;let en=class{constructor(e){this.defaults=e||{},this.interceptors={request:new Va,response:new Va}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const i=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=rn(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&Br.assertOptions(r,{silentJSONParsing:nt.transitional(nt.boolean),forcedJSONParsing:nt.transitional(nt.boolean),clarifyTimeoutError:nt.transitional(nt.boolean)},!1),s!=null&&(_.isFunction(s)?n.paramsSerializer={serialize:s}:Br.assertOptions(s,{encode:nt.function,serialize:nt.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Br.assertOptions(n,{baseUrl:nt.spelling("baseURL"),withXsrfToken:nt.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&_.merge(i.common,i[n.method]);i&&_.forEach(["delete","get","head","post","put","patch","common"],y=>{delete i[y]}),n.headers=Le.concat(o,i);const a=[];let c=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(c=c&&v.synchronous,a.unshift(v.fulfilled,v.rejected))});const l=[];this.interceptors.response.forEach(function(v){l.push(v.fulfilled,v.rejected)});let u,f=0,h;if(!c){const y=[Xa.bind(this),void 0];for(y.unshift.apply(y,a),y.push.apply(y,l),h=y.length,u=Promise.resolve(n);f<h;)u=u.then(y[f++],y[f++]);return u}h=a.length;let m=n;for(f=0;f<h;){const y=a[f++],v=a[f++];try{m=y(m)}catch(b){v.call(this,b);break}}try{u=Xa.call(this,m)}catch(y){return Promise.reject(y)}for(f=0,h=l.length;f<h;)u=u.then(l[f++],l[f++]);return u}getUri(e){e=rn(this.defaults,e);const n=Pu(e.baseURL,e.url,e.allowAbsoluteUrls);return Tu(n,e.params,e.paramsSerializer)}};_.forEach(["delete","get","head","options"],function(e){en.prototype[e]=function(n,r){return this.request(rn(r||{},{method:e,url:n,data:(r||{}).data}))}});_.forEach(["post","put","patch"],function(e){function n(r){return function(i,o,a){return this.request(rn(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}en.prototype[e]=n(),en.prototype[e+"Form"]=n(!0)});let mb=class Mu{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},e(function(i,o,a){r.reason||(r.reason=new xn(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=r=>{e.abort(r)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new Mu(function(s){e=s}),cancel:e}}};function gb(t){return function(n){return t.apply(null,n)}}function _b(t){return _.isObject(t)&&t.isAxiosError===!0}const Pi={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Pi).forEach(([t,e])=>{Pi[e]=t});function Uu(t){const e=new en(t),n=hu(en.prototype.request,e);return _.extend(n,en.prototype,e,{allOwnKeys:!0}),_.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return Uu(rn(t,s))},n}const ue=Uu(Er);ue.Axios=en;ue.CanceledError=xn;ue.CancelToken=mb;ue.isCancel=Au;ue.VERSION=Lu;ue.toFormData=Rs;ue.AxiosError=q;ue.Cancel=ue.CanceledError;ue.all=function(e){return Promise.all(e)};ue.spread=gb;ue.isAxiosError=_b;ue.mergeConfig=rn;ue.AxiosHeaders=Le;ue.formToJSON=t=>Cu(_.isHTMLForm(t)?new FormData(t):t);ue.getAdapter=Du.getAdapter;ue.HttpStatusCode=Pi;ue.default=ue;const{Axios:$b,AxiosError:Hb,CanceledError:jb,isCancel:Vb,CancelToken:Wb,VERSION:qb,all:zb,Cancel:Kb,isAxiosError:Gb,spread:Jb,toFormData:Yb,AxiosHeaders:Xb,HttpStatusCode:Qb,formToJSON:Zb,getAdapter:ew,mergeConfig:tw}=ue,yb=ue.create({baseURL:"https://api.gameofthronesquotes.xyz/v1",timeout:5e3});function vb(){const t=he(!1),e=he(null),n=he(""),r=he("");return{quote:n,character:r,loading:t,error:e,fetchQuote:async()=>{t.value=!0,e.value=null;try{const{data:i}=await yb.get("/random");n.value=i.sentence.toUpperCase(),r.value=i.character.name}catch(i){e.value="Failed to fetch quote.",console.error(i)}finally{t.value=!1}}}}const bb={class:"min-vh-100 d-flex justify-content-center align-items-center text-center w-100"},wb={class:"game"},Eb={class:"word"},Sb={class:"letters clearfix"},Ib=["onClick"],Tb={key:0,class:"border border-warning bg-warning-subtle d-inline-block py-2 px-4 rounded-2"},Rb={class:"status"},Cb={key:0},Ab={key:1},Ob={key:2},Pb={class:"d-flex justify-content-center"},kb={class:"btn-group",role:"group"},Za=6,xb={__name:"GOT",setup(t){const{quote:e,character:n,fetchQuote:r}=vb();console.log(n),console.log(e);const s=he(!1),i=he(""),o=he([]),a="abcdefghijklmnopqrstuvwxyz".toUpperCase().split(""),c=fe(()=>o.value.filter(v=>!i.value.includes(v.toUpperCase())));function l(v){return/^[A-Z]$/i.test(v)}const u=fe(()=>i.value.split("").every(v=>!l(v)||o.value.includes(v.toUpperCase()))),f=fe(()=>c.value.length>=Za),h=fe(()=>u.value||f.value);function m(v){!h.value&&!o.value.includes(v.toUpperCase())&&o.value.push(v.toUpperCase())}async function y(){await r(),i.value=e.value,o.value=[]}return qi(()=>{y()}),(v,b)=>(Z(),ne(me,null,[ce(lo),B("div",bb,[B("div",wb,[B("div",null,[B("p",Eb,[(Z(!0),ne(me,null,nr(i.value,(T,R)=>(Z(),ne("span",{key:R},Ce(l(T)?o.value.includes(T)?T:"_":T),1))),128))]),B("p",Sb,[(Z(!0),ne(me,null,nr(ye(a),T=>(Z(),ne("span",{class:In(["d-inline-block bg-warning rounded-2",o.value.includes(T)||h.value?"disabled":""]),key:T,onClick:R=>m(T)},Ce(T),11,Ib))),128))]),s.value?(Z(),ne("p",Tb,Ce(ye(n)),1)):nl("",!0),B("p",Rb,[u.value?(Z(),ne("span",Cb,"🎉 You won!")):f.value?(Z(),ne("span",Ab,'💀 You lost. Word was "'+Ce(i.value)+'"',1)):(Z(),ne("span",Ob,"Mistakes: "+Ce(c.value.length)+"/"+Ce(Za),1))]),B("div",Pb,[B("div",kb,[B("button",{class:"btn btn-primary",onClick:y},"Next"),B("button",{class:In(["btn btn-primary",c.value.length<5?"disabled":""]),onClick:b[0]||(b[0]=T=>s.value=!s.value)},"Show Hint",2)])])])])])],64))}},Nb=ws(xb,[["__scopeId","data-v-8d32b366"]]),Db={};function Lb(t,e){return" ROUTE_NAMES.DASHBOARD "}const Mb=ws(Db,[["render",Lb]]),Ub=[{path:"/",component:Ty,name:be.HOME},{path:"/login",component:Ry,name:be.LOGIN},{path:"/tictactoe",component:wy,name:be.TICTACTOE},{path:"/wordGame",component:Hy,name:be.WORDGAME},{path:"/got",component:Nb,name:be.GOT},{path:"/dashboard",component:Mb,name:be.DASHBOARD,meta:{requiresAuth:!0}}],Fu=oy({history:L_("/vue-games/"),routes:Ub});Fu.beforeEach((t,e,n)=>{const r=es.currentUser;t.matched.some(i=>i.meta.requiresAuth)&&!r?n("/login"):t.path==="/login"&&r?n("/dashboard"):n()});const Bu=th(cy);Bu.use(Fu);Bu.mount("#app");
