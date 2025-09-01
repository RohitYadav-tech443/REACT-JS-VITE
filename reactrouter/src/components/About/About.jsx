import React from 'react';
import image from '../../assets/image.jpg';

export default function About() {
    return (
       <div className="py-16 bg-cover bg-center"
            style={{
                className: "absolute inset-0 bg-cover bg-center opacity-30",
                backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/002/202/047/small_2x/blue-high-tech-futuristic-cyberspace-technology-background-free-vector.jpg')",
            }}
            >
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="relative z-10 text-center space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/20 lg:w-5/20">
                        <img
                            className='rounded-2xl'
                            src={image}
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-white fontd md:text-4xl">
                            Professional Summary
                        </h2>
                        <p className="mt-6 text-white">
                            I am currently a third-year B.Tech student at Kamla Nehru Institute of Technology with a strong academic record, maintaining an 8.5+ CGPA over the first two years. I have a keen interest in the tech field, with solid knowledge of Data Structures & Algorithms and web development. I am also exploring and learning about Generative AI. I am passionate about applying my skills to real-world projects and am currently seeking internship opportunities to gain hands-on experience and contribute to innovative technology solutions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
  }