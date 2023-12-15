"use client";

import { useState } from "react";

import { RiMenu4Fill } from "react-icons/ri";
import { FiMonitor } from "react-icons/fi";
import { motion } from "framer-motion";
import { MOBILE_LINKS, NAV_LINKS } from "@/constants";
import Link from "next/link";

import cn from "@/utils/tailwind";
import ThemeButtons from "./ThemeButtons";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import Image from "next/image";

const Navbar = () => {
	return (
		<nav className="app__navbar w-full flex justify-between items-center px-2 py-4  relative z-10 dark:text-gray-300">
			<Logo />
			<ul className="app__navbar-links md:flex gap-x-8 text-xl font-medium hidden">
				{NAV_LINKS.map((item) => (
					<Link
						href={item.link}
						key={item.id}
						className="dark:hover:text-white"
					>
						{item.label}
					</Link>
				))}
			</ul>

			<ThemeButtons />

			<MobileNav />
		</nav>
	);
};

export default Navbar;
