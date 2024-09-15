import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
let rootReducers = combineReducers({
    profilePage : profileReducer,
    dialogsPage : dialogsReducer,
    navigationPage : sidebarReducer,
})
export  const store = configureStore({
    reducer : rootReducers
})