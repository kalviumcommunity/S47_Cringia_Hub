// import './App.css'
// import Home from './components/Home'
// import Footer from './components/Footer'
// import Navbar from './components/Navbar'
// import { Link, Route, Router, Routes } from 'react-router-dom'

// function App() {
//   return (
//     <>
//     <Router>
//       <Link to="/">Home</Link>

//     <Routes>
//       <Route path="/" element={
//       <>
//     <Navbar />
//     <Home />
//     <Footer />
//       </>} />
//     </Routes>
//     </Router>


//     </>
//   )
// }

// export default App


import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
// import Get from './pages/Usercard';
import Form from './components/Form';
import Usercard from './pages/Usercard';
import Updateuser from './pages/Update';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/get">Feedback</Link>
        <Link to='/login'>Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<>
          <Navbar />
          <Home />
          <Footer />
        </>} />
        <Route path="/get" element={<Usercard />} />
        <Route path="/update/:id" element={<Updateuser />} />
        {/* <Route path='/userCard' element={<Usercard />} /> */}
        <Route path='/login' element={<Form/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
