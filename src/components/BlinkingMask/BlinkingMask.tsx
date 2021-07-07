import React, { FunctionComponent } from 'react';
import Image from 'next/image';

// Resources

type TBlinkingMask = {}

const BlinkingMask: FunctionComponent<TBlinkingMask> = () => {
    return (
        <div className="blinking-mask">
            <div className="blinking-mask__phrase blinking-mask__phrase--1"><Image src="/static/img/the_illest.svg" width={17} height={99} alt="The Illest Phrase"/></div>
            <div className="blinking-mask__phrase blinking-mask__phrase--2"><Image src="/static/img/the_illest.svg" width={17} height={99} alt="The Illest Phrase"/></div>

            <div className="blinking-mask__beams__wrapper">
                <div className="blinking-mask__beam blinking-mask__beams--large">
                    <Image src="/static/img/beams_large.svg" width={635} height={635} alt="Large beams" />
                </div>
                <div className="blinking-mask__beam blinking-mask__beams--small">
                  <Image src="/static/img/beams_small.svg" width={435} height={435} alt="Small beams" />
                </div>
                <div className="blinking-mask__flare">
                    <Image src="/static/img/flare.svg" width={181} height={181} alt="Flare" />
                </div>
                <div className="blinking-mask__image">
                  <Image
                      src="/static/img/mask_small@2x.png"
                      // srcSet="/static/img/mask_small.webp 1x, /static/img/mask_small@2x.webp 2x"
                      alt="MF Doom Mask."
                      width={72}
                      height={72}
                    />
                  {/* <picture>
                    <source srcSet="/static/img/mask_small.webp 1x, /static/img/mask_small@2x.webp 2x" type="image/webp" />
                    <Image
                      src="/static/img/mask_small.png"
                      srcSet="/static/img/mask_small.png 1x, /static/img/mask_small@2x.png 2x"
                      alt="MF Doom Mask."
                      width="72px"
                      height="72px"
                    />
                  </picture> */}

                </div>
            </div>
            <div className="blinking-mask__illustration"></div>
        </div>
    );
};

export default BlinkingMask;
