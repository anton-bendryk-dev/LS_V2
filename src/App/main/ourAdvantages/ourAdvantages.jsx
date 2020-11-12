import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const OurAdvantages = () => {
    return(
        <section className="ourAdvantages-container">
                <div className="inline-wrapper">
                    <div className="inline-ourAdvantages">
                        <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce="true" className="ourAdvantagesH3">
                            <h3>Наши преимущества :</h3>
                        </ScrollAnimation>
                        <div className="advantageBoy"></div>
                    </div>
                    <div className="ourAdvantages">
                        <ScrollAnimation animateIn="animate__fadeInRight"  animateOnce="true" className="advantage">
                            <div className="advantageImg-box benefit1"></div>
                            <div className="advantageText-box">Получите груз вовремя, в установленные сроки</div>
                            <ScrollAnimation animateIn="animate__bounceIn"  delay="1000" animateOnce="true" className="check"></ScrollAnimation>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="animate__fadeInRight"  animateOnce="true" className="advantage">
                            <div className="advantageImg-box benefit2"></div>
                            <div className="advantageText-box">Оперативно отправляем все закрывающие документы</div>
                            <ScrollAnimation animateIn="animate__bounceIn" delay="1000" animateOnce="true" className="check"></ScrollAnimation>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="animate__fadeInRight"  animateOnce="true" className="advantage">
                            <div className="advantageImg-box benefit3"></div>
                            <div className="advantageText-box">Вы всегда можете узнать местонахождение Вашего груза</div>
                            <ScrollAnimation animateIn="animate__bounceIn" delay="1000" animateOnce="true" className="check"></ScrollAnimation>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="animate__fadeInRight"  animateOnce="true" className="advantage">
                            <div className="advantageImg-box benefit5"></div>
                            <div className="advantageText-box">Каждому клиенту мы выделяем личного менеджера, для связи</div>
                            <ScrollAnimation animateIn="animate__bounceIn" delay="1000" animateOnce="true" className="check"></ScrollAnimation>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="animate__fadeInRight"  animateOnce="true" className="advantage">
                            <div className="advantageImg-box benefit4"></div>
                            <div className="advantageText-box">Наши цены одни из самых конкурентных на рынке</div>
                            <ScrollAnimation animateIn="animate__bounceIn" delay="1000" animateOnce="true" className="check"></ScrollAnimation>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="animate__fadeInRight"  animateOnce="true" className="advantage">
                            <div className="advantageImg-box benefit6"></div>
                            <div className="advantageText-box">Гарантии сохранности груза от момента получения до сдачи</div>
                            <ScrollAnimation animateIn="animate__bounceIn" delay="1000" animateOnce="true" className="check"></ScrollAnimation>
                        </ScrollAnimation>
                    </div>
                </div>
        </section>
    )
}

export default OurAdvantages