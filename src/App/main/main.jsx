import React from 'react';
import Slider from './slider/slider';
import Services from './services/services';
import AboutCompany from './aboutCompany/aboutCompany';
import OurAdvantages from './ourAdvantages/ourAdvantages';

const Main = () => {
return (
    <main>
        <Slider/>
        <AboutCompany/>
        <Services/>
        <OurAdvantages/>
    </main>
);
}

export default Main;