import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { routes } from '../constants/routes';
import { createBrowserHistory } from 'history';
import MediaPlayer from '../components/MediaPlayer';
import Home from '../pages/Home';

const history = createBrowserHistory();
const RouterComponent = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route path={routes.HOME} exact component={Home} />
                <Route path={routes.MEDIA_PLAYER} exact component={MediaPlayer} />
            </Switch>
        </Router>
    );
}

export default RouterComponent;