import Header from './header'
import Footer from './footer'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <div className='grow'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Root