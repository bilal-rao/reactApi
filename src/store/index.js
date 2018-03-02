import React from 'react';
import {createStore,applyMiddleware} from 'redux';
import checkData from './reducer/checkData';
import thunk from 'redux-thunk';


const middleware = applyMiddleware(thunk);

let store = createStore(
    checkData,
    middleware
);

export default store;