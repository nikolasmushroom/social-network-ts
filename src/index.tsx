import './index.css';
import {rerenderEntireTree} from "./render";
import {state} from "./components/Redux/State";

rerenderEntireTree(state)