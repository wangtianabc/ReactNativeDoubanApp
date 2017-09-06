import React from 'react'
import {
    Text,
    View,
    Animated,
    TouchableOpacity
} from 'react-native'

class Demo1 extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            fadeAnim: new Animated.Value(0),
            currentAlpha: 1.0
        }
    }

    startAnimation = () => {
        this.setState({currentAlpha: this.state.currentAlpha === 1.0 ? 0.0 : 1.0})
        Animated.timing(
            this.state.fadeAnim,
            {toValue: this.state.currentAlpha}
        ).start()
    }

    render() {
        return (
            <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: gScreen.height}}>
                <Animated.Text style={{opacity: this.state.fadeAnim, fontSize: 20, fontWeight: '600',
                    transform: [
                        {
                            translateY: this.state.fadeAnim.interpolate({
                                inputRange: [0,1],
                                outputRange: [30,0]
                            })
                        },
                        {
                            scale: this.state.fadeAnim
                        }
                    ]
                }}>
                    Welcome to Animated
                </Animated.Text>
                <TouchableOpacity onPress={() => this.startAnimation()} style={{marginTop: 10}}>
                    <Text>Start Animation</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Demo1