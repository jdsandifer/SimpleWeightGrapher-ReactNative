'use strict'

import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import {
    ThemeProvider,
    Text,
    Input,
    Button
} from 'react-native-elements'
import strings from './resources/strings'

export default class WeightEntryScreen extends Component {
    constructor(props) {
        super(props)
    }

    _recordWeight() {
        // record new value in database
    }

    render() {
        return (
            <ThemeProvider>
                <View style={styles.container}>
                    <View style={styles.top}>
                        <Text style={styles.description}>
                            {strings.weightEntry.direction}
                        </Text>
                    </View>
                    <View style={styles.entrySection}>
                        <Input
                            placeholder={strings.weightEntry.inputPlaceholder}
                            style={styles.weightInput}/>
                        <Button
                            onPress={() => this.props.navigation.navigate('Graph')}
                            title='Record'
                            style={styles.weightButton}/>
                    </View>
                    <View style={styles.bottom}>
                        <Text style={styles.description}>
                        {   strings.weightEntry.tip}   
                        </Text>
                    </View>
                </View>
            </ThemeProvider>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        //marginTop: 93,
        padding: 30,
    },
    top: {
        flex: 1,
        width: '100%',
    },
    entrySection: {
        alignItems: 'center',
        width: '100%',
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        width: '100%',
    },
    description: {
        width: '100%',
    },
    weightInput: {
    },
    weightButton: {
        marginBottom: 10,
        marginTop: 10,
        width: 250,
    },
})