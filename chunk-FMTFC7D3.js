import{g as Xe}from"./chunk-ETC6TIDC.js";import"./chunk-DBTOIKIJ.js";import{f as Te,g as Ue,i as ke,j as Ae,k as Ne,m as ze,n as Le,q as Ve,r as Qe,t as Be,u as Re,w as je,x as Ge}from"./chunk-256XNQAJ.js";import{Ga as De,a as q,c as we,pa as Oe,qa as Se,ta as Ie,ua as Q,wa as Fe}from"./chunk-ZFCUR6WI.js";import{$ as pe,$a as me,$b as Z,Ab as F,Ac as V,Bb as g,Eb as X,Ec as Me,Fb as ge,Gb as T,Ha as de,Hb as U,Ib as $,Jb as l,K as re,Ka as s,Kb as E,La as M,Lb as fe,Mb as xe,O as le,Qb as z,R as ae,Rb as f,Sb as he,Tb as v,U as k,Ub as _e,Va as O,Ya as ue,Za as ce,_b as H,aa as C,ab as _,ba as b,bc as ve,da as B,dc as Ce,f as ne,fc as be,gc as ye,hb as S,ia as se,ib as c,j as ie,jb as A,lb as P,mb as I,nb as y,ob as R,qb as j,rb as G,sb as o,tb as r,ub as h,vc as L,x as oe,xb as D,yb as N,yc as Ee,zc as Pe}from"./chunk-4P4RNPJS.js";import{f as w}from"./chunk-EQDQRRRY.js";var $e={ts:`
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
            multiple: ['0'],
            showImagePreview: ['1'],
            displayAs: ['list']
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
</form>

<br>
<h2>Result</h2>
<px-uploader
    [saveEndpoint]="saveEndpoint"
    label="My uploader"
    [multiple]="form.get('multiple')?.value === '1'"
    [showImagePreview]="form.get('showImagePreview')?.value === '1'"
    [displayAs]="form.get('displayAs')?.value || 'list'"
></px-uploader>
    `,styles:""};var x=function(t){return t[t.NO_FILES_MSG=0]="NO_FILES_MSG",t[t.UNKNOWN_ERROR=1]="UNKNOWN_ERROR",t[t.INVALID_EXTENSION=2]="INVALID_EXTENSION",t[t.MAX_SIZE_EXCEEDED=3]="MAX_SIZE_EXCEEDED",t[t.ALLOWED_EXTENSIONS=4]="ALLOWED_EXTENSIONS",t[t.MAX_FILE_SIZE=5]="MAX_FILE_SIZE",t[t.IMAGE_SIZE_CHECK_FAILED=6]="IMAGE_SIZE_CHECK_FAILED",t[t.IMAGE_SIZE_CHECK_TEXT=7]="IMAGE_SIZE_CHECK_TEXT",t}(x||{}),He=new ae("px-uploader i18n strings");var Ze=(()=>{class t{constructor(){this.units=k(Q).translation.fileSizeTypes||["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}transform(e,i=1024,n=2){let a=this.units;if(Math.abs(e)<i)return e+""+a[0];let p=a.length-1,u=0,m=10**1;do e/=i,++u;while(Math.round(Math.abs(e)*m)/m>=i&&u<p);return e.toFixed(n)+" "+a[u]}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275pipe=ue({name:"pxFileSize",type:t,pure:!0})}}return t})();var tt=({dt:t})=>`
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
`,nt={root:({instance:t})=>["p-progressbar p-component",{"p-progressbar-determinate":t.determinate,"p-progressbar-indeterminate":t.indeterminate}],value:"p-progressbar-value",label:"p-progressbar-label"},qe=(()=>{class t extends Ie{name="progressbar";theme=tt;classes=nt;static \u0275fac=(()=>{let e;return function(n){return(e||(e=B(t)))(n||t)}})();static \u0275prov=le({token:t,factory:t.\u0275fac})}return t})();var it=["content"],ot=(t,d)=>({"p-progressbar p-component":!0,"p-progressbar-determinate":t,"p-progressbar-indeterminate":d}),rt=t=>({$implicit:t});function lt(t,d){if(t&1&&(o(0,"div"),l(1),r()),t&2){let e=g(2);A("display",e.value!=null&&e.value!==0?"flex":"none"),S("data-pc-section","label"),s(),xe("",e.value,"",e.unit,"")}}function at(t,d){t&1&&D(0)}function pt(t,d){if(t&1&&(o(0,"div",3)(1,"div",4),_(2,lt,2,5,"div",5)(3,at,1,0,"ng-container",6),r()()),t&2){let e=g();I(e.valueStyleClass),A("width",e.value+"%")("background",e.color),c("ngClass","p-progressbar-value p-progressbar-value-animate"),S("data-pc-section","value"),s(2),c("ngIf",e.showValue&&!e.contentTemplate&&!e._contentTemplate),s(),c("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",he(11,rt,e.value))}}function st(t,d){if(t&1&&(o(0,"div",7),h(1,"div",8),r()),t&2){let e=g();I(e.valueStyleClass),c("ngClass","p-progressbar-indeterminate-container"),S("data-pc-section","container"),s(),A("background",e.color),S("data-pc-section","value")}}var Ke=(()=>{class t extends Fe{value;showValue=!0;styleClass;valueStyleClass;style;unit="%";mode="determinate";color;contentTemplate;_componentStyle=k(qe);templates;_contentTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;default:this._contentTemplate=e.template}})}static \u0275fac=(()=>{let e;return function(n){return(e||(e=B(t)))(n||t)}})();static \u0275cmp=O({type:t,selectors:[["p-progressBar"],["p-progressbar"],["p-progress-bar"]],contentQueries:function(i,n,a){if(i&1&&(X(a,it,4),X(a,Oe,4)),i&2){let p;T(p=U())&&(n.contentTemplate=p.first),T(p=U())&&(n.templates=p)}},inputs:{value:[2,"value","value",ye],showValue:[2,"showValue","showValue",be],styleClass:"styleClass",valueStyleClass:"valueStyleClass",style:"style",unit:"unit",mode:"mode",color:"color"},features:[z([qe]),me,ce],decls:3,vars:14,consts:[["role","progressbar",3,"ngStyle","ngClass"],["style","display:flex",3,"ngClass","class","width","background",4,"ngIf"],[3,"ngClass","class",4,"ngIf"],[2,"display","flex",3,"ngClass"],[1,"p-progressbar-label"],[3,"display",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass"],[1,"p-progressbar-value","p-progressbar-value-animate"]],template:function(i,n){i&1&&(o(0,"div",0),_(1,pt,4,13,"div",1)(2,st,2,7,"div",2),r()),i&2&&(I(n.styleClass),c("ngStyle",n.style)("ngClass",v(11,ot,n.mode==="determinate",n.mode==="indeterminate")),S("aria-valuemin",0)("aria-valuenow",n.value)("aria-valuemax",100)("data-pc-name","progressbar")("data-pc-section","root"),s(),c("ngIf",n.mode==="determinate"),s(),c("ngIf",n.mode==="indeterminate"))},dependencies:[Me,L,Ee,V,Pe,Se],encapsulation:2,changeDetection:0})}return t})();var dt=["fileInput"],ut=(t,d)=>({"px-uploader":!0,dragover:t,"no-label":d}),ct=(t,d)=>({file:t,isQueuedFile:!1,fileIndex:d}),mt=(t,d)=>({file:t,isQueuedFile:!0,fileIndex:d}),gt=(t,d,e)=>[t,d,e],ft=()=>({height:"1.2rem"}),We=()=>({"pointer-events":"visible"});function xt(t,d){if(t&1&&(o(0,"span",10),l(1),r()),t&2){let e=g();s(),fe(" ",e.intl[e.PxUploaderIntl.ALLOWED_EXTENSIONS]+": "+e.allowedExtensionsText," ")}}function ht(t,d){if(t&1&&(o(0,"span",10),l(1),r()),t&2){let e=g();s(),E(e.intl[e.PxUploaderIntl.IMAGE_SIZE_CHECK_TEXT]+": "+e.maxImageSizeText)}}function _t(t,d){if(t&1&&(o(0,"span",11),l(1),r()),t&2){let e=g();s(),E(e.infoMessage)}}function vt(t,d){if(t&1&&D(0,13),t&2){let e=d.$implicit,i=d.$index;g();let n=$(24);c("ngTemplateOutlet",n)("ngTemplateOutletContext",v(2,ct,e,i))}}function Ct(t,d){if(t&1&&D(0,13),t&2){let e=d.$implicit,i=d.$index;g();let n=$(24);c("ngTemplateOutlet",n)("ngTemplateOutletContext",v(2,mt,e,i))}}function bt(t,d){if(t&1&&h(0,"p-progressBar",27),t&2){let e=g().file;P(f(4,ft)),c("mode",e.uploadProgress>0?"determinate":"indeterminate")("value",e.uploadProgress||0)}}function yt(t,d){if(t&1&&h(0,"i",28),t&2){let e=g().file,i=g();I(e.isUploading?(i.icons==null?null:i.icons.fileStatusIconUploading)||"pi pi-spin pi-spinner":e.uploadError!==void 0?(i.icons==null?null:i.icons.fileStatusIconError)||"pi pi-times-circle":(i.icons==null?null:i.icons.fileStatusIconQueued)||"pi pi-hourglass")}}function Et(t,d){if(t&1){let e=N();o(0,"p-button",29),F("onClick",function(){C(e);let n=g(),a=n.isQueuedFile,p=n.fileIndex,u=g();return b(a?u.removeFileFromQueue(p):u.removeFile(p))}),r()}if(t&2){let e=g(2);P(f(3,We)),c("icon",(e.icons==null?null:e.icons.removeFileButton)||"pi pi-trash")}}function Pt(t,d){if(t&1){let e=N();o(0,"p-button",30),F("onClick",function(){C(e);let n=g().fileIndex,a=g();return b(a.retryUpload(n))}),r()}if(t&2){let e=g(2);P(f(3,We)),c("icon",(e.icons==null?null:e.icons.retryUploadButton)||"pi pi-refresh")}}function Mt(t,d){if(t&1&&h(0,"img",26),t&2){let e=g().file;c("src",e.imagePreviewUrl,de)}}function wt(t,d){if(t&1&&(o(0,"div",15),_(1,bt,1,5,"p-progressBar",16),o(2,"div",17)(3,"div",18),_(4,yt,1,2,"i",19),o(5,"div",20)(6,"span",21),l(7),r(),o(8,"span",22),l(9),H(10,"pxFileSize"),r()()(),o(11,"div",23)(12,"div",18)(13,"span",21),l(14),r()(),_(15,Et,1,4,"p-button",24)(16,Pt,1,4,"p-button",25),r()(),_(17,Mt,1,1,"img",26),r()),t&2){let e=d.file,i=d.isQueuedFile,n=g();c("ngClass",_e(12,gt,n.displayAs,n.showImagePreview&&e.imagePreviewUrl?"preview":"",e.uploadError!==void 0?"px-uploader-error":"")),s(),y(e.isUploading||i&&e.uploadError===void 0?1:-1),s(),c("ngClass",e.uploadError?"error":"success"),s(2),y(i?4:-1),s(3),E(e.name),s(2),E(Z(10,10,e.size||0)),s(5),E(e.uploadError),s(),y(!e.isUploading&&(e.uploadError===void 0||e.allowDelete===void 0||e.allowDelete)?15:-1),s(),y(i&&e.uploadError!==void 0&&e.canRetryUpload?16:-1),s(),y(n.showImagePreview&&e.imagePreviewUrl?17:-1)}}var Je=(()=>{class t{constructor(e,i,n,a){this.http=e,this.changeDetector=i,this.primeNGConfig=n,this.label="",this.multiple=!1,this.displayAs="list",this.allowedExtensions=[],this.maxFileSize=5*1024*1024,this.maxParallelUploads=5,this.showImagePreview=!0,this.uploadFinished=new se,this._value=[],this.filesQueue=[],this.maxImageSizeText="",this.allowedExtensionsText="",this.hasFiles=!1,this.dragoverEventActive=!1,this.PxUploaderIntl=x,this.onChange=p=>p,this.onTouched=()=>{},this.isTouched=!1,this.isAngularFormValue=!1,this.uploadingFilesCount=0,this.processingUploadQueue=!1,this.intl=Object.assign({[x.NO_FILES_MSG]:"Drag & drop your files or click to browse",[x.UNKNOWN_ERROR]:"Upload Failed!",[x.INVALID_EXTENSION]:"Invalid file extension!",[x.MAX_SIZE_EXCEEDED]:"File size is too big!",[x.ALLOWED_EXTENSIONS]:"Allowed Extensions",[x.MAX_FILE_SIZE]:"Maximum file size",[x.IMAGE_SIZE_CHECK_FAILED]:"Maximum width or height exceeded.",[x.IMAGE_SIZE_CHECK_TEXT]:"Allowed image dimensions (HxW)"},a||{})}ngOnChanges(e){e.allowedExtensions&&(this.allowedExtensionsText=this.allowedExtensions.join(", "),!e.allowedExtensions.firstChange&&this.changeDetector.markForCheck()),e.maxImageSize&&this.maxImageSize?.length&&(this.maxImageSizeText=this.maxImageSize.map(i=>i.height+"x"+i.width).join(", "),!e.maxImageSize.firstChange&&this.changeDetector.markForCheck()),e.multiple&&!e.multiple.firstChange&&this.changeDetector.markForCheck()}openFilesInput(){this.fileInput.nativeElement.click()}get value(){return this._value}set value(e){Array.isArray(e)||(e=[e]),this._value=e,this.hasFiles=e.length>0,this.isAngularFormValue||(this.onChange(e),this.onTouched()),this.changeDetector.markForCheck()}writeValue(e){e&&(this.isAngularFormValue=!0,this.value=e,this.isAngularFormValue=!1)}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=()=>!this.isTouched&&e}onFilesAdded(e){if(!(e&&e.length))return;this.multiple||(this.filesQueue[0]?.httpSubscription?.unsubscribe(),this.filesQueue=[],this.value=[],this.changeDetector.markForCheck());let i=this.multiple?e:[e[0]];for(let n=i.length;n--;){let a=i[n];this.checkFile(a).then(p=>{let u={name:a.name,uploadProgress:0,size:a.size,canRetryUpload:p==="",imagePreviewUrl:a.type.includes("image")?URL.createObjectURL(a):"",uploadedFile:a};p!==""&&(u.uploadError=p),this.filesQueue.push(u),this.processUploadQueue().then(),this.changeDetector.markForCheck()})}this.fileInput.nativeElement.value=""}processUploadQueue(){return w(this,null,function*(){if(this.processingUploadQueue||this.uploadingFilesCount===this.maxParallelUploads)return;this.processingUploadQueue=!0;let e=this.filesQueue,i=null,n=e.length,a=!1;for(let p=0;p<n;++p){let u=e[p];if(!u.uploadError){if(u.isUploading){a=!0;continue}i=u;break}}this.processingUploadQueue=!1,i?(i.httpSubscription=yield this.uploadFile(i),this.uploadingFilesCount<this.maxParallelUploads&&this.processUploadQueue().then()):a||this.uploadFinished.emit(this.value)})}uploadFile(e){return w(this,null,function*(){++this.uploadingFilesCount;let i=new FormData,n=e.uploadedFile,a=this.saveEndpoint,p=a.headers;e.isUploading=!0,i.append("file",n);let u=p instanceof Promise?yield p:p;return this.http.request(a.requestMethod||"POST",a.url,{reportProgress:!0,observe:"events",body:i,headers:u}).pipe(oe(()=>(e.uploadError=this.intl[x.UNKNOWN_ERROR],e.isUploading=!1,delete e.uploadProgress,--this.uploadingFilesCount,this.changeDetector.markForCheck(),ie({})))).subscribe(m=>{switch(m.type){case q.UploadProgress:e.uploadProgress=Math.floor(m.loaded/(m.total||1)*100),this.changeDetector.markForCheck();break;case q.Response:--this.uploadingFilesCount,this.multiple||(this._value=[]);let Y=this._value;Y.push({name:n.name,size:n.size,type:n.type,imagePreviewUrl:n.type.includes("image")?URL.createObjectURL(n):"",metaData:m.body||{}}),this.value=Y;let ee=this.filesQueue,te=ee.indexOf(e);te>-1&&ee.splice(te,1),this.processUploadQueue();break}})})}retryUpload(e){let i=this.filesQueue[e];i&&(delete i.uploadError,this.processUploadQueue().then())}removeFileFromQueue(e){this.filesQueue.splice(e,1)}removeFile(e){return w(this,null,function*(){let i=this._value.splice(e,1)[0];if(this.deleteEndpoint){let n=this.deleteEndpoint,a=n.headers instanceof Promise?yield n.headers:n.headers;this.http.request(n.url,n.requestMethod||"DELETE",{body:[i],headers:a}).subscribe()}this.hasFiles=this._value.length>0})}onDragEnter(e){e.preventDefault(),this.dragoverEventActive=!0}onDragover(e){e.preventDefault(),this.dragoverEventActive||(this.dragoverEventActive=!0)}onDragLeave(e){e.preventDefault(),this.dragoverEventActive=!1}onFilesDropped(e){e.preventDefault();let i=e.dataTransfer?.files;i&&this.onFilesAdded(i),this.dragoverEventActive=!1}checkFile(e){return w(this,null,function*(){if(e.size>this.maxFileSize)return this.intl[x.MAX_SIZE_EXCEEDED];let i=this.allowedExtensions;if(i.length){let n=e.name.lastIndexOf(".");if(!(n>0&&i.indexOf(e.name.substring(n+1).toLowerCase())!==-1))return this.intl[x.INVALID_EXTENSION]}if(e.type.includes("image")&&this.maxImageSize?.length){let n=this.maxImageSize,a=yield this.getImageSize(URL.createObjectURL(e)),p=!0;for(let u=n.length;u--;){let m=n[u];if(m.width!==void 0&&m.height!==void 0&&m.width===a.width&&m.height===a.height){p=!1;break}else if(m.width!==void 0&&m.height===void 0&&m.width===a.width){p=!1;break}else if(m.height!==void 0&&m.width===void 0&&m.height===a.height){p=!1;break}}if(p)return this.intl[x.IMAGE_SIZE_CHECK_FAILED]}return""})}getImageSize(e){return w(this,null,function*(){return new Promise((i,n)=>{let a=new Image;a.onload=()=>{i({width:a.width,height:a.height})},a.onerror=()=>{n("Error loading image")},a.src=e})})}ngOnDestroy(){this.uploadFinished.complete()}static{this.\u0275fac=function(i){return new(i||t)(M(we),M(Ce),M(Q),M(He,8))}}static{this.\u0275cmp=O({type:t,selectors:[["px-uploader"]],viewQuery:function(i,n){if(i&1&&ge(dt,5),i&2){let a;T(a=U())&&(n.fileInput=a.first)}},inputs:{saveEndpoint:"saveEndpoint",deleteEndpoint:"deleteEndpoint",label:"label",multiple:"multiple",displayAs:"displayAs",allowedExtensions:"allowedExtensions",maxFileSize:"maxFileSize",maxParallelUploads:"maxParallelUploads",showImagePreview:"showImagePreview",maxImageSize:"maxImageSize",icons:"icons",infoMessage:"infoMessage",value:"value"},outputs:{uploadFinished:"uploadFinished"},features:[z([{provide:Ae,multi:!0,useExisting:t}]),pe],decls:25,vars:16,consts:[["fileInput",""],["file",""],[3,"dragleave","dragover","dragenter","drop","ngClass"],[1,"px-uploader-label"],[1,"px-uploader-info"],[2,"display","flex","align-items","center","flex-wrap","wrap"],[1,"px-uploader-upload-button",3,"onClick","icon","label"],[1,"px-uploader-info-primary"],[1,"px-uploader-msg"],[1,"px-uploader-info-secondary"],[1,"px-uploader-info-secondary-msg"],[1,"px-uploader-info-secondary-info-msg"],[1,"px-uploader-files"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["type","file",2,"display","none",3,"change","accept","multiple"],[1,"px-uploader-file",3,"ngClass"],[1,"px-uploader-file-upload-progress",3,"mode","value","style"],[1,"px-uploader-file-header",3,"ngClass"],[1,"px-uploader-file-info"],[1,"px-uploader-file-status-icon",3,"class"],[1,"px-uploader-file-info","flex-column"],[1,"px-uploader-file-info-primary"],[1,"px-uploader-file-info-secondary"],[1,"px-uploader-file-info","actions"],["severity","warn",3,"icon","style"],[3,"icon","style"],["alt","",1,"px-uploader-file-preview",3,"src"],[1,"px-uploader-file-upload-progress",3,"mode","value"],[1,"px-uploader-file-status-icon"],["severity","warn",3,"onClick","icon"],[3,"onClick","icon"]],template:function(i,n){if(i&1){let a=N();o(0,"div",2),F("dragleave",function(u){return C(a),b(n.onDragLeave(u))})("dragover",function(u){return C(a),b(n.onDragover(u))})("dragenter",function(u){return C(a),b(n.onDragEnter(u))})("drop",function(u){return C(a),b(n.onFilesDropped(u))}),o(1,"label",3),l(2),r(),o(3,"div",4)(4,"div",5)(5,"p-button",6),F("onClick",function(){return C(a),b(n.openFilesInput())}),r(),o(6,"div",7)(7,"label",8),l(8),r()()(),o(9,"div",9),_(10,xt,2,1,"span",10),o(11,"span"),l(12),H(13,"pxFileSize"),r(),_(14,ht,2,1,"span",10)(15,_t,2,1,"span",11),r()(),o(16,"div",12),j(17,vt,1,5,"ng-container",13,R),j(19,Ct,1,5,"ng-container",13,R),r()(),o(21,"input",14,0),F("change",function(u){return C(a),b(n.onFilesAdded(u.target.files))}),r(),_(23,wt,18,16,"ng-template",null,1,ve)}i&2&&(c("ngClass",v(13,ut,n.dragoverEventActive,n.label==="")),s(2),E(n.label),s(3),c("icon",(n.icons==null?null:n.icons.uploadButton)||"pi pi-upload")("label",n.primeNGConfig.translation.upload),s(3),E(n.intl[n.PxUploaderIntl.NO_FILES_MSG]),s(2),y(n.allowedExtensions.length?10:-1),s(2),E(n.intl[n.PxUploaderIntl.MAX_FILE_SIZE]+": "+Z(13,11,n.maxFileSize)),s(2),y(n.maxImageSizeText?14:-1),s(),y(n.infoMessage?15:-1),s(2),G(n._value),s(2),G(n.filesQueue),s(2),c("accept",n.allowedExtensions.length?"."+n.allowedExtensions.join(",."):null)("multiple",n.multiple))},dependencies:[L,Ke,De,V,Ze],styles:['.px-uploader[_ngcontent-%COMP%]{display:flex;position:relative;flex-direction:column;box-sizing:border-box;min-height:50px;border:1px solid var(--p-content-border-color);border-radius:var(--p-border-radius-md);background:var(--p-content-background);color:inherit;padding:var(--p-card-body-padding)}.px-uploader[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .px-uploader[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:before, .px-uploader[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:after{box-sizing:inherit}.px-uploader[_ngcontent-%COMP%]   .px-uploader-label[_ngcontent-%COMP%]{color:inherit;font-size:1.3rem;font-weight:700;padding-bottom:calc(var(--p-card-body-padding) * .8)}.px-uploader.no-label[_ngcontent-%COMP%]   .px-uploader-label[_ngcontent-%COMP%]{display:none}.px-uploader[_ngcontent-%COMP%]   .px-uploader-info[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;color:inherit}.px-uploader[_ngcontent-%COMP%]   .px-uploader-info[_ngcontent-%COMP%]   .px-uploader-upload-button[_ngcontent-%COMP%]{margin:1rem 1rem 1rem 0}.px-uploader[_ngcontent-%COMP%]   .px-uploader-info[_ngcontent-%COMP%]   .px-uploader-info-primary[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;color:inherit;padding-right:.8rem}.px-uploader[_ngcontent-%COMP%]   .px-uploader-info[_ngcontent-%COMP%]   .px-uploader-info-primary[_ngcontent-%COMP%]   .px-uploader-msg[_ngcontent-%COMP%]{color:inherit}.px-uploader[_ngcontent-%COMP%]   .px-uploader-info[_ngcontent-%COMP%]   .px-uploader-info-secondary[_ngcontent-%COMP%]{display:flex;color:inherit;flex-wrap:wrap;flex-shrink:1;flex-direction:column;justify-items:center;font-size:.9rem}.px-uploader[_ngcontent-%COMP%]   .px-uploader-info[_ngcontent-%COMP%]   .px-uploader-info-secondary[_ngcontent-%COMP%]   .px-uploader-info-secondary-info-msg[_ngcontent-%COMP%]{max-width:30rem}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;max-height:var(--px-uploader-files-container-max-height, 20rem);overflow-y:auto}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]:not(:empty){border-top:1px solid var(--p-content-border-color)}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file[_ngcontent-%COMP%]{display:flex;align-items:flex-start;flex-direction:column;position:relative;border:1px solid var(--p-content-border-color);border-radius:var(--p-border-radius-md)}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file.list[_ngcontent-%COMP%]{flex-shrink:0;width:100%;margin-top:.8rem}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file.grid[_ngcontent-%COMP%]{flex-grow:0;flex-shrink:1;flex-basis:auto;margin:.4em}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file.preview[_ngcontent-%COMP%]{height:var(--px-uploader-file-preview-height, 14rem)}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file[_ngcontent-%COMP%]   .px-uploader-file-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-wrap:nowrap;width:100%;padding:var(--p-card-body-padding);z-index:2;border-radius:var(--p-border-radius-md) var(--p-border-radius-md) 0 0}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file[_ngcontent-%COMP%]   .px-uploader-file-header[_ngcontent-%COMP%]   .px-uploader-file-info[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file[_ngcontent-%COMP%]   .px-uploader-file-header[_ngcontent-%COMP%]   .px-uploader-file-info.flex-column[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file[_ngcontent-%COMP%]   .px-uploader-file-header[_ngcontent-%COMP%]   .px-uploader-file-info[_ngcontent-%COMP%]   .px-uploader-file-status-icon[_ngcontent-%COMP%]{font-size:var(--px-uploader-file-info-status-icon-font-size, 2rem)}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file[_ngcontent-%COMP%]   .px-uploader-file-header[_ngcontent-%COMP%]   .px-uploader-file-info[_ngcontent-%COMP%]   .px-uploader-file-info-primary[_ngcontent-%COMP%]{text-rendering:optimizeLegibility;font-weight:var(--px-uploader-file-info-primary-font-weight, 500);font-size:var(--px-uploader-file-info-primary-font-size, 1rem);padding:0 .4rem}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file[_ngcontent-%COMP%]   .px-uploader-file-header[_ngcontent-%COMP%]   .px-uploader-file-info[_ngcontent-%COMP%]   .px-uploader-file-info-secondary[_ngcontent-%COMP%]{text-rendering:optimizeLegibility;font-size:var(--px-uploader-file-info-secondary-font-size, .8rem);padding:0 .4rem}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file[_ngcontent-%COMP%]   .px-uploader-file-header[_ngcontent-%COMP%]   .px-uploader-file-info.actions[_ngcontent-%COMP%]{flex-wrap:nowrap;flex-direction:row;align-items:center}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file[_ngcontent-%COMP%]   .px-uploader-file-header[_ngcontent-%COMP%]   .px-uploader-file-info.actions[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{margin-left:.4rem}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file.preview[_ngcontent-%COMP%]{height:var(--px-uploader-file-preview-height, 18rem)}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file.preview[_ngcontent-%COMP%]   .px-uploader-file-header[_ngcontent-%COMP%]{background-color:color-mix(in srgb,var(--p-primary-color),transparent 40%);color:var(--p-primary-contrast-color)}@supports (-webkit-backdrop-filter: blur(.2em)) or (backdrop-filter: blur(.2em)){.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file.preview[_ngcontent-%COMP%]   .px-uploader-file-header[_ngcontent-%COMP%]{-webkit-backdrop-filter:blur(.18rem);backdrop-filter:blur(.18rem)}}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file.px-uploader-error.preview[_ngcontent-%COMP%]   .px-uploader-file-header[_ngcontent-%COMP%]{background-color:color-mix(in srgb,var(--red-500),transparent 40%);color:var(--px-uploader-file-preview-header-background-color-error, white)}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file[_ngcontent-%COMP%]   .px-uploader-file-preview[_ngcontent-%COMP%]{position:absolute;object-fit:contain;width:100%;height:100%;inset:0}.px-uploader[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]   .px-uploader-file[_ngcontent-%COMP%]   .px-uploader-file-upload-progress[_ngcontent-%COMP%]{width:100%;z-index:3}.px-uploader.dragover[_ngcontent-%COMP%]{border:1px solid var(--p-content-border-color)}.px-uploader.dragover[_ngcontent-%COMP%]:before, .px-uploader.dragover[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:-2px;border:2px solid var(--p-primary-color);transition:all .5s;animation:_ngcontent-%COMP%_dragoverClip 3s infinite linear;border-radius:var(--p-border-radius-md)}.px-uploader.dragover[_ngcontent-%COMP%]:after{animation:_ngcontent-%COMP%_dragoverClip 3s infinite -1.5s linear}.px-uploader.dragover[_ngcontent-%COMP%]   .px-uploader-info[_ngcontent-%COMP%]{pointer-events:none}.px-uploader.dragover[_ngcontent-%COMP%]   .px-uploader-info[_ngcontent-%COMP%]   .px-uploader-info-primary[_ngcontent-%COMP%], .px-uploader.dragover[_ngcontent-%COMP%]   .px-uploader-info[_ngcontent-%COMP%]   .px-uploader-info-secondary[_ngcontent-%COMP%]{color:var(--p-primary-color)}.px-uploader.dragover[_ngcontent-%COMP%]   .px-uploader-files[_ngcontent-%COMP%]{pointer-events:none}@keyframes _ngcontent-%COMP%_dragoverClip{0%,to{clip-path:inset(0 0 98% 0)}25%{clip-path:inset(0 98% 0 0)}50%{clip-path:inset(98% 0 0 0)}75%{clip-path:inset(0 0 0 98%)}}']})}}return t})();var Ot=()=>["docIntl","docStyling"],W=()=>({width:"100%"}),Ye=()=>({value:"0",desc:"false"}),et=()=>({value:"1",desc:"true"}),J=(t,d)=>[t,d],St=()=>({value:"list",desc:"list"}),It=()=>({value:"grid",desc:"grid"}),Dn=(()=>{class t{constructor(e){this.pxUploaderCodeExample=$e,this.saveEndpoint={url:"https://localhost/px-uploader"},this.componentDestroyed$=new ne,this.form=e.group({label:["My uploader"],multiple:["0"],showImagePreview:["1"],displayAs:["list"]});let i=localStorage.getItem("__px-uploader-config");i&&this.form.patchValue(JSON.parse(i)),this.form.valueChanges.pipe(re(this.componentDestroyed$)).subscribe(()=>this.storeFilters())}storeFilters(){localStorage.setItem("__px-uploader-config",JSON.stringify(this.form.value))}ngOnDestroy(){this.componentDestroyed$.next(),this.componentDestroyed$.complete()}static{this.\u0275fac=function(i){return new(i||t)(M(Re))}}static{this.\u0275cmp=O({type:t,selectors:[["app-px-uploader-docs"]],decls:116,vars:36,consts:[["header","px-uploader",3,"hiddenSections"],["docDescription","",1,"primary-color"],["href","https://primeng.org","target","_blank"],["docOverview",""],[3,"code"],[1,"dm:grid","dm:align-items-center",3,"formGroup"],[1,"dm:col-12","dm:md:col-6","dm:lg:col-4","dm:xl:col-3"],["type","text","id","[label]","pInputText","","formControlName","label"],["for","[label]"],["inputId","[multiple]","optionLabel","desc","optionValue","value","formControlName","multiple",3,"options"],["for","[multiple]"],["inputId","[showImagePreview]","optionLabel","desc","optionValue","value","formControlName","showImagePreview",3,"options"],["for","[showImagePreview]"],["inputId","[displayAs]","optionLabel","desc","optionValue","value","formControlName","displayAs",3,"options"],["for","[displayAs]"],[3,"saveEndpoint","label","multiple","showImagePreview","displayAs"],["docApi",""],[1,"entry-group"],[1,"title"],[1,"entry"],[1,"dm:quote","code"],[1,"dm:quote"]],template:function(i,n){if(i&1&&(o(0,"app-library-documentation",0)(1,"span",1)(2,"a",2),l(3,"PrimeNG-based"),r(),l(4," library used to upload files. "),r(),o(5,"div",3)(6,"app-code-example",4)(7,"h2"),l(8,"Configuration"),r(),o(9,"form",5)(10,"p-floatlabel",6),h(11,"input",7),o(12,"label",8),l(13,"[label]"),r()(),o(14,"p-floatlabel",6),h(15,"p-select",9),o(16,"label",10),l(17,"[multiple]"),r()(),o(18,"p-floatlabel",6),h(19,"p-select",11),o(20,"label",12),l(21,"[showImagePreview]"),r()(),o(22,"p-floatlabel",6),h(23,"p-select",13),o(24,"label",14),l(25,"[displayAs]"),r()()(),h(26,"br"),o(27,"h2"),l(28,"Result"),r(),h(29,"px-uploader",15),r()(),o(30,"div",16)(31,"div",17)(32,"h2",18),l(33,"Imports"),r(),o(34,"div",19)(35,"pre")(36,"code",20),l(37,"import { PxUploaderComponent } from '@ng-prime-extensions/px-uploader';"),r()()()(),o(38,"div",17)(39,"h2",18),l(40,"Inputs"),r(),o(41,"div",19)(42,"h3"),l(43,"saveEndpoint"),r(),o(44,"p"),l(45,"Endpoint that handles the upload."),r(),o(46,"pre")(47,"code",21),l(48,`export interface PxEndpointConfig {
    url: string;
    requestMethod?: string;
    headers?: HttpHeaders | { [p: string]: string | string[] { | Promise<HttpHeaders | {
        [p: string]: string | string[]
    }>;
}`),r()()(),o(49,"div",19)(50,"h3"),l(51,"deleteEndpoint"),r(),o(52,"p"),l(53,"Endpoint that handles file removal."),r()(),o(54,"div",19)(55,"h3"),l(56,"label"),r(),o(57,"p"),l(58,"Uploader label."),r()(),o(59,"div",19)(60,"h3"),l(61,"multiple"),r(),o(62,"p"),l(63,"Allow multiple files?"),r()(),o(64,"div",19)(65,"h3"),l(66,"displayAs"),r(),o(67,"p"),l(68,"Determines how the added files are rendered."),r()(),o(69,"div",19)(70,"h3"),l(71,"allowedExtensions"),r(),o(72,"p"),l(73,"A list of allowed file extensions(lowercase), if empty the extension check is skipped."),r(),o(74,"p"),l(75,"Example: ['txt', 'xlsx', ...]"),r()(),o(76,"div",19)(77,"h3"),l(78,"maxFileSize"),r(),o(79,"p"),l(80,"Maximum file size in bytes. Default: 5MB."),r()(),o(81,"div",19)(82,"h3"),l(83,"maxParallelUploads"),r(),o(84,"p"),l(85,"How many files should we upload in parallel?"),r()(),o(86,"div",19)(87,"h3"),l(88,"showImagePreview"),r(),o(89,"p"),l(90,"Whether to show a preview when the uploaded file is an image."),r()(),o(91,"div",19)(92,"h3"),l(93,"maxImageSize"),r(),o(94,"p"),l(95,"Limits the maximum width and/or height of uploaded images."),r(),o(96,"p"),l(97,'Multiple sizes can be added in the array, for example you can check if the uploaded image has a width of 100 by passing [maxImageSize]="[{width: 100}]"'),r()(),o(98,"div",19)(99,"h3"),l(100,"icons"),r(),o(101,"p"),l(102,"Overwrite the default icons used."),r()(),o(103,"div",19)(104,"h3"),l(105,"infoMessage"),r(),o(106,"p"),l(107,"Additional message to be displayed to the user."),r()()(),o(108,"div",17)(109,"h2",18),l(110,"Outputs"),r(),o(111,"div",19)(112,"h3"),l(113,"uploadFinished"),r(),o(114,"p"),l(115,"Event triggered when all the files in the upload queue are uploaded."),r()()()()()),i&2){let a,p,u,m;c("hiddenSections",f(17,Ot)),s(6),c("code",n.pxUploaderCodeExample),s(3),c("formGroup",n.form),s(6),P(f(18,W)),c("options",v(21,J,f(19,Ye),f(20,et))),s(4),P(f(24,W)),c("options",v(27,J,f(25,Ye),f(26,et))),s(4),P(f(30,W)),c("options",v(33,J,f(31,St),f(32,It))),s(6),c("saveEndpoint",n.saveEndpoint)("label",(a=n.form.get("label"))==null?null:a.value)("multiple",((p=n.form.get("multiple"))==null?null:p.value)==="1")("showImagePreview",((u=n.form.get("showImagePreview"))==null?null:u.value)==="1")("displayAs",((m=n.form.get("displayAs"))==null?null:m.value)||"list")}},dependencies:[ke,Te,Ue,Xe,je,Ve,Ne,ze,Le,Qe,Be,Je,Ge],styles:["p-floatlabel[_ngcontent-%COMP%]{margin:16px 0}input[_ngcontent-%COMP%]{width:100%}"]})}}return t})();export{Dn as PxUploaderDocsComponent};
