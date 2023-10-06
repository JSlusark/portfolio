import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

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
					<div className="border-2 border-sky-500 ">
						<img
							src="https://fakeimg.pl/250x200"
							alt=""
							className="p-4	"
						/>
						<div className="px-5 py-1">
							<h1>App Name</h1>
							<p className="text-left">Lorem ipsum dolor sit amet</p>
							<p className="text-left">Made with:</p>
							<a
								href="#"
								className="text-gray-400 hover:text-purple-600"
							>
								<FontAwesomeIcon
									icon={icon({ name: "link", style: "solid" })}
									className="text-2xl m-1"
								/>
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-purple-600 "
							>
								<FontAwesomeIcon
									icon={icon({ name: "github", style: "brands" })}
									className="text-2xl m-1"
								/>
							</a>
						</div>
					</div>

					{/* Project 2*/}
					<div className="border-2 border-sky-500 ">
						<img
							src="https://fakeimg.pl/250x200"
							alt=""
							className="p-4	"
						/>
						<div className="px-5 py-1">
							<h1>App Name</h1>
							<p className="text-left">Lorem ipsum dolor sit amet</p>
							<p className="text-left">Made with:</p>
							<a
								href="#"
								className="text-gray-400 hover:text-purple-600"
							>
								<FontAwesomeIcon
									icon={icon({ name: "link", style: "solid" })}
									className="text-2xl m-1"
								/>
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-purple-600 "
							>
								<FontAwesomeIcon
									icon={icon({ name: "github", style: "brands" })}
									className="text-2xl m-1"
								/>
							</a>
						</div>
					</div>
					{/* Project 3*/}
					<div className="border-2 border-sky-500 ">
						<img
							src="https://fakeimg.pl/250x200"
							alt=""
							className="p-4	"
						/>
						<div className="px-5 py-1">
							<h1>App Name</h1>
							<p className="text-left">Lorem ipsum dolor sit amet</p>
							<p className="text-left">Made with:</p>
							<a
								href="#"
								className="text-gray-400 hover:text-purple-600"
							>
								<FontAwesomeIcon
									icon={icon({ name: "link", style: "solid" })}
									className="text-2xl m-1"
								/>
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-purple-600 "
							>
								<FontAwesomeIcon
									icon={icon({ name: "github", style: "brands" })}
									className="text-2xl m-1"
								/>
							</a>
						</div>
					</div>
					{/* Project 4*/}
					<div className="border-2 border-sky-500 ">
						<img
							src="https://fakeimg.pl/250x200"
							alt=""
							className="p-4	"
						/>
						<div className="px-5 py-1">
							<h1>App Name</h1>
							<p className="text-left">Lorem ipsum dolor sit amet</p>
							<p className="text-left">Made with:</p>
							<a
								href="#"
								className="text-gray-400 hover:text-purple-600"
							>
								<FontAwesomeIcon
									icon={icon({ name: "link", style: "solid" })}
									className="text-2xl m-1"
								/>
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-purple-600 "
							>
								<FontAwesomeIcon
									icon={icon({ name: "github", style: "brands" })}
									className="text-2xl m-1"
								/>
							</a>
						</div>
					</div>
					{/* Project 5*/}
					<div className="border-2 border-sky-500 ">
						<img
							src="https://fakeimg.pl/250x200"
							alt=""
							className="p-4	"
						/>
						<div className="px-5 py-1">
							<h1>App Name</h1>
							<p className="text-left">Lorem ipsum dolor sit amet</p>
							<p className="text-left">Made with:</p>
							<a
								href="#"
								className="text-gray-400 hover:text-purple-600"
							>
								<FontAwesomeIcon
									icon={icon({ name: "link", style: "solid" })}
									className="text-2xl m-1"
								/>
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-purple-600 "
							>
								<FontAwesomeIcon
									icon={icon({ name: "github", style: "brands" })}
									className="text-2xl m-1"
								/>
							</a>
						</div>
					</div>
					{/* Project 6*/}
					<div className="border-2 border-sky-500 ">
						<img
							src="https://fakeimg.pl/250x200"
							alt=""
							className="p-4	"
						/>
						<div className="px-5 py-1">
							<h1>App Name</h1>
							<p className="text-left">Lorem ipsum dolor sit amet</p>
							<p className="text-left">Made with:</p>
							<a
								href="#"
								className="text-gray-400 hover:text-purple-600"
							>
								<FontAwesomeIcon
									icon={icon({ name: "link", style: "solid" })}
									className="text-2xl m-1"
								/>
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-purple-600 "
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
	);
}

export default Work;
