import React from 'react';
import { Route } from 'react-router-dom';
import DefaultPage from './defaultPage/defaultPage';
import Partners from './partners/partners';
import Geography from './geography/geography';

const Main = () => {
return (
    <main>
        <Route exact path="/" component={DefaultPage}/>
        <Route path="/Geography" component={Geography}/>
        <Partners/>
    </main>
);
}

export default Main;