import React from 'react';
import { Route } from 'react-router-dom';
import DefaultPage from './defaultPage/defaultPage';
import Partners from './partners/partners';
import Geography from './geography/geography';
import Transport from './transport/transport';

const Main = () => {
return (
    <main>
        <Route exact path="/" component={DefaultPage}/>
        <Route path="/Geography" component={Geography}/>
        <Route path="/Transport" component={Transport}/>
        <Partners/>
    </main>
);
}

export default Main;