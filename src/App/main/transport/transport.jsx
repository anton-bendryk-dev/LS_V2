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
                <div className="inline-wrapper">
                    <div className="transport-type-container">
                    <h3>Типы кузовов грузовых автомобилей</h3>
                        <section className="transport-box">
                            <div className="transport-card">
                                <div className="transport-card-content">
                                    <div className="transport-card-text">
                                        <h4 className="transport-card-name">Тентованый полуприцеп (еврофура)</h4>
                                        <p><span>Грузоподъемность:</span> до 22,5 тонн</p>
                                        <p><span>Полезный объем:</span> 82-92 м.куб</p>
                                        <p><span>Размеры:</span> длинна 13.6м, ширина 2.48м, высота 2.6-2.8м</p>
                                        <p><span>Вместительность:</span> 34 европаллета</p>
                                    </div>
                                    <div className="transport-card-img"><div className="transport-card-img1"></div></div>
                                </div>
                                <div className="transport-card-description">
                                    <p><span>Груз:</span> это самый распространенный тип кузова. Пригоден для перевозки большинства грузов. 
                                            Растентовка позволяет производить загрузку сверху (уточнять), сбоку и сзади.</p>
                                    <p><span>Не подходит для:</span> грузов, требующих особого температурного режима, крупногабаритных и негабаритных грузов</p>
                                </div> 
                            </div>
                            <div className="transport-card">
                                <div className="transport-card-content">
                                    <div className="transport-card-text">
                                        <h4 className="transport-card-name">Автосцепка</h4>
                                        <p><span>Грузоподъемность:</span>16-23 тонн</p>
                                        <p><span>Полезный объем:</span>100-120 м.куб</p>
                                        <p><span>Размеры:</span>длинна от 6м до 9м, ширина 2.48м, высота от 2.6м до 3.2м</p>
                                        <p><span>Вместительность:</span>33-44 европаллета</p>
                                    </div>
                                    <div className="transport-card-img"><div className="transport-card-img3"></div></div>
                                </div>
                                <div className="transport-card-description">
                                    <p><span>Груз:</span>автомобиль с кузовом на одной раме + 
                                    прицеп.Преимущество - большой полезный объем</p>
                                    <p><span>Не подходит для:</span>перевозки длинномерных грузов</p>
                                </div>
                            </div>
                            <div className="transport-card">
                                <div className="transport-card-content">
                                    <div className="transport-card-text">
                                        <h4 className="transport-card-name">Тентовый полуприцеп большего объема МЕГА:</h4>
                                        <p><span>Грузоподъемность:</span>до 23 тонн</p>
                                        <p><span>Полезный объем:</span>100 м.куб</p>
                                        <p><span>Размеры:</span>длинна 13.6м, ширина 2.45м, высота 3м</p>
                                        <p><span>Вместительность:</span>33 европаллета</p>
                                    </div>
                                    <div className="transport-card-img"><div className="transport-card-img2"></div></div>
                                </div>
                                <div className="transport-card-description">
                                <p><span>Груз:</span>Большой объем достигается за счет увеличения ширины до 2,5м и высоты до 3,05м (внешний вид как у стандартной еврофуры)</p>
                                <p><span>Не подходит для:</span>Не подходит для: грузов, требующих особого температурного режима, крупногабаритных и негабаритных грузов</p>
                                </div>
                            </div>
                            <div className="transport-card">
                                <div className="transport-card-content">
                                    <div className="transport-card-text">
                                        <h4 className="transport-card-name">Тентовый полуприцеп большего объема Jumbo</h4>
                                        <p><span>Грузоподъемность:</span>до 23 тонн</p>
                                        <p><span>Полезный объем:</span>96 м.куб</p>
                                        <p><span>Размеры:</span>длина 4.2м + 9.6м, ширина 2.45м, высота спереди 2.45м, высота сзади 3м, </p>
                                        <p><span>Вместительность:</span>33 европаллета</p>
                                    </div>
                                    <div className="transport-card-img"><div className="transport-card-img12"></div></div>
                                </div>
                                <p><span>Груз:</span>Больший объем достигается за счет специального "Г"-образного пола и уменьшенного диаметра колес полуприцепа</p>
                                <p><span>Не подходит для:</span>Не подходит для: грузов, требующих особого температурного режима, крупногабаритных и негабаритных грузов</p>
                            </div>
                            <div className="transport-card">
                            <div className="transport-card-content">
                                <div className="transport-card-text">
                                    <h4 className="transport-card-name">Платформа для негабаритных и тяжеловесных грузов</h4>
                                    <p><span>Грузоподъемность:</span>20-200 тонн</p>
                                    <p><span>Полезный объем:</span>допускается разный объём груза</p>
                                    <p><span>Размеры:</span>длинна 11-20 м, ширина 2.5-3.7 м</p>
                                    <p><span>Вместительность:</span>допускается разный объём груза</p>
                                </div>
                                <div className="transport-card-img"><div className="transport-card-img8"></div></div>
                            </div>
                                <p><span>Груз:</span>применяется для перевозки негабаритных и тяжеловестных грузов. 
                                Специальная конструкция платформ позволяет перевозить высокие и длинномерные грузы.</p>
                                <p><span>Не подходит для:</span>любой.</p>
                            </div>
                            <div className="transport-card">
                                <div className="transport-card-content">
                                    <div className="transport-card-text">
                                        <h4 className="transport-card-name">Открытый бортовой <br/>полуприцеп</h4>
                                        <p><span>Грузоподъемность:</span>до 23 тонн</p>
                                        <p><span>Полезный объем:</span>82-92 м.куб</p>
                                        <p><span>Размеры:</span>длинна 13.6м, ширина 2.45м, высота борта 0.5-0.8м</p>
                                        <p><span>Вместительность:</span>33 европаллета</p>
                                    </div>
                                    <div className="transport-card-img"><div className="transport-card-img6"></div></div>
                                </div>
                                <p><span>Груз:</span>применяется для перевозки грузов, устойчивых к внешним погодным воздействиям.</p>
                                <p><span>Не подходит для:</span>грузов, требующих особого температурного режима</p>
                            </div>
                            <div className="transport-card">
                            <div className="transport-card-content">
                                <div className="transport-card-text">
                                    <h4 className="transport-card-name">Открытая платформа</h4>
                                    <p><span>Грузоподъемность:</span>15-23 тонн</p>
                                    <p><span>Полезный объем:</span>допускается разный объём груза.</p>
                                    <p><span>Размеры:</span>длинна 12.6м, ширина 2.5м</p>
                                    <p><span>Вместительность:</span>допускается разный объём груза</p>
                                </div>
                                <div className="transport-card-img"><div className="transport-card-img7"></div></div>
                            </div>
                                <p><span>Груз:</span>применяется для перевозки грузов, устойчивых к внешним погодным воздействиям таким 
                                как контейнера, бетонные блоки, перекрытия, строительные конструкции и т.д.</p>
                                <p><span>Не подходит для:</span>любой. Может также использоваться для перевозки негабаритного оборудования.</p>
                            </div>
                            
                            <div className="transport-card">
                                <div className="transport-card-content">
                                    <div className="transport-card-text">
                                        <h4 className="transport-card-name">Цельномет</h4>
                                        <p><span>Грузоподъемность:</span>до 23 тонн</p>
                                        <p><span>Полезный объем:</span>86 м.куб</p>
                                        <p><span>Размеры:</span>длинна 13.6м, ширина 2.45м, высота 2.6м</p>
                                        <p><span>Вместительность:</span>34 европаллета</p>
                                    </div>
                                    <div className="transport-card-img"><div className="transport-card-img9"></div></div>
                                </div>
                                <p><span>Груз:</span>подходит для любых грузов, которым не требуется температурный режим. Такой прицеп требуется для перевозки дорогих грузов, 
                                так как он более надежный в отличии от тента которого можно порезать ножом.</p>
                                <p><span>Не подходит для:</span>только сзади!!!</p>
                            </div>
                            <div className="transport-card">
                                <div className="transport-card-content">
                                    <div className="transport-card-text">
                                        <h4 className="transport-card-name">Рефрижераторный фургон</h4>
                                        <p><span>Грузоподъемность:</span>12-22 тонн</p>
                                        <p><span>Полезный объем:</span>60-92 м.куб</p>
                                        <p><span>Размеры:</span>длинна 13,6м, ширина 2,48м, высота 2,6-2,8м</p>
                                        <p><span>Вместительность:</span>24-33 европаллета</p>
                                    </div>
                                    <div className="transport-card-img"><div className="transport-card-img4"></div></div>
                                </div>
                                <p><span>Груз:</span>Пригоден для перевозки большинства видов скоропортящихся продуктов и 
                                грузов со спец-условиями хранения: от +25`С до - 25`С.</p>
                                <p><span>Не подходит для:</span>только сзади!!! Цена: в эксплуатации дороже на 5-25%.</p>
                            </div>
                            <div className="transport-card">
                            <div className="transport-card-content">
                                <div className="transport-card-text">
                                    <h4 className="transport-card-name">Изотермический фургон</h4>
                                    <p><span>Грузоподъемность:</span>до 23 тонн</p>
                                    <p><span>Полезный объем:</span>до 92 м.куб</p>
                                    <p><span>Размеры:</span>Бывает полуприцеп, автосцепка и одиночный.</p>
                                    <p><span>Вместительность:</span>33 европаллета</p>
                                </div>
                                <div className="transport-card-img"><div className="transport-card-img5"></div></div>
                            </div>
                                <p><span>Груз:</span>некоторые виды груза, требующие при перевозке поддержки определенных 
                                температурных режимов, в частности продовольственные товары.</p>
                                <p><span>Не подходит для:</span>только сзади!!!</p>
                            </div>
                            <div className="transport-card">
                                <div className="transport-card-content">
                                    <div className="transport-card-text">
                                        <h4 className="transport-card-name">Автоцистерна</h4>
                                        <p><span>Грузоподъемность:</span>20 тонн</p>
                                        <p><span>Полезный объем:</span>от 1500 до 50000 литров</p>
                                        <p><span>Размеры:</span>длинна от 5 до 16м</p>
                                        <p><span>Вместительность:</span>от 1 до 8 отсеков в цистерне</p>
                                    </div>
                                    <div className="transport-card-img"><div className="transport-card-img10"></div></div>
                                </div>
                                <p><span>Груз:</span>Транспортировка пищевых и непищевых грузов, обладающих жидкой или сыпучей консистенцией и агрессивностью разной степени.
                                Внутри автоцистерна может быть разделена на внутренние секции.</p>
                                <p><span>Не подходит для:</span>перевозки длинномерных грузов.</p>
                            </div>
                            <div className="transport-card">
                                <div className="transport-card-content">
                                    <div className="transport-card-text">
                                        <h4 className="transport-card-name">Другие мало и среднетоннажные автомобили</h4>
                                        <p><span>Грузоподъемность:</span>3-12 тонн</p>
                                        <p><span>Полезный объем:</span>уточнять</p>
                                        <p><span>Размеры:</span>уточнять</p>
                                        <p><span>Вместительность:</span>уточнять</p>
                                    </div>
                                    <div className="transport-card-img"><div className="transport-card-img11"></div></div>
                                </div>
                                <p><span>Груз:</span>Такие авто служат для перевозки продуктов питания, мебели, стройматериалов и пр. Для этих целей используют компактные грузовики. Если груз негабаритный, предпочтение стоит отдать моделям с открытым бортом. 
                                Закрытые грузовые отсеки ориентированы на транспортировку быстро портящихся или габаритных товаров.</p>
                                <p><span>Не подходит для:</span>перевозки длинномерных грузов.</p>
                            </div>
                        </section>
                    </div>
                    
                </div>
        </section>
    )
}

export default Transport;