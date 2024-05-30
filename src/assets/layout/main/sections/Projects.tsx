import React from "react";
import { Container } from "../../../styledComponents/Containers";
import {AboutPropsType, StyledSection} from "./About";
import {SectionTitle} from "../../../components/SectionTitle";
import {projects} from "../../../scripts/variables";
import {Cards} from "../../../components/Cards";

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
