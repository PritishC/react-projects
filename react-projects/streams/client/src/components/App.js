import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import StreamDelete from './streams/StreamDelete';
import Header from './Header';
import history from '../history';

/* Router gotchas
 * 1. Multiple Route components can match the same URL; all of them will show under the URL in that case.
 * 2. The path prop on the Route component is not an exact match by default; if the `exact` prop is not used, multiple
 * components can match. It is a "contains" match. For eg, without `exact`, the components at "/" and "/page1" both match "/page1".
 * 3. Don't use anchor tags to navigate between routes. The page loads afresh and our React/Redux state data is lost.
 * Use the Link tag instead. <Link to="/pagetwo">Go to Page Two</Link>. The browser history object is listened to by the BrowserRouter
 * component and updated accordingly.
 * 4. BrowserRouter vs HashRouter vs MemoryRouter - BR is hard to deploy in some cases even though it is popular in tutorials. 
 * Note: Use Router to be able to use a custom history object.
 */

const App = () => {
	return (
		<div className="ui container">
			<Router history={history}>
				<div>
					{/* If we want to show a header on all pages, we need to place it outside the
						Router component. But in this case, the Header contains a Link component.
						Link components must be placed inside Router components. */}
					<Header></Header>
					{/* The Switch construct allows React to match only *one* (the first) route in the list
						of routes below with the one in the URL. Now going to /streams/new will not match both
						/streams/new and /streams/:id. Sort of like a switch-case programming construct. */}
					<Switch>
						<Route path="/" exact component={StreamList} />
						<Route path="/streams/new" exact component={StreamCreate} />
						{/* Use the : character to specify a variable in the URL */}
						<Route path="/streams/edit/:id" exact component={StreamEdit} />
						<Route path="/streams/delete/:id" exact component={StreamDelete} />
						<Route path="/streams/:id" exact component={StreamShow} />
					</Switch>
				</div>
			</Router>
		</div>
	);
};

export default App;