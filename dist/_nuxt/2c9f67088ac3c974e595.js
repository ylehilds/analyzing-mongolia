(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{271:function(t,r,e){var content=e(284);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(12).default)("80983b26",content,!0,{sourceMap:!1})},283:function(t,r,e){"use strict";var n=e(271);e.n(n).a},284:function(t,r,e){(r=e(11)(!1)).push([t.i,"input[data-v-034feda9]{background-color:#fff;color:#000}",""]),t.exports=r},299:function(t,r,e){"use strict";e.r(r);e(164),e(47),e(64),e(9),e(5);var n={data:function(){return{search:"",sensors:["AB","AK","AL","AR","AZ","BC","CA","CO","CT","Cache","Carbon","DE","Davis","FL","GA","HI","IA","ID","IL","IN","Juab","KS","KY","Kane","LA","MA","MB","MD","ME","MI","MN","MS","MT","NB","NC","ND","NE","NH","NJ","NL","NM","NS","NU","NV","NY","OH","OK","ON","OR","PA","PE","RI","SD","UT","VA","WA","WI","WY"]}},computed:{cards:function(){var t=[],r=!0,e=!1,n=void 0;try{for(var o,c=this.sensors[Symbol.iterator]();!(r=(o=c.next()).done);r=!0){var l=o.value;t.push({title:l,src:"https://raw.githubusercontent.com/ylehilds/analyzing-mongolia-air-quality/master/jupyter/"+l+"_pm_2_5.png",flex:50})}}catch(t){e=!0,n=t}finally{try{r||null==c.return||c.return()}finally{if(e)throw n}}return t},filteredItems:function(){var t=this;return this.cards.filter((function(r){return!0===r.title.toLowerCase().startsWith(t.search.toLowerCase())}))}}},o=(e(283),e(56)),c=e(81),l=e.n(c),v=e(157),d=e(270),f=e(269),h=e(295),m=e(262),N=e(115),_=e(103),y=e(296),C=e(265),V=e(297),w=e(30),A=e(129),component=Object(o.a)(n,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("v-card",{staticClass:"mx-auto"},[e("v-system-bar",{attrs:{color:"indigo darken-2",dark:""}},[e("v-spacer")],1),t._v(" "),e("v-toolbar",{attrs:{color:"indigo",dark:""}},[e("v-toolbar-title",[t._v("PM 2.5 Trend Graphs")]),t._v(" "),e("v-spacer"),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"text"},domProps:{value:t.search},on:{input:function(r){r.target.composing||(t.search=r.target.value)}}}),t._v(" "),e("v-btn",{attrs:{icon:""}},[e("v-icon",[t._v("mdi-magnify")])],1)],1),t._v(" "),e("v-container",{attrs:{fluid:""}},[e("v-row",{attrs:{dense:""}},t._l(t.filteredItems,(function(r){return e("v-col",{key:r.title,attrs:{cols:r.flex}},[e("v-card",[e("v-img",{attrs:{src:r.src,height:"300px",width:"450px"}},[e("v-card-title")],1),t._v(" "),e("v-card-actions",[e("v-spacer"),t._v(" "),e("v-btn",{attrs:{icon:"",href:r.src}},[e("v-icon",[t._v("mdi-share-variant")])],1)],1)],1)],1)})),1)],1)],1)}),[],!1,null,"034feda9",null);r.default=component.exports;l()(component,{VBtn:v.a,VCard:d.a,VCardActions:f.a,VCardTitle:f.c,VCol:h.a,VContainer:m.a,VIcon:N.a,VImg:_.a,VRow:y.a,VSpacer:C.a,VSystemBar:V.a,VToolbar:w.a,VToolbarTitle:A.a})}}]);