import style from './header.module.scss'
import TituloComImagem from './tituloComImagem'
import TituloSemImagem from './tituloSemImagem'

const Header = ({titulo, descricao, className= '',imagem})=>{

    return(
      
      <header className={style.header}>
          {titulo && !imagem 
            ? <TituloSemImagem titulo={titulo} descricao={descricao}/> 
            : <TituloComImagem titulo={titulo} descricao={descricao} imagem={imagem} className={className}/>
          }
      </header>
    )
}

export default Header