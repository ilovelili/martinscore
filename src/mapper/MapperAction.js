define(["require", "exports", './MapperBehavior'], function(require, exports, MapperBehavior) {
    var MapperAction = (function () {
        function MapperAction(interceptor) {
            this.interceptor = interceptor;
            this.mapperBehavior = new MapperBehavior().onObserve(this.interceptor.map).onUnobserve(this.interceptor.unmap);
        }
        //execute(template: IObservable, container: Element) {
        //    if (this.isObserve) {
        //        this.map(template, container);
        //    }
        //    if (this.isUnObserve) {
        //        this.unmap(template, container);
        //    }
        //}
        MapperAction.prototype.map = function (template, container) {
            this.mapperBehavior.map(template, container);
        };
        MapperAction.prototype.unmap = function (template, container) {
            this.mapperBehavior.unmap(template, container);
        };
        return MapperAction;
    })();

    
    return MapperAction;
});
//# sourceMappingURL=MapperAction.js.map
