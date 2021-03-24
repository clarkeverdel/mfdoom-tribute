// Components
import BlockQuote from '../../src/components/BlockQuote/BlockQuote'
import ContentBlock from '../../src/components/ContentBlock/ContentBlock'

// Styles
import Style from './QuoteSection.module.scss'

// Images
import PsuedonymCircle from '../../src/static/img/quotes_circle.svg';

const introImage = {
    src: '/static/img/photos/mfdoom_on_stage_2.jpg',
    alt: 'MF DOOM performing on stage.',
    width: 665,
    height: 1000
}

const QuoteSection = () => {
    return (
        <section className={`section section--quote ${Style.section}`}>
            <div className="container fluid">
                <ContentBlock image={introImage}>
                    <PsuedonymCircle className={`section__circle ${Style.circle}`} />
                </ContentBlock>
                <BlockQuote className={`section__blockquote${Style.blockquote}`}/>
            </div>
        </section>
    )
}

export default QuoteSection