
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from "./layouts/layout"
const index = () => {
  return (
    <div>
        
       <Routes>
        <Route  element={<Layout />}>

        <Route path='/' element={<Home />}/>
        </Route>
       </Routes>
       
    
    </div>
  )
}

export default index