import { useSelector } from "react-redux"
import Header from "../../header"
import { useParams } from "react-router-dom";
import style from './categoria.module.scss'
import Item from "../../item";

const Categoria = ()=>{
    const {nomeCategoria} = useParams()
    const {categoria,itens} = useSelector(state=>({
        categoria: state.categorias.find(categoria=>categoria.id === nomeCategoria),
        itens: state.itens.filter(item=>item.categoria === nomeCategoria)
    }));
    return(
        <div>
            <Header
                titulo={categoria.nome}
                descricao={categoria.descricao}
                imagem={categoria.header}
            />
            <div className={style.itens}>
                {itens?.map((item)=>(//a interrogação é usada para que caso não tenha nenhum item ou nada sendo retornado, ele nem execute
                    <Item key={item.id} {...item}/>
                ))} 
            </div>
        </div>
    )
}

export default Categoria