import{C as s}from"./Blur.4b173825.js";import{C as r}from"./SettingsRow.e87657d6.js";import{S as i}from"./External.c6f0b2ea.js";import{n as a}from"./vueComponentNormalizer.4c221f82.js";const l={data(){return{strings:{customFieldSupport:"Custom Field Support",exclude:"Exclude Pages/Posts",video:"Video Sitemap",description:"The Video Sitemap works in much the same way as the XML Sitemap module, it generates an XML Sitemap specifically for video content on your site. Search engines use this information to display rich snippet information in search results.",enableSitemap:"Enable Sitemap",openSitemap:"Open Video Sitemap",noIndexDisplayed:"Noindexed content will not be displayed in your sitemap.",doYou404:"Do you get a blank sitemap or 404 error?",ctaButtonText:"Upgrade to Pro and Unlock Video Sitemaps",ctaHeader:this.$t.sprintf("Video Sitemaps are only available for licensed %1$s %2$s users.","AIOSEO","Pro"),thisFeatureRequires:"This feature requires one of the following plans:"}}}};var u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("core-blur",[t("div",{staticClass:"aioseo-settings-row aioseo-section-description"},[e._v(" "+e._s(e.strings.description)+" "),t("span",{domProps:{innerHTML:e._s(e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"videoSitemaps",!0))}})]),t("core-settings-row",{attrs:{name:e.strings.enableSitemap},scopedSlots:e._u([{key:"content",fn:function(){return[t("base-toggle",{attrs:{value:!0}})]},proxy:!0}])}),t("core-settings-row",{attrs:{name:e.$constants.GLOBAL_STRINGS.preview},scopedSlots:e._u([{key:"content",fn:function(){return[t("div",{staticClass:"aioseo-sitemap-preview"},[t("base-button",{attrs:{size:"medium",type:"blue"}},[t("svg-external"),e._v(" "+e._s(e.strings.openSitemap)+" ")],1)],1),t("div",{staticClass:"aioseo-description"},[e._v(" "+e._s(e.strings.noIndexDisplayed)+" "),t("br"),e._v(" "+e._s(e.strings.doYou404)+" "),t("span",{domProps:{innerHTML:e._s(e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"blankSitemap",!0))}})])]},proxy:!0}])})],1)},c=[];const p={components:{CoreBlur:s,CoreSettingsRow:r,SvgExternal:i},mixins:[l]},o={};var m=a(p,u,c,!1,d,null,null,null);function d(e){for(let n in o)this[n]=o[n]}var v=function(){return m.exports}();export{v as B,l as V};
