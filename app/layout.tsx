import type { Metadata } from "next";
import { DM_Sans, Rajdhani } from "next/font/google";
import "./globals.scss";

import ThemeProvider from "@/ThemeContext";

import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/Navbar"), {
	ssr: false,
});

const dmSans = DM_Sans({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
	variable: "--font-dm-sans",
});

const rajdhani = Rajdhani({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-rajdhani",
});

export const metadata: Metadata = {
	title: "Isaac Gideon",
	description: "Vxrcel's portfolio website",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ThemeProvider>
			<html lang="en">
				<body
					className={`relative ${dmSans.variable} ${rajdhani.className} hide-scroll`}
				>
					<Navbar />
					<main className="pt-7 md:pt-12 min-h-screen over w-full absolute overflow-y-visible flex flex-col custom-scroll">
						{children}
					</main>
				</body>
			</html>
		</ThemeProvider>
	);
}
