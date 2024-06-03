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
	
	@media (max-width: 1240px) {
		padding: 0 3rem 0 2rem;
	}

	@media (max-width: 991px) {
		padding: 0 2.5rem 0 1rem;
	}
	@media (max-width: 758px) {
		padding: 0 2rem 0 1rem;
	}
	@media (max-width: 576px) {
		padding: 0 1rem 0 1rem;
	}
`;

type ContainerStyledProps = {
	display?: string;
	alignItems?: string;
};
