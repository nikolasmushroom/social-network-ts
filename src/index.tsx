import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import {store} from "./components/Redux/State";

const rerenderEntireTree = () => {
    ReactDOM.render(
        <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    );
}
rerenderEntireTree()

store.subscribe(rerenderEntireTree)
