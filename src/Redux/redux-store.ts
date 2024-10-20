import {combineReducers} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import {configureStore} from "@reduxjs/toolkit";
import {thunk} from "redux-thunk";
import {appReducer} from "./app-reducer";
export type RootReduxStateType = ReturnType<typeof reducers>



let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navigationPage: sidebarReducer,
    usersPage: usersReducer,
    auth : authReducer,
    app : appReducer
})

const store = configureStore({
    reducer : reducers,
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})

// @ts-ignore
window.store = store
export default store