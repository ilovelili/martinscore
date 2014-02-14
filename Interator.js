/**
 * Created by mj on 14/02/14.
 */
var Iterator = function(){
    this.hasNext = function(){
        throw new Error("This method must be overwritten!");
    };
    this.next = function(){
        throw new Error("This method must be overwritten!");
    };
    this.remove = function(){
        throw new Error("This method must be overwritten!");
    };
};

