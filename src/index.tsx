import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import {store} from "./components/Redux/redux-store";
import {RootStateType} from "./components/Redux/store";

const rerenderEntireTree = (state : RootStateType) => {
    ReactDOM.render(
        <App store={state} dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())
store.subscribe(() => {
    rerenderEntireTree(store.getState())
})
