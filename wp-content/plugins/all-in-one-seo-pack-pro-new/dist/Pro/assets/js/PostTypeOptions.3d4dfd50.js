import{B as a}from"./HighlightToggle.ad3182d2.js";import{C as l}from"./index.2a1615d5.js";import{C as p}from"./Tooltip.a36a3967.js";import{G as u,a as c}from"./Row.89c6bb85.js";import{n as _}from"./vueComponentNormalizer.58b0a173.js";var d=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"aioseo-post-type-options-toggle"},[e("div",{staticClass:"post-type-options-settings"},[t.postTypes.length===0&&t.type==="postTypes"?e("core-alert",{attrs:{type:"blue"}},[e("strong",[t._v(t._s(t.strings.noPostTypes))]),t._v(" "+t._s(t.strings.noPostTypesDescription)+" ")]):t._e(),t.postTypes.length===0&&t.type==="taxonomies"?e("core-alert",{attrs:{type:"blue"}},[e("strong",[t._v(t._s(t.strings.noTaxonomies))]),t._v(" "+t._s(t.strings.noTaxonomiesDescription)+" ")]):t._e(),0<t.postTypes.length?e("grid-row",t._l(t.postTypes,function(s,i){return e("grid-column",{key:i,attrs:{md:"6"}},[e("base-highlight-toggle",{attrs:{size:"medium",active:t.isActive(s),name:s.name,type:"checkbox",value:t.getValue(s)},on:{input:function(r){return t.updateValue(r,s)}}},[e("core-tooltip",{scopedSlots:t._u([{key:"tooltip",fn:function(){return[e("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.label)+" "),e("strong",[t._v(t._s(s.label))]),e("br"),t._v(" "+t._s(t.strings.name)+" "),e("strong",[t._v(t._s(s.name))])])]},proxy:!0}],null,!0)},[e("span",{staticClass:"icon dashicons",class:`${s.icon||"dashicons-admin-post"}`})]),t._v(" "+t._s(s.label)+" ")],1)],1)}),1):t._e()],1)])},h=[];const m={components:{BaseHighlightToggle:a,CoreAlert:l,CoreTooltip:p,GridColumn:u,GridRow:c},props:{type:{type:String,required:!0},options:{type:Object,required:!0},excluded:{type:Array,default(){return[]}}},data(){return{strings:{label:this.$t.__("Label:",this.$td),name:this.$t.__("Slug:",this.$td),noPostTypes:this.$t.__("No post types available.",this.$td),noTaxonomies:this.$t.__("No taxonomies available.",this.$td),noPostTypesDescription:this.$t.__("All post types are set to noindex or your site does not have any post types registered that are supported by this feature.",this.$td),noTaxonomiesDescription:this.$t.__("All taxonomies are set to noindex or your site does not have any taxonomies registered that are supported by this feature.",this.$td)}}},computed:{postTypes(){return this.$aioseo.postData[this.type].filter(t=>!this.excluded.includes(t.name))}},methods:{emitInput(t){this.$emit("input",t)},updateValue(t,n){if(t){const s=this.options[this.type].included;s.push(n.name),this.$set(this.options[this.type],"included",s);return}const e=this.options[this.type].included.findIndex(s=>s===n.name);e!==-1&&this.$delete(this.options[this.type].included,e)},getValue(t){return this.options[this.type].included.includes(t.name)},isActive(t){return this.options[this.type].included.findIndex(e=>e===t.name)!==-1}}},o={};var y=_(m,d,h,!1,g,null,null,null);function g(t){for(let n in o)this[n]=o[n]}const b=function(){return y.exports}();export{b as C};
