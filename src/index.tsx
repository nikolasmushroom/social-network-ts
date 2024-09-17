import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import store, {RootReduxStoreType} from "./components/Redux/redux-store";

const rerenderEntireTree = (state : RootReduxStoreType) => {
    ReactDOM.render(
        <App store={state} dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store)
store.subscribe(() => {
    rerenderEntireTree(store)
})
