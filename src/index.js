import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />, document.getElementById('root'));

reportWebVitals();