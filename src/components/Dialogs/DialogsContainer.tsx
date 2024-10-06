import {
    sendMessage,
    updateNewMessage,
} from "../Redux/dialogs-reducer";
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
export const DialogsContainer = connect(mapStateToProps, {
    updateNewMessage,
    sendMessage
    }) (Dialogs);