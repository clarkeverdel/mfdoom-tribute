import React, { FunctionComponent } from 'react'

// Resources

type BlinkingMask = {}

const BlinkingMask: FunctionComponent<BlinkingMask> = () => {
    return (
        <div className="blinking-mask">
            <div className="blinking-mask__phrase blinking-mask__phrase--1"><img src="/static/img/the_illest.svg" /></div>
            <div className="blinking-mask__phrase blinking-mask__phrase--2"><img src="/static/img/the_illest.svg" /></div>

            <div className="blinking-mask__beams__wrapper">
                <div className="blinking-mask__beam blinking-mask__beams--large">
                    <img src="/static/img/beams_large.svg" />
                </div>
                <div className="blinking-mask__beam blinking-mask__beams--small">
                <img src="/static/img/beams_small.svg" />
                </div>
                <div className="blinking-mask__flare">
                    <img src="/static/img/flare.svg" />
                </div>
                <div className="blinking-mask__image">
                  <picture>
                    <source srcSet="/static/img/mask_small.webp 1x, /static/img/mask_small@2x.webp 2x" type="image/webp" />
                    <img
                      src="/static/img/mask_small.png"
                      srcSet="/static/img/mask_small.png 1x, /static/img/mask_small@2x.png 2x"
                      alt="MF Doom Mask."
                      width="72px"
                      height="72px"
                    />
                  </picture>

                </div>
            </div>
            <div className="blinking-mask__illustration"></div>
        </div>
    )
}

export default BlinkingMask
