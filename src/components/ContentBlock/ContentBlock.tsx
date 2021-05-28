import Image from 'next/image'
import React, { FunctionComponent } from 'react'

type ContentBlock = {
    className?: string
    layout?: string
    image: any // todo
    [x:string]: any
}

const ContentBlock: FunctionComponent<ContentBlock>  = ({ className, image, children } ) => {
    const { src, alt, width, height, position } = image
    // layout = (width && height) && 'fill'
    className = `contentblock ${className}`

    return(
        <div className={position ? `${className} contentblock--image-${position}` : className}>
            {src && (
                <div className={`contentblock__image`}>
                    <Image src={src} alt={alt} width={width} height={height} layout='intrinsic' priority={true} />
                </div>
            )}

            <div className="contentblock__content">
                { children }
            </div>
        </div>
    )
}

export default ContentBlock
