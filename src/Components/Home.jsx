import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-stone-200 text-gray-800">
			<div className="flex items-center space-x-6">
				<img
					src="https://fakeimg.pl/200x200"
					alt="Jess's Avatar"
					className="rounded-full"
				/>
				<div className="text-left">
					<h1 className="text-7xl  font-bold">Hi,</h1>
					<h1 className="text-8xl font-bold">I'm Jess</h1>
					<h2 className="text-xl  m-1">
						I'm a front end developer based in Berlin
					</h2>
				</div>
			</div>
			<div className="flex space-x-4 mt-2 ">
				<a
					href="https://www.linkedin.com/in/your-linkedin-profile"
					className="text-gray-400 hover:text-purple-600"
				>
					<FontAwesomeIcon
						icon={icon({ name: "linkedin-in", style: "brands" })}
						className="text-4xl"
					/>
				</a>
				<a
					href="https://github.com/your-github-username"
					className="text-gray-400 hover:text-purple-600"
				>
					<FontAwesomeIcon
						icon={icon({ name: "github", style: "brands" })}
						className="text-4xl"
					/>
				</a>
				<a
					onClick={(e) => {
						e.preventDefault();
						window.open("mailto:slusark.jessica@gmail.com", "_blank");
					}}
					className="text-gray-400 hover:text-purple-600"
				>
					<FontAwesomeIcon
						icon={icon({ name: "envelope", style: "solid" })}
						className="text-4xl"
					/>
				</a>
			</div>
		</div>
	);
}

export default Home;
