import React from "react";
import { Container } from "../../../../styledComponents/Containers";
import portfolio from "../../../../assets/images/portfolio.jpg";
import {AboutPropsType} from "../about/About";
import {St} from "./homeStyles";
import {S} from "../../../footer/footerStyles";

export function Home(props:AboutPropsType) {
	return (
		<St.Section id="home" ref={props.refVal}>
			<Container>
				<St.HomeFlexContainer align="center" justify="space-between">
					<St.Title>
						<span>
							Hi 👋,
							<br /> My name is <br /> <S.GradientText>Pavan MG</S.GradientText>
						</span>
						<h1>I build things for web</h1>
					</St.Title>
					<St.HomeImage>
						<img src={portfolio} alt={"Pavan MG"} />
					</St.HomeImage>
				</St.HomeFlexContainer>
			</Container>
		</St.Section>
	);
}



