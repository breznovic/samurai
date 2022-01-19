import React from 'react'
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {DataType, setAuthUserData} from "../../redux/authReducer";

type AuthType = {
    setAuthUserData: (data: DataType) => void
}

class HeaderContainer extends React.Component<AuthType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setAuthUserData(response.data.data.login)
                }
            })
    }

    render() {
        return <Header isAuth={false} login={""} />
    }
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)