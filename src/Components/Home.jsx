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
					className="text-4xl"
				/>
			</a>
		);
	});

	return (
		<div
			id="home"
			className="flex flex-col items-center justify-center min-h-screen bg-stone-200 text-gray-800"
		>
			<div className="flex items-center space-x-6">
				<img
					src={profilepic}
					alt="Jess's Avatar"
					className="rounded-full h-52 w-52"
				/>
				<div>
					<h1 className="text-8xl  font-bold">Jessica</h1>
					<h1 className="text-8xl  font-bold">Slusark</h1>
					<h2 className="text-xl   m-1">Front end developer based in Berlin</h2>
				</div>
			</div>
			<div className="flex space-x-4 mt-2 ">{renderIcons}</div>
		</div>
	);
}

export default Home;
