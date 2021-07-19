import React, { useRef, useEffect, SetStateAction } from 'react';
import { gsap } from 'gsap';
import { Album } from '../../../types';

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

    useEffect(() => {
      const halfX: number = window.innerWidth / 2;
      const halfY: number = window.innerHeight / 2;

      let mouse = {
        x: halfX,
        y: halfY
      };

      document.addEventListener('mousemove', e => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      });

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
      }
    }, [mouseX, mouseY, active]);

    return (
        <>
            <svg ref={ distortRef } className="distort" width="350" height="450" viewBox="0 0 350 450">
              <filter id="distortionFilter">
                {/* <feTurbulence type="turbulence" baseFrequency="0.07 0.01" numOctaves="5" seed="2" stitchTiles="stitch" x="0%" y="0%" width="100%" height="100%" result="noise"/>
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="0" xChannelSelector="R" yChannelSelector="B" x="0%" y="0%" width="100%" height="100%" filterUnits="userSpaceOnUse"/> */}
                <feTurbulence type="fractalNoise" baseFrequency="0.01 0.003" numOctaves="5" seed="2" stitchTiles="noStitch" x="0%" y="0%" width="100%" height="100%" result="noise"/>
						  <feDisplacementMap ref={ displacementMapRef }  in="SourceGraphic" in2="noise" scale="0" xChannelSelector="R" yChannelSelector="B" x="0%" y="0%" width="100%" height="100%" filterUnits="userSpaceOnUse"/>
              </filter>
              <g filter="url(#distortionFilter)">
                { albums.map(({id, image}) => {
                  return <image
                      className={`distort__img ${id === active ? "distort__img--active" : "" }`} x="50" y="50" xlinkHref={image} height="350" width="350" key={ id }
                    />;
                })}
              </g>
            </svg>
        </>
    );
};

export default SongList;
