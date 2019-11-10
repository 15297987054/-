import {createStore,combineReducers,applyMiddleware} from "redux";
import goods from "./reducer/goods";
import discount from "./reducer/discount";
import basketball from "./reducer/basketball";
import running from "./reducer/running";
import hit from "./reducer/hit";
import football from "./reducer/football";
import freestyle from "./reducer/freestyle";
import digital from "./reducer/digital";
import detail from "./reducer/detail"
import reduxThunk from "redux-thunk";
import shopcar from "./reducer/shopcar";
import equip from "./reducer/equip";
import search from './reducer/search';
import login from './reducer/login';
import discoverlist from './reducer/discoverlist'
const reducer=combineReducers({
    goods,
    discount,
    basketball,
    hit,
    running,
    football,
    freestyle,
    digital,
    detail,
    shopcar,
    equip,
    search,
    login,
    discoverlist
})

const store=createStore(reducer,applyMiddleware(reduxThunk));
export default store;