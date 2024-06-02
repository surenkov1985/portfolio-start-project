import React from "react";
import { Container } from "../../../styledComponents/Containers";
import {SectionTitle} from "../../../components/SectionTitle";
import {AboutPropsType} from "./About";
import styled from "styled-components";
import {FlexContainer} from "../../../styledComponents/FlexContainer";
import {Icon} from "../../../components/Icon";
import {stackList} from "../../../assets/scripts/variables";

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

	@media screen and (max-width: 991px) {
		padding-top: 65px;
		padding-bottom: 100px;
	}

	@media ${props => props.theme.media.tablet} {
		padding-top: 60px;
		padding-bottom: 90px;
	}

	@media ${props => props.theme.media.mobile} {
		padding-top: 40px;
		padding-bottom: 60px;
	}
	@media (max-width: 320px) {
		padding: 30px 0 40px 0;
	}
`
const StyledStacksContainer = styled(FlexContainer)`
	gap: 80px 100px;

	@media ${props => props.theme.media.tablet} {
		gap: 50px 70px;
		
		& svg {
			width: 90px;
			height: 90px;
		}
	}

	@media ${props => props.theme.media.mobile} {
		gap: 30px 40px;

		& svg {
			width: 70px;
			height: 70px;
		}
	}

	@media (max-width: 320px) {
		gap: 20px;

		& svg {
			width: 60px;
			height: 60px;
		}
	}
`

