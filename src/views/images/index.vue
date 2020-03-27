<template>
  <div id="images" style="padding: 10px;">
     <el-upload
        :action="host+'/upload/uploadFile'"
        list-type="picture-card"
        :on-success="handleImages"
        :auto-upload="true"
        :file-list="fileList"
        :before-remove="beforeRemove">
          <i slot="default" class="el-icon-plus"></i>
          <div slot="file" slot-scope="{file}" style="position: relative;">
            <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" >
            <el-input  placeholder="请输入排序" style="z-index:9999;position: absolute;top: 111px;left:0" :value="file.ord" v-model="file.ord" min="0"></el-input>
            <span class="el-upload-list__item-actions">
              <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
                <i class="el-icon-delete"></i>
              </span>
            </span>
          </div>
      </el-upload>
      <div style="margin-top: 20px;">
        <el-button type="primary" @click="addImgs">提交</el-button>
      </div>
  </div>

</template>

<script>
export default {

  data() {
      return {
        host: "http://" + location.host,
        // host: "http://school.nething.com",
        files:[],
        fileList:[],
        disabled:false
      }
  },
  created() {
    this.getImages();
  },
  methods: {
    handleRemove(file) {
      let url = file.url;
      let index = this.files.indexOf(url);
      this.files.splice(index,1);
      this.fileList.splice(index,1);
    },

    handleImages(res){
      this.files.push(res.data.url);
      let ord = this.files.length;
      let one ={
        url : res.data.url,
        ord: ord
      };
      this.fileList.push(one)
    },
    beforeRemove(file){
      return false;
    },
    addImgs(){
      if(typeof(this.fileList) == "undefined" || this.fileList.length==0){
        return false;
      }
      let data = this.fileList;
      this.request({
        url: "/users/addImages",
        method: "post",
        data
      }).then(res => {
        let data = res.data;
        if(data.status){
          this.$message({
            "message":data.msg
          })
        }else{
          this.$message({
            "type":"error",
            "message":data.msg
          })
        }

      });
    },
    getImages(){
      this.request({
        url: "/users/getImages",
        method: "get"
      }).then(res => {
        let data = res.data;
        if(data.status){
          this.fileList = data.data.fileList;
          this.files = data.data.file;
        }

      });
    }

  }
}
</script>

<style>

</style>
