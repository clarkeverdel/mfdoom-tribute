// Libs
import React, { useLayoutEffect, useRef, useState, SetStateAction } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import debounce from 'lodash.debounce';

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
    const [height, setHeight] = useState<SetStateAction<number>>(0);
    useServiceWorker();

    const scrollContainer = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
      const anim = gsap.to(scrollContainer.current, {
        y: -(Number(height) - document.documentElement.clientHeight)
      });

      if (typeof window !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
      }

      if (scrollContainer.current && scrollContainer.current.clientHeight) {
        setHeight(scrollContainer.current.clientHeight);
        document.body.style.height = height + "px";
      }

      const ST = ScrollTrigger.create({
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        animation: anim
      });

      function updateSize() {
          if (scrollContainer.current && scrollContainer.current.clientHeight) {
            setHeight(scrollContainer.current.clientHeight);
          }
      }
      let progress: number;
      ScrollTrigger.addEventListener("refreshInit", () => {
        progress = ST.progress;
      });
      ScrollTrigger.addEventListener("refresh", () => ST.scroll(progress * ScrollTrigger.maxScroll(window)));

      window.addEventListener('resize', debounce(() => updateSize(), 250));

      return () => {
        ST.kill();

        window.removeEventListener('resize', updateSize);
        ScrollTrigger.removeEventListener("refreshInit", () => {
          progress = ST.progress;
        });
        ScrollTrigger.removeEventListener("refresh", () => ST.scroll(progress * ScrollTrigger.maxScroll(window)));
      };
    }, [height]);

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
