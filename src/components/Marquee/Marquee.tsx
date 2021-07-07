import { useCallback, useRef, useState } from "react";
import useInterval from '../../static/js/utils/hooks/useInterval';

interface IMarquee {
    children: React.ReactNode
}

const Marquee = ( { children }: IMarquee ) => {

    const containerRef = useRef<HTMLDivElement>(null!);
    // const trackRef = useRef<HTMLDivElement>(null!);

    const animationDuration = 5000;
    const [trackStyle, setTrackStyle] = useState('translate3d(0, 0, 0)');
    const [scrollDirection, setScrollDirection] = useState('right');
    const [track, setTrack] = useState<HTMLDivElement | undefined>(undefined);

    const animate = () => {
        if(!track) return;

        const container = containerRef.current;
        const containerWidth = container?.offsetWidth;
        const trackWidth = track.offsetWidth;
        const moveWidth = trackWidth - containerWidth;

        if(scrollDirection === 'left') setScrollDirection('right');
        else if(scrollDirection === 'right') setScrollDirection('left');

        const currentTrackPosition = scrollDirection === 'left' ? -moveWidth : 0;
        setTrackStyle(`translate3d(${currentTrackPosition}px, 0, 0)`);
    };

    const trackRef = useCallback((trackNode) => {
      setTrack(trackNode);
    }, []);

    useInterval(() => {
      if(track) animate();
    }, animationDuration);

    return (
        <div className="marquee" ref={containerRef}>
            <div className="marquee__track" ref={trackRef} style={{ transform: trackStyle, transition: `transform  ${animationDuration}ms linear` }}>
                { children }
            </div>
        </div>
    );
};

export default Marquee;
