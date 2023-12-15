import { useThemeCtx } from "@/ThemeContext";
import cn from "@/utils/tailwind";
import Image from "next/image";
import React from "react";
import { BsMoon } from "react-icons/bs";
import { FiMonitor } from "react-icons/fi";
import { MdOutlineLightMode } from "react-icons/md";

const ThemeButtons = () => {
	const { theme, setTheme } = useThemeCtx();
	return (
		<div className="flex gap-x-2 items-center">
			<div className="flex items-center border border-gray-300 p-[2px] rounded-full w-[115px] justify-center">
				<button
					type="button"
					className={cn(
						"w-[33px] h-[33px] p-2",
						theme === "light" && "bg-black/10  rounded-full "
					)}
					onClick={() => setTheme("light")}
				>
					<MdOutlineLightMode />
				</button>

				<button
					type="button"
					className={cn(
						"w-[33px] h-[33px]  p-2",
						theme === "dark" && "bg-black/10  rounded-full dark:bg-white/20"
					)}
					onClick={() => setTheme("dark")}
				>
					<BsMoon />
				</button>
				<button
					type="button"
					className={cn(
						"w-[33px] h-[33px] p-2",
						theme === "system" && "bg-black/10  rounded-full dark:bg-white/20"
					)}
					onClick={() => setTheme("system")}
				>
					<FiMonitor />
				</button>
			</div>

			<Image
				src="/vxrcel.png"
				alt="logo"
				width={50}
				height={50}
				className="rounded-full border border-gray-300 h-10 w-10 object-contain"
			/>
		</div>
	);
};

export default ThemeButtons;
