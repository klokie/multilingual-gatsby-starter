import React from 'react'
import T from 'i18n-react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'
import Link from '../components/link'

const NotFoundPage = ({ pageContext: { lang }, location: { pathname } }) => (
	<Layout path={pathname}>
		{T.setTexts(lang)}
		<Helmet title={T.translate('e404.title')} />
		<h1>{T.translate('e404.header')}</h1>
		<p>{T.translate('e404.message')}</p>
		<Link to="/">{T.translate('e404.link')}</Link>
	</Layout>
)

export default NotFoundPage
