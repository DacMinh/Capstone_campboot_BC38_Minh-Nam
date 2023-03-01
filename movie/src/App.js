import {BrowserRouter,Route,Routes } from 'react-router-dom'
import {Home} from './features/booking/Home'
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' errorElement/>
   </Routes>
   
   </BrowserRouter>
  );
}

export default App;
