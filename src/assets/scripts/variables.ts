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

export const aboutList = [
	{
		title: "About Me",
		description: "The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS."
	},
	{
		title: "Work Experience",
		workList: [
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
	},
	{
		title: "Education",
		workList: [
			{
				id: 1,
				name: "Bachelor in Electronics & Communication",
				company: "Bangalore Instutute of Technology",
				place: "",
				dates: "Aug 2015 - Dec 2020",
				type: "Full Time"
			}
		]
	}
]

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

export const stackList = [
	{
		iconId: "html",
		name: "HTML5",
		width: "120",
		height: "120",
		viewBox: "0 0 120 120"
	},{
		iconId: "css",
		name: "CSS3",
		width: "120",
		height: "120",
		viewBox: "0 0 120 120"
	},
	{
		iconId: "js",
		name: "Javascript",
		width: "120",
		height: "120",
		viewBox: "0 0 120 120"
	},
	{
		iconId: "react",
		name: "React",
		width: "113",
		height: "101",
		viewBox: "0 0 113 101"
	},
	{
		iconId: "redux",
		name: "Redux",
		width: "105",
		height: "100",
		viewBox: "0 0 105 100"
	},
	{
		iconId: "bootstrap",
		name: "Bootstrap",
		width: "88",
		height: "87",
		viewBox: "0 0 88 87"
	},
	{
		iconId: "tylewind",
		name: "Tylewind",
		width: "131",
		height: "131",
		viewBox: "0 0 131 131"
	},
	{
		iconId: "sass",
		name: "Sass",
		width: "117",
		height: "87",
		viewBox: "0 0 117 87"
	},
	{
		iconId: "git_icon",
		name: "Git",
		width: "105",
		height: "105",
		viewBox: "0 0 105 105"
	},
	{
		iconId: "gsap",
		name: "Greensock",
		width: "120",
		height: "120",
		viewBox: "0 0 120 120",
		color: "#000"
	},
	{
		iconId: "vsc",
		name: "VS-Code",
		width: "112",
		height: "112",
		viewBox: "0 0 112 112"
	},
	{
		iconId: "github",
		name: "Github",
		width: "88",
		height: "88",
		viewBox: "0 0 88 88",
		color: "#000"
	},

]

export const projects = [
	{
		image: "project1.png",
		title: "Project Tile goes here",
		text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
		stack: "HTML , JavaScript, SASS, React",
		previewLink: "/",
		gitLink: "/",
	},
	{
		image: "project2.png",
		title: "Project Tile goes here",
		text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
		stack: "HTML , JavaScript, SASS, React",
		previewLink: "/",
		gitLink: "/",
	},
	{
		image: "project3.png",
		title: "Project Tile goes here",
		text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
		stack: "HTML , JavaScript, SASS, React",
		previewLink: "/",
		gitLink: "/",
	},
	{
		image: "project4.png",
		title: "Project Tile goes here",
		text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
		stack: "HTML , JavaScript, SASS, React",
		previewLink: "/",
		gitLink: "/",
	},
	{
		image: "project5.png",
		title: "Project Tile goes here",
		text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
		stack: "HTML , JavaScript, SASS, React",
		previewLink: "/",
		gitLink: "/",
	},
	{
		image: "project6.png",
		title: "Project Tile goes here",
		text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
		stack: "HTML , JavaScript, SASS, React",
		previewLink: "/",
		gitLink: "/",
	},
]