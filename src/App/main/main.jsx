import React from 'react';
import { Route } from 'react-router-dom';
import DefaultPage from './defaultPage/defaultPage';
import Partners from './partners/partners';

const Main = () => {
return (
    <main>
        <Route exact path="/" component={DefaultPage}/>
        <Partners/>
    </main>
);
}

export default Main;