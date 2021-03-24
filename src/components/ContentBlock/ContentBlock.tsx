import Image from 'next/image'

interface ContentBlock {
    children: React.ReactNode
    image?: {
        src?: string
        alt?: string
        width?: number
        height?: number
        position?: string
    }
}

const ContentBlock = ({ children, image }: ContentBlock) => {
    const { src, alt, width, height, position = 'left' } = image || {}
    const layout = width && height ? `intrinsic` : `full`

    return(
        <div className={position ? `contentblock contentblock--image-${position}` : `contentblock`}>
            {src && (
                <div className={`contentblock__image`}>
                    <Image src={src} alt={alt} width={width} height={height} layout={layout} />
                </div>
            )}

            <div className="contentblock__content">
                { children }
            </div>
        </div>
    )
}

export default ContentBlock