import React from "react";
import styled from "styled-components";
import { socialList } from "../scripts/variables";
import { Link } from "./Link";

export function Socials(props: SocialsPropsType) {
	return (
		<StyledSocials>
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
		</StyledSocials>
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
`;
