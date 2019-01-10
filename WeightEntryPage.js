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

console.log("Strings: ", strings)

export default class WeightEntryPage extends Component<{}> {
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
                    <Text style={styles.description}>
                        {strings.weightEntry.direction}
                    </Text>
                    <View style={styles.flowRight}>
                        <Input
                            placeholder={strings.weightEntry.inputPlaceholder}
                            style={styles.weightInput}/>
                        <Button
                            onPress={() => {}}
                            title='Record'/>
                    </View>
                    <Text style={styles.description}>
                        {strings.weightEntry.tip}   
                    </Text>
                </View>
            </ThemeProvider>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 30,
        marginTop: 65,
        alignItems: 'center'
    },
    description: {
        marginBottom: 20,
        width: '100%'
    },
    flowRight: {
        //flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    weightInput: {
        padding: 4,
        marginRight: 5,
        flexGrow: 1,
    },
})