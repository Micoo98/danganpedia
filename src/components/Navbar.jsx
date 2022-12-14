import React, {useEffect} from 'react';
import {AiOutlineMenu} from 'react-icons/ai';

import {useStateContext} from '../contexts/ContextProvider';

const NavButton = ({ customFunc, icon, color, dotColor}) => (
  <button type="button" onClick={customFunc} style={{ color }} className="relative text-xl rounded-full p-3 hover:bg-gray-200">
    <span style={{background:dotColor}} className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"/>
    {icon}
  </button>
)

const Navbar = () => {
  const {activeMenu, setActiveMenu, isClicked, setIsClicked, screenSize, setScreenSize} = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  },[]);

  useEffect(() => {
    if(screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="flex justify-between p-2 md:relative w-full fixed bg-gray-300">
      <NavButton customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} color="red" icon={<AiOutlineMenu/>} />
    </div>
  )
}

export default Navbar