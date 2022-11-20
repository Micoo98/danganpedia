import React from 'react';

import { trials } from '../data/DataEntries';
import { useStateContext } from '../contexts/ContextProvider';

const Trials = () => {
  const { subject } = useStateContext();
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
            <table className="mx-auto border-spacing-5 text-center">
              <tr>
                <th>Trial Number</th>
                <th>Victim</th>
                <th>Blackened</th>
              </tr>
              {trials.map((item) => (
                item.danganronpa1.map((d1) => (
                  <tr>
                    <th>{d1.name}</th>
                    <td>{d1.victim}</td>
                    <td>{d1.blackened}</td>
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