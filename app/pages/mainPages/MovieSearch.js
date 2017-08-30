import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableOpacity,
    FlatList,
    Dimensions
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

class MovieSearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movieList: []
        }
    }

    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.movie.title,
        tabBarIcon: ({tintColor}) =>
            <Icon name="md-home" size={25} color={tintColor}/>,
    })

    render() {
        const { navigate, goBack } = this.props.navigation

        return (
            <View style={styles.container}>
                <View style={styles.search}>
                    <Text>test</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 25,
        backgroundColor: gColor.backgroundColor,
        height: gScreen.height,
    },
    search: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default MovieSearch