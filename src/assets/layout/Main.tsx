import React from "react";
import styled from "styled-components";
import { Container } from "../styledComponents/Containers";
import { About } from "./sections/About";
import { Contacts } from "./sections/Contacts";
import { Home } from "./sections/Home";
import { Projects } from "./sections/Projects";
import { Stack } from "./sections/Stack";

export function Main() {
	return (
		<StyledMain>
			<Home />
			<About />
			<Stack />
			<Projects />
			<Contacts />
		</StyledMain>
	);
}

const StyledMain = styled.main`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
`;
