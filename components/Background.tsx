"use client";

import { useThemeCtx } from "@/ThemeContext";

import cn from "@/utils/tailwind";

const Background = () => {
	const { currentColor } = useThemeCtx();

	return (
		<div
			className={cn(
				"fixed inset-0 transition-colors delay-100 duration-1000   opacity-30 dark:block hidden",
				{
					"bg-[#7017ff]": currentColor === "one",
					"bg-[#2bc7ee]": currentColor === "two",
					"bg-[#06f27c]": currentColor === "three",
					"bg-orange-500": currentColor === "four",
					"bg-[#ff0c0c]": currentColor === "five",
					"bg-[#ff6a00]": currentColor === "six",
					"bg-[#ffffff]": currentColor === "seven",
					"bg-[#d001f4]": currentColor === "eight",
					"bg-[#ffb700]": currentColor === "nine",
				}
			)}
		/>
	);
};

export default Background;
