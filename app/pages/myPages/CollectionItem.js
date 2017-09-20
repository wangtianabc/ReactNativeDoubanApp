import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import Swipeout from 'react-native-swipeout'
import SQLite from '../../db/SQLite'

let sqlite = new SQLite()

class CollectionItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rowID: '',
            rightButtons:[
                {
                    backgroundColor:'red',
                    color:'white',
                    text:'删除',
                    onPress: () => { this.deleteCollection() }
                },
                {
                    backgroundColor:'green',
                    color:'white',
                    text:'详情',
                    onPress: () => { alert('转往页面') }
                }
            ],
            leftButtons: [
                {
                    backgroundColor: '#ED9121',
                    color: 'white',
                    text: '取消',
                    onPress: () => {alert('取消')}
                }
            ]
        }
    }

    deleteCollection = () => {
        if(this.state.rowID === '') return
        sqlite.deleteCollectionByName(this.state.rowID).then(() => {
            this.setState({rowID: ''})
            sqlite.getCollectionList().then(result => {
                if(result.length > 0) {
                    this.props.loginAction.getCollectionList(result)
                }
            })
        }).catch((err) => { alert('删除错误：' + err) })
    }

    render() {
        const { item } = this.props.item
        return (
            <Swipeout autoClose={true}
                      close={!(this.state.rowID === item.id)}
                      right={this.state.rightButtons}
                      left={this.state.leftButtons}
                      style={{backgroundColor: gColor.backgroundColor}}
                      onOpen={() => {
                          this.setState({
                              rowID: item.id,
                          })
                      }}
            >
                <TouchableOpacity style={styles.container} key={item.id}>
                    <View style={{marginRight: 15}}>
                        <Image source={{uri: item.pic}} style={styles.itemImage}/>
                    </View>
                    <View style={{marginLeft: 10, flex: 1}}>
                        <Text>{item.title}</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={[styles.itemDesc, {color: '#ED9121'}]}>{item.director}/</Text>
                            <Text style={styles.itemDesc}>{item.actor}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </Swipeout>
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
        height: 40,
        width: 40,
        borderRadius: 20,
    },
    itemDesc: {
        color: '#A6A6A6',
        fontSize: 12,
        lineHeight: 25
    }
})

export default CollectionItem