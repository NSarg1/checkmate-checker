import styled from "styled-components";

export const Image = styled.div((props) => {
	const { activeFigure, elm } = props;

	return `
   animation-name: ${activeFigure === elm ? "scaleIn" : ""};
	background-size: cover;
	background-position: center;
   `;
});
