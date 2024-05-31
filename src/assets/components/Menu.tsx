import React from "react";
import styled from "styled-components";
import { Route } from "../scripts/variables";
// import { StyledMenu } from "../styledComponents/StyledMenu";
import { MenuLink } from "./MenuLink";

export function Menu(props: MenuPropsType) {
	return (
		<StyledMenu>
			<ul role={"menu"}>
				{props.routes.map((item: Route) => {
					return (
						<li key={`link_${item.id}`} role={"menuitem"}>
							<MenuLink data={item} />

						</li>
					);
				})}
			</ul>
			<StyledBurgerButton aria-label={"burger button"} aria-haspopup={true}>
				<span></span><span></span><span></span>
			</StyledBurgerButton>

		</StyledMenu>
	);
}

const StyledBurgerButton = styled.button`
	display: none;
	width: 30px;
	height: 25px;
	position: relative;
	
	
	& span {
		display: inline-block;
		width: 100%;
		height: 2px;
		right: 0;
		background: ${
			props => props.theme.colors.primary
		};
		position: absolute;
		
		&:nth-child(2) {
			top: calc(50% - 1px);
			width: 60%;
		}
		
		&:last-child {
			bottom: 0;
			width: 100%;
		}
	}
	
	&:hover {
		& span {
          &:first-child {
            animation-name: slideTo;
            animation-duration: 0.9s;
            animation-timing-function: linear;
            animation-fill-mode: both;
            animation-iteration-count: infinite;
          }

          &:nth-child(2) {
            animation-name: slideFrom;
            animation-duration: 0.9s;
            animation-timing-function: linear;
            animation-fill-mode: both;
            animation-iteration-count: infinite;
            animation-delay: 0.2s;
          }

          &:last-child {
			  animation-name: slideTo;
			  animation-duration: 0.9s;
			  animation-timing-function: linear;
			  animation-fill-mode: both;
			  animation-iteration-count: infinite;
			  animation-delay: 0.4s;
          }

        }
	}
	@media (max-width:1100px) {
		display: flex;
	}
	@keyframes slideTo {
		from {
			width: 100%;
		}

		50% {
			width: 60%;
		}

		to {
			width: 100%;
		}
	}

	@keyframes slideFrom {
		from {
			width: 60%;
		}

		50% {
			width: 100%;
		}

		to {
			width: 60%;
		}
	}
`
const StyledMenu = styled.nav`
	padding-top: 6px;

	& ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 3.75rem;
		
		@media (max-width:1100px) {
			display: none;
		}
	}

	@media (max-width:1100px) {
		order: 2;
		margin-left: 40px;
	}
`;
type MenuPropsType = {
	routes: Route[];
	color?: string;
};
