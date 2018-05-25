import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Button(props) {
	const {
		to,
		onClick,
		children,
		left,
		right
	} = props

	const disabledClasses = props.disabled ? 'o-50' : 'dim'
	const buttontypeClasses = props.buttontype === 'solid' ? 'bg-mid-gray white bn' : 'ba bw1 mid-gray bg-transparent'

	const leftClass = left ? 'br--left' : ''
	const rightClass = right ? 'br--right' : ''

	const classes = `pointer link br-pill ph4 pv2 f4 dib ${disabledClasses} ${buttontypeClasses} ${leftClass} ${rightClass}`

	if (props.disabled) {
		return (
			<a {...props} className={classes}>{children}</a>
		)
	} else if (props.submit) {
		return (
			<button {...props} onClick={onClick} type="submit" className={classes}>{children}</button>
		)
	}

	return to ? (
		<Link
			{...props}
			to={to}
			onClick={onClick}
			className={classes}
		>
			{children}
		</Link>
	) : (
		<a
			{...props}
			onClick={onClick}
			role='button'
			tabIndex={0}
			onKeyDown={onClick}
			className={classes}
		>
			{children}
		</a>
	)
}

Button.propTypes = {
	children: PropTypes.node,
	to: PropTypes.node,
	disabled: PropTypes.bool,
	buttontype: PropTypes.oneOf(['solid', 'outline-only']),
	onClick: PropTypes.func,
	submit: PropTypes.bool,
	left: PropTypes.bool,
	right: PropTypes.bool,
}

Button.defaultProps = {
	children: null,
	to: null,
	disabled: false,
	buttontype: 'solid',
	onClick: null,
	submit: false,
	left: false,
	right: false
}

export default Button
