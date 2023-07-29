import { NavLink } from "react-router-dom"
import logo from '../assets/images/transtourLogo.png'

const Header = () => {
  return (
    <>
      <div className="bg-slate-100 p-4 border-b border-slate-200">
        <section className="mx-auto container text-sm text-slate-500  max-w-6xl flex gap-6">
          <p>transtourromasas@gmail.com</p>
          <p>Teléfono fijo: (604)7895588</p>
        </section>
      </div>
      <div className="flex justify-between mx-auto container max-w-6xl py-4">
        <div className="w-16 h-16"><img src={logo} alt="" /></div>
        <section className="flex font-bold text-slate-600 items-center">
          <NavLink className='duration-200 rounded hover:text-green-800 p-4 hover:bg-gray-100 hover:border-gray-300 border border-transparent' to='/'>INICIO</NavLink>
          <NavLink className='duration-200 rounded hover:text-green-800 p-4 hover:bg-gray-100 hover:border-gray-300 border border-transparent' to='/servicios'>NUESTROS SERVICIOS</NavLink>
          <div className='duration-200 rounded hover:text-green-800 p-4 hover:bg-gray-100 hover:border-gray-300 border border-transparent'>NOSOTROS</div>
          <NavLink className='duration-200 rounded hover:text-green-800 p-4 hover:bg-gray-100 hover:border-gray-300 border border-transparent' to='/contactenos'>CONTACTANOS</NavLink>
        </section>
      </div>
    </>
  )
}

export default Header