import React from 'react'
import Link from './link'
import Sidebar from './sidebar'
import logo from '../assets/images/logo.svg'


const Header = ({ children, data }) => (
	<header className="content">
		<Sidebar className='hello' />
		<Link to="/" activeClassName="active" className="navLogo">
			<img src={logo} alt="logo" />
		</Link>
		<div className="navRightHandSide">{children}</div>
	</header>
)

export default Header