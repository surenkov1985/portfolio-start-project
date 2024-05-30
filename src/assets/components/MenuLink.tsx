import React from "react";
import styled from "styled-components";
import { Route } from "../scripts/variables";
import { Link } from "./Link";

export function MenuLink(props: MenuLinkPropsType) {
	return <Link path={props.data.path} name={props.data.name} isSmall={props.isSmall} color={props.color} />;
}

type MenuLinkPropsType = {
	data: Route;
	isSmall?: boolean;
	color?: string;
};

const StyledMenuLink = styled.a`
	color: ${(props) => (props.color ? props.color : "rgb(102, 102, 102)")};
	font-size: 1.25rem;
	font-family: 'DM Sans', sans-serif;
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
		background: ${(props) => (props.color ? props.color : "rgb(102, 102, 102)")};
		transition: width 0.5s;
	}

	&:hover {
		&::before {
			width: 100%;
		}
	}
`;
