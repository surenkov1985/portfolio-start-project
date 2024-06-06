import React from "react";
import { Container } from "../../../../styledComponents/Containers";
import { StyledSection} from "../about/aboutStyles";
import {SectionTitle} from "../../../../components/SectionTitle";
import {projects} from "../../../../assets/scripts/variables";
import {Cards} from "./Cards";

export function Projects() {
	return (
		<StyledSection id="projects" >
			<Container>
				<SectionTitle mBottom={"110px"} title={"Projects"} subtitle={"Things I’ve built so far"}></SectionTitle>
				<Cards data={projects}/>
			</Container>
		</StyledSection>
	);
}
