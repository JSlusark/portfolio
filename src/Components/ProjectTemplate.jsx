import React from "react";
import Work from "./Work";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function ProjectTemplate({ project }) {
	console.log(project);
	return (
		<div
			key={project.id}
			className="p-5 bg-stone-50 w-80 m-10"
		>
			<img
				src={project.img}
				alt=""
				className="p-4 block mx-auto"
			/>
			<div className="px-5 py-1">
				<h1 className="font-semibold text-xl">{project.name}</h1>
				<div className="mb-10">
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
				<p className="text-left">{project.description}</p>
				<p className="text-left">Made with: {project.madeWith}</p>
			</div>
		</div>
	);
}
