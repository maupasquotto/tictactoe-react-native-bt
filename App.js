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
    _onPress() {
        alert('oi')
    }

    render() {
        return (
            <View style={styles.mainWrapper}>
                {/* Game row 1 */}
                <View style={styles.row}>
                    <TouchableHighlight onPress={this._onPress}>
                        <View style={styles.gridSquare}><Text style={styles.txtStyle}>sdfghjk</Text></View>
                    </TouchableHighlight>
                    <View style={styles.gridSquare}><Text style={styles.txtStyle}> </Text></View>
                    <View style={styles.gridSquare}><Text style={styles.txtStyle}> </Text></View>
                </View>
                {/* Game row 2 */}
                <View style={styles.row}>
                    <View style={styles.gridSquare}><Text style={styles.txtStyle}> </Text></View>
                    <View style={styles.gridSquare}><Text style={styles.txtStyle}> </Text></View>
                    <View style={styles.gridSquare}><Text style={styles.txtStyle}> </Text></View>
                </View>
                {/* Game row 3 */}
                <View style={styles.row}>
                    <View style={styles.gridSquare}><Text style={styles.txtStyle}> </Text></View>
                    <View style={styles.gridSquare}><Text style={styles.txtStyle}> </Text></View>
                    <View style={styles.gridSquare}><Text style={styles.txtStyle}> </Text></View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    gridSquare: {
        height: 70,
        width: 70,
        backgroundColor: '#C0C0C0',
        alignItems: 'center',
        justifyContent: 'center',

    },

    row: {
        flexDirection: 'row'
    },

    mainWrapper: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow'
    },

    txtStyle: {
    }
});