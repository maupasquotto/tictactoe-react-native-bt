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
    /**
     * Game states that control entire app
     *
     * @author Mauricio de Castro Pasquotto
     * @date 19/05/2018
     * @type {{gameBoard: *[], nextMove: string, gameEnded: boolean}}
     */
    state = {
        gameBoard: [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ],
        nextMove: 'X',
        gameEnded: false
    };


    /**
     * The constructor calls super constructor and resets the game automatically
     *
     * @author Mauricio de Castro Pasquotto
     * @date 19/05/2018
     */
    constructor()
    {
        /* Call super class and reset game */
        super();
        this.resetGame();
    }

    /**
     * Reset game and all states
     *
     * @author Mauricio de Castro Pasquotto
     * @date 19/05/2018
     */
    resetGame()
    {
        /* Reset Virtual Board */
        this.setState({
            gameBoard : [
                ['', '', ''],
                ['', '', ''],
                ['', '', '']
            ],
            nextMove: 'X',
            gameEnded: false
        });
    }

    /**
     * Verify whether the game is over or not
     *
     * @author Mauricio de Castro Pasquotto
     * @date 19/05/2018
     * @returns {*}
     */
    gameEnded()
    {
        let gameBoard = this.state.gameBoard;

        /* Check rows and columns */
        for (let i = 0; i < 3; i++) {
            /* Check rows */
            if (gameBoard[i][0] === gameBoard[i][1] && gameBoard[i][0] === gameBoard[i][2] && ['X', 'O'].indexOf(gameBoard[i][0]) >= 0) {
                return gameBoard[i][0];
            }

            /* Check columns */
            if (gameBoard[0][i] === gameBoard[1][i] && gameBoard[0][i] === gameBoard[2][i] && ['X', 'O'].indexOf(gameBoard[0][i]) >= 0) {
                return gameBoard[0][i];
            }
        }

        /* Check Diagonals */
        if (((gameBoard[2][0] === gameBoard[1][1] && gameBoard[2][0] === gameBoard[0][2]) || // Diagonal Left Top -> Bottom right (\)
            (gameBoard[0][0] === gameBoard[1][1] && gameBoard[0][0] === gameBoard[2][2])) && // Diagonal Right Top -> Bottom left (/)
            ['X', 'O'].indexOf(gameBoard[1][1]) >= 0) {
            return gameBoard[1][1];
        }

        /* Check whether nobody won */
        for (let i = 0; i < 3; i++) {
            for (let x = 0; x < 3; x++) {
                if (gameBoard[0][0] === '') {
                    return false;
                }
            }
        }

        return 'Nobody';
    }

    /**
     * Return next to move and set its state
     *
     * @author Mauricio de Castro Pasquotto
     * @date 19/05/2018
     * @returns {string}
     */
    getNextMove()
    {
        let v = this.state.nextMove;

        if (v === 'X') {
            this.setState({nextMove: 'O'});
        } else {
            this.setState({nextMove: 'X'});
        }

        return v;
    }

    /**
     * Set successful movement
     *
     * @param x
     * @param y
     * @param t
     */
    setMovement(x, y, t) {
        let gameBoard = this.state.gameBoard;
        gameBoard[x][y] = t;


        this.setState({
            gameBoard: gameBoard
        });
    }

    /**
     * Execute movement
     *
     * @author Mauricio de Castro Pasquotto
     * @date 19/05/2018
     * @param x
     * @param y
     * @returns {boolean}
     */
    doMovement(x, y)
    {

        /* Set movement */
        if (this.state.gameBoard[x][y] === '' && !this.state.gameEnded) {

            this.setMovement(x, y, this.getNextMove());
        }

        /* Define whether the game is over or not */
        let gameEnded = this.gameEnded();
        if (gameEnded !== false) {
            this.setState({gameEnded: true});
            TicTacToe.showWarning('Game is over! ' + gameEnded + ' won!');
            return false;
        }
    }

    /**
     * Show a toast message
     *
     * @author Mauricio de Castro Pasquotto
     * @date 19/05/2018
     * @param msg
     */
    static showWarning(msg)
    {
        ToastAndroid.show(msg, ToastAndroid.SHORT);
    }

    /**
     * Return the game board so you can play !
     *
     * @author Mauricio de Castro Pasquotto
     * @date 19/05/2018
     * @return {*}
     */
    render()
    {
        return (
            <View style={{flex: 1}}>
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
                <View style={{flex: 1}}>
                    <Button title="Reset" onPress={() => {this.resetGame()}} />
                </View>
            </View>
        );
    }

}

/**
 * Style !
 *
 * @author Mauricio de Castro Pasquotto
 * @date 19/05/2018
 * @type {*|{panHandlers, getInteractionHandle}|{duration, create, update, delete}|{type, property}}
 */
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
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    txtStyle: {}
});