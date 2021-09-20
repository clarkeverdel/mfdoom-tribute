// Libs
import React, { useLayoutEffect, useRef, useState, SetStateAction, useEffect } from 'react';

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

    return <>

      <SiteMeta {...meta} />
      <Component {...pageProps} />

    </>;
};

// Props
App.defaultProps = {};

export default App;
