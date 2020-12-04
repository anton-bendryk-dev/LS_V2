import React from 'react';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
const Services = () => {
    return (
        <section className="services-container">
            <div className="inline-wrapper">
                <div className="col-w40">
                    <div className="service-bg">
                        <h3>Мы предоставляем такие услуги:</h3>
                    </div>
                </div>
                <div className="col-w60">
                    <div className="trucks-container">
                        <div className="truck-box">
                            <ScrollAnimation animateIn="animate__fadeInRight" animateOnce="true" className="truck truck6">
                                        <p>автоперевозки (экспорт, импорт)</p>
                                        <p>Европа и СНГ</p>
                            </ScrollAnimation>
                        </div>
                        <div className="truck-box">
                            <ScrollAnimation animateIn="animate__fadeInRight" animateOnce="true" className="truck truck2">
                                <p>автоперевозки опасных грузов</p>
                                <p>ADR всех классов</p>
                            </ScrollAnimation>
                        </div>
                        <div className="truck-box">
                            <ScrollAnimation animateIn="animate__fadeInRight" animateOnce="true" className="truck truck3">
                                <p>автоперевозки по всей</p>
                                <p>территории Украины</p>
                            </ScrollAnimation>
                        </div>
                        <div className="truck-box">
                            <ScrollAnimation animateIn="animate__fadeInRight" animateOnce="true" className="truck truck5">
                                <p>консолидированные перевозки</p>
                                <p>по всем направлениям</p>
                            </ScrollAnimation>
                        </div>
                        <div className="truck-box">
                            <ScrollAnimation animateIn="animate__fadeInRight" animateOnce="true" className="truck truck6">
                                <p>помощь в брокерских</p>
                                <p>услугах</p>
                            </ScrollAnimation>
                        </div>
                        <div className="truck-box">
                            <ScrollAnimation animateIn="animate__fadeInRight" animateOnce="true" className="truck truck1">
                                <p>автомобильная перевозка</p>
                                <p>грузов от 1 тонны до 20 тонн</p>
                            </ScrollAnimation>
                        </div>
                        <div className="truck-box">
                            <ScrollAnimation animateIn="animate__fadeInRight" animateOnce="true" className="truck truck5">
                                <p>предоставление полного пакета</p>
                                <p>бухгалтерских документов</p>
                            </ScrollAnimation>
                        </div>
                        <div className="truck-box">
                            <ScrollAnimation animateIn="animate__fadeInRight" animateOnce="true" className="truck truck4">
                                <p>перевозки грузов с особым </p>
                                <p>температурным режимом</p>
                            </ScrollAnimation>
                        </div>
                        <div className="truck-box">
                            <ScrollAnimation animateIn="animate__fadeInRight" animateOnce="true" className="truck truck7">
                                <p>перевозка негабаритных</p>
                                <p>и тяжеловесных грузов</p>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Services