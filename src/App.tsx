import "./App.css";
import styled from "styled-components";
import { Header } from "./layout/header/Header";
import { Footer } from "./layout/footer/Footer";
import { Main } from "./layout/main/Main";
import {myTheme} from "./assets/styles/Theme.styled";

export function App() {
	return (
		<Wrapper>
			<Header />
			<Main />
			<Footer />
		</Wrapper>
	);
}

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	
	background: ${props=> props.theme.colors.bg};
	transition: background 1s;
`;
