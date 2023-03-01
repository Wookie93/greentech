import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import React from 'react'

interface WrapProps {
  children: JSX.Element | JSX.Element[]
  className?: string | undefined
  image: {
    gatsbyImageData: IGatsbyImageData
  }
  alt: string
}

const BackgroundSection = ({ children, className, image, alt }: WrapProps) => {
  if (!image) return null
  const img = getImage(image)
  if (!img) return null

  return (
    <div className={`grid ${className}`}>
      <GatsbyImage image={img} alt={alt} style={{ gridArea: '1/1' }} />
      <div className="grid relative p-10 lg:p-0" style={{ gridArea: '1/1' }}>
        {children}
      </div>
    </div>
  )
}

export default BackgroundSection
