import React from 'react';
import { NavLink } from 'react-router-dom';

import { trials } from '../data/DataEntries';
import { useStateContext } from '../contexts/ContextProvider';

const Trials = () => {
  const { subject, trialClick } = useStateContext();
  return (
    <div>

      {subject.d1 &&
      (<div>

        {/* text stuff */}
        <div className="m-auto md:w-2/3 w-3/4">

          {/* title */}
          <div className="bg-gray-400 rounded-xl h-fit p-5 my-5 text-right">
            <span className="text-xl font-extrabold">Danganronpa: Trigger Happy Havoc</span>
            <p className="text-lg font-semibold">Trials</p>
          </div>

          {/* table */}
          <div className="bg-gray-200 rounded-md h-fit p-5 my-5">
            <table className="mx-auto border-spacing-5 text-center bg-white">
              <tr>
                <th>Trial Number</th>
                <th>Victim</th>
                <th>Blackened</th>
              </tr>
              {trials.map((item) => (
                item.danganronpa1.map((d1) => (
                  <tr className="hover:bg-gray-400 hover:text-black" onClick={() => trialClick(d1.id)}>
                    <th className="underline">
                      <NavLink
                      to={`/Danganronpa 1/${d1.id}`}
                      key={d1.id}
                      onClick={() => trialClick(d1.id)}>
                        {d1.name}
                      </NavLink>
                    </th>
                    <td>{d1.victim}</td>
                    <td>{d1.blackened}</td>
                  </tr>
                ))
              ))}
            </table>
          </div>
        </div>
      </div>)}

      {subject.d2 &&
      (<div>

        {/* text stuff */}
        <div className="m-auto md:w-2/3 w-3/4">

          {/* title */}
          <div className="bg-gray-400 rounded-xl h-fit p-5 my-5 text-right">
            <span className="text-xl font-extrabold">Danganronpa 2: Goodbye Despair</span>
            <p className="text-lg font-semibold">Trials</p>
          </div>

          {/* table */}
          <div className="bg-gray-200 rounded-md h-fit p-5 my-5">
            <table className="mx-auto border-spacing-5 text-center bg-white">
              <tr>
                <th>Trial Number</th>
                <th>Victim</th>
                <th>Blackened</th>
              </tr>
              {trials.map((item) => (
                item.danganronpa2.map((d2) => (
                  <tr className="hover:bg-gray-400 hover:text-black" onClick={() => trialClick(d2.id)}>
                    <th className="underline">
                      <NavLink
                      to={`/Danganronpa 1/${d2.id}`}
                      key={d2.id}
                      onClick={() => trialClick(d2.id)}>
                        {d2.name}
                      </NavLink>
                    </th>
                    <td>{d2.victim}</td>
                    <td>{d2.blackened}</td>
                  </tr>
                ))
              ))}
            </table>
          </div>
        </div>
      </div>)}
    </div>
  )
}

export default Trials