import {combineReducers} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";
import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from "./auth-reducer";

export type RootReduxStateType = ReturnType<typeof RootReducerState>


let RootReducerState = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navigationPage: sidebarReducer,
    usersPage: usersReducer,
    auth : authReducer
})

const store = configureStore({reducer : RootReducerState})

// @ts-ignore
window.store = store
export default store