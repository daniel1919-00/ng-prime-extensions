import{g as Ze}from"./chunk-W5S2H2NV.js";import"./chunk-A27IZQD5.js";import{f as De,g as Ae,i as Ne,j as ke,k as ze,m as Be,n as Le,p as Ve,r as Qe,s as Re,t as je,v as Ge,w as Xe,y as $e,z as He}from"./chunk-4QVZUDBH.js";import{Ha as q,a as oe,c as Se,qa as Ie,ra as Fe,ua as Te,va as K,xa as Ue}from"./chunk-F5GRMVDV.js";import{$ as ce,$a as _e,$b as L,Ab as M,Ac as Z,Bb as c,Dc as Me,Eb as ie,Ec as Oe,Fb as he,Gb as N,Ha as fe,Hb as k,Ib as z,Jb as r,K as se,Ka as s,Kb as E,La as O,Lb as Ce,Mb as j,O as de,Qb as G,R as ue,Rb as g,Sb as X,Tb as C,U as Q,Va as I,Vb as ve,Ya as ge,Za as xe,_b as B,aa as v,ab as x,ba as b,bc as $,da as Y,dc as be,f as re,fc as Ee,gc as ye,hb as F,ia as me,ib as u,j as ae,jb as R,lb as P,mb as w,nb as h,ob as ee,qb as te,rb as ne,sb as o,tb as l,ub as f,vc as H,x as pe,xb as S,yb as T,yc as Pe,zc as we}from"./chunk-4P4RNPJS.js";import{f as A}from"./chunk-EQDQRRRY.js";var Ke={ts:`
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
    `,styles:""};var _=function(t){return t[t.NO_FILES_MSG=0]="NO_FILES_MSG",t[t.UNKNOWN_ERROR=1]="UNKNOWN_ERROR",t[t.INVALID_EXTENSION=2]="INVALID_EXTENSION",t[t.MAX_SIZE_EXCEEDED=3]="MAX_SIZE_EXCEEDED",t[t.ALLOWED_EXTENSIONS=4]="ALLOWED_EXTENSIONS",t[t.MAX_FILE_SIZE=5]="MAX_FILE_SIZE",t[t.IMAGE_SIZE_CHECK_FAILED=6]="IMAGE_SIZE_CHECK_FAILED",t[t.IMAGE_SIZE_CHECK_TEXT=7]="IMAGE_SIZE_CHECK_TEXT",t}(_||{}),qe=new ue("px-uploader i18n strings");var We=(()=>{class t{constructor(){this.units=Q(K).translation.fileSizeTypes||["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}transform(e,i=1024,n=2){let a=this.units;if(Math.abs(e)<i)return e+""+a[0];let d=a.length-1,m=0,y=10**1;do e/=i,++m;while(Math.round(Math.abs(e)*y)/y>=i&&m<d);return e.toFixed(n)+" "+a[m]}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275pipe=ge({name:"pxFileSize",type:t,pure:!0})}}return t})();var lt=({dt:t})=>`
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
`,rt={root:({instance:t})=>["p-progressbar p-component",{"p-progressbar-determinate":t.determinate,"p-progressbar-indeterminate":t.indeterminate}],value:"p-progressbar-value",label:"p-progressbar-label"},Je=(()=>{class t extends Te{name="progressbar";theme=lt;classes=rt;static \u0275fac=(()=>{let e;return function(n){return(e||(e=Y(t)))(n||t)}})();static \u0275prov=de({token:t,factory:t.\u0275fac})}return t})();var at=["content"],pt=(t,p)=>({"p-progressbar p-component":!0,"p-progressbar-determinate":t,"p-progressbar-indeterminate":p}),st=t=>({$implicit:t});function dt(t,p){if(t&1&&(o(0,"div"),r(1),l()),t&2){let e=c(2);R("display",e.value!=null&&e.value!==0?"flex":"none"),F("data-pc-section","label"),s(),j("",e.value,"",e.unit,"")}}function ut(t,p){t&1&&S(0)}function ct(t,p){if(t&1&&(o(0,"div",3)(1,"div",4),x(2,dt,2,5,"div",5)(3,ut,1,0,"ng-container",6),l()()),t&2){let e=c();w(e.valueStyleClass),R("width",e.value+"%")("background",e.color),u("ngClass","p-progressbar-value p-progressbar-value-animate"),F("data-pc-section","value"),s(2),u("ngIf",e.showValue&&!e.contentTemplate&&!e._contentTemplate),s(),u("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",X(11,st,e.value))}}function mt(t,p){if(t&1&&(o(0,"div",7),f(1,"div",8),l()),t&2){let e=c();w(e.valueStyleClass),u("ngClass","p-progressbar-indeterminate-container"),F("data-pc-section","container"),s(),R("background",e.color),F("data-pc-section","value")}}var Ye=(()=>{class t extends Ue{value;showValue=!0;styleClass;valueStyleClass;style;unit="%";mode="determinate";color;contentTemplate;_componentStyle=Q(Je);templates;_contentTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;default:this._contentTemplate=e.template}})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=Y(t)))(n||t)}})();static \u0275cmp=I({type:t,selectors:[["p-progressBar"],["p-progressbar"],["p-progress-bar"]],contentQueries:function(i,n,a){if(i&1&&(ie(a,at,4),ie(a,Ie,4)),i&2){let d;N(d=k())&&(n.contentTemplate=d.first),N(d=k())&&(n.templates=d)}},inputs:{value:[2,"value","value",ye],showValue:[2,"showValue","showValue",Ee],styleClass:"styleClass",valueStyleClass:"valueStyleClass",style:"style",unit:"unit",mode:"mode",color:"color"},features:[G([Je]),_e,xe],decls:3,vars:14,consts:[["role","progressbar",3,"ngStyle","ngClass"],["style","display:flex",3,"ngClass","class","width","background",4,"ngIf"],[3,"ngClass","class",4,"ngIf"],[2,"display","flex",3,"ngClass"],[1,"p-progressbar-label"],[3,"display",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass"],[1,"p-progressbar-value","p-progressbar-value-animate"]],template:function(i,n){i&1&&(o(0,"div",0),x(1,ct,4,13,"div",1)(2,mt,2,7,"div",2),l()),i&2&&(w(n.styleClass),u("ngStyle",n.style)("ngClass",C(11,pt,n.mode==="determinate",n.mode==="indeterminate")),F("aria-valuemin",0)("aria-valuenow",n.value)("aria-valuemax",100)("data-pc-name","progressbar")("data-pc-section","root"),s(),u("ngIf",n.mode==="determinate"),s(),u("ngIf",n.mode==="indeterminate"))},dependencies:[Oe,H,Pe,Z,we,Fe],encapsulation:2,changeDetection:0})}return t})();var ft=["fileInput"],gt=(t,p)=>({"px-uploader":!0,dragover:t,"no-label":p}),xt=(t,p)=>({file:t,isQueuedFile:!1,fileIndex:p}),_t=(t,p)=>({file:t,isQueuedFile:!0,fileIndex:p}),ht=(t,p,e,i)=>[t,p,e,i],Ct=()=>({height:"1rem","border-bottom-right-radius":0,"border-bottom-left-radius":0}),et=(t,p)=>({icon:t,onClick:p}),tt=()=>({"pointer-events":"visible"});function vt(t,p){if(t&1&&(o(0,"span",10),r(1),l()),t&2){let e=c();s(),Ce(" ",e.intl[e.PxUploaderIntl.ALLOWED_EXTENSIONS]+": "+e.allowedExtensionsText," ")}}function bt(t,p){if(t&1&&(o(0,"span",10),r(1),l()),t&2){let e=c();s(),E(e.intl[e.PxUploaderIntl.IMAGE_SIZE_CHECK_TEXT]+": "+e.maxImageSizeText)}}function Et(t,p){if(t&1&&(o(0,"span",11),r(1),l()),t&2){let e=c();s(),E(e.infoMessage)}}function yt(t,p){if(t&1&&S(0,13),t&2){let e=p.$implicit,i=p.$index;c();let n=z(24);u("ngTemplateOutlet",n)("ngTemplateOutletContext",C(2,xt,e,i))}}function Pt(t,p){if(t&1&&S(0,13),t&2){let e=p.$implicit,i=p.$index;c();let n=z(24);u("ngTemplateOutlet",n)("ngTemplateOutletContext",C(2,_t,e,i))}}function wt(t,p){if(t&1&&f(0,"img",16),t&2){let e=c().file;u("src",e.imagePreviewUrl,fe)}}function Mt(t,p){if(t&1&&f(0,"p-progressBar",26),t&2){let e=c().file;P(g(4,Ct)),u("mode",e._internal.uploadProgress>0?"determinate":"indeterminate")("value",e._internal.uploadProgress||0)}}function Ot(t,p){if(t&1&&f(0,"i",27),t&2){let e=c().file,i=c();w(e._internal.isUploading?(i.icons==null?null:i.icons.fileStatusIconUploading)||"pi pi-spin pi-spinner":e._internal.uploadError!==void 0?(i.icons==null?null:i.icons.fileStatusIconError)||"pi pi-times-circle":(i.icons==null?null:i.icons.fileStatusIconQueued)||"pi pi-hourglass")}}function St(t,p){if(t&1&&(o(0,"span",23),r(1),l()),t&2){let e=c().file;s(),E(e.name)}}function It(t,p){if(t&1&&(o(0,"span",24),r(1),l()),t&2){let e=c().file;s(),j("",e.imageSize.width,"x",e.imageSize.height,"")}}function Ft(t,p){if(t&1&&(o(0,"span",24),r(1),B(2,"pxFileSize"),l()),t&2){let e=c().file;s(),E(L(2,1,e.size||0))}}function Tt(t,p){if(t&1&&S(0,13),t&2){let e=c(2).fileIndex,i=c();u("ngTemplateOutlet",i.buttons.retryUploadButton)("ngTemplateOutletContext",C(2,et,(i.icons==null?null:i.icons.retryUploadButton)||"pi pi-refresh",i.retryUpload(e,!0)))}}function Ut(t,p){if(t&1){let e=T();o(0,"p-button",29),M("onClick",function(){v(e);let n=c(2).fileIndex,a=c();return b(a.retryUpload(n,!1))}),l()}if(t&2){let e=c(3);P(g(3,tt)),u("icon",(e.icons==null?null:e.icons.retryUploadButton)||"pi pi-refresh")}}function Dt(t,p){if(t&1&&x(0,Tt,1,5,"ng-container",13)(1,Ut,1,4,"p-button",28),t&2){let e=c(2);h(e.buttons!=null&&e.buttons.retryUploadButton?0:1)}}function At(t,p){if(t&1&&S(0,13),t&2){let e=c(2),i=e.isQueuedFile,n=e.fileIndex,a=c();u("ngTemplateOutlet",a.buttons.removeFileButton)("ngTemplateOutletContext",C(2,et,(a.icons==null?null:a.icons.removeFileButton)||"pi pi-trash",a.getRemoveFileFn(i,n,!0)))}}function Nt(t,p){if(t&1){let e=T();o(0,"p-button",31),M("onClick",function(){v(e);let n=c(2),a=n.isQueuedFile,d=n.fileIndex,m=c();return b(m.getRemoveFileFn(a,d,!1))}),l()}if(t&2){let e=c(3);P(g(3,tt)),u("icon",(e.icons==null?null:e.icons.removeFileButton)||"pi pi-trash")}}function kt(t,p){if(t&1&&x(0,At,1,5,"ng-container",13)(1,Nt,1,4,"p-button",30),t&2){let e=c(2);h(e.buttons!=null&&e.buttons.removeFileButton?0:1)}}function zt(t,p){if(t&1&&(o(0,"div",15),x(1,wt,1,1,"img",16),o(2,"div",17),x(3,Mt,1,5,"p-progressBar",18),o(4,"div",19)(5,"div",20),x(6,Ot,1,2,"i",21),o(7,"div",22),x(8,St,2,1,"span",23)(9,It,2,2,"span",24)(10,Ft,3,3,"span",24),l()(),o(11,"div",25)(12,"div",20)(13,"span",23),r(14),l()(),x(15,Dt,2,1)(16,kt,2,1),l()()()()),t&2){let e=p.file,i=p.isQueuedFile,n=c();u("ngClass",ve(10,ht,n.displayAs,n.showImagePreview&&e.imagePreviewUrl?"preview":"",e._internal!=null&&e._internal.uploadError?"px-uploader-error":"",i?"queued":"")),s(),h(n.showImagePreview&&e.imagePreviewUrl?1:-1),s(2),h(i&&!(e._internal!=null&&e._internal.uploadError)?3:-1),s(3),h(i?6:-1),s(2),h(n.showFileName?8:-1),s(),h(n.showImageSize&&e.imageSize?9:-1),s(),h(n.showFileSize?10:-1),s(4),E(e._internal==null?null:e._internal.uploadError),s(),h(i&&e._internal.uploadError&&e._internal.canRetryUpload?15:-1),s(),h(!(e._internal!=null&&e._internal.isUploading)&&(e.allowDelete===void 0||e.allowDelete)?16:-1)}}var nt=(()=>{class t{constructor(e,i,n,a){this.http=e,this.changeDetector=i,this.primeNGConfig=n,this.label="",this.multiple=!1,this.displayAs="list",this.allowedExtensions=[],this.maxFileSize=5*1024*1024,this.maxParallelUploads=5,this.showImagePreview=!0,this.showFileName=!0,this.showFileSize=!0,this.showImageSize=!0,this.uploadFinished=new me,this._value=[],this.filesQueue=[],this.maxImageSizeText="",this.allowedExtensionsText="",this.hasFiles=!1,this.dragoverEventActive=!1,this.PxUploaderIntl=_,this._disabled=!1,this.onChange=d=>d,this.onTouched=()=>{},this.isTouched=!1,this.isAngularFormValue=!1,this.uploadingFilesCount=0,this.processingUploadQueue=!1,this.intl=Object.assign({[_.NO_FILES_MSG]:"Drag & drop your files or click to browse",[_.UNKNOWN_ERROR]:"Upload Failed!",[_.INVALID_EXTENSION]:"Invalid file extension!",[_.MAX_SIZE_EXCEEDED]:"File size is too big!",[_.ALLOWED_EXTENSIONS]:"Allowed Extensions",[_.MAX_FILE_SIZE]:"Maximum file size",[_.IMAGE_SIZE_CHECK_FAILED]:"Maximum image width or height exceeded.",[_.IMAGE_SIZE_CHECK_TEXT]:"Allowed image dimensions (HxW)"},a||{})}ngOnChanges(e){if(e.allowedExtensions&&(this.allowedExtensionsText=this.allowedExtensions.join(", "),!e.allowedExtensions.firstChange&&this.changeDetector.detectChanges()),e.maxImageSize){let i=this.maxImageSize;this.maxImageSizeText=(i?.height||"")+"x"+(i?.width||""),!e.maxImageSize.firstChange&&this.changeDetector.detectChanges()}e.multiple&&!e.multiple.firstChange&&this.changeDetector.detectChanges(),e.buttons&&!e.buttons.firstChange&&this.changeDetector.detectChanges()}openFilesInput(){this.fileInput.nativeElement.click()}get value(){return this.multiple?this._value.length?this._value:null:this._value[0]||null}set value(e){e===null?(this._value=[],e=[]):(Array.isArray(e)?!this.multiple&&e.length&&(e=[e[0]]):e=[e],this._value=e),this.hasFiles=e.length>0,this.isAngularFormValue||(this.onChange(this.value),this.onTouched()),this.changeDetector.detectChanges()}get disabled(){return this._disabled}set disabled(e){this._disabled=e}setDisabledState(e){this.disabled=e}writeValue(e){e&&(this.isAngularFormValue=!0,this.value=e,this.isAngularFormValue=!1)}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=()=>!this.isTouched&&e}onFilesAdded(e){if(!(e&&e.length))return;this.multiple||(this.filesQueue[0]?._internal.httpSubscription?.unsubscribe(),this.filesQueue=[],this._value=[],this.changeDetector.detectChanges());let i=this.multiple?e:[e[0]];for(let n=i.length;n--;){let a=i[n];this.checkFile(a).then(d=>{this.filesQueue.push(d),this.processUploadQueue().then(),this.changeDetector.detectChanges()})}this.fileInput.nativeElement.value=""}processUploadQueue(){return A(this,null,function*(){if(this.processingUploadQueue||this.uploadingFilesCount===this.maxParallelUploads)return;this.processingUploadQueue=!0;let e=this.filesQueue,i=e.length,n=null,a=!1;for(let d=0;d<i;++d){let m=e[d];if(!m._internal.uploadError){if(m._internal.isUploading){a=!0;continue}n=m;break}}this.processingUploadQueue=!1,n?this.uploadFile(n).then(d=>{n._internal.httpSubscription=d,this.uploadingFilesCount<this.maxParallelUploads&&this.processUploadQueue().then()}):a||this.uploadFinished.emit(this.value)})}uploadFile(e){return A(this,null,function*(){++this.uploadingFilesCount;let i=new FormData,n=e._internal.uploadedFile,a=this.saveEndpoint,d=a.headers;e._internal.isUploading=!0,i.append("file",n);let m=d instanceof Promise?yield d:d;return this.http.request(a.requestMethod||"POST",a.url,{reportProgress:!0,observe:"events",body:i,headers:m}).pipe(pe(()=>(e._internal.uploadError=this.intl[_.UNKNOWN_ERROR],e._internal.isUploading=!1,delete e._internal.uploadProgress,--this.uploadingFilesCount,this.changeDetector.detectChanges(),ae({})))).subscribe(y=>{switch(y.type){case oe.UploadProgress:e._internal.uploadProgress=Math.floor(y.loaded/(y.total||1)*100),this.changeDetector.detectChanges();break;case oe.Response:--this.uploadingFilesCount,this.multiple||(this._value=[]);let U=this._value,D=this.filesQueue,V=D.indexOf(e);V>-1&&D.splice(V,1),e.metaData=y.body||{},delete e._internal,U.push(e),this.value=U,this.processUploadQueue();break}})})}retryUpload(e,i){let n=()=>{let a=this.filesQueue[e];a&&(delete a._internal.uploadError,this.processUploadQueue().then())};return i?n:n()}removeFileFromQueue(e){this.filesQueue.splice(e,1)}removeFile(e){return A(this,null,function*(){let i=this._value.splice(e,1)[0];if(this.value=this._value,this.deleteEndpoint){let n=this.deleteEndpoint,a=n.headers instanceof Promise?yield n.headers:n.headers;this.http.request(n.url,n.requestMethod||"DELETE",{body:[i],headers:a}).subscribe()}})}onDragEnter(e){e.preventDefault(),this.dragoverEventActive=!0}onDragover(e){e.preventDefault(),this.dragoverEventActive||(this.dragoverEventActive=!0)}onDragLeave(e){e.preventDefault(),this.dragoverEventActive=!1}onFilesDropped(e){e.preventDefault();let i=e.dataTransfer?.files;i&&this.onFilesAdded(i),this.dragoverEventActive=!1}getRemoveFileFn(e,i,n){let a=()=>{e?this.removeFileFromQueue(i):this.removeFile(i)};return n?a:a()}checkFile(e){return A(this,null,function*(){let i={name:e.name,size:e.size,type:e.type,_internal:{canRetryUpload:!0,isUploading:!1,uploadedFile:e,uploadProgress:0}};if(e.size>this.maxFileSize)return this.setPxFileError(_.MAX_SIZE_EXCEEDED,i);let n=this.allowedExtensions;if(n.length){let a=e.name.lastIndexOf(".");if(!(a>0&&n.indexOf(e.name.substring(a+1).toLowerCase())!==-1))return this.setPxFileError(_.INVALID_EXTENSION,i)}if(e.type.includes("image")){let a=yield this.getImageDetails(e);if(i.imagePreviewUrl=a.previewUrl,i.imageSize={width:a.width,height:a.height},!this.checkImage(i))return i}return i})}checkImage(e){if(this.maxImageSize){let i=e.imageSize?.height||0,n=e.imageSize?.width||0,a=this.maxImageSize,d=!1;a.width!==void 0&&a.height!==void 0?a.strict?d=a.height!==i||a.width!==n:d=a.height>i||a.width>n:a.width!==void 0?a.strict?d=a.width!==n:d=a.width>n:a.height!==void 0&&(a.strict?d=a.height!==i:d=a.height>i),d&&this.setPxFileError(_.IMAGE_SIZE_CHECK_FAILED,e)}return!0}setPxFileError(e,i){let n=i._internal;return n.canRetryUpload=!1,n.uploadError=this.intl[e],i}getImageDetails(e){return new Promise(i=>{createImageBitmap(e).then(n=>{i({width:n.width,height:n.height,previewUrl:URL.createObjectURL(e)})}).catch(()=>{i({width:0,height:0,previewUrl:""})})})}ngOnDestroy(){this.uploadFinished.complete()}static{this.\u0275fac=function(i){return new(i||t)(O(Se),O(be),O(K),O(qe,8))}}static{this.\u0275cmp=I({type:t,selectors:[["px-uploader"]],viewQuery:function(i,n){if(i&1&&he(ft,5),i&2){let a;N(a=k())&&(n.fileInput=a.first)}},inputs:{saveEndpoint:"saveEndpoint",deleteEndpoint:"deleteEndpoint",label:"label",multiple:"multiple",displayAs:"displayAs",allowedExtensions:"allowedExtensions",maxFileSize:"maxFileSize",maxParallelUploads:"maxParallelUploads",showImagePreview:"showImagePreview",maxImageSize:"maxImageSize",icons:"icons",buttons:"buttons",infoMessage:"infoMessage",showFileName:"showFileName",showFileSize:"showFileSize",showImageSize:"showImageSize",value:"value",disabled:"disabled"},outputs:{uploadFinished:"uploadFinished"},features:[G([{provide:ke,multi:!0,useExisting:t}]),ce],decls:25,vars:16,consts:[["fileInput",""],["file",""],[3,"dragleave","dragover","dragenter","drop","ngClass"],[1,"px-uploader-label"],[1,"px-uploader-info"],[2,"display","flex","align-items","center","flex-wrap","wrap"],[1,"px-uploader-upload-button",3,"onClick","icon","label"],[1,"px-uploader-info-primary"],[1,"px-uploader-msg"],[1,"px-uploader-info-secondary"],[1,"px-uploader-info-secondary-msg"],[1,"px-uploader-info-secondary-info-msg"],[1,"px-uploader-files"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["type","file",2,"display","none",3,"change","accept","multiple"],[1,"px-uploader-file",3,"ngClass"],["alt","",1,"px-uploader-file-preview",3,"src"],[1,"px-uploader-file-header-container"],[3,"mode","value","style"],[1,"px-uploader-file-header"],[1,"px-uploader-file-info"],[1,"px-uploader-file-status-icon",3,"class"],[1,"px-uploader-file-info","flex-column"],[1,"px-uploader-file-info-primary"],[1,"px-uploader-file-info-secondary"],[1,"px-uploader-file-info","actions"],[3,"mode","value"],[1,"px-uploader-file-status-icon"],[1,"px-uploader-file-info-action-button",3,"icon","style"],[1,"px-uploader-file-info-action-button",3,"onClick","icon"],["severity","warn",1,"px-uploader-file-info-action-button",3,"icon","style"],["severity","warn",1,"px-uploader-file-info-action-button",3,"onClick","icon"]],template:function(i,n){if(i&1){let a=T();o(0,"div",2),M("dragleave",function(m){return v(a),b(n.onDragLeave(m))})("dragover",function(m){return v(a),b(n.onDragover(m))})("dragenter",function(m){return v(a),b(n.onDragEnter(m))})("drop",function(m){return v(a),b(n.onFilesDropped(m))}),o(1,"label",3),r(2),l(),o(3,"div",4)(4,"div",5)(5,"p-button",6),M("onClick",function(){return v(a),b(n.openFilesInput())}),l(),o(6,"div",7)(7,"label",8),r(8),l()()(),o(9,"div",9),x(10,vt,2,1,"span",10),o(11,"span"),r(12),B(13,"pxFileSize"),l(),x(14,bt,2,1,"span",10)(15,Et,2,1,"span",11),l()(),o(16,"div",12),te(17,yt,1,5,"ng-container",13,ee),te(19,Pt,1,5,"ng-container",13,ee),l()(),o(21,"input",14,0),M("change",function(m){return v(a),b(n.onFilesAdded(m.target.files))}),l(),x(23,zt,17,15,"ng-template",null,1,$)}i&2&&(u("ngClass",C(13,gt,n.dragoverEventActive,n.label==="")),s(2),E(n.label),s(3),u("icon",(n.icons==null?null:n.icons.uploadButton)||"pi pi-upload")("label",n.primeNGConfig.translation.upload),s(3),E(n.intl[n.PxUploaderIntl.NO_FILES_MSG]),s(2),h(n.allowedExtensions.length?10:-1),s(2),E(n.intl[n.PxUploaderIntl.MAX_FILE_SIZE]+": "+L(13,11,n.maxFileSize)),s(2),h(n.maxImageSizeText?14:-1),s(),h(n.infoMessage?15:-1),s(2),ne(n._value),s(2),ne(n.filesQueue),s(2),u("accept",n.allowedExtensions.length?"."+n.allowedExtensions.join(",."):null)("multiple",n.multiple))},dependencies:[H,Ye,q,Z,We],styles:['.px-uploader[_ngcontent-%COMP%]{display:flex;position:relative;flex-direction:column;box-sizing:border-box;min-height:50px;border:1px solid var(--p-content-border-color);border-radius:var(--p-border-radius-md);background:var(--p-content-background);color:inherit;padding:var(--px-uploader-body-padding, 1.25rem)}.px-uploader[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .px-uploader[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:before, .px-uploader[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:after{box-sizing:inherit}.px-uploader[_ngcontent-%COMP%]   .px-uploader-label[_ngcontent-%COMP%]{color:inherit;font-size:var(--px-uploader-label-font-size, 1.2rem);font-weight:var(--px-uploader-label-font-weight, 700);padding-bottom:calc(var(--px-uploader-body-padding, 1.25rem) * .8)}.px-uploader.no-label[_ngcontent-%COMP%]   .px-uploader-label[_ngcontent-%COMP%]{display:none}.px-uploader[_ngcontent-%COMP%]   .px-uploader-info[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;color:inherit;padding-bottom:.6rem}.px-uploader[_ngcontent-%COMP%]   .px-uploader-info[_ngcontent-%COMP%]   .px-uploader-upload-button[_ngcontent-%COMP%]{margin:1rem 1rem 1rem 0}.px-uploader[_ngcontent-%COMP%]   .px-uploader-info[_ngcontent-%COMP%]   .px-uploader-info-primary[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;color:inherit;padding-right:.8rem}.px-uploader[_ngcontent-%COMP%]   .px-uploader-info[_ngcontent-%COMP%]   .px-uploader-info-primary[_ngcontent-%COMP%]   .px-uploader-msg[_ngcontent-%COMP%]{color:inherit}.px-uploader[_ngcontent-%COMP%]   .px-uploader-info[_ngcontent-%COMP%]   .px-uploader-info-secondary[_ngcontent-%COMP%]{display:flex;color:inherit;flex-wrap:wrap;flex-shrink:1;flex-direction:column;justify-items:center;font-size:.9rem}.px-uploader[_ngcontent-%COMP%]   .px-uploader-info[_ngcontent-%COMP%]   .px-uploader-info-secondary[_ngcontent-%COMP%]   .px-uploader-info-secondary-info-msg[_ngcontent-%COMP%]{max-width:30rem}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;max-height:var(--px-uploader-files-container-max-height, 20rem);overflow-y:auto}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]:not(:empty){border-top:1px solid var(--p-content-border-color)}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file[_ngcontent-%COMP%]{display:flex;align-items:flex-start;flex-direction:column;position:relative;border:1px solid var(--p-content-border-color);border-radius:var(--p-border-radius-md)}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file.list[_ngcontent-%COMP%]{flex-shrink:0;width:100%;margin-top:.8rem}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file.grid[_ngcontent-%COMP%]{flex-grow:0;flex-shrink:1;flex-basis:auto;margin:.4em}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file[_ngcontent-%COMP%]   .px-uploader-file-header-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;border-radius:var(--p-border-radius-md) var(--p-border-radius-md) 0 0}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file[_ngcontent-%COMP%]   .px-uploader-file-header-container[_ngcontent-%COMP%]   .px-uploader-file-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-wrap:wrap;width:100%;padding:var(--px-uploader-body-padding, 1rem)}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file[_ngcontent-%COMP%]   .px-uploader-file-header-container[_ngcontent-%COMP%]   .px-uploader-file-header[_ngcontent-%COMP%]   .px-uploader-file-info[_ngcontent-%COMP%]{display:flex;align-items:center}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file[_ngcontent-%COMP%]   .px-uploader-file-header-container[_ngcontent-%COMP%]   .px-uploader-file-header[_ngcontent-%COMP%]   .px-uploader-file-info.flex-column[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file[_ngcontent-%COMP%]   .px-uploader-file-header-container[_ngcontent-%COMP%]   .px-uploader-file-header[_ngcontent-%COMP%]   .px-uploader-file-info[_ngcontent-%COMP%]   .px-uploader-file-status-icon[_ngcontent-%COMP%]{font-size:var(--px-uploader-file-info-status-icon-font-size, 2rem);margin-right:.4rem}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file[_ngcontent-%COMP%]   .px-uploader-file-header-container[_ngcontent-%COMP%]   .px-uploader-file-header[_ngcontent-%COMP%]   .px-uploader-file-info[_ngcontent-%COMP%]   .px-uploader-file-info-primary[_ngcontent-%COMP%]{text-rendering:optimizeLegibility;font-weight:var(--px-uploader-file-info-primary-font-weight, 500);font-size:var(--px-uploader-file-info-primary-font-size, 1rem);padding:0 .4rem}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file[_ngcontent-%COMP%]   .px-uploader-file-header-container[_ngcontent-%COMP%]   .px-uploader-file-header[_ngcontent-%COMP%]   .px-uploader-file-info[_ngcontent-%COMP%]   .px-uploader-file-info-secondary[_ngcontent-%COMP%]{text-rendering:optimizeLegibility;font-size:var(--px-uploader-file-info-secondary-font-size, .8rem);padding:0 .4rem}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file[_ngcontent-%COMP%]   .px-uploader-file-header-container[_ngcontent-%COMP%]   .px-uploader-file-header[_ngcontent-%COMP%]   .px-uploader-file-info.actions[_ngcontent-%COMP%]{flex-wrap:nowrap;flex-direction:row;align-items:center}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file[_ngcontent-%COMP%]   .px-uploader-file-header-container[_ngcontent-%COMP%]   .px-uploader-file-header[_ngcontent-%COMP%]   .px-uploader-file-info.actions[_ngcontent-%COMP%]   .px-uploader-file-info-action-button[_ngcontent-%COMP%]{margin-left:.4rem}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file.px-uploader-error[_ngcontent-%COMP%]{border-color:var(--px-uploader-file-error-border-color, var(--p-red-500));color:var(--px-uploader-file-error-color, var(--p-red-500))}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file.px-uploader-error.preview[_ngcontent-%COMP%]   .px-uploader-file-header-container[_ngcontent-%COMP%]{color:var(--px-uploader-file-error-color, #333333)}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file.preview[_ngcontent-%COMP%]{height:var(--px-uploader-file-preview-height, 18rem)}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file.preview[_ngcontent-%COMP%]   .px-uploader-file-header-container[_ngcontent-%COMP%]{opacity:0;transition:opacity .3s ease;background-color:color-mix(in srgb,var(--px-uploader-file-preview-header-background-color, #d0d0d0),transparent 40%);color:var(--px-uploader-file-preview-header-color, #333333)}@supports (-webkit-backdrop-filter: blur(.2em)) or (backdrop-filter: blur(.2em)){.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file.preview[_ngcontent-%COMP%]   .px-uploader-file-header-container[_ngcontent-%COMP%]{-webkit-backdrop-filter:blur(.18rem);backdrop-filter:blur(.18rem)}}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file.preview[_ngcontent-%COMP%]:hover   .px-uploader-file-header-container[_ngcontent-%COMP%], .px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file.preview.queued[_ngcontent-%COMP%]   .px-uploader-file-header-container[_ngcontent-%COMP%], .px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file.preview.px-uploader-error[_ngcontent-%COMP%]   .px-uploader-file-header-container[_ngcontent-%COMP%]{opacity:1}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file[_ngcontent-%COMP%]   .px-uploader-file-preview[_ngcontent-%COMP%]{position:absolute;object-fit:contain;width:100%;height:100%;inset:0}.px-uploader.dragover[_ngcontent-%COMP%]{border:1px solid var(--p-content-border-color)}.px-uploader.dragover[_ngcontent-%COMP%]:before, .px-uploader.dragover[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:-2px;border:2px solid var(--p-primary-color);transition:all .5s;animation:_ngcontent-%COMP%_dragoverClip 3s infinite linear;border-radius:var(--p-border-radius-md)}.px-uploader.dragover[_ngcontent-%COMP%]:after{animation:_ngcontent-%COMP%_dragoverClip 3s infinite -1.5s linear}.px-uploader.dragover[_ngcontent-%COMP%]   .px-uploader-info[_ngcontent-%COMP%]{pointer-events:none}.px-uploader.dragover[_ngcontent-%COMP%]   .px-uploader-info[_ngcontent-%COMP%]   .px-uploader-info-primary[_ngcontent-%COMP%], .px-uploader.dragover[_ngcontent-%COMP%]   .px-uploader-info[_ngcontent-%COMP%]   .px-uploader-info-secondary[_ngcontent-%COMP%]{color:var(--p-primary-color)}.px-uploader.dragover[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]{pointer-events:none}@keyframes _ngcontent-%COMP%_dragoverClip{0%,to{clip-path:inset(0 0 98% 0)}25%{clip-path:inset(0 98% 0 0)}50%{clip-path:inset(98% 0 0 0)}75%{clip-path:inset(0 0 0 98%)}}']})}}return t})();var Bt=()=>["docIntl","docStyling"],W=()=>({width:"100%"}),it=()=>({value:"0",desc:"false"}),ot=()=>({value:"1",desc:"true"}),J=(t,p)=>[t,p],Lt=()=>({value:"list",desc:"list"}),Vt=()=>({value:"grid",desc:"grid"}),Qt=()=>({value:0,desc:"Use default buttons"}),Rt=()=>({value:1,desc:"Use custom remove button template"}),jt=t=>({removeFileButton:t});function Gt(t,p){if(t&1){let e=T();o(0,"p-button",27),M("onClick",function(){let n=v(e).onClick;return b(n())}),f(1,"i"),r(2,"My custom button "),l()}if(t&2){let e=p.icon;s(),w(e)}}var Zn=(()=>{class t{constructor(e){this.pxUploaderCodeExample=Ke,this.uploaderFormControl=new Ve(null),this.saveEndpoint={url:"https://localhost/px-uploader"},this.componentDestroyed$=new re,this.form=e.group({label:["My uploader"],multiple:["0"],showImagePreview:["1"],displayAs:["list"],buttons:[0],allowedExtensions:[".png, .jpg, .pdf"]});let i=localStorage.getItem("__px-uploader-config");i&&this.form.patchValue(JSON.parse(i)),this.form.valueChanges.pipe(se(this.componentDestroyed$)).subscribe(()=>this.storeFilters())}storeFilters(){localStorage.setItem("__px-uploader-config",JSON.stringify(this.form.value))}ngOnDestroy(){this.componentDestroyed$.next(),this.componentDestroyed$.complete()}static{this.\u0275fac=function(i){return new(i||t)(O(Xe))}}static{this.\u0275cmp=I({type:t,selectors:[["app-px-uploader-docs"]],decls:166,vars:53,consts:[["customRemoveButtonTemplate",""],["header","px-uploader",3,"hiddenSections"],["docDescription","",1,"primary-color"],["href","https://primeng.org","target","_blank"],["docOverview",""],[3,"code"],[1,"px-uploader-form","dm:grid","dm:align-items-center",3,"formGroup"],[1,"dm:col-12","dm:md:col-6","dm:lg:col-4","dm:xl:col-3"],["type","text","id","[label]","pInputText","","formControlName","label"],["for","[label]"],["inputId","[multiple]","optionLabel","desc","optionValue","value","formControlName","multiple",3,"options"],["for","[multiple]"],["inputId","[showImagePreview]","optionLabel","desc","optionValue","value","formControlName","showImagePreview",3,"options"],["for","[showImagePreview]"],["inputId","[displayAs]","optionLabel","desc","optionValue","value","formControlName","displayAs",3,"options"],["for","[displayAs]"],["inputId","[buttons]","optionLabel","desc","optionValue","value","formControlName","buttons",3,"options"],["for","[buttons]"],["type","text","id","[allowedExtensions]","pInputText","","formControlName","allowedExtensions"],["for","[allowedExtensions]"],[3,"formControl","saveEndpoint","label","multiple","showImagePreview","displayAs","allowedExtensions","buttons"],["docApi",""],[1,"entry-group"],[1,"title"],[1,"entry"],[1,"dm:quote","code"],[1,"dm:quote"],[3,"onClick"]],template:function(i,n){if(i&1&&(o(0,"app-library-documentation",1)(1,"span",2)(2,"a",3),r(3,"PrimeNG-based"),l(),r(4," library used to upload files. "),l(),o(5,"div",4)(6,"app-code-example",5)(7,"h2"),r(8,"Configuration"),l(),o(9,"form",6)(10,"p-floatlabel",7),f(11,"input",8),o(12,"label",9),r(13,"[label]"),l()(),o(14,"p-floatlabel",7),f(15,"p-select",10),o(16,"label",11),r(17,"[multiple]"),l()(),o(18,"p-floatlabel",7),f(19,"p-select",12),o(20,"label",13),r(21,"[showImagePreview]"),l()(),o(22,"p-floatlabel",7),f(23,"p-select",14),o(24,"label",15),r(25,"[displayAs]"),l()(),o(26,"p-floatlabel",7),f(27,"p-select",16),o(28,"label",17),r(29,"[buttons]"),l()(),o(30,"p-floatlabel",7),f(31,"input",18),o(32,"label",19),r(33,"[allowedExtensions]"),l()()(),f(34,"br"),o(35,"h2"),r(36,"Result"),l(),f(37,"px-uploader",20),x(38,Gt,3,2,"ng-template",null,0,$),f(40,"br"),o(41,"h2"),r(42,"Uploader value"),l(),o(43,"pre")(44,"code"),r(45),B(46,"json"),l()()()(),o(47,"div",21)(48,"div",22)(49,"h2",23),r(50,"Imports"),l(),o(51,"div",24)(52,"pre")(53,"code",25),r(54,"import { PxUploaderComponent } from '@ng-prime-extensions/px-uploader';"),l()()()(),o(55,"div",22)(56,"h2",23),r(57,"Inputs"),l(),o(58,"div",24)(59,"h3"),r(60,"saveEndpoint"),l(),o(61,"p"),r(62,"Endpoint that handles the upload."),l(),o(63,"pre")(64,"code",26),r(65,`export interface PxEndpointConfig {
    url: string;
    requestMethod?: string;
    headers?: HttpHeaders | { [p: string]: string | string[] } | Promise<HttpHeaders | {[p: string]: string | string[]}>;
}`),l()()(),o(66,"div",24)(67,"h3"),r(68,"deleteEndpoint"),l(),o(69,"p"),r(70,"Endpoint that handles file removal."),l()(),o(71,"div",24)(72,"h3"),r(73,"label"),l(),o(74,"p"),r(75,"Uploader label."),l()(),o(76,"div",24)(77,"h3"),r(78,"multiple"),l(),o(79,"p"),r(80,"Allow multiple files?"),l()(),o(81,"div",24)(82,"h3"),r(83,"displayAs"),l(),o(84,"p"),r(85,"Determines how the added files are rendered."),l()(),o(86,"div",24)(87,"h3"),r(88,"allowedExtensions"),l(),o(89,"p"),r(90,"A list of allowed file extensions(lowercase), if empty the extension check is skipped."),l(),o(91,"p"),r(92,"Example: ['txt', 'xlsx', ...]"),l()(),o(93,"div",24)(94,"h3"),r(95,"maxFileSize"),l(),o(96,"p"),r(97,"Maximum file size in bytes. Default: 5MB."),l()(),o(98,"div",24)(99,"h3"),r(100,"maxParallelUploads"),l(),o(101,"p"),r(102,"How many files should we upload in parallel?"),l()(),o(103,"div",24)(104,"h3"),r(105,"showImagePreview"),l(),o(106,"p"),r(107,"Whether to show a preview when the uploaded file is an image."),l()(),o(108,"div",24)(109,"h3"),r(110,"maxImageSize"),l(),o(111,"p"),r(112,"Limits the maximum width and/or height of uploaded images."),l(),o(113,"p"),r(114,`Check if the uploaded image has a width of exactly 100 by passing [maxImageSize]="[{width: 100, strict: true{]" or just limit the maximum by removing the 'strict' property.`),l()(),o(115,"div",24)(116,"h3"),r(117,"buttons"),l(),o(118,"p"),r(119,"Overwrite the default buttons used using a template ref."),l(),o(120,"span"),r(121," The following context is passed to your template:"),f(122,"br"),o(123,"ul")(124,"li"),r(125,"icon - The icon class. This is either the default icon or a custom icon passed to the icons attribute (icons.removeFileButton or icons.retryUploadButton)."),l(),o(126,"li"),r(127,"onClick - Button action function reference"),l()()(),o(128,"p"),r(129,"Example template:"),l(),o(130,"pre")(131,"code",26),r(132,`<ng-template let-icon="icon" let-onClick="onClick" #customRemoveButtonTemplate>
    <p-button (onClick)="onClick()">
        <i [class]="icon"></i>My custom button
    </p-button>
</ng-template>
`),l()()(),o(133,"div",24)(134,"h3"),r(135,"icons"),l(),o(136,"p"),r(137,"Overwrite the default icons used."),l()(),o(138,"div",24)(139,"h3"),r(140,"infoMessage"),l(),o(141,"p"),r(142,"Additional message to be displayed to the user."),l()(),o(143,"div",24)(144,"h3"),r(145,"showFileName"),l(),o(146,"p"),r(147,"Displays the file name."),l()(),o(148,"div",24)(149,"h3"),r(150,"showFileSize"),l(),o(151,"p"),r(152,"Displays the file size in human-readable form."),l()(),o(153,"div",24)(154,"h3"),r(155,"showImageSize"),l(),o(156,"p"),r(157,"If the file is an image, displays the image height and width."),l()()(),o(158,"div",22)(159,"h2",23),r(160,"Outputs"),l(),o(161,"div",24)(162,"h3"),r(163,"uploadFinished"),l(),o(164,"p"),r(165,"Event triggered when all the files in the upload queue are uploaded."),l()()()()()),i&2){let a,d,m,y,U,D,V=z(39);u("hiddenSections",g(26,Bt)),s(6),u("code",n.pxUploaderCodeExample),s(3),u("formGroup",n.form),s(6),P(g(27,W)),u("options",C(30,J,g(28,it),g(29,ot))),s(4),P(g(33,W)),u("options",C(36,J,g(34,it),g(35,ot))),s(4),P(g(39,W)),u("options",C(42,J,g(40,Lt),g(41,Vt))),s(4),P(g(45,W)),u("options",C(48,J,g(46,Qt),g(47,Rt))),s(10),u("formControl",n.uploaderFormControl)("saveEndpoint",n.saveEndpoint)("label",(a=n.form.get("label"))==null?null:a.value)("multiple",((d=n.form.get("multiple"))==null?null:d.value)==="1")("showImagePreview",((m=n.form.get("showImagePreview"))==null?null:m.value)==="1")("displayAs",((y=n.form.get("displayAs"))==null?null:y.value)||"list")("allowedExtensions",(((U=n.form.get("allowedExtensions"))==null?null:U.value)||"").replaceAll(" ","").replaceAll(".","").split(","))("buttons",(D=n.form.get("buttons"))!=null&&D.value?X(51,jt,V):void 0),s(8),E(L(46,24,n.uploaderFormControl.value))}},dependencies:[Ne,De,Ae,Ze,$e,Qe,ze,Be,Le,Re,je,Ge,nt,He,Me,q],styles:[`.px-uploader-form p-floatlabel{margin:16px 0}.px-uploader-form input{width:100%}
`],encapsulation:2})}}return t})();export{Zn as PxUploaderDocsComponent};
