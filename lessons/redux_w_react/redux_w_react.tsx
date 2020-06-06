// Intro

// WHAT IS REDUX?:
// Redux is a state management library.
// Redux helps us to keepp the state of the whole app in a single place

// WHAT IS THE STATE?:
// I would describe the "state" as the data that is used to render the app at
// any given time.
// We keep this data in a JS OBJ.
// e.g. in a simple app which renders a list of muffins,
// the state could look like this:

let state = {
    muffins: [
        { name: 'Choc chip muffin' },
        {name: 'Blueberry muffin'}
    ]
}

// HOW TO MODIFY THE STATE?:
// To modify the state from within a comp we dispatch an action:

//SomeComp.js
dispatch({
    type: 'muffins/add' ,
    payload: {
        muffin: { name: 'Banana muffin' },
    },
});

// Dispatching actions is the only way to change the state.

// An action is represented by an OBJ with the type property.
// The property is the action's name.
// You can add any other property to this object
// (this is how you pass the data to the reducer).

// There are no formal rule as to how you should name your actions.
// Give your actions  descriptive and meaningful names.
// Don't use ambigious names like receive_data or set_value.

// It is a common practice to share actions through the actions creator functs.
// Such functions create and return the action OBJs.
// We store action creators outside of the component files
// (e.g. src/redux/actions.js).
// This makes it easy to see what actions
// are available in the app and to maintain and reuse them.

// actions.js
export function addMuffin(muffin) {
    return {
        type: 'muffins/add',
        payload: { muffin },
    };
}

// SomeComp.js
dispatchEvent(addMuffin({ name: 'Banana muffin' }));

// Once an action is dispatched, Redux calls the reducer with the previous state
// and the dispatched action OBJ as the ARGS.
// Reducer is a funct which decides how to change the state according to a given action.
// We create this function and register it with Redux.

// This is how a basic reducer looks:
let initialState = {
    muffins: [
        { id: 1, name: 'Choc chip muffin' },
        { id: 2, name: 'Blueberry muffin' }
    ]
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'muffins/add':
        let { muffin } = action.payload;
        return { ...state, muffins: [...state.muffins, muffin] };
        default:
            return state;
    }
}

// When this reducer identifies the muffin/add action
// it adds the given muffin to the list.

// IMPORTANT. The reducer copies the previous state OBJ instead of mutating it.
// The rule is that the atate must be immutable(read-only).
// The reducer should copy any OBJ that it would like to change before changing it.
// This incl. the root OBJ and any nested OBJ.

// We need to cp the state for Redux to be able to check(using shallow checking)
// if the state returned by the reducer is different from the previous state.
// It is important to follow this rule for Redux to respond to our statechanges correctly.
// Also, when using redux with react-redux this helps react-redux to decide which comps
// should be re-rendered when the state changes.

// The other important rule is that the reducer funct. should be pure.
// Given the same input it should always produce the same output
// without causing any side effects.
// A side effect is something that reads or changes the ENV arounf the FUNCT.
// EXs of side effects are reading | writing a global VAR,
// running a network request, etc
// This rule helps us reproduce the look and
// behaviour of the app given a particular state OBJ.

// Also, both of these rules make sure that Redux's
// time travel feature works properly with our app.
// Time travel allows us to easily undo actions &
// then apply them again.
// This helps a lot w/ debugging using Redux DevTools.

// TO SUMMARIZE:
//      -Our app has a single state.
//      -To change statesmwe dispatch actions.
//      -The reducer FUNCT handles the dispatched actions and changes the state
// accordingly.
//      -Redux and react-redux check the state returned
// by the reducer for changes using shallow checking.


// UNIDIRECTIONAL DATA FLOW:

// So, we've learned  the following about redux:
//      -we dispatch an action from the view layer (e.g. a React COMP),
//      -reducer gets this action and changes the state accordingly.
//      -the store notifies the view layer about state change &
// the view layer renders the app accordingly to the latest state.
//      -& the cycle repeats when we need to change the state again.

// So the data in a Redux app flows in a single way circular pattern.
// AKA a undirectional data flow.
//  This is how we could represent it:

//                 current state & action
// ACTION ->    STORE ------------> REDUCER
// ^              |   <------------ 
// | dispatches   V      new state
// -------------VIEW

// This pattern makes it easier to understand how a Redux app works.

// SETTING UP REDUX IN A REACT APP:

// In this post we will be building a simple app which lists a number of muffins.

// See my_react_redux/