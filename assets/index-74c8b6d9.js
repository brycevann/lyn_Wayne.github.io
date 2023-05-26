import{V as o,n as r}from"./index-26fc2b30.js";const l=o.extend({components:{},data(){return{warnData:[],tableLayout:"fixed",leftFixedColumn:1,rightFixedColumn:1,size:"medium",bordered:!0,showHeader:!0,warnColumns:[{colKey:"warn-id",title:"NO.",fixed:"left"},{colKey:"warn-name",title:"规则名称"},{colKey:"warn-level",title:"预警等级"},{colKey:"warn-dev",title:"预警设备"},{colKey:"warn-rule",title:"预警触发条件"},{fixed:"right",colKey:"op",title:"操作"}],pagination:{defaultPageSize:10,defaultCurrent:1,showPageSize:!1},searchValue:"",confirmVisible:!1,deleteIdx:-1}},computed:{confirmBody(){var t;if(this.deleteIdx>-1){const{name:e}=(t=this.data)==null?void 0:t[this.deleteIdx];return`删除后，${e}的所有设备信息将被清空，且无法恢复`}return""},offsetTop(){return this.$store.state.setting.isUseTabsRouter?48:0}},created(){this.$request.get("/src/data/warnData.json").then(t=>{this.warnData=t.data.record,this.pagination.total=t.data.total})},methods:{getContainer(){return document.querySelector(".tdesign-starter-layout")},rehandlePageChange(t,e){console.log("分页变化",t,e)},rehandleSelectChange(t){this.selectedRowKeys=t},rehandleChange(t,e){console.log("统一Change",t,e)},handleClickDetail(){this.$router.push("/detail/base")},handleSetupContract(){this.$router.push("/form/base")},handleClickDelete(t){this.deleteIdx=t.rowIndex,this.confirmVisible=!0},onConfirmDelete(){this.data.splice(this.deleteIdx,1),this.pagination.total=this.data.length;const t=this.selectedRowKeys.indexOf(this.deleteIdx);t>-1&&this.selectedRowKeys.splice(t,1),this.confirmVisible=!1,this.$message.success("删除成功"),this.resetIdx()},onCancel(){this.resetIdx()},resetIdx(){this.deleteIdx=-1}}});var c=function(){var t=this,e=this,s=e.$createElement,a=e._self._c||s;return a("div",[a("t-card",{staticClass:"list-card-container",attrs:{bordered:!1}},[a("div",{staticClass:"content-header"},[a("h1",{staticClass:"content-header-title"},[e._v("数据预警规则")]),a("div",{staticClass:"warnbutton"},[a("t-radio-group",{attrs:{"default-value":"1"}},[a("t-radio-button",{attrs:{value:"1"}},[e._v("预警历史")]),a("t-radio-button",{attrs:{value:"2"}},[e._v("预警规则")])],1),a("t-button",{on:{click:function(){return t.$router.push("")}}},[e._v("新建规则")])],1)]),a("t-row",{attrs:{justify:"space-between"},scopedSlots:e._u([{key:"suffix-icon",fn:function(){return[a("search-icon",{attrs:{size:"20px"}})]},proxy:!0}])},[a("div",{staticClass:"left-operation-container"})]),a("div",{staticClass:"table-container"},[a("t-table",{staticClass:"dev-table",attrs:{horizontalScrollAffixedBottom:"",hover:"",paginationAffixedBottom:"",tableLayout:"auto","row-key":"index",data:e.warnData,pagination:e.pagination,columns:e.warnColumns,cellEmptyContent:"-"},on:{"row-click":function(){return t.$router.push("/devices/detail")}},scopedSlots:e._u([{key:"op",fn:function(n){return[a("a",{staticClass:"t-button-link",on:{click:function(f){return e.handleClickDelete(n)}}},[e._v("删除")])]}}])})],1)],1),a("t-dialog",{attrs:{header:"确认删除当前所选设备？",body:e.confirmBody,visible:e.confirmVisible,onCancel:e.onCancel},on:{"update:visible":function(n){e.confirmVisible=n},confirm:e.onConfirmDelete}})],1)},d=[];const i={};var u=r(l,c,d,!1,h,"82384b7c",null,null);function h(t){for(let e in i)this[e]=i[e]}const p=function(){return u.exports}();export{p as default};
