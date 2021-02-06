import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import CircleContainer from '../../components/CircleContainer';
import PlayerContainer from '../../components/PlayerContainer';
import SquareContainer from '../../components/SquareContainer';
import Title from '../../components/Title';
import * as Songs from '../../data/songs';
import {connect} from 'react-redux';

class HomeScreen extends Component {
  renderItem = (item) => {
    return (
      <SquareContainer
        song={item.item}
        name={item.item.name}
        img={item.item.img}
      />
    );
  };

  renderItem2 = (item) => {
    return <CircleContainer name={item.item.name} img={item.item.img} />;
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Title title="Just For You" />
          <FlatList
            data={Songs.songs}
            keyExtractor={(item) => item.id}
            renderItem={(item) => this.renderItem(item)}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
          <Title title="Recently Played" />
          <FlatList
            data={Songs.songs}
            keyExtractor={(item) => item.id}
            renderItem={(item) => this.renderItem2(item)}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
          <Title title="New Music Today" />
          <FlatList
            data={Songs.songs}
            keyExtractor={(item) => item.id}
            renderItem={(item) => this.renderItem(item)}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </ScrollView>
        {this.props.playSong.id ? (
          <PlayerContainer
            name={this.props.playSong.name}
            img={this.props.playSong.img}
          />
        ) : null}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
});

function mapStateToProps(state) {
  return {
    playSong: state.playSongReducer,
  };
}

export default connect(mapStateToProps)(HomeScreen);
