import React from 'react';

import { Image } from './ChessBoard.styled';

import { BoardCell } from './ChessBoard.styled.js';

const ChessBoard = ({ state, setFigures, figuresProtected, activeFigure }) => {
    const handleClick = (event, rowIdx, itemIdx, item) => {
        setFigures(rowIdx, itemIdx, item, { x: event.clientX, y: event.clientY });
    };

    return (
        <div className="chess-board">
            <div className="chess-board__part-1"></div>
            <div className="chess-board__part-2"></div>

            <div className="chess-board__cell-container">
                {state.map((row, rowIdx) => (
                    <ul key={rowIdx} className="chess-board__row">
                        {row.map((item, itemIdx) => {
                            return (
                                <BoardCell
                                    figuresProtected={figuresProtected}
                                    item={item}
                                    activeFigure={activeFigure}
                                    key={`${rowIdx}-${itemIdx}`}
                                    onClick={event => handleClick(event, rowIdx, itemIdx, item)}
                                    className="chess-board__cell">
                                    {item > 9 ? (
                                        <Image
                                            className={`
										chess-figure 
										chess-board__cell-figure  
										chess-figure--${item}`}
                                        />
                                    ) : null}
                                </BoardCell>
                            );
                        })}
                    </ul>
                ))}
            </div>
        </div>
    );
};

export default ChessBoard;
