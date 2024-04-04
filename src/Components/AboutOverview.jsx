import React from "react";
import cv from "../documents/CV-Jessica_slusark.pdf";
import JessAvatar from "../img/jess-bef.png";

export default function AboutOverview() {
  return (
    <div className="text-left scrollbar col-span-2 py-32">
      <img src={JessAvatar} alt="me" className="px-32" />
      <p className="mb-10 text-sm">
        While growing up I was often exposed to technology. Commodore 64 was my
        first love and from there it followed a life of videogaming, mastering
        Photoshop graphical skills, creating blogs and daydreaming about
        creating my first visual novel game in Renpy. My curiosity towards tech
        led me to a career into mobile gaming, where I would lead and advise
        mobile game companies on optimizing their projects with various products
        and services (analytics, game engines, in-game advertising methods, art
        assets, playtesting etc..). During this time I learnt a lot about game
        and app development, my fascination grew until it culminated in a shift
        to Software engineering in 2023. My journey can be observed from the
        timeline and CV below.
      </p>
      <a
        href={cv}
        download
        className=" text-white font-bold py-2 px-4 rounded w-40 bg-violet-500 hover:bg-violet-600 active:bg-violet-700"
      >
        Download CV
      </a>
      {/* <Timeline /> */}
    </div>
  );
}
