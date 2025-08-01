import { Route, Routes } from "react-router-dom"
import LoginPage from "./pages/LoginPage/LoginPage"
import RegisterPage from "./pages/RegisterPage/RegisterPage"
import HomePage from "./pages/HomePage/HomePage"
import Header from "./components/Header"
import CreatePostPage from "./pages/CreatePostPage/CreatePostPage"
import ProfilePage from "./pages/ProfilePage/ProfilePage"
import RequireRoute from "./components/RequireRoute"

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/create" element={
          <RequireRoute>
            <CreatePostPage />
          </RequireRoute>
          } />
        <Route path="/profile" element={
          <RequireRoute>
            <ProfilePage />
          </RequireRoute>
          } />
      </Routes>
    </>
  )
}

export default App
