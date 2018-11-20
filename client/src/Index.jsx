import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import store from './store';
import Header from './components/Common/Header';
import NotFound from './components/Common/NotFound';
import Grocery from './components/Grocery/Grocery';
import './styles/index.scss';

const App = () => (
  <BrowserRouter>
    <Fragment>
      <Header />
      <Switch>
        <Route path="/" exact component={Grocery} />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

ReactDOM.render(<Provider store={store}><App /></Provider>,
  document.getElementById('root'));