import { useEffect, useLayoutEffect, useRef, useState } from "react"
import useInterval from '../../static/js/utils/hooks/useInterval'

interface Marquee {
    children: React.ReactNode
}

const Marquee = ( { children }: Marquee ) => {

    const containerRef = useRef()
    const trackRef = useRef()

    const animationDuration = 5000
    const [trackStyle, setTrackStyle] = useState('translate3d(0, 0, 0)')
    const [scrollDirection, setScrollDirection] = useState('right')
    const [initialized, setInitialized] = useState(false)

    const animate = () => {
        const container = containerRef.current
        const track = trackRef.current

        const containerWidth = container.offsetWidth
        const trackWidth = track.offsetWidth
        const moveWidth = trackWidth - containerWidth

        if(scrollDirection === 'left') setScrollDirection('right')
        else if(scrollDirection === 'right') setScrollDirection('left')

        const currentTrackPosition = scrollDirection === 'left' ? -moveWidth : 0
        setTrackStyle(`translate3d(${currentTrackPosition}px, 0, 0)`)
    }

    useInterval(() => {
        if(initialized) animate()
    }, animationDuration)

    useEffect(() => {
        setInitialized(true)
        animate()
    }, [trackRef])

    return (
        <div className="marquee" ref={containerRef}>
            <div className="marquee__track" ref={trackRef} style={{ transform: trackStyle, transition: `transform  ${animationDuration}ms linear` }}>
                { children }
            </div>
        </div>
    )
}

export default Marquee