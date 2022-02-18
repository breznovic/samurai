import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {ProfilePageType, RootStateType} from "../../redux/reduxStore";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {getUserProfile} from '../../redux/profileReducer'
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

type MstpType = {
    profile: ProfilePageType
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
        return (
            <div>
                <Profile {...this.props} profilePage={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state: RootStateType): MstpType => ({
    profile: state.profilePage
})

export default compose<React.ComponentType>(
    connect<MstpType, MdtpType, {}, RootStateType>(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
