import styled from "styled-components";

export const Container = styled.div`
	margin: 0 auto;
	width: 100%;
	max-width: 1200px;
	display: ${(props: ContainerStyledProps) => {
		return props.display;
	}};
	align-items: ${(props: ContainerStyledProps) => {
		return props.alignItems || "center";
	}};
`;

export const FlexContainer = styled.div`
    display: flex;
    ali
`

type ContainerStyledProps = {
	display?: string;
	alignItems?: string;
};
