import React, { Component } from 'react';
import { StyleSheet, View, Button, Text } from "react-native";

export default class Settings extends Component {
    render() {
        const { navigate } = this.props.navigation;

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
        justifyItems: 'center'
    },
    header: {
        fontSize: 20,
        marginVertical: 20
    }
});