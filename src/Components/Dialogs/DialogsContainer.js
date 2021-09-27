import React from 'react'
import './Dialogs.css'
import DialogItem from './DialogItem/DialogsItem'
import Message from './Message/Message'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/dialogsReducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
return {
    dialogsPage: state.dialogsPage
}
}

let mapDispatchToProps = (dispatch) => {
return {
    sendMessage: () => {
        dispatch(sendMessageCreator())
    },
    updateNewMessageBody: (body) => {
        dispatch(updateNewMessageBodyCreator(body))
    }
}
}

const DialogsContainer = connect (mapStateToProps, mapDispatchToProps) (Dialogs)

export default DialogsContainer