// People dropping off an insurance form

/* Redux lifecycle vs insurance company inner working
 * Action Creator -> Action -> dispatch() -> Reducers -> State
 * Person dropping off form -> form itself -> form receiver -> Departments -> Compiled department data
 */


// Action creators
const createPolicy = (name, amount) => {
  return {
    // Action object
    type: "CREATE_POLICY",
    payload: {
      name: name,
      amount: amount
    }
  };
};

const deletePolicy = (name) => {
  return {
    type: "DELETE_POLICY",
    payload: {
      name: name,
      
    }
  }
};

const createClaim = (name, amount) => {
  return {
    type: "CREATE_CLAIM",
    payload: {
      name: name,
      amount: amount
    }
  }
};

// this is a reducer that takes actions
// as arguments.
const claimsHistory = (oldListOfClaims = [], action) => {
  if(action.type != 'CREATE_CLAIM') {
    return oldListOfClaims;
  }
  
  // ES2015 syntax: take all records in
  // oldListOfClaims into a new array and add payload to
  // the new array.
  return [...oldListOfClaims, action.payload];
};

const accounting = (bagOfMoney = 100, action) => {
  if (action.type === 'CREATE_CLAIM') {
    return bagOfMoney -   action.payload.amount;
  } else if (action.type === 'CREATE_POLICY') {
    return bagOfMoney + action.payload.amount;
  }
  
  return bagOfMoney;
};

const policies = (listOfPolicies = [], action) => {
  if (action.type === "CREATE_POLICY") {
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === "DELETE_POLICY") {
    return listOfPolicies.filter((name) => {
      return name !== action.payload.name;
    });
  }
  
  return listOfPolicies;
};

const { createStore, combineReducers } = Redux;

const ourDepartments = combineReducers({
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies
});

// represents the whole redux application
const store = createStore(ourDepartments);

store.dispatch(createPolicy("Pritish", 20));
store.dispatch(createPolicy("Jim", 100));
store.dispatch(createPolicy("Bob", 50));
console.log(store.getState());

store.dispatch(createClaim("Pritish", 120))
store.dispatch(createClaim("Jim", 50))
console.log(store.getState());

store.dispatch(deletePolicy("Bob"))
console.log(store.getState());