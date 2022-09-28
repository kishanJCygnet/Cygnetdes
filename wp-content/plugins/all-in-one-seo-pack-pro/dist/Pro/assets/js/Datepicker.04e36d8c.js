import{a7 as l}from"./vendor.f6bbc087.js";import{S as i}from"./Close.952d41b7.js";import{n as u}from"./vueComponentNormalizer.4c221f82.js";var c=function(){var t,e=this,s=e.$createElement,n=e._self._c||s;return n("date-range-picker",{ref:"picker",staticClass:"aioseo-date-picker",class:(t={},t[e.size]=e.size,t),attrs:{opens:"center","locale-data":{firstDay:1,format:"DD-MM-YYYY HH:mm:ss"},singleDatePicker:"",timePicker:!1,timePicker24Hour:!1,showWeekNumbers:!1,showDropdowns:"",autoApply:"",ranges:!1,appendToBody:""},scopedSlots:e._u([{key:"input",fn:function(a){return[n("span",[e._v(e._s(e.formatDate(a.startDate)))]),a.startDate||a.endDate?n("svg-circle-close",{nativeOn:{click:function(o){return e.clearDates(o)}}}):e._e()]}}]),model:{value:e.dateRange,callback:function(a){e.dateRange=a},expression:"dateRange"}})},p=[];const _={components:{DateRangePicker:l,SvgCircleClose:i},props:{value:String,size:{type:String,default:"",description:"Button size (small|medium|large)"}},data(){return{dateRange:{startDate:null,endDate:null,ranges:!1}}},watch:{dateRange:{deep:!0,handler(){this.$emit("input",this.formatDate(this.dateRange.startDate))}},value(){this.dateRange.startDate=this.value?new Date(this.value):null,this.dateRange.endDate=this.value?new Date(this.value):null}},methods:{clearDates(t){t.stopPropagation(),this.dateRange.startDate=null,this.dateRange.endDate=null},formatDate(t){return t&&t.getMonth()+1+"/"+t.getDate()+"/"+t.getFullYear()}},mounted(){this.value&&(this.dateRange.startDate=new Date(this.value),this.dateRange.endDate=new Date(this.value))}},r={};var f=u(_,c,p,!1,d,null,null,null);function d(t){for(let e in r)this[e]=r[e]}var v=function(){return f.exports}();export{v as B};
