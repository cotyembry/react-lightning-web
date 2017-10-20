import React from 'react';

export default class AccordianShowHide extends React.Component {
	constructor(props) {
		super(props);

	}
	render() {
		return (
			<div>
				{this.props.sections.map((sectionName, i) => {
					return <div key={i}>{this.props.ToggleIcon}{sectionName}</div>
				})}
			</div>
		)
	}
}