import React, { useRef, useEffect, SetStateAction } from 'react';
import { gsap } from 'gsap';
import { Album } from '../../../types';
import throttle from 'lodash.debounce';

interface ISongListAlbums {
    albums: Album[],
    active:  SetStateAction<boolean | number>,
    mouseX: number,
    mouseY: number
};

const SongList: React.FC<ISongListAlbums> = ({ albums, active, mouseX, mouseY }) => {

    // Album Animation
    const distortRef = useRef<SVGSVGElement>(null!);
    const displacementMapRef = useRef<SVGFEDisplacementMapElement>(null!);
    const gaussianBlurRef = useRef<SVGFEGaussianBlurElement>(null!);

    useEffect(() => {
      const halfX: number = window.innerWidth / 2;
      const halfY: number = window.innerHeight / 2;

      let mouse = {
        x: halfX,
        y: halfY
      };

      document.addEventListener('mousemove', throttle((e: React.MouseEvent) => {
          mouse.x = e.clientX;
          mouse.y = e.clientY;
      }, 100));

      let displX = 0;
      let displY = 0;

      const distance = (
        x1: number,
        x2: number,
        y1: number,
        y2: number
      ) => {
        let a = x1 - x2;
        let b = y1 - y2;
        return Math.hypot(a,b);
      };

      const lineEq = (y2: number, y1: number, x2: number, x1: number, currentVal: number) => {
        // y = mx + b
        let m = (y2 - y1) / (x2 - x1);
        let b = y1 - m * x1;
        return m * currentVal + b;
      };

      const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;

      const render = () => {
        displX = lerp(displX, mouse.x, 0.08);
        displY = lerp(displY, mouse.y, 0.08);
        const mouseDist = distance(displX, mouse.x, displY, mouse.y);
        const dmScale = Math.min(lineEq(50, 0, 140, 0, mouseDist), 60);

        displacementMapRef.current.scale.baseVal = dmScale;

        requestAnimationFrame(() => render());
      };

      render();
    }, []);

    useEffect(() => {
        if(active) {
          const halfX: number = window.innerWidth / 2;
          const halfY: number = window.innerHeight / 2;

          gsap.to(distortRef.current, {
            y: `${mouseY - halfY}px`,
            x: `${mouseX - halfX}px`,
            duration: 0.5
          });

          gsap.fromTo(gaussianBlurRef.current, {
            attr: {
              stdDeviation: 3
            }
          },
          {
            attr: {
              stdDeviation: 0
            },
            duration: .5
          });
        }

    }, [mouseX, mouseY, active]);

    return (
        <>
            <svg ref={ distortRef } className="distort" viewBox="0 0 1000 1000">
              <filter id="filter">
                <feTurbulence type="fractalNoise" baseFrequency="0.01 0.005" numOctaves="5" seed="6" stitchTiles="noStitch" x="0%" y="0%" width="100%" height="100%" result="noise"/>
						    <feDisplacementMap ref={ displacementMapRef }  in="SourceGraphic" in2="noise" scale="0" xChannelSelector="R" yChannelSelector="B" x="0%" y="0%" width="100%" height="100%" filterUnits="userSpaceOnUse" result="distortion"/>
                <feGaussianBlur ref={ gaussianBlurRef } in="distortion" in2="SourceGraphic" result="blur" />
                <feMerge>
                  <feMergeNode in="distortion"/>
                  <feMergeNode in="blur"/>
                </feMerge>
              </filter>
              <g filter="url(#filter)">
                { albums.map(({id, image, width, height}) => {
                  return <image
                      className={`distort__img ${id === active ? "distort__img--active" : "" }`} xlinkHref={image}  key={ id }
                    />;
                })}
              </g>
            </svg>
        </>
    );
};

export default SongList;
