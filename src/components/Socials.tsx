import React from "react";
import styled from "styled-components";
import { socialList } from "../assets/scripts/variables";
import { Link } from "./Link";
import {S} from "../styledComponents/socialsStyles";

export function Socials(props: SocialsPropsType) {


	return (
		<S.Socials>
			{socialList.map((item) => {
				return (
					<Link
						key={`icon_${item.iconId}`}
						path={item.path}
						iconId={item.iconId}
						width={item.width}
						height={item.height}
						viewBox={item.viewBox}
						color={props.color}
					/>
				);
			})}
		</S.Socials>
	);
}

type SocialsPropsType = {
	color?: string;
};

 const StyledSocials = styled.div`
	display: flex;
	align-items: center;
	gap: 1.25rem;
	margin-left: 50px;
	padding-top: 6px;
	
	@media ${props => props.theme.media.tablet} {
		margin-left: auto;
		
	}

	@media ${props => props.theme.media.mobile} {
		display: none;

	}
	
	//@me
`;
