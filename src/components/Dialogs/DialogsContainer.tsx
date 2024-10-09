import {
    sendMessage,
    updateNewMessage,
} from "../Redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {RootReduxStateType} from "../Redux/redux-store";
import {withAuthRedirect} from "../HOC/WithAuthRedirect";
import {compose} from "redux";
import {ComponentType} from "react";


const mapStateToProps = (state : RootReduxStateType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText : state.dialogsPage.newMessageText || '',
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, { updateNewMessage, sendMessage }),
    withAuthRedirect
)(Dialogs);