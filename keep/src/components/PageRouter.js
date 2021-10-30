import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AboutPage from '../page/AboutPage';
import TaskChapter from '../components/TaskChapter';
import NoMatch from '../page/NoMatch';

class PageRouter extends React.Component {

    render() {

        return (
            <div>



                <Switch>
                    <Route path="/" exact component={TaskChapter} />
                    <Route path="/about" exact component={AboutPage} />
                    <Route path="/chapter/:chapter" component={TaskChapter} />
                    <Route path="*" component={NoMatch} />
                </Switch>


            </div>
        );

    }

}

export default PageRouter;