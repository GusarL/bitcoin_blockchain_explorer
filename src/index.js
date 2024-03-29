import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Moment from 'react-moment';

import { Provider } from 'react-redux';
import store from './redux/store';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

const rootElement = document.getElementById('root');
Moment.globalFormat = 'YYYY-MM-DD HH:mm:ss';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/home" exact component={App} />
        <Redirect exact from="/" to="/home" />
      </Switch>
    </Router>
  </Provider>,
  rootElement);

