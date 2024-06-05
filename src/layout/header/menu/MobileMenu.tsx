import React from "react";
import styled from "styled-components";
import { Route } from "../../../assets/scripts/variables";
// import { StyledMenu } from "../styledComponents/StyledMenu";
import { MenuItem } from "../../../components/MenuItem";
import {MenuList} from "./MenuList";

export function MobileMenu(props: MenuPropsType) {
    return (
        <StyledMenu>
            <MenuList routes={props.routes}/>

        </StyledMenu>
    );
}

const StyledMenu = styled.nav`
	padding-top: 30px;
    flex-grow: 1;

	& ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
      flex-direction: column;
		align-items: flex-end;
		flex-wrap: wrap;
		gap: 2rem;
      
      & a {
        font-size: 1.75rem;
      }
		
	}

	@media (max-width:1100px) {
		//order: 2;
		//margin-left: 40px;
	}
`;
type MenuPropsType = {
    routes: Route[];
    color?: string;
    toggleMobile?: ()=> void
};
