import { useSelector } from 'react-redux'
import Header from '../../header'
import style from './carrinho.module.scss'
import Item from '../../item'
const Carrinho = ()=>{
    const carrinho = useSelector((state)=> {
        const carrinhoReducer = state.carrinho.reduce((itens, itemNoCarrinho)=>{
                const item = state.itens.find(item => item.id === itemNoCarrinho.id);
                itens.push({
                    ...item,
                    quantidade:itemNoCarrinho.quantidade
                });
                return itens;
        },[]);
        return carrinhoReducer
    })
    return(
        <div>
            <Header
                titulo='Carrinho de compras'
                descricao='Confira produtos que você adicionou ao carrinho.'
            />
    
        <div className={style.carrinho}>
            {carrinho.map(item => <Item key={item.id} {...item} carrinho/>)}
            <div className={style.total}>
                <strong>Resumo da compra</strong>
                <span>
                    Subtotal: <strong>R${0.0.toFixed(2)}</strong>
                </span>
            </div>
        </div>

        </div>
    )
}

export default Carrinho