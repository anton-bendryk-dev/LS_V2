import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="inline-header">
                <div className="col-md20">
                    <div className="logo-container">
                        <a className="logo" href="/"></a>
                    </div>
                </div>
                <div className="col-md80">
                    <div className="col-h50 contacts-container-main">
                        <div className="contacts-container"></div>
                    </div>
                    <div className="col-h50"></div>
                </div>
            </div>
        </header>
    )
}
export default Header