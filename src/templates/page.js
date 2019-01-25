import React from 'react'
import T from 'i18n-react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'

export default ({
	pageContext: { lang, html, title },
	location: { pathname }
}) => (
	<Layout path={pathname}>
		{T.setTexts(lang)}
		<Helmet title={title} />
		<div dangerouslySetInnerHTML={{ __html: html }} />
	</Layout>
)
