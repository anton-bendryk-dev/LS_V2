import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const HowItWork = () => {
    return (
        <section className="HowItWork-container">
            <div className="inline-wrapper">
                <div className="HowItWork">
                    <div className="HowItWork-box">
                        <h3>КАК ЭТО РАБОТАЕТ ?</h3>
                    </div>
                    <div className="HowItWork-box">
                        <ul>Для начала нашего сотрудничества, необходимо выполнить следующие шаги:</ul>
                        <ScrollAnimation animateIn="animate__rotateInUpLeft" animateOnce="true" duration="1" delay="1000">
                        <li>Оставить заявку на доставку груза;</li>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="animate__rotateInUpLeft" animateOnce="true" duration="2" delay="1000">
                        <li>Мы рассчитываем стоимость доставки, маршрут, сроки доставки;</li>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="animate__rotateInUpLeft" animateOnce="true" duration="3" delay="1000">
                        <li>Заключаем с Вами договор и оформляем все необходимые документы;</li>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="animate__rotateInUpLeft" animateOnce="true" duration="4" delay="1000">
                        <li>Осуществляем перевозку груза в указанное место и сроки согласно договора;</li>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="animate__rotateInUpLeft" animateOnce="true" duration="5" delay="1000">
                        <li>После того, как вы получили груз , Вы совершаете оплату удобным для Вас способом и подписываете все закрывающие документы.</li>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWork