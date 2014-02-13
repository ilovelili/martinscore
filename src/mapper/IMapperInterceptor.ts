import IObservable = require('../framework/IObservable');
import Element = require('../document-models/Element');

interface IMapperInterceptor {
    map(template: IObservable, container: Element): void;
    unmap(template: IObservable, container: Element): void;
}

export = IMapperInterceptor;