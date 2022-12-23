import React from 'react';

const Home = () => {
  return (
    <div className="m-auto md:w-2/3 w-3/4">

      {/* title */}
      <div>
        <p className="mt-5 text-5xl font-extrabold text-center">Welcome To Danganpedia!</p>
      </div>

      {/* body */}
      <div className="h-52 mt-5 p-2 rounded-md bg-gray-200 text-right">
      <p className="mb-2">This Website was made to test myself in using React. I do plan on filling out all the pages though as time goes on.</p>

      <p>I've tried to censor some information but there are still spoilers for the Danganronpa Series, this is the only warning.</p>
      </div>
    </div>
  )
}

export default Home