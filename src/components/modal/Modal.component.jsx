import React from 'react';
import ReactDOM from 'react-dom';

import Transition from 'react-transition-group/Transition';
import Button from '../button/Button.copmponent';

const animationTiming = {
    enter: 700,
    exit: 500,
};

const modal = props => {
    const { show, closeModal, mateStatus } = props;

    return ReactDOM.createPortal(
        <Transition mountOnEnter unmountOnExit in={show} timeout={animationTiming}>
            {state => {
                const cssClasses = [
                    'modal',
                    state === 'entering' ? 'modal--open' : state === 'exiting' ? 'modal--closed' : null,
                ];

                return (
                    <div className={cssClasses.join(' ')}>
                        <h1 className="mate-checker__status">{mateStatus}</h1>
                        <div>
                            <Button className="ns-btn--black" onClick={closeModal}>
                                Reset positions
                            </Button>
                        </div>
                    </div>
                );
            }}
        </Transition>,
        document.getElementById('root')
    );
};

export default modal;
