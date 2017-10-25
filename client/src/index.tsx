import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MainInterface from './MainInterface';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <Router>
      <div>
        <Route exact={true} path="/" component={MainInterface} />
       </div>
  </Router>,
  document.getElementById('mainContent') as HTMLElement
);