import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

export type RootReduxStateType = ReturnType<typeof reducers>



let reducers  = combineReducers({
    profilePage : profileReducer,
    dialogsPage : dialogsReducer,
    navigationPage : sidebarReducer,
})
const store= createStore(reducers)

export default store