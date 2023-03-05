import {BrowserRouter,Route,Routes } from 'react-router-dom'
import {Home} from './features/booking/Home'
import {routers} from './app/routes'


function App() {
  return (
   <BrowserRouter>
   <Routes>
    {routers.map(({path, componet:Component,children}) =>{
      return <Route path={path} element ={<Component/>}/>
      {children?.map ((item)=> {return <Route/>});}
    })}
   </Routes>
   
   </BrowserRouter>
  );
}

export default App;
