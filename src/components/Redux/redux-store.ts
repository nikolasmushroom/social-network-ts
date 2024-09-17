import {combineReducers, createStore, Store} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

export type RootReduxStateType = ReturnType<typeof reducers>
export type RootReduxStoreType = Store<RootReduxStateType>


let reducers  = combineReducers({
    profilePage : profileReducer,
    dialogsPage : dialogsReducer,
    navigationPage : sidebarReducer,
})
const store = createStore(reducers)

export default store