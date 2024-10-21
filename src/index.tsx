import './index.css';
import './index.css';
import {MainApp} from "./App";

import {createRoot} from "react-dom/client";


const container = (document.getElementById('root'));
if (container) {
    const root = createRoot(container)
    root.render(
        <MainApp/>
    )
} else {
    console.error("Element with id 'root' not found.");
}



