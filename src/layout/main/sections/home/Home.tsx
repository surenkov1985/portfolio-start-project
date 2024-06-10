import React from "react";
import { Container } from "../../../../styledComponents/Containers";
import portfolio from "../../../../assets/images/portfolio.jpg";
import {AboutPropsType} from "../about/About";
import {St} from "./homeStyles";
import {S} from "../../../footer/footerStyles";
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';

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
						<h1>
							<span style={{'display': "none"}}>I build things for web</span>
							<Typewriter area-label={"hidden"}
								options={{
								strings: ['I build things for web'],
								autoStart: true,
								loop: true,
							}}
							/>
						</h1>
					</St.Title>
					<Tilt
						className="parallax-effect-img"
						tiltMaxAngleX={20}
						tiltMaxAngleY={20}
						perspective={800}
						transitionSpeed={1000}
						scale={1.1}
						gyroscope={true}>
						<St.HomeImage>
							<img src={portfolio} alt={"Pavan MG"} />
						</St.HomeImage>
					</Tilt>

				</St.HomeFlexContainer>
			</Container>
		</St.Section>
	);
}



