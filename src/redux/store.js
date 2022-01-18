import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';
//const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ||  compose
const store=createStore(reducer,composeWithDevTools(applyMiddleware(ReduxThunk)));
export default store;