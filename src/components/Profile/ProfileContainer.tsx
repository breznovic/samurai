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
}

type MdtpType = {
    getUserProfile: (id: number) => void
    getStatus: (id: number) => void
    updateStatus: (status: string) => void
}

type PropsType = MstpType & MdtpType & RouteComponentProps<{ userId: string }>

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = +this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profilePage={this.props.profile} updateStatus={this.props.updateStatus}/>
            </div>
        )
    }
}

let mapStateToProps = (state: RootStateType): MstpType => ({
    profile: state.profilePage,
    status: state.profilePage.status
})

export default compose<React.ComponentType>(
    connect<MstpType, MdtpType, {}, RootStateType>(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
