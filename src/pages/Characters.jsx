import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { students } from '../data/DataEntries';
import { useStateContext } from '../contexts/ContextProvider';

const Characters = () => {
  const { subject, setStudentName } = useStateContext();

  return (
    <div className="flex m-2">

      {/* Danganronpa 1 */}
      {subject.d1 &&
      (<div>

        {/* text stuff */}
        <div className="absolute right-5">
          <div className="bg-gray-400 rounded-xl w-fit h-fit p-5">
          <span className="text-xl font-extrabold">Danganronpa: Trigger Happy Havoc</span>
          <p className="font-bold">Characters</p>
          </div>
          <div className="text-right mt-5 p-2 bg-gray-200 rounded-xl underline">
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
        <div className="absolute right-5">
          <div className="bg-gray-400 rounded-xl w-fit h-fit p-5">
          <span className="text-xl font-extrabold">Danganronpa 2: Goodbye Despair</span>
          <p className="font-bold">Characters</p>
          </div>
          <div className="text-right mt-5 p-2 bg-gray-200 rounded-xl underline">
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