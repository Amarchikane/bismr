import './polyfills.server.mjs';
import{Aa as x,Ca as m,Da as U,Ea as z,Fa as V,I as a,J as M,L as f,Ma as j,N as d,O as u,T as L,U as g,Z as B,ca as O,ea as R,fa as T,ha as p,kb as y,la as E,lb as G,mb as H,oa as P,pa as N,sb as D,ta as k,tb as w,wa as $,ya as l}from"./chunk-QPWC3QPD.mjs";var q=null;function A(){return q}function nt(n){q??=n}var Y=class{};var C=new f(""),v=(()=>{class n{historyGo(e){throw new Error("")}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275prov=a({token:n,factory:()=>u(ee),providedIn:"platform"})}}return n})(),it=new f(""),ee=(()=>{class n extends v{constructor(){super(),this._doc=u(C),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return A().getBaseHref(this._doc)}onPopState(e){let t=A().getGlobalEventTarget(this._doc,"window");return t.addEventListener("popstate",e,!1),()=>t.removeEventListener("popstate",e)}onHashChange(e){let t=A().getGlobalEventTarget(this._doc,"window");return t.addEventListener("hashchange",e,!1),()=>t.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,t,i){this._history.pushState(e,t,i)}replaceState(e,t,i){this._history.replaceState(e,t,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275prov=a({token:n,factory:()=>new n,providedIn:"platform"})}}return n})();function I(n,r){if(n.length==0)return r;if(r.length==0)return n;let e=0;return n.endsWith("/")&&e++,r.startsWith("/")&&e++,e==2?n+r.substring(1):e==1?n+r:n+"/"+r}function Z(n){let r=n.match(/#|\?|$/),e=r&&r.index||n.length,t=e-(n[e-1]==="/"?1:0);return n.slice(0,t)+n.slice(e)}function c(n){return n&&n[0]!=="?"?"?"+n:n}var F=(()=>{class n{historyGo(e){throw new Error("")}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275prov=a({token:n,factory:()=>u(te),providedIn:"root"})}}return n})(),J=new f(""),te=(()=>{class n extends F{constructor(e,t){super(),this._platformLocation=e,this._removeListenerFns=[],this._baseHref=t??this._platformLocation.getBaseHrefFromDOM()??u(C).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return I(this._baseHref,e)}path(e=!1){let t=this._platformLocation.pathname+c(this._platformLocation.search),i=this._platformLocation.hash;return i&&e?`${t}${i}`:t}pushState(e,t,i,s){let o=this.prepareExternalUrl(i+c(s));this._platformLocation.pushState(e,t,o)}replaceState(e,t,i,s){let o=this.prepareExternalUrl(i+c(s));this._platformLocation.replaceState(e,t,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static{this.\u0275fac=function(t){return new(t||n)(d(v),d(J,8))}}static{this.\u0275prov=a({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})(),rt=(()=>{class n extends F{constructor(e,t){super(),this._platformLocation=e,this._baseHref="",this._removeListenerFns=[],t!=null&&(this._baseHref=t)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let t=this._platformLocation.hash??"#";return t.length>0?t.substring(1):t}prepareExternalUrl(e){let t=I(this._baseHref,e);return t.length>0?"#"+t:t}pushState(e,t,i,s){let o=this.prepareExternalUrl(i+c(s));o.length==0&&(o=this._platformLocation.pathname),this._platformLocation.pushState(e,t,o)}replaceState(e,t,i,s){let o=this.prepareExternalUrl(i+c(s));o.length==0&&(o=this._platformLocation.pathname),this._platformLocation.replaceState(e,t,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static{this.\u0275fac=function(t){return new(t||n)(d(v),d(J,8))}}static{this.\u0275prov=a({token:n,factory:n.\u0275fac})}}return n})(),ne=(()=>{class n{constructor(e){this._subject=new R,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=e;let t=this._locationStrategy.getBaseHref();this._basePath=se(Z(W(t))),this._locationStrategy.onPopState(i=>{this._subject.emit({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,t=""){return this.path()==this.normalize(e+c(t))}normalize(e){return n.stripTrailingSlash(re(this._basePath,W(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,t="",i=null){this._locationStrategy.pushState(i,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+c(t)),i)}replaceState(e,t="",i=null){this._locationStrategy.replaceState(i,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+c(t)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(t=>{this._notifyUrlChangeListeners(t.url,t.state)}),()=>{let t=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(t,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",t){this._urlChangeListeners.forEach(i=>i(e,t))}subscribe(e,t,i){return this._subject.subscribe({next:e,error:t,complete:i})}static{this.normalizeQueryParams=c}static{this.joinWithSlash=I}static{this.stripTrailingSlash=Z}static{this.\u0275fac=function(t){return new(t||n)(d(F))}}static{this.\u0275prov=a({token:n,factory:()=>ie(),providedIn:"root"})}}return n})();function ie(){return new ne(d(F))}function re(n,r){if(!n||!r.startsWith(n))return r;let e=r.substring(n.length);return e===""||["/",";","?","#"].includes(e[0])?e:r}function W(n){return n.replace(/\/index.html$/,"")}function se(n){if(new RegExp("^(https?:)?//").test(n)){let[,e]=n.split(/\/\/[^\/]+/);return e}return n}function st(n,r){r=encodeURIComponent(r);for(let e of n.split(";")){let t=e.indexOf("="),[i,s]=t==-1?[e,""]:[e.slice(0,t),e.slice(t+1)];if(i.trim()===r)return decodeURIComponent(s)}return null}var S=class{constructor(r,e,t,i){this.$implicit=r,this.ngForOf=e,this.index=t,this.count=i}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},ot=(()=>{class n{set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}constructor(e,t,i){this._viewContainer=e,this._template=t,this._differs=i,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let e=this._ngForOf;if(!this._differ&&e)if(0)try{}catch{}else this._differ=this._differs.find(e).create(this.ngForTrackBy)}if(this._differ){let e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){let t=this._viewContainer;e.forEachOperation((i,s,o)=>{if(i.previousIndex==null)t.createEmbeddedView(this._template,new S(i.item,this._ngForOf,-1,-1),o===null?void 0:o);else if(o==null)t.remove(s===null?void 0:s);else if(s!==null){let h=t.get(s);t.move(h,o),K(h,i)}});for(let i=0,s=t.length;i<s;i++){let h=t.get(i).context;h.index=i,h.count=s,h.ngForOf=this._ngForOf}e.forEachIdentityChange(i=>{let s=t.get(i.currentIndex);K(s,i)})}static ngTemplateContextGuard(e,t){return!0}static{this.\u0275fac=function(t){return new(t||n)(l(U),l(x),l(G))}}static{this.\u0275dir=g({type:n,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0})}}return n})();function K(n,r){n.context.$implicit=r.item}var ut=(()=>{class n{constructor(e,t,i){this._ngEl=e,this._differs=t,this._renderer=i,this._ngStyle=null,this._differ=null}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,t){let[i,s]=e.split("."),o=i.indexOf("-")===-1?void 0:$.DashCase;t!=null?this._renderer.setStyle(this._ngEl.nativeElement,i,s?`${t}${s}`:t,o):this._renderer.removeStyle(this._ngEl.nativeElement,i,o)}_applyChanges(e){e.forEachRemovedItem(t=>this._setStyle(t.key,null)),e.forEachAddedItem(t=>this._setStyle(t.key,t.currentValue)),e.forEachChangedItem(t=>this._setStyle(t.key,t.currentValue))}static{this.\u0275fac=function(t){return new(t||n)(l(p),l(H),l(m))}}static{this.\u0275dir=g({type:n,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"},standalone:!0})}}return n})();var at=(()=>{class n{static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275mod=L({type:n})}static{this.\u0275inj=M({})}}return n})(),oe="browser",ue="server";function ae(n){return n===oe}function ce(n){return n===ue}var ct=(()=>{class n{static{this.\u0275prov=a({token:n,providedIn:"root",factory:()=>ae(u(E))?new b(u(C),window):new _})}}return n})(),b=class{constructor(r,e){this.document=r,this.window=e,this.offset=()=>[0,0]}setOffset(r){Array.isArray(r)?this.offset=()=>r:this.offset=r}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(r){this.window.scrollTo(r[0],r[1])}scrollToAnchor(r){let e=de(this.document,r);e&&(this.scrollToElement(e),e.focus())}setHistoryScrollRestoration(r){this.window.history.scrollRestoration=r}scrollToElement(r){let e=r.getBoundingClientRect(),t=e.left+this.window.pageXOffset,i=e.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo(t-s[0],i-s[1])}};function de(n,r){let e=n.getElementById(r)||n.getElementsByName(r)[0];if(e)return e;if(typeof n.createTreeWalker=="function"&&n.body&&typeof n.body.attachShadow=="function"){let t=n.createTreeWalker(n.body,NodeFilter.SHOW_ELEMENT),i=t.currentNode;for(;i;){let s=i.shadowRoot;if(s){let o=s.getElementById(r)||s.querySelector(`[name="${r}"]`);if(o)return o}i=t.nextNode()}}return null}var _=class{setOffset(r){}getScrollPosition(){return[0,0]}scrollToPosition(r){}scrollToAnchor(r){}setHistoryScrollRestoration(r){}},X=class{};var Q=n=>n.src,le=new f("",{providedIn:"root",factory:()=>Q});var he=new f("NG_OPTIMIZED_PRELOADED_IMAGES",{providedIn:"root",factory:()=>new Set}),fe=(()=>{class n{constructor(){this.preloadedImages=u(he),this.document=u(C)}createPreloadLinkTag(e,t,i,s){if(this.preloadedImages.has(t))return;this.preloadedImages.add(t);let o=e.createElement("link");e.setAttribute(o,"as","image"),e.setAttribute(o,"href",t),e.setAttribute(o,"rel","preload"),e.setAttribute(o,"fetchpriority","high"),s&&e.setAttribute(o,"imageSizes",s),i&&e.setAttribute(o,"imageSrcset",i),e.appendChild(this.document.head,o)}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275prov=a({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var De=/^((\s*\d+w\s*(,|$)){1,})$/;var ge=[1,2],pe=640;var me=1920,Ce=1080;var dt=(()=>{class n{constructor(){this.imageLoader=u(le),this.config=Fe(u(N)),this.renderer=u(m),this.imgElement=u(p).nativeElement,this.injector=u(O),this.isServer=ce(u(E)),this.preloadLinkCreator=u(fe),this.lcpObserver=null,this._renderedSrc=null,this.priority=!1,this.disableOptimizedSrcset=!1,this.fill=!1}ngOnInit(){z("NgOptimizedImage"),this.placeholder&&this.removePlaceholderOnLoad(this.imgElement),this.setHostAttributes()}setHostAttributes(){this.fill?this.sizes||="100vw":(this.setHostAttribute("width",this.width.toString()),this.setHostAttribute("height",this.height.toString())),this.setHostAttribute("loading",this.getLoadingBehavior()),this.setHostAttribute("fetchpriority",this.getFetchPriority()),this.setHostAttribute("ng-img","true");let e=this.updateSrcAndSrcset();this.sizes&&this.setHostAttribute("sizes",this.sizes),this.isServer&&this.priority&&this.preloadLinkCreator.createPreloadLinkTag(this.renderer,this.getRewrittenSrc(),e,this.sizes)}ngOnChanges(e){if(e.ngSrc&&!e.ngSrc.isFirstChange()){let t=this._renderedSrc;this.updateSrcAndSrcset(!0);let i=this._renderedSrc;this.lcpObserver!==null&&t&&i&&t!==i&&this.injector.get(T).runOutsideAngular(()=>{this.lcpObserver?.updateImage(t,i)})}}callImageLoader(e){let t=e;return this.loaderParams&&(t.loaderParams=this.loaderParams),this.imageLoader(t)}getLoadingBehavior(){return!this.priority&&this.loading!==void 0?this.loading:this.priority?"eager":"lazy"}getFetchPriority(){return this.priority?"high":"auto"}getRewrittenSrc(){if(!this._renderedSrc){let e={src:this.ngSrc};this._renderedSrc=this.callImageLoader(e)}return this._renderedSrc}getRewrittenSrcset(){let e=De.test(this.ngSrcset);return this.ngSrcset.split(",").filter(i=>i!=="").map(i=>{i=i.trim();let s=e?parseFloat(i):parseFloat(i)*this.width;return`${this.callImageLoader({src:this.ngSrc,width:s})} ${i}`}).join(", ")}getAutomaticSrcset(){return this.sizes?this.getResponsiveSrcset():this.getFixedSrcset()}getResponsiveSrcset(){let{breakpoints:e}=this.config,t=e;return this.sizes?.trim()==="100vw"&&(t=e.filter(s=>s>=pe)),t.map(s=>`${this.callImageLoader({src:this.ngSrc,width:s})} ${s}w`).join(", ")}updateSrcAndSrcset(e=!1){e&&(this._renderedSrc=null);let t=this.getRewrittenSrc();this.setHostAttribute("src",t);let i;return this.ngSrcset?i=this.getRewrittenSrcset():this.shouldGenerateAutomaticSrcset()&&(i=this.getAutomaticSrcset()),i&&this.setHostAttribute("srcset",i),i}getFixedSrcset(){return ge.map(t=>`${this.callImageLoader({src:this.ngSrc,width:this.width*t})} ${t}x`).join(", ")}shouldGenerateAutomaticSrcset(){let e=!1;return this.sizes||(e=this.width>me||this.height>Ce),!this.disableOptimizedSrcset&&!this.srcset&&this.imageLoader!==Q&&!e}generatePlaceholder(e){let{placeholderResolution:t}=this.config;return e===!0?`url(${this.callImageLoader({src:this.ngSrc,width:t,isPlaceholder:!0})})`:typeof e=="string"?`url(${e})`:null}shouldBlurPlaceholder(e){return!e||!e.hasOwnProperty("blur")?!0:!!e.blur}removePlaceholderOnLoad(e){let t=()=>{let o=this.injector.get(y);i(),s(),this.placeholder=!1,o.markForCheck()},i=this.renderer.listen(e,"load",t),s=this.renderer.listen(e,"error",t)}ngOnDestroy(){}setHostAttribute(e,t){this.renderer.setAttribute(this.imgElement,e,t)}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275dir=g({type:n,selectors:[["img","ngSrc",""]],hostVars:18,hostBindings:function(t,i){t&2&&j("position",i.fill?"absolute":null)("width",i.fill?"100%":null)("height",i.fill?"100%":null)("inset",i.fill?"0":null)("background-size",i.placeholder?"cover":null)("background-position",i.placeholder?"50% 50%":null)("background-repeat",i.placeholder?"no-repeat":null)("background-image",i.placeholder?i.generatePlaceholder(i.placeholder):null)("filter",i.placeholder&&i.shouldBlurPlaceholder(i.placeholderConfig)?"blur(15px)":null)},inputs:{ngSrc:[2,"ngSrc","ngSrc",Ee],ngSrcset:"ngSrcset",sizes:"sizes",width:[2,"width","width",w],height:[2,"height","height",w],loading:"loading",priority:[2,"priority","priority",D],loaderParams:"loaderParams",disableOptimizedSrcset:[2,"disableOptimizedSrcset","disableOptimizedSrcset",D],fill:[2,"fill","fill",D],placeholder:[2,"placeholder","placeholder",ye],placeholderConfig:"placeholderConfig",src:"src",srcset:"srcset"},standalone:!0,features:[V,B]})}}return n})();function Fe(n){let r={};return n.breakpoints&&(r.breakpoints=n.breakpoints.sort((e,t)=>e-t)),Object.assign({},P,n,r)}function Ee(n){return typeof n=="string"?n:k(n)}function ye(n){return typeof n=="string"&&n!=="true"&&n!=="false"&&n!==""?n:D(n)}export{A as a,nt as b,Y as c,C as d,v as e,it as f,F as g,J as h,te as i,rt as j,ne as k,st as l,ot as m,ut as n,at as o,oe as p,ue as q,ce as r,ct as s,_ as t,X as u,dt as v};
