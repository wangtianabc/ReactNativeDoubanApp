import React from 'react'
import {
    View,
    StyleSheet,
    FlatList,
} from 'react-native'
import LoadingView from '../../components/LoadingView'
import CommentItem from './CommentItem'
import axios from '../../utils/MyAxios'
import { Douban_Url } from '../../constans/Url'

class CommentsList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: [],
            loadingCommnets: true,
        }
    }

    loadingComments = () => {
        let id = this.props.id
        let formData = new FormData()
        formData.append('apikey','0b2bdeda43b5688921839c8ecb20399b',)
        formData.append('city','北京')
        
        axios.post(`${Douban_Url}/movie/subject/${id}/comments`, formData).then(res => {
            this.setState({
                loadingCommnets: false,
                comments: res.data.comments
            })
        })
    }

    extraUniqueKey =(item)=> {
        return item.id
    }

    separator = () => {
        return <View style={{ height: 1, backgroundColor: gColor.border }}/>
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.loadingCommnets ? <LoadingView msg={'评论加载中'}/> :
                        <FlatList
                            data={this.state.comments}
                            ItemSeparatorComponent={this.separator}
                            refreshing={false}
                            initialNumToRender={10}
                            keyExtractor = {this.extraUniqueKey}
                            renderItem={(item) => {
                                return <CommentItem item={item}/>
                            }}
                            style={{marginTop: 5}}
                        />
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: gColor.backgroundColor,
        marginBottom: 50,
    },

})

export default CommentsList