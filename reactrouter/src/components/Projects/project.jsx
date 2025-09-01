import React from 'react'

const Projects = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">🚀 Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Project 1 */}

          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Photo Uploader and Editor</h3>
            <p className="text-gray-600 mb-4">
              A web app to upload the photos and edit them using various tools.
            </p>
            <p className="text-sm text-gray-500 mb-4">Tech: React, TailwindCSS, Vite, Appwrite(for Backend support)</p>
            <div className="flex gap-4">
              <a
                href="https://github.com/RohitYadav-tech443/starter-for-react"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                GitHub
              </a>
              <a
                href="https://starter-for-react-eight.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline"
              >
                Live Demo
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">My Portfolio</h3>
            <p className="text-gray-600 mb-4">
              A personal portfolio website to showcase my projects and skills.
            </p>
            <p className="text-sm text-gray-500 mb-4">Tech: NextJS, MongoDB Atlas</p>
            <div className="flex gap-4">
              <a
                href="https://github.com/RohitYadav-tech443/mysterymessage"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                GitHub
              </a>
              <a
                href="https://your-todo-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline"
              >
                Live Demo
              </a>
            </div>
          </div>

          {/* Project 3*/}
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Photo Uploader and Editor</h3>
            <p className="text-gray-600 mb-4">
              A web app to upload the photos and edit them using various tools.
            </p>
            <p className="text-sm text-gray-500 mb-4">Tech: React, TailwindCSS, Vite, Appwrite(for Backend support)</p>
            <div className="flex gap-4">
              <a
                href="https://github.com/RohitYadav-tech443/starter-for-react"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                GitHub
              </a>
              <a
                href="https://starter-for-react-eight.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
