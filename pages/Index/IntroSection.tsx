import React from 'react'
import Image from 'next/image'

// Components
import ContentBlock from '../../src/components/ContentBlock/ContentBlock'

// Images

const introImage = {
    src: '/static/img/photos/mfdoom_on_stage.jpg',
    alt: 'MF DOOM performing on stage.',
    width: 560,
    height: 840,
    position: 'right',
    layout: 'intrinsic'
}

const IntroSection = () => {
    return (
        <section className={`section section--intro`}>
            <div className="container fluid">
                <ContentBlock image={introImage} className="section__content">
                    <div className={`copy--large`}>
                        You probably already know everything about this genius. Yet, why not take another tour of the Multi Faced DOOM, the most enigmatic rapper ever...
                        <br />Who’s your favorite DOOM alter ego?
                    </div>
                    <div className={`section__circle`}>
                      <Image src="/static/img/psuedonym_circle.svg" width={531} height={531} />
                    </div>
                </ContentBlock>
            </div>
        </section>
    )
}

export default IntroSection
