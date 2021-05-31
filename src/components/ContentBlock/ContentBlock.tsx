import Image from 'next/image';
import React, { FunctionComponent } from 'react';

type ContentBlock = {
    className?: string
    layout?: string
    image: any // todo
    imageDecoration?: any // todo
    [x:string]: any
};

const ContentBlock: FunctionComponent<ContentBlock>  = ({ className, image, imageDecoration, children } ) => {
    const { src, alt, width, height, position } = image
    // layout = (width && height) && 'fill'
    className = `contentblock ${className}`

    return(
        <div className={position ? `${className} contentblock--image-${position}` : className}>
            {src && (
                <div className={`contentblock__image`}>
                    <Image src={src} alt={alt} width={width} height={height} />
                    {imageDecoration && (
                      <div className="contentblock__image__decoration">
                        <Image src={imageDecoration.src} alt={imageDecoration.alt} width={imageDecoration.width} height={imageDecoration.height} />
                      </div>
                    )}
                </div>
            )}

            <div className="contentblock__content">
                { children }
            </div>
        </div>
    );
}

export default ContentBlock
