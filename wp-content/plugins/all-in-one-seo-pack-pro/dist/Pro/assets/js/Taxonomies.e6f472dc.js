var u=Object.defineProperty,m=Object.defineProperties;var _=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var i=(t,e,o)=>e in t?u(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,s=(t,e)=>{for(var o in e||(e={}))d.call(e,o)&&i(t,o,e[o]);if(r)for(var o of r(e))h.call(e,o)&&i(t,o,e[o]);return t},a=(t,e)=>m(t,_(e));import{b as f,a as g,d as b}from"./index.9b64eb46.js";import{A as v,T as $}from"./TitleDescription.f87fad13.js";import{C as T}from"./Card.377c3939.js";import{C as x}from"./Tabs.255bc9e3.js";import{n as y}from"./vueComponentNormalizer.87056a83.js";import"./default-i18n.abde8d59.js";import"./isArrayLikeObject.86537e3d.js";import"./ToolsSettings.78d1d300.js";import"./helpers.a60eef6a.js";import"./index.7c8bddbb.js";import"./client.94d919c5.js";import"./_commonjsHelpers.f40d732e.js";import"./constants.81bd140d.js";import"./cleanForSlug.5d2420e9.js";import"./Modal.09e9b873.js";import"./JsonValues.08065e69.js";import"./MaxCounts.5a7ca2fd.js";import"./RadioToggle.98e1e7ec.js";import"./RobotsMeta.e1063949.js";import"./Checkbox.5873a8d2.js";import"./Checkmark.e7547654.js";import"./Row.13b6f3f1.js";import"./SettingsRow.eb71f07b.js";import"./GoogleSearchPreview.e1396b39.js";import"./HtmlTagsEditor.268eecf4.js";import"./Editor.9c8b8c31.js";import"./UnfilteredHtml.a634227d.js";import"./Index.e2bd87fe.js";import"./Tooltip.3ec20ff5.js";import"./QuestionMark.83ebd18e.js";import"./Slide.f5d21606.js";import"./TruSeoScore.98a47fd6.js";import"./Information.f4b75b56.js";var A=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"aioseo-search-appearance-taxonomies"},t._l(t.taxonomies,function(n,p){return o("core-card",{key:p,attrs:{slug:n.name+"SA"},scopedSlots:t._u([{key:"header",fn:function(){return[o("div",{staticClass:"icon dashicons",class:""+(n.icon||"dashicons-admin-post")}),o("div",[t._v(" "+t._s(n.label)+" ")])]},proxy:!0},{key:"tabs",fn:function(){return[o("core-main-tabs",{attrs:{tabs:t.tabs,showSaveButton:!1,active:t.settings.internalTabs[n.name+"SA"],internal:""},on:{changed:function(l){return t.processChangeTab(n.name,l)}}})]},proxy:!0}],null,!0)},[o("transition",{attrs:{name:"route-fade",mode:"out-in"}},[o(t.settings.internalTabs[n.name+"SA"],{tag:"component",attrs:{object:n,separator:t.options.searchAppearance.global.separator,options:t.dynamicOptions.searchAppearance.taxonomies[n.name],type:"taxonomies","show-bulk":!1}})],1)],1)}),1)},C=[];const S={components:{Advanced:v,CoreCard:T,CoreMainTabs:x,TitleDescription:$},data(){return{internalDebounce:null,strings:{ctaButtonText:this.$t.__("Upgrade to Pro and Unlock Custom Taxonomies",this.$td),ctaDescription:this.$t.sprintf(this.$t.__("%1$s %2$s lets you set the SEO title and description for custom taxonomies. You can also control all of the robots meta and other options just like the default category and tags taxonomies.",this.$td),"AIOSEO","Pro"),ctaHeader:this.$t.sprintf(this.$t.__("Custom Taxonomy Support is only available for licensed %1$s %2$s users.",this.$td),"AIOSEO","Pro")},tabs:[{slug:"title-description",name:this.$t.__("Title & Description",this.$td),access:"aioseo_search_appearance_settings",pro:!1},{slug:"advanced",name:this.$t.__("Advanced",this.$tdPro),access:"aioseo_search_appearance_settings",pro:!1}]}},computed:a(s(s({},f(["isUnlicensed"])),g(["options","dynamicOptions","settings"])),{taxonomies(){return this.$aioseo.postData.taxonomies}}),methods:a(s({},b(["changeTab"])),{processChangeTab(t,e){this.internalDebounce||(this.internalDebounce=!0,this.changeTab({slug:`${t}SA`,value:e}),setTimeout(()=>{this.internalDebounce=!1},50))}})},c={};var D=y(S,A,C,!1,O,null,null,null);function O(t){for(let e in c)this[e]=c[e]}var pt=function(){return D.exports}();export{pt as default};
