import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { Provider } from 'react-redux';
import store from './redux/store';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

const rootElement = document.getElementById('root');
const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/home" exact component={App} />
        <Redirect exact from="/" to="/home" />
      </Switch>
    </Router>
  </Provider>,
  rootElement);

