import React from 'react'
import { FormattedMessage } from 'react-intl'
import Button from '../../components/button'

function Admin() {
	return (
		<div className="pa4">
			<div className="cf ma4 w-100">
				<Button left>
					<FormattedMessage id="approved" />
				</Button>
				<Button right>
					<FormattedMessage id="declined" />
				</Button>
			</div>
			<div className="mw9 center ph3-ns">
				<div className="cf ph2-ns">
					<div className="fl w-100 w-third-ns pa2">
						<div className="outline bg-white pv4"></div>
					</div>
					<div className="fl w-100 w-third-ns pa2">
						<div className="outline bg-white pv4"></div>
					</div>
					<div className="fl w-100 w-third-ns pa2">
						<div className="outline bg-white pv4"></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Admin
