import React from "react";
import { Container } from "../../../../styledComponents/Containers";
import {FlexContainer} from "../../../../styledComponents/FlexContainer";
import {S} from "./contactsStyles";

export function Contacts() {
	return (
		<S.ContactSection id="contacts" >
			<Container>
				<FlexContainer direction={"column"} align={"center"}>
					<S.ContactTitle>{"For any questions please mail me:"}</S.ContactTitle>
					<S.Contact href={"mailto:hi@pavanmg.in"}>hi@pavanmg.in</S.Contact>
				</FlexContainer>
			</Container>
		</S.ContactSection>
	);
}


