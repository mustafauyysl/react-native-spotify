import React,{Component} from 'react';
import {View,Text,StyleSheet, Image} from 'react-native';

class SquareContainer extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Image 
                    style={styles.img}
                    source={this.props.img} /> 
                <Text style={styles.title}>{this.props.name}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15
    },
    img: {
        width: 150,
        height: 150,
        borderRadius: 10
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        marginTop: 10
    }
});

export default SquareContainer;