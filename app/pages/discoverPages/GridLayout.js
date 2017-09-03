import React from 'react'
import {
    StyleSheet,
    View,
    SectionList,
    Text,
    TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

class Row extends React.Component {
    rowClick = () =>{
        let name = this.props.data.name
        alert(name)
    }
    render(){
        return(
            <TouchableOpacity style={styles.row} onPress={this.rowClick}>
                <View style={{flex:1, alignItems: 'center', justifyContent: 'center', backgroundColor: gColor.backgroundColor}}>
                    <View style={{width: gScreen.width/4-20, height: gScreen.width/4-20,borderStyle: 'dotted', borderWidth: 1, borderColor: gColor.border, borderRadius: 5, alignItems: 'center', justifyContent: 'center',}}>
                        <Icon name={this.props.data.icon} size={30} color={gColor.themeColor}/>
                        <Text>
                            {this.props.data.name}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    backColor = () => {
        let r=Math.floor(Math.random()*256)
        let g=Math.floor(Math.random()*256)
        let b=Math.floor(Math.random()*256)
        let s = "rgb("+r+','+g+','+b+")"
        console.log('_backColor'+s)
        return s//所有方法的拼接都可以用ES6新特性`其他字符串{$变量名}`替换
    }
}
class GridLayout extends React.PureComponent{
    constructor(props){
        super(props)
        let data1 =  Array.from(new Array(5)).map((val, i)=>({
            value: '数据1='+i,
            row: i,
        }))

        let data2 =  Array.from(new Array(8)).map((val, i)=>({
            value: '数据2='+i,
            row: i,
        }))
        let data3 =  Array.from(new Array(11)).map((val, i)=>({
            value: '数据3='+i,
            row: i,
        }))
        let group1 = [{name:'电影', icon: 'md-film'}, {name: '音乐', icon: 'md-musical-notes'},
                      {name: '图书', icon: 'md-bookmarks'}, {name: '电台', icon: 'md-radio'},
                      {name: '同城', icon: 'md-locate'},{name: '用户', icon: 'ios-people'},
                      {name: '日记', icon: 'md-paper'},{name: '相册', icon: 'md-photos'},
                      {name: '其他', icon: 'ios-more'}]
        let group2 = [{name:'相机', icon: 'md-camera'}, {name: '位置', icon: 'md-pin'}, {name: '图书', icon: 'md-bookmarks'}]
        let group3 = [{name:'电影', icon: 'md-film'}, {name: '音乐', icon: 'md-musical-notes'}, {name: '图书', icon: 'md-bookmarks'}, {name: '电台', icon: 'md-radio'}, {name: '其他', icon: 'md-keypad'}]
        //这里面的data属性后面跟数组，是为了在布局renderItem的时候可以传入的参数item是数组，而不是data1这个对象
        this.state = {
            rowData: [
                {key: '豆瓣', data: [group1]},
                {key: '原生', data: [group2]},
                {key: '微信', data: [group3]}
            ]
        }

    }
    listHeaderComponent = () => {
        return(
            <View style={{backgroundColor: '#aaaaff'}}>
                <Text>
                    我是listHeader
                </Text>
            </View>
        )
    }
    listFooterComponent = () => {
        return(
            <View style={{backgroundColor: '#aaaaff'}}>
                <Text>
                    我是listFooter
                </Text>
            </View>
        )
    }
    //参数需要{}修饰，告诉是个对象
    renderSectionHeader = ({section}) => {
        console.log('_renderSectionHeader' + section.key);
        return(
            <View style={{flex: 1, height: 25, backgroundColor: gColor.border, justifyContent: 'center',alignItems: 'center'}}>
                <Text style={styles.sectionHeader}>{section.key}</Text>
            </View>
        )
    }
    //参数需要{}修饰，告诉是个对象
    renderItem = ({item}) => {
        console.log('_renderItem' + item[0]);
        return (
            <View style={styles.list}>
                {
                    item.map((val, i)=>{
                        return <Row key={i} data={val}/>
                    })
                }
            </View>
        )
    }
    extraUniqueKey =(item)=> {
        return "index"+item
    }
    render(){
        return(
            <SectionList style={styles.sectionList}
                         renderItem={this.renderItem}
                         ListFooterComponent={this.listFooterComponent}
                         ListHeaderComponent={this.listHeaderComponent}
                         renderSectionHeader={this.renderSectionHeader}
                         showsVerticalScrollIndicator={false}
                         keyExtractor = {this.extraUniqueKey}
                         sections={
                             this.state.rowData
                         }>

            </SectionList>
        )
    }
}
const styles = StyleSheet.create({
    sectionList: {
        flex: 1,
        backgroundColor: gColor.backgroundColor,
    },
    list:{
        flexDirection: 'row', //这里的属性很重要，可以学习下flex布局
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        backgroundColor: '#FFFFFF'
    },
    row:{
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        // alignItems: 'center',
        width: gScreen.width/4,
        height: gScreen.width/4,
    },
    sectionHeader: {
        marginLeft: 10,
        fontSize: 12,
        color: '#787878'
    },
})

export default GridLayout