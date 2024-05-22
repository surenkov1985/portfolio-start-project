import "./App.css";
import styled from "styled-components";
import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { Main } from "./layout/Main";

function App() {
	return (
		<Wrapper>
			<Header />
			<Main />
			<Footer />
		</Wrapper>
	);
}

export default App;

const Title = styled.h1`
	font-size: 1.5em;
	text-align: center;
	color: #e91e63;
`;

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	padding: 0 2rem;
`;
