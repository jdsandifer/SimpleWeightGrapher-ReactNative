'use strict'

import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    AcitvityIndicator,
    Image,
} from 'react-native'

export default class WeightEntryPage extends Component<{}> {
    constructor(props) {
        super(props)
    }

    _recordWeight() {
        // record new value in database
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.description}>
                    Please, enter your weight below.
                </Text>
                <Text style={styles.description}>
                    Pro Tip: You can actually use any number you want to track - weight, waist measurement or a combination of locations totaled together, or even body fat percentage. Just pick one that works for you.   
                </Text>
                <View style={styles.flowRight}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder='Enter weight here'/>
                    <Button
                        onPress={() => {}}
                        color='#48BBEC'
                        title='Record'/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    description: {
        marginBottom: 20,
        fontSize: 18,
        textAlign: 'center',
        color: '#656565'
    },
    container: {
        padding: 30,
        marginTop: 65,
        alignItems: 'center'
    },
    flowRight: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    searchInput: {
        height: 36,
        padding: 4,
        marginRight: 5,
        flexGrow: 1,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48BBEC',
        borderRadius: 8,
        color: '#48BBEC',
    },
})