import React from "react";

function About() {
	return (
		<div
			id="about"
			className="flex flex-col items-center justify-center min-h-screen bg-stone-200 text-gray-800 p-20"
		>
			<div className="max-w-4xl px-10">
				<h1 className="text-7xl font-bold mb-6 w-full text-center">About Me</h1>
				<div className="text-lg text-left space-y-4">
					<p>
						While growing up, I was consistently drawn to gaming, digital art,
						and the creation of my own digital experiences. This ranged from
						personalizing blogs to designing graphics and crafting my own games
						using tools like RPG Maker and Ren'Py.
					</p>
					<p>
						My passion for tech naturally led me into a career where I
						collaborated closely with developers, supporting and guiding their
						endeavors with data insights, advertising solutions, trend analysis,
						and user experience practices. My strength lies in effectively
						communicating and understanding the development landscape, which
						propelled my career as a tech sales executive. However, as I delved
						deeper into my profession, I realized that my true interest was in
						the development of the services I sold, understanding how they were
						constructed and considering how they could be improved. This
						realization inspired me to shift my focus towards becoming a web
						developer.
					</p>
					<p>
						After gaining some foundational knowledge from online resources and
						a part-time introductory course at SheCodes, I fully committed to my
						new path by enrolling in a comprehensive 6-month Full-Stack web
						development program at CareerFoundry.
					</p>
				</div>
				<div className="text-left mt-5 mb-10">
					<a
						href="file.pdf"
						download
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40"
					>
						Download CV
					</a>
				</div>

				<div className="grid grid-cols-1 gap-4 w-full m-20 md:grid-cols-2">
					<div className="text-left">
						<h2 className="text-2xl font-semibold">Skills</h2>
						<div className="p-8">
							<p className="font-semibold">Front-End:</p>
							<p className=" mb-2">
								HTML, CSS, Bootstrap, JavaScript, React.js / CRA, React Native,
								Angular, Angular Material, jQuery, React Bootstrap
							</p>

							<p className="font-semibold">Back-End:</p>
							<p className=" mb-2">Node.js, Express, RESTful API</p>

							<p className="font-semibold">Testing & Debugging:</p>
							<p className=" mb-2">Jest, Cucumber, Puppeteer</p>
							<p className="font-semibold">Tools:</p>
							<p className=" mb-2">
								Expo, Google Lighthouse, Recharts, Atatus, Parcel, Postman, Git,
								Github
							</p>
							<p className="font-semibold">Databases:</p>
							<p className=" mb-2">MongoDB, PostgreSQL, Mongoose, SQL</p>
						</div>
					</div>
					<div className="text-left">
						<h2 className="text-2xl font-semibold">
							On my free time I like to..
						</h2>
						<ul className="p-8">
							<li className=" mb-2">👾 Play videogames</li>
							<li className=" mb-2">✏️ Draw and make creative stuff</li>
							<li className=" mb-2">👩🏻‍🎤 Read manga and watch anime</li>
							<li className=" mb-2">🐱 Relax with my cats</li>
							<li className=" mb-2">
								🛼 Rollerskate, lift weights and do sports
							</li>
							<li className=" mb-2">
								✨ Learn new things and find new hobbies
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
