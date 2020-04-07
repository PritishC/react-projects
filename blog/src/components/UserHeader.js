import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
	componentDidMount() {
		this.props.fetchUser(this.props.userId);
	}

	render() {
		const { user } = this.props;

		if (!user) {
			return null;
		}

		return <div className="header">{user.name}</div>;
	}
}

// mapStateToProps gets state and ownProps as arguments
const mapStateToProps = (state, ownProps) => {
	const user = state.users.find((user) => {
		return user.id === ownProps.userId;
	});
	return {
		user: user
	};
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);