import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import {Link} from 'react-router-dom';
const Header = () => {
    return (
        <header>
            <div className="inline-wrapper">
                <div className="inline-header">
                    <div className="col-h50 top-header">
                        <div className="col-w8">
                            <div className="logo-container">
                                <Link to="/" className="logo"></Link>
                            </div>
                        </div>
                        <div className="col-w92">
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
                            <ScrollAnimation animateIn="animate__slideInRight" animatePreScroll="false" offset="0" animateOnce="true">
                                <p className="logo-text">OGISTICS SOLUTIONS</p>
                            </ScrollAnimation>
                        </div>
                    </div>
                    <div className="col-h50">
                        <div className="navigations">
                            <div className="navigation-container">
                                <div className="h100 menu-container">
                                    <div className="col-w19">
                                        <div className="menu-buttons"><Link to="/">Главная</Link></div>
                                    </div>
                                    <div className="col-w19">
                                        <div className="menu-buttons transport">
                                            <Link to="/Geography">География</Link>
                                        </div>
                                    </div>
                                    <div className="col-w19">
                                        <div className="menu-buttons transport">
                                            <Link to="/Transport">Транспорт</Link>
                                        </div>
                                    </div>
                                    <div className="col-w19">
                                        <div className="menu-buttons transport">
                                            <a href="https://www.work.ua/ru/jobs/by-company/1202656/">Вакансии</a>
                                        </div>
                                    </div>
                                    <div className="col-w19">
                                        <div className="menu-buttons transport">
                                            <Link to="#Main">Документация</Link>
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