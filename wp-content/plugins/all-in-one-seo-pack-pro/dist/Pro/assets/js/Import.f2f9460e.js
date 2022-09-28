import{W as l}from"./ToolsSettings.d7505a2f.js";import{c,d as u}from"./index.670b7e80.js";import"./helpers.1eef9d6b.js";import{n as d}from"./vueComponentNormalizer.a77505d6.js";import{B as p}from"./HighlightToggle.5490cfe5.js";import{G as m,a as _}from"./Row.62bf82fb.js";import{W as g,a as h,b as v}from"./Header.d439282e.js";import{W as f,a as y}from"./Steps.8aa45b6f.js";import"./index.1a8da5ff.js";import"./client.f3edd6a0.js";import"./_commonjsHelpers.10c44588.js";import"./constants.5371d109.js";import"./isArrayLikeObject.44af21ce.js";import"./default-i18n.11a38481.js";import"./Modal.354eb07f.js";import"./cleanForSlug.ba4852e5.js";import"./Checkbox.36e2c6ae.js";import"./Checkmark.dc905798.js";import"./Radio.dd623ba3.js";import"./Logo.090d837b.js";const i=""+window.__aioseoDynamicImportPreload__("images/yoast-logo-small.d61ba0ec.png"),w=""+window.__aioseoDynamicImportPreload__("images/rank-math-seo-logo-small.ca2c09ed.png"),I=""+window.__aioseoDynamicImportPreload__("svg/seopress-free-logo-small.ac91e892.svg"),k=""+window.__aioseoDynamicImportPreload__("svg/seopress-pro-logo-small.6e7e5cab.svg");var x=function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{staticClass:"aioseo-wizard-import"},[s("wizard-header"),s("wizard-container",[s("wizard-body",{scopedSlots:t._u([{key:"footer",fn:function(){return[s("div",{staticClass:"go-back"},[s("router-link",{staticClass:"no-underline",attrs:{to:t.getPrevLink}},[t._v("\u2190")]),t._v(" \xA0 "),s("router-link",{attrs:{to:t.getPrevLink}},[t._v(t._s(t.strings.goBack))])],1),s("div",{staticClass:"spacer"}),s("base-button",{attrs:{type:"gray"},on:{click:t.skipStep}},[t._v(t._s(t.strings.skipThisStep))]),s("base-button",{attrs:{type:"blue",loading:t.loading},on:{click:t.saveAndContinue}},[t._v(t._s(t.strings.importDataAndContinue)+" \u2192")])]},proxy:!0}])},[s("wizard-steps"),s("div",{staticClass:"header"},[t._v(" "+t._s(t.strings.importData)+" ")]),s("div",{staticClass:"description"},[t._v(t._s(t.strings.weHaveDetected))]),s("div",{staticClass:"plugins"},[s("grid-row",t._l(t.getPlugins,function(e,a){return s("grid-column",{key:a,attrs:{md:"6"}},[s("base-highlight-toggle",{attrs:{type:"checkbox",round:"",active:t.isActive(e),name:e.name,value:t.getValue(e)},on:{input:function(n){return t.updateValue(n,e)}}},[t.pluginImages[e.slug]?s("img",{staticClass:"icon",class:e.slug,attrs:{alt:e.name+" Plugin Icon",src:t.pluginImages[e.slug]}}):t._e(),t.pluginImages[e.slug]?t._e():s("span",{staticClass:"icon dashicons dashicons-admin-plugins"}),t._v(" "+t._s(e.name)+" ")])],1)}),1)],1)],1),s("wizard-close-and-exit")],1)],1)},z=[];const C={components:{BaseHighlightToggle:p,GridColumn:m,GridRow:_,WizardBody:g,WizardCloseAndExit:f,WizardContainer:h,WizardHeader:v,WizardSteps:y},mixins:[l],data(){return{loading:!1,stage:"import",strings:{importData:this.$t.__("Import data from your current plugins",this.$td),weHaveDetected:this.$t.sprintf(this.$t.__("We have detected other SEO plugins installed on your website. Select which plugins you would like to import data to %1$s.",this.$td),"AIOSEO"),importDataAndContinue:this.$t.__("Import Data and Continue",this.$td)},pluginImages:{"yoast-seo":this.$getAssetUrl(i),"yoast-seo-premium":this.$getAssetUrl(i),"rank-math-seo":this.$getAssetUrl(w),seopress:this.$getAssetUrl(I),"seopress-pro":this.$getAssetUrl(k)},selected:[]}},watch:{selected(t){this.updateImporters(t.map(o=>o.slug))}},computed:{getPlugins(){return this.$aioseo.importers.filter(t=>t.canImport)}},methods:{...c("wizard",["updateImporters"]),...u("wizard",["saveWizard"]),updateValue(t,o){if(t){this.selected.push(o);return}const s=this.selected.findIndex(e=>e.value===o.value);s!==-1&&this.$delete(this.selected,s)},getValue(t){return this.selected.includes(t)},isActive(t){return this.selected.findIndex(s=>s.slug===t.slug)!==-1},saveAndContinue(){this.loading=!0,this.saveWizard("importers").then(()=>{this.$router.push(this.getNextLink)})},skipStep(){this.saveWizard(),this.$router.push(this.getNextLink)}}},r={};var $=d(C,x,z,!1,A,null,null,null);function A(t){for(let o in r)this[o]=r[o]}const J=function(){return $.exports}();export{J as default};
