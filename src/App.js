
import './App.css';
import DefaultLayout from './layouts/default';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/home';
import Login from './pages/login';
import AddQuestion from './pages/AddQuestion';
import List from './pages/list';

function App() {
  const user = useSelector(state => state.user);

  return (
    <DefaultLayout>
      <Routes>
        {
          user.isAuth ? 
            <>
              <Route path="/" element={<Home />} />
              <Route path="/add-question" element={<AddQuestion />} />
              <Route path="/list-question" element={<List />} />
            </>
            :
            <>
              <Route path="/" element={<Login />} />
            </>
        }

      </Routes>
      <ToastContainer />
    </DefaultLayout>
  );
}

export default App;
