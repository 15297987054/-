import {createStore,combineReducers,applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import user from './reducer/user'
const reducer=combineReducers({
    user
})

const store=createStore(reducer,applyMiddleware(reduxThunk));
export default store;