import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import pokedex from "../img/pokedex.png";
import chatapp from "../img/chatapp.png";
import meetapp from "../img/meetapp.png";
import myflix from "../img/myflix.png";
import mymovielist from "../img/mymovielist.png";
import api from "../img/api.png";

function Work() {
	let projects = [
		{
			id: 0,
			img: pokedex,
			name: "Pokedex App",
			description:
				"A simple Pokedéx app made with HTML, CSS, and JavaScript. A list of Pokemón is loaded from PokéAPI , and enables the user to view details for each Pokémon.",
			madeWith: "HTML, CSS, JavaScript, jQuery, Bootstrap",
			github: "https://jslusark.github.io/simple-js-app/",
			link: "https://github.com/JSlusark/simple-js-app",
		},

		{
			id: 1,
			img: api,
			name: "My Movie List API",
			description:
				"REST API for a movie application called Movie Flix that interacts with a database that stores data about different movies.",
			madeWith:
				"JavaScript, MongoDB, Express, Node.js, Postman, PostgreSQL, Mongoose",
			github: "https://github.com/JSlusark/Movie-API",
			link: "https://shrouded-ocean-05047.herokuapp.com/",
		},
		{
			id: 2,
			img: mymovielist,
			name: "My Movie List (React)",
			description:
				"Single-page, responsive movie application which gives information about different movies, directors, and genres. Users are able to sign up, update their personal information, and add movies to their favorite list.",
			madeWith: "Made with: React, Node.js, Express, Parcel, React Bootstrap",
			github: "https://github.com/JSlusark/MyFlix-client",
			link: "https://mymovielistj.netlify.app/login",
		},
		{
			id: 3,
			img: myflix,
			name: "My Movie List (Angular)",
			description:
				"Single-page, responsive movie application which gives information about different movies, directors, and genres. Users are able to sign up, update their personal information, and add movies to their favorite list.",
			madeWith: "Angular, Node.js, Angular Material",
			github: "https://jslusark.github.io/myFlix-Angular-client/welcome",
			link: "https://github.com/JSlusark/myFlix-Angular-client",
		},
		{
			id: 4,
			img: chatapp,
			name: "ChatApp!",
			description:
				"A chat application for mobile devices that provides users with a chat interface and options to communicate, share images and their location.",
			madeWith: "React, React Native, Expo, Google Firebase",
			github: "https://github.com/JSlusark/chat",
			link: "#",
		},

		{
			id: 5,
			img: meetapp,
			name: "Meet App",
			description:
				"The Meet App allows users to search for a city and get a list of events for Full-Stack Developers hosted in that city.",
			madeWith:
				"React / Create-React-App (CRA), CSS, JestCucumber,Puppeter, Atatus, Lighthouse,Recharts",
			github: "https://jslusark.github.io/meet/",
			link: "https://birdieber.github.io/meet/",
		},
	];

	const displayProjects = projects.map((project, key) => {
		return (
			<div
				key={project.id}
				className=" border-sky-500 "
			>
				<img
					src={project.img}
					alt=""
					className="p-4 block mx-auto"
				/>
				<div className="px-5 py-1">
					<h1>{project.name}</h1>
					<p className="text-left">{project.description}</p>
					<p className="text-left">Made with: {project.madeWith}</p>
					<div className="text-left mt-10">
						<a
							href={project.link}
							target="_blank"
							className="text-gray-400 hover:text-custom-red   "
						>
							<FontAwesomeIcon
								icon={icon({ name: "link", style: "solid" })}
								className="text-2xl m-1"
							/>
						</a>
						<a
							href={project.github}
							target="_blank"
							className="text-gray-400 hover:text-custom-red    "
						>
							<FontAwesomeIcon
								icon={icon({ name: "github", style: "brands" })}
								className="text-2xl m-1"
							/>
						</a>
					</div>
				</div>
			</div>
		);
	});

	return (
		<div
			id="work"
			className="bg-stone-300 p-9 min-h-screen  "
		>
			<div className="pt-12">
				<h1 className=" text-7xl font-bold m-2">Work</h1>
				<div className="inline-grid m-9 sm:grid-cols-1 md:grid-cols-3 gap-4">
					{displayProjects}
				</div>
			</div>
		</div>
	);
}

export default Work;
