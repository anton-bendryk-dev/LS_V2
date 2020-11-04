import React from 'react';
import Slider from "react-slick";
import client1 from '../../images/client-001.jpg';
import client2 from '../../images/client-002.jpg';
import client3 from '../../images/client-003.jpg';
import client4 from '../../images/client-004.jpg';
import client5 from '../../images/client-005.jpg';
import client6 from '../../images/client-006.jpg';
import client7 from '../../images/client-007.jpg';
import client8 from '../../images/client-008.jpg';
class Partners extends React.Component {
    render() {
        var settings = {
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
        };
        return (
            <section className="partners-container">
                <div className="inline-wrapper partners">
                    <h3>Нам доверяют</h3>
                    <Slider {...settings}>
                    <div>
                        <img src={client1} alt="" />
                    </div>
                    <div>
                        <img src={client2} alt="" />
                    </div>
                    <div>
                        <img src={client3} alt="" />
                    </div>
                    <div>
                        <img src={client4} alt="" />
                    </div>
                    <div>
                        <img src={client5} alt="" />
                    </div>
                    <div>
                        <img src={client6} alt="" />
                    </div>
                    <div>
                        <img src={client7} alt="" />
                    </div>
                    <div>
                        <img src={client8} alt="" />
                    </div>
                    </Slider>
                </div>
            </section>
        );
    }
}
export default Partners