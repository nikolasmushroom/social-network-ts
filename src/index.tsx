import './index.css';
import './index.css';

import {createRoot} from "react-dom/client";
import React from "react";
import {Provider} from "react-redux";
import store from "./app/store/redux-store";
import {BrowserRouter} from "react-router-dom";
import App from "./app/App";


const container = (document.getElementById('root'));
if (container) {
    const root = createRoot(container)
    root.render(
        <Provider store={store}>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <App/>
            </BrowserRouter>
        </Provider>
    )
} else {
    console.error("Element with id 'root' not found.");
}


