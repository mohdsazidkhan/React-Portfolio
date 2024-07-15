import React from "react";
import { projects } from "../data";

export default function Projects() {
    return(
        <section id="projects" className="bg-gray-800 p-8">
            <h1 className="text-center mb-8 text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Projects</h1>
            <div className="grid grid-cols-4 gap-8 ">
            {projects.map((item)=>(
            <a href={item.link} target="_blank">
                <img className="rounded-xl mb-4" src={item.image} alt={item.title}/>
                <h2 className="text-white text-2xl font-semibold">{item.title}</h2>
                <h6 className="text-white mt-2 font-semibold">{item.subtitle}</h6>
            </a>
            ))}
            </div>
        </section>
    )   
}
