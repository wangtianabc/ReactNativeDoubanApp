import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Main from '../pages/mainPages/Main'
import * as movieCreators from '../actions/Movies'

class HomeContainer extends React.Component {

    render() {
        return <Main { ...this.props } />
    }
}

const mapStateToProps = (state) => {
    return {
        isRefreshing: state.movie.isRefreshing,
        loading: state.movie.loading,
        movies: state.movie.movies
    }
}

const mapDispatchToProps = (dispatch) => {
    const movieAction = bindActionCreators(movieCreators, dispatch)
    return {
        movieAction
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)