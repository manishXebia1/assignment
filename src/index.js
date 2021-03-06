import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './Store/reducer';


// //set up the interceptors!
// import { NetworkService } from './network-service';
// NetworkService();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
  
);

