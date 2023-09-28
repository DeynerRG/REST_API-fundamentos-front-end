import { NavLink } from "react-router-dom"

function NavBar() {

  return (
    <nav className="flex gap-2 items-center">
        <NavLink
            className={({isActive})=> `px-2 py-1 font-semibold rounded-md ${ isActive ? 'text-cyan-500' : 'text-gray-400'}`}
            to={'/'}
        >
            Home
        </NavLink>
        <NavLink
            className={({isActive})=> `px-2 py-1 font-semibold rounded-md ${ isActive ? 'text-cyan-500' : 'text-gray-400'}`}
            to={'/contacto'}
        >
            Contacto
        </NavLink>
    </nav>
  )

}

export default NavBar