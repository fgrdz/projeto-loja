import style from './item.module.scss'
import classNames from 'classnames';
import {
    FaCartPlus
  } from 'react-icons/fa';

  import {
    AiOutlineHeart,
    AiFillHeart,
  } from 'react-icons/ai';
import { mudarFavorito } from '../../store/reducers/itensReducers';
import { useDispatch, useSelector } from 'react-redux';
import { mudarCarrinho } from '../../store/reducers/carrinhoReducer';

  const iconeProps = {
    size: 24,
    color: '#041833',
  };

  
const Item =(props)=>{
    const {
        titulo, foto, preco, descricao, id, favorito,carrinho
    } = props;
const dispatch = useDispatch();
const estaNoCarrinho = useSelector(state => state.carrinho.some(itemNocarrinho=> itemNocarrinho.id === id))

function resolverFavorito() {
      dispatch(mudarFavorito(id));
    }

function resolverCarrinho(){
    dispatch(mudarCarrinho(id));
}
return(
        <div className={classNames(style.item, {
            [style.itemNoCarrinho]: carrinho,
        	})}>
            <div className={style['item-imagem']}>
                <img src={foto} alt={titulo}/>
            </div>
            <div className={style['item-descricao']}>
                <div className={style['item-titulo']}>
                   <h2>{titulo}</h2> 
                   <p>{descricao}</p>

                </div>
                <div className={style['item-info']}>
                    <div className={style['item-preco']}>
                        R${preco.toFixed(2)}
                    </div>
                    <div className={style['item-acoes']}>
                    {favorito
                        ? <AiFillHeart {...iconeProps} color='#ff0000' className={style['item-acao']} onClick={resolverFavorito}  />
                        : <AiOutlineHeart {...iconeProps} className={style['item-acao']}  onClick={resolverFavorito}  />
                        }
                        <FaCartPlus
                        {...iconeProps}
                        color={estaNoCarrinho ? '#1875E8' : iconeProps.color}
                        className={style['item-acao']}
                        onClick={resolverCarrinho}
                        />                    
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Item