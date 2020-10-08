import React from 'react';
import Slide from './slider';
const Main = () => {
return (
    <main>
        <Slide/>
        <section className="about-company-info-container">
            <div className="inline-wrapper">
                <div className="about-us">
                    <p>
                    Компания <span>Logistics Solutions</span>, является одной из лучшей в предоставлении услуг грузоперевозок в Украине и за её пределами. Мы предоставляем услуги нашим клиентов, соблюдая все мировые стандарты качества. У нас работают только высококвалифицированные специалисты, которые курируют перевозки в отдаленные уголки мира.Выбирая нашу компанию, вы получаете гарантию надежности и качества оказываемых услуг. Мы строим Партнерские отношения в бизнесе, потому что для нас самое главное – ваше доверие.
                    </p>
                </div>
            </div>
        </section>
        
    </main>
);
}

export default Main;