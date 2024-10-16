import{a as z,k as me,l as ge,n as ve}from"./chunk-TPSOE2TZ.js";import{$a as W,Aa as d,Ba as a,Bb as pe,Db as x,Eb as f,Fa as H,Ia as F,Ja as V,N as R,Na as L,P as j,R as p,Ra as I,Ta as ae,Ua as o,Va as l,Wa as h,Y as re,Z as B,_ as m,_a as S,a as u,b as c,da as se,eb as g,fb as $,ga as oe,h as ee,hb as le,ib as ue,jb as ce,k as te,ka as E,kb as q,lb as de,na as U,ob as he,p as ie,v as ne,vb as fe}from"./chunk-2PS5DWIT.js";var Ae=(()=>{class i{constructor(t,n){this._renderer=t,this._elementRef=n,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(t,n){this._renderer.setProperty(this._elementRef.nativeElement,t,n)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static{this.\u0275fac=function(n){return new(n||i)(a(H),a(U))}}static{this.\u0275dir=m({type:i})}}return i})(),He=(()=>{class i extends Ae{static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=oe(i)))(r||i)}})()}static{this.\u0275dir=m({type:i,features:[V]})}}return i})(),we=new p("");var Le={provide:we,useExisting:R(()=>G),multi:!0};function We(){let i=z()?z().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var $e=new p(""),G=(()=>{class i extends Ae{constructor(t,n,r){super(t,n),this._compositionMode=r,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!We())}writeValue(t){let n=t??"";this.setProperty("value",n)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static{this.\u0275fac=function(n){return new(n||i)(a(H),a(U),a($e,8))}}static{this.\u0275dir=m({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&S("input",function(C){return r._handleInput(C.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(C){return r._compositionEnd(C.target.value)})},features:[q([Le]),V]})}}return i})();var qe=new p(""),ze=new p("");function Ee(i){return i!=null}function Fe(i){return he(i)?te(i):i}function Ie(i){let e={};return i.forEach(t=>{e=t!=null?u(u({},e),t):e}),Object.keys(e).length===0?null:e}function Se(i,e){return e.map(t=>t(i))}function Ze(i){return!i.validate}function xe(i){return i.map(e=>Ze(e)?e:t=>e.validate(t))}function Ye(i){if(!i)return null;let e=i.filter(Ee);return e.length==0?null:function(t){return Ie(Se(t,e))}}function Oe(i){return i!=null?Ye(xe(i)):null}function Xe(i){if(!i)return null;let e=i.filter(Ee);return e.length==0?null:function(t){let n=Se(t,e).map(Fe);return ne(n).pipe(ie(Ie))}}function Ne(i){return i!=null?Xe(xe(i)):null}function _e(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function Ke(i){return i._rawValidators}function Je(i){return i._rawAsyncValidators}function Z(i){return i?Array.isArray(i)?i:[i]:[]}function N(i,e){return Array.isArray(i)?i.includes(e):i===e}function ye(i,e){let t=Z(e);return Z(i).forEach(r=>{N(t,r)||t.push(r)}),t}function Ce(i,e){return Z(e).filter(t=>!N(i,t))}var P=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Oe(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Ne(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},Y=class extends P{get formDirective(){return null}get path(){return null}},w=class extends P{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},X=class{constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Qe={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Ht=c(u({},Qe),{"[class.ng-submitted]":"isSubmitted"}),Pe=(()=>{class i extends X{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(a(w,2))}}static{this.\u0275dir=m({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&ae("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[V]})}}return i})();var b="VALID",O="INVALID",v="PENDING",D="DISABLED",y=class{},k=class extends y{constructor(e,t){super(),this.value=e,this.source=t}},M=class extends y{constructor(e,t){super(),this.pristine=e,this.source=t}},A=class extends y{constructor(e,t){super(),this.touched=e,this.source=t}},_=class extends y{constructor(e,t){super(),this.status=e,this.source=t}};function et(i){return(T(i)?i.validators:i)||null}function tt(i){return Array.isArray(i)?Oe(i):i||null}function it(i,e){return(T(e)?e.asyncValidators:i)||null}function nt(i){return Array.isArray(i)?Ne(i):i||null}function T(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}var K=class{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=x(()=>this.statusReactive()),this.statusReactive=F(void 0),this._pristine=x(()=>this.pristineReactive()),this.pristineReactive=F(!0),this._touched=x(()=>this.touchedReactive()),this.touchedReactive=F(!1),this._events=new ee,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return f(this.statusReactive)}set status(e){f(()=>this.statusReactive.set(e))}get valid(){return this.status===b}get invalid(){return this.status===O}get pending(){return this.status==v}get disabled(){return this.status===D}get enabled(){return this.status!==D}get pristine(){return f(this.pristineReactive)}set pristine(e){f(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return f(this.touchedReactive)}set touched(e){f(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(ye(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(ye(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Ce(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Ce(e,this._rawAsyncValidators))}hasValidator(e){return N(this._rawValidators,e)}hasAsyncValidator(e){return N(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(c(u({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new A(!0,n))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:n})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n),t&&e.emitEvent!==!1&&this._events.next(new A(!1,n))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(c(u({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new M(!1,n))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),t&&e.emitEvent!==!1&&this._events.next(new M(!0,n))}markAsPending(e={}){this.status=v;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new _(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(c(u({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=D,this.errors=null,this._forEachChild(r=>{r.disable(c(u({},e),{onlySelf:!0}))}),this._updateValue();let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new k(this.value,n)),this._events.next(new _(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(c(u({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=b,this._forEachChild(n=>{n.enable(c(u({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(c(u({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===b||this.status===v)&&this._runAsyncValidator(n,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new k(this.value,t)),this._events.next(new _(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(c(u({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?D:b}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=v,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let n=Fe(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((n,r)=>n&&n._find(r),this)}getError(e,t){let n=t?this.get(t):this;return n&&n.errors?n.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,n){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||n)&&this._events.next(new _(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,n)}_initObservables(){this.valueChanges=new E,this.statusChanges=new E}_calculateStatus(){return this._allControlsDisabled()?D:this.errors?O:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(v)?v:this._anyControlsHaveStatus(O)?O:b}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new M(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new A(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){T(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=tt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=nt(this._rawAsyncValidators)}};var ke=new p("CallSetDisabledState",{providedIn:"root",factory:()=>J}),J="always";function rt(i,e){return[...e.path,i]}function st(i,e,t=J){at(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),lt(i,e),ct(i,e),ut(i,e),ot(i,e)}function Ve(i,e){i.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function ot(i,e){if(e.valueAccessor.setDisabledState){let t=n=>{e.valueAccessor.setDisabledState(n)};i.registerOnDisabledChange(t),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(t)})}}function at(i,e){let t=Ke(i);e.validator!==null?i.setValidators(_e(t,e.validator)):typeof t=="function"&&i.setValidators([t]);let n=Je(i);e.asyncValidator!==null?i.setAsyncValidators(_e(n,e.asyncValidator)):typeof n=="function"&&i.setAsyncValidators([n]);let r=()=>i.updateValueAndValidity();Ve(e._rawValidators,r),Ve(e._rawAsyncValidators,r)}function lt(i,e){e.valueAccessor.registerOnChange(t=>{i._pendingValue=t,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&Ge(i,e)})}function ut(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&Ge(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function Ge(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function ct(i,e){let t=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};i.registerOnChange(t),e._registerOnDestroy(()=>{i._unregisterOnChange(t)})}function dt(i,e){if(!i.hasOwnProperty("model"))return!1;let t=i.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function ht(i){return Object.getPrototypeOf(i.constructor)===He}function ft(i,e){if(!e)return null;Array.isArray(e);let t,n,r;return e.forEach(s=>{s.constructor===G?t=s:ht(s)?n=s:r=s}),r||n||t||null}function be(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function De(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var pt=class extends K{constructor(e=null,t,n){super(et(t),it(n,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),T(t)&&(t.nonNullable||t.initialValueIsDefault)&&(De(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){be(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){be(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){De(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var mt={provide:w,useExisting:R(()=>Q)},Me=Promise.resolve(),Q=(()=>{class i extends w{constructor(t,n,r,s,C,Be){super(),this._changeDetectorRef=C,this.callSetDisabledState=Be,this.control=new pt,this._registered=!1,this.name="",this.update=new E,this._parent=t,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=ft(this,s)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let n=t.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),dt(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){st(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){Me.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let n=t.isDisabled.currentValue,r=n!==0&&pe(n);Me.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?rt(t,this._parent):[t]}static{this.\u0275fac=function(n){return new(n||i)(a(Y,9),a(qe,10),a(ze,10),a(we,10),a(fe,8),a(ke,8))}}static{this.\u0275dir=m({type:i,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[q([mt]),V,se]})}}return i})();var gt=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=B({type:i})}static{this.\u0275inj=j({})}}return i})();var Te=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:ke,useValue:t.callSetDisabledState??J}]}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=B({type:i})}static{this.\u0275inj=j({imports:[gt]})}}return i})();var Re={Chatbotresponsesdetails:[{key:"hello",value:"Hi there! How can I help you today?"},{key:"how are you",value:"I'm doing well, thank you! How can I assist you?"},{key:"appointment",value:"To schedule an appointment, please call [phone number] or visit our website."},{key:"symptoms",value:"Please describe your symptoms in detail so I can provide appropriate guidance."},{key:"doctor",value:"Would you like to speak with a doctor?"},{key:"insurance",value:"Please provide your insurance information so we can verify coverage."},{key:"costs",value:"The cost of services may vary depending on your specific needs and insurance coverage. Please contact our billing department for more information."},{key:"location",value:"Our hospital is located at [address]. You can also find us on [map link]."},{key:"hours",value:"Our operating hours are [opening hours]. We are closed on [closed days]."},{key:"opd",value:"Our OPD timings are [opening hours]. Please note that there may be variations during holidays and special occasions."},{key:"opd time",value:"Our OPD timings are [opening hours]. Please note that there may be variations during holidays and special occasions."},{key:"specialties",value:"We offer a wide range of specialties, including [list of specialties]. Please let me know if you have a specific area of interest."},{key:"emergency",value:"In case of a medical emergency, please dial our emergency number [emergency number] or visit our emergency department."},{key:"appointments",value:"To schedule an appointment, please call [phone number] or visit our website."},{key:"fees",value:"Our fees vary depending on the services provided. Please contact our billing department for more information."},{key:"facilities",value:"Our hospital offers state-of-the-art facilities, including [list of facilities]."},{key:"doctors",value:"We have a team of experienced doctors specializing in various fields. Please let me know if you have a specific doctor in mind."},{key:"when should i see a doctor",value:"You should see a doctor if you experience any concerning symptoms or changes in your health."},{key:"second opinion",value:"We encourage patients to seek a second opinion if they have any concerns or questions about their diagnosis or treatment plan."},{key:"insurance coverage",value:"Please contact your insurance provider to verify coverage for specific procedures or treatments."},{key:"payment options",value:"We accept [list of payment options], including cash, credit cards, and insurance. Please contact our billing department for more information."},{key:"visiting hours",value:"Our visiting hours are [visiting hours]. Please check with the nursing station for any specific restrictions."},{key:"complaints",value:"If you have any complaints or concerns, please contact our customer service department at [phone number] or [email address]."}]};function _t(i,e){if(i&1&&(o(0,"div",21),h(1,"img",22),o(2,"div")(3,"p",23),g(4),l()()()),i&2){let t=W().$implicit;d(4),$(t.messages)}}function yt(i,e){if(i&1&&(o(0,"div",24)(1,"div")(2,"p",25),g(3),l()(),h(4,"img",26),l()),i&2){let t=W().$implicit;d(3),$(t.messages)}}function Ct(i,e){if(i&1&&(o(0,"div"),L(1,_t,5,1,"div",19)(2,yt,5,1,"div",20),l()),i&2){let t=e.$implicit;d(),I("ngIf",t.user),d(),I("ngIf",!t.user)}}var je=class i{messages=[{messages:"Hello, how can I help you today?",user:!0},{messages:"I'm here to answer your questions and provide assistance.",user:!0}];newMessage="";Chatbotresponses=Re;sendMessage(){var e={messages:this.newMessage,user:!1};this.messages.push(e);let t=this.Chatbotresponses.Chatbotresponsesdetails.find(n=>this.calculateMatchPercentage(n.key,this.newMessage)||this.calculateMatchPercentage(this.newMessage,n.key));if(t){var e={messages:t.value,user:!0};this.messages.push(e)}else this.messages.push({messages:"I couldn't understand your message. Please try rephrasing.",user:!0});this.newMessage=""}calculateMatchPercentage(e,t){return!!e.includes(t)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=re({type:i,selectors:[["app-chatbot"]],standalone:!0,features:[de],decls:23,vars:2,consts:[[1,"container","py-5"],[1,"row","d-flex","justify-content-center"],[1,"col-md-10","col-lg-8","col-xl-6"],["id","chat2",1,"card"],[1,"card-header","d-flex","justify-content-between","align-items-center","p-3"],[1,"mb-0"],["type","button","data-mdb-button-init","","data-mdb-ripple-init","","data-mdb-ripple-color","dark",1,"btn","btn-primary","btn-sm"],["data-mdb-perfect-scrollbar-init","",1,"card-body",2,"position","relative","height","400px","overflow","auto"],[4,"ngFor","ngForOf"],[1,"card-footer","text-muted","d-flex","justify-content-start","align-items-center","p-3"],["src","https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp","alt","avatar 3",2,"width","40px","height","100%"],["type","text","id","exampleFormControlInput1","id","myInput","placeholder","Type message",1,"form-control","form-control-lg",3,"ngModelChange","ngModel"],["href","#!",1,"ms-1","text-muted"],[1,"fas","fa-paperclip"],["href","#!",1,"ms-3","text-muted"],[1,"fas","fa-smile"],["href","#!",1,"ms-3"],[1,"fas","fa-paper-plane"],[3,"click"],["class","d-flex flex-row justify-content-start",4,"ngIf"],["class","d-flex flex-row justify-content-end mb-4 pt-1",4,"ngIf"],[1,"d-flex","flex-row","justify-content-start"],["src","favicon.jpeg","alt","avatar 1",2,"width","45px","height","100%"],[1,"small","p-2","ms-3","mb-1","rounded-3","bg-body-tertiary"],[1,"d-flex","flex-row","justify-content-end","mb-4","pt-1"],[1,"small","p-2","me-3","mb-1","text-white","rounded-3","bg-primary"],["src","https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp","alt","avatar 1",2,"width","45px","height","100%"]],template:function(t,n){t&1&&(o(0,"section")(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"h5",5),g(7,"Chat"),l(),o(8,"button",6),g(9,"Let's Chat App"),l()(),o(10,"div",7),L(11,Ct,3,2,"div",8),l(),o(12,"div",9),h(13,"img",10),o(14,"input",11),ce("ngModelChange",function(s){return ue(n.newMessage,s)||(n.newMessage=s),s}),l(),o(15,"a",12),h(16,"i",13),l(),o(17,"a",14),h(18,"i",15),l(),o(19,"a",16),h(20,"i",17),l(),o(21,"button",18),S("click",function(){return n.sendMessage()}),g(22,"Send"),l()()()()()()()),t&2&&(d(11),I("ngForOf",n.messages),d(3),le("ngModel",n.newMessage))},dependencies:[ve,me,ge,Te,G,Pe,Q],styles:['#chat2[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{border-color:transparent}#chat2[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus{border-color:transparent;box-shadow:inset 0 0 0 1px transparent}.divider[_ngcontent-%COMP%]:after, .divider[_ngcontent-%COMP%]:before{content:"";flex:1;height:1px;background:#eee}']})};export{je as ChatbotComponent};
