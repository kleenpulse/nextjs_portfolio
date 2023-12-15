"use client";

import { MOBILE_LINKS } from "@/constants";
import cn from "@/utils/tailwind";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const MobileNav = () => {
	const searchParams = useSearchParams();
	const path = searchParams.get("path");
	const router = useRouter();

	useEffect(() => {
		if (path !== "home") return;
		if (path === "home") {
			scrollTo(0, 0);
		}
	}, [path]);

	return (
		<div className="md:hidden fixed bottom-0 left-0 w-full">
			<div className="flex w-full justify-between py-4 px-2 dark:bg-black/20 backdrop-blur-xl">
				{MOBILE_LINKS.map((item) => (
					<button
						type="button"
						onClick={() =>
							router.push(`?path=${item.label}${item.link}`, { scroll: true })
						}
						key={item.id}
						className={cn(
							"text-3xl ",
							path === item.label
								? "text-black dark:text-white"
								: "text-gray-900 dark:text-gray-400"
						)}
					>
						{item.icon}
					</button>
				))}
			</div>
		</div>
	);
};

export default MobileNav;
