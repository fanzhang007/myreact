import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import publicReducer from './_public/store'

const initialState = window.___INITIAL_STATE__;

// 创建公共的reducers
const makeRootReducer = asyncReducers => {
    return combineReducers({
        publicdata: publicReducer,
        ...asyncReducers
    });
};

const store = createStore(
    makeRootReducer({}),
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
)

// 存放异步新增的reducer
store.asyncReducers = {};
// 异步reducer注入方式
export const injectReducer = (key, reducer) => {
    if(Object.hasOwnProperty.call(store.asyncReducers, key)) return;

    store.asyncReducers[key] = reducer;
    store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default store