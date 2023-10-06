import React from "react";

function About() {
	return (
		<div
			id="about"
			className="flex flex-col items-center justify-center min-h-screen bg-stone-200 text-gray-800 p-6"
		>
			<h1 className="text-4xl font-bold mb-6">About Me</h1>
			<img
				className="w-48 h-48 mb-6 rounded-full"
				src="path_to_your_image.jpg"
				alt="Your Name"
			/>
			<p className="text-lg mb-4">
				Hello! I'm Jess, a front-end developer based in Berlin. I specialize in
				building user-friendly, high-performance web applications. I've worked
				with a variety of technologies and love taking on new challenges.
			</p>
			<p className="text-lg mb-6">
				When I'm not coding, you can find me hiking, reading, or experimenting
				with new recipes in the kitchen.
			</p>
			<div>
				<h2 className="text-2xl font-semibold mb-4">Skills & Tools:</h2>
				<ul className="list-disc pl-6">
					<li>React & Redux</li>
					<li>Vue & Vuex</li>
					<li>JavaScript (ES6+)</li>
					<li>Tailwind CSS</li>
					{/* Add as many skills/tools as you'd like */}
				</ul>
			</div>
		</div>
	);
}

export default About;
