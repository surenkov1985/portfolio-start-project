import styled, {css} from "styled-components";
import {HeaderPropsType} from "./HeaderTypes";

const StyledHead = styled.header<HeaderPropsType>`
	width: 100%;
	padding: 40px 0;
	
	${props => props.fixed && css`
		width: 100%;
		padding: 20px 0;
		position: fixed;
		//height: 100vh;
		top: 0;
		left: 0;
		transform: ${props.isActive ? 'translateY(0)' : 'translateY(-100%)'};
		transition: transform 0.7s;
		background: ${props => props.theme.colors.fixedHeaderBg};
		backdrop-filter: blur(5px);
	`}
`;


export const S = {
    StyledHead
}