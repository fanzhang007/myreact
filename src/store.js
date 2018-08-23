import { createStore, combineReducers } from 'redux';
import reducer from './store/index'

const initialState = window.___INITIAL_STATE__;

const store = createStore(
    combineReducers({
        appstore: reducer
    }),
    initialState
)

export default store