import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import style from './paginaPadrao.module.scss'
import Footer from '../footer';
import Card from '../card';

const PaginaPadrao = ()=>{
    return(
        <div className={style.container}>
            <Navbar/>
            <div className={style['container-outlet']}>
                <Outlet/>
            </div>
            <Card/>
            <Footer/>
        </div>
    )
}

export default PaginaPadrao;