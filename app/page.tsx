import Background from "@/components/Background";
import Header from "@/components/Header";
import cn from "@/utils/tailwind";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<Background />
			<Image
				width={1200}
				height={1200}
				src="/gradient.svg"
				alt="gradient"
				className="inset-0 fixed min-h-screen object-cover w-full opacity-90 dark:block hidden"
			/>
			<div
				className="fixed inset-0   dark:block hidden"
				style={{
					backgroundImage: `url('/square.svg')`,
					backgroundSize: "40px",
				}}
			/>

			<section className="min-h-screen w-full dark:text-white max-w-[1440px] mx-auto">
				<Header />
			</section>
		</>
	);
}
