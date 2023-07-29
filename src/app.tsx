import { Route, RouterProvider, createBrowserRouter, createRoutesFromChildren } from "react-router-dom"
import Root from "./layout/root"
import Home from "./pages/home"
import Valores from "./pages/valores"
import Servicios from "./pages/servicios"
import Contactenos from "./pages/contactenos"

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/valores" element={<Valores />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contactenos" element={<Contactenos />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App