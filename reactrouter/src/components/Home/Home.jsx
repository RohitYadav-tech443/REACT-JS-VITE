import React from 'react'
import {Link} from 'react-router-dom';
import port1 from '../../assets/port1.jpg';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl bg-cover bg-center bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMdJKtsygE5_AbClo1AkJSdqs_nSDTw63ROg&s')]">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <button className="px-8 py-4 text-shadow-gray-700 bg-orange-500 rounded-lg font-bold sm:text-xl ">
                            About Me !!!
                        </button>
                        <h2 className="text-2xl font-bold sm:text-2xl">
                            Hi, I’m Rohit — Aspiring Software Engineer
                            <br />
                            Building Solutions with Code & Creativity
                            <br />
                            Turning Ideas into Scalable Tech
                            </h2>


                            <h2>
                            <span className="font-bold sm:text-2xl text-2xl">
                            DSA Enthusiast | Web Developer | GenAI Learner
                            <br />
                            Crafting Code, Designing Web, Exploring AI
                            <br />
                            Passionate About Algorithms and Innovation</span>
                            </h2>

                        <a
                            href="https://www.linkedin.com/in/rohit-yadav-6567a9321/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex text-white items-center px-6 py-3 font-medium rounded-lg hover:opacity-75 gap-2 bg-orange-600"
                            >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            LinkedIn Profile
                        </a>

                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-76  rounded-2xl" src={port1} alt="port1" />
                </div>
            </aside>
        </div>
    );
}