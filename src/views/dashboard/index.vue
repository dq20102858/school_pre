<template>
<div class="home-pages">
  <el-form ref="form" :model="searchForm":inline="true" style="padding: 10px 0px;">
    <el-form-item>
      <el-input v-model="searchForm.name" placeholder="英文名/省/市/区"></el-input>
    </el-form-item>
    <el-form-item>
        <el-select v-model="searchForm.identity" placeholder="请选择身份" clearable >
          <el-option v-for="(item,key) in this.config.identity" :label="item.name" value="item.id"></el-option>
        </el-select>
    </el-form-item>
    <el-form-item>
        <el-select v-model="searchForm.grade" placeholder="请选择年级" clearable >
          <el-option v-for="(item,key) in this.config.grade" :label="item.name" value="item.id"></el-option>
        </el-select>
    </el-form-item>
    <el-form-item>
        <el-select v-model="searchForm.level" placeholder="请选择英语水平" clearable >
          <el-option v-for="(item,key) in this.config.level" :label="item.name" value="item.id"></el-option>
        </el-select>
    </el-form-item>
    <el-form-item>
        <el-select v-model="searchForm.device" placeholder="请选择设备" clearable >
          <el-option v-for="(item,key) in this.config.device" :label="item.name" value="item.id"></el-option>
        </el-select>
    </el-form-item>
    <el-date-picker v-model="searchForm.time_range" type="daterange" align="right" unlink-panels range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions2" class=""> </el-date-picker>
    <el-button type="primary" @click="getLists">搜索</el-button>
    <el-button type="warning" @click="exportExcel">导出</el-button>
  </el-form>
  <el-table :data="lists" >
      <el-table-column label="姓名"  prop="name" align="center"></el-table-column>
      <el-table-column label="电话"  prop="phone" align="center"></el-table-column>
      <el-table-column label="身份"  prop="identity" align="center"></el-table-column>
      <el-table-column label="年级"  prop="grade" align="center"></el-table-column>
      <el-table-column label="英语水平"  prop="level" align="center"></el-table-column>
      <el-table-column label="设备"  prop="device" align="center"></el-table-column>
      <el-table-column label="生日"  prop="birthday" align="center"></el-table-column>
      <el-table-column label="英文名"  prop="english_name" align="center"></el-table-column>
      <el-table-column label="省"  prop="province" align="center"></el-table-column>
      <el-table-column label="市"  prop="city" align="center"></el-table-column>
      <el-table-column label="区"  prop="area" align="center"></el-table-column>
  </el-table>
  <div class="app-pagination">
    <el-pagination
      class="pagination"
      v-if="lists.length !== 0"
      layout="slot,prev, pager, next"
      :page-size="this.page_size"
      :current-page="this.page_cur"
      :total="this.page_total"
      @current-change="pageChange"
    >
    </el-pagination>
    </div>
</div>
</template>
<script>

import { mapGetters } from 'vuex'
import adminDashboard from './admin'
import editorDashboard from './editor'
import { publicData } from "@/utils/common";
export default {
  name: 'Dashboard',
  components: { adminDashboard, editorDashboard },
  data() {
    return {
      currentRole: 'adminDashboard',
      lists:[],
      searchForm:{
        time_range:[],
        identity:"",
        level:"",
        device:"",
        keyword:"",
        grade:""
      },
      page_size:0,
      page_cur:1,
      page_total:1,
      config:[],
      pickerOptions2: publicData.pickerOptions2

    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  created() {
    this.getLists();
    this.getConfig();
  },
  methods:{
    getLists(){
      let time_range = this.searchForm.time_range;
      let identity = this.searchForm.identity;
      let level = this.searchForm.level;
      let device = this.searchForm.device;
      let keyword = this.searchForm.keyword;
      let page = this.page_cur;
      this.request({
        url: "/users/getUserPages",
        method: "get",
        params:{page,time_range,identity,level,device,keyword}
      }).then(res => {
        let data = res.data;
        if (data.status == 1) {
          this.lists = data.data.data;
          this.page_size = parseInt(data.data.per_page);
          this.page_cur = parseInt(data.data.current_page);
          this.page_total = data.data.total
        }
      });
    },
    pageChange(value){
      this.page_cur = value;
      this.getLists();
    },
    getConfig(){
      this.request({
        url: "/users/getConfig",
        method: "get",
      }).then(res => {
        let data = res.data;
        if (data.status == 1) {
          this.config = data.data;
        }
      });
    },
    exportExcel(){
      let time_range = this.searchForm.time_range;
      let identity = this.searchForm.identity;
      let grade = this.searchForm.grade;
      let level = this.searchForm.level;
      let device = this.searchForm.device;
      let keyword  = this.searchForm.keyword;
      if(this.lists.length>0){
          let url = "/users/exportExcel?identity="+this.searchForm["identity"]+"&grade="+this.searchForm['grade']+
                  "&level="+this.searchForm['level']+"&device="+this.searchForm['device']+"&keyword="+this.searchForm['keyword'];
          if(this.searchForm.time_range.length>0){
              url = url + "&create_time[]=" +this.searchForm['time_range'][0]+"&create_time[]="+this.searchForm['time_range'][1];
          }
          window.location.href = url;
      }
    },
  }
}
</script>

<style>
.home-pages{position:relative;background:#eef7fd url('/static/bg-line.png') repeat-y ;height: 100vh;}
.app-pagination{
  float: right;
}


</style>
