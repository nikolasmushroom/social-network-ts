import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import {addPost, changeInput, RootStateType, state} from "./components/Redux/State";

export const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
            <App state={state} addPost={addPost} changeInput={changeInput}/>,
        document.getElementById('root')
    );
}
rerenderEntireTree(state)
