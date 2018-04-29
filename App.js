import React from 'react';
import {Button, StyleSheet, Text, TouchableHighlight, View} from 'react-native';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Shake your phone to open the developer menu.</Text>
//       </View>
//     );
//   }
// }

export default class App extends React.Component {
    static _onPress() {
        alert('oi');
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