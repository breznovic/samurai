import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {ProfilePageType, RootStateType} from "../../redux/reduxStore";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {getStatus, getUserProfile, updateStatus} from '../../redux/profileReducer'
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

type MstpType = {
    profile: ProfilePageType
    status: string
    authorizedUserId: string
    isAuth: boolean
}

type MdtpType = {
    getUserProfile: (id: number) => void
    getStatus: (id: number) => void
    updateStatus: (status: string) => void
}

type PropsType = MstpType & MdtpType & RouteComponentProps<{ userId: string }>

class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push("/login");
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {

        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <Profile {...this.props}
                     isOwner={!this.props.match.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     savePhoto={this.props.savePhoto}/>
        )
    }
}

let mapStateToProps = (state: RootStateType): MstpType => ({
    profile: state.profilePage,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose<React.ComponentType>(
    connect<MstpType, MdtpType, {}, RootStateType>(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
