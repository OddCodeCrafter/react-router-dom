import { Link, useLoaderData } from "react-router-dom";

export const githubInfo = async () => {
  const response = await fetch("https://api.github.com/users/blur10");
  const data = response.json();
  console.log(data);

  return data;
};

const Github = () => {
  const data = useLoaderData();
  return (
    <div className="flex justify-around w-4/5 mx-auto py-20 px-10">
      <div>
        <img
          className=" rounded-full"
          src={data.avatar_url}
          alt="Profile Image"
          width="250px"
        />
      </div>
      <div className="mr-28 text-4xl self-center font-semibold space-y-3">
        <h1>{data.name}</h1>
        <h1>Username: {data.login}</h1>
        <h1 onChange={(e) => e.target.value}>Followers: {data.followers}</h1>
        <h1>Location: {data.location}</h1>
        <h1>
          <Link
            to={data.html_url}
            className="text-orange-700 transition-all duration-0 hover:underline hover:duration-300"
          >
            Visit My Profile
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Github;
