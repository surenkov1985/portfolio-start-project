import styled from "styled-components";

export const FlexContainer = styled.div<StyledFlexContainerProps>`
	display: flex;
	flex-direction: ${(props) => props.direction || "row"};
	align-items: ${(props) => props.align || "flex-start"};
	justify-content: ${(props) => props.justify || "flex-start"};
	flex-wrap: ${(props) => props.wrap || "nowrap"};
`;

type StyledFlexContainerProps = {
	direction?: string;
	align?: string;
	justify?: string;
	wrap?: string;
};
