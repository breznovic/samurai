import { connect } from "react-redux"
import { sendMessageAC, updateNewMessageBodyAC } from "../../Redux/dialogsReducer"
import Dialogs from "./Dialogs"
import { withAuthRedirect } from "../../HOC/withAuthRedirect"
import { compose } from "redux"


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageAC())
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyAC(body))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)