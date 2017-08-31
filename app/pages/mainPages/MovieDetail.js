import React from 'react'
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    Image
} from 'react-native'

class MovieDetail extends React.Component {
    constructor(props) {
        super(props)
    }

    renderContent = () => {

    }

    render() {
        return (
            <ScrollView>
                {this.renderContent}
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        resultMovie: state.movie.resultMovie,
        loading: state.movie.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    const movieAction = bindActionCreators(movieCreators, dispatch)
    return {
        movieAction
    }
}

const styles = StyleSheet.create({

})

export default MovieDetail