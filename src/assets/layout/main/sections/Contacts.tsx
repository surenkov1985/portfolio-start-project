import React from "react";
import { Container } from "../../../styledComponents/Containers";
import { StyledGradientText } from "../../footer/Footer";
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
	padding-top: 84px;
	padding-bottom: 150px;
`

const StyledTitle = styled.h2`
  color: #42446E;
  font-size: 3rem;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0px;
  text-align: center;
  margin-bottom: 10px;
`

const StyledContact = styled.a`
	background: linear-gradient(90.00deg, rgb(19, 176, 245),rgb(231, 15, 170));
	-webkit-background-clip:text;
	-webkit-text-fill-color:transparent;
	background-clip:text;
	text-fill-color:transparent;
	font-size: 58px;
	font-weight: 700;
	line-height: 70px;
	letter-spacing: -1px;
	transition: all .5s;
	text-align: center;
	
	&:hover {
		opacity: 0.8;
	}
`
