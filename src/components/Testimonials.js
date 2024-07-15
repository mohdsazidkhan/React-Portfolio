import React from "react";
import { testimonials } from "../data";

export default function Testimonials() {
return(
    <section id="testimonials" className="bg-gray-800 p-8">
        <h1 className="text-center mb-8 text-3xl font-bold tracking-tight text-white sm:text-4xl">Client Testimonials</h1>
        <div className="flex justify-center items-center gap-4">
        
       {testimonials.map((item)=>(
        <div className="px-4 flex justify-center items-center flex-col">
        <img className="rounded-xl mb-4" src={item.image} alt={item.name}/>
        <h2 className="text-white text-2xl font-semibold">{item.name}</h2>
        <h6 className="text-white mt-2 font-semibold">{item.company}</h6>
        <p className=" text-center text-white">{item.quote}</p>
        </div>
        ))}
        </div>
    </section>
)
}
