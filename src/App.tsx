import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/home.page"
import AboutPage from "./pages/about.page"

function App() {
  return (
    <Routes>
      <Route path={"/"} Component={HomePage} />
      <Route path={"/about"} Component={AboutPage} />
    </Routes>
  )
}

export default App
