webpackJsonp([4],{

/***/ "DQC3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.2@babel-loader/lib!./node_modules/_vue-loader@13.5.0@vue-loader/lib/selector.js?type=script&index=0!./src/views/images/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var views_images = ({
  data: function data() {
    return {
      host: "http://" + location.host,
      // host: "http://school.nething.com",
      files: [],
      fileList: [],
      disabled: false
    };
  },
  created: function created() {
    this.getImages();
  },

  methods: {
    handleRemove: function handleRemove(file) {
      var url = file.url;
      var index = this.files.indexOf(url);
      this.files.splice(index, 1);
      this.fileList.splice(index, 1);
    },
    handleImages: function handleImages(res) {
      this.files.push(res.data.url);
      var ord = this.files.length;
      var one = {
        url: res.data.url,
        ord: ord
      };
      this.fileList.push(one);
    },
    beforeRemove: function beforeRemove(file) {
      return false;
    },
    addImgs: function addImgs() {
      var _this = this;

      if (typeof this.fileList == "undefined" || this.fileList.length == 0) {
        return false;
      }
      var data = this.fileList;
      this.request({
        url: "/users/addImages",
        method: "post",
        data: data
      }).then(function (res) {
        var data = res.data;
        if (data.status) {
          _this.$message({
            "message": data.msg
          });
        } else {
          _this.$message({
            "type": "error",
            "message": data.msg
          });
        }
      });
    },
    getImages: function getImages() {
      var _this2 = this;

      this.request({
        url: "/users/getImages",
        method: "get"
      }).then(function (res) {
        var data = res.data;
        if (data.status) {
          _this2.fileList = data.data.fileList;
          _this2.files = data.data.file;
        }
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.5.0@vue-loader/lib/template-compiler?{"id":"data-v-1cd32d47","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.5.0@vue-loader/lib/selector.js?type=template&index=0!./src/views/images/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"padding":"10px"},attrs:{"id":"images"}},[_c('el-upload',{attrs:{"action":_vm.host+'/upload/uploadFile',"list-type":"picture-card","on-success":_vm.handleImages,"auto-upload":true,"file-list":_vm.fileList,"before-remove":_vm.beforeRemove},scopedSlots:_vm._u([{key:"file",fn:function(ref){
var file = ref.file;
return _c('div',{staticStyle:{"position":"relative"}},[_c('img',{staticClass:"el-upload-list__item-thumbnail",attrs:{"src":file.url,"alt":""}}),_vm._v(" "),_c('el-input',{staticStyle:{"z-index":"9999","position":"absolute","top":"111px","left":"0"},attrs:{"placeholder":"请输入排序","value":file.ord,"min":"0"},model:{value:(file.ord),callback:function ($$v) {_vm.$set(file, "ord", $$v)},expression:"file.ord"}}),_vm._v(" "),_c('span',{staticClass:"el-upload-list__item-actions"},[(!_vm.disabled)?_c('span',{staticClass:"el-upload-list__item-delete",on:{"click":function($event){_vm.handleRemove(file)}}},[_c('i',{staticClass:"el-icon-delete"})]):_vm._e()])],1)}}])},[_c('i',{staticClass:"el-icon-plus",attrs:{"slot":"default"},slot:"default"})]),_vm._v(" "),_c('div',{staticStyle:{"margin-top":"20px"}},[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.addImgs}},[_vm._v("提交")])],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_views_images = (esExports);
// CONCATENATED MODULE: ./src/views/images/index.vue
function injectStyle (ssrContext) {
  __webpack_require__("TUmc")
}
var normalizeComponent = __webpack_require__("/Xao")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  views_images,
  selectortype_template_index_0_src_views_images,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_views_images = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "TUmc":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("ptxQ");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("8bSs")("4055c6ac", content, true);

/***/ }),

/***/ "ptxQ":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("BkJT")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ })

});