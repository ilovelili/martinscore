/**
 * Created by Mj on 14/02/14.
 */
var WrapperItem = function(sType, sSize){
    WrapperComponent.apply(this);
    this.sType = sType;
    this.sSize = sSize;
};
WrapperItem.prototype = new WrapperComponent();
WrapperItem.prototype.getType = function(){
    return this.sType;
};
WrapperItem.prototype.getSize = function(){
    return this.sSize;
};
WrapperItem.prototype.createIterator = function(){
    return new NullIterator();
};
WrapperItem.prototype.map = function(){
    switch (this.sType){
        case 'doc':
            //CreateService.createContainer(this.sSize);
            break;
        case 'page':
            //CreateService.createSVG(this.sSize);
            break;
        default :
            //svg element including line, rectangle, circle...
            //CreateService.createSVGElement(this.sType, this.sSize);
            break;
    }
}

