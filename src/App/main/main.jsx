import React from 'react';
import Slider from './slider/slider';
import Services from './services/services';
import AboutCompany from './aboutCompany/aboutCompany';
const Main = () => {
return (
    <main>
        <Slider/>
        <AboutCompany/>
        <Services/>
    </main>
);
}

export default Main;