(function(t){function a(a){for(var n,c,l=a[0],d=a[1],r=a[2],u=0,m=[];u<l.length;u++)c=l[u],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&m.push(o[c][0]),o[c]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(t[n]=d[n]);s&&s(a);while(m.length)m.shift()();return i.push.apply(i,r||[]),e()}function e(){for(var t,a=0;a<i.length;a++){for(var e=i[a],n=!0,l=1;l<e.length;l++){var d=e[l];0!==o[d]&&(n=!1)}n&&(i.splice(a--,1),t=c(c.s=e[0]))}return t}var n={},o={app:0},i=[];function c(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=t,c.c=n,c.d=function(t,a,e){c.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,a){if(1&a&&(t=c(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)c.d(e,n,function(a){return t[a]}.bind(null,n));return e},c.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(a,"a",a),a},c.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},c.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=a,l=l.slice();for(var r=0;r<l.length;r++)a(l[r]);var s=d;i.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"026e":function(t,a,e){},"034f":function(t,a,e){"use strict";e("85ec")},"3f1c":function(t,a,e){"use strict";e("026e")},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("Column")],1)},i=[],c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"board"},[e("div",{staticClass:"header_action"},[e("button",{staticClass:"btn mar_right_10 text-center",attrs:{type:"button"},on:{click:t.addColumn}},[t._v("ADD COLUMN")]),e("button",{staticClass:"btn btn-md btn-primary2 text-center mar_right_10",attrs:{type:"button"},on:{click:t.addCard}},[t._v("ADD TASK CARD ")]),e("button",{staticClass:"button btn mar_right_10",attrs:{type:"button",value:"export db"},on:{click:t.exportDb}},[t._v("Export DB")])]),e("div",{staticClass:"column_list"},t._l(t.listColumns,(function(a){return e("div",{key:a.id,staticClass:"list"},[e("h3",{staticClass:"listname column_header"},[e("span",[t._v(t._s(a.column_name))]),t._v(" "),e("button",{staticClass:"btn delete-column",attrs:{type:"button",id:"delete-board"},on:{click:function(e){return t.deleteColumn(a.id)}}},[t._v("Delete")])]),e("draggable",{staticClass:"list-group kanban-column",attrs:{id:"column_id_"+a.id,list:a.tasks,group:"tasks"},on:{change:function(e){return t.update(a.id)}}},t._l(a.tasks,(function(a){return e("div",{key:a.id,staticClass:"list-group-item card",attrs:{id:a.id},on:{click:function(e){return t.editTask(a.id)}}},[t._v(" "+t._s(a.title)+" ")])})),0)],1)})),0),e("div",{staticClass:"add_column"},[e("modal",{attrs:{name:"add_column_modal"}},[e("h4",{staticClass:"modal-title"},[t._v("Add Column")]),e("div",{staticClass:"modal-body"},[e("div",{staticClass:"column_raw"},[e("label",[t._v("Column name")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.column_name,expression:"column_name"}],attrs:{type:"text",name:"column_name",value:""},domProps:{value:t.column_name},on:{input:function(a){a.target.composing||(t.column_name=a.target.value)}}})])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"button btn mar_right_10",attrs:{type:"button",value:"Save"},on:{click:t.saveColumnName}},[t._v("Save")]),e("button",{staticClass:"button btn",attrs:{type:"button",value:"Discard"},on:{click:t.cancelColumnName}},[t._v("Discard")])])])],1),e("div",{staticClass:"add_card"},[e("modal",{attrs:{name:"add_card_modal"}},[e("h4",{staticClass:"modal-title"},[t._v("Add Card")]),e("div",{staticClass:"modal-body"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.card_id,expression:"card_id"}],attrs:{type:"hidden",name:"card_id"},domProps:{value:t.card_id},on:{input:function(a){a.target.composing||(t.card_id=a.target.value)}}}),e("div",{staticClass:"card_raw"},[e("label",[t._v("Card title")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.card_title,expression:"card_title"}],attrs:{type:"text",name:"card_title",value:""},domProps:{value:t.card_title},on:{input:function(a){a.target.composing||(t.card_title=a.target.value)}}})]),e("div",{staticClass:"card_raw"},[e("label",[t._v("column")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.card_column_id,expression:"card_column_id"}],on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.card_column_id=a.target.multiple?e:e[0]}}},[e("option",{attrs:{disabled:"",value:""}},[t._v("Please select one")]),t._l(t.listColumns,(function(a){return e("option",{key:a.id,domProps:{value:a.id}},[t._v(t._s(a.column_name))])}))],2)]),e("div",{staticClass:"card_raw"},[e("label",[t._v("card description")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.card_description,expression:"card_description"}],attrs:{placeholder:"add multiple lines"},domProps:{value:t.card_description},on:{input:function(a){a.target.composing||(t.card_description=a.target.value)}}})])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"button btn mar_right_10",attrs:{type:"button",value:"Save"},on:{click:t.saveCard}},[t._v("Save")]),e("button",{staticClass:"button btn",attrs:{type:"button",value:"Discard"},on:{click:t.cancelCard}},[t._v("Discard")])])])],1)])},l=[],d=(e("a4d3"),e("e01a"),e("d3b7"),e("3ca3"),e("ddb0"),e("2b3d"),e("b76a")),r=e.n(d),s=e("bc3a").default,u="http://127.0.0.1:8000/",m={name:"column",components:{draggable:r.a},data:function(){return{listColumns:[],column_name:"",card_title:"",card_description:"",card_column_id:"",taskId:"",card_id:""}},created:function(){var t=this;s.post(u+"listallcolumn").then((function(a){200==a.data.code&&(t.listColumns=a.data.data)})).catch((function(t){console.log(t)})).then((function(){}))},mounted:function(){},methods:{addCard:function(){this.$modal.show("add_card_modal")},cancelCard:function(){this.$modal.hide("add_card_modal")},addColumn:function(){this.$modal.show("add_column_modal")},cancelColumnName:function(){this.$modal.hide("add_column_modal")},saveColumnName:function(){var t=this;if(""!=this.column_name){var a=JSON.stringify({column_name:this.column_name});s.post(u+"addcolumn",a).then((function(a){200==a.data.code&&t.listColumns.push(a.data.data)})).catch((function(t){console.log(t)})).then((function(){})),this.cancelColumnName(),this.column_name=""}else alert("Please enter column name")},deleteColumn:function(t){var a=this;if(""==t)alert("something went wrong");else{var e=JSON.stringify({id:t});s.post(u+"deletecolumn",e).then((function(t){200==t.data.code&&(a.listColumns=t.data.data)})).catch((function(t){console.log(t)})).then((function(){}))}},saveCard:function(){var t=this;if(""==this.card_column_id)alert("Please select column");else if(""==this.card_title)alert("Please enter card title");else if(""==this.card_description)alert("Please enter card description");else{var a=JSON.stringify({id:this.card_id,column_id:this.card_column_id,title:this.card_title,description:this.card_description});s.post(u+"addorupdatetask",a).then((function(a){console.log(a),200==a.data.code&&(t.listColumns=a.data.data)})).catch((function(t){console.log(t)})).then((function(){})),this.cancelCard(),this.card_title="",this.card_description="",this.card_column_id="",this.card_id=""}},update:function(t){var a=this,e=document.getElementById("column_id_"+t).getElementsByTagName("*"),n=new Object;if(e.length>0){n["column_id"]=t,n["column_sort_data"]=[];for(var o=0;o<e.length;o++)n["column_sort_data"].push(e[o].id);var i=JSON.stringify(n);s.post(u+"updatetaskorder",i).then((function(t){200==t.data.code&&(a.listColumns=t.data.data)})).catch((function(t){console.log(t)})).then((function(){}))}},editTask:function(t){var a=this,e=JSON.stringify({id:t});s.post(u+"gettaskdetails",e).then((function(t){200==t.data.code&&(console.log(t.data.data),a.card_title=t.data.data.title,a.card_column_id=t.data.data.column_id,a.card_description=t.data.data.description,a.card_id=t.data.data.id,a.$modal.show("add_card_modal"))})).catch((function(t){console.log(t)})).then((function(){}))},exportDb:function(){s.post(u+"exportdb").then((function(t){console.log(t);var a=new Blob([t.data],{type:"application/sql"}),e=document.createElement("a");e.href=window.URL.createObjectURL(a),e.download="bemo_demo.sql",e.click()})).catch((function(t){console.log(t)})).then((function(){}))}}},_=m,p=(e("6e58"),e("3f1c"),e("2877")),f=Object(p["a"])(_,c,l,!1,null,null,null),v=f.exports,h={name:"App",components:{Column:v}},b=h,g=(e("034f"),Object(p["a"])(b,o,i,!1,null,null,null)),C=g.exports,y=e("1881"),w=e.n(y);n["a"].config.productionTip=!1,n["a"].use(w.a),new n["a"]({render:function(t){return t(C)}}).$mount("#app")},"6e58":function(t,a,e){"use strict";e("8265")},8265:function(t,a,e){},"85ec":function(t,a,e){}});
//# sourceMappingURL=app.fbb649b5.js.map