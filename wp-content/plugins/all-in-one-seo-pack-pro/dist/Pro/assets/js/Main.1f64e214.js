import s from"./AdditionalInformation.68edeeb4.js";import p from"./Category.97cb8497.js";import a from"./Features.df348e90.js";import c from"./Import.f2f9460e.js";import l from"./LicenseKey.a412e98c.js";import u from"./SearchAppearance.4c303342.js";import d from"./SmartRecommendations.a8b32e8d.js";import f from"./Success.35aac396.js";import _ from"./Welcome.4135bbfe.js";import{b as e,a as i,c as h}from"./index.670b7e80.js";import{n as S}from"./vueComponentNormalizer.a77505d6.js";import"./ToolsSettings.d7505a2f.js";import"./index.1a8da5ff.js";import"./client.f3edd6a0.js";import"./_commonjsHelpers.10c44588.js";import"./constants.5371d109.js";import"./isArrayLikeObject.44af21ce.js";import"./default-i18n.11a38481.js";import"./helpers.1eef9d6b.js";import"./cleanForSlug.ba4852e5.js";import"./Modal.354eb07f.js";import"./Image.91bc75ec.js";import"./MaxCounts.5a7ca2fd.js";import"./Img.3a6f45fe.js";import"./Phone.6dba59d3.js";import"./RadioToggle.d526cad8.js";import"./SocialProfiles.6c990fcb.js";import"./Checkbox.36e2c6ae.js";import"./Checkmark.dc905798.js";import"./Textarea.4dba45e5.js";import"./Index.66ae07a9.js";import"./SettingsRow.038ea1b7.js";import"./Row.62bf82fb.js";import"./Plus.63317bcc.js";import"./Header.d439282e.js";import"./Logo.090d837b.js";import"./Steps.8aa45b6f.js";import"./HighlightToggle.5490cfe5.js";import"./Radio.dd623ba3.js";import"./HtmlTagsEditor.c451ceda.js";import"./Editor.6ef78eaa.js";import"./UnfilteredHtml.5ee79ad8.js";import"./ImageSeo.bc375beb.js";import"./NewsChannel.5e915de0.js";import"./Pencil.77e25de2.js";import"./ProBadge.6e635c05.js";import"./popup.25df8419.js";import"./params.bea1a08d.js";import"./GoogleSearchPreview.99dae0c0.js";import"./PostTypeOptions.3642e403.js";import"./Tooltip.bd71695e.js";import"./QuestionMark.ba3fc27e.js";import"./Book.bf7e46e6.js";import"./VideoCamera.587e76a4.js";var g=function(){var t=this,o=t.$createElement,r=t._self._c||o;return r(t.$route.name,{tag:"component"})},y=[];const v={components:{AdditionalInformation:s,Category:p,Features:a,Import:c,LicenseKey:l,SearchAppearance:u,SmartRecommendations:d,Success:f,Welcome:_},computed:{...e("wizard",["shouldShowImportStep"]),...e(["isUnlicensed"]),...i("wizard",["stages"]),...i(["internalOptions"])},methods:{...h("wizard",["setStages","loadState"]),deleteStage(t){const o=[...this.stages],r=o.findIndex(m=>t===m);r!==-1&&this.$delete(o,r),this.setStages(o)}},mounted(){if(this.internalOptions.internal.wizard){const t=JSON.parse(this.internalOptions.internal.wizard);delete t.currentStage,delete t.stages,delete t.licenseKey,this.loadState(t)}this.shouldShowImportStep||this.deleteStage("import"),this.isUnlicensed||this.deleteStage("license-key"),this.$isPro&&this.deleteStage("smart-recommendations")}},n={};var w=S(v,g,y,!1,x,null,null,null);function x(t){for(let o in n)this[o]=n[o]}const zt=function(){return w.exports}();export{zt as default};
