import style from'./navbar.module.scss'
import 'magic.css/dist/magic.min.css';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import classNames from 'classnames';
import {
    RiShoppingCart2Line,
    RiShoppingCartFill
} from 'react-icons/ri'
import Busca from '../Busca'

import {Link,useLocation, useNavigate} from 'react-router-dom'

const iconeProps={
    color: 'white',
    size: 24
}

const Navbar = ()=>{
    const location = useLocation();
    const navigate = useNavigate()
    return(
        <>
            <nav className={style.nav}>
            <Logo className="style.logo magictime swap" onClick={()=>navigate(`/`)}/>
                <div className={style.links}>
                    <div>
                        <Link to='/' className={classNames(style.link,{[style.selected]:location.pathname==='/'})}>
                            Página Inicial

                        </Link>
                    </div>
                </div>
                <div className={style.busca}>
                    <Busca/>
                </div>
                <div className={style.icone}>
                    <Link to='/carrinho' >{location.pathname==='/carrinho' ?<RiShoppingCart2Line{...iconeProps}/>: <RiShoppingCartFill{...iconeProps}/>}</Link>
                </div>
            </nav>

        </>
    )
}

export default Navbar