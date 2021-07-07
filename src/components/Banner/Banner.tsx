// Libs
import React from 'react';

interface IBanner {
    children: React.ReactNode;
    type?: string;
    count?: number;
}

const Banner = ({ children, type, count }: IBanner) => {
    return (
        <div className="banner" data-type={type} data-count={count}>
            { children }
        </div>
    );
};

Banner.defaultProps = { };

export default Banner;
