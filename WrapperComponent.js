/**
 * Created by mj on 14/02/14.
 */
var WrapperComponent = function(){
};
WrapperComponent.prototype.getType = function(){
    throw new Error("This method must be overwritten!");
};
WrapperComponent.prototype.getSize = function(){
    throw new Error("This method must be overwritten!");
};
WrapperComponent.prototype.getChild = function(){
    throw new Error("This method must be overwritten!");
};
WrapperComponent.prototype.createIterator = function(){
    throw new Error("This method must be overwritten!");
};
WrapperComponent.prototype.map = function(){
    throw new Error("This method must be overwritten!");
};