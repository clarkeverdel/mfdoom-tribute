// Components
import ContentBlock from '../../src/components/ContentBlock/ContentBlock'

// Styles
import Style from './IntroSection.module.scss'

// Images
import PsuedonymCircle from '../../src/static/img/psuedonym_circle.svg';

const introImage = {
    src: '/static/img/photos/mfdoom_on_stage.jpg',
    alt: 'MF DOOM performing on stage.',
    width: 560,
    height: 840,
    position: 'right'
}

const IntroSection = () => {
    return (
        <section className={`section section--intro ${Style.section}`}>
            <div className="container fluid">
                <ContentBlock image={introImage} className="section__content">
                    <div className={`copy--large ${Style.content}`}>
                        You probably already know everything about this genius. Yet, why not take another tour of the Multi Faced DOOM, the most enigmatic rapper ever... 
                        <br />Who’s your favorite DOOM alter ego?
                    </div>
                    <PsuedonymCircle className={`section__circle ${Style.circle}`} />
                </ContentBlock>
            </div>
        </section>
    )
}

export default IntroSection