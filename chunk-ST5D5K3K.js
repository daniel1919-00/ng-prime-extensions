import{g as Ze}from"./chunk-W5S2H2NV.js";import"./chunk-A27IZQD5.js";import{f as ke,g as De,i as Ae,j as Ne,k as ze,m as Le,n as Be,p as Ve,r as Re,s as Qe,t as je,v as Ge,w as Xe,y as $e,z as He}from"./chunk-4QVZUDBH.js";import{Ha as Z,a as ne,c as Se,qa as Fe,ra as Ie,ua as Te,va as H,xa as Ue}from"./chunk-F5GRMVDV.js";import{$ as ue,$a as xe,$b as L,Ab as w,Ac as $,Bb as m,Dc as we,Eb as te,Ec as Oe,Fb as he,Gb as D,Ha as me,Hb as A,Ib as N,Jb as r,K as pe,Ka as s,Kb as E,La as O,Lb as _e,Mb as Ce,O as se,Qb as Q,R as de,Rb as g,Sb as j,Tb as C,U as V,Ub as ve,Va as I,Ya as fe,Za as ge,_b as z,aa as v,ab as h,ba as b,bc as G,da as W,dc as be,f as le,fc as ye,gc as Ee,hb as T,ia as ce,ib as u,j as re,jb as R,lb as P,mb as M,nb as y,ob as J,qb as Y,rb as ee,sb as o,tb as l,ub as x,vc as X,x as ae,xb as S,yb as U,yc as Pe,zc as Me}from"./chunk-4P4RNPJS.js";import{f as F}from"./chunk-EQDQRRRY.js";var qe={ts:`
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
    `,styles:""};var _=function(t){return t[t.NO_FILES_MSG=0]="NO_FILES_MSG",t[t.UNKNOWN_ERROR=1]="UNKNOWN_ERROR",t[t.INVALID_EXTENSION=2]="INVALID_EXTENSION",t[t.MAX_SIZE_EXCEEDED=3]="MAX_SIZE_EXCEEDED",t[t.ALLOWED_EXTENSIONS=4]="ALLOWED_EXTENSIONS",t[t.MAX_FILE_SIZE=5]="MAX_FILE_SIZE",t[t.IMAGE_SIZE_CHECK_FAILED=6]="IMAGE_SIZE_CHECK_FAILED",t[t.IMAGE_SIZE_CHECK_TEXT=7]="IMAGE_SIZE_CHECK_TEXT",t}(_||{}),Ke=new de("px-uploader i18n strings");var We=(()=>{class t{constructor(){this.units=V(H).translation.fileSizeTypes||["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}transform(e,i=1024,n=2){let a=this.units;if(Math.abs(e)<i)return e+""+a[0];let d=a.length-1,c=0,f=10**1;do e/=i,++c;while(Math.round(Math.abs(e)*f)/f>=i&&c<d);return e.toFixed(n)+" "+a[c]}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275pipe=fe({name:"pxFileSize",type:t,pure:!0})}}return t})();var lt=({dt:t})=>`
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
`,rt={root:({instance:t})=>["p-progressbar p-component",{"p-progressbar-determinate":t.determinate,"p-progressbar-indeterminate":t.indeterminate}],value:"p-progressbar-value",label:"p-progressbar-label"},Je=(()=>{class t extends Te{name="progressbar";theme=lt;classes=rt;static \u0275fac=(()=>{let e;return function(n){return(e||(e=W(t)))(n||t)}})();static \u0275prov=se({token:t,factory:t.\u0275fac})}return t})();var at=["content"],pt=(t,p)=>({"p-progressbar p-component":!0,"p-progressbar-determinate":t,"p-progressbar-indeterminate":p}),st=t=>({$implicit:t});function dt(t,p){if(t&1&&(o(0,"div"),r(1),l()),t&2){let e=m(2);R("display",e.value!=null&&e.value!==0?"flex":"none"),T("data-pc-section","label"),s(),Ce("",e.value,"",e.unit,"")}}function ut(t,p){t&1&&S(0)}function ct(t,p){if(t&1&&(o(0,"div",3)(1,"div",4),h(2,dt,2,5,"div",5)(3,ut,1,0,"ng-container",6),l()()),t&2){let e=m();M(e.valueStyleClass),R("width",e.value+"%")("background",e.color),u("ngClass","p-progressbar-value p-progressbar-value-animate"),T("data-pc-section","value"),s(2),u("ngIf",e.showValue&&!e.contentTemplate&&!e._contentTemplate),s(),u("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",j(11,st,e.value))}}function mt(t,p){if(t&1&&(o(0,"div",7),x(1,"div",8),l()),t&2){let e=m();M(e.valueStyleClass),u("ngClass","p-progressbar-indeterminate-container"),T("data-pc-section","container"),s(),R("background",e.color),T("data-pc-section","value")}}var Ye=(()=>{class t extends Ue{value;showValue=!0;styleClass;valueStyleClass;style;unit="%";mode="determinate";color;contentTemplate;_componentStyle=V(Je);templates;_contentTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;default:this._contentTemplate=e.template}})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=W(t)))(n||t)}})();static \u0275cmp=I({type:t,selectors:[["p-progressBar"],["p-progressbar"],["p-progress-bar"]],contentQueries:function(i,n,a){if(i&1&&(te(a,at,4),te(a,Fe,4)),i&2){let d;D(d=A())&&(n.contentTemplate=d.first),D(d=A())&&(n.templates=d)}},inputs:{value:[2,"value","value",Ee],showValue:[2,"showValue","showValue",ye],styleClass:"styleClass",valueStyleClass:"valueStyleClass",style:"style",unit:"unit",mode:"mode",color:"color"},features:[Q([Je]),xe,ge],decls:3,vars:14,consts:[["role","progressbar",3,"ngStyle","ngClass"],["style","display:flex",3,"ngClass","class","width","background",4,"ngIf"],[3,"ngClass","class",4,"ngIf"],[2,"display","flex",3,"ngClass"],[1,"p-progressbar-label"],[3,"display",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass"],[1,"p-progressbar-value","p-progressbar-value-animate"]],template:function(i,n){i&1&&(o(0,"div",0),h(1,ct,4,13,"div",1)(2,mt,2,7,"div",2),l()),i&2&&(M(n.styleClass),u("ngStyle",n.style)("ngClass",C(11,pt,n.mode==="determinate",n.mode==="indeterminate")),T("aria-valuemin",0)("aria-valuenow",n.value)("aria-valuemax",100)("data-pc-name","progressbar")("data-pc-section","root"),s(),u("ngIf",n.mode==="determinate"),s(),u("ngIf",n.mode==="indeterminate"))},dependencies:[Oe,X,Pe,$,Me,Ie],encapsulation:2,changeDetection:0})}return t})();var ft=["fileInput"],gt=(t,p)=>({"px-uploader":!0,dragover:t,"no-label":p}),xt=(t,p)=>({file:t,isQueuedFile:!1,fileIndex:p}),ht=(t,p)=>({file:t,isQueuedFile:!0,fileIndex:p}),_t=(t,p,e)=>[t,p,e],Ct=()=>({height:"1rem"}),et=(t,p)=>({icon:t,onClick:p}),tt=()=>({"pointer-events":"visible"});function vt(t,p){if(t&1&&(o(0,"span",10),r(1),l()),t&2){let e=m();s(),_e(" ",e.intl[e.PxUploaderIntl.ALLOWED_EXTENSIONS]+": "+e.allowedExtensionsText," ")}}function bt(t,p){if(t&1&&(o(0,"span",10),r(1),l()),t&2){let e=m();s(),E(e.intl[e.PxUploaderIntl.IMAGE_SIZE_CHECK_TEXT]+": "+e.maxImageSizeText)}}function yt(t,p){if(t&1&&(o(0,"span",11),r(1),l()),t&2){let e=m();s(),E(e.infoMessage)}}function Et(t,p){if(t&1&&S(0,13),t&2){let e=p.$implicit,i=p.$index;m();let n=N(24);u("ngTemplateOutlet",n)("ngTemplateOutletContext",C(2,xt,e,i))}}function Pt(t,p){if(t&1&&S(0,13),t&2){let e=p.$implicit,i=p.$index;m();let n=N(24);u("ngTemplateOutlet",n)("ngTemplateOutletContext",C(2,ht,e,i))}}function Mt(t,p){if(t&1&&x(0,"p-progressBar",25),t&2){let e=m().file;P(g(4,Ct)),u("mode",e.uploadProgress>0?"determinate":"indeterminate")("value",e.uploadProgress||0)}}function wt(t,p){if(t&1&&x(0,"i",26),t&2){let e=m().file,i=m();M(e.isUploading?(i.icons==null?null:i.icons.fileStatusIconUploading)||"pi pi-spin pi-spinner":e.uploadError!==void 0?(i.icons==null?null:i.icons.fileStatusIconError)||"pi pi-times-circle":(i.icons==null?null:i.icons.fileStatusIconQueued)||"pi pi-hourglass")}}function Ot(t,p){if(t&1&&S(0,13),t&2){let e=m(2).fileIndex,i=m();u("ngTemplateOutlet",i.buttons.retryUploadButton)("ngTemplateOutletContext",C(2,et,(i.icons==null?null:i.icons.retryUploadButton)||"pi pi-refresh",i.retryUpload(e,!0)))}}function St(t,p){if(t&1){let e=U();o(0,"p-button",28),w("onClick",function(){v(e);let n=m(2).fileIndex,a=m();return b(a.retryUpload(n,!1))}),l()}if(t&2){let e=m(3);P(g(3,tt)),u("icon",(e.icons==null?null:e.icons.retryUploadButton)||"pi pi-refresh")}}function Ft(t,p){if(t&1&&h(0,Ot,1,5,"ng-container",13)(1,St,1,4,"p-button",27),t&2){let e=m(2);y(e.buttons!=null&&e.buttons.retryUploadButton?0:1)}}function It(t,p){if(t&1&&S(0,13),t&2){let e=m(2),i=e.isQueuedFile,n=e.fileIndex,a=m();u("ngTemplateOutlet",a.buttons.removeFileButton)("ngTemplateOutletContext",C(2,et,(a.icons==null?null:a.icons.removeFileButton)||"pi pi-trash",a.getRemoveFileFn(i,n,!0)))}}function Tt(t,p){if(t&1){let e=U();o(0,"p-button",30),w("onClick",function(){v(e);let n=m(2),a=n.isQueuedFile,d=n.fileIndex,c=m();return b(c.getRemoveFileFn(a,d,!1))}),l()}if(t&2){let e=m(3);P(g(3,tt)),u("icon",(e.icons==null?null:e.icons.removeFileButton)||"pi pi-trash")}}function Ut(t,p){if(t&1&&h(0,It,1,5,"ng-container",13)(1,Tt,1,4,"p-button",29),t&2){let e=m(2);y(e.buttons!=null&&e.buttons.removeFileButton?0:1)}}function kt(t,p){if(t&1&&x(0,"img",24),t&2){let e=m().file;u("src",e.imagePreviewUrl,me)}}function Dt(t,p){if(t&1&&(o(0,"div",15),h(1,Mt,1,5,"p-progressBar",16),o(2,"div",17)(3,"div",18),h(4,wt,1,2,"i",19),o(5,"div",20)(6,"span",21),r(7),l(),o(8,"span",22),r(9),z(10,"pxFileSize"),l()()(),o(11,"div",23)(12,"div",18)(13,"span",21),r(14),l()(),h(15,Ft,2,1)(16,Ut,2,1),l()(),h(17,kt,1,1,"img",24),l()),t&2){let e=p.file,i=p.isQueuedFile,n=m();u("ngClass",ve(12,_t,n.displayAs,n.showImagePreview&&e.imagePreviewUrl?"preview":"",e.uploadError!==void 0?"px-uploader-error":"")),s(),y(e.isUploading||i&&e.uploadError===void 0?1:-1),s(),u("ngClass",e.uploadError?"error":"success"),s(2),y(i?4:-1),s(3),E(e.name),s(2),E(L(10,10,e.size||0)),s(5),E(e.uploadError),s(),y(i&&e.uploadError!==void 0&&e.canRetryUpload?15:-1),s(),y(!e.isUploading&&(e.allowDelete===void 0||e.allowDelete)?16:-1),s(),y(n.showImagePreview&&e.imagePreviewUrl?17:-1)}}var nt=(()=>{class t{constructor(e,i,n,a){this.http=e,this.changeDetector=i,this.primeNGConfig=n,this.label="",this.multiple=!1,this.displayAs="list",this.allowedExtensions=[],this.maxFileSize=5*1024*1024,this.maxParallelUploads=5,this.showImagePreview=!0,this.uploadFinished=new ce,this._value=[],this.filesQueue=[],this.maxImageSizeText="",this.allowedExtensionsText="",this.hasFiles=!1,this.dragoverEventActive=!1,this.PxUploaderIntl=_,this._disabled=!1,this.onChange=d=>d,this.onTouched=()=>{},this.isTouched=!1,this.isAngularFormValue=!1,this.uploadingFilesCount=0,this.processingUploadQueue=!1,this.intl=Object.assign({[_.NO_FILES_MSG]:"Drag & drop your files or click to browse",[_.UNKNOWN_ERROR]:"Upload Failed!",[_.INVALID_EXTENSION]:"Invalid file extension!",[_.MAX_SIZE_EXCEEDED]:"File size is too big!",[_.ALLOWED_EXTENSIONS]:"Allowed Extensions",[_.MAX_FILE_SIZE]:"Maximum file size",[_.IMAGE_SIZE_CHECK_FAILED]:"Maximum width or height exceeded.",[_.IMAGE_SIZE_CHECK_TEXT]:"Allowed image dimensions (HxW)"},a||{})}ngOnChanges(e){e.allowedExtensions&&(this.allowedExtensionsText=this.allowedExtensions.join(", "),!e.allowedExtensions.firstChange&&this.changeDetector.markForCheck()),e.maxImageSize&&this.maxImageSize?.length&&(this.maxImageSizeText=this.maxImageSize.map(i=>i.height+"x"+i.width).join(", "),!e.maxImageSize.firstChange&&this.changeDetector.markForCheck()),e.multiple&&!e.multiple.firstChange&&this.changeDetector.markForCheck(),e.buttons&&!e.buttons.firstChange&&this.changeDetector.markForCheck()}openFilesInput(){this.fileInput.nativeElement.click()}get value(){return this.multiple?this._value.length?this._value:null:this._value[0]||null}set value(e){e===null?(this._value=[],e=[]):(Array.isArray(e)?!this.multiple&&e.length&&(e=[e[0]]):e=[e],this._value=e),this.hasFiles=e.length>0,this.isAngularFormValue||(this.onChange(this.value),this.onTouched()),this.changeDetector.markForCheck()}get disabled(){return this._disabled}set disabled(e){this._disabled=e}setDisabledState(e){this.disabled=e}writeValue(e){e&&(this.isAngularFormValue=!0,this.value=e,this.isAngularFormValue=!1)}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=()=>!this.isTouched&&e}onFilesAdded(e){if(!(e&&e.length))return;this.multiple||(this.filesQueue[0]?.httpSubscription?.unsubscribe(),this.filesQueue=[],this._value=[],this.changeDetector.markForCheck());let i=this.multiple?e:[e[0]];for(let n=i.length;n--;){let a=i[n];this.checkFile(a).then(d=>{let c={name:a.name,uploadProgress:0,size:a.size,canRetryUpload:d==="",imagePreviewUrl:a.type.includes("image")?URL.createObjectURL(a):"",uploadedFile:a};d!==""&&(c.uploadError=d),this.filesQueue.push(c),this.processUploadQueue().then(),this.changeDetector.markForCheck()})}this.fileInput.nativeElement.value=""}processUploadQueue(){return F(this,null,function*(){if(this.processingUploadQueue||this.uploadingFilesCount===this.maxParallelUploads)return;this.processingUploadQueue=!0;let e=this.filesQueue,i=null,n=e.length,a=!1;for(let d=0;d<n;++d){let c=e[d];if(!c.uploadError){if(c.isUploading){a=!0;continue}i=c;break}}this.processingUploadQueue=!1,i?(i.httpSubscription=yield this.uploadFile(i),this.uploadingFilesCount<this.maxParallelUploads&&this.processUploadQueue().then()):a||this.uploadFinished.emit(this.value)})}uploadFile(e){return F(this,null,function*(){++this.uploadingFilesCount;let i=new FormData,n=e.uploadedFile,a=this.saveEndpoint,d=a.headers;e.isUploading=!0,i.append("file",n);let c=d instanceof Promise?yield d:d;return this.http.request(a.requestMethod||"POST",a.url,{reportProgress:!0,observe:"events",body:i,headers:c}).pipe(ae(()=>(e.uploadError=this.intl[_.UNKNOWN_ERROR],e.isUploading=!1,delete e.uploadProgress,--this.uploadingFilesCount,this.changeDetector.markForCheck(),re({})))).subscribe(f=>{switch(f.type){case ne.UploadProgress:e.uploadProgress=Math.floor(f.loaded/(f.total||1)*100),this.changeDetector.markForCheck();break;case ne.Response:--this.uploadingFilesCount,this.multiple||(this._value=[]);let k=this._value;k.push({name:n.name,size:n.size,type:n.type,imagePreviewUrl:n.type.includes("image")?URL.createObjectURL(n):"",metaData:f.body||{}}),this.value=k;let B=this.filesQueue,oe=B.indexOf(e);oe>-1&&B.splice(oe,1),this.processUploadQueue();break}})})}retryUpload(e,i){let n=()=>{let a=this.filesQueue[e];a&&(delete a.uploadError,this.processUploadQueue().then())};return i?n:n()}removeFileFromQueue(e){this.filesQueue.splice(e,1)}removeFile(e){return F(this,null,function*(){let i=this._value.splice(e,1)[0];if(this.value=this._value,this.deleteEndpoint){let n=this.deleteEndpoint,a=n.headers instanceof Promise?yield n.headers:n.headers;this.http.request(n.url,n.requestMethod||"DELETE",{body:[i],headers:a}).subscribe()}})}onDragEnter(e){e.preventDefault(),this.dragoverEventActive=!0}onDragover(e){e.preventDefault(),this.dragoverEventActive||(this.dragoverEventActive=!0)}onDragLeave(e){e.preventDefault(),this.dragoverEventActive=!1}onFilesDropped(e){e.preventDefault();let i=e.dataTransfer?.files;i&&this.onFilesAdded(i),this.dragoverEventActive=!1}getRemoveFileFn(e,i,n){let a=()=>{e?this.removeFileFromQueue(i):this.removeFile(i)};return n?a:a()}checkFile(e){return F(this,null,function*(){if(e.size>this.maxFileSize)return this.intl[_.MAX_SIZE_EXCEEDED];let i=this.allowedExtensions;if(i.length){let n=e.name.lastIndexOf(".");if(!(n>0&&i.indexOf(e.name.substring(n+1).toLowerCase())!==-1))return this.intl[_.INVALID_EXTENSION]}if(e.type.includes("image")&&this.maxImageSize?.length){let n=this.maxImageSize,a=yield this.getImageSize(URL.createObjectURL(e)),d=!0;for(let c=n.length;c--;){let f=n[c];if(f.width!==void 0&&f.height!==void 0&&f.width===a.width&&f.height===a.height){d=!1;break}else if(f.width!==void 0&&f.height===void 0&&f.width===a.width){d=!1;break}else if(f.height!==void 0&&f.width===void 0&&f.height===a.height){d=!1;break}}if(d)return this.intl[_.IMAGE_SIZE_CHECK_FAILED]}return""})}getImageSize(e){return F(this,null,function*(){return new Promise((i,n)=>{let a=new Image;a.onload=()=>{i({width:a.width,height:a.height})},a.onerror=()=>{n("Error loading image")},a.src=e})})}ngOnDestroy(){this.uploadFinished.complete()}static{this.\u0275fac=function(i){return new(i||t)(O(Se),O(be),O(H),O(Ke,8))}}static{this.\u0275cmp=I({type:t,selectors:[["px-uploader"]],viewQuery:function(i,n){if(i&1&&he(ft,5),i&2){let a;D(a=A())&&(n.fileInput=a.first)}},inputs:{saveEndpoint:"saveEndpoint",deleteEndpoint:"deleteEndpoint",label:"label",multiple:"multiple",displayAs:"displayAs",allowedExtensions:"allowedExtensions",maxFileSize:"maxFileSize",maxParallelUploads:"maxParallelUploads",showImagePreview:"showImagePreview",maxImageSize:"maxImageSize",icons:"icons",buttons:"buttons",infoMessage:"infoMessage",value:"value",disabled:"disabled"},outputs:{uploadFinished:"uploadFinished"},features:[Q([{provide:Ne,multi:!0,useExisting:t}]),ue],decls:25,vars:16,consts:[["fileInput",""],["file",""],[3,"dragleave","dragover","dragenter","drop","ngClass"],[1,"px-uploader-label"],[1,"px-uploader-info"],[2,"display","flex","align-items","center","flex-wrap","wrap"],[1,"px-uploader-upload-button",3,"onClick","icon","label"],[1,"px-uploader-info-primary"],[1,"px-uploader-msg"],[1,"px-uploader-info-secondary"],[1,"px-uploader-info-secondary-msg"],[1,"px-uploader-info-secondary-info-msg"],[1,"px-uploader-files"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["type","file",2,"display","none",3,"change","accept","multiple"],[1,"px-uploader-file",3,"ngClass"],[1,"px-uploader-file-upload-progress",3,"mode","value","style"],[1,"px-uploader-file-header",3,"ngClass"],[1,"px-uploader-file-info"],[1,"px-uploader-file-status-icon",3,"class"],[1,"px-uploader-file-info","flex-column"],[1,"px-uploader-file-info-primary"],[1,"px-uploader-file-info-secondary"],[1,"px-uploader-file-info","actions"],["alt","",1,"px-uploader-file-preview",3,"src"],[1,"px-uploader-file-upload-progress",3,"mode","value"],[1,"px-uploader-file-status-icon"],[1,"px-uploader-file-info-action-button",3,"icon","style"],[1,"px-uploader-file-info-action-button",3,"onClick","icon"],["severity","warn",1,"px-uploader-file-info-action-button",3,"icon","style"],["severity","warn",1,"px-uploader-file-info-action-button",3,"onClick","icon"]],template:function(i,n){if(i&1){let a=U();o(0,"div",2),w("dragleave",function(c){return v(a),b(n.onDragLeave(c))})("dragover",function(c){return v(a),b(n.onDragover(c))})("dragenter",function(c){return v(a),b(n.onDragEnter(c))})("drop",function(c){return v(a),b(n.onFilesDropped(c))}),o(1,"label",3),r(2),l(),o(3,"div",4)(4,"div",5)(5,"p-button",6),w("onClick",function(){return v(a),b(n.openFilesInput())}),l(),o(6,"div",7)(7,"label",8),r(8),l()()(),o(9,"div",9),h(10,vt,2,1,"span",10),o(11,"span"),r(12),z(13,"pxFileSize"),l(),h(14,bt,2,1,"span",10)(15,yt,2,1,"span",11),l()(),o(16,"div",12),Y(17,Et,1,5,"ng-container",13,J),Y(19,Pt,1,5,"ng-container",13,J),l()(),o(21,"input",14,0),w("change",function(c){return v(a),b(n.onFilesAdded(c.target.files))}),l(),h(23,Dt,18,16,"ng-template",null,1,G)}i&2&&(u("ngClass",C(13,gt,n.dragoverEventActive,n.label==="")),s(2),E(n.label),s(3),u("icon",(n.icons==null?null:n.icons.uploadButton)||"pi pi-upload")("label",n.primeNGConfig.translation.upload),s(3),E(n.intl[n.PxUploaderIntl.NO_FILES_MSG]),s(2),y(n.allowedExtensions.length?10:-1),s(2),E(n.intl[n.PxUploaderIntl.MAX_FILE_SIZE]+": "+L(13,11,n.maxFileSize)),s(2),y(n.maxImageSizeText?14:-1),s(),y(n.infoMessage?15:-1),s(2),ee(n._value),s(2),ee(n.filesQueue),s(2),u("accept",n.allowedExtensions.length?"."+n.allowedExtensions.join(",."):null)("multiple",n.multiple))},dependencies:[X,Ye,Z,$,We],styles:['.px-uploader[_ngcontent-%COMP%]{display:flex;position:relative;flex-direction:column;box-sizing:border-box;min-height:50px;border:1px solid var(--p-content-border-color);border-radius:var(--p-border-radius-md);background:var(--p-content-background);color:inherit;padding:var(--px-uploader-body-padding, 1.25rem)}.px-uploader[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .px-uploader[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:before, .px-uploader[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:after{box-sizing:inherit}.px-uploader[_ngcontent-%COMP%]   .px-uploader-label[_ngcontent-%COMP%]{color:inherit;font-size:1.3rem;font-weight:700;padding-bottom:calc(var(--px-uploader-body-padding, 1.25rem) * .8)}.px-uploader.no-label[_ngcontent-%COMP%]   .px-uploader-label[_ngcontent-%COMP%]{display:none}.px-uploader[_ngcontent-%COMP%]   .px-uploader-info[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;color:inherit}.px-uploader[_ngcontent-%COMP%]   .px-uploader-info[_ngcontent-%COMP%]   .px-uploader-upload-button[_ngcontent-%COMP%]{margin:1rem 1rem 1rem 0}.px-uploader[_ngcontent-%COMP%]   .px-uploader-info[_ngcontent-%COMP%]   .px-uploader-info-primary[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;color:inherit;padding-right:.8rem}.px-uploader[_ngcontent-%COMP%]   .px-uploader-info[_ngcontent-%COMP%]   .px-uploader-info-primary[_ngcontent-%COMP%]   .px-uploader-msg[_ngcontent-%COMP%]{color:inherit}.px-uploader[_ngcontent-%COMP%]   .px-uploader-info[_ngcontent-%COMP%]   .px-uploader-info-secondary[_ngcontent-%COMP%]{display:flex;color:inherit;flex-wrap:wrap;flex-shrink:1;flex-direction:column;justify-items:center;font-size:.9rem}.px-uploader[_ngcontent-%COMP%]   .px-uploader-info[_ngcontent-%COMP%]   .px-uploader-info-secondary[_ngcontent-%COMP%]   .px-uploader-info-secondary-info-msg[_ngcontent-%COMP%]{max-width:30rem}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;max-height:var(--px-uploader-files-container-max-height, 20rem);overflow-y:auto}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]:not(:empty){border-top:1px solid var(--p-content-border-color)}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file[_ngcontent-%COMP%]{display:flex;align-items:flex-start;flex-direction:column;position:relative;border:1px solid var(--p-content-border-color);border-radius:var(--p-border-radius-md)}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file.list[_ngcontent-%COMP%]{flex-shrink:0;width:100%;margin-top:.8rem}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file.grid[_ngcontent-%COMP%]{flex-grow:0;flex-shrink:1;flex-basis:auto;margin:.4em}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file.preview[_ngcontent-%COMP%]{height:var(--px-uploader-file-preview-height, 14rem)}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file[_ngcontent-%COMP%]   .px-uploader-file-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-wrap:wrap;width:100%;padding:var(--px-uploader-body-padding, 1rem);z-index:2;border-radius:var(--p-border-radius-md) var(--p-border-radius-md) 0 0}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file[_ngcontent-%COMP%]   .px-uploader-file-header[_ngcontent-%COMP%]   .px-uploader-file-info[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file[_ngcontent-%COMP%]   .px-uploader-file-header[_ngcontent-%COMP%]   .px-uploader-file-info.flex-column[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file[_ngcontent-%COMP%]   .px-uploader-file-header[_ngcontent-%COMP%]   .px-uploader-file-info[_ngcontent-%COMP%]   .px-uploader-file-status-icon[_ngcontent-%COMP%]{font-size:var(--px-uploader-file-info-status-icon-font-size, 2rem);margin-right:.4rem}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file[_ngcontent-%COMP%]   .px-uploader-file-header[_ngcontent-%COMP%]   .px-uploader-file-info[_ngcontent-%COMP%]   .px-uploader-file-info-primary[_ngcontent-%COMP%]{text-rendering:optimizeLegibility;font-weight:var(--px-uploader-file-info-primary-font-weight, 500);font-size:var(--px-uploader-file-info-primary-font-size, 1rem);padding:0 .4rem}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file[_ngcontent-%COMP%]   .px-uploader-file-header[_ngcontent-%COMP%]   .px-uploader-file-info[_ngcontent-%COMP%]   .px-uploader-file-info-secondary[_ngcontent-%COMP%]{text-rendering:optimizeLegibility;font-size:var(--px-uploader-file-info-secondary-font-size, .8rem);padding:0 .4rem}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file[_ngcontent-%COMP%]   .px-uploader-file-header[_ngcontent-%COMP%]   .px-uploader-file-info.actions[_ngcontent-%COMP%]{flex-wrap:nowrap;flex-direction:row;align-items:center}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file[_ngcontent-%COMP%]   .px-uploader-file-header[_ngcontent-%COMP%]   .px-uploader-file-info.actions[_ngcontent-%COMP%]   .px-uploader-file-info-action-button[_ngcontent-%COMP%]{margin-left:.4rem}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file.preview[_ngcontent-%COMP%]{height:var(--px-uploader-file-preview-height, 18rem)}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file.preview[_ngcontent-%COMP%]   .px-uploader-file-header[_ngcontent-%COMP%]{background-color:color-mix(in srgb,var(--px-uploader-file-preview-header-backgorund-color, var(--p-primary-color)),transparent 40%);color:var(--px-uploader-file-preview-header-color, --p-primary-contrast-color)}@supports (-webkit-backdrop-filter: blur(.2em)) or (backdrop-filter: blur(.2em)){.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file.preview[_ngcontent-%COMP%]   .px-uploader-file-header[_ngcontent-%COMP%]{-webkit-backdrop-filter:blur(.18rem);backdrop-filter:blur(.18rem)}}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file.px-uploader-error.preview[_ngcontent-%COMP%]   .px-uploader-file-header[_ngcontent-%COMP%]{background-color:color-mix(in srgb,var(--px-uploader-file-preview-header-background-color-error, var(--p-red-500)),transparent 40%);color:var(--px-uploader-file-preview-header-color-error, white)}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file[_ngcontent-%COMP%]   .px-uploader-file-preview[_ngcontent-%COMP%]{position:absolute;object-fit:contain;width:100%;height:100%;inset:0}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file[_ngcontent-%COMP%]   .px-uploader-file-upload-progress[_ngcontent-%COMP%]{width:100%;z-index:3}.px-uploader.dragover[_ngcontent-%COMP%]{border:1px solid var(--p-content-border-color)}.px-uploader.dragover[_ngcontent-%COMP%]:before, .px-uploader.dragover[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:-2px;border:2px solid var(--p-primary-color);transition:all .5s;animation:_ngcontent-%COMP%_dragoverClip 3s infinite linear;border-radius:var(--p-border-radius-md)}.px-uploader.dragover[_ngcontent-%COMP%]:after{animation:_ngcontent-%COMP%_dragoverClip 3s infinite -1.5s linear}.px-uploader.dragover[_ngcontent-%COMP%]   .px-uploader-info[_ngcontent-%COMP%]{pointer-events:none}.px-uploader.dragover[_ngcontent-%COMP%]   .px-uploader-info[_ngcontent-%COMP%]   .px-uploader-info-primary[_ngcontent-%COMP%], .px-uploader.dragover[_ngcontent-%COMP%]   .px-uploader-info[_ngcontent-%COMP%]   .px-uploader-info-secondary[_ngcontent-%COMP%]{color:var(--p-primary-color)}.px-uploader.dragover[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]{pointer-events:none}@keyframes _ngcontent-%COMP%_dragoverClip{0%,to{clip-path:inset(0 0 98% 0)}25%{clip-path:inset(0 98% 0 0)}50%{clip-path:inset(98% 0 0 0)}75%{clip-path:inset(0 0 0 98%)}}']})}}return t})();var At=()=>["docIntl","docStyling"],q=()=>({width:"100%"}),it=()=>({value:"0",desc:"false"}),ot=()=>({value:"1",desc:"true"}),K=(t,p)=>[t,p],Nt=()=>({value:"list",desc:"list"}),zt=()=>({value:"grid",desc:"grid"}),Lt=()=>({value:0,desc:"Use default buttons"}),Bt=()=>({value:1,desc:"Use custom remove button template"}),Vt=t=>({removeFileButton:t});function Rt(t,p){if(t&1){let e=U();o(0,"p-button",25),w("onClick",function(){let n=v(e).onClick;return b(n())}),x(1,"i"),r(2,"My custom button "),l()}if(t&2){let e=p.icon;s(),M(e)}}var Xn=(()=>{class t{constructor(e){this.pxUploaderCodeExample=qe,this.uploaderFormControl=new Ve(null),this.saveEndpoint={url:"https://localhost/px-uploader"},this.componentDestroyed$=new le,this.form=e.group({label:["My uploader"],multiple:["0"],showImagePreview:["1"],displayAs:["list"],buttons:[0]});let i=localStorage.getItem("__px-uploader-config");i&&this.form.patchValue(JSON.parse(i)),this.form.valueChanges.pipe(pe(this.componentDestroyed$)).subscribe(()=>this.storeFilters())}storeFilters(){localStorage.setItem("__px-uploader-config",JSON.stringify(this.form.value))}ngOnDestroy(){this.componentDestroyed$.next(),this.componentDestroyed$.complete()}static{this.\u0275fac=function(i){return new(i||t)(O(Xe))}}static{this.\u0275cmp=I({type:t,selectors:[["app-px-uploader-docs"]],decls:147,vars:52,consts:[["customRemoveButtonTemplate",""],["header","px-uploader",3,"hiddenSections"],["docDescription","",1,"primary-color"],["href","https://primeng.org","target","_blank"],["docOverview",""],[3,"code"],[1,"dm:grid","dm:align-items-center",3,"formGroup"],[1,"dm:col-12","dm:md:col-6","dm:lg:col-4","dm:xl:col-3"],["type","text","id","[label]","pInputText","","formControlName","label"],["for","[label]"],["inputId","[multiple]","optionLabel","desc","optionValue","value","formControlName","multiple",3,"options"],["for","[multiple]"],["inputId","[showImagePreview]","optionLabel","desc","optionValue","value","formControlName","showImagePreview",3,"options"],["for","[showImagePreview]"],["inputId","[displayAs]","optionLabel","desc","optionValue","value","formControlName","displayAs",3,"options"],["for","[displayAs]"],["inputId","[buttons]","optionLabel","desc","optionValue","value","formControlName","buttons",3,"options"],["for","[buttons]"],[3,"formControl","saveEndpoint","label","multiple","showImagePreview","displayAs","buttons"],["docApi",""],[1,"entry-group"],[1,"title"],[1,"entry"],[1,"dm:quote","code"],[1,"dm:quote"],[3,"onClick"]],template:function(i,n){if(i&1&&(o(0,"app-library-documentation",1)(1,"span",2)(2,"a",3),r(3,"PrimeNG-based"),l(),r(4," library used to upload files. "),l(),o(5,"div",4)(6,"app-code-example",5)(7,"h2"),r(8,"Configuration"),l(),o(9,"form",6)(10,"p-floatlabel",7),x(11,"input",8),o(12,"label",9),r(13,"[label]"),l()(),o(14,"p-floatlabel",7),x(15,"p-select",10),o(16,"label",11),r(17,"[multiple]"),l()(),o(18,"p-floatlabel",7),x(19,"p-select",12),o(20,"label",13),r(21,"[showImagePreview]"),l()(),o(22,"p-floatlabel",7),x(23,"p-select",14),o(24,"label",15),r(25,"[displayAs]"),l()(),o(26,"p-floatlabel",7),x(27,"p-select",16),o(28,"label",17),r(29,"[buttons]"),l()()(),x(30,"br"),o(31,"h2"),r(32,"Result"),l(),x(33,"px-uploader",18),h(34,Rt,3,2,"ng-template",null,0,G),x(36,"br"),o(37,"h2"),r(38,"Uploader value"),l(),o(39,"pre")(40,"code"),r(41),z(42,"json"),l()()()(),o(43,"div",19)(44,"div",20)(45,"h2",21),r(46,"Imports"),l(),o(47,"div",22)(48,"pre")(49,"code",23),r(50,"import { PxUploaderComponent } from '@ng-prime-extensions/px-uploader';"),l()()()(),o(51,"div",20)(52,"h2",21),r(53,"Inputs"),l(),o(54,"div",22)(55,"h3"),r(56,"saveEndpoint"),l(),o(57,"p"),r(58,"Endpoint that handles the upload."),l(),o(59,"pre")(60,"code",24),r(61,`export interface PxEndpointConfig {
    url: string;
    requestMethod?: string;
    headers?: HttpHeaders | { [p: string]: string | string[] } | Promise<HttpHeaders | {[p: string]: string | string[]}>;
}`),l()()(),o(62,"div",22)(63,"h3"),r(64,"deleteEndpoint"),l(),o(65,"p"),r(66,"Endpoint that handles file removal."),l()(),o(67,"div",22)(68,"h3"),r(69,"label"),l(),o(70,"p"),r(71,"Uploader label."),l()(),o(72,"div",22)(73,"h3"),r(74,"multiple"),l(),o(75,"p"),r(76,"Allow multiple files?"),l()(),o(77,"div",22)(78,"h3"),r(79,"displayAs"),l(),o(80,"p"),r(81,"Determines how the added files are rendered."),l()(),o(82,"div",22)(83,"h3"),r(84,"allowedExtensions"),l(),o(85,"p"),r(86,"A list of allowed file extensions(lowercase), if empty the extension check is skipped."),l(),o(87,"p"),r(88,"Example: ['txt', 'xlsx', ...]"),l()(),o(89,"div",22)(90,"h3"),r(91,"maxFileSize"),l(),o(92,"p"),r(93,"Maximum file size in bytes. Default: 5MB."),l()(),o(94,"div",22)(95,"h3"),r(96,"maxParallelUploads"),l(),o(97,"p"),r(98,"How many files should we upload in parallel?"),l()(),o(99,"div",22)(100,"h3"),r(101,"showImagePreview"),l(),o(102,"p"),r(103,"Whether to show a preview when the uploaded file is an image."),l()(),o(104,"div",22)(105,"h3"),r(106,"maxImageSize"),l(),o(107,"p"),r(108,"Limits the maximum width and/or height of uploaded images."),l(),o(109,"p"),r(110,'Multiple sizes can be added in the array, for example you can check if the uploaded image has a width of 100 by passing [maxImageSize]="[{width: 100}]"'),l()(),o(111,"div",22)(112,"h3"),r(113,"icons"),l(),o(114,"p"),r(115,"Overwrite the default icons used."),l()(),o(116,"div",22)(117,"h3"),r(118,"buttons"),l(),o(119,"p"),r(120,"Overwrite the default buttons used using a template ref."),l(),o(121,"span"),r(122," The following context is passed to your template:"),x(123,"br"),o(124,"ul")(125,"li"),r(126,"icon - The icon class. This is either the default icon or a custom icon passed to the icons attribute (icons.removeFileButton or icons.retryUploadButton)."),l(),o(127,"li"),r(128,"onClick - Button action function reference"),l()()(),o(129,"p"),r(130,"Example template:"),l(),o(131,"pre")(132,"code",24),r(133,`<ng-template let-icon="icon" let-onClick="onClick" #customRemoveButtonTemplate>
    <p-button (onClick)="onClick()">
        <i [class]="icon"></i>My custom button
    </p-button>
</ng-template>
`),l()()(),o(134,"div",22)(135,"h3"),r(136,"infoMessage"),l(),o(137,"p"),r(138,"Additional message to be displayed to the user."),l()()(),o(139,"div",20)(140,"h2",21),r(141,"Outputs"),l(),o(142,"div",22)(143,"h3"),r(144,"uploadFinished"),l(),o(145,"p"),r(146,"Event triggered when all the files in the upload queue are uploaded."),l()()()()()),i&2){let a,d,c,f,k,B=N(35);u("hiddenSections",g(25,At)),s(6),u("code",n.pxUploaderCodeExample),s(3),u("formGroup",n.form),s(6),P(g(26,q)),u("options",C(29,K,g(27,it),g(28,ot))),s(4),P(g(32,q)),u("options",C(35,K,g(33,it),g(34,ot))),s(4),P(g(38,q)),u("options",C(41,K,g(39,Nt),g(40,zt))),s(4),P(g(44,q)),u("options",C(47,K,g(45,Lt),g(46,Bt))),s(6),u("formControl",n.uploaderFormControl)("saveEndpoint",n.saveEndpoint)("label",(a=n.form.get("label"))==null?null:a.value)("multiple",((d=n.form.get("multiple"))==null?null:d.value)==="1")("showImagePreview",((c=n.form.get("showImagePreview"))==null?null:c.value)==="1")("displayAs",((f=n.form.get("displayAs"))==null?null:f.value)||"list")("buttons",(k=n.form.get("buttons"))!=null&&k.value?j(50,Vt,B):void 0),s(8),E(L(42,23,n.uploaderFormControl.value))}},dependencies:[Ae,ke,De,Ze,$e,Re,ze,Le,Be,Qe,je,Ge,nt,He,we,Z],styles:["p-floatlabel[_ngcontent-%COMP%]{margin:16px 0}input[_ngcontent-%COMP%]{width:100%}"]})}}return t})();export{Xn as PxUploaderDocsComponent};
