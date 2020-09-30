import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="inline-header">
                <div className="col-w20">
                    <div className="logo-container">
                        <a className="logo" href="/"></a>
                    </div>
                </div>
                <div className="col-w80">
                    <div className="col-h50 contacts-container-main">
                        <div className="contacts-container">
                            <div className="col-h50 top-contacts-container">
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
                            <div className="col-h50 bottom-contacts-container"></div>
                        </div>
                    </div>
                    <div className="col-h50">
                        <div className="navigations">
                            <div className="navigation-container">
                                <div className="col-h30"></div>
                                <div className="col-h70 menu-container">
                                    <div className="col-w25">
                                        <div className="menu-buttons"><a href="#Main">Главная</a></div>
                                    </div>
                                    <div className="col-w25">
                                        <div className="menu-buttons transport">
                                            <a href="#Main">Транспорт</a>
                                            {/* <div className="drop-menu">
                                                <div className="menu-buttons"><a href="#Geography">География</a></div>
                                                <div className="menu-buttons"><a href="#Transport">Автомобильные</a></div>
                                                <div className="menu-buttons"><a href="#GroupageCargo">Сборные</a></div>
                                                <div className="menu-buttons"><a href="#Main">Страхование</a></div>
                                                <div className="menu-buttons"><a href="#Main">Таможеные услуги</a></div>
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="col-w25"></div>
                                    <div className="col-w25"></div>
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