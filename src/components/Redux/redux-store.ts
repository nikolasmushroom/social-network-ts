import {combineReducers, createStore} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
let rootReducers = combineReducers({
    profilePage : profileReducer,
    dialogsPage : dialogsReducer,
    sidebar : sidebarReducer,
})
const store = configureStore({
    reducer : rootReducers
})
export  default  store