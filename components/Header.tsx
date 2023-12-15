"use client";
import AppWrap from "@/wrapper/AppWrap";
import { motion } from "framer-motion";
import Image from "next/image";

const scaleVariants = {
	whileInView: {
		scale: [0, 1],
		opacity: [0, 1],
		transition: {
			duration: 1,
			ease: "easeInOut",
		},
	},
};
type StackProps = {
	id?: number;
	src: string;
};

const STACKS: StackProps[] = [
	{
		id: 1,
		src: "/sass.png",
	},
	{
		id: 2,
		src: "/git.png",
	},
	{
		id: 3,
		src: "/react.png",
	},
];

const Header = () => {
	return (
		<div className=" flex flex-col lg:flex-row  flex-1 w-full py-16 items-center relative lg:justify-between bg-white/30">
			<motion.div
				whileInView={{ x: [-100, 0], opacity: [0, 1] }}
				transition={{ duration: 1 }}
				className=" flex justify-start items-start max-xl:w-fit  relative h-full bg-red-500/25"
			>
				<div className="app__header-badge w-full flex justify-start  items-start xl:items-end flex-col  left-0 top-0 h-full">
					<div className="badge-cmp flex items-center justify-start">
						<span>👋</span>
						<div style={{ marginLeft: 20 }}>
							<p className="p">Hello, I am</p>
							<p className="h1">Isaac Gideon(Vxrcel)</p>
						</div>
					</div>
					<div className="tag-cmp">
						<p className="p">Web Developer</p>
						<p className="p">Freelancer</p>
					</div>
				</div>
			</motion.div>

			<motion.div
				whileInView={{ opacity: [0, 1] }}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
				className=" relative bg-white/10 rounded-full sm:w-[500px] "
			>
				<Image
					src="/vxrcel-clear.png"
					alt="profile_bg"
					width={600}
					height={600}
					className="object-cover w-full h-full rounded-full brightness-0"
				/>
			</motion.div>

			<motion.div
				className="app__header-circles "
				variants={scaleVariants}
				whileInView={scaleVariants.whileInView}
			>
				{STACKS.map((icon) => (
					<div
						className="circle-cmp flex justify-center items-center"
						key={icon.id}
					>
						<Image src={icon.src} alt="icon" width={200} height={200} />
					</div>
				))}
			</motion.div>
		</div>
	);
};

export default AppWrap(Header, "home");
