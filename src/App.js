
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Create from './component/Create';
import Read from './component/Read';
import Update from './component/Update';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Create' element={<Create />}></Route>
        <Route path='/Read/:id' element={<Read />}></Route>
        <Route path='/Update/:id' element={<Update />}></Route>

      </Routes>
    </BrowserRouter >
  );
}

export default App;
