import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import store, {RootReduxStoreType} from "./components/Redux/redux-store";
import {Provider} from "react-redux";

const rerenderEntireTree = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById('root')
    );
}
rerenderEntireTree()
store.subscribe(() => {
    rerenderEntireTree()
})
