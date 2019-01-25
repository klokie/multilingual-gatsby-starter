import React from 'react'
import { graphql } from 'gatsby'
import T from 'i18n-react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

export default ({
	pageContext: { lang, html, title },
	location: { pathname },
	data
}) => (
	<Layout path={pathname}>
		{T.setTexts(lang)}
		<Helmet title={title} />
		<Img fixed={data.markdownRemark.frontmatter.image.childImageSharp.fixed} />
		<div dangerouslySetInnerHTML={{ __html: html }} />
	</Layout>
)

export const query = graphql`
fragment fixedFeaturedImage on File {
	childImageSharp {
		fixed(width: 1400, height: 555, quality: 100) {
			...GatsbyImageSharpFixed_withWebp
		}
	}
}
	query Markdown($filePath: String!) {
		markdownRemark(fileAbsolutePath: { eq: $filePath }) {
			frontmatter {
				image {
					...fixedFeaturedImage
				}
			}
		}
	}
`
