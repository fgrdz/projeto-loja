import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PaginaPadrao from './components/pages/paginaPadrao'
import Home from './components/pages/home'
const Router = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PaginaPadrao/>}>
                    <Route index element= {<Home/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router