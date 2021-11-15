import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AboutPage from '../page/AboutPage';
import TaskChapterContainer from '../components/TaskChapterContainer';
import MainContainer from '../components/MainContainer';
import SearchContainer from '../components/SearchContainer';
import PinContainer from '../components/PinContainer';
import NoMatch from '../page/NoMatch';

class PageRouter extends React.Component {

    render() {

        return (




            <Switch>
                <Route path="/FD3-Pauls/keep/public/" exact component={MainContainer} />
                <Route path="/FD3-Pauls/keep/public/about" exact component={AboutPage} />
                <Route path="/FD3-Pauls/keep/public/serch" exact component={SearchContainer} />
                <Route path="/FD3-Pauls/keep/public/pin" exact component={PinContainer} />
                <Route path="/FD3-Pauls/keep/public/chapter" exact component={TaskChapterContainer} />
                <Route path="/FD3-Pauls/keep/public/chapter/:chapter" component={TaskChapterContainer} />
                <Route path="*" component={NoMatch} />
            </Switch>



        );

    }

}

export default PageRouter;