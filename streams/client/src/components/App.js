import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import StreamDelete from './streams/StreamDelete';
import Header from './Header';

/* Router gotchas
 * 1. Multiple Route components can match the same URL; all of them will show under the URL in that case.
 * 2. The path prop on the Route component is not an exact match by default; if the `exact` prop is not used, multiple
 * components can match. It is a "contains" match. For eg, without `exact`, the components at "/" and "/page1" both match "/page1".
 * 3. Don't use anchor tags to navigate between routes. The page loads afresh and our React/Redux state data is lost.
 * Use the Link tag instead. <Link to="/pagetwo">Go to Page Two</Link>. The browser history object is listened to by the BrowserRouter
 * component and updated accordingly.
 * 4. BrowserRouter vs HashRouter vs MemoryRouter - BR is hard to deploy in some cases even though it is popular in tutorials. 
 */

const App = () => {
	return (
		<div className="ui container">
			<BrowserRouter>
				<div>
					{/* If we want to show a header on all pages, we need to place it outside the
						Router component. But in this case, the Header contains a Link component.
						Link components must be placed inside Router components. */}
					<Header></Header>
					<Route path="/" exact component={StreamList} />
					<Route path="/streams/new" exact component={StreamCreate} />
					<Route path="/streams/edit" exact component={StreamEdit} />
					<Route path="/streams/delete" exact component={StreamDelete} />
					<Route path="/streams/show" exact component={StreamShow} />
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;