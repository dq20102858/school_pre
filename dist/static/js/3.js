webpackJsonp([3],{

/***/ "T+/8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/api/login/login.js + 1 modules
var login = __webpack_require__("owW+");

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.2@babel-loader/lib!./node_modules/_vue-loader@13.5.0@vue-loader/lib/selector.js?type=script&index=0!./src/views/login/index.vue
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

// import { isvalidUsername } from '@/utils/validate'

/* harmony default export */ var views_login = ({
  name: "Login",
  data: function data() {
    var validatePassword = function validatePassword(rule, value, callback) {
      if (value.length < 6) {
        callback(new Error("密码长度大于6个字符"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: "",
        password: ""
      },
      loginRules: {
        //username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: "blur", validator: validatePassword }]
      },
      passwordType: "password",
      loading: false,
      showDialog: false
    };
  },

  methods: {
    showPwd: function showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
    },
    handleLogin: function handleLogin() {
      var _this = this;

      this.$refs.loginForm.validate(function (valid) {
        if (valid) {
          _this.loading = true;
          _this.$store.dispatch("LoginByUsername", _this.loginForm).then(function () {
            _this.loading = false;
            _this.$router.push({ path: "/" });
          }).catch(function () {
            _this.loading = false;
            return false;
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  created: function created() {
    // window.addEventListener('hashchange', this.afterQRScan)
  },
  destroyed: function destroyed() {
    // window.removeEventListener('hashchange', this.afterQRScan)
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.5.0@vue-loader/lib/template-compiler?{"id":"data-v-743db0e7","hasScoped":false,"transformToRequire":{"video":["src","poster"],"source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.5.0@vue-loader/lib/selector.js?type=template&index=0!./src/views/login/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"login-container"},[_c('div',{staticClass:"login-box"},[_c('el-row',{attrs:{"gutter":30}},[_c('el-col',{attrs:{"xs":24,"sm":12,"md":12,"lg":12}},[_c('div',{staticClass:"login-wel"},[_c('img',{attrs:{"src":__webpack_require__("TBGK")}})])]),_vm._v(" "),_c('el-col',{attrs:{"xs":24,"sm":12,"md":12,"lg":12}},[_c('el-form',{ref:"loginForm",staticClass:"login-form",attrs:{"autoComplete":"off","model":_vm.loginForm,"rules":_vm.loginRules,"label-position":"left"}},[_c('el-form-item',{attrs:{"prop":"username"}},[_c('i',{staticClass:"iconame"}),_vm._v(" "),_c('el-input',{staticClass:"inputtxt",attrs:{"name":"username","type":"text","autoComplete":"off","placeholder":"请输入用户名"},model:{value:(_vm.loginForm.username),callback:function ($$v) {_vm.$set(_vm.loginForm, "username", $$v)},expression:"loginForm.username"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"prop":"password"}},[_c('i',{staticClass:"icopwd"}),_vm._v(" "),_c('el-input',{staticClass:"inputtxt",attrs:{"name":"password","type":_vm.passwordType,"autoComplete":"on","placeholder":"请输入密码"},nativeOn:{"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key)){ return null; }_vm.handleLogin($event)}},model:{value:(_vm.loginForm.password),callback:function ($$v) {_vm.$set(_vm.loginForm, "password", $$v)},expression:"loginForm.password"}})],1),_vm._v(" "),_c('el-button',{staticClass:"loginbtn",attrs:{"type":"primary","loading":_vm.loading},nativeOn:{"click":function($event){$event.preventDefault();_vm.handleLogin($event)}}},[_vm._v("登录")])],1)],1)],1)],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_views_login = (esExports);
// CONCATENATED MODULE: ./src/views/login/index.vue
function injectStyle (ssrContext) {
  __webpack_require__("jlU+")
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
  views_login,
  selectortype_template_index_0_src_views_login,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_views_login = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "TBGK":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/book.e85b3ce.png";

/***/ }),

/***/ "jlU+":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("l9ef");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("8bSs")("13d83b82", content, true);

/***/ }),

/***/ "l9ef":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("BkJT")(false);
// imports


// module
exports.push([module.i, "\n.login-container {\n  background: #edf7fd url(\"/static/login-bg.png\") no-repeat;\n  background-size: cover;\n  height: 100vh;\n  position: fixed;\n  height: 100%;\n  width: 100%;\n}\n.login-logo {\n  float: right;\n}\n.login-logo img {\n  height: 28px;\n  margin-right: 60px;\n  margin-top: 30px;\n  display: block;\n}\n.login-box {\n  margin: 0 auto;\n  width: 980px;\n}\n.login-wel img {\n  margin-top: 120px;\n  display: block;\n  width: 500px;\n}\n.login-form {\n  width: 350px;\n  padding: 25px 45px 75px 45px;\n  margin: 160px 0 0 120px;\n  background: #fff;\n  border-radius: 12px;\n}\n.title-container {\n  text-align: center;\n}\n.title-container .title {\n  font-size: 14px;\n  font-weight: 400;\n  color: #157BB7;\n  margin-bottom: 30px;\n}\n.title-container img {\n  width: 38px;\n}\n.el-form-item .el-form-item__content {\n  position: relative;\n  width: 100%;\n  border-bottom: 1px #ededed solid;\n}\n.el-form-item .inputtxt input {\n  display: inline-block;\n  height: 60px;\n  line-height: 60px;\n  width: 100%;\n  padding-left: 25px;\n  border: 0;\n}\n.el-form-item .iconame {\n  z-index: 999;\n  position: absolute;\n  top: 20px;\n  left: 0;\n  background: url(\"/static/login-icon1.png\") no-repeat;\n  background-size: 21px 22px;\n  height: 18px;\n  width: 18px;\n}\n.el-form-item .icopwd {\n  z-index: 999;\n  position: absolute;\n  top: 20px;\n  left: 0;\n  background: url(\"/static/login-icon2.png\") no-repeat;\n  background-size: 21px 22px;\n  height: 18px;\n  width: 18px;\n}\n.el-form-item__error {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.loginbtn {\n  border-radius: 30px;\n  display: block;\n  margin-top: 50px;\n  width: 100%;\n  background: #cae6e8;\n}\ninput:-webkit-autofill {\n  -webkit-box-shadow: 0 0 0px 1000px white inset !important;\n          box-shadow: 0 0 0px 1000px white inset !important;\n}\ninput:-webkit-autofill:focus {\n  -webkit-box-shadow: 0 0 0px 1000px white inset !important;\n          box-shadow: 0 0 0px 1000px white inset !important;\n}\n.login-container .el-button--primary {\n  background-color: #cae6e8 !important;\n  border-color: #cae6e8 !important;\n}\n", ""]);

// exports


/***/ })

});