import React from "react";
import { Container } from "../../../styledComponents/Containers";
import {SectionTitle} from "../../../components/SectionTitle";
import {AboutPropsType} from "./About";
import styled from "styled-components";
import {FlexContainer} from "../../../styledComponents/FlexContainer";
import {Icon} from "../../../components/Icon";
import {stackList} from "../../../scripts/variables";

export function Stack() {
	return (
		<StyledSection id="stack" >
			<Container>
				<SectionTitle title={"My Tech Stack"} subtitle={" Technologies I’ve been working with recently"}/>
				<StyledStacksContainer wrap={"wrap"} align={"center"} justify={"space-between"}>
					{stackList.map(item=><Icon key={item.name} {...item}/>)}

				</StyledStacksContainer>
			</Container>
		</StyledSection>
	);
}
export const StyledSection = styled.section`
	padding-top: 76px;
	padding-bottom: 116px;
`
const StyledStacksContainer = styled(FlexContainer)`
	gap: 80px 100px;
`
