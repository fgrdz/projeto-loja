import style from './tituloComImagem.module.scss'
const TituloComImagem = ({titulo, descricao, className= '',imagem})=>{
    return(
        <div className={`${className} ${style.header}`}>
        <div className={style['header-texto']}>
            <h1>{titulo}</h1>
            <h2>{descricao}</h2>
        </div>
        <div className={style['header-imagem']}>
            <img src={imagem}alt={titulo}/>
        </div>
    </div>
    )
}

export default TituloComImagem