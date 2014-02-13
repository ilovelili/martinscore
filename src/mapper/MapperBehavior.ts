import IObservable = require('../framework/IObservable');
import Element = require('../document-models/Element');

class MapperBehavior {
    private observeHandler: (template: IObservable, container: Element) => void;
    private unobserverHandler: (template: IObservable, container: Element) => void;

    onObserve(handler: (template: IObservable, container: Element) => void): MapperBehavior {
        this.observeHandler = handler;
        return this;
    }

    onUnobserve(handler: (template: IObservable, container: Element) => void): MapperBehavior {
        this.unobserverHandler = handler;
        return this;
    }

    map(template: IObservable, container: Element) {
        this.observeHandler.call(this, template, container);
    }

    unmap(template: IObservable, container: Element) {
        this.unobserverHandler.call(this, template, container);
    }
} 

export = MapperBehavior;