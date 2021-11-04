import React, { useCallback, useEffect, useState } from 'react';
import smoothScroll from 'static/js/helpers/smoothScroll';

export const SmoothScroll: React.FC = ({ children }) => {
  const [scrollContainerNode, setScrollContainerNode] = useState<HTMLDivElement>();

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
    if(!scrollContainerNode) return

    smoothScroll(scrollContainerNode);

  }, [scrollContainerNode]);

  return <main>
          <div id="scroll-container" ref={scrollContainer} >
            { children }
          </div>
      </main>

}
