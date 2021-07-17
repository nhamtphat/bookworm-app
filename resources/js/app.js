import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router'
import {createStore} from "redux";
import rootReducer from './_store/reducers';
import {Provider} from "react-redux";

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById('root')
);
