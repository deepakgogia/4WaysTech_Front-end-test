import React, { Component } from 'react';
import './../styles/gamepage.css';
import { winningConditions } from '../core/base';
import { ModalWinner } from '../Modal/modalwinner';

export class GamePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPlayer: 'X',
            isactive: true,
            fillPlaced: Array(9),
            totlFilled: 0,
            ismodalOpen: false,
            isGameDrawn: false
        }
    }


    clickHandler = ({ target: { id } }) => {
        let gameWon = false;
        document.getElementById(id).innerHTML = this.state.currentPlayer == null ? '' : this.state.currentPlayer;
        const newState = { ...this.state };
        newState.fillPlaced[id.split('-')[1]] = newState.currentPlayer;
        newState.totlFilled = newState.totlFilled + 1;
        newState.isactive = !newState.isactive;
        newState.currentPlayer = newState.currentPlayer === 'X' ? 'O' : 'X';

        if (newState.totlFilled > 2) {
            for (let index = 0; index < 8; index++) {
                const element = winningConditions[index];
                const val1 = newState.fillPlaced[element[0]];
                const val2 = newState.fillPlaced[element[1]];
                const val3 = newState.fillPlaced[element[2]];
                if (val1 === undefined && val2 === undefined && val3 === undefined) {
                    continue;
                }
                if (val1 === val2 && val2 === val3) {
                    gameWon = true;
                    break;
                }
            }
        }

        const gameDrwan = !newState.fillPlaced.includes(undefined);
        if (gameWon) {
            newState.ismodalOpen = !newState.ismodalOpen;
        }
        else if (gameDrwan) {
            newState.ismodalOpen = !newState.ismodalOpen;
            newState.isGameDrawn = !newState.isGameDrawn;
        }
        this.setState(newState);
    }

    render() {
        const { search } = this.props.history.location;
        const player1 = search.split('&')[0].split('=')[1];
        const player2 = search.split('&')[1].split('=')[1];
        const { isactive, ismodalOpen, currentPlayer, isGameDrawn } = this.state;
        return (
            <>

                <div className='player-info'>
                    <label htmlFor="player1" style={{ color: isactive ? 'red' : '' }}>Player 1: {player1} "X"</label>
                </div>
                <div className='player-info'>
                    <label htmlFor="player2" style={{ color: !isactive ? 'red' : '' }}>Player 2: {player2} "O"</label>
                </div>
                <div className='box-container' onClick={(e) => this.clickHandler(e)}>
                    <div className='box' id="div-0"></div>
                    <div className='box' id="div-1"></div>
                    <div className='box' id="div-2"></div>
                    <div className='box' id="div-3"></div>
                    <div className='box' id="div-4"></div>
                    <div className='box' id="div-5"></div>
                    <div className='box' id="div-6"></div>
                    <div className='box' id="div-7"></div>
                    <div className='box' id="div-8"></div>
                </div>
                <ModalWinner modalIsOpen={ismodalOpen} props={this.props} wonPlayer={currentPlayer === 'X' ? player2 : player1}
                    gameDrwan={isGameDrawn} />
            </>
        );
    }
}
