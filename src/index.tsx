import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import {store} from "./components/Redux/State";

const rerenderEntireTree = () => {
    ReactDOM.render(
        <App state={store.getState()} addPost={store.addPost.bind(store)} changeInput={store.changeInput.bind(store)}/>,
        document.getElementById('root')
    );
}
rerenderEntireTree()

store.subscribe(rerenderEntireTree)
