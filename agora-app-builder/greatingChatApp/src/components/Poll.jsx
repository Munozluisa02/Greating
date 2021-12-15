import React, { useState, useEffect, useContext } from 'react';
import Modal from 'react-modal';
import { Line } from 'rc-progress';

import { PollContext } from './PollContext';
import styles from './Pollstyles';

const Poll = () => {
    const { question, setQuestions, answers: voteData, setAnswers, isModalOpen, setIsModalOpen } = useContext(PollContext);
    const [totalVotes, setTotalVotes] = useState(0);
    const [voted, setVoted] = useState(false);

    const closeModal = () => {
        setIsModalOpen(false);
        setTotalVotes(0);
        setVoted(false);
        setQuestions('');
        setAnswers([
            {Option: '', votes: 0},
            {Option: '', votes: 0},
            {Option: '', votes: 0},
            {Option: '', votes: 0},
        ]);
    }

    return (
        <Modal
            isOpen= {isModalOpen}
            onRequestClose= {closeModal}
            content= "PollModal"
            style={styles.customStyles}
        >
            <div>
                <h1>{question}</h1>
            </div>
        </Modal>
    )
}

export default Poll;