import React from 'react'
import {
    Text,
    View,
    ScrollView,
    StyleSheet
} from 'react-native'
import Item from '../../components/Item'
import Icon from 'react-native-vector-icons/Ionicons'
import avatar from '../../img/avator.png'

class UserInfo extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: '用户信息',
        tabBarIcon: ({tintColor}) =>
            <Icon name="md-home" size={25} color={tintColor}/>
    })

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Item name='头像' first={true} avatar={avatar}/>
                    <Item name='用户名' disable={true} subName='半天乌云'/>
                    <Text style={styles.title}>{'联系信息'}</Text>
                    <Item name='QQ' first={true} subName='37117094'/>
                    <Item name='邮箱' subName='37117094@qq.com'/>
                    <Item name='手机' subName='12345678910'/>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f3f3'
    },
    title: {
        color: '#666',
        paddingHorizontal: 16,
        paddingVertical: 8
    }
})

export default UserInfo