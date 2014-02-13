import IMapperInterceptor = require('./IMapperInterceptor');
import MapperBehavior = require('./MapperBehavior');
import IObservable = require('../framework/IObservable');
import Element = require('../document-models/Element');

class MapperAction {
    private interceptor: IMapperInterceptor;
    private mapperBehavior: MapperBehavior;

    constructor(interceptor: IMapperInterceptor) {
        this.interceptor = interceptor;
        this.mapperBehavior = new MapperBehavior()
            .onObserve(this.interceptor.map)
            .onUnobserve(this.interceptor.unmap);
    }

    //execute(template: IObservable, container: Element) {
    //    if (this.isObserve) {
    //        this.map(template, container);
    //    }
    //    if (this.isUnObserve) {
    //        this.unmap(template, container);
    //    }
    //}

    map(template: IObservable, container: Element) {
        this.mapperBehavior.map(template, container);
    }
    unmap(template: IObservable, container: Element) {
        this.mapperBehavior.unmap(template, container);
    }
}

export = MapperAction;