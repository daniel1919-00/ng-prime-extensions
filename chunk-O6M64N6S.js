import{g as Ke}from"./chunk-W5S2H2NV.js";import"./chunk-A27IZQD5.js";import{f as Ae,g as Ne,i as ke,j as ze,k as Be,m as Le,n as Ve,p as Qe,r as Re,s as je,t as Ge,v as Xe,w as $e,y as He,z as Ze}from"./chunk-4QVZUDBH.js";import{Ha as W,a as le,c as Ie,qa as Fe,ra as Te,ua as Ue,va as q,xa as De}from"./chunk-F5GRMVDV.js";import{$ as me,$a as he,$b as V,Ab as w,Ac as K,Bb as c,Dc as Oe,Eb as oe,Ec as Se,Fb as Ce,Gb as k,Ha as ge,Hb as z,Ib as B,Jb as r,K as de,Ka as s,Kb as E,La as O,Lb as ve,Mb as G,O as ue,Qb as X,R as ce,Rb as g,Sb as $,Tb as C,U as R,Va as F,Vb as be,Ya as xe,Za as _e,_b as L,aa as v,ab as x,ba as b,bc as H,da as ee,dc as Ee,f as ae,fc as ye,gc as Pe,hb as T,ia as fe,ib as u,j as pe,jb as j,lb as P,mb as M,nb as h,ob as te,qb as ne,rb as ie,sb as o,tb as l,ub as f,vc as Z,x as se,xb as S,yb as U,yc as Me,zc as we}from"./chunk-4P4RNPJS.js";import{f as N}from"./chunk-EQDQRRRY.js";var qe={ts:`
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
    `,styles:""};var _=function(t){return t[t.NO_FILES_MSG=0]="NO_FILES_MSG",t[t.UNKNOWN_ERROR=1]="UNKNOWN_ERROR",t[t.INVALID_EXTENSION=2]="INVALID_EXTENSION",t[t.MAX_SIZE_EXCEEDED=3]="MAX_SIZE_EXCEEDED",t[t.ALLOWED_EXTENSIONS=4]="ALLOWED_EXTENSIONS",t[t.MAX_FILE_SIZE=5]="MAX_FILE_SIZE",t[t.IMAGE_SIZE_CHECK_FAILED=6]="IMAGE_SIZE_CHECK_FAILED",t[t.IMAGE_SIZE_CHECK_TEXT=7]="IMAGE_SIZE_CHECK_TEXT",t}(_||{}),We=new ce("px-uploader i18n strings");var Je=(()=>{class t{constructor(){this.units=R(q).translation.fileSizeTypes||["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}transform(e,i=1024,n=2){let a=this.units;if(Math.abs(e)<i)return e+""+a[0];let d=a.length-1,m=0,y=10**1;do e/=i,++m;while(Math.round(Math.abs(e)*y)/y>=i&&m<d);return e.toFixed(n)+" "+a[m]}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275pipe=xe({name:"pxFileSize",type:t,pure:!0})}}return t})();var rt=({dt:t})=>`
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
`,at={root:({instance:t})=>["p-progressbar p-component",{"p-progressbar-determinate":t.determinate,"p-progressbar-indeterminate":t.indeterminate}],value:"p-progressbar-value",label:"p-progressbar-label"},Ye=(()=>{class t extends Ue{name="progressbar";theme=rt;classes=at;static \u0275fac=(()=>{let e;return function(n){return(e||(e=ee(t)))(n||t)}})();static \u0275prov=ue({token:t,factory:t.\u0275fac})}return t})();var pt=["content"],st=(t,p)=>({"p-progressbar p-component":!0,"p-progressbar-determinate":t,"p-progressbar-indeterminate":p}),dt=t=>({$implicit:t});function ut(t,p){if(t&1&&(o(0,"div"),r(1),l()),t&2){let e=c(2);j("display",e.value!=null&&e.value!==0?"flex":"none"),T("data-pc-section","label"),s(),G("",e.value,"",e.unit,"")}}function ct(t,p){t&1&&S(0)}function mt(t,p){if(t&1&&(o(0,"div",3)(1,"div",4),x(2,ut,2,5,"div",5)(3,ct,1,0,"ng-container",6),l()()),t&2){let e=c();M(e.valueStyleClass),j("width",e.value+"%")("background",e.color),u("ngClass","p-progressbar-value p-progressbar-value-animate"),T("data-pc-section","value"),s(2),u("ngIf",e.showValue&&!e.contentTemplate&&!e._contentTemplate),s(),u("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",$(11,dt,e.value))}}function ft(t,p){if(t&1&&(o(0,"div",7),f(1,"div",8),l()),t&2){let e=c();M(e.valueStyleClass),u("ngClass","p-progressbar-indeterminate-container"),T("data-pc-section","container"),s(),j("background",e.color),T("data-pc-section","value")}}var et=(()=>{class t extends De{value;showValue=!0;styleClass;valueStyleClass;style;unit="%";mode="determinate";color;contentTemplate;_componentStyle=R(Ye);templates;_contentTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;default:this._contentTemplate=e.template}})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=ee(t)))(n||t)}})();static \u0275cmp=F({type:t,selectors:[["p-progressBar"],["p-progressbar"],["p-progress-bar"]],contentQueries:function(i,n,a){if(i&1&&(oe(a,pt,4),oe(a,Fe,4)),i&2){let d;k(d=z())&&(n.contentTemplate=d.first),k(d=z())&&(n.templates=d)}},inputs:{value:[2,"value","value",Pe],showValue:[2,"showValue","showValue",ye],styleClass:"styleClass",valueStyleClass:"valueStyleClass",style:"style",unit:"unit",mode:"mode",color:"color"},features:[X([Ye]),he,_e],decls:3,vars:14,consts:[["role","progressbar",3,"ngStyle","ngClass"],["style","display:flex",3,"ngClass","class","width","background",4,"ngIf"],[3,"ngClass","class",4,"ngIf"],[2,"display","flex",3,"ngClass"],[1,"p-progressbar-label"],[3,"display",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass"],[1,"p-progressbar-value","p-progressbar-value-animate"]],template:function(i,n){i&1&&(o(0,"div",0),x(1,mt,4,13,"div",1)(2,ft,2,7,"div",2),l()),i&2&&(M(n.styleClass),u("ngStyle",n.style)("ngClass",C(11,st,n.mode==="determinate",n.mode==="indeterminate")),T("aria-valuemin",0)("aria-valuenow",n.value)("aria-valuemax",100)("data-pc-name","progressbar")("data-pc-section","root"),s(),u("ngIf",n.mode==="determinate"),s(),u("ngIf",n.mode==="indeterminate"))},dependencies:[Se,Z,Me,K,we,Te],encapsulation:2,changeDetection:0})}return t})();var gt=["fileInput"],xt=(t,p)=>({"px-uploader":!0,dragover:t,"no-label":p}),_t=(t,p)=>({file:t,isQueuedFile:!1,fileIndex:p}),ht=(t,p)=>({file:t,isQueuedFile:!0,fileIndex:p}),Ct=(t,p,e,i)=>[t,p,e,i],vt=()=>({height:"1rem","border-bottom-right-radius":0,"border-bottom-left-radius":0}),tt=(t,p)=>({icon:t,onClick:p}),nt=()=>({"pointer-events":"visible"});function bt(t,p){if(t&1&&(o(0,"span",10),r(1),l()),t&2){let e=c();s(),ve(" ",e.intl[e.PxUploaderIntl.ALLOWED_EXTENSIONS]+": "+e.allowedExtensionsText," ")}}function Et(t,p){if(t&1&&(o(0,"span",10),r(1),l()),t&2){let e=c();s(),E(e.intl[e.PxUploaderIntl.IMAGE_SIZE_CHECK_TEXT]+": "+e.maxImageSizeText)}}function yt(t,p){if(t&1&&(o(0,"span",11),r(1),l()),t&2){let e=c();s(),E(e.infoMessage)}}function Pt(t,p){if(t&1&&S(0,13),t&2){let e=p.$implicit,i=p.$index;c();let n=B(24);u("ngTemplateOutlet",n)("ngTemplateOutletContext",C(2,_t,e,i))}}function Mt(t,p){if(t&1&&S(0,13),t&2){let e=p.$implicit,i=p.$index;c();let n=B(24);u("ngTemplateOutlet",n)("ngTemplateOutletContext",C(2,ht,e,i))}}function wt(t,p){if(t&1&&f(0,"img",16),t&2){let e=c().file;u("src",e.imagePreviewUrl,ge)}}function Ot(t,p){if(t&1&&f(0,"p-progressBar",26),t&2){let e=c().file;P(g(4,vt)),u("mode",e._internal.uploadProgress>0||e._internal.uploadProgress===100?"determinate":"indeterminate")("value",e._internal.uploadProgress||0)}}function St(t,p){if(t&1&&f(0,"i",27),t&2){let e=c().file,i=c();M(e._internal.isUploading?(i.icons==null?null:i.icons.fileStatusIconUploading)||"pi pi-spin pi-spinner":e._internal.uploadError!==void 0?(i.icons==null?null:i.icons.fileStatusIconError)||"pi pi-times-circle":(i.icons==null?null:i.icons.fileStatusIconQueued)||"pi pi-hourglass")}}function It(t,p){if(t&1&&(o(0,"span",23),r(1),l()),t&2){let e=c().file;s(),E(e.name)}}function Ft(t,p){if(t&1&&(o(0,"span",24),r(1),l()),t&2){let e=c().file;s(),G("",e.imageSize.width,"x",e.imageSize.height,"")}}function Tt(t,p){if(t&1&&(o(0,"span",24),r(1),L(2,"pxFileSize"),l()),t&2){let e=c().file;s(),E(V(2,1,e.size||0))}}function Ut(t,p){if(t&1&&S(0,13),t&2){let e=c(2).fileIndex,i=c();u("ngTemplateOutlet",i.buttons.retryUploadButton)("ngTemplateOutletContext",C(2,tt,(i.icons==null?null:i.icons.retryUploadButton)||"pi pi-refresh",i.retryUpload(e,!0)))}}function Dt(t,p){if(t&1){let e=U();o(0,"p-button",29),w("onClick",function(){v(e);let n=c(2).fileIndex,a=c();return b(a.retryUpload(n,!1))}),l()}if(t&2){let e=c(3);P(g(3,nt)),u("icon",(e.icons==null?null:e.icons.retryUploadButton)||"pi pi-refresh")}}function At(t,p){if(t&1&&x(0,Ut,1,5,"ng-container",13)(1,Dt,1,4,"p-button",28),t&2){let e=c(2);h(e.buttons!=null&&e.buttons.retryUploadButton?0:1)}}function Nt(t,p){if(t&1&&S(0,13),t&2){let e=c(2),i=e.isQueuedFile,n=e.fileIndex,a=c();u("ngTemplateOutlet",a.buttons.removeFileButton)("ngTemplateOutletContext",C(2,tt,(a.icons==null?null:a.icons.removeFileButton)||"pi pi-trash",a.getRemoveFileFn(i,n,!0)))}}function kt(t,p){if(t&1){let e=U();o(0,"p-button",31),w("onClick",function(){v(e);let n=c(2),a=n.isQueuedFile,d=n.fileIndex,m=c();return b(m.getRemoveFileFn(a,d,!1))}),l()}if(t&2){let e=c(3);P(g(3,nt)),u("icon",(e.icons==null?null:e.icons.removeFileButton)||"pi pi-trash")}}function zt(t,p){if(t&1&&x(0,Nt,1,5,"ng-container",13)(1,kt,1,4,"p-button",30),t&2){let e=c(2);h(e.buttons!=null&&e.buttons.removeFileButton?0:1)}}function Bt(t,p){if(t&1&&(o(0,"div",15),x(1,wt,1,1,"img",16),o(2,"div",17),x(3,Ot,1,5,"p-progressBar",18),o(4,"div",19)(5,"div",20),x(6,St,1,2,"i",21),o(7,"div",22),x(8,It,2,1,"span",23)(9,Ft,2,2,"span",24)(10,Tt,3,3,"span",24),l()(),o(11,"div",25)(12,"div",20)(13,"span",23),r(14),l()(),x(15,At,2,1)(16,zt,2,1),l()()()()),t&2){let e=p.file,i=p.isQueuedFile,n=c();u("ngClass",be(10,Ct,n.displayAs,n.showImagePreview&&e.imagePreviewUrl?"preview":"",e._internal!=null&&e._internal.uploadError?"px-uploader-error":"",i?"queued":"")),s(),h(n.showImagePreview&&e.imagePreviewUrl?1:-1),s(2),h(i&&!(e._internal!=null&&e._internal.uploadError)?3:-1),s(3),h(i?6:-1),s(2),h(n.showFileName?8:-1),s(),h(n.showImageSize&&e.imageSize?9:-1),s(),h(n.showFileSize?10:-1),s(4),E(e._internal==null?null:e._internal.uploadError),s(),h(i&&e._internal.uploadError&&e._internal.canRetryUpload?15:-1),s(),h(!(e._internal!=null&&e._internal.isUploading)&&(e.allowDelete===void 0||e.allowDelete)?16:-1)}}var it=(()=>{class t{constructor(e,i,n,a){this.http=e,this.changeDetector=i,this.primeNGConfig=n,this.label="",this.multiple=!1,this.displayAs="list",this.allowedExtensions=[],this.maxFileSize=5*1024*1024,this.maxParallelUploads=5,this.showImagePreview=!0,this.showFileName=!0,this.showFileSize=!0,this.showImageSize=!0,this.uploadFinished=new fe,this._value=[],this.filesQueue=[],this.maxImageSizeText="",this.allowedExtensionsText="",this.hasFiles=!1,this.dragoverEventActive=!1,this.PxUploaderIntl=_,this._disabled=!1,this.onChange=d=>d,this.onTouched=()=>{},this.isTouched=!1,this.isAngularFormValue=!1,this.uploadingFilesCount=0,this.processingUploadQueue=!1,this.intl=Object.assign({[_.NO_FILES_MSG]:"Drag & drop your files or click to browse",[_.UNKNOWN_ERROR]:"Upload Failed!",[_.INVALID_EXTENSION]:"Invalid file extension!",[_.MAX_SIZE_EXCEEDED]:"File size is too big!",[_.ALLOWED_EXTENSIONS]:"Allowed Extensions",[_.MAX_FILE_SIZE]:"Maximum file size",[_.IMAGE_SIZE_CHECK_FAILED]:"Maximum image width or height exceeded.",[_.IMAGE_SIZE_CHECK_TEXT]:"Allowed image dimensions (HxW)"},a||{})}ngOnChanges(e){if(e.allowedExtensions&&(this.allowedExtensionsText=this.allowedExtensions.join(", "),!e.allowedExtensions.firstChange&&this.changeDetector.detectChanges()),e.maxImageSize){let i=this.maxImageSize;this.maxImageSizeText=(i?.height||"")+"x"+(i?.width||""),!e.maxImageSize.firstChange&&this.changeDetector.detectChanges()}e.multiple&&!e.multiple.firstChange&&this.changeDetector.detectChanges(),e.buttons&&!e.buttons.firstChange&&this.changeDetector.detectChanges()}openFilesInput(){this.fileInput.nativeElement.click()}get value(){return this.multiple?this._value.length?this._value:null:this._value[0]||null}set value(e){e===null?(this._value=[],e=[]):(Array.isArray(e)?!this.multiple&&e.length&&(e=[e[0]]):e=[e],this._value=e),this.hasFiles=e.length>0,this.isAngularFormValue||(this.onChange(this.value),this.onTouched()),this.changeDetector.detectChanges()}get disabled(){return this._disabled}set disabled(e){this._disabled=e}setDisabledState(e){this.disabled=e}writeValue(e){e&&(this.isAngularFormValue=!0,this.value=e,this.isAngularFormValue=!1)}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=()=>!this.isTouched&&e}onFilesAdded(e){if(!(e&&e.length))return;this.multiple||(this.filesQueue[0]?._internal.httpSubscription?.unsubscribe(),this.filesQueue=[],this._value=[],this.changeDetector.detectChanges());let i=this.multiple?e:[e[0]];for(let n=i.length;n--;){let a=i[n];this.checkFile(a).then(d=>{this.filesQueue.push(d),this.processUploadQueue().then(),this.changeDetector.detectChanges()})}this.fileInput.nativeElement.value=""}processUploadQueue(){return N(this,null,function*(){if(this.processingUploadQueue||this.uploadingFilesCount===this.maxParallelUploads)return;this.processingUploadQueue=!0;let e=this.filesQueue,i=e.length,n=null,a=!1;for(let d=0;d<i;++d){let m=e[d];if(!m._internal.uploadError){if(m._internal.isUploading){a=!0;continue}n=m;break}}this.processingUploadQueue=!1,n?this.uploadFile(n).then(d=>{n._internal.httpSubscription=d,this.uploadingFilesCount<this.maxParallelUploads&&this.processUploadQueue().then()}):a||this.uploadFinished.emit(this.value)})}uploadFile(e){return N(this,null,function*(){++this.uploadingFilesCount;let i=new FormData,n=e._internal.uploadedFile,a=this.saveEndpoint,d=a.headers;e._internal.isUploading=!0,i.append("file",n);let m=d instanceof Promise?yield d:d;return this.http.request(a.requestMethod||"POST",a.url,{reportProgress:!0,observe:"events",body:i,headers:m}).pipe(se(()=>(e._internal.uploadError=this.intl[_.UNKNOWN_ERROR],e._internal.isUploading=!1,delete e._internal.uploadProgress,--this.uploadingFilesCount,this.changeDetector.detectChanges(),pe({})))).subscribe(y=>{switch(y.type){case le.UploadProgress:let I=Math.floor(y.loaded/(y.total||1)*100);I>100&&(I=100),e._internal.uploadProgress=I,this.changeDetector.detectChanges();break;case le.Response:--this.uploadingFilesCount,this.multiple||(this._value=[]);let D=this._value,A=this.filesQueue,Q=A.indexOf(e);Q>-1&&A.splice(Q,1),e.metaData=y.body||{},delete e._internal,D.push(e),this.value=D,this.processUploadQueue();break}})})}retryUpload(e,i){let n=()=>{let a=this.filesQueue[e];a&&(delete a._internal.uploadError,this.processUploadQueue().then())};return i?n:n()}removeFileFromQueue(e){this.filesQueue.splice(e,1)}removeFile(e){return N(this,null,function*(){let i=this._value.splice(e,1)[0];if(this.value=this._value,this.deleteEndpoint){let n=this.deleteEndpoint,a=n.headers instanceof Promise?yield n.headers:n.headers;this.http.request(n.url,n.requestMethod||"DELETE",{body:[i],headers:a}).subscribe()}})}onDragEnter(e){e.preventDefault(),this.dragoverEventActive=!0}onDragover(e){e.preventDefault(),this.dragoverEventActive||(this.dragoverEventActive=!0)}onDragLeave(e){e.preventDefault(),this.dragoverEventActive=!1}onFilesDropped(e){e.preventDefault();let i=e.dataTransfer?.files;i&&this.onFilesAdded(i),this.dragoverEventActive=!1}getRemoveFileFn(e,i,n){let a=()=>{e?this.removeFileFromQueue(i):this.removeFile(i)};return n?a:a()}checkFile(e){return N(this,null,function*(){let i={name:e.name,size:e.size,type:e.type,_internal:{canRetryUpload:!0,isUploading:!1,uploadedFile:e,uploadProgress:0}};if(e.size>this.maxFileSize)return this.setPxFileError(_.MAX_SIZE_EXCEEDED,i);let n=this.allowedExtensions;if(n.length){let a=e.name.lastIndexOf(".");if(!(a>0&&n.indexOf(e.name.substring(a+1).toLowerCase())!==-1))return this.setPxFileError(_.INVALID_EXTENSION,i)}if(e.type.includes("image")){let a=yield this.getImageDetails(e);if(i.imagePreviewUrl=a.previewUrl,i.imageSize={width:a.width,height:a.height},!this.checkImage(i))return i}return i})}checkImage(e){if(this.maxImageSize){let i=e.imageSize?.height||0,n=e.imageSize?.width||0,a=this.maxImageSize,d=!1;a.width!==void 0&&a.height!==void 0?a.strict?d=a.height!==i||a.width!==n:d=a.height>i||a.width>n:a.width!==void 0?a.strict?d=a.width!==n:d=a.width>n:a.height!==void 0&&(a.strict?d=a.height!==i:d=a.height>i),d&&this.setPxFileError(_.IMAGE_SIZE_CHECK_FAILED,e)}return!0}setPxFileError(e,i){let n=i._internal;return n.canRetryUpload=!1,n.uploadError=this.intl[e],i}getImageDetails(e){return new Promise(i=>{createImageBitmap(e).then(n=>{i({width:n.width,height:n.height,previewUrl:URL.createObjectURL(e)})}).catch(()=>{i({width:0,height:0,previewUrl:""})})})}ngOnDestroy(){this.uploadFinished.complete()}static{this.\u0275fac=function(i){return new(i||t)(O(Ie),O(Ee),O(q),O(We,8))}}static{this.\u0275cmp=F({type:t,selectors:[["px-uploader"]],viewQuery:function(i,n){if(i&1&&Ce(gt,5),i&2){let a;k(a=z())&&(n.fileInput=a.first)}},inputs:{saveEndpoint:"saveEndpoint",deleteEndpoint:"deleteEndpoint",label:"label",multiple:"multiple",displayAs:"displayAs",allowedExtensions:"allowedExtensions",maxFileSize:"maxFileSize",maxParallelUploads:"maxParallelUploads",showImagePreview:"showImagePreview",maxImageSize:"maxImageSize",icons:"icons",buttons:"buttons",infoMessage:"infoMessage",showFileName:"showFileName",showFileSize:"showFileSize",showImageSize:"showImageSize",value:"value",disabled:"disabled"},outputs:{uploadFinished:"uploadFinished"},features:[X([{provide:ze,multi:!0,useExisting:t}]),me],decls:25,vars:16,consts:[["fileInput",""],["file",""],[3,"dragleave","dragover","dragenter","drop","ngClass"],[1,"px-uploader-label"],[1,"px-uploader-info"],[2,"display","flex","align-items","center","flex-wrap","wrap"],[1,"px-uploader-upload-button",3,"onClick","icon","label"],[1,"px-uploader-info-primary"],[1,"px-uploader-msg"],[1,"px-uploader-info-secondary"],[1,"px-uploader-info-secondary-msg"],[1,"px-uploader-info-secondary-info-msg"],[1,"px-uploader-files"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["type","file",2,"display","none",3,"change","accept","multiple"],[1,"px-uploader-file",3,"ngClass"],["alt","",1,"px-uploader-file-preview",3,"src"],[1,"px-uploader-file-header-container"],[3,"mode","value","style"],[1,"px-uploader-file-header"],[1,"px-uploader-file-info"],[1,"px-uploader-file-status-icon",3,"class"],[1,"px-uploader-file-info","flex-column"],[1,"px-uploader-file-info-primary"],[1,"px-uploader-file-info-secondary"],[1,"px-uploader-file-info","actions"],[3,"mode","value"],[1,"px-uploader-file-status-icon"],[1,"px-uploader-file-info-action-button",3,"icon","style"],[1,"px-uploader-file-info-action-button",3,"onClick","icon"],["severity","warn",1,"px-uploader-file-info-action-button",3,"icon","style"],["severity","warn",1,"px-uploader-file-info-action-button",3,"onClick","icon"]],template:function(i,n){if(i&1){let a=U();o(0,"div",2),w("dragleave",function(m){return v(a),b(n.onDragLeave(m))})("dragover",function(m){return v(a),b(n.onDragover(m))})("dragenter",function(m){return v(a),b(n.onDragEnter(m))})("drop",function(m){return v(a),b(n.onFilesDropped(m))}),o(1,"label",3),r(2),l(),o(3,"div",4)(4,"div",5)(5,"p-button",6),w("onClick",function(){return v(a),b(n.openFilesInput())}),l(),o(6,"div",7)(7,"label",8),r(8),l()()(),o(9,"div",9),x(10,bt,2,1,"span",10),o(11,"span"),r(12),L(13,"pxFileSize"),l(),x(14,Et,2,1,"span",10)(15,yt,2,1,"span",11),l()(),o(16,"div",12),ne(17,Pt,1,5,"ng-container",13,te),ne(19,Mt,1,5,"ng-container",13,te),l()(),o(21,"input",14,0),w("change",function(m){return v(a),b(n.onFilesAdded(m.target.files))}),l(),x(23,Bt,17,15,"ng-template",null,1,H)}i&2&&(u("ngClass",C(13,xt,n.dragoverEventActive,n.label==="")),s(2),E(n.label),s(3),u("icon",(n.icons==null?null:n.icons.uploadButton)||"pi pi-upload")("label",n.primeNGConfig.translation.upload),s(3),E(n.intl[n.PxUploaderIntl.NO_FILES_MSG]),s(2),h(n.allowedExtensions.length?10:-1),s(2),E(n.intl[n.PxUploaderIntl.MAX_FILE_SIZE]+": "+V(13,11,n.maxFileSize)),s(2),h(n.maxImageSizeText?14:-1),s(),h(n.infoMessage?15:-1),s(2),ie(n._value),s(2),ie(n.filesQueue),s(2),u("accept",n.allowedExtensions.length?"."+n.allowedExtensions.join(",."):null)("multiple",n.multiple))},dependencies:[Z,et,W,K,Je],styles:['.px-uploader[_ngcontent-%COMP%]{display:flex;position:relative;flex-direction:column;box-sizing:border-box;min-height:50px;border:1px solid var(--p-content-border-color);border-radius:var(--p-border-radius-md);background:var(--p-content-background);color:inherit;padding:var(--px-uploader-body-padding, 1.2rem)}.px-uploader[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .px-uploader[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:before, .px-uploader[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:after{box-sizing:inherit}.px-uploader[_ngcontent-%COMP%]   .px-uploader-label[_ngcontent-%COMP%]{color:inherit;font-size:var(--px-uploader-label-font-size, 1.2rem);font-weight:var(--px-uploader-label-font-weight, 700);padding-bottom:calc(var(--px-uploader-body-padding, 1.25rem) * .8)}.px-uploader.no-label[_ngcontent-%COMP%]   .px-uploader-label[_ngcontent-%COMP%]{display:none}.px-uploader[_ngcontent-%COMP%]   .px-uploader-info[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;color:inherit;padding-bottom:.4rem}.px-uploader[_ngcontent-%COMP%]   .px-uploader-info[_ngcontent-%COMP%]   .px-uploader-upload-button[_ngcontent-%COMP%]{margin:1rem 1rem 1rem 0}.px-uploader[_ngcontent-%COMP%]   .px-uploader-info[_ngcontent-%COMP%]   .px-uploader-info-primary[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;color:inherit;padding-right:.8rem}.px-uploader[_ngcontent-%COMP%]   .px-uploader-info[_ngcontent-%COMP%]   .px-uploader-info-primary[_ngcontent-%COMP%]   .px-uploader-msg[_ngcontent-%COMP%]{color:inherit}.px-uploader[_ngcontent-%COMP%]   .px-uploader-info[_ngcontent-%COMP%]   .px-uploader-info-secondary[_ngcontent-%COMP%]{display:flex;color:inherit;flex-wrap:wrap;flex-shrink:1;flex-direction:column;justify-items:center;font-size:.9rem}.px-uploader[_ngcontent-%COMP%]   .px-uploader-info[_ngcontent-%COMP%]   .px-uploader-info-secondary[_ngcontent-%COMP%]   .px-uploader-info-secondary-info-msg[_ngcontent-%COMP%]{max-width:30rem}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;max-height:var(--px-uploader-files-container-max-height, 20rem);overflow-y:auto}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]:not(:empty){border-top:1px solid var(--p-content-border-color)}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file[_ngcontent-%COMP%]{display:flex;align-items:flex-start;flex-direction:column;position:relative;border:1px solid var(--p-content-border-color);border-radius:var(--p-border-radius-md)}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file.list[_ngcontent-%COMP%]{flex-shrink:0;width:100%;margin-top:.8rem}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file.grid[_ngcontent-%COMP%]{flex-grow:0;flex-shrink:1;flex-basis:auto;margin:.4em}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file[_ngcontent-%COMP%]   .px-uploader-file-header-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;border-radius:var(--p-border-radius-md) var(--p-border-radius-md) 0 0}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file[_ngcontent-%COMP%]   .px-uploader-file-header-container[_ngcontent-%COMP%]   .px-uploader-file-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-wrap:wrap;width:100%;padding:var(--px-uploader-body-padding, 1rem)}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file[_ngcontent-%COMP%]   .px-uploader-file-header-container[_ngcontent-%COMP%]   .px-uploader-file-header[_ngcontent-%COMP%]   .px-uploader-file-info[_ngcontent-%COMP%]{display:flex;align-items:center}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file[_ngcontent-%COMP%]   .px-uploader-file-header-container[_ngcontent-%COMP%]   .px-uploader-file-header[_ngcontent-%COMP%]   .px-uploader-file-info.flex-column[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file[_ngcontent-%COMP%]   .px-uploader-file-header-container[_ngcontent-%COMP%]   .px-uploader-file-header[_ngcontent-%COMP%]   .px-uploader-file-info[_ngcontent-%COMP%]   .px-uploader-file-status-icon[_ngcontent-%COMP%]{font-size:var(--px-uploader-file-info-status-icon-font-size, 2rem);margin-right:.4rem}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file[_ngcontent-%COMP%]   .px-uploader-file-header-container[_ngcontent-%COMP%]   .px-uploader-file-header[_ngcontent-%COMP%]   .px-uploader-file-info[_ngcontent-%COMP%]   .px-uploader-file-info-primary[_ngcontent-%COMP%]{text-rendering:optimizeLegibility;font-weight:var(--px-uploader-file-info-primary-font-weight, 500);font-size:var(--px-uploader-file-info-primary-font-size, 1rem);padding:0 .4rem}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file[_ngcontent-%COMP%]   .px-uploader-file-header-container[_ngcontent-%COMP%]   .px-uploader-file-header[_ngcontent-%COMP%]   .px-uploader-file-info[_ngcontent-%COMP%]   .px-uploader-file-info-secondary[_ngcontent-%COMP%]{text-rendering:optimizeLegibility;font-size:var(--px-uploader-file-info-secondary-font-size, .8rem);padding:0 .4rem}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file[_ngcontent-%COMP%]   .px-uploader-file-header-container[_ngcontent-%COMP%]   .px-uploader-file-header[_ngcontent-%COMP%]   .px-uploader-file-info.actions[_ngcontent-%COMP%]{flex-wrap:nowrap;flex-direction:row;align-items:center}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file[_ngcontent-%COMP%]   .px-uploader-file-header-container[_ngcontent-%COMP%]   .px-uploader-file-header[_ngcontent-%COMP%]   .px-uploader-file-info.actions[_ngcontent-%COMP%]   .px-uploader-file-info-action-button[_ngcontent-%COMP%]{margin-left:.4rem}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file.px-uploader-error[_ngcontent-%COMP%]{border-color:var(--px-uploader-file-error-border-color, var(--p-red-500));color:var(--px-uploader-file-error-color, var(--p-red-500))}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file.px-uploader-error.preview[_ngcontent-%COMP%]   .px-uploader-file-header-container[_ngcontent-%COMP%]{color:var(--px-uploader-file-error-color, #333333)}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file.preview[_ngcontent-%COMP%]{height:var(--px-uploader-file-preview-height, 18rem)}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file.preview[_ngcontent-%COMP%]   .px-uploader-file-header-container[_ngcontent-%COMP%]{opacity:0;transition:opacity .3s ease;background-color:color-mix(in srgb,var(--px-uploader-file-preview-header-background-color, #d0d0d0),transparent 40%);color:var(--px-uploader-file-preview-header-color, #333333)}@supports (-webkit-backdrop-filter: blur(.2em)) or (backdrop-filter: blur(.2em)){.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file.preview[_ngcontent-%COMP%]   .px-uploader-file-header-container[_ngcontent-%COMP%]{-webkit-backdrop-filter:blur(.18rem);backdrop-filter:blur(.18rem)}}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file.preview[_ngcontent-%COMP%]:hover   .px-uploader-file-header-container[_ngcontent-%COMP%], .px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file.preview.queued[_ngcontent-%COMP%]   .px-uploader-file-header-container[_ngcontent-%COMP%], .px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file.preview.px-uploader-error[_ngcontent-%COMP%]   .px-uploader-file-header-container[_ngcontent-%COMP%]{opacity:1}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file[_ngcontent-%COMP%]   .px-uploader-file-preview[_ngcontent-%COMP%]{position:absolute;object-fit:contain;width:100%;height:100%;inset:0}.px-uploader.dragover[_ngcontent-%COMP%]{border:1px solid var(--p-content-border-color)}.px-uploader.dragover[_ngcontent-%COMP%]:before, .px-uploader.dragover[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:-2px;border:2px solid var(--p-primary-color);transition:all .5s;animation:_ngcontent-%COMP%_dragoverClip 3s infinite linear;border-radius:var(--p-border-radius-md)}.px-uploader.dragover[_ngcontent-%COMP%]:after{animation:_ngcontent-%COMP%_dragoverClip 3s infinite -1.5s linear}.px-uploader.dragover[_ngcontent-%COMP%]   .px-uploader-info[_ngcontent-%COMP%]{pointer-events:none}.px-uploader.dragover[_ngcontent-%COMP%]   .px-uploader-info[_ngcontent-%COMP%]   .px-uploader-info-primary[_ngcontent-%COMP%], .px-uploader.dragover[_ngcontent-%COMP%]   .px-uploader-info[_ngcontent-%COMP%]   .px-uploader-info-secondary[_ngcontent-%COMP%]{color:var(--p-primary-color)}.px-uploader.dragover[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]{pointer-events:none}@keyframes _ngcontent-%COMP%_dragoverClip{0%,to{clip-path:inset(0 0 98% 0)}25%{clip-path:inset(0 98% 0 0)}50%{clip-path:inset(98% 0 0 0)}75%{clip-path:inset(0 0 0 98%)}}']})}}return t})();var Lt=()=>["docIntl","docStyling"],J=()=>({width:"100%"}),ot=()=>({value:"0",desc:"false"}),lt=()=>({value:"1",desc:"true"}),Y=(t,p)=>[t,p],Vt=()=>({value:"list",desc:"list"}),Qt=()=>({value:"grid",desc:"grid"}),Rt=()=>({value:0,desc:"Use default buttons"}),jt=()=>({value:1,desc:"Use custom remove button template"}),Gt=t=>({removeFileButton:t});function Xt(t,p){if(t&1){let e=U();o(0,"p-button",29),w("onClick",function(){let n=v(e).onClick;return b(n())}),f(1,"i"),r(2,"My custom button "),l()}if(t&2){let e=p.icon;s(),M(e)}}var Kn=(()=>{class t{constructor(e){this.pxUploaderCodeExample=qe,this.uploaderFormControl=new Qe(null),this.saveEndpoint={url:"https://localhost/px-uploader"},this.componentDestroyed$=new ae,this.form=e.group({label:["My uploader"],multiple:["0"],showImagePreview:["1"],displayAs:["list"],buttons:[0],allowedExtensions:[".png, .jpg, .pdf"],infoMessage:[null]});let i=localStorage.getItem("__px-uploader-config");i&&this.form.patchValue(JSON.parse(i)),this.form.valueChanges.pipe(de(this.componentDestroyed$)).subscribe(()=>this.storeFilters())}storeFilters(){localStorage.setItem("__px-uploader-config",JSON.stringify(this.form.value))}ngOnDestroy(){this.componentDestroyed$.next(),this.componentDestroyed$.complete()}static{this.\u0275fac=function(i){return new(i||t)(O($e))}}static{this.\u0275cmp=F({type:t,selectors:[["app-px-uploader-docs"]],decls:170,vars:54,consts:[["customRemoveButtonTemplate",""],["header","px-uploader",3,"hiddenSections"],["docDescription","",1,"primary-color"],["href","https://primeng.org","target","_blank"],["docOverview",""],[3,"code"],[1,"px-uploader-form","dm:grid","dm:align-items-center",3,"formGroup"],[1,"dm:col-12","dm:md:col-6","dm:lg:col-4","dm:xl:col-3"],["type","text","id","[label]","pInputText","","formControlName","label"],["for","[label]"],["inputId","[multiple]","optionLabel","desc","optionValue","value","formControlName","multiple",3,"options"],["for","[multiple]"],["inputId","[showImagePreview]","optionLabel","desc","optionValue","value","formControlName","showImagePreview",3,"options"],["for","[showImagePreview]"],["inputId","[displayAs]","optionLabel","desc","optionValue","value","formControlName","displayAs",3,"options"],["for","[displayAs]"],["inputId","[buttons]","optionLabel","desc","optionValue","value","formControlName","buttons",3,"options"],["for","[buttons]"],["type","text","id","[allowedExtensions]","pInputText","","formControlName","allowedExtensions"],["for","[allowedExtensions]"],["type","text","id","[infoMessage]","pInputText","","formControlName","infoMessage"],["for","[infoMessage]"],[3,"formControl","saveEndpoint","label","multiple","showImagePreview","displayAs","allowedExtensions","infoMessage","buttons"],["docApi",""],[1,"entry-group"],[1,"title"],[1,"entry"],[1,"dm:quote","code"],[1,"dm:quote"],[3,"onClick"]],template:function(i,n){if(i&1&&(o(0,"app-library-documentation",1)(1,"span",2)(2,"a",3),r(3,"PrimeNG-based"),l(),r(4," library used to upload files. "),l(),o(5,"div",4)(6,"app-code-example",5)(7,"h2"),r(8,"Configuration"),l(),o(9,"form",6)(10,"p-floatlabel",7),f(11,"input",8),o(12,"label",9),r(13,"[label]"),l()(),o(14,"p-floatlabel",7),f(15,"p-select",10),o(16,"label",11),r(17,"[multiple]"),l()(),o(18,"p-floatlabel",7),f(19,"p-select",12),o(20,"label",13),r(21,"[showImagePreview]"),l()(),o(22,"p-floatlabel",7),f(23,"p-select",14),o(24,"label",15),r(25,"[displayAs]"),l()(),o(26,"p-floatlabel",7),f(27,"p-select",16),o(28,"label",17),r(29,"[buttons]"),l()(),o(30,"p-floatlabel",7),f(31,"input",18),o(32,"label",19),r(33,"[allowedExtensions]"),l()(),o(34,"p-floatlabel",7),f(35,"input",20),o(36,"label",21),r(37,"[infoMessage]"),l()()(),f(38,"br"),o(39,"h2"),r(40,"Result"),l(),f(41,"px-uploader",22),x(42,Xt,3,2,"ng-template",null,0,H),f(44,"br"),o(45,"h2"),r(46,"Uploader value"),l(),o(47,"pre")(48,"code"),r(49),L(50,"json"),l()()()(),o(51,"div",23)(52,"div",24)(53,"h2",25),r(54,"Imports"),l(),o(55,"div",26)(56,"pre")(57,"code",27),r(58,"import { PxUploaderComponent } from '@ng-prime-extensions/px-uploader';"),l()()()(),o(59,"div",24)(60,"h2",25),r(61,"Inputs"),l(),o(62,"div",26)(63,"h3"),r(64,"saveEndpoint"),l(),o(65,"p"),r(66,"Endpoint that handles the upload."),l(),o(67,"pre")(68,"code",28),r(69,`export interface PxEndpointConfig {
    url: string;
    requestMethod?: string;
    headers?: HttpHeaders | { [p: string]: string | string[] } | Promise<HttpHeaders | {[p: string]: string | string[]}>;
}`),l()()(),o(70,"div",26)(71,"h3"),r(72,"deleteEndpoint"),l(),o(73,"p"),r(74,"Endpoint that handles file removal."),l()(),o(75,"div",26)(76,"h3"),r(77,"label"),l(),o(78,"p"),r(79,"Uploader label."),l()(),o(80,"div",26)(81,"h3"),r(82,"multiple"),l(),o(83,"p"),r(84,"Allow multiple files?"),l()(),o(85,"div",26)(86,"h3"),r(87,"displayAs"),l(),o(88,"p"),r(89,"Determines how the added files are rendered."),l()(),o(90,"div",26)(91,"h3"),r(92,"allowedExtensions"),l(),o(93,"p"),r(94,"A list of allowed file extensions(lowercase), if empty the extension check is skipped."),l(),o(95,"p"),r(96,"Example: ['txt', 'xlsx', ...]"),l()(),o(97,"div",26)(98,"h3"),r(99,"maxFileSize"),l(),o(100,"p"),r(101,"Maximum file size in bytes. Default: 5MB."),l()(),o(102,"div",26)(103,"h3"),r(104,"maxParallelUploads"),l(),o(105,"p"),r(106,"How many files should we upload in parallel?"),l()(),o(107,"div",26)(108,"h3"),r(109,"showImagePreview"),l(),o(110,"p"),r(111,"Whether to show a preview when the uploaded file is an image."),l()(),o(112,"div",26)(113,"h3"),r(114,"maxImageSize"),l(),o(115,"p"),r(116,"Limits the maximum width and/or height of uploaded images."),l(),o(117,"p"),r(118,`Check if the uploaded image has a width of exactly 100 by passing [maxImageSize]="[{width: 100, strict: true{]" or just limit the maximum by removing the 'strict' property.`),l()(),o(119,"div",26)(120,"h3"),r(121,"buttons"),l(),o(122,"p"),r(123,"Overwrite the default buttons used using a template ref."),l(),o(124,"span"),r(125," The following context is passed to your template:"),f(126,"br"),o(127,"ul")(128,"li"),r(129,"icon - The icon class. This is either the default icon or a custom icon passed to the icons attribute (icons.removeFileButton or icons.retryUploadButton)."),l(),o(130,"li"),r(131,"onClick - Button action function reference"),l()()(),o(132,"p"),r(133,"Example template:"),l(),o(134,"pre")(135,"code",28),r(136,`<ng-template let-icon="icon" let-onClick="onClick" #customRemoveButtonTemplate>
    <p-button (onClick)="onClick()">
        <i [class]="icon"></i>My custom button
    </p-button>
</ng-template>
`),l()()(),o(137,"div",26)(138,"h3"),r(139,"icons"),l(),o(140,"p"),r(141,"Overwrite the default icons used."),l()(),o(142,"div",26)(143,"h3"),r(144,"infoMessage"),l(),o(145,"p"),r(146,"Additional message to be displayed to the user."),l()(),o(147,"div",26)(148,"h3"),r(149,"showFileName"),l(),o(150,"p"),r(151,"Displays the file name."),l()(),o(152,"div",26)(153,"h3"),r(154,"showFileSize"),l(),o(155,"p"),r(156,"Displays the file size in human-readable form."),l()(),o(157,"div",26)(158,"h3"),r(159,"showImageSize"),l(),o(160,"p"),r(161,"If the file is an image, displays the image height and width."),l()()(),o(162,"div",24)(163,"h2",25),r(164,"Outputs"),l(),o(165,"div",26)(166,"h3"),r(167,"uploadFinished"),l(),o(168,"p"),r(169,"Event triggered when all the files in the upload queue are uploaded."),l()()()()()),i&2){let a,d,m,y,I,D,A,Q=B(43);u("hiddenSections",g(27,Lt)),s(6),u("code",n.pxUploaderCodeExample),s(3),u("formGroup",n.form),s(6),P(g(28,J)),u("options",C(31,Y,g(29,ot),g(30,lt))),s(4),P(g(34,J)),u("options",C(37,Y,g(35,ot),g(36,lt))),s(4),P(g(40,J)),u("options",C(43,Y,g(41,Vt),g(42,Qt))),s(4),P(g(46,J)),u("options",C(49,Y,g(47,Rt),g(48,jt))),s(14),u("formControl",n.uploaderFormControl)("saveEndpoint",n.saveEndpoint)("label",(a=n.form.get("label"))==null?null:a.value)("multiple",((d=n.form.get("multiple"))==null?null:d.value)==="1")("showImagePreview",((m=n.form.get("showImagePreview"))==null?null:m.value)==="1")("displayAs",((y=n.form.get("displayAs"))==null?null:y.value)||"list")("allowedExtensions",(((I=n.form.get("allowedExtensions"))==null?null:I.value)||"").replaceAll(" ","").replaceAll(".","").split(","))("infoMessage",(D=n.form.get("infoMessage"))==null?null:D.value)("buttons",(A=n.form.get("buttons"))!=null&&A.value?$(52,Gt,Q):void 0),s(8),E(V(50,25,n.uploaderFormControl.value))}},dependencies:[ke,Ae,Ne,Ke,He,Re,Be,Le,Ve,je,Ge,Xe,it,Ze,Oe,W],styles:[`.px-uploader-form p-floatlabel{margin:16px 0}.px-uploader-form input{width:100%}
`],encapsulation:2})}}return t})();export{Kn as PxUploaderDocsComponent};
