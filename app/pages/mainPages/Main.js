import React from 'react'
import {
    Text
} from 'react-native'

/** Accessing React.PropTypes is no longer supported and will be removed completely in React 16.
const propTypes = {
    movieAction: PropTypes.object,
    movies: PropTypes.array
}
*/
class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { movieAction } = this.props
        movieAction.requestHotMovieList(false, false, false, '/movie/in_theaters')
        console.log(this.props.movies)
    }

    render() {
        return <Text>我的信息</Text>
    }
}

// Main.propTypes = propTypes

export default Main