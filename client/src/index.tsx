import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MainInterface from './MainInterface';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <MainInterface />,
  document.getElementById('mainContent') as HTMLElement
);