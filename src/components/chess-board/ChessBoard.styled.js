import styled from "styled-components";

export const BoardCell = styled.li((props) => {
	const { activeFigure, figuresProtected, item } = props;

	return `
   background-color:${
		item === 1
			? "rgba(255, 0, 0, 0.200)"
			: figuresProtected[item] && item === 50
			? "rgba(255, 0, 0, 0.500)"
			: figuresProtected[item]
			? "rgba(0, 184, 0, 0.350)"
			: ""
	};
   &:hover {
     background-color: ${activeFigure ? "rgba(255, 208, 0, 0.250)" : ""};
   }
   
   `;
});
