// Libs
import React from 'react';
import { GetStaticProps } from 'next'

// Types
import { Song } from '../types'

// Data
import { songs } from '../src/data/index'

// Resources
import ColonSvg from '../src/static/img/colon.svg'

// Page Sections
import AllCaps from './Index/AllCaps';
import IntroSection from './Index/IntroSection';
import QuoteSection from './Index/QuoteSection';

// Components
import BlinkingMask from '../src/components/BlinkingMask/BlinkingMask'
import PageHeading from '../src/components/PageHeading/PageHeading'
import SongList from '../src/components/SongList/SongList'
import Footer from '../src/components/Site/Footer/Footer'

interface IProps {
    songs: Song[]
}

// Component
const Home: React.FC<IProps> = ({songs}) => {
    return <>
        <PageHeading />
        <IntroSection />
        <AllCaps />
        <QuoteSection />
        <section className="section flex flex-justify-center no-padding flex-align-center ">
            <BlinkingMask />
        </section>
        <section className="section half-padding">
            <div className="container grid-1">
                <div className="col-1">
                    <h2>Listen <ColonSvg className="section__title__colon"/></h2>
                    <SongList songs={songs} />
                </div>
            </div>
        </section>
        <section className="section flex flex-justify-center flex-align-center no-padding">
            <BlinkingMask />
        </section>
        <Footer />
    </>;
};

export const getStaticProps: GetStaticProps = async() => {
    return {
        props: { 
            songs
        }
    }
}

// Props
Home.defaultProps = {};

export default Home;
