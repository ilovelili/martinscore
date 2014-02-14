/**
 * Created by mj on 14/02/14.
 */
//Size refers to size and position...
var Wrapper = function (sType, sSize) {
    WrapperComponent.apply(this);
    this.oIterator = null;
    this.aWrapperComponents = [];
    this.sType = sType;
    this.sSize = sSize;
    this.createIterator = function () {
        throw new Error("This method must be overwritten!");
    };
};

Wrapper.prototype = new WrapperComponent();
Wrapper.prototype.add = function (oWrapperComponent) {
    this.aWrapperComponents.push(oWrapperComponent);
};
Wrapper.prototype.remove = function (oWrapperComponent) {
    var aWrapperItems = [];
    var nWrapperItem = 0;
    var nLenWrapperItems = this.aWrapperComponents.length;
    var oItem = null;

    for (; nWrapperItem < nLenWrapperItems;) {
        oItem = this.aWrapperComponents[nWrapperItem];
        if (oItem !== oWrapperComponent) {
            aWrapperItems.push(oItem);
        }
        nWrapperItem = nWrapperItem + 1;
    }
    this.aWrapperComponents = aWrapperItems;
};
Wrapper.prototype.getChild = function (nIndex) {
    return this.aWrapperComponents[nIndex];
};
Wrapper.prototype.getType = function () {
    return this.sType;
};
Wrapper.prototype.getSize = function () {
    return this.sSize;
};
Wrapper.prototype.createIterator = function () {
    if (this.oIterator === null) {
        this.oIterator = new CompositeIterator(new ConvertToIterator(this.aWrapperComponents));
    }
    return this.oIterator;
};
Wrapper.prototype.map = function () {
    var nWrapperItem = 0;
    var nLenWrapperItems = this.aWrapperComponents.length;
    for (; nWrapperItem < nLenWrapperItems;) {
        this.aWrapperComponents[nWrapperItem].map(this.sType, this.sSize);
        nWrapperItem = nWrapperItem + 1;
    }
};

