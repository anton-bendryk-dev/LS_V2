import React from 'react';
import Slider from './slider/slider';
import Services from './services/services';
import AboutCompany from './aboutCompany/aboutCompany';
import OurAdvantages from './ourAdvantages/ourAdvantages';
import HowItWork from './howItWork/howItWork'
const Main = () => {
return (
    <main>
        <Slider/>
        <AboutCompany/>
        <Services/>
        <OurAdvantages/>
        <HowItWork/>
    </main>
);
}

export default Main;