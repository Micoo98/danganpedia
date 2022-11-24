import React from 'react';

import trials from '../data/DataEntries';
import { useStateContext } from '../contexts/ContextProvider';

const Trial = () => {

  const {subject, trial} = useStateContext();
  return (
    <div className="text-3xl">Trial</div>
  )
}

export default Trial