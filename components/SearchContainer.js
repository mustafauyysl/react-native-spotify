import React, {Component} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

Icon.loadFont();

class SearchContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon style={styles.searchIcon} name="search" size={20} color="#000" />
        <TextInput
          style={styles.input}
          placeholder="Artists, songs or podcasts"
          onChangeText={(searchString) => {
            this.setState({searchString});
          }}
          underlineColorAndroid="transparent"
          placeholderTextColor="#121212"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 15,
    borderRadius: 5,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
  },
});

export default SearchContainer;
