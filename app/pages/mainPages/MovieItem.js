import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

class MovieItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { item } = this.props.item
        return(
            <TouchableOpacity style={styles.container} key={this.props.index}>
                <View style={{marginRight: 15}}>
                    <Image source={{uri: item.images.small}} style={styles.itemImage}/>
                </View>
                <View style={{marginLeft: 10,flex: 1}}>
                    <Text>{item.title}</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={[styles.itemDesc, {color: '#ED9121'}]}>{item.rating.average}/</Text>
                        <Text style={styles.itemDesc}>{item.year}/{item.genres}</Text>
                    </View>
                </View>
                <View>
                    <Icon style={{marginLeft: 10, marginRight: 10}} name="ios-arrow-forward-outline" size={18} color="#bbb"/>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 10,
        justifyContent: 'space-between',
        backgroundColor: gColor.backgroundColor
    },
    itemImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    itemDesc: {
        color: '#A6A6A6',
        fontSize: 12,
        lineHeight: 25,
    }
})

export default MovieItem