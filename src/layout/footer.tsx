import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <div className="bg-slate-700 p-12">
      <div className="mx-auto container max-w-6xl">
        <div className="grid grid-cols-3 gap-24">
          <section>
            <img src="" alt="" />
          </section>
          <section className="text-gray-300">
            <h1 className="text-white font-bold mb-4">QUIENES SOMOS</h1>
            <p className="text-sm mb-4">TRANSTOUR ROMA SAS, es una empresa dedicada al servicio del transporte especial de pasajeros, Empresarial, Turístico, Escolar, Usuarios de la Salud, de carga y a la operación logística en general.</p>
            <p className="font-bold text-sm">Leer mas</p>
          </section>
          <section className="text-gray-300">
            <h1 className="text-white font-bold mb-4">CONTACTENOS</h1>
            <p className="text-sm">Calle 42 No. 14B Bis-58 Urbanización Versalles</p>
            <p className="text-sm">Teléfono fijo: (604)7895588 <br />Celular Nos: 313 546 5610-3008888768-3206515005 <br />transtourromasas@gmail.com</p>
          </section>
        </div>
        <div className="justify-between flex">
          <p>Logo</p>
          <section>
            <NavLink to='/servicios'>NUESTROS SERVICIOS</NavLink>
            <NavLink to='/nosotros'>NOSOTROS</NavLink>
            <NavLink to='/contactenos'>CONTACTENOS</NavLink>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Footer