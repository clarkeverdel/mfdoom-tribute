import React, { FunctionComponent } from 'react'

// Resources
import FlareSvg from '../../static/img/flare.svg'
import LargeBeamsSvg from '../../static/img/beams_large.svg'
import SmallBeamsSvg from '../../static/img/beams_small.svg'
import TheIllestSvg from '../../static/img/the_illest.svg'

type BlinkingMask = {}

const BlinkingMask: FunctionComponent<BlinkingMask> = () => {
    return (
        <div className="blinking-mask">
            <div className="blinking-mask__phrase blinking-mask__phrase--1"><TheIllestSvg /></div>
            <div className="blinking-mask__phrase blinking-mask__phrase--2"><TheIllestSvg /></div>

            <div className="blinking-mask__beams__wrapper">
                <div className="blinking-mask__beam blinking-mask__beams--large">
                    <LargeBeamsSvg />
                </div>
                <div className="blinking-mask__beam blinking-mask__beams--small">
                    <SmallBeamsSvg />
                </div>
                <div className="blinking-mask__flare">
                    <FlareSvg />
                </div>
                <div className="blinking-mask__image">
                    <img src="/static/img/mask_small.png" srcSet="/static/img/mask_small.png 1x, /static/img/mask_small@2x.png 2x" alt="MF Doom Mask." />
                </div>
            </div>
            <div className="blinking-mask__illustration"></div>
        </div>
    )
}

export default BlinkingMask