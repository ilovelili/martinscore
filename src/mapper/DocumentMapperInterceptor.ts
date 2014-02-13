import IMapperInterceptor = require('./IMapperInterceptor');
import IObservable = require('../framework/IObservable');
import Element = require('../document-models/Element');

class DocumentMapperInterceptor implements IMapperInterceptor {
    map(template: IObservable, container: Element) {

    }

    unmap(template: IObservable, container: Element) {

    }
}

export = DocumentMapperInterceptor;