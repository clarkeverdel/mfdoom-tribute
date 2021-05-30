// Libs
import Image from 'next/image'

// Components
import BlockQuote from '../../src/components/BlockQuote/BlockQuote'
import ContentBlock from '../../src/components/ContentBlock/ContentBlock'


const introImage = {
    src: '/static/img/photos/mfdoom_on_stage_2.jpg',
    alt: 'MF DOOM performing on stage.',
    width: 665,
    height: 1000,
    layout: 'intrinsic'
}

const QuoteSection = () => {
    return (
        <section className={`section section--quote`}>
            <div className="container fluid">
                <ContentBlock image={introImage}>
                    <div className={`section__circle`}>
                      <Image src="/static/img/quotes_circle.svg" width={586} height={586} />
                    </div>
                </ContentBlock>
                <BlockQuote className={`section__blockquote`}/>
            </div>
        </section>
    )
}

export default QuoteSection
