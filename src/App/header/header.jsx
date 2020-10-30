import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const Header = () => {
    return (
        <header>
            <div className="inline-wrapper">
                <div className="inline-header">
                    <div className="col-h50 top-header">
                        <div className="col-w10">
                            <div className="logo-container">
                                <a className="logo" href="/"></a>
                            </div>
                        </div>
                        <div className="col-w90">
                            <div className="col-h70">
                                <div className="contacts-container">
                                    <div className="top-contacts-container">
                                        <div className="contacts">
                                            <div className="col-h50">
                                                <div className="phones">
                                                    <p>+380501523665</p>
                                                    <p>+380978757141</p>
                                                    <p>+380509898041</p>
                                                </div>
                                            </div>
                                            <div className="col-h50">
                                                <div className="email">
                                                    <a href="https://mail.ukr.net/desktop#sendmsg">logistics-solutions@ukr.net</a>
                                                    <a href="https://www.facebook.com/companylogisticssolutions/">Facebook</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ScrollAnimation animateIn="animate__slideInRight" animatePreScroll="false" offset="0">
                                <p className="logo-text">OGISTICS SOLUTIONS</p>
                            </ScrollAnimation>
                        </div>
                    </div>
                    <div className="col-h50">
                        <div className="navigations">
                            <div className="navigation-container">
                                <div className="h100 menu-container">
                                    <div className="col-w19">
                                        <div className="menu-buttons"><a href="#Main">Главная</a></div>
                                    </div>
                                    <div className="col-w19">
                                        <div className="menu-buttons transport">
                                            <a href="#Main">География</a>
                                        </div>
                                    </div>
                                    <div className="col-w19">
                                        <div className="menu-buttons transport">
                                            <a href="#Main">Транспорт</a>
                                        </div>
                                    </div>
                                    <div className="col-w19">
                                        <div className="menu-buttons transport">
                                            <a href="#Main">Вакансии</a>
                                        </div>
                                    </div>
                                    <div className="col-w19">
                                        <div className="menu-buttons transport">
                                            <a href="#Main">Документация</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header