import React from 'react';
import Modal from 'react-modal';
import { NewGame } from '../Components/NewGame';

const customStyles = {
    content: {
        top: '26%',
        left: '53%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '30px',
        width: '250px',
        height: '20%',
        transform: 'translate(-60%, -50%)',
    }
};

export const ModalNewGame = ({ modalIsOpen, props }) => {
    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                style={customStyles}
                ariaHideApp={false}
            >
                <NewGame props={props} />
            </Modal>
        </>
    )
}