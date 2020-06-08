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

// First install "redux" & "react-redux"

// npm i -S redux react-redux

// Remember, Redux can be used w/ other view libraries.
// So we need the "react-redux" package to connect React COMPS
// w/ Redux store.

// Next, we should prepare the Redux store.
// The store is an OBJ which keeps the app's state
// & provides the API for working w/ it.
// It allows us to:

//      -read the state
//      -dispatch actions to change the state
//      -& subscribe/unsubscribe to/from the state changes.

// IMPORTANT. Your app should have a single store

// Let's keep the Redux functionality in the DIR called "redux"

// mkdir src/redux

// Let's write the store initialization
// code in the file src/redux/store.js:

// File: src/redux/store.js

import { createStore } from 'redux';

const initialState = {
  muffins: [
    { id: 1, name: 'Chocolate chip muffin' },
    { id: 2, name: 'Blueberry muffin' },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;

// We use the createStore FUNCT from redux package to create
// the store.
// When the store initializes, it obtains the initial state
// by calling our reducer FUNCT w/ undefined for the state &
// a dummy action (e.g., reducer(undefined, { type: 'DUMMY'})).

// Now we should provide the store to the React COMPS.
// For this, we open the src/index.js & wrap the <App /> COMP
// into the <Provider /> COMP from the "react-redux" package:

// src/index.ts File:
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// The <Provider /> COMP provides the store to the child COMP tree using React context.
// Now we can use the React hooks or the connect FUNCT from the "react-redux" package
// to get the state & dispatch actions from any COMP in the tree.


// USING REACT HOOKS TO READ THE STATE:
// Instead of hard-coding the muffin list in "Muffin.js", let's use the useSelector hook
// from "react-redux" to select the muffins array from the state.

// file: src/redux/selectors.js
export const selectMuffinsArray = (state) => state.muffins;

// file: src/components/Muffins/Muffins.js
import React from 'react';
import { useSelector } from 'react-redux';
import { selectMuffinsArray } from '../../redux/selectors';

const Muffins = () => {
    const muffins = useSelector(selectMuffinsArray);

    return (
        <ul>
            {muffins.map((muffin) => {
                return <li key={ muffin.id }>{muffin.name}</li>;
            })}
        </ul>
    );
};

export default Muffins;

// The useSelector hook expects a selector FUNCT as the 1st ARG.
// We create selector FUNCTs to provide a reusable API for selecting parts of the state

// We use the state in many COMPs.
// If we select things from the state directly (e.g. let muffins = state.muffins)
// & at some point we change the STRUCT of the state (e.g. state.muffins becomes
// state.muffins.items) we'd have to edit each COMP where we access the state PROPS directly.
// Using selector FUNCTs we can change the way we select the state in a single place
// (in our example, it's the "selectors.js" file).

// USING REACT HOOKS TO DISPATCH ACTIONS

// Let's add a "Like" button to each muffin in the list.

// 1st, let's aa the "likes" PROP to the state(# of likes).

// file: src/redux/store.js
const initialState = {
    muffins: [ 
        { id: 1, name: 'Choc chip muffin', likes: 11},
        { id: 2, name: 'Blueberry muffin', likes: 10},
    ],
};

// Next, let's reder the # of likes and the "like" button

// files: src/components/Muffins/Muffins.js
<li key={muffins.id}>
    {muffins.name} <button>Like</button> <i>{muffins.likes}</i>
</li>

// Now let's get the dispatch FUNCT in the COMP using useDispatch hook from 'react-redux'

// file: src/components/Muffins/Muffins.js
import { useSelector, useDispatch } from 'react-redux';
// ...
const dispatch = useDispatch();

// Let's define an action for the "Like" button.

// File: src/redux/actions.js
export const likeMuffin = (muffinId) => ({
    type: 'muffins/like',
    payload: { id: muffinId },
});

// Next, let's create the "click" event handler for the "Like" button:

// file: src/components/Muffins/Muffins.js
import { likeMuffin } from '../../redux/actions';
// ...

{
    Muffins.map((muffin) => {
        const handleLike = () => {
            dispatch(likeMuffin(muffin.id));
        };
        return (
            <li key={muffin.id}>
                {muffin.name} <button onClick={handleLike}>Like</button>{' '}
                <i>{muffin.likes}</i>
            </li>
        );
    });
}

// If we click this button, nothing happens because we didn't create a
// reducer for the action that is dispatched(muffins/like).

// So let's reduce this actions.

// file: src/redux/store.js
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'muffins/like':
            const { id } = action.payload;
            return {
                ...state, muffins: state.muffins.map((muffin) => {
                    if (muffin.id === id) {
                        return (...muffin, likes: muffin.likes + 1);
                    }
                    return Muffins;
                }),
            };
            default:
                return state;
    }
};

// It's IMPORTANT NOT to mutate the state.
// So I CP the state OBJ, CP the muffins array(the map method returns a new array).
// Finally, I CP only the muffin which is being changed.
// I don't  touch the other muffins to signify that they do not change.

// Now, if we click the "Like" BTN, the muffins/like action is dispatched & the reducer
// changes the state accordingly.
// The # of likes of the chosen muffin ++.


