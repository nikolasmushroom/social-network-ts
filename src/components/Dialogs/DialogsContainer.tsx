import {ActionTypes} from "../Redux/store";
import {sendMessageActionCreator, updateNewMessageActionCreator} from "../Redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {RootReduxStateType} from "../Redux/redux-store";


const mapStateToProps = (state : RootReduxStateType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText : state.dialogsPage.newMessageText || '',
    }
}
const mapDispatchToProps = (dispatch : (action : ActionTypes) => void) => {
    return {
        updateNewMessage : (value : string) => {
            dispatch(updateNewMessageActionCreator(value))
        },
        sendMessage : () => {
            dispatch(sendMessageActionCreator())
        }
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);