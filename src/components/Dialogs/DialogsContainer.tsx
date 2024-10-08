import {
    sendMessage,
    updateNewMessage,
} from "../Redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {RootReduxStateType} from "../Redux/redux-store";
import {withAuthRedirect} from "../HOC/WithAuthRedirect";
import {compose} from "redux";


const mapStateToProps = (state : RootReduxStateType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText : state.dialogsPage.newMessageText || '',
    }
}

// const AuthRedirectComponent = withAuthRedirect(Dialogs)
const DialogsContainer : any = compose(
    connect(mapStateToProps, { updateNewMessage, sendMessage }),
    withAuthRedirect
)(Dialogs);
export default DialogsContainer