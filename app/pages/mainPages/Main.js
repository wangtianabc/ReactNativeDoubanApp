import React, { PropTypes } from 'react'
import {
    Text
} from 'react-native'

const propTypes = {
    movieAction: PropTypes.object,
    movies: PropTypes.object
}

class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { movieAction } = this.props
        console.log(this.props)
        movieAction.requestHotMovieList(false, false, false, '/movie/in_theaters')
    }

    render() {
        return <Text>我的信息</Text>
    }
}

Main.propTypes = propTypes

export default Main