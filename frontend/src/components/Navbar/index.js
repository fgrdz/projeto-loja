import style from'./navbar.module.scss'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import classNames from 'classnames'
import {
    RiShoppingCart2Line,
    RiShoppingCartFill
} from 'react-icons/ri'
import Busca from '../Busca'
const iconeProps={
    color: 'white',
    size: 24
}
const Navbar = ()=>{
    return(
        <>
            <nav className={style.nav}>
                <Logo className={style.logo}/>
                <div className={style.links}>
                    <div>
                        <a href='/' className={classNames(style.link,{[style.selected]:window.location.pathname==='/'})}>
                            Página Inicial

                        </a>
                    </div>
                </div>
                <div className={style.busca}>
                    <Busca/>
                </div>
                <div className={style.icone}>
                    <a href='/carrinho' >{window.location.pathname==='/carrinho' ?<RiShoppingCart2Line{...iconeProps}/>: <RiShoppingCartFill{...iconeProps}/>}</a>
                </div>
            </nav>

        </>
    )
}

export default Navbar