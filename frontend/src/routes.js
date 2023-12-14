import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/home'
const Router = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}>
                    <Route index element= {<div>home</div>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router