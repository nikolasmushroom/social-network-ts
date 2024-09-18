import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import store, {RootReduxStoreType} from "./components/Redux/redux-store";
import {Provider} from "react-redux";

const rerenderEntireTree = (state : RootReduxStoreType) => {
    ReactDOM.render(
        <Provider store={store}>
            <App store={state} dispatch={store.dispatch.bind(store)}/>
        </Provider>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store)
store.subscribe(() => {
    rerenderEntireTree(store)
})
