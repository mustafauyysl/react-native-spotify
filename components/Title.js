import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const Title = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        margin: 15
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
});
export default Title;