import React from 'react'
import {
    StyleSheet,
    FlatList,
    View
} from 'react-native'
import CollectionItem from './CollectionItem'

class CollectionList extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: '我的收藏',
        tabBarIcon: ({tintColor}) =>
            <Icon name="md-home" size={25} color={tintColor}/>,
    })
    constructor(props){
        super(props)
    }

    separator = () => {
        return <View style={{ height: 1, backgroundColor: gColor.border }}/>
    }

    extraUniqueKey =(item)=> {
        return "index"+item.id
    }

    render() {
        const { collection } = this.props.navigation.state.params
        let collectionArr = []
        for(let i=0; i<collection.length;i++){
            collectionArr.push(collection.item(i))
        }
        return (
            <View style={styles.container}>
                <FlatList data={collectionArr}
                          ItemSeparatorComponent={this.separator}
                          keyExtractor = {this.extraUniqueKey}
                          renderItem={(item) => {
                              return <CollectionItem item={item}/>
                          }}
                          style={{marginTop: 5}}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 5,
        backgroundColor: gColor.backgroundColor,
        //height: gScreen.height,
        //marginBottom: 50
    }
})

export default CollectionList