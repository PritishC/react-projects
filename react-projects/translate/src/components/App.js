import React from 'react';
import UserCreate from './UserCreate';
import { LanguageStore } from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';

/* Context object lifecycle
 * 1. App loads in browser
 * 2. We create a context object with default value 'english'
 * 3. App component renders, creates a Provider that wraps UserCreate
 * 4. Provider updates value of context object to `this.state.language`
 * 5. Button and Field reach into context object, see the value from `this.state.language`
 * 6. Button and Field render appropriate text to screen
 */
class App extends React.Component {
	render() {
		return (
			<div className="ui container">
				<LanguageStore>
					<LanguageSelector />
					{/* OLD COMMENT: Anytime the state.language property changes on App, we pass it down via
						a LanguageContext.Provider wrapper into the UserCreate component.
						This in turn changes the corresponding text on Field or Button. */}
					<ColorContext.Provider value="red">
						<UserCreate></UserCreate>
					</ColorContext.Provider>
				</LanguageStore>
			</div>
		);
	}
}

export default App;