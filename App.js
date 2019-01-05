/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

'use strict'

import React, {Component} from 'react'
import {StyleSheet, NavigatorIOS} from 'react-native'
import WeightEntryPage from './WeightEntryPage'

export default class App extends Component<{}> {
    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
                    title: 'Simple Weight Grapher',
                    component: WeightEntryPage,
                }}/>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
