import { TasksList, ConnectedTasksList } from "../components/TasksList";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "../reducer";

const store = createStore(reducer);

export default () => (
    <Provider store={store}>
        <ConnectedTasksList />
    </Provider>
);