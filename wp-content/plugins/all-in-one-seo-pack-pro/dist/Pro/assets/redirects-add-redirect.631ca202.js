import{n as d,V as a}from"./js/vueComponentNormalizer.58b0a173.js";import"./js/index.2a1615d5.js";import{l as c,n as i,s as l}from"./js/index.d229874d.js";import{C as p,a as u}from"./js/Index.ebdaa5e0.js";import{i as m}from"./js/isEmpty.e3b1708a.js";import"./js/client.b661b356.js";import"./js/_commonjsHelpers.10c44588.js";import"./js/translations.3bc9d58c.js";import"./js/default-i18n.0e73c33c.js";import"./js/constants.b5b5d9a1.js";import"./js/isArrayLikeObject.44af21ce.js";import"./js/portal-vue.esm.272b3133.js";import"./js/WpTable.d951bd0b.js";import"./js/attachments.5c790671.js";import"./js/cleanForSlug.554cc757.js";import"./js/JsonValues.08065e69.js";import"./js/ProBadge.6745e7cb.js";import"./js/External.051baee5.js";import"./js/Exclamation.77933285.js";import"./js/Checkbox.732cf0d4.js";import"./js/Checkmark.c0183939.js";import"./js/Row.89c6bb85.js";import"./js/Gear.b5f13261.js";import"./js/Slide.01023b2f.js";import"./js/Tooltip.a36a3967.js";import"./js/Plus.d9c7f9ce.js";import"./js/_getTag.3036b7b0.js";var h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.$addons.isActive("aioseo-redirects")?r("div",{staticClass:"aioseo-redirects-add-redirect-standalone"},[t.display?r("core-modal-portal",{attrs:{classes:["aioseo-redirects","modal"]},on:{close:function(s){t.display=!1}}},[r("div",{attrs:{slot:"headerTitle"},slot:"headerTitle"},[t._v(" "+t._s(t.strings.modalHeader)+" ")]),r("div",{attrs:{slot:"body"},slot:"body"},[t.loading?t._e():r("core-add-redirection",{attrs:{urls:t.urls,target:t.urls[0].target?t.urls[0].target:"/",disableSource:!0},on:{"added-redirect":t.reload}})],1)]):t._e()],1):t._e()},_=[];const f={components:{CoreModalPortal:p,CoreAddRedirection:u},data(){return{urls:[],display:!1,target:null,loading:!1,strings:{modalHeader:this.$t.__("Add a Redirect",this.$td),redirectAdded:this.$t.sprintf(this.$t.__('%2$sYour redirect was added and you may edit it <a href="%1$s" target="_blank">here</a>.%3$s',this.$td),this.$aioseo.urls.aio.redirects,"<strong>","</strong>")},watchClasses:["aioseo-redirects-slug-changed","aioseo-redirects-trashed-post"]}},computed:{classSelectors(){return"."+this.watchClasses.join(", .")}},methods:{reload(){var e,r;this.display=!1;const t=(r=(e=this.target)==null?void 0:e.parentElement)==null?void 0:r.parentElement;if(t&&(t.classList.contains("components-notice__content")||t.classList.contains("notice"))){t.innerHTML="<p>"+this.strings.redirectAdded+"</p>";return}this.target.outerHTML=this.strings.redirectAdded},loadRedirect(t){this.loading=!0,this.$http.get(this.$links.restUrl("redirects/manual-redirects/"+t)).then(e=>{this.urls=e.body.redirects,this.loading=!1}).catch(e=>console.log("Redirect modal failed to load the redirect data.",e))},preloadRedirect(){const t=document.querySelector(this.classSelectors);if(t){const e=this.getElementRedirectHash(t);if(!e)return;this.loadRedirect(e)}},watchClicks(){document.body.onclick=t=>{var r;if(!((r=t.target)!=null&&r.classList))return;let e=!1;this.watchClasses.forEach(s=>{t.target.classList.contains(s)&&(e=!0)}),e&&(t.preventDefault(),this.target=t.target,this.display=!0,m(this.url)&&this.loadRedirect(this.getElementRedirectHash(this.target)))}},getElementRedirectHash(t){return new URLSearchParams(t.href).get("aioseo-manual-urls")}},async created(){const{addons:t,redirects:e}=await c(this.$http);this.$set(this.$store.state,"addons",i([...this.$store.state.addons],[...t])),this.$set(this.$store.state,"redirects",i({...this.$store.state.redirects},{...e})),this.preloadRedirect(),this.watchClicks(),this.$bus.$on("wp-core-notice-created",()=>{this.preloadRedirect()})}},o={};var g=d(f,h,_,!1,y,null,null,null);function y(t){for(let e in o)this[e]=o[e]}const $=function(){return g.exports}(),n=document.createElement("div");n.id="aioseo-redirects-add-redirect-standalone";document.body.appendChild(n);a.prototype.$aioseo=window.aioseo;new a({store:l,render:t=>t($)}).$mount("#aioseo-redirects-add-redirect-standalone");