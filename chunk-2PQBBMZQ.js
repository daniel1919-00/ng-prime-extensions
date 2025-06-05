import{g as qe}from"./chunk-D3OC5O2V.js";import"./chunk-YCQTWVJE.js";import{A as Ke,f as Ne,g as ke,i as ze,j as Be,k as Ve,m as Le,n as Re,p as Qe,r as je,s as Ge,t as Xe,v as $e,x as He,z as Ze}from"./chunk-AE2ITTWN.js";import{Ia as Te,Ja as Ue,Ma as De,Na as Y,Pa as Ae,Za as ee,h as W,k as Me,l as Oe,m as J,p as Se,q as Ie,v as ae,x as Fe}from"./chunk-CWWQS4UP.js";import{$a as Ce,Db as O,Eb as c,Hb as re,Ia as _e,Ib as ve,J as te,Jb as k,Ka as s,Kb as z,Lb as B,Mb as r,N as me,Nb as b,Ob as be,Pa as S,Pb as H,Q as fe,T as X,Tb as Z,Ub as f,Vb as K,Wb as E,Xa as T,Xb as V,Y as ge,Yb as Ee,Z as C,_ as v,_a as he,aa as ne,bb as x,bc as L,cc as R,ec as q,f as de,ga as xe,hc as ye,ib as U,j as ue,jb as u,kb as $,lc as Pe,mb as P,mc as we,nb as w,ob as _,pb as ie,qb as oe,rb as le,sb as o,tb as l,ub as g,x as ce,xb as M,yb as I}from"./chunk-NX3CFXQX.js";import{f as N}from"./chunk-EQDQRRRY.js";var We={ts:`
import {Component, OnDestroy} from '@angular/core';
import {LibraryDocumentationComponent} from "../../components/library-documentation/library-documentation.component";
import {FormGroup, ReactiveFormsModule, UntypedFormBuilder} from "@angular/forms";
import {PxUploaderComponent} from "../../../../projects/px-uploader/src/lib/px-uploader.component";
import {PxEndpointConfig} from "../../../../projects/px-uploader/src/lib/px-uploader";
import {HttpClientModule} from "@angular/common/http";
import {DropdownModule} from "primeng/dropdown";
import {FloatLabelModule} from "primeng/floatlabel";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-px-uploader-docs',
  standalone: true,
    imports: [
        LibraryDocumentationComponent,
        ReactiveFormsModule,
        PxUploaderComponent,
        HttpClientModule,
        DropdownModule,
        FloatLabelModule
    ],
  templateUrl: './px-uploader-docs.component.html',
  styleUrl: './px-uploader-docs.component.scss'
})
export class PxUploaderDocsComponent implements OnDestroy {

    protected readonly pxUploaderCodeExample = pxUploaderCodeExample;
    protected form: FormGroup;
    saveEndpoint: PxEndpointConfig = {
        url: 'https://localhost/px-uploader'
    };

    private componentDestroyed$ = new Subject<void>();

    constructor(
        fb: UntypedFormBuilder
    ) {
        this.form = fb.group({
            label: ['My uploader'],
            multiple: ['0'],
            showImagePreview: ['1'],
            displayAs: ['list'],
            buttons: [0]
        });

        const storedFilters = localStorage.getItem('__px-uploader-config');
        if(storedFilters) {
            this.form.patchValue(JSON.parse(storedFilters));
        }

        this.form.valueChanges.pipe(takeUntil(this.componentDestroyed$)).subscribe(() => this.storeFilters());
    }

    private storeFilters() {
        localStorage.setItem('__px-uploader-config', JSON.stringify(this.form.value));
    }

    ngOnDestroy() {
        this.componentDestroyed$.next();
        this.componentDestroyed$.complete();
    }
}
    `,html:`
<h2>Configuration</h2>
<form [formGroup]="form" class="dm:grid dm:align-items-center">
    <p-floatlabel class="dm:col-12 dm:md:col-6 dm:lg:col-4 dm:xl:col-3">
        <input type="text" id="[label]" pInputText formControlName="label">
        <label for="[label]">[label]</label>
    </p-floatlabel>

    <p-floatlabel class="dm:col-12 dm:md:col-6 dm:lg:col-4 dm:xl:col-3">
        <p-select [style]="{'width': '100%'}" inputId="[multiple]"
                    [options]="[{value: '0', desc: 'false'}, {value: '1', desc: 'true'}]"
                    optionLabel="desc" optionValue="value" formControlName="multiple"></p-select>
        <label for="[multiple]">[multiple]</label>
    </p-floatlabel>

    <p-floatlabel class="dm:col-12 dm:md:col-6 dm:lg:col-4 dm:xl:col-3">
        <p-select [style]="{'width': '100%'}" inputId="[showImagePreview]"
                    [options]="[{value: '0', desc: 'false'}, {value: '1', desc: 'true'}]"
                    optionLabel="desc" optionValue="value" formControlName="showImagePreview"></p-select>
        <label for="[showImagePreview]">[showImagePreview]</label>
    </p-floatlabel>

    <p-floatlabel class="dm:col-12 dm:md:col-6 dm:lg:col-4 dm:xl:col-3">
        <p-select [style]="{'width': '100%'}" inputId="[displayAs]"
                    [options]="[{value: 'list', desc: 'list'}, {value: 'grid', desc: 'grid'}]"
                    optionLabel="desc" optionValue="value" formControlName="displayAs"></p-select>
        <label for="[displayAs]">[displayAs]</label>
    </p-floatlabel>

    <p-floatlabel class="dm:col-12 dm:md:col-6 dm:lg:col-4 dm:xl:col-3">
        <p-select [style]="{'width': '100%'}" inputId="[buttons]"
                  [options]="[{value: 0, desc: 'Use default buttons'}, {value: 1, desc: 'Use custom remove button template'}]"
                  optionLabel="desc" optionValue="value" formControlName="buttons"></p-select>
        <label for="[buttons]">[buttons]</label>
    </p-floatlabel>
</form>

<br>
<h2>Result</h2>
<px-uploader
    #uploader
    [saveEndpoint]="saveEndpoint"
    [label]="form.get('label')?.value"
    [multiple]="form.get('multiple')?.value === '1'"
    [showImagePreview]="form.get('showImagePreview')?.value === '1'"
    [displayAs]="form.get('displayAs')?.value || 'list'"
    [buttons]="form.get('buttons')?.value ? {removeFileButton: customRemoveButtonTemplate} : undefined"
></px-uploader>


<ng-template let-icon="icon" let-onClick="onClick" #customRemoveButtonTemplate>
    <p-button (onClick)="onClick()">
        My custom button
    </p-button>
</ng-template>
    `,styles:""};var h=function(t){return t[t.NO_FILES_MSG=0]="NO_FILES_MSG",t[t.UNKNOWN_ERROR=1]="UNKNOWN_ERROR",t[t.INVALID_EXTENSION=2]="INVALID_EXTENSION",t[t.MAX_SIZE_EXCEEDED=3]="MAX_SIZE_EXCEEDED",t[t.ALLOWED_EXTENSIONS=4]="ALLOWED_EXTENSIONS",t[t.MAX_FILE_SIZE=5]="MAX_FILE_SIZE",t[t.IMAGE_SIZE_CHECK_FAILED=6]="IMAGE_SIZE_CHECK_FAILED",t[t.IMAGE_SIZE_CHECK_TEXT=7]="IMAGE_SIZE_CHECK_TEXT",t}(h||{}),Je=new fe("px-uploader i18n strings");var Ye=(()=>{class t{constructor(){this.units=X(Y).translation.fileSizeTypes||["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}transform(e,i=1024,n=2){let a=this.units;if(Math.abs(e)<i)return e+""+a[0];let d=a.length-1,m=0,y=10**1;do e/=i,++m;while(Math.round(Math.abs(e)*y)/y>=i&&m<d);return e.toFixed(n)+" "+a[m]}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275pipe=he({name:"pxFileSize",type:t,pure:!0})}}return t})();var rt=["content"],at=(t,p)=>({"p-progressbar p-component":!0,"p-progressbar-determinate":t,"p-progressbar-indeterminate":p}),pt=t=>({$implicit:t});function st(t,p){if(t&1&&(o(0,"div"),r(1),l()),t&2){let e=c(2);$("display",e.value!=null&&e.value!==0?"flex":"none"),U("data-pc-section","label"),s(),H("",e.value,"",e.unit,"")}}function dt(t,p){t&1&&M(0)}function ut(t,p){if(t&1&&(o(0,"div",3)(1,"div",4),x(2,st,2,5,"div",5)(3,dt,1,0,"ng-container",6),l()()),t&2){let e=c();w(e.valueStyleClass),$("width",e.value+"%")("background",e.color),u("ngClass","p-progressbar-value p-progressbar-value-animate"),U("data-pc-section","value"),s(2),u("ngIf",e.showValue&&!e.contentTemplate&&!e._contentTemplate),s(),u("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",K(11,pt,e.value))}}function ct(t,p){if(t&1&&(o(0,"div",7),g(1,"div",8),l()),t&2){let e=c();w(e.valueStyleClass),u("ngClass","p-progressbar-indeterminate-container"),U("data-pc-section","container"),s(),$("background",e.color),U("data-pc-section","value")}}var mt=({dt:t})=>`
.p-progressbar {
    position: relative;
    overflow: hidden;
    height: ${t("progressbar.height")};
    background: ${t("progressbar.background")};
    border-radius: ${t("progressbar.border.radius")};
}

.p-progressbar-value {
    margin: 0;
    background: ${t("progressbar.value.background")};
}

.p-progressbar-label {
    color: ${t("progressbar.label.color")};
    font-size: ${t("progressbar.label.font.size")};
    font-weight: ${t("progressbar.label.font.weight")};
}

.p-progressbar-determinate .p-progressbar-value {
    height: 100%;
    width: 0%;
    position: absolute;
    display: none;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: width 1s ease-in-out;
}

.p-progressbar-determinate .p-progressbar-label {
    display: inline-flex;
}

.p-progressbar-indeterminate .p-progressbar-value::before {
    content: "";
    position: absolute;
    background: inherit;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    will-change: inset-inline-start, inset-inline-end;
    animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
}

.p-progressbar-indeterminate .p-progressbar-value::after {
    content: "";
    position: absolute;
    background: inherit;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    will-change: inset-inline-start, inset-inline-end;
    animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: 1.15s;
}

@-webkit-keyframes p-progressbar-indeterminate-anim {
    0% {
        inset-inline-start: -35%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
    100% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
}
@keyframes p-progressbar-indeterminate-anim {
    0% {
        inset-inline-start: -35%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
    100% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
}
@-webkit-keyframes p-progressbar-indeterminate-anim-short {
    0% {
        inset-inline-start: -200%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
    100% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
}
@keyframes p-progressbar-indeterminate-anim-short {
    0% {
        inset-inline-start: -200%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
    100% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
}
`,ft={root:({instance:t})=>["p-progressbar p-component",{"p-progressbar-determinate":t.determinate,"p-progressbar-indeterminate":t.indeterminate}],value:"p-progressbar-value",label:"p-progressbar-label"},et=(()=>{class t extends De{name="progressbar";theme=mt;classes=ft;static \u0275fac=(()=>{let e;return function(n){return(e||(e=ne(t)))(n||t)}})();static \u0275prov=me({token:t,factory:t.\u0275fac})}return t})();var tt=(()=>{class t extends Ae{value;showValue=!0;styleClass;valueStyleClass;style;unit="%";mode="determinate";color;contentTemplate;_componentStyle=X(et);templates;_contentTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;default:this._contentTemplate=e.template}})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=ne(t)))(n||t)}})();static \u0275cmp=T({type:t,selectors:[["p-progressBar"],["p-progressbar"],["p-progress-bar"]],contentQueries:function(i,n,a){if(i&1&&(re(a,rt,4),re(a,Te,4)),i&2){let d;k(d=z())&&(n.contentTemplate=d.first),k(d=z())&&(n.templates=d)}},inputs:{value:[2,"value","value",we],showValue:[2,"showValue","showValue",Pe],styleClass:"styleClass",valueStyleClass:"valueStyleClass",style:"style",unit:"unit",mode:"mode",color:"color"},features:[Z([et]),Ce],decls:3,vars:15,consts:[["role","progressbar",3,"ngStyle","ngClass"],["style","display:flex",3,"ngClass","class","width","background",4,"ngIf"],[3,"ngClass","class",4,"ngIf"],[2,"display","flex",3,"ngClass"],[1,"p-progressbar-label"],[3,"display",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass"],[1,"p-progressbar-value","p-progressbar-value-animate"]],template:function(i,n){i&1&&(o(0,"div",0),x(1,ut,4,13,"div",1)(2,ct,2,7,"div",2),l()),i&2&&(w(n.styleClass),u("ngStyle",n.style)("ngClass",E(12,at,n.mode==="determinate",n.mode==="indeterminate")),U("aria-valuemin",0)("aria-valuenow",n.value)("aria-valuemax",100)("data-pc-name","progressbar")("data-pc-section","root")("aria-label",n.value+n.unit),s(),u("ngIf",n.mode==="determinate"),s(),u("ngIf",n.mode==="indeterminate"))},dependencies:[Ie,W,Me,J,Oe,Ue],encapsulation:2,changeDetection:0})}return t})();var gt=["fileInput"],xt=(t,p,e)=>({"px-uploader":!0,dragover:t,"no-label":p,"px-uploader-disabled":e}),se=(t,p,e)=>({icon:t,onClick:p,disabled:e}),_t=(t,p)=>({file:t,isQueuedFile:!1,fileIndex:p}),ht=(t,p)=>({file:t,isQueuedFile:!0,fileIndex:p}),Ct=(t,p,e,i)=>[t,p,e,i],vt=()=>({height:"1rem","border-bottom-right-radius":0,"border-bottom-left-radius":0}),nt=()=>({"pointer-events":"visible"});function bt(t,p){if(t&1&&M(0,6),t&2){let e=c();u("ngTemplateOutlet",e.buttons.uploadButton)("ngTemplateOutletContext",V(2,se,(e.icons==null?null:e.icons.uploadButton)||"pi pi-upload",e.getOpenFilesInputFn(),e.disabled))}}function Et(t,p){if(t&1){let e=I();o(0,"p-button",15),O("onClick",function(){C(e);let n=c();return v(n.openFilesInput())}),l()}if(t&2){let e=c();u("icon",(e.icons==null?null:e.icons.uploadButton)||"pi pi-upload")("label",e.primeNGConfig.translation.upload)("disabled",e.disabled)}}function yt(t,p){if(t&1&&(o(0,"span",11),r(1),l()),t&2){let e=c();s(),be(" ",e.intl[e.PxUploaderIntl.ALLOWED_EXTENSIONS]+": "+e.allowedExtensionsText," ")}}function Pt(t,p){if(t&1&&(o(0,"span",11),r(1),l()),t&2){let e=c();s(),b(e.intl[e.PxUploaderIntl.IMAGE_SIZE_CHECK_TEXT]+": "+e.maxImageSizeText)}}function wt(t,p){if(t&1&&(o(0,"span",12),r(1),l()),t&2){let e=c();s(),b(e.infoMessage)}}function Mt(t,p){if(t&1&&M(0,6),t&2){let e=p.$implicit,i=p.$index;c();let n=B(25);u("ngTemplateOutlet",n)("ngTemplateOutletContext",E(2,_t,e,i))}}function Ot(t,p){if(t&1&&M(0,6),t&2){let e=p.$implicit,i=p.$index;c();let n=B(25);u("ngTemplateOutlet",n)("ngTemplateOutletContext",E(2,ht,e,i))}}function St(t,p){if(t&1&&g(0,"img",17),t&2){let e=c().file;u("src",e.imagePreviewUrl,_e)}}function It(t,p){if(t&1&&g(0,"p-progressBar",27),t&2){let e=c().file;P(f(4,vt)),u("mode",e._internal.uploadProgress>0||e._internal.uploadProgress===100?"determinate":"indeterminate")("value",e._internal.uploadProgress||0)}}function Ft(t,p){if(t&1&&g(0,"i",28),t&2){let e=c().file,i=c();w(e._internal.isUploading?(i.icons==null?null:i.icons.fileStatusIconUploading)||"pi pi-spin pi-spinner":e._internal.uploadError!==void 0?(i.icons==null?null:i.icons.fileStatusIconError)||"pi pi-times-circle":(i.icons==null?null:i.icons.fileStatusIconQueued)||"pi pi-hourglass")}}function Tt(t,p){if(t&1&&(o(0,"span",24),r(1),l()),t&2){let e=c().file;s(),b(e.name)}}function Ut(t,p){if(t&1&&(o(0,"span",25),r(1),l()),t&2){let e=c().file;s(),H("",e.imageSize.width,"x",e.imageSize.height,"")}}function Dt(t,p){if(t&1&&(o(0,"span",25),r(1),L(2,"pxFileSize"),l()),t&2){let e=c().file;s(),b(R(2,1,e.size||0))}}function At(t,p){if(t&1&&M(0,6),t&2){let e=c(2).fileIndex,i=c();u("ngTemplateOutlet",i.buttons.retryUploadButton)("ngTemplateOutletContext",V(2,se,(i.icons==null?null:i.icons.retryUploadButton)||"pi pi-refresh",i.getRetryUploadFn(e),i.disabled))}}function Nt(t,p){if(t&1){let e=I();o(0,"p-button",30),O("onClick",function(){C(e);let n=c(2).fileIndex,a=c();return v(a.getRetryUploadFn(n)())}),l()}if(t&2){let e=c(3);P(f(4,nt)),u("icon",(e.icons==null?null:e.icons.retryUploadButton)||"pi pi-refresh")("disabled",e.disabled)}}function kt(t,p){if(t&1&&x(0,At,1,6,"ng-container",6)(1,Nt,1,5,"p-button",29),t&2){let e=c(2);_(e.buttons!=null&&e.buttons.retryUploadButton?0:1)}}function zt(t,p){if(t&1&&M(0,6),t&2){let e=c(2),i=e.isQueuedFile,n=e.fileIndex,a=c();u("ngTemplateOutlet",a.buttons.removeFileButton)("ngTemplateOutletContext",V(2,se,(a.icons==null?null:a.icons.removeFileButton)||"pi pi-trash",a.getRemoveFileFn(i,n),a.disabled))}}function Bt(t,p){if(t&1){let e=I();o(0,"p-button",32),O("onClick",function(){C(e);let n=c(2),a=n.isQueuedFile,d=n.fileIndex,m=c();return v(m.getRemoveFileFn(a,d)())}),l()}if(t&2){let e=c(3);P(f(4,nt)),u("icon",(e.icons==null?null:e.icons.removeFileButton)||"pi pi-trash")("disabled",e.disabled)}}function Vt(t,p){if(t&1&&x(0,zt,1,6,"ng-container",6)(1,Bt,1,5,"p-button",31),t&2){let e=c(2);_(e.buttons!=null&&e.buttons.removeFileButton?0:1)}}function Lt(t,p){if(t&1&&(o(0,"div",16),x(1,St,1,1,"img",17),o(2,"div",18),x(3,It,1,5,"p-progressBar",19),o(4,"div",20)(5,"div",21),x(6,Ft,1,2,"i",22),o(7,"div",23),x(8,Tt,2,1,"span",24)(9,Ut,2,2,"span",25)(10,Dt,3,3,"span",25),l()(),o(11,"div",26)(12,"div",21)(13,"span",24),r(14),l()(),x(15,kt,2,1)(16,Vt,2,1),l()()()()),t&2){let e=p.file,i=p.isQueuedFile,n=c();u("ngClass",Ee(10,Ct,n.displayAs,n.showImagePreview&&e.imagePreviewUrl?"preview":"",e._internal!=null&&e._internal.uploadError?"px-uploader-error":"",i?"queued":"")),s(),_(n.showImagePreview&&e.imagePreviewUrl?1:-1),s(2),_(i&&!(e._internal!=null&&e._internal.uploadError)?3:-1),s(3),_(i?6:-1),s(2),_(n.showFileName?8:-1),s(),_(n.showImageSize&&e.imageSize?9:-1),s(),_(n.showFileSize?10:-1),s(4),b(e._internal==null?null:e._internal.uploadError),s(),_(i&&e._internal.uploadError&&e._internal.canRetryUpload?15:-1),s(),_(!(e._internal!=null&&e._internal.isUploading)&&(e.allowDelete===void 0||e.allowDelete)?16:-1)}}var it=(()=>{class t{constructor(e,i,n,a){this.http=e,this.changeDetector=i,this.primeNGConfig=n,this.label="",this.multiple=!1,this.displayAs="list",this.allowedExtensions=[],this.maxFileSize=5*1024*1024,this.maxParallelUploads=5,this.showImagePreview=!0,this.showFileName=!0,this.showFileSize=!0,this.showImageSize=!0,this.uploadFinished=new xe,this._value=[],this.filesQueue=[],this.maxImageSizeText="",this.allowedExtensionsText="",this.hasFiles=!1,this.dragoverEventActive=!1,this.PxUploaderIntl=h,this._disabled=!1,this.onChange=d=>d,this.onTouched=()=>{},this.isTouched=!1,this.isAngularFormValue=!1,this.uploadingFilesCount=0,this.processingUploadQueue=!1,this.viewInit=!1,this.intl=Object.assign({[h.NO_FILES_MSG]:"Drag & drop your files or click to browse",[h.UNKNOWN_ERROR]:"Upload Failed!",[h.INVALID_EXTENSION]:"Invalid file extension!",[h.MAX_SIZE_EXCEEDED]:"File size is too big!",[h.ALLOWED_EXTENSIONS]:"Allowed Extensions",[h.MAX_FILE_SIZE]:"Maximum file size",[h.IMAGE_SIZE_CHECK_FAILED]:"Maximum image width or height exceeded.",[h.IMAGE_SIZE_CHECK_TEXT]:"Allowed image dimensions (HxW)"},a||{})}ngOnChanges(e){if(e.allowedExtensions&&(this.allowedExtensionsText=this.allowedExtensions.join(", "),!e.allowedExtensions.firstChange&&this.changeDetector.detectChanges()),e.maxImageSize){let i=this.maxImageSize;this.maxImageSizeText=(i?.height||"")+"x"+(i?.width||""),!e.maxImageSize.firstChange&&this.changeDetector.detectChanges()}(e.multiple&&!e.multiple.firstChange||e.buttons&&!e.buttons.firstChange)&&this.changeDetector.detectChanges()}ngAfterViewInit(){this.viewInit=!0}openFilesInput(){this.getOpenFilesInputFn()()}get value(){return this.multiple?this._value.length?this._value:null:this._value[0]||null}set value(e){e===null?(this._value=[],e=[]):(Array.isArray(e)?!this.multiple&&e.length&&(e=[e[0]]):e=[e],this._value=e),this.hasFiles=e.length>0,this.isAngularFormValue||(this.onChange(this.value),this.onTouched()),this.changeDetector.detectChanges()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this.viewInit&&this.changeDetector.detectChanges()}setDisabledState(e){this.disabled=e}writeValue(e){e&&(this.isAngularFormValue=!0,this.value=e,this.isAngularFormValue=!1)}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=()=>!this.isTouched&&e}onFilesAdded(e){if(!(e&&e.length))return;this.multiple||(this.filesQueue[0]?._internal.httpSubscription?.unsubscribe(),this.filesQueue=[],this._value=[],this.changeDetector.detectChanges());let i=this.multiple?e:[e[0]];for(let n=i.length;n--;){let a=i[n];this.checkFile(a).then(d=>{this.filesQueue.push(d),this.processUploadQueue().then(),this.changeDetector.detectChanges()})}this.fileInput.nativeElement.value=""}processUploadQueue(){return N(this,null,function*(){if(this.processingUploadQueue||this.uploadingFilesCount===this.maxParallelUploads)return;this.processingUploadQueue=!0;let e=this.filesQueue,i=e.length,n=null,a=!1;for(let d=0;d<i;++d){let m=e[d];if(!m._internal.uploadError){if(m._internal.isUploading){a=!0;continue}n=m;break}}this.processingUploadQueue=!1,n?this.uploadFile(n).then(d=>{n._internal.httpSubscription=d,this.uploadingFilesCount<this.maxParallelUploads&&this.processUploadQueue().then()}):a||this.uploadFinished.emit(this.value)})}uploadFile(e){return N(this,null,function*(){++this.uploadingFilesCount;let i=new FormData,n=e._internal.uploadedFile,a=this.saveEndpoint,d=a.headers;e._internal.isUploading=!0,i.append("file",n);let m=d instanceof Promise?yield d:d;return this.http.request(a.requestMethod||"POST",a.url,{reportProgress:!0,observe:"events",body:i,headers:m}).pipe(ce(()=>(e._internal.uploadError=this.intl[h.UNKNOWN_ERROR],e._internal.isUploading=!1,delete e._internal.uploadProgress,--this.uploadingFilesCount,this.changeDetector.detectChanges(),ue({})))).subscribe(y=>{switch(y.type){case ae.UploadProgress:let F=Math.floor(y.loaded/(y.total||1)*100);F>100&&(F=100),e._internal.uploadProgress=F,this.changeDetector.detectChanges();break;case ae.Response:--this.uploadingFilesCount,this.multiple||(this._value=[]);let D=this._value,A=this.filesQueue,G=A.indexOf(e);G>-1&&A.splice(G,1),e.metaData=y.body||{},delete e._internal,D.push(e),this.value=D,this.processUploadQueue();break}})})}removeFileFromQueue(e){this.filesQueue.splice(e,1)}removeFile(e){return N(this,null,function*(){let i=this._value.splice(e,1)[0];if(this.value=this._value,this.deleteEndpoint){let n=this.deleteEndpoint,a=n.headers instanceof Promise?yield n.headers:n.headers;this.http.request(n.url,n.requestMethod||"DELETE",{body:[i],headers:a}).subscribe()}})}onDragEnter(e){e.preventDefault(),this.dragoverEventActive=!0}onDragover(e){e.preventDefault(),this.dragoverEventActive||(this.dragoverEventActive=!0)}onDragLeave(e){e.preventDefault(),this.dragoverEventActive=!1}onFilesDropped(e){e.preventDefault();let i=e.dataTransfer?.files;i&&this.onFilesAdded(i),this.dragoverEventActive=!1}getRetryUploadFn(e){return()=>{let i=this.filesQueue[e];i&&(delete i._internal.uploadError,this.processUploadQueue().then())}}getRemoveFileFn(e,i){return()=>{e?this.removeFileFromQueue(i):this.removeFile(i)}}getOpenFilesInputFn(){return()=>this.fileInput.nativeElement.click()}checkFile(e){return N(this,null,function*(){let i={name:e.name,size:e.size,type:e.type,_internal:{canRetryUpload:!0,isUploading:!1,uploadedFile:e,uploadProgress:0}};if(e.size>this.maxFileSize)return this.setPxFileError(h.MAX_SIZE_EXCEEDED,i);let n=this.allowedExtensions;if(n.length){let a=e.name.lastIndexOf(".");if(!(a>0&&n.indexOf(e.name.substring(a+1).toLowerCase())!==-1))return this.setPxFileError(h.INVALID_EXTENSION,i)}if(e.type.includes("image")){let a=yield this.getImageDetails(e);if(i.imagePreviewUrl=a.previewUrl,i.imageSize={width:a.width,height:a.height},!this.checkImage(i))return i}return i})}checkImage(e){if(this.maxImageSize){let i=e.imageSize?.height||0,n=e.imageSize?.width||0,a=this.maxImageSize,d=!1;a.width!==void 0&&a.height!==void 0?a.strict?d=a.height!==i||a.width!==n:d=a.height>i||a.width>n:a.width!==void 0?a.strict?d=a.width!==n:d=a.width>n:a.height!==void 0&&(a.strict?d=a.height!==i:d=a.height>i),d&&this.setPxFileError(h.IMAGE_SIZE_CHECK_FAILED,e)}return!0}setPxFileError(e,i){let n=i._internal;return n.canRetryUpload=!1,n.uploadError=this.intl[e],i}getImageDetails(e){return new Promise(i=>{createImageBitmap(e).then(n=>{i({width:n.width,height:n.height,previewUrl:URL.createObjectURL(e)})}).catch(()=>{i({width:0,height:0,previewUrl:""})})})}ngOnDestroy(){this.uploadFinished.complete()}static{this.\u0275fac=function(i){return new(i||t)(S(Fe),S(ye),S(Y),S(Je,8))}}static{this.\u0275cmp=T({type:t,selectors:[["px-uploader"]],viewQuery:function(i,n){if(i&1&&ve(gt,5),i&2){let a;k(a=z())&&(n.fileInput=a.first)}},inputs:{saveEndpoint:"saveEndpoint",deleteEndpoint:"deleteEndpoint",label:"label",multiple:"multiple",displayAs:"displayAs",allowedExtensions:"allowedExtensions",maxFileSize:"maxFileSize",maxParallelUploads:"maxParallelUploads",showImagePreview:"showImagePreview",maxImageSize:"maxImageSize",icons:"icons",buttons:"buttons",infoMessage:"infoMessage",showFileName:"showFileName",showFileSize:"showFileSize",showImageSize:"showImageSize",value:"value",disabled:"disabled"},outputs:{uploadFinished:"uploadFinished"},features:[Z([{provide:Be,multi:!0,useExisting:t}]),ge],decls:26,vars:16,consts:[["fileInput",""],["file",""],[3,"dragleave","dragover","dragenter","drop","ngClass"],[1,"px-uploader-label"],[1,"px-uploader-info"],[2,"display","flex","align-items","center","flex-wrap","wrap"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"px-uploader-upload-button",3,"icon","label","disabled"],[1,"px-uploader-info-primary"],[1,"px-uploader-msg"],[1,"px-uploader-info-secondary"],[1,"px-uploader-info-secondary-msg"],[1,"px-uploader-info-secondary-info-msg"],[1,"px-uploader-files"],["type","file",2,"display","none",3,"change","accept","multiple"],[1,"px-uploader-upload-button",3,"onClick","icon","label","disabled"],[1,"px-uploader-file",3,"ngClass"],["alt","",1,"px-uploader-file-preview",3,"src"],[1,"px-uploader-file-header-container"],[3,"mode","value","style"],[1,"px-uploader-file-header"],[1,"px-uploader-file-info"],[1,"px-uploader-file-status-icon",3,"class"],[1,"px-uploader-file-info","flex-column"],[1,"px-uploader-file-info-primary"],[1,"px-uploader-file-info-secondary"],[1,"px-uploader-file-info","actions"],[3,"mode","value"],[1,"px-uploader-file-status-icon"],[1,"px-uploader-file-info-action-button",3,"icon","disabled","style"],[1,"px-uploader-file-info-action-button",3,"onClick","icon","disabled"],["severity","warn",1,"px-uploader-file-info-action-button",3,"icon","style","disabled"],["severity","warn",1,"px-uploader-file-info-action-button",3,"onClick","icon","disabled"]],template:function(i,n){if(i&1){let a=I();o(0,"div",2),O("dragleave",function(m){return C(a),v(n.onDragLeave(m))})("dragover",function(m){return C(a),v(n.onDragover(m))})("dragenter",function(m){return C(a),v(n.onDragEnter(m))})("drop",function(m){return C(a),v(n.onFilesDropped(m))}),o(1,"label",3),r(2),l(),o(3,"div",4)(4,"div",5),x(5,bt,1,6,"ng-container",6)(6,Et,1,3,"p-button",7),o(7,"div",8)(8,"label",9),r(9),l()()(),o(10,"div",10),x(11,yt,2,1,"span",11),o(12,"span"),r(13),L(14,"pxFileSize"),l(),x(15,Pt,2,1,"span",11)(16,wt,2,1,"span",12),l()(),o(17,"div",13),oe(18,Mt,1,5,"ng-container",6,ie),oe(20,Ot,1,5,"ng-container",6,ie),l()(),o(22,"input",14,0),O("change",function(m){return C(a),v(n.onFilesAdded(m.target.files))}),l(),x(24,Lt,17,15,"ng-template",null,1,q)}i&2&&(u("ngClass",V(12,xt,n.dragoverEventActive,n.label==="",n.disabled)),s(2),b(n.label),s(3),_(n.buttons!=null&&n.buttons.uploadButton?5:6),s(4),b(n.intl[n.PxUploaderIntl.NO_FILES_MSG]),s(2),_(n.allowedExtensions.length?11:-1),s(2),b(n.intl[n.PxUploaderIntl.MAX_FILE_SIZE]+": "+R(14,10,n.maxFileSize)),s(2),_(n.maxImageSizeText?15:-1),s(),_(n.infoMessage?16:-1),s(2),le(n._value),s(2),le(n.filesQueue),s(2),u("accept",n.allowedExtensions.length?"."+n.allowedExtensions.join(",."):null)("multiple",n.multiple))},dependencies:[W,tt,ee,J,Ye],styles:['.px-uploader[_ngcontent-%COMP%]{display:flex;position:relative;flex-direction:column;box-sizing:border-box;min-height:50px;border:1px solid var(--p-content-border-color);border-radius:var(--p-border-radius-md);background:var(--p-content-background);color:inherit;padding:var(--px-uploader-body-padding, 1.2rem)}.px-uploader[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .px-uploader[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:before, .px-uploader[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:after{box-sizing:inherit}.px-uploader[_ngcontent-%COMP%]   .px-uploader-label[_ngcontent-%COMP%]{color:inherit;font-size:var(--px-uploader-label-font-size, 1.2rem);font-weight:var(--px-uploader-label-font-weight, 700);padding-bottom:calc(var(--px-uploader-body-padding, 1.25rem) * .8)}.px-uploader.no-label[_ngcontent-%COMP%]   .px-uploader-label[_ngcontent-%COMP%]{display:none}.px-uploader[_ngcontent-%COMP%]   .px-uploader-info[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;color:inherit;padding-bottom:.4rem}.px-uploader[_ngcontent-%COMP%]   .px-uploader-info[_ngcontent-%COMP%]   .px-uploader-upload-button[_ngcontent-%COMP%]{margin:1rem 0}.px-uploader[_ngcontent-%COMP%]   .px-uploader-info[_ngcontent-%COMP%]   .px-uploader-info-primary[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;color:inherit;padding-right:.8rem;padding-left:1rem}.px-uploader[_ngcontent-%COMP%]   .px-uploader-info[_ngcontent-%COMP%]   .px-uploader-info-primary[_ngcontent-%COMP%]   .px-uploader-msg[_ngcontent-%COMP%]{color:inherit}.px-uploader[_ngcontent-%COMP%]   .px-uploader-info[_ngcontent-%COMP%]   .px-uploader-info-secondary[_ngcontent-%COMP%]{display:flex;color:inherit;flex-wrap:wrap;flex-shrink:1;flex-direction:column;justify-items:center;font-size:.9rem}.px-uploader[_ngcontent-%COMP%]   .px-uploader-info[_ngcontent-%COMP%]   .px-uploader-info-secondary[_ngcontent-%COMP%]   .px-uploader-info-secondary-info-msg[_ngcontent-%COMP%]{max-width:30rem}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;max-height:var(--px-uploader-files-container-max-height, 20rem);overflow-y:auto}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]:not(:empty){border-top:1px solid var(--p-content-border-color)}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file[_ngcontent-%COMP%]{display:flex;align-items:flex-start;flex-direction:column;position:relative;border:1px solid var(--p-content-border-color);border-radius:var(--p-border-radius-md)}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file.list[_ngcontent-%COMP%]{flex-shrink:0;width:100%;margin-top:.8rem}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file.grid[_ngcontent-%COMP%]{flex-grow:0;flex-shrink:1;flex-basis:auto;margin:.4em}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file[_ngcontent-%COMP%]   .px-uploader-file-header-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;border-radius:var(--p-border-radius-md) var(--p-border-radius-md) 0 0}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file[_ngcontent-%COMP%]   .px-uploader-file-header-container[_ngcontent-%COMP%]   .px-uploader-file-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-wrap:wrap;width:100%;padding:var(--px-uploader-body-padding, 1rem)}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file[_ngcontent-%COMP%]   .px-uploader-file-header-container[_ngcontent-%COMP%]   .px-uploader-file-header[_ngcontent-%COMP%]   .px-uploader-file-info[_ngcontent-%COMP%]{display:flex;align-items:center}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file[_ngcontent-%COMP%]   .px-uploader-file-header-container[_ngcontent-%COMP%]   .px-uploader-file-header[_ngcontent-%COMP%]   .px-uploader-file-info.flex-column[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file[_ngcontent-%COMP%]   .px-uploader-file-header-container[_ngcontent-%COMP%]   .px-uploader-file-header[_ngcontent-%COMP%]   .px-uploader-file-info[_ngcontent-%COMP%]   .px-uploader-file-status-icon[_ngcontent-%COMP%]{font-size:var(--px-uploader-file-info-status-icon-font-size, 2rem);margin-right:.4rem}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file[_ngcontent-%COMP%]   .px-uploader-file-header-container[_ngcontent-%COMP%]   .px-uploader-file-header[_ngcontent-%COMP%]   .px-uploader-file-info[_ngcontent-%COMP%]   .px-uploader-file-info-primary[_ngcontent-%COMP%]{text-rendering:optimizeLegibility;font-weight:var(--px-uploader-file-info-primary-font-weight, 500);font-size:var(--px-uploader-file-info-primary-font-size, 1rem);padding:0 .4rem}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file[_ngcontent-%COMP%]   .px-uploader-file-header-container[_ngcontent-%COMP%]   .px-uploader-file-header[_ngcontent-%COMP%]   .px-uploader-file-info[_ngcontent-%COMP%]   .px-uploader-file-info-secondary[_ngcontent-%COMP%]{text-rendering:optimizeLegibility;font-size:var(--px-uploader-file-info-secondary-font-size, .8rem);padding:0 .4rem}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file[_ngcontent-%COMP%]   .px-uploader-file-header-container[_ngcontent-%COMP%]   .px-uploader-file-header[_ngcontent-%COMP%]   .px-uploader-file-info.actions[_ngcontent-%COMP%]{flex-wrap:nowrap;flex-direction:row;align-items:center}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file[_ngcontent-%COMP%]   .px-uploader-file-header-container[_ngcontent-%COMP%]   .px-uploader-file-header[_ngcontent-%COMP%]   .px-uploader-file-info.actions[_ngcontent-%COMP%]   .px-uploader-file-info-action-button[_ngcontent-%COMP%]{margin-left:.4rem}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file.px-uploader-error[_ngcontent-%COMP%]{border-color:var(--px-uploader-file-error-border-color, var(--p-red-500));color:var(--px-uploader-file-error-color, var(--p-red-500))}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file.px-uploader-error.preview[_ngcontent-%COMP%]   .px-uploader-file-header-container[_ngcontent-%COMP%]{color:var(--px-uploader-file-error-color, #333333)}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file.preview[_ngcontent-%COMP%]{height:var(--px-uploader-file-preview-height, 18rem)}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file.preview[_ngcontent-%COMP%]   .px-uploader-file-header-container[_ngcontent-%COMP%]{opacity:0;transition:opacity .3s ease;background-color:color-mix(in srgb,var(--px-uploader-file-preview-header-background-color, #d0d0d0),transparent 40%);color:var(--px-uploader-file-preview-header-color, #333333)}@supports (-webkit-backdrop-filter: blur(.2em)) or (backdrop-filter: blur(.2em)){.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file.preview[_ngcontent-%COMP%]   .px-uploader-file-header-container[_ngcontent-%COMP%]{-webkit-backdrop-filter:blur(.18rem);backdrop-filter:blur(.18rem)}}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file.preview[_ngcontent-%COMP%]:hover   .px-uploader-file-header-container[_ngcontent-%COMP%], .px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file.preview.queued[_ngcontent-%COMP%]   .px-uploader-file-header-container[_ngcontent-%COMP%], .px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file.preview.px-uploader-error[_ngcontent-%COMP%]   .px-uploader-file-header-container[_ngcontent-%COMP%]{opacity:1}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file[_ngcontent-%COMP%]   .px-uploader-file-preview[_ngcontent-%COMP%]{position:absolute;object-fit:contain;width:100%;height:100%;inset:0}.px-uploader.dragover[_ngcontent-%COMP%]{border:1px solid var(--p-content-border-color)}.px-uploader.dragover[_ngcontent-%COMP%]:before, .px-uploader.dragover[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:-2px;border:2px solid var(--p-primary-color);transition:all .5s;animation:_ngcontent-%COMP%_dragoverClip 3s infinite linear;border-radius:var(--p-border-radius-md)}.px-uploader.dragover[_ngcontent-%COMP%]:after{animation:_ngcontent-%COMP%_dragoverClip 3s infinite -1.5s linear}.px-uploader.dragover[_ngcontent-%COMP%]   .px-uploader-info[_ngcontent-%COMP%]{pointer-events:none}.px-uploader.dragover[_ngcontent-%COMP%]   .px-uploader-info[_ngcontent-%COMP%]   .px-uploader-info-primary[_ngcontent-%COMP%], .px-uploader.dragover[_ngcontent-%COMP%]   .px-uploader-info[_ngcontent-%COMP%]   .px-uploader-info-secondary[_ngcontent-%COMP%]{color:var(--p-primary-color)}.px-uploader.dragover[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]{pointer-events:none}.px-uploader.px-uploader-disabled[_ngcontent-%COMP%]{pointer-events:none;opacity:var(--px-uploader-disabled-opacity, .7)}@keyframes _ngcontent-%COMP%_dragoverClip{0%,to{clip-path:inset(0 0 98% 0)}25%{clip-path:inset(0 98% 0 0)}50%{clip-path:inset(98% 0 0 0)}75%{clip-path:inset(0 0 0 98%)}}']})}}return t})();var Rt=()=>["docIntl","docStyling"],Q=()=>({width:"100%"}),ot=()=>({value:"0",desc:"false"}),lt=()=>({value:"1",desc:"true"}),j=(t,p)=>[t,p],Qt=()=>({value:"list",desc:"list"}),jt=()=>({value:"grid",desc:"grid"}),Gt=()=>({value:0,desc:"Use default upload button"}),Xt=()=>({value:1,desc:"Use custom upload button template"}),$t=()=>({value:!0,desc:"true"}),Ht=()=>({value:!1,desc:!1}),Zt=t=>({uploadButton:t});function Kt(t,p){if(t&1){let e=I();o(0,"p-button",31),O("onClick",function(){let n=C(e).onClick;return v(n())}),g(1,"i"),r(2,"My custom button "),l()}if(t&2){let e=p.icon,i=p.disabled;u("disabled",i),s(),w(e)}}var Jn=(()=>{class t{constructor(e){this.saveEndpoint={url:"https://localhost/px-uploader"},this.pxUploaderCodeExample=We,this.uploaderFormControl=new Qe(null),this.componentDestroyed$=new de,this.form=e.group({label:["My uploader"],multiple:["0"],showImagePreview:["1"],displayAs:["list"],buttons:[0],allowedExtensions:[".png, .jpg, .pdf"],infoMessage:[null],disabled:[!1]}),this.form.get("disabled")?.valueChanges.pipe(te(this.componentDestroyed$)).subscribe(n=>{n?this.uploaderFormControl.disable():this.uploaderFormControl.enable()});let i=localStorage.getItem("__px-uploader-config");i&&this.form.patchValue(JSON.parse(i)),this.form.valueChanges.pipe(te(this.componentDestroyed$)).subscribe(()=>this.storeFilters())}ngOnDestroy(){this.componentDestroyed$.next(),this.componentDestroyed$.complete()}storeFilters(){localStorage.setItem("__px-uploader-config",JSON.stringify(this.form.value))}static{this.\u0275fac=function(i){return new(i||t)(S(He))}}static{this.\u0275cmp=T({type:t,selectors:[["app-px-uploader-docs"]],decls:174,vars:63,consts:[["customRemoveButtonTemplate",""],["header","px-uploader",3,"hiddenSections"],["docDescription","",1,"primary-color"],["href","https://primeng.org","target","_blank"],["docOverview",""],[3,"code"],[1,"px-uploader-form","dm:grid","dm:align-items-center",3,"formGroup"],[1,"dm:col-12","dm:md:col-6","dm:lg:col-4","dm:xl:col-3"],["type","text","id","[label]","pInputText","","formControlName","label"],["for","[label]"],["inputId","[multiple]","optionLabel","desc","optionValue","value","formControlName","multiple",3,"options"],["for","[multiple]"],["inputId","[showImagePreview]","optionLabel","desc","optionValue","value","formControlName","showImagePreview",3,"options"],["for","[showImagePreview]"],["inputId","[displayAs]","optionLabel","desc","optionValue","value","formControlName","displayAs",3,"options"],["for","[displayAs]"],["inputId","[buttons]","optionLabel","desc","optionValue","value","formControlName","buttons",3,"options"],["for","[buttons]"],["type","text","id","[allowedExtensions]","pInputText","","formControlName","allowedExtensions"],["for","[allowedExtensions]"],["type","text","id","[infoMessage]","pInputText","","formControlName","infoMessage"],["for","[infoMessage]"],["inputId","[disabled]","optionLabel","desc","optionValue","value","formControlName","disabled",3,"options"],["for","[disabled]"],[3,"formControl","saveEndpoint","label","multiple","showImagePreview","displayAs","allowedExtensions","infoMessage","buttons"],["docApi",""],[1,"entry-group"],[1,"title"],[1,"entry"],[1,"dm:quote","code"],[1,"dm:quote"],[3,"onClick","disabled"]],template:function(i,n){if(i&1&&(o(0,"app-library-documentation",1)(1,"span",2)(2,"a",3),r(3,"PrimeNG-based"),l(),r(4," library used to upload files. "),l(),o(5,"div",4)(6,"app-code-example",5)(7,"h2"),r(8,"Configuration"),l(),o(9,"form",6)(10,"p-floatlabel",7),g(11,"input",8),o(12,"label",9),r(13,"[label]"),l()(),o(14,"p-floatlabel",7),g(15,"p-select",10),o(16,"label",11),r(17,"[multiple]"),l()(),o(18,"p-floatlabel",7),g(19,"p-select",12),o(20,"label",13),r(21,"[showImagePreview]"),l()(),o(22,"p-floatlabel",7),g(23,"p-select",14),o(24,"label",15),r(25,"[displayAs]"),l()(),o(26,"p-floatlabel",7),g(27,"p-select",16),o(28,"label",17),r(29,"[buttons]"),l()(),o(30,"p-floatlabel",7),g(31,"input",18),o(32,"label",19),r(33,"[allowedExtensions]"),l()(),o(34,"p-floatlabel",7),g(35,"input",20),o(36,"label",21),r(37,"[infoMessage]"),l()(),o(38,"p-floatlabel",7),g(39,"p-select",22),o(40,"label",23),r(41,"[disabled]"),l()()(),g(42,"br"),o(43,"h2"),r(44,"Result"),l(),g(45,"px-uploader",24),x(46,Kt,3,3,"ng-template",null,0,q),g(48,"br"),o(49,"h2"),r(50,"Uploader value"),l(),o(51,"pre")(52,"code"),r(53),L(54,"json"),l()()()(),o(55,"div",25)(56,"div",26)(57,"h2",27),r(58,"Imports"),l(),o(59,"div",28)(60,"pre")(61,"code",29),r(62,"import { PxUploaderComponent } from '@ng-prime-extensions/px-uploader';"),l()()()(),o(63,"div",26)(64,"h2",27),r(65,"Inputs"),l(),o(66,"div",28)(67,"h3"),r(68,"saveEndpoint"),l(),o(69,"p"),r(70,"Endpoint that handles the upload."),l(),o(71,"pre")(72,"code",30),r(73,`export interface PxEndpointConfig {
    url: string;
    requestMethod?: string;
    headers?: HttpHeaders | { [p: string]: string | string[] } | Promise<HttpHeaders | {[p: string]: string | string[]}>;
}`),l()()(),o(74,"div",28)(75,"h3"),r(76,"deleteEndpoint"),l(),o(77,"p"),r(78,"Endpoint that handles file removal."),l()(),o(79,"div",28)(80,"h3"),r(81,"label"),l(),o(82,"p"),r(83,"Uploader label."),l()(),o(84,"div",28)(85,"h3"),r(86,"multiple"),l(),o(87,"p"),r(88,"Allow multiple files?"),l()(),o(89,"div",28)(90,"h3"),r(91,"displayAs"),l(),o(92,"p"),r(93,"Determines how the added files are rendered."),l()(),o(94,"div",28)(95,"h3"),r(96,"allowedExtensions"),l(),o(97,"p"),r(98,"A list of allowed file extensions(lowercase), if empty the extension check is skipped."),l(),o(99,"p"),r(100,"Example: ['txt', 'xlsx', ...]"),l()(),o(101,"div",28)(102,"h3"),r(103,"maxFileSize"),l(),o(104,"p"),r(105,"Maximum file size in bytes. Default: 5MB."),l()(),o(106,"div",28)(107,"h3"),r(108,"maxParallelUploads"),l(),o(109,"p"),r(110,"How many files should we upload in parallel?"),l()(),o(111,"div",28)(112,"h3"),r(113,"showImagePreview"),l(),o(114,"p"),r(115,"Whether to show a preview when the uploaded file is an image."),l()(),o(116,"div",28)(117,"h3"),r(118,"maxImageSize"),l(),o(119,"p"),r(120,"Limits the maximum width and/or height of uploaded images."),l(),o(121,"p"),r(122,`Check if the uploaded image has a width of exactly 100 by passing [maxImageSize]="[{width: 100, strict: true{]" or just limit the maximum by removing the 'strict' property.`),l()(),o(123,"div",28)(124,"h3"),r(125,"buttons"),l(),o(126,"p"),r(127,"Overwrite the default buttons used using a template ref."),l(),o(128,"span"),r(129," The following context is passed to your template:"),g(130,"br"),o(131,"ul")(132,"li"),r(133,"icon - The icon class. This is either the default icon or a custom icon passed to the icons attribute (icons.removeFileButton or icons.retryUploadButton)."),l(),o(134,"li"),r(135,"onClick - Button action function reference"),l()()(),o(136,"p"),r(137,"Example template:"),l(),o(138,"pre")(139,"code",30),r(140,`<ng-template let-icon="icon" let-onClick="onClick" #customRemoveButtonTemplate>
    <p-button (onClick)="onClick()">
        <i [class]="icon"></i>My custom button
    </p-button>
</ng-template>
`),l()()(),o(141,"div",28)(142,"h3"),r(143,"icons"),l(),o(144,"p"),r(145,"Overwrite the default icons used."),l()(),o(146,"div",28)(147,"h3"),r(148,"infoMessage"),l(),o(149,"p"),r(150,"Additional message to be displayed to the user."),l()(),o(151,"div",28)(152,"h3"),r(153,"showFileName"),l(),o(154,"p"),r(155,"Displays the file name."),l()(),o(156,"div",28)(157,"h3"),r(158,"showFileSize"),l(),o(159,"p"),r(160,"Displays the file size in human-readable form."),l()(),o(161,"div",28)(162,"h3"),r(163,"showImageSize"),l(),o(164,"p"),r(165,"If the file is an image, displays the image height and width."),l()()(),o(166,"div",26)(167,"h2",27),r(168,"Outputs"),l(),o(169,"div",28)(170,"h3"),r(171,"uploadFinished"),l(),o(172,"p"),r(173,"Event triggered when all the files in the upload queue are uploaded."),l()()()()()),i&2){let a,d,m,y,F,D,A,G=B(47);u("hiddenSections",f(30,Rt)),s(6),u("code",n.pxUploaderCodeExample),s(3),u("formGroup",n.form),s(6),P(f(31,Q)),u("options",E(34,j,f(32,ot),f(33,lt))),s(4),P(f(37,Q)),u("options",E(40,j,f(38,ot),f(39,lt))),s(4),P(f(43,Q)),u("options",E(46,j,f(44,Qt),f(45,jt))),s(4),P(f(49,Q)),u("options",E(52,j,f(50,Gt),f(51,Xt))),s(12),P(f(55,Q)),u("options",E(58,j,f(56,$t),f(57,Ht))),s(6),u("formControl",n.uploaderFormControl)("saveEndpoint",n.saveEndpoint)("label",(a=n.form.get("label"))==null?null:a.value)("multiple",((d=n.form.get("multiple"))==null?null:d.value)==="1")("showImagePreview",((m=n.form.get("showImagePreview"))==null?null:m.value)==="1")("displayAs",((y=n.form.get("displayAs"))==null?null:y.value)||"list")("allowedExtensions",(((F=n.form.get("allowedExtensions"))==null?null:F.value)||"").replaceAll(" ","").replaceAll(".","").split(","))("infoMessage",(D=n.form.get("infoMessage"))==null?null:D.value)("buttons",(A=n.form.get("buttons"))!=null&&A.value?K(61,Zt,G):void 0),s(8),b(R(54,28,n.uploaderFormControl.value))}},dependencies:[ze,Ne,ke,qe,Ze,je,Ve,Le,Re,Ge,Xe,$e,it,Ke,Se,ee],styles:[`.px-uploader-form p-floatlabel{margin:16px 0}.px-uploader-form input{width:100%}
`],encapsulation:2})}}return t})();export{Jn as PxUploaderDocsComponent};
