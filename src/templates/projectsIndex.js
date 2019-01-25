import React from 'react'
import { graphql } from 'gatsby'
import T from 'i18n-react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import Link from '../components/link'
import slugify from 'slugify'

export default ({
	pageContext: { lang, html, title },
	location: { pathname },
	data
}) => (
	<Layout path={pathname}>
		{T.setTexts(lang)}
		<Helmet title={title} />
		{data.allMarkdownRemark.edges
        .map(({node}) => (
            <div>
                <Img fixed={node.frontmatter.image.childImageSharp.fixed}/>
                <Link to={"/" + slugify(node.frontmatter.title)}>{node.frontmatter.title}</Link>
                <p>{node.frontmatter.key}</p>
            </div>
            )
        )}
	</Layout>
)

export const query = graphql`
    fragment fixedProjectImage on File {
        childImageSharp {
            fixed(width: 1400, height: 555, quality: 100) {
                ...GatsbyImageSharpFixed_withWebp
            }
        }
    }
	query AllMarkdown($key: String) {
        allMarkdownRemark (
            sort: {order: DESC, fields: [frontmatter___date]}, 
            filter: {frontmatter: {key: {in: [$key]}}}) {
                edges {
                    node {
                        frontmatter {
                            title
                            key
                            date
                            image {
                                ...fixedProjectImage
                            }
                        }
                    }
                }
          }
	}
`
