import React from "react";
import styled from "styled-components";
import { Route } from "../scripts/variables";
import { Link } from "./Link";

export function MenuLink(props: MenuLinkPropsType) {
	return <Link path={props.data.path} name={props.data.name} />;
}

type MenuLinkPropsType = {
	data: Route;
};

const StyledMenuLink = styled.a`
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
`;
