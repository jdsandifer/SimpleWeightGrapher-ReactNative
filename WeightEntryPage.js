'use strict'

import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import {
    ThemeProvider,
    Text,
    Input,
    Button
} from 'react-native-elements'

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
                        Please, enter your weight below.
                    </Text>
                    <Text style={styles.description}>
                        Pro Tip: You can actually use any number you want to track - weight, waist measurement or a combination of locations totaled together, or even body fat percentage. Just pick one that works for you.   
                    </Text>
                    <View style={styles.flowRight}>
                        <Input
                            placeholder='Enter weight'
                            style={styles.weightInput}/>
                        <Button
                            onPress={() => {}}
                            title='Record'/>
                    </View>
                </View>
            </ThemeProvider>
        )
    }
}

const styles = StyleSheet.create({
    description: {
        marginBottom: 20,
        textAlign: 'center'
    },
    container: {
        padding: 30,
        marginTop: 65,
        alignItems: 'center'
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