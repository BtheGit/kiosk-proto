import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './redux/store';
import Router from './Router';

const App = () => (
    <Provider store={ store } >
        <Router/>
    </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
