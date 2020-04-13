/* Reducer rules
 * 1. Reducers must never return undefined.
 * 2. Reducers produce state or data that depends only on the previous state and the action.
 * 3. Reducers must not reach out to values outside the function to decide their return values (they are pure).
 * 4. Reducers must not mutate the state argument - actually, it can, the problem arises when we let the state
 * object remain the same but change some property on it, or let the state variable reference the same array or object
 * and change some value in them. Instead, we need to return a *new* value. This is because the !== operator checks for
 * reference equality and is not a deep equality check.
 */
export default (state = [], action) => {
	if (action.type === 'FETCH_POSTS') {
		return action.payload;
	}

	return state;
};