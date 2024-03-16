// eslint-disable-next-line no-unused-vars
import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import LoginPage from './pages/Register Login/LoginPage';
import PathPage from './pages/PathPage';
import SignUpPage from './pages/Register Login/RegisterForm';
import BlogPage from "./pages/BlogPage";
import LoginRegister from './pages/Register Login/LoginRegister';
import LearningPage from "./pages/LearningPage"


function App() {
  return <BrowserRouter >
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="signin" element={<LoginPage />} />
      <Route path="signup" element={<SignUpPage />} />
      <Route path="path" element={<PathPage />} />
      <Route path="blog" element={<LearningPage />} />
    </Routes>
  </BrowserRouter>

}

export default App;
