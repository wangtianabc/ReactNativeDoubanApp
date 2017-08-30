import {
    Dimensions
} from 'react-native'

global.gScreen = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
}

global.gColor = {
    themeColor: '#32CD32',
    backgroundColor: '#ffffff',
    border: '#d5d5d5',
}