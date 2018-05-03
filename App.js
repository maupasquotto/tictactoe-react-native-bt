import React from 'react';
import TicTacToe from './TicTacToeClass';
import {Button, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import * as ToastAndroid from "react-native/Libraries/Components/ToastAndroid/ToastAndroid.android";

export default class App extends React.Component {
    static _onPress() {
        // alert('oi');
        ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
    }


    render() {
        return (
            <View style={styles.mainWrapper}>
                {/* Game row 1 */}
                <View style={styles.row}>
                    <TouchableHighlight onPress={App._onPress}>
                        <View style={[styles.gridSquare, styles.borderRight, styles.borderBottom]}><Text style={styles.txtStyle}>.</Text></View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={App._onPress}>
                        <View style={[styles.gridSquare, styles.borderRight, styles.borderBottom]}><Text style={styles.txtStyle}>.</Text></View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={App._onPress}>
                        <View style={[styles.gridSquare, styles.borderBottom]}><Text style={styles.txtStyle}>.</Text></View>
                    </TouchableHighlight>
                </View>
                {/* Game row 2 */}
                <View style={styles.row}>
                    <TouchableHighlight onPress={App._onPress}>
                        <View style={[styles.gridSquare, styles.borderRight, styles.borderBottom]}><Text style={styles.txtStyle}>.</Text></View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={App._onPress}>
                        <View style={[styles.gridSquare, styles.borderRight, styles.borderBottom]}><Text style={styles.txtStyle}>.</Text></View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={App._onPress}>
                        <View style={[styles.gridSquare, styles.borderBottom]}><Text style={styles.txtStyle}>.</Text></View>
                    </TouchableHighlight>
                </View>
                {/* Game row 3 */}
                <View style={styles.row}>
                    <TouchableHighlight onPress={App._onPress}>
                        <View style={[styles.gridSquare, styles.borderRight]}><Text style={styles.txtStyle}>.</Text></View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={App._onPress}>
                        <View style={[styles.gridSquare, styles.borderRight]}><Text style={styles.txtStyle}>.</Text></View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={App._onPress}>
                        <View style={[styles.gridSquare]}><Text style={styles.txtStyle}>.</Text></View>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    gridSquare: {
        height: 70,
        width: 70,
        alignItems: 'center',
        justifyContent: 'center'

    },

    borderRight: {
        borderColor: '#000000',
        borderRightWidth: 1
    },

    borderBottom: {
        borderColor: '#000000',
        borderBottomWidth: 1
    },

    row: {
        flexDirection: 'row'
    },

    mainWrapper: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    txtStyle: {
    }
});