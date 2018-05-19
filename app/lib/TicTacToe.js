//import App from "../../App";
import React from 'react';
import {Button, StyleSheet, Text, TouchableHighlight, View, ToastAndroid} from 'react-native';

/**
 * Base class for TicTacToe game
 * V1 - Offline game
 *
 * @author Mauricio de Castro Pasquotto
 * @date 17/05/2018
 */
export default class TicTacToe extends React.Component
{
    state = {
        gameBoard: [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ],
        nextMove: 'X'
    };

    constructor(props)
    {
        /* Call super class and reset game */
        super(props);
        this.resetGame();
    }

    resetGame()
    {
        /* Reset Virtual Board */
        this.state.gameBoard = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
    }

    /* Check if the game is done and return who won */
    gameEnd()
    {
        return false;
    }

    getNextMove()
    {
        let v = this.state.nextMove;

        if (v === 'X') {
            this.setState({nextMove: 'O'});
            //this.state.nextMove = 'O';
        } else {
            this.setState({nextMove: 'X'});
            //this.state.nextMove = 'X';
        }

        return v;
    }

    setMovement(x, y, t) {
        let gameBoard = this.state.gameBoard;
        gameBoard[x][y] = t;


        this.setState({
            gameBoard: gameBoard
        });
    }

    doMovement(x, y)
    {

        if (this.gameEnd()) {
            this.showWarning('Game is over!');
        }

        if (this.state.gameBoard[x][y] === '') {
            this.setMovement(x, y, this.getNextMove());
            // this.state.gameBoard[x][y] = this.getNextMove();
        } else {
            this.showWarning('Space already occupied!');
        }
    }

    showWarning(msg)
    {
        ToastAndroid.show(msg, ToastAndroid.SHORT);
    }

    render()
    {
        return (
            <View style={styles.mainWrapper}>
                {/* Game row 1 */}
                <View style={styles.row}>
                    <TouchableHighlight onPress={() => {this.doMovement(0, 0)}}>
                        <View style={[styles.gridSquare, styles.borderRight, styles.borderBottom]}>
                            <Text style={styles.txtStyle}>{this.state.gameBoard[0][0]}</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => {this.doMovement(0, 1)}}>
                        <View style={[styles.gridSquare, styles.borderRight, styles.borderBottom]}>
                            <Text style={styles.txtStyle}>{this.state.gameBoard[0][1]}</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => {this.doMovement(0, 2)}}>
                        <View style={[styles.gridSquare, styles.borderBottom]}>
                            <Text style={styles.txtStyle}>{this.state.gameBoard[0][2]}</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                {/* Game row 2 */}
                <View style={styles.row}>
                    <TouchableHighlight onPress={() => {this.doMovement(1, 0)}}>
                        <View style={[styles.gridSquare, styles.borderRight, styles.borderBottom]}>
                            <Text style={styles.txtStyle}>{this.state.gameBoard[1][0]}</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => {this.doMovement(1, 1)}}>
                        <View style={[styles.gridSquare, styles.borderRight, styles.borderBottom]}>
                            <Text style={styles.txtStyle}>{this.state.gameBoard[1][1]}</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => {this.doMovement(1, 2)}}>
                        <View style={[styles.gridSquare, styles.borderBottom]}>
                            <Text style={styles.txtStyle}>{this.state.gameBoard[1][2]}</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                {/* Game row 3 */}
                <View style={styles.row}>
                    <TouchableHighlight onPress={() => {this.doMovement(2, 0)}}>
                        <View style={[styles.gridSquare, styles.borderRight]}>
                            <Text style={styles.txtStyle}>{this.state.gameBoard[2][0]}</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => {this.doMovement(2, 1)}}>
                        <View style={[styles.gridSquare, styles.borderRight]}>
                            <Text style={styles.txtStyle}>{this.state.gameBoard[2][1]}</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => {this.doMovement(2, 2)}}>
                        <View style={[styles.gridSquare]}>
                            <Text style={styles.txtStyle}>{this.state.gameBoard[2][2]}</Text>
                        </View>
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

    txtStyle: {}
});