import styled from "styled-components";
import {FlexContainer} from "../../../../styledComponents/FlexContainer";

export const StyledSection = styled.section`
	padding-top: 86px;
	padding-bottom: 86px;
	overflow: hidden;
  position: relative;

	@media ${props => props.theme.media.tablet} {
		padding: 60px 0;
	}

	@media ${props => props.theme.media.mobile} {
		padding: 40px 0;
	}
	@media (max-width: 320px) {
		padding: 40px 0 30px 0;
	}
`

type AboutSectionPropsType = {
    image:string
}

const AboutSection = styled(StyledSection)<AboutSectionPropsType>`
	position: relative;

	&::before {
		content: url(${props => props.image});
		position: absolute;
		left: 61%;
		top: -6%;
	}
`

const AboutContainer = styled(FlexContainer)`
	width: 100%;
	max-width: 696px;
`



const AboutTitle = styled.h3`
	color: ${props => props.theme.colors.title};
	font-family: Poppins;
	font-size: 42px;
	font-weight: 700;
	line-height: 1.2;
	letter-spacing: -0.4px;
	text-align: left;
	margin-bottom: 34px;

	@media ${props => props.theme.media.tablet} {
		font-size: 2rem;
		
	}

	@media ${props => props.theme.media.mobile} {
		font-size: 1.75rem;
		margin-bottom: 26px;
		text-align: center;
	}
`

const AboutContent = styled.div`
	width: 100%;

`

const AboutText = styled.p`
	//max-width: 480px;
	margin-bottom: 2.5rem;
	color: rgb(102, 102, 102);
	font-size: 1.125rem;
	font-weight: 400;
	line-height: 1.3;
	letter-spacing: 0px;
	@media ${props => props.theme.media.mobile} {
		font-size: 1rem;
		margin-bottom: 1.5rem	;
		text-align: center;
	}
`

export const S = {
    AboutSection,
    AboutContainer,
    AboutTitle,
    AboutContent,
    AboutText
}