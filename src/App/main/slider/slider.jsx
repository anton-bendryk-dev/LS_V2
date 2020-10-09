import React from 'react';
import slide2 from '../../images/slide2.jpg';
import slide01 from '../../images/slide01.jpg';
import slide4 from '../../images/slide4x.jpg';

const Slider = () => {
    return (
        <div class="inline-wrapper">
            <div class="slide-container">
                <div class="fadein">
                    <div><img src={slide2} alt="" />
                        <h1 className="slider-text">Logistics Solutions - профи в сфере грузоперевозок</h1>
                    </div>
                    <div><img src={slide01} alt="" />
                        <h2 className="slideText2"> Мы знаем как в кратчайшие сроки качественно и надежно доставить ваш груз.</h2>
                    </div>
                    <div><img src={slide4} alt="" />
                        <h2 className="slideText3">Вы можете заказать грузоперевозки с широкой географией и быть уверенным в качестве и скорости доставки.</h2>
                    </div>
				</div>	
			</div>
		</div>
    )
}
export default Slider