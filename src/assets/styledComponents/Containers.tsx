import styled from "styled-components";

export const Container = styled.div`
	margin: 0 auto;
	width: 100%;
	max-width: 1264px;
	padding: 0 3.75rem 0 9px;
	display: ${(props: ContainerStyledProps) => {
		return props.display;
	}};
	align-items: ${(props: ContainerStyledProps) => {
		return props.alignItems || "center";
	}};
`;

type ContainerStyledProps = {
	display?: string;
	alignItems?: string;
};
