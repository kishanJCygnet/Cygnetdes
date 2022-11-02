import{B as _,S as d}from"./Php.8ab69eef.js";import{C as v}from"./Tooltip.a36a3967.js";import{S as f}from"./CheckSolid.b1f55096.js";import{l as g}from"./index.2a1615d5.js";import{n}from"./vueComponentNormalizer.58b0a173.js";import{C as h}from"./SettingsRow.0d51ff21.js";import{T as y}from"./Slide.01023b2f.js";var m=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"aioseo-copy-block"},[e("div",{staticClass:"message"},[t._v(" "+t._s(t.message)+" ")]),e("core-tooltip",{ref:"copy-tooltip",staticClass:"copy-tooltip",scopedSlots:t._u([{key:"tooltip",fn:function(){return[t._v(" "+t._s(t.copyText)+" ")]},proxy:!0}])},[e("div",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.message,expression:"message",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"}],staticClass:"copy"},[t.copied?t._e():e("svg-copy"),t.copied?e("svg-circle-check-solid"):t._e()],1)])],1)},x=[];const $={components:{CoreTooltip:v,SvgCircleCheckSolid:f,SvgCopy:g},props:{message:{type:String,required:!0}},data(){return{copied:!1}},computed:{copyText(){return this.copied?this.$t.__("Copied!",this.$td):this.$t.__("Click to Copy",this.$td)}},methods:{onCopy(){this.copied=!0;const t=this.$refs["copy-tooltip"].$children[0];t.popperJS&&(t.popperJS.destroy(),t.popperJS=null),t.showPopper=!1,setTimeout(()=>{t.popperJS&&(t.popperJS.destroy(),t.popperJS=null),t.showPopper=!1,this.copied=!1},2e3)},onError(){}}},r={};var C=n($,m,x,!1,S,null,null,null);function S(t){for(let o in r)this[o]=r[o]}const w=function(){return C.exports}();var b=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("svg",{staticClass:"aioseo-gutenberg-block",attrs:{viewBox:"0 0 59 54",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("rect",{attrs:{x:"1.5",y:"1.50024",stroke:"currentColor","stroke-width":"3","stroke-dasharray":"5 3"}}),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M47.6849 10.0276H11.3151V43.9728H47.6849V10.0276ZM22.6301 25.8377V28.1766H28.7115V34.2742H31.0967V28.1766H37.1781V25.8377H31.0967V19.7262H28.7115V25.8377H22.6301Z",fill:"currentcolor"}})])},k=[];const H={},c={};var V=n(H,b,k,!1,M,null,null,null);function M(t){for(let o in c)this[o]=c[o]}const A=function(){return V.exports}();var B=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("svg",{staticClass:"aioseo-shortcode",attrs:{viewBox:"0 0 59 39",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M0 0.000244141H11V4.31055H5.91633V34.6692H11V39.0002H0V0.000244141Z",fill:"currentColor"}}),e("path",{attrs:{d:"M34.1337 0.000244141H40L25.8168 39.0002H20L34.1337 0.000244141Z",fill:"currentColor"}}),e("path",{attrs:{d:"M59 0.000244141H48V4.31055H53.0837V34.6692H48V39.0002H59V0.000244141Z",fill:"currentColor"}})])},I=[];const T={},i={};var E=n(T,B,I,!1,Z,null,null,null);function Z(t){for(let o in i)this[o]=i[o]}const j=function(){return E.exports}();var O=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("svg",{staticClass:"aioseo-widget",attrs:{viewBox:"0 0 57 57",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M48.6875 7.12506H8.3125C7.00625 7.12506 5.9375 8.19381 5.9375 9.50006V23.7501C5.9375 25.0563 7.00625 26.1251 8.3125 26.1251H48.6875C49.9938 26.1251 51.0625 25.0563 51.0625 23.7501V9.50006C51.0625 8.19381 49.9938 7.12506 48.6875 7.12506ZM46.3125 21.3751V11.8751H10.6875V21.3751H46.3125ZM46.3125 45.1251V35.6251H10.6875V45.1251H46.3125ZM8.3125 30.8751H48.6875C49.9938 30.8751 51.0625 31.9438 51.0625 33.2501V47.5001C51.0625 48.8063 49.9938 49.8751 48.6875 49.8751H8.3125C7.00625 49.8751 5.9375 48.8063 5.9375 47.5001V33.2501C5.9375 31.9438 7.00625 30.8751 8.3125 30.8751Z",fill:"currentColor"}})])},P=[];const R={},a={};var J=n(R,O,P,!1,F,null,null,null);function F(t){for(let o in a)this[o]=a[o]}const L=function(){return J.exports}();var D=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("core-settings-row",{staticClass:"aioseo-display-info",attrs:{name:t.label,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-box-toggle",{attrs:{name:"displayInfo",options:t.boxToggleOptions},on:{input:function(s){return t.inputEvent(s)}},scopedSlots:t._u([{key:"extra",fn:function(){return[t._t("extra")]},proxy:!0},{key:"shortcode",fn:function(){return[e("svg-shortcode"),e("p",[t._v(t._s(t.strings.shortcode))])]},proxy:!0},{key:"block",fn:function(){return[e("svg-gutenberg-block"),e("p",[t._v(t._s(t.strings.gutenbergBlock))])]},proxy:!0},{key:"php",fn:function(){return[e("svg-php"),e("p",[t._v(t._s(t.strings.phpCode))])]},proxy:!0},{key:"widget",fn:function(){return[e("svg-widget"),e("p",[t._v(t._s(t.strings.widget))])]},proxy:!0}],null,!0),model:{value:t.currentItem,callback:function(s){t.currentItem=s},expression:"currentItem"}}),e("div",{staticClass:"displayInfo-show-content"},t._l(t.boxToggleOptions,function(s,p){return e("transition-slide",{key:p,attrs:{active:s.value===t.currentItem}},[s.slot!=="extra"?e("div",{staticClass:"copy-box"},[e("div",[s.desc?e("div",{staticClass:"aioseo-description",domProps:{innerHTML:t._s(s.desc)}}):t._e(),s.copy?e("core-copy-block",{attrs:{message:s.copy}}):t._e(),t.$slots[s.slot+"Advanced"]&&!t.showAdvancedSettings?e("a",{staticClass:"advanced-settings-link",attrs:{href:"#"},on:{click:function(u){u.preventDefault(),t.showAdvancedSettings=!t.showAdvancedSettings}}},[t._v(t._s(t.strings.advancedSettings))]):t._e()],1),t.$slots[s.slot+"Advanced"]?e("transition-slide",{class:{"advanced-settings":!0,"advanced-settings-hidden":!t.showAdvancedSettings},attrs:{active:t.showAdvancedSettings}},[t._t(s.slot+"Advanced")],2):t._e()],1):t._e(),s.slot==="extra"?e("div",{staticClass:"extra-box"},[t._t("extraBox",null,{item:s})],2):t._e()])}),1)]},proxy:!0}],null,!0)})},N=[];const G={components:{BaseBoxToggle:_,CoreCopyBlock:w,CoreSettingsRow:h,SvgGutenbergBlock:A,SvgPhp:d,SvgShortcode:j,SvgWidget:L,TransitionSlide:y},props:{label:{type:String,default(){return this.$t.__("Display Info",this.$td)}},options:{type:Object,default(){return{block:{copy:"",desc:"",input:!1},shortcode:{copy:"",desc:"",input:!1},widget:{copy:"",desc:"",input:!1},php:{copy:"",desc:"",input:!1},extra:{copy:"",desc:"",input:!1}}}}},data(){return{currentItem:Object.keys(this.options)[0],errors:[],showAdvancedSettings:!1,strings:{advancedSettings:this.$t.__("Advanced Settings",this.$td),gutenbergBlock:this.$t.__("Gutenberg Block",this.$td),phpCode:this.$t.__("PHP Code",this.$td),shortcode:this.$t.__("Shortcode",this.$td),widget:this.$t.__("Widget",this.$td)}}},computed:{boxToggleOptions(){return Object.keys(this.options).map(o=>({value:o,slot:o,copy:this.options[o].copy,desc:this.options[o].desc}))}},watch:{currentItem(t){this.currentItem=t}},methods:{inputEvent(t){this.$emit("input",t),this.showAdvancedSettings=!1}}},l={};var W=n(G,D,N,!1,q,null,null,null);function q(t){for(let o in l)this[o]=l[o]}const et=function(){return W.exports}();export{et as C};
