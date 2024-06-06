import React from "react";
import {Container} from "../../../../styledComponents/Containers";
import {FlexContainer} from "../../../../styledComponents/FlexContainer";
import {aboutList} from "../../../../assets/scripts/variables";
import {S} from "./aboutStyles";
import image from "../../../../assets/images/drawing.png"
import {AboutList} from "./AboutList";

export type AboutPropsType = {
	refVal: any
}
export function About() {
	return (
		<S.AboutSection id="about" image={image}>
			<Container>
				<FlexContainer justify={"space-between"}>
					<S.AboutContainer>
						<S.AboutContent>
							{aboutList.map(item => <AboutList key={item.title} title={item.title} description={item.description} workList={item.workList} />)}
						</S.AboutContent>
					</S.AboutContainer>
				</FlexContainer>
			</Container>
		</S.AboutSection>
	);
}


