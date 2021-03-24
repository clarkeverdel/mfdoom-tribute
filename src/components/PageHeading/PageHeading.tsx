// Libs
import React from 'react';

// Images
import BubBlackLogo from '../../static/img/logo/bubblack.svg';

// Resources

// Components
import Banner from '../Banner/Banner';

// Interface
interface PageHeading { }


const PageHeading = ({ }: PageHeading) => {
    return <div className="pageheading">
        <div className="pageheading__corner-banners">
            <div className="pageheading__inner">
                <Banner type="circle" count={1}>
                    A tribute to the illest villain.
                </Banner>

                <Banner type="circle" count={2}>
                    The Supervillain
                </Banner>

                <Banner type="circle" count={3}>
                    <BubBlackLogo />
                </Banner>
            </div>
        </div>

        <h1 className="pageheading__title">
            <div>
                <span>The</span>
                <span>super</span>
            </div>
            <div>
                <span>villain</span>
                <Banner>
                    <i>You are diving into the world of the super villain — </i>
                    <strong> MF DOOM</strong>
                </Banner>
            </div>
            <div>MF DOOM.</div>
        </h1>
    </div>
};

PageHeading.defaultProps = {};

export default PageHeading;