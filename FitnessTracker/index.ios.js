import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text
} from 'react-native';

import NavContainer from './components/Navigation/NavContainer';
import HistoryScreen from './components/History/HistoryScreen';
import EditScreen from './components/Edit/EditScreen';

class HomeScreen extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <NavContainer navigate={navigate}/>
        <Text>This is the Home Screen</Text>
      </View>
    );
  }
}

const FitnessTracker = StackNavigator({
  Home: { screen: HomeScreen },
  History: { screen: HistoryScreen },
  Edit: { screen: EditScreen },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

AppRegistry.registerComponent('FitnessTracker', () => FitnessTracker);
