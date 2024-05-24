import React from "react";
import styled from "styled-components";
import { ContactsMenu } from "../components/ContactsMenu";
import { Logo } from "../components/Logo";
import { Menu } from "../components/Menu";
import { Socials } from "../components/Socials";
import { contacts, routes } from "../scripts/variables";
import { Container } from "../styledComponents/Containers";

export function Footer() {
	return (
		<StyldFooter>
			<Container display="flex">
				<Logo iconType="" iconColor="#42446E" />
				<ContactsMenu routes={contacts} color="#42446E" />
				<Socials color="#42446E" />
			</Container>
			<StyledCopyrightContainer>
				<ContactsMenu routes={routes} color="#42446E" />

				<StyledCopyrightText>
					Designed and built by <StyledGradientText>Pavan MG </StyledGradientText> with{" "}
					<StyledGradientText>Love & Coffee</StyledGradientText>
				</StyledCopyrightText>
			</StyledCopyrightContainer>
		</StyldFooter>
	);
}

const StyldFooter = styled.footer`
	padding: 60px 0;
`;

export const StyledGradientText = styled.span`
	background: linear-gradient(90deg, rgb(19, 176, 245), rgb(231, 15, 170));
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
	text-fill-color: transparent;
	font-size: 1.125rem;
`;

const StyledCopyrightText = styled.p`
	font-size: 18px;
	font-weight: 400;
	line-height: 26px;
	letter-spacing: 0px;
	margin-left: auto;
`;

const StyledCopyrightContainer = styled(Container)`
	display: flex;
	align-items: center;
	border-top: 2px solid rgba(102, 102, 102, 0.3);
	padding-top: 45px;
	margin-top: 45px;
`;
