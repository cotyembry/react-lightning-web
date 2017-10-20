import React from 'react';

export default class ToggleIcon extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			toggleFlag: false	//start off with the DownArrow being rendered
		}
	}
	_setState(stateToSet) {
		this.setState(stateToSet);
	}
	render() {
		return (
			<div style={styles.root}>
				{typeof this.props.src !== 'undefined' && typeof this.props.src === 'string' &&
					<img src={this.props.src} />
				}
				{typeof this.props.src === 'undefined' && this.state.toggleFlag === false &&
					<DownArrow state={this.state} setState={this._setState.bind(this)} />
				}
				{typeof this.props.src === 'undefined' && this.state.toggleFlag === true &&
					<UpArrow state={this.state} setState={this._setState.bind(this)} />
				}
			</div>
		)
	}
}

let UpArrow = (props) =>
	<svg style={styles.svg} onClick={() => { props.setState({toggleFlag: !props.state.toggleFlag}) }}>
		<path d='M 0 10 L 5 5 L 10 10' width='10px' />
	</svg>
let DownArrow = (props) =>
	<svg transform='translate(0 5)' style={styles.svg} onClick={() => { props.setState({toggleFlag: !props.state.toggleFlag}) }}>
		<path d='M 0 0 L 5 5 L 10 0' width='10px' />
	</svg>

const styles = {
	root: {
		display: 'inline-block'
	},
	svg: {
		width: '10px',
		height: '10px',
		cursor: 'pointer'
	}
}
