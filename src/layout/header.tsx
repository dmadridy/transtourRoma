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
        <section className="flex font-bold text-slate-600 gap-8 items-center">
          <NavLink to='/'>NUESTROS SERVICIOS</NavLink>
          <NavLink to='/nosotros'>NOSOTROS</NavLink>
          <NavLink to='/contactanos'>CONTACTANOS</NavLink>
        </section>
      </div>
    </>
  )
}

export default Header