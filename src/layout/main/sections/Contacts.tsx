import React from "react";
import { Container } from "../../../styledComponents/Containers";
import styled from "styled-components";
import {AboutPropsType, StyledSection} from "./About";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexContainer} from "../../../styledComponents/FlexContainer";

export function Contacts() {
	return (
		<StyledContactSection id="contacts" >
			<Container>
				<FlexContainer direction={"column"} align={"center"}>
					<StyledTitle>{"For any questions please mail me:"}</StyledTitle>
					<StyledContact href={"mailto:hi@pavanmg.in"}>hi@pavanmg.in</StyledContact>
				</FlexContainer>
			</Container>
		</StyledContactSection>
	);
}

const StyledContactSection = styled(StyledSection)`
	padding-top: 100px;
	padding-bottom: 150px;

	@media (max-width: 1240px) {
		padding: 90px 0 130px 0;
	}
	@media (max-width: 991px) {
		padding: 80px 0 100px 0;
	}
	@media (max-width: 768px) {
		padding: 60px 0 80px 0;
	}
	@media (max-width: 576px) {
		padding: 50px 0 60px 0;
	}
	@media (max-width: 320px) {
		padding: 40px 0 30px 0;
	}
`

const StyledTitle = styled.h2`
  color: ${props => props.theme.colors.title};
  font-size: 58px;
  font-weight: 500;
  line-height: 1.2;
	letter-spacing: -3px;
  text-align: center;
  margin-bottom: 10px;

	@media (max-width: 1240px) {
		font-size: 46px;
	}

	@media (max-width: 991px) {
		font-size: 42px;
	}

	@media (max-width: 768px) {
		font-size: 36px;
	}
	@media (max-width: 576px) {
		font-size: 32px;
	}
`

const StyledContact = styled.a`
	background: linear-gradient(90.00deg, rgb(19, 176, 245),rgb(231, 15, 170));
	-webkit-background-clip:text;
	-webkit-text-fill-color:transparent;
	background-clip:text;
	text-fill-color:transparent;
	font-size: 58px;
	font-weight: 500;
	line-height: 1.2;
	letter-spacing: -3px;
	transition: all .5s;
	text-align: center;
	
	&:hover {
		opacity: 0.8;
	}

	@media (max-width: 1240px) {
		font-size: 46px;
	}

	@media (max-width: 991px) {
		font-size: 42px;
	}

	@media (max-width: 768px) {
		font-size: 36px;
	}
	@media (max-width: 576px) {
		font-size: 32px;
	}
`
