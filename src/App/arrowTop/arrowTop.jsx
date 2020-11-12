import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const ArrowTopButton = () => {
    window.scrollTo(0, 0);
}
const ArrowTop = () => {
    return (
        <ScrollAnimation animateIn="animate__bounceInUp" animatePreScroll="false" className="arrowTop-box show">
            <div onClick={ArrowTopButton}></div>
        </ScrollAnimation>
    )
}

export default ArrowTop