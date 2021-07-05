// Libs

// Components
import BlockQuote from '../../src/components/BlockQuote/BlockQuote'
import ContentBlock from '../../src/components/ContentBlock/ContentBlock'


// images
import photo from '../../public/static/img/photos/mfdoom_on_stage_2.jpg';

const image = {
    src: photo,
    alt: 'MF DOOM performing on stage.',
    width: 665,
    height: 1000,
    layout: 'intrinsic',
    placeholder: 'blur'
}

const imageDecoration = {
  src: '/static/img/quotes_circle.svg',
  alt: 'MF Doom Quotes',
  width: 586,
  height: 586,
  layout: 'intrinsic'
}

const QuoteSection = () => {
    return (
        <section className={`section section--quote`}>
            <div className="container fluid">
                <ContentBlock image={image} imageDecoration={imageDecoration} className="section__content"></ContentBlock>
                <BlockQuote className={`section__blockquote`}/>
            </div>
        </section>
    )
}

export default QuoteSection
