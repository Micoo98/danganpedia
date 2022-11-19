import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { students } from '../data/DataEntries';
import { useStateContext } from '../contexts/ContextProvider';

const Characters = () => {
  const { subject, setStudentName } = useStateContext();

  return (
    <div>

      {/* Danganronpa 1 */}
      {subject.d1 &&
      (<div>

        {/* text stuff */}
        <div className="m-auto md:w-2/3 w-3/4">

          {/* title */}
          <div className="bg-gray-400 rounded-xl h-fit p-5 my-5 text-right">
          <span className="text-xl font-extrabold">Danganronpa: Trigger Happy Havoc</span>
          <p className="font-bold">Characters</p>
          </div>

          {/* list */}
          <div className="p-2 bg-gray-200 rounded-md underline text-center">
            <ul>
              {students.map((item) => (
                item.danganronpa1.map((d1) => (
                  <NavLink
                  to={`/Danganronpa 1/${d1.name}`}
                  key={d1.name}>
                    <li className="mb-2" onClick={() => setStudentName(d1)}>{d1.name}</li>
                  </NavLink>
                ))
              ))}
            </ul>
          </div>
        </div>
      </div>)}

      {/* Danganronpa 2 */}
      {subject.d2 &&
      (<div>

        {/* text stuff */}
        <div className="m-auto md:w-2/3 w-3/4">

          {/* title */}
          <div className="bg-gray-400 rounded-xl h-fit p-5 my-5 text-right">
          <span className="text-xl font-extrabold">Danganronpa 2: Goodbye Despair</span>
          <p className="font-bold">Characters</p>
          </div>

          {/* list */}
          <div className="p-2 bg-gray-200 rounded-md underline text-center">
            <ul>
              {students.map((item) => (
                item.danganronpa2.map((d2) => (
                  <NavLink
                  to={`/Danganronpa 2/${d2.name}`}
                  key={d2.name}>
                    <li className="mb-2" onClick={() => setStudentName(d2)}>{d2.name}</li>
                  </NavLink>
                ))
              ))}
            </ul>
          </div>
        </div>
      </div>)}
    </div>
  )
}

export default Characters