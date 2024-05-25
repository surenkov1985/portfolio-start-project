import React from "react";
import {Container} from "../../styledComponents/Containers";
import {FlexContainer} from "../../styledComponents/FlexContainer";

import styled from "styled-components";

import image from "../../images/drawing.png"
import {WorkList} from "../../components/WorkList";
import {education, works} from "../../scripts/variables";

export function About() {
	return (
		<StyledSection id="about">
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
					<StyledAboutImage src={image} alt=""/>
				</FlexContainer>

			</Container>
		</StyledSection>
	);
}

const StyledAboutContainer = styled(FlexContainer)`
	width: 100%;
	max-width: 710px;
`

const StyledSection = styled.section`
	padding-top: 100px;
	padding-bottom: 100px;
`

const StyledAboutTitle = styled.h3`
	color: rgb(66, 68, 110);
	font-family: Poppins;
	font-size: 42px;
	font-weight: 700;
	line-height: 52px;
	letter-spacing: -0.4px;
	text-align: left;
	margin-bottom: 38px;
`

const StyledAboutContent = styled.div`
	width: 100%;
`

const StyledAboutText = styled.p`
	max-width: 480px;
	margin-bottom: 1rem;
	color: rgb(102, 102, 102);
	font-size: 1.125rem;
	font-weight: 400;
	line-height: 26px;
	letter-spacing: 0px;
`

const StyledAboutImage = styled.img`
	position: absolute;
	right: -40%	;
	height:	100%	
`