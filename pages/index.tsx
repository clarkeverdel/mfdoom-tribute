// Libs
import React from 'react';
import { GetStaticProps } from 'next';
import Colon from '../public/static/img/colon.svg';

// Types
import { Song } from '../types';

// Data
import { songs } from '../src/data/index';

// Resources

// Page Sections
import AllCaps from './Index/AllCaps';
import IntroSection from './Index/IntroSection';
import QuoteSection from './Index/QuoteSection';

// Components
import BlinkingMask from '../src/components/BlinkingMask/BlinkingMask';
import PageHeading from '../src/components/PageHeading/PageHeading';
import SongList from '../src/components/SongList/SongList';
import Footer from '../src/components/Site/Footer/Footer';

import { SmoothScroll } from 'utils/wrapWithSmoothScroll';

interface IProps {
    songs: Song[]
}

// Component
const Home: React.FC<IProps> = ({songs}) => {

    return <SmoothScroll>
            <PageHeading />
            <IntroSection />
            <AllCaps />
            <QuoteSection />
            <section className="section flex flex-justify-center no-padding flex-align-center ">
                <BlinkingMask />
            </section>
            <section className="section">
                <div className="container grid-1">
                    <div className="col-1">
                        <h2>Listen <span className="section__title__colon"><Colon /></span></h2>
                        <SongList songs={songs} />
                    </div>
                </div>
            </section>
            <section className="section flex flex-justify-center flex-align-center">
                <BlinkingMask />
            </section>
            <Footer />
          </SmoothScroll>;
};

export const getStaticProps: GetStaticProps = async() => {
    return {
        props: {
            songs
        }
    };
};

// Props
Home.defaultProps = {};

export default Home;
