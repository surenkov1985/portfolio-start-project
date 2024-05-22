import React from "react";
import styled from "styled-components";
import { Container } from "../styledComponents/Containers";

export function Main() {
	return (
		<StyledMain>
			<Container>Main</Container>
		</StyledMain>
	);
}

const StyledMain = styled.main`
	flex-grow: 1;
`;
