/* Custom browser history object that we maintain, as opposed to BrowserRouter maintaining it.
 * This is done so that we don't have to constantly declare the `history` object as an argument
 * in our API request action creators. We then control browser history in the app.
 * The history package is installed automatically as part of react-router-dom.
 */
 import { createBrowserHistory } from 'history';
 export default createBrowserHistory();