/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

'use strict'

import React, {Component} from 'react'
import WeightEntryScreen from './WeightEntryScreen'
import GraphScreen from './GraphScreen'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'

const RootStack = createBottomTabNavigator({
    'Weight Entry': {
      screen: WeightEntryScreen,
    },
    Graph: {
      screen: GraphScreen,
    },
  }, {
    headerMode: 'none',
  })

const AppContainer = createAppContainer(RootStack)

export default class App extends Component {
  render() {
    return <AppContainer />
  }
}
