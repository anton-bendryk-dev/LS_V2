import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
const Transport = () => {
    return (
        <section className="transport-container">
            <div className="inline-wrapper">
                <div className="transportH2">
                    <h2><span>Т</span>
                    <ScrollAnimation animateIn="animate__slideInRight" animatePreScroll="false" offset="0" animateOnce="true">
                                <p>РАНСПОРТ, АВТОМОБИЛЬНЫЕ ГРУЗОПЕРЕВОЗКИ</p>
                                <ScrollAnimation animateIn="animate__fadeOutRightBig" animatePreScroll="false" offset="0" delay="1000" duration="10" animateOnce="true">
                                    <div className="truck-gif"></div>
                                </ScrollAnimation>
                    </ScrollAnimation>
                    </h2>
                </div>
            </div>
            <ScrollAnimation className="border-bottom" animateIn="animate__slideInRight" animatePreScroll="false" offset="0" animateOnce="true"></ScrollAnimation>
            <section className="transport-banner">
                <div className="inline-wrapper">
                    <div className="banner-text">
                        <p>Компания «LOGISTICS SOLUTIONS» предоставляет транспортно-логистические услуги для организация грузоперевозок автомобильным транспортом. Независимо от экономической ситуации на рынке, автомобильные перевозки – лидер в логистической отрасли. Международные перевозки грузов автомобилем востребованы, потому что товары транспортируют круглосуточно, т.к. автомобили не зависят от работы вокзалов, портов и аэропортов, поэтому доставка таким способом быстрая. Развитая система трасс позволяет составлять оптимальную схему перевозки.</p>
                    </div>
                </div>
            </section>
            <ScrollAnimation className="border-bottom" animateIn="animate__slideInRight" animatePreScroll="false" offset="0" animateOnce="true"></ScrollAnimation>
        </section>
    )
}

export default Transport;