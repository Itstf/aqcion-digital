import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogDetails from './components/BlogDetails';
import SignUp from './components/Signup';
import SignIn from './components/Signin';
import AqcionD from './components/AqcionD';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<AqcionD />} />
        <Route path='/blog' element={<BlogDetails />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/SignIn' element={<SignIn />} />
      </Routes>
    </Router>

  </>
  );
}

export default App;
