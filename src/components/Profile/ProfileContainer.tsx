import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {ProfilePageType, ProfilePropsType, RootStateType} from "../../redux/reduxStore";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {getUserProfile} from '../../redux/profileReducer'

type MstpType = {
    profile: ProfilePageType
    isAuth: boolean
}

type MdtpType = {
    getUserProfile: (id: number) => void
}

type PropsType = MstpType & MdtpType & RouteComponentProps<{ userId: string }>

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = +this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>
        return (
            <div>
                <Profile {...this.props} profilePage={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state: RootStateType): MstpType => ({
    profile: state.profilePage,
    isAuth: state.auth.isAuth
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect<MstpType, MdtpType, {}, RootStateType>(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)