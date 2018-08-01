import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'

const onSubmit = (state = [], action) => {
    
    if (action.type === 'ON_SUBMIT') {
        console.log(action.payload)
        return [...state, action.payload]
    }
    return state
}

const storeInstance = createStore ( 
    combineReducers({
        onSubmit,
    }),
    applyMiddleware(logger)
   
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
