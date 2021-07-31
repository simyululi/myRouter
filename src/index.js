import {HashRouter} from "./hash";
import {HistoryRouter} from "./history";
import { RouteList } from "./routeList"

const MODE='hash';

class router {
    constructor({ mode = 'hash', routeList}) {
        this.router = mode === 'hash' ? new HashRouter(routeList) : new HistoryRouter(routeList)
    }
    push(path){
        this.router.push(path);
    }
    replace(path){
        this.router.replace(path);
    }
    go(num){
        this.router.go(num);
    }

}

const myRouter = new router({
    mode : MODE,
    routeList : RouteList
})
