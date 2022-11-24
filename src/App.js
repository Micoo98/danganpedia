import React, {useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Summary from './pages/Summary';
import Characters from './pages/Characters';
import Character from './pages/Character';
import Trials from './pages/Trials';
import Trial from './pages/Trial';

import {students} from './data/DataEntries';
import { useStateContext } from './contexts/ContextProvider';

import './App.css';

const App = () => {
  const { activeMenu } = useStateContext();
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative">
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div className={
            activeMenu ? 
            'bg-main-bg min-h-screen md:ml-72 w-full'
            : 'bg-main-bg min-h-screen w-full flex-2'
          }>
            <div className="mb-20 md:mb-0">
              <Navbar />
            </div>

            <div>
              <Routes>
                <Route path="/" element={<Home/>}/>

                {/* Trigger Happy Havoc */}
                <Route path="/Danganronpa 1/Summary" element={<Summary/>}/>
                <Route path="/Danganronpa 1/Characters" element={<Characters/>}/>
                <Route path="/Danganronpa 1/Trials" element={<Trials/>}/>
                <Route path="/Danganronpa 1/t1" element={<Trial/>}/>
                <Route path="/Danganronpa 1/t2" element={<Trial/>}/>
                <Route path="/Danganronpa 1/t3" element={<Trial/>}/>
                <Route path="/Danganronpa 1/t4" element={<Trial/>}/>
                <Route path="/Danganronpa 1/t5" element={<Trial/>}/>
                <Route path="/Danganronpa 1/t6" element={<Trial/>}/>

                {/* Goodbye Despair */}
                <Route path="/Danganronpa 2/Summary" element={<Summary/>}/>
                <Route path="/Danganronpa 2/Characters" element={<Characters/>}/>
                <Route path="/Danganronpa 2/Trials" element={<Trials/>}/>
                <Route path="/Danganronpa 2/t1" element={<Trial/>}/>
                <Route path="/Danganronpa 2/t2" element={<Trial/>}/>
                <Route path="/Danganronpa 2/t3" element={<Trial/>}/>
                <Route path="/Danganronpa 2/t4" element={<Trial/>}/>
                <Route path="/Danganronpa 2/t5" element={<Trial/>}/>
                <Route path="/Danganronpa 2/t6" element={<Trial/>}/>

                {/* DV3 */}
                <Route path="/Danganronpa 3/Summary" element={<Summary/>}/>
                <Route path="/Danganronpa 3/Characters" element={<Characters/>}/>
                <Route path="/Danganronpa 3/Trials" element={<Trials/>}/>

                {/* Characters */}
                {students.map((game) => (
                  game.danganronpa1.map((d1) => (
                    <Route path={`/Danganronpa 1/${d1.name}`}
                    element={<Character/>}/>
                  ))
                ))}
                {students.map((game) => (
                  game.danganronpa2.map((d2) => (
                    <Route path={`/Danganronpa 2/${d2.name}`}
                    element={<Character/>}/>
                  ))
                ))}
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
