import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import MainPage from "../../pages/main-page/main-page";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path = "/"
          element = {<MainPage/>}
          />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
