import React,{Component} from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native';
import Colors from '../constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';

Icon.loadFont();

class PlayerContainer extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Image 
                    style={styles.img}
                    source={require('../assets/img/songs/song1.jpg')}
                />
                <Text style={styles.title}>{this.props.name}</Text>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Icon name='play' color='#fff' size={25}/>
                </TouchableOpacity>
            </View>
        )   
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.primaryColor,
        height: 60,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
    },
    img: {
        width: 60,
        height: '100%'
    },
    title: {
        marginLeft: 15,
        color: '#fff',
        fontWeight: '500',
        fontSize: 13,
    },
    buttonContainer: {
        position: 'absolute',
        right: 10
    }
});

export default PlayerContainer;