import React from 'react'
import { connect } from 'react-redux'
import Profile from '../pages/myPages/Profile'

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

export default connect(mapStateToProps)(MyInfoContainer)