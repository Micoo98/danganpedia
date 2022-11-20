import React from 'react';

import { useStateContext } from '../contexts/ContextProvider';

const Summary = () => {
  const { subject } = useStateContext();
  return (
    <div>

      {subject.d1 && 
      (<div>

        {/* text stuff */}
        <div className="m-auto md:w-2/3 w-3/4">

          {/* title */}
          <div className="bg-gray-400 rounded-xl h-fit p-5 my-5 text-center">
            <span className="text-2xl font-extrabold">Danganronpa: Trigger Happy Havoc</span>
          </div>

          {/* text */}
          <div className="p-2 bg-gray-200 rounded-md text-right">
            <p>This is the first game in the francise.</p>
          </div>
        </div>
      </div>
      )}

      {/* Danganronpa 2 */}
      {subject.d2 && 
      (<div>

        {/* text stuff */}
        <div className="m-auto md:w-2/3 w-3/4">

          {/* title */}
          <div className="bg-gray-400 rounded-xl h-fit p-5 my-5 text-center">
            <span className="text-2xl font-extrabold">Danganronpa 2: Goodbye Despair</span>
          </div>

          {/* text */}
          <div className="p-2 bg-gray-200 rounded-md text-right">
            <p>This is the second game in the francise.</p>
          </div>
        </div>
      </div>
      )}
    </div>
  )
}

export default Summary