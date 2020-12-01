import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Title from '../../components/Title';

class HomeScreen extends Component {
    render(){
        return (
            <View style={styles.container}>
                <SafeAreaView />
                <Title title='Just For You'/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212'
    }
});

export default HomeScreen;