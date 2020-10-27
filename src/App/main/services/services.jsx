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
                    <div className="road-container"></div>
                </div>
                <div className="col-w60">
                    <div className="trucks-container">
                        <div className="truck-box">
                            <ScrollAnimation animateIn="animate__fadeInRight" animateOnce="true" className="truck truck1">
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
                            <ScrollAnimation animateIn="animate__fadeInRight" animateOnce="true" className="truck truck1">
                                <p>автоперевозки по всей территории</p>
                                <p>Украины</p>
                            </ScrollAnimation>
                        </div>
                        <div className="truck-box">
                            <ScrollAnimation animateIn="animate__fadeInRight" animateOnce="true" className="truck truck2">
                                <p>консолидированные перевозки</p>
                                <p>по всем направлениям</p>
                            </ScrollAnimation>
                        </div>
                        <div className="truck-box">
                            <ScrollAnimation animateIn="animate__fadeInRight" animateOnce="true" className="truck truck1">
                                <p>помощь в брокерских услугах</p>
                                <p></p>
                            </ScrollAnimation>
                        </div>
                        <div className="truck-box">
                            <ScrollAnimation animateIn="animate__fadeInRight" animateOnce="true" className="truck truck2">
                                <p>автомобильная перевозка грузов</p>
                                <p>от 1 тонны до 20 тонн</p>
                            </ScrollAnimation>
                        </div>
                        <div className="truck-box">
                            <ScrollAnimation animateIn="animate__fadeInRight" animateOnce="true" className="truck truck1">
                                <p>предоставление полного пакета</p>
                                <p>бухгалтерских документов</p>
                            </ScrollAnimation>
                        </div>
                        <div className="truck-box">
                            <ScrollAnimation animateIn="animate__fadeInRight" animateOnce="true" className="truck truck2">
                                <p>перевозки грузов с особым </p>
                                <p>температурным режимом</p>
                            </ScrollAnimation>
                        </div>
                        <div className="truck-box">
                            <ScrollAnimation animateIn="animate__fadeInRight" animateOnce="true" className="truck truck1">
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