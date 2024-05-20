import "./App.css";
import styled from "styled-components";

function App() {
	return (
		<Wrapper>
			<Header>
				<Container display="flex">
					<a href="/">
						<img src="./logo.svg" alt="" />
					</a>
					<Menu>
						<MenuItem>
							<MenuLink href="#home">Home</MenuLink>
						</MenuItem>
						<MenuItem>
							<MenuLink href="#about">About</MenuLink>
						</MenuItem>
						<MenuItem>
							<MenuLink href="#techStack">Tech Stack</MenuLink>
						</MenuItem>
						<MenuItem>
							<MenuLink href="#projects">Projects</MenuLink>
						</MenuItem>
						<MenuItem>
							<MenuLink href="#contact">Contact</MenuLink>
						</MenuItem>
					</Menu>
					<Socials>
						<a href="/">
							<svg width="30.000000" height="30.000000" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M15 0C6.71 0 0 6.71 0 15C0 21.63 4.29 27.24 10.25 29.23C11 29.36 11.28 28.91 11.28 28.51C11.28 28.16 11.26 26.98 11.26 25.72C7.5 26.41 6.52 24.8 6.22 23.96C6.05 23.53 5.32 22.2 4.68 21.84C4.16 21.56 3.41 20.86 4.66 20.85C5.85 20.83 6.69 21.93 6.97 22.38C8.32 24.65 10.48 24.01 11.34 23.62C11.47 22.64 11.86 21.99 12.3 21.61C8.96 21.24 5.47 19.95 5.47 14.21C5.47 12.58 6.05 11.23 7.01 10.18C6.86 9.8 6.33 8.26 7.16 6.2C7.16 6.2 8.41 5.81 11.28 7.74C12.48 7.4 13.76 7.23 15.03 7.23C16.31 7.23 17.58 7.4 18.78 7.74C21.65 5.79 22.91 6.2 22.91 6.2C23.73 8.26 23.21 9.8 23.06 10.18C24.01 11.23 24.6 12.56 24.6 14.21C24.6 19.96 21.09 21.24 17.75 21.61C18.29 22.08 18.76 22.98 18.76 24.39C18.76 26.39 18.75 28.01 18.75 28.51C18.75 28.91 19.03 29.38 19.78 29.23C22.75 28.22 25.34 26.31 27.17 23.75C29.01 21.2 29.99 18.14 30 15C30 6.71 23.28 0 15 0Z"
									fill="#666666"
									fillOpacity="1.000000"
									fillRule="evenodd"
								/>
							</svg>
						</a>
						<a href="/">
							<svg width="30.000000" height="30.000000" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M14.87 -0.13C6.59 -0.13 -0.13 6.59 -0.13 14.87C-0.13 23.15 6.59 29.87 14.87 29.87C23.15 29.87 29.87 23.15 29.87 14.87C29.87 6.59 23.15 -0.13 14.87 -0.13ZM22.08 11.18C22.09 11.33 22.09 11.5 22.09 11.66C22.09 16.57 18.35 22.24 11.51 22.24C9.4 22.24 7.44 21.62 5.79 20.57C6.09 20.6 6.38 20.62 6.69 20.62C8.43 20.62 10.03 20.03 11.31 19.03C9.67 19 8.3 17.92 7.83 16.45C8.4 16.53 8.92 16.53 9.51 16.38C8.67 16.21 7.91 15.76 7.37 15.09C6.83 14.42 6.53 13.59 6.53 12.73L6.53 12.69C7.03 12.97 7.6 13.14 8.21 13.16C7.7 12.82 7.28 12.36 6.99 11.82C6.7 11.28 6.55 10.68 6.55 10.07C6.55 9.37 6.73 8.74 7.06 8.19C7.99 9.34 9.16 10.28 10.48 10.95C11.8 11.62 13.25 12 14.73 12.08C14.2 9.55 16.09 7.5 18.36 7.5C19.43 7.5 20.39 7.95 21.07 8.68C21.91 8.52 22.72 8.2 23.43 7.78C23.16 8.64 22.57 9.37 21.8 9.83C22.55 9.75 23.27 9.54 23.94 9.25C23.44 9.99 22.81 10.65 22.08 11.18Z"
									fill="#666666"
									fillOpacity="1.000000"
									fillRule="nonzero"
								/>
							</svg>
						</a>
						<a href="/">
							<svg width="29.000000" height="29.000000" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M14 -0.4C6.04 -0.4 -0.4 6.04 -0.4 14C-0.4 21.95 6.04 28.4 14 28.4C21.95 28.4 28.4 21.95 28.4 14C28.4 6.04 21.95 -0.4 14 -0.4ZM10.47 19.96L7.55 19.96L7.55 10.58L10.47 10.58L10.47 19.96ZM8.99 9.43C8.07 9.43 7.48 8.78 7.48 7.97C7.48 7.14 8.09 6.51 9.03 6.51C9.97 6.51 10.55 7.14 10.57 7.97C10.57 8.78 9.97 9.43 8.99 9.43ZM21.12 19.96L18.2 19.96L18.2 14.76C18.2 13.55 17.78 12.73 16.73 12.73C15.92 12.73 15.44 13.29 15.23 13.82C15.15 14.01 15.13 14.28 15.13 14.55L15.13 19.96L12.22 19.96L12.22 13.57C12.22 12.4 12.18 11.42 12.14 10.58L14.67 10.58L14.81 11.88L14.87 11.88C15.25 11.27 16.19 10.37 17.76 10.37C19.68 10.37 21.12 11.65 21.12 14.42L21.12 19.96Z"
									fill="#666666"
									fillOpacity="1.000000"
									fillRule="nonzero"
								/>
							</svg>
						</a>
					</Socials>
				</Container>
			</Header>
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
	display: flex;
	flex-direction: column;
	padding: 0 2rem;
`;

const Header = styled.header`
	/* display: flex; */
	padding: 40px 0;
`;

const Container = styled.div`
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

const Menu = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	margin-left: auto;
	gap: 3.5rem;
`;

const MenuItem = styled.li``;

const MenuLink = styled.a`
	color: rgb(102, 102, 102);
	font-size: 1.25rem;
	font-weight: 500;
	text-decoration: none;
`;

const Socials = styled.div`
	display: flex;
	align-items: center;
	gap: 1.25rem;
	margin-left: 50px;
`;

type ContainerStyledProps = {
	display?: string;
	alignItems?: string;
};
