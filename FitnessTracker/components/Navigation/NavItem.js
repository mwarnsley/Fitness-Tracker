import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const NavItem = (props) => (
    <TouchableOpacity style={styles.itemContainer} onPress={props.navigate}>
      <Icon name={props.name} style={styles.icon}/>
      <Text style={styles.iconText}>{props.label}</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    color: '#FFF',
    fontSize: 32,
    paddingVertical: 4,
  },
  iconText: {
    color: '#FFF'
  }
})

export default NavItem;
