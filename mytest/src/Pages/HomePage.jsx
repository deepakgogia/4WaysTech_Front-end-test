import React, { Component } from 'react';
import './../styles/home.css';
import { ModalNewGame } from './../Modal/modalnewgame';
export class HomePage extends Component {
    state = {
        isModelOpen: false
    }
    render() {
        const { isModelOpen } = this.state;
        return (
            <>
                <div>
                    <button className='btn' onClick={() => this.setState({ isModelOpen: !isModelOpen })}>New Game</button>
                    <button className='btn' onClick={() => this.props.history.push('credits')}>Credits</button>
                    <button className='btn' onClick={() => window.location.replace("http://www.google.com")}>Exit</button>
                    <ModalNewGame modalIsOpen={isModelOpen} props={this.props} />
                </div>
            </>
        );
    }
}