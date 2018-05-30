import React, { Component } from 'react';
import { StyleSheet, View, Button, Text } from "react-native";

export default class SettingsTab extends Component {


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>
                    Settings !
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems:'center',
        justifyContent: 'center'
    },
    header: {
        fontSize: 20,
        marginVertical: 20
    }
});