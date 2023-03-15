import React, { lazy, Suspense } from 'react'
import { graphql } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'

// components
import Image from '../Image/Image'
import Wrapper from '../Wrapper/Wrapper'
import ContentfulRichTech from '../ContenfulRichText/ContentfulRichText'

//styles
import 'react-medium-image-zoom/dist/styles.css'
import 'src/assets/styles/image-anim/image-anim.scss'

const Zoom = lazy(() => import('react-medium-image-zoom'))

interface Props {
  title: string
  images: [
    {
      title: string
      description: string
      gatsbyImageData: IGatsbyImageData
    },
  ]
  additinalDesc: {
    raw: []
  }
}

interface NodeProps {
  gatsbyImageData: IGatsbyImageData
  title: string
}

const ImageGrid = ({ images, additinalDesc }: Props) => {
  return (
    <section className="flex flex-wrap justify-center gap-6">
      <Wrapper className="max-w-[560px] text-center">
        <ContentfulRichTech richText={additinalDesc} />
      </Wrapper>
      <div className="mark-left overflow-x-scroll snap-mandatory snap-x md:overflow-x-auto">
        <div className="slider">
          <div className="slider__inner flex md:flex-wrap md:justify-center md:gap-4">
            {images.map((item: NodeProps, index: number) => (
              <div
                key={index}
                className="slider__item mr-4 md:mr-0"
                aria-label="slider-item"
              >
                <Suspense fallback={<div>Loading...</div>}>
                  <Zoom a11yNameButtonUnzoom="unzomm" a11yNameButtonZoom="zoom">
                    <Image
                      image={item.gatsbyImageData}
                      alt={item.title}
                      classNameImg="scale-up"
                    />
                  </Zoom>
                </Suspense>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export const query = graphql`
  fragment ImageGridFragment on ContentfulImageGrid {
    __typename
    contentful_id
    title
    images {
      title
      description
      gatsbyImageData(layout: FIXED)
    }
    additinalDesc {
      raw
    }
  }
`

export default ImageGrid
