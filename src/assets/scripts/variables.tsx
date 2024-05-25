export type Route = {
	id: number;
	name: string;
	path: string;
};
export const routes: Route[] = [
	{
		id: 1,
		name: "Home",
		path: "#",
	},
	{
		id: 2,
		name: "About",
		path: "#about",
	},
	{
		id: 3,
		name: "Tech Stack",
		path: "#stack",
	},
	{
		id: 4,
		name: "Projects",
		path: "#projects",
	},
	{
		id: 5,
		name: "Contact",
		path: "#contacts",
	},
];

export const socialList = [
	{
		path: "/",
		iconId: "git",
		width: "30.000000",
		height: "30.000000",
		viewBox: "0 0 30 30",
	},
	{
		path: "/",
		iconId: "twitter",
		width: "30.000000",
		height: "30.000000",
		viewBox: "0 0 30 30",
	},
	{
		path: "/",
		iconId: "linkedin",
		width: "30.000000",
		height: "30.000000",
		viewBox: "0 0 30 30",
	},
];

export const contacts = [
	{
		id: 1,
		name: "+91 12345 09876",
		path: "tel:+911234509876",
	},
	{
		id: 2,
		name: "info@example.com",
		path: "mailto:info@example.com",
	},
];

export const works = [
	{
		id: 1,
		name: "Junior Web Developer",
		company: "Dr. Rajkumar’s Learning App",
		place: "Bengaluru",
		dates: "Sep 2021 - Dec 2021",
		type: "Full Time"
	},
	{
		id: 2,
		name: "Web Development Intern",
		company: "IonPixelz Web Solutions",
		place: "Bengaluru",
		dates: "Sep 2021 - Dec 2021",
		type: "Internship"
	},
	{
		id: 3,
		name: "SEO / SEM Specialist",
		company: "HAAPS",
		place: "Bengaluru",
		dates: "Sep 2021 - Dec 2021",
		type: "Internship"
	}
]

export const education = [
	{
		id: 1,
		name: "Bachelor in Electronics & Communication",
		company: "Bangalore Instutute of Technology",
		place: "",
		dates: "Aug 2015 - Dec 2020",
		type: "Full Time"
	}
]