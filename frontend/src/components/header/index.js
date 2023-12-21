import style from './header.module.scss'

const Header = ({titulo, descricao, className= '',imagem})=>{
    return(
      <header className={style.header}>
        <div className={style['header-texto']}>
            <h1>{titulo}</h1>
            <h2>{descricao}</h2>
        </div>
        <div className={style['header-imagem']}>
            <img src={imagem}alt={titulo}/>
        </div>
      </header>
    )
}

export default Header