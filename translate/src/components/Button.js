import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
	// How to hook up a context object to a Component class. It has to
	// specifically be called `contextType`. `static` adds a property to
	// the class, not any instance of the class.
	// static contextType = LanguageContext;

	renderButton = (color) => {
		return (
			<button className={`ui button ${color}`}>
				<LanguageContext.Consumer>
					{({ language }) => language === 'english' ? 'Submit': 'प्रस्तुत'}
				</LanguageContext.Consumer>
			</button>
		);
	}

	render() {
		// const text = this.context === 'english'? 'Submit': 'प्रस्तुत';
		// We can also take the Consumer approach. The Consumer component takes
		// a child as "an argument" of sorts. This child is a function, that gets
		// as input the current value of the context object from parent App. This
		// function is called by the Consumer component.
		// The benefit of using Consumer as opposed to contextType is that we can
		// pull information from *multiple different context objects in a single component*.
		return (
			<ColorContext.Consumer>
				{color => this.renderButton(color)}
			</ColorContext.Consumer>
		);
	}
}

export default Button;