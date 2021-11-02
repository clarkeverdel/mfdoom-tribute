import React, { useCallback, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const SmoothScroll: React.FC = ({ children }) => {
  const [scrollContainerNode, setScrollContainerNode] = useState<HTMLDivElement>();
  let scrollTrigger: ScrollTrigger;

  /**
   *
   * @param node
   */
  const scrollContainer = useCallback((node: HTMLDivElement) => {
    if(node !== null){
      setScrollContainerNode(node);
    }
  }, []);

  useEffect(() => {
    const setScrollPosition = () => {
      if(scrollTrigger) {
        scrollTrigger.scroll(scrollTrigger.progress * ScrollTrigger.maxScroll(window));
      }
    }

    const setEventListeners = () => {
      window.addEventListener('resize', () => initScroll());
      ScrollTrigger.addEventListener("refresh", setScrollPosition);
    }

    initScroll();
    setEventListeners();

    // Cleanup
    return () => {
      window.removeEventListener('resize', () => initScroll());
      ScrollTrigger.removeEventListener('refresh', setScrollPosition);
    };

  }, [scrollContainerNode]);

  const initScroll = () => {
    if(!scrollContainerNode) return;

    const height = scrollContainerNode.clientHeight;

    const createScrollTrigger = () => {
      if(scrollTrigger) {
        scrollTrigger.kill();
      }

      const anim = gsap.to(scrollContainerNode, {
        y: -(Number(height) - document.documentElement.clientHeight),
        ease: "slow(0.7, 0.7, false)",
      });

      scrollTrigger = ScrollTrigger.create({
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: .65,
        animation: anim
      });
    }

    createScrollTrigger();

    // Set new size
    document.body.style.height = height + "px";
  };

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
