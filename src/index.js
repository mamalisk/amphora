import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { marketingStore } from './state/Store';
ReactDOM.render(<App marketingStore={marketingStore} />, document.getElementById('root'));
serviceWorker.unregister();
