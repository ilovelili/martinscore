import IObservable = require('./IObservable');
import Set = require('./Set');

class Observable implements IObservable {
    private __observers__:Array<(message:any)=>void>;

    constructor() {
        Object.defineProperty(this, '__observers__', {
            enumerable: false,
            writable: false,
            value: []
        });
    }

    observe(observer:(message:any)=>void) {
        this.__observers__.push(observer);
    }

    unobserve(observer:(message:any)=>void) {
        var index = this.__observers__.lastIndexOf(observer);
        if (index >= 0) {
            this.__observers__.splice(index, 1);
        }
    }

    notify(message:any) {
        this.__observers__.forEach(observer => observer(message));
    }

    static defineProperty(target:IObservable, name:string, value?:any) {
        Object.defineProperty(target, name, {
            enumerable: true,
            get: function () {
                return value;
            },
            set: function (newValue) {
                if (newValue === value) return;
                var message = {
                    type: 'propertychange',
                    target: target,
                    name: name,
                    oldValue: value,
                    newValue: newValue
                };
                value = newValue;
                target.notify(message);
            }
        });
    }

    static defineSet(target:IObservable, name:string) {
        var set = new Set();

        set.add = function (value) {
            var oldSize = set.size;
            Set.prototype.add.call(set, value);
            if (set.size != oldSize) {
                target.notify({
                    type: 'setaddvalue',
                    target: target,
                    name: name,
                    set: set,
                    value: value
                });
            }
            return set;
        };

        set.delete = function (value) {
            var success = Set.prototype.delete.call(set, value);
            if (success) {
                target.notify({
                    type: 'setdeletevalue',
                    target: target,
                    name: name,
                    set: set,
                    value: value
                });
            }
            return success;
        };

        set.clear = function () {
            set.forEach(value => {
                set.delete(value);
            });
        };

        Object.defineProperty(target, name, {
            enumerable: true,
            writable: false,
            value: set
        });
    }
}

export = Observable;