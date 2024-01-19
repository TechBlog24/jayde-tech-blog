import './App.css';
import Post from './components/post';
import Header from './components/header';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import Homepage from './pages/homepage';
import Loginpage from './pages/loginpage';
import Registerpage from './pages/registerpage';


function App() {
  return (
<Routes>
<Route path = "/" element = {<Layout/>}>
<Route index element = {<Homepage/>}/>
<Route path = "/loginpage" element = {<Loginpage/>}/>
<Route path = "/registerpage" element = {<Registerpage/>}/>
</Route>
</Routes>
  );
}

export default App;
