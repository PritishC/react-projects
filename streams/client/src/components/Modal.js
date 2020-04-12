import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
	/* The React Portal system allows us to create elements that are not children
	 * of deeply nested components within the web app. Instead, they can be children of
	 * top level elements such as the body. This allows us to create modals with ease
	 * and avoid CSS issues of stacking contexts where the z-index may get overriden
	 * by an element wrapping the modal (which we cannot prevent in a guaranteed manner
	 * in a real-world system).
	 * Portals are also used to inject a React app into server-side rendered apps such
	 * as those running on Django.
	 */

	 /* Regarding clicking and programmatically navigating on click -:
	  * Note that if we click an element inside the modal, the event will bubble up
	  * because there are no handlers for that click event inside the modal. Eventually
	  * it will reach the top div which does have an onClick handler. This causes programmatic
	  * navigation even when the user clicks somewhere inside the modal, which is unintended
	  * behaviour. Hence the stopPropagation call.
	  */
	return ReactDOM.createPortal(
		<div onClick={props.onDismiss} className="ui dimmer modals visible active">
			<div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
				<div className="header">
					{props.title}
				</div>
				<div className="content">
					{props.content}
				</div>
				<div className="actions">{props.actions}</div>
			</div>
		</div>,
		// Create a div with ID modal in index.html
		document.querySelector('#modal')
	);
};

export default Modal;