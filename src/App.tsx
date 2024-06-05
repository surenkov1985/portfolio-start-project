import "./App.css";
import styled, {ThemeContext, ThemeProvider} from "styled-components";
import { Header } from "./layout/header/Header";
import { Footer } from "./layout/footer/Footer";
import { Main } from "./layout/main/Main";
import {dark, light} from "./assets/styles/Theme.styled";
import {GlobalStyles} from "./assets/styles/GlobalStyles";
import React, {useContext, useEffect, useState} from "react";


export function App() {
	const defaultTheme = localStorage.theme ? localStorage.theme : "light"
	const [theme, setTheme] = useState(defaultTheme)

	function toggleTheme () {
		setTheme(theme === 'light' ? 'dark' : 'light');
	}

	useEffect(() => {
		localStorage.theme = theme;
	}, [theme])

	return (
		<ThemeProvider theme={theme === 'light' ? light : dark}>
			<Wrapper>
				<Header toggleTheme={toggleTheme}/>
				<Main toggleTheme={toggleTheme}/>
				<Footer />
			</Wrapper>
			<GlobalStyles />
		</ThemeProvider>
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
