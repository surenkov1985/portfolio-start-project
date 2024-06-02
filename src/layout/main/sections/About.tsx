import React from "react";
import {Container} from "../../../styledComponents/Containers";
import {FlexContainer} from "../../../styledComponents/FlexContainer";

import styled from "styled-components";

import image from "../../../assets/images/drawing.png"
import {WorkList} from "../../../components/WorkList";
import {education, works} from "../../../assets/scripts/variables";

export type AboutPropsType = {
	refVal: any
}
export function About() {
	return (
		<StyledAboutSection id="about">
			<Container>
				<FlexContainer justify={"space-between"}>
					<StyledAboutContainer>
						<StyledAboutContent>
							<StyledAboutTitle>About Me</StyledAboutTitle>
							<StyledAboutText>The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.</StyledAboutText>
							<StyledAboutTitle>Work Experience</StyledAboutTitle>

							<WorkList data={works}/>


							<StyledAboutTitle>Education</StyledAboutTitle>

							<WorkList data={education}/>

						</StyledAboutContent>

					</StyledAboutContainer>
					{/*<StyledAboutImage src={image} alt=""/>*/}
				</FlexContainer>

			</Container>
		</StyledAboutSection>
	);
}

export const StyledSection = styled.section`
	padding-top: 86px;
	padding-bottom: 86px;
	overflow: hidden;

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

const StyledAboutSection = styled(StyledSection)`
	position: relative;

	&::before {
		content: url("${image}");
		position: absolute;
		left: 61%;
		top: -6%;
	}
`

const StyledAboutContainer = styled(FlexContainer)`
	width: 100%;
	max-width: 696px;
`



const StyledAboutTitle = styled.h3`
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

const StyledAboutContent = styled.div`
	width: 100%;

`

const StyledAboutText = styled.p`
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
