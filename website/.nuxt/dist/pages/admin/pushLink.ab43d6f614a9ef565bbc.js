webpackJsonp([34],{"1uaG":function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"",""])},"3Z8w":function(t,e,n){var a=n("1uaG");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("89b95b48",a,!0)},"RGT+":function(t,e,n){"use strict";var a=n("V8bM"),s=n("FhoZ"),o=n.n(s);e.a={layout:"admin",middleware:"adminRequired",head:function(){return{title:"提交链接"}},methods:{onPushLink:function(){var t=this;a.a.pushToBaidu({query:{type:"article"}}).then(function(){t.$Message.success({duration:o.a.messageDuration,closable:!0,content:"提交成功"})}).catch(function(e){t.$Message.error({duration:o.a.messageDuration,closable:!0,content:e.msg})})}}}},Sf4k:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Row",[n("Row",{staticClass:"admin-common-line"},[n("h2",{staticClass:"common-title-h"},[t._v("提交链接")])]),n("Row",[n("Row",[n("Button",{attrs:{type:"primary"},on:{click:t.onPushLink}},[t._v("提交")])],1)],1)],1)},s=[],o={render:a,staticRenderFns:s};e.a=o},Z4cs:function(t,e,n){"use strict";function a(t){n("3Z8w")}Object.defineProperty(e,"__esModule",{value:!0});var s=n("RGT+"),o=n("Sf4k"),i=n("VU/8"),r=a,c=i(s.a,o.a,!1,r,null,null);e.default=c.exports}});
//# sourceMappingURL=pushLink.ab43d6f614a9ef565bbc.js.map