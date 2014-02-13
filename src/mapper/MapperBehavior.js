define(["require", "exports"], function(require, exports) {
    var MapperBehavior = (function () {
        function MapperBehavior() {
        }
        MapperBehavior.prototype.onObserve = function (handler) {
            this.observeHandler = handler;
            return this;
        };

        MapperBehavior.prototype.onUnobserve = function (handler) {
            this.unobserverHandler = handler;
            return this;
        };

        MapperBehavior.prototype.map = function (template, container) {
            this.observeHandler.call(this, template, container);
        };

        MapperBehavior.prototype.unmap = function (template, container) {
            this.unobserverHandler.call(this, template, container);
        };
        return MapperBehavior;
    })();

    
    return MapperBehavior;
});
//# sourceMappingURL=MapperBehavior.js.map
