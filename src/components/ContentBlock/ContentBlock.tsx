import Image from 'next/image';
import React, { FunctionComponent } from 'react';

type TContentBlock = {
    className?: string;
    image: any; // todo
    imageDecoration?: any; // todo
    [x:string]: any;
};

const ContentBlock: FunctionComponent<TContentBlock>  = ({ className, image, imageDecoration, children } ) => {
    const { src, alt, width, height, position, placeholder, blurDataURL } = image;

    className = `contentblock ${className}`;

    return(
        <div className={position ? `${className} contentblock--image-${position}` : className}>
            {src && (
                <div className={`contentblock__image`}>
                    <div>
                      <Image src={src} alt={alt} width={width} height={height} placeholder={placeholder} blurDataURL={blurDataURL} />
                    </div>

                    {imageDecoration && (
                      <div className="contentblock__image__decoration">
                        <Image src={imageDecoration.src} alt={imageDecoration.alt} width={imageDecoration.width} height={imageDecoration.height} placeholder={imageDecoration.placeholder} blurDataURL={imageDecoration.blurDataURL} />
                      </div>
                    )}
                </div>
            )}

            <div className="contentblock__content">
                { children }
            </div>
        </div>
    );
};

export default ContentBlock;
