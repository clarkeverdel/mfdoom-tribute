// Libs
import React from 'react';

// Images
import BubBlackLogo from '../../static/img/logo/bubblack.svg';

// Resources

// Components
import Banner from '../Banner/Banner';
import Mask from '../Mask/Mask'

// Interface
interface PageHeading { }


const PageHeading = ({ }: PageHeading) => {
    return <div className="pageheading">

        <div className="pageheading__inner">
            {/* <Mask /> */}
            <div className="pageheading__banners">
                <Banner type="circle" count={1}>
                    A tribute to the illest villain.
                </Banner>

                <Banner type="circle" count={2}>
                    The Supervillain
                </Banner>
            </div>

            <h1 className="pageheading__title">
                <div>
                    <span>The</span>
                    <span>super</span>
                </div>
                <div>
                    <span>villain.</span>
                    <Banner>
                        <i>You are diving into the world of the super villain — </i>
                        <strong> MF DOOM</strong>
                    </Banner>
                </div>
                <div>MF DOOM.</div>
            </h1>

            <div className="pageheading__banners pageheading__banners--bottom">
                <Banner>
                    <i>You are diving into the world of the super villain — </i>
                    <strong> MF DOOM</strong>
                </Banner>

                <Banner type="circle" count={3}>
                    <BubBlackLogo />
                </Banner>
            </div>
        </div>
    </div>
};

PageHeading.defaultProps = {};

export default PageHeading;