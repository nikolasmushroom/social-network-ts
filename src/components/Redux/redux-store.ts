import {combineReducers} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";
import {configureStore} from "@reduxjs/toolkit";

export type RootReduxStateType = ReturnType<typeof store.getState>
export type RootReduxStoreType = typeof store


let RootReducerState = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navigationPage: sidebarReducer,
    usersPage: usersReducer,
})

const store = configureStore({reducer : RootReducerState})

// @ts-ignore
window.store = store
export default store