import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

class CommentItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { item } = this.props.item
        return(
            <TouchableOpacity style={styles.container} key={this.props.index}>
                <View style={{marginRight: 15, width: 80, alignItems: 'center', justifyContent: 'center'}}>
                    <Image source={{uri: item.author.avatar}} style={styles.itemImage}/>
                    <Text style={[styles.itemDesc, {color: '#ED9121'}]}>{item.author.uid}</Text>
                </View>
                <View style={{marginLeft: 10,flex: 1}}>
                    <Text style={styles.itemDesc}>{item.content}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        minHeight: 60,
        alignItems: 'center',
        margin: 10,
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

export default CommentItem