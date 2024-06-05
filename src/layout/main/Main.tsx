import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { About } from "./sections/About";
import { Contacts } from "./sections/Contacts";
import { Home } from "./sections/Home";
import { Projects } from "./sections/Projects";
import { Stack } from "./sections/Stack";
import {useInView} from "react-intersection-observer";
import {Header} from "../header/Header";

type MainPropsType = {
	toggleTheme?: () => void
}
export function Main(props:MainPropsType) {
	const [active, setActive] = useState(false)
	const {ref, inView, entry} =useInView({
		rootMargin: "500px 0px 500px",
		threshold:0.9


	})

	useEffect(()=>{
		console.log(inView, entry)
			setActive(!inView)
	}, [inView])

	return (
		<StyledMain >
			<Home  refVal={ref}/>
			<About/>
			<Stack />
			<Projects />
			<Contacts/>
			<Header isActive={active} fixed={true} toggleTheme={props.toggleTheme}/>
		</StyledMain>
	);
}

const StyledMain = styled.div`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
`;
