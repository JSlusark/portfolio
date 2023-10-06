import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import pokedex from "../img/pokedex.png";
import chatapp from "../img/chatapp.png";
import meetapp from "../img/meetapp.png";
import myflix from "../img/myflix.png";
import mymovielist from "../img/mymovielist.png";
import api from "../img/api.png";

// changes for the future - create an object that stores info on the projects, then use a loop to return each project as html

function Work() {
	return (
		<div
			id="work"
			className="bg-stone-300 p-9 min-h-screen  "
		>
			<div className="pt-12">
				<h1 className=" text-7xl font-bold m-2">Work</h1>

				<div
					className="inline-grid m-9
          sm:grid-cols-1 md:grid-cols-3
            gap-4"
				>
					{/* Project 1*/}
					<div className=" border-sky-500 ">
						<img
							src={pokedex}
							alt=""
							className="p-4 block mx-auto"
						/>
						<div className="px-5 py-1">
							<h1>Pokemon App</h1>
							<p className="text-left">
								A simple Pokedéx app made with HTML, CSS, and JavaScript. A list
								of Pokemón is loaded from PokéAPI , and enables the user to view
								details for each Pokémon.
							</p>
							<p className="text-left">
								Made with: HTML, CSS, JavaScript, jQuery, Bootstrap
							</p>
							<div className="text-left">
								<a
									href="
									https://jslusark.github.io/simple-js-app/
									"
									target="_blank"
									className="text-gray-400 hover:text-amber-500 	"
								>
									<FontAwesomeIcon
										icon={icon({ name: "link", style: "solid" })}
										className="text-2xl m-1"
									/>
								</a>
								<a
									href="https://github.com/JSlusark/simple-js-app"
									target="_blank"
									className="text-gray-400 hover:text-amber-500	 "
								>
									<FontAwesomeIcon
										icon={icon({ name: "github", style: "brands" })}
										className="text-2xl m-1"
									/>
								</a>
							</div>
						</div>
					</div>

					{/* Project 2*/}
					<div className=" border-sky-500 ">
						<img
							src={api}
							alt=""
							className="p-4 block mx-auto"
						/>
						<div className="px-5 py-1">
							<h1>My Movie List API</h1>
							<p className="text-left">
								REST API for a movie application called Movie Flix that
								interacts with a database that stores data about different
								movies.
							</p>
							<p className="text-left">
								Made with: JavaScript, MongoDB, Express, Node.js, Postman,
								PostgreSQL, Mongoose
							</p>
							<div className="text-left">
								<a
									href="https://shrouded-ocean-05047.herokuapp.com/"
									target="_blank"
									className="text-gray-400 hover:text-amber-500 	"
								>
									<FontAwesomeIcon
										icon={icon({ name: "link", style: "solid" })}
										className="text-2xl m-1"
									/>
								</a>
								<a
									href="https://github.com/JSlusark/Movie-API"
									target="_blank"
									className="text-gray-400 hover:text-amber-500	 "
								>
									<FontAwesomeIcon
										icon={icon({ name: "github", style: "brands" })}
										className="text-2xl m-1"
									/>
								</a>
							</div>
						</div>
					</div>
					{/* Project 3*/}
					<div className=" border-sky-500 ">
						<img
							src={mymovielist}
							alt=""
							className="p-4 block mx-auto"
						/>
						<div className="px-5 py-1">
							<h1>My Movie List (React)</h1>
							<p className="text-left">
								Single-page, responsive movie application which gives
								information about different movies, directors, and genres. Users
								are able to sign up, update their personal information, and add
								movies to their favorite list.
							</p>
							<p className="text-left">
								Made with: React, Node.js, Express, Parcel, React Bootstrap
							</p>

							<div className="text-left">
								<a
									href="https://mymovielistj.netlify.app/login"
									target="_blank"
									className="text-gray-400 hover:text-amber-500 	"
								>
									<FontAwesomeIcon
										icon={icon({ name: "link", style: "solid" })}
										className="text-2xl m-1"
									/>
								</a>
								<a
									href="https://github.com/JSlusark/MyFlix-client"
									target="_blank"
									className="text-gray-400 hover:text-amber-500	 "
								>
									<FontAwesomeIcon
										icon={icon({ name: "github", style: "brands" })}
										className="text-2xl m-1"
									/>
								</a>
							</div>
						</div>
					</div>
					{/* Project 4*/}
					<div className=" border-sky-500 ">
						<img
							src={myflix}
							alt=""
							className="p-4 block mx-auto"
						/>
						<div className="px-5 py-1">
							<h1>My Movie List (Angular)</h1>
							<p className="text-left">
								Single-page, responsive movie application which gives
								information about different movies, directors, and genres. Users
								are able to sign up, update their personal information, and add
								movies to their favorite list.
							</p>
							<p className="text-left">
								Made with:Angular, Node.js, Angular Material
							</p>
							<div className="text-left">
								<a
									href="https://jslusark.github.io/myFlix-Angular-client/welcome"
									target="_blank"
									className="text-gray-400 hover:text-amber-500 	"
								>
									<FontAwesomeIcon
										icon={icon({ name: "link", style: "solid" })}
										className="text-2xl m-1"
									/>
								</a>
								<a
									href="https://github.com/JSlusark/myFlix-Angular-client"
									target="_blank"
									className="text-gray-400 hover:text-amber-500	 "
								>
									<FontAwesomeIcon
										icon={icon({ name: "github", style: "brands" })}
										className="text-2xl m-1"
									/>
								</a>
							</div>
						</div>
					</div>
					{/* Project 5*/}
					<div className=" border-sky-500 ">
						<img
							src={chatapp}
							alt=""
							className="p-4 block mx-auto"
						/>
						<div className="px-5 py-1">
							<h1>ChatApp!</h1>
							<p className="text-left">
								A chat application for mobile devices that provides users with a
								chat interface and options to communicate, share images and
								their location.
							</p>
							<p className="text-left">
								Made with:React, React Native, Expo, Google Firebase
							</p>
							<div className="text-left">
								<a
									href="#"
									target="_blank"
									className="text-gray-400 hover:text-amber-500 	"
								>
									<FontAwesomeIcon
										icon={icon({ name: "link", style: "solid" })}
										className="text-2xl m-1"
									/>
								</a>
								<a
									href="https://github.com/JSlusark/Movie-API"
									target="_blank"
									className="text-gray-400 hover:text-amber-500	 "
								>
									<FontAwesomeIcon
										icon={icon({ name: "github", style: "brands" })}
										className="text-2xl m-1"
									/>
								</a>
							</div>
						</div>
					</div>
					{/* Project 6*/}
					<div className=" border-sky-500 ">
						<img
							src={meetapp}
							alt=""
							className="p-4 block mx-auto"
						/>
						<div className="px-5 py-1">
							<h1>Meet App</h1>
							<p className="text-left">
								The Meet App allows users to search for a city and get a list of
								events for Full-Stack Developers hosted in that city.
							</p>
							<p className="text-left">
								Made with: React / Create-React-App (CRA), CSS, JestCucumber,
								Puppeter, Atatus, Lighthouse,Recharts
							</p>
							<div className="text-left">
								<a
									href="https://jslusark.github.io/meet/"
									target="_blank"
									className="text-gray-400 hover:text-amber-500 	"
								>
									<FontAwesomeIcon
										icon={icon({ name: "link", style: "solid" })}
										className="text-2xl m-1"
									/>
								</a>
								<a
									href="https://github.com/JSlusark/meet"
									target="_blank"
									className="text-gray-400 hover:text-amber-500	 "
								>
									<FontAwesomeIcon
										icon={icon({ name: "github", style: "brands" })}
										className="text-2xl m-1"
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Work;
