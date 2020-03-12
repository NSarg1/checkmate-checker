import styled from 'styled-components';


export const Image = styled.div(props => {
    const { activeFigure, elm } = props;

    return `
	transform: ${activeFigure === elm ? 'scale(1.2)' : ''};
	background-size: cover;
	background-position: center;
   `;
});
