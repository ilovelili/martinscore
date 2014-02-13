import IObservable = require('../framework/IObservable');
import Observable = require('../framework/Observable');
import Set = require('../framework/Set');
import Element = require('./Element');

class Page implements IObservable {
    elements:Set<Element>;

    constructor() {
        Observable.call(this);
        Observable.defineSet(this, 'elements');
    }

    observe(observer:(message:any)=>void) {
        Observable.prototype.observe.call(this, observer);
    }

    unobserve(observer:(message:any)=>void) {
        Observable.prototype.unobserve.call(this, observer);
    }

    notify(message:any) {
        Observable.prototype.notify.call(this, message);
    }
}

export = Page;