import React from 'react'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'

interface imgProps {
  image: {
    gatsbyImageData: IGatsbyImageData
  }
  alt: string
  className?: string
  classNameImg?: string
}

const Image = ({ image, alt = '', className, classNameImg }: imgProps) => {
  if (!image) return null
  const img = getImage(image)
  if (!img) return null
  return <GatsbyImage image={img} alt={alt} className={`${classNameImg}`} />
}

export default Image
