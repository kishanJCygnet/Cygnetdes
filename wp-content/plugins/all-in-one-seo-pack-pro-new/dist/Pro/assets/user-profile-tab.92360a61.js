import{n,V as l}from"./js/vueComponentNormalizer.58b0a173.js";import"./js/index.2a1615d5.js";import{a as c,q as u,n as r,s as p}from"./js/index.d229874d.js";import{C as d}from"./js/Card.18919467.js";import{C as m}from"./js/SocialProfiles.f47b86cf.js";import{S as f}from"./js/LogoGear.99a79064.js";import{e as h}from"./js/elemLoaded.b1f6e29c.js";import"./js/client.b661b356.js";import"./js/_commonjsHelpers.10c44588.js";import"./js/translations.3bc9d58c.js";import"./js/default-i18n.0e73c33c.js";import"./js/constants.b5b5d9a1.js";import"./js/isArrayLikeObject.44af21ce.js";import"./js/portal-vue.esm.272b3133.js";import"./js/Tooltip.a36a3967.js";import"./js/Slide.01023b2f.js";import"./js/Checkbox.732cf0d4.js";import"./js/Checkmark.c0183939.js";import"./js/Textarea.92b32df4.js";import"./js/SettingsRow.0d51ff21.js";import"./js/Row.89c6bb85.js";var _=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{attrs:{id:"aioseo-user-profile-tab"}},[t("div",{staticClass:"navigation-bar"},e._l(e.tabs,function(o,i){return t("a",{key:i,class:{active:i===e.activeTabIndex},attrs:{href:"#"},on:{click:function(w){return e.setActiveTab(i)}}},[o.svg?t(o.svg,{tag:"component"}):e._e(),e._v(" "+e._s(o.label)+" ")],1)}),0),e.activeTabObject.slug==="social-profiles"?t("CoreCard",{attrs:{slug:"userProfiles","header-text":e.strings.socialProfiles,"no-slide":"",toggles:!1}},[t("div",{staticClass:"aioseo-settings-row aioseo-section-description"},[e._v(" "+e._s(e.strings.description)+" ")]),t("CoreSocialProfiles",{attrs:{userProfiles:e.userProfile.profiles},on:{updated:function(o){return e.updateHiddenInputField(o)}}})],1):e._e()],1)},g=[];const v={components:{CoreCard:d,CoreSocialProfiles:m,SvgLogoGear:f},data(){return{activeTabIndex:0,strings:{socialProfiles:this.$t.__("Social Profiles",this.$td),description:this.$t.__("To let search engines know which profiles are associated with this user, enter them below:",this.$td)}}},methods:{setActiveTab(e){const s=this.activeTabIndex;switch(this.activeTabIndex=e,this.activeTabObject.slug){case"personal-options":document.getElementById("your-profile").childNodes.forEach(t=>{t.style&&(t.style.display="block")});break;case"social-profiles":document.getElementById("your-profile").childNodes.forEach(t=>{t.id==="aioseo-user-profile-tab"||t.className==="submit"||!t.style||(t.style.display="none")});break;case"customer-data":this.activeTabIndex=s,window.location.href=this.$aioseo.urls.home+"/wp-admin/admin.php?page=followup-emails-reports&tab=reportuser_view&email="+encodeURIComponent(this.userProfile.userData.user_email)+"&user_id="+this.userProfile.userData.ID;break}},updateHiddenInputField(e){document.getElementById("aioseo-user-social-profiles").value=JSON.stringify(e)}},computed:{...c(["userProfile","options"]),tabs(){const e=[{label:this.$t.__("Personal Options",this.$td),slug:"personal-options"},{label:this.$t.__("Social Profiles",this.$td),slug:"social-profiles",svg:"svg-logo-gear"}];return this.userProfile.isWooCommerceFollowupEmailsActive&&e.push({label:this.$t.__("Customer Data",this.$td),slug:"customer-data"}),e},activeTabObject(){return this.tabs[this.activeTabIndex]}},created(){this.$store.state.loaded||u({}),this.$set(this.$store.state,"userProfile",r({...this.$store.state.userProfile},{...this.$aioseo.userProfile})),this.$set(this.$store.state,"options",r({...this.$store.state.options},{...this.$aioseo.options})),this.$set(this.$store.state,"settings",r({...this.$store.state.settings},{...this.$aioseo.settings})),this.updateHiddenInputField(this.userProfile.profiles)},mounted(){const e=new URLSearchParams(window.location.search);e&&e.get("social-profiles")&&this.setActiveTab(1)}},a={};var b=n(v,_,g,!1,y,null,null,null);function y(e){for(let s in a)this[s]=a[s]}const $=function(){return b.exports}(),P=()=>{const e=document.getElementById("your-profile");if(!e)return;const s=document.createElement("div");s.id="aioseo-user-profile-tab";const t=document.createElement("input");t.id="aioseo-user-social-profiles",t.name="aioseo-user-social-profiles",t.type="hidden",e.prepend(t),e.prepend(s)},I=()=>{new l({store:p,render:e=>e($)}).$mount("#aioseo-user-profile-tab")};h("#your-profile","profilePageLoaded");document.addEventListener("animationstart",function(e){e.animationName==="profilePageLoaded"&&(P(),I())});
