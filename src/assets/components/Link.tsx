import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "./Icon";

export function Link(props: LinkPropsType) {
	return (
		<StyledLink href={props.path} iconId={props.iconId} name={props.name} isSmall={props.isSmall} color={props.color}>
			{props.name && props.name}
			{props.iconId && (
				<Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox} color={props.color || "#666666"} />
			)}
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
	isSmall?: boolean;
	color?: string;
};
type StyledLinkPropsType = {
	href: string;
	name?: string;
	iconId?: string;
	width?: string;
	height?: string;
	viewBox?: string;
	isSmall?: boolean;
	color?: string;
};

const StyledLink = styled.a<StyledLinkPropsType>`
	transition: all 0.5s;
	font-size: ${(props) => (props.isSmall ? 1.125 : 1.25)}rem;

	${(props) =>
		props.name &&
		css`
			color: ${(props: StyledLinkPropsType) => (props.color ? props.color : "rgb(102, 102, 102)")};
			font-family: 'DM Sans', sans-serif;
			font-weight: 500;
			text-decoration: none;
			display: block;
			padding: 2px 0;
			position: relative;
			line-height: 1.3;

			&[href^="tel:"],
			&[href^="mailto:"] {
				&::before {
					display: none;
				}

				&:hover {
					opacity: 0.8;
				}
			}

			&::before {
				content: "";
				display: block;
				position: absolute;
				bottom: 0;
				width: 0;
				height: 2px;
				background: ${(props: StyledLinkPropsType) => (props.color ? props.color : "rgb(102, 102, 102)")};
				transition: width 0.5s;
			}
			&:hover {
				&::before {
					width: 100%;
				}
			}
		`}

	&:hover {
		fill: ${(props: StyledLinkPropsType) => (props.color ? props.color : "rgb(102, 102, 102)")};
		${(props) =>
			props.iconId &&
			css`
				transform: translateY(-3px);
			`}
	}
`;
