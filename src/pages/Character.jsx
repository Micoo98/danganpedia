import React from 'react';

import {students} from '../data/DataEntries';
import {useStateContext} from '../contexts/ContextProvider';

const Character = () => {
  const { subject, studentName } = useStateContext();
  const selectedStudent = undefined;

  return (
    <div>
      <div className="text-2xl font-bold text-center mt-5">
        {studentName.name}
      </div>
      {studentName.summary()}
    </div>
  )
}

export default Character