import Image from 'next/image';
import React, { FunctionComponent } from 'react';

type ContentBlock = {
    className?: string
    image: any // todo
    imageDecoration?: any // todo
    [x:string]: any
};

const ContentBlock: FunctionComponent<ContentBlock>  = ({ className, image, imageDecoration, children } ) => {
    const { src, alt, width, height, position } = image

    className = `contentblock ${className}`

    return(
        <div className={position ? `${className} contentblock--image-${position}` : className}>
            {src && (
                <div className={`contentblock__image`}>
                    <div>
                      <Image src={src} alt={alt} width={width} height={height} />
                    </div>

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
