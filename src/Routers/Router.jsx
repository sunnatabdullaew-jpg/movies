import { Route } from 'react-router-dom'
import App from '../App'
import { Routes } from 'react-router-dom'
import Cars from '../Components/Cars'
import Dashboard from '../Components/Dashboard'
import Product from '../Components/Product'

const Router = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/Cars' element={<Cars />} />
            <Route path='/Dashboard' element={<Dashboard/>} />
            <Route path='/Product' element= {<Product/>}/>
        </Routes>
    </div>
  )
}

export default Router