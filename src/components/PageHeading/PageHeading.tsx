// Libs
import React from 'react';
import Image from 'next/image';

// Components
import Banner from '../Banner/Banner';

// Interface
interface IPageHeading {}

const PageHeading = ({}: IPageHeading) => {
    return <div className="pageheading">

        <div className="pageheading__inner">
            <div className="pageheading__background">
              <Image
                src="/static/img/mask.png"
                layout="fill"
                priority={true}
                alt="Mask"
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
                  alt="Mask"
                  priority={true}
                />
              </div>

              <h1>
                <div>
                    <span data-word="The">The</span>
                    <span data-word="super">super</span>
                </div>
                <div>
                    <span data-word="villain.">villain.</span>
                    <Banner>
                        <i>You are diving into the world of the super villain — </i>
                        <strong> MF DOOM</strong>
                    </Banner>
                </div>
                <div data-word="MF DOOM.">MF DOOM.</div>
              </h1>
            </div>

            <div className="pageheading__banners pageheading__banners--bottom">
                <Banner>
                    <i>You are diving into the world of the super villain — </i>
                    <strong> MF DOOM</strong>
                </Banner>

                <Banner type="circle" count={3}>
                    {/* <BubBlackLogo /> */}
                    <Image src="/static/img/logo/bubblack.svg" width={114} height={30} priority={true} alt="Logo" />
                </Banner>
            </div>
        </div>
    </div>;
};

export default PageHeading;
