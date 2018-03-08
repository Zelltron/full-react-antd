import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { BrowserRouter  } from 'react-router-dom';

import reduxThunk from 'redux-thunk';

import App from './App';

import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
