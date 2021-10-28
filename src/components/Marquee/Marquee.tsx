import { useInView } from 'react-intersection-observer';

interface IMarquee {
    children: React.ReactNode
}

const Marquee = ( { children }: IMarquee ) => {

    const { ref, inView }  = useInView({
      threshold: 0
    })

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
