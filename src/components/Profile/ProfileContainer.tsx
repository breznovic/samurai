import React from 'react'
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfilePageType, ProfilePropsType, RootStateType} from "../../redux/reduxStore";
import {setUserProfile} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

type MstpType = {
    profile: ProfilePageType
}

type MdtpType = {
    setUserProfile: (profilePage: ProfilePropsType) => void
}

type PropsType = MstpType & MdtpType & RouteComponentProps<{ userId: string }>

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = +this.props.match.params.userId
            if (!userId) {
                userId = 2
            }

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profilePage={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state: RootStateType):MstpType => ({
    profile: state.profilePage
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect<MstpType, MdtpType, {}, RootStateType>(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)