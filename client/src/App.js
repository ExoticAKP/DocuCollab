import logo from './logo.svg';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Editor from './components/Editor';
import { ToastBar, Toaster } from 'react-hot-toast';
function App() {
  return (
    
   
       <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/editor' element={<Editor/>}/>
      </Routes>
    </Router>
   
  );
}

export default App;
