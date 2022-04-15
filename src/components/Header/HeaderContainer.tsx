import React from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {logout} from "../../redux/authReducer";

type AuthType = {
    getAuthUserData: () => void
    // setAuthUserData: (data: DataType) => void
}


class HeaderContainer extends React.Component<AuthType> {
    componentDidMount() {
       this.props.getAuthUserData()
    }

    render() {
        return <Header isAuth={false} login={""}/>
    }
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {logout})(HeaderContainer)