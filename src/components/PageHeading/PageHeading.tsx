// Libs
import React from 'react';

// Images
// import BubBlackLogo from '../../static/img/logo/bubblack.svg';

// Resources

// Components
import Banner from '../Banner/Banner';


// Interface
interface PageHeading { }


const PageHeading = ({ }: PageHeading) => {
    return <div className="pageheading">

        <div className="pageheading__inner">
            <picture className="pageheading__background">
              <source srcSet="/static/img/mask.webp" type="image/webp" />
              <img src="/static/img/mask.png" />
            </picture>

            {/* <Mask /> */}
            <div className="pageheading__banners">
                <Banner type="circle" count={1}>
                    A tribute to the illest villain.
                </Banner>

                <Banner type="circle" count={2}>
                    The Supervillain
                </Banner>
            </div>

            <div className="pageheading__title">
              <picture className="pageheading__background">
                <source srcSet="/static/img/mask.webp" type="image/webp" />
                <img src="/static/img/mask.png" />
              </picture>
              <h1>
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
            </div>

            <div className="pageheading__banners pageheading__banners--bottom">
                <Banner>
                    <i>You are diving into the world of the super villain — </i>
                    <strong> MF DOOM</strong>
                </Banner>

                <Banner type="circle" count={3}>
                    {/* <BubBlackLogo /> */}
                    <img src="/static/img/logo/bubblack.svg" />
                </Banner>
            </div>
        </div>
    </div>
};

PageHeading.defaultProps = {};

export default PageHeading;
