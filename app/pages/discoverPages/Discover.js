import React from 'react'
import {
    View,
    Text,
    SectionList,
    StyleSheet
} from 'react-native'



class Discover extends React.Component {

    constructor(props) {
        super(props)
    }

    renderItem = (info) => {
        let txt = '  ' + info.item.title
        return <Text
            style={{ height: 60, textAlignVertical: 'center', backgroundColor: "#ffffff", color: '#5C5C5C', fontSize: 15 }}>{txt}</Text>
    }

    sectionComp = (info) => {
        let txt = info.section.key
        return <Text
            style={{ height: 50, textAlign: 'center', textAlignVertical: 'center', backgroundColor: '#9CEBBC', color: 'white', fontSize: 30 }}>{txt}</Text>
    }

    render() {
        const sections = [
            { key: "A", data: [{ title: "阿童木" }, { title: "阿玛尼" }, { title: "爱多多" }] },
            { key: "B", data: [{ title: "表哥" }, { title: "贝贝" }, { title: "表弟" }, { title: "表姐" }, { title: "表叔" }] },
            { key: "C", data: [{ title: "成吉思汗" }, { title: "超市快递" }] },
            { key: "W", data: [{ title: "王磊" }, { title: "王者荣耀" }, { title: "往事不能回味" },{ title: "王小磊" }, { title: "王中磊" }, { title: "王大磊" }] },
        ]

        return (
            <View>
                <SectionList
                    //style={{ flexDirection: 'row' }}
                    renderSectionHeader={this.sectionComp}
                    keyExtractor={(item,index)=>("index"+index+item)}
                    renderItem={this.renderItem}
                    sections={sections}
                    numColumns={4}
                    pageSize={4}
                    //contentContainerStyle={styles.list}
                    //horizontal={false}
                    ItemSeparatorComponent={() => <View><Text></Text></View>}
                    ListHeaderComponent={() => <View style={{ backgroundColor: '#25B960', alignItems: 'center', height: 30 }}><Text style={{ fontSize: 18, color: '#ffffff' }}>通讯录</Text></View>}
                    ListFooterComponent={() => <View style={{ backgroundColor: '#25B960', alignItems: 'center', height: 30 }}><Text style={{ fontSize: 18, color: '#ffffff' }}>通讯录尾部</Text></View>}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    list: {
        //justifyContent: 'space-around',
        flexDirection: 'row',//设置横向布局
        flexWrap: 'wrap',  //设置换行显示
        alignItems: 'flex-start',
        backgroundColor: '#FFFFFF'
    },
})

export default Discover