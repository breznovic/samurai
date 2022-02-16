import {RootStateType} from "../../redux/reduxStore";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {SendMessageBodyAC, UpdateNewMessageBodyAC} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {DialogPropsType, MessagePropsType} from "../../redux/reduxStore";

type MstpType = {
    dialogs: Array<DialogPropsType>
    messages: Array<MessagePropsType>
    messageBody: string
    isAuth: boolean
}

type MdtpType = {
    sendMessage: () => void,
    updateNewMessageBody: (message: string) => void
}

type PropsType = MstpType & MdtpType

const DialogsContainer = (props: PropsType) => {
    return (
        <Dialogs
            dialogs={props.dialogs}
            messages={props.messages}
            messageBody={props.messageBody}
            sendMessage={props.sendMessage}
            updateNewMessageBody={props.updateNewMessageBody}
            isAuth={props.isAuth}
        />
    )
}

const mapStateToProps = (state: RootStateType): MstpType => ({
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    messageBody: state.dialogsPage.newMessageBody,
    isAuth: state.auth.isAuth
})

const mapDispatchToProps = (dispatch: Dispatch): MdtpType => ({
    sendMessage: () => dispatch(SendMessageBodyAC()),
    updateNewMessageBody: (message: string) => dispatch(UpdateNewMessageBodyAC(message)),
})

export default connect(mapStateToProps, mapDispatchToProps)(DialogsContainer);