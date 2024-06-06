import styled from "styled-components";

const Socials = styled.div`
	display: flex;
	align-items: center;
	gap: 1.25rem;
	margin-left: 50px;
	padding-top: 6px;
	
	@media ${props => props.theme.media.tablet} {
		margin-left: auto;
		
	}

	@media ${props => props.theme.media.mobile} {
		display: none;

	}
	
	//@me
`;

export const S = {
    Socials
}