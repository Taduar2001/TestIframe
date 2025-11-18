System.register("chunks:///_virtual/main",["./test.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/test.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,n,r,o,s;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,r=t._decorator,o=t.screen,s=t.Component}],execute:function(){var c;n._RF.push({},"0e5ab8FK9pN9q6ixgyCgMVd","test",void 0);var u=r.ccclass;r.property,t("test",u("test")(c=function(t){function n(){return t.apply(this,arguments)||this}e(n,t);var r=n.prototype;return r.start=function(){},r.onFullscreen=function(){o.requestFullScreen()},n}(s))||c);n._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});