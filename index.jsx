import ReactDOM from 'react-dom';
import React from 'react';

import App from './src';

const mountNode = document.getElementById('app');
ReactDOM.render(<App name="World" />, mountNode);
