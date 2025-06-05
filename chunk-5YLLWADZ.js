import{a as ye}from"./chunk-Y3MPP42O.js";import{a as Ne,c as Qe}from"./chunk-KXVWSDAC.js";import{A as at,B as rt,a as Ce,f as et,h as tt,i as nt,x as it,z as ot}from"./chunk-AE2ITTWN.js";import{Aa as ve,Ga as We,Ia as ze,Ja as Ge,Ma as Ze,Pa as Q,T as N,Ta as Je,U as _e,Ua as Xe,V as X,Xa as Ye,a as qe,cb as ae,h as fe,k as be,l as Ue,m as J,n as Ke,q as K}from"./chunk-CWWQS4UP.js";import{$a as R,Ab as ke,Db as A,Eb as u,Fb as U,Gb as L,Ha as B,Hb as S,Jb as I,Ka as p,Kb as E,Lb as O,M as P,Mb as d,N as Ee,Ob as Le,Pa as D,Qb as Oe,Rb as Me,Sa as de,Sb as je,T as y,Tb as he,Ub as Be,Vb as b,Xa as C,Y as we,Z as z,_ as G,aa as H,ab as He,bb as h,bc as ue,cc as me,ec as M,f as Ae,g as Se,ga as Z,hc as Re,ib as f,jb as c,ka as ie,kb as De,lb as F,lc as ge,ma as Pe,mb as pe,mc as Ve,nb as $,ob as x,oc as T,qb as Fe,rb as $e,sb as l,tb as s,ub as m,uc as xe,vb as V,vc as Y,wb as q,xb as k,xc as ee,yb as oe,yc as te,z as Ie,zc as ne}from"./chunk-NX3CFXQX.js";import{f as Te}from"./chunk-EQDQRRRY.js";var ct={html:`
<div class="dm:grid dm:align-items-center dm:justify-content-center">
    <input class="dm:col search-input" pInputText (input)="search$.next(($any($event.target).value || '').trim())" placeholder="Search"/>
</div>
<br>
<h2>Default accordion template</h2>
   <px-searchable-accordion [entries]="entries" [searchString]="search$">

   </px-searchable-accordion>
<br><br>
<h2>Custom accordion template</h2>
<px-searchable-accordion [entries]="entries" [headerTemplate]="customHeaderTemplate" [contentTemplate]="customContentTemplate" [searchString]="search$">
   <ng-template #customHeaderTemplate let-entry>
        <div class="dm:grid dm:col-12 dm:justify-content-between dm:align-content-center">
            <span class="dm:col">
                Custom Header for:&nbsp; <span [innerHTML]="entry.header"></span>
                &nbsp;
                <i class="pi pi-heart"></i>
            </span>
            <p-badge class="dm:col-fixed" value="1" />
        </div>
   </ng-template>
   <ng-template #customContentTemplate let-entry>
       <span [innerHTML]="entry.content"></span>
       &nbsp;
       <i class="pi pi-heart"></i>
   </ng-template>
</px-searchable-accordion>
    `,ts:`
import { Component } from '@angular/core';
import {CodeExampleComponent} from "../../components/code-example/code-example.component";
import {FloatLabelModule} from "primeng/floatlabel";
import {LibraryDocumentationComponent} from "../../components/library-documentation/library-documentation.component";
import {ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup} from "@angular/forms";
import {pxSearchableAccordionCodeExample} from "./code-example";
import {
    PxSearchableAccordionComponent
} from "../../../../projects/px-searchable-accordion/src/lib/px-searchable-accordion.component";
import {PxSearchableAccordionEntry} from "../../../../projects/px-searchable-accordion/src/lib/px-searchable-accordion";
import {BadgeModule} from "primeng/badge";
import {Subject} from "rxjs";
import {InputTextModule} from "primeng/inputtext";

@Component({
  selector: 'app-px-searchable-accordion-docs',
  standalone: true,
    imports: [
        LibraryDocumentationComponent,
        CodeExampleComponent,
        ReactiveFormsModule,
        FloatLabelModule,
        PxSearchableAccordionComponent,
        BadgeModule,
        InputTextModule,
    ],
  templateUrl: './px-searchable-accordion-docs.component.html',
  styleUrl: './px-searchable-accordion-docs.component.scss'
})
export class PxSearchableAccordionDocsComponent {
    protected readonly pxSearchableAccordionCodeExample = pxSearchableAccordionCodeExample;
    protected form: UntypedFormGroup;

    protected entries: PxSearchableAccordionEntry[] = [];
    protected search$ = new Subject<string>();

    constructor(
        fb: UntypedFormBuilder,
    ) {
        this.form = fb.group({
            config: fb.group({
                config: ['0'],
            })
        });

        this.entries.push({
            header: 'Demo entry',
            content: \`
                <h1>HTML Ipsum Presents</h1>
                <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>

                <h2>Header Level 2</h2>

                <ol>
                   <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                   <li>Aliquam tincidunt mauris eu risus.</li>
                </ol>

                <blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote>

                <h3>Header Level 3</h3>

                <ul>
                   <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                   <li>Aliquam tincidunt mauris eu risus.</li>
                </ul>
            \`
        });

        for(let i = 1; i < 5; ++i) {
            this.entries.push({
                header: 'Entry ' + i,
                content: \`<strong>Description</strong> <a href="https://github.com/daniel1919-00/ng-prime-extensions" target="_blank">GitHub link</a>\`
            });
        }
    }
}
    `,styles:""};var se=["*"],gt=["toggleicon"],ft=t=>({active:t});function bt(t,r){}function _t(t,r){t&1&&h(0,bt,0,0,"ng-template")}function vt(t,r){if(t&1&&h(0,_t,1,0,null,0),t&2){let e=u();c("ngTemplateOutlet",e.toggleicon)("ngTemplateOutletContext",b(2,ft,e.active()))}}function Ct(t,r){if(t&1&&m(0,"span",4),t&2){let e=u(3);$(e.pcAccordion.collapseIcon),c("ngClass",e.pcAccordion.iconClass),f("aria-hidden",!0)}}function yt(t,r){if(t&1&&m(0,"ChevronDownIcon",4),t&2){let e=u(3);c("ngClass",e.pcAccordion.iconClass),f("aria-hidden",!0)}}function xt(t,r){if(t&1&&(V(0),h(1,Ct,1,4,"span",2)(2,yt,1,2,"ChevronDownIcon",3),q()),t&2){let e=u(2);p(),c("ngIf",e.pcAccordion.collapseIcon),p(),c("ngIf",!e.pcAccordion.collapseIcon)}}function Tt(t,r){if(t&1&&m(0,"span",4),t&2){let e=u(3);$(e.pcAccordion.expandIcon),c("ngClass",e.pcAccordion.iconClass),f("aria-hidden",!0)}}function At(t,r){if(t&1&&m(0,"ChevronUpIcon",4),t&2){let e=u(3);c("ngClass",e.pcAccordion.iconClass),f("aria-hidden",!0)}}function St(t,r){if(t&1&&(V(0),h(1,Tt,1,4,"span",2)(2,At,1,2,"ChevronUpIcon",3),q()),t&2){let e=u(2);p(),c("ngIf",e.pcAccordion.expandIcon),p(),c("ngIf",!e.pcAccordion.expandIcon)}}function It(t,r){if(t&1&&h(0,xt,3,2,"ng-container",1)(1,St,3,2,"ng-container",1),t&2){let e=u();c("ngIf",e.active()),p(),c("ngIf",!e.active())}}var re=t=>({transitionParams:t}),lt=t=>({value:"visible",params:t}),dt=t=>({value:"hidden",params:t}),Et=["header"],wt=["icon"],Pt=["content"],Ht=["*",[["p-header"]]],Dt=["*","p-header"],Ft=t=>({$implicit:t});function $t(t,r){if(t&1&&d(0),t&2){let e=u();Le(" ",e.header," ")}}function kt(t,r){t&1&&k(0)}function Lt(t,r){if(t&1&&h(0,kt,1,0,"ng-container",4),t&2){let e=u(2);c("ngTemplateOutlet",e.headerTemplate||e._headerTemplate)}}function Ot(t,r){t&1&&L(0,1)}function Mt(t,r){if(t&1&&h(0,Lt,1,1,"ng-container")(1,Ot,1,0),t&2){let e=u();x(e.headerTemplate||e._headerTemplate?0:-1),p(),x(e.headerFacet?1:-1)}}function jt(t,r){}function Bt(t,r){t&1&&h(0,jt,0,0,"ng-template")}function Rt(t,r){if(t&1&&h(0,Bt,1,0,null,5),t&2){let e=u();c("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",b(2,Ft,e.selected))}}function Vt(t,r){if(t&1&&m(0,"span",8),t&2){let e=u(3);$(e.accordion.collapseIcon),c("ngClass",e.iconClass),f("aria-hidden",!0)}}function qt(t,r){if(t&1&&m(0,"ChevronDownIcon",8),t&2){let e=u(3);c("ngClass",e.iconClass),f("aria-hidden",!0)}}function Ut(t,r){if(t&1&&(V(0),h(1,Vt,1,4,"span",6)(2,qt,1,2,"ChevronDownIcon",7),q()),t&2){let e=u(2);p(),c("ngIf",e.accordion.collapseIcon),p(),c("ngIf",!e.accordion.collapseIcon)}}function Kt(t,r){if(t&1&&m(0,"span",8),t&2){let e=u(3);$(e.accordion.expandIcon),c("ngClass",e.iconClass),f("aria-hidden",!0)}}function Nt(t,r){if(t&1&&m(0,"ChevronUpIcon",8),t&2){let e=u(3);c("ngClass",e.iconClass),f("aria-hidden",!0)}}function Qt(t,r){if(t&1&&(V(0),h(1,Kt,1,4,"span",6)(2,Nt,1,2,"ChevronUpIcon",7),q()),t&2){let e=u(2);p(),c("ngIf",e.accordion.expandIcon),p(),c("ngIf",!e.accordion.expandIcon)}}function Wt(t,r){if(t&1&&h(0,Ut,3,2,"ng-container",3)(1,Qt,3,2,"ng-container",3),t&2){let e=u();c("ngIf",e.selected),p(),c("ngIf",!e.selected)}}function zt(t,r){t&1&&k(0)}function Gt(t,r){if(t&1&&(V(0),h(1,zt,1,0,"ng-container",4),q()),t&2){let e=u();p(),c("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)}}var Zt=({dt:t})=>`
.p-accordionpanel {
    display: flex;
    flex-direction: column;
    border-style: solid;
    border-width: ${t("accordion.panel.border.width")};
    border-color: ${t("accordion.panel.border.color")};
}

.p-accordionheader {
    all: unset;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${t("accordion.header.padding")};
    color: ${t("accordion.header.color")};
    background: ${t("accordion.header.background")};
    border-style: solid;
    border-width: ${t("accordion.header.border.width")};
    border-color: ${t("accordion.header.border.color")};
    font-weight: ${t("accordion.header.font.weight")};
    border-radius: ${t("accordion.header.border.radius")};
    transition: background ${t("accordion.transition.duration")}; color ${t("accordion.transition.duration")}color ${t("accordion.transition.duration")}, outline-color ${t("accordion.transition.duration")}, box-shadow ${t("accordion.transition.duration")};
    outline-color: transparent;
    position: relative;
    overflow: hidden;
}

.p-accordionpanel:first-child > .p-accordionheader {
    border-width: ${t("accordion.header.first.border.width")};
    border-start-start-radius: ${t("accordion.header.first.top.border.radius")};
    border-start-end-radius: ${t("accordion.header.first.top.border.radius")};
}

.p-accordionpanel:last-child > .p-accordionheader {
    border-end-start-radius: ${t("accordion.header.last.bottom.border.radius")};
    border-end-end-radius: ${t("accordion.header.last.bottom.border.radius")};
}

.p-accordionpanel:last-child.p-accordionpanel-active > .p-accordionheader {
    border-end-start-radius: ${t("accordion.header.last.active.bottom.border.radius")};
    border-end-end-radius:${t("accordion.header.last.active.bottom.border.radius")};
}

.p-accordionheader-toggle-icon {
    color: ${t("accordion.header.toggle.icon.color")};
}

.p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
    box-shadow: ${t("accordion.header.focus.ring.shadow")};
    outline: ${t("accordion.header.focus.ring.width")} ${t("accordion.header.focus.ring.style")} ${t("accordion.header.focus.ring.color")};
    outline-offset: ${t("accordion.header.focus.ring.offset")};
}

.p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) > .p-accordionheader:hover {
    background: ${t("accordion.header.hover.background")};
    color: ${t("accordion.header.hover.color")}
}

.p-accordionpanel:not(.p-accordionpanel-active):not(.p-disabled) .p-accordionheader:hover .p-accordionheader-toggle-icon {
    color: ${t("accordion.header.toggle.icon.hover.color")};
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader {
    background: ${t("accordion.header.active.background")};
    color: ${t("accordion.header.active.color")}
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader .p-accordionheader-toggle-icon {
    color: ${t("accordion.header.toggle.icon.active.color")};
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover  {
    background: ${t("accordion.header.active.hover.background")};
    color: ${t("accordion.header.active.hover.color")}
}

.p-accordionpanel:not(.p-disabled).p-accordionpanel-active > .p-accordionheader:hover  .p-accordionheader-toggle-icon {
    color: ${t("accordion.header.toggle.icon.active.hover.color")};
}

.p-accordioncontent-content {
    border-style: solid;
    border-width: ${t("accordion.content.border.width")};
    border-color: ${t("accordion.content.border.color")};
    background-color: ${t("accordion.content.background")};
    color: ${t("accordion.content.color")};
    padding: ${t("accordion.content.padding")}
}

/*For PrimeNG*/

.p-accordion .p-accordioncontent {
    overflow: hidden;
}

.p-accordionpanel.p-accordioncontent:not(.ng-animating) {
    overflow: inherit;
}

.p-accordionheader-toggle-icon.icon-start {
    order: -1;
}

.p-accordionheader:has(.p-accordionheader-toggle-icon.icon-start) {
    justify-content: flex-start;
    gap: ${t("accordion.header.padding")};
}
`,Jt={root:"p-accordion p-component"},ce=(()=>{class t extends Ze{name="accordion";theme=Zt;classes=Jt;static \u0275fac=(()=>{let e;return function(n){return(e||(e=H(t)))(n||t)}})();static \u0275prov=Ee({token:t,factory:t.\u0275fac})}return t})();var le=(()=>{class t extends Q{pcAccordion=y(P(()=>W));value=de(void 0);disabled=ie(!1,{transform:e=>ae(e)});active=T(()=>this.pcAccordion.multiple()?this.valueEquals(this.pcAccordion.value(),this.value()):this.pcAccordion.value()===this.value());valueEquals(e,i){return Array.isArray(e)?e.includes(i):e===i}static \u0275fac=(()=>{let e;return function(n){return(e||(e=H(t)))(n||t)}})();static \u0275cmp=C({type:t,selectors:[["p-accordion-panel"],["p-accordionpanel"]],hostVars:9,hostBindings:function(i,n){i&2&&(f("data-pc-name","accordionpanel")("data-p-disabled",n.disabled())("data-p-active",n.active()),F("p-accordionpanel",!0)("p-accordionpanel-active",n.active())("p-disabled",n.disabled()))},inputs:{value:[1,"value"],disabled:[1,"disabled"]},outputs:{value:"valueChange"},features:[R],ngContentSelectors:se,decls:1,vars:0,template:function(i,n){i&1&&(U(),L(0))},dependencies:[K],encapsulation:2,changeDetection:0})}return t})(),pt=(()=>{class t extends Q{pcAccordion=y(P(()=>W));pcAccordionPanel=y(P(()=>le));id=T(()=>`${this.pcAccordion.id()}_accordionheader_${this.pcAccordionPanel.value()}`);active=T(()=>this.pcAccordionPanel.active());disabled=T(()=>this.pcAccordionPanel.disabled());ariaControls=T(()=>`${this.pcAccordion.id()}_accordioncontent_${this.pcAccordionPanel.value()}`);toggleicon;onClick(e){let i=this.active();this.changeActiveValue();let n=this.active(),o=this.pcAccordionPanel.value();!i&&n?this.pcAccordion.onOpen.emit({originalEvent:e,index:o}):i&&!n&&this.pcAccordion.onClose.emit({originalEvent:e,index:o})}onFocus(){this.pcAccordion.selectOnFocus()&&this.changeActiveValue()}onKeydown(e){switch(e.code){case"ArrowDown":this.arrowDownKey(e);break;case"ArrowUp":this.arrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Enter":case"Space":case"NumpadEnter":this.onEnterKey(e);break;default:break}}changeActiveValue(){this.pcAccordion.updateValue(this.pcAccordionPanel.value())}findPanel(e){return e?.closest('[data-pc-name="accordionpanel"]')}findHeader(e){return N(e,'[data-pc-name="accordionheader"]')}findNextPanel(e,i=!1){let n=i?e:e.nextElementSibling;return n?X(n,"data-p-disabled")?this.findNextPanel(n):this.findHeader(n):null}findPrevPanel(e,i=!1){let n=i?e:e.previousElementSibling;return n?X(n,"data-p-disabled")?this.findPrevPanel(n):this.findHeader(n):null}findFirstPanel(){return this.findNextPanel(this.pcAccordion.el.nativeElement.firstElementChild,!0)}findLastPanel(){return this.findPrevPanel(this.pcAccordion.el.nativeElement.lastElementChild,!0)}changeFocusedPanel(e,i){_e(i)}arrowDownKey(e){let i=this.findNextPanel(this.findPanel(e.currentTarget));i?this.changeFocusedPanel(e,i):this.onHomeKey(e),e.preventDefault()}arrowUpKey(e){let i=this.findPrevPanel(this.findPanel(e.currentTarget));i?this.changeFocusedPanel(e,i):this.onEndKey(e),e.preventDefault()}onHomeKey(e){let i=this.findFirstPanel();this.changeFocusedPanel(e,i),e.preventDefault()}onEndKey(e){let i=this.findLastPanel();this.changeFocusedPanel(e,i),e.preventDefault()}onEnterKey(e){this.changeActiveValue(),e.preventDefault()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=H(t)))(n||t)}})();static \u0275cmp=C({type:t,selectors:[["p-accordion-header"],["p-accordionheader"]],contentQueries:function(i,n,o){if(i&1&&S(o,gt,5),i&2){let a;I(a=E())&&(n.toggleicon=a.first)}},hostVars:13,hostBindings:function(i,n){i&1&&A("click",function(a){return n.onClick(a)})("focus",function(a){return n.onFocus(a)})("keydown",function(a){return n.onKeydown(a)}),i&2&&(f("id",n.id())("aria-expanded",n.active())("aria-controls",n.ariaControls())("aria-disabled",n.disabled())("role","button")("tabindex",n.disabled()?"-1":"0")("data-p-active",n.active())("data-p-disabled",n.disabled())("data-pc-name","accordionheader"),De("user-select","none"),F("p-accordionheader",!0))},features:[He([Ye]),R],ngContentSelectors:se,decls:3,vars:1,consts:[[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf"],[3,"class","ngClass",4,"ngIf"],[3,"ngClass",4,"ngIf"],[3,"ngClass"]],template:function(i,n){i&1&&(U(),L(0),h(1,vt,1,4)(2,It,2,2)),i&2&&(p(),x(n.toggleicon?1:2))},dependencies:[K,fe,be,J,Ce,ye],encapsulation:2,changeDetection:0})}return t})(),ht=(()=>{class t extends Q{pcAccordion=y(P(()=>W));pcAccordionPanel=y(P(()=>le));active=T(()=>this.pcAccordionPanel.active());ariaLabelledby=T(()=>`${this.pcAccordion.id()}_accordionheader_${this.pcAccordionPanel.value()}`);id=T(()=>`${this.pcAccordion.id()}_accordioncontent_${this.pcAccordionPanel.value()}`);static \u0275fac=(()=>{let e;return function(n){return(e||(e=H(t)))(n||t)}})();static \u0275cmp=C({type:t,selectors:[["p-accordion-content"],["p-accordioncontent"]],hostVars:16,hostBindings:function(i,n){i&2&&(ke("@content",n.active()?b(10,lt,b(8,re,n.pcAccordion.transitionOptions)):b(14,dt,b(12,re,n.pcAccordion.transitionOptions))),f("id",n.id())("role","region")("data-pc-name","accordioncontent")("data-p-active",n.active())("aria-labelledby",n.ariaLabelledby()),F("p-accordioncontent",!0))},features:[R],ngContentSelectors:se,decls:2,vars:0,consts:[[1,"p-accordioncontent-content"]],template:function(i,n){i&1&&(U(),l(0,"div",0),L(1),s())},dependencies:[K],encapsulation:2,data:{animation:[xe("content",[te("hidden",ee({height:"0",visibility:"hidden"})),te("visible",ee({height:"*",visibility:"visible"})),ne("visible <=> hidden",[Y("{{transitionParams}}")]),ne("void => *",Y(0))])]},changeDetection:0})}return t})(),Xt=(()=>{class t extends Q{get hostClass(){return this.tabStyleClass}get hostStyle(){return this.tabStyle}id=ve("pn_id_");header;headerStyle;tabStyle;contentStyle;tabStyleClass;headerStyleClass;contentStyleClass;disabled;cache=!0;transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)";iconPos="start";get selected(){return this._selected}set selected(e){this._selected=e,this.loaded||(this._selected&&this.cache&&(this.loaded=!0),this.cd.detectChanges())}headerAriaLevel=2;selectedChange=new Z;headerFacet;_selected=!1;get iconClass(){return this.iconPos==="end"?"p-accordionheader-toggle-icon icon-end":"p-accordionheader-toggle-icon icon-start"}headerTemplate;iconTemplate;contentTemplate;templates;_headerTemplate;_iconTemplate;_contentTemplate;loaded=!1;accordion=y(P(()=>W));_componentStyle=y(ce);ngOnInit(){super.ngOnInit(),console.log("AccordionTab is deprecated as of v18, please use the new structure instead.")}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}toggle(e){if(this.disabled)return!1;let i=this.findTabIndex();if(this.selected)this.selected=!1,this.accordion.onClose.emit({originalEvent:e,index:i});else{if(!this.accordion.multiple())for(var n=0;n<this.accordion.tabs.length;n++)this.accordion.tabs[n].selected&&(this.accordion.tabs[n].selected=!1,this.accordion.tabs[n].selectedChange.emit(!1),this.accordion.tabs[n].cd.markForCheck());this.selected=!0,this.loaded=!0,this.accordion.onOpen.emit({originalEvent:e,index:i})}this.selectedChange.emit(this.selected),this.accordion.updateActiveIndex(),this.cd.markForCheck(),e?.preventDefault()}findTabIndex(){let e=-1;for(var i=0;i<this.accordion.tabs.length;i++)if(this.accordion.tabs[i]==this){e=i;break}return e}onKeydown(e){switch(e.code){case"Enter":case"Space":this.toggle(e),e.preventDefault();break;default:break}}getTabHeaderActionId(e){return`${e}_header_action`}getTabContentId(e){return`${e}_content`}ngOnDestroy(){this.accordion.tabs.splice(this.findTabIndex(),1),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=H(t)))(n||t)}})();static \u0275cmp=C({type:t,selectors:[["p-accordionTab"],["p-accordion-tab"],["p-accordiontab"]],contentQueries:function(i,n,o){if(i&1&&(S(o,Et,4),S(o,wt,4),S(o,Pt,4),S(o,We,4),S(o,ze,4)),i&2){let a;I(a=E())&&(n.headerTemplate=a.first),I(a=E())&&(n.iconTemplate=a.first),I(a=E())&&(n.contentTemplate=a.first),I(a=E())&&(n.headerFacet=a),I(a=E())&&(n.templates=a)}},hostVars:9,hostBindings:function(i,n){i&2&&(f("data-pc-name","accordiontab"),pe(n.hostStyle),$(n.hostClass),F("p-accordionpanel",!0)("p-accordionpanel-active",n.selected))},inputs:{id:"id",header:"header",headerStyle:"headerStyle",tabStyle:"tabStyle",contentStyle:"contentStyle",tabStyleClass:"tabStyleClass",headerStyleClass:"headerStyleClass",contentStyleClass:"contentStyleClass",disabled:[2,"disabled","disabled",ge],cache:[2,"cache","cache",ge],transitionOptions:"transitionOptions",iconPos:"iconPos",selected:"selected",headerAriaLevel:[2,"headerAriaLevel","headerAriaLevel",Ve]},outputs:{selectedChange:"selectedChange"},features:[he([ce]),R],ngContentSelectors:Dt,decls:9,vars:30,consts:[["type","button",1,"p-accordionheader",3,"click","keydown","disabled","ngClass","ngStyle"],["role","region",1,"p-accordioncontent"],[1,"p-accordioncontent-content",3,"ngClass","ngStyle"],[4,"ngIf"],[4,"ngTemplateOutlet"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","ngClass",4,"ngIf"],[3,"ngClass",4,"ngIf"],[3,"ngClass"]],template:function(i,n){i&1&&(U(Ht),l(0,"button",0),A("click",function(a){return n.toggle(a)})("keydown",function(a){return n.onKeydown(a)}),h(1,$t,1,1)(2,Mt,2,2)(3,Rt,1,4)(4,Wt,2,2),s(),l(5,"div",1)(6,"div",2),L(7),h(8,Gt,2,1,"ng-container",3),s()()),i&2&&(F("p-disabled",n.disabled),c("disabled",n.disabled)("ngClass",n.headerStyleClass)("ngStyle",n.headerStyle),f("aria-expanded",n.selected)("aria-level",n.headerAriaLevel)("data-p-disabled",n.disabled)("data-pc-section","accordionheader")("tabindex",n.disabled?null:0)("id",n.getTabHeaderActionId(n.id))("aria-controls",n.getTabContentId(n.id)),p(),x(!n.headerTemplate&&!n._headerTemplate?1:2),p(2),x(n.iconTemplate||n._iconTemplate?3:4),p(2),c("@tabContent",n.selected?b(24,lt,b(22,re,n.transitionOptions)):b(28,dt,b(26,re,n.transitionOptions))),f("id",n.getTabContentId(n.id))("aria-hidden",!n.selected)("aria-labelledby",n.getTabHeaderActionId(n.id))("data-pc-section","toggleablecontent"),p(),c("ngClass",n.contentStyleClass)("ngStyle",n.contentStyle),p(2),c("ngIf",(n.contentTemplate||n._contentTemplate)&&(n.cache?n.loaded:n.selected)))},dependencies:[K,fe,be,J,Ue,Ce,ye],encapsulation:2,data:{animation:[xe("tabContent",[te("hidden",ee({height:"0",visibility:"hidden"})),te("visible",ee({height:"*",visibility:"visible"})),ne("visible <=> hidden",[Y("{{transitionParams}}")]),ne("void => *",Y(0))])]},changeDetection:0})}return t})(),W=(()=>{class t extends Q{get hostClass(){return this.styleClass}get hostStyle(){return this.style}value=de(void 0);multiple=ie(!1,{transform:e=>ae(e)});style;styleClass;expandIcon;collapseIcon;selectOnFocus=ie(!1,{transform:e=>ae(e)});set activeIndex(e){if(this._activeIndex=e,this.preventActiveIndexPropagation){this.preventActiveIndexPropagation=!1;return}this.updateSelectionState()}transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)";activeIndexChange=new Z;set headerAriaLevel(e){typeof e=="number"&&e>0?this._headerAriaLevel=e:this._headerAriaLevel!==2&&(this._headerAriaLevel=2)}onClose=new Z;onOpen=new Z;id=Pe(ve("pn_id_"));tabList;tabListSubscription=null;_activeIndex;_headerAriaLevel=2;preventActiveIndexPropagation=!1;tabs=[];_componentStyle=y(ce);get activeIndex(){return this._activeIndex}get headerAriaLevel(){return this._headerAriaLevel}onKeydown(e){switch(e.code){case"ArrowDown":this.onTabArrowDownKey(e);break;case"ArrowUp":this.onTabArrowUpKey(e);break;case"Home":e.shiftKey||this.onTabHomeKey(e);break;case"End":e.shiftKey||this.onTabEndKey(e);break}}onTabArrowDownKey(e){let i=this.findNextHeaderAction(e.target.parentElement);i?this.changeFocusedTab(i):this.onTabHomeKey(e),e.preventDefault()}onTabArrowUpKey(e){let i=this.findPrevHeaderAction(e.target.parentElement);i?this.changeFocusedTab(i):this.onTabEndKey(e),e.preventDefault()}onTabHomeKey(e){let i=this.findFirstHeaderAction();this.changeFocusedTab(i),e.preventDefault()}changeFocusedTab(e){e&&(_e(e),this.selectOnFocus()&&this.tabs.forEach((i,n)=>{let o=this.multiple()?this._activeIndex.includes(n):n===this._activeIndex;this.multiple()?(this._activeIndex||(this._activeIndex=[]),i.id==e.id&&(i.selected=!i.selected,this._activeIndex.includes(n)?this._activeIndex=this._activeIndex.filter(a=>a!==n):this._activeIndex.push(n))):i.id==e.id?(i.selected=!i.selected,this._activeIndex=n):i.selected=!1,i.selectedChange.emit(o),this.activeIndexChange.emit(this._activeIndex),i.cd.markForCheck()}))}findNextHeaderAction(e,i=!1){let n=i?e:e.nextElementSibling,o=N(n,'[data-pc-section="accordionheader"]');return o?X(o,"data-p-disabled")?this.findNextHeaderAction(o.parentElement):N(o.parentElement,'[data-pc-section="accordionheader"]'):null}findPrevHeaderAction(e,i=!1){let n=i?e:e.previousElementSibling,o=N(n,'[data-pc-section="accordionheader"]');return o?X(o,"data-p-disabled")?this.findPrevHeaderAction(o.parentElement):N(o.parentElement,'[data-pc-section="accordionheader"]'):null}findFirstHeaderAction(){let e=this.el.nativeElement.firstElementChild;return this.findNextHeaderAction(e,!0)}findLastHeaderAction(){let e=this.el.nativeElement.lastElementChild;return this.findPrevHeaderAction(e,!0)}onTabEndKey(e){let i=this.findLastHeaderAction();this.changeFocusedTab(i),e.preventDefault()}ngAfterContentInit(){this.initTabs(),this.tabListSubscription=this.tabList.changes.subscribe(e=>{this.initTabs()})}initTabs(){this.tabs=this.tabList.toArray(),this.tabs.forEach(e=>{e.headerAriaLevel=this._headerAriaLevel}),this.updateSelectionState(),this.cd.markForCheck()}getBlockableElement(){return this.el.nativeElement.children[0]}updateSelectionState(){if(this.tabs&&this.tabs.length&&this._activeIndex!=null)for(let e=0;e<this.tabs.length;e++){let i=this.multiple()?this._activeIndex.includes(e):e===this._activeIndex;i!==this.tabs[e].selected&&(this.tabs[e].selected=i,this.tabs[e].selectedChange.emit(i),this.tabs[e].cd.markForCheck())}}isTabActive(e){return this.multiple()?this._activeIndex&&this._activeIndex.includes(e):this._activeIndex===e}getTabProp(e,i){return e.props?e.props[i]:void 0}updateActiveIndex(){let e=this.multiple()?[]:null;this.tabs.forEach((i,n)=>{if(i.selected)if(this.multiple())e.push(n);else{e=n;return}}),this.preventActiveIndexPropagation=!0,this._activeIndex=e,this.activeIndexChange.emit(e)}updateValue(e){let i=this.value();if(this.multiple()){let n=Array.isArray(i)?[...i]:[],o=n.indexOf(e);o!==-1?n.splice(o,1):n.push(e),this.value.set(n)}else i===e?this.value.set(void 0):this.value.set(e)}ngOnDestroy(){this.tabListSubscription&&this.tabListSubscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(n){return(e||(e=H(t)))(n||t)}})();static \u0275cmp=C({type:t,selectors:[["p-accordion"]],contentQueries:function(i,n,o){if(i&1&&S(o,Xt,5),i&2){let a;I(a=E())&&(n.tabList=a)}},hostVars:8,hostBindings:function(i,n){i&1&&A("keydown",function(a){return n.onKeydown(a)}),i&2&&(pe(n.hostStyle),$(n.hostClass),F("p-accordion",!0)("p-component",!0))},inputs:{value:[1,"value"],multiple:[1,"multiple"],style:"style",styleClass:"styleClass",expandIcon:"expandIcon",collapseIcon:"collapseIcon",selectOnFocus:[1,"selectOnFocus"],transitionOptions:"transitionOptions",activeIndex:"activeIndex",headerAriaLevel:"headerAriaLevel"},outputs:{value:"valueChange",activeIndexChange:"activeIndexChange",onClose:"onClose",onOpen:"onOpen"},features:[he([ce]),R],ngContentSelectors:se,decls:1,vars:0,template:function(i,n){i&1&&(U(),L(0))},dependencies:[K,Ge],encapsulation:2,changeDetection:0})}return t})();var ut=t=>({$implicit:t}),Yt=(t,r)=>r.id||t;function en(t,r){t&1&&k(0)}function tn(t,r){if(t&1&&h(0,en,1,0,"ng-container",5),t&2){let e=u(2),i=O(11);c("ngTemplateOutlet",e.noResultsTemplate?e.noResultsTemplate:i)}}function nn(t,r){if(t&1&&h(0,tn,1,1,"ng-container"),t&2){let e=u();x(e.noResultsTemplate?0:-1)}}function on(t,r){t&1&&k(0)}function an(t,r){t&1&&k(0)}function rn(t,r){if(t&1&&(l(0,"p-accordion-panel",4)(1,"p-accordion-header"),h(2,on,1,0,"ng-container",6),s(),l(3,"p-accordion-content"),h(4,an,1,0,"ng-container",6),s()()),t&2){let e=r.$implicit,i=r.$index,n=u(),o=O(7),a=O(9);c("value",i),f("id",e.id),p(2),c("ngTemplateOutlet",n.headerTemplate?n.headerTemplate:o)("ngTemplateOutletContext",b(6,ut,e)),p(2),c("ngTemplateOutlet",n.contentTemplate?n.contentTemplate:a)("ngTemplateOutletContext",b(8,ut,e))}}function cn(t,r){if(t&1&&m(0,"span",7),t&2){let e=r.$implicit;c("innerHTML",e.header,B)}}function sn(t,r){if(t&1&&m(0,"p",7),t&2){let e=r.$implicit;c("innerHTML",e.content,B)}}function ln(t,r){}var mt=(()=>{class t{constructor(e,i,n,o){this.router=e,this.activatedRoute=i,this.changeDetector=n,this.document=o,this.searchDebounceTime=250,this.highlightWords=!0,this.highlightClass="px-searchable-accordion-highlight",this.allowUrlFragments=!0,this.filteredEntries=new Se([]),this.activeEntryIndex=0,this.lastSearchString="",this.searchQueryRegex=/[^a-zA-Z0-9\s]/g}ngOnChanges(e){e.searchString?(this.lastSearchString="",this.searchSub?.unsubscribe(),delete this.searchSub,typeof this.searchString=="string"?this.search(this.searchString).then():(this.search(this.lastSearchString).then(),this.searchSub=this.searchString.pipe(Ie(this.searchDebounceTime)).subscribe(i=>this.search(i).then()))):e.entries&&(typeof this.searchString=="string"?this.search(this.searchString).then():this.search(this.lastSearchString).then())}ngAfterViewInit(){this.allowUrlFragments&&(this.routeFragmentsSub=this.activatedRoute.fragment.subscribe(e=>{if(e){let i=this.filteredEntries.getValue(),n=i.length;for(let o=0;o<n;o++){let a=i[o];if(a.id===e&&this.activeEntryIndex!==o){this.activeEntryIndex=o,this.changeDetector.detectChanges(),this.document.getElementById(a.id)?.scrollIntoView({behavior:"auto",block:"center",inline:"center"});break}}}}))}search(e){return Te(this,null,function*(){if(e=e.replace(this.searchQueryRegex,"").trim().toLowerCase(),e===""){this.filteredEntries.next(this.entries);return}else if(e===this.lastSearchString)return;this.lastSearchString=e;let i=this.entries,n=i.length,o=[];for(let a=0;a<n;++a){let g=i[a],_=g.header.toLowerCase(),j=g.content.toLowerCase(),w=_.indexOf(e)!==-1,v=j.indexOf(e)!==-1;(w||v)&&o.push(this.highlightWords?{header:w?this.highlightString(g.header,_,e):g.header,content:v?this.highlightString(g.content,j,e):g.content,data:g.data}:g)}this.filteredEntries.next(o)})}activeIndexChanged(){let e;if(Array.isArray(this.activeEntryIndex)?e=this.activeEntryIndex[0]:e=this.activeEntryIndex,!(e&&this.allowUrlFragments))return;let i=this.filteredEntries.getValue();if(!i.length)return;let n=i[e];n.id&&this.router.navigate([],{fragment:n.id}).then()}highlightString(e,i,n){let o=[],a=e.length,g=this.highlightClass,_=[],j=!1;for(let w=0;w<a;++w){let v=e[w];if(j)v===">"&&(j=!1);else if(v==="<")j=!0;else if(n.indexOf(i[w])!==-1){_.push(v);continue}else _.length&&(_.length===n.length?v='<span class="'+g+'">'+_.join("")+"</span>"+v:v=_.join("")+v,_=[]);o.push(v)}return _.length&&(_.length===n.length?o.push('<span class="'+g+'">'+_.join("")+"</span>"):o.push(_.join(""))),o.join("")}ngOnDestroy(){this.searchSub?.unsubscribe(),this.filteredEntries.complete(),this.routeFragmentsSub?.unsubscribe()}static{this.\u0275fac=function(i){return new(i||t)(D(Qe),D(Ne),D(Re),D(qe))}}static{this.\u0275cmp=C({type:t,selectors:[["px-searchable-accordion"]],inputs:{entries:"entries",searchString:"searchString",headerTemplate:"headerTemplate",contentTemplate:"contentTemplate",noResultsTemplate:"noResultsTemplate",searchDebounceTime:"searchDebounceTime",highlightWords:"highlightWords",highlightClass:"highlightClass",allowUrlFragments:"allowUrlFragments"},features:[we],decls:12,vars:6,consts:[["defaultHeader",""],["defaultContent",""],["defaultNoResultsTemplate",""],[3,"valueChange","value"],[3,"value"],[4,"ngTemplateOutlet"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"innerHTML"]],template:function(i,n){if(i&1){let o=oe();l(0,"p-accordion",3),je("valueChange",function(g){return z(o),Me(n.activeEntryIndex,g)||(n.activeEntryIndex=g),G(g)}),A("valueChange",function(){return z(o),G(n.activeIndexChanged())}),h(1,nn,1,1),ue(2,"async"),Fe(3,rn,5,10,"p-accordion-panel",4,Yt),ue(5,"async"),s(),h(6,cn,1,1,"ng-template",null,0,M)(8,sn,1,1,"ng-template",null,1,M)(10,ln,0,0,"ng-template",null,2,M)}if(i&2){let o;Oe("value",n.activeEntryIndex),p(),x((o=me(2,2,n.filteredEntries))!=null&&o.length?-1:1),p(2),$e(me(5,4,n.filteredEntries))}},dependencies:[W,Ke,J,le,pt,ht],styles:[`.px-searchable-accordion-highlight{padding:0;margin:0;background:var(--p-highlight-background);color:var(--p-highlight-color);font-weight:700}
`],encapsulation:2})}}return t})();var dn=()=>["docIntl","docStyling"];function pn(t,r){if(t&1&&(l(0,"div",16)(1,"span",17),d(2," Custom Header for:\xA0 "),m(3,"span",18),d(4," \xA0 "),m(5,"i",19),s(),m(6,"p-badge",20),s()),t&2){let e=r.$implicit;p(3),c("innerHTML",e.header,B)}}function hn(t,r){if(t&1&&(m(0,"span",18),d(1," \xA0 "),m(2,"i",19)),t&2){let e=r.$implicit;c("innerHTML",e.content,B)}}var ii=(()=>{class t{constructor(e){this.pxSearchableAccordionCodeExample=ct,this.entries=[],this.entriesWithCustomTemplates=[],this.search$=new Ae,this.form=e.group({config:e.group({config:["0"]})}),this.entries.push({id:"demo-entry",header:"Demo entry",content:`
                <h1>HTML Ipsum Presents</h1>
                <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>

                <h2>Header Level 2</h2>

                <ol>
                   <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                   <li>Aliquam tincidunt mauris eu risus.</li>
                </ol>

                <blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote>

                <h3>Header Level 3</h3>

                <ul>
                   <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                   <li>Aliquam tincidunt mauris eu risus.</li>
                </ul>
            `});for(let i=1;i<5;++i)this.entries.push({id:"entry-"+i,header:"Entry "+i,content:'<strong>Description</strong> <a href="https://github.com/daniel1919-00/ng-prime-extensions" target="_blank">GitHub link</a>'})}static{this.\u0275fac=function(i){return new(i||t)(D(it))}}static{this.\u0275cmp=C({type:t,selectors:[["app-px-searchable-accordion-docs"]],decls:86,vars:9,consts:[["customHeaderTemplate",""],["customContentTemplate",""],["header","px-table",3,"hiddenSections"],["docDescription","",1,"primary-color"],["href","https://primeng.org","target","_blank"],["docOverview",""],[3,"code"],[1,"dm:grid","dm:align-items-center","dm:justify-content-center"],["pInputText","","placeholder","Search",1,"dm:col","search-input",3,"input"],[3,"entries","searchString"],[3,"entries","headerTemplate","contentTemplate","searchString"],["docApi",""],[1,"entry-group"],[1,"title"],[1,"entry"],[1,"dm:quote","code"],[1,"dm:grid","dm:col-12","dm:justify-content-between","dm:align-content-center"],[1,"dm:col"],[3,"innerHTML"],[1,"pi","pi-heart"],["value","1",1,"dm:col-fixed"]],template:function(i,n){if(i&1){let o=oe();l(0,"app-library-documentation",2)(1,"span",3)(2,"a",4),d(3,"PrimeNG-based"),s(),d(4," library used to create searchable accordions. "),s(),l(5,"div",5)(6,"app-code-example",6)(7,"div",7)(8,"input",8),A("input",function(g){return z(o),G(n.search$.next((g.target.value||"").trim()))}),s()(),m(9,"br"),l(10,"h2"),d(11,"Default accordion template"),s(),m(12,"px-searchable-accordion",9)(13,"br")(14,"br"),l(15,"h2"),d(16,"Custom accordion template"),s(),l(17,"px-searchable-accordion",10),h(18,pn,7,1,"ng-template",null,0,M)(20,hn,3,1,"ng-template",null,1,M),s()()(),l(22,"div",11)(23,"div",12)(24,"h2",13),d(25,"Imports"),s(),l(26,"div",14)(27,"pre")(28,"code",15),d(29,"import { PxSearchableAccordionComponent } from '@ng-prime-extensions/px-searchable-accordion';"),s()()()(),l(30,"div",12)(31,"h2",13),d(32,"Inputs"),s(),l(33,"div",14)(34,"h3"),d(35,"entries"),s(),l(36,"p"),d(37,"Accordion entries to be rendered."),s()(),l(38,"div",14)(39,"h3"),d(40,"searchString"),s(),l(41,"p"),d(42,"A search string or an observable that emits the search string."),s()(),l(43,"div",14)(44,"h3"),d(45,"headerTemplate"),s(),l(46,"p"),d(47,"Template to render the header with."),s()(),l(48,"div",14)(49,"h3"),d(50,"contentTemplate"),s(),l(51,"p"),d(52,"Template to render the content with."),s()(),l(53,"div",14)(54,"h3"),d(55,"noResultsTemplate"),s(),l(56,"p"),d(57,"Template to render the no results message."),s()(),l(58,"div",14)(59,"h3"),d(60,"searchDebounceTime"),s(),l(61,"p"),d(62,"Search delay time in milliseconds."),s()(),l(63,"div",14)(64,"h3"),d(65,"highlightWords"),s(),l(66,"p"),d(67,"Weather searched words will be highlighted."),s()(),l(68,"div",14)(69,"h3"),d(70,"highlightClass"),s(),l(71,"p"),d(72,"The css class applied to the highlighted words."),s()(),l(73,"div",14)(74,"h3"),d(75,"allowUrlFragments"),s(),l(76,"p"),d(77,"If true, url fragments will be generated based on the set entry id."),s()()(),l(78,"div",12)(79,"h2",13),d(80,"Public methods"),s(),l(81,"div",14)(82,"h3"),d(83,"search"),s(),l(84,"p"),d(85,"Searches the available entries for the given search string."),s()()()()()}if(i&2){let o=O(19),a=O(21);c("hiddenSections",Be(8,dn)),p(6),c("code",n.pxSearchableAccordionCodeExample),p(6),c("entries",n.entries)("searchString",n.search$),p(5),c("entries",n.entriesWithCustomTemplates)("headerTemplate",o)("contentTemplate",a)("searchString",n.search$)}},dependencies:[nt,et,ot,tt,mt,Xe,Je,rt,at],styles:[".search-input[_ngcontent-%COMP%]{max-width:500px}"]})}}return t})();export{ii as PxSearchableAccordionDocsComponent};
