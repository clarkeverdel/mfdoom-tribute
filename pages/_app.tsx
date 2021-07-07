// Libs
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Utils
import meta from '../meta.config.js';

// Resources
import '../src/styles/all.scss';

// Components
import SiteMeta from '../src/components/Site/SiteMeta/SiteMeta';
import useServiceWorker from '../src/static/js/utils/hooks/useServiceWorker';

// Interface
interface IProps {
    Component: any,
    pageProps: any
}

// Component
const App = ({ Component, pageProps }: IProps) => {
    useServiceWorker();

    const scrollContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (typeof window !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
      }

      if (scrollContainer.current && scrollContainer.current.clientHeight) {
        var height = scrollContainer.current.clientHeight;

        document.body.style.height = height + "px";

        gsap.to(scrollContainer.current, {
          y: -(height - document.documentElement.clientHeight),
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 1
          }
        });
      }
    })

    return <>
        <SiteMeta {...meta} />

        <main style={{
          overflow: 'hidden',
          position: 'fixed',
          height: '100%',
          width: '100%',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}>
            <div id="scroll-container" ref={scrollContainer} style={{
                position: 'absolute',
                overflow: 'hidden',
                width: '100%'
              }}>
              <Component {...pageProps} />
            </div>
        </main>
    </>;
};

// Props
App.defaultProps = {};

export default App;
