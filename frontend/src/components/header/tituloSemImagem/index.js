import style from './tituloSemImagem.module.scss'
const TituloSemImagem = ({titulo, descricao})=>{
    return(
        <div className={style.container}>
      
        <h1 className={style.titulo}>{titulo}</h1>
        <h2  className={style.descricao}>{descricao}</h2>
     

    </div>
    )
}

export default TituloSemImagem