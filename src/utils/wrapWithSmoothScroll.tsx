import React, { useRef, useEffect, useState, SetStateAction } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import debounce from 'lodash.debounce';


export const SmoothScroll: React.FC = ({ children }) => {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<SetStateAction<number>>(0);

  useEffect(() => {
    const anim = gsap.to(scrollContainer.current, {
      y: -(Number(height) - document.documentElement.clientHeight),
      ease: "slow(0.7, 0.7, false)",
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
      scrub: .65,
      animation: anim
    });

    function updateSize() {
      debounce(() => {
        if (scrollContainer.current && scrollContainer.current.clientHeight) {
          setHeight(scrollContainer.current.clientHeight);
        }
      }, 250);
    }
    let progress: number;
    ScrollTrigger.addEventListener("refreshInit", () => {
      progress = ST.progress;
    });
    ScrollTrigger.addEventListener("refresh", () => ST.scroll(progress * ScrollTrigger.maxScroll(window)));

    window.addEventListener('resize', updateSize);

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
            { children }
          </div>
      </main>
  </>
}
