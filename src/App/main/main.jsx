import React from 'react';
import Slider from './slider/slider';
import Services from './services/services';
import AboutCompany from './aboutCompany/aboutCompany';
import OurAdvantages from './ourAdvantages/ourAdvantages';
import HowItWork from './howItWork/howItWork';
import Job from './job/job';

const Main = () => {
return (
    <main>
        <Slider/>
        <AboutCompany/>
        <Services/>
        <OurAdvantages/>
        <HowItWork/>
        <Job/>
    </main>
);
}

export default Main;