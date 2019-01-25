import React from 'react'
import Head from './head'
import Header from './header'
import Lang from './lang'

import NavLinks from './navlinks.js'

export default ({ children, path, seo }) => (
	<div>
		<Head seo={seo} path={path} />
		<Header siteTitle="Mountain Central">
			<NavLinks />
			<Lang path={path} />
		</Header>
		<div>{children}</div>
	</div>
)
