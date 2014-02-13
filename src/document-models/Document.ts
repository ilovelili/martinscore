import IObservable = require('../framework/IObservable');
import Observable = require('../framework/Observable');
import Set = require('../framework/Set');
import Page = require('./Page');

class Document implements IObservable {
    width:number;
    height:number;
    pages:Set<Page>;

    constructor() {
        Observable.call(this);
        Observable.defineProperty(this, 'width', 793);
        Observable.defineProperty(this, 'height', 1122);
        Observable.defineSet(this, 'pages');
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

export = Document;