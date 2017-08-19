import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Main from '../pages/mainPages/Main'
import * as movieCreators from '../actions/Movies'

import Icon from 'react-native-vector-icons/Ionicons'

class HomeContainer extends React.Component {
    static navigationOptions = {
        title: '电影',
        tabBarIcon: ({ tintColor }) =>
        <Icon name="md-film" size={25} color={tintColor} />
    }

    render() {
        return <Main { ...this.props } />
    }
}

const mapStateToProps = (state) => {
    const { movies } = state
    return {
        movies
    }
}

const mapDispatchToProps = (dispatch) => {
    const movieAction = bindActionCreators(movieCreators, dispatch)
    return {
        movieAction
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)