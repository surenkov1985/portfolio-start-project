import React from "react";
import styled from "styled-components";
import { ContactsMenu } from "../../components/ContactsMenu";
import { Logo } from "../../components/Logo";
import { FooterMenu } from "../../components/FooterMenu";
import { Socials } from "../../components/Socials";
import { contacts, routes } from "../../assets/scripts/variables";
import { Container } from "../../styledComponents/Containers";
import {FlexContainer} from "../../styledComponents/FlexContainer";

export function Footer() {
	return (
		<StyldFooter>
			<Container>
				<FlexContainer align={"center"} wrap={"wrap"} gap={"1rem"}>
					<Logo iconType="" iconColor="#42446E" />
					<ContactsMenu routes={contacts} color="#42446E" />
					<Socials color="#42446E" />
				</FlexContainer>
				<StyledCopyrightContainer>
					<FooterMenu routes={routes} color="#42446E" />

					<StyledCopyrightText>
						Designed and built by <StyledGradientText>Pavan MG </StyledGradientText> with{" "}
						<StyledGradientText>Love & Coffee</StyledGradientText>
					</StyledCopyrightText>
				</StyledCopyrightContainer>
			</Container>

		</StyldFooter>
	);
}

const StyldFooter = styled.footer`
	padding: 62px 0;
	
	@media (max-width: 991px) {
		padding: 48px 0px;
	}
	@media ${props => props.theme.media.tablet} {
		padding: 42px 0px;
	}

	@media ${props => props.theme.media.mobile} {
		padding: 30px 0px;
	}
`;

export const StyledGradientText = styled.span`
	background: linear-gradient(90deg, rgb(19, 176, 245), rgb(231, 15, 170));
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
	text-fill-color: transparent;
	//font-size: 1.125rem;
`;

const StyledCopyrightText = styled.p`
	font-size: 1.125rem;
	font-weight: 400;
	line-height: 26px;
	letter-spacing: 0px;
		
	@media ${props => props.theme.media.mobile} {
		font-size: 1rem;
	}
	
	
`;

const StyledCopyrightContainer = styled(FlexContainer)`
	//align-items: center;
	border-top: 2px solid rgba(102, 102, 102, 0.3);
	padding-top: 45px;
	margin-top: 45px;
	flex-wrap: wrap;
	gap: 1.5rem;
	justify-content: space-between;

	@media (max-width: 991px) {
		padding: 40px 0px;
		margin-top: 40px;
	}
	@media (max-width: 768px) {
		padding: 35px 0px;
		margin-top: 35px;
	}

	@media (max-width: 576px) {
		padding: 30px 0px;
		margin-top: 30px;
	}
`;
