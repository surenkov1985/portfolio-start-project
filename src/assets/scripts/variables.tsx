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
