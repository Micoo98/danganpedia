import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { MdOutlineCancel } from 'react-icons/md';

import { links } from '../data/pageMeta';
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, setSubject, subjectClick } = useStateContext();

  const handleCloseSideBar = () => {
    if(activeMenu && screenSize <= 900) {
      setActiveMenu(false)
    }
  }

  const activeLink = 'flex items-center gap-5 pl-2 pt-3 rounded-lg text-red text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-2 pt-3 rounded-lg text-gray-700 text-md m-2';

  return (
    <div className='h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 bg-gray-200 drop-shadow-lg'>
      {activeMenu && (<>
        {/* Top of Sidebar */}
        <div className="ml-3 mt-5 flex justify-between items-center">
          <Link to="/" onClick={handleCloseSideBar} className="items-center flex text-xl font-extrabold tracking-tight">
            <span>Danganpedia</span>
          </Link>
          <button
          type="button"
          onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
          className="text-xl rounded-full hover:bg-light-gray block md:hidden">
            <MdOutlineCancel/>
          </button>
        </div>
        {/* links */}
        <div className="mt-5">
          {links.map((item) => (
            <div key={item.title}>
              <p className="w-full pl-2 font-bold bg-main-dark-bg text-white">
                {item.title}
              </p>
              {item.links.map((link) => (
                <NavLink
                to={`/${item.title}/${link.name}`}
                key={link.name}
                onClick={() => {handleCloseSideBar(); subjectClick(link.game)}}
                className={({isActive}) => isActive ? activeLink: normalLink}>
                  <span className="capitalize text-white bg-secondary-dark-bg rounded-xl pl-2 pr-2">{link.name}
                  </span>
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      </>)}
    </div>
  )
}

export default Sidebar