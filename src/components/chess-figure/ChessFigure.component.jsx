import React from 'react';

// COMPONENTS
import { Image } from './ChessFigure.styled.js';

const ChessFigure = ({ elm, selectActiveFigure, activeFigure }) => {
    const classes = ['chess-figure', `chess-figure--${elm}`, 'chess-figure--outside'];

    return (
        <Image
            className={classes.join(' ')}
            activeFigure={activeFigure}
            elm={elm}
            onClick={selectActiveFigure.bind(this, elm)}
        />
    );
};

export default ChessFigure;
