"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  onLoad() {
    console.log("onload");
  },
  onShow() {
    console.log("onshow");
  },
  onReady() {
    console.log("onready");
  },
  onHide() {
    console.log("onhide");
  },
  data() {
    return {
      name: "\u5173\u4E8E\u6211"
    };
  },
  methods: {
    hello() {
      console.log("say hello");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.name),
    b: common_vendor.o((...args) => $options.hello && $options.hello(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/myProject/uni-app-test/pages/aboutMe/aboutMe.vue"]]);
wx.createPage(MiniProgramPage);
