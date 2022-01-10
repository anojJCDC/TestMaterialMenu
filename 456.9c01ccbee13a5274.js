"use strict";(self.webpackChunkTestMaterial=self.webpackChunkTestMaterial||[]).push([[456],{456:(Ot,R,r)=>{r.r(R),r.d(R,{OrdersModule:()=>St});var _=r(6019),w=r(1659),t=r(3668),y=r(7497),B=r(3242),m=r(5711),h=r(6731),p=r(9555),T=r(273),f=r(7908),M=r(5077),Z=r(2997),I=r(3719),Q=r(9417),g=r(8290),b=r(9814),D=r(3970),W=r(5488),u=r(6263),v=r(348),C=r(5316),x=r(928),k=r(1628);function z(n,o){1&n&&t.Hsn(0)}const P=["*"];function $(n,o){}const q=function(n){return{animationDuration:n}},J=function(n,o){return{value:n,params:o}},V=["tabListContainer"],U=["tabList"],K=["tabListInner"],X=["nextPaginator"],tt=["previousPaginator"],et=["tabBodyWrapper"],it=["tabHeader"];function at(n,o){}function nt(n,o){if(1&n&&t.YNc(0,at,0,0,"ng-template",9),2&n){const e=t.oxw().$implicit;t.Q6J("cdkPortalOutlet",e.templateLabel)}}function ot(n,o){if(1&n&&t._uU(0),2&n){const e=t.oxw().$implicit;t.Oqu(e.textLabel)}}function st(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div",6),t.NdJ("click",function(){const a=t.CHM(e),s=a.$implicit,l=a.index,c=t.oxw(),d=t.MAs(1);return c._handleClick(s,d,l)})("cdkFocusChange",function(a){const l=t.CHM(e).index;return t.oxw()._tabFocusChanged(a,l)}),t.TgZ(1,"div",7),t.YNc(2,nt,1,1,"ng-template",8),t.YNc(3,ot,1,1,"ng-template",8),t.qZA(),t.qZA()}if(2&n){const e=o.$implicit,i=o.index,a=t.oxw();t.ekj("mat-tab-label-active",a.selectedIndex==i),t.Q6J("id",a._getTabLabelId(i))("disabled",e.disabled)("matRippleDisabled",e.disabled||a.disableRipple),t.uIk("tabIndex",a._getTabIndex(e,i))("aria-posinset",i+1)("aria-setsize",a._tabs.length)("aria-controls",a._getTabContentId(i))("aria-selected",a.selectedIndex==i)("aria-label",e.ariaLabel||null)("aria-labelledby",!e.ariaLabel&&e.ariaLabelledby?e.ariaLabelledby:null),t.xp6(2),t.Q6J("ngIf",e.templateLabel),t.xp6(1),t.Q6J("ngIf",!e.templateLabel)}}function rt(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"mat-tab-body",10),t.NdJ("_onCentered",function(){return t.CHM(e),t.oxw()._removeTabBodyWrapperHeight()})("_onCentering",function(a){return t.CHM(e),t.oxw()._setTabBodyWrapperHeight(a)}),t.qZA()}if(2&n){const e=o.$implicit,i=o.index,a=t.oxw();t.ekj("mat-tab-body-active",a.selectedIndex===i),t.Q6J("id",a._getTabContentId(i))("content",e.content)("position",e.position)("origin",e.origin)("animationDuration",a.animationDuration),t.uIk("tabindex",null!=a.contentTabIndex&&a.selectedIndex===i?a.contentTabIndex:null)("aria-labelledby",a._getTabLabelId(i))}}const lt=new t.OlP("MatInkBarPositioner",{providedIn:"root",factory:function(){return o=>({left:o?(o.offsetLeft||0)+"px":"0",width:o?(o.offsetWidth||0)+"px":"0"})}});let A=(()=>{class n{constructor(e,i,a,s){this._elementRef=e,this._ngZone=i,this._inkBarPositioner=a,this._animationMode=s}alignToElement(e){this.show(),"undefined"!=typeof requestAnimationFrame?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._setStyles(e))}):this._setStyles(e)}show(){this._elementRef.nativeElement.style.visibility="visible"}hide(){this._elementRef.nativeElement.style.visibility="hidden"}_setStyles(e){const i=this._inkBarPositioner(e),a=this._elementRef.nativeElement;a.style.left=i.left,a.style.width=i.width}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.SBq),t.Y36(t.R0b),t.Y36(lt),t.Y36(p.Qb,8))},n.\u0275dir=t.lG2({type:n,selectors:[["mat-ink-bar"]],hostAttrs:[1,"mat-ink-bar"],hostVars:2,hostBindings:function(e,i){2&e&&t.ekj("_mat-animation-noopable","NoopAnimations"===i._animationMode)}}),n})();const S=new t.OlP("MatTabContent");let dt=(()=>{class n{constructor(e){this.template=e}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.Rgc))},n.\u0275dir=t.lG2({type:n,selectors:[["","matTabContent",""]],features:[t._Bn([{provide:S,useExisting:n}])]}),n})();const bt=new t.OlP("MatTabLabel"),ht=new t.OlP("MAT_TAB"),pt=(0,h.Id)(class{}),O=new t.OlP("MAT_TAB_GROUP");let E=(()=>{class n extends pt{constructor(e,i){super(),this._viewContainerRef=e,this._closestTabGroup=i,this.textLabel="",this._contentPortal=null,this._stateChanges=new T.x,this.position=null,this.origin=null,this.isActive=!1}get templateLabel(){return this._templateLabel}set templateLabel(e){this._setTemplateLabelInput(e)}get content(){return this._contentPortal}ngOnChanges(e){(e.hasOwnProperty("textLabel")||e.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new m.UE(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(e){e&&e._closestTab===this&&(this._templateLabel=e)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.s_b),t.Y36(O,8))},n.\u0275cmp=t.Xpm({type:n,selectors:[["mat-tab"]],contentQueries:function(e,i,a){if(1&e&&(t.Suo(a,bt,5),t.Suo(a,S,7,t.Rgc)),2&e){let s;t.iGM(s=t.CRH())&&(i.templateLabel=s.first),t.iGM(s=t.CRH())&&(i._explicitContent=s.first)}},viewQuery:function(e,i){if(1&e&&t.Gf(t.Rgc,7),2&e){let a;t.iGM(a=t.CRH())&&(i._implicitContent=a.first)}},inputs:{disabled:"disabled",textLabel:["label","textLabel"],ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"]},exportAs:["matTab"],features:[t._Bn([{provide:ht,useExisting:n}]),t.qOj,t.TTD],ngContentSelectors:P,decls:1,vars:0,template:function(e,i){1&e&&(t.F$t(),t.YNc(0,z,1,0,"ng-template"))},encapsulation:2}),n})();const ut={translateTab:(0,b.X$)("translateTab",[(0,b.SB)("center, void, left-origin-center, right-origin-center",(0,b.oB)({transform:"none"})),(0,b.SB)("left",(0,b.oB)({transform:"translate3d(-100%, 0, 0)",minHeight:"1px"})),(0,b.SB)("right",(0,b.oB)({transform:"translate3d(100%, 0, 0)",minHeight:"1px"})),(0,b.eR)("* => left, * => right, left => center, right => center",(0,b.jt)("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)")),(0,b.eR)("void => left-origin-center",[(0,b.oB)({transform:"translate3d(-100%, 0, 0)"}),(0,b.jt)("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)")]),(0,b.eR)("void => right-origin-center",[(0,b.oB)({transform:"translate3d(100%, 0, 0)"}),(0,b.jt)("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)")])])};let _t=(()=>{class n extends m.Pl{constructor(e,i,a,s){super(e,i,s),this._host=a,this._centeringSub=f.w0.EMPTY,this._leavingSub=f.w0.EMPTY}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe((0,D.O)(this._host._isCenterPosition(this._host._position))).subscribe(e=>{e&&!this.hasAttached()&&this.attach(this._host._content)}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this.detach()})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t._Vd),t.Y36(t.s_b),t.Y36((0,t.Gpc)(()=>H)),t.Y36(_.K0))},n.\u0275dir=t.lG2({type:n,selectors:[["","matTabBodyHost",""]],features:[t.qOj]}),n})(),mt=(()=>{class n{constructor(e,i,a){this._elementRef=e,this._dir=i,this._dirChangeSubscription=f.w0.EMPTY,this._translateTabComplete=new T.x,this._onCentering=new t.vpe,this._beforeCentering=new t.vpe,this._afterLeavingCenter=new t.vpe,this._onCentered=new t.vpe(!0),this.animationDuration="500ms",i&&(this._dirChangeSubscription=i.change.subscribe(s=>{this._computePositionAnimationState(s),a.markForCheck()})),this._translateTabComplete.pipe((0,W.x)((s,l)=>s.fromState===l.fromState&&s.toState===l.toState)).subscribe(s=>{this._isCenterPosition(s.toState)&&this._isCenterPosition(this._position)&&this._onCentered.emit(),this._isCenterPosition(s.fromState)&&!this._isCenterPosition(this._position)&&this._afterLeavingCenter.emit()})}set position(e){this._positionIndex=e,this._computePositionAnimationState()}ngOnInit(){"center"==this._position&&null!=this.origin&&(this._position=this._computePositionFromOrigin(this.origin))}ngOnDestroy(){this._dirChangeSubscription.unsubscribe(),this._translateTabComplete.complete()}_onTranslateTabStarted(e){const i=this._isCenterPosition(e.toState);this._beforeCentering.emit(i),i&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_getLayoutDirection(){return this._dir&&"rtl"===this._dir.value?"rtl":"ltr"}_isCenterPosition(e){return"center"==e||"left-origin-center"==e||"right-origin-center"==e}_computePositionAnimationState(e=this._getLayoutDirection()){this._position=this._positionIndex<0?"ltr"==e?"left":"right":this._positionIndex>0?"ltr"==e?"right":"left":"center"}_computePositionFromOrigin(e){const i=this._getLayoutDirection();return"ltr"==i&&e<=0||"rtl"==i&&e>0?"left-origin-center":"right-origin-center"}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.SBq),t.Y36(g.Is,8),t.Y36(t.sBO))},n.\u0275dir=t.lG2({type:n,inputs:{_content:["content","_content"],origin:"origin",animationDuration:"animationDuration",position:"position"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_afterLeavingCenter:"_afterLeavingCenter",_onCentered:"_onCentered"}}),n})(),H=(()=>{class n extends mt{constructor(e,i,a){super(e,i,a)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.SBq),t.Y36(g.Is,8),t.Y36(t.sBO))},n.\u0275cmp=t.Xpm({type:n,selectors:[["mat-tab-body"]],viewQuery:function(e,i){if(1&e&&t.Gf(m.Pl,5),2&e){let a;t.iGM(a=t.CRH())&&(i._portalHost=a.first)}},hostAttrs:[1,"mat-tab-body"],features:[t.qOj],decls:3,vars:6,consts:[["cdkScrollable","",1,"mat-tab-body-content"],["content",""],["matTabBodyHost",""]],template:function(e,i){1&e&&(t.TgZ(0,"div",0,1),t.NdJ("@translateTab.start",function(s){return i._onTranslateTabStarted(s)})("@translateTab.done",function(s){return i._translateTabComplete.next(s)}),t.YNc(2,$,0,0,"ng-template",2),t.qZA()),2&e&&t.Q6J("@translateTab",t.WLB(3,J,i._position,t.VKq(1,q,i.animationDuration)))},directives:[_t],styles:[".mat-tab-body-content{height:100%;overflow:auto}.mat-tab-group-dynamic-height .mat-tab-body-content{overflow:hidden}\n"],encapsulation:2,data:{animation:[ut.translateTab]}}),n})();const N=new t.OlP("MAT_TABS_CONFIG"),ft=(0,h.Id)(class{});let F=(()=>{class n extends ft{constructor(e){super(),this.elementRef=e}focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.SBq))},n.\u0275dir=t.lG2({type:n,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(e,i){2&e&&(t.uIk("aria-disabled",!!i.disabled),t.ekj("mat-tab-disabled",i.disabled))},inputs:{disabled:"disabled"},features:[t.qOj]}),n})();const j=(0,x.i$)({passive:!0});let Tt=(()=>{class n{constructor(e,i,a,s,l,c,d){this._elementRef=e,this._changeDetectorRef=i,this._viewportRuler=a,this._dir=s,this._ngZone=l,this._platform=c,this._animationMode=d,this._scrollDistance=0,this._selectedIndexChanged=!1,this._destroyed=new T.x,this._showPaginationControls=!1,this._disableScrollAfter=!0,this._disableScrollBefore=!0,this._stopScrolling=new T.x,this.disablePagination=!1,this._selectedIndex=0,this.selectFocusedIndex=new t.vpe,this.indexFocused=new t.vpe,l.runOutsideAngular(()=>{(0,M.R)(e.nativeElement,"mouseleave").pipe((0,u.R)(this._destroyed)).subscribe(()=>{this._stopInterval()})})}get selectedIndex(){return this._selectedIndex}set selectedIndex(e){e=(0,v.su)(e),this._selectedIndex!=e&&(this._selectedIndexChanged=!0,this._selectedIndex=e,this._keyManager&&this._keyManager.updateActiveItem(e))}ngAfterViewInit(){(0,M.R)(this._previousPaginator.nativeElement,"touchstart",j).pipe((0,u.R)(this._destroyed)).subscribe(()=>{this._handlePaginatorPress("before")}),(0,M.R)(this._nextPaginator.nativeElement,"touchstart",j).pipe((0,u.R)(this._destroyed)).subscribe(()=>{this._handlePaginatorPress("after")})}ngAfterContentInit(){const e=this._dir?this._dir.change:(0,Z.of)("ltr"),i=this._viewportRuler.change(150),a=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new y.Em(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap(),this._keyManager.updateActiveItem(this._selectedIndex),"undefined"!=typeof requestAnimationFrame?requestAnimationFrame(a):a(),(0,I.T)(e,i,this._items.changes).pipe((0,u.R)(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>Promise.resolve().then(a)),this._keyManager.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.pipe((0,u.R)(this._destroyed)).subscribe(s=>{this.indexFocused.emit(s),this._setTabFocus(s)})}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(e){if(!(0,k.Vb)(e))switch(e.keyCode){case k.K5:case k.L_:this.focusIndex!==this.selectedIndex&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(e));break;default:this._keyManager.onKeydown(e)}}_onContentChanges(){const e=this._elementRef.nativeElement.textContent;e!==this._currentTextContent&&(this._currentTextContent=e||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(e){!this._isValidIndex(e)||this.focusIndex===e||!this._keyManager||this._keyManager.setActiveItem(e)}_isValidIndex(e){if(!this._items)return!0;const i=this._items?this._items.toArray()[e]:null;return!!i&&!i.disabled}_setTabFocus(e){if(this._showPaginationControls&&this._scrollToLabel(e),this._items&&this._items.length){this._items.toArray()[e].focus();const i=this._tabListContainer.nativeElement;i.scrollLeft="ltr"==this._getLayoutDirection()?0:i.scrollWidth-i.offsetWidth}}_getLayoutDirection(){return this._dir&&"rtl"===this._dir.value?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;const e=this.scrollDistance,i="ltr"===this._getLayoutDirection()?-e:e;this._tabList.nativeElement.style.transform=`translateX(${Math.round(i)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(e){this._scrollTo(e)}_scrollHeader(e){return this._scrollTo(this._scrollDistance+("before"==e?-1:1)*this._tabListContainer.nativeElement.offsetWidth/3)}_handlePaginatorClick(e){this._stopInterval(),this._scrollHeader(e)}_scrollToLabel(e){if(this.disablePagination)return;const i=this._items?this._items.toArray()[e]:null;if(!i)return;const a=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:s,offsetWidth:l}=i.elementRef.nativeElement;let c,d;"ltr"==this._getLayoutDirection()?(c=s,d=c+l):(d=this._tabListInner.nativeElement.offsetWidth-s,c=d-l);const L=this.scrollDistance,Y=this.scrollDistance+a;c<L?this.scrollDistance-=L-c+60:d>Y&&(this.scrollDistance+=d-Y+60)}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{const e=this._tabListInner.nativeElement.scrollWidth>this._elementRef.nativeElement.offsetWidth;e||(this.scrollDistance=0),e!==this._showPaginationControls&&this._changeDetectorRef.markForCheck(),this._showPaginationControls=e}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=0==this.scrollDistance,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){return this._tabListInner.nativeElement.scrollWidth-this._tabListContainer.nativeElement.offsetWidth||0}_alignInkBarToSelectedTab(){const e=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,i=e?e.elementRef.nativeElement:null;i?this._inkBar.alignToElement(i):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(e,i){i&&null!=i.button&&0!==i.button||(this._stopInterval(),(0,Q.H)(650,100).pipe((0,u.R)((0,I.T)(this._stopScrolling,this._destroyed))).subscribe(()=>{const{maxScrollDistance:a,distance:s}=this._scrollHeader(e);(0===s||s>=a)&&this._stopInterval()}))}_scrollTo(e){if(this.disablePagination)return{maxScrollDistance:0,distance:0};const i=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(i,e)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:i,distance:this._scrollDistance}}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.SBq),t.Y36(t.sBO),t.Y36(C.rL),t.Y36(g.Is,8),t.Y36(t.R0b),t.Y36(x.t4),t.Y36(p.Qb,8))},n.\u0275dir=t.lG2({type:n,inputs:{disablePagination:"disablePagination"}}),n})(),xt=(()=>{class n extends Tt{constructor(e,i,a,s,l,c,d){super(e,i,a,s,l,c,d),this._disableRipple=!1}get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=(0,v.Ig)(e)}_itemSelected(e){e.preventDefault()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.SBq),t.Y36(t.sBO),t.Y36(C.rL),t.Y36(g.Is,8),t.Y36(t.R0b),t.Y36(x.t4),t.Y36(p.Qb,8))},n.\u0275dir=t.lG2({type:n,inputs:{disableRipple:"disableRipple"},features:[t.qOj]}),n})(),yt=(()=>{class n extends xt{constructor(e,i,a,s,l,c,d){super(e,i,a,s,l,c,d)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.SBq),t.Y36(t.sBO),t.Y36(C.rL),t.Y36(g.Is,8),t.Y36(t.R0b),t.Y36(x.t4),t.Y36(p.Qb,8))},n.\u0275cmp=t.Xpm({type:n,selectors:[["mat-tab-header"]],contentQueries:function(e,i,a){if(1&e&&t.Suo(a,F,4),2&e){let s;t.iGM(s=t.CRH())&&(i._items=s)}},viewQuery:function(e,i){if(1&e&&(t.Gf(A,7),t.Gf(V,7),t.Gf(U,7),t.Gf(K,7),t.Gf(X,5),t.Gf(tt,5)),2&e){let a;t.iGM(a=t.CRH())&&(i._inkBar=a.first),t.iGM(a=t.CRH())&&(i._tabListContainer=a.first),t.iGM(a=t.CRH())&&(i._tabList=a.first),t.iGM(a=t.CRH())&&(i._tabListInner=a.first),t.iGM(a=t.CRH())&&(i._nextPaginator=a.first),t.iGM(a=t.CRH())&&(i._previousPaginator=a.first)}},hostAttrs:[1,"mat-tab-header"],hostVars:4,hostBindings:function(e,i){2&e&&t.ekj("mat-tab-header-pagination-controls-enabled",i._showPaginationControls)("mat-tab-header-rtl","rtl"==i._getLayoutDirection())},inputs:{selectedIndex:"selectedIndex"},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"},features:[t.qOj],ngContentSelectors:P,decls:14,vars:8,consts:[["aria-hidden","true","mat-ripple","",1,"mat-tab-header-pagination","mat-tab-header-pagination-before","mat-elevation-z4",3,"matRippleDisabled","click","mousedown","touchend"],["previousPaginator",""],[1,"mat-tab-header-pagination-chevron"],[1,"mat-tab-label-container",3,"keydown"],["tabListContainer",""],["role","tablist",1,"mat-tab-list",3,"cdkObserveContent"],["tabList",""],[1,"mat-tab-labels"],["tabListInner",""],["aria-hidden","true","mat-ripple","",1,"mat-tab-header-pagination","mat-tab-header-pagination-after","mat-elevation-z4",3,"matRippleDisabled","mousedown","click","touchend"],["nextPaginator",""]],template:function(e,i){1&e&&(t.F$t(),t.TgZ(0,"div",0,1),t.NdJ("click",function(){return i._handlePaginatorClick("before")})("mousedown",function(s){return i._handlePaginatorPress("before",s)})("touchend",function(){return i._stopInterval()}),t._UZ(2,"div",2),t.qZA(),t.TgZ(3,"div",3,4),t.NdJ("keydown",function(s){return i._handleKeydown(s)}),t.TgZ(5,"div",5,6),t.NdJ("cdkObserveContent",function(){return i._onContentChanges()}),t.TgZ(7,"div",7,8),t.Hsn(9),t.qZA(),t._UZ(10,"mat-ink-bar"),t.qZA(),t.qZA(),t.TgZ(11,"div",9,10),t.NdJ("mousedown",function(s){return i._handlePaginatorPress("after",s)})("click",function(){return i._handlePaginatorClick("after")})("touchend",function(){return i._stopInterval()}),t._UZ(13,"div",2),t.qZA()),2&e&&(t.ekj("mat-tab-header-pagination-disabled",i._disableScrollBefore),t.Q6J("matRippleDisabled",i._disableScrollBefore||i.disableRipple),t.xp6(5),t.ekj("_mat-animation-noopable","NoopAnimations"===i._animationMode),t.xp6(6),t.ekj("mat-tab-header-pagination-disabled",i._disableScrollAfter),t.Q6J("matRippleDisabled",i._disableScrollAfter||i.disableRipple))},directives:[h.wG,B.wD,A],styles:['.mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:"";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-labels{display:flex}[mat-align-tabs=center]>.mat-tab-header .mat-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-tab-header .mat-tab-labels{justify-content:flex-end}.mat-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}._mat-animation-noopable.mat-tab-list{transition:none;animation:none}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{min-width:72px}}\n'],encapsulation:2}),n})(),Mt=0;class It{}const Ct=(0,h.pj)((0,h.Kr)(class{constructor(n){this._elementRef=n}}),"primary");let kt=(()=>{class n extends Ct{constructor(e,i,a,s){var l;super(e),this._changeDetectorRef=i,this._animationMode=s,this._tabs=new t.n_E,this._indexToSelect=0,this._tabBodyWrapperHeight=0,this._tabsSubscription=f.w0.EMPTY,this._tabLabelSubscription=f.w0.EMPTY,this._selectedIndex=null,this.headerPosition="above",this.selectedIndexChange=new t.vpe,this.focusChange=new t.vpe,this.animationDone=new t.vpe,this.selectedTabChange=new t.vpe(!0),this._groupId=Mt++,this.animationDuration=a&&a.animationDuration?a.animationDuration:"500ms",this.disablePagination=!(!a||null==a.disablePagination)&&a.disablePagination,this.dynamicHeight=!(!a||null==a.dynamicHeight)&&a.dynamicHeight,this.contentTabIndex=null!=(l=null==a?void 0:a.contentTabIndex)?l:null}get dynamicHeight(){return this._dynamicHeight}set dynamicHeight(e){this._dynamicHeight=(0,v.Ig)(e)}get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._indexToSelect=(0,v.su)(e,null)}get animationDuration(){return this._animationDuration}set animationDuration(e){this._animationDuration=/^\d+$/.test(e)?e+"ms":e}get contentTabIndex(){return this._contentTabIndex}set contentTabIndex(e){this._contentTabIndex=(0,v.su)(e,null)}get backgroundColor(){return this._backgroundColor}set backgroundColor(e){const i=this._elementRef.nativeElement;i.classList.remove(`mat-background-${this.backgroundColor}`),e&&i.classList.add(`mat-background-${e}`),this._backgroundColor=e}ngAfterContentChecked(){const e=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=e){const i=null==this._selectedIndex;if(!i){this.selectedTabChange.emit(this._createChangeEvent(e));const a=this._tabBodyWrapper.nativeElement;a.style.minHeight=a.clientHeight+"px"}Promise.resolve().then(()=>{this._tabs.forEach((a,s)=>a.isActive=s===e),i||(this.selectedIndexChange.emit(e),this._tabBodyWrapper.nativeElement.style.minHeight="")})}this._tabs.forEach((i,a)=>{i.position=a-e,null!=this._selectedIndex&&0==i.position&&!i.origin&&(i.origin=e-this._selectedIndex)}),this._selectedIndex!==e&&(this._selectedIndex=e,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{if(this._clampTabIndex(this._indexToSelect)===this._selectedIndex){const i=this._tabs.toArray();for(let a=0;a<i.length;a++)if(i[a].isActive){this._indexToSelect=this._selectedIndex=a;break}}this._changeDetectorRef.markForCheck()})}_subscribeToAllTabChanges(){this._allTabs.changes.pipe((0,D.O)(this._allTabs)).subscribe(e=>{this._tabs.reset(e.filter(i=>i._closestTabGroup===this||!i._closestTabGroup)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}focusTab(e){const i=this._tabHeader;i&&(i.focusIndex=e)}_focusChanged(e){this.focusChange.emit(this._createChangeEvent(e))}_createChangeEvent(e){const i=new It;return i.index=e,this._tabs&&this._tabs.length&&(i.tab=this._tabs.toArray()[e]),i}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=(0,I.T)(...this._tabs.map(e=>e._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(e){return Math.min(this._tabs.length-1,Math.max(e||0,0))}_getTabLabelId(e){return`mat-tab-label-${this._groupId}-${e}`}_getTabContentId(e){return`mat-tab-content-${this._groupId}-${e}`}_setTabBodyWrapperHeight(e){if(!this._dynamicHeight||!this._tabBodyWrapperHeight)return;const i=this._tabBodyWrapper.nativeElement;i.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(i.style.height=e+"px")}_removeTabBodyWrapperHeight(){const e=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=e.clientHeight,e.style.height="",this.animationDone.emit()}_handleClick(e,i,a){e.disabled||(this.selectedIndex=i.focusIndex=a)}_getTabIndex(e,i){return e.disabled?null:this.selectedIndex===i?0:-1}_tabFocusChanged(e,i){e&&"mouse"!==e&&"touch"!==e&&(this._tabHeader.focusIndex=i)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.SBq),t.Y36(t.sBO),t.Y36(N,8),t.Y36(p.Qb,8))},n.\u0275dir=t.lG2({type:n,inputs:{dynamicHeight:"dynamicHeight",selectedIndex:"selectedIndex",headerPosition:"headerPosition",animationDuration:"animationDuration",contentTabIndex:"contentTabIndex",disablePagination:"disablePagination",backgroundColor:"backgroundColor"},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},features:[t.qOj]}),n})(),Lt=(()=>{class n extends kt{constructor(e,i,a,s){super(e,i,a,s)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.SBq),t.Y36(t.sBO),t.Y36(N,8),t.Y36(p.Qb,8))},n.\u0275cmp=t.Xpm({type:n,selectors:[["mat-tab-group"]],contentQueries:function(e,i,a){if(1&e&&t.Suo(a,E,5),2&e){let s;t.iGM(s=t.CRH())&&(i._allTabs=s)}},viewQuery:function(e,i){if(1&e&&(t.Gf(et,5),t.Gf(it,5)),2&e){let a;t.iGM(a=t.CRH())&&(i._tabBodyWrapper=a.first),t.iGM(a=t.CRH())&&(i._tabHeader=a.first)}},hostAttrs:[1,"mat-tab-group"],hostVars:4,hostBindings:function(e,i){2&e&&t.ekj("mat-tab-group-dynamic-height",i.dynamicHeight)("mat-tab-group-inverted-header","below"===i.headerPosition)},inputs:{color:"color",disableRipple:"disableRipple"},exportAs:["matTabGroup"],features:[t._Bn([{provide:O,useExisting:n}]),t.qOj],decls:6,vars:7,consts:[[3,"selectedIndex","disableRipple","disablePagination","indexFocused","selectFocusedIndex"],["tabHeader",""],["class","mat-tab-label mat-focus-indicator","role","tab","matTabLabelWrapper","","mat-ripple","","cdkMonitorElementFocus","",3,"id","mat-tab-label-active","disabled","matRippleDisabled","click","cdkFocusChange",4,"ngFor","ngForOf"],[1,"mat-tab-body-wrapper"],["tabBodyWrapper",""],["role","tabpanel",3,"id","mat-tab-body-active","content","position","origin","animationDuration","_onCentered","_onCentering",4,"ngFor","ngForOf"],["role","tab","matTabLabelWrapper","","mat-ripple","","cdkMonitorElementFocus","",1,"mat-tab-label","mat-focus-indicator",3,"id","disabled","matRippleDisabled","click","cdkFocusChange"],[1,"mat-tab-label-content"],[3,"ngIf"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"id","content","position","origin","animationDuration","_onCentered","_onCentering"]],template:function(e,i){1&e&&(t.TgZ(0,"mat-tab-header",0,1),t.NdJ("indexFocused",function(s){return i._focusChanged(s)})("selectFocusedIndex",function(s){return i.selectedIndex=s}),t.YNc(2,st,4,14,"div",2),t.qZA(),t.TgZ(3,"div",3,4),t.YNc(5,rt,1,9,"mat-tab-body",5),t.qZA()),2&e&&(t.Q6J("selectedIndex",i.selectedIndex||0)("disableRipple",i.disableRipple)("disablePagination",i.disablePagination),t.xp6(2),t.Q6J("ngForOf",i._tabs),t.xp6(1),t.ekj("_mat-animation-noopable","NoopAnimations"===i._animationMode),t.xp6(2),t.Q6J("ngForOf",i._tabs))},directives:[yt,_.sg,F,h.wG,y.kH,_.O5,m.Pl,H],styles:[".mat-tab-group{display:flex;flex-direction:column;max-width:100%}.mat-tab-group.mat-tab-group-inverted-header{flex-direction:column-reverse}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{padding:0 12px}}@media(max-width: 959px){.mat-tab-label{padding:0 12px}}.mat-tab-group[mat-stretch-tabs]>.mat-tab-header .mat-tab-label{flex-basis:0;flex-grow:1}.mat-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-tab-body-wrapper{transition:none;animation:none}.mat-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;outline:0;flex-basis:100%}.mat-tab-body.mat-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-tab-group.mat-tab-group-dynamic-height .mat-tab-body.mat-tab-body-active{overflow-y:hidden}\n"],encapsulation:2}),n})(),Rt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[_.ez,h.BQ,m.eL,h.si,B.Q8,y.rt],h.BQ]}),n})();function wt(n,o){1&n&&(t.TgZ(0,"p"),t._uU(1,"Orders here"),t.qZA(),t.TgZ(2,"div",4),t._uU(3,"This Display 2"),t.qZA())}function Bt(n,o){1&n&&(t.TgZ(0,"p"),t._uU(1,"Shipments here"),t.qZA())}function Dt(n,o){1&n&&(t.TgZ(0,"p"),t._uU(1,"Archived items here"),t.qZA())}const Pt=[{path:"",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-order-list"]],decls:7,vars:0,consts:[["label","Orders"],["matTabContent",""],["label","Shipments"],["label","Archived"],[1,"mat-display-2"]],template:function(e,i){1&e&&(t.TgZ(0,"mat-tab-group"),t.TgZ(1,"mat-tab",0),t.YNc(2,wt,4,0,"ng-template",1),t.qZA(),t.TgZ(3,"mat-tab",2),t.YNc(4,Bt,2,0,"ng-template",1),t.qZA(),t.TgZ(5,"mat-tab",3),t.YNc(6,Dt,2,0,"ng-template",1),t.qZA(),t.qZA())},directives:[Lt,E,dt],styles:[""]}),n})()}];let At=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[w.Bz.forChild(Pt)],w.Bz]}),n})(),St=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[_.ez,At,Rt]]}),n})()}}]);