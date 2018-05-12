import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './redux/store';
import Router from './Router';
import Background from './components/Background';

const App = () => (
    <Provider store={ store } >
        <Background>
            <Router/>
        </Background>
    </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
