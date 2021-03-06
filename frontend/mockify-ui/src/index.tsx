import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
ReactDOM.render(
  <Provider store={store}>
    <div className="ui container">
      <App />
    </div>
  </Provider>,
  document.querySelector('#root')
);