// USING "JSON-SERVER" FOR THE LOCAL FAKE API:

// "json-server" is a fake REST API server which is really easy to set up.
// We can use it to mock API endpoints while working o a front end app.
// I'd like to use this server for the e.g.s in this post.
// So let me show you how to install & run it.

// To install:
// npm i -D json-server

// To tell the server what data is should serve we create a JSON file.
// Let's call it db.json

{
    "muffins": [
        { "id": 1, "name": "Chocolate chip muffin", "likes": 11 },
        { "id": 2, "name": "Blueberry muffin", "likes": 10 }
    ]
}

// Now let's open package.json & add the script which will start this server:
"scripts": {
    "json-server": "json-server --watch db.json --port 3001"
}

// To run it:

// npm run json-server

// The server should start on http://localhost:3001

// To stop it, focus on the terminal window where you started it & press CTRL + C

// We can use the following routes("json-server" generates them by looking at db.json)

// GET/muffins
// POST/muffins
// PUT/muffins/{id}
// DELETE/muffins/{id}

// ASYNC ACTIONS:

// Please check the section "Using "json-server" for the Local Fake API"

// Usually, we run network requests to get & edit the data.
// Let's see how to do it the Redux way

// By default, Redux allows us to dispatch an action
// only in the form of an OBJ w/ type PROP

// However, Redux allows us to alter the way it dispatches actions using a middleware FUNCT.
// 1 such FUNCT is called "redux-thunk".

// Let's install and register this middleware FUNCT w/ Redux.

// npm i -S redux-thunk

// file: src/redux/store.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// ...
const store = createStore(reducer, applyMiddleware(thunk));

// applyMiddleware is a utiliy FUNCT which takes list of middleware FUNCTs
// & groups them in a single middleware FUNCT which we pass to creatStore a the 2nd ARG

// Also, let's empty the muffins array in the initial state, because we are going to
// load muffins from the fake API.

// file: src/redux/store.js
const initialState = {
    muffins: [],
};

// "redux-thunk" allows us to dispatch not only OBJs, but also FUNCTs:

dispatch((dispatch, getState) => {
    let state = getState();
    // do soething async &
    dispatch(/* some action */);
});

// The thunk FUNCT gets the ORG dispatch FUNCT as the 1st ARG &
// the getState FUNCT as the 2nd ARG.

// So, what we can do w/ a thunk FUNCT is, e.g., to fetch the data from the network &
// when the data is ready we can dispatch an action OBJ w/ this data,
// so reducer can add this data to the state.

// Let's create the actions.js file & add the async action creator FUNCT dor loading muffins

// file: src/redux/actions.js
export const loadMuffins = () => async (dispatch) => {
    dispatch({
        type: 'muffins/load_request',
    });

    try {
        const response = await fetch ('http://localhost:3001/muffins');
        const data = await response.json();

        dispatch({
            type: 'muffins/load_success',
            payload: {
                muffins: data,
            },
        });
    } catch (e) {
        dispatch({
            type: 'muffins/load_failure',
            error: 'Failed to load muffins.',
        });
    }
};

// a thunk FUNCT can be either sync or async.
// We can dispatch multiple actions in this FUNCT.
// In our e.g. we dispatch muffins/load_request action to signify that the request starts
// We can use  this action to show a spinner somewhere in the app.
// Then, when the request succeeds we dispatch the muffins/load_success action
// w/ the fetched data.
// Finally if the request fails, we dispatch the muffins/load_failure action
// to show the error message to the user.

// now let's create the reducers for these actions:

// file: src/redux/store.js
const reducer = (state = initialState, action) => {
    switch (action.type) {
        // ...
        case 'muffin/load_request':
            return { ...state, muffinsLoading: true };

        case 'muffins/load_success':
            const { muffins } = action.payload;
            return { ...state, muffinsLoading: false, muffins };

        case 'muffins/load_failure':
            const { error } = action;
            return { ...state, muffinsLoading: false, error};
        
        // ...
    }
};

// Let's dispatch the loadMuffins action in the Muffins COMP, when it mounts.

// file: src/ components/Muffins/Muffins.js
import React, { useEffect } from 'react';
import { loadMuffins } from '../../redux/actions';

// ...

const dispatch = useDispatch();

useEffect(() => {
    dispatch(loadMuffins());
}, []);

// We are loading muffins in the effect hook,
// beacuse dispatching an action is a side effect

// Fanally, let's handle the loading & error states.

// Create the following selector FUNCTs:

// file: src/redux/selectors.js
export const selectMuffinsLoading = (state) => state.muffinsLoading;
export const selectMuffinsLoadError = (state) => state.error;

// & render the loading & error messages:

// file: src/components/Muffins/Muffins.js
const muffinsLoading = useSelector(selectMuffinsLoading);
const loadError = useSelector(selectMuffinsLoadError);

// ...

return muffinsLoading ? (
    <p>Loading...</p>
) : loadError ? (
    <p>{loadError}</p>
) : muffins.length ? (
    <ul>
        {muffins.map((muffin) => {
            // ...
        })}
    </ul>
) : (
    <p> Oh no! muffins have finished!</p>
);

