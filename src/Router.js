import React from 'react';
import {
    Router,
    Switch,
    Route,
} from 'react-router-dom';
import history from './history';
import ScrollReset from './components/ScrollReset';
import Home from './views/home/Home';
import Swipe from './views/swipe/Swipe';
import ReservationDetails from './views/reservation_details/ReservationDetails';
import CreateKey from './views/create_key/CreateKey';
import KeyReady from './views/key_ready/KeyReady';

const AppRouter = () => (
    <Router history={ history }>
        <ScrollReset>
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route exact path="/swipe" component={ Swipe } />
                <Route exact path="/reservation-details" component={ ReservationDetails } />
                <Route exact path="/create-key" component={ CreateKey } />
                <Route exact path="/key-ready" component={ KeyReady } />
            </Switch>
        </ScrollReset>
    </Router>
)


export default AppRouter;