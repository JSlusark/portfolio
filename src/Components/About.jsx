import React from "react";

function About() {
	return (
		<div
			id="about"
			className="flex flex-col items-center justify-center min-h-screen bg-stone-200 text-gray-800 p-20"
		>
			<div className="px-52">
				<h1 className="text-7xl font-bold mb-6 w-full text-center">About Me</h1>

				<p className="text-l text-left mb-4">
					While growing up, I was consistently drawn to gaming, digital art, and
					the creation of my own digital experiences. This ranged from
					personalizing blogs to designing graphics and crafting my own games
					using tools like RPG Maker and Ren'Py.
				</p>
				<p className="text-l text-left mb-4">
					My passion for tech naturally led me into a career where I
					collaborated closely with developers, supporting and guiding their
					endeavors with data insights, advertising solutions, trend analysis,
					and user experience practices. My strength lies in effectively
					communicating and understanding the development landscape, which
					propelled my career as a tech sales executive. However, as I delved
					deeper into my profession, I realized that my true interest was in the
					development of the services I sold, understanding how they were
					constructed and considering how they could be improved. This
					realization inspired me to shift my focus towards becoming a web
					developer.
				</p>
				<p className="text-l text-left mb-6">
					After gaining some foundational knowledge from online resources and a
					part-time introductory course at SheCodes, I fully committed to my new
					path by enrolling in a comprehensive 6-month Full-Stack web
					development program at CareerFoundry.
				</p>
				<div class="grid content-start">
					<a
						href="file.pdf"
						download
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40"
					>
						Download CV
					</a>
				</div>
				<div className="grid grid-cols-1 gap-4 w-full mt-6 md:grid-cols-2">
					<div>
						<h2 className="text-2xl font-semibold">Skills</h2>
						<div className="flex flex-wrap p-8 ">
							{/* First Column */}
							<div className="w-1/2 px-16 text-left">
								<p className="font-semibold">Front-End:</p>
								<ul className="pl-6 mb-2">
									<li>HTML, CSS, Bootstrap</li>
									<li>JavaScript, React.js / CRA, React Native</li>
									<li>Angular, Angular Material, jQuery, React Bootstrap</li>
								</ul>

								<p className="font-semibold">Back-End:</p>
								<ul className=" pl-6 mb-2">
									<li>Node.js, Express, RESTful API</li>
								</ul>
							</div>

							{/* Second Column */}
							<div className=" w-1/2 px-16 text-left md:grid-cols-2">
								<p className="font-semibold">Testing & Debugging:</p>
								<ul className=" pl-6 mb-2">
									<li>Jest, Cucumber, Puppeteer</li>
								</ul>

								<p className="font-semibold">Tools:</p>
								<ul className=" pl-6 mb-2">
									<li>
										Expo, Google Lighthouse, Recharts, Atatus, Parcel, Postman,
										Git, Github
									</li>
								</ul>

								<p className="font-semibold">Databases:</p>
								<ul className=" pl-6">
									<li>MongoDB, PostgreSQL, Mongoose, SQL</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="p-30 text-left">
						<h2 className="text-2xl font-semibold mb-4">Outside Work</h2>
						<ul className=" pl-6 ">
							<li>Exploring the outdoors</li>
							<li>Reading sci-fi novels</li>
							<li>Traveling and experiencing new cultures</li>
							<li>Attending tech meetups</li>
							{/* Add as many hobbies/activities as you'd like */}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
