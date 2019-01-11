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
import { createStackNavigator, createAppContainer } from 'react-navigation'

const RootStack = createStackNavigator(
  {
    WeightEntry: WeightEntryScreen,
    Graph: GraphScreen,
  },
  {
    initialRouteName: 'WeightEntry',
  }
)

const AppContainer = createAppContainer(RootStack)

export default class App extends Component {
  render() {
    return <AppContainer />
  }
}
