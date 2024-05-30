import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import { About } from "./sections/About";
import { Contacts } from "./sections/Contacts";
import { Home } from "./sections/Home";
import { Projects } from "./sections/Projects";
import { Stack } from "./sections/Stack";
import {FixedHeader} from "../header/FixedHeader";
import {useInView, InView} from "react-intersection-observer";

export function Main() {
	const [active, setActive] = useState(false)
	const wrapperRef = useRef(null);
	const {ref, inView, entry} =useInView({
		rootMargin: "500px 0px 300px",
		// triggerOnce: true,


		threshold:1
	})

	useEffect(()=>{
		console.log(inView, entry)
			setActive(!inView)
	}, [inView])
	// @ts-ignore
	return (
		<StyledMain >
			<Home  refVal={ref}/>
			<About/>
			<Stack />
			<Projects />
			<Contacts/>
			<FixedHeader isActive={active} />
		</StyledMain>
	);
}

const StyledMain = styled.div`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
`;
