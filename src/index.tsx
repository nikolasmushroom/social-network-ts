import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import {store} from "./components/Redux/store";

const rerenderEntireTree = () => {
    ReactDOM.render(
        <App store={store.getState()} dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    );
}
rerenderEntireTree()
store.subscribe(rerenderEntireTree)
