import React from 'react'
import { graphql } from 'gatsby'
import BlogListView from 'src/components/views/BlogList'

const AllBlogListPage = ({ data, pageContext }: any) => {
  const {
    allContentfulBlogPost: { nodes },
  } = data

  const { contentfulListsSettings } = data

  return (
    <>
      <BlogListView
        data={nodes}
        pageContext={pageContext}
        info={contentfulListsSettings}
      />
    </>
  )
}

export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
    allContentfulBlogPost(limit: $limit, skip: $skip) {
      group(field: { test: SELECT }) {
        totalCount
        fieldValue
      }
      nodes {
        gatsbyPath(filePath: "/{contentfulBlogPost.url}")
        pageTitle
        category {
          category
        }
        thubmnail {
          gatsbyImageData
          title
        }
      }
    }
    contentfulListsSettings {
      blogMetatitle
      blogTopDescription {
        raw
      }
    }
  }
`

export default AllBlogListPage
