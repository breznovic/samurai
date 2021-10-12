import { connect } from "react-redux"
import { sendMessageAC, updateNewMessageBodyAC } from "../../Redux/dialogsReducer"
import Dialogs from "./Dialogs"


let mapStateToProps = (state) => {
return {
dialogsPage:state.dialogsPage
}
}

let mapDispatchToProps = (dispatch) => {
return {
updateNewMessageBody: () => {
    dispatch(sendMessageAC())
},
sendMessage: (body) => {
    dispatch(updateNewMessageBodyAC(body))
}
}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer