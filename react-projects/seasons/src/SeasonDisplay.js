import React from 'react';
// Webpack is going to see that we're importing a CSS file
// and will take the contents out of there and stick it into
// the index.html file where all stylesheets are referred.
import './SeasonDisplay.css';

const getSeason = (lat, month) => {
	// month is 0-indexed
	if (month > 2 && month < 9) {
		return lat > 0 ? 'summer' : 'winter';
	} else {
		return lat > 0 ? 'winter' : 'summer';
	}
}

const seasonConfig = {
	summer: {
		text: "Let's hit the beach",
		iconName: "sun"
	},
	winter: {
		text: "Burr it's chilly",
		iconName: "snowflake"
	}
};

const SeasonDisplay = (props) => {
	const season = getSeason(props.lat, new Date().getMonth());
	
	// ES2015 syntax to unpack properties from an object
	const { text, iconName } = seasonConfig[season];

    return (
    	<div className={`season-display ${season}`}>
    		{/* ${iconName} gives us the value of the icon variable
    			above, while the other, simple icon is just the
    			class named icon. This is newer, ES2015 backtick syntax. */}
    		<i className={`${iconName} icon icon-left massive`} />
    		<h1>{text}</h1>
    		<i className={`${iconName} icon icon-right massive`} />
    	</div>
    );
};

export default SeasonDisplay;