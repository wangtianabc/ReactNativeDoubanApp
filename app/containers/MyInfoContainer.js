import React from 'react'
import { connect } from 'react-redux'
import Profile from '../pages/myPages/Profile'
import { bindActionCreators } from 'redux'
import * as loginCreators from '../actions/Login'

class MyInfoContainer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <Profile {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    const { login } = state
    return {
        login
    }
}

const mapDispatchToProps = (dispatch) => {
    const loginAction = bindActionCreators(loginCreators, dispatch)
    return {
        loginAction
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MyInfoContainer)