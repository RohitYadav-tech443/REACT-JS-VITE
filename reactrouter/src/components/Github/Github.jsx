import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData(); // { user, repos }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Profile Section */}
      <div className="text-center mb-8">
        <img
          src={data.user.avatar_url}
          alt="GitHub Avatar"
          width={150}
          className="mx-auto rounded-full border-4 border-blue-500 mb-4"
        />
        <h1 className="text-4xl font-bold">{data.user.name || data.user.login}</h1>
        <p className="text-gray-300 mt-1">{data.user.bio}</p>
        <p className="mt-2 text-gray-400">
          Public Repositories: <span className="font-semibold">{data.repos.length}</span>
        </p>
      </div>

      {/* Repositories Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.repos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition"
          >
            <h3 className="text-lg font-semibold mb-2">{repo.name}</h3>
            <p className="text-gray-400 text-sm h-16 overflow-hidden">
              {repo.description || "No description"}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Github;


export const githubInfoLoader = async () => {
  // Fetch user profile
  const userResponse = await fetch("https://api.github.com/users/RohitYadav-tech443");
  const userData = await userResponse.json();

  // Fetch repositories
  const reposResponse = await fetch(userData.repos_url);
  const reposData = await reposResponse.json();

  return { user: userData, repos: reposData };
};
