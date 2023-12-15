import { BiHomeAlt2 } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { GoStack } from "react-icons/go";
import { PiCode } from "react-icons/pi";
import { MdOutlineContacts } from "react-icons/md";
import { ReactNode } from "react";

type NavlinkProps = {
	id?: number;
	label: string;
	link: string;
};

type MobilelinkProps = {
	id?: number;
	icon: ReactNode;
	link?: string;
	label?: string;
};

export const NAV_LINKS: NavlinkProps[] = [
	{ id: 1, label: "Home", link: "/" },
	{ id: 2, label: "About", link: "#about" },
	{ id: 3, label: "Works", link: "#works" },
	{ id: 4, label: "Skills", link: "#skills" },
	{ id: 5, label: "Contact", link: "#contact" },
];

export const MOBILE_LINKS: MobilelinkProps[] = [
	{ id: 1, icon: BiHomeAlt2(), label: "home", link: "" },
	{ id: 2, icon: AiOutlineUser(), link: "#about", label: "about" },
	{
		id: 3,
		icon: GoStack(),
		link: "#works",
		label: "works",
	},
	{ id: 4, icon: PiCode(), link: "#skills", label: "skills" },
	{
		id: 5,
		icon: MdOutlineContacts(),
		link: "#contact",
		label: "contact",
	},
];
