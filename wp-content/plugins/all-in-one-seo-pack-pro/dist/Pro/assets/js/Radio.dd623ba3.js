import{S as o}from"./Checkmark.dc905798.js";import{n as l}from"./vueComponentNormalizer.a77505d6.js";var i=function(){var a,e=this,s=e.$createElement,t=e._self._c||s;return t("label",{staticClass:"aioseo-radio",class:[e.labelClass,(a={},a[e.size]=e.size,a),e.typeClass,{disabled:e.disabled}],on:{keydown:[function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.labelToggle.apply(null,arguments)},function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"space",32,n.key,[" ","Spacebar"])?null:e.labelToggle.apply(null,arguments)}],click:function(n){return n.stopPropagation(),function(){}.apply(null,arguments)}}},[e._t("header"),t("span",{staticClass:"form-radio-wrapper"},[t("span",{staticClass:"form-radio"},[t("input",{ref:"input",class:e.inputClass,attrs:{type:"radio",disabled:e.disabled,name:e.name,id:e.id},domProps:{checked:e.value},on:{input:function(n){return e.$emit("input",n.target.checked)}}}),t("span",{staticClass:"fancy-radio"},[e.type===1?t("svg-checkmark"):e._e()],1)])]),e._t("default")],2)},u=[];const c={components:{SvgCheckmark:o},props:{value:[String,Boolean],name:String,labelClass:{type:String,default(){return""}},inputClass:{type:String,default(){return""}},id:String,size:String,disabled:Boolean,type:{type:Number,default(){return 1}}},computed:{typeClass(){return`type-${this.type}`}},methods:{labelToggle(){this.$refs.input.click()}}},r={};var p=l(c,i,u,!1,_,null,null,null);function _(a){for(let e in r)this[e]=r[e]}const y=function(){return p.exports}();export{y as B};
