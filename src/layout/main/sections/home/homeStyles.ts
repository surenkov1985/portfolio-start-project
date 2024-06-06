import styled from "styled-components";
import {FlexContainer} from "../../../../styledComponents/FlexContainer";

const Section = styled.section`
	padding: 200px 0 100px 0;

	@media (max-width: 1240px) {
		padding: 160px 0 80px 0;
	}
	@media (max-width: 991px) {
		padding: 130px 0 70px 0;
	}
	@media (max-width: 768px) {
		padding: 100px 0 70px 0;
	}
	@media (max-width: 576px) {
		padding: 60px 0 60px 0;
	}
	@media (max-width: 320px) {
		padding: 40px 0 30px 0;
	}
`;

const HomeFlexContainer = styled(FlexContainer)`

	@media (max-width: 576px) {
		flex-direction: column-reverse;
		gap: 2rem;
		align-items: center;
	}
`


const HomeImage = styled.div`
	width: 350px;
	height: 350px;
	border-radius: 50%;
	isolation: isolate;
	position: relative;
	flex-shrink: 0;
	margin-right: 10px;
  
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }

	&::before {
		content: "";
		display: block;
		position: absolute;
		width: calc(100% + 15px);
		height: calc(100% + 15px);
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: 50%;
		background: linear-gradient(180deg, #e70faa 0%, #00c0fd 100%);
		z-index: -1;
	}
	
	@media (max-width: 1240px) {
		width: 300px;
		height: 300px;
	}
	@media (max-width: 991px) {
		width: 250px;
		height: 250px;
		
		&::before {
			width: calc(100% + 10px);
			height: calc(100% + 10px);
		}
		
	}
	@media (max-width: 768px) {
		width: 200px;
		height: 200px;
	}
`;

const Title = styled.div`
	& * {
		font-size: 58px;
		font-weight: 700;
		line-height: 1.25;
		letter-spacing: -1px;
		text-align: left;
		color: ${props => props.theme.colors.title};

		@media (max-width: 1240px) {
			font-size: 46px;
		}

		@media (max-width: 991px) {
			font-size: 42px;
		}

		@media (max-width: 768px) {
			font-size: 36px;
		}
		@media (max-width: 576px) {
			font-size: 32px;
			text-align: center;
		}
	}
	@media (max-width: 576px) {
		font-size: 32px;
		text-align: center;
	}
`;

export const St = {
    Section,
    HomeFlexContainer,
    HomeImage,
    Title
}