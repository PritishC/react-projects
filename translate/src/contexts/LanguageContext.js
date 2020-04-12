import React from 'react';

// The difference between context and props is that the props system is for'
// parent to direct child communication, while the context system allows for
// parent to arbitrarily nested deep child communication.
// Sources of data into a context object: Default Value OR Provider component (parent of current component)
// Sources of data out of a context object: this.context OR Consumer component
// Pass a value into the call below to create Default Values.
export default React.createContext('english');