import React from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet
} from 'react-native'

class Star extends React.Component {
    constructor(props) {
        super(props)
    }
    renderContent = () => {
        const { value } = this.props
        let rtn = []
        let flag = true
        if(value === '00') {
            return <Text style={styles.smallFont}>暂无评分</Text>
        }

        for (let i = 0; i < 5; i ++) {
            if (i < value[0]) {
                rtn.push(<Image key={i} style={styles.star} source={require('../img/star-full.png')}/>)
            } else {
                if (flag && value[1] === '5') {
                    flag = false
                    rtn.push(<Image key={i} style={styles.star} source={require('../img/star-half.png')}/>)
                } else {
                    rtn.push(<Image key={i} style={styles.star} source={require('../img/star-empty.png')}/>)
                }
            }
        }
        return rtn
    }
    render() {
        return (
            <View style={styles.container}>
                {this.renderContent()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    smallFont: {
        lineHeight: 20,
        color: '#A6A6A6',
        fontSize: 12
    },
    star:{
        marginRight: 2,
        width: 12,
        height: 12
    }
})

export default Star