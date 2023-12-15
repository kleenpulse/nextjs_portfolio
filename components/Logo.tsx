import { useThemeCtx } from "@/ThemeContext";
import cn from "@/utils/tailwind";
import Link from "next/link";
import React from "react";

const Logo = () => {
	const { currentColor } = useThemeCtx();

	return (
		<Link
			href="/"
			className={cn(
				"lg:text-3xl text-3xl font-semibold transition-colors  duration-1000 uppercase",
				{
					"dark:text-[#5c0ca7] text-[#6917b5]": currentColor === "one",
					"text-[#2bc7ee]": currentColor === "two",
					"text-[#06f27c]": currentColor === "three",
					"text-orange-500": currentColor === "four",
					"text-[#ff0c0c]": currentColor === "five",
					"text-[#ff9900]": currentColor === "six",
					"dark:text-[#ffffff] text-gray-900": currentColor === "seven",
					"text-[#db12ff]": currentColor === "eight",
					"dark:text-[#ffb700] text-[#2301be]": currentColor === "nine",
				}
			)}
		>
			Vxrcel
		</Link>
	);
};

export default Logo;
