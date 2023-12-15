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
		<>
			<nav className="app__navbar w-full h-[56px] flex justify-between items-center px-2 py-4  fixed top-0 left-0 z-10 dark:text-gray-300 backdrop-blur-sm dark:bg-black/5">
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
			</nav>
			<MobileNav />
		</>
	);
};

export default Navbar;
