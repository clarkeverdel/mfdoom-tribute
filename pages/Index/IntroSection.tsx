import React from 'react';

// Components
import ContentBlock from '../../src/components/ContentBlock/ContentBlock';

// images
import photo from '../../public/static/img/photos/mfdoom_on_stage.jpg';

const introImage = {
    src: photo,
    alt: 'MF DOOM performing on stage.',
    width: 560,
    height: 840,
    position: 'right',
    placeholder: 'blur'
};

const introImageDecoration = {
  src: '/static/img/psuedonym_circle.svg',
  alt: 'Psuedonyms',
  width: 531,
  height: 531,
  layout: 'intrinsic'
};

const IntroSection = () => {
    return (
        <section className={`section section--intro`}>
            <div className="container fluid">
                <ContentBlock image={introImage} imageDecoration={introImageDecoration} className="section__content">
                    <div className={`copy--large`}>
                        You probably already know everything about this genius. Yet, why not take another tour of the Multi Faced DOOM, the most enigmatic rapper ever...
                        <br />Who’s your favorite DOOM alter ego?
                    </div>
                </ContentBlock>
            </div>
        </section>
    );
};

export default IntroSection;
