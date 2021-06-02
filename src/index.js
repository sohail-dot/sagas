import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css'
import {createStore,applyMiddleware,compose} from 'redux';
import reducer from './store/reducer'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import createSagaMiddleWare from 'redux-saga'
import rootSaga from './saga/api';

const sagaMiddleWare = createSagaMiddleWare()
const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,devTools(applyMiddleware(thunk,sagaMiddleWare)));
sagaMiddleWare.run(rootSaga)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