// Now let's check if we did everything correctly.

// We should run the local "json-server" & the app.

// In 1 terminal window: 

// npm run json-server

// & in another:

// npm start

// in the browser you should see the list of muffins which is now, fetched from fake API server.

// MULTIPLE REDUCERS:

// Usually, in a large app, state won't be that simple.
// It will look like a huge tree of data.

// The reducer FUNCT will become bloated.

// So, it's a good idea to split the rducer into multiple smaller reducers
// where each reducer handle only a part of the state.

// e.g. in order to handle the state from the pic above,
// it would be a good idea to create 3 reducers:

const muffinsReducer = (state = initialMuffinState, action) => {
    // ...
};

const notificationsReducer = (state = initialNotificationsState, action) => {
    // ...
};

const cartReducer = (state = initialCartState, action) => {
    // ...
};

// & combine them using the utility FUNCT called combineReducers:

const rootReducer = combineReducers({
    muffins: muffinsReducer,
    notifications: notificationsReducer,
    cart: cartReducer,
});

const store = createStore(rootReducer);

// combineReducers creates a root reducer FUNCT which calls each sub reducer
// when the action is dispatched & combines the parts of the state they return
// into a single state OBJ:

{
    muffins: ...,
    notifications: ...,
    cart: ...
}

// Combining reducers makes it easy to modularize the reducer logic.

// FEAT FOLDER & DUCKS:

// Instead of grouping all actions and reducers by the type of code
// (e.g., all the app's actions in actions.js & all reducers in reducers.js),
// we could group them by FEAT.

// Let's say there are 2 FEATs: "users" & "notifications".
// We could keep their actions and reducers in separate folders. e.g.:

// redux/
//      users/
//          actions.js
//          reducers.js
//      notifications/
//          actions.js
//          reducers.js
//      store.js


// DUCKS:

// The "ducks" pattern says that we should keep all Redux logic
// (actions, reducers,selectors) for a specific FEAT in it's own file. e.g. :

// redux/
//      users.js
//      notifications.js
//      store.js

// USING THE "DUCKS" PATTERN IN OUR EXAMPLE APP:

// In the app we've got DIFF Redux functionality around muffins.
// We can group this FUNCTality into a duck.
// In other words, let's jsut move everything related ro muffins into a JS file
// & call it src/redux/muffins.js.

// Let's move the actions, selectors and the reducers to this file:

export const likeMuffin = (muffinId) => ({
    type: 'muffins/like',
    payload: { id: muffinId },
});

export const loadMuffins = () => async (dispatch) => {
    dispatch({
        type: 'muffin/load_request',
    });

    try {
        const response = await fetch('http://localhost:3001/muffins');
        const data = await response.json();

        dispatch({
            type: 'muffins/load_success',
            payload: {
                muffins: data,
            },
        });
    } catch (e) {
        dispatch({
            type: 'muffins/load_failure',
            error: 'Failed to load muffins.',
        });
    }
};

export const selectMuffinsArray = (state) => state.muffins;
export const selectMuffinsLoading = (state) => state.muffinsLoading;
export const selectMuffinsLoadError = (state) => state.error;

const initialState = {
    muffins: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'muffin/like':
            const { id } = action.payload;
            return {
                ...state,
                muffins: state.muffins.map((muffin) => {
                    if (muffin.id === id) {
                        return { ...muffin, like: muffin.likes + 1 };
                    }
                    return muffin;
                });
            };

        case 'muffin/load_request':
            return { ...state, muffinsLoading: true };

        case 'muffin/load_success':
            const { muffins } = action.payload;
            return { ...state, muffinsLoading: false, muffins };

        case 'muffin/load_failure':
            const { error } = action;
            return { ...state, muffinsLoading: false, error };
        
        default:
            return state;
    }
};

export default reducer;

// Now, the app's state looks like this:

{
     muffins: {
         muffins: [],
         muffinsLoading: boolean,
         error: string
     }
}

// Since the structure of the state has changed, to make app work,
// we should update the parts of the code where we read the state.
// Luckily, we use selector FUNCTs to select parts of the state OBJ
// instead of working w/ the state OBJ directly.
// So, we only have to update the selector FUNCTs:

// file: src/redux/muffins.js
export const selectMuffinsState = (rootState) => rootState.muffins;

export const selectMuffinsArray = (rootState) =>
selectMuffinsState(rootState).muffins;

export const selectMuffinsLoading = (rootState) =>
selectMuffinsState(rootState).muffinsLoading;

export const selectMuffinsLoadError = (rootState) =>
selectMuffinsState(rootState).error;

// & finally, let's update the import statements:

// file: src/components/Muffins/Muffins.js
import {
    selectMuffinsArray,
    selectMuffinsLoading,
    selectMuffinsLoadError,
} from '../../redux/muffins';
import { likeMuffin, loadMuffins } from '../../redux/muffins';

// That's it we used the "ducks" pattern to move the Redux FUNCTality around
// managing the muffins state into a single file.