import cn from "@/utils/tailwind";

type Props = {
	color?: string;
	innerColor?: string;
	isSmall?: boolean;
};
const LoadingSpinner = ({ color, innerColor, isSmall }: Props) => (
	<div
		className={cn(
			"relative  fade-loader",
			isSmall ? "h-9 w-9" : " lg:h-20 lg:w-20 min-[500px]:h-12 min-[500px]:w-12"
		)}
	>
		<div
			className={`animate-loadspin rounded-full border-4 border-r-transparent border-b-transparent ${
				color || "border-[#0ff]"
			} border-solid h-full w-full  absolute `}
		/>

		<div
			className={` rounded-full border-4  ${
				innerColor || "border-[rgba(0,255,255,0.23)]"
			} border-solid h-full w-full`}
		/>
	</div>
);

export default LoadingSpinner;
