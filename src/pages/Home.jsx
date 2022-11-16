import React from 'react';

const Home = () => {
  return (
    <div>
      <div>
        <p className="text-5xl font-extrabold text-center">Welcome To Danganpedia!</p>
        <p className="text-right text-sm font-semibold">V.001</p>
      </div>
      <div className="items-center flex w-1/2 h-52 m-5 rounded-md bg-gray-200">
        <div className="bg-gray-400 right-1/2 absolute rounded-lg px-2">
          <span className="text-center">This is a thing I made.</span>
        </div>
      </div>
    </div>
  )
}

export default Home