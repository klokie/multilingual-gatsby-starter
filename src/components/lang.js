import React from 'react'
import T from 'i18n-react'
import { push } from 'gatsby'
import i18n from '../i18n/config/i18n'
import { Button } from 'react-md';

class LangSelector extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			value: T.translate('path'),
			path:
				T.translate('path') && this.props.path.search(T.translate('path')) === 0
					? this.props.path.replace(T.translate('path'), '')
					: this.props.path
		}
	}

	handleClick = e => {
		this.setState({ value: e.target.value })
		push(e.target.value + this.state.path)
	}

	render() {
		return (
			<div className="langSelector">
				{Object.keys(i18n).map((lang, index) => (
					<Button flat key={index} value={i18n[lang].path} onClick={this.handleClick}>
						{i18n[lang].name}
					</Button>
				))}
			</div>
		)
	}
}

export default LangSelector;
