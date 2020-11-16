import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';



import { Router, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import history from './History';
import myReducer from './Redux/Reducers/index';


import Home from "./Component/Home"
import DefaultLayout from './Layout/DefaultLayout';
import PageDetail from './Component/PageDetail';
const myStore = createStore(myReducer);
console.log('Log: myStore', myStore.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore}>
      <Router history={history}>
        <Switch>
          <DefaultLayout exact path="/" component={Home} />
          <DefaultLayout exact path="/detail/:id" component={PageDetail} />
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
