import './index.css';
import './index.css';
import App from "./App";
import store from "./components/Redux/redux-store";
import {Provider} from "react-redux";
import {createRoot} from "react-dom/client";

const container = (document.getElementById('root'));
if(container){
    const root = createRoot(container)
    root.render( <Provider store={store}>
        <App/>
    </Provider>)
}else{
    console.error("Element with id 'root' not found.");
}



