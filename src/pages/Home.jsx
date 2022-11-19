import React from 'react';

const Home = () => {
  return (
    <div className="m-auto md:w-2/3 w-3/4">

      {/* title */}
      <div>
        <p className="mt-5 text-5xl font-extrabold text-center">Welcome To Danganpedia!</p>
      </div>

      {/* body */}
      <div className="h-52 mt-5 p-2 rounded-md bg-gray-200">
      <span className="text-right">This is a thing I made.</span>
      </div>
    </div>
  )
}

export default Home