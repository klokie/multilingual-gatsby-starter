import React from 'react'
import T from 'i18n-react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'
import { TextField, Button } from 'react-md';

const ContactPage = ({ pageContext: { lang }, location: { pathname }, data }) => (
	<Layout path={pathname}>
		{T.setTexts(lang)}
		<Helmet title={T.translate('contact.title')} />
		<section id="contactForm" className="content">
			<div className="contactGrid">
				<TextField
				id="floating-center-title"
				label={T.translate('contact.inquiry')}
				lineDirection="center"
				className="md-cell md-cell--bottom contactInput"
				/>
				<TextField
				id="floating-center-title"
				label={T.translate('contact.email')}
				lineDirection="center"
				className="md-cell md-cell--bottom contactInput"
				/>
				<TextField
				id="floating-center-title"
				label={T.translate('contact.first')}
				lineDirection="center"
				className="md-cell md-cell--bottom contactInput"
				/>
				<TextField
				id="floating-center-title"
				label={T.translate('contact.last')}
				lineDirection="center"
				className="md-cell md-cell--bottom contactInput"
				/>
				<TextField
				id="floating-center-title"
				label={T.translate('contact.phone')}
				lineDirection="center"
				className="md-cell md-cell--bottom contactInput"
				/>
				<TextField
				id="floating-center-title"
				label={T.translate('contact.company')}
				lineDirection="center"
				className="md-cell md-cell--bottom contactInput"
				/>
			</div>	
			<Button raised secondary swapTheming id="submitForm">{T.translate('contact.submit')}</Button>
		</section>
	</Layout>
)

export default ContactPage