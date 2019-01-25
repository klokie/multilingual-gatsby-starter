import React from 'react'
import Link from './link'
import T from 'i18n-react'
import { Button } from 'react-md';

class NavLinks extends React.Component {
  render() {
    return (
      <div className="navLinks">
        <Link to="/">
          <Button flat>{T.translate('home.title')}</Button>
        </Link>
        <Link to="/projects">
          <Button flat>Projects</Button>
        </Link>
        <Link to="/contact">
          <Button flat>{T.translate('contact.title')}</Button>
        </Link>
      </div>
    );
  }
}

export default NavLinks;