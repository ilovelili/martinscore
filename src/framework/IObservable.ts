interface IObservable {
    observe(receiver:(message:any)=>void):void;
    unobserve(receiver:(message:any)=>void):void;
    notify(message:any):void;
}

export = IObservable;