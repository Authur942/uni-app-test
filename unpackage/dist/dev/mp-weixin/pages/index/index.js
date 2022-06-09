"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "Hello"
    };
  },
  onLoad(OBJ) {
    console.log(this.title);
    console.log(this);
    const _this = this;
    common_vendor.index.$on("toIndex", function(data) {
      _this.title = data.msg;
    });
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.title)
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/myProject/uni-app-test/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
