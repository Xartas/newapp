import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// pobieranie elementu html z index.html w którym zostanie wyrenderowana aplikacja
const root = document.getElementById('root');
// renderowanie aplikacji
ReactDOM.render(<App />, root);
