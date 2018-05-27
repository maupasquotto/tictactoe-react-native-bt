import React, { Component } from 'react';
import TicTacToe from "../../app/lib/TicTacToe";

export default class TicTacToeTab extends Component {
    render () {
        const { navigate } = this.props.navigation;
        return (
            <TicTacToe/>
        )
    }
}