import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '46%',
        left: '51%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '30px',
        width: '220px',
        height: '13%',
        transform: 'translate(-50%, -50%)',
    }
};

export const ModalWinner = ({ modalIsOpen, props, wonPlayer, gameDrwan }) => {
    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                style={customStyles}
                ariaHideApp={false}
            >
                <div style={{ marginLeft: '20%' }}>
                    {gameDrwan ? <label>Game Drawn</label> : <label>Victory to {wonPlayer}!</label>}
                </div>
                <div style={{ marginLeft: '20%', marginTop: '15%' }}>
                    <button onClick={() => window.location.reload()}>Restart</button>
                    <button style={{ marginLeft: '10px' }} onClick={() => props.history.push('')}>Quit</button>
                </div>
            </Modal>
        </>
    )
}