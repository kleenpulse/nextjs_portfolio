import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { FaCodepen } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

const SocialMedia = () => {
	return (
		<div className=" flex justify-end items-center flex-col absolute left-0 top-1/2 translate-y-[-30%] pb-16">
			<div className="social-div">
				<Link
					target="_blank"
					href="https://github.com/kleenpulse"
					rel="noreferrer"
				>
					<div>
						<BsGithub />
					</div>
				</Link>
				<Link
					target="_blank"
					href="https://codepen.io/skyegideon"
					rel="noreferrer"
				>
					<div>
						<FaCodepen />
					</div>
				</Link>
				<Link
					target="_blank"
					href="https://twitter.com/kleen_pulse"
					rel="noreferrer"
				>
					<div>
						<RiTwitterXLine />
					</div>
				</Link>
			</div>
		</div>
	);
};

export default SocialMedia;
