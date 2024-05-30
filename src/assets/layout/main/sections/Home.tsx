import React from "react";
import styled from "styled-components";
import { Container } from "../../../styledComponents/Containers";
import portfolio from "../../../images/portfolio.jpg";
import { FlexContainer } from "../../../styledComponents/FlexContainer";
import { StyledGradientText } from "../../footer/Footer";
import {AboutPropsType} from "./About";

export function Home(props:AboutPropsType) {
	return (
		<StyledSection id="home" ref={props.refVal}>
			<Container>
				<FlexContainer align="center" justify="space-between">
					<StyledTitle>
						<span>
							Hi 👋,
							<br /> My name is <br /> <GradientText>Pavan MG</GradientText>
						</span>
						<h1>I build things for web</h1>
					</StyledTitle>
					<StyledImageContainer>
						<StyledImage src={portfolio} />
					</StyledImageContainer>
				</FlexContainer>
			</Container>
		</StyledSection>
	);
}

const StyledSection = styled.section`
	padding: 200px 0 100px 0;
`;

const StyledImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 50%;
`;

const StyledImageContainer = styled.div`
	width: 350px;
	height: 350px;
	border-radius: 50%;
	isolation: isolate;
	position: relative;
	flex-shrink: 0;

	&::before {
		content: "";
		display: block;
		position: absolute;
		width: calc(100% + 19px);
		height: calc(100% + 18px);
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: 50%;
		background: linear-gradient(180deg, #e70faa 0%, #00c0fd 100%);
		z-index: -1;
	}
`;

const StyledTitle = styled.div`
	& * {
		font-size: 58px;
		font-weight: 700;
		line-height: 70px;
		letter-spacing: -1px;
		text-align: left;
		color: #42446e;
	}
`;

const GradientText = styled(StyledGradientText)`
	font-size: 58px;
	font-weight: 700;
	line-height: 70px;
	letter-spacing: -1px;
`;
