import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "./Icon";

export function Link(props: any) {
	return (
		<StyledLink href={props.path} iconId={props.iconId} name={props.name}>
			{props.name && props.name}
			{props.iconId && <Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox} />}
		</StyledLink>
	);
}

type LinkPropsType = {
	path: string;
	name?: string;
	iconId?: string;
	width?: string;
	height?: string;
	viewBox?: string;
};
type StyledLinkPropsType = {
	href: string;
	name?: string;
	iconId?: string;
	width?: string;
	height?: string;
	viewBox?: string;
};

const StyledLink = styled.a<StyledLinkPropsType>`
	transition: all 0.5s;

	${(props) =>
		props.name &&
		css`
			color: rgb(102, 102, 102);
			font-size: 1.25rem;
			font-weight: 500;
			text-decoration: none;
			display: block;
			padding: 3px 0;
			position: relative;

			&::before {
				content: "";
				display: block;
				position: absolute;
				bottom: 0;
				width: 0;
				height: 2px;
				background: rgb(102, 102, 102);
				transition: width 0.5s;
			}
			&:hover {
				&::before {
					width: 100%;
				}
			}
		`}

	&:hover {
		${(props) =>
			props.iconId &&
			css`
				transform: translateY(-3px);
			`}
	}
`;
