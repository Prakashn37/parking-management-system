import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import configStore from './configureStore'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
console.log('store', configStore().store)

const App = () => {
    return (
        <Provider store={configStore().store}>
            <PersistGate loading={null} persistor={configStore().persistor}>
                <AppRouter />
            </PersistGate>
        </Provider>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));