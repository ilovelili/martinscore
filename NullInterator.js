/**
 * Created by mj on 14/02/14.
 */
var NullIterator = function(){
    Iterator.apply(this);
    this.next = function(){
        return null;
    };
    this.hasNext = function(){
        return false;
    };
    this.remove = function(){
        throw new Error("You can't remove nothing!");
    };
};


