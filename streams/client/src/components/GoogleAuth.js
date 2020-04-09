import React from 'react';

class GoogleAuth extends React.Component {
	state = {
		isSignedIn: null // don't know if signed in or not signed in at start
	}

	componentDidMount() {
		window.gapi.load('client:auth2', () => {
			window.gapi.client.init({
				clientId: "236633716871-9s20cjed9jnppo6vvkh7praff27u5r1i.apps.googleusercontent.com",
				scope: 'email'
			}).then(() => {
				// Store a reference to the GAPI auth instance on the class
				this.auth = window.gapi.auth2.getAuthInstance();
				this.setState({isSignedIn: this.auth.isSignedIn.get()});
				// Call onAuthChange anytime the user's authentication status changes
				this.auth.isSignedIn.listen(this.onAuthChange);
			});
		});
	}

	onAuthChange = () => {
		this.setState({
			isSignedIn: this.auth.isSignedIn.get()
		});
	};

	onSignIn = () => {
		this.auth.signIn();
	}

	onSignOut = () => {
		this.auth.signOut();
	}

	renderAuthButton() {
		if (this.state.isSignedIn === null) {
			return;
		} else if (this.state.isSignedIn) {
			return (
				<button onClick={this.onSignOut} className="ui red google button">
					<i className="google icon"></i>
					Signout
				</button>
			);
		} else {
			return (
				<button onClick={this.onSignIn} className="ui red google button">
					<i className="google icon"></i>
					Sign In
				</button>
			);
		}
	}

	render() {
		return <div>{this.renderAuthButton()}</div>;
	}
}

export default GoogleAuth;