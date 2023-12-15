import Link from "next/link";
import React from "react";

type Props = {
	link: string;
	id?: number;
};
const DOTS: Props[] = [
	{
		id: 1,
		link: "home",
	},
	{
		id: 2,
		link: "about",
	},
	{
		id: 3,
		link: "work",
	},
	{
		id: 4,
		link: "skills",
	},
	{
		id: 5,
		link: "contact",
	},
];
const NavigationDots = ({ active }: { active: string }) => {
	return (
		<div className=" flex justify-center items-center flex-col p-4 max-[400px]:hidden absolute right-0 top-1/2 translate-y-[-50%]">
			{DOTS.map((dot) => (
				<Link
					href={`#${dot.link}`}
					// onClick={() => setToggle(false)}
					key={dot.id}
					className=" w-[15px] h-[15px] rounded-full transition-colors ease-in-out duration-300 hover:bg-cyan-400 min-[1440px]:w-[20px] min-[1440px]:h-[20px] "
					style={
						active === dot.link
							? {
									background: "linear-gradient(to right, #313bac, cyan)",
									border: "none",
									scale: "1.3",
							  }
							: {}
					}
				/>
			))}
		</div>
	);
};

export default NavigationDots;
