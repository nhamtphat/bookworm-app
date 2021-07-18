import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router'
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {store, persistor} from "./_store";

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Router />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);
