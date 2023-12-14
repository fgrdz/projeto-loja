import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import style from './home.module.scss'
import Footer from '../footer';
const Home = ()=>{
    return(
        <div className={style.container}>
            <Navbar/>
            <div className={style['container-outlet']}>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;