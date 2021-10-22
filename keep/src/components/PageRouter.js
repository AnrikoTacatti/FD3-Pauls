import React from 'react';
import { Route } from 'react-router-dom';

import AboutPage from '../page/AboutPage';
import TaskChapter from '../components/TaskChapter';
/*  Route path="/client/:clid" component={Page_Client} */
class PageRouter extends React.Component {

    render() {

        return (
            <div>
                <Route path="/" exact component={TaskChapter} />
                <Route path="/:chapter" component={TaskChapter} />
                <Route path="/about" exact component={AboutPage} />


            </div>
        );

    }

}

export default PageRouter;