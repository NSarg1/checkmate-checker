// LIBRARIES
import React, { useState } from 'react';
//UTILS
import { Figures } from './mate-checker.methods.js';

// COMPONENTS
import ChessFigure from '../../components/chess-figure/ChessFigure.component';
import ChessBoard from '../../components/chess-board/ChessBoard.component';
import Modal from '../../components/modal/Modal.component';
import Button from '../../components/button/Button.copmponent';

const MateChecker = () => {
    /* White
     *king = 10; queen = 20;horse = 30; bishop = 40*/
    /* Black
     *king = 50;*/

    const initialState = Array(8).fill(Array(8).fill(0));
    const initialPositions = { 10: null, 20: null, 30: null, 40: null, 50: null };
    const initialProtected = { 10: false, 20: false, 30: false, 40: false, 50: false };

    const [state, setState] = useState(initialState);
    const [isSubmited, setIsSubmited] = useState(false);
    const [activeFigure, setActiveFigure] = useState('');
    const [figuresProtected, setFiguresProtected] = useState(initialProtected);
    const [figuresPositions, setFiguresPositions] = useState(initialPositions);
    const [mateStatus, setMateStatus] = useState('');

    //SET FIGURES TO THE BOARD
    const setFigures = (rowIdx, itemIdx, selectedFigure) => {
        // USER MUST RESET THE GAME AFTER SUBMITTING
        if (isSubmited) return;
        const stateJSON = JSON.stringify(state);
        const _board = JSON.parse(stateJSON);

        // UNDO SETTED FIGURE POSITION
        if (!activeFigure) {
            if (!selectedFigure) return;
            setFiguresPositions(prevState => ({
                ...prevState,
                [selectedFigure]: null,
            }));
            _board[rowIdx][itemIdx] = 0;
            return setState(_board);
        }
        // VALIDATE FIGURE SETTING
        // FORBID USER SETTING FIGURES IN THE SAME AREA
        if (_board[rowIdx][itemIdx] > 9) {
            alert('This field has already occupied');
            return;
        }

        //SET FIGURE TO THE SELECTED AREA
        setFiguresPositions(prevState => ({
            ...prevState,
            [activeFigure]: [rowIdx, itemIdx],
        }));
        _board[rowIdx][itemIdx] = activeFigure;
        setState(_board);
        setActiveFigure('');
    };
    //SELECT FIGURE THAT INTENDED TO SET ON THE BOARD
    const selectActiveFigure = selectedFigure => {
        if (selectedFigure === activeFigure) {
            setActiveFigure('');
        } else {
            setActiveFigure(selectedFigure);
        }
    };
    //VALIDATION FOR TWO KINGS
    const kingsPositionsValidator = (whiteKing, blackKing) => {
        const [whiteKingRow, whiteKingInd] = [...whiteKing];
        const [blackKingRow, blackKingInd] = [...blackKing];

        if (Math.abs(whiteKingRow - blackKingRow) <= 1 && Math.abs(whiteKingInd - blackKingInd) <= 1) {
            return false;
        } else {
            return true;
        }
    };

    const submitAll = () => {
        if (isSubmited) return;
        const figures = new Figures(state, figuresPositions, figuresProtected);
        const positionArr = Object.values(figuresPositions);

        // CHECK IF ALL FIGURES HAS BEEN PLACED AND VALIDATE IT
        if (!positionArr.map(item => item).includes(null)) {
            if (!kingsPositionsValidator(figuresPositions[10], figuresPositions[50])) {
                alert("You can't set two kings next to each other");
                return;
            }
            figures.runAll();
            setState(figures.state);
            setFiguresProtected(prevState => ({ ...prevState, ...figures.isProtected }));
            setMateStatus(figures.checkIsMate());
        } else {
            alert('Please set all figures');
            return;
        }
        setIsSubmited(true);
    };

    const reset = () => {
        setState(initialState);
        setFiguresPositions(initialPositions);
        setFiguresProtected(initialProtected);
        setIsSubmited(false);
    };

    return (
        <div className="mate-checker">
            <div className="mate-checker__main">
                <div className="mate-checker__container">
                    <div className="mate-checker__figures">
                        {Object.keys(figuresPositions).map(elm => {
                            return !figuresPositions[elm] ? (
                                <ChessFigure
                                    activeFigure={activeFigure}
                                    selectActiveFigure={selectActiveFigure}
                                    figuresPositions={figuresPositions}
                                    key={elm}
                                    elm={+elm}
                                />
                            ) : (
                                <div key={elm}></div>
                            );
                        })}
                    </div>
                    <ChessBoard
                        state={state}
                        activeFigure={activeFigure}
                        setFigures={setFigures}
                        figuresProtected={figuresProtected}
                    />
                    <div>
                        <div className="mate-checker__control-btns">
                            <Button onClick={submitAll}>Submit</Button>
                        </div>

                        <Modal show={isSubmited} mateStatus={mateStatus} closeModal={reset} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MateChecker;
