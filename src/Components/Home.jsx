import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons"; // for brands
import { fas } from "@fortawesome/free-solid-svg-icons"; // for solid icons
import profilepic from "../img/profilepic.jpg";

library.add(fab, fas);

function Home() {
	let icons = [
		{
			icon: ["fab", "linkedin-in"],
			link: "https://www.linkedin.com/in/jessicaslusark/",
		},
		{
			icon: ["fab", "github"],
			link: "https://github.com/your-github-username",
		},
		{
			icon: ["fas", "envelope"],
			link: "mailto:slusark.jessica@gmail.com",
		},
	];
	let renderIcons = icons.map((item) => {
		return (
			<a
				key={item.icon[1]} // Assuming each icon name is unique
				onClick={(e) => {
					e.preventDefault();
					window.open(item.link, "_blank");
				}}
				className="text-gray-400 hover:text-amber-500	"
			>
				<FontAwesomeIcon
					icon={item.icon}
					className="text-4xl p-4 md:p-0 md:text-5xl md:ml-6 mr-0"
				/>
			</a>
		);
	});

	return (
		<div
			id="home"
			className="flex flex-col items-center justify-center min-h-screen bg-stone-200 text-gray-800 px-4"
		>
			<div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
				<img
					src={profilepic}
					alt="Jess's Avatar"
					className="rounded-full h-52 w-52 md:h-64 md:w-64"
				/>
				<div className="text-center md:text-left">
					<h1 className="text-4xl md:text-8xl font-bold">Jessica</h1>
					<h1 className="text-4xl md:text-8xl font-bold">Slusark</h1>
					<h2 className="text-md md:text-3xl ">
						Front end developer<span className="hidden md:inline"></span>
						<br className="md:hidden" /> {""}
						based in Berlin
					</h2>
				</div>
			</div>
			<div className="flex md:justify-start mt-4">{renderIcons}</div>
		</div>
	);
}

export default Home;
