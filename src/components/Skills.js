import React from "react";
import { skills } from "../data";

export default function Skills() {
    return(
        <section id="skills" className="bg-gray-800 p-8">
        <h1 className="text-center mb-8 text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Skills</h1>
        <div className="flex justify-between gap-8 ">
        {skills.map((item)=>(
            <h2 className="py-2 px-4 border-2 border-white-500 text-white text-xl font-semibold">{item}</h2>
      
        ))}
        </div>
    </section>
    )
}
