import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import {store} from "./components/Redux/State";

const rerenderEntireTree = () => {
    ReactDOM.render(
        <App state={store.getState()} addPost={store.addPost} changeInput={store.changeInput}/>,
        document.getElementById('root')
    );
}
rerenderEntireTree()

store.subscribe(rerenderEntireTree)
