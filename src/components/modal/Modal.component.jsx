import React from "react";
import ReactDOM from "react-dom";

import Transition from "react-transition-group/Transition";

const animationTiming = {
	enter: 500,
	exit: 500,
};

const modal = (props) => {
	const { show, closeModal, mateStatus } = props;

	return ReactDOM.createPortal(
		<Transition mountOnEnter unmountOnExit in={show} timeout={animationTiming}>
			{(state) => {
				const cssClasses = [
					"modal",
					state === "entering" ? "modal--open" : state === "exiting" ? "modal--closed" : null,
				];

				console.log(state);
				return (
					<div className={cssClasses.join(" ")}>
						<h1 className='mate-checker__status'>{mateStatus}</h1>
						<button className='btn' onClick={closeModal}>
							Reset positions
						</button>
					</div>
				);
			}}
		</Transition>,
		document.getElementById("root")
	);
};

export default modal;
