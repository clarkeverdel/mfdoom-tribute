// Libs
import React from 'react';
import Image from 'next/image';

// Resources
import Styles from './AllCaps.module.scss';

// Components
import BlinkingMask from '../../src/components/BlinkingMask/BlinkingMask';

const AllCaps = () => {
    return (
        <section className={`section ${Styles.section}`}>
            <div className={`section__inner ${Styles.section}`}>
              <div className="section__title--tilted">
                <Image
                  src="/static/img/all_caps.svg"
                  width={135}
                  height={1040}
                  alt="All Caps"
                />
              </div>
              <BlinkingMask />
            </div>
        </section>
    );
};

export default AllCaps;
