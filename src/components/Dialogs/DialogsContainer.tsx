import {RootStateType} from "../../redux/reduxStore";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {SendMessageBodyAC} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {DialogPropsType, MessagePropsType} from "../../redux/reduxStore";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import React from "react";

type MstpType = {
    dialogs: Array<DialogPropsType>
    messages: Array<MessagePropsType>
    messageBody: string
}

type MdtpType = {
    sendMessage: () => void,
    updateNewMessageBody: (message: string) => void
}

type PropsType = MstpType & MdtpType & {isAuth: boolean}

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
})

const mapDispatchToProps = (dispatch: Dispatch): MdtpType => ({
    sendMessage: (newMessageBody) => dispatch(SendMessageBodyAC(newMessageBody)),
})

export default compose<React.ComponentType>(connect<MstpType, MdtpType, {}, RootStateType>(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(DialogsContainer)