import {ActionTypes} from "../Redux/store";
import {sendMessageActionCreator, updateNewMessageActionCreator} from "../Redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect, ConnectedProps} from "react-redux";
import {RootReduxStateType} from "../Redux/redux-store";


const mapStateToProps = (state : RootReduxStateType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
    }
}
const mapDispatchToPRops = (dispatch : (action : ActionTypes) => void) => {
    return {
        updateNewMessage : (body : string) => {
            dispatch(updateNewMessageActionCreator(body))
        },
        sendMessage : () => {
            dispatch(sendMessageActionCreator())
        }
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToPRops) (Dialogs);