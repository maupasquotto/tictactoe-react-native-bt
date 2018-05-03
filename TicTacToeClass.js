export default class TicTacTow {
    winningPlays = [
        [1,1,1], // LR
        [,,,1,1,1], // LR
        [,,,,,,1,1,1], // LR
        [1,,,1,,,1], // TD
        [,1,,1,,1], // TD
        [,,1,,,1,,,1], // TD
        [1,,,1,,,1], // TL BR
        [,,1,,1,,1] // TR BL
    ];

    constructor () {
        console.log('oi');
    }
}