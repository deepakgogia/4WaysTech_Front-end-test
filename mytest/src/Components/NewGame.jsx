import React, { Component } from 'react';
import Joi from 'joi-browser';
export class NewGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            players: {
                player1: '',
                player2: ''
            },
            schema: {
                player1: Joi.string().alphanum().min(3).max(10).required().label('player1'),
                player2: Joi.string().alphanum().min(3).max(10).required().label('player2')
            },
            errors: {}
        }
    }
    submitEvent = (e) => {
        e.preventDefault();
        const { players, schema } = this.state;
        const x = Joi.validate(players, schema);
        const newState = { ...this.state };
        newState.errors = {}
        if (x.error) {
            const { details } = x.error;
            if (details && details.length > 0) {
                newState.errors[details[0].context.key] = details[0].message;
                this.setState(newState);
            }
        }
        else {
            this.props.props.history.push('gamepage?p1=' + players.player1 + '&p2=' + players.player2)
        }
    }

    txtChange = ({ target: { id, value } }) => {
        const newState = { ...this.state };
        newState.players[id] = value;
        this.setState(newState);
    }
    render() {
        const { errors, players: { player1, player2 } } = this.state;
        return (
            <>
                <form onSubmit={this.submitEvent}>
                    <div style={{ margin: '2px', textAlign: 'center' }}>
                        <label>Start a New Game</label>
                    </div>
                    <div style={{ marginBottom: '5px' }}>
                        <label htmlFor="player1">Player 1</label>
                        <input style={{ margin: '5px' }} id="player1" value={player1} onChange={this.txtChange} placeholder='name1' />
                        {errors.player1 && <small>{errors.player1}</small>}
                    </div>
                    <div>
                        <label htmlFor="player2">Player 2</label>
                        <input style={{ margin: '5px' }} id="player2" value={player2} onChange={this.txtChange} placeholder='name2' />
                        {errors.player2 && <small>{errors.player2}</small>}
                    </div>
                    <button style={{ marginLeft: '80px', marginTop: '7px' }} type='submit'>Start</button>
                    <button style={{ marginLeft: '20px', marginTop: '7px' }} type='button' onClick={() => window.location.reload()}>Quit</button>
                </form>
            </>
        );
    }
}