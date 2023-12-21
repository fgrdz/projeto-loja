import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PaginaPadrao from './components/pages/paginaPadrao'
import Home from './components/pages/home'
import Categoria from './components/pages/categoria'
const Router = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PaginaPadrao/>}>
                    <Route index element= {<Home/>}/>
                    <Route path='/categoria/:nomeCategoria' element={<Categoria/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router