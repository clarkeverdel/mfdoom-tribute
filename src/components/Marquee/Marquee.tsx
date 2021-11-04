import { useInView } from 'react-intersection-observer';

interface IMarquee {
    children: React.ReactNode
}

// TODO: Create intersection observer for Marquee
// Once the first element moves off the screen, append it in the list. Creating infinite loop
// CSS Marquee transition blinks when it resets, that's what we want to avoid
// GOAL: Create a generic marquee element that relies on CSS animation and only relies on Javascript to orchestrate it

const Marquee = ( { children }: IMarquee ) => {

    const { ref, inView }  = useInView({
      threshold: 0
    });

    return (
        <div className="marquee" ref={ref}>
            <div className={`marquee__track${inView ? ' run-animation' : ''}`}>
                <div>
                  { children }
                </div>
                <div>
                  { children }
                </div>
                <div>
                  { children }
                </div>
            </div>
        </div>
    );
};

export default Marquee;
