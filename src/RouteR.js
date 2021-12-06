class Router{
    routes =[];
    mode =null;
    root= '/';
    constructor(options){
        this.mode= window.history.pushState ? 'history': 'hash';
        if (options.mode) this.mode=options.mode;
        if (options.root) this.root = options.root;
    }

    add =(path, cb)=> {
        for(let i=0; i< this.routes.length; i+=1) {
            if (this.routes[i].path === path){
                this.routes.slice(i,1);
                return this;
        
            }
        }
        return this;
    };
    flush =() => {
        this.routes =[];
        return this;
    };
}
export default Router