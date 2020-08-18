import React from 'react';
import Menu from './components/Menu';
import Repos from "./components/Repos";
import ReposCount from "./components/ReposCount";

function App() {
  return (
   <>
     <Menu />
     <Repos/>
     <ReposCount />
   </>
  );
}

export default App;
