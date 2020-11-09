import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
const Geography = () => {
    return (
        <section class="geography">
            <div className="inline-wrapper">
                <div className="geographyH2">
                    <h2><span>Г</span>
                    <ScrollAnimation animateIn="animate__slideInRight" animatePreScroll="false" offset="0" animateOnce="true">
                                <p>ЕОГРАФИЯ ГРУЗОПЕРЕВОЗОК</p>
                                <div className="globus"></div>
                    </ScrollAnimation>
                    </h2>
                </div>
            </div>
            <ScrollAnimation className="border-bottom" animateIn="animate__slideInRight" animatePreScroll="false" offset="0" animateOnce="true"></ScrollAnimation>
            <div className="inline-wrapper">
                <div className="geography-container">
                    <div className="gc-left">
                        <div className="lines-box">
                            <div className="lineToUp"></div>
                            <ScrollAnimation className="lineToLeft" animateIn="animate__rotateInUpLeft" animatePreScroll="false" animateOnce="true"></ScrollAnimation>
                            <ScrollAnimation className="lineToUp" animateIn="animate__slideInDown" animatePreScroll="false" animateOnce="true"></ScrollAnimation>
                            <ScrollAnimation className="lineToUp" animateIn="animate__slideInDown" animatePreScroll="false" animateOnce="true"></ScrollAnimation>
                            <ScrollAnimation className="lineToLeft" animateIn="animate__rotateInUpLeft" animatePreScroll="false" animateOnce="true"></ScrollAnimation>
                            <ScrollAnimation className="lineToUp" animateIn="animate__slideInDown" animatePreScroll="false" animateOnce="true"></ScrollAnimation>
                            <ScrollAnimation className="lineToUp" animateIn="animate__slideInDown" animatePreScroll="false" animateOnce="true"></ScrollAnimation>
                            <ScrollAnimation className="lineToLeft" animateIn="animate__rotateInUpLeft" animatePreScroll="false" animateOnce="true"></ScrollAnimation>
                        </div>
                        <div className="banners-container">
                            <div className="banner">
                                <div className="front-banner europe"><div className="inner"><span></span><h4>Европа</h4></div></div>
                                <div className="back-banner">
                                    <div className="inner">
                                        <p>Квалифицированные сотрудники нашей компании сделают быстрый просчет доставки Вашего груза из любой точки Европы. Основные направления с которыми мы работаем: Эстония, Латвия, Литва, Германия, Италия, Франция, Испания, Чехия, Голландия, Бельгия, Польша. Наш опыт гарантирует доставку Вашего груза в место назначение быстро и качественно.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="banner">
                                <div className="front-banner asia"><div className="inner"><span></span><h4>Азия</h4></div></div>
                                <div className="back-banner">
                                    <div className="inner">
                                        <p>Наша география перевозок, также осуществляется в странах Азии. Наши специалисты сделают точный расчет маршрута и доставят Ваш груз в такие города как: Астана, Ташкент, Душанбе, Самарканд, Шыкмент, Караганда. Мы доставим Ваш груз максимально комфортно и качественно, с предоставлением всей необходимой документациии.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="banner">
                                <div className="front-banner sng"><div className="inner"><span></span><h4>СНГ</h4></div></div>
                                <div className="back-banner">
                                    <div className="inner">
                                        <p>Компания «LOGISTICS SOLUTIONS» предоставляет услуги по перевозке грузов в страны СНГ и города России, такие как: Москва, Санкт-Петербург, Воронеж, Новосибирск, Челябинск, Минск. Благодаря высокой квалификации наших сотрудников, мы доставим Ваш груз качественно и без непредвиденных обстоятельств.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="gc-right">
                        <div className="geography-description-text">
                            <p>Международные перевозки в европейские страны, государств СНГ и Азии – это пересечение нескольких границ и множество возможных осложнений в международных грузоперевозках.</p>
                        </div>
                        <div className="geography-description-img"></div>
                        <p>Вам не придется подбирать транспорт, заниматься оформлением документации и решать десятки сопутствующих вопросов – все это команда «LOGISTICS SOLUTIONS» выполнит с минимальными временными затратами и на безупречном уровне. 
                            Международные грузоперевозки с нами становятся не только быстрее и выгоднее – Вы можете не сомневаться в том, что груз прибудет на место в сохранности и без задержек. Logistics Solutions оказывает услуги по комплексному сопровождению перевозок.
                            Клиенты доверяют не только полное логистическое и транспортное сопровождение, но и таможенное обслуживание. География грузоперевозок охватывает весь мир. Доставка грузов по Европе может осуществляться любыми видами транспорта. 
                            Опытные специалисты составят оптимальный маршрут доставки и в самые короткие сроки обеспечат транспортировку как генеральных, так и консолидированных (сборных) грузов.
                            В зависимости от объемов, срочности и направления транспортировки используются разные виды транспорта. При доставке грузов в/из отдаленных населенных пунктов популярны мультимодальные перевозки, при которых используются несколько видов транспорта.
                            </p>
                        <div className="delivery-map"></div>
                        <p>Не менее популярным направлением грузоперевозок является азиатское. Товары из Китая, Японии, Таиланда, Кореи и Индонезии доставляются в Украину сухопутным или морским путем. Они консолидируются на крупных складах перевозчика, затем регулярными рейсами отправляются к адресату.</p>
                        <div className="sng-img"></div>
                        <p>Основная сложность, с которой можно столкнуться при организации грузоперевозок в страны СНГ, — это сопроводительные документы и накладные на груз. В каждой из стран существуют свои правила и законы, регулирующие транспортировку различных грузов по их территории. Без надлежащего юридического образования разобраться в тонкостях законов может быть очень сложно.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Geography;