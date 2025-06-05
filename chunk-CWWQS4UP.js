import{$ as Zi,$a as K,Aa as er,Ba as tr,Bb as te,C as Bn,Ca as nr,Cb as N,Da as ir,Db as gr,Ea as rr,Eb as ae,Fa as or,Fb as Ne,Ga as ge,Gb as Pe,Hb as bt,I as pt,Jb as yt,K as Un,Ka as H,Kb as Dt,L as M,La as Le,Ma as gt,Mb as an,N as m,Na as sr,Nb as ln,O as W,Oa as Ge,Pa as k,Q as S,Ra as mt,S as D,T as f,Ta as ar,Tb as X,U as Ve,V as Gi,Va as lr,Vb as Gn,W as Ki,X as Yi,Xa as se,Y as _e,Ya as G,Za as R,_a as nn,aa as I,bb as Me,c as Ui,ca as ht,db as cr,eb as ur,f as we,fa as jn,fb as dr,g as ji,ga as tn,gc as mr,h as kn,ha as Te,hc as vt,i as ut,ia as Hn,ib as me,ic as br,j as $n,ja as zn,jb as F,jc as yr,k as ze,ka as Y,kb as pr,kc as Dr,la as he,lb as rn,lc as P,ma as oe,mb as hr,mc as Kn,n as Hi,na as qi,nb as Ke,nc as Et,o as Ce,oa as Vn,oc as St,pa as Xi,pc as wt,qa as j,qc as Yn,sa as Wn,sb as Ye,ta as Ji,tb as Ze,u as zi,ub as Ae,vb as on,w as dt,wa as ft,wb as sn,x as Vi,xa as Fe,xb as fr,y as Wi,ya as We,za as Qi}from"./chunk-NX3CFXQX.js";import{a as v,b as xn,f as $}from"./chunk-EQDQRRRY.js";var E=new S("");var Sr=null;function be(){return Sr}function Zn(t){Sr??=t}var Ct=class{},_t=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:()=>f(wr),providedIn:"platform"})}return t})(),Ds=new S(""),wr=(()=>{class t extends _t{_location;_history;_doc=f(E);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return be().getBaseHref(this._doc)}onPopState(e){let n=be().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=be().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,r){this._history.pushState(e,n,r)}replaceState(e,n,r){this._history.replaceState(e,n,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function cn(t,i){return t?i?t.endsWith("/")?i.startsWith("/")?t+i.slice(1):t+i:i.startsWith("/")?t+i:`${t}/${i}`:t:i}function vr(t){let i=t.search(/#|\?|$/);return t[i-1]==="/"?t.slice(0,i-1)+t.slice(i):t}function le(t){return t&&t[0]!=="?"?`?${t}`:t}var qe=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:()=>f(Cr),providedIn:"root"})}return t})(),un=new S(""),Cr=(()=>{class t extends qe{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??f(E).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return cn(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+le(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${n}${r}`:n}pushState(e,n,r,o){let s=this.prepareExternalUrl(r+le(o));this._platformLocation.pushState(e,n,s)}replaceState(e,n,r,o){let s=this.prepareExternalUrl(r+le(o));this._platformLocation.replaceState(e,n,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(D(_t),D(un,8))};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),_r=(()=>{class t{_subject=new we;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=Ss(vr(Er(n))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+le(n))}normalize(e){return t.stripTrailingSlash(Es(this._basePath,Er(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",r=null){this._locationStrategy.pushState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+le(n)),r)}replaceState(e,n="",r=null){this._locationStrategy.replaceState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+le(n)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(r=>r(e,n))}subscribe(e,n,r){return this._subject.subscribe({next:e,error:n??void 0,complete:r??void 0})}static normalizeQueryParams=le;static joinWithSlash=cn;static stripTrailingSlash=vr;static \u0275fac=function(n){return new(n||t)(D(qe))};static \u0275prov=m({token:t,factory:()=>vs(),providedIn:"root"})}return t})();function vs(){return new _r(D(qe))}function Es(t,i){if(!t||!i.startsWith(t))return i;let e=i.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:i}function Er(t){return t.replace(/\/index.html$/,"")}function Ss(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var ws=(()=>{class t extends qe{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,n!=null&&(this._baseHref=n)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let n=this._platformLocation.hash??"#";return n.length>0?n.substring(1):n}prepareExternalUrl(e){let n=cn(this._baseHref,e);return n.length>0?"#"+n:n}pushState(e,n,r,o){let s=this.prepareExternalUrl(r+le(o))||this._platformLocation.pathname;this._platformLocation.pushState(e,n,s)}replaceState(e,n,r,o){let s=this.prepareExternalUrl(r+le(o))||this._platformLocation.pathname;this._platformLocation.replaceState(e,n,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(D(_t),D(un,8))};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})();var z=function(t){return t[t.Format=0]="Format",t[t.Standalone=1]="Standalone",t}(z||{}),w=function(t){return t[t.Narrow=0]="Narrow",t[t.Abbreviated=1]="Abbreviated",t[t.Wide=2]="Wide",t[t.Short=3]="Short",t}(w||{}),Z=function(t){return t[t.Short=0]="Short",t[t.Medium=1]="Medium",t[t.Long=2]="Long",t[t.Full=3]="Full",t}(Z||{}),De={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function Fr(t){return te(t)[N.LocaleId]}function Lr(t,i,e){let n=te(t),r=[n[N.DayPeriodsFormat],n[N.DayPeriodsStandalone]],o=ne(r,i);return ne(o,e)}function Mr(t,i,e){let n=te(t),r=[n[N.DaysFormat],n[N.DaysStandalone]],o=ne(r,i);return ne(o,e)}function Nr(t,i,e){let n=te(t),r=[n[N.MonthsFormat],n[N.MonthsStandalone]],o=ne(r,i);return ne(o,e)}function Pr(t,i){let n=te(t)[N.Eras];return ne(n,i)}function Tt(t,i){let e=te(t);return ne(e[N.DateFormat],i)}function At(t,i){let e=te(t);return ne(e[N.TimeFormat],i)}function It(t,i){let n=te(t)[N.DateTimeFormat];return ne(n,i)}function Ot(t,i){let e=te(t),n=e[N.NumberSymbols][i];if(typeof n>"u"){if(i===De.CurrencyDecimal)return e[N.NumberSymbols][De.Decimal];if(i===De.CurrencyGroup)return e[N.NumberSymbols][De.Group]}return n}function xr(t){if(!t[N.ExtraData])throw new Error(`Missing extra locale data for the locale "${t[N.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`)}function kr(t){let i=te(t);return xr(i),(i[N.ExtraData][2]||[]).map(n=>typeof n=="string"?qn(n):[qn(n[0]),qn(n[1])])}function $r(t,i,e){let n=te(t);xr(n);let r=[n[N.ExtraData][0],n[N.ExtraData][1]],o=ne(r,i)||[];return ne(o,e)||[]}function ne(t,i){for(let e=i;e>-1;e--)if(typeof t[e]<"u")return t[e];throw new Error("Locale data API: locale data undefined")}function qn(t){let[i,e]=t.split(":");return{hours:+i,minutes:+e}}var Cs=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,dn={},_s=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;function Br(t,i,e,n){let r=Ns(t);i=ye(e,i)||i;let s=[],a;for(;i;)if(a=_s.exec(i),a){s=s.concat(a.slice(1));let u=s.pop();if(!u)break;i=u}else{s.push(i);break}let l=r.getTimezoneOffset();n&&(l=jr(n,l),r=Ms(r,n));let c="";return s.forEach(u=>{let d=Fs(u);c+=d?d(r,e,l):u==="''"?"'":u.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),c}function mn(t,i,e){let n=new Date(0);return n.setFullYear(t,i,e),n.setHours(0,0,0),n}function ye(t,i){let e=Fr(t);if(dn[e]??={},dn[e][i])return dn[e][i];let n="";switch(i){case"shortDate":n=Tt(t,Z.Short);break;case"mediumDate":n=Tt(t,Z.Medium);break;case"longDate":n=Tt(t,Z.Long);break;case"fullDate":n=Tt(t,Z.Full);break;case"shortTime":n=At(t,Z.Short);break;case"mediumTime":n=At(t,Z.Medium);break;case"longTime":n=At(t,Z.Long);break;case"fullTime":n=At(t,Z.Full);break;case"short":let r=ye(t,"shortTime"),o=ye(t,"shortDate");n=pn(It(t,Z.Short),[r,o]);break;case"medium":let s=ye(t,"mediumTime"),a=ye(t,"mediumDate");n=pn(It(t,Z.Medium),[s,a]);break;case"long":let l=ye(t,"longTime"),c=ye(t,"longDate");n=pn(It(t,Z.Long),[l,c]);break;case"full":let u=ye(t,"fullTime"),d=ye(t,"fullDate");n=pn(It(t,Z.Full),[u,d]);break}return n&&(dn[e][i]=n),n}function pn(t,i){return i&&(t=t.replace(/\{([^}]+)}/g,function(e,n){return i!=null&&n in i?i[n]:e})),t}function ce(t,i,e="-",n,r){let o="";(t<0||r&&t<=0)&&(r?t=-t+1:(t=-t,o=e));let s=String(t);for(;s.length<i;)s="0"+s;return n&&(s=s.slice(s.length-i)),o+s}function Ts(t,i){return ce(t,3).substring(0,i)}function x(t,i,e=0,n=!1,r=!1){return function(o,s){let a=As(t,o);if((e>0||a>-e)&&(a+=e),t===3)a===0&&e===-12&&(a=12);else if(t===6)return Ts(a,i);let l=Ot(s,De.MinusSign);return ce(a,i,l,n,r)}}function As(t,i){switch(t){case 0:return i.getFullYear();case 1:return i.getMonth();case 2:return i.getDate();case 3:return i.getHours();case 4:return i.getMinutes();case 5:return i.getSeconds();case 6:return i.getMilliseconds();case 7:return i.getDay();default:throw new Error(`Unknown DateType value "${t}".`)}}function T(t,i,e=z.Format,n=!1){return function(r,o){return Is(r,o,t,i,e,n)}}function Is(t,i,e,n,r,o){switch(e){case 2:return Nr(i,r,n)[t.getMonth()];case 1:return Mr(i,r,n)[t.getDay()];case 0:let s=t.getHours(),a=t.getMinutes();if(o){let c=kr(i),u=$r(i,r,n),d=c.findIndex(p=>{if(Array.isArray(p)){let[h,b]=p,g=s>=h.hours&&a>=h.minutes,y=s<b.hours||s===b.hours&&a<b.minutes;if(h.hours<b.hours){if(g&&y)return!0}else if(g||y)return!0}else if(p.hours===s&&p.minutes===a)return!0;return!1});if(d!==-1)return u[d]}return Lr(i,r,n)[s<12?0:1];case 3:return Pr(i,n)[t.getFullYear()<=0?0:1];default:let l=e;throw new Error(`unexpected translation type ${l}`)}}function hn(t){return function(i,e,n){let r=-1*n,o=Ot(e,De.MinusSign),s=r>0?Math.floor(r/60):Math.ceil(r/60);switch(t){case 0:return(r>=0?"+":"")+ce(s,2,o)+ce(Math.abs(r%60),2,o);case 1:return"GMT"+(r>=0?"+":"")+ce(s,1,o);case 2:return"GMT"+(r>=0?"+":"")+ce(s,2,o)+":"+ce(Math.abs(r%60),2,o);case 3:return n===0?"Z":(r>=0?"+":"")+ce(s,2,o)+":"+ce(Math.abs(r%60),2,o);default:throw new Error(`Unknown zone width "${t}"`)}}}var Os=0,gn=4;function Rs(t){let i=mn(t,Os,1).getDay();return mn(t,0,1+(i<=gn?gn:gn+7)-i)}function Ur(t){let i=t.getDay(),e=i===0?-3:gn-i;return mn(t.getFullYear(),t.getMonth(),t.getDate()+e)}function Xn(t,i=!1){return function(e,n){let r;if(i){let o=new Date(e.getFullYear(),e.getMonth(),1).getDay()-1,s=e.getDate();r=1+Math.floor((s+o)/7)}else{let o=Ur(e),s=Rs(o.getFullYear()),a=o.getTime()-s.getTime();r=1+Math.round(a/6048e5)}return ce(r,t,Ot(n,De.MinusSign))}}function fn(t,i=!1){return function(e,n){let o=Ur(e).getFullYear();return ce(o,t,Ot(n,De.MinusSign),i)}}var Jn={};function Fs(t){if(Jn[t])return Jn[t];let i;switch(t){case"G":case"GG":case"GGG":i=T(3,w.Abbreviated);break;case"GGGG":i=T(3,w.Wide);break;case"GGGGG":i=T(3,w.Narrow);break;case"y":i=x(0,1,0,!1,!0);break;case"yy":i=x(0,2,0,!0,!0);break;case"yyy":i=x(0,3,0,!1,!0);break;case"yyyy":i=x(0,4,0,!1,!0);break;case"Y":i=fn(1);break;case"YY":i=fn(2,!0);break;case"YYY":i=fn(3);break;case"YYYY":i=fn(4);break;case"M":case"L":i=x(1,1,1);break;case"MM":case"LL":i=x(1,2,1);break;case"MMM":i=T(2,w.Abbreviated);break;case"MMMM":i=T(2,w.Wide);break;case"MMMMM":i=T(2,w.Narrow);break;case"LLL":i=T(2,w.Abbreviated,z.Standalone);break;case"LLLL":i=T(2,w.Wide,z.Standalone);break;case"LLLLL":i=T(2,w.Narrow,z.Standalone);break;case"w":i=Xn(1);break;case"ww":i=Xn(2);break;case"W":i=Xn(1,!0);break;case"d":i=x(2,1);break;case"dd":i=x(2,2);break;case"c":case"cc":i=x(7,1);break;case"ccc":i=T(1,w.Abbreviated,z.Standalone);break;case"cccc":i=T(1,w.Wide,z.Standalone);break;case"ccccc":i=T(1,w.Narrow,z.Standalone);break;case"cccccc":i=T(1,w.Short,z.Standalone);break;case"E":case"EE":case"EEE":i=T(1,w.Abbreviated);break;case"EEEE":i=T(1,w.Wide);break;case"EEEEE":i=T(1,w.Narrow);break;case"EEEEEE":i=T(1,w.Short);break;case"a":case"aa":case"aaa":i=T(0,w.Abbreviated);break;case"aaaa":i=T(0,w.Wide);break;case"aaaaa":i=T(0,w.Narrow);break;case"b":case"bb":case"bbb":i=T(0,w.Abbreviated,z.Standalone,!0);break;case"bbbb":i=T(0,w.Wide,z.Standalone,!0);break;case"bbbbb":i=T(0,w.Narrow,z.Standalone,!0);break;case"B":case"BB":case"BBB":i=T(0,w.Abbreviated,z.Format,!0);break;case"BBBB":i=T(0,w.Wide,z.Format,!0);break;case"BBBBB":i=T(0,w.Narrow,z.Format,!0);break;case"h":i=x(3,1,-12);break;case"hh":i=x(3,2,-12);break;case"H":i=x(3,1);break;case"HH":i=x(3,2);break;case"m":i=x(4,1);break;case"mm":i=x(4,2);break;case"s":i=x(5,1);break;case"ss":i=x(5,2);break;case"S":i=x(6,1);break;case"SS":i=x(6,2);break;case"SSS":i=x(6,3);break;case"Z":case"ZZ":case"ZZZ":i=hn(0);break;case"ZZZZZ":i=hn(3);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":i=hn(1);break;case"OOOO":case"ZZZZ":case"zzzz":i=hn(2);break;default:return null}return Jn[t]=i,i}function jr(t,i){t=t.replace(/:/g,"");let e=Date.parse("Jan 01, 1970 00:00:00 "+t)/6e4;return isNaN(e)?i:e}function Ls(t,i){return t=new Date(t.getTime()),t.setMinutes(t.getMinutes()+i),t}function Ms(t,i,e){let r=t.getTimezoneOffset(),o=jr(i,r);return Ls(t,-1*(o-r))}function Ns(t){if(Tr(t))return t;if(typeof t=="number"&&!isNaN(t))return new Date(t);if(typeof t=="string"){if(t=t.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(t)){let[r,o=1,s=1]=t.split("-").map(a=>+a);return mn(r,o-1,s)}let e=parseFloat(t);if(!isNaN(t-e))return new Date(e);let n;if(n=t.match(Cs))return Ps(n)}let i=new Date(t);if(!Tr(i))throw new Error(`Unable to convert "${t}" into a date`);return i}function Ps(t){let i=new Date(0),e=0,n=0,r=t[8]?i.setUTCFullYear:i.setFullYear,o=t[8]?i.setUTCHours:i.setHours;t[9]&&(e=Number(t[9]+t[10]),n=Number(t[9]+t[11])),r.call(i,Number(t[1]),Number(t[2])-1,Number(t[3]));let s=Number(t[4]||0)-e,a=Number(t[5]||0)-n,l=Number(t[6]||0),c=Math.floor(parseFloat("0."+(t[7]||0))*1e3);return o.call(i,s,a,l,c),i}function Tr(t){return t instanceof Date&&!isNaN(t.valueOf())}var Qn=/\s+/,Ar=[],ni=(()=>{class t{_ngEl;_renderer;initialClasses=Ar;rawClass;stateMap=new Map;constructor(e,n){this._ngEl=e,this._renderer=n}set klass(e){this.initialClasses=e!=null?e.trim().split(Qn):Ar}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(Qn):e}ngDoCheck(){for(let n of this.initialClasses)this._updateState(n,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let n of e)this._updateState(n,!0);else if(e!=null)for(let n of Object.keys(e))this._updateState(n,!!e[n]);this._applyStateDiff()}_updateState(e,n){let r=this.stateMap.get(e);r!==void 0?(r.enabled!==n&&(r.changed=!0,r.enabled=n),r.touched=!0):this.stateMap.set(e,{enabled:n,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let n=e[0],r=e[1];r.changed?(this._toggleClass(n,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(n,!1),this.stateMap.delete(n)),r.touched=!1}}_toggleClass(e,n){e=e.trim(),e.length>0&&e.split(Qn).forEach(r=>{n?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}static \u0275fac=function(n){return new(n||t)(k(he),k(Ge))};static \u0275dir=R({type:t,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return t})(),xs=(()=>{class t{_viewContainerRef;ngComponentOutlet=null;ngComponentOutletInputs;ngComponentOutletInjector;ngComponentOutletContent;ngComponentOutletNgModule;ngComponentOutletNgModuleFactory;_componentRef;_moduleRef;_inputsUsed=new Map;get componentInstance(){return this._componentRef?.instance??null}constructor(e){this._viewContainerRef=e}_needToReCreateNgModuleInstance(e){return e.ngComponentOutletNgModule!==void 0||e.ngComponentOutletNgModuleFactory!==void 0}_needToReCreateComponentInstance(e){return e.ngComponentOutlet!==void 0||e.ngComponentOutletContent!==void 0||e.ngComponentOutletInjector!==void 0||this._needToReCreateNgModuleInstance(e)}ngOnChanges(e){if(this._needToReCreateComponentInstance(e)&&(this._viewContainerRef.clear(),this._inputsUsed.clear(),this._componentRef=void 0,this.ngComponentOutlet)){let n=this.ngComponentOutletInjector||this._viewContainerRef.parentInjector;this._needToReCreateNgModuleInstance(e)&&(this._moduleRef?.destroy(),this.ngComponentOutletNgModule?this._moduleRef=lr(this.ngComponentOutletNgModule,Ir(n)):this.ngComponentOutletNgModuleFactory?this._moduleRef=this.ngComponentOutletNgModuleFactory.create(Ir(n)):this._moduleRef=void 0),this._componentRef=this._viewContainerRef.createComponent(this.ngComponentOutlet,{injector:n,ngModuleRef:this._moduleRef,projectableNodes:this.ngComponentOutletContent})}}ngDoCheck(){if(this._componentRef){if(this.ngComponentOutletInputs)for(let e of Object.keys(this.ngComponentOutletInputs))this._inputsUsed.set(e,!0);this._applyInputStateDiff(this._componentRef)}}ngOnDestroy(){this._moduleRef?.destroy()}_applyInputStateDiff(e){for(let[n,r]of this._inputsUsed)r?(e.setInput(n,this.ngComponentOutletInputs[n]),this._inputsUsed.set(n,!1)):(e.setInput(n,void 0),this._inputsUsed.delete(n))}static \u0275fac=function(n){return new(n||t)(k(mt))};static \u0275dir=R({type:t,selectors:[["","ngComponentOutlet",""]],inputs:{ngComponentOutlet:"ngComponentOutlet",ngComponentOutletInputs:"ngComponentOutletInputs",ngComponentOutletInjector:"ngComponentOutletInjector",ngComponentOutletContent:"ngComponentOutletContent",ngComponentOutletNgModule:"ngComponentOutletNgModule",ngComponentOutletNgModuleFactory:"ngComponentOutletNgModuleFactory"},exportAs:["ngComponentOutlet"],features:[_e]})}return t})();function Ir(t){return t.get(ar).injector}var bn=class{$implicit;ngForOf;index;count;constructor(i,e,n,r){this.$implicit=i,this.ngForOf=e,this.index=n,this.count=r}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},Hr=(()=>{class t{_viewContainer;_template;_differs;set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(e,n,r){this._viewContainer=e,this._template=n,this._differs=r}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let e=this._ngForOf;!this._differ&&e&&(this._differ=this._differs.find(e).create(this.ngForTrackBy))}if(this._differ){let e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){let n=this._viewContainer;e.forEachOperation((r,o,s)=>{if(r.previousIndex==null)n.createEmbeddedView(this._template,new bn(r.item,this._ngForOf,-1,-1),s===null?void 0:s);else if(s==null)n.remove(o===null?void 0:o);else if(o!==null){let a=n.get(o);n.move(a,s),Or(a,r)}});for(let r=0,o=n.length;r<o;r++){let a=n.get(r).context;a.index=r,a.count=o,a.ngForOf=this._ngForOf}e.forEachIdentityChange(r=>{let o=n.get(r.currentIndex);Or(o,r)})}static ngTemplateContextGuard(e,n){return!0}static \u0275fac=function(n){return new(n||t)(k(mt),k(gt),k(br))};static \u0275dir=R({type:t,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return t})();function Or(t,i){t.context.$implicit=i.item}var ii=(()=>{class t{_viewContainer;_context=new yn;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(e,n){this._viewContainer=e,this._thenTemplateRef=n}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){Rr(e,!1),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){Rr(e,!1),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(e,n){return!0}static \u0275fac=function(n){return new(n||t)(k(mt),k(gt))};static \u0275dir=R({type:t,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return t})(),yn=class{$implicit=null;ngIf=null};function Rr(t,i){if(t&&!t.createEmbeddedView)throw new M(2020,!1)}var ri=(()=>{class t{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(e,n,r){this._ngEl=e,this._differs=n,this._renderer=r}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,n){let[r,o]=e.split("."),s=r.indexOf("-")===-1?void 0:Le.DashCase;n!=null?this._renderer.setStyle(this._ngEl.nativeElement,r,o?`${n}${o}`:n,s):this._renderer.removeStyle(this._ngEl.nativeElement,r,s)}_applyChanges(e){e.forEachRemovedItem(n=>this._setStyle(n.key,null)),e.forEachAddedItem(n=>this._setStyle(n.key,n.currentValue)),e.forEachChangedItem(n=>this._setStyle(n.key,n.currentValue))}static \u0275fac=function(n){return new(n||t)(k(he),k(yr),k(Ge))};static \u0275dir=R({type:t,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return t})(),oi=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this.ngTemplateOutletInjector??void 0})}}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,r):!1,get:(e,n,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,r)}})}static \u0275fac=function(n){return new(n||t)(k(mt))};static \u0275dir=R({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[_e]})}return t})();function zr(t,i){return new M(2100,!1)}var ei=class{createSubscription(i,e){return Et(()=>i.subscribe({next:e,error:n=>{throw n}}))}dispose(i){Et(()=>i.unsubscribe())}},ti=class{createSubscription(i,e){return i.then(e,n=>{throw n})}dispose(i){}},ks=new ti,$s=new ei,Bs=(()=>{class t{_ref;_latestValue=null;markForCheckOnValueUpdate=!0;_subscription=null;_obj=null;_strategy=null;constructor(e){this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){if(!this._obj){if(e)try{this.markForCheckOnValueUpdate=!1,this._subscribe(e)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,n=>this._updateLatestValue(e,n))}_selectStrategy(e){if(cr(e))return ks;if(ur(e))return $s;throw zr(t,e)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,n){e===this._obj&&(this._latestValue=n,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static \u0275fac=function(n){return new(n||t)(k(vt,16))};static \u0275pipe=nn({name:"async",type:t,pure:!1})}return t})();var Us="mediumDate",Vr=new S(""),Wr=new S(""),js=(()=>{class t{locale;defaultTimezone;defaultOptions;constructor(e,n,r){this.locale=e,this.defaultTimezone=n,this.defaultOptions=r}transform(e,n,r,o){if(e==null||e===""||e!==e)return null;try{let s=n??this.defaultOptions?.dateFormat??Us,a=r??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return Br(e,s,o||this.locale,a)}catch(s){throw zr(t,s.message)}}static \u0275fac=function(n){return new(n||t)(k(mr,16),k(Vr,24),k(Wr,24))};static \u0275pipe=nn({name:"date",type:t,pure:!0})}return t})();var Hs=(()=>{class t{transform(e){return JSON.stringify(e,null,2)}static \u0275fac=function(n){return new(n||t)};static \u0275pipe=nn({name:"json",type:t,pure:!1})}return t})();var ve=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=W({})}return t})();function Rt(t,i){i=encodeURIComponent(i);for(let e of t.split(";")){let n=e.indexOf("="),[r,o]=n==-1?[e,""]:[e.slice(0,n),e.slice(n+1)];if(r.trim()===i)return decodeURIComponent(o)}return null}var Dn="browser",Gr="server";function ke(t){return t===Dn}function Xe(t){return t===Gr}var xe=class{};var du=(()=>{class t{static \u0275prov=m({token:t,providedIn:"root",factory:()=>new si(f(E),window)})}return t})(),si=class{document;window;offset=()=>[0,0];constructor(i,e){this.document=i,this.window=e}setOffset(i){Array.isArray(i)?this.offset=()=>i:this.offset=i}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(i){this.window.scrollTo(i[0],i[1])}scrollToAnchor(i){let e=Ws(this.document,i);e&&(this.scrollToElement(e),e.focus())}setHistoryScrollRestoration(i){this.window.history.scrollRestoration=i}scrollToElement(i){let e=i.getBoundingClientRect(),n=e.left+this.window.pageXOffset,r=e.top+this.window.pageYOffset,o=this.offset();this.window.scrollTo(n-o[0],r-o[1])}};function Ws(t,i){let e=t.getElementById(i)||t.getElementsByName(i)[0];if(e)return e;if(typeof t.createTreeWalker=="function"&&t.body&&typeof t.body.attachShadow=="function"){let n=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT),r=n.currentNode;for(;r;){let o=r.shadowRoot;if(o){let s=o.getElementById(i)||o.querySelector(`[name="${i}"]`);if(s)return s}r=n.nextNode()}}return null}var Sn=new S(""),ui=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,n){this._zone=n,e.forEach(r=>{r.manager=this}),this._plugins=e.slice().reverse()}addEventListener(e,n,r,o){return this._findPluginFor(n).addEventListener(e,n,r,o)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(o=>o.supports(e)),!n)throw new M(5101,!1);return this._eventNameToPlugin.set(e,n),n}static \u0275fac=function(n){return new(n||t)(D(Sn),D(Te))};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})(),Ft=class{_doc;constructor(i){this._doc=i}manager},vn="ng-app-id";function Kr(t){for(let i of t)i.remove()}function Yr(t,i){let e=i.createElement("style");return e.textContent=t,e}function Ks(t,i,e,n){let r=t.head?.querySelectorAll(`style[${vn}="${i}"],link[${vn}="${i}"]`);if(r)for(let o of r)o.removeAttribute(vn),o instanceof HTMLLinkElement?n.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function li(t,i){let e=i.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var di=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(e,n,r,o={}){this.doc=e,this.appId=n,this.nonce=r,this.isServer=Xe(o),Ks(e,n,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,n){for(let r of e)this.addUsage(r,this.inline,Yr);n?.forEach(r=>this.addUsage(r,this.external,li))}removeStyles(e,n){for(let r of e)this.removeUsage(r,this.inline);n?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,n,r){let o=n.get(e);o?o.usage++:n.set(e,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,r(e,this.doc)))})}removeUsage(e,n){let r=n.get(e);r&&(r.usage--,r.usage<=0&&(Kr(r.elements),n.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])Kr(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[n,{elements:r}]of this.inline)r.push(this.addElement(e,Yr(n,this.doc)));for(let[n,{elements:r}]of this.external)r.push(this.addElement(e,li(n,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,n){return this.nonce&&n.setAttribute("nonce",this.nonce),this.isServer&&n.setAttribute(vn,this.appId),e.appendChild(n)}static \u0275fac=function(n){return new(n||t)(D(E),D(Vn),D(Wn,8),D(j))};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})(),ai={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},pi=/%COMP%/g;var qr="%COMP%",Ys=`_nghost-${qr}`,Zs=`_ngcontent-${qr}`,qs=!0,Xs=new S("",{providedIn:"root",factory:()=>qs});function Js(t){return Zs.replace(pi,t)}function Qs(t){return Ys.replace(pi,t)}function Xr(t,i){return i.map(e=>e.replace(pi,t))}var hi=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(e,n,r,o,s,a,l,c=null,u=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=s,this.platformId=a,this.ngZone=l,this.nonce=c,this.tracingService=u,this.platformIsServer=Xe(a),this.defaultRenderer=new Lt(e,s,l,this.platformIsServer,this.tracingService)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;this.platformIsServer&&n.encapsulation===ft.ShadowDom&&(n=xn(v({},n),{encapsulation:ft.Emulated}));let r=this.getOrCreateRenderer(e,n);return r instanceof En?r.applyToHost(e):r instanceof Mt&&r.applyStyles(),r}getOrCreateRenderer(e,n){let r=this.rendererByCompId,o=r.get(n.id);if(!o){let s=this.doc,a=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,d=this.platformIsServer,p=this.tracingService;switch(n.encapsulation){case ft.Emulated:o=new En(l,c,n,this.appId,u,s,a,d,p);break;case ft.ShadowDom:return new ci(l,c,e,n,s,a,this.nonce,d,p);default:o=new Mt(l,c,n,u,s,a,d,p);break}r.set(n.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(n){return new(n||t)(D(ui),D(di),D(Vn),D(Xs),D(E),D(j),D(Te),D(Wn),D(Ji,8))};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})(),Lt=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(i,e,n,r,o){this.eventManager=i,this.doc=e,this.ngZone=n,this.platformIsServer=r,this.tracingService=o}destroy(){}destroyNode=null;createElement(i,e){return e?this.doc.createElementNS(ai[e]||e,i):this.doc.createElement(i)}createComment(i){return this.doc.createComment(i)}createText(i){return this.doc.createTextNode(i)}appendChild(i,e){(Zr(i)?i.content:i).appendChild(e)}insertBefore(i,e,n){i&&(Zr(i)?i.content:i).insertBefore(e,n)}removeChild(i,e){e.remove()}selectRootElement(i,e){let n=typeof i=="string"?this.doc.querySelector(i):i;if(!n)throw new M(-5104,!1);return e||(n.textContent=""),n}parentNode(i){return i.parentNode}nextSibling(i){return i.nextSibling}setAttribute(i,e,n,r){if(r){e=r+":"+e;let o=ai[r];o?i.setAttributeNS(o,e,n):i.setAttribute(e,n)}else i.setAttribute(e,n)}removeAttribute(i,e,n){if(n){let r=ai[n];r?i.removeAttributeNS(r,e):i.removeAttribute(`${n}:${e}`)}else i.removeAttribute(e)}addClass(i,e){i.classList.add(e)}removeClass(i,e){i.classList.remove(e)}setStyle(i,e,n,r){r&(Le.DashCase|Le.Important)?i.style.setProperty(e,n,r&Le.Important?"important":""):i.style[e]=n}removeStyle(i,e,n){n&Le.DashCase?i.style.removeProperty(e):i.style[e]=""}setProperty(i,e,n){i!=null&&(i[e]=n)}setValue(i,e){i.nodeValue=e}listen(i,e,n,r){if(typeof i=="string"&&(i=be().getGlobalEventTarget(this.doc,i),!i))throw new M(5102,!1);let o=this.decoratePreventDefault(n);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(i,e,o)),this.eventManager.addEventListener(i,e,o,r)}decoratePreventDefault(i){return e=>{if(e==="__ngUnwrap__")return i;(this.platformIsServer?this.ngZone.runGuarded(()=>i(e)):i(e))===!1&&e.preventDefault()}}};function Zr(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var ci=class extends Lt{sharedStylesHost;hostEl;shadowRoot;constructor(i,e,n,r,o,s,a,l,c){super(i,o,s,l,c),this.sharedStylesHost=e,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let u=r.styles;u=Xr(r.id,u);for(let p of u){let h=document.createElement("style");a&&h.setAttribute("nonce",a),h.textContent=p,this.shadowRoot.appendChild(h)}let d=r.getExternalStyles?.();if(d)for(let p of d){let h=li(p,o);a&&h.setAttribute("nonce",a),this.shadowRoot.appendChild(h)}}nodeOrShadowRoot(i){return i===this.hostEl?this.shadowRoot:i}appendChild(i,e){return super.appendChild(this.nodeOrShadowRoot(i),e)}insertBefore(i,e,n){return super.insertBefore(this.nodeOrShadowRoot(i),e,n)}removeChild(i,e){return super.removeChild(null,e)}parentNode(i){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(i)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Mt=class extends Lt{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(i,e,n,r,o,s,a,l,c){super(i,o,s,a,l),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let u=n.styles;this.styles=c?Xr(c,u):u,this.styleUrls=n.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},En=class extends Mt{contentAttr;hostAttr;constructor(i,e,n,r,o,s,a,l,c){let u=r+"-"+n.id;super(i,e,n,o,s,a,l,c,u),this.contentAttr=Js(u),this.hostAttr=Qs(u)}applyToHost(i){this.applyStyles(),this.setAttribute(i,this.hostAttr,"")}createElement(i,e){let n=super.createElement(i,e);return super.setAttribute(n,this.contentAttr,""),n}};var wn=class t extends Ct{supportsDOMEvents=!0;static makeCurrent(){Zn(new t)}onAndCancel(i,e,n,r){return i.addEventListener(e,n,r),()=>{i.removeEventListener(e,n,r)}}dispatchEvent(i,e){i.dispatchEvent(e)}remove(i){i.remove()}createElement(i,e){return e=e||this.getDefaultDocument(),e.createElement(i)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(i){return i.nodeType===Node.ELEMENT_NODE}isShadowRoot(i){return i instanceof DocumentFragment}getGlobalEventTarget(i,e){return e==="window"?window:e==="document"?i:e==="body"?i.body:null}getBaseHref(i){let e=ta();return e==null?null:na(e)}resetBaseElement(){Nt=null}getUserAgent(){return window.navigator.userAgent}getCookie(i){return Rt(document.cookie,i)}},Nt=null;function ta(){return Nt=Nt||document.querySelector("base"),Nt?Nt.getAttribute("href"):null}function na(t){return new URL(t,document.baseURI).pathname}var ia=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})(),Qr=(()=>{class t extends Ft{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,r,o){return e.addEventListener(n,r,o),()=>this.removeEventListener(e,n,r,o)}removeEventListener(e,n,r,o){return e.removeEventListener(n,r,o)}static \u0275fac=function(n){return new(n||t)(D(E))};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})(),Jr=["alt","control","meta","shift"],ra={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},oa={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},eo=(()=>{class t extends Ft{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,n,r,o){let s=t.parseEventName(n),a=t.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>be().onAndCancel(e,s.domEventName,a,o))}static parseEventName(e){let n=e.toLowerCase().split("."),r=n.shift();if(n.length===0||!(r==="keydown"||r==="keyup"))return null;let o=t._normalizeKey(n.pop()),s="",a=n.indexOf("code");if(a>-1&&(n.splice(a,1),s="code."),Jr.forEach(c=>{let u=n.indexOf(c);u>-1&&(n.splice(u,1),s+=c+".")}),s+=o,n.length!=0||o.length===0)return null;let l={};return l.domEventName=r,l.fullKey=s,l}static matchEventFullKeyCode(e,n){let r=ra[e.key]||e.key,o="";return n.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),Jr.forEach(s=>{if(s!==r){let a=oa[s];a(e)&&(o+=s+".")}}),o+=r,o===n)}static eventCallback(e,n,r){return o=>{t.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>n(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(n){return new(n||t)(D(E))};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})();function sa(t,i){return Dr(v({rootComponent:t},aa(i)))}function aa(t){return{appProviders:[...pa,...t?.providers??[]],platformProviders:da}}function la(){wn.makeCurrent()}function ca(){return new Hn}function ua(){return qi(document),document}var da=[{provide:j,useValue:Dn},{provide:Xi,useValue:la,multi:!0},{provide:E,useFactory:ua}];var pa=[{provide:Gi,useValue:"root"},{provide:Hn,useFactory:ca},{provide:Sn,useClass:Qr,multi:!0,deps:[E]},{provide:Sn,useClass:eo,multi:!0,deps:[E]},hi,di,ui,{provide:sr,useExisting:hi},{provide:xe,useClass:ia},[]];var Qe=class{},Pt=class{},Ie=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(i){i?typeof i=="string"?this.lazyInit=()=>{this.headers=new Map,i.split(`
`).forEach(e=>{let n=e.indexOf(":");if(n>0){let r=e.slice(0,n),o=e.slice(n+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&i instanceof Headers?(this.headers=new Map,i.forEach((e,n)=>{this.addHeaderEntry(n,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(i).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=new Map}has(i){return this.init(),this.headers.has(i.toLowerCase())}get(i){this.init();let e=this.headers.get(i.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(i){return this.init(),this.headers.get(i.toLowerCase())||null}append(i,e){return this.clone({name:i,value:e,op:"a"})}set(i,e){return this.clone({name:i,value:e,op:"s"})}delete(i,e){return this.clone({name:i,value:e,op:"d"})}maybeSetNormalizedName(i,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,i)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(i=>this.applyUpdate(i)),this.lazyUpdate=null))}copyFrom(i){i.init(),Array.from(i.headers.keys()).forEach(e=>{this.headers.set(e,i.headers.get(e)),this.normalizedNames.set(e,i.normalizedNames.get(e))})}clone(i){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([i]),e}applyUpdate(i){let e=i.name.toLowerCase();switch(i.op){case"a":case"s":let n=i.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(i.name,e);let r=(i.op==="a"?this.headers.get(e):void 0)||[];r.push(...n),this.headers.set(e,r);break;case"d":let o=i.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let s=this.headers.get(e);if(!s)return;s=s.filter(a=>o.indexOf(a)===-1),s.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,s)}break}}addHeaderEntry(i,e){let n=i.toLowerCase();this.maybeSetNormalizedName(i,n),this.headers.has(n)?this.headers.get(n).push(e):this.headers.set(n,[e])}setHeaderEntries(i,e){let n=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=i.toLowerCase();this.headers.set(r,n),this.maybeSetNormalizedName(i,r)}forEach(i){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>i(this.normalizedNames.get(e),this.headers.get(e)))}};var _n=class{encodeKey(i){return to(i)}encodeValue(i){return to(i)}decodeKey(i){return decodeURIComponent(i)}decodeValue(i){return decodeURIComponent(i)}};function ha(t,i){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[s,a]=o==-1?[i.decodeKey(r),""]:[i.decodeKey(r.slice(0,o)),i.decodeValue(r.slice(o+1))],l=e.get(s)||[];l.push(a),e.set(s,l)}),e}var fa=/%(\d[a-f0-9])/gi,ga={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function to(t){return encodeURIComponent(t).replace(fa,(i,e)=>ga[e]??i)}function Cn(t){return`${t}`}var Ee=class t{map;encoder;updates=null;cloneFrom=null;constructor(i={}){if(this.encoder=i.encoder||new _n,i.fromString){if(i.fromObject)throw new M(2805,!1);this.map=ha(i.fromString,this.encoder)}else i.fromObject?(this.map=new Map,Object.keys(i.fromObject).forEach(e=>{let n=i.fromObject[e],r=Array.isArray(n)?n.map(Cn):[Cn(n)];this.map.set(e,r)})):this.map=null}has(i){return this.init(),this.map.has(i)}get(i){this.init();let e=this.map.get(i);return e?e[0]:null}getAll(i){return this.init(),this.map.get(i)||null}keys(){return this.init(),Array.from(this.map.keys())}append(i,e){return this.clone({param:i,value:e,op:"a"})}appendAll(i){let e=[];return Object.keys(i).forEach(n=>{let r=i[n];Array.isArray(r)?r.forEach(o=>{e.push({param:n,value:o,op:"a"})}):e.push({param:n,value:r,op:"a"})}),this.clone(e)}set(i,e){return this.clone({param:i,value:e,op:"s"})}delete(i,e){return this.clone({param:i,value:e,op:"d"})}toString(){return this.init(),this.keys().map(i=>{let e=this.encoder.encodeKey(i);return this.map.get(i).map(n=>e+"="+this.encoder.encodeValue(n)).join("&")}).filter(i=>i!=="").join("&")}clone(i){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(i),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(i=>this.map.set(i,this.cloneFrom.map.get(i))),this.updates.forEach(i=>{switch(i.op){case"a":case"s":let e=(i.op==="a"?this.map.get(i.param):void 0)||[];e.push(Cn(i.value)),this.map.set(i.param,e);break;case"d":if(i.value!==void 0){let n=this.map.get(i.param)||[],r=n.indexOf(Cn(i.value));r!==-1&&n.splice(r,1),n.length>0?this.map.set(i.param,n):this.map.delete(i.param)}else{this.map.delete(i.param);break}}}),this.cloneFrom=this.updates=null)}};var Tn=class{map=new Map;set(i,e){return this.map.set(i,e),this}get(i){return this.map.has(i)||this.map.set(i,i.defaultValue()),this.map.get(i)}delete(i){return this.map.delete(i),this}has(i){return this.map.has(i)}keys(){return this.map.keys()}};function ma(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function no(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function io(t){return typeof Blob<"u"&&t instanceof Blob}function ro(t){return typeof FormData<"u"&&t instanceof FormData}function ba(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var oo="Content-Type",so="Accept",lo="X-Request-URL",co="text/plain",uo="application/json",ya=`${uo}, ${co}, */*`,Je=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;responseType="json";method;params;urlWithParams;transferCache;constructor(i,e,n,r){this.url=e,this.method=i.toUpperCase();let o;if(ma(this.method)||r?(this.body=n!==void 0?n:null,o=r):o=n,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),this.transferCache=o.transferCache),this.headers??=new Ie,this.context??=new Tn,!this.params)this.params=new Ee,this.urlWithParams=e;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=e;else{let a=e.indexOf("?"),l=a===-1?"?":a<e.length-1?"&":"";this.urlWithParams=e+l+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||no(this.body)||io(this.body)||ro(this.body)||ba(this.body)?this.body:this.body instanceof Ee?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||ro(this.body)?null:io(this.body)?this.body.type||null:no(this.body)?null:typeof this.body=="string"?co:this.body instanceof Ee?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?uo:null}clone(i={}){let e=i.method||this.method,n=i.url||this.url,r=i.responseType||this.responseType,o=i.transferCache??this.transferCache,s=i.body!==void 0?i.body:this.body,a=i.withCredentials??this.withCredentials,l=i.reportProgress??this.reportProgress,c=i.headers||this.headers,u=i.params||this.params,d=i.context??this.context;return i.setHeaders!==void 0&&(c=Object.keys(i.setHeaders).reduce((p,h)=>p.set(h,i.setHeaders[h]),c)),i.setParams&&(u=Object.keys(i.setParams).reduce((p,h)=>p.set(h,i.setParams[h]),u)),new t(e,n,s,{params:u,headers:c,context:d,reportProgress:l,responseType:r,withCredentials:a,transferCache:o})}},$e=function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t}($e||{}),et=class{headers;status;statusText;url;ok;type;constructor(i,e=200,n="OK"){this.headers=i.headers||new Ie,this.status=i.status!==void 0?i.status:e,this.statusText=i.statusText||n,this.url=i.url||null,this.ok=this.status>=200&&this.status<300}},An=class t extends et{constructor(i={}){super(i)}type=$e.ResponseHeader;clone(i={}){return new t({headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},xt=class t extends et{body;constructor(i={}){super(i),this.body=i.body!==void 0?i.body:null}type=$e.Response;clone(i={}){return new t({body:i.body!==void 0?i.body:this.body,headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},kt=class extends et{name="HttpErrorResponse";message;error;ok=!1;constructor(i){super(i,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${i.url||"(unknown url)"}`:this.message=`Http failure response for ${i.url||"(unknown url)"}: ${i.status} ${i.statusText}`,this.error=i.error||null}},Da=200,va=204;function fi(t,i){return{body:i,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,transferCache:t.transferCache}}var po=(()=>{class t{handler;constructor(e){this.handler=e}request(e,n,r={}){let o;if(e instanceof Je)o=e;else{let l;r.headers instanceof Ie?l=r.headers:l=new Ie(r.headers);let c;r.params&&(r.params instanceof Ee?c=r.params:c=new Ee({fromObject:r.params})),o=new Je(e,n,r.body!==void 0?r.body:null,{headers:l,context:r.context,params:c,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache})}let s=$n(o).pipe(Wi(l=>this.handler.handle(l)));if(e instanceof Je||r.observe==="events")return s;let a=s.pipe(dt(l=>l instanceof xt));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return a.pipe(Ce(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new M(2806,!1);return l.body}));case"blob":return a.pipe(Ce(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new M(2807,!1);return l.body}));case"text":return a.pipe(Ce(l=>{if(l.body!==null&&typeof l.body!="string")throw new M(2808,!1);return l.body}));case"json":default:return a.pipe(Ce(l=>l.body))}case"response":return a;default:throw new M(2809,!1)}}delete(e,n={}){return this.request("DELETE",e,n)}get(e,n={}){return this.request("GET",e,n)}head(e,n={}){return this.request("HEAD",e,n)}jsonp(e,n){return this.request("JSONP",e,{params:new Ee().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,n={}){return this.request("OPTIONS",e,n)}patch(e,n,r={}){return this.request("PATCH",e,fi(r,n))}post(e,n,r={}){return this.request("POST",e,fi(r,n))}put(e,n,r={}){return this.request("PUT",e,fi(r,n))}static \u0275fac=function(n){return new(n||t)(D(Qe))};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})();var Ea=new S("");function ho(t,i){return i(t)}function Sa(t,i){return(e,n)=>i.intercept(e,{handle:r=>t(r,n)})}function wa(t,i,e){return(n,r)=>Yi(e,()=>i(n,o=>t(o,r)))}var fo=new S(""),mi=new S(""),go=new S(""),bi=new S("",{providedIn:"root",factory:()=>!0});function Ca(){let t=null;return(i,e)=>{t===null&&(t=(f(fo,{optional:!0})??[]).reduceRight(Sa,ho));let n=f(jn);if(f(bi)){let o=n.add();return t(i,e).pipe(Bn(()=>n.remove(o)))}else return t(i,e)}}var In=(()=>{class t extends Qe{backend;injector;chain=null;pendingTasks=f(jn);contributeToStability=f(bi);constructor(e,n){super(),this.backend=e,this.injector=n}handle(e){if(this.chain===null){let n=Array.from(new Set([...this.injector.get(mi),...this.injector.get(go,[])]));this.chain=n.reduceRight((r,o)=>wa(r,o,this.injector),ho)}if(this.contributeToStability){let n=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(Bn(()=>this.pendingTasks.remove(n)))}else return this.chain(e,n=>this.backend.handle(n))}static \u0275fac=function(n){return new(n||t)(D(Pt),D(Ki))};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})();var _a=/^\)\]\}',?\n/,Ta=RegExp(`^${lo}:`,"m");function Aa(t){return"responseURL"in t&&t.responseURL?t.responseURL:Ta.test(t.getAllResponseHeaders())?t.getResponseHeader(lo):null}var gi=(()=>{class t{xhrFactory;constructor(e){this.xhrFactory=e}handle(e){if(e.method==="JSONP")throw new M(-2800,!1);let n=this.xhrFactory;return(n.\u0275loadImpl?ut(n.\u0275loadImpl()):$n(null)).pipe(pt(()=>new Ui(o=>{let s=n.build();if(s.open(e.method,e.urlWithParams),e.withCredentials&&(s.withCredentials=!0),e.headers.forEach((g,y)=>s.setRequestHeader(g,y.join(","))),e.headers.has(so)||s.setRequestHeader(so,ya),!e.headers.has(oo)){let g=e.detectContentTypeHeader();g!==null&&s.setRequestHeader(oo,g)}if(e.responseType){let g=e.responseType.toLowerCase();s.responseType=g!=="json"?g:"text"}let a=e.serializeBody(),l=null,c=()=>{if(l!==null)return l;let g=s.statusText||"OK",y=new Ie(s.getAllResponseHeaders()),O=Aa(s)||e.url;return l=new An({headers:y,status:s.status,statusText:g,url:O}),l},u=()=>{let{headers:g,status:y,statusText:O,url:L}=c(),A=null;y!==va&&(A=typeof s.response>"u"?s.responseText:s.response),y===0&&(y=A?Da:0);let V=y>=200&&y<300;if(e.responseType==="json"&&typeof A=="string"){let je=A;A=A.replace(_a,"");try{A=A!==""?JSON.parse(A):null}catch(He){A=je,V&&(V=!1,A={error:He,text:A})}}V?(o.next(new xt({body:A,headers:g,status:y,statusText:O,url:L||void 0})),o.complete()):o.error(new kt({error:A,headers:g,status:y,statusText:O,url:L||void 0}))},d=g=>{let{url:y}=c(),O=new kt({error:g,status:s.status||0,statusText:s.statusText||"Unknown Error",url:y||void 0});o.error(O)},p=!1,h=g=>{p||(o.next(c()),p=!0);let y={type:$e.DownloadProgress,loaded:g.loaded};g.lengthComputable&&(y.total=g.total),e.responseType==="text"&&s.responseText&&(y.partialText=s.responseText),o.next(y)},b=g=>{let y={type:$e.UploadProgress,loaded:g.loaded};g.lengthComputable&&(y.total=g.total),o.next(y)};return s.addEventListener("load",u),s.addEventListener("error",d),s.addEventListener("timeout",d),s.addEventListener("abort",d),e.reportProgress&&(s.addEventListener("progress",h),a!==null&&s.upload&&s.upload.addEventListener("progress",b)),s.send(a),o.next({type:$e.Sent}),()=>{s.removeEventListener("error",d),s.removeEventListener("abort",d),s.removeEventListener("load",u),s.removeEventListener("timeout",d),e.reportProgress&&(s.removeEventListener("progress",h),a!==null&&s.upload&&s.upload.removeEventListener("progress",b)),s.readyState!==s.DONE&&s.abort()}})))}static \u0275fac=function(n){return new(n||t)(D(xe))};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})(),mo=new S(""),Ia="XSRF-TOKEN",Oa=new S("",{providedIn:"root",factory:()=>Ia}),Ra="X-XSRF-TOKEN",Fa=new S("",{providedIn:"root",factory:()=>Ra}),$t=class{},La=(()=>{class t{doc;platform;cookieName;lastCookieString="";lastToken=null;parseCount=0;constructor(e,n,r){this.doc=e,this.platform=n,this.cookieName=r}getToken(){if(this.platform==="server")return null;let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Rt(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(n){return new(n||t)(D(E),D(j),D(Oa))};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})();function Ma(t,i){let e=t.url.toLowerCase();if(!f(mo)||t.method==="GET"||t.method==="HEAD"||e.startsWith("http://")||e.startsWith("https://"))return i(t);let n=f($t).getToken(),r=f(Fa);return n!=null&&!t.headers.has(r)&&(t=t.clone({headers:t.headers.set(r,n)})),i(t)}var yi=function(t){return t[t.Interceptors=0]="Interceptors",t[t.LegacyInterceptors=1]="LegacyInterceptors",t[t.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",t[t.NoXsrfProtection=3]="NoXsrfProtection",t[t.JsonpSupport=4]="JsonpSupport",t[t.RequestsMadeViaParent=5]="RequestsMadeViaParent",t[t.Fetch=6]="Fetch",t}(yi||{});function Na(t,i){return{\u0275kind:t,\u0275providers:i}}function Pa(...t){let i=[po,gi,In,{provide:Qe,useExisting:In},{provide:Pt,useFactory:()=>f(Ea,{optional:!0})??f(gi)},{provide:mi,useValue:Ma,multi:!0},{provide:mo,useValue:!0},{provide:$t,useClass:La}];for(let e of t)i.push(...e.\u0275providers);return Ve(i)}var ao=new S("");function xa(){return Na(yi.LegacyInterceptors,[{provide:ao,useFactory:Ca},{provide:mi,useExisting:ao,multi:!0}])}var $d=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(n){return new(n||t)(D(E))};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Di=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:function(n){let r=null;return n?r=new(n||t):r=D(ka),r},providedIn:"root"})}return t})(),ka=(()=>{class t extends Di{_doc;constructor(e){super(),this._doc=e}sanitize(e,n){if(n==null)return null;switch(e){case ge.NONE:return n;case ge.HTML:return We(n,"HTML")?Fe(n):or(this._doc,String(n)).toString();case ge.STYLE:return We(n,"Style")?Fe(n):n;case ge.SCRIPT:if(We(n,"Script"))return Fe(n);throw new M(5200,!1);case ge.URL:return We(n,"URL")?Fe(n):rr(String(n));case ge.RESOURCE_URL:if(We(n,"ResourceURL"))return Fe(n);throw new M(5201,!1);default:throw new M(5202,!1)}}bypassSecurityTrustHtml(e){return Qi(e)}bypassSecurityTrustStyle(e){return er(e)}bypassSecurityTrustScript(e){return tr(e)}bypassSecurityTrustUrl(e){return nr(e)}bypassSecurityTrustResourceUrl(e){return ir(e)}static \u0275fac=function(n){return new(n||t)(D(E))};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function bo(t,i){return t?t.classList?t.classList.contains(i):new RegExp("(^| )"+i+"( |$)","gi").test(t.className):!1}function Bt(t,i){if(t&&i){let e=n=>{bo(t,n)||(t.classList?t.classList.add(n):t.className+=" "+n)};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function $a(){return window.innerWidth-document.documentElement.offsetWidth}function tt(t){for(let i of document?.styleSheets)try{for(let e of i?.cssRules)for(let n of e?.style)if(t.test(n))return{name:n,value:e.style.getPropertyValue(n).trim()}}catch{}return null}function Hd(t="p-overflow-hidden"){let i=tt(/-scrollbar-width$/);i?.name&&document.body.style.setProperty(i.name,$a()+"px"),Bt(document.body,t)}function Be(t,i){if(t&&i){let e=n=>{t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function zd(t="p-overflow-hidden"){let i=tt(/-scrollbar-width$/);i?.name&&document.body.style.removeProperty(i.name),Be(document.body,t)}function yo(t){let i={width:0,height:0};return t&&(t.style.visibility="hidden",t.style.display="block",i.width=t.offsetWidth,i.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible"),i}function Do(){let t=window,i=document,e=i.documentElement,n=i.getElementsByTagName("body")[0],r=t.innerWidth||e.clientWidth||n.clientWidth,o=t.innerHeight||e.clientHeight||n.clientHeight;return{width:r,height:o}}function Ba(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}function Ua(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}function Vd(t,i,e=!0){var n,r,o,s;if(t){let a=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:yo(t),l=a.height,c=a.width,u=i.offsetHeight,d=i.offsetWidth,p=i.getBoundingClientRect(),h=Ua(),b=Ba(),g=Do(),y,O,L="top";p.top+u+l>g.height?(y=p.top+h-l,L="bottom",y<0&&(y=h)):y=u+p.top+h,p.left+c>g.width?O=Math.max(0,p.left+b+d-c):O=p.left+b,t.style.top=y+"px",t.style.left=O+"px",t.style.transformOrigin=L,e&&(t.style.marginTop=L==="bottom"?`calc(${(r=(n=tt(/-anchor-gutter$/))==null?void 0:n.value)!=null?r:"2px"} * -1)`:(s=(o=tt(/-anchor-gutter$/))==null?void 0:o.value)!=null?s:"")}}function ja(t,i){t&&(typeof i=="string"?t.style.cssText=i:Object.entries(i||{}).forEach(([e,n])=>t.style[e]=n))}function vo(t,i){if(t instanceof HTMLElement){let e=t.offsetWidth;if(i){let n=getComputedStyle(t);e+=parseFloat(n.marginLeft)+parseFloat(n.marginRight)}return e}return 0}function Wd(t,i,e=!0){var n,r,o,s;if(t){let a=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:yo(t),l=i.offsetHeight,c=i.getBoundingClientRect(),u=Do(),d,p,h="top";c.top+l+a.height>u.height?(d=-1*a.height,h="bottom",c.top+d<0&&(d=-1*c.top)):d=l,a.width>u.width?p=c.left*-1:c.left+a.width>u.width?p=(c.left+a.width-u.width)*-1:p=0,t.style.top=d+"px",t.style.left=p+"px",t.style.transformOrigin=h,e&&(t.style.marginTop=h==="bottom"?`calc(${(r=(n=tt(/-anchor-gutter$/))==null?void 0:n.value)!=null?r:"2px"} * -1)`:(s=(o=tt(/-anchor-gutter$/))==null?void 0:o.value)!=null?s:"")}}function nt(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}function Ei(t){let i=t;return t&&typeof t=="object"&&(t.hasOwnProperty("current")?i=t.current:t.hasOwnProperty("el")&&(t.el.hasOwnProperty("nativeElement")?i=t.el.nativeElement:i=t.el)),nt(i)?i:void 0}function Gd(t,i){let e=Ei(t);if(e)e.appendChild(i);else throw new Error("Cannot append "+i+" to "+t)}var vi=void 0;function Kd(t){if(t){let i=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(i.borderLeftWidth)-parseFloat(i.borderRightWidth)}else{if(vi!=null)return vi;let i=document.createElement("div");ja(i,{width:"100px",height:"100px",overflow:"scroll",position:"absolute",top:"-9999px"}),document.body.appendChild(i);let e=i.offsetWidth-i.clientWidth;return document.body.removeChild(i),vi=e,e}}function Si(t,i={}){if(nt(t)){let e=(n,r)=>{var o,s;let a=(o=t?.$attrs)!=null&&o[n]?[(s=t?.$attrs)==null?void 0:s[n]]:[];return[r].flat().reduce((l,c)=>{if(c!=null){let u=typeof c;if(u==="string"||u==="number")l.push(c);else if(u==="object"){let d=Array.isArray(c)?e(n,c):Object.entries(c).map(([p,h])=>n==="style"&&(h||h===0)?`${p.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${h}`:h?p:void 0);l=d.length?l.concat(d.filter(p=>!!p)):l}}return l},a)};Object.entries(i).forEach(([n,r])=>{if(r!=null){let o=n.match(/^on(.+)/);o?t.addEventListener(o[1].toLowerCase(),r):n==="p-bind"||n==="pBind"?Si(t,r):(r=n==="class"?[...new Set(e("class",r))].join(" ").trim():n==="style"?e("style",r).join(";").trim():r,(t.$attrs=t.$attrs||{})&&(t.$attrs[n]=r),t.setAttribute(n,r))}})}}function Yd(t,i){if(t){t.style.opacity="0";let e=+new Date,n="0",r=function(){n=`${+t.style.opacity+(new Date().getTime()-e)/i}`,t.style.opacity=n,e=+new Date,+n<1&&(window.requestAnimationFrame&&requestAnimationFrame(r)||setTimeout(r,16))};r()}}function Ha(t,i){return nt(t)?Array.from(t.querySelectorAll(i)):[]}function za(t,i){return nt(t)?t.matches(i)?t:t.querySelector(i):null}function Zd(t,i){t&&document.activeElement!==t&&t.focus(i)}function qd(t,i){if(nt(t)){let e=t.getAttribute(i);return isNaN(e)?e==="true"||e==="false"?e==="true":e:+e}}function Eo(t,i=""){let e=Ha(t,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i}`),n=[];for(let r of e)getComputedStyle(r).display!="none"&&getComputedStyle(r).visibility!="hidden"&&n.push(r);return n}function Xd(t,i){let e=Eo(t,i);return e.length>0?e[0]:null}function wi(t){if(t){let i=t.offsetHeight,e=getComputedStyle(t);return i-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),i}return 0}function Jd(t){if(t){t.style.visibility="hidden",t.style.display="block";let i=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",i}return 0}function Qd(t){if(t){t.style.visibility="hidden",t.style.display="block";let i=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",i}return 0}function So(t){if(t){let i=t.parentNode;return i&&i instanceof ShadowRoot&&i.host&&(i=i.host),i}return null}function ep(t){var i;if(t){let e=(i=So(t))==null?void 0:i.childNodes,n=0;if(e)for(let r=0;r<e.length;r++){if(e[r]===t)return n;e[r].nodeType===1&&n++}}return-1}function tp(t,i){let e=Eo(t,i);return e.length>0?e[e.length-1]:null}function wo(t){if(t){let i=t.getBoundingClientRect();return{top:i.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:i.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}function Ci(t,i){if(t){let e=t.offsetHeight;if(i){let n=getComputedStyle(t);e+=parseFloat(n.marginTop)+parseFloat(n.marginBottom)}return e}return 0}function np(){if(window.getSelection)return window.getSelection().toString();if(document.getSelection)return document.getSelection().toString()}function Va(t){return!!(t!==null&&typeof t<"u"&&t.nodeName&&So(t))}function ip(t,i){var e;if(t)switch(t){case"document":return document;case"window":return window;case"body":return document.body;case"@next":return i?.nextElementSibling;case"@prev":return i?.previousElementSibling;case"@parent":return i?.parentElement;case"@grandparent":return(e=i?.parentElement)==null?void 0:e.parentElement;default:if(typeof t=="string")return document.querySelector(t);let r=Ei((o=>!!(o&&o.constructor&&o.call&&o.apply))(t)?t():t);return r?.nodeType===9||Va(r)?r:void 0}}function _i(t){if(t){let i=t.offsetWidth,e=getComputedStyle(t);return i-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)+parseFloat(e.borderLeftWidth)+parseFloat(e.borderRightWidth),i}return 0}function rp(){return/(android)/i.test(navigator.userAgent)}function Wa(t){return!!(t&&t.offsetParent!=null)}function op(t){return!Wa(t)}function sp(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}function ap(t){return t?getComputedStyle(t).direction==="rtl":!1}function lp(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function Co(t){var i;t&&("remove"in Element.prototype?t.remove():(i=t.parentNode)==null||i.removeChild(t))}function cp(t,i){let e=Ei(t);if(e)e.removeChild(i);else throw new Error("Cannot remove "+i+" from "+t)}function up(t,i){let e=getComputedStyle(t).getPropertyValue("borderTopWidth"),n=e?parseFloat(e):0,r=getComputedStyle(t).getPropertyValue("paddingTop"),o=r?parseFloat(r):0,s=t.getBoundingClientRect(),l=i.getBoundingClientRect().top+document.body.scrollTop-(s.top+document.body.scrollTop)-n-o,c=t.scrollTop,u=t.clientHeight,d=Ci(i);l<0?t.scrollTop=c+l:l+d>u&&(t.scrollTop=c+l-u+d)}function _o(t,i="",e){nt(t)&&e!==null&&e!==void 0&&t.setAttribute(i,e)}function To(){let t=new Map;return{on(i,e){let n=t.get(i);return n?n.push(e):n=[e],t.set(i,n),this},off(i,e){let n=t.get(i);return n&&n.splice(n.indexOf(e)>>>0,1),this},emit(i,e){let n=t.get(i);n&&n.slice().map(r=>{r(e)})},clear(){t.clear()}}}var Ga=Object.defineProperty,Ao=Object.getOwnPropertySymbols,Ka=Object.prototype.hasOwnProperty,Ya=Object.prototype.propertyIsEnumerable,Io=(t,i,e)=>i in t?Ga(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,Za=(t,i)=>{for(var e in i||(i={}))Ka.call(i,e)&&Io(t,e,i[e]);if(Ao)for(var e of Ao(i))Ya.call(i,e)&&Io(t,e,i[e]);return t};function re(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function Ti(t,i,e=new WeakSet){if(t===i)return!0;if(!t||!i||typeof t!="object"||typeof i!="object"||e.has(t)||e.has(i))return!1;e.add(t).add(i);let n=Array.isArray(t),r=Array.isArray(i),o,s,a;if(n&&r){if(s=t.length,s!=i.length)return!1;for(o=s;o--!==0;)if(!Ti(t[o],i[o],e))return!1;return!0}if(n!=r)return!1;let l=t instanceof Date,c=i instanceof Date;if(l!=c)return!1;if(l&&c)return t.getTime()==i.getTime();let u=t instanceof RegExp,d=i instanceof RegExp;if(u!=d)return!1;if(u&&d)return t.toString()==i.toString();let p=Object.keys(t);if(s=p.length,s!==Object.keys(i).length)return!1;for(o=s;o--!==0;)if(!Object.prototype.hasOwnProperty.call(i,p[o]))return!1;for(o=s;o--!==0;)if(a=p[o],!Ti(t[a],i[a],e))return!1;return!0}function qa(t,i){return Ti(t,i)}function Ro(t){return!!(t&&t.constructor&&t.call&&t.apply)}function C(t){return!re(t)}function On(t,i){if(!t||!i)return null;try{let e=t[i];if(C(e))return e}catch{}if(Object.keys(t).length){if(Ro(i))return i(t);if(i.indexOf(".")===-1)return t[i];{let e=i.split("."),n=t;for(let r=0,o=e.length;r<o;++r){if(n==null)return null;n=n[e[r]]}return n}}return null}function Ai(t,i,e){return e?On(t,e)===On(i,e):qa(t,i)}function fp(t,i){if(t!=null&&i&&i.length){for(let e of i)if(Ai(t,e))return!0}return!1}function gp(t,i){let e=-1;if(C(t))try{e=t.findLastIndex(i)}catch{e=t.lastIndexOf([...t].reverse().find(i))}return e}function ue(t,i=!0){return t instanceof Object&&t.constructor===Object&&(i||Object.keys(t).length!==0)}function ie(t,...i){return Ro(t)?t(...i):t}function Oe(t,i=!0){return typeof t=="string"&&(i||t!=="")}function Oo(t){return Oe(t)?t.replace(/(-|_)/g,"").toLowerCase():t}function Rn(t,i="",e={}){let n=Oo(i).split("."),r=n.shift();return r?ue(t)?Rn(ie(t[Object.keys(t).find(o=>Oo(o)===r)||""],e),n.join("."),e):void 0:ie(t,e)}function Fn(t,i=!0){return Array.isArray(t)&&(i||t.length!==0)}function mp(t){return t instanceof Date&&t.constructor===Date}function Fo(t){return C(t)&&!isNaN(t)}function bp(t=""){return C(t)&&t.length===1&&!!t.match(/\S| /)}function J(t,i){if(i){let e=i.test(t);return i.lastIndex=0,e}return!1}function Ut(...t){let i=(e={},n={})=>{let r=Za({},e);return Object.keys(n).forEach(o=>{ue(n[o])&&o in e&&ue(e[o])?r[o]=i(e[o],n[o]):r[o]=n[o]}),r};return t.reduce((e,n,r)=>r===0?n:i(e,n),{})}function Ue(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function Q(t){if(t&&/[\xC0-\xFF\u0100-\u017E]/.test(t)){let e={A:/[\xC0-\xC5\u0100\u0102\u0104]/g,AE:/[\xC6]/g,C:/[\xC7\u0106\u0108\u010A\u010C]/g,D:/[\xD0\u010E\u0110]/g,E:/[\xC8-\xCB\u0112\u0114\u0116\u0118\u011A]/g,G:/[\u011C\u011E\u0120\u0122]/g,H:/[\u0124\u0126]/g,I:/[\xCC-\xCF\u0128\u012A\u012C\u012E\u0130]/g,IJ:/[\u0132]/g,J:/[\u0134]/g,K:/[\u0136]/g,L:/[\u0139\u013B\u013D\u013F\u0141]/g,N:/[\xD1\u0143\u0145\u0147\u014A]/g,O:/[\xD2-\xD6\xD8\u014C\u014E\u0150]/g,OE:/[\u0152]/g,R:/[\u0154\u0156\u0158]/g,S:/[\u015A\u015C\u015E\u0160]/g,T:/[\u0162\u0164\u0166]/g,U:/[\xD9-\xDC\u0168\u016A\u016C\u016E\u0170\u0172]/g,W:/[\u0174]/g,Y:/[\xDD\u0176\u0178]/g,Z:/[\u0179\u017B\u017D]/g,a:/[\xE0-\xE5\u0101\u0103\u0105]/g,ae:/[\xE6]/g,c:/[\xE7\u0107\u0109\u010B\u010D]/g,d:/[\u010F\u0111]/g,e:/[\xE8-\xEB\u0113\u0115\u0117\u0119\u011B]/g,g:/[\u011D\u011F\u0121\u0123]/g,i:/[\xEC-\xEF\u0129\u012B\u012D\u012F\u0131]/g,ij:/[\u0133]/g,j:/[\u0135]/g,k:/[\u0137,\u0138]/g,l:/[\u013A\u013C\u013E\u0140\u0142]/g,n:/[\xF1\u0144\u0146\u0148\u014B]/g,p:/[\xFE]/g,o:/[\xF2-\xF6\xF8\u014D\u014F\u0151]/g,oe:/[\u0153]/g,r:/[\u0155\u0157\u0159]/g,s:/[\u015B\u015D\u015F\u0161]/g,t:/[\u0163\u0165\u0167]/g,u:/[\xF9-\xFC\u0169\u016B\u016D\u016F\u0171\u0173]/g,w:/[\u0175]/g,y:/[\xFD\xFF\u0177]/g,z:/[\u017A\u017C\u017E]/g};for(let n in e)t=t.replace(e[n],n)}return t}function Ln(t){return Oe(t)?t.replace(/(_)/g,"-").replace(/[A-Z]/g,(i,e)=>e===0?i:"-"+i.toLowerCase()).toLowerCase():t}function Ii(t){return Oe(t)?t.replace(/[A-Z]/g,(i,e)=>e===0?i:"."+i.toLowerCase()).toLowerCase():t}var Mn={};function jt(t="pui_id_"){return Mn.hasOwnProperty(t)||(Mn[t]=0),Mn[t]++,`${t}${Mn[t]}`}function Xa(){let t=[],i=(s,a,l=999)=>{let c=r(s,a,l),u=c.value+(c.key===s?0:l)+1;return t.push({key:s,value:u}),u},e=s=>{t=t.filter(a=>a.value!==s)},n=(s,a)=>r(s,a).value,r=(s,a,l=0)=>[...t].reverse().find(c=>a?!0:c.key===s)||{key:s,value:l},o=s=>s&&parseInt(s.style.zIndex,10)||0;return{get:o,set:(s,a,l)=>{a&&(a.style.zIndex=String(i(s,!0,l)))},clear:s=>{s&&(e(o(s)),s.style.zIndex="")},getCurrent:s=>n(s,!0)}}var vp=Xa();var Lo=["*"];var U=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return t})(),Mp=(()=>{class t{static AND="and";static OR="or"}return t})(),Np=(()=>{class t{filter(e,n,r,o,s){let a=[];if(e)for(let l of e)for(let c of n){let u=On(l,c);if(this.filters[o](u,r,s)){a.push(l);break}}return a}filters={startsWith:(e,n,r)=>{if(n==null||n.trim()==="")return!0;if(e==null)return!1;let o=Q(n.toString()).toLocaleLowerCase(r);return Q(e.toString()).toLocaleLowerCase(r).slice(0,o.length)===o},contains:(e,n,r)=>{if(n==null||typeof n=="string"&&n.trim()==="")return!0;if(e==null)return!1;let o=Q(n.toString()).toLocaleLowerCase(r);return Q(e.toString()).toLocaleLowerCase(r).indexOf(o)!==-1},notContains:(e,n,r)=>{if(n==null||typeof n=="string"&&n.trim()==="")return!0;if(e==null)return!1;let o=Q(n.toString()).toLocaleLowerCase(r);return Q(e.toString()).toLocaleLowerCase(r).indexOf(o)===-1},endsWith:(e,n,r)=>{if(n==null||n.trim()==="")return!0;if(e==null)return!1;let o=Q(n.toString()).toLocaleLowerCase(r),s=Q(e.toString()).toLocaleLowerCase(r);return s.indexOf(o,s.length-o.length)!==-1},equals:(e,n,r)=>n==null||typeof n=="string"&&n.trim()===""?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()===n.getTime():e==n?!0:Q(e.toString()).toLocaleLowerCase(r)==Q(n.toString()).toLocaleLowerCase(r),notEquals:(e,n,r)=>n==null||typeof n=="string"&&n.trim()===""?!1:e==null?!0:e.getTime&&n.getTime?e.getTime()!==n.getTime():e==n?!1:Q(e.toString()).toLocaleLowerCase(r)!=Q(n.toString()).toLocaleLowerCase(r),in:(e,n)=>{if(n==null||n.length===0)return!0;for(let r=0;r<n.length;r++)if(Ai(e,n[r]))return!0;return!1},between:(e,n)=>n==null||n[0]==null||n[1]==null?!0:e==null?!1:e.getTime?n[0].getTime()<=e.getTime()&&e.getTime()<=n[1].getTime():n[0]<=e&&e<=n[1],lt:(e,n,r)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()<n.getTime():e<n,lte:(e,n,r)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()<=n.getTime():e<=n,gt:(e,n,r)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()>n.getTime():e>n,gte:(e,n,r)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()>=n.getTime():e>=n,is:(e,n,r)=>this.filters.equals(e,n,r),isNot:(e,n,r)=>this.filters.notEquals(e,n,r),before:(e,n,r)=>this.filters.lt(e,n,r),after:(e,n,r)=>this.filters.gt(e,n,r),dateIs:(e,n)=>n==null?!0:e==null?!1:e.toDateString()===n.toDateString(),dateIsNot:(e,n)=>n==null?!0:e==null?!1:e.toDateString()!==n.toDateString(),dateBefore:(e,n)=>n==null?!0:e==null?!1:e.getTime()<n.getTime(),dateAfter:(e,n)=>n==null?!0:e==null?!1:(e.setHours(0,0,0,0),e.getTime()>n.getTime())};register(e,n){this.filters[e]=n}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Pp=(()=>{class t{messageSource=new we;clearSource=new we;messageObserver=this.messageSource.asObservable();clearObserver=this.clearSource.asObservable();add(e){e&&this.messageSource.next(e)}addAll(e){e&&e.length&&this.messageSource.next(e)}clear(e){this.clearSource.next(e||null)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})(),xp=(()=>{class t{clickSource=new we;clickObservable=this.clickSource.asObservable();add(e){e&&this.clickSource.next(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var kp=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=se({type:t,selectors:[["p-header"]],standalone:!1,ngContentSelectors:Lo,decls:1,vars:0,template:function(n,r){n&1&&(Ne(),Pe(0))},encapsulation:2})}return t})(),$p=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=se({type:t,selectors:[["p-footer"]],standalone:!1,ngContentSelectors:Lo,decls:1,vars:0,template:function(n,r){n&1&&(Ne(),Pe(0))},encapsulation:2})}return t})(),Mo=(()=>{class t{template;type;name;constructor(e){this.template=e}getType(){return this.name}static \u0275fac=function(n){return new(n||t)(k(gt))};static \u0275dir=R({type:t,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]}})}return t})(),Re=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=W({imports:[ve]})}return t})(),Bp=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static NO_FILTER="noFilter";static LT="lt";static LTE="lte";static GT="gt";static GTE="gte";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static CLEAR="clear";static APPLY="apply";static MATCH_ALL="matchAll";static MATCH_ANY="matchAny";static ADD_RULE="addRule";static REMOVE_RULE="removeRule";static ACCEPT="accept";static REJECT="reject";static CHOOSE="choose";static UPLOAD="upload";static CANCEL="cancel";static PENDING="pending";static FILE_SIZE_TYPES="fileSizeTypes";static DAY_NAMES="dayNames";static DAY_NAMES_SHORT="dayNamesShort";static DAY_NAMES_MIN="dayNamesMin";static MONTH_NAMES="monthNames";static MONTH_NAMES_SHORT="monthNamesShort";static FIRST_DAY_OF_WEEK="firstDayOfWeek";static TODAY="today";static WEEK_HEADER="weekHeader";static WEAK="weak";static MEDIUM="medium";static STRONG="strong";static PASSWORD_PROMPT="passwordPrompt";static EMPTY_MESSAGE="emptyMessage";static EMPTY_FILTER_MESSAGE="emptyFilterMessage";static SHOW_FILTER_MENU="showFilterMenu";static HIDE_FILTER_MENU="hideFilterMenu";static SELECTION_MESSAGE="selectionMessage";static ARIA="aria";static SELECT_COLOR="selectColor";static BROWSE_FILES="browseFiles"}return t})();var Ja=Object.defineProperty,Qa=Object.defineProperties,el=Object.getOwnPropertyDescriptors,Nn=Object.getOwnPropertySymbols,xo=Object.prototype.hasOwnProperty,ko=Object.prototype.propertyIsEnumerable,No=(t,i,e)=>i in t?Ja(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,pe=(t,i)=>{for(var e in i||(i={}))xo.call(i,e)&&No(t,e,i[e]);if(Nn)for(var e of Nn(i))ko.call(i,e)&&No(t,e,i[e]);return t},Oi=(t,i)=>Qa(t,el(i)),Se=(t,i)=>{var e={};for(var n in t)xo.call(t,n)&&i.indexOf(n)<0&&(e[n]=t[n]);if(t!=null&&Nn)for(var n of Nn(t))i.indexOf(n)<0&&ko.call(t,n)&&(e[n]=t[n]);return e};function Hp(...t){return Ut(...t)}var tl=To(),ee=tl;function Po(t,i){Fn(t)?t.push(...i||[]):ue(t)&&Object.assign(t,i)}function nl(t){return ue(t)&&t.hasOwnProperty("value")&&t.hasOwnProperty("type")?t.value:t}function il(t){return t.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function Ri(t="",i=""){return il(`${Oe(t,!1)&&Oe(i,!1)?`${t}-`:t}${i}`)}function $o(t="",i=""){return`--${Ri(t,i)}`}function rl(t=""){let i=(t.match(/{/g)||[]).length,e=(t.match(/}/g)||[]).length;return(i+e)%2!==0}function Bo(t,i="",e="",n=[],r){if(Oe(t)){let o=/{([^}]*)}/g,s=t.trim();if(rl(s))return;if(J(s,o)){let a=s.replaceAll(o,u=>{let p=u.replace(/{|}/g,"").split(".").filter(h=>!n.some(b=>J(h,b)));return`var(${$o(e,Ln(p.join("-")))}${C(r)?`, ${r}`:""})`}),l=/(\d+\s+[\+\-\*\/]\s+\d+)/g,c=/var\([^)]+\)/g;return J(a.replace(c,"0"),l)?`calc(${a})`:a}return s}else if(Fo(t))return t}function ol(t,i,e){Oe(i,!1)&&t.push(`${i}:${e};`)}function it(t,i){return t?`${t}{${i}}`:""}var rt=(...t)=>sl(_.getTheme(),...t),sl=(t={},i,e,n)=>{if(i){let{variable:r,options:o}=_.defaults||{},{prefix:s,transform:a}=t?.options||o||{},c=J(i,/{([^}]*)}/g)?i:`{${i}}`;return n==="value"||re(n)&&a==="strict"?_.getTokenValue(i):Bo(c,void 0,s,[r.excludedKeyRegex],e)}return""};function al(t,i={}){let e=_.defaults.variable,{prefix:n=e.prefix,selector:r=e.selector,excludedKeyRegex:o=e.excludedKeyRegex}=i,s=(c,u="")=>Object.entries(c).reduce((d,[p,h])=>{let b=J(p,o)?Ri(u):Ri(u,Ln(p)),g=nl(h);if(ue(g)){let{variables:y,tokens:O}=s(g,b);Po(d.tokens,O),Po(d.variables,y)}else d.tokens.push((n?b.replace(`${n}-`,""):b).replaceAll("-",".")),ol(d.variables,$o(b),Bo(g,b,n,[o]));return d},{variables:[],tokens:[]}),{variables:a,tokens:l}=s(t,n);return{value:a,tokens:l,declarations:a.join(""),css:it(r,a.join(""))}}var de={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(t){return{type:"class",selector:t,matched:this.pattern.test(t.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(t){return{type:"attr",selector:`:root${t}`,matched:this.pattern.test(t.trim())}}},media:{pattern:/^@media (.*)$/,resolve(t){return{type:"media",selector:`${t}{:root{[CSS]}}`,matched:this.pattern.test(t.trim())}}},system:{pattern:/^system$/,resolve(t){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(t.trim())}}},custom:{resolve(t){return{type:"custom",selector:t,matched:!0}}}},resolve(t){let i=Object.keys(this.rules).filter(e=>e!=="custom").map(e=>this.rules[e]);return[t].flat().map(e=>{var n;return(n=i.map(r=>r.resolve(e)).find(r=>r.matched))!=null?n:this.rules.custom.resolve(e)})}},_toVariables(t,i){return al(t,{prefix:i?.prefix})},getCommon({name:t="",theme:i={},params:e,set:n,defaults:r}){var o,s,a,l,c,u,d;let{preset:p,options:h}=i,b,g,y,O,L,A,V;if(C(p)&&h.transform!=="strict"){let{primitive:je,semantic:He,extend:Ht}=p,at=He||{},{colorScheme:zt}=at,Vt=Se(at,["colorScheme"]),Wt=Ht||{},{colorScheme:Gt}=Wt,lt=Se(Wt,["colorScheme"]),ct=zt||{},{dark:Kt}=ct,Yt=Se(ct,["dark"]),Zt=Gt||{},{dark:qt}=Zt,Xt=Se(Zt,["dark"]),Jt=C(je)?this._toVariables({primitive:je},h):{},Qt=C(Vt)?this._toVariables({semantic:Vt},h):{},en=C(Yt)?this._toVariables({light:Yt},h):{},xi=C(Kt)?this._toVariables({dark:Kt},h):{},ki=C(lt)?this._toVariables({semantic:lt},h):{},$i=C(Xt)?this._toVariables({light:Xt},h):{},Bi=C(qt)?this._toVariables({dark:qt},h):{},[ts,ns]=[(o=Jt.declarations)!=null?o:"",Jt.tokens],[is,rs]=[(s=Qt.declarations)!=null?s:"",Qt.tokens||[]],[os,ss]=[(a=en.declarations)!=null?a:"",en.tokens||[]],[as,ls]=[(l=xi.declarations)!=null?l:"",xi.tokens||[]],[cs,us]=[(c=ki.declarations)!=null?c:"",ki.tokens||[]],[ds,ps]=[(u=$i.declarations)!=null?u:"",$i.tokens||[]],[hs,fs]=[(d=Bi.declarations)!=null?d:"",Bi.tokens||[]];b=this.transformCSS(t,ts,"light","variable",h,n,r),g=ns;let gs=this.transformCSS(t,`${is}${os}`,"light","variable",h,n,r),ms=this.transformCSS(t,`${as}`,"dark","variable",h,n,r);y=`${gs}${ms}`,O=[...new Set([...rs,...ss,...ls])];let bs=this.transformCSS(t,`${cs}${ds}color-scheme:light`,"light","variable",h,n,r),ys=this.transformCSS(t,`${hs}color-scheme:dark`,"dark","variable",h,n,r);L=`${bs}${ys}`,A=[...new Set([...us,...ps,...fs])],V=ie(p.css,{dt:rt})}return{primitive:{css:b,tokens:g},semantic:{css:y,tokens:O},global:{css:L,tokens:A},style:V}},getPreset({name:t="",preset:i={},options:e,params:n,set:r,defaults:o,selector:s}){var a,l,c;let u,d,p;if(C(i)&&e.transform!=="strict"){let h=t.replace("-directive",""),b=i,{colorScheme:g,extend:y,css:O}=b,L=Se(b,["colorScheme","extend","css"]),A=y||{},{colorScheme:V}=A,je=Se(A,["colorScheme"]),He=g||{},{dark:Ht}=He,at=Se(He,["dark"]),zt=V||{},{dark:Vt}=zt,Wt=Se(zt,["dark"]),Gt=C(L)?this._toVariables({[h]:pe(pe({},L),je)},e):{},lt=C(at)?this._toVariables({[h]:pe(pe({},at),Wt)},e):{},ct=C(Ht)?this._toVariables({[h]:pe(pe({},Ht),Vt)},e):{},[Kt,Yt]=[(a=Gt.declarations)!=null?a:"",Gt.tokens||[]],[Zt,qt]=[(l=lt.declarations)!=null?l:"",lt.tokens||[]],[Xt,Jt]=[(c=ct.declarations)!=null?c:"",ct.tokens||[]],Qt=this.transformCSS(h,`${Kt}${Zt}`,"light","variable",e,r,o,s),en=this.transformCSS(h,Xt,"dark","variable",e,r,o,s);u=`${Qt}${en}`,d=[...new Set([...Yt,...qt,...Jt])],p=ie(O,{dt:rt})}return{css:u,tokens:d,style:p}},getPresetC({name:t="",theme:i={},params:e,set:n,defaults:r}){var o;let{preset:s,options:a}=i,l=(o=s?.components)==null?void 0:o[t];return this.getPreset({name:t,preset:l,options:a,params:e,set:n,defaults:r})},getPresetD({name:t="",theme:i={},params:e,set:n,defaults:r}){var o;let s=t.replace("-directive",""),{preset:a,options:l}=i,c=(o=a?.directives)==null?void 0:o[s];return this.getPreset({name:s,preset:c,options:l,params:e,set:n,defaults:r})},applyDarkColorScheme(t){return!(t.darkModeSelector==="none"||t.darkModeSelector===!1)},getColorSchemeOption(t,i){var e;return this.applyDarkColorScheme(t)?this.regex.resolve(t.darkModeSelector===!0?i.options.darkModeSelector:(e=t.darkModeSelector)!=null?e:i.options.darkModeSelector):[]},getLayerOrder(t,i={},e,n){let{cssLayer:r}=i;return r?`@layer ${ie(r.order||"primeui",e)}`:""},getCommonStyleSheet({name:t="",theme:i={},params:e,props:n={},set:r,defaults:o}){let s=this.getCommon({name:t,theme:i,params:e,set:r,defaults:o}),a=Object.entries(n).reduce((l,[c,u])=>l.push(`${c}="${u}"`)&&l,[]).join(" ");return Object.entries(s||{}).reduce((l,[c,u])=>{if(u?.css){let d=Ue(u?.css),p=`${c}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${p}" ${a}>${d}</style>`)}return l},[]).join("")},getStyleSheet({name:t="",theme:i={},params:e,props:n={},set:r,defaults:o}){var s;let a={name:t,theme:i,params:e,set:r,defaults:o},l=(s=t.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:s.css,c=Object.entries(n).reduce((u,[d,p])=>u.push(`${d}="${p}"`)&&u,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${t}-variables" ${c}>${Ue(l)}</style>`:""},createTokens(t={},i,e="",n="",r={}){return Object.entries(t).forEach(([o,s])=>{let a=J(o,i.variable.excludedKeyRegex)?e:e?`${e}.${Ii(o)}`:Ii(o),l=n?`${n}.${o}`:o;ue(s)?this.createTokens(s,i,a,l,r):(r[a]||(r[a]={paths:[],computed(c,u={}){var d,p;return this.paths.length===1?(d=this.paths[0])==null?void 0:d.computed(this.paths[0].scheme,u.binding):c&&c!=="none"?(p=this.paths.find(h=>h.scheme===c))==null?void 0:p.computed(c,u.binding):this.paths.map(h=>h.computed(h.scheme,u[h.scheme]))}}),r[a].paths.push({path:l,value:s,scheme:l.includes("colorScheme.light")?"light":l.includes("colorScheme.dark")?"dark":"none",computed(c,u={}){let d=/{([^}]*)}/g,p=s;if(u.name=this.path,u.binding||(u.binding={}),J(s,d)){let b=s.trim().replaceAll(d,O=>{var L;let A=O.replace(/{|}/g,""),V=(L=r[A])==null?void 0:L.computed(c,u);return Fn(V)&&V.length===2?`light-dark(${V[0].value},${V[1].value})`:V?.value}),g=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,y=/var\([^)]+\)/g;p=J(b.replace(y,"0"),g)?`calc(${b})`:b}return re(u.binding)&&delete u.binding,{colorScheme:c,path:this.path,paths:u,value:p.includes("undefined")?void 0:p}}}))}),r},getTokenValue(t,i,e){var n;let o=(l=>l.split(".").filter(u=>!J(u.toLowerCase(),e.variable.excludedKeyRegex)).join("."))(i),s=i.includes("colorScheme.light")?"light":i.includes("colorScheme.dark")?"dark":void 0,a=[(n=t[o])==null?void 0:n.computed(s)].flat().filter(l=>l);return a.length===1?a[0].value:a.reduce((l={},c)=>{let u=c,{colorScheme:d}=u,p=Se(u,["colorScheme"]);return l[d]=p,l},void 0)},getSelectorRule(t,i,e,n){return e==="class"||e==="attr"?it(C(i)?`${t}${i},${t} ${i}`:t,n):it(t,C(i)?it(i,n):n)},transformCSS(t,i,e,n,r={},o,s,a){if(C(i)){let{cssLayer:l}=r;if(n!=="style"){let c=this.getColorSchemeOption(r,s);i=e==="dark"?c.reduce((u,{type:d,selector:p})=>(C(p)&&(u+=p.includes("[CSS]")?p.replace("[CSS]",i):this.getSelectorRule(p,a,d,i)),u),""):it(a??":root",i)}if(l){let c={name:"primeui",order:"primeui"};ue(l)&&(c.name=ie(l.name,{name:t,type:n})),C(c.name)&&(i=it(`@layer ${c.name}`,i),o?.layerNames(c.name))}return i}return""}},_={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(t={}){let{theme:i}=t;i&&(this._theme=Oi(pe({},i),{options:pe(pe({},this.defaults.options),i.options)}),this._tokens=de.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var t;return((t=this.theme)==null?void 0:t.preset)||{}},get options(){var t;return((t=this.theme)==null?void 0:t.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(t){this.update({theme:t}),ee.emit("theme:change",t)},getPreset(){return this.preset},setPreset(t){this._theme=Oi(pe({},this.theme),{preset:t}),this._tokens=de.createTokens(t,this.defaults),this.clearLoadedStyleNames(),ee.emit("preset:change",t),ee.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(t){this._theme=Oi(pe({},this.theme),{options:t}),this.clearLoadedStyleNames(),ee.emit("options:change",t),ee.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(t){this._layerNames.add(t)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(t){return de.getTokenValue(this.tokens,t,this.defaults)},getCommon(t="",i){return de.getCommon({name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(t="",i){let e={name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return de.getPresetC(e)},getDirective(t="",i){let e={name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return de.getPresetD(e)},getCustomPreset(t="",i,e,n){let r={name:t,preset:i,options:this.options,selector:e,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return de.getPreset(r)},getLayerOrderCSS(t=""){return de.getLayerOrder(t,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(t="",i,e="style",n){return de.transformCSS(t,i,n,e,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(t="",i,e={}){return de.getCommonStyleSheet({name:t,theme:this.theme,params:i,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(t,i,e={}){return de.getStyleSheet({name:t,theme:this.theme,params:i,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(t){this._loadingStyles.add(t)},onStyleUpdated(t){this._loadingStyles.add(t)},onStyleLoaded(t,{name:i}){this._loadingStyles.size&&(this._loadingStyles.delete(i),ee.emit(`theme:${i}:load`,t),!this._loadingStyles.size&&ee.emit("theme:load"))}};var ll=0,Uo=(()=>{class t{document=f(E);use(e,n={}){let r=!1,o=e,s=null,{immediate:a=!0,manual:l=!1,name:c=`style_${++ll}`,id:u=void 0,media:d=void 0,nonce:p=void 0,first:h=!1,props:b={}}=n;if(this.document){if(s=this.document.querySelector(`style[data-primeng-style-id="${c}"]`)||u&&this.document.getElementById(u)||this.document.createElement("style"),!s.isConnected){o=e,Si(s,{type:"text/css",media:d,nonce:p});let g=this.document.head;h&&g.firstChild?g.insertBefore(s,g.firstChild):g.appendChild(s),_o(s,"data-primeng-style-id",c)}return s.textContent!==o&&(s.textContent=o),{id:u,name:c,el:s,css:o}}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ot={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},cl=({dt:t})=>`
*,
::before,
::after {
    box-sizing: border-box;
}

/* Non ng overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* NG based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: ${t("disabled.opacity")};
}

.pi {
    font-size: ${t("icon.size")};
}

.p-icon {
    width: ${t("icon.size")};
    height: ${t("icon.size")};
}

.p-unselectable-text {
    user-select: none;
}

.p-overlay-mask {
    background: ${t("mask.background")};
    color: ${t("mask.color")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation ${t("mask.transition.duration")} forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation ${t("mask.transition.duration")} forwards;
}
/* Temporarily disabled, distrupts PrimeNG overlay animations */
/* @keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: ${t("mask.background")};
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: ${t("mask.background")};
    }
    to {
        background: transparent;
    }
}*/

.p-iconwrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
`,ul=({dt:t})=>`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: ${t("scrollbar.width")};
}

/* @todo move to baseiconstyle.ts */

.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,q=(()=>{class t{name="base";useStyle=f(Uo);theme=void 0;css=void 0;classes={};inlineStyles={};load=(e,n={},r=o=>o)=>{let o=r(ie(e,{dt:rt}));return o?this.useStyle.use(Ue(o),v({name:this.name},n)):{}};loadCSS=(e={})=>this.load(this.css,e);loadTheme=(e={},n="")=>this.load(this.theme,e,(r="")=>_.transformCSS(e.name||this.name,`${r}${n}`));loadGlobalCSS=(e={})=>this.load(ul,e);loadGlobalTheme=(e={},n="")=>this.load(cl,e,(r="")=>_.transformCSS(e.name||this.name,`${r}${n}`));getCommonTheme=e=>_.getCommon(this.name,e);getComponentTheme=e=>_.getComponent(this.name,e);getDirectiveTheme=e=>_.getDirective(this.name,e);getPresetTheme=(e,n,r)=>_.getCustomPreset(this.name,e,n,r);getLayerOrderThemeCSS=()=>_.getLayerOrderCSS(this.name);getStyleSheet=(e="",n={})=>{if(this.css){let r=ie(this.css,{dt:rt}),o=Ue(`${r}${e}`),s=Object.entries(n).reduce((a,[l,c])=>a.push(`${l}="${c}"`)&&a,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${s}>${o}</style>`}return""};getCommonThemeStyleSheet=(e,n={})=>_.getCommonStyleSheet(this.name,e,n);getThemeStyleSheet=(e,n={})=>{let r=[_.getStyleSheet(this.name,e,n)];if(this.theme){let o=this.name==="base"?"global-style":`${this.name}-style`,s=ie(this.theme,{dt:rt}),a=Ue(_.transformCSS(o,s)),l=Object.entries(n).reduce((c,[u,d])=>c.push(`${u}="${d}"`)&&c,[]).join(" ");r.push(`<style type="text/css" data-primeng-style-id="${o}" ${l}>${a}</style>`)}return r.join("")};static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var dl=(()=>{class t{theme=oe(void 0);csp=oe({nonce:void 0});isThemeChanged=!1;document=f(E);baseStyle=f(q);constructor(){wt(()=>{ee.on("theme:change",e=>{Et(()=>{this.isThemeChanged=!0,this.theme.set(e)})})}),wt(()=>{let e=this.theme();this.document&&e&&(this.isThemeChanged||this.onThemeChange(e),this.isThemeChanged=!1)})}ngOnDestroy(){_.clearLoadedStyleNames(),ee.clear()}onThemeChange(e){_.setTheme(e),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!_.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:r,style:o}=this.baseStyle.getCommonTheme?.()||{},s={nonce:this.csp?.()?.nonce};this.baseStyle.load(e?.css,v({name:"primitive-variables"},s)),this.baseStyle.load(n?.css,v({name:"semantic-variables"},s)),this.baseStyle.load(r?.css,v({name:"global-variables"},s)),this.baseStyle.loadGlobalTheme(v({name:"global-style"},s),o),_.setLoadedStyleName("common")}}setThemeConfig(e){let{theme:n,csp:r}=e||{};n&&this.theme.set(n),r&&this.csp.set(r)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Fi=(()=>{class t extends dl{ripple=oe(!1);platformId=f(j);inputStyle=oe(null);inputVariant=oe(null);overlayOptions={};csp=oe({nonce:void 0});filterMatchModeOptions={text:[U.STARTS_WITH,U.CONTAINS,U.NOT_CONTAINS,U.ENDS_WITH,U.EQUALS,U.NOT_EQUALS],numeric:[U.EQUALS,U.NOT_EQUALS,U.LESS_THAN,U.LESS_THAN_OR_EQUAL_TO,U.GREATER_THAN,U.GREATER_THAN_OR_EQUAL_TO],date:[U.DATE_IS,U.DATE_IS_NOT,U.DATE_BEFORE,U.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new we;translationObserver=this.translationSource.asObservable();getTranslation(e){return this.translation[e]}setTranslation(e){this.translation=v(v({},this.translation),e),this.translationSource.next(this.translation)}setConfig(e){let{csp:n,ripple:r,inputStyle:o,inputVariant:s,theme:a,overlayOptions:l,translation:c,filterMatchModeOptions:u}=e||{};n&&this.csp.set(n),r&&this.ripple.set(r),o&&this.inputStyle.set(o),s&&this.inputVariant.set(s),l&&(this.overlayOptions=l),c&&this.setTranslation(c),u&&(this.filterMatchModeOptions=u),a&&this.setThemeConfig({theme:a,csp:n})}static \u0275fac=(()=>{let e;return function(r){return(e||(e=I(t)))(r||t)}})();static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),pl=new S("PRIME_NG_CONFIG");function yh(...t){let i=t?.map(n=>({provide:pl,useValue:n,multi:!1})),e=dr(()=>{let n=f(Fi);t?.forEach(r=>n.setConfig(r))});return Ve([...i,e])}var jo=(()=>{class t extends q{name="common";static \u0275fac=(()=>{let e;return function(r){return(e||(e=I(t)))(r||t)}})();static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),fe=(()=>{class t{document=f(E);platformId=f(j);el=f(he);injector=f(ht);cd=f(vt);renderer=f(Ge);config=f(Fi);baseComponentStyle=f(jo);baseStyle=f(q);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=jt("pc");themeChangeListeners=[];_getHostInstance(e){if(e)return e?this.hostName?e.name===this.hostName?e:this._getHostInstance(e.parentInstance):e.parentInstance:void 0}_getOptionValue(e,n="",r={}){return Rn(e,n,r)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(e){if(this.document&&!Xe(this.platformId)){let{dt:n}=e;n&&n.currentValue&&(this._loadScopedThemeStyles(n.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(n.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(e=>ee.off("theme:change",e))}_loadStyles(){let e=()=>{ot.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),ot.setLoadedStyleName("base")),this._loadThemeStyles()};e(),this._themeChangeListener(()=>e())}_loadCoreStyles(){!ot.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),ot.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!_.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:r,style:o}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,v({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(n?.css,v({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(r?.css,v({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(v({name:"global-style"},this.styleOptions),o),_.setLoadedStyleName("common")}if(!_.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:e,style:n}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(e,v({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(v({name:`${this.componentStyle?.name}-style`},this.styleOptions),n),_.setLoadedStyleName(this.componentStyle?.name)}if(!_.isStyleNameLoaded("layer-order")){let e=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,v({name:"layer-order",first:!0},this.styleOptions)),_.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(e){let{css:n}=this.componentStyle?.getPresetTheme?.(e,`[${this.attrSelector}]`)||{},r=this.componentStyle?.load(n,v({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=r?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e=()=>{}){ot.clearLoadedStyleNames(),ee.on("theme:change",e),this.themeChangeListeners.push(e)}cx(e,n){let r=this.parent?this.parent.componentStyle?.classes?.[e]:this.componentStyle?.classes?.[e];return typeof r=="function"?r({instance:this}):typeof r=="string"?r:e}sx(e){let n=this.componentStyle?.inlineStyles?.[e];return typeof n=="function"?n({instance:this}):typeof n=="string"?n:v({},n)}get parent(){return this.parentInstance}static \u0275fac=function(n){return new(n||t)};static \u0275dir=R({type:t,inputs:{dt:"dt"},features:[X([jo,q]),_e]})}return t})();var hl=({dt:t})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${t("badge.border.radius")};
    justify-content: center;
    padding: ${t("badge.padding")};
    background: ${t("badge.primary.background")};
    color: ${t("badge.primary.color")};
    font-size: ${t("badge.font.size")};
    font-weight: ${t("badge.font.weight")};
    min-width: ${t("badge.min.width")};
    height: ${t("badge.height")};
    line-height: ${t("badge.height")};
}

.p-badge-dot {
    width: ${t("badge.dot.size")};
    min-width: ${t("badge.dot.size")};
    height: ${t("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${t("badge.secondary.background")};
    color: ${t("badge.secondary.color")};
}

.p-badge-success {
    background: ${t("badge.success.background")};
    color: ${t("badge.success.color")};
}

.p-badge-info {
    background: ${t("badge.info.background")};
    color: ${t("badge.info.color")};
}

.p-badge-warn {
    background: ${t("badge.warn.background")};
    color: ${t("badge.warn.color")};
}

.p-badge-danger {
    background: ${t("badge.danger.background")};
    color: ${t("badge.danger.color")};
}

.p-badge-contrast {
    background: ${t("badge.contrast.background")};
    color: ${t("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${t("badge.sm.font.size")};
    min-width: ${t("badge.sm.min.width")};
    height: ${t("badge.sm.height")};
    line-height: ${t("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${t("badge.lg.font.size")};
    min-width: ${t("badge.lg.min.width")};
    height: ${t("badge.lg.height")};
    line-height: ${t("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${t("badge.xl.font.size")};
    min-width: ${t("badge.xl.min.width")};
    height: ${t("badge.xl.height")};
    line-height: ${t("badge.xl.height")};
}

/* For PrimeNG (directive)*/

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge > .p-badge {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}
`,fl={root:({props:t,instance:i})=>["p-badge p-component",{"p-badge-circle":C(t.value)&&String(t.value).length===1,"p-badge-dot":re(t.value)&&!i.$slots.default,"p-badge-sm":t.size==="small","p-badge-lg":t.size==="large","p-badge-xl":t.size==="xlarge","p-badge-info":t.severity==="info","p-badge-success":t.severity==="success","p-badge-warn":t.severity==="warn","p-badge-danger":t.severity==="danger","p-badge-secondary":t.severity==="secondary","p-badge-contrast":t.severity==="contrast"}]},Ho=(()=>{class t extends q{name="badge";theme=hl;classes=fl;static \u0275fac=(()=>{let e;return function(r){return(e||(e=I(t)))(r||t)}})();static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})();var Li=(()=>{class t extends fe{styleClass=Y();style=Y();badgeSize=Y();size=Y();severity=Y();value=Y();badgeDisabled=Y(!1,{transform:P});_componentStyle=f(Ho);containerClass=St(()=>{let e="p-badge p-component";return C(this.value())&&String(this.value()).length===1&&(e+=" p-badge-circle"),this.badgeSize()==="large"?e+=" p-badge-lg":this.badgeSize()==="xlarge"?e+=" p-badge-xl":this.badgeSize()==="small"&&(e+=" p-badge-sm"),re(this.value())&&(e+=" p-badge-dot"),this.styleClass()&&(e+=` ${this.styleClass()}`),this.severity()&&(e+=` p-badge-${this.severity()}`),e});static \u0275fac=(()=>{let e;return function(r){return(e||(e=I(t)))(r||t)}})();static \u0275cmp=se({type:t,selectors:[["p-badge"]],hostVars:6,hostBindings:function(n,r){n&2&&(hr(r.style()),Ke(r.containerClass()),pr("display",r.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[X([Ho]),K],decls:1,vars:1,template:function(n,r){n&1&&an(0),n&2&&ln(r.value())},dependencies:[ve,Re],encapsulation:2,changeDetection:0})}return t})(),zo=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=W({imports:[Li,Re,Re]})}return t})();var Mi=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,n){e&&n&&(e.classList?e.classList.add(n):e.className+=" "+n)}static addMultipleClasses(e,n){if(e&&n)if(e.classList){let r=n.trim().split(" ");for(let o=0;o<r.length;o++)e.classList.add(r[o])}else{let r=n.split(" ");for(let o=0;o<r.length;o++)e.className+=" "+r[o]}}static removeClass(e,n){e&&n&&(e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,n){e&&n&&[n].flat().filter(Boolean).forEach(r=>r.split(" ").forEach(o=>this.removeClass(e,o)))}static hasClass(e,n){return e&&n?e.classList?e.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(n){return n!==e})}static find(e,n){return Array.from(e.querySelectorAll(n))}static findSingle(e,n){return this.isElement(e)?e.querySelector(n):null}static index(e){let n=e.parentNode.childNodes,r=0;for(var o=0;o<n.length;o++){if(n[o]==e)return r;n[o].nodeType==1&&r++}return-1}static indexWithinGroup(e,n){let r=e.parentNode?e.parentNode.childNodes:[],o=0;for(var s=0;s<r.length;s++){if(r[s]==e)return o;r[s].attributes&&r[s].attributes[n]&&r[s].nodeType==1&&o++}return-1}static appendOverlay(e,n,r="self"){r!=="self"&&e&&n&&this.appendChild(e,n)}static alignOverlay(e,n,r="self",o=!0){e&&n&&(o&&(e.style.minWidth=`${t.getOuterWidth(n)}px`),r==="self"?this.relativePosition(e,n):this.absolutePosition(e,n))}static relativePosition(e,n,r=!0){let o=L=>{if(L)return getComputedStyle(L).getPropertyValue("position")==="relative"?L:o(L.parentElement)},s=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),a=n.offsetHeight,l=n.getBoundingClientRect(),c=this.getWindowScrollTop(),u=this.getWindowScrollLeft(),d=this.getViewport(),h=o(e)?.getBoundingClientRect()||{top:-1*c,left:-1*u},b,g;l.top+a+s.height>d.height?(b=l.top-h.top-s.height,e.style.transformOrigin="bottom",l.top+b<0&&(b=-1*l.top)):(b=a+l.top-h.top,e.style.transformOrigin="top");let y=l.left+s.width-d.width,O=l.left-h.left;s.width>d.width?g=(l.left-h.left)*-1:y>0?g=O-y:g=l.left-h.left,e.style.top=b+"px",e.style.left=g+"px",r&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(e,n,r=!0){let o=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),s=o.height,a=o.width,l=n.offsetHeight,c=n.offsetWidth,u=n.getBoundingClientRect(),d=this.getWindowScrollTop(),p=this.getWindowScrollLeft(),h=this.getViewport(),b,g;u.top+l+s>h.height?(b=u.top+d-s,e.style.transformOrigin="bottom",b<0&&(b=d)):(b=l+u.top+d,e.style.transformOrigin="top"),u.left+a>h.width?g=Math.max(0,u.left+p+c-a):g=u.left+p,e.style.top=b+"px",e.style.left=g+"px",r&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,n=[]){return e.parentNode===null?n:this.getParents(e.parentNode,n.concat([e.parentNode]))}static getScrollableParents(e){let n=[];if(e){let r=this.getParents(e),o=/(auto|scroll)/,s=a=>{let l=window.getComputedStyle(a,null);return o.test(l.getPropertyValue("overflow"))||o.test(l.getPropertyValue("overflowX"))||o.test(l.getPropertyValue("overflowY"))};for(let a of r){let l=a.nodeType===1&&a.dataset.scrollselectors;if(l){let c=l.split(",");for(let u of c){let d=this.findSingle(a,u);d&&s(d)&&n.push(d)}}a.nodeType!==9&&s(a)&&n.push(a)}}return n}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementDimensions(e){let n={};return e.style.visibility="hidden",e.style.display="block",n.width=e.offsetWidth,n.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",n}static scrollInView(e,n){let r=getComputedStyle(e).getPropertyValue("borderTopWidth"),o=r?parseFloat(r):0,s=getComputedStyle(e).getPropertyValue("paddingTop"),a=s?parseFloat(s):0,l=e.getBoundingClientRect(),u=n.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-o-a,d=e.scrollTop,p=e.clientHeight,h=this.getOuterHeight(n);u<0?e.scrollTop=d+u:u+h>p&&(e.scrollTop=d+u-p+h)}static fadeIn(e,n){e.style.opacity=0;let r=+new Date,o=0,s=function(){o=+e.style.opacity.replace(",",".")+(new Date().getTime()-r)/n,e.style.opacity=o,r=+new Date,+o<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};s()}static fadeOut(e,n){var r=1,o=50,s=n,a=o/s;let l=setInterval(()=>{r=r-a,r<=0&&(r=0,clearInterval(l)),e.style.opacity=r},o)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,n){var r=Element.prototype,o=r.matches||r.webkitMatchesSelector||r.mozMatchesSelector||r.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return o.call(e,n)}static getOuterWidth(e,n){let r=e.offsetWidth;if(n){let o=getComputedStyle(e);r+=parseFloat(o.marginLeft)+parseFloat(o.marginRight)}return r}static getHorizontalPadding(e){let n=getComputedStyle(e);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(e){let n=getComputedStyle(e);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(e){let n=e.offsetWidth,r=getComputedStyle(e);return n+=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight),n}static width(e){let n=e.offsetWidth,r=getComputedStyle(e);return n-=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight),n}static getInnerHeight(e){let n=e.offsetHeight,r=getComputedStyle(e);return n+=parseFloat(r.paddingTop)+parseFloat(r.paddingBottom),n}static getOuterHeight(e,n){let r=e.offsetHeight;if(n){let o=getComputedStyle(e);r+=parseFloat(o.marginTop)+parseFloat(o.marginBottom)}return r}static getHeight(e){let n=e.offsetHeight,r=getComputedStyle(e);return n-=parseFloat(r.paddingTop)+parseFloat(r.paddingBottom)+parseFloat(r.borderTopWidth)+parseFloat(r.borderBottomWidth),n}static getWidth(e){let n=e.offsetWidth,r=getComputedStyle(e);return n-=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight)+parseFloat(r.borderLeftWidth)+parseFloat(r.borderRightWidth),n}static getViewport(){let e=window,n=document,r=n.documentElement,o=n.getElementsByTagName("body")[0],s=e.innerWidth||r.clientWidth||o.clientWidth,a=e.innerHeight||r.clientHeight||o.clientHeight;return{width:s,height:a}}static getOffset(e){var n=e.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,n){let r=e.parentNode;if(!r)throw"Can't replace element";return r.replaceChild(n,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,n=e.indexOf("MSIE ");if(n>0)return!0;var r=e.indexOf("Trident/");if(r>0){var o=e.indexOf("rv:");return!0}var s=e.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,n){if(this.isElement(n))n.appendChild(e);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(e);else throw"Cannot append "+n+" to "+e}static removeChild(e,n){if(this.isElement(n))n.removeChild(e);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+n}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let n=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let r=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=r,r}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let n=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(e,n,r){e[n].apply(e,r)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,n){e&&document.activeElement!==e&&e.focus(n)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,n=""){let r=this.find(e,this.getFocusableSelectorString(n)),o=[];for(let s of r){let a=getComputedStyle(s);this.isVisible(s)&&a.display!="none"&&a.visibility!="hidden"&&o.push(s)}return o}static getFocusableElement(e,n=""){let r=this.findSingle(e,this.getFocusableSelectorString(n));if(r){let o=getComputedStyle(r);if(this.isVisible(r)&&o.display!="none"&&o.visibility!="hidden")return r}return null}static getFirstFocusableElement(e,n=""){let r=this.getFocusableElements(e,n);return r.length>0?r[0]:null}static getLastFocusableElement(e,n){let r=this.getFocusableElements(e,n);return r.length>0?r[r.length-1]:null}static getNextFocusableElement(e,n=!1){let r=t.getFocusableElements(e),o=0;if(r&&r.length>0){let s=r.indexOf(r[0].ownerDocument.activeElement);n?s==-1||s===0?o=r.length-1:o=s-1:s!=-1&&s!==r.length-1&&(o=s+1)}return r[o]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,n){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement.parentElement;default:let r=typeof e;if(r==="string")return document.querySelector(e);if(r==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let s=(a=>!!(a&&a.constructor&&a.call&&a.apply))(e)?e():e;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,n){if(e){let r=e.getAttribute(n);return isNaN(r)?r==="true"||r==="false"?r==="true":r:+r}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,n={},...r){if(e){let o=document.createElement(e);return this.setAttributes(o,n),o.append(...r),o}}static setAttribute(e,n="",r){this.isElement(e)&&r!==null&&r!==void 0&&e.setAttribute(n,r)}static setAttributes(e,n={}){if(this.isElement(e)){let r=(o,s)=>{let a=e?.$attrs?.[o]?[e?.$attrs?.[o]]:[];return[s].flat().reduce((l,c)=>{if(c!=null){let u=typeof c;if(u==="string"||u==="number")l.push(c);else if(u==="object"){let d=Array.isArray(c)?r(o,c):Object.entries(c).map(([p,h])=>o==="style"&&(h||h===0)?`${p.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${h}`:h?p:void 0);l=d.length?l.concat(d.filter(p=>!!p)):l}}return l},a)};Object.entries(n).forEach(([o,s])=>{if(s!=null){let a=o.match(/^on(.+)/);a?e.addEventListener(a[1].toLowerCase(),s):o==="pBind"?this.setAttributes(e,s):(s=o==="class"?[...new Set(r("class",s))].join(" ").trim():o==="style"?r("style",s).join(";").trim():s,(e.$attrs=e.$attrs||{})&&(e.$attrs[o]=s),e.setAttribute(o,s))}})}}static isFocusableElement(e,n=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return t})(),Vo=class{element;listener;scrollableParents;constructor(i,e=()=>{}){this.element=i,this.listener=e}bindScrollListener(){this.scrollableParents=Mi.getScrollableParents(this.element);for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var Wo=(()=>{class t extends fe{autofocus=!1;_autofocus=!1;focused=!1;platformId=f(j);document=f(E);host=f(he);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){ke(this.platformId)&&this._autofocus&&setTimeout(()=>{let e=Mi.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(r){return(e||(e=I(t)))(r||t)}})();static \u0275dir=R({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",P],_autofocus:[0,"pAutoFocus","_autofocus"]},features:[K]})}return t})();var ml=["*"],bl=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,yl=(()=>{class t extends q{name="baseicon";inlineStyles=bl;static \u0275fac=(()=>{let e;return function(r){return(e||(e=I(t)))(r||t)}})();static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})();var Go=(()=>{class t extends fe{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let e=re(this.label);this.role=e?void 0:"img",this.ariaLabel=e?void 0:this.label,this.ariaHidden=e}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let e;return function(r){return(e||(e=I(t)))(r||t)}})();static \u0275cmp=se({type:t,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",P],styleClass:"styleClass"},features:[X([yl]),K],ngContentSelectors:ml,decls:1,vars:0,template:function(n,r){n&1&&(Ne(),Pe(0))},encapsulation:2,changeDetection:0})}return t})();var Ko=(()=>{class t extends Go{pathId;ngOnInit(){this.pathId="url(#"+jt()+")"}static \u0275fac=(()=>{let e;return function(r){return(e||(e=I(t)))(r||t)}})();static \u0275cmp=se({type:t,selectors:[["SpinnerIcon"]],features:[K],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,r){n&1&&(Zi(),Ye(0,"svg",0)(1,"g"),Ae(2,"path",1),Ze(),Ye(3,"defs")(4,"clipPath",2),Ae(5,"rect",3),Ze()()()),n&2&&(Ke(r.getClassNames()),me("aria-label",r.ariaLabel)("aria-hidden",r.ariaHidden)("role",r.role),H(),me("clip-path",r.pathId),H(3),F("id",r.pathId))},encapsulation:2})}return t})();var Dl=({dt:t})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${t("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,vl={root:"p-ink"},Yo=(()=>{class t extends q{name="ripple";theme=Dl;classes=vl;static \u0275fac=(()=>{let e;return function(r){return(e||(e=I(t)))(r||t)}})();static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})();var Zo=(()=>{class t extends fe{zone=f(Te);_componentStyle=f(Yo);animationListener;mouseDownListener;timeout;constructor(){super(),wt(()=>{ke(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(e){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(Be(n,"p-ink-active"),!wi(n)&&!_i(n)){let a=Math.max(vo(this.el.nativeElement),Ci(this.el.nativeElement));n.style.height=a+"px",n.style.width=a+"px"}let r=wo(this.el.nativeElement),o=e.pageX-r.left+this.document.body.scrollTop-_i(n)/2,s=e.pageY-r.top+this.document.body.scrollLeft-wi(n)/2;this.renderer.setStyle(n,"top",s+"px"),this.renderer.setStyle(n,"left",o+"px"),Bt(n,"p-ink-active"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&Be(a,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let n=0;n<e.length;n++)if(typeof e[n].className=="string"&&e[n].className.indexOf("p-ink")!==-1)return e[n];return null}resetInk(){let e=this.getInk();e&&Be(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),Be(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Co(e))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=R({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[X([Yo]),K]})}return t})(),Sf=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=W({})}return t})();var El=["content"],Sl=["loadingicon"],wl=["icon"],Cl=["*"],Xo=t=>({class:t});function _l(t,i){t&1&&fr(0)}function Tl(t,i){if(t&1&&Ae(0,"span",8),t&2){let e=ae(3);F("ngClass",e.iconClass()),me("aria-hidden",!0)("data-pc-section","loadingicon")}}function Al(t,i){if(t&1&&Ae(0,"SpinnerIcon",9),t&2){let e=ae(3);F("styleClass",e.spinnerIconClass())("spin",!0),me("aria-hidden",!0)("data-pc-section","loadingicon")}}function Il(t,i){if(t&1&&(on(0),Me(1,Tl,1,3,"span",6)(2,Al,1,4,"SpinnerIcon",7),sn()),t&2){let e=ae(2);H(),F("ngIf",e.loadingIcon),H(),F("ngIf",!e.loadingIcon)}}function Ol(t,i){}function Rl(t,i){if(t&1&&Me(0,Ol,0,0,"ng-template",10),t&2){let e=ae(2);F("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function Fl(t,i){if(t&1&&(on(0),Me(1,Il,3,2,"ng-container",2)(2,Rl,1,1,null,5),sn()),t&2){let e=ae();H(),F("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),H(),F("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",Gn(3,Xo,e.iconClass()))}}function Ll(t,i){if(t&1&&Ae(0,"span",8),t&2){let e=ae(2);Ke(e.icon),F("ngClass",e.iconClass()),me("data-pc-section","icon")}}function Ml(t,i){}function Nl(t,i){if(t&1&&Me(0,Ml,0,0,"ng-template",10),t&2){let e=ae(2);F("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function Pl(t,i){if(t&1&&(on(0),Me(1,Ll,1,4,"span",11)(2,Nl,1,1,null,5),sn()),t&2){let e=ae();H(),F("ngIf",e.icon&&!e.iconTemplate&&!e._iconTemplate),H(),F("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",Gn(3,Xo,e.iconClass()))}}function xl(t,i){if(t&1&&(Ye(0,"span",12),an(1),Ze()),t&2){let e=ae();me("aria-hidden",e.icon&&!e.label)("data-pc-section","label"),H(),ln(e.label)}}function kl(t,i){if(t&1&&Ae(0,"p-badge",13),t&2){let e=ae();F("value",e.badge)("severity",e.badgeSeverity)}}var $l=({dt:t})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${t("button.primary.color")};
    background: ${t("button.primary.background")};
    border: 1px solid ${t("button.primary.border.color")};
    padding-block: ${t("button.padding.y")};
    padding-inline: ${t("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${t("button.transition.duration")}, color ${t("button.transition.duration")}, border-color ${t("button.transition.duration")},
            outline-color ${t("button.transition.duration")}, box-shadow ${t("button.transition.duration")};
    border-radius: ${t("button.border.radius")};
    outline-color: transparent;
    gap: ${t("button.gap")};
}

.p-button-icon,
.p-button-icon:before,
.p-button-icon:after {
    line-height: inherit;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${t("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${t("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${t("button.sm.font.size")};
    padding-block: ${t("button.sm.padding.y")};
    padding-inline: ${t("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${t("button.sm.font.size")};
}

.p-button-sm.p-button-icon-only {
    width: ${t("button.sm.icon.only.width")};
}

.p-button-sm.p-button-icon-only.p-button-rounded {
    height: ${t("button.sm.icon.only.width")};
}

.p-button-lg {
    font-size: ${t("button.lg.font.size")};
    padding-block: ${t("button.lg.padding.y")};
    padding-inline: ${t("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${t("button.lg.font.size")};
}

.p-button-lg.p-button-icon-only {
    width: ${t("button.lg.icon.only.width")};
}

.p-button-lg.p-button-icon-only.p-button-rounded {
    height: ${t("button.lg.icon.only.width")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${t("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${t("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${t("button.primary.hover.background")};
    border: 1px solid ${t("button.primary.hover.border.color")};
    color: ${t("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${t("button.primary.active.background")};
    border: 1px solid ${t("button.primary.active.border.color")};
    color: ${t("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${t("button.primary.focus.ring.shadow")};
    outline: ${t("button.focus.ring.width")} ${t("button.focus.ring.style")} ${t("button.primary.focus.ring.color")};
    outline-offset: ${t("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${t("button.badge.size")};
    height: ${t("button.badge.size")};
    line-height: ${t("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${t("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${t("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${t("button.secondary.background")};
    border: 1px solid ${t("button.secondary.border.color")};
    color: ${t("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${t("button.secondary.hover.background")};
    border: 1px solid ${t("button.secondary.hover.border.color")};
    color: ${t("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${t("button.secondary.active.background")};
    border: 1px solid ${t("button.secondary.active.border.color")};
    color: ${t("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${t("button.secondary.focus.ring.color")};
    box-shadow: ${t("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${t("button.success.background")};
    border: 1px solid ${t("button.success.border.color")};
    color: ${t("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${t("button.success.hover.background")};
    border: 1px solid ${t("button.success.hover.border.color")};
    color: ${t("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${t("button.success.active.background")};
    border: 1px solid ${t("button.success.active.border.color")};
    color: ${t("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${t("button.success.focus.ring.color")};
    box-shadow: ${t("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${t("button.info.background")};
    border: 1px solid ${t("button.info.border.color")};
    color: ${t("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${t("button.info.hover.background")};
    border: 1px solid ${t("button.info.hover.border.color")};
    color: ${t("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${t("button.info.active.background")};
    border: 1px solid ${t("button.info.active.border.color")};
    color: ${t("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${t("button.info.focus.ring.color")};
    box-shadow: ${t("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${t("button.warn.background")};
    border: 1px solid ${t("button.warn.border.color")};
    color: ${t("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${t("button.warn.hover.background")};
    border: 1px solid ${t("button.warn.hover.border.color")};
    color: ${t("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${t("button.warn.active.background")};
    border: 1px solid ${t("button.warn.active.border.color")};
    color: ${t("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${t("button.warn.focus.ring.color")};
    box-shadow: ${t("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${t("button.help.background")};
    border: 1px solid ${t("button.help.border.color")};
    color: ${t("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${t("button.help.hover.background")};
    border: 1px solid ${t("button.help.hover.border.color")};
    color: ${t("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${t("button.help.active.background")};
    border: 1px solid ${t("button.help.active.border.color")};
    color: ${t("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${t("button.help.focus.ring.color")};
    box-shadow: ${t("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${t("button.danger.background")};
    border: 1px solid ${t("button.danger.border.color")};
    color: ${t("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${t("button.danger.hover.background")};
    border: 1px solid ${t("button.danger.hover.border.color")};
    color: ${t("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${t("button.danger.active.background")};
    border: 1px solid ${t("button.danger.active.border.color")};
    color: ${t("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${t("button.danger.focus.ring.color")};
    box-shadow: ${t("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${t("button.contrast.background")};
    border: 1px solid ${t("button.contrast.border.color")};
    color: ${t("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${t("button.contrast.hover.background")};
    border: 1px solid ${t("button.contrast.hover.border.color")};
    color: ${t("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${t("button.contrast.active.background")};
    border: 1px solid ${t("button.contrast.active.border.color")};
    color: ${t("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${t("button.contrast.focus.ring.color")};
    box-shadow: ${t("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${t("button.outlined.primary.hover.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${t("button.outlined.primary.active.background")};
    border-color: ${t("button.outlined.primary.border.color")};
    color: ${t("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${t("button.outlined.secondary.hover.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${t("button.outlined.secondary.active.background")};
    border-color: ${t("button.outlined.secondary.border.color")};
    color: ${t("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${t("button.outlined.success.hover.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${t("button.outlined.success.active.background")};
    border-color: ${t("button.outlined.success.border.color")};
    color: ${t("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${t("button.outlined.info.hover.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${t("button.outlined.info.active.background")};
    border-color: ${t("button.outlined.info.border.color")};
    color: ${t("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${t("button.outlined.warn.hover.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${t("button.outlined.warn.active.background")};
    border-color: ${t("button.outlined.warn.border.color")};
    color: ${t("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${t("button.outlined.help.hover.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${t("button.outlined.help.active.background")};
    border-color: ${t("button.outlined.help.border.color")};
    color: ${t("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${t("button.outlined.danger.hover.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${t("button.outlined.danger.active.background")};
    border-color: ${t("button.outlined.danger.border.color")};
    color: ${t("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${t("button.outlined.contrast.hover.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${t("button.outlined.contrast.active.background")};
    border-color: ${t("button.outlined.contrast.border.color")};
    color: ${t("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${t("button.outlined.plain.hover.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${t("button.outlined.plain.active.background")};
    border-color: ${t("button.outlined.plain.border.color")};
    color: ${t("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${t("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${t("button.text.primary.active.background")};
    border-color: transparent;
    color: ${t("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${t("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${t("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${t("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${t("button.text.success.hover.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${t("button.text.success.active.background")};
    border-color: transparent;
    color: ${t("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${t("button.text.info.hover.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${t("button.text.info.active.background")};
    border-color: transparent;
    color: ${t("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${t("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${t("button.text.warn.active.background")};
    border-color: transparent;
    color: ${t("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${t("button.text.help.hover.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${t("button.text.help.active.background")};
    border-color: transparent;
    color: ${t("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${t("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${t("button.text.danger.active.background")};
    border-color: transparent;
    color: ${t("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${t("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${t("button.text.plain.active.background")};
    border-color: transparent;
    color: ${t("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${t("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${t("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${t("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${t("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,Bl={root:({instance:t,props:i})=>["p-button p-component",{"p-button-icon-only":t.hasIcon&&!i.label&&!i.badge,"p-button-vertical":(i.iconPos==="top"||i.iconPos==="bottom")&&i.label,"p-button-loading":i.loading,"p-button-link":i.link,[`p-button-${i.severity}`]:i.severity,"p-button-raised":i.raised,"p-button-rounded":i.rounded,"p-button-text":i.text,"p-button-outlined":i.outlined,"p-button-sm":i.size==="small","p-button-lg":i.size==="large","p-button-plain":i.plain,"p-button-fluid":i.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos}`]:t.label}],label:"p-button-label"},qo=(()=>{class t extends q{name="button";theme=$l;classes=Bl;static \u0275fac=(()=>{let e;return function(r){return(e||(e=I(t)))(r||t)}})();static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})();var Ul=(()=>{class t extends fe{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new tn;onFocus=new tn;onBlur=new tn;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([n,r])=>this[`_${n}`]!==r&&(this[`_${n}`]=r))}get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return re(this.fluid)?!!n:this.fluid}_componentStyle=f(qo);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}ngOnChanges(e){super.ngOnChanges(e);let{buttonProps:n}=e;if(n){let r=n.currentValue;for(let o in r)this[o]=r[o]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,e])=>!!e).reduce((e,[n])=>e+` ${n}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text||this.variant=="text","p-button-outlined":this.outlined||this.variant=="outlined","p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=I(t)))(r||t)}})();static \u0275cmp=se({type:t,selectors:[["p-button"]],contentQueries:function(n,r,o){if(n&1&&(bt(o,El,5),bt(o,Sl,5),bt(o,wl,5),bt(o,Mo,4)),n&2){let s;yt(s=Dt())&&(r.contentTemplate=s.first),yt(s=Dt())&&(r.loadingIconTemplate=s.first),yt(s=Dt())&&(r.iconTemplate=s.first),yt(s=Dt())&&(r.templates=s)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",P],loading:[2,"loading","loading",P],loadingIcon:"loadingIcon",raised:[2,"raised","raised",P],rounded:[2,"rounded","rounded",P],text:[2,"text","text",P],plain:[2,"plain","plain",P],severity:"severity",outlined:[2,"outlined","outlined",P],link:[2,"link","link",P],tabindex:[2,"tabindex","tabindex",Kn],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",P],fluid:[2,"fluid","fluid",P],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[X([qo]),K,_e],ngContentSelectors:Cl,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(n,r){n&1&&(Ne(),Ye(0,"button",0),gr("click",function(s){return r.onClick.emit(s)})("focus",function(s){return r.onFocus.emit(s)})("blur",function(s){return r.onBlur.emit(s)}),Pe(1),Me(2,_l,1,0,"ng-container",1)(3,Fl,3,5,"ng-container",2)(4,Pl,3,5,"ng-container",2)(5,xl,2,3,"span",3)(6,kl,1,2,"p-badge",4),Ze()),n&2&&(F("ngStyle",r.style)("disabled",r.disabled||r.loading)("ngClass",r.buttonClass)("pAutoFocus",r.autofocus),me("type",r.type)("aria-label",r.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",r.tabindex),H(2),F("ngTemplateOutlet",r.contentTemplate||r._contentTemplate),H(),F("ngIf",r.loading),H(),F("ngIf",!r.loading),H(),F("ngIf",!r.contentTemplate&&!r._contentTemplate&&r.label),H(),F("ngIf",!r.contentTemplate&&!r._contentTemplate&&r.badge))},dependencies:[ve,ni,ii,oi,ri,Zo,Wo,Ko,zo,Li,Re],encapsulation:2,changeDetection:0})}return t})(),Kf=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=G({type:t});static \u0275inj=W({imports:[ve,Ul,Re,Re]})}return t})();var Jo=class t{static isArray(i,e=!0){return Array.isArray(i)&&(e||i.length!==0)}static isObject(i,e=!0){return typeof i=="object"&&!Array.isArray(i)&&i!=null&&(e||Object.keys(i).length!==0)}static equals(i,e,n){return n?this.resolveFieldData(i,n)===this.resolveFieldData(e,n):this.equalsByValue(i,e)}static equalsByValue(i,e){if(i===e)return!0;if(i&&e&&typeof i=="object"&&typeof e=="object"){var n=Array.isArray(i),r=Array.isArray(e),o,s,a;if(n&&r){if(s=i.length,s!=e.length)return!1;for(o=s;o--!==0;)if(!this.equalsByValue(i[o],e[o]))return!1;return!0}if(n!=r)return!1;var l=this.isDate(i),c=this.isDate(e);if(l!=c)return!1;if(l&&c)return i.getTime()==e.getTime();var u=i instanceof RegExp,d=e instanceof RegExp;if(u!=d)return!1;if(u&&d)return i.toString()==e.toString();var p=Object.keys(i);if(s=p.length,s!==Object.keys(e).length)return!1;for(o=s;o--!==0;)if(!Object.prototype.hasOwnProperty.call(e,p[o]))return!1;for(o=s;o--!==0;)if(a=p[o],!this.equalsByValue(i[a],e[a]))return!1;return!0}return i!==i&&e!==e}static resolveFieldData(i,e){if(i&&e){if(this.isFunction(e))return e(i);if(e.indexOf(".")==-1)return i[e];{let n=e.split("."),r=i;for(let o=0,s=n.length;o<s;++o){if(r==null)return null;r=r[n[o]]}return r}}else return null}static isFunction(i){return!!(i&&i.constructor&&i.call&&i.apply)}static reorderArray(i,e,n){let r;i&&e!==n&&(n>=i.length&&(n%=i.length,e%=i.length),i.splice(n,0,i.splice(e,1)[0]))}static insertIntoOrderedArray(i,e,n,r){if(n.length>0){let o=!1;for(let s=0;s<n.length;s++)if(this.findIndexInList(n[s],r)>e){n.splice(s,0,i),o=!0;break}o||n.push(i)}else n.push(i)}static findIndexInList(i,e){let n=-1;if(e){for(let r=0;r<e.length;r++)if(e[r]==i){n=r;break}}return n}static contains(i,e){if(i!=null&&e&&e.length){for(let n of e)if(this.equals(i,n))return!0}return!1}static removeAccents(i){return i&&(i=i.normalize("NFKD").replace(new RegExp("\\p{Diacritic}","gu"),"")),i}static isDate(i){return Object.prototype.toString.call(i)==="[object Date]"}static isEmpty(i){return i==null||i===""||Array.isArray(i)&&i.length===0||!this.isDate(i)&&typeof i=="object"&&Object.keys(i).length===0}static isNotEmpty(i){return!this.isEmpty(i)}static compare(i,e,n,r=1){let o=-1,s=this.isEmpty(i),a=this.isEmpty(e);return s&&a?o=0:s?o=r:a?o=-r:typeof i=="string"&&typeof e=="string"?o=i.localeCompare(e,n,{numeric:!0}):o=i<e?-1:i>e?1:0,o}static sort(i,e,n=1,r,o=1){let s=t.compare(i,e,r,n),a=n;return(t.isEmpty(i)||t.isEmpty(e))&&(a=o===1?n:o),a*s}static merge(i,e){if(!(i==null&&e==null)){{if((i==null||typeof i=="object")&&(e==null||typeof e=="object"))return v(v({},i||{}),e||{});if((i==null||typeof i=="string")&&(e==null||typeof e=="string"))return[i||"",e||""].join(" ")}return e||i}}static isPrintableCharacter(i=""){return this.isNotEmpty(i)&&i.length===1&&i.match(/\S| /)}static getItemValue(i,...e){return this.isFunction(i)?i(...e):i}static findLastIndex(i,e){let n=-1;if(this.isNotEmpty(i))try{n=i.findLastIndex(e)}catch{n=i.lastIndexOf([...i].reverse().find(e))}return n}static findLast(i,e){let n;if(this.isNotEmpty(i))try{n=i.findLast(e)}catch{n=[...i].reverse().find(e)}return n}static deepEquals(i,e){if(i===e)return!0;if(i&&e&&typeof i=="object"&&typeof e=="object"){var n=Array.isArray(i),r=Array.isArray(e),o,s,a;if(n&&r){if(s=i.length,s!=e.length)return!1;for(o=s;o--!==0;)if(!this.deepEquals(i[o],e[o]))return!1;return!0}if(n!=r)return!1;var l=i instanceof Date,c=e instanceof Date;if(l!=c)return!1;if(l&&c)return i.getTime()==e.getTime();var u=i instanceof RegExp,d=e instanceof RegExp;if(u!=d)return!1;if(u&&d)return i.toString()==e.toString();var p=Object.keys(i);if(s=p.length,s!==Object.keys(e).length)return!1;for(o=s;o--!==0;)if(!Object.prototype.hasOwnProperty.call(e,p[o]))return!1;for(o=s;o--!==0;)if(a=p[o],!this.deepEquals(i[a],e[a]))return!1;return!0}return i!==i&&e!==e}static minifyCSS(i){return i&&i.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}static toFlatCase(i){return this.isString(i)?i.replace(/(-|_)/g,"").toLowerCase():i}static isString(i,e=!0){return typeof i=="string"&&(e||i!=="")}},Qo=0;function Zf(t="pn_id_"){return Qo++,`${t}${Qo}`}function jl(){let t=[],i=(o,s)=>{let a=t.length>0?t[t.length-1]:{key:o,value:s},l=a.value+(a.key===o?0:s)+2;return t.push({key:o,value:l}),l},e=o=>{t=t.filter(s=>s.value!==o)},n=()=>t.length>0?t[t.length-1].value:0,r=o=>o&&parseInt(o.style.zIndex,10)||0;return{get:r,set:(o,s,a)=>{s&&(s.style.zIndex=String(i(o,a)))},clear:o=>{o&&(e(r(o)),o.style.zIndex="")},getCurrent:()=>n(),generateZIndex:i,revertZIndex:e}}var qf=jl(),Xf=t=>!!t;var es=new S("HIGHLIGHT_OPTIONS");var st=function(t){return t.FULL_WITH_CORE_LIBRARY_IMPORTS="The full library and the core library were imported, only one of them should be imported!",t.FULL_WITH_LANGUAGE_IMPORTS="The highlighting languages were imported they are not needed!",t.CORE_WITHOUT_LANGUAGE_IMPORTS="The highlighting languages were not imported!",t.LANGUAGE_WITHOUT_CORE_IMPORTS="The core library was not imported!",t.NO_FULL_AND_NO_CORE_IMPORTS="Highlight.js library was not imported!",t}(st||{}),Hl=(()=>{class t{constructor(){this.document=f(E),this.isPlatformBrowser=ke(f(j)),this.options=f(es,{optional:!0}),this._ready=new ji(null),this.ready=Hi(this._ready.asObservable().pipe(dt(e=>!!e))),this.isPlatformBrowser&&(this.document.defaultView.hljs?this._ready.next(this.document.defaultView.hljs):this._loadLibrary().pipe(pt(e=>this.options?.lineNumbersLoader?(this.document.defaultView.hljs=e,this.loadLineNumbers().pipe(Un(n=>{n.activateLineNumbers(),this._ready.next(e)}))):(this._ready.next(e),kn)),Vi(e=>(console.error("[HLJS] ",e),this._ready.error(e),kn))).subscribe(),this.options?.themePath&&this.loadTheme(this.options.themePath))}_loadLibrary(){if(this.options){if(this.options.fullLibraryLoader&&this.options.coreLibraryLoader)return ze(()=>st.FULL_WITH_CORE_LIBRARY_IMPORTS);if(this.options.fullLibraryLoader&&this.options.languages)return ze(()=>st.FULL_WITH_LANGUAGE_IMPORTS);if(this.options.coreLibraryLoader&&!this.options.languages)return ze(()=>st.CORE_WITHOUT_LANGUAGE_IMPORTS);if(!this.options.coreLibraryLoader&&this.options.languages)return ze(()=>st.LANGUAGE_WITHOUT_CORE_IMPORTS);if(this.options.fullLibraryLoader)return this.loadFullLibrary();if(this.options.coreLibraryLoader&&this.options.languages&&Object.keys(this.options.languages).length)return this.loadCoreLibrary().pipe(pt(e=>this._loadLanguages(e)))}return ze(()=>st.NO_FULL_AND_NO_CORE_IMPORTS)}_loadLanguages(e){let n=Object.entries(this.options.languages).map(([r,o])=>Ni(o()).pipe(Un(s=>e.registerLanguage(r,s))));return zi(n).pipe(Ce(()=>e))}loadCoreLibrary(){return Ni(this.options.coreLibraryLoader())}loadFullLibrary(){return Ni(this.options.fullLibraryLoader())}loadLineNumbers(){return ut(this.options.lineNumbersLoader())}setTheme(e){this.isPlatformBrowser&&(this._themeLinkElement?this._themeLinkElement.href=e:this.loadTheme(e))}loadTheme(e){this._themeLinkElement=this.document.createElement("link"),this._themeLinkElement.href=e,this._themeLinkElement.type="text/css",this._themeLinkElement.rel="stylesheet",this._themeLinkElement.media="screen,print",this.document.head.appendChild(this._themeLinkElement)}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),Ni=t=>ut(t).pipe(dt(i=>!!i?.default),Ce(i=>i.default)),zl=(()=>{class t{constructor(){this.loader=f(Hl),this.options=f(es,{optional:!0}),this.hljsSignal=oe(null),this.hljs=St(()=>this.hljsSignal()),this.loader.ready.then(e=>{this.hljsSignal.set(e),this.options?.highlightOptions&&e.configure(this.options.highlightOptions)})}highlight(e,n){return $(this,null,function*(){return(yield this.loader.ready).highlight(e,n)})}highlightAuto(e,n){return $(this,null,function*(){return(yield this.loader.ready).highlightAuto(e,n)})}highlightElement(e){return $(this,null,function*(){(yield this.loader.ready).highlightElement(e)})}highlightAll(){return $(this,null,function*(){(yield this.loader.ready).highlightAll()})}configure(e){return $(this,null,function*(){(yield this.loader.ready).configure(e)})}registerLanguage(e,n){return $(this,null,function*(){(yield this.loader.ready).registerLanguage(e,n)})}unregisterLanguage(e){return $(this,null,function*(){(yield this.loader.ready).unregisterLanguage(e)})}registerAliases(r,o){return $(this,arguments,function*(e,{languageName:n}){(yield this.loader.ready).registerAliases(e,{languageName:n})})}listLanguages(){return $(this,null,function*(){return(yield this.loader.ready).listLanguages()})}getLanguage(e){return $(this,null,function*(){return(yield this.loader.ready).getLanguage(e)})}safeMode(){return $(this,null,function*(){(yield this.loader.ready).safeMode()})}debugMode(){return $(this,null,function*(){(yield this.loader.ready).debugMode()})}lineNumbersBlock(e,n){return $(this,null,function*(){let r=yield this.loader.ready;r.lineNumbersBlock&&r.lineNumbersBlock(e,n)})}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),Pi;function Vl(){if(!Pi)try{Pi=window?.trustedTypes?.createPolicy("ngx-highlightjs",{createHTML:t=>t})}catch{}return Pi}function Wl(t){return Vl()?.createHTML(t)||t}var Pn=(()=>{class t{constructor(){this._hljs=f(zl),this._nativeElement=f(he).nativeElement,this._sanitizer=f(Di),Yn({write:()=>{let e=this.code();this.setTextContent(e||""),e&&this.highlightElement(e)}}),Yn({write:()=>{let e=this.highlightResult();this.setInnerHTML(e?.value),this.highlighted.emit(e)}})}setTextContent(e){requestAnimationFrame(()=>this._nativeElement.textContent=e)}setInnerHTML(e){requestAnimationFrame(()=>this._nativeElement.innerHTML=Wl(this._sanitizer.sanitize(ge.HTML,e)||""))}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275dir=R({type:t})}}return t})(),ag=(()=>{class t extends Pn{constructor(){super(...arguments),this.code=Y(null,{alias:"highlight"}),this.highlightResult=oe(null),this.language=Y.required(),this.ignoreIllegals=Y(void 0,{transform:P}),this.highlighted=zn()}highlightElement(e){return $(this,null,function*(){let n=yield this._hljs.highlight(e,{language:this.language(),ignoreIllegals:this.ignoreIllegals()});this.highlightResult.set(n)})}static{this.\u0275fac=(()=>{let e;return function(r){return(e||(e=I(t)))(r||t)}})()}static{this.\u0275dir=R({type:t,selectors:[["","highlight",""]],hostVars:2,hostBindings:function(n,r){n&2&&rn("hljs",!0)},inputs:{code:[1,"highlight","code"],language:[1,"language"],ignoreIllegals:[1,"ignoreIllegals"]},outputs:{highlighted:"highlighted"},features:[X([{provide:Pn,useExisting:t}]),K]})}}return t})(),lg=(()=>{class t extends Pn{constructor(){super(...arguments),this.code=Y(null,{alias:"highlightAuto"}),this.highlightResult=oe(null),this.languages=Y(),this.highlighted=zn()}highlightElement(e){return $(this,null,function*(){let n=yield this._hljs.highlightAuto(e,this.languages());this.highlightResult.set(n)})}static{this.\u0275fac=(()=>{let e;return function(r){return(e||(e=I(t)))(r||t)}})()}static{this.\u0275dir=R({type:t,selectors:[["","highlightAuto",""]],hostVars:2,hostBindings:function(n,r){n&2&&rn("hljs",!0)},inputs:{code:[1,"highlightAuto","code"],languages:[1,"languages"]},outputs:{highlighted:"highlighted"},features:[X([{provide:Pn,useExisting:t}]),K]})}}return t})();export{E as a,be as b,Ds as c,qe as d,Cr as e,_r as f,ws as g,ni as h,xs as i,Hr as j,ii as k,ri as l,oi as m,Bs as n,js as o,Hs as p,ve as q,ke as r,du as s,hi as t,sa as u,$e as v,xt as w,po as x,fo as y,Pa as z,xa as A,$d as B,Di as C,bo as D,Bt as E,Hd as F,Be as G,zd as H,Do as I,Ba as J,Ua as K,Vd as L,ja as M,vo as N,Wd as O,Gd as P,Kd as Q,Yd as R,Ha as S,za as T,Zd as U,qd as V,Eo as W,Xd as X,wi as Y,Jd as Z,Qd as _,ep as $,tp as aa,wo as ba,Ci as ca,np as da,ip as ea,_i as fa,rp as ga,Wa as ha,op as ia,sp as ja,ap as ka,lp as la,cp as ma,up as na,_o as oa,re as pa,qa,C as ra,On as sa,Ai as ta,fp as ua,gp as va,ie as wa,Fn as xa,mp as ya,bp as za,jt as Aa,U as Ba,Mp as Ca,Np as Da,Pp as Ea,xp as Fa,kp as Ga,$p as Ha,Mo as Ia,Re as Ja,Bp as Ka,Hp as La,q as Ma,Fi as Na,yh as Oa,fe as Pa,Mi as Qa,Vo as Ra,Wo as Sa,Li as Ta,zo as Ua,Go as Va,Ko as Wa,Zo as Xa,Sf as Ya,Ul as Za,Kf as _a,Jo as $a,Zf as ab,qf as bb,Xf as cb,es as db,Hl as eb,ag as fb,lg as gb};
