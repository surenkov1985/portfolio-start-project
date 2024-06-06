import React from "react";
import { Container } from "../../../../styledComponents/Containers";
import {SectionTitle} from "../../../../components/SectionTitle";
import {Icon} from "../../../../components/Icon";
import {stackList} from "../../../../assets/scripts/variables";
import {StacksContainer, StyledSection} from "./stackStyles";

export function Stack() {
	return (
		<StyledSection id="stack" >
			<Container>
				<SectionTitle title={"My Tech Stack"} subtitle={" Technologies I’ve been working with recently"}/>
				<StacksContainer wrap={"wrap"} align={"center"} justify={"space-between"}>
					{stackList.map(item=><Icon key={item.name} {...item}/>)}
				</StacksContainer>
			</Container>
		</StyledSection>
	);
}


