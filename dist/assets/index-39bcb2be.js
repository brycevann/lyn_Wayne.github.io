import{V as o,n as r}from"./index-26fc2b30.js";const l=o.extend({name:"ListBase",components:{},data(){return{devData:[],tableLayout:"fixed",leftFixedColumn:1,rightFixedColumn:1,size:"medium",bordered:!0,showHeader:!0,devColumns:[{colKey:"dev-id",title:"ID",fixed:"left"},{colKey:"dev-name",title:"设备名"},{colKey:"dev-leader",title:"设备负责人"},{colKey:"dev-state",title:"设备状态"},{colKey:"dev-group",title:"设备组"},{colKey:"dev-tag",title:"设备标签"},{fixed:"right",colKey:"op",title:"操作"}],pagination:{defaultPageSize:10,defaultCurrent:1,showPageSize:!1},searchValue:"",confirmVisible:!1,deleteIdx:-1}},computed:{confirmBody(){var t;if(this.deleteIdx>-1){const{name:e}=(t=this.data)==null?void 0:t[this.deleteIdx];return`删除后，${e}的所有设备信息将被清空，且无法恢复`}return""},offsetTop(){return this.$store.state.setting.isUseTabsRouter?48:0}},created(){this.$request.get("/src/data/devData.json").then(t=>{this.devData=t.data.record,this.pagination.total=t.data.total})},methods:{getContainer(){return document.querySelector(".tdesign-starter-layout")},rehandlePageChange(t,e){console.log("分页变化",t,e)},rehandleSelectChange(t){this.selectedRowKeys=t},rehandleChange(t,e){console.log("统一Change",t,e)},handleClickDetail(){this.$router.push("/detail/base")},handleSetupContract(){this.$router.push("/form/base")},handleClickDelete(t){this.deleteIdx=t.rowIndex,this.confirmVisible=!0},onConfirmDelete(){this.data.splice(this.deleteIdx,1),this.pagination.total=this.data.length;const t=this.selectedRowKeys.indexOf(this.deleteIdx);t>-1&&this.selectedRowKeys.splice(t,1),this.confirmVisible=!1,this.$message.success("删除成功"),this.resetIdx()},onCancel(){this.resetIdx()},resetIdx(){this.deleteIdx=-1}}});var d=function(){var t=this,e=this,a=e.$createElement,i=e._self._c||a;return i("div",[i("t-card",{staticClass:"list-card-container",attrs:{bordered:!1}},[i("div",{staticClass:"content-header"},[i("h1",{staticClass:"content-header-title"},[e._v("设备列表")]),i("t-button",{attrs:{href:"/devices/form"},on:{click:function(){return t.$router.push("/devices/form")}}},[e._v("新建设备")])],1),i("t-row",{attrs:{justify:"space-between"},scopedSlots:e._u([{key:"suffix-icon",fn:function(){return[i("search-icon",{attrs:{size:"20px"}})]},proxy:!0}])},[i("div",{staticClass:"left-operation-container"})]),i("div",{staticClass:"table-container"},[i("t-table",{staticClass:"dev-table",attrs:{horizontalScrollAffixedBottom:"",hover:"",paginationAffixedBottom:"",tableLayout:"auto","row-key":"index",data:e.devData,pagination:e.pagination,columns:e.devColumns,cellEmptyContent:"-"},on:{"row-click":function(){return t.$router.push("/devices/list/detail")}},scopedSlots:e._u([{key:"op",fn:function(n){return[i("a",{staticClass:"t-button-link",on:{click:function(f){return e.handleClickDelete(n)}}},[e._v("删除")])]}}])})],1)],1),i("t-dialog",{attrs:{header:"确认删除当前所选设备？",body:e.confirmBody,visible:e.confirmVisible,onCancel:e.onCancel},on:{"update:visible":function(n){e.confirmVisible=n},confirm:e.onConfirmDelete}})],1)},c=[];const s={};var u=r(l,d,c,!1,h,"b3625480",null,null);function h(t){for(let e in s)this[e]=s[e]}const m=function(){return u.exports}();export{m as default};
