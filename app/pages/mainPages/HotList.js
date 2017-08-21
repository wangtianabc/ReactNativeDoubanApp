import React from 'react'
import {
    Text,
    View,
    Image,
    Button,
    FlatList,
    StyleSheet,
    ActivityIndicator,
    TouchableOpacity
} from 'react-native'

class HotList extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { movieAction } = this.props
        movieAction.requestHotMovieList(true, true, false, '/movie/in_theaters')
        //console.log(this.props)
    }
    refreshData = () => {

    }
    render() {
        const content = this.props.movies.map((movie) => {
            if (movie === null) {
                return null
            } else {
                return (
                    <Text>{console.log(movie.id)}</Text>
                )
            }

        })
        return (
            <View>
                {content}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loading: {
        marginTop: 100
    },
    hotList: {
        height: 130,
        paddingLeft: 18,
        paddingRight: 18,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#EFEFEF'
    },
})
export default HotList