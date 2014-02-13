class Set<T> {
    private __data__:Array<T>;

    constructor() {
        this.__data__ = [];
    }

    add(value:T) {
        if (!this.has(value))
            this.__data__.push(value);
        return this;
    }

    clear() {
        this.__data__.length = 0;
    }

    delete(value:T) {
        var index = this.__data__.indexOf(value);
        if (index >= 0) {
            this.__data__.splice(index, 1);
            return true;
        } else {
            return false;
        }
    }

    forEach(callbackfn:(value:T, index:T, set:Set<T>)=>void, thisArg?:any) {
        for (var index = 0; index < this.__data__.length; index++) {
            var value = this.__data__[index];
            callbackfn.call(thisArg, value, index, this);
        }
    }

    has(value:T) {
        var index = this.__data__.indexOf(value);
        return index >= 0;
    }

    get size() {
        return this.__data__.length;
    }
}

export = Set;