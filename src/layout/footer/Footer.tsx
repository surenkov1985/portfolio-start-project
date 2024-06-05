import React, {useContext} from "react";
import styled, {ThemeContext} from "styled-components";
import { ContactsMenu } from "./footerMenu/ContactsMenu";
import { Logo } from "../../components/Logo";
import { FooterMenu } from "./footerMenu/FooterMenu";
import { Socials } from "../../components/Socials";
import { contacts, routes } from "../../assets/scripts/variables";
import { Container } from "../../styledComponents/Containers";
import {FlexContainer} from "../../styledComponents/FlexContainer";
import {S} from "./footerStyles";

export function Footer() {
	const theme = useContext(ThemeContext)

	return (
		<S.Footer>
			<Container>
				<FlexContainer align={"center"} wrap={"wrap"} gap={"1rem"}>
					<Logo iconType="" iconColor="#42446E" />
					<ContactsMenu routes={contacts} color="#42446E" />
					<Socials color={theme.colors.title} />
				</FlexContainer>
				<S.CopyrightContainer>
					<FooterMenu routes={routes} color="#42446E" />

					<S.CopyrightText>
						Designed and built by <S.GradientText>Pavan MG </S.GradientText> with{" "}
						<S.GradientText>Love & Coffee</S.GradientText>
					</S.CopyrightText>
				</S.CopyrightContainer>
			</Container>

		</S.Footer>
	);
}
