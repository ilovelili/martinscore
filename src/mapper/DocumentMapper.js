var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", './AbstractMapper'], function(require, exports, AbstractMapper) {
    var DocumentMapper = (function (_super) {
        __extends(DocumentMapper, _super);
        function DocumentMapper() {
            _super.apply(this, arguments);
        }
        DocumentMapper.prototype.map = function (element, container) {
        };
        return DocumentMapper;
    })(AbstractMapper);

    
    return DocumentMapper;
});
//# sourceMappingURL=DocumentMapper.js.map
