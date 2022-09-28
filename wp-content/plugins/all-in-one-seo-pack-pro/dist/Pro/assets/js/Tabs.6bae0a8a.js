var _=Object.defineProperty,b=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var c=(t,s,e)=>s in t?_(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e,o=(t,s)=>{for(var e in s||(s={}))v.call(s,e)&&c(t,e,s[e]);if(l)for(var e of l(s))f.call(s,e)&&c(t,e,s[e]);return t},r=(t,s)=>b(t,m(s));import{S as p}from"./ToolsSettings.83ed8357.js";import{d as g,j as w}from"./index.a8d44ca5.js";import{T as y}from"./TruSeoScore.a520926e.js";import{h as M,j as C}from"./index.9b0095cc.js";import{n as h}from"./vueComponentNormalizer.87056a83.js";import{S}from"./Information.f4b75b56.js";import{T}from"./Slide.f5d21606.js";var $=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("svg",{staticClass:"aioseo-ellipse",attrs:{viewBox:"0 0 6 6",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("circle",{attrs:{r:"2",transform:"matrix(-1 0 0 1 3 3)",fill:"currentColor",stroke:"currentColor","stroke-width":"2"}})])},k=[];const x={},u={};var B=h(x,$,k,!1,E,null,null,null);function E(t){for(let s in u)this[s]=u[s]}var W=function(){return B.exports}(),A=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"aioseo-tabs",staticClass:"aioseo-tabs",class:{internal:t.internal,skinny:t.skinnyTabs}},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.showMobileMenu||t.calculateWidth,expression:"!showMobileMenu || calculateWidth"}],ref:"tabs-scroller",staticClass:"tabs-scroller"},[e("md-tabs",{attrs:{"md-sync-route":!t.active,"md-active-tab":t.active},on:{"md-changed":function(a){return t.$emit("changed",a)}},scopedSlots:t._u([{key:"md-tab",fn:function(a){var n=a.tab;return[t._t("md-tab",function(){return[t._t("md-tab-icon",null,{tab:n}),e("span",{staticClass:"label"},[t._v(t._s(n.label))]),t.$root._data.screenContext==="sidebar"&&t.getActiveTabName()!==n.label?e("md-tooltip",{attrs:{"md-direction":"top"}},[t._v(" "+t._s(n.label)+" ")]):t._e(),n.data.errorCount>=0?e("span",{staticClass:"tab-score",class:t.getErrorClass(t.currentPost.page_analysis.analysis[n.data.slug].errors)},[0<t.currentPost.page_analysis.analysis[n.data.slug].errors?e("svg-ellipse",{attrs:{width:"6"}}):t._e(),t.currentPost.page_analysis.analysis[n.data.slug].errors===0?e("svg-circle-check",{attrs:{width:"12"}}):t._e(),t._v(" "+t._s(t.getErrorDisplay(t.currentPost.page_analysis.analysis[n.data.slug].errors))+" ")],1):t._e(),n.data.warning&&t.$root._data.screenContext!=="sidebar"?e("span",{staticClass:"warning"},[e("svg-circle-information",{attrs:{width:"15",height:"15"}})],1):t._e()]},{tab:n})]}}],null,!0)},t._l(t.tabs,function(a,n){return e("md-tab",{key:n,attrs:{id:a.slug,"md-label":a.name,"md-icon":a.icon,to:a.url,"md-template-data":{pro:a.pro,analyze:a.analyze,errorCount:a.errorCount,slug:a.slug,warning:a.warning}}})}),1)],1),t.showMobileMenu?e("div",{staticClass:"aioseo-mobile-tabs"},[e("div",{staticClass:"active-tab",on:{click:function(a){t.showMobileTabs=!t.showMobileTabs}}},[e("div",[t._v(" "+t._s(t.getActiveTabName())+" "),e("svg-caret",{class:{rotated:!t.showMobileTabs},on:{click:function(a){a.stopPropagation(),t.showMobileTabs=!t.showMobileTabs}}}),e("span",{staticClass:"tab-indicator"})],1)]),e("transition-slide",{staticClass:"tab-dropdown",attrs:{active:t.showMobileTabs}},[e("div",{staticClass:"tab-links"},[t.active?t._e():t._l(t.filteredTabs,function(a,n){return e("router-link",{key:n,attrs:{to:a.url},nativeOn:{click:function(i){t.showMobileTabs=!1}}},[t._v(" "+t._s(a.name)+" ")])}),t.active?t._l(t.filteredTabs,function(a,n){return e("a",{key:n,attrs:{href:"#"},on:{click:function(i){i.preventDefault(),t.$emit("changed",a.slug)&&(t.showMobileTabs=!1)}}},[t._v(" "+t._s(a.name)+" ")])}):t._e()],2)])],1):t._e(),t.showSaveButton?e("div",{ref:"tabs-button",staticClass:"button-right"},[t._t("button",function(){return[e("base-button",{attrs:{type:"blue",size:"medium",loading:t.loading},on:{click:t.processSaveChanges}},[t._v(" "+t._s(t.strings.saveChanges)+" ")])]})],2):t._e()])},P=[];const z={components:{SvgCaret:M,SvgCircleCheck:C,SvgCircleInformation:S,SvgEllipse:W,TransitionSlide:T},mixins:[p,y],props:{tabs:{type:Array,required:!0},skinnyTabs:Boolean,active:String,showSaveButton:{type:Boolean,default(){return!0}},internal:Boolean,disableMobile:Boolean},data(){return{buttonLoading:!1,showMobileMenu:!0,calculateWidth:!1,showMobileTabs:!1,strings:{saveChanges:"Save Changes"}}},computed:r(o({},g(["loading","currentPost"])),{filteredTabs(){return this.tabs.filter(t=>t.slug!==(this.active?this.active:this.$route&&this.$route.name?this.$route.name:""))}}),methods:r(o({},w(["openModal"])),{getActiveTabName(){const t=this.tabs.find(s=>s.slug===(this.active?this.active:this.$route&&this.$route.name?this.$route.name:""));return t?t.name:""},maybeShowMobileMenu(){if(window.matchMedia("(max-width: 782px)").matches&&!this.disableMobile){this.showMobileMenu=!0;return}let t=0;this.calculateWidth=!0,this.$nextTick(()=>{t=this.$refs["tabs-scroller"].offsetWidth,this.calculateWidth=!1;let s=0;const e=this.$refs["tabs-button"];if(e){const a=e.querySelector(".aioseo-button");s=a?a.scrollWidth:0}if(t+s>this.$refs["aioseo-tabs"].offsetWidth){this.showMobileMenu=!0;return}this.showMobileMenu=!1})}}),beforeDestroy(){window.removeEventListener("resize",this.maybeShowMobileMenu)},mounted(){window.addEventListener("resize",this.maybeShowMobileMenu),this.$nextTick(()=>this.maybeShowMobileMenu())}},d={};var L=h(z,A,P,!1,j,null,null,null);function j(t){for(let s in d)this[s]=d[s]}var G=function(){return L.exports}();export{G as C,W as S};
