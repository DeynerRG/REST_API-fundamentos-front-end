import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"

function Layout() {
  return (
    <div className="h-screen flex flex-col">
        <header className="flex justify-between p-5 w-full bg-white shadow-md">
          <h1 className="text-4xl font-bold text-cyan-500">Codey</h1>
          <NavBar />
        </header>
        <main className="bg-gray-200 h-full p-5">
          <Outlet/>
        </main>
    </div>
  )
}

export default Layout