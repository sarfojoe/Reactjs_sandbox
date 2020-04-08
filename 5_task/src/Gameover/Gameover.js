import React from 'react';
import './Gameover.css';

const closeHandler = () => {
    window.location.reload();
};

const Gameover = (props) => {
    return (
        <div className='overlay'>
            <div className='overlaybox'>
                <div>
            <h2> Game over</h2>
    <p>Your Score is : <span> {props.score} </span> </p>
            </div>
            <button onClick={closeHandler}>Close</button>
            </div>
        </div>
    );
}

export default Gameover;