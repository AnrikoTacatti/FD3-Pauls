import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AboutPage from '../page/AboutPage';
import TaskChapter from '../components/TaskChapter';
import Main from '../components/Main';
import Search from '../components/Search';
import Pin from '../components/Pin';
import NoMatch from '../page/NoMatch';

class PageRouter extends React.Component {

    render() {

        return (




            <Switch>
                <Route path="./" exact component={Main} />
                <Route path="./about" exact component={AboutPage} />
                <Route path="./serch" exact component={Search} />
                <Route path="./pin" exact component={Pin} />
                <Route path="./chapter" exact component={TaskChapter} />
                <Route path="./chapter/:chapter" component={TaskChapter} />
                <Route path="*" component={NoMatch} />
            </Switch>



        );

    }

}

export default PageRouter;