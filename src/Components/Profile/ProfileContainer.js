import React from 'react'
import { connect } from 'react-redux'
import { getUserProfile } from './../../Redux/profileReducer'
import Profile from './../Profile/Profile'
import { withRouter } from 'react-router-dom'
import { Redirect } from 'react-router'
import { withAuthRedirect } from '../../HOC/withAuthRedirect'
import { compose } from 'redux'

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId)
    }

    render() {

        return <Profile {...this.props} profile={this.props.profile} />
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

export default compose(
    connect(mapStateToProps, { getUserProfile }),
    withRouter,
    )(ProfileContainer)



