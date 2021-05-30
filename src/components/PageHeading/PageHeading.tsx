// Libs
import React from 'react';
import Image from 'next/image';

// Images


// Resources

// Components
import Banner from '../Banner/Banner';


// Interface
interface PageHeading { }


const PageHeading = ({ }: PageHeading) => {
    return <div className="pageheading">

        <div className="pageheading__inner">
            <div className="pageheading__background">
              <Image
                src="/static/img/mask.png"
                layout="fill"
                priority={true}
              />
            </div>

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
              <div className="pageheading__background">
                <Image
                  src="/static/img/mask.png"
                  layout="fill"
                  priority={true}
                />
              </div>

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
                    <Image src="/static/img/logo/bubblack.svg" width={114} height={30} priority={true}/>
                </Banner>
            </div>
        </div>
    </div>
};

PageHeading.defaultProps = {};

export default PageHeading;
