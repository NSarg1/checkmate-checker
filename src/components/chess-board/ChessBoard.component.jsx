import React from "react";
import uniqid from "uniqid";

import { Image } from "../styled-components/styled-components.js";

import { BoardCell } from "./ChessBoard.styled.js";

const ChessBoard = ({ state, setFigures, figuresProtected, activeFigure }) => {
	const handleClick = (event, rowIdx, itemIdx, item) => {
		setFigures(rowIdx, itemIdx, item, { x: event.clientX, y: event.clientY });
	};

	return (
		<div className='chess-board'>
			{state.map((row, rowIdx) => (
				<ul key={uniqid()} className='chess-board__row'>
					{row.map((item, itemIdx) => {
						return (
							<BoardCell
								figuresProtected={figuresProtected}
								item={item}
								activeFigure={activeFigure}
								key={uniqid()}
								onClick={(event) => handleClick(event, rowIdx, itemIdx, item)}
								className='chess-board__cell'>
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
	);
};

export default ChessBoard;
