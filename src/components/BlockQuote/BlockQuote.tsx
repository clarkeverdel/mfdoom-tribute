// Libs
import React from 'react';

type IBlockQuote = React.FC<{ className: string}>

const BlockQuote: IBlockQuote = (props) => {
    return (
        <blockquote className={`blockquote ${props.className}`}>
            <h2 className="blockquote__heading">
                <div>Living on</div>
                <div>borrowed</div>
                <div>time,</div>
                <div>the clock</div>
                <div>ticks faster.</div>
            </h2>
            <p className="blockquote__footer">
                <b className="blockquote__song">Accordian</b> <i className="blockquote__author">from Madvillainy</i> <b className="blockquote__date">(2004)</b>
            </p>
        </blockquote>
    );
};

export default BlockQuote;
