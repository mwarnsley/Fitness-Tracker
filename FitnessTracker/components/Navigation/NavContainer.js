import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import Tabs from 'react-native-tabs';
import NavItem from './NavItem';

const NavContainer = (props) => (
  <Tabs style={styles.tabsContainer}>
    <NavItem navigate={() => props.navigate('Home')} name="home" label="Home" icon="home"/>
    <NavItem navigate={() => props.navigate('History')} name="history" label="History" icon="history"/>
    <NavItem navigate={() => props.navigate('Edit')} name="edit" label="Edit" icon="edit"/>
  </Tabs>
)

const styles = StyleSheet.create({
  tabsContainer: {
    backgroundColor: '#000035',
    height: 65
  }
})

export default NavContainer;
