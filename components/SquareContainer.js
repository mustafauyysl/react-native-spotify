import React,{Component} from 'react';
import {View,Text,StyleSheet, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { bindActionCreators } from 'redux';
import * as songActions from '../redux/actions/songs';
import {connect} from 'react-redux';

class SquareContainer extends Component{
    render(){
        let {action, song} = this.props;
        return (
            <TouchableOpacity 
                onPress={() => action.playSong(song)}
                activeOpacity={0.8}
                style={styles.container}>
                <Image 
                    style={styles.img}
                    source={this.props.img} /> 
                <Text style={styles.title}>{this.props.name}</Text>
            </TouchableOpacity>
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

function mapDispatchToProps(dispatch){
    return {
        action: {
            playSong : bindActionCreators(songActions.playSong, dispatch)
        }
    }
}

export default connect(null, mapDispatchToProps)(SquareContainer);