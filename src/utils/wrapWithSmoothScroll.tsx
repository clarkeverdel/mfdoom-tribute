import React, { useCallback, useEffect, useMemo, useState, SetStateAction } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
// import debounce from 'lodash.debounce';


export const SmoothScroll: React.FC = ({ children }) => {
  const [scrollContainerNode, setScrollContainerNode] = useState<HTMLElement>();
  const [height, setHeight] = useState<Number>();

  // SetSize Method
  const setSize = (node?: HTMLElement) => {
    const scrollContainer = node || scrollContainerNode;

    if (scrollContainer && scrollContainer.clientHeight) {
      setScrollContainerNode(scrollContainer);
      setHeight(scrollContainer.clientHeight);
    }
  }

  // On init (step 1)
  const scrollContainer = useCallback((node: HTMLElement) => {
    setSize(node);
    window.addEventListener('resize', () => setSize(node));
  }, [])


  useEffect(() => {
    if(!scrollContainerNode) return;

    const anim = gsap.to(scrollContainerNode, {
      y: -(Number(height) - document.documentElement.clientHeight),
      ease: "slow(0.7, 0.7, false)",
    });

    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const ST = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      scrub: .65,
      animation: anim
    });

    let progress: number;

    ScrollTrigger.addEventListener("refreshInit", () => {
      progress = ST.progress;
    });
    ScrollTrigger.addEventListener("refresh", () => ST.scroll(progress * ScrollTrigger.maxScroll(window)));

    // Set new size
    document.body.style.height = height + "px";

    return () => {
      ST.kill();

      window.removeEventListener('resize', () => setSize());
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
