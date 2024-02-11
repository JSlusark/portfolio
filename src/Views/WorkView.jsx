import React from "react";
import pokedex from "../img/pokedex.png";
import chatapp from "../img/chatapp.png";
import meetapp from "../img/meetapp.png";
import myflix from "../img/myflix.png";
import mymovielist from "../img/mymovielist.png";
import api from "../img/api.png";
import Projects from "../Components/Projects";

function Work() {
  let projects = [
    {
      id: 0,
      img: pokedex,
      name: "Pokedex App",
      description:
        "A simple Pokedéx app made with HTML, CSS, and JavaScript. A list of Pokemón is loaded from PokéAPI , and enables the user to view details for each Pokémon.",
      madeWith: "HTML, CSS, JavaScript, jQuery, Bootstrap",
      github: "https://github.com/JSlusark/Pokedex",
      link: "https://jslusark.github.io/Pokedex/",
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
      github: "https://github.com/JSlusark/myFlix-Angular-client",
      link: "https://jslusark.github.io/myFlix-Angular-client/",
    },
    {
      id: 4,
      img: chatapp,
      name: "ChatApp!",
      description:
        "A chat application for mobile devices that provides users with a chat interface and options to communicate, share images and their location.",
      madeWith: "React, React Native, Expo, Google Firebase",
      github: "https://github.com/JSlusark/chat",
      link: "https://github.com/JSlusark/chat",
    },

    {
      id: 5,
      img: meetapp,
      name: "Meet App",
      description:
        "The Meet App allows users to search for a city and get a list of events for Full-Stack Developers hosted in that city.",
      madeWith:
        "React / Create-React-App (CRA), CSS, JestCucumber,Puppeteer, Atatus, Lighthouse,Recharts",
      github: "https://github.com/JSlusark/meet",
      link: "https://jslusark.github.io/meet/",
    },
  ];

  return (
    <div id="work" className="bg-stone-50 p-9 min-h-screen">
      <div className="pt-12">
        <h1 className=" text-8xl font-bold mb-10 w-full text-center">Work</h1>
        <div className="inline-grid m-9 sm:grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project, key) => {
            return <Projects project={project} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Work;
