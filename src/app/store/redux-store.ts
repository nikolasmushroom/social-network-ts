import {combineReducers} from "redux";
import {profileReducer} from "../../features/profile/model/profile-reducer";
import {dialogsReducer} from "../../features/dialogs/model/dialogs-reducer";
import {sidebarReducer} from "../../common/components/NavBar/module/sidebar-reducer";
import {usersReducer} from "../../features/users/model/users-reducer";
import {authReducer} from "../../features/login/model/auth-reducer";
import {configureStore} from "@reduxjs/toolkit";
import {thunk} from "redux-thunk";
import {appReducer} from "../app-reducer";
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
export type AppDispatch = typeof store.dispatch

// @ts-ignore
window.store = store
export default store