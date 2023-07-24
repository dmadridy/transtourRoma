import { NavLink } from "react-router-dom"
import logo from '../assets/images/transtourLogo.png'

const Header = () => {
  return (
    <>
      <div className="bg-neutral-200 h-10"></div>
      <div className="flex justify-between mx-auto container max-w-6xl py-4">
        <div className="w-16 h-16"><img src={logo} alt="" /></div>
        <section className="flex gap-8 items-center">
          <NavLink to='/'>NUESTROS SERVICIOS</NavLink>
          <NavLink to='/nosotros'>NOSOTROS</NavLink>
          <NavLink to='/contactanos'>CONTACTANOS</NavLink>
        </section>
      </div>
    </>
  )
}

export default Header